(()=>{var ls={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},cs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},_d=0,Ch=1,xd=2;var Yu=1,Mc=2,pi=3,ii=0,Kt=1,nt=2,ni=0,Zn=1,fn=2,Ph=3,Ih=4,vd=5,ts=100,yd=101,Md=102,Ed=103,bd=104,Sd=200,Td=201,wd=202,Ad=203,al=204,ll=205,Rd=206,Cd=207,Pd=208,Id=209,Dd=210,Ld=211,Nd=212,Ud=213,Fd=214,cl=0,hl=1,ul=2,Ns=3,fl=4,dl=5,pl=6,ml=7,qu=0,Od=1,Bd=2,Ui=0,Ec=1,bc=2,Sc=3,Pr=4,Hd=5,Tc=6,wc=7,Dh="attached",zd="detached",Ku=300,Us=301,Fs=302,_r=303,gl=304,Jo=306,ss=1e3,Ln=1001,xr=1002,ln=1003,Ac=1004;var Cs=1005;var en=1006,dr=1007;var ti=1008;var gi=1009,Zu=1010,ju=1011,vr=1012,Rc=1013,rs=1014,Kn=1015,Cn=1016,Cc=1017,Pc=1018,Os=1020,$u=35902,Ju=1021,Qu=1022,Nn=1023,ef=1024,tf=1025,Is=1026,Bs=1027,Ic=1028,Dc=1029,nf=1030,Lc=1031;var Nc=1033,fo=33776,po=33777,mo=33778,go=33779,_l=35840,xl=35841,vl=35842,yl=35843,Ml=36196,El=37492,bl=37496,Sl=37808,Tl=37809,wl=37810,Al=37811,Rl=37812,Cl=37813,Pl=37814,Il=37815,Dl=37816,Ll=37817,Nl=37818,Ul=37819,Fl=37820,Ol=37821,_o=36492,Bl=36494,Hl=36495,sf=36283,zl=36284,kl=36285,Vl=36286;var Hs=2300,zs=2301,Ta=2302,Lh=2400,Nh=2401,Uh=2402,kd=2500;var rf=0,Qo=1,Ir=2,Vd=3200,Gd=3201;var of=0,Wd=1,Yn="",Ht="srgb",$t="srgb-linear",Uc="display-p3",ea="display-p3-linear",vo="linear",bt="srgb",yo="rec709",Mo="p3";var ps=7680;var Fh=519,Xd=512,Yd=513,qd=514,af=515,Kd=516,Zd=517,jd=518,$d=519,Gl=35044;var Oh="300 es",mi=2e3,Eo=2001,_i=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},on=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Bh=1234567,pr=Math.PI/180,ks=180/Math.PI;function jn(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(on[i&255]+on[i>>8&255]+on[i>>16&255]+on[i>>24&255]+"-"+on[e&255]+on[e>>8&255]+"-"+on[e>>16&15|64]+on[e>>24&255]+"-"+on[t&63|128]+on[t>>8&255]+"-"+on[t>>16&255]+on[t>>24&255]+on[n&255]+on[n>>8&255]+on[n>>16&255]+on[n>>24&255]).toLowerCase()}function kt(i,e,t){return Math.max(e,Math.min(t,i))}function Fc(i,e){return(i%e+e)%e}function Jd(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Qd(i,e,t){return i!==e?(t-i)/(e-i):0}function mr(i,e,t){return(1-t)*i+t*e}function ep(i,e,t,n){return mr(i,e,1-Math.exp(-t*n))}function tp(i,e=1){return e-Math.abs(Fc(i,e*2)-e)}function np(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function ip(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function sp(i,e){return i+Math.floor(Math.random()*(e-i+1))}function rp(i,e){return i+Math.random()*(e-i)}function op(i){return i*(.5-Math.random())}function ap(i){i!==void 0&&(Bh=i);let e=Bh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function lp(i){return i*pr}function cp(i){return i*ks}function hp(i){return(i&i-1)===0&&i!==0}function up(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function fp(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function dp(i,e,t,n,s){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),f=o((e-n)/2),d=r((n-e)/2),g=o((n-e)/2);switch(s){case"XYX":i.set(a*h,l*u,l*f,a*c);break;case"YZY":i.set(l*f,a*h,l*u,a*c);break;case"ZXZ":i.set(l*u,l*f,a*h,a*c);break;case"XZX":i.set(a*h,l*g,l*d,a*c);break;case"YXY":i.set(l*d,a*h,l*g,a*c);break;case"ZYZ":i.set(l*g,l*d,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function qn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function yt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var ki={DEG2RAD:pr,RAD2DEG:ks,generateUUID:jn,clamp:kt,euclideanModulo:Fc,mapLinear:Jd,inverseLerp:Qd,lerp:mr,damp:ep,pingpong:tp,smoothstep:np,smootherstep:ip,randInt:sp,randFloat:rp,randFloatSpread:op,seededRandom:ap,degToRad:lp,radToDeg:cp,isPowerOfTwo:hp,ceilPowerOfTwo:up,floorPowerOfTwo:fp,setQuaternionFromProperEuler:dp,normalize:yt,denormalize:qn},we=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(kt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ot=class i{constructor(e,t,n,s,r,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c)}set(e,t,n,s,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],d=n[5],g=n[8],_=s[0],m=s[3],p=s[6],v=s[1],y=s[4],M=s[7],P=s[2],w=s[5],T=s[8];return r[0]=o*_+a*v+l*P,r[3]=o*m+a*y+l*w,r[6]=o*p+a*M+l*T,r[1]=c*_+h*v+u*P,r[4]=c*m+h*y+u*w,r[7]=c*p+h*M+u*T,r[2]=f*_+d*v+g*P,r[5]=f*m+d*y+g*w,r[8]=f*p+d*M+g*T,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,f=a*l-h*r,d=c*r-o*l,g=t*u+n*f+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return e[0]=u*_,e[1]=(s*c-h*n)*_,e[2]=(a*n-s*o)*_,e[3]=f*_,e[4]=(h*t-s*l)*_,e[5]=(s*r-a*t)*_,e[6]=d*_,e[7]=(n*l-c*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(wa.makeScale(e,t)),this}rotate(e){return this.premultiply(wa.makeRotation(-e)),this}translate(e,t){return this.premultiply(wa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},wa=new ot;function lf(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function yr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function pp(){let i=yr("canvas");return i.style.display="block",i}var Hh={};function xo(i){i in Hh||(Hh[i]=!0,console.warn(i))}function mp(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function gp(i){let e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function _p(i){let e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var zh=new ot().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),kh=new ot().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ir={[$t]:{transfer:vo,primaries:yo,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[Ht]:{transfer:bt,primaries:yo,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[ea]:{transfer:vo,primaries:Mo,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(kh),fromReference:i=>i.applyMatrix3(zh)},[Uc]:{transfer:bt,primaries:Mo,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(kh),fromReference:i=>i.applyMatrix3(zh).convertLinearToSRGB()}},xp=new Set([$t,ea]),ut={enabled:!0,_workingColorSpace:$t,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!xp.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;let n=ir[e].toReference,s=ir[t].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return ir[i].primaries},getTransfer:function(i){return i===Yn?vo:ir[i].transfer},getLuminanceCoefficients:function(i,e=this._workingColorSpace){return i.fromArray(ir[e].luminanceCoefficients)}};function Ds(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Aa(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var ms,Wl=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ms===void 0&&(ms=yr("canvas")),ms.width=e.width,ms.height=e.height;let n=ms.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ms}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=yr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ds(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ds(t[n]/255)*255):t[n]=Ds(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},vp=0,bo=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:vp++}),this.uuid=jn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Ra(s[o].image)):r.push(Ra(s[o]))}else r=Ra(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Ra(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Wl.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var yp=0,Zt=class i extends _i{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Ln,s=Ln,r=en,o=ti,a=Nn,l=gi,c=i.DEFAULT_ANISOTROPY,h=Yn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:yp++}),this.uuid=jn(),this.name="",this.source=new bo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new we(0,0),this.repeat=new we(1,1),this.center=new we(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ku)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ss:e.x=e.x-Math.floor(e.x);break;case Ln:e.x=e.x<0?0:1;break;case xr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ss:e.y=e.y-Math.floor(e.y);break;case Ln:e.y=e.y<0?0:1;break;case xr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Zt.DEFAULT_IMAGE=null;Zt.DEFAULT_MAPPING=Ku;Zt.DEFAULT_ANISOTROPY=1;var mt=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let y=(c+1)/2,M=(d+1)/2,P=(p+1)/2,w=(h+f)/4,T=(u+_)/4,I=(g+m)/4;return y>M&&y>P?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=w/n,r=T/n):M>P?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=w/s,r=I/s):P<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(P),n=T/r,s=I/r),this.set(n,s,r,t),this}let v=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(f-h)*(f-h));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(u-_)/v,this.z=(f-h)/v,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Xl=class extends _i{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new mt(0,0,e,t),this.scissorTest=!1,this.viewport=new mt(0,0,e,t);let s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:en,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new Zt(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new bo(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},tn=class extends Xl{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},So=class extends Zt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=ln,this.minFilter=ln,this.wrapR=Ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Yl=class extends Zt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=ln,this.minFilter=ln,this.wrapR=Ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Nt=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],f=r[o+0],d=r[o+1],g=r[o+2],_=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=f,e[t+1]=d,e[t+2]=g,e[t+3]=_;return}if(u!==_||l!==f||c!==d||h!==g){let m=1-a,p=l*f+c*d+h*g+u*_,v=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){let P=Math.sqrt(y),w=Math.atan2(P,p*v);m=Math.sin(m*w)/P,a=Math.sin(a*w)/P}let M=a*v;if(l=l*m+f*M,c=c*m+d*M,h=h*m+g*M,u=u*m+_*M,m===1-a){let P=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=P,c*=P,h*=P,u*=P}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[o],f=r[o+1],d=r[o+2],g=r[o+3];return e[t]=a*g+h*u+l*d-c*f,e[t+1]=l*g+h*f+c*u-a*d,e[t+2]=c*g+h*d+a*f-l*u,e[t+3]=h*g-a*u-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),u=a(r/2),f=l(n/2),d=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"YXZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"ZXY":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"ZYX":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"YZX":this._x=f*h*u+c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u-f*d*g;break;case"XZY":this._x=f*h*u-c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],f=n+a+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(n>a&&n>u){let d=2*Math.sqrt(1+n-a-u);this._w=(h-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>u){let d=2*Math.sqrt(1+a-n-u);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+u-n-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(kt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let d=1-t;return this._w=d*o+t*this._w,this._x=d*n+t*this._x,this._y=d*s+t*this._y,this._z=d*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-t)*h)/c,f=Math.sin(t*h)/c;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},A=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Vh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Vh.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*n),h=2*(a*t-r*s),u=2*(r*n-o*t);return this.x=t+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ca.copy(this).projectOnVector(e),this.sub(Ca)}reflect(e){return this.sub(Ca.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(kt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ca=new A,Vh=new Nt,gn=class{constructor(e=new A(1/0,1/0,1/0),t=new A(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Gn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Gn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Gn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Gn):Gn.fromBufferAttribute(r,o),Gn.applyMatrix4(e.matrixWorld),this.expandByPoint(Gn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Br.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Br.copy(n.boundingBox)),Br.applyMatrix4(e.matrixWorld),this.union(Br)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Gn),Gn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(sr),Hr.subVectors(this.max,sr),gs.subVectors(e.a,sr),_s.subVectors(e.b,sr),xs.subVectors(e.c,sr),Ri.subVectors(_s,gs),Ci.subVectors(xs,_s),Ki.subVectors(gs,xs);let t=[0,-Ri.z,Ri.y,0,-Ci.z,Ci.y,0,-Ki.z,Ki.y,Ri.z,0,-Ri.x,Ci.z,0,-Ci.x,Ki.z,0,-Ki.x,-Ri.y,Ri.x,0,-Ci.y,Ci.x,0,-Ki.y,Ki.x,0];return!Pa(t,gs,_s,xs,Hr)||(t=[1,0,0,0,1,0,0,0,1],!Pa(t,gs,_s,xs,Hr))?!1:(zr.crossVectors(Ri,Ci),t=[zr.x,zr.y,zr.z],Pa(t,gs,_s,xs,Hr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Gn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Gn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(li[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),li[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),li[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),li[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),li[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),li[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),li[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),li[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(li),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},li=[new A,new A,new A,new A,new A,new A,new A,new A],Gn=new A,Br=new gn,gs=new A,_s=new A,xs=new A,Ri=new A,Ci=new A,Ki=new A,sr=new A,Hr=new A,zr=new A,Zi=new A;function Pa(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Zi.fromArray(i,r);let a=s.x*Math.abs(Zi.x)+s.y*Math.abs(Zi.y)+s.z*Math.abs(Zi.z),l=e.dot(Zi),c=t.dot(Zi),h=n.dot(Zi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Mp=new gn,rr=new A,Ia=new A,wn=class{constructor(e=new A,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Mp.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;rr.subVectors(e,this.center);let t=rr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(rr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ia.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(rr.copy(e.center).add(Ia)),this.expandByPoint(rr.copy(e.center).sub(Ia))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},ci=new A,Da=new A,kr=new A,Pi=new A,La=new A,Vr=new A,Na=new A,xi=class{constructor(e=new A,t=new A(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ci)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ci.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ci.copy(this.origin).addScaledVector(this.direction,t),ci.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Da.copy(e).add(t).multiplyScalar(.5),kr.copy(t).sub(e).normalize(),Pi.copy(this.origin).sub(Da);let r=e.distanceTo(t)*.5,o=-this.direction.dot(kr),a=Pi.dot(this.direction),l=-Pi.dot(kr),c=Pi.lengthSq(),h=Math.abs(1-o*o),u,f,d,g;if(h>0)if(u=o*l-a,f=o*a-l,g=r*h,u>=0)if(f>=-g)if(f<=g){let _=1/h;u*=_,f*=_,d=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Da).addScaledVector(kr,f),d}intersectSphere(e,t){ci.subVectors(e.center,this.origin);let n=ci.dot(this.direction),s=ci.dot(ci)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),h>=0?(r=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(a=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,ci)!==null}intersectTriangle(e,t,n,s,r){La.subVectors(t,e),Vr.subVectors(n,e),Na.crossVectors(La,Vr);let o=this.direction.dot(Na),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Pi.subVectors(this.origin,e);let l=a*this.direction.dot(Vr.crossVectors(Pi,Vr));if(l<0)return null;let c=a*this.direction.dot(La.cross(Pi));if(c<0||l+c>o)return null;let h=-a*Pi.dot(Na);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},He=class i{constructor(e,t,n,s,r,o,a,l,c,h,u,f,d,g,_,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c,h,u,f,d,g,_,m)}set(e,t,n,s,r,o,a,l,c,h,u,f,d,g,_,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/vs.setFromMatrixColumn(e,0).length(),r=1/vs.setFromMatrixColumn(e,1).length(),o=1/vs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let f=o*h,d=o*u,g=a*h,_=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=d+g*c,t[5]=f-_*c,t[9]=-a*l,t[2]=_-f*c,t[6]=g+d*c,t[10]=o*l}else if(e.order==="YXZ"){let f=l*h,d=l*u,g=c*h,_=c*u;t[0]=f+_*a,t[4]=g*a-d,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=d*a-g,t[6]=_+f*a,t[10]=o*l}else if(e.order==="ZXY"){let f=l*h,d=l*u,g=c*h,_=c*u;t[0]=f-_*a,t[4]=-o*u,t[8]=g+d*a,t[1]=d+g*a,t[5]=o*h,t[9]=_-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let f=o*h,d=o*u,g=a*h,_=a*u;t[0]=l*h,t[4]=g*c-d,t[8]=f*c+_,t[1]=l*u,t[5]=_*c+f,t[9]=d*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let f=o*l,d=o*c,g=a*l,_=a*c;t[0]=l*h,t[4]=_-f*u,t[8]=g*u+d,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=d*u+g,t[10]=f-_*u}else if(e.order==="XZY"){let f=o*l,d=o*c,g=a*l,_=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=f*u+_,t[5]=o*h,t[9]=d*u-g,t[2]=g*u-d,t[6]=a*h,t[10]=_*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ep,e,bp)}lookAt(e,t,n){let s=this.elements;return Sn.subVectors(e,t),Sn.lengthSq()===0&&(Sn.z=1),Sn.normalize(),Ii.crossVectors(n,Sn),Ii.lengthSq()===0&&(Math.abs(n.z)===1?Sn.x+=1e-4:Sn.z+=1e-4,Sn.normalize(),Ii.crossVectors(n,Sn)),Ii.normalize(),Gr.crossVectors(Sn,Ii),s[0]=Ii.x,s[4]=Gr.x,s[8]=Sn.x,s[1]=Ii.y,s[5]=Gr.y,s[9]=Sn.y,s[2]=Ii.z,s[6]=Gr.z,s[10]=Sn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],d=n[13],g=n[2],_=n[6],m=n[10],p=n[14],v=n[3],y=n[7],M=n[11],P=n[15],w=s[0],T=s[4],I=s[8],U=s[12],x=s[1],E=s[5],D=s[9],O=s[13],H=s[2],J=s[6],q=s[10],te=s[14],X=s[3],he=s[7],G=s[11],ie=s[15];return r[0]=o*w+a*x+l*H+c*X,r[4]=o*T+a*E+l*J+c*he,r[8]=o*I+a*D+l*q+c*G,r[12]=o*U+a*O+l*te+c*ie,r[1]=h*w+u*x+f*H+d*X,r[5]=h*T+u*E+f*J+d*he,r[9]=h*I+u*D+f*q+d*G,r[13]=h*U+u*O+f*te+d*ie,r[2]=g*w+_*x+m*H+p*X,r[6]=g*T+_*E+m*J+p*he,r[10]=g*I+_*D+m*q+p*G,r[14]=g*U+_*O+m*te+p*ie,r[3]=v*w+y*x+M*H+P*X,r[7]=v*T+y*E+M*J+P*he,r[11]=v*I+y*D+M*q+P*G,r[15]=v*U+y*O+M*te+P*ie,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],f=e[10],d=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+r*l*u-s*c*u-r*a*f+n*c*f+s*a*d-n*l*d)+_*(+t*l*d-t*c*f+r*o*f-s*o*d+s*c*h-r*l*h)+m*(+t*c*u-t*a*d-r*o*u+n*o*d+r*a*h-n*c*h)+p*(-s*a*h-t*l*u+t*a*f+s*o*u-n*o*f+n*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],f=e[10],d=e[11],g=e[12],_=e[13],m=e[14],p=e[15],v=u*m*c-_*f*c+_*l*d-a*m*d-u*l*p+a*f*p,y=g*f*c-h*m*c-g*l*d+o*m*d+h*l*p-o*f*p,M=h*_*c-g*u*c+g*a*d-o*_*d-h*a*p+o*u*p,P=g*u*l-h*_*l-g*a*f+o*_*f+h*a*m-o*u*m,w=t*v+n*y+s*M+r*P;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let T=1/w;return e[0]=v*T,e[1]=(_*f*r-u*m*r-_*s*d+n*m*d+u*s*p-n*f*p)*T,e[2]=(a*m*r-_*l*r+_*s*c-n*m*c-a*s*p+n*l*p)*T,e[3]=(u*l*r-a*f*r-u*s*c+n*f*c+a*s*d-n*l*d)*T,e[4]=y*T,e[5]=(h*m*r-g*f*r+g*s*d-t*m*d-h*s*p+t*f*p)*T,e[6]=(g*l*r-o*m*r-g*s*c+t*m*c+o*s*p-t*l*p)*T,e[7]=(o*f*r-h*l*r+h*s*c-t*f*c-o*s*d+t*l*d)*T,e[8]=M*T,e[9]=(g*u*r-h*_*r-g*n*d+t*_*d+h*n*p-t*u*p)*T,e[10]=(o*_*r-g*a*r+g*n*c-t*_*c-o*n*p+t*a*p)*T,e[11]=(h*a*r-o*u*r-h*n*c+t*u*c+o*n*d-t*a*d)*T,e[12]=P*T,e[13]=(h*_*s-g*u*s+g*n*f-t*_*f-h*n*m+t*u*m)*T,e[14]=(g*a*s-o*_*s-g*n*l+t*_*l+o*n*m-t*a*m)*T,e[15]=(o*u*s-h*a*s+h*n*l-t*u*l-o*n*f+t*a*f)*T,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,u=a+a,f=r*c,d=r*h,g=r*u,_=o*h,m=o*u,p=a*u,v=l*c,y=l*h,M=l*u,P=n.x,w=n.y,T=n.z;return s[0]=(1-(_+p))*P,s[1]=(d+M)*P,s[2]=(g-y)*P,s[3]=0,s[4]=(d-M)*w,s[5]=(1-(f+p))*w,s[6]=(m+v)*w,s[7]=0,s[8]=(g+y)*T,s[9]=(m-v)*T,s[10]=(1-(f+_))*T,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=vs.set(s[0],s[1],s[2]).length(),o=vs.set(s[4],s[5],s[6]).length(),a=vs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Wn.copy(this);let c=1/r,h=1/o,u=1/a;return Wn.elements[0]*=c,Wn.elements[1]*=c,Wn.elements[2]*=c,Wn.elements[4]*=h,Wn.elements[5]*=h,Wn.elements[6]*=h,Wn.elements[8]*=u,Wn.elements[9]*=u,Wn.elements[10]*=u,t.setFromRotationMatrix(Wn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=mi){let l=this.elements,c=2*r/(t-e),h=2*r/(n-s),u=(t+e)/(t-e),f=(n+s)/(n-s),d,g;if(a===mi)d=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Eo)d=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=mi){let l=this.elements,c=1/(t-e),h=1/(n-s),u=1/(o-r),f=(t+e)*c,d=(n+s)*h,g,_;if(a===mi)g=(o+r)*u,_=-2*u;else if(a===Eo)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},vs=new A,Wn=new He,Ep=new A(0,0,0),bp=new A(1,1,1),Ii=new A,Gr=new A,Sn=new A,Gh=new He,Wh=new Nt,jt=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(kt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-kt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(kt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-kt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(kt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-kt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Gh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Gh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Wh.setFromEuler(this),this.setFromQuaternion(Wh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};jt.DEFAULT_ORDER="XYZ";var Mr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Sp=0,Xh=new A,ys=new Nt,hi=new He,Wr=new A,or=new A,Tp=new A,wp=new Nt,Yh=new A(1,0,0),qh=new A(0,1,0),Kh=new A(0,0,1),Zh={type:"added"},Ap={type:"removed"},Ms={type:"childadded",child:null},Ua={type:"childremoved",child:null},Pt=class i extends _i{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Sp++}),this.uuid=jn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new A,t=new jt,n=new Nt,s=new A(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new He},normalMatrix:{value:new ot}}),this.matrix=new He,this.matrixWorld=new He,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Mr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ys.setFromAxisAngle(e,t),this.quaternion.multiply(ys),this}rotateOnWorldAxis(e,t){return ys.setFromAxisAngle(e,t),this.quaternion.premultiply(ys),this}rotateX(e){return this.rotateOnAxis(Yh,e)}rotateY(e){return this.rotateOnAxis(qh,e)}rotateZ(e){return this.rotateOnAxis(Kh,e)}translateOnAxis(e,t){return Xh.copy(e).applyQuaternion(this.quaternion),this.position.add(Xh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Yh,e)}translateY(e){return this.translateOnAxis(qh,e)}translateZ(e){return this.translateOnAxis(Kh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(hi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Wr.copy(e):Wr.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),or.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?hi.lookAt(or,Wr,this.up):hi.lookAt(Wr,or,this.up),this.quaternion.setFromRotationMatrix(hi),s&&(hi.extractRotation(s.matrixWorld),ys.setFromRotationMatrix(hi),this.quaternion.premultiply(ys.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Zh),Ms.child=e,this.dispatchEvent(Ms),Ms.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ap),Ua.child=e,this.dispatchEvent(Ua),Ua.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),hi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),hi.multiply(e.parent.matrixWorld)),e.applyMatrix4(hi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Zh),Ms.child=e,this.dispatchEvent(Ms),Ms.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(or,e,Tp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(or,wp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),f=o(e.skeletons),d=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};Pt.DEFAULT_UP=new A(0,1,0);Pt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Xn=new A,ui=new A,Fa=new A,fi=new A,Es=new A,bs=new A,jh=new A,Oa=new A,Ba=new A,Ha=new A,za=new mt,ka=new mt,Va=new mt,ns=class i{constructor(e=new A,t=new A,n=new A){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Xn.subVectors(e,t),s.cross(Xn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Xn.subVectors(s,t),ui.subVectors(n,t),Fa.subVectors(e,t);let o=Xn.dot(Xn),a=Xn.dot(ui),l=Xn.dot(Fa),c=ui.dot(ui),h=ui.dot(Fa),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let f=1/u,d=(c*l-a*h)*f,g=(o*h-a*l)*f;return r.set(1-d-g,g,d)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,fi)===null?!1:fi.x>=0&&fi.y>=0&&fi.x+fi.y<=1}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,fi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,fi.x),l.addScaledVector(o,fi.y),l.addScaledVector(a,fi.z),l)}static getInterpolatedAttribute(e,t,n,s,r,o){return za.setScalar(0),ka.setScalar(0),Va.setScalar(0),za.fromBufferAttribute(e,t),ka.fromBufferAttribute(e,n),Va.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(za,r.x),o.addScaledVector(ka,r.y),o.addScaledVector(Va,r.z),o}static isFrontFacing(e,t,n,s){return Xn.subVectors(n,t),ui.subVectors(e,t),Xn.cross(ui).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Xn.subVectors(this.c,this.b),ui.subVectors(this.a,this.b),Xn.cross(ui).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;Es.subVectors(s,n),bs.subVectors(r,n),Oa.subVectors(e,n);let l=Es.dot(Oa),c=bs.dot(Oa);if(l<=0&&c<=0)return t.copy(n);Ba.subVectors(e,s);let h=Es.dot(Ba),u=bs.dot(Ba);if(h>=0&&u<=h)return t.copy(s);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(Es,o);Ha.subVectors(e,r);let d=Es.dot(Ha),g=bs.dot(Ha);if(g>=0&&d<=g)return t.copy(r);let _=d*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(bs,a);let m=h*g-d*u;if(m<=0&&u-h>=0&&d-g>=0)return jh.subVectors(r,s),a=(u-h)/(u-h+(d-g)),t.copy(s).addScaledVector(jh,a);let p=1/(m+_+f);return o=_*p,a=f*p,t.copy(n).addScaledVector(Es,o).addScaledVector(bs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},cf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Di={h:0,s:0,l:0},Xr={h:0,s:0,l:0};function Ga(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var z=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ht){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ut.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=ut.workingColorSpace){return this.r=e,this.g=t,this.b=n,ut.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=ut.workingColorSpace){if(e=Fc(e,1),t=kt(t,0,1),n=kt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Ga(o,r,e+1/3),this.g=Ga(o,r,e),this.b=Ga(o,r,e-1/3)}return ut.toWorkingColorSpace(this,s),this}setStyle(e,t=Ht){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ht){let n=cf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ds(e.r),this.g=Ds(e.g),this.b=Ds(e.b),this}copyLinearToSRGB(e){return this.r=Aa(e.r),this.g=Aa(e.g),this.b=Aa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ht){return ut.fromWorkingColorSpace(an.copy(this),e),Math.round(kt(an.r*255,0,255))*65536+Math.round(kt(an.g*255,0,255))*256+Math.round(kt(an.b*255,0,255))}getHexString(e=Ht){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ut.workingColorSpace){ut.fromWorkingColorSpace(an.copy(this),t);let n=an.r,s=an.g,r=an.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=ut.workingColorSpace){return ut.fromWorkingColorSpace(an.copy(this),t),e.r=an.r,e.g=an.g,e.b=an.b,e}getStyle(e=Ht){ut.fromWorkingColorSpace(an.copy(this),e);let t=an.r,n=an.g,s=an.b;return e!==Ht?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Di),this.setHSL(Di.h+e,Di.s+t,Di.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Di),e.getHSL(Xr);let n=mr(Di.h,Xr.h,t),s=mr(Di.s,Xr.s,t),r=mr(Di.l,Xr.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},an=new z;z.NAMES=cf;var Rp=0,An=class extends _i{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Rp++}),this.uuid=jn(),this.name="",this.type="Material",this.blending=Zn,this.side=ii,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=al,this.blendDst=ll,this.blendEquation=ts,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new z(0,0,0),this.blendAlpha=0,this.depthFunc=Ns,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Fh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ps,this.stencilZFail=ps,this.stencilZPass=ps,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Zn&&(n.blending=this.blending),this.side!==ii&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==al&&(n.blendSrc=this.blendSrc),this.blendDst!==ll&&(n.blendDst=this.blendDst),this.blendEquation!==ts&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ns&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Fh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ps&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ps&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ps&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},wt=class extends An{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new z(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new jt,this.combine=qu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var zt=new A,Yr=new we,Xe=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Gl,this.updateRanges=[],this.gpuType=Kn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Yr.fromBufferAttribute(this,t),Yr.applyMatrix3(e),this.setXY(t,Yr.x,Yr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.applyMatrix3(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.applyMatrix4(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.applyNormalMatrix(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.transformDirection(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=qn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=yt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=qn(t,this.array)),t}setX(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=qn(t,this.array)),t}setY(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=qn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=qn(t,this.array)),t}setW(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array),s=yt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array),s=yt(s,this.array),r=yt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Gl&&(e.usage=this.usage),e}};var To=class extends Xe{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var wo=class extends Xe{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Le=class extends Xe{constructor(e,t,n){super(new Float32Array(e),t,n)}},Cp=0,Dn=new He,Wa=new Pt,Ss=new A,Tn=new gn,ar=new gn,qt=new A,Ye=class i extends _i{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Cp++}),this.uuid=jn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(lf(e)?wo:To)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new ot().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Dn.makeRotationFromQuaternion(e),this.applyMatrix4(Dn),this}rotateX(e){return Dn.makeRotationX(e),this.applyMatrix4(Dn),this}rotateY(e){return Dn.makeRotationY(e),this.applyMatrix4(Dn),this}rotateZ(e){return Dn.makeRotationZ(e),this.applyMatrix4(Dn),this}translate(e,t,n){return Dn.makeTranslation(e,t,n),this.applyMatrix4(Dn),this}scale(e,t,n){return Dn.makeScale(e,t,n),this.applyMatrix4(Dn),this}lookAt(e){return Wa.lookAt(e),Wa.updateMatrix(),this.applyMatrix4(Wa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ss).negate(),this.translate(Ss.x,Ss.y,Ss.z),this}setFromPoints(e){let t=[];for(let n=0,s=e.length;n<s;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Le(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new gn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new A(-1/0,-1/0,-1/0),new A(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Tn.setFromBufferAttribute(r),this.morphTargetsRelative?(qt.addVectors(this.boundingBox.min,Tn.min),this.boundingBox.expandByPoint(qt),qt.addVectors(this.boundingBox.max,Tn.max),this.boundingBox.expandByPoint(qt)):(this.boundingBox.expandByPoint(Tn.min),this.boundingBox.expandByPoint(Tn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new wn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new A,1/0);return}if(e){let n=this.boundingSphere.center;if(Tn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];ar.setFromBufferAttribute(a),this.morphTargetsRelative?(qt.addVectors(Tn.min,ar.min),Tn.expandByPoint(qt),qt.addVectors(Tn.max,ar.max),Tn.expandByPoint(qt)):(Tn.expandByPoint(ar.min),Tn.expandByPoint(ar.max))}Tn.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)qt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(qt));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)qt.fromBufferAttribute(a,c),l&&(Ss.fromBufferAttribute(e,c),qt.add(Ss)),s=Math.max(s,n.distanceToSquared(qt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Xe(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let I=0;I<n.count;I++)a[I]=new A,l[I]=new A;let c=new A,h=new A,u=new A,f=new we,d=new we,g=new we,_=new A,m=new A;function p(I,U,x){c.fromBufferAttribute(n,I),h.fromBufferAttribute(n,U),u.fromBufferAttribute(n,x),f.fromBufferAttribute(r,I),d.fromBufferAttribute(r,U),g.fromBufferAttribute(r,x),h.sub(c),u.sub(c),d.sub(f),g.sub(f);let E=1/(d.x*g.y-g.x*d.y);isFinite(E)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-d.y).multiplyScalar(E),m.copy(u).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(E),a[I].add(_),a[U].add(_),a[x].add(_),l[I].add(m),l[U].add(m),l[x].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let I=0,U=v.length;I<U;++I){let x=v[I],E=x.start,D=x.count;for(let O=E,H=E+D;O<H;O+=3)p(e.getX(O+0),e.getX(O+1),e.getX(O+2))}let y=new A,M=new A,P=new A,w=new A;function T(I){P.fromBufferAttribute(s,I),w.copy(P);let U=a[I];y.copy(U),y.sub(P.multiplyScalar(P.dot(U))).normalize(),M.crossVectors(w,U);let E=M.dot(l[I])<0?-1:1;o.setXYZW(I,y.x,y.y,y.z,E)}for(let I=0,U=v.length;I<U;++I){let x=v[I],E=x.start,D=x.count;for(let O=E,H=E+D;O<H;O+=3)T(e.getX(O+0)),T(e.getX(O+1)),T(e.getX(O+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Xe(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let s=new A,r=new A,o=new A,a=new A,l=new A,c=new A,h=new A,u=new A;if(e)for(let f=0,d=e.count;f<d;f+=3){let g=e.getX(f+0),_=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)qt.fromBufferAttribute(e,t),qt.normalize(),e.setXYZ(t,qt.x,qt.y,qt.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h),d=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?d=l[_]*a.data.stride+a.offset:d=l[_]*h;for(let p=0;p<h;p++)f[g++]=c[d++]}return new Xe(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,n);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let f=c[h],d=e(f,n);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let d=c[u];h.push(d.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},$h=new He,ji=new xi,qr=new wn,Jh=new A,Kr=new A,Zr=new A,jr=new A,Xa=new A,$r=new A,Qh=new A,Jr=new A,Ne=class extends Pt{constructor(e=new Ye,t=new wt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){$r.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(Xa.fromBufferAttribute(u,e),o?$r.addScaledVector(Xa,h):$r.addScaledVector(Xa.sub(t),h))}t.add($r)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),qr.copy(n.boundingSphere),qr.applyMatrix4(r),ji.copy(e.ray).recast(e.near),!(qr.containsPoint(ji.origin)===!1&&(ji.intersectSphere(qr,Jh)===null||ji.origin.distanceToSquared(Jh)>(e.far-e.near)**2))&&($h.copy(r).invert(),ji.copy(e.ray).applyMatrix4($h),!(n.boundingBox!==null&&ji.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ji)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){let m=f[g],p=o[m.materialIndex],v=Math.max(m.start,d.start),y=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let M=v,P=y;M<P;M+=3){let w=a.getX(M),T=a.getX(M+1),I=a.getX(M+2);s=Qr(this,p,e,n,c,h,u,w,T,I),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){let v=a.getX(m),y=a.getX(m+1),M=a.getX(m+2);s=Qr(this,o,e,n,c,h,u,v,y,M),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){let m=f[g],p=o[m.materialIndex],v=Math.max(m.start,d.start),y=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let M=v,P=y;M<P;M+=3){let w=M,T=M+1,I=M+2;s=Qr(this,p,e,n,c,h,u,w,T,I),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){let v=m,y=m+1,M=m+2;s=Qr(this,o,e,n,c,h,u,v,y,M),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function Pp(i,e,t,n,s,r,o,a){let l;if(e.side===Kt?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===ii,a),l===null)return null;Jr.copy(a),Jr.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Jr);return c<t.near||c>t.far?null:{distance:c,point:Jr.clone(),object:i}}function Qr(i,e,t,n,s,r,o,a,l,c){i.getVertexPosition(a,Kr),i.getVertexPosition(l,Zr),i.getVertexPosition(c,jr);let h=Pp(i,e,t,n,Kr,Zr,jr,Qh);if(h){let u=new A;ns.getBarycoord(Qh,Kr,Zr,jr,u),s&&(h.uv=ns.getInterpolatedAttribute(s,a,l,c,u,new we)),r&&(h.uv1=ns.getInterpolatedAttribute(r,a,l,c,u,new we)),o&&(h.normal=ns.getInterpolatedAttribute(o,a,l,c,u,new A),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new A,materialIndex:0};ns.getNormal(Kr,Zr,jr,f.normal),h.face=f,h.barycoord=u}return h}var Rt=class i extends Ye{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],f=0,d=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Le(c,3)),this.setAttribute("normal",new Le(h,3)),this.setAttribute("uv",new Le(u,2));function g(_,m,p,v,y,M,P,w,T,I,U){let x=M/T,E=P/I,D=M/2,O=P/2,H=w/2,J=T+1,q=I+1,te=0,X=0,he=new A;for(let G=0;G<q;G++){let ie=G*E-O;for(let Ee=0;Ee<J;Ee++){let de=Ee*x-D;he[_]=de*v,he[m]=ie*y,he[p]=H,c.push(he.x,he.y,he.z),he[_]=0,he[m]=0,he[p]=w>0?1:-1,h.push(he.x,he.y,he.z),u.push(Ee/T),u.push(1-G/I),te+=1}}for(let G=0;G<I;G++)for(let ie=0;ie<T;ie++){let Ee=f+ie+J*G,de=f+ie+J*(G+1),V=f+(ie+1)+J*(G+1),ne=f+(ie+1)+J*G;l.push(Ee,de,ne),l.push(de,V,ne),X+=6}a.addGroup(d,X,U),d+=X,f+=te}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Vs(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function hn(i){let e={};for(let t=0;t<i.length;t++){let n=Vs(i[t]);for(let s in n)e[s]=n[s]}return e}function Ip(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function hf(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ut.workingColorSpace}var Vi={clone:Vs,merge:hn},Dp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Lp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,at=class extends An{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Dp,this.fragmentShader=Lp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Vs(e.uniforms),this.uniformsGroups=Ip(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Ao=class extends Pt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new He,this.projectionMatrix=new He,this.projectionMatrixInverse=new He,this.coordinateSystem=mi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Li=new A,eu=new we,tu=new we,Ct=class extends Ao{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ks*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(pr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ks*2*Math.atan(Math.tan(pr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Li.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Li.x,Li.y).multiplyScalar(-e/Li.z),Li.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Li.x,Li.y).multiplyScalar(-e/Li.z)}getViewSize(e,t){return this.getViewBounds(e,eu,tu),t.subVectors(tu,eu)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(pr*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Ts=-90,ws=1,ql=class extends Pt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ct(Ts,ws,e,t);s.layers=this.layers,this.add(s);let r=new Ct(Ts,ws,e,t);r.layers=this.layers,this.add(r);let o=new Ct(Ts,ws,e,t);o.layers=this.layers,this.add(o);let a=new Ct(Ts,ws,e,t);a.layers=this.layers,this.add(a);let l=new Ct(Ts,ws,e,t);l.layers=this.layers,this.add(l);let c=new Ct(Ts,ws,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===mi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Eo)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(u,f,d),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Ro=class extends Zt{constructor(e,t,n,s,r,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Us,super(e,t,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Kl=class extends tn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Ro(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:en}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Rt(5,5,5),r=new at({name:"CubemapFromEquirect",uniforms:Vs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Kt,blending:ni});r.uniforms.tEquirect.value=t;let o=new Ne(s,r),a=t.minFilter;return t.minFilter===ti&&(t.minFilter=en),new ql(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,s){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}},Ya=new A,Np=new A,Up=new ot,un=class{constructor(e=new A(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Ya.subVectors(n,t).cross(Np.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Ya),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Up.getNormalMatrix(e),s=this.coplanarPoint(Ya).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},$i=new wn,eo=new A,Er=class{constructor(e=new un,t=new un,n=new un,s=new un,r=new un,o=new un){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=mi){let n=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],u=s[6],f=s[7],d=s[8],g=s[9],_=s[10],m=s[11],p=s[12],v=s[13],y=s[14],M=s[15];if(n[0].setComponents(l-r,f-c,m-d,M-p).normalize(),n[1].setComponents(l+r,f+c,m+d,M+p).normalize(),n[2].setComponents(l+o,f+h,m+g,M+v).normalize(),n[3].setComponents(l-o,f-h,m-g,M-v).normalize(),n[4].setComponents(l-a,f-u,m-_,M-y).normalize(),t===mi)n[5].setComponents(l+a,f+u,m+_,M+y).normalize();else if(t===Eo)n[5].setComponents(a,u,_,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),$i.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),$i.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere($i)}intersectsSprite(e){return $i.center.set(0,0,0),$i.radius=.7071067811865476,$i.applyMatrix4(e.matrixWorld),this.intersectsSphere($i)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(eo.x=s.normal.x>0?e.max.x:e.min.x,eo.y=s.normal.y>0?e.max.y:e.min.y,eo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(eo)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function uf(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Fp(i){let e=new WeakMap;function t(a,l){let c=a.array,h=a.usage,u=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,h);else{u.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<u.length;d++){let g=u[f],_=u[d];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,u[f]=_)}u.length=f+1;for(let d=0,g=u.length;d<g;d++){let _=u[d];i.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var nn=class i extends Ye{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,u=e/a,f=t/l,d=[],g=[],_=[],m=[];for(let p=0;p<h;p++){let v=p*f-o;for(let y=0;y<c;y++){let M=y*u-r;g.push(M,-v,0),_.push(0,0,1),m.push(y/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let v=0;v<a;v++){let y=v+c*p,M=v+c*(p+1),P=v+1+c*(p+1),w=v+1+c*p;d.push(y,M,w),d.push(M,P,w)}this.setIndex(d),this.setAttribute("position",new Le(g,3)),this.setAttribute("normal",new Le(_,3)),this.setAttribute("uv",new Le(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},Op=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Bp=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Hp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,zp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,kp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Vp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Gp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Wp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Xp=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Yp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,qp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Kp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Zp=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,jp=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,$p=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Jp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Qp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,em=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,tm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,nm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,im=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,sm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,rm=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,om=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,am=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,lm=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,cm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,hm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,um=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,fm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,dm="gl_FragColor = linearToOutputTexel( gl_FragColor );",pm=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,mm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,gm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,_m=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,xm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,vm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,ym=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Mm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Em=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,bm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Sm=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Tm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,wm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Am=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Rm=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Cm=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Pm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Im=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Dm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Lm=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Nm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Um=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Fm=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Om=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Bm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Hm=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,zm=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,km=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Vm=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Gm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Wm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Xm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Ym=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Km=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Zm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,jm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,$m=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Jm=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Qm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,e0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,t0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,n0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,i0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,s0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,r0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,o0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,a0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,l0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,c0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,h0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,u0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,f0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,d0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,p0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,m0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,g0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,_0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,x0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,v0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,y0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,M0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,E0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,b0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,S0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,T0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,w0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,A0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,R0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,C0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,P0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,I0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,D0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,L0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,N0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,U0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,F0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,O0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,B0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,H0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,z0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,k0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,V0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,G0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,W0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,X0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Y0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,q0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,K0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Z0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,j0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,$0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,J0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Q0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,eg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,tg=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ng=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,ig=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,sg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,rg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,og=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,ag=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lg=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,cg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hg=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,ug=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,fg=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,dg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,pg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,mg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,rt={alphahash_fragment:Op,alphahash_pars_fragment:Bp,alphamap_fragment:Hp,alphamap_pars_fragment:zp,alphatest_fragment:kp,alphatest_pars_fragment:Vp,aomap_fragment:Gp,aomap_pars_fragment:Wp,batching_pars_vertex:Xp,batching_vertex:Yp,begin_vertex:qp,beginnormal_vertex:Kp,bsdfs:Zp,iridescence_fragment:jp,bumpmap_pars_fragment:$p,clipping_planes_fragment:Jp,clipping_planes_pars_fragment:Qp,clipping_planes_pars_vertex:em,clipping_planes_vertex:tm,color_fragment:nm,color_pars_fragment:im,color_pars_vertex:sm,color_vertex:rm,common:om,cube_uv_reflection_fragment:am,defaultnormal_vertex:lm,displacementmap_pars_vertex:cm,displacementmap_vertex:hm,emissivemap_fragment:um,emissivemap_pars_fragment:fm,colorspace_fragment:dm,colorspace_pars_fragment:pm,envmap_fragment:mm,envmap_common_pars_fragment:gm,envmap_pars_fragment:_m,envmap_pars_vertex:xm,envmap_physical_pars_fragment:Cm,envmap_vertex:vm,fog_vertex:ym,fog_pars_vertex:Mm,fog_fragment:Em,fog_pars_fragment:bm,gradientmap_pars_fragment:Sm,lightmap_pars_fragment:Tm,lights_lambert_fragment:wm,lights_lambert_pars_fragment:Am,lights_pars_begin:Rm,lights_toon_fragment:Pm,lights_toon_pars_fragment:Im,lights_phong_fragment:Dm,lights_phong_pars_fragment:Lm,lights_physical_fragment:Nm,lights_physical_pars_fragment:Um,lights_fragment_begin:Fm,lights_fragment_maps:Om,lights_fragment_end:Bm,logdepthbuf_fragment:Hm,logdepthbuf_pars_fragment:zm,logdepthbuf_pars_vertex:km,logdepthbuf_vertex:Vm,map_fragment:Gm,map_pars_fragment:Wm,map_particle_fragment:Xm,map_particle_pars_fragment:Ym,metalnessmap_fragment:qm,metalnessmap_pars_fragment:Km,morphinstance_vertex:Zm,morphcolor_vertex:jm,morphnormal_vertex:$m,morphtarget_pars_vertex:Jm,morphtarget_vertex:Qm,normal_fragment_begin:e0,normal_fragment_maps:t0,normal_pars_fragment:n0,normal_pars_vertex:i0,normal_vertex:s0,normalmap_pars_fragment:r0,clearcoat_normal_fragment_begin:o0,clearcoat_normal_fragment_maps:a0,clearcoat_pars_fragment:l0,iridescence_pars_fragment:c0,opaque_fragment:h0,packing:u0,premultiplied_alpha_fragment:f0,project_vertex:d0,dithering_fragment:p0,dithering_pars_fragment:m0,roughnessmap_fragment:g0,roughnessmap_pars_fragment:_0,shadowmap_pars_fragment:x0,shadowmap_pars_vertex:v0,shadowmap_vertex:y0,shadowmask_pars_fragment:M0,skinbase_vertex:E0,skinning_pars_vertex:b0,skinning_vertex:S0,skinnormal_vertex:T0,specularmap_fragment:w0,specularmap_pars_fragment:A0,tonemapping_fragment:R0,tonemapping_pars_fragment:C0,transmission_fragment:P0,transmission_pars_fragment:I0,uv_pars_fragment:D0,uv_pars_vertex:L0,uv_vertex:N0,worldpos_vertex:U0,background_vert:F0,background_frag:O0,backgroundCube_vert:B0,backgroundCube_frag:H0,cube_vert:z0,cube_frag:k0,depth_vert:V0,depth_frag:G0,distanceRGBA_vert:W0,distanceRGBA_frag:X0,equirect_vert:Y0,equirect_frag:q0,linedashed_vert:K0,linedashed_frag:Z0,meshbasic_vert:j0,meshbasic_frag:$0,meshlambert_vert:J0,meshlambert_frag:Q0,meshmatcap_vert:eg,meshmatcap_frag:tg,meshnormal_vert:ng,meshnormal_frag:ig,meshphong_vert:sg,meshphong_frag:rg,meshphysical_vert:og,meshphysical_frag:ag,meshtoon_vert:lg,meshtoon_frag:cg,points_vert:hg,points_frag:ug,shadow_vert:fg,shadow_frag:dg,sprite_vert:pg,sprite_frag:mg},Ie={common:{diffuse:{value:new z(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ot}},envmap:{envMap:{value:null},envMapRotation:{value:new ot},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ot},normalScale:{value:new we(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new z(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new z(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0},uvTransform:{value:new ot}},sprite:{diffuse:{value:new z(16777215)},opacity:{value:1},center:{value:new we(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}}},ei={basic:{uniforms:hn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.fog]),vertexShader:rt.meshbasic_vert,fragmentShader:rt.meshbasic_frag},lambert:{uniforms:hn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new z(0)}}]),vertexShader:rt.meshlambert_vert,fragmentShader:rt.meshlambert_frag},phong:{uniforms:hn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new z(0)},specular:{value:new z(1118481)},shininess:{value:30}}]),vertexShader:rt.meshphong_vert,fragmentShader:rt.meshphong_frag},standard:{uniforms:hn([Ie.common,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.roughnessmap,Ie.metalnessmap,Ie.fog,Ie.lights,{emissive:{value:new z(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag},toon:{uniforms:hn([Ie.common,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.gradientmap,Ie.fog,Ie.lights,{emissive:{value:new z(0)}}]),vertexShader:rt.meshtoon_vert,fragmentShader:rt.meshtoon_frag},matcap:{uniforms:hn([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,{matcap:{value:null}}]),vertexShader:rt.meshmatcap_vert,fragmentShader:rt.meshmatcap_frag},points:{uniforms:hn([Ie.points,Ie.fog]),vertexShader:rt.points_vert,fragmentShader:rt.points_frag},dashed:{uniforms:hn([Ie.common,Ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:rt.linedashed_vert,fragmentShader:rt.linedashed_frag},depth:{uniforms:hn([Ie.common,Ie.displacementmap]),vertexShader:rt.depth_vert,fragmentShader:rt.depth_frag},normal:{uniforms:hn([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,{opacity:{value:1}}]),vertexShader:rt.meshnormal_vert,fragmentShader:rt.meshnormal_frag},sprite:{uniforms:hn([Ie.sprite,Ie.fog]),vertexShader:rt.sprite_vert,fragmentShader:rt.sprite_frag},background:{uniforms:{uvTransform:{value:new ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:rt.background_vert,fragmentShader:rt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ot}},vertexShader:rt.backgroundCube_vert,fragmentShader:rt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:rt.cube_vert,fragmentShader:rt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:rt.equirect_vert,fragmentShader:rt.equirect_frag},distanceRGBA:{uniforms:hn([Ie.common,Ie.displacementmap,{referencePosition:{value:new A},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:rt.distanceRGBA_vert,fragmentShader:rt.distanceRGBA_frag},shadow:{uniforms:hn([Ie.lights,Ie.fog,{color:{value:new z(0)},opacity:{value:1}}]),vertexShader:rt.shadow_vert,fragmentShader:rt.shadow_frag}};ei.physical={uniforms:hn([ei.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ot},clearcoatNormalScale:{value:new we(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ot},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ot},sheen:{value:0},sheenColor:{value:new z(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ot},transmissionSamplerSize:{value:new we},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ot},attenuationDistance:{value:0},attenuationColor:{value:new z(0)},specularColor:{value:new z(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ot},anisotropyVector:{value:new we},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ot}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag};var to={r:0,b:0,g:0},Ji=new jt,gg=new He;function _g(i,e,t,n,s,r,o){let a=new z(0),l=r===!0?0:1,c,h,u=null,f=0,d=null;function g(v){let y=v.isScene===!0?v.background:null;return y&&y.isTexture&&(y=(v.backgroundBlurriness>0?t:e).get(y)),y}function _(v){let y=!1,M=g(v);M===null?p(a,l):M&&M.isColor&&(p(M,1),y=!0);let P=i.xr.getEnvironmentBlendMode();P==="additive"?n.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(v,y){let M=g(y);M&&(M.isCubeTexture||M.mapping===Jo)?(h===void 0&&(h=new Ne(new Rt(1,1,1),new at({name:"BackgroundCubeMaterial",uniforms:Vs(ei.backgroundCube.uniforms),vertexShader:ei.backgroundCube.vertexShader,fragmentShader:ei.backgroundCube.fragmentShader,side:Kt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(P,w,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Ji.copy(y.backgroundRotation),Ji.x*=-1,Ji.y*=-1,Ji.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Ji.y*=-1,Ji.z*=-1),h.material.uniforms.envMap.value=M,h.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(gg.makeRotationFromEuler(Ji)),h.material.toneMapped=ut.getTransfer(M.colorSpace)!==bt,(u!==M||f!==M.version||d!==i.toneMapping)&&(h.material.needsUpdate=!0,u=M,f=M.version,d=i.toneMapping),h.layers.enableAll(),v.unshift(h,h.geometry,h.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new Ne(new nn(2,2),new at({name:"BackgroundMaterial",uniforms:Vs(ei.background.uniforms),vertexShader:ei.background.vertexShader,fragmentShader:ei.background.fragmentShader,side:ii,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=ut.getTransfer(M.colorSpace)!==bt,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||f!==M.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,u=M,f=M.version,d=i.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function p(v,y){v.getRGB(to,hf(i)),n.buffers.color.setClear(to.r,to.g,to.b,y,o)}return{getClearColor:function(){return a},setClearColor:function(v,y=1){a.set(v),l=y,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,p(a,l)},render:_,addToRenderList:m}}function xg(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,o=!1;function a(x,E,D,O,H){let J=!1,q=u(O,D,E);r!==q&&(r=q,c(r.object)),J=d(x,O,D,H),J&&g(x,O,D,H),H!==null&&e.update(H,i.ELEMENT_ARRAY_BUFFER),(J||o)&&(o=!1,M(x,E,D,O),H!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function l(){return i.createVertexArray()}function c(x){return i.bindVertexArray(x)}function h(x){return i.deleteVertexArray(x)}function u(x,E,D){let O=D.wireframe===!0,H=n[x.id];H===void 0&&(H={},n[x.id]=H);let J=H[E.id];J===void 0&&(J={},H[E.id]=J);let q=J[O];return q===void 0&&(q=f(l()),J[O]=q),q}function f(x){let E=[],D=[],O=[];for(let H=0;H<t;H++)E[H]=0,D[H]=0,O[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:E,enabledAttributes:D,attributeDivisors:O,object:x,attributes:{},index:null}}function d(x,E,D,O){let H=r.attributes,J=E.attributes,q=0,te=D.getAttributes();for(let X in te)if(te[X].location>=0){let G=H[X],ie=J[X];if(ie===void 0&&(X==="instanceMatrix"&&x.instanceMatrix&&(ie=x.instanceMatrix),X==="instanceColor"&&x.instanceColor&&(ie=x.instanceColor)),G===void 0||G.attribute!==ie||ie&&G.data!==ie.data)return!0;q++}return r.attributesNum!==q||r.index!==O}function g(x,E,D,O){let H={},J=E.attributes,q=0,te=D.getAttributes();for(let X in te)if(te[X].location>=0){let G=J[X];G===void 0&&(X==="instanceMatrix"&&x.instanceMatrix&&(G=x.instanceMatrix),X==="instanceColor"&&x.instanceColor&&(G=x.instanceColor));let ie={};ie.attribute=G,G&&G.data&&(ie.data=G.data),H[X]=ie,q++}r.attributes=H,r.attributesNum=q,r.index=O}function _(){let x=r.newAttributes;for(let E=0,D=x.length;E<D;E++)x[E]=0}function m(x){p(x,0)}function p(x,E){let D=r.newAttributes,O=r.enabledAttributes,H=r.attributeDivisors;D[x]=1,O[x]===0&&(i.enableVertexAttribArray(x),O[x]=1),H[x]!==E&&(i.vertexAttribDivisor(x,E),H[x]=E)}function v(){let x=r.newAttributes,E=r.enabledAttributes;for(let D=0,O=E.length;D<O;D++)E[D]!==x[D]&&(i.disableVertexAttribArray(D),E[D]=0)}function y(x,E,D,O,H,J,q){q===!0?i.vertexAttribIPointer(x,E,D,H,J):i.vertexAttribPointer(x,E,D,O,H,J)}function M(x,E,D,O){_();let H=O.attributes,J=D.getAttributes(),q=E.defaultAttributeValues;for(let te in J){let X=J[te];if(X.location>=0){let he=H[te];if(he===void 0&&(te==="instanceMatrix"&&x.instanceMatrix&&(he=x.instanceMatrix),te==="instanceColor"&&x.instanceColor&&(he=x.instanceColor)),he!==void 0){let G=he.normalized,ie=he.itemSize,Ee=e.get(he);if(Ee===void 0)continue;let de=Ee.buffer,V=Ee.type,ne=Ee.bytesPerElement,ge=V===i.INT||V===i.UNSIGNED_INT||he.gpuType===Rc;if(he.isInterleavedBufferAttribute){let me=he.data,Ae=me.stride,oe=he.offset;if(me.isInstancedInterleavedBuffer){for(let ve=0;ve<X.locationSize;ve++)p(X.location+ve,me.meshPerAttribute);x.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let ve=0;ve<X.locationSize;ve++)m(X.location+ve);i.bindBuffer(i.ARRAY_BUFFER,de);for(let ve=0;ve<X.locationSize;ve++)y(X.location+ve,ie/X.locationSize,V,G,Ae*ne,(oe+ie/X.locationSize*ve)*ne,ge)}else{if(he.isInstancedBufferAttribute){for(let me=0;me<X.locationSize;me++)p(X.location+me,he.meshPerAttribute);x.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let me=0;me<X.locationSize;me++)m(X.location+me);i.bindBuffer(i.ARRAY_BUFFER,de);for(let me=0;me<X.locationSize;me++)y(X.location+me,ie/X.locationSize,V,G,ie*ne,ie/X.locationSize*me*ne,ge)}}else if(q!==void 0){let G=q[te];if(G!==void 0)switch(G.length){case 2:i.vertexAttrib2fv(X.location,G);break;case 3:i.vertexAttrib3fv(X.location,G);break;case 4:i.vertexAttrib4fv(X.location,G);break;default:i.vertexAttrib1fv(X.location,G)}}}}v()}function P(){I();for(let x in n){let E=n[x];for(let D in E){let O=E[D];for(let H in O)h(O[H].object),delete O[H];delete E[D]}delete n[x]}}function w(x){if(n[x.id]===void 0)return;let E=n[x.id];for(let D in E){let O=E[D];for(let H in O)h(O[H].object),delete O[H];delete E[D]}delete n[x.id]}function T(x){for(let E in n){let D=n[E];if(D[x.id]===void 0)continue;let O=D[x.id];for(let H in O)h(O[H].object),delete O[H];delete D[x.id]}}function I(){U(),o=!0,r!==s&&(r=s,c(r.object))}function U(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:I,resetDefaultState:U,dispose:P,releaseStatesOfGeometry:w,releaseStatesOfProgram:T,initAttributes:_,enableAttribute:m,disableUnusedAttributes:v}}function vg(i,e,t){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),t.update(h,n,1)}function o(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),t.update(h,n,u))}function a(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let d=0;for(let g=0;g<u;g++)d+=h[g];t.update(d,n,1)}function l(c,h,u,f){if(u===0)return;let d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)o(c[g],h[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_];for(let _=0;_<f.length;_++)t.update(g,n,f[_])}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function yg(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let T=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(T){return!(T!==Nn&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){let I=T===Cn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==gi&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==Kn&&!I)}function l(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(f===!0){let T=e.get("EXT_clip_control");T.clipControlEXT(T.LOWER_LEFT_EXT,T.ZERO_TO_ONE_EXT)}let d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),P=g>0,w=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:M,vertexTextures:P,maxSamples:w}}function Mg(i){let e=this,t=null,n=0,s=!1,r=!1,o=new un,a=new ot,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||n!==0||s;return s=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,d){let g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let v=r?0:n,y=v*4,M=p.clippingState||null;l.value=M,M=h(g,f,y,d);for(let P=0;P!==y;++P)M[P]=t[P];p.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,f,d,g){let _=u!==null?u.length:0,m=null;if(_!==0){if(m=l.value,g!==!0||m===null){let p=d+_*4,v=f.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,M=d;y!==_;++y,M+=4)o.copy(u[y]).applyMatrix4(v,a),o.normal.toArray(m,M),m[M+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function Eg(i){let e=new WeakMap;function t(o,a){return a===_r?o.mapping=Us:a===gl&&(o.mapping=Fs),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===_r||a===gl)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Kl(l.height);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var Un=class extends Ao{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Ps=4,nu=[.125,.215,.35,.446,.526,.582],is=20,qa=new Un,iu=new z,Ka=null,Za=0,ja=0,$a=!1,es=(1+Math.sqrt(5))/2,As=1/es,su=[new A(-es,As,0),new A(es,As,0),new A(-As,0,es),new A(As,0,es),new A(0,es,-As),new A(0,es,As),new A(-1,1,-1),new A(1,1,-1),new A(-1,1,1),new A(1,1,1)],Gs=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){Ka=this._renderer.getRenderTarget(),Za=this._renderer.getActiveCubeFace(),ja=this._renderer.getActiveMipmapLevel(),$a=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=au(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ou(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ka,Za,ja),this._renderer.xr.enabled=$a,e.scissorTest=!1,no(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Us||e.mapping===Fs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ka=this._renderer.getRenderTarget(),Za=this._renderer.getActiveCubeFace(),ja=this._renderer.getActiveMipmapLevel(),$a=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:en,minFilter:en,generateMipmaps:!1,type:Cn,format:Nn,colorSpace:$t,depthBuffer:!1},s=ru(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ru(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=bg(r)),this._blurMaterial=Sg(r,e,t)}return s}_compileMaterial(e){let t=new Ne(this._lodPlanes[0],e);this._renderer.compile(t,qa)}_sceneToCubeUV(e,t,n,s){let a=new Ct(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(iu),h.toneMapping=Ui,h.autoClear=!1;let d=new wt({name:"PMREM.Background",side:Kt,depthWrite:!1,depthTest:!1}),g=new Ne(new Rt,d),_=!1,m=e.background;m?m.isColor&&(d.color.copy(m),e.background=null,_=!0):(d.color.copy(iu),_=!0);for(let p=0;p<6;p++){let v=p%3;v===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):v===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));let y=this._cubeSize;no(s,v*y,p>2?y:0,y,y),h.setRenderTarget(s),_&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===Us||e.mapping===Fs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=au()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ou());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new Ne(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;no(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,qa)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=su[(s-r-1)%su.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Ne(this._lodPlanes[s],c),f=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*is-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):is;m>is&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${is}`);let p=[],v=0;for(let T=0;T<is;++T){let I=T/_,U=Math.exp(-I*I/2);p.push(U),T===0?v+=U:T<m&&(v+=2*U)}for(let T=0;T<p.length;T++)p[T]=p[T]/v;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:y}=this;f.dTheta.value=g,f.mipInt.value=y-n;let M=this._sizeLods[s],P=3*M*(s>y-Ps?s-y+Ps:0),w=4*(this._cubeSize-M);no(t,P,w,3*M,2*M),l.setRenderTarget(t),l.render(u,qa)}};function bg(i){let e=[],t=[],n=[],s=i,r=i-Ps+1+nu.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let l=1/a;o>i-Ps?l=nu[o-i+Ps-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,g=6,_=3,m=2,p=1,v=new Float32Array(_*g*d),y=new Float32Array(m*g*d),M=new Float32Array(p*g*d);for(let w=0;w<d;w++){let T=w%3*2/3-1,I=w>2?0:-1,U=[T,I,0,T+2/3,I,0,T+2/3,I+1,0,T,I,0,T+2/3,I+1,0,T,I+1,0];v.set(U,_*g*w),y.set(f,m*g*w);let x=[w,w,w,w,w,w];M.set(x,p*g*w)}let P=new Ye;P.setAttribute("position",new Xe(v,_)),P.setAttribute("uv",new Xe(y,m)),P.setAttribute("faceIndex",new Xe(M,p)),e.push(P),s>Ps&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function ru(i,e,t){let n=new tn(i,e,t);return n.texture.mapping=Jo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function no(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Sg(i,e,t){let n=new Float32Array(is),s=new A(0,1,0);return new at({name:"SphericalGaussianBlur",defines:{n:is,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Oc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ni,depthTest:!1,depthWrite:!1})}function ou(){return new at({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Oc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ni,depthTest:!1,depthWrite:!1})}function au(){return new at({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Oc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ni,depthTest:!1,depthWrite:!1})}function Oc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Tg(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===_r||l===gl,h=l===Us||l===Fs;if(c||h){let u=e.get(a),f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new Gs(i)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{let d=a.image;return c&&d&&d.height>0||h&&d&&s(d)?(t===null&&(t=new Gs(i)),u=c?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function wg(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&xo("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Ag(i,e,t,n){let s={},r=new WeakMap;function o(u){let f=u.target;f.index!==null&&e.remove(f.index);for(let g in f.attributes)e.remove(f.attributes[g]);for(let g in f.morphAttributes){let _=f.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)e.remove(_[m])}f.removeEventListener("dispose",o),delete s[f.id];let d=r.get(f);d&&(e.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function l(u){let f=u.attributes;for(let g in f)e.update(f[g],i.ARRAY_BUFFER);let d=u.morphAttributes;for(let g in d){let _=d[g];for(let m=0,p=_.length;m<p;m++)e.update(_[m],i.ARRAY_BUFFER)}}function c(u){let f=[],d=u.index,g=u.attributes.position,_=0;if(d!==null){let v=d.array;_=d.version;for(let y=0,M=v.length;y<M;y+=3){let P=v[y+0],w=v[y+1],T=v[y+2];f.push(P,w,w,T,T,P)}}else if(g!==void 0){let v=g.array;_=g.version;for(let y=0,M=v.length/3-1;y<M;y+=3){let P=y+0,w=y+1,T=y+2;f.push(P,w,w,T,T,P)}}else return;let m=new(lf(f)?wo:To)(f,1);m.version=_;let p=r.get(u);p&&e.remove(p),r.set(u,m)}function h(u){let f=r.get(u);if(f){let d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function Rg(i,e,t){let n;function s(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,d){i.drawElements(n,d,r,f*o),t.update(d,n,1)}function c(f,d,g){g!==0&&(i.drawElementsInstanced(n,d,r,f*o,g),t.update(d,n,g))}function h(f,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];t.update(m,n,1)}function u(f,d,g,_){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)c(f[p]/o,d[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,r,f,0,_,0,g);let p=0;for(let v=0;v<g;v++)p+=d[v];for(let v=0;v<_.length;v++)t.update(p,n,_[v])}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Cg(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Pg(i,e,t){let n=new WeakMap,s=new mt;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,f=n.get(a);if(f===void 0||f.count!==u){let U=function(){T.dispose(),n.delete(a),a.removeEventListener("dispose",U)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],v=a.morphAttributes.color||[],y=0;d===!0&&(y=1),g===!0&&(y=2),_===!0&&(y=3);let M=a.attributes.position.count*y,P=1;M>e.maxTextureSize&&(P=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);let w=new Float32Array(M*P*4*u),T=new So(w,M,P,u);T.type=Kn,T.needsUpdate=!0;let I=y*4;for(let x=0;x<u;x++){let E=m[x],D=p[x],O=v[x],H=M*P*4*x;for(let J=0;J<E.count;J++){let q=J*I;d===!0&&(s.fromBufferAttribute(E,J),w[H+q+0]=s.x,w[H+q+1]=s.y,w[H+q+2]=s.z,w[H+q+3]=0),g===!0&&(s.fromBufferAttribute(D,J),w[H+q+4]=s.x,w[H+q+5]=s.y,w[H+q+6]=s.z,w[H+q+7]=0),_===!0&&(s.fromBufferAttribute(O,J),w[H+q+8]=s.x,w[H+q+9]=s.y,w[H+q+10]=s.z,w[H+q+11]=O.itemSize===4?s.w:1)}}f={count:u,texture:T,size:new we(M,P)},n.set(a,f),a.addEventListener("dispose",U)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let d=0;for(let _=0;_<c.length;_++)d+=c[_];let g=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function Ig(i,e,t,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=e.get(l,h);if(s.get(u)!==c&&(e.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return u}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}var Co=class extends Zt{constructor(e,t,n,s,r,o,a,l,c,h=Is){if(h!==Is&&h!==Bs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Is&&(n=rs),n===void 0&&h===Bs&&(n=Os),super(null,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:ln,this.minFilter=l!==void 0?l:ln,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},ff=new Zt,lu=new Co(1,1),df=new So,pf=new Yl,mf=new Ro,cu=[],hu=[],uu=new Float32Array(16),fu=new Float32Array(9),du=new Float32Array(4);function Zs(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=cu[s];if(r===void 0&&(r=new Float32Array(s),cu[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function Gt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Wt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function ta(i,e){let t=hu[e];t===void 0&&(t=new Int32Array(e),hu[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Dg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Lg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Gt(t,e))return;i.uniform2fv(this.addr,e),Wt(t,e)}}function Ng(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Gt(t,e))return;i.uniform3fv(this.addr,e),Wt(t,e)}}function Ug(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Gt(t,e))return;i.uniform4fv(this.addr,e),Wt(t,e)}}function Fg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Gt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Wt(t,e)}else{if(Gt(t,n))return;du.set(n),i.uniformMatrix2fv(this.addr,!1,du),Wt(t,n)}}function Og(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Gt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Wt(t,e)}else{if(Gt(t,n))return;fu.set(n),i.uniformMatrix3fv(this.addr,!1,fu),Wt(t,n)}}function Bg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Gt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Wt(t,e)}else{if(Gt(t,n))return;uu.set(n),i.uniformMatrix4fv(this.addr,!1,uu),Wt(t,n)}}function Hg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function zg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Gt(t,e))return;i.uniform2iv(this.addr,e),Wt(t,e)}}function kg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Gt(t,e))return;i.uniform3iv(this.addr,e),Wt(t,e)}}function Vg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Gt(t,e))return;i.uniform4iv(this.addr,e),Wt(t,e)}}function Gg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Wg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Gt(t,e))return;i.uniform2uiv(this.addr,e),Wt(t,e)}}function Xg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Gt(t,e))return;i.uniform3uiv(this.addr,e),Wt(t,e)}}function Yg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Gt(t,e))return;i.uniform4uiv(this.addr,e),Wt(t,e)}}function qg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(lu.compareFunction=af,r=lu):r=ff,t.setTexture2D(e||r,s)}function Kg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||pf,s)}function Zg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||mf,s)}function jg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||df,s)}function $g(i){switch(i){case 5126:return Dg;case 35664:return Lg;case 35665:return Ng;case 35666:return Ug;case 35674:return Fg;case 35675:return Og;case 35676:return Bg;case 5124:case 35670:return Hg;case 35667:case 35671:return zg;case 35668:case 35672:return kg;case 35669:case 35673:return Vg;case 5125:return Gg;case 36294:return Wg;case 36295:return Xg;case 36296:return Yg;case 35678:case 36198:case 36298:case 36306:case 35682:return qg;case 35679:case 36299:case 36307:return Kg;case 35680:case 36300:case 36308:case 36293:return Zg;case 36289:case 36303:case 36311:case 36292:return jg}}function Jg(i,e){i.uniform1fv(this.addr,e)}function Qg(i,e){let t=Zs(e,this.size,2);i.uniform2fv(this.addr,t)}function e_(i,e){let t=Zs(e,this.size,3);i.uniform3fv(this.addr,t)}function t_(i,e){let t=Zs(e,this.size,4);i.uniform4fv(this.addr,t)}function n_(i,e){let t=Zs(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function i_(i,e){let t=Zs(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function s_(i,e){let t=Zs(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function r_(i,e){i.uniform1iv(this.addr,e)}function o_(i,e){i.uniform2iv(this.addr,e)}function a_(i,e){i.uniform3iv(this.addr,e)}function l_(i,e){i.uniform4iv(this.addr,e)}function c_(i,e){i.uniform1uiv(this.addr,e)}function h_(i,e){i.uniform2uiv(this.addr,e)}function u_(i,e){i.uniform3uiv(this.addr,e)}function f_(i,e){i.uniform4uiv(this.addr,e)}function d_(i,e,t){let n=this.cache,s=e.length,r=ta(t,s);Gt(n,r)||(i.uniform1iv(this.addr,r),Wt(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||ff,r[o])}function p_(i,e,t){let n=this.cache,s=e.length,r=ta(t,s);Gt(n,r)||(i.uniform1iv(this.addr,r),Wt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||pf,r[o])}function m_(i,e,t){let n=this.cache,s=e.length,r=ta(t,s);Gt(n,r)||(i.uniform1iv(this.addr,r),Wt(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||mf,r[o])}function g_(i,e,t){let n=this.cache,s=e.length,r=ta(t,s);Gt(n,r)||(i.uniform1iv(this.addr,r),Wt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||df,r[o])}function __(i){switch(i){case 5126:return Jg;case 35664:return Qg;case 35665:return e_;case 35666:return t_;case 35674:return n_;case 35675:return i_;case 35676:return s_;case 5124:case 35670:return r_;case 35667:case 35671:return o_;case 35668:case 35672:return a_;case 35669:case 35673:return l_;case 5125:return c_;case 36294:return h_;case 36295:return u_;case 36296:return f_;case 35678:case 36198:case 36298:case 36306:case 35682:return d_;case 35679:case 36299:case 36307:return p_;case 35680:case 36300:case 36308:case 36293:return m_;case 36289:case 36303:case 36311:case 36292:return g_}}var Zl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=$g(t.type)}},jl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=__(t.type)}},$l=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},Ja=/(\w+)(\])?(\[|\.)?/g;function pu(i,e){i.seq.push(e),i.map[e.id]=e}function x_(i,e,t){let n=i.name,s=n.length;for(Ja.lastIndex=0;;){let r=Ja.exec(n),o=Ja.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){pu(t,c===void 0?new Zl(a,i,e):new jl(a,i,e));break}else{let u=t.map[a];u===void 0&&(u=new $l(a),pu(t,u)),t=u}}}var Ls=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);x_(r,o,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function mu(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var v_=37297,y_=0;function M_(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function E_(i){let e=ut.getPrimaries(ut.workingColorSpace),t=ut.getPrimaries(i),n;switch(e===t?n="":e===Mo&&t===yo?n="LinearDisplayP3ToLinearSRGB":e===yo&&t===Mo&&(n="LinearSRGBToLinearDisplayP3"),i){case $t:case ea:return[n,"LinearTransferOETF"];case Ht:case Uc:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function gu(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+M_(i.getShaderSource(e),o)}else return s}function b_(i,e){let t=E_(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function S_(i,e){let t;switch(e){case Ec:t="Linear";break;case bc:t="Reinhard";break;case Sc:t="Cineon";break;case Pr:t="ACESFilmic";break;case Tc:t="AgX";break;case wc:t="Neutral";break;case Hd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var io=new A;function T_(){ut.getLuminanceCoefficients(io);let i=io.x.toFixed(4),e=io.y.toFixed(4),t=io.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function w_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(fr).join(`
`)}function A_(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function R_(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function fr(i){return i!==""}function _u(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function xu(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var C_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Jl(i){return i.replace(C_,I_)}var P_=new Map;function I_(i,e){let t=rt[e];if(t===void 0){let n=P_.get(e);if(n!==void 0)t=rt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Jl(t)}var D_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function vu(i){return i.replace(D_,L_)}function L_(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function yu(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function N_(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Yu?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Mc?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===pi&&(e="SHADOWMAP_TYPE_VSM"),e}function U_(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Us:case Fs:e="ENVMAP_TYPE_CUBE";break;case Jo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function F_(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Fs:e="ENVMAP_MODE_REFRACTION";break}return e}function O_(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case qu:e="ENVMAP_BLENDING_MULTIPLY";break;case Od:e="ENVMAP_BLENDING_MIX";break;case Bd:e="ENVMAP_BLENDING_ADD";break}return e}function B_(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function H_(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=N_(t),c=U_(t),h=F_(t),u=O_(t),f=B_(t),d=w_(t),g=A_(r),_=s.createProgram(),m,p,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(fr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(fr).join(`
`),p.length>0&&(p+=`
`)):(m=[yu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(fr).join(`
`),p=[yu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ui?"#define TONE_MAPPING":"",t.toneMapping!==Ui?rt.tonemapping_pars_fragment:"",t.toneMapping!==Ui?S_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",rt.colorspace_pars_fragment,b_("linearToOutputTexel",t.outputColorSpace),T_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(fr).join(`
`)),o=Jl(o),o=_u(o,t),o=xu(o,t),a=Jl(a),a=_u(a,t),a=xu(a,t),o=vu(o),a=vu(a),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Oh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Oh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let y=v+m+o,M=v+p+a,P=mu(s,s.VERTEX_SHADER,y),w=mu(s,s.FRAGMENT_SHADER,M);s.attachShader(_,P),s.attachShader(_,w),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function T(E){if(i.debug.checkShaderErrors){let D=s.getProgramInfoLog(_).trim(),O=s.getShaderInfoLog(P).trim(),H=s.getShaderInfoLog(w).trim(),J=!0,q=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(J=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,P,w);else{let te=gu(s,P,"vertex"),X=gu(s,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+E.name+`
Material Type: `+E.type+`

Program Info Log: `+D+`
`+te+`
`+X)}else D!==""?console.warn("THREE.WebGLProgram: Program Info Log:",D):(O===""||H==="")&&(q=!1);q&&(E.diagnostics={runnable:J,programLog:D,vertexShader:{log:O,prefix:m},fragmentShader:{log:H,prefix:p}})}s.deleteShader(P),s.deleteShader(w),I=new Ls(s,_),U=R_(s,_)}let I;this.getUniforms=function(){return I===void 0&&T(this),I};let U;this.getAttributes=function(){return U===void 0&&T(this),U};let x=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=s.getProgramParameter(_,v_)),x},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=y_++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=P,this.fragmentShader=w,this}var z_=0,Ql=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new ec(e),t.set(e,n)),n}},ec=class{constructor(e){this.id=z_++,this.code=e,this.usedTimes=0}};function k_(i,e,t,n,s,r,o){let a=new Mr,l=new Ql,c=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.reverseDepthBuffer,d=s.vertexTextures,g=s.precision,_={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(x){return c.add(x),x===0?"uv":`uv${x}`}function p(x,E,D,O,H){let J=O.fog,q=H.geometry,te=x.isMeshStandardMaterial?O.environment:null,X=(x.isMeshStandardMaterial?t:e).get(x.envMap||te),he=X&&X.mapping===Jo?X.image.height:null,G=_[x.type];x.precision!==null&&(g=s.getMaxPrecision(x.precision),g!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",g,"instead."));let ie=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Ee=ie!==void 0?ie.length:0,de=0;q.morphAttributes.position!==void 0&&(de=1),q.morphAttributes.normal!==void 0&&(de=2),q.morphAttributes.color!==void 0&&(de=3);let V,ne,ge,me;if(G){let Dt=ei[G];V=Dt.vertexShader,ne=Dt.fragmentShader}else V=x.vertexShader,ne=x.fragmentShader,l.update(x),ge=l.getVertexShaderID(x),me=l.getFragmentShaderID(x);let Ae=i.getRenderTarget(),oe=H.isInstancedMesh===!0,ve=H.isBatchedMesh===!0,Re=!!x.map,be=!!x.matcap,C=!!X,qe=!!x.aoMap,We=!!x.lightMap,Ke=!!x.bumpMap,Fe=!!x.normalMap,$e=!!x.displacementMap,Ue=!!x.emissiveMap,R=!!x.metalnessMap,S=!!x.roughnessMap,K=x.anisotropy>0,ae=x.clearcoat>0,pe=x.dispersion>0,re=x.iridescence>0,Y=x.sheen>0,se=x.transmission>0,F=K&&!!x.anisotropyMap,j=ae&&!!x.clearcoatMap,k=ae&&!!x.clearcoatNormalMap,Q=ae&&!!x.clearcoatRoughnessMap,ce=re&&!!x.iridescenceMap,fe=re&&!!x.iridescenceThicknessMap,le=Y&&!!x.sheenColorMap,_e=Y&&!!x.sheenRoughnessMap,Se=!!x.specularMap,ze=!!x.specularColorMap,L=!!x.specularIntensityMap,xe=se&&!!x.transmissionMap,ee=se&&!!x.thicknessMap,ue=!!x.gradientMap,Te=!!x.alphaMap,Ce=x.alphaTest>0,Qe=!!x.alphaHash,xt=!!x.extensions,It=Ui;x.toneMapped&&(Ae===null||Ae.isXRRenderTarget===!0)&&(It=i.toneMapping);let st={shaderID:G,shaderType:x.type,shaderName:x.name,vertexShader:V,fragmentShader:ne,defines:x.defines,customVertexShaderID:ge,customFragmentShaderID:me,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:g,batching:ve,batchingColor:ve&&H._colorsTexture!==null,instancing:oe,instancingColor:oe&&H.instanceColor!==null,instancingMorph:oe&&H.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:Ae===null?i.outputColorSpace:Ae.isXRRenderTarget===!0?Ae.texture.colorSpace:$t,alphaToCoverage:!!x.alphaToCoverage,map:Re,matcap:be,envMap:C,envMapMode:C&&X.mapping,envMapCubeUVHeight:he,aoMap:qe,lightMap:We,bumpMap:Ke,normalMap:Fe,displacementMap:d&&$e,emissiveMap:Ue,normalMapObjectSpace:Fe&&x.normalMapType===Wd,normalMapTangentSpace:Fe&&x.normalMapType===of,metalnessMap:R,roughnessMap:S,anisotropy:K,anisotropyMap:F,clearcoat:ae,clearcoatMap:j,clearcoatNormalMap:k,clearcoatRoughnessMap:Q,dispersion:pe,iridescence:re,iridescenceMap:ce,iridescenceThicknessMap:fe,sheen:Y,sheenColorMap:le,sheenRoughnessMap:_e,specularMap:Se,specularColorMap:ze,specularIntensityMap:L,transmission:se,transmissionMap:xe,thicknessMap:ee,gradientMap:ue,opaque:x.transparent===!1&&x.blending===Zn&&x.alphaToCoverage===!1,alphaMap:Te,alphaTest:Ce,alphaHash:Qe,combine:x.combine,mapUv:Re&&m(x.map.channel),aoMapUv:qe&&m(x.aoMap.channel),lightMapUv:We&&m(x.lightMap.channel),bumpMapUv:Ke&&m(x.bumpMap.channel),normalMapUv:Fe&&m(x.normalMap.channel),displacementMapUv:$e&&m(x.displacementMap.channel),emissiveMapUv:Ue&&m(x.emissiveMap.channel),metalnessMapUv:R&&m(x.metalnessMap.channel),roughnessMapUv:S&&m(x.roughnessMap.channel),anisotropyMapUv:F&&m(x.anisotropyMap.channel),clearcoatMapUv:j&&m(x.clearcoatMap.channel),clearcoatNormalMapUv:k&&m(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Q&&m(x.clearcoatRoughnessMap.channel),iridescenceMapUv:ce&&m(x.iridescenceMap.channel),iridescenceThicknessMapUv:fe&&m(x.iridescenceThicknessMap.channel),sheenColorMapUv:le&&m(x.sheenColorMap.channel),sheenRoughnessMapUv:_e&&m(x.sheenRoughnessMap.channel),specularMapUv:Se&&m(x.specularMap.channel),specularColorMapUv:ze&&m(x.specularColorMap.channel),specularIntensityMapUv:L&&m(x.specularIntensityMap.channel),transmissionMapUv:xe&&m(x.transmissionMap.channel),thicknessMapUv:ee&&m(x.thicknessMap.channel),alphaMapUv:Te&&m(x.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(Fe||K),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!q.attributes.uv&&(Re||Te),fog:!!J,useFog:x.fog===!0,fogExp2:!!J&&J.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:f,skinning:H.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:Ee,morphTextureStride:de,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:It,decodeVideoTexture:Re&&x.map.isVideoTexture===!0&&ut.getTransfer(x.map.colorSpace)===bt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===nt,flipSided:x.side===Kt,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:xt&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(xt&&x.extensions.multiDraw===!0||ve)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return st.vertexUv1s=c.has(1),st.vertexUv2s=c.has(2),st.vertexUv3s=c.has(3),c.clear(),st}function v(x){let E=[];if(x.shaderID?E.push(x.shaderID):(E.push(x.customVertexShaderID),E.push(x.customFragmentShaderID)),x.defines!==void 0)for(let D in x.defines)E.push(D),E.push(x.defines[D]);return x.isRawShaderMaterial===!1&&(y(E,x),M(E,x),E.push(i.outputColorSpace)),E.push(x.customProgramCacheKey),E.join()}function y(x,E){x.push(E.precision),x.push(E.outputColorSpace),x.push(E.envMapMode),x.push(E.envMapCubeUVHeight),x.push(E.mapUv),x.push(E.alphaMapUv),x.push(E.lightMapUv),x.push(E.aoMapUv),x.push(E.bumpMapUv),x.push(E.normalMapUv),x.push(E.displacementMapUv),x.push(E.emissiveMapUv),x.push(E.metalnessMapUv),x.push(E.roughnessMapUv),x.push(E.anisotropyMapUv),x.push(E.clearcoatMapUv),x.push(E.clearcoatNormalMapUv),x.push(E.clearcoatRoughnessMapUv),x.push(E.iridescenceMapUv),x.push(E.iridescenceThicknessMapUv),x.push(E.sheenColorMapUv),x.push(E.sheenRoughnessMapUv),x.push(E.specularMapUv),x.push(E.specularColorMapUv),x.push(E.specularIntensityMapUv),x.push(E.transmissionMapUv),x.push(E.thicknessMapUv),x.push(E.combine),x.push(E.fogExp2),x.push(E.sizeAttenuation),x.push(E.morphTargetsCount),x.push(E.morphAttributeCount),x.push(E.numDirLights),x.push(E.numPointLights),x.push(E.numSpotLights),x.push(E.numSpotLightMaps),x.push(E.numHemiLights),x.push(E.numRectAreaLights),x.push(E.numDirLightShadows),x.push(E.numPointLightShadows),x.push(E.numSpotLightShadows),x.push(E.numSpotLightShadowsWithMaps),x.push(E.numLightProbes),x.push(E.shadowMapType),x.push(E.toneMapping),x.push(E.numClippingPlanes),x.push(E.numClipIntersection),x.push(E.depthPacking)}function M(x,E){a.disableAll(),E.supportsVertexTextures&&a.enable(0),E.instancing&&a.enable(1),E.instancingColor&&a.enable(2),E.instancingMorph&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),E.dispersion&&a.enable(20),E.batchingColor&&a.enable(21),x.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reverseDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.alphaToCoverage&&a.enable(20),x.push(a.mask)}function P(x){let E=_[x.type],D;if(E){let O=ei[E];D=Vi.clone(O.uniforms)}else D=x.uniforms;return D}function w(x,E){let D;for(let O=0,H=h.length;O<H;O++){let J=h[O];if(J.cacheKey===E){D=J,++D.usedTimes;break}}return D===void 0&&(D=new H_(i,E,x,r),h.push(D)),D}function T(x){if(--x.usedTimes===0){let E=h.indexOf(x);h[E]=h[h.length-1],h.pop(),x.destroy()}}function I(x){l.remove(x)}function U(){l.dispose()}return{getParameters:p,getProgramCacheKey:v,getUniforms:P,acquireProgram:w,releaseProgram:T,releaseShaderCache:I,programs:h,dispose:U}}function V_(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function G_(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Mu(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Eu(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(u,f,d,g,_,m){let p=i[e];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},i[e]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=m),e++,p}function a(u,f,d,g,_,m){let p=o(u,f,d,g,_,m);d.transmission>0?n.push(p):d.transparent===!0?s.push(p):t.push(p)}function l(u,f,d,g,_,m){let p=o(u,f,d,g,_,m);d.transmission>0?n.unshift(p):d.transparent===!0?s.unshift(p):t.unshift(p)}function c(u,f){t.length>1&&t.sort(u||G_),n.length>1&&n.sort(f||Mu),s.length>1&&s.sort(f||Mu)}function h(){for(let u=e,f=i.length;u<f;u++){let d=i[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function W_(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new Eu,i.set(n,[o])):s>=r.length?(o=new Eu,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function X_(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new A,color:new z};break;case"SpotLight":t={position:new A,direction:new A,color:new z,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new A,color:new z,distance:0,decay:0};break;case"HemisphereLight":t={direction:new A,skyColor:new z,groundColor:new z};break;case"RectAreaLight":t={color:new z,position:new A,halfWidth:new A,halfHeight:new A};break}return i[e.id]=t,t}}}function Y_(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var q_=0;function K_(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Z_(i){let e=new X_,t=Y_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new A);let s=new A,r=new He,o=new He;function a(c){let h=0,u=0,f=0;for(let U=0;U<9;U++)n.probe[U].set(0,0,0);let d=0,g=0,_=0,m=0,p=0,v=0,y=0,M=0,P=0,w=0,T=0;c.sort(K_);for(let U=0,x=c.length;U<x;U++){let E=c[U],D=E.color,O=E.intensity,H=E.distance,J=E.shadow&&E.shadow.map?E.shadow.map.texture:null;if(E.isAmbientLight)h+=D.r*O,u+=D.g*O,f+=D.b*O;else if(E.isLightProbe){for(let q=0;q<9;q++)n.probe[q].addScaledVector(E.sh.coefficients[q],O);T++}else if(E.isDirectionalLight){let q=e.get(E);if(q.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){let te=E.shadow,X=t.get(E);X.shadowIntensity=te.intensity,X.shadowBias=te.bias,X.shadowNormalBias=te.normalBias,X.shadowRadius=te.radius,X.shadowMapSize=te.mapSize,n.directionalShadow[d]=X,n.directionalShadowMap[d]=J,n.directionalShadowMatrix[d]=E.shadow.matrix,v++}n.directional[d]=q,d++}else if(E.isSpotLight){let q=e.get(E);q.position.setFromMatrixPosition(E.matrixWorld),q.color.copy(D).multiplyScalar(O),q.distance=H,q.coneCos=Math.cos(E.angle),q.penumbraCos=Math.cos(E.angle*(1-E.penumbra)),q.decay=E.decay,n.spot[_]=q;let te=E.shadow;if(E.map&&(n.spotLightMap[P]=E.map,P++,te.updateMatrices(E),E.castShadow&&w++),n.spotLightMatrix[_]=te.matrix,E.castShadow){let X=t.get(E);X.shadowIntensity=te.intensity,X.shadowBias=te.bias,X.shadowNormalBias=te.normalBias,X.shadowRadius=te.radius,X.shadowMapSize=te.mapSize,n.spotShadow[_]=X,n.spotShadowMap[_]=J,M++}_++}else if(E.isRectAreaLight){let q=e.get(E);q.color.copy(D).multiplyScalar(O),q.halfWidth.set(E.width*.5,0,0),q.halfHeight.set(0,E.height*.5,0),n.rectArea[m]=q,m++}else if(E.isPointLight){let q=e.get(E);if(q.color.copy(E.color).multiplyScalar(E.intensity),q.distance=E.distance,q.decay=E.decay,E.castShadow){let te=E.shadow,X=t.get(E);X.shadowIntensity=te.intensity,X.shadowBias=te.bias,X.shadowNormalBias=te.normalBias,X.shadowRadius=te.radius,X.shadowMapSize=te.mapSize,X.shadowCameraNear=te.camera.near,X.shadowCameraFar=te.camera.far,n.pointShadow[g]=X,n.pointShadowMap[g]=J,n.pointShadowMatrix[g]=E.shadow.matrix,y++}n.point[g]=q,g++}else if(E.isHemisphereLight){let q=e.get(E);q.skyColor.copy(E.color).multiplyScalar(O),q.groundColor.copy(E.groundColor).multiplyScalar(O),n.hemi[p]=q,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ie.LTC_FLOAT_1,n.rectAreaLTC2=Ie.LTC_FLOAT_2):(n.rectAreaLTC1=Ie.LTC_HALF_1,n.rectAreaLTC2=Ie.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;let I=n.hash;(I.directionalLength!==d||I.pointLength!==g||I.spotLength!==_||I.rectAreaLength!==m||I.hemiLength!==p||I.numDirectionalShadows!==v||I.numPointShadows!==y||I.numSpotShadows!==M||I.numSpotMaps!==P||I.numLightProbes!==T)&&(n.directional.length=d,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=M+P-w,n.spotLightMap.length=P,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=T,I.directionalLength=d,I.pointLength=g,I.spotLength=_,I.rectAreaLength=m,I.hemiLength=p,I.numDirectionalShadows=v,I.numPointShadows=y,I.numSpotShadows=M,I.numSpotMaps=P,I.numLightProbes=T,n.version=q_++)}function l(c,h){let u=0,f=0,d=0,g=0,_=0,m=h.matrixWorldInverse;for(let p=0,v=c.length;p<v;p++){let y=c[p];if(y.isDirectionalLight){let M=n.directional[u];M.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),u++}else if(y.isSpotLight){let M=n.spot[d];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),d++}else if(y.isRectAreaLight){let M=n.rectArea[g];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(m),o.identity(),r.copy(y.matrixWorld),r.premultiply(m),o.extractRotation(r),M.halfWidth.set(y.width*.5,0,0),M.halfHeight.set(0,y.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){let M=n.point[f];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(m),f++}else if(y.isHemisphereLight){let M=n.hemi[_];M.direction.setFromMatrixPosition(y.matrixWorld),M.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:n}}function bu(i){let e=new Z_(i),t=[],n=[];function s(h){c.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function l(h){e.setupView(t,h)}let c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function j_(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new bu(i),e.set(s,[a])):r>=o.length?(a=new bu(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var tc=class extends An{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Vd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},nc=class extends An{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},$_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,J_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Q_(i,e,t){let n=new Er,s=new we,r=new we,o=new mt,a=new tc({depthPacking:Gd}),l=new nc,c={},h=t.maxTextureSize,u={[ii]:Kt,[Kt]:ii,[nt]:nt},f=new at({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new we},radius:{value:4}},vertexShader:$_,fragmentShader:J_}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let g=new Ye;g.setAttribute("position",new Xe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Ne(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Yu;let p=this.type;this.render=function(w,T,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;let U=i.getRenderTarget(),x=i.getActiveCubeFace(),E=i.getActiveMipmapLevel(),D=i.state;D.setBlending(ni),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);let O=p!==pi&&this.type===pi,H=p===pi&&this.type!==pi;for(let J=0,q=w.length;J<q;J++){let te=w[J],X=te.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",te,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);let he=X.getFrameExtents();if(s.multiply(he),r.copy(X.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/he.x),s.x=r.x*he.x,X.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/he.y),s.y=r.y*he.y,X.mapSize.y=r.y)),X.map===null||O===!0||H===!0){let ie=this.type!==pi?{minFilter:ln,magFilter:ln}:{};X.map!==null&&X.map.dispose(),X.map=new tn(s.x,s.y,ie),X.map.texture.name=te.name+".shadowMap",X.camera.updateProjectionMatrix()}i.setRenderTarget(X.map),i.clear();let G=X.getViewportCount();for(let ie=0;ie<G;ie++){let Ee=X.getViewport(ie);o.set(r.x*Ee.x,r.y*Ee.y,r.x*Ee.z,r.y*Ee.w),D.viewport(o),X.updateMatrices(te,ie),n=X.getFrustum(),M(T,I,X.camera,te,this.type)}X.isPointLightShadow!==!0&&this.type===pi&&v(X,I),X.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(U,x,E)};function v(w,T){let I=e.update(_);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new tn(s.x,s.y)),f.uniforms.shadow_pass.value=w.map.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(T,null,I,f,_,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(T,null,I,d,_,null)}function y(w,T,I,U){let x=null,E=I.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(E!==void 0)x=E;else if(x=I.isPointLight===!0?l:a,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){let D=x.uuid,O=T.uuid,H=c[D];H===void 0&&(H={},c[D]=H);let J=H[O];J===void 0&&(J=x.clone(),H[O]=J,T.addEventListener("dispose",P)),x=J}if(x.visible=T.visible,x.wireframe=T.wireframe,U===pi?x.side=T.shadowSide!==null?T.shadowSide:T.side:x.side=T.shadowSide!==null?T.shadowSide:u[T.side],x.alphaMap=T.alphaMap,x.alphaTest=T.alphaTest,x.map=T.map,x.clipShadows=T.clipShadows,x.clippingPlanes=T.clippingPlanes,x.clipIntersection=T.clipIntersection,x.displacementMap=T.displacementMap,x.displacementScale=T.displacementScale,x.displacementBias=T.displacementBias,x.wireframeLinewidth=T.wireframeLinewidth,x.linewidth=T.linewidth,I.isPointLight===!0&&x.isMeshDistanceMaterial===!0){let D=i.properties.get(x);D.light=I}return x}function M(w,T,I,U,x){if(w.visible===!1)return;if(w.layers.test(T.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&x===pi)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,w.matrixWorld);let O=e.update(w),H=w.material;if(Array.isArray(H)){let J=O.groups;for(let q=0,te=J.length;q<te;q++){let X=J[q],he=H[X.materialIndex];if(he&&he.visible){let G=y(w,he,U,x);w.onBeforeShadow(i,w,T,I,O,G,X),i.renderBufferDirect(I,null,O,G,w,X),w.onAfterShadow(i,w,T,I,O,G,X)}}}else if(H.visible){let J=y(w,H,U,x);w.onBeforeShadow(i,w,T,I,O,J,null),i.renderBufferDirect(I,null,O,J,w,null),w.onAfterShadow(i,w,T,I,O,J,null)}}let D=w.children;for(let O=0,H=D.length;O<H;O++)M(D[O],T,I,U,x)}function P(w){w.target.removeEventListener("dispose",P);for(let I in c){let U=c[I],x=w.target.uuid;x in U&&(U[x].dispose(),delete U[x])}}}var ex={[cl]:hl,[ul]:pl,[fl]:ml,[Ns]:dl,[hl]:cl,[pl]:ul,[ml]:fl,[dl]:Ns};function tx(i){function e(){let L=!1,xe=new mt,ee=null,ue=new mt(0,0,0,0);return{setMask:function(Te){ee!==Te&&!L&&(i.colorMask(Te,Te,Te,Te),ee=Te)},setLocked:function(Te){L=Te},setClear:function(Te,Ce,Qe,xt,It){It===!0&&(Te*=xt,Ce*=xt,Qe*=xt),xe.set(Te,Ce,Qe,xt),ue.equals(xe)===!1&&(i.clearColor(Te,Ce,Qe,xt),ue.copy(xe))},reset:function(){L=!1,ee=null,ue.set(-1,0,0,0)}}}function t(){let L=!1,xe=!1,ee=null,ue=null,Te=null;return{setReversed:function(Ce){xe=Ce},setTest:function(Ce){Ce?ge(i.DEPTH_TEST):me(i.DEPTH_TEST)},setMask:function(Ce){ee!==Ce&&!L&&(i.depthMask(Ce),ee=Ce)},setFunc:function(Ce){if(xe&&(Ce=ex[Ce]),ue!==Ce){switch(Ce){case cl:i.depthFunc(i.NEVER);break;case hl:i.depthFunc(i.ALWAYS);break;case ul:i.depthFunc(i.LESS);break;case Ns:i.depthFunc(i.LEQUAL);break;case fl:i.depthFunc(i.EQUAL);break;case dl:i.depthFunc(i.GEQUAL);break;case pl:i.depthFunc(i.GREATER);break;case ml:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ue=Ce}},setLocked:function(Ce){L=Ce},setClear:function(Ce){Te!==Ce&&(i.clearDepth(Ce),Te=Ce)},reset:function(){L=!1,ee=null,ue=null,Te=null}}}function n(){let L=!1,xe=null,ee=null,ue=null,Te=null,Ce=null,Qe=null,xt=null,It=null;return{setTest:function(st){L||(st?ge(i.STENCIL_TEST):me(i.STENCIL_TEST))},setMask:function(st){xe!==st&&!L&&(i.stencilMask(st),xe=st)},setFunc:function(st,Dt,pn){(ee!==st||ue!==Dt||Te!==pn)&&(i.stencilFunc(st,Dt,pn),ee=st,ue=Dt,Te=pn)},setOp:function(st,Dt,pn){(Ce!==st||Qe!==Dt||xt!==pn)&&(i.stencilOp(st,Dt,pn),Ce=st,Qe=Dt,xt=pn)},setLocked:function(st){L=st},setClear:function(st){It!==st&&(i.clearStencil(st),It=st)},reset:function(){L=!1,xe=null,ee=null,ue=null,Te=null,Ce=null,Qe=null,xt=null,It=null}}}let s=new e,r=new t,o=new n,a=new WeakMap,l=new WeakMap,c={},h={},u=new WeakMap,f=[],d=null,g=!1,_=null,m=null,p=null,v=null,y=null,M=null,P=null,w=new z(0,0,0),T=0,I=!1,U=null,x=null,E=null,D=null,O=null,H=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),J=!1,q=0,te=i.getParameter(i.VERSION);te.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(te)[1]),J=q>=1):te.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(te)[1]),J=q>=2);let X=null,he={},G=i.getParameter(i.SCISSOR_BOX),ie=i.getParameter(i.VIEWPORT),Ee=new mt().fromArray(G),de=new mt().fromArray(ie);function V(L,xe,ee,ue){let Te=new Uint8Array(4),Ce=i.createTexture();i.bindTexture(L,Ce),i.texParameteri(L,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(L,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Qe=0;Qe<ee;Qe++)L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY?i.texImage3D(xe,0,i.RGBA,1,1,ue,0,i.RGBA,i.UNSIGNED_BYTE,Te):i.texImage2D(xe+Qe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Te);return Ce}let ne={};ne[i.TEXTURE_2D]=V(i.TEXTURE_2D,i.TEXTURE_2D,1),ne[i.TEXTURE_CUBE_MAP]=V(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ne[i.TEXTURE_2D_ARRAY]=V(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ne[i.TEXTURE_3D]=V(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),ge(i.DEPTH_TEST),r.setFunc(Ns),We(!1),Ke(Ch),ge(i.CULL_FACE),C(ni);function ge(L){c[L]!==!0&&(i.enable(L),c[L]=!0)}function me(L){c[L]!==!1&&(i.disable(L),c[L]=!1)}function Ae(L,xe){return h[L]!==xe?(i.bindFramebuffer(L,xe),h[L]=xe,L===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=xe),L===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=xe),!0):!1}function oe(L,xe){let ee=f,ue=!1;if(L){ee=u.get(xe),ee===void 0&&(ee=[],u.set(xe,ee));let Te=L.textures;if(ee.length!==Te.length||ee[0]!==i.COLOR_ATTACHMENT0){for(let Ce=0,Qe=Te.length;Ce<Qe;Ce++)ee[Ce]=i.COLOR_ATTACHMENT0+Ce;ee.length=Te.length,ue=!0}}else ee[0]!==i.BACK&&(ee[0]=i.BACK,ue=!0);ue&&i.drawBuffers(ee)}function ve(L){return d!==L?(i.useProgram(L),d=L,!0):!1}let Re={[ts]:i.FUNC_ADD,[yd]:i.FUNC_SUBTRACT,[Md]:i.FUNC_REVERSE_SUBTRACT};Re[Ed]=i.MIN,Re[bd]=i.MAX;let be={[Sd]:i.ZERO,[Td]:i.ONE,[wd]:i.SRC_COLOR,[al]:i.SRC_ALPHA,[Dd]:i.SRC_ALPHA_SATURATE,[Pd]:i.DST_COLOR,[Rd]:i.DST_ALPHA,[Ad]:i.ONE_MINUS_SRC_COLOR,[ll]:i.ONE_MINUS_SRC_ALPHA,[Id]:i.ONE_MINUS_DST_COLOR,[Cd]:i.ONE_MINUS_DST_ALPHA,[Ld]:i.CONSTANT_COLOR,[Nd]:i.ONE_MINUS_CONSTANT_COLOR,[Ud]:i.CONSTANT_ALPHA,[Fd]:i.ONE_MINUS_CONSTANT_ALPHA};function C(L,xe,ee,ue,Te,Ce,Qe,xt,It,st){if(L===ni){g===!0&&(me(i.BLEND),g=!1);return}if(g===!1&&(ge(i.BLEND),g=!0),L!==vd){if(L!==_||st!==I){if((m!==ts||y!==ts)&&(i.blendEquation(i.FUNC_ADD),m=ts,y=ts),st)switch(L){case Zn:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case fn:i.blendFunc(i.ONE,i.ONE);break;case Ph:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ih:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Zn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case fn:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Ph:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ih:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}p=null,v=null,M=null,P=null,w.set(0,0,0),T=0,_=L,I=st}return}Te=Te||xe,Ce=Ce||ee,Qe=Qe||ue,(xe!==m||Te!==y)&&(i.blendEquationSeparate(Re[xe],Re[Te]),m=xe,y=Te),(ee!==p||ue!==v||Ce!==M||Qe!==P)&&(i.blendFuncSeparate(be[ee],be[ue],be[Ce],be[Qe]),p=ee,v=ue,M=Ce,P=Qe),(xt.equals(w)===!1||It!==T)&&(i.blendColor(xt.r,xt.g,xt.b,It),w.copy(xt),T=It),_=L,I=!1}function qe(L,xe){L.side===nt?me(i.CULL_FACE):ge(i.CULL_FACE);let ee=L.side===Kt;xe&&(ee=!ee),We(ee),L.blending===Zn&&L.transparent===!1?C(ni):C(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),r.setFunc(L.depthFunc),r.setTest(L.depthTest),r.setMask(L.depthWrite),s.setMask(L.colorWrite);let ue=L.stencilWrite;o.setTest(ue),ue&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),$e(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?ge(i.SAMPLE_ALPHA_TO_COVERAGE):me(i.SAMPLE_ALPHA_TO_COVERAGE)}function We(L){U!==L&&(L?i.frontFace(i.CW):i.frontFace(i.CCW),U=L)}function Ke(L){L!==_d?(ge(i.CULL_FACE),L!==x&&(L===Ch?i.cullFace(i.BACK):L===xd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):me(i.CULL_FACE),x=L}function Fe(L){L!==E&&(J&&i.lineWidth(L),E=L)}function $e(L,xe,ee){L?(ge(i.POLYGON_OFFSET_FILL),(D!==xe||O!==ee)&&(i.polygonOffset(xe,ee),D=xe,O=ee)):me(i.POLYGON_OFFSET_FILL)}function Ue(L){L?ge(i.SCISSOR_TEST):me(i.SCISSOR_TEST)}function R(L){L===void 0&&(L=i.TEXTURE0+H-1),X!==L&&(i.activeTexture(L),X=L)}function S(L,xe,ee){ee===void 0&&(X===null?ee=i.TEXTURE0+H-1:ee=X);let ue=he[ee];ue===void 0&&(ue={type:void 0,texture:void 0},he[ee]=ue),(ue.type!==L||ue.texture!==xe)&&(X!==ee&&(i.activeTexture(ee),X=ee),i.bindTexture(L,xe||ne[L]),ue.type=L,ue.texture=xe)}function K(){let L=he[X];L!==void 0&&L.type!==void 0&&(i.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function ae(){try{i.compressedTexImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function pe(){try{i.compressedTexImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function re(){try{i.texSubImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Y(){try{i.texSubImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function se(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function F(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function j(){try{i.texStorage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function k(){try{i.texStorage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Q(){try{i.texImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ce(){try{i.texImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function fe(L){Ee.equals(L)===!1&&(i.scissor(L.x,L.y,L.z,L.w),Ee.copy(L))}function le(L){de.equals(L)===!1&&(i.viewport(L.x,L.y,L.z,L.w),de.copy(L))}function _e(L,xe){let ee=l.get(xe);ee===void 0&&(ee=new WeakMap,l.set(xe,ee));let ue=ee.get(L);ue===void 0&&(ue=i.getUniformBlockIndex(xe,L.name),ee.set(L,ue))}function Se(L,xe){let ue=l.get(xe).get(L);a.get(xe)!==ue&&(i.uniformBlockBinding(xe,ue,L.__bindingPointIndex),a.set(xe,ue))}function ze(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),c={},X=null,he={},h={},u=new WeakMap,f=[],d=null,g=!1,_=null,m=null,p=null,v=null,y=null,M=null,P=null,w=new z(0,0,0),T=0,I=!1,U=null,x=null,E=null,D=null,O=null,Ee.set(0,0,i.canvas.width,i.canvas.height),de.set(0,0,i.canvas.width,i.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:ge,disable:me,bindFramebuffer:Ae,drawBuffers:oe,useProgram:ve,setBlending:C,setMaterial:qe,setFlipSided:We,setCullFace:Ke,setLineWidth:Fe,setPolygonOffset:$e,setScissorTest:Ue,activeTexture:R,bindTexture:S,unbindTexture:K,compressedTexImage2D:ae,compressedTexImage3D:pe,texImage2D:Q,texImage3D:ce,updateUBOMapping:_e,uniformBlockBinding:Se,texStorage2D:j,texStorage3D:k,texSubImage2D:re,texSubImage3D:Y,compressedTexSubImage2D:se,compressedTexSubImage3D:F,scissor:fe,viewport:le,reset:ze}}function Su(i,e,t,n){let s=nx(n);switch(t){case Ju:return i*e;case ef:return i*e;case tf:return i*e*2;case Ic:return i*e/s.components*s.byteLength;case Dc:return i*e/s.components*s.byteLength;case nf:return i*e*2/s.components*s.byteLength;case Lc:return i*e*2/s.components*s.byteLength;case Qu:return i*e*3/s.components*s.byteLength;case Nn:return i*e*4/s.components*s.byteLength;case Nc:return i*e*4/s.components*s.byteLength;case fo:case po:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case mo:case go:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case xl:case yl:return Math.max(i,16)*Math.max(e,8)/4;case _l:case vl:return Math.max(i,8)*Math.max(e,8)/2;case Ml:case El:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case bl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Sl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Tl:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case wl:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Al:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Rl:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Cl:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Pl:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Il:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Dl:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Ll:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Nl:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Ul:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Fl:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Ol:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case _o:case Bl:case Hl:return Math.ceil(i/4)*Math.ceil(e/4)*16;case sf:case zl:return Math.ceil(i/4)*Math.ceil(e/4)*8;case kl:case Vl:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function nx(i){switch(i){case gi:case Zu:return{byteLength:1,components:1};case vr:case ju:case Cn:return{byteLength:2,components:1};case Cc:case Pc:return{byteLength:2,components:4};case rs:case Rc:case Kn:return{byteLength:4,components:1};case $u:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function ix(i,e,t,n,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new we,h=new WeakMap,u,f=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,S){return d?new OffscreenCanvas(R,S):yr("canvas")}function _(R,S,K){let ae=1,pe=Ue(R);if((pe.width>K||pe.height>K)&&(ae=K/Math.max(pe.width,pe.height)),ae<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let re=Math.floor(ae*pe.width),Y=Math.floor(ae*pe.height);u===void 0&&(u=g(re,Y));let se=S?g(re,Y):u;return se.width=re,se.height=Y,se.getContext("2d").drawImage(R,0,0,re,Y),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+pe.width+"x"+pe.height+") to ("+re+"x"+Y+")."),se}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+pe.width+"x"+pe.height+")."),R;return R}function m(R){return R.generateMipmaps&&R.minFilter!==ln&&R.minFilter!==en}function p(R){i.generateMipmap(R)}function v(R,S,K,ae,pe=!1){if(R!==null){if(i[R]!==void 0)return i[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let re=S;if(S===i.RED&&(K===i.FLOAT&&(re=i.R32F),K===i.HALF_FLOAT&&(re=i.R16F),K===i.UNSIGNED_BYTE&&(re=i.R8)),S===i.RED_INTEGER&&(K===i.UNSIGNED_BYTE&&(re=i.R8UI),K===i.UNSIGNED_SHORT&&(re=i.R16UI),K===i.UNSIGNED_INT&&(re=i.R32UI),K===i.BYTE&&(re=i.R8I),K===i.SHORT&&(re=i.R16I),K===i.INT&&(re=i.R32I)),S===i.RG&&(K===i.FLOAT&&(re=i.RG32F),K===i.HALF_FLOAT&&(re=i.RG16F),K===i.UNSIGNED_BYTE&&(re=i.RG8)),S===i.RG_INTEGER&&(K===i.UNSIGNED_BYTE&&(re=i.RG8UI),K===i.UNSIGNED_SHORT&&(re=i.RG16UI),K===i.UNSIGNED_INT&&(re=i.RG32UI),K===i.BYTE&&(re=i.RG8I),K===i.SHORT&&(re=i.RG16I),K===i.INT&&(re=i.RG32I)),S===i.RGB_INTEGER&&(K===i.UNSIGNED_BYTE&&(re=i.RGB8UI),K===i.UNSIGNED_SHORT&&(re=i.RGB16UI),K===i.UNSIGNED_INT&&(re=i.RGB32UI),K===i.BYTE&&(re=i.RGB8I),K===i.SHORT&&(re=i.RGB16I),K===i.INT&&(re=i.RGB32I)),S===i.RGBA_INTEGER&&(K===i.UNSIGNED_BYTE&&(re=i.RGBA8UI),K===i.UNSIGNED_SHORT&&(re=i.RGBA16UI),K===i.UNSIGNED_INT&&(re=i.RGBA32UI),K===i.BYTE&&(re=i.RGBA8I),K===i.SHORT&&(re=i.RGBA16I),K===i.INT&&(re=i.RGBA32I)),S===i.RGB&&K===i.UNSIGNED_INT_5_9_9_9_REV&&(re=i.RGB9_E5),S===i.RGBA){let Y=pe?vo:ut.getTransfer(ae);K===i.FLOAT&&(re=i.RGBA32F),K===i.HALF_FLOAT&&(re=i.RGBA16F),K===i.UNSIGNED_BYTE&&(re=Y===bt?i.SRGB8_ALPHA8:i.RGBA8),K===i.UNSIGNED_SHORT_4_4_4_4&&(re=i.RGBA4),K===i.UNSIGNED_SHORT_5_5_5_1&&(re=i.RGB5_A1)}return(re===i.R16F||re===i.R32F||re===i.RG16F||re===i.RG32F||re===i.RGBA16F||re===i.RGBA32F)&&e.get("EXT_color_buffer_float"),re}function y(R,S){let K;return R?S===null||S===rs||S===Os?K=i.DEPTH24_STENCIL8:S===Kn?K=i.DEPTH32F_STENCIL8:S===vr&&(K=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===rs||S===Os?K=i.DEPTH_COMPONENT24:S===Kn?K=i.DEPTH_COMPONENT32F:S===vr&&(K=i.DEPTH_COMPONENT16),K}function M(R,S){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==ln&&R.minFilter!==en?Math.log2(Math.max(S.width,S.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?S.mipmaps.length:1}function P(R){let S=R.target;S.removeEventListener("dispose",P),T(S),S.isVideoTexture&&h.delete(S)}function w(R){let S=R.target;S.removeEventListener("dispose",w),U(S)}function T(R){let S=n.get(R);if(S.__webglInit===void 0)return;let K=R.source,ae=f.get(K);if(ae){let pe=ae[S.__cacheKey];pe.usedTimes--,pe.usedTimes===0&&I(R),Object.keys(ae).length===0&&f.delete(K)}n.remove(R)}function I(R){let S=n.get(R);i.deleteTexture(S.__webglTexture);let K=R.source,ae=f.get(K);delete ae[S.__cacheKey],o.memory.textures--}function U(R){let S=n.get(R);if(R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let ae=0;ae<6;ae++){if(Array.isArray(S.__webglFramebuffer[ae]))for(let pe=0;pe<S.__webglFramebuffer[ae].length;pe++)i.deleteFramebuffer(S.__webglFramebuffer[ae][pe]);else i.deleteFramebuffer(S.__webglFramebuffer[ae]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[ae])}else{if(Array.isArray(S.__webglFramebuffer))for(let ae=0;ae<S.__webglFramebuffer.length;ae++)i.deleteFramebuffer(S.__webglFramebuffer[ae]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let ae=0;ae<S.__webglColorRenderbuffer.length;ae++)S.__webglColorRenderbuffer[ae]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[ae]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let K=R.textures;for(let ae=0,pe=K.length;ae<pe;ae++){let re=n.get(K[ae]);re.__webglTexture&&(i.deleteTexture(re.__webglTexture),o.memory.textures--),n.remove(K[ae])}n.remove(R)}let x=0;function E(){x=0}function D(){let R=x;return R>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),x+=1,R}function O(R){let S=[];return S.push(R.wrapS),S.push(R.wrapT),S.push(R.wrapR||0),S.push(R.magFilter),S.push(R.minFilter),S.push(R.anisotropy),S.push(R.internalFormat),S.push(R.format),S.push(R.type),S.push(R.generateMipmaps),S.push(R.premultiplyAlpha),S.push(R.flipY),S.push(R.unpackAlignment),S.push(R.colorSpace),S.join()}function H(R,S){let K=n.get(R);if(R.isVideoTexture&&Fe(R),R.isRenderTargetTexture===!1&&R.version>0&&K.__version!==R.version){let ae=R.image;if(ae===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ae.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{de(K,R,S);return}}t.bindTexture(i.TEXTURE_2D,K.__webglTexture,i.TEXTURE0+S)}function J(R,S){let K=n.get(R);if(R.version>0&&K.__version!==R.version){de(K,R,S);return}t.bindTexture(i.TEXTURE_2D_ARRAY,K.__webglTexture,i.TEXTURE0+S)}function q(R,S){let K=n.get(R);if(R.version>0&&K.__version!==R.version){de(K,R,S);return}t.bindTexture(i.TEXTURE_3D,K.__webglTexture,i.TEXTURE0+S)}function te(R,S){let K=n.get(R);if(R.version>0&&K.__version!==R.version){V(K,R,S);return}t.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture,i.TEXTURE0+S)}let X={[ss]:i.REPEAT,[Ln]:i.CLAMP_TO_EDGE,[xr]:i.MIRRORED_REPEAT},he={[ln]:i.NEAREST,[Ac]:i.NEAREST_MIPMAP_NEAREST,[Cs]:i.NEAREST_MIPMAP_LINEAR,[en]:i.LINEAR,[dr]:i.LINEAR_MIPMAP_NEAREST,[ti]:i.LINEAR_MIPMAP_LINEAR},G={[Xd]:i.NEVER,[$d]:i.ALWAYS,[Yd]:i.LESS,[af]:i.LEQUAL,[qd]:i.EQUAL,[jd]:i.GEQUAL,[Kd]:i.GREATER,[Zd]:i.NOTEQUAL};function ie(R,S){if(S.type===Kn&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===en||S.magFilter===dr||S.magFilter===Cs||S.magFilter===ti||S.minFilter===en||S.minFilter===dr||S.minFilter===Cs||S.minFilter===ti)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,X[S.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,X[S.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,X[S.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,he[S.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,he[S.minFilter]),S.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,G[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===ln||S.minFilter!==Cs&&S.minFilter!==ti||S.type===Kn&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){let K=e.get("EXT_texture_filter_anisotropic");i.texParameterf(R,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function Ee(R,S){let K=!1;R.__webglInit===void 0&&(R.__webglInit=!0,S.addEventListener("dispose",P));let ae=S.source,pe=f.get(ae);pe===void 0&&(pe={},f.set(ae,pe));let re=O(S);if(re!==R.__cacheKey){pe[re]===void 0&&(pe[re]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,K=!0),pe[re].usedTimes++;let Y=pe[R.__cacheKey];Y!==void 0&&(pe[R.__cacheKey].usedTimes--,Y.usedTimes===0&&I(S)),R.__cacheKey=re,R.__webglTexture=pe[re].texture}return K}function de(R,S,K){let ae=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(ae=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(ae=i.TEXTURE_3D);let pe=Ee(R,S),re=S.source;t.bindTexture(ae,R.__webglTexture,i.TEXTURE0+K);let Y=n.get(re);if(re.version!==Y.__version||pe===!0){t.activeTexture(i.TEXTURE0+K);let se=ut.getPrimaries(ut.workingColorSpace),F=S.colorSpace===Yn?null:ut.getPrimaries(S.colorSpace),j=S.colorSpace===Yn||se===F?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,j);let k=_(S.image,!1,s.maxTextureSize);k=$e(S,k);let Q=r.convert(S.format,S.colorSpace),ce=r.convert(S.type),fe=v(S.internalFormat,Q,ce,S.colorSpace,S.isVideoTexture);ie(ae,S);let le,_e=S.mipmaps,Se=S.isVideoTexture!==!0,ze=Y.__version===void 0||pe===!0,L=re.dataReady,xe=M(S,k);if(S.isDepthTexture)fe=y(S.format===Bs,S.type),ze&&(Se?t.texStorage2D(i.TEXTURE_2D,1,fe,k.width,k.height):t.texImage2D(i.TEXTURE_2D,0,fe,k.width,k.height,0,Q,ce,null));else if(S.isDataTexture)if(_e.length>0){Se&&ze&&t.texStorage2D(i.TEXTURE_2D,xe,fe,_e[0].width,_e[0].height);for(let ee=0,ue=_e.length;ee<ue;ee++)le=_e[ee],Se?L&&t.texSubImage2D(i.TEXTURE_2D,ee,0,0,le.width,le.height,Q,ce,le.data):t.texImage2D(i.TEXTURE_2D,ee,fe,le.width,le.height,0,Q,ce,le.data);S.generateMipmaps=!1}else Se?(ze&&t.texStorage2D(i.TEXTURE_2D,xe,fe,k.width,k.height),L&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,k.width,k.height,Q,ce,k.data)):t.texImage2D(i.TEXTURE_2D,0,fe,k.width,k.height,0,Q,ce,k.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Se&&ze&&t.texStorage3D(i.TEXTURE_2D_ARRAY,xe,fe,_e[0].width,_e[0].height,k.depth);for(let ee=0,ue=_e.length;ee<ue;ee++)if(le=_e[ee],S.format!==Nn)if(Q!==null)if(Se){if(L)if(S.layerUpdates.size>0){let Te=Su(le.width,le.height,S.format,S.type);for(let Ce of S.layerUpdates){let Qe=le.data.subarray(Ce*Te/le.data.BYTES_PER_ELEMENT,(Ce+1)*Te/le.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ee,0,0,Ce,le.width,le.height,1,Q,Qe,0,0)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ee,0,0,0,le.width,le.height,k.depth,Q,le.data,0,0)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ee,fe,le.width,le.height,k.depth,0,le.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Se?L&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ee,0,0,0,le.width,le.height,k.depth,Q,ce,le.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ee,fe,le.width,le.height,k.depth,0,Q,ce,le.data)}else{Se&&ze&&t.texStorage2D(i.TEXTURE_2D,xe,fe,_e[0].width,_e[0].height);for(let ee=0,ue=_e.length;ee<ue;ee++)le=_e[ee],S.format!==Nn?Q!==null?Se?L&&t.compressedTexSubImage2D(i.TEXTURE_2D,ee,0,0,le.width,le.height,Q,le.data):t.compressedTexImage2D(i.TEXTURE_2D,ee,fe,le.width,le.height,0,le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Se?L&&t.texSubImage2D(i.TEXTURE_2D,ee,0,0,le.width,le.height,Q,ce,le.data):t.texImage2D(i.TEXTURE_2D,ee,fe,le.width,le.height,0,Q,ce,le.data)}else if(S.isDataArrayTexture)if(Se){if(ze&&t.texStorage3D(i.TEXTURE_2D_ARRAY,xe,fe,k.width,k.height,k.depth),L)if(S.layerUpdates.size>0){let ee=Su(k.width,k.height,S.format,S.type);for(let ue of S.layerUpdates){let Te=k.data.subarray(ue*ee/k.data.BYTES_PER_ELEMENT,(ue+1)*ee/k.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ue,k.width,k.height,1,Q,ce,Te)}S.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,k.width,k.height,k.depth,Q,ce,k.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,fe,k.width,k.height,k.depth,0,Q,ce,k.data);else if(S.isData3DTexture)Se?(ze&&t.texStorage3D(i.TEXTURE_3D,xe,fe,k.width,k.height,k.depth),L&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,k.width,k.height,k.depth,Q,ce,k.data)):t.texImage3D(i.TEXTURE_3D,0,fe,k.width,k.height,k.depth,0,Q,ce,k.data);else if(S.isFramebufferTexture){if(ze)if(Se)t.texStorage2D(i.TEXTURE_2D,xe,fe,k.width,k.height);else{let ee=k.width,ue=k.height;for(let Te=0;Te<xe;Te++)t.texImage2D(i.TEXTURE_2D,Te,fe,ee,ue,0,Q,ce,null),ee>>=1,ue>>=1}}else if(_e.length>0){if(Se&&ze){let ee=Ue(_e[0]);t.texStorage2D(i.TEXTURE_2D,xe,fe,ee.width,ee.height)}for(let ee=0,ue=_e.length;ee<ue;ee++)le=_e[ee],Se?L&&t.texSubImage2D(i.TEXTURE_2D,ee,0,0,Q,ce,le):t.texImage2D(i.TEXTURE_2D,ee,fe,Q,ce,le);S.generateMipmaps=!1}else if(Se){if(ze){let ee=Ue(k);t.texStorage2D(i.TEXTURE_2D,xe,fe,ee.width,ee.height)}L&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Q,ce,k)}else t.texImage2D(i.TEXTURE_2D,0,fe,Q,ce,k);m(S)&&p(ae),Y.__version=re.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function V(R,S,K){if(S.image.length!==6)return;let ae=Ee(R,S),pe=S.source;t.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+K);let re=n.get(pe);if(pe.version!==re.__version||ae===!0){t.activeTexture(i.TEXTURE0+K);let Y=ut.getPrimaries(ut.workingColorSpace),se=S.colorSpace===Yn?null:ut.getPrimaries(S.colorSpace),F=S.colorSpace===Yn||Y===se?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,F);let j=S.isCompressedTexture||S.image[0].isCompressedTexture,k=S.image[0]&&S.image[0].isDataTexture,Q=[];for(let ue=0;ue<6;ue++)!j&&!k?Q[ue]=_(S.image[ue],!0,s.maxCubemapSize):Q[ue]=k?S.image[ue].image:S.image[ue],Q[ue]=$e(S,Q[ue]);let ce=Q[0],fe=r.convert(S.format,S.colorSpace),le=r.convert(S.type),_e=v(S.internalFormat,fe,le,S.colorSpace),Se=S.isVideoTexture!==!0,ze=re.__version===void 0||ae===!0,L=pe.dataReady,xe=M(S,ce);ie(i.TEXTURE_CUBE_MAP,S);let ee;if(j){Se&&ze&&t.texStorage2D(i.TEXTURE_CUBE_MAP,xe,_e,ce.width,ce.height);for(let ue=0;ue<6;ue++){ee=Q[ue].mipmaps;for(let Te=0;Te<ee.length;Te++){let Ce=ee[Te];S.format!==Nn?fe!==null?Se?L&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Te,0,0,Ce.width,Ce.height,fe,Ce.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Te,_e,Ce.width,Ce.height,0,Ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Se?L&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Te,0,0,Ce.width,Ce.height,fe,le,Ce.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Te,_e,Ce.width,Ce.height,0,fe,le,Ce.data)}}}else{if(ee=S.mipmaps,Se&&ze){ee.length>0&&xe++;let ue=Ue(Q[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,xe,_e,ue.width,ue.height)}for(let ue=0;ue<6;ue++)if(k){Se?L&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,Q[ue].width,Q[ue].height,fe,le,Q[ue].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,_e,Q[ue].width,Q[ue].height,0,fe,le,Q[ue].data);for(let Te=0;Te<ee.length;Te++){let Qe=ee[Te].image[ue].image;Se?L&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Te+1,0,0,Qe.width,Qe.height,fe,le,Qe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Te+1,_e,Qe.width,Qe.height,0,fe,le,Qe.data)}}else{Se?L&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,fe,le,Q[ue]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,_e,fe,le,Q[ue]);for(let Te=0;Te<ee.length;Te++){let Ce=ee[Te];Se?L&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Te+1,0,0,fe,le,Ce.image[ue]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Te+1,_e,fe,le,Ce.image[ue])}}}m(S)&&p(i.TEXTURE_CUBE_MAP),re.__version=pe.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function ne(R,S,K,ae,pe,re){let Y=r.convert(K.format,K.colorSpace),se=r.convert(K.type),F=v(K.internalFormat,Y,se,K.colorSpace);if(!n.get(S).__hasExternalTextures){let k=Math.max(1,S.width>>re),Q=Math.max(1,S.height>>re);pe===i.TEXTURE_3D||pe===i.TEXTURE_2D_ARRAY?t.texImage3D(pe,re,F,k,Q,S.depth,0,Y,se,null):t.texImage2D(pe,re,F,k,Q,0,Y,se,null)}t.bindFramebuffer(i.FRAMEBUFFER,R),Ke(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ae,pe,n.get(K).__webglTexture,0,We(S)):(pe===i.TEXTURE_2D||pe>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&pe<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ae,pe,n.get(K).__webglTexture,re),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ge(R,S,K){if(i.bindRenderbuffer(i.RENDERBUFFER,R),S.depthBuffer){let ae=S.depthTexture,pe=ae&&ae.isDepthTexture?ae.type:null,re=y(S.stencilBuffer,pe),Y=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,se=We(S);Ke(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,se,re,S.width,S.height):K?i.renderbufferStorageMultisample(i.RENDERBUFFER,se,re,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,re,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Y,i.RENDERBUFFER,R)}else{let ae=S.textures;for(let pe=0;pe<ae.length;pe++){let re=ae[pe],Y=r.convert(re.format,re.colorSpace),se=r.convert(re.type),F=v(re.internalFormat,Y,se,re.colorSpace),j=We(S);K&&Ke(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,j,F,S.width,S.height):Ke(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,j,F,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,F,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function me(R,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,R),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),H(S.depthTexture,0);let ae=n.get(S.depthTexture).__webglTexture,pe=We(S);if(S.depthTexture.format===Is)Ke(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ae,0,pe):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ae,0);else if(S.depthTexture.format===Bs)Ke(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ae,0,pe):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ae,0);else throw new Error("Unknown depthTexture format")}function Ae(R){let S=n.get(R),K=R.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==R.depthTexture){let ae=R.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),ae){let pe=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,ae.removeEventListener("dispose",pe)};ae.addEventListener("dispose",pe),S.__depthDisposeCallback=pe}S.__boundDepthTexture=ae}if(R.depthTexture&&!S.__autoAllocateDepthBuffer){if(K)throw new Error("target.depthTexture not supported in Cube render targets");me(S.__webglFramebuffer,R)}else if(K){S.__webglDepthbuffer=[];for(let ae=0;ae<6;ae++)if(t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[ae]),S.__webglDepthbuffer[ae]===void 0)S.__webglDepthbuffer[ae]=i.createRenderbuffer(),ge(S.__webglDepthbuffer[ae],R,!1);else{let pe=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,re=S.__webglDepthbuffer[ae];i.bindRenderbuffer(i.RENDERBUFFER,re),i.framebufferRenderbuffer(i.FRAMEBUFFER,pe,i.RENDERBUFFER,re)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),ge(S.__webglDepthbuffer,R,!1);else{let ae=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pe=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,pe),i.framebufferRenderbuffer(i.FRAMEBUFFER,ae,i.RENDERBUFFER,pe)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function oe(R,S,K){let ae=n.get(R);S!==void 0&&ne(ae.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),K!==void 0&&Ae(R)}function ve(R){let S=R.texture,K=n.get(R),ae=n.get(S);R.addEventListener("dispose",w);let pe=R.textures,re=R.isWebGLCubeRenderTarget===!0,Y=pe.length>1;if(Y||(ae.__webglTexture===void 0&&(ae.__webglTexture=i.createTexture()),ae.__version=S.version,o.memory.textures++),re){K.__webglFramebuffer=[];for(let se=0;se<6;se++)if(S.mipmaps&&S.mipmaps.length>0){K.__webglFramebuffer[se]=[];for(let F=0;F<S.mipmaps.length;F++)K.__webglFramebuffer[se][F]=i.createFramebuffer()}else K.__webglFramebuffer[se]=i.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){K.__webglFramebuffer=[];for(let se=0;se<S.mipmaps.length;se++)K.__webglFramebuffer[se]=i.createFramebuffer()}else K.__webglFramebuffer=i.createFramebuffer();if(Y)for(let se=0,F=pe.length;se<F;se++){let j=n.get(pe[se]);j.__webglTexture===void 0&&(j.__webglTexture=i.createTexture(),o.memory.textures++)}if(R.samples>0&&Ke(R)===!1){K.__webglMultisampledFramebuffer=i.createFramebuffer(),K.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let se=0;se<pe.length;se++){let F=pe[se];K.__webglColorRenderbuffer[se]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,K.__webglColorRenderbuffer[se]);let j=r.convert(F.format,F.colorSpace),k=r.convert(F.type),Q=v(F.internalFormat,j,k,F.colorSpace,R.isXRRenderTarget===!0),ce=We(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,ce,Q,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+se,i.RENDERBUFFER,K.__webglColorRenderbuffer[se])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(K.__webglDepthRenderbuffer=i.createRenderbuffer(),ge(K.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(re){t.bindTexture(i.TEXTURE_CUBE_MAP,ae.__webglTexture),ie(i.TEXTURE_CUBE_MAP,S);for(let se=0;se<6;se++)if(S.mipmaps&&S.mipmaps.length>0)for(let F=0;F<S.mipmaps.length;F++)ne(K.__webglFramebuffer[se][F],R,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+se,F);else ne(K.__webglFramebuffer[se],R,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0);m(S)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Y){for(let se=0,F=pe.length;se<F;se++){let j=pe[se],k=n.get(j);t.bindTexture(i.TEXTURE_2D,k.__webglTexture),ie(i.TEXTURE_2D,j),ne(K.__webglFramebuffer,R,j,i.COLOR_ATTACHMENT0+se,i.TEXTURE_2D,0),m(j)&&p(i.TEXTURE_2D)}t.unbindTexture()}else{let se=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(se=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(se,ae.__webglTexture),ie(se,S),S.mipmaps&&S.mipmaps.length>0)for(let F=0;F<S.mipmaps.length;F++)ne(K.__webglFramebuffer[F],R,S,i.COLOR_ATTACHMENT0,se,F);else ne(K.__webglFramebuffer,R,S,i.COLOR_ATTACHMENT0,se,0);m(S)&&p(se),t.unbindTexture()}R.depthBuffer&&Ae(R)}function Re(R){let S=R.textures;for(let K=0,ae=S.length;K<ae;K++){let pe=S[K];if(m(pe)){let re=R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Y=n.get(pe).__webglTexture;t.bindTexture(re,Y),p(re),t.unbindTexture()}}}let be=[],C=[];function qe(R){if(R.samples>0){if(Ke(R)===!1){let S=R.textures,K=R.width,ae=R.height,pe=i.COLOR_BUFFER_BIT,re=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Y=n.get(R),se=S.length>1;if(se)for(let F=0;F<S.length;F++)t.bindFramebuffer(i.FRAMEBUFFER,Y.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+F,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Y.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+F,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Y.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Y.__webglFramebuffer);for(let F=0;F<S.length;F++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(pe|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(pe|=i.STENCIL_BUFFER_BIT)),se){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Y.__webglColorRenderbuffer[F]);let j=n.get(S[F]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,j,0)}i.blitFramebuffer(0,0,K,ae,0,0,K,ae,pe,i.NEAREST),l===!0&&(be.length=0,C.length=0,be.push(i.COLOR_ATTACHMENT0+F),R.depthBuffer&&R.resolveDepthBuffer===!1&&(be.push(re),C.push(re),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,C)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,be))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),se)for(let F=0;F<S.length;F++){t.bindFramebuffer(i.FRAMEBUFFER,Y.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+F,i.RENDERBUFFER,Y.__webglColorRenderbuffer[F]);let j=n.get(S[F]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Y.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+F,i.TEXTURE_2D,j,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Y.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){let S=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function We(R){return Math.min(s.maxSamples,R.samples)}function Ke(R){let S=n.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Fe(R){let S=o.render.frame;h.get(R)!==S&&(h.set(R,S),R.update())}function $e(R,S){let K=R.colorSpace,ae=R.format,pe=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||K!==$t&&K!==Yn&&(ut.getTransfer(K)===bt?(ae!==Nn||pe!==gi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",K)),S}function Ue(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=D,this.resetTextureUnits=E,this.setTexture2D=H,this.setTexture2DArray=J,this.setTexture3D=q,this.setTextureCube=te,this.rebindTextures=oe,this.setupRenderTarget=ve,this.updateRenderTargetMipmap=Re,this.updateMultisampleRenderTarget=qe,this.setupDepthRenderbuffer=Ae,this.setupFrameBufferTexture=ne,this.useMultisampledRTT=Ke}function sx(i,e){function t(n,s=Yn){let r,o=ut.getTransfer(s);if(n===gi)return i.UNSIGNED_BYTE;if(n===Cc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Pc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===$u)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Zu)return i.BYTE;if(n===ju)return i.SHORT;if(n===vr)return i.UNSIGNED_SHORT;if(n===Rc)return i.INT;if(n===rs)return i.UNSIGNED_INT;if(n===Kn)return i.FLOAT;if(n===Cn)return i.HALF_FLOAT;if(n===Ju)return i.ALPHA;if(n===Qu)return i.RGB;if(n===Nn)return i.RGBA;if(n===ef)return i.LUMINANCE;if(n===tf)return i.LUMINANCE_ALPHA;if(n===Is)return i.DEPTH_COMPONENT;if(n===Bs)return i.DEPTH_STENCIL;if(n===Ic)return i.RED;if(n===Dc)return i.RED_INTEGER;if(n===nf)return i.RG;if(n===Lc)return i.RG_INTEGER;if(n===Nc)return i.RGBA_INTEGER;if(n===fo||n===po||n===mo||n===go)if(o===bt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===fo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===po)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===mo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===go)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===fo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===po)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===mo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===go)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===_l||n===xl||n===vl||n===yl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===_l)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===xl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===vl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===yl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ml||n===El||n===bl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ml||n===El)return o===bt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===bl)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Sl||n===Tl||n===wl||n===Al||n===Rl||n===Cl||n===Pl||n===Il||n===Dl||n===Ll||n===Nl||n===Ul||n===Fl||n===Ol)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Sl)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Tl)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===wl)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Al)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Rl)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Cl)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Pl)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Il)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Dl)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ll)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Nl)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ul)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Fl)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ol)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===_o||n===Bl||n===Hl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===_o)return o===bt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Bl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Hl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===sf||n===zl||n===kl||n===Vl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===_o)return r.COMPRESSED_RED_RGTC1_EXT;if(n===zl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===kl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Vl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Os?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var ic=class extends Ct{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},it=class extends Pt{constructor(){super(),this.isGroup=!0,this.type="Group"}},rx={type:"move"},gr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new it,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new it,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new A,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new A),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new it,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new A,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new A),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let _ of e.hand.values()){let m=t.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(rx)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new it;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},ox=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ax=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,sc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let s=new Zt,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new at({vertexShader:ox,fragmentShader:ax,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ne(new nn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},rc=class extends _i{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,g=null,_=new sc,m=t.getContextAttributes(),p=null,v=null,y=[],M=[],P=new we,w=null,T=new Ct;T.layers.enable(1),T.viewport=new mt;let I=new Ct;I.layers.enable(2),I.viewport=new mt;let U=[T,I],x=new ic;x.layers.enable(1),x.layers.enable(2);let E=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let ne=y[V];return ne===void 0&&(ne=new gr,y[V]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(V){let ne=y[V];return ne===void 0&&(ne=new gr,y[V]=ne),ne.getGripSpace()},this.getHand=function(V){let ne=y[V];return ne===void 0&&(ne=new gr,y[V]=ne),ne.getHandSpace()};function O(V){let ne=M.indexOf(V.inputSource);if(ne===-1)return;let ge=y[ne];ge!==void 0&&(ge.update(V.inputSource,V.frame,c||o),ge.dispatchEvent({type:V.type,data:V.inputSource}))}function H(){s.removeEventListener("select",O),s.removeEventListener("selectstart",O),s.removeEventListener("selectend",O),s.removeEventListener("squeeze",O),s.removeEventListener("squeezestart",O),s.removeEventListener("squeezeend",O),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",J);for(let V=0;V<y.length;V++){let ne=M[V];ne!==null&&(M[V]=null,y[V].disconnect(ne))}E=null,D=null,_.reset(),e.setRenderTarget(p),d=null,f=null,u=null,s=null,v=null,de.stop(),n.isPresenting=!1,e.setPixelRatio(w),e.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){r=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){a=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(V){c=V},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(V){if(s=V,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",O),s.addEventListener("selectstart",O),s.addEventListener("selectend",O),s.addEventListener("squeeze",O),s.addEventListener("squeezestart",O),s.addEventListener("squeezeend",O),s.addEventListener("end",H),s.addEventListener("inputsourceschange",J),m.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(P),s.renderState.layers===void 0){let ne={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,ne),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),v=new tn(d.framebufferWidth,d.framebufferHeight,{format:Nn,type:gi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ne=null,ge=null,me=null;m.depth&&(me=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ne=m.stencil?Bs:Is,ge=m.stencil?Os:rs);let Ae={colorFormat:t.RGBA8,depthFormat:me,scaleFactor:r};u=new XRWebGLBinding(s,t),f=u.createProjectionLayer(Ae),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),v=new tn(f.textureWidth,f.textureHeight,{format:Nn,type:gi,depthTexture:new Co(f.textureWidth,f.textureHeight,ge,void 0,void 0,void 0,void 0,void 0,void 0,ne),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),de.setContext(s),de.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function J(V){for(let ne=0;ne<V.removed.length;ne++){let ge=V.removed[ne],me=M.indexOf(ge);me>=0&&(M[me]=null,y[me].disconnect(ge))}for(let ne=0;ne<V.added.length;ne++){let ge=V.added[ne],me=M.indexOf(ge);if(me===-1){for(let oe=0;oe<y.length;oe++)if(oe>=M.length){M.push(ge),me=oe;break}else if(M[oe]===null){M[oe]=ge,me=oe;break}if(me===-1)break}let Ae=y[me];Ae&&Ae.connect(ge)}}let q=new A,te=new A;function X(V,ne,ge){q.setFromMatrixPosition(ne.matrixWorld),te.setFromMatrixPosition(ge.matrixWorld);let me=q.distanceTo(te),Ae=ne.projectionMatrix.elements,oe=ge.projectionMatrix.elements,ve=Ae[14]/(Ae[10]-1),Re=Ae[14]/(Ae[10]+1),be=(Ae[9]+1)/Ae[5],C=(Ae[9]-1)/Ae[5],qe=(Ae[8]-1)/Ae[0],We=(oe[8]+1)/oe[0],Ke=ve*qe,Fe=ve*We,$e=me/(-qe+We),Ue=$e*-qe;if(ne.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(Ue),V.translateZ($e),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert(),Ae[10]===-1)V.projectionMatrix.copy(ne.projectionMatrix),V.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{let R=ve+$e,S=Re+$e,K=Ke-Ue,ae=Fe+(me-Ue),pe=be*Re/S*R,re=C*Re/S*R;V.projectionMatrix.makePerspective(K,ae,pe,re,R,S),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}}function he(V,ne){ne===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(ne.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(s===null)return;let ne=V.near,ge=V.far;_.texture!==null&&(_.depthNear>0&&(ne=_.depthNear),_.depthFar>0&&(ge=_.depthFar)),x.near=I.near=T.near=ne,x.far=I.far=T.far=ge,(E!==x.near||D!==x.far)&&(s.updateRenderState({depthNear:x.near,depthFar:x.far}),E=x.near,D=x.far);let me=V.parent,Ae=x.cameras;he(x,me);for(let oe=0;oe<Ae.length;oe++)he(Ae[oe],me);Ae.length===2?X(x,T,I):x.projectionMatrix.copy(T.projectionMatrix),G(V,x,me)};function G(V,ne,ge){ge===null?V.matrix.copy(ne.matrixWorld):(V.matrix.copy(ge.matrixWorld),V.matrix.invert(),V.matrix.multiply(ne.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(ne.projectionMatrix),V.projectionMatrixInverse.copy(ne.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=ks*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(V){l=V,f!==null&&(f.fixedFoveation=V),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=V)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(x)};let ie=null;function Ee(V,ne){if(h=ne.getViewerPose(c||o),g=ne,h!==null){let ge=h.views;d!==null&&(e.setRenderTargetFramebuffer(v,d.framebuffer),e.setRenderTarget(v));let me=!1;ge.length!==x.cameras.length&&(x.cameras.length=0,me=!0);for(let oe=0;oe<ge.length;oe++){let ve=ge[oe],Re=null;if(d!==null)Re=d.getViewport(ve);else{let C=u.getViewSubImage(f,ve);Re=C.viewport,oe===0&&(e.setRenderTargetTextures(v,C.colorTexture,f.ignoreDepthValues?void 0:C.depthStencilTexture),e.setRenderTarget(v))}let be=U[oe];be===void 0&&(be=new Ct,be.layers.enable(oe),be.viewport=new mt,U[oe]=be),be.matrix.fromArray(ve.transform.matrix),be.matrix.decompose(be.position,be.quaternion,be.scale),be.projectionMatrix.fromArray(ve.projectionMatrix),be.projectionMatrixInverse.copy(be.projectionMatrix).invert(),be.viewport.set(Re.x,Re.y,Re.width,Re.height),oe===0&&(x.matrix.copy(be.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),me===!0&&x.cameras.push(be)}let Ae=s.enabledFeatures;if(Ae&&Ae.includes("depth-sensing")){let oe=u.getDepthInformation(ge[0]);oe&&oe.isValid&&oe.texture&&_.init(e,oe,s.renderState)}}for(let ge=0;ge<y.length;ge++){let me=M[ge],Ae=y[ge];me!==null&&Ae!==void 0&&Ae.update(me,ne,c||o)}ie&&ie(V,ne),ne.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ne}),g=null}let de=new uf;de.setAnimationLoop(Ee),this.setAnimationLoop=function(V){ie=V},this.dispose=function(){}}},Qi=new jt,lx=new He;function cx(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,hf(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,v,y,M){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,M)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,v,y):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Kt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Kt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let v=e.get(p),y=v.envMap,M=v.envMapRotation;y&&(m.envMap.value=y,Qi.copy(M),Qi.x*=-1,Qi.y*=-1,Qi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Qi.y*=-1,Qi.z*=-1),m.envMapRotation.value.setFromMatrix4(lx.makeRotationFromEuler(Qi)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,v,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*v,m.scale.value=y*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,v){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Kt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){let v=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function hx(i,e,t,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,y){let M=y.program;n.uniformBlockBinding(v,M)}function c(v,y){let M=s[v.id];M===void 0&&(g(v),M=h(v),s[v.id]=M,v.addEventListener("dispose",m));let P=y.program;n.updateUBOMapping(v,P);let w=e.render.frame;r[v.id]!==w&&(f(v),r[v.id]=w)}function h(v){let y=u();v.__bindingPointIndex=y;let M=i.createBuffer(),P=v.__size,w=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,P,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,M),M}function u(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){let y=s[v.id],M=v.uniforms,P=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let w=0,T=M.length;w<T;w++){let I=Array.isArray(M[w])?M[w]:[M[w]];for(let U=0,x=I.length;U<x;U++){let E=I[U];if(d(E,w,U,P)===!0){let D=E.__offset,O=Array.isArray(E.value)?E.value:[E.value],H=0;for(let J=0;J<O.length;J++){let q=O[J],te=_(q);typeof q=="number"||typeof q=="boolean"?(E.__data[0]=q,i.bufferSubData(i.UNIFORM_BUFFER,D+H,E.__data)):q.isMatrix3?(E.__data[0]=q.elements[0],E.__data[1]=q.elements[1],E.__data[2]=q.elements[2],E.__data[3]=0,E.__data[4]=q.elements[3],E.__data[5]=q.elements[4],E.__data[6]=q.elements[5],E.__data[7]=0,E.__data[8]=q.elements[6],E.__data[9]=q.elements[7],E.__data[10]=q.elements[8],E.__data[11]=0):(q.toArray(E.__data,H),H+=te.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,D,E.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(v,y,M,P){let w=v.value,T=y+"_"+M;if(P[T]===void 0)return typeof w=="number"||typeof w=="boolean"?P[T]=w:P[T]=w.clone(),!0;{let I=P[T];if(typeof w=="number"||typeof w=="boolean"){if(I!==w)return P[T]=w,!0}else if(I.equals(w)===!1)return I.copy(w),!0}return!1}function g(v){let y=v.uniforms,M=0,P=16;for(let T=0,I=y.length;T<I;T++){let U=Array.isArray(y[T])?y[T]:[y[T]];for(let x=0,E=U.length;x<E;x++){let D=U[x],O=Array.isArray(D.value)?D.value:[D.value];for(let H=0,J=O.length;H<J;H++){let q=O[H],te=_(q),X=M%P,he=X%te.boundary,G=X+he;M+=he,G!==0&&P-G<te.storage&&(M+=P-G),D.__data=new Float32Array(te.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=M,M+=te.storage}}}let w=M%P;return w>0&&(M+=P-w),v.__size=M,v.__cache={},this}function _(v){let y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=48,y.storage=48):v.isMatrix4?(y.boundary=64,y.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),y}function m(v){let y=v.target;y.removeEventListener("dispose",m);let M=o.indexOf(y.__bindingPointIndex);o.splice(M,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function p(){for(let v in s)i.deleteBuffer(s[v]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}var Po=class{constructor(e={}){let{canvas:t=pp(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;let d=new Uint32Array(4),g=new Int32Array(4),_=null,m=null,p=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ht,this.toneMapping=Ui,this.toneMappingExposure=1;let y=this,M=!1,P=0,w=0,T=null,I=-1,U=null,x=new mt,E=new mt,D=null,O=new z(0),H=0,J=t.width,q=t.height,te=1,X=null,he=null,G=new mt(0,0,J,q),ie=new mt(0,0,J,q),Ee=!1,de=new Er,V=!1,ne=!1,ge=new He,me=new He,Ae=new A,oe=new mt,ve={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Re=!1;function be(){return T===null?te:1}let C=n;function qe(b,N){return t.getContext(b,N)}try{let b={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r169"),t.addEventListener("webglcontextlost",ue,!1),t.addEventListener("webglcontextrestored",Te,!1),t.addEventListener("webglcontextcreationerror",Ce,!1),C===null){let N="webgl2";if(C=qe(N,b),C===null)throw qe(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let We,Ke,Fe,$e,Ue,R,S,K,ae,pe,re,Y,se,F,j,k,Q,ce,fe,le,_e,Se,ze,L;function xe(){We=new wg(C),We.init(),Se=new sx(C,We),Ke=new yg(C,We,e,Se),Fe=new tx(C),Ke.reverseDepthBuffer&&Fe.buffers.depth.setReversed(!0),$e=new Cg(C),Ue=new V_,R=new ix(C,We,Fe,Ue,Ke,Se,$e),S=new Eg(y),K=new Tg(y),ae=new Fp(C),ze=new xg(C,ae),pe=new Ag(C,ae,$e,ze),re=new Ig(C,pe,ae,$e),fe=new Pg(C,Ke,R),k=new Mg(Ue),Y=new k_(y,S,K,We,Ke,ze,k),se=new cx(y,Ue),F=new W_,j=new j_(We),ce=new _g(y,S,K,Fe,re,f,l),Q=new Q_(y,re,Ke),L=new hx(C,$e,Ke,Fe),le=new vg(C,We,$e),_e=new Rg(C,We,$e),$e.programs=Y.programs,y.capabilities=Ke,y.extensions=We,y.properties=Ue,y.renderLists=F,y.shadowMap=Q,y.state=Fe,y.info=$e}xe();let ee=new rc(y,C);this.xr=ee,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){let b=We.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=We.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return te},this.setPixelRatio=function(b){b!==void 0&&(te=b,this.setSize(J,q,!1))},this.getSize=function(b){return b.set(J,q)},this.setSize=function(b,N,W=!0){if(ee.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}J=b,q=N,t.width=Math.floor(b*te),t.height=Math.floor(N*te),W===!0&&(t.style.width=b+"px",t.style.height=N+"px"),this.setViewport(0,0,b,N)},this.getDrawingBufferSize=function(b){return b.set(J*te,q*te).floor()},this.setDrawingBufferSize=function(b,N,W){J=b,q=N,te=W,t.width=Math.floor(b*W),t.height=Math.floor(N*W),this.setViewport(0,0,b,N)},this.getCurrentViewport=function(b){return b.copy(x)},this.getViewport=function(b){return b.copy(G)},this.setViewport=function(b,N,W,Z){b.isVector4?G.set(b.x,b.y,b.z,b.w):G.set(b,N,W,Z),Fe.viewport(x.copy(G).multiplyScalar(te).round())},this.getScissor=function(b){return b.copy(ie)},this.setScissor=function(b,N,W,Z){b.isVector4?ie.set(b.x,b.y,b.z,b.w):ie.set(b,N,W,Z),Fe.scissor(E.copy(ie).multiplyScalar(te).round())},this.getScissorTest=function(){return Ee},this.setScissorTest=function(b){Fe.setScissorTest(Ee=b)},this.setOpaqueSort=function(b){X=b},this.setTransparentSort=function(b){he=b},this.getClearColor=function(b){return b.copy(ce.getClearColor())},this.setClearColor=function(){ce.setClearColor.apply(ce,arguments)},this.getClearAlpha=function(){return ce.getClearAlpha()},this.setClearAlpha=function(){ce.setClearAlpha.apply(ce,arguments)},this.clear=function(b=!0,N=!0,W=!0){let Z=0;if(b){let B=!1;if(T!==null){let Me=T.texture.format;B=Me===Nc||Me===Lc||Me===Dc}if(B){let Me=T.texture.type,De=Me===gi||Me===rs||Me===vr||Me===Os||Me===Cc||Me===Pc,Oe=ce.getClearColor(),ke=ce.getClearAlpha(),Je=Oe.r,et=Oe.g,Ve=Oe.b;De?(d[0]=Je,d[1]=et,d[2]=Ve,d[3]=ke,C.clearBufferuiv(C.COLOR,0,d)):(g[0]=Je,g[1]=et,g[2]=Ve,g[3]=ke,C.clearBufferiv(C.COLOR,0,g))}else Z|=C.COLOR_BUFFER_BIT}N&&(Z|=C.DEPTH_BUFFER_BIT,C.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),W&&(Z|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ue,!1),t.removeEventListener("webglcontextrestored",Te,!1),t.removeEventListener("webglcontextcreationerror",Ce,!1),F.dispose(),j.dispose(),Ue.dispose(),S.dispose(),K.dispose(),re.dispose(),ze.dispose(),L.dispose(),Y.dispose(),ee.dispose(),ee.removeEventListener("sessionstart",ai),ee.removeEventListener("sessionend",Yi),yn.stop()};function ue(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function Te(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;let b=$e.autoReset,N=Q.enabled,W=Q.autoUpdate,Z=Q.needsUpdate,B=Q.type;xe(),$e.autoReset=b,Q.enabled=N,Q.autoUpdate=W,Q.needsUpdate=Z,Q.type=B}function Ce(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Qe(b){let N=b.target;N.removeEventListener("dispose",Qe),xt(N)}function xt(b){It(b),Ue.remove(b)}function It(b){let N=Ue.get(b).programs;N!==void 0&&(N.forEach(function(W){Y.releaseProgram(W)}),b.isShaderMaterial&&Y.releaseShaderCache(b))}this.renderBufferDirect=function(b,N,W,Z,B,Me){N===null&&(N=ve);let De=B.isMesh&&B.matrixWorld.determinant()<0,Oe=ft(b,N,W,Z,B);Fe.setMaterial(Z,De);let ke=W.index,Je=1;if(Z.wireframe===!0){if(ke=pe.getWireframeAttribute(W),ke===void 0)return;Je=2}let et=W.drawRange,Ve=W.attributes.position,vt=et.start*Je,Tt=(et.start+et.count)*Je;Me!==null&&(vt=Math.max(vt,Me.start*Je),Tt=Math.min(Tt,(Me.start+Me.count)*Je)),ke!==null?(vt=Math.max(vt,0),Tt=Math.min(Tt,ke.count)):Ve!=null&&(vt=Math.max(vt,0),Tt=Math.min(Tt,Ve.count));let Lt=Tt-vt;if(Lt<0||Lt===1/0)return;ze.setup(B,Z,Oe,W,ke);let En,gt=le;if(ke!==null&&(En=ae.get(ke),gt=_e,gt.setIndex(En)),B.isMesh)Z.wireframe===!0?(Fe.setLineWidth(Z.wireframeLinewidth*be()),gt.setMode(C.LINES)):gt.setMode(C.TRIANGLES);else if(B.isLine){let Ge=Z.linewidth;Ge===void 0&&(Ge=1),Fe.setLineWidth(Ge*be()),B.isLineSegments?gt.setMode(C.LINES):B.isLineLoop?gt.setMode(C.LINE_LOOP):gt.setMode(C.LINE_STRIP)}else B.isPoints?gt.setMode(C.POINTS):B.isSprite&&gt.setMode(C.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)gt.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(We.get("WEBGL_multi_draw"))gt.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{let Ge=B._multiDrawStarts,Qt=B._multiDrawCounts,_t=B._multiDrawCount,Vn=ke?ae.get(ke).bytesPerElement:1,ds=Ue.get(Z).currentProgram.getUniforms();for(let bn=0;bn<_t;bn++)ds.setValue(C,"_gl_DrawID",bn),gt.render(Ge[bn]/Vn,Qt[bn])}else if(B.isInstancedMesh)gt.renderInstances(vt,Lt,B.count);else if(W.isInstancedBufferGeometry){let Ge=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Qt=Math.min(W.instanceCount,Ge);gt.renderInstances(vt,Lt,Qt)}else gt.render(vt,Lt)};function st(b,N,W){b.transparent===!0&&b.side===nt&&b.forceSinglePass===!1?(b.side=Kt,b.needsUpdate=!0,Be(b,N,W),b.side=ii,b.needsUpdate=!0,Be(b,N,W),b.side=nt):Be(b,N,W)}this.compile=function(b,N,W=null){W===null&&(W=b),m=j.get(W),m.init(N),v.push(m),W.traverseVisible(function(B){B.isLight&&B.layers.test(N.layers)&&(m.pushLight(B),B.castShadow&&m.pushShadow(B))}),b!==W&&b.traverseVisible(function(B){B.isLight&&B.layers.test(N.layers)&&(m.pushLight(B),B.castShadow&&m.pushShadow(B))}),m.setupLights();let Z=new Set;return b.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;let Me=B.material;if(Me)if(Array.isArray(Me))for(let De=0;De<Me.length;De++){let Oe=Me[De];st(Oe,W,B),Z.add(Oe)}else st(Me,W,B),Z.add(Me)}),v.pop(),m=null,Z},this.compileAsync=function(b,N,W=null){let Z=this.compile(b,N,W);return new Promise(B=>{function Me(){if(Z.forEach(function(De){Ue.get(De).currentProgram.isReady()&&Z.delete(De)}),Z.size===0){B(b);return}setTimeout(Me,10)}We.get("KHR_parallel_shader_compile")!==null?Me():setTimeout(Me,10)})};let Dt=null;function pn(b){Dt&&Dt(b)}function ai(){yn.stop()}function Yi(){yn.start()}let yn=new uf;yn.setAnimationLoop(pn),typeof self<"u"&&yn.setContext(self),this.setAnimationLoop=function(b){Dt=b,ee.setAnimationLoop(b),b===null?yn.stop():yn.start()},ee.addEventListener("sessionstart",ai),ee.addEventListener("sessionend",Yi),this.render=function(b,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),ee.enabled===!0&&ee.isPresenting===!0&&(ee.cameraAutoUpdate===!0&&ee.updateCamera(N),N=ee.getCamera()),b.isScene===!0&&b.onBeforeRender(y,b,N,T),m=j.get(b,v.length),m.init(N),v.push(m),me.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),de.setFromProjectionMatrix(me),ne=this.localClippingEnabled,V=k.init(this.clippingPlanes,ne),_=F.get(b,p.length),_.init(),p.push(_),ee.enabled===!0&&ee.isPresenting===!0){let Me=y.xr.getDepthSensingMesh();Me!==null&&Mn(Me,N,-1/0,y.sortObjects)}Mn(b,N,0,y.sortObjects),_.finish(),y.sortObjects===!0&&_.sort(X,he),Re=ee.enabled===!1||ee.isPresenting===!1||ee.hasDepthSensing()===!1,Re&&ce.addToRenderList(_,b),this.info.render.frame++,V===!0&&k.beginShadows();let W=m.state.shadowsArray;Q.render(W,b,N),V===!0&&k.endShadows(),this.info.autoReset===!0&&this.info.reset();let Z=_.opaque,B=_.transmissive;if(m.setupLights(),N.isArrayCamera){let Me=N.cameras;if(B.length>0)for(let De=0,Oe=Me.length;De<Oe;De++){let ke=Me[De];wi(Z,B,b,ke)}Re&&ce.render(b);for(let De=0,Oe=Me.length;De<Oe;De++){let ke=Me[De];qi(_,b,ke,ke.viewport)}}else B.length>0&&wi(Z,B,b,N),Re&&ce.render(b),qi(_,b,N);T!==null&&(R.updateMultisampleRenderTarget(T),R.updateRenderTargetMipmap(T)),b.isScene===!0&&b.onAfterRender(y,b,N),ze.resetDefaultState(),I=-1,U=null,v.pop(),v.length>0?(m=v[v.length-1],V===!0&&k.setGlobalState(y.clippingPlanes,m.state.camera)):m=null,p.pop(),p.length>0?_=p[p.length-1]:_=null};function Mn(b,N,W,Z){if(b.visible===!1)return;if(b.layers.test(N.layers)){if(b.isGroup)W=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(N);else if(b.isLight)m.pushLight(b),b.castShadow&&m.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||de.intersectsSprite(b)){Z&&oe.setFromMatrixPosition(b.matrixWorld).applyMatrix4(me);let De=re.update(b),Oe=b.material;Oe.visible&&_.push(b,De,Oe,W,oe.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||de.intersectsObject(b))){let De=re.update(b),Oe=b.material;if(Z&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),oe.copy(b.boundingSphere.center)):(De.boundingSphere===null&&De.computeBoundingSphere(),oe.copy(De.boundingSphere.center)),oe.applyMatrix4(b.matrixWorld).applyMatrix4(me)),Array.isArray(Oe)){let ke=De.groups;for(let Je=0,et=ke.length;Je<et;Je++){let Ve=ke[Je],vt=Oe[Ve.materialIndex];vt&&vt.visible&&_.push(b,De,vt,W,oe.z,Ve)}}else Oe.visible&&_.push(b,De,Oe,W,oe.z,null)}}let Me=b.children;for(let De=0,Oe=Me.length;De<Oe;De++)Mn(Me[De],N,W,Z)}function qi(b,N,W,Z){let B=b.opaque,Me=b.transmissive,De=b.transparent;m.setupLightsView(W),V===!0&&k.setGlobalState(y.clippingPlanes,W),Z&&Fe.viewport(x.copy(Z)),B.length>0&&mn(B,N,W),Me.length>0&&mn(Me,N,W),De.length>0&&mn(De,N,W),Fe.buffers.depth.setTest(!0),Fe.buffers.depth.setMask(!0),Fe.buffers.color.setMask(!0),Fe.setPolygonOffset(!1)}function wi(b,N,W,Z){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[Z.id]===void 0&&(m.state.transmissionRenderTarget[Z.id]=new tn(1,1,{generateMipmaps:!0,type:We.has("EXT_color_buffer_half_float")||We.has("EXT_color_buffer_float")?Cn:gi,minFilter:ti,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ut.workingColorSpace}));let Me=m.state.transmissionRenderTarget[Z.id],De=Z.viewport||x;Me.setSize(De.z,De.w);let Oe=y.getRenderTarget();y.setRenderTarget(Me),y.getClearColor(O),H=y.getClearAlpha(),H<1&&y.setClearColor(16777215,.5),y.clear(),Re&&ce.render(W);let ke=y.toneMapping;y.toneMapping=Ui;let Je=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),m.setupLightsView(Z),V===!0&&k.setGlobalState(y.clippingPlanes,Z),mn(b,W,Z),R.updateMultisampleRenderTarget(Me),R.updateRenderTargetMipmap(Me),We.has("WEBGL_multisampled_render_to_texture")===!1){let et=!1;for(let Ve=0,vt=N.length;Ve<vt;Ve++){let Tt=N[Ve],Lt=Tt.object,En=Tt.geometry,gt=Tt.material,Ge=Tt.group;if(gt.side===nt&&Lt.layers.test(Z.layers)){let Qt=gt.side;gt.side=Kt,gt.needsUpdate=!0,$(Lt,W,Z,En,gt,Ge),gt.side=Qt,gt.needsUpdate=!0,et=!0}}et===!0&&(R.updateMultisampleRenderTarget(Me),R.updateRenderTargetMipmap(Me))}y.setRenderTarget(Oe),y.setClearColor(O,H),Je!==void 0&&(Z.viewport=Je),y.toneMapping=ke}function mn(b,N,W){let Z=N.isScene===!0?N.overrideMaterial:null;for(let B=0,Me=b.length;B<Me;B++){let De=b[B],Oe=De.object,ke=De.geometry,Je=Z===null?De.material:Z,et=De.group;Oe.layers.test(W.layers)&&$(Oe,N,W,ke,Je,et)}}function $(b,N,W,Z,B,Me){b.onBeforeRender(y,N,W,Z,B,Me),b.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),B.onBeforeRender(y,N,W,Z,b,Me),B.transparent===!0&&B.side===nt&&B.forceSinglePass===!1?(B.side=Kt,B.needsUpdate=!0,y.renderBufferDirect(W,N,Z,B,b,Me),B.side=ii,B.needsUpdate=!0,y.renderBufferDirect(W,N,Z,B,b,Me),B.side=nt):y.renderBufferDirect(W,N,Z,B,b,Me),b.onAfterRender(y,N,W,Z,B,Me)}function Be(b,N,W){N.isScene!==!0&&(N=ve);let Z=Ue.get(b),B=m.state.lights,Me=m.state.shadowsArray,De=B.state.version,Oe=Y.getParameters(b,B.state,Me,N,W),ke=Y.getProgramCacheKey(Oe),Je=Z.programs;Z.environment=b.isMeshStandardMaterial?N.environment:null,Z.fog=N.fog,Z.envMap=(b.isMeshStandardMaterial?K:S).get(b.envMap||Z.environment),Z.envMapRotation=Z.environment!==null&&b.envMap===null?N.environmentRotation:b.envMapRotation,Je===void 0&&(b.addEventListener("dispose",Qe),Je=new Map,Z.programs=Je);let et=Je.get(ke);if(et!==void 0){if(Z.currentProgram===et&&Z.lightsStateVersion===De)return Pe(b,Oe),et}else Oe.uniforms=Y.getUniforms(b),b.onBeforeCompile(Oe,y),et=Y.acquireProgram(Oe,ke),Je.set(ke,et),Z.uniforms=Oe.uniforms;let Ve=Z.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Ve.clippingPlanes=k.uniform),Pe(b,Oe),Z.needsLights=Jt(b),Z.lightsStateVersion=De,Z.needsLights&&(Ve.ambientLightColor.value=B.state.ambient,Ve.lightProbe.value=B.state.probe,Ve.directionalLights.value=B.state.directional,Ve.directionalLightShadows.value=B.state.directionalShadow,Ve.spotLights.value=B.state.spot,Ve.spotLightShadows.value=B.state.spotShadow,Ve.rectAreaLights.value=B.state.rectArea,Ve.ltc_1.value=B.state.rectAreaLTC1,Ve.ltc_2.value=B.state.rectAreaLTC2,Ve.pointLights.value=B.state.point,Ve.pointLightShadows.value=B.state.pointShadow,Ve.hemisphereLights.value=B.state.hemi,Ve.directionalShadowMap.value=B.state.directionalShadowMap,Ve.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Ve.spotShadowMap.value=B.state.spotShadowMap,Ve.spotLightMatrix.value=B.state.spotLightMatrix,Ve.spotLightMap.value=B.state.spotLightMap,Ve.pointShadowMap.value=B.state.pointShadowMap,Ve.pointShadowMatrix.value=B.state.pointShadowMatrix),Z.currentProgram=et,Z.uniformsList=null,et}function dt(b){if(b.uniformsList===null){let N=b.currentProgram.getUniforms();b.uniformsList=Ls.seqWithValue(N.seq,b.uniforms)}return b.uniformsList}function Pe(b,N){let W=Ue.get(b);W.outputColorSpace=N.outputColorSpace,W.batching=N.batching,W.batchingColor=N.batchingColor,W.instancing=N.instancing,W.instancingColor=N.instancingColor,W.instancingMorph=N.instancingMorph,W.skinning=N.skinning,W.morphTargets=N.morphTargets,W.morphNormals=N.morphNormals,W.morphColors=N.morphColors,W.morphTargetsCount=N.morphTargetsCount,W.numClippingPlanes=N.numClippingPlanes,W.numIntersection=N.numClipIntersection,W.vertexAlphas=N.vertexAlphas,W.vertexTangents=N.vertexTangents,W.toneMapping=N.toneMapping}function ft(b,N,W,Z,B){N.isScene!==!0&&(N=ve),R.resetTextureUnits();let Me=N.fog,De=Z.isMeshStandardMaterial?N.environment:null,Oe=T===null?y.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:$t,ke=(Z.isMeshStandardMaterial?K:S).get(Z.envMap||De),Je=Z.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,et=!!W.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),Ve=!!W.morphAttributes.position,vt=!!W.morphAttributes.normal,Tt=!!W.morphAttributes.color,Lt=Ui;Z.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(Lt=y.toneMapping);let En=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,gt=En!==void 0?En.length:0,Ge=Ue.get(Z),Qt=m.state.lights;if(V===!0&&(ne===!0||b!==U)){let In=b===U&&Z.id===I;k.setState(Z,b,In)}let _t=!1;Z.version===Ge.__version?(Ge.needsLights&&Ge.lightsStateVersion!==Qt.state.version||Ge.outputColorSpace!==Oe||B.isBatchedMesh&&Ge.batching===!1||!B.isBatchedMesh&&Ge.batching===!0||B.isBatchedMesh&&Ge.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&Ge.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&Ge.instancing===!1||!B.isInstancedMesh&&Ge.instancing===!0||B.isSkinnedMesh&&Ge.skinning===!1||!B.isSkinnedMesh&&Ge.skinning===!0||B.isInstancedMesh&&Ge.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Ge.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Ge.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Ge.instancingMorph===!1&&B.morphTexture!==null||Ge.envMap!==ke||Z.fog===!0&&Ge.fog!==Me||Ge.numClippingPlanes!==void 0&&(Ge.numClippingPlanes!==k.numPlanes||Ge.numIntersection!==k.numIntersection)||Ge.vertexAlphas!==Je||Ge.vertexTangents!==et||Ge.morphTargets!==Ve||Ge.morphNormals!==vt||Ge.morphColors!==Tt||Ge.toneMapping!==Lt||Ge.morphTargetsCount!==gt)&&(_t=!0):(_t=!0,Ge.__version=Z.version);let Vn=Ge.currentProgram;_t===!0&&(Vn=Be(Z,N,B));let ds=!1,bn=!1,Ea=!1,Bt=Vn.getUniforms(),Ai=Ge.uniforms;if(Fe.useProgram(Vn.program)&&(ds=!0,bn=!0,Ea=!0),Z.id!==I&&(I=Z.id,bn=!0),ds||U!==b){Ke.reverseDepthBuffer?(ge.copy(b.projectionMatrix),gp(ge),_p(ge),Bt.setValue(C,"projectionMatrix",ge)):Bt.setValue(C,"projectionMatrix",b.projectionMatrix),Bt.setValue(C,"viewMatrix",b.matrixWorldInverse);let In=Bt.map.cameraPosition;In!==void 0&&In.setValue(C,Ae.setFromMatrixPosition(b.matrixWorld)),Ke.logarithmicDepthBuffer&&Bt.setValue(C,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&Bt.setValue(C,"isOrthographic",b.isOrthographicCamera===!0),U!==b&&(U=b,bn=!0,Ea=!0)}if(B.isSkinnedMesh){Bt.setOptional(C,B,"bindMatrix"),Bt.setOptional(C,B,"bindMatrixInverse");let In=B.skeleton;In&&(In.boneTexture===null&&In.computeBoneTexture(),Bt.setValue(C,"boneTexture",In.boneTexture,R))}B.isBatchedMesh&&(Bt.setOptional(C,B,"batchingTexture"),Bt.setValue(C,"batchingTexture",B._matricesTexture,R),Bt.setOptional(C,B,"batchingIdTexture"),Bt.setValue(C,"batchingIdTexture",B._indirectTexture,R),Bt.setOptional(C,B,"batchingColorTexture"),B._colorsTexture!==null&&Bt.setValue(C,"batchingColorTexture",B._colorsTexture,R));let ba=W.morphAttributes;if((ba.position!==void 0||ba.normal!==void 0||ba.color!==void 0)&&fe.update(B,W,Vn),(bn||Ge.receiveShadow!==B.receiveShadow)&&(Ge.receiveShadow=B.receiveShadow,Bt.setValue(C,"receiveShadow",B.receiveShadow)),Z.isMeshGouraudMaterial&&Z.envMap!==null&&(Ai.envMap.value=ke,Ai.flipEnvMap.value=ke.isCubeTexture&&ke.isRenderTargetTexture===!1?-1:1),Z.isMeshStandardMaterial&&Z.envMap===null&&N.environment!==null&&(Ai.envMapIntensity.value=N.environmentIntensity),bn&&(Bt.setValue(C,"toneMappingExposure",y.toneMappingExposure),Ge.needsLights&&Ot(Ai,Ea),Me&&Z.fog===!0&&se.refreshFogUniforms(Ai,Me),se.refreshMaterialUniforms(Ai,Z,te,q,m.state.transmissionRenderTarget[b.id]),Ls.upload(C,dt(Ge),Ai,R)),Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(Ls.upload(C,dt(Ge),Ai,R),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&Bt.setValue(C,"center",B.center),Bt.setValue(C,"modelViewMatrix",B.modelViewMatrix),Bt.setValue(C,"normalMatrix",B.normalMatrix),Bt.setValue(C,"modelMatrix",B.matrixWorld),Z.isShaderMaterial||Z.isRawShaderMaterial){let In=Z.uniformsGroups;for(let Sa=0,gd=In.length;Sa<gd;Sa++){let Rh=In[Sa];L.update(Rh,Vn),L.bind(Rh,Vn)}}return Vn}function Ot(b,N){b.ambientLightColor.needsUpdate=N,b.lightProbe.needsUpdate=N,b.directionalLights.needsUpdate=N,b.directionalLightShadows.needsUpdate=N,b.pointLights.needsUpdate=N,b.pointLightShadows.needsUpdate=N,b.spotLights.needsUpdate=N,b.spotLightShadows.needsUpdate=N,b.rectAreaLights.needsUpdate=N,b.hemisphereLights.needsUpdate=N}function Jt(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(b,N,W){Ue.get(b.texture).__webglTexture=N,Ue.get(b.depthTexture).__webglTexture=W;let Z=Ue.get(b);Z.__hasExternalTextures=!0,Z.__autoAllocateDepthBuffer=W===void 0,Z.__autoAllocateDepthBuffer||We.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Z.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,N){let W=Ue.get(b);W.__webglFramebuffer=N,W.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(b,N=0,W=0){T=b,P=N,w=W;let Z=!0,B=null,Me=!1,De=!1;if(b){let ke=Ue.get(b);if(ke.__useDefaultFramebuffer!==void 0)Fe.bindFramebuffer(C.FRAMEBUFFER,null),Z=!1;else if(ke.__webglFramebuffer===void 0)R.setupRenderTarget(b);else if(ke.__hasExternalTextures)R.rebindTextures(b,Ue.get(b.texture).__webglTexture,Ue.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let Ve=b.depthTexture;if(ke.__boundDepthTexture!==Ve){if(Ve!==null&&Ue.has(Ve)&&(b.width!==Ve.image.width||b.height!==Ve.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(b)}}let Je=b.texture;(Je.isData3DTexture||Je.isDataArrayTexture||Je.isCompressedArrayTexture)&&(De=!0);let et=Ue.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(et[N])?B=et[N][W]:B=et[N],Me=!0):b.samples>0&&R.useMultisampledRTT(b)===!1?B=Ue.get(b).__webglMultisampledFramebuffer:Array.isArray(et)?B=et[W]:B=et,x.copy(b.viewport),E.copy(b.scissor),D=b.scissorTest}else x.copy(G).multiplyScalar(te).floor(),E.copy(ie).multiplyScalar(te).floor(),D=Ee;if(Fe.bindFramebuffer(C.FRAMEBUFFER,B)&&Z&&Fe.drawBuffers(b,B),Fe.viewport(x),Fe.scissor(E),Fe.setScissorTest(D),Me){let ke=Ue.get(b.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+N,ke.__webglTexture,W)}else if(De){let ke=Ue.get(b.texture),Je=N||0;C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,ke.__webglTexture,W||0,Je)}I=-1},this.readRenderTargetPixels=function(b,N,W,Z,B,Me,De){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Oe=Ue.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&De!==void 0&&(Oe=Oe[De]),Oe){Fe.bindFramebuffer(C.FRAMEBUFFER,Oe);try{let ke=b.texture,Je=ke.format,et=ke.type;if(!Ke.textureFormatReadable(Je)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ke.textureTypeReadable(et)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=b.width-Z&&W>=0&&W<=b.height-B&&C.readPixels(N,W,Z,B,Se.convert(Je),Se.convert(et),Me)}finally{let ke=T!==null?Ue.get(T).__webglFramebuffer:null;Fe.bindFramebuffer(C.FRAMEBUFFER,ke)}}},this.readRenderTargetPixelsAsync=async function(b,N,W,Z,B,Me,De){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Oe=Ue.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&De!==void 0&&(Oe=Oe[De]),Oe){let ke=b.texture,Je=ke.format,et=ke.type;if(!Ke.textureFormatReadable(Je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ke.textureTypeReadable(et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(N>=0&&N<=b.width-Z&&W>=0&&W<=b.height-B){Fe.bindFramebuffer(C.FRAMEBUFFER,Oe);let Ve=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,Ve),C.bufferData(C.PIXEL_PACK_BUFFER,Me.byteLength,C.STREAM_READ),C.readPixels(N,W,Z,B,Se.convert(Je),Se.convert(et),0);let vt=T!==null?Ue.get(T).__webglFramebuffer:null;Fe.bindFramebuffer(C.FRAMEBUFFER,vt);let Tt=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await mp(C,Tt,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,Ve),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,Me),C.deleteBuffer(Ve),C.deleteSync(Tt),Me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,N=null,W=0){b.isTexture!==!0&&(xo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),N=arguments[0]||null,b=arguments[1]);let Z=Math.pow(2,-W),B=Math.floor(b.image.width*Z),Me=Math.floor(b.image.height*Z),De=N!==null?N.x:0,Oe=N!==null?N.y:0;R.setTexture2D(b,0),C.copyTexSubImage2D(C.TEXTURE_2D,W,0,0,De,Oe,B,Me),Fe.unbindTexture()},this.copyTextureToTexture=function(b,N,W=null,Z=null,B=0){b.isTexture!==!0&&(xo("WebGLRenderer: copyTextureToTexture function signature has changed."),Z=arguments[0]||null,b=arguments[1],N=arguments[2],B=arguments[3]||0,W=null);let Me,De,Oe,ke,Je,et;W!==null?(Me=W.max.x-W.min.x,De=W.max.y-W.min.y,Oe=W.min.x,ke=W.min.y):(Me=b.image.width,De=b.image.height,Oe=0,ke=0),Z!==null?(Je=Z.x,et=Z.y):(Je=0,et=0);let Ve=Se.convert(N.format),vt=Se.convert(N.type);R.setTexture2D(N,0),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,N.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,N.unpackAlignment);let Tt=C.getParameter(C.UNPACK_ROW_LENGTH),Lt=C.getParameter(C.UNPACK_IMAGE_HEIGHT),En=C.getParameter(C.UNPACK_SKIP_PIXELS),gt=C.getParameter(C.UNPACK_SKIP_ROWS),Ge=C.getParameter(C.UNPACK_SKIP_IMAGES),Qt=b.isCompressedTexture?b.mipmaps[B]:b.image;C.pixelStorei(C.UNPACK_ROW_LENGTH,Qt.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Qt.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Oe),C.pixelStorei(C.UNPACK_SKIP_ROWS,ke),b.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,B,Je,et,Me,De,Ve,vt,Qt.data):b.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,B,Je,et,Qt.width,Qt.height,Ve,Qt.data):C.texSubImage2D(C.TEXTURE_2D,B,Je,et,Me,De,Ve,vt,Qt),C.pixelStorei(C.UNPACK_ROW_LENGTH,Tt),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Lt),C.pixelStorei(C.UNPACK_SKIP_PIXELS,En),C.pixelStorei(C.UNPACK_SKIP_ROWS,gt),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Ge),B===0&&N.generateMipmaps&&C.generateMipmap(C.TEXTURE_2D),Fe.unbindTexture()},this.copyTextureToTexture3D=function(b,N,W=null,Z=null,B=0){b.isTexture!==!0&&(xo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),W=arguments[0]||null,Z=arguments[1]||null,b=arguments[2],N=arguments[3],B=arguments[4]||0);let Me,De,Oe,ke,Je,et,Ve,vt,Tt,Lt=b.isCompressedTexture?b.mipmaps[B]:b.image;W!==null?(Me=W.max.x-W.min.x,De=W.max.y-W.min.y,Oe=W.max.z-W.min.z,ke=W.min.x,Je=W.min.y,et=W.min.z):(Me=Lt.width,De=Lt.height,Oe=Lt.depth,ke=0,Je=0,et=0),Z!==null?(Ve=Z.x,vt=Z.y,Tt=Z.z):(Ve=0,vt=0,Tt=0);let En=Se.convert(N.format),gt=Se.convert(N.type),Ge;if(N.isData3DTexture)R.setTexture3D(N,0),Ge=C.TEXTURE_3D;else if(N.isDataArrayTexture||N.isCompressedArrayTexture)R.setTexture2DArray(N,0),Ge=C.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,N.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,N.unpackAlignment);let Qt=C.getParameter(C.UNPACK_ROW_LENGTH),_t=C.getParameter(C.UNPACK_IMAGE_HEIGHT),Vn=C.getParameter(C.UNPACK_SKIP_PIXELS),ds=C.getParameter(C.UNPACK_SKIP_ROWS),bn=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,Lt.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Lt.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,ke),C.pixelStorei(C.UNPACK_SKIP_ROWS,Je),C.pixelStorei(C.UNPACK_SKIP_IMAGES,et),b.isDataTexture||b.isData3DTexture?C.texSubImage3D(Ge,B,Ve,vt,Tt,Me,De,Oe,En,gt,Lt.data):N.isCompressedArrayTexture?C.compressedTexSubImage3D(Ge,B,Ve,vt,Tt,Me,De,Oe,En,Lt.data):C.texSubImage3D(Ge,B,Ve,vt,Tt,Me,De,Oe,En,gt,Lt),C.pixelStorei(C.UNPACK_ROW_LENGTH,Qt),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,_t),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Vn),C.pixelStorei(C.UNPACK_SKIP_ROWS,ds),C.pixelStorei(C.UNPACK_SKIP_IMAGES,bn),B===0&&N.generateMipmaps&&C.generateMipmap(Ge),Fe.unbindTexture()},this.initRenderTarget=function(b){Ue.get(b).__webglFramebuffer===void 0&&R.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?R.setTextureCube(b,0):b.isData3DTexture?R.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?R.setTexture2DArray(b,0):R.setTexture2D(b,0),Fe.unbindTexture()},this.resetState=function(){P=0,w=0,T=null,Fe.reset(),ze.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return mi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===Uc?"display-p3":"srgb",t.unpackColorSpace=ut.workingColorSpace===ea?"display-p3":"srgb"}};var Io=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new z(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Ws=class extends Pt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new jt,this.environmentIntensity=1,this.environmentRotation=new jt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},br=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Gl,this.updateRanges=[],this.version=0,this.uuid=jn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=jn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=jn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},cn=new A,Sr=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)cn.fromBufferAttribute(this,t),cn.applyMatrix4(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)cn.fromBufferAttribute(this,t),cn.applyNormalMatrix(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)cn.fromBufferAttribute(this,t),cn.transformDirection(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=qn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=yt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=yt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=yt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=yt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=yt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=qn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=qn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=qn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=qn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array),s=yt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array),s=yt(s,this.array),r=yt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Xe(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}};var Tu=new A,wu=new mt,Au=new mt,ux=new A,Ru=new He,so=new A,Qa=new wn,Cu=new He,el=new xi,Do=class extends Ne{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Dh,this.bindMatrix=new He,this.bindMatrixInverse=new He,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new gn),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,so),this.boundingBox.expandByPoint(so)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new wn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,so),this.boundingSphere.expandByPoint(so)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Qa.copy(this.boundingSphere),Qa.applyMatrix4(s),e.ray.intersectsSphere(Qa)!==!1&&(Cu.copy(s).invert(),el.copy(e.ray).applyMatrix4(Cu),!(this.boundingBox!==null&&el.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,el)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new mt,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Dh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===zd?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;wu.fromBufferAttribute(s.attributes.skinIndex,e),Au.fromBufferAttribute(s.attributes.skinWeight,e),Tu.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let o=Au.getComponent(r);if(o!==0){let a=wu.getComponent(r);Ru.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(ux.copy(Tu).applyMatrix4(Ru),o)}}return t.applyMatrix4(this.bindMatrixInverse)}},Tr=class extends Pt{constructor(){super(),this.isBone=!0,this.type="Bone"}},Lo=class extends Zt{constructor(e=null,t=1,n=1,s,r,o,a,l,c=ln,h=ln,u,f){super(null,o,a,l,c,h,s,r,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Pu=new He,fx=new He,No=class i{constructor(e=[],t=[]){this.uuid=jn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new He)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new He;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:fx;Pu.multiplyMatrices(a,t[r]),Pu.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Lo(t,e,e,Nn,Kn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new Tr),this.bones.push(o),this.boneInverses.push(new He().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let o=t[s];e.bones.push(o.uuid);let a=n[s];e.boneInverses.push(a.toArray())}return e}},Fn=class extends Xe{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Rs=new He,Iu=new He,ro=[],Du=new gn,dx=new He,lr=new Ne,cr=new wn,dn=class extends Ne{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Fn(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,dx)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new gn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Rs),Du.copy(e.boundingBox).applyMatrix4(Rs),this.boundingBox.union(Du)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new wn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Rs),cr.copy(e.boundingSphere).applyMatrix4(Rs),this.boundingSphere.union(cr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(lr.geometry=this.geometry,lr.material=this.material,lr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),cr.copy(this.boundingSphere),cr.applyMatrix4(n),e.ray.intersectsSphere(cr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Rs),Iu.multiplyMatrices(n,Rs),lr.matrixWorld=Iu,lr.raycast(e,ro);for(let o=0,a=ro.length;o<a;o++){let l=ro[o];l.instanceId=r,l.object=this,t.push(l)}ro.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Fn(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Lo(new Float32Array(s*this.count),s,this.count,Ic,Kn));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var wr=class extends An{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new z(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Uo=new A,Fo=new A,Lu=new He,hr=new xi,oo=new wn,tl=new A,Nu=new A,Xs=class extends Pt{constructor(e=new Ye,t=new wr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Uo.fromBufferAttribute(t,s-1),Fo.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Uo.distanceTo(Fo);e.setAttribute("lineDistance",new Le(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),oo.copy(n.boundingSphere),oo.applyMatrix4(s),oo.radius+=r,e.ray.intersectsSphere(oo)===!1)return;Lu.copy(s).invert(),hr.copy(e.ray).applyMatrix4(Lu);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){let d=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=d,m=g-1;_<m;_+=c){let p=h.getX(_),v=h.getX(_+1),y=ao(this,e,hr,l,p,v);y&&t.push(y)}if(this.isLineLoop){let _=h.getX(g-1),m=h.getX(d),p=ao(this,e,hr,l,_,m);p&&t.push(p)}}else{let d=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let _=d,m=g-1;_<m;_+=c){let p=ao(this,e,hr,l,_,_+1);p&&t.push(p)}if(this.isLineLoop){let _=ao(this,e,hr,l,g-1,d);_&&t.push(_)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function ao(i,e,t,n,s,r){let o=i.geometry.attributes.position;if(Uo.fromBufferAttribute(o,s),Fo.fromBufferAttribute(o,r),t.distanceSqToSegment(Uo,Fo,tl,Nu)>n)return;tl.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(tl);if(!(l<e.near||l>e.far))return{distance:l,point:Nu.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}var Uu=new A,Fu=new A,Oo=class extends Xs{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Uu.fromBufferAttribute(t,s),Fu.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Uu.distanceTo(Fu);e.setAttribute("lineDistance",new Le(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Bo=class extends Xs{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Fi=class extends An{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new z(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Ou=new He,oc=new xi,lo=new wn,co=new A,Rn=class extends Pt{constructor(e=new Ye,t=new Fi){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),lo.copy(n.boundingSphere),lo.applyMatrix4(s),lo.radius+=r,e.ray.intersectsSphere(lo)===!1)return;Ou.copy(s).invert(),oc.copy(e.ray).applyMatrix4(Ou);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){let f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let g=f,_=d;g<_;g++){let m=c.getX(g);co.fromBufferAttribute(u,m),Bu(co,m,l,s,e,t,this)}}else{let f=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let g=f,_=d;g<_;g++)co.fromBufferAttribute(u,g),Bu(co,g,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Bu(i,e,t,n,s,r,o){let a=oc.distanceSqToPoint(i);if(a<t){let l=new A;oc.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var os=class extends Zt{constructor(e,t,n,s,r,o,a,l,c){super(e,t,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},ac=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),s=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let h=n[s],f=n[s+1]-h,d=(o-h)/f;return(s+d)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new we:new A);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new A,s=[],r=[],o=[],a=new A,l=new He;for(let d=0;d<=e;d++){let g=d/e;s[d]=this.getTangentAt(g,new A)}r[0]=new A,o[0]=new A;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(kt(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,g))}o[d].crossVectors(s[d],r[d])}if(t===!0){let d=Math.acos(kt(r[0].dot(r[e]),-1,1));d/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(d=-d);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],d*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}};function Bc(){let i=0,e=0,t=0,n=0;function s(r,o,a,l){i=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let f=(o-r)/c-(a-r)/(c+h)+(a-o)/h,d=(a-o)/h-(l-o)/(h+u)+(l-a)/u;f*=h,d*=h,s(o,a,f,d)},calc:function(r){let o=r*r,a=o*r;return i+e*r+t*o+n*a}}}var ho=new A,nl=new Bc,il=new Bc,sl=new Bc,Ho=class extends ac{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new A){let n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(ho.subVectors(s[0],s[1]).add(s[0]),c=ho);let u=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(ho.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=ho),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),d),_=Math.pow(u.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(h),d);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),nl.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,g,_,m),il.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,g,_,m),sl.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(nl.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),il.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),sl.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return n.set(nl.calc(l),il.calc(l),sl.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new A().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};var zo=class i extends Ye{constructor(e=[new we(0,-.5),new we(.5,0),new we(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=kt(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/t,u=new A,f=new we,d=new A,g=new A,_=new A,m=0,p=0;for(let v=0;v<=e.length-1;v++)switch(v){case 0:m=e[v+1].x-e[v].x,p=e[v+1].y-e[v].y,d.x=p*1,d.y=-m,d.z=p*0,_.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case e.length-1:l.push(_.x,_.y,_.z);break;default:m=e[v+1].x-e[v].x,p=e[v+1].y-e[v].y,d.x=p*1,d.y=-m,d.z=p*0,g.copy(d),d.x+=_.x,d.y+=_.y,d.z+=_.z,d.normalize(),l.push(d.x,d.y,d.z),_.copy(g)}for(let v=0;v<=t;v++){let y=n+v*h*s,M=Math.sin(y),P=Math.cos(y);for(let w=0;w<=e.length-1;w++){u.x=e[w].x*M,u.y=e[w].y,u.z=e[w].x*P,o.push(u.x,u.y,u.z),f.x=v/t,f.y=w/(e.length-1),a.push(f.x,f.y);let T=l[3*w+0]*M,I=l[3*w+1],U=l[3*w+0]*P;c.push(T,I,U)}}for(let v=0;v<t;v++)for(let y=0;y<e.length-1;y++){let M=y+v*e.length,P=M,w=M+e.length,T=M+e.length+1,I=M+1;r.push(P,w,I),r.push(T,I,w)}this.setIndex(r),this.setAttribute("position",new Le(o,3)),this.setAttribute("uv",new Le(a,2)),this.setAttribute("normal",new Le(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}};var tt=class i extends Ye{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],f=[],d=[],g=0,_=[],m=n/2,p=0;v(),o===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new Le(u,3)),this.setAttribute("normal",new Le(f,3)),this.setAttribute("uv",new Le(d,2));function v(){let M=new A,P=new A,w=0,T=(t-e)/n;for(let I=0;I<=r;I++){let U=[],x=I/r,E=x*(t-e)+e;for(let D=0;D<=s;D++){let O=D/s,H=O*l+a,J=Math.sin(H),q=Math.cos(H);P.x=E*J,P.y=-x*n+m,P.z=E*q,u.push(P.x,P.y,P.z),M.set(J,T,q).normalize(),f.push(M.x,M.y,M.z),d.push(O,1-x),U.push(g++)}_.push(U)}for(let I=0;I<s;I++)for(let U=0;U<r;U++){let x=_[U][I],E=_[U+1][I],D=_[U+1][I+1],O=_[U][I+1];e>0&&(h.push(x,E,O),w+=3),t>0&&(h.push(E,D,O),w+=3)}c.addGroup(p,w,0),p+=w}function y(M){let P=g,w=new we,T=new A,I=0,U=M===!0?e:t,x=M===!0?1:-1;for(let D=1;D<=s;D++)u.push(0,m*x,0),f.push(0,x,0),d.push(.5,.5),g++;let E=g;for(let D=0;D<=s;D++){let H=D/s*l+a,J=Math.cos(H),q=Math.sin(H);T.x=U*q,T.y=m*x,T.z=U*J,u.push(T.x,T.y,T.z),f.push(0,x,0),w.x=J*.5+.5,w.y=q*.5*x+.5,d.push(w.x,w.y),g++}for(let D=0;D<s;D++){let O=P+D,H=E+D;M===!0?h.push(H,H+1,O):h.push(H+1,H,O),I+=3}c.addGroup(p,I,M===!0?1:2),p+=I}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},At=class i extends tt{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},lc=class i extends Ye{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],o=[];a(s),c(n),h(),this.setAttribute("position",new Le(r,3)),this.setAttribute("normal",new Le(r.slice(),3)),this.setAttribute("uv",new Le(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(v){let y=new A,M=new A,P=new A;for(let w=0;w<t.length;w+=3)d(t[w+0],y),d(t[w+1],M),d(t[w+2],P),l(y,M,P,v)}function l(v,y,M,P){let w=P+1,T=[];for(let I=0;I<=w;I++){T[I]=[];let U=v.clone().lerp(M,I/w),x=y.clone().lerp(M,I/w),E=w-I;for(let D=0;D<=E;D++)D===0&&I===w?T[I][D]=U:T[I][D]=U.clone().lerp(x,D/E)}for(let I=0;I<w;I++)for(let U=0;U<2*(w-I)-1;U++){let x=Math.floor(U/2);U%2===0?(f(T[I][x+1]),f(T[I+1][x]),f(T[I][x])):(f(T[I][x+1]),f(T[I+1][x+1]),f(T[I+1][x]))}}function c(v){let y=new A;for(let M=0;M<r.length;M+=3)y.x=r[M+0],y.y=r[M+1],y.z=r[M+2],y.normalize().multiplyScalar(v),r[M+0]=y.x,r[M+1]=y.y,r[M+2]=y.z}function h(){let v=new A;for(let y=0;y<r.length;y+=3){v.x=r[y+0],v.y=r[y+1],v.z=r[y+2];let M=m(v)/2/Math.PI+.5,P=p(v)/Math.PI+.5;o.push(M,1-P)}g(),u()}function u(){for(let v=0;v<o.length;v+=6){let y=o[v+0],M=o[v+2],P=o[v+4],w=Math.max(y,M,P),T=Math.min(y,M,P);w>.9&&T<.1&&(y<.2&&(o[v+0]+=1),M<.2&&(o[v+2]+=1),P<.2&&(o[v+4]+=1))}}function f(v){r.push(v.x,v.y,v.z)}function d(v,y){let M=v*3;y.x=e[M+0],y.y=e[M+1],y.z=e[M+2]}function g(){let v=new A,y=new A,M=new A,P=new A,w=new we,T=new we,I=new we;for(let U=0,x=0;U<r.length;U+=9,x+=6){v.set(r[U+0],r[U+1],r[U+2]),y.set(r[U+3],r[U+4],r[U+5]),M.set(r[U+6],r[U+7],r[U+8]),w.set(o[x+0],o[x+1]),T.set(o[x+2],o[x+3]),I.set(o[x+4],o[x+5]),P.copy(v).add(y).add(M).divideScalar(3);let E=m(P);_(w,x+0,v,E),_(T,x+2,y,E),_(I,x+4,M,E)}}function _(v,y,M,P){P<0&&v.x===1&&(o[y]=v.x-1),M.x===0&&M.z===0&&(o[y]=P/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function p(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.details)}};var si=class i extends lc{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var ko=class i extends Ye{constructor(e=.5,t=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],l=[],c=[],h=[],u=e,f=(t-e)/s,d=new A,g=new we;for(let _=0;_<=s;_++){for(let m=0;m<=n;m++){let p=r+m/n*o;d.x=u*Math.cos(p),d.y=u*Math.sin(p),l.push(d.x,d.y,d.z),c.push(0,0,1),g.x=(d.x/t+1)/2,g.y=(d.y/t+1)/2,h.push(g.x,g.y)}u+=f}for(let _=0;_<s;_++){let m=_*(n+1);for(let p=0;p<n;p++){let v=p+m,y=v,M=v+n+1,P=v+n+2,w=v+1;a.push(y,M,w),a.push(M,P,w)}}this.setIndex(a),this.setAttribute("position",new Le(l,3)),this.setAttribute("normal",new Le(c,3)),this.setAttribute("uv",new Le(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var lt=class i extends Ye{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new A,f=new A,d=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){let v=[],y=p/n,M=0;p===0&&o===0?M=.5/t:p===n&&l===Math.PI&&(M=-.5/t);for(let P=0;P<=t;P++){let w=P/t;u.x=-e*Math.cos(s+w*r)*Math.sin(o+y*a),u.y=e*Math.cos(o+y*a),u.z=e*Math.sin(s+w*r)*Math.sin(o+y*a),g.push(u.x,u.y,u.z),f.copy(u).normalize(),_.push(f.x,f.y,f.z),m.push(w+M,1-y),v.push(c++)}h.push(v)}for(let p=0;p<n;p++)for(let v=0;v<t;v++){let y=h[p][v+1],M=h[p][v],P=h[p+1][v],w=h[p+1][v+1];(p!==0||o>0)&&d.push(y,M,w),(p!==n-1||l<Math.PI)&&d.push(M,P,w)}this.setIndex(d),this.setAttribute("position",new Le(g,3)),this.setAttribute("normal",new Le(_,3)),this.setAttribute("uv",new Le(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Vo=class i extends Ye{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],l=[],c=[],h=new A,u=new A,f=new A;for(let d=0;d<=n;d++)for(let g=0;g<=s;g++){let _=g/s*r,m=d/n*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(_),u.y=(e+t*Math.cos(m))*Math.sin(_),u.z=t*Math.sin(m),a.push(u.x,u.y,u.z),h.x=e*Math.cos(_),h.y=e*Math.sin(_),f.subVectors(u,h).normalize(),l.push(f.x,f.y,f.z),c.push(g/s),c.push(d/n)}for(let d=1;d<=n;d++)for(let g=1;g<=s;g++){let _=(s+1)*d+g-1,m=(s+1)*(d-1)+g-1,p=(s+1)*(d-1)+g,v=(s+1)*d+g;o.push(_,m,v),o.push(m,p,v)}this.setIndex(o),this.setAttribute("position",new Le(a,3)),this.setAttribute("normal",new Le(l,3)),this.setAttribute("uv",new Le(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var Go=class extends at{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Mt=class extends An{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new z(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new z(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=of,this.normalScale=new we(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new jt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Xt=class extends Mt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new we(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return kt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new z(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new z(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new z(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};function uo(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function px(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function mx(i){function e(s,r){return i[s]-i[r]}let t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function Hu(i,e,t){let n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){let a=t[r]*e;for(let l=0;l!==e;++l)s[o++]=i[a+l]}return s}function gf(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=i[s++];while(r!==void 0)}var Oi=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},cc=class extends Oi{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Lh,endingEnd:Lh}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Nh:r=e,a=2*t-n;break;case Uh:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Nh:o=e,l=2*n-t;break;case Uh:o=1,l=n+s[1]-s[0];break;default:o=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(n-t)/(s-t),_=g*g,m=_*g,p=-f*m+2*f*_-f*g,v=(1+f)*m+(-1.5-2*f)*_+(-.5+f)*g+1,y=(-1-d)*m+(1.5+d)*_+.5*g,M=d*m-d*_;for(let P=0;P!==a;++P)r[P]=p*o[h+P]+v*o[c+P]+y*o[l+P]+M*o[u+P];return r}},hc=class extends Oi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(s-t),u=1-h;for(let f=0;f!==a;++f)r[f]=o[c+f]*u+o[l+f]*h;return r}},uc=class extends Oi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},On=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=uo(t,this.TimeBufferType),this.values=uo(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:uo(e.times,Array),values:uo(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new uc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new hc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new cc(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Hs:t=this.InterpolantFactoryMethodDiscrete;break;case zs:t=this.InterpolantFactoryMethodLinear;break;case Ta:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Hs;case this.InterpolantFactoryMethodLinear:return zs;case this.InterpolantFactoryMethodSmooth:return Ta}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&px(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Ta,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(s)l=!0;else{let u=a*n,f=u-n,d=u+n;for(let g=0;g!==n;++g){let _=t[u+g];if(_!==t[f+g]||_!==t[d+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let u=a*n,f=o*n;for(let d=0;d!==n;++d)t[f+d]=t[u+d]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};On.prototype.TimeBufferType=Float32Array;On.prototype.ValueBufferType=Float32Array;On.prototype.DefaultInterpolation=zs;var Bi=class extends On{constructor(e,t,n){super(e,t,n)}};Bi.prototype.ValueTypeName="bool";Bi.prototype.ValueBufferType=Array;Bi.prototype.DefaultInterpolation=Hs;Bi.prototype.InterpolantFactoryMethodLinear=void 0;Bi.prototype.InterpolantFactoryMethodSmooth=void 0;var Wo=class extends On{};Wo.prototype.ValueTypeName="color";var vi=class extends On{};vi.prototype.ValueTypeName="number";var fc=class extends Oi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(s-t),c=e*a;for(let h=c+a;c!==h;c+=4)Nt.slerpFlat(r,0,o,c-a,o,c,l);return r}},yi=class extends On{InterpolantFactoryMethodLinear(e){return new fc(this.times,this.values,this.getValueSize(),e)}};yi.prototype.ValueTypeName="quaternion";yi.prototype.InterpolantFactoryMethodSmooth=void 0;var Hi=class extends On{constructor(e,t,n){super(e,t,n)}};Hi.prototype.ValueTypeName="string";Hi.prototype.ValueBufferType=Array;Hi.prototype.DefaultInterpolation=Hs;Hi.prototype.InterpolantFactoryMethodLinear=void 0;Hi.prototype.InterpolantFactoryMethodSmooth=void 0;var Mi=class extends On{};Mi.prototype.ValueTypeName="vector";var Xo=class{constructor(e="",t=-1,n=[],s=kd){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=jn(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,s=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(_x(n[o]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){let t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(On.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){let r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);let h=mx(l);l=Hu(l,1,h),c=Hu(c,1,h),!s&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new vi(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){let c=e[a],h=c.name.match(r);if(h&&h.length>1){let u=h[1],f=s[u];f||(s[u]=f=[]),f.push(c)}}let o=[];for(let a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(u,f,d,g,_){if(d.length!==0){let m=[],p=[];gf(d,m,p,g),m.length!==0&&_.push(new u(f,m,p))}},s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode,l=e.length||-1,c=e.hierarchy||[];for(let u=0;u<c.length;u++){let f=c[u].keys;if(!(!f||f.length===0))if(f[0].morphTargets){let d={},g;for(g=0;g<f.length;g++)if(f[g].morphTargets)for(let _=0;_<f[g].morphTargets.length;_++)d[f[g].morphTargets[_]]=-1;for(let _ in d){let m=[],p=[];for(let v=0;v!==f[g].morphTargets.length;++v){let y=f[g];m.push(y.time),p.push(y.morphTarget===_?1:0)}s.push(new vi(".morphTargetInfluence["+_+"]",m,p))}l=d.length*o}else{let d=".bones["+t[u].name+"]";n(Mi,d+".position",f,"pos",s),n(yi,d+".quaternion",f,"rot",s),n(Mi,d+".scale",f,"scl",s)}}return s.length===0?null:new this(r,l,s,a)}resetDuration(){let e=this.tracks,t=0;for(let n=0,s=e.length;n!==s;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function gx(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return vi;case"vector":case"vector2":case"vector3":case"vector4":return Mi;case"color":return Wo;case"quaternion":return yi;case"bool":case"boolean":return Bi;case"string":return Hi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function _x(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=gx(i.type);if(i.times===void 0){let t=[],n=[];gf(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}var Ni={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},dc=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let d=c[u],g=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return g}return null}}},xx=new dc,Ei=class{constructor(e){this.manager=e!==void 0?e:xx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Ei.DEFAULT_MATERIAL_NAME="__DEFAULT";var di={},pc=class extends Error{constructor(e,t){super(e),this.response=t}},Ar=class extends Ei{constructor(e){super(e)}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Ni.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(di[e]!==void 0){di[e].push({onLoad:t,onProgress:n,onError:s});return}di[e]=[],di[e].push({onLoad:t,onProgress:n,onError:s});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let h=di[e],u=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=f?parseInt(f):0,g=d!==0,_=0,m=new ReadableStream({start(p){v();function v(){u.read().then(({done:y,value:M})=>{if(y)p.close();else{_+=M.byteLength;let P=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:d});for(let w=0,T=h.length;w<T;w++){let I=h[w];I.onProgress&&I.onProgress(P)}p.enqueue(M),v()}},y=>{p.error(y)})}}});return new Response(m)}else throw new pc(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a===void 0)return c.text();{let u=/charset="?([^;"\s]*)"?/i.exec(a),f=u&&u[1]?u[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(g=>d.decode(g))}}}).then(c=>{Ni.add(e,c);let h=di[e];delete di[e];for(let u=0,f=h.length;u<f;u++){let d=h[u];d.onLoad&&d.onLoad(c)}}).catch(c=>{let h=di[e];if(h===void 0)throw this.manager.itemError(e),c;delete di[e];for(let u=0,f=h.length;u<f;u++){let d=h[u];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var mc=class extends Ei{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Ni.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;let a=yr("img");function l(){h(),Ni.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(u){h(),s&&s(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}};var Yo=class extends Ei{constructor(e){super(e)}load(e,t,n,s){let r=new Zt,o=new mc(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},as=class extends Pt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new z(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},Ys=class extends as{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Pt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new z(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},rl=new He,zu=new A,ku=new A,Rr=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new we(512,512),this.map=null,this.mapPass=null,this.matrix=new He,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Er,this._frameExtents=new we(1,1),this._viewportCount=1,this._viewports=[new mt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;zu.setFromMatrixPosition(e.matrixWorld),t.position.copy(zu),ku.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ku),t.updateMatrixWorld(),rl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(rl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(rl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},gc=class extends Rr{constructor(){super(new Ct(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=ks*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},qo=class extends as{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Pt.DEFAULT_UP),this.updateMatrix(),this.target=new Pt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new gc}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Vu=new He,ur=new A,ol=new A,_c=class extends Rr{constructor(){super(new Ct(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new we(4,2),this._viewportCount=6,this._viewports=[new mt(2,1,1,1),new mt(0,1,1,1),new mt(3,1,1,1),new mt(1,1,1,1),new mt(3,0,1,1),new mt(1,0,1,1)],this._cubeDirections=[new A(1,0,0),new A(-1,0,0),new A(0,0,1),new A(0,0,-1),new A(0,1,0),new A(0,-1,0)],this._cubeUps=[new A(0,1,0),new A(0,1,0),new A(0,1,0),new A(0,1,0),new A(0,0,1),new A(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),ur.setFromMatrixPosition(e.matrixWorld),n.position.copy(ur),ol.copy(n.position),ol.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(ol),n.updateMatrixWorld(),s.makeTranslation(-ur.x,-ur.y,-ur.z),Vu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Vu)}},Ko=class extends as{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new _c}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},xc=class extends Rr{constructor(){super(new Un(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Bn=class extends as{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Pt.DEFAULT_UP),this.updateMatrix(),this.target=new Pt,this.shadow=new xc}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Zo=class extends as{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var zi=class{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,s=e.length;n<s;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var jo=class extends Ei{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Ni.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{t&&t(c),r.manager.itemEnd(e)}).catch(c=>{s&&s(c)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;let l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return Ni.add(e,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),Ni.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});Ni.add(e,l),r.manager.itemStart(e)}};var qs=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Gu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=Gu();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function Gu(){return performance.now()}var Hc="\\[\\]\\.:\\/",vx=new RegExp("["+Hc+"]","g"),zc="[^"+Hc+"]",yx="[^"+Hc.replace("\\.","")+"]",Mx=/((?:WC+[\/:])*)/.source.replace("WC",zc),Ex=/(WCOD+)?/.source.replace("WCOD",yx),bx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",zc),Sx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",zc),Tx=new RegExp("^"+Mx+Ex+bx+Sx+"$"),wx=["material","materials","bones","map"],vc=class{constructor(e,t,n){let s=n||St.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},St=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(vx,"")}static parseTrackName(e){let t=Tx.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);wx.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};St.Composite=vc;St.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};St.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};St.prototype.GetterByBindingType=[St.prototype._getValue_direct,St.prototype._getValue_array,St.prototype._getValue_arrayElement,St.prototype._getValue_toArray];St.prototype.SetterByBindingTypeAndVersioning=[[St.prototype._setValue_direct,St.prototype._setValue_direct_setNeedsUpdate,St.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[St.prototype._setValue_array,St.prototype._setValue_array_setNeedsUpdate,St.prototype._setValue_array_setMatrixWorldNeedsUpdate],[St.prototype._setValue_arrayElement,St.prototype._setValue_arrayElement_setNeedsUpdate,St.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[St.prototype._setValue_fromArray,St.prototype._setValue_fromArray_setNeedsUpdate,St.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var my=new Float32Array(1);var Wu=new He,Ks=class{constructor(e,t,n=0,s=1/0){this.ray=new xi(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Mr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Wu.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Wu),this}intersectObject(e,t=!0,n=[]){return yc(e,this,n,t),n.sort(Xu),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)yc(e[s],this,n,t);return n.sort(Xu),n}};function Xu(i,e){return i.distance-e.distance}function yc(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)yc(r[o],e,t,!0)}}var Cr=class{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(kt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var $o=class extends _i{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"169"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="169");function kc(i,e){if(e===rf)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===Ir||e===Qo){let t=i.getIndex();if(t===null){let o=[],a=i.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);i.setIndex(o),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,s=[];if(e===Ir)for(let o=1;o<=n;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}var na=class extends Ei{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Kc(t)}),this.register(function(t){return new Zc(t)}),this.register(function(t){return new sh(t)}),this.register(function(t){return new rh(t)}),this.register(function(t){return new oh(t)}),this.register(function(t){return new $c(t)}),this.register(function(t){return new Jc(t)}),this.register(function(t){return new Qc(t)}),this.register(function(t){return new eh(t)}),this.register(function(t){return new qc(t)}),this.register(function(t){return new th(t)}),this.register(function(t){return new jc(t)}),this.register(function(t){return new ih(t)}),this.register(function(t){return new nh(t)}),this.register(function(t){return new Xc(t)}),this.register(function(t){return new ah(t)}),this.register(function(t){return new lh(t)})}load(e,t,n,s){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let c=zi.extractUrlBase(e);o=zi.resolveURL(c,this.path)}else o=zi.extractUrlBase(e);this.manager.itemStart(e);let a=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new Ar(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(h){t(h),r.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r,o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Mf){try{o[ct.KHR_BINARY_GLTF]=new ch(e)}catch(u){s&&s(u);return}r=JSON.parse(o[ct.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new gh(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],f=r.extensionsRequired||[];switch(u){case ct.KHR_MATERIALS_UNLIT:o[u]=new Yc;break;case ct.KHR_DRACO_MESH_COMPRESSION:o[u]=new hh(r,this.dracoLoader);break;case ct.KHR_TEXTURE_TRANSFORM:o[u]=new uh;break;case ct.KHR_MESH_QUANTIZATION:o[u]=new fh;break;default:f.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,s)}parseAsync(e,t){let n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}};function Ax(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}var ct={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Xc=class{constructor(e){this.parser=e,this.name=ct.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,s=t.cache.get(n);if(s)return s;let r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,h=new z(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],$t);let u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Bn(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Ko(h),c.distance=u;break;case"spot":c=new qo(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,bi(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}},Yc=class{constructor(){this.name=ct.KHR_MATERIALS_UNLIT}getMaterialType(){return wt}extendParams(e,t,n){let s=[];e.color=new z(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],$t),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,Ht))}return Promise.all(s)}},qc=class{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},Kc=class{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Xt}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){let a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new we(a,a)}return Promise.all(r)}},Zc=class{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_DISPERSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Xt}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}},jc=class{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Xt}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}},$c=class{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Xt}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[];t.sheenColor=new z(0,0,0),t.sheenRoughness=0,t.sheen=1;let o=s.extensions[this.name];if(o.sheenColorFactor!==void 0){let a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],$t)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Ht)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}},Jc=class{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Xt}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}},Qc=class{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Xt}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;let a=o.attenuationColor||[1,1,1];return t.attenuationColor=new z().setRGB(a[0],a[1],a[2],$t),Promise.all(r)}},eh=class{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Xt}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},th=class{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Xt}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));let a=o.specularColorFactor||[1,1,1];return t.specularColor=new z().setRGB(a[0],a[1],a[2],$t),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,Ht)),Promise.all(r)}},nh=class{constructor(e){this.parser=e,this.name=ct.EXT_MATERIALS_BUMP}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Xt}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}},ih=class{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Xt}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}},sh=class{constructor(e){this.parser=e,this.name=ct.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}},rh=class{constructor(e){this.parser=e,this.name=ct.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},oh=class{constructor(e){this.parser=e,this.name=ct.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},ah=class{constructor(e){this.name=ct.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let l=s.byteOffset||0,c=s.byteLength||0,h=s.count,u=s.byteStride,f=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,f,s.mode,s.filter).then(function(d){return d.buffer}):o.ready.then(function(){let d=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(d),h,u,f,s.mode,s.filter),d})})}else return null}},lh=class{constructor(e){this.name=ct.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=t.meshes[n.mesh];for(let c of s.primitives)if(c.mode!==Hn.TRIANGLES&&c.mode!==Hn.TRIANGLE_STRIP&&c.mode!==Hn.TRIANGLE_FAN&&c.mode!==void 0)return null;let o=n.extensions[this.name].attributes,a=[],l={};for(let c in o)a.push(this.parser.getDependency("accessor",o[c]).then(h=>(l[c]=h,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{let h=c.pop(),u=h.isGroup?h.children:[h],f=c[0].count,d=[];for(let g of u){let _=new He,m=new A,p=new Nt,v=new A(1,1,1),y=new dn(g.geometry,g.material,f);for(let M=0;M<f;M++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,M),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,M),l.SCALE&&v.fromBufferAttribute(l.SCALE,M),y.setMatrixAt(M,_.compose(m,p,v));for(let M in l)if(M==="_COLOR_0"){let P=l[M];y.instanceColor=new Fn(P.array,P.itemSize,P.normalized)}else M!=="TRANSLATION"&&M!=="ROTATION"&&M!=="SCALE"&&g.geometry.setAttribute(M,l[M]);Pt.prototype.copy.call(y,g),this.parser.assignFinalMaterial(y),d.push(y)}return h.isGroup?(h.clear(),h.add(...d),h):d[0]}))}},Mf="glTF",Dr=12,_f={JSON:1313821514,BIN:5130562},ch=class{constructor(e){this.name=ct.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Dr),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Mf)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-Dr,r=new DataView(e,Dr),o=0;for(;o<s;){let a=r.getUint32(o,!0);o+=4;let l=r.getUint32(o,!0);if(o+=4,l===_f.JSON){let c=new Uint8Array(e,Dr+o,a);this.content=n.decode(c)}else if(l===_f.BIN){let c=Dr+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},hh=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ct.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(let h in o){let u=ph[h]||h.toLowerCase();a[u]=o[h]}for(let h in e.attributes){let u=ph[h]||h.toLowerCase();if(o[h]!==void 0){let f=n.accessors[e.attributes[h]],d=js[f.componentType];c[u]=d.name,l[u]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,f){s.decodeDracoFile(h,function(d){for(let g in d.attributes){let _=d.attributes[g],m=l[g];m!==void 0&&(_.normalized=m)}u(d)},a,c,$t,f)})})}},uh=class{constructor(){this.name=ct.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},fh=class{constructor(){this.name=ct.KHR_MESH_QUANTIZATION}},ia=class extends Oi{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,h=s-t,u=(n-t)/h,f=u*u,d=f*u,g=e*c,_=g-c,m=-2*d+3*f,p=d-f,v=1-m,y=p-f+u;for(let M=0;M!==a;M++){let P=o[_+M+a],w=o[_+M+l]*h,T=o[g+M+a],I=o[g+M]*h;r[M]=v*P+y*w+m*T+p*I}return r}},Rx=new Nt,dh=class extends ia{interpolate_(e,t,n,s){let r=super.interpolate_(e,t,n,s);return Rx.fromArray(r).normalize().toArray(r),r}},Hn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},js={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},xf={9728:ln,9729:en,9984:Ac,9985:dr,9986:Cs,9987:ti},vf={33071:Ln,33648:xr,10497:ss},Vc={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},ph={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Gi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Cx={CUBICSPLINE:void 0,LINEAR:zs,STEP:Hs},Gc={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Px(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new Mt({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:ii})),i.DefaultMaterial}function hs(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function bi(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Ix(i,e,t){let n=!1,s=!1,r=!1;for(let c=0,h=e.length;c<h;c++){let u=e[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);let o=[],a=[],l=[];for(let c=0,h=e.length;c<h;c++){let u=e[c];if(n){let f=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):i.attributes.position;o.push(f)}if(s){let f=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):i.attributes.normal;a.push(f)}if(r){let f=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):i.attributes.color;l.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){let h=c[0],u=c[1],f=c[2];return n&&(i.morphAttributes.position=h),s&&(i.morphAttributes.normal=u),r&&(i.morphAttributes.color=f),i.morphTargetsRelative=!0,i})}function Dx(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Lx(i){let e,t=i.extensions&&i.extensions[ct.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Wc(t.attributes):e=i.indices+":"+Wc(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+Wc(i.targets[n]);return e}function Wc(i){let e="",t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function mh(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Nx(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}var Ux=new He,gh=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Ax,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"){let a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;let l=a.match(/Version\/(\d+)/);s=n&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&o<98?this.textureLoader=new Yo(this.options.manager):this.textureLoader=new jo(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Ar(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:n,userData:{}};return hs(r,a,s),bi(a,s),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(let l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let o=t[s].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let s=n.clone(),r=(o,a)=>{let l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(let[c,h]of o.children.entries())r(h,a.children[c])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let s=e(t[n]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[ct.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,o){n.load(zi.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){let t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let o=Vc[s.type],a=js[s.componentType],l=s.normalized===!0,c=new a(s.count*o);return Promise.resolve(new Xe(c,o,l))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],l=Vc[s.type],c=js[s.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,f=s.byteOffset||0,d=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0,_,m;if(d&&d!==u){let p=Math.floor(f/d),v="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+p+":"+s.count,y=t.cache.get(v);y||(_=new c(a,p*d,s.count*d/h),y=new br(_,d/h),t.cache.add(v,y)),m=new Sr(y,l,f%d/h,g)}else a===null?_=new c(s.count*l):_=new c(a,f,s.count*l),m=new Xe(_,l,g);if(s.sparse!==void 0){let p=Vc.SCALAR,v=js[s.sparse.indices.componentType],y=s.sparse.indices.byteOffset||0,M=s.sparse.values.byteOffset||0,P=new v(o[1],y,s.sparse.count*p),w=new c(o[2],M,s.sparse.count*l);a!==null&&(m=new Xe(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let T=0,I=P.length;T<I;T++){let U=P[T];if(m.setX(U,w[T*l]),l>=2&&m.setY(U,w[T*l+1]),l>=3&&m.setZ(U,w[T*l+2]),l>=4&&m.setW(U,w[T*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r],a=this.textureLoader;if(o.uri){let l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){let s=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);let f=(r.samplers||{})[o.sampler]||{};return h.magFilter=xf[f.magFilter]||en,h.minFilter=xf[f.minFilter]||ti,h.wrapS=vf[f.wrapS]||ss,h.wrapT=vf[f.wrapT]||ss,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());let o=s.images[e],a=self.URL||self.webkitURL,l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(u){c=!0;let f=new Blob([u],{type:o.mimeType});return l=a.createObjectURL(f),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(l).then(function(u){return new Promise(function(f,d){let g=f;t.isImageBitmapLoader===!0&&(g=function(_){let m=new Zt(_);m.needsUpdate=!0,f(m)}),t.load(zi.resolveURL(u,r.path),g,void 0,d)})}).then(function(u){return c===!0&&a.revokeObjectURL(l),bi(u,o),u.userData.mimeType=o.mimeType||Nx(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,s){let r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[ct.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[ct.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let l=r.associations.get(o);o=r.extensions[ct.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,n=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new Fi,An.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){let a="LineBasicMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new wr,An.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(s||r||o){let a="ClonedMaterial:"+n.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Mt}loadMaterial(e){let t=this,n=this.json,s=this.extensions,r=n.materials[e],o,a={},l=r.extensions||{},c=[];if(l[ct.KHR_MATERIALS_UNLIT]){let u=s[ct.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),c.push(u.extendParams(a,r,t))}else{let u=r.pbrMetallicRoughness||{};if(a.color=new z(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){let f=u.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],$t),a.opacity=f[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",u.baseColorTexture,Ht)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=nt);let h=r.alphaMode||Gc.OPAQUE;if(h===Gc.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===Gc.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==wt&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new we(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==wt&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==wt){let u=r.emissiveFactor;a.emissive=new z().setRGB(u[0],u[1],u[2],$t)}return r.emissiveTexture!==void 0&&o!==wt&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,Ht)),Promise.all(c).then(function(){let u=new o(a);return r.name&&(u.name=r.name),bi(u,r),t.associations.set(u,{materials:e}),r.extensions&&hs(s,u,r),u})}createUniqueName(e){let t=St.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,s=this.primitiveCache;function r(a){return n[ct.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return yf(l,a,t)})}let o=[];for(let a=0,l=e.length;a<l;a++){let c=e[a],h=Lx(c),u=s[h];if(u)o.push(u.promise);else{let f;c.extensions&&c.extensions[ct.KHR_DRACO_MESH_COMPRESSION]?f=r(c):f=yf(new Ye,c,t),s[h]={primitive:c,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){let t=this,n=this.json,s=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){let h=o[l].material===void 0?Px(this.cache):this.getDependency("material",o[l].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){let c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let d=0,g=h.length;d<g;d++){let _=h[d],m=o[d],p,v=c[d];if(m.mode===Hn.TRIANGLES||m.mode===Hn.TRIANGLE_STRIP||m.mode===Hn.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new Do(_,v):new Ne(_,v),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===Hn.TRIANGLE_STRIP?p.geometry=kc(p.geometry,Qo):m.mode===Hn.TRIANGLE_FAN&&(p.geometry=kc(p.geometry,Ir));else if(m.mode===Hn.LINES)p=new Oo(_,v);else if(m.mode===Hn.LINE_STRIP)p=new Xs(_,v);else if(m.mode===Hn.LINE_LOOP)p=new Bo(_,v);else if(m.mode===Hn.POINTS)p=new Rn(_,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&Dx(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),bi(p,r),m.extensions&&hs(s,p,m),t.assignFinalMaterial(p),u.push(p)}for(let d=0,g=u.length;d<g;d++)t.associations.set(u[d],{meshes:e,primitives:d});if(u.length===1)return r.extensions&&hs(s,u[0],r),u[0];let f=new it;r.extensions&&hs(s,f,r),t.associations.set(f,{meshes:e});for(let d=0,g=u.length;d<g;d++)f.add(u[d]);return f})}loadCamera(e){let t,n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Ct(ki.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new Un(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),bi(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let r=s.pop(),o=s,a=[],l=[];for(let c=0,h=o.length;c<h;c++){let u=o[c];if(u){a.push(u);let f=new He;r!==null&&f.fromArray(r.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new No(a,l)})}loadAnimation(e){let t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],l=[],c=[],h=[];for(let u=0,f=s.channels.length;u<f;u++){let d=s.channels[u],g=s.samplers[d.sampler],_=d.target,m=_.node,p=s.parameters!==void 0?s.parameters[g.input]:g.input,v=s.parameters!==void 0?s.parameters[g.output]:g.output;_.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",v)),c.push(g),h.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){let f=u[0],d=u[1],g=u[2],_=u[3],m=u[4],p=[];for(let v=0,y=f.length;v<y;v++){let M=f[v],P=d[v],w=g[v],T=_[v],I=m[v];if(M===void 0)continue;M.updateMatrix&&M.updateMatrix();let U=n._createAnimationTracks(M,P,w,T,I);if(U)for(let x=0;x<U.length;x++)p.push(U[x])}return new Xo(r,void 0,p)})}createNodeMesh(e){let t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){let o=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=s.weights.length;l<c;l++)a.morphTargetInfluences[l]=s.weights[l]}),o})}loadNode(e){let t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=s.children||[];for(let c=0,h=a.length;c<h;c++)o.push(n.getDependency("node",a[c]));let l=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){let h=c[0],u=c[1],f=c[2];f!==null&&h.traverse(function(d){d.isSkinnedMesh&&d.bind(f,Ux)});for(let d=0,g=u.length;d<g;d++)h.add(u[d]);return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let h;if(r.isBone===!0?h=new Tr:c.length>1?h=new it:c.length===1?h=c[0]:h=new Pt,h!==c[0])for(let u=0,f=c.length;u<f;u++)h.add(c[u]);if(r.name&&(h.userData.name=r.name,h.name=o),bi(h,r),r.extensions&&hs(n,h,r),r.matrix!==void 0){let u=new He;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return s.associations.has(h)||s.associations.set(h,{}),s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],s=this,r=new it;n.name&&(r.name=s.createUniqueName(n.name)),bi(r,n),n.extensions&&hs(t,r,n);let o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(s.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let h=0,u=l.length;h<u;h++)r.add(l[h]);let c=h=>{let u=new Map;for(let[f,d]of s.associations)(f instanceof An||f instanceof Zt)&&u.set(f,d);return h.traverse(f=>{let d=s.associations.get(f);d!=null&&u.set(f,d)}),u};return s.associations=c(r),r})}_createAnimationTracks(e,t,n,s,r){let o=[],a=e.name?e.name:e.uuid,l=[];Gi[r.path]===Gi.weights?e.traverse(function(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}):l.push(a);let c;switch(Gi[r.path]){case Gi.weights:c=vi;break;case Gi.rotation:c=yi;break;case Gi.position:case Gi.scale:c=Mi;break;default:switch(n.itemSize){case 1:c=vi;break;case 2:case 3:default:c=Mi;break}break}let h=s.interpolation!==void 0?Cx[s.interpolation]:zs,u=this._getArrayFromAccessor(n);for(let f=0,d=l.length;f<d;f++){let g=new c(l[f]+"."+Gi[r.path],t.array,u,h);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=mh(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let s=this instanceof yi?dh:ia;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function Fx(i,e,t){let n=e.attributes,s=new gn;if(n.POSITION!==void 0){let a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(s.set(new A(l[0],l[1],l[2]),new A(c[0],c[1],c[2])),a.normalized){let h=mh(js[a.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let a=new A,l=new A;for(let c=0,h=r.length;c<h;c++){let u=r[c];if(u.POSITION!==void 0){let f=t.json.accessors[u.POSITION],d=f.min,g=f.max;if(d!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(d[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(d[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(d[2]),Math.abs(g[2]))),f.normalized){let _=mh(js[f.componentType]);l.multiplyScalar(_)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}i.boundingBox=s;let o=new wn;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=o}function yf(i,e,t){let n=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){i.setAttribute(a,l)})}for(let o in n){let a=ph[o]||o.toLowerCase();a in i.attributes||s.push(r(n[o],a))}if(e.indices!==void 0&&!i.index){let o=t.getDependency("accessor",e.indices).then(function(a){i.setIndex(a)});s.push(o)}return ut.workingColorSpace!==$t&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ut.workingColorSpace}" not supported.`),bi(i,e),Fx(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?Ix(i,e.targets,t):i})}var Ox=new He().set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1);function sa({scene:i,planeY:e=0,scale:t=.5}){let n=new tn(2,2,{type:Cn,minFilter:en,magFilter:en,depthBuffer:!0,stencilBuffer:!1});n.texture.generateMipmaps=!1,n.texture.wrapS=Ln,n.texture.wrapT=Ln;let s=new Un(-1,1,1,-1,-400,700),r=new Ct(60,1,.01,700),o=new He,a=new A,l=[],c=1e5,h=new un(new A(0,1,0),c);function u(d,g){n.setSize(Math.max(2,Math.floor(d*t)),Math.max(2,Math.floor(g*t)))}function f(d,g){let _=g.isPerspectiveCamera?r:s;g.getWorldDirection(a),_.position.set(g.position.x,2*e-g.position.y,g.position.z),_.up.set(0,-1,0),_.lookAt(_.position.x+a.x,_.position.y-a.y,_.position.z+a.z),g.isOrthographicCamera?(_.left=g.left,_.right=g.right,_.top=g.top,_.bottom=g.bottom,_.zoom=g.zoom):(_.fov=g.fov,_.aspect=g.aspect),_.near=g.near,_.far=g.far,_.updateProjectionMatrix(),_.updateMatrixWorld(!0),o.copy(Ox).multiply(_.projectionMatrix).multiply(_.matrixWorldInverse);let m=l.map(y=>[y,y.visible]);for(let y of l)y.visible=!1;let p=d.getRenderTarget(),v=d.shadowMap.autoUpdate;h.constant=-e,d.shadowMap.autoUpdate=!1,d.setRenderTarget(n),d.clear(),d.render(i,_),d.setRenderTarget(p),d.shadowMap.autoUpdate=v,h.constant=c;for(let[y,M]of m)y.visible=M}return{target:n,textureMatrix:o,resize:u,render:f,install(d){d.clippingPlanes=[h]},exclude(d){l.push(d)}}}var Bx=i=>i<=.04045?i/12.92:((i+.055)/1.055)**2.4,Ze=i=>{let e=parseInt(i.slice(1),16);return[(e>>16)/255,(e>>8&255)/255,(e&255)/255].map(Bx)},pt=(i,e,t)=>i.map((n,s)=>n+(e[s]-n)*t),$s=(i,e,t)=>Math.max(e,Math.min(t,i)),_n=(i,e,t)=>{let n=$s((t-i)/(e-i),0,1);return n*n*(3-2*n)},_h=(i,e)=>{if(e<=i[0][0])return i[0][1];for(let t=1;t<i.length;t++)if(e<=i[t][0]){let n=(e-i[t-1][0])/(i[t][0]-i[t-1][0]),s=n*n*(3-2*n);return i[t-1][1]*(1-s)+i[t][1]*s}return i[i.length-1][1]},xh=i=>i-Math.floor(i),Hx=`
#include <common>
#include <clipping_planes_pars_vertex>
uniform float uSwim;
uniform float uPhase;
uniform float uFin;
attribute float aAlong;
attribute vec3 color;
varying vec3 vColor;
varying vec3 vNormalW;
varying vec3 vWorld;
void main(){
  vColor = color;
  #include <begin_vertex>
  float wave = sin(aAlong * 6.2 - uSwim * 5.4 + uPhase);
  float tail = smoothstep(0.08, -0.95, aAlong);
  transformed.z += wave * (0.008 + tail * 0.11);
  transformed.y += sin(aAlong * 3.6 - uSwim * 2.8 + uPhase) * tail * 0.02;
  float flutter = sin(uSwim * 6.5 + aAlong * 10.0 + position.y * 5.0);
  transformed += normal * uFin * flutter * 0.012;
  #include <project_vertex>
  #include <clipping_planes_vertex>
  vec4 world = modelMatrix * vec4(transformed, 1.0);
  vWorld = world.xyz;
  vNormalW = normalize(mat3(modelMatrix) * normal);
}`,zx=`
#include <common>
#include <clipping_planes_pars_fragment>
uniform vec3 uColor;
uniform vec3 uSun;
uniform float uFin;
uniform float uAlpha;
uniform float uSwim;
varying vec3 vColor;
varying vec3 vNormalW;
varying vec3 vWorld;
void main(){
  #include <clipping_planes_fragment>
  vec3 N = normalize(vNormalW);
  vec3 V = normalize(cameraPosition - vWorld);
  if (dot(N, V) < 0.0) N = -N;
  float ndl = dot(N, normalize(uSun));
  float wrap = clamp(ndl * 0.5 + 0.55, 0.0, 1.0);
  wrap = smoothstep(0.02, 0.98, wrap);
  vec3 albedo = uColor * vColor;
  float luma = dot(albedo, vec3(0.299, 0.587, 0.114));
  albedo = mix(vec3(luma), albedo, 1.28);
  vec3 shadowCol = albedo * vec3(0.46, 0.40, 0.36);
  vec3 lit = mix(shadowCol, albedo, wrap);
  lit += albedo * pow(max(ndl, 0.0), 1.2) * 0.18;
  float fres = pow(1.0 - max(dot(N, V), 0.0), 3.2);
  lit += vec3(0.95, 0.90, 0.78) * fres * 0.07;
  float spec = pow(max(dot(reflect(-normalize(uSun), N), V), 0.0), 64.0);
  lit += vec3(1.0, 0.96, 0.88) * spec * 0.22;
  float below = 1.0 - smoothstep(-0.04, 0.06, vWorld.y);
  float cau = sin(vWorld.x * 8.0 + uSwim) * sin(vWorld.z * 6.5 - uSwim * 0.7);
  lit *= mix(1.0, 0.9 + cau * 0.08, below);
  gl_FragColor = vec4(lit, 1.0);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}`;function us({name:i,color:e="#ffffff",alpha:t=1,fin:n=!1,authored:s=!1}){let r=new at({uniforms:{uColor:{value:new z(e)},uSun:{value:new A(-.32,.88,.28).normalize()},uSwim:{value:0},uPhase:{value:0},uFin:{value:n?1:0},uAlpha:{value:t}},vertexShader:Hx,fragmentShader:zx,transparent:!1,depthWrite:!0,side:nt,fog:!1});return r.name=i,r.userData.authored=s,r}function $n(i,e,t){let n=i.x0+(i.x1-i.x0)*e,s=_h(i.h,e),r=_h(i.w,e),o=_h(i.lift,e),a=Math.cos(t),l=Math.sin(t),c=a>0?i.crown||1:i.belly||1.08,h=o+a*s*c,u=l*r*(i.flat?1-.35*Math.max(a,0):1);return u+=(i.sway||0)*Math.sin(e*Math.PI*(i.swayFreq||1)),e>.9&&a<.15&&(h-=_n(.9,1,e)*_n(.15,-.55,a)*s*.42),{x:n,y:h,z:u,along:n,h:s,w:r}}function oa(i,e,t,n,s,r){let o=Math.cos(t),a=_n(.2,-.8,o),l=.93+.07*Math.cos(e*36+t*2),c=Math.exp(-((e-.76)**2)/.0012)*_n(-.2,.7,o);if(i==="tone"){let u=.78+a*.28-_n(-.05,.85,o)*.2;u*=1-c*.22;let f=Math.floor(e*18),d=Math.abs(xh(t*1.4+f%2*.5)-.5);if(u*=.94+.08*_n(.05,.22,d),r){let g=Math.exp(-((xh(e*5.5)-.5)**2)/.008);u*=1-g*.32}return[u,u*.985,u*.95]}let h=pt(n,s,a);if(i==="neon"){let u=Math.max(Math.exp(-((o-.42)**2)/.028),Math.exp(-((o-.02)**2)/.01)),f=_n(.05,-.55,o);h=pt(Ze("#d7e4ea"),Ze("#e23d45"),f),h=pt(h,Ze("#14d0ea"),$s(u,0,1)),h=pt(h,Ze("#12343a"),c*.35)}else if(i==="zebra"){let u=Math.sin(o*9.5)>.05;h=Ze(u?"#e7c56a":"#3e6d92"),h=pt(h,Ze("#f4efe4"),a*.35)}else if(i==="angel"){let u=Math.exp(-((e-.32)**2)/.0032)+Math.exp(-((e-.52)**2)/.004)+Math.exp(-((e-.74)**2)/.003);h=pt(Ze("#e4ebe2"),Ze("#f7f4ec"),a*.45),h=pt(h,Ze("#243240"),$s(u,0,1))}else if(i==="betta")h=pt(Ze("#2f4ea8"),Ze("#6d87d6"),a),h=pt(h,Ze("#1a2748"),c*.4);else if(i==="guppy")h=pt(Ze("#8fd0dc"),Ze("#f2f6f4"),a*.8),h=pt(h,Ze("#f0a06a"),Math.exp(-((e-.55)**2)/.02)*.35);else if(i==="goldfish")h=pt(Ze("#e07a28"),Ze("#fff0c8"),a*.45),h=pt(h,Ze("#a84820"),_n(.15,.9,o)*.28),h=pt(h,Ze("#8a3a22"),c*.45);else if(i==="koi"){let u=Math.exp(-((e-.38)**2)/.02-(t-1.1)**2/.35)+Math.exp(-((e-.62)**2)/.012-(t-2.2)**2/.4)+Math.exp(-((e-.5)**2)/.03-(o-.65)**2/.08);h=pt(Ze("#f4f1ea"),Ze("#e2582a"),$s(u,0,1)),h=pt(h,Ze("#c9b8a4"),c*.3)}else if(i==="carp"){let u=_n(.42,.02,e);h=pt(Ze("#e0b15c"),Ze("#a84b32"),u),h=pt(h,Ze("#f8ecd0"),a*.6),h=pt(h,Ze("#8a5a32"),c*.35)}else if(i==="mottle"){let u=Math.sin(e*28+t*3)*Math.sin(t*9+e*8);h=pt(n,r||s,_n(.2,.8,u*.5+.5)*.65),h=pt(h,s,a*.4)}else if(i==="eel"){h=pt(Ze("#3f636c"),Ze("#d5ebe0"),a);let u=.5+.5*Math.sin(e*42);h=h.map(f=>f*(.92+u*.08))}else h=pt(n,s,a*.75),h=pt(h,r||n,c*.25);return h.map(u=>u*l)}function aa(i,e,t,n,s){let r=Math.abs(xh(e*9)-.5),o=1-_n(.12,.28,r),a=_n(.45,1,t);if(i==="tone"){let h=(.78+a*.26)*(1-o*.22);return[h,h*.99,h*.96]}let l=pt(n,s,a);if(i==="guppy"){let h=Math.exp(-((e-.32)**2+(t-.62)**2)/.02)+Math.exp(-((e-.68)**2+(t-.48)**2)/.018)+Math.exp(-((e-.5)**2+(t-.78)**2)/.03);l=pt(Ze("#f4fbff"),Ze("#f08a3c"),$s(h,0,1)),l=pt(l,Ze("#2aa8b8"),_n(.2,.85,t)*(1-$s(h,0,1))*.85)}else i==="betta"?(l=pt(Ze("#3a62c4"),Ze("#e25b86"),_n(.15,.95,t)),l=pt(l,Ze("#8fd0ff"),Math.sin(e*18+t*8)>.65?.45:0)):i==="goldfish"?l=pt(Ze("#f0a05a"),Ze("#fff4d2"),a*.65):i==="neon"&&(l=pt(Ze("#9fe7ef"),Ze("#f2f7f8"),a));let c=l.map(h=>h*.72);return pt(l,c,o*a*.45)}function vh(i,e,t,n){let s=new Ye;return s.setAttribute("position",new Le(i,3)),s.setAttribute("color",new Le(e,3)),s.setAttribute("aAlong",new Le(t,1)),s.setIndex(n),s.computeVertexNormals(),s}function kx(i,e,t,n){let s=i.n||34,r=i.m||18,o=[],a=[],l=[],c=[];for(let p=0;p<=s;p++){let v=p/s;for(let y=0;y<r;y++){let M=y/r*Math.PI*2,P=$n(i,v,M),w=oa(e,v,M,t[0],t[1],t[2]);o.push(P.x,P.y,P.z),a.push(w[0],w[1],w[2]),l.push(P.along)}}for(let p=0;p<s;p++)for(let v=0;v<r;v++){let y=p*r+v,M=p*r+(v+1)%r,P=(p+1)*r+v,w=(p+1)*r+(v+1)%r;c.push(y,w,M,y,P,w)}let h=$n(i,1,0),u=$n(i,0,0),f=oa(e,1,0,t[0],t[1],t[2]),d=oa(e,0,0,t[0],t[1],t[2]),g=(s+1)*r,_=g+1;o.push(h.x+.012,h.y,h.z,u.x-.01,u.y,u.z),a.push(...f,...d),l.push(h.along,u.along);for(let p=0;p<r;p++)c.push(g,s*r+p,s*r+(p+1)%r),c.push(_,(p+1)%r,p);let m=new Ne(vh(o,a,l,c),us({name:"FishPearl_studio",color:"#ffffff",authored:n}));return m.name="FishBody",m.castShadow=!1,m.receiveShadow=!0,m}function la({U:i,V:e,base:t,tip:n,side:s,color:r,along:o,material:a,name:l,camber:c=0}){let h=[],u=[],f=[],d=[];for(let m=0;m<i;m++){let p=i===1?.5:m/(i-1),v=t(p),y=n(p),M=s?s(p):new A;for(let P=0;P<=e;P++){let w=P/e,T=v.clone().lerp(y,w);T.addScaledVector(M,Math.sin(Math.PI*w)*c);let I=r(p,w);h.push(T.x,T.y,T.z),u.push(I[0],I[1],I[2]),f.push(o(p,w,T))}}let g=e+1;for(let m=0;m<i-1;m++)for(let p=0;p<e;p++){let v=m*g+p;d.push(v,v+1,v+g,v+1,v+g+1,v+g)}let _=new Ne(vh(h,u,f,d),a);return _.name=l,_.castShadow=!1,_.receiveShadow=!0,_}function Vx(i,e,t,n,s,r,o){let[a,l,c,h]=e.dorsal,u=la({U:18,V:6,name:"DorsalFin",material:r,camber:.01,base:f=>{let d=$n(e,a+(l-a)*f,0);return new A(d.x,d.y*.98,d.z)},tip:f=>{let d=a+(l-a)*f,g=$n(e,d,0),_=c*Math.sin(Math.PI*Math.pow(f,e.dorsalPow||.8));return new A(g.x-h*(1-f),g.y+_,g.z)},color:(f,d)=>aa(t,f,d,n,s),along:(f,d,g)=>g.x});i.add(u)}function Gx(i,e,t,n,s,r){if(!e.anal)return;let[o,a,l]=e.anal;i.add(la({U:14,V:5,name:"AnalFin",material:r,camber:.008,base:c=>{let h=$n(e,o+(a-o)*c,Math.PI);return new A(h.x,h.y,0)},tip:c=>{let h=o+(a-o)*c,u=$n(e,h,Math.PI);return new A(u.x-.03*(1-c),u.y-l*Math.sin(Math.PI*c),0)},color:(c,h)=>aa(t,c,h,n,s),along:(c,h,u)=>u.x}))}function Wx(i,e,t,n,s,r){let o=e.pecT||.7;for(let a of[-1,1]){let l=$n(e,o,a>0?.9:Math.PI*2-.9),c=new it;c.name="PectoralFin",c.userData.side=a,c.position.set(l.x,l.y,l.z);let h=e.pecLen,u=e.pecSpan;c.add(la({U:8,V:5,name:"PectoralSheet",material:r,camber:.012*a,base:f=>new A(0,(f-.5)*u*.25,0),tip:f=>new A(-h*(.65+.35*Math.sin(f*Math.PI)),(f-.5)*u-h*.15,a*h*.08),color:(f,d)=>aa(t,f,d,n,s),along:()=>l.x})),i.add(c)}}function Xx(i,e,t,n,s,r){let o=$n(e,.045,0),a=new it;a.name="TailFin",a.position.set(o.x,o.y,0);let l=e.lobes||1;for(let c=0;c<l;c++){let h=l===1?0:c===0?-1:1,u=la({U:16,V:7,name:"TailMembrane",material:r,camber:.02+Math.abs(h)*.02,base:f=>new A(0,(f-.5)*e.tailRoot,h*.012),tip:f=>{let d=(f-.5)*e.tailSpread,g=1-Math.abs(f-.5)*2,_=e.tailLen*(e.fork?.5+.5*Math.abs(f-.5)*2:.72+.28*Math.sin(Math.max(0,g)*Math.PI));return new A(-Math.cos(d)*_,Math.sin(d)*_+(f-.5)*e.tailRoot*.15,h*(.02+.04*Math.sin(Math.PI*f)))},side:()=>new A(0,0,1),color:(f,d)=>aa(t,f,d,n,s),along:(f,d,g)=>o.x+g.x});u.rotation.y=h*(e.tailYaw||0),a.add(u)}i.add(a)}function ra(i,e,t){let n=i.attributes.position.count,s=new Float32Array(n*3),r=new Float32Array(n);for(let o=0;o<n;o++)s[o*3]=e[0],s[o*3+1]=e[1],s[o*3+2]=e[2],r[o]=t;return i.setAttribute("color",new Xe(s,3)),i.setAttribute("aAlong",new Xe(r,1)),i}function Yx(i,e,t){let n=e.eye;for(let s of[-1,1]){let r=$n(e,e.eyeT||.82,s>0?.72:Math.PI*2-.72),o=new it;o.position.set(r.x+.008,r.y+n*.15,r.z+s*n*.15);let a=new Ne(ra(new lt(n,14,10),Ze("#f3f0e8"),r.x),us({name:"Sclera",authored:t})),l=new Ne(ra(new lt(n*.62,12,8),Ze(e.iris||"#e0b15a"),r.x),us({name:"Golden iris",authored:t}));l.position.z=s*n*.42;let c=new Ne(ra(new lt(n*.3,10,8),Ze("#16130f"),r.x),us({name:"Obsidian eyes",authored:t}));c.position.z=s*n*.72;let h=new Ne(ra(new lt(n*.14,8,6),Ze("#fffaf2"),r.x),us({name:"Glint",authored:t}));h.position.set(n*.12,n*.16,s*n*.9),o.add(a,l,c,h),i.add(o)}}function qx(i,e,t,n,s){if(!e.barbels)return;let r=us({name:"FishPearl_studio",authored:s}),o=6;for(let a of[-1,1])for(let l of[0,1]){let c=[],h=[],u=[],f=[],d=$n(e,.94,Math.PI*.92);for(let _=0;_<=o;_++){let m=_/o,p=d.x-m*e.barbels,v=d.y-m*m*e.barbels*(.45+l*.35),y=a*(d.w*.25+m*e.barbels*.35),M=.006*(1-m*.8);for(let P=0;P<5;P++){let w=P/5*Math.PI*2;c.push(p,v+Math.cos(w)*M,y+Math.sin(w)*M);let T=oa(t,.95,1,n[0],n[1],n[2]);h.push(T[0],T[1],T[2]),u.push(p)}}for(let _=0;_<o;_++)for(let m=0;m<5;m++){let p=_*5+m,v=_*5+(m+1)%5;f.push(p,v,v+5,p,v+5,p+5)}let g=new Ne(vh(c,h,u,f),r);g.name="Barbel",i.add(g)}}var Kx={fantail:{x0:-.42,x1:.5,crown:.92,belly:1.16,h:[[0,.03],[.12,.12],[.32,.22],[.55,.24],[.75,.18],[.9,.11],[1,.045]],w:[[0,.02],[.2,.11],[.48,.16],[.72,.13],[.9,.08],[1,.03]],lift:[[0,0],[.5,.01],[1,.02]],dorsal:[.28,.72,.16,.06],anal:[.22,.62,.1],pecT:.68,pecLen:.14,pecSpan:.1,eye:.034,eyeT:.8,lobes:2,tailRoot:.1,tailSpread:1.15,tailLen:.34,tailYaw:.42,fork:!1},guppy:{x0:-.16,x1:.3,crown:1,belly:1.05,h:[[0,.02],[.3,.055],[.6,.06],[.85,.04],[1,.02]],w:[[0,.012],[.4,.032],[.75,.028],[1,.012]],lift:[[0,0],[1,.008]],dorsal:[.35,.7,.045,.02],anal:[.4,.72,.04],pecT:.72,pecLen:.06,pecSpan:.04,eye:.02,eyeT:.8,lobes:1,tailRoot:.05,tailSpread:1.35,tailLen:.32,fork:!1},tetra:{x0:-.46,x1:.44,crown:1,belly:1.02,h:[[0,.018],[.2,.05],[.5,.07],[.78,.05],[1,.02]],w:[[0,.012],[.35,.034],[.6,.032],[1,.012]],lift:[[0,0],[1,0]],dorsal:[.42,.68,.045,.03],anal:[.48,.7,.03],pecT:.7,pecLen:.07,pecSpan:.045,eye:.018,eyeT:.84,lobes:1,tailRoot:.05,tailSpread:.7,tailLen:.12,fork:!0},betta:{x0:-.28,x1:.4,crown:1.05,belly:1.12,h:[[0,.035],[.25,.09],[.5,.11],[.78,.08],[1,.03]],w:[[0,.02],[.4,.055],[.75,.045],[1,.02]],lift:[[0,.01],[1,.015]],dorsal:[.32,.78,.2,.12],dorsalPow:.6,anal:[.28,.75,.16],pecT:.7,pecLen:.1,pecSpan:.07,eye:.026,eyeT:.8,lobes:1,tailRoot:.12,tailSpread:1.55,tailLen:.42,fork:!1},angel:{x0:-.22,x1:.34,crown:1.15,belly:1.2,flat:!0,h:[[0,.05],[.18,.22],[.42,.34],[.62,.3],[.84,.16],[1,.05]],w:[[0,.012],[.4,.028],[.8,.02],[1,.01]],lift:[[0,.02],[.5,.04],[1,.02]],dorsal:[.18,.72,.28,.04],anal:[.2,.7,.24],pecT:.62,pecLen:.12,pecSpan:.1,eye:.03,eyeT:.72,lobes:1,tailRoot:.08,tailSpread:.85,tailLen:.16,fork:!1},carp:{x0:-.5,x1:.5,crown:1,belly:1.1,h:[[0,.03],[.15,.08],[.4,.13],[.65,.12],[.88,.07],[1,.03]],w:[[0,.02],[.3,.07],[.55,.085],[.85,.05],[1,.02]],lift:[[0,0],[1,.01]],dorsal:[.32,.62,.09,.04],anal:[.28,.5,.06],pecT:.7,pecLen:.12,pecSpan:.08,eye:.026,eyeT:.82,lobes:1,tailRoot:.08,tailSpread:.95,tailLen:.2,fork:!0,barbels:.07},crucian:{x0:-.4,x1:.46,crown:.96,belly:1.18,h:[[0,.035],[.2,.12],[.48,.18],[.72,.14],[1,.04]],w:[[0,.02],[.4,.1],[.75,.07],[1,.025]],lift:[[0,0],[1,.01]],dorsal:[.34,.66,.1,.03],anal:[.3,.55,.07],pecT:.68,pecLen:.11,pecSpan:.08,eye:.026,eyeT:.8,lobes:1,tailRoot:.09,tailSpread:.8,tailLen:.16,fork:!0},mandarin:{x0:-.42,x1:.48,crown:1.08,belly:1.12,h:[[0,.03],[.18,.1],[.4,.16],[.62,.15],[.86,.1],[1,.04]],w:[[0,.02],[.35,.09],[.7,.08],[1,.03]],lift:[[0,0],[1,.02]],dorsal:[.3,.78,.16,.02],anal:[.32,.66,.09],pecT:.66,pecLen:.1,pecSpan:.07,eye:.024,eyeT:.78,lobes:1,tailRoot:.08,tailSpread:.7,tailLen:.14,fork:!1},perch:{x0:-.48,x1:.46,crown:1.02,belly:1.06,h:[[0,.02],[.2,.055],[.45,.08],[.75,.06],[1,.025]],w:[[0,.014],[.4,.04],[.75,.032],[1,.014]],lift:[[0,0],[1,0]],dorsal:[.32,.74,.07,.02],anal:[.4,.62,.045],pecT:.7,pecLen:.08,pecSpan:.05,eye:.02,eyeT:.82,lobes:1,tailRoot:.055,tailSpread:.65,tailLen:.13,fork:!0},cat:{x0:-.62,x1:.46,crown:.8,belly:1.05,flat:!0,h:[[0,.02],[.2,.05],[.55,.07],[.82,.06],[1,.035]],w:[[0,.016],[.25,.05],[.7,.09],[.9,.1],[1,.04]],lift:[[0,-.005],[1,0]],dorsal:[.4,.58,.05,.02],anal:[.15,.45,.035],pecT:.72,pecLen:.09,pecSpan:.06,eye:.018,eyeT:.86,lobes:1,tailRoot:.06,tailSpread:.45,tailLen:.14,fork:!1,barbels:.1},eel:{x0:-.78,x1:.42,crown:1,belly:1.02,sway:.1,swayFreq:1.4,n:42,h:[[0,.012],[.15,.028],[.4,.04],[.75,.038],[.92,.028],[1,.016]],w:[[0,.01],[.4,.028],[.8,.026],[1,.014]],lift:[[0,0],[1,.004]],dorsal:[.08,.78,.028,.01],anal:[.08,.72,.02],pecT:.78,pecLen:.04,pecSpan:.025,eye:.014,eyeT:.9,lobes:1,tailRoot:.03,tailSpread:.4,tailLen:.08,fork:!1}},Ef={goldfish:{shape:"fantail",style:"goldfish",fin:"goldfish",authored:!0,A:"#e07a28",B:"#fff0c8",C:"#a84820",fA:"#f0a05a",fB:"#fff4d2",iris:"#1a1a1a"},guppy:{shape:"guppy",style:"guppy",fin:"guppy",authored:!0,A:"#8fd0dc",B:"#f7fbff",C:"#f0a06a",fA:"#f4fbff",fB:"#f08a3c",iris:"#1c1c1c"},neon:{shape:"tetra",style:"neon",fin:"neon",authored:!0,A:"#d7e4ea",B:"#e23d45",C:"#1ec8e0",fA:"#b7e7ee",fB:"#f4f8f8",iris:"#102028"},zebra:{shape:"tetra",style:"zebra",fin:"tone",authored:!0,A:"#3e6d92",B:"#e7c56a",C:"#f4efe4",fA:"#d9e6ef",fB:"#f3e2a4",iris:"#1b1b1b"},betta:{shape:"betta",style:"betta",fin:"betta",authored:!0,A:"#2f4ea8",B:"#8ea4e0",C:"#1a2748",fA:"#3a62c4",fB:"#e25b86",iris:"#111111"},angelfish:{shape:"angel",style:"angel",fin:"tone",authored:!0,A:"#e7ece3",B:"#2c3a46",C:"#f6f3ea",fA:"#e7ece3",fB:"#9aa4a8",iris:"#f0c14a"},koi:{shape:"carp",style:"koi",fin:"tone",authored:!0,A:"#f4f1ea",B:"#e2582a",C:"#c9b8a4",fA:"#f6efe4",fB:"#e7b2a0"},round:{shape:"crucian",style:"tone",fin:"tone",authored:!1,A:"#c5d0c4",B:"#f4f1e6",C:null,fA:"#d5ddd2",fB:"#f7f4ea"},slim:{shape:"perch",style:"tone",fin:"tone",authored:!1,A:"#8eaea4",B:"#e7efe8",C:"#000000",fA:"#c5d5cc",fB:"#eef3ea"},long:{shape:"cat",style:"tone",fin:"tone",authored:!1,A:"#8aa0aa",B:"#e4eeea",C:null,fA:"#c5d4d4",fB:"#eef4f2"},crucian:{shape:"crucian",style:"tone",fin:"tone",authored:!1,A:"#bcc8b6",B:"#f3f6f0",C:null,fA:"#d5e0d4",fB:"#f7faf4"},carp:{shape:"carp",style:"carp",fin:"tone",authored:!0,A:"#e0b15c",B:"#f8ecd0",C:"#a84b32",fA:"#e7c48a",fB:"#f6d2b0"},perch:{shape:"perch",style:"tone",fin:"tone",authored:!1,A:"#83a593",B:"#e7f0ea",C:"#3b6058",fA:"#b7cfc4",fB:"#e5efe8"},catfish:{shape:"cat",style:"mottle",fin:"tone",authored:!0,A:"#6d8293",B:"#c0ced0",C:"#3d4c58",fA:"#8ea0ab",fB:"#d5e3e4"},mandarin:{shape:"mandarin",style:"mottle",fin:"tone",authored:!0,A:"#a5ad6b",B:"#e7ecd4",C:"#4f644f",fA:"#c5c896",fB:"#eef2d8"},eel:{shape:"eel",style:"eel",fin:"tone",authored:!0,A:"#3f636c",B:"#d5ebe0",C:"#76949a",fA:"#6d9096",fB:"#d7ebe2"},reed:{shape:"crucian",style:"tone",fin:"tone",authored:!1,A:"#87ad91",B:"#f4efd9",C:null,fA:"#c5d7c4",fB:"#f7f3e4"},sand:{shape:"crucian",style:"mottle",fin:"tone",authored:!0,A:"#ce8765",B:"#f8ead4",C:"#a85a3c",fA:"#e2b498",fB:"#fbeede"},ivory:{shape:"perch",style:"tone",fin:"tone",authored:!1,A:"#e4dfd1",B:"#f7f6f1",C:null,fA:"#d9d4c6",fB:"#fbfaf6"},gold:{shape:"carp",style:"tone",fin:"tone",authored:!1,A:"#d5b46a",B:"#fcf2cf",C:null,fA:"#e6d7a2",fB:"#fff6df"},ink:{shape:"cat",style:"mottle",fin:"tone",authored:!0,A:"#5c6e6a",B:"#dfe6dc",C:"#2e3a36",fA:"#7d908a",fB:"#e7eee6"},dawn:{shape:"carp",style:"tone",fin:"tone",authored:!1,A:"#c08f9a",B:"#f6e7c7",C:null,fA:"#e2c2c4",fB:"#fbf0dc"}},bf={reed:{id:"reed",color:"#87ad91",accent:"#f4efd9",form:"round"},sand:{id:"sand",color:"#ce8765",accent:"#f8ead4",form:"round"},ivory:{id:"ivory",color:"#e4dfd1",accent:"#6d8779",form:"slim"},gold:{id:"gold",color:"#d5b46a",accent:"#fcf2cf",form:"koi"},ink:{id:"ink",color:"#6b7e7a",accent:"#e1e6da",form:"long"},dawn:{id:"dawn",color:"#c08f9a",accent:"#f6e7c7",form:"koi"},crucian:{id:"crucian",color:"#bcc8b6",accent:"#6c8479",form:"round"},carp:{id:"carp",color:"#cba25c",accent:"#ad6549",form:"koi"},perch:{id:"perch",color:"#83a593",accent:"#3b6058",form:"slim"},catfish:{id:"catfish",color:"#6d8293",accent:"#c0ced0",form:"long"},mandarin:{id:"mandarin",color:"#a5ad6b",accent:"#4f644f",form:"round"},eel:{id:"eel",color:"#76949a",accent:"#d3e5d6",form:"long"},goldfish:{id:"goldfish",color:"#e99b45",accent:"#fff1c5",scientific:"Carassius auratus",form:"round"},guppy:{id:"guppy",color:"#79b9cd",accent:"#f09755",scientific:"Poecilia reticulata",form:"slim"},neon:{id:"neon",color:"#42bfda",accent:"#e35356",scientific:"Paracheirodon innesi",form:"slim"},zebra:{id:"zebra",color:"#779ab5",accent:"#f2d999",scientific:"Danio rerio",form:"slim"},betta:{id:"betta",color:"#496ec9",accent:"#bf577d",scientific:"Betta splendens",form:"koi"},angelfish:{id:"angelfish",color:"#d4d9cb",accent:"#48596b",scientific:"Pterophyllum scalare",form:"round"}},Sf=Object.keys(Ef);function Tf(i){let e=Ef[i];if(!e)throw new Error("Unknown studio fish: "+i);let t=Kx[e.shape],n=[Ze(e.A),Ze(e.B),e.C?Ze(e.C):null],s=Ze(e.fA),r=Ze(e.fB),o=new it;o.name="studio-fish-"+i,o.userData.studio=!0,o.userData.species=i,o.userData.phase=0,o.userData.swimRate=1;let a=us({name:"FinPearl_studio",alpha:.9,fin:!0,authored:e.authored});return o.add(kx(t,e.style,n,e.authored)),Vx(o,t,e.fin,s,r,a),Gx(o,t,e.fin,s,r,a),Wx(o,t,e.fin,s,r,a),Xx(o,t,e.fin,s,r,a),Yx(o,t,e.authored),qx(o,t,e.style,n,e.authored),o.traverse(l=>{l.isMesh&&(l.castShadow=!1,l.receiveShadow=!0)}),o}function wf(i,e,t){if(!i?.userData?.studio)return;let n=i.userData.swimRate||1,s=i.userData.phase||0;i.traverse(r=>{let o=r.material?.userData?.swimUniforms;if(o&&(o.uSwim.value=e*n,o.uPhase.value=s,t&&o.uSun&&o.uSun.value.copy(t)),r.name==="PectoralFin"){let a=r.userData.side||1;r.rotation.y=a*(.35+Math.sin(e*n*5.2+s)*.42)}r.name==="TailFin"&&(r.rotation.y=Math.sin(e*n*4.4+s)*.32,r.rotation.z=Math.sin(e*n*2.2+s)*.05)})}function Af({scene:i,camera:e,renderer:t,controls:n,island:s,layers:r}){let o={x:0,y:0,z:-8,r:13},a=new Ws;a.background=new z("#d5e4d6"),a.fog=new Io("#d5e4d6",48,175),a.environment=i.environment,a.environmentIntensity=.72;let l=new Ct(56,innerWidth/innerHeight,.04,300);l.position.set(0,1.62,3.05);let c="overview",h="lotus",u="idle",f="clear",d=0,g=0,_=-.075,m=null,p=0,v=-100,y=-100,M=!1,P="",w=0,T=null,I=!1,U=0,x=!1,E=null,D=new A(0,.035,-7.2),O=new na,H={},J=[],q={},te=($,Be={})=>new Mt({color:$,roughness:.72,...Be}),X=new Bn("#ffe0a8",3.15);X.position.set(-14,22,10),X.castShadow=!0,X.shadow.mapSize.set(2048,2048),Object.assign(X.shadow.camera,{left:-18,right:18,top:18,bottom:-18,near:.5,far:70}),X.shadow.bias=-25e-5,X.shadow.normalBias=.035,X.target.position.set(0,.4,-6),a.add(X,X.target);let he=new Ys("#d7f0e4","#7a6848",1.5);a.add(he);let G=new Bn("#8eb8c2",.72);G.position.set(12,7,-6),a.add(G);let ie=new Bn("#ffd2a2",.55);ie.position.set(5,6,-16),a.add(ie);let Ee=new A,de={uNight:{value:0},uWeather:{value:0},uTime:{value:0}},V=new Ne(new lt(220,48,24),new at({side:Kt,depthWrite:!1,uniforms:de,vertexShader:"varying vec3 vDir;void main(){vDir=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:`varying vec3 vDir;uniform float uNight,uWeather,uTime;void main(){vec3 d=normalize(vDir);float h=clamp(d.y,0.,1.);vec3 sky=mix(vec3(.93,.84,.70),vec3(.40,.68,.70),smoothstep(0.,.62,h));vec3 sunDir=normalize(vec3(-.42,.5,-.7));float glow=pow(max(dot(d,sunDir),0.),7.);float sun=pow(max(dot(d,sunDir),0.),160.);sky+=vec3(1.,.72,.38)*glow*.42;sky+=vec3(1.,.92,.75)*sun;float cloud=sin(d.x*3.2+d.z*1.7+uTime*.02)*sin(d.z*4.1-d.x*1.4+1.7);cloud=smoothstep(.1,.78,cloud);float band=smoothstep(.015,.1,d.y)*(1.-smoothstep(.42,.85,d.y));sky=mix(sky,vec3(.97,.95,.90),cloud*band*.62);sky=mix(sky,vec3(.50,.60,.58),uWeather*.32);vec3 night=vec3(.025,.06,.11)+vec3(.04,.07,.11)*h;gl_FragColor=vec4(mix(sky,night,uNight),1.);
#include <tonemapping_fragment>
#include <colorspace_fragment>}`}));V.renderOrder=-10,a.add(V);let ne=new it;ne.name="preserved-penglai-distant";for(let $ of["island","flora","architecture"]){let Be=r?.get($);if(Be){let dt=Be.clone(!0);dt.traverse(Pe=>{Pe.isMesh&&(Pe.castShadow=!1,Pe.receiveShadow=!1,(Pe.name==="rocks"||Number.isFinite(Pe.userData.y0))&&(Pe.visible=!1))}),ne.add(dt)}}ne.scale.setScalar(4.5),ne.position.set(-8,-5.8,-64),ne.rotation.y=-.3,a.add(ne);function ge($,Be,dt,Pe){let ft=[],Ot=[];for(let N=0;N<=80;N++){let W=(N/80-.5)*180,Z=Be*(.25+.45*Math.pow(Math.sin(N*.09+Pe),2)+.3*Math.pow(Math.sin(N*.21+Pe),4));if(ft.push(W,-4,$,W,Z,$),N<80){let B=N*2;Ot.push(B,B+1,B+2,B+1,B+3,B+2)}}let Jt=new Ye;Jt.setAttribute("position",new Le(ft,3)),Jt.setIndex(Ot),Jt.computeVertexNormals();let b=new Ne(Jt,new wt({color:dt,side:nt}));a.add(b)}ge(-115,26,"#90b8ab",2),ge(-92,18,"#76a89d",5);let me={uNight:{value:0}},Ae=new Ne(new nn(110,110),new at({uniforms:me,vertexShader:`
#include <common>
#include <clipping_planes_pars_vertex>
varying vec3 vP;
void main(){
#include <begin_vertex>
#include <project_vertex>
#include <clipping_planes_vertex>
vP=(modelMatrix*vec4(transformed,1.)).xyz;
}`,fragmentShader:`
#include <common>
#include <clipping_planes_pars_fragment>
varying vec3 vP;
uniform float uNight;
void main(){
#include <clipping_planes_fragment>
vec2 q=vP.xz;
float rip=sin(q.x*1.5)*sin(q.y*1.25);
float grain=fract(sin(dot(q,vec2(127.1,311.7)))*43758.5);
float deep=smoothstep(2.,-16.,q.y);
vec3 col=mix(vec3(.64,.56,.40),vec3(.08,.24,.23),deep);
col*=.9+rip*.06+grain*.05;
col*=mix(1.,.34,uNight);
gl_FragColor=vec4(col,1.);
#include <tonemapping_fragment>
#include <colorspace_fragment>
}`}));Ae.rotation.x=-Math.PI/2,Ae.position.set(0,-.45,-24),Ae.receiveShadow=!0,a.add(Ae);let oe=sa({scene:a,planeY:0,scale:.55});oe.resize(innerWidth,innerHeight),oe.install(t);let ve={uTime:{value:0},uReflection:{value:oe.target.texture},uMatrix:{value:oe.textureMatrix},uEye:{value:l.position},uAim:{value:D.clone()},uRipple:{value:0},uNight:{value:0},uWeather:{value:0},uSite:{value:0}},Re=new Ne(new nn(100,100,120,120),new at({uniforms:ve,transparent:!0,depthWrite:!1,side:nt,vertexShader:"uniform float uTime;uniform mat4 uMatrix;varying vec3 vP;varying vec4 vR;void main(){vec3 p=position;p.z+=sin(p.x*.42+uTime*.32)*.028+cos(p.y*.33-uTime*.22)*.022+sin((p.x+p.y)*.9+uTime*.5)*.008;vec4 w=modelMatrix*vec4(p,1.);vP=w.xyz;vR=uMatrix*w;gl_Position=projectionMatrix*viewMatrix*w;}",fragmentShader:`uniform float uTime,uRipple,uNight,uWeather,uSite;uniform vec3 uEye,uAim;uniform sampler2D uReflection;varying vec3 vP;varying vec4 vR;float hash(vec2 p){p=fract(p*vec2(.1031,.1030));p+=dot(p,p.yx+33.33);return fract((p.x+p.y)*p.x);}float noise(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(hash(i),hash(i+vec2(1,0)),f.x),mix(hash(i+vec2(0,1)),hash(i+vec2(1,1)),f.x),f.y);}void main(){vec2 q=vP.xz;float n1=noise(q*.32+vec2(uTime*.05,-uTime*.03));float n2=noise(q*1.15-vec2(uTime*.07,uTime*.04));float dist=distance(q,uAim.xz);float rip=sin(dist*13.-uTime*3.4)*exp(-dist*1.25)*uRipple;vec3 n=normalize(vec3((n1-.5)*.16+rip*.1,1.,(n2-.5)*.14+rip*.08));vec3 e=normalize(uEye-vP);float fres=pow(1.-max(dot(n,e),0.),2.35);vec2 uv=vR.xy/vR.w+n.xz*.028;vec3 reflected=texture2D(uReflection,clamp(uv,.003,.997)).rgb;float lane=smoothstep(15.,2.8,length(q-vec2(0.,-7.)));float shore=smoothstep(-3.2,2.4,q.y);vec3 deep=vec3(.035,.20,.23),midc=vec3(.07,.45,.41),shallow=vec3(.48,.78,.64);if(uSite>1.5){deep=vec3(.07,.14,.26);midc=vec3(.16,.30,.40);shallow=vec3(.58,.64,.58);}else if(uSite>.5){deep=vec3(.02,.14,.20);midc=vec3(.04,.36,.40);shallow=vec3(.36,.70,.66);}vec3 jade=mix(deep,midc,smoothstep(-20.,-3.5,q.y));jade=mix(jade,shallow,shore*.7);jade+=vec3(.12,.18,.1)*n1*.16;float glitter=pow(max(sin(q.x*2.2+n2*5.+uTime*.55)*cos(q.y*1.7-uTime*.35),0.),16.);float sun=pow(max(dot(reflect(-normalize(vec3(-.45,1.,.32)),n),e),0.),80.);vec3 c=mix(jade,reflected*vec3(.84,.91,.86),clamp(.16+fres*.58,.1,.74));c+=vec3(1.,.86,.55)*glitter*(1.-uNight)*.28;c+=vec3(1.,.9,.64)*sun*.42;float foam=smoothstep(.64,.9,noise(q*2.8+vec2(0.,uTime*.12)))*shore;foam+=smoothstep(.4,1.,rip)*.7;c=mix(c,vec3(.94,.97,.92),clamp(foam,0.,.6));c*=mix(1.,.4,uNight);c=mix(c,vec3(.42,.52,.54),uWeather*.16);float alpha=mix(.9,.58,lane*(1.-shore*.25));alpha=mix(alpha,.82,uNight*.45);gl_FragColor=vec4(c,alpha);
#include <tonemapping_fragment>
#include <colorspace_fragment>}`}));Re.rotation.x=-Math.PI/2,Re.position.z=-22,Re.renderOrder=3,a.add(Re),oe.exclude(Re);let be=new Ne(new ko(.18,.195,64),new wt({color:"#e6e3b0",transparent:!0,opacity:.6,side:nt,depthWrite:!1}));be.rotation.x=-Math.PI/2,be.position.copy(D),be.position.y=.045,be.renderOrder=5,a.add(be),oe.exclude(be);let C=new it;C.name="lacquer-float";let qe=[];for(let $=0;$<=22;$++){let Be=$/22,dt=-.09+Be*.2,Pe=Math.sin(Math.PI*Math.pow(Be,.82));qe.push(new we(Math.max(.004,.007+Pe*.032),dt))}C.add(new Ne(new zo(qe,28),new Xt({color:"#9c2f28",roughness:.18,metalness:.06,clearcoat:.9,clearcoatRoughness:.16})));let We=new Ne(new tt(.036,.036,.026,24),new Xt({color:"#f6e6c4",roughness:.32,clearcoat:.55}));We.position.y=.028,C.add(We);let Ke=new Ne(new tt(.003,.0065,.15,10),te("#e6c56a",{roughness:.38}));Ke.position.y=.145,C.add(Ke);let Fe=new Ne(new lt(.011,14,10),te("#f7f3e6",{roughness:.3}));Fe.position.y=.22,C.add(Fe),C.visible=!1,a.add(C);let $e=new it;$e.name="first-person-rod-only-rig",$e.scale.setScalar(.86),$e.position.set(.12,-.05,-.08),l.add($e),a.add(l),oe.exclude($e);let Ue=new Ne(new Vo(.014,.0032,8,18),new Mt({color:"#e0b85a",metalness:.72,roughness:.28}));Ue.position.set(.4,.38,-3),Ue.rotation.y=Math.PI/2,Ue.name="RodTipRing",$e.add(Ue);let R=40,S=new Float32Array(R*2*3),K=new Ye;K.setAttribute("position",new Xe(S,3));let ae=[];for(let $=0;$<R-1;$++){let Be=$*2;ae.push(Be,Be+1,Be+2,Be+1,Be+3,Be+2)}K.setIndex(ae);let pe=new Ne(K,new wt({color:"#f4e7c4",transparent:!0,opacity:.9,side:nt,depthWrite:!1}));pe.visible=!1,pe.renderOrder=6,pe.frustumCulled=!1,a.add(pe),oe.exclude(pe);let re=new A,Y=new A,se=new A,F=new A,j=new A,k=new it;k.name="submerged-fish",a.add(k);let Q=new Ye,ce=new Float32Array(800*3);for(let $=0;$<800;$++)ce[$*3]=(Math.random()-.5)*28,ce[$*3+1]=Math.random()*10,ce[$*3+2]=-Math.random()*32;Q.setAttribute("position",new Xe(ce,3));let fe=new Rn(Q,new Fi({color:"#dbe8dd",size:.035,transparent:!0,opacity:.55,depthWrite:!1}));fe.visible=!1,a.add(fe),oe.exclude(fe);let le=new Ye,_e=new Float32Array(210);for(let $=0;$<70;$++)_e[$*3]=(Math.random()-.5)*22,_e[$*3+1]=Math.random()*5,_e[$*3+2]=-Math.random()*25;le.setAttribute("position",new Xe(_e,3));let Se=new Rn(le,new Fi({color:"#efe0b3",size:.025,transparent:!0,opacity:.55,depthWrite:!1}));a.add(Se),oe.exclude(Se);let ze=new Mt({color:"#61786a",roughness:.93});ze.onBeforeCompile=$=>{$.vertexShader=$.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vStonePos; varying vec3 vStoneNormal;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vStonePos=(modelMatrix*vec4(position,1.)).xyz;vStoneNormal=normalize(mat3(modelMatrix)*normal);`),$.fragmentShader=$.fragmentShader.replace("#include <common>",`#include <common>
 varying vec3 vStonePos; varying vec3 vStoneNormal;
 float rockHash(vec3 p){return fract(sin(dot(p,vec3(127.1,311.7,74.7)))*43758.5453);}
 float rockNoise(vec3 p){vec3 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(mix(rockHash(i),rockHash(i+vec3(1,0,0)),f.x),mix(rockHash(i+vec3(0,1,0)),rockHash(i+vec3(1,1,0)),f.x),f.y),mix(mix(rockHash(i+vec3(0,0,1)),rockHash(i+vec3(1,0,1)),f.x),mix(rockHash(i+vec3(0,1,1)),rockHash(i+vec3(1,1,1)),f.x),f.y),f.z);}
 `).replace("#include <color_fragment>",`#include <color_fragment>
 float patches=rockNoise(vStonePos*2.5)*.65+rockNoise(vStonePos*9.)*.35;
 float grain=rockNoise(vStonePos*55.);
 float mossMask=smoothstep(.37,.73,patches)*smoothstep(.10,.72,vStoneNormal.y);
 diffuseColor.rgb=mix(vec3(.22,.26,.23),vec3(.55,.50,.40),patches);
 diffuseColor.rgb=mix(diffuseColor.rgb,vec3(.20,.36,.16),mossMask*.82);
 diffuseColor.rgb*=.90+grain*.16;
 `)};let L=ze.onBeforeCompile;ze.onBeforeCompile=$=>{L($),$.fragmentShader=$.fragmentShader.replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
 float rockHeight=(rockNoise(vStonePos*24.)*.7+rockNoise(vStonePos*75.)*.3)*.012;
 vec3 sx=dFdx(-vViewPosition),sy=dFdy(-vViewPosition);vec3 rx=cross(sy,normal),ry=cross(normal,sx);float determinant=dot(sx,rx);
 vec3 grainGradient=sign(determinant)*(dFdx(rockHeight)*rx+dFdy(rockHeight)*ry);
 normal=normalize(abs(determinant)*normal-grainGradient);
 `).replace("diffuseColor.rgb*=.90+grain*.16;",`diffuseColor.rgb*=.90+grain*.16;
 float wet=1.-smoothstep(.01,.32,vStonePos.y);diffuseColor.rgb*=1.-wet*.22;`)},ze.customProgramCacheKey=()=>"qingchi-v7-stone-grain";let xe=localStorage.getItem("qingchi.quality.v7")||"hd";function ee($){xe=$==="eco"?"eco":"hd",localStorage.setItem("qingchi.quality.v7",xe),t.setPixelRatio(Math.min(devicePixelRatio||1,xe==="hd"?1.75:1)),t.setSize(innerWidth,innerHeight,!1),oe.resize(innerWidth*(xe==="hd"?1.3:1),innerHeight*(xe==="hd"?1.3:1))}ee(xe);let ue=$=>{let Be=0,dt=0;return $.traverse(Pe=>{Pe.isMesh&&(Be++,dt+=Pe.geometry.attributes.position.count,Pe.castShadow=!0,Pe.receiveShadow=!0)}),{meshes:Be,vertices:dt}};async function Te($){let Be=new URL("./assets/firstperson/"+$,location.href).href,dt=await new Promise((Pe,ft)=>{let Ot=new XMLHttpRequest;Ot.open("GET",Be),Ot.responseType="arraybuffer",Ot.onload=()=>Ot.response?.byteLength?Pe(Ot.response):ft(Error("Empty model: "+$)),Ot.onerror=()=>ft(Error("Local model load failed: "+$)),Ot.send()});return(await O.parseAsync(dt,"")).scene}function Ce($,Be){$.color?.set&&$.color.set(Be),$.uniforms?.uColor&&$.uniforms.uColor.value.set(Be)}function Qe($,Be){let dt=$.clone(!0),Pe=Math.random()*Math.PI*2;return dt.userData.phase=Pe,dt.userData.studio=!!$.userData?.studio,dt.userData.swimRate=$.userData?.swimRate||1,dt.traverse(ft=>{if(!ft.isMesh)return;ft.material=ft.material.clone(),ft.material.uniforms&&(ft.material.userData.swimUniforms=ft.material.uniforms),ft.material.uniforms?.uPhase&&(ft.material.uniforms.uPhase.value=Pe);let Ot=ft.material.userData?.authored,Jt=ft.material.name||"";!Ot&&!Be.scientific&&/FishPearl/.test(Jt)&&Ce(ft.material,Be.color||"#c4a663"),!Ot&&!Be.scientific&&/FinPearl/.test(Jt)&&Ce(ft.material,Be.accent||"#d9c78b"),ft.castShadow=!1,ft.receiveShadow=!0}),dt}let xt={lotus:[["goldfish",.95,-5,2.05,.085],["guppy",.72,-4.35,1.15,.13],["neon",.58,-6.1,1.7,.16],["neon",.52,-6.7,1.25,.15],["zebra",.6,-7.5,1.9,.12],["crucian",.82,-8.3,2.35,.09],["carp",1.05,-9.2,2.7,.075]],falls:[["angelfish",.92,-6,1.7,.08],["goldfish",.8,-4.8,2.15,.09],["zebra",.56,-7.2,1.35,.14],["perch",.72,-8.1,2,.1],["koi",1.02,-9.5,2.55,.07],["mandarin",.86,-7.6,2.7,.085],["ivory",.68,-5.5,1.2,.11]],moon:[["betta",.88,-4.7,1.35,.09],["neon",.54,-5.8,1.75,.16],["guppy",.66,-6.3,1.05,.13],["catfish",.95,-8.6,2.25,.08],["eel",.9,-7.15,1.55,.12],["dawn",.74,-9.3,2.45,.085],["crucian",.7,-6.6,2.3,.1]]},It=!1,st=null;function Dt(){for(let $ of J)k.remove($),$.traverse(Be=>{Be.isMesh?.material?.dispose&&Be.material.dispose()});J.length=0}function pn(){if(!It||st===h&&J.length)return;Dt(),(xt[h]||xt.lotus).forEach((Be,dt)=>{let[Pe,ft,Ot,Jt,b]=Be,N=bf[Pe]||{color:"#c4a663",accent:"#d9c78b",form:"koi"},W=H[Pe]||H[N.form||"koi"];if(!W)return;let Z=Qe(W,N);Z.scale.setScalar(ft),Z.userData.swimRate=Pe==="neon"||Pe==="guppy"?1.6:Pe==="eel"?1.3:Pe==="goldfish"||Pe==="koi"||Pe==="carp"?.72:1,Z.userData.motion={z:Ot,radius:Jt,speed:b,phase:dt*1.37+.4,wander:Math.max(.7,Jt*.48)},Z.updateMatrixWorld(!0);let B=new gn().setFromObject(Z.getObjectByName("FishBody")||Z);Z.userData.motion.baseY=-B.max.y+.02,k.add(Z),J.push(Z)}),st=h}Promise.all([Te("shore-hd.glb"),Te("rod-hand.glb"),...["koi","round","slim","long","goldfish","guppy","neon","zebra","betta","angelfish"].map($=>Te("fish-"+$+".glb"))]).then(([$,Be,...dt])=>{$.name="blender-authored-hd-nearshore",q.shore=ue($),$.traverse(Pe=>{Pe.isMesh&&(/stone|moss/i.test(Pe.material.name)&&(Pe.material=ze),/pine jade|reed|petal|leaf/i.test(Pe.material.name)&&(Pe.material.side=nt,/pine jade/.test(Pe.material.name)&&Pe.material.color.multiplyScalar(1.12)))}),a.add($),q.rod=ue(Be),Be.traverse(Pe=>{Pe.isMesh&&(Pe.castShadow=!1,Pe.receiveShadow=!1,/Warm hand|woven sleeve|silk cuff/i.test(Pe.material?.name)&&(Pe.visible=!1))}),Be.traverse(Pe=>{if(!Pe.isMesh||!Pe.material||Pe.material===ze)return;let ft=Pe.material.name||"";/bamboo|Honey/i.test(ft)&&(Pe.material.color.set("#c9923e"),Pe.material.roughness=.4),/brass|Brushed/i.test(ft)&&(Pe.material.color.set("#e2b15a"),Pe.material.metalness=.75,Pe.material.roughness=.3),/Linen|linen/i.test(ft)&&Pe.material.color.set("#f0e2c2")}),$e.add(Be),["koi","round","slim","long","goldfish","guppy","neon","zebra","betta","angelfish"].forEach((Pe,ft)=>{q[Pe]=ue(dt[ft])});for(let Pe of Sf)H[Pe]=Tf(Pe);It=!0,pn(),M=!0}).catch($=>{P=$.message,console.error("Nearshore asset load failed",$)});function ai(){l.rotation.set(_,g,0,"YXZ"),l.updateMatrixWorld(!0)}function Yi($){h=$,c="fishing",document.body.classList.add("first-person"),n.enabled=!1,g=$==="falls"?-.13:$==="moon"?.12:0,_=-.075,l.position.set($==="falls"?.6:$==="moon"?-.55:0,1.62,3.05),D.set($==="falls"?1.8:$==="moon"?-2.2:0,.035,$==="falls"?-10:$==="moon"?-6.4:-7.2),ve.uSite.value=$==="falls"?1:$==="moon"?2:0,ai(),u="idle",C.visible=!1,pe.visible=!1,pn()}function yn(){c="overview",document.body.classList.remove("first-person"),n.enabled=!0,n.autoRotate=!1,n.target.set(0,-.18,0),e.position.set(15,15,15),e.zoom=1.1,e.updateProjectionMatrix(),n.update()}let Mn=t.domElement;Mn.addEventListener("pointerdown",$=>{c!=="fishing"||$.button!==0||(m={x:$.clientX,y:$.clientY},p=0,Mn.setPointerCapture($.pointerId))}),Mn.addEventListener("pointermove",$=>{if(!m||c!=="fishing")return;let Be=$.clientX-m.x,dt=$.clientY-m.y;p+=Math.abs(Be)+Math.abs(dt),g=ki.clamp(g-Be*.0022,-.65,.65),_=ki.clamp(_-dt*.0017,-.44,.22),m={x:$.clientX,y:$.clientY},ai()}),Mn.addEventListener("pointerup",()=>{m=null}),Mn.addEventListener("pointercancel",()=>{m=null}),Mn.addEventListener("wheel",$=>{c==="fishing"&&($.preventDefault(),l.fov=ki.clamp(l.fov+Math.sign($.deltaY)*1.5,43,67),l.updateProjectionMatrix())},{passive:!1}),addEventListener("blur",()=>{m=null}),addEventListener("keydown",$=>{c==="fishing"&&$.code==="KeyR"&&!$.target.closest("input,textarea")&&!document.querySelector("dialog[open]")&&(g=0,_=-.075,l.fov=56,l.updateProjectionMatrix(),ai())}),addEventListener("resize",()=>{l.aspect=innerWidth/innerHeight,l.updateProjectionMatrix(),oe.resize(innerWidth*(xe==="hd"?1.3:1),innerHeight*(xe==="hd"?1.3:1))});function qi($,Be){if(c!=="fishing"||p>6)return p=0,null;let dt=new Ks;dt.setFromCamera(new we($/innerWidth*2-1,-Be/innerHeight*2+1),l);let Pe=new A;return!dt.ray.intersectPlane(new un(new A(0,1,0),-.035),Pe)||Pe.z>-.5||Math.hypot(Pe.x-o.x,Pe.z-o.z)>o.r?null:(D.copy(Pe),{x:Pe.x,z:Pe.z})}let wi=()=>{T&&(a.remove(T),T.traverse($=>{$.isMesh&&$.material.dispose()}),T=null)},mn={setQuality:ee,focus:Yi,overview:yn,cast:()=>{U=0,E&&(a.remove(E),E=null),v=d,u="waiting",C.visible=!0,pe.visible=!0},setReel:($,Be)=>{U=Math.max(0,Math.min(1,$||0)),x=Be},setPhase:$=>{u=$,$==="tug"&&(y=d,!E&&H.koi&&(E=Qe(H.koi,{color:"#c8b789",accent:"#e8dcc3"}),E.scale.setScalar(.8),a.add(E))),!["tug","caught"].includes($)&&E&&(a.remove(E),E=null),["idle","failed"].includes($)&&(C.visible=!1,pe.visible=!1)},setWeather:$=>{f=$,fe.visible=$==="rain"||$==="snow",fe.material.size=$==="snow"?.065:.035},pick:qi,prize:$=>{if(E&&(a.remove(E),E=null),wi(),H[$.id]||H[$.form||"koi"]){T=Qe(H[$.id]||H[$.form||"koi"],$);let Be=$.id==="angelfish"?1.02:$.id==="betta"?1.12:["guppy","neon","zebra","eel"].includes($.id)?1.65:1.28;T.scale.setScalar(Be),a.add(T)}u="caught"},clearPrize:wi,projectAim:()=>{let $=D.clone().project(l);return{x:($.x+1)/2*innerWidth,y:(1-$.y)/2*innerHeight}},inspect:()=>({quality:xe,renderSize:{width:t.domElement.width,height:t.domElement.height},drawCalls:t.info.render.calls,triangles:t.info.render.triangles,shoreAsset:"shore-hd.glb",site:h,phase:u,view:c,cameraType:c==="fishing"?"PerspectiveCamera":"OrthographicCamera",eye:l.position.toArray(),yaw:g,pitch:_,fov:l.fov,weather:f,lake:{...o},aim:{x:D.x,z:D.z},assetsReady:M,assetError:P,assetCounts:q,fishMeshes:J.length,frames:w,exposure:t.toneMappingExposure,firstPerson:c==="fishing",rodOnly:!0,visibleHandMeshes:(()=>{let $=0;return $e.traverse(Be=>{Be.isMesh&&Be.visible&&/Warm hand|woven sleeve|silk cuff/i.test(Be.material?.name)&&$++}),$})(),reelProgress:U,landingDistance:E?l.position.distanceTo(E.position):null,distantOriginalLayers:ne.children.length})};return window.QingchiWorld=Object.freeze(mn),yn(),{isActive:()=>c==="fishing",update($,Be,dt){d=$,I=(dt?.nightFactor||0)>.5,de.uTime.value=$,de.uNight.value=I?.85:0,de.uWeather.value=f==="rain"?1:f==="cloudy"?.5:0,ve.uTime.value=$,ve.uRipple.value=["waiting","bite","tug"].includes(u)?u==="tug"?1:u==="bite"?.8:.18:Math.max(0,1-($-v)/2),ve.uNight.value=I?.7:0,ve.uWeather.value=de.uWeather.value,me.uNight.value=ve.uNight.value,X.intensity=I?.42:f==="rain"?1.55:f==="cloudy"?2.25:3.15,he.intensity=I?.55:1.45,ie.intensity=I?.08:.55,G.intensity=I?.25:.72,a.fog.color.set(I?"#1c333c":"#d5e4d6"),a.background.copy(a.fog.color),Ee.set(-14,I?8:22,10).normalize(),be.position.copy(D),be.scale.setScalar(1+.06*Math.sin($*2)),be.visible=c==="fishing"&&["idle","failed"].includes(u),ai(),$e.rotation.x=u==="tug"?.035+Math.sin($*(x?12:3))*(x?.05:.01):u==="bite"?Math.sin($*10)*.012:Math.sin($*.7)*.004,$-v<.75&&($e.rotation.x=-.25*Math.sin(($-v)/.75*Math.PI)),$-y<.4&&($e.rotation.x=.2*Math.sin(($-y)/.4*Math.PI)),l.updateMatrixWorld(!0);let Pe=new A(.4,.38,-3);if($e.localToWorld(Pe),C.position.copy(D),C.position.y=.015+(u==="bite"?Math.sin($*15)*.06:Math.sin($*2.8)*.009),C.rotation.z=Math.sin($*2)*.045,u==="tug"){let b=new A(-.35,-1.1,-1.6);l.localToWorld(b),C.position.lerp(b,U),C.position.y=.035+Math.sin($*9)*.025,E&&(E.position.copy(C.position),E.position.y=-.05+Math.sin($*9)*.05,E.rotation.set(0,g+Math.PI/2+Math.sin($*8)*.2,Math.sin($*7)*.12))}if($-v<.75){let b=($-v)/.75;C.position.copy(Pe).lerp(D,b),C.position.y+=Math.sin(b*Math.PI)*1.5}ve.uAim.value.copy(C.visible?C.position:D),l.getWorldPosition(re),F.copy(C.position).sub(Pe),F.lengthSq()<1e-6?F.set(0,0,-1):F.normalize();let ft=pe.geometry.attributes.position;for(let b=0;b<R;b++){let N=b/(R-1);Y.copy(Pe).lerp(C.position,N),Y.y-=Math.sin(N*Math.PI)*(u==="tug"?.07:.32),j.copy(re).sub(Y),se.crossVectors(F,j),se.lengthSq()<1e-8?se.set(1,0,0):se.normalize();let W=.0042*(.6+.4*Math.sin(N*Math.PI));ft.setXYZ(b*2,Y.x+se.x*W,Y.y+se.y*W,Y.z+se.z*W),ft.setXYZ(b*2+1,Y.x-se.x*W,Y.y-se.y*W,Y.z-se.z*W)}ft.needsUpdate=!0;let Ot=b=>b.userData.studio?wf(b,$,Ee):b.traverse(N=>{N.name?.startsWith("TailFin")&&!N.name.includes("Ray")&&(N.rotation.y=Math.sin($*4)*.1)});if(J.forEach((b,N)=>{let W=b.userData.motion||{speed:.12,radius:1.6,z:-6-N,wander:1,phase:N,baseY:-.2},Z=$*W.speed+W.phase,B=Math.cos(Z)*W.radius,Me=-Math.sin(Z)*W.wander;b.position.set(Math.sin(Z)*W.radius,(W.baseY??-.2)+Math.sin($*.8+N)*.012,W.z+Math.cos(Z)*W.wander),b.rotation.y=Math.atan2(-Me,B),b.rotation.z=Math.sin($*1.2+N)*.045,Ot(b)}),E&&Ot(E),T&&Ot(T),T){let b=new A(-.15,-.08,-2.55);l.localToWorld(b),T.position.copy(b),T.position.y+=Math.sin($*2)*.02,T.rotation.set(.16,g+.35,Math.sin($*1.2)*.05)}if(fe.visible){let b=Q.attributes.position;for(let N=0;N<b.count;N++){let W=b.getY(N)-Be*(f==="snow"?.4:7);W<0&&(W=10),b.setY(N,W)}b.needsUpdate=!0}let Jt=le.attributes.position;for(let b=0;b<Jt.count;b++){let N=Jt.getX(b)+Be*.06;N>11&&(N=-11),Jt.setX(b,N)}Jt.needsUpdate=!0},render(){return c!=="fishing"?!1:(t.toneMappingExposure=I?.85:1.05,w%3===0&&oe.render(t,l),t.render(a,l),w++,!0)}}}var Rf={type:"change"},Mh={type:"start"},Pf={type:"end"},ca=new xi,Cf=new un,Zx=Math.cos(70*ki.DEG2RAD),Yt=new A,xn=2*Math.PI,Et={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},yh=1e-6,ha=class extends $o{constructor(e,t=null){super(e,t),this.state=Et.NONE,this.enabled=!0,this.target=new A,this.cursor=new A,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ls.ROTATE,MIDDLE:ls.DOLLY,RIGHT:ls.PAN},this.touches={ONE:cs.ROTATE,TWO:cs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new A,this._lastQuaternion=new Nt,this._lastTargetPosition=new A,this._quat=new Nt().setFromUnitVectors(e.up,new A(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Cr,this._sphericalDelta=new Cr,this._scale=1,this._panOffset=new A,this._rotateStart=new we,this._rotateEnd=new we,this._rotateDelta=new we,this._panStart=new we,this._panEnd=new we,this._panDelta=new we,this._dollyStart=new we,this._dollyEnd=new we,this._dollyDelta=new we,this._dollyDirection=new A,this._mouse=new we,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=$x.bind(this),this._onPointerDown=jx.bind(this),this._onPointerUp=Jx.bind(this),this._onContextMenu=rv.bind(this),this._onMouseWheel=tv.bind(this),this._onKeyDown=nv.bind(this),this._onTouchStart=iv.bind(this),this._onTouchMove=sv.bind(this),this._onMouseDown=Qx.bind(this),this._onMouseMove=ev.bind(this),this._interceptControlDown=ov.bind(this),this._interceptControlUp=av.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Rf),this.update(),this.state=Et.NONE}update(e=null){let t=this.object.position;Yt.copy(t).sub(this.target),Yt.applyQuaternion(this._quat),this._spherical.setFromVector3(Yt),this.autoRotate&&this.state===Et.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=xn:n>Math.PI&&(n-=xn),s<-Math.PI?s+=xn:s>Math.PI&&(s-=xn),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Yt.setFromSpherical(this._spherical),Yt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Yt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=Yt.length();o=this._clampDistance(a*this._scale);let l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let a=new A(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new A(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Yt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(ca.origin.copy(this.object.position),ca.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(ca.direction))<Zx?this.object.lookAt(this.target):(Cf.setFromNormalAndCoplanarPoint(this.object.up,this.target),ca.intersectPlane(Cf,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>yh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>yh||this._lastTargetPosition.distanceToSquared(this.target)>yh?(this.dispatchEvent(Rf),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?xn/60*this.autoRotateSpeed*e:xn/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Yt.setFromMatrixColumn(t,0),Yt.multiplyScalar(-e),this._panOffset.add(Yt)}_panUp(e,t){this.screenSpacePanning===!0?Yt.setFromMatrixColumn(t,1):(Yt.setFromMatrixColumn(t,0),Yt.crossVectors(this.object.up,Yt)),Yt.multiplyScalar(e),this._panOffset.add(Yt)}_pan(e,t){let n=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;Yt.copy(s).sub(this.target);let r=Yt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),s=e-n.left,r=t-n.top,o=n.width,a=n.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(xn*this._rotateDelta.x/t.clientHeight),this._rotateUp(xn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(xn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-xn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(xn*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-xn*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(n,s)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let n=this._getSecondPointerPosition(e),s=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(xn*this._rotateDelta.x/t.clientHeight),this._rotateUp(xn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new we,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function jx(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function $x(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function Jx(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Pf),this.state=Et.NONE;break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function Qx(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case ls.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=Et.DOLLY;break;case ls.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Et.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Et.ROTATE}break;case ls.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Et.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Et.PAN}break;default:this.state=Et.NONE}this.state!==Et.NONE&&this.dispatchEvent(Mh)}function ev(i){switch(this.state){case Et.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case Et.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case Et.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function tv(i){this.enabled===!1||this.enableZoom===!1||this.state!==Et.NONE||(i.preventDefault(),this.dispatchEvent(Mh),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Pf))}function nv(i){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(i)}function iv(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case cs.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=Et.TOUCH_ROTATE;break;case cs.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=Et.TOUCH_PAN;break;default:this.state=Et.NONE}break;case 2:switch(this.touches.TWO){case cs.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=Et.TOUCH_DOLLY_PAN;break;case cs.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=Et.TOUCH_DOLLY_ROTATE;break;default:this.state=Et.NONE}break;default:this.state=Et.NONE}this.state!==Et.NONE&&this.dispatchEvent(Mh)}function sv(i){switch(this._trackPointer(i),this.state){case Et.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case Et.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case Et.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case Et.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=Et.NONE}}function rv(i){this.enabled!==!1&&i.preventDefault()}function ov(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function av(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function fs(i){return function(){i|=0,i=i+1831565813|0;let e=Math.imul(i^i>>>15,1|i);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}var lv=.3660254037844386,Lr=.21132486540518713,Js=[1,1,-1,1,1,-1,-1,-1,1,0,-1,0,1,0,-1,0,0,1,0,-1,0,1,0,-1];function zn(i=1){let e=fs(i),t=new Uint8Array(256);for(let r=0;r<256;r++)t[r]=r;for(let r=255;r>0;r--){let o=e()*(r+1)|0,a=t[r];t[r]=t[o],t[o]=a}let n=new Uint8Array(512),s=new Uint8Array(512);for(let r=0;r<512;r++)n[r]=t[r&255],s[r]=n[r]%12;return function(o,a){let l=(o+a)*lv,c=Math.floor(o+l),h=Math.floor(a+l),u=(c+h)*Lr,f=o-(c-u),d=a-(h-u),g,_;f>d?(g=1,_=0):(g=0,_=1);let m=f-g+Lr,p=d-_+Lr,v=f-1+2*Lr,y=d-1+2*Lr,M=c&255,P=h&255,w=0,T=0,I=0,U=.5-f*f-d*d;if(U>0){let D=s[M+n[P]]*2;U*=U,w=U*U*(Js[D]*f+Js[D+1]*d)}let x=.5-m*m-p*p;if(x>0){let D=s[M+g+n[P+_]]*2;x*=x,T=x*x*(Js[D]*m+Js[D+1]*p)}let E=.5-v*v-y*y;if(E>0){let D=s[M+1+n[P+1]]*2;E*=E,I=E*E*(Js[D]*v+Js[D+1]*y)}return 70*(w+T+I)}}function Ut(i,e,t,n=4,s=2.02,r=.5){let o=1,a=1,l=0,c=0;for(let h=0;h<n;h++)l+=o*i(e*a,t*a),c+=o,o*=r,a*=s;return l/c}function If(i,e,t,n=3){let s=1,r=1,o=0,a=0;for(let l=0;l<n;l++){let c=1-Math.abs(i(e*r,t*r));o+=s*c*c,a+=s,s*=.52,r*=2.11}return o/a}var rn=i=>.5+.5*i;function ri(i,e,t){return i<e?e:i>t?t:i}function oi(i,e,t){return i+(e-i)*t}function ht(i,e,t){let n=ri((t-i)/(e-i||1e-6),0,1);return n*n*(3-2*n)}var Qs=[{t:0,label:"\u9ECE\u660E",sun:"#ffd9a0",sunI:2.2,moonI:0,hemiSky:"#5a7f8c",hemiGround:"#232a26",hemiI:.62,amb:"#a9c6cc",ambI:.44,skyTop:"#0a1a22",skyMid:"#12262c",skyLow:"#2c3a38",nebula:"#4f8f8a",star:.5,mist:.88,exposure:1.16,bloom:.8,rim:"#ffe0b0",rimI:1.2,wDeep:"#1d4a44",wShallow:"#5aa79a",wFoam:"#e6fff4",firefly:.3,glass:"#cfeae4",glassI:.85},{t:.2,label:"\u4E0A\u5348",sun:"#fff4dc",sunI:3.3,moonI:0,hemiSky:"#8fc0c4",hemiGround:"#3e4a3a",hemiI:.94,amb:"#c6e2de",ambI:.6,skyTop:"#050f12",skyMid:"#0a181c",skyLow:"#132422",nebula:"#2f6a68",star:.07,mist:.55,exposure:1.03,bloom:.44,rim:"#d8f2ea",rimI:.85,wDeep:"#17544c",wShallow:"#63b3a2",wFoam:"#f2fffb",firefly:0,glass:"#d6f0ea",glassI:.7},{t:.4,label:"\u6B63\u5348",sun:"#ffffff",sunI:3.85,moonI:0,hemiSky:"#a8ccc8",hemiGround:"#4c5442",hemiI:1.02,amb:"#dcece6",ambI:.66,skyTop:"#030a0c",skyMid:"#071114",skyLow:"#0d1a18",nebula:"#25544f",star:0,mist:.4,exposure:.98,bloom:.36,rim:"#ffffff",rimI:.7,wDeep:"#155b52",wShallow:"#72c3ae",wFoam:"#ffffff",firefly:0,glass:"#e4f7f1",glassI:.62},{t:.57,label:"\u5348\u540E",sun:"#ffe8bc",sunI:3.15,moonI:0,hemiSky:"#9ec4bd",hemiGround:"#54503a",hemiI:.94,amb:"#d8d8b8",ambI:.62,skyTop:"#040c0e",skyMid:"#0a1113",skyLow:"#161a16",nebula:"#3d5b4a",star:.1,mist:.52,exposure:1.06,bloom:.52,rim:"#ffe6b8",rimI:1.2,wDeep:"#1a534a",wShallow:"#6fb8a4",wFoam:"#fdf7e6",firefly:0,glass:"#dcf2e8",glassI:.75},{t:.68,label:"\u9EC4\u660F",sun:"#ffc84e",sunI:2.85,moonI:.1,hemiSky:"#ab8a5c",hemiGround:"#4e4020",hemiI:.9,amb:"#f7d08c",ambI:.66,skyTop:"#070d10",skyMid:"#181420",skyLow:"#3a2a18",nebula:"#9a6a4a",star:.32,mist:.62,exposure:1.16,bloom:.88,rim:"#ffe09a",rimI:1.85,wDeep:"#2f4a44",wShallow:"#93b8a0",wFoam:"#fff2cf",firefly:.3,glass:"#ffe6c4",glassI:.92},{t:.79,label:"\u66AE\u8272",sun:"#ffab4a",sunI:1.1,moonI:.3,hemiSky:"#6a6272",hemiGround:"#262a26",hemiI:.7,amb:"#b8a0a8",ambI:.48,skyTop:"#04080c",skyMid:"#0a1018",skyLow:"#1c1a22",nebula:"#6a4a5a",star:.68,mist:.8,exposure:1.2,bloom:.98,rim:"#ffc98a",rimI:1.3,wDeep:"#173f3c",wShallow:"#4a8a80",wFoam:"#e8e0d0",firefly:.75,glass:"#d8d0dc",glassI:1.05},{t:.92,label:"\u6DF1\u591C",sun:"#9fc8d8",sunI:.12,moonI:.62,hemiSky:"#2a3d4c",hemiGround:"#141a18",hemiI:.44,amb:"#6a8a96",ambI:.38,skyTop:"#02060a",skyMid:"#050c10",skyLow:"#0a1418",nebula:"#2e4a52",star:1,mist:.92,exposure:1.24,bloom:1.05,rim:"#a8d8e8",rimI:.85,wDeep:"#0d2f30",wShallow:"#2f6f6a",wFoam:"#cddde0",firefly:1,glass:"#b4d0d8",glassI:1.1},{t:1,label:"\u9ECE\u660E",sun:"#ffd9a0",sunI:2.2,moonI:0,hemiSky:"#5a7f8c",hemiGround:"#232a26",hemiI:.62,amb:"#a9c6cc",ambI:.44,skyTop:"#0a1a22",skyMid:"#12262c",skyLow:"#2c3a38",nebula:"#4f8f8a",star:.5,mist:.88,exposure:1.16,bloom:.8,rim:"#ffe0b0",rimI:1.2,wDeep:"#1d4a44",wShallow:"#5aa79a",wFoam:"#e6fff4",firefly:.3,glass:"#cfeae4",glassI:.85}],Df=[6,9,12.5,15.5,18,19.5,22.5,30],Lf=["sun","hemiSky","hemiGround","amb","skyTop","skyMid","skyLow","nebula","rim","wDeep","wShallow","wFoam","glass"],Nf=["sunI","moonI","hemiI","ambI","star","mist","exposure","bloom","rimI","firefly","glassI"];function Uf(){let i={t:.28,label:"\u4E0A\u5348",sunDir:new A(.4,.8,.4).normalize(),moonDir:new A(-.4,-.8,-.4).normalize(),sunElev:.6,dayFactor:1,nightFactor:0,hour:10};for(let n of Lf)i[n]=new z("#ffffff");for(let n of Nf)i[n]=0;let e=new z,t=new z;return i.apply=function(s){i.t=(s%1+1)%1;let r=i.t,o=0;for(;o<Qs.length-2&&Qs[o+1].t<=r;)o++;let a=Qs[o],l=Qs[o+1]||Qs[Qs.length-1],c=l.t-a.t||1,h=ri((r-a.t)/c,0,1),u=h*h*(3-2*h);for(let p of Lf)e.set(a[p]),t.set(l[p]),i[p].copy(e).lerp(t,u);for(let p of Nf)i[p]=oi(a[p],l[p],u);let f=oi(Df[o],Df[o+1],h);i.hour=f%24,i.label=f<4.5?"\u6DF1\u591C":f<6.8?"\u9ECE\u660E":f<11?"\u4E0A\u5348":f<13.6?"\u6B63\u5348":f<17?"\u5348\u540E":f<18.6?"\u9EC4\u660F":f<20.2?"\u66AE\u8272":"\u6DF1\u591C";let d=r*Math.PI*2,g=Math.sin(d)*1.28,_=2.35+r*2.6,m=Math.cos(Math.min(g,1.45));return i.sunDir.set(Math.cos(_)*m,Math.sin(g),Math.sin(_)*m).normalize(),i.moonDir.copy(i.sunDir).multiplyScalar(-1),i.sunElev=Math.sin(g),i.dayFactor=ht(-.16,.22,i.sunElev),i.nightFactor=1-i.dayFactor,i},i.apply(.28),i}function ua(i,e){let t=document.createElement("canvas");return t.width=i,t.height=e,{c:t,ctx:t.getContext("2d")}}function Si(i=128,e=0,t=.42){let{c:n,ctx:s}=ua(i,i),r=s.createRadialGradient(i/2,i/2,i*e,i/2,i/2,i/2);r.addColorStop(0,"rgba(255,255,255,1)"),r.addColorStop(t,"rgba(255,255,255,0.38)"),r.addColorStop(.72,"rgba(255,255,255,0.09)"),r.addColorStop(1,"rgba(255,255,255,0)"),s.fillStyle=r,s.fillRect(0,0,i,i);let o=new os(n);return o.colorSpace=Ht,o.needsUpdate=!0,o}function fa(i=256,e=11,t=1,n=.9,s=1){let r=zn(e),{c:o,ctx:a}=ua(i,i),l=a.createImageData(i,i),c=i/2;for(let u=0;u<i;u++)for(let f=0;f<i;f++){let d=(f-c)/c,g=(u-c)/c,_=Math.sqrt(d*d+g*g),m=Math.pow(Math.max(0,1-_),1.35)*t,p=rn(Ut(r,f*.021*s,u*.021*s,4))*.72+rn(Ut(r,f*.058*s,u*.058*s,3))*.28,v=Math.pow(Math.max(0,m*(1-n+n*1.45*p)),1.2),y=(u*i+f)*4;l.data[y]=255,l.data[y+1]=255,l.data[y+2]=255,l.data[y+3]=Math.min(255,v*255)}a.putImageData(l,0,0);let h=new os(o);return h.colorSpace=Yn,h.needsUpdate=!0,h}function Ff(i=64,e=256){let{c:t,ctx:n}=ua(i,e),s=n.createImageData(i,e);for(let o=0;o<e;o++)for(let a=0;a<i;a++){let l=a/(i-1),c=o/(e-1),h=Math.pow(Math.sin(Math.PI*l),2.6),u=ht(1,.06,c)*ht(0,.14,c)*.6+ht(1,0,c)*.4,f=(o*i+a)*4;s.data[f]=255,s.data[f+1]=255,s.data[f+2]=255,s.data[f+3]=Math.max(0,Math.min(255,h*u*255))}n.putImageData(s,0,0);let r=new os(t);return r.colorSpace=Yn,r.needsUpdate=!0,r}function Of(i=512,e=256){let{c:t,ctx:n}=ua(i,e),s=n.createLinearGradient(0,0,0,e);s.addColorStop(0,"#1a2440"),s.addColorStop(.34,"#0d1424"),s.addColorStop(.52,"#070a12"),s.addColorStop(1,"#020306"),n.fillStyle=s,n.fillRect(0,0,i,e);let r=[[i*.24,e*.24,i*.16,"rgba(255,236,205,0.95)"],[i*.3,e*.3,i*.24,"rgba(255,214,160,0.45)"],[i*.68,e*.2,i*.13,"rgba(190,222,255,0.85)"],[i*.63,e*.26,i*.26,"rgba(120,170,255,0.30)"],[i*.88,e*.46,i*.2,"rgba(255,170,210,0.16)"],[i*.06,e*.52,i*.18,"rgba(120,255,232,0.14)"]];n.globalCompositeOperation="lighter";for(let[a,l,c,h]of r)for(let u of[-i,0,i]){let f=n.createRadialGradient(a+u,l,0,a+u,l,c);f.addColorStop(0,h),f.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=f,n.beginPath(),n.arc(a+u,l,c,0,Math.PI*2),n.fill()}n.globalCompositeOperation="source-over";let o=new os(t);return o.mapping=_r,o.colorSpace=Ht,o.needsUpdate=!0,o}var cv=`
varying vec3 vDir;
void main(){
  vDir = normalize(position);
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  gl_Position = projectionMatrix * mv;
}
`,hv=`
precision highp float;
uniform vec3 uTop, uMid, uLow, uNebula;
uniform float uTime;
varying vec3 vDir;

float hash31(vec3 p){ return fract(sin(dot(p, vec3(12.9898, 78.233, 37.719))) * 43758.5453); }
float vnoise3(vec3 p){
  vec3 i = floor(p), f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  float n = mix(mix(mix(hash31(i), hash31(i + vec3(1,0,0)), f.x),
                    mix(hash31(i + vec3(0,1,0)), hash31(i + vec3(1,1,0)), f.x), f.y),
                mix(mix(hash31(i + vec3(0,0,1)), hash31(i + vec3(1,0,1)), f.x),
                    mix(hash31(i + vec3(0,1,1)), hash31(i + vec3(1,1,1)), f.x), f.y), f.z);
  return n;
}
float fbm3(vec3 p){
  float s = 0.0, a = 0.5;
  for (int i = 0; i < 5; i++) { s += a * vnoise3(p); p *= 2.03; a *= 0.5; }
  return s;
}

void main(){
  vec3 d = normalize(vDir);
  float h = d.y * 0.5 + 0.5;
  vec3 col = mix(uLow, uMid, smoothstep(0.0, 0.55, h));
  col = mix(col, uTop, smoothstep(0.45, 1.0, h));

  // \u661F\u4E91:\u4F4E\u9891\u566A\u58F0,\u53EA\u5728\u4E2D\u4F4E\u7A7A\u53EF\u89C1,\u6781\u6697
  vec3 q = d * 2.1 + vec3(0.0, 0.0, uTime * 0.004);
  float neb = fbm3(q) * fbm3(q * 2.7 + 5.0);
  neb = pow(clamp(neb, 0.0, 1.0), 1.9);
  float band = smoothstep(0.15, 0.75, 1.0 - abs(d.y)); // \u6CBF"\u94F6\u6CB3\u9762"\u66F4\u4EAE
  col += uNebula * neb * band * 0.85;

  // \u6781\u6DE1\u7684\u6697\u89D2,\u8BA9\u4E2D\u95F4\u66F4"\u865A"
  float v = smoothstep(1.4, 0.2, length(d.xz));
  col *= 0.72 + 0.28 * v;

  gl_FragColor = vec4(col, 1.0);
}
`,uv=`
attribute float aSize;
attribute float aPhase;
uniform float uTime;
uniform float uOpacity;
uniform float uScale;
varying float vA;
void main(){
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  gl_Position = projectionMatrix * mv;
  float tw = 0.62 + 0.38 * sin(uTime * (0.9 + aSize * 1.7) + aPhase * 6.28);
  vA = tw * uOpacity;
  gl_PointSize = aSize * uScale;
}
`,fv=`
precision highp float;
uniform sampler2D uMap;
uniform vec3 uColor;
varying float vA;
void main(){
  vec4 t = texture2D(uMap, gl_PointCoord);
  float a = t.a * vA;
  if (a < 0.004) discard;
  gl_FragColor = vec4(uColor, a);
}
`;function Bf(){let i=new it;i.name="sky";let e=new at({uniforms:{uTop:{value:new z("#050a18")},uMid:{value:new z("#0a1224")},uLow:{value:new z("#131a2c")},uNebula:{value:new z("#2c3a68")},uTime:{value:0}},vertexShader:cv,fragmentShader:hv,side:Kt,depthWrite:!1,depthTest:!1}),t=new Ne(new lt(320,32,24),e);t.renderOrder=-100,t.frustumCulled=!1,i.add(t);let n=2200,s=new Float32Array(n*3),r=new Float32Array(n),o=new Float32Array(n),a=20261026,l=()=>(a=(a*1664525+1013904223)%4294967296,a/4294967296);for(let _=0;_<n;_++){let m=l()*2-1,p=l()*Math.PI*2,v=250+l()*40,y=Math.sqrt(1-m*m);s[_*3]=Math.cos(p)*y*v,s[_*3+1]=m*v,s[_*3+2]=Math.sin(p)*y*v,r[_]=.6+Math.pow(l(),3.2)*3.4,o[_]=l()}let c=new Ye;c.setAttribute("position",new Xe(s,3)),c.setAttribute("aSize",new Xe(r,1)),c.setAttribute("aPhase",new Xe(o,1));let h=new at({uniforms:{uTime:{value:0},uOpacity:{value:1},uScale:{value:1},uColor:{value:new z("#dce9ff")},uMap:{value:Si(64)}},vertexShader:uv,fragmentShader:fv,transparent:!0,blending:fn,depthWrite:!1,depthTest:!0}),u=new Rn(c,h);u.renderOrder=-99,u.frustumCulled=!1,i.add(u);let f=new wt({map:Si(256),color:4877992,transparent:!0,opacity:.5,blending:fn,depthWrite:!1,depthTest:!0,side:nt}),d=new Ne(new nn(34,34),f);d.position.set(0,0,-26),d.renderOrder=-98,i.add(d);let g=d.clone();return g.material=f.clone(),g.material.color=new z(9396126),g.material.opacity=.32,g.scale.set(1.7,1.1,1),g.position.set(-7,4.5,-28),i.add(g),{group:i,update(_,m){e.uniforms.uTime.value=_,e.uniforms.uTop.value.copy(m.skyTop),e.uniforms.uMid.value.copy(m.skyMid),e.uniforms.uLow.value.copy(m.skyLow),e.uniforms.uNebula.value.copy(m.nebula),h.uniforms.uTime.value=_,h.uniforms.uOpacity.value=m.star,f.opacity=.16+.42*m.nightFactor,f.color.copy(m.nebula).multiplyScalar(.9),g.material.opacity=.1+.3*m.nightFactor,g.material.color.copy(m.nebula).multiplyScalar(.8)}}}var dv=new z(9417938),pv=`
varying vec3 vLocal;
varying vec3 vN;
varying vec3 vViewDir;
void main(){
  vLocal = position;
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vN = normalize(mat3(modelMatrix) * normal);
  vViewDir = normalize(cameraPosition - wp.xyz);
  gl_Position = projectionMatrix * viewMatrix * wp;
}
`,mv=`
precision highp float;
uniform float uHalf;
uniform float uWidth;
uniform vec3 uColor;
uniform float uIntensity;
varying vec3 vLocal;
varying vec3 vN;
varying vec3 vViewDir;

void main(){
  vec3 a = abs(vLocal);
  vec3 d = vec3(uHalf) - a;
  // \u8BE5\u70B9\u6240\u5728\u7684\u90A3\u4E2A\u9762:\u67D0\u4E00\u8F74 d\u22480;\u5269\u4E0B\u7684\u4E24\u6761\u8F74\u7ED9\u51FA"\u5230\u6700\u8FD1\u68F1\u7684\u8DDD\u79BB"
  float best = 1e9;
  if (d.x > 0.0015 && d.x < best) best = d.x;
  if (d.y > 0.0015 && d.y < best) best = d.y;
  if (d.z > 0.0015 && d.z < best) best = d.z;
  float edge = 1.0 - smoothstep(0.0, uWidth, best);

  float fres = pow(1.0 - abs(dot(normalize(vN), normalize(vViewDir))), 2.4);
  float g = edge * 0.85 + fres * 0.30 + 0.045;
  gl_FragColor = vec4(uColor * g * uIntensity, g * uIntensity);
}
`;function Hf(i=11,e={}){let t=i/2,n=new A(.577,.577,.577),s=new it;s.name="glass";let r=e.physical===!0,o=new Xt({color:16777215,metalness:0,roughness:.045,transmission:r?1:0,thickness:.6,ior:1.46,transparent:!0,opacity:r?1:.028,side:nt,clearcoat:1,clearcoatRoughness:.04,iridescence:.5,iridescenceIOR:1.36,iridescenceThicknessRange:[180,620],attenuationColor:new z("#bfe6ff"),attenuationDistance:1.15,envMapIntensity:r?2.3:1.9,specularIntensity:1.15,depthWrite:!1,premultipliedAlpha:!1}),a=new Ne(new Rt(i,i,i),o);a.name="glass-body",a.renderOrder=8,s.add(a);let l=.026,c=new Xt({color:12178666,roughness:.12,metalness:0,clearcoat:1,clearcoatRoughness:.06,transparent:!0,opacity:.1,emissive:new z(1915996),emissiveIntensity:.12,envMapIntensity:1.2}),h=new Rt(i,l*2,l*2),u=new Rt(l*2,i,l*2),f=new Rt(l*2,l*2,i),d=new it,g=[],_=(T,I,U,x)=>{let E=new Ne(T,c.clone());return E.position.set(I,U,x),E.userData.dir=new A(I,U,x).normalize(),d.add(E),g.push(E),E};for(let T of[-1,1]){for(let I of[-1,1])_(h,0,t*T,t*I);for(let I of[-1,1])_(f,t*I,t*T,0)}for(let T of[-1,1])for(let I of[-1,1])_(u,t*T,0,t*I);let m=new lt(l*1.35,10,8);for(let T of[-1,1])for(let I of[-1,1])for(let U of[-1,1]){let x=new Ne(m,c);x.position.set(t*T,t*I,t*U),d.add(x)}d.name="glass-frame",s.add(d);let p=Si(256),v=new wt({map:p,transparent:!0,opacity:.1,blending:fn,depthWrite:!1,side:nt}),y=new it;y.name="glass-reflections";let M=(T,I,U,x,E)=>{let D=new Ne(new nn(T,I),v.clone());return D.position.set(...U),D.rotation.set(...x),D.material.opacity=E,D.renderOrder=7,y.add(D),D};M(7.6,3.2,[.6,t-.03,.2],[-Math.PI/2,0,.5],.038),M(5.2,2.6,[t-.03,2.35,.4],[0,Math.PI/2,.32],.052),M(4.4,3,[-.4,2.05,t-.03],[0,0,-.28],.044),s.add(y);let P=new at({uniforms:{uHalf:{value:t},uWidth:{value:.055},uColor:{value:new z("#bfe0ff")},uIntensity:{value:.9}},vertexShader:pv,fragmentShader:mv,transparent:!0,blending:fn,depthWrite:!1,side:nt}),w=new Ne(new Rt(i*1.004,i*1.004,i*1.004),P);return w.name="glass-glow",w.renderOrder=9,s.add(w),{group:s,bodyMat:o,barMat:c,glowMat:P,update(T,I,U){if(U){n.copy(U.position).normalize();for(let x of g){let E=x.userData.dir.dot(n),D=ht(-.25,.55,E);x.material.opacity=.145-.125*D}}P.uniforms.uColor.value.copy(T.glass),P.uniforms.uIntensity.value=T.glassI*.12*(.85+.15*Math.sin(I*.7)),c.emissive.copy(T.glass).multiplyScalar(.35),c.emissiveIntensity=.04+.16*T.nightFactor,c.color.copy(T.glass).lerp(dv,.62).multiplyScalar(.85)}}}var kn=1.24,Nr=1.16,zf=[{x:-1.16,z:-1.34,h:1.72,r:1.34,k:1.5},{x:-2.08,z:.36,h:1.22,r:1.1,k:1.45},{x:-.16,z:-1.94,h:.92,r:.96,k:1.35},{x:-1.6,z:-.6,h:.7,r:1.34,k:1.15},{x:.62,z:-1.62,h:.44,r:.88,k:1.25}],Jn={x:.96*1.28,z:-.4*1.28,r:.92*1.18},gv=.72*1.16,_v=Jn.r*1.45,xv=[[-1.44,-.66],[-1.25,-.15],[-.9,.25],[-.45,.42],[-.05,.25],[.25,-.05],[.5,-.4]],vv=[[1.72,-.66],[2.12,-.92],[2.56,-.76],[2.9,-.32],[3.1,.4],[3.14,1.2],[3.04,1.95],[2.84,2.52]],yv=Math.atan2(2.5,2.9),da=new z("#4f8a68"),vn={grassA:new z("#5f9a72"),grassB:new z("#37684f"),grassC:new z("#86ad86"),moss:new z("#4f8270"),rockA:new z("#5f6f6c"),rockB:new z("#514f52"),rockC:new z("#7f8f84"),snow:new z("#eef8f6"),snowB:new z("#c2e0dc"),sand:new z("#a8b096"),bed:new z("#7f9280"),edgeEarth:new z("#31513f"),deepRock:new z("#6b5643"),deepRock2:new z("#3b3029")};function Vf(i){let e=i.getIndex(),t=e.array;for(let n=0;n<t.length;n+=3){let s=t[n];t[n]=t[n+2],t[n+2]=s}e.needsUpdate=!0,i.computeVertexNormals()}function kf(i){let e=i.getAttribute("position"),t=i.getAttribute("normal"),n=new Map,s=o=>Math.round(o*1e5);for(let o=0;o<e.count;o++){let a=`${s(e.getX(o))},${s(e.getY(o))},${s(e.getZ(o))}`,l=n.get(a);l?l.push(o):n.set(a,[o])}let r=new A;for(let o of n.values())if(!(o.length<2)){r.set(0,0,0);for(let a of o)r.x+=t.getX(a),r.y+=t.getY(a),r.z+=t.getZ(a);if(!(r.lengthSq()<1e-12)){r.normalize();for(let a of o)t.setXYZ(a,r.x,r.y,r.z)}}return t.needsUpdate=!0,i}function Mv(i){let e=i.getAttribute("normal"),t=0;for(let n=0;n<e.count;n++)t+=e.getY(n);return t<0&&Vf(i),i}function Ev(i){let e=i.getAttribute("normal"),t=i.getAttribute("position"),n=0;for(let s=0;s<e.count;s++){let r=Math.hypot(t.getX(s),t.getZ(s));r<1e-4||(n+=(e.getX(s)*t.getX(s)+e.getZ(s)*t.getZ(s))/r)}return n<0&&Vf(i),i}function Gf(){let i=zn(1337),e=zn(90210),t=zn(5150),n=zn(777);function s(F,j){let k=Math.hypot(F,j)||1,Q=F/k,ce=j/k,fe=3.04*kn+.34*kn*rn(Ut(t,Q*3+5.5,ce*3-2.2,2)),le=Math.atan2(ce,Q)-yv;for(;le>Math.PI;)le-=Math.PI*2;for(;le<-Math.PI;)le+=Math.PI*2;return fe+=.62*kn*Math.exp(-(le*le)/(2*.16*.16)),fe}function r(F,j){let k=Math.hypot(F,j),Q=s(F,j),ce=ht(Q,Q-.5*kn,k),fe=(.15+.135*rn(Ut(i,F*.8,j*.8,4))+.045*rn(Ut(i,F*2.5,j*2.5,3)))*Nr,le=0;for(let ze=0;ze<zf.length;ze++){let L=zf[ze],xe=Math.hypot(F-L.x*kn,j-L.z*kn)/(L.r*kn);le+=L.h*Nr*Math.exp(-Math.pow(xe,L.k)*1.05)}let _e=If(e,F*1.1+4.2,j*1.1-1.7,2);le*=.9+.2*_e,fe+=le;let Se=Math.hypot(F-Jn.x,j-Jn.z);{let ze=Math.min(1,Se/_v),L=1-ze*ze;fe-=gv*L*L}return fe*ce}let o=[];for(let F=0;F<32;F++){let j=F/32*Math.PI*2,k=Jn.r*1.32;o.push(r(Jn.x+Math.cos(j)*k,Jn.z+Math.sin(j)*k))}o.sort((F,j)=>F-j);let a=0;for(let F=0;F<8;F++)a+=o[F];let l=a/8-.05*Nr;function c(F,j){let k=new Ho(F.map(([_e,Se])=>new A(_e*kn,0,Se*kn)),!1,"catmullrom",.4),Q=160,ce=k.getSpacedPoints(Q),fe=new Float32Array(Q+1);for(let _e=0;_e<=Q;_e++)fe[_e]=r(ce[_e].x,ce[_e].z)-.13*Nr;for(let _e=0;_e<2;_e++){for(let Se=1;Se<=Q;Se++)fe[Se]=Math.min(fe[Se],fe[Se-1]-j.slope);for(let Se=1;Se<Q;Se++)fe[Se]=(fe[Se-1]+fe[Se]*2+fe[Se+1])*.25}if(j.start!==void 0)for(let _e=0;_e<=Q;_e++)fe[_e]=oi(j.start,fe[_e],ht(0,.35,_e/Q));if(j.end!==void 0)for(let _e=0;_e<=Q;_e++)fe[_e]=oi(j.end,fe[_e],ht(0,.3,(Q-_e)/Q));let le=1/0;for(let _e=0;_e<=Q;_e++)le=Math.min(le,fe[_e]),fe[_e]=le;return{N:Q,width:.178*kn,wy:fe,pts:ce.map((_e,Se)=>new A(_e.x,fe[Se],_e.z))}}let h=c(xv,{end:l-.03,slope:.0022}),u=c(vv,{start:l-.03,slope:.0022}),f=[h,u],d=.192*kn,g=.2*kn,_=.55,m=-6.6,p=Math.ceil(13.2/_)+1,v=f.reduce((F,j)=>F+j.N+1,0),y=new Float32Array(v),M=new Float32Array(v),P=new Float32Array(v),w=0;for(let F of f)for(let j=0;j<=F.N;j++)y[w]=F.pts[j].x,M[w]=F.pts[j].z,P[w]=F.wy[j],w++;let T=new Array(p*p);for(let F=0;F<v;F++){let j=ri(Math.floor((y[F]-m)/_),0,p-1),Q=ri(Math.floor((M[F]-m)/_),0,p-1)*p+j;(T[Q]||(T[Q]=[])).push(F)}let I={d:999,wy:0};function U(F,j){let k=Math.floor((F-m)/_),Q=Math.floor((j-m)/_);if(k<0||Q<0||k>=p||Q>=p)return I;let ce=1e9,fe=!1,le=0,_e=0,Se=.09;for(let ze=-1;ze<=1;ze++){let L=Q+ze;if(!(L<0||L>=p))for(let xe=-1;xe<=1;xe++){let ee=k+xe;if(ee<0||ee>=p)continue;let ue=T[L*p+ee];if(ue){fe=!0;for(let Te=0;Te<ue.length;Te++){let Ce=ue[Te],Qe=F-y[Ce],xt=j-M[Ce],It=Qe*Qe+xt*xt;It<ce&&(ce=It);let st=1/(It+Se);le+=st,_e+=st*P[Ce]}}}}return fe?{d:Math.sqrt(ce),wy:_e/le}:I}function x(F,j){let k=r(F,j),Q=U(F,j);if(Q.d<d+g){let ce=ht(d+g,d,Q.d);k=oi(k,Math.min(k,Q.wy-.13*Nr),ce)}return k}let E=(F,j)=>Math.hypot(F-Jn.x,j-Jn.z),D=-5.4,O=5.4,H=168,J=(O-D)/(H-1),q=new Float32Array(H*H);for(let F=0;F<H;F++){let j=D+F*J;for(let k=0;k<H;k++)q[F*H+k]=x(D+k*J,j)}function te(F,j){let k=(F-D)/J,Q=(j-D)/J;if(k<0||Q<0||k>=H-1||Q>=H-1)return x(F,j);let ce=k|0,fe=Q|0,le=k-ce,_e=Q-fe,Se=q[fe*H+ce],ze=q[fe*H+ce+1],L=q[(fe+1)*H+ce],xe=q[(fe+1)*H+ce+1];return oi(oi(Se,ze,le),oi(L,xe,le),_e)}function X(F,j){let k=J,Q=te(F+k,j)-te(F-k,j),ce=te(F,j+k)-te(F,j-k);return Math.hypot(Q,ce)/(2*k)}let he=132,G=320,ie=(he+1)*(G+1)+1,Ee=new Float32Array(ie*3),de=new Float32Array(ie*3),V=new Float32Array(ie),ne=new Float32Array(ie),ge=new Uint32Array(he*G*6+G*3),me=.22,Ae=F=>(.0042+.9958*Math.pow(F/he,1.05))*.9985,oe=new z,ve=.17,Re=x(1e-4,1e-4);for(let F=0;F<=he;F++)for(let j=0;j<=G;j++){let k=j/G*Math.PI*2,Q=Math.cos(k),ce=Math.sin(k),fe=Ae(F),le=s(Q,ce),_e=fe*le,Se=Q*_e,ze=ce*_e,L=F*(G+1)+j,xe=x(Se,ze);if(_e<ve){let ee=ht(.02,ve,_e);xe=Re+(xe-Re)*ee}V[L]=xe,ne[L]=_e,Ee[L*3]=Se,Ee[L*3+1]=xe,Ee[L*3+2]=ze}{let F=new Float32Array(V.length),j=(k,Q)=>{for(let ce=0;ce<=he;ce++)for(let fe=0;fe<=G;fe++){let le=ce*(G+1)+fe,_e=ce*(G+1)+(fe===0?G-1:fe-1),Se=ce*(G+1)+(fe===G?1:fe+1),ze=(ce===0?0:ce-1)*(G+1)+fe,L=(ce===he?he:ce+1)*(G+1)+fe;Q[le]=(k[le]*4+k[_e]+k[Se]+k[ze]+k[L])*.125}};j(V,F),j(F,V);for(let k=0;k<V.length;k++)Ee[k*3+1]=V[k]}for(let F=0;F<=he;F++)for(let j=0;j<=G;j++){let k=F*(G+1)+j,Q=Ee[k*3],ce=Ee[k*3+2],fe=V[k],le=j>0?j-1:G-1,_e=j<G?j+1:1,Se=F>0?F-1:0,ze=F<he?F+1:he,L=Math.max(J*.9,2*Math.PI*ne[k]/G),xe=Math.max(J*.9,ne[ze*(G+1)+j]-ne[Se*(G+1)+j]||J),ee=(V[F*(G+1)+_e]-V[F*(G+1)+le])/L,ue=(V[ze*(G+1)+j]-V[Se*(G+1)+j])/xe,Te=Math.min(Math.hypot(ee,ue),8),Ce=rn(Ut(n,Q*1.05,ce*1.05,3)),Qe=rn(Ut(n,Q*2.9,ce*2.9,2));oe.copy(vn.grassB).lerp(vn.grassA,Ce),oe.lerp(vn.grassC,Math.pow(Qe,1.5)*.38);let xt=ht(.5,1.35,Te)*(.8+.2*Qe);if(xt>.002){let mn=vn.rockA.clone().lerp(vn.rockC,Qe*.45);oe.lerp(mn,ri(xt,0,1))}let st=1.6+.34*Ut(i,Q*2.7+3.1,ce*2.7-1.4,4)+.1*rn(Ut(e,Q*1.1,ce*1.1,2)),Dt=ht(st,st+.3,fe);Dt*=ht(2.35,.95,Te);let pn=rn(Ut(t,Q*5+1.7,ce*5-2.9,2));if(Dt*=1-.62*ht(.58,.86,pn)*ht(2.1,1.05,Te),Dt*=.8+.2*Qe,Dt>.002){let mn=vn.snow.clone().lerp(vn.snowB,.25+Ce*.55);oe.lerp(mn,ri(Dt,0,1))}let ai=E(Q,ce),Yi=(1-ht(l+.02,l+.11,fe))*ht(Jn.r*1.28,Jn.r*.86,ai);Yi>.002&&oe.lerp(vn.sand,Yi*.85);let yn=U(Q,ce);if(yn.d<d*2.2){let mn=1-ht(d*1.05,d*2.2,yn.d);oe.lerp(vn.bed,mn*.55)}let Mn=ht(.45,.9,fe)*(1-ht(1,1.35,fe));Mn>.002&&oe.lerp(vn.moss,Mn*.35*Qe);let qi=ht(.34,.05,s(Q,ce)-Math.hypot(Q,ce));qi>.002&&oe.lerp(vn.edgeEarth,qi*.8);let wi=Math.hypot(Q,ce);if(wi<me){let mn=ht(me,me*.25,wi);oe.lerp(da,mn*.92)}de[k*3]=oe.r,de[k*3+1]=oe.g,de[k*3+2]=oe.b}let be=0;for(let F=0;F<he;F++)for(let j=0;j<G;j++){let k=F*(G+1)+j,Q=k+1,ce=k+G+1,fe=ce+1;ge[be++]=k,ge[be++]=ce,ge[be++]=Q,ge[be++]=Q,ge[be++]=ce,ge[be++]=fe}let C=ie-1;{let k=V[0];Ee[C*3]=0,Ee[C*3+1]=k,Ee[C*3+2]=0,de[C*3]=da.r,de[C*3+1]=da.g,de[C*3+2]=da.b;for(let Q=0;Q<G;Q++){let ce=0*(G+1)+Q,fe=ce+1;ge[be++]=C,ge[be++]=ce,ge[be++]=fe}}let qe=new Ye;qe.setAttribute("position",new Xe(Ee,3)),qe.setAttribute("color",new Xe(de,3)),qe.setIndex(new Xe(ge,1)),qe.computeVertexNormals(),Mv(qe),kf(qe);let We=new Ne(qe,new Mt({vertexColors:!0,roughness:.95,metalness:0,envMapIntensity:.28}));We.castShadow=!0,We.receiveShadow=!0,We.name="terrain";let Ke=46,Fe=[],$e=[],Ue=[],R=new Float32Array(G+1);for(let F=0;F<=G;F++){let j=F/G*Math.PI*2,k=Math.cos(j),Q=Math.sin(j),ce=s(k,Q);R[F]=x(k*ce*.9985,Q*ce*.9985)}for(let F=0;F<=Ke;F++){let j=F/Ke;for(let k=0;k<=G;k++){let Q=k/G*Math.PI*2,ce=Math.cos(Q),fe=Math.sin(Q),le=s(ce,fe),_e=1+.1*Ut(e,ce*3.1+j*5,fe*3.1-j*4,3)*ht(0,.16,j),Se=le*.9985*Math.pow(1-j,.62)*_e,ze=ce*Se,L=fe*Se,ee=R[k]*(1-ht(0,.35,j))-3.02*Math.pow(j,.92)+.3*Ut(t,ze*1.6+7,L*1.6-3,3)*Math.sin(j*Math.PI);Fe.push(ze,ee,L);let ue=rn(Ut(n,ze*2.2,L*2.2+j*3,3));oe.copy(vn.deepRock).lerp(vn.deepRock2,ue);let Te=(1-ht(.06,.4,j))*.42*rn(Ut(i,ze*4,L*4,2));Te>.002&&oe.lerp(vn.moss,Te),$e.push(oe.r,oe.g,oe.b)}}for(let F=0;F<Ke;F++)for(let j=0;j<G;j++){let k=F*(G+1)+j,Q=k+1,ce=k+G+1,fe=ce+1;Ue.push(k,Q,ce,Q,fe,ce)}let S=new Ye;S.setAttribute("position",new Le(Fe,3)),S.setAttribute("color",new Le($e,3)),S.setIndex(Ue),S.computeVertexNormals(),kf(S),Ev(S);let K=new Ne(S,new Mt({vertexColors:!0,roughness:.97,metalness:0,flatShading:!0,envMapIntensity:.62,emissive:new z("#1a1410"),emissiveIntensity:1}));K.castShadow=!0,K.receiveShadow=!0,K.name="underside";let ae=new it;ae.name="island",ae.add(We,K);let pe=f[1],re=pe.N;for(let F=pe.N;F>=0;F--){let j=pe.pts[F];if(Math.hypot(j.x,j.z)<=s(j.x,j.z)-.05){re=F;break}}let Y=pe.pts[re],se=new we(Y.x,Y.z);return se.lengthSq()<1e-6&&se.set(1,0),se.normalize(),{group:ae,heightAt:x,sampleY:te,slopeFast:X,slopeAt:X,coastR:s,channel:U,lakeDist:E,lake:{...Jn,y:l},rivers:f,fall:{x:Y.x,y:pe.wy[re],z:Y.z,dx:se.x,dz:se.y,width:.25,bottomY:-3.55}}}var Yf=`
// \u26A0 \u4E0D\u8981\u7528 sin() \u578B\u54C8\u5E0C:fract(sin(dot(p,K))*43758) \u5728 dot \u5230\u4E0A\u4E07\u65F6\u7CBE\u5EA6\u56E0 GPU \u800C\u5F02,
// \u4F1A\u5728\u90E8\u5206\u663E\u5361\u4E0A\u9000\u5316\u6210\u6761\u7EB9/\u653E\u5C04\u72B6\u6469\u5C14\u7EB9(\u8868\u73B0\u4E3A\u6C34\u9762\u4E0A\u51FA\u73B0"\u98CE\u8F66"\u72B6\u6761\u7EB9)\u3002
// \u8FD9\u91CC\u7528\u65E0 sin \u7684\u6574\u6570\u7CFB\u54C8\u5E0C,\u91CF\u7EA7\u5B89\u5168\u3001\u8DE8\u9A71\u52A8\u4E00\u81F4\u3002
float hash21(vec2 p){
  p = fract(p * vec2(0.1031, 0.1030));
  p += dot(p, p.yx + 33.33);
  return fract((p.x + p.y) * p.x);
}
float vnoise(vec2 p){
  vec2 i = floor(p), f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash21(i), hash21(i + vec2(1.0, 0.0)), f.x),
             mix(hash21(i + vec2(0.0, 1.0)), hash21(i + vec2(1.0, 1.0)), f.x), f.y);
}
`;function bv(){return{uTime:{value:0},uDeep:{value:new z("#1d5566")},uShallow:{value:new z("#63b9c2")},uFoam:{value:new z("#eafcff")},uSunColor:{value:new z("#ffffff")},uSkyColor:{value:new z("#9fc6ee")},uSunDir:{value:new A(0,1,0)},uNight:{value:0},uGlow:{value:1},uTexMatrix:{value:new He},uReflect:{value:null},uDistort:{value:.05},uReflectAmt:{value:.82},uFlow:{value:0},uFlowMode:{value:0},uEndFade:{value:0},uDbg:{value:0}}}function Wf(i,e){i.uDeep.value.copy(e.wDeep),i.uShallow.value.copy(e.wShallow),i.uFoam.value.copy(e.wFoam),i.uSunColor.value.copy(e.sun),i.uSkyColor.value.copy(e.hemiSky),i.uSunDir.value.copy(e.sunDir),i.uNight.value=e.nightFactor,i.uGlow.value=1-.34*e.nightFactor}var qf=`
attribute float aDepth;
attribute float aEdge;
uniform mat4 uTexMatrix;
varying vec3 vW;
varying vec4 vRefl;
varying float vDepth;
varying float vEdge;
varying vec2 vUv;
void main(){
  vDepth = aDepth;
  vEdge = aEdge;
  vUv = uv;
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vW = wp.xyz;
  vRefl = uTexMatrix * wp;
  gl_Position = projectionMatrix * viewMatrix * wp;
}
`,Kf=`
precision highp float;
uniform float uTime;
uniform vec3 uDeep, uShallow, uFoam, uSunColor, uSkyColor, uSunDir;
uniform float uNight, uGlow, uDistort, uReflectAmt, uDbg, uFlow;
uniform float uFlowMode, uEndFade;
uniform sampler2D uReflect;
varying vec3 vW;
varying vec4 vRefl;
varying float vDepth;
varying float vEdge;
varying vec2 vUv;
${Yf}
void main(){
  vec3 V = normalize(cameraPosition - vW);
  vec2 p = vW.xz;
  float t = uTime;

  // \u6CBF vUv.y \u5377\u52A8 = \u987A\u6D41\u65B9\u5411(\u6CB3\u9053:\u6CBF\u66F2\u7EBF;\u6E56\u9762:\u6CBF\u534A\u5F84,\u8BFB\u4F5C\u4E00\u5708\u5708\u6269\u6563\u7684\u6D9F\u6F2A)
  float r1 = vnoise(vec2(p.x * 5.2, p.y * 5.2) + vec2(t * 0.18, -t * 0.26));
  float r2 = vnoise(vec2(p.x * 14.0, p.y * 14.0) - vec2(t * 0.34, -t * 0.52));
  float r3 = vnoise(p * 41.0 + vec2(-t * 0.42, t * 0.31));
  vec3 N = normalize(vec3(
    (r1 - 0.5) * 0.36 + (r2 - 0.5) * 0.22,
    1.0,
    (r1 - 0.5) * 0.32 - (r2 - 0.5) * 0.20
  ));

  float fres = pow(1.0 - clamp(dot(V, N), 0.0, 1.0), 3.0);
  float dep = clamp(vDepth * 3.0, 0.0, 1.0);

  // \u771F\u5B9E\u53CD\u5C04:\u6309\u6CD5\u7EBF\u6270\u52A8\u6295\u5F71 uv,\u91C7\u955C\u50CF\u76F8\u673A\u7684 RT\u3002
  // \u4E4B\u524D\u662F"\u6DF7\u4E00\u4E2A\u5047\u5929\u7A7A\u8272",\u6240\u4EE5\u6C34\u9762\u50CF\u4E00\u5757\u53D1\u4EAE\u7684\u5851\u6599\u7247\u3002
  // \u987A\u6D41\u4EAE\u7EB9:\u6C34"\u6709\u6CA1\u6709\u5728\u6D41"\u4E3B\u8981\u9760\u5B83,\u6CD5\u7EBF\u6270\u52A8\u53EA\u5728\u5F3A\u5149\u4E0B\u624D\u770B\u5F97\u51FA\u6765
  vec2 fp = uFlowMode > 0.5
    ? vec2(vUv.x * 9.0, vUv.y * 18.0 - t * 1.5)                       // \u6CB3\u9053:\u6CBF\u66F2\u7EBF\u987A\u6D41
    : vec2(p.x * 5.5 + t * 0.10, p.y * 5.5 - t * 0.16);                // \u6E56\u9762:\u4E16\u754C\u5750\u6807\u6F02\u79FB
  float flowTex = vnoise(fp);
  float flowTex2 = vnoise(fp * 1.9 + vec2(3.7, -t * 0.30));
  float flowStreak = pow(smoothstep(0.55, 0.96, flowTex * 0.6 + flowTex2 * 0.6), 1.3);
  // \u7528\u4E16\u754C\u5750\u6807\u566A\u58F0\u628A\u5B83\u6253\u788E,\u5426\u5219\u6E56\u9762\u662F\u4E00\u5708\u5708\u592A\u89C4\u6574\u7684\u540C\u5FC3\u73AF
  flowStreak *= 0.35 + 1.05 * vnoise(p * 2.6 + vec2(t * 0.04, -t * 0.03));

  vec2 ruv = vRefl.xy / max(vRefl.w, 1e-4);
  ruv += N.xz * uDistort * (1.0 - dep * 0.4);
  vec3 reflCol = texture2D(uReflect, clamp(ruv, vec2(0.002), vec2(0.998))).rgb;
  reflCol *= mix(vec3(1.0), uDeep * 1.8 + vec3(0.10), 0.30);   // \u53CD\u5C04\u88AB\u6C34\u4F53\u67D3\u4E00\u70B9\u8272
  reflCol *= mix(1.0, 0.55, uNight);
  // \u6E56\u5728\u6DF1\u7A7A\u91CC,\u6B63\u4E0A\u65B9\u53CD\u5C04\u7684\u5927\u591A\u662F\u6697\u8272\u7684\u6811\u5E95\u4E0E\u7A7A\u95F4 \u2192 \u6DF7\u4E00\u70B9\u73AF\u5883\u5149,\u522B\u6574\u7247\u53D1\u9ED1
  vec3 ambRefl = uSkyColor * 0.50 + uSunColor * 0.10;
  reflCol = mix(reflCol, ambRefl, 0.32);
  // \u53CD\u5C04\u672C\u8EAB\u53EF\u80FD\u662F\u6DF1\u7A7A(\u8FD1\u9ED1)\u6216\u5C9B\u7684\u5CA9\u5E95,\u7ED9\u4E2A\u4E0B\u9650,\u522B\u8BA9\u6C34\u9762\u51FA\u73B0"\u9ED1\u6D1E"
  reflCol = max(reflCol, ambRefl * 0.55);

  vec3 base = mix(uShallow, uDeep, dep);
  float reflK = clamp((0.46 + fres * 0.72) * uReflectAmt, 0.0, 1.0);
  vec3 col = mix(base, reflCol, reflK);
  col += uFoam * flowStreak * uFlow * 0.42;

  // \u53EA\u7559\u592A\u9633\u90A3\u4E00\u675F\u9AD8\u5149\u3002\u539F\u6765\u7684 pow(vnoise(p*33),16) \u788E\u5149\u9891\u7387\u9AD8\u4E8E\u50CF\u7D20\u5BC6\u5EA6,
  // \u8D70\u6837\u6210\u4E00\u7247\u767D\u70B9(\u8FDC\u770B\u50CF\u51B0\u78B4/\u9C7C\u9CDE)\u2014\u2014 \u76F4\u63A5\u5220\u6389\u3002
  vec3 H = normalize(uSunDir + V);
  float spec = pow(max(dot(N, H), 0.0), 150.0) * 1.15;
  col += uSunColor * spec * (0.55 + 0.45 * (1.0 - uNight));

  float foam = smoothstep(0.14, 0.0, vDepth) * (0.55 + 0.45 * sin(t * 1.9 + p.x * 9.0 + p.y * 7.5));
  foam += (1.0 - vEdge) * 0.22;
  float wob = vnoise(p * 14.0 + vec2(t * 0.12, 0.0));
  foam *= 0.55 + 0.75 * wob;
  col = mix(col, uFoam, clamp(foam, 0.0, 1.0) * 0.42);

  col *= uGlow;

  if (uDbg > 0.5) {           // \u8BCA\u65AD:1=\u53CD\u5C04 RT 2=\u987A\u6D41\u4EAE\u7EB9 3=\u6CD5\u7EBF\u6270\u52A8 4=\u6DF1\u5EA6
    if (uDbg < 1.5)      gl_FragColor = vec4(reflCol, 1.0);
    else if (uDbg < 2.5) gl_FragColor = vec4(vec3(flowStreak), 1.0);
    else if (uDbg < 3.5) gl_FragColor = vec4(N * 0.5 + 0.5, 1.0);
    else                 gl_FragColor = vec4(vec3(dep), 1.0);
    return;
  }

  // \u6D45\u6C34\u66F4\u900F(\u80FD\u770B\u89C1\u6E56\u5E95),\u6DF1\u6C34\u66F4\u5B9E
  // aDepth \u53D6\u81EA\u672A\u5E73\u6ED1\u7684\u89E3\u6790\u9AD8\u5EA6,\u800C\u5730\u5F62\u505A\u8FC7\u4E24\u904D\u5E73\u6ED1(\u6700\u591A\u5DEE ~0.06)\u3002
  // \u6DE1\u51FA\u5E26\u5FC5\u987B\u6BD4\u8FD9\u4E2A\u8BEF\u5DEE\u5BBD,\u5426\u5219\u5CB8\u7EBF\u4E0A\u4F1A\u6D6E\u51FA\u4E00\u5708\u591A\u8FB9\u5F62\u786C\u8FB9\u3002
  float alpha = smoothstep(0.04, 0.20, vDepth) * (0.58 + 0.42 * dep);
  // \u539F\u6765\u8FD9\u91CC\u8FD8\u6709\u4E00\u53E5 alpha = max(alpha, foam*0.85) \u2014\u2014 \u6CE1\u6CAB\u628A\u4E0D\u900F\u660E\u5EA6\u5F3A\u884C\u9876\u5230 0.85,
  // \u800C\u6CE1\u6CAB\u6070\u597D\u96C6\u4E2D\u5728"\u6DF1\u5EA6\u5F88\u5C0F"\u7684\u90A3\u4E00\u5708(\u5730\u5F62\u5E73\u6ED1\u8BEF\u5DEE\u4E5F\u5728\u8FD9\u91CC),\u4E8E\u662F\u753B\u51FA\u4E00\u5708\u591A\u8FB9\u5F62\u786C\u8FB9\u3002
  // \u73B0\u5728\u6CE1\u6CAB\u53EA\u505A"\u8865\u4E00\u70B9\u4E0D\u900F\u660E\u5EA6",\u4E0D\u518D\u51B3\u5B9A\u6C34\u9762\u5728\u54EA\u7ED3\u675F\u3002
  alpha *= 1.0 + clamp(foam, 0.0, 1.0) * 0.40;
  alpha *= mix(0.38, 1.0, vEdge);   // \u6CB3\u5CB8\u8F6F\u5316;\u539F\u6765 0.10 \u592A\u900F,\u6C34\u9762\u770B\u7740\u6BD4\u5B9E\u9645\u7A84\u4E00\u534A
  // \u6CB3\u6E56\u63A5\u7F1D:\u6C47\u5165\u6E56\u7684\u4E00\u5934 / \u6D41\u51FA\u6E56\u7684\u4E00\u5934\u6DE1\u51FA,\u8BA9\u4E24\u7247\u6C34\u81EA\u7136\u63A5\u4F4F
  if (uEndFade > 0.5 && uEndFade < 1.5) alpha *= smoothstep(1.0, 0.965, vUv.y);   // \u6C47\u5165\u6E56:\u53EA\u6DE1\u6700\u540E 3.5%
  else if (uEndFade >= 1.5) alpha *= smoothstep(0.0, 0.035, vUv.y);               // \u6D41\u51FA\u6E56:\u53EA\u6DE1\u8D77\u7AEF 3.5%
  gl_FragColor = vec4(col, clamp(alpha, 0.0, 1.0) * 0.94);
}
`,Sv=`
varying vec2 vUv;
varying vec3 vW;
void main(){
  vUv = uv;
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vW = wp.xyz;
  gl_Position = projectionMatrix * viewMatrix * wp;
}
`,Tv=`
precision highp float;
uniform float uTime;
uniform vec3 uFoam, uShallow, uSunColor;
uniform float uNight;
varying vec2 vUv;
varying vec3 vW;
${Yf}
void main(){
  float t = uTime;
  float u = vUv.x;
  float v = vUv.y;              // 0 \u9876 \u2192 1 \u5E95

  // flow map \u5957\u8DEF:\u4E24\u5C42\u4E0D\u540C\u901F\u5EA6\u7684\u5377\u52A8 + \u4E00\u5C42\u6A2A\u5411\u6D41\u573A(\u8BA9\u4E1D\u7F15\u5DE6\u53F3\u6E38\u8D70,\u4E0D\u662F\u7B14\u76F4\u4E0B\u5782)
  float flow = vnoise(vec2(v * 3.4 - t * 0.8, u * 2.0 + 4.0)) - 0.5;
  float uu = u + flow * 0.085 * smoothstep(0.0, 0.35, v);
  vec2 q = vec2(uu * 9.0, v * 4.2 - t * 1.55);
  float s1 = vnoise(q);
  float s2 = vnoise(q * vec2(2.3, 1.0) + vec2(11.0, -t * 2.3));
  float streak = smoothstep(0.28, 0.92, s1 * 0.60 + s2 * 0.60);
  float thread = smoothstep(0.55, 1.0, vnoise(vec2(uu * 26.0, v * 2.2 - t * 2.9)));

  float edge = smoothstep(0.0, 0.20, u) * smoothstep(1.0, 0.80, u);
  float head = smoothstep(0.0, 0.035, v) * (0.65 + 0.35 * smoothstep(0.0, 0.12, v));
  float tail = smoothstep(1.0, 0.34, v);

  vec3 col = mix(uShallow * 0.85, uFoam, 0.18 + 0.62 * streak + 0.25 * thread);
  col += uSunColor * (0.06 + 0.24 * streak) * (1.0 - uNight * 0.45);

  float a = edge * head * tail * (0.14 + 0.56 * streak + 0.30 * thread);
  a *= 0.66;
  gl_FragColor = vec4(col, a);
}
`;function wv(i,e){let{lake:t}=i,n=t.r*1.32,s=96,r=256,o=[],a=[],l=[],c=[],h=[];for(let _=0;_<=s;_++){let m=_/s*n;for(let p=0;p<=r;p++){let v=p/r*Math.PI*2,y=t.x+Math.cos(v)*m,M=t.z+Math.sin(v)*m;o.push(y,t.y,M);let P=i.heightAt(y,M);a.push(Math.max(0,t.y-P)),l.push(1),c.push(p/r,_/s)}}for(let _=0;_<s;_++)for(let m=0;m<r;m++){let p=_*(r+1)+m,v=p+1,y=p+r+1,M=y+1;h.push(p,y,v,v,y,M)}let u=new Ye;u.setAttribute("position",new Le(o,3)),u.setAttribute("aDepth",new Le(a,1)),u.setAttribute("aEdge",new Le(l,1)),u.setAttribute("uv",new Le(c,2)),u.setIndex(h),u.computeVertexNormals();let f={...e,uFlow:{value:.22},uFlowMode:{value:0},uEndFade:{value:0}},d=new at({uniforms:f,vertexShader:qf,fragmentShader:Kf,transparent:!0,depthWrite:!1,side:nt}),g=new Ne(u,d);return g.name="lake",g.renderOrder=2,g}function Av(i,e){let t=i.pts,n=i.N,s=[],r=[],o=[],a=[],l=[];for(let d=0;d<=n;d++){let g=t[d],_=t[Math.max(0,d-1)],m=t[Math.min(n,d+1)],p=m.x-_.x,v=m.z-_.z,y=Math.hypot(p,v)||1;p/=y,v/=y;let M=-v,P=p,w=i.width*(1+.28*ht(.7,1,d/n));for(let T of[-1,0,1]){let I=g.x+M*w*T,U=g.z+P*w*T;s.push(I,g.y,U),r.push(T===0?.26:.055),o.push(T===0?1:0),a.push(T*.5+.5,d/n)}}for(let d=0;d<n;d++)for(let g=0;g<2;g++){let _=d*3+g,m=_+1,p=(d+1)*3+g,v=p+1;l.push(_,p,m,m,p,v)}let c=new Ye;c.setAttribute("position",new Le(s,3)),c.setAttribute("aDepth",new Le(r,1)),c.setAttribute("aEdge",new Le(o,1)),c.setAttribute("uv",new Le(a,2)),c.setIndex(l),c.computeVertexNormals();let h={...e,uFlow:{value:1},uFlowMode:{value:1},uEndFade:{value:i.endFade||0}},u=new at({uniforms:h,vertexShader:qf,fragmentShader:Kf,transparent:!0,depthWrite:!1,side:nt}),f=new Ne(c,u);return f.name="river",f.renderOrder=2,f}function Rv(i,e){let n=[],s=[],r=[];for(let c=0;c<=56;c++){let h=c/56,u=i.y+(i.bottomY-i.y)*Math.pow(h,1.22),f=i.width*(1+1.35*Math.pow(h,1.4)),d=.34*Math.pow(h,1.6),g=i.x+i.dx*d+Math.sin(h*3.1)*.045,_=i.z+i.dz*d+Math.cos(h*2.4)*.045,m=-i.dz,p=i.dx;for(let v of[-1,1])n.push(g+m*f*v,u,_+p*f*v),s.push(v<0?0:1,h)}for(let c=0;c<56;c++){let h=c*2;r.push(h,h+2,h+1,h+1,h+2,h+3)}let o=new Ye;o.setAttribute("position",new Le(n,3)),o.setAttribute("uv",new Le(s,2)),o.setIndex(r),o.computeVertexNormals();let a=new at({uniforms:{uTime:e.uTime,uFoam:e.uFoam,uShallow:e.uShallow,uSunColor:e.uSunColor,uNight:e.uNight},vertexShader:Sv,fragmentShader:Tv,transparent:!0,depthWrite:!1,side:nt}),l=new Ne(o,a);return l.name="waterfall",l.renderOrder=3,l}var Xf=!1;function Zf(i,e,t=null){let n=bv();Wf(n,e);let s=new it;s.name="water";let r=wv(i,n);s.add(r);let o=i.rivers.map((l,c)=>{let h=Av({...l,endFade:c===0?1:2},n);return s.add(h),h}),a=Rv(i.fall,n);return s.add(a),{group:s,lake:r,rivers:o,fall:a,uniforms:n,update(l,c){n.uTime.value=l,Wf(n,c)},renderReflection(l,c){if(!(!t||Xf)){try{t.render(l,c)}catch(h){Xf=!0,console.error("[water] \u5E73\u9762\u53CD\u5C04\u5DF2\u5173\u95ED:",h);return}n.uReflect.value=t.target.texture,n.uTexMatrix.value.copy(t.textureMatrix)}},resizeReflection(l,c){t&&t.resize(l,c)}}}function Qn(i,e){let t=i.index?i.toNonIndexed():i.clone();if(t.getAttribute("normal")||t.computeVertexNormals(),t.getAttribute("uv")||t.setAttribute("uv",new Xe(new Float32Array(t.getAttribute("position").count*2),2)),!t.getAttribute("color")){let n=t.getAttribute("position").count,s=new Float32Array(n*3),r=e instanceof z?e:new z(e);for(let o=0;o<n;o++)s[o*3]=r.r,s[o*3+1]=r.g,s[o*3+2]=r.b;t.setAttribute("color",new Xe(s,3))}for(let n of Object.keys(t.attributes))["position","normal","color","uv"].includes(n)||t.deleteAttribute(n);return t.morphAttributes={},t}function Vt(i){let e=0;for(let l of i)e+=l.getAttribute("position").count;let t=new Float32Array(e*3),n=new Float32Array(e*3),s=new Float32Array(e*3),r=new Float32Array(e*2),o=0;for(let l of i){let c=l.getAttribute("position"),h=l.getAttribute("normal"),u=l.getAttribute("color"),f=l.getAttribute("uv");t.set(c.array,o*3),n.set(h.array,o*3),s.set(u.array,o*3),r.set(f.array,o*2),o+=c.count}let a=new Ye;return a.setAttribute("position",new Xe(t,3)),a.setAttribute("normal",new Xe(n,3)),a.setAttribute("color",new Xe(s,3)),a.setAttribute("uv",new Xe(r,2)),a.computeBoundingSphere(),a}function ye(i,e,t,{pos:n=[0,0,0],rot:s=[0,0,0],scale:r=[1,1,1]}={}){let o=new He,a=new Nt().setFromEuler(new jt(s[0],s[1],s[2]));return o.compose(new A(...n),a,new A(...r)),e.applyMatrix4(o),i.push(Qn(e,t)),i}var qy=new z("#4f7d46"),Cv=new z("#6b9a52"),Pv=new z("#3d6b45"),Eh=new z("#5b4a3c"),Iv=new z("#2f5f52"),Dv=new z("#f3bccb"),Lv=new z("#7fa05a"),Nv=new z("#5e7a45"),Uv=new z("#9fbe6a"),jf=[[1,1,.86],[.8,.98,.78],[.7,.86,.92],[1.14,1.06,.72],[.92,.9,.94],[1.06,.86,.8]],Fv=new z("#8a8580"),Ov=new z("#5f5c5e");function er(i,e,t,n){let s=zn(n),r=i.getAttribute("position"),o=new A;for(let a=0;a<r.count;a++){o.fromBufferAttribute(r,a);let l=1+e*Ut(s,o.x*t+3,o.z*t-2,2);r.setXYZ(a,o.x*l,o.y*(1+e*.6*Ut(s,o.z*t,o.y*t,2)),o.z*l)}return i.computeVertexNormals(),i}function Ur(i,e,t,n,s){let r=i.getAttribute("position"),o=i.getAttribute("color"),a=new z;for(let l=0;l<r.count;l++){let c=ri((r.getY(l)-n)/(s-n||1),0,1);a.copy(e).lerp(t,c*c),o.setXYZ(l,o.getX(l)*a.r,o.getY(l)*a.g,o.getZ(l)*a.b)}return i}function Bv(i){let e=[];ye(e,new tt(.012,.021,.22,6),Eh,{pos:[0,.11,0]});let t=[[.15,.118],[.212,.098],[.268,.076],[.316,.05]];for(let[s,r]of t){let o=new lt(r,10,7);er(o,.12,7,Math.floor(i()*1e6)),ye(e,o,Iv,{pos:[(i()-.5)*.05,s,(i()-.5)*.05],scale:[1.15,.3,1.15],rot:[0,i()*3,0]})}let n=Vt(e);return Ur(n,new z("#1d3a33"),new z("#8fc0a0"),.06,.36)}function Hv(i){let e=[],t=15+(i()*9|0);for(let s=0;s<t;s++){let r=i()*Math.PI*2,o=i()*.075,a=Math.cos(r)*o,l=Math.sin(r)*o,c=.4+i()*.34,h=(i()-.5)*.12,u=(i()-.5)*.1,f=3;for(let _=0;_<f;_++){let m=_/f,p=(_+1)/f,v=c*m,y=c*p,M=P=>h*P*P;ye(e,new tt(.0048,.0062,y-v,5),Lv,{pos:[a+M((m+p)/2),(v+y)/2,l+u*(m+p)/2],rot:[0,0,0]}),ye(e,new tt(.0066,.0066,.007,5),Nv,{pos:[a+M(p),y,l+u*p]})}let d=a+h,g=l+u;for(let _=0;_<3;_++){let m=_/3*Math.PI*2+i();ye(e,new Rt(.078,.005,.02),Uv,{pos:[d+Math.cos(m)*.034,c+.008-_*.007,g+Math.sin(m)*.034],rot:[0,-m,.28+_*.08]})}}let n=Vt(e);return Ur(n,new z("#3c5a38"),new z("#b6cd86"),.05,.72)}function zv(i){let e=[];ye(e,new tt(.013,.02,.15,6),Eh,{pos:[0,.075,0]});let t=[[0,.245,0,.125,.95],[.062,.205,.03,.086,.9],[-.055,.215,-.04,.09,.9],[.008,.305,-.01,.072,.85]];for(let[s,r,o,a,l]of t){let c=new si(a,1);er(c,.12,7,Math.floor(i()*1e6)),ye(e,c,Dv,{pos:[s,r,o],scale:[1,l,1]})}let n=Vt(e);return Ur(n,new z("#8a5a63"),new z("#ffd8e2"),.1,.4)}function kv(i){let e=[];ye(e,new tt(.014,.024,.16,6,1),Eh,{pos:[0,.08,0]});let t=[[.2,.105,.24],[.34,.082,.21],[.45,.056,.19]];for(let s=0;s<t.length;s++){let[r,o,a]=t[s],l=new At(o,a,12,1);er(l,.05,6,Math.floor(i()*1e6)),ye(e,l,Pv,{pos:[0,r+a*.28,0],rot:[0,i()*3,0]})}let n=Vt(e);return Ur(n,new z("#24402f"),new z("#8fb877"),.12,.62)}function Vv(i){let e=[];for(let n=0;n<3;n++){let s=.055+i()*.035,r=new si(s,1);er(r,.16,8,Math.floor(i()*1e6)),ye(e,r,Cv,{pos:[(i()-.5)*.09,.035+s*.75,(i()-.5)*.09],scale:[1,.78,1]})}let t=Vt(e);return Ur(t,new z("#26401f"),new z("#a8cc7d"),0,.16)}function Gv(i){let e=[];for(let n=0;n<4;n++){let s=n/4*Math.PI*2+i()*.9,r=.032+i()*.03,o=.007+i()*.004,a=.014+i()*.016,l=Math.cos(s),c=Math.sin(s),h=-c,u=l,f=(i()-.5)*.028,d=(i()-.5)*.028,g=[f+h*o,0,d+u*o],_=[f-h*o,0,d-u*o],m=[f+l*a,r,d+c*a],p=new Ye;p.setAttribute("position",new Le([...g,..._,...m],3)),p.setAttribute("normal",new Le([0,1,0,0,1,0,0,1,0],3)),p.setAttribute("uv",new Le([0,0,1,0,.5,1],2));let v=new z("#40632f"),y=new z("#b7d97e"),M=[];for(let[P,w]of[[0,v],[0,v],[1,y]])M.push(w.r,w.g,w.b);p.setAttribute("color",new Le(M,3)),e.push(Qn(p,v))}return Vt(e)}function Wv(i){let e=new si(.075,1);er(e,.22,7,Math.floor(i()*1e6));let t=[Qn(e,Fv)],n=new si(.04,0);return er(n,.4,15,Math.floor(i()*1e6)),ye(t,n,Ov,{pos:[.06,.01,.03],rot:[.4,1.2,.2]}),Vt(t)}function Xv(){let i=[];for(let e=0;e<4;e++){let t=e/4*Math.PI*2;ye(i,new si(.0085,0),new z("#ffffff"),{pos:[Math.cos(t)*.016,.012+e%2*.008,Math.sin(t)*.016]})}return Vt(i)}function Wi(i,e,t,{cast:n=!0,receive:s=!0}={}){let r=new dn(i,e,t.length),o=new He,a=new Nt,l=new A,c=new A,h=new z;for(let u=0;u<t.length;u++){let f=t[u];c.set(f.x,f.y,f.z),a.setFromEuler(new jt(f.rx||0,f.ry||0,f.rz||0)),l.set(f.s*(f.sx||1),f.s*(f.sy||1),f.s*(f.sz||1)),o.compose(c,a,l),r.setMatrixAt(u,o),f.tint&&(h.setRGB(f.tint[0],f.tint[1],f.tint[2]),r.setColorAt(u,h))}return r.instanceMatrix.needsUpdate=!0,r.instanceColor&&(r.instanceColor.needsUpdate=!0),r.castShadow=n,r.receiveShadow=s,r.frustumCulled=!1,r}function $f(i,e={}){let t=e.exclude||[],n=(te,X)=>t.some(he=>Math.hypot(te-he.x,X-he.z)<he.r),s=fs(9137),r=zn(4242),o=zn(8181),a=i.lake;function l(te,X){let he=rn(Ut(r,te*.6,X*.6,3)),G=ht(.4,.76,he),ie=i.lakeDist(te,X);return G*=ht(a.r*.95,a.r*1.8,ie),G}let c={coast:0,water:0,high:0,slope:0,channel:0,density:0,spacing:0,ok:0},h={pine:[],conifer:[],shrub:[],blossom:[]},u=[],f=660;for(let te=0;te<14e4&&u.length<f;te++){let X=s()*Math.PI*2,he=Math.sqrt(s())*4.62,G=Math.cos(X)*he,ie=Math.sin(X)*he;if(n(G,ie))continue;if(Math.hypot(G,ie)>i.coastR(G,ie)-.13){c.coast++;continue}let Ee=i.sampleY(G,ie);if(Ee<a.y+.03){c.water++;continue}if(Ee>1.55){c.high++;continue}if(i.slopeFast(G,ie)>1.75){c.slope++;continue}if(i.channel(G,ie).d<.36){c.channel++;continue}let de=Math.max(l(G,ie),ht(.8,1.3,Ee)*.45);if(s()>de*.95){c.density++;continue}let V=!0;for(let oe of u){let ve=oe[0]-G,Re=oe[1]-ie;if(ve*ve+Re*Re<.058){V=!1;break}}if(!V){c.spacing++;continue}c.ok++,u.push([G,ie,Ee]);let ne=s(),ge=jf[s()*jf.length|0],me=.8+s()*.45,Ae=[ge[0]*me,ge[1]*me,ge[2]*me];ne<.15?h.blossom.push({x:G,y:Ee-.02,z:ie,s:1.4+s()*.7,ry:s()*6.28,tint:Ae}):Ee>1.05&&ne<.52?h.conifer.push({x:G,y:Ee-.02,z:ie,s:1+s()*.7,ry:s()*6.28,tint:Ae}):ne<.66?h.shrub.push({x:G,y:Ee-.01,z:ie,s:1.2+s()*1,ry:s()*6.28,tint:Ae}):h.pine.push({x:G,y:Ee-.02,z:ie,s:1.35+s()*.9,ry:s()*6.28,sx:.92+s()*.2,sz:.92+s()*.2,tint:Ae})}let d=[],g=12e3;for(let te=0;te<9e4&&d.length<g;te++){let X=s()*Math.PI*2,he=Math.sqrt(s())*4.55,G=Math.cos(X)*he,ie=Math.sin(X)*he;if(n(G,ie)||Math.hypot(G,ie)>i.coastR(G,ie)-.015)continue;let Ee=i.sampleY(G,ie);if(Ee<a.y+.035||Ee>1.35||i.slopeFast(G,ie)>1.5||i.channel(G,ie).d<.3)continue;let de=1-.72*l(G,ie),V=.45+.55*rn(Ut(o,G*2.3,ie*2.3,3)),ne=1+1.6*ht(.55,.05,i.coastR(G,ie)-Math.hypot(G,ie));s()>Math.min(1,de*V*ne)||d.push({x:G,y:Ee-.004,z:ie,s:.75+s()*.6,ry:s()*6.28,tint:[.82+s()*.45,.88+s()*.3,.72+s()*.34]})}let _=[],m=zn(6161);for(let te=0;te<24e3&&_.length<58;te++){let X=s()*Math.PI*2,he=Math.sqrt(s())*3.95,G=Math.cos(X)*he,ie=Math.sin(X)*he;if(n(G,ie))continue;let Ee=i.sampleY(G,ie);if(Ee<a.y+.05||Ee>1.25||i.slopeFast(G,ie)>1.25||i.channel(G,ie).d<.45||rn(Ut(m,G*.78+13,ie*.78-7,3))<.53)continue;let de=!0;for(let V of _)if((V.x-G)**2+(V.z-ie)**2<.075){de=!1;break}de&&_.push({x:G,y:Ee-.012,z:ie,s:.85+s()*.42,ry:s()*6.28,tint:[.9+s()*.2,.92+s()*.18,.84+s()*.2]})}let p=[];for(let te=0;te<18e3&&p.length<110;te++){let X=s()*Math.PI*2,he=Math.sqrt(s())*4.5,G=Math.cos(X)*he,ie=Math.sin(X)*he,Ee=i.sampleY(G,ie);if(Ee<a.y-.02||i.channel(G,ie).d<.26)continue;let de=i.slopeFast(G,ie),V=ht(.75,1.5,Ee);if(s()>.1+V*.32+de*.05)continue;let ne=Ee>1?.5+s()*1.1:.5+s()*1.3;p.push({x:G,y:Ee-.01,z:ie,s:ne,rx:s()*.7,ry:s()*6.28,rz:s()*.7,tint:[.8+s()*.4,.8+s()*.4,.82+s()*.35]})}let v=[],y=["#f4e7c8","#f0c6d8","#d8c8f2","#ffe9a8","#f6d2c0"];for(let te=0;te<22e3&&v.length<300;te++){let X=s()*Math.PI*2,he=Math.sqrt(s())*4.35,G=Math.cos(X)*he,ie=Math.sin(X)*he,Ee=i.sampleY(G,ie);if(Ee<a.y+.06||Ee>1||i.slopeFast(G,ie)>.9||i.channel(G,ie).d<.34||l(G,ie)>.45)continue;let de=new z(y[s()*y.length|0]);v.push({x:G,y:Ee,z:ie,s:.7+s()*.7,ry:s()*6.28,tint:[de.r,de.g,de.b]})}let M=new Mt({vertexColors:!0,roughness:.82,metalness:0,envMapIntensity:.62}),P=new Mt({vertexColors:!0,roughness:.9,metalness:0,side:nt,envMapIntensity:.4}),w=new Mt({vertexColors:!0,roughness:.95,metalness:0,flatShading:!0,envMapIntensity:.35}),T=new Mt({vertexColors:!0,roughness:.6,metalness:0,emissive:new z(1709064),emissiveIntensity:.35,envMapIntensity:.5}),I=new it;I.name="flora";let U=Wi(Bv(s),M,h.pine),x=Wi(zv(s),M,h.blossom),E=Wi(kv(s),M,h.conifer),D=Wi(Vv(s),M,h.shrub),O=Wi(Gv(s),P,d,{cast:!1}),H=Wi(Hv(s),M,_),J=Wi(Wv(s),w,p),q=Wi(Xv(),T,v,{cast:!1});return U.name="trees-pine",x.name="trees-blossom",E.name="trees-conifer",D.name="shrubs",O.name="grass",H.name="bamboo",J.name="rocks",q.name="flowers",I.add(U,x,E,D,H,O,J,q),{group:I,rej:c,counts:{pine:h.pine.length,blossom:h.blossom.length,conifer:h.conifer.length,shrub:h.shrub.length,grass:d.length,bamboo:_.length,rocks:p.length,flowers:v.length}}}var bh=new z("#b4885d"),Jf=new z("#7d5c3f"),Sh=new z("#e6d8c0"),pa=new z("#cfbfa8"),$y=new z("#efece2"),Jy=new z("#cfd3d8"),Qy=new z("#a8adb6");function Yv(){let i=[];ye(i,new lt(.072,12,9),bh,{pos:[0,.135,0],scale:[1.45,.95,.9]}),ye(i,new tt(.024,.032,.1,7),bh,{pos:[.088,.192,0],rot:[0,0,-.62]}),ye(i,new lt(.034,10,8),bh,{pos:[.128,.232,0],scale:[1.15,.92,.86]});for(let e of[-1,1])ye(i,new At(.012,.042,6),Jf,{pos:[.118,.262,.026*e],rot:[.5*e,0,-.25]});for(let e of[-1,1])ye(i,new tt(.004,.0055,.075,5),Sh,{pos:[.132,.285,.017*e],rot:[.22*e,0,-.32]}),ye(i,new tt(.003,.004,.042,5),Sh,{pos:[.155,.315,.03*e],rot:[.5*e,0,.55]});for(let e of[-1,1])for(let t of[-1,1])ye(i,new tt(.0105,.0085,.118,6),Jf,{pos:[.052*e,.059,.036*t]});return ye(i,new At(.016,.045,6),Sh,{pos:[-.108,.152,0],rot:[0,0,1.9]}),Vt(i)}function qv(){let i=[];ye(i,new lt(.03,10,8),pa,{pos:[0,.03,0],scale:[1.25,.95,.92]}),ye(i,new lt(.021,9,7),pa,{pos:[.032,.048,0]});for(let e of[-1,1])ye(i,new At(.0085,.04,6),pa,{pos:[.03,.076,.012*e],rot:[.16*e,0,-.16]}),ye(i,new lt(.013,7,6),pa,{pos:[-.031,.024,.014*e]});return Vt(i)}function Kv(){let i=[],e=new z("#f6f7f2"),t=new z("#2b2f36"),n=new z("#c0392b"),s=new z("#4a4a4e");ye(i,new lt(.03,12,9),e,{scale:[2.05,.78,.72]}),ye(i,new tt(.0085,.012,.055,7),e,{pos:[.058,.03,0],rot:[0,0,-.85]}),ye(i,new tt(.0072,.0085,.05,7),e,{pos:[.079,.068,0],rot:[0,0,-.22]}),ye(i,new lt(.0135,10,8),e,{pos:[.083,.094,0],scale:[1.25,.95,.9]}),ye(i,new lt(.0062,8,6),n,{pos:[.082,.104,0]}),ye(i,new At(.0045,.026,6),t,{pos:[.101,.092,0],rot:[0,0,-1.57]});for(let r of[-1,1])ye(i,new tt(.0026,.0022,.085,5),s,{pos:[-.062,-.012,.012*r],rot:[0,0,1.32]}),ye(i,new tt(.0021,.0018,.04,5),s,{pos:[-.104,-.02,.014*r],rot:[0,0,1.57]});for(let r of[-1,1]){let o=new Ye,a=[.022,.006,.014*r],l=[-.03,.002,.016*r],c=[-.048,.034,.125*r],h=[.006,.038,.115*r];o.setAttribute("position",new Le([...a,...l,...c,...a,...c,...h],3)),o.setAttribute("normal",new Le([0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0],3)),o.setAttribute("uv",new Le([0,0,1,0,1,1,0,0,1,1,0,1],2)),i.push(Qn(o,e));let u=new Ye,f=[-.048,.034,.125*r],d=[.006,.038,.115*r],g=[-.02,.04,.17*r],_=[.004,.042,.16*r];u.setAttribute("position",new Le([...f,...d,...g,...d,..._,...g],3)),u.setAttribute("normal",new Le([0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0],3)),u.setAttribute("uv",new Le([0,0,1,0,1,1,0,0,1,1,0,1],2)),i.push(Qn(u,t))}return Vt(i)}function Th(i,e){return e>0?-(i+Math.PI/2):-(i-Math.PI/2)}function Qf(i,e,t){let n=new dn(i,e,t.length);return n.frustumCulled=!1,n.castShadow=!0,n.receiveShadow=!0,n}function ed(i,e={}){let t=fs(20260214),n=e.obstacles||[],s=(U,x)=>{for(let E of n){let D=U-E.x,O=x-E.z,H=Math.hypot(D,O);if(H<E.r){if(H<1e-4)return[E.x+E.r,x];let J=E.r/H;return[E.x+D*J,E.z+O*J]}}return[U,x]},r=new it;r.name="fauna";let o=new Mt({vertexColors:!0,roughness:.78,metalness:0,envMapIntensity:.45}),a=[{cx:1.82,cz:.92,r:.58,spd:.16,n:3,dir:1},{cx:-.38,cz:1.34,r:.5,spd:-.13,n:2,dir:-1}],l=[];for(let U of a)for(let x=0;x<U.n;x++)l.push({...U,phase:x/U.n*Math.PI*2+t()*.6,rr:U.r*(.72+t()*.5),scale:.52+t()*.14,speedJit:.85+t()*.3});let c=Qf(Yv(),o,l);c.name="deer",r.add(c);let h=[],u=[{cx:2.62,cz:-.06,r:.48},{cx:-.7,cz:.32,r:.4},{cx:1.47,cz:1.98,r:.44}];for(let U of u)for(let x=0;x<3;x++)h.push({...U,phase:t()*Math.PI*2,rr:U.r*(.6+t()*.6),scale:.5+t()*.22,speed:(.36+t()*.3)*(t()>.5?1:-1),hopJit:t()*6.28});let f=Qf(qv(),o,h);f.name="rabbits",r.add(f);let d={value:0},g=new Mt({vertexColors:!0,roughness:.7,metalness:0,envMapIntensity:.5});g.onBeforeCompile=U=>{U.uniforms.uTime=d,U.vertexShader=`uniform float uTime;
attribute float aPhase;
`+U.vertexShader,U.vertexShader=U.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
       float flap = sin(uTime * 5.4 + aPhase * 6.2831);
       float w = clamp(abs(position.z) / 0.170, 0.0, 1.0);
       // \u7FFC\u6CBF \xB1z \u5C55\u5F00,\u7ED5\u8EAB\u4F53\u8F74(x)\u4E0A\u4E0B\u6247;\u4E0A\u6325\u65F6\u7565\u5FAE\u6536\u62E2
       transformed.y += flap * w * w * 0.115;
       transformed.z -= sign(position.z) * abs(flap) * w * 0.012;`)},g.customProgramCacheKey=()=>"bird-flap";let _=16,m=Kv(),p=new Float32Array(_);for(let U=0;U<_;U++)p[U]=t();m.setAttribute("aPhase",new Fn(p,1));let v=new dn(m,g,_);v.frustumCulled=!1,v.name="cranes",r.add(v);let y=[];for(let U=0;U<_;U++)y.push({r:1.9+t()*1.7,y:2.95+t()*1.35,spd:(.1+t()*.1)*(t()>.35?1:-1),phase:t()*Math.PI*2,bob:.1+t()*.16,scale:.8+t()*.3,cx:(t()-.5)*.6,cz:(t()-.5)*.6});let M=new He,P=new Nt,w=new jt,T=new A,I=new A;return{group:r,update(U,x){d.value=U;for(let E=0;E<l.length;E++){let D=l[E],O=D.phase+U*D.spd*D.speedJit*6,H=D.cx+Math.cos(O)*D.rr,J=D.cz+Math.sin(O)*D.rr;[H,J]=s(H,J);let q=i.sampleY(H,J),te=Math.sin(U*2.6+D.phase)*.004;T.set(H,q-.022+te,J),w.set(0,Th(O,Math.sign(D.spd)||1),0),P.setFromEuler(w),I.setScalar(D.scale),M.compose(T,P,I),c.setMatrixAt(E,M)}c.instanceMatrix.needsUpdate=!0;for(let E=0;E<h.length;E++){let D=h[E],O=D.phase+U*D.speed*.55,H=D.cx+Math.cos(O)*D.rr,J=D.cz+Math.sin(O)*D.rr;[H,J]=s(H,J);let q=i.sampleY(H,J),te=Math.max(0,Math.sin(U*5.2+D.hopJit))*.022;T.set(H,q-.016+te,J),w.set(-te*5,Th(O,Math.sign(D.speed)||1),0),P.setFromEuler(w),I.setScalar(D.scale),M.compose(T,P,I),f.setMatrixAt(E,M)}f.instanceMatrix.needsUpdate=!0;for(let E=0;E<_;E++){let D=y[E],O=D.phase+U*D.spd*1.6,H=D.cx+Math.cos(O)*D.r,J=D.cz+Math.sin(O)*D.r,q=D.y+Math.sin(U*1.3+D.phase*3)*D.bob;T.set(H,q,J),w.set(0,Th(O,Math.sign(D.spd)||1),Math.sin(U*1.3+D.phase*3)*.12),P.setFromEuler(w),I.setScalar(D.scale),M.compose(T,P,I),v.setMatrixAt(E,M)}v.instanceMatrix.needsUpdate=!0}}}var Zv=`
attribute float aTint;
attribute float aSeed;
varying vec2 vUv;
varying float vTint;
varying float vSeed;
void main(){
  vUv = uv;
  vTint = aTint;
  vSeed = aSeed;
  vec3 center = instanceMatrix[3].xyz;
  float scl = length(instanceMatrix[0].xyz);
  // \u4E16\u754C\u7A7A\u95F4\u7684\u76F8\u673A\u57FA\u5411\u91CF \u2192 billboard
  vec3 cr = vec3(viewMatrix[0][0], viewMatrix[1][0], viewMatrix[2][0]);
  vec3 cu = vec3(viewMatrix[0][1], viewMatrix[1][1], viewMatrix[2][1]);
  vec3 world = center + (cr * position.x + cu * position.y) * scl;
  gl_Position = projectionMatrix * viewMatrix * vec4(world, 1.0);
}
`,jv=`
precision highp float;
uniform sampler2D uMap;
uniform vec3 uLit;
uniform vec3 uShade;
uniform float uOpacity;
varying vec2 vUv;
varying float vTint;
varying float vSeed;
void main(){
  // \u53EA\u65CB\u8F6C\u4E0D\u7F29\u653E:\u6574\u5F20 puff \u90FD\u8981\u91C7\u5230,\u4E0D\u7136\u5E73\u9762\u8FB9\u7F18\u7684 alpha \u4E0D\u4E3A 0 \u2192 \u9732\u51FA\u65B9\u5F62
  vec2 p = vUv - 0.5;
  float ang = vSeed * 6.2831;
  float cs = cos(ang), sn = sin(ang);
  vec2 uv = clamp(mat2(cs, -sn, sn, cs) * p + 0.5, 0.0, 1.0);
  float a = texture2D(uMap, uv).a * uOpacity;
  if (a < 0.004) discard;
  vec3 col = mix(uShade, uLit, clamp(vTint, 0.0, 1.0));
  gl_FragColor = vec4(col, a);
}
`;function $v(i){return .45+.55*i.dayFactor}function Jv(i,e){let t=[{x:-3.05,y:3.95,z:-.3,s:1.5,n:12,spd:.03,rad:1.45},{x:3.25,y:4.15,z:1.6,s:1.3,n:12,spd:-.024,rad:1.2},{x:-3.6,y:2.6,z:2.15,s:1.05,n:10,spd:.036,rad:1.15},{x:2.25,y:3.1,z:-3.15,s:1,n:10,spd:-.03,rad:1.1},{x:1.55,y:4.72,z:-1.05,s:1,n:9,spd:.024,rad:.85},{x:-1.05,y:4.55,z:3.3,s:.9,n:9,spd:-.02,rad:.95},{x:4.2,y:2.25,z:-2.55,s:.8,n:8,spd:.042,rad:.85},{x:-4.3,y:1.95,z:-1.6,s:.72,n:8,spd:.028,rad:.7}],n=[];for(let _=0;_<t.length;_++){let m=t[_];for(let p=0;p<m.n;p++){let v=i()*2-1,y=i()*Math.PI*2,M=Math.pow(i(),.55),P=Math.sqrt(1-v*v),w=Math.cos(y)*P*M,T=Math.sin(y)*P*M*.62,I=v*M*.34,U=m.s*(.78+i()*.55)*(1-.22*M);n.push({cloud:_,ox:w*m.s*1.05,oy:I*m.s*.62,oz:T*m.s*1.05,rad:U,tint:Math.min(1,.34+.78*(.5+I*.9)+i()*.14),seed:i(),phase:i()*6.28})}}let s=new nn(1,1),r=new Float32Array(n.length),o=new Float32Array(n.length);n.forEach((_,m)=>{r[m]=_.tint,o[m]=_.seed}),s.setAttribute("aTint",new Fn(r,1)),s.setAttribute("aSeed",new Fn(o,1));let a=new at({uniforms:{uMap:{value:fa(256,31,1,.42,.7)},uLit:{value:new z("#ffffff")},uShade:{value:new z("#5b6a86")},uOpacity:{value:.2}},vertexShader:Zv,fragmentShader:jv,transparent:!0,depthWrite:!1,blending:Zn}),l=new dn(s,a,n.length);l.frustumCulled=!1,l.renderOrder=4,l.name="clouds",e.add(l);let c=new He,h=new A,u=new z,f=new z,d=new z("#ffffff"),g=new z("#20263a");return{mesh:l,mat:a,update(_,m){for(let p=0;p<n.length;p++){let v=n[p],y=t[v.cloud],M=y.spd*_*2+v.cloud*1.37,P=Math.sin(_*.26+v.cloud*1.7+v.phase*.15)*.1;h.set(y.x+Math.cos(M)*y.rad+v.ox,y.y+P+v.oy,y.z+Math.sin(M*.83+v.cloud*2)*y.rad+v.oz),c.makeScale(v.rad,v.rad,v.rad),c.setPosition(h),l.setMatrixAt(p,c)}l.instanceMatrix.needsUpdate=!0,u.copy(m.sun).lerp(d,.7).multiplyScalar(.55+.55*m.dayFactor),f.copy(m.hemiSky).lerp(g,.3).multiplyScalar(.72+.34*$v(m)),a.uniforms.uLit.value.copy(u),a.uniforms.uShade.value.copy(f)}}}function td(i,e){let t=fs(777777),n=new it;n.name="atmos";let s=Jv(t,n),r=fa(256,91,1,.85,1),o=[],a=(de,V,ne,ge,me,Ae={})=>{let oe=new Ne(new nn(ge,ge),new wt({map:r,transparent:!0,opacity:.3,depthWrite:!1,blending:Zn,side:nt,color:14674677}));return oe.position.set(de,V,ne),oe.rotation.x=-Math.PI/2,oe.rotation.z=me,oe.renderOrder=5,oe.userData={baseOpacity:Ae.baseOpacity??.22,spin:Ae.spin??.02,billboard:!1,y:V,bobAmp:Ae.bobAmp??.03,bobPhase:t()*6.28},o.push(oe),n.add(oe),oe},l=i.lake,c=fa(512,707,1,.75,1.6),h=[],u=[[-1.95,9.4,.3,.01],[-2.55,9.2,.38,-.007],[-3.15,8,.34,.013],[-3.75,8.8,.26,-.011],[-4.35,6.8,.16,.008]];for(let[de,V,ne,ge]of u){let me=new Ne(new nn(V,V),new wt({map:c,transparent:!0,opacity:ne,depthWrite:!1,blending:Zn,side:nt,color:15267570}));me.rotation.x=-Math.PI/2,me.position.set(0,de,0),me.renderOrder=4,me.userData={baseOpacity:ne,spin:ge,y:de,bobAmp:.05,bobPhase:t()*6.28},n.add(me),h.push(me)}a(0,-2.95,0,6.4,.6,{baseOpacity:.15,spin:.007,bobAmp:.045}),a(0,-3.75,0,5,2.4,{baseOpacity:.1,spin:-.01,bobAmp:.05});let f=new Ne(new nn(1.8,2.1),new wt({map:r,transparent:!0,opacity:.4,depthWrite:!1,blending:Zn,side:nt,color:15267583}));f.position.set(i.fall.x+i.fall.dx*.5,i.fall.bottomY+.85,i.fall.z+i.fall.dz*.5),f.renderOrder=6,f.userData={baseOpacity:.3,spin:0,billboard:!0,y:f.position.y,bobAmp:.06,bobPhase:1.7},o.push(f),n.add(f);let d=160,g=new Float32Array(d*3),_=new Float32Array(d),m=new Float32Array(d),p=i.fall;for(let de=0;de<d;de++){let V=t()*Math.PI*2,ne=Math.pow(t(),.6)*.42;g[de*3]=p.x+p.dx*.32+Math.cos(V)*ne,g[de*3+1]=p.bottomY+.22,g[de*3+2]=p.z+p.dz*.32+Math.sin(V)*ne,_[de]=t(),m[de]=1.6+t()*3}let v=new Ye;v.setAttribute("position",new Xe(g,3)),v.setAttribute("aPhase",new Xe(_,1)),v.setAttribute("aSize",new Xe(m,1));let y=new at({uniforms:{uTime:{value:0},uOpacity:{value:.5},uScale:{value:1},uRise:{value:.62},uMap:{value:Si(64)},uColor:{value:new z("#eaf7ff")}},vertexShader:`
      attribute float aPhase;
      attribute float aSize;
      uniform float uTime;
      uniform float uOpacity;
      uniform float uScale;
      uniform float uRise;
      varying float vA;
      void main(){
        float ph = fract(aPhase + uTime * 0.42);
        vec3 p = position;
        // \u4E0A\u5347\u540E\u88AB\u91CD\u529B\u62FD\u56DE,\u6A2A\u5411\u968F\u76F8\u4F4D\u6563\u5F00
        p.y += ph * uRise;
        float spread = ph * 0.30;
        p.x += sin(aPhase * 43.7 + uTime * 1.6) * spread;
        p.z += cos(aPhase * 27.3 + uTime * 1.4) * spread;
        vec4 mv = modelViewMatrix * vec4(p, 1.0);
        gl_Position = projectionMatrix * mv;
        float fade = smoothstep(0.0, 0.12, ph) * smoothstep(1.0, 0.55, ph);
        vA = uOpacity * fade;
        gl_PointSize = aSize * uScale * (1.0 + ph * 1.4);
      }`,fragmentShader:`
      precision highp float;
      uniform sampler2D uMap;
      uniform vec3 uColor;
      varying float vA;
      void main(){
        vec4 t = texture2D(uMap, gl_PointCoord);
        float a = t.a * vA;
        if (a < 0.004) discard;
        gl_FragColor = vec4(uColor, a);
      }`,transparent:!0,blending:fn,depthWrite:!1}),M=new Rn(v,y);M.frustumCulled=!1,M.name="fall-splash",n.add(M);let P=Ff(64,256),w=new it;w.name="light-shafts";let T=[];for(let de=0;de<4;de++){let V=de/4*Math.PI*2+.31,ne=1.5+de%3*1.05,ge=1.3+de%2*.7,me=5.2+de%4*.8,Ae=new Ne(new nn(ge,me),new wt({map:P,transparent:!0,opacity:.02,depthWrite:!1,blending:fn,side:nt}));Ae.position.set(Math.cos(V)*ne,2.6+de%3*.25,Math.sin(V)*ne),Ae.userData={a:V,base:.01+de%3*.005},w.add(Ae),T.push(Ae)}n.add(w);let I=700,U=new Float32Array(I*3),x=new Float32Array(I),E=new Float32Array(I);for(let de=0;de<I;de++)U[de*3]=(t()-.5)*10.6,U[de*3+1]=-4.2+t()*9.6,U[de*3+2]=(t()-.5)*10.6,x[de]=t(),E[de]=.7+t()*1.6;let D=new Ye;D.setAttribute("position",new Xe(U,3)),D.setAttribute("aPhase",new Xe(x,1)),D.setAttribute("aSize",new Xe(E,1));let O=new at({uniforms:{uTime:{value:0},uOpacity:{value:.4},uScale:{value:1},uMap:{value:Si(64)},uColor:{value:new z("#f6e6c8")}},vertexShader:`
      attribute float aPhase;
      attribute float aSize;
      uniform float uTime;
      uniform float uOpacity;
      uniform float uScale;
      varying float vA;
      void main(){
        vec3 p = position;
        p.y = mod(p.y + uTime * 0.05 + aPhase * 9.4 + 4.2, 9.6) - 4.4;
        p.x += sin(uTime * 0.31 + aPhase * 6.28) * 0.26;
        p.z += cos(uTime * 0.27 + aPhase * 5.11) * 0.26;
        vec4 mv = modelViewMatrix * vec4(p, 1.0);
        gl_Position = projectionMatrix * mv;
        float near = smoothstep(6.4, 0.6, length(p));
        vA = uOpacity * (0.30 + 0.70 * pow(max(0.0, sin(uTime * 1.7 + aPhase * 12.0)), 2.0)) * near;
        gl_PointSize = aSize * uScale;
      }`,fragmentShader:`
      precision highp float;
      uniform sampler2D uMap;
      uniform vec3 uColor;
      varying float vA;
      void main(){
        vec4 t = texture2D(uMap, gl_PointCoord);
        float a = t.a * vA;
        if (a < 0.004) discard;
        gl_FragColor = vec4(uColor, a);
      }`,transparent:!0,blending:fn,depthWrite:!1}),H=new Rn(D,O);H.frustumCulled=!1,H.name="dust",n.add(H);let J=120,q=new Float32Array(J*3),te=new Float32Array(J),X=new Float32Array(J);for(let de=0;de<J;de++){let V=t()*Math.PI*2,ne=Math.sqrt(t())*3.8,ge=Math.cos(V)*ne,me=Math.sin(V)*ne;q[de*3]=ge,q[de*3+1]=i.sampleY(ge,me)+.05+t()*.5,q[de*3+2]=me,te[de]=t(),X[de]=1.6+t()*2.6}let he=new Ye;he.setAttribute("position",new Xe(q,3)),he.setAttribute("aPhase",new Xe(te,1)),he.setAttribute("aSize",new Xe(X,1));let G=new at({uniforms:{uTime:{value:0},uOpacity:{value:0},uScale:{value:1},uMap:{value:Si(64)},uColor:{value:new z("#ffd98a")}},vertexShader:`
      attribute float aPhase;
      attribute float aSize;
      uniform float uTime;
      uniform float uOpacity;
      uniform float uScale;
      varying float vA;
      void main(){
        vec3 p = position;
        p.x += sin(uTime * 0.63 + aPhase * 6.28) * 0.18;
        p.y += sin(uTime * 0.87 + aPhase * 4.13) * 0.14;
        p.z += cos(uTime * 0.71 + aPhase * 5.71) * 0.18;
        vec4 mv = modelViewMatrix * vec4(p, 1.0);
        gl_Position = projectionMatrix * mv;
        float blink = pow(max(0.0, sin(uTime * 1.9 + aPhase * 21.0)), 2.4);
        vA = uOpacity * (0.10 + 0.90 * blink);
        gl_PointSize = aSize * uScale * (0.7 + 0.6 * blink);
      }`,fragmentShader:`
      precision highp float;
      uniform sampler2D uMap;
      uniform vec3 uColor;
      varying float vA;
      void main(){
        vec4 t = texture2D(uMap, gl_PointCoord);
        float a = t.a * vA;
        if (a < 0.004) discard;
        gl_FragColor = vec4(uColor, a);
      }`,transparent:!0,blending:fn,depthWrite:!1}),ie=new Rn(he,G);ie.frustumCulled=!1,ie.name="fireflies",n.add(ie);let Ee=new z("#ffffff");return{group:n,update(de,V,ne,ge){let me=ge&&ge.pixelRatio||1;s.update(de,V);for(let oe of o){let ve=oe.userData;ve.billboard&&ne?oe.quaternion.copy(ne.quaternion):ve.billboard||(oe.rotation.z=ve.spin*de),oe.position.y=ve.y+Math.sin(de*.45+ve.bobPhase)*(ve.bobAmp||.03),oe.material.opacity=ve.baseOpacity*(.3+.85*V.mist),oe.material.color.copy(V.hemiSky).lerp(Ee,.6)}for(let oe of h){let ve=oe.userData;oe.rotation.z=ve.spin*de,oe.position.y=ve.y+Math.sin(de*.22+ve.bobPhase)*ve.bobAmp,oe.material.opacity=ve.baseOpacity*(.55+.85*V.mist),oe.material.color.copy(V.hemiSky).lerp(new z("#ffffff"),.66)}let Ae=Math.atan2(V.sunDir.z,V.sunDir.x);for(let oe of T){if(ne){let ve=ne.position.x-oe.position.x,Re=ne.position.z-oe.position.z;oe.rotation.y=Math.atan2(ve,Re)+Math.sin(de*.12+oe.userData.a)*.06}oe.rotation.z=.05*Math.sin(oe.userData.a*1.7+de*.07)+(Ae-2.4)*.04,oe.material.opacity=oe.userData.base*(.2+1*V.dayFactor)*(.6+.4*Math.sin(de*.5+oe.userData.a*3)),oe.material.color.copy(V.sun).lerp(Ee,.45)}y.uniforms.uTime.value=de,y.uniforms.uOpacity.value=.3+.35*(.35+.65*V.dayFactor),y.uniforms.uScale.value=me*2.2,y.uniforms.uRise.value=.55+.25*(1-V.nightFactor),O.uniforms.uTime.value=de,O.uniforms.uOpacity.value=.06+.3*(.35+.65*V.dayFactor),O.uniforms.uScale.value=me*1.9,O.uniforms.uColor.value.copy(V.sun).lerp(Ee,.55),G.uniforms.uTime.value=de,G.uniforms.uOpacity.value=V.firefly,G.uniforms.uScale.value=me*2.6,ie.visible=V.firefly>.02}}}var je={stone:new z("#8f958c"),stoneDark:new z("#6d7269"),pillar:new z("#8e3b32"),beam:new z("#6b2b26"),roof:new z("#2f6b62"),roofRidge:new z("#1f4a44"),gold:new z("#d9a94a"),goldRoof:new z("#c9a04a"),paper:new z("#ffdca0"),rail:new z("#7e857c")};function nd(i){let e=[];ye(e,new tt(.115*1.18,.115*1.26,.026,6),je.stone,{pos:[0,.013,0]}),ye(e,new tt(.115*1.1,.115*1.18,.018,6),je.stoneDark,{pos:[0,.035,0]});for(let n=0;n<6;n++){let s=n/6*Math.PI*2+.26;ye(e,new tt(.0072,.0082,.098,6),je.pillar,{pos:[Math.cos(s)*.115,.093,Math.sin(s)*.115]}),ye(e,new tt(.0092,.0092,.006,6),je.gold,{pos:[Math.cos(s)*.115,.142,Math.sin(s)*.115]})}return ye(e,new tt(.115*1.06,.115*1.06,.012,6,1,!0),je.beam,{pos:[0,.152,0]}),ye(e,new At(.115*1.62,.052,6),je.roof,{pos:[0,.186,0],rot:[0,.26,0]}),ye(e,new At(.115*1.02,.048,6),je.roof,{pos:[0,.222,0],rot:[0,.26,0]}),ye(e,new At(.115*.52,.04,6),je.roofRidge,{pos:[0,.252,0],rot:[0,.26,0]}),ye(e,new lt(.016,8,6),je.gold,{pos:[0,.282,0]}),ye(e,new At(.008,.028,6),je.gold,{pos:[0,.302,0]}),e}function Qv(i){let e=[];ye(e,new tt(.098,.112,.028,8),je.stone,{pos:[0,.014,0]});let t=.028,n=[[.07,.105,.115],[.058,.09,.098],[.046,.076,.082]];for(let[s,r,o]of n)ye(e,new tt(s,s*1.04,r,8),je.beam,{pos:[0,t+r/2,0]}),ye(e,new At(o,.03,8),je.roof,{pos:[0,t+r+.014,0]}),ye(e,new tt(o*.96,o*.96,.006,8),je.roofRidge,{pos:[0,t+r+.002,0]}),t+=r+.03;return ye(e,new lt(.014,8,6),je.gold,{pos:[0,t+.006,0]}),ye(e,new At(.007,.034,6),je.gold,{pos:[0,t+.028,0]}),e}function ey(i,e,t=.046){let n=[],r=c=>[(c-.5)*i,Math.sin(c*Math.PI)*e],o=[],a=[];for(let c=0;c<=18;c++){let[h,u]=r(c/18);for(let f of[-1,1])o.push(h,u,t*f)}for(let c=0;c<18;c++){let h=c*2;a.push(h,h+2,h+1,h+1,h+2,h+3)}let l=new Ye;l.setAttribute("position",new Le(o,3)),l.setIndex(a),l.computeVertexNormals(),n.push(Qn(l,je.stone));for(let c of[-1,1]){let h=[],u=[];for(let d=0;d<=18;d++){let[g,_]=r(d/18),m=c*(t+.002);h.push(g,_+.026,m,g,_-.004,m)}for(let d=0;d<18;d++){let g=d*2;u.push(g,g+2,g+1,g+1,g+2,g+3)}let f=new Ye;f.setAttribute("position",new Le(h,3)),f.setIndex(u),f.computeVertexNormals(),n.push(Qn(f,je.rail))}for(let c of[-1,1]){let[h]=r(.5+.34*c);ye(n,new Rt(.034,.085,t*2.4),je.stoneDark,{pos:[h,e*.35-.045,0]})}return n}function ty(){let i=[];ye(i,new tt(.2,.23,.036,8),je.stone,{pos:[0,.018,0]}),ye(i,new tt(.185,.2,.024,8),je.stoneDark,{pos:[0,.048,0]}),ye(i,new tt(.128,.138,.115,8),je.pillar,{pos:[0,.117,0]});for(let e=0;e<8;e++){let t=e/8*Math.PI*2+.2;ye(i,new tt(.0075,.0085,.125,6),je.beam,{pos:[Math.cos(t)*.148,.122,Math.sin(t)*.148]})}return ye(i,new tt(.168,.168,.012,8),je.beam,{pos:[0,.182,0]}),ye(i,new At(.245,.062,8),je.goldRoof,{pos:[0,.218,0],rot:[0,.2,0]}),ye(i,new tt(.2,.2,.01,8),je.roofRidge,{pos:[0,.196,0]}),ye(i,new tt(.098,.104,.07,8),je.pillar,{pos:[0,.276,0]}),ye(i,new At(.165,.056,8),je.goldRoof,{pos:[0,.336,0],rot:[0,.2,0]}),ye(i,new At(.07,.048,8),je.roofRidge,{pos:[0,.372,0],rot:[0,.2,0]}),ye(i,new lt(.02,8,6),je.gold,{pos:[0,.4,0]}),ye(i,new At(.01,.042,6),je.gold,{pos:[0,.428,0]}),i}function ny(){let i=[],e=[-.155,-.052,.052,.155];for(let t of e)ye(i,new Rt(.026,.014,.026),je.stoneDark,{pos:[t,.007,0]});for(let t of e)ye(i,new tt(.0085,.0095,.175,7),je.pillar,{pos:[t,.1015,0]});ye(i,new Rt(.362,.012,.02),je.beam,{pos:[0,.17,0]}),ye(i,new Rt(.362,.008,.016),je.beam,{pos:[0,.132,0]}),ye(i,new Rt(.086,.026,.01),je.gold,{pos:[0,.15,.011]}),ye(i,new At(.108,.04,4),je.roof,{pos:[0,.198,0],rot:[0,.785,0]}),ye(i,new Rt(.15,.01,.03),je.roofRidge,{pos:[0,.179,0]});for(let t of[-1,1])ye(i,new At(.058,.028,4),je.roof,{pos:[.1035*t,.186,0],rot:[0,.785,0]}),ye(i,new Rt(.082,.008,.024),je.roofRidge,{pos:[.1035*t,.171,0]});return ye(i,new lt(.01,8,6),je.gold,{pos:[0,.222,0]}),i}function iy(i,e,t,n){let s=[];for(let r=0;r<=n;r++){let o=r/n,a=Math.sin(o*Math.PI*2.2)*.1*(1-Math.abs(o-.5)*.6),l=e[0]+(t[0]-e[0])*o+a,c=e[1]+(t[1]-e[1])*o-a*.7,h=i.sampleY(l,c),u=i.sampleY(e[0]+(t[0]-e[0])*Math.min(1,o+.02)+a,e[1]+(t[1]-e[1])*Math.min(1,o+.02)-a*.7),f=Math.atan2(u-h,.09);ye(s,new Rt(.052,.012,.04),r%2?je.stone:je.stoneDark,{pos:[l,h+.006,c],rot:[f*.55,0,0]})}return Vt(s)}function sy(){let i=[];return ye(i,new Rt(.03,.01,.03),je.stoneDark,{pos:[0,.005,0]}),ye(i,new tt(.008,.01,.038,6),je.stone,{pos:[0,.029,0]}),ye(i,new Rt(.026,.022,.026),je.stone,{pos:[0,.059,0]}),ye(i,new At(.024,.016,4),je.stoneDark,{pos:[0,.078,0],rot:[0,.78,0]}),Vt(i)}function ry(i,e){let t=new si(e,1),n=t.attributes.position,s=new A;for(let r=0;r<n.count;r++){s.fromBufferAttribute(n,r);let o=1+.34*Math.sin(s.x*9+s.z*7)*Math.cos(s.y*8);n.setXYZ(r,s.x*o,s.y*o*.82,s.z*o)}return t.computeVertexNormals(),Qn(t,je.stoneDark)}function tr(i,e,t,n,s,r,o){let a=new it,l=o!==void 0?o:n.sampleY(e,t),c=Vt(i);return s!==1&&c.scale(s,s,s),r&&c.rotateY(r),c.translate(e,l-.006,t),a.add(new Ne(c,new Mt({vertexColors:!0,roughness:.72,metalness:.02,envMapIntensity:.55,side:nt}))),a.userData.anchor=new A(e,l,t),a}function ma(i,e,t,n=.6){let s=i.lake.y,r=null;for(let o=0;o<=.85;o+=.06){for(let a=0;a<14;a++){let l=a/14*Math.PI*2+o*3.1,c=e+Math.cos(l)*o,h=t+Math.sin(l)*o;if(Math.hypot(c,h)>i.coastR(c,h)-.25)continue;let u=i.sampleY(c,h);if(!(u<s+.1)&&!(i.channel(c,h).d<.42)&&!(i.slopeFast(c,h)>n)&&!(i.lakeDist(c,h)<i.lake.r*1.15))return{x:c,z:h,h:u}}if(r)break}return{x:e,z:t,h:i.sampleY(e,t)}}function id(i){let e=()=>.5,t=new it;t.name="architecture";let n=[],s=[],r=[],o=nd(e),a=ma(i,2.55,1.05),l=[a.x,a.z],c=tr(o,l[0],l[1],i,2,-.7);t.add(c),n.push(c.userData.anchor),s.push({x:l[0],z:l[1],r:.33});let h=Qv(e),u=ma(i,-1.3,1.55,.9),f=[u.x,u.z],d=tr(h,f[0],f[1],i,1.85,.35);t.add(d),n.push(d.userData.anchor),s.push({x:f[0],z:f[1],r:.3});let g=ey(.58,.095),_=i.rivers[1],m=Math.floor(_.N*.3),p=_.pts[m],v=_.pts[Math.min(_.N,m+1)],y=Math.atan2(v.z-p.z,v.x-p.x)+Math.PI/2,M=[p.x,p.z],P=tr(g,M[0],M[1],i,1.6,-y,p.y+.075);t.add(P),n.push(P.userData.anchor);let w=p.y+.075+.095*1.6,T=.58*1.6*.5,I=Math.cos(-y),U=Math.sin(-y);s.push({x:p.x-I*T,z:p.z-U*T,r:.16}),s.push({x:p.x+I*T,z:p.z+U*T,r:.16}),r.push({x:p.x,y:w,z:p.z,ry:-y+Math.PI/2});let x={h:-9,x:0,z:0};for(let ve=0;ve<2.3;ve+=.07)for(let Re=0;Re<Math.PI*2;Re+=.16){let be=Math.cos(Re)*ve,C=Math.sin(Re)*ve,qe=i.sampleY(be,C);qe>x.h&&(x={h:qe,x:be,z:C})}let E=tr(ty(),x.x,x.z,i,2,.4);t.add(E),n.push(E.userData.anchor),s.push({x:x.x,z:x.z,r:.52});let D=ma(i,x.x*1.05+1.35,x.z*1.05+1.15,1.6),O=iy(i,[D.x,D.z],[x.x*.92,x.z*.92],46),H=new Ne(O,new Mt({vertexColors:!0,roughness:.85,metalness:0,envMapIntensity:.45,side:nt}));H.name="stairs",t.add(H);let J=Math.atan2(x.z-D.z,x.x-D.x)+Math.PI/2,q=tr(ny(),D.x,D.z,i,1.35,-J);t.add(q),n.push(q.userData.anchor),s.push({x:D.x,z:D.z,r:.26});let te=ma(i,2.55,2.05,.9),X=tr(nd(e),te.x,te.z,i,1.6,1.1);t.add(X),n.push(X.userData.anchor),s.push({x:te.x,z:te.z,r:.3});let he=[],G=[[3.9,1.9,-2.6,.26],[-3.6,2.5,2.4,.2],[2.2,3.4,-4,.17],[-4.4,1.3,-.6,.15],[.4,4,4.2,.13]];for(let[ve,Re,be,C]of G){let qe=new Ne(ry(e,C),new Mt({vertexColors:!0,roughness:.95,metalness:0,flatShading:!0,envMapIntensity:.35}));qe.position.set(ve,Re,be),qe.userData={y0:Re,ph:e()*6.28},t.add(qe),he.push(qe)}let ie=new Mt({color:16769968,emissive:new z("#ffb457"),emissiveIntensity:1.2,roughness:.55,metalness:0}),Ee=[],de=(ve,Re,be,C)=>{let qe=new Ne(new lt(C,10,8),ie);qe.position.set(ve,Re,be),qe.scale.set(1,1.18,1),t.add(qe),Ee.push(qe)},V=i.sampleY(l[0],l[1]);for(let ve=0;ve<4;ve++){let Re=ve/4*Math.PI*2+.9;de(l[0]+Math.cos(Re)*.24,V+.27,l[1]+Math.sin(Re)*.24,.03)}let ne=i.sampleY(f[0],f[1]);de(f[0],ne+.25,f[1]+.2,.028);let ge=sy(),me=[],Ae=[];for(let ve=3;ve<=44;ve+=7){let Re=ve/46,be=Math.sin(Re*Math.PI*2.2)*.1*(1-Math.abs(Re-.5)*.6),C=D.x+(x.x*.92-D.x)*Re+be,qe=D.z+(x.z*.92-D.z)*Re-be*.7;for(let We of[-1,1]){let Ke=C+.055*We,Fe=qe+.045*We,$e=i.sampleY(Ke,Fe)-.004,Ue=ge.clone();Ue.translate(Ke,$e,Fe),me.push(Ue),Ae.push([Ke,$e+.062,Fe])}}if(me.length){let ve=Vt(me),Re=new Ne(ve,new Mt({vertexColors:!0,roughness:.85,envMapIntensity:.4,side:nt}));Re.name="stone-lanterns",t.add(Re);let be=new dn(new lt(.01,8,6),ie,Ae.length),C=new He;Ae.forEach((qe,We)=>{C.makeTranslation(qe[0],qe[1],qe[2]),be.setMatrixAt(We,C)}),be.instanceMatrix.needsUpdate=!0,be.frustumCulled=!1,be.name="stone-lantern-glow",t.add(be)}let oe=(ve,Re,be,C)=>{let qe=ve+Math.cos(C)*be,We=Re+Math.sin(C)*be;r.push({x:qe,y:i.sampleY(qe,We),z:We,ry:Math.PI/2-C})};return oe(l[0],l[1],.62,Math.PI*.25),oe(x.x,x.z,.6,Math.PI*.25),oe(D.x,D.z,.45,Math.PI*.875),{group:t,anchors:n,obstacles:s,standSpots:r,update(ve,Re){for(let be of he)be.position.y=be.userData.y0+Math.sin(ve*.55+be.userData.ph)*.1,be.rotation.y=ve*.08+be.userData.ph;ie.emissiveIntensity=.25+2.2*Re.nightFactor,ie.emissive.copy(Re.rim).lerp(new z("#ff9a3c"),.65)}}}var wh=new z("#eef2ea"),oy=new z("#c2cfc4"),sd=new z("#4f8a72"),ay=new z("#e8cdb4"),rd=new z("#2b2a2c"),ly=new z("#6b5a45");function od(i,e){let t=[];ye(t,new tt(.016,.038,.105,8,1,!0),wh,{pos:[0,.053,0]}),ye(t,new tt(.036,.04,.01,8),oy,{pos:[0,.006,0]}),ye(t,new tt(.022,.026,.052,8),wh,{pos:[0,.13,0]}),ye(t,new tt(.0235,.0235,.008,8),sd,{pos:[0,.108,0]});for(let n of[-1,1])ye(t,new At(.017,.055,6),wh,{pos:[.024*n,.118,0],rot:[0,0,.55*n]});return ye(t,new lt(.0175,10,8),ay,{pos:[0,.171,0]}),ye(t,new lt(.0135,8,6),rd,{pos:[0,.18,-.004],scale:[1,.8,1]}),ye(t,new lt(.008,6,5),rd,{pos:[0,.192,-.006]}),e&&(ye(t,new tt(.0032,.0032,.2,5),ly,{pos:[.04,.1,.008]}),ye(t,new lt(.0095,8,6),sd,{pos:[.04,.196,.008],scale:[.8,1,.8]})),Vt(t)}function ad(i,e=[]){let t=()=>.5,n=new it;n.name="immortals";let s=e.slice(0,6).map((f,d)=>({spot:f,x:f.x,y:f.y,z:f.z,ry:f.ry,staff:d%2===0,ph:d*1.7}));if(!s.length)return{group:n,count:0,update(){}};let r=[{geo:od(t,!0),list:s.filter(f=>f.staff)},{geo:od(t,!1),list:s.filter(f=>!f.staff)}],o=new Mt({vertexColors:!0,roughness:.68,metalness:0,envMapIntensity:.6,side:nt}),a=new He,l=new Nt,c=new jt,h=new A,u=new A(1,1,1);for(let f of r)f.list.length&&(f.mesh=new dn(f.geo,o,f.list.length),f.mesh.frustumCulled=!1,f.mesh.castShadow=!0,n.add(f.mesh),f.list.forEach((d,g)=>{d.mesh=f.mesh,d.slot=g}));return{group:n,count:s.length,setSpot(f,d){let g=s[f];g&&(d.x!==void 0&&(g.x=d.x),d.y!==void 0&&(g.y=d.y),d.z!==void 0&&(g.z=d.z),d.ry!==void 0&&(g.ry=d.ry,g.spot.ry=d.ry),g.spot.x=g.x,g.spot.z=g.z)},update(f){for(let d of r)d.mesh&&(d.list.forEach((g,_)=>{h.set(g.x,g.y-.004+Math.sin(f*.6+g.ph)*.005,g.z),c.set(0,g.ry,0),l.setFromEuler(c),a.compose(h,l,u),d.mesh.setMatrixAt(_,a)}),d.mesh.instanceMatrix.needsUpdate=!0)}}}var ga={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var Pn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},cy=new Un(-1,1,1,-1,0,1),Ah=class extends Ye{constructor(){super(),this.setAttribute("position",new Le([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Le([0,2,0,0,2,0],2))}},hy=new Ah,Xi=class{constructor(e){this._mesh=new Ne(hy,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,cy)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var Ti=class extends Pn{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof at?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Vi.clone(e.uniforms),this.material=new at({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Xi(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Fr=class extends Pn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},_a=class extends Pn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var xa=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new we);this._width=n.width,this._height=n.height,t=new tn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Cn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Ti(ga),this.copyPass.material.blending=ni,this.clock=new qs}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Fr!==void 0&&(o instanceof Fr?n=!0:o instanceof _a&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new we);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var va=class extends Pn{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new z}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}};var ld={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new z(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var nr=class i extends Pn{constructor(e,t,n,s){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new we(e.x,e.y):new we(256,256),this.clearColor=new z(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new tn(r,o,{type:Cn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let f=new tn(r,o,{type:Cn});f.texture.name="UnrealBloomPass.h"+u,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);let d=new tn(r,o,{type:Cn});d.texture.name="UnrealBloomPass.v"+u,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),o=Math.round(o/2)}let a=ld;this.highPassUniforms=Vi.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new at({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new we(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new A(1,1,1),new A(1,1,1),new A(1,1,1),new A(1,1,1),new A(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=ga;this.copyUniforms=Vi.clone(h.uniforms),this.blendMaterial=new at({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:fn,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new z,this.oldClearAlpha=1,this.basic=new wt,this.fsQuad=new Xi(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new we(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){let t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new at({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new we(.5,.5)},direction:{value:new we(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new at({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}};nr.BlurDirectionX=new we(1,0);nr.BlurDirectionY=new we(0,1);var cd={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var ya=class extends Pn{constructor(){super();let e=cd;this.uniforms=Vi.clone(e.uniforms),this.material=new Go({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new Xi(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},ut.getTransfer(this._outputColorSpace)===bt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Ec?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===bc?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Sc?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Pr?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Tc?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===wc&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var hd={name:"FXAAShader",uniforms:{tDiffuse:{value:null},resolution:{value:new we(1/1024,1/512)}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
		precision highp float;

		uniform sampler2D tDiffuse;

		uniform vec2 resolution;

		varying vec2 vUv;

		// FXAA 3.11 implementation by NVIDIA, ported to WebGL by Agost Biro (biro@archilogic.com)

		//----------------------------------------------------------------------------------
		// File:        es3-keplerFXAAassetsshaders/FXAA_DefaultES.frag
		// SDK Version: v3.00
		// Email:       gameworks@nvidia.com
		// Site:        http://developer.nvidia.com/
		//
		// Copyright (c) 2014-2015, NVIDIA CORPORATION. All rights reserved.
		//
		// Redistribution and use in source and binary forms, with or without
		// modification, are permitted provided that the following conditions
		// are met:
		//  * Redistributions of source code must retain the above copyright
		//    notice, this list of conditions and the following disclaimer.
		//  * Redistributions in binary form must reproduce the above copyright
		//    notice, this list of conditions and the following disclaimer in the
		//    documentation and/or other materials provided with the distribution.
		//  * Neither the name of NVIDIA CORPORATION nor the names of its
		//    contributors may be used to endorse or promote products derived
		//    from this software without specific prior written permission.
		//
		// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS ''AS IS'' AND ANY
		// EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
		// IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
		// PURPOSE ARE DISCLAIMED.  IN NO EVENT SHALL THE COPYRIGHT OWNER OR
		// CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
		// EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
		// PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
		// PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY
		// OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
		// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
		// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
		//
		//----------------------------------------------------------------------------------

		#ifndef FXAA_DISCARD
			//
			// Only valid for PC OpenGL currently.
			// Probably will not work when FXAA_GREEN_AS_LUMA = 1.
			//
			// 1 = Use discard on pixels which don't need AA.
			//     For APIs which enable concurrent TEX+ROP from same surface.
			// 0 = Return unchanged color on pixels which don't need AA.
			//
			#define FXAA_DISCARD 0
		#endif

		/*--------------------------------------------------------------------------*/
		#define FxaaTexTop(t, p) texture2D(t, p, -100.0)
		#define FxaaTexOff(t, p, o, r) texture2D(t, p + (o * r), -100.0)
		/*--------------------------------------------------------------------------*/

		#define NUM_SAMPLES 5

		// assumes colors have premultipliedAlpha, so that the calculated color contrast is scaled by alpha
		float contrast( vec4 a, vec4 b ) {
			vec4 diff = abs( a - b );
			return max( max( max( diff.r, diff.g ), diff.b ), diff.a );
		}

		/*============================================================================

									FXAA3 QUALITY - PC

		============================================================================*/

		/*--------------------------------------------------------------------------*/
		vec4 FxaaPixelShader(
			vec2 posM,
			sampler2D tex,
			vec2 fxaaQualityRcpFrame,
			float fxaaQualityEdgeThreshold,
			float fxaaQualityinvEdgeThreshold
		) {
			vec4 rgbaM = FxaaTexTop(tex, posM);
			vec4 rgbaS = FxaaTexOff(tex, posM, vec2( 0.0, 1.0), fxaaQualityRcpFrame.xy);
			vec4 rgbaE = FxaaTexOff(tex, posM, vec2( 1.0, 0.0), fxaaQualityRcpFrame.xy);
			vec4 rgbaN = FxaaTexOff(tex, posM, vec2( 0.0,-1.0), fxaaQualityRcpFrame.xy);
			vec4 rgbaW = FxaaTexOff(tex, posM, vec2(-1.0, 0.0), fxaaQualityRcpFrame.xy);
			// . S .
			// W M E
			// . N .

			bool earlyExit = max( max( max(
					contrast( rgbaM, rgbaN ),
					contrast( rgbaM, rgbaS ) ),
					contrast( rgbaM, rgbaE ) ),
					contrast( rgbaM, rgbaW ) )
					< fxaaQualityEdgeThreshold;
			// . 0 .
			// 0 0 0
			// . 0 .

			#if (FXAA_DISCARD == 1)
				if(earlyExit) FxaaDiscard;
			#else
				if(earlyExit) return rgbaM;
			#endif

			float contrastN = contrast( rgbaM, rgbaN );
			float contrastS = contrast( rgbaM, rgbaS );
			float contrastE = contrast( rgbaM, rgbaE );
			float contrastW = contrast( rgbaM, rgbaW );

			float relativeVContrast = ( contrastN + contrastS ) - ( contrastE + contrastW );
			relativeVContrast *= fxaaQualityinvEdgeThreshold;

			bool horzSpan = relativeVContrast > 0.;
			// . 1 .
			// 0 0 0
			// . 1 .

			// 45 deg edge detection and corners of objects, aka V/H contrast is too similar
			if( abs( relativeVContrast ) < .3 ) {
				// locate the edge
				vec2 dirToEdge;
				dirToEdge.x = contrastE > contrastW ? 1. : -1.;
				dirToEdge.y = contrastS > contrastN ? 1. : -1.;
				// . 2 .      . 1 .
				// 1 0 2  ~=  0 0 1
				// . 1 .      . 0 .

				// tap 2 pixels and see which ones are "outside" the edge, to
				// determine if the edge is vertical or horizontal

				vec4 rgbaAlongH = FxaaTexOff(tex, posM, vec2( dirToEdge.x, -dirToEdge.y ), fxaaQualityRcpFrame.xy);
				float matchAlongH = contrast( rgbaM, rgbaAlongH );
				// . 1 .
				// 0 0 1
				// . 0 H

				vec4 rgbaAlongV = FxaaTexOff(tex, posM, vec2( -dirToEdge.x, dirToEdge.y ), fxaaQualityRcpFrame.xy);
				float matchAlongV = contrast( rgbaM, rgbaAlongV );
				// V 1 .
				// 0 0 1
				// . 0 .

				relativeVContrast = matchAlongV - matchAlongH;
				relativeVContrast *= fxaaQualityinvEdgeThreshold;

				if( abs( relativeVContrast ) < .3 ) { // 45 deg edge
					// 1 1 .
					// 0 0 1
					// . 0 1

					// do a simple blur
					return mix(
						rgbaM,
						(rgbaN + rgbaS + rgbaE + rgbaW) * .25,
						.4
					);
				}

				horzSpan = relativeVContrast > 0.;
			}

			if(!horzSpan) rgbaN = rgbaW;
			if(!horzSpan) rgbaS = rgbaE;
			// . 0 .      1
			// 1 0 1  ->  0
			// . 0 .      1

			bool pairN = contrast( rgbaM, rgbaN ) > contrast( rgbaM, rgbaS );
			if(!pairN) rgbaN = rgbaS;

			vec2 offNP;
			offNP.x = (!horzSpan) ? 0.0 : fxaaQualityRcpFrame.x;
			offNP.y = ( horzSpan) ? 0.0 : fxaaQualityRcpFrame.y;

			bool doneN = false;
			bool doneP = false;

			float nDist = 0.;
			float pDist = 0.;

			vec2 posN = posM;
			vec2 posP = posM;

			int iterationsUsedN = 0;
			int iterationsUsedP = 0;
			for( int i = 0; i < NUM_SAMPLES; i++ ) {

				float increment = float(i + 1);

				if(!doneN) {
					nDist += increment;
					posN = posM + offNP * nDist;
					vec4 rgbaEndN = FxaaTexTop(tex, posN.xy);
					doneN = contrast( rgbaEndN, rgbaM ) > contrast( rgbaEndN, rgbaN );
					iterationsUsedN = i;
				}

				if(!doneP) {
					pDist += increment;
					posP = posM - offNP * pDist;
					vec4 rgbaEndP = FxaaTexTop(tex, posP.xy);
					doneP = contrast( rgbaEndP, rgbaM ) > contrast( rgbaEndP, rgbaN );
					iterationsUsedP = i;
				}

				if(doneN || doneP) break;
			}


			if ( !doneP && !doneN ) return rgbaM; // failed to find end of edge

			float dist = min(
				doneN ? float( iterationsUsedN ) / float( NUM_SAMPLES - 1 ) : 1.,
				doneP ? float( iterationsUsedP ) / float( NUM_SAMPLES - 1 ) : 1.
			);

			// hacky way of reduces blurriness of mostly diagonal edges
			// but reduces AA quality
			dist = pow(dist, .5);

			dist = 1. - dist;

			return mix(
				rgbaM,
				rgbaN,
				dist * .5
			);
		}

		void main() {
			const float edgeDetectionQuality = .2;
			const float invEdgeDetectionQuality = 1. / edgeDetectionQuality;

			gl_FragColor = FxaaPixelShader(
				vUv,
				tDiffuse,
				resolution,
				edgeDetectionQuality, // [0,1] contrast needed, otherwise early discard
				invEdgeDetectionQuality
			);

		}
	`};var fd=`
varying vec2 vUv;
void main(){
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,ud={name:"TiltShiftShader",uniforms:{tDiffuse:{value:null},uTexel:{value:new we(1/1280,1/800)},uDir:{value:new we(1,0)},uAmount:{value:6.5},uFocus:{value:.53},uBand:{value:.135},uFeather:{value:.3}},vertexShader:fd,fragmentShader:`
    precision highp float;
    uniform sampler2D tDiffuse;
    uniform vec2 uTexel;
    uniform vec2 uDir;
    uniform float uAmount;
    uniform float uFocus;
    uniform float uBand;
    uniform float uFeather;
    varying vec2 vUv;
    void main(){
      float d = abs(vUv.y - uFocus);
      float k = smoothstep(uBand, uBand + uFeather, d);
      // \u89D2\u843D\u518D\u591A\u4E00\u70B9
      float dx = abs(vUv.x - 0.5);
      k = max(k, smoothstep(0.34, 0.52, dx) * 0.85);
      vec2 stp = uDir * uTexel * (k * uAmount);
      vec4 sum = texture2D(tDiffuse, vUv) * 0.227027;
      sum += texture2D(tDiffuse, vUv + stp * 1.3846154) * 0.3162162;
      sum += texture2D(tDiffuse, vUv - stp * 1.3846154) * 0.3162162;
      sum += texture2D(tDiffuse, vUv + stp * 3.2307692) * 0.0702703;
      sum += texture2D(tDiffuse, vUv - stp * 3.2307692) * 0.0702703;
      gl_FragColor = sum;
    }
  `},uy={name:"FilmShader",uniforms:{tDiffuse:{value:null},uResolution:{value:new we(1280,800)},uTime:{value:0},uGrain:{value:.032},uAberration:{value:.0022},uVignette:{value:1}},vertexShader:fd,fragmentShader:`
    precision highp float;
    uniform sampler2D tDiffuse;
    uniform vec2 uResolution;
    uniform float uTime;
    uniform float uGrain;
    uniform float uAberration;
    uniform float uVignette;
    varying vec2 vUv;

    float hash(vec2 p){ return fract(sin(dot(p, vec2(41.0, 289.0))) * 43758.5453123); }

    void main(){
      vec2 c = vUv - 0.5;
      float r2 = dot(c, c);
      float ab = uAberration * (0.35 + r2 * 2.4);
      vec3 col;
      col.r = texture2D(tDiffuse, vUv + c * ab).r;
      col.g = texture2D(tDiffuse, vUv).g;
      col.b = texture2D(tDiffuse, vUv - c * ab).b;

      float v = smoothstep(1.10, 0.24, length(c * vec2(1.02, 1.16)));
      col *= mix(0.30, 1.0, mix(1.0, v, uVignette));

      float g = hash(vUv * uResolution + fract(uTime * 0.37) * 137.0) - 0.5;
      col += g * uGrain * (1.0 - 0.45 * v);

      col = max(col, vec3(0.0));
      gl_FragColor = vec4(col, 1.0);
    }
  `};function dd(i,e,t,n={}){let s=n.width||1280,r=n.height||800,o=n.pixelRatio||1,a=new xa(i);a.setPixelRatio(o),a.setSize(s,r);let l=new we(s*o,r*o),c=new va(e,t);a.addPass(c);let h=new Ti(ud);h.uniforms.uDir.value.set(1,0),a.addPass(h);let u=new Ti(ud);u.uniforms.uDir.value.set(0,1),a.addPass(u);let f=new nr(l,.5,.72,.82);a.addPass(f);let d=new ya;a.addPass(d);let g=new Ti(hd);a.addPass(g);let _=new Ti(uy);a.addPass(_);let m={enabled:n.enabled!==!1,tilt:!1,bloomOn:!0,filmOn:!0,aa:!0};function p(){h.enabled=m.tilt,u.enabled=m.tilt,g.enabled=m.aa,f.enabled=m.bloomOn,_.enabled=m.filmOn}return p(),{composer:a,renderPass:c,bloom:f,tiltH:h,tiltV:u,fxaa:g,film:_,output:d,state:m,toggle(v){return v==="post"&&(m.enabled=!m.enabled),v==="tilt"&&(m.tilt=!m.tilt),v==="bloom"&&(m.bloomOn=!m.bloomOn),v==="film"&&(m.filmOn=!m.filmOn),v==="aa"&&(m.aa=!m.aa),p(),m},setSize(v,y,M){M&&a.setPixelRatio(M),a.setSize(v,y);let P=M||a.pixelRatio||1;f.setSize(v*P,y*P);let w=i.getDrawingBufferSize(new we);h.uniforms.uTexel.value.set(1/w.x,1/w.y),u.uniforms.uTexel.value.set(1/w.x,1/w.y),_.uniforms.uResolution.value.set(w.x,w.y),g.material.uniforms.resolution.value.set(1/w.x,1/w.y);let T=Math.max(.55,Math.min(1.6,w.y/900));h.uniforms.uAmount.value=4.6*T,u.uniforms.uAmount.value=4.6*T},update(v,y){f.strength=y.bloom,f.threshold=.78-.18*y.nightFactor,f.radius=.66+.2*y.nightFactor,_.uniforms.uTime.value=v},render(v){m.enabled?a.render(v):i.render(e,t)}}}function pd(){let i=document.getElementById("hud"),e=document.getElementById("hud-phase"),t=document.getElementById("hud-clock"),n=document.getElementById("hud-bar-fill"),s=document.getElementById("hud-stats"),r=document.getElementById("veil"),o=!0,a="",l=-1;return{setPhase(c,h,u){if(e&&e.textContent!==c&&(e.textContent=c),n){let f=Math.round(h*500)/500;f!==l&&(n.style.transform=`scaleX(${f.toFixed(3)})`,l=f)}if(t&&u!==void 0){let f=Math.floor(u)%24,d=Math.floor(u%1*60),g=`${String(f).padStart(2,"0")}:${String(d).padStart(2,"0")}`;t.textContent!==g&&(t.textContent=g)}},setStats(c){s&&c!==a&&(s.textContent=c,a=c)},hideStats(){s&&(s.style.display="none")},toggle(){return o=!o,i&&(i.style.opacity=o?"1":"0"),o},ready(){r&&(r.classList.add("gone"),setTimeout(()=>{r.parentNode&&r.parentNode.removeChild(r)},1400))},fail(c){r&&(r.classList.remove("gone"),r.innerHTML=`<div class="veil-inner"><div class="veil-title">\u65E0\u6CD5\u6E32\u67D3</div><div class="veil-sub">${c}</div></div>`)}}}var Ft=new URLSearchParams(location.search);Ft.set("freeze","1");Ft.set("post","0");Ft.set("refl","0");var Or=(i,e)=>Ft.has(i)?parseFloat(Ft.get(i)):e,md=i=>Ft.get(i)==="1"||Ft.get(i)==="true",fy=10,Ma=17.6,dy=52;function py(){let i=pd(),e=document.getElementById("scene"),t=new Po({canvas:e,antialias:!0,alpha:!1,stencil:!1,powerPreference:"high-performance"}),n=Or("dpr",Math.min(window.devicePixelRatio||1,1.35));t.setPixelRatio(n),t.setSize(window.innerWidth,window.innerHeight,!1),t.shadowMap.enabled=Ft.get("shadow")!=="0",t.shadowMap.type=Mc,t.toneMapping=Pr,t.toneMappingExposure=1,t.outputColorSpace=Ht;let s=new Ws;s.background=new z("#03050b");let r=new Un(-1,1,1,-1,-400,700),o=new A(1,.98,1).normalize(),a=new A(0,-.18,0);r.position.copy(o).multiplyScalar(26).add(a),r.lookAt(a);let l=new Gs(t);l.compileEquirectangularShader();let c=Of(512,256),h=l.fromEquirectangular(c);s.environment=h.texture,s.environmentIntensity=1,c.dispose(),l.dispose();let u=Uf();u.apply(Or("t",.3));let f=new Bn(16777215,3);f.castShadow=!0,f.shadow.mapSize.set(2048,2048),f.shadow.camera.near=1,f.shadow.camera.far=60,f.shadow.camera.left=-5.2,f.shadow.camera.right=5.2,f.shadow.camera.top=5.2,f.shadow.camera.bottom=-5.2,f.shadow.bias=-5e-4,f.shadow.normalBias=.055,f.shadow.camera.updateProjectionMatrix(),s.add(f),s.add(f.target);let d=new Bn(13623551,1);d.position.set(-9,11,-10),s.add(d);let g=new Bn(10336511,0);s.add(g);let _=new Ys(10337248,3814440,.8);s.add(_);let m=new Zo(11189213,.4);s.add(m);let p={},v=new Map;p.sky=Bf(),s.add(p.sky.group),v.set("sky",p.sky.group);let y=Gf();p.glass=Hf(fy,{physical:Ft.get("glass")==="phys"}),s.add(p.glass.group),v.set("glass",p.glass.group),Ft.get("glass")!=="1"&&(p.glass.group.visible=!1),s.add(y.group),v.set("island",y.group);let M=sa({scene:s,planeY:y.lake.y,scale:.5}),P=Ft.get("refl")!=="0";p.water=Zf(y,u,P?M:null),s.add(p.water.group),v.set("water",p.water.group),M.exclude(p.water.group),M.exclude(p.glass.group),M.install(t),p.architecture=id(y),s.add(p.architecture.group),v.set("architecture",p.architecture.group);let w=p.architecture.anchors.map(Y=>({x:Y.x,z:Y.z,r:.34}));if(p.flora=$f(y,{exclude:w}),s.add(p.flora.group),v.set("flora",p.flora.group),p.fauna=ed(y,{obstacles:p.architecture.obstacles}),s.add(p.fauna.group),v.set("fauna",p.fauna.group),p.immortals=ad(y,p.architecture.standSpots),s.add(p.immortals.group),v.set("immortals",p.immortals.group),p.atmos=td(y,u),s.add(p.atmos.group),v.set("atmos",p.atmos.group),v.set("mist",p.atmos.group),Ft.get("flat")==="1"){let Y=y.group.getObjectByName("terrain");Y.material.vertexColors=!1,Y.material.color.set(10132122),Y.material.flatShading=Ft.get("flatshade")==="1",Y.material.needsUpdate=!0}let T=Ft.get("dbg");T==="refl"?p.water.uniforms.uDbg.value=1:T&&(p.water.uniforms.uDbg.value=parseFloat(T)||0);let I=Ft.get("only"),U=(Ft.get("hide")||"").split(",").filter(Boolean);if(I)for(let[Y,se]of v)se.visible=Y===I;for(let Y of U){let se=v.get(Y);se&&(se.visible=!1)}let x=new ha(r,t.domElement);x.target.copy(a),x.enableDamping=!0,x.dampingFactor=.06,x.enablePan=!1,x.minPolarAngle=.55,x.maxPolarAngle=1.44,x.minZoom=.6,x.maxZoom=4,x.rotateSpeed=.42,x.zoomSpeed=.7,x.autoRotateSpeed=.3,x.autoRotate=!md("freeze"),x.update();let E=Or("zoom",1);if(E!==1&&(r.zoom=E,r.updateProjectionMatrix()),Ft.get("ui")==="0"){let Y=document.getElementById("hud");Y&&(Y.style.display="none")}let D=new Ct(64,window.innerWidth/window.innerHeight,.012,400),O=-1,H=0,J=-.1,q=.042,te=Or("eye",.176),X=0,he=0,G=null,ie=document.getElementById("pov-panel"),Ee=p.architecture.standSpots;function de(){let Y=O>=0&&Ee[O];if(x.enabled=!Y,x.autoRotate=!Y&&!be,Y){let F=Ee[O];H=Math.atan2(F.x,F.z),J=-Math.min(.8,.14+.2*(F.y+te)),G={x:F.x,y:F.y,z:F.z},X=0,he=0,ne()}ie&&ie.classList.toggle("on",!!Y);let se=document.getElementById("hud-pov");se&&(se.textContent=Y?`\u4ED9\u4EBA\u89C6\u89D2 ${O+1}/${Ee.length} \xB7 \u62D6\u52A8\u8F6C\u5934 \xB7 V \u5207\u6362 \xB7 ESC \u9000\u51FA`:"",se.style.opacity=Y?"1":"0")}function V(){if(!G)return null;let Y=G.x+X,se=G.z+he,F=G.y-y.sampleY(G.x,G.z);return{x:Y,y:y.sampleY(Y,se)+F,z:se}}function ne(){let Y=document.getElementById("pp-eye"),se=document.getElementById("pp-dx"),F=document.getElementById("pp-dz");Y&&(Y.value=String(te),document.getElementById("pp-eye-v").textContent=te.toFixed(3),se.value=String(X),document.getElementById("pp-dx-v").textContent=X.toFixed(2),F.value=String(he),document.getElementById("pp-dz-v").textContent=he.toFixed(2))}function ge(){O=O+1>=Ee.length?-1:O+1,de()}let me=null;t.domElement.addEventListener("pointerdown",Y=>{O<0||(me={x:Y.clientX,y:Y.clientY},t.domElement.setPointerCapture(Y.pointerId))}),t.domElement.addEventListener("pointermove",Y=>{!me||O<0||(H-=(Y.clientX-me.x)*.004,J=Math.max(-1.2,Math.min(.9,J-(Y.clientY-me.y)*.003)),me={x:Y.clientX,y:Y.clientY})}),t.domElement.addEventListener("pointerup",()=>{me=null}),t.domElement.addEventListener("wheel",Y=>{O<0||(D.fov=Math.max(28,Math.min(95,D.fov+Math.sign(Y.deltaY)*3)),D.updateProjectionMatrix())});let Ae=dd(t,s,r,{width:window.innerWidth,height:window.innerHeight,pixelRatio:n,enabled:Ft.get("post")!=="0"});function oe(){let Y=window.innerWidth,se=window.innerHeight,F=Y/se;r.left=-Ma*F/2,r.right=Ma*F/2,r.top=Ma/2,r.bottom=-Ma/2,r.updateProjectionMatrix(),D.aspect=F,D.updateProjectionMatrix(),t.setSize(Y,se,!1);let j=t.getPixelRatio();Ae.setSize(Y,se,j),p.water.resizeReflection(Y,se)}window.addEventListener("resize",oe),oe();let ve=md("freeze"),Re=Or("t",.3),be=ve,C=0;window.addEventListener("keydown",Y=>{if(document.body.dataset.expedition!=="true"){if(Y.code==="Space")be=!be,x.autoRotate=!be,Y.preventDefault();else if(Y.key==="h"||Y.key==="H")i.toggle();else if(Y.key==="r"||Y.key==="R")r.position.copy(o).multiplyScalar(26).add(a),r.zoom=1,r.updateProjectionMatrix(),x.target.copy(a),x.update();else if(Y.key==="1")Re=.03;else if(Y.key==="2")Re=.25;else if(Y.key==="3")Re=.45;else if(Y.key==="4")Re=.67;else if(Y.key==="5")Re=.9;else if(Y.key==="p"||Y.key==="P")Ae.toggle("post");else if(Y.key==="b"||Y.key==="B")Ae.toggle("bloom");else if(Y.key==="f"||Y.key==="F")Ae.toggle("tilt");else if(Y.key==="a"||Y.key==="A")Ae.toggle("aa");else if(Y.key==="g"||Y.key==="G")p.glass.group.visible=!p.glass.group.visible;else if(Y.key==="v"||Y.key==="V")ge();else if(Y.key==="Escape"&&O>=0)O=-1,de(),Y.preventDefault();else if(O>=0){let se=Y.shiftKey?.05:.01,F=!0;if(Y.key==="ArrowLeft")X-=se;else if(Y.key==="ArrowRight")X+=se;else if(Y.key==="ArrowUp")he-=se;else if(Y.key==="ArrowDown")he+=se;else if(Y.key==="[")te=Math.max(.02,te-.005);else if(Y.key==="]")te=Math.min(.6,te+.005);else if(Y.key==="c"||Y.key==="C"){let j=G?V():null,k=j?`[\u4ED9\u4EBA] index=${O+1} x=${j.x.toFixed(3)} y=${j.y.toFixed(3)} z=${j.z.toFixed(3)} eye=${te.toFixed(3)}`:"[\u4ED9\u4EBA] \u672A\u8FDB\u5165\u89C6\u89D2";console.log(k);let Q=document.getElementById("hud-pov");Q&&(Q.textContent=k)}else F=!1;F&&(Y.preventDefault(),ne())}}});let qe=new qs,We=0,Ke=0,Fe=0,$e=!1,Ue=new A,R=new A;function S(){u.apply(Re),t.toneMappingExposure=u.exposure,Ue.copy(u.sunDir),Ue.y<.14&&(Ue.y=.14+(.14-Ue.y)*.32,Ue.normalize()),f.position.copy(Ue).multiplyScalar(24),f.target.position.set(0,-.3,0),f.target.updateMatrixWorld(),f.color.copy(u.sun),f.intensity=u.sunI*(.72+.28*u.dayFactor),R.copy(u.moonDir).multiplyScalar(22),g.position.copy(R),g.position.y=Math.max(g.position.y,6),g.color.set("#9db8ff"),g.intensity=u.moonI*1.5,d.color.copy(u.rim),d.intensity=u.rimI,_.color.copy(u.hemiSky),_.groundColor.copy(u.hemiGround).lerp(new z("#6b6552"),.45),_.intensity=u.hemiI*1.18,m.color.copy(u.amb),m.intensity=u.ambI*1.15}t.info.autoReset=!1,window.__frames=0;let K=()=>O>=0&&Ee[O]?D:r;window.__povCamera=D;let ae=Af({scene:s,camera:r,renderer:t,controls:x,island:y,layers:v}),pe=0;function re(Y=0){if(document.hidden||Y-pe<1e3/30){requestAnimationFrame(re);return}pe=Y,t.info.reset();let se=qe.getDelta(),F=Math.min(se,.05);if(C+=F,be||(Re=(Re+F/dy)%1),S(),O>=0&&Ee[O]&&G){let j=V();p.immortals.setSpot(O,{x:j.x,y:j.y,z:j.z});let k=Math.sin(C*.6+O)*.004;D.position.set(j.x-Math.sin(H)*q,j.y+te+k,j.z-Math.cos(H)*q),D.rotation.set(J,H,0,"YXZ"),Ae.renderPass.camera=D}else Ae.renderPass.camera!==r&&(Ae.renderPass.camera=r),x.enabled&&x.update(F);if(p.sky.update(C,u),p.glass.update(u,C,r),p.water.update(C,u),p.fauna.update(C,u),p.architecture.update(C,u),p.immortals.update(C),p.atmos.update(C,u,r,{pixelRatio:t.getPixelRatio()}),Ae.update(C,u),ae.update(C,F,u),ae.render()||(p.water.renderReflection(t,K()),Ae.render(F)),window.__frames++,i.setPhase(u.label,Re,u.hour),We++,Ke+=se,Ke>.5&&(Fe=Math.round(We/Ke),We=0,Ke=0,Ft.has("debug"))){let j=t.info.render,k=Fe>=10?String(Fe):Fe>=1?Fe.toFixed(1):"<1";i.setStats(`${k} fps \xB7 ${j.calls} calls/frame \xB7 ${(j.triangles/1e3).toFixed(0)}k tri`)}$e||($e=!0,window.__worldReady=!0,i.ready()),requestAnimationFrame(re)}if(window.__worldStats=()=>{t.info.autoReset=!0,t.render(s,r);let Y={...t.info.render};return t.info.autoReset=!1,t.info.reset(),{calls:Y.calls,triangles:Y.triangles,programs:t.info.programs?t.info.programs.length:-1,flora:p.flora.counts,rej:p.flora.rej,camera:{zoom:r.zoom,pos:r.position.toArray().map(se=>+se.toFixed(2))},timeOfDay:+Re.toFixed(3),phase:u.label}},window.__world={scene:s,camera:r,renderer:t,pal:u,parts:p,island:y,post:Ae,controls:x,setTime:Y=>{Re=Y,be=!0,x.autoRotate=!1}},ie){let Y=(se,F)=>{let j=document.getElementById(se);j&&j.addEventListener("input",()=>{F(parseFloat(j.value)),ne()})};Y("pp-eye",se=>{te=se}),Y("pp-dx",se=>{X=se}),Y("pp-dz",se=>{he=se})}if(Ft.get("pov")==="1"&&(O=0,de()),Ft.has("debug")?i.setStats("\u2026"):i.hideStats(),Ft.has("pick")){let Y=new Ks,se=new we;t.domElement.addEventListener("pointerdown",F=>{let j=t.domElement.getBoundingClientRect();se.set((F.clientX-j.left)/j.width*2-1,-((F.clientY-j.top)/j.height)*2+1),Y.setFromCamera(se,K());let k=(le,_e)=>{let Se=le;for(;Se;){if(Se===_e)return!0;Se=Se.parent}return!1},Q=Y.intersectObjects(s.children,!0).filter(le=>le.object.visible).filter(le=>le.object.isMesh).filter(le=>!k(le.object,p.glass.group)&&!k(le.object,p.sky.group)).filter(le=>!k(le.object,p.atmos.group)).slice(0,3),ce=le=>{let _e=le.face?` n=(${le.face.normal.x.toFixed(2)}, ${le.face.normal.y.toFixed(2)}, ${le.face.normal.z.toFixed(2)})`:"";return`${le.object.name||le.object.type} p=(${le.point.x.toFixed(2)}, ${le.point.y.toFixed(2)}, ${le.point.z.toFixed(2)})${_e}`},fe=Q.length?"[pick] "+Q.map(ce).join("  |  "):"[pick] \u6CA1\u6253\u5230";console.log(fe),i.setStats(fe)})}requestAnimationFrame(re)}try{py()}catch(i){window.__worldError=String(i&&i.stack?i.stack:i);let e=document.getElementById("veil");e&&(e.innerHTML=`<div class="veil-inner"><div class="veil-title">\u521D\u59CB\u5316\u5931\u8D25</div><div class="veil-sub">${String(i.message||i)}</div></div>`),console.error(i)}})();
/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
