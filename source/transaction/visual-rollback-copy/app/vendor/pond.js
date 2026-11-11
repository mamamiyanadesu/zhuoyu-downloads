const canvas = document.getElementById('wallpaper-canvas');
const ctx = canvas.getContext('2d');

let config = {
    fishCount: 15,
    waterHue: 195,
    fishSpeed: 1.5,
    enableCaustics: true,
    enableFeeding: true,
    shyFish: true,
    fishTheme: 0,
    fishSize: 1.0,
    rippleStrength: 1.0
};

const FOOD_DETECT_RADIUS_SQ = 90000;
const EAT_RADIUS_SQ = 400;
const FEAR_RADIUS_SQ = 40000;

let width, height;
function resize() {
    let dpr = window.devicePixelRatio || 1;
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);
}
window.addEventListener('resize', resize);
resize();

let kois = [];
let foods = [];
let ripples = [];
let causticTime = 0;

let mouse = { x: null, y: null, active: false };
function isPondInput(e) { return !pondPaused && config.enableFeeding && !e.target?.closest?.('[data-widget]'); }
window.addEventListener('mousemove', (e) => {
    if (!isPondInput(e)) { mouse.active = false; return; }
    mouse.x = e.clientX;
    mouse.y = e.clientY;
    mouse.active = true;
    
    if (Math.random() < 0.1) {
        ripples.push(new Ripple(mouse.x, mouse.y, 0.5 * config.rippleStrength));
    }
});
window.addEventListener('mouseout', () => { mouse.active = false; });

window.addEventListener('click', (e) => {
    if (!isPondInput(e)) return;
    if (config.enableFeeding) {
        foods.push(new Food(e.clientX, e.clientY));
    }
    ripples.push(new Ripple(e.clientX, e.clientY, 1.5 * config.rippleStrength));
});

// FPS cap in frames per second. 0 = uncapped (monitor refresh rate).
// Wallpaper Engine sets this via applyGeneralProperties.
let fpsLimit = 0;
let fpsAccumulator = 0;
let elapsedSinceRender = 0;

window.wallpaperPropertyListener = {
    applyGeneralProperties: function(properties) {
        if (properties.fps !== undefined) {
            const value = Number(properties.fps);
            fpsLimit = Number.isFinite(value) && value > 0 ? value : 0;
            fpsAccumulator = 0;
        }
    },
    applyUserProperties: function(properties) {
        if (properties.fishCount !== undefined) {
            config.fishCount = properties.fishCount.value;
            syncKois();
        }
        if (properties.waterHue !== undefined) {
            config.waterHue = properties.waterHue.value;
            document.body.style.backgroundColor = `hsl(${config.waterHue}, 75%, 18%)`;
        }
        if (properties.fishSpeed !== undefined) {
            config.fishSpeed = properties.fishSpeed.value;
        }
        if (properties.enableCaustics !== undefined) {
            config.enableCaustics = properties.enableCaustics.value;
        }
        if (properties.enableFeeding !== undefined) {
            config.enableFeeding = properties.enableFeeding.value;
        }
        if (properties.shyFish !== undefined) {
            config.shyFish = properties.shyFish.value;
        }
        if (properties.fishTheme !== undefined) {
            config.fishTheme = properties.fishTheme.value;
            kois.forEach(k => k.updateColorTheme());
        }
        if (properties.fishSize !== undefined) {
            config.fishSize = properties.fishSize.value;
        }
        if (properties.rippleStrength !== undefined) {
            config.rippleStrength = properties.rippleStrength.value;
        }
    }
};





function distanceSq(a, b) {
    let dx = a.x - b.x;
    let dy = a.y - b.y;
    return dx * dx + dy * dy;
}

const FISH_BASE_SIZES = [12, 14, 15, 14, 12, 9, 6, 4, 3, 2, 1, 1];

class Ripple {
    constructor(x, y, power) {
        this.x = x;
        this.y = y;
        this.radius = 1;
        this.power = power;
        this.maxRadius = power * 100;
        this.life = 1;
    }
    update(dt) {
        let dtMult = dt * 60;
        this.radius += 1 * this.power * dtMult;
        this.life -= 0.01 * dtMult;
    }
    draw(ctx) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(255, 255, 255, ${this.life * 0.3})`;
        ctx.lineWidth = 2 * this.life;
        ctx.stroke();
    }
}

class Food {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.radius = 3;
        this.life = 1000;
    }
    update(dt) {
        let dtMult = dt * 60;
        this.life -= 1 * dtMult;
    }
    draw(ctx) {
        ctx.shadowBlur = 5;
        ctx.shadowColor = 'rgba(0,0,0,0.5)';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = '#f4a460';
        ctx.fill();
        ctx.shadowBlur = 0;
    }
}

class Koi {
    constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 1;
        this.vy = (Math.random() - 0.5) * 1;
        this.baseSpeed = 0.4 + Math.random() * 0.4;
        this.maxForce = 0.03;
        
        this.updateColorTheme();
        this.spotColor = Math.random() > 0.5 ? '#222' : '#fff'; 
        
        this.segments = [];
        this.numSegments = 12;
        for (let i = 0; i < this.numSegments; i++) {
            this.segments.push({ x: this.x, y: this.y });
        }
        this.angle = Math.atan2(this.vy, this.vx);
        this.swimCycle = Math.random() * Math.PI * 2;
        this.fedTimer = 0;
    }

    updateColorTheme() {
        let colors;
        if (config.fishTheme === 0) {
            colors = ['#d98255', '#eeeae0', '#d6b96b', '#bc644d'];
        } else if (config.fishTheme === 1) {
            colors = ['#00ffcc', '#ff00ff', '#ccff00', '#00ccff'];
        } else {
            colors = ['#ffffff', '#cccccc', '#999999', '#666666'];
        }
        this.color = colors[Math.floor(Math.random() * colors.length)];
    }

    update(dt) {
        let dtMult = dt * 60;
        if (this.fedTimer > 0) this.fedTimer -= dtMult;

        let target = null;
        let minDistSq = Infinity;
        for (let i = 0; i < foods.length; i++) {
            let dSq = distanceSq(this, foods[i]);
            if (dSq < minDistSq) {
                minDistSq = dSq;
                target = foods[i];
            }
        }

        let ax = 0, ay = 0;
        let effectiveBaseSpeed = this.baseSpeed * config.fishSpeed;
        let avoidForceApplied = false;

        if (target && minDistSq < FOOD_DETECT_RADIUS_SQ) {
            let truedirX = target.x - this.x;
            let truedirY = target.y - this.y;
            let dirLen = Math.sqrt(truedirX * truedirX + truedirY * truedirY);
            if (dirLen > 0) {
                let desiredX = (truedirX / dirLen) * effectiveBaseSpeed * 2;
                let desiredY = (truedirY / dirLen) * effectiveBaseSpeed * 2;
                
                ax = (desiredX - this.vx) * this.maxForce * 2;
                ay = (desiredY - this.vy) * this.maxForce * 2;
            }
            
            if (minDistSq < EAT_RADIUS_SQ) {
                foods.splice(foods.indexOf(target), 1);
                ripples.push(new Ripple(this.x, this.y, 0.8 * config.rippleStrength));
                this.fedTimer = 180;
            }
        } else {
            if (this.fedTimer <= 0 && config.shyFish && mouse.active) {
                let dMouseSq = distanceSq(this, mouse);
                if (dMouseSq < FEAR_RADIUS_SQ) {
                    let avoidX = this.x - mouse.x;
                    let avoidY = this.y - mouse.y;
                    let avoidLen = Math.sqrt(avoidX * avoidX + avoidY * avoidY);
                    
                    if (avoidLen > 0) {
                        let desiredX = (avoidX / avoidLen) * effectiveBaseSpeed * 2.5;
                        let desiredY = (avoidY / avoidLen) * effectiveBaseSpeed * 2.5;
                        
                        ax = (desiredX - this.vx) * this.maxForce * 3;
                        ay = (desiredY - this.vy) * this.maxForce * 3;
                        avoidForceApplied = true;
                    }
                }
            }
            
            if (!avoidForceApplied) {
                let wanderAngle = (Math.random() - 0.5) * 0.5 * dtMult;
                let curAngle = Math.atan2(this.vy, this.vx) + wanderAngle;
                
                this.vx = Math.cos(curAngle) * effectiveBaseSpeed;
                this.vy = Math.sin(curAngle) * effectiveBaseSpeed;
            }
        }

        let margin = 100;
        let turn = 0.1;
        
        if (target && minDistSq < FOOD_DETECT_RADIUS_SQ) {
            margin = 0;
        }

        if (this.x < margin) ax += turn;
        if (this.x > width - margin) ax -= turn;
        if (this.y < margin) ay += turn;
        if (this.y > height - margin) ay -= turn;

        // Hard boundary push for extreme resizes
        if (this.x < -150) this.x = -150;
        if (this.x > width + 150) this.x = width + 150;
        if (this.y < -150) this.y = -150;
        if (this.y > height + 150) this.y = height + 150;

        this.vx += ax * dtMult;
        this.vy += ay * dtMult;

        let speedSquared = this.vx * this.vx + this.vy * this.vy;
        let cSpeed = Math.sqrt(speedSquared);
        
        let currentMax = effectiveBaseSpeed;
        if (target && minDistSq < FOOD_DETECT_RADIUS_SQ) {
            currentMax = effectiveBaseSpeed * 2;
        } else if (avoidForceApplied) {
            currentMax = effectiveBaseSpeed * 2.5;
        }
        
        if (cSpeed > currentMax) {
            this.vx = (this.vx / cSpeed) * currentMax;
            this.vy = (this.vy / cSpeed) * currentMax;
        }

        this.x += this.vx * dtMult;
        this.y += this.vy * dtMult;
        
        this.swimCycle += cSpeed * 0.1 * dtMult;
        let wiggle = Math.sin(this.swimCycle) * 0.2;

        this.angle = Math.atan2(this.vy, this.vx) + wiggle;

        this.segments[0].x = this.x;
        this.segments[0].y = this.y;
        
        let currentSpacing = 5 * config.fishSize;
        for (let i = 1; i < this.numSegments; i++) {
            let prev = this.segments[i - 1];
            let curr = this.segments[i];
            
            let dx = prev.x - curr.x;
            let dy = prev.y - curr.y;
            let dist = Math.sqrt(dx * dx + dy * dy);
            
            if (dist > 0) {
                curr.x = prev.x - (dx / dist) * currentSpacing;
                curr.y = prev.y - (dy / dist) * currentSpacing;
            }
        }
    }

    draw(ctx) {
        // Continuous tapered silhouette; the original swim/feeding model is unchanged.
        const size = config.fishSize;
        const head = this.segments[0];
        const angle = Math.atan2(this.segments[0].y-this.segments[2].y, this.segments[0].x-this.segments[2].x);
        const points = this.segments.map((p,i) => {
            const prev=this.segments[Math.max(0,i-1)], next=this.segments[Math.min(11,i+1)];
            const a=Math.atan2(prev.y-next.y,prev.x-next.x)+Math.PI/2;
            const w=[7.5,10.5,11,10.4,9.2,7.5,5.7,4,2.8,2,1.5,1][i]*size;
            return {x:p.x,y:p.y,nx:Math.cos(a)*w,ny:Math.sin(a)*w};
        });
        ctx.save();
        // Soft offset shadow suggests a shallow bed without muddy halos.
        ctx.shadowBlur=8*size;ctx.shadowColor='rgba(38,77,63,.19)';ctx.shadowOffsetX=5*size;ctx.shadowOffsetY=8*size;
        ctx.beginPath();
        points.forEach((p,i)=>i?ctx.lineTo(p.x+p.nx,p.y+p.ny):ctx.moveTo(p.x+p.nx,p.y+p.ny));
        [...points].reverse().forEach(p=>ctx.lineTo(p.x-p.nx,p.y-p.ny));
        ctx.closePath();ctx.fillStyle=this.color;ctx.fill();
        ctx.shadowBlur=0;ctx.shadowOffsetX=0;ctx.shadowOffsetY=0;
        ctx.save();ctx.clip();
        ctx.fillStyle=this.spotColor==='#222'?'#5c6257':'#f8f3df';
        for(const [i,side] of [[2,1],[5,-1],[8,1]]){
            const p=points[i];ctx.beginPath();ctx.ellipse(p.x+p.nx*.35*side,p.y+p.ny*.35*side,8*size,5*size,angle+.4*i,0,Math.PI*2);ctx.fill();
        }
        ctx.strokeStyle='rgba(255,255,240,.32)';ctx.lineWidth=2*size;ctx.beginPath();
        points.slice(0,8).forEach((p,i)=>i?ctx.lineTo(p.x,p.y):ctx.moveTo(p.x,p.y));ctx.stroke();ctx.restore();
        // Curved translucent pectoral fins, with a fine inner ray.
        const mid=points[3];
        for(const side of [-1,1]){
            ctx.save();ctx.translate(mid.x,mid.y);ctx.rotate(angle);ctx.scale(size,size*side);
            ctx.beginPath();ctx.moveTo(3,7);ctx.quadraticCurveTo(3,22,-12,22);ctx.quadraticCurveTo(-12,14,-7,7);ctx.closePath();
            ctx.fillStyle='rgba(249,247,222,.62)';ctx.fill();ctx.strokeStyle='rgba(111,134,111,.2)';ctx.lineWidth=.7;ctx.stroke();
            ctx.beginPath();ctx.moveTo(0,8);ctx.lineTo(-9,20);ctx.stroke();ctx.restore();
        }
        const tail=points[11], prior=points[10];
        ctx.save();ctx.translate(tail.x,tail.y);ctx.rotate(Math.atan2(tail.y-prior.y,tail.x-prior.x));ctx.scale(size,size);
        ctx.beginPath();ctx.moveTo(-2,0);ctx.quadraticCurveTo(6,5,16,9);ctx.quadraticCurveTo(12,0,16,-9);ctx.quadraticCurveTo(6,-5,-2,0);ctx.fillStyle='rgba(246,239,214,.75)';ctx.fill();ctx.restore();
        ctx.save();ctx.translate(head.x,head.y);ctx.rotate(angle);
        for(const side of [-1,1]){ctx.beginPath();ctx.arc(2*size,side*5*size,1.15*size,0,Math.PI*2);ctx.fillStyle='#354c43';ctx.fill();}
        ctx.restore();ctx.restore();
    }

}

function syncKois() {
    while (kois.length < config.fishCount) {
        kois.push(new Koi());
    }
    while (kois.length > config.fishCount) {
        kois.pop();
    }
}

syncKois();

function drawCaustics(dt) {
    // Short, soft glints; no large circles or full-width bands.
    causticTime += dt * .22;
    ctx.save();ctx.lineWidth=1;
    for(let i=0;i<24;i++){
        const phase=causticTime+i*1.7;
        const x=((i*.61803398875)%1)*width+Math.sin(phase)*9;
        const y=((i*.38196601125+.13)%1)*height+Math.cos(phase)*7;
        ctx.strokeStyle=`rgba(255,255,240,${.06+.05*(.5+.5*Math.sin(phase))})`;
        ctx.beginPath();ctx.moveTo(x-13,y+4);ctx.quadraticCurveTo(x,y-6,x+17,y);ctx.stroke();
    }
    ctx.restore();
}

let pondPaused = false;
let renderedFrames = 0;
let lastTime = performance.now();

function render(currentTime) {
    requestAnimationFrame(render);
    if (!currentTime) currentTime = performance.now();

    let frameDt = (currentTime - lastTime) / 1000;
    lastTime = currentTime;

    if (pondPaused || document.hidden) { elapsedSinceRender = 0; fpsAccumulator = 0; return; }
    // Cap dt to prevent massive jumps if tab is inactive
    if (frameDt > 0.1) frameDt = 0.1;

    elapsedSinceRender += frameDt;

    // Wallpaper Engine supplies its global FPS setting. Other hosts (including
    // Lively and the web demo) leave this at 0 and render at the display rate.
    if (fpsLimit > 0) {
        const frameInterval = 1 / fpsLimit;
        fpsAccumulator += frameDt;
        if (fpsAccumulator < frameInterval) return;

        // Keep fractional time so limits such as 30 FPS on a 144 Hz display
        // alternate frame intervals instead of drifting below the requested rate.
        fpsAccumulator %= frameInterval;
    }

    let dt = Math.min(elapsedSinceRender, 0.1);
    elapsedSinceRender = 0;

    renderedFrames++;
    ctx.clearRect(0, 0, width, height);

    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    if (config.enableCaustics) drawCaustics(dt);

    for (let i = foods.length - 1; i >= 0; i--) {
        foods[i].update(dt);
        foods[i].draw(ctx);
        if (foods[i].life <= 0) foods.splice(i, 1);
    }

    for (let fish of kois) {
        fish.update(dt);
        fish.draw(ctx);
    }
    
    for (let i = ripples.length - 1; i >= 0; i--) {
        ripples[i].update(dt);
        ripples[i].draw(ctx);
        if (ripples[i].life <= 0) ripples.splice(i, 1);
    }
}

requestAnimationFrame(render);

// ---------------------------------------------------------
// Lively Wallpaper Support
// 
// Note: If you acquired this code from the Steam Workshop / Wallpaper Engine build,
// the required 'LivelyProperties.json' file is not bundled with it.
// To use this project seamlessly on Lively Wallpaper, please download the necessary
// configuration files directly from the official GitHub repository:
// 👉 https://github.com/rzrabbi/interactive-koi-pond
// ---------------------------------------------------------
function livelyPropertyListener(name, val) {
    const props = {};
    props[name] = { value: val };
    window.wallpaperPropertyListener.applyUserProperties(props);
}

// Qingchi host bridge: owned state only; no filesystem or network capabilities.
window.QingchiPond = Object.freeze({
 setPaused(value) { pondPaused = Boolean(value); },
 inspect() { return { fish: kois.length, food: foods.length, ripples: ripples.length, paused: pondPaused, frames: renderedFrames, fpsLimit }; },
 configure(values) { const props = {}; for (const key of ["fishCount","fishSize","fishSpeed","enableCaustics","enableFeeding","waterHue"]) if (key in values) props[key] = {value: values[key]}; window.wallpaperPropertyListener.applyUserProperties(props); if ("fps" in values) window.wallpaperPropertyListener.applyGeneralProperties({fps:values.fps}); }
});
window.wallpaperPropertyListener.setPaused = value => { pondPaused = Boolean(value); };
