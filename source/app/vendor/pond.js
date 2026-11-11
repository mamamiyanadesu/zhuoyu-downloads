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

// Foreground geometry uses original image coordinates, matching CSS center/cover at every viewport.
const LEAF_POLYGONS=[[[20, 741], [32, 709], [53, 687], [82, 673], [113, 666], [149, 666], [181, 675], [205, 694], [223, 719], [232, 750], [227, 781], [212, 811], [188, 835], [161, 850], [131, 857], [103, 854], [75, 846], [128, 772], [46, 827], [31, 806], [22, 780]], [[197, 865], [204, 840], [223, 821], [250, 813], [277, 817], [302, 830], [318, 851], [323, 873], [312, 896], [292, 910], [273, 917], [263, 871], [257, 919], [234, 917], [211, 906], [198, 889]], [[1383, 0], [1536, 0], [1536, 163], [1502, 160], [1470, 150], [1438, 133], [1415, 110], [1399, 82], [1389, 50]]];
function imageTransform(){const scale=Math.max(width/1536,height/1024);return {scale,x:(width-1536*scale)/2,y:(height-1024*scale)/2};}
function inPolygon(x,y,poly){let inside=false;for(let i=0,j=poly.length-1;i<poly.length;j=i++){const a=poly[i],b=poly[j];if((a[1]>y)!==(b[1]>y)&&x<(b[0]-a[0])*(y-a[1])/(b[1]-a[1])+a[0])inside=!inside;}return inside;}
function leafAt(x,y){if(window.QingchiScene?.active()&&window.QingchiScene.containsPoint(x,y))return true;if(window.QingchiHabitat?.currentMap()&&window.QingchiHabitat.currentMap()!=='clear')return !window.QingchiHabitat.waterAt(x,y);if(window.QingchiScene?.active()&&!window.QingchiHabitat)return false;const t=imageTransform();return LEAF_POLYGONS.some(p=>inPolygon((x-t.x)/t.scale,(y-t.y)/t.scale,p));}
function occludeLeaves(){if(window.QingchiScene?.active())window.QingchiScene.occlude(ctx);if(window.QingchiHabitat?.currentMap()&&window.QingchiHabitat.currentMap()!=='clear'){window.QingchiHabitat.occludeLand(ctx);return;}if(window.QingchiScene?.active()&&!window.QingchiHabitat)return;ctx.save();ctx.globalCompositeOperation='destination-out';ctx.fillStyle='#000';const t=imageTransform();ctx.translate(t.x,t.y);ctx.scale(t.scale,t.scale);for(const poly of LEAF_POLYGONS){ctx.beginPath();poly.forEach((p,i)=>i?ctx.lineTo(...p):ctx.moveTo(...p));ctx.closePath();ctx.fill();ctx.lineWidth=1.5;ctx.strokeStyle='#000';ctx.stroke();}ctx.restore();}
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
let customCatalog = [];
let foods = [];
let ripples = [];
let causticTime = 0;
let waterTime=0;
let alarmRing=false,alarmPending=false;
const waterEvents={wake:0,feed:0,drop:0};
const MAX_WAVES=160;
function currentAt(x,y){return {x:1.8+Math.sin(y*.006+waterTime*.18)*1.0,y:Math.sin(x*.005-waterTime*.12)*.9};}
function emitWave(x,y,power,kind='drop',angle=0){if(ripples.length>=MAX_WAVES)ripples.shift();ripples.push(new Ripple(x,y,power,kind,angle));if(kind in waterEvents)waterEvents[kind]++;}
// Damped travelling-wave superposition used for small surface refraction of swimmers.
function surfaceAt(x,y){let height=0;for(const w of ripples){const d=Math.hypot(x-w.x,y-w.y),front=d-w.radius;const envelope=Math.exp(-front*front/240)*w.life*w.power;height+=Math.sin(front*.22)*envelope;}return height;}


let mouse = { x: null, y: null, active: false };
function isPondInput(e) { return !pondPaused && !systemPaused && config.enableFeeding && !e.target?.closest?.('[data-widget]') && !leafAt(e.clientX,e.clientY) && !window.QingchiGarden?.containsPoint(e.clientX,e.clientY) && !window.QingchiHabitat?.containsVisitor(e.clientX,e.clientY); }
window.addEventListener('mousemove', (e) => {
    if (!isPondInput(e)) { mouse.active = false; return; }
    mouse.x = e.clientX;
    mouse.y = e.clientY;
    mouse.active = true;
    
    if (Math.random() < 0.1) {
        emitWave(mouse.x,mouse.y,.35*config.rippleStrength,'drop');
    }
});
window.addEventListener('mouseout', () => { mouse.active = false; });

window.addEventListener('click', (e) => {
    if (!isPondInput(e)) return;
    if (config.enableFeeding) {
        foods.push(new Food(e.clientX, e.clientY));
    }
    emitWave(e.clientX,e.clientY,1.1*config.rippleStrength,'drop');
    if(alarmPending&&window.dispatchEvent&&typeof CustomEvent!=='undefined')window.dispatchEvent(new CustomEvent('qingchi-alarm-feed'));
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
    constructor(x,y,power,kind='drop',angle=0){this.x=x;this.y=y;this.power=power;this.kind=kind;this.angle=angle;this.radius=2;this.life=1;this.age=0;this.duration=kind==='wake'?2.6:kind==='feed'?4.3:3.8;}
    update(dt){this.age+=dt;this.life=Math.max(0,1-this.age/this.duration);this.radius+=dt*(this.kind==='wake'?19:36);const c=currentAt(this.x,this.y);this.x+=c.x*dt;this.y+=c.y*dt;}
    draw(ctx){ctx.save();ctx.translate(this.x,this.y);ctx.rotate(this.angle);ctx.lineWidth=.65+this.life*.7;
      const alpha=this.life*this.life*this.power*(this.kind==='wake'?.19:.30);
      for(let i=0;i<(this.kind==='feed'?3:2);i++){const radius=this.radius-i*9;if(radius<=0)continue;ctx.beginPath();
       if(this.kind==='wake'){ctx.moveTo(-radius*.85,-radius*.55);ctx.quadraticCurveTo(-radius*.22,-radius*.15,0,0);ctx.quadraticCurveTo(-radius*.22,radius*.15,-radius*.85,radius*.55);}
       else ctx.ellipse(0,0,radius,radius*.78,0,0,Math.PI*2);
       ctx.strokeStyle=`rgba(246,255,239,${alpha*(1-i*.22)})`;ctx.stroke();
       if(this.kind!=='wake'){ctx.beginPath();ctx.ellipse(0,1.7,radius+2,(radius+2)*.78,0,0,Math.PI*2);ctx.strokeStyle=`rgba(53,117,102,${alpha*.5})`;ctx.stroke();}
      }ctx.restore();}
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
        this.life -= 1 * dtMult;const flow=currentAt(this.x,this.y);this.x+=flow.x*dt;this.y+=flow.y*dt;
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
    constructor(def = null) {
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
        this.wakeClock=Math.random()*.4;this.foodEaten = 0; this.custom = null; this.applyDefinition(def);
        this.bodyHeading=this.angle;this.bodyTurn=0;this.swimHeading=this.angle;this.wanderPhase=this.swimCycle;
        this.updateSpine(0,Math.hypot(this.vx,this.vy));
    }

    applyDefinition(def) {
        this.custom = def || null;
        this.bodyWidth=def?.form==='round'?1.25:def?.form==='long'?.55:def?.form==='slim'?.78:1;
        this.visualScale = def ? .52 + .48 * Math.min(1,def.growth/1800) : 1;
        if(def){this.color=def.color;this.spotColor=def.accent;this.foodEaten=def.fed;}
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
                emitWave(this.x,this.y,1.25*config.rippleStrength,'feed');
                this.fedTimer = 180; this.foodEaten++;
                if(this.custom && window.dispatchEvent && typeof CustomEvent !== 'undefined')
                    window.dispatchEvent(new CustomEvent('qingchi-fed',{detail:{id:this.custom.id}}));
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
                this.wanderPhase += dt*.7;
                const wanderAngle = Math.sin(this.wanderPhase)*.48*dt;
                let curAngle = Math.atan2(this.vy, this.vx) + wanderAngle;
                
                this.vx = Math.cos(curAngle) * effectiveBaseSpeed;
                this.vy = Math.sin(curAngle) * effectiveBaseSpeed;
            }
        }

        if(alarmRing&&!target){const index=kois.indexOf(this),p=window.QingchiToolsCore?.ringTarget(index,kois.length,width,height,waterTime);if(p){const dx=p.x-this.x,dy=p.y-this.y,d=Math.hypot(dx,dy)||1,speed=Math.min(effectiveBaseSpeed*1.7,d*.04);ax=(dx/d*speed-this.vx)*.16;ay=(dy/d*speed-this.vy)*.16;}}
        let margin = 100;
        let turn = 0.1;
        
        if (target && minDistSq < FOOD_DETECT_RADIUS_SQ) {
            margin = 0;
        }

        if (this.x < margin) ax += turn;
        if (this.x > width - margin) ax -= turn;
        if (this.y < margin) ay += turn;
        if (this.y > height - margin) ay -= turn;
        // Steer gently before entering floating leaves; residual body/tail is occluded, never painted on top.
        const look=28+30*config.fishSize;if(leafAt(this.x+this.vx*look,this.y+this.vy*look)){
          if(window.QingchiHabitat?.currentMap()&&window.QingchiHabitat.currentMap()!=='clear'){const dx=width*.5-this.x,dy=height*.44-this.y,d=Math.hypot(dx,dy)||1;ax+=dx/d*.45;ay+=dy/d*.45;}else {const t=imageTransform();for(const poly of LEAF_POLYGONS){const cx=poly.reduce((n,p)=>n+p[0],0)/poly.length*t.scale+t.x,cy=poly.reduce((n,p)=>n+p[1],0)/poly.length*t.scale+t.y;const dx=this.x-cx,dy=this.y-cy,d=Math.hypot(dx,dy)||1;if(d<180*t.scale){ax+=dx/d*.12;ay+=dy/d*.12;}}}
        }

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

        // Smooth locomotion as well as the spine: no backwards sliding during abrupt targets.
        cSpeed=Math.hypot(this.vx,this.vy);
        if(cSpeed>.015){
            const desired=Math.atan2(this.vy,this.vx);
            const delta=Math.atan2(Math.sin(desired-this.swimHeading),Math.cos(desired-this.swimHeading));
            const maxTurn=(avoidForceApplied?3.2:target?2.8:1.8)*dt;
            this.swimHeading+=Math.max(-maxTurn,Math.min(maxTurn,delta));
            this.vx=Math.cos(this.swimHeading)*cSpeed;this.vy=Math.sin(this.swimHeading)*cSpeed;
        }

        this.x += this.vx * dtMult;
        this.y += this.vy * dtMult;
        this.wakeClock+=dt;
        if(cSpeed>.08 && this.wakeClock>.45){this.wakeClock=0;const angle=Math.atan2(this.vy,this.vx);emitWave(this.x-Math.cos(angle)*25*this.visualScale,this.y-Math.sin(angle)*25*this.visualScale,Math.min(.8,.24+cSpeed*.28)*config.rippleStrength,'wake',angle);}

        
        this.swimCycle += cSpeed * 0.1 * dtMult;
        let wiggle = Math.sin(this.swimCycle) * 0.2;

        this.angle = Math.atan2(this.vy, this.vx) + wiggle;

        this.updateSpine(dt,Math.hypot(this.vx,this.vy));
    }

    updateSpine(dt,speed) {
        // Pose follows the bounded locomotion heading; fish identity and event contracts stay intact.
        const wrap=a=>Math.atan2(Math.sin(a),Math.cos(a));
        const target=speed>.015?Math.atan2(this.vy,this.vx):this.bodyHeading;
        const step=Math.max(-2.6*dt,Math.min(2.6*dt,wrap(target-this.bodyHeading)*(1-Math.exp(-9*dt))));
        this.bodyHeading+=step;
        this.bodyTurn+=((dt>0?step/dt:0)-this.bodyTurn)*(1-Math.exp(-8*dt));
        const spacing=6.2*config.fishSize*this.visualScale;
        this.segments[0].x=this.x;this.segments[0].y=this.y;
        let previous=this.bodyHeading;
        for(let i=1;i<this.numSegments;i++){
            const t=i/(this.numSegments-1);
            // A bounded turn trail plus travelling tail wave avoids folded chains.
            const trail=Math.max(-.72,Math.min(.72,this.bodyTurn*spacing*i/Math.max(speed*60,18)*.6));
            const wave=Math.sin(this.swimCycle-t*4.2)*.23*t*t*Math.min(1,speed/.4);
            const wanted=this.bodyHeading-trail+wave,limit=.055+.10*t;
            const angle=previous+Math.max(-limit,Math.min(limit,wrap(wanted-previous)));
            const prev=this.segments[i-1],curr=this.segments[i];
            curr.x=prev.x-Math.cos(angle)*spacing;curr.y=prev.y-Math.sin(angle)*spacing;
            previous=angle;
        }
    }

    draw(ctx) {
        // Continuous tapered silhouette; the original swim/feeding model is unchanged.
        const size = config.fishSize * this.visualScale;
        const head = this.segments[0];
        const angle = Math.atan2(this.segments[0].y-this.segments[2].y, this.segments[0].x-this.segments[2].x);
        const points = this.segments.map((p,i) => {
            const prev=this.segments[Math.max(0,i-1)], next=this.segments[Math.min(11,i+1)];
            const a=Math.atan2(prev.y-next.y,prev.x-next.x)+Math.PI/2;
            const w=[4.8,7.3,8.7,8.5,7.6,6.4,5,3.6,2.5,1.8,1.3,.9][i]*size*(this.bodyWidth||1);
            return {x:p.x,y:p.y,nx:Math.cos(a)*w,ny:Math.sin(a)*w};
        });
        ctx.save();
        // Soft offset shadow suggests a shallow bed without muddy halos.
        ctx.shadowBlur=5*size;ctx.shadowColor='rgba(19,47,44,.36)';ctx.shadowOffsetX=7*size;ctx.shadowOffsetY=10*size;
        ctx.beginPath();
        const outline=points.map(p=>({x:p.x+p.nx,y:p.y+p.ny})).concat([...points].reverse().map(p=>({x:p.x-p.nx,y:p.y-p.ny})));
        const end=outline[outline.length-1];ctx.moveTo((end.x+outline[0].x)/2,(end.y+outline[0].y)/2);
        outline.forEach((p,i)=>{const next=outline[(i+1)%outline.length];ctx.quadraticCurveTo(p.x,p.y,(p.x+next.x)/2,(p.y+next.y)/2);});
        ctx.closePath();ctx.fillStyle=this.color;ctx.fill();
        ctx.shadowBlur=0;ctx.shadowOffsetX=0;ctx.shadowOffsetY=0;
        ctx.save();ctx.clip();
        ctx.fillStyle=this.custom?this.custom.accent:(this.spotColor==='#222'?'#5c6257':'#f8f3df');
        for(const [i,side] of [[2,1],[5,-1],[8,1]]){
            const p=points[i];ctx.save();ctx.translate(p.x+p.nx*.3*side,p.y+p.ny*.3*side);ctx.rotate(angle+.4*i);ctx.scale(size,size);ctx.beginPath();for(let j=0;j<12;j++){const t=j/12*Math.PI*2,r=1+Math.sin(j*2.7+i)*.18,x=Math.cos(t)*7*r,y=Math.sin(t)*4.7*r;j?ctx.lineTo(x,y):ctx.moveTo(x,y);}ctx.closePath();ctx.fill();ctx.restore();
        }
        if(['zebra','angelfish','neon'].includes(this.custom?.source)){
            ctx.strokeStyle=this.custom.accent;ctx.lineWidth=(this.custom.source==='angelfish'?6:3)*size;ctx.beginPath();
            if(this.custom.source==='angelfish')for(const i of [2,5,8]){const p=points[i];ctx.moveTo(p.x+p.nx,p.y+p.ny);ctx.lineTo(p.x-p.nx,p.y-p.ny);}
            else for(const side of [-.48,.48])points.slice(this.custom.source==='neon'?4:0,10).forEach((p,i)=>i?ctx.lineTo(p.x+p.nx*side,p.y+p.ny*side):ctx.moveTo(p.x+p.nx*side,p.y+p.ny*side));
            ctx.stroke();
        }
        if(this.custom?.strokes?.length){
            ctx.save();ctx.translate(head.x,head.y);ctx.rotate(angle);ctx.scale(size,size);
            for(const stroke of this.custom.strokes){ctx.strokeStyle=stroke.color;ctx.fillStyle=stroke.color;ctx.lineWidth=stroke.size*22;ctx.lineCap='round';ctx.lineJoin='round';ctx.beginPath();
                stroke.points.forEach((p,i)=>{const x=-21+p[0]*31,y=p[1]*12;i?ctx.lineTo(x,y):ctx.moveTo(x,y);});
                if(stroke.points.length===1){const p=stroke.points[0];ctx.arc(-21+p[0]*31,p[1]*12,stroke.size*11,0,Math.PI*2);ctx.fill();}else ctx.stroke();
            }ctx.restore();
        }
        // A continuous cross-body gradient avoids visible segment seams.
        const center=points[3],nx=Math.cos(angle+Math.PI/2)*9*size*(this.bodyWidth||1),ny=Math.sin(angle+Math.PI/2)*9*size*(this.bodyWidth||1);
        const bodyLight=ctx.createLinearGradient(center.x-nx,center.y-ny,center.x+nx,center.y+ny);
        bodyLight.addColorStop(0,'rgba(13,43,41,.48)');bodyLight.addColorStop(.23,'rgba(13,43,41,.08)');bodyLight.addColorStop(.46,'rgba(255,249,221,.25)');bodyLight.addColorStop(.68,'rgba(255,249,221,.04)');bodyLight.addColorStop(1,'rgba(13,43,41,.44)');
        ctx.fillStyle=bodyLight;const xs=outline.map(p=>p.x),ys=outline.map(p=>p.y);ctx.fillRect(Math.min(...xs)-1,Math.min(...ys)-1,Math.max(...xs)-Math.min(...xs)+2,Math.max(...ys)-Math.min(...ys)+2);
        for(let i=2;i<8;i++){const p=points[i];ctx.strokeStyle='rgba(247,247,214,.12)';ctx.lineWidth=.45*size;for(const v of [-.5,0,.5]){ctx.beginPath();ctx.arc(p.x+p.nx*v,p.y+p.ny*v,2.7*size,angle-.8,angle+.8);ctx.stroke();}}
        ctx.restore();
        // Pectoral fins sweep independently instead of remaining rigid triangles.
        const mid=points[2];
        for(const side of [-1,1]){
            ctx.save();ctx.translate(mid.x,mid.y);ctx.rotate(angle+side*Math.sin(this.swimCycle*.8+side*.4)*.13);ctx.scale(size,size*side*(this.custom?.fin||1));
            ctx.beginPath();ctx.moveTo(1,6);ctx.bezierCurveTo(1,13,-9,17,-14,14);ctx.quadraticCurveTo(-9,9,-5,6);ctx.closePath();
            const fin=ctx.createLinearGradient(0,6,-10,17);fin.addColorStop(0,'rgba(186,185,147,.68)');fin.addColorStop(1,'rgba(245,242,211,.22)');ctx.fillStyle=fin;ctx.fill();ctx.strokeStyle='rgba(105,130,112,.25)';ctx.lineWidth=.5;ctx.stroke();
            for(let j=0;j<4;j++){ctx.beginPath();ctx.moveTo(-2,7);ctx.quadraticCurveTo(-5-j,10,-5-j*2.4,14);ctx.stroke();}ctx.restore();
        }
        const tail=points[11], prior=points[10];
        ctx.save();ctx.translate(tail.x,tail.y);ctx.rotate(Math.atan2(tail.y-prior.y,tail.x-prior.x));ctx.scale(size*(this.custom?.tail||1),size*(this.custom?.tail||1));
        ctx.beginPath();ctx.moveTo(-2,0);ctx.bezierCurveTo(5,2,10,9,18,10);ctx.quadraticCurveTo(16,3,10,0);ctx.quadraticCurveTo(16,-3,18,-10);ctx.bezierCurveTo(10,-9,5,-2,-2,0);ctx.fillStyle='rgba(217,218,181,.53)';ctx.fill();ctx.strokeStyle='rgba(82,114,104,.22)';ctx.lineWidth=.55;for(let j=-2;j<=2;j++){ctx.beginPath();ctx.moveTo(0,0);ctx.quadraticCurveTo(7,j*1.3,15,j*4);ctx.stroke();}ctx.restore();
        ctx.save();ctx.translate(head.x,head.y);ctx.rotate(angle);
        for(const side of [-1,1]){ctx.beginPath();ctx.arc(2*size,side*3.7*size,.8*size,0,Math.PI*2);ctx.fillStyle='#354c43';ctx.fill();}
        ctx.restore();ctx.restore();
    }

}

function syncKois() {
    const old=kois,placed=customCatalog.filter(f=>f.placed);
    const next=placed.map(def=>{const fish=old.find(k=>k.custom?.id===def.id)||new Koi(def);fish.applyDefinition(def);return fish;});
    const ambient=old.filter(k=>!k.custom);
    while(next.length<Math.max(config.fishCount,placed.length))next.push(ambient.shift()||new Koi());
    kois=next;
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

function drawFlow(){
 ctx.save();ctx.lineWidth=1.2;
 for(let k=0;k<13;k++){const y=(k+.5)*height/13;const drift=waterTime*5;ctx.beginPath();
  for(let x=-30;x<=width+30;x+=22){const yy=y+Math.sin(x*.008-waterTime*.24+k)*9+Math.cos(x*.003+waterTime*.12)*5; x===-30?ctx.moveTo(x,yy):ctx.lineTo(x,yy);}
  ctx.strokeStyle=`rgba(228,251,226,${.025+.016*Math.sin(k+waterTime*.3)**2})`;ctx.stroke();
  for(let j=0;j<4;j++){const x=((j*.25+k*.071)*width+drift)%(width+60)-30;const yy=y+Math.sin(x*.008-waterTime*.24+k)*9;ctx.beginPath();ctx.moveTo(x,yy);ctx.quadraticCurveTo(x+13,yy-2,x+29,yy);ctx.strokeStyle='rgba(244,255,234,.12)';ctx.stroke();}
 }ctx.restore();
}

let pondPaused = false,systemPaused=false;
let renderedFrames = 0;
let lastTime = performance.now();

function render(currentTime) {
    requestAnimationFrame(render);
    if (!currentTime) currentTime = performance.now();

    let frameDt = (currentTime - lastTime) / 1000;
    lastTime = currentTime;

    if (pondPaused || systemPaused || document.hidden) { elapsedSinceRender = 0; fpsAccumulator = 0; return; }
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
    window.QingchiEnvironment?.render(dt);waterTime+=dt;window.QingchiWaterSurface?.render(dt,ripples);window.QingchiScene?.render(dt);
    ctx.clearRect(0, 0, width, height);

    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    if(!window.QingchiWaterSurface?.inspect().ready){if (config.enableCaustics) drawCaustics(dt);drawFlow();}

    for (let i = foods.length - 1; i >= 0; i--) {
        foods[i].update(dt);
        foods[i].draw(ctx);
        if (foods[i].life <= 0) foods.splice(i, 1);
    }

    for (let fish of kois) {
        fish.update(dt);
        ctx.save();const refraction=surfaceAt(fish.x,fish.y);ctx.translate(refraction*1.1,refraction*.55);fish.draw(ctx);ctx.restore();
    }
    
    for (let i = ripples.length - 1; i >= 0; i--) {
        ripples[i].update(dt);
        ripples[i].draw(ctx);
        if (ripples[i].life <= 0) ripples.splice(i, 1);
    }
    occludeLeaves();
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
 setCatalog(fish) { customCatalog=Array.isArray(fish)?fish:[];syncKois(); },
 surfaceAt(x,y){return {leaf:leafAt(x,y),wave:surfaceAt(x,y),current:currentAt(x,y)};},
 ranking() { return kois.map((k,i)=>({id:k.custom?.id||'ambient-'+i,name:k.custom?.name||'池中锦鲤 '+(i+1),food:k.foodEaten,custom:!!k.custom,x:k.x,y:k.y})).sort((a,b)=>b.food-a.food); },
 locate(id) { const k=kois.find(f=>f.custom?.id===id);if(k)ripples.push(new Ripple(k.x,k.y,1.5));return !!k; },
 setAlarm(value,pending=value){alarmRing=!!value;alarmPending=!!pending;},
 setSystemPause(value){systemPaused=!!value;},
 setPaused(value) { pondPaused = Boolean(value); },
 inspect() { return { fish: kois.length, alarmRing, alarmPending, food: foods.length, ripples: ripples.length, foreground:{mode:'source-aligned-canvas-occlusion',polygons:LEAF_POLYGONS.length,transform:imageTransform()},water:{model:'damped-travelling-waves',time:waterTime,events:{...waterEvents},active: ripples.length,max:MAX_WAVES,sample:surfaceAt(width*.5,height*.5)},paused: pondPaused||systemPaused,manualPaused:pondPaused,systemPaused,frames: renderedFrames, fpsLimit }; },
 configure(values) { const props = {}; for (const key of ["fishCount","fishSize","fishSpeed","enableCaustics","enableFeeding","waterHue"]) if (key in values) props[key] = {value: values[key]}; window.wallpaperPropertyListener.applyUserProperties(props); if ("fps" in values) window.wallpaperPropertyListener.applyGeneralProperties({fps:values.fps}); }
});
window.wallpaperPropertyListener.setPaused = value => { pondPaused = Boolean(value); };
