(()=>{var Ti={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Ai={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Uu=0,lc=1,Nu=2;var _h=1,Il=2,kn=3,ri=0,Ve=1,ne=2,Pn=0,En=1,Ze=2,cc=3,hc=4,Fu=5,xi=100,Ou=101,Bu=102,zu=103,Hu=104,ku=200,Vu=201,Gu=202,Wu=203,aa=204,la=205,Xu=206,Yu=207,qu=208,Zu=209,Ku=210,$u=211,Ju=212,ju=213,Qu=214,ca=0,ha=1,ua=2,Ji=3,fa=4,da=5,pa=6,ma=7,xh=0,tf=1,ef=2,si=0,Dl=1,Ll=2,Ul=3,Xs=4,nf=5,Nl=6,Fl=7;var vh=300,ji=301,Qi=302,Ls=303,ga=304,ao=306,_a=1e3,Rn=1001,xa=1002,$e=1003,sf=1004;var Qs=1005;var Ke=1006,Ao=1007;var Mi=1008;var Gn=1009,yh=1010,Mh=1011,Us=1012,Ol=1013,Ei=1014,Cn=1015,an=1016,Bl=1017,zl=1018,ts=1020,Eh=35902,bh=1021,Sh=1022,Mn=1023,wh=1024,Th=1025,Zi=1026,es=1027,Hl=1028,kl=1029,Ah=1030,Vl=1031;var Gl=1033,Ar=33776,Rr=33777,Cr=33778,Pr=33779,va=35840,ya=35841,Ma=35842,Ea=35843,ba=36196,Sa=37492,wa=37496,Ta=37808,Aa=37809,Ra=37810,Ca=37811,Pa=37812,Ia=37813,Da=37814,La=37815,Ua=37816,Na=37817,Fa=37818,Oa=37819,Ba=37820,za=37821,Ir=36492,Ha=36494,ka=36495,Rh=36283,Va=36284,Ga=36285,Wa=36286;var Lr=2300,Xa=2301,Ro=2302,uc=2400,fc=2401,dc=2402;var rf=3200,of=3201;var Ch=0,af=1,yn="",Ye="srgb",ai="srgb-linear",Wl="display-p3",lo="display-p3-linear",Ur="linear",ue="srgb",Nr="rec709",Fr="p3";var Ii=7680;var pc=519,lf=512,cf=513,hf=514,Ph=515,uf=516,ff=517,df=518,pf=519,mc=35044;var gc="300 es",Vn=2e3,Or=2001,Wn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},He=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],_c=1234567,Rs=Math.PI/180,Ns=180/Math.PI;function cs(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(He[i&255]+He[i>>8&255]+He[i>>16&255]+He[i>>24&255]+"-"+He[t&255]+He[t>>8&255]+"-"+He[t>>16&15|64]+He[t>>24&255]+"-"+He[e&63|128]+He[e>>8&255]+"-"+He[e>>16&255]+He[e>>24&255]+He[n&255]+He[n>>8&255]+He[n>>16&255]+He[n>>24&255]).toLowerCase()}function we(i,t,e){return Math.max(t,Math.min(e,i))}function Xl(i,t){return(i%t+t)%t}function mf(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function gf(i,t,e){return i!==t?(e-i)/(t-i):0}function Cs(i,t,e){return(1-e)*i+e*t}function _f(i,t,e,n){return Cs(i,t,1-Math.exp(-e*n))}function xf(i,t=1){return t-Math.abs(Xl(i,t*2)-t)}function vf(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function yf(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Mf(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Ef(i,t){return i+Math.random()*(t-i)}function bf(i){return i*(.5-Math.random())}function Sf(i){i!==void 0&&(_c=i);let t=_c+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function wf(i){return i*Rs}function Tf(i){return i*Ns}function Af(i){return(i&i-1)===0&&i!==0}function Rf(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Cf(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Pf(i,t,e,n,s){let r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),h=o((t+n)/2),d=r((t-n)/2),u=o((t-n)/2),p=r((n-t)/2),g=o((n-t)/2);switch(s){case"XYX":i.set(a*h,l*d,l*u,a*c);break;case"YZY":i.set(l*u,a*h,l*d,a*c);break;case"ZXZ":i.set(l*d,l*u,a*h,a*c);break;case"XZX":i.set(a*h,l*g,l*p,a*c);break;case"YXY":i.set(l*p,a*h,l*g,a*c);break;case"ZYZ":i.set(l*g,l*p,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Yi(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function We(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Ih={DEG2RAD:Rs,RAD2DEG:Ns,generateUUID:cs,clamp:we,euclideanModulo:Xl,mapLinear:mf,inverseLerp:gf,lerp:Cs,damp:_f,pingpong:xf,smoothstep:vf,smootherstep:yf,randInt:Mf,randFloat:Ef,randFloatSpread:bf,seededRandom:Sf,degToRad:wf,radToDeg:Tf,isPowerOfTwo:Af,ceilPowerOfTwo:Rf,floorPowerOfTwo:Cf,setQuaternionFromProperEuler:Pf,normalize:We,denormalize:Yi},_t=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(we(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Jt=class i{constructor(t,e,n,s,r,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],p=n[5],g=n[8],x=s[0],m=s[3],f=s[6],y=s[1],v=s[4],b=s[7],D=s[2],T=s[5],w=s[8];return r[0]=o*x+a*y+l*D,r[3]=o*m+a*v+l*T,r[6]=o*f+a*b+l*w,r[1]=c*x+h*y+d*D,r[4]=c*m+h*v+d*T,r[7]=c*f+h*b+d*w,r[2]=u*x+p*y+g*D,r[5]=u*m+p*v+g*T,r[8]=u*f+p*b+g*w,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=h*o-a*c,u=a*l-h*r,p=c*r-o*l,g=e*d+n*u+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return t[0]=d*x,t[1]=(s*c-h*n)*x,t[2]=(a*n-s*o)*x,t[3]=u*x,t[4]=(h*e-s*l)*x,t[5]=(s*r-a*e)*x,t[6]=p*x,t[7]=(n*l-c*e)*x,t[8]=(o*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Co.makeScale(t,e)),this}rotate(t){return this.premultiply(Co.makeRotation(-t)),this}translate(t,e){return this.premultiply(Co.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Co=new Jt;function Dh(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Br(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function If(){let i=Br("canvas");return i.style.display="block",i}var xc={};function Dr(i){i in xc||(xc[i]=!0,console.warn(i))}function Df(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Lf(i){let t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Uf(i){let t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var vc=new Jt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),yc=new Jt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),vs={[ai]:{transfer:Ur,primaries:Nr,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[Ye]:{transfer:ue,primaries:Nr,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[lo]:{transfer:Ur,primaries:Fr,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(yc),fromReference:i=>i.applyMatrix3(vc)},[Wl]:{transfer:ue,primaries:Fr,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(yc),fromReference:i=>i.applyMatrix3(vc).convertLinearToSRGB()}},Nf=new Set([ai,lo]),re={enabled:!0,_workingColorSpace:ai,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Nf.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;let n=vs[t].toReference,s=vs[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return vs[i].primaries},getTransfer:function(i){return i===yn?Ur:vs[i].transfer},getLuminanceCoefficients:function(i,t=this._workingColorSpace){return i.fromArray(vs[t].luminanceCoefficients)}};function Ki(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Po(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Di,Ya=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Di===void 0&&(Di=Br("canvas")),Di.width=t.width,Di.height=t.height;let n=Di.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Di}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Br("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ki(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ki(e[n]/255)*255):e[n]=Ki(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Ff=0,zr=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ff++}),this.uuid=cs(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Io(s[o].image)):r.push(Io(s[o]))}else r=Io(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Io(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ya.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Of=0,Je=class i extends Wn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Rn,s=Rn,r=Ke,o=Mi,a=Mn,l=Gn,c=i.DEFAULT_ANISOTROPY,h=yn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Of++}),this.uuid=cs(),this.name="",this.source=new zr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new _t(0,0),this.repeat=new _t(1,1),this.center=new _t(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==vh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case _a:t.x=t.x-Math.floor(t.x);break;case Rn:t.x=t.x<0?0:1;break;case xa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case _a:t.y=t.y-Math.floor(t.y);break;case Rn:t.y=t.y<0?0:1;break;case xa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Je.DEFAULT_IMAGE=null;Je.DEFAULT_MAPPING=vh;Je.DEFAULT_ANISOTROPY=1;var ve=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],p=l[5],g=l[9],x=l[2],m=l[6],f=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let v=(c+1)/2,b=(p+1)/2,D=(f+1)/2,T=(h+u)/4,w=(d+x)/4,I=(g+m)/4;return v>b&&v>D?v<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(v),s=T/n,r=w/n):b>D?b<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),n=T/s,r=I/s):D<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(D),n=w/r,s=I/r),this.set(n,s,r,e),this}let y=Math.sqrt((m-g)*(m-g)+(d-x)*(d-x)+(u-h)*(u-h));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(d-x)/y,this.z=(u-h)/y,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},qa=class extends Wn{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ve(0,0,t,e),this.scissorTest=!1,this.viewport=new ve(0,0,t,e);let s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ke,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new Je(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new zr(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Fe=class extends qa{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Hr=class extends Je{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=$e,this.minFilter=$e,this.wrapR=Rn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Za=class extends Je{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=$e,this.minFilter=$e,this.wrapR=Rn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Re=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],d=n[s+3],u=r[o+0],p=r[o+1],g=r[o+2],x=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d;return}if(a===1){t[e+0]=u,t[e+1]=p,t[e+2]=g,t[e+3]=x;return}if(d!==x||l!==u||c!==p||h!==g){let m=1-a,f=l*u+c*p+h*g+d*x,y=f>=0?1:-1,v=1-f*f;if(v>Number.EPSILON){let D=Math.sqrt(v),T=Math.atan2(D,f*y);m=Math.sin(m*T)/D,a=Math.sin(a*T)/D}let b=a*y;if(l=l*m+u*b,c=c*m+p*b,h=h*m+g*b,d=d*m+x*b,m===1-a){let D=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=D,c*=D,h*=D,d*=D}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],d=r[o],u=r[o+1],p=r[o+2],g=r[o+3];return t[e]=a*g+h*d+l*p-c*u,t[e+1]=l*g+h*u+c*d-a*p,t[e+2]=c*g+h*p+a*u-l*d,t[e+3]=h*g-a*d-l*u-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),d=a(r/2),u=l(n/2),p=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=u*h*d+c*p*g,this._y=c*p*d-u*h*g,this._z=c*h*g+u*p*d,this._w=c*h*d-u*p*g;break;case"YXZ":this._x=u*h*d+c*p*g,this._y=c*p*d-u*h*g,this._z=c*h*g-u*p*d,this._w=c*h*d+u*p*g;break;case"ZXY":this._x=u*h*d-c*p*g,this._y=c*p*d+u*h*g,this._z=c*h*g+u*p*d,this._w=c*h*d-u*p*g;break;case"ZYX":this._x=u*h*d-c*p*g,this._y=c*p*d+u*h*g,this._z=c*h*g-u*p*d,this._w=c*h*d+u*p*g;break;case"YZX":this._x=u*h*d+c*p*g,this._y=c*p*d+u*h*g,this._z=c*h*g-u*p*d,this._w=c*h*d-u*p*g;break;case"XZY":this._x=u*h*d-c*p*g,this._y=c*p*d-u*h*g,this._z=c*h*g+u*p*d,this._w=c*h*d+u*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=n+a+d;if(u>0){let p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(n>a&&n>d){let p=2*Math.sqrt(1+n-a-d);this._w=(h-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>d){let p=2*Math.sqrt(1+a-n-d);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+d-n-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(we(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let p=1-e;return this._w=p*o+e*this._w,this._x=p*n+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),d=Math.sin((1-e)*h)/c,u=Math.sin(e*h)/c;return this._w=o*d+this._w*u,this._x=n*d+this._x*u,this._y=s*d+this._y*u,this._z=r*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},R=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Mc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Mc.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),d=2*(r*n-o*e);return this.x=e+l*c+o*d-a*h,this.y=n+l*h+a*c-r*d,this.z=s+l*d+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Do.copy(this).projectOnVector(t),this.sub(Do)}reflect(t){return this.sub(Do.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(we(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Do=new R,Mc=new Re,Xn=class{constructor(t=new R(1/0,1/0,1/0),e=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(_n.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(_n.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=_n.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,_n):_n.fromBufferAttribute(r,o),_n.applyMatrix4(t.matrixWorld),this.expandByPoint(_n);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),tr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),tr.copy(n.boundingBox)),tr.applyMatrix4(t.matrixWorld),this.union(tr)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,_n),_n.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ys),er.subVectors(this.max,ys),Li.subVectors(t.a,ys),Ui.subVectors(t.b,ys),Ni.subVectors(t.c,ys),jn.subVectors(Ui,Li),Qn.subVectors(Ni,Ui),ui.subVectors(Li,Ni);let e=[0,-jn.z,jn.y,0,-Qn.z,Qn.y,0,-ui.z,ui.y,jn.z,0,-jn.x,Qn.z,0,-Qn.x,ui.z,0,-ui.x,-jn.y,jn.x,0,-Qn.y,Qn.x,0,-ui.y,ui.x,0];return!Lo(e,Li,Ui,Ni,er)||(e=[1,0,0,0,1,0,0,0,1],!Lo(e,Li,Ui,Ni,er))?!1:(nr.crossVectors(jn,Qn),e=[nr.x,nr.y,nr.z],Lo(e,Li,Ui,Ni,er))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,_n).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(_n).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Fn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Fn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Fn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Fn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Fn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Fn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Fn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Fn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Fn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Fn=[new R,new R,new R,new R,new R,new R,new R,new R],_n=new R,tr=new Xn,Li=new R,Ui=new R,Ni=new R,jn=new R,Qn=new R,ui=new R,ys=new R,er=new R,nr=new R,fi=new R;function Lo(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){fi.fromArray(i,r);let a=s.x*Math.abs(fi.x)+s.y*Math.abs(fi.y)+s.z*Math.abs(fi.z),l=t.dot(fi),c=e.dot(fi),h=n.dot(fi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Bf=new Xn,Ms=new R,Uo=new R,Yn=class{constructor(t=new R,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Bf.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ms.subVectors(t,this.center);let e=Ms.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Ms,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Uo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ms.copy(t.center).add(Uo)),this.expandByPoint(Ms.copy(t.center).sub(Uo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},On=new R,No=new R,ir=new R,ti=new R,Fo=new R,sr=new R,Oo=new R,oi=class{constructor(t=new R,e=new R(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,On)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=On.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(On.copy(this.origin).addScaledVector(this.direction,e),On.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){No.copy(t).add(e).multiplyScalar(.5),ir.copy(e).sub(t).normalize(),ti.copy(this.origin).sub(No);let r=t.distanceTo(e)*.5,o=-this.direction.dot(ir),a=ti.dot(this.direction),l=-ti.dot(ir),c=ti.lengthSq(),h=Math.abs(1-o*o),d,u,p,g;if(h>0)if(d=o*l-a,u=o*a-l,g=r*h,d>=0)if(u>=-g)if(u<=g){let x=1/h;d*=x,u*=x,p=d*(d+o*u+2*a)+u*(o*d+u+2*l)+c}else u=r,d=Math.max(0,-(o*u+a)),p=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(o*u+a)),p=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-o*r+a)),u=d>0?-r:Math.min(Math.max(-r,-l),r),p=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-r,-l),r),p=u*(u+2*l)+c):(d=Math.max(0,-(o*r+a)),u=d>0?r:Math.min(Math.max(-r,-l),r),p=-d*d+u*(u+2*l)+c);else u=o>0?-r:r,d=Math.max(0,-(o*u+a)),p=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(No).addScaledVector(ir,u),p}intersectSphere(t,e){On.subVectors(t.center,this.origin);let n=On.dot(this.direction),s=On.dot(On)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,o=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,o=(t.min.y-u.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(a=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,On)!==null}intersectTriangle(t,e,n,s,r){Fo.subVectors(e,t),sr.subVectors(n,t),Oo.crossVectors(Fo,sr);let o=this.direction.dot(Oo),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ti.subVectors(this.origin,t);let l=a*this.direction.dot(sr.crossVectors(ti,sr));if(l<0)return null;let c=a*this.direction.dot(Fo.cross(ti));if(c<0||l+c>o)return null;let h=-a*ti.dot(Oo);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Yt=class i{constructor(t,e,n,s,r,o,a,l,c,h,d,u,p,g,x,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,d,u,p,g,x,m)}set(t,e,n,s,r,o,a,l,c,h,d,u,p,g,x,m){let f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=h,f[10]=d,f[14]=u,f[3]=p,f[7]=g,f[11]=x,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/Fi.setFromMatrixColumn(t,0).length(),r=1/Fi.setFromMatrixColumn(t,1).length(),o=1/Fi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let u=o*h,p=o*d,g=a*h,x=a*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=p+g*c,e[5]=u-x*c,e[9]=-a*l,e[2]=x-u*c,e[6]=g+p*c,e[10]=o*l}else if(t.order==="YXZ"){let u=l*h,p=l*d,g=c*h,x=c*d;e[0]=u+x*a,e[4]=g*a-p,e[8]=o*c,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=p*a-g,e[6]=x+u*a,e[10]=o*l}else if(t.order==="ZXY"){let u=l*h,p=l*d,g=c*h,x=c*d;e[0]=u-x*a,e[4]=-o*d,e[8]=g+p*a,e[1]=p+g*a,e[5]=o*h,e[9]=x-u*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let u=o*h,p=o*d,g=a*h,x=a*d;e[0]=l*h,e[4]=g*c-p,e[8]=u*c+x,e[1]=l*d,e[5]=x*c+u,e[9]=p*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let u=o*l,p=o*c,g=a*l,x=a*c;e[0]=l*h,e[4]=x-u*d,e[8]=g*d+p,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=p*d+g,e[10]=u-x*d}else if(t.order==="XZY"){let u=o*l,p=o*c,g=a*l,x=a*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+x,e[5]=o*h,e[9]=p*d-g,e[2]=g*d-p,e[6]=a*h,e[10]=x*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(zf,t,Hf)}lookAt(t,e,n){let s=this.elements;return sn.subVectors(t,e),sn.lengthSq()===0&&(sn.z=1),sn.normalize(),ei.crossVectors(n,sn),ei.lengthSq()===0&&(Math.abs(n.z)===1?sn.x+=1e-4:sn.z+=1e-4,sn.normalize(),ei.crossVectors(n,sn)),ei.normalize(),rr.crossVectors(sn,ei),s[0]=ei.x,s[4]=rr.x,s[8]=sn.x,s[1]=ei.y,s[5]=rr.y,s[9]=sn.y,s[2]=ei.z,s[6]=rr.z,s[10]=sn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],p=n[13],g=n[2],x=n[6],m=n[10],f=n[14],y=n[3],v=n[7],b=n[11],D=n[15],T=s[0],w=s[4],I=s[8],F=s[12],_=s[1],M=s[5],C=s[9],N=s[13],B=s[2],et=s[6],W=s[10],it=s[14],X=s[3],Y=s[7],O=s[11],Q=s[15];return r[0]=o*T+a*_+l*B+c*X,r[4]=o*w+a*M+l*et+c*Y,r[8]=o*I+a*C+l*W+c*O,r[12]=o*F+a*N+l*it+c*Q,r[1]=h*T+d*_+u*B+p*X,r[5]=h*w+d*M+u*et+p*Y,r[9]=h*I+d*C+u*W+p*O,r[13]=h*F+d*N+u*it+p*Q,r[2]=g*T+x*_+m*B+f*X,r[6]=g*w+x*M+m*et+f*Y,r[10]=g*I+x*C+m*W+f*O,r[14]=g*F+x*N+m*it+f*Q,r[3]=y*T+v*_+b*B+D*X,r[7]=y*w+v*M+b*et+D*Y,r[11]=y*I+v*C+b*W+D*O,r[15]=y*F+v*N+b*it+D*Q,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],p=t[14],g=t[3],x=t[7],m=t[11],f=t[15];return g*(+r*l*d-s*c*d-r*a*u+n*c*u+s*a*p-n*l*p)+x*(+e*l*p-e*c*u+r*o*u-s*o*p+s*c*h-r*l*h)+m*(+e*c*d-e*a*p-r*o*d+n*o*p+r*a*h-n*c*h)+f*(-s*a*h-e*l*d+e*a*u+s*o*d-n*o*u+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],p=t[11],g=t[12],x=t[13],m=t[14],f=t[15],y=d*m*c-x*u*c+x*l*p-a*m*p-d*l*f+a*u*f,v=g*u*c-h*m*c-g*l*p+o*m*p+h*l*f-o*u*f,b=h*x*c-g*d*c+g*a*p-o*x*p-h*a*f+o*d*f,D=g*d*l-h*x*l-g*a*u+o*x*u+h*a*m-o*d*m,T=e*y+n*v+s*b+r*D;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let w=1/T;return t[0]=y*w,t[1]=(x*u*r-d*m*r-x*s*p+n*m*p+d*s*f-n*u*f)*w,t[2]=(a*m*r-x*l*r+x*s*c-n*m*c-a*s*f+n*l*f)*w,t[3]=(d*l*r-a*u*r-d*s*c+n*u*c+a*s*p-n*l*p)*w,t[4]=v*w,t[5]=(h*m*r-g*u*r+g*s*p-e*m*p-h*s*f+e*u*f)*w,t[6]=(g*l*r-o*m*r-g*s*c+e*m*c+o*s*f-e*l*f)*w,t[7]=(o*u*r-h*l*r+h*s*c-e*u*c-o*s*p+e*l*p)*w,t[8]=b*w,t[9]=(g*d*r-h*x*r-g*n*p+e*x*p+h*n*f-e*d*f)*w,t[10]=(o*x*r-g*a*r+g*n*c-e*x*c-o*n*f+e*a*f)*w,t[11]=(h*a*r-o*d*r-h*n*c+e*d*c+o*n*p-e*a*p)*w,t[12]=D*w,t[13]=(h*x*s-g*d*s+g*n*u-e*x*u-h*n*m+e*d*m)*w,t[14]=(g*a*s-o*x*s-g*n*l+e*x*l+o*n*m-e*a*m)*w,t[15]=(o*d*s-h*a*s+h*n*l-e*d*l-o*n*u+e*a*u)*w,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,d=a+a,u=r*c,p=r*h,g=r*d,x=o*h,m=o*d,f=a*d,y=l*c,v=l*h,b=l*d,D=n.x,T=n.y,w=n.z;return s[0]=(1-(x+f))*D,s[1]=(p+b)*D,s[2]=(g-v)*D,s[3]=0,s[4]=(p-b)*T,s[5]=(1-(u+f))*T,s[6]=(m+y)*T,s[7]=0,s[8]=(g+v)*w,s[9]=(m-y)*w,s[10]=(1-(u+x))*w,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=Fi.set(s[0],s[1],s[2]).length(),o=Fi.set(s[4],s[5],s[6]).length(),a=Fi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],xn.copy(this);let c=1/r,h=1/o,d=1/a;return xn.elements[0]*=c,xn.elements[1]*=c,xn.elements[2]*=c,xn.elements[4]*=h,xn.elements[5]*=h,xn.elements[6]*=h,xn.elements[8]*=d,xn.elements[9]*=d,xn.elements[10]*=d,e.setFromRotationMatrix(xn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=Vn){let l=this.elements,c=2*r/(e-t),h=2*r/(n-s),d=(e+t)/(e-t),u=(n+s)/(n-s),p,g;if(a===Vn)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Or)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Vn){let l=this.elements,c=1/(e-t),h=1/(n-s),d=1/(o-r),u=(e+t)*c,p=(n+s)*h,g,x;if(a===Vn)g=(o+r)*d,x=-2*d;else if(a===Or)g=r*d,x=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Fi=new R,xn=new Yt,zf=new R(0,0,0),Hf=new R(1,1,1),ei=new R,rr=new R,sn=new R,Ec=new Yt,bc=new Re,Le=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(we(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-we(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(we(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-we(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(we(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-we(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Ec.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ec,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return bc.setFromEuler(this),this.setFromQuaternion(bc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Le.DEFAULT_ORDER="XYZ";var Fs=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},kf=0,Sc=new R,Oi=new Re,Bn=new Yt,or=new R,Es=new R,Vf=new R,Gf=new Re,wc=new R(1,0,0),Tc=new R(0,1,0),Ac=new R(0,0,1),Rc={type:"added"},Wf={type:"removed"},Bi={type:"childadded",child:null},Bo={type:"childremoved",child:null},Oe=class i extends Wn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:kf++}),this.uuid=cs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new R,e=new Le,n=new Re,s=new R(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Yt},normalMatrix:{value:new Jt}}),this.matrix=new Yt,this.matrixWorld=new Yt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Fs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Oi.setFromAxisAngle(t,e),this.quaternion.multiply(Oi),this}rotateOnWorldAxis(t,e){return Oi.setFromAxisAngle(t,e),this.quaternion.premultiply(Oi),this}rotateX(t){return this.rotateOnAxis(wc,t)}rotateY(t){return this.rotateOnAxis(Tc,t)}rotateZ(t){return this.rotateOnAxis(Ac,t)}translateOnAxis(t,e){return Sc.copy(t).applyQuaternion(this.quaternion),this.position.add(Sc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(wc,t)}translateY(t){return this.translateOnAxis(Tc,t)}translateZ(t){return this.translateOnAxis(Ac,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Bn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?or.copy(t):or.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Es.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Bn.lookAt(Es,or,this.up):Bn.lookAt(or,Es,this.up),this.quaternion.setFromRotationMatrix(Bn),s&&(Bn.extractRotation(s.matrixWorld),Oi.setFromRotationMatrix(Bn),this.quaternion.premultiply(Oi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Rc),Bi.child=t,this.dispatchEvent(Bi),Bi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Wf),Bo.child=t,this.dispatchEvent(Bo),Bo.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Bn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Bn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Bn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Rc),Bi.child=t,this.dispatchEvent(Bi),Bi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Es,t,Vf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Es,Gf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),d=o(t.shapes),u=o(t.skeletons),p=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};Oe.DEFAULT_UP=new R(0,1,0);Oe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Oe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var vn=new R,zn=new R,zo=new R,Hn=new R,zi=new R,Hi=new R,Cc=new R,Ho=new R,ko=new R,Vo=new R,Go=new ve,Wo=new ve,Xo=new ve,vi=class i{constructor(t=new R,e=new R,n=new R){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),vn.subVectors(t,e),s.cross(vn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){vn.subVectors(s,e),zn.subVectors(n,e),zo.subVectors(t,e);let o=vn.dot(vn),a=vn.dot(zn),l=vn.dot(zo),c=zn.dot(zn),h=zn.dot(zo),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;let u=1/d,p=(c*l-a*h)*u,g=(o*h-a*l)*u;return r.set(1-p-g,g,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Hn)===null?!1:Hn.x>=0&&Hn.y>=0&&Hn.x+Hn.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,Hn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Hn.x),l.addScaledVector(o,Hn.y),l.addScaledVector(a,Hn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return Go.setScalar(0),Wo.setScalar(0),Xo.setScalar(0),Go.fromBufferAttribute(t,e),Wo.fromBufferAttribute(t,n),Xo.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Go,r.x),o.addScaledVector(Wo,r.y),o.addScaledVector(Xo,r.z),o}static isFrontFacing(t,e,n,s){return vn.subVectors(n,e),zn.subVectors(t,e),vn.cross(zn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return vn.subVectors(this.c,this.b),zn.subVectors(this.a,this.b),vn.cross(zn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;zi.subVectors(s,n),Hi.subVectors(r,n),Ho.subVectors(t,n);let l=zi.dot(Ho),c=Hi.dot(Ho);if(l<=0&&c<=0)return e.copy(n);ko.subVectors(t,s);let h=zi.dot(ko),d=Hi.dot(ko);if(h>=0&&d<=h)return e.copy(s);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(zi,o);Vo.subVectors(t,r);let p=zi.dot(Vo),g=Hi.dot(Vo);if(g>=0&&p<=g)return e.copy(r);let x=p*c-l*g;if(x<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(Hi,a);let m=h*g-p*d;if(m<=0&&d-h>=0&&p-g>=0)return Cc.subVectors(r,s),a=(d-h)/(d-h+(p-g)),e.copy(s).addScaledVector(Cc,a);let f=1/(m+x+u);return o=x*f,a=u*f,e.copy(n).addScaledVector(zi,o).addScaledVector(Hi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Lh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ni={h:0,s:0,l:0},ar={h:0,s:0,l:0};function Yo(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var G=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ye){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,re.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=re.workingColorSpace){return this.r=t,this.g=e,this.b=n,re.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=re.workingColorSpace){if(t=Xl(t,1),e=we(e,0,1),n=we(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Yo(o,r,t+1/3),this.g=Yo(o,r,t),this.b=Yo(o,r,t-1/3)}return re.toWorkingColorSpace(this,s),this}setStyle(t,e=Ye){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ye){let n=Lh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ki(t.r),this.g=Ki(t.g),this.b=Ki(t.b),this}copyLinearToSRGB(t){return this.r=Po(t.r),this.g=Po(t.g),this.b=Po(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ye){return re.fromWorkingColorSpace(ke.copy(this),t),Math.round(we(ke.r*255,0,255))*65536+Math.round(we(ke.g*255,0,255))*256+Math.round(we(ke.b*255,0,255))}getHexString(t=Ye){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=re.workingColorSpace){re.fromWorkingColorSpace(ke.copy(this),e);let n=ke.r,s=ke.g,r=ke.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=re.workingColorSpace){return re.fromWorkingColorSpace(ke.copy(this),e),t.r=ke.r,t.g=ke.g,t.b=ke.b,t}getStyle(t=Ye){re.fromWorkingColorSpace(ke.copy(this),t);let e=ke.r,n=ke.g,s=ke.b;return t!==Ye?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(ni),this.setHSL(ni.h+t,ni.s+e,ni.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ni),t.getHSL(ar);let n=Cs(ni.h,ar.h,e),s=Cs(ni.s,ar.s,e),r=Cs(ni.l,ar.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},ke=new G;G.NAMES=Lh;var Xf=0,qn=class extends Wn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Xf++}),this.uuid=cs(),this.name="",this.type="Material",this.blending=En,this.side=ri,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=aa,this.blendDst=la,this.blendEquation=xi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new G(0,0,0),this.blendAlpha=0,this.depthFunc=Ji,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=pc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ii,this.stencilZFail=Ii,this.stencilZPass=Ii,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==En&&(n.blending=this.blending),this.side!==ri&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==aa&&(n.blendSrc=this.blendSrc),this.blendDst!==la&&(n.blendDst=this.blendDst),this.blendEquation!==xi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ji&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==pc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ii&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ii&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ii&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Be=class extends qn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new G(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Le,this.combine=xh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Se=new R,lr=new _t,jt=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=mc,this.updateRanges=[],this.gpuType=Cn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)lr.fromBufferAttribute(this,e),lr.applyMatrix3(t),this.setXY(e,lr.x,lr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.applyMatrix3(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.applyMatrix4(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.applyNormalMatrix(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.transformDirection(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Yi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=We(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Yi(e,this.array)),e}setX(t,e){return this.normalized&&(e=We(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Yi(e,this.array)),e}setY(t,e){return this.normalized&&(e=We(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Yi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=We(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Yi(e,this.array)),e}setW(t,e){return this.normalized&&(e=We(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=We(e,this.array),n=We(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=We(e,this.array),n=We(n,this.array),s=We(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=We(e,this.array),n=We(n,this.array),s=We(s,this.array),r=We(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==mc&&(t.usage=this.usage),t}};var kr=class extends jt{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Vr=class extends jt{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Nt=class extends jt{constructor(t,e,n){super(new Float32Array(t),e,n)}},Yf=0,un=new Yt,qo=new Oe,ki=new R,rn=new Xn,bs=new Xn,De=new R,Zt=class i extends Wn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Yf++}),this.uuid=cs(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Dh(t)?Vr:kr)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Jt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return un.makeRotationFromQuaternion(t),this.applyMatrix4(un),this}rotateX(t){return un.makeRotationX(t),this.applyMatrix4(un),this}rotateY(t){return un.makeRotationY(t),this.applyMatrix4(un),this}rotateZ(t){return un.makeRotationZ(t),this.applyMatrix4(un),this}translate(t,e,n){return un.makeTranslation(t,e,n),this.applyMatrix4(un),this}scale(t,e,n){return un.makeScale(t,e,n),this.applyMatrix4(un),this}lookAt(t){return qo.lookAt(t),qo.updateMatrix(),this.applyMatrix4(qo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ki).negate(),this.translate(ki.x,ki.y,ki.z),this}setFromPoints(t){let e=[];for(let n=0,s=t.length;n<s;n++){let r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Nt(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Xn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];rn.setFromBufferAttribute(r),this.morphTargetsRelative?(De.addVectors(this.boundingBox.min,rn.min),this.boundingBox.expandByPoint(De),De.addVectors(this.boundingBox.max,rn.max),this.boundingBox.expandByPoint(De)):(this.boundingBox.expandByPoint(rn.min),this.boundingBox.expandByPoint(rn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Yn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(t){let n=this.boundingSphere.center;if(rn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];bs.setFromBufferAttribute(a),this.morphTargetsRelative?(De.addVectors(rn.min,bs.min),rn.expandByPoint(De),De.addVectors(rn.max,bs.max),rn.expandByPoint(De)):(rn.expandByPoint(bs.min),rn.expandByPoint(bs.max))}rn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)De.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(De));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)De.fromBufferAttribute(a,c),l&&(ki.fromBufferAttribute(t,c),De.add(ki)),s=Math.max(s,n.distanceToSquared(De))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new jt(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let I=0;I<n.count;I++)a[I]=new R,l[I]=new R;let c=new R,h=new R,d=new R,u=new _t,p=new _t,g=new _t,x=new R,m=new R;function f(I,F,_){c.fromBufferAttribute(n,I),h.fromBufferAttribute(n,F),d.fromBufferAttribute(n,_),u.fromBufferAttribute(r,I),p.fromBufferAttribute(r,F),g.fromBufferAttribute(r,_),h.sub(c),d.sub(c),p.sub(u),g.sub(u);let M=1/(p.x*g.y-g.x*p.y);isFinite(M)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(d,-p.y).multiplyScalar(M),m.copy(d).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(M),a[I].add(x),a[F].add(x),a[_].add(x),l[I].add(m),l[F].add(m),l[_].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let I=0,F=y.length;I<F;++I){let _=y[I],M=_.start,C=_.count;for(let N=M,B=M+C;N<B;N+=3)f(t.getX(N+0),t.getX(N+1),t.getX(N+2))}let v=new R,b=new R,D=new R,T=new R;function w(I){D.fromBufferAttribute(s,I),T.copy(D);let F=a[I];v.copy(F),v.sub(D.multiplyScalar(D.dot(F))).normalize(),b.crossVectors(T,F);let M=b.dot(l[I])<0?-1:1;o.setXYZW(I,v.x,v.y,v.z,M)}for(let I=0,F=y.length;I<F;++I){let _=y[I],M=_.start,C=_.count;for(let N=M,B=M+C;N<B;N+=3)w(t.getX(N+0)),w(t.getX(N+1)),w(t.getX(N+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new jt(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,p=n.count;u<p;u++)n.setXYZ(u,0,0,0);let s=new R,r=new R,o=new R,a=new R,l=new R,c=new R,h=new R,d=new R;if(t)for(let u=0,p=t.count;u<p;u+=3){let g=t.getX(u+0),x=t.getX(u+1),m=t.getX(u+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,m),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,p=e.count;u<p;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)De.fromBufferAttribute(t,e),De.normalize(),t.setXYZ(e,De.x,De.y,De.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,d=a.normalized,u=new c.constructor(l.length*h),p=0,g=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?p=l[x]*a.data.stride+a.offset:p=l[x]*h;for(let f=0;f<h;f++)u[g++]=c[p++]}return new jt(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){let u=c[h],p=t(u,n);l.push(p)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let p=c[d];h.push(p.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],d=r[c];for(let u=0,p=d.length;u<p;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Pc=new Yt,di=new oi,cr=new Yn,Ic=new R,hr=new R,ur=new R,fr=new R,Zo=new R,dr=new R,Dc=new R,pr=new R,Ht=class extends Oe{constructor(t=new Zt,e=new Be){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){dr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],d=r[l];h!==0&&(Zo.fromBufferAttribute(d,t),o?dr.addScaledVector(Zo,h):dr.addScaledVector(Zo.sub(e),h))}e.add(dr)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),cr.copy(n.boundingSphere),cr.applyMatrix4(r),di.copy(t.ray).recast(t.near),!(cr.containsPoint(di.origin)===!1&&(di.intersectSphere(cr,Ic)===null||di.origin.distanceToSquared(Ic)>(t.far-t.near)**2))&&(Pc.copy(r).invert(),di.copy(t.ray).applyMatrix4(Pc),!(n.boundingBox!==null&&di.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,di)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=u.length;g<x;g++){let m=u[g],f=o[m.materialIndex],y=Math.max(m.start,p.start),v=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let b=y,D=v;b<D;b+=3){let T=a.getX(b),w=a.getX(b+1),I=a.getX(b+2);s=mr(this,f,t,n,c,h,d,T,w,I),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let m=g,f=x;m<f;m+=3){let y=a.getX(m),v=a.getX(m+1),b=a.getX(m+2);s=mr(this,o,t,n,c,h,d,y,v,b),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,x=u.length;g<x;g++){let m=u[g],f=o[m.materialIndex],y=Math.max(m.start,p.start),v=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let b=y,D=v;b<D;b+=3){let T=b,w=b+1,I=b+2;s=mr(this,f,t,n,c,h,d,T,w,I),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let m=g,f=x;m<f;m+=3){let y=m,v=m+1,b=m+2;s=mr(this,o,t,n,c,h,d,y,v,b),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function qf(i,t,e,n,s,r,o,a){let l;if(t.side===Ve?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===ri,a),l===null)return null;pr.copy(a),pr.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(pr);return c<e.near||c>e.far?null:{distance:c,point:pr.clone(),object:i}}function mr(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,hr),i.getVertexPosition(l,ur),i.getVertexPosition(c,fr);let h=qf(i,t,e,n,hr,ur,fr,Dc);if(h){let d=new R;vi.getBarycoord(Dc,hr,ur,fr,d),s&&(h.uv=vi.getInterpolatedAttribute(s,a,l,c,d,new _t)),r&&(h.uv1=vi.getInterpolatedAttribute(r,a,l,c,d,new _t)),o&&(h.normal=vi.getInterpolatedAttribute(o,a,l,c,d,new R),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new R,materialIndex:0};vi.getNormal(hr,ur,fr,u.normal),h.face=u,h.barycoord=d}return h}var ge=class i extends Zt{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],d=[],u=0,p=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Nt(c,3)),this.setAttribute("normal",new Nt(h,3)),this.setAttribute("uv",new Nt(d,2));function g(x,m,f,y,v,b,D,T,w,I,F){let _=b/w,M=D/I,C=b/2,N=D/2,B=T/2,et=w+1,W=I+1,it=0,X=0,Y=new R;for(let O=0;O<W;O++){let Q=O*M-N;for(let gt=0;gt<et;gt++){let ct=gt*_-C;Y[x]=ct*y,Y[m]=Q*v,Y[f]=B,c.push(Y.x,Y.y,Y.z),Y[x]=0,Y[m]=0,Y[f]=T>0?1:-1,h.push(Y.x,Y.y,Y.z),d.push(gt/w),d.push(1-O/I),it+=1}}for(let O=0;O<I;O++)for(let Q=0;Q<w;Q++){let gt=u+Q+et*O,ct=u+Q+et*(O+1),z=u+(Q+1)+et*(O+1),$=u+(Q+1)+et*O;l.push(gt,ct,$),l.push(ct,z,$),X+=6}a.addGroup(p,X,F),p+=X,u+=it}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function ns(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Xe(i){let t={};for(let e=0;e<i.length;e++){let n=ns(i[e]);for(let s in n)t[s]=n[s]}return t}function Zf(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Uh(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:re.workingColorSpace}var li={clone:ns,merge:Xe},Kf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,$f=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ie=class extends qn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Kf,this.fragmentShader=$f,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ns(t.uniforms),this.uniformsGroups=Zf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Gr=class extends Oe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Yt,this.projectionMatrix=new Yt,this.projectionMatrixInverse=new Yt,this.coordinateSystem=Vn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},ii=new R,Lc=new _t,Uc=new _t,Ne=class extends Gr{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Ns*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Rs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ns*2*Math.atan(Math.tan(Rs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ii.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ii.x,ii.y).multiplyScalar(-t/ii.z),ii.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ii.x,ii.y).multiplyScalar(-t/ii.z)}getViewSize(t,e){return this.getViewBounds(t,Lc,Uc),e.subVectors(Uc,Lc)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Rs*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Vi=-90,Gi=1,Ka=class extends Oe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ne(Vi,Gi,t,e);s.layers=this.layers,this.add(s);let r=new Ne(Vi,Gi,t,e);r.layers=this.layers,this.add(r);let o=new Ne(Vi,Gi,t,e);o.layers=this.layers,this.add(o);let a=new Ne(Vi,Gi,t,e);a.layers=this.layers,this.add(a);let l=new Ne(Vi,Gi,t,e);l.layers=this.layers,this.add(l);let c=new Ne(Vi,Gi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===Vn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Or)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(d,u,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Wr=class extends Je{constructor(t,e,n,s,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:ji,super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},$a=class extends Fe{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Wr(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Ke}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ge(5,5,5),r=new ie({name:"CubemapFromEquirect",uniforms:ns(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ve,blending:Pn});r.uniforms.tEquirect.value=e;let o=new Ht(s,r),a=e.minFilter;return e.minFilter===Mi&&(e.minFilter=Ke),new Ka(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},Ko=new R,Jf=new R,jf=new Jt,qe=class{constructor(t=new R(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Ko.subVectors(n,e).cross(Jf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Ko),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||jf.getNormalMatrix(t),s=this.coplanarPoint(Ko).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},pi=new Yn,gr=new R,Os=class{constructor(t=new qe,e=new qe,n=new qe,s=new qe,r=new qe,o=new qe){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Vn){let n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],d=s[6],u=s[7],p=s[8],g=s[9],x=s[10],m=s[11],f=s[12],y=s[13],v=s[14],b=s[15];if(n[0].setComponents(l-r,u-c,m-p,b-f).normalize(),n[1].setComponents(l+r,u+c,m+p,b+f).normalize(),n[2].setComponents(l+o,u+h,m+g,b+y).normalize(),n[3].setComponents(l-o,u-h,m-g,b-y).normalize(),n[4].setComponents(l-a,u-d,m-x,b-v).normalize(),e===Vn)n[5].setComponents(l+a,u+d,m+x,b+v).normalize();else if(e===Or)n[5].setComponents(a,d,x,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),pi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),pi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(pi)}intersectsSprite(t){return pi.center.set(0,0,0),pi.radius=.7071067811865476,pi.applyMatrix4(t.matrixWorld),this.intersectsSphere(pi)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(gr.x=s.normal.x>0?t.max.x:t.min.x,gr.y=s.normal.y>0?t.max.y:t.min.y,gr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(gr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Nh(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Qf(i){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,d=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),a.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){let h=l.array,d=l.updateRanges;if(i.bindBuffer(c,a),d.length===0)i.bufferSubData(c,0,h);else{d.sort((p,g)=>p.start-g.start);let u=0;for(let p=1;p<d.length;p++){let g=d[u],x=d[p];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++u,d[u]=x)}d.length=u+1;for(let p=0,g=d.length;p<g;p++){let x=d[p];i.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var je=class i extends Zt{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,d=t/a,u=e/l,p=[],g=[],x=[],m=[];for(let f=0;f<h;f++){let y=f*u-o;for(let v=0;v<c;v++){let b=v*d-r;g.push(b,-y,0),x.push(0,0,1),m.push(v/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let y=0;y<a;y++){let v=y+c*f,b=y+c*(f+1),D=y+1+c*(f+1),T=y+1+c*f;p.push(v,b,T),p.push(b,D,T)}this.setIndex(p),this.setAttribute("position",new Nt(g,3)),this.setAttribute("normal",new Nt(x,3)),this.setAttribute("uv",new Nt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},td=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ed=`#ifdef USE_ALPHAHASH
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
#endif`,nd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,id=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,sd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,rd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,od=`#ifdef USE_AOMAP
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
#endif`,ad=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ld=`#ifdef USE_BATCHING
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
#endif`,cd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,hd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ud=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,fd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,dd=`#ifdef USE_IRIDESCENCE
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
#endif`,pd=`#ifdef USE_BUMPMAP
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
#endif`,md=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,gd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,_d=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,xd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,vd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,yd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Md=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ed=`#if defined( USE_COLOR_ALPHA )
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
#endif`,bd=`#define PI 3.141592653589793
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
} // validated`,Sd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,wd=`vec3 transformedNormal = objectNormal;
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
#endif`,Td=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ad=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Rd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Cd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Pd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Id=`
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
}`,Dd=`#ifdef USE_ENVMAP
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
#endif`,Ld=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ud=`#ifdef USE_ENVMAP
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
#endif`,Nd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Fd=`#ifdef USE_ENVMAP
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
#endif`,Od=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Bd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,zd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Hd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,kd=`#ifdef USE_GRADIENTMAP
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
}`,Vd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Gd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Wd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Xd=`uniform bool receiveShadow;
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
#endif`,Yd=`#ifdef USE_ENVMAP
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
#endif`,qd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Zd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Kd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,$d=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Jd=`PhysicalMaterial material;
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
#endif`,jd=`struct PhysicalMaterial {
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
}`,Qd=`
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
#endif`,tp=`#if defined( RE_IndirectDiffuse )
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
#endif`,ep=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,np=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ip=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sp=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rp=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,op=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ap=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,lp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,cp=`#if defined( USE_POINTS_UV )
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
#endif`,hp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,up=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,fp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,dp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,pp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mp=`#ifdef USE_MORPHTARGETS
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
#endif`,gp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_p=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,xp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,vp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Mp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ep=`#ifdef USE_NORMALMAP
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
#endif`,bp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Sp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,wp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Tp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ap=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Rp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Cp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Pp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ip=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Dp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Lp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Up=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Np=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Fp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Op=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Bp=`float getShadowMask() {
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
}`,zp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Hp=`#ifdef USE_SKINNING
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
#endif`,kp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Vp=`#ifdef USE_SKINNING
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
#endif`,Gp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Wp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Xp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Yp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,qp=`#ifdef USE_TRANSMISSION
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
#endif`,Zp=`#ifdef USE_TRANSMISSION
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
#endif`,Kp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$p=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Jp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Qp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,tm=`uniform sampler2D t2D;
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
}`,em=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,im=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rm=`#include <common>
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
}`,om=`#if DEPTH_PACKING == 3200
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
}`,am=`#define DISTANCE
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
}`,lm=`#define DISTANCE
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
}`,cm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,hm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,um=`uniform float scale;
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
}`,fm=`uniform vec3 diffuse;
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
}`,dm=`#include <common>
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
}`,pm=`uniform vec3 diffuse;
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
}`,mm=`#define LAMBERT
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
}`,gm=`#define LAMBERT
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
}`,_m=`#define MATCAP
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
}`,xm=`#define MATCAP
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
}`,vm=`#define NORMAL
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
}`,ym=`#define NORMAL
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
}`,Mm=`#define PHONG
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
}`,Em=`#define PHONG
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
}`,bm=`#define STANDARD
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
}`,Sm=`#define STANDARD
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
}`,wm=`#define TOON
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
}`,Tm=`#define TOON
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
}`,Am=`uniform float size;
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
}`,Rm=`uniform vec3 diffuse;
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
}`,Cm=`#include <common>
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
}`,Pm=`uniform vec3 color;
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
}`,Im=`uniform float rotation;
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
}`,Dm=`uniform vec3 diffuse;
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
}`,$t={alphahash_fragment:td,alphahash_pars_fragment:ed,alphamap_fragment:nd,alphamap_pars_fragment:id,alphatest_fragment:sd,alphatest_pars_fragment:rd,aomap_fragment:od,aomap_pars_fragment:ad,batching_pars_vertex:ld,batching_vertex:cd,begin_vertex:hd,beginnormal_vertex:ud,bsdfs:fd,iridescence_fragment:dd,bumpmap_pars_fragment:pd,clipping_planes_fragment:md,clipping_planes_pars_fragment:gd,clipping_planes_pars_vertex:_d,clipping_planes_vertex:xd,color_fragment:vd,color_pars_fragment:yd,color_pars_vertex:Md,color_vertex:Ed,common:bd,cube_uv_reflection_fragment:Sd,defaultnormal_vertex:wd,displacementmap_pars_vertex:Td,displacementmap_vertex:Ad,emissivemap_fragment:Rd,emissivemap_pars_fragment:Cd,colorspace_fragment:Pd,colorspace_pars_fragment:Id,envmap_fragment:Dd,envmap_common_pars_fragment:Ld,envmap_pars_fragment:Ud,envmap_pars_vertex:Nd,envmap_physical_pars_fragment:Yd,envmap_vertex:Fd,fog_vertex:Od,fog_pars_vertex:Bd,fog_fragment:zd,fog_pars_fragment:Hd,gradientmap_pars_fragment:kd,lightmap_pars_fragment:Vd,lights_lambert_fragment:Gd,lights_lambert_pars_fragment:Wd,lights_pars_begin:Xd,lights_toon_fragment:qd,lights_toon_pars_fragment:Zd,lights_phong_fragment:Kd,lights_phong_pars_fragment:$d,lights_physical_fragment:Jd,lights_physical_pars_fragment:jd,lights_fragment_begin:Qd,lights_fragment_maps:tp,lights_fragment_end:ep,logdepthbuf_fragment:np,logdepthbuf_pars_fragment:ip,logdepthbuf_pars_vertex:sp,logdepthbuf_vertex:rp,map_fragment:op,map_pars_fragment:ap,map_particle_fragment:lp,map_particle_pars_fragment:cp,metalnessmap_fragment:hp,metalnessmap_pars_fragment:up,morphinstance_vertex:fp,morphcolor_vertex:dp,morphnormal_vertex:pp,morphtarget_pars_vertex:mp,morphtarget_vertex:gp,normal_fragment_begin:_p,normal_fragment_maps:xp,normal_pars_fragment:vp,normal_pars_vertex:yp,normal_vertex:Mp,normalmap_pars_fragment:Ep,clearcoat_normal_fragment_begin:bp,clearcoat_normal_fragment_maps:Sp,clearcoat_pars_fragment:wp,iridescence_pars_fragment:Tp,opaque_fragment:Ap,packing:Rp,premultiplied_alpha_fragment:Cp,project_vertex:Pp,dithering_fragment:Ip,dithering_pars_fragment:Dp,roughnessmap_fragment:Lp,roughnessmap_pars_fragment:Up,shadowmap_pars_fragment:Np,shadowmap_pars_vertex:Fp,shadowmap_vertex:Op,shadowmask_pars_fragment:Bp,skinbase_vertex:zp,skinning_pars_vertex:Hp,skinning_vertex:kp,skinnormal_vertex:Vp,specularmap_fragment:Gp,specularmap_pars_fragment:Wp,tonemapping_fragment:Xp,tonemapping_pars_fragment:Yp,transmission_fragment:qp,transmission_pars_fragment:Zp,uv_pars_fragment:Kp,uv_pars_vertex:$p,uv_vertex:Jp,worldpos_vertex:jp,background_vert:Qp,background_frag:tm,backgroundCube_vert:em,backgroundCube_frag:nm,cube_vert:im,cube_frag:sm,depth_vert:rm,depth_frag:om,distanceRGBA_vert:am,distanceRGBA_frag:lm,equirect_vert:cm,equirect_frag:hm,linedashed_vert:um,linedashed_frag:fm,meshbasic_vert:dm,meshbasic_frag:pm,meshlambert_vert:mm,meshlambert_frag:gm,meshmatcap_vert:_m,meshmatcap_frag:xm,meshnormal_vert:vm,meshnormal_frag:ym,meshphong_vert:Mm,meshphong_frag:Em,meshphysical_vert:bm,meshphysical_frag:Sm,meshtoon_vert:wm,meshtoon_frag:Tm,points_vert:Am,points_frag:Rm,shadow_vert:Cm,shadow_frag:Pm,sprite_vert:Im,sprite_frag:Dm},At={common:{diffuse:{value:new G(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Jt}},envmap:{envMap:{value:null},envMapRotation:{value:new Jt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Jt},normalScale:{value:new _t(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new G(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new G(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0},uvTransform:{value:new Jt}},sprite:{diffuse:{value:new G(16777215)},opacity:{value:1},center:{value:new _t(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}}},An={basic:{uniforms:Xe([At.common,At.specularmap,At.envmap,At.aomap,At.lightmap,At.fog]),vertexShader:$t.meshbasic_vert,fragmentShader:$t.meshbasic_frag},lambert:{uniforms:Xe([At.common,At.specularmap,At.envmap,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.fog,At.lights,{emissive:{value:new G(0)}}]),vertexShader:$t.meshlambert_vert,fragmentShader:$t.meshlambert_frag},phong:{uniforms:Xe([At.common,At.specularmap,At.envmap,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.fog,At.lights,{emissive:{value:new G(0)},specular:{value:new G(1118481)},shininess:{value:30}}]),vertexShader:$t.meshphong_vert,fragmentShader:$t.meshphong_frag},standard:{uniforms:Xe([At.common,At.envmap,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.roughnessmap,At.metalnessmap,At.fog,At.lights,{emissive:{value:new G(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag},toon:{uniforms:Xe([At.common,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.gradientmap,At.fog,At.lights,{emissive:{value:new G(0)}}]),vertexShader:$t.meshtoon_vert,fragmentShader:$t.meshtoon_frag},matcap:{uniforms:Xe([At.common,At.bumpmap,At.normalmap,At.displacementmap,At.fog,{matcap:{value:null}}]),vertexShader:$t.meshmatcap_vert,fragmentShader:$t.meshmatcap_frag},points:{uniforms:Xe([At.points,At.fog]),vertexShader:$t.points_vert,fragmentShader:$t.points_frag},dashed:{uniforms:Xe([At.common,At.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$t.linedashed_vert,fragmentShader:$t.linedashed_frag},depth:{uniforms:Xe([At.common,At.displacementmap]),vertexShader:$t.depth_vert,fragmentShader:$t.depth_frag},normal:{uniforms:Xe([At.common,At.bumpmap,At.normalmap,At.displacementmap,{opacity:{value:1}}]),vertexShader:$t.meshnormal_vert,fragmentShader:$t.meshnormal_frag},sprite:{uniforms:Xe([At.sprite,At.fog]),vertexShader:$t.sprite_vert,fragmentShader:$t.sprite_frag},background:{uniforms:{uvTransform:{value:new Jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$t.background_vert,fragmentShader:$t.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Jt}},vertexShader:$t.backgroundCube_vert,fragmentShader:$t.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$t.cube_vert,fragmentShader:$t.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$t.equirect_vert,fragmentShader:$t.equirect_frag},distanceRGBA:{uniforms:Xe([At.common,At.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$t.distanceRGBA_vert,fragmentShader:$t.distanceRGBA_frag},shadow:{uniforms:Xe([At.lights,At.fog,{color:{value:new G(0)},opacity:{value:1}}]),vertexShader:$t.shadow_vert,fragmentShader:$t.shadow_frag}};An.physical={uniforms:Xe([An.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Jt},clearcoatNormalScale:{value:new _t(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Jt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Jt},sheen:{value:0},sheenColor:{value:new G(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Jt},transmissionSamplerSize:{value:new _t},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Jt},attenuationDistance:{value:0},attenuationColor:{value:new G(0)},specularColor:{value:new G(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Jt},anisotropyVector:{value:new _t},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Jt}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag};var _r={r:0,b:0,g:0},mi=new Le,Lm=new Yt;function Um(i,t,e,n,s,r,o){let a=new G(0),l=r===!0?0:1,c,h,d=null,u=0,p=null;function g(y){let v=y.isScene===!0?y.background:null;return v&&v.isTexture&&(v=(y.backgroundBlurriness>0?e:t).get(v)),v}function x(y){let v=!1,b=g(y);b===null?f(a,l):b&&b.isColor&&(f(b,1),v=!0);let D=i.xr.getEnvironmentBlendMode();D==="additive"?n.buffers.color.setClear(0,0,0,1,o):D==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(y,v){let b=g(v);b&&(b.isCubeTexture||b.mapping===ao)?(h===void 0&&(h=new Ht(new ge(1,1,1),new ie({name:"BackgroundCubeMaterial",uniforms:ns(An.backgroundCube.uniforms),vertexShader:An.backgroundCube.vertexShader,fragmentShader:An.backgroundCube.fragmentShader,side:Ve,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(D,T,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),mi.copy(v.backgroundRotation),mi.x*=-1,mi.y*=-1,mi.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(mi.y*=-1,mi.z*=-1),h.material.uniforms.envMap.value=b,h.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Lm.makeRotationFromEuler(mi)),h.material.toneMapped=re.getTransfer(b.colorSpace)!==ue,(d!==b||u!==b.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,d=b,u=b.version,p=i.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new Ht(new je(2,2),new ie({name:"BackgroundMaterial",uniforms:ns(An.background.uniforms),vertexShader:An.background.vertexShader,fragmentShader:An.background.fragmentShader,side:ri,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=re.getTransfer(b.colorSpace)!==ue,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(d!==b||u!==b.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,d=b,u=b.version,p=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function f(y,v){y.getRGB(_r,Uh(i)),n.buffers.color.setClear(_r.r,_r.g,_r.b,v,o)}return{getClearColor:function(){return a},setClearColor:function(y,v=1){a.set(y),l=v,f(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,f(a,l)},render:x,addToRenderList:m}}function Nm(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,o=!1;function a(_,M,C,N,B){let et=!1,W=d(N,C,M);r!==W&&(r=W,c(r.object)),et=p(_,N,C,B),et&&g(_,N,C,B),B!==null&&t.update(B,i.ELEMENT_ARRAY_BUFFER),(et||o)&&(o=!1,b(_,M,C,N),B!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(B).buffer))}function l(){return i.createVertexArray()}function c(_){return i.bindVertexArray(_)}function h(_){return i.deleteVertexArray(_)}function d(_,M,C){let N=C.wireframe===!0,B=n[_.id];B===void 0&&(B={},n[_.id]=B);let et=B[M.id];et===void 0&&(et={},B[M.id]=et);let W=et[N];return W===void 0&&(W=u(l()),et[N]=W),W}function u(_){let M=[],C=[],N=[];for(let B=0;B<e;B++)M[B]=0,C[B]=0,N[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:M,enabledAttributes:C,attributeDivisors:N,object:_,attributes:{},index:null}}function p(_,M,C,N){let B=r.attributes,et=M.attributes,W=0,it=C.getAttributes();for(let X in it)if(it[X].location>=0){let O=B[X],Q=et[X];if(Q===void 0&&(X==="instanceMatrix"&&_.instanceMatrix&&(Q=_.instanceMatrix),X==="instanceColor"&&_.instanceColor&&(Q=_.instanceColor)),O===void 0||O.attribute!==Q||Q&&O.data!==Q.data)return!0;W++}return r.attributesNum!==W||r.index!==N}function g(_,M,C,N){let B={},et=M.attributes,W=0,it=C.getAttributes();for(let X in it)if(it[X].location>=0){let O=et[X];O===void 0&&(X==="instanceMatrix"&&_.instanceMatrix&&(O=_.instanceMatrix),X==="instanceColor"&&_.instanceColor&&(O=_.instanceColor));let Q={};Q.attribute=O,O&&O.data&&(Q.data=O.data),B[X]=Q,W++}r.attributes=B,r.attributesNum=W,r.index=N}function x(){let _=r.newAttributes;for(let M=0,C=_.length;M<C;M++)_[M]=0}function m(_){f(_,0)}function f(_,M){let C=r.newAttributes,N=r.enabledAttributes,B=r.attributeDivisors;C[_]=1,N[_]===0&&(i.enableVertexAttribArray(_),N[_]=1),B[_]!==M&&(i.vertexAttribDivisor(_,M),B[_]=M)}function y(){let _=r.newAttributes,M=r.enabledAttributes;for(let C=0,N=M.length;C<N;C++)M[C]!==_[C]&&(i.disableVertexAttribArray(C),M[C]=0)}function v(_,M,C,N,B,et,W){W===!0?i.vertexAttribIPointer(_,M,C,B,et):i.vertexAttribPointer(_,M,C,N,B,et)}function b(_,M,C,N){x();let B=N.attributes,et=C.getAttributes(),W=M.defaultAttributeValues;for(let it in et){let X=et[it];if(X.location>=0){let Y=B[it];if(Y===void 0&&(it==="instanceMatrix"&&_.instanceMatrix&&(Y=_.instanceMatrix),it==="instanceColor"&&_.instanceColor&&(Y=_.instanceColor)),Y!==void 0){let O=Y.normalized,Q=Y.itemSize,gt=t.get(Y);if(gt===void 0)continue;let ct=gt.buffer,z=gt.type,$=gt.bytesPerElement,ft=z===i.INT||z===i.UNSIGNED_INT||Y.gpuType===Ol;if(Y.isInterleavedBufferAttribute){let ot=Y.data,Et=ot.stride,pt=Y.offset;if(ot.isInstancedInterleavedBuffer){for(let bt=0;bt<X.locationSize;bt++)f(X.location+bt,ot.meshPerAttribute);_.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let bt=0;bt<X.locationSize;bt++)m(X.location+bt);i.bindBuffer(i.ARRAY_BUFFER,ct);for(let bt=0;bt<X.locationSize;bt++)v(X.location+bt,Q/X.locationSize,z,O,Et*$,(pt+Q/X.locationSize*bt)*$,ft)}else{if(Y.isInstancedBufferAttribute){for(let ot=0;ot<X.locationSize;ot++)f(X.location+ot,Y.meshPerAttribute);_.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let ot=0;ot<X.locationSize;ot++)m(X.location+ot);i.bindBuffer(i.ARRAY_BUFFER,ct);for(let ot=0;ot<X.locationSize;ot++)v(X.location+ot,Q/X.locationSize,z,O,Q*$,Q/X.locationSize*ot*$,ft)}}else if(W!==void 0){let O=W[it];if(O!==void 0)switch(O.length){case 2:i.vertexAttrib2fv(X.location,O);break;case 3:i.vertexAttrib3fv(X.location,O);break;case 4:i.vertexAttrib4fv(X.location,O);break;default:i.vertexAttrib1fv(X.location,O)}}}}y()}function D(){I();for(let _ in n){let M=n[_];for(let C in M){let N=M[C];for(let B in N)h(N[B].object),delete N[B];delete M[C]}delete n[_]}}function T(_){if(n[_.id]===void 0)return;let M=n[_.id];for(let C in M){let N=M[C];for(let B in N)h(N[B].object),delete N[B];delete M[C]}delete n[_.id]}function w(_){for(let M in n){let C=n[M];if(C[_.id]===void 0)continue;let N=C[_.id];for(let B in N)h(N[B].object),delete N[B];delete C[_.id]}}function I(){F(),o=!0,r!==s&&(r=s,c(r.object))}function F(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:I,resetDefaultState:F,dispose:D,releaseStatesOfGeometry:T,releaseStatesOfProgram:w,initAttributes:x,enableAttribute:m,disableUnusedAttributes:y}}function Fm(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,d){d!==0&&(i.drawArraysInstanced(n,c,h,d),e.update(h,n,d))}function a(c,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,d);let p=0;for(let g=0;g<d;g++)p+=h[g];e.update(p,n,1)}function l(c,h,d,u){if(d===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],h[g],u[g]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,h,0,u,0,d);let g=0;for(let x=0;x<d;x++)g+=h[x];for(let x=0;x<u.length;x++)e.update(g,n,u[x])}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Om(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let w=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(w){return!(w!==Mn&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){let I=w===an&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==Gn&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==Cn&&!I)}function l(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=e.logarithmicDepthBuffer===!0,u=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(u===!0){let w=t.get("EXT_clip_control");w.clipControlEXT(w.LOWER_LEFT_EXT,w.ZERO_TO_ONE_EXT)}let p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),v=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),D=g>0,T=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:u,maxTextures:p,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:y,maxVaryings:v,maxFragmentUniforms:b,vertexTextures:D,maxSamples:T}}function Bm(i){let t=this,e=null,n=0,s=!1,r=!1,o=new qe,a=new Jt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let p=d.length!==0||u||n!==0||s;return s=u,n=d.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,p){let g=d.clippingPlanes,x=d.clipIntersection,m=d.clipShadows,f=i.get(d);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let y=r?0:n,v=y*4,b=f.clippingState||null;l.value=b,b=h(g,u,v,p);for(let D=0;D!==v;++D)b[D]=e[D];f.clippingState=b,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,p,g){let x=d!==null?d.length:0,m=null;if(x!==0){if(m=l.value,g!==!0||m===null){let f=p+x*4,y=u.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<f)&&(m=new Float32Array(f));for(let v=0,b=p;v!==x;++v,b+=4)o.copy(d[v]).applyMatrix4(y,a),o.normal.toArray(m,b),m[b+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function zm(i){let t=new WeakMap;function e(o,a){return a===Ls?o.mapping=ji:a===ga&&(o.mapping=Qi),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Ls||a===ga)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new $a(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var In=class extends Gr{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},qi=4,Nc=[.125,.215,.35,.446,.526,.582],yi=20,$o=new In,Fc=new G,Jo=null,jo=0,Qo=0,ta=!1,_i=(1+Math.sqrt(5))/2,Wi=1/_i,Oc=[new R(-_i,Wi,0),new R(_i,Wi,0),new R(-Wi,0,_i),new R(Wi,0,_i),new R(0,_i,-Wi),new R(0,_i,Wi),new R(-1,1,-1),new R(1,1,-1),new R(-1,1,1),new R(1,1,1)],is=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Jo=this._renderer.getRenderTarget(),jo=this._renderer.getActiveCubeFace(),Qo=this._renderer.getActiveMipmapLevel(),ta=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Hc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=zc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Jo,jo,Qo),this._renderer.xr.enabled=ta,t.scissorTest=!1,xr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ji||t.mapping===Qi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Jo=this._renderer.getRenderTarget(),jo=this._renderer.getActiveCubeFace(),Qo=this._renderer.getActiveMipmapLevel(),ta=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ke,minFilter:Ke,generateMipmaps:!1,type:an,format:Mn,colorSpace:ai,depthBuffer:!1},s=Bc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Bc(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Hm(r)),this._blurMaterial=km(r,t,e)}return s}_compileMaterial(t){let e=new Ht(this._lodPlanes[0],t);this._renderer.compile(e,$o)}_sceneToCubeUV(t,e,n,s){let a=new Ne(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(Fc),h.toneMapping=si,h.autoClear=!1;let p=new Be({name:"PMREM.Background",side:Ve,depthWrite:!1,depthTest:!1}),g=new Ht(new ge,p),x=!1,m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,x=!0):(p.color.copy(Fc),x=!0);for(let f=0;f<6;f++){let y=f%3;y===0?(a.up.set(0,l[f],0),a.lookAt(c[f],0,0)):y===1?(a.up.set(0,0,l[f]),a.lookAt(0,c[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,c[f]));let v=this._cubeSize;xr(s,y*v,f>2?v:0,v,v),h.setRenderTarget(s),x&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=u,h.autoClear=d,t.background=m}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===ji||t.mapping===Qi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Hc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=zc());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new Ht(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;xr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,$o)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Oc[(s-r-1)%Oc.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,d=new Ht(this._lodPlanes[s],c),u=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*yi-1),x=r/g,m=isFinite(r)?1+Math.floor(h*x):yi;m>yi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${yi}`);let f=[],y=0;for(let w=0;w<yi;++w){let I=w/x,F=Math.exp(-I*I/2);f.push(F),w===0?y+=F:w<m&&(y+=2*F)}for(let w=0;w<f.length;w++)f[w]=f[w]/y;u.envMap.value=t.texture,u.samples.value=m,u.weights.value=f,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);let{_lodMax:v}=this;u.dTheta.value=g,u.mipInt.value=v-n;let b=this._sizeLods[s],D=3*b*(s>v-qi?s-v+qi:0),T=4*(this._cubeSize-b);xr(e,D,T,3*b,2*b),l.setRenderTarget(e),l.render(d,$o)}};function Hm(i){let t=[],e=[],n=[],s=i,r=i-qi+1+Nc.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let l=1/a;o>i-qi?l=Nc[o-i+qi-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],p=6,g=6,x=3,m=2,f=1,y=new Float32Array(x*g*p),v=new Float32Array(m*g*p),b=new Float32Array(f*g*p);for(let T=0;T<p;T++){let w=T%3*2/3-1,I=T>2?0:-1,F=[w,I,0,w+2/3,I,0,w+2/3,I+1,0,w,I,0,w+2/3,I+1,0,w,I+1,0];y.set(F,x*g*T),v.set(u,m*g*T);let _=[T,T,T,T,T,T];b.set(_,f*g*T)}let D=new Zt;D.setAttribute("position",new jt(y,x)),D.setAttribute("uv",new jt(v,m)),D.setAttribute("faceIndex",new jt(b,f)),t.push(D),s>qi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Bc(i,t,e){let n=new Fe(i,t,e);return n.texture.mapping=ao,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function xr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function km(i,t,e){let n=new Float32Array(yi),s=new R(0,1,0);return new ie({name:"SphericalGaussianBlur",defines:{n:yi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Yl(),fragmentShader:`

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
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function zc(){return new ie({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Yl(),fragmentShader:`

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
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function Hc(){return new ie({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Yl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function Yl(){return`

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
	`}function Vm(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===Ls||l===ga,h=l===ji||l===Qi;if(c||h){let d=t.get(a),u=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==u)return e===null&&(e=new is(i)),d=c?e.fromEquirectangular(a,d):e.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),d.texture;if(d!==void 0)return d.texture;{let p=a.image;return c&&p&&p.height>0||h&&p&&s(p)?(e===null&&(e=new is(i)),d=c?e.fromEquirectangular(a):e.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),a.addEventListener("dispose",r),d.texture):null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Gm(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Dr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Wm(i,t,e,n){let s={},r=new WeakMap;function o(d){let u=d.target;u.index!==null&&t.remove(u.index);for(let g in u.attributes)t.remove(u.attributes[g]);for(let g in u.morphAttributes){let x=u.morphAttributes[g];for(let m=0,f=x.length;m<f;m++)t.remove(x[m])}u.removeEventListener("dispose",o),delete s[u.id];let p=r.get(u);p&&(t.remove(p),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(d,u){return s[u.id]===!0||(u.addEventListener("dispose",o),s[u.id]=!0,e.memory.geometries++),u}function l(d){let u=d.attributes;for(let g in u)t.update(u[g],i.ARRAY_BUFFER);let p=d.morphAttributes;for(let g in p){let x=p[g];for(let m=0,f=x.length;m<f;m++)t.update(x[m],i.ARRAY_BUFFER)}}function c(d){let u=[],p=d.index,g=d.attributes.position,x=0;if(p!==null){let y=p.array;x=p.version;for(let v=0,b=y.length;v<b;v+=3){let D=y[v+0],T=y[v+1],w=y[v+2];u.push(D,T,T,w,w,D)}}else if(g!==void 0){let y=g.array;x=g.version;for(let v=0,b=y.length/3-1;v<b;v+=3){let D=v+0,T=v+1,w=v+2;u.push(D,T,T,w,w,D)}}else return;let m=new(Dh(u)?Vr:kr)(u,1);m.version=x;let f=r.get(d);f&&t.remove(f),r.set(d,m)}function h(d){let u=r.get(d);if(u){let p=d.index;p!==null&&u.version<p.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function Xm(i,t,e){let n;function s(u){n=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function l(u,p){i.drawElements(n,p,r,u*o),e.update(p,n,1)}function c(u,p,g){g!==0&&(i.drawElementsInstanced(n,p,r,u*o,g),e.update(p,n,g))}function h(u,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,u,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];e.update(m,n,1)}function d(u,p,g,x){if(g===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<u.length;f++)c(u[f]/o,p[f],x[f]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,u,0,x,0,g);let f=0;for(let y=0;y<g;y++)f+=p[y];for(let y=0;y<x.length;y++)e.update(f,n,x[y])}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function Ym(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function qm(i,t,e){let n=new WeakMap,s=new ve;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0,u=n.get(a);if(u===void 0||u.count!==d){let F=function(){w.dispose(),n.delete(a),a.removeEventListener("dispose",F)};u!==void 0&&u.texture.dispose();let p=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],f=a.morphAttributes.normal||[],y=a.morphAttributes.color||[],v=0;p===!0&&(v=1),g===!0&&(v=2),x===!0&&(v=3);let b=a.attributes.position.count*v,D=1;b>t.maxTextureSize&&(D=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize);let T=new Float32Array(b*D*4*d),w=new Hr(T,b,D,d);w.type=Cn,w.needsUpdate=!0;let I=v*4;for(let _=0;_<d;_++){let M=m[_],C=f[_],N=y[_],B=b*D*4*_;for(let et=0;et<M.count;et++){let W=et*I;p===!0&&(s.fromBufferAttribute(M,et),T[B+W+0]=s.x,T[B+W+1]=s.y,T[B+W+2]=s.z,T[B+W+3]=0),g===!0&&(s.fromBufferAttribute(C,et),T[B+W+4]=s.x,T[B+W+5]=s.y,T[B+W+6]=s.z,T[B+W+7]=0),x===!0&&(s.fromBufferAttribute(N,et),T[B+W+8]=s.x,T[B+W+9]=s.y,T[B+W+10]=s.z,T[B+W+11]=N.itemSize===4?s.w:1)}}u={count:d,texture:w,size:new _t(b,D)},n.set(a,u),a.addEventListener("dispose",F)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let p=0;for(let x=0;x<c.length;x++)p+=c[x];let g=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function Zm(i,t,e,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,d=t.get(l,h);if(s.get(d)!==c&&(t.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let u=l.skeleton;s.get(u)!==c&&(u.update(),s.set(u,c))}return d}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}var Xr=class extends Je{constructor(t,e,n,s,r,o,a,l,c,h=Zi){if(h!==Zi&&h!==es)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Zi&&(n=Ei),n===void 0&&h===es&&(n=ts),super(null,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:$e,this.minFilter=l!==void 0?l:$e,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Fh=new Je,kc=new Xr(1,1),Oh=new Hr,Bh=new Za,zh=new Wr,Vc=[],Gc=[],Wc=new Float32Array(16),Xc=new Float32Array(9),Yc=new Float32Array(4);function hs(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Vc[s];if(r===void 0&&(r=new Float32Array(s),Vc[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Ce(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Pe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function co(i,t){let e=Gc[t];e===void 0&&(e=new Int32Array(t),Gc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Km(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function $m(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ce(e,t))return;i.uniform2fv(this.addr,t),Pe(e,t)}}function Jm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ce(e,t))return;i.uniform3fv(this.addr,t),Pe(e,t)}}function jm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ce(e,t))return;i.uniform4fv(this.addr,t),Pe(e,t)}}function Qm(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ce(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Pe(e,t)}else{if(Ce(e,n))return;Yc.set(n),i.uniformMatrix2fv(this.addr,!1,Yc),Pe(e,n)}}function t0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ce(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Pe(e,t)}else{if(Ce(e,n))return;Xc.set(n),i.uniformMatrix3fv(this.addr,!1,Xc),Pe(e,n)}}function e0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ce(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Pe(e,t)}else{if(Ce(e,n))return;Wc.set(n),i.uniformMatrix4fv(this.addr,!1,Wc),Pe(e,n)}}function n0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function i0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ce(e,t))return;i.uniform2iv(this.addr,t),Pe(e,t)}}function s0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ce(e,t))return;i.uniform3iv(this.addr,t),Pe(e,t)}}function r0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ce(e,t))return;i.uniform4iv(this.addr,t),Pe(e,t)}}function o0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function a0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ce(e,t))return;i.uniform2uiv(this.addr,t),Pe(e,t)}}function l0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ce(e,t))return;i.uniform3uiv(this.addr,t),Pe(e,t)}}function c0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ce(e,t))return;i.uniform4uiv(this.addr,t),Pe(e,t)}}function h0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(kc.compareFunction=Ph,r=kc):r=Fh,e.setTexture2D(t||r,s)}function u0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Bh,s)}function f0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||zh,s)}function d0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Oh,s)}function p0(i){switch(i){case 5126:return Km;case 35664:return $m;case 35665:return Jm;case 35666:return jm;case 35674:return Qm;case 35675:return t0;case 35676:return e0;case 5124:case 35670:return n0;case 35667:case 35671:return i0;case 35668:case 35672:return s0;case 35669:case 35673:return r0;case 5125:return o0;case 36294:return a0;case 36295:return l0;case 36296:return c0;case 35678:case 36198:case 36298:case 36306:case 35682:return h0;case 35679:case 36299:case 36307:return u0;case 35680:case 36300:case 36308:case 36293:return f0;case 36289:case 36303:case 36311:case 36292:return d0}}function m0(i,t){i.uniform1fv(this.addr,t)}function g0(i,t){let e=hs(t,this.size,2);i.uniform2fv(this.addr,e)}function _0(i,t){let e=hs(t,this.size,3);i.uniform3fv(this.addr,e)}function x0(i,t){let e=hs(t,this.size,4);i.uniform4fv(this.addr,e)}function v0(i,t){let e=hs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function y0(i,t){let e=hs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function M0(i,t){let e=hs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function E0(i,t){i.uniform1iv(this.addr,t)}function b0(i,t){i.uniform2iv(this.addr,t)}function S0(i,t){i.uniform3iv(this.addr,t)}function w0(i,t){i.uniform4iv(this.addr,t)}function T0(i,t){i.uniform1uiv(this.addr,t)}function A0(i,t){i.uniform2uiv(this.addr,t)}function R0(i,t){i.uniform3uiv(this.addr,t)}function C0(i,t){i.uniform4uiv(this.addr,t)}function P0(i,t,e){let n=this.cache,s=t.length,r=co(e,s);Ce(n,r)||(i.uniform1iv(this.addr,r),Pe(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Fh,r[o])}function I0(i,t,e){let n=this.cache,s=t.length,r=co(e,s);Ce(n,r)||(i.uniform1iv(this.addr,r),Pe(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Bh,r[o])}function D0(i,t,e){let n=this.cache,s=t.length,r=co(e,s);Ce(n,r)||(i.uniform1iv(this.addr,r),Pe(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||zh,r[o])}function L0(i,t,e){let n=this.cache,s=t.length,r=co(e,s);Ce(n,r)||(i.uniform1iv(this.addr,r),Pe(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Oh,r[o])}function U0(i){switch(i){case 5126:return m0;case 35664:return g0;case 35665:return _0;case 35666:return x0;case 35674:return v0;case 35675:return y0;case 35676:return M0;case 5124:case 35670:return E0;case 35667:case 35671:return b0;case 35668:case 35672:return S0;case 35669:case 35673:return w0;case 5125:return T0;case 36294:return A0;case 36295:return R0;case 36296:return C0;case 35678:case 36198:case 36298:case 36306:case 35682:return P0;case 35679:case 36299:case 36307:return I0;case 35680:case 36300:case 36308:case 36293:return D0;case 36289:case 36303:case 36311:case 36292:return L0}}var Ja=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=p0(e.type)}},ja=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=U0(e.type)}},Qa=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},ea=/(\w+)(\])?(\[|\.)?/g;function qc(i,t){i.seq.push(t),i.map[t.id]=t}function N0(i,t,e){let n=i.name,s=n.length;for(ea.lastIndex=0;;){let r=ea.exec(n),o=ea.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){qc(e,c===void 0?new Ja(a,i,t):new ja(a,i,t));break}else{let d=e.map[a];d===void 0&&(d=new Qa(a),qc(e,d)),e=d}}}var $i=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);N0(r,o,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function Zc(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var F0=37297,O0=0;function B0(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function z0(i){let t=re.getPrimaries(re.workingColorSpace),e=re.getPrimaries(i),n;switch(t===e?n="":t===Fr&&e===Nr?n="LinearDisplayP3ToLinearSRGB":t===Nr&&e===Fr&&(n="LinearSRGBToLinearDisplayP3"),i){case ai:case lo:return[n,"LinearTransferOETF"];case Ye:case Wl:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Kc(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+B0(i.getShaderSource(t),o)}else return s}function H0(i,t){let e=z0(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function k0(i,t){let e;switch(t){case Dl:e="Linear";break;case Ll:e="Reinhard";break;case Ul:e="Cineon";break;case Xs:e="ACESFilmic";break;case Nl:e="AgX";break;case Fl:e="Neutral";break;case nf:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var vr=new R;function V0(){re.getLuminanceCoefficients(vr);let i=vr.x.toFixed(4),t=vr.y.toFixed(4),e=vr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function G0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(As).join(`
`)}function W0(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function X0(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function As(i){return i!==""}function $c(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Jc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Y0=/^[ \t]*#include +<([\w\d./]+)>/gm;function tl(i){return i.replace(Y0,Z0)}var q0=new Map;function Z0(i,t){let e=$t[t];if(e===void 0){let n=q0.get(t);if(n!==void 0)e=$t[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return tl(e)}var K0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function jc(i){return i.replace(K0,$0)}function $0(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Qc(i){let t=`precision ${i.precision} float;
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
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function J0(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===_h?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Il?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===kn&&(t="SHADOWMAP_TYPE_VSM"),t}function j0(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ji:case Qi:t="ENVMAP_TYPE_CUBE";break;case ao:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Q0(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Qi:t="ENVMAP_MODE_REFRACTION";break}return t}function tg(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case xh:t="ENVMAP_BLENDING_MULTIPLY";break;case tf:t="ENVMAP_BLENDING_MIX";break;case ef:t="ENVMAP_BLENDING_ADD";break}return t}function eg(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function ng(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=J0(e),c=j0(e),h=Q0(e),d=tg(e),u=eg(e),p=G0(e),g=W0(r),x=s.createProgram(),m,f,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(As).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(As).join(`
`),f.length>0&&(f+=`
`)):(m=[Qc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(As).join(`
`),f=[Qc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==si?"#define TONE_MAPPING":"",e.toneMapping!==si?$t.tonemapping_pars_fragment:"",e.toneMapping!==si?k0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",$t.colorspace_pars_fragment,H0("linearToOutputTexel",e.outputColorSpace),V0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(As).join(`
`)),o=tl(o),o=$c(o,e),o=Jc(o,e),a=tl(a),a=$c(a,e),a=Jc(a,e),o=jc(o),a=jc(a),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",e.glslVersion===gc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===gc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let v=y+m+o,b=y+f+a,D=Zc(s,s.VERTEX_SHADER,v),T=Zc(s,s.FRAGMENT_SHADER,b);s.attachShader(x,D),s.attachShader(x,T),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function w(M){if(i.debug.checkShaderErrors){let C=s.getProgramInfoLog(x).trim(),N=s.getShaderInfoLog(D).trim(),B=s.getShaderInfoLog(T).trim(),et=!0,W=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(et=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,D,T);else{let it=Kc(s,D,"vertex"),X=Kc(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+M.name+`
Material Type: `+M.type+`

Program Info Log: `+C+`
`+it+`
`+X)}else C!==""?console.warn("THREE.WebGLProgram: Program Info Log:",C):(N===""||B==="")&&(W=!1);W&&(M.diagnostics={runnable:et,programLog:C,vertexShader:{log:N,prefix:m},fragmentShader:{log:B,prefix:f}})}s.deleteShader(D),s.deleteShader(T),I=new $i(s,x),F=X0(s,x)}let I;this.getUniforms=function(){return I===void 0&&w(this),I};let F;this.getAttributes=function(){return F===void 0&&w(this),F};let _=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=s.getProgramParameter(x,F0)),_},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=O0++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=D,this.fragmentShader=T,this}var ig=0,el=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new nl(t),e.set(t,n)),n}},nl=class{constructor(t){this.id=ig++,this.code=t,this.usedTimes=0}};function sg(i,t,e,n,s,r,o){let a=new Fs,l=new el,c=new Set,h=[],d=s.logarithmicDepthBuffer,u=s.reverseDepthBuffer,p=s.vertexTextures,g=s.precision,x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(_){return c.add(_),_===0?"uv":`uv${_}`}function f(_,M,C,N,B){let et=N.fog,W=B.geometry,it=_.isMeshStandardMaterial?N.environment:null,X=(_.isMeshStandardMaterial?e:t).get(_.envMap||it),Y=X&&X.mapping===ao?X.image.height:null,O=x[_.type];_.precision!==null&&(g=s.getMaxPrecision(_.precision),g!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",g,"instead."));let Q=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,gt=Q!==void 0?Q.length:0,ct=0;W.morphAttributes.position!==void 0&&(ct=1),W.morphAttributes.normal!==void 0&&(ct=2),W.morphAttributes.color!==void 0&&(ct=3);let z,$,ft,ot;if(O){let be=An[O];z=be.vertexShader,$=be.fragmentShader}else z=_.vertexShader,$=_.fragmentShader,l.update(_),ft=l.getVertexShaderID(_),ot=l.getFragmentShaderID(_);let Et=i.getRenderTarget(),pt=B.isInstancedMesh===!0,bt=B.isBatchedMesh===!0,Rt=!!_.map,Tt=!!_.matcap,P=!!X,Wt=!!_.aoMap,zt=!!_.lightMap,Xt=!!_.bumpMap,Lt=!!_.normalMap,ee=!!_.displacementMap,Ut=!!_.emissiveMap,A=!!_.metalnessMap,E=!!_.roughnessMap,q=_.anisotropy>0,at=_.clearcoat>0,mt=_.dispersion>0,st=_.iridescence>0,Z=_.sheen>0,rt=_.transmission>0,U=q&&!!_.anisotropyMap,K=at&&!!_.clearcoatMap,k=at&&!!_.clearcoatNormalMap,tt=at&&!!_.clearcoatRoughnessMap,ht=st&&!!_.iridescenceMap,dt=st&&!!_.iridescenceThicknessMap,lt=Z&&!!_.sheenColorMap,vt=Z&&!!_.sheenRoughnessMap,St=!!_.specularMap,Bt=!!_.specularColorMap,L=!!_.specularIntensityMap,Mt=rt&&!!_.transmissionMap,nt=rt&&!!_.thicknessMap,ut=!!_.gradientMap,wt=!!_.alphaMap,Ct=_.alphaTest>0,Kt=!!_.alphaHash,de=!!_.extensions,Ae=si;_.toneMapped&&(Et===null||Et.isXRRenderTarget===!0)&&(Ae=i.toneMapping);let Qt={shaderID:O,shaderType:_.type,shaderName:_.name,vertexShader:z,fragmentShader:$,defines:_.defines,customVertexShaderID:ft,customFragmentShaderID:ot,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:g,batching:bt,batchingColor:bt&&B._colorsTexture!==null,instancing:pt,instancingColor:pt&&B.instanceColor!==null,instancingMorph:pt&&B.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:Et===null?i.outputColorSpace:Et.isXRRenderTarget===!0?Et.texture.colorSpace:ai,alphaToCoverage:!!_.alphaToCoverage,map:Rt,matcap:Tt,envMap:P,envMapMode:P&&X.mapping,envMapCubeUVHeight:Y,aoMap:Wt,lightMap:zt,bumpMap:Xt,normalMap:Lt,displacementMap:p&&ee,emissiveMap:Ut,normalMapObjectSpace:Lt&&_.normalMapType===af,normalMapTangentSpace:Lt&&_.normalMapType===Ch,metalnessMap:A,roughnessMap:E,anisotropy:q,anisotropyMap:U,clearcoat:at,clearcoatMap:K,clearcoatNormalMap:k,clearcoatRoughnessMap:tt,dispersion:mt,iridescence:st,iridescenceMap:ht,iridescenceThicknessMap:dt,sheen:Z,sheenColorMap:lt,sheenRoughnessMap:vt,specularMap:St,specularColorMap:Bt,specularIntensityMap:L,transmission:rt,transmissionMap:Mt,thicknessMap:nt,gradientMap:ut,opaque:_.transparent===!1&&_.blending===En&&_.alphaToCoverage===!1,alphaMap:wt,alphaTest:Ct,alphaHash:Kt,combine:_.combine,mapUv:Rt&&m(_.map.channel),aoMapUv:Wt&&m(_.aoMap.channel),lightMapUv:zt&&m(_.lightMap.channel),bumpMapUv:Xt&&m(_.bumpMap.channel),normalMapUv:Lt&&m(_.normalMap.channel),displacementMapUv:ee&&m(_.displacementMap.channel),emissiveMapUv:Ut&&m(_.emissiveMap.channel),metalnessMapUv:A&&m(_.metalnessMap.channel),roughnessMapUv:E&&m(_.roughnessMap.channel),anisotropyMapUv:U&&m(_.anisotropyMap.channel),clearcoatMapUv:K&&m(_.clearcoatMap.channel),clearcoatNormalMapUv:k&&m(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:tt&&m(_.clearcoatRoughnessMap.channel),iridescenceMapUv:ht&&m(_.iridescenceMap.channel),iridescenceThicknessMapUv:dt&&m(_.iridescenceThicknessMap.channel),sheenColorMapUv:lt&&m(_.sheenColorMap.channel),sheenRoughnessMapUv:vt&&m(_.sheenRoughnessMap.channel),specularMapUv:St&&m(_.specularMap.channel),specularColorMapUv:Bt&&m(_.specularColorMap.channel),specularIntensityMapUv:L&&m(_.specularIntensityMap.channel),transmissionMapUv:Mt&&m(_.transmissionMap.channel),thicknessMapUv:nt&&m(_.thicknessMap.channel),alphaMapUv:wt&&m(_.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(Lt||q),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!W.attributes.uv&&(Rt||wt),fog:!!et,useFog:_.fog===!0,fogExp2:!!et&&et.isFogExp2,flatShading:_.flatShading===!0,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:u,skinning:B.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:gt,morphTextureStride:ct,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ae,decodeVideoTexture:Rt&&_.map.isVideoTexture===!0&&re.getTransfer(_.map.colorSpace)===ue,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===ne,flipSided:_.side===Ve,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:de&&_.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(de&&_.extensions.multiDraw===!0||bt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Qt.vertexUv1s=c.has(1),Qt.vertexUv2s=c.has(2),Qt.vertexUv3s=c.has(3),c.clear(),Qt}function y(_){let M=[];if(_.shaderID?M.push(_.shaderID):(M.push(_.customVertexShaderID),M.push(_.customFragmentShaderID)),_.defines!==void 0)for(let C in _.defines)M.push(C),M.push(_.defines[C]);return _.isRawShaderMaterial===!1&&(v(M,_),b(M,_),M.push(i.outputColorSpace)),M.push(_.customProgramCacheKey),M.join()}function v(_,M){_.push(M.precision),_.push(M.outputColorSpace),_.push(M.envMapMode),_.push(M.envMapCubeUVHeight),_.push(M.mapUv),_.push(M.alphaMapUv),_.push(M.lightMapUv),_.push(M.aoMapUv),_.push(M.bumpMapUv),_.push(M.normalMapUv),_.push(M.displacementMapUv),_.push(M.emissiveMapUv),_.push(M.metalnessMapUv),_.push(M.roughnessMapUv),_.push(M.anisotropyMapUv),_.push(M.clearcoatMapUv),_.push(M.clearcoatNormalMapUv),_.push(M.clearcoatRoughnessMapUv),_.push(M.iridescenceMapUv),_.push(M.iridescenceThicknessMapUv),_.push(M.sheenColorMapUv),_.push(M.sheenRoughnessMapUv),_.push(M.specularMapUv),_.push(M.specularColorMapUv),_.push(M.specularIntensityMapUv),_.push(M.transmissionMapUv),_.push(M.thicknessMapUv),_.push(M.combine),_.push(M.fogExp2),_.push(M.sizeAttenuation),_.push(M.morphTargetsCount),_.push(M.morphAttributeCount),_.push(M.numDirLights),_.push(M.numPointLights),_.push(M.numSpotLights),_.push(M.numSpotLightMaps),_.push(M.numHemiLights),_.push(M.numRectAreaLights),_.push(M.numDirLightShadows),_.push(M.numPointLightShadows),_.push(M.numSpotLightShadows),_.push(M.numSpotLightShadowsWithMaps),_.push(M.numLightProbes),_.push(M.shadowMapType),_.push(M.toneMapping),_.push(M.numClippingPlanes),_.push(M.numClipIntersection),_.push(M.depthPacking)}function b(_,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),_.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.alphaToCoverage&&a.enable(20),_.push(a.mask)}function D(_){let M=x[_.type],C;if(M){let N=An[M];C=li.clone(N.uniforms)}else C=_.uniforms;return C}function T(_,M){let C;for(let N=0,B=h.length;N<B;N++){let et=h[N];if(et.cacheKey===M){C=et,++C.usedTimes;break}}return C===void 0&&(C=new ng(i,M,_,r),h.push(C)),C}function w(_){if(--_.usedTimes===0){let M=h.indexOf(_);h[M]=h[h.length-1],h.pop(),_.destroy()}}function I(_){l.remove(_)}function F(){l.dispose()}return{getParameters:f,getProgramCacheKey:y,getUniforms:D,acquireProgram:T,releaseProgram:w,releaseShaderCache:I,programs:h,dispose:F}}function rg(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function og(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function th(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function eh(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(d,u,p,g,x,m){let f=i[t];return f===void 0?(f={id:d.id,object:d,geometry:u,material:p,groupOrder:g,renderOrder:d.renderOrder,z:x,group:m},i[t]=f):(f.id=d.id,f.object=d,f.geometry=u,f.material=p,f.groupOrder=g,f.renderOrder=d.renderOrder,f.z=x,f.group=m),t++,f}function a(d,u,p,g,x,m){let f=o(d,u,p,g,x,m);p.transmission>0?n.push(f):p.transparent===!0?s.push(f):e.push(f)}function l(d,u,p,g,x,m){let f=o(d,u,p,g,x,m);p.transmission>0?n.unshift(f):p.transparent===!0?s.unshift(f):e.unshift(f)}function c(d,u){e.length>1&&e.sort(d||og),n.length>1&&n.sort(u||th),s.length>1&&s.sort(u||th)}function h(){for(let d=t,u=i.length;d<u;d++){let p=i[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function ag(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new eh,i.set(n,[o])):s>=r.length?(o=new eh,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function lg(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new R,color:new G};break;case"SpotLight":e={position:new R,direction:new R,color:new G,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new R,color:new G,distance:0,decay:0};break;case"HemisphereLight":e={direction:new R,skyColor:new G,groundColor:new G};break;case"RectAreaLight":e={color:new G,position:new R,halfWidth:new R,halfHeight:new R};break}return i[t.id]=e,e}}}function cg(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var hg=0;function ug(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function fg(i){let t=new lg,e=cg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new R);let s=new R,r=new Yt,o=new Yt;function a(c){let h=0,d=0,u=0;for(let F=0;F<9;F++)n.probe[F].set(0,0,0);let p=0,g=0,x=0,m=0,f=0,y=0,v=0,b=0,D=0,T=0,w=0;c.sort(ug);for(let F=0,_=c.length;F<_;F++){let M=c[F],C=M.color,N=M.intensity,B=M.distance,et=M.shadow&&M.shadow.map?M.shadow.map.texture:null;if(M.isAmbientLight)h+=C.r*N,d+=C.g*N,u+=C.b*N;else if(M.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(M.sh.coefficients[W],N);w++}else if(M.isDirectionalLight){let W=t.get(M);if(W.color.copy(M.color).multiplyScalar(M.intensity),M.castShadow){let it=M.shadow,X=e.get(M);X.shadowIntensity=it.intensity,X.shadowBias=it.bias,X.shadowNormalBias=it.normalBias,X.shadowRadius=it.radius,X.shadowMapSize=it.mapSize,n.directionalShadow[p]=X,n.directionalShadowMap[p]=et,n.directionalShadowMatrix[p]=M.shadow.matrix,y++}n.directional[p]=W,p++}else if(M.isSpotLight){let W=t.get(M);W.position.setFromMatrixPosition(M.matrixWorld),W.color.copy(C).multiplyScalar(N),W.distance=B,W.coneCos=Math.cos(M.angle),W.penumbraCos=Math.cos(M.angle*(1-M.penumbra)),W.decay=M.decay,n.spot[x]=W;let it=M.shadow;if(M.map&&(n.spotLightMap[D]=M.map,D++,it.updateMatrices(M),M.castShadow&&T++),n.spotLightMatrix[x]=it.matrix,M.castShadow){let X=e.get(M);X.shadowIntensity=it.intensity,X.shadowBias=it.bias,X.shadowNormalBias=it.normalBias,X.shadowRadius=it.radius,X.shadowMapSize=it.mapSize,n.spotShadow[x]=X,n.spotShadowMap[x]=et,b++}x++}else if(M.isRectAreaLight){let W=t.get(M);W.color.copy(C).multiplyScalar(N),W.halfWidth.set(M.width*.5,0,0),W.halfHeight.set(0,M.height*.5,0),n.rectArea[m]=W,m++}else if(M.isPointLight){let W=t.get(M);if(W.color.copy(M.color).multiplyScalar(M.intensity),W.distance=M.distance,W.decay=M.decay,M.castShadow){let it=M.shadow,X=e.get(M);X.shadowIntensity=it.intensity,X.shadowBias=it.bias,X.shadowNormalBias=it.normalBias,X.shadowRadius=it.radius,X.shadowMapSize=it.mapSize,X.shadowCameraNear=it.camera.near,X.shadowCameraFar=it.camera.far,n.pointShadow[g]=X,n.pointShadowMap[g]=et,n.pointShadowMatrix[g]=M.shadow.matrix,v++}n.point[g]=W,g++}else if(M.isHemisphereLight){let W=t.get(M);W.skyColor.copy(M.color).multiplyScalar(N),W.groundColor.copy(M.groundColor).multiplyScalar(N),n.hemi[f]=W,f++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=At.LTC_FLOAT_1,n.rectAreaLTC2=At.LTC_FLOAT_2):(n.rectAreaLTC1=At.LTC_HALF_1,n.rectAreaLTC2=At.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;let I=n.hash;(I.directionalLength!==p||I.pointLength!==g||I.spotLength!==x||I.rectAreaLength!==m||I.hemiLength!==f||I.numDirectionalShadows!==y||I.numPointShadows!==v||I.numSpotShadows!==b||I.numSpotMaps!==D||I.numLightProbes!==w)&&(n.directional.length=p,n.spot.length=x,n.rectArea.length=m,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=b,n.spotShadowMap.length=b,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=b+D-T,n.spotLightMap.length=D,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=w,I.directionalLength=p,I.pointLength=g,I.spotLength=x,I.rectAreaLength=m,I.hemiLength=f,I.numDirectionalShadows=y,I.numPointShadows=v,I.numSpotShadows=b,I.numSpotMaps=D,I.numLightProbes=w,n.version=hg++)}function l(c,h){let d=0,u=0,p=0,g=0,x=0,m=h.matrixWorldInverse;for(let f=0,y=c.length;f<y;f++){let v=c[f];if(v.isDirectionalLight){let b=n.directional[d];b.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(m),d++}else if(v.isSpotLight){let b=n.spot[p];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(m),b.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(m),p++}else if(v.isRectAreaLight){let b=n.rectArea[g];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(m),o.identity(),r.copy(v.matrixWorld),r.premultiply(m),o.extractRotation(r),b.halfWidth.set(v.width*.5,0,0),b.halfHeight.set(0,v.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),g++}else if(v.isPointLight){let b=n.point[u];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(m),u++}else if(v.isHemisphereLight){let b=n.hemi[x];b.direction.setFromMatrixPosition(v.matrixWorld),b.direction.transformDirection(m),x++}}}return{setup:a,setupView:l,state:n}}function nh(i){let t=new fg(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function dg(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new nh(i),t.set(s,[a])):r>=o.length?(a=new nh(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var il=class extends qn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=rf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},sl=class extends qn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},pg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,mg=`uniform sampler2D shadow_pass;
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
}`;function gg(i,t,e){let n=new Os,s=new _t,r=new _t,o=new ve,a=new il({depthPacking:of}),l=new sl,c={},h=e.maxTextureSize,d={[ri]:Ve,[Ve]:ri,[ne]:ne},u=new ie({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new _t},radius:{value:4}},vertexShader:pg,fragmentShader:mg}),p=u.clone();p.defines.HORIZONTAL_PASS=1;let g=new Zt;g.setAttribute("position",new jt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Ht(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=_h;let f=this.type;this.render=function(T,w,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;let F=i.getRenderTarget(),_=i.getActiveCubeFace(),M=i.getActiveMipmapLevel(),C=i.state;C.setBlending(Pn),C.buffers.color.setClear(1,1,1,1),C.buffers.depth.setTest(!0),C.setScissorTest(!1);let N=f!==kn&&this.type===kn,B=f===kn&&this.type!==kn;for(let et=0,W=T.length;et<W;et++){let it=T[et],X=it.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",it,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);let Y=X.getFrameExtents();if(s.multiply(Y),r.copy(X.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/Y.x),s.x=r.x*Y.x,X.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/Y.y),s.y=r.y*Y.y,X.mapSize.y=r.y)),X.map===null||N===!0||B===!0){let Q=this.type!==kn?{minFilter:$e,magFilter:$e}:{};X.map!==null&&X.map.dispose(),X.map=new Fe(s.x,s.y,Q),X.map.texture.name=it.name+".shadowMap",X.camera.updateProjectionMatrix()}i.setRenderTarget(X.map),i.clear();let O=X.getViewportCount();for(let Q=0;Q<O;Q++){let gt=X.getViewport(Q);o.set(r.x*gt.x,r.y*gt.y,r.x*gt.z,r.y*gt.w),C.viewport(o),X.updateMatrices(it,Q),n=X.getFrustum(),b(w,I,X.camera,it,this.type)}X.isPointLightShadow!==!0&&this.type===kn&&y(X,I),X.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(F,_,M)};function y(T,w){let I=t.update(x);u.defines.VSM_SAMPLES!==T.blurSamples&&(u.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Fe(s.x,s.y)),u.uniforms.shadow_pass.value=T.map.texture,u.uniforms.resolution.value=T.mapSize,u.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(w,null,I,u,x,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(w,null,I,p,x,null)}function v(T,w,I,F){let _=null,M=I.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(M!==void 0)_=M;else if(_=I.isPointLight===!0?l:a,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){let C=_.uuid,N=w.uuid,B=c[C];B===void 0&&(B={},c[C]=B);let et=B[N];et===void 0&&(et=_.clone(),B[N]=et,w.addEventListener("dispose",D)),_=et}if(_.visible=w.visible,_.wireframe=w.wireframe,F===kn?_.side=w.shadowSide!==null?w.shadowSide:w.side:_.side=w.shadowSide!==null?w.shadowSide:d[w.side],_.alphaMap=w.alphaMap,_.alphaTest=w.alphaTest,_.map=w.map,_.clipShadows=w.clipShadows,_.clippingPlanes=w.clippingPlanes,_.clipIntersection=w.clipIntersection,_.displacementMap=w.displacementMap,_.displacementScale=w.displacementScale,_.displacementBias=w.displacementBias,_.wireframeLinewidth=w.wireframeLinewidth,_.linewidth=w.linewidth,I.isPointLight===!0&&_.isMeshDistanceMaterial===!0){let C=i.properties.get(_);C.light=I}return _}function b(T,w,I,F,_){if(T.visible===!1)return;if(T.layers.test(w.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&_===kn)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,T.matrixWorld);let N=t.update(T),B=T.material;if(Array.isArray(B)){let et=N.groups;for(let W=0,it=et.length;W<it;W++){let X=et[W],Y=B[X.materialIndex];if(Y&&Y.visible){let O=v(T,Y,F,_);T.onBeforeShadow(i,T,w,I,N,O,X),i.renderBufferDirect(I,null,N,O,T,X),T.onAfterShadow(i,T,w,I,N,O,X)}}}else if(B.visible){let et=v(T,B,F,_);T.onBeforeShadow(i,T,w,I,N,et,null),i.renderBufferDirect(I,null,N,et,T,null),T.onAfterShadow(i,T,w,I,N,et,null)}}let C=T.children;for(let N=0,B=C.length;N<B;N++)b(C[N],w,I,F,_)}function D(T){T.target.removeEventListener("dispose",D);for(let I in c){let F=c[I],_=T.target.uuid;_ in F&&(F[_].dispose(),delete F[_])}}}var _g={[ca]:ha,[ua]:pa,[fa]:ma,[Ji]:da,[ha]:ca,[pa]:ua,[ma]:fa,[da]:Ji};function xg(i){function t(){let L=!1,Mt=new ve,nt=null,ut=new ve(0,0,0,0);return{setMask:function(wt){nt!==wt&&!L&&(i.colorMask(wt,wt,wt,wt),nt=wt)},setLocked:function(wt){L=wt},setClear:function(wt,Ct,Kt,de,Ae){Ae===!0&&(wt*=de,Ct*=de,Kt*=de),Mt.set(wt,Ct,Kt,de),ut.equals(Mt)===!1&&(i.clearColor(wt,Ct,Kt,de),ut.copy(Mt))},reset:function(){L=!1,nt=null,ut.set(-1,0,0,0)}}}function e(){let L=!1,Mt=!1,nt=null,ut=null,wt=null;return{setReversed:function(Ct){Mt=Ct},setTest:function(Ct){Ct?ft(i.DEPTH_TEST):ot(i.DEPTH_TEST)},setMask:function(Ct){nt!==Ct&&!L&&(i.depthMask(Ct),nt=Ct)},setFunc:function(Ct){if(Mt&&(Ct=_g[Ct]),ut!==Ct){switch(Ct){case ca:i.depthFunc(i.NEVER);break;case ha:i.depthFunc(i.ALWAYS);break;case ua:i.depthFunc(i.LESS);break;case Ji:i.depthFunc(i.LEQUAL);break;case fa:i.depthFunc(i.EQUAL);break;case da:i.depthFunc(i.GEQUAL);break;case pa:i.depthFunc(i.GREATER);break;case ma:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ut=Ct}},setLocked:function(Ct){L=Ct},setClear:function(Ct){wt!==Ct&&(i.clearDepth(Ct),wt=Ct)},reset:function(){L=!1,nt=null,ut=null,wt=null}}}function n(){let L=!1,Mt=null,nt=null,ut=null,wt=null,Ct=null,Kt=null,de=null,Ae=null;return{setTest:function(Qt){L||(Qt?ft(i.STENCIL_TEST):ot(i.STENCIL_TEST))},setMask:function(Qt){Mt!==Qt&&!L&&(i.stencilMask(Qt),Mt=Qt)},setFunc:function(Qt,be,mn){(nt!==Qt||ut!==be||wt!==mn)&&(i.stencilFunc(Qt,be,mn),nt=Qt,ut=be,wt=mn)},setOp:function(Qt,be,mn){(Ct!==Qt||Kt!==be||de!==mn)&&(i.stencilOp(Qt,be,mn),Ct=Qt,Kt=be,de=mn)},setLocked:function(Qt){L=Qt},setClear:function(Qt){Ae!==Qt&&(i.clearStencil(Qt),Ae=Qt)},reset:function(){L=!1,Mt=null,nt=null,ut=null,wt=null,Ct=null,Kt=null,de=null,Ae=null}}}let s=new t,r=new e,o=new n,a=new WeakMap,l=new WeakMap,c={},h={},d=new WeakMap,u=[],p=null,g=!1,x=null,m=null,f=null,y=null,v=null,b=null,D=null,T=new G(0,0,0),w=0,I=!1,F=null,_=null,M=null,C=null,N=null,B=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),et=!1,W=0,it=i.getParameter(i.VERSION);it.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(it)[1]),et=W>=1):it.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(it)[1]),et=W>=2);let X=null,Y={},O=i.getParameter(i.SCISSOR_BOX),Q=i.getParameter(i.VIEWPORT),gt=new ve().fromArray(O),ct=new ve().fromArray(Q);function z(L,Mt,nt,ut){let wt=new Uint8Array(4),Ct=i.createTexture();i.bindTexture(L,Ct),i.texParameteri(L,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(L,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Kt=0;Kt<nt;Kt++)L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY?i.texImage3D(Mt,0,i.RGBA,1,1,ut,0,i.RGBA,i.UNSIGNED_BYTE,wt):i.texImage2D(Mt+Kt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,wt);return Ct}let $={};$[i.TEXTURE_2D]=z(i.TEXTURE_2D,i.TEXTURE_2D,1),$[i.TEXTURE_CUBE_MAP]=z(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[i.TEXTURE_2D_ARRAY]=z(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),$[i.TEXTURE_3D]=z(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),ft(i.DEPTH_TEST),r.setFunc(Ji),zt(!1),Xt(lc),ft(i.CULL_FACE),P(Pn);function ft(L){c[L]!==!0&&(i.enable(L),c[L]=!0)}function ot(L){c[L]!==!1&&(i.disable(L),c[L]=!1)}function Et(L,Mt){return h[L]!==Mt?(i.bindFramebuffer(L,Mt),h[L]=Mt,L===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=Mt),L===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=Mt),!0):!1}function pt(L,Mt){let nt=u,ut=!1;if(L){nt=d.get(Mt),nt===void 0&&(nt=[],d.set(Mt,nt));let wt=L.textures;if(nt.length!==wt.length||nt[0]!==i.COLOR_ATTACHMENT0){for(let Ct=0,Kt=wt.length;Ct<Kt;Ct++)nt[Ct]=i.COLOR_ATTACHMENT0+Ct;nt.length=wt.length,ut=!0}}else nt[0]!==i.BACK&&(nt[0]=i.BACK,ut=!0);ut&&i.drawBuffers(nt)}function bt(L){return p!==L?(i.useProgram(L),p=L,!0):!1}let Rt={[xi]:i.FUNC_ADD,[Ou]:i.FUNC_SUBTRACT,[Bu]:i.FUNC_REVERSE_SUBTRACT};Rt[zu]=i.MIN,Rt[Hu]=i.MAX;let Tt={[ku]:i.ZERO,[Vu]:i.ONE,[Gu]:i.SRC_COLOR,[aa]:i.SRC_ALPHA,[Ku]:i.SRC_ALPHA_SATURATE,[qu]:i.DST_COLOR,[Xu]:i.DST_ALPHA,[Wu]:i.ONE_MINUS_SRC_COLOR,[la]:i.ONE_MINUS_SRC_ALPHA,[Zu]:i.ONE_MINUS_DST_COLOR,[Yu]:i.ONE_MINUS_DST_ALPHA,[$u]:i.CONSTANT_COLOR,[Ju]:i.ONE_MINUS_CONSTANT_COLOR,[ju]:i.CONSTANT_ALPHA,[Qu]:i.ONE_MINUS_CONSTANT_ALPHA};function P(L,Mt,nt,ut,wt,Ct,Kt,de,Ae,Qt){if(L===Pn){g===!0&&(ot(i.BLEND),g=!1);return}if(g===!1&&(ft(i.BLEND),g=!0),L!==Fu){if(L!==x||Qt!==I){if((m!==xi||v!==xi)&&(i.blendEquation(i.FUNC_ADD),m=xi,v=xi),Qt)switch(L){case En:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ze:i.blendFunc(i.ONE,i.ONE);break;case cc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case hc:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case En:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ze:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case cc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case hc:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}f=null,y=null,b=null,D=null,T.set(0,0,0),w=0,x=L,I=Qt}return}wt=wt||Mt,Ct=Ct||nt,Kt=Kt||ut,(Mt!==m||wt!==v)&&(i.blendEquationSeparate(Rt[Mt],Rt[wt]),m=Mt,v=wt),(nt!==f||ut!==y||Ct!==b||Kt!==D)&&(i.blendFuncSeparate(Tt[nt],Tt[ut],Tt[Ct],Tt[Kt]),f=nt,y=ut,b=Ct,D=Kt),(de.equals(T)===!1||Ae!==w)&&(i.blendColor(de.r,de.g,de.b,Ae),T.copy(de),w=Ae),x=L,I=!1}function Wt(L,Mt){L.side===ne?ot(i.CULL_FACE):ft(i.CULL_FACE);let nt=L.side===Ve;Mt&&(nt=!nt),zt(nt),L.blending===En&&L.transparent===!1?P(Pn):P(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),r.setFunc(L.depthFunc),r.setTest(L.depthTest),r.setMask(L.depthWrite),s.setMask(L.colorWrite);let ut=L.stencilWrite;o.setTest(ut),ut&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),ee(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?ft(i.SAMPLE_ALPHA_TO_COVERAGE):ot(i.SAMPLE_ALPHA_TO_COVERAGE)}function zt(L){F!==L&&(L?i.frontFace(i.CW):i.frontFace(i.CCW),F=L)}function Xt(L){L!==Uu?(ft(i.CULL_FACE),L!==_&&(L===lc?i.cullFace(i.BACK):L===Nu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ot(i.CULL_FACE),_=L}function Lt(L){L!==M&&(et&&i.lineWidth(L),M=L)}function ee(L,Mt,nt){L?(ft(i.POLYGON_OFFSET_FILL),(C!==Mt||N!==nt)&&(i.polygonOffset(Mt,nt),C=Mt,N=nt)):ot(i.POLYGON_OFFSET_FILL)}function Ut(L){L?ft(i.SCISSOR_TEST):ot(i.SCISSOR_TEST)}function A(L){L===void 0&&(L=i.TEXTURE0+B-1),X!==L&&(i.activeTexture(L),X=L)}function E(L,Mt,nt){nt===void 0&&(X===null?nt=i.TEXTURE0+B-1:nt=X);let ut=Y[nt];ut===void 0&&(ut={type:void 0,texture:void 0},Y[nt]=ut),(ut.type!==L||ut.texture!==Mt)&&(X!==nt&&(i.activeTexture(nt),X=nt),i.bindTexture(L,Mt||$[L]),ut.type=L,ut.texture=Mt)}function q(){let L=Y[X];L!==void 0&&L.type!==void 0&&(i.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function at(){try{i.compressedTexImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function mt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function st(){try{i.texSubImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Z(){try{i.texSubImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function rt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function U(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function K(){try{i.texStorage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function k(){try{i.texStorage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function tt(){try{i.texImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ht(){try{i.texImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function dt(L){gt.equals(L)===!1&&(i.scissor(L.x,L.y,L.z,L.w),gt.copy(L))}function lt(L){ct.equals(L)===!1&&(i.viewport(L.x,L.y,L.z,L.w),ct.copy(L))}function vt(L,Mt){let nt=l.get(Mt);nt===void 0&&(nt=new WeakMap,l.set(Mt,nt));let ut=nt.get(L);ut===void 0&&(ut=i.getUniformBlockIndex(Mt,L.name),nt.set(L,ut))}function St(L,Mt){let ut=l.get(Mt).get(L);a.get(Mt)!==ut&&(i.uniformBlockBinding(Mt,ut,L.__bindingPointIndex),a.set(Mt,ut))}function Bt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),c={},X=null,Y={},h={},d=new WeakMap,u=[],p=null,g=!1,x=null,m=null,f=null,y=null,v=null,b=null,D=null,T=new G(0,0,0),w=0,I=!1,F=null,_=null,M=null,C=null,N=null,gt.set(0,0,i.canvas.width,i.canvas.height),ct.set(0,0,i.canvas.width,i.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:ft,disable:ot,bindFramebuffer:Et,drawBuffers:pt,useProgram:bt,setBlending:P,setMaterial:Wt,setFlipSided:zt,setCullFace:Xt,setLineWidth:Lt,setPolygonOffset:ee,setScissorTest:Ut,activeTexture:A,bindTexture:E,unbindTexture:q,compressedTexImage2D:at,compressedTexImage3D:mt,texImage2D:tt,texImage3D:ht,updateUBOMapping:vt,uniformBlockBinding:St,texStorage2D:K,texStorage3D:k,texSubImage2D:st,texSubImage3D:Z,compressedTexSubImage2D:rt,compressedTexSubImage3D:U,scissor:dt,viewport:lt,reset:Bt}}function ih(i,t,e,n){let s=vg(n);switch(e){case bh:return i*t;case wh:return i*t;case Th:return i*t*2;case Hl:return i*t/s.components*s.byteLength;case kl:return i*t/s.components*s.byteLength;case Ah:return i*t*2/s.components*s.byteLength;case Vl:return i*t*2/s.components*s.byteLength;case Sh:return i*t*3/s.components*s.byteLength;case Mn:return i*t*4/s.components*s.byteLength;case Gl:return i*t*4/s.components*s.byteLength;case Ar:case Rr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Cr:case Pr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ya:case Ea:return Math.max(i,16)*Math.max(t,8)/4;case va:case Ma:return Math.max(i,8)*Math.max(t,8)/2;case ba:case Sa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case wa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ta:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Aa:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Ra:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Ca:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Pa:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Ia:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Da:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case La:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Ua:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Na:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Fa:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Oa:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Ba:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case za:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Ir:case Ha:case ka:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Rh:case Va:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Ga:case Wa:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function vg(i){switch(i){case Gn:case yh:return{byteLength:1,components:1};case Us:case Mh:case an:return{byteLength:2,components:1};case Bl:case zl:return{byteLength:2,components:4};case Ei:case Ol:case Cn:return{byteLength:4,components:1};case Eh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function yg(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new _t,h=new WeakMap,d,u=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,E){return p?new OffscreenCanvas(A,E):Br("canvas")}function x(A,E,q){let at=1,mt=Ut(A);if((mt.width>q||mt.height>q)&&(at=q/Math.max(mt.width,mt.height)),at<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let st=Math.floor(at*mt.width),Z=Math.floor(at*mt.height);d===void 0&&(d=g(st,Z));let rt=E?g(st,Z):d;return rt.width=st,rt.height=Z,rt.getContext("2d").drawImage(A,0,0,st,Z),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+mt.width+"x"+mt.height+") to ("+st+"x"+Z+")."),rt}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+mt.width+"x"+mt.height+")."),A;return A}function m(A){return A.generateMipmaps&&A.minFilter!==$e&&A.minFilter!==Ke}function f(A){i.generateMipmap(A)}function y(A,E,q,at,mt=!1){if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let st=E;if(E===i.RED&&(q===i.FLOAT&&(st=i.R32F),q===i.HALF_FLOAT&&(st=i.R16F),q===i.UNSIGNED_BYTE&&(st=i.R8)),E===i.RED_INTEGER&&(q===i.UNSIGNED_BYTE&&(st=i.R8UI),q===i.UNSIGNED_SHORT&&(st=i.R16UI),q===i.UNSIGNED_INT&&(st=i.R32UI),q===i.BYTE&&(st=i.R8I),q===i.SHORT&&(st=i.R16I),q===i.INT&&(st=i.R32I)),E===i.RG&&(q===i.FLOAT&&(st=i.RG32F),q===i.HALF_FLOAT&&(st=i.RG16F),q===i.UNSIGNED_BYTE&&(st=i.RG8)),E===i.RG_INTEGER&&(q===i.UNSIGNED_BYTE&&(st=i.RG8UI),q===i.UNSIGNED_SHORT&&(st=i.RG16UI),q===i.UNSIGNED_INT&&(st=i.RG32UI),q===i.BYTE&&(st=i.RG8I),q===i.SHORT&&(st=i.RG16I),q===i.INT&&(st=i.RG32I)),E===i.RGB_INTEGER&&(q===i.UNSIGNED_BYTE&&(st=i.RGB8UI),q===i.UNSIGNED_SHORT&&(st=i.RGB16UI),q===i.UNSIGNED_INT&&(st=i.RGB32UI),q===i.BYTE&&(st=i.RGB8I),q===i.SHORT&&(st=i.RGB16I),q===i.INT&&(st=i.RGB32I)),E===i.RGBA_INTEGER&&(q===i.UNSIGNED_BYTE&&(st=i.RGBA8UI),q===i.UNSIGNED_SHORT&&(st=i.RGBA16UI),q===i.UNSIGNED_INT&&(st=i.RGBA32UI),q===i.BYTE&&(st=i.RGBA8I),q===i.SHORT&&(st=i.RGBA16I),q===i.INT&&(st=i.RGBA32I)),E===i.RGB&&q===i.UNSIGNED_INT_5_9_9_9_REV&&(st=i.RGB9_E5),E===i.RGBA){let Z=mt?Ur:re.getTransfer(at);q===i.FLOAT&&(st=i.RGBA32F),q===i.HALF_FLOAT&&(st=i.RGBA16F),q===i.UNSIGNED_BYTE&&(st=Z===ue?i.SRGB8_ALPHA8:i.RGBA8),q===i.UNSIGNED_SHORT_4_4_4_4&&(st=i.RGBA4),q===i.UNSIGNED_SHORT_5_5_5_1&&(st=i.RGB5_A1)}return(st===i.R16F||st===i.R32F||st===i.RG16F||st===i.RG32F||st===i.RGBA16F||st===i.RGBA32F)&&t.get("EXT_color_buffer_float"),st}function v(A,E){let q;return A?E===null||E===Ei||E===ts?q=i.DEPTH24_STENCIL8:E===Cn?q=i.DEPTH32F_STENCIL8:E===Us&&(q=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Ei||E===ts?q=i.DEPTH_COMPONENT24:E===Cn?q=i.DEPTH_COMPONENT32F:E===Us&&(q=i.DEPTH_COMPONENT16),q}function b(A,E){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==$e&&A.minFilter!==Ke?Math.log2(Math.max(E.width,E.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?E.mipmaps.length:1}function D(A){let E=A.target;E.removeEventListener("dispose",D),w(E),E.isVideoTexture&&h.delete(E)}function T(A){let E=A.target;E.removeEventListener("dispose",T),F(E)}function w(A){let E=n.get(A);if(E.__webglInit===void 0)return;let q=A.source,at=u.get(q);if(at){let mt=at[E.__cacheKey];mt.usedTimes--,mt.usedTimes===0&&I(A),Object.keys(at).length===0&&u.delete(q)}n.remove(A)}function I(A){let E=n.get(A);i.deleteTexture(E.__webglTexture);let q=A.source,at=u.get(q);delete at[E.__cacheKey],o.memory.textures--}function F(A){let E=n.get(A);if(A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let at=0;at<6;at++){if(Array.isArray(E.__webglFramebuffer[at]))for(let mt=0;mt<E.__webglFramebuffer[at].length;mt++)i.deleteFramebuffer(E.__webglFramebuffer[at][mt]);else i.deleteFramebuffer(E.__webglFramebuffer[at]);E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer[at])}else{if(Array.isArray(E.__webglFramebuffer))for(let at=0;at<E.__webglFramebuffer.length;at++)i.deleteFramebuffer(E.__webglFramebuffer[at]);else i.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&i.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let at=0;at<E.__webglColorRenderbuffer.length;at++)E.__webglColorRenderbuffer[at]&&i.deleteRenderbuffer(E.__webglColorRenderbuffer[at]);E.__webglDepthRenderbuffer&&i.deleteRenderbuffer(E.__webglDepthRenderbuffer)}let q=A.textures;for(let at=0,mt=q.length;at<mt;at++){let st=n.get(q[at]);st.__webglTexture&&(i.deleteTexture(st.__webglTexture),o.memory.textures--),n.remove(q[at])}n.remove(A)}let _=0;function M(){_=0}function C(){let A=_;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),_+=1,A}function N(A){let E=[];return E.push(A.wrapS),E.push(A.wrapT),E.push(A.wrapR||0),E.push(A.magFilter),E.push(A.minFilter),E.push(A.anisotropy),E.push(A.internalFormat),E.push(A.format),E.push(A.type),E.push(A.generateMipmaps),E.push(A.premultiplyAlpha),E.push(A.flipY),E.push(A.unpackAlignment),E.push(A.colorSpace),E.join()}function B(A,E){let q=n.get(A);if(A.isVideoTexture&&Lt(A),A.isRenderTargetTexture===!1&&A.version>0&&q.__version!==A.version){let at=A.image;if(at===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(at.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ct(q,A,E);return}}e.bindTexture(i.TEXTURE_2D,q.__webglTexture,i.TEXTURE0+E)}function et(A,E){let q=n.get(A);if(A.version>0&&q.__version!==A.version){ct(q,A,E);return}e.bindTexture(i.TEXTURE_2D_ARRAY,q.__webglTexture,i.TEXTURE0+E)}function W(A,E){let q=n.get(A);if(A.version>0&&q.__version!==A.version){ct(q,A,E);return}e.bindTexture(i.TEXTURE_3D,q.__webglTexture,i.TEXTURE0+E)}function it(A,E){let q=n.get(A);if(A.version>0&&q.__version!==A.version){z(q,A,E);return}e.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture,i.TEXTURE0+E)}let X={[_a]:i.REPEAT,[Rn]:i.CLAMP_TO_EDGE,[xa]:i.MIRRORED_REPEAT},Y={[$e]:i.NEAREST,[sf]:i.NEAREST_MIPMAP_NEAREST,[Qs]:i.NEAREST_MIPMAP_LINEAR,[Ke]:i.LINEAR,[Ao]:i.LINEAR_MIPMAP_NEAREST,[Mi]:i.LINEAR_MIPMAP_LINEAR},O={[lf]:i.NEVER,[pf]:i.ALWAYS,[cf]:i.LESS,[Ph]:i.LEQUAL,[hf]:i.EQUAL,[df]:i.GEQUAL,[uf]:i.GREATER,[ff]:i.NOTEQUAL};function Q(A,E){if(E.type===Cn&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===Ke||E.magFilter===Ao||E.magFilter===Qs||E.magFilter===Mi||E.minFilter===Ke||E.minFilter===Ao||E.minFilter===Qs||E.minFilter===Mi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,X[E.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,X[E.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,X[E.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,Y[E.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,Y[E.minFilter]),E.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,O[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===$e||E.minFilter!==Qs&&E.minFilter!==Mi||E.type===Cn&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){let q=t.get("EXT_texture_filter_anisotropic");i.texParameterf(A,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function gt(A,E){let q=!1;A.__webglInit===void 0&&(A.__webglInit=!0,E.addEventListener("dispose",D));let at=E.source,mt=u.get(at);mt===void 0&&(mt={},u.set(at,mt));let st=N(E);if(st!==A.__cacheKey){mt[st]===void 0&&(mt[st]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,q=!0),mt[st].usedTimes++;let Z=mt[A.__cacheKey];Z!==void 0&&(mt[A.__cacheKey].usedTimes--,Z.usedTimes===0&&I(E)),A.__cacheKey=st,A.__webglTexture=mt[st].texture}return q}function ct(A,E,q){let at=i.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(at=i.TEXTURE_2D_ARRAY),E.isData3DTexture&&(at=i.TEXTURE_3D);let mt=gt(A,E),st=E.source;e.bindTexture(at,A.__webglTexture,i.TEXTURE0+q);let Z=n.get(st);if(st.version!==Z.__version||mt===!0){e.activeTexture(i.TEXTURE0+q);let rt=re.getPrimaries(re.workingColorSpace),U=E.colorSpace===yn?null:re.getPrimaries(E.colorSpace),K=E.colorSpace===yn||rt===U?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,K);let k=x(E.image,!1,s.maxTextureSize);k=ee(E,k);let tt=r.convert(E.format,E.colorSpace),ht=r.convert(E.type),dt=y(E.internalFormat,tt,ht,E.colorSpace,E.isVideoTexture);Q(at,E);let lt,vt=E.mipmaps,St=E.isVideoTexture!==!0,Bt=Z.__version===void 0||mt===!0,L=st.dataReady,Mt=b(E,k);if(E.isDepthTexture)dt=v(E.format===es,E.type),Bt&&(St?e.texStorage2D(i.TEXTURE_2D,1,dt,k.width,k.height):e.texImage2D(i.TEXTURE_2D,0,dt,k.width,k.height,0,tt,ht,null));else if(E.isDataTexture)if(vt.length>0){St&&Bt&&e.texStorage2D(i.TEXTURE_2D,Mt,dt,vt[0].width,vt[0].height);for(let nt=0,ut=vt.length;nt<ut;nt++)lt=vt[nt],St?L&&e.texSubImage2D(i.TEXTURE_2D,nt,0,0,lt.width,lt.height,tt,ht,lt.data):e.texImage2D(i.TEXTURE_2D,nt,dt,lt.width,lt.height,0,tt,ht,lt.data);E.generateMipmaps=!1}else St?(Bt&&e.texStorage2D(i.TEXTURE_2D,Mt,dt,k.width,k.height),L&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,k.width,k.height,tt,ht,k.data)):e.texImage2D(i.TEXTURE_2D,0,dt,k.width,k.height,0,tt,ht,k.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){St&&Bt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Mt,dt,vt[0].width,vt[0].height,k.depth);for(let nt=0,ut=vt.length;nt<ut;nt++)if(lt=vt[nt],E.format!==Mn)if(tt!==null)if(St){if(L)if(E.layerUpdates.size>0){let wt=ih(lt.width,lt.height,E.format,E.type);for(let Ct of E.layerUpdates){let Kt=lt.data.subarray(Ct*wt/lt.data.BYTES_PER_ELEMENT,(Ct+1)*wt/lt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,nt,0,0,Ct,lt.width,lt.height,1,tt,Kt,0,0)}E.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,nt,0,0,0,lt.width,lt.height,k.depth,tt,lt.data,0,0)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,nt,dt,lt.width,lt.height,k.depth,0,lt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else St?L&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,nt,0,0,0,lt.width,lt.height,k.depth,tt,ht,lt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,nt,dt,lt.width,lt.height,k.depth,0,tt,ht,lt.data)}else{St&&Bt&&e.texStorage2D(i.TEXTURE_2D,Mt,dt,vt[0].width,vt[0].height);for(let nt=0,ut=vt.length;nt<ut;nt++)lt=vt[nt],E.format!==Mn?tt!==null?St?L&&e.compressedTexSubImage2D(i.TEXTURE_2D,nt,0,0,lt.width,lt.height,tt,lt.data):e.compressedTexImage2D(i.TEXTURE_2D,nt,dt,lt.width,lt.height,0,lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):St?L&&e.texSubImage2D(i.TEXTURE_2D,nt,0,0,lt.width,lt.height,tt,ht,lt.data):e.texImage2D(i.TEXTURE_2D,nt,dt,lt.width,lt.height,0,tt,ht,lt.data)}else if(E.isDataArrayTexture)if(St){if(Bt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Mt,dt,k.width,k.height,k.depth),L)if(E.layerUpdates.size>0){let nt=ih(k.width,k.height,E.format,E.type);for(let ut of E.layerUpdates){let wt=k.data.subarray(ut*nt/k.data.BYTES_PER_ELEMENT,(ut+1)*nt/k.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ut,k.width,k.height,1,tt,ht,wt)}E.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,k.width,k.height,k.depth,tt,ht,k.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,dt,k.width,k.height,k.depth,0,tt,ht,k.data);else if(E.isData3DTexture)St?(Bt&&e.texStorage3D(i.TEXTURE_3D,Mt,dt,k.width,k.height,k.depth),L&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,k.width,k.height,k.depth,tt,ht,k.data)):e.texImage3D(i.TEXTURE_3D,0,dt,k.width,k.height,k.depth,0,tt,ht,k.data);else if(E.isFramebufferTexture){if(Bt)if(St)e.texStorage2D(i.TEXTURE_2D,Mt,dt,k.width,k.height);else{let nt=k.width,ut=k.height;for(let wt=0;wt<Mt;wt++)e.texImage2D(i.TEXTURE_2D,wt,dt,nt,ut,0,tt,ht,null),nt>>=1,ut>>=1}}else if(vt.length>0){if(St&&Bt){let nt=Ut(vt[0]);e.texStorage2D(i.TEXTURE_2D,Mt,dt,nt.width,nt.height)}for(let nt=0,ut=vt.length;nt<ut;nt++)lt=vt[nt],St?L&&e.texSubImage2D(i.TEXTURE_2D,nt,0,0,tt,ht,lt):e.texImage2D(i.TEXTURE_2D,nt,dt,tt,ht,lt);E.generateMipmaps=!1}else if(St){if(Bt){let nt=Ut(k);e.texStorage2D(i.TEXTURE_2D,Mt,dt,nt.width,nt.height)}L&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,tt,ht,k)}else e.texImage2D(i.TEXTURE_2D,0,dt,tt,ht,k);m(E)&&f(at),Z.__version=st.version,E.onUpdate&&E.onUpdate(E)}A.__version=E.version}function z(A,E,q){if(E.image.length!==6)return;let at=gt(A,E),mt=E.source;e.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+q);let st=n.get(mt);if(mt.version!==st.__version||at===!0){e.activeTexture(i.TEXTURE0+q);let Z=re.getPrimaries(re.workingColorSpace),rt=E.colorSpace===yn?null:re.getPrimaries(E.colorSpace),U=E.colorSpace===yn||Z===rt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,U);let K=E.isCompressedTexture||E.image[0].isCompressedTexture,k=E.image[0]&&E.image[0].isDataTexture,tt=[];for(let ut=0;ut<6;ut++)!K&&!k?tt[ut]=x(E.image[ut],!0,s.maxCubemapSize):tt[ut]=k?E.image[ut].image:E.image[ut],tt[ut]=ee(E,tt[ut]);let ht=tt[0],dt=r.convert(E.format,E.colorSpace),lt=r.convert(E.type),vt=y(E.internalFormat,dt,lt,E.colorSpace),St=E.isVideoTexture!==!0,Bt=st.__version===void 0||at===!0,L=mt.dataReady,Mt=b(E,ht);Q(i.TEXTURE_CUBE_MAP,E);let nt;if(K){St&&Bt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Mt,vt,ht.width,ht.height);for(let ut=0;ut<6;ut++){nt=tt[ut].mipmaps;for(let wt=0;wt<nt.length;wt++){let Ct=nt[wt];E.format!==Mn?dt!==null?St?L&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,wt,0,0,Ct.width,Ct.height,dt,Ct.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,wt,vt,Ct.width,Ct.height,0,Ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):St?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,wt,0,0,Ct.width,Ct.height,dt,lt,Ct.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,wt,vt,Ct.width,Ct.height,0,dt,lt,Ct.data)}}}else{if(nt=E.mipmaps,St&&Bt){nt.length>0&&Mt++;let ut=Ut(tt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Mt,vt,ut.width,ut.height)}for(let ut=0;ut<6;ut++)if(k){St?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,0,0,tt[ut].width,tt[ut].height,dt,lt,tt[ut].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,vt,tt[ut].width,tt[ut].height,0,dt,lt,tt[ut].data);for(let wt=0;wt<nt.length;wt++){let Kt=nt[wt].image[ut].image;St?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,wt+1,0,0,Kt.width,Kt.height,dt,lt,Kt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,wt+1,vt,Kt.width,Kt.height,0,dt,lt,Kt.data)}}else{St?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,0,0,dt,lt,tt[ut]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,vt,dt,lt,tt[ut]);for(let wt=0;wt<nt.length;wt++){let Ct=nt[wt];St?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,wt+1,0,0,dt,lt,Ct.image[ut]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,wt+1,vt,dt,lt,Ct.image[ut])}}}m(E)&&f(i.TEXTURE_CUBE_MAP),st.__version=mt.version,E.onUpdate&&E.onUpdate(E)}A.__version=E.version}function $(A,E,q,at,mt,st){let Z=r.convert(q.format,q.colorSpace),rt=r.convert(q.type),U=y(q.internalFormat,Z,rt,q.colorSpace);if(!n.get(E).__hasExternalTextures){let k=Math.max(1,E.width>>st),tt=Math.max(1,E.height>>st);mt===i.TEXTURE_3D||mt===i.TEXTURE_2D_ARRAY?e.texImage3D(mt,st,U,k,tt,E.depth,0,Z,rt,null):e.texImage2D(mt,st,U,k,tt,0,Z,rt,null)}e.bindFramebuffer(i.FRAMEBUFFER,A),Xt(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,at,mt,n.get(q).__webglTexture,0,zt(E)):(mt===i.TEXTURE_2D||mt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&mt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,at,mt,n.get(q).__webglTexture,st),e.bindFramebuffer(i.FRAMEBUFFER,null)}function ft(A,E,q){if(i.bindRenderbuffer(i.RENDERBUFFER,A),E.depthBuffer){let at=E.depthTexture,mt=at&&at.isDepthTexture?at.type:null,st=v(E.stencilBuffer,mt),Z=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,rt=zt(E);Xt(E)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,rt,st,E.width,E.height):q?i.renderbufferStorageMultisample(i.RENDERBUFFER,rt,st,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,st,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,A)}else{let at=E.textures;for(let mt=0;mt<at.length;mt++){let st=at[mt],Z=r.convert(st.format,st.colorSpace),rt=r.convert(st.type),U=y(st.internalFormat,Z,rt,st.colorSpace),K=zt(E);q&&Xt(E)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,K,U,E.width,E.height):Xt(E)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,K,U,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,U,E.width,E.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ot(A,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,A),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),B(E.depthTexture,0);let at=n.get(E.depthTexture).__webglTexture,mt=zt(E);if(E.depthTexture.format===Zi)Xt(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,at,0,mt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,at,0);else if(E.depthTexture.format===es)Xt(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,at,0,mt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,at,0);else throw new Error("Unknown depthTexture format")}function Et(A){let E=n.get(A),q=A.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==A.depthTexture){let at=A.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),at){let mt=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,at.removeEventListener("dispose",mt)};at.addEventListener("dispose",mt),E.__depthDisposeCallback=mt}E.__boundDepthTexture=at}if(A.depthTexture&&!E.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");ot(E.__webglFramebuffer,A)}else if(q){E.__webglDepthbuffer=[];for(let at=0;at<6;at++)if(e.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[at]),E.__webglDepthbuffer[at]===void 0)E.__webglDepthbuffer[at]=i.createRenderbuffer(),ft(E.__webglDepthbuffer[at],A,!1);else{let mt=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,st=E.__webglDepthbuffer[at];i.bindRenderbuffer(i.RENDERBUFFER,st),i.framebufferRenderbuffer(i.FRAMEBUFFER,mt,i.RENDERBUFFER,st)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=i.createRenderbuffer(),ft(E.__webglDepthbuffer,A,!1);else{let at=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,mt=E.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,mt),i.framebufferRenderbuffer(i.FRAMEBUFFER,at,i.RENDERBUFFER,mt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function pt(A,E,q){let at=n.get(A);E!==void 0&&$(at.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),q!==void 0&&Et(A)}function bt(A){let E=A.texture,q=n.get(A),at=n.get(E);A.addEventListener("dispose",T);let mt=A.textures,st=A.isWebGLCubeRenderTarget===!0,Z=mt.length>1;if(Z||(at.__webglTexture===void 0&&(at.__webglTexture=i.createTexture()),at.__version=E.version,o.memory.textures++),st){q.__webglFramebuffer=[];for(let rt=0;rt<6;rt++)if(E.mipmaps&&E.mipmaps.length>0){q.__webglFramebuffer[rt]=[];for(let U=0;U<E.mipmaps.length;U++)q.__webglFramebuffer[rt][U]=i.createFramebuffer()}else q.__webglFramebuffer[rt]=i.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){q.__webglFramebuffer=[];for(let rt=0;rt<E.mipmaps.length;rt++)q.__webglFramebuffer[rt]=i.createFramebuffer()}else q.__webglFramebuffer=i.createFramebuffer();if(Z)for(let rt=0,U=mt.length;rt<U;rt++){let K=n.get(mt[rt]);K.__webglTexture===void 0&&(K.__webglTexture=i.createTexture(),o.memory.textures++)}if(A.samples>0&&Xt(A)===!1){q.__webglMultisampledFramebuffer=i.createFramebuffer(),q.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let rt=0;rt<mt.length;rt++){let U=mt[rt];q.__webglColorRenderbuffer[rt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,q.__webglColorRenderbuffer[rt]);let K=r.convert(U.format,U.colorSpace),k=r.convert(U.type),tt=y(U.internalFormat,K,k,U.colorSpace,A.isXRRenderTarget===!0),ht=zt(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,ht,tt,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+rt,i.RENDERBUFFER,q.__webglColorRenderbuffer[rt])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(q.__webglDepthRenderbuffer=i.createRenderbuffer(),ft(q.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(st){e.bindTexture(i.TEXTURE_CUBE_MAP,at.__webglTexture),Q(i.TEXTURE_CUBE_MAP,E);for(let rt=0;rt<6;rt++)if(E.mipmaps&&E.mipmaps.length>0)for(let U=0;U<E.mipmaps.length;U++)$(q.__webglFramebuffer[rt][U],A,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,U);else $(q.__webglFramebuffer[rt],A,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0);m(E)&&f(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Z){for(let rt=0,U=mt.length;rt<U;rt++){let K=mt[rt],k=n.get(K);e.bindTexture(i.TEXTURE_2D,k.__webglTexture),Q(i.TEXTURE_2D,K),$(q.__webglFramebuffer,A,K,i.COLOR_ATTACHMENT0+rt,i.TEXTURE_2D,0),m(K)&&f(i.TEXTURE_2D)}e.unbindTexture()}else{let rt=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(rt=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(rt,at.__webglTexture),Q(rt,E),E.mipmaps&&E.mipmaps.length>0)for(let U=0;U<E.mipmaps.length;U++)$(q.__webglFramebuffer[U],A,E,i.COLOR_ATTACHMENT0,rt,U);else $(q.__webglFramebuffer,A,E,i.COLOR_ATTACHMENT0,rt,0);m(E)&&f(rt),e.unbindTexture()}A.depthBuffer&&Et(A)}function Rt(A){let E=A.textures;for(let q=0,at=E.length;q<at;q++){let mt=E[q];if(m(mt)){let st=A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Z=n.get(mt).__webglTexture;e.bindTexture(st,Z),f(st),e.unbindTexture()}}}let Tt=[],P=[];function Wt(A){if(A.samples>0){if(Xt(A)===!1){let E=A.textures,q=A.width,at=A.height,mt=i.COLOR_BUFFER_BIT,st=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Z=n.get(A),rt=E.length>1;if(rt)for(let U=0;U<E.length;U++)e.bindFramebuffer(i.FRAMEBUFFER,Z.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+U,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Z.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+U,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Z.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Z.__webglFramebuffer);for(let U=0;U<E.length;U++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(mt|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(mt|=i.STENCIL_BUFFER_BIT)),rt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Z.__webglColorRenderbuffer[U]);let K=n.get(E[U]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,K,0)}i.blitFramebuffer(0,0,q,at,0,0,q,at,mt,i.NEAREST),l===!0&&(Tt.length=0,P.length=0,Tt.push(i.COLOR_ATTACHMENT0+U),A.depthBuffer&&A.resolveDepthBuffer===!1&&(Tt.push(st),P.push(st),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,P)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Tt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),rt)for(let U=0;U<E.length;U++){e.bindFramebuffer(i.FRAMEBUFFER,Z.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+U,i.RENDERBUFFER,Z.__webglColorRenderbuffer[U]);let K=n.get(E[U]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Z.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+U,i.TEXTURE_2D,K,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Z.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){let E=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[E])}}}function zt(A){return Math.min(s.maxSamples,A.samples)}function Xt(A){let E=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Lt(A){let E=o.render.frame;h.get(A)!==E&&(h.set(A,E),A.update())}function ee(A,E){let q=A.colorSpace,at=A.format,mt=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||q!==ai&&q!==yn&&(re.getTransfer(q)===ue?(at!==Mn||mt!==Gn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",q)),E}function Ut(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=C,this.resetTextureUnits=M,this.setTexture2D=B,this.setTexture2DArray=et,this.setTexture3D=W,this.setTextureCube=it,this.rebindTextures=pt,this.setupRenderTarget=bt,this.updateRenderTargetMipmap=Rt,this.updateMultisampleRenderTarget=Wt,this.setupDepthRenderbuffer=Et,this.setupFrameBufferTexture=$,this.useMultisampledRTT=Xt}function Mg(i,t){function e(n,s=yn){let r,o=re.getTransfer(s);if(n===Gn)return i.UNSIGNED_BYTE;if(n===Bl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===zl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Eh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===yh)return i.BYTE;if(n===Mh)return i.SHORT;if(n===Us)return i.UNSIGNED_SHORT;if(n===Ol)return i.INT;if(n===Ei)return i.UNSIGNED_INT;if(n===Cn)return i.FLOAT;if(n===an)return i.HALF_FLOAT;if(n===bh)return i.ALPHA;if(n===Sh)return i.RGB;if(n===Mn)return i.RGBA;if(n===wh)return i.LUMINANCE;if(n===Th)return i.LUMINANCE_ALPHA;if(n===Zi)return i.DEPTH_COMPONENT;if(n===es)return i.DEPTH_STENCIL;if(n===Hl)return i.RED;if(n===kl)return i.RED_INTEGER;if(n===Ah)return i.RG;if(n===Vl)return i.RG_INTEGER;if(n===Gl)return i.RGBA_INTEGER;if(n===Ar||n===Rr||n===Cr||n===Pr)if(o===ue)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ar)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Rr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Cr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Pr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ar)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Rr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Cr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Pr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===va||n===ya||n===Ma||n===Ea)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===va)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ya)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ma)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ea)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ba||n===Sa||n===wa)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ba||n===Sa)return o===ue?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===wa)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ta||n===Aa||n===Ra||n===Ca||n===Pa||n===Ia||n===Da||n===La||n===Ua||n===Na||n===Fa||n===Oa||n===Ba||n===za)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ta)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Aa)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ra)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ca)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Pa)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ia)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Da)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===La)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ua)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Na)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Fa)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Oa)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ba)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===za)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ir||n===Ha||n===ka)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Ir)return o===ue?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ha)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ka)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Rh||n===Va||n===Ga||n===Wa)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ir)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Va)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ga)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Wa)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ts?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var rl=class extends Ne{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},oe=class extends Oe{constructor(){super(),this.isGroup=!0,this.type="Group"}},Eg={type:"move"},Ps=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new oe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new oe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new oe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let x of t.hand.values()){let m=e.getJointPose(x,n),f=this._getHandJoint(c,x);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),p=.02,g=.005;c.inputState.pinching&&u>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Eg)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new oe;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},bg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Sg=`
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

}`,ol=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let s=new Je,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new ie({vertexShader:bg,fragmentShader:Sg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ht(new je(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},al=class extends Wn{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,u=null,p=null,g=null,x=new ol,m=e.getContextAttributes(),f=null,y=null,v=[],b=[],D=new _t,T=null,w=new Ne;w.layers.enable(1),w.viewport=new ve;let I=new Ne;I.layers.enable(2),I.viewport=new ve;let F=[w,I],_=new rl;_.layers.enable(1),_.layers.enable(2);let M=null,C=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(z){let $=v[z];return $===void 0&&($=new Ps,v[z]=$),$.getTargetRaySpace()},this.getControllerGrip=function(z){let $=v[z];return $===void 0&&($=new Ps,v[z]=$),$.getGripSpace()},this.getHand=function(z){let $=v[z];return $===void 0&&($=new Ps,v[z]=$),$.getHandSpace()};function N(z){let $=b.indexOf(z.inputSource);if($===-1)return;let ft=v[$];ft!==void 0&&(ft.update(z.inputSource,z.frame,c||o),ft.dispatchEvent({type:z.type,data:z.inputSource}))}function B(){s.removeEventListener("select",N),s.removeEventListener("selectstart",N),s.removeEventListener("selectend",N),s.removeEventListener("squeeze",N),s.removeEventListener("squeezestart",N),s.removeEventListener("squeezeend",N),s.removeEventListener("end",B),s.removeEventListener("inputsourceschange",et);for(let z=0;z<v.length;z++){let $=b[z];$!==null&&(b[z]=null,v[z].disconnect($))}M=null,C=null,x.reset(),t.setRenderTarget(f),p=null,u=null,d=null,s=null,y=null,ct.stop(),n.isPresenting=!1,t.setPixelRatio(T),t.setSize(D.width,D.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(z){r=z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(z){a=z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(z){c=z},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(z){if(s=z,s!==null){if(f=t.getRenderTarget(),s.addEventListener("select",N),s.addEventListener("selectstart",N),s.addEventListener("selectend",N),s.addEventListener("squeeze",N),s.addEventListener("squeezestart",N),s.addEventListener("squeezeend",N),s.addEventListener("end",B),s.addEventListener("inputsourceschange",et),m.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(D),s.renderState.layers===void 0){let $={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,$),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new Fe(p.framebufferWidth,p.framebufferHeight,{format:Mn,type:Gn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let $=null,ft=null,ot=null;m.depth&&(ot=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,$=m.stencil?es:Zi,ft=m.stencil?ts:Ei);let Et={colorFormat:e.RGBA8,depthFormat:ot,scaleFactor:r};d=new XRWebGLBinding(s,e),u=d.createProjectionLayer(Et),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),y=new Fe(u.textureWidth,u.textureHeight,{format:Mn,type:Gn,depthTexture:new Xr(u.textureWidth,u.textureHeight,ft,void 0,void 0,void 0,void 0,void 0,void 0,$),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),ct.setContext(s),ct.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function et(z){for(let $=0;$<z.removed.length;$++){let ft=z.removed[$],ot=b.indexOf(ft);ot>=0&&(b[ot]=null,v[ot].disconnect(ft))}for(let $=0;$<z.added.length;$++){let ft=z.added[$],ot=b.indexOf(ft);if(ot===-1){for(let pt=0;pt<v.length;pt++)if(pt>=b.length){b.push(ft),ot=pt;break}else if(b[pt]===null){b[pt]=ft,ot=pt;break}if(ot===-1)break}let Et=v[ot];Et&&Et.connect(ft)}}let W=new R,it=new R;function X(z,$,ft){W.setFromMatrixPosition($.matrixWorld),it.setFromMatrixPosition(ft.matrixWorld);let ot=W.distanceTo(it),Et=$.projectionMatrix.elements,pt=ft.projectionMatrix.elements,bt=Et[14]/(Et[10]-1),Rt=Et[14]/(Et[10]+1),Tt=(Et[9]+1)/Et[5],P=(Et[9]-1)/Et[5],Wt=(Et[8]-1)/Et[0],zt=(pt[8]+1)/pt[0],Xt=bt*Wt,Lt=bt*zt,ee=ot/(-Wt+zt),Ut=ee*-Wt;if($.matrixWorld.decompose(z.position,z.quaternion,z.scale),z.translateX(Ut),z.translateZ(ee),z.matrixWorld.compose(z.position,z.quaternion,z.scale),z.matrixWorldInverse.copy(z.matrixWorld).invert(),Et[10]===-1)z.projectionMatrix.copy($.projectionMatrix),z.projectionMatrixInverse.copy($.projectionMatrixInverse);else{let A=bt+ee,E=Rt+ee,q=Xt-Ut,at=Lt+(ot-Ut),mt=Tt*Rt/E*A,st=P*Rt/E*A;z.projectionMatrix.makePerspective(q,at,mt,st,A,E),z.projectionMatrixInverse.copy(z.projectionMatrix).invert()}}function Y(z,$){$===null?z.matrixWorld.copy(z.matrix):z.matrixWorld.multiplyMatrices($.matrixWorld,z.matrix),z.matrixWorldInverse.copy(z.matrixWorld).invert()}this.updateCamera=function(z){if(s===null)return;let $=z.near,ft=z.far;x.texture!==null&&(x.depthNear>0&&($=x.depthNear),x.depthFar>0&&(ft=x.depthFar)),_.near=I.near=w.near=$,_.far=I.far=w.far=ft,(M!==_.near||C!==_.far)&&(s.updateRenderState({depthNear:_.near,depthFar:_.far}),M=_.near,C=_.far);let ot=z.parent,Et=_.cameras;Y(_,ot);for(let pt=0;pt<Et.length;pt++)Y(Et[pt],ot);Et.length===2?X(_,w,I):_.projectionMatrix.copy(w.projectionMatrix),O(z,_,ot)};function O(z,$,ft){ft===null?z.matrix.copy($.matrixWorld):(z.matrix.copy(ft.matrixWorld),z.matrix.invert(),z.matrix.multiply($.matrixWorld)),z.matrix.decompose(z.position,z.quaternion,z.scale),z.updateMatrixWorld(!0),z.projectionMatrix.copy($.projectionMatrix),z.projectionMatrixInverse.copy($.projectionMatrixInverse),z.isPerspectiveCamera&&(z.fov=Ns*2*Math.atan(1/z.projectionMatrix.elements[5]),z.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(u===null&&p===null))return l},this.setFoveation=function(z){l=z,u!==null&&(u.fixedFoveation=z),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=z)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(_)};let Q=null;function gt(z,$){if(h=$.getViewerPose(c||o),g=$,h!==null){let ft=h.views;p!==null&&(t.setRenderTargetFramebuffer(y,p.framebuffer),t.setRenderTarget(y));let ot=!1;ft.length!==_.cameras.length&&(_.cameras.length=0,ot=!0);for(let pt=0;pt<ft.length;pt++){let bt=ft[pt],Rt=null;if(p!==null)Rt=p.getViewport(bt);else{let P=d.getViewSubImage(u,bt);Rt=P.viewport,pt===0&&(t.setRenderTargetTextures(y,P.colorTexture,u.ignoreDepthValues?void 0:P.depthStencilTexture),t.setRenderTarget(y))}let Tt=F[pt];Tt===void 0&&(Tt=new Ne,Tt.layers.enable(pt),Tt.viewport=new ve,F[pt]=Tt),Tt.matrix.fromArray(bt.transform.matrix),Tt.matrix.decompose(Tt.position,Tt.quaternion,Tt.scale),Tt.projectionMatrix.fromArray(bt.projectionMatrix),Tt.projectionMatrixInverse.copy(Tt.projectionMatrix).invert(),Tt.viewport.set(Rt.x,Rt.y,Rt.width,Rt.height),pt===0&&(_.matrix.copy(Tt.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),ot===!0&&_.cameras.push(Tt)}let Et=s.enabledFeatures;if(Et&&Et.includes("depth-sensing")){let pt=d.getDepthInformation(ft[0]);pt&&pt.isValid&&pt.texture&&x.init(t,pt,s.renderState)}}for(let ft=0;ft<v.length;ft++){let ot=b[ft],Et=v[ft];ot!==null&&Et!==void 0&&Et.update(ot,$,c||o)}Q&&Q(z,$),$.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:$}),g=null}let ct=new Nh;ct.setAnimationLoop(gt),this.setAnimationLoop=function(z){Q=z},this.dispose=function(){}}},gi=new Le,wg=new Yt;function Tg(i,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,Uh(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,y,v,b){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),d(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f)):f.isMeshStandardMaterial?(r(m,f),u(m,f),f.isMeshPhysicalMaterial&&p(m,f,b)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),x(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,y,v):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Ve&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Ve&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let y=t.get(f),v=y.envMap,b=y.envMapRotation;v&&(m.envMap.value=v,gi.copy(b),gi.x*=-1,gi.y*=-1,gi.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(gi.y*=-1,gi.z*=-1),m.envMapRotation.value.setFromMatrix4(wg.makeRotationFromEuler(gi)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,y,v){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*y,m.scale.value=v*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function u(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,y){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Ve&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function x(m,f){let y=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Ag(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,v){let b=v.program;n.uniformBlockBinding(y,b)}function c(y,v){let b=s[y.id];b===void 0&&(g(y),b=h(y),s[y.id]=b,y.addEventListener("dispose",m));let D=v.program;n.updateUBOMapping(y,D);let T=t.render.frame;r[y.id]!==T&&(u(y),r[y.id]=T)}function h(y){let v=d();y.__bindingPointIndex=v;let b=i.createBuffer(),D=y.__size,T=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,D,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,b),b}function d(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(y){let v=s[y.id],b=y.uniforms,D=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let T=0,w=b.length;T<w;T++){let I=Array.isArray(b[T])?b[T]:[b[T]];for(let F=0,_=I.length;F<_;F++){let M=I[F];if(p(M,T,F,D)===!0){let C=M.__offset,N=Array.isArray(M.value)?M.value:[M.value],B=0;for(let et=0;et<N.length;et++){let W=N[et],it=x(W);typeof W=="number"||typeof W=="boolean"?(M.__data[0]=W,i.bufferSubData(i.UNIFORM_BUFFER,C+B,M.__data)):W.isMatrix3?(M.__data[0]=W.elements[0],M.__data[1]=W.elements[1],M.__data[2]=W.elements[2],M.__data[3]=0,M.__data[4]=W.elements[3],M.__data[5]=W.elements[4],M.__data[6]=W.elements[5],M.__data[7]=0,M.__data[8]=W.elements[6],M.__data[9]=W.elements[7],M.__data[10]=W.elements[8],M.__data[11]=0):(W.toArray(M.__data,B),B+=it.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,C,M.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(y,v,b,D){let T=y.value,w=v+"_"+b;if(D[w]===void 0)return typeof T=="number"||typeof T=="boolean"?D[w]=T:D[w]=T.clone(),!0;{let I=D[w];if(typeof T=="number"||typeof T=="boolean"){if(I!==T)return D[w]=T,!0}else if(I.equals(T)===!1)return I.copy(T),!0}return!1}function g(y){let v=y.uniforms,b=0,D=16;for(let w=0,I=v.length;w<I;w++){let F=Array.isArray(v[w])?v[w]:[v[w]];for(let _=0,M=F.length;_<M;_++){let C=F[_],N=Array.isArray(C.value)?C.value:[C.value];for(let B=0,et=N.length;B<et;B++){let W=N[B],it=x(W),X=b%D,Y=X%it.boundary,O=X+Y;b+=Y,O!==0&&D-O<it.storage&&(b+=D-O),C.__data=new Float32Array(it.storage/Float32Array.BYTES_PER_ELEMENT),C.__offset=b,b+=it.storage}}}let T=b%D;return T>0&&(b+=D-T),y.__size=b,y.__cache={},this}function x(y){let v={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(v.boundary=4,v.storage=4):y.isVector2?(v.boundary=8,v.storage=8):y.isVector3||y.isColor?(v.boundary=16,v.storage=12):y.isVector4?(v.boundary=16,v.storage=16):y.isMatrix3?(v.boundary=48,v.storage=48):y.isMatrix4?(v.boundary=64,v.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),v}function m(y){let v=y.target;v.removeEventListener("dispose",m);let b=o.indexOf(v.__bindingPointIndex);o.splice(b,1),i.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function f(){for(let y in s)i.deleteBuffer(s[y]);o=[],s={},r={}}return{bind:l,update:c,dispose:f}}var Yr=class{constructor(t={}){let{canvas:e=If(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=t;this.isWebGLRenderer=!0;let u;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");u=n.getContextAttributes().alpha}else u=o;let p=new Uint32Array(4),g=new Int32Array(4),x=null,m=null,f=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ye,this.toneMapping=si,this.toneMappingExposure=1;let v=this,b=!1,D=0,T=0,w=null,I=-1,F=null,_=new ve,M=new ve,C=null,N=new G(0),B=0,et=e.width,W=e.height,it=1,X=null,Y=null,O=new ve(0,0,et,W),Q=new ve(0,0,et,W),gt=!1,ct=new Os,z=!1,$=!1,ft=new Yt,ot=new Yt,Et=new R,pt=new ve,bt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Rt=!1;function Tt(){return w===null?it:1}let P=n;function Wt(S,H){return e.getContext(S,H)}try{let S={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r169"),e.addEventListener("webglcontextlost",ut,!1),e.addEventListener("webglcontextrestored",wt,!1),e.addEventListener("webglcontextcreationerror",Ct,!1),P===null){let H="webgl2";if(P=Wt(H,S),P===null)throw Wt(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let zt,Xt,Lt,ee,Ut,A,E,q,at,mt,st,Z,rt,U,K,k,tt,ht,dt,lt,vt,St,Bt,L;function Mt(){zt=new Gm(P),zt.init(),St=new Mg(P,zt),Xt=new Om(P,zt,t,St),Lt=new xg(P),Xt.reverseDepthBuffer&&Lt.buffers.depth.setReversed(!0),ee=new Ym(P),Ut=new rg,A=new yg(P,zt,Lt,Ut,Xt,St,ee),E=new zm(v),q=new Vm(v),at=new Qf(P),Bt=new Nm(P,at),mt=new Wm(P,at,ee,Bt),st=new Zm(P,mt,at,ee),dt=new qm(P,Xt,A),k=new Bm(Ut),Z=new sg(v,E,q,zt,Xt,Bt,k),rt=new Tg(v,Ut),U=new ag,K=new dg(zt),ht=new Um(v,E,q,Lt,st,u,l),tt=new gg(v,st,Xt),L=new Ag(P,ee,Xt,Lt),lt=new Fm(P,zt,ee),vt=new Xm(P,zt,ee),ee.programs=Z.programs,v.capabilities=Xt,v.extensions=zt,v.properties=Ut,v.renderLists=U,v.shadowMap=tt,v.state=Lt,v.info=ee}Mt();let nt=new al(v,P);this.xr=nt,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){let S=zt.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=zt.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return it},this.setPixelRatio=function(S){S!==void 0&&(it=S,this.setSize(et,W,!1))},this.getSize=function(S){return S.set(et,W)},this.setSize=function(S,H,J=!0){if(nt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}et=S,W=H,e.width=Math.floor(S*it),e.height=Math.floor(H*it),J===!0&&(e.style.width=S+"px",e.style.height=H+"px"),this.setViewport(0,0,S,H)},this.getDrawingBufferSize=function(S){return S.set(et*it,W*it).floor()},this.setDrawingBufferSize=function(S,H,J){et=S,W=H,it=J,e.width=Math.floor(S*J),e.height=Math.floor(H*J),this.setViewport(0,0,S,H)},this.getCurrentViewport=function(S){return S.copy(_)},this.getViewport=function(S){return S.copy(O)},this.setViewport=function(S,H,J,j){S.isVector4?O.set(S.x,S.y,S.z,S.w):O.set(S,H,J,j),Lt.viewport(_.copy(O).multiplyScalar(it).round())},this.getScissor=function(S){return S.copy(Q)},this.setScissor=function(S,H,J,j){S.isVector4?Q.set(S.x,S.y,S.z,S.w):Q.set(S,H,J,j),Lt.scissor(M.copy(Q).multiplyScalar(it).round())},this.getScissorTest=function(){return gt},this.setScissorTest=function(S){Lt.setScissorTest(gt=S)},this.setOpaqueSort=function(S){X=S},this.setTransparentSort=function(S){Y=S},this.getClearColor=function(S){return S.copy(ht.getClearColor())},this.setClearColor=function(){ht.setClearColor.apply(ht,arguments)},this.getClearAlpha=function(){return ht.getClearAlpha()},this.setClearAlpha=function(){ht.setClearAlpha.apply(ht,arguments)},this.clear=function(S=!0,H=!0,J=!0){let j=0;if(S){let V=!1;if(w!==null){let yt=w.texture.format;V=yt===Gl||yt===Vl||yt===kl}if(V){let yt=w.texture.type,Pt=yt===Gn||yt===Ei||yt===Us||yt===ts||yt===Bl||yt===zl,It=ht.getClearColor(),Dt=ht.getClearAlpha(),Vt=It.r,Gt=It.g,Ft=It.b;Pt?(p[0]=Vt,p[1]=Gt,p[2]=Ft,p[3]=Dt,P.clearBufferuiv(P.COLOR,0,p)):(g[0]=Vt,g[1]=Gt,g[2]=Ft,g[3]=Dt,P.clearBufferiv(P.COLOR,0,g))}else j|=P.COLOR_BUFFER_BIT}H&&(j|=P.DEPTH_BUFFER_BIT,P.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),J&&(j|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ut,!1),e.removeEventListener("webglcontextrestored",wt,!1),e.removeEventListener("webglcontextcreationerror",Ct,!1),U.dispose(),K.dispose(),Ut.dispose(),E.dispose(),q.dispose(),st.dispose(),Bt.dispose(),L.dispose(),Z.dispose(),nt.dispose(),nt.removeEventListener("sessionstart",Js),nt.removeEventListener("sessionend",gs),Tn.stop()};function ut(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function wt(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;let S=ee.autoReset,H=tt.enabled,J=tt.autoUpdate,j=tt.needsUpdate,V=tt.type;Mt(),ee.autoReset=S,tt.enabled=H,tt.autoUpdate=J,tt.needsUpdate=j,tt.type=V}function Ct(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Kt(S){let H=S.target;H.removeEventListener("dispose",Kt),de(H)}function de(S){Ae(S),Ut.remove(S)}function Ae(S){let H=Ut.get(S).programs;H!==void 0&&(H.forEach(function(J){Z.releaseProgram(J)}),S.isShaderMaterial&&Z.releaseShaderCache(S))}this.renderBufferDirect=function(S,H,J,j,V,yt){H===null&&(H=bt);let Pt=V.isMesh&&V.matrixWorld.determinant()<0,It=Pu(S,H,J,j,V);Lt.setMaterial(j,Pt);let Dt=J.index,Vt=1;if(j.wireframe===!0){if(Dt=mt.getWireframeAttribute(J),Dt===void 0)return;Vt=2}let Gt=J.drawRange,Ft=J.attributes.position,ce=Gt.start*Vt,pe=(Gt.start+Gt.count)*Vt;yt!==null&&(ce=Math.max(ce,yt.start*Vt),pe=Math.min(pe,(yt.start+yt.count)*Vt)),Dt!==null?(ce=Math.max(ce,0),pe=Math.min(pe,Dt.count)):Ft!=null&&(ce=Math.max(ce,0),pe=Math.min(pe,Ft.count));let xe=pe-ce;if(xe<0||xe===1/0)return;Bt.setup(V,j,It,J,Dt);let en,ae=lt;if(Dt!==null&&(en=at.get(Dt),ae=vt,ae.setIndex(en)),V.isMesh)j.wireframe===!0?(Lt.setLineWidth(j.wireframeLinewidth*Tt()),ae.setMode(P.LINES)):ae.setMode(P.TRIANGLES);else if(V.isLine){let Ot=j.linewidth;Ot===void 0&&(Ot=1),Lt.setLineWidth(Ot*Tt()),V.isLineSegments?ae.setMode(P.LINES):V.isLineLoop?ae.setMode(P.LINE_LOOP):ae.setMode(P.LINE_STRIP)}else V.isPoints?ae.setMode(P.POINTS):V.isSprite&&ae.setMode(P.TRIANGLES);if(V.isBatchedMesh)if(V._multiDrawInstances!==null)ae.renderMultiDrawInstances(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount,V._multiDrawInstances);else if(zt.get("WEBGL_multi_draw"))ae.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{let Ot=V._multiDrawStarts,Ue=V._multiDrawCounts,le=V._multiDrawCount,gn=Dt?at.get(Dt).bytesPerElement:1,Pi=Ut.get(j).currentProgram.getUniforms();for(let nn=0;nn<le;nn++)Pi.setValue(P,"_gl_DrawID",nn),ae.render(Ot[nn]/gn,Ue[nn])}else if(V.isInstancedMesh)ae.renderInstances(ce,xe,V.count);else if(J.isInstancedBufferGeometry){let Ot=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,Ue=Math.min(J.instanceCount,Ot);ae.renderInstances(ce,xe,Ue)}else ae.render(ce,xe)};function Qt(S,H,J){S.transparent===!0&&S.side===ne&&S.forceSinglePass===!1?(S.side=Ve,S.needsUpdate=!0,js(S,H,J),S.side=ri,S.needsUpdate=!0,js(S,H,J),S.side=ne):js(S,H,J)}this.compile=function(S,H,J=null){J===null&&(J=S),m=K.get(J),m.init(H),y.push(m),J.traverseVisible(function(V){V.isLight&&V.layers.test(H.layers)&&(m.pushLight(V),V.castShadow&&m.pushShadow(V))}),S!==J&&S.traverseVisible(function(V){V.isLight&&V.layers.test(H.layers)&&(m.pushLight(V),V.castShadow&&m.pushShadow(V))}),m.setupLights();let j=new Set;return S.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;let yt=V.material;if(yt)if(Array.isArray(yt))for(let Pt=0;Pt<yt.length;Pt++){let It=yt[Pt];Qt(It,J,V),j.add(It)}else Qt(yt,J,V),j.add(yt)}),y.pop(),m=null,j},this.compileAsync=function(S,H,J=null){let j=this.compile(S,H,J);return new Promise(V=>{function yt(){if(j.forEach(function(Pt){Ut.get(Pt).currentProgram.isReady()&&j.delete(Pt)}),j.size===0){V(S);return}setTimeout(yt,10)}zt.get("KHR_parallel_shader_compile")!==null?yt():setTimeout(yt,10)})};let be=null;function mn(S){be&&be(S)}function Js(){Tn.stop()}function gs(){Tn.start()}let Tn=new Nh;Tn.setAnimationLoop(mn),typeof self<"u"&&Tn.setContext(self),this.setAnimationLoop=function(S){be=S,nt.setAnimationLoop(S),S===null?Tn.stop():Tn.start()},nt.addEventListener("sessionstart",Js),nt.addEventListener("sessionend",gs),this.render=function(S,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),nt.enabled===!0&&nt.isPresenting===!0&&(nt.cameraAutoUpdate===!0&&nt.updateCamera(H),H=nt.getCamera()),S.isScene===!0&&S.onBeforeRender(v,S,H,w),m=K.get(S,y.length),m.init(H),y.push(m),ot.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),ct.setFromProjectionMatrix(ot),$=this.localClippingEnabled,z=k.init(this.clippingPlanes,$),x=U.get(S,f.length),x.init(),f.push(x),nt.enabled===!0&&nt.isPresenting===!0){let yt=v.xr.getDepthSensingMesh();yt!==null&&Ci(yt,H,-1/0,v.sortObjects)}Ci(S,H,0,v.sortObjects),x.finish(),v.sortObjects===!0&&x.sort(X,Y),Rt=nt.enabled===!1||nt.isPresenting===!1||nt.hasDepthSensing()===!1,Rt&&ht.addToRenderList(x,S),this.info.render.frame++,z===!0&&k.beginShadows();let J=m.state.shadowsArray;tt.render(J,S,H),z===!0&&k.endShadows(),this.info.autoReset===!0&&this.info.reset();let j=x.opaque,V=x.transmissive;if(m.setupLights(),H.isArrayCamera){let yt=H.cameras;if(V.length>0)for(let Pt=0,It=yt.length;Pt<It;Pt++){let Dt=yt[Pt];xs(j,V,S,Dt)}Rt&&ht.render(S);for(let Pt=0,It=yt.length;Pt<It;Pt++){let Dt=yt[Pt];_s(x,S,Dt,Dt.viewport)}}else V.length>0&&xs(j,V,S,H),Rt&&ht.render(S),_s(x,S,H);w!==null&&(A.updateMultisampleRenderTarget(w),A.updateRenderTargetMipmap(w)),S.isScene===!0&&S.onAfterRender(v,S,H),Bt.resetDefaultState(),I=-1,F=null,y.pop(),y.length>0?(m=y[y.length-1],z===!0&&k.setGlobalState(v.clippingPlanes,m.state.camera)):m=null,f.pop(),f.length>0?x=f[f.length-1]:x=null};function Ci(S,H,J,j){if(S.visible===!1)return;if(S.layers.test(H.layers)){if(S.isGroup)J=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(H);else if(S.isLight)m.pushLight(S),S.castShadow&&m.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||ct.intersectsSprite(S)){j&&pt.setFromMatrixPosition(S.matrixWorld).applyMatrix4(ot);let Pt=st.update(S),It=S.material;It.visible&&x.push(S,Pt,It,J,pt.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||ct.intersectsObject(S))){let Pt=st.update(S),It=S.material;if(j&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),pt.copy(S.boundingSphere.center)):(Pt.boundingSphere===null&&Pt.computeBoundingSphere(),pt.copy(Pt.boundingSphere.center)),pt.applyMatrix4(S.matrixWorld).applyMatrix4(ot)),Array.isArray(It)){let Dt=Pt.groups;for(let Vt=0,Gt=Dt.length;Vt<Gt;Vt++){let Ft=Dt[Vt],ce=It[Ft.materialIndex];ce&&ce.visible&&x.push(S,Pt,ce,J,pt.z,Ft)}}else It.visible&&x.push(S,Pt,It,J,pt.z,null)}}let yt=S.children;for(let Pt=0,It=yt.length;Pt<It;Pt++)Ci(yt[Pt],H,J,j)}function _s(S,H,J,j){let V=S.opaque,yt=S.transmissive,Pt=S.transparent;m.setupLightsView(J),z===!0&&k.setGlobalState(v.clippingPlanes,J),j&&Lt.viewport(_.copy(j)),V.length>0&&cn(V,H,J),yt.length>0&&cn(yt,H,J),Pt.length>0&&cn(Pt,H,J),Lt.buffers.depth.setTest(!0),Lt.buffers.depth.setMask(!0),Lt.buffers.color.setMask(!0),Lt.setPolygonOffset(!1)}function xs(S,H,J,j){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[j.id]===void 0&&(m.state.transmissionRenderTarget[j.id]=new Fe(1,1,{generateMipmaps:!0,type:zt.has("EXT_color_buffer_half_float")||zt.has("EXT_color_buffer_float")?an:Gn,minFilter:Mi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:re.workingColorSpace}));let yt=m.state.transmissionRenderTarget[j.id],Pt=j.viewport||_;yt.setSize(Pt.z,Pt.w);let It=v.getRenderTarget();v.setRenderTarget(yt),v.getClearColor(N),B=v.getClearAlpha(),B<1&&v.setClearColor(16777215,.5),v.clear(),Rt&&ht.render(J);let Dt=v.toneMapping;v.toneMapping=si;let Vt=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),m.setupLightsView(j),z===!0&&k.setGlobalState(v.clippingPlanes,j),cn(S,J,j),A.updateMultisampleRenderTarget(yt),A.updateRenderTargetMipmap(yt),zt.has("WEBGL_multisampled_render_to_texture")===!1){let Gt=!1;for(let Ft=0,ce=H.length;Ft<ce;Ft++){let pe=H[Ft],xe=pe.object,en=pe.geometry,ae=pe.material,Ot=pe.group;if(ae.side===ne&&xe.layers.test(j.layers)){let Ue=ae.side;ae.side=Ve,ae.needsUpdate=!0,sc(xe,J,j,en,ae,Ot),ae.side=Ue,ae.needsUpdate=!0,Gt=!0}}Gt===!0&&(A.updateMultisampleRenderTarget(yt),A.updateRenderTargetMipmap(yt))}v.setRenderTarget(It),v.setClearColor(N,B),Vt!==void 0&&(j.viewport=Vt),v.toneMapping=Dt}function cn(S,H,J){let j=H.isScene===!0?H.overrideMaterial:null;for(let V=0,yt=S.length;V<yt;V++){let Pt=S[V],It=Pt.object,Dt=Pt.geometry,Vt=j===null?Pt.material:j,Gt=Pt.group;It.layers.test(J.layers)&&sc(It,H,J,Dt,Vt,Gt)}}function sc(S,H,J,j,V,yt){S.onBeforeRender(v,H,J,j,V,yt),S.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),V.onBeforeRender(v,H,J,j,S,yt),V.transparent===!0&&V.side===ne&&V.forceSinglePass===!1?(V.side=Ve,V.needsUpdate=!0,v.renderBufferDirect(J,H,j,V,S,yt),V.side=ri,V.needsUpdate=!0,v.renderBufferDirect(J,H,j,V,S,yt),V.side=ne):v.renderBufferDirect(J,H,j,V,S,yt),S.onAfterRender(v,H,J,j,V,yt)}function js(S,H,J){H.isScene!==!0&&(H=bt);let j=Ut.get(S),V=m.state.lights,yt=m.state.shadowsArray,Pt=V.state.version,It=Z.getParameters(S,V.state,yt,H,J),Dt=Z.getProgramCacheKey(It),Vt=j.programs;j.environment=S.isMeshStandardMaterial?H.environment:null,j.fog=H.fog,j.envMap=(S.isMeshStandardMaterial?q:E).get(S.envMap||j.environment),j.envMapRotation=j.environment!==null&&S.envMap===null?H.environmentRotation:S.envMapRotation,Vt===void 0&&(S.addEventListener("dispose",Kt),Vt=new Map,j.programs=Vt);let Gt=Vt.get(Dt);if(Gt!==void 0){if(j.currentProgram===Gt&&j.lightsStateVersion===Pt)return oc(S,It),Gt}else It.uniforms=Z.getUniforms(S),S.onBeforeCompile(It,v),Gt=Z.acquireProgram(It,Dt),Vt.set(Dt,Gt),j.uniforms=It.uniforms;let Ft=j.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Ft.clippingPlanes=k.uniform),oc(S,It),j.needsLights=Du(S),j.lightsStateVersion=Pt,j.needsLights&&(Ft.ambientLightColor.value=V.state.ambient,Ft.lightProbe.value=V.state.probe,Ft.directionalLights.value=V.state.directional,Ft.directionalLightShadows.value=V.state.directionalShadow,Ft.spotLights.value=V.state.spot,Ft.spotLightShadows.value=V.state.spotShadow,Ft.rectAreaLights.value=V.state.rectArea,Ft.ltc_1.value=V.state.rectAreaLTC1,Ft.ltc_2.value=V.state.rectAreaLTC2,Ft.pointLights.value=V.state.point,Ft.pointLightShadows.value=V.state.pointShadow,Ft.hemisphereLights.value=V.state.hemi,Ft.directionalShadowMap.value=V.state.directionalShadowMap,Ft.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Ft.spotShadowMap.value=V.state.spotShadowMap,Ft.spotLightMatrix.value=V.state.spotLightMatrix,Ft.spotLightMap.value=V.state.spotLightMap,Ft.pointShadowMap.value=V.state.pointShadowMap,Ft.pointShadowMatrix.value=V.state.pointShadowMatrix),j.currentProgram=Gt,j.uniformsList=null,Gt}function rc(S){if(S.uniformsList===null){let H=S.currentProgram.getUniforms();S.uniformsList=$i.seqWithValue(H.seq,S.uniforms)}return S.uniformsList}function oc(S,H){let J=Ut.get(S);J.outputColorSpace=H.outputColorSpace,J.batching=H.batching,J.batchingColor=H.batchingColor,J.instancing=H.instancing,J.instancingColor=H.instancingColor,J.instancingMorph=H.instancingMorph,J.skinning=H.skinning,J.morphTargets=H.morphTargets,J.morphNormals=H.morphNormals,J.morphColors=H.morphColors,J.morphTargetsCount=H.morphTargetsCount,J.numClippingPlanes=H.numClippingPlanes,J.numIntersection=H.numClipIntersection,J.vertexAlphas=H.vertexAlphas,J.vertexTangents=H.vertexTangents,J.toneMapping=H.toneMapping}function Pu(S,H,J,j,V){H.isScene!==!0&&(H=bt),A.resetTextureUnits();let yt=H.fog,Pt=j.isMeshStandardMaterial?H.environment:null,It=w===null?v.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:ai,Dt=(j.isMeshStandardMaterial?q:E).get(j.envMap||Pt),Vt=j.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,Gt=!!J.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),Ft=!!J.morphAttributes.position,ce=!!J.morphAttributes.normal,pe=!!J.morphAttributes.color,xe=si;j.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(xe=v.toneMapping);let en=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,ae=en!==void 0?en.length:0,Ot=Ut.get(j),Ue=m.state.lights;if(z===!0&&($===!0||S!==F)){let hn=S===F&&j.id===I;k.setState(j,S,hn)}let le=!1;j.version===Ot.__version?(Ot.needsLights&&Ot.lightsStateVersion!==Ue.state.version||Ot.outputColorSpace!==It||V.isBatchedMesh&&Ot.batching===!1||!V.isBatchedMesh&&Ot.batching===!0||V.isBatchedMesh&&Ot.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&Ot.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&Ot.instancing===!1||!V.isInstancedMesh&&Ot.instancing===!0||V.isSkinnedMesh&&Ot.skinning===!1||!V.isSkinnedMesh&&Ot.skinning===!0||V.isInstancedMesh&&Ot.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Ot.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Ot.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Ot.instancingMorph===!1&&V.morphTexture!==null||Ot.envMap!==Dt||j.fog===!0&&Ot.fog!==yt||Ot.numClippingPlanes!==void 0&&(Ot.numClippingPlanes!==k.numPlanes||Ot.numIntersection!==k.numIntersection)||Ot.vertexAlphas!==Vt||Ot.vertexTangents!==Gt||Ot.morphTargets!==Ft||Ot.morphNormals!==ce||Ot.morphColors!==pe||Ot.toneMapping!==xe||Ot.morphTargetsCount!==ae)&&(le=!0):(le=!0,Ot.__version=j.version);let gn=Ot.currentProgram;le===!0&&(gn=js(j,H,V));let Pi=!1,nn=!1,So=!1,Ee=gn.getUniforms(),Jn=Ot.uniforms;if(Lt.useProgram(gn.program)&&(Pi=!0,nn=!0,So=!0),j.id!==I&&(I=j.id,nn=!0),Pi||F!==S){Xt.reverseDepthBuffer?(ft.copy(S.projectionMatrix),Lf(ft),Uf(ft),Ee.setValue(P,"projectionMatrix",ft)):Ee.setValue(P,"projectionMatrix",S.projectionMatrix),Ee.setValue(P,"viewMatrix",S.matrixWorldInverse);let hn=Ee.map.cameraPosition;hn!==void 0&&hn.setValue(P,Et.setFromMatrixPosition(S.matrixWorld)),Xt.logarithmicDepthBuffer&&Ee.setValue(P,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&Ee.setValue(P,"isOrthographic",S.isOrthographicCamera===!0),F!==S&&(F=S,nn=!0,So=!0)}if(V.isSkinnedMesh){Ee.setOptional(P,V,"bindMatrix"),Ee.setOptional(P,V,"bindMatrixInverse");let hn=V.skeleton;hn&&(hn.boneTexture===null&&hn.computeBoneTexture(),Ee.setValue(P,"boneTexture",hn.boneTexture,A))}V.isBatchedMesh&&(Ee.setOptional(P,V,"batchingTexture"),Ee.setValue(P,"batchingTexture",V._matricesTexture,A),Ee.setOptional(P,V,"batchingIdTexture"),Ee.setValue(P,"batchingIdTexture",V._indirectTexture,A),Ee.setOptional(P,V,"batchingColorTexture"),V._colorsTexture!==null&&Ee.setValue(P,"batchingColorTexture",V._colorsTexture,A));let wo=J.morphAttributes;if((wo.position!==void 0||wo.normal!==void 0||wo.color!==void 0)&&dt.update(V,J,gn),(nn||Ot.receiveShadow!==V.receiveShadow)&&(Ot.receiveShadow=V.receiveShadow,Ee.setValue(P,"receiveShadow",V.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(Jn.envMap.value=Dt,Jn.flipEnvMap.value=Dt.isCubeTexture&&Dt.isRenderTargetTexture===!1?-1:1),j.isMeshStandardMaterial&&j.envMap===null&&H.environment!==null&&(Jn.envMapIntensity.value=H.environmentIntensity),nn&&(Ee.setValue(P,"toneMappingExposure",v.toneMappingExposure),Ot.needsLights&&Iu(Jn,So),yt&&j.fog===!0&&rt.refreshFogUniforms(Jn,yt),rt.refreshMaterialUniforms(Jn,j,it,W,m.state.transmissionRenderTarget[S.id]),$i.upload(P,rc(Ot),Jn,A)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&($i.upload(P,rc(Ot),Jn,A),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&Ee.setValue(P,"center",V.center),Ee.setValue(P,"modelViewMatrix",V.modelViewMatrix),Ee.setValue(P,"normalMatrix",V.normalMatrix),Ee.setValue(P,"modelMatrix",V.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){let hn=j.uniformsGroups;for(let To=0,Lu=hn.length;To<Lu;To++){let ac=hn[To];L.update(ac,gn),L.bind(ac,gn)}}return gn}function Iu(S,H){S.ambientLightColor.needsUpdate=H,S.lightProbe.needsUpdate=H,S.directionalLights.needsUpdate=H,S.directionalLightShadows.needsUpdate=H,S.pointLights.needsUpdate=H,S.pointLightShadows.needsUpdate=H,S.spotLights.needsUpdate=H,S.spotLightShadows.needsUpdate=H,S.rectAreaLights.needsUpdate=H,S.hemisphereLights.needsUpdate=H}function Du(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(S,H,J){Ut.get(S.texture).__webglTexture=H,Ut.get(S.depthTexture).__webglTexture=J;let j=Ut.get(S);j.__hasExternalTextures=!0,j.__autoAllocateDepthBuffer=J===void 0,j.__autoAllocateDepthBuffer||zt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),j.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(S,H){let J=Ut.get(S);J.__webglFramebuffer=H,J.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(S,H=0,J=0){w=S,D=H,T=J;let j=!0,V=null,yt=!1,Pt=!1;if(S){let Dt=Ut.get(S);if(Dt.__useDefaultFramebuffer!==void 0)Lt.bindFramebuffer(P.FRAMEBUFFER,null),j=!1;else if(Dt.__webglFramebuffer===void 0)A.setupRenderTarget(S);else if(Dt.__hasExternalTextures)A.rebindTextures(S,Ut.get(S.texture).__webglTexture,Ut.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){let Ft=S.depthTexture;if(Dt.__boundDepthTexture!==Ft){if(Ft!==null&&Ut.has(Ft)&&(S.width!==Ft.image.width||S.height!==Ft.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(S)}}let Vt=S.texture;(Vt.isData3DTexture||Vt.isDataArrayTexture||Vt.isCompressedArrayTexture)&&(Pt=!0);let Gt=Ut.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Gt[H])?V=Gt[H][J]:V=Gt[H],yt=!0):S.samples>0&&A.useMultisampledRTT(S)===!1?V=Ut.get(S).__webglMultisampledFramebuffer:Array.isArray(Gt)?V=Gt[J]:V=Gt,_.copy(S.viewport),M.copy(S.scissor),C=S.scissorTest}else _.copy(O).multiplyScalar(it).floor(),M.copy(Q).multiplyScalar(it).floor(),C=gt;if(Lt.bindFramebuffer(P.FRAMEBUFFER,V)&&j&&Lt.drawBuffers(S,V),Lt.viewport(_),Lt.scissor(M),Lt.setScissorTest(C),yt){let Dt=Ut.get(S.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+H,Dt.__webglTexture,J)}else if(Pt){let Dt=Ut.get(S.texture),Vt=H||0;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,Dt.__webglTexture,J||0,Vt)}I=-1},this.readRenderTargetPixels=function(S,H,J,j,V,yt,Pt){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let It=Ut.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Pt!==void 0&&(It=It[Pt]),It){Lt.bindFramebuffer(P.FRAMEBUFFER,It);try{let Dt=S.texture,Vt=Dt.format,Gt=Dt.type;if(!Xt.textureFormatReadable(Vt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Xt.textureTypeReadable(Gt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=S.width-j&&J>=0&&J<=S.height-V&&P.readPixels(H,J,j,V,St.convert(Vt),St.convert(Gt),yt)}finally{let Dt=w!==null?Ut.get(w).__webglFramebuffer:null;Lt.bindFramebuffer(P.FRAMEBUFFER,Dt)}}},this.readRenderTargetPixelsAsync=async function(S,H,J,j,V,yt,Pt){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let It=Ut.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Pt!==void 0&&(It=It[Pt]),It){let Dt=S.texture,Vt=Dt.format,Gt=Dt.type;if(!Xt.textureFormatReadable(Vt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Xt.textureTypeReadable(Gt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(H>=0&&H<=S.width-j&&J>=0&&J<=S.height-V){Lt.bindFramebuffer(P.FRAMEBUFFER,It);let Ft=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,Ft),P.bufferData(P.PIXEL_PACK_BUFFER,yt.byteLength,P.STREAM_READ),P.readPixels(H,J,j,V,St.convert(Vt),St.convert(Gt),0);let ce=w!==null?Ut.get(w).__webglFramebuffer:null;Lt.bindFramebuffer(P.FRAMEBUFFER,ce);let pe=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await Df(P,pe,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,Ft),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,yt),P.deleteBuffer(Ft),P.deleteSync(pe),yt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(S,H=null,J=0){S.isTexture!==!0&&(Dr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),H=arguments[0]||null,S=arguments[1]);let j=Math.pow(2,-J),V=Math.floor(S.image.width*j),yt=Math.floor(S.image.height*j),Pt=H!==null?H.x:0,It=H!==null?H.y:0;A.setTexture2D(S,0),P.copyTexSubImage2D(P.TEXTURE_2D,J,0,0,Pt,It,V,yt),Lt.unbindTexture()},this.copyTextureToTexture=function(S,H,J=null,j=null,V=0){S.isTexture!==!0&&(Dr("WebGLRenderer: copyTextureToTexture function signature has changed."),j=arguments[0]||null,S=arguments[1],H=arguments[2],V=arguments[3]||0,J=null);let yt,Pt,It,Dt,Vt,Gt;J!==null?(yt=J.max.x-J.min.x,Pt=J.max.y-J.min.y,It=J.min.x,Dt=J.min.y):(yt=S.image.width,Pt=S.image.height,It=0,Dt=0),j!==null?(Vt=j.x,Gt=j.y):(Vt=0,Gt=0);let Ft=St.convert(H.format),ce=St.convert(H.type);A.setTexture2D(H,0),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,H.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,H.unpackAlignment);let pe=P.getParameter(P.UNPACK_ROW_LENGTH),xe=P.getParameter(P.UNPACK_IMAGE_HEIGHT),en=P.getParameter(P.UNPACK_SKIP_PIXELS),ae=P.getParameter(P.UNPACK_SKIP_ROWS),Ot=P.getParameter(P.UNPACK_SKIP_IMAGES),Ue=S.isCompressedTexture?S.mipmaps[V]:S.image;P.pixelStorei(P.UNPACK_ROW_LENGTH,Ue.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Ue.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,It),P.pixelStorei(P.UNPACK_SKIP_ROWS,Dt),S.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,V,Vt,Gt,yt,Pt,Ft,ce,Ue.data):S.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,V,Vt,Gt,Ue.width,Ue.height,Ft,Ue.data):P.texSubImage2D(P.TEXTURE_2D,V,Vt,Gt,yt,Pt,Ft,ce,Ue),P.pixelStorei(P.UNPACK_ROW_LENGTH,pe),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,xe),P.pixelStorei(P.UNPACK_SKIP_PIXELS,en),P.pixelStorei(P.UNPACK_SKIP_ROWS,ae),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Ot),V===0&&H.generateMipmaps&&P.generateMipmap(P.TEXTURE_2D),Lt.unbindTexture()},this.copyTextureToTexture3D=function(S,H,J=null,j=null,V=0){S.isTexture!==!0&&(Dr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),J=arguments[0]||null,j=arguments[1]||null,S=arguments[2],H=arguments[3],V=arguments[4]||0);let yt,Pt,It,Dt,Vt,Gt,Ft,ce,pe,xe=S.isCompressedTexture?S.mipmaps[V]:S.image;J!==null?(yt=J.max.x-J.min.x,Pt=J.max.y-J.min.y,It=J.max.z-J.min.z,Dt=J.min.x,Vt=J.min.y,Gt=J.min.z):(yt=xe.width,Pt=xe.height,It=xe.depth,Dt=0,Vt=0,Gt=0),j!==null?(Ft=j.x,ce=j.y,pe=j.z):(Ft=0,ce=0,pe=0);let en=St.convert(H.format),ae=St.convert(H.type),Ot;if(H.isData3DTexture)A.setTexture3D(H,0),Ot=P.TEXTURE_3D;else if(H.isDataArrayTexture||H.isCompressedArrayTexture)A.setTexture2DArray(H,0),Ot=P.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,H.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,H.unpackAlignment);let Ue=P.getParameter(P.UNPACK_ROW_LENGTH),le=P.getParameter(P.UNPACK_IMAGE_HEIGHT),gn=P.getParameter(P.UNPACK_SKIP_PIXELS),Pi=P.getParameter(P.UNPACK_SKIP_ROWS),nn=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,xe.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,xe.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Dt),P.pixelStorei(P.UNPACK_SKIP_ROWS,Vt),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Gt),S.isDataTexture||S.isData3DTexture?P.texSubImage3D(Ot,V,Ft,ce,pe,yt,Pt,It,en,ae,xe.data):H.isCompressedArrayTexture?P.compressedTexSubImage3D(Ot,V,Ft,ce,pe,yt,Pt,It,en,xe.data):P.texSubImage3D(Ot,V,Ft,ce,pe,yt,Pt,It,en,ae,xe),P.pixelStorei(P.UNPACK_ROW_LENGTH,Ue),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,le),P.pixelStorei(P.UNPACK_SKIP_PIXELS,gn),P.pixelStorei(P.UNPACK_SKIP_ROWS,Pi),P.pixelStorei(P.UNPACK_SKIP_IMAGES,nn),V===0&&H.generateMipmaps&&P.generateMipmap(Ot),Lt.unbindTexture()},this.initRenderTarget=function(S){Ut.get(S).__webglFramebuffer===void 0&&A.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?A.setTextureCube(S,0):S.isData3DTexture?A.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?A.setTexture2DArray(S,0):A.setTexture2D(S,0),Lt.unbindTexture()},this.resetState=function(){D=0,T=0,w=null,Lt.reset(),Bt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=t===Wl?"display-p3":"srgb",e.unpackColorSpace=re.workingColorSpace===lo?"display-p3":"srgb"}};var qr=class extends Oe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Le,this.environmentIntensity=1,this.environmentRotation=new Le,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var ll=class extends Je{constructor(t=null,e=1,n=1,s,r,o,a,l,c=$e,h=$e,d,u){super(null,o,a,l,c,h,s,r,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Zn=class extends jt{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Xi=new Yt,sh=new Yt,yr=[],rh=new Xn,Rg=new Yt,Ss=new Ht,ws=new Yn,on=class extends Ht{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Zn(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Rg)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Xn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Xi),rh.copy(t.boundingBox).applyMatrix4(Xi),this.boundingBox.union(rh)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Yn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Xi),ws.copy(t.boundingSphere).applyMatrix4(Xi),this.boundingSphere.union(ws)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(Ss.geometry=this.geometry,Ss.material=this.material,Ss.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ws.copy(this.boundingSphere),ws.applyMatrix4(n),t.ray.intersectsSphere(ws)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Xi),sh.multiplyMatrices(n,Xi),Ss.matrixWorld=sh,Ss.raycast(t,yr);for(let o=0,a=yr.length;o<a;o++){let l=yr[o];l.instanceId=r,l.object=this,e.push(l)}yr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Zn(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new ll(new Float32Array(s*this.count),s,this.count,Hl,Cn));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var ss=class extends qn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new G(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Zr=new R,Kr=new R,oh=new Yt,Ts=new oi,Mr=new Yn,na=new R,ah=new R,Bs=class extends Oe{constructor(t=new Zt,e=new ss){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Zr.fromBufferAttribute(e,s-1),Kr.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Zr.distanceTo(Kr);t.setAttribute("lineDistance",new Nt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Mr.copy(n.boundingSphere),Mr.applyMatrix4(s),Mr.radius+=r,t.ray.intersectsSphere(Mr)===!1)return;oh.copy(s).invert(),Ts.copy(t.ray).applyMatrix4(oh);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){let p=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let x=p,m=g-1;x<m;x+=c){let f=h.getX(x),y=h.getX(x+1),v=Er(this,t,Ts,l,f,y);v&&e.push(v)}if(this.isLineLoop){let x=h.getX(g-1),m=h.getX(p),f=Er(this,t,Ts,l,x,m);f&&e.push(f)}}else{let p=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let x=p,m=g-1;x<m;x+=c){let f=Er(this,t,Ts,l,x,x+1);f&&e.push(f)}if(this.isLineLoop){let x=Er(this,t,Ts,l,g-1,p);x&&e.push(x)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Er(i,t,e,n,s,r){let o=i.geometry.attributes.position;if(Zr.fromBufferAttribute(o,s),Kr.fromBufferAttribute(o,r),e.distanceSqToSegment(Zr,Kr,na,ah)>n)return;na.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(na);if(!(l<t.near||l>t.far))return{distance:l,point:ah.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}var zs=class extends qn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new G(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},lh=new Yt,cl=new oi,br=new Yn,Sr=new R,Dn=class extends Oe{constructor(t=new Zt,e=new zs){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),br.copy(n.boundingSphere),br.applyMatrix4(s),br.radius+=r,t.ray.intersectsSphere(br)===!1)return;lh.copy(s).invert(),cl.copy(t.ray).applyMatrix4(lh);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,d=n.attributes.position;if(c!==null){let u=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let g=u,x=p;g<x;g++){let m=c.getX(g);Sr.fromBufferAttribute(d,m),ch(Sr,m,l,s,t,e,this)}}else{let u=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let g=u,x=p;g<x;g++)Sr.fromBufferAttribute(d,g),ch(Sr,g,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function ch(i,t,e,n,s,r,o){let a=cl.distanceSqToPoint(i);if(a<e){let l=new R;cl.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var bi=class extends Je{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},fn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let h=n[s],u=n[s+1]-h,p=(o-h)/u;return(s+p)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new _t:new R);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new R,s=[],r=[],o=[],a=new R,l=new Yt;for(let p=0;p<=t;p++){let g=p/t;s[p]=this.getTangentAt(g,new R)}r[0]=new R,o[0]=new R;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),u<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let p=1;p<=t;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(s[p-1],s[p]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(we(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(a,g))}o[p].crossVectors(s[p],r[p])}if(e===!0){let p=Math.acos(we(r[0].dot(r[t]),-1,1));p/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(p=-p);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],p*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Hs=class extends fn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new _t){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,p=c-this.aY;l=u*h-p*d+this.aX,c=u*d+p*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},hl=class extends Hs{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function ql(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,d){let u=(o-r)/c-(a-r)/(c+h)+(a-o)/h,p=(a-o)/h-(l-o)/(h+d)+(l-a)/d;u*=h,p*=h,s(o,a,u,p)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var wr=new R,ia=new ql,sa=new ql,ra=new ql,ks=class extends fn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new R){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(wr.subVectors(s[0],s[1]).add(s[0]),c=wr);let d=s[a%r],u=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(wr.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=wr),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(d),p),x=Math.pow(d.distanceToSquared(u),p),m=Math.pow(u.distanceToSquared(h),p);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),ia.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,g,x,m),sa.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,g,x,m),ra.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,g,x,m)}else this.curveType==="catmullrom"&&(ia.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),sa.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),ra.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return n.set(ia.calc(l),sa.calc(l),ra.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new R().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function hh(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function Cg(i,t){let e=1-i;return e*e*t}function Pg(i,t){return 2*(1-i)*i*t}function Ig(i,t){return i*i*t}function Is(i,t,e,n){return Cg(i,t)+Pg(i,e)+Ig(i,n)}function Dg(i,t){let e=1-i;return e*e*e*t}function Lg(i,t){let e=1-i;return 3*e*e*i*t}function Ug(i,t){return 3*(1-i)*i*i*t}function Ng(i,t){return i*i*i*t}function Ds(i,t,e,n,s){return Dg(i,t)+Lg(i,e)+Ug(i,n)+Ng(i,s)}var $r=class extends fn{constructor(t=new _t,e=new _t,n=new _t,s=new _t){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new _t){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Ds(t,s.x,r.x,o.x,a.x),Ds(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},ul=class extends fn{constructor(t=new R,e=new R,n=new R,s=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new R){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Ds(t,s.x,r.x,o.x,a.x),Ds(t,s.y,r.y,o.y,a.y),Ds(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Jr=class extends fn{constructor(t=new _t,e=new _t){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new _t){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new _t){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},fl=class extends fn{constructor(t=new R,e=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new R){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new R){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},jr=class extends fn{constructor(t=new _t,e=new _t,n=new _t){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new _t){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Is(t,s.x,r.x,o.x),Is(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},dl=class extends fn{constructor(t=new R,e=new R,n=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new R){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Is(t,s.x,r.x,o.x),Is(t,s.y,r.y,o.y),Is(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Qr=class extends fn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new _t){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return n.set(hh(a,l.x,c.x,h.x,d.x),hh(a,l.y,c.y,h.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new _t().fromArray(s))}return this}},uh=Object.freeze({__proto__:null,ArcCurve:hl,CatmullRomCurve3:ks,CubicBezierCurve:$r,CubicBezierCurve3:ul,EllipseCurve:Hs,LineCurve:Jr,LineCurve3:fl,QuadraticBezierCurve:jr,QuadraticBezierCurve3:dl,SplineCurve:Qr}),pl=class extends fn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new uh[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new uh[s.type]().fromJSON(s))}return this}},ml=class extends pl{constructor(t){super(),this.type="Path",this.currentPoint=new _t,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Jr(this.currentPoint.clone(),new _t(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new jr(this.currentPoint.clone(),new _t(t,e),new _t(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){let a=new $r(this.currentPoint.clone(),new _t(t,e),new _t(n,s),new _t(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Qr(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,o,a,l),this}absellipse(t,e,n,s,r,o,a,l){let c=new Hs(t,e,n,s,r,o,a,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},gl=class i extends Zt{constructor(t=[new _t(0,-.5),new _t(.5,0),new _t(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=we(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/e,d=new R,u=new _t,p=new R,g=new R,x=new R,m=0,f=0;for(let y=0;y<=t.length-1;y++)switch(y){case 0:m=t[y+1].x-t[y].x,f=t[y+1].y-t[y].y,p.x=f*1,p.y=-m,p.z=f*0,x.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case t.length-1:l.push(x.x,x.y,x.z);break;default:m=t[y+1].x-t[y].x,f=t[y+1].y-t[y].y,p.x=f*1,p.y=-m,p.z=f*0,g.copy(p),p.x+=x.x,p.y+=x.y,p.z+=x.z,p.normalize(),l.push(p.x,p.y,p.z),x.copy(g)}for(let y=0;y<=e;y++){let v=n+y*h*s,b=Math.sin(v),D=Math.cos(v);for(let T=0;T<=t.length-1;T++){d.x=t[T].x*b,d.y=t[T].y,d.z=t[T].x*D,o.push(d.x,d.y,d.z),u.x=y/e,u.y=T/(t.length-1),a.push(u.x,u.y);let w=l[3*T+0]*b,I=l[3*T+1],F=l[3*T+0]*D;c.push(w,I,F)}}for(let y=0;y<e;y++)for(let v=0;v<t.length-1;v++){let b=v+y*t.length,D=b,T=b+t.length,w=b+t.length+1,I=b+1;r.push(D,T,I),r.push(w,I,T)}this.setIndex(r),this.setAttribute("position",new Nt(o,3)),this.setAttribute("uv",new Nt(a,2)),this.setAttribute("normal",new Nt(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}},to=class i extends gl{constructor(t=1,e=1,n=4,s=8){let r=new ml;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new i(t.radius,t.length,t.capSegments,t.radialSegments)}};var qt=class i extends Zt{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],u=[],p=[],g=0,x=[],m=n/2,f=0;y(),o===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new Nt(d,3)),this.setAttribute("normal",new Nt(u,3)),this.setAttribute("uv",new Nt(p,2));function y(){let b=new R,D=new R,T=0,w=(e-t)/n;for(let I=0;I<=r;I++){let F=[],_=I/r,M=_*(e-t)+t;for(let C=0;C<=s;C++){let N=C/s,B=N*l+a,et=Math.sin(B),W=Math.cos(B);D.x=M*et,D.y=-_*n+m,D.z=M*W,d.push(D.x,D.y,D.z),b.set(et,w,W).normalize(),u.push(b.x,b.y,b.z),p.push(N,1-_),F.push(g++)}x.push(F)}for(let I=0;I<s;I++)for(let F=0;F<r;F++){let _=x[F][I],M=x[F+1][I],C=x[F+1][I+1],N=x[F][I+1];t>0&&(h.push(_,M,N),T+=3),e>0&&(h.push(M,C,N),T+=3)}c.addGroup(f,T,0),f+=T}function v(b){let D=g,T=new _t,w=new R,I=0,F=b===!0?t:e,_=b===!0?1:-1;for(let C=1;C<=s;C++)d.push(0,m*_,0),u.push(0,_,0),p.push(.5,.5),g++;let M=g;for(let C=0;C<=s;C++){let B=C/s*l+a,et=Math.cos(B),W=Math.sin(B);w.x=F*W,w.y=m*_,w.z=F*et,d.push(w.x,w.y,w.z),u.push(0,_,0),T.x=et*.5+.5,T.y=W*.5*_+.5,p.push(T.x,T.y),g++}for(let C=0;C<s;C++){let N=D+C,B=M+C;b===!0?h.push(B,B+1,N):h.push(B+1,B,N),I+=3}c.addGroup(f,I,b===!0?1:2),f+=I}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},fe=class i extends qt{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},_l=class i extends Zt{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],o=[];a(s),c(n),h(),this.setAttribute("position",new Nt(r,3)),this.setAttribute("normal",new Nt(r.slice(),3)),this.setAttribute("uv",new Nt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(y){let v=new R,b=new R,D=new R;for(let T=0;T<e.length;T+=3)p(e[T+0],v),p(e[T+1],b),p(e[T+2],D),l(v,b,D,y)}function l(y,v,b,D){let T=D+1,w=[];for(let I=0;I<=T;I++){w[I]=[];let F=y.clone().lerp(b,I/T),_=v.clone().lerp(b,I/T),M=T-I;for(let C=0;C<=M;C++)C===0&&I===T?w[I][C]=F:w[I][C]=F.clone().lerp(_,C/M)}for(let I=0;I<T;I++)for(let F=0;F<2*(T-I)-1;F++){let _=Math.floor(F/2);F%2===0?(u(w[I][_+1]),u(w[I+1][_]),u(w[I][_])):(u(w[I][_+1]),u(w[I+1][_+1]),u(w[I+1][_]))}}function c(y){let v=new R;for(let b=0;b<r.length;b+=3)v.x=r[b+0],v.y=r[b+1],v.z=r[b+2],v.normalize().multiplyScalar(y),r[b+0]=v.x,r[b+1]=v.y,r[b+2]=v.z}function h(){let y=new R;for(let v=0;v<r.length;v+=3){y.x=r[v+0],y.y=r[v+1],y.z=r[v+2];let b=m(y)/2/Math.PI+.5,D=f(y)/Math.PI+.5;o.push(b,1-D)}g(),d()}function d(){for(let y=0;y<o.length;y+=6){let v=o[y+0],b=o[y+2],D=o[y+4],T=Math.max(v,b,D),w=Math.min(v,b,D);T>.9&&w<.1&&(v<.2&&(o[y+0]+=1),b<.2&&(o[y+2]+=1),D<.2&&(o[y+4]+=1))}}function u(y){r.push(y.x,y.y,y.z)}function p(y,v){let b=y*3;v.x=t[b+0],v.y=t[b+1],v.z=t[b+2]}function g(){let y=new R,v=new R,b=new R,D=new R,T=new _t,w=new _t,I=new _t;for(let F=0,_=0;F<r.length;F+=9,_+=6){y.set(r[F+0],r[F+1],r[F+2]),v.set(r[F+3],r[F+4],r[F+5]),b.set(r[F+6],r[F+7],r[F+8]),T.set(o[_+0],o[_+1]),w.set(o[_+2],o[_+3]),I.set(o[_+4],o[_+5]),D.copy(y).add(v).add(b).divideScalar(3);let M=m(D);x(T,_+0,y,M),x(w,_+2,v,M),x(I,_+4,b,M)}}function x(y,v,b,D){D<0&&y.x===1&&(o[v]=y.x-1),b.x===0&&b.z===0&&(o[v]=D/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function f(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.details)}};var Ln=class i extends _l{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var eo=class i extends Zt{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],l=[],c=[],h=[],d=t,u=(e-t)/s,p=new R,g=new _t;for(let x=0;x<=s;x++){for(let m=0;m<=n;m++){let f=r+m/n*o;p.x=d*Math.cos(f),p.y=d*Math.sin(f),l.push(p.x,p.y,p.z),c.push(0,0,1),g.x=(p.x/e+1)/2,g.y=(p.y/e+1)/2,h.push(g.x,g.y)}d+=u}for(let x=0;x<s;x++){let m=x*(n+1);for(let f=0;f<n;f++){let y=f+m,v=y,b=y+n+1,D=y+n+2,T=y+1;a.push(v,b,T),a.push(b,D,T)}}this.setIndex(a),this.setAttribute("position",new Nt(l,3)),this.setAttribute("normal",new Nt(c,3)),this.setAttribute("uv",new Nt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var se=class i extends Zt{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],d=new R,u=new R,p=[],g=[],x=[],m=[];for(let f=0;f<=n;f++){let y=[],v=f/n,b=0;f===0&&o===0?b=.5/e:f===n&&l===Math.PI&&(b=-.5/e);for(let D=0;D<=e;D++){let T=D/e;d.x=-t*Math.cos(s+T*r)*Math.sin(o+v*a),d.y=t*Math.cos(o+v*a),d.z=t*Math.sin(s+T*r)*Math.sin(o+v*a),g.push(d.x,d.y,d.z),u.copy(d).normalize(),x.push(u.x,u.y,u.z),m.push(T+b,1-v),y.push(c++)}h.push(y)}for(let f=0;f<n;f++)for(let y=0;y<e;y++){let v=h[f][y+1],b=h[f][y],D=h[f+1][y],T=h[f+1][y+1];(f!==0||o>0)&&p.push(v,b,T),(f!==n-1||l<Math.PI)&&p.push(b,D,T)}this.setIndex(p),this.setAttribute("position",new Nt(g,3)),this.setAttribute("normal",new Nt(x,3)),this.setAttribute("uv",new Nt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var no=class extends ie{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},_e=class extends qn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new G(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new G(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ch,this.normalScale=new _t(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Le,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Vs=class extends _e{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new _t(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return we(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new G(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new G(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new G(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};function Tr(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Fg(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var rs=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},xl=class extends rs{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:uc,endingEnd:uc}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case fc:r=t,a=2*e-n;break;case dc:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case fc:o=t,l=2*n-e;break;case dc:o=1,l=n+s[1]-s[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,p=this._weightNext,g=(n-e)/(s-e),x=g*g,m=x*g,f=-u*m+2*u*x-u*g,y=(1+u)*m+(-1.5-2*u)*x+(-.5+u)*g+1,v=(-1-p)*m+(1.5+p)*x+.5*g,b=p*m-p*x;for(let D=0;D!==a;++D)r[D]=f*o[h+D]+y*o[c+D]+v*o[l+D]+b*o[d+D];return r}},vl=class extends rs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(s-e),d=1-h;for(let u=0;u!==a;++u)r[u]=o[c+u]*d+o[l+u]*h;return r}},yl=class extends rs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},bn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Tr(e,this.TimeBufferType),this.values=Tr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Tr(t.times,Array),values:Tr(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new yl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new vl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new xl(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Lr:e=this.InterpolantFactoryMethodDiscrete;break;case Xa:e=this.InterpolantFactoryMethodLinear;break;case Ro:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Lr;case this.InterpolantFactoryMethodLinear:return Xa;case this.InterpolantFactoryMethodSmooth:return Ro}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&Fg(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Ro,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{let d=a*n,u=d-n,p=d+n;for(let g=0;g!==n;++g){let x=e[d+g];if(x!==e[u+g]||x!==e[p+g]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let d=a*n,u=o*n;for(let p=0;p!==n;++p)e[u+p]=e[d+p]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};bn.prototype.TimeBufferType=Float32Array;bn.prototype.ValueBufferType=Float32Array;bn.prototype.DefaultInterpolation=Xa;var Si=class extends bn{constructor(t,e,n){super(t,e,n)}};Si.prototype.ValueTypeName="bool";Si.prototype.ValueBufferType=Array;Si.prototype.DefaultInterpolation=Lr;Si.prototype.InterpolantFactoryMethodLinear=void 0;Si.prototype.InterpolantFactoryMethodSmooth=void 0;var Ml=class extends bn{};Ml.prototype.ValueTypeName="color";var El=class extends bn{};El.prototype.ValueTypeName="number";var bl=class extends rs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(s-e),c=t*a;for(let h=c+a;c!==h;c+=4)Re.slerpFlat(r,0,o,c-a,o,c,l);return r}},io=class extends bn{InterpolantFactoryMethodLinear(t){return new bl(this.times,this.values,this.getValueSize(),t)}};io.prototype.ValueTypeName="quaternion";io.prototype.InterpolantFactoryMethodSmooth=void 0;var wi=class extends bn{constructor(t,e,n){super(t,e,n)}};wi.prototype.ValueTypeName="string";wi.prototype.ValueBufferType=Array;wi.prototype.DefaultInterpolation=Lr;wi.prototype.InterpolantFactoryMethodLinear=void 0;wi.prototype.InterpolantFactoryMethodSmooth=void 0;var Sl=class extends bn{};Sl.prototype.ValueTypeName="vector";var wl=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let p=c[d],g=c[d+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null}}},Og=new wl,Tl=class{constructor(t){this.manager=t!==void 0?t:Og,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Tl.DEFAULT_MATERIAL_NAME="__DEFAULT";var Gs=class extends Oe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new G(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},so=class extends Gs{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Oe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new G(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},oa=new Yt,fh=new R,dh=new R,Al=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new _t(512,512),this.map=null,this.mapPass=null,this.matrix=new Yt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Os,this._frameExtents=new _t(1,1),this._viewportCount=1,this._viewports=[new ve(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;fh.setFromMatrixPosition(t.matrixWorld),e.position.copy(fh),dh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(dh),e.updateMatrixWorld(),oa.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(oa),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(oa)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var Rl=class extends Al{constructor(){super(new In(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},os=class extends Gs{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Oe.DEFAULT_UP),this.updateMatrix(),this.target=new Oe,this.shadow=new Rl}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},ro=class extends Gs{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var as=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=ph(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=ph();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function ph(){return performance.now()}var Zl="\\[\\]\\.:\\/",Bg=new RegExp("["+Zl+"]","g"),Kl="[^"+Zl+"]",zg="[^"+Zl.replace("\\.","")+"]",Hg=/((?:WC+[\/:])*)/.source.replace("WC",Kl),kg=/(WCOD+)?/.source.replace("WCOD",zg),Vg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Kl),Gg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Kl),Wg=new RegExp("^"+Hg+kg+Vg+Gg+"$"),Xg=["material","materials","bones","map"],Cl=class{constructor(t,e,n){let s=n||me.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},me=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Bg,"")}static parseTrackName(t){let e=Wg.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Xg.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};me.Composite=Cl;me.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};me.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};me.prototype.GetterByBindingType=[me.prototype._getValue_direct,me.prototype._getValue_array,me.prototype._getValue_arrayElement,me.prototype._getValue_toArray];me.prototype.SetterByBindingTypeAndVersioning=[[me.prototype._setValue_direct,me.prototype._setValue_direct_setNeedsUpdate,me.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[me.prototype._setValue_array,me.prototype._setValue_array_setNeedsUpdate,me.prototype._setValue_array_setMatrixWorldNeedsUpdate],[me.prototype._setValue_arrayElement,me.prototype._setValue_arrayElement_setNeedsUpdate,me.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[me.prototype._setValue_fromArray,me.prototype._setValue_fromArray_setNeedsUpdate,me.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var dx=new Float32Array(1);var mh=new Yt,ls=class{constructor(t,e,n=0,s=1/0){this.ray=new oi(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Fs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return mh.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(mh),this}intersectObject(t,e=!0,n=[]){return Pl(t,this,n,e),n.sort(gh),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Pl(t[s],this,n,e);return n.sort(gh),n}};function gh(i,t){return i.distance-t.distance}function Pl(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)Pl(r[o],t,e,!0)}}var Ws=class{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(we(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var oo=class extends Wn{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"169"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="169");function Hh({scene:i,camera:t,renderer:e,controls:n,island:s}){let r=s.lake,o=new oe;o.name="qingchi-fishing",i.add(o);let a=(Y,O={})=>new _e({color:Y,roughness:.6,...O}),l={lotus:[r.x+.18,r.z+.38],falls:[r.x-.46,r.z-.25],moon:[r.x+.45,r.z-.28]},c="lotus",h="idle",d="clear",u=0,p=new R(r.x,r.y+.04,r.z),g="overview",x=new Ht(new eo(.09,.105,48),new Be({color:"#c6edca",transparent:!0,opacity:.7,side:ne}));x.rotation.x=-Math.PI/2,x.position.copy(p),o.add(x);let m=new oe,f=new Ht(new to(.018,.065,4,8),a("#d67e57"));m.add(f);let y=new Ht(new qt(.019,.019,.025,10),a("#fff6cd"));y.position.y=.02,m.add(y),m.visible=!1,o.add(m);let v=new Zt().setFromPoints([new R,new R]),b=new Bs(v,new ss({color:"#6d5140"}));o.add(b);let D=new Zt().setFromPoints(Array.from({length:25},()=>new R)),T=new Bs(D,new ss({color:"#ece3bc",transparent:!0,opacity:.8}));o.add(T),T.visible=!1;let w=[],I=["#c2caac","#c89159","#829d9d","#617d70","#b7b0a1","#c6a474"];function F(Y,O=0,Q="koi"){let gt=new oe,ct=Q==="round"?1.4:Q==="long"?.55:Q==="slim"?.75:1,z=new Ht(new se(1,14,8),a(Y));z.scale.set(.08,.025*ct,.031*ct),gt.add(z);let $=new Ht(new fe(.035,.07,3),a("#d3dcc7"));$.rotation.z=Math.PI/2,$.position.x=-.1,gt.add($);let ft=new Ht(new se(1,8,5),a("#d6dfc8"));ft.scale.set(.027,.005,.065),ft.position.x=.01,gt.add(ft);for(let ot of[-.018,.018]){let Et=new Ht(new se(.006,6,5),a("#263c38"));Et.position.set(.058,.016,ot),gt.add(Et)}return gt.userData={tail:$,i:O},gt}for(let Y=0;Y<14;Y++){let O=F(I[Y%I.length],Y);o.add(O),w.push(O)}let _=null,M=-100,C=new Zt,N=new Float32Array(360*3);for(let Y=0;Y<360;Y++)N[Y*3]=(Math.random()-.5)*6+r.x,N[Y*3+1]=r.y+Math.random()*5,N[Y*3+2]=(Math.random()-.5)*6+r.z;C.setAttribute("position",new jt(N,3));let B=new Dn(C,new zs({color:"#d7edf0",size:.022,transparent:!0,opacity:.65}));B.visible=!1,o.add(B);function et(Y){c=Y,g="fishing";let[O,Q]=l[Y];p.set(O,r.y+.04,Q);let gt=Y==="falls"?2.5:Y==="moon"?.2:1.2;n.autoRotate=!1,n.minZoom=.8,n.maxZoom=7,n.target.set(r.x,r.y-.05,r.z),t.position.set(r.x+Math.cos(gt)*7,r.y+5.3,r.z+Math.sin(gt)*7),t.zoom=4.3,t.updateProjectionMatrix(),n.update(),b.visible=!0}function W(){g="overview",n.target.set(0,-.18,0),t.position.set(15,15,15),t.zoom=1.1,t.updateProjectionMatrix(),n.autoRotate=!1,n.update(),b.visible=!1}function it(){M=u,h="waiting",m.visible=!0,T.visible=!0}function X(Y,O){let Q=new ls;Q.setFromCamera(new _t(Y/innerWidth*2-1,-O/innerHeight*2+1),t);let gt=new R;return!Q.ray.intersectPlane(new qe(new R(0,1,0),-r.y-.04),gt)||Math.hypot(gt.x-r.x,gt.z-r.z)>r.r*.85?null:(p.copy(gt),{x:gt.x,z:gt.z})}return window.QingchiWorld=Object.freeze({focus:et,overview:W,cast:it,setPhase:Y=>{h=Y,["idle","failed"].includes(Y)&&(m.visible=!1,T.visible=!1)},setWeather:Y=>{d=Y,B.visible=Y==="rain"||Y==="snow",B.material.size=Y==="snow"?.045:.022},pick:X,prize:Y=>{_&&(o.remove(_),_.traverse(O=>{O.geometry?.dispose(),O.material?.dispose()})),_=F(Y.color,0,Y.form),_.scale.setScalar(3),o.add(_),h="caught"},clearPrize:()=>{_&&(o.remove(_),_.traverse(Y=>{Y.geometry?.dispose(),Y.material?.dispose()}),_=null)},projectAim:()=>{let Y=p.clone().project(t);return{x:(Y.x+1)/2*innerWidth,y:(1-Y.y)/2*innerHeight}},inspect:()=>({site:c,phase:h,view:g,weather:d,lake:{...r},aim:{x:p.x,z:p.z},exposure:e.toneMappingExposure,fishMeshes:w.length,frames:window.__frames})}),W(),{update(Y,O){u=Y,e.toneMappingExposure*=d==="cloudy"?.85:d==="rain"?.72:d==="snow"?.95:1,x.position.copy(p),x.scale.setScalar(1+.08*Math.sin(Y*2)),x.visible=g==="fishing";let Q=new R(r.x+.91,r.y+.1,r.z+.7),gt=Q.clone().add(new R(-.18,.65,-.18));b.geometry.setFromPoints([Q,gt]);let ct=h==="bite"?Math.sin(Y*18)*.055:Math.sin(Y*3)*.009;if(m.position.copy(p),m.position.y+=ct,u-M<.7){let $=(u-M)/.7;m.position.copy(Q).lerp(p,$),m.position.y+=Math.sin($*Math.PI)*.8}m.rotation.z=Math.sin(Y*4)*.1;let z=T.geometry.attributes.position;for(let $=0;$<25;$++){let ft=$/24,ot=gt.clone().lerp(m.position,ft);ot.y-=Math.sin(ft*Math.PI)*.13,z.setXYZ($,ot.x,ot.y,ot.z)}if(z.needsUpdate=!0,w.forEach(($,ft)=>{let ot=Y*(.12+ft%3*.05)+ft*2.4,Et=.16+ft%5*.14;$.position.set(r.x+Math.cos(ot)*Et,r.y+.018,r.z+Math.sin(ot)*Et*.8),$.rotation.y=-ot-Math.PI/2,$.userData.tail.rotation.z=Math.PI/2+Math.sin(Y*7+ft)*.3}),_&&(_.position.copy(p),_.position.y+=.35+Math.sin(Y*2)*.06,_.rotation.y=Y*.5),B.visible){let $=C.attributes.position;for(let ft=0;ft<$.count;ft++){let ot=$.getY(ft)-O*(d==="snow"?.3:2.5);ot<r.y&&(ot=r.y+5),$.setY(ft,ot)}$.needsUpdate=!0}}}}var kh={type:"change"},Jl={type:"start"},Gh={type:"end"},ho=new oi,Vh=new qe,Yg=Math.cos(70*Ih.DEG2RAD),Ie=new R,Qe=2*Math.PI,he={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},$l=1e-6,uo=class extends oo{constructor(t,e=null){super(t,e),this.state=he.NONE,this.enabled=!0,this.target=new R,this.cursor=new R,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ti.ROTATE,MIDDLE:Ti.DOLLY,RIGHT:Ti.PAN},this.touches={ONE:Ai.ROTATE,TWO:Ai.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new R,this._lastQuaternion=new Re,this._lastTargetPosition=new R,this._quat=new Re().setFromUnitVectors(t.up,new R(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Ws,this._sphericalDelta=new Ws,this._scale=1,this._panOffset=new R,this._rotateStart=new _t,this._rotateEnd=new _t,this._rotateDelta=new _t,this._panStart=new _t,this._panEnd=new _t,this._panDelta=new _t,this._dollyStart=new _t,this._dollyEnd=new _t,this._dollyDelta=new _t,this._dollyDirection=new R,this._mouse=new _t,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Zg.bind(this),this._onPointerDown=qg.bind(this),this._onPointerUp=Kg.bind(this),this._onContextMenu=n_.bind(this),this._onMouseWheel=jg.bind(this),this._onKeyDown=Qg.bind(this),this._onTouchStart=t_.bind(this),this._onTouchMove=e_.bind(this),this._onMouseDown=$g.bind(this),this._onMouseMove=Jg.bind(this),this._interceptControlDown=i_.bind(this),this._interceptControlUp=s_.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(kh),this.update(),this.state=he.NONE}update(t=null){let e=this.object.position;Ie.copy(e).sub(this.target),Ie.applyQuaternion(this._quat),this._spherical.setFromVector3(Ie),this.autoRotate&&this.state===he.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Qe:n>Math.PI&&(n-=Qe),s<-Math.PI?s+=Qe:s>Math.PI&&(s-=Qe),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Ie.setFromSpherical(this._spherical),Ie.applyQuaternion(this._quatInverse),e.copy(this.target).add(Ie),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=Ie.length();o=this._clampDistance(a*this._scale);let l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let a=new R(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new R(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Ie.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(ho.origin.copy(this.object.position),ho.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(ho.direction))<Yg?this.object.lookAt(this.target):(Vh.setFromNormalAndCoplanarPoint(this.object.up,this.target),ho.intersectPlane(Vh,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>$l||8*(1-this._lastQuaternion.dot(this.object.quaternion))>$l||this._lastTargetPosition.distanceToSquared(this.target)>$l?(this.dispatchEvent(kh),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Qe/60*this.autoRotateSpeed*t:Qe/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Ie.setFromMatrixColumn(e,0),Ie.multiplyScalar(-t),this._panOffset.add(Ie)}_panUp(t,e){this.screenSpacePanning===!0?Ie.setFromMatrixColumn(e,1):(Ie.setFromMatrixColumn(e,0),Ie.crossVectors(this.object.up,Ie)),Ie.multiplyScalar(t),this._panOffset.add(Ie)}_pan(t,e){let n=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;Ie.copy(s).sub(this.target);let r=Ie.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,o=n.width,a=n.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(Qe*this._rotateDelta.x/e.clientHeight),this._rotateUp(Qe*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(Qe*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-Qe*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(Qe*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-Qe*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(Qe*this._rotateDelta.x/e.clientHeight),this._rotateUp(Qe*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new _t,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function qg(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function Zg(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function Kg(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Gh),this.state=he.NONE;break;case 1:let t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function $g(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Ti.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=he.DOLLY;break;case Ti.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=he.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=he.ROTATE}break;case Ti.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=he.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=he.PAN}break;default:this.state=he.NONE}this.state!==he.NONE&&this.dispatchEvent(Jl)}function Jg(i){switch(this.state){case he.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case he.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case he.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function jg(i){this.enabled===!1||this.enableZoom===!1||this.state!==he.NONE||(i.preventDefault(),this.dispatchEvent(Jl),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Gh))}function Qg(i){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(i)}function t_(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Ai.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=he.TOUCH_ROTATE;break;case Ai.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=he.TOUCH_PAN;break;default:this.state=he.NONE}break;case 2:switch(this.touches.TWO){case Ai.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=he.TOUCH_DOLLY_PAN;break;case Ai.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=he.TOUCH_DOLLY_ROTATE;break;default:this.state=he.NONE}break;default:this.state=he.NONE}this.state!==he.NONE&&this.dispatchEvent(Jl)}function e_(i){switch(this._trackPointer(i),this.state){case he.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case he.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case he.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case he.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=he.NONE}}function n_(i){this.enabled!==!1&&i.preventDefault()}function i_(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function s_(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Ri(i){return function(){i|=0,i=i+1831565813|0;let t=Math.imul(i^i>>>15,1|i);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}var r_=.3660254037844386,Ys=.21132486540518713,us=[1,1,-1,1,1,-1,-1,-1,1,0,-1,0,1,0,-1,0,0,1,0,-1,0,1,0,-1];function dn(i=1){let t=Ri(i),e=new Uint8Array(256);for(let r=0;r<256;r++)e[r]=r;for(let r=255;r>0;r--){let o=t()*(r+1)|0,a=e[r];e[r]=e[o],e[o]=a}let n=new Uint8Array(512),s=new Uint8Array(512);for(let r=0;r<512;r++)n[r]=e[r&255],s[r]=n[r]%12;return function(o,a){let l=(o+a)*r_,c=Math.floor(o+l),h=Math.floor(a+l),d=(c+h)*Ys,u=o-(c-d),p=a-(h-d),g,x;u>p?(g=1,x=0):(g=0,x=1);let m=u-g+Ys,f=p-x+Ys,y=u-1+2*Ys,v=p-1+2*Ys,b=c&255,D=h&255,T=0,w=0,I=0,F=.5-u*u-p*p;if(F>0){let C=s[b+n[D]]*2;F*=F,T=F*F*(us[C]*u+us[C+1]*p)}let _=.5-m*m-f*f;if(_>0){let C=s[b+g+n[D+x]]*2;_*=_,w=_*_*(us[C]*m+us[C+1]*f)}let M=.5-y*y-v*v;if(M>0){let C=s[b+1+n[D+1]]*2;M*=M,I=M*M*(us[C]*y+us[C+1]*v)}return 70*(T+w+I)}}function ye(i,t,e,n=4,s=2.02,r=.5){let o=1,a=1,l=0,c=0;for(let h=0;h<n;h++)l+=o*i(t*a,e*a),c+=o,o*=r,a*=s;return l/c}function Wh(i,t,e,n=3){let s=1,r=1,o=0,a=0;for(let l=0;l<n;l++){let c=1-Math.abs(i(t*r,e*r));o+=s*c*c,a+=s,s*=.52,r*=2.11}return o/a}var ze=i=>.5+.5*i;function Un(i,t,e){return i<t?t:i>e?e:i}function Nn(i,t,e){return i+(t-i)*e}function te(i,t,e){let n=Un((e-i)/(t-i||1e-6),0,1);return n*n*(3-2*n)}var fs=[{t:0,label:"\u9ECE\u660E",sun:"#ffd9a0",sunI:2.2,moonI:0,hemiSky:"#5a7f8c",hemiGround:"#232a26",hemiI:.62,amb:"#a9c6cc",ambI:.44,skyTop:"#0a1a22",skyMid:"#12262c",skyLow:"#2c3a38",nebula:"#4f8f8a",star:.5,mist:.88,exposure:1.16,bloom:.8,rim:"#ffe0b0",rimI:1.2,wDeep:"#1d4a44",wShallow:"#5aa79a",wFoam:"#e6fff4",firefly:.3,glass:"#cfeae4",glassI:.85},{t:.2,label:"\u4E0A\u5348",sun:"#fff4dc",sunI:3.3,moonI:0,hemiSky:"#8fc0c4",hemiGround:"#3e4a3a",hemiI:.94,amb:"#c6e2de",ambI:.6,skyTop:"#050f12",skyMid:"#0a181c",skyLow:"#132422",nebula:"#2f6a68",star:.07,mist:.55,exposure:1.03,bloom:.44,rim:"#d8f2ea",rimI:.85,wDeep:"#17544c",wShallow:"#63b3a2",wFoam:"#f2fffb",firefly:0,glass:"#d6f0ea",glassI:.7},{t:.4,label:"\u6B63\u5348",sun:"#ffffff",sunI:3.85,moonI:0,hemiSky:"#a8ccc8",hemiGround:"#4c5442",hemiI:1.02,amb:"#dcece6",ambI:.66,skyTop:"#030a0c",skyMid:"#071114",skyLow:"#0d1a18",nebula:"#25544f",star:0,mist:.4,exposure:.98,bloom:.36,rim:"#ffffff",rimI:.7,wDeep:"#155b52",wShallow:"#72c3ae",wFoam:"#ffffff",firefly:0,glass:"#e4f7f1",glassI:.62},{t:.57,label:"\u5348\u540E",sun:"#ffe8bc",sunI:3.15,moonI:0,hemiSky:"#9ec4bd",hemiGround:"#54503a",hemiI:.94,amb:"#d8d8b8",ambI:.62,skyTop:"#040c0e",skyMid:"#0a1113",skyLow:"#161a16",nebula:"#3d5b4a",star:.1,mist:.52,exposure:1.06,bloom:.52,rim:"#ffe6b8",rimI:1.2,wDeep:"#1a534a",wShallow:"#6fb8a4",wFoam:"#fdf7e6",firefly:0,glass:"#dcf2e8",glassI:.75},{t:.68,label:"\u9EC4\u660F",sun:"#ffc84e",sunI:2.85,moonI:.1,hemiSky:"#ab8a5c",hemiGround:"#4e4020",hemiI:.9,amb:"#f7d08c",ambI:.66,skyTop:"#070d10",skyMid:"#181420",skyLow:"#3a2a18",nebula:"#9a6a4a",star:.32,mist:.62,exposure:1.16,bloom:.88,rim:"#ffe09a",rimI:1.85,wDeep:"#2f4a44",wShallow:"#93b8a0",wFoam:"#fff2cf",firefly:.3,glass:"#ffe6c4",glassI:.92},{t:.79,label:"\u66AE\u8272",sun:"#ffab4a",sunI:1.1,moonI:.3,hemiSky:"#6a6272",hemiGround:"#262a26",hemiI:.7,amb:"#b8a0a8",ambI:.48,skyTop:"#04080c",skyMid:"#0a1018",skyLow:"#1c1a22",nebula:"#6a4a5a",star:.68,mist:.8,exposure:1.2,bloom:.98,rim:"#ffc98a",rimI:1.3,wDeep:"#173f3c",wShallow:"#4a8a80",wFoam:"#e8e0d0",firefly:.75,glass:"#d8d0dc",glassI:1.05},{t:.92,label:"\u6DF1\u591C",sun:"#9fc8d8",sunI:.12,moonI:.62,hemiSky:"#2a3d4c",hemiGround:"#141a18",hemiI:.44,amb:"#6a8a96",ambI:.38,skyTop:"#02060a",skyMid:"#050c10",skyLow:"#0a1418",nebula:"#2e4a52",star:1,mist:.92,exposure:1.24,bloom:1.05,rim:"#a8d8e8",rimI:.85,wDeep:"#0d2f30",wShallow:"#2f6f6a",wFoam:"#cddde0",firefly:1,glass:"#b4d0d8",glassI:1.1},{t:1,label:"\u9ECE\u660E",sun:"#ffd9a0",sunI:2.2,moonI:0,hemiSky:"#5a7f8c",hemiGround:"#232a26",hemiI:.62,amb:"#a9c6cc",ambI:.44,skyTop:"#0a1a22",skyMid:"#12262c",skyLow:"#2c3a38",nebula:"#4f8f8a",star:.5,mist:.88,exposure:1.16,bloom:.8,rim:"#ffe0b0",rimI:1.2,wDeep:"#1d4a44",wShallow:"#5aa79a",wFoam:"#e6fff4",firefly:.3,glass:"#cfeae4",glassI:.85}],Xh=[6,9,12.5,15.5,18,19.5,22.5,30],Yh=["sun","hemiSky","hemiGround","amb","skyTop","skyMid","skyLow","nebula","rim","wDeep","wShallow","wFoam","glass"],qh=["sunI","moonI","hemiI","ambI","star","mist","exposure","bloom","rimI","firefly","glassI"];function Zh(){let i={t:.28,label:"\u4E0A\u5348",sunDir:new R(.4,.8,.4).normalize(),moonDir:new R(-.4,-.8,-.4).normalize(),sunElev:.6,dayFactor:1,nightFactor:0,hour:10};for(let n of Yh)i[n]=new G("#ffffff");for(let n of qh)i[n]=0;let t=new G,e=new G;return i.apply=function(s){i.t=(s%1+1)%1;let r=i.t,o=0;for(;o<fs.length-2&&fs[o+1].t<=r;)o++;let a=fs[o],l=fs[o+1]||fs[fs.length-1],c=l.t-a.t||1,h=Un((r-a.t)/c,0,1),d=h*h*(3-2*h);for(let f of Yh)t.set(a[f]),e.set(l[f]),i[f].copy(t).lerp(e,d);for(let f of qh)i[f]=Nn(a[f],l[f],d);let u=Nn(Xh[o],Xh[o+1],h);i.hour=u%24,i.label=u<4.5?"\u6DF1\u591C":u<6.8?"\u9ECE\u660E":u<11?"\u4E0A\u5348":u<13.6?"\u6B63\u5348":u<17?"\u5348\u540E":u<18.6?"\u9EC4\u660F":u<20.2?"\u66AE\u8272":"\u6DF1\u591C";let p=r*Math.PI*2,g=Math.sin(p)*1.28,x=2.35+r*2.6,m=Math.cos(Math.min(g,1.45));return i.sunDir.set(Math.cos(x)*m,Math.sin(g),Math.sin(x)*m).normalize(),i.moonDir.copy(i.sunDir).multiplyScalar(-1),i.sunElev=Math.sin(g),i.dayFactor=te(-.16,.22,i.sunElev),i.nightFactor=1-i.dayFactor,i},i.apply(.28),i}function fo(i,t){let e=document.createElement("canvas");return e.width=i,e.height=t,{c:e,ctx:e.getContext("2d")}}function Kn(i=128,t=0,e=.42){let{c:n,ctx:s}=fo(i,i),r=s.createRadialGradient(i/2,i/2,i*t,i/2,i/2,i/2);r.addColorStop(0,"rgba(255,255,255,1)"),r.addColorStop(e,"rgba(255,255,255,0.38)"),r.addColorStop(.72,"rgba(255,255,255,0.09)"),r.addColorStop(1,"rgba(255,255,255,0)"),s.fillStyle=r,s.fillRect(0,0,i,i);let o=new bi(n);return o.colorSpace=Ye,o.needsUpdate=!0,o}function po(i=256,t=11,e=1,n=.9,s=1){let r=dn(t),{c:o,ctx:a}=fo(i,i),l=a.createImageData(i,i),c=i/2;for(let d=0;d<i;d++)for(let u=0;u<i;u++){let p=(u-c)/c,g=(d-c)/c,x=Math.sqrt(p*p+g*g),m=Math.pow(Math.max(0,1-x),1.35)*e,f=ze(ye(r,u*.021*s,d*.021*s,4))*.72+ze(ye(r,u*.058*s,d*.058*s,3))*.28,y=Math.pow(Math.max(0,m*(1-n+n*1.45*f)),1.2),v=(d*i+u)*4;l.data[v]=255,l.data[v+1]=255,l.data[v+2]=255,l.data[v+3]=Math.min(255,y*255)}a.putImageData(l,0,0);let h=new bi(o);return h.colorSpace=yn,h.needsUpdate=!0,h}function Kh(i=64,t=256){let{c:e,ctx:n}=fo(i,t),s=n.createImageData(i,t);for(let o=0;o<t;o++)for(let a=0;a<i;a++){let l=a/(i-1),c=o/(t-1),h=Math.pow(Math.sin(Math.PI*l),2.6),d=te(1,.06,c)*te(0,.14,c)*.6+te(1,0,c)*.4,u=(o*i+a)*4;s.data[u]=255,s.data[u+1]=255,s.data[u+2]=255,s.data[u+3]=Math.max(0,Math.min(255,h*d*255))}n.putImageData(s,0,0);let r=new bi(e);return r.colorSpace=yn,r.needsUpdate=!0,r}function $h(i=512,t=256){let{c:e,ctx:n}=fo(i,t),s=n.createLinearGradient(0,0,0,t);s.addColorStop(0,"#1a2440"),s.addColorStop(.34,"#0d1424"),s.addColorStop(.52,"#070a12"),s.addColorStop(1,"#020306"),n.fillStyle=s,n.fillRect(0,0,i,t);let r=[[i*.24,t*.24,i*.16,"rgba(255,236,205,0.95)"],[i*.3,t*.3,i*.24,"rgba(255,214,160,0.45)"],[i*.68,t*.2,i*.13,"rgba(190,222,255,0.85)"],[i*.63,t*.26,i*.26,"rgba(120,170,255,0.30)"],[i*.88,t*.46,i*.2,"rgba(255,170,210,0.16)"],[i*.06,t*.52,i*.18,"rgba(120,255,232,0.14)"]];n.globalCompositeOperation="lighter";for(let[a,l,c,h]of r)for(let d of[-i,0,i]){let u=n.createRadialGradient(a+d,l,0,a+d,l,c);u.addColorStop(0,h),u.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=u,n.beginPath(),n.arc(a+d,l,c,0,Math.PI*2),n.fill()}n.globalCompositeOperation="source-over";let o=new bi(e);return o.mapping=Ls,o.colorSpace=Ye,o.needsUpdate=!0,o}var o_=new Yt().set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1);function Jh({scene:i,planeY:t=0,scale:e=.5}){let n=new Fe(2,2,{type:an,minFilter:Ke,magFilter:Ke,depthBuffer:!0,stencilBuffer:!1});n.texture.generateMipmaps=!1,n.texture.wrapS=Rn,n.texture.wrapT=Rn;let s=new In(-1,1,1,-1,-400,700),r=new Ne(60,1,.01,700),o=new Yt,a=new R,l=[],c=1e5,h=new qe(new R(0,1,0),c);function d(p,g){n.setSize(Math.max(2,Math.floor(p*e)),Math.max(2,Math.floor(g*e)))}function u(p,g){let x=g.isPerspectiveCamera?r:s;g.getWorldDirection(a),x.position.set(g.position.x,2*t-g.position.y,g.position.z),x.up.set(0,-1,0),x.lookAt(x.position.x+a.x,x.position.y-a.y,x.position.z+a.z),g.isOrthographicCamera?(x.left=g.left,x.right=g.right,x.top=g.top,x.bottom=g.bottom,x.zoom=g.zoom):(x.fov=g.fov,x.aspect=g.aspect),x.near=g.near,x.far=g.far,x.updateProjectionMatrix(),x.updateMatrixWorld(!0),o.copy(o_).multiply(x.projectionMatrix).multiply(x.matrixWorldInverse);let m=l.map(v=>[v,v.visible]);for(let v of l)v.visible=!1;let f=p.getRenderTarget(),y=p.shadowMap.autoUpdate;h.constant=-t,p.shadowMap.autoUpdate=!1,p.setRenderTarget(n),p.clear(),p.render(i,x),p.setRenderTarget(f),p.shadowMap.autoUpdate=y,h.constant=c;for(let[v,b]of m)v.visible=b}return{target:n,textureMatrix:o,resize:d,render:u,install(p){p.clippingPlanes=[h]},exclude(p){l.push(p)}}}var a_=`
varying vec3 vDir;
void main(){
  vDir = normalize(position);
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  gl_Position = projectionMatrix * mv;
}
`,l_=`
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
`,c_=`
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
`,h_=`
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
`;function jh(){let i=new oe;i.name="sky";let t=new ie({uniforms:{uTop:{value:new G("#050a18")},uMid:{value:new G("#0a1224")},uLow:{value:new G("#131a2c")},uNebula:{value:new G("#2c3a68")},uTime:{value:0}},vertexShader:a_,fragmentShader:l_,side:Ve,depthWrite:!1,depthTest:!1}),e=new Ht(new se(320,32,24),t);e.renderOrder=-100,e.frustumCulled=!1,i.add(e);let n=2200,s=new Float32Array(n*3),r=new Float32Array(n),o=new Float32Array(n),a=20261026,l=()=>(a=(a*1664525+1013904223)%4294967296,a/4294967296);for(let x=0;x<n;x++){let m=l()*2-1,f=l()*Math.PI*2,y=250+l()*40,v=Math.sqrt(1-m*m);s[x*3]=Math.cos(f)*v*y,s[x*3+1]=m*y,s[x*3+2]=Math.sin(f)*v*y,r[x]=.6+Math.pow(l(),3.2)*3.4,o[x]=l()}let c=new Zt;c.setAttribute("position",new jt(s,3)),c.setAttribute("aSize",new jt(r,1)),c.setAttribute("aPhase",new jt(o,1));let h=new ie({uniforms:{uTime:{value:0},uOpacity:{value:1},uScale:{value:1},uColor:{value:new G("#dce9ff")},uMap:{value:Kn(64)}},vertexShader:c_,fragmentShader:h_,transparent:!0,blending:Ze,depthWrite:!1,depthTest:!0}),d=new Dn(c,h);d.renderOrder=-99,d.frustumCulled=!1,i.add(d);let u=new Be({map:Kn(256),color:4877992,transparent:!0,opacity:.5,blending:Ze,depthWrite:!1,depthTest:!0,side:ne}),p=new Ht(new je(34,34),u);p.position.set(0,0,-26),p.renderOrder=-98,i.add(p);let g=p.clone();return g.material=u.clone(),g.material.color=new G(9396126),g.material.opacity=.32,g.scale.set(1.7,1.1,1),g.position.set(-7,4.5,-28),i.add(g),{group:i,update(x,m){t.uniforms.uTime.value=x,t.uniforms.uTop.value.copy(m.skyTop),t.uniforms.uMid.value.copy(m.skyMid),t.uniforms.uLow.value.copy(m.skyLow),t.uniforms.uNebula.value.copy(m.nebula),h.uniforms.uTime.value=x,h.uniforms.uOpacity.value=m.star,u.opacity=.16+.42*m.nightFactor,u.color.copy(m.nebula).multiplyScalar(.9),g.material.opacity=.1+.3*m.nightFactor,g.material.color.copy(m.nebula).multiplyScalar(.8)}}}var u_=new G(9417938),f_=`
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
`,d_=`
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
`;function Qh(i=11,t={}){let e=i/2,n=new R(.577,.577,.577),s=new oe;s.name="glass";let r=t.physical===!0,o=new Vs({color:16777215,metalness:0,roughness:.045,transmission:r?1:0,thickness:.6,ior:1.46,transparent:!0,opacity:r?1:.028,side:ne,clearcoat:1,clearcoatRoughness:.04,iridescence:.5,iridescenceIOR:1.36,iridescenceThicknessRange:[180,620],attenuationColor:new G("#bfe6ff"),attenuationDistance:1.15,envMapIntensity:r?2.3:1.9,specularIntensity:1.15,depthWrite:!1,premultipliedAlpha:!1}),a=new Ht(new ge(i,i,i),o);a.name="glass-body",a.renderOrder=8,s.add(a);let l=.026,c=new Vs({color:12178666,roughness:.12,metalness:0,clearcoat:1,clearcoatRoughness:.06,transparent:!0,opacity:.1,emissive:new G(1915996),emissiveIntensity:.12,envMapIntensity:1.2}),h=new ge(i,l*2,l*2),d=new ge(l*2,i,l*2),u=new ge(l*2,l*2,i),p=new oe,g=[],x=(w,I,F,_)=>{let M=new Ht(w,c.clone());return M.position.set(I,F,_),M.userData.dir=new R(I,F,_).normalize(),p.add(M),g.push(M),M};for(let w of[-1,1]){for(let I of[-1,1])x(h,0,e*w,e*I);for(let I of[-1,1])x(u,e*I,e*w,0)}for(let w of[-1,1])for(let I of[-1,1])x(d,e*w,0,e*I);let m=new se(l*1.35,10,8);for(let w of[-1,1])for(let I of[-1,1])for(let F of[-1,1]){let _=new Ht(m,c);_.position.set(e*w,e*I,e*F),p.add(_)}p.name="glass-frame",s.add(p);let f=Kn(256),y=new Be({map:f,transparent:!0,opacity:.1,blending:Ze,depthWrite:!1,side:ne}),v=new oe;v.name="glass-reflections";let b=(w,I,F,_,M)=>{let C=new Ht(new je(w,I),y.clone());return C.position.set(...F),C.rotation.set(..._),C.material.opacity=M,C.renderOrder=7,v.add(C),C};b(7.6,3.2,[.6,e-.03,.2],[-Math.PI/2,0,.5],.038),b(5.2,2.6,[e-.03,2.35,.4],[0,Math.PI/2,.32],.052),b(4.4,3,[-.4,2.05,e-.03],[0,0,-.28],.044),s.add(v);let D=new ie({uniforms:{uHalf:{value:e},uWidth:{value:.055},uColor:{value:new G("#bfe0ff")},uIntensity:{value:.9}},vertexShader:f_,fragmentShader:d_,transparent:!0,blending:Ze,depthWrite:!1,side:ne}),T=new Ht(new ge(i*1.004,i*1.004,i*1.004),D);return T.name="glass-glow",T.renderOrder=9,s.add(T),{group:s,bodyMat:o,barMat:c,glowMat:D,update(w,I,F){if(F){n.copy(F.position).normalize();for(let _ of g){let M=_.userData.dir.dot(n),C=te(-.25,.55,M);_.material.opacity=.145-.125*C}}D.uniforms.uColor.value.copy(w.glass),D.uniforms.uIntensity.value=w.glassI*.12*(.85+.15*Math.sin(I*.7)),c.emissive.copy(w.glass).multiplyScalar(.35),c.emissiveIntensity=.04+.16*w.nightFactor,c.color.copy(w.glass).lerp(u_,.62).multiplyScalar(.85)}}}var pn=1.24,qs=1.16,tu=[{x:-1.16,z:-1.34,h:1.72,r:1.34,k:1.5},{x:-2.08,z:.36,h:1.22,r:1.1,k:1.45},{x:-.16,z:-1.94,h:.92,r:.96,k:1.35},{x:-1.6,z:-.6,h:.7,r:1.34,k:1.15},{x:.62,z:-1.62,h:.44,r:.88,k:1.25}],Sn={x:.96*1.28,z:-.4*1.28,r:.92*1.18},p_=.72*1.16,m_=Sn.r*1.45,g_=[[-1.44,-.66],[-1.25,-.15],[-.9,.25],[-.45,.42],[-.05,.25],[.25,-.05],[.5,-.4]],__=[[1.72,-.66],[2.12,-.92],[2.56,-.76],[2.9,-.32],[3.1,.4],[3.14,1.2],[3.04,1.95],[2.84,2.52]],x_=Math.atan2(2.5,2.9),mo=new G("#4f8a68"),tn={grassA:new G("#5f9a72"),grassB:new G("#37684f"),grassC:new G("#86ad86"),moss:new G("#4f8270"),rockA:new G("#5f6f6c"),rockB:new G("#514f52"),rockC:new G("#7f8f84"),snow:new G("#eef8f6"),snowB:new G("#c2e0dc"),sand:new G("#a8b096"),bed:new G("#7f9280"),edgeEarth:new G("#31513f"),deepRock:new G("#6b5643"),deepRock2:new G("#3b3029")};function nu(i){let t=i.getIndex(),e=t.array;for(let n=0;n<e.length;n+=3){let s=e[n];e[n]=e[n+2],e[n+2]=s}t.needsUpdate=!0,i.computeVertexNormals()}function eu(i){let t=i.getAttribute("position"),e=i.getAttribute("normal"),n=new Map,s=o=>Math.round(o*1e5);for(let o=0;o<t.count;o++){let a=`${s(t.getX(o))},${s(t.getY(o))},${s(t.getZ(o))}`,l=n.get(a);l?l.push(o):n.set(a,[o])}let r=new R;for(let o of n.values())if(!(o.length<2)){r.set(0,0,0);for(let a of o)r.x+=e.getX(a),r.y+=e.getY(a),r.z+=e.getZ(a);if(!(r.lengthSq()<1e-12)){r.normalize();for(let a of o)e.setXYZ(a,r.x,r.y,r.z)}}return e.needsUpdate=!0,i}function v_(i){let t=i.getAttribute("normal"),e=0;for(let n=0;n<t.count;n++)e+=t.getY(n);return e<0&&nu(i),i}function y_(i){let t=i.getAttribute("normal"),e=i.getAttribute("position"),n=0;for(let s=0;s<t.count;s++){let r=Math.hypot(e.getX(s),e.getZ(s));r<1e-4||(n+=(t.getX(s)*e.getX(s)+t.getZ(s)*e.getZ(s))/r)}return n<0&&nu(i),i}function iu(){let i=dn(1337),t=dn(90210),e=dn(5150),n=dn(777);function s(U,K){let k=Math.hypot(U,K)||1,tt=U/k,ht=K/k,dt=3.04*pn+.34*pn*ze(ye(e,tt*3+5.5,ht*3-2.2,2)),lt=Math.atan2(ht,tt)-x_;for(;lt>Math.PI;)lt-=Math.PI*2;for(;lt<-Math.PI;)lt+=Math.PI*2;return dt+=.62*pn*Math.exp(-(lt*lt)/(2*.16*.16)),dt}function r(U,K){let k=Math.hypot(U,K),tt=s(U,K),ht=te(tt,tt-.5*pn,k),dt=(.15+.135*ze(ye(i,U*.8,K*.8,4))+.045*ze(ye(i,U*2.5,K*2.5,3)))*qs,lt=0;for(let Bt=0;Bt<tu.length;Bt++){let L=tu[Bt],Mt=Math.hypot(U-L.x*pn,K-L.z*pn)/(L.r*pn);lt+=L.h*qs*Math.exp(-Math.pow(Mt,L.k)*1.05)}let vt=Wh(t,U*1.1+4.2,K*1.1-1.7,2);lt*=.9+.2*vt,dt+=lt;let St=Math.hypot(U-Sn.x,K-Sn.z);{let Bt=Math.min(1,St/m_),L=1-Bt*Bt;dt-=p_*L*L}return dt*ht}let o=[];for(let U=0;U<32;U++){let K=U/32*Math.PI*2,k=Sn.r*1.32;o.push(r(Sn.x+Math.cos(K)*k,Sn.z+Math.sin(K)*k))}o.sort((U,K)=>U-K);let a=0;for(let U=0;U<8;U++)a+=o[U];let l=a/8-.05*qs;function c(U,K){let k=new ks(U.map(([vt,St])=>new R(vt*pn,0,St*pn)),!1,"catmullrom",.4),tt=160,ht=k.getSpacedPoints(tt),dt=new Float32Array(tt+1);for(let vt=0;vt<=tt;vt++)dt[vt]=r(ht[vt].x,ht[vt].z)-.13*qs;for(let vt=0;vt<2;vt++){for(let St=1;St<=tt;St++)dt[St]=Math.min(dt[St],dt[St-1]-K.slope);for(let St=1;St<tt;St++)dt[St]=(dt[St-1]+dt[St]*2+dt[St+1])*.25}if(K.start!==void 0)for(let vt=0;vt<=tt;vt++)dt[vt]=Nn(K.start,dt[vt],te(0,.35,vt/tt));if(K.end!==void 0)for(let vt=0;vt<=tt;vt++)dt[vt]=Nn(K.end,dt[vt],te(0,.3,(tt-vt)/tt));let lt=1/0;for(let vt=0;vt<=tt;vt++)lt=Math.min(lt,dt[vt]),dt[vt]=lt;return{N:tt,width:.178*pn,wy:dt,pts:ht.map((vt,St)=>new R(vt.x,dt[St],vt.z))}}let h=c(g_,{end:l-.03,slope:.0022}),d=c(__,{start:l-.03,slope:.0022}),u=[h,d],p=.192*pn,g=.2*pn,x=.55,m=-6.6,f=Math.ceil(13.2/x)+1,y=u.reduce((U,K)=>U+K.N+1,0),v=new Float32Array(y),b=new Float32Array(y),D=new Float32Array(y),T=0;for(let U of u)for(let K=0;K<=U.N;K++)v[T]=U.pts[K].x,b[T]=U.pts[K].z,D[T]=U.wy[K],T++;let w=new Array(f*f);for(let U=0;U<y;U++){let K=Un(Math.floor((v[U]-m)/x),0,f-1),tt=Un(Math.floor((b[U]-m)/x),0,f-1)*f+K;(w[tt]||(w[tt]=[])).push(U)}let I={d:999,wy:0};function F(U,K){let k=Math.floor((U-m)/x),tt=Math.floor((K-m)/x);if(k<0||tt<0||k>=f||tt>=f)return I;let ht=1e9,dt=!1,lt=0,vt=0,St=.09;for(let Bt=-1;Bt<=1;Bt++){let L=tt+Bt;if(!(L<0||L>=f))for(let Mt=-1;Mt<=1;Mt++){let nt=k+Mt;if(nt<0||nt>=f)continue;let ut=w[L*f+nt];if(ut){dt=!0;for(let wt=0;wt<ut.length;wt++){let Ct=ut[wt],Kt=U-v[Ct],de=K-b[Ct],Ae=Kt*Kt+de*de;Ae<ht&&(ht=Ae);let Qt=1/(Ae+St);lt+=Qt,vt+=Qt*D[Ct]}}}}return dt?{d:Math.sqrt(ht),wy:vt/lt}:I}function _(U,K){let k=r(U,K),tt=F(U,K);if(tt.d<p+g){let ht=te(p+g,p,tt.d);k=Nn(k,Math.min(k,tt.wy-.13*qs),ht)}return k}let M=(U,K)=>Math.hypot(U-Sn.x,K-Sn.z),C=-5.4,N=5.4,B=168,et=(N-C)/(B-1),W=new Float32Array(B*B);for(let U=0;U<B;U++){let K=C+U*et;for(let k=0;k<B;k++)W[U*B+k]=_(C+k*et,K)}function it(U,K){let k=(U-C)/et,tt=(K-C)/et;if(k<0||tt<0||k>=B-1||tt>=B-1)return _(U,K);let ht=k|0,dt=tt|0,lt=k-ht,vt=tt-dt,St=W[dt*B+ht],Bt=W[dt*B+ht+1],L=W[(dt+1)*B+ht],Mt=W[(dt+1)*B+ht+1];return Nn(Nn(St,Bt,lt),Nn(L,Mt,lt),vt)}function X(U,K){let k=et,tt=it(U+k,K)-it(U-k,K),ht=it(U,K+k)-it(U,K-k);return Math.hypot(tt,ht)/(2*k)}let Y=132,O=320,Q=(Y+1)*(O+1)+1,gt=new Float32Array(Q*3),ct=new Float32Array(Q*3),z=new Float32Array(Q),$=new Float32Array(Q),ft=new Uint32Array(Y*O*6+O*3),ot=.22,Et=U=>(.0042+.9958*Math.pow(U/Y,1.05))*.9985,pt=new G,bt=.17,Rt=_(1e-4,1e-4);for(let U=0;U<=Y;U++)for(let K=0;K<=O;K++){let k=K/O*Math.PI*2,tt=Math.cos(k),ht=Math.sin(k),dt=Et(U),lt=s(tt,ht),vt=dt*lt,St=tt*vt,Bt=ht*vt,L=U*(O+1)+K,Mt=_(St,Bt);if(vt<bt){let nt=te(.02,bt,vt);Mt=Rt+(Mt-Rt)*nt}z[L]=Mt,$[L]=vt,gt[L*3]=St,gt[L*3+1]=Mt,gt[L*3+2]=Bt}{let U=new Float32Array(z.length),K=(k,tt)=>{for(let ht=0;ht<=Y;ht++)for(let dt=0;dt<=O;dt++){let lt=ht*(O+1)+dt,vt=ht*(O+1)+(dt===0?O-1:dt-1),St=ht*(O+1)+(dt===O?1:dt+1),Bt=(ht===0?0:ht-1)*(O+1)+dt,L=(ht===Y?Y:ht+1)*(O+1)+dt;tt[lt]=(k[lt]*4+k[vt]+k[St]+k[Bt]+k[L])*.125}};K(z,U),K(U,z);for(let k=0;k<z.length;k++)gt[k*3+1]=z[k]}for(let U=0;U<=Y;U++)for(let K=0;K<=O;K++){let k=U*(O+1)+K,tt=gt[k*3],ht=gt[k*3+2],dt=z[k],lt=K>0?K-1:O-1,vt=K<O?K+1:1,St=U>0?U-1:0,Bt=U<Y?U+1:Y,L=Math.max(et*.9,2*Math.PI*$[k]/O),Mt=Math.max(et*.9,$[Bt*(O+1)+K]-$[St*(O+1)+K]||et),nt=(z[U*(O+1)+vt]-z[U*(O+1)+lt])/L,ut=(z[Bt*(O+1)+K]-z[St*(O+1)+K])/Mt,wt=Math.min(Math.hypot(nt,ut),8),Ct=ze(ye(n,tt*1.05,ht*1.05,3)),Kt=ze(ye(n,tt*2.9,ht*2.9,2));pt.copy(tn.grassB).lerp(tn.grassA,Ct),pt.lerp(tn.grassC,Math.pow(Kt,1.5)*.38);let de=te(.5,1.35,wt)*(.8+.2*Kt);if(de>.002){let cn=tn.rockA.clone().lerp(tn.rockC,Kt*.45);pt.lerp(cn,Un(de,0,1))}let Qt=1.6+.34*ye(i,tt*2.7+3.1,ht*2.7-1.4,4)+.1*ze(ye(t,tt*1.1,ht*1.1,2)),be=te(Qt,Qt+.3,dt);be*=te(2.35,.95,wt);let mn=ze(ye(e,tt*5+1.7,ht*5-2.9,2));if(be*=1-.62*te(.58,.86,mn)*te(2.1,1.05,wt),be*=.8+.2*Kt,be>.002){let cn=tn.snow.clone().lerp(tn.snowB,.25+Ct*.55);pt.lerp(cn,Un(be,0,1))}let Js=M(tt,ht),gs=(1-te(l+.02,l+.11,dt))*te(Sn.r*1.28,Sn.r*.86,Js);gs>.002&&pt.lerp(tn.sand,gs*.85);let Tn=F(tt,ht);if(Tn.d<p*2.2){let cn=1-te(p*1.05,p*2.2,Tn.d);pt.lerp(tn.bed,cn*.55)}let Ci=te(.45,.9,dt)*(1-te(1,1.35,dt));Ci>.002&&pt.lerp(tn.moss,Ci*.35*Kt);let _s=te(.34,.05,s(tt,ht)-Math.hypot(tt,ht));_s>.002&&pt.lerp(tn.edgeEarth,_s*.8);let xs=Math.hypot(tt,ht);if(xs<ot){let cn=te(ot,ot*.25,xs);pt.lerp(mo,cn*.92)}ct[k*3]=pt.r,ct[k*3+1]=pt.g,ct[k*3+2]=pt.b}let Tt=0;for(let U=0;U<Y;U++)for(let K=0;K<O;K++){let k=U*(O+1)+K,tt=k+1,ht=k+O+1,dt=ht+1;ft[Tt++]=k,ft[Tt++]=ht,ft[Tt++]=tt,ft[Tt++]=tt,ft[Tt++]=ht,ft[Tt++]=dt}let P=Q-1;{let k=z[0];gt[P*3]=0,gt[P*3+1]=k,gt[P*3+2]=0,ct[P*3]=mo.r,ct[P*3+1]=mo.g,ct[P*3+2]=mo.b;for(let tt=0;tt<O;tt++){let ht=0*(O+1)+tt,dt=ht+1;ft[Tt++]=P,ft[Tt++]=ht,ft[Tt++]=dt}}let Wt=new Zt;Wt.setAttribute("position",new jt(gt,3)),Wt.setAttribute("color",new jt(ct,3)),Wt.setIndex(new jt(ft,1)),Wt.computeVertexNormals(),v_(Wt),eu(Wt);let zt=new Ht(Wt,new _e({vertexColors:!0,roughness:.95,metalness:0,envMapIntensity:.28}));zt.castShadow=!0,zt.receiveShadow=!0,zt.name="terrain";let Xt=46,Lt=[],ee=[],Ut=[],A=new Float32Array(O+1);for(let U=0;U<=O;U++){let K=U/O*Math.PI*2,k=Math.cos(K),tt=Math.sin(K),ht=s(k,tt);A[U]=_(k*ht*.9985,tt*ht*.9985)}for(let U=0;U<=Xt;U++){let K=U/Xt;for(let k=0;k<=O;k++){let tt=k/O*Math.PI*2,ht=Math.cos(tt),dt=Math.sin(tt),lt=s(ht,dt),vt=1+.1*ye(t,ht*3.1+K*5,dt*3.1-K*4,3)*te(0,.16,K),St=lt*.9985*Math.pow(1-K,.62)*vt,Bt=ht*St,L=dt*St,nt=A[k]*(1-te(0,.35,K))-3.02*Math.pow(K,.92)+.3*ye(e,Bt*1.6+7,L*1.6-3,3)*Math.sin(K*Math.PI);Lt.push(Bt,nt,L);let ut=ze(ye(n,Bt*2.2,L*2.2+K*3,3));pt.copy(tn.deepRock).lerp(tn.deepRock2,ut);let wt=(1-te(.06,.4,K))*.42*ze(ye(i,Bt*4,L*4,2));wt>.002&&pt.lerp(tn.moss,wt),ee.push(pt.r,pt.g,pt.b)}}for(let U=0;U<Xt;U++)for(let K=0;K<O;K++){let k=U*(O+1)+K,tt=k+1,ht=k+O+1,dt=ht+1;Ut.push(k,tt,ht,tt,dt,ht)}let E=new Zt;E.setAttribute("position",new Nt(Lt,3)),E.setAttribute("color",new Nt(ee,3)),E.setIndex(Ut),E.computeVertexNormals(),eu(E),y_(E);let q=new Ht(E,new _e({vertexColors:!0,roughness:.97,metalness:0,flatShading:!0,envMapIntensity:.62,emissive:new G("#1a1410"),emissiveIntensity:1}));q.castShadow=!0,q.receiveShadow=!0,q.name="underside";let at=new oe;at.name="island",at.add(zt,q);let mt=u[1],st=mt.N;for(let U=mt.N;U>=0;U--){let K=mt.pts[U];if(Math.hypot(K.x,K.z)<=s(K.x,K.z)-.05){st=U;break}}let Z=mt.pts[st],rt=new _t(Z.x,Z.z);return rt.lengthSq()<1e-6&&rt.set(1,0),rt.normalize(),{group:at,heightAt:_,sampleY:it,slopeFast:X,slopeAt:X,coastR:s,channel:F,lakeDist:M,lake:{...Sn,y:l},rivers:u,fall:{x:Z.x,y:mt.wy[st],z:Z.z,dx:rt.x,dz:rt.y,width:.25,bottomY:-3.55}}}var ou=`
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
`;function M_(){return{uTime:{value:0},uDeep:{value:new G("#1d5566")},uShallow:{value:new G("#63b9c2")},uFoam:{value:new G("#eafcff")},uSunColor:{value:new G("#ffffff")},uSkyColor:{value:new G("#9fc6ee")},uSunDir:{value:new R(0,1,0)},uNight:{value:0},uGlow:{value:1},uTexMatrix:{value:new Yt},uReflect:{value:null},uDistort:{value:.05},uReflectAmt:{value:.82},uFlow:{value:0},uFlowMode:{value:0},uEndFade:{value:0},uDbg:{value:0}}}function su(i,t){i.uDeep.value.copy(t.wDeep),i.uShallow.value.copy(t.wShallow),i.uFoam.value.copy(t.wFoam),i.uSunColor.value.copy(t.sun),i.uSkyColor.value.copy(t.hemiSky),i.uSunDir.value.copy(t.sunDir),i.uNight.value=t.nightFactor,i.uGlow.value=1-.34*t.nightFactor}var au=`
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
`,lu=`
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
${ou}
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
`,E_=`
varying vec2 vUv;
varying vec3 vW;
void main(){
  vUv = uv;
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vW = wp.xyz;
  gl_Position = projectionMatrix * viewMatrix * wp;
}
`,b_=`
precision highp float;
uniform float uTime;
uniform vec3 uFoam, uShallow, uSunColor;
uniform float uNight;
varying vec2 vUv;
varying vec3 vW;
${ou}
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
`;function S_(i,t){let{lake:e}=i,n=e.r*1.32,s=96,r=256,o=[],a=[],l=[],c=[],h=[];for(let x=0;x<=s;x++){let m=x/s*n;for(let f=0;f<=r;f++){let y=f/r*Math.PI*2,v=e.x+Math.cos(y)*m,b=e.z+Math.sin(y)*m;o.push(v,e.y,b);let D=i.heightAt(v,b);a.push(Math.max(0,e.y-D)),l.push(1),c.push(f/r,x/s)}}for(let x=0;x<s;x++)for(let m=0;m<r;m++){let f=x*(r+1)+m,y=f+1,v=f+r+1,b=v+1;h.push(f,v,y,y,v,b)}let d=new Zt;d.setAttribute("position",new Nt(o,3)),d.setAttribute("aDepth",new Nt(a,1)),d.setAttribute("aEdge",new Nt(l,1)),d.setAttribute("uv",new Nt(c,2)),d.setIndex(h),d.computeVertexNormals();let u={...t,uFlow:{value:.22},uFlowMode:{value:0},uEndFade:{value:0}},p=new ie({uniforms:u,vertexShader:au,fragmentShader:lu,transparent:!0,depthWrite:!1,side:ne}),g=new Ht(d,p);return g.name="lake",g.renderOrder=2,g}function w_(i,t){let e=i.pts,n=i.N,s=[],r=[],o=[],a=[],l=[];for(let p=0;p<=n;p++){let g=e[p],x=e[Math.max(0,p-1)],m=e[Math.min(n,p+1)],f=m.x-x.x,y=m.z-x.z,v=Math.hypot(f,y)||1;f/=v,y/=v;let b=-y,D=f,T=i.width*(1+.28*te(.7,1,p/n));for(let w of[-1,0,1]){let I=g.x+b*T*w,F=g.z+D*T*w;s.push(I,g.y,F),r.push(w===0?.26:.055),o.push(w===0?1:0),a.push(w*.5+.5,p/n)}}for(let p=0;p<n;p++)for(let g=0;g<2;g++){let x=p*3+g,m=x+1,f=(p+1)*3+g,y=f+1;l.push(x,f,m,m,f,y)}let c=new Zt;c.setAttribute("position",new Nt(s,3)),c.setAttribute("aDepth",new Nt(r,1)),c.setAttribute("aEdge",new Nt(o,1)),c.setAttribute("uv",new Nt(a,2)),c.setIndex(l),c.computeVertexNormals();let h={...t,uFlow:{value:1},uFlowMode:{value:1},uEndFade:{value:i.endFade||0}},d=new ie({uniforms:h,vertexShader:au,fragmentShader:lu,transparent:!0,depthWrite:!1,side:ne}),u=new Ht(c,d);return u.name="river",u.renderOrder=2,u}function T_(i,t){let n=[],s=[],r=[];for(let c=0;c<=56;c++){let h=c/56,d=i.y+(i.bottomY-i.y)*Math.pow(h,1.22),u=i.width*(1+1.35*Math.pow(h,1.4)),p=.34*Math.pow(h,1.6),g=i.x+i.dx*p+Math.sin(h*3.1)*.045,x=i.z+i.dz*p+Math.cos(h*2.4)*.045,m=-i.dz,f=i.dx;for(let y of[-1,1])n.push(g+m*u*y,d,x+f*u*y),s.push(y<0?0:1,h)}for(let c=0;c<56;c++){let h=c*2;r.push(h,h+2,h+1,h+1,h+2,h+3)}let o=new Zt;o.setAttribute("position",new Nt(n,3)),o.setAttribute("uv",new Nt(s,2)),o.setIndex(r),o.computeVertexNormals();let a=new ie({uniforms:{uTime:t.uTime,uFoam:t.uFoam,uShallow:t.uShallow,uSunColor:t.uSunColor,uNight:t.uNight},vertexShader:E_,fragmentShader:b_,transparent:!0,depthWrite:!1,side:ne}),l=new Ht(o,a);return l.name="waterfall",l.renderOrder=3,l}var ru=!1;function cu(i,t,e=null){let n=M_();su(n,t);let s=new oe;s.name="water";let r=S_(i,n);s.add(r);let o=i.rivers.map((l,c)=>{let h=w_({...l,endFade:c===0?1:2},n);return s.add(h),h}),a=T_(i.fall,n);return s.add(a),{group:s,lake:r,rivers:o,fall:a,uniforms:n,update(l,c){n.uTime.value=l,su(n,c)},renderReflection(l,c){if(!(!e||ru)){try{e.render(l,c)}catch(h){ru=!0,console.error("[water] \u5E73\u9762\u53CD\u5C04\u5DF2\u5173\u95ED:",h);return}n.uReflect.value=e.target.texture,n.uTexMatrix.value.copy(e.textureMatrix)}},resizeReflection(l,c){e&&e.resize(l,c)}}}function wn(i,t){let e=i.index?i.toNonIndexed():i.clone();if(e.getAttribute("normal")||e.computeVertexNormals(),e.getAttribute("uv")||e.setAttribute("uv",new jt(new Float32Array(e.getAttribute("position").count*2),2)),!e.getAttribute("color")){let n=e.getAttribute("position").count,s=new Float32Array(n*3),r=t instanceof G?t:new G(t);for(let o=0;o<n;o++)s[o*3]=r.r,s[o*3+1]=r.g,s[o*3+2]=r.b;e.setAttribute("color",new jt(s,3))}for(let n of Object.keys(e.attributes))["position","normal","color","uv"].includes(n)||e.deleteAttribute(n);return e.morphAttributes={},e}function Te(i){let t=0;for(let l of i)t+=l.getAttribute("position").count;let e=new Float32Array(t*3),n=new Float32Array(t*3),s=new Float32Array(t*3),r=new Float32Array(t*2),o=0;for(let l of i){let c=l.getAttribute("position"),h=l.getAttribute("normal"),d=l.getAttribute("color"),u=l.getAttribute("uv");e.set(c.array,o*3),n.set(h.array,o*3),s.set(d.array,o*3),r.set(u.array,o*2),o+=c.count}let a=new Zt;return a.setAttribute("position",new jt(e,3)),a.setAttribute("normal",new jt(n,3)),a.setAttribute("color",new jt(s,3)),a.setAttribute("uv",new jt(r,2)),a.computeBoundingSphere(),a}function xt(i,t,e,{pos:n=[0,0,0],rot:s=[0,0,0],scale:r=[1,1,1]}={}){let o=new Yt,a=new Re().setFromEuler(new Le(s[0],s[1],s[2]));return o.compose(new R(...n),a,new R(...r)),t.applyMatrix4(o),i.push(wn(t,e)),i}var Fx=new G("#4f7d46"),A_=new G("#6b9a52"),R_=new G("#3d6b45"),jl=new G("#5b4a3c"),C_=new G("#2f5f52"),P_=new G("#f3bccb"),I_=new G("#7fa05a"),D_=new G("#5e7a45"),L_=new G("#9fbe6a"),hu=[[1,1,.86],[.8,.98,.78],[.7,.86,.92],[1.14,1.06,.72],[.92,.9,.94],[1.06,.86,.8]],U_=new G("#8a8580"),N_=new G("#5f5c5e");function ds(i,t,e,n){let s=dn(n),r=i.getAttribute("position"),o=new R;for(let a=0;a<r.count;a++){o.fromBufferAttribute(r,a);let l=1+t*ye(s,o.x*e+3,o.z*e-2,2);r.setXYZ(a,o.x*l,o.y*(1+t*.6*ye(s,o.z*e,o.y*e,2)),o.z*l)}return i.computeVertexNormals(),i}function Zs(i,t,e,n,s){let r=i.getAttribute("position"),o=i.getAttribute("color"),a=new G;for(let l=0;l<r.count;l++){let c=Un((r.getY(l)-n)/(s-n||1),0,1);a.copy(t).lerp(e,c*c),o.setXYZ(l,o.getX(l)*a.r,o.getY(l)*a.g,o.getZ(l)*a.b)}return i}function F_(i){let t=[];xt(t,new qt(.012,.021,.22,6),jl,{pos:[0,.11,0]});let e=[[.15,.118],[.212,.098],[.268,.076],[.316,.05]];for(let[s,r]of e){let o=new se(r,10,7);ds(o,.12,7,Math.floor(i()*1e6)),xt(t,o,C_,{pos:[(i()-.5)*.05,s,(i()-.5)*.05],scale:[1.15,.3,1.15],rot:[0,i()*3,0]})}let n=Te(t);return Zs(n,new G("#1d3a33"),new G("#8fc0a0"),.06,.36)}function O_(i){let t=[],e=15+(i()*9|0);for(let s=0;s<e;s++){let r=i()*Math.PI*2,o=i()*.075,a=Math.cos(r)*o,l=Math.sin(r)*o,c=.4+i()*.34,h=(i()-.5)*.12,d=(i()-.5)*.1,u=3;for(let x=0;x<u;x++){let m=x/u,f=(x+1)/u,y=c*m,v=c*f,b=D=>h*D*D;xt(t,new qt(.0048,.0062,v-y,5),I_,{pos:[a+b((m+f)/2),(y+v)/2,l+d*(m+f)/2],rot:[0,0,0]}),xt(t,new qt(.0066,.0066,.007,5),D_,{pos:[a+b(f),v,l+d*f]})}let p=a+h,g=l+d;for(let x=0;x<3;x++){let m=x/3*Math.PI*2+i();xt(t,new ge(.078,.005,.02),L_,{pos:[p+Math.cos(m)*.034,c+.008-x*.007,g+Math.sin(m)*.034],rot:[0,-m,.28+x*.08]})}}let n=Te(t);return Zs(n,new G("#3c5a38"),new G("#b6cd86"),.05,.72)}function B_(i){let t=[];xt(t,new qt(.013,.02,.15,6),jl,{pos:[0,.075,0]});let e=[[0,.245,0,.125,.95],[.062,.205,.03,.086,.9],[-.055,.215,-.04,.09,.9],[.008,.305,-.01,.072,.85]];for(let[s,r,o,a,l]of e){let c=new Ln(a,1);ds(c,.12,7,Math.floor(i()*1e6)),xt(t,c,P_,{pos:[s,r,o],scale:[1,l,1]})}let n=Te(t);return Zs(n,new G("#8a5a63"),new G("#ffd8e2"),.1,.4)}function z_(i){let t=[];xt(t,new qt(.014,.024,.16,6,1),jl,{pos:[0,.08,0]});let e=[[.2,.105,.24],[.34,.082,.21],[.45,.056,.19]];for(let s=0;s<e.length;s++){let[r,o,a]=e[s],l=new fe(o,a,12,1);ds(l,.05,6,Math.floor(i()*1e6)),xt(t,l,R_,{pos:[0,r+a*.28,0],rot:[0,i()*3,0]})}let n=Te(t);return Zs(n,new G("#24402f"),new G("#8fb877"),.12,.62)}function H_(i){let t=[];for(let n=0;n<3;n++){let s=.055+i()*.035,r=new Ln(s,1);ds(r,.16,8,Math.floor(i()*1e6)),xt(t,r,A_,{pos:[(i()-.5)*.09,.035+s*.75,(i()-.5)*.09],scale:[1,.78,1]})}let e=Te(t);return Zs(e,new G("#26401f"),new G("#a8cc7d"),0,.16)}function k_(i){let t=[];for(let n=0;n<4;n++){let s=n/4*Math.PI*2+i()*.9,r=.032+i()*.03,o=.007+i()*.004,a=.014+i()*.016,l=Math.cos(s),c=Math.sin(s),h=-c,d=l,u=(i()-.5)*.028,p=(i()-.5)*.028,g=[u+h*o,0,p+d*o],x=[u-h*o,0,p-d*o],m=[u+l*a,r,p+c*a],f=new Zt;f.setAttribute("position",new Nt([...g,...x,...m],3)),f.setAttribute("normal",new Nt([0,1,0,0,1,0,0,1,0],3)),f.setAttribute("uv",new Nt([0,0,1,0,.5,1],2));let y=new G("#40632f"),v=new G("#b7d97e"),b=[];for(let[D,T]of[[0,y],[0,y],[1,v]])b.push(T.r,T.g,T.b);f.setAttribute("color",new Nt(b,3)),t.push(wn(f,y))}return Te(t)}function V_(i){let t=new Ln(.075,1);ds(t,.22,7,Math.floor(i()*1e6));let e=[wn(t,U_)],n=new Ln(.04,0);return ds(n,.4,15,Math.floor(i()*1e6)),xt(e,n,N_,{pos:[.06,.01,.03],rot:[.4,1.2,.2]}),Te(e)}function G_(){let i=[];for(let t=0;t<4;t++){let e=t/4*Math.PI*2;xt(i,new Ln(.0085,0),new G("#ffffff"),{pos:[Math.cos(e)*.016,.012+t%2*.008,Math.sin(e)*.016]})}return Te(i)}function ci(i,t,e,{cast:n=!0,receive:s=!0}={}){let r=new on(i,t,e.length),o=new Yt,a=new Re,l=new R,c=new R,h=new G;for(let d=0;d<e.length;d++){let u=e[d];c.set(u.x,u.y,u.z),a.setFromEuler(new Le(u.rx||0,u.ry||0,u.rz||0)),l.set(u.s*(u.sx||1),u.s*(u.sy||1),u.s*(u.sz||1)),o.compose(c,a,l),r.setMatrixAt(d,o),u.tint&&(h.setRGB(u.tint[0],u.tint[1],u.tint[2]),r.setColorAt(d,h))}return r.instanceMatrix.needsUpdate=!0,r.instanceColor&&(r.instanceColor.needsUpdate=!0),r.castShadow=n,r.receiveShadow=s,r.frustumCulled=!1,r}function uu(i,t={}){let e=t.exclude||[],n=(it,X)=>e.some(Y=>Math.hypot(it-Y.x,X-Y.z)<Y.r),s=Ri(9137),r=dn(4242),o=dn(8181),a=i.lake;function l(it,X){let Y=ze(ye(r,it*.6,X*.6,3)),O=te(.4,.76,Y),Q=i.lakeDist(it,X);return O*=te(a.r*.95,a.r*1.8,Q),O}let c={coast:0,water:0,high:0,slope:0,channel:0,density:0,spacing:0,ok:0},h={pine:[],conifer:[],shrub:[],blossom:[]},d=[],u=660;for(let it=0;it<14e4&&d.length<u;it++){let X=s()*Math.PI*2,Y=Math.sqrt(s())*4.62,O=Math.cos(X)*Y,Q=Math.sin(X)*Y;if(n(O,Q))continue;if(Math.hypot(O,Q)>i.coastR(O,Q)-.13){c.coast++;continue}let gt=i.sampleY(O,Q);if(gt<a.y+.03){c.water++;continue}if(gt>1.55){c.high++;continue}if(i.slopeFast(O,Q)>1.75){c.slope++;continue}if(i.channel(O,Q).d<.36){c.channel++;continue}let ct=Math.max(l(O,Q),te(.8,1.3,gt)*.45);if(s()>ct*.95){c.density++;continue}let z=!0;for(let pt of d){let bt=pt[0]-O,Rt=pt[1]-Q;if(bt*bt+Rt*Rt<.058){z=!1;break}}if(!z){c.spacing++;continue}c.ok++,d.push([O,Q,gt]);let $=s(),ft=hu[s()*hu.length|0],ot=.8+s()*.45,Et=[ft[0]*ot,ft[1]*ot,ft[2]*ot];$<.15?h.blossom.push({x:O,y:gt-.02,z:Q,s:1.4+s()*.7,ry:s()*6.28,tint:Et}):gt>1.05&&$<.52?h.conifer.push({x:O,y:gt-.02,z:Q,s:1+s()*.7,ry:s()*6.28,tint:Et}):$<.66?h.shrub.push({x:O,y:gt-.01,z:Q,s:1.2+s()*1,ry:s()*6.28,tint:Et}):h.pine.push({x:O,y:gt-.02,z:Q,s:1.35+s()*.9,ry:s()*6.28,sx:.92+s()*.2,sz:.92+s()*.2,tint:Et})}let p=[],g=12e3;for(let it=0;it<9e4&&p.length<g;it++){let X=s()*Math.PI*2,Y=Math.sqrt(s())*4.55,O=Math.cos(X)*Y,Q=Math.sin(X)*Y;if(n(O,Q)||Math.hypot(O,Q)>i.coastR(O,Q)-.015)continue;let gt=i.sampleY(O,Q);if(gt<a.y+.035||gt>1.35||i.slopeFast(O,Q)>1.5||i.channel(O,Q).d<.3)continue;let ct=1-.72*l(O,Q),z=.45+.55*ze(ye(o,O*2.3,Q*2.3,3)),$=1+1.6*te(.55,.05,i.coastR(O,Q)-Math.hypot(O,Q));s()>Math.min(1,ct*z*$)||p.push({x:O,y:gt-.004,z:Q,s:.75+s()*.6,ry:s()*6.28,tint:[.82+s()*.45,.88+s()*.3,.72+s()*.34]})}let x=[],m=dn(6161);for(let it=0;it<24e3&&x.length<58;it++){let X=s()*Math.PI*2,Y=Math.sqrt(s())*3.95,O=Math.cos(X)*Y,Q=Math.sin(X)*Y;if(n(O,Q))continue;let gt=i.sampleY(O,Q);if(gt<a.y+.05||gt>1.25||i.slopeFast(O,Q)>1.25||i.channel(O,Q).d<.45||ze(ye(m,O*.78+13,Q*.78-7,3))<.53)continue;let ct=!0;for(let z of x)if((z.x-O)**2+(z.z-Q)**2<.075){ct=!1;break}ct&&x.push({x:O,y:gt-.012,z:Q,s:.85+s()*.42,ry:s()*6.28,tint:[.9+s()*.2,.92+s()*.18,.84+s()*.2]})}let f=[];for(let it=0;it<18e3&&f.length<110;it++){let X=s()*Math.PI*2,Y=Math.sqrt(s())*4.5,O=Math.cos(X)*Y,Q=Math.sin(X)*Y,gt=i.sampleY(O,Q);if(gt<a.y-.02||i.channel(O,Q).d<.26)continue;let ct=i.slopeFast(O,Q),z=te(.75,1.5,gt);if(s()>.1+z*.32+ct*.05)continue;let $=gt>1?.5+s()*1.1:.5+s()*1.3;f.push({x:O,y:gt-.01,z:Q,s:$,rx:s()*.7,ry:s()*6.28,rz:s()*.7,tint:[.8+s()*.4,.8+s()*.4,.82+s()*.35]})}let y=[],v=["#f4e7c8","#f0c6d8","#d8c8f2","#ffe9a8","#f6d2c0"];for(let it=0;it<22e3&&y.length<300;it++){let X=s()*Math.PI*2,Y=Math.sqrt(s())*4.35,O=Math.cos(X)*Y,Q=Math.sin(X)*Y,gt=i.sampleY(O,Q);if(gt<a.y+.06||gt>1||i.slopeFast(O,Q)>.9||i.channel(O,Q).d<.34||l(O,Q)>.45)continue;let ct=new G(v[s()*v.length|0]);y.push({x:O,y:gt,z:Q,s:.7+s()*.7,ry:s()*6.28,tint:[ct.r,ct.g,ct.b]})}let b=new _e({vertexColors:!0,roughness:.82,metalness:0,envMapIntensity:.62}),D=new _e({vertexColors:!0,roughness:.9,metalness:0,side:ne,envMapIntensity:.4}),T=new _e({vertexColors:!0,roughness:.95,metalness:0,flatShading:!0,envMapIntensity:.35}),w=new _e({vertexColors:!0,roughness:.6,metalness:0,emissive:new G(1709064),emissiveIntensity:.35,envMapIntensity:.5}),I=new oe;I.name="flora";let F=ci(F_(s),b,h.pine),_=ci(B_(s),b,h.blossom),M=ci(z_(s),b,h.conifer),C=ci(H_(s),b,h.shrub),N=ci(k_(s),D,p,{cast:!1}),B=ci(O_(s),b,x),et=ci(V_(s),T,f),W=ci(G_(),w,y,{cast:!1});return F.name="trees-pine",_.name="trees-blossom",M.name="trees-conifer",C.name="shrubs",N.name="grass",B.name="bamboo",et.name="rocks",W.name="flowers",I.add(F,_,M,C,B,N,et,W),{group:I,rej:c,counts:{pine:h.pine.length,blossom:h.blossom.length,conifer:h.conifer.length,shrub:h.shrub.length,grass:p.length,bamboo:x.length,rocks:f.length,flowers:y.length}}}var Ql=new G("#b4885d"),fu=new G("#7d5c3f"),tc=new G("#e6d8c0"),go=new G("#cfbfa8"),Hx=new G("#efece2"),kx=new G("#cfd3d8"),Vx=new G("#a8adb6");function W_(){let i=[];xt(i,new se(.072,12,9),Ql,{pos:[0,.135,0],scale:[1.45,.95,.9]}),xt(i,new qt(.024,.032,.1,7),Ql,{pos:[.088,.192,0],rot:[0,0,-.62]}),xt(i,new se(.034,10,8),Ql,{pos:[.128,.232,0],scale:[1.15,.92,.86]});for(let t of[-1,1])xt(i,new fe(.012,.042,6),fu,{pos:[.118,.262,.026*t],rot:[.5*t,0,-.25]});for(let t of[-1,1])xt(i,new qt(.004,.0055,.075,5),tc,{pos:[.132,.285,.017*t],rot:[.22*t,0,-.32]}),xt(i,new qt(.003,.004,.042,5),tc,{pos:[.155,.315,.03*t],rot:[.5*t,0,.55]});for(let t of[-1,1])for(let e of[-1,1])xt(i,new qt(.0105,.0085,.118,6),fu,{pos:[.052*t,.059,.036*e]});return xt(i,new fe(.016,.045,6),tc,{pos:[-.108,.152,0],rot:[0,0,1.9]}),Te(i)}function X_(){let i=[];xt(i,new se(.03,10,8),go,{pos:[0,.03,0],scale:[1.25,.95,.92]}),xt(i,new se(.021,9,7),go,{pos:[.032,.048,0]});for(let t of[-1,1])xt(i,new fe(.0085,.04,6),go,{pos:[.03,.076,.012*t],rot:[.16*t,0,-.16]}),xt(i,new se(.013,7,6),go,{pos:[-.031,.024,.014*t]});return Te(i)}function Y_(){let i=[],t=new G("#f6f7f2"),e=new G("#2b2f36"),n=new G("#c0392b"),s=new G("#4a4a4e");xt(i,new se(.03,12,9),t,{scale:[2.05,.78,.72]}),xt(i,new qt(.0085,.012,.055,7),t,{pos:[.058,.03,0],rot:[0,0,-.85]}),xt(i,new qt(.0072,.0085,.05,7),t,{pos:[.079,.068,0],rot:[0,0,-.22]}),xt(i,new se(.0135,10,8),t,{pos:[.083,.094,0],scale:[1.25,.95,.9]}),xt(i,new se(.0062,8,6),n,{pos:[.082,.104,0]}),xt(i,new fe(.0045,.026,6),e,{pos:[.101,.092,0],rot:[0,0,-1.57]});for(let r of[-1,1])xt(i,new qt(.0026,.0022,.085,5),s,{pos:[-.062,-.012,.012*r],rot:[0,0,1.32]}),xt(i,new qt(.0021,.0018,.04,5),s,{pos:[-.104,-.02,.014*r],rot:[0,0,1.57]});for(let r of[-1,1]){let o=new Zt,a=[.022,.006,.014*r],l=[-.03,.002,.016*r],c=[-.048,.034,.125*r],h=[.006,.038,.115*r];o.setAttribute("position",new Nt([...a,...l,...c,...a,...c,...h],3)),o.setAttribute("normal",new Nt([0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0],3)),o.setAttribute("uv",new Nt([0,0,1,0,1,1,0,0,1,1,0,1],2)),i.push(wn(o,t));let d=new Zt,u=[-.048,.034,.125*r],p=[.006,.038,.115*r],g=[-.02,.04,.17*r],x=[.004,.042,.16*r];d.setAttribute("position",new Nt([...u,...p,...g,...p,...x,...g],3)),d.setAttribute("normal",new Nt([0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0],3)),d.setAttribute("uv",new Nt([0,0,1,0,1,1,0,0,1,1,0,1],2)),i.push(wn(d,e))}return Te(i)}function ec(i,t){return t>0?-(i+Math.PI/2):-(i-Math.PI/2)}function du(i,t,e){let n=new on(i,t,e.length);return n.frustumCulled=!1,n.castShadow=!0,n.receiveShadow=!0,n}function pu(i,t={}){let e=Ri(20260214),n=t.obstacles||[],s=(F,_)=>{for(let M of n){let C=F-M.x,N=_-M.z,B=Math.hypot(C,N);if(B<M.r){if(B<1e-4)return[M.x+M.r,_];let et=M.r/B;return[M.x+C*et,M.z+N*et]}}return[F,_]},r=new oe;r.name="fauna";let o=new _e({vertexColors:!0,roughness:.78,metalness:0,envMapIntensity:.45}),a=[{cx:1.82,cz:.92,r:.58,spd:.16,n:3,dir:1},{cx:-.38,cz:1.34,r:.5,spd:-.13,n:2,dir:-1}],l=[];for(let F of a)for(let _=0;_<F.n;_++)l.push({...F,phase:_/F.n*Math.PI*2+e()*.6,rr:F.r*(.72+e()*.5),scale:.52+e()*.14,speedJit:.85+e()*.3});let c=du(W_(),o,l);c.name="deer",r.add(c);let h=[],d=[{cx:2.62,cz:-.06,r:.48},{cx:-.7,cz:.32,r:.4},{cx:1.47,cz:1.98,r:.44}];for(let F of d)for(let _=0;_<3;_++)h.push({...F,phase:e()*Math.PI*2,rr:F.r*(.6+e()*.6),scale:.5+e()*.22,speed:(.36+e()*.3)*(e()>.5?1:-1),hopJit:e()*6.28});let u=du(X_(),o,h);u.name="rabbits",r.add(u);let p={value:0},g=new _e({vertexColors:!0,roughness:.7,metalness:0,envMapIntensity:.5});g.onBeforeCompile=F=>{F.uniforms.uTime=p,F.vertexShader=`uniform float uTime;
attribute float aPhase;
`+F.vertexShader,F.vertexShader=F.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
       float flap = sin(uTime * 5.4 + aPhase * 6.2831);
       float w = clamp(abs(position.z) / 0.170, 0.0, 1.0);
       // \u7FFC\u6CBF \xB1z \u5C55\u5F00,\u7ED5\u8EAB\u4F53\u8F74(x)\u4E0A\u4E0B\u6247;\u4E0A\u6325\u65F6\u7565\u5FAE\u6536\u62E2
       transformed.y += flap * w * w * 0.115;
       transformed.z -= sign(position.z) * abs(flap) * w * 0.012;`)},g.customProgramCacheKey=()=>"bird-flap";let x=16,m=Y_(),f=new Float32Array(x);for(let F=0;F<x;F++)f[F]=e();m.setAttribute("aPhase",new Zn(f,1));let y=new on(m,g,x);y.frustumCulled=!1,y.name="cranes",r.add(y);let v=[];for(let F=0;F<x;F++)v.push({r:1.9+e()*1.7,y:2.95+e()*1.35,spd:(.1+e()*.1)*(e()>.35?1:-1),phase:e()*Math.PI*2,bob:.1+e()*.16,scale:.8+e()*.3,cx:(e()-.5)*.6,cz:(e()-.5)*.6});let b=new Yt,D=new Re,T=new Le,w=new R,I=new R;return{group:r,update(F,_){p.value=F;for(let M=0;M<l.length;M++){let C=l[M],N=C.phase+F*C.spd*C.speedJit*6,B=C.cx+Math.cos(N)*C.rr,et=C.cz+Math.sin(N)*C.rr;[B,et]=s(B,et);let W=i.sampleY(B,et),it=Math.sin(F*2.6+C.phase)*.004;w.set(B,W-.022+it,et),T.set(0,ec(N,Math.sign(C.spd)||1),0),D.setFromEuler(T),I.setScalar(C.scale),b.compose(w,D,I),c.setMatrixAt(M,b)}c.instanceMatrix.needsUpdate=!0;for(let M=0;M<h.length;M++){let C=h[M],N=C.phase+F*C.speed*.55,B=C.cx+Math.cos(N)*C.rr,et=C.cz+Math.sin(N)*C.rr;[B,et]=s(B,et);let W=i.sampleY(B,et),it=Math.max(0,Math.sin(F*5.2+C.hopJit))*.022;w.set(B,W-.016+it,et),T.set(-it*5,ec(N,Math.sign(C.speed)||1),0),D.setFromEuler(T),I.setScalar(C.scale),b.compose(w,D,I),u.setMatrixAt(M,b)}u.instanceMatrix.needsUpdate=!0;for(let M=0;M<x;M++){let C=v[M],N=C.phase+F*C.spd*1.6,B=C.cx+Math.cos(N)*C.r,et=C.cz+Math.sin(N)*C.r,W=C.y+Math.sin(F*1.3+C.phase*3)*C.bob;w.set(B,W,et),T.set(0,ec(N,Math.sign(C.spd)||1),Math.sin(F*1.3+C.phase*3)*.12),D.setFromEuler(T),I.setScalar(C.scale),b.compose(w,D,I),y.setMatrixAt(M,b)}y.instanceMatrix.needsUpdate=!0}}}var q_=`
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
`,Z_=`
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
`;function K_(i){return .45+.55*i.dayFactor}function $_(i,t){let e=[{x:-3.05,y:3.95,z:-.3,s:1.5,n:12,spd:.03,rad:1.45},{x:3.25,y:4.15,z:1.6,s:1.3,n:12,spd:-.024,rad:1.2},{x:-3.6,y:2.6,z:2.15,s:1.05,n:10,spd:.036,rad:1.15},{x:2.25,y:3.1,z:-3.15,s:1,n:10,spd:-.03,rad:1.1},{x:1.55,y:4.72,z:-1.05,s:1,n:9,spd:.024,rad:.85},{x:-1.05,y:4.55,z:3.3,s:.9,n:9,spd:-.02,rad:.95},{x:4.2,y:2.25,z:-2.55,s:.8,n:8,spd:.042,rad:.85},{x:-4.3,y:1.95,z:-1.6,s:.72,n:8,spd:.028,rad:.7}],n=[];for(let x=0;x<e.length;x++){let m=e[x];for(let f=0;f<m.n;f++){let y=i()*2-1,v=i()*Math.PI*2,b=Math.pow(i(),.55),D=Math.sqrt(1-y*y),T=Math.cos(v)*D*b,w=Math.sin(v)*D*b*.62,I=y*b*.34,F=m.s*(.78+i()*.55)*(1-.22*b);n.push({cloud:x,ox:T*m.s*1.05,oy:I*m.s*.62,oz:w*m.s*1.05,rad:F,tint:Math.min(1,.34+.78*(.5+I*.9)+i()*.14),seed:i(),phase:i()*6.28})}}let s=new je(1,1),r=new Float32Array(n.length),o=new Float32Array(n.length);n.forEach((x,m)=>{r[m]=x.tint,o[m]=x.seed}),s.setAttribute("aTint",new Zn(r,1)),s.setAttribute("aSeed",new Zn(o,1));let a=new ie({uniforms:{uMap:{value:po(256,31,1,.42,.7)},uLit:{value:new G("#ffffff")},uShade:{value:new G("#5b6a86")},uOpacity:{value:.2}},vertexShader:q_,fragmentShader:Z_,transparent:!0,depthWrite:!1,blending:En}),l=new on(s,a,n.length);l.frustumCulled=!1,l.renderOrder=4,l.name="clouds",t.add(l);let c=new Yt,h=new R,d=new G,u=new G,p=new G("#ffffff"),g=new G("#20263a");return{mesh:l,mat:a,update(x,m){for(let f=0;f<n.length;f++){let y=n[f],v=e[y.cloud],b=v.spd*x*2+y.cloud*1.37,D=Math.sin(x*.26+y.cloud*1.7+y.phase*.15)*.1;h.set(v.x+Math.cos(b)*v.rad+y.ox,v.y+D+y.oy,v.z+Math.sin(b*.83+y.cloud*2)*v.rad+y.oz),c.makeScale(y.rad,y.rad,y.rad),c.setPosition(h),l.setMatrixAt(f,c)}l.instanceMatrix.needsUpdate=!0,d.copy(m.sun).lerp(p,.7).multiplyScalar(.55+.55*m.dayFactor),u.copy(m.hemiSky).lerp(g,.3).multiplyScalar(.72+.34*K_(m)),a.uniforms.uLit.value.copy(d),a.uniforms.uShade.value.copy(u)}}}function mu(i,t){let e=Ri(777777),n=new oe;n.name="atmos";let s=$_(e,n),r=po(256,91,1,.85,1),o=[],a=(ct,z,$,ft,ot,Et={})=>{let pt=new Ht(new je(ft,ft),new Be({map:r,transparent:!0,opacity:.3,depthWrite:!1,blending:En,side:ne,color:14674677}));return pt.position.set(ct,z,$),pt.rotation.x=-Math.PI/2,pt.rotation.z=ot,pt.renderOrder=5,pt.userData={baseOpacity:Et.baseOpacity??.22,spin:Et.spin??.02,billboard:!1,y:z,bobAmp:Et.bobAmp??.03,bobPhase:e()*6.28},o.push(pt),n.add(pt),pt},l=i.lake,c=po(512,707,1,.75,1.6),h=[],d=[[-1.95,9.4,.3,.01],[-2.55,9.2,.38,-.007],[-3.15,8,.34,.013],[-3.75,8.8,.26,-.011],[-4.35,6.8,.16,.008]];for(let[ct,z,$,ft]of d){let ot=new Ht(new je(z,z),new Be({map:c,transparent:!0,opacity:$,depthWrite:!1,blending:En,side:ne,color:15267570}));ot.rotation.x=-Math.PI/2,ot.position.set(0,ct,0),ot.renderOrder=4,ot.userData={baseOpacity:$,spin:ft,y:ct,bobAmp:.05,bobPhase:e()*6.28},n.add(ot),h.push(ot)}a(0,-2.95,0,6.4,.6,{baseOpacity:.15,spin:.007,bobAmp:.045}),a(0,-3.75,0,5,2.4,{baseOpacity:.1,spin:-.01,bobAmp:.05});let u=new Ht(new je(1.8,2.1),new Be({map:r,transparent:!0,opacity:.4,depthWrite:!1,blending:En,side:ne,color:15267583}));u.position.set(i.fall.x+i.fall.dx*.5,i.fall.bottomY+.85,i.fall.z+i.fall.dz*.5),u.renderOrder=6,u.userData={baseOpacity:.3,spin:0,billboard:!0,y:u.position.y,bobAmp:.06,bobPhase:1.7},o.push(u),n.add(u);let p=160,g=new Float32Array(p*3),x=new Float32Array(p),m=new Float32Array(p),f=i.fall;for(let ct=0;ct<p;ct++){let z=e()*Math.PI*2,$=Math.pow(e(),.6)*.42;g[ct*3]=f.x+f.dx*.32+Math.cos(z)*$,g[ct*3+1]=f.bottomY+.22,g[ct*3+2]=f.z+f.dz*.32+Math.sin(z)*$,x[ct]=e(),m[ct]=1.6+e()*3}let y=new Zt;y.setAttribute("position",new jt(g,3)),y.setAttribute("aPhase",new jt(x,1)),y.setAttribute("aSize",new jt(m,1));let v=new ie({uniforms:{uTime:{value:0},uOpacity:{value:.5},uScale:{value:1},uRise:{value:.62},uMap:{value:Kn(64)},uColor:{value:new G("#eaf7ff")}},vertexShader:`
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
      }`,transparent:!0,blending:Ze,depthWrite:!1}),b=new Dn(y,v);b.frustumCulled=!1,b.name="fall-splash",n.add(b);let D=Kh(64,256),T=new oe;T.name="light-shafts";let w=[];for(let ct=0;ct<4;ct++){let z=ct/4*Math.PI*2+.31,$=1.5+ct%3*1.05,ft=1.3+ct%2*.7,ot=5.2+ct%4*.8,Et=new Ht(new je(ft,ot),new Be({map:D,transparent:!0,opacity:.02,depthWrite:!1,blending:Ze,side:ne}));Et.position.set(Math.cos(z)*$,2.6+ct%3*.25,Math.sin(z)*$),Et.userData={a:z,base:.01+ct%3*.005},T.add(Et),w.push(Et)}n.add(T);let I=700,F=new Float32Array(I*3),_=new Float32Array(I),M=new Float32Array(I);for(let ct=0;ct<I;ct++)F[ct*3]=(e()-.5)*10.6,F[ct*3+1]=-4.2+e()*9.6,F[ct*3+2]=(e()-.5)*10.6,_[ct]=e(),M[ct]=.7+e()*1.6;let C=new Zt;C.setAttribute("position",new jt(F,3)),C.setAttribute("aPhase",new jt(_,1)),C.setAttribute("aSize",new jt(M,1));let N=new ie({uniforms:{uTime:{value:0},uOpacity:{value:.4},uScale:{value:1},uMap:{value:Kn(64)},uColor:{value:new G("#f6e6c8")}},vertexShader:`
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
      }`,transparent:!0,blending:Ze,depthWrite:!1}),B=new Dn(C,N);B.frustumCulled=!1,B.name="dust",n.add(B);let et=120,W=new Float32Array(et*3),it=new Float32Array(et),X=new Float32Array(et);for(let ct=0;ct<et;ct++){let z=e()*Math.PI*2,$=Math.sqrt(e())*3.8,ft=Math.cos(z)*$,ot=Math.sin(z)*$;W[ct*3]=ft,W[ct*3+1]=i.sampleY(ft,ot)+.05+e()*.5,W[ct*3+2]=ot,it[ct]=e(),X[ct]=1.6+e()*2.6}let Y=new Zt;Y.setAttribute("position",new jt(W,3)),Y.setAttribute("aPhase",new jt(it,1)),Y.setAttribute("aSize",new jt(X,1));let O=new ie({uniforms:{uTime:{value:0},uOpacity:{value:0},uScale:{value:1},uMap:{value:Kn(64)},uColor:{value:new G("#ffd98a")}},vertexShader:`
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
      }`,transparent:!0,blending:Ze,depthWrite:!1}),Q=new Dn(Y,O);Q.frustumCulled=!1,Q.name="fireflies",n.add(Q);let gt=new G("#ffffff");return{group:n,update(ct,z,$,ft){let ot=ft&&ft.pixelRatio||1;s.update(ct,z);for(let pt of o){let bt=pt.userData;bt.billboard&&$?pt.quaternion.copy($.quaternion):bt.billboard||(pt.rotation.z=bt.spin*ct),pt.position.y=bt.y+Math.sin(ct*.45+bt.bobPhase)*(bt.bobAmp||.03),pt.material.opacity=bt.baseOpacity*(.3+.85*z.mist),pt.material.color.copy(z.hemiSky).lerp(gt,.6)}for(let pt of h){let bt=pt.userData;pt.rotation.z=bt.spin*ct,pt.position.y=bt.y+Math.sin(ct*.22+bt.bobPhase)*bt.bobAmp,pt.material.opacity=bt.baseOpacity*(.55+.85*z.mist),pt.material.color.copy(z.hemiSky).lerp(new G("#ffffff"),.66)}let Et=Math.atan2(z.sunDir.z,z.sunDir.x);for(let pt of w){if($){let bt=$.position.x-pt.position.x,Rt=$.position.z-pt.position.z;pt.rotation.y=Math.atan2(bt,Rt)+Math.sin(ct*.12+pt.userData.a)*.06}pt.rotation.z=.05*Math.sin(pt.userData.a*1.7+ct*.07)+(Et-2.4)*.04,pt.material.opacity=pt.userData.base*(.2+1*z.dayFactor)*(.6+.4*Math.sin(ct*.5+pt.userData.a*3)),pt.material.color.copy(z.sun).lerp(gt,.45)}v.uniforms.uTime.value=ct,v.uniforms.uOpacity.value=.3+.35*(.35+.65*z.dayFactor),v.uniforms.uScale.value=ot*2.2,v.uniforms.uRise.value=.55+.25*(1-z.nightFactor),N.uniforms.uTime.value=ct,N.uniforms.uOpacity.value=.06+.3*(.35+.65*z.dayFactor),N.uniforms.uScale.value=ot*1.9,N.uniforms.uColor.value.copy(z.sun).lerp(gt,.55),O.uniforms.uTime.value=ct,O.uniforms.uOpacity.value=z.firefly,O.uniforms.uScale.value=ot*2.6,Q.visible=z.firefly>.02}}}var kt={stone:new G("#8f958c"),stoneDark:new G("#6d7269"),pillar:new G("#8e3b32"),beam:new G("#6b2b26"),roof:new G("#2f6b62"),roofRidge:new G("#1f4a44"),gold:new G("#d9a94a"),goldRoof:new G("#c9a04a"),paper:new G("#ffdca0"),rail:new G("#7e857c")};function gu(i){let t=[];xt(t,new qt(.115*1.18,.115*1.26,.026,6),kt.stone,{pos:[0,.013,0]}),xt(t,new qt(.115*1.1,.115*1.18,.018,6),kt.stoneDark,{pos:[0,.035,0]});for(let n=0;n<6;n++){let s=n/6*Math.PI*2+.26;xt(t,new qt(.0072,.0082,.098,6),kt.pillar,{pos:[Math.cos(s)*.115,.093,Math.sin(s)*.115]}),xt(t,new qt(.0092,.0092,.006,6),kt.gold,{pos:[Math.cos(s)*.115,.142,Math.sin(s)*.115]})}return xt(t,new qt(.115*1.06,.115*1.06,.012,6,1,!0),kt.beam,{pos:[0,.152,0]}),xt(t,new fe(.115*1.62,.052,6),kt.roof,{pos:[0,.186,0],rot:[0,.26,0]}),xt(t,new fe(.115*1.02,.048,6),kt.roof,{pos:[0,.222,0],rot:[0,.26,0]}),xt(t,new fe(.115*.52,.04,6),kt.roofRidge,{pos:[0,.252,0],rot:[0,.26,0]}),xt(t,new se(.016,8,6),kt.gold,{pos:[0,.282,0]}),xt(t,new fe(.008,.028,6),kt.gold,{pos:[0,.302,0]}),t}function J_(i){let t=[];xt(t,new qt(.098,.112,.028,8),kt.stone,{pos:[0,.014,0]});let e=.028,n=[[.07,.105,.115],[.058,.09,.098],[.046,.076,.082]];for(let[s,r,o]of n)xt(t,new qt(s,s*1.04,r,8),kt.beam,{pos:[0,e+r/2,0]}),xt(t,new fe(o,.03,8),kt.roof,{pos:[0,e+r+.014,0]}),xt(t,new qt(o*.96,o*.96,.006,8),kt.roofRidge,{pos:[0,e+r+.002,0]}),e+=r+.03;return xt(t,new se(.014,8,6),kt.gold,{pos:[0,e+.006,0]}),xt(t,new fe(.007,.034,6),kt.gold,{pos:[0,e+.028,0]}),t}function j_(i,t,e=.046){let n=[],r=c=>[(c-.5)*i,Math.sin(c*Math.PI)*t],o=[],a=[];for(let c=0;c<=18;c++){let[h,d]=r(c/18);for(let u of[-1,1])o.push(h,d,e*u)}for(let c=0;c<18;c++){let h=c*2;a.push(h,h+2,h+1,h+1,h+2,h+3)}let l=new Zt;l.setAttribute("position",new Nt(o,3)),l.setIndex(a),l.computeVertexNormals(),n.push(wn(l,kt.stone));for(let c of[-1,1]){let h=[],d=[];for(let p=0;p<=18;p++){let[g,x]=r(p/18),m=c*(e+.002);h.push(g,x+.026,m,g,x-.004,m)}for(let p=0;p<18;p++){let g=p*2;d.push(g,g+2,g+1,g+1,g+2,g+3)}let u=new Zt;u.setAttribute("position",new Nt(h,3)),u.setIndex(d),u.computeVertexNormals(),n.push(wn(u,kt.rail))}for(let c of[-1,1]){let[h]=r(.5+.34*c);xt(n,new ge(.034,.085,e*2.4),kt.stoneDark,{pos:[h,t*.35-.045,0]})}return n}function Q_(){let i=[];xt(i,new qt(.2,.23,.036,8),kt.stone,{pos:[0,.018,0]}),xt(i,new qt(.185,.2,.024,8),kt.stoneDark,{pos:[0,.048,0]}),xt(i,new qt(.128,.138,.115,8),kt.pillar,{pos:[0,.117,0]});for(let t=0;t<8;t++){let e=t/8*Math.PI*2+.2;xt(i,new qt(.0075,.0085,.125,6),kt.beam,{pos:[Math.cos(e)*.148,.122,Math.sin(e)*.148]})}return xt(i,new qt(.168,.168,.012,8),kt.beam,{pos:[0,.182,0]}),xt(i,new fe(.245,.062,8),kt.goldRoof,{pos:[0,.218,0],rot:[0,.2,0]}),xt(i,new qt(.2,.2,.01,8),kt.roofRidge,{pos:[0,.196,0]}),xt(i,new qt(.098,.104,.07,8),kt.pillar,{pos:[0,.276,0]}),xt(i,new fe(.165,.056,8),kt.goldRoof,{pos:[0,.336,0],rot:[0,.2,0]}),xt(i,new fe(.07,.048,8),kt.roofRidge,{pos:[0,.372,0],rot:[0,.2,0]}),xt(i,new se(.02,8,6),kt.gold,{pos:[0,.4,0]}),xt(i,new fe(.01,.042,6),kt.gold,{pos:[0,.428,0]}),i}function tx(){let i=[],t=[-.155,-.052,.052,.155];for(let e of t)xt(i,new ge(.026,.014,.026),kt.stoneDark,{pos:[e,.007,0]});for(let e of t)xt(i,new qt(.0085,.0095,.175,7),kt.pillar,{pos:[e,.1015,0]});xt(i,new ge(.362,.012,.02),kt.beam,{pos:[0,.17,0]}),xt(i,new ge(.362,.008,.016),kt.beam,{pos:[0,.132,0]}),xt(i,new ge(.086,.026,.01),kt.gold,{pos:[0,.15,.011]}),xt(i,new fe(.108,.04,4),kt.roof,{pos:[0,.198,0],rot:[0,.785,0]}),xt(i,new ge(.15,.01,.03),kt.roofRidge,{pos:[0,.179,0]});for(let e of[-1,1])xt(i,new fe(.058,.028,4),kt.roof,{pos:[.1035*e,.186,0],rot:[0,.785,0]}),xt(i,new ge(.082,.008,.024),kt.roofRidge,{pos:[.1035*e,.171,0]});return xt(i,new se(.01,8,6),kt.gold,{pos:[0,.222,0]}),i}function ex(i,t,e,n){let s=[];for(let r=0;r<=n;r++){let o=r/n,a=Math.sin(o*Math.PI*2.2)*.1*(1-Math.abs(o-.5)*.6),l=t[0]+(e[0]-t[0])*o+a,c=t[1]+(e[1]-t[1])*o-a*.7,h=i.sampleY(l,c),d=i.sampleY(t[0]+(e[0]-t[0])*Math.min(1,o+.02)+a,t[1]+(e[1]-t[1])*Math.min(1,o+.02)-a*.7),u=Math.atan2(d-h,.09);xt(s,new ge(.052,.012,.04),r%2?kt.stone:kt.stoneDark,{pos:[l,h+.006,c],rot:[u*.55,0,0]})}return Te(s)}function nx(){let i=[];return xt(i,new ge(.03,.01,.03),kt.stoneDark,{pos:[0,.005,0]}),xt(i,new qt(.008,.01,.038,6),kt.stone,{pos:[0,.029,0]}),xt(i,new ge(.026,.022,.026),kt.stone,{pos:[0,.059,0]}),xt(i,new fe(.024,.016,4),kt.stoneDark,{pos:[0,.078,0],rot:[0,.78,0]}),Te(i)}function ix(i,t){let e=new Ln(t,1),n=e.attributes.position,s=new R;for(let r=0;r<n.count;r++){s.fromBufferAttribute(n,r);let o=1+.34*Math.sin(s.x*9+s.z*7)*Math.cos(s.y*8);n.setXYZ(r,s.x*o,s.y*o*.82,s.z*o)}return e.computeVertexNormals(),wn(e,kt.stoneDark)}function ps(i,t,e,n,s,r,o){let a=new oe,l=o!==void 0?o:n.sampleY(t,e),c=Te(i);return s!==1&&c.scale(s,s,s),r&&c.rotateY(r),c.translate(t,l-.006,e),a.add(new Ht(c,new _e({vertexColors:!0,roughness:.72,metalness:.02,envMapIntensity:.55,side:ne}))),a.userData.anchor=new R(t,l,e),a}function _o(i,t,e,n=.6){let s=i.lake.y,r=null;for(let o=0;o<=.85;o+=.06){for(let a=0;a<14;a++){let l=a/14*Math.PI*2+o*3.1,c=t+Math.cos(l)*o,h=e+Math.sin(l)*o;if(Math.hypot(c,h)>i.coastR(c,h)-.25)continue;let d=i.sampleY(c,h);if(!(d<s+.1)&&!(i.channel(c,h).d<.42)&&!(i.slopeFast(c,h)>n)&&!(i.lakeDist(c,h)<i.lake.r*1.15))return{x:c,z:h,h:d}}if(r)break}return{x:t,z:e,h:i.sampleY(t,e)}}function _u(i){let t=()=>.5,e=new oe;e.name="architecture";let n=[],s=[],r=[],o=gu(t),a=_o(i,2.55,1.05),l=[a.x,a.z],c=ps(o,l[0],l[1],i,2,-.7);e.add(c),n.push(c.userData.anchor),s.push({x:l[0],z:l[1],r:.33});let h=J_(t),d=_o(i,-1.3,1.55,.9),u=[d.x,d.z],p=ps(h,u[0],u[1],i,1.85,.35);e.add(p),n.push(p.userData.anchor),s.push({x:u[0],z:u[1],r:.3});let g=j_(.58,.095),x=i.rivers[1],m=Math.floor(x.N*.3),f=x.pts[m],y=x.pts[Math.min(x.N,m+1)],v=Math.atan2(y.z-f.z,y.x-f.x)+Math.PI/2,b=[f.x,f.z],D=ps(g,b[0],b[1],i,1.6,-v,f.y+.075);e.add(D),n.push(D.userData.anchor);let T=f.y+.075+.095*1.6,w=.58*1.6*.5,I=Math.cos(-v),F=Math.sin(-v);s.push({x:f.x-I*w,z:f.z-F*w,r:.16}),s.push({x:f.x+I*w,z:f.z+F*w,r:.16}),r.push({x:f.x,y:T,z:f.z,ry:-v+Math.PI/2});let _={h:-9,x:0,z:0};for(let bt=0;bt<2.3;bt+=.07)for(let Rt=0;Rt<Math.PI*2;Rt+=.16){let Tt=Math.cos(Rt)*bt,P=Math.sin(Rt)*bt,Wt=i.sampleY(Tt,P);Wt>_.h&&(_={h:Wt,x:Tt,z:P})}let M=ps(Q_(),_.x,_.z,i,2,.4);e.add(M),n.push(M.userData.anchor),s.push({x:_.x,z:_.z,r:.52});let C=_o(i,_.x*1.05+1.35,_.z*1.05+1.15,1.6),N=ex(i,[C.x,C.z],[_.x*.92,_.z*.92],46),B=new Ht(N,new _e({vertexColors:!0,roughness:.85,metalness:0,envMapIntensity:.45,side:ne}));B.name="stairs",e.add(B);let et=Math.atan2(_.z-C.z,_.x-C.x)+Math.PI/2,W=ps(tx(),C.x,C.z,i,1.35,-et);e.add(W),n.push(W.userData.anchor),s.push({x:C.x,z:C.z,r:.26});let it=_o(i,2.55,2.05,.9),X=ps(gu(t),it.x,it.z,i,1.6,1.1);e.add(X),n.push(X.userData.anchor),s.push({x:it.x,z:it.z,r:.3});let Y=[],O=[[3.9,1.9,-2.6,.26],[-3.6,2.5,2.4,.2],[2.2,3.4,-4,.17],[-4.4,1.3,-.6,.15],[.4,4,4.2,.13]];for(let[bt,Rt,Tt,P]of O){let Wt=new Ht(ix(t,P),new _e({vertexColors:!0,roughness:.95,metalness:0,flatShading:!0,envMapIntensity:.35}));Wt.position.set(bt,Rt,Tt),Wt.userData={y0:Rt,ph:t()*6.28},e.add(Wt),Y.push(Wt)}let Q=new _e({color:16769968,emissive:new G("#ffb457"),emissiveIntensity:1.2,roughness:.55,metalness:0}),gt=[],ct=(bt,Rt,Tt,P)=>{let Wt=new Ht(new se(P,10,8),Q);Wt.position.set(bt,Rt,Tt),Wt.scale.set(1,1.18,1),e.add(Wt),gt.push(Wt)},z=i.sampleY(l[0],l[1]);for(let bt=0;bt<4;bt++){let Rt=bt/4*Math.PI*2+.9;ct(l[0]+Math.cos(Rt)*.24,z+.27,l[1]+Math.sin(Rt)*.24,.03)}let $=i.sampleY(u[0],u[1]);ct(u[0],$+.25,u[1]+.2,.028);let ft=nx(),ot=[],Et=[];for(let bt=3;bt<=44;bt+=7){let Rt=bt/46,Tt=Math.sin(Rt*Math.PI*2.2)*.1*(1-Math.abs(Rt-.5)*.6),P=C.x+(_.x*.92-C.x)*Rt+Tt,Wt=C.z+(_.z*.92-C.z)*Rt-Tt*.7;for(let zt of[-1,1]){let Xt=P+.055*zt,Lt=Wt+.045*zt,ee=i.sampleY(Xt,Lt)-.004,Ut=ft.clone();Ut.translate(Xt,ee,Lt),ot.push(Ut),Et.push([Xt,ee+.062,Lt])}}if(ot.length){let bt=Te(ot),Rt=new Ht(bt,new _e({vertexColors:!0,roughness:.85,envMapIntensity:.4,side:ne}));Rt.name="stone-lanterns",e.add(Rt);let Tt=new on(new se(.01,8,6),Q,Et.length),P=new Yt;Et.forEach((Wt,zt)=>{P.makeTranslation(Wt[0],Wt[1],Wt[2]),Tt.setMatrixAt(zt,P)}),Tt.instanceMatrix.needsUpdate=!0,Tt.frustumCulled=!1,Tt.name="stone-lantern-glow",e.add(Tt)}let pt=(bt,Rt,Tt,P)=>{let Wt=bt+Math.cos(P)*Tt,zt=Rt+Math.sin(P)*Tt;r.push({x:Wt,y:i.sampleY(Wt,zt),z:zt,ry:Math.PI/2-P})};return pt(l[0],l[1],.62,Math.PI*.25),pt(_.x,_.z,.6,Math.PI*.25),pt(C.x,C.z,.45,Math.PI*.875),{group:e,anchors:n,obstacles:s,standSpots:r,update(bt,Rt){for(let Tt of Y)Tt.position.y=Tt.userData.y0+Math.sin(bt*.55+Tt.userData.ph)*.1,Tt.rotation.y=bt*.08+Tt.userData.ph;Q.emissiveIntensity=.25+2.2*Rt.nightFactor,Q.emissive.copy(Rt.rim).lerp(new G("#ff9a3c"),.65)}}}var nc=new G("#eef2ea"),sx=new G("#c2cfc4"),xu=new G("#4f8a72"),rx=new G("#e8cdb4"),vu=new G("#2b2a2c"),ox=new G("#6b5a45");function yu(i,t){let e=[];xt(e,new qt(.016,.038,.105,8,1,!0),nc,{pos:[0,.053,0]}),xt(e,new qt(.036,.04,.01,8),sx,{pos:[0,.006,0]}),xt(e,new qt(.022,.026,.052,8),nc,{pos:[0,.13,0]}),xt(e,new qt(.0235,.0235,.008,8),xu,{pos:[0,.108,0]});for(let n of[-1,1])xt(e,new fe(.017,.055,6),nc,{pos:[.024*n,.118,0],rot:[0,0,.55*n]});return xt(e,new se(.0175,10,8),rx,{pos:[0,.171,0]}),xt(e,new se(.0135,8,6),vu,{pos:[0,.18,-.004],scale:[1,.8,1]}),xt(e,new se(.008,6,5),vu,{pos:[0,.192,-.006]}),t&&(xt(e,new qt(.0032,.0032,.2,5),ox,{pos:[.04,.1,.008]}),xt(e,new se(.0095,8,6),xu,{pos:[.04,.196,.008],scale:[.8,1,.8]})),Te(e)}function Mu(i,t=[]){let e=()=>.5,n=new oe;n.name="immortals";let s=t.slice(0,6).map((u,p)=>({spot:u,x:u.x,y:u.y,z:u.z,ry:u.ry,staff:p%2===0,ph:p*1.7}));if(!s.length)return{group:n,count:0,update(){}};let r=[{geo:yu(e,!0),list:s.filter(u=>u.staff)},{geo:yu(e,!1),list:s.filter(u=>!u.staff)}],o=new _e({vertexColors:!0,roughness:.68,metalness:0,envMapIntensity:.6,side:ne}),a=new Yt,l=new Re,c=new Le,h=new R,d=new R(1,1,1);for(let u of r)u.list.length&&(u.mesh=new on(u.geo,o,u.list.length),u.mesh.frustumCulled=!1,u.mesh.castShadow=!0,n.add(u.mesh),u.list.forEach((p,g)=>{p.mesh=u.mesh,p.slot=g}));return{group:n,count:s.length,setSpot(u,p){let g=s[u];g&&(p.x!==void 0&&(g.x=p.x),p.y!==void 0&&(g.y=p.y),p.z!==void 0&&(g.z=p.z),p.ry!==void 0&&(g.ry=p.ry,g.spot.ry=p.ry),g.spot.x=g.x,g.spot.z=g.z)},update(u){for(let p of r)p.mesh&&(p.list.forEach((g,x)=>{h.set(g.x,g.y-.004+Math.sin(u*.6+g.ph)*.005,g.z),c.set(0,g.ry,0),l.setFromEuler(c),a.compose(h,l,d),p.mesh.setMatrixAt(x,a)}),p.mesh.instanceMatrix.needsUpdate=!0)}}}var xo={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var ln=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},ax=new In(-1,1,1,-1,0,1),ic=class extends Zt{constructor(){super(),this.setAttribute("position",new Nt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Nt([0,2,0,0,2,0],2))}},lx=new ic,hi=class{constructor(t){this._mesh=new Ht(lx,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,ax)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var $n=class extends ln{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof ie?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=li.clone(t.uniforms),this.material=new ie({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new hi(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Ks=class extends ln{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){let s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},vo=class extends ln{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var yo=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let n=t.getSize(new _t);this._width=n.width,this._height=n.height,e=new Fe(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:an}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new $n(xo),this.copyPass.material.blending=Pn,this.clock=new as}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());let e=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),o.needsSwap){if(n){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Ks!==void 0&&(o instanceof Ks?n=!0:o instanceof vo&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new _t);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Mo=class extends ln{constructor(t,e,n=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new G}render(t,e,n){let s=t.autoClear;t.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=s}};var Eu={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new G(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var ms=class i extends ln{constructor(t,e,n,s){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new _t(t.x,t.y):new _t(256,256),this.clearColor=new G(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Fe(r,o,{type:an}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let d=0;d<this.nMips;d++){let u=new Fe(r,o,{type:an});u.texture.name="UnrealBloomPass.h"+d,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);let p=new Fe(r,o,{type:an});p.texture.name="UnrealBloomPass.v"+d,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),r=Math.round(r/2),o=Math.round(o/2)}let a=Eu;this.highPassUniforms=li.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new ie({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let d=0;d<this.nMips;d++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[d])),this.separableBlurMaterials[d].uniforms.invSize.value=new _t(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new R(1,1,1),new R(1,1,1),new R(1,1,1),new R(1,1,1),new R(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=xo;this.copyUniforms=li.clone(h.uniforms),this.blendMaterial=new ie({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:Ze,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new G,this.oldClearAlpha=1,this.basic=new Be,this.fsQuad=new hi(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new _t(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=o}getSeperableBlurMaterial(t){let e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new ie({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new _t(.5,.5)},direction:{value:new _t(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(t){return new ie({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}};ms.BlurDirectionX=new _t(1,0);ms.BlurDirectionY=new _t(0,1);var bu={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var Eo=class extends ln{constructor(){super();let t=bu;this.uniforms=li.clone(t.uniforms),this.material=new no({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new hi(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},re.getTransfer(this._outputColorSpace)===ue&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Dl?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Ll?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Ul?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Xs?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Nl?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Fl&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Su={name:"FXAAShader",uniforms:{tDiffuse:{value:null},resolution:{value:new _t(1/1024,1/512)}},vertexShader:`

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
	`};var Tu=`
varying vec2 vUv;
void main(){
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,wu={name:"TiltShiftShader",uniforms:{tDiffuse:{value:null},uTexel:{value:new _t(1/1280,1/800)},uDir:{value:new _t(1,0)},uAmount:{value:6.5},uFocus:{value:.53},uBand:{value:.135},uFeather:{value:.3}},vertexShader:Tu,fragmentShader:`
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
  `},cx={name:"FilmShader",uniforms:{tDiffuse:{value:null},uResolution:{value:new _t(1280,800)},uTime:{value:0},uGrain:{value:.032},uAberration:{value:.0022},uVignette:{value:1}},vertexShader:Tu,fragmentShader:`
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
  `};function Au(i,t,e,n={}){let s=n.width||1280,r=n.height||800,o=n.pixelRatio||1,a=new yo(i);a.setPixelRatio(o),a.setSize(s,r);let l=new _t(s*o,r*o),c=new Mo(t,e);a.addPass(c);let h=new $n(wu);h.uniforms.uDir.value.set(1,0),a.addPass(h);let d=new $n(wu);d.uniforms.uDir.value.set(0,1),a.addPass(d);let u=new ms(l,.5,.72,.82);a.addPass(u);let p=new Eo;a.addPass(p);let g=new $n(Su);a.addPass(g);let x=new $n(cx);a.addPass(x);let m={enabled:n.enabled!==!1,tilt:!1,bloomOn:!0,filmOn:!0,aa:!0};function f(){h.enabled=m.tilt,d.enabled=m.tilt,g.enabled=m.aa,u.enabled=m.bloomOn,x.enabled=m.filmOn}return f(),{composer:a,renderPass:c,bloom:u,tiltH:h,tiltV:d,fxaa:g,film:x,output:p,state:m,toggle(y){return y==="post"&&(m.enabled=!m.enabled),y==="tilt"&&(m.tilt=!m.tilt),y==="bloom"&&(m.bloomOn=!m.bloomOn),y==="film"&&(m.filmOn=!m.filmOn),y==="aa"&&(m.aa=!m.aa),f(),m},setSize(y,v,b){b&&a.setPixelRatio(b),a.setSize(y,v);let D=b||a.pixelRatio||1;u.setSize(y*D,v*D);let T=i.getDrawingBufferSize(new _t);h.uniforms.uTexel.value.set(1/T.x,1/T.y),d.uniforms.uTexel.value.set(1/T.x,1/T.y),x.uniforms.uResolution.value.set(T.x,T.y),g.material.uniforms.resolution.value.set(1/T.x,1/T.y);let w=Math.max(.55,Math.min(1.6,T.y/900));h.uniforms.uAmount.value=4.6*w,d.uniforms.uAmount.value=4.6*w},update(y,v){u.strength=v.bloom,u.threshold=.78-.18*v.nightFactor,u.radius=.66+.2*v.nightFactor,x.uniforms.uTime.value=y},render(y){m.enabled?a.render(y):i.render(t,e)}}}function Ru(){let i=document.getElementById("hud"),t=document.getElementById("hud-phase"),e=document.getElementById("hud-clock"),n=document.getElementById("hud-bar-fill"),s=document.getElementById("hud-stats"),r=document.getElementById("veil"),o=!0,a="",l=-1;return{setPhase(c,h,d){if(t&&t.textContent!==c&&(t.textContent=c),n){let u=Math.round(h*500)/500;u!==l&&(n.style.transform=`scaleX(${u.toFixed(3)})`,l=u)}if(e&&d!==void 0){let u=Math.floor(d)%24,p=Math.floor(d%1*60),g=`${String(u).padStart(2,"0")}:${String(p).padStart(2,"0")}`;e.textContent!==g&&(e.textContent=g)}},setStats(c){s&&c!==a&&(s.textContent=c,a=c)},hideStats(){s&&(s.style.display="none")},toggle(){return o=!o,i&&(i.style.opacity=o?"1":"0"),o},ready(){r&&(r.classList.add("gone"),setTimeout(()=>{r.parentNode&&r.parentNode.removeChild(r)},1400))},fail(c){r&&(r.classList.remove("gone"),r.innerHTML=`<div class="veil-inner"><div class="veil-title">\u65E0\u6CD5\u6E32\u67D3</div><div class="veil-sub">${c}</div></div>`)}}}var Me=new URLSearchParams(location.search);Me.set("freeze","1");Me.set("post","0");Me.set("refl","0");var $s=(i,t)=>Me.has(i)?parseFloat(Me.get(i)):t,Cu=i=>Me.get(i)==="1"||Me.get(i)==="true",hx=10,bo=17.6,ux=52;function fx(){let i=Ru(),t=document.getElementById("scene"),e=new Yr({canvas:t,antialias:!0,alpha:!1,stencil:!1,powerPreference:"high-performance"}),n=$s("dpr",Math.min(window.devicePixelRatio||1,1.35));e.setPixelRatio(n),e.setSize(window.innerWidth,window.innerHeight,!1),e.shadowMap.enabled=Me.get("shadow")!=="0",e.shadowMap.type=Il,e.toneMapping=Xs,e.toneMappingExposure=1,e.outputColorSpace=Ye;let s=new qr;s.background=new G("#03050b");let r=new In(-1,1,1,-1,-400,700),o=new R(1,.98,1).normalize(),a=new R(0,-.18,0);r.position.copy(o).multiplyScalar(26).add(a),r.lookAt(a);let l=new is(e);l.compileEquirectangularShader();let c=$h(512,256),h=l.fromEquirectangular(c);s.environment=h.texture,s.environmentIntensity=1,c.dispose(),l.dispose();let d=Zh();d.apply($s("t",.3));let u=new os(16777215,3);u.castShadow=!0,u.shadow.mapSize.set(2048,2048),u.shadow.camera.near=1,u.shadow.camera.far=60,u.shadow.camera.left=-5.2,u.shadow.camera.right=5.2,u.shadow.camera.top=5.2,u.shadow.camera.bottom=-5.2,u.shadow.bias=-5e-4,u.shadow.normalBias=.055,u.shadow.camera.updateProjectionMatrix(),s.add(u),s.add(u.target);let p=new os(13623551,1);p.position.set(-9,11,-10),s.add(p);let g=new os(10336511,0);s.add(g);let x=new so(10337248,3814440,.8);s.add(x);let m=new ro(11189213,.4);s.add(m);let f={},y=new Map;f.sky=jh(),s.add(f.sky.group),y.set("sky",f.sky.group);let v=iu();f.glass=Qh(hx,{physical:Me.get("glass")==="phys"}),s.add(f.glass.group),y.set("glass",f.glass.group),Me.get("glass")!=="1"&&(f.glass.group.visible=!1),s.add(v.group),y.set("island",v.group);let b=Jh({scene:s,planeY:v.lake.y,scale:.5}),D=Me.get("refl")!=="0";f.water=cu(v,d,D?b:null),s.add(f.water.group),y.set("water",f.water.group),b.exclude(f.water.group),b.exclude(f.glass.group),b.install(e),f.architecture=_u(v),s.add(f.architecture.group),y.set("architecture",f.architecture.group);let T=f.architecture.anchors.map(Z=>({x:Z.x,z:Z.z,r:.34}));if(f.flora=uu(v,{exclude:T}),s.add(f.flora.group),y.set("flora",f.flora.group),f.fauna=pu(v,{obstacles:f.architecture.obstacles}),s.add(f.fauna.group),y.set("fauna",f.fauna.group),f.immortals=Mu(v,f.architecture.standSpots),s.add(f.immortals.group),y.set("immortals",f.immortals.group),f.atmos=mu(v,d),s.add(f.atmos.group),y.set("atmos",f.atmos.group),y.set("mist",f.atmos.group),Me.get("flat")==="1"){let Z=v.group.getObjectByName("terrain");Z.material.vertexColors=!1,Z.material.color.set(10132122),Z.material.flatShading=Me.get("flatshade")==="1",Z.material.needsUpdate=!0}let w=Me.get("dbg");w==="refl"?f.water.uniforms.uDbg.value=1:w&&(f.water.uniforms.uDbg.value=parseFloat(w)||0);let I=Me.get("only"),F=(Me.get("hide")||"").split(",").filter(Boolean);if(I)for(let[Z,rt]of y)rt.visible=Z===I;for(let Z of F){let rt=y.get(Z);rt&&(rt.visible=!1)}let _=new uo(r,e.domElement);_.target.copy(a),_.enableDamping=!0,_.dampingFactor=.06,_.enablePan=!1,_.minPolarAngle=.55,_.maxPolarAngle=1.44,_.minZoom=.6,_.maxZoom=4,_.rotateSpeed=.42,_.zoomSpeed=.7,_.autoRotateSpeed=.3,_.autoRotate=!Cu("freeze"),_.update();let M=$s("zoom",1);if(M!==1&&(r.zoom=M,r.updateProjectionMatrix()),Me.get("ui")==="0"){let Z=document.getElementById("hud");Z&&(Z.style.display="none")}let C=new Ne(64,window.innerWidth/window.innerHeight,.012,400),N=-1,B=0,et=-.1,W=.042,it=$s("eye",.176),X=0,Y=0,O=null,Q=document.getElementById("pov-panel"),gt=f.architecture.standSpots;function ct(){let Z=N>=0&&gt[N];if(_.enabled=!Z,_.autoRotate=!Z&&!Tt,Z){let U=gt[N];B=Math.atan2(U.x,U.z),et=-Math.min(.8,.14+.2*(U.y+it)),O={x:U.x,y:U.y,z:U.z},X=0,Y=0,$()}Q&&Q.classList.toggle("on",!!Z);let rt=document.getElementById("hud-pov");rt&&(rt.textContent=Z?`\u4ED9\u4EBA\u89C6\u89D2 ${N+1}/${gt.length} \xB7 \u62D6\u52A8\u8F6C\u5934 \xB7 V \u5207\u6362 \xB7 ESC \u9000\u51FA`:"",rt.style.opacity=Z?"1":"0")}function z(){if(!O)return null;let Z=O.x+X,rt=O.z+Y,U=O.y-v.sampleY(O.x,O.z);return{x:Z,y:v.sampleY(Z,rt)+U,z:rt}}function $(){let Z=document.getElementById("pp-eye"),rt=document.getElementById("pp-dx"),U=document.getElementById("pp-dz");Z&&(Z.value=String(it),document.getElementById("pp-eye-v").textContent=it.toFixed(3),rt.value=String(X),document.getElementById("pp-dx-v").textContent=X.toFixed(2),U.value=String(Y),document.getElementById("pp-dz-v").textContent=Y.toFixed(2))}function ft(){N=N+1>=gt.length?-1:N+1,ct()}let ot=null;e.domElement.addEventListener("pointerdown",Z=>{N<0||(ot={x:Z.clientX,y:Z.clientY},e.domElement.setPointerCapture(Z.pointerId))}),e.domElement.addEventListener("pointermove",Z=>{!ot||N<0||(B-=(Z.clientX-ot.x)*.004,et=Math.max(-1.2,Math.min(.9,et-(Z.clientY-ot.y)*.003)),ot={x:Z.clientX,y:Z.clientY})}),e.domElement.addEventListener("pointerup",()=>{ot=null}),e.domElement.addEventListener("wheel",Z=>{N<0||(C.fov=Math.max(28,Math.min(95,C.fov+Math.sign(Z.deltaY)*3)),C.updateProjectionMatrix())});let Et=Au(e,s,r,{width:window.innerWidth,height:window.innerHeight,pixelRatio:n,enabled:Me.get("post")!=="0"});function pt(){let Z=window.innerWidth,rt=window.innerHeight,U=Z/rt;r.left=-bo*U/2,r.right=bo*U/2,r.top=bo/2,r.bottom=-bo/2,r.updateProjectionMatrix(),C.aspect=U,C.updateProjectionMatrix(),e.setSize(Z,rt,!1);let K=e.getPixelRatio();Et.setSize(Z,rt,K),f.water.resizeReflection(Z,rt)}window.addEventListener("resize",pt),pt();let bt=Cu("freeze"),Rt=$s("t",.3),Tt=bt,P=0;window.addEventListener("keydown",Z=>{if(document.body.dataset.expedition!=="true"){if(Z.code==="Space")Tt=!Tt,_.autoRotate=!Tt,Z.preventDefault();else if(Z.key==="h"||Z.key==="H")i.toggle();else if(Z.key==="r"||Z.key==="R")r.position.copy(o).multiplyScalar(26).add(a),r.zoom=1,r.updateProjectionMatrix(),_.target.copy(a),_.update();else if(Z.key==="1")Rt=.03;else if(Z.key==="2")Rt=.25;else if(Z.key==="3")Rt=.45;else if(Z.key==="4")Rt=.67;else if(Z.key==="5")Rt=.9;else if(Z.key==="p"||Z.key==="P")Et.toggle("post");else if(Z.key==="b"||Z.key==="B")Et.toggle("bloom");else if(Z.key==="f"||Z.key==="F")Et.toggle("tilt");else if(Z.key==="a"||Z.key==="A")Et.toggle("aa");else if(Z.key==="g"||Z.key==="G")f.glass.group.visible=!f.glass.group.visible;else if(Z.key==="v"||Z.key==="V")ft();else if(Z.key==="Escape"&&N>=0)N=-1,ct(),Z.preventDefault();else if(N>=0){let rt=Z.shiftKey?.05:.01,U=!0;if(Z.key==="ArrowLeft")X-=rt;else if(Z.key==="ArrowRight")X+=rt;else if(Z.key==="ArrowUp")Y-=rt;else if(Z.key==="ArrowDown")Y+=rt;else if(Z.key==="[")it=Math.max(.02,it-.005);else if(Z.key==="]")it=Math.min(.6,it+.005);else if(Z.key==="c"||Z.key==="C"){let K=O?z():null,k=K?`[\u4ED9\u4EBA] index=${N+1} x=${K.x.toFixed(3)} y=${K.y.toFixed(3)} z=${K.z.toFixed(3)} eye=${it.toFixed(3)}`:"[\u4ED9\u4EBA] \u672A\u8FDB\u5165\u89C6\u89D2";console.log(k);let tt=document.getElementById("hud-pov");tt&&(tt.textContent=k)}else U=!1;U&&(Z.preventDefault(),$())}}});let Wt=new as,zt=0,Xt=0,Lt=0,ee=!1,Ut=new R,A=new R;function E(){d.apply(Rt),e.toneMappingExposure=d.exposure,Ut.copy(d.sunDir),Ut.y<.14&&(Ut.y=.14+(.14-Ut.y)*.32,Ut.normalize()),u.position.copy(Ut).multiplyScalar(24),u.target.position.set(0,-.3,0),u.target.updateMatrixWorld(),u.color.copy(d.sun),u.intensity=d.sunI*(.72+.28*d.dayFactor),A.copy(d.moonDir).multiplyScalar(22),g.position.copy(A),g.position.y=Math.max(g.position.y,6),g.color.set("#9db8ff"),g.intensity=d.moonI*1.5,p.color.copy(d.rim),p.intensity=d.rimI,x.color.copy(d.hemiSky),x.groundColor.copy(d.hemiGround).lerp(new G("#6b6552"),.45),x.intensity=d.hemiI*1.18,m.color.copy(d.amb),m.intensity=d.ambI*1.15}e.info.autoReset=!1,window.__frames=0;let q=()=>N>=0&&gt[N]?C:r;window.__povCamera=C;let at=Hh({scene:s,camera:r,renderer:e,controls:_,island:v}),mt=0;function st(Z=0){if(document.hidden||Z-mt<1e3/30){requestAnimationFrame(st);return}mt=Z,e.info.reset();let rt=Wt.getDelta(),U=Math.min(rt,.05);if(P+=U,Tt||(Rt=(Rt+U/ux)%1),E(),N>=0&&gt[N]&&O){let K=z();f.immortals.setSpot(N,{x:K.x,y:K.y,z:K.z});let k=Math.sin(P*.6+N)*.004;C.position.set(K.x-Math.sin(B)*W,K.y+it+k,K.z-Math.cos(B)*W),C.rotation.set(et,B,0,"YXZ"),Et.renderPass.camera=C}else Et.renderPass.camera!==r&&(Et.renderPass.camera=r),_.enabled&&_.update(U);if(f.sky.update(P,d),f.glass.update(d,P,r),f.water.update(P,d),f.fauna.update(P,d),f.architecture.update(P,d),f.immortals.update(P),f.atmos.update(P,d,r,{pixelRatio:e.getPixelRatio()}),Et.update(P,d),at.update(P,U),f.water.renderReflection(e,q()),Et.render(U),window.__frames++,i.setPhase(d.label,Rt,d.hour),zt++,Xt+=rt,Xt>.5&&(Lt=Math.round(zt/Xt),zt=0,Xt=0,Me.has("debug"))){let K=e.info.render,k=Lt>=10?String(Lt):Lt>=1?Lt.toFixed(1):"<1";i.setStats(`${k} fps \xB7 ${K.calls} calls/frame \xB7 ${(K.triangles/1e3).toFixed(0)}k tri`)}ee||(ee=!0,window.__worldReady=!0,i.ready()),requestAnimationFrame(st)}if(window.__worldStats=()=>{e.info.autoReset=!0,e.render(s,r);let Z={...e.info.render};return e.info.autoReset=!1,e.info.reset(),{calls:Z.calls,triangles:Z.triangles,programs:e.info.programs?e.info.programs.length:-1,flora:f.flora.counts,rej:f.flora.rej,camera:{zoom:r.zoom,pos:r.position.toArray().map(rt=>+rt.toFixed(2))},timeOfDay:+Rt.toFixed(3),phase:d.label}},window.__world={scene:s,camera:r,renderer:e,pal:d,parts:f,island:v,post:Et,controls:_,setTime:Z=>{Rt=Z,Tt=!0,_.autoRotate=!1}},Q){let Z=(rt,U)=>{let K=document.getElementById(rt);K&&K.addEventListener("input",()=>{U(parseFloat(K.value)),$()})};Z("pp-eye",rt=>{it=rt}),Z("pp-dx",rt=>{X=rt}),Z("pp-dz",rt=>{Y=rt})}if(Me.get("pov")==="1"&&(N=0,ct()),Me.has("debug")?i.setStats("\u2026"):i.hideStats(),Me.has("pick")){let Z=new ls,rt=new _t;e.domElement.addEventListener("pointerdown",U=>{let K=e.domElement.getBoundingClientRect();rt.set((U.clientX-K.left)/K.width*2-1,-((U.clientY-K.top)/K.height)*2+1),Z.setFromCamera(rt,q());let k=(lt,vt)=>{let St=lt;for(;St;){if(St===vt)return!0;St=St.parent}return!1},tt=Z.intersectObjects(s.children,!0).filter(lt=>lt.object.visible).filter(lt=>lt.object.isMesh).filter(lt=>!k(lt.object,f.glass.group)&&!k(lt.object,f.sky.group)).filter(lt=>!k(lt.object,f.atmos.group)).slice(0,3),ht=lt=>{let vt=lt.face?` n=(${lt.face.normal.x.toFixed(2)}, ${lt.face.normal.y.toFixed(2)}, ${lt.face.normal.z.toFixed(2)})`:"";return`${lt.object.name||lt.object.type} p=(${lt.point.x.toFixed(2)}, ${lt.point.y.toFixed(2)}, ${lt.point.z.toFixed(2)})${vt}`},dt=tt.length?"[pick] "+tt.map(ht).join("  |  "):"[pick] \u6CA1\u6253\u5230";console.log(dt),i.setStats(dt)})}requestAnimationFrame(st)}try{fx()}catch(i){window.__worldError=String(i&&i.stack?i.stack:i);let t=document.getElementById("veil");t&&(t.innerHTML=`<div class="veil-inner"><div class="veil-title">\u521D\u59CB\u5316\u5931\u8D25</div><div class="veil-sub">${String(i.message||i)}</div></div>`),console.error(i)}})();
/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
