var Yf=0,Lh=1,Zf=2;var Ea=1,Jf=2,cr=3,di=0,Ge=1,wn=2,An=0,cs=1,zi=2,Dh=3,Nh=4,$f=5;var Ni=100,Kf=101,Qf=102,jf=103,td=104,ed=200,nd=201,id=202,sd=203,Bo=204,zo=205,rd=206,ad=207,od=208,ld=209,cd=210,hd=211,ud=212,fd=213,dd=214,ko=0,Vo=1,Go=2,hs=3,Ho=4,Wo=5,Xo=6,qo=7,El=0,pd=1,md=2,zn=0,wa=1,Aa=2,Ca=3,ms=4,Ra=5,Pa=6,Ia=7;var Uh=300,ki=301,gs=302,wl=303,Al=304,La=306,Yo=1e3,Yn=1001,Zo=1002,Be=1003,gd=1004;var Da=1005;var ke=1006,Cl=1007;var Vi=1008;var on=1009,Fh=1010,Oh=1011,hr=1012,Rl=1013,kn=1014,Cn=1015,Ze=1016,Pl=1017,Il=1018,ur=1020,Bh=35902,zh=35899,kh=1021,Vh=1022,Rn=1023,$n=1026,Gi=1027,Ll=1028,Dl=1029,Hi=1030,Nl=1031;var Ul=1033,Na=33776,Ua=33777,Fa=33778,Oa=33779,Fl=35840,Ol=35841,Bl=35842,zl=35843,kl=36196,Vl=37492,Gl=37496,Hl=37488,Wl=37489,Ba=37490,Xl=37491,ql=37808,Yl=37809,Zl=37810,Jl=37811,$l=37812,Kl=37813,Ql=37814,jl=37815,tc=37816,ec=37817,nc=37818,ic=37819,sc=37820,rc=37821,ac=36492,oc=36494,lc=36495,cc=36283,hc=36284,za=36285,uc=36286;var Wr=2300,Jo=2301,Oo=2302,vh=2303,yh=2400,Mh=2401,Sh=2402;var _d=3200;var ka=0,xd=1,xi="",tn="srgb",Xr="srgb-linear",qr="linear",ie="srgb";var as=7680;var bh=519,vd=512,yd=513,Md=514,fc=515,Sd=516,bd=517,dc=518,Td=519,$o=35044;var Gh="300 es",On=2e3,Js=2001;function A0(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function C0(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Yr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Ed(){let s=Yr("canvas");return s.style.display="block",s}var pf={},$s=null;function Zr(...s){let t="THREE."+s.shift();$s?$s("log",t,...s):console.log(t,...s)}function wd(s){let t=s[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=s[1];e&&e.isStackTrace?s[0]+=" "+e.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function Bt(...s){s=wd(s);let t="THREE."+s.shift();if($s)$s("warn",t,...s);else{let e=s[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...s)}}function zt(...s){s=wd(s);let t="THREE."+s.shift();if($s)$s("error",t,...s);else{let e=s[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...s)}}function ls(...s){let t=s.join(" ");t in pf||(pf[t]=!0,Bt(...s))}function Ad(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var Cd={[ko]:Vo,[Go]:Xo,[Ho]:qo,[hs]:Wo,[Vo]:ko,[Xo]:Go,[qo]:Ho,[Wo]:hs},Kn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let i=n[t];if(i!==void 0){let r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,t);t.target=null}}},qe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],mf=1234567,kr=Math.PI/180,Ks=180/Math.PI;function Jn(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(qe[s&255]+qe[s>>8&255]+qe[s>>16&255]+qe[s>>24&255]+"-"+qe[t&255]+qe[t>>8&255]+"-"+qe[t>>16&15|64]+qe[t>>24&255]+"-"+qe[e&63|128]+qe[e>>8&255]+"-"+qe[e>>16&255]+qe[e>>24&255]+qe[n&255]+qe[n>>8&255]+qe[n>>16&255]+qe[n>>24&255]).toLowerCase()}function jt(s,t,e){return Math.max(t,Math.min(e,s))}function Hh(s,t){return(s%t+t)%t}function R0(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function P0(s,t,e){return s!==t?(e-s)/(t-s):0}function Vr(s,t,e){return(1-e)*s+e*t}function I0(s,t,e,n){return Vr(s,t,1-Math.exp(-e*n))}function L0(s,t=1){return t-Math.abs(Hh(s,t*2)-t)}function D0(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function N0(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function U0(s,t){return s+Math.floor(Math.random()*(t-s+1))}function F0(s,t){return s+Math.random()*(t-s)}function O0(s){return s*(.5-Math.random())}function B0(s){s!==void 0&&(mf=s);let t=mf+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function z0(s){return s*kr}function k0(s){return s*Ks}function V0(s){return(s&s-1)===0&&s!==0}function G0(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function H0(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function W0(s,t,e,n,i){let r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),h=a((t+n)/2),f=r((t-n)/2),u=a((t-n)/2),d=r((n-t)/2),g=a((n-t)/2);switch(i){case"XYX":s.set(o*h,l*f,l*u,o*c);break;case"YZY":s.set(l*u,o*h,l*f,o*c);break;case"ZXZ":s.set(l*f,l*u,o*h,o*c);break;case"XZX":s.set(o*h,l*g,l*d,o*c);break;case"YXY":s.set(l*d,o*h,l*g,o*c);break;case"ZYZ":s.set(l*g,l*d,o*h,o*c);break;default:Bt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Fn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function re(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var pc={DEG2RAD:kr,RAD2DEG:Ks,generateUUID:Jn,clamp:jt,euclideanModulo:Hh,mapLinear:R0,inverseLerp:P0,lerp:Vr,damp:I0,pingpong:L0,smoothstep:D0,smootherstep:N0,randInt:U0,randFloat:F0,randFloatSpread:O0,seededRandom:B0,degToRad:z0,radToDeg:k0,isPowerOfTwo:V0,ceilPowerOfTwo:G0,floorPowerOfTwo:H0,setQuaternionFromProperEuler:W0,normalize:re,denormalize:Fn},rt=class s{static{s.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=jt(this.x,t.x,e.x),this.y=jt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=jt(this.x,t,e),this.y=jt(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(jt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*i+t.x,this.y=r*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},nn=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],f=n[i+3],u=r[a+0],d=r[a+1],g=r[a+2],_=r[a+3];if(f!==_||l!==u||c!==d||h!==g){let p=l*u+c*d+h*g+f*_;p<0&&(u=-u,d=-d,g=-g,_=-_,p=-p);let m=1-o;if(p<.9995){let E=Math.acos(p),T=Math.sin(E);m=Math.sin(m*E)/T,o=Math.sin(o*E)/T,l=l*m+u*o,c=c*m+d*o,h=h*m+g*o,f=f*m+_*o}else{l=l*m+u*o,c=c*m+d*o,h=h*m+g*o,f=f*m+_*o;let E=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=E,c*=E,h*=E,f*=E}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,i,r,a){let o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],f=r[a],u=r[a+1],d=r[a+2],g=r[a+3];return t[e]=o*g+h*f+l*d-c*u,t[e+1]=l*g+h*u+c*f-o*d,t[e+2]=c*g+h*d+o*u-l*f,t[e+3]=h*g-o*f-l*u-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),f=o(r/2),u=l(n/2),d=l(i/2),g=l(r/2);switch(a){case"XYZ":this._x=u*h*f+c*d*g,this._y=c*d*f-u*h*g,this._z=c*h*g+u*d*f,this._w=c*h*f-u*d*g;break;case"YXZ":this._x=u*h*f+c*d*g,this._y=c*d*f-u*h*g,this._z=c*h*g-u*d*f,this._w=c*h*f+u*d*g;break;case"ZXY":this._x=u*h*f-c*d*g,this._y=c*d*f+u*h*g,this._z=c*h*g+u*d*f,this._w=c*h*f-u*d*g;break;case"ZYX":this._x=u*h*f-c*d*g,this._y=c*d*f+u*h*g,this._z=c*h*g-u*d*f,this._w=c*h*f+u*d*g;break;case"YZX":this._x=u*h*f+c*d*g,this._y=c*d*f+u*h*g,this._z=c*h*g-u*d*f,this._w=c*h*f-u*d*g;break;case"XZY":this._x=u*h*f-c*d*g,this._y=c*d*f-u*h*g,this._z=c*h*g+u*d*f,this._w=c*h*f+u*d*g;break;default:Bt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],f=e[10],u=n+o+f;if(u>0){let d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(a-i)*d}else if(n>o&&n>f){let d=2*Math.sqrt(1+n-o-f);this._w=(h-l)/d,this._x=.25*d,this._y=(i+a)/d,this._z=(r+c)/d}else if(o>f){let d=2*Math.sqrt(1+o-n-f);this._w=(r-c)/d,this._x=(i+a)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+f-n-o);this._w=(a-i)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(jt(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+i*c-r*l,this._y=i*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,i=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,i=-i,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},L=class s{static{s.prototype.isVector3=!0}constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(gf.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(gf.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*i-o*n),h=2*(o*e-r*i),f=2*(r*n-a*e);return this.x=e+l*c+a*f-o*h,this.y=n+l*h+o*c-r*f,this.z=i+l*f+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=jt(this.x,t.x,e.x),this.y=jt(this.y,t.y,e.y),this.z=jt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=jt(this.x,t,e),this.y=jt(this.y,t,e),this.z=jt(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return qc.copy(this).projectOnVector(t),this.sub(qc)}reflect(t){return this.sub(qc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(jt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},qc=new L,gf=new nn,Ht=class s{static{s.prototype.isMatrix3=!0}constructor(t,e,n,i,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,l,c)}set(t,e,n,i,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=i,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],f=n[7],u=n[2],d=n[5],g=n[8],_=i[0],p=i[3],m=i[6],E=i[1],T=i[4],y=i[7],M=i[2],w=i[5],A=i[8];return r[0]=a*_+o*E+l*M,r[3]=a*p+o*T+l*w,r[6]=a*m+o*y+l*A,r[1]=c*_+h*E+f*M,r[4]=c*p+h*T+f*w,r[7]=c*m+h*y+f*A,r[2]=u*_+d*E+g*M,r[5]=u*p+d*T+g*w,r[8]=u*m+d*y+g*A,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+i*r*c-i*a*l}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],f=h*a-o*c,u=o*l-h*r,d=c*r-a*l,g=e*f+n*u+i*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return t[0]=f*_,t[1]=(i*c-h*n)*_,t[2]=(o*n-i*a)*_,t[3]=u*_,t[4]=(h*e-i*l)*_,t[5]=(i*r-o*e)*_,t[6]=d*_,t[7]=(n*l-c*e)*_,t[8]=(a*e-n*r)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-i*c,i*l,-i*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return ls("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Yc.makeScale(t,e)),this}rotate(t){return ls("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Yc.makeRotation(-t)),this}translate(t,e){return ls("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Yc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Yc=new Ht,_f=new Ht().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),xf=new Ht().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function X0(){let s={enabled:!0,workingColorSpace:Xr,spaces:{},convert:function(i,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ie&&(i.r=fi(i.r),i.g=fi(i.g),i.b=fi(i.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ie&&(i.r=Zs(i.r),i.g=Zs(i.g),i.b=Zs(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===xi?qr:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,a){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return ls("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return ls("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[Xr]:{primaries:t,whitePoint:n,transfer:qr,toXYZ:_f,fromXYZ:xf,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:tn},outputColorSpaceConfig:{drawingBufferColorSpace:tn}},[tn]:{primaries:t,whitePoint:n,transfer:ie,toXYZ:_f,fromXYZ:xf,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:tn}}}),s}var te=X0();function fi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Zs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var Is,Ko=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Is===void 0&&(Is=Yr("canvas")),Is.width=t.width,Is.height=t.height;let i=Is.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=Is}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Yr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=fi(r[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(fi(e[n]/255)*255):e[n]=fi(e[n]);return{data:e,width:t.width,height:t.height}}else return Bt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},q0=0,Qs=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:q0++}),this.uuid=Jn(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(Zc(i[a].image)):r.push(Zc(i[a]))}else r=Zc(i);n.url=r}return e||(t.images[this.uuid]=n),n}};function Zc(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Ko.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Bt("Texture: Unable to serialize Texture."),{})}var Y0=0,Jc=new L,sn=class s extends Kn{constructor(t=s.DEFAULT_IMAGE,e=s.DEFAULT_MAPPING,n=Yn,i=Yn,r=ke,a=Vi,o=Rn,l=on,c=s.DEFAULT_ANISOTROPY,h=xi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Y0++}),this.uuid=Jn(),this.name="",this.source=new Qs(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new rt(0,0),this.repeat=new rt(1,1),this.center=new rt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Jc).x}get height(){return this.source.getSize(Jc).y}get depth(){return this.source.getSize(Jc).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Bt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){Bt(`Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Uh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Yo:t.x=t.x-Math.floor(t.x);break;case Yn:t.x=t.x<0?0:1;break;case Zo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Yo:t.y=t.y-Math.floor(t.y);break;case Yn:t.y=t.y<0?0:1;break;case Zo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};sn.DEFAULT_IMAGE=null;sn.DEFAULT_MAPPING=Uh;sn.DEFAULT_ANISOTROPY=1;var ge=class s{static{s.prototype.isVector4=!0}constructor(t=0,e=0,n=0,i=1){this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r,l=t.elements,c=l[0],h=l[4],f=l[8],u=l[1],d=l[5],g=l[9],_=l[2],p=l[6],m=l[10];if(Math.abs(h-u)<.01&&Math.abs(f-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+_)<.1&&Math.abs(g+p)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let T=(c+1)/2,y=(d+1)/2,M=(m+1)/2,w=(h+u)/4,A=(f+_)/4,x=(g+p)/4;return T>y&&T>M?T<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(T),i=w/n,r=A/n):y>M?y<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(y),n=w/i,r=x/i):M<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(M),n=A/r,i=x/r),this.set(n,i,r,e),this}let E=Math.sqrt((p-g)*(p-g)+(f-_)*(f-_)+(u-h)*(u-h));return Math.abs(E)<.001&&(E=1),this.x=(p-g)/E,this.y=(f-_)/E,this.z=(u-h)/E,this.w=Math.acos((c+d+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=jt(this.x,t.x,e.x),this.y=jt(this.y,t.y,e.y),this.z=jt(this.z,t.z,e.z),this.w=jt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=jt(this.x,t,e),this.y=jt(this.y,t,e),this.z=jt(this.z,t,e),this.w=jt(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Qo=class extends Kn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ke,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new ge(0,0,t,e),this.scissorTest=!1,this.viewport=new ge(0,0,t,e),this.textures=[];let i={width:t,height:e,depth:n.depth},r=new sn(i),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:ke,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let i=Object.assign({},t.textures[e].image);this.textures[e].source=new Qs(i)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Le=class extends Qo{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Jr=class extends sn{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Be,this.minFilter=Be,this.wrapR=Yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var jo=class extends sn{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Be,this.minFilter=Be,this.wrapR=Yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ae=class s{static{s.prototype.isMatrix4=!0}constructor(t,e,n,i,r,a,o,l,c,h,f,u,d,g,_,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,l,c,h,f,u,d,g,_,p)}set(t,e,n,i,r,a,o,l,c,h,f,u,d,g,_,p){let m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=i,m[1]=r,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=h,m[10]=f,m[14]=u,m[3]=d,m[7]=g,m[11]=_,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,i=1/Ls.setFromMatrixColumn(t,0).length(),r=1/Ls.setFromMatrixColumn(t,1).length(),a=1/Ls.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){let u=a*h,d=a*f,g=o*h,_=o*f;e[0]=l*h,e[4]=-l*f,e[8]=c,e[1]=d+g*c,e[5]=u-_*c,e[9]=-o*l,e[2]=_-u*c,e[6]=g+d*c,e[10]=a*l}else if(t.order==="YXZ"){let u=l*h,d=l*f,g=c*h,_=c*f;e[0]=u+_*o,e[4]=g*o-d,e[8]=a*c,e[1]=a*f,e[5]=a*h,e[9]=-o,e[2]=d*o-g,e[6]=_+u*o,e[10]=a*l}else if(t.order==="ZXY"){let u=l*h,d=l*f,g=c*h,_=c*f;e[0]=u-_*o,e[4]=-a*f,e[8]=g+d*o,e[1]=d+g*o,e[5]=a*h,e[9]=_-u*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let u=a*h,d=a*f,g=o*h,_=o*f;e[0]=l*h,e[4]=g*c-d,e[8]=u*c+_,e[1]=l*f,e[5]=_*c+u,e[9]=d*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let u=a*l,d=a*c,g=o*l,_=o*c;e[0]=l*h,e[4]=_-u*f,e[8]=g*f+d,e[1]=f,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=d*f+g,e[10]=u-_*f}else if(t.order==="XZY"){let u=a*l,d=a*c,g=o*l,_=o*c;e[0]=l*h,e[4]=-f,e[8]=c*h,e[1]=u*f+_,e[5]=a*h,e[9]=d*f-g,e[2]=g*f-d,e[6]=o*h,e[10]=_*f+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Z0,t,J0)}lookAt(t,e,n){let i=this.elements;return pn.subVectors(t,e),pn.lengthSq()===0&&(pn.z=1),pn.normalize(),Ci.crossVectors(n,pn),Ci.lengthSq()===0&&(Math.abs(n.z)===1?pn.x+=1e-4:pn.z+=1e-4,pn.normalize(),Ci.crossVectors(n,pn)),Ci.normalize(),lo.crossVectors(pn,Ci),i[0]=Ci.x,i[4]=lo.x,i[8]=pn.x,i[1]=Ci.y,i[5]=lo.y,i[9]=pn.y,i[2]=Ci.z,i[6]=lo.z,i[10]=pn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],f=n[5],u=n[9],d=n[13],g=n[2],_=n[6],p=n[10],m=n[14],E=n[3],T=n[7],y=n[11],M=n[15],w=i[0],A=i[4],x=i[8],b=i[12],R=i[1],P=i[5],N=i[9],H=i[13],W=i[2],U=i[6],z=i[10],B=i[14],Z=i[3],tt=i[7],at=i[11],lt=i[15];return r[0]=a*w+o*R+l*W+c*Z,r[4]=a*A+o*P+l*U+c*tt,r[8]=a*x+o*N+l*z+c*at,r[12]=a*b+o*H+l*B+c*lt,r[1]=h*w+f*R+u*W+d*Z,r[5]=h*A+f*P+u*U+d*tt,r[9]=h*x+f*N+u*z+d*at,r[13]=h*b+f*H+u*B+d*lt,r[2]=g*w+_*R+p*W+m*Z,r[6]=g*A+_*P+p*U+m*tt,r[10]=g*x+_*N+p*z+m*at,r[14]=g*b+_*H+p*B+m*lt,r[3]=E*w+T*R+y*W+M*Z,r[7]=E*A+T*P+y*U+M*tt,r[11]=E*x+T*N+y*z+M*at,r[15]=E*b+T*H+y*B+M*lt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],f=t[6],u=t[10],d=t[14],g=t[3],_=t[7],p=t[11],m=t[15],E=l*d-c*u,T=o*d-c*f,y=o*u-l*f,M=a*d-c*h,w=a*u-l*h,A=a*f-o*h;return e*(_*E-p*T+m*y)-n*(g*E-p*M+m*w)+i*(g*T-_*M+m*A)-r*(g*y-_*w+p*A)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return e*(a*h-o*c)-n*(r*h-o*l)+i*(r*c-a*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],f=t[9],u=t[10],d=t[11],g=t[12],_=t[13],p=t[14],m=t[15],E=e*o-n*a,T=e*l-i*a,y=e*c-r*a,M=n*l-i*o,w=n*c-r*o,A=i*c-r*l,x=h*_-f*g,b=h*p-u*g,R=h*m-d*g,P=f*p-u*_,N=f*m-d*_,H=u*m-d*p,W=E*H-T*N+y*P+M*R-w*b+A*x;if(W===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let U=1/W;return t[0]=(o*H-l*N+c*P)*U,t[1]=(i*N-n*H-r*P)*U,t[2]=(_*A-p*w+m*M)*U,t[3]=(u*w-f*A-d*M)*U,t[4]=(l*R-a*H-c*b)*U,t[5]=(e*H-i*R+r*b)*U,t[6]=(p*y-g*A-m*T)*U,t[7]=(h*A-u*y+d*T)*U,t[8]=(a*N-o*R+c*x)*U,t[9]=(n*R-e*N-r*x)*U,t[10]=(g*w-_*y+m*E)*U,t[11]=(f*y-h*w-d*E)*U,t[12]=(o*b-a*P-l*x)*U,t[13]=(e*P-n*b+i*x)*U,t[14]=(_*T-g*M-p*E)*U,t[15]=(h*M-f*T+u*E)*U,this}scale(t){let e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,a){return this.set(1,n,r,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,f=o+o,u=r*c,d=r*h,g=r*f,_=a*h,p=a*f,m=o*f,E=l*c,T=l*h,y=l*f,M=n.x,w=n.y,A=n.z;return i[0]=(1-(_+m))*M,i[1]=(d+y)*M,i[2]=(g-T)*M,i[3]=0,i[4]=(d-y)*w,i[5]=(1-(u+m))*w,i[6]=(p+E)*w,i[7]=0,i[8]=(g+T)*A,i[9]=(p-E)*A,i[10]=(1-(u+_))*A,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements;t.x=i[12],t.y=i[13],t.z=i[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=Ls.set(i[0],i[1],i[2]).length(),o=Ls.set(i[4],i[5],i[6]).length(),l=Ls.set(i[8],i[9],i[10]).length();r<0&&(a=-a),Dn.copy(this);let c=1/a,h=1/o,f=1/l;return Dn.elements[0]*=c,Dn.elements[1]*=c,Dn.elements[2]*=c,Dn.elements[4]*=h,Dn.elements[5]*=h,Dn.elements[6]*=h,Dn.elements[8]*=f,Dn.elements[9]*=f,Dn.elements[10]*=f,e.setFromRotationMatrix(Dn),n.x=a,n.y=o,n.z=l,this}makePerspective(t,e,n,i,r,a,o=On,l=!1){let c=this.elements,h=2*r/(e-t),f=2*r/(n-i),u=(e+t)/(e-t),d=(n+i)/(n-i),g,_;if(l)g=r/(a-r),_=a*r/(a-r);else if(o===On)g=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===Js)g=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=f,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,r,a,o=On,l=!1){let c=this.elements,h=2/(e-t),f=2/(n-i),u=-(e+t)/(e-t),d=-(n+i)/(n-i),g,_;if(l)g=1/(a-r),_=a/(a-r);else if(o===On)g=-2/(a-r),_=-(a+r)/(a-r);else if(o===Js)g=-1/(a-r),_=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=f,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Ls=new L,Dn=new ae,Z0=new L(0,0,0),J0=new L(1,1,1),Ci=new L,lo=new L,pn=new L,vf=new ae,yf=new nn,En=class s{constructor(t=0,e=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],f=i[2],u=i[6],d=i[10];switch(e){case"XYZ":this._y=Math.asin(jt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-jt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(jt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-jt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(jt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-jt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:Bt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return vf.makeRotationFromQuaternion(t),this.setFromRotationMatrix(vf,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return yf.setFromEuler(this),this.setFromQuaternion(yf,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};En.DEFAULT_ORDER="XYZ";var $r=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},$0=0,Mf=new L,Ds=new nn,ai=new ae,co=new L,Rr=new L,K0=new L,Q0=new nn,Sf=new L(1,0,0),bf=new L(0,1,0),Tf=new L(0,0,1),Ef={type:"added"},j0={type:"removed"},Ns={type:"childadded",child:null},$c={type:"childremoved",child:null},Ie=class s extends Kn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:$0++}),this.uuid=Jn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let t=new L,e=new En,n=new nn,i=new L(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ae},normalMatrix:{value:new Ht}}),this.matrix=new ae,this.matrixWorld=new ae,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new $r,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ds.setFromAxisAngle(t,e),this.quaternion.multiply(Ds),this}rotateOnWorldAxis(t,e){return Ds.setFromAxisAngle(t,e),this.quaternion.premultiply(Ds),this}rotateX(t){return this.rotateOnAxis(Sf,t)}rotateY(t){return this.rotateOnAxis(bf,t)}rotateZ(t){return this.rotateOnAxis(Tf,t)}translateOnAxis(t,e){return Mf.copy(t).applyQuaternion(this.quaternion),this.position.add(Mf.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Sf,t)}translateY(t){return this.translateOnAxis(bf,t)}translateZ(t){return this.translateOnAxis(Tf,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ai.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?co.copy(t):co.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Rr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ai.lookAt(Rr,co,this.up):ai.lookAt(co,Rr,this.up),this.quaternion.setFromRotationMatrix(ai),i&&(ai.extractRotation(i.matrixWorld),Ds.setFromRotationMatrix(ai),this.quaternion.premultiply(Ds.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(zt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ef),Ns.child=t,this.dispatchEvent(Ns),Ns.child=null):zt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(j0),$c.child=t,this.dispatchEvent($c),$c.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ai.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ai.multiply(t.parent.matrixWorld)),t.applyMatrix4(ai),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ef),Ns.child=t,this.dispatchEvent(Ns),Ns.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rr,t,K0),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rr,Q0,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,i=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*i,r[13]+=n-r[1]*e-r[5]*n-r[9]*i,r[14]+=i-r[2]*e-r[6]*n-r[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),this.static!==!1&&(i.static=this.static),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let f=l[c];r(t.shapes,f)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));i.material=o}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];i.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),f=a(t.shapes),u=a(t.skeletons),d=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),u.length>0&&(n.skeletons=u),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}};Ie.DEFAULT_UP=new L(0,1,0);Ie.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ie.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Zn=class extends Ie{constructor(){super(),this.isGroup=!0,this.type="Group"}},tm={type:"move"},js=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Zn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Zn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Zn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let _ of t.hand.values()){let p=e.getJointPose(_,n),m=this._getHandJoint(c,_);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}let h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],u=h.position.distanceTo(f.position),d=.02,g=.005;c.inputState.pinching&&u>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(tm)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Zn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Rd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ri={h:0,s:0,l:0},ho={h:0,s:0,l:0};function Kc(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}var Ft=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=tn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,te.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=te.workingColorSpace){return this.r=t,this.g=e,this.b=n,te.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=te.workingColorSpace){if(t=Hh(t,1),e=jt(e,0,1),n=jt(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Kc(a,r,t+1/3),this.g=Kc(a,r,t),this.b=Kc(a,r,t-1/3)}return te.colorSpaceToWorking(this,i),this}setStyle(t,e=tn){function n(r){r!==void 0&&parseFloat(r)<1&&Bt("Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Bt("Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Bt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=tn){let n=Rd[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Bt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=fi(t.r),this.g=fi(t.g),this.b=fi(t.b),this}copyLinearToSRGB(t){return this.r=Zs(t.r),this.g=Zs(t.g),this.b=Zs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=tn){return te.workingToColorSpace(Ye.copy(this),t),Math.round(jt(Ye.r*255,0,255))*65536+Math.round(jt(Ye.g*255,0,255))*256+Math.round(jt(Ye.b*255,0,255))}getHexString(t=tn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=te.workingColorSpace){te.workingToColorSpace(Ye.copy(this),e);let n=Ye.r,i=Ye.g,r=Ye.b,a=Math.max(n,i,r),o=Math.min(n,i,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let f=a-o;switch(c=h<=.5?f/(a+o):f/(2-a-o),a){case n:l=(i-r)/f+(i<r?6:0);break;case i:l=(r-n)/f+2;break;case r:l=(n-i)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=te.workingColorSpace){return te.workingToColorSpace(Ye.copy(this),e),t.r=Ye.r,t.g=Ye.g,t.b=Ye.b,t}getStyle(t=tn){te.workingToColorSpace(Ye.copy(this),t);let e=Ye.r,n=Ye.g,i=Ye.b;return t!==tn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Ri),this.setHSL(Ri.h+t,Ri.s+e,Ri.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ri),t.getHSL(ho);let n=Vr(Ri.h,ho.h,e),i=Vr(Ri.s,ho.s,e),r=Vr(Ri.l,ho.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ye=new Ft;Ft.NAMES=Rd;var us=class extends Ie{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new En,this.environmentIntensity=1,this.environmentRotation=new En,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},Nn=new L,oi=new L,Qc=new L,li=new L,Us=new L,Fs=new L,wf=new L,jc=new L,th=new L,eh=new L,nh=new ge,ih=new ge,sh=new ge,ui=class s{constructor(t=new L,e=new L,n=new L){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Nn.subVectors(t,e),i.cross(Nn);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){Nn.subVectors(i,e),oi.subVectors(n,e),Qc.subVectors(t,e);let a=Nn.dot(Nn),o=Nn.dot(oi),l=Nn.dot(Qc),c=oi.dot(oi),h=oi.dot(Qc),f=a*c-o*o;if(f===0)return r.set(0,0,0),null;let u=1/f,d=(c*l-o*h)*u,g=(a*h-o*l)*u;return r.set(1-d-g,g,d)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,li)===null?!1:li.x>=0&&li.y>=0&&li.x+li.y<=1}static getInterpolation(t,e,n,i,r,a,o,l){return this.getBarycoord(t,e,n,i,li)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,li.x),l.addScaledVector(a,li.y),l.addScaledVector(o,li.z),l)}static getInterpolatedAttribute(t,e,n,i,r,a){return nh.setScalar(0),ih.setScalar(0),sh.setScalar(0),nh.fromBufferAttribute(t,e),ih.fromBufferAttribute(t,n),sh.fromBufferAttribute(t,i),a.setScalar(0),a.addScaledVector(nh,r.x),a.addScaledVector(ih,r.y),a.addScaledVector(sh,r.z),a}static isFrontFacing(t,e,n,i){return Nn.subVectors(n,e),oi.subVectors(t,e),Nn.cross(oi).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Nn.subVectors(this.c,this.b),oi.subVectors(this.a,this.b),Nn.cross(oi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return s.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return s.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,r=this.c,a,o;Us.subVectors(i,n),Fs.subVectors(r,n),jc.subVectors(t,n);let l=Us.dot(jc),c=Fs.dot(jc);if(l<=0&&c<=0)return e.copy(n);th.subVectors(t,i);let h=Us.dot(th),f=Fs.dot(th);if(h>=0&&f<=h)return e.copy(i);let u=l*f-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(Us,a);eh.subVectors(t,r);let d=Us.dot(eh),g=Fs.dot(eh);if(g>=0&&d<=g)return e.copy(r);let _=d*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(Fs,o);let p=h*g-d*f;if(p<=0&&f-h>=0&&d-g>=0)return wf.subVectors(r,i),o=(f-h)/(f-h+(d-g)),e.copy(i).addScaledVector(wf,o);let m=1/(p+_+u);return a=_*m,o=u*m,e.copy(n).addScaledVector(Us,a).addScaledVector(Fs,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Qn=class{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Un.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Un.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Un.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Un):Un.fromBufferAttribute(r,a),Un.applyMatrix4(t.matrixWorld),this.expandByPoint(Un);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),uo.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),uo.copy(n.boundingBox)),uo.applyMatrix4(t.matrixWorld),this.union(uo)}let i=t.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Un),Un.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Pr),fo.subVectors(this.max,Pr),Os.subVectors(t.a,Pr),Bs.subVectors(t.b,Pr),zs.subVectors(t.c,Pr),Pi.subVectors(Bs,Os),Ii.subVectors(zs,Bs),ns.subVectors(Os,zs);let e=[0,-Pi.z,Pi.y,0,-Ii.z,Ii.y,0,-ns.z,ns.y,Pi.z,0,-Pi.x,Ii.z,0,-Ii.x,ns.z,0,-ns.x,-Pi.y,Pi.x,0,-Ii.y,Ii.x,0,-ns.y,ns.x,0];return!rh(e,Os,Bs,zs,fo)||(e=[1,0,0,0,1,0,0,0,1],!rh(e,Os,Bs,zs,fo))?!1:(po.crossVectors(Pi,Ii),e=[po.x,po.y,po.z],rh(e,Os,Bs,zs,fo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Un).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Un).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ci[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ci[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ci[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ci[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ci[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ci[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ci[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ci[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ci),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},ci=[new L,new L,new L,new L,new L,new L,new L,new L],Un=new L,uo=new Qn,Os=new L,Bs=new L,zs=new L,Pi=new L,Ii=new L,ns=new L,Pr=new L,fo=new L,po=new L,is=new L;function rh(s,t,e,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){is.fromArray(s,r);let o=i.x*Math.abs(is.x)+i.y*Math.abs(is.y)+i.z*Math.abs(is.z),l=t.dot(is),c=e.dot(is),h=n.dot(is);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Pe=new L,mo=new rt,em=0,en=class extends Kn{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:em++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=$o,this.updateRanges=[],this.gpuType=Cn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)mo.fromBufferAttribute(this,e),mo.applyMatrix3(t),this.setXY(e,mo.x,mo.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.applyMatrix3(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.applyMatrix4(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.applyNormalMatrix(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.transformDirection(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Fn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=re(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Fn(e,this.array)),e}setX(t,e){return this.normalized&&(e=re(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Fn(e,this.array)),e}setY(t,e){return this.normalized&&(e=re(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Fn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=re(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Fn(e,this.array)),e}setW(t,e){return this.normalized&&(e=re(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=re(e,this.array),n=re(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=re(e,this.array),n=re(n,this.array),i=re(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=re(e,this.array),n=re(n,this.array),i=re(i,this.array),r=re(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==$o&&(t.usage=this.usage),t}dispose(){this.dispatchEvent({type:"dispose"})}};var Kr=class extends en{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Qr=class extends en{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Oe=class extends en{constructor(t,e,n){super(new Float32Array(t),e,n)}},nm=new Qn,Ir=new L,ah=new L,pi=class{constructor(t=new L,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):nm.setFromPoints(t).getCenter(n);let i=0;for(let r=0,a=t.length;r<a;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ir.subVectors(t,this.center);let e=Ir.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Ir,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ah.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ir.copy(t.center).add(ah)),this.expandByPoint(Ir.copy(t.center).sub(ah))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},im=0,Tn=new ae,oh=new Ie,ks=new L,mn=new Qn,Lr=new Qn,Fe=new L,Ve=class s extends Kn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:im++}),this.uuid=Jn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(A0(t)?Qr:Kr)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ht().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Tn.makeRotationFromQuaternion(t),this.applyMatrix4(Tn),this}rotateX(t){return Tn.makeRotationX(t),this.applyMatrix4(Tn),this}rotateY(t){return Tn.makeRotationY(t),this.applyMatrix4(Tn),this}rotateZ(t){return Tn.makeRotationZ(t),this.applyMatrix4(Tn),this}translate(t,e,n){return Tn.makeTranslation(t,e,n),this.applyMatrix4(Tn),this}scale(t,e,n){return Tn.makeScale(t,e,n),this.applyMatrix4(Tn),this}lookAt(t){return oh.lookAt(t),oh.updateMatrix(),this.applyMatrix4(oh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ks).negate(),this.translate(ks.x,ks.y,ks.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,r=t.length;i<r;i++){let a=t[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Oe(n,3))}else{let n=Math.min(t.length,e.count);for(let i=0;i<n;i++){let r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&Bt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Qn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){zt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let r=e[n];mn.setFromBufferAttribute(r),this.morphTargetsRelative?(Fe.addVectors(this.boundingBox.min,mn.min),this.boundingBox.expandByPoint(Fe),Fe.addVectors(this.boundingBox.max,mn.max),this.boundingBox.expandByPoint(Fe)):(this.boundingBox.expandByPoint(mn.min),this.boundingBox.expandByPoint(mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&zt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new pi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){zt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(t){let n=this.boundingSphere.center;if(mn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];Lr.setFromBufferAttribute(o),this.morphTargetsRelative?(Fe.addVectors(mn.min,Lr.min),mn.expandByPoint(Fe),Fe.addVectors(mn.max,Lr.max),mn.expandByPoint(Fe)):(mn.expandByPoint(Lr.min),mn.expandByPoint(Lr.max))}mn.getCenter(n);let i=0;for(let r=0,a=t.count;r<a;r++)Fe.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(Fe));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Fe.fromBufferAttribute(o,c),l&&(ks.fromBufferAttribute(t,c),Fe.add(ks)),i=Math.max(i,n.distanceToSquared(Fe))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&zt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){zt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new en(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let x=0;x<n.count;x++)o[x]=new L,l[x]=new L;let c=new L,h=new L,f=new L,u=new rt,d=new rt,g=new rt,_=new L,p=new L;function m(x,b,R){c.fromBufferAttribute(n,x),h.fromBufferAttribute(n,b),f.fromBufferAttribute(n,R),u.fromBufferAttribute(r,x),d.fromBufferAttribute(r,b),g.fromBufferAttribute(r,R),h.sub(c),f.sub(c),d.sub(u),g.sub(u);let P=1/(d.x*g.y-g.x*d.y);isFinite(P)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(f,-d.y).multiplyScalar(P),p.copy(f).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(P),o[x].add(_),o[b].add(_),o[R].add(_),l[x].add(p),l[b].add(p),l[R].add(p))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let x=0,b=E.length;x<b;++x){let R=E[x],P=R.start,N=R.count;for(let H=P,W=P+N;H<W;H+=3)m(t.getX(H+0),t.getX(H+1),t.getX(H+2))}let T=new L,y=new L,M=new L,w=new L;function A(x){M.fromBufferAttribute(i,x),w.copy(M);let b=o[x];T.copy(b),T.sub(M.multiplyScalar(M.dot(b))).normalize(),y.crossVectors(w,b);let P=y.dot(l[x])<0?-1:1;a.setXYZW(x,T.x,T.y,T.z,P)}for(let x=0,b=E.length;x<b;++x){let R=E[x],P=R.start,N=R.count;for(let H=P,W=P+N;H<W;H+=3)A(t.getX(H+0)),A(t.getX(H+1)),A(t.getX(H+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new en(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,d=n.count;u<d;u++)n.setXYZ(u,0,0,0);let i=new L,r=new L,a=new L,o=new L,l=new L,c=new L,h=new L,f=new L;if(t)for(let u=0,d=t.count;u<d;u+=3){let g=t.getX(u+0),_=t.getX(u+1),p=t.getX(u+2);i.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),a.fromBufferAttribute(e,p),h.subVectors(a,r),f.subVectors(i,r),h.cross(f),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,p),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let u=0,d=e.count;u<d;u+=3)i.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,r),f.subVectors(i,r),h.cross(f),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Fe.fromBufferAttribute(t,e),Fe.normalize(),t.setXYZ(e,Fe.x,Fe.y,Fe.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,f=o.normalized,u=new c.constructor(l.length*h),d=0,g=0;for(let _=0,p=l.length;_<p;_++){o.isInterleavedBufferAttribute?d=l[_]*o.data.stride+o.offset:d=l[_]*h;for(let m=0;m<h;m++)u[g++]=c[d++]}return new en(u,h,f)}if(this.index===null)return Bt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new s,n=this.index.array,i=this.attributes;for(let o in i){let l=i[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,f=c.length;h<f;h++){let u=c[h],d=t(u,n);l.push(d)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let f=0,u=c.length;f<u;f++){let d=c[f];h.push(d.toJSON(t.data))}h.length>0&&(i[l]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let i=t.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],f=r[c];for(let u=0,d=f.length;u<d;u++)h.push(f[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},tl=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=$o,this.updateRanges=[],this.version=0,this.uuid=Jn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Jn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Jn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},je=new L,jr=class s{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)je.fromBufferAttribute(this,e),je.applyMatrix4(t),this.setXYZ(e,je.x,je.y,je.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)je.fromBufferAttribute(this,e),je.applyNormalMatrix(t),this.setXYZ(e,je.x,je.y,je.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)je.fromBufferAttribute(this,e),je.transformDirection(t),this.setXYZ(e,je.x,je.y,je.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Fn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=re(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=re(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=re(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=re(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=re(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Fn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Fn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Fn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Fn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=re(e,this.array),n=re(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=re(e,this.array),n=re(n,this.array),i=re(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=re(e,this.array),n=re(n,this.array),i=re(i,this.array),r=re(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=r,this}clone(t){if(t===void 0){Zr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return new en(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new s(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Zr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},sm=0,Bn=class extends Kn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:sm++}),this.uuid=Jn(),this.name="",this.type="Material",this.blending=cs,this.side=di,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Bo,this.blendDst=zo,this.blendEquation=Ni,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ft(0,0,0),this.blendAlpha=0,this.depthFunc=hs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=bh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=as,this.stencilZFail=as,this.stencilZPass=as,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Bt(`Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){Bt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==cs&&(n.blending=this.blending),this.side!==di&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Bo&&(n.blendSrc=this.blendSrc),this.blendDst!==zo&&(n.blendDst=this.blendDst),this.blendEquation!==Ni&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==hs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==bh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==as&&(n.stencilFail=this.stencilFail),this.stencilZFail!==as&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==as&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=i(t.textures),a=i(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Ft().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new rt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new rt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},tr=class extends Bn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ft(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Vs,Dr=new L,Gs=new L,Hs=new L,Ws=new rt,Nr=new rt,Pd=new ae,go=new L,Ur=new L,_o=new L,Af=new rt,lh=new rt,Cf=new rt,ta=class extends Ie{constructor(t=new tr){if(super(),this.isSprite=!0,this.type="Sprite",Vs===void 0){Vs=new Ve;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new tl(e,5);Vs.setIndex([0,1,2,0,2,3]),Vs.setAttribute("position",new jr(n,3,0,!1)),Vs.setAttribute("uv",new jr(n,2,3,!1))}this.geometry=Vs,this.material=t,this.center=new rt(.5,.5),this.count=1}raycast(t,e){t.camera===null&&zt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Gs.setFromMatrixScale(this.matrixWorld),Pd.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Hs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Gs.multiplyScalar(-Hs.z);let n=this.material.rotation,i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));let a=this.center;xo(go.set(-.5,-.5,0),Hs,a,Gs,i,r),xo(Ur.set(.5,-.5,0),Hs,a,Gs,i,r),xo(_o.set(.5,.5,0),Hs,a,Gs,i,r),Af.set(0,0),lh.set(1,0),Cf.set(1,1);let o=t.ray.intersectTriangle(go,Ur,_o,!1,Dr);if(o===null&&(xo(Ur.set(-.5,.5,0),Hs,a,Gs,i,r),lh.set(0,1),o=t.ray.intersectTriangle(go,_o,Ur,!1,Dr),o===null))return;let l=t.ray.origin.distanceTo(Dr);l<t.near||l>t.far||e.push({distance:l,point:Dr.clone(),uv:ui.getInterpolation(Dr,go,Ur,_o,Af,lh,Cf,new rt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function xo(s,t,e,n,i,r){Ws.subVectors(s,e).addScalar(.5).multiply(n),i!==void 0?(Nr.x=r*Ws.x-i*Ws.y,Nr.y=i*Ws.x+r*Ws.y):Nr.copy(Ws),s.copy(t),s.x+=Nr.x,s.y+=Nr.y,s.applyMatrix4(Pd)}var hi=new L,ch=new L,vo=new L,Li=new L,hh=new L,yo=new L,uh=new L,ea=class{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,hi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=hi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(hi.copy(this.origin).addScaledVector(this.direction,e),hi.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){ch.copy(t).add(e).multiplyScalar(.5),vo.copy(e).sub(t).normalize(),Li.copy(this.origin).sub(ch);let r=t.distanceTo(e)*.5,a=-this.direction.dot(vo),o=Li.dot(this.direction),l=-Li.dot(vo),c=Li.lengthSq(),h=Math.abs(1-a*a),f,u,d,g;if(h>0)if(f=a*l-o,u=a*o-l,g=r*h,f>=0)if(u>=-g)if(u<=g){let _=1/h;f*=_,u*=_,d=f*(f+a*u+2*o)+u*(a*f+u+2*l)+c}else u=r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*l)+c;else u=-r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*l)+c;else u<=-g?(f=Math.max(0,-(-a*r+o)),u=f>0?-r:Math.min(Math.max(-r,-l),r),d=-f*f+u*(u+2*l)+c):u<=g?(f=0,u=Math.min(Math.max(-r,-l),r),d=u*(u+2*l)+c):(f=Math.max(0,-(a*r+o)),u=f>0?r:Math.min(Math.max(-r,-l),r),d=-f*f+u*(u+2*l)+c);else u=a>0?-r:r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),i&&i.copy(ch).addScaledVector(vo,u),d}intersectSphere(t,e){hi.subVectors(t.center,this.origin);let n=hi.dot(this.direction),i=hi.dot(hi)-n*n,r=t.radius*t.radius;if(i>r)return null;let a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,i=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,i=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),f>=0?(o=(t.min.z-u.z)*f,l=(t.max.z-u.z)*f):(o=(t.max.z-u.z)*f,l=(t.min.z-u.z)*f),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,hi)!==null}intersectTriangle(t,e,n,i,r){hh.subVectors(e,t),yo.subVectors(n,t),uh.crossVectors(hh,yo);let a=this.direction.dot(uh),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Li.subVectors(this.origin,t);let l=o*this.direction.dot(yo.crossVectors(Li,yo));if(l<0)return null;let c=o*this.direction.dot(hh.cross(Li));if(c<0||l+c>a)return null;let h=-o*Li.dot(uh);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},mi=class extends Bn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ft(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new En,this.combine=El,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Rf=new ae,ss=new ea,Mo=new pi,Pf=new L,So=new L,bo=new L,To=new L,fh=new L,Eo=new L,If=new L,wo=new L,le=class extends Ie{constructor(t=new Ve,e=new mi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let o=this.morphTargetInfluences;if(r&&o){Eo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],f=r[l];h!==0&&(fh.fromBufferAttribute(f,t),a?Eo.addScaledVector(fh,h):Eo.addScaledVector(fh.sub(e),h))}e.add(Eo)}return e}raycast(t,e){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Mo.copy(n.boundingSphere),Mo.applyMatrix4(r),ss.copy(t.ray).recast(t.near),!(Mo.containsPoint(ss.origin)===!1&&(ss.intersectSphere(Mo,Pf)===null||ss.origin.distanceToSquared(Pf)>(t.far-t.near)**2))&&(Rf.copy(r).invert(),ss.copy(t.ray).applyMatrix4(Rf),!(n.boundingBox!==null&&ss.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ss)))}_computeIntersections(t,e,n){let i,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,u=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=u.length;g<_;g++){let p=u[g],m=a[p.materialIndex],E=Math.max(p.start,d.start),T=Math.min(o.count,Math.min(p.start+p.count,d.start+d.count));for(let y=E,M=T;y<M;y+=3){let w=o.getX(y),A=o.getX(y+1),x=o.getX(y+2);i=Ao(this,m,t,n,c,h,f,w,A,x),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{let g=Math.max(0,d.start),_=Math.min(o.count,d.start+d.count);for(let p=g,m=_;p<m;p+=3){let E=o.getX(p),T=o.getX(p+1),y=o.getX(p+2);i=Ao(this,a,t,n,c,h,f,E,T,y),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=u.length;g<_;g++){let p=u[g],m=a[p.materialIndex],E=Math.max(p.start,d.start),T=Math.min(l.count,Math.min(p.start+p.count,d.start+d.count));for(let y=E,M=T;y<M;y+=3){let w=y,A=y+1,x=y+2;i=Ao(this,m,t,n,c,h,f,w,A,x),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{let g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let p=g,m=_;p<m;p+=3){let E=p,T=p+1,y=p+2;i=Ao(this,a,t,n,c,h,f,E,T,y),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}}};function rm(s,t,e,n,i,r,a,o){let l;if(t.side===Ge?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,t.side===di,o),l===null)return null;wo.copy(o),wo.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(wo);return c<e.near||c>e.far?null:{distance:c,point:wo.clone(),object:s}}function Ao(s,t,e,n,i,r,a,o,l,c){s.getVertexPosition(o,So),s.getVertexPosition(l,bo),s.getVertexPosition(c,To);let h=rm(s,t,e,n,So,bo,To,If);if(h){let f=new L;ui.getBarycoord(If,So,bo,To,f),i&&(h.uv=ui.getInterpolatedAttribute(i,o,l,c,f,new rt)),r&&(h.uv1=ui.getInterpolatedAttribute(r,o,l,c,f,new rt)),a&&(h.normal=ui.getInterpolatedAttribute(a,o,l,c,f,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new L,materialIndex:0};ui.getNormal(So,bo,To,u.normal),h.face=u,h.barycoord=f}return h}var na=class extends sn{constructor(t=null,e=1,n=1,i,r,a,o,l,c=Be,h=Be,f,u){super(null,a,o,l,c,h,i,r,f,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ia=class extends en{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Xs=new ae,Lf=new ae,Co=[],Df=new Qn,am=new ae,Fr=new le,Or=new pi,sa=class extends le{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new ia(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,am)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Qn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Xs),Df.copy(t.boundingBox).applyMatrix4(Xs),this.boundingBox.union(Df)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new pi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Xs),Or.copy(t.boundingSphere).applyMatrix4(Xs),this.boundingSphere.union(Or)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(t,e){let n=this.matrixWorld,i=this.count;if(Fr.geometry=this.geometry,Fr.material=this.material,Fr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Or.copy(this.boundingSphere),Or.applyMatrix4(n),t.ray.intersectsSphere(Or)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Xs),Lf.multiplyMatrices(n,Xs),Fr.matrixWorld=Lf,Fr.raycast(t,Co);for(let a=0,o=Co.length;a<o;a++){let l=Co[a];l.instanceId=r,l.object=this,e.push(l)}Co.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new ia(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new na(new Float32Array(i*this.count),i,this.count,Ll,Cn));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=i*t;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},dh=new L,om=new L,lm=new Ht,qn=class{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=dh.subVectors(n,e).cross(om.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let i=t.delta(dh),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(i,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||lm.getNormalMatrix(t),i=this.coplanarPoint(dh).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},rs=new pi,cm=new rt(.5,.5),Ro=new L,er=class{constructor(t=new qn,e=new qn,n=new qn,i=new qn,r=new qn,a=new qn){this.planes=[t,e,n,i,r,a]}set(t,e,n,i,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=On,n=!1){let i=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],f=r[5],u=r[6],d=r[7],g=r[8],_=r[9],p=r[10],m=r[11],E=r[12],T=r[13],y=r[14],M=r[15];if(i[0].setComponents(c-a,d-h,m-g,M-E).normalize(),i[1].setComponents(c+a,d+h,m+g,M+E).normalize(),i[2].setComponents(c+o,d+f,m+_,M+T).normalize(),i[3].setComponents(c-o,d-f,m-_,M-T).normalize(),n)i[4].setComponents(l,u,p,y).normalize(),i[5].setComponents(c-l,d-u,m-p,M-y).normalize();else if(i[4].setComponents(c-l,d-u,m-p,M-y).normalize(),e===On)i[5].setComponents(c+l,d+u,m+p,M+y).normalize();else if(e===Js)i[5].setComponents(l,u,p,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),rs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),rs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(rs)}intersectsSprite(t){rs.center.set(0,0,0);let e=cm.distanceTo(t.center);return rs.radius=.7071067811865476+e,rs.applyMatrix4(t.matrixWorld),this.intersectsSphere(rs)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(Ro.x=i.normal.x>0?t.max.x:t.min.x,Ro.y=i.normal.y>0?t.max.y:t.min.y,Ro.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Ro)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var nr=class extends Bn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ft(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},el=new L,nl=new L,Nf=new ae,Br=new ea,Po=new pi,ph=new L,Uf=new L,ra=class extends Ie{constructor(t=new Ve,e=new nr){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)el.fromBufferAttribute(e,i-1),nl.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=el.distanceTo(nl);t.setAttribute("lineDistance",new Oe(n,1))}else Bt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Po.copy(n.boundingSphere),Po.applyMatrix4(i),Po.radius+=r,t.ray.intersectsSphere(Po)===!1)return;Nf.copy(i).invert(),Br.copy(t.ray).applyMatrix4(Nf);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){let d=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let _=d,p=g-1;_<p;_+=c){let m=h.getX(_),E=h.getX(_+1),T=Io(this,t,Br,l,m,E,_);T&&e.push(T)}if(this.isLineLoop){let _=h.getX(g-1),p=h.getX(d),m=Io(this,t,Br,l,_,p,g-1);m&&e.push(m)}}else{let d=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let _=d,p=g-1;_<p;_+=c){let m=Io(this,t,Br,l,_,_+1,_);m&&e.push(m)}if(this.isLineLoop){let _=Io(this,t,Br,l,g-1,d,g-1);_&&e.push(_)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Io(s,t,e,n,i,r,a){let o=s.geometry.attributes.position;if(el.fromBufferAttribute(o,i),nl.fromBufferAttribute(o,r),e.distanceSqToSegment(el,nl,ph,Uf)>n)return;ph.applyMatrix4(s.matrixWorld);let c=t.ray.origin.distanceTo(ph);if(!(c<t.near||c>t.far))return{distance:c,point:Uf.clone().applyMatrix4(s.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:s}}var aa=class extends sn{constructor(t=[],e=ki,n,i,r,a,o,l,c,h){super(t,e,n,i,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},ir=class extends sn{constructor(t,e,n,i,r,a,o,l,c){super(t,e,n,i,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var gi=class extends sn{constructor(t,e,n=kn,i,r,a,o=Be,l=Be,c,h=$n,f=1){if(h!==$n&&h!==Gi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:f};super(u,i,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Qs(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},il=class extends gi{constructor(t,e=kn,n=ki,i,r,a=Be,o=Be,l,c=$n){let h={width:t,height:t,depth:1},f=[h,h,h,h,h,h];super(t,t,e,n,i,r,a,o,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},oa=class extends sn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},jn=class s extends Ve{constructor(t=1,e=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};let o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],f=[],u=0,d=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,i,a,2),g("x","z","y",1,-1,t,n,-e,i,a,3),g("x","y","z",1,-1,t,e,n,i,r,4),g("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Oe(c,3)),this.setAttribute("normal",new Oe(h,3)),this.setAttribute("uv",new Oe(f,2));function g(_,p,m,E,T,y,M,w,A,x,b){let R=y/A,P=M/x,N=y/2,H=M/2,W=w/2,U=A+1,z=x+1,B=0,Z=0,tt=new L;for(let at=0;at<z;at++){let lt=at*P-H;for(let dt=0;dt<U;dt++){let Wt=dt*R-N;tt[_]=Wt*E,tt[p]=lt*T,tt[m]=W,c.push(tt.x,tt.y,tt.z),tt[_]=0,tt[p]=0,tt[m]=w>0?1:-1,h.push(tt.x,tt.y,tt.z),f.push(dt/A),f.push(1-at/x),B+=1}}for(let at=0;at<x;at++)for(let lt=0;lt<A;lt++){let dt=u+lt+U*at,Wt=u+lt+U*(at+1),Yt=u+(lt+1)+U*(at+1),Xt=u+(lt+1)+U*at;l.push(dt,Wt,Xt),l.push(Wt,Yt,Xt),Z+=6}o.addGroup(d,Z,b),d+=Z,u+=B}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var gn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Bt("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,i=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),i=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-a,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===a)return i/(r-1);let h=n[i],u=n[i+1]-h,d=(a-h)/u;return(i+d)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);let a=this.getPoint(i),o=this.getPoint(r),l=e||(a.isVector2?new rt:new L);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new L,i=[],r=[],a=[],o=new L,l=new ae;for(let d=0;d<=t;d++){let g=d/t;i[d]=this.getTangentAt(g,new L)}r[0]=new L,a[0]=new L;let c=Number.MAX_VALUE,h=Math.abs(i[0].x),f=Math.abs(i[0].y),u=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),u<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),a[0].crossVectors(i[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(i[d-1],i[d]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(jt(i[d-1].dot(i[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(o,g))}a[d].crossVectors(i[d],r[d])}if(e===!0){let d=Math.acos(jt(r[0].dot(r[t]),-1,1));d/=t,i[0].dot(o.crossVectors(r[0],r[t]))>0&&(d=-d);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(i[g],d*g)),a[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},sr=class extends gn{constructor(t=0,e=0,n=1,i=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new rt){let n=e,i=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(a?r=0:r=i),this.aClockwise===!0&&!a&&(r===i?r=-i:r=r-i);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),u=l-this.aX,d=c-this.aY;l=u*h-d*f+this.aX,c=u*f+d*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},sl=class extends sr{constructor(t,e,n,i,r,a){super(t,e,n,n,i,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Wh(){let s=0,t=0,e=0,n=0;function i(r,a,o,l){s=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){i(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,f){let u=(a-r)/c-(o-r)/(c+h)+(o-a)/h,d=(o-a)/h-(l-a)/(h+f)+(l-o)/f;u*=h,d*=h,i(a,o,u,d)},calc:function(r){let a=r*r,o=a*r;return s+t*r+e*a+n*o}}}var Ff=new L,Of=new L,mh=new Wh,gh=new Wh,_h=new Wh,rl=class extends gn{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new L){let n=e,i=this.points,r=i.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=i[(o-1)%r]:(Of.subVectors(i[0],i[1]).add(i[0]),c=Of);let f=i[o%r],u=i[(o+1)%r];if(this.closed||o+2<r?h=i[(o+2)%r]:(Ff.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=Ff),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(f),d),_=Math.pow(f.distanceToSquared(u),d),p=Math.pow(u.distanceToSquared(h),d);_<1e-4&&(_=1),g<1e-4&&(g=_),p<1e-4&&(p=_),mh.initNonuniformCatmullRom(c.x,f.x,u.x,h.x,g,_,p),gh.initNonuniformCatmullRom(c.y,f.y,u.y,h.y,g,_,p),_h.initNonuniformCatmullRom(c.z,f.z,u.z,h.z,g,_,p)}else this.curveType==="catmullrom"&&(mh.initCatmullRom(c.x,f.x,u.x,h.x,this.tension),gh.initCatmullRom(c.y,f.y,u.y,h.y,this.tension),_h.initCatmullRom(c.z,f.z,u.z,h.z,this.tension));return n.set(mh.calc(l),gh.calc(l),_h.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new L().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Bf(s,t,e,n,i){let r=(n-t)*.5,a=(i-e)*.5,o=s*s,l=s*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*s+e}function hm(s,t){let e=1-s;return e*e*t}function um(s,t){return 2*(1-s)*s*t}function fm(s,t){return s*s*t}function Gr(s,t,e,n){return hm(s,t)+um(s,e)+fm(s,n)}function dm(s,t){let e=1-s;return e*e*e*t}function pm(s,t){let e=1-s;return 3*e*e*s*t}function mm(s,t){return 3*(1-s)*s*s*t}function gm(s,t){return s*s*s*t}function Hr(s,t,e,n,i){return dm(s,t)+pm(s,e)+mm(s,n)+gm(s,i)}var la=class extends gn{constructor(t=new rt,e=new rt,n=new rt,i=new rt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new rt){let n=e,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Hr(t,i.x,r.x,a.x,o.x),Hr(t,i.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},al=class extends gn{constructor(t=new L,e=new L,n=new L,i=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new L){let n=e,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Hr(t,i.x,r.x,a.x,o.x),Hr(t,i.y,r.y,a.y,o.y),Hr(t,i.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},ca=class extends gn{constructor(t=new rt,e=new rt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new rt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new rt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ol=class extends gn{constructor(t=new L,e=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new L){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new L){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ha=class extends gn{constructor(t=new rt,e=new rt,n=new rt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new rt){let n=e,i=this.v0,r=this.v1,a=this.v2;return n.set(Gr(t,i.x,r.x,a.x),Gr(t,i.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ll=class extends gn{constructor(t=new L,e=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new L){let n=e,i=this.v0,r=this.v1,a=this.v2;return n.set(Gr(t,i.x,r.x,a.x),Gr(t,i.y,r.y,a.y),Gr(t,i.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ua=class extends gn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new rt){let n=e,i=this.points,r=(i.length-1)*t,a=Math.floor(r),o=r-a,l=i[a===0?a:a-1],c=i[a],h=i[a>i.length-2?i.length-1:a+1],f=i[a>i.length-3?i.length-1:a+2];return n.set(Bf(o,l.x,c.x,h.x,f.x),Bf(o,l.y,c.y,h.y,f.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new rt().fromArray(i))}return this}},Th=Object.freeze({__proto__:null,ArcCurve:sl,CatmullRomCurve3:rl,CubicBezierCurve:la,CubicBezierCurve3:al,EllipseCurve:sr,LineCurve:ca,LineCurve3:ol,QuadraticBezierCurve:ha,QuadraticBezierCurve3:ll,SplineCurve:ua}),cl=class extends gn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Th[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),i=this.getCurveLengths(),r=0;for(;r<i.length;){if(i[r]>=n){let a=i[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let i=0,r=this.curves;i<r.length;i++){let a=r[i],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(new Th[i.type]().fromJSON(i))}return this}},fa=class extends cl{constructor(t){super(),this.type="Path",this.currentPoint=new rt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new ca(this.currentPoint.clone(),new rt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){let r=new ha(this.currentPoint.clone(),new rt(t,e),new rt(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,r,a){let o=new la(this.currentPoint.clone(),new rt(t,e),new rt(n,i),new rt(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new ua(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,i,r,a),this}absarc(t,e,n,i,r,a){return this.absellipse(t,e,n,n,i,r,a),this}ellipse(t,e,n,i,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,i,r,a,o,l),this}absellipse(t,e,n,i,r,a,o,l){let c=new sr(t,e,n,i,r,a,o,l);if(this.curves.length>0){let f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},rr=class extends fa{constructor(t){super(t),this.uuid=Jn(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(new fa().fromJSON(i))}return this}};function _m(s,t,e=2){let n=t&&t.length,i=n?t[0]*e:s.length,r=Id(s,0,i,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=Sm(s,t,r,e)),s.length>80*e){o=s[0],l=s[1];let h=o,f=l;for(let u=e;u<i;u+=e){let d=s[u],g=s[u+1];d<o&&(o=d),g<l&&(l=g),d>h&&(h=d),g>f&&(f=g)}c=Math.max(h-o,f-l),c=c!==0?32767/c:0}return da(r,a,e,o,l,c,0),a}function Id(s,t,e,n,i){let r;if(i===Dm(s,t,e,n)>0)for(let a=t;a<e;a+=n)r=zf(a/n|0,s[a],s[a+1],r);else for(let a=e-n;a>=t;a-=n)r=zf(a/n|0,s[a],s[a+1],r);return r&&ar(r,r.next)&&(ma(r),r=r.next),r}function fs(s,t){if(!s)return s;t||(t=s);let e=s,n;do if(n=!1,!e.steiner&&(ar(e,e.next)||xe(e.prev,e,e.next)===0)){if(ma(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function da(s,t,e,n,i,r,a){if(!s)return;!a&&r&&Am(s,n,i,r);let o=s;for(;s.prev!==s.next;){let l=s.prev,c=s.next;if(r?vm(s,n,i,r):xm(s)){t.push(l.i,s.i,c.i),ma(s),s=c.next,o=c.next;continue}if(s=c,s===o){a?a===1?(s=ym(fs(s),t),da(s,t,e,n,i,r,2)):a===2&&Mm(s,t,e,n,i,r):da(fs(s),t,e,n,i,r,1);break}}}function xm(s){let t=s.prev,e=s,n=s.next;if(xe(t,e,n)>=0)return!1;let i=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,h=Math.min(i,r,a),f=Math.min(o,l,c),u=Math.max(i,r,a),d=Math.max(o,l,c),g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=u&&g.y>=f&&g.y<=d&&zr(i,o,r,l,a,c,g.x,g.y)&&xe(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function vm(s,t,e,n){let i=s.prev,r=s,a=s.next;if(xe(i,r,a)>=0)return!1;let o=i.x,l=r.x,c=a.x,h=i.y,f=r.y,u=a.y,d=Math.min(o,l,c),g=Math.min(h,f,u),_=Math.max(o,l,c),p=Math.max(h,f,u),m=Eh(d,g,t,e,n),E=Eh(_,p,t,e,n),T=s.prevZ,y=s.nextZ;for(;T&&T.z>=m&&y&&y.z<=E;){if(T.x>=d&&T.x<=_&&T.y>=g&&T.y<=p&&T!==i&&T!==a&&zr(o,h,l,f,c,u,T.x,T.y)&&xe(T.prev,T,T.next)>=0||(T=T.prevZ,y.x>=d&&y.x<=_&&y.y>=g&&y.y<=p&&y!==i&&y!==a&&zr(o,h,l,f,c,u,y.x,y.y)&&xe(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;T&&T.z>=m;){if(T.x>=d&&T.x<=_&&T.y>=g&&T.y<=p&&T!==i&&T!==a&&zr(o,h,l,f,c,u,T.x,T.y)&&xe(T.prev,T,T.next)>=0)return!1;T=T.prevZ}for(;y&&y.z<=E;){if(y.x>=d&&y.x<=_&&y.y>=g&&y.y<=p&&y!==i&&y!==a&&zr(o,h,l,f,c,u,y.x,y.y)&&xe(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function ym(s,t){let e=s;do{let n=e.prev,i=e.next.next;!ar(n,i)&&Dd(n,e,e.next,i)&&pa(n,i)&&pa(i,n)&&(t.push(n.i,e.i,i.i),ma(e),ma(e.next),e=s=i),e=e.next}while(e!==s);return fs(e)}function Mm(s,t,e,n,i,r){let a=s;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Pm(a,o)){let l=Nd(a,o);a=fs(a,a.next),l=fs(l,l.next),da(a,t,e,n,i,r,0),da(l,t,e,n,i,r,0);return}o=o.next}a=a.next}while(a!==s)}function Sm(s,t,e,n){let i=[];for(let r=0,a=t.length;r<a;r++){let o=t[r]*n,l=r<a-1?t[r+1]*n:s.length,c=Id(s,o,l,n,!1);c===c.next&&(c.steiner=!0),i.push(Rm(c))}i.sort(bm);for(let r=0;r<i.length;r++)e=Tm(i[r],e);return e}function bm(s,t){let e=s.x-t.x;if(e===0&&(e=s.y-t.y,e===0)){let n=(s.next.y-s.y)/(s.next.x-s.x),i=(t.next.y-t.y)/(t.next.x-t.x);e=n-i}return e}function Tm(s,t){let e=Em(s,t);if(!e)return t;let n=Nd(e,s);return fs(n,n.next),fs(e,e.next)}function Em(s,t){let e=t,n=s.x,i=s.y,r=-1/0,a;if(ar(s,e))return e;do{if(ar(s,e.next))return e.next;if(i<=e.y&&i>=e.next.y&&e.next.y!==e.y){let f=e.x+(i-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=n&&f>r&&(r=f,a=e.x<e.next.x?e:e.next,f===n))return a}e=e.next}while(e!==t);if(!a)return null;let o=a,l=a.x,c=a.y,h=1/0;e=a;do{if(n>=e.x&&e.x>=l&&n!==e.x&&Ld(i<c?n:r,i,l,c,i<c?r:n,i,e.x,e.y)){let f=Math.abs(i-e.y)/(n-e.x);pa(e,s)&&(f<h||f===h&&(e.x>a.x||e.x===a.x&&wm(a,e)))&&(a=e,h=f)}e=e.next}while(e!==o);return a}function wm(s,t){return xe(s.prev,s,t.prev)<0&&xe(t.next,s,s.next)<0}function Am(s,t,e,n){let i=s;do i.z===0&&(i.z=Eh(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,Cm(i)}function Cm(s){let t,e=1;do{let n=s,i;s=null;let r=null;for(t=0;n;){t++;let a=n,o=0;for(let c=0;c<e&&(o++,a=a.nextZ,!!a);c++);let l=e;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(i=n,n=n.nextZ,o--):(i=a,a=a.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;n=a}r.nextZ=null,e*=2}while(t>1);return s}function Eh(s,t,e,n,i){return s=(s-e)*i|0,t=(t-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function Rm(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function Ld(s,t,e,n,i,r,a,o){return(i-a)*(t-o)>=(s-a)*(r-o)&&(s-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(i-a)*(n-o)}function zr(s,t,e,n,i,r,a,o){return!(s===a&&t===o)&&Ld(s,t,e,n,i,r,a,o)}function Pm(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!Im(s,t)&&(pa(s,t)&&pa(t,s)&&Lm(s,t)&&(xe(s.prev,s,t.prev)||xe(s,t.prev,t))||ar(s,t)&&xe(s.prev,s,s.next)>0&&xe(t.prev,t,t.next)>0)}function xe(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function ar(s,t){return s.x===t.x&&s.y===t.y}function Dd(s,t,e,n){let i=Do(xe(s,t,e)),r=Do(xe(s,t,n)),a=Do(xe(e,n,s)),o=Do(xe(e,n,t));return!!(i!==r&&a!==o||i===0&&Lo(s,e,t)||r===0&&Lo(s,n,t)||a===0&&Lo(e,s,n)||o===0&&Lo(e,t,n))}function Lo(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function Do(s){return s>0?1:s<0?-1:0}function Im(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&Dd(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function pa(s,t){return xe(s.prev,s,s.next)<0?xe(s,t,s.next)>=0&&xe(s,s.prev,t)>=0:xe(s,t,s.prev)<0||xe(s,s.next,t)<0}function Lm(s,t){let e=s,n=!1,i=(s.x+t.x)/2,r=(s.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&i<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==s);return n}function Nd(s,t){let e=wh(s.i,s.x,s.y),n=wh(t.i,t.x,t.y),i=s.next,r=t.prev;return s.next=t,t.prev=s,e.next=i,i.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function zf(s,t,e,n){let i=wh(s,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function ma(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function wh(s,t,e){return{i:s,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Dm(s,t,e,n){let i=0;for(let r=t,a=e-n;r<e;r+=n)i+=(s[a]-s[r])*(s[r+1]+s[a+1]),a=r;return i}var Ah=class{static triangulate(t,e,n=2){return _m(t,e,n)}},os=class s{static area(t){let e=t.length,n=0;for(let i=e-1,r=0;r<e;i=r++)n+=t[i].x*t[r].y-t[r].x*t[i].y;return n*.5}static isClockWise(t){return s.area(t)<0}static triangulateShape(t,e){let n=[],i=[],r=[];kf(t),Vf(n,t);let a=t.length;e.forEach(kf);for(let l=0;l<e.length;l++)i.push(a),a+=e[l].length,Vf(n,e[l]);let o=Ah.triangulate(n,i);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function kf(s){let t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function Vf(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}var ga=class s extends Ve{constructor(t=new rr([new rt(.5,.5),new rt(-.5,.5),new rt(-.5,-.5),new rt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,i=[],r=[];for(let o=0,l=t.length;o<l;o++){let c=t[o];a(c)}this.setAttribute("position",new Oe(i,3)),this.setAttribute("uv",new Oe(r,2)),this.computeVertexNormals();function a(o){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,f=e.depth!==void 0?e.depth:1,u=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:d-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,p=e.bevelSegments!==void 0?e.bevelSegments:3,m=e.extrudePath,E=e.UVGenerator!==void 0?e.UVGenerator:Nm,T,y=!1,M,w,A,x;if(m){T=m.getSpacedPoints(h),y=!0,u=!1;let et=m.isCatmullRomCurve3?m.closed:!1;M=m.computeFrenetFrames(h,et),w=new L,A=new L,x=new L}u||(p=0,d=0,g=0,_=0);let b=o.extractPoints(c),R=b.shape,P=b.holes;if(!os.isClockWise(R)){R=R.reverse();for(let et=0,nt=P.length;et<nt;et++){let it=P[et];os.isClockWise(it)&&(P[et]=it.reverse())}}function H(et){let it=10000000000000001e-36,ft=et[0];for(let ht=1;ht<=et.length;ht++){let It=ht%et.length,wt=et[It],Ut=wt.x-ft.x,Gt=wt.y-ft.y,I=Ut*Ut+Gt*Gt,se=Math.max(Math.abs(wt.x),Math.abs(wt.y),Math.abs(ft.x),Math.abs(ft.y)),$t=it*se*se;if(I<=$t){et.splice(It,1),ht--;continue}ft=wt}}H(R),P.forEach(H);let W=P.length,U=R;for(let et=0;et<W;et++){let nt=P[et];R=R.concat(nt)}function z(et,nt,it){return nt||zt("ExtrudeGeometry: vec does not exist"),et.clone().addScaledVector(nt,it)}let B=R.length;function Z(et,nt,it){let ft,ht,It,wt=et.x-nt.x,Ut=et.y-nt.y,Gt=it.x-et.x,I=it.y-et.y,se=wt*wt+Ut*Ut,$t=wt*I-Ut*Gt;if(Math.abs($t)>Number.EPSILON){let C=Math.sqrt(se),v=Math.sqrt(Gt*Gt+I*I),O=nt.x-Ut/C,k=nt.y+wt/C,q=it.x-I/v,ot=it.y+Gt/v,ct=((q-O)*I-(ot-k)*Gt)/(wt*I-Ut*Gt);ft=O+wt*ct-et.x,ht=k+Ut*ct-et.y;let Y=ft*ft+ht*ht;if(Y<=2)return new rt(ft,ht);It=Math.sqrt(Y/2)}else{let C=!1;wt>Number.EPSILON?Gt>Number.EPSILON&&(C=!0):wt<-Number.EPSILON?Gt<-Number.EPSILON&&(C=!0):Math.sign(Ut)===Math.sign(I)&&(C=!0),C?(ft=-Ut,ht=wt,It=Math.sqrt(se)):(ft=wt,ht=Ut,It=Math.sqrt(se/2))}return new rt(ft/It,ht/It)}let tt=[];for(let et=0,nt=U.length,it=nt-1,ft=et+1;et<nt;et++,it++,ft++)it===nt&&(it=0),ft===nt&&(ft=0),tt[et]=Z(U[et],U[it],U[ft]);let at=[],lt,dt=tt.concat();for(let et=0,nt=W;et<nt;et++){let it=P[et];lt=[];for(let ft=0,ht=it.length,It=ht-1,wt=ft+1;ft<ht;ft++,It++,wt++)It===ht&&(It=0),wt===ht&&(wt=0),lt[ft]=Z(it[ft],it[It],it[wt]);at.push(lt),dt=dt.concat(lt)}let Wt;if(p===0)Wt=os.triangulateShape(U,P);else{let et=[],nt=[];for(let it=0;it<p;it++){let ft=it/p,ht=d*Math.cos(ft*Math.PI/2),It=g*Math.sin(ft*Math.PI/2)+_;for(let wt=0,Ut=U.length;wt<Ut;wt++){let Gt=z(U[wt],tt[wt],It);ut(Gt.x,Gt.y,-ht),ft===0&&et.push(Gt)}for(let wt=0,Ut=W;wt<Ut;wt++){let Gt=P[wt];lt=at[wt];let I=[];for(let se=0,$t=Gt.length;se<$t;se++){let C=z(Gt[se],lt[se],It);ut(C.x,C.y,-ht),ft===0&&I.push(C)}ft===0&&nt.push(I)}}Wt=os.triangulateShape(et,nt)}let Yt=Wt.length,Xt=g+_;for(let et=0;et<B;et++){let nt=u?z(R[et],dt[et],Xt):R[et];y?(A.copy(M.normals[0]).multiplyScalar(nt.x),w.copy(M.binormals[0]).multiplyScalar(nt.y),x.copy(T[0]).add(A).add(w),ut(x.x,x.y,x.z)):ut(nt.x,nt.y,0)}for(let et=1;et<=h;et++)for(let nt=0;nt<B;nt++){let it=u?z(R[nt],dt[nt],Xt):R[nt];y?(A.copy(M.normals[et]).multiplyScalar(it.x),w.copy(M.binormals[et]).multiplyScalar(it.y),x.copy(T[et]).add(A).add(w),ut(x.x,x.y,x.z)):ut(it.x,it.y,f/h*et)}for(let et=p-1;et>=0;et--){let nt=et/p,it=d*Math.cos(nt*Math.PI/2),ft=g*Math.sin(nt*Math.PI/2)+_;for(let ht=0,It=U.length;ht<It;ht++){let wt=z(U[ht],tt[ht],ft);ut(wt.x,wt.y,f+it)}for(let ht=0,It=P.length;ht<It;ht++){let wt=P[ht];lt=at[ht];for(let Ut=0,Gt=wt.length;Ut<Gt;Ut++){let I=z(wt[Ut],lt[Ut],ft);y?ut(I.x,I.y+T[h-1].y,T[h-1].x+it):ut(I.x,I.y,f+it)}}}J(),K();function J(){let et=i.length/3;if(u){let nt=0,it=B*nt;for(let ft=0;ft<Yt;ft++){let ht=Wt[ft];bt(ht[2]+it,ht[1]+it,ht[0]+it)}nt=h+p*2,it=B*nt;for(let ft=0;ft<Yt;ft++){let ht=Wt[ft];bt(ht[0]+it,ht[1]+it,ht[2]+it)}}else{for(let nt=0;nt<Yt;nt++){let it=Wt[nt];bt(it[2],it[1],it[0])}for(let nt=0;nt<Yt;nt++){let it=Wt[nt];bt(it[0]+B*h,it[1]+B*h,it[2]+B*h)}}n.addGroup(et,i.length/3-et,0)}function K(){let et=i.length/3,nt=0;j(U,nt),nt+=U.length;for(let it=0,ft=P.length;it<ft;it++){let ht=P[it];j(ht,nt),nt+=ht.length}n.addGroup(et,i.length/3-et,1)}function j(et,nt){let it=et.length;for(;--it>=0;){let ft=it,ht=it-1;ht<0&&(ht=et.length-1);for(let It=0,wt=h+p*2;It<wt;It++){let Ut=B*It,Gt=B*(It+1),I=nt+ft+Ut,se=nt+ht+Ut,$t=nt+ht+Gt,C=nt+ft+Gt;At(I,se,$t,C)}}}function ut(et,nt,it){l.push(et),l.push(nt),l.push(it)}function bt(et,nt,it){qt(et),qt(nt),qt(it);let ft=i.length/3,ht=E.generateTopUV(n,i,ft-3,ft-2,ft-1);kt(ht[0]),kt(ht[1]),kt(ht[2])}function At(et,nt,it,ft){qt(et),qt(nt),qt(ft),qt(nt),qt(it),qt(ft);let ht=i.length/3,It=E.generateSideWallUV(n,i,ht-6,ht-3,ht-2,ht-1);kt(It[0]),kt(It[1]),kt(It[3]),kt(It[1]),kt(It[2]),kt(It[3])}function qt(et){i.push(l[et*3+0]),i.push(l[et*3+1]),i.push(l[et*3+2])}function kt(et){r.push(et.x),r.push(et.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Um(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,a=t.shapes.length;r<a;r++){let o=e[t.shapes[r]];n.push(o)}let i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new Th[i.type]().fromJSON(i)),new s(n,t.options)}},Nm={generateTopUV:function(s,t,e,n,i){let r=t[e*3],a=t[e*3+1],o=t[n*3],l=t[n*3+1],c=t[i*3],h=t[i*3+1];return[new rt(r,a),new rt(o,l),new rt(c,h)]},generateSideWallUV:function(s,t,e,n,i,r){let a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],f=t[n*3+2],u=t[i*3],d=t[i*3+1],g=t[i*3+2],_=t[r*3],p=t[r*3+1],m=t[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new rt(a,1-l),new rt(c,1-f),new rt(u,1-g),new rt(_,1-m)]:[new rt(o,1-l),new rt(h,1-f),new rt(d,1-g),new rt(p,1-m)]}};function Um(s,t,e){if(e.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){let r=s[n];e.shapes.push(r.uuid)}else e.shapes.push(s.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var ds=class s extends Ve{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,f=t/o,u=e/l,d=[],g=[],_=[],p=[];for(let m=0;m<h;m++){let E=m*u-a;for(let T=0;T<c;T++){let y=T*f-r;g.push(y,-E,0),_.push(0,0,1),p.push(T/o),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let E=0;E<o;E++){let T=E+c*m,y=E+c*(m+1),M=E+1+c*(m+1),w=E+1+c*m;d.push(T,y,w),d.push(y,M,w)}this.setIndex(d),this.setAttribute("position",new Oe(g,3)),this.setAttribute("normal",new Oe(_,3)),this.setAttribute("uv",new Oe(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.widthSegments,t.heightSegments)}};function _s(s){let t={};for(let e in s){t[e]={};for(let n in s[e]){let i=s[e][n];if(Gf(i))i.isRenderTargetTexture?(Bt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone();else if(Array.isArray(i))if(Gf(i[0])){let r=[];for(let a=0,o=i.length;a<o;a++)r[a]=i[a].clone();t[e][n]=r}else t[e][n]=i.slice();else t[e][n]=i}}return t}function Je(s){let t={};for(let e=0;e<s.length;e++){let n=_s(s[e]);for(let i in n)t[i]=n[i]}return t}function Gf(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function Fm(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Xh(s){let t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:te.workingColorSpace}var vi={clone:_s,merge:Je},Om=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Bm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ce=class extends Bn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Om,this.fragmentShader=Bm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=_s(t.uniforms),this.uniformsGroups=Fm(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let i=t.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=e[i.value]||null;break;case"c":this.uniforms[n].value=new Ft().setHex(i.value);break;case"v2":this.uniforms[n].value=new rt().fromArray(i.value);break;case"v3":this.uniforms[n].value=new L().fromArray(i.value);break;case"v4":this.uniforms[n].value=new ge().fromArray(i.value);break;case"m3":this.uniforms[n].value=new Ht().fromArray(i.value);break;case"m4":this.uniforms[n].value=new ae().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},or=class extends Ce{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},_i=class extends Bn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ft(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ft(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ka,this.normalScale=new rt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new En,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},_a=class extends _i{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new rt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return jt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ft(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ft(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ft(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var xa=class extends Bn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ft(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ft(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ka,this.normalScale=new rt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new En,this.combine=El,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},hl=class extends Bn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=_d,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},ul=class extends Bn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function No(s,t){return!s||s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}var Ui=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<i)){for(let o=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=e[++n],t<i)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let a=0;a!==i;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},fl=class extends Ui{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:yh,endingEnd:yh}}intervalChanged_(t,e,n){let i=this.parameterPositions,r=t-2,a=t+1,o=i[r],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case Mh:r=t,o=2*e-n;break;case Sh:r=i.length-2,o=e+i[r]-i[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Mh:a=t,l=2*n-e;break;case Sh:a=1,l=n+i[1]-i[0];break;default:a=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,f=this._offsetNext,u=this._weightPrev,d=this._weightNext,g=(n-e)/(i-e),_=g*g,p=_*g,m=-u*p+2*u*_-u*g,E=(1+u)*p+(-1.5-2*u)*_+(-.5+u)*g+1,T=(-1-d)*p+(1.5+d)*_+.5*g,y=d*p-d*_;for(let M=0;M!==o;++M)r[M]=m*a[h+M]+E*a[c+M]+T*a[l+M]+y*a[f+M];return r}},dl=class extends Ui{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(i-e),f=1-h;for(let u=0;u!==o;++u)r[u]=a[c+u]*f+a[l+u]*h;return r}},pl=class extends Ui{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},ml=class extends Ui{interpolate_(t,e,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this.inTangents,f=this.outTangents;if(!h||!f){let g=(n-e)/(i-e),_=1-g;for(let p=0;p!==o;++p)r[p]=a[c+p]*_+a[l+p]*g;return r}let u=o*2,d=t-1;for(let g=0;g!==o;++g){let _=a[c+g],p=a[l+g],m=d*u+g*2,E=f[m],T=f[m+1],y=t*u+g*2,M=h[y],w=h[y+1],A=(n-e)/(i-e),x,b,R,P,N;for(let H=0;H<8;H++){x=A*A,b=x*A,R=1-A,P=R*R,N=P*R;let U=N*e+3*P*A*E+3*R*x*M+b*i-n;if(Math.abs(U)<1e-10)break;let z=3*P*(E-e)+6*R*A*(M-E)+3*x*(i-M);if(Math.abs(z)<1e-10)break;A=A-U/z,A=Math.max(0,Math.min(1,A))}r[g]=N*_+3*P*A*T+3*R*x*w+b*p}return r}},_n=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=No(e,this.TimeBufferType),this.values=No(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:No(t.times,Array),values:No(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new pl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new dl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new fl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new ml(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Wr:e=this.InterpolantFactoryMethodDiscrete;break;case Jo:e=this.InterpolantFactoryMethodLinear;break;case Oo:e=this.InterpolantFactoryMethodSmooth;break;case vh:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Bt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Wr;case this.InterpolantFactoryMethodLinear:return Jo;case this.InterpolantFactoryMethodSmooth:return Oo;case this.InterpolantFactoryMethodBezier:return vh}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){let n=this.times,i=n.length,r=0,a=i-1;for(;r!==i&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(zt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,r=n.length;r===0&&(zt("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){zt("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){zt("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(i!==void 0&&C0(i))for(let o=0,l=i.length;o!==l;++o){let c=i[o];if(isNaN(c)){zt("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Oo,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(i)l=!0;else{let f=o*n,u=f-n,d=f+n;for(let g=0;g!==n;++g){let _=e[f+g];if(_!==e[u+g]||_!==e[d+g]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let f=o*n,u=a*n;for(let d=0;d!==n;++d)e[u+d]=e[f+d]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}};_n.prototype.ValueTypeName="";_n.prototype.TimeBufferType=Float32Array;_n.prototype.ValueBufferType=Float32Array;_n.prototype.DefaultInterpolation=Jo;var Fi=class extends _n{constructor(t,e,n){super(t,e,n)}};Fi.prototype.ValueTypeName="bool";Fi.prototype.ValueBufferType=Array;Fi.prototype.DefaultInterpolation=Wr;Fi.prototype.InterpolantFactoryMethodLinear=void 0;Fi.prototype.InterpolantFactoryMethodSmooth=void 0;var gl=class extends _n{constructor(t,e,n,i){super(t,e,n,i)}};gl.prototype.ValueTypeName="color";var _l=class extends _n{constructor(t,e,n,i){super(t,e,n,i)}};_l.prototype.ValueTypeName="number";var xl=class extends Ui{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(i-e),c=t*o;for(let h=c+o;c!==h;c+=4)nn.slerpFlat(r,0,a,c-o,a,c,l);return r}},va=class extends _n{constructor(t,e,n,i){super(t,e,n,i)}InterpolantFactoryMethodLinear(t){return new xl(this.times,this.values,this.getValueSize(),t)}};va.prototype.ValueTypeName="quaternion";va.prototype.InterpolantFactoryMethodSmooth=void 0;var Oi=class extends _n{constructor(t,e,n){super(t,e,n)}};Oi.prototype.ValueTypeName="string";Oi.prototype.ValueBufferType=Array;Oi.prototype.DefaultInterpolation=Wr;Oi.prototype.InterpolantFactoryMethodLinear=void 0;Oi.prototype.InterpolantFactoryMethodSmooth=void 0;var vl=class extends _n{constructor(t,e,n,i){super(t,e,n,i)}};vl.prototype.ValueTypeName="vector";var yl=class{constructor(t,e,n){let i=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&i.onStart!==void 0&&i.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,f){return c.push(h,f),this},this.removeHandler=function(h){let f=c.indexOf(h);return f!==-1&&c.splice(f,2),this},this.getHandler=function(h){for(let f=0,u=c.length;f<u;f+=2){let d=c[f],g=c[f+1];if(d.global&&(d.lastIndex=0),d.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Ud=new yl,Ml=class{constructor(t){this.manager=t!==void 0?t:Ud,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Ml.DEFAULT_MATERIAL_NAME="__DEFAULT";var lr=class extends Ie{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ft(t),this.intensity=e}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},ya=class extends lr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ie.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ft(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},xh=new ae,Hf=new L,Wf=new L,Sl=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new rt(512,512),this.mapType=on,this.map=null,this.mapPass=null,this.matrix=new ae,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new er,this._frameExtents=new rt(1,1),this._viewportCount=1,this._viewports=[new ge(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Hf.setFromMatrixPosition(t.matrixWorld),e.position.copy(Hf),Wf.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Wf),e.updateMatrixWorld(),xh.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(xh,e.coordinateSystem,e.reversedDepth),e.coordinateSystem===Js||e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(xh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Uo=new L,Fo=new nn,Xn=new L,Ma=class extends Ie{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ae,this.projectionMatrix=new ae,this.projectionMatrixInverse=new ae,this.coordinateSystem=On,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Uo,Fo,Xn),Xn.x===1&&Xn.y===1&&Xn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Uo,Fo,Xn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Uo,Fo,Xn),Xn.x===1&&Xn.y===1&&Xn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Uo,Fo,Xn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Di=new L,Xf=new rt,qf=new rt,ze=class extends Ma{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Ks*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(kr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ks*2*Math.atan(Math.tan(kr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Di.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Di.x,Di.y).multiplyScalar(-t/Di.z),Di.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Di.x,Di.y).multiplyScalar(-t/Di.z)}getViewSize(t,e){return this.getViewBounds(t,Xf,qf),e.subVectors(qf,Xf)}setViewOffset(t,e,n,i,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(kr*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,e-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Ch=class extends Sl{constructor(){super(new ze(90,1,.5,500)),this.isPointLightShadow=!0}},Sa=class extends lr{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Ch}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},Bi=class extends Ma{constructor(t=-1,e=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-t,a=n+t,o=i+e,l=i-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Rh=class extends Sl{constructor(){super(new Bi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ps=class extends lr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ie.DEFAULT_UP),this.updateMatrix(),this.target=new Ie,this.shadow=new Rh}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var qs=-90,Ys=1,bl=class extends Ie{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new ze(qs,Ys,t,e);i.layers=this.layers,this.add(i);let r=new ze(qs,Ys,t,e);r.layers=this.layers,this.add(r);let a=new ze(qs,Ys,t,e);a.layers=this.layers,this.add(a);let o=new ze(qs,Ys,t,e);o.layers=this.layers,this.add(o);let l=new ze(qs,Ys,t,e);l.layers=this.layers,this.add(l);let c=new ze(qs,Ys,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===On)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Js)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,f=t.getRenderTarget(),u=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let p=!1;t.isWebGLRenderer===!0?p=t.state.buffers.depth.getReversed():p=t.reversedDepthBuffer,t.setRenderTarget(n,0,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(f,u,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Tl=class extends ze{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}},ba=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){this._document=t,t.hidden!==void 0&&(this._pageVisibilityHandler=zm.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function zm(){this._document.hidden===!1&&this.reset()}var qh="\\[\\]\\.:\\/",km=new RegExp("["+qh+"]","g"),Yh="[^"+qh+"]",Vm="[^"+qh.replace("\\.","")+"]",Gm=/((?:WC+[\/:])*)/.source.replace("WC",Yh),Hm=/(WCOD+)?/.source.replace("WCOD",Vm),Wm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Yh),Xm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Yh),qm=new RegExp("^"+Gm+Hm+Wm+Xm+"$"),Ym=["material","materials","bones","map"],Ph=class{constructor(t,e,n){let i=n||me.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},me=class s{constructor(t,e,n){this.path=e,this.parsedPath=n||s.parseTrackName(e),this.node=s.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new s.Composite(t,e,n):new s(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(km,"")}static parseTrackName(t){let e=qm.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);Ym.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,r=e.propertyIndex;if(t||(t=s.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Bt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){zt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){zt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){zt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){zt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){zt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){zt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){zt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[i];if(a===void 0){let c=e.nodeName;zt("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){zt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){zt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};me.Composite=Ph;me.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};me.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};me.prototype.GetterByBindingType=[me.prototype._getValue_direct,me.prototype._getValue_array,me.prototype._getValue_arrayElement,me.prototype._getValue_toArray];me.prototype.SetterByBindingTypeAndVersioning=[[me.prototype._setValue_direct,me.prototype._setValue_direct_setNeedsUpdate,me.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[me.prototype._setValue_array,me.prototype._setValue_array_setNeedsUpdate,me.prototype._setValue_array_setMatrixWorldNeedsUpdate],[me.prototype._setValue_arrayElement,me.prototype._setValue_arrayElement_setNeedsUpdate,me.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[me.prototype._setValue_fromArray,me.prototype._setValue_fromArray_setNeedsUpdate,me.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var CM=new Float32Array(1);var Ta=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Bt("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};var Ih=class s{static{s.prototype.isMatrix2=!0}constructor(t,e,n,i){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,i){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=i,this}};function Zh(s,t,e,n){let i=Zm(n);switch(e){case kh:return s*t;case Ll:return s*t/i.components*i.byteLength;case Dl:return s*t/i.components*i.byteLength;case Hi:return s*t*2/i.components*i.byteLength;case Nl:return s*t*2/i.components*i.byteLength;case Vh:return s*t*3/i.components*i.byteLength;case Rn:return s*t*4/i.components*i.byteLength;case Ul:return s*t*4/i.components*i.byteLength;case Na:case Ua:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Fa:case Oa:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Ol:case zl:return Math.max(s,16)*Math.max(t,8)/4;case Fl:case Bl:return Math.max(s,8)*Math.max(t,8)/2;case kl:case Vl:case Hl:case Wl:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Gl:case Ba:case Xl:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case ql:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Yl:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Zl:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Jl:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case $l:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Kl:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Ql:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case jl:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case tc:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case ec:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case nc:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case ic:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case sc:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case rc:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case ac:case oc:case lc:return Math.ceil(s/4)*Math.ceil(t/4)*16;case cc:case hc:return Math.ceil(s/4)*Math.ceil(t/4)*8;case za:case uc:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Zm(s){switch(s){case on:case Fh:return{byteLength:1,components:1};case hr:case Oh:case Ze:return{byteLength:2,components:1};case Pl:case Il:return{byteLength:2,components:4};case kn:case Rl:case Cn:return{byteLength:4,components:1};case Bh:case zh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"185"}}));typeof window<"u"&&(window.__THREE__?Bt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="185");function sp(){let s=null,t=!1,e=null,n=null;function i(r,a){e(r,a),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&s!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function $m(s){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,f=c.byteLength,u=s.createBuffer();s.bindBuffer(l,u),s.bufferData(l,c,h),o.onUploadCallback();let d;if(c instanceof Float32Array)d=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=s.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=s.HALF_FLOAT:d=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=s.SHORT;else if(c instanceof Uint32Array)d=s.UNSIGNED_INT;else if(c instanceof Int32Array)d=s.INT;else if(c instanceof Int8Array)d=s.BYTE;else if(c instanceof Uint8Array)d=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,l,c){let h=l.array,f=l.updateRanges;if(s.bindBuffer(c,o),f.length===0)s.bufferSubData(c,0,h);else{f.sort((d,g)=>d.start-g.start);let u=0;for(let d=1;d<f.length;d++){let g=f[u],_=f[d];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++u,f[u]=_)}f.length=u+1;for(let d=0,g=f.length;d<g;d++){let _=f[d];s.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(s.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:r,update:a}}var Km=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Qm=`#ifdef USE_ALPHAHASH
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
#endif`,jm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,tg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,eg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ng=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ig=`#ifdef USE_AOMAP
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
#endif`,sg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,rg=`#ifdef USE_BATCHING
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
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,ag=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,og=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,lg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,cg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,hg=`#ifdef USE_IRIDESCENCE
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
#endif`,ug=`#ifdef USE_BUMPMAP
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
#endif`,fg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,dg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,pg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,mg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,gg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,_g=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,xg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,vg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,yg=`#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,Mg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Sg=`vec3 transformedNormal = objectNormal;
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
#endif`,bg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Tg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Eg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,wg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ag="gl_FragColor = linearToOutputTexel( gl_FragColor );",Cg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Rg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Pg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Ig=`#ifdef USE_ENVMAP
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
#endif`,Lg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Dg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Ng=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ug=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Fg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Og=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Bg=`#ifdef USE_GRADIENTMAP
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
}`,zg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,kg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Vg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Gg=`uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
#endif
#include <lightprobes_pars_fragment>`,Hg=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
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
#endif`,Wg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Xg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,qg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Yg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Zg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,Jg=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
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
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
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
		return 0.5 / max( gv + gl, EPSILON );
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,$g=`
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
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Kg=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
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
#endif`,Qg=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,jg=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,t_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,e_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,n_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,i_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,s_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,r_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,a_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,o_=`#if defined( USE_POINTS_UV )
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
#endif`,l_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,c_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,h_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,u_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,f_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,d_=`#ifdef USE_MORPHTARGETS
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
#endif`,p_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,m_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,g_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,__=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,x_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,v_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,y_=`#ifdef USE_NORMALMAP
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
#endif`,M_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,S_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,b_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,T_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,E_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,w_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,A_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,C_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,R_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,P_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,I_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,L_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,D_=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
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
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,N_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,U_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
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
#endif`,F_=`float getShadowMask() {
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
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
}`,O_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,B_=`#ifdef USE_SKINNING
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
#endif`,z_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,k_=`#ifdef USE_SKINNING
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
#endif`,V_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,G_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,H_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,W_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,X_=`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,q_=`#ifdef USE_TRANSMISSION
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
#endif`,Y_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Z_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,J_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,K_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Q_=`uniform sampler2D t2D;
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
}`,j_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,t1=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,e1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,n1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,i1=`#include <common>
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
}`,s1=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,r1=`#define DISTANCE
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
}`,a1=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,o1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,l1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,c1=`uniform float scale;
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
}`,h1=`uniform vec3 diffuse;
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
}`,u1=`#include <common>
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
}`,f1=`uniform vec3 diffuse;
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
}`,d1=`#define LAMBERT
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
}`,p1=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,m1=`#define MATCAP
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
}`,g1=`#define MATCAP
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
}`,_1=`#define NORMAL
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
}`,x1=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,v1=`#define PHONG
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
}`,y1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,M1=`#define STANDARD
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
}`,S1=`#define STANDARD
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,b1=`#define TOON
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
}`,T1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,E1=`uniform float size;
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
}`,w1=`uniform vec3 diffuse;
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
}`,A1=`#include <common>
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
}`,C1=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,R1=`uniform float rotation;
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
}`,P1=`uniform vec3 diffuse;
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
}`,Kt={alphahash_fragment:Km,alphahash_pars_fragment:Qm,alphamap_fragment:jm,alphamap_pars_fragment:tg,alphatest_fragment:eg,alphatest_pars_fragment:ng,aomap_fragment:ig,aomap_pars_fragment:sg,batching_pars_vertex:rg,batching_vertex:ag,begin_vertex:og,beginnormal_vertex:lg,bsdfs:cg,iridescence_fragment:hg,bumpmap_pars_fragment:ug,clipping_planes_fragment:fg,clipping_planes_pars_fragment:dg,clipping_planes_pars_vertex:pg,clipping_planes_vertex:mg,color_fragment:gg,color_pars_fragment:_g,color_pars_vertex:xg,color_vertex:vg,common:yg,cube_uv_reflection_fragment:Mg,defaultnormal_vertex:Sg,displacementmap_pars_vertex:bg,displacementmap_vertex:Tg,emissivemap_fragment:Eg,emissivemap_pars_fragment:wg,colorspace_fragment:Ag,colorspace_pars_fragment:Cg,envmap_fragment:Rg,envmap_common_pars_fragment:Pg,envmap_pars_fragment:Ig,envmap_pars_vertex:Lg,envmap_physical_pars_fragment:Hg,envmap_vertex:Dg,fog_vertex:Ng,fog_pars_vertex:Ug,fog_fragment:Fg,fog_pars_fragment:Og,gradientmap_pars_fragment:Bg,lightmap_pars_fragment:zg,lights_lambert_fragment:kg,lights_lambert_pars_fragment:Vg,lights_pars_begin:Gg,lights_toon_fragment:Wg,lights_toon_pars_fragment:Xg,lights_phong_fragment:qg,lights_phong_pars_fragment:Yg,lights_physical_fragment:Zg,lights_physical_pars_fragment:Jg,lights_fragment_begin:$g,lights_fragment_maps:Kg,lights_fragment_end:Qg,lightprobes_pars_fragment:jg,logdepthbuf_fragment:t_,logdepthbuf_pars_fragment:e_,logdepthbuf_pars_vertex:n_,logdepthbuf_vertex:i_,map_fragment:s_,map_pars_fragment:r_,map_particle_fragment:a_,map_particle_pars_fragment:o_,metalnessmap_fragment:l_,metalnessmap_pars_fragment:c_,morphinstance_vertex:h_,morphcolor_vertex:u_,morphnormal_vertex:f_,morphtarget_pars_vertex:d_,morphtarget_vertex:p_,normal_fragment_begin:m_,normal_fragment_maps:g_,normal_pars_fragment:__,normal_pars_vertex:x_,normal_vertex:v_,normalmap_pars_fragment:y_,clearcoat_normal_fragment_begin:M_,clearcoat_normal_fragment_maps:S_,clearcoat_pars_fragment:b_,iridescence_pars_fragment:T_,opaque_fragment:E_,packing:w_,premultiplied_alpha_fragment:A_,project_vertex:C_,dithering_fragment:R_,dithering_pars_fragment:P_,roughnessmap_fragment:I_,roughnessmap_pars_fragment:L_,shadowmap_pars_fragment:D_,shadowmap_pars_vertex:N_,shadowmap_vertex:U_,shadowmask_pars_fragment:F_,skinbase_vertex:O_,skinning_pars_vertex:B_,skinning_vertex:z_,skinnormal_vertex:k_,specularmap_fragment:V_,specularmap_pars_fragment:G_,tonemapping_fragment:H_,tonemapping_pars_fragment:W_,transmission_fragment:X_,transmission_pars_fragment:q_,uv_pars_fragment:Y_,uv_pars_vertex:Z_,uv_vertex:J_,worldpos_vertex:$_,background_vert:K_,background_frag:Q_,backgroundCube_vert:j_,backgroundCube_frag:t1,cube_vert:e1,cube_frag:n1,depth_vert:i1,depth_frag:s1,distance_vert:r1,distance_frag:a1,equirect_vert:o1,equirect_frag:l1,linedashed_vert:c1,linedashed_frag:h1,meshbasic_vert:u1,meshbasic_frag:f1,meshlambert_vert:d1,meshlambert_frag:p1,meshmatcap_vert:m1,meshmatcap_frag:g1,meshnormal_vert:_1,meshnormal_frag:x1,meshphong_vert:v1,meshphong_frag:y1,meshphysical_vert:M1,meshphysical_frag:S1,meshtoon_vert:b1,meshtoon_frag:T1,points_vert:E1,points_frag:w1,shadow_vert:A1,shadow_frag:C1,sprite_vert:R1,sprite_frag:P1},vt={common:{diffuse:{value:new Ft(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ht}},envmap:{envMap:{value:null},envMapRotation:{value:new Ht},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ht},normalScale:{value:new rt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ft(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new L},probesMax:{value:new L},probesResolution:{value:new L}},points:{diffuse:{value:new Ft(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0},uvTransform:{value:new Ht}},sprite:{diffuse:{value:new Ft(16777215)},opacity:{value:1},center:{value:new rt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}}},ei={basic:{uniforms:Je([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.fog]),vertexShader:Kt.meshbasic_vert,fragmentShader:Kt.meshbasic_frag},lambert:{uniforms:Je([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,vt.lights,{emissive:{value:new Ft(0)},envMapIntensity:{value:1}}]),vertexShader:Kt.meshlambert_vert,fragmentShader:Kt.meshlambert_frag},phong:{uniforms:Je([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,vt.lights,{emissive:{value:new Ft(0)},specular:{value:new Ft(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Kt.meshphong_vert,fragmentShader:Kt.meshphong_frag},standard:{uniforms:Je([vt.common,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.roughnessmap,vt.metalnessmap,vt.fog,vt.lights,{emissive:{value:new Ft(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Kt.meshphysical_vert,fragmentShader:Kt.meshphysical_frag},toon:{uniforms:Je([vt.common,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.gradientmap,vt.fog,vt.lights,{emissive:{value:new Ft(0)}}]),vertexShader:Kt.meshtoon_vert,fragmentShader:Kt.meshtoon_frag},matcap:{uniforms:Je([vt.common,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,{matcap:{value:null}}]),vertexShader:Kt.meshmatcap_vert,fragmentShader:Kt.meshmatcap_frag},points:{uniforms:Je([vt.points,vt.fog]),vertexShader:Kt.points_vert,fragmentShader:Kt.points_frag},dashed:{uniforms:Je([vt.common,vt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Kt.linedashed_vert,fragmentShader:Kt.linedashed_frag},depth:{uniforms:Je([vt.common,vt.displacementmap]),vertexShader:Kt.depth_vert,fragmentShader:Kt.depth_frag},normal:{uniforms:Je([vt.common,vt.bumpmap,vt.normalmap,vt.displacementmap,{opacity:{value:1}}]),vertexShader:Kt.meshnormal_vert,fragmentShader:Kt.meshnormal_frag},sprite:{uniforms:Je([vt.sprite,vt.fog]),vertexShader:Kt.sprite_vert,fragmentShader:Kt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Kt.background_vert,fragmentShader:Kt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ht}},vertexShader:Kt.backgroundCube_vert,fragmentShader:Kt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Kt.cube_vert,fragmentShader:Kt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Kt.equirect_vert,fragmentShader:Kt.equirect_frag},distance:{uniforms:Je([vt.common,vt.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Kt.distance_vert,fragmentShader:Kt.distance_frag},shadow:{uniforms:Je([vt.lights,vt.fog,{color:{value:new Ft(0)},opacity:{value:1}}]),vertexShader:Kt.shadow_vert,fragmentShader:Kt.shadow_frag}};ei.physical={uniforms:Je([ei.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ht},clearcoatNormalScale:{value:new rt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ht},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ht},sheen:{value:0},sheenColor:{value:new Ft(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ht},transmissionSamplerSize:{value:new rt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ht},attenuationDistance:{value:0},attenuationColor:{value:new Ft(0)},specularColor:{value:new Ft(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ht},anisotropyVector:{value:new rt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ht}}]),vertexShader:Kt.meshphysical_vert,fragmentShader:Kt.meshphysical_frag};var mc={r:0,b:0,g:0},I1=new ae,rp=new Ht;rp.set(-1,0,0,0,1,0,0,0,1);function L1(s,t,e,n,i,r){let a=new Ft(0),o=i===!0?0:1,l,c,h=null,f=0,u=null;function d(E){let T=E.isScene===!0?E.background:null;if(T&&T.isTexture){let y=E.backgroundBlurriness>0;T=t.get(T,y)}return T}function g(E){let T=!1,y=d(E);y===null?p(a,o):y&&y.isColor&&(p(y,1),T=!0);let M=s.xr.getEnvironmentBlendMode();M==="additive"?e.buffers.color.setClear(0,0,0,1,r):M==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(s.autoClear||T)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function _(E,T){let y=d(T);y&&(y.isCubeTexture||y.mapping===La)?(c===void 0&&(c=new le(new jn(1,1,1),new Ce({name:"BackgroundCubeMaterial",uniforms:_s(ei.backgroundCube.uniforms),vertexShader:ei.backgroundCube.vertexShader,fragmentShader:ei.backgroundCube.fragmentShader,side:Ge,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(M,w,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(I1.makeRotationFromEuler(T.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(rp),c.material.toneMapped=te.getTransfer(y.colorSpace)!==ie,(h!==y||f!==y.version||u!==s.toneMapping)&&(c.material.needsUpdate=!0,h=y,f=y.version,u=s.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new le(new ds(2,2),new Ce({name:"BackgroundMaterial",uniforms:_s(ei.background.uniforms),vertexShader:ei.background.vertexShader,fragmentShader:ei.background.fragmentShader,side:di,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.toneMapped=te.getTransfer(y.colorSpace)!==ie,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||f!==y.version||u!==s.toneMapping)&&(l.material.needsUpdate=!0,h=y,f=y.version,u=s.toneMapping),l.layers.enableAll(),E.unshift(l,l.geometry,l.material,0,0,null))}function p(E,T){E.getRGB(mc,Xh(s)),e.buffers.color.setClear(mc.r,mc.g,mc.b,T,r)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(E,T=1){a.set(E),o=T,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(E){o=E,p(a,o)},render:g,addToRenderList:_,dispose:m}}function D1(s,t){let e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=u(null),r=i,a=!1;function o(P,N,H,W,U){let z=!1,B=f(P,W,H,N);r!==B&&(r=B,c(r.object)),z=d(P,W,H,U),z&&g(P,W,H,U),U!==null&&t.update(U,s.ELEMENT_ARRAY_BUFFER),(z||a)&&(a=!1,y(P,N,H,W),U!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(U).buffer))}function l(){return s.createVertexArray()}function c(P){return s.bindVertexArray(P)}function h(P){return s.deleteVertexArray(P)}function f(P,N,H,W){let U=W.wireframe===!0,z=n[N.id];z===void 0&&(z={},n[N.id]=z);let B=P.isInstancedMesh===!0?P.id:0,Z=z[B];Z===void 0&&(Z={},z[B]=Z);let tt=Z[H.id];tt===void 0&&(tt={},Z[H.id]=tt);let at=tt[U];return at===void 0&&(at=u(l()),tt[U]=at),at}function u(P){let N=[],H=[],W=[];for(let U=0;U<e;U++)N[U]=0,H[U]=0,W[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:H,attributeDivisors:W,object:P,attributes:{},index:null}}function d(P,N,H,W){let U=r.attributes,z=N.attributes,B=0,Z=H.getAttributes();for(let tt in Z)if(Z[tt].location>=0){let lt=U[tt],dt=z[tt];if(dt===void 0&&(tt==="instanceMatrix"&&P.instanceMatrix&&(dt=P.instanceMatrix),tt==="instanceColor"&&P.instanceColor&&(dt=P.instanceColor)),lt===void 0||lt.attribute!==dt||dt&&lt.data!==dt.data)return!0;B++}return r.attributesNum!==B||r.index!==W}function g(P,N,H,W){let U={},z=N.attributes,B=0,Z=H.getAttributes();for(let tt in Z)if(Z[tt].location>=0){let lt=z[tt];lt===void 0&&(tt==="instanceMatrix"&&P.instanceMatrix&&(lt=P.instanceMatrix),tt==="instanceColor"&&P.instanceColor&&(lt=P.instanceColor));let dt={};dt.attribute=lt,lt&&lt.data&&(dt.data=lt.data),U[tt]=dt,B++}r.attributes=U,r.attributesNum=B,r.index=W}function _(){let P=r.newAttributes;for(let N=0,H=P.length;N<H;N++)P[N]=0}function p(P){m(P,0)}function m(P,N){let H=r.newAttributes,W=r.enabledAttributes,U=r.attributeDivisors;H[P]=1,W[P]===0&&(s.enableVertexAttribArray(P),W[P]=1),U[P]!==N&&(s.vertexAttribDivisor(P,N),U[P]=N)}function E(){let P=r.newAttributes,N=r.enabledAttributes;for(let H=0,W=N.length;H<W;H++)N[H]!==P[H]&&(s.disableVertexAttribArray(H),N[H]=0)}function T(P,N,H,W,U,z,B){B===!0?s.vertexAttribIPointer(P,N,H,U,z):s.vertexAttribPointer(P,N,H,W,U,z)}function y(P,N,H,W){_();let U=W.attributes,z=H.getAttributes(),B=N.defaultAttributeValues;for(let Z in z){let tt=z[Z];if(tt.location>=0){let at=U[Z];if(at===void 0&&(Z==="instanceMatrix"&&P.instanceMatrix&&(at=P.instanceMatrix),Z==="instanceColor"&&P.instanceColor&&(at=P.instanceColor)),at!==void 0){let lt=at.normalized,dt=at.itemSize,Wt=t.get(at);if(Wt===void 0)continue;let Yt=Wt.buffer,Xt=Wt.type,J=Wt.bytesPerElement,K=Xt===s.INT||Xt===s.UNSIGNED_INT||at.gpuType===Rl;if(at.isInterleavedBufferAttribute){let j=at.data,ut=j.stride,bt=at.offset;if(j.isInstancedInterleavedBuffer){for(let At=0;At<tt.locationSize;At++)m(tt.location+At,j.meshPerAttribute);P.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let At=0;At<tt.locationSize;At++)p(tt.location+At);s.bindBuffer(s.ARRAY_BUFFER,Yt);for(let At=0;At<tt.locationSize;At++)T(tt.location+At,dt/tt.locationSize,Xt,lt,ut*J,(bt+dt/tt.locationSize*At)*J,K)}else{if(at.isInstancedBufferAttribute){for(let j=0;j<tt.locationSize;j++)m(tt.location+j,at.meshPerAttribute);P.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let j=0;j<tt.locationSize;j++)p(tt.location+j);s.bindBuffer(s.ARRAY_BUFFER,Yt);for(let j=0;j<tt.locationSize;j++)T(tt.location+j,dt/tt.locationSize,Xt,lt,dt*J,dt/tt.locationSize*j*J,K)}}else if(B!==void 0){let lt=B[Z];if(lt!==void 0)switch(lt.length){case 2:s.vertexAttrib2fv(tt.location,lt);break;case 3:s.vertexAttrib3fv(tt.location,lt);break;case 4:s.vertexAttrib4fv(tt.location,lt);break;default:s.vertexAttrib1fv(tt.location,lt)}}}}E()}function M(){b();for(let P in n){let N=n[P];for(let H in N){let W=N[H];for(let U in W){let z=W[U];for(let B in z)h(z[B].object),delete z[B];delete W[U]}}delete n[P]}}function w(P){if(n[P.id]===void 0)return;let N=n[P.id];for(let H in N){let W=N[H];for(let U in W){let z=W[U];for(let B in z)h(z[B].object),delete z[B];delete W[U]}}delete n[P.id]}function A(P){for(let N in n){let H=n[N];for(let W in H){let U=H[W];if(U[P.id]===void 0)continue;let z=U[P.id];for(let B in z)h(z[B].object),delete z[B];delete U[P.id]}}}function x(P){for(let N in n){let H=n[N],W=P.isInstancedMesh===!0?P.id:0,U=H[W];if(U!==void 0){for(let z in U){let B=U[z];for(let Z in B)h(B[Z].object),delete B[Z];delete U[z]}delete H[W],Object.keys(H).length===0&&delete n[N]}}}function b(){R(),a=!0,r!==i&&(r=i,c(r.object))}function R(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:b,resetDefaultState:R,dispose:M,releaseStatesOfGeometry:w,releaseStatesOfObject:x,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:p,disableUnusedAttributes:E}}function N1(s,t,e){let n;function i(l){n=l}function r(l,c){s.drawArrays(n,l,c),e.update(c,n,1)}function a(l,c,h){h!==0&&(s.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let d=0;d<h;d++)u+=c[d];e.update(u,n,1)}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function U1(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let A=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(A){return!(A!==Rn&&n.convert(A)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){let x=A===Ze&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==on&&n.convert(A)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Cn&&!x)}function l(A){if(A==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(Bt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let f=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&u===!1&&Bt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),p=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),m=s.getParameter(s.MAX_VERTEX_ATTRIBS),E=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),T=s.getParameter(s.MAX_VARYING_VECTORS),y=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),M=s.getParameter(s.MAX_SAMPLES),w=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:u,maxTextures:d,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:E,maxVaryings:T,maxFragmentUniforms:y,maxSamples:M,samples:w}}function F1(s){let t=this,e=null,n=0,i=!1,r=!1,a=new qn,o=new Ht,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){let d=f.length!==0||u||n!==0||i;return i=u,n=f.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,u){e=h(f,u,0)},this.setState=function(f,u,d){let g=f.clippingPlanes,_=f.clipIntersection,p=f.clipShadows,m=s.get(f);if(!i||g===null||g.length===0||r&&!p)r?h(null):c();else{let E=r?0:n,T=E*4,y=m.clippingState||null;l.value=y,y=h(g,u,T,d);for(let M=0;M!==T;++M)y[M]=e[M];m.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(f,u,d,g){let _=f!==null?f.length:0,p=null;if(_!==0){if(p=l.value,g!==!0||p===null){let m=d+_*4,E=u.matrixWorldInverse;o.getNormalMatrix(E),(p===null||p.length<m)&&(p=new Float32Array(m));for(let T=0,y=d;T!==_;++T,y+=4)a.copy(f[T]).applyMatrix4(E,o),a.normal.toArray(p,y),p[y+3]=a.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,p}}var Wi=4,Fd=[.125,.215,.35,.446,.526,.582],xs=20,O1=256,Va=new Bi,Od=new Ft,Jh=null,$h=0,Kh=0,Qh=!1,B1=new L,pr=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,i=100,r={}){let{size:a=256,position:o=B1}=r;Jh=this._renderer.getRenderTarget(),$h=this._renderer.getActiveCubeFace(),Kh=this._renderer.getActiveMipmapLevel(),Qh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,i,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=kd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=zd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Jh,$h,Kh),this._renderer.xr.enabled=Qh,t.scissorTest=!1,fr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ki||t.mapping===gs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Jh=this._renderer.getRenderTarget(),$h=this._renderer.getActiveCubeFace(),Kh=this._renderer.getActiveMipmapLevel(),Qh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:ke,minFilter:ke,generateMipmaps:!1,type:Ze,format:Rn,colorSpace:Xr,depthBuffer:!1},i=Bd(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Bd(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=z1(r)),this._blurMaterial=V1(r,t,e),this._ggxMaterial=k1(r,t,e)}return i}_compileMaterial(t){let e=new le(new Ve,t);this._renderer.compile(e,Va)}_sceneToCubeUV(t,e,n,i,r){let l=new ze(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],f=this._renderer,u=f.autoClear,d=f.toneMapping;f.getClearColor(Od),f.toneMapping=zn,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(i),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new le(new jn,new mi({name:"PMREM.Background",side:Ge,depthWrite:!1,depthTest:!1})));let _=this._backgroundBox,p=_.material,m=!1,E=t.background;E?E.isColor&&(p.color.copy(E),t.background=null,m=!0):(p.color.copy(Od),m=!0);for(let T=0;T<6;T++){let y=T%3;y===0?(l.up.set(0,c[T],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[T],r.y,r.z)):y===1?(l.up.set(0,0,c[T]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[T],r.z)):(l.up.set(0,c[T],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[T]));let M=this._cubeSize;fr(i,y*M,T>2?M:0,M,M),f.setRenderTarget(i),m&&f.render(_,l),f.render(t,l)}f.toneMapping=d,f.autoClear=u,t.background=E}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===ki||t.mapping===gs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=kd()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=zd());let r=i?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;fr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Va)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let i=this._lodMeshes.length;for(let r=1;r<i;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let i=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let l=a.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),f=Math.sqrt(c*c-h*h),u=0+c*1.25,d=f*u,{_lodMax:g}=this,_=this._sizeLods[n],p=3*_*(n>g-Wi?n-g+Wi:0),m=4*(this._cubeSize-_);l.envMap.value=t.texture,l.roughness.value=d,l.mipInt.value=g-e,fr(r,p,m,3*_,2*_),i.setRenderTarget(r),i.render(o,Va),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-n,fr(t,p,m,3*_,2*_),i.setRenderTarget(t),i.render(o,Va)}_blur(t,e,n,i,r){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,i,"latitudinal",r),this._halfBlur(a,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&zt("blur direction must be either latitudinal or longitudinal!");let h=3,f=this._lodMeshes[i];f.material=c;let u=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*xs-1),_=r/g,p=isFinite(r)?1+Math.floor(h*_):xs;p>xs&&Bt(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${xs}`);let m=[],E=0;for(let A=0;A<xs;++A){let x=A/_,b=Math.exp(-x*x/2);m.push(b),A===0?E+=b:A<p&&(E+=2*b)}for(let A=0;A<m.length;A++)m[A]=m[A]/E;u.envMap.value=t.texture,u.samples.value=p,u.weights.value=m,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);let{_lodMax:T}=this;u.dTheta.value=g,u.mipInt.value=T-n;let y=this._sizeLods[i],M=3*y*(i>T-Wi?i-T+Wi:0),w=4*(this._cubeSize-y);fr(e,M,w,3*y,2*y),l.setRenderTarget(e),l.render(f,Va)}};function z1(s){let t=[],e=[],n=[],i=s,r=s-Wi+1+Fd.length;for(let a=0;a<r;a++){let o=Math.pow(2,i);t.push(o);let l=1/o;a>s-Wi?l=Fd[a-s+Wi-1]:a===0&&(l=0),e.push(l);let c=1/(o-2),h=-c,f=1+c,u=[h,h,f,h,f,f,h,h,f,f,h,f],d=6,g=6,_=3,p=2,m=1,E=new Float32Array(_*g*d),T=new Float32Array(p*g*d),y=new Float32Array(m*g*d);for(let w=0;w<d;w++){let A=w%3*2/3-1,x=w>2?0:-1,b=[A,x,0,A+2/3,x,0,A+2/3,x+1,0,A,x,0,A+2/3,x+1,0,A,x+1,0];E.set(b,_*g*w),T.set(u,p*g*w);let R=[w,w,w,w,w,w];y.set(R,m*g*w)}let M=new Ve;M.setAttribute("position",new en(E,_)),M.setAttribute("uv",new en(T,p)),M.setAttribute("faceIndex",new en(y,m)),n.push(new le(M,null)),i>Wi&&i--}return{lodMeshes:n,sizeLods:t,sigmas:e}}function Bd(s,t,e){let n=new Le(s,t,e);return n.texture.mapping=La,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function fr(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function k1(s,t,e){return new Ce({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:O1,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:vc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:An,depthTest:!1,depthWrite:!1})}function V1(s,t,e){let n=new Float32Array(xs),i=new L(0,1,0);return new Ce({name:"SphericalGaussianBlur",defines:{n:xs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:vc(),fragmentShader:`

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
		`,blending:An,depthTest:!1,depthWrite:!1})}function zd(){return new Ce({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:vc(),fragmentShader:`

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
		`,blending:An,depthTest:!1,depthWrite:!1})}function kd(){return new Ce({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:vc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:An,depthTest:!1,depthWrite:!1})}function vc(){return`

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
	`}var _c=class extends Le{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new aa(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new jn(5,5,5),r=new Ce({name:"CubemapFromEquirect",uniforms:_s(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ge,blending:An});r.uniforms.tEquirect.value=e;let a=new le(i,r),o=e.minFilter;return e.minFilter===Vi&&(e.minFilter=ke),new bl(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(r)}};function G1(s){let t=new WeakMap,e=new WeakMap,n=null;function i(u,d=!1){return u==null?null:d?a(u):r(u)}function r(u){if(u&&u.isTexture){let d=u.mapping;if(d===wl||d===Al)if(t.has(u)){let g=t.get(u).texture;return o(g,u.mapping)}else{let g=u.image;if(g&&g.height>0){let _=new _c(g.height);return _.fromEquirectangularTexture(s,u),t.set(u,_),u.addEventListener("dispose",c),o(_.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){let d=u.mapping,g=d===wl||d===Al,_=d===ki||d===gs;if(g||_){let p=e.get(u),m=p!==void 0?p.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==m)return n===null&&(n=new pr(s)),p=g?n.fromEquirectangular(u,p):n.fromCubemap(u,p),p.texture.pmremVersion=u.pmremVersion,e.set(u,p),p.texture;if(p!==void 0)return p.texture;{let E=u.image;return g&&E&&E.height>0||_&&E&&l(E)?(n===null&&(n=new pr(s)),p=g?n.fromEquirectangular(u):n.fromCubemap(u),p.texture.pmremVersion=u.pmremVersion,e.set(u,p),u.addEventListener("dispose",h),p.texture):null}}}return u}function o(u,d){return d===wl?u.mapping=ki:d===Al&&(u.mapping=gs),u}function l(u){let d=0,g=6;for(let _=0;_<g;_++)u[_]!==void 0&&d++;return d===g}function c(u){let d=u.target;d.removeEventListener("dispose",c);let g=t.get(d);g!==void 0&&(t.delete(d),g.dispose())}function h(u){let d=u.target;d.removeEventListener("dispose",h);let g=e.get(d);g!==void 0&&(e.delete(d),g.dispose())}function f(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:f}}function H1(s){let t={};function e(n){if(t[n]!==void 0)return t[n];let i=s.getExtension(n);return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let i=e(n);return i===null&&ls("WebGLRenderer: "+n+" extension not supported."),i}}}function W1(s,t,e,n){let i={},r=new WeakMap;function a(f){let u=f.target;u.index!==null&&t.remove(u.index);for(let g in u.attributes)t.remove(u.attributes[g]);u.removeEventListener("dispose",a),delete i[u.id];let d=r.get(u);d&&(t.remove(d),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(f,u){return i[u.id]===!0||(u.addEventListener("dispose",a),i[u.id]=!0,e.memory.geometries++),u}function l(f){let u=f.attributes;for(let d in u)t.update(u[d],s.ARRAY_BUFFER)}function c(f){let u=[],d=f.index,g=f.attributes.position,_=0;if(g===void 0)return;if(d!==null){let E=d.array;_=d.version;for(let T=0,y=E.length;T<y;T+=3){let M=E[T+0],w=E[T+1],A=E[T+2];u.push(M,w,w,A,A,M)}}else{let E=g.array;_=g.version;for(let T=0,y=E.length/3-1;T<y;T+=3){let M=T+0,w=T+1,A=T+2;u.push(M,w,w,A,A,M)}}let p=new(g.count>=65535?Qr:Kr)(u,1);p.version=_;let m=r.get(f);m&&t.remove(m),r.set(f,p)}function h(f){let u=r.get(f);if(u){let d=f.index;d!==null&&u.version<d.version&&c(f)}else c(f);return r.get(f)}return{get:o,update:l,getWireframeAttribute:h}}function X1(s,t,e){let n;function i(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,u){s.drawElements(n,u,r,f*a),e.update(u,n,1)}function c(f,u,d){d!==0&&(s.drawElementsInstanced(n,u,r,f*a,d),e.update(u,n,d))}function h(f,u,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,f,0,d);let _=0;for(let p=0;p<d;p++)_+=u[p];e.update(_,n,1)}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function q1(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case s.TRIANGLES:e.triangles+=o*(r/3);break;case s.LINES:e.lines+=o*(r/2);break;case s.LINE_STRIP:e.lines+=o*(r-1);break;case s.LINE_LOOP:e.lines+=o*r;break;case s.POINTS:e.points+=o*r;break;default:zt("WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Y1(s,t,e){let n=new WeakMap,i=new ge;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0,u=n.get(o);if(u===void 0||u.count!==f){let b=function(){A.dispose(),n.delete(o),o.removeEventListener("dispose",b)};u!==void 0&&u.texture.dispose();let d=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],E=o.morphAttributes.color||[],T=0;d===!0&&(T=1),g===!0&&(T=2),_===!0&&(T=3);let y=o.attributes.position.count*T,M=1;y>t.maxTextureSize&&(M=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let w=new Float32Array(y*M*4*f),A=new Jr(w,y,M,f);A.type=Cn,A.needsUpdate=!0;let x=T*4;for(let R=0;R<f;R++){let P=p[R],N=m[R],H=E[R],W=y*M*4*R;for(let U=0;U<P.count;U++){let z=U*x;d===!0&&(i.fromBufferAttribute(P,U),w[W+z+0]=i.x,w[W+z+1]=i.y,w[W+z+2]=i.z,w[W+z+3]=0),g===!0&&(i.fromBufferAttribute(N,U),w[W+z+4]=i.x,w[W+z+5]=i.y,w[W+z+6]=i.z,w[W+z+7]=0),_===!0&&(i.fromBufferAttribute(H,U),w[W+z+8]=i.x,w[W+z+9]=i.y,w[W+z+10]=i.z,w[W+z+11]=H.itemSize===4?i.w:1)}}u={count:f,texture:A,size:new rt(y,M)},n.set(o,u),o.addEventListener("dispose",b)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,e);else{let d=0;for(let _=0;_<c.length;_++)d+=c[_];let g=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(s,"morphTargetBaseInfluence",g),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",u.size)}return{update:r}}function Z1(s,t,e,n,i){let r=new WeakMap;function a(c){let h=i.render.frame,f=c.geometry,u=t.get(c,f);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let d=c.skeleton;r.get(d)!==h&&(d.update(),r.set(d,h))}return u}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}var J1={[wa]:"LINEAR_TONE_MAPPING",[Aa]:"REINHARD_TONE_MAPPING",[Ca]:"CINEON_TONE_MAPPING",[ms]:"ACES_FILMIC_TONE_MAPPING",[Pa]:"AGX_TONE_MAPPING",[Ia]:"NEUTRAL_TONE_MAPPING",[Ra]:"CUSTOM_TONE_MAPPING"};function $1(s,t,e,n,i,r){let a=new Le(t,e,{type:s,depthBuffer:i,stencilBuffer:r,samples:n?4:0,depthTexture:i?new gi(t,e):void 0}),o=new Le(t,e,{type:Ze,depthBuffer:!1,stencilBuffer:!1}),l=new Ve;l.setAttribute("position",new Oe([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new Oe([0,2,0,0,2,0],2));let c=new or({uniforms:{tDiffuse:{value:null}},vertexShader:`
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

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

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
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),h=new le(l,c),f=new Bi(-1,1,1,-1,0,1),u=null,d=null,g=!1,_,p=null,m=[],E=!1;this.setSize=function(T,y){a.setSize(T,y),o.setSize(T,y);for(let M=0;M<m.length;M++){let w=m[M];w.setSize&&w.setSize(T,y)}},this.setEffects=function(T){m=T,E=m.length>0&&m[0].isRenderPass===!0;let y=a.width,M=a.height;for(let w=0;w<m.length;w++){let A=m[w];A.setSize&&A.setSize(y,M)}},this.begin=function(T,y){if(g||T.toneMapping===zn&&m.length===0)return!1;if(p=y,y!==null){let M=y.width,w=y.height;(a.width!==M||a.height!==w)&&this.setSize(M,w)}return E===!1&&T.setRenderTarget(a),_=T.toneMapping,T.toneMapping=zn,!0},this.hasRenderPass=function(){return E},this.end=function(T,y){T.toneMapping=_,g=!0;let M=a,w=o;for(let A=0;A<m.length;A++){let x=m[A];if(x.enabled!==!1&&(x.render(T,w,M,y),x.needsSwap!==!1)){let b=M;M=w,w=b}}if(u!==T.outputColorSpace||d!==T.toneMapping){u=T.outputColorSpace,d=T.toneMapping,c.defines={},te.getTransfer(u)===ie&&(c.defines.SRGB_TRANSFER="");let A=J1[d];A&&(c.defines[A]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=M.texture,T.setRenderTarget(p),T.render(h,f),p=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){a.depthTexture&&a.depthTexture.dispose(),a.dispose(),o.dispose(),l.dispose(),c.dispose()}}var ap=new sn,eu=new gi(1,1),op=new Jr,lp=new jo,cp=new aa,Vd=[],Gd=[],Hd=new Float32Array(16),Wd=new Float32Array(9),Xd=new Float32Array(4);function mr(s,t,e){let n=s[0];if(n<=0||n>0)return s;let i=t*e,r=Vd[i];if(r===void 0&&(r=new Float32Array(i),Vd[i]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,s[a].toArray(r,o)}return r}function De(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function Ne(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function yc(s,t){let e=Gd[t];e===void 0&&(e=new Int32Array(t),Gd[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function K1(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function Q1(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;s.uniform2fv(this.addr,t),Ne(e,t)}}function j1(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(De(e,t))return;s.uniform3fv(this.addr,t),Ne(e,t)}}function tx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;s.uniform4fv(this.addr,t),Ne(e,t)}}function ex(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(De(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Ne(e,t)}else{if(De(e,n))return;Xd.set(n),s.uniformMatrix2fv(this.addr,!1,Xd),Ne(e,n)}}function nx(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(De(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Ne(e,t)}else{if(De(e,n))return;Wd.set(n),s.uniformMatrix3fv(this.addr,!1,Wd),Ne(e,n)}}function ix(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(De(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Ne(e,t)}else{if(De(e,n))return;Hd.set(n),s.uniformMatrix4fv(this.addr,!1,Hd),Ne(e,n)}}function sx(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function rx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;s.uniform2iv(this.addr,t),Ne(e,t)}}function ax(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(De(e,t))return;s.uniform3iv(this.addr,t),Ne(e,t)}}function ox(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;s.uniform4iv(this.addr,t),Ne(e,t)}}function lx(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function cx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;s.uniform2uiv(this.addr,t),Ne(e,t)}}function hx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(De(e,t))return;s.uniform3uiv(this.addr,t),Ne(e,t)}}function ux(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;s.uniform4uiv(this.addr,t),Ne(e,t)}}function fx(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(eu.compareFunction=e.isReversedDepthBuffer()?dc:fc,r=eu):r=ap,e.setTexture2D(t||r,i)}function dx(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||lp,i)}function px(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||cp,i)}function mx(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||op,i)}function gx(s){switch(s){case 5126:return K1;case 35664:return Q1;case 35665:return j1;case 35666:return tx;case 35674:return ex;case 35675:return nx;case 35676:return ix;case 5124:case 35670:return sx;case 35667:case 35671:return rx;case 35668:case 35672:return ax;case 35669:case 35673:return ox;case 5125:return lx;case 36294:return cx;case 36295:return hx;case 36296:return ux;case 35678:case 36198:case 36298:case 36306:case 35682:return fx;case 35679:case 36299:case 36307:return dx;case 35680:case 36300:case 36308:case 36293:return px;case 36289:case 36303:case 36311:case 36292:return mx}}function _x(s,t){s.uniform1fv(this.addr,t)}function xx(s,t){let e=mr(t,this.size,2);s.uniform2fv(this.addr,e)}function vx(s,t){let e=mr(t,this.size,3);s.uniform3fv(this.addr,e)}function yx(s,t){let e=mr(t,this.size,4);s.uniform4fv(this.addr,e)}function Mx(s,t){let e=mr(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function Sx(s,t){let e=mr(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function bx(s,t){let e=mr(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function Tx(s,t){s.uniform1iv(this.addr,t)}function Ex(s,t){s.uniform2iv(this.addr,t)}function wx(s,t){s.uniform3iv(this.addr,t)}function Ax(s,t){s.uniform4iv(this.addr,t)}function Cx(s,t){s.uniform1uiv(this.addr,t)}function Rx(s,t){s.uniform2uiv(this.addr,t)}function Px(s,t){s.uniform3uiv(this.addr,t)}function Ix(s,t){s.uniform4uiv(this.addr,t)}function Lx(s,t,e){let n=this.cache,i=t.length,r=yc(e,i);De(n,r)||(s.uniform1iv(this.addr,r),Ne(n,r));let a;this.type===s.SAMPLER_2D_SHADOW?a=eu:a=ap;for(let o=0;o!==i;++o)e.setTexture2D(t[o]||a,r[o])}function Dx(s,t,e){let n=this.cache,i=t.length,r=yc(e,i);De(n,r)||(s.uniform1iv(this.addr,r),Ne(n,r));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||lp,r[a])}function Nx(s,t,e){let n=this.cache,i=t.length,r=yc(e,i);De(n,r)||(s.uniform1iv(this.addr,r),Ne(n,r));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||cp,r[a])}function Ux(s,t,e){let n=this.cache,i=t.length,r=yc(e,i);De(n,r)||(s.uniform1iv(this.addr,r),Ne(n,r));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||op,r[a])}function Fx(s){switch(s){case 5126:return _x;case 35664:return xx;case 35665:return vx;case 35666:return yx;case 35674:return Mx;case 35675:return Sx;case 35676:return bx;case 5124:case 35670:return Tx;case 35667:case 35671:return Ex;case 35668:case 35672:return wx;case 35669:case 35673:return Ax;case 5125:return Cx;case 36294:return Rx;case 36295:return Px;case 36296:return Ix;case 35678:case 36198:case 36298:case 36306:case 35682:return Lx;case 35679:case 36299:case 36307:return Dx;case 35680:case 36300:case 36308:case 36293:return Nx;case 36289:case 36303:case 36311:case 36292:return Ux}}var nu=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=gx(e.type)}},iu=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Fx(e.type)}},su=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let r=0,a=i.length;r!==a;++r){let o=i[r];o.setValue(t,e[o.id],n)}}},jh=/(\w+)(\])?(\[|\.)?/g;function qd(s,t){s.seq.push(t),s.map[t.id]=t}function Ox(s,t,e){let n=s.name,i=n.length;for(jh.lastIndex=0;;){let r=jh.exec(n),a=jh.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){qd(e,c===void 0?new nu(o,s,t):new iu(o,s,t));break}else{let f=e.map[o];f===void 0&&(f=new su(o),qd(e,f)),e=f}}}var dr=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);Ox(o,l,this)}let i=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?i.push(a):r.push(a);i.length>0&&(this.seq=i.concat(r))}setValue(t,e,n,i){let r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,r=t.length;i!==r;++i){let a=t[i];a.id in e&&n.push(a)}return n}};function Yd(s,t,e){let n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}var Bx=37297,zx=0;function kx(s,t){let e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=i;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var Zd=new Ht;function Vx(s){te._getMatrix(Zd,te.workingColorSpace,s);let t=`mat3( ${Zd.elements.map(e=>e.toFixed(4))} )`;switch(te.getTransfer(s)){case qr:return[t,"LinearTransferOETF"];case ie:return[t,"sRGBTransferOETF"];default:return Bt("WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function Jd(s,t,e){let n=s.getShaderParameter(t,s.COMPILE_STATUS),r=(s.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+kx(s.getShaderSource(t),o)}else return r}function Gx(s,t){let e=Vx(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var Hx={[wa]:"Linear",[Aa]:"Reinhard",[Ca]:"Cineon",[ms]:"ACESFilmic",[Pa]:"AgX",[Ia]:"Neutral",[Ra]:"Custom"};function Wx(s,t){let e=Hx[t];return e===void 0?(Bt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var gc=new L;function Xx(){te.getLuminanceCoefficients(gc);let s=gc.x.toFixed(4),t=gc.y.toFixed(4),e=gc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function qx(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ha).join(`
`)}function Yx(s){let t=[];for(let e in s){let n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Zx(s,t){let e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(t,i),a=r.name,o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:s.getAttribLocation(t,a),locationSize:o}}return e}function Ha(s){return s!==""}function $d(s,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Kd(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Jx=/^[ \t]*#include +<([\w\d./]+)>/gm;function ru(s){return s.replace(Jx,Kx)}var $x=new Map;function Kx(s,t){let e=Kt[t];if(e===void 0){let n=$x.get(t);if(n!==void 0)e=Kt[n],Bt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return ru(e)}var Qx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Qd(s){return s.replace(Qx,jx)}function jx(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function jd(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var tv={[Ea]:"SHADOWMAP_TYPE_PCF",[cr]:"SHADOWMAP_TYPE_VSM"};function ev(s){return tv[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var nv={[ki]:"ENVMAP_TYPE_CUBE",[gs]:"ENVMAP_TYPE_CUBE",[La]:"ENVMAP_TYPE_CUBE_UV"};function iv(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":nv[s.envMapMode]||"ENVMAP_TYPE_CUBE"}var sv={[gs]:"ENVMAP_MODE_REFRACTION"};function rv(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":sv[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}var av={[El]:"ENVMAP_BLENDING_MULTIPLY",[pd]:"ENVMAP_BLENDING_MIX",[md]:"ENVMAP_BLENDING_ADD"};function ov(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":av[s.combine]||"ENVMAP_BLENDING_NONE"}function lv(s){let t=s.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function cv(s,t,e,n){let i=s.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=ev(e),c=iv(e),h=rv(e),f=ov(e),u=lv(e),d=qx(e),g=Yx(r),_=i.createProgram(),p,m,E=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ha).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ha).join(`
`),m.length>0&&(m+=`
`)):(p=[jd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ha).join(`
`),m=[jd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==zn?"#define TONE_MAPPING":"",e.toneMapping!==zn?Kt.tonemapping_pars_fragment:"",e.toneMapping!==zn?Wx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Kt.colorspace_pars_fragment,Gx("linearToOutputTexel",e.outputColorSpace),Xx(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ha).join(`
`)),a=ru(a),a=$d(a,e),a=Kd(a,e),o=ru(o),o=$d(o,e),o=Kd(o,e),a=Qd(a),o=Qd(o),e.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,p=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",e.glslVersion===Gh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Gh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let T=E+p+a,y=E+m+o,M=Yd(i,i.VERTEX_SHADER,T),w=Yd(i,i.FRAGMENT_SHADER,y);i.attachShader(_,M),i.attachShader(_,w),e.index0AttributeName!==void 0?i.bindAttribLocation(_,0,e.index0AttributeName):e.hasPositionAttribute===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function A(P){if(s.debug.checkShaderErrors){let N=i.getProgramInfoLog(_)||"",H=i.getShaderInfoLog(M)||"",W=i.getShaderInfoLog(w)||"",U=N.trim(),z=H.trim(),B=W.trim(),Z=!0,tt=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(Z=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,M,w);else{let at=Jd(i,M,"vertex"),lt=Jd(i,w,"fragment");zt("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+U+`
`+at+`
`+lt)}else U!==""?Bt("WebGLProgram: Program Info Log:",U):(z===""||B==="")&&(tt=!1);tt&&(P.diagnostics={runnable:Z,programLog:U,vertexShader:{log:z,prefix:p},fragmentShader:{log:B,prefix:m}})}i.deleteShader(M),i.deleteShader(w),x=new dr(i,_),b=Zx(i,_)}let x;this.getUniforms=function(){return x===void 0&&A(this),x};let b;this.getAttributes=function(){return b===void 0&&A(this),b};let R=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=i.getProgramParameter(_,Bx)),R},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=zx++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=M,this.fragmentShader=w,this}var hv=0,au=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let i=this._getShaderCacheForMaterial(t);return i.has(e)===!1&&(i.add(e),e.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new ou(t),e.set(t,n)),n}},ou=class{constructor(t){this.id=hv++,this.code=t,this.usedTimes=0}};function uv(s){return s===Hi||s===Ba||s===za}function fv(s,t,e,n,i,r){let a=new $r,o=new au,l=new Set,c=[],h=new Map,f=n.logarithmicDepthBuffer,u=n.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return l.add(x),x===0?"uv":`uv${x}`}function _(x,b,R,P,N,H){let W=P.fog,U=N.geometry,z=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?P.environment:null,B=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,Z=t.get(x.envMap||z,B),tt=Z&&Z.mapping===La?Z.image.height:null,at=d[x.type];x.precision!==null&&(u=n.getMaxPrecision(x.precision),u!==x.precision&&Bt("WebGLProgram.getParameters:",x.precision,"not supported, using",u,"instead."));let lt=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,dt=lt!==void 0?lt.length:0,Wt=0;U.morphAttributes.position!==void 0&&(Wt=1),U.morphAttributes.normal!==void 0&&(Wt=2),U.morphAttributes.color!==void 0&&(Wt=3);let Yt,Xt,J,K;if(at){let Ct=ei[at];Yt=Ct.vertexShader,Xt=Ct.fragmentShader}else{Yt=x.vertexShader,Xt=x.fragmentShader;let Ct=o.getVertexShaderStage(x),Se=o.getFragmentShaderStage(x);o.update(x,Ct,Se),J=Ct.id,K=Se.id}let j=s.getRenderTarget(),ut=s.state.buffers.depth.getReversed(),bt=N.isInstancedMesh===!0,At=N.isBatchedMesh===!0,qt=!!x.map,kt=!!x.matcap,et=!!Z,nt=!!x.aoMap,it=!!x.lightMap,ft=!!x.bumpMap&&x.wireframe===!1,ht=!!x.normalMap,It=!!x.displacementMap,wt=!!x.emissiveMap,Ut=!!x.metalnessMap,Gt=!!x.roughnessMap,I=x.anisotropy>0,se=x.clearcoat>0,$t=x.dispersion>0,C=x.iridescence>0,v=x.sheen>0,O=x.transmission>0,k=I&&!!x.anisotropyMap,q=se&&!!x.clearcoatMap,ot=se&&!!x.clearcoatNormalMap,ct=se&&!!x.clearcoatRoughnessMap,Y=C&&!!x.iridescenceMap,$=C&&!!x.iridescenceThicknessMap,mt=v&&!!x.sheenColorMap,Lt=v&&!!x.sheenRoughnessMap,xt=!!x.specularMap,gt=!!x.specularColorMap,Ot=!!x.specularIntensityMap,Vt=O&&!!x.transmissionMap,Zt=O&&!!x.thicknessMap,D=!!x.gradientMap,pt=!!x.alphaMap,Q=x.alphaTest>0,_t=!!x.alphaHash,St=!!x.extensions,st=zn;x.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(st=s.toneMapping);let Pt={shaderID:at,shaderType:x.type,shaderName:x.name,vertexShader:Yt,fragmentShader:Xt,defines:x.defines,customVertexShaderID:J,customFragmentShaderID:K,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:u,batching:At,batchingColor:At&&N._colorsTexture!==null,instancing:bt,instancingColor:bt&&N.instanceColor!==null,instancingMorph:bt&&N.morphTexture!==null,outputColorSpace:j===null?s.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:te.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:qt,matcap:kt,envMap:et,envMapMode:et&&Z.mapping,envMapCubeUVHeight:tt,aoMap:nt,lightMap:it,bumpMap:ft,normalMap:ht,displacementMap:It,emissiveMap:wt,normalMapObjectSpace:ht&&x.normalMapType===xd,normalMapTangentSpace:ht&&x.normalMapType===ka,packedNormalMap:ht&&x.normalMapType===ka&&uv(x.normalMap.format),metalnessMap:Ut,roughnessMap:Gt,anisotropy:I,anisotropyMap:k,clearcoat:se,clearcoatMap:q,clearcoatNormalMap:ot,clearcoatRoughnessMap:ct,dispersion:$t,iridescence:C,iridescenceMap:Y,iridescenceThicknessMap:$,sheen:v,sheenColorMap:mt,sheenRoughnessMap:Lt,specularMap:xt,specularColorMap:gt,specularIntensityMap:Ot,transmission:O,transmissionMap:Vt,thicknessMap:Zt,gradientMap:D,opaque:x.transparent===!1&&x.blending===cs&&x.alphaToCoverage===!1,alphaMap:pt,alphaTest:Q,alphaHash:_t,combine:x.combine,mapUv:qt&&g(x.map.channel),aoMapUv:nt&&g(x.aoMap.channel),lightMapUv:it&&g(x.lightMap.channel),bumpMapUv:ft&&g(x.bumpMap.channel),normalMapUv:ht&&g(x.normalMap.channel),displacementMapUv:It&&g(x.displacementMap.channel),emissiveMapUv:wt&&g(x.emissiveMap.channel),metalnessMapUv:Ut&&g(x.metalnessMap.channel),roughnessMapUv:Gt&&g(x.roughnessMap.channel),anisotropyMapUv:k&&g(x.anisotropyMap.channel),clearcoatMapUv:q&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:ot&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ct&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Y&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:$&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:mt&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:Lt&&g(x.sheenRoughnessMap.channel),specularMapUv:xt&&g(x.specularMap.channel),specularColorMapUv:gt&&g(x.specularColorMap.channel),specularIntensityMapUv:Ot&&g(x.specularIntensityMap.channel),transmissionMapUv:Vt&&g(x.transmissionMap.channel),thicknessMapUv:Zt&&g(x.thicknessMap.channel),alphaMapUv:pt&&g(x.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(ht||I),vertexNormals:!!U.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!U.attributes.uv&&(qt||pt),fog:!!W,useFog:x.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||U.attributes.normal===void 0&&ht===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:ut,skinning:N.isSkinnedMesh===!0,hasPositionAttribute:U.attributes.position!==void 0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:dt,morphTextureStride:Wt,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:H.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:s.shadowMap.enabled&&R.length>0,shadowMapType:s.shadowMap.type,toneMapping:st,decodeVideoTexture:qt&&x.map.isVideoTexture===!0&&te.getTransfer(x.map.colorSpace)===ie,decodeVideoTextureEmissive:wt&&x.emissiveMap.isVideoTexture===!0&&te.getTransfer(x.emissiveMap.colorSpace)===ie,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===wn,flipSided:x.side===Ge,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:St&&x.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(St&&x.extensions.multiDraw===!0||At)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Pt.vertexUv1s=l.has(1),Pt.vertexUv2s=l.has(2),Pt.vertexUv3s=l.has(3),l.clear(),Pt}function p(x){let b=[];if(x.shaderID?b.push(x.shaderID):(b.push(x.customVertexShaderID),b.push(x.customFragmentShaderID)),x.defines!==void 0)for(let R in x.defines)b.push(R),b.push(x.defines[R]);return x.isRawShaderMaterial===!1&&(m(b,x),E(b,x),b.push(s.outputColorSpace)),b.push(x.customProgramCacheKey),b.join()}function m(x,b){x.push(b.precision),x.push(b.outputColorSpace),x.push(b.envMapMode),x.push(b.envMapCubeUVHeight),x.push(b.mapUv),x.push(b.alphaMapUv),x.push(b.lightMapUv),x.push(b.aoMapUv),x.push(b.bumpMapUv),x.push(b.normalMapUv),x.push(b.displacementMapUv),x.push(b.emissiveMapUv),x.push(b.metalnessMapUv),x.push(b.roughnessMapUv),x.push(b.anisotropyMapUv),x.push(b.clearcoatMapUv),x.push(b.clearcoatNormalMapUv),x.push(b.clearcoatRoughnessMapUv),x.push(b.iridescenceMapUv),x.push(b.iridescenceThicknessMapUv),x.push(b.sheenColorMapUv),x.push(b.sheenRoughnessMapUv),x.push(b.specularMapUv),x.push(b.specularColorMapUv),x.push(b.specularIntensityMapUv),x.push(b.transmissionMapUv),x.push(b.thicknessMapUv),x.push(b.combine),x.push(b.fogExp2),x.push(b.sizeAttenuation),x.push(b.morphTargetsCount),x.push(b.morphAttributeCount),x.push(b.numDirLights),x.push(b.numPointLights),x.push(b.numSpotLights),x.push(b.numSpotLightMaps),x.push(b.numHemiLights),x.push(b.numRectAreaLights),x.push(b.numDirLightShadows),x.push(b.numPointLightShadows),x.push(b.numSpotLightShadows),x.push(b.numSpotLightShadowsWithMaps),x.push(b.numLightProbes),x.push(b.shadowMapType),x.push(b.toneMapping),x.push(b.numClippingPlanes),x.push(b.numClipIntersection),x.push(b.depthPacking)}function E(x,b){a.disableAll(),b.instancing&&a.enable(0),b.instancingColor&&a.enable(1),b.instancingMorph&&a.enable(2),b.matcap&&a.enable(3),b.envMap&&a.enable(4),b.normalMapObjectSpace&&a.enable(5),b.normalMapTangentSpace&&a.enable(6),b.clearcoat&&a.enable(7),b.iridescence&&a.enable(8),b.alphaTest&&a.enable(9),b.vertexColors&&a.enable(10),b.vertexAlphas&&a.enable(11),b.vertexUv1s&&a.enable(12),b.vertexUv2s&&a.enable(13),b.vertexUv3s&&a.enable(14),b.vertexTangents&&a.enable(15),b.anisotropy&&a.enable(16),b.alphaHash&&a.enable(17),b.batching&&a.enable(18),b.dispersion&&a.enable(19),b.batchingColor&&a.enable(20),b.gradientMap&&a.enable(21),b.packedNormalMap&&a.enable(22),b.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),b.numLightProbeGrids>0&&a.enable(22),b.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function T(x){let b=d[x.type],R;if(b){let P=ei[b];R=vi.clone(P.uniforms)}else R=x.uniforms;return R}function y(x,b){let R=h.get(b);return R!==void 0?++R.usedTimes:(R=new cv(s,b,x,i),c.push(R),h.set(b,R)),R}function M(x){if(--x.usedTimes===0){let b=c.indexOf(x);c[b]=c[c.length-1],c.pop(),h.delete(x.cacheKey),x.destroy()}}function w(x){o.remove(x)}function A(){o.dispose()}return{getParameters:_,getProgramCacheKey:p,getUniforms:T,acquireProgram:y,releaseProgram:M,releaseShaderCache:w,programs:c,dispose:A}}function dv(){let s=new WeakMap;function t(a){return s.has(a)}function e(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function pv(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.materialVariant!==t.materialVariant?s.materialVariant-t.materialVariant:s.z!==t.z?s.z-t.z:s.id-t.id}function tp(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function ep(){let s=[],t=0,e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function a(u){let d=0;return u.isInstancedMesh&&(d+=2),u.isSkinnedMesh&&(d+=1),d}function o(u,d,g,_,p,m){let E=s[t];return E===void 0?(E={id:u.id,object:u,geometry:d,material:g,materialVariant:a(u),groupOrder:_,renderOrder:u.renderOrder,z:p,group:m},s[t]=E):(E.id=u.id,E.object=u,E.geometry=d,E.material=g,E.materialVariant=a(u),E.groupOrder=_,E.renderOrder=u.renderOrder,E.z=p,E.group=m),t++,E}function l(u,d,g,_,p,m){let E=o(u,d,g,_,p,m);g.transmission>0?n.push(E):g.transparent===!0?i.push(E):e.push(E)}function c(u,d,g,_,p,m){let E=o(u,d,g,_,p,m);g.transmission>0?n.unshift(E):g.transparent===!0?i.unshift(E):e.unshift(E)}function h(u,d,g){e.length>1&&e.sort(u||pv),n.length>1&&n.sort(d||tp),i.length>1&&i.sort(d||tp),g&&(e.reverse(),n.reverse(),i.reverse())}function f(){for(let u=t,d=s.length;u<d;u++){let g=s[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:l,unshift:c,finish:f,sort:h}}function mv(){let s=new WeakMap;function t(n,i){let r=s.get(n),a;return r===void 0?(a=new ep,s.set(n,[a])):i>=r.length?(a=new ep,r.push(a)):a=r[i],a}function e(){s=new WeakMap}return{get:t,dispose:e}}function gv(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new L,color:new Ft};break;case"SpotLight":e={position:new L,direction:new L,color:new Ft,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new Ft,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new Ft,groundColor:new Ft};break;case"RectAreaLight":e={color:new Ft,position:new L,halfWidth:new L,halfHeight:new L};break}return s[t.id]=e,e}}}function _v(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}var xv=0;function vv(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function yv(s){let t=new gv,e=_v(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new L);let i=new L,r=new ae,a=new ae;function o(c){let h=0,f=0,u=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let d=0,g=0,_=0,p=0,m=0,E=0,T=0,y=0,M=0,w=0,A=0;c.sort(vv);for(let b=0,R=c.length;b<R;b++){let P=c[b],N=P.color,H=P.intensity,W=P.distance,U=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===Hi?U=P.shadow.map.texture:U=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)h+=N.r*H,f+=N.g*H,u+=N.b*H;else if(P.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(P.sh.coefficients[z],H);A++}else if(P.isDirectionalLight){let z=t.get(P);if(z.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let B=P.shadow,Z=e.get(P);Z.shadowIntensity=B.intensity,Z.shadowBias=B.bias,Z.shadowNormalBias=B.normalBias,Z.shadowRadius=B.radius,Z.shadowMapSize=B.mapSize,n.directionalShadow[d]=Z,n.directionalShadowMap[d]=U,n.directionalShadowMatrix[d]=P.shadow.matrix,E++}n.directional[d]=z,d++}else if(P.isSpotLight){let z=t.get(P);z.position.setFromMatrixPosition(P.matrixWorld),z.color.copy(N).multiplyScalar(H),z.distance=W,z.coneCos=Math.cos(P.angle),z.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),z.decay=P.decay,n.spot[_]=z;let B=P.shadow;if(P.map&&(n.spotLightMap[M]=P.map,M++,B.updateMatrices(P),P.castShadow&&w++),n.spotLightMatrix[_]=B.matrix,P.castShadow){let Z=e.get(P);Z.shadowIntensity=B.intensity,Z.shadowBias=B.bias,Z.shadowNormalBias=B.normalBias,Z.shadowRadius=B.radius,Z.shadowMapSize=B.mapSize,n.spotShadow[_]=Z,n.spotShadowMap[_]=U,y++}_++}else if(P.isRectAreaLight){let z=t.get(P);z.color.copy(N).multiplyScalar(H),z.halfWidth.set(P.width*.5,0,0),z.halfHeight.set(0,P.height*.5,0),n.rectArea[p]=z,p++}else if(P.isPointLight){let z=t.get(P);if(z.color.copy(P.color).multiplyScalar(P.intensity),z.distance=P.distance,z.decay=P.decay,P.castShadow){let B=P.shadow,Z=e.get(P);Z.shadowIntensity=B.intensity,Z.shadowBias=B.bias,Z.shadowNormalBias=B.normalBias,Z.shadowRadius=B.radius,Z.shadowMapSize=B.mapSize,Z.shadowCameraNear=B.camera.near,Z.shadowCameraFar=B.camera.far,n.pointShadow[g]=Z,n.pointShadowMap[g]=U,n.pointShadowMatrix[g]=P.shadow.matrix,T++}n.point[g]=z,g++}else if(P.isHemisphereLight){let z=t.get(P);z.skyColor.copy(P.color).multiplyScalar(H),z.groundColor.copy(P.groundColor).multiplyScalar(H),n.hemi[m]=z,m++}}p>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=vt.LTC_FLOAT_1,n.rectAreaLTC2=vt.LTC_FLOAT_2):(n.rectAreaLTC1=vt.LTC_HALF_1,n.rectAreaLTC2=vt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=u;let x=n.hash;(x.directionalLength!==d||x.pointLength!==g||x.spotLength!==_||x.rectAreaLength!==p||x.hemiLength!==m||x.numDirectionalShadows!==E||x.numPointShadows!==T||x.numSpotShadows!==y||x.numSpotMaps!==M||x.numLightProbes!==A)&&(n.directional.length=d,n.spot.length=_,n.rectArea.length=p,n.point.length=g,n.hemi.length=m,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=T,n.pointShadowMap.length=T,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=T,n.spotLightMatrix.length=y+M-w,n.spotLightMap.length=M,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=A,x.directionalLength=d,x.pointLength=g,x.spotLength=_,x.rectAreaLength=p,x.hemiLength=m,x.numDirectionalShadows=E,x.numPointShadows=T,x.numSpotShadows=y,x.numSpotMaps=M,x.numLightProbes=A,n.version=xv++)}function l(c,h){let f=0,u=0,d=0,g=0,_=0,p=h.matrixWorldInverse;for(let m=0,E=c.length;m<E;m++){let T=c[m];if(T.isDirectionalLight){let y=n.directional[f];y.direction.setFromMatrixPosition(T.matrixWorld),i.setFromMatrixPosition(T.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(p),f++}else if(T.isSpotLight){let y=n.spot[d];y.position.setFromMatrixPosition(T.matrixWorld),y.position.applyMatrix4(p),y.direction.setFromMatrixPosition(T.matrixWorld),i.setFromMatrixPosition(T.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(p),d++}else if(T.isRectAreaLight){let y=n.rectArea[g];y.position.setFromMatrixPosition(T.matrixWorld),y.position.applyMatrix4(p),a.identity(),r.copy(T.matrixWorld),r.premultiply(p),a.extractRotation(r),y.halfWidth.set(T.width*.5,0,0),y.halfHeight.set(0,T.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),g++}else if(T.isPointLight){let y=n.point[u];y.position.setFromMatrixPosition(T.matrixWorld),y.position.applyMatrix4(p),u++}else if(T.isHemisphereLight){let y=n.hemi[_];y.direction.setFromMatrixPosition(T.matrixWorld),y.direction.transformDirection(p),_++}}}return{setup:o,setupView:l,state:n}}function np(s){let t=new yv(s),e=[],n=[],i=[];function r(u){f.camera=u,e.length=0,n.length=0,i.length=0}function a(u){e.push(u)}function o(u){n.push(u)}function l(u){i.push(u)}function c(){t.setup(e)}function h(u){t.setupView(e,u)}let f={lightsArray:e,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:f,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function Mv(s){let t=new WeakMap;function e(i,r=0){let a=t.get(i),o;return a===void 0?(o=new np(s),t.set(i,[o])):r>=a.length?(o=new np(s),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var Sv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,bv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Tv=[new L(1,0,0),new L(-1,0,0),new L(0,1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1)],Ev=[new L(0,-1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1),new L(0,-1,0),new L(0,-1,0)],ip=new ae,Ga=new L,tu=new L;function wv(s,t,e){let n=new er,i=new rt,r=new rt,a=new ge,o=new hl,l=new ul,c={},h=e.maxTextureSize,f={[di]:Ge,[Ge]:di,[wn]:wn},u=new Ce({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new rt},radius:{value:4}},vertexShader:Sv,fragmentShader:bv}),d=u.clone();d.defines.HORIZONTAL_PASS=1;let g=new Ve;g.setAttribute("position",new en(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new le(g,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ea;let m=this.type;this.render=function(w,A,x){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||w.length===0)return;this.type===Jf&&(Bt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Ea);let b=s.getRenderTarget(),R=s.getActiveCubeFace(),P=s.getActiveMipmapLevel(),N=s.state;N.setBlending(An),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);let H=m!==this.type;H&&A.traverse(function(W){W.material&&(Array.isArray(W.material)?W.material.forEach(U=>U.needsUpdate=!0):W.material.needsUpdate=!0)});for(let W=0,U=w.length;W<U;W++){let z=w[W],B=z.shadow;if(B===void 0){Bt("WebGLShadowMap:",z,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;i.copy(B.mapSize);let Z=B.getFrameExtents();i.multiply(Z),r.copy(B.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/Z.x),i.x=r.x*Z.x,B.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/Z.y),i.y=r.y*Z.y,B.mapSize.y=r.y));let tt=s.state.buffers.depth.getReversed();if(B.camera._reversedDepth=tt,B.map===null||H===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===cr){if(z.isPointLight){Bt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new Le(i.x,i.y,{format:Hi,type:Ze,minFilter:ke,magFilter:ke,generateMipmaps:!1}),B.map.texture.name=z.name+".shadowMap",B.map.depthTexture=new gi(i.x,i.y,Cn),B.map.depthTexture.name=z.name+".shadowMapDepth",B.map.depthTexture.format=$n,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Be,B.map.depthTexture.magFilter=Be}else z.isPointLight?(B.map=new _c(i.x),B.map.depthTexture=new il(i.x,kn)):(B.map=new Le(i.x,i.y),B.map.depthTexture=new gi(i.x,i.y,kn)),B.map.depthTexture.name=z.name+".shadowMap",B.map.depthTexture.format=$n,this.type===Ea?(B.map.depthTexture.compareFunction=tt?dc:fc,B.map.depthTexture.minFilter=ke,B.map.depthTexture.magFilter=ke):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Be,B.map.depthTexture.magFilter=Be);B.camera.updateProjectionMatrix()}let at=B.map.isWebGLCubeRenderTarget?6:1;for(let lt=0;lt<at;lt++){if(B.map.isWebGLCubeRenderTarget)s.setRenderTarget(B.map,lt),s.clear();else{lt===0&&(s.setRenderTarget(B.map),s.clear());let dt=B.getViewport(lt);a.set(r.x*dt.x,r.y*dt.y,r.x*dt.z,r.y*dt.w),N.viewport(a)}if(z.isPointLight){let dt=B.camera,Wt=B.matrix,Yt=z.distance||dt.far;Yt!==dt.far&&(dt.far=Yt,dt.updateProjectionMatrix()),Ga.setFromMatrixPosition(z.matrixWorld),dt.position.copy(Ga),tu.copy(dt.position),tu.add(Tv[lt]),dt.up.copy(Ev[lt]),dt.lookAt(tu),dt.updateMatrixWorld(),Wt.makeTranslation(-Ga.x,-Ga.y,-Ga.z),ip.multiplyMatrices(dt.projectionMatrix,dt.matrixWorldInverse),B._frustum.setFromProjectionMatrix(ip,dt.coordinateSystem,dt.reversedDepth)}else B.updateMatrices(z);n=B.getFrustum(),y(A,x,B.camera,z,this.type)}B.isPointLightShadow!==!0&&this.type===cr&&E(B,x),B.needsUpdate=!1}m=this.type,p.needsUpdate=!1,s.setRenderTarget(b,R,P)};function E(w,A){let x=t.update(_);u.defines.VSM_SAMPLES!==w.blurSamples&&(u.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Le(i.x,i.y,{format:Hi,type:Ze})),u.uniforms.shadow_pass.value=w.map.depthTexture,u.uniforms.resolution.value=w.mapSize,u.uniforms.radius.value=w.radius,s.setRenderTarget(w.mapPass),s.clear(),s.renderBufferDirect(A,null,x,u,_,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,s.setRenderTarget(w.map),s.clear(),s.renderBufferDirect(A,null,x,d,_,null)}function T(w,A,x,b){let R=null,P=x.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(P!==void 0)R=P;else if(R=x.isPointLight===!0?l:o,s.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){let N=R.uuid,H=A.uuid,W=c[N];W===void 0&&(W={},c[N]=W);let U=W[H];U===void 0&&(U=R.clone(),W[H]=U,A.addEventListener("dispose",M)),R=U}if(R.visible=A.visible,R.wireframe=A.wireframe,b===cr?R.side=A.shadowSide!==null?A.shadowSide:A.side:R.side=A.shadowSide!==null?A.shadowSide:f[A.side],R.alphaMap=A.alphaMap,R.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,R.map=A.map,R.clipShadows=A.clipShadows,R.clippingPlanes=A.clippingPlanes,R.clipIntersection=A.clipIntersection,R.displacementMap=A.displacementMap,R.displacementScale=A.displacementScale,R.displacementBias=A.displacementBias,R.wireframeLinewidth=A.wireframeLinewidth,R.linewidth=A.linewidth,x.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let N=s.properties.get(R);N.light=x}return R}function y(w,A,x,b,R){if(w.visible===!1)return;if(w.layers.test(A.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&R===cr)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,w.matrixWorld);let H=t.update(w),W=w.material;if(Array.isArray(W)){let U=H.groups;for(let z=0,B=U.length;z<B;z++){let Z=U[z],tt=W[Z.materialIndex];if(tt&&tt.visible){let at=T(w,tt,b,R);w.onBeforeShadow(s,w,A,x,H,at,Z),s.renderBufferDirect(x,null,H,at,w,Z),w.onAfterShadow(s,w,A,x,H,at,Z)}}}else if(W.visible){let U=T(w,W,b,R);w.onBeforeShadow(s,w,A,x,H,U,null),s.renderBufferDirect(x,null,H,U,w,null),w.onAfterShadow(s,w,A,x,H,U,null)}}let N=w.children;for(let H=0,W=N.length;H<W;H++)y(N[H],A,x,b,R)}function M(w){w.target.removeEventListener("dispose",M);for(let x in c){let b=c[x],R=w.target.uuid;R in b&&(b[R].dispose(),delete b[R])}}}function Av(s,t){function e(){let D=!1,pt=new ge,Q=null,_t=new ge(0,0,0,0);return{setMask:function(St){Q!==St&&!D&&(s.colorMask(St,St,St,St),Q=St)},setLocked:function(St){D=St},setClear:function(St,st,Pt,Ct,Se){Se===!0&&(St*=Ct,st*=Ct,Pt*=Ct),pt.set(St,st,Pt,Ct),_t.equals(pt)===!1&&(s.clearColor(St,st,Pt,Ct),_t.copy(pt))},reset:function(){D=!1,Q=null,_t.set(-1,0,0,0)}}}function n(){let D=!1,pt=!1,Q=null,_t=null,St=null;return{setReversed:function(st){if(pt!==st){let Pt=t.get("EXT_clip_control");st?Pt.clipControlEXT(Pt.LOWER_LEFT_EXT,Pt.ZERO_TO_ONE_EXT):Pt.clipControlEXT(Pt.LOWER_LEFT_EXT,Pt.NEGATIVE_ONE_TO_ONE_EXT),pt=st;let Ct=St;St=null,this.setClear(Ct)}},getReversed:function(){return pt},setTest:function(st){st?j(s.DEPTH_TEST):ut(s.DEPTH_TEST)},setMask:function(st){Q!==st&&!D&&(s.depthMask(st),Q=st)},setFunc:function(st){if(pt&&(st=Cd[st]),_t!==st){switch(st){case ko:s.depthFunc(s.NEVER);break;case Vo:s.depthFunc(s.ALWAYS);break;case Go:s.depthFunc(s.LESS);break;case hs:s.depthFunc(s.LEQUAL);break;case Ho:s.depthFunc(s.EQUAL);break;case Wo:s.depthFunc(s.GEQUAL);break;case Xo:s.depthFunc(s.GREATER);break;case qo:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}_t=st}},setLocked:function(st){D=st},setClear:function(st){St!==st&&(St=st,pt&&(st=1-st),s.clearDepth(st))},reset:function(){D=!1,Q=null,_t=null,St=null,pt=!1}}}function i(){let D=!1,pt=null,Q=null,_t=null,St=null,st=null,Pt=null,Ct=null,Se=null;return{setTest:function(de){D||(de?j(s.STENCIL_TEST):ut(s.STENCIL_TEST))},setMask:function(de){pt!==de&&!D&&(s.stencilMask(de),pt=de)},setFunc:function(de,Gn,Hn){(Q!==de||_t!==Gn||St!==Hn)&&(s.stencilFunc(de,Gn,Hn),Q=de,_t=Gn,St=Hn)},setOp:function(de,Gn,Hn){(st!==de||Pt!==Gn||Ct!==Hn)&&(s.stencilOp(de,Gn,Hn),st=de,Pt=Gn,Ct=Hn)},setLocked:function(de){D=de},setClear:function(de){Se!==de&&(s.clearStencil(de),Se=de)},reset:function(){D=!1,pt=null,Q=null,_t=null,St=null,st=null,Pt=null,Ct=null,Se=null}}}let r=new e,a=new n,o=new i,l=new WeakMap,c=new WeakMap,h={},f={},u={},d=new WeakMap,g=[],_=null,p=!1,m=null,E=null,T=null,y=null,M=null,w=null,A=null,x=new Ft(0,0,0),b=0,R=!1,P=null,N=null,H=null,W=null,U=null,z=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),B=!1,Z=0,tt=s.getParameter(s.VERSION);tt.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(tt)[1]),B=Z>=1):tt.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(tt)[1]),B=Z>=2);let at=null,lt={},dt=s.getParameter(s.SCISSOR_BOX),Wt=s.getParameter(s.VIEWPORT),Yt=new ge().fromArray(dt),Xt=new ge().fromArray(Wt);function J(D,pt,Q,_t){let St=new Uint8Array(4),st=s.createTexture();s.bindTexture(D,st),s.texParameteri(D,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(D,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Pt=0;Pt<Q;Pt++)D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY?s.texImage3D(pt,0,s.RGBA,1,1,_t,0,s.RGBA,s.UNSIGNED_BYTE,St):s.texImage2D(pt+Pt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,St);return st}let K={};K[s.TEXTURE_2D]=J(s.TEXTURE_2D,s.TEXTURE_2D,1),K[s.TEXTURE_CUBE_MAP]=J(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[s.TEXTURE_2D_ARRAY]=J(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),K[s.TEXTURE_3D]=J(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),j(s.DEPTH_TEST),a.setFunc(hs),ft(!1),ht(Lh),j(s.CULL_FACE),nt(An);function j(D){h[D]!==!0&&(s.enable(D),h[D]=!0)}function ut(D){h[D]!==!1&&(s.disable(D),h[D]=!1)}function bt(D,pt){return u[D]!==pt?(s.bindFramebuffer(D,pt),u[D]=pt,D===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=pt),D===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=pt),!0):!1}function At(D,pt){let Q=g,_t=!1;if(D){Q=d.get(pt),Q===void 0&&(Q=[],d.set(pt,Q));let St=D.textures;if(Q.length!==St.length||Q[0]!==s.COLOR_ATTACHMENT0){for(let st=0,Pt=St.length;st<Pt;st++)Q[st]=s.COLOR_ATTACHMENT0+st;Q.length=St.length,_t=!0}}else Q[0]!==s.BACK&&(Q[0]=s.BACK,_t=!0);_t&&s.drawBuffers(Q)}function qt(D){return _!==D?(s.useProgram(D),_=D,!0):!1}let kt={[Ni]:s.FUNC_ADD,[Kf]:s.FUNC_SUBTRACT,[Qf]:s.FUNC_REVERSE_SUBTRACT};kt[jf]=s.MIN,kt[td]=s.MAX;let et={[ed]:s.ZERO,[nd]:s.ONE,[id]:s.SRC_COLOR,[Bo]:s.SRC_ALPHA,[cd]:s.SRC_ALPHA_SATURATE,[od]:s.DST_COLOR,[rd]:s.DST_ALPHA,[sd]:s.ONE_MINUS_SRC_COLOR,[zo]:s.ONE_MINUS_SRC_ALPHA,[ld]:s.ONE_MINUS_DST_COLOR,[ad]:s.ONE_MINUS_DST_ALPHA,[hd]:s.CONSTANT_COLOR,[ud]:s.ONE_MINUS_CONSTANT_COLOR,[fd]:s.CONSTANT_ALPHA,[dd]:s.ONE_MINUS_CONSTANT_ALPHA};function nt(D,pt,Q,_t,St,st,Pt,Ct,Se,de){if(D===An){p===!0&&(ut(s.BLEND),p=!1);return}if(p===!1&&(j(s.BLEND),p=!0),D!==$f){if(D!==m||de!==R){if((E!==Ni||M!==Ni)&&(s.blendEquation(s.FUNC_ADD),E=Ni,M=Ni),de)switch(D){case cs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case zi:s.blendFunc(s.ONE,s.ONE);break;case Dh:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Nh:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:zt("WebGLState: Invalid blending: ",D);break}else switch(D){case cs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case zi:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Dh:zt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Nh:zt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:zt("WebGLState: Invalid blending: ",D);break}T=null,y=null,w=null,A=null,x.set(0,0,0),b=0,m=D,R=de}return}St=St||pt,st=st||Q,Pt=Pt||_t,(pt!==E||St!==M)&&(s.blendEquationSeparate(kt[pt],kt[St]),E=pt,M=St),(Q!==T||_t!==y||st!==w||Pt!==A)&&(s.blendFuncSeparate(et[Q],et[_t],et[st],et[Pt]),T=Q,y=_t,w=st,A=Pt),(Ct.equals(x)===!1||Se!==b)&&(s.blendColor(Ct.r,Ct.g,Ct.b,Se),x.copy(Ct),b=Se),m=D,R=!1}function it(D,pt){D.side===wn?ut(s.CULL_FACE):j(s.CULL_FACE);let Q=D.side===Ge;pt&&(Q=!Q),ft(Q),D.blending===cs&&D.transparent===!1?nt(An):nt(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),r.setMask(D.colorWrite);let _t=D.stencilWrite;o.setTest(_t),_t&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),wt(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?j(s.SAMPLE_ALPHA_TO_COVERAGE):ut(s.SAMPLE_ALPHA_TO_COVERAGE)}function ft(D){P!==D&&(D?s.frontFace(s.CW):s.frontFace(s.CCW),P=D)}function ht(D){D!==Yf?(j(s.CULL_FACE),D!==N&&(D===Lh?s.cullFace(s.BACK):D===Zf?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ut(s.CULL_FACE),N=D}function It(D){D!==H&&(B&&s.lineWidth(D),H=D)}function wt(D,pt,Q){D?(j(s.POLYGON_OFFSET_FILL),(W!==pt||U!==Q)&&(W=pt,U=Q,a.getReversed()&&(pt=-pt),s.polygonOffset(pt,Q))):ut(s.POLYGON_OFFSET_FILL)}function Ut(D){D?j(s.SCISSOR_TEST):ut(s.SCISSOR_TEST)}function Gt(D){D===void 0&&(D=s.TEXTURE0+z-1),at!==D&&(s.activeTexture(D),at=D)}function I(D,pt,Q){Q===void 0&&(at===null?Q=s.TEXTURE0+z-1:Q=at);let _t=lt[Q];_t===void 0&&(_t={type:void 0,texture:void 0},lt[Q]=_t),(_t.type!==D||_t.texture!==pt)&&(at!==Q&&(s.activeTexture(Q),at=Q),s.bindTexture(D,pt||K[D]),_t.type=D,_t.texture=pt)}function se(){let D=lt[at];D!==void 0&&D.type!==void 0&&(s.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function $t(){try{s.compressedTexImage2D(...arguments)}catch(D){zt("WebGLState:",D)}}function C(){try{s.compressedTexImage3D(...arguments)}catch(D){zt("WebGLState:",D)}}function v(){try{s.texSubImage2D(...arguments)}catch(D){zt("WebGLState:",D)}}function O(){try{s.texSubImage3D(...arguments)}catch(D){zt("WebGLState:",D)}}function k(){try{s.compressedTexSubImage2D(...arguments)}catch(D){zt("WebGLState:",D)}}function q(){try{s.compressedTexSubImage3D(...arguments)}catch(D){zt("WebGLState:",D)}}function ot(){try{s.texStorage2D(...arguments)}catch(D){zt("WebGLState:",D)}}function ct(){try{s.texStorage3D(...arguments)}catch(D){zt("WebGLState:",D)}}function Y(){try{s.texImage2D(...arguments)}catch(D){zt("WebGLState:",D)}}function $(){try{s.texImage3D(...arguments)}catch(D){zt("WebGLState:",D)}}function mt(D){return f[D]!==void 0?f[D]:s.getParameter(D)}function Lt(D,pt){f[D]!==pt&&(s.pixelStorei(D,pt),f[D]=pt)}function xt(D){Yt.equals(D)===!1&&(s.scissor(D.x,D.y,D.z,D.w),Yt.copy(D))}function gt(D){Xt.equals(D)===!1&&(s.viewport(D.x,D.y,D.z,D.w),Xt.copy(D))}function Ot(D,pt){let Q=c.get(pt);Q===void 0&&(Q=new WeakMap,c.set(pt,Q));let _t=Q.get(D);_t===void 0&&(_t=s.getUniformBlockIndex(pt,D.name),Q.set(D,_t))}function Vt(D,pt){let _t=c.get(pt).get(D);l.get(pt)!==_t&&(s.uniformBlockBinding(pt,_t,D.__bindingPointIndex),l.set(pt,_t))}function Zt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),h={},f={},at=null,lt={},u={},d=new WeakMap,g=[],_=null,p=!1,m=null,E=null,T=null,y=null,M=null,w=null,A=null,x=new Ft(0,0,0),b=0,R=!1,P=null,N=null,H=null,W=null,U=null,Yt.set(0,0,s.canvas.width,s.canvas.height),Xt.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:j,disable:ut,bindFramebuffer:bt,drawBuffers:At,useProgram:qt,setBlending:nt,setMaterial:it,setFlipSided:ft,setCullFace:ht,setLineWidth:It,setPolygonOffset:wt,setScissorTest:Ut,activeTexture:Gt,bindTexture:I,unbindTexture:se,compressedTexImage2D:$t,compressedTexImage3D:C,texImage2D:Y,texImage3D:$,pixelStorei:Lt,getParameter:mt,updateUBOMapping:Ot,uniformBlockBinding:Vt,texStorage2D:ot,texStorage3D:ct,texSubImage2D:v,texSubImage3D:O,compressedTexSubImage2D:k,compressedTexSubImage3D:q,scissor:xt,viewport:gt,reset:Zt}}function Cv(s,t,e,n,i,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new rt,h=new WeakMap,f=new Set,u,d=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(C,v){return g?new OffscreenCanvas(C,v):Yr("canvas")}function p(C,v,O){let k=1,q=$t(C);if((q.width>O||q.height>O)&&(k=O/Math.max(q.width,q.height)),k<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let ot=Math.floor(k*q.width),ct=Math.floor(k*q.height);u===void 0&&(u=_(ot,ct));let Y=v?_(ot,ct):u;return Y.width=ot,Y.height=ct,Y.getContext("2d").drawImage(C,0,0,ot,ct),Bt("WebGLRenderer: Texture has been resized from ("+q.width+"x"+q.height+") to ("+ot+"x"+ct+")."),Y}else return"data"in C&&Bt("WebGLRenderer: Image in DataTexture is too big ("+q.width+"x"+q.height+")."),C;return C}function m(C){return C.generateMipmaps}function E(C){s.generateMipmap(C)}function T(C){return C.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?s.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function y(C,v,O,k,q,ot=!1){if(C!==null){if(s[C]!==void 0)return s[C];Bt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let ct;k&&(ct=t.get("EXT_texture_norm16"),ct||Bt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Y=v;if(v===s.RED&&(O===s.FLOAT&&(Y=s.R32F),O===s.HALF_FLOAT&&(Y=s.R16F),O===s.UNSIGNED_BYTE&&(Y=s.R8),O===s.UNSIGNED_SHORT&&ct&&(Y=ct.R16_EXT),O===s.SHORT&&ct&&(Y=ct.R16_SNORM_EXT)),v===s.RED_INTEGER&&(O===s.UNSIGNED_BYTE&&(Y=s.R8UI),O===s.UNSIGNED_SHORT&&(Y=s.R16UI),O===s.UNSIGNED_INT&&(Y=s.R32UI),O===s.BYTE&&(Y=s.R8I),O===s.SHORT&&(Y=s.R16I),O===s.INT&&(Y=s.R32I)),v===s.RG&&(O===s.FLOAT&&(Y=s.RG32F),O===s.HALF_FLOAT&&(Y=s.RG16F),O===s.UNSIGNED_BYTE&&(Y=s.RG8),O===s.UNSIGNED_SHORT&&ct&&(Y=ct.RG16_EXT),O===s.SHORT&&ct&&(Y=ct.RG16_SNORM_EXT)),v===s.RG_INTEGER&&(O===s.UNSIGNED_BYTE&&(Y=s.RG8UI),O===s.UNSIGNED_SHORT&&(Y=s.RG16UI),O===s.UNSIGNED_INT&&(Y=s.RG32UI),O===s.BYTE&&(Y=s.RG8I),O===s.SHORT&&(Y=s.RG16I),O===s.INT&&(Y=s.RG32I)),v===s.RGB_INTEGER&&(O===s.UNSIGNED_BYTE&&(Y=s.RGB8UI),O===s.UNSIGNED_SHORT&&(Y=s.RGB16UI),O===s.UNSIGNED_INT&&(Y=s.RGB32UI),O===s.BYTE&&(Y=s.RGB8I),O===s.SHORT&&(Y=s.RGB16I),O===s.INT&&(Y=s.RGB32I)),v===s.RGBA_INTEGER&&(O===s.UNSIGNED_BYTE&&(Y=s.RGBA8UI),O===s.UNSIGNED_SHORT&&(Y=s.RGBA16UI),O===s.UNSIGNED_INT&&(Y=s.RGBA32UI),O===s.BYTE&&(Y=s.RGBA8I),O===s.SHORT&&(Y=s.RGBA16I),O===s.INT&&(Y=s.RGBA32I)),v===s.RGB&&(O===s.UNSIGNED_SHORT&&ct&&(Y=ct.RGB16_EXT),O===s.SHORT&&ct&&(Y=ct.RGB16_SNORM_EXT),O===s.UNSIGNED_INT_5_9_9_9_REV&&(Y=s.RGB9_E5),O===s.UNSIGNED_INT_10F_11F_11F_REV&&(Y=s.R11F_G11F_B10F)),v===s.RGBA){let $=ot?qr:te.getTransfer(q);O===s.FLOAT&&(Y=s.RGBA32F),O===s.HALF_FLOAT&&(Y=s.RGBA16F),O===s.UNSIGNED_BYTE&&(Y=$===ie?s.SRGB8_ALPHA8:s.RGBA8),O===s.UNSIGNED_SHORT&&ct&&(Y=ct.RGBA16_EXT),O===s.SHORT&&ct&&(Y=ct.RGBA16_SNORM_EXT),O===s.UNSIGNED_SHORT_4_4_4_4&&(Y=s.RGBA4),O===s.UNSIGNED_SHORT_5_5_5_1&&(Y=s.RGB5_A1)}return(Y===s.R16F||Y===s.R32F||Y===s.RG16F||Y===s.RG32F||Y===s.RGBA16F||Y===s.RGBA32F)&&t.get("EXT_color_buffer_float"),Y}function M(C,v){let O;return C?v===null||v===kn||v===ur?O=s.DEPTH24_STENCIL8:v===Cn?O=s.DEPTH32F_STENCIL8:v===hr&&(O=s.DEPTH24_STENCIL8,Bt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===kn||v===ur?O=s.DEPTH_COMPONENT24:v===Cn?O=s.DEPTH_COMPONENT32F:v===hr&&(O=s.DEPTH_COMPONENT16),O}function w(C,v){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==Be&&C.minFilter!==ke?Math.log2(Math.max(v.width,v.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?v.mipmaps.length:1}function A(C){let v=C.target;v.removeEventListener("dispose",A),b(v),v.isVideoTexture&&h.delete(v),v.isHTMLTexture&&f.delete(v)}function x(C){let v=C.target;v.removeEventListener("dispose",x),P(v)}function b(C){let v=n.get(C);if(v.__webglInit===void 0)return;let O=C.source,k=d.get(O);if(k){let q=k[v.__cacheKey];q.usedTimes--,q.usedTimes===0&&R(C),Object.keys(k).length===0&&d.delete(O)}n.remove(C)}function R(C){let v=n.get(C);s.deleteTexture(v.__webglTexture);let O=C.source,k=d.get(O);delete k[v.__cacheKey],a.memory.textures--}function P(C){let v=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let k=0;k<6;k++){if(Array.isArray(v.__webglFramebuffer[k]))for(let q=0;q<v.__webglFramebuffer[k].length;q++)s.deleteFramebuffer(v.__webglFramebuffer[k][q]);else s.deleteFramebuffer(v.__webglFramebuffer[k]);v.__webglDepthbuffer&&s.deleteRenderbuffer(v.__webglDepthbuffer[k])}else{if(Array.isArray(v.__webglFramebuffer))for(let k=0;k<v.__webglFramebuffer.length;k++)s.deleteFramebuffer(v.__webglFramebuffer[k]);else s.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&s.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&s.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let k=0;k<v.__webglColorRenderbuffer.length;k++)v.__webglColorRenderbuffer[k]&&s.deleteRenderbuffer(v.__webglColorRenderbuffer[k]);v.__webglDepthRenderbuffer&&s.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let O=C.textures;for(let k=0,q=O.length;k<q;k++){let ot=n.get(O[k]);ot.__webglTexture&&(s.deleteTexture(ot.__webglTexture),a.memory.textures--),n.remove(O[k])}n.remove(C)}let N=0;function H(){N=0}function W(){return N}function U(C){N=C}function z(){let C=N;return C>=i.maxTextures&&Bt("WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+i.maxTextures),N+=1,C}function B(C){let v=[];return v.push(C.wrapS),v.push(C.wrapT),v.push(C.wrapR||0),v.push(C.magFilter),v.push(C.minFilter),v.push(C.anisotropy),v.push(C.internalFormat),v.push(C.format),v.push(C.type),v.push(C.generateMipmaps),v.push(C.premultiplyAlpha),v.push(C.flipY),v.push(C.unpackAlignment),v.push(C.colorSpace),v.join()}function Z(C,v){let O=n.get(C);if(C.isVideoTexture&&I(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&O.__version!==C.version){let k=C.image;if(k===null)Bt("WebGLRenderer: Texture marked for update but no image data found.");else if(k.complete===!1)Bt("WebGLRenderer: Texture marked for update but image is incomplete");else{ut(O,C,v);return}}else C.isExternalTexture&&(O.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(s.TEXTURE_2D,O.__webglTexture,s.TEXTURE0+v)}function tt(C,v){let O=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&O.__version!==C.version){ut(O,C,v);return}else C.isExternalTexture&&(O.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(s.TEXTURE_2D_ARRAY,O.__webglTexture,s.TEXTURE0+v)}function at(C,v){let O=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&O.__version!==C.version){ut(O,C,v);return}e.bindTexture(s.TEXTURE_3D,O.__webglTexture,s.TEXTURE0+v)}function lt(C,v){let O=n.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&O.__version!==C.version){bt(O,C,v);return}e.bindTexture(s.TEXTURE_CUBE_MAP,O.__webglTexture,s.TEXTURE0+v)}let dt={[Yo]:s.REPEAT,[Yn]:s.CLAMP_TO_EDGE,[Zo]:s.MIRRORED_REPEAT},Wt={[Be]:s.NEAREST,[gd]:s.NEAREST_MIPMAP_NEAREST,[Da]:s.NEAREST_MIPMAP_LINEAR,[ke]:s.LINEAR,[Cl]:s.LINEAR_MIPMAP_NEAREST,[Vi]:s.LINEAR_MIPMAP_LINEAR},Yt={[vd]:s.NEVER,[Td]:s.ALWAYS,[yd]:s.LESS,[fc]:s.LEQUAL,[Md]:s.EQUAL,[dc]:s.GEQUAL,[Sd]:s.GREATER,[bd]:s.NOTEQUAL};function Xt(C,v){if(v.type===Cn&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===ke||v.magFilter===Cl||v.magFilter===Da||v.magFilter===Vi||v.minFilter===ke||v.minFilter===Cl||v.minFilter===Da||v.minFilter===Vi)&&Bt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(C,s.TEXTURE_WRAP_S,dt[v.wrapS]),s.texParameteri(C,s.TEXTURE_WRAP_T,dt[v.wrapT]),(C===s.TEXTURE_3D||C===s.TEXTURE_2D_ARRAY)&&s.texParameteri(C,s.TEXTURE_WRAP_R,dt[v.wrapR]),s.texParameteri(C,s.TEXTURE_MAG_FILTER,Wt[v.magFilter]),s.texParameteri(C,s.TEXTURE_MIN_FILTER,Wt[v.minFilter]),v.compareFunction&&(s.texParameteri(C,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(C,s.TEXTURE_COMPARE_FUNC,Yt[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Be||v.minFilter!==Da&&v.minFilter!==Vi||v.type===Cn&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){let O=t.get("EXT_texture_filter_anisotropic");s.texParameterf(C,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,i.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function J(C,v){let O=!1;C.__webglInit===void 0&&(C.__webglInit=!0,v.addEventListener("dispose",A));let k=v.source,q=d.get(k);q===void 0&&(q={},d.set(k,q));let ot=B(v);if(ot!==C.__cacheKey){q[ot]===void 0&&(q[ot]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,O=!0),q[ot].usedTimes++;let ct=q[C.__cacheKey];ct!==void 0&&(q[C.__cacheKey].usedTimes--,ct.usedTimes===0&&R(v)),C.__cacheKey=ot,C.__webglTexture=q[ot].texture}return O}function K(C,v,O){return Math.floor(Math.floor(C/O)/v)}function j(C,v,O,k){let ot=C.updateRanges;if(ot.length===0)e.texSubImage2D(s.TEXTURE_2D,0,0,0,v.width,v.height,O,k,v.data);else{ot.sort((Lt,xt)=>Lt.start-xt.start);let ct=0;for(let Lt=1;Lt<ot.length;Lt++){let xt=ot[ct],gt=ot[Lt],Ot=xt.start+xt.count,Vt=K(gt.start,v.width,4),Zt=K(xt.start,v.width,4);gt.start<=Ot+1&&Vt===Zt&&K(gt.start+gt.count-1,v.width,4)===Vt?xt.count=Math.max(xt.count,gt.start+gt.count-xt.start):(++ct,ot[ct]=gt)}ot.length=ct+1;let Y=e.getParameter(s.UNPACK_ROW_LENGTH),$=e.getParameter(s.UNPACK_SKIP_PIXELS),mt=e.getParameter(s.UNPACK_SKIP_ROWS);e.pixelStorei(s.UNPACK_ROW_LENGTH,v.width);for(let Lt=0,xt=ot.length;Lt<xt;Lt++){let gt=ot[Lt],Ot=Math.floor(gt.start/4),Vt=Math.ceil(gt.count/4),Zt=Ot%v.width,D=Math.floor(Ot/v.width),pt=Vt,Q=1;e.pixelStorei(s.UNPACK_SKIP_PIXELS,Zt),e.pixelStorei(s.UNPACK_SKIP_ROWS,D),e.texSubImage2D(s.TEXTURE_2D,0,Zt,D,pt,Q,O,k,v.data)}C.clearUpdateRanges(),e.pixelStorei(s.UNPACK_ROW_LENGTH,Y),e.pixelStorei(s.UNPACK_SKIP_PIXELS,$),e.pixelStorei(s.UNPACK_SKIP_ROWS,mt)}}function ut(C,v,O){let k=s.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(k=s.TEXTURE_2D_ARRAY),v.isData3DTexture&&(k=s.TEXTURE_3D);let q=J(C,v),ot=v.source;e.bindTexture(k,C.__webglTexture,s.TEXTURE0+O);let ct=n.get(ot);if(ot.version!==ct.__version||q===!0){if(e.activeTexture(s.TEXTURE0+O),(typeof ImageBitmap<"u"&&v.image instanceof ImageBitmap)===!1){let Q=te.getPrimaries(te.workingColorSpace),_t=v.colorSpace===xi?null:te.getPrimaries(v.colorSpace),St=v.colorSpace===xi||Q===_t?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,v.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,St)}e.pixelStorei(s.UNPACK_ALIGNMENT,v.unpackAlignment);let $=p(v.image,!1,i.maxTextureSize);$=se(v,$);let mt=r.convert(v.format,v.colorSpace),Lt=r.convert(v.type),xt=y(v.internalFormat,mt,Lt,v.normalized,v.colorSpace,v.isVideoTexture);Xt(k,v);let gt,Ot=v.mipmaps,Vt=v.isVideoTexture!==!0,Zt=ct.__version===void 0||q===!0,D=ot.dataReady,pt=w(v,$);if(v.isDepthTexture)xt=M(v.format===Gi,v.type),Zt&&(Vt?e.texStorage2D(s.TEXTURE_2D,1,xt,$.width,$.height):e.texImage2D(s.TEXTURE_2D,0,xt,$.width,$.height,0,mt,Lt,null));else if(v.isDataTexture)if(Ot.length>0){Vt&&Zt&&e.texStorage2D(s.TEXTURE_2D,pt,xt,Ot[0].width,Ot[0].height);for(let Q=0,_t=Ot.length;Q<_t;Q++)gt=Ot[Q],Vt?D&&e.texSubImage2D(s.TEXTURE_2D,Q,0,0,gt.width,gt.height,mt,Lt,gt.data):e.texImage2D(s.TEXTURE_2D,Q,xt,gt.width,gt.height,0,mt,Lt,gt.data);v.generateMipmaps=!1}else Vt?(Zt&&e.texStorage2D(s.TEXTURE_2D,pt,xt,$.width,$.height),D&&j(v,$,mt,Lt)):e.texImage2D(s.TEXTURE_2D,0,xt,$.width,$.height,0,mt,Lt,$.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Vt&&Zt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,pt,xt,Ot[0].width,Ot[0].height,$.depth);for(let Q=0,_t=Ot.length;Q<_t;Q++)if(gt=Ot[Q],v.format!==Rn)if(mt!==null)if(Vt){if(D)if(v.layerUpdates.size>0){let St=Zh(gt.width,gt.height,v.format,v.type);for(let st of v.layerUpdates){let Pt=gt.data.subarray(st*St/gt.data.BYTES_PER_ELEMENT,(st+1)*St/gt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Q,0,0,st,gt.width,gt.height,1,mt,Pt)}v.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Q,0,0,0,gt.width,gt.height,$.depth,mt,gt.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Q,xt,gt.width,gt.height,$.depth,0,gt.data,0,0);else Bt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Vt?D&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,Q,0,0,0,gt.width,gt.height,$.depth,mt,Lt,gt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,Q,xt,gt.width,gt.height,$.depth,0,mt,Lt,gt.data)}else{Vt&&Zt&&e.texStorage2D(s.TEXTURE_2D,pt,xt,Ot[0].width,Ot[0].height);for(let Q=0,_t=Ot.length;Q<_t;Q++)gt=Ot[Q],v.format!==Rn?mt!==null?Vt?D&&e.compressedTexSubImage2D(s.TEXTURE_2D,Q,0,0,gt.width,gt.height,mt,gt.data):e.compressedTexImage2D(s.TEXTURE_2D,Q,xt,gt.width,gt.height,0,gt.data):Bt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Vt?D&&e.texSubImage2D(s.TEXTURE_2D,Q,0,0,gt.width,gt.height,mt,Lt,gt.data):e.texImage2D(s.TEXTURE_2D,Q,xt,gt.width,gt.height,0,mt,Lt,gt.data)}else if(v.isDataArrayTexture)if(Vt){if(Zt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,pt,xt,$.width,$.height,$.depth),D)if(v.layerUpdates.size>0){let Q=Zh($.width,$.height,v.format,v.type);for(let _t of v.layerUpdates){let St=$.data.subarray(_t*Q/$.data.BYTES_PER_ELEMENT,(_t+1)*Q/$.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,_t,$.width,$.height,1,mt,Lt,St)}v.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,$.width,$.height,$.depth,mt,Lt,$.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,xt,$.width,$.height,$.depth,0,mt,Lt,$.data);else if(v.isData3DTexture)Vt?(Zt&&e.texStorage3D(s.TEXTURE_3D,pt,xt,$.width,$.height,$.depth),D&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,$.width,$.height,$.depth,mt,Lt,$.data)):e.texImage3D(s.TEXTURE_3D,0,xt,$.width,$.height,$.depth,0,mt,Lt,$.data);else if(v.isFramebufferTexture){if(Zt)if(Vt)e.texStorage2D(s.TEXTURE_2D,pt,xt,$.width,$.height);else{let Q=$.width,_t=$.height;for(let St=0;St<pt;St++)e.texImage2D(s.TEXTURE_2D,St,xt,Q,_t,0,mt,Lt,null),Q>>=1,_t>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in s){let Q=s.canvas;if(Q.hasAttribute("layoutsubtree")||Q.setAttribute("layoutsubtree","true"),$.parentNode!==Q){Q.appendChild($),f.add(v),Q.onpaint=_t=>{let St=_t.changedElements;for(let st of f)St.includes(st.image)&&(st.needsUpdate=!0)},Q.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,$);else{let St=s.RGBA,st=s.RGBA,Pt=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,St,st,Pt,$)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(Ot.length>0){if(Vt&&Zt){let Q=$t(Ot[0]);e.texStorage2D(s.TEXTURE_2D,pt,xt,Q.width,Q.height)}for(let Q=0,_t=Ot.length;Q<_t;Q++)gt=Ot[Q],Vt?D&&e.texSubImage2D(s.TEXTURE_2D,Q,0,0,mt,Lt,gt):e.texImage2D(s.TEXTURE_2D,Q,xt,mt,Lt,gt);v.generateMipmaps=!1}else if(Vt){if(Zt){let Q=$t($);e.texStorage2D(s.TEXTURE_2D,pt,xt,Q.width,Q.height)}D&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,mt,Lt,$)}else e.texImage2D(s.TEXTURE_2D,0,xt,mt,Lt,$);m(v)&&E(k),ct.__version=ot.version,v.onUpdate&&v.onUpdate(v)}C.__version=v.version}function bt(C,v,O){if(v.image.length!==6)return;let k=J(C,v),q=v.source;e.bindTexture(s.TEXTURE_CUBE_MAP,C.__webglTexture,s.TEXTURE0+O);let ot=n.get(q);if(q.version!==ot.__version||k===!0){e.activeTexture(s.TEXTURE0+O);let ct=te.getPrimaries(te.workingColorSpace),Y=v.colorSpace===xi?null:te.getPrimaries(v.colorSpace),$=v.colorSpace===xi||ct===Y?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,v.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),e.pixelStorei(s.UNPACK_ALIGNMENT,v.unpackAlignment),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,$);let mt=v.isCompressedTexture||v.image[0].isCompressedTexture,Lt=v.image[0]&&v.image[0].isDataTexture,xt=[];for(let st=0;st<6;st++)!mt&&!Lt?xt[st]=p(v.image[st],!0,i.maxCubemapSize):xt[st]=Lt?v.image[st].image:v.image[st],xt[st]=se(v,xt[st]);let gt=xt[0],Ot=r.convert(v.format,v.colorSpace),Vt=r.convert(v.type),Zt=y(v.internalFormat,Ot,Vt,v.normalized,v.colorSpace),D=v.isVideoTexture!==!0,pt=ot.__version===void 0||k===!0,Q=q.dataReady,_t=w(v,gt);Xt(s.TEXTURE_CUBE_MAP,v);let St;if(mt){D&&pt&&e.texStorage2D(s.TEXTURE_CUBE_MAP,_t,Zt,gt.width,gt.height);for(let st=0;st<6;st++){St=xt[st].mipmaps;for(let Pt=0;Pt<St.length;Pt++){let Ct=St[Pt];v.format!==Rn?Ot!==null?D?Q&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,Pt,0,0,Ct.width,Ct.height,Ot,Ct.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,Pt,Zt,Ct.width,Ct.height,0,Ct.data):Bt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?Q&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,Pt,0,0,Ct.width,Ct.height,Ot,Vt,Ct.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,Pt,Zt,Ct.width,Ct.height,0,Ot,Vt,Ct.data)}}}else{if(St=v.mipmaps,D&&pt){St.length>0&&_t++;let st=$t(xt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,_t,Zt,st.width,st.height)}for(let st=0;st<6;st++)if(Lt){D?Q&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,xt[st].width,xt[st].height,Ot,Vt,xt[st].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,Zt,xt[st].width,xt[st].height,0,Ot,Vt,xt[st].data);for(let Pt=0;Pt<St.length;Pt++){let Se=St[Pt].image[st].image;D?Q&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,Pt+1,0,0,Se.width,Se.height,Ot,Vt,Se.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,Pt+1,Zt,Se.width,Se.height,0,Ot,Vt,Se.data)}}else{D?Q&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,Ot,Vt,xt[st]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,Zt,Ot,Vt,xt[st]);for(let Pt=0;Pt<St.length;Pt++){let Ct=St[Pt];D?Q&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,Pt+1,0,0,Ot,Vt,Ct.image[st]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,Pt+1,Zt,Ot,Vt,Ct.image[st])}}}m(v)&&E(s.TEXTURE_CUBE_MAP),ot.__version=q.version,v.onUpdate&&v.onUpdate(v)}C.__version=v.version}function At(C,v,O,k,q,ot){let ct=r.convert(O.format,O.colorSpace),Y=r.convert(O.type),$=y(O.internalFormat,ct,Y,O.normalized,O.colorSpace),mt=n.get(v),Lt=n.get(O);if(Lt.__renderTarget=v,!mt.__hasExternalTextures){let xt=Math.max(1,v.width>>ot),gt=Math.max(1,v.height>>ot);q===s.TEXTURE_3D||q===s.TEXTURE_2D_ARRAY?e.texImage3D(q,ot,$,xt,gt,v.depth,0,ct,Y,null):e.texImage2D(q,ot,$,xt,gt,0,ct,Y,null)}e.bindFramebuffer(s.FRAMEBUFFER,C),Gt(v)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,k,q,Lt.__webglTexture,0,Ut(v)):(q===s.TEXTURE_2D||q>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&q<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,k,q,Lt.__webglTexture,ot),e.bindFramebuffer(s.FRAMEBUFFER,null)}function qt(C,v,O){if(s.bindRenderbuffer(s.RENDERBUFFER,C),v.depthBuffer){let k=v.depthTexture,q=k&&k.isDepthTexture?k.type:null,ot=M(v.stencilBuffer,q),ct=v.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;Gt(v)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ut(v),ot,v.width,v.height):O?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ut(v),ot,v.width,v.height):s.renderbufferStorage(s.RENDERBUFFER,ot,v.width,v.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,ct,s.RENDERBUFFER,C)}else{let k=v.textures;for(let q=0;q<k.length;q++){let ot=k[q],ct=r.convert(ot.format,ot.colorSpace),Y=r.convert(ot.type),$=y(ot.internalFormat,ct,Y,ot.normalized,ot.colorSpace);Gt(v)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ut(v),$,v.width,v.height):O?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ut(v),$,v.width,v.height):s.renderbufferStorage(s.RENDERBUFFER,$,v.width,v.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function kt(C,v,O){let k=v.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(s.FRAMEBUFFER,C),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let q=n.get(v.depthTexture);if(q.__renderTarget=v,(!q.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),k){if(q.__webglInit===void 0&&(q.__webglInit=!0,v.depthTexture.addEventListener("dispose",A)),q.__webglTexture===void 0){q.__webglTexture=s.createTexture(),e.bindTexture(s.TEXTURE_CUBE_MAP,q.__webglTexture),Xt(s.TEXTURE_CUBE_MAP,v.depthTexture);let mt=r.convert(v.depthTexture.format),Lt=r.convert(v.depthTexture.type),xt;v.depthTexture.format===$n?xt=s.DEPTH_COMPONENT24:v.depthTexture.format===Gi&&(xt=s.DEPTH24_STENCIL8);for(let gt=0;gt<6;gt++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,xt,v.width,v.height,0,mt,Lt,null)}}else Z(v.depthTexture,0);let ot=q.__webglTexture,ct=Ut(v),Y=k?s.TEXTURE_CUBE_MAP_POSITIVE_X+O:s.TEXTURE_2D,$=v.depthTexture.format===Gi?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(v.depthTexture.format===$n)Gt(v)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,$,Y,ot,0,ct):s.framebufferTexture2D(s.FRAMEBUFFER,$,Y,ot,0);else if(v.depthTexture.format===Gi)Gt(v)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,$,Y,ot,0,ct):s.framebufferTexture2D(s.FRAMEBUFFER,$,Y,ot,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function et(C){let v=n.get(C),O=C.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==C.depthTexture){let k=C.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),k){let q=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,k.removeEventListener("dispose",q)};k.addEventListener("dispose",q),v.__depthDisposeCallback=q}v.__boundDepthTexture=k}if(C.depthTexture&&!v.__autoAllocateDepthBuffer)if(O)for(let k=0;k<6;k++)kt(v.__webglFramebuffer[k],C,k);else{let k=C.texture.mipmaps;k&&k.length>0?kt(v.__webglFramebuffer[0],C,0):kt(v.__webglFramebuffer,C,0)}else if(O){v.__webglDepthbuffer=[];for(let k=0;k<6;k++)if(e.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer[k]),v.__webglDepthbuffer[k]===void 0)v.__webglDepthbuffer[k]=s.createRenderbuffer(),qt(v.__webglDepthbuffer[k],C,!1);else{let q=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ot=v.__webglDepthbuffer[k];s.bindRenderbuffer(s.RENDERBUFFER,ot),s.framebufferRenderbuffer(s.FRAMEBUFFER,q,s.RENDERBUFFER,ot)}}else{let k=C.texture.mipmaps;if(k&&k.length>0?e.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer[0]):e.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=s.createRenderbuffer(),qt(v.__webglDepthbuffer,C,!1);else{let q=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ot=v.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ot),s.framebufferRenderbuffer(s.FRAMEBUFFER,q,s.RENDERBUFFER,ot)}}e.bindFramebuffer(s.FRAMEBUFFER,null)}function nt(C,v,O){let k=n.get(C);v!==void 0&&At(k.__webglFramebuffer,C,C.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),O!==void 0&&et(C)}function it(C){let v=C.texture,O=n.get(C),k=n.get(v);C.addEventListener("dispose",x);let q=C.textures,ot=C.isWebGLCubeRenderTarget===!0,ct=q.length>1;if(ct||(k.__webglTexture===void 0&&(k.__webglTexture=s.createTexture()),k.__version=v.version,a.memory.textures++),ot){O.__webglFramebuffer=[];for(let Y=0;Y<6;Y++)if(v.mipmaps&&v.mipmaps.length>0){O.__webglFramebuffer[Y]=[];for(let $=0;$<v.mipmaps.length;$++)O.__webglFramebuffer[Y][$]=s.createFramebuffer()}else O.__webglFramebuffer[Y]=s.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){O.__webglFramebuffer=[];for(let Y=0;Y<v.mipmaps.length;Y++)O.__webglFramebuffer[Y]=s.createFramebuffer()}else O.__webglFramebuffer=s.createFramebuffer();if(ct)for(let Y=0,$=q.length;Y<$;Y++){let mt=n.get(q[Y]);mt.__webglTexture===void 0&&(mt.__webglTexture=s.createTexture(),a.memory.textures++)}if(C.samples>0&&Gt(C)===!1){O.__webglMultisampledFramebuffer=s.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let Y=0;Y<q.length;Y++){let $=q[Y];O.__webglColorRenderbuffer[Y]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,O.__webglColorRenderbuffer[Y]);let mt=r.convert($.format,$.colorSpace),Lt=r.convert($.type),xt=y($.internalFormat,mt,Lt,$.normalized,$.colorSpace,C.isXRRenderTarget===!0),gt=Ut(C);s.renderbufferStorageMultisample(s.RENDERBUFFER,gt,xt,C.width,C.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Y,s.RENDERBUFFER,O.__webglColorRenderbuffer[Y])}s.bindRenderbuffer(s.RENDERBUFFER,null),C.depthBuffer&&(O.__webglDepthRenderbuffer=s.createRenderbuffer(),qt(O.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ot){e.bindTexture(s.TEXTURE_CUBE_MAP,k.__webglTexture),Xt(s.TEXTURE_CUBE_MAP,v);for(let Y=0;Y<6;Y++)if(v.mipmaps&&v.mipmaps.length>0)for(let $=0;$<v.mipmaps.length;$++)At(O.__webglFramebuffer[Y][$],C,v,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,$);else At(O.__webglFramebuffer[Y],C,v,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0);m(v)&&E(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ct){for(let Y=0,$=q.length;Y<$;Y++){let mt=q[Y],Lt=n.get(mt),xt=s.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(xt=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(xt,Lt.__webglTexture),Xt(xt,mt),At(O.__webglFramebuffer,C,mt,s.COLOR_ATTACHMENT0+Y,xt,0),m(mt)&&E(xt)}e.unbindTexture()}else{let Y=s.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(Y=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(Y,k.__webglTexture),Xt(Y,v),v.mipmaps&&v.mipmaps.length>0)for(let $=0;$<v.mipmaps.length;$++)At(O.__webglFramebuffer[$],C,v,s.COLOR_ATTACHMENT0,Y,$);else At(O.__webglFramebuffer,C,v,s.COLOR_ATTACHMENT0,Y,0);m(v)&&E(Y),e.unbindTexture()}C.depthBuffer&&et(C)}function ft(C){let v=C.textures;for(let O=0,k=v.length;O<k;O++){let q=v[O];if(m(q)){let ot=T(C),ct=n.get(q).__webglTexture;e.bindTexture(ot,ct),E(ot),e.unbindTexture()}}}let ht=[],It=[];function wt(C){if(C.samples>0){if(Gt(C)===!1){let v=C.textures,O=C.width,k=C.height,q=s.COLOR_BUFFER_BIT,ot=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ct=n.get(C),Y=v.length>1;if(Y)for(let mt=0;mt<v.length;mt++)e.bindFramebuffer(s.FRAMEBUFFER,ct.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+mt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,ct.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+mt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,ct.__webglMultisampledFramebuffer);let $=C.texture.mipmaps;$&&$.length>0?e.bindFramebuffer(s.DRAW_FRAMEBUFFER,ct.__webglFramebuffer[0]):e.bindFramebuffer(s.DRAW_FRAMEBUFFER,ct.__webglFramebuffer);for(let mt=0;mt<v.length;mt++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(q|=s.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(q|=s.STENCIL_BUFFER_BIT)),Y){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,ct.__webglColorRenderbuffer[mt]);let Lt=n.get(v[mt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Lt,0)}s.blitFramebuffer(0,0,O,k,0,0,O,k,q,s.NEAREST),l===!0&&(ht.length=0,It.length=0,ht.push(s.COLOR_ATTACHMENT0+mt),C.depthBuffer&&C.resolveDepthBuffer===!1&&(ht.push(ot),It.push(ot),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,It)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ht))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Y)for(let mt=0;mt<v.length;mt++){e.bindFramebuffer(s.FRAMEBUFFER,ct.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+mt,s.RENDERBUFFER,ct.__webglColorRenderbuffer[mt]);let Lt=n.get(v[mt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,ct.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+mt,s.TEXTURE_2D,Lt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,ct.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){let v=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[v])}}}function Ut(C){return Math.min(i.maxSamples,C.samples)}function Gt(C){let v=n.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function I(C){let v=a.render.frame;h.get(C)!==v&&(h.set(C,v),C.update())}function se(C,v){let O=C.colorSpace,k=C.format,q=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||O!==Xr&&O!==xi&&(te.getTransfer(O)===ie?(k!==Rn||q!==on)&&Bt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):zt("WebGLTextures: Unsupported texture color space:",O)),v}function $t(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=H,this.getTextureUnits=W,this.setTextureUnits=U,this.setTexture2D=Z,this.setTexture2DArray=tt,this.setTexture3D=at,this.setTextureCube=lt,this.rebindTextures=nt,this.setupRenderTarget=it,this.updateRenderTargetMipmap=ft,this.updateMultisampleRenderTarget=wt,this.setupDepthRenderbuffer=et,this.setupFrameBufferTexture=At,this.useMultisampledRTT=Gt,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function Rv(s,t){function e(n,i=xi){let r,a=te.getTransfer(i);if(n===on)return s.UNSIGNED_BYTE;if(n===Pl)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Il)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Bh)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===zh)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===Fh)return s.BYTE;if(n===Oh)return s.SHORT;if(n===hr)return s.UNSIGNED_SHORT;if(n===Rl)return s.INT;if(n===kn)return s.UNSIGNED_INT;if(n===Cn)return s.FLOAT;if(n===Ze)return s.HALF_FLOAT;if(n===kh)return s.ALPHA;if(n===Vh)return s.RGB;if(n===Rn)return s.RGBA;if(n===$n)return s.DEPTH_COMPONENT;if(n===Gi)return s.DEPTH_STENCIL;if(n===Ll)return s.RED;if(n===Dl)return s.RED_INTEGER;if(n===Hi)return s.RG;if(n===Nl)return s.RG_INTEGER;if(n===Ul)return s.RGBA_INTEGER;if(n===Na||n===Ua||n===Fa||n===Oa)if(a===ie)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Na)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ua)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Fa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Oa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Na)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ua)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Fa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Oa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Fl||n===Ol||n===Bl||n===zl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Fl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ol)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Bl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===zl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===kl||n===Vl||n===Gl||n===Hl||n===Wl||n===Ba||n===Xl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===kl||n===Vl)return a===ie?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Gl)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Hl)return r.COMPRESSED_R11_EAC;if(n===Wl)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Ba)return r.COMPRESSED_RG11_EAC;if(n===Xl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===ql||n===Yl||n===Zl||n===Jl||n===$l||n===Kl||n===Ql||n===jl||n===tc||n===ec||n===nc||n===ic||n===sc||n===rc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ql)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Yl)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Zl)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Jl)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===$l)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Kl)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ql)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===jl)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===tc)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ec)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===nc)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ic)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===sc)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===rc)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ac||n===oc||n===lc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===ac)return a===ie?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===oc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===lc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===cc||n===hc||n===za||n===uc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===cc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===hc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===za)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===uc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ur?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}var Pv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Iv=`
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

}`,lu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new oa(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Ce({vertexShader:Pv,fragmentShader:Iv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new le(new ds(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},cu=class extends Kn{constructor(t,e){super();let n=this,i=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,f=null,u=null,d=null,g=null,_=typeof XRWebGLBinding<"u",p=new lu,m={},E=e.getContextAttributes(),T=null,y=null,M=[],w=[],A=new rt,x=null,b=new ze;b.viewport=new ge;let R=new ze;R.viewport=new ge;let P=[b,R],N=new Tl,H=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let K=M[J];return K===void 0&&(K=new js,M[J]=K),K.getTargetRaySpace()},this.getControllerGrip=function(J){let K=M[J];return K===void 0&&(K=new js,M[J]=K),K.getGripSpace()},this.getHand=function(J){let K=M[J];return K===void 0&&(K=new js,M[J]=K),K.getHandSpace()};function U(J){let K=w.indexOf(J.inputSource);if(K===-1)return;let j=M[K];j!==void 0&&(j.update(J.inputSource,J.frame,c||a),j.dispatchEvent({type:J.type,data:J.inputSource}))}function z(){i.removeEventListener("select",U),i.removeEventListener("selectstart",U),i.removeEventListener("selectend",U),i.removeEventListener("squeeze",U),i.removeEventListener("squeezestart",U),i.removeEventListener("squeezeend",U),i.removeEventListener("end",z),i.removeEventListener("inputsourceschange",B);for(let J=0;J<M.length;J++){let K=w[J];K!==null&&(w[J]=null,M[J].disconnect(K))}H=null,W=null,p.reset();for(let J in m)delete m[J];t.setRenderTarget(T),d=null,u=null,f=null,i=null,y=null,Xt.stop(),n.isPresenting=!1,t.setPixelRatio(x),t.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,n.isPresenting===!0&&Bt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,n.isPresenting===!0&&Bt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return f===null&&_&&(f=new XRWebGLBinding(i,e)),f},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(J){if(i=J,i!==null){if(T=t.getRenderTarget(),i.addEventListener("select",U),i.addEventListener("selectstart",U),i.addEventListener("selectend",U),i.addEventListener("squeeze",U),i.addEventListener("squeezestart",U),i.addEventListener("squeezeend",U),i.addEventListener("end",z),i.addEventListener("inputsourceschange",B),E.xrCompatible!==!0&&await e.makeXRCompatible(),x=t.getPixelRatio(),t.getSize(A),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let j=null,ut=null,bt=null;E.depth&&(bt=E.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,j=E.stencil?Gi:$n,ut=E.stencil?ur:kn);let At={colorFormat:e.RGBA8,depthFormat:bt,scaleFactor:r};f=this.getBinding(),u=f.createProjectionLayer(At),i.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),y=new Le(u.textureWidth,u.textureHeight,{format:Rn,type:on,depthTexture:new gi(u.textureWidth,u.textureHeight,ut,void 0,void 0,void 0,void 0,void 0,void 0,j),stencilBuffer:E.stencil,colorSpace:t.outputColorSpace,samples:E.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{let j={antialias:E.antialias,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(i,e,j),i.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),y=new Le(d.framebufferWidth,d.framebufferHeight,{format:Rn,type:on,colorSpace:t.outputColorSpace,stencilBuffer:E.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),Xt.setContext(i),Xt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function B(J){for(let K=0;K<J.removed.length;K++){let j=J.removed[K],ut=w.indexOf(j);ut>=0&&(w[ut]=null,M[ut].disconnect(j))}for(let K=0;K<J.added.length;K++){let j=J.added[K],ut=w.indexOf(j);if(ut===-1){for(let At=0;At<M.length;At++)if(At>=w.length){w.push(j),ut=At;break}else if(w[At]===null){w[At]=j,ut=At;break}if(ut===-1)break}let bt=M[ut];bt&&bt.connect(j)}}let Z=new L,tt=new L;function at(J,K,j){Z.setFromMatrixPosition(K.matrixWorld),tt.setFromMatrixPosition(j.matrixWorld);let ut=Z.distanceTo(tt),bt=K.projectionMatrix.elements,At=j.projectionMatrix.elements,qt=bt[14]/(bt[10]-1),kt=bt[14]/(bt[10]+1),et=(bt[9]+1)/bt[5],nt=(bt[9]-1)/bt[5],it=(bt[8]-1)/bt[0],ft=(At[8]+1)/At[0],ht=qt*it,It=qt*ft,wt=ut/(-it+ft),Ut=wt*-it;if(K.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Ut),J.translateZ(wt),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),bt[10]===-1)J.projectionMatrix.copy(K.projectionMatrix),J.projectionMatrixInverse.copy(K.projectionMatrixInverse);else{let Gt=qt+wt,I=kt+wt,se=ht-Ut,$t=It+(ut-Ut),C=et*kt/I*Gt,v=nt*kt/I*Gt;J.projectionMatrix.makePerspective(se,$t,C,v,Gt,I),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function lt(J,K){K===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(K.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(i===null)return;let K=J.near,j=J.far;p.texture!==null&&(p.depthNear>0&&(K=p.depthNear),p.depthFar>0&&(j=p.depthFar)),N.near=R.near=b.near=K,N.far=R.far=b.far=j,(H!==N.near||W!==N.far)&&(i.updateRenderState({depthNear:N.near,depthFar:N.far}),H=N.near,W=N.far),N.layers.mask=J.layers.mask|6,b.layers.mask=N.layers.mask&-5,R.layers.mask=N.layers.mask&-3;let ut=J.parent,bt=N.cameras;lt(N,ut);for(let At=0;At<bt.length;At++)lt(bt[At],ut);bt.length===2?at(N,b,R):N.projectionMatrix.copy(b.projectionMatrix),dt(J,N,ut)};function dt(J,K,j){j===null?J.matrix.copy(K.matrixWorld):(J.matrix.copy(j.matrixWorld),J.matrix.invert(),J.matrix.multiply(K.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(K.projectionMatrix),J.projectionMatrixInverse.copy(K.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Ks*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(u===null&&d===null))return l},this.setFoveation=function(J){l=J,u!==null&&(u.fixedFoveation=J),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=J)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(N)},this.getCameraTexture=function(J){return m[J]};let Wt=null;function Yt(J,K){if(h=K.getViewerPose(c||a),g=K,h!==null){let j=h.views;d!==null&&(t.setRenderTargetFramebuffer(y,d.framebuffer),t.setRenderTarget(y));let ut=!1;j.length!==N.cameras.length&&(N.cameras.length=0,ut=!0);for(let kt=0;kt<j.length;kt++){let et=j[kt],nt=null;if(d!==null)nt=d.getViewport(et);else{let ft=f.getViewSubImage(u,et);nt=ft.viewport,kt===0&&(t.setRenderTargetTextures(y,ft.colorTexture,ft.depthStencilTexture),t.setRenderTarget(y))}let it=P[kt];it===void 0&&(it=new ze,it.layers.enable(kt),it.viewport=new ge,P[kt]=it),it.matrix.fromArray(et.transform.matrix),it.matrix.decompose(it.position,it.quaternion,it.scale),it.projectionMatrix.fromArray(et.projectionMatrix),it.projectionMatrixInverse.copy(it.projectionMatrix).invert(),it.viewport.set(nt.x,nt.y,nt.width,nt.height),kt===0&&(N.matrix.copy(it.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),ut===!0&&N.cameras.push(it)}let bt=i.enabledFeatures;if(bt&&bt.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){f=n.getBinding();let kt=f.getDepthInformation(j[0]);kt&&kt.isValid&&kt.texture&&p.init(kt,i.renderState)}if(bt&&bt.includes("camera-access")&&_){t.state.unbindTexture(),f=n.getBinding();for(let kt=0;kt<j.length;kt++){let et=j[kt].camera;if(et){let nt=m[et];nt||(nt=new oa,m[et]=nt);let it=f.getCameraImage(et);nt.sourceTexture=it}}}}for(let j=0;j<M.length;j++){let ut=w[j],bt=M[j];ut!==null&&bt!==void 0&&bt.update(ut,K,c||a)}Wt&&Wt(J,K),K.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:K}),g=null}let Xt=new sp;Xt.setAnimationLoop(Yt),this.setAnimationLoop=function(J){Wt=J},this.dispose=function(){}}},Lv=new ae,hp=new Ht;hp.set(-1,0,0,0,1,0,0,0,1);function Dv(s,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,Xh(s)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function i(p,m,E,T,y){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(p,m):m.isMeshLambertMaterial?(r(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(p,m),f(p,m)):m.isMeshPhongMaterial?(r(p,m),h(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(p,m),u(p,m),m.isMeshPhysicalMaterial&&d(p,m,y)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),_(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(a(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?l(p,m,E,T):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Ge&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Ge&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let E=t.get(m),T=E.envMap,y=E.envMapRotation;T&&(p.envMap.value=T,p.envMapRotation.value.setFromMatrix4(Lv.makeRotationFromEuler(y)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(hp),p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function a(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,E,T){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*E,p.scale.value=T*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function f(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function u(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function d(p,m,E){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Ge&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=E.texture,p.transmissionSamplerSize.value.set(E.width,E.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function _(p,m){let E=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(E.matrixWorld),p.nearDistance.value=E.shadow.camera.near,p.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Nv(s,t,e,n){let i={},r={},a=[],o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,M){let w=M.program;n.uniformBlockBinding(y,w)}function c(y,M){let w=i[y.id];w===void 0&&(p(y),w=h(y),i[y.id]=w,y.addEventListener("dispose",E));let A=M.program;n.updateUBOMapping(y,A);let x=t.render.frame;r[y.id]!==x&&(u(y),r[y.id]=x)}function h(y){let M=f();y.__bindingPointIndex=M;let w=s.createBuffer(),A=y.__size,x=y.usage;return s.bindBuffer(s.UNIFORM_BUFFER,w),s.bufferData(s.UNIFORM_BUFFER,A,x),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,M,w),w}function f(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return zt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(y){let M=i[y.id],w=y.uniforms,A=y.__cache;s.bindBuffer(s.UNIFORM_BUFFER,M);for(let x=0,b=w.length;x<b;x++){let R=w[x];if(Array.isArray(R))for(let P=0,N=R.length;P<N;P++)d(R[P],x,P,A);else d(R,x,0,A)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function d(y,M,w,A){if(_(y,M,w,A)===!0){let x=y.__offset,b=y.value;if(Array.isArray(b)){let R=0;for(let P=0;P<b.length;P++){let N=b[P],H=m(N);g(N,y.__data,R),typeof N!="number"&&typeof N!="boolean"&&!N.isMatrix3&&!ArrayBuffer.isView(N)&&(R+=H.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(b,y.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,x,y.__data)}}function g(y,M,w){typeof y=="number"||typeof y=="boolean"?M[0]=y:y.isMatrix3?(M[0]=y.elements[0],M[1]=y.elements[1],M[2]=y.elements[2],M[3]=0,M[4]=y.elements[3],M[5]=y.elements[4],M[6]=y.elements[5],M[7]=0,M[8]=y.elements[6],M[9]=y.elements[7],M[10]=y.elements[8],M[11]=0):ArrayBuffer.isView(y)?M.set(new y.constructor(y.buffer,y.byteOffset,M.length)):y.toArray(M,w)}function _(y,M,w,A){let x=y.value,b=M+"_"+w;if(A[b]===void 0)return typeof x=="number"||typeof x=="boolean"?A[b]=x:ArrayBuffer.isView(x)?A[b]=x.slice():A[b]=x.clone(),!0;{let R=A[b];if(typeof x=="number"||typeof x=="boolean"){if(R!==x)return A[b]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(R.equals(x)===!1)return R.copy(x),!0}}return!1}function p(y){let M=y.uniforms,w=0,A=16;for(let b=0,R=M.length;b<R;b++){let P=Array.isArray(M[b])?M[b]:[M[b]];for(let N=0,H=P.length;N<H;N++){let W=P[N],U=Array.isArray(W.value)?W.value:[W.value];for(let z=0,B=U.length;z<B;z++){let Z=U[z],tt=m(Z),at=w%A,lt=at%tt.boundary,dt=at+lt;w+=lt,dt!==0&&A-dt<tt.storage&&(w+=A-dt),W.__data=new Float32Array(tt.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=w,w+=tt.storage}}}let x=w%A;return x>0&&(w+=A-x),y.__size=w,y.__cache={},this}function m(y){let M={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(M.boundary=4,M.storage=4):y.isVector2?(M.boundary=8,M.storage=8):y.isVector3||y.isColor?(M.boundary=16,M.storage=12):y.isVector4?(M.boundary=16,M.storage=16):y.isMatrix3?(M.boundary=48,M.storage=48):y.isMatrix4?(M.boundary=64,M.storage=64):y.isTexture?Bt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(M.boundary=16,M.storage=y.byteLength):Bt("WebGLRenderer: Unsupported uniform value type.",y),M}function E(y){let M=y.target;M.removeEventListener("dispose",E);let w=a.indexOf(M.__bindingPointIndex);a.splice(w,1),s.deleteBuffer(i[M.id]),delete i[M.id],delete r[M.id]}function T(){for(let y in i)s.deleteBuffer(i[y]);a=[],i={},r={}}return{bind:l,update:c,dispose:T}}var Uv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ti=null;function Fv(){return ti===null&&(ti=new na(Uv,16,16,Hi,Ze),ti.name="DFG_LUT",ti.minFilter=ke,ti.magFilter=ke,ti.wrapS=Yn,ti.wrapT=Yn,ti.generateMipmaps=!1,ti.needsUpdate=!0),ti}var xc=class{constructor(t={}){let{canvas:e=Ed(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:u=!1,outputBufferType:d=on}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;let _=d,p=new Set([Ul,Nl,Dl]),m=new Set([on,kn,hr,ur,Pl,Il]),E=new Uint32Array(4),T=new Int32Array(4),y=new L,M=null,w=null,A=[],x=[],b=null;this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=zn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,P=!1,N=null,H=null,W=null,U=null;this._outputColorSpace=tn;let z=0,B=0,Z=null,tt=-1,at=null,lt=new ge,dt=new ge,Wt=null,Yt=new Ft(0),Xt=0,J=e.width,K=e.height,j=1,ut=null,bt=null,At=new ge(0,0,J,K),qt=new ge(0,0,J,K),kt=!1,et=new er,nt=!1,it=!1,ft=new ae,ht=new L,It=new ge,wt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ut=!1;function Gt(){return Z===null?j:1}let I=n;function se(S,F){return e.getContext(S,F)}try{let S={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"185"}`),e.addEventListener("webglcontextlost",Se,!1),e.addEventListener("webglcontextrestored",de,!1),e.addEventListener("webglcontextcreationerror",Gn,!1),I===null){let F="webgl2";if(I=se(F,S),I===null)throw se(F)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(S){throw zt("WebGLRenderer: "+S.message),S}let $t,C,v,O,k,q,ot,ct,Y,$,mt,Lt,xt,gt,Ot,Vt,Zt,D,pt,Q,_t,St,st;function Pt(){$t=new H1(I),$t.init(),_t=new Rv(I,$t),C=new U1(I,$t,t,_t),v=new Av(I,$t),C.reversedDepthBuffer&&u&&v.buffers.depth.setReversed(!0),H=I.createFramebuffer(),W=I.createFramebuffer(),U=I.createFramebuffer(),O=new q1(I),k=new dv,q=new Cv(I,$t,v,k,C,_t,O),ot=new G1(R),ct=new $m(I),St=new D1(I,ct),Y=new W1(I,ct,O,St),$=new Z1(I,Y,ct,St,O),D=new Y1(I,C,q),Ot=new F1(k),mt=new fv(R,ot,$t,C,St,Ot),Lt=new Dv(R,k),xt=new mv,gt=new Mv($t),Zt=new L1(R,ot,v,$,g,l),Vt=new wv(R,$,C),st=new Nv(I,O,C,v),pt=new N1(I,$t,O),Q=new X1(I,$t,O),O.programs=mt.programs,R.capabilities=C,R.extensions=$t,R.properties=k,R.renderLists=xt,R.shadowMap=Vt,R.state=v,R.info=O}Pt(),_!==on&&(b=new $1(_,e.width,e.height,o,i,r));let Ct=new cu(R,I);this.xr=Ct,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){let S=$t.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=$t.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(S){S!==void 0&&(j=S,this.setSize(J,K,!1))},this.getSize=function(S){return S.set(J,K)},this.setSize=function(S,F,X=!0){if(Ct.isPresenting){Bt("WebGLRenderer: Can't change size while VR device is presenting.");return}J=S,K=F,e.width=Math.floor(S*j),e.height=Math.floor(F*j),X===!0&&(e.style.width=S+"px",e.style.height=F+"px"),b!==null&&b.setSize(e.width,e.height),this.setViewport(0,0,S,F)},this.getDrawingBufferSize=function(S){return S.set(J*j,K*j).floor()},this.setDrawingBufferSize=function(S,F,X){J=S,K=F,j=X,e.width=Math.floor(S*X),e.height=Math.floor(F*X),this.setViewport(0,0,S,F)},this.setEffects=function(S){if(_===on){zt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let F=0;F<S.length;F++)if(S[F].isOutputPass===!0){Bt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}b.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(lt)},this.getViewport=function(S){return S.copy(At)},this.setViewport=function(S,F,X,V){S.isVector4?At.set(S.x,S.y,S.z,S.w):At.set(S,F,X,V),v.viewport(lt.copy(At).multiplyScalar(j).round())},this.getScissor=function(S){return S.copy(qt)},this.setScissor=function(S,F,X,V){S.isVector4?qt.set(S.x,S.y,S.z,S.w):qt.set(S,F,X,V),v.scissor(dt.copy(qt).multiplyScalar(j).round())},this.getScissorTest=function(){return kt},this.setScissorTest=function(S){v.setScissorTest(kt=S)},this.setOpaqueSort=function(S){ut=S},this.setTransparentSort=function(S){bt=S},this.getClearColor=function(S){return S.copy(Zt.getClearColor())},this.setClearColor=function(){Zt.setClearColor(...arguments)},this.getClearAlpha=function(){return Zt.getClearAlpha()},this.setClearAlpha=function(){Zt.setClearAlpha(...arguments)},this.clear=function(S=!0,F=!0,X=!0){let V=0;if(S){let G=!1;if(Z!==null){let Mt=Z.texture.format;G=p.has(Mt)}if(G){let Mt=Z.texture.type,Et=m.has(Mt),yt=Zt.getClearColor(),Rt=Zt.getClearAlpha(),Dt=yt.r,Jt=yt.g,Qt=yt.b;Et?(E[0]=Dt,E[1]=Jt,E[2]=Qt,E[3]=Rt,I.clearBufferuiv(I.COLOR,0,E)):(T[0]=Dt,T[1]=Jt,T[2]=Qt,T[3]=Rt,I.clearBufferiv(I.COLOR,0,T))}else V|=I.COLOR_BUFFER_BIT}F&&(V|=I.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),X&&(V|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V!==0&&I.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(S){S.setRenderer(this),N=S},this.dispose=function(){e.removeEventListener("webglcontextlost",Se,!1),e.removeEventListener("webglcontextrestored",de,!1),e.removeEventListener("webglcontextcreationerror",Gn,!1),Zt.dispose(),xt.dispose(),gt.dispose(),k.dispose(),ot.dispose(),$.dispose(),St.dispose(),st.dispose(),mt.dispose(),Ct.dispose(),Ct.removeEventListener("sessionstart",af),Ct.removeEventListener("sessionend",of),es.stop()};function Se(S){S.preventDefault(),Zr("WebGLRenderer: Context Lost."),P=!0}function de(){Zr("WebGLRenderer: Context Restored."),P=!1;let S=O.autoReset,F=Vt.enabled,X=Vt.autoUpdate,V=Vt.needsUpdate,G=Vt.type;Pt(),O.autoReset=S,Vt.enabled=F,Vt.autoUpdate=X,Vt.needsUpdate=V,Vt.type=G}function Gn(S){zt("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Hn(S){let F=S.target;F.removeEventListener("dispose",Hn),y0(F)}function y0(S){M0(S),k.remove(S)}function M0(S){let F=k.get(S).programs;F!==void 0&&(F.forEach(function(X){mt.releaseProgram(X)}),S.isShaderMaterial&&mt.releaseShaderCache(S))}this.renderBufferDirect=function(S,F,X,V,G,Mt){F===null&&(F=wt);let Et=G.isMesh&&G.matrixWorld.determinantAffine()<0,yt=T0(S,F,X,V,G);v.setMaterial(V,Et);let Rt=X.index,Dt=1;if(V.wireframe===!0){if(Rt=Y.getWireframeAttribute(X),Rt===void 0)return;Dt=2}let Jt=X.drawRange,Qt=X.attributes.position,Nt=Jt.start*Dt,oe=(Jt.start+Jt.count)*Dt;Mt!==null&&(Nt=Math.max(Nt,Mt.start*Dt),oe=Math.min(oe,(Mt.start+Mt.count)*Dt)),Rt!==null?(Nt=Math.max(Nt,0),oe=Math.min(oe,Rt.count)):Qt!=null&&(Nt=Math.max(Nt,0),oe=Math.min(oe,Qt.count));let we=oe-Nt;if(we<0||we===1/0)return;St.setup(G,V,yt,X,Rt);let be,ce=pt;if(Rt!==null&&(be=ct.get(Rt),ce=Q,ce.setIndex(be)),G.isMesh)V.wireframe===!0?(v.setLineWidth(V.wireframeLinewidth*Gt()),ce.setMode(I.LINES)):ce.setMode(I.TRIANGLES);else if(G.isLine){let Xe=V.linewidth;Xe===void 0&&(Xe=1),v.setLineWidth(Xe*Gt()),G.isLineSegments?ce.setMode(I.LINES):G.isLineLoop?ce.setMode(I.LINE_LOOP):ce.setMode(I.LINE_STRIP)}else G.isPoints?ce.setMode(I.POINTS):G.isSprite&&ce.setMode(I.TRIANGLES);if(G.isBatchedMesh)if($t.get("WEBGL_multi_draw"))ce.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{let Xe=G._multiDrawStarts,Tt=G._multiDrawCounts,dn=G._multiDrawCount,ne=Rt?ct.get(Rt).bytesPerElement:1,bn=k.get(V).currentProgram.getUniforms();for(let Wn=0;Wn<dn;Wn++)bn.setValue(I,"_gl_DrawID",Wn),ce.render(Xe[Wn]/ne,Tt[Wn])}else if(G.isInstancedMesh)ce.renderInstances(Nt,we,G.count);else if(X.isInstancedBufferGeometry){let Xe=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Tt=Math.min(X.instanceCount,Xe);ce.renderInstances(Nt,we,Tt)}else ce.render(Nt,we)};function rf(S,F,X){S.transparent===!0&&S.side===wn&&S.forceSinglePass===!1?(S.side=Ge,S.needsUpdate=!0,oo(S,F,X),S.side=di,S.needsUpdate=!0,oo(S,F,X),S.side=wn):oo(S,F,X)}this.compile=function(S,F,X=null){X===null&&(X=S),w=gt.get(X),w.init(F),x.push(w),X.traverseVisible(function(G){G.isLight&&G.layers.test(F.layers)&&(w.pushLight(G),G.castShadow&&w.pushShadow(G))}),S!==X&&S.traverseVisible(function(G){G.isLight&&G.layers.test(F.layers)&&(w.pushLight(G),G.castShadow&&w.pushShadow(G))}),w.setupLights();let V=new Set;return S.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;let Mt=G.material;if(Mt)if(Array.isArray(Mt))for(let Et=0;Et<Mt.length;Et++){let yt=Mt[Et];rf(yt,X,G),V.add(yt)}else rf(Mt,X,G),V.add(Mt)}),w=x.pop(),V},this.compileAsync=function(S,F,X=null){let V=this.compile(S,F,X);return new Promise(G=>{function Mt(){if(V.forEach(function(Et){k.get(Et).currentProgram.isReady()&&V.delete(Et)}),V.size===0){G(S);return}setTimeout(Mt,10)}$t.get("KHR_parallel_shader_compile")!==null?Mt():setTimeout(Mt,10)})};let Wc=null;function S0(S){Wc&&Wc(S)}function af(){es.stop()}function of(){es.start()}let es=new sp;es.setAnimationLoop(S0),typeof self<"u"&&es.setContext(self),this.setAnimationLoop=function(S){Wc=S,Ct.setAnimationLoop(S),S===null?es.stop():es.start()},Ct.addEventListener("sessionstart",af),Ct.addEventListener("sessionend",of),this.render=function(S,F){if(F!==void 0&&F.isCamera!==!0){zt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;N!==null&&N.renderStart(S,F);let X=Ct.enabled===!0&&Ct.isPresenting===!0,V=b!==null&&(Z===null||X)&&b.begin(R,Z);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),Ct.enabled===!0&&Ct.isPresenting===!0&&(b===null||b.isCompositing()===!1)&&(Ct.cameraAutoUpdate===!0&&Ct.updateCamera(F),F=Ct.getCamera()),S.isScene===!0&&S.onBeforeRender(R,S,F,Z),w=gt.get(S,x.length),w.init(F),w.state.textureUnits=q.getTextureUnits(),x.push(w),ft.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),et.setFromProjectionMatrix(ft,On,F.reversedDepth),it=this.localClippingEnabled,nt=Ot.init(this.clippingPlanes,it),M=xt.get(S,A.length),M.init(),A.push(M),Ct.enabled===!0&&Ct.isPresenting===!0){let Et=R.xr.getDepthSensingMesh();Et!==null&&Xc(Et,F,-1/0,R.sortObjects)}Xc(S,F,0,R.sortObjects),M.finish(),R.sortObjects===!0&&M.sort(ut,bt,F.reversedDepth),Ut=Ct.enabled===!1||Ct.isPresenting===!1||Ct.hasDepthSensing()===!1,Ut&&Zt.addToRenderList(M,S),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),nt===!0&&Ot.beginShadows();let G=w.state.shadowsArray;if(Vt.render(G,S,F),nt===!0&&Ot.endShadows(),(V&&b.hasRenderPass())===!1){let Et=M.opaque,yt=M.transmissive;if(w.setupLights(),F.isArrayCamera){let Rt=F.cameras;if(yt.length>0)for(let Dt=0,Jt=Rt.length;Dt<Jt;Dt++){let Qt=Rt[Dt];cf(Et,yt,S,Qt)}Ut&&Zt.render(S);for(let Dt=0,Jt=Rt.length;Dt<Jt;Dt++){let Qt=Rt[Dt];lf(M,S,Qt,Qt.viewport)}}else yt.length>0&&cf(Et,yt,S,F),Ut&&Zt.render(S),lf(M,S,F)}Z!==null&&B===0&&(q.updateMultisampleRenderTarget(Z),q.updateRenderTargetMipmap(Z)),V&&b.end(R),S.isScene===!0&&S.onAfterRender(R,S,F),St.resetDefaultState(),tt=-1,at=null,x.pop(),x.length>0?(w=x[x.length-1],q.setTextureUnits(w.state.textureUnits),nt===!0&&Ot.setGlobalState(R.clippingPlanes,w.state.camera)):w=null,A.pop(),A.length>0?M=A[A.length-1]:M=null,N!==null&&N.renderEnd()};function Xc(S,F,X,V){if(S.visible===!1)return;if(S.layers.test(F.layers)){if(S.isGroup)X=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(F);else if(S.isLightProbeGrid)w.pushLightProbeGrid(S);else if(S.isLight)w.pushLight(S),S.castShadow&&w.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||et.intersectsSprite(S)){V&&It.setFromMatrixPosition(S.matrixWorld).applyMatrix4(ft);let Et=$.update(S),yt=S.material;yt.visible&&M.push(S,Et,yt,X,It.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||et.intersectsObject(S))){let Et=$.update(S),yt=S.material;if(V&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),It.copy(S.boundingSphere.center)):(Et.boundingSphere===null&&Et.computeBoundingSphere(),It.copy(Et.boundingSphere.center)),It.applyMatrix4(S.matrixWorld).applyMatrix4(ft)),Array.isArray(yt)){let Rt=Et.groups;for(let Dt=0,Jt=Rt.length;Dt<Jt;Dt++){let Qt=Rt[Dt],Nt=yt[Qt.materialIndex];Nt&&Nt.visible&&M.push(S,Et,Nt,X,It.z,Qt)}}else yt.visible&&M.push(S,Et,yt,X,It.z,null)}}let Mt=S.children;for(let Et=0,yt=Mt.length;Et<yt;Et++)Xc(Mt[Et],F,X,V)}function lf(S,F,X,V){let{opaque:G,transmissive:Mt,transparent:Et}=S;w.setupLightsView(X),nt===!0&&Ot.setGlobalState(R.clippingPlanes,X),V&&v.viewport(lt.copy(V)),G.length>0&&ao(G,F,X),Mt.length>0&&ao(Mt,F,X),Et.length>0&&ao(Et,F,X),v.buffers.depth.setTest(!0),v.buffers.depth.setMask(!0),v.buffers.color.setMask(!0),v.setPolygonOffset(!1)}function cf(S,F,X,V){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[V.id]===void 0){let Nt=$t.has("EXT_color_buffer_half_float")||$t.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[V.id]=new Le(1,1,{generateMipmaps:!0,type:Nt?Ze:on,minFilter:Vi,samples:Math.max(4,C.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:te.workingColorSpace})}let Mt=w.state.transmissionRenderTarget[V.id],Et=V.viewport||lt;Mt.setSize(Et.z*R.transmissionResolutionScale,Et.w*R.transmissionResolutionScale);let yt=R.getRenderTarget(),Rt=R.getActiveCubeFace(),Dt=R.getActiveMipmapLevel();R.setRenderTarget(Mt),R.getClearColor(Yt),Xt=R.getClearAlpha(),Xt<1&&R.setClearColor(16777215,.5),R.clear(),Ut&&Zt.render(X);let Jt=R.toneMapping;R.toneMapping=zn;let Qt=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),w.setupLightsView(V),nt===!0&&Ot.setGlobalState(R.clippingPlanes,V),ao(S,X,V),q.updateMultisampleRenderTarget(Mt),q.updateRenderTargetMipmap(Mt),$t.has("WEBGL_multisampled_render_to_texture")===!1){let Nt=!1;for(let oe=0,we=F.length;oe<we;oe++){let be=F[oe],{object:ce,geometry:Xe,material:Tt,group:dn}=be;if(Tt.side===wn&&ce.layers.test(V.layers)){let ne=Tt.side;Tt.side=Ge,Tt.needsUpdate=!0,hf(ce,X,V,Xe,Tt,dn),Tt.side=ne,Tt.needsUpdate=!0,Nt=!0}}Nt===!0&&(q.updateMultisampleRenderTarget(Mt),q.updateRenderTargetMipmap(Mt))}R.setRenderTarget(yt,Rt,Dt),R.setClearColor(Yt,Xt),Qt!==void 0&&(V.viewport=Qt),R.toneMapping=Jt}function ao(S,F,X){let V=F.isScene===!0?F.overrideMaterial:null;for(let G=0,Mt=S.length;G<Mt;G++){let Et=S[G],{object:yt,geometry:Rt,group:Dt}=Et,Jt=Et.material;Jt.allowOverride===!0&&V!==null&&(Jt=V),yt.layers.test(X.layers)&&hf(yt,F,X,Rt,Jt,Dt)}}function hf(S,F,X,V,G,Mt){S.onBeforeRender(R,F,X,V,G,Mt),S.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),G.onBeforeRender(R,F,X,V,S,Mt),G.transparent===!0&&G.side===wn&&G.forceSinglePass===!1?(G.side=Ge,G.needsUpdate=!0,R.renderBufferDirect(X,F,V,G,S,Mt),G.side=di,G.needsUpdate=!0,R.renderBufferDirect(X,F,V,G,S,Mt),G.side=wn):R.renderBufferDirect(X,F,V,G,S,Mt),S.onAfterRender(R,F,X,V,G,Mt)}function oo(S,F,X){F.isScene!==!0&&(F=wt);let V=k.get(S),G=w.state.lights,Mt=w.state.shadowsArray,Et=G.state.version,yt=mt.getParameters(S,G.state,Mt,F,X,w.state.lightProbeGridArray),Rt=mt.getProgramCacheKey(yt),Dt=V.programs;V.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?F.environment:null,V.fog=F.fog;let Jt=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;V.envMap=ot.get(S.envMap||V.environment,Jt),V.envMapRotation=V.environment!==null&&S.envMap===null?F.environmentRotation:S.envMapRotation,Dt===void 0&&(S.addEventListener("dispose",Hn),Dt=new Map,V.programs=Dt);let Qt=Dt.get(Rt);if(Qt!==void 0){if(V.currentProgram===Qt&&V.lightsStateVersion===Et)return ff(S,yt),Qt}else yt.uniforms=mt.getUniforms(S),N!==null&&S.isNodeMaterial&&N.build(S,X,yt),S.onBeforeCompile(yt,R),Qt=mt.acquireProgram(yt,Rt),Dt.set(Rt,Qt),V.uniforms=yt.uniforms;let Nt=V.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Nt.clippingPlanes=Ot.uniform),ff(S,yt),V.needsLights=w0(S),V.lightsStateVersion=Et,V.needsLights&&(Nt.ambientLightColor.value=G.state.ambient,Nt.lightProbe.value=G.state.probe,Nt.directionalLights.value=G.state.directional,Nt.directionalLightShadows.value=G.state.directionalShadow,Nt.spotLights.value=G.state.spot,Nt.spotLightShadows.value=G.state.spotShadow,Nt.rectAreaLights.value=G.state.rectArea,Nt.ltc_1.value=G.state.rectAreaLTC1,Nt.ltc_2.value=G.state.rectAreaLTC2,Nt.pointLights.value=G.state.point,Nt.pointLightShadows.value=G.state.pointShadow,Nt.hemisphereLights.value=G.state.hemi,Nt.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Nt.spotLightMatrix.value=G.state.spotLightMatrix,Nt.spotLightMap.value=G.state.spotLightMap,Nt.pointShadowMatrix.value=G.state.pointShadowMatrix),V.lightProbeGrid=w.state.lightProbeGridArray.length>0,V.currentProgram=Qt,V.uniformsList=null,Qt}function uf(S){if(S.uniformsList===null){let F=S.currentProgram.getUniforms();S.uniformsList=dr.seqWithValue(F.seq,S.uniforms)}return S.uniformsList}function ff(S,F){let X=k.get(S);X.outputColorSpace=F.outputColorSpace,X.batching=F.batching,X.batchingColor=F.batchingColor,X.instancing=F.instancing,X.instancingColor=F.instancingColor,X.instancingMorph=F.instancingMorph,X.skinning=F.skinning,X.morphTargets=F.morphTargets,X.morphNormals=F.morphNormals,X.morphColors=F.morphColors,X.morphTargetsCount=F.morphTargetsCount,X.numClippingPlanes=F.numClippingPlanes,X.numIntersection=F.numClipIntersection,X.vertexAlphas=F.vertexAlphas,X.vertexTangents=F.vertexTangents,X.toneMapping=F.toneMapping}function b0(S,F){if(S.length===0)return null;if(S.length===1)return S[0].texture!==null?S[0]:null;y.setFromMatrixPosition(F.matrixWorld);for(let X=0,V=S.length;X<V;X++){let G=S[X];if(G.texture!==null&&G.boundingBox.containsPoint(y))return G}return null}function T0(S,F,X,V,G){F.isScene!==!0&&(F=wt),q.resetTextureUnits();let Mt=F.fog,Et=V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial?F.environment:null,yt=Z===null?R.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:te.workingColorSpace,Rt=V.isMeshStandardMaterial||V.isMeshLambertMaterial&&!V.envMap||V.isMeshPhongMaterial&&!V.envMap,Dt=ot.get(V.envMap||Et,Rt),Jt=V.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Qt=!!X.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Nt=!!X.morphAttributes.position,oe=!!X.morphAttributes.normal,we=!!X.morphAttributes.color,be=zn;V.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(be=R.toneMapping);let ce=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Xe=ce!==void 0?ce.length:0,Tt=k.get(V),dn=w.state.lights;if(nt===!0&&(it===!0||S!==at)){let pe=S===at&&V.id===tt;Ot.setState(V,S,pe)}let ne=!1;V.version===Tt.__version?(Tt.needsLights&&Tt.lightsStateVersion!==dn.state.version||Tt.outputColorSpace!==yt||G.isBatchedMesh&&Tt.batching===!1||!G.isBatchedMesh&&Tt.batching===!0||G.isBatchedMesh&&Tt.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&Tt.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&Tt.instancing===!1||!G.isInstancedMesh&&Tt.instancing===!0||G.isSkinnedMesh&&Tt.skinning===!1||!G.isSkinnedMesh&&Tt.skinning===!0||G.isInstancedMesh&&Tt.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Tt.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Tt.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Tt.instancingMorph===!1&&G.morphTexture!==null||Tt.envMap!==Dt||V.fog===!0&&Tt.fog!==Mt||Tt.numClippingPlanes!==void 0&&(Tt.numClippingPlanes!==Ot.numPlanes||Tt.numIntersection!==Ot.numIntersection)||Tt.vertexAlphas!==Jt||Tt.vertexTangents!==Qt||Tt.morphTargets!==Nt||Tt.morphNormals!==oe||Tt.morphColors!==we||Tt.toneMapping!==be||Tt.morphTargetsCount!==Xe||!!Tt.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(ne=!0):(ne=!0,Tt.__version=V.version);let bn=Tt.currentProgram;ne===!0&&(bn=oo(V,F,G),N&&V.isNodeMaterial&&N.onUpdateProgram(V,bn,Tt));let Wn=!1,Ei=!1,Rs=!1,he=bn.getUniforms(),Ae=Tt.uniforms;if(v.useProgram(bn.program)&&(Wn=!0,Ei=!0,Rs=!0),V.id!==tt&&(tt=V.id,Ei=!0),Tt.needsLights){let pe=b0(w.state.lightProbeGridArray,G);Tt.lightProbeGrid!==pe&&(Tt.lightProbeGrid=pe,Ei=!0)}if(Wn||at!==S){v.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),he.setValue(I,"projectionMatrix",S.projectionMatrix),he.setValue(I,"viewMatrix",S.matrixWorldInverse);let Ai=he.map.cameraPosition;Ai!==void 0&&Ai.setValue(I,ht.setFromMatrixPosition(S.matrixWorld)),C.logarithmicDepthBuffer&&he.setValue(I,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&he.setValue(I,"isOrthographic",S.isOrthographicCamera===!0),at!==S&&(at=S,Ei=!0,Rs=!0)}if(Tt.needsLights&&(dn.state.directionalShadowMap.length>0&&he.setValue(I,"directionalShadowMap",dn.state.directionalShadowMap,q),dn.state.spotShadowMap.length>0&&he.setValue(I,"spotShadowMap",dn.state.spotShadowMap,q),dn.state.pointShadowMap.length>0&&he.setValue(I,"pointShadowMap",dn.state.pointShadowMap,q)),G.isSkinnedMesh){he.setOptional(I,G,"bindMatrix"),he.setOptional(I,G,"bindMatrixInverse");let pe=G.skeleton;pe&&(pe.boneTexture===null&&pe.computeBoneTexture(),he.setValue(I,"boneTexture",pe.boneTexture,q))}G.isBatchedMesh&&(he.setOptional(I,G,"batchingTexture"),he.setValue(I,"batchingTexture",G._matricesTexture,q),he.setOptional(I,G,"batchingIdTexture"),he.setValue(I,"batchingIdTexture",G._indirectTexture,q),he.setOptional(I,G,"batchingColorTexture"),G._colorsTexture!==null&&he.setValue(I,"batchingColorTexture",G._colorsTexture,q));let wi=X.morphAttributes;if((wi.position!==void 0||wi.normal!==void 0||wi.color!==void 0)&&D.update(G,X,bn),(Ei||Tt.receiveShadow!==G.receiveShadow)&&(Tt.receiveShadow=G.receiveShadow,he.setValue(I,"receiveShadow",G.receiveShadow)),(V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial)&&V.envMap===null&&F.environment!==null&&(Ae.envMapIntensity.value=F.environmentIntensity),Ae.dfgLUT!==void 0&&(Ae.dfgLUT.value=Fv()),Ei){if(he.setValue(I,"toneMappingExposure",R.toneMappingExposure),Tt.needsLights&&E0(Ae,Rs),Mt&&V.fog===!0&&Lt.refreshFogUniforms(Ae,Mt),Lt.refreshMaterialUniforms(Ae,V,j,K,w.state.transmissionRenderTarget[S.id]),Tt.needsLights&&Tt.lightProbeGrid){let pe=Tt.lightProbeGrid;Ae.probesSH.value=pe.texture,Ae.probesMin.value.copy(pe.boundingBox.min),Ae.probesMax.value.copy(pe.boundingBox.max),Ae.probesResolution.value.copy(pe.resolution)}dr.upload(I,uf(Tt),Ae,q)}if(V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(dr.upload(I,uf(Tt),Ae,q),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&he.setValue(I,"center",G.center),he.setValue(I,"modelViewMatrix",G.modelViewMatrix),he.setValue(I,"normalMatrix",G.normalMatrix),he.setValue(I,"modelMatrix",G.matrixWorld),V.uniformsGroups!==void 0){let pe=V.uniformsGroups;for(let Ai=0,Ps=pe.length;Ai<Ps;Ai++){let df=pe[Ai];st.update(df,bn),st.bind(df,bn)}}return bn}function E0(S,F){S.ambientLightColor.needsUpdate=F,S.lightProbe.needsUpdate=F,S.directionalLights.needsUpdate=F,S.directionalLightShadows.needsUpdate=F,S.pointLights.needsUpdate=F,S.pointLightShadows.needsUpdate=F,S.spotLights.needsUpdate=F,S.spotLightShadows.needsUpdate=F,S.rectAreaLights.needsUpdate=F,S.hemisphereLights.needsUpdate=F}function w0(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return Z},this.setRenderTargetTextures=function(S,F,X){let V=k.get(S);V.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),k.get(S.texture).__webglTexture=F,k.get(S.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:X,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,F){let X=k.get(S);X.__webglFramebuffer=F,X.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(S,F=0,X=0){Z=S,z=F,B=X;let V=null,G=!1,Mt=!1;if(S){let yt=k.get(S);if(yt.__useDefaultFramebuffer!==void 0){v.bindFramebuffer(I.FRAMEBUFFER,yt.__webglFramebuffer),lt.copy(S.viewport),dt.copy(S.scissor),Wt=S.scissorTest,v.viewport(lt),v.scissor(dt),v.setScissorTest(Wt),tt=-1;return}else if(yt.__webglFramebuffer===void 0)q.setupRenderTarget(S);else if(yt.__hasExternalTextures)q.rebindTextures(S,k.get(S.texture).__webglTexture,k.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){let Jt=S.depthTexture;if(yt.__boundDepthTexture!==Jt){if(Jt!==null&&k.has(Jt)&&(S.width!==Jt.image.width||S.height!==Jt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");q.setupDepthRenderbuffer(S)}}let Rt=S.texture;(Rt.isData3DTexture||Rt.isDataArrayTexture||Rt.isCompressedArrayTexture)&&(Mt=!0);let Dt=k.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Dt[F])?V=Dt[F][X]:V=Dt[F],G=!0):S.samples>0&&q.useMultisampledRTT(S)===!1?V=k.get(S).__webglMultisampledFramebuffer:Array.isArray(Dt)?V=Dt[X]:V=Dt,lt.copy(S.viewport),dt.copy(S.scissor),Wt=S.scissorTest}else lt.copy(At).multiplyScalar(j).floor(),dt.copy(qt).multiplyScalar(j).floor(),Wt=kt;if(X!==0&&(V=H),v.bindFramebuffer(I.FRAMEBUFFER,V)&&v.drawBuffers(S,V),v.viewport(lt),v.scissor(dt),v.setScissorTest(Wt),G){let yt=k.get(S.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+F,yt.__webglTexture,X)}else if(Mt){let yt=F;for(let Rt=0;Rt<S.textures.length;Rt++){let Dt=k.get(S.textures[Rt]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+Rt,Dt.__webglTexture,X,yt)}}else if(S!==null&&X!==0){let yt=k.get(S.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,yt.__webglTexture,X)}tt=-1},this.readRenderTargetPixels=function(S,F,X,V,G,Mt,Et,yt=0){if(!(S&&S.isWebGLRenderTarget)){zt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Rt=k.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Et!==void 0&&(Rt=Rt[Et]),Rt){v.bindFramebuffer(I.FRAMEBUFFER,Rt);try{let Dt=S.textures[yt],Jt=Dt.format,Qt=Dt.type;if(S.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+yt),!C.textureFormatReadable(Jt)){zt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!C.textureTypeReadable(Qt)){zt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=S.width-V&&X>=0&&X<=S.height-G&&I.readPixels(F,X,V,G,_t.convert(Jt),_t.convert(Qt),Mt)}finally{let Dt=Z!==null?k.get(Z).__webglFramebuffer:null;v.bindFramebuffer(I.FRAMEBUFFER,Dt)}}},this.readRenderTargetPixelsAsync=async function(S,F,X,V,G,Mt,Et,yt=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Rt=k.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Et!==void 0&&(Rt=Rt[Et]),Rt)if(F>=0&&F<=S.width-V&&X>=0&&X<=S.height-G){v.bindFramebuffer(I.FRAMEBUFFER,Rt);let Dt=S.textures[yt],Jt=Dt.format,Qt=Dt.type;if(S.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+yt),!C.textureFormatReadable(Jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!C.textureTypeReadable(Qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Nt=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Nt),I.bufferData(I.PIXEL_PACK_BUFFER,Mt.byteLength,I.STREAM_READ),I.readPixels(F,X,V,G,_t.convert(Jt),_t.convert(Qt),0);let oe=Z!==null?k.get(Z).__webglFramebuffer:null;v.bindFramebuffer(I.FRAMEBUFFER,oe);let we=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await Ad(I,we,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Nt),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,Mt),I.deleteBuffer(Nt),I.deleteSync(we),Mt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,F=null,X=0){let V=Math.pow(2,-X),G=Math.floor(S.image.width*V),Mt=Math.floor(S.image.height*V),Et=F!==null?F.x:0,yt=F!==null?F.y:0;q.setTexture2D(S,0),I.copyTexSubImage2D(I.TEXTURE_2D,X,0,0,Et,yt,G,Mt),v.unbindTexture()},this.copyTextureToTexture=function(S,F,X=null,V=null,G=0,Mt=0){let Et,yt,Rt,Dt,Jt,Qt,Nt,oe,we,be=S.isCompressedTexture?S.mipmaps[Mt]:S.image;if(X!==null)Et=X.max.x-X.min.x,yt=X.max.y-X.min.y,Rt=X.isBox3?X.max.z-X.min.z:1,Dt=X.min.x,Jt=X.min.y,Qt=X.isBox3?X.min.z:0;else{let Ae=Math.pow(2,-G);Et=Math.floor(be.width*Ae),yt=Math.floor(be.height*Ae),S.isDataArrayTexture?Rt=be.depth:S.isData3DTexture?Rt=Math.floor(be.depth*Ae):Rt=1,Dt=0,Jt=0,Qt=0}V!==null?(Nt=V.x,oe=V.y,we=V.z):(Nt=0,oe=0,we=0);let ce=_t.convert(F.format),Xe=_t.convert(F.type),Tt;F.isData3DTexture?(q.setTexture3D(F,0),Tt=I.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(q.setTexture2DArray(F,0),Tt=I.TEXTURE_2D_ARRAY):(q.setTexture2D(F,0),Tt=I.TEXTURE_2D),v.activeTexture(I.TEXTURE0),v.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,F.flipY),v.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),v.pixelStorei(I.UNPACK_ALIGNMENT,F.unpackAlignment);let dn=v.getParameter(I.UNPACK_ROW_LENGTH),ne=v.getParameter(I.UNPACK_IMAGE_HEIGHT),bn=v.getParameter(I.UNPACK_SKIP_PIXELS),Wn=v.getParameter(I.UNPACK_SKIP_ROWS),Ei=v.getParameter(I.UNPACK_SKIP_IMAGES);v.pixelStorei(I.UNPACK_ROW_LENGTH,be.width),v.pixelStorei(I.UNPACK_IMAGE_HEIGHT,be.height),v.pixelStorei(I.UNPACK_SKIP_PIXELS,Dt),v.pixelStorei(I.UNPACK_SKIP_ROWS,Jt),v.pixelStorei(I.UNPACK_SKIP_IMAGES,Qt);let Rs=S.isDataArrayTexture||S.isData3DTexture,he=F.isDataArrayTexture||F.isData3DTexture;if(S.isDepthTexture){let Ae=k.get(S),wi=k.get(F),pe=k.get(Ae.__renderTarget),Ai=k.get(wi.__renderTarget);v.bindFramebuffer(I.READ_FRAMEBUFFER,pe.__webglFramebuffer),v.bindFramebuffer(I.DRAW_FRAMEBUFFER,Ai.__webglFramebuffer);for(let Ps=0;Ps<Rt;Ps++)Rs&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,k.get(S).__webglTexture,G,Qt+Ps),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,k.get(F).__webglTexture,Mt,we+Ps)),I.blitFramebuffer(Dt,Jt,Et,yt,Nt,oe,Et,yt,I.DEPTH_BUFFER_BIT,I.NEAREST);v.bindFramebuffer(I.READ_FRAMEBUFFER,null),v.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(G!==0||S.isRenderTargetTexture||k.has(S)){let Ae=k.get(S),wi=k.get(F);v.bindFramebuffer(I.READ_FRAMEBUFFER,W),v.bindFramebuffer(I.DRAW_FRAMEBUFFER,U);for(let pe=0;pe<Rt;pe++)Rs?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ae.__webglTexture,G,Qt+pe):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Ae.__webglTexture,G),he?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,wi.__webglTexture,Mt,we+pe):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,wi.__webglTexture,Mt),G!==0?I.blitFramebuffer(Dt,Jt,Et,yt,Nt,oe,Et,yt,I.COLOR_BUFFER_BIT,I.NEAREST):he?I.copyTexSubImage3D(Tt,Mt,Nt,oe,we+pe,Dt,Jt,Et,yt):I.copyTexSubImage2D(Tt,Mt,Nt,oe,Dt,Jt,Et,yt);v.bindFramebuffer(I.READ_FRAMEBUFFER,null),v.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else he?S.isDataTexture||S.isData3DTexture?I.texSubImage3D(Tt,Mt,Nt,oe,we,Et,yt,Rt,ce,Xe,be.data):F.isCompressedArrayTexture?I.compressedTexSubImage3D(Tt,Mt,Nt,oe,we,Et,yt,Rt,ce,be.data):I.texSubImage3D(Tt,Mt,Nt,oe,we,Et,yt,Rt,ce,Xe,be):S.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,Mt,Nt,oe,Et,yt,ce,Xe,be.data):S.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,Mt,Nt,oe,be.width,be.height,ce,be.data):I.texSubImage2D(I.TEXTURE_2D,Mt,Nt,oe,Et,yt,ce,Xe,be);v.pixelStorei(I.UNPACK_ROW_LENGTH,dn),v.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ne),v.pixelStorei(I.UNPACK_SKIP_PIXELS,bn),v.pixelStorei(I.UNPACK_SKIP_ROWS,Wn),v.pixelStorei(I.UNPACK_SKIP_IMAGES,Ei),Mt===0&&F.generateMipmaps&&I.generateMipmap(Tt),v.unbindTexture()},this.initRenderTarget=function(S){k.get(S).__webglFramebuffer===void 0&&q.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?q.setTextureCube(S,0):S.isData3DTexture?q.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?q.setTexture2DArray(S,0):q.setTexture2D(S,0),v.unbindTexture()},this.resetState=function(){z=0,B=0,Z=null,v.reset(),St.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return On}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=te._getDrawingBufferColorSpace(t),e.unpackColorSpace=te._getUnpackColorSpace()}};var Mc=class extends us{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let t=new jn;t.deleteAttribute("uv");let e=new _i({side:Ge}),n=new _i,i=new Sa(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);let r=new le(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let a=new sa(t,n,6),o=new Ie;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let l=new le(t,gr(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new le(t,gr(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let h=new le(t,gr(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let f=new le(t,gr(43));f.position.set(-.462,8.89,14.52),f.scale.set(4.38,5.441,.088),this.add(f);let u=new le(t,gr(20));u.position.set(3.235,11.486,-12.541),u.scale.set(2.5,2,.1),this.add(u);let d=new le(t,gr(100));d.position.set(0,20,0),d.scale.set(1,.1,1),this.add(d)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function gr(s){return new xa({color:0,emissive:16777215,emissiveIntensity:s})}var _r={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var xn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},Bv=new Bi(-1,1,1,-1,0,1),hu=class extends Ve{constructor(){super(),this.setAttribute("position",new Oe([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Oe([0,2,0,0,2,0],2))}},zv=new hu,Xi=class{constructor(t){this._mesh=new le(zv,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,Bv)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var Sc=class extends xn{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof Ce?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=vi.clone(t.uniforms),this.material=new Ce({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new Xi(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Wa=class extends xn{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){let i=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}},bc=class extends xn{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var Tc=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let n=t.getSize(new rt);this._width=n.width,this._height=n.height,e=new Le(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Ze}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Sc(_r),this.copyPass.material.blending=An,this.timer=new ba}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){this.timer.update(),t===void 0&&(t=this.timer.getDelta());let e=this.renderer.getRenderTarget(),n=!1;for(let i=0,r=this.passes.length;i<r;i++){let a=this.passes[i];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),a.needsSwap){if(n){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Wa!==void 0&&(a instanceof Wa?n=!0:a instanceof bc&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new rt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Ec=class extends xn{constructor(t,e,n=null,i=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Ft}render(t,e,n){let i=t.autoClear;t.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=i}};var up={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ft(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var xr=class s extends xn{constructor(t,e=1,n,i){super(),this.strength=e,this.radius=n,this.threshold=i,this.resolution=t!==void 0?new rt(t.x,t.y):new rt(256,256),this.clearColor=new Ft(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Le(r,a,{type:Ze}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let f=new Le(r,a,{type:Ze});f.texture.name="UnrealBloomPass.h"+h,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);let u=new Le(r,a,{type:Ze});u.texture.name="UnrealBloomPass.v"+h,u.texture.generateMipmaps=!1,this.renderTargetsVertical.push(u),r=Math.round(r/2),a=Math.round(a/2)}let o=up;this.highPassUniforms=vi.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Ce({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new rt(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=vi.clone(_r.uniforms),this.blendMaterial=new Ce({uniforms:this.copyUniforms,vertexShader:_r.vertexShader,fragmentShader:_r.fragmentShader,premultipliedAlpha:!0,blending:zi,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Ft,this._oldClearAlpha=1,this._basic=new mi,this._fsQuad=new Xi(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),i=Math.round(e/2);this.renderTargetBright.setSize(n,i);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,i),this.renderTargetsVertical[r].setSize(n,i),this.separableBlurMaterials[r].uniforms.invSize.value=new rt(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(t,e,n,i,r){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();let a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=s.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=s.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this._fsQuad.render(t),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(n),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=a}_getSeparableBlurMaterial(t){let e=[],n=t/3;for(let i=0;i<t;i++)e.push(.39894*Math.exp(-.5*i*i/(n*n))/n);return new Ce({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new rt(.5,.5)},direction:{value:new rt(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {

					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;

					for ( int i = 1; i < KERNEL_RADIUS; i ++ ) {

						float x = float( i );
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * w;

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(t){return new Ce({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}};xr.BlurDirectionX=new rt(1,0);xr.BlurDirectionY=new rt(0,1);var Xa={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var wc=class extends xn{constructor(){super(),this.isOutputPass=!0,this.uniforms=vi.clone(Xa.uniforms),this.material=new or({name:Xa.name,uniforms:this.uniforms,vertexShader:Xa.vertexShader,fragmentShader:Xa.fragmentShader}),this._fsQuad=new Xi(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},te.getTransfer(this._outputColorSpace)===ie&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===wa?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Aa?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Ca?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===ms?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Pa?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Ia?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Ra&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};function yi(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function yp(s,t){s.prototype=Object.create(t.prototype),s.prototype.constructor=s,s.__proto__=t}var un={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Ka={duration:.5,overwrite:!1,delay:0},Cu,He,_e,In=1e8,fe=1/In,xu=Math.PI*2,kv=xu/4,Vv=0,Mp=Math.sqrt,Gv=Math.cos,Hv=Math.sin,Ue=function(t){return typeof t=="string"},Te=function(t){return typeof t=="function"},Si=function(t){return typeof t=="number"},Fc=function(t){return typeof t>"u"},si=function(t){return typeof t=="object"},hn=function(t){return t!==!1},Ru=function(){return typeof window<"u"},Ac=function(t){return Te(t)||Ue(t)},Sp=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Ke=Array.isArray,Wv=/random\([^)]+\)/g,Xv=/,\s*/g,fp=/(?:-?\.?\d|\.)+/gi,Pu=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Ss=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,uu=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Iu=/[+-]=-?[.\d]+/,qv=/[^,'"\[\]\s]+/gi,Yv=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,ye,ni,vu,Lu,yn={},Ic={},bp,Tp=function(t){return(Ic=yr(t,yn))&&Qe},Oc=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},Qa=function(t,e){return!e&&console.warn(t)},Ep=function(t,e){return t&&(yn[t]=e)&&Ic&&(Ic[t]=e)||yn},ja=function(){return 0},Zv={suppressEvents:!0,isStart:!0,kill:!1},Cc={suppressEvents:!0,kill:!1},Jv={suppressEvents:!0},Du={},Yi=[],yu={},wp,ln={},fu={},dp=30,Rc=[],Nu="",Uu=function(t){var e=t[0],n,i;if(si(e)||Te(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=Rc.length;i--&&!Rc[i].targetTest(e););n=Rc[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new zu(t[i],n)))||t.splice(i,1);return t},Zi=function(t){return t._gsap||Uu(Ln(t))[0]._gsap},Fu=function(t,e,n){return(n=t[e])&&Te(n)?t[e]():Fc(n)&&t.getAttribute&&t.getAttribute(e)||n},rn=function(t,e){return(t=t.split(",")).forEach(e)||t},Ee=function(t){return Math.round(t*1e5)/1e5||0},ve=function(t){return Math.round(t*1e7)/1e7||0},bs=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},$v=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},Lc=function(){var t=Yi.length,e=Yi.slice(0),n,i;for(yu={},Yi.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Ou=function(t){return!!(t._initted||t._startAt||t.add)},Ap=function(t,e,n,i){Yi.length&&!He&&Lc(),t.render(e,n,i||!!(He&&e<0&&Ou(t))),Yi.length&&!He&&Lc()},Cp=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(qv).length<2?e:Ue(t)?t.trim():t},Rp=function(t){return t},Mn=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},Kv=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},yr=function(t,e){for(var n in e)t[n]=e[n];return t},pp=function s(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=si(e[n])?s(t[n]||(t[n]={}),e[n]):e[n]);return t},Dc=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},Za=function(t){var e=t.parent||ye,n=t.keyframes?Kv(Ke(t.keyframes)):Mn;if(hn(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},Qv=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},Pp=function(t,e,n,i,r){n===void 0&&(n="_first"),i===void 0&&(i="_last");var a=t[i],o;if(r)for(o=e[r];a&&a[r]>o;)a=a._prev;return a?(e._next=a._next,a._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=a,e.parent=e._dp=t,e},Bc=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=e._prev,a=e._next;r?r._next=a:t[n]===e&&(t[n]=a),a?a._prev=r:t[i]===e&&(t[i]=r),e._next=e._prev=e.parent=null},Ji=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},vs=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},jv=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},Mu=function(t,e,n,i){return t._startAt&&(He?t._startAt.revert(Cc):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},ty=function s(t){return!t||t._ts&&s(t.parent)},mp=function(t){return t._repeat?Mr(t._tTime,t=t.duration()+t._rDelay)*t:0},Mr=function(t,e){var n=Math.floor(t=ve(t/e));return t&&n===t?n-1:n},Nc=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},zc=function(t){return t._end=ve(t._start+(t._tDur/Math.abs(t._ts||t._rts||fe)||0))},kc=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=ve(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),zc(t),n._dirty||vs(n,t)),t},Ip=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=Nc(t.rawTime(),e),(!e._dur||no(0,e.totalDuration(),n)-e._tTime>fe)&&e.render(n,!0)),vs(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-fe}},ii=function(t,e,n,i){return e.parent&&Ji(e),e._start=ve((Si(n)?n:n||t!==ye?Pn(t,n,e):t._time)+e._delay),e._end=ve(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),Pp(t,e,"_first","_last",t._sort?"_start":0),Su(e)||(t._recent=e),i||Ip(t,e),t._ts<0&&kc(t,t._tTime),t},Lp=function(t,e){return(yn.ScrollTrigger||Oc("scrollTrigger",e))&&yn.ScrollTrigger.create(e,t)},Dp=function(t,e,n,i,r){if(Gu(t,e,r),!t._initted)return 1;if(!n&&t._pt&&!He&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&wp!==cn.frame)return Yi.push(t),t._lazy=[r,i],1},ey=function s(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||s(e))},Su=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},ny=function(t,e,n,i){var r=t.ratio,a=e<0||!e&&(!t._start&&ey(t)&&!(!t._initted&&Su(t))||(t._ts<0||t._dp._ts<0)&&!Su(t))?0:1,o=t._rDelay,l=0,c,h,f;if(o&&t._repeat&&(l=no(0,t._tDur,e),h=Mr(l,o),t._yoyo&&h&1&&(a=1-a),h!==Mr(t._tTime,o)&&(r=1-a,t.vars.repeatRefresh&&t._initted&&t.invalidate())),a!==r||He||i||t._zTime===fe||!e&&t._zTime){if(!t._initted&&Dp(t,e,i,n,l))return;for(f=t._zTime,t._zTime=e||(n?fe:0),n||(n=e&&!f),t.ratio=a,t._from&&(a=1-a),t._time=0,t._tTime=l,c=t._pt;c;)c.r(a,c.d),c=c._next;e<0&&Mu(t,e,n,!0),t._onUpdate&&!n&&vn(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&vn(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===a&&(a&&Ji(t,1),!n&&!He&&(vn(t,a?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},iy=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},Sr=function(t,e,n,i){var r=t._repeat,a=ve(e)||0,o=t._tTime/t._tDur;return o&&!i&&(t._time*=a/t._dur),t._dur=a,t._tDur=r?r<0?1e10:ve(a*(r+1)+t._rDelay*r):a,o>0&&!i&&kc(t,t._tTime=t._tDur*o),t.parent&&zc(t),n||vs(t.parent,t),t},gp=function(t){return t instanceof $e?vs(t):Sr(t,t._dur)},sy={_start:0,endTime:ja,totalDuration:ja},Pn=function s(t,e,n){var i=t.labels,r=t._recent||sy,a=t.duration()>=In?r.endTime(!1):t._dur,o,l,c;return Ue(e)&&(isNaN(e)||e in i)?(l=e.charAt(0),c=e.substr(-1)==="%",o=e.indexOf("="),l==="<"||l===">"?(o>=0&&(e=e.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(o<0?r:n).totalDuration()/100:1)):o<0?(e in i||(i[e]=a),i[e]):(l=parseFloat(e.charAt(o-1)+e.substr(o+1)),c&&n&&(l=l/100*(Ke(n)?n[0]:n).totalDuration()),o>1?s(t,e.substr(0,o-1),n)+l:a+l)):e==null?a:+e},Ja=function(t,e,n){var i=Si(e[1]),r=(i?2:1)+(t<2?0:1),a=e[r],o,l;if(i&&(a.duration=e[1]),a.parent=n,t){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=hn(l.vars.inherit)&&l.parent;a.immediateRender=hn(o.immediateRender),t<2?a.runBackwards=1:a.startAt=e[r-1]}return new Re(e[0],a,e[r+1])},$i=function(t,e){return t||t===0?e(t):e},no=function(t,e,n){return n<t?t:n>e?e:n},We=function(t,e){return!Ue(t)||!(e=Yv.exec(t))?"":e[1]},ry=function(t,e,n){return $i(n,function(i){return no(t,e,i)})},bu=[].slice,Np=function(t,e){return t&&si(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&si(t[0]))&&!t.nodeType&&t!==ni},ay=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var r;return Ue(i)&&!e||Np(i,1)?(r=n).push.apply(r,Ln(i)):n.push(i)})||n},Ln=function(t,e,n){return _e&&!e&&_e.selector?_e.selector(t):Ue(t)&&!n&&(vu||!br())?bu.call((e||Lu).querySelectorAll(t),0):Ke(t)?ay(t,n):Np(t)?bu.call(t,0):t?[t]:[]},Tu=function(t){return t=Ln(t)[0]||Qa("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return Ln(e,n.querySelectorAll?n:n===t?Qa("Invalid scope")||Lu.createElement("div"):t)}},Up=function(t){return t.sort(function(){return .5-Math.random()})},Fp=function(t){if(Te(t))return t;var e=si(t)?t:{each:t},n=ys(e.ease),i=e.from||0,r=parseFloat(e.base)||0,a={},o=i>0&&i<1,l=isNaN(i)||o,c=e.axis,h=i,f=i;return Ue(i)?h=f={center:.5,edges:.5,end:1}[i]||0:!o&&l&&(h=i[0],f=i[1]),function(u,d,g){var _=(g||e).length,p=a[_],m,E,T,y,M,w,A,x,b;if(!p){if(b=e.grid==="auto"?0:(e.grid||[1,In])[1],!b){for(A=-In;A<(A=g[b++].getBoundingClientRect().left)&&b<_;);b<_&&b--}for(p=a[_]=[],m=l?Math.min(b,_)*h-.5:i%b,E=b===In?0:l?_*f/b-.5:i/b|0,A=0,x=In,w=0;w<_;w++)T=w%b-m,y=E-(w/b|0),p[w]=M=c?Math.abs(c==="y"?y:T):Mp(T*T+y*y),M>A&&(A=M),M<x&&(x=M);i==="random"&&Up(p),p.max=A-x,p.min=x,p.v=_=(parseFloat(e.amount)||parseFloat(e.each)*(b>_?_-1:c?c==="y"?_/b:b:Math.max(b,_/b))||0)*(i==="edges"?-1:1),p.b=_<0?r-_:r,p.u=We(e.amount||e.each)||0,n=n&&_<0?vy(n):n}return _=(p[u]-p.min)/p.max||0,ve(p.b+(n?n(_):_)*p.v)+p.u}},Eu=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=ve(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(Si(n)?0:We(n))}},Op=function(t,e){var n=Ke(t),i,r;return!n&&si(t)&&(i=n=t.radius||In,t.values?(t=Ln(t.values),(r=!Si(t[0]))&&(i*=i)):t=Eu(t.increment)),$i(e,n?Te(t)?function(a){return r=t(a),Math.abs(r-a)<=i?r:a}:function(a){for(var o=parseFloat(r?a.x:a),l=parseFloat(r?a.y:0),c=In,h=0,f=t.length,u,d;f--;)r?(u=t[f].x-o,d=t[f].y-l,u=u*u+d*d):u=Math.abs(t[f]-o),u<c&&(c=u,h=f);return h=!i||c<=i?t[h]:a,r||h===a||Si(a)?h:h+We(a)}:Eu(t))},Bp=function(t,e,n,i){return $i(Ke(t)?!e:n===!0?!!(n=0):!i,function(){return Ke(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},oy=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(r,a){return a(r)},i)}},ly=function(t,e){return function(n){return t(parseFloat(n))+(e||We(n))}},cy=function(t,e,n){return kp(t,e,0,1,n)},zp=function(t,e,n){return $i(n,function(i){return t[~~e(i)]})},hy=function s(t,e,n){var i=e-t;return Ke(t)?zp(t,s(0,t.length),e):$i(n,function(r){return(i+(r-t)%i)%i+t})},uy=function s(t,e,n){var i=e-t,r=i*2;return Ke(t)?zp(t,s(0,t.length-1),e):$i(n,function(a){return a=(r+(a-t)%r)%r||0,t+(a>i?r-a:a)})},Tr=function(t){return t.replace(Wv,function(e){var n=e.indexOf("[")+1,i=e.substring(n||7,n?e.indexOf("]"):e.length-1).split(Xv);return Bp(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},kp=function(t,e,n,i,r){var a=e-t,o=i-n;return $i(r,function(l){return n+((l-t)/a*o||0)})},fy=function s(t,e,n,i){var r=isNaN(t+e)?0:function(d){return(1-d)*t+d*e};if(!r){var a=Ue(t),o={},l,c,h,f,u;if(n===!0&&(i=1)&&(n=null),a)t={p:t},e={p:e};else if(Ke(t)&&!Ke(e)){for(h=[],f=t.length,u=f-2,c=1;c<f;c++)h.push(s(t[c-1],t[c]));f--,r=function(g){g*=f;var _=Math.min(u,~~g);return h[_](g-_)},n=e}else i||(t=yr(Ke(t)?[]:{},t));if(!h){for(l in e)ku.call(o,t,l,"get",e[l]);r=function(g){return Xu(g,o)||(a?t.p:t)}}}return $i(n,r)},_p=function(t,e,n){var i=t.labels,r=In,a,o,l;for(a in i)o=i[a]-e,o<0==!!n&&o&&r>(o=Math.abs(o))&&(l=a,r=o);return l},vn=function(t,e,n){var i=t.vars,r=i[e],a=_e,o=t._ctx,l,c,h;if(r)return l=i[e+"Params"],c=i.callbackScope||t,n&&Yi.length&&Lc(),o&&(_e=o),h=l?r.apply(c,l):r.call(c),_e=a,h},qa=function(t){return Ji(t),t.scrollTrigger&&t.scrollTrigger.kill(!!He),t.progress()<1&&vn(t,"onInterrupt"),t},vr,Vp=[],Gp=function(t){if(t)if(t=!t.name&&t.default||t,Ru()||t.headless){var e=t.name,n=Te(t),i=e&&!n&&t.init?function(){this._props=[]}:t,r={init:ja,render:Xu,add:ku,kill:Ry,modifier:Cy,rawVars:0},a={targetTest:0,get:0,getSetter:Vc,aliases:{},register:0};if(br(),t!==i){if(ln[e])return;Mn(i,Mn(Dc(t,r),a)),yr(i.prototype,yr(r,Dc(t,a))),ln[i.prop=e]=i,t.targetTest&&(Rc.push(i),Du[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}Ep(e,i),t.register&&t.register(Qe,i,an)}else Vp.push(t)},ue=255,Ya={aqua:[0,ue,ue],lime:[0,ue,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,ue],navy:[0,0,128],white:[ue,ue,ue],olive:[128,128,0],yellow:[ue,ue,0],orange:[ue,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[ue,0,0],pink:[ue,192,203],cyan:[0,ue,ue],transparent:[ue,ue,ue,0]},du=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*ue+.5|0},Hp=function(t,e,n){var i=t?Si(t)?[t>>16,t>>8&ue,t&ue]:0:Ya.black,r,a,o,l,c,h,f,u,d,g;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),Ya[t])i=Ya[t];else if(t.charAt(0)==="#"){if(t.length<6&&(r=t.charAt(1),a=t.charAt(2),o=t.charAt(3),t="#"+r+r+a+a+o+o+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&ue,i&ue,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&ue,t&ue]}else if(t.substr(0,3)==="hsl"){if(i=g=t.match(fp),!e)l=+i[0]%360/360,c=+i[1]/100,h=+i[2]/100,a=h<=.5?h*(c+1):h+c-h*c,r=h*2-a,i.length>3&&(i[3]*=1),i[0]=du(l+1/3,r,a),i[1]=du(l,r,a),i[2]=du(l-1/3,r,a);else if(~t.indexOf("="))return i=t.match(Pu),n&&i.length<4&&(i[3]=1),i}else i=t.match(fp)||Ya.transparent;i=i.map(Number)}return e&&!g&&(r=i[0]/ue,a=i[1]/ue,o=i[2]/ue,f=Math.max(r,a,o),u=Math.min(r,a,o),h=(f+u)/2,f===u?l=c=0:(d=f-u,c=h>.5?d/(2-f-u):d/(f+u),l=f===r?(a-o)/d+(a<o?6:0):f===a?(o-r)/d+2:(r-a)/d+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},Wp=function(t){var e=[],n=[],i=-1;return t.split(Mi).forEach(function(r){var a=r.match(Ss)||[];e.push.apply(e,a),n.push(i+=a.length+1)}),e.c=n,e},xp=function(t,e,n){var i="",r=(t+i).match(Mi),a=e?"hsla(":"rgba(",o=0,l,c,h,f;if(!r)return t;if(r=r.map(function(u){return(u=Hp(u,e,1))&&a+(e?u[0]+","+u[1]+"%,"+u[2]+"%,"+u[3]:u.join(","))+")"}),n&&(h=Wp(t),l=n.c,l.join(i)!==h.c.join(i)))for(c=t.replace(Mi,"1").split(Ss),f=c.length-1;o<f;o++)i+=c[o]+(~l.indexOf(o)?r.shift()||a+"0,0,0,0)":(h.length?h:r.length?r:n).shift());if(!c)for(c=t.split(Mi),f=c.length-1;o<f;o++)i+=c[o]+r[o];return i+c[f]},Mi=(function(){var s="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in Ya)s+="|"+t+"\\b";return new RegExp(s+")","gi")})(),dy=/hsl[a]?\(/,Bu=function(t){var e=t.join(" "),n;if(Mi.lastIndex=0,Mi.test(e))return n=dy.test(e),t[1]=xp(t[1],n),t[0]=xp(t[0],n,Wp(t[1])),!0},to,cn=(function(){var s=Date.now,t=500,e=33,n=s(),i=n,r=1e3/240,a=r,o=[],l,c,h,f,u,d,g=function _(p){var m=s()-i,E=p===!0,T,y,M,w;if((m>t||m<0)&&(n+=m-e),i+=m,M=i-n,T=M-a,(T>0||E)&&(w=++f.frame,u=M-f.time*1e3,f.time=M=M/1e3,a+=T+(T>=r?4:r-T),y=1),E||(l=c(_)),y)for(d=0;d<o.length;d++)o[d](M,u,w,p)};return f={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(p){return u/(1e3/(p||60))},wake:function(){bp&&(!vu&&Ru()&&(ni=vu=window,Lu=ni.document||{},yn.gsap=Qe,(ni.gsapVersions||(ni.gsapVersions=[])).push(Qe.version),Tp(Ic||ni.GreenSockGlobals||!ni.gsap&&ni||{}),Vp.forEach(Gp)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&f.sleep(),c=h||function(p){return setTimeout(p,a-f.time*1e3+1|0)},to=1,g(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),to=0,c=ja},lagSmoothing:function(p,m){t=p||1/0,e=Math.min(m||33,t)},fps:function(p){r=1e3/(p||240),a=f.time*1e3+r},add:function(p,m,E){var T=m?function(y,M,w,A){p(y,M,w,A),f.remove(T)}:p;return f.remove(p),o[E?"unshift":"push"](T),br(),T},remove:function(p,m){~(m=o.indexOf(p))&&o.splice(m,1)&&d>=m&&d--},_listeners:o},f})(),br=function(){return!to&&cn.wake()},ee={},py=/^[\d.\-M][\d.\-,\s]/,my=/["']/g,gy=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],r=1,a=n.length,o,l,c;r<a;r++)l=n[r],o=r!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),e[i]=isNaN(c)?c.replace(my,"").trim():+c,i=l.substr(o+1).trim();return e},_y=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},xy=function(t){var e=(t+"").split("("),n=ee[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[gy(e[1])]:_y(t).split(",").map(Cp)):ee._CE&&py.test(t)?ee._CE("",t):n},vy=function(t){return function(e){return 1-t(1-e)}},ys=function(t,e){return t&&(Te(t)?t:ee[t]||xy(t))||e},Ts=function(t,e,n,i){n===void 0&&(n=function(l){return 1-e(1-l)}),i===void 0&&(i=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var r={easeIn:e,easeOut:n,easeInOut:i},a;return rn(t,function(o){ee[o]=yn[o]=r,ee[a=o.toLowerCase()]=n;for(var l in r)ee[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=ee[o+"."+l]=r[l]}),r},Xp=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},pu=function s(t,e,n){var i=e>=1?e:1,r=(n||(t?.3:.45))/(e<1?e:1),a=r/xu*(Math.asin(1/i)||0),o=function(h){return h===1?1:i*Math.pow(2,-10*h)*Hv((h-a)*r)+1},l=t==="out"?o:t==="in"?function(c){return 1-o(1-c)}:Xp(o);return r=xu/r,l.config=function(c,h){return s(t,c,h)},l},mu=function s(t,e){e===void 0&&(e=1.70158);var n=function(a){return a?--a*a*((e+1)*a+e)+1:0},i=t==="out"?n:t==="in"?function(r){return 1-n(1-r)}:Xp(n);return i.config=function(r){return s(t,r)},i};rn("Linear,Quad,Cubic,Quart,Quint,Strong",function(s,t){var e=t<5?t+1:t;Ts(s+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});ee.Linear.easeNone=ee.none=ee.Linear.easeIn;Ts("Elastic",pu("in"),pu("out"),pu());(function(s,t){var e=1/t,n=2*e,i=2.5*e,r=function(o){return o<e?s*o*o:o<n?s*Math.pow(o-1.5/t,2)+.75:o<i?s*(o-=2.25/t)*o+.9375:s*Math.pow(o-2.625/t,2)+.984375};Ts("Bounce",function(a){return 1-r(1-a)},r)})(7.5625,2.75);Ts("Expo",function(s){return Math.pow(2,10*(s-1))*s+s*s*s*s*s*s*(1-s)});Ts("Circ",function(s){return-(Mp(1-s*s)-1)});Ts("Sine",function(s){return s===1?1:-Gv(s*kv)+1});Ts("Back",mu("in"),mu("out"),mu());ee.SteppedEase=ee.steps=yn.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),r=e?1:0,a=1-fe;return function(o){return((i*no(0,a,o)|0)+r)*n}}};Ka.ease=ee["quad.out"];rn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(s){return Nu+=s+","+s+"Params,"});var zu=function(t,e){this.id=Vv++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:Fu,this.set=e?e.getSetter:Vc},eo=(function(){function s(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,Sr(this,+e.duration,1,1),this.data=e.data,_e&&(this._ctx=_e,_e.data.push(this)),to||cn.wake()}var t=s.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,Sr(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(br(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(kc(this,n),!r._dp||r.parent||Ip(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&ii(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===fe||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Ap(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+mp(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+mp(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,i){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,i):this._repeat?Mr(this._tTime,r)+1:1},t.timeScale=function(n,i){if(!arguments.length)return this._rts===-fe?0:this._rts;if(this._rts===n)return this;var r=this.parent&&this._ts?Nc(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-fe?0:this._rts,this.totalTime(no(-Math.abs(this._delay),this.totalDuration(),r),i!==!1),zc(this),jv(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(br(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==fe&&(this._tTime-=fe)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=ve(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&ii(i,this,this._start-this._delay),this}return this._start},t.endTime=function(n){return this._start+(hn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Nc(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=Jv);var i=He;return He=n,Ou(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),He=i,this},t.globalTime=function(n){for(var i=this,r=arguments.length?n:i.rawTime();i;)r=i._start+r/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):r},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,gp(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,gp(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(Pn(this,n),hn(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,hn(i)),this._dur||(this._zTime=-fe),this},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-fe:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-fe,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=i&&r<this.endTime(!0)-fe)},t.eventCallback=function(n,i,r){var a=this.vars;return arguments.length>1?(i?(a[n]=i,r&&(a[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},t.then=function(n){var i=this,r=i._prom;return new Promise(function(a){var o=Te(n)?n:Rp,l=function(){var h=i.then;i.then=null,r&&r(),Te(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=h),a(o),i.then=h};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},t.kill=function(){qa(this)},s})();Mn(eo.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-fe,_prom:0,_ps:!1,_rts:1});var $e=(function(s){yp(t,s);function t(n,i){var r;return n===void 0&&(n={}),r=s.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=hn(n.sortChildren),ye&&ii(n.parent||ye,yi(r),i),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&Lp(yi(r),n.scrollTrigger),r}var e=t.prototype;return e.to=function(i,r,a){return Ja(0,arguments,this),this},e.from=function(i,r,a){return Ja(1,arguments,this),this},e.fromTo=function(i,r,a,o){return Ja(2,arguments,this),this},e.set=function(i,r,a){return r.duration=0,r.parent=this,Za(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new Re(i,r,Pn(this,a),1),this},e.call=function(i,r,a){return ii(this,Re.delayedCall(0,i,r),a)},e.staggerTo=function(i,r,a,o,l,c,h){return a.duration=r,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=h,a.parent=this,new Re(i,a,Pn(this,l)),this},e.staggerFrom=function(i,r,a,o,l,c,h){return a.runBackwards=1,Za(a).immediateRender=hn(a.immediateRender),this.staggerTo(i,r,a,o,l,c,h)},e.staggerFromTo=function(i,r,a,o,l,c,h,f){return o.startAt=a,Za(o).immediateRender=hn(o.immediateRender),this.staggerTo(i,r,o,l,c,h,f)},e.render=function(i,r,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=i<=0?0:ve(i),f=this._zTime<0!=i<0&&(this._initted||!c),u,d,g,_,p,m,E,T,y,M,w,A;if(this!==ye&&h>l&&i>=0&&(h=l),h!==this._tTime||a||f){if(o!==this._time&&c&&(h+=this._time-o,i+=this._time-o),u=h,y=this._start,T=this._ts,m=!T,f&&(c||(o=this._zTime),(i||!r)&&(this._zTime=i)),this._repeat){if(w=this._yoyo,p=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(p*100+i,r,a);if(u=ve(h%p),h===l?(_=this._repeat,u=c):(M=ve(h/p),_=~~M,_&&_===M&&(u=c,_--),u>c&&(u=c)),M=Mr(this._tTime,p),!o&&this._tTime&&M!==_&&this._tTime-M*p-this._dur<=0&&(M=_),w&&_&1&&(u=c-u,A=1),_!==M&&!this._lock){var x=w&&M&1,b=x===(w&&_&1);if(_<M&&(x=!x),o=x?0:h%c?c:h,this._lock=1,this.render(o||(A?0:ve(_*p)),r,!c)._lock=0,this._tTime=h,!r&&this.parent&&vn(this,"onRepeat"),this.vars.repeatRefresh&&!A&&(this.invalidate()._lock=1,M=_),o&&o!==this._time||m!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,b&&(this._lock=2,o=x?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!A&&this.invalidate()),this._lock=0,!this._ts&&!m)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(E=iy(this,ve(o),ve(u)),E&&(h-=u-(u=E._start))),this._tTime=h,this._time=u,this._act=!!T,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&h&&c&&!r&&!M&&(vn(this,"onStart"),this._tTime!==h))return this;if(u>=o&&i>=0)for(d=this._first;d;){if(g=d._next,(d._act||u>=d._start)&&d._ts&&E!==d){if(d.parent!==this)return this.render(i,r,a);if(d.render(d._ts>0?(u-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(u-d._start)*d._ts,r,a),u!==this._time||!this._ts&&!m){E=0,g&&(h+=this._zTime=-fe);break}}d=g}else{d=this._last;for(var R=i<0?i:u;d;){if(g=d._prev,(d._act||R<=d._end)&&d._ts&&E!==d){if(d.parent!==this)return this.render(i,r,a);if(d.render(d._ts>0?(R-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(R-d._start)*d._ts,r,a||He&&Ou(d)),u!==this._time||!this._ts&&!m){E=0,g&&(h+=this._zTime=R?-fe:fe);break}}d=g}}if(E&&!r&&(this.pause(),E.render(u>=o?0:-fe)._zTime=u>=o?1:-1,this._ts))return this._start=y,zc(this),this.render(i,r,a);this._onUpdate&&!r&&vn(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&o)&&(y===this._start||Math.abs(T)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&Ji(this,1),!r&&!(i<0&&!o)&&(h||o||!l)&&(vn(this,h===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,r){var a=this;if(Si(r)||(r=Pn(this,r,i)),!(i instanceof eo)){if(Ke(i))return i.forEach(function(o){return a.add(o,r)}),this;if(Ue(i))return this.addLabel(i,r);if(Te(i))i=Re.delayedCall(0,i);else return this}return this!==i?ii(this,i,r):this},e.getChildren=function(i,r,a,o){i===void 0&&(i=!0),r===void 0&&(r=!0),a===void 0&&(a=!0),o===void 0&&(o=-In);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof Re?r&&l.push(c):(a&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,r,a)))),c=c._next;return l},e.getById=function(i){for(var r=this.getChildren(1,1,1),a=r.length;a--;)if(r[a].vars.id===i)return r[a]},e.remove=function(i){return Ue(i)?this.removeLabel(i):Te(i)?this.killTweensOf(i):(i.parent===this&&Bc(this,i),i===this._recent&&(this._recent=this._last),vs(this))},e.totalTime=function(i,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=ve(cn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),s.prototype.totalTime.call(this,i,r),this._forcing=0,this):this._tTime},e.addLabel=function(i,r){return this.labels[i]=Pn(this,r),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,r,a){var o=Re.delayedCall(0,r||ja,a);return o.data="isPause",this._hasPause=1,ii(this,o,Pn(this,i))},e.removePause=function(i){var r=this._first;for(i=Pn(this,i);r;)r._start===i&&r.data==="isPause"&&Ji(r),r=r._next},e.killTweensOf=function(i,r,a){for(var o=this.getTweensOf(i,a),l=o.length;l--;)qi!==o[l]&&o[l].kill(i,r);return this},e.getTweensOf=function(i,r){for(var a=[],o=Ln(i),l=this._first,c=Si(r),h;l;)l instanceof Re?$v(l._targets,o)&&(c?(!qi||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&a.push(l):(h=l.getTweensOf(o,r)).length&&a.push.apply(a,h),l=l._next;return a},e.tweenTo=function(i,r){r=r||{};var a=this,o=Pn(a,i),l=r,c=l.startAt,h=l.onStart,f=l.onStartParams,u=l.immediateRender,d,g=Re.to(a,Mn({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:r.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||fe,onStart:function(){if(a.pause(),!d){var p=r.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());g._dur!==p&&Sr(g,p,0,1).render(g._time,!0,!0),d=1}h&&h.apply(g,f||[])}},r));return u?g.render(0):g},e.tweenFromTo=function(i,r,a){return this.tweenTo(r,Mn({startAt:{time:Pn(this,i)}},a))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),_p(this,Pn(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),_p(this,Pn(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+fe)},e.shiftChildren=function(i,r,a){a===void 0&&(a=0);var o=this._first,l=this.labels,c;for(i=ve(i);o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(r)for(c in l)l[c]>=a&&(l[c]+=i);return vs(this)},e.invalidate=function(i){var r=this._first;for(this._lock=0;r;)r.invalidate(i),r=r._next;return s.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var r=this._first,a;r;)a=r._next,this.remove(r),r=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),vs(this)},e.totalDuration=function(i){var r=0,a=this,o=a._last,l=In,c,h,f;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(f=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),h=o._start,h>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,ii(a,o,h-o._delay,1)._lock=0):l=h,h<0&&o._ts&&(r-=h,(!f&&!a._dp||f&&f.smoothChildTiming)&&(a._start+=ve(h/a._ts),a._time-=h,a._tTime-=h),a.shiftChildren(-h,!1,-1/0),l=0),o._end>r&&o._ts&&(r=o._end),o=c;Sr(a,a===ye&&a._time>r?a._time:r,1,1),a._dirty=0}return a._tDur},t.updateRoot=function(i){if(ye._ts&&(Ap(ye,Nc(i,ye)),wp=cn.frame),cn.frame>=dp){dp+=un.autoSleep||120;var r=ye._first;if((!r||!r._ts)&&un.autoSleep&&cn._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||cn.sleep()}}},t})(eo);Mn($e.prototype,{_lock:0,_hasPause:0,_forcing:0});var yy=function(t,e,n,i,r,a,o){var l=new an(this._pt,t,e,0,1,Wu,null,r),c=0,h=0,f,u,d,g,_,p,m,E;for(l.b=n,l.e=i,n+="",i+="",(m=~i.indexOf("random("))&&(i=Tr(i)),a&&(E=[n,i],a(E,t,e),n=E[0],i=E[1]),u=n.match(uu)||[];f=uu.exec(i);)g=f[0],_=i.substring(c,f.index),d?d=(d+1)%5:_.substr(-5)==="rgba("&&(d=1),g!==u[h++]&&(p=parseFloat(u[h-1])||0,l._pt={_next:l._pt,p:_||h===1?_:",",s:p,c:g.charAt(1)==="="?bs(p,g)-p:parseFloat(g)-p,m:d&&d<4?Math.round:0},c=uu.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=o,(Iu.test(i)||m)&&(l.e=0),this._pt=l,l},ku=function(t,e,n,i,r,a,o,l,c,h){Te(i)&&(i=i(r||0,t,a));var f=t[e],u=n!=="get"?n:Te(f)?c?t[e.indexOf("set")||!Te(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():f,d=Te(f)?c?Ey:Zp:Hu,g;if(Ue(i)&&(~i.indexOf("random(")&&(i=Tr(i)),i.charAt(1)==="="&&(g=bs(u,i)+(We(u)||0),(g||g===0)&&(i=g))),!h||u!==i||wu)return!isNaN(u*i)&&i!==""?(g=new an(this._pt,t,e,+u||0,i-(u||0),typeof f=="boolean"?Ay:Jp,0,d),c&&(g.fp=c),o&&g.modifier(o,this,t),this._pt=g):(!f&&!(e in t)&&Oc(e,i),yy.call(this,t,e,u,i,d,l||un.stringFilter,c))},My=function(t,e,n,i,r){if(Te(t)&&(t=$a(t,r,e,n,i)),!si(t)||t.style&&t.nodeType||Ke(t)||Sp(t))return Ue(t)?$a(t,r,e,n,i):t;var a={},o;for(o in t)a[o]=$a(t[o],r,e,n,i);return a},Vu=function(t,e,n,i,r,a){var o,l,c,h;if(ln[t]&&(o=new ln[t]).init(r,o.rawVars?e[t]:My(e[t],i,r,a,n),n,i,a)!==!1&&(n._pt=l=new an(n._pt,r,t,0,1,o.render,o,0,o.priority),n!==vr))for(c=n._ptLookup[n._targets.indexOf(r)],h=o._props.length;h--;)c[o._props[h]]=l;return o},qi,wu,Gu=function s(t,e,n){var i=t.vars,r=i.ease,a=i.startAt,o=i.immediateRender,l=i.lazy,c=i.onUpdate,h=i.runBackwards,f=i.yoyoEase,u=i.keyframes,d=i.autoRevert,g=t._dur,_=t._startAt,p=t._targets,m=t.parent,E=m&&m.data==="nested"?m.vars.targets:p,T=t._overwrite==="auto"&&!Cu,y=t.timeline,M=i.easeReverse||f,w,A,x,b,R,P,N,H,W,U,z,B,Z;if(y&&(!u||!r)&&(r="none"),t._ease=ys(r,Ka.ease),t._rEase=M&&(ys(M)||t._ease),t._from=!y&&!!i.runBackwards,t._from&&(t.ratio=1),!y||u&&!i.stagger){if(H=p[0]?Zi(p[0]).harness:0,B=H&&i[H.prop],w=Dc(i,Du),_&&(_._zTime<0&&_.progress(1),e<0&&h&&o&&!d?_.render(-1,!0):_.revert(h&&g?Cc:Zv),_._lazy=0),a){if(Ji(t._startAt=Re.set(p,Mn({data:"isStart",overwrite:!1,parent:m,immediateRender:!0,lazy:!_&&hn(l),startAt:null,delay:0,onUpdate:c&&function(){return vn(t,"onUpdate")},stagger:0},a))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(He||!o&&!d)&&t._startAt.revert(Cc),o&&g&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(h&&g&&!_){if(e&&(o=!1),x=Mn({overwrite:!1,data:"isFromStart",lazy:o&&!_&&hn(l),immediateRender:o,stagger:0,parent:m},w),B&&(x[H.prop]=B),Ji(t._startAt=Re.set(p,x)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(He?t._startAt.revert(Cc):t._startAt.render(-1,!0)),t._zTime=e,!o)s(t._startAt,fe,fe);else if(!e)return}for(t._pt=t._ptCache=0,l=g&&hn(l)||l&&!g,A=0;A<p.length;A++){if(R=p[A],N=R._gsap||Uu(p)[A]._gsap,t._ptLookup[A]=U={},yu[N.id]&&Yi.length&&Lc(),z=E===p?A:E.indexOf(R),H&&(W=new H).init(R,B||w,t,z,E)!==!1&&(t._pt=b=new an(t._pt,R,W.name,0,1,W.render,W,0,W.priority),W._props.forEach(function(tt){U[tt]=b}),W.priority&&(P=1)),!H||B)for(x in w)ln[x]&&(W=Vu(x,w,t,z,R,E))?W.priority&&(P=1):U[x]=b=ku.call(t,R,x,"get",w[x],z,E,0,i.stringFilter);t._op&&t._op[A]&&t.kill(R,t._op[A]),T&&t._pt&&(qi=t,ye.killTweensOf(R,U,t.globalTime(e)),Z=!t.parent,qi=0),t._pt&&l&&(yu[N.id]=1)}P&&qu(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!Z,u&&e<=0&&y.render(In,!0,!0)},Sy=function(t,e,n,i,r,a,o,l){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],h,f,u,d;if(!c)for(c=t._ptCache[e]=[],u=t._ptLookup,d=t._targets.length;d--;){if(h=u[d][e],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==e&&h.fp!==e;)h=h._next;if(!h)return wu=1,t.vars[e]="+=0",Gu(t,o),wu=0,l?Qa(e+" not eligible for reset. Try splitting into individual properties"):1;c.push(h)}for(d=c.length;d--;)f=c[d],h=f._pt||f,h.s=(i||i===0)&&!r?i:h.s+(i||0)+a*h.c,h.c=n-h.s,f.e&&(f.e=Ee(n)+We(f.e)),f.b&&(f.b=h.s+We(f.b))},by=function(t,e){var n=t[0]?Zi(t[0]).harness:0,i=n&&n.aliases,r,a,o,l;if(!i)return e;r=yr({},e);for(a in i)if(a in r)for(l=i[a].split(","),o=l.length;o--;)r[l[o]]=r[a];return r},Ty=function(t,e,n,i){var r=e.ease||i||"power1.inOut",a,o;if(Ke(e))o=n[t]||(n[t]=[]),e.forEach(function(l,c){return o.push({t:c/(e.length-1)*100,v:l,e:r})});else for(a in e)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(t),v:e[a],e:r})},$a=function(t,e,n,i,r){return Te(t)?t.call(e,n,i,r):Ue(t)&&~t.indexOf("random(")?Tr(t):t},qp=Nu+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",Yp={};rn(qp+",id,stagger,delay,duration,paused,scrollTrigger",function(s){return Yp[s]=1});var Re=(function(s){yp(t,s);function t(n,i,r,a){var o;typeof i=="number"&&(r.duration=i,i=r,r=null),o=s.call(this,a?i:Za(i))||this;var l=o.vars,c=l.duration,h=l.delay,f=l.immediateRender,u=l.stagger,d=l.overwrite,g=l.keyframes,_=l.defaults,p=l.scrollTrigger,m=i.parent||ye,E=(Ke(n)||Sp(n)?Si(n[0]):"length"in i)?[n]:Ln(n),T,y,M,w,A,x,b,R;if(o._targets=E.length?Uu(E):Qa("GSAP target "+n+" not found. https://gsap.com",!un.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=d,g||u||Ac(c)||Ac(h)){i=o.vars;var P=i.easeReverse||i.yoyoEase;if(T=o.timeline=new $e({data:"nested",defaults:_||{},targets:m&&m.data==="nested"?m.vars.targets:E}),T.kill(),T.parent=T._dp=yi(o),T._start=0,u||Ac(c)||Ac(h)){if(w=E.length,b=u&&Fp(u),si(u))for(A in u)~qp.indexOf(A)&&(R||(R={}),R[A]=u[A]);for(y=0;y<w;y++)M=Dc(i,Yp),M.stagger=0,P&&(M.easeReverse=P),R&&yr(M,R),x=E[y],M.duration=+$a(c,yi(o),y,x,E),M.delay=(+$a(h,yi(o),y,x,E)||0)-o._delay,!u&&w===1&&M.delay&&(o._delay=h=M.delay,o._start+=h,M.delay=0),T.to(x,M,b?b(y,x,E):0),T._ease=ee.none;T.duration()?c=h=0:o.timeline=0}else if(g){Za(Mn(T.vars.defaults,{ease:"none"})),T._ease=ys(g.ease||i.ease||"none");var N=0,H,W,U;if(Ke(g))g.forEach(function(z){return T.to(E,z,">")}),T.duration();else{M={};for(A in g)A==="ease"||A==="easeEach"||Ty(A,g[A],M,g.easeEach);for(A in M)for(H=M[A].sort(function(z,B){return z.t-B.t}),N=0,y=0;y<H.length;y++)W=H[y],U={ease:W.e,duration:(W.t-(y?H[y-1].t:0))/100*c},U[A]=W.v,T.to(E,U,N),N+=U.duration;T.duration()<c&&T.to({},{duration:c-T.duration()})}}c||o.duration(c=T.duration())}else o.timeline=0;return d===!0&&!Cu&&(qi=yi(o),ye.killTweensOf(E),qi=0),ii(m,yi(o),r),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(f||!c&&!g&&o._start===ve(m._time)&&hn(f)&&ty(yi(o))&&m.data!=="nested")&&(o._tTime=-fe,o.render(Math.max(0,-h)||0)),p&&Lp(yi(o),p),o}var e=t.prototype;return e.render=function(i,r,a){var o=this._time,l=this._tDur,c=this._dur,h=i<0,f=i>l-fe&&!h?l:i<fe?0:i,u,d,g,_,p,m,E,T;if(!c)ny(this,i,r,a);else if(f!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h||this._lazy){if(u=f,T=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(_*100+i,r,a);if(u=ve(f%_),f===l?(g=this._repeat,u=c):(p=ve(f/_),g=~~p,g&&g===p?(u=c,g--):u>c&&(u=c)),m=this._yoyo&&g&1,m&&(u=c-u),p=Mr(this._tTime,_),u===o&&!a&&this._initted&&g===p)return this._tTime=f,this;g!==p&&this.vars.repeatRefresh&&!m&&!this._lock&&u!==_&&this._initted&&(this._lock=a=1,this.render(ve(_*g),!0).invalidate()._lock=0)}if(!this._initted){if(Dp(this,h?i:u,a,r,f))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&g!==p))return this;if(c!==this._dur)return this.render(i,r,a)}if(this._rEase){var y=u<o;if(y!==this._inv){var M=y?o:c-o;this._inv=y,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=o,this._invRecip=M?(y?-1:1)/M:0,this._invScale=y?-this.ratio:1-this.ratio,this._invEase=y?this._rEase:this._ease}this.ratio=E=this._invRatio+this._invScale*this._invEase((u-this._invTime)*this._invRecip)}else this.ratio=E=this._ease(u/c);if(this._from&&(this.ratio=E=1-E),this._tTime=f,this._time=u,!this._act&&this._ts&&(this._act=1,this._lazy=0),!o&&f&&!r&&!p&&(vn(this,"onStart"),this._tTime!==f))return this;for(d=this._pt;d;)d.r(E,d.d),d=d._next;T&&T.render(i<0?i:T._dur*T._ease(u/this._dur),r,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!r&&(h&&Mu(this,i,r,a),vn(this,"onUpdate")),this._repeat&&g!==p&&this.vars.onRepeat&&!r&&this.parent&&vn(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(h&&!this._onUpdate&&Mu(this,i,!0,!0),(i||!c)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&Ji(this,1),!r&&!(h&&!o)&&(f||o||m)&&(vn(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),s.prototype.invalidate.call(this,i)},e.resetTo=function(i,r,a,o,l){to||cn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||Gu(this,c),h=this._ease(c/this._dur),Sy(this,i,r,a,o,h,c,l)?this.resetTo(i,r,a,o,1):(kc(this,0),this.parent||Pp(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,r){if(r===void 0&&(r="all"),!i&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?qa(this):this.scrollTrigger&&this.scrollTrigger.kill(!!He),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,r,qi&&qi.vars.overwrite!==!0)._first||qa(this),this.parent&&a!==this.timeline.totalDuration()&&Sr(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=i?Ln(i):o,c=this._ptLookup,h=this._pt,f,u,d,g,_,p,m;if((!r||r==="all")&&Qv(o,l))return r==="all"&&(this._pt=0),qa(this);for(f=this._op=this._op||[],r!=="all"&&(Ue(r)&&(_={},rn(r,function(E){return _[E]=1}),r=_),r=by(o,r)),m=o.length;m--;)if(~l.indexOf(o[m])){u=c[m],r==="all"?(f[m]=r,g=u,d={}):(d=f[m]=f[m]||{},g=r);for(_ in g)p=u&&u[_],p&&((!("kill"in p.d)||p.d.kill(_)===!0)&&Bc(this,p,"_pt"),delete u[_]),d!=="all"&&(d[_]=1)}return this._initted&&!this._pt&&h&&qa(this),this},t.to=function(i,r){return new t(i,r,arguments[2])},t.from=function(i,r){return Ja(1,arguments)},t.delayedCall=function(i,r,a,o){return new t(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:r,onReverseComplete:r,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},t.fromTo=function(i,r,a){return Ja(2,arguments)},t.set=function(i,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new t(i,r)},t.killTweensOf=function(i,r,a){return ye.killTweensOf(i,r,a)},t})(eo);Mn(Re.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});rn("staggerTo,staggerFrom,staggerFromTo",function(s){Re[s]=function(){var t=new $e,e=bu.call(arguments,0);return e.splice(s==="staggerFromTo"?5:4,0,0),t[s].apply(t,e)}});var Hu=function(t,e,n){return t[e]=n},Zp=function(t,e,n){return t[e](n)},Ey=function(t,e,n,i){return t[e](i.fp,n)},wy=function(t,e,n){return t.setAttribute(e,n)},Vc=function(t,e){return Te(t[e])?Zp:Fc(t[e])&&t.setAttribute?wy:Hu},Jp=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},Ay=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},Wu=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},Xu=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},Cy=function(t,e,n,i){for(var r=this._pt,a;r;)a=r._next,r.p===i&&r.modifier(t,e,n),r=a},Ry=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?Bc(this,e,"_pt"):e.dep||(n=1),e=i;return!n},Py=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},qu=function(t){for(var e=t._pt,n,i,r,a;e;){for(n=e._next,i=r;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:a)?e._prev._next=e:r=e,(e._next=i)?i._prev=e:a=e,e=n}t._pt=r},an=(function(){function s(e,n,i,r,a,o,l,c,h){this.t=n,this.s=r,this.c=a,this.p=i,this.r=o||Jp,this.d=l||this,this.set=c||Hu,this.pr=h||0,this._next=e,e&&(e._prev=this)}var t=s.prototype;return t.modifier=function(n,i,r){this.mSet=this.mSet||this.set,this.set=Py,this.m=n,this.mt=r,this.tween=i},s})();rn(Nu+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(s){return Du[s]=1});yn.TweenMax=yn.TweenLite=Re;yn.TimelineLite=yn.TimelineMax=$e;ye=new $e({sortChildren:!1,defaults:Ka,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});un.stringFilter=Bu;var Ms=[],Pc={},Iy=[],vp=0,Ly=0,gu=function(t){return(Pc[t]||Iy).map(function(e){return e()})},Au=function(){var t=Date.now(),e=[];t-vp>2&&(gu("matchMediaInit"),Ms.forEach(function(n){var i=n.queries,r=n.conditions,a,o,l,c;for(o in i)a=ni.matchMedia(i[o]).matches,a&&(l=1),a!==r[o]&&(r[o]=a,c=1);c&&(n.revert(),l&&e.push(n))}),gu("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),vp=t,gu("matchMedia"))},$p=(function(){function s(e,n){this.selector=n&&Tu(n),this.data=[],this._r=[],this.isReverted=!1,this.id=Ly++,e&&this.add(e)}var t=s.prototype;return t.add=function(n,i,r){Te(n)&&(r=i,i=n,n=Te);var a=this,o=function(){var c=_e,h=a.selector,f;return c&&c!==a&&c.data.push(a),r&&(a.selector=Tu(r)),_e=a,f=i.apply(a,arguments),Te(f)&&a._r.push(f),_e=c,a.selector=h,a.isReverted=!1,f};return a.last=o,n===Te?o(a,function(l){return a.add(null,l)}):n?a[n]=o:o},t.ignore=function(n){var i=_e;_e=null,n(this),_e=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof s?n.push.apply(n,i.getTweens()):i instanceof Re&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var r=this;if(n?(function(){for(var o=r.getTweens(),l=r.data.length,c;l--;)c=r.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(h){return o.splice(o.indexOf(h),1)}));for(o.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,f){return f.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),l=r.data.length;l--;)c=r.data[l],c instanceof $e?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Re)&&c.revert&&c.revert(n);r._r.forEach(function(h){return h(n,r)}),r.isReverted=!0})():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),i)for(var a=Ms.length;a--;)Ms[a].id===this.id&&Ms.splice(a,1)},t.revert=function(n){this.kill(n||{})},s})(),Dy=(function(){function s(e){this.contexts=[],this.scope=e,_e&&_e.data.push(this)}var t=s.prototype;return t.add=function(n,i,r){si(n)||(n={matches:n});var a=new $p(0,r||this.scope),o=a.conditions={},l,c,h;_e&&!a.selector&&(a.selector=_e.selector),this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(c in n)c==="all"?h=1:(l=ni.matchMedia(n[c]),l&&(Ms.indexOf(a)<0&&Ms.push(a),(o[c]=l.matches)&&(h=1),l.addListener?l.addListener(Au):l.addEventListener("change",Au)));return h&&i(a,function(f){return a.add(null,f)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},s})(),Uc={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return Gp(i)})},timeline:function(t){return new $e(t)},getTweensOf:function(t,e){return ye.getTweensOf(t,e)},getProperty:function(t,e,n,i){Ue(t)&&(t=Ln(t)[0]);var r=Zi(t||{}).get,a=n?Rp:Cp;return n==="native"&&(n=""),t&&(e?a((ln[e]&&ln[e].get||r)(t,e,n,i)):function(o,l,c){return a((ln[o]&&ln[o].get||r)(t,o,l,c))})},quickSetter:function(t,e,n){if(t=Ln(t),t.length>1){var i=t.map(function(h){return Qe.quickSetter(h,e,n)}),r=i.length;return function(h){for(var f=r;f--;)i[f](h)}}t=t[0]||{};var a=ln[e],o=Zi(t),l=o.harness&&(o.harness.aliases||{})[e]||e,c=a?function(h){var f=new a;vr._pt=0,f.init(t,n?h+n:h,vr,0,[t]),f.render(1,f),vr._pt&&Xu(1,vr)}:o.set(t,l);return a?c:function(h){return c(t,l,n?h+n:h,o,1)}},quickTo:function(t,e,n){var i,r=Qe.to(t,Mn((i={},i[e]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),a=function(l,c,h){return r.resetTo(e,l,c,h)};return a.tween=r,a},isTweening:function(t){return ye.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=ys(t.ease,Ka.ease)),pp(Ka,t||{})},config:function(t){return pp(un,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,r=t.defaults,a=t.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!ln[o]&&!yn[o]&&Qa(e+" effect requires "+o+" plugin.")}),fu[e]=function(o,l,c){return n(Ln(o),Mn(l||{},r),c)},a&&($e.prototype[e]=function(o,l,c){return this.add(fu[e](o,si(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){ee[t]=ys(e)},parseEase:function(t,e){return arguments.length?ys(t,e):ee},getById:function(t){return ye.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new $e(t),i,r;for(n.smoothChildTiming=hn(t.smoothChildTiming),ye.remove(n),n._dp=0,n._time=n._tTime=ye._time,i=ye._first;i;)r=i._next,(e||!(!i._dur&&i instanceof Re&&i.vars.onComplete===i._targets[0]))&&ii(n,i,i._start-i._delay),i=r;return ii(ye,n,0),n},context:function(t,e){return t?new $p(t,e):_e},matchMedia:function(t){return new Dy(t)},matchMediaRefresh:function(){return Ms.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||Au()},addEventListener:function(t,e){var n=Pc[t]||(Pc[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=Pc[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:hy,wrapYoyo:uy,distribute:Fp,random:Bp,snap:Op,normalize:cy,getUnit:We,clamp:ry,splitColor:Hp,toArray:Ln,selector:Tu,mapRange:kp,pipe:oy,unitize:ly,interpolate:fy,shuffle:Up},install:Tp,effects:fu,ticker:cn,updateRoot:$e.updateRoot,plugins:ln,globalTimeline:ye,core:{PropTween:an,globals:Ep,Tween:Re,Timeline:$e,Animation:eo,getCache:Zi,_removeLinkedListItem:Bc,reverting:function(){return He},context:function(t){return t&&_e&&(_e.data.push(t),t._ctx=_e),_e},suppressOverwrites:function(t){return Cu=t}}};rn("to,from,fromTo,delayedCall,set,killTweensOf",function(s){return Uc[s]=Re[s]});cn.add($e.updateRoot);vr=Uc.to({},{duration:0});var Ny=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},Uy=function(t,e){var n=t._targets,i,r,a;for(i in e)for(r=n.length;r--;)a=t._ptLookup[r][i],a&&(a=a.d)&&(a._pt&&(a=Ny(a,i)),a&&a.modifier&&a.modifier(e[i],t,n[r],i))},_u=function(t,e){return{name:t,headless:1,rawVars:1,init:function(i,r,a){a._onInit=function(o){var l,c;if(Ue(r)&&(l={},rn(r,function(h){return l[h]=1}),r=l),e){l={};for(c in r)l[c]=e(r[c]);r=l}Uy(o,r)}}}},Qe=Uc.registerPlugin({name:"attr",init:function(t,e,n,i,r){var a,o,l;this.tween=n;for(a in e)l=t.getAttribute(a)||"",o=this.add(t,"setAttribute",(l||0)+"",e[a],i,r,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(t,e){for(var n=e._pt;n;)He?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",headless:1,init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},_u("roundProps",Eu),_u("modifiers"),_u("snap",Op))||Uc;Re.version=$e.version=Qe.version="3.15.0";bp=1;Ru()&&br();var Fy=ee.Power0,Oy=ee.Power1,By=ee.Power2,zy=ee.Power3,ky=ee.Power4,Vy=ee.Linear,Gy=ee.Quad,Hy=ee.Cubic,Wy=ee.Quart,Xy=ee.Quint,qy=ee.Strong,Yy=ee.Elastic,Zy=ee.Back,Jy=ee.SteppedEase,$y=ee.Bounce,Ky=ee.Sine,Qy=ee.Expo,jy=ee.Circ;var Kp,Ki,wr,Qu,Cs,tM,Qp,ju,eM=function(){return typeof window<"u"},Ti={},As=180/Math.PI,Ar=Math.PI/180,Er=Math.atan2,jp=1e8,tf=/([A-Z])/g,nM=/(left|right|width|margin|padding|x)/i,iM=/[\s,\(]\S/,ri={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Zu=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},sM=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},rM=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},aM=function(t,e){return e.set(e.t,e.p,t===1?e.e:t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},oM=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},o0=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},l0=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},lM=function(t,e,n){return t.style[e]=n},cM=function(t,e,n){return t.style.setProperty(e,n)},hM=function(t,e,n){return t._gsap[e]=n},uM=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},fM=function(t,e,n,i,r){var a=t._gsap;a.scaleX=a.scaleY=n,a.renderTransform(r,a)},dM=function(t,e,n,i,r){var a=t._gsap;a[e]=n,a.renderTransform(r,a)},Me="transform",fn=Me+"Origin",pM=function s(t,e){var n=this,i=this.target,r=i.style,a=i._gsap;if(t in Ti&&r){if(this.tfm=this.tfm||{},t!=="transform")t=ri[t]||t,~t.indexOf(",")?t.split(",").forEach(function(o){return n.tfm[o]=bi(i,o)}):this.tfm[t]=a.x?a[t]:bi(i,t),t===fn&&(this.tfm.zOrigin=a.zOrigin);else return ri.transform.split(",").forEach(function(o){return s.call(n,o,e)});if(this.props.indexOf(Me)>=0)return;a.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(fn,e,"")),t=Me}(r||e)&&this.props.push(t,e,r[t])},c0=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},mM=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,r,a;for(r=0;r<t.length;r+=3)t[r+1]?t[r+1]===2?e[t[r]](t[r+2]):e[t[r]]=t[r+2]:t[r+2]?n[t[r]]=t[r+2]:n.removeProperty(t[r].substr(0,2)==="--"?t[r]:t[r].replace(tf,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),r=ju(),(!r||!r.isStart)&&!n[Me]&&(c0(n),i.zOrigin&&n[fn]&&(n[fn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},h0=function(t,e){var n={target:t,props:[],revert:mM,save:pM};return t._gsap||Qe.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(i){return n.save(i)}),n},u0,Ju=function(t,e){var n=Ki.createElementNS?Ki.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):Ki.createElement(t);return n&&n.style?n:Ki.createElement(t)},Sn=function s(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(tf,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&s(t,Cr(e)||e,1)||""},t0="O,Moz,ms,Ms,Webkit".split(","),Cr=function(t,e,n){var i=e||Cs,r=i.style,a=5;if(t in r&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);a--&&!(t0[a]+t in r););return a<0?null:(a===3?"ms":a>=0?t0[a]:"")+t},$u=function(){eM()&&window.document&&(Kp=window,Ki=Kp.document,wr=Ki.documentElement,Cs=Ju("div")||{style:{}},tM=Ju("div"),Me=Cr(Me),fn=Me+"Origin",Cs.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",u0=!!Cr("perspective"),ju=Qe.core.reverting,Qu=1)},e0=function(t){var e=t.ownerSVGElement,n=Ju("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=t.cloneNode(!0),r;i.style.display="block",n.appendChild(i),wr.appendChild(n);try{r=i.getBBox()}catch{}return n.removeChild(i),wr.removeChild(n),r},n0=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},f0=function(t){var e,n;try{e=t.getBBox()}catch{e=e0(t),n=1}return e&&(e.width||e.height)||n||(e=e0(t)),e&&!e.width&&!e.x&&!e.y?{x:+n0(t,["x","cx","x1"])||0,y:+n0(t,["y","cy","y1"])||0,width:0,height:0}:e},d0=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&f0(t))},ji=function(t,e){if(e){var n=t.style,i;e in Ti&&e!==fn&&(e=Me),n.removeProperty?(i=e.substr(0,2),(i==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(i==="--"?e:e.replace(tf,"-$1").toLowerCase())):n.removeAttribute(e)}},Qi=function(t,e,n,i,r,a){var o=new an(t._pt,e,n,0,1,a?l0:o0);return t._pt=o,o.b=i,o.e=r,t._props.push(n),o},i0={deg:1,rad:1,turn:1},gM={grid:1,flex:1},ts=function s(t,e,n,i){var r=parseFloat(n)||0,a=(n+"").trim().substr((r+"").length)||"px",o=Cs.style,l=nM.test(e),c=t.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),f=100,u=i==="px",d=i==="%",g,_,p,m;if(i===a||!r||i0[i]||i0[a])return r;if(a!=="px"&&!u&&(r=s(t,e,n,"px")),m=t.getCTM&&d0(t),(d||a==="%")&&(Ti[e]||~e.indexOf("adius")))return g=m?t.getBBox()[l?"width":"height"]:t[h],Ee(d?r/g*f:r/100*g);if(o[l?"width":"height"]=f+(u?a:i),_=i!=="rem"&&~e.indexOf("adius")||i==="em"&&t.appendChild&&!c?t:t.parentNode,m&&(_=(t.ownerSVGElement||{}).parentNode),(!_||_===Ki||!_.appendChild)&&(_=Ki.body),p=_._gsap,p&&d&&p.width&&l&&p.time===cn.time&&!p.uncache)return Ee(r/p.width*f);if(d&&(e==="height"||e==="width")){var E=t.style[e];t.style[e]=f+i,g=t[h],E?t.style[e]=E:ji(t,e)}else(d||a==="%")&&!gM[Sn(_,"display")]&&(o.position=Sn(t,"position")),_===t&&(o.position="static"),_.appendChild(Cs),g=Cs[h],_.removeChild(Cs),o.position="absolute";return l&&d&&(p=Zi(_),p.time=cn.time,p.width=_[h]),Ee(u?g*r/f:g&&r?f/g*r:0)},bi=function(t,e,n,i){var r;return Qu||$u(),e in ri&&e!=="transform"&&(e=ri[e],~e.indexOf(",")&&(e=e.split(",")[0])),Ti[e]&&e!=="transform"?(r=ro(t,i),r=e!=="transformOrigin"?r[e]:r.svg?r.origin:Hc(Sn(t,fn))+" "+r.zOrigin+"px"):(r=t.style[e],(!r||r==="auto"||i||~(r+"").indexOf("calc("))&&(r=Gc[e]&&Gc[e](t,e,n)||Sn(t,e)||Fu(t,e)||(e==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?ts(t,e,r,n)+n:r},_M=function(t,e,n,i){if(!n||n==="none"){var r=Cr(e,t,1),a=r&&Sn(t,r,1);a&&a!==n?(e=r,n=a):e==="borderColor"&&(n=Sn(t,"borderTopColor"))}var o=new an(this._pt,t.style,e,0,1,Wu),l=0,c=0,h,f,u,d,g,_,p,m,E,T,y,M;if(o.b=n,o.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=Sn(t,i.substring(4,i.indexOf(")")))),i==="auto"&&(_=t.style[e],t.style[e]=i,i=Sn(t,e)||i,_?t.style[e]=_:ji(t,e)),h=[n,i],Bu(h),n=h[0],i=h[1],u=n.match(Ss)||[],M=i.match(Ss)||[],M.length){for(;f=Ss.exec(i);)p=f[0],E=i.substring(l,f.index),g?g=(g+1)%5:(E.substr(-5)==="rgba("||E.substr(-5)==="hsla(")&&(g=1),p!==(_=u[c++]||"")&&(d=parseFloat(_)||0,y=_.substr((d+"").length),p.charAt(1)==="="&&(p=bs(d,p)+y),m=parseFloat(p),T=p.substr((m+"").length),l=Ss.lastIndex-T.length,T||(T=T||un.units[e]||y,l===i.length&&(i+=T,o.e+=T)),y!==T&&(d=ts(t,e,_,T)||0),o._pt={_next:o._pt,p:E||c===1?E:",",s:d,c:m-d,m:g&&g<4||e==="zIndex"?Math.round:0});o.c=l<i.length?i.substring(l,i.length):""}else o.r=e==="display"&&i==="none"?l0:o0;return Iu.test(i)&&(o.e=0),this._pt=o,o},s0={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},xM=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=s0[n]||n,e[1]=s0[i]||i,e.join(" ")},vM=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,r=e.u,a=n._gsap,o,l,c;if(r==="all"||r===!0)i.cssText="",l=1;else for(r=r.split(","),c=r.length;--c>-1;)o=r[c],Ti[o]&&(l=1,o=o==="transformOrigin"?fn:Me),ji(n,o);l&&(ji(n,Me),a&&(a.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",ro(n,1),a.uncache=1,c0(i)))}},Gc={clearProps:function(t,e,n,i,r){if(r.data!=="isFromStart"){var a=t._pt=new an(t._pt,e,n,0,0,vM);return a.u=i,a.pr=-10,a.tween=r,t._props.push(n),1}}},so=[1,0,0,1,0,0],p0={},m0=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},r0=function(t){var e=Sn(t,Me);return m0(e)?so:e.substr(7).match(Pu).map(Ee)},ef=function(t,e){var n=t._gsap||Zi(t),i=t.style,r=r0(t),a,o,l,c;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?so:r):(r===so&&!t.offsetParent&&t!==wr&&!n.svg&&(l=i.display,i.display="block",a=t.parentNode,(!a||!t.offsetParent&&!t.getBoundingClientRect().width)&&(c=1,o=t.nextElementSibling,wr.appendChild(t)),r=r0(t),l?i.display=l:ji(t,"display"),c&&(o?a.insertBefore(t,o):a?a.appendChild(t):wr.removeChild(t))),e&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},Ku=function(t,e,n,i,r,a){var o=t._gsap,l=r||ef(t,!0),c=o.xOrigin||0,h=o.yOrigin||0,f=o.xOffset||0,u=o.yOffset||0,d=l[0],g=l[1],_=l[2],p=l[3],m=l[4],E=l[5],T=e.split(" "),y=parseFloat(T[0])||0,M=parseFloat(T[1])||0,w,A,x,b;n?l!==so&&(A=d*p-g*_)&&(x=y*(p/A)+M*(-_/A)+(_*E-p*m)/A,b=y*(-g/A)+M*(d/A)-(d*E-g*m)/A,y=x,M=b):(w=f0(t),y=w.x+(~T[0].indexOf("%")?y/100*w.width:y),M=w.y+(~(T[1]||T[0]).indexOf("%")?M/100*w.height:M)),i||i!==!1&&o.smooth?(m=y-c,E=M-h,o.xOffset=f+(m*d+E*_)-m,o.yOffset=u+(m*g+E*p)-E):o.xOffset=o.yOffset=0,o.xOrigin=y,o.yOrigin=M,o.smooth=!!i,o.origin=e,o.originIsAbsolute=!!n,t.style[fn]="0px 0px",a&&(Qi(a,o,"xOrigin",c,y),Qi(a,o,"yOrigin",h,M),Qi(a,o,"xOffset",f,o.xOffset),Qi(a,o,"yOffset",u,o.yOffset)),t.setAttribute("data-svg-origin",y+" "+M)},ro=function(t,e){var n=t._gsap||new zu(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,r=n.scaleX<0,a="px",o="deg",l=getComputedStyle(t),c=Sn(t,fn)||"0",h,f,u,d,g,_,p,m,E,T,y,M,w,A,x,b,R,P,N,H,W,U,z,B,Z,tt,at,lt,dt,Wt,Yt,Xt;return h=f=u=_=p=m=E=T=y=0,d=g=1,n.svg=!!(t.getCTM&&d0(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Me]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Me]!=="none"?l[Me]:"")),i.scale=i.rotate=i.translate="none"),A=ef(t,n.svg),n.svg&&(n.uncache?(Z=t.getBBox(),c=n.xOrigin-Z.x+"px "+(n.yOrigin-Z.y)+"px",B=""):B=!e&&t.getAttribute("data-svg-origin"),Ku(t,B||c,!!B||n.originIsAbsolute,n.smooth!==!1,A)),M=n.xOrigin||0,w=n.yOrigin||0,A!==so&&(P=A[0],N=A[1],H=A[2],W=A[3],h=U=A[4],f=z=A[5],A.length===6?(d=Math.sqrt(P*P+N*N),g=Math.sqrt(W*W+H*H),_=P||N?Er(N,P)*As:0,E=H||W?Er(H,W)*As+_:0,E&&(g*=Math.abs(Math.cos(E*Ar))),n.svg&&(h-=M-(M*P+w*H),f-=w-(M*N+w*W))):(Xt=A[6],Wt=A[7],at=A[8],lt=A[9],dt=A[10],Yt=A[11],h=A[12],f=A[13],u=A[14],x=Er(Xt,dt),p=x*As,x&&(b=Math.cos(-x),R=Math.sin(-x),B=U*b+at*R,Z=z*b+lt*R,tt=Xt*b+dt*R,at=U*-R+at*b,lt=z*-R+lt*b,dt=Xt*-R+dt*b,Yt=Wt*-R+Yt*b,U=B,z=Z,Xt=tt),x=Er(-H,dt),m=x*As,x&&(b=Math.cos(-x),R=Math.sin(-x),B=P*b-at*R,Z=N*b-lt*R,tt=H*b-dt*R,Yt=W*R+Yt*b,P=B,N=Z,H=tt),x=Er(N,P),_=x*As,x&&(b=Math.cos(x),R=Math.sin(x),B=P*b+N*R,Z=U*b+z*R,N=N*b-P*R,z=z*b-U*R,P=B,U=Z),p&&Math.abs(p)+Math.abs(_)>359.9&&(p=_=0,m=180-m),d=Ee(Math.sqrt(P*P+N*N+H*H)),g=Ee(Math.sqrt(z*z+Xt*Xt)),x=Er(U,z),E=Math.abs(x)>2e-4?x*As:0,y=Yt?1/(Yt<0?-Yt:Yt):0),n.svg&&(B=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!m0(Sn(t,Me)),B&&t.setAttribute("transform",B))),Math.abs(E)>90&&Math.abs(E)<270&&(r?(d*=-1,E+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,E+=E<=0?180:-180)),e=e||n.uncache,n.x=h-((n.xPercent=h&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-h)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+a,n.y=f-((n.yPercent=f&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-f)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+a,n.z=u+a,n.scaleX=Ee(d),n.scaleY=Ee(g),n.rotation=Ee(_)+o,n.rotationX=Ee(p)+o,n.rotationY=Ee(m)+o,n.skewX=E+o,n.skewY=T+o,n.transformPerspective=y+a,(n.zOrigin=parseFloat(c.split(" ")[2])||!e&&n.zOrigin||0)&&(i[fn]=Hc(c)),n.xOffset=n.yOffset=0,n.force3D=un.force3D,n.renderTransform=n.svg?MM:u0?g0:yM,n.uncache=0,n},Hc=function(t){return(t=t.split(" "))[0]+" "+t[1]},Yu=function(t,e,n){var i=We(e);return Ee(parseFloat(e)+parseFloat(ts(t,"x",n+"px",i)))+i},yM=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,g0(t,e)},Es="0deg",io="0px",ws=") ",g0=function(t,e){var n=e||this,i=n.xPercent,r=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,h=n.rotationY,f=n.rotationX,u=n.skewX,d=n.skewY,g=n.scaleX,_=n.scaleY,p=n.transformPerspective,m=n.force3D,E=n.target,T=n.zOrigin,y="",M=m==="auto"&&t&&t!==1||m===!0;if(T&&(f!==Es||h!==Es)){var w=parseFloat(h)*Ar,A=Math.sin(w),x=Math.cos(w),b;w=parseFloat(f)*Ar,b=Math.cos(w),a=Yu(E,a,A*b*-T),o=Yu(E,o,-Math.sin(w)*-T),l=Yu(E,l,x*b*-T+T)}p!==io&&(y+="perspective("+p+ws),(i||r)&&(y+="translate("+i+"%, "+r+"%) "),(M||a!==io||o!==io||l!==io)&&(y+=l!==io||M?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+ws),c!==Es&&(y+="rotate("+c+ws),h!==Es&&(y+="rotateY("+h+ws),f!==Es&&(y+="rotateX("+f+ws),(u!==Es||d!==Es)&&(y+="skew("+u+", "+d+ws),(g!==1||_!==1)&&(y+="scale("+g+", "+_+ws),E.style[Me]=y||"translate(0, 0)"},MM=function(t,e){var n=e||this,i=n.xPercent,r=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,h=n.skewY,f=n.scaleX,u=n.scaleY,d=n.target,g=n.xOrigin,_=n.yOrigin,p=n.xOffset,m=n.yOffset,E=n.forceCSS,T=parseFloat(a),y=parseFloat(o),M,w,A,x,b;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=Ar,c*=Ar,M=Math.cos(l)*f,w=Math.sin(l)*f,A=Math.sin(l-c)*-u,x=Math.cos(l-c)*u,c&&(h*=Ar,b=Math.tan(c-h),b=Math.sqrt(1+b*b),A*=b,x*=b,h&&(b=Math.tan(h),b=Math.sqrt(1+b*b),M*=b,w*=b)),M=Ee(M),w=Ee(w),A=Ee(A),x=Ee(x)):(M=f,x=u,w=A=0),(T&&!~(a+"").indexOf("px")||y&&!~(o+"").indexOf("px"))&&(T=ts(d,"x",a,"px"),y=ts(d,"y",o,"px")),(g||_||p||m)&&(T=Ee(T+g-(g*M+_*A)+p),y=Ee(y+_-(g*w+_*x)+m)),(i||r)&&(b=d.getBBox(),T=Ee(T+i/100*b.width),y=Ee(y+r/100*b.height)),b="matrix("+M+","+w+","+A+","+x+","+T+","+y+")",d.setAttribute("transform",b),E&&(d.style[Me]=b)},SM=function(t,e,n,i,r){var a=360,o=Ue(r),l=parseFloat(r)*(o&&~r.indexOf("rad")?As:1),c=l-i,h=i+c+"deg",f,u;return o&&(f=r.split("_")[1],f==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),f==="cw"&&c<0?c=(c+a*jp)%a-~~(c/a)*a:f==="ccw"&&c>0&&(c=(c-a*jp)%a-~~(c/a)*a)),t._pt=u=new an(t._pt,e,n,i,c,sM),u.e=h,u.u="deg",t._props.push(n),u},a0=function(t,e){for(var n in e)t[n]=e[n];return t},bM=function(t,e,n){var i=a0({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,c,h,f,u,d,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[Me]=e,o=ro(n,1),ji(n,Me),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Me],a[Me]=e,o=ro(n,1),a[Me]=c);for(l in Ti)c=i[l],h=o[l],c!==h&&r.indexOf(l)<0&&(d=We(c),g=We(h),f=d!==g?ts(n,l,c,g):parseFloat(c),u=parseFloat(h),t._pt=new an(t._pt,o,l,f,u-f,Zu),t._pt.u=g||0,t._props.push(l));a0(o,i)};rn("padding,margin,Width,Radius",function(s,t){var e="Top",n="Right",i="Bottom",r="Left",a=(t<3?[e,n,i,r]:[e+r,e+n,i+n,i+r]).map(function(o){return t<2?s+o:"border"+o+s});Gc[t>1?"border"+s:s]=function(o,l,c,h,f){var u,d;if(arguments.length<4)return u=a.map(function(g){return bi(o,g,c)}),d=u.join(" "),d.split(u[0]).length===5?u[0]:d;u=(h+"").split(" "),d={},a.forEach(function(g,_){return d[g]=u[_]=u[_]||u[(_-1)/2|0]}),o.init(l,d,f)}});var nf={name:"css",register:$u,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,r){var a=this._props,o=t.style,l=n.vars.startAt,c,h,f,u,d,g,_,p,m,E,T,y,M,w,A,x,b;Qu||$u(),this.styles=this.styles||h0(t),x=this.styles.props,this.tween=n;for(_ in e)if(_!=="autoRound"&&(h=e[_],!(ln[_]&&Vu(_,e,n,i,t,r)))){if(d=typeof h,g=Gc[_],d==="function"&&(h=h.call(n,i,t,r),d=typeof h),d==="string"&&~h.indexOf("random(")&&(h=Tr(h)),g)g(this,t,_,h,n)&&(A=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(_)+"").trim(),h+="",Mi.lastIndex=0,Mi.test(c)||(p=We(c),m=We(h),m?p!==m&&(c=ts(t,_,c,m)+m):p&&(h+=p)),this.add(o,"setProperty",c,h,i,r,0,0,_),a.push(_),x.push(_,0,o[_]);else if(d!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,t,r):l[_],Ue(c)&&~c.indexOf("random(")&&(c=Tr(c)),We(c+"")||c==="auto"||(c+=un.units[_]||We(bi(t,_))||""),(c+"").charAt(1)==="="&&(c=bi(t,_))):c=bi(t,_),u=parseFloat(c),E=d==="string"&&h.charAt(1)==="="&&h.substr(0,2),E&&(h=h.substr(2)),f=parseFloat(h),_ in ri&&(_==="autoAlpha"&&(u===1&&bi(t,"visibility")==="hidden"&&f&&(u=0),x.push("visibility",0,o.visibility),Qi(this,o,"visibility",u?"inherit":"hidden",f?"inherit":"hidden",!f)),_!=="scale"&&_!=="transform"&&(_=ri[_],~_.indexOf(",")&&(_=_.split(",")[0]))),T=_ in Ti,T){if(this.styles.save(_),b=h,d==="string"&&h.substring(0,6)==="var(--"){if(h=Sn(t,h.substring(4,h.indexOf(")"))),h.substring(0,5)==="calc("){var R=t.style.perspective;t.style.perspective=h,h=Sn(t,"perspective"),R?t.style.perspective=R:ji(t,"perspective")}f=parseFloat(h)}if(y||(M=t._gsap,M.renderTransform&&!e.parseTransform||ro(t,e.parseTransform),w=e.smoothOrigin!==!1&&M.smooth,y=this._pt=new an(this._pt,o,Me,0,1,M.renderTransform,M,0,-1),y.dep=1),_==="scale")this._pt=new an(this._pt,M,"scaleY",M.scaleY,(E?bs(M.scaleY,E+f):f)-M.scaleY||0,Zu),this._pt.u=0,a.push("scaleY",_),_+="X";else if(_==="transformOrigin"){x.push(fn,0,o[fn]),h=xM(h),M.svg?Ku(t,h,0,w,0,this):(m=parseFloat(h.split(" ")[2])||0,m!==M.zOrigin&&Qi(this,M,"zOrigin",M.zOrigin,m),Qi(this,o,_,Hc(c),Hc(h)));continue}else if(_==="svgOrigin"){Ku(t,h,1,w,0,this);continue}else if(_ in p0){SM(this,M,_,u,E?bs(u,E+h):h);continue}else if(_==="smoothOrigin"){Qi(this,M,"smooth",M.smooth,h);continue}else if(_==="force3D"){M[_]=h;continue}else if(_==="transform"){bM(this,h,t);continue}}else _ in o||(_=Cr(_)||_);if(T||(f||f===0)&&(u||u===0)&&!iM.test(h)&&_ in o)p=(c+"").substr((u+"").length),f||(f=0),m=We(h)||(_ in un.units?un.units[_]:p),p!==m&&(u=ts(t,_,c,m)),this._pt=new an(this._pt,T?M:o,_,u,(E?bs(u,E+f):f)-u,!T&&(m==="px"||_==="zIndex")&&e.autoRound!==!1?oM:Zu),this._pt.u=m||0,T&&b!==h?(this._pt.b=c,this._pt.e=b,this._pt.r=aM):p!==m&&m!=="%"&&(this._pt.b=c,this._pt.r=rM);else if(_ in o)_M.call(this,t,_,c,E?E+h:h);else if(_ in t)this.add(t,_,c||t[_],E?E+h:h,i,r);else if(_!=="parseTransform"){Oc(_,h);continue}T||(_ in o?x.push(_,0,o[_]):typeof t[_]=="function"?x.push(_,2,t[_]()):x.push(_,1,c||t[_])),a.push(_)}}A&&qu(this)},render:function(t,e){if(e.tween._time||!ju())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:bi,aliases:ri,getSetter:function(t,e,n){var i=ri[e];return i&&i.indexOf(",")<0&&(e=i),e in Ti&&e!==fn&&(t._gsap.x||bi(t,"x"))?n&&Qp===n?e==="scale"?uM:hM:(Qp=n||{})&&(e==="scale"?fM:dM):t.style&&!Fc(t.style[e])?lM:~e.indexOf("-")?cM:Vc(t,e)},core:{_removeProperty:ji,_getMatrix:ef}};Qe.utils.checkPrefix=Cr;Qe.core.getStyleSaver=h0;(function(s,t,e,n){var i=rn(s+","+t+","+e,function(r){Ti[r]=1});rn(t,function(r){un.units[r]="deg",p0[r]=1}),ri[i[13]]=s+","+t,rn(n,function(r){var a=r.split(":");ri[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");rn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(s){un.units[s]="px"});Qe.registerPlugin(nf);var Vn=Qe.registerPlugin(nf)||Qe,x3=Vn.core.Tween;var _0={W:7.2,H:4.5,impact:[.8496,.5309999999999999],count:200,cells:[{c:[-3.3044,-1.9699],a:.334,p:[[-.2956,-.2801],[.3534,-.2801],[.2377,.3284],[-.2956,.2318]]},{c:[-3.2726,-1.427],a:.3169,p:[[-.3274,-.3111],[.2059,-.2145],[.2612,-.112],[.1875,.2099],[-.3274,.4277]]},{c:[-3.2036,-.8288],a:.3377,p:[[.2378,.3378],[.1707,.3861],[-.3964,.0492],[-.3964,-.1705],[.1185,-.3883],[.2658,-.2141]]},{c:[-3.3393,-.2611],a:.3144,p:[[-.2607,-.5185],[.3064,-.1816],[.2115,.1107],[.0035,.2875],[-.2607,.3017]]},{c:[-3.3749,.3678],a:.3156,p:[[-.2251,-.3272],[.0391,-.3414],[.411,.2626],[-.2251,.406]]},{c:[-3.1981,.9263],a:.3316,p:[[.2611,.1297],[.0528,.2997],[-.4019,.3056],[-.4019,-.1525],[.2342,-.2959],[.2555,-.2865]]},{c:[-3.3381,1.4526],a:.2307,p:[[-.2619,-.2207],[.1928,-.2266],[.3309,.2772],[-.2619,.17]]},{c:[-3.2542,1.9231],a:.3287,p:[[-.3458,-.3006],[.247,-.1933],[.2835,-.16],[.161,.3269],[-.3458,.3269]]},{c:[-2.7189,-1.8017],a:.408,p:[[.3025,.2471],[-.2925,.2627],[-.3478,.1602],[-.2321,-.4483],[.2416,-.4483],[.328,.2266]]},{c:[-2.7767,-1.2684],a:.3218,p:[[.3441,.2802],[-.1611,.2255],[-.3084,.0513],[-.2347,-.2706],[.3603,-.2862]]},{c:[-2.5904,-.7586],a:.3065,p:[[.1026,.2865],[-.3754,.2676],[-.3474,-.2843],[.1578,-.2296],[.2004,-.1802],[.2622,.1403]]},{c:[-2.7776,-.2566],a:.2918,p:[[.2898,-.2155],[.3163,.1475],[.1877,.3825],[-.3502,.1062],[-.2553,-.1861],[-.1882,-.2344]]},{c:[-2.8653,.3159],a:.3645,p:[[.3086,.1644],[-.0773,.3239],[-.0986,.3145],[-.4705,-.2895],[-.2625,-.4663],[.2754,-.19],[.325,.143]]},{c:[-2.6499,.9194],a:.3564,p:[[.364,.1729],[.1228,.4092],[-.2871,.1366],[-.2927,-.2796],[.0932,-.4391]]},{c:[-2.8536,1.4535],a:.2898,p:[[.3265,-.1249],[.3194,.1642],[-.1171,.3096],[-.1536,.2763],[-.2917,-.2275],[-.0834,-.3975]]},{c:[-2.7287,1.9159],a:.2839,p:[[.2822,-.2172],[.1296,.3341],[-.3645,.3341],[-.242,-.1528],[.1945,-.2982]]},{c:[-2.1388,-1.8554],a:.3353,p:[[.1959,.2849],[-.2521,.2803],[-.3385,-.3946],[.1361,-.3946],[.2585,.2239]]},{c:[-2.2428,-1.3019],a:.2681,p:[[.3587,.1178],[-.1472,.3631],[-.1898,.3137],[-.1736,-.2527],[-.1481,-.2732],[.2999,-.2686]]},{c:[-2.0043,-.8279],a:.307,p:[[.2689,.1961],[.0964,.3109],[-.3239,.2096],[-.3857,-.1109],[.1202,-.3562],[.2242,-.2492]]},{c:[-2.179,-.3185],a:.2816,p:[[.2881,.1519],[.1811,.2906],[-.2823,.2094],[-.3088,-.1536],[-.1492,-.2998],[.2711,-.1985]]},{c:[-2.294,.1818],a:.2596,p:[[.279,.0462],[.1341,.233],[-.2462,.2771],[-.2959,-.0559],[-.1673,-.2909],[.2961,-.2097]]},{c:[-2.25,.7052],a:.2844,p:[[.3585,-.0048],[.1841,.3791],[-.0359,.3871],[-.3067,-.2249],[-.2903,-.2463],[.0901,-.2904]]},{c:[-2.2387,1.4395],a:.3314,p:[[.2591,-.281],[.2649,.275],[.1423,.3819],[-.2078,.2592],[-.2955,.1782],[-.2884,-.1109],[-.0472,-.3472],[.1728,-.3552]]},{c:[-2.2825,2.005],a:.2368,p:[[-.3166,.245],[-.164,-.3063],[.1861,-.1836],[.2945,.245]]},{c:[-1.6652,-1.9578],a:.3242,p:[[.2982,-.2922],[.2543,.2581],[-.2151,.3263],[-.3375,-.2922]]},{c:[-1.5885,-1.4117],a:.3221,p:[[.3548,.1587],[.3496,.1701],[-.1916,.3346],[-.2956,.2276],[-.3544,-.1588],[-.2918,-.2198],[.1776,-.288],[.2517,-.2243]]},{c:[-1.4824,-.9266],a:.245,p:[[.2565,-.1616],[.0506,.3322],[-.253,.2948],[-.2977,-.1505],[.2435,-.315]]},{c:[-1.5554,-.3551],a:.3398,p:[[.3188,.1996],[.1873,.4322],[-.3355,.1885],[-.3525,-.1619],[-.18,-.2767],[.1236,-.2393],[.2385,-.1421]]},{c:[-1.7267,.0918],a:.219,p:[[-.1642,-.2584],[.3586,-.0147],[.3651,.2567],[-.2883,.1362],[-.2712,-.1197]]},{c:[-1.7351,.9842],a:.2414,p:[[.2683,-.064],[.1898,.1925],[.0683,.2115],[-.2445,.1743],[-.3308,.1001],[-.1564,-.2838],[.2056,-.3307]]},{c:[-1.5645,1.4268],a:.1622,p:[[.1787,-.059],[.1498,.2844],[-.2455,.256],[-.1023,-.2311],[.0192,-.2501]]},{c:[-1.6991,1.8918],a:.3963,p:[[.3589,-.079],[.4284,.3582],[-.2889,.3582],[-.3973,-.0704],[-.2747,-.1773],[-.1109,-.209],[.2844,-.1806]]},{c:[-1.1576,-1.9147],a:.306,p:[[-.1792,.2787],[-.2533,.215],[-.2094,-.3353],[.4552,-.3353],[.1868,.1771]]},{c:[-1.0212,-1.493],a:.2153,p:[[.2671,-.0834],[.2104,.2312],[-.2125,.24],[-.3156,-.143],[.0504,-.2446]]},{c:[-1.0008,-1.1229],a:.1809,p:[[.3966,.0221],[.1098,.3311],[-.2251,.0347],[-.2381,-.1187],[-.2329,-.1301],[.19,-.1389]]},{c:[-1.0288,-.3904],a:.1975,p:[[.3212,-.1054],[.0494,.2408],[-.2078,.2349],[-.2881,-.1068],[.1252,-.2637]]},{c:[-1.1423,.1787],a:.2897,p:[[.4933,-.0923],[.1247,.2334],[-.0332,.2539],[-.2081,.199],[-.2193,.1698],[-.2258,-.1016],[-.0943,-.3342],[.1629,-.3283]]},{c:[-1.2949,.6789],a:.2218,p:[[.1194,-.2463],[.3426,.3318],[-.1719,.2413],[-.2346,-.0254],[-.0555,-.3012]]},{c:[-1.1217,1.494],a:.2268,p:[[.2776,-.1804],[.297,.0499],[-.2185,.3188],[-.293,.2172],[-.2641,-.1262],[.2008,-.2791]]},{c:[-1.0222,1.9217],a:.2916,p:[[-.2485,.3283],[-.318,-.1089],[.1975,-.3778],[.3767,-.1699],[-.0077,.3283]]},{c:[-.6718,-1.9087],a:.2387,p:[[-.0823,.3323],[-.299,.1711],[-.0306,-.3413],[.1158,-.3413],[.2959,.1793]]},{c:[-.5448,-1.3999],a:.2243,p:[[-.0594,.2991],[-.266,.1381],[-.2093,-.1765],[.1689,-.3295],[.2657,-.2452],[.1001,.314]]},{c:[-.6021,-.7899],a:.2822,p:[[.283,-.1674],[.2578,.3464],[-.1055,.2941],[-.3015,.1358],[-.2889,-.0019],[-.0021,-.3109],[.1574,-.296]]},{c:[-.5536,-.1914],a:.2635,p:[[.1787,.1825],[.0517,.2681],[-.0954,.2778],[-.4258,.0418],[-.154,-.3044],[.2093,-.2521],[.2354,-.2136]]},{c:[-.6624,.3645],a:.1824,p:[[.1605,-.2878],[.1529,.2197],[.0286,.2984],[-.3552,.0476],[.0134,-.2781]]},{c:[-.3778,.8708],a:.183,p:[[.155,-.2056],[.2215,.1913],[.171,.2549],[.1489,.2718],[-.309,-.0179],[-.256,-.2079],[-.1317,-.2866]]},{c:[-.5051,1.5526],a:.2528,p:[[.2464,-.0597],[.1804,.1967],[.1413,.2368],[-.1404,.1992],[-.3196,-.0087],[-.339,-.239],[.2309,-.3251]]},{c:[-.552,2.0105],a:.2362,p:[[.1882,-.2211],[.2291,6e-4],[.1542,.2395],[-.4779,.2395],[-.0935,-.2587]]},{c:[.1581,-1.8747],a:.2528,p:[[-.0071,.3538],[-.4077,.2295],[.0587,-.3753],[.0822,-.3753],[.2739,.1673]]},{c:[-.1252,-1.2902],a:.3052,p:[[-.1939,.3329],[-.3195,.2043],[-.1539,-.3549],[-.1244,-.355],[.2762,-.2307],[.278,.166],[.2376,.2371]]},{c:[-.0691,-.6611],a:.2942,p:[[.3518,-.0914],[.2405,.0626],[7e-4,.243],[-.2491,.2561],[-.2752,.2176],[-.25,-.2962],[.1815,-.392]]},{c:[-.1144,-.1326],a:.2409,p:[[.3278,-.0756],[.1887,.2778],[-.098,.2322],[-.2605,.1237],[-.2038,-.2724],[.046,-.2855]]},{c:[-.0026,.354],a:.128,p:[[.1378,-.1606],[.0797,.182],[.0648,.2015],[-.1493,.2405],[-.2098,-.2544],[.0769,-.2088]]},{c:[-.0173,.7941],a:.1667,p:[[.0795,-.2386],[.2841,.0797],[.1154,.2194],[-.139,.268],[-.2055,-.1289],[-.1346,-.1996]]},{c:[.213,1.4624],a:.0455,p:[[-.1934,-.1561],[.0526,-.1331],[.1117,.1132],[.0946,.126],[-.0654,.0502]]},{c:[.1884,1.8623],a:.0953,p:[[-.2583,-.092],[.1044,-.2451],[.1083,.0919],[.0457,.2452]]},{c:[.6225,-1.899],a:.3152,p:[[.4178,-.351],[.0961,.2504],[.0588,.26],[-.1905,.1916],[-.3822,-.351]]},{c:[.4067,-1.4285],a:.2505,p:[[.2098,.2777],[-.2539,.3043],[-.2557,-.0924],[.0253,-.2789],[.2746,-.2105]]},{c:[.3743,-.9633],a:.1658,p:[[-.0916,.2108],[-.2619,-.0898],[-.2215,-.1609],[.2422,-.1875],[.371,.0065],[-.0379,.2207]]},{c:[.6659,-.4187],a:.109,p:[[-.1829,.1716],[-.1717,-.1436],[.1835,-.2096],[.2054,-.141],[.073,.1465],[-.1074,.1762]]},{c:[.6213,.4244],a:.007,p:[[-.0202,-.0557],[.0484,.0087],[.0525,.0389],[-.0505,.0596],[-.0301,-.0517]]},{c:[.7176,.8589],a:.0159,p:[[.0014,-.0891],[.0701,-.1013],[.079,-.0808],[-.0131,.1044],[-.0418,.1174],[-.081,.119],[-.0145,-.0699]]},{c:[.4264,1.3625],a:.1339,p:[[.1153,-.227],[.3058,.1579],[-.1017,.2131],[-.1608,-.0332],[-.1587,-.1107]]},{c:[.4498,2.1004],a:.204,p:[[-.1531,-.1462],[.3872,-.2477],[.4028,.1496],[-.1992,.1496],[-.2221,.0878],[-.2157,.0071]]},{c:[1.1429,-1.8603],a:.407,p:[[.3248,-.3897],[.3222,.2109],[-.1202,.357],[-.4243,.2117],[-.1026,-.3897]]},{c:[1.328,-1.3649],a:.2085,p:[[-.2594,.157],[-.3053,-.1384],[.1371,-.2845],[.1871,-.2285],[.1681,.1781],[.0721,.3164]]},{c:[1.1576,-.9434],a:.1741,p:[[.2332,.1365],[-.286,.1388],[-.3557,.0124],[-.089,-.2645],[.2425,-.1051],[.2549,.0821]]},{c:[1.1295,-.0629],a:.0271,p:[[-.1681,-.1176],[-.108,-.1576],[.1527,.0916],[.1123,.099],[.0109,.0847]]},{c:[1.1984,.455],a:.013,p:[[-.0744,-.0865],[.0692,-.0334],[.0535,.0952],[.0325,.0955],[-.0807,-.0706]]},{c:[1.154,.6649],a:.0063,p:[[-.0187,-.0644],[-.0177,-.0658],[.0706,.0803],[-.0341,.0498]]},{c:[1.3276,1.4628],a:.0313,p:[[-.1598,-.042],[-.0218,-.1957],[.0921,.1153],[.0895,.1223]]},{c:[1.1387,1.9454],a:.3092,p:[[-.27,-.2491],[.2418,-.1848],[.3317,-.0827],[.2845,.3046],[-.2861,.3046],[-.3017,-.0927]]},{c:[1.6442,-1.8483],a:.2728,p:[[-.1791,.1989],[-.1765,-.4017],[-.1311,-.4017],[.4841,.048],[.1318,.3015],[-.1291,.2549]]},{c:[1.7652,-1.3292],a:.1578,p:[[.106,.1958],[-.2691,.1424],[-.2501,-.2642],[.0108,-.2176],[.1989,.0443],[.2037,.0991]]},{c:[1.6058,-1.0247],a:.1251,p:[[-.2057,-.0238],[-.1097,-.1621],[.2654,-.1087],[.2433,.1312],[-.1933,.1634]]},{c:[1.7815,-.4677],a:.0785,p:[[-.1296,.134],[-.2266,-.0965],[.1733,-.1182],[.183,.0807]]},{c:[1.9238,.3069],a:.1108,p:[[4e-4,.145],[-.3178,-.3305],[-.1301,-.3675],[.0314,-.1291],[.2147,.248],[.1382,.2431],[.0633,.1908]]},{c:[1.9181,.7909],a:.2413,p:[[-.352,-.0493],[.1439,-.2409],[.2204,-.236],[.2244,-.2349],[.2686,-.1937],[.1476,.3338],[.1346,.3392],[-.3956,.151],[-.392,.131]]},{c:[1.5764,1.6157],a:.1642,p:[[-.1566,-.0376],[.0959,-.2475],[.2179,-.2231],[.3037,.1466],[-.106,.247],[-.1959,.1449],[-.1593,-.0306]]},{c:[1.7718,1.9986],a:.2607,p:[[.1083,-.2363],[.301,-.1308],[.2407,.2514],[-.3486,.2514],[-.3014,-.1359]]},{c:[2.0968,-2.0252],a:.2483,p:[[.3467,-.2248],[.2055,.2248],[.0315,.2249],[-.5837,-.2248]]},{c:[2.3116,-1.3163],a:.2027,p:[[-.3475,.0314],[.0698,-.3463],[.2557,-.1798],[.2173,.0604],[.1705,.106],[-.0231,.2423],[-.3427,.0862]]},{c:[2.0362,-.9587],a:.1682,p:[[-.0196,.2789],[-.1871,.0652],[-.165,-.1747],[-.0673,-.2714],[.2523,-.1153],[.1869,.2174]]},{c:[2.1719,-.4009],a:.2618,p:[[-.1553,-.2789],[.0512,-.3404],[.3262,-.1639],[.2743,.2297],[.1232,.2944],[-.0399,.2389],[-.1554,.1916],[-.2074,.0139],[-.2171,-.185]]},{c:[2.1327,.204],a:.1242,p:[[-.1775,-.0262],[-7e-4,-.366],[.1624,-.3105],[.0098,.352],[.0058,.3509]]},{c:[2.3522,.9641],a:.3378,p:[[-.1655,-.3669],[-.0987,-.3631],[.4401,.076],[.1107,.4932],[-.2865,.1606]]},{c:[2.2244,1.4074],a:.1662,p:[[-.1717,-.2773],[-.1587,-.2827],[.2385,.0499],[.2555,.2683],[.2534,.2693],[-.4172,-.0274]]},{c:[2.3677,1.9096],a:.2609,p:[[-.3552,.3404],[-.2949,-.0418],[.1101,-.2329],[.1122,-.2339],[.1949,-.1724],[.233,.3404]]},{c:[2.6116,-1.8427],a:.427,p:[[-.3093,.0423],[-.1681,-.4073],[.4255,-.4073],[.3263,.2454],[-.0443,.3466],[-.2302,.1801]]},{c:[2.8577,-1.3441],a:.2801,p:[[.0453,.4267],[-.3288,.0882],[-.2904,-.152],[.0802,-.2532],[.1397,-.213],[.3541,.1035]]},{c:[2.684,-.9396],a:.1538,p:[[-.074,.3224],[-.2019,-.2707],[-.1551,-.3163],[.219,.0222],[.2121,.2425]]},{c:[2.7123,-.4377],a:.2369,p:[[-.1023,-.1795],[.1838,-.2594],[.2968,-.1653],[.3088,.1654],[-.207,.2992],[-.2661,.2665],[-.2142,-.1271]]},{c:[2.8533,.2908],a:.1663,p:[[-.1734,-.1801],[.3368,-.2018],[.2851,.1164],[-.1993,.1411],[-.2492,.1242]]},{c:[2.6916,.7213],a:.21,p:[[-.4381,-.1203],[-.0875,-.3063],[-.0376,-.2894],[.2438,.1057],[.2188,.2915],[.1007,.3188]]},{c:[2.7899,1.4275],a:.3532,p:[[-.327,.0298],[.0024,-.3874],[.1205,-.4147],[.2476,-.3571],[.3086,.2343],[.1853,.3374],[-.2273,.3097],[-.31,.2482]]},{c:[2.8266,2.0005],a:.2428,p:[[-.2259,.2495],[-.264,-.2633],[.1486,-.2356],[.3412,.2495]]},{c:[3.2345,-1.8881],a:.3563,p:[[.3655,-.3619],[.3655,.1022],[-.2371,.331],[-.2966,.2908],[-.1974,-.3619]]},{c:[3.3523,-1.4345],a:.2424,p:[[.2477,.28],[-.1405,.1939],[-.3549,-.1226],[.2477,-.3514]]},{c:[3.2033,-.8826],a:.3502,p:[[-.3003,-.0348],[.0085,-.358],[.3967,-.2719],[.3967,.1994],[-.1942,.2796],[-.3072,.1855]]},{c:[3.2911,-.3135],a:.3494,p:[[-.27,.0412],[-.282,-.2895],[.3089,-.3697],[.3089,.2647],[-.0658,.3534]]},{c:[3.3157,.2776],a:.2582,p:[[.2843,.4868],[-.1754,.1362],[-.1773,.1296],[-.1256,-.1886],[-.0904,-.2377],[.2843,-.3264]]},{c:[3.2589,.874],a:.2981,p:[[-.3235,-.047],[-.1186,-.4602],[.3411,-.1096],[.3411,.1387],[.3301,.1426],[-.2214,.1964],[-.3485,.1388]]},{c:[3.5072,1.3648],a:.1412,p:[[.0928,.4162],[-.2675,.2842],[.0818,-.3482],[.0928,-.3521]]},{c:[3.2802,1.8928],a:.2962,p:[[.3198,.3572],[-.1124,.3572],[-.305,-.1279],[-.1817,-.231],[-.0405,-.2438],[.3198,-.1118]]},{c:[.653,.5689],a:.0128,p:[[-.0895,-.0465],[.0649,-.0511],[.06,.0243],[-.0354,.0732]]},{c:[.4284,.6602],a:.049,p:[[.0056,-.1841],[.1297,.0295],[.0628,.1089],[-.0367,.2045],[-.0624,.1983],[-.0688,-.1543],[-.0303,-.2031]]},{c:[1.3992,.737],a:.0574,p:[[-.1731,.0241],[-.1705,.0107],[-.0133,-.1164],[.0632,-.1082],[.1669,.0046],[.1269,.1849]]},{c:[.8887,.2165],a:.0251,p:[[-.065,-.1097],[.0453,-.0953],[.0859,-3e-4],[.0315,.0737],[-.0057,.0963],[-.0921,.035]]},{c:[.8747,.0025],a:.0376,p:[[-.095,.067],[-.0341,-.1788],[.0044,-.1718],[.1167,.0604],[.0593,.1187],[-.051,.1043]]},{c:[1.2254,.3375],a:.0212,p:[[-.0981,-7e-4],[.1573,-.1145],[.0422,.0841],[-.1014,.031]]},{c:[.5259,-.1014],a:.0643,p:[[-.053,-.1404],[-.0429,-.1457],[.0326,-.1411],[.1726,.1813],[.0542,.2565],[-.0871,.1094],[-.0761,-.1202]]},{c:[1.7118,.5741],a:.1016,p:[[-.2302,-.1218],[.2753,-.0764],[.3502,-.0241],[-.1457,.1675],[-.2494,.0547]]},{c:[.9322,.9136],a:.018,p:[[-.0449,-.0558],[.0284,-.0504],[.066,-.0336],[.0713,.0456],[.0053,.1253],[-.0798,.0237],[-.0465,-.0551]]},{c:[1.0326,1.0274],a:.022,p:[[-.0291,-.0682],[.1072,-.0586],[.1059,.0462],[-.0891,.0691],[-.0951,.0115]]},{c:[.8747,.6868],a:.0113,p:[[.0019,-.0561],[.0982,.0476],[.0483,.0842],[-.0629,.0018],[-.0595,-.0309],[-.0262,-.0468]]},{c:[.8628,.5681],a:.0055,p:[[-.0339,-.0289],[.002,-.0763],[.0026,-.0763],[.0299,.0467],[.0138,.0626],[-.0143,.0719]]},{c:[.7317,.442],a:.0125,p:[[-.0412,-.0346],[.0165,-.0807],[.0679,-.0433],[.0491,.0322],[.0418,.0387],[-.0138,.0755],[-.0579,.0213],[-.062,-.0089]]},{c:[1.0733,.6939],a:.0125,p:[[-.06,.0411],[-.0464,-.0429],[.062,-.0934],[.0466,.0208],[-.0024,.0743]]},{c:[.8521,.4444],a:.0115,p:[[-.0713,.0298],[-.0525,-.0457],[.0203,-.0754],[.0776,-.0038],[.0133,.0474],[.0127,.0474]]},{c:[.048,1.1815],a:.0908,p:[[.0501,-.168],[.2197,.0703],[.2176,.1478],[-.0284,.1248],[-.2548,-.0558],[-.2043,-.1194]]},{c:[-1.1992,1.1211],a:.1918,p:[[.2753,-.0851],[.2783,.0938],[-.1866,.2467],[-.3461,.0556],[-.2676,-.2009],[.2469,-.1104]]},{c:[1.0575,.1176],a:.0381,p:[[-.0661,-.0547],[.0829,-.0958],[.1843,-.0815],[.0051,.13],[-.0829,.0986],[-.1235,.0036]]},{c:[1.7208,.4265],a:.0429,p:[[-.2392,.0258],[-.2304,-.1223],[.2034,.0254],[.2663,.0712]]},{c:[-.6465,1.1312],a:.1974,p:[[-.0403,-.2783],[.4176,.0114],[.3723,.0963],[-.1976,.1824],[-.2744,.0837],[-.2774,-.0952]]},{c:[.2263,.6659],a:.0725,p:[[-.1492,-.1299],[.1333,-.16],[.1397,.1926],[.0405,.2079],[-.1641,-.1104]]},{c:[1.0678,.3721],a:.0144,p:[[-.077,-.0182],[.0095,-.0922],[.0595,-.0353],[.0562,-.0036],[.0499,.0123],[-.0259,.0725],[-.0724,.0648]]},{c:[.0158,1.6218],a:.1208,p:[[-.2745,-.1289],[.1318,-.1092],[.2918,-.0334],[.277,-.0046],[-.0857,.1485],[-.3405,.1275]]},{c:[.931,-.2815],a:.1016,p:[[-.1921,.0093],[-.0597,-.2782],[.2731,-.1103],[.0905,.061],[.0304,.101],[-.0519,.1122],[-.0904,.1052]]},{c:[.5542,.5818],a:.0172,p:[[-.1202,-.1057],[-.0046,-.0829],[.0093,-.0594],[.0635,.0603],[.0479,.08],[.004,.1079]]},{c:[1.2429,-.1926],a:.0915,p:[[.0393,.2213],[-.2214,-.0279],[-.0388,-.1992],[.0294,-.1996],[.1913,.2056]]},{c:[2.0064,1.6159],a:.1601,p:[[-.2121,-.2233],[-.1992,-.2359],[.4714,.0608],[.0664,.2519],[-.1263,.1464]]},{c:[.5335,.3135],a:.0323,p:[[-.1485,.0253],[.0461,-.1529],[.1117,-.052],[.0676,.0552],[.0577,.0592],[-.1348,.065]]},{c:[-.8983,.7345],a:.1813,p:[[.2645,-.0716],[.2115,.1184],[-.0256,.3015],[-.054,.2762],[-.2772,-.3019],[-.1193,-.3224]]},{c:[2.4204,-.8415],a:.1516,p:[[-.1319,-.2325],[.0617,-.3688],[.1896,.2243],[.0777,.2767],[-.1973,.1002]]},{c:[.9352,.3788],a:.0129,p:[[-.0522,-.066],[-.015,-.0886],[.0556,-.0249],[.0602,.0581],[.0199,.0696],[-.0055,.0618],[-.0628,-.0098]]},{c:[1.6581,-.7151],a:.1626,p:[[-.2673,-.0918],[-.2456,-.1462],[.191,-.1784],[.3585,.0353],[.2967,.1292],[-.1032,.1509],[-.23,.1009]]},{c:[1.0994,.9023],a:.0178,p:[[-.0063,-.0711],[.0815,-.0153],[.0817,-.0149],[.0404,.0665],[-.0959,.0569],[-.1012,-.0223]]},{c:[-.3289,.3352],a:.1886,p:[[.1165,-.2356],[.177,.2593],[.1061,.33],[-.1806,.249],[-.173,-.2585],[-.046,-.3441]]},{c:[2.1104,-1.619],a:.1585,p:[[-.1463,.3341],[-.3344,.0722],[.0179,-.1813],[.1919,-.1814],[.271,-.0436]]},{c:[1.1635,.7793],a:.0166,p:[[-.0436,-.0646],[.0611,-.0341],[.0652,-.0316],[.0626,-.0182],[.0174,.1077],[-.0704,.0519],[-.0926,-.0111]]},{c:[.7238,.6813],a:.023,p:[[-.0108,-.0881],[.0914,-.0254],[.088,.0073],[.0639,.0763],[-.0048,.0885],[-.1217,-.0195],[-.1062,-.0392]]},{c:[.6831,-.7709],a:.131,p:[[-.1889,.2086],[-.3467,.0283],[.0622,-.1859],[.1188,-.1601],[.1885,-.0337],[.1663,.1426]]},{c:[.9488,.7928],a:.0081,p:[[.0241,-.0584],[.0516,-.0554],[.0118,.0704],[-.0615,.065],[-.0258,-.0218]]},{c:[.434,.172],a:.0644,p:[[-.2473,.0257],[.0048,-.164],[.1461,-.0169],[.1456,-.0114],[-.049,.1668]]},{c:[.4904,.4446],a:.0197,p:[[-.0917,-.066],[.1008,-.0719],[.0804,.0394],[.0592,.0544],[-.0564,.0316],[-.0923,.0126]]},{c:[1.1268,-.5997],a:.1843,p:[[-.2774,-.0286],[-.2552,-.2049],[.264,-.2072],[.3013,-.0145],[.1455,.2075],[.0773,.2079],[-.2555,.04]]},{c:[1.7729,-.173],a:.0986,p:[[-.121,-.1607],[.1916,-.214],[.2436,-.0363],[.0208,.1124],[-.1669,.1494],[-.1682,.1493]]},{c:[1.0203,1.1723],a:.0516,p:[[-.0768,-.0758],[.1182,-.0987],[.2196,.0134],[-.1403,.1548],[-.1209,.0061]]},{c:[1.0594,.5924],a:.0119,p:[[-.109,-.004],[-.1088,-.0043],[.0149,-.0595],[.0827,-.0056],[.0769,.0067],[.0759,.0081],[-.0325,.0586]]},{c:[1.1214,.4998],a:.02,p:[[-.0471,.0331],[-.0795,-.0552],[-.0037,-.1154],[.1095,.0507],[.0207,.087]]},{c:[.6147,.7359],a:.0153,p:[[-.1235,.0332],[-.0566,-.0462],[-.0126,-.0741],[.1043,.0339],[.0884,.0531]]},{c:[1.0051,.2776],a:.0121,p:[[-.0305,-.0614],[.0575,-.03],[.0722,.0023],[-.0143,.0763],[-.0849,.0126]]},{c:[-.1336,1.3013],a:.0972,p:[[-.0732,-.1756],[.1532,.005],[.2812,.2113],[-.1251,.1916],[-.1406,-.0738],[-.0953,-.1587]]},{c:[.8487,.7853],a:.0116,p:[[-.0369,-.0967],[.0743,-.0143],[.0386,.0725],[.037,.0732],[-.0521,-.0072],[-.061,-.0277]]},{c:[2.3892,.233],a:.2618,p:[[-.0941,-.3395],[.057,-.4042],[.1161,-.3715],[.2907,-.1223],[.2149,.182],[-.1357,.368],[-.2025,.3642],[-.2467,.323]]},{c:[1.4839,-.271],a:.1571,p:[[-.2116,-.1212],[-.0558,-.3432],[.071,-.2932],[.168,-.0627],[.1208,.2473],[-.0428,.2887],[-.0497,.284]]},{c:[.9619,.6702],a:.0127,p:[[-.0853,-.0395],[-.0692,-.0554],[-.0115,-.0818],[.065,-.0192],[.0514,.0648],[.0385,.0672],[.011,.0642]]},{c:[-.2488,-1.9039],a:.2602,p:[[-.0303,.2588],[-.1271,.1745],[-.3072,-.3461],[.4656,-.3461],[-8e-4,.2587]]},{c:[1.0035,.4902],a:.0128,p:[[-.0081,-.0533],[.0384,-.0456],[.0708,.0427],[-.0529,.0979],[-.0484,-.0418]]},{c:[1.2758,.1515],a:.0717,p:[[.0064,-.1228],[.1584,-.1385],[.1653,-.1338],[.1569,.0288],[.1069,.0715],[-.1485,.1853],[-.1985,.1284],[-.2132,.0961],[-.034,-.1154]]},{c:[.6985,.1818],a:.0359,p:[[0,-.1019],[.0812,-.1123],[.1252,-.075],[.0981,.0697],[.0298,.1042],[-.0441,.0833],[-.0533,.0797],[-.1189,-.0212],[-.1184,-.0267]]},{c:[1.6863,1.1871],a:.1479,p:[[-.1638,-.2452],[.3664,-.057],[.1209,.1929],[.108,.2055],[-.014,.1811],[-.2327,-.0577],[-.1846,-.2197]]},{c:[1.3944,.4226],a:.0712,p:[[-.1425,.1276],[-.1268,-.001],[-.0117,-.1996],[.0383,-.2423],[.096,-.1184],[.0872,.0297],[.068,.2062],[-.0085,.198]]},{c:[1.0228,.8025],a:.0116,p:[[-.0094,-.0675],[.0481,-.0343],[.0703,.0287],[-.0246,.0775],[-.0622,.0607],[-.0224,-.0651]]},{c:[1.0732,1.3659],a:.1051,p:[[-.1932,-.0388],[.1667,-.1802],[.2428,-.1554],[.2326,-.0988],[.0947,.0549],[-.2398,.25],[-.3039,.1683]]},{c:[-1.718,.4538],a:.2481,p:[[.3676,-.0761],[.1885,.1997],[-.1735,.2466],[-.4419,-.039],[-.297,-.2258],[.3564,-.1053]]},{c:[1.1335,1.6157],a:.1219,p:[[.0344,-.1949],[.2836,-.0306],[.247,.1449],[-.2648,.0806],[-.3001,2e-4]]},{c:[.9931,-.0663],a:.0289,p:[[-.114,-.103],[-.0317,-.1142],[.1473,.0881],[-.0017,.1292]]},{c:[1.9743,-.0635],a:.0624,p:[[-.0191,.2413],[-.1806,.0029],[.0422,-.1458],[.1577,-.0985]]},{c:[.5847,1.6617],a:.194,p:[[.1846,-.1275],[.2487,-.0458],[.284,.0346],[.2523,.191],[-.288,.2925],[-.2919,-.0445],[-.2771,-.0733],[-.26,-.0861],[.1475,-.1413]]},{c:[2.9243,-.0342],a:.1805,p:[[-.419,-.1043],[.0968,-.2381],[.301,.0741],[.2658,.1232],[-.2444,.1449]]},{c:[1.4335,1.3107],a:.0874,p:[[-.1175,-.1002],[.0201,-.1813],[.2388,.0575],[-.0137,.2674],[-.1277,-.0436]]},{c:[-1.8575,1.4379],a:.1245,p:[[.1907,-.2422],[.0475,.2449],[-.1163,.2766],[-.1221,-.2794]]},{c:[.5521,.8813],a:.047,p:[[-.0609,-.1122],[.151,-.0923],[.0845,.0966],[-.014,.1246],[-.1604,-.0166]]},{c:[.7736,.5635],a:.0151,p:[[-.0557,-.046],[-1e-4,-.0828],[.0553,-.0243],[.0749,.0765],[.0416,.0924],[-.0606,.0297],[-.0557,-.0457]]},{c:[1.3564,.8944],a:.031,p:[[-.1755,-.0074],[-.1303,-.1333],[.1697,.0275],[.1661,.0474],[.1453,.073],[-.1753,-.0071]]},{c:[-1.1538,-.7251],a:.1783,p:[[.2502,.071],[-.1631,.2279],[-.278,.1307],[-.0721,-.3631],[.2628,-.0667]]},{c:[.7053,.3299],a:.0075,p:[[-.0148,.0775],[-.0509,-.0648],[.023,-.0439],[.0429,.0314]]},{c:[.924,.5287],a:.011,p:[[.0057,-.0881],[.0311,-.0803],[.0266,.0594],[.0264,.0597],[-.0313,.0861],[-.0586,-.0369]]},{c:[.8098,.8843],a:.0173,p:[[-.1053,.079],[-.0132,-.1062],[.0759,-.0258],[.0426,.053]]},{c:[1.5832,.1511],a:.1095,p:[[-.1421,-.1334],[.0215,-.1748],[.0228,-.1747],[.341,.3008],[-.0928,.1531],[-.1505,.0292]]},{c:[3.2412,1.3495],a:.2071,p:[[-.2037,-.2791],[.3478,-.3329],[-.0015,.2995],[-.1427,.3123]]},{c:[2.967,.52],a:.1002,p:[[-.0316,.307],[-.313,-.0881],[.1714,-.1128],[.1733,-.1062]]},{c:[.7232,-.1083],a:.0607,p:[[-.0247,.1882],[-.1647,-.1342],[.0157,-.1639],[.1174,-.068],[.0565,.1778]]},{c:[.8078,-1.2911],a:.2188,p:[[-.0625,.3343],[-.1913,.1403],[-.1265,-.3479],[-.0892,-.3575],[.2149,-.2122],[.2608,.0832],[-.0059,.3601]]},{c:[.2478,-.3376],a:.1042,p:[[-.0344,.1294],[-.3162,-.0805],[-.0764,-.2609],[.2251,.0958],[.202,.116]]},{c:[.812,.4965],a:.0027,p:[[-.0385,-.0158],[-.0312,-.0223],[.0528,-.0047],[.0169,.0427]]},{c:[1.2286,.6286],a:.026,p:[[.0233,-.0784],[.1573,-.008],[1e-4,.1191],[-.004,.1166],[-.0923,-.0295],[-.0865,-.0418],[.0023,-.0781]]},{c:[-.1032,1.936],a:.1405,p:[[.0333,-.1657],[.3373,.1715],[.331,.2522],[-.2197,.0751],[-.2606,-.1466],[-.2214,-.1867]]},{c:[.6522,.3472],a:.0078,p:[[-.007,-.0857],[.0022,-.0821],[.0383,.0602],[.0175,.0859],[-.0511,.0215]]},{c:[.2772,.3725],a:.0766,p:[[-.0905,-.1748],[.1078,-.0337],[.1215,.006],[.1209,.0846],[.0824,.1334],[-.2001,.1635],[-.142,-.1791]]},{c:[.3529,1.0005],a:.1111,p:[[.0388,-.1358],[.1852,.0054],[.1888,.135],[-.0852,.2513],[-.2548,.013],[-.0861,-.1267],[.0131,-.142]]},{c:[.3734,-.5241],a:.0846,p:[[.0995,.2823],[-.202,-.0744],[-.0907,-.2284],[-.037,-.2185],[.1208,-.0382],[.1096,.277]]},{c:[-.0606,2.1748],a:.0924,p:[[-.3372,.0752],[-.2623,-.1637],[.2883,.0134],[.3112,.0752]]},{c:[.7091,1.207],a:.1193,p:[[-.0333,-.2307],[.1903,-.0286],[.1709,.1201],[.0602,.3272],[.0231,.3134],[-.1674,-.0715],[-.171,-.2011],[-.0725,-.2291]]},{c:[.6322,.5006],a:.0066,p:[[-.0614,-.0166],[.0416,-.0373],[.0857,.0169],[.0857,.0172],[-.0687,.0218],[-.0826,-.0017]]},{c:[1.2815,1.0604],a:.0802,p:[[-.1004,-.173],[.2202,-.093],[.1721,.069],[.0345,.1501],[-.0416,.1253],[-.143,.0132],[-.1417,-.0916]]},{c:[.8355,1.0318],a:.0322,p:[[-.131,-.0685],[.0169,-.0945],[.102,.0071],[.108,.0647],[.0639,.1466],[-.1597,-.0555]]},{c:[.2497,.0191],a:.1003,p:[[-.0363,-.2273],[.2001,-.2407],[.1891,-.0111],[-.063,.1786],[-.1145,.1743],[-.1754,.1261]]},{c:[.8047,.3299],a:.0148,p:[[-.0081,-.0784],[.0783,-.0171],[.0677,.0391],[-.0051,.0688],[-.0565,.0314],[-.0764,-.0439]]}]};var x0={W:7.2,H:4.5,impact:[.8496,.5309999999999999],count:85,cells:[{c:[-3.1347,-1.8027],a:.8394,p:[[-.4653,-.4473],[.5555,-.4473],[.375,.5245],[-.4653,.37]]},{c:[-3.0911,-.9445],a:.7932,p:[[-.5089,-.4882],[.3313,-.3337],[.3877,-.2342],[.2989,.3546],[-.5089,.7016]]},{c:[-2.9672,-.0245],a:.8701,p:[[.1958,-.5454],[.5648,.5118],[.3299,.6993],[-.6328,.1183],[-.6328,-.2184],[.175,-.5654]]},{c:[-3.1753,.8899],a:.8894,p:[[-.4247,-.7961],[.538,-.2151],[.3113,.4855],[-.4247,.5255]]},{c:[-3.0788,1.776],a:.7806,p:[[-.5212,.474],[-.5212,-.3606],[.2148,-.4006],[.4019,-.187],[.4259,.474]]},{c:[-2.1989,-1.5641],a:1.0204,p:[[.4839,.3724],[-.5045,.3854],[-.5609,.2859],[-.3803,-.6859],[.4331,-.6859],[.529,.3281]]},{c:[-2.2717,-.7558],a:.7117,p:[[.35,.3421],[-.4997,.1859],[-.5205,.1659],[-.4317,-.4229],[.5567,-.4359],[.5452,.1649]]},{c:[-2.2609,-.0159],a:.6118,p:[[.3392,-.3978],[.3127,.4486],[-.1415,.5032],[-.5105,-.554]]},{c:[-2.2172,.9941],a:1.1589,p:[[.6256,.2605],[.2091,.577],[-.4596,.5949],[-.6467,.3813],[-.4201,-.3193],[-.1852,-.5068],[.2691,-.5614],[.6079,-.4261]]},{c:[-2.2482,1.915],a:.5601,p:[[.2401,-.3439],[.5934,.335],[-.4047,.335],[-.4287,-.326]]},{c:[-1.3118,-1.7282],a:.7736,p:[[.4979,-.5218],[.512,.0526],[-.1978,.4986],[-.3581,.4922],[-.454,-.5218]]},{c:[-1.3144,-.7862],a:.6277,p:[[.4655,-.0269],[.5056,.5152],[.3923,.6152],[-.4121,.1953],[-.4006,-.4055],[-.3555,-.4498],[-.1952,-.4434]]},{c:[-1.5398,.0306],a:.8225,p:[[.429,.3281],[-.0696,.5374],[-.4084,.4021],[-.3819,-.4443],[-.1867,-.6215],[.6177,-.2016]]},{c:[-1.1476,1.0594],a:.7436,p:[[.1328,-.6182],[.3912,.4245],[.187,.5889],[.1582,.6019],[-.4441,.1952],[-.4618,-.4914],[.0368,-.7007]]},{c:[-1.4255,1.8013],a:.6304,p:[[.3798,.0197],[.1622,.4487],[-.2293,.4487],[-.5826,-.2302],[-.1662,-.5467],[.4361,-.14]]},{c:[-.3439,-1.7071],a:.787,p:[[.3232,.4616],[-.1546,.4347],[-.4559,.0315],[-.47,-.5429],[.1917,-.5429],[.5656,.158]]},{c:[-.4269,-.8229],a:.6006,p:[[.4511,-.2458],[.0184,.556],[-.3819,.5519],[-.422,.0098],[-.0716,-.4495],[.4062,-.4226]]},{c:[-.4879,.1568],a:.7435,p:[[.5044,.0654],[.3278,.3155],[.0012,.4763],[-.5269,.2844],[-.6229,.2019],[-.4342,-.3278],[-.3209,-.4278],[.0794,-.4237],[.4816,-.2154],[.5102,.0509]]},{c:[-.1886,.8079],a:.2079,p:[[.1946,-.0386],[.0409,.2943],[-.0918,.4233],[-.2981,-.1748],[.0285,-.3356],[.1257,-.1687]]},{c:[-.3532,1.7847],a:.4888,p:[[.2752,-.2407],[.3523,.1597],[.2143,.4653],[.1223,.4653],[-.6074,-.1364],[-.4032,-.3008],[.0467,-.4126]]},{c:[.4558,-1.8963],a:.5288,p:[[.6099,-.3537],[.4523,.0146],[-.2199,.3455],[-.2341,.3472],[-.608,-.3537]]},{c:[.3085,-1.1554],a:.3577,p:[[.0636,.4494],[-.2842,.0867],[-.3292,-.0901],[-.0868,-.3937],[-.0726,-.3954],[.3797,.0085],[.3294,.3346]]},{c:[.4847,-.1317],a:.1614,p:[[.0759,.267],[-.3507,-.0048],[-.108,-.2179],[.0159,-.1856],[.1981,-.1125],[.1691,.2539]]},{c:[-.0347,1.2637],a:.1997,p:[[-.113,-.1615],[.2882,-.2979],[.3503,-.1511],[.0356,.2543],[-.0433,.2803],[-.2718,.1084],[-.2457,-.0325]]},{c:[.4411,1.6607],a:.3886,p:[[-.4402,-.1427],[.3913,-.1816],[.4454,-.1545],[.4159,-.0457],[.1488,.3572],[-.442,.2837],[-.5191,-.1167]]},{c:[1.4365,-1.7924],a:.6997,p:[[-.2222,.5048],[-.5284,-.0893],[-.3708,-.4576],[.36,-.4576],[.4039,.174],[.3575,.3259]]},{c:[1.5062,-1.0474],a:.4385,p:[[-.2475,.3352],[-.3137,-.1616],[-.2919,-.2402],[.2878,-.4191],[.4318,-.1636],[.335,.2476],[-.2015,.402]]},{c:[1.356,-.052],a:.2835,p:[[-.2336,-.1867],[-.071,-.3836],[.5313,.0432],[.087,.2799],[-.0763,.2409],[-.2376,.0061]]},{c:[1.2953,.7663],a:.1943,p:[[-.1392,-.2971],[-.0887,-.3134],[.246,-.0419],[.3108,.0938],[-.0478,.3841],[-.0924,.325],[-.189,-.1508]]},{c:[1.272,1.8171],a:.5179,p:[[-.1143,-.4273],[.5091,.0742],[.5073,.4329],[-.1014,.4329],[-.415,-.2021],[-.3855,-.3109]]},{c:[2.411,-1.8466],a:.6696,p:[[-.6145,-.4034],[.31,-.4034],[.4579,.2458],[.417,.3328],[-.5706,.2282]]},{c:[2.382,-.8156],a:.5612,p:[[-.5408,.0158],[-.444,-.3954],[.3745,-.3524],[.4607,.0936],[.2283,.2985],[-.0787,.3397]]},{c:[2.2599,-.0271],a:.5271,p:[[-.3708,.0188],[.0434,-.4488],[.3504,-.49],[.424,.3368],[-.1069,.4865],[-.34,.0966]]},{c:[2.4592,.7333],a:.59,p:[[-.3062,-.2739],[.2247,-.4236],[.5547,-.2193],[.2477,.3982],[-.2511,.4087],[-.4696,.1097]]},{c:[2.5834,1.4585],a:.4966,p:[[-.3753,-.3165],[.1236,-.327],[.3817,-.0023],[.369,.4957],[-.4988,.15]]},{c:[3.1975,-1.9211],a:.5289,p:[[.4025,.3374],[-.3286,.3203],[-.4765,-.3289],[.4025,-.3289]]},{c:[3.0827,-1.1782],a:.7868,p:[[-.3262,.0102],[-.2547,-.3356],[-.2138,-.4226],[.5173,-.4055],[.5173,.6976],[-.24,.4562]]},{c:[3.0585,-.0755],a:1.008,p:[[-.4482,-.4416],[-.2158,-.6465],[.5415,-.4051],[.5415,.5183],[-.0446,.5895],[-.3746,.3852]]},{c:[3.1772,.9329],a:.6188,p:[[-.1633,-.4189],[.4228,-.4901],[.4228,.187],[-.2121,.5233],[-.4702,.1986]]},{c:[3.2384,1.8061],a:.5996,p:[[.3616,.4439],[-.164,.4439],[-.286,.1481],[-.2733,-.3499],[.3616,-.6862]]},{c:[-.9142,-1.2477],a:.435,p:[[.0653,.4346],[-.5954,.0181],[.1144,-.4279],[.4157,-.0247]]},{c:[-.9644,2.107],a:.1456,p:[[-.2989,.143],[-.0813,-.286],[.3801,.143]]},{c:[.2595,.1523],a:.1731,p:[[.3011,-.017],[.1771,.2292],[.1503,.2321],[-.2372,.0554],[-.2658,-.2109],[-.1255,-.2888]]},{c:[1.725,1.2693],a:.7057,p:[[-.1189,-.4092],[.2646,-.4263],[.4831,-.1273],[.3596,.3392],[.0561,.622],[-.5673,.1205],[-.4775,-.1189]]},{c:[.5716,.979],a:.0586,p:[[-.0898,-.2046],[.1149,-.0793],[.0903,.2653],[.0197,.2109],[-.1351,-.1923]]},{c:[.949,.5465],a:.0212,p:[[.004,-.1234],[.0782,-.0991],[.0299,.0868],[-.0301,.133],[-.0663,.1106],[-.0159,-.1081]]},{c:[.8232,.27],a:.0228,p:[[-.1193,.0108],[.1395,-.1102],[.1012,.0549],[-.1212,.0446]]},{c:[.4804,1.3088],a:.1966,p:[[.1815,-.0645],[.352,.1703],[-.4795,.2092],[-.1648,-.1962],[.1109,-.1189]]},{c:[1.0657,.523],a:.0216,p:[[-.0056,-.0736],[.0904,-.0538],[.0406,.0925],[-.0868,.1103],[-.0385,-.0756]]},{c:[.6201,.7974],a:.0238,p:[[-.1076,-.043],[.0091,-.0427],[.1394,-.0081],[.1519,.0517],[.0664,.1023],[-.1383,-.023],[-.1211,-.037]]},{c:[.6443,.7062],a:.0147,p:[[-.1318,.0482],[.0217,-.0758],[.1251,-.0209],[-.0151,.0485]]},{c:[.7448,.5976],a:.0256,p:[[-.0794,-.1486],[.0046,-.1191],[.0946,.0564],[.0341,.0907],[.0246,.0877],[-.0788,.0328]]},{c:[.9994,.2706],a:.0435,p:[[-.0023,-.1885],[.0719,-.2628],[.0607,.1788],[.0278,.1768],[-.0464,.1525],[-.075,.0543],[-.0367,-.1108]]},{c:[1.7518,-.3956],a:.4589,p:[[.1355,.3868],[-.4668,-.04],[-.4471,-.2498],[.0894,-.4042],[.5515,-.0803],[.1373,.3873]]},{c:[.8478,-1.4152],a:.4075,p:[[-.1596,.2683],[-.6119,-.1356],[.0603,-.4665],[.3665,.1276],[.3447,.2062]]},{c:[2.3344,1.9908],a:.5768,p:[[-.5551,.2592],[-.5533,-.0995],[-.2498,-.3823],[.618,-.0366],[.74,.2592]]},{c:[.4596,.6123],a:.0591,p:[[-.023,-.2308],[.1269,-.1886],[.0394,.1481],[.0222,.1621],[-.0231,.1744],[-.0923,.1624],[-.0498,-.2279]]},{c:[.7953,.4074],a:.0381,p:[[-.1553,.0157],[-.0933,-.0928],[.1291,-.0825],[.1577,.0157],[.1378,.031],[-.0459,.0711],[-.1299,.0416]]},{c:[.9433,-.9264],a:.2391,p:[[-.0042,.1834],[-.3054,.1056],[-.2551,-.2205],[.2492,-.2826],[.3154,.2142]]},{c:[2.2314,-1.3955],a:.356,p:[[-.4374,-.071],[-.391,-.2229],[.5966,-.1183],[.5251,.2275],[-.2934,.1845]]},{c:[.5653,-.5873],a:.1622,p:[[-.0647,.27],[-.1886,.2377],[-.1932,-.1187],[.0726,-.2335],[.3738,-.1557]]},{c:[1.1487,.2537],a:.0776,p:[[-.0886,.1957],[-.0774,-.2459],[-.0303,-.2996],[.131,-.0648],[.0579,.1992],[.0074,.2155]]},{c:[.944,1.1729],a:.2632,p:[[.2589,-.0816],[.3035,-.0225],[.2137,.2169],[-.0575,.3333],[-.1116,.3062],[-.2821,.0714],[-.2575,-.2732],[-.172,-.3238],[.105,-.2269]]},{c:[.7343,.7294],a:.0075,p:[[-.1051,.0253],[.0351,-.0441],[.0446,-.0412],[.0252,.0599]]},{c:[.8132,2.0332],a:.2101,p:[[-.1781,.2168],[-.2233,-.0153],[.0438,-.4182],[.3575,.2168]]},{c:[.5949,.5735],a:.0307,p:[[.0451,-.1504],[.0705,-.1245],[.0711,.0569],[-.0824,.1809],[-.0959,.1869],[-.0084,-.1498]]},{c:[.004,.4948],a:.0866,p:[[.0125,-.2726],[.2185,.1507],[-.0669,.1444],[-.1641,-.0225]]},{c:[-.569,1.0323],a:.4492,p:[[.2886,.1989],[.2625,.3398],[-.1874,.4516],[-.4458,-.5911],[.0823,-.3992]]},{c:[1.7359,.1492],a:.0857,p:[[-.1958,.3164],[-.2929,.0787],[.1514,-.158],[.1532,-.1575],[.184,-.0797]]},{c:[.1173,.7106],a:.0388,p:[[.1052,-.0651],[.1861,.0779],[-.1113,.0587],[-.1802,-.0714]]},{c:[.8572,.7519],a:.0456,p:[[.0255,-.0948],[.0617,-.0724],[.1918,.1941],[-.0852,.0972],[-.0977,.0374],[-.0783,-.0637],[-.0178,-.098]]},{c:[.2359,.545],a:.1061,p:[[.1739,-.1606],[.1314,.2297],[.0738,.247],[.0675,.2435],[-.0134,.1005],[-.2194,-.3228],[-.2136,-.3373]]},{c:[.8511,.557],a:.0227,p:[[-.1018,-.0785],[.082,-.1186],[.0316,.1001],[-.0117,.0969]]},{c:[.082,-.431],a:.4619,p:[[.052,.2945],[-.0883,.3725],[-.4905,.1641],[-.0577,-.6377],[.29,-.2749],[.2946,.0814]]},{c:[.2713,2.1156],a:.1852,p:[[-.4102,.1344],[-.2722,-.1712],[.3186,-.0977],[.3638,.1344]]},{c:[1.7917,.5703],a:.3218,p:[[-.2516,-.1047],[.1282,-.5008],[.3613,-.1109],[.1979,.2727],[-.1856,.2898],[-.2504,.1541]]},{c:[1.0133,-.4766],a:.2735,p:[[.1091,.2379],[-.3305,.2324],[-.5127,.1593],[-.0742,-.2664],[.2454,-.2356],[.2914,-.1688],[.2717,.041]]},{c:[-.7622,1.9261],a:.1663,p:[[-.1984,-.2778],[.5313,.3239],[.1779,.3239],[-.2835,-.1051],[-.2272,-.2648]]},{c:[.379,.9369],a:.0804,p:[[.0575,-.1502],[.2123,.253],[-.0634,.1757],[-.1255,.0289],[-.0693,-.1449],[-.0117,-.1622]]},{c:[.6194,.2773],a:.0534,p:[[-.0588,-.142],[.0344,-.1551],[.0527,-.1397],[.0845,.0035],[.0826,.0373],[.0206,.1457],[-.0329,.1464],[-.1828,.1042]]},{c:[.9026,-.0256],a:.1479,p:[[-.2488,.1478],[-.2198,-.2186],[.2198,-.2131],[.2158,-.0203],[.1687,.0334],[.0945,.1077],[-.2305,.1632]]},{c:[1.0512,.7931],a:.0611,p:[[-.0723,-.1598],[.0551,-.1776],[.1517,.2982],[-.0022,.1529],[-.1323,-.1136]]},{c:[.8339,.1651],a:.0321,p:[[-.1618,-.0275],[.1632,-.083],[.1288,-.0053],[-.13,.1157]]},{c:[.145,.8836],a:.0838,p:[[.1647,-.0916],[.1085,.0822],[-.2927,.2186],[-.139,-.1143],[.1584,-.0951]]},{c:[1.4021,.4119],a:.1051,p:[[-.1955,.041],[-.1224,-.223],[.0409,-.184],[.138,.0537],[.1392,.3125]]}]};function wM(s){return function(){s|=0,s=s+1831565813|0;let t=Math.imul(s^s>>>15,1|s);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}var AM=s=>1-Math.pow(1-s,4);function v0(s){let t=s.querySelector("[data-gh-stage]"),e=K=>s.querySelector(K),n=K=>Array.from(s.querySelectorAll(K)),i=matchMedia("(prefers-reduced-motion: reduce)").matches,r=matchMedia("(max-width: 760px)").matches,a=e(".gh-eyebrow"),o=n(".gh-h1 .gh-word"),l=e(".gh-sub"),c=e(".gh-cta"),h=e(".gh-replay"),f=()=>{Vn.set(a,{opacity:1}),Vn.set(o,{opacity:1,filter:"blur(0px)",y:0}),Vn.set(l,{opacity:1,y:0}),Vn.set(c,{opacity:1,y:0})},u;try{if(u=new xc({antialias:!0,alpha:!1,powerPreference:"high-performance"}),!u.getContext())throw new Error("no ctx")}catch{s.classList.add("gh-nowebgl"),f(),h&&(h.hidden=!0);return}u.setPixelRatio(Math.min(devicePixelRatio,r?2:1.75)),u.setSize(t.clientWidth,t.clientHeight),u.setClearColor(855826,1),u.toneMapping=ms,u.toneMappingExposure=.82,u.transmissionResolutionScale=r?.5:.6,t.appendChild(u.domElement);let d=new us,g=new ze(34,t.clientWidth/t.clientHeight,.1,100);g.position.set(0,0,9);let _=new pr(u);d.environment=_.fromScene(new Mc,.04).texture,d.environmentIntensity=.55,(function(){let j=document.createElement("canvas");j.width=j.height=512;let ut=j.getContext("2d");ut.fillStyle="#0b0d10",ut.fillRect(0,0,512,512);let bt=ut.createRadialGradient(320,200,20,320,200,340);bt.addColorStop(0,"rgba(79,216,235,0.30)"),bt.addColorStop(.4,"rgba(40,120,150,0.10)"),bt.addColorStop(1,"rgba(11,13,16,0)"),ut.fillStyle=bt,ut.fillRect(0,0,512,512),bt=ut.createRadialGradient(120,420,10,120,420,260),bt.addColorStop(0,"rgba(255,190,120,0.10)"),bt.addColorStop(1,"rgba(11,13,16,0)"),ut.fillStyle=bt,ut.fillRect(0,0,512,512);let At=new ir(j);At.colorSpace=tn;let qt=new le(new ds(26,16),new mi({map:At}));qt.position.set(0,0,-5.5),d.add(qt)})();let p=new ps(13625599,1.7);p.position.set(-4,2.2,-3),d.add(p);let m=new ps(16767392,1.1);m.position.set(4.5,.6,2.2),d.add(m);let E=new ps(9426175,.9);E.position.set(0,-1,-5),d.add(E),d.add(new ya(1713714,329482,.22));let T=new _a({color:14675696,metalness:0,roughness:.06,transmission:1,ior:1.5,thickness:.5,attenuationColor:new Ft(11061432),attenuationDistance:.7,clearcoat:.5,clearcoatRoughness:.08,envMapIntensity:1.15,specularIntensity:1,specularColor:new Ft(15398655),transparent:!0,side:wn}),y=new _i({color:12176592,metalness:0,roughness:.62,emissive:new Ft(666160),emissiveIntensity:.07,envMapIntensity:.9}),M=wM(9084213),w=new Zn;d.add(w);let A=[],x=r?x0:_0,b=null,R=null,P=null,N=null;function H(){let{W:K,H:j,impact:ut}=x,bt=Math.hypot(K,j)/2,At=new L(ut[0],ut[1],0);for(let nt of x.cells){let it=new rr;nt.p.forEach(([ct,Y],$)=>$?it.lineTo(ct,Y):it.moveTo(ct,Y)),it.closePath();let ft=.022+Math.min(.022,nt.a*.012),ht=new ga(it,{depth:ft,bevelEnabled:!1,curveSegments:1});ht.translate(0,0,-ft/2),ht.computeVertexNormals();let It=new le(ht,[T,y]),wt=nt.c[0],Ut=nt.c[1],Gt=new L(wt,Ut,0);It.position.copy(Gt);let I=new L(wt-At.x,Ut-At.y,0);I.lengthSq()<1e-4&&I.set(M()-.5,M()-.5,0),I.normalize();let se=Math.min(1,Math.hypot(wt-At.x,Ut-At.y)/bt);I.applyAxisAngle(new L(0,0,1),(M()-.5)*.5);let $t=(1-se)*(1.7+M()*1.3)+.15,C=(M()-.5)*1.1-Math.min(.7,nt.a*.35),v=new L(wt+I.x*$t,Ut+I.y*$t+(M()-.5)*.4,pc.clamp(C,-1.4,.9)),O=new L(M()*2-1,M()*2-1,M()*2-1).normalize(),k=.5+M()*1.5,q=new nn().setFromEuler(new En((M()-.5)*.9,(M()-.5)*.9,(M()-.5)*.6)),ot=se*.18+M()*.05;A.push({mesh:It,assembled:Gt,frozen:v,qAssembled:new nn,qFrozen:q,spinAxis:O,turns:k,start:ot,wob:M()*Math.PI*2,wobAmp:.02+M()*.04}),w.add(It)}b=new le(new jn(x.W,x.H,.08),T),d.add(b);let qt=document.createElement("canvas");qt.width=qt.height=128;let kt=qt.getContext("2d"),et=kt.createRadialGradient(64,64,0,64,64,64);et.addColorStop(0,"rgba(255,255,255,1)"),et.addColorStop(.25,"rgba(190,240,255,0.9)"),et.addColorStop(.6,"rgba(79,216,235,0.25)"),et.addColorStop(1,"rgba(79,216,235,0)"),kt.fillStyle=et,kt.fillRect(0,0,128,128),R=new ta(new tr({map:new ir(qt),color:16777215,transparent:!0,opacity:0,blending:zi,depthWrite:!1,depthTest:!1})),R.position.set(ut[0],ut[1],.2),R.scale.set(1.4,1.4,1.4),d.add(R),N=new nr({color:11464959,transparent:!0,opacity:0,blending:zi,depthWrite:!1,depthTest:!1}),P=new Zn;for(let nt=0;nt<12;nt++){let it=nt/12*Math.PI*2+(M()-.5)*.3,ft=[new L(ut[0],ut[1],.05)],ht=.1,It=5+Math.floor(M()*4);for(let wt=0;wt<It;wt++){ht+=.35+M()*.55;let Ut=it+(M()-.5)*.5;ft.push(new L(ut[0]+Math.cos(Ut)*ht,ut[1]+Math.sin(Ut)*ht,.05))}P.add(new ra(new Ve().setFromPoints(ft),N))}P.visible=!1,d.add(P),U(0),w.visible=!1}let W={burst:1};function U(K){let j=new nn,ut=new L;for(let bt of A){let At=pc.clamp((K-bt.start)/(1-bt.start),0,1),qt=AM(At);ut.copy(bt.assembled).lerp(bt.frozen,qt),bt.mesh.position.copy(ut),j.copy(bt.qAssembled).slerp(bt.qFrozen,qt),qt>0&&j.multiply(new nn().setFromAxisAngle(bt.spinAxis,bt.turns*Math.PI*2*qt)),bt.mesh.quaternion.copy(j)}}let z=new Tc(u);z.addPass(new Ec(d,g)),z.addPass(new xr(new rt(t.clientWidth,t.clientHeight),.22,.55,.92)),z.addPass(new wc);let B=!0,Z=!0;new IntersectionObserver(K=>{B=K[0].isIntersecting},{threshold:.02}).observe(s),document.addEventListener("visibilitychange",()=>{Z=document.visibilityState!=="hidden"});let tt={x:0,y:0},at={x:0,y:0};addEventListener("pointermove",K=>{at.x=K.clientX/innerWidth-.5,at.y=K.clientY/innerHeight-.5});let lt=new Ta;function dt(){if(requestAnimationFrame(dt),!B||!Z)return;let K=lt.getElapsedTime();tt.x+=(at.x-tt.x)*.05,tt.y+=(at.y-tt.y)*.05;let j=W.burst;if(w.position.x=tt.x*.35*j,w.position.y=-tt.y*.25*j,w.rotation.y=tt.x*.05*j,w.rotation.x=tt.y*.04*j,W.burst>=.999)for(let ut of A)ut.mesh.position.z=ut.frozen.z+Math.sin(K*.8+ut.wob)*ut.wobAmp;z.render()}function Wt(){let K=t.clientWidth,j=t.clientHeight;g.aspect=K/j,g.updateProjectionMatrix(),u.setSize(K,j),z.setSize(K,j)}addEventListener("resize",Wt);let Yt=null;function Xt(){Vn.set(a,{opacity:0}),Vn.set(o,{opacity:0,filter:"blur(14px)",y:26}),Vn.set(l,{opacity:0,y:12}),Vn.set(c,{opacity:0,y:14})}function J(){Yt&&Yt.kill(),W.burst=0,U(0),b.visible=!0,w.visible=!1,P.visible=!1,R.material.opacity=0,N.opacity=0,b.rotation.set(0,-.14,0),b.position.set(0,0,0),Xt();let K=Vn.timeline();Yt=K,K.to(b.rotation,{y:.14,x:.045,duration:1.3,ease:"sine.inOut"},0),K.to(b.position,{y:.06,duration:1.3,ease:"sine.inOut"},0),K.add(()=>{b.visible=!1,w.visible=!0,P.visible=!0},1.2),K.fromTo(R.scale,{x:.3,y:.3,z:.3},{x:3.4,y:3.4,z:3.4,duration:.22,ease:"power2.out"},1.2),K.fromTo(R.material,{opacity:0},{opacity:1,duration:.06,ease:"power2.out"},1.2),K.to(R.material,{opacity:0,duration:.4,ease:"power2.in"},1.28),K.fromTo(N,{opacity:0},{opacity:.9,duration:.08,ease:"power2.out"},1.22),K.to(N,{opacity:0,duration:.32,ease:"power1.in"},1.4),K.to(W,{burst:1,duration:1.15,ease:"power4.out",onUpdate:()=>U(W.burst)},1.3),K.to(a,{opacity:1,duration:.7,ease:"power2.out"},2.15),K.to(o,{opacity:1,filter:"blur(0px)",y:0,duration:.8,stagger:.13,ease:"power3.out"},2.2),K.to(l,{opacity:1,y:0,duration:.7,ease:"power3.out"},2.55),K.to(c,{opacity:1,y:0,duration:.7,ease:"power3.out"},2.85)}window.__ghSeek=K=>{Yt||J(),Yt.pause().time(K)},window.__ghPlay=J,h&&h.addEventListener("click",J),H(),window.__ghReady=!0,dt(),i?(W.burst=1,U(1),b.visible=!1,w.visible=!0,f(),h&&(h.hidden=!0)):J()}var sf=document.getElementById("glass-hero");sf&&(document.readyState==="loading"?addEventListener("DOMContentLoaded",()=>v0(sf)):v0(sf));export{v0 as initGlassHero};
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)

gsap/gsap-core.js:
  (*!
   * GSAP 3.15.0
   * https://gsap.com
   *
   * @license Copyright 2008-2026, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/CSSPlugin.js:
  (*!
   * CSSPlugin 3.15.0
   * https://gsap.com
   *
   * Copyright 2008-2026, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)
*/
