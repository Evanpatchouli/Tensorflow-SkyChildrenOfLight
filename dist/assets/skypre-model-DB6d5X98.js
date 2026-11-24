const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/dist-Dt5jwDwT.js","assets/RetroExperiment-DR401Uz6.js","assets/index-BUkmPOaW.js","assets/index-BbeiMYB9.css","assets/archive-presentation-K-PlM9lP.js","assets/RetroExperiment-CUfiooGP.css"])))=>i.map(i=>d[i]);
import{t as e}from"./index-BUkmPOaW.js";import{a as t,n,r,t as i}from"./RetroExperiment-DR401Uz6.js";function a(e){throw Error(`'${e}' not yet implemented or not found in the registry. This kernel may not be supported by the tfjs backend you have chosen`)}var o,s,c,l,u=n((()=>{o=1e-7,s=1e-4,c=class{constructor(e,t){this.backend=e,this.dataMover=t,this.data=new WeakMap,this.dataIdsCount=0}get(e){return this.data.has(e)||this.dataMover.moveData(this.backend,e),this.data.get(e)}set(e,t){this.dataIdsCount++,this.data.set(e,t)}has(e){return this.data.has(e)}delete(e){return this.dataIdsCount--,this.data.delete(e)}numDataIds(){return this.dataIdsCount}},l=class{refCount(e){return a(`refCount`)}incRef(e){return a(`incRef`)}timerAvailable(){return!0}time(e){return a(`time`)}read(e){return a(`read`)}readSync(e){return a(`readSync`)}readToGPU(e,t){return a(`readToGPU`)}numDataIds(){return a(`numDataIds`)}disposeData(e,t){return a(`disposeData`)}write(e,t,n){return a(`write`)}move(e,t,n,r,i){return a(`move`)}createTensorFromTexture(e,t,n){return a(`createTensorFromTexture`)}memory(){return a(`memory`)}floatPrecision(){return a(`floatPrecision`)}epsilon(){return this.floatPrecision()===32?o:s}dispose(){return a(`dispose`)}}}));function d(e){let t=e.length,n=0;for(;t>0;)n=Math.random()*t|0,t--,h(e,t,n)}function f(e,t){if(e.length!==t.length)throw Error(`Array sizes must match to be shuffled together First array length was ${e.length}Second array length was ${t.length}`);let n=e.length,r=0;for(;n>0;)r=Math.random()*n|0,n--,h(e,n,r),h(t,n,r)}function p(e,t,n){return Math.max(e,Math.min(t,n))}function m(e){return e%2==0?e:e+1}function h(e,t,n){let r=e[t];e[t]=e[n],e[n]=r}function g(e){let t=0;for(let n=0;n<e.length;n++)t+=e[n];return t}function _(e,t){let n=Math.random();return t*n+(1-n)*e}function v(e,t){let n=0;for(let r=0;r<e.length;r++){let i=Number(e[r])-Number(t[r]);n+=i*i}return n}function y(e,t){if(!e)throw Error(typeof t==`string`?t:t())}function b(e,t,n=``){y(T(e,t),()=>n+` Shapes ${e} and ${t} must match`)}function x(e){y(e!=null,()=>`The input to the tensor constructor must be a non-null value.`)}function S(e,t=[],n=!1){if(t??=[],Array.isArray(e)||fe(e)&&!n)for(let r=0;r<e.length;++r)S(e[r],t,n);else t.push(e);return t}function C(e){if(e.length===0)return 1;let t=e[0];for(let n=1;n<e.length;n++)t*=e[n];return t}function w(e){return e.length===0}function T(e,t){if(e===t)return!0;if(e==null||t==null||e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}function E(e){return e%1==0}function D(e){if(Math.tanh!=null)return Math.tanh(e);if(e===1/0)return 1;if(e===-1/0)return-1;{let t=Math.exp(2*e);return(t-1)/(t+1)}}function ee(e){let t=Math.ceil(Math.sqrt(e));return[t,Math.ceil(e/t)]}function te(e){let t=new Uint32Array(e);for(let n=0;n<e;++n)t[n]=n;return d(t),t}function ne(e,t){return t<=e.length?e:e+` `.repeat(t-e.length)}function re(e,t=e=>0,n,r){return new Promise((i,a)=>{let o=0,s=()=>{if(e()){i();return}o++;let c=t(o);n!=null&&o>=n?a():r==null?setTimeout(s,c):r(s,c)};s()})}function ie(e,t){let n=1,r=-1;for(let t=0;t<e.length;++t)if(e[t]>=0)n*=e[t];else if(e[t]===-1){if(r!==-1)throw Error(`Shapes can only have 1 implicit size. Found -1 at dim ${r} and dim ${t}`);r=t}else if(e[t]<0)throw Error(`Shapes can not be < 0. Found ${e[t]} at dim ${t}`);if(r===-1){if(t>0&&t!==n)throw Error(`Size(${t}) must match the product of shape ${e}`);return e}if(n===0)throw Error(`Cannot infer the missing size in [${e}] when there are 0 elements`);if(t%n!==0)throw Error(`The implicit shape can't be a fractional number. Got ${t} / ${n}`);let i=e.slice();return i[r]=t/n,i}function ae(e,t){let n=t.length;return e=e==null?t.map((e,t)=>t):[].concat(e),y(e.every(e=>e>=-n&&e<n),()=>`All values in axis param must be in range [-${n}, ${n}) but got axis ${e}`),y(e.every(e=>E(e)),()=>`All values in axis param must be integers but got axis ${e}`),e.map(e=>e<0?n+e:e)}function oe(e,t){let n=[],r=[],i=t!=null&&Array.isArray(t)&&t.length===0,a=t==null||i?null:ae(t,e).sort(),o=0;for(let t=0;t<e.length;++t){if(a!=null){if(a[o]===t&&e[t]!==1)throw Error(`Can't squeeze axis ${t} since its dim '${e[t]}' is not 1`);(a[o]==null||a[o]>t)&&e[t]===1&&(n.push(e[t]),r.push(t)),a[o]<=t&&o++}e[t]!==1&&(n.push(e[t]),r.push(t))}return{newShape:n,keptDims:r}}function se(e,t){let n=null;if(e==null||e===`float32`)n=new Float32Array(t);else if(e===`int32`)n=new Int32Array(t);else if(e===`bool`)n=new Uint8Array(t);else throw Error(`Unknown data type ${e}`);return n}function ce(e,t){let n=null;if(e==null||e===`float32`)n=new Float32Array(t);else if(e===`int32`)n=new Int32Array(t);else if(e===`bool`)n=new Uint8Array(t);else if(e===`string`)n=Array(t);else throw Error(`Unknown data type ${e}`);return n}function le(e,t){for(let n=0;n<e.length;n++){let r=e[n];if(isNaN(r)||!isFinite(r))throw Error(`A tensor of type ${t} being uploaded contains ${r}.`)}}function ue(e){return e===`bool`||e===`complex64`||e===`float32`||e===`int32`||e===`string`}function de(e,t){return!(t===`complex64`||t===`float32`&&e!==`complex64`||t===`int32`&&e!==`float32`&&e!==`complex64`||t===`bool`&&e===`bool`)}function fe(e){return e instanceof Float32Array||e instanceof Int32Array||e instanceof Uint8Array||e instanceof Uint8ClampedArray}function pe(e){if(e===`float32`||e===`int32`)return 4;if(e===`complex64`)return 8;if(e===`bool`)return 1;throw Error(`Unknown dtype ${e}`)}function me(e){if(e==null)return 0;let t=0;return e.forEach(e=>t+=e.length),t}function he(e){return typeof e==`string`||e instanceof String}function ge(e){return typeof e==`boolean`}function _e(e){return typeof e==`number`}function ve(e){return Array.isArray(e)?ve(e[0]):e instanceof Float32Array?`float32`:e instanceof Int32Array||e instanceof Uint8Array||e instanceof Uint8ClampedArray?`int32`:_e(e)?`float32`:he(e)?`string`:ge(e)?`bool`:`float32`}function ye(e){return!!(e&&e.constructor&&e.call&&e.apply)}function be(e,t){for(let n=t;n<e;++n)if(e%n===0)return n;return e}function xe(e){let t=e.length;if(t<2)return[];let n=Array(t-1);n[t-2]=e[t-1];for(let r=t-3;r>=0;--r)n[r]=n[r+1]*e[r+1];return n}function Se(e,t,n,r=!1){let i=[];if(t.length===1){let a=t[0]*(r?2:1);for(let t=0;t<a;t++)i[t]=n[e+t]}else{let a=t[0],o=t.slice(1),s=o.reduce((e,t)=>e*t)*(r?2:1);for(let t=0;t<a;t++)i[t]=Se(e+t*s,o,n,r)}return i}function Ce(e,t,n=!1){if(e.length===0)return t[0];let r=e.reduce((e,t)=>e*t)*(n?2:1);if(r===0)return[];if(r!==t.length)throw Error(`[${e}] does not match the input size ${t.length}${n?` for a complex tensor`:``}.`);return Se(0,e,t,n)}function we(e,t){let n=Te(e,t);for(let e=0;e<n.length;e++)n[e]=1;return n}function Te(e,t){if(t==null||t===`float32`||t===`complex64`)return new Float32Array(e);if(t===`int32`)return new Int32Array(e);if(t===`bool`)return new Uint8Array(e);throw Error(`Unknown data type ${t}`)}function Ee(e,t){let n=e.reduce((e,t)=>e*t,1);if(t==null||t===`float32`)return Ce(e,new Float32Array(n));if(t===`int32`)return Ce(e,new Int32Array(n));if(t===`bool`)return Ce(e,new Uint8Array(n));throw Error(`Unknown data type ${t}`)}function De(e){e.forEach(t=>{y(Number.isInteger(t)&&t>=0,()=>`Tensor must have a shape comprised of positive integers but got shape [${e}].`)})}function Oe(e,t,n){if(t===0)return 0;if(t===1)return e[0];let r=e[e.length-1];for(let t=0;t<e.length-1;++t)r+=n[t]*e[t];return r}function ke(e,t,n){if(t===0)return[];if(t===1)return[e];let r=Array(t);for(let t=0;t<r.length-1;++t)r[t]=Math.floor(e/n[t]),e-=r[t]*n[t];return r[r.length-1]=e,r}function Ae(e){return e&&e.then&&typeof e.then==`function`}var je=n((()=>{}));function Me(e){let t={};return e.replace(/[?&]([^=?&]+)(?:=([^&]*))?/g,(e,...n)=>(Ne(t,n[0],n[1]),n.join(`=`))),t}function Ne(e,t,n){e[decodeURIComponent(t)]=decodeURIComponent(n||``)}function Pe(e,t){if(t=t.toLowerCase(),t===`true`||t===`false`)return t===`true`;if(`${+t}`===t)return+t;throw Error(`Could not parse value flag value ${t} for flag ${e}.`)}function O(){return Re}function Fe(e){Re=e}var Ie,Le,Re,ze=n((()=>{je(),Ie=`tfjsflags`,Le=class{constructor(e){this.global=e,this.flags={},this.flagRegistry={},this.urlFlags={},this.getQueryParams=Me,this.populateURLFlags()}setPlatform(e,t){this.platform!=null&&(O().getBool(`IS_TEST`)||O().getBool(`PROD`)||console.warn(`Platform ${this.platformName} has already been set. Overwriting the platform with ${e}.`)),this.platformName=e,this.platform=t}registerFlag(e,t,n){if(this.flagRegistry[e]={evaluationFn:t,setHook:n},this.urlFlags[e]!=null){let t=this.urlFlags[e];O().getBool(`IS_TEST`)||O().getBool(`PROD`)||console.warn(`Setting feature override from URL ${e}: ${t}.`),this.set(e,t)}}async getAsync(e){return e in this.flags||(this.flags[e]=await this.evaluateFlag(e)),this.flags[e]}get(e){if(e in this.flags)return this.flags[e];let t=this.evaluateFlag(e);if(Ae(t))throw Error(`Flag ${e} cannot be synchronously evaluated. Please use getAsync() instead.`);return this.flags[e]=t,this.flags[e]}getNumber(e){return this.get(e)}getBool(e){return this.get(e)}getFlags(){return this.flags}get features(){return this.flags}set(e,t){if(this.flagRegistry[e]==null)throw Error(`Cannot set flag ${e} as it has not been registered.`);this.flags[e]=t,this.flagRegistry[e].setHook!=null&&this.flagRegistry[e].setHook(t)}evaluateFlag(e){if(this.flagRegistry[e]==null)throw Error(`Cannot evaluate flag '${e}': no evaluation function found.`);return this.flagRegistry[e].evaluationFn()}setFlags(e){this.flags=Object.assign({},e)}reset(){this.flags={},this.urlFlags={},this.populateURLFlags()}populateURLFlags(){if(this.global===void 0||this.global.location===void 0||this.global.location.search===void 0)return;let e=this.getQueryParams(this.global.location.search);Ie in e&&e[Ie].split(`,`).forEach(e=>{let[t,n]=e.split(`:`);this.urlFlags[t]=Pe(t,n)})}},Re=null}));function Be(){if(Ue==null){let e;if(typeof window<`u`)e=window;else if(typeof global<`u`)e=global;else if(typeof process<`u`)e=process;else if(typeof self<`u`)e=self;else throw Error(`Could not find a global object`);Ue=e}return Ue}function Ve(){let e=Be();return e._tfGlobals??=new Map,e._tfGlobals}function He(e,t){let n=Ve();if(n.has(e))return n.get(e);{let r=t();return n.set(e,r),n.get(e)}}var Ue,We=n((()=>{})),Ge,Ke,qe,Je,Ye,Xe,Ze,Qe,$e,et,tt,nt,rt,it,at,ot,st,ct,lt,ut,dt,ft,pt,mt,ht,gt,_t,vt,yt,bt,xt,St,Ct,wt,Tt,Et,Dt,Ot,kt,At,jt,Mt,Nt,Pt,Ft,It,Lt,Rt,zt,Bt,Vt,Ht,Ut,Wt,Gt,Kt,qt,Jt,Yt,Xt,Zt,Qt,$t,en,tn,nn,rn,an,on,sn,cn,ln,un,dn,fn,pn,mn,hn,gn,_n,vn,yn,bn,xn,Sn,Cn,wn,Tn,En,Dn,On,kn,An,jn,Mn,Nn,Pn,Fn,In,Ln,Rn,zn,Bn,Vn,Hn,Un,Wn,Gn,Kn,qn,Jn,Yn,Xn,Zn,Qn,$n,er,tr,nr,rr,ir,ar,or,sr,cr,lr,ur,dr,fr,pr,mr,hr,gr,_r,vr,yr,br,xr,Sr,Cr,wr,Tr,Er,Dr,Or,kr,Ar,jr,Mr,Nr,Pr,Fr,Ir,Lr,Rr,k=n((()=>{Ge=`Acos`,Ke=`Acosh`,qe=`AddN`,Je=`ArgMax`,Ye=`ArgMin`,Xe=`Asin`,Ze=`Asinh`,Qe=`Atan`,$e=`Atanh`,et=`Atan2`,tt=`AvgPool`,nt=`AvgPoolGrad`,rt=`AvgPool3D`,it=`AvgPool3DGrad`,at=`BatchMatMul`,ot=`BatchToSpaceND`,st=`Bincount`,ct=`BroadcastTo`,lt=`BroadcastArgs`,ut=`Cast`,dt=`Ceil`,ft=`ClipByValue`,pt=`Complex`,mt=`ComplexAbs`,ht=`Concat`,gt=`Conv2D`,_t=`Conv2DBackpropFilter`,vt=`Conv2DBackpropInput`,yt=`Conv3D`,bt=`Conv3DBackpropFilterV2`,xt=`Conv3DBackpropInputV2`,St=`Cosh`,Ct=`Cumprod`,wt=`Cumsum`,Tt=`CropAndResize`,Et=`DenseBincount`,Dt=`DepthToSpace`,Ot=`DepthwiseConv2dNative`,kt=`DepthwiseConv2dNativeBackpropFilter`,At=`DepthwiseConv2dNativeBackpropInput`,jt=`Diag`,Mt=`Dilation2D`,Nt=`Dilation2DBackpropInput`,Pt=`Dilation2DBackpropFilter`,Ft=`RealDiv`,It=`Einsum`,Lt=`EluGrad`,Rt=`Equal`,zt=`ExpandDims`,Bt=`Expm1`,Vt=`Fill`,Ht=`FlipLeftRight`,Ut=`Floor`,Wt=`FloorDiv`,Gt=`FusedBatchNorm`,Kt=`GatherV2`,qt=`GatherNd`,Jt=`Greater`,Yt=`GreaterEqual`,Xt=`Identity`,Zt=`IFFT`,Qt=`Imag`,$t=`IsFinite`,en=`IsInf`,tn=`IsNan`,nn=`LeakyRelu`,rn=`Less`,an=`LessEqual`,on=`LinSpace`,sn=`Log1p`,cn=`LogicalAnd`,ln=`LogicalNot`,un=`LogicalOr`,dn=`LogicalXor`,fn=`LogSoftmax`,pn=`LowerBound`,mn=`LRNGrad`,hn=`Maximum`,gn=`MaxPool`,_n=`MaxPoolGrad`,vn=`MaxPool3D`,yn=`MaxPool3DGrad`,bn=`MaxPoolWithArgmax`,xn=`Mean`,Sn=`Minimum`,Cn=`MirrorPad`,wn=`Multinomial`,Tn=`Multiply`,En=`NotEqual`,Dn=`NonMaxSuppressionV3`,On=`NonMaxSuppressionV4`,kn=`NonMaxSuppressionV5`,An=`OnesLike`,jn=`OneHot`,Mn=`Pack`,Nn=`PadV2`,Pn=`Pool`,Fn=`Prelu`,In=`Prod`,Ln=`RaggedGather`,Rn=`RaggedRange`,zn=`RaggedTensorToTensor`,Bn=`Range`,Vn=`Real`,Hn=`Reciprocal`,Un=`Relu`,Wn=`Reshape`,Gn=`ResizeNearestNeighbor`,Kn=`ResizeNearestNeighborGrad`,qn=`ResizeBilinear`,Jn=`ResizeBilinearGrad`,Yn=`Relu6`,Xn=`Reverse`,Zn=`Round`,Qn=`Rsqrt`,$n=`ScatterNd`,er=`SearchSorted`,tr=`Select`,nr=`Selu`,rr=`Slice`,ir=`Sinh`,ar=`Sign`,or=`Sigmoid`,sr=`Softplus`,cr=`Sqrt`,lr=`SpaceToBatchND`,ur=`SplitV`,dr=`Softmax`,fr=`SparseFillEmptyRows`,pr=`SparseReshape`,mr=`SparseSegmentMean`,hr=`SparseSegmentSum`,gr=`SparseToDense`,_r=`SquaredDifference`,vr=`Square`,yr=`StridedSlice`,br=`StringNGrams`,xr=`StringSplit`,Sr=`StringToHashBucketFast`,Cr=`Tanh`,wr=`Tile`,Tr=`TopK`,Er=`Transform`,Dr=`Transpose`,Or=`Unique`,kr=`Unpack`,Ar=`UnsortedSegmentSum`,jr=`UpperBound`,Mr=`ZerosLike`,Nr=`Step`,Pr=`FromPixels`,Fr=`RotateWithOffset`,Ir=`_FusedMatMul`,Lr=`FusedConv2D`,Rr=`FusedDepthwiseConv2D`}));function zr(...e){O().getBool(`IS_TEST`)||O().getBool(`PROD`)||console.warn(...e)}function Br(...e){O().getBool(`IS_TEST`)||O().getBool(`PROD`)||console.log(...e)}var Vr=n((()=>{ze()}));function Hr(e,t){let n=Xr(e,t);return Zr.get(n)}function Ur(e){return Qr.get(e)}function Wr(e){let t=Zr.entries(),n=[];for(;;){let{done:r,value:i}=t.next();if(r)break;let[a,o]=i,[s]=a.split(`_`);s===e&&n.push(o)}return n}function Gr(e){let{kernelName:t,backendName:n}=e,r=Xr(t,n);Zr.has(r)&&zr(`The kernel '${t}' for backend '${n}' is already registered`),Zr.set(r,e)}function Kr(e){let{kernelName:t}=e;Qr.has(t)&&O().getBool(`DEBUG`)&&zr(`Overriding the gradient for '${t}'`),Qr.set(t,e)}function qr(e,t){let n=Xr(e,t);if(!Zr.has(n))throw Error(`The kernel '${e}' for backend '${t}' is not registered`);Zr.delete(n)}function Jr(e){if(!Qr.has(e))throw Error(`The gradient '${e}' for backend is not registered`);Qr.delete(e)}function Yr(e,t){Wr(e).forEach(e=>{Gr(Object.assign({},e,{backendName:t}))})}function Xr(e,t){return`${t}_${e}`}var Zr,Qr,$r=n((()=>{ze(),We(),Vr(),Zr=He(`kernelRegistry`,()=>new Map),Qr=He(`gradRegistry`,()=>new Map)})),ei=i(((e,t)=>{t.exports=r;var n=null;try{n=new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([0,97,115,109,1,0,0,0,1,13,2,96,0,1,127,96,4,127,127,127,127,1,127,3,7,6,0,1,1,1,1,1,6,6,1,127,1,65,0,11,7,50,6,3,109,117,108,0,1,5,100,105,118,95,115,0,2,5,100,105,118,95,117,0,3,5,114,101,109,95,115,0,4,5,114,101,109,95,117,0,5,8,103,101,116,95,104,105,103,104,0,0,10,191,1,6,4,0,35,0,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,126,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,127,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,128,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,129,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,130,34,4,66,32,135,167,36,0,32,4,167,11])),{}).exports}catch{}function r(e,t,n){this.low=e|0,this.high=t|0,this.unsigned=!!n}r.prototype.__isLong__,Object.defineProperty(r.prototype,"__isLong__",{value:!0});function i(e){return(e&&e.__isLong__)===!0}r.isLong=i;var a={},o={};function s(e,t){var n,r,i;return t?(e>>>=0,(i=0<=e&&e<256)&&(r=o[e],r)?r:(n=l(e,(e|0)<0?-1:0,!0),i&&(o[e]=n),n)):(e|=0,(i=-128<=e&&e<128)&&(r=a[e],r)?r:(n=l(e,e<0?-1:0,!1),i&&(a[e]=n),n))}r.fromInt=s;function c(e,t){if(isNaN(e))return t?b:y;if(t){if(e<0)return b;if(e>=g)return T}else{if(e<=-_)return E;if(e+1>=_)return w}return e<0?c(-e,t).neg():l(e%h|0,e/h|0,t)}r.fromNumber=c;function l(e,t,n){return new r(e,t,n)}r.fromBits=l;var u=Math.pow;function d(e,t,n){if(e.length===0)throw Error(`empty string`);if(e===`NaN`||e===`Infinity`||e===`+Infinity`||e===`-Infinity`)return y;if(typeof t==`number`?(n=t,t=!1):t=!!t,n||=10,n<2||36<n)throw RangeError(`radix`);var r;if((r=e.indexOf(`-`))>0)throw Error(`interior hyphen`);if(r===0)return d(e.substring(1),t,n).neg();for(var i=c(u(n,8)),a=y,o=0;o<e.length;o+=8){var s=Math.min(8,e.length-o),l=parseInt(e.substring(o,o+s),n);if(s<8){var f=c(u(n,s));a=a.mul(f).add(c(l))}else a=a.mul(i),a=a.add(c(l))}return a.unsigned=t,a}r.fromString=d;function f(e,t){return typeof e==`number`?c(e,t):typeof e==`string`?d(e,t):l(e.low,e.high,typeof t==`boolean`?t:e.unsigned)}r.fromValue=f;var p=65536,m=1<<24,h=p*p,g=h*h,_=g/2,v=s(m),y=s(0);r.ZERO=y;var b=s(0,!0);r.UZERO=b;var x=s(1);r.ONE=x;var S=s(1,!0);r.UONE=S;var C=s(-1);r.NEG_ONE=C;var w=l(-1,2147483647,!1);r.MAX_VALUE=w;var T=l(-1,-1,!0);r.MAX_UNSIGNED_VALUE=T;var E=l(0,-2147483648,!1);r.MIN_VALUE=E;var D=r.prototype;D.toInt=function(){return this.unsigned?this.low>>>0:this.low},D.toNumber=function(){return this.unsigned?(this.high>>>0)*h+(this.low>>>0):this.high*h+(this.low>>>0)},D.toString=function(e){if(e||=10,e<2||36<e)throw RangeError(`radix`);if(this.isZero())return`0`;if(this.isNegative()){if(this.eq(E)){var t=c(e),n=this.div(t),r=n.mul(t).sub(this);return n.toString(e)+r.toInt().toString(e)}return`-`+this.neg().toString(e)}for(var i=c(u(e,6),this.unsigned),a=this,o=``;;){var s=a.div(i),l=(a.sub(s.mul(i)).toInt()>>>0).toString(e);if(a=s,a.isZero())return l+o;for(;l.length<6;)l=`0`+l;o=``+l+o}},D.getHighBits=function(){return this.high},D.getHighBitsUnsigned=function(){return this.high>>>0},D.getLowBits=function(){return this.low},D.getLowBitsUnsigned=function(){return this.low>>>0},D.getNumBitsAbs=function(){if(this.isNegative())return this.eq(E)?64:this.neg().getNumBitsAbs();for(var e=this.high==0?this.low:this.high,t=31;t>0&&!(e&1<<t);t--);return this.high==0?t+1:t+33},D.isZero=function(){return this.high===0&&this.low===0},D.eqz=D.isZero,D.isNegative=function(){return!this.unsigned&&this.high<0},D.isPositive=function(){return this.unsigned||this.high>=0},D.isOdd=function(){return(this.low&1)==1},D.isEven=function(){return!(this.low&1)},D.equals=function(e){return i(e)||(e=f(e)),this.unsigned!==e.unsigned&&this.high>>>31==1&&e.high>>>31==1?!1:this.high===e.high&&this.low===e.low},D.eq=D.equals,D.notEquals=function(e){return!this.eq(e)},D.neq=D.notEquals,D.ne=D.notEquals,D.lessThan=function(e){return this.comp(e)<0},D.lt=D.lessThan,D.lessThanOrEqual=function(e){return this.comp(e)<=0},D.lte=D.lessThanOrEqual,D.le=D.lessThanOrEqual,D.greaterThan=function(e){return this.comp(e)>0},D.gt=D.greaterThan,D.greaterThanOrEqual=function(e){return this.comp(e)>=0},D.gte=D.greaterThanOrEqual,D.ge=D.greaterThanOrEqual,D.compare=function(e){if(i(e)||(e=f(e)),this.eq(e))return 0;var t=this.isNegative(),n=e.isNegative();return t&&!n?-1:!t&&n?1:this.unsigned?e.high>>>0>this.high>>>0||e.high===this.high&&e.low>>>0>this.low>>>0?-1:1:this.sub(e).isNegative()?-1:1},D.comp=D.compare,D.negate=function(){return!this.unsigned&&this.eq(E)?E:this.not().add(x)},D.neg=D.negate,D.add=function(e){i(e)||(e=f(e));var t=this.high>>>16,n=this.high&65535,r=this.low>>>16,a=this.low&65535,o=e.high>>>16,s=e.high&65535,c=e.low>>>16,u=e.low&65535,d=0,p=0,m=0,h=0;return h+=a+u,m+=h>>>16,h&=65535,m+=r+c,p+=m>>>16,m&=65535,p+=n+s,d+=p>>>16,p&=65535,d+=t+o,d&=65535,l(m<<16|h,d<<16|p,this.unsigned)},D.subtract=function(e){return i(e)||(e=f(e)),this.add(e.neg())},D.sub=D.subtract,D.multiply=function(e){if(this.isZero())return y;if(i(e)||(e=f(e)),n)return l(n.mul(this.low,this.high,e.low,e.high),n.get_high(),this.unsigned);if(e.isZero())return y;if(this.eq(E))return e.isOdd()?E:y;if(e.eq(E))return this.isOdd()?E:y;if(this.isNegative())return e.isNegative()?this.neg().mul(e.neg()):this.neg().mul(e).neg();if(e.isNegative())return this.mul(e.neg()).neg();if(this.lt(v)&&e.lt(v))return c(this.toNumber()*e.toNumber(),this.unsigned);var t=this.high>>>16,r=this.high&65535,a=this.low>>>16,o=this.low&65535,s=e.high>>>16,u=e.high&65535,d=e.low>>>16,p=e.low&65535,m=0,h=0,g=0,_=0;return _+=o*p,g+=_>>>16,_&=65535,g+=a*p,h+=g>>>16,g&=65535,g+=o*d,h+=g>>>16,g&=65535,h+=r*p,m+=h>>>16,h&=65535,h+=a*d,m+=h>>>16,h&=65535,h+=o*u,m+=h>>>16,h&=65535,m+=t*p+r*d+a*u+o*s,m&=65535,l(g<<16|_,m<<16|h,this.unsigned)},D.mul=D.multiply,D.divide=function(e){if(i(e)||(e=f(e)),e.isZero())throw Error(`division by zero`);if(n)return!this.unsigned&&this.high===-2147483648&&e.low===-1&&e.high===-1?this:l((this.unsigned?n.div_u:n.div_s)(this.low,this.high,e.low,e.high),n.get_high(),this.unsigned);if(this.isZero())return this.unsigned?b:y;var t,r,a;if(this.unsigned){if(e.unsigned||(e=e.toUnsigned()),e.gt(this))return b;if(e.gt(this.shru(1)))return S;a=b}else{if(this.eq(E))return e.eq(x)||e.eq(C)?E:e.eq(E)?x:(t=this.shr(1).div(e).shl(1),t.eq(y)?e.isNegative()?x:C:(r=this.sub(e.mul(t)),a=t.add(r.div(e)),a));if(e.eq(E))return this.unsigned?b:y;if(this.isNegative())return e.isNegative()?this.neg().div(e.neg()):this.neg().div(e).neg();if(e.isNegative())return this.div(e.neg()).neg();a=y}for(r=this;r.gte(e);){t=Math.max(1,Math.floor(r.toNumber()/e.toNumber()));for(var o=Math.ceil(Math.log(t)/Math.LN2),s=o<=48?1:u(2,o-48),d=c(t),p=d.mul(e);p.isNegative()||p.gt(r);)t-=s,d=c(t,this.unsigned),p=d.mul(e);d.isZero()&&(d=x),a=a.add(d),r=r.sub(p)}return a},D.div=D.divide,D.modulo=function(e){return i(e)||(e=f(e)),n?l((this.unsigned?n.rem_u:n.rem_s)(this.low,this.high,e.low,e.high),n.get_high(),this.unsigned):this.sub(this.div(e).mul(e))},D.mod=D.modulo,D.rem=D.modulo,D.not=function(){return l(~this.low,~this.high,this.unsigned)},D.and=function(e){return i(e)||(e=f(e)),l(this.low&e.low,this.high&e.high,this.unsigned)},D.or=function(e){return i(e)||(e=f(e)),l(this.low|e.low,this.high|e.high,this.unsigned)},D.xor=function(e){return i(e)||(e=f(e)),l(this.low^e.low,this.high^e.high,this.unsigned)},D.shiftLeft=function(e){return i(e)&&(e=e.toInt()),(e&=63)==0?this:e<32?l(this.low<<e,this.high<<e|this.low>>>32-e,this.unsigned):l(0,this.low<<e-32,this.unsigned)},D.shl=D.shiftLeft,D.shiftRight=function(e){return i(e)&&(e=e.toInt()),(e&=63)==0?this:e<32?l(this.low>>>e|this.high<<32-e,this.high>>e,this.unsigned):l(this.high>>e-32,this.high>=0?0:-1,this.unsigned)},D.shr=D.shiftRight,D.shiftRightUnsigned=function(e){if(i(e)&&(e=e.toInt()),e&=63,e===0)return this;var t=this.high;if(e<32){var n=this.low;return l(n>>>e|t<<32-e,t>>>e,this.unsigned)}return l(e===32?t:t>>>e-32,0,this.unsigned)},D.shru=D.shiftRightUnsigned,D.shr_u=D.shiftRightUnsigned,D.toSigned=function(){return this.unsigned?l(this.low,this.high,!1):this},D.toUnsigned=function(){return this.unsigned?this:l(this.low,this.high,!0)},D.toBytes=function(e){return e?this.toBytesLE():this.toBytesBE()},D.toBytesLE=function(){var e=this.high,t=this.low;return[t&255,t>>>8&255,t>>>16&255,t>>>24,e&255,e>>>8&255,e>>>16&255,e>>>24]},D.toBytesBE=function(){var e=this.high,t=this.low;return[e>>>24,e>>>16&255,e>>>8&255,e&255,t>>>24,t>>>16&255,t>>>8&255,t&255]},r.fromBytes=function(e,t,n){return n?r.fromBytesLE(e,t):r.fromBytesBE(e,t)},r.fromBytesLE=function(e,t){return new r(e[0]|e[1]<<8|e[2]<<16|e[3]<<24,e[4]|e[5]<<8|e[6]<<16|e[7]<<24,t)},r.fromBytesBE=function(e,t){return new r(e[4]<<24|e[5]<<16|e[6]<<8|e[7],e[0]<<24|e[1]<<16|e[2]<<8|e[3],t)}}));function ti(e){return hi.fromString(e,!0,16)}function ni(e){return e.xor(e.shru(47))}function ri(e,t,n){let r=e.slice(t,t+n);return hi.fromBytes(Array.from(r),!0,!0)}function ii(e,t){return ri(e,t,8)}function ai(e,t){return ri(e,t,4)}function oi(e,t){return t===0?e:e.shru(t).or(e.shl(64-t))}function si(e,t,n=ti(`9ddfea08eb382d69`)){let r=e.xor(t).mul(n);r=r.xor(r.shru(47));let i=t.xor(r).mul(n);return i=i.xor(i.shru(47)),i=i.mul(n),i}function ci(e,t,n,r,i,a){i=i.add(e),a=oi(a.add(i).add(r),21);let o=i;return i=i.add(t),i=i.add(n),a=a.add(oi(i,44)),[i.add(r),a.add(o)]}function li(e,t,n,r){return ci(ii(e,t),ii(e,t+8),ii(e,t+16),ii(e,t+24),n,r)}function ui(e,t=e.length){if(t>=8){let n=vi.add(t*2),r=ii(e,0).add(vi),i=ii(e,t-8);return si(oi(i,37).mul(n).add(r),oi(r,25).add(i).mul(n),n)}if(t>=4){let n=vi.add(t*2);return si(ai(e,0).shl(3).add(t),ai(e,t-4),n)}if(t>0){let n=e[0],r=e[t>>1],i=e[t-1],a=n+(r<<8),o=t+(i<<2);return ni(vi.mul(a).xor(gi.mul(o))).mul(vi)}return vi}function di(e,t=e.length){let n=vi.add(t*2),r=ii(e,0).mul(_i),i=ii(e,8),a=ii(e,t-8).mul(n),o=ii(e,t-16).mul(vi);return si(oi(r.add(i),43).add(oi(a,30)).add(o),r.add(oi(i.add(vi),18)).add(a),n)}function fi(e,t=e.length){let n=vi.add(t*2),r=ii(e,0).mul(vi),i=ii(e,8),a=ii(e,t-8).mul(n),o=ii(e,t-16).mul(vi),s=oi(r.add(i),43).add(oi(a,30)).add(o),c=si(s,r.add(oi(i.add(vi),18)).add(a),n),l=ii(e,16).mul(n),u=ii(e,24),d=s.add(ii(e,t-32)).mul(n),f=c.add(ii(e,t-24)).mul(n);return si(oi(l.add(u),43).add(oi(d,30)).add(f),l.add(oi(u.add(r),18)).add(d),n)}function pi(e,t=e.length){let n=hi.fromNumber(81,!0);if(t<=32)return t<=16?ui(e,t):di(e,t);if(t<=64)return fi(e,t);let r=n,i=n.mul(_i).add(113),a=ni(i.mul(vi).add(113)).mul(vi),o=[hi.UZERO,hi.UZERO],s=[hi.UZERO,hi.UZERO];r=r.mul(vi).add(ii(e,0));let c=0,l=(t-1>>6)*64,u=l+(t-1&63)-63;do r=oi(r.add(i).add(o[0]).add(ii(e,c+8)),37).mul(_i),i=oi(i.add(o[1]).add(ii(e,c+48)),42).mul(_i),r=r.xor(s[1]),i=i.add(o[0]).add(ii(e,c+40)),a=oi(a.add(s[0]),33).mul(_i),o=li(e,c,o[1].mul(_i),r.add(s[0])),s=li(e,c+32,a.add(s[1]),i.add(ii(e,c+16))),[a,r]=[r,a],c+=64;while(c!==l);let d=_i.add(a.and(255).shl(1));return c=u,s[0]=s[0].add(t-1&63),o[0]=o[0].add(s[0]),s[0]=s[0].add(o[0]),r=oi(r.add(i).add(o[0]).add(ii(e,c+8)),37).mul(d),i=oi(i.add(o[1]).add(ii(e,c+48)),42).mul(d),r=r.xor(s[1].mul(9)),i=i.add(o[0].mul(9).add(ii(e,c+40))),a=oi(a.add(s[0]),33).mul(d),o=li(e,c,o[1].mul(d),r.add(s[0])),s=li(e,c+32,a.add(s[1]),i.add(ii(e,c+16))),[a,r]=[r,a],si(si(o[0],s[0],d).add(ni(i).mul(gi)).add(a),si(o[1],s[1],d).add(r),d)}var mi,hi,gi,_i,vi,yi=n((()=>{mi=t(ei()),hi=mi.default||mi,gi=ti(`c3a5c85c97cb3127`),_i=ti(`b492b66fbe98f273`),vi=ti(`9ae16a3b2f90404f`)})),bi=r({arraysEqual:()=>T,assert:()=>y,assertNonNegativeIntegerDimensions:()=>De,assertNonNull:()=>x,assertShapesMatch:()=>b,bytesFromStringArray:()=>me,bytesPerElement:()=>pe,checkConversionForErrors:()=>le,clamp:()=>p,computeStrides:()=>xe,createScalarValue:()=>xi,createShuffledIndices:()=>te,decodeString:()=>Di,distSquared:()=>v,encodeString:()=>Ei,fetch:()=>Ti,fingerPrint64:()=>pi,flatten:()=>S,getArrayFromDType:()=>ce,getTypedArrayFromDType:()=>se,hasEncodingLoss:()=>de,hexToLong:()=>ti,indexToLoc:()=>ke,inferDtype:()=>ve,inferFromImplicitShape:()=>ie,isBoolean:()=>ge,isFunction:()=>ye,isInt:()=>E,isNumber:()=>_e,isPromise:()=>Ae,isScalarShape:()=>w,isString:()=>he,isTypedArray:()=>fe,isValidDtype:()=>ue,locToIndex:()=>Oe,makeOnesTypedArray:()=>we,makeZerosNestedTypedArray:()=>Ee,makeZerosTypedArray:()=>Te,nearestDivisor:()=>be,nearestLargerEven:()=>m,now:()=>wi,parseAxisParam:()=>ae,randUniform:()=>_,repeatedTry:()=>re,rightPad:()=>ne,shuffle:()=>d,shuffleCombo:()=>f,sizeFromShape:()=>C,sizeToSquarishShape:()=>ee,squeezeShape:()=>oe,sum:()=>g,swap:()=>h,tanh:()=>D,toNestedArray:()=>Ce,toTypedArray:()=>Ci});function xi(e,t){return t===`string`?Ei(e):Ci([e],t)}function Si(e,t){return e instanceof Float32Array&&t===`float32`||e instanceof Int32Array&&t===`int32`||e instanceof Uint8Array&&t===`bool`}function Ci(e,t){if(t===`string`)throw Error(`Cannot convert a string[] to a TypedArray`);if(Array.isArray(e)&&(e=S(e)),O().getBool(`DEBUG`)&&le(e,t),Si(e,t))return e;if(t==null||t===`float32`||t===`complex64`)return new Float32Array(e);if(t===`int32`)return new Int32Array(e);if(t===`bool`){let t=new Uint8Array(e.length);for(let n=0;n<t.length;++n)Math.round(e[n])!==0&&(t[n]=1);return t}throw Error(`Unknown data type ${t}`)}function wi(){return O().platform.now()}function Ti(e,t){return O().platform.fetch(e,t)}function Ei(e,t=`utf-8`){return t||=`utf-8`,O().platform.encode(e,t)}function Di(e,t=`utf-8`){return t||=`utf-8`,O().platform.decode(e,t)}var A=n((()=>{ze(),je(),je(),yi()}));function Oi(e,t,n){if(t!==`float32`)return!1;for(let t=0;t<e.length;t++){let r=e[t];if(isNaN(r)||!isFinite(r))return console.warn(`Found ${r} in the result of '${n}'`),!0}return!1}var ki,Ai,ji=n((()=>{ze(),A(),ki=class{constructor(e,t){this.backendTimer=e,this.logger=t,t??(this.logger=new Ai)}profileKernel(e,t,n){let r,i=()=>{r=n()},a,o=wi();if(this.backendTimer.timerAvailable())a=this.backendTimer.time(i);else{i();for(let e of r)e.dataSync();a=Promise.resolve({kernelMs:wi()-o})}if(O().getBool(`CHECK_COMPUTATION_FOR_ERRORS`))for(let t=0;t<r.length;t++){let n=r[t];n.data().then(t=>{Oi(t,n.dtype,e)})}return{kernelName:e,outputs:r,inputs:t,timeMs:a.then(e=>e.kernelMs),extraInfo:a.then(e=>e.getExtraProfileInfo==null?``:e.getExtraProfileInfo())}}logKernelProfile(e){let{kernelName:t,outputs:n,timeMs:r,inputs:i,extraInfo:a}=e;n.forEach(e=>{Promise.all([e.data(),r,a]).then(n=>{this.logger.logKernelProfile(t,e,n[0],n[1],i,n[2])})})}},Ai=class{logKernelProfile(e,t,n,r,i,a){let o=typeof r==`number`?ne(`${r}ms`,9):r.error,s=ne(e,25),c=t.rank,l=t.size,u=ne(t.shape.toString(),14),d=``;for(let e in i){let n=i[e];if(n!=null){let r=n.shape||t.shape,i=r.length;d+=`${e}: ${i}D ${i>0?r:``} `}}console.log(`%c${s}\t%c${o}\t%c${c}D ${u}\t%c${l}\t%c${d}\t%c${a}`,`font-weight:bold`,`color:red`,`color:blue`,`color: orange`,`color: green`,`color: steelblue`)}}}));function Mi(e,t,n){let r={},i={};for(let e=0;e<t.length;e++)r[t[e].id]=!0;for(let n=0;n<e.length;n++){let a=e[n],o=a.inputs;for(let e in o){let n=o[e],s=!1;for(let e=0;e<t.length;e++)if(r[n.id]){a.outputs.forEach(e=>r[e.id]=!0),s=!0,i[a.id]=!0;break}if(s)break}}let a={};a[n.id]=!0;let o={};for(let t=e.length-1;t>=0;t--){let n=e[t],r=n.inputs;for(let e=0;e<n.outputs.length;e++)if(a[n.outputs[e].id]){for(let e in r)a[r[e].id]=!0,o[n.id]=!0;break}}let s=[];for(let t=0;t<e.length;t++){let n=e[t];if(i[n.id]&&o[n.id]){let e={};for(let t in n.inputs){let i=n.inputs[t];r[i.id]&&(e[t]=i)}let t=Object.assign({},n);t.inputs=e,t.outputs=n.outputs,s.push(t)}}return s}function Ni(e,t,n,r){for(let i=t.length-1;i>=0;i--){let a=t[i],o=[];if(a.outputs.forEach(t=>{let n=e[t.id];n==null?o.push(null):o.push(n)}),a.gradient==null)throw Error(`Cannot compute gradient: gradient function not found for ${a.kernelName}.`);let s=a.gradient(o);for(let t in a.inputs){if(!(t in s))throw Error(`Cannot backprop through input ${t}. Available gradients found: ${Object.keys(s)}.`);let i=n(()=>s[t]());if(i.dtype!==`float32`)throw Error(`Error in gradient for op ${a.kernelName}. The gradient of input ${t} must have 'float32' dtype, but has '${i.dtype}'`);let o=a.inputs[t];if(!T(i.shape,o.shape))throw Error(`Error in gradient for op ${a.kernelName}. The gradient of input '${t}' has shape '${i.shape}', which does not match the shape of the input '${o.shape}'`);if(e[o.id]==null)e[o.id]=i;else{let t=e[o.id];e[o.id]=r(t,i),t.dispose()}}}}var Pi=n((()=>{A()}));function Fi(e,t,n,r){let i=xe(t),a=Ii(e,t,n,i),o=t.length,s=zi(e,t,n,i,a),c=[`Tensor`];return r&&(c.push(`  dtype: ${n}`),c.push(`  rank: ${o}`),c.push(`  shape: [${t}]`),c.push(`  values:`)),c.push(s.map(e=>`    `+e).join(`
`)),c.join(`
`)}function Ii(e,t,n,r){let i=C(t),a=r[r.length-1],o=Array(a).fill(0),s=t.length,c=n===`complex64`?Bi(e):e;if(s>1)for(let e=0;e<i/a;e++){let t=e*a;for(let e=0;e<a;e++)o[e]=Math.max(o[e],Li(c[t+e],0,n).length)}return o}function Li(e,t,n){let r;return r=Array.isArray(e)?`${parseFloat(e[0].toFixed(Ui))} + ${parseFloat(e[1].toFixed(Ui))}j`:he(e)?`'${e}'`:n===`bool`?Ri(e):parseFloat(e.toFixed(Ui)).toString(),ne(r,t)}function Ri(e){return e===0?`false`:`true`}function zi(e,t,n,r,i,a=!0){let o=n===`complex64`?2:1,s=t[0],c=t.length;if(c===0)return n===`complex64`?[Li(Bi(e)[0],0,n)]:n===`bool`?[Ri(e[0])]:[e[0].toString()];if(c===1){if(s>Vi){let t=Hi*o,r=Array.from(e.slice(0,t)),a=Array.from(e.slice((s-Hi)*o,s*o));return n===`complex64`&&(r=Bi(r),a=Bi(a)),[`[`+r.map((e,t)=>Li(e,i[t],n)).join(`, `)+`, ..., `+a.map((e,t)=>Li(e,i[s-Hi+t],n)).join(`, `)+`]`]}return[`[`+(n===`complex64`?Bi(e):Array.from(e)).map((e,t)=>Li(e,i[t],n)).join(`, `)+`]`]}let l=t.slice(1),u=r.slice(1),d=r[0]*o,f=[];if(s>Vi){for(let t=0;t<Hi;t++){let r=t*d,a=r+d;f.push(...zi(e.slice(r,a),l,n,u,i,!1))}f.push(`...`);for(let t=s-Hi;t<s;t++){let r=t*d,a=r+d;f.push(...zi(e.slice(r,a),l,n,u,i,t===s-1))}}else for(let t=0;t<s;t++){let r=t*d,a=r+d;f.push(...zi(e.slice(r,a),l,n,u,i,t===s-1))}let p=c===2?`,`:``;f[0]=`[`+f[0]+p;for(let e=1;e<f.length-1;e++)f[e]=` `+f[e]+p;let m=`,
`;for(let e=2;e<c;e++)m+=`
`;return f[f.length-1]=` `+f[f.length-1]+`]`+(a?``:m),f}function Bi(e){let t=[];for(let n=0;n<e.length;n+=2)t.push([e[n],e[n+1]]);return t}var Vi,Hi,Ui,Wi=n((()=>{A(),Vi=20,Hi=3,Ui=7}));function Gi(e){Ji=e}function Ki(e){Yi=e}function j(){return He(`Tensor`,()=>Xi)}var qi,Ji,Yi,Xi,Zi,M=n((()=>{We(),Wi(),A(),qi=class{constructor(e,t,n){if(this.dtype=t,this.shape=e.slice(),this.size=C(e),n!=null){let e=n.length;y(e===this.size,()=>`Length of values '${e}' does not match the size inferred by the shape '${this.size}'.`)}if(t===`complex64`)throw Error(`complex64 dtype TensorBuffers are not supported. Please create a TensorBuffer for the real and imaginary parts separately and call tf.complex(real, imag).`);this.values=n||ce(t,this.size),this.strides=xe(e)}set(e,...t){t.length===0&&(t=[0]),y(t.length===this.rank,()=>`The number of provided coordinates (${t.length}) must match the rank (${this.rank})`);let n=this.locToIndex(t);this.values[n]=e}get(...e){e.length===0&&(e=[0]);let t=0;for(let n of e){if(n<0||n>=this.shape[t]){let t=`Requested out of range element at ${e}.   Buffer shape=${this.shape}`;throw Error(t)}t++}let n=e[e.length-1];for(let t=0;t<e.length-1;++t)n+=this.strides[t]*e[t];return this.values[n]}locToIndex(e){if(this.rank===0)return 0;if(this.rank===1)return e[0];let t=e[e.length-1];for(let n=0;n<e.length-1;++n)t+=this.strides[n]*e[n];return t}indexToLoc(e){if(this.rank===0)return[];if(this.rank===1)return[e];let t=Array(this.shape.length);for(let n=0;n<t.length-1;++n)t[n]=Math.floor(e/this.strides[n]),e-=t[n]*this.strides[n];return t[t.length-1]=e,t}get rank(){return this.shape.length}toTensor(){return Ji().makeTensor(this.values,this.shape,this.dtype)}},Ji=null,Yi=null,Xi=class{constructor(e,t,n,r){this.kept=!1,this.isDisposedInternal=!1,this.shape=e.slice(),this.dtype=t||`float32`,this.size=C(e),this.strides=xe(e),this.dataId=n,this.id=r,this.rankType=this.rank<5?this.rank.toString():`higher`}get rank(){return this.shape.length}async buffer(){let e=await this.data();return Yi.buffer(this.shape,this.dtype,e)}bufferSync(){return Yi.buffer(this.shape,this.dtype,this.dataSync())}async array(){let e=await this.data();return Ce(this.shape,e,this.dtype===`complex64`)}arraySync(){return Ce(this.shape,this.dataSync(),this.dtype===`complex64`)}async data(){this.throwIfDisposed();let e=Ji().read(this.dataId);if(this.dtype===`string`){let t=await e;try{return t.map(e=>Di(e))}catch{throw Error(`Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().`)}}return e}dataToGPU(e){return this.throwIfDisposed(),Ji().readToGPU(this.dataId,e)}dataSync(){this.throwIfDisposed();let e=Ji().readSync(this.dataId);if(this.dtype===`string`)try{return e.map(e=>Di(e))}catch{throw Error(`Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().`)}return e}async bytes(){this.throwIfDisposed();let e=await Ji().read(this.dataId);return this.dtype===`string`?e:new Uint8Array(e.buffer)}dispose(){this.isDisposed||(Ji().disposeTensor(this),this.isDisposedInternal=!0)}get isDisposed(){return this.isDisposedInternal}throwIfDisposed(){if(this.isDisposed)throw Error(`Tensor is disposed.`)}print(e=!1){return Yi.print(this,e)}clone(){return this.throwIfDisposed(),Yi.clone(this)}toString(e=!1){return Fi(this.dataSync(),this.shape,this.dtype,e)}cast(e){return this.throwIfDisposed(),Yi.cast(this,e)}variable(e=!0,t,n){return this.throwIfDisposed(),Ji().makeVariable(this,e,t,n)}},Object.defineProperty(Xi,Symbol.hasInstance,{value:e=>!!e&&e.data!=null&&e.dataSync!=null&&e.throwIfDisposed!=null}),j(),Zi=class extends Xi{constructor(e,t,n,r){super(e.shape,e.dtype,e.dataId,r),this.trainable=t,this.name=n}assign(e){if(e.dtype!==this.dtype)throw Error(`dtype of the new value (${e.dtype}) and previous value (${this.dtype}) must match`);if(!T(e.shape,this.shape))throw Error(`shape of the new value (${e.shape}) and previous value (${this.shape}) must match`);Ji().disposeTensor(this),this.dataId=e.dataId,Ji().incRef(this,null)}dispose(){Ji().disposeVariable(this),this.isDisposedInternal=!0}},Object.defineProperty(Zi,Symbol.hasInstance,{value:e=>e instanceof Xi&&e.assign!=null&&e.assign instanceof Function})}));function Qi(e,t){if(e===`string`||t===`string`){if(e===`string`&&t===`string`)return`string`;throw Error(`Can not upcast ${e} with ${t}`)}return aa[e][t]}function $i(e){return Qi(e,`int32`)}var ea,ta,na,ra,ia,aa,oa=n((()=>{(function(e){e.R0=`R0`,e.R1=`R1`,e.R2=`R2`,e.R3=`R3`,e.R4=`R4`,e.R5=`R5`,e.R6=`R6`})(ea||={}),(function(e){e.float32=`float32`,e.int32=`int32`,e.bool=`int32`,e.complex64=`complex64`})(ta||={}),(function(e){e.float32=`float32`,e.int32=`int32`,e.bool=`bool`,e.complex64=`complex64`})(na||={}),(function(e){e.float32=`float32`,e.int32=`float32`,e.bool=`float32`,e.complex64=`complex64`})(ra||={}),(function(e){e.float32=`complex64`,e.int32=`complex64`,e.bool=`complex64`,e.complex64=`complex64`})(ia||={}),aa={float32:ra,int32:ta,bool:na,complex64:ia}})),sa=r({assertTypesMatch:()=>la,getTensorsInContainer:()=>da,isTensorInList:()=>ua,makeTypesMatch:()=>ca});function ca(e,t){if(e.dtype===t.dtype)return[e,t];let n=Qi(e.dtype,t.dtype);return[e.cast(n),t.cast(n)]}function la(e,t){y(e.dtype===t.dtype,()=>`The dtypes of the first(${e.dtype}) and second(${t.dtype}) input must match`)}function ua(e,t){return t.some(t=>t.id===e.id)}function da(e){let t=[];return fa(e,t,new Set),t}function fa(e,t,n){if(e==null)return;if(e instanceof Xi){t.push(e);return}if(!pa(e))return;let r=e;for(let e in r){let i=r[e];n.has(i)||(n.add(i),fa(i,t,n))}}function pa(e){return Array.isArray(e)||typeof e==`object`}var ma=n((()=>{M(),oa(),A()}));function ha(e){return e.kernelName!=null}function ga(e){let t=we(C(e),`float32`);return N.makeTensor(t,e,`float32`)}function _a(){let e=Be();if(e._tfengine==null){let t=new Le(e);e._tfengine=new ba(t)}return Fe(e._tfengine.ENV),Gi(()=>e._tfengine),e._tfengine}function va(e,t){let n={a:e,b:t};return N.runKernel(`Add`,n)}var ya,ba,N,P=n((()=>{u(),ze(),We(),k(),$r(),Vr(),ji(),Pi(),M(),ma(),A(),ya=class{constructor(){this.registeredVariables={},this.nextTapeNodeId=0,this.numBytes=0,this.numTensors=0,this.numStringTensors=0,this.numDataBuffers=0,this.gradientDepth=0,this.kernelDepth=0,this.scopeStack=[],this.numDataMovesStack=[],this.nextScopeId=0,this.tensorInfo=new WeakMap,this.profiling=!1,this.activeProfile={newBytes:0,newTensors:0,peakBytes:0,kernels:[],result:null,get kernelNames(){return Array.from(new Set(this.kernels.map(e=>e.name)))}}}dispose(){for(let e in this.registeredVariables)this.registeredVariables[e].dispose()}},ba=class e{constructor(e){this.ENV=e,this.registry={},this.registryFactory={},this.pendingBackendInitId=0,this.state=new ya}async ready(){if(this.pendingBackendInit!=null)return this.pendingBackendInit.then(()=>{});if(this.backendInstance!=null)return;let e=this.getSortedBackends();for(let t=0;t<e.length;t++){let n=e[t];if(await this.initializeBackend(n).success){await this.setBackend(n);return}}throw Error(`Could not initialize any backends, all backend initializations failed.`)}get backend(){if(this.pendingBackendInit!=null)throw Error(`Backend '${this.backendName}' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods`);if(this.backendInstance==null){let{name:e,asyncInit:t}=this.initializeBackendsAndReturnBest();if(t)throw Error(`The highest priority backend '${e}' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods`);this.setBackend(e)}return this.backendInstance}backendNames(){return Object.keys(this.registryFactory)}findBackend(e){if(!(e in this.registry)){if(e in this.registryFactory){let{asyncInit:t}=this.initializeBackend(e);if(t)return null}else return null}return this.registry[e]}findBackendFactory(e){return e in this.registryFactory?this.registryFactory[e].factory:null}registerBackend(e,t,n=1){return e in this.registryFactory?(zr(`${e} backend was already registered. Reusing existing backend factory.`),!1):(this.registryFactory[e]={factory:t,priority:n},!0)}async setBackend(e){if(this.registryFactory[e]==null)throw Error(`Backend name '${e}' not found in registry`);if(this.backendName=e,this.registry[e]==null){this.backendInstance=null;let{success:t,asyncInit:n}=this.initializeBackend(e);if(!(n?await t:t))return!1}return this.backendInstance=this.registry[e],this.setupRegisteredKernels(),this.profiler=new ki(this.backendInstance),!0}setupRegisteredKernels(){Wr(this.backendName).forEach(e=>{e.setupFunc!=null&&e.setupFunc(this.backendInstance)})}disposeRegisteredKernels(e){Wr(e).forEach(t=>{t.disposeFunc!=null&&t.disposeFunc(this.registry[e])})}initializeBackend(e){let t=this.registryFactory[e];if(t==null)throw Error(`Cannot initialize backend ${e}, no registration found.`);try{let n=t.factory();if(n&&!(n instanceof l)&&typeof n.then==`function`){let t=++this.pendingBackendInitId,r=n.then(n=>t<this.pendingBackendInitId?!1:(this.registry[e]=n,this.pendingBackendInit=null,!0)).catch(n=>(t<this.pendingBackendInitId||(this.pendingBackendInit=null,zr(`Initialization of backend ${e} failed`),zr(n.stack||n.message)),!1));return this.pendingBackendInit=r,{success:r,asyncInit:!0}}return this.registry[e]=n,{success:!0,asyncInit:!1}}catch(t){return zr(`Initialization of backend ${e} failed`),zr(t.stack||t.message),{success:!1,asyncInit:!1}}}removeBackend(e){if(!(e in this.registryFactory))throw Error(`${e} backend not found in registry`);this.backendName===e&&this.pendingBackendInit!=null&&this.pendingBackendInitId++,e in this.registry&&(this.disposeRegisteredKernels(e),this.registry[e].dispose(),delete this.registry[e]),delete this.registryFactory[e],this.backendName===e&&(this.pendingBackendInit=null,this.backendName=null,this.backendInstance=null)}getSortedBackends(){if(Object.keys(this.registryFactory).length===0)throw Error(`No backend found in registry.`);return Object.keys(this.registryFactory).sort((e,t)=>this.registryFactory[t].priority-this.registryFactory[e].priority)}initializeBackendsAndReturnBest(){let e=this.getSortedBackends();for(let t=0;t<e.length;t++){let n=e[t],{success:r,asyncInit:i}=this.initializeBackend(n);if(i||r)return{name:n,asyncInit:i}}throw Error(`Could not initialize any backends, all backend initializations failed.`)}moveData(e,t){let n=this.state.tensorInfo.get(t),r=n.backend,i=this.readSync(t),a=r.refCount(t);r.disposeData(t,!0),n.backend=e,e.move(t,i,n.shape,n.dtype,a),this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack[this.state.numDataMovesStack.length-1]++}tidy(e,t){let n=null;if(t==null){if(typeof e!=`function`)throw Error(`Please provide a function to tidy()`);t=e}else{if(typeof e!=`string`&&!(e instanceof String))throw Error(`When calling with two arguments, the first argument to tidy() must be a string`);if(typeof t!=`function`)throw Error(`When calling with two arguments, the 2nd argument to tidy() must be a function`);n=e}let r;return this.scopedRun(()=>this.startScope(n),()=>this.endScope(r),()=>(r=t(),r instanceof Promise&&console.error(`Cannot return a Promise inside of tidy.`),r))}scopedRun(e,t,n){e();try{let e=n();return t(),e}catch(e){throw t(),e}}nextTensorId(){return e.nextTensorId++}nextVariableId(){return e.nextVariableId++}clone(e){let t=N.runKernel(Xt,{x:e}),n={x:e};return this.addTapeNode(this.state.activeScope.name,n,[t],e=>({x:()=>{let t={x:e};return N.runKernel(ut,t,{dtype:`float32`})}}),[],{}),t}runKernel(e,t,n){if(this.backendName??this.backend,Hr(e,this.backendName)==null)throw Error(`Kernel '${e}' not registered for backend '${this.backendName}'`);return this.runKernelFunc({kernelName:e,inputs:t,attrs:n})}shouldCheckForMemLeaks(){return this.ENV.getBool(`IS_TEST`)}checkKernelForMemLeak(e,t,n){let r=this.backend.numDataIds(),i=0;n.forEach(e=>{i+=e.dtype===`complex64`?3:1});let a=this.state.numDataMovesStack[this.state.numDataMovesStack.length-1],o=r-t-i-a;if(o>0)throw Error(`Backend '${this.backendName}' has an internal memory leak (${o} data ids) after running '${e}'`)}runKernelFunc(e){let t,n=[],r=this.isTapeOn(),i=this.state.numBytes,a=this.state.numTensors;this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack.push(0);let o;this.backendName??this.backend;let s,c=ha(e)?e.kernelName:this.state.activeScope==null?``:this.state.activeScope.name;if(ha(e)){let{kernelName:t,inputs:i,attrs:a}=e;this.backendName??this.backend;let c=Hr(t,this.backendName);y(c!=null,()=>`Cannot find registered kernel '${t}' for backend '${this.backendName}'`),o=()=>{let e=this.backend.numDataIds();s=c.kernelFunc({inputs:i,attrs:a,backend:this.backend});let o=Array.isArray(s)?s:[s];this.shouldCheckForMemLeaks()&&this.checkKernelForMemLeak(t,e,o);let l=o.map(e=>e.rank==null?this.makeTensorFromTensorInfo(e):e);if(r){let e=this.getTensorsForGradient(t,i,l);n=this.saveTensorsForBackwardMode(e)}return l}}else{let{forwardFunc:t}=e,i=e=>{r&&(n=e.map(e=>this.keep(this.clone(e))))};o=()=>{let e=this.backend.numDataIds();s=this.tidy(()=>t(this.backend,i));let n=Array.isArray(s)?s:[s];return this.shouldCheckForMemLeaks()&&this.checkKernelForMemLeak(c,e,n),n}}let{inputs:l,attrs:u}=e,d=ha(e)?null:e.backwardsFunc,f;return this.scopedRun(()=>this.state.kernelDepth++,()=>this.state.kernelDepth--,()=>{!this.ENV.getBool(`DEBUG`)&&!this.state.profiling?t=o():(f=this.profiler.profileKernel(c,l,()=>o()),this.ENV.getBool(`DEBUG`)&&this.profiler.logKernelProfile(f),t=f.outputs)}),r&&this.addTapeNode(c,l,t,d,n,u),this.state.profiling&&this.state.activeProfile.kernels.push({name:c,bytesAdded:this.state.numBytes-i,totalBytesSnapshot:this.state.numBytes,tensorsAdded:this.state.numTensors-a,totalTensorsSnapshot:this.state.numTensors,inputShapes:Object.keys(l).map(e=>l[e]==null?null:l[e].shape),outputShapes:t.map(e=>e.shape),kernelTimeMs:f.timeMs,extraInfo:f.extraInfo}),Array.isArray(s)?t:t[0]}saveTensorsForBackwardMode(e){return e.map(e=>this.keep(this.clone(e)))}getTensorsForGradient(e,t,n){let r=Ur(e);if(r!=null){let e=r.inputsToSave||[],i=r.outputsToSave||[],a;r.saveAllInputs?(y(Array.isArray(t),()=>`saveAllInputs is true, expected inputs to be an array.`),a=Object.keys(t).map(e=>t[e])):a=e.map(e=>t[e]);let o=n.filter((e,t)=>i[t]);return a.concat(o)}return[]}makeTensor(e,t,n,r){if(e==null)throw Error(`Values passed to engine.makeTensor() are null`);n||=`float32`,r||=this.backend;let i=e;n===`string`&&he(e[0])&&(i=e.map(e=>Ei(e)));let a=r.write(i,t,n),o=new Xi(t,n,a,this.nextTensorId());if(this.trackTensor(o,r),n===`string`){let e=this.state.tensorInfo.get(a),t=me(i);this.state.numBytes+=t-e.bytes,e.bytes=t}return o}makeTensorFromDataId(e,t,n,r){n||=`float32`;let i={dataId:e,shape:t,dtype:n};return this.makeTensorFromTensorInfo(i,r)}makeTensorFromTensorInfo(e,t){let{dataId:n,shape:r,dtype:i}=e,a=new Xi(r,i,n,this.nextTensorId());return this.trackTensor(a,t),a}makeVariable(e,t=!0,n,r){n||=this.nextVariableId().toString(),r!=null&&r!==e.dtype&&(e=e.cast(r));let i=new Zi(e,t,n,this.nextTensorId());if(this.state.registeredVariables[i.name]!=null)throw Error(`Variable with name ${i.name} was already registered`);return this.state.registeredVariables[i.name]=i,this.incRef(i,this.backend),i}trackTensor(e,t){this.state.numTensors++,e.dtype===`string`&&this.state.numStringTensors++;let n=0;e.dtype!==`complex64`&&e.dtype!==`string`&&(n=e.size*pe(e.dtype)),this.state.numBytes+=n,this.state.tensorInfo.has(e.dataId)||(this.state.numDataBuffers++,this.state.tensorInfo.set(e.dataId,{backend:t||this.backend,dtype:e.dtype,shape:e.shape,bytes:n})),e instanceof Zi||this.track(e)}incRef(e,t){this.trackTensor(e,t),this.backend.incRef(e.dataId)}removeDataId(e,t){this.state.tensorInfo.has(e)&&this.state.tensorInfo.get(e).backend===t&&(this.state.tensorInfo.delete(e),this.state.numDataBuffers--)}disposeTensor(e){if(!this.state.tensorInfo.has(e.dataId))return;let t=this.state.tensorInfo.get(e.dataId);if(this.state.numTensors--,e.dtype===`string`&&(this.state.numStringTensors--,this.state.numBytes-=t.bytes),e.dtype!==`complex64`&&e.dtype!==`string`){let t=e.size*pe(e.dtype);this.state.numBytes-=t}t.backend.disposeData(e.dataId)&&this.removeDataId(e.dataId,t.backend)}disposeVariables(){for(let e in this.state.registeredVariables){let t=this.state.registeredVariables[e];this.disposeVariable(t)}}disposeVariable(e){this.disposeTensor(e),this.state.registeredVariables[e.name]!=null&&delete this.state.registeredVariables[e.name]}memory(){let e=this.backend.memory();return e.numTensors=this.state.numTensors,e.numDataBuffers=this.state.numDataBuffers,e.numBytes=this.state.numBytes,this.state.numStringTensors>0&&(e.unreliable=!0,e.reasons??=[],e.reasons.push(`Memory usage by string tensors is approximate (2 bytes per character)`)),e}async profile(e){this.state.profiling=!0;let t=this.state.numBytes,n=this.state.numTensors;this.state.activeProfile.kernels=[],this.state.activeProfile.result=await e(),this.state.profiling=!1,this.state.activeProfile.peakBytes=Math.max(...this.state.activeProfile.kernels.map(e=>e.totalBytesSnapshot)),this.state.activeProfile.newBytes=this.state.numBytes-t,this.state.activeProfile.newTensors=this.state.numTensors-n;for(let e of this.state.activeProfile.kernels)e.kernelTimeMs=await e.kernelTimeMs,e.extraInfo=await e.extraInfo;return this.state.activeProfile}isTapeOn(){return this.state.gradientDepth>0&&this.state.kernelDepth===0}addTapeNode(e,t,n,r,i,a){let o={id:this.state.nextTapeNodeId++,kernelName:e,inputs:t,outputs:n,saved:i},s=Ur(e);s!=null&&(r=s.gradFunc),r!=null&&(o.gradient=e=>(e=e.map((e,t)=>{if(e==null){let e=n[t],r=Te(e.size,e.dtype);return this.makeTensor(r,e.shape,e.dtype)}return e}),r(e.length>1?e:e[0],i,a))),this.state.activeTape.push(o)}keep(e){return e.kept=!0,e}startTape(){this.state.gradientDepth===0&&(this.state.activeTape=[]),this.state.gradientDepth++}endTape(){this.state.gradientDepth--}startScope(e){let t={track:[],name:`unnamed scope`,id:this.state.nextScopeId++};e&&(t.name=e),this.state.scopeStack.push(t),this.state.activeScope=t}endScope(e){let t=da(e),n=new Set(t.map(e=>e.id));for(let e=0;e<this.state.activeScope.track.length;e++){let t=this.state.activeScope.track[e];!t.kept&&!n.has(t.id)&&t.dispose()}let r=this.state.scopeStack.pop();this.state.activeScope=this.state.scopeStack.length===0?null:this.state.scopeStack[this.state.scopeStack.length-1],t.forEach(e=>{!e.kept&&e.scopeId===r.id&&this.track(e)})}gradients(e,t,n,r=!1){if(y(t.length>0,()=>`gradients() received an empty list of xs.`),n!=null&&n.dtype!==`float32`)throw Error(`dy must have 'float32' dtype, but has '${n.dtype}'`);let i=this.scopedRun(()=>this.startTape(),()=>this.endTape(),()=>this.tidy(`forward`,e));y(i instanceof Xi,()=>`The result y returned by f() must be a tensor.`);let a=Mi(this.state.activeTape,t,i);if(!r&&a.length===0&&t.length>0)throw Error(`Cannot compute gradient of y=f(x) with respect to x. Make sure that the f you passed encloses all operations that lead from x to y.`);return this.tidy(`backward`,()=>{let e={};e[i.id]=n??ga(i.shape),Ni(e,a,e=>this.tidy(e),va);let r=t.map(t=>e[t.id]);return this.state.gradientDepth===0&&(this.state.activeTape.forEach(e=>{for(let t of e.saved)t.dispose()}),this.state.activeTape=null),{value:i,grads:r}})}customGrad(e){return y(ye(e),()=>`The f passed in customGrad(f) must be a function.`),(...t)=>{y(t.every(e=>e instanceof Xi),()=>`The args passed in customGrad(f)(x1, x2,...) must all be tensors`);let n,r={};return t.forEach((e,t)=>{r[t]=e}),this.runKernelFunc({forwardFunc:(r,i)=>(n=e(...t,i),y(n.value instanceof Xi,()=>"The function f passed in customGrad(f) must return an object where `obj.value` is a tensor"),y(ye(n.gradFunc),()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function."),n.value),backwardsFunc:(e,r)=>{let i=n.gradFunc(e,r),a=Array.isArray(i)?i:[i];y(a.length===t.length,()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns the same number of tensors as inputs passed to f(...)."),y(a.every(e=>e instanceof Xi),()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns a list of only tensors.");let o={};return a.forEach((e,t)=>{o[t]=()=>e}),o},inputs:r})}}readSync(e){return this.state.tensorInfo.get(e).backend.readSync(e)}read(e){return this.state.tensorInfo.get(e).backend.read(e)}readToGPU(e,t){return this.state.tensorInfo.get(e).backend.readToGPU(e,t)}async time(e){let t=wi(),n=await this.backend.time(e);return n.wallMs=wi()-t,n}track(e){return this.state.activeScope!=null&&(e.scopeId=this.state.activeScope.id,this.state.activeScope.track.push(e)),e}get registeredVariables(){return this.state.registeredVariables}reset(){this.pendingBackendInitId++,this.state.dispose(),this.ENV.reset(),this.state=new ya;for(let e in this.registry)this.disposeRegisteredKernels(e),this.registry[e].dispose(),delete this.registry[e];this.backendName=null,this.backendInstance=null,this.pendingBackendInit=null}},ba.nextTensorId=0,ba.nextVariableId=0,N=_a()})),xa=r({isBrowser:()=>Ta,isMobile:()=>wa,mockIsMobile:()=>Ca});function Sa(){return typeof navigator<`u`&&navigator!=null}function Ca(e){Ea=e}function wa(e){if(Ea!==void 0)return Ea;if(e||Sa()){if(e||=navigator,e.product===`ReactNative`)return!0;let t=e.userAgent||e.vendor||(typeof window<`u`?window.opera:``);if(!t){let t=e;return t.userAgentData&&t.userAgentData.mobile}return/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(t)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0,4))}return!1}function Ta(){return typeof window<`u`&&window.document!=null||typeof WorkerGlobalScope<`u`}var Ea,Da=n((()=>{})),Oa,ka=n((()=>{P(),Da(),ze(),Oa=O(),Oa.registerFlag(`DEBUG`,()=>!1,e=>{e&&console.warn(`Debugging mode is ON. The output of every math call will be downloaded to CPU and checked for NaNs. This significantly impacts performance.`)}),Oa.registerFlag(`IS_BROWSER`,()=>Ta()),Oa.registerFlag(`IS_NODE`,()=>typeof process<`u`&&process.versions!==void 0&&process.versions.node!==void 0),Oa.registerFlag(`IS_CHROME`,()=>typeof navigator<`u`&&navigator!=null&&navigator.userAgent!=null&&/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor)),Oa.registerFlag(`PROD`,()=>!1),Oa.registerFlag(`TENSORLIKE_CHECK_SHAPE_CONSISTENCY`,()=>Oa.getBool(`DEBUG`)),Oa.registerFlag(`DEPRECATION_WARNINGS_ENABLED`,()=>!0),Oa.registerFlag(`IS_TEST`,()=>!1),Oa.registerFlag(`CHECK_COMPUTATION_FOR_ERRORS`,()=>!0),Oa.registerFlag(`WRAP_TO_IMAGEBITMAP`,()=>!1),Oa.registerFlag(`CANVAS2D_WILL_READ_FREQUENTLY_FOR_GPU`,()=>!1),Oa.registerFlag(`USE_SETTIMEOUTCUSTOM`,()=>!1)}));function Aa(e,t){let n=e;if(fe(e))return t===`string`?[]:[e.length];if(typeof e==`object`&&`texture`in e){let t=e.channels||`RGBA`;return[e.height,e.width*t.length]}if(!Array.isArray(e))return[];let r=[];for(;Array.isArray(n)||fe(n)&&t!==`string`;)r.push(n.length),n=n[0];return Array.isArray(e)&&O().getBool(`TENSORLIKE_CHECK_SHAPE_CONSISTENCY`)&&ja(e,r,[]),r}function ja(e,t,n){if(n||=[],!Array.isArray(e)&&!fe(e)){y(t.length===0,()=>`Element arr[${n.join(`][`)}] is a primitive, but should be an array/TypedArray of ${t[0]} elements`);return}y(t.length>0,()=>`Element arr[${n.join(`][`)}] should be a primitive, but is an array of ${e.length} elements`),y(e.length===t[0],()=>`Element arr[${n.join(`][`)}] should have ${t[0]} elements, but has ${e.length} elements`);let r=t.slice(1);for(let t=0;t<e.length;++t)ja(e[t],r,n.concat(t))}function Ma(e,t,n,r){if(e!==`string_or_numeric`){if(e==null)throw Error(`Expected dtype cannot be null.`);if(e!==`numeric`&&e!==t||e===`numeric`&&t===`string`)throw Error(`Argument '${n}' passed to '${r}' must be ${e} tensor, but got ${t} tensor`)}}function F(e,t,n,r=`numeric`){if(e instanceof Xi)return Ma(r,e.dtype,t,n),e;let i=ve(e);if(i!==`string`&&[`bool`,`int32`,`float32`].indexOf(r)>=0&&(i=r),Ma(r,i,t,n),e==null||!fe(e)&&!Array.isArray(e)&&typeof e!=`number`&&typeof e!=`boolean`&&typeof e!=`string`){let r=e==null?`null`:e.constructor.name;throw Error(`Argument '${t}' passed to '${n}' must be a Tensor or TensorLike, but got '${r}'`)}let a=Aa(e,i);!fe(e)&&!Array.isArray(e)&&(e=[e]);let o=i===`string`?S(e,[],!0):Ci(e,i);return N.makeTensor(o,a,i)}function Na(e,t,n,r=`numeric`){if(!Array.isArray(e))throw Error(`Argument ${t} passed to ${n} must be a \`Tensor[]\` or \`TensorLike[]\``);return e.map((e,i)=>F(e,`${t}[${i}]`,n,r))}var I=n((()=>{P(),ze(),M(),A()}));function L(e){let t=Object.keys(e);if(t.length!==1)throw Error(`Please provide an object with a single key (operation name) mapping to a function. Got an object with ${t.length} keys.`);let n=t[0],r=e[n];n.endsWith(`_`)&&(n=n.substring(0,n.length-1)),n+=Pa;let i=(...e)=>{N.startScope(n);try{let t=r(...e);return Ae(t)&&console.error(`Cannot return a Promise inside of tidy.`),N.endScope(t),t}catch(e){throw N.endScope(null),e}};return Object.defineProperty(i,"name",{value:n,configurable:!0}),i}var Pa,R=n((()=>{P(),A(),Pa=`__op`}));function Fa(e,t){let n=F(e,`real`,`complex`),r=F(t,`imag`,`complex`);b(n.shape,r.shape,`real and imag shapes, ${n.shape} and ${r.shape}, must match in call to tf.complex().`);let i={real:n,imag:r};return N.runKernel(pt,i)}var Ia,La=n((()=>{P(),k(),I(),A(),R(),Ia=L({complex_:Fa})}));function Ra(e,t,n,r){if(r??=ve(e),r===`complex64`)throw Error(`Cannot construct a complex64 tensor directly. Please use tf.complex(real, imag).`);if(typeof e==`object`&&`texture`in e){if(r!==`float32`&&r!==`int32`)throw Error(`Creating tensor from texture only supports 'float32'|'int32' dtype, while the dtype is ${r}.`);return e.channels=e.channels||`RGBA`,N.backend.createTensorFromTexture(e,t||n,r)}if(!fe(e)&&!Array.isArray(e)&&typeof e!=`number`&&typeof e!=`boolean`&&typeof e!=`string`)throw Error(`values passed to tensor(values) must be a number/boolean/string or an array of numbers/booleans/strings, or a TypedArray`);if(t!=null){De(t);let e=C(t),r=C(n);y(e===r,()=>`Based on the provided shape, [${t}], the tensor should have ${e} values but has ${r}`);for(let e=0;e<n.length;++e){let r=n[e],i=e!==n.length-1||r!==C(t.slice(e));y(n[e]===t[e]||!i,()=>`Error creating a new Tensor. Inferred shape (${n}) does not match the provided shape (${t}). `)}}return!fe(e)&&!Array.isArray(e)&&(e=[e]),t||=n,e=r===`string`?S(e,[],!0):Ci(e,r),N.makeTensor(e,t,r)}var za=n((()=>{P(),A()}));function Ba(e,t,n){return Ra(e,t,Aa(e,n),n)}var Va=n((()=>{I(),za()})),Ha,Ua=n((()=>{Ha={float32:4,float16:2,int32:4,uint16:2,uint8:1,bool:1,complex64:8}}));async function Wa(e,t){let n=[],r=[],i=Array.isArray(e)?e.map(e=>e.name):Object.keys(e);for(let a=0;a<i.length;++a){let o=i[a],s=Array.isArray(e)?e[a].tensor:e[o];if(s.dtype!==`float32`&&s.dtype!==`int32`&&s.dtype!==`bool`&&s.dtype!==`string`&&s.dtype!==`complex64`)throw Error(`Unsupported dtype in weight '${o}': ${s.dtype}`);let c={name:o,shape:s.shape,dtype:s.dtype};if(s.dtype===`string`){let e=new Promise(async e=>{let t=await s.bytes(),n=t.reduce((e,t)=>e+t.length,0)+so*t.length,r=new Uint8Array(n),i=0;for(let e=0;e<t.length;e++){let n=t[e],a=new Uint8Array(new Uint32Array([n.length]).buffer);r.set(a,i),i+=so,r.set(n,i),i+=n.length}e(r)});r.push(e)}else r.push(s.data());t!=null&&(c.group=t),n.push(c)}return{data:Ka(await Promise.all(r)),specs:n}}function Ga(e,t){let n={},r,i=0;for(let a of t){let t=a.name,o=a.dtype,s=a.shape,c=C(s),l;if(`quantization`in a){let n=a.quantization;if(n.dtype===`uint8`||n.dtype===`uint16`){if(!(`min`in n&&`scale`in n))throw Error(`Weight ${a.name} with quantization ${n.dtype} doesn't have corresponding metadata min and scale.`)}else if(n.dtype===`float16`){if(o!==`float32`)throw Error(`Weight ${a.name} is quantized with ${n.dtype} which only supports weights of type float32 not ${o}.`)}else throw Error(`Weight ${a.name} has unknown quantization dtype ${n.dtype}. Supported quantization dtypes are: 'uint8', 'uint16', and 'float16'.`);let s=Ha[n.dtype],u=e.slice(i,i+c*s),d=n.dtype===`uint8`?new Uint8Array(u):new Uint16Array(u);if(o===`float32`){if(n.dtype===`uint8`||n.dtype===`uint16`){l=new Float32Array(d.length);for(let e=0;e<d.length;e++){let t=d[e];l[e]=t*n.scale+n.min}}else if(n.dtype===`float16`)r===void 0&&(r=oo()),l=r(d);else throw Error(`Unsupported quantization type ${n.dtype} for weight type float32.`)}else if(o===`int32`){if(n.dtype!==`uint8`&&n.dtype!==`uint16`)throw Error(`Unsupported quantization type ${n.dtype} for weight type int32.`);l=new Int32Array(d.length);for(let e=0;e<d.length;e++){let t=d[e];l[e]=Math.round(t*n.scale+n.min)}}else throw Error(`Unsupported dtype in weight '${t}': ${o}`);i+=c*s}else if(o===`string`){let t=C(a.shape);l=[];for(let n=0;n<t;n++){let t=new Uint32Array(e.slice(i,i+so))[0];i+=so;let n=new Uint8Array(e.slice(i,i+t));l.push(n),i+=t}}else{let r=Ha[o],a=e.slice(i,i+c*r);if(o===`float32`)l=new Float32Array(a);else if(o===`int32`)l=new Int32Array(a);else if(o===`bool`)l=new Uint8Array(a);else if(o===`complex64`){l=new Float32Array(a);let e=new Float32Array(l.length/2),r=new Float32Array(l.length/2);for(let t=0;t<e.length;t++)e[t]=l[t*2],r[t]=l[t*2+1];let i=Ba(e,s,`float32`),o=Ba(r,s,`float32`);n[t]=Ia(i,o),i.dispose(),o.dispose()}else throw Error(`Unsupported dtype in weight '${t}': ${o}`);i+=c*r}o!==`complex64`&&(n[t]=Ba(l,s,o))}return n}function Ka(e){if(e===null)throw Error(`Invalid input value: ${JSON.stringify(e)}`);let t=0,n=[];e.forEach(e=>{if(t+=e.byteLength,n.push(e.byteLength===e.buffer.byteLength?e:new e.constructor(e)),!(e instanceof Float32Array||e instanceof Int32Array||e instanceof Uint8Array))throw Error(`Unsupported TypedArray subtype: ${e.constructor.name}`)});let r=new Uint8Array(t),i=0;return n.forEach(e=>{r.set(new Uint8Array(e.buffer),i),i+=e.byteLength}),r.buffer}function qa(e){return co?Buffer.byteLength(e):new Blob([e]).size}function Ja(e){if(co)return Buffer.from(e).toString(`base64`);let t=new Uint8Array(e),n=``;for(let e=0,r=t.length;e<r;e++)n+=String.fromCharCode(t[e]);return btoa(n)}function Ya(e){if(co){let t=Buffer.from(e,`base64`);return t.buffer.slice(t.byteOffset,t.byteOffset+t.byteLength)}let t=atob(e),n=new Uint8Array(t.length);for(let e=0;e<t.length;++e)n.set([t.charCodeAt(e)],e);return n.buffer}function Xa(e){if(e.length===1)return e[0];let t=0;e.forEach(e=>{t+=e.byteLength});let n=new Uint8Array(t),r=0;return e.forEach(e=>{n.set(new Uint8Array(e),r),r+=e.byteLength}),n.buffer}function Za(e){for(e=e.trim();e.endsWith(`/`);)e=e.slice(0,e.length-1);let t=e.split(`/`);return t[t.length-1]}function Qa(e,t){let n={modelTopology:e.modelTopology,format:e.format,generatedBy:e.generatedBy,convertedBy:e.convertedBy,weightsManifest:t};return e.signature!=null&&(n.signature=e.signature),e.userDefinedMetadata!=null&&(n.userDefinedMetadata=e.userDefinedMetadata),e.modelInitializer!=null&&(n.modelInitializer=e.modelInitializer),e.initializerSignature!=null&&(n.initializerSignature=e.initializerSignature),e.trainingConfig!=null&&(n.trainingConfig=e.trainingConfig),n}function $a(e,t,n){let r={modelTopology:e.modelTopology,format:e.format,generatedBy:e.generatedBy,convertedBy:e.convertedBy};if(e.trainingConfig!=null&&(r.trainingConfig=e.trainingConfig),e.weightsManifest!=null){if(!t)throw Error(`modelJSON has weightsManifest but weightSpecs is null`);if(!n)throw Error(`modelJSON has weightsManifest but weightData is null`);r.weightSpecs=t,r.weightData=n}return e.signature!=null&&(r.signature=e.signature),e.userDefinedMetadata!=null&&(r.userDefinedMetadata=e.userDefinedMetadata),e.modelInitializer!=null&&(r.modelInitializer=e.modelInitializer),e.initializerSignature!=null&&(r.initializerSignature=e.initializerSignature),r}async function eo(e,t){let n,r;return e.weightsManifest!=null&&([n,r]=await t(e.weightsManifest)),$a(e,n,r)}function to(e){if(e.modelTopology instanceof ArrayBuffer)throw Error(`Expected JSON model topology, received ArrayBuffer.`);return{dateSaved:new Date,modelTopologyType:`JSON`,modelTopologyBytes:e.modelTopology==null?0:qa(JSON.stringify(e.modelTopology)),weightSpecsBytes:e.weightSpecs==null?0:qa(JSON.stringify(e.weightSpecs)),weightDataBytes:e.weightData==null?0:e.weightData.byteLength}}function no(e){let t=[];for(let n of e)t.push(...n.weights);return t}function ro(){let e=e=>{let t=e<<13,n=0;for(;!(t&8388608);)n-=8388608,t<<=1;return t&=-8388609,n+=947912704,t|n},t=new Uint32Array(2048);t[0]=0;for(let n=1;n<1024;n++)t[n]=e(n);for(let e=1024;e<2048;e++)t[e]=939524096+(e-1024<<13);return t}function io(){let e=new Uint32Array(64);e[0]=0,e[31]=1199570944,e[32]=2147483648,e[63]=3347054592;for(let t=1;t<31;t++)e[t]=t<<23;for(let t=33;t<63;t++)e[t]=2147483648+(t-32<<23);return e}function ao(){let e=new Uint32Array(64);for(let t=0;t<64;t++)e[t]=1024;return e[0]=e[32]=0,e}function oo(){let e=ro(),t=io(),n=ao();return r=>{let i=new ArrayBuffer(4*r.length),a=new Uint32Array(i);for(let i=0;i<r.length;i++){let o=r[i],s=e[n[o>>10]+(o&1023)]+t[o>>10];a[i]=s}return new Float32Array(i)}}var so,co,lo=n((()=>{La(),Va(),A(),Ua(),so=4,co=typeof Buffer<`u`&&(typeof Blob>`u`||typeof atob>`u`||typeof btoa>`u`)})),uo,fo,po,mo,ho,go=n((()=>{uo=class e{constructor(){this.saveRouters=[],this.loadRouters=[]}static getInstance(){return e.instance??=new e,e.instance}static registerSaveRouter(t){e.getInstance().saveRouters.push(t)}static registerLoadRouter(t){e.getInstance().loadRouters.push(t)}static getSaveHandlers(t){return e.getHandlers(t,`save`)}static getLoadHandlers(t,n){return e.getHandlers(t,`load`,n)}static getHandlers(t,n,r){let i=[];return(n===`load`?e.getInstance().loadRouters:e.getInstance().saveRouters).forEach(e=>{let n=e(t,r);n!==null&&i.push(n)}),i}},fo=e=>uo.registerSaveRouter(e),po=e=>uo.registerLoadRouter(e),mo=e=>uo.getSaveHandlers(e),ho=(e,t)=>uo.getLoadHandlers(e,t)}));function _o(){if(!O().getBool(`IS_BROWSER`))throw Error(`Failed to obtain IndexedDB factory because the current environmentis not a web browser.`);let e=typeof window>`u`?self:window,t=e.indexedDB||e.mozIndexedDB||e.webkitIndexedDB||e.msIndexedDB||e.shimIndexedDB;if(t==null)throw Error(`The current browser does not appear to support IndexedDB.`);return t}function vo(e){let t=e.result;t.createObjectStore(Co,{keyPath:`modelPath`}),t.createObjectStore(wo,{keyPath:`modelPath`})}function yo(e){return new To(e)}function bo(e){return e.startsWith(To.URL_SCHEME)?e.slice(To.URL_SCHEME.length):e}var xo,So,Co,wo,To,Eo,Do,Oo=n((()=>{ka(),ze(),lo(),go(),xo=`tensorflowjs`,So=1,Co=`models_store`,wo=`model_info_store`,To=class{constructor(e){if(this.indexedDB=_o(),e==null||!e)throw Error(`For IndexedDB, modelPath must not be null, undefined or empty.`);this.modelPath=e}async save(e){if(e.modelTopology instanceof ArrayBuffer)throw Error(`BrowserLocalStorage.save() does not support saving model topology in binary formats yet.`);return this.databaseAction(this.modelPath,e)}async load(){return this.databaseAction(this.modelPath)}databaseAction(e,t){return new Promise((e,n)=>{let r=this.indexedDB.open(xo,So);r.onupgradeneeded=()=>vo(r),r.onsuccess=()=>{let i=r.result;if(t==null){let t=i.transaction(Co,`readonly`),r=t.objectStore(Co).get(this.modelPath);r.onsuccess=()=>{if(r.result==null)return i.close(),n(Error(`Cannot find model with path '${this.modelPath}' in IndexedDB.`));e(r.result.modelArtifacts)},r.onerror=e=>(i.close(),n(r.error)),t.oncomplete=()=>i.close()}else{let r=to(t),a=i.transaction(wo,`readwrite`),o=a.objectStore(wo),s=o.put({modelPath:this.modelPath,modelArtifactsInfo:r}),c;s.onsuccess=()=>{c=i.transaction(Co,`readwrite`);let s=c.objectStore(Co).put({modelPath:this.modelPath,modelArtifacts:t,modelArtifactsInfo:r});s.onsuccess=()=>e({modelArtifactsInfo:r}),s.onerror=e=>{o=a.objectStore(wo);let t=o.delete(this.modelPath);t.onsuccess=()=>(i.close(),n(s.error)),t.onerror=e=>(i.close(),n(s.error))}},s.onerror=e=>(i.close(),n(s.error)),a.oncomplete=()=>{c==null?i.close():c.oncomplete=()=>i.close()}}},r.onerror=e=>n(r.error)})}},To.URL_SCHEME=`indexeddb://`,Eo=e=>O().getBool(`IS_BROWSER`)&&!Array.isArray(e)&&e.startsWith(To.URL_SCHEME)?yo(e.slice(To.URL_SCHEME.length)):null,uo.registerSaveRouter(Eo),uo.registerLoadRouter(Eo),Do=class{constructor(){this.indexedDB=_o()}async listModels(){return new Promise((e,t)=>{let n=this.indexedDB.open(xo,So);n.onupgradeneeded=()=>vo(n),n.onsuccess=()=>{let r=n.result,i=r.transaction(wo,`readonly`),a=i.objectStore(wo).getAll();a.onsuccess=()=>{let t={};for(let e of a.result)t[e.modelPath]=e.modelArtifactsInfo;e(t)},a.onerror=e=>(r.close(),t(a.error)),i.oncomplete=()=>r.close()},n.onerror=e=>t(n.error)})}async removeModel(e){return e=bo(e),new Promise((t,n)=>{let r=this.indexedDB.open(xo,So);r.onupgradeneeded=()=>vo(r),r.onsuccess=()=>{let i=r.result,a=i.transaction(wo,`readwrite`),o=a.objectStore(wo),s=o.get(e),c;s.onsuccess=()=>{if(s.result==null)return i.close(),n(Error(`Cannot find model with path '${e}' in IndexedDB.`));{let r=o.delete(e),a=()=>{c=i.transaction(Co,`readwrite`);let r=c.objectStore(Co).delete(e);r.onsuccess=()=>t(s.result.modelArtifactsInfo),r.onerror=e=>n(s.error)};r.onsuccess=a,r.onerror=e=>(a(),i.close(),n(s.error))}},s.onerror=e=>(i.close(),n(s.error)),a.oncomplete=()=>{c==null?i.close():c.oncomplete=()=>i.close()}},r.onerror=e=>n(r.error)})}}}));function ko(e){return{info:[Fo,e,Io].join(Po),topology:[Fo,e,Lo].join(Po),weightSpecs:[Fo,e,Ro].join(Po),weightData:[Fo,e,zo].join(Po),modelMetadata:[Fo,e,Bo].join(Po)}}function Ao(e){for(let t of Object.values(e))window.localStorage.removeItem(t)}function jo(e){let t=e.split(Po);if(t.length<3)throw Error(`Invalid key format: ${e}`);return t.slice(1,t.length-1).join(Po)}function Mo(e){return e.startsWith(Vo.URL_SCHEME)?e.slice(Vo.URL_SCHEME.length):e}function No(e){return new Vo(e)}var Po,Fo,Io,Lo,Ro,zo,Bo,Vo,Ho,Uo,Wo=n((()=>{ka(),ze(),A(),lo(),go(),Po=`/`,Fo=`tensorflowjs_models`,Io=`info`,Lo=`model_topology`,Ro=`weight_specs`,zo=`weight_data`,Bo=`model_metadata`,Vo=class{constructor(e){if(!O().getBool(`IS_BROWSER`)||typeof window>`u`||window.localStorage===void 0)throw Error(`The current environment does not support local storage.`);if(this.LS=window.localStorage,e==null||!e)throw Error(`For local storage, modelPath must not be null, undefined or empty.`);this.modelPath=e,this.keys=ko(this.modelPath)}async save(e){if(e.modelTopology instanceof ArrayBuffer)throw Error(`BrowserLocalStorage.save() does not support saving model topology in binary formats yet.`);{let t=JSON.stringify(e.modelTopology),n=JSON.stringify(e.weightSpecs),r=to(e);try{this.LS.setItem(this.keys.info,JSON.stringify(r)),this.LS.setItem(this.keys.topology,t),this.LS.setItem(this.keys.weightSpecs,n),this.LS.setItem(this.keys.weightData,Ja(e.weightData));let i={format:e.format,generatedBy:e.generatedBy,convertedBy:e.convertedBy,signature:e.signature==null?void 0:e.signature,userDefinedMetadata:e.userDefinedMetadata==null?void 0:e.userDefinedMetadata,modelInitializer:e.modelInitializer==null?void 0:e.modelInitializer,initializerSignature:e.initializerSignature==null?void 0:e.initializerSignature,trainingConfig:e.trainingConfig==null?void 0:e.trainingConfig};return this.LS.setItem(this.keys.modelMetadata,JSON.stringify(i)),{modelArtifactsInfo:r}}catch{throw Ao(this.keys),Error(`Failed to save model '${this.modelPath}' to local storage: size quota being exceeded is a possible cause of this failure: modelTopologyBytes=${r.modelTopologyBytes}, weightSpecsBytes=${r.weightSpecsBytes}, weightDataBytes=${r.weightDataBytes}.`)}}}async load(){let e=JSON.parse(this.LS.getItem(this.keys.info));if(e==null)throw Error(`In local storage, there is no model with name '${this.modelPath}'`);if(e.modelTopologyType!==`JSON`)throw Error(`BrowserLocalStorage does not support loading non-JSON model topology yet.`);let t={},n=JSON.parse(this.LS.getItem(this.keys.topology));if(n==null)throw Error(`In local storage, the topology of model '${this.modelPath}' is missing.`);t.modelTopology=n;let r=JSON.parse(this.LS.getItem(this.keys.weightSpecs));if(r==null)throw Error(`In local storage, the weight specs of model '${this.modelPath}' are missing.`);t.weightSpecs=r;let i=this.LS.getItem(this.keys.modelMetadata);if(i!=null){let e=JSON.parse(i);t.format=e.format,t.generatedBy=e.generatedBy,t.convertedBy=e.convertedBy,e.signature!=null&&(t.signature=e.signature),e.userDefinedMetadata!=null&&(t.userDefinedMetadata=e.userDefinedMetadata),e.modelInitializer!=null&&(t.modelInitializer=e.modelInitializer),e.initializerSignature!=null&&(t.initializerSignature=e.initializerSignature),e.trainingConfig!=null&&(t.trainingConfig=e.trainingConfig)}let a=this.LS.getItem(this.keys.weightData);if(a==null)throw Error(`In local storage, the binary weight values of model '${this.modelPath}' are missing.`);return t.weightData=Ya(a),t}},Vo.URL_SCHEME=`localstorage://`,Ho=e=>O().getBool(`IS_BROWSER`)&&!Array.isArray(e)&&e.startsWith(Vo.URL_SCHEME)?No(e.slice(Vo.URL_SCHEME.length)):null,uo.registerSaveRouter(Ho),uo.registerLoadRouter(Ho),Uo=class{constructor(){y(O().getBool(`IS_BROWSER`),()=>`Current environment is not a web browser`),y(typeof window>`u`||window.localStorage!==void 0,()=>`Current browser does not appear to support localStorage`),this.LS=window.localStorage}async listModels(){let e={};for(let t=0;t<this.LS.length;++t){let n=this.LS.key(t);if(n.startsWith(`tensorflowjs_models/`)&&n.endsWith(`/info`)){let t=jo(n);e[t]=JSON.parse(this.LS.getItem(n))}}return e}async removeModel(e){e=Mo(e);let t=ko(e);if(this.LS.getItem(t.info)==null)throw Error(`Cannot find model at path '${e}'`);let n=JSON.parse(this.LS.getItem(t.info));return Ao(t),n}}}));function Go(e){if(e.indexOf(Zo)===-1)throw Error(`The url string provided does not contain a scheme. Supported schemes are: ${Qo.getSchemes().join(`,`)}`);return{scheme:e.split(Zo)[0],path:e.split(Zo)[1]}}async function Ko(e,t,n=!1){y(e!==t,()=>`Old path and new path are the same: '${e}'`);let r=uo.getLoadHandlers(e);y(r.length>0,()=>`Copying failed because no load handler is found for source URL ${e}.`),y(r.length<2,()=>`Copying failed because more than one (${r.length}) load handlers for source URL ${e}.`);let i=r[0],a=uo.getSaveHandlers(t);y(a.length>0,()=>`Copying failed because no save handler is found for destination URL ${t}.`),y(a.length<2,()=>`Copying failed because more than one (${r.length}) save handlers for destination URL ${t}.`);let o=a[0],s=Go(e).scheme,c=Go(e).path,l=s===Go(e).scheme,u=await i.load();n&&l&&await Qo.getManager(s).removeModel(c);let d=await o.save(u);return n&&!l&&await Qo.getManager(s).removeModel(c),d.modelArtifactsInfo}async function qo(){let e=Qo.getSchemes(),t={};for(let n of e){let e=await Qo.getManager(n).listModels();for(let r in e){let i=n+Zo+r;t[i]=e[r]}}return t}async function Jo(e){let t=Go(e);return Qo.getManager(t.scheme).removeModel(t.path)}async function Yo(e,t){return Ko(e,t,!1)}async function Xo(e,t){return Ko(e,t,!0)}var Zo,Qo,$o=n((()=>{A(),go(),Zo=`://`,Qo=class e{constructor(){this.managers={}}static getInstance(){return e.instance??=new e,e.instance}static registerManager(t,n){y(t!=null,()=>`scheme must not be undefined or null.`),t.endsWith(Zo)&&(t=t.slice(0,t.indexOf(Zo))),y(t.length>0,()=>`scheme must not be an empty string.`);let r=e.getInstance();y(r.managers[t]==null,()=>`A model store manager is already registered for scheme '${t}'.`),r.managers[t]=n}static getManager(t){let n=e.getInstance().managers[t];if(n==null)throw Error(`Cannot find model manager for scheme '${t}'`);return n}static getSchemes(){return Object.keys(e.getInstance().managers)}}})),es,ts=n((()=>{if(ka(),ze(),Oo(),Wo(),$o(),es=class{constructor(){this.messageName=`setTimeoutCustom`,this.functionRefs=[],this.handledMessageCount=0,this.hasEventListener=!1}fetch(e,t){return fetch(e,t)}now(){return performance.now()}encode(e,t){if(t!==`utf-8`&&t!==`utf8`)throw Error(`Browser's encoder only supports utf-8, but got ${t}`);return this.textEncoder??=new TextEncoder,this.textEncoder.encode(e)}decode(e,t){return new TextDecoder(t).decode(e)}setTimeoutCustom(e,t){typeof window>`u`||!O().getBool(`USE_SETTIMEOUTCUSTOM`)?setTimeout(e,t):(this.functionRefs.push(e),setTimeout(()=>{window.postMessage({name:this.messageName,index:this.functionRefs.length-1},`*`)},t),this.hasEventListener||(this.hasEventListener=!0,window.addEventListener(`message`,e=>{if(e.source===window&&e.data.name===this.messageName){e.stopPropagation();let t=this.functionRefs[e.data.index];t(),this.handledMessageCount++,this.handledMessageCount===this.functionRefs.length&&(this.functionRefs=[],this.handledMessageCount=0)}},!0)))}},O().get(`IS_BROWSER`)){O().setPlatform(`browser`,new es);try{Qo.registerManager(Vo.URL_SCHEME,new Uo)}catch{}try{Qo.registerManager(To.URL_SCHEME,new Do)}catch{}}})),ns=i(((e,t)=>{t.exports={}})),rs,is,as,os=n((()=>{ze(),rs={importFetch:()=>ns()},as=class{constructor(){this.util=ns(),this.textEncoder=new this.util.TextEncoder}fetch(e,t){return O().global.fetch==null?(is??=rs.importFetch(),is(e,t)):O().global.fetch(e,t)}now(){let e=process.hrtime();return e[0]*1e3+e[1]/1e6}encode(e,t){if(t!==`utf-8`&&t!==`utf8`)throw Error(`Node built-in encoder only supports utf-8, but got ${t}`);return this.textEncoder.encode(e)}decode(e,t){return e.length===0?``:new this.util.TextDecoder(t).decode(e)}},O().get(`IS_NODE`)&&!O().get(`IS_BROWSER`)&&O().setPlatform(`node`,new as)}));function ss(e,t=`float32`,n){return t||=`float32`,De(e),new qi(e,t,n)}var cs=n((()=>{M(),A()}));function ls(e,t){let n=F(e,`x`,`cast`);if(!ue(t))throw Error(`Failed to cast to unknown dtype ${t}`);if(t===`string`&&n.dtype!==`string`||t!==`string`&&n.dtype===`string`)throw Error(`Only strings can be casted to strings`);let r={x:n},i={dtype:t};return N.runKernel(ut,r,i)}var z,us=n((()=>{P(),k(),I(),A(),R(),z=L({cast_:ls})}));function ds(e){let t={x:F(e,`x`,`clone`,`string_or_numeric`)};return N.runKernel(Xt,t)}var fs,ps=n((()=>{P(),k(),I(),R(),fs=L({clone_:ds})}));function ms(e,t=!1){console.log(e.toString(t))}var hs=n((()=>{})),gs=n((()=>{P(),ka(),ts(),os(),cs(),us(),ps(),hs(),M(),_a(),Ki({buffer:ss,cast:z,clone:fs,print:ms})}));function _s(e){return new Promise(e=>setTimeout(e)).then(e)}function vs(e=`model`){return new Cs(e)}function ys(e){return new ws(e)}var bs,xs,Ss,Cs,ws,Ts,Es=n((()=>{ka(),ze(),lo(),go(),bs=`model`,xs=`.json`,Ss=`.weights.bin`,Cs=class e{constructor(t){if(!O().getBool(`IS_BROWSER`))throw Error(`browserDownloads() cannot proceed because the current environment is not a browser.`);t.startsWith(e.URL_SCHEME)&&(t=t.slice(e.URL_SCHEME.length)),(t==null||t.length===0)&&(t=bs),this.modelJsonFileName=t+xs,this.weightDataFileName=t+Ss}async save(e){if(typeof document>`u`)throw Error("Browser downloads are not supported in this environment since `document` is not present");let t=window.URL.createObjectURL(new Blob([e.weightData],{type:`application/octet-stream`}));if(e.modelTopology instanceof ArrayBuffer)throw Error(`BrowserDownloads.save() does not support saving model topology in binary formats yet.`);{let n=Qa(e,[{paths:[`./`+this.weightDataFileName],weights:e.weightSpecs}]),r=window.URL.createObjectURL(new Blob([JSON.stringify(n)],{type:`application/json`})),i=this.modelJsonAnchor==null?document.createElement(`a`):this.modelJsonAnchor;if(i.download=this.modelJsonFileName,i.href=r,await _s(()=>i.dispatchEvent(new MouseEvent(`click`))),e.weightData!=null){let e=this.weightDataAnchor==null?document.createElement(`a`):this.weightDataAnchor;e.download=this.weightDataFileName,e.href=t,await _s(()=>e.dispatchEvent(new MouseEvent(`click`)))}return{modelArtifactsInfo:to(e)}}}},Cs.URL_SCHEME=`downloads://`,ws=class{constructor(e){if(e==null||e.length<1)throw Error(`When calling browserFiles, at least 1 file is required, but received ${e}`);this.jsonFile=e[0],this.weightsFiles=e.slice(1)}async load(){return new Promise((e,t)=>{let n=new FileReader;n.onload=n=>{let r=JSON.parse(n.target.result),i=r.modelTopology;i==null?t(Error(`modelTopology field is missing from file ${this.jsonFile.name}`)):r.weightsManifest==null?t(Error(`weightManifest field is missing from file ${this.jsonFile.name}`)):this.weightsFiles.length===0?e({modelTopology:i}):e(eo(r,e=>this.loadWeights(e)))},n.onerror=e=>t(`Failed to read model topology and weights manifest JSON from file '${this.jsonFile.name}'. BrowserFiles supports loading Keras-style tf.Model artifacts only.`),n.readAsText(this.jsonFile)})}loadWeights(e){let t=[],n=[];for(let r of e)t.push(...r.weights),n.push(...r.paths);let r=this.checkManifestAndWeightFiles(e),i=n.map(e=>this.loadWeightsFile(e,r[e]));return Promise.all(i).then(e=>[t,Xa(e)])}loadWeightsFile(e,t){return new Promise((n,r)=>{let i=new FileReader;i.onload=e=>{let t=e.target.result;n(t)},i.onerror=t=>r(`Failed to weights data from file of path '${e}'.`),i.readAsArrayBuffer(t)})}checkManifestAndWeightFiles(e){let t=[],n=this.weightsFiles.map(e=>Za(e.name)),r={};for(let i of e)i.paths.forEach(e=>{let i=Za(e);if(t.indexOf(i)!==-1)throw Error(`Duplicate file basename found in weights manifest: '${i}'`);if(t.push(i),n.indexOf(i)===-1)throw Error(`Weight file with basename '${i}' is not provided.`);r[e]=this.weightsFiles[n.indexOf(i)]});if(t.length!==this.weightsFiles.length)throw Error(`Mismatch in the number of files in weights manifest (${t.length}) and the number of weight files provided (${this.weightsFiles.length}).`);return r}},Ts=e=>O().getBool(`IS_BROWSER`)&&!Array.isArray(e)&&e.startsWith(Cs.URL_SCHEME)?vs(e.slice(Cs.URL_SCHEME.length)):null,uo.registerSaveRouter(Ts)}));function Ds(e,t,n,r){o(e),n??=0,r??=1,s(n,r);let i=0,a=a=>(a.then(a=>(t(n+ ++i/e.length*(r-n)),a)),a);function o(e){y(e!=null&&Array.isArray(e)&&e.length>0,()=>`promises must be a none empty array`)}function s(e,t){y(e>=0&&e<=1,()=>`Progress fraction must be in range [0, 1], but got startFraction ${e}`),y(t>=0&&t<=1,()=>`Progress fraction must be in range [0, 1], but got endFraction ${t}`),y(t>=e,()=>`startFraction must be no more than endFraction, but got startFraction ${e} and endFraction ${t}`)}return Promise.all(e.map(a))}var Os=n((()=>{A()}));async function ks(e,t){t??={};let n=t.fetchFunc==null?O().platform.fetch:t.fetchFunc,r=e.map(e=>n(e,t.requestInit,{isBinary:!0})),i=(t.onProgress==null?await Promise.all(r):await Ds(r,t.onProgress,0,.5)).map(e=>e.arrayBuffer());return t.onProgress==null?await Promise.all(i):await Ds(i,t.onProgress,.5,1)}async function As(e,t=``,n,r){return js(e=>ks(e,{requestInit:r}))(e,t,n)}function js(e){return async(t,n=``,r)=>{let i=t.map(()=>!1),a={},o=r==null?[]:r.map(()=>!1),s=[];if(t.forEach((e,t)=>{let n=0;e.weights.forEach(e=>{let c=`quantization`in e?e.quantization.dtype:e.dtype,l=Ha[c]*C(e.shape),u=()=>{i[t]=!0,a[t]??(a[t]=[]),a[t].push({manifestEntry:e,groupOffset:n,sizeBytes:l})};r==null?u():r.forEach((t,n)=>{t===e.name&&(u(),o[n]=!0)}),s.push(e.name),n+=l})}),!o.every(e=>e)){let e=r.filter((e,t)=>!o[t]);throw Error(`Could not find weights in manifest with names: ${e.join(`, `)}. \nManifest JSON has weights with names: ${s.join(`, `)}.`)}let c=i.reduce((e,t,n)=>(t&&e.push(n),e),[]),l=[];c.forEach(e=>{t[e].paths.forEach(e=>{let t=n+(n.endsWith(`/`)?``:`/`)+e;l.push(t)})});let u=await e(l),d={},f=0;return c.forEach(e=>{let n=t[e].paths.length,r=0;for(let e=0;e<n;e++)r+=u[f+e].byteLength;let i=new ArrayBuffer(r),o=new Uint8Array(i),s=0;for(let e=0;e<n;e++){let t=new Uint8Array(u[f+e]);o.set(t,s),s+=t.byteLength}a[e].forEach(e=>{let t=Ga(i.slice(e.groupOffset,e.groupOffset+e.sizeBytes),[e.manifestEntry]);for(let e in t)d[e]=t[e]}),f+=n}),d}}var Ms=n((()=>{ze(),A(),lo(),Os(),Ua()}));function Ns(e){let t=e.lastIndexOf(`/`),n=e.lastIndexOf(`?`),r=e.substring(0,t),i=n>t?e.substring(n):``;return[r+`/`,i]}function Ps(e){return e.match(zs.URL_SCHEME_REGEX)!=null}function Fs(e,t){return new zs(e,t)}function Is(e,t){return Fs(e,t)}var Ls,Rs,zs,Bs,Vs=n((()=>{ze(),A(),lo(),go(),Ms(),Ls=`application/octet-stream`,Rs=`application/json`,zs=class{constructor(e,t){if(this.DEFAULT_METHOD=`POST`,t??={},this.weightPathPrefix=t.weightPathPrefix,this.onProgress=t.onProgress,this.weightUrlConverter=t.weightUrlConverter,t.fetchFunc==null?this.fetch=O().platform.fetch:(y(typeof t.fetchFunc==`function`,()=>"Must pass a function that matches the signature of `fetch` (see https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)"),this.fetch=t.fetchFunc),y(e!=null&&e.length>0,()=>`URL path for http must not be null, undefined or empty.`),Array.isArray(e)&&y(e.length===2,()=>`URL paths for http must have a length of 2, (actual length is ${e.length}).`),this.path=e,t.requestInit!=null&&t.requestInit.body!=null)throw Error(`requestInit is expected to have no pre-existing body, but has one.`);this.requestInit=t.requestInit||{}}async save(e){if(e.modelTopology instanceof ArrayBuffer)throw Error(`BrowserHTTPRequest.save() does not support saving model topology in binary formats yet.`);let t=Object.assign({method:this.DEFAULT_METHOD},this.requestInit);t.body=new FormData;let n=Qa(e,[{paths:[`./model.weights.bin`],weights:e.weightSpecs}]);t.body.append(`model.json`,new Blob([JSON.stringify(n)],{type:Rs}),`model.json`),e.weightData!=null&&t.body.append(`model.weights.bin`,new Blob([e.weightData],{type:Ls}),`model.weights.bin`);let r=await this.fetch(this.path,t);if(r.ok)return{modelArtifactsInfo:to(e),responses:[r]};throw Error(`BrowserHTTPRequest.save() failed due to HTTP response status ${r.status}.`)}async load(){let e=await this.fetch(this.path,this.requestInit);if(!e.ok)throw Error(`Request to ${this.path} failed with status code ${e.status}. Please verify this URL points to the model JSON of the model to load.`);let t;try{t=await e.json()}catch{let e=`Failed to parse model JSON of response from ${this.path}.`;throw this.path.endsWith(`.pb`)?e+=` Your path contains a .pb file extension. Support for .pb models have been removed in TensorFlow.js 1.0 in favor of .json models. You can re-convert your Python TensorFlow model using the TensorFlow.js 1.0 conversion scripts or you can convert your.pb models with the 'pb2json'NPM script in the tensorflow/tfjs-converter repository.`:e+=` Please make sure the server is serving valid JSON for this request.`,Error(e)}let n=t.modelTopology,r=t.weightsManifest;if(n==null&&r==null)throw Error(`The JSON from HTTP path ${this.path} contains neither model topology or manifest for weights.`);return eo(t,e=>this.loadWeights(e))}async loadWeights(e){let[t,n]=Ns(Array.isArray(this.path)?this.path[1]:this.path),r=this.weightPathPrefix||t,i=no(e),a=[],o=[];for(let t of e)for(let e of t.paths)this.weightUrlConverter==null?a.push(r+e+n):o.push(this.weightUrlConverter(e));return this.weightUrlConverter&&a.push(...await Promise.all(o)),[i,Xa(await ks(a,{requestInit:this.requestInit,fetchFunc:this.fetch,onProgress:this.onProgress}))]}},zs.URL_SCHEME_REGEX=/^https?:\/\//,Bs=(e,t)=>{if(typeof fetch>`u`&&(t==null||t.fetchFunc==null))return null;{let n=!0;if(n=Array.isArray(e)?e.every(e=>Ps(e)):Ps(e),n)return Fs(e,t)}return null},uo.registerSaveRouter(Bs),uo.registerLoadRouter(Bs)}));function Hs(e,t,n,r){let i=arguments;return new Js(Us(...i))}function Us(e,t,n,r){return arguments.length===1?e.modelTopology!=null||e.weightSpecs!=null?new Ks(e):(console.warn(`Please call tf.io.fromMemory() with only one argument. The argument should be of type ModelArtifacts. The multi-argument signature of tf.io.fromMemory() has been deprecated and will be removed in a future release.`),new Ks({modelTopology:e})):(console.warn(`Please call tf.io.fromMemory() with only one argument. The argument should be of type ModelArtifacts. The multi-argument signature of tf.io.fromMemory() has been deprecated and will be removed in a future release.`),new Ks({modelTopology:e,weightSpecs:t,weightData:n,trainingConfig:r}))}function Ws(e){return new qs(e)}function Gs(e){return new qs(e)}var Ks,qs,Js,Ys=n((()=>{Ks=class{constructor(e){this.modelArtifacts=e}load(){return this.modelArtifacts}},qs=class{constructor(e){this.saveHandler=e}save(e){return this.saveHandler(e)}},Js=class{constructor(e){e.load&&(this.load=()=>Promise.resolve(e.load())),e.save&&(this.save=t=>Promise.resolve(e.save(t)))}}})),Xs=r({browserFiles:()=>ys,browserHTTPRequest:()=>Is,concatenateArrayBuffers:()=>Xa,copyModel:()=>Yo,decodeWeights:()=>Ga,encodeWeights:()=>Wa,fromMemory:()=>Hs,fromMemorySync:()=>Us,getLoadHandlers:()=>ho,getModelArtifactsForJSON:()=>eo,getModelArtifactsForJSONSync:()=>$a,getModelArtifactsInfoForJSON:()=>to,getSaveHandlers:()=>mo,getWeightSpecs:()=>no,http:()=>Fs,isHTTPScheme:()=>Ps,listModels:()=>qo,loadWeights:()=>As,moveModel:()=>Xo,registerLoadRouter:()=>po,registerSaveRouter:()=>fo,removeModel:()=>Jo,weightsLoaderFactory:()=>js,withSaveHandler:()=>Ws,withSaveHandlerSync:()=>Gs}),Zs=n((()=>{Oo(),Wo(),Es(),Vs(),lo(),Ys(),go(),Ms(),$o()}));function Qs(e,t,n=!1,r=!1){let i=F(e,`a`,`matMul`),a=F(t,`b`,`matMul`);[i,a]=ca(i,a);let o={a:i,b:a},s={transposeA:n,transposeB:r};return N.runKernel(at,o,s)}var $s,ec=n((()=>{P(),k(),ma(),I(),R(),$s=L({matMul_:Qs})}));function tc(e,t,n=1,r=0,i=`int32`){if(t<2)throw Error(`Error in oneHot: depth must be >=2, but it is ${t}`);let a={indices:F(e,`indices`,`oneHot`,`int32`)},o={dtype:i,depth:t,onValue:n,offValue:r};return N.runKernel(jn,a,o)}var nc,rc=n((()=>{P(),k(),I(),R(),nc=L({oneHot_:tc})}));function ic(){O().set(`PROD`,!0)}function ac(){O().set(`DEBUG`,!0)}function oc(){O().set(`DEPRECATION_WARNINGS_ENABLED`,!1),console.warn(`TensorFlow.js deprecation warnings have been disabled.`)}function sc(e){O().getBool(`DEPRECATION_WARNINGS_ENABLED`)&&console.warn(e+` You can disable deprecation warnings with tf.disableDeprecationWarnings().`)}function cc(){N.disposeVariables()}function lc(){return N}function uc(){return N.memory()}function dc(e){return N.profile(e)}function B(e,t){return N.tidy(e,t)}function fc(e){da(e).forEach(e=>e.dispose())}function pc(e){return N.keep(e)}function mc(e){return N.time(e)}function hc(e){return N.setBackend(e)}function gc(){return N.ready()}function _c(){return N.backendName}function vc(e){N.removeBackend(e)}function yc(e){return N.findBackend(e)}function bc(e){return N.findBackendFactory(e)}function xc(e,t,n=1){return N.registerBackend(e,t,n)}function Sc(){return N.backend}function Cc(e,t){O().setPlatform(e,t)}var wc=n((()=>{P(),ze(),M(),ma()}));function Tc(e){let t={input:F(e,`input`,`imag`)};return N.runKernel(Qt,t)}var Ec,Dc=n((()=>{P(),k(),I(),R(),Ec=L({imag_:Tc})}));function Oc(e){let t={x:F(e,`x`,`neg`)};return N.runKernel(`Neg`,t)}var kc,Ac=n((()=>{P(),k(),I(),R(),kc=L({neg_:Oc})}));function jc(e){let t={input:F(e,`input`,`real`)};return N.runKernel(Vn,t)}var Mc,Nc=n((()=>{P(),k(),I(),R(),Mc=L({real_:jc})}));function Pc(e,t,n){let r=F(e,`x`,`transpose`);if(t??=r.shape.map((e,t)=>t).reverse(),y(r.rank===t.length,()=>`Error in transpose: rank of input ${r.rank} must match length of perm ${t}.`),t.forEach(e=>{y(e>=0&&e<r.rank,()=>`All entries in 'perm' must be between 0 and ${r.rank-1} but got ${t}`)}),r.rank<=1)return r.clone();let i={x:r},a={perm:t};return r.dtype===`complex64`?B(()=>{let e=Mc(r),t=Ec(r);return e=N.runKernel(Dr,{x:e},a),t=N.runKernel(Dr,{x:t},a),n&&(t=kc(t)),Ia(e,t)}):N.runKernel(Dr,i,a)}var Fc,Ic=n((()=>{P(),wc(),k(),I(),A(),La(),Dc(),Ac(),R(),Nc(),Fc=L({transpose_:Pc})}));function Lc(e,t,n){let r=F(e,`labels`,`confusionMatrix`),i=F(t,`predictions`,`confusionMatrix`);y(n==null||n>0&&Number.isInteger(n),()=>`If provided, numClasses must be a positive integer, but got ${n}`),y(r.rank===1,()=>`Expected the rank of labels to be 1, but got ${r.rank}`),y(i.rank===1,()=>`Expected the rank of predictions to be 1, but got ${i.rank}`),y(r.shape[0]===i.shape[0],()=>`Mismatch in the number of examples: ${r.shape[0]} vs. ${i.shape[0]}. Labels and predictions should have the same number of elements.`),y(n>0&&Number.isInteger(n),()=>`numClasses is required to be a positive integer, but got ${n}`);let a=nc(z(r,`int32`),n),o=nc(z(i,`int32`),n),s=Fc(a),c=$s(s,o);return z(c,`int32`)}var Rc,zc=n((()=>{I(),A(),us(),ec(),rc(),R(),Ic(),Rc=L({confusionMatrix_:Lc})})),Bc=r({confusionMatrix:()=>Rc}),Vc=n((()=>{zc()})),Hc=r({assertAndGetBroadcastShape:()=>Gc,getBroadcastDims:()=>Uc,getReductionAxes:()=>Wc});function Uc(e,t){let n=e.length,r=[];for(let i=0;i<n;i++){let a=n-1-i,o=e[a]||1;(t[t.length-1-i]||1)>1&&o===1&&r.unshift(a)}return r}function Wc(e,t){let n=[];for(let r=0;r<t.length;r++){let i=e[e.length-r-1],a=t.length-r-1,o=t[a];(i==null||i===1&&o>1)&&n.unshift(a)}return n}function Gc(e,t){let n=[],r=Math.max(e.length,t.length);for(let i=0;i<r;i++){let r=e[e.length-i-1];r??=1;let a=t[t.length-i-1];if(a??=1,r===1)n.unshift(a);else if(a===1)n.unshift(r);else if(r!==a){let n=`Operands could not be broadcast together with shapes ${e} and ${t}.`;throw Error(n)}else n.unshift(r)}return n}var Kc=n((()=>{}));function qc(e,t,n){if(x(e),t!=null&&t.length!==3)throw Error(`tensor3d() requires shape to have three numbers`);let r=Aa(e,n);if(r.length!==3&&r.length!==1)throw Error(`tensor3d() requires values to be number[][][] or flat/TypedArray`);if(r.length===1&&t==null)throw Error("tensor3d() requires shape to be provided when `values` are a flat array");return Ra(e,t,r,n)}var Jc=n((()=>{I(),A(),za()})),Yc=r({fromPixels:()=>il,fromPixelsAsync:()=>tl,toPixels:()=>nl});function Xc(e,t=3){if(t>4)throw Error(`Cannot construct Tensor with more than 4 channels from pixels.`);if(e==null)throw Error(`pixels passed to tf.browser.fromPixels() can not be null`);let n=!1,r=!1,i=!1,a=!1,o=!1,s=!1;if(e.data instanceof Uint8Array)n=!0;else if(typeof ImageData<`u`&&e instanceof ImageData)r=!0;else if(typeof HTMLVideoElement<`u`&&e instanceof HTMLVideoElement)i=!0;else if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement)a=!0;else if(e.getContext!=null)o=!0;else if(typeof ImageBitmap<`u`&&e instanceof ImageBitmap)s=!0;else throw Error(`pixels passed to tf.browser.fromPixels() must be either an HTMLVideoElement, HTMLImageElement, HTMLCanvasElement, ImageData in browser, or OffscreenCanvas, ImageData in webworker or {data: Uint32Array, width: number, height: number}, but was ${e.constructor.name}`);if(Hr(`FromPixels`,N.backendName)!=null){let n={pixels:e},r={numChannels:t};return N.runKernel(Pr,n,r)}let[c,l]=i?[e.videoWidth,e.videoHeight]:[e.width,e.height],u;if(o)u=e.getContext(`2d`).getImageData(0,0,c,l).data;else if(r||n)u=e.data;else if(a||i||s){if(rl==null){if(typeof document>`u`){if(typeof OffscreenCanvas<`u`&&typeof OffscreenCanvasRenderingContext2D<`u`)rl=new OffscreenCanvas(1,1).getContext(`2d`);else throw Error(`Cannot parse input in current context. Reason: OffscreenCanvas Context2D rendering is not supported.`)}else rl=document.createElement(`canvas`).getContext(`2d`,{willReadFrequently:!0})}rl.canvas.width=c,rl.canvas.height=l,rl.drawImage(e,0,0,c,l),u=rl.getImageData(0,0,c,l).data}let d;if(t===4)d=new Int32Array(u);else{let e=c*l;d=new Int32Array(e*t);for(let n=0;n<e;n++)for(let e=0;e<t;++e)d[n*t+e]=u[n*4+e]}return qc(d,[l,c,t],`int32`)}function Zc(e){return e!=null&&e.data instanceof Uint8Array}function Qc(){return typeof window<`u`&&typeof ImageBitmap<`u`&&window.hasOwnProperty(`createImageBitmap`)}function $c(e){return e!=null&&e.width!==0&&e.height!==0}function el(e){return Qc()&&!(e instanceof ImageBitmap)&&$c(e)&&!Zc(e)}async function tl(e,t=3){let n=null;if(O().getBool(`WRAP_TO_IMAGEBITMAP`)&&el(e)){let t;try{t=await createImageBitmap(e,{premultiplyAlpha:`none`})}catch{t=null}n=t!=null&&t.width===e.width&&t.height===e.height?t:e}else n=e;return Xc(n,t)}async function nl(e,t){let n=F(e,`img`,`toPixels`);if(!(e instanceof Xi)){let e=n;n=z(e,`int32`),e.dispose()}if(n.rank!==2&&n.rank!==3)throw Error(`toPixels only supports rank 2 or 3 tensors, got rank ${n.rank}.`);let[r,i]=n.shape.slice(0,2),a=n.rank===2?1:n.shape[2];if(a>4||a===2)throw Error(`toPixels only supports depth of size 1, 3 or 4 but got ${a}`);if(n.dtype!==`float32`&&n.dtype!==`int32`)throw Error(`Unsupported type for toPixels: ${n.dtype}. Please use float32 or int32 tensors.`);let o=await n.data(),s=n.dtype===`float32`?255:1,c=new Uint8ClampedArray(i*r*4);for(let e=0;e<r*i;++e){let t=[0,0,0,255];for(let r=0;r<a;r++){let i=o[e*a+r];if(n.dtype===`float32`){if(i<0||i>1)throw Error(`Tensor values for a float32 Tensor must be in the range [0 - 1] but encountered ${i}.`)}else if(n.dtype===`int32`&&(i<0||i>255))throw Error(`Tensor values for a int32 Tensor must be in the range [0 - 255] but encountered ${i}.`);a===1?(t[0]=i*s,t[1]=i*s,t[2]=i*s):t[r]=i*s}let r=e*4;c[r+0]=Math.round(t[0]),c[r+1]=Math.round(t[1]),c[r+2]=Math.round(t[2]),c[r+3]=Math.round(t[3])}if(t!=null){t.width=i,t.height=r;let e=t.getContext(`2d`),n=new ImageData(c,i,r);e.putImageData(n,0,0)}return n!==e&&n.dispose(),c}var rl,il,al=n((()=>{P(),ze(),k(),$r(),M(),I(),us(),R(),Jc(),il=L({fromPixels_:Xc})})),ol=r({prepareAndValidate:()=>sl});function sl(e,t){let n=e.shape.length,r=t.shape.length;if(n<1)throw Error(`tf.gatherND() expects the input to be rank 1 or higher, but the rank was ${n}.`);if(r<1)throw Error(`tf.gatherND() expects the indices to be rank 1 or higher, but the rank was ${r}.`);if(t.dtype!==`int32`)throw Error(`tf.gatherND() expects the indices to be int32 type, but the dtype was ${t.dtype}.`);if(t.shape[r-1]>n)throw Error(`index innermost dimension length must be <= tensor rank; saw: ${t.shape[r-1]} vs. ${n}`);if(C(e.shape)===0)throw Error(`Requested more than 0 entries, but input is empty. Input shape: ${e.shape}.`);let i=t.shape,a=i[i.length-1],o=1;for(let e=0;e<i.length-1;++e)o*=i[e];let s=e.shape,c=i.slice();c.pop();let l=1;for(let e=a;e<n;++e)l*=s[e],c.push(s[e]);let u=[...xe(e.shape).map(e=>e/l),1].slice(0,a);return[c,o,l,u]}var cl=n((()=>{A()})),ll=r({calculateShapes:()=>fl,validateInput:()=>dl,validateUpdateShape:()=>ul});function ul(e,t,n){let r=t.rank>1?t.shape[t.rank-1]:1,i=t.rank>1?t.rank-1:1,a=`Must have updates.shape = indices.shape[:batchDim] + shape[sliceDim:], got updates.shape: ${n.shape}, indices.shape: ${t.shape}, shape: ${e}, sliceDim: ${r}, and batchDim: ${i}.`;if(n.rank<i)throw Error(a+` update.rank < ${i}. `);if(e.length<r+(n.rank-i))throw Error(a+` Output shape length < ${r+(n.rank-i)}`);if(n.rank!==i+e.length-r)throw Error(a+` update.rank != ${i+e.length-r}`);for(let e=0;e<i;++e)if(n.shape[e]!==t.shape[e])throw Error(a+` updates.shape[${e}] (${n.shape[e]}) != indices.shape[${e}] (${t.shape[e]}).`);for(let t=0;t<n.rank-i;++t)if(n.shape[t+i]!==e[t+r])throw Error(a+` updates.shape[${t+i}] (${n.shape[t+i]}) != shape[${t+i}] (${e[t+i]})`)}function dl(e,t,n){if(t.rank<1)throw Error(`tf.scatterND() expects the indices to be rank 1 or higher, but the rank was ${t.rank}.`);if(e.rank<1)throw Error(`tf.scatterND() expects the updates to be rank 1 or higher, but the rank was ${e.rank}.`);if(t.dtype!==`int32`)throw Error(`The dtype of 'indices' should be int32, but got dtype: ${t.dtype}`);if(n.length<1)throw Error(`Output rank must be greater or equal to 1, but got shape: ${n}`);if(n.length===0){if(t.size===0)throw Error(`Indices specified for empty output. indices shape: ${t.shape}`);if(e.size===0)throw Error(`Updates specified for empty output. updates shape: ${e.shape}`)}ul(n,t,e)}function fl(e,t,n){let r=t.shape.length,i=r>1?t.shape[r-1]:1,a=n.length,o=1;for(let e=i;e<a;++e)o*=n[e];let s=i<1?1:i,c=C(t.shape)/s,l=[...xe(n.slice(0,i)),1],u=C(n);return{sliceRank:i,numUpdates:c,sliceSize:o,strides:l,outputSize:u}}var pl=n((()=>{A()})),ml=r({assertParamsValid:()=>hl,computeFlatOffset:()=>Ol,computeOutShape:()=>_l,getNormalizedAxes:()=>xl,isSliceContinous:()=>Dl,maskToAxes:()=>gl,parseSliceParams:()=>kl,sliceInfo:()=>Al,startForAxis:()=>Tl,startIndicesWithElidedDims:()=>Sl,stopForAxis:()=>El,stopIndicesWithElidedDims:()=>Cl,stridesForAxis:()=>wl,stridesWithElidedDims:()=>vl});function hl(e,t,n){let r=e.shape.length;y(r===t.length,()=>`Error in slice${r}D: Length of begin ${t} must match the rank of the array (${r}).`),y(r===n.length,()=>`Error in slice${r}D: Length of size ${n} must match the rank of the array (${r}).`);for(let i=0;i<r;++i)y(t[i]+n[i]<=e.shape[i],()=>`Error in slice${r}D: begin[${i}] + size[${i}] (${t[i]+n[i]}) would overflow input.shape[${i}] (${e.shape[i]})`)}function gl(e){let t=[],n=0;for(;e>0;)e&1&&t.push(n),e/=2,n++;return t}function _l(e,t,n){let r=[];for(let i=0;i<e.length;i++)r[i]=Math.ceil((t[i]-e[i])/n[i]);return r}function vl(e,t,n,r){let i=[...e];for(let e=i.length;e<r.length;e++)i.push(1);for(let e=0;e<n;e++)e===0?i[t]=1:(i.splice(t,0,1),i.pop());return i}function yl(e,t,n){return n<=e?n:n-(t-1)}function bl(e,t){let n=[];for(let r=0;r<e;r++)n.push(t+r);return n}function xl(e,t,n,r,i,a,o,s,c){let l=e.length,u=Array(l),d=Array(l),f=Array(l);if(t.length&&n>0){let c=t[0],l=n+1;u=Sl(o,c,l,r,e),d=Cl(s,c,l,i,e),f=vl(a,c,l,e)}else for(let t=0;t<l;t++)u[t]=Tl(o,r,a,e,t,c),d[t]=El(s,i,a,e,t,c),f[t]=wl(a,t,c);return{begin:u,end:d,strides:f}}function Sl(e,t,n,r,i){let a=[...i],o=bl(n,t);for(let i=0;i<a.length;i++)if(o.indexOf(i)>-1)a[i]=0;else{let o=yl(t,n,i),s=r[o];e&1<<o&&(s=0),a[i]=s}return a}function Cl(e,t,n,r,i){let a=[...i],o=bl(n,t);for(let i=0;i<a.length;i++)if(o.indexOf(i)>-1)a[i]=2**53-1;else{let o=yl(t,n,i),s=r[o];e&1<<o&&(s=2**53-1),a[i]=s}for(let e=0;e<a.length;e++){let t=i[e];a[e]<0&&(a[e]+=t),a[e]=p(0,a[e],i[e])}return a}function wl(e,t,n){let r=e[t];return(n&1<<t||r==null)&&(r=1),r}function Tl(e,t,n,r,i,a){let o=t[i],s=n[i]||1;(e&1<<i||a&1<<i||o==null)&&(o=s>0?-(2**53-1):2**53-1);let c=r[i];return o<0&&(o+=c),o=p(0,o,c-1),o}function El(e,t,n,r,i,a){let o=t[i],s=n[i]||1;(e&1<<i||a&1<<i||o==null)&&(o=s>0?2**53-1:-(2**53-1));let c=r[i];return o<0&&(o+=c),o=s>0?p(0,o,c):p(-1,o,c-1),o}function Dl(e,t,n){let r=n.length;for(let e=0;e<n.length;e++)if(n[e]>1){r=e;break}for(let i=r+1;i<n.length;i++)if(t[i]>0||n[i]!==e[i])return!1;return!0}function Ol(e,t){let n=e.length>0?e[e.length-1]:1;for(let r=0;r<e.length-1;r++)n+=e[r]*t[r];return n}function kl(e,t,n){let r,i=e.shape.length;r=typeof t==`number`?[t,...Array(i-1).fill(0)]:t.length<i?t.concat(Array(i-t.length).fill(0)):t.slice(),r.forEach(e=>{y(e!==-1,()=>`slice() does not support negative begin indexing.`)});let a;return a=n==null?Array(i).fill(-1):typeof n==`number`?[n,...Array(i-1).fill(-1)]:n.length<i?n.concat(Array(i-n.length).fill(-1)):n,a=a.map((t,n)=>t>=0?t:(y(t===-1,()=>`Negative size values should be exactly -1 but got ${t} for the slice() size at index ${n}.`),e.shape[n]-r[n])),[r,a]}function Al(e,t,n,r,i,a,o,s,c){let l;if(r==null?(l=Array(t.length),l.fill(1)):l=r,o!=null&&o&o-1)throw Error(`Multiple ellipses in slice is not allowed.`);let u=!1,d={dims:l.length,numAddAxisAfterEllipsis:0,begin:t.slice(),end:n.slice(),strides:l.slice(),beginMask:i,endMask:a,ellipsisMask:o,newAxisMask:s,shrinkAxisMask:c};for(let e=0;e<d.dims;e++)u&&1<<e&s&&d.numAddAxisAfterEllipsis++,1<<e&o&&(u=!0);u||(d.ellipsisMask|=1<<d.dims,d.dims++);let f={dims:e.length,beginMask:0,endMask:0,beginValid:!1,endValid:!1};jl(d,f);let p=!0,m=!0,h=!0,g=[],_=[];for(let t=0;t<e.length;++t){if(f.strides[t]===0)throw Error(`strides[${t}] must be non-zero`);let n=!!(f.shrinkAxisMask&1<<t),r=e[t];if(r===-1){g.push(n?1:-1);continue}let i=[f.beginMask&1<<t,f.endMask&1<<t],a=[f.strides[t]>0?0:-1,f.strides[t]>0?r:r-1];if(n&&f.strides[t]<=0)throw Error(`only stride 1 allowed on non-range indexing.`);h&&=f.strides[t]===1;let o=!!(f.beginMask&1<<t&&f.endMask&1<<t);if(f.beginValid&&f.endValid){if(n){let e=f.begin[t]<0?r+f.begin[t]:f.begin[t];if(f.begin[t]=e,f.end[t]=f.begin[t]+1,e<0||e>=r)throw Error(`slice index ${f.begin[t]} of dimension ${t} out of bounds.`)}else f.begin[t]=Ml(f.begin[t],0,f.strides[t],r,i,a),f.end[t]=Ml(f.end[t],1,f.strides[t],r,i,a);let e=f.strides[t]===1&&f.begin[t]===0&&f.end[t]===r;p&&=e,m&&=t===0&&f.strides[t]===1||e}else p=p&&f.strides[t]===1&&o,m&&=t===0&&f.strides[t]===1||o;let s,c=!1;if(f.beginValid&&f.endValid?(s=f.end[t]-f.begin[t],c=!0):n?(s=1,c=!0):o&&r>=0&&(s=f.strides[t]<0?-r:r,c=!0),c){let e;e=s===0||s<0!=f.strides[t]<0?0:Math.trunc(s/f.strides[t])+(s%f.strides[t]===0?0:1),g.push(e)}else g.push(-1)}for(let e=0;e<f.finalShapeGatherIndices.length;++e){let t=f.finalShapeGatherIndices[e];t>=0?_.push(g[t]):t===Nl&&_.push(1)}return{finalShapeSparse:_.filter((e,t)=>f.finalShapeGatherIndices[t]!==Nl),finalShape:_,isIdentity:p,sliceDim0:m,isSimpleSlice:h,begin:f.begin,end:f.end,strides:f.strides}}function jl(e,t){t.beginMask=0,t.endMask=0,t.shrinkAxisMask=0;let n=0;t.beginValid=e.begin!=null,t.endValid=e.end!=null,t.begin=Array(t.dims),t.end=Array(t.dims),t.strides=Array(t.dims),t.finalShapeGatherIndices=[],t.finalShapeGatherIndicesSparse=[],t.inputShapeGatherIndicesSparse=Array(t.dims);for(let r=0;r<e.dims;r++)if(1<<r&e.ellipsisMask){let i=Math.min(t.dims-(e.dims-r)+1+e.numAddAxisAfterEllipsis,t.dims);for(;n<i;n++)t.begin[n]=0,t.end[n]=0,t.strides[n]=1,t.beginMask|=1<<n,t.endMask|=1<<n,t.finalShapeGatherIndices.push(n),t.finalShapeGatherIndicesSparse.push(-1),t.inputShapeGatherIndicesSparse[n]=r}else if(1<<r&e.newAxisMask)t.finalShapeGatherIndices.push(Nl),t.finalShapeGatherIndicesSparse.push(-1);else{if(n===t.begin.length)throw Error(`Index out of range using input dim ${n}; input has only ${t.dims} dims, ${t.begin.length}.`);e.begin!=null&&(t.begin[n]=e.begin[r]),e.end!=null&&(t.end[n]=e.end[r]),t.strides[n]=e.strides[r],e.beginMask&1<<r&&(t.beginMask|=1<<n),e.endMask&1<<r&&(t.endMask|=1<<n),e.shrinkAxisMask&1<<r?(t.finalShapeGatherIndices.push(Pl),t.finalShapeGatherIndicesSparse.push(-1),t.shrinkAxisMask|=1<<n):(t.finalShapeGatherIndices.push(n),t.finalShapeGatherIndicesSparse.push(r)),t.inputShapeGatherIndicesSparse[n]=r,n++}}function Ml(e,t,n,r,i,a){if(i[t])return n>0?a[t]:a[t+1&1];{let t=e<0?r+e:e;return t<a[0]?a[0]:t>a[1]?a[1]:t}}var Nl,Pl,Fl=n((()=>{A(),Nl=-2,Pl=-1})),Il=r({Serializable:()=>Ll,SerializationMap:()=>Rl,registerClass:()=>V});function V(e){y(e.className!=null,()=>`Class being registered does not have the static className property defined.`),y(typeof e.className==`string`,()=>`className is required to be a string, but got type `+typeof e.className),y(e.className.length>0,()=>`Class being registered has an empty-string as its className, which is disallowed.`),Rl.register(e)}var Ll,Rl,zl=n((()=>{A(),Ll=class{getClassName(){return this.constructor.className}static fromConfig(e,t){return new e(t)}},Rl=class e{constructor(){this.classNameMap={}}static getMap(){return e.instance??=new e,e.instance}static register(t){e.getMap().classNameMap[t.className]=[t,t.fromConfig]}}})),Bl=r({TEST_EPSILON_FLOAT16:()=>eu,createVideoElement:()=>Zl,encodeStrings:()=>Xl,expectArrayBuffersEqual:()=>Yl,expectArraysClose:()=>Vl,expectArraysEqual:()=>Gl,expectNumbersClose:()=>Kl,expectPromiseToFail:()=>Wl,expectValuesInRange:()=>Jl,play:()=>Ql,testEpsilon:()=>Hl});function Vl(e,t,n){return n??=Hl(),Ul(e,t,(e,t)=>ql(e,t,n))}function Hl(){return N.backend.floatPrecision()===32?$l:eu}function Ul(e,t,n){let r=!0;if((fe(e)||fe(t))&&(r=!1),fe(e)&&fe(t)&&(r=!0),r){let n=e.constructor.name,r=t.constructor.name;if(n!==r)throw Error(`Arrays are of different type. Actual: ${n}. Expected: ${r}`)}if(Array.isArray(e)&&Array.isArray(t)){let n=Aa(e),r=Aa(t);if(!T(n,r))throw Error(`Arrays have different shapes. Actual: [${n}]. Expected: [${r}]`)}let i=fe(e)?e:S(e),a=fe(t)?t:S(t);if(i.length!==a.length)throw Error(`Arrays have different lengths actual: ${i.length} vs expected: ${a.length}.\nActual:   ${i}.\nExpected: ${a}.`);for(let e=0;e<a.length;++e){let t=i[e],r=a[e];if(!n(t,r))throw Error(`Arrays differ: actual[${e}] = ${t}, expected[${e}] = ${r}.\nActual:   ${i}.\nExpected: ${a}.`)}typeof expect<`u`&&expect().nothing()}function Wl(e,t){e().then(()=>t.fail(),()=>t()),typeof expect<`u`&&expect().nothing()}function Gl(e,t){let n=typeof t==`string`||typeof t==`number`||typeof t==`boolean`?[t]:t;return he(e)||he(e[0])||he(t)||he(t[0])?Ul(e,n,(e,t)=>e==t):Ul(e,t,(e,t)=>ql(e,t,0))}function Kl(e,t,n){if(n??=Hl(),!ql(e,t,n))throw Error(`Numbers differ: actual === ${e}, expected === ${t}`);typeof expect<`u`&&expect().nothing()}function ql(e,t,n){return!isFinite(e)&&!isFinite(t)||!(isNaN(e)||isNaN(t)||Math.abs(e-t)>n)}function Jl(e,t,n){for(let r=0;r<e.length;r++)if(e[r]<t||e[r]>n)throw Error(`Value out of range:${e[r]} low: ${t}, high: ${n}`)}function Yl(e,t){let n=new Float32Array(e),r=new Float32Array(t);if(n.length!==r.length)throw Error(`Expected ArrayBuffer to be of length ${r.length}, but it was ${n.length}`);for(let e=0;e<r.length;e++)if(n[e]!==r[e])throw Error(`Expected ArrayBuffer value at ${e} to be ${r[e]} but got ${n[e]} instead`)}function Xl(e){for(let t=0;t<e.length;t++){let n=e[t];Array.isArray(n)?Xl(n):e[t]=Ei(n)}return e}function Zl(e){let t=document.createElement(`video`);return`playsInline`in t&&(t.playsInline=!0),t.muted=!0,t.loop=!0,t.style.position=`fixed`,t.style.left=`0px`,t.style.top=`0px`,t.preload=`auto`,t.appendChild(e),new Promise(e=>{t.addEventListener(`loadeddata`,n=>e(t)),t.load()})}async function Ql(e){await e.play(),`requestVideoFrameCallback`in e&&await new Promise(t=>{e.requestVideoFrameCallback(t)})}var $l,eu,tu=n((()=>{P(),I(),A(),$l=.001,eu=.1})),nu,ru=n((()=>{nu=`4.1.0`}));function iu(e,t){let n=F(e,`a`,`add`),r=F(t,`b`,`add`);[n,r]=ca(n,r);let i={a:n,b:r};return N.runKernel(`Add`,i)}var H,au=n((()=>{P(),k(),ma(),I(),R(),H=L({add_:iu})}));function ou(e,t){let n=F(e,`a`,`floorDiv`),r=F(t,`b`,`floorDiv`);[n,r]=ca(n,r);let i={a:n,b:r};return N.runKernel(Wt,i)}var su,cu=n((()=>{P(),k(),ma(),I(),R(),su=L({floorDiv_:ou})}));function lu(e,t){let n=F(e,`a`,`div`),r=F(t,`b`,`div`);if([n,r]=ca(n,r),n.dtype===`int32`&&r.dtype===`int32`)return su(n,r);let i={a:n,b:r};return N.runKernel(Ft,i,{})}var uu,du=n((()=>{P(),k(),ma(),I(),cu(),R(),uu=L({div_:lu})}));function fu(e,t){let n=F(e,`a`,`mul`),r=F(t,`b`,`mul`);[n,r]=ca(n,r);let i={a:n,b:r};return N.runKernel(Tn,i)}var U,W=n((()=>{P(),k(),ma(),I(),R(),U=L({mul_:fu})}));function pu(e){let t=F(e,`x`,`abs`);if(t.dtype===`complex64`){let e={x:t};return N.runKernel(mt,e)}{let e={x:t};return N.runKernel(`Abs`,e)}}var mu,hu=n((()=>{P(),k(),I(),R(),mu=L({abs_:pu})}));function gu(e){let t={x:F(e,`x`,`acos`)};return N.runKernel(Ge,t)}var _u,vu=n((()=>{P(),k(),I(),R(),_u=L({acos_:gu})}));function yu(e){let t={x:F(e,`x`,`acosh`)};return N.runKernel(Ke,t)}var bu,xu=n((()=>{P(),k(),I(),R(),bu=L({acosh_:yu})}));function Su(e){y(Array.isArray(e),()=>`The argument passed to tf.addN() must be a list of tensors`),y(e.length>=1,()=>`Must pass at least one tensor to tf.addN(), but got ${e.length}`);let t=e.map((e,t)=>F(e,`tensors${t}`,`addN`)),n=t[0];t.forEach(e=>{if(e.dtype!==n.dtype)throw Error(`All tensors passed to tf.addN() must have the same dtype`)}),t.forEach(e=>{if(!T(e.shape,n.shape))throw Error(`All tensors passed to tf.addN() must have the same shape`)});let r=t;return N.runKernel(qe,r)}var Cu,wu=n((()=>{P(),k(),I(),A(),R(),Cu=L({addN_:Su})}));function Tu(e,t=null,n=!1){let r={x:F(e,`x`,`all`,`bool`)},i={axis:t,keepDims:n};return N.runKernel(`All`,r,i)}var Eu,Du=n((()=>{P(),k(),I(),R(),Eu=L({all_:Tu})}));function Ou(e,t=null,n=!1){let r={x:F(e,`x`,`any`,`bool`)},i={axis:t,keepDims:n};return N.runKernel(`Any`,r,i)}var ku,Au=n((()=>{P(),k(),I(),R(),ku=L({any_:Ou})}));function ju(e,t=0){let n={x:F(e,`x`,`argMax`)},r={axis:t};return N.runKernel(Je,n,r)}var Mu,Nu=n((()=>{P(),k(),I(),R(),Mu=L({argMax_:ju})}));function Pu(e,t=0){let n={x:F(e,`x`,`argMin`)},r={axis:t};return N.runKernel(Ye,n,r)}var Fu,Iu=n((()=>{P(),k(),I(),R(),Fu=L({argMin_:Pu})}));function Lu(e){let t={x:F(e,`x`,`asin`)};return N.runKernel(Xe,t)}var Ru,zu=n((()=>{P(),k(),I(),R(),Ru=L({asin_:Lu})}));function Bu(e){let t={x:F(e,`x`,`asinh`)};return N.runKernel(Ze,t)}var Vu,Hu=n((()=>{P(),k(),I(),R(),Vu=L({asinh_:Bu})}));function Uu(e){let t={x:F(e,`x`,`atan`)};return N.runKernel(Qe,t)}var Wu,Gu=n((()=>{P(),k(),I(),R(),Wu=L({atan_:Uu})}));function Ku(e,t){let n=F(e,`a`,`atan2`),r=F(t,`b`,`atan2`);[n,r]=ca(n,r);let i={a:n,b:r};return N.runKernel(et,i)}var qu,Ju=n((()=>{P(),k(),ma(),I(),R(),qu=L({atan2_:Ku})}));function Yu(e){let t={x:F(e,`x`,`atanh`)};return N.runKernel($e,t)}var Xu,Zu=n((()=>{P(),k(),I(),R(),Xu=L({atanh_:Yu})}));function Qu(e,t,n,r,i=`NHWC`,a){let o=e[3];return td(e,[...t,o],n,a,r,null,null,md(i))}function $u(e,t,n,r,i,a,o=`channelsLast`){let[s,c]=od(t),l;if(o===`channelsLast`)l=[s,c,e[3],e[3]];else if(o===`channelsFirst`)l=[s,c,e[1],e[1]];else throw Error(`Unknown dataFormat ${o}`);return td(e,l,n,r,i,a,!1,o)}function ed(e,t,n,r,i,a,o=`NDHWC`){let[s,c,l]=sd(t),u,d;if(o===`NDHWC`)d=`channelsLast`,u=[s,c,l,e[4],e[4]];else if(o===`NCDHW`)d=`channelsFirst`,u=[s,c,l,e[1],e[1]];else throw Error(`Unknown dataFormat ${o}`);return nd(e,u,n,r,i,!1,d,a)}function td(e,t,n,r,i,a,o=!1,s=`channelsLast`){let[c,l,u,d]=[-1,-1,-1,-1];if(s===`channelsLast`)[c,l,u,d]=e;else if(s===`channelsFirst`)[c,d,l,u]=e;else throw Error(`Unknown dataFormat ${s}`);let[f,p,,m]=t,[h,g]=od(n),[_,v]=od(r),y=cd(f,_),b=cd(p,v),{padInfo:x,outHeight:S,outWidth:C}=ld(i,l,u,h,g,y,b,a,s),w=o?m*d:m,T;return s===`channelsFirst`?T=[c,w,S,C]:s===`channelsLast`&&(T=[c,S,C,w]),{batchSize:c,dataFormat:s,inHeight:l,inWidth:u,inChannels:d,outHeight:S,outWidth:C,outChannels:w,padInfo:x,strideHeight:h,strideWidth:g,filterHeight:f,filterWidth:p,effectiveFilterHeight:y,effectiveFilterWidth:b,dilationHeight:_,dilationWidth:v,inShape:e,outShape:T,filterShape:t}}function nd(e,t,n,r,i,a=!1,o=`channelsLast`,s){let[c,l,u,d,f]=[-1,-1,-1,-1,-1];if(o===`channelsLast`)[c,l,u,d,f]=e;else if(o===`channelsFirst`)[c,f,l,u,d]=e;else throw Error(`Unknown dataFormat ${o}`);let[p,m,h,,g]=t,[_,v,y]=sd(n),[b,x,S]=sd(r),C=cd(p,b),w=cd(m,x),T=cd(h,S),{padInfo:E,outDepth:D,outHeight:ee,outWidth:te}=ud(i,l,u,d,_,v,y,C,w,T,s),ne=a?g*f:g,re;return o===`channelsFirst`?re=[c,ne,D,ee,te]:o===`channelsLast`&&(re=[c,D,ee,te,ne]),{batchSize:c,dataFormat:o,inDepth:l,inHeight:u,inWidth:d,inChannels:f,outDepth:D,outHeight:ee,outWidth:te,outChannels:ne,padInfo:E,strideDepth:_,strideHeight:v,strideWidth:y,filterDepth:p,filterHeight:m,filterWidth:h,effectiveFilterDepth:C,effectiveFilterHeight:w,effectiveFilterWidth:T,dilationDepth:b,dilationHeight:x,dilationWidth:S,inShape:e,outShape:re,filterShape:t}}function rd(e,t,n,r,i){r??=ad(e,t,n);let a=e[0],o=e[1];return[dd((a-t+2*r)/n+1,i),dd((o-t+2*r)/n+1,i)]}function id(e,t,n,r,i,a){i??=ad(e,t,r);let o=e[0],s=e[1],c=e[2];return[dd((o-t+2*i)/r+1,a),dd((s-t+2*i)/r+1,a),dd((c-t+2*i)/r+1,a),n]}function ad(e,t,n,r=1){let i=cd(t,r);return Math.floor((e[0]*(n-1)-n+i)/2)}function od(e){return typeof e==`number`?[e,e,e]:e.length===2?[e[0],e[1],1]:e}function sd(e){return typeof e==`number`?[e,e,e]:e}function cd(e,t){return t<=1?e:e+(e-1)*(t-1)}function ld(e,t,n,r,i,a,o,s,c){let l,u,d;if(typeof e==`number`){l={top:e,bottom:e,left:e,right:e,type:e===0?`VALID`:`NUMBER`};let i=rd([t,n],a,r,e,s);u=i[0],d=i[1]}else if(e===`same`){u=Math.ceil(t/r),d=Math.ceil(n/i);let e=Math.max(0,(u-1)*r+a-t),s=Math.max(0,(d-1)*i+o-n),c=Math.floor(e/2),f=e-c,p=Math.floor(s/2);l={top:c,bottom:f,left:p,right:s-p,type:`SAME`}}else if(e===`valid`)l={top:0,bottom:0,left:0,right:0,type:`VALID`},u=Math.ceil((t-a+1)/r),d=Math.ceil((n-o+1)/i);else if(typeof e==`object`){let f=c===`channelsLast`?e[1][0]:e[2][0],p=c===`channelsLast`?e[1][1]:e[2][1],m=c===`channelsLast`?e[2][0]:e[3][0],h=c===`channelsLast`?e[2][1]:e[3][1];l={top:f,bottom:p,left:m,right:h,type:f===0&&p===0&&m===0&&h===0?`VALID`:`EXPLICIT`},u=dd((t-a+f+p)/r+1,s),d=dd((n-o+m+h)/i+1,s)}else throw Error(`Unknown padding parameter: ${e}`);return{padInfo:l,outHeight:u,outWidth:d}}function ud(e,t,n,r,i,a,o,s,c,l,u){let d,f,p,m;if(typeof e==`number`){d={top:e,bottom:e,left:e,right:e,front:e,back:e,type:e===0?`VALID`:`NUMBER`};let a=id([t,n,r,1],s,1,i,e,u);f=a[0],p=a[1],m=a[2]}else if(e===`same`){f=Math.ceil(t/i),p=Math.ceil(n/a),m=Math.ceil(r/o);let e=(f-1)*i+s-t,u=(p-1)*a+c-n,h=(m-1)*o+l-r,g=Math.floor(e/2),_=e-g,v=Math.floor(u/2),y=u-v,b=Math.floor(h/2);d={top:v,bottom:y,left:b,right:h-b,front:g,back:_,type:`SAME`}}else if(e===`valid`)d={top:0,bottom:0,left:0,right:0,front:0,back:0,type:`VALID`},f=Math.ceil((t-s+1)/i),p=Math.ceil((n-c+1)/a),m=Math.ceil((r-l+1)/o);else throw Error(`Unknown padding parameter: ${e}`);return{padInfo:d,outDepth:f,outHeight:p,outWidth:m}}function dd(e,t){if(!t)return Math.trunc(e);switch(t){case`round`:return Math.round(e);case`ceil`:return Math.ceil(e);case`floor`:return Math.floor(e);default:throw Error(`Unknown roundingMode ${t}`)}}function fd(e){let[t,n,r]=od(e);return t===1&&n===1&&r===1}function pd(e,t){return fd(e)||fd(t)}function md(e){if(e===`NHWC`)return`channelsLast`;if(e===`NCHW`)return`channelsFirst`;throw Error(`Unknown dataFormat ${e}`)}function hd(e,t,n){if(n!=null){if(typeof t==`string`)throw Error(`Error in ${e}: pad must be an integer when using dimRoundingMode ${n} but got pad ${t}.`);if(typeof t==`number`)y(E(t),()=>`Error in ${e}: pad must be an integer when using dimRoundingMode ${n} but got pad ${t}.`);else if(typeof t==`object`)t.forEach(t=>{t.forEach(t=>{y(E(t),()=>`Error in ${e}: pad must be an integer when using dimRoundingMode ${n} but got pad ${t}.`)})});else throw Error(`Error in ${e}: Unknown padding parameter: ${t}`)}}var gd=n((()=>{A()}));function _d(e,t){let n={x:F(e,`x`,`reshape`,`string_or_numeric`)},r={shape:t};return N.runKernel(Wn,n,r)}var G,K=n((()=>{P(),k(),I(),R(),G=L({reshape_:_d})}));function vd(e,t,n,r,i){let a=F(e,`x`,`avgPool`,`float32`);y(pd(n,1),()=>`Error in avgPool: Either strides or dilations must be 1. Got strides ${n} and dilations '1'`);let o=a,s=!1;a.rank===3&&(s=!0,o=G(a,[1,a.shape[0],a.shape[1],a.shape[2]])),y(o.rank===4,()=>`Error in avgPool: x must be rank 4 but got rank ${o.rank}.`),hd(`avgPool`,r,i);let c={x:o},l={filterSize:t,strides:n,pad:r,dimRoundingMode:i},u=N.runKernel(tt,c,l);return u=z(u,a.dtype),s?G(u,[u.shape[1],u.shape[2],u.shape[3]]):u}var yd,bd=n((()=>{P(),k(),I(),A(),us(),gd(),R(),K(),yd=L({avgPool_:vd})}));function xd(e,t,n,r,i,a=`NDHWC`){let o=F(e,`x`,`avgPool3d`,`float32`),s=o,c=!1;o.rank===4&&(c=!0,s=G(o,[1,o.shape[0],o.shape[1],o.shape[2],o.shape[3]])),y(s.rank===5,()=>`Error in avgPool3d: x must be rank 5 but got rank ${s.rank}.`),y(a===`NDHWC`,()=>`Error in avgPool3d: Only NDHWC is currently supported, but got dataFormat of ${a}`),hd(`avgPool3d`,r,i);let l={x:s},u={filterSize:t,strides:n,pad:r,dimRoundingMode:i,dataFormat:a},d=N.runKernel(rt,l,u);return d=z(d,s.dtype),c?G(d,[d.shape[1],d.shape[2],d.shape[3],d.shape[4]]):d}var Sd,Cd=n((()=>{P(),k(),I(),A(),gd(),us(),R(),K(),Sd=L({avgPool3d_:xd})}));function wd(e,t=0){y(e.length>=1,()=>`Pass at least one tensor to concat`);let n=Na(e,`tensors`,`concat`,`string_or_numeric`);if(n[0].dtype===`complex64`&&n.forEach(e=>{if(e.dtype!==`complex64`)throw Error(`Cannot concatenate complex64 tensors with a tensor
          with dtype ${e.dtype}. `)}),n.length===1)return fs(n[0]);let r=n,i={axis:t};return N.runKernel(ht,r,i)}var Td,Ed=n((()=>{P(),k(),I(),A(),ps(),R(),Td=L({concat_:wd})}));function Dd(e){let t={x:F(e,`x`,`sigmoid`,`float32`)};return N.runKernel(or,t)}var Od,kd=n((()=>{P(),k(),I(),R(),Od=L({sigmoid_:Dd})}));function Ad(e,t,n){let r=F(e,`x`,`slice`,`string_or_numeric`);if(r.rank===0)throw Error(`Slicing scalar is not possible`);let i={x:r},a={begin:t,size:n};return N.runKernel(rr,i,a)}var jd,Md=n((()=>{P(),k(),I(),R(),jd=L({slice_:Ad})}));function Nd(e){let t={x:F(e,`x`,`tanh`,`float32`)};return N.runKernel(Cr,t)}var Pd,Fd=n((()=>{P(),k(),I(),R(),Pd=L({tanh_:Nd})}));function Id(e,t,n,r,i,a){let o=F(e,`forgetBias`,`basicLSTMCell`),s=F(t,`lstmKernel`,`basicLSTMCell`),c=F(n,`lstmBias`,`basicLSTMCell`),l=F(r,`data`,`basicLSTMCell`),u=F(i,`c`,`basicLSTMCell`),d=F(a,`h`,`basicLSTMCell`),f=Td([l,d],1),p=$s(f,s),m=H(p,c),h=m.shape[0],g=m.shape[1]/4,_=[h,g],v=jd(m,[0,0],_),y=jd(m,[0,g],_),b=jd(m,[0,g*2],_),x=jd(m,[0,g*3],_),S=H(U(Od(v),Pd(y)),U(u,Od(H(o,b))));return[S,U(Pd(S),Od(x))]}var Ld,Rd=n((()=>{I(),au(),Ed(),ec(),W(),R(),kd(),Md(),Fd(),Ld=L({basicLSTMCell_:Id})}));function zd(e,t,n){let r=F(e,`x`,`batchToSpaceND`),i=t.reduce((e,t)=>e*t);y(r.rank>=1+t.length,()=>`input rank is ${r.rank} but should be > than blockShape.length ${t.length}`),y(n.length===t.length,()=>`crops.length is ${n.length} but should be equal to blockShape.length  ${t.length}`),y(r.shape[0]%i===0,()=>`input tensor batch is ${r.shape[0]} but is not divisible by the product of the elements of blockShape ${t.join(` * `)} === ${i}`);let a={x:r},o={blockShape:t,crops:n};return N.runKernel(ot,a,o)}var Bd,Vd=n((()=>{P(),k(),I(),A(),R(),Bd=L({batchToSpaceND_:zd})}));function Hd(e){let t;return t=e.rank===0||e.rank===1?G(e,[1,1,1,e.size]):e.rank===2?G(e,[1,1,e.shape[0],e.shape[1]]):e.rank===3?G(e,[1,e.shape[0],e.shape[1],e.shape[2]]):e,t}var Ud=n((()=>{K()}));function Wd(e,t,n,r,i,a){a??=.001;let o=F(e,`x`,`batchNorm`),s=F(t,`mean`,`batchNorm`),c=F(n,`variance`,`batchNorm`),l;i!=null&&(l=F(i,`scale`,`batchNorm`));let u;r!=null&&(u=F(r,`offset`,`batchNorm`)),y(s.rank===c.rank,()=>`Batch normalization gradient requires mean and variance to have equal ranks.`),y(u==null||s.rank===u.rank,()=>`Batch normalization gradient requires mean and offset to have equal ranks.`),y(l==null||s.rank===l.rank,()=>`Batch normalization gradient requires mean and scale to have equal ranks.`);let d={x:Hd(o),scale:l,offset:u,mean:s,variance:c},f={varianceEpsilon:a},p=N.runKernel(Gt,d,f);return G(p,o.shape)}var Gd,Kd=n((()=>{P(),k(),I(),A(),Ud(),R(),K(),Gd=L({batchNorm_:Wd})}));function qd(e,t,n,r,i,a){let o=F(e,`x`,`batchNorm`),s=F(t,`mean`,`batchNorm`),c=F(n,`variance`,`batchNorm`),l;i!=null&&(l=F(i,`scale`,`batchNorm`));let u;return r!=null&&(u=F(r,`offset`,`batchNorm`)),y(o.rank===2,()=>`Error in batchNorm2D: x must be rank 2 but got rank ${o.rank}.`),y(s.rank===2||s.rank===1,()=>`Error in batchNorm2D: mean must be rank 2 or rank 1 but got rank ${s.rank}.`),y(c.rank===2||c.rank===1,()=>`Error in batchNorm2D: variance must be rank 2 or rank 1 but got rank ${c.rank}.`),l!=null&&y(l.rank===2||l.rank===1,()=>`Error in batchNorm2D: scale must be rank 2 or rank 1 but got rank ${l.rank}.`),u!=null&&y(u.rank===2||u.rank===1,()=>`Error in batchNorm2D: offset must be rank 2 or rank 1 but got rank ${u.rank}.`),Gd(o,s,c,u,l,a)}var Jd,Yd=n((()=>{I(),A(),Kd(),R(),Jd=L({batchNorm2d_:qd})}));function Xd(e,t,n,r,i,a){let o=F(e,`x`,`batchNorm`),s=F(t,`mean`,`batchNorm`),c=F(n,`variance`,`batchNorm`),l;i!=null&&(l=F(i,`scale`,`batchNorm`));let u;return r!=null&&(u=F(r,`offset`,`batchNorm`)),y(o.rank===3,()=>`Error in batchNorm3D: x must be rank 3 but got rank ${o.rank}.`),y(s.rank===3||s.rank===1,()=>`Error in batchNorm3D: mean must be rank 3 or rank 1 but got rank ${s.rank}.`),y(c.rank===3||c.rank===1,()=>`Error in batchNorm3D: variance must be rank 3 or rank 1 but got rank ${c.rank}.`),l!=null&&y(l.rank===3||l.rank===1,()=>`Error in batchNorm3D: scale must be rank 3 or rank 1 but got rank ${l.rank}.`),u!=null&&y(u.rank===3||u.rank===1,()=>`Error in batchNorm3D: offset must be rank 3 or rank 1 but got rank ${u.rank}.`),Gd(o,s,c,u,l,a)}var Zd,Qd=n((()=>{I(),A(),Kd(),R(),Zd=L({batchNorm3d_:Xd})}));function $d(e,t,n,r,i,a){let o=F(e,`x`,`batchNorm`),s=F(t,`mean`,`batchNorm`),c=F(n,`variance`,`batchNorm`),l;i!=null&&(l=F(i,`scale`,`batchNorm`));let u;return r!=null&&(u=F(r,`offset`,`batchNorm`)),y(o.rank===4,()=>`Error in batchNorm4D: x must be rank 4 but got rank ${o.rank}.`),y(s.rank===4||s.rank===1,()=>`Error in batchNorm4D: mean must be rank 4 or rank 1 but got rank ${s.rank}.`),y(c.rank===4||c.rank===1,()=>`Error in batchNorm4D: variance must be rank 4 or rank 1 but got rank ${c.rank}.`),l!=null&&y(l.rank===4||l.rank===1,()=>`Error in batchNorm4D: scale must be rank 4 or rank 1 but got rank ${l.rank}.`),u!=null&&y(u.rank===4||u.rank===1,()=>`Error in batchNorm4D: offset must be rank 4 or rank 1 but got rank ${u.rank}.`),Gd(o,s,c,u,l,a)}var ef,tf=n((()=>{I(),A(),Kd(),R(),ef=L({batchNorm4d_:$d})}));function nf(e,t,n){let r=F(e,`x`,`bincount`),i=F(t,`weights`,`bincount`);y(r.dtype===`int32`,()=>`Error in bincount: input dtype must be int32, but got ${r.dtype}`),y(n>=0,()=>`size must be non-negative, but got ${n}.`),y(i.size===r.size||i.size===0,()=>`Error in bincount: weights must have the same size as input or0-length, but got input shape: ${r.shape}, weights shape: ${i.shape}.`);let a={x:r,weights:i},o={size:n};return N.runKernel(st,a,o)}var rf,af=n((()=>{P(),k(),I(),A(),R(),rf=L({bincount_:nf})}));function of(e,t){let n=F(e,`s0`,`broadcastArgs`,`int32`),r=F(t,`s1`,`broadcastArgs`,`int32`);if(n.rank!==1)throw Error(`broadcastArgs(): first input must be a vector (rank=1). Has rank ${n.rank}`);if(r.rank!==1)throw Error(`broadcastArgs(): second input must be a vector (rank=1). Has rank ${r.rank}`);let i={s0:n,s1:r};return N.runKernel(lt,i)}var sf,cf=n((()=>{P(),k(),I(),R(),sf=L({broadcastArgs_:of})}));function lf(e,t){let n=F(e,`broadcastTo`,`x`),r=n.shape;if(De(t),t.length<n.rank)throw Error(`broadcastTo(): shape.length=${t.length} < input.rank=${n.rank}.`);if(t.length>n.rank){let e=n.shape.slice();for(;e.length<t.length;)e.unshift(1);n=G(n,e)}let i=n.shape,a=Array.from(t);for(let e=t.length-1;e>=0;e--)if(i[e]===t[e])a[e]=1;else if(n.shape[e]!==1)throw Error(`broadcastTo(): [${r}] cannot be broadcast to [${t}].`);if(a.map((e,t)=>e>1?t:-1).filter(e=>e>=0).length===0)return fs(n);let o={x:n},s={reps:a};return N.runKernel(wr,o,s)}var uf,df=n((()=>{P(),k(),I(),je(),ps(),R(),K(),uf=L({broadcastTo_:lf})}));function ff(e){let t={x:F(e,`x`,`ceil`,`float32`)};return N.runKernel(dt,t)}var pf,mf=n((()=>{P(),k(),I(),R(),pf=L({ceil_:ff})}));function hf(e,t,n){De(e);let r={shape:e,value:t,dtype:n};return N.runKernel(Vt,{},r)}var gf=n((()=>{P(),k(),je()}));function _f(e,t,n){let r=F(e,`x`,`clipByValue`);if(y(t<=n,()=>`Error in clip: min (${t}) must be less than or equal to max (${n}).`),t===n)return hf(r.shape,t,r.dtype);let i={x:r},a={clipValueMin:t,clipValueMax:n};return N.runKernel(ft,i,a)}var vf,yf=n((()=>{P(),k(),I(),A(),gf(),R(),vf=L({clipByValue_:_f})}));function bf(e){return Td(e,0)}var xf,Sf=n((()=>{Ed(),R(),xf=L({concat1d_:bf})}));function Cf(e,t){return Td(e,t)}var wf,Tf=n((()=>{Ed(),R(),wf=L({concat2d_:Cf})}));function Ef(e,t){return Td(e,t)}var Df,Of=n((()=>{Ed(),R(),Df=L({concat3d_:Ef})}));function kf(e,t){return Td(e,t)}var Af,jf=n((()=>{Ed(),R(),Af=L({concat4d_:kf})}));function Mf(e,t,n,r,i=`NHWC`,a=[1,1],o){let s=F(e,`x`,`conv2d`,`float32`),c=F(t,`filter`,`conv2d`,`float32`),l=s,u=!1;s.rank===3&&(u=!0,l=G(s,[1,s.shape[0],s.shape[1],s.shape[2]])),y(l.rank===4,()=>`Error in conv2d: input must be rank 4, but got rank ${l.rank}.`),y(c.rank===4,()=>`Error in conv2d: filter must be rank 4, but got rank ${c.rank}.`),hd(`conv2d`,r,o);let d=i===`NHWC`?l.shape[3]:l.shape[1];y(d===c.shape[2],()=>`Error in conv2d: depth of input (${d}) must match input depth for filter ${c.shape[2]}.`),y(pd(n,a),()=>`Error in conv2D: Either strides or dilations must be 1. Got strides ${n} and dilations '${a}'`);let f={x:l,filter:c},p={strides:n,pad:r,dataFormat:i,dilations:a,dimRoundingMode:o},m=N.runKernel(gt,f,p);return u?G(m,[m.shape[1],m.shape[2],m.shape[3]]):m}var Nf,Pf=n((()=>{P(),k(),I(),A(),gd(),R(),K(),Nf=L({conv2d_:Mf})}));function Ff(e,t,n,r,i=`NWC`,a=1,o){let s=F(e,`x`,`conv1d`),c=F(t,`filter`,`conv1d`),l=s,u=!1;s.rank===2&&(u=!0,l=G(s,[1,s.shape[0],s.shape[1]])),y(l.rank===3,()=>`Error in conv1d: input must be rank 3, but got rank ${l.rank}.`),y(c.rank===3,()=>`Error in conv1d: filter must be rank 3, but got rank ${c.rank}.`),hd(`conv1d`,r,o),y(l.shape[2]===c.shape[1],()=>`Error in conv1d: depth of input (${l.shape[2]}) must match input depth for filter ${c.shape[1]}.`),y(pd(n,a),()=>`Error in conv1D: Either stride or dilation must be 1. Got stride ${n} and dilation '${a}'`),y(i===`NWC`,()=>`Error in conv1d: got dataFormat of ${i} but only NWC is currently supported.`);let d=G(c,[1,c.shape[0],c.shape[1],c.shape[2]]),f=G(l,[l.shape[0],1,l.shape[1],l.shape[2]]),p=Nf(f,d,[1,n],r,`NHWC`,[1,a],o);return u?G(p,[p.shape[2],p.shape[3]]):G(p,[p.shape[0],p.shape[2],p.shape[3]])}var If,Lf=n((()=>{I(),A(),Pf(),gd(),R(),K(),If=L({conv1d_:Ff})}));function Rf(e,t,n,r,i,a=`NHWC`,o){y(e.length===t.rank,()=>`Length of inShape (${e.length}) and rank of dy (${t.rank}) must match`);let s=e,c=t,l=!1;t.rank===3&&(l=!0,c=G(t,[1,t.shape[0],t.shape[1],t.shape[2]]),s=[1,e[0],e[1],e[2]]),y(s.length===4,()=>`Error in conv2dDerInput: inShape must be length 4, but got length ${s.length}.`),y(c.rank===4,()=>`Error in conv2dDerInput: dy must be rank 4, but got rank ${c.rank}`),y(n.rank===4,()=>`Error in conv2dDerInput: filter must be rank 4, but got rank ${n.rank}`);let u=a===`NHWC`?s[3]:s[1],d=a===`NHWC`?c.shape[3]:c.shape[1];y(u===n.shape[2],()=>`Error in conv2dDerInput: depth of input (${u}) must match input depth for filter ${n.shape[2]}.`),y(d===n.shape[3],()=>`Error in conv2dDerInput: depth of output (${d}) must match output depth for filter ${n.shape[3]}.`),hd(`conv2dDerInput`,i,o);let f={dy:c,filter:n},p={strides:r,pad:i,dataFormat:a,dimRoundingMode:o,inputShape:s},m=N.runKernel(vt,f,p);return l?G(m,[m.shape[1],m.shape[2],m.shape[3]]):m}var zf,Bf=n((()=>{P(),k(),A(),gd(),R(),K(),zf=L({conv2DBackpropInput_:Rf})}));function Vf(e,t,n,r,i,a){let o=F(e,`x`,`conv2dTranspose`),s=F(t,`filter`,`conv2dTranspose`);return zf(n,o,s,r,i,`NHWC`,a)}var Hf,Uf=n((()=>{I(),Bf(),R(),Hf=L({conv2dTranspose_:Vf})}));function Wf(e,t,n,r,i=`NDHWC`,a=[1,1,1]){let o=F(e,`x`,`conv3d`),s=F(t,`filter`,`conv3d`),c=o,l=!1;o.rank===4&&(l=!0,c=G(o,[1,o.shape[0],o.shape[1],o.shape[2],o.shape[3]])),y(c.rank===5,()=>`Error in conv3d: input must be rank 5, but got rank ${c.rank}.`),y(s.rank===5,()=>`Error in conv3d: filter must be rank 5, but got rank ${s.rank}.`),y(c.shape[4]===s.shape[3],()=>`Error in conv3d: depth of input (${c.shape[4]}) must match input depth for filter ${s.shape[3]}.`),y(pd(n,a),()=>`Error in conv3D: Either strides or dilations must be 1. Got strides ${n} and dilations '${a}'`),y(i===`NDHWC`,()=>`Error in conv3d: got dataFormat of ${i} but only NDHWC is currently supported.`);let u={x:c,filter:s},d={strides:n,pad:r,dataFormat:i,dilations:a},f=N.runKernel(yt,u,d);return l?G(f,[f.shape[1],f.shape[2],f.shape[3],f.shape[4]]):f}var Gf,Kf=n((()=>{P(),k(),I(),A(),gd(),R(),K(),Gf=L({conv3d_:Wf})}));function qf(e,t,n,r,i){y(e.length===t.rank,()=>`Length of inShape (${e.length}) and rank of dy (${t.rank}) must match`);let a=e,o=t,s=!1;t.rank===4&&(s=!0,o=G(t,[1,t.shape[0],t.shape[1],t.shape[2],t.shape[3]]),a=[1,e[0],e[1],e[2],e[3]]);let c=a[4],l=o.shape[4];y(a.length===5,()=>`Error in conv3dDerInput: inShape must be length 5, but got length ${a.length}.`),y(o.rank===5,()=>`Error in conv3dDerInput: dy must be rank 5, but got rank ${o.rank}`),y(n.rank===5,()=>`Error in conv3dDerInput: filter must be rank 5, but got rank ${n.rank}`),y(c===n.shape[3],()=>`Error in conv3dDerInput: depth of input (${c}) must match input depth for filter ${n.shape[3]}.`),y(l===n.shape[4],()=>`Error in conv3dDerInput: depth of output (${l}) must match output depth for filter ${n.shape[4]}.`);let u={dy:o,filter:n},d={pad:i,strides:r,inputShape:a},f=N.runKernel(xt,u,d);return s?G(f,[f.shape[1],f.shape[2],f.shape[3],f.shape[4]]):f}var Jf,Yf=n((()=>{P(),k(),A(),R(),K(),Jf=L({conv3DBackpropInput_:qf})}));function Xf(e,t,n,r,i){let a=F(e,`x`,`conv3dTranspose`),o=F(t,`filter`,`conv3dTranspose`);return Jf(n,a,o,r,i)}var Zf,Qf=n((()=>{I(),Yf(),R(),Zf=L({conv3dTranspose_:Xf})}));function $f(e){let t={x:F(e,`x`,`cos`,`float32`)};return N.runKernel(`Cos`,t)}var ep,tp=n((()=>{P(),k(),I(),R(),ep=L({cos_:$f})}));function np(e){let t={x:F(e,`x`,`cosh`,`float32`)};return N.runKernel(St,t)}var rp,ip=n((()=>{P(),k(),I(),R(),rp=L({cosh_:np})}));function ap(e,t=0,n=!1,r=!1){let i={x:F(e,`x`,`cumprod`)},a={axis:t,exclusive:n,reverse:r};return N.runKernel(Ct,i,a)}var op,sp=n((()=>{P(),k(),I(),R(),op=L({cumprod_:ap})}));function cp(e,t=0,n=!1,r=!1){let i={x:F(e,`x`,`cumsum`)},a={axis:t,exclusive:n,reverse:r};return N.runKernel(wt,i,a)}var lp,up=n((()=>{P(),k(),I(),R(),lp=L({cumsum_:cp})}));function dp(e,t,n,r=!1){let i=F(e,`x`,`denseBincount`),a=F(t,`weights`,`denseBincount`);y(i.dtype===`int32`,()=>`Error in denseBincount: input dtype must be int32, but got ${i.dtype}`),y(i.rank<=2,()=>`Error in denseBincount: input must be at most rank 2, but got rank ${i.rank}.`),y(n>=0,()=>`size must be non-negative, but got ${n}.`),y(a.size===i.size||a.size===0,()=>`Error in denseBincount: weights must have the same shape as x or 0-length, but got x shape: ${i.shape}, weights shape: ${a.shape}.`);let o={x:i,weights:a},s={size:n,binaryOutput:r};return N.runKernel(Et,o,s)}var fp,pp=n((()=>{P(),k(),I(),A(),R(),fp=L({denseBincount_:dp})}));function mp(e,t,n=`NHWC`){let r=F(e,`x`,`depthToSpace`,`float32`),i=n===`NHWC`?r.shape[1]:r.shape[2],a=n===`NHWC`?r.shape[2]:r.shape[3],o=n===`NHWC`?r.shape[3]:r.shape[1];y(t>1,()=>`blockSize should be > 1 for depthToSpace, but was: ${t}`),y(i*t>=0,()=>`Negative dimension size caused by overflow when multiplying
    ${i} and ${t}  for depthToSpace with input shape
    ${r.shape}`),y(a*t>=0,()=>`Negative dimension size caused by overflow when multiplying
    ${a} and ${t} for depthToSpace with input shape
        ${r.shape}`),y(o%(t*t)===0,()=>`Dimension size must be evenly divisible by ${t*t} but is ${o} for depthToSpace with input shape ${r.shape}`);let s={x:r},c={blockSize:t,dataFormat:n};return N.runKernel(Dt,s,c)}var hp,gp=n((()=>{P(),k(),I(),A(),R(),hp=L({depthToSpace_:mp})}));function _p(e,t,n,r,i=`NHWC`,a=[1,1],o){let s=F(e,`x`,`depthwiseConv2d`,`float32`),c=F(t,`filter`,`depthwiseConv2d`,`float32`),l=s,u=!1;s.rank===3&&(u=!0,l=G(s,[1,s.shape[0],s.shape[1],s.shape[2]])),y(l.rank===4,()=>`Error in depthwiseConv2d: input must be rank 4, but got rank ${l.rank}.`),y(c.rank===4,()=>`Error in depthwiseConv2d: filter must be rank 4, but got rank ${c.rank}.`);let d=i===`NHWC`?l.shape[3]:l.shape[1];y(d===c.shape[2],()=>`Error in depthwiseConv2d: number of input channels (${d}) must match the inChannels dimension in filter ${c.shape[2]}.`),hd(`depthwiseConv2d`,r,o);let f={x:l,filter:c},p={strides:n,pad:r,dataFormat:i,dilations:a,dimRoundingMode:o},m=N.runKernel(Ot,f,p);return u?G(m,[m.shape[1],m.shape[2],m.shape[3]]):m}var vp,yp=n((()=>{P(),k(),I(),A(),gd(),R(),K(),vp=L({depthwiseConv2d_:_p})}));function bp(e){let t={x:F(e,`x`,`diag`)};return N.runKernel(jt,t)}var xp,Sp=n((()=>{P(),k(),I(),R(),xp=L({diag_:bp})}));function Cp(e,t,n,r,i=[1,1],a=`NHWC`){let o=F(e,`x`,`dilation2d`),s=F(t,`filter`,`dilation2d`);y(o.rank===3||o.rank===4,()=>`Error in dilation2d: input must be rank 3 or 4, but got rank ${o.rank}.`),y(s.rank===3,()=>`Error in dilation2d: filter must be rank 3, but got rank ${s.rank}.`),y(a===`NHWC`,()=>`Error in dilation2d: Only NHWC is currently supported, but got dataFormat of ${a}`);let c=o,l=!1;o.rank===3&&(c=G(o,[1,o.shape[0],o.shape[1],o.shape[2]]),l=!0);let u={x:c,filter:s},d={strides:n,pad:r,dilations:i},f=N.runKernel(Mt,u,d);return l?G(f,[f.shape[1],f.shape[2],f.shape[3]]):f}var wp,Tp=n((()=>{P(),k(),I(),A(),R(),K(),wp=L({dilation2d_:Cp})}));function Ep(e,t){let n=F(e,`a`,`equal`,`string_or_numeric`),r=F(t,`b`,`equal`,`string_or_numeric`);[n,r]=ca(n,r),Gc(n.shape,r.shape);let i={a:n,b:r};return N.runKernel(Rt,i)}var Dp,Op=n((()=>{P(),k(),ma(),I(),Kc(),R(),Dp=L({equal_:Ep})}));function kp(e,t,n){let r=F(t,`a`,`where`),i=F(n,`b`,`where`),a=F(e,`condition`,`where`,`bool`),o=Gc(Gc(a.shape,r.shape),i.shape),s={condition:uf(a,o),t:uf(r,o),e:uf(i,o)};return N.runKernel(tr,s)}var Ap,jp=n((()=>{P(),k(),I(),df(),Kc(),R(),Ap=L({where_:kp})}));function Mp(e){let t={x:F(e,`x`,`zerosLike`)};return N.runKernel(Mr,t)}var Np,Pp=n((()=>{P(),k(),I(),R(),Np=L({zerosLike_:Mp})}));function Fp(e,t){let n=F(e,`a`,`div`),r=F(t,`b`,`div`);[n,r]=ca(n,r);let i=uu(n,r),a=Np(i),o=Dp(r,a);return Ap(o,a,i)}var Ip,Lp=n((()=>{ma(),I(),du(),Op(),R(),jp(),Pp(),Ip=L({divNoNan_:Fp})}));function Rp(e,t){let n=F(e,`t1`,`dot`),r=F(t,`t2`,`dot`);y((n.rank===1||n.rank===2)&&(r.rank===1||r.rank===2),()=>`Error in dot: inputs must all be rank 1 or 2, but got ranks ${n.rank} and ${r.rank}.`);let i=n.rank===1?n.size:n.shape[1],a=r.rank===1?r.size:r.shape[0];if(y(i===a,()=>`Error in dot: inner dimensions of inputs must match, but got ${i} and ${a}.`),n.rank===1&&r.rank===1){let e=G(n,[1,-1]),t=G(r,[-1,1]),i=$s(e,t);return G(i,[])}if(n.rank===1&&r.rank===2){let e=G(n,[1,-1]),t=G(r,[r.shape[0],r.shape[1]]),i=$s(e,t);return G(i,[i.size])}if(n.rank===2&&r.rank===1){let e=G(r,[-1,1]),t=$s(n,e);return G(t,[t.size])}{let e=G(r,[r.shape[0],r.shape[1]]);return $s(n,e)}}var zp,Bp=n((()=>{I(),A(),ec(),R(),K(),zp=L({dot_:Rp})}));function Vp(e,...t){let n=t.map((e,t)=>F(e,`tensors${t}`,`einsum`)),r={equation:e};return N.runKernel(It,n,r)}var Hp,Up=n((()=>{P(),k(),I(),R(),Hp=L({einsum_:Vp})}));function Wp(e){let t={x:F(e,`x`,`elu`,`float32`)};return N.runKernel(`Elu`,t)}var Gp,Kp=n((()=>{P(),k(),I(),R(),Gp=L({elu_:Wp})}));function qp(e){let t=F(e,`x`,`erf`);y(t.dtype===`int32`||t.dtype===`float32`,()=>"Input dtype must be `int32` or `float32`."),t.dtype===`int32`&&(t=z(t,`float32`));let n={x:t};return N.runKernel(`Erf`,n)}var Jp,Yp=n((()=>{P(),k(),I(),A(),us(),R(),Jp=L({erf_:qp})}));function Xp(e,t){for(let n=0;n<e.length;++n)if(e[e.length-n-1]!==t-1-n)return!1;return!0}function Zp(e,t,n){let r=e.length+t.length,i=[],a=0,o=0;for(let s=0;s<r;s++)n.indexOf(s)===-1?i.push(e[a++]):i.push(t[o++]);return i}function Qp(e,t){let n=[],r=e.length;for(let i=0;i<r;i++)t.indexOf(i)===-1&&n.push(e[i]);return[n,t.map(t=>e[t])]}function $p(e,t){return Zp(e,t.map(e=>1),t)}function em(e,t,n){y(Xp(t,n),()=>`${e} supports only inner-most axes for now. Got axes ${t} and rank-${n} input.`)}function tm(e,t){if(Xp(e,t))return null;let n=[];for(let r=0;r<t;++r)e.indexOf(r)===-1&&n.push(r);return e.forEach(e=>n.push(e)),n}function nm(e){return e.map((e,t)=>[t,e]).sort((e,t)=>e[1]-t[1]).map(e=>e[0])}function rm(e,t){let n=[];for(let r=t-e;r<t;++r)n.push(r);return n}var im=n((()=>{A()}));function am(e,t=null,n=!1){let r={x:F(e,`x`,`max`)},i={reductionIndices:t,keepDims:n};return N.runKernel(`Max`,r,i)}var om,sm=n((()=>{P(),k(),I(),R(),om=L({max_:am})}));function cm(e,t=null,n=!1){let r={x:F(e,`x`,`min`)},i={axis:t,keepDims:n};return N.runKernel(`Min`,r,i)}var lm,um=n((()=>{P(),k(),I(),R(),lm=L({min_:cm})}));function dm(e,t){let n=F(e,`base`,`pow`),r=F(t,`exp`,`pow`);[n,r]=ca(n,r);let i={a:n,b:r};return N.runKernel(`Pow`,i)}var fm,pm=n((()=>{P(),k(),ma(),I(),R(),fm=L({pow_:dm})}));function mm(e,t){if((fe(e)&&t!==`string`||Array.isArray(e))&&t!==`complex64`)throw Error(`Error creating a new Scalar: value must be a primitive (number|boolean|string)`);if(t===`string`&&fe(e)&&!(e instanceof Uint8Array))throw Error("When making a scalar from encoded string, the value must be `Uint8Array`.");return Ra(e,[],[],t)}var hm=n((()=>{A(),za()}));function gm(e){let t={x:F(e,`x`,`sqrt`,`float32`)};return N.runKernel(cr,t)}var _m,vm=n((()=>{P(),k(),I(),R(),_m=L({sqrt_:gm})}));function ym(e){let t=F(e,`x`,`square`);return N.runKernel(`Square`,{x:t},{})}var bm,xm=n((()=>{P(),I(),R(),bm=L({square_:ym})}));function Sm(e,t=null,n=!1){let r=F(e,`x`,`sum`);r.dtype===`bool`&&(r=z(r,`int32`));let i={x:r},a={axis:t,keepDims:n};return N.runKernel(`Sum`,i,a)}var q,Cm=n((()=>{P(),k(),I(),us(),R(),q=L({sum_:Sm})}));function wm(e,t=`euclidean`,n=null,r=!1){e=F(e,`x`,`norm`);let i=Tm(e,t,n),a=i.shape;if(r){let t=ae(n,e.shape);a=$p(i.shape,t)}return G(i,a)}function Tm(e,t,n=null){if(e.rank===0)return mu(e);if(e.rank!==1&&n===null)return Tm(G(e,[-1]),t,n);if(e.rank===1||typeof n==`number`||Array.isArray(n)&&n.length===1){if(t===1)return q(mu(e),n);if(t===1/0)return om(mu(e),n);if(t===-1/0)return lm(mu(e),n);if(t===`euclidean`||t===2)return _m(q(fm(mu(e),mm(2,`int32`)),n));throw Error(`Error in norm: invalid ord value: ${t}`)}if(Array.isArray(n)&&n.length===2){if(t===1)return om(q(mu(e),n[0]),n[1]-1);if(t===1/0)return om(q(mu(e),n[1]),n[0]);if(t===-1/0)return lm(q(mu(e),n[1]),n[0]);if(t===`fro`||t===`euclidean`)return _m(q(bm(e),n));throw Error(`Error in norm: invalid ord value: ${t}`)}throw Error(`Error in norm: invalid axis: ${n}`)}var Em,Dm=n((()=>{I(),A(),hu(),im(),sm(),um(),R(),pm(),K(),hm(),vm(),xm(),Cm(),Em=L({norm_:wm})}));function Om(e,t=null,n=!1){return Em(e,`euclidean`,t,n)}var km,Am=n((()=>{Dm(),R(),km=L({euclideanNorm_:Om})}));function jm(e){let t={x:F(e,`x`,`exp`)};return N.runKernel(`Exp`,t)}var Mm,Nm=n((()=>{P(),k(),I(),R(),Mm=L({exp_:jm})}));function Pm(e,t=0){let n=F(e,`x`,`expandDims`,`string_or_numeric`);y(t<=n.rank,()=>`Axis must be <= rank of the tensor`);let r={input:n},i={dim:t};return N.runKernel(zt,r,i)}var Fm,Im=n((()=>{P(),k(),I(),A(),R(),Fm=L({expandDims_:Pm})}));function Lm(e){let t={x:F(e,`x`,`expm1`)};return N.runKernel(Bt,t)}var Rm,zm=n((()=>{P(),k(),I(),R(),Rm=L({expm1_:Lm})}));function Bm(e,t){let n=F(e,`x`,`tile`,`string_or_numeric`);y(n.rank===t.length,()=>`Error in transpose: rank of input ${n.rank} must match length of reps ${t}.`);let r={x:n},i={reps:t};return N.runKernel(wr,r,i)}var Vm,Hm=n((()=>{P(),k(),I(),A(),R(),Vm=L({tile_:Bm})}));function Um(e,t,n,r=`float32`){t??=e;let i=ss([e,t],r),a=e<=t?e:t;for(let e=0;e<a;++e)i.set(1,e,e);let o=G(i.toTensor(),[e,t]);if(n==null)return o;if(n.length===1)return Vm(Fm(o,0),[n[0],1,1]);if(n.length===2)return Vm(Fm(Fm(o,0),0),[n[0],n[1],1,1]);if(n.length===3)return Vm(Fm(Fm(Fm(o,0),0),0),[n[0],n[1],n[2],1,1]);throw Error(`eye() currently supports only 1D and 2D batchShapes, but received ${n.length}D.`)}var Wm,Gm=n((()=>{cs(),Im(),R(),K(),Hm(),Wm=L({eye_:Um})}));function Km(e){let t={x:F(e,`x`,`floor`,`float32`)};return N.runKernel(Ut,t)}var qm,Jm=n((()=>{P(),k(),I(),R(),qm=L({floor_:Km})}));function Ym(e,t,n=0,r=0){let i={x:F(e,`x`,`gather`),indices:F(t,`indices`,`gather`,`int32`)},a={axis:n,batchDims:r};return N.runKernel(Kt,i,a)}var Xm,Zm=n((()=>{P(),k(),I(),R(),Xm=L({gather_:Ym})}));function Qm(e,t){let n=F(e,`a`,`greater`,`string_or_numeric`),r=F(t,`b`,`greater`,`string_or_numeric`);[n,r]=ca(n,r),Gc(n.shape,r.shape);let i={a:n,b:r};return N.runKernel(Jt,i)}var $m,eh=n((()=>{P(),k(),ma(),I(),Kc(),R(),$m=L({greater_:Qm})}));function th(e,t){let n=F(e,`a`,`greaterEqual`,`string_or_numeric`),r=F(t,`b`,`greaterEqual`,`string_or_numeric`);[n,r]=ca(n,r),Gc(n.shape,r.shape);let i={a:n,b:r};return N.runKernel(Yt,i)}var nh,rh=n((()=>{P(),k(),ma(),I(),Kc(),R(),nh=L({greaterEqual_:th})}));function ih(e){let t={x:F(e,`x`,`isFinite`)};return N.runKernel($t,t)}var ah,oh=n((()=>{P(),k(),I(),R(),ah=L({isFinite_:ih})}));function sh(e){let t={x:F(e,`x`,`isInf`)};return N.runKernel(en,t)}var ch,lh=n((()=>{P(),k(),I(),R(),ch=L({isInf_:sh})}));function uh(e){let t={x:F(e,`x`,`isNaN`)};return N.runKernel(tn,t)}var dh,fh=n((()=>{P(),k(),I(),R(),dh=L({isNaN_:uh})}));function ph(e,t=.2){let n={x:F(e,`x`,`leakyRelu`)},r={alpha:t};return N.runKernel(nn,n,r)}var mh,hh=n((()=>{P(),k(),I(),R(),mh=L({leakyRelu_:ph})}));function gh(e,t){let n=F(e,`a`,`less`,`string_or_numeric`),r=F(t,`b`,`less`,`string_or_numeric`);[n,r]=ca(n,r),Gc(n.shape,r.shape);let i={a:n,b:r};return N.runKernel(rn,i)}var _h,vh=n((()=>{P(),k(),ma(),I(),Kc(),R(),_h=L({less_:gh})}));function yh(e,t){let n=F(e,`a`,`lessEqual`,`string_or_numeric`),r=F(t,`b`,`lessEqual`,`string_or_numeric`);[n,r]=ca(n,r),Gc(n.shape,r.shape);let i={a:n,b:r};return N.runKernel(an,i)}var bh,xh=n((()=>{P(),k(),ma(),I(),Kc(),R(),bh=L({lessEqual_:yh})}));function Sh(e,t,n){if(n<=0)throw Error(`The number of values should be positive.`);let r={start:e,stop:t,num:n};return N.runKernel(on,{},r)}var Ch=n((()=>{P(),k()}));function wh(e,t=5,n=1,r=1,i=.5){let a=F(e,`x`,`localResponseNormalization`);y(a.rank===4||a.rank===3,()=>`Error in localResponseNormalization: x must be rank 3 or 4 but got
               rank ${a.rank}.`),y(E(t),()=>`Error in localResponseNormalization: depthRadius must be an integer but got depthRadius ${t}.`);let o=a,s=!1;a.rank===3&&(s=!0,o=G(a,[1,a.shape[0],a.shape[1],a.shape[2]]));let c={x:o},l={depthRadius:t,bias:n,alpha:r,beta:i},u=N.runKernel(`LRN`,c,l);return s?G(u,[u.shape[1],u.shape[2],u.shape[3]]):u}var Th,Eh=n((()=>{P(),k(),I(),A(),R(),K(),Th=L({localResponseNormalization_:wh})}));function Dh(e){let t={x:F(e,`x`,`log`,`float32`)};return N.runKernel(`Log`,t)}var Oh,kh=n((()=>{P(),k(),I(),R(),Oh=L({log_:Dh})}));function Ah(e){let t={x:F(e,`x`,`log1p`)};return N.runKernel(sn,t)}var jh,Mh=n((()=>{P(),k(),I(),R(),jh=L({log1p_:Ah})}));function Nh(e){return y(ye(e),()=>`The f passed in grad(f) must be a function`),(t,n)=>{let r=F(t,`x`,`tf.grad`,`string_or_numeric`),i=n==null?null:F(n,`dy`,`tf.grad`);return N.tidy(()=>{let{value:t,grads:n}=N.gradients(()=>e(r),[r],i);return i!=null&&b(t.shape,i.shape,`The shape of dy passed in grad(f)(x, dy) must match the shape returned by f(x)`),zh(n),n[0]})}}function Ph(e){return y(ye(e),()=>`The f passed in grads(f) must be a function`),(t,n)=>{y(Array.isArray(t),()=>"The args passed in grads(f)(args) must be an array of `Tensor`s or `TensorLike`s");let r=Na(t,`args`,`tf.grads`,`string_or_numeric`),i=n==null?null:F(n,`dy`,`tf.grads`);return N.tidy(()=>{let{value:t,grads:n}=N.gradients(()=>e(...r),r,i);return i!=null&&b(t.shape,i.shape,`The shape of dy passed in grads(f)([x1,...], dy) must match the shape returned by f([x1,...])`),zh(n),n})}}function Fh(e){return y(ye(e),()=>`The f passed in valueAndGrad(f) must be a function`),(t,n)=>{y(t instanceof Xi,()=>`The x passed in valueAndGrad(f)(x) must be a tensor`),y(n==null||n instanceof Xi,()=>`The dy passed in valueAndGrad(f)(x, dy) must be a tensor`);let{grads:r,value:i}=N.gradients(()=>e(t),[t],n);return zh(r),{grad:r[0],value:i}}}function Ih(e){return y(ye(e),()=>`The f passed in valueAndGrads(f) must be a function`),(t,n)=>{y(Array.isArray(t)&&t.every(e=>e instanceof Xi),()=>`The args passed in valueAndGrads(f)(args) must be array of tensors`),y(n==null||n instanceof Xi,()=>`The dy passed in valueAndGrads(f)(args, dy) must be a tensor`);let r=N.gradients(()=>e(...t),t,n);return n!=null&&b(r.value.shape,n.shape,`The shape of dy passed in valueAndGrads(f)([x1,...], dy) must match the shape returned by f([x1,...])`),zh(r.grads),r}}function Lh(e,t){y(ye(e),()=>`The f passed in variableGrads(f) must be a function`),y(t==null||Array.isArray(t)&&t.every(e=>e instanceof Zi),()=>`The varList passed in variableGrads(f, varList) must be an array of variables`);let n=t!=null;if(!n){t=[];for(let e in N.registeredVariables)t.push(N.registeredVariables[e])}let r=n?t.filter(e=>!e.trainable):null,i=t.length;t=t.filter(e=>e.trainable),y(t.length>0,()=>`variableGrads() expects at least one of the input variables to be trainable, but none of the ${i} variables is trainable.`);let{value:a,grads:o}=N.gradients(e,t,null,!0);y(o.some(e=>e!=null),()=>`Cannot find a connection between any variable and the result of the loss function y=f(x). Please make sure the operations that use variables are inside the function f passed to minimize().`),y(a.rank===0,()=>`The f passed in variableGrads(f) must return a scalar, but it returned a rank-${a.rank} tensor`);let s={};return t.forEach((e,t)=>{o[t]!=null&&(s[e.name]=o[t])}),r?.forEach(e=>s[e.name]=null),{value:a,grads:s}}function Rh(e){return N.customGrad(e)}function zh(e){if(e.filter(e=>e==null).length>0)throw Error(`Cannot compute gradient of y=f(x) with respect to x. Make sure that
    the f you passed encloses all operations that lead from x to y.`)}var Bh=n((()=>{P(),M(),I(),A()}));function Vh(e){let t={x:F(e,`x`,`softplus`)};return N.runKernel(sr,t)}var Hh,Uh=n((()=>{P(),k(),I(),R(),Hh=L({softplus_:Vh})}));function Wh(e){let t=F(e,`x`,`logSigmoid`);return Rh(e=>({value:kc(Hh(kc(e))),gradFunc:t=>U(t,Od(kc(e)))}))(t)}var Gh,Kh=n((()=>{Bh(),I(),W(),Ac(),R(),kd(),Uh(),Gh=L({logSigmoid_:Wh})}));function qh(e,t){let n=F(e,`a`,`sub`),r=F(t,`b`,`sub`);[n,r]=ca(n,r);let i={a:n,b:r};return N.runKernel(`Sub`,i)}var J,Jh=n((()=>{P(),k(),ma(),I(),R(),J=L({sub_:qh})}));function Yh(e,t=-1){let n=F(e,`logits`,`logSoftmax`);if(t===-1&&(t=n.rank-1),t!==n.rank-1)throw Error(`Log Softmax along a non-last dimension is not yet supported. Logits was rank ${n.rank} and axis was ${t}`);return Rh((e,n)=>{let r=om(e,t,!0),i=J(e,r),a=J(z(i,`float32`),Oh(q(Mm(i),t,!0)));return n([a]),{value:a,gradFunc:(e,n)=>{let[r]=n,i=Mm(r);return J(e,U(q(e,t,!0),i))}}})(n)}var Xh,Zh=n((()=>{Bh(),I(),us(),Nm(),kh(),sm(),W(),R(),Jh(),Cm(),Xh=L({logSoftmax_:Yh})}));function Qh(e,t=null,n=!1){let r=F(e,`x`,`logSumExp`),i=ae(t,r.shape),a=om(r,i,!0),o=J(r,a),s=Mm(o),c=q(s,i),l=Oh(c),u=H(G(a,l.shape),l);if(n){let e=$p(u.shape,i);return G(u,e)}return u}var $h,eg=n((()=>{I(),A(),au(),im(),Nm(),kh(),sm(),R(),K(),Jh(),Cm(),$h=L({logSumExp_:Qh})}));function tg(e,t){let n=F(e,`a`,`logicalAnd`,`bool`),r=F(t,`b`,`logicalAnd`,`bool`);Gc(n.shape,r.shape);let i={a:n,b:r};return N.runKernel(cn,i)}var ng,rg=n((()=>{P(),k(),I(),Kc(),R(),ng=L({logicalAnd_:tg})}));function ig(e){let t={x:F(e,`x`,`logicalNot`,`bool`)};return N.runKernel(ln,t)}var ag,og=n((()=>{P(),k(),I(),R(),ag=L({logicalNot_:ig})}));function sg(e,t){let n=F(e,`a`,`logicalOr`,`bool`),r=F(t,`b`,`logicalOr`,`bool`);Gc(n.shape,r.shape);let i={a:n,b:r};return N.runKernel(un,i)}var cg,lg=n((()=>{P(),k(),I(),Kc(),R(),cg=L({logicalOr_:sg})}));function ug(e,t){let n=F(e,`a`,`logicalXor`,`bool`),r=F(t,`b`,`logicalXor`,`bool`);return Gc(n.shape,r.shape),ng(cg(e,t),ag(ng(e,t)))}var dg,fg=n((()=>{I(),Kc(),rg(),og(),lg(),R(),dg=L({logicalXor_:ug})}));function pg(e,t,n=`left`){let r=F(e,`sortedSequence`,`searchSorted`),i=F(t,`values`,`searchSorted`),a=r.shape[r.shape.length-1],o=i.shape[i.shape.length-1],s=G(r,[-1,a]),c=G(i,[-1,o]);if(s.rank<2)throw Error(`Sorted input argument must be at least 2-dimensional`);if(s.shape[0]!==c.shape[0])throw Error(`Leading dimension of 'sortedSequence' and 'values' must match.`);if(C(c.shape)>=mg)throw Error(`values tensor size must less than ${mg}`);if(s.shape[1]>=mg)throw Error(`trailing dim_size must less than ${mg} for int32 output type, was ${s.shape[1]}`);let l={sortedSequence:s,values:c},u={side:n};return N.runKernel(er,l,u)}var mg,hg,gg=n((()=>{P(),k(),I(),je(),R(),K(),mg=2147483648,hg=L({searchSorted_:pg})}));function _g(e,t){return hg(e,t,`left`)}var vg=n((()=>{gg()}));function yg(e,t,n,r,i){let a=F(e,`x`,`maxPool`),o=a,s=!1;a.rank===3&&(s=!0,o=G(a,[1,a.shape[0],a.shape[1],a.shape[2]])),y(o.rank===4,()=>`Error in maxPool: input must be rank 4 but got rank ${o.rank}.`),y(pd(n,1),()=>`Error in maxPool: Either strides or dilations must be 1. Got strides ${n} and dilations '1'`),hd(`maxPool`,r,i);let c={x:o},l={filterSize:t,strides:n,pad:r,dimRoundingMode:i},u=N.runKernel(gn,c,l);return s?G(u,[u.shape[1],u.shape[2],u.shape[3]]):u}var bg,xg=n((()=>{P(),k(),I(),A(),gd(),R(),K(),bg=L({maxPool_:yg})}));function Sg(e,t=[1,1,1],n,r,i,a=`NDHWC`){let o=F(e,`x`,`maxPool3d`),s=o,c=!1;o.rank===4&&(c=!0,s=G(o,[1,o.shape[0],o.shape[1],o.shape[2],o.shape[3]])),y(s.rank===5,()=>`Error in maxPool3d: x must be rank 5 but got rank ${s.rank}.`),y(a===`NDHWC`,()=>`Error in maxPool3d: Only NDHWC is currently supported, but got dataFormat of ${a}`),hd(`maxPool3d`,r,i);let l={x:s},u={filterSize:t,strides:n,pad:r,dimRoundingMode:i,dataFormat:a},d=N.runKernel(vn,l,u);return c?G(d,[d.shape[1],d.shape[2],d.shape[3],d.shape[4]]):d}var Cg,wg=n((()=>{P(),k(),I(),A(),gd(),R(),K(),Cg=L({maxPool3d_:Sg})}));function Tg(e,t,n,r,i=!1){let a={x:F(e,`x`,`maxPoolWithArgmax`)},o={filterSize:t,strides:n,pad:r,includeBatchInIndex:i},s=N.runKernel(bn,a,o);return{result:s[0],indexes:s[1]}}var Eg,Dg=n((()=>{P(),k(),I(),R(),Eg=L({maxPoolWithArgmax_:Tg})}));function Og(e,t){let n=F(e,`a`,`maximum`),r=F(t,`b`,`maximum`);[n,r]=ca(n,r),n.dtype===`bool`&&(n=z(n,`int32`),r=z(r,`int32`)),Gc(n.shape,r.shape);let i={a:n,b:r};return N.runKernel(hn,i)}var kg,Ag=n((()=>{P(),k(),ma(),I(),Kc(),us(),R(),kg=L({maximum_:Og})}));function jg(e,t=null,n=!1){let r={x:F(e,`x`,`mean`)},i={axis:t,keepDims:n};return N.runKernel(xn,r,i)}var Mg,Ng=n((()=>{P(),k(),I(),R(),Mg=L({mean_:jg})}));function Pg(e,t=`float32`){if(De(e),t===`complex64`){let t=Pg(e,`float32`),n=Pg(e,`float32`);return Ia(t,n)}let n=Te(C(e),t);return N.makeTensor(n,e,t)}var Fg=n((()=>{P(),A(),La()}));function Ig(e,t=`float32`){if(De(e),t===`complex64`){let t=Ig(e,`float32`),n=Pg(e,`float32`);return Ia(t,n)}let n=we(C(e),t);return N.makeTensor(n,e,t)}var Lg=n((()=>{P(),A(),je(),La(),Fg()}));function Rg(e,t,{indexing:n=`xy`}={}){if(n!==`xy`&&n!==`ij`)throw TypeError(`${n} is not a valid third argument to meshgrid`);if(e===void 0)return[];let r=F(e,`x`,`meshgrid`,e instanceof Xi?e.dtype:`float32`);if(t===void 0)return[r];let i=F(t,`y`,`meshgrid`,t instanceof Xi?t.dtype:`float32`),a=C(r.shape),o=C(i.shape);return n===`xy`?(r=G(r,[1,-1]),i=G(i,[-1,1]),[$s(Ig([o,1],r.dtype),r),$s(i,Ig([1,a],i.dtype))]):(r=G(r,[-1,1]),i=G(i,[1,-1]),[$s(r,Ig([1,o],r.dtype)),$s(Ig([a,1],i.dtype),i)])}var zg=n((()=>{ec(),Lg(),K(),M(),I(),je()}));function Bg(e,t){let n=F(e,`a`,`minimum`),r=F(t,`b`,`minimum`);[n,r]=ca(n,r),n.dtype===`bool`&&(n=z(n,`int32`),r=z(r,`int32`)),Gc(n.shape,r.shape);let i={a:n,b:r};return N.runKernel(Sn,i)}var Vg,Hg=n((()=>{P(),k(),ma(),I(),Kc(),us(),R(),Vg=L({minimum_:Bg})}));function Ug(e,t,n){y(n===`reflect`||n===`symmetric`,()=>`Invalid mode. Mode must be either reflect or symmetric. Got ${n}.`);let r=F(e,`x`,`mirrorPad`);if(r.rank===0)throw Error(`mirrorPad(scalar) is not defined. Pass non-scalar to mirrorPad`);y(t.length===r.rank,()=>`Padding doesn't match input. Must be ${r.rank}. Got ${t.length}.`);let i=+(n===`reflect`);for(let e=0;e<r.rank;e++)y(t[e].length===2,()=>`Invalid number of paddings. Must be length of 2 each.`),y(t[e][0]>=0&&t[e][0]<=r.shape[e]-i&&t[e][1]>=0&&t[e][1]<=r.shape[e]-i,()=>`Padding in dimension ${e} cannot be greater than or equal to ${r.shape[e]-i} or less than 0 for input of shape ${r.shape}`);let a={paddings:t,mode:n},o={x:r};return N.runKernel(Cn,o,a)}var Wg,Gg=n((()=>{P(),k(),I(),A(),R(),Wg=L({mirrorPad_:Ug})}));function Kg(e,t){let n=F(e,`a`,`mod`),r=F(t,`b`,`mod`);[n,r]=ca(n,r);let i={a:n,b:r};return N.runKernel(`Mod`,i)}var qg,Jg=n((()=>{P(),k(),ma(),I(),R(),qg=L({mod_:Kg})}));function Yg(e,t=null,n=!1){e=F(e,`x`,`moments`);let r=ae(t,e.shape),i=Mg(e,r,n),a=i.shape;n||(a=$p(i.shape,r));let o=bm(J(z(e,`float32`),G(i,a)));return{mean:i,variance:Mg(o,r,n)}}var Xg,Zg=n((()=>{I(),A(),im(),us(),Ng(),R(),K(),xm(),Jh(),Xg=L({moments_:Yg})}));function Qg(e,t,n,r){let i=F(t,`data`,`multiRNNCell`),a=Na(n,`c`,`multiRNNCell`),o=Na(r,`h`,`multiRNNCell`),s=i,c=[];for(let t=0;t<e.length;t++){let n=e[t](s,a[t],o[t]);c.push(n[0]),c.push(n[1]),s=n[1]}let l=[],u=[];for(let e=0;e<c.length;e+=2)l.push(c[e]),u.push(c[e+1]);return[l,u]}var $g,e_=n((()=>{I(),R(),$g=L({multiRNNCell_:Qg})}));function t_(e,t,n,r=!1){let i=F(e,`logits`,`multinomial`),a=i.size,o=i.rank;if(a<2)throw Error(`Error in multinomial: you need at least 2 outcomes, but got ${a}.`);if(o>2)throw Error(`Rank of probabilities must be 1 or 2, but is ${o}`);n||=Math.random();let s={logits:o===1?G(i,[1,-1]):i},c={numSamples:t,seed:n,normalized:r},l=N.runKernel(wn,s,c);return o===1?G(l,[l.size]):l}var n_,r_=n((()=>{P(),k(),I(),R(),K(),n_=L({multinomial_:t_})}));function i_(e,t){let n=F(e,`a`,`notEqual`,`string_or_numeric`),r=F(t,`b`,`notEqual`,`string_or_numeric`);[n,r]=ca(n,r),Gc(n.shape,r.shape);let i={a:n,b:r};return N.runKernel(En,i)}var a_,o_=n((()=>{P(),k(),ma(),I(),Kc(),R(),a_=L({notEqual_:i_})}));function s_(e){let t={x:F(e,`x`,`onesLike`)};return N.runKernel(An,t)}var c_,l_=n((()=>{P(),k(),I(),R(),c_=L({onesLike_:s_})}));function u_(e,t){let n=F(e,`v1`,`outerProduct`),r=F(t,`v2`,`outerProduct`);y(n.rank===1&&r.rank===1,()=>`Error in outerProduct: inputs must be rank 1, but got ranks ${n.rank} and ${r.rank}.`);let i=G(n,[-1,1]),a=G(r,[1,-1]);return $s(i,a)}var d_,f_=n((()=>{I(),A(),ec(),R(),K(),d_=L({outerProduct_:u_})}));function p_(e,t,n=0){let r=F(e,`x`,`pad`);if(r.rank===0)throw Error(`pad(scalar) is not defined. Pass non-scalar to pad`);let i={paddings:t,constantValue:n},a={x:r};return N.runKernel(Nn,a,i)}var m_,h_=n((()=>{P(),k(),I(),R(),m_=L({pad_:p_})}));function g_(e,t,n=0){return y(t.length===2,()=>`Invalid number of paddings. Must be length of 2.`),m_(e,[t],n)}var __,v_=n((()=>{A(),R(),h_(),__=L({pad1d_:g_})}));function y_(e,t,n=0){return y(t.length===2&&t[0].length===2&&t[1].length===2,()=>`Invalid number of paddings. Must be length of 2 each.`),m_(e,t,n)}var b_,x_=n((()=>{A(),R(),h_(),b_=L({pad2d_:y_})}));function S_(e,t,n=0){return y(t.length===3&&t[0].length===2&&t[1].length===2&&t[2].length===2,()=>`Invalid number of paddings. Must be length of 2 each.`),m_(e,t,n)}var C_,w_=n((()=>{A(),R(),h_(),C_=L({pad3d_:S_})}));function T_(e,t,n=0){return y(t.length===4&&t[0].length===2&&t[1].length===2&&t[2].length===2&&t[3].length===2,()=>`Invalid number of paddings. Must be length of 2 each.`),m_(e,t,n)}var E_,D_=n((()=>{A(),R(),h_(),E_=L({pad4d_:T_})}));function O_(e,t,n){let r=F(e,`x`,`spaceToBatchND`);y(r.rank>=1+t.length,()=>`input rank ${r.rank} should be > than [blockShape] ${t.length}`),y(n.length===t.length,()=>`paddings.shape[0] ${n.length} must be equal to [blockShape] ${t.length}`),y(r.shape.reduce((e,r,i)=>i>0&&i<=t.length?e&&(r+n[i-1][0]+n[i-1][1])%t[i-1]===0:e,!0),()=>`input spatial dimensions ${r.shape.slice(1)} with paddings ${n.toString()} must be divisible by blockShapes ${t.toString()}`);let i={x:r},a={blockShape:t,paddings:n};return N.runKernel(lr,i,a)}var k_,A_=n((()=>{P(),k(),I(),A(),R(),k_=L({spaceToBatchND_:O_})}));function j_(e,t,n,r,i,a,o){i??=[1,1],a??=1,r===0&&(r=`valid`);let s=F(e,`x`,`maxPool`),c=s,l=!1;s.rank===3&&(l=!0,c=G(s,[1,s.shape[0],s.shape[1],s.shape[2]])),y(pd(a,i),()=>`Error in pool: Either strides or dilations must be 1. Got strides ${a} and dilations '${i}'`);let u=$u(c.shape,t,a,i,r),d=[u.dilationHeight,u.dilationWidth],f;f=r===`same`?N_([u.filterHeight,u.filterWidth],d):[[0,0],[0,0]];let p=d[0]===1&&d[1]===1,[m,h]=M_([u.inHeight,u.inWidth],d,f),g=p?r:`valid`,_=p?c:k_(c,d,m),v=(n===`avg`?()=>yd(_,t,a,g,o):()=>bg(_,t,a,g,o))(),b=p?v:Bd(v,d,h);return l?G(b,[b.shape[1],b.shape[2],b.shape[3]]):b}function M_(e,t,n){let r=n.map(e=>e[0]),i=n.map(e=>e[1]),a=e.concat(r,i),o=t.map((e,t)=>(e-a[t]%e)%e),s=i.map((e,t)=>e+o[t]);return[t.map((e,t)=>[r[t],s[t]]),t.map((e,t)=>[0,o[t]])]}function N_(e,t){let n=e.map((e,n)=>e+(e-1)*(t[n]-1)).map(e=>e-1),r=n.map(e=>Math.floor(e/2)),i=n.map((e,t)=>e-r[t]);return n.map((e,t)=>[r[t],i[t]])}var P_,F_=n((()=>{I(),A(),bd(),Vd(),gd(),xg(),R(),K(),A_(),P_=L({pool_:j_})}));function I_(e,t){let n={x:F(e,`x`,`prelu`),alpha:F(t,`alpha`,`prelu`)};return N.runKernel(Fn,n)}var L_,R_=n((()=>{P(),k(),I(),R(),L_=L({prelu_:I_})}));function z_(e,t=null,n=!1){let r=F(e,`x`,`prod`);r.dtype===`bool`&&(r=z(r,`int32`));let i={x:r},a={axis:t,keepDims:n};return N.runKernel(In,i,a)}var B_,V_=n((()=>{P(),k(),I(),us(),R(),B_=L({prod_:z_})}));function H_(e,t,n,r){let i={paramsNestedSplits:e.map((e,t)=>F(e,`tensors${t}`,`raggedGather`,`int32`)),paramsDenseValues:F(t,`paramsDenseValues`,`raggedGather`),indices:F(n,`indices`,`raggedGather`,`int32`)},a={outputRaggedRank:r},o=N.runKernel(Ln,i,a);return{outputNestedSplits:o.slice(0,o.length-1),outputDenseValues:o[o.length-1]}}var U_,W_=n((()=>{P(),k(),I(),R(),U_=L({raggedGather_:H_})}));function G_(e,t,n){let r=F(e,`starts`,`raggedRange`),i={starts:r,limits:F(t,`limits`,`raggedRange`,r.dtype),deltas:F(n,`deltas`,`raggedRange`,r.dtype)},a=N.runKernel(Rn,i);return{rtNestedSplits:a[0],rtDenseValues:a[1]}}var K_,q_=n((()=>{P(),k(),I(),R(),K_=L({raggedRange_:G_})}));function J_(e,t,n,r,i){let a=F(e,`shape`,`raggedTensorToTensor`,`int32`),o=F(t,`values`,`raggedTensorToTensor`),s={shape:a,values:o,defaultValue:F(n,`defaultValue`,`raggedTensorToTensor`,o.dtype),rowPartitionTensors:r.map((e,t)=>F(e,`tensors${t}`,`raggedTensorToTensor`,`int32`))},c={rowPartitionTypes:i};return N.runKernel(zn,s,c)}var Y_,X_=n((()=>{P(),k(),I(),R(),Y_=L({raggedTensorToTensor_:J_})}));function Z_(e,t,n){De(e);let r=C(e),i=null;if(n==null||n===`float32`)i=new Float32Array(r);else if(n===`int32`)i=new Int32Array(r);else if(n===`bool`)i=new Uint8Array(r);else throw Error(`Unknown data type ${n}`);for(let e=0;e<r;e++)i[e]=t();return N.makeTensor(i,e,n)}var Q_,$_=n((()=>{P(),A(),je(),R(),Q_=L({rand_:Z_})})),ev=i(((e,t,n)=>{(function(e,t,n){function r(e){var t=this,n=o();t.next=function(){var e=2091639*t.s0+t.c*23283064365386963e-26;return t.s0=t.s1,t.s1=t.s2,t.s2=e-(t.c=e|0)},t.c=1,t.s0=n(` `),t.s1=n(` `),t.s2=n(` `),t.s0-=n(e),t.s0<0&&(t.s0+=1),t.s1-=n(e),t.s1<0&&(t.s1+=1),t.s2-=n(e),t.s2<0&&(t.s2+=1),n=null}function i(e,t){return t.c=e.c,t.s0=e.s0,t.s1=e.s1,t.s2=e.s2,t}function a(e,t){var n=new r(e),a=t&&t.state,o=n.next;return o.int32=function(){return n.next()*4294967296|0},o.double=function(){return o()+(o()*2097152|0)*11102230246251565e-32},o.quick=o,a&&(typeof a==`object`&&i(a,n),o.state=function(){return i(n,{})}),o}function o(){var e=4022871197;return function(t){t=String(t);for(var n=0;n<t.length;n++){e+=t.charCodeAt(n);var r=.02519603282416938*e;e=r>>>0,r-=e,r*=e,e=r>>>0,r-=e,e+=r*4294967296}return(e>>>0)*23283064365386963e-26}}t&&t.exports?t.exports=a:n&&n.amd?n(function(){return a}):this.alea=a})(n,typeof t==`object`&&t,typeof define==`function`&&define)})),tv=i(((e,t,n)=>{(function(e,t,n){function r(e){var t=this,n=``;t.x=0,t.y=0,t.z=0,t.w=0,t.next=function(){var e=t.x^t.x<<11;return t.x=t.y,t.y=t.z,t.z=t.w,t.w^=t.w>>>19^e^e>>>8},e===(e|0)?t.x=e:n+=e;for(var r=0;r<n.length+64;r++)t.x^=n.charCodeAt(r)|0,t.next()}function i(e,t){return t.x=e.x,t.y=e.y,t.z=e.z,t.w=e.w,t}function a(e,t){var n=new r(e),a=t&&t.state,o=function(){return(n.next()>>>0)/4294967296};return o.double=function(){do var e=((n.next()>>>11)+(n.next()>>>0)/4294967296)/(1<<21);while(e===0);return e},o.int32=n.next,o.quick=o,a&&(typeof a==`object`&&i(a,n),o.state=function(){return i(n,{})}),o}t&&t.exports?t.exports=a:n&&n.amd?n(function(){return a}):this.xor128=a})(n,typeof t==`object`&&t,typeof define==`function`&&define)})),nv=i(((e,t,n)=>{(function(e,t,n){function r(e){var t=this,n=``;t.next=function(){var e=t.x^t.x>>>2;return t.x=t.y,t.y=t.z,t.z=t.w,t.w=t.v,(t.d=t.d+362437|0)+(t.v=t.v^t.v<<4^(e^e<<1))|0},t.x=0,t.y=0,t.z=0,t.w=0,t.v=0,e===(e|0)?t.x=e:n+=e;for(var r=0;r<n.length+64;r++)t.x^=n.charCodeAt(r)|0,r==n.length&&(t.d=t.x<<10^t.x>>>4),t.next()}function i(e,t){return t.x=e.x,t.y=e.y,t.z=e.z,t.w=e.w,t.v=e.v,t.d=e.d,t}function a(e,t){var n=new r(e),a=t&&t.state,o=function(){return(n.next()>>>0)/4294967296};return o.double=function(){do var e=((n.next()>>>11)+(n.next()>>>0)/4294967296)/(1<<21);while(e===0);return e},o.int32=n.next,o.quick=o,a&&(typeof a==`object`&&i(a,n),o.state=function(){return i(n,{})}),o}t&&t.exports?t.exports=a:n&&n.amd?n(function(){return a}):this.xorwow=a})(n,typeof t==`object`&&t,typeof define==`function`&&define)})),rv=i(((e,t,n)=>{(function(e,t,n){function r(e){var t=this;t.next=function(){var e=t.x,n=t.i,r=e[n],i;return r^=r>>>7,i=r^r<<24,r=e[n+1&7],i^=r^r>>>10,r=e[n+3&7],i^=r^r>>>3,r=e[n+4&7],i^=r^r<<7,r=e[n+7&7],r^=r<<13,i^=r^r<<9,e[n]=i,t.i=n+1&7,i};function n(e,t){var n,r=[];if(t===(t|0))r[0]=t;else for(t=``+t,n=0;n<t.length;++n)r[n&7]=r[n&7]<<15^t.charCodeAt(n)+r[n+1&7]<<13;for(;r.length<8;)r.push(0);for(n=0;n<8&&r[n]===0;++n);for(n==8?r[7]=-1:r[n],e.x=r,e.i=0,n=256;n>0;--n)e.next()}n(t,e)}function i(e,t){return t.x=e.x.slice(),t.i=e.i,t}function a(e,t){e??=+new Date;var n=new r(e),a=t&&t.state,o=function(){return(n.next()>>>0)/4294967296};return o.double=function(){do var e=((n.next()>>>11)+(n.next()>>>0)/4294967296)/(1<<21);while(e===0);return e},o.int32=n.next,o.quick=o,a&&(a.x&&i(a,n),o.state=function(){return i(n,{})}),o}t&&t.exports?t.exports=a:n&&n.amd?n(function(){return a}):this.xorshift7=a})(n,typeof t==`object`&&t,typeof define==`function`&&define)})),iv=i(((e,t,n)=>{(function(e,t,n){function r(e){var t=this;t.next=function(){var e=t.w,n=t.X,r=t.i,i,a;return t.w=e=e+1640531527|0,a=n[r+34&127],i=n[r=r+1&127],a^=a<<13,i^=i<<17,a^=a>>>15,i^=i>>>12,a=n[r]=a^i,t.i=r,a+(e^e>>>16)|0};function n(e,t){var n,r,i,a,o,s=[],c=128;for(t===(t|0)?(r=t,t=null):(t+=`\0`,r=0,c=Math.max(c,t.length)),i=0,a=-32;a<c;++a)t&&(r^=t.charCodeAt((a+32)%t.length)),a===0&&(o=r),r^=r<<10,r^=r>>>15,r^=r<<4,r^=r>>>13,a>=0&&(o=o+1640531527|0,n=s[a&127]^=r+o,i=n==0?i+1:0);for(i>=128&&(s[(t&&t.length||0)&127]=-1),i=127,a=512;a>0;--a)r=s[i+34&127],n=s[i=i+1&127],r^=r<<13,n^=n<<17,r^=r>>>15,n^=n>>>12,s[i]=r^n;e.w=o,e.X=s,e.i=i}n(t,e)}function i(e,t){return t.i=e.i,t.w=e.w,t.X=e.X.slice(),t}function a(e,t){e??=+new Date;var n=new r(e),a=t&&t.state,o=function(){return(n.next()>>>0)/4294967296};return o.double=function(){do var e=((n.next()>>>11)+(n.next()>>>0)/4294967296)/(1<<21);while(e===0);return e},o.int32=n.next,o.quick=o,a&&(a.X&&i(a,n),o.state=function(){return i(n,{})}),o}t&&t.exports?t.exports=a:n&&n.amd?n(function(){return a}):this.xor4096=a})(n,typeof t==`object`&&t,typeof define==`function`&&define)})),av=i(((e,t,n)=>{(function(e,t,n){function r(e){var t=this,n=``;t.next=function(){var e=t.b,n=t.c,r=t.d,i=t.a;return e=e<<25^e>>>7^n,n=n-r|0,r=r<<24^r>>>8^i,i=i-e|0,t.b=e=e<<20^e>>>12^n,t.c=n=n-r|0,t.d=r<<16^n>>>16^i,t.a=i-e|0},t.a=0,t.b=0,t.c=-1640531527,t.d=1367130551,e===Math.floor(e)?(t.a=e/4294967296|0,t.b=e|0):n+=e;for(var r=0;r<n.length+20;r++)t.b^=n.charCodeAt(r)|0,t.next()}function i(e,t){return t.a=e.a,t.b=e.b,t.c=e.c,t.d=e.d,t}function a(e,t){var n=new r(e),a=t&&t.state,o=function(){return(n.next()>>>0)/4294967296};return o.double=function(){do var e=((n.next()>>>11)+(n.next()>>>0)/4294967296)/(1<<21);while(e===0);return e},o.int32=n.next,o.quick=o,a&&(typeof a==`object`&&i(a,n),o.state=function(){return i(n,{})}),o}t&&t.exports?t.exports=a:n&&n.amd?n(function(){return a}):this.tychei=a})(n,typeof t==`object`&&t,typeof define==`function`&&define)})),ov=i(((e,t,n)=>{(function(e,n,r){var i=256,a=6,o=52,s=`random`,c=r.pow(i,a),l=r.pow(2,o),u=l*2,d=i-1,f;function p(e,t,o){var d=[];t=t==1?{entropy:!0}:t||{};var f=_(g(t.entropy?[e,y(n)]:e??v(),3),d),p=new m(d),b=function(){for(var e=p.g(a),t=c,n=0;e<l;)e=(e+n)*i,t*=i,n=p.g(1);for(;e>=u;)e/=2,t/=2,n>>>=1;return(e+n)/t};return b.int32=function(){return p.g(4)|0},b.quick=function(){return p.g(4)/4294967296},b.double=b,_(y(p.S),n),(t.pass||o||function(e,t,n,i){return i&&(i.S&&h(i,p),e.state=function(){return h(p,{})}),n?(r[s]=e,t):e})(b,f,`global`in t?t.global:this==r,t.state)}function m(e){var t,n=e.length,r=this,a=0,o=r.i=r.j=0,s=r.S=[];for(n||(e=[n++]);a<i;)s[a]=a++;for(a=0;a<i;a++)s[a]=s[o=d&o+e[a%n]+(t=s[a])],s[o]=t;(r.g=function(e){for(var t,n=0,a=r.i,o=r.j,s=r.S;e--;)t=s[a=d&a+1],n=n*i+s[d&(s[a]=s[o=d&o+t])+(s[o]=t)];return r.i=a,r.j=o,n})(i)}function h(e,t){return t.i=e.i,t.j=e.j,t.S=e.S.slice(),t}function g(e,t){var n=[],r=typeof e,i;if(t&&r==`object`)for(i in e)try{n.push(g(e[i],t-1))}catch{}return n.length?n:r==`string`?e:e+`\0`}function _(e,t){for(var n=e+``,r,i=0;i<n.length;)t[d&i]=d&(r^=t[d&i]*19)+n.charCodeAt(i++);return y(t)}function v(){try{var t;return f&&(t=f.randomBytes)?t=t(i):(t=new Uint8Array(i),(e.crypto||e.msCrypto).getRandomValues(t)),y(t)}catch{var r=e.navigator,a=r&&r.plugins;return[+new Date,e,a,e.screen,y(n)]}}function y(e){return String.fromCharCode.apply(0,e)}if(_(r.random(),n),typeof t==`object`&&t.exports){t.exports=p;try{f=ns()}catch{}}else typeof define==`function`&&define.amd?define(function(){return p}):r[`seed`+s]=p})(typeof self<`u`?self:n,[],Math)})),sv=i(((e,t)=>{var n=ev(),r=tv(),i=nv(),a=rv(),o=iv(),s=av(),c=ov();c.alea=n,c.xor128=r,c.xorwow=i,c.xorshift7=a,c.xor4096=o,c.tychei=s,t.exports=c})),cv,lv,uv,dv,fv=n((()=>{cv=t(sv()),lv=class{constructor(e,t,n,r,i){this.mean=e,this.stdDev=t,this.dtype=n,this.nextVal=NaN,this.truncated=r,this.truncated&&(this.upper=this.mean+this.stdDev*2,this.lower=this.mean-this.stdDev*2);let a=i||Math.random();this.random=cv.alea(a.toString())}nextValue(){if(!isNaN(this.nextVal)){let e=this.nextVal;return this.nextVal=NaN,e}let e,t,n=!1;for(;!n;){let r,i,a;do r=2*this.random()-1,i=2*this.random()-1,a=r*r+i*i;while(a>=1||a===0);let o=Math.sqrt(-2*Math.log(a)/a);e=this.mean+this.stdDev*r*o,t=this.mean+this.stdDev*i*o,(!this.truncated||this.isValidTruncated(e))&&(n=!0)}return(!this.truncated||this.isValidTruncated(t))&&(this.nextVal=this.convertValue(t)),this.convertValue(e)}convertValue(e){return this.dtype==null||this.dtype===`float32`?e:Math.round(e)}isValidTruncated(e){return e<=this.upper&&e>=this.lower}},uv=class{constructor(e,t,n,r){this.alpha=e,this.beta=1/t,this.dtype=n;let i=r||Math.random();this.randu=cv.alea(i.toString()),this.randn=new lv(0,1,n,!1,this.randu()),this.d=e<1?e+2/3:e-1/3,this.c=1/Math.sqrt(9*this.d)}nextValue(){let e,t,n,r,i,a;for(;;){do r=this.randn.nextValue(),a=1+this.c*r;while(a<=0);if(a*=a*a,e=r*r,t=1-.331*e*e,n=.5*e+this.d*(1-a+Math.log(a)),i=this.randu(),i<t||Math.log(i)<n)break}return a=1/this.beta*this.d*a,this.alpha<1&&(a*=this.randu()**(1/this.alpha)),this.convertValue(a)}convertValue(e){return this.dtype===`float32`?e:Math.round(e)}},dv=class{constructor(e=0,t=1,n,r){if(this.canReturnFloat=()=>this.dtype==null||this.dtype===`float32`,this.min=e,this.range=t-e,this.dtype=n,r??=Math.random(),typeof r==`number`&&(r=r.toString()),!this.canReturnFloat()&&this.range<=1)throw Error(`The difference between ${e} - ${t} <= 1 and dtype is not float`);this.random=cv.alea(r)}convertValue(e){return this.canReturnFloat()?e:Math.round(e)}nextValue(){return this.convertValue(this.min+this.range*this.random())}}}));function pv(e,t,n=1,r=`float32`,i){if(De(e),n??=1,r??=`float32`,r!==`float32`&&r!==`int32`)throw Error(`Unsupported data type ${r}`);let a=new uv(t,n,r,i),o=ss(e,r);for(let e=0;e<o.values.length;e++)o.values[e]=a.nextValue();return o.toTensor()}var mv,hv=n((()=>{je(),cs(),R(),fv(),mv=L({randomGamma_:pv})}));function gv(e,t=0,n=1,r,i){if(De(e),r!=null&&r===`bool`)throw Error(`Unsupported data type ${r}`);let a=new lv(t,n,r,!1,i),o=ss(e,r);for(let e=0;e<o.values.length;e++)o.values[e]=a.nextValue();return o.toTensor()}var _v,vv=n((()=>{je(),cs(),R(),fv(),_v=L({randomNormal_:gv})}));function yv(e,t,n){if(t!=null&&t===`bool`)throw Error(`Unsupported data type ${t}`);return _v(e,0,1,t,n)}var bv,xv=n((()=>{R(),vv(),bv=L({randomStandardNormal_:yv})}));function Sv(e,t=0,n=1,r=`float32`,i){De(e);let a=ss(e,r),o=new dv(t,n,null,i);for(let e=0;e<a.values.length;e++)a.values[e]=o.nextValue();return a.toTensor()}var Cv,wv=n((()=>{je(),cs(),R(),fv(),Cv=L({randomUniform_:Sv})}));function Tv(e,t,n=1,r=`float32`){if(n===0)throw Error(`Cannot have a step of zero`);let i={start:e,stop:t,step:n,dtype:r};return N.runKernel(Bn,{},i)}var Ev=n((()=>{P(),k()}));function Dv(e){let t={x:F(e,`x`,`reciprocal`)};return N.runKernel(Hn,t)}var Ov,kv=n((()=>{P(),k(),I(),R(),Ov=L({reciprocal_:Dv})}));function Av(e){let t={x:F(e,`x`,`relu`)};return N.runKernel(Un,t)}var jv,Mv=n((()=>{P(),k(),I(),R(),jv=L({relu_:Av})}));function Nv(e){let t={x:F(e,`x`,`relu6`)};return N.runKernel(Yn,t)}var Pv,Fv=n((()=>{P(),k(),I(),R(),Pv=L({relu6_:Nv})}));function Iv(e,t){let n={x:F(e,`x`,`reverse`)},r={dims:t};return N.runKernel(Xn,n,r)}var Lv,Rv=n((()=>{P(),k(),I(),R(),Lv=L({reverse_:Iv})}));function zv(e){let t=F(e,`x`,`reverse`);return y(t.rank===1,()=>`Error in reverse1D: x must be rank 1 but got rank ${t.rank}.`),Lv(t,0)}var Bv,Vv=n((()=>{I(),A(),R(),Rv(),Bv=L({reverse1d_:zv})}));function Hv(e,t){let n=F(e,`x`,`reverse`);return y(n.rank===2,()=>`Error in reverse2D: x must be rank 2 but got rank ${n.rank}.`),Lv(n,t)}var Uv,Wv=n((()=>{I(),A(),R(),Rv(),Uv=L({reverse2d_:Hv})}));function Gv(e,t){let n=F(e,`x`,`reverse`);return y(n.rank===3,()=>`Error in reverse3D: x must be rank 3 but got rank ${n.rank}.`),Lv(n,t)}var Kv,qv=n((()=>{I(),A(),R(),Rv(),Kv=L({reverse3d_:Gv})}));function Jv(e,t){let n=F(e,`x`,`reverse`);return y(n.rank===4,()=>`Error in reverse4D: x must be rank 4 but got rank ${n.rank}.`),Lv(n,t)}var Yv,Xv=n((()=>{I(),A(),R(),Rv(),Yv=L({reverse4d_:Jv})}));function Zv(e){let t={x:F(e,`x`,`round`)};return N.runKernel(Zn,t)}var Qv,$v=n((()=>{P(),k(),I(),R(),Qv=L({round_:Zv})}));function ey(e){let t={x:F(e,`x`,`rsqrt`,`float32`)};return N.runKernel(Qn,t)}var ty,ny=n((()=>{P(),k(),I(),R(),ty=L({rsqrt_:ey})}));function ry(e){let t={x:F(e,`x`,`selu`)};return N.runKernel(nr,t)}var iy,ay=n((()=>{P(),k(),I(),R(),iy=L({selu_:ry})}));function oy(e,t,n,r,i,a=[1,1],o=`NHWC`){let s=F(e,`x`,`separableConv2d`),c=F(t,`depthwiseFilter`,`separableConv2d`),l=F(n,`pointwiseFilter`,`separableConv2d`),u=s,d=!1;if(s.rank===3&&(d=!0,u=G(s,[1,s.shape[0],s.shape[1],s.shape[2]])),o===`NCHW`)throw Error(`separableConv2d currently does not support dataFormat NCHW; only NHWC is supported`);y(u.rank===4,()=>`Error in separableConv2d: input must be rank 4, but got rank ${u.rank}.`),y(c.rank===4,()=>`Error in separableConv2d: depthwise filter must be rank 4, but got rank ${c.rank}.`),y(l.rank===4,()=>`Error in separableConv2d: pointwise filter must be rank 4, but got rank ${c.rank}.`),y(l.shape[0]===1,()=>`Error in separableConv2d: the first dimension of pointwise filter  must be 1, but got ${l.shape[0]}.`),y(l.shape[1]===1,()=>`Error in separableConv2d: the second dimension of pointwise filter must be 1, but got ${l.shape[1]}.`);let f=c.shape[2],p=c.shape[3];y(l.shape[2]===f*p,()=>`Error in separableConv2d: the third dimension of pointwise filter must be ${f*p}, but got ${l.shape[2]}.`);let m=vp(u,c,r,i,o,a),h=Nf(m,l,1,`valid`,o);return d?G(h,[h.shape[1],h.shape[2],h.shape[3]]):h}var sy,cy=n((()=>{I(),A(),Pf(),yp(),R(),K(),sy=L({separableConv2d_:oy})}));async function ly(e,t){let n=F(e,`x`,`setdiff1d`),r=F(t,`y`,`setdiff1d`);y(n.dtype===r.dtype,()=>`x and y should have the same dtype, but got x (${n.dtype}) and y (${r.dtype}).`),y(n.rank===1,()=>`x should be 1D tensor, but got x (${n.shape}).`),y(r.rank===1,()=>`y should be 1D tensor, but got y (${r.shape}).`);let i=await n.data(),a=await r.data(),o=new Set(a),s=0;for(let e=0;e<i.length;e++)o.has(i[e])||s++;let c=new qi([s],n.dtype),l=new qi([s],`int32`);for(let e=0,t=0;e<i.length;e++)o.has(i[e])||(c.values[t]=i[e],l.values[t]=e,t++);return[c.toTensor(),l.toTensor()]}var uy,dy=n((()=>{M(),I(),A(),uy=ly}));function fy(e){let t={x:F(e,`x`,`sign`)};return N.runKernel(ar,t)}var py,my=n((()=>{P(),k(),I(),R(),py=L({sign_:fy})}));function hy(e){let t={x:F(e,`x`,`sin`,`float32`)};return N.runKernel(`Sin`,t)}var gy,_y=n((()=>{P(),k(),I(),R(),gy=L({sin_:hy})}));function vy(e){let t={x:F(e,`x`,`sinh`)};return N.runKernel(ir,t)}var yy,by=n((()=>{P(),k(),I(),R(),yy=L({sinh_:vy})}));function xy(e,t,n){let r=F(e,`x`,`slice1d`);return y(r.rank===1,()=>`slice1d expects a rank-1 tensor, but got a rank-${r.rank} tensor`),jd(r,[t],[n])}var Sy,Cy=n((()=>{I(),A(),R(),Md(),Sy=L({slice1d_:xy})}));function wy(e,t,n){let r=F(e,`x`,`slice2d`);return y(r.rank===2,()=>`slice2d expects a rank-2 tensor, but got a rank-${r.rank} tensor`),jd(r,t,n)}var Ty,Ey=n((()=>{I(),A(),R(),Md(),Ty=L({slice2d_:wy})}));function Dy(e,t,n){let r=F(e,`x`,`slice3d`);return y(r.rank===3,()=>`slice3d expects a rank-3 tensor, but got a rank-${r.rank} tensor`),jd(r,t,n)}var Oy,ky=n((()=>{I(),A(),R(),Md(),Oy=L({slice3d_:Dy})}));function Ay(e,t,n){let r=F(e,`x`,`slice4d`);return y(r.rank===4,()=>`slice4d expects a rank-4 tensor, but got a rank-${r.rank} tensor`),jd(r,t,n)}var jy,My=n((()=>{I(),A(),R(),Md(),jy=L({slice4d_:Ay})}));function Ny(e,t=-1){let n=F(e,`logits`,`softmax`,`float32`);if(t===-1&&(t=n.rank-1),t!==n.rank-1)throw Error(`Softmax along a non-last dimension is not yet supported. Logits was rank ${n.rank} and dim was ${t}`);let r={logits:n},i={dim:t};return N.runKernel(dr,r,i)}var Py,Fy=n((()=>{P(),k(),I(),R(),Py=L({softmax_:Ny})}));function Iy(e){y(e.dtype===`complex64`,()=>`The dtype for tf.spectral.fft() must be complex64 but got ${e.dtype}.`);let t={input:e};return N.runKernel(`FFT`,t)}var Ly,Ry=n((()=>{P(),k(),A(),R(),Ly=L({fft_:Iy})}));function zy(e){y(e.dtype===`complex64`,()=>`The dtype for tf.spectral.ifft() must be complex64 but got ${e.dtype}.`);let t={input:e};return N.runKernel(Zt,t)}var By,Vy=n((()=>{P(),k(),A(),R(),By=L({ifft_:zy})}));function Hy(e){let t=e.shape[e.shape.length-1],n=e.size/t,r;if(t<=2){let i=G(e,[n,t]);r=By(i)}else{let i=[n,2*(t-1)],a=G(Mc(e),[n,t]),o=G(Ec(e),[n,t]),s=Lv(jd(a,[0,1],[n,t-2]),1),c=U(Lv(jd(o,[0,1],[n,t-2]),1),mm(-1)),l=Td([a,s],1),u=Td([o,c],1),d=G(Ia(l,u),[i[0],i[1]]);r=By(d)}if(r=Mc(r),e.rank===3&&e.shape[0]!==0){let t=r,n=e.shape[0];r=G(r,[n,r.shape[0]/n,r.shape[1]]),t.dispose()}return r}var Uy,Wy=n((()=>{La(),Ed(),Dc(),W(),R(),Nc(),K(),Rv(),hm(),Md(),Vy(),Uy=L({irfft_:Hy})}));function Gy(e,t,n=0){let r={x:F(e,`x`,`split`)},i={numOrSizeSplits:t,axis:n};return N.runKernel(ur,r,i)}var Ky,qy=n((()=>{P(),k(),I(),R(),Ky=L({split_:Gy})}));function Jy(e,t){y(e.dtype===`float32`,()=>`The dtype for rfft() must be real value but got ${e.dtype}`);let n=e.shape[e.shape.length-1],r=e.size/n,i;if(t!=null&&t<n){let r=e.shape.map(e=>0),a=e.shape.map(e=>e);a[e.shape.length-1]=t,i=jd(e,r,a),n=t}else if(t!=null&&t>n){let r=e.shape.map(e=>e);r[e.shape.length-1]=t-n,i=Td([e,Pg(r)],e.shape.length-1),n=t}else i=e;let a=Np(i),o=G(Ia(i,a),[r,n]),s=Ly(o),c=Math.floor(n/2)+1,l=Mc(s),u=Ec(s),d=Ky(l,[c,n-c],l.shape.length-1),f=Ky(u,[c,n-c],u.shape.length-1),p=i.shape.slice();return p[i.shape.length-1]=c,G(Ia(d[0],f[0]),p)}var Yy,Xy=n((()=>{A(),La(),Ed(),Dc(),R(),Nc(),K(),Md(),qy(),Fg(),Pp(),Ry(),Yy=L({rfft_:Jy})}));function Zy(e,t){let n=F(e,`a`,`squaredDifference`),r=F(t,`b`,`squaredDifference`);[n,r]=ca(n,r),Gc(n.shape,r.shape);let i={a:n,b:r};return N.runKernel(_r,i,{})}var Qy,$y=n((()=>{P(),k(),ma(),I(),Kc(),R(),Qy=L({squaredDifference_:Zy})}));function eb(e,t){let n=F(e,`x`,`squeeze`,`string_or_numeric`);return G(n,oe(n.shape,t).newShape)}var tb,nb=n((()=>{I(),A(),R(),K(),tb=L({squeeze_:eb})}));function rb(e,t=0){let n=Na(e,`tensors`,`stack`,`string_or_numeric`);y(n.length>=1,()=>`Pass at least one tensor to tf.stack`),n.length>0&&y(t<=n[0].rank,()=>`Axis must be <= rank of the tensor`);let r=n,i={axis:t};return N.runKernel(Mn,r,i)}var ib,ab=n((()=>{P(),k(),I(),A(),R(),ib=L({stack_:rb})}));function ob(e,t=0){let n={x:F(e,`x`,`step`)},r={alpha:t};return N.runKernel(Nr,n,r)}var sb,cb=n((()=>{P(),k(),I(),R(),sb=L({step_:ob})}));function lb(e,t,n,r,i=0,a=0,o=0,s=0,c=0){let l={x:F(e,`x`,`stridedSlice`,`string_or_numeric`)},u={begin:t,end:n,strides:r,beginMask:i,endMask:a,ellipsisMask:o,newAxisMask:s,shrinkAxisMask:c};return N.runKernel(yr,l,u)}var ub,db=n((()=>{P(),k(),I(),R(),ub=L({stridedSlice_:lb})}));function fb(e){let t={x:F(e,`x`,`tan`,`float32`)};return N.runKernel(`Tan`,t)}var pb,mb=n((()=>{P(),k(),I(),R(),pb=L({tan_:fb})}));function hb(e,t){x(e);let n=Aa(e,t);if(n.length!==1)throw Error(`tensor1d() requires values to be a flat/TypedArray`);return Ra(e,null,n,t)}var gb=n((()=>{I(),A(),za()}));function _b(e,t,n){if(x(e),t!=null&&t.length!==2)throw Error(`tensor2d() requires shape to have two numbers`);let r=Aa(e,n);if(r.length!==2&&r.length!==1)throw Error(`tensor2d() requires values to be number[][] or flat/TypedArray`);if(r.length===1&&t==null)throw Error("tensor2d() requires shape to be provided when `values` are a flat/TypedArray");return Ra(e,t,r,n)}var vb=n((()=>{I(),A(),za()}));function yb(e,t,n){if(x(e),t!=null&&t.length!==4)throw Error(`tensor4d() requires shape to have four numbers`);let r=Aa(e,n);if(r.length!==4&&r.length!==1)throw Error(`tensor4d() requires values to be number[][][][] or flat/TypedArray`);if(r.length===1&&t==null)throw Error("tensor4d() requires shape to be provided when `values` are a flat array");return Ra(e,t,r,n)}var bb=n((()=>{I(),A(),za()}));function xb(e,t,n){if(x(e),t!=null&&t.length!==5)throw Error(`tensor5d() requires shape to have five numbers`);let r=Aa(e,n);if(r.length!==5&&r.length!==1)throw Error(`tensor5d() requires values to be number[][][][][] or flat/TypedArray`);if(r.length===1&&t==null)throw Error("tensor5d() requires shape to be provided when `values` are a flat array");return Ra(e,t,r,n)}var Sb=n((()=>{I(),A(),za()}));function Cb(e,t,n){if(x(e),t!=null&&t.length!==6)throw Error(`tensor6d() requires shape to have six numbers`);let r=Aa(e,n);if(r.length!==6&&r.length!==1)throw Error(`tensor6d() requires values to be number[][][][][][] or flat/TypedArray`);if(r.length===1&&t==null)throw Error("tensor6d() requires shape to be provided when `values` are a flat array");return t||=r,Ra(e,t,r,n)}var wb=n((()=>{I(),A(),za()}));function Tb(e,t=1,n=!0){let r=F(e,`x`,`topk`);if(r.rank===0)throw Error(`topk() expects the input to be of rank 1 or higher`);let i=r.shape[r.shape.length-1];if(t<0)throw Error(`'k' passed to topk() must be >= 0 but got ${t}`);if(t>i)throw Error(`'k' passed to topk() must be <= the last dimension (${i}) but got ${t}`);let a={x:r},o={k:t,sorted:n},[s,c]=N.runKernel(Tr,a,o);return{values:s,indices:c}}var Eb,Db=n((()=>{P(),k(),I(),R(),Eb=L({topk_:Tb})}));function Ob(e,t=0,n=1,r,i){if(De(e),r!=null&&r===`bool`)throw Error(`Unsupported data type $ { dtype }`);let a=new lv(t,n,r,!0,i),o=ss(e,r);for(let e=0;e<o.values.length;e++)o.values[e]=a.nextValue();return o.toTensor()}var kb,Ab=n((()=>{je(),cs(),R(),fv(),kb=L({truncatedNormal_:Ob})}));function jb(e,t=0){let n=F(e,`x`,`unique`,`string_or_numeric`);y(n.rank>0,()=>`The input tensor must be at least 1D`);let r={x:n},i={axis:t},[a,o]=N.runKernel(Or,r,i);return{values:a,indices:o}}var Mb,Nb=n((()=>{P(),k(),I(),A(),R(),Mb=L({unique_:jb})}));function Pb(e,t,n){let r=F(e,`x`,`unsortedSegmentSum`),i=F(t,`segmentIds`,`unsortedSegmentSum`,`int32`);y(E(n),()=>`numSegments must be of dtype int`);let a={x:r,segmentIds:i},o={numSegments:n};return N.runKernel(Ar,a,o)}var Fb,Ib=n((()=>{P(),k(),I(),A(),R(),Fb=L({unsortedSegmentSum_:Pb})}));function Lb(e,t=0){let n=F(e,`x`,`unstack`,`string_or_numeric`);y(t>=-n.shape.length&&t<n.shape.length,()=>`Axis = ${t} is not in [-${n.shape.length}, ${n.shape.length})`);let r={value:n},i={axis:t};return N.runKernel(kr,r,i)}var Rb,zb=n((()=>{P(),k(),I(),A(),R(),Rb=L({unstack_:Lb})}));function Bb(e,t){return hg(e,t,`right`)}var Vb=n((()=>{gg()}));function Hb(e,t=!0,n,r){return N.makeVariable(e,t,n,r)}var Ub=n((()=>{P()}));function Wb(e,t){let n=[];for(let e=0;e<t.length;e++)t[e]&&n.push(e);let r=ss(e,`int32`),i=ss([n.length,e.length],`int32`);for(let t=0;t<n.length;t++){let a=r.indexToLoc(n[t]),o=t*e.length;i.values.set(a,o)}return i.toTensor()}var Gb=n((()=>{cs()}));async function Kb(e){let t=F(e,`condition`,`whereAsync`,`bool`),n=await t.data(),r=Wb(t.shape,n);return e!==t&&t.dispose(),r}var qb,Jb=n((()=>{Gb(),I(),qb=Kb}));async function Yb(e,t,n){let r=F(e,`tensor`,`boolMask`),i=F(t,`mask`,`boolMask`,`bool`),a=n??0,o=i.rank,s=r.shape;y(o>0,()=>`mask cannot be scalar`),b(s.slice(a,a+o),i.shape,`mask's shape must match the first K dimensions of tensor's shape,`);let c=1;for(let e=a;e<a+o;e++)c*=s[e];let l=s.slice(0,a).concat([c],s.slice(a+o)),u=G(r,l),d=G(i,[-1]),f=await qb(d),p=tb(f,[1]),m=Xm(u,p,a);return e!==r&&r.dispose(),t!==i&&i.dispose(),p.dispose(),u.dispose(),d.dispose(),f.dispose(),m}var Xb,Zb=n((()=>{I(),A(),Zm(),K(),nb(),Jb(),Xb=Yb}));function Qb(e,t,n,r,i=!0){let a=F(e,`v`,`movingAverage`),o=F(t,`x`,`movingAverage`),s=F(n,`decay`,`movingAverage`);la(a,o),y(T(a.shape,o.shape),()=>`Shape mismatch in v and x`);let c=mm(1),l=J(c,s),u=U(J(o,a),l);if(i){y(r!=null,()=>`When using zeroDebias: true, step is required.`);let e=F(r,`step`,`movingAverage`);u=uu(u,J(c,fm(s,e)))}return H(a,u)}var $b,ex=n((()=>{ma(),I(),A(),au(),du(),W(),R(),pm(),hm(),Jh(),$b=L({movingAverage_:Qb})}));function tx(e,t,n){De(n);let r=F(e,`indices`,`scatterND`,`int32`),i=F(t,`updates`,`scatterND`);dl(i,r,n);let a={indices:r,updates:i},o={shape:n};return N.runKernel($n,a,o)}var nx,rx=n((()=>{P(),k(),I(),je(),R(),pl(),nx=L({scatterND_:tx})}));function ix(e,t,n,r){if(e.dtype!==`int32`)throw Error(`tf.sparseToDense() expects the indices to be int32 type, but the dtype was ${e.dtype}.`);if(e.rank>2)throw Error(`sparseIndices should be a scalar, vector, or matrix, but got shape ${e.shape}.`);let i=e.rank>0?e.shape[0]:1,a=e.rank>1?e.shape[1]:1;if(n.length!==a)throw Error(`outputShape has incorrect number of elements:, ${n.length}, should be: ${a}.`);let o=t.size;if(!(t.rank===0||t.rank===1&&o===i))throw Error(`sparseValues has incorrect shape ${t.shape}, should be [] or [${i}]`);if(t.dtype!==r.dtype)throw Error(`sparseValues.dtype must match defaultValues.dtype`)}var ax=n((()=>{}));function ox(e,t,n,r=0){De(n);let i=F(e,`sparseIndices`,`sparseToDense`,`int32`),a=F(t,`sparseValues`,`sparseToDense`,`string_or_numeric`),o=F(r,`defaultValue`,`sparseToDense`,a.dtype);ix(i,a,n,o);let s={sparseIndices:i,sparseValues:a,defaultValue:o},c={outputShape:n};return N.runKernel(gr,s,c)}var sx,cx=n((()=>{P(),k(),ax(),I(),je(),R(),sx=L({sparseToDense_:ox})}));function lx(e,t){let n=F(t,`indices`,`gatherND`,`int32`),r={params:F(e,`x`,`gatherND`,`string_or_numeric`),indices:n};return N.runKernel(qt,r)}var ux,dx=n((()=>{P(),k(),I(),R(),ux=L({gatherND_:lx})}));function fx(e,t){if(t==null)return e.shape.slice();if(T(e.shape,t))return t;if(e.shape.length===t.length){let n=[];for(let r=0;r<e.shape.length;r++)t[r]==null&&e.shape[r]!=null?n.push(e.shape[r]):n.push(t[r]);return n}return t}var px=n((()=>{A()}));function mx(e,t,n,r){let i=F(e,`x`,`dropout`);if(y(i.dtype===`float32`,()=>`x has to be a floating point tensor since it's going to be scaled, but got a ${i.dtype} tensor instead.`),y(t>=0&&t<1,()=>`rate must be a float in the range [0, 1), but got ${t}.`),t===0)return e instanceof Xi?i.clone():i;let a=fx(i,n),o=1-t,s=uu(qm(H(Cv(a,0,1,`float32`,r),o)),o);return U(i,s)}var hx,gx=n((()=>{M(),I(),A(),au(),du(),px(),Jm(),W(),R(),wv(),hx=L({dropout_:mx})}));function _x(e){return Math.floor(2**Math.ceil(Math.log(e)/Math.log(2)))}function vx(e,t,n){let r=1-e%2,i=new Float32Array(e);for(let a=0;a<e;++a){let o=2*Math.PI*a/(e+r-1);i[a]=t-n*Math.cos(o)}return hb(i,`float32`)}var yx=n((()=>{gb()}));async function bx(e,t,n=1){let r=F(e,`predictions`,`inTopK`),i=F(t,`targets`,`inTopK`);y(r.rank>1,()=>`inTopK() expects the predictions to be of rank 2 or higher, but got ${r.rank}`),y(r.rank-1===i.rank,()=>`predictions rank should be 1 larger than targets rank, but got predictions rank ${r.rank} and targets rank ${i.rank}`),b(r.shape.slice(0,r.shape.length-1),i.shape,`predictions's shape should be align with the targets' shape, except the last dimension.`);let a=r.shape[r.shape.length-1];y(n>0&&n<=a,()=>`'k' passed to inTopK() must be > 0 && <= the predictions last dimension (${a}), but got ${n}`);let o=await r.data(),s=await i.data(),[c,l]=[o.length/a,a],u=se(`bool`,c);for(let e=0;e<c;e++){let t=e*l,r=o.subarray(t,t+l),i=[];for(let e=0;e<r.length;e++)i.push({value:r[e],index:e});i.sort((e,t)=>t.value-e.value),u[e]=0;for(let t=0;t<n;t++)if(i[t].index===s[e]){u[e]=1;break}}return e!==r&&r.dispose(),t!==i&&i.dispose(),Ba(u,i.shape,`bool`)}var xx,Sx=n((()=>{I(),A(),Va(),xx=bx}));function Cx(e,t,n,r,i,a=`NHWC`,o){let s=e;e.rank===3&&(s=G(e,[1,e.shape[0],e.shape[1],e.shape[2]]));let c=t;c.rank===3&&(c=G(t,[1,t.shape[0],t.shape[1],t.shape[2]])),y(s.rank===4,()=>`Error in conv2dDerFilter: input must be rank 4, but got shape ${s.shape}.`),y(c.rank===4,()=>`Error in conv2dDerFilter: dy must be rank 4, but got shape ${c.shape}.`),y(n.length===4,()=>`Error in conv2dDerFilter: filterShape must be length 4, but got ${n}.`);let l=a===`NHWC`?s.shape[3]:s.shape[1],u=a===`NHWC`?c.shape[3]:c.shape[1];y(l===n[2],()=>`Error in conv2dDerFilter: depth of input ${l}) must match input depth in filter (${n[2]}.`),y(u===n[3],()=>`Error in conv2dDerFilter: depth of dy (${u}) must match output depth for filter (${n[3]}).`),hd(`conv2dDerFilter`,i,o);let d={x:s,dy:c},f={strides:r,pad:i,dataFormat:a,dimRoundingMode:o,filterShape:n};return N.runKernel(_t,d,f)}var wx,Tx=n((()=>{P(),k(),A(),gd(),R(),K(),wx=L({conv2DBackpropFilter_:Cx})}));function Ex(e,t,n){if(n==null||n===`linear`)return e;if(n===`relu`)return U(e,sb(t));throw Error(`Cannot compute gradient for fused activation ${n}.`)}function Dx(e,t){let n=t,r=Wc(e.shape,t.shape);return r.length>0&&(n=q(n,r)),G(n,e.shape)}function Ox(e,t,n,r){if(t===`linear`)return e;if(t===`relu`)return jv(e);if(t===`elu`)return Gp(e);if(t===`relu6`)return Pv(e);if(t===`prelu`)return L_(e,n);if(t===`leakyrelu`)return mh(e,r);if(t===`sigmoid`)return Od(e);throw Error(`Unknown fused activation ${t}.`)}var kx,Ax=n((()=>{Kc(),Kp(),hh(),W(),R_(),Mv(),Fv(),K(),kd(),cb(),Cm(),kx=(e,t)=>!(e>0)||t===`linear`}));function jx({x:e,filter:t,strides:n,pad:r,dataFormat:i=`NHWC`,dilations:a=[1,1],dimRoundingMode:o,bias:s,activation:c=`linear`,preluActivationWeights:l,leakyreluAlpha:u}){if(c||=`linear`,kx(N.state.gradientDepth,c)===!1){y(i===`NHWC`,()=>`Error in fused conv2d: got dataFormat of ${i} but only NHWC is currently supported for the case of gradient depth is 0 and the activation is not linear.`);let d=Nf(e,t,n,r,i,a,o);return s!=null&&(d=H(d,s)),Ox(d,c,l,u)}let d=F(e,`x`,`conv2d`,`float32`),f=F(t,`filter`,`conv2d`,`float32`),p=d,m=!1;d.rank===3&&(m=!0,p=G(d,[1,d.shape[0],d.shape[1],d.shape[2]])),y(p.rank===4,()=>`Error in fused conv2d: input must be rank 4, but got rank ${p.rank}.`),y(f.rank===4,()=>`Error in fused conv2d: filter must be rank 4, but got rank ${f.rank}.`),hd(`fused conv2d`,r,o);let h=i===`NHWC`?p.shape[3]:p.shape[1];y(f.shape[2]===h,()=>`Error in conv2d: depth of input (${h}) must match input depth for filter ${f.shape[2]}.`),y(pd(n,a),()=>`Error in conv2D: Either strides or dilations must be 1. Got strides ${n} and dilations '${a}'`);let g=td(p.shape,f.shape,n,a,r,o),_;s!=null&&(_=F(s,`bias`,`fused conv2d`),[_]=ca(_,d),i===`NHWC`?Gc(g.outShape,_.shape):(y(_.shape.length<=1,()=>`Error in fused conv2d: only supports scalar or 1-D Tensor bias for NCHW format but got the bias of rank-${_.shape.length}.`),y(_.shape.length===0||_.shape[0]===g.outChannels||_.shape[0]===1,()=>`Error in fused conv2d: bias shape (${_.shape}) is not compatible with the number of output channels (${g.outChannels})`)));let v;if(l!=null){let e=l.shape;if(y(e.length<=1||e.length===3,()=>`Error in fused conv2d: only supports scalar, 1-D Tensor or 3-D Tensor PReLU activation weights but got a tensor of rank-${e.length}.`),e.length===1)y(e[0]===1||e[0]===g.outChannels,()=>`Error in fused conv2d: PReLU activation weights (${e}) is not compatible with the number of output channels (${g.outChannels}).`);else if(e.length===3)try{Gc(e,g.outShape)}catch{let t=`Error in fused conv2d: PReLU activation weights (${e}) is not compatible with the output shape of the conv2d (${g.outShape}).`;throw Error(t)}v=F(l,`prelu weights`,`fused conv2d`)}let b=(e,t)=>{y(i===`NHWC`,()=>`Error in gradient of fused conv2D: got dataFormat of ${i} but only NHWC is currently supported.`);let[o,s,l,u]=t,d=Ex(e,l,c);y(fd(a),()=>`Error in gradient of fused conv2D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '${a}'`);let f=[zf(s.shape,d,o,n,r),wx(s,d,o.shape,n,r)];if(u!=null){let e=Dx(u,d);f.push(e)}return f},x={x:p,filter:f,bias:_,preluActivationWeights:v},S={strides:n,pad:r,dataFormat:i,dilations:a,dimRoundingMode:o,activation:c,leakyreluAlpha:u};return s==null?Rh((e,t,n)=>{let r=N.runKernel(Lr,x,S);return n([t,e,r]),m&&(r=G(r,[r.shape[1],r.shape[2],r.shape[3]])),{value:r,gradFunc:b}})(p,f):Rh((e,t,n,r)=>{let i=N.runKernel(Lr,x,S);return r([t,e,i,n]),m&&(i=G(i,[i.shape[1],i.shape[2],i.shape[3]])),{value:i,gradFunc:b}})(p,f,_)}var Mx,Nx=n((()=>{P(),Bh(),k(),ma(),I(),A(),au(),Kc(),Pf(),Tx(),Bf(),gd(),Ax(),R(),K(),Mx=L({fusedConv2d_:jx})}));function Px(e,t,n,r,i,a=[1,1],o){let s=e;e.rank===3&&(s=G(e,[1,e.shape[0],e.shape[1],e.shape[2]]));let c=t;c.rank===3&&(c=G(t,[1,t.shape[0],t.shape[1],t.shape[2]]));let l={x:s,dy:c},u={strides:r,pad:i,dimRoundingMode:o,dilations:a,filterShape:n};return N.runKernel(kt,l,u)}var Fx,Ix=n((()=>{P(),k(),R(),K(),Fx=L({depthwiseConv2dNativeBackpropFilter_:Px})}));function Lx(e,t,n,r,i,a=[1,1],o){let s=t,c=!1;t.rank===3&&(c=!0,s=G(t,[1,t.shape[0],t.shape[1],t.shape[2]]));let l={dy:s,filter:n},u={strides:r,pad:i,dimRoundingMode:o,dilations:a,inputShape:e},d=N.runKernel(At,l,u);return c?G(d,[d.shape[1],d.shape[2],d.shape[3]]):d}var Rx,zx=n((()=>{P(),k(),R(),K(),Rx=L({depthwiseConv2dNativeBackpropInput_:Lx})}));function Bx({x:e,filter:t,strides:n,pad:r,dataFormat:i=`NHWC`,dilations:a=[1,1],dimRoundingMode:o,bias:s,activation:c=`linear`,preluActivationWeights:l,leakyreluAlpha:u}){if(kx(N.state.gradientDepth,c)===!1){let d=vp(e,t,n,r,i,a,o);return s!=null&&(d=H(d,s)),Ox(d,c,l,u)}let d=F(e,`x`,`depthwiseConv2d`,`float32`),f=F(t,`filter`,`depthwiseConv2d`,`float32`),p=d,m=!1;d.rank===3&&(m=!0,p=G(d,[1,d.shape[0],d.shape[1],d.shape[2]])),y(p.rank===4,()=>`Error in fused depthwiseConv2d: input must be rank 4, but got rank ${p.rank}.`),y(f.rank===4,()=>`Error in fused depthwiseConv2d: filter must be rank 4, but got rank ${f.rank}.`),y(p.shape[3]===f.shape[2],()=>`Error in fused depthwiseConv2d: number of input channels (${p.shape[3]}) must match the inChannels dimension in filter ${f.shape[2]}.`),a??=[1,1],y(pd(n,a),()=>`Error in fused depthwiseConv2d: Either strides or dilations must be 1. Got strides ${n} and dilations '${a}'`),hd(`fused depthwiseConv2d`,r,o);let h=td(p.shape,f.shape,n,a,r,o,!0),g;s!=null&&(g=F(s,`bias`,`fused conv2d`),[g]=ca(g,d),Gc(h.outShape,g.shape));let _;l!=null&&(_=F(l,`prelu weights`,`fused depthwiseConv2d`));let v=(e,t)=>{y(fd(a),()=>`Error in gradient of fused depthwiseConv2d: dilation rates greater than 1 are not yet supported. Got dilations '${a}'`);let[i,s,l,u]=t,d=Ex(e,l,c),f=Rx(s.shape,d,i,n,r,a,o),p=Fx(s,d,i.shape,n,r,a,o);return u==null?[f,p]:[f,p,Dx(g,d)]},b={x:p,filter:f,bias:g,preluActivationWeights:_},x={strides:n,pad:r,dataFormat:i,dilations:a,dimRoundingMode:o,activation:c,leakyreluAlpha:u};return s==null?Rh((e,t,n)=>{let r=N.runKernel(Rr,b,x);return n([t,e,r]),m&&(r=G(r,[r.shape[1],r.shape[2],r.shape[3]])),{value:r,gradFunc:v}})(p,f):Rh((e,t,n,r)=>{let i=N.runKernel(Rr,b,x);return r([t,e,i,n]),m&&(i=G(i,[i.shape[1],i.shape[2],i.shape[3]])),{value:i,gradFunc:v}})(p,f,g)}var Vx,Hx=n((()=>{P(),Bh(),k(),ma(),I(),A(),au(),Kc(),gd(),yp(),Ix(),zx(),Ax(),R(),K(),Vx=L({fusedDepthwiseConv2d_:Bx})}));function Ux({a:e,b:t,transposeA:n=!1,transposeB:r=!1,bias:i,activation:a=`linear`,preluActivationWeights:o,leakyreluAlpha:s=.2}){if(kx(N.state.gradientDepth,a)===!1){let c=$s(e,t,n,r);return i!=null&&(c=H(c,i)),Ox(c,a,o,s)}let c=F(e,`a`,`fused matMul`),l=F(t,`b`,`fused matMul`);[c,l]=ca(c,l);let u=n?c.shape[c.rank-2]:c.shape[c.rank-1],d=r?l.shape[l.rank-1]:l.shape[l.rank-2],f=n?c.shape[c.rank-1]:c.shape[c.rank-2],p=r?l.shape[l.rank-2]:l.shape[l.rank-1],m=c.shape.slice(0,-2),h=l.shape.slice(0,-2),g=C(m),_=C(h);y(u===d,()=>`Error in fused matMul: inner shapes (${u}) and (${d}) of Tensors with shapes ${c.shape} and ${l.shape} and transposeA=${n} and transposeB=${r} must match.`);let v=Gc(c.shape.slice(0,-2),l.shape.slice(0,-2)).concat([f,p]),b=n?G(c,[g,u,f]):G(c,[g,f,u]),x=r?G(l,[_,p,d]):G(l,[_,d,p]),S;i!=null&&(S=F(i,`bias`,`fused matMul`),[S]=ca(S,c),Gc(v,S.shape));let w;o!=null&&(w=F(o,`prelu weights`,`fused matMul`));let T=(e,t)=>{let[o,s,c,l]=t,u=Ex(G(e,c.shape),c,a),d,f;if(!n&&!r?(d=$s(u,s,!1,!0),f=$s(o,u,!0,!1)):!n&&r?(d=$s(u,s,!1,!1),f=$s(u,o,!0,!1)):n&&!r?(d=$s(s,u,!1,!0),f=$s(o,u,!1,!1)):(d=$s(s,u,!0,!0),f=$s(u,o,!0,!0)),i!=null){let e=Dx(l,u);return[d,f,e]}return[d,f]},E={a:b,b:x,bias:S,preluActivationWeights:w},D={transposeA:n,transposeB:r,activation:a,leakyreluAlpha:s};return i==null?Rh((e,t,n)=>{let r=N.runKernel(Ir,E,D);return n([e,t,r]),{value:G(r,v),gradFunc:T}})(b,x):Rh((e,t,n,r)=>{let i=N.runKernel(Ir,E,D);return r([e,t,i,n]),{value:G(i,v),gradFunc:T}})(b,x,S)}var Wx,Gx=n((()=>{P(),Bh(),k(),ma(),I(),A(),au(),Kc(),Ax(),ec(),R(),K(),Wx=L({fusedMatMul_:Ux})})),Kx=r({conv2d:()=>Mx,depthwiseConv2d:()=>Vx,matMul:()=>Wx}),qx=n((()=>{Nx(),Hx(),Gx()}));function Jx(e){return vx(e,.54,.46)}var Yx,Xx=n((()=>{R(),yx(),Yx=L({hammingWindow_:Jx})}));function Zx(e){return vx(e,.5,.5)}var Qx,$x=n((()=>{R(),yx(),Qx=L({hannWindow_:Zx})}));function eS(e,t,n,r=!1,i=0){let a=0,o=[];for(;a+t<=e.size;)o.push(jd(e,a,t)),a+=n;if(r)for(;a<e.size;){let r=a+t-e.size,s=Td([jd(e,a,t-r),hf([r],i)]);o.push(s),a+=n}return o.length===0?_b([],[0,t]):G(Td(o),[o.length,t])}var tS,nS=n((()=>{Ed(),gf(),R(),K(),Md(),vb(),tS=L({frame_:eS})}));function rS(e,t,n,r,i=Qx){r??=_x(t);let a=tS(e,t,n),o=U(a,i(t));return Yy(o,r)}var iS,aS=n((()=>{W(),R(),yx(),Xy(),nS(),$x(),iS=L({stft_:rS})}));function oS(e,t,n,r,i=`bilinear`,a=0){let o=F(e,`image`,`cropAndResize`),s=F(t,`boxes`,`cropAndResize`,`float32`),c=F(n,`boxInd`,`cropAndResize`,`int32`),l=s.shape[0];y(o.rank===4,()=>`Error in cropAndResize: image must be rank 4,but got rank ${o.rank}.`),y(s.rank===2&&s.shape[1]===4,()=>`Error in cropAndResize: boxes must be have size [${l},4] but had shape ${s.shape}.`),y(c.rank===1&&c.shape[0]===l,()=>`Error in cropAndResize: boxInd must be have size [${l}] but had shape ${s.shape}.`),y(r.length===2,()=>`Error in cropAndResize: cropSize must be of length 2, but got length ${r.length}.`),y(r[0]>=1&&r[1]>=1,()=>`cropSize must be atleast [1,1], but was ${r}`),y(i===`bilinear`||i===`nearest`,()=>`method must be bilinear or nearest, but was ${i}`);let u={image:o,boxes:s,boxInd:c},d={method:i,extrapolationValue:a,cropSize:r};return N.runKernel(Tt,u,d)}var sS,cS=n((()=>{P(),k(),I(),A(),R(),sS=L({cropAndResize_:oS})}));function lS(e){let t=F(e,`image`,`flipLeftRight`,`float32`);y(t.rank===4,()=>`Error in flipLeftRight: image must be rank 4,but got rank ${t.rank}.`);let n={image:t};return N.runKernel(Ht,n,{})}var uS,dS=n((()=>{P(),k(),I(),A(),R(),uS=L({flipLeftRight_:lS})}));function fS(e){let t=F(e,`image`,`grayscaleToRGB`),n=t.rank-1,r=t.shape[n];y(t.rank>=2,()=>`Error in grayscaleToRGB: images must be at least rank 2, but got rank ${t.rank}.`),y(r===1,()=>`Error in grayscaleToRGB: last dimension of a grayscale image should be size 1, but got size ${r}.`);let i=Array(t.rank);return i.fill(1,0,n),i[n]=3,Vm(t,i)}var pS,mS=n((()=>{I(),A(),R(),Hm(),pS=L({grayscaleToRGB_:fS})}));function hS(e,t,n=0,r=.5){let i=F(e,`image`,`rotateWithOffset`,`float32`);y(i.rank===4,()=>`Error in rotateWithOffset: image must be rank 4,but got rank ${i.rank}.`);let a={image:i},o={radians:t,fillValue:n,center:r};return N.runKernel(Fr,a,o)}var gS,_S=n((()=>{P(),k(),I(),A(),R(),gS=L({rotateWithOffset_:hS})}));function vS(e,t,n,r,i,a){r??=.5,i??=-1/0,a??=0;let o=e.shape[0];return n=Math.min(n,o),y(0<=r&&r<=1,()=>`iouThreshold must be in [0, 1], but was '${r}'`),y(e.rank===2,()=>`boxes must be a 2D tensor, but was of rank '${e.rank}'`),y(e.shape[1]===4,()=>`boxes must have 4 columns, but 2nd dimension was ${e.shape[1]}`),y(t.rank===1,()=>`scores must be a 1D tensor`),y(t.shape[0]===o,()=>`scores has incompatible shape with boxes. Expected ${o}, but was ${t.shape[0]}`),y(0<=a&&a<=1,()=>`softNmsSigma must be in [0, 1], but was '${a}'`),{maxOutputSize:n,iouThreshold:r,scoreThreshold:i,softNmsSigma:a}}var yS=n((()=>{A()}));function bS(e,t,n,r=.5,i=-1/0){let a=F(e,`boxes`,`nonMaxSuppression`,`float32`),o=F(t,`scores`,`nonMaxSuppression`,`float32`),s=vS(a,o,n,r,i);n=s.maxOutputSize,r=s.iouThreshold,i=s.scoreThreshold;let c={maxOutputSize:n,iouThreshold:r,scoreThreshold:i};return N.runKernel(Dn,{boxes:a,scores:o},c)}var xS,SS=n((()=>{P(),k(),I(),yS(),R(),xS=L({nonMaxSuppression_:bS})}));function CS(e,t,n){let r=wS(e,t,n),i=r<0?-(r+1):r;e.splice(i,0,t)}function wS(e,t,n){return ES(e,t,n||TS)}function TS(e,t){return e>t?1:e<t?-1:0}function ES(e,t,n){let r=0,i=e.length,a=0,o=!1;for(;r<i;){a=r+(i-r>>>1);let s=n(t,e[a]);s>0?r=a+1:(i=a,o=!s)}return o?r:-r-1}var DS=n((()=>{}));function OS(e,t,n,r,i){return jS(e,t,n,r,i,0)}function kS(e,t,n,r,i,a){return jS(e,t,n,r,i,0,!1,a,!0)}function AS(e,t,n,r,i,a){return jS(e,t,n,r,i,a,!0)}function jS(e,t,n,r,i,a,o=!1,s=!1,c=!1){let l=[];for(let e=0;e<t.length;e++)t[e]>i&&l.push({score:t[e],boxIndex:e,suppressBeginIndex:0});l.sort(PS);let u=a>0?-.5/a:0,d=[],f=[];for(;d.length<n&&l.length>0;){let t=l.pop(),{score:n,boxIndex:a,suppressBeginIndex:o}=t;if(n<i)break;let s=!1;for(let n=d.length-1;n>=o;--n){let o=MS(e,a,d[n]);if(o>=r){s=!0;break}if(t.score*=NS(r,u,o),t.score<=i)break}t.suppressBeginIndex=d.length,s||(t.score===n?(d.push(a),f.push(t.score)):t.score>i&&CS(l,t,PS))}let p=d.length,m=n-p;s&&m>0&&(d.push(...Array(m).fill(0)),f.push(...Array(m).fill(0)));let h={selectedIndices:d};return o&&(h.selectedScores=f),c&&(h.validOutputs=p),h}function MS(e,t,n){let r=e.subarray(t*4,t*4+4),i=e.subarray(n*4,n*4+4),a=Math.min(r[0],r[2]),o=Math.min(r[1],r[3]),s=Math.max(r[0],r[2]),c=Math.max(r[1],r[3]),l=Math.min(i[0],i[2]),u=Math.min(i[1],i[3]),d=Math.max(i[0],i[2]),f=Math.max(i[1],i[3]),p=(s-a)*(c-o),m=(d-l)*(f-u);if(p<=0||m<=0)return 0;let h=Math.max(a,l),g=Math.max(o,u),_=Math.min(s,d),v=Math.min(c,f),y=Math.max(_-h,0)*Math.max(v-g,0);return y/(p+m-y)}function NS(e,t,n){let r=Math.exp(t*n*n);return n<=e?r:0}function PS(e,t){return e.score-t.score||e.score===t.score&&t.boxIndex-e.boxIndex}var FS=n((()=>{DS()}));async function IS(e,t,n,r=.5,i=-1/0){let a=F(e,`boxes`,`nonMaxSuppressionAsync`),o=F(t,`scores`,`nonMaxSuppressionAsync`),s=vS(a,o,n,r,i);n=s.maxOutputSize,r=s.iouThreshold,i=s.scoreThreshold;let c=await Promise.all([a.data(),o.data()]),l=c[0],u=c[1],{selectedIndices:d}=OS(l,u,n,r,i);return a!==e&&a.dispose(),o!==t&&o.dispose(),hb(d,`int32`)}var LS,RS=n((()=>{FS(),I(),yS(),gb(),LS=IS}));function zS(e,t,n,r=.5,i=-1/0,a=0){let o=F(e,`boxes`,`nonMaxSuppression`),s=F(t,`scores`,`nonMaxSuppression`),c=vS(o,s,n,r,i,a);n=c.maxOutputSize,r=c.iouThreshold,i=c.scoreThreshold,a=c.softNmsSigma;let l={boxes:o,scores:s},u={maxOutputSize:n,iouThreshold:r,scoreThreshold:i,softNmsSigma:a},d=N.runKernel(kn,l,u);return{selectedIndices:d[0],selectedScores:d[1]}}var BS,VS=n((()=>{P(),k(),I(),yS(),R(),BS=L({nonMaxSuppressionWithScore_:zS})}));async function HS(e,t,n,r=.5,i=-1/0,a=0){let o=F(e,`boxes`,`nonMaxSuppressionAsync`),s=F(t,`scores`,`nonMaxSuppressionAsync`),c=vS(o,s,n,r,i,a);n=c.maxOutputSize,r=c.iouThreshold,i=c.scoreThreshold,a=c.softNmsSigma;let l=await Promise.all([o.data(),s.data()]),u=l[0],d=l[1],{selectedIndices:f,selectedScores:p}=AS(u,d,n,r,i,a);return o!==e&&o.dispose(),s!==t&&s.dispose(),{selectedIndices:hb(f,`int32`),selectedScores:hb(p)}}var US,WS=n((()=>{FS(),I(),yS(),gb(),US=HS}));function GS(e,t,n,r=.5,i=-1/0,a=!1){let o=F(e,`boxes`,`nonMaxSuppression`),s=F(t,`scores`,`nonMaxSuppression`),c=vS(o,s,n,r,i,null),l=c.maxOutputSize,u=c.iouThreshold,d=c.scoreThreshold,f={boxes:o,scores:s},p={maxOutputSize:l,iouThreshold:u,scoreThreshold:d,padToMaxOutputSize:a},m=N.runKernel(On,f,p);return{selectedIndices:m[0],validOutputs:m[1]}}var KS,qS=n((()=>{P(),k(),I(),yS(),R(),KS=L({nonMaxSuppressionPadded_:GS})}));async function JS(e,t,n,r=.5,i=-1/0,a=!1){let o=F(e,`boxes`,`nonMaxSuppressionAsync`),s=F(t,`scores`,`nonMaxSuppressionAsync`),c=vS(o,s,n,r,i,null),l=c.maxOutputSize,u=c.iouThreshold,d=c.scoreThreshold,[f,p]=await Promise.all([o.data(),s.data()]),{selectedIndices:m,validOutputs:h}=kS(f,p,l,u,d,a);return o!==e&&o.dispose(),s!==t&&s.dispose(),{selectedIndices:hb(m,`int32`),validOutputs:mm(h,`int32`)}}var YS,XS=n((()=>{FS(),I(),yS(),hm(),gb(),YS=JS}));function ZS(e,t,n=!1,r=!1){let i=F(e,`images`,`resizeBilinear`);y(i.rank===3||i.rank===4,()=>`Error in resizeBilinear: x must be rank 3 or 4, but got rank ${i.rank}.`),y(t.length===2,()=>`Error in resizeBilinear: new shape must 2D, but got shape ${t}.`),y(r===!1||n===!1,()=>`Error in resizeBilinear: If halfPixelCenters is true, alignCorners must be false.`);let a=i,o=!1;i.rank===3&&(o=!0,a=G(i,[1,i.shape[0],i.shape[1],i.shape[2]]));let[]=t,s={images:a},c={alignCorners:n,halfPixelCenters:r,size:t},l=N.runKernel(qn,s,c);return o?G(l,[l.shape[1],l.shape[2],l.shape[3]]):l}var QS,$S=n((()=>{P(),k(),I(),A(),R(),K(),QS=L({resizeBilinear_:ZS})}));function eC(e,t,n=!1,r=!1){let i=F(e,`images`,`resizeNearestNeighbor`);y(i.rank===3||i.rank===4,()=>`Error in resizeNearestNeighbor: x must be rank 3 or 4, but got rank ${i.rank}.`),y(t.length===2,()=>`Error in resizeNearestNeighbor: new shape must 2D, but got shape ${t}.`),y(i.dtype===`float32`||i.dtype===`int32`,()=>"`images` must have `int32` or `float32` as dtype"),y(r===!1||n===!1,()=>`Error in resizeNearestNeighbor: If halfPixelCenters is true, alignCorners must be false.`);let a=i,o=!1;i.rank===3&&(o=!0,a=G(i,[1,i.shape[0],i.shape[1],i.shape[2]]));let[]=t,s={images:a},c={alignCorners:n,halfPixelCenters:r,size:t},l=N.runKernel(Gn,s,c);return o?G(l,[l.shape[1],l.shape[2],l.shape[3]]):l}var tC,nC=n((()=>{P(),k(),I(),A(),R(),K(),tC=L({resizeNearestNeighbor_:eC})}));function rC(e,t=`binary`,n=!1,r=.5){let i=F(e,`image`,`threshold`),a=i.shape[0]*i.shape[1],o=U(hb([r]),255),s,c,l,u;if(y(i.rank===3,()=>`Error in threshold: image must be rank 3,but got rank ${i.rank}.`),y(i.shape[2]===3||i.shape[2]===1,()=>`Error in threshold: image color channel must be equal to 3 or 1but got ${i.shape[2]}.`),y(i.dtype===`int32`||i.dtype===`float32`,()=>`Error in dtype: image dtype must be int32 or float32,but got dtype ${i.dtype}.`),y(t===`otsu`||t===`binary`,()=>`Method must be binary or otsu, but was ${t}`),i.shape[2]===3){[s,c,l]=Ky(i,[1,1,1],-1);let e=U(s,.2989),t=U(c,.587),n=U(l,.114);u=H(H(e,t),n)}else u=e;t===`otsu`&&(o=iC(rf(z(Qv(u),`int32`),Ba([]),256),a));let d=n?bh(u,o):$m(u,o);return z(U(d,255),`int32`)}function iC(e,t){let n=hb([-1]),r=hb([0]),i=hb([0]),a,o,s,c,l,u;for(let d=0;d<e.size-1;d++){a=jd(e,0,d+1),o=jd(e,d+1),l=uu(q(a),t),u=uu(q(o),t);let f=q(U(a,Tv(0,a.size)));s=uu(f,q(a));let p=hf(o.shape,a.size),m=H(Tv(0,o.size),p),h=U(o,m);c=uu(q(h),q(o));let g=J(s,c),_=J(s,c),v=U(l,u);i=U(U(v,g),_);let y=$m(i,r);r=Ap(y,i,r),n=Ap(y,hb([d]),n)}return n}var aC,oC=n((()=>{gb(),R(),us(),qy(),af(),xh(),eh(),Cm(),au(),W(),du(),Jh(),$v(),jp(),gf(),Md(),Ev(),Va(),A(),I(),aC=L({threshold_:rC})}));function sC(e,t,n=`nearest`,r=`constant`,i=0,a){let o=F(e,`image`,`transform`,`float32`),s=F(t,`transforms`,`transform`,`float32`);y(o.rank===4,()=>`Error in transform: image must be rank 4,but got rank ${o.rank}.`),y(s.rank===2&&(s.shape[0]===o.shape[0]||s.shape[0]===1)&&s.shape[1]===8,()=>`Error in transform: Input transform should be batch x 8 or 1 x 8`),y(a==null||a.length===2,()=>`Error in transform: outputShape must be [height, width] or null, but got ${a}.`);let c={image:o,transforms:s},l={interpolation:n,fillMode:r,fillValue:i,outputShape:a};return N.runKernel(Er,c,l)}var cC,lC=n((()=>{P(),k(),I(),A(),R(),cC=L({transform_:sC})}));function uC(e,t,n){y(t%1==0,()=>`bandPart(): numLower must be an integer, got ${t}.`),y(n%1==0,()=>`bandPart(): numUpper must be an integer, got ${n}.`);let r=F(e,`a`,`bandPart`);y(r.rank>=2,()=>`bandPart(): Rank must be at least 2, got ${r.rank}.`);let i=r.shape,[a,o]=r.shape.slice(-2);if(!(t<=a))throw Error(`bandPart(): numLower (${t}) must not be greater than the number of rows (${a}).`);if(!(n<=o))throw Error(`bandPart(): numUpper (${n}) must not be greater than the number of columns (${o}).`);t<0&&(t=a),n<0&&(n=o);let s=G(Tv(0,a,1,`int32`),[-1,1]),c=Tv(0,o,1,`int32`),l=J(s,c),u=ng(bh(l,mm(+t,`int32`)),nh(l,mm(-n,`int32`))),d=Pg([a,o],r.dtype);return G(ib(Rb(G(r,[-1,a,o])).map(e=>Ap(u,e,d))),i)}var dC,fC=n((()=>{I(),A(),rh(),xh(),rg(),R(),Ev(),K(),hm(),ab(),Jh(),zb(),jp(),Fg(),dC=L({bandPart_:uC})}));function pC(e){let t;if(Array.isArray(e)){t=!1,y(e!=null&&e.length>0,()=>`Gram-Schmidt process: input must not be null, undefined, or empty`);let n=e[0].shape[0];for(let t=1;t<e.length;++t)y(e[t].shape[0]===n,()=>`Gram-Schmidt: Non-unique lengths found in the input vectors: (${e[t].shape[0]} vs. ${n})`)}else t=!0,e=Ky(e,e.shape[0],0).map(e=>tb(e,[0]));y(e.length<=e[0].shape[0],()=>`Gram-Schmidt: Number of vectors (${e.length}) exceeds number of dimensions (${e[0].shape[0]}).`);let n=[],r=e;for(let t=0;t<e.length;++t)n.push(N.tidy(()=>{let e=r[t];if(t>0)for(let r=0;r<t;++r){let t=U(q(U(n[r],e)),n[r]);e=J(e,t)}return uu(e,Em(e,`euclidean`))}));return t?ib(n,0):n}var mC,hC=n((()=>{P(),A(),du(),W(),Dm(),R(),qy(),nb(),ab(),Jh(),Cm(),mC=L({gramSchmidt_:pC})}));function gC(e,t=!1){if(y(e.rank>=2,()=>`qr() requires input tensor to have a rank >= 2, but got rank ${e.rank}`),e.rank===2)return _C(e,t);{let n=e.shape.slice(0,e.shape.length-2).reduce((e,t)=>e*t),r=Rb(G(e,[n,e.shape[e.shape.length-2],e.shape[e.shape.length-1]]),0),i=[],a=[];return r.forEach(e=>{let[n,r]=_C(e,t);i.push(n),a.push(r)}),[G(ib(i,0),e.shape),G(ib(a,0),e.shape)]}}function _C(e,t=!1){return N.tidy(()=>{y(e.shape.length===2,()=>`qr2d() requires a 2D Tensor, but got a ${e.shape.length}D Tensor.`);let n=e.shape[0],r=e.shape[1],i=Wm(n),a=fs(e),o=_b([[1]],[1,1]),s=fs(o),c=n>=r?r:n;for(let e=0;e<c;++e){let t=a,c=s,l=i;[s,a,i]=N.tidy(()=>{let t=jd(a,[e,e],[n-e,1]),c=Em(t),l=jd(a,[e,e],[1,1]),u=Ap($m(l,0),_b([[-1]]),_b([[1]])),d=J(l,U(u,c)),f=uu(t,d);s=f.shape[0]===1?fs(o):Td([o,jd(f,[1,0],[f.shape[0]-1,f.shape[1]])],0);let p=kc(uu($s(u,d),c)),m=jd(a,[e,0],[n-e,r]),h=U(p,s),g=Fc(s);if(e===0)a=J(m,$s(h,$s(g,m)));else{let t=J(m,$s(h,$s(g,m)));a=Td([jd(a,[0,0],[e,r]),t],0)}let _=Fc(h),v=jd(i,[0,e],[n,i.shape[1]-e]);if(e===0)i=J(v,$s($s(v,s),_));else{let t=J(v,$s($s(v,s),_));i=Td([jd(i,[0,0],[n,e]),t],1)}return[s,a,i]}),fc([t,c,l])}return!t&&n>r&&(i=jd(i,[0,0],[n,r]),a=jd(a,[0,0],[r,r])),[i,a]})}var vC,yC=n((()=>{P(),wc(),A(),ps(),Ed(),du(),Gm(),eh(),ec(),W(),Ac(),Dm(),R(),K(),Md(),ab(),Jh(),vb(),Ic(),zb(),jp(),vC=L({qr_:gC})})),bC,xC=n((()=>{(function(e){e[e.NONE=0]=`NONE`,e[e.MEAN=1]=`MEAN`,e[e.SUM=2]=`SUM`,e[e.SUM_BY_NONZERO_WEIGHTS=3]=`SUM_BY_NONZERO_WEIGHTS`})(bC||={})}));function SC(e,t,n=bC.SUM_BY_NONZERO_WEIGHTS){let r=F(e,`losses`,`computeWeightedLoss`),i=null;t!=null&&(i=F(t,`weights`,`computeWeightedLoss`));let a=i==null?r:U(r,i);if(n===bC.NONE)return a;if(n===bC.SUM)return q(a);if(n===bC.MEAN){if(i==null)return Mg(a);{let e=r.size/i.size,t=uu(q(a),q(i));return e>1?uu(t,mm(e)):t}}if(n===bC.SUM_BY_NONZERO_WEIGHTS){if(i==null)return uu(q(a),mm(r.size));{let e=U(i,Ig(r.shape)),t=z(q(a_(e,mm(0))),`float32`);return uu(q(a),t)}}throw Error(`Unknown reduction: ${n}`)}var CC,wC=n((()=>{I(),us(),du(),xC(),Ng(),W(),o_(),Lg(),R(),hm(),Cm(),CC=L({computeWeightedLoss_:SC})}));function TC(e,t,n,r=bC.SUM_BY_NONZERO_WEIGHTS){let i=F(e,`labels`,`absoluteDifference`),a=F(t,`predictions`,`absoluteDifference`),o=null;n!=null&&(o=F(n,`weights`,`absoluteDifference`)),b(i.shape,a.shape,`Error in absoluteDifference: `);let s=mu(J(i,a));return CC(s,o,r)}var EC,DC=n((()=>{I(),A(),hu(),xC(),R(),Jh(),wC(),EC=L({absoluteDifference_:TC})}));function OC(e,t,n,r,i=bC.SUM_BY_NONZERO_WEIGHTS){let a=F(e,`labels`,`cosineDistance`),o=F(t,`predictions`,`cosineDistance`),s=null;r!=null&&(s=F(r,`weights`,`cosineDistance`)),b(a.shape,o.shape,`Error in cosineDistance: `);let c=mm(1),l=J(c,q(U(a,o),n,!0));return CC(l,s,i)}var kC,AC=n((()=>{I(),A(),xC(),W(),R(),hm(),Jh(),Cm(),wC(),kC=L({cosineDistance_:OC})}));function jC(e,t,n,r=bC.SUM_BY_NONZERO_WEIGHTS){let i=F(e,`labels`,`hingeLoss`),a=F(t,`predictions`,`hingeLoss`),o=null;n!=null&&(o=F(n,`weights`,`hingeLoss`)),b(i.shape,a.shape,`Error in hingeLoss: `);let s=mm(1);i=J(U(mm(2),i),s);let c=jv(J(s,U(i,a)));return CC(c,o,r)}var MC,NC=n((()=>{I(),A(),xC(),W(),R(),Mv(),hm(),Jh(),wC(),MC=L({hingeLoss_:jC})}));function PC(e,t,n,r=1,i=bC.SUM_BY_NONZERO_WEIGHTS){let a=F(e,`labels`,`huberLoss`),o=F(t,`predictions`,`huberLoss`),s=null;n!=null&&(s=F(n,`weights`,`huberLoss`)),b(a.shape,o.shape,`Error in huberLoss: `);let c=mm(r),l=mu(J(o,a)),u=Vg(l,c),d=J(l,u),f=H(U(mm(.5),bm(u)),U(c,d));return CC(f,s,i)}var FC,IC=n((()=>{I(),A(),hu(),au(),xC(),Hg(),W(),R(),hm(),xm(),Jh(),wC(),FC=L({huberLoss_:PC})}));function LC(e,t,n,r=1e-7,i=bC.SUM_BY_NONZERO_WEIGHTS){let a=F(e,`labels`,`logLoss`),o=F(t,`predictions`,`logLoss`),s=null;n!=null&&(s=F(n,`weights`,`logLoss`)),b(a.shape,o.shape,`Error in logLoss: `);let c=mm(1),l=mm(r),u=kc(U(a,Oh(H(o,l)))),d=U(J(c,a),Oh(H(J(c,o),l))),f=J(u,d);return CC(f,s,i)}var RC,zC=n((()=>{I(),A(),au(),kh(),xC(),W(),Ac(),R(),hm(),Jh(),wC(),RC=L({logLoss_:LC})}));function BC(e,t,n,r=bC.SUM_BY_NONZERO_WEIGHTS){let i=F(e,`labels`,`meanSquaredError`),a=F(t,`predictions`,`meanSquaredError`),o=null;n!=null&&(o=F(n,`weights`,`meanSquaredError`)),b(i.shape,a.shape,`Error in meanSquaredError: `);let s=Qy(i,a);return CC(s,o,r)}var VC,HC=n((()=>{I(),A(),xC(),R(),$y(),wC(),VC=L({meanSquaredError_:BC})}));function UC(e,t){let n=F(e,`labels`,`sigmoidCrossEntropyWithLogits`),r=F(t,`logits`,`sigmoidCrossEntropyWithLogits`);b(n.shape,r.shape,`Error in sigmoidCrossEntropyWithLogits: `);let i=jv(r),a=U(r,n),o=jh(Mm(kc(mu(r))));return H(J(i,a),o)}function WC(e,t,n,r=0,i=bC.SUM_BY_NONZERO_WEIGHTS){let a=F(e,`multiClassLabels`,`sigmoidCrossEntropy`),o=F(t,`logits`,`sigmoidCrossEntropy`),s=null;if(n!=null&&(s=F(n,`weights`,`sigmoidCrossEntropy`)),b(a.shape,o.shape,`Error in sigmoidCrossEntropy: `),r>0){let e=mm(r),t=mm(1),n=mm(.5);a=H(U(a,J(t,e)),U(n,e))}let c=UC(a,o);return CC(c,s,i)}var GC,KC=n((()=>{I(),A(),hu(),au(),Nm(),Mh(),xC(),W(),Ac(),R(),Mv(),hm(),Jh(),wC(),GC=L({sigmoidCrossEntropy_:WC})}));function qC(e,t,n=-1){if(n===-1&&(n=t.rank-1),n!==t.rank-1)throw Error(`Softmax cross entropy along a non-last dimension is not yet supported. Labels / logits was rank ${t.rank} and dim was ${n}`);return Rh((e,t,r)=>{let i=$h(t,[n],!0),a=J(z(t,`float32`),i);r([e,a]);let o=kc(U(a,e));return{value:q(o,[n]),gradFunc:(e,t)=>{let[r,i]=t,a=$p(e.shape,[n]);return[U(G(e,a),J(z(r,`float32`),Mm(i))),U(G(e,a),J(Mm(i),z(r,`float32`)))]}}})(e,t)}function JC(e,t,n,r=0,i=bC.SUM_BY_NONZERO_WEIGHTS){let a=F(e,`onehotLabels`,`softmaxCrossEntropy`),o=F(t,`logits`,`softmaxCrossEntropy`),s=null;if(n!=null&&(s=F(n,`weights`,`softmaxCrossEntropy`)),b(a.shape,o.shape,`Error in softmaxCrossEntropy: `),r>0){let e=mm(r),t=mm(1),n=mm(a.shape[1]);a=H(U(a,J(t,e)),uu(e,n))}let c=qC(a,o);return CC(c,s,i)}var YC,XC=n((()=>{Bh(),I(),A(),au(),im(),us(),du(),Nm(),eg(),xC(),W(),Ac(),R(),K(),hm(),Jh(),Cm(),wC(),YC=L({softmaxCrossEntropy_:JC})}));function ZC(e,t,n,r){let i=F(e,`indices`,`sparseFillEmptyRows`,`int32`),a=F(t,`values`,`sparseFillEmptyRows`),o=F(n,`denseShape`,`sparseFillEmptyRows`,`int32`),s=F(r,`defaultValue`,`sparseFillEmptyRows`,a.dtype);if(i.rank!==2)throw Error(`Indices should be Tensor2D but received shape
        ${i.shape}`);if(a.rank!==1)throw Error(`Values should be Tensor1D but received shape ${a.shape}`);if(o.rank!==1)throw Error(`Dense shape should be Tensor1D but received shape ${o.shape}`);if(s.rank!==0)throw Error(`Default value should be a scalar but received shape ${s.shape}`);let c={indices:i,values:a,denseShape:o,defaultValue:s},l=N.runKernel(fr,c);return{outputIndices:l[0],outputValues:l[1],emptyRowIndicator:l[2],reverseIndexMap:l[3]}}var QC,$C=n((()=>{P(),k(),I(),R(),QC=L({sparseFillEmptyRows_:ZC})}));function ew(e,t,n){let r=F(e,`inputIndices`,`sparseReshape`,`int32`),i=F(t,`inputShape`,`sparseReshape`,`int32`),a=F(n,`newShape`,`sparseReshape`,`int32`);if(r.rank!==2)throw Error(`Input indices should be Tensor2D but received shape
        ${r.shape}`);if(i.rank!==1)throw Error(`Input shape should be Tensor1D but received shape ${i.shape}`);if(a.rank!==1)throw Error(`New shape should be Tensor1D but received shape ${a.shape}`);let o={inputIndices:r,inputShape:i,newShape:a},s=N.runKernel(pr,o);return{outputIndices:s[0],outputShape:s[1]}}var tw,nw=n((()=>{P(),k(),I(),R(),tw=L({sparseReshape_:ew})}));function rw(e,t,n){let r=F(e,`data`,`sparseSegmentMean`),i=F(t,`indices`,`sparseSegmentMean`,`int32`),a=F(n,`segmentIds`,`sparseSegmentMean`,`int32`);if(r.rank<1)throw Error(`Data should be at least 1 dimensional but received scalar`);if(i.rank!==1)throw Error(`Indices should be Tensor1D but received shape
          ${i.shape}`);if(a.rank!==1)throw Error(`Segment ids should be Tensor1D but received shape
          ${a.shape}`);let o={data:r,indices:i,segmentIds:a};return N.runKernel(mr,o)}var iw,aw=n((()=>{P(),k(),I(),R(),iw=L({sparseSegmentMean_:rw})}));function ow(e,t,n){let r=F(e,`data`,`sparseSegmentSum`),i=F(t,`indices`,`sparseSegmentSum`,`int32`),a=F(n,`segmentIds`,`sparseSegmentSum`,`int32`);if(r.rank<1)throw Error(`Data should be at least 1 dimensional but received scalar`);if(i.rank!==1)throw Error(`Indices should be Tensor1D but received shape
         ${i.shape}`);if(a.rank!==1)throw Error(`Segment ids should be Tensor1D but received shape
         ${a.shape}`);let o={data:r,indices:i,segmentIds:a};return N.runKernel(hr,o)}var sw,cw=n((()=>{P(),k(),I(),R(),sw=L({sparseSegmentSum_:ow})}));function lw(e,t,n,r,i,a,o,s){let c=F(e,`data`,`stringNGrams`,`string`);if(c.dtype!==`string`)throw Error(`Data must be of datatype string`);if(c.shape.length!==1)throw Error(`Data must be a vector, saw: ${c.shape}`);let l=F(t,`dataSplits`,`stringNGrams`);if(l.dtype!==`int32`)throw Error(`Data splits must be of datatype int32`);let u={separator:n,nGramWidths:r,leftPad:i,rightPad:a,padWidth:o,preserveShortSequences:s},d={data:c,dataSplits:l},f=N.runKernel(br,d,u);return{nGrams:f[0],nGramsSplits:f[1]}}var uw,dw=n((()=>{P(),k(),I(),R(),uw=L({stringNGrams_:lw})}));function fw(e,t,n=!0){let r=F(e,`input`,`stringSplit`,`string`),i=F(t,`delimiter`,`stringSplit`,`string`);if(r.rank!==1)throw Error(`Input should be Tensor1D but received shape ${r.shape}`);if(i.rank!==0)throw Error(`Delimiter should be a scalar but received shape ${i.shape}`);let a={skipEmpty:n},o={input:r,delimiter:i},s=N.runKernel(xr,o,a);return{indices:s[0],values:s[1],shape:s[2]}}var pw,mw=n((()=>{P(),k(),I(),R(),pw=L({stringSplit_:fw})}));function hw(e,t){let n=F(e,`input`,`stringToHashBucketFast`,`string`),r={numBuckets:t};if(t<=0)throw Error(`Number of buckets must be at least 1`);let i={input:n};return N.runKernel(Sr,i,r)}var gw,_w=n((()=>{P(),k(),I(),R(),gw=L({stringToHashBucketFast_:hw})})),vw,yw,bw,xw,Sw,Cw,ww,Tw=n((()=>{hu(),vu(),xu(),au(),wu(),Du(),Au(),Nu(),Iu(),zu(),Hu(),Gu(),Ju(),Zu(),bd(),Cd(),Rd(),Vd(),Kd(),Yd(),Qd(),tf(),af(),cf(),df(),cs(),us(),mf(),yf(),ps(),La(),Ed(),Sf(),Tf(),Of(),jf(),Lf(),Pf(),Uf(),Kf(),Qf(),tp(),ip(),sp(),up(),pp(),gp(),yp(),Sp(),Tp(),du(),Lp(),Bp(),Up(),Kp(),Op(),Yp(),Am(),Nm(),Im(),zm(),Gm(),gf(),Jm(),cu(),Zm(),eh(),rh(),Dc(),oh(),lh(),fh(),hh(),vh(),xh(),Ch(),Eh(),kh(),Mh(),Kh(),Zh(),eg(),rg(),og(),lg(),fg(),vg(),ec(),sm(),xg(),wg(),Dg(),Ag(),Ng(),zg(),um(),Hg(),Gg(),Jg(),Zg(),W(),e_(),r_(),Ac(),o_(),rc(),Lg(),l_(),f_(),h_(),v_(),x_(),w_(),D_(),F_(),pm(),R_(),hs(),V_(),W_(),q_(),X_(),$_(),hv(),vv(),xv(),wv(),Ev(),Nc(),kv(),Mv(),Fv(),K(),Rv(),Vv(),Wv(),qv(),Xv(),$v(),ny(),hm(),ay(),cy(),dy(),kd(),my(),_y(),by(),Md(),Cy(),Ey(),ky(),My(),Fy(),Uh(),A_(),Ry(),Vy(),Wy(),Xy(),qy(),vm(),xm(),$y(),nb(),ab(),cb(),db(),Jh(),Cm(),mb(),Fd(),Va(),gb(),vb(),Jc(),bb(),Sb(),wb(),Hm(),Db(),Ab(),Nb(),Ib(),zb(),Vb(),Ub(),jp(),Jb(),Fg(),Pp(),Zb(),Ic(),Dm(),ex(),rx(),gg(),cx(),dx(),gx(),yx(),Sx(),R(),qx(),Xx(),$x(),nS(),aS(),cS(),dS(),mS(),_S(),SS(),RS(),VS(),WS(),qS(),XS(),$S(),nC(),oC(),lC(),fC(),hC(),yC(),DC(),wC(),AC(),NC(),IC(),zC(),HC(),KC(),XC(),$C(),nw(),aw(),cw(),dw(),mw(),_w(),vw={fft:Ly,ifft:By,rfft:Yy,irfft:Uy},yw={hammingWindow:Yx,hannWindow:Qx,frame:tS,stft:iS},bw={flipLeftRight:uS,grayscaleToRGB:pS,resizeNearestNeighbor:tC,resizeBilinear:QS,rotateWithOffset:gS,cropAndResize:sS,nonMaxSuppression:xS,nonMaxSuppressionAsync:LS,nonMaxSuppressionWithScore:BS,nonMaxSuppressionWithScoreAsync:US,nonMaxSuppressionPadded:KS,nonMaxSuppressionPaddedAsync:YS,threshold:aC,transform:cC},xw={bandPart:dC,gramSchmidt:mC,qr:vC},Sw={absoluteDifference:EC,computeWeightedLoss:CC,cosineDistance:kC,hingeLoss:MC,huberLoss:FC,logLoss:RC,meanSquaredError:VC,sigmoidCrossEntropy:GC,softmaxCrossEntropy:YC},Cw={sparseFillEmptyRows:QC,sparseReshape:tw,sparseSegmentMean:iw,sparseSegmentSum:sw},ww={stringNGrams:uw,stringSplit:pw,stringToHashBucketFast:gw}})),Ew,Dw=n((()=>{wc(),Bh(),Tw(),zl(),Ew=class extends Ll{minimize(e,t=!1,n){let{value:r,grads:i}=this.computeGradients(e,n);if(n!=null){let e=n.map(e=>({name:e.name,tensor:i[e.name]}));this.applyGradients(e)}else this.applyGradients(i);return fc(i),t?r:(r.dispose(),null)}get iterations(){return this.iterations_??=0,this.iterations_}incrementIterations(){this.iterations_=this.iterations+1}computeGradients(e,t){return Lh(e,t)}dispose(){this.iterations_!=null&&fc(this.iterations_)}async saveIterations(){return this.iterations_??=0,{name:`iter`,tensor:mm(this.iterations_,`int32`)}}async getWeights(){throw Error(`getWeights() is not implemented for this optimizer yet.`)}async setWeights(e){throw Error(`setWeights() is not implemented for this optimizer class ${this.getClassName()}`)}async extractIterations(e){return this.iterations_=(await e[0].tensor.data())[0],e.slice(1)}},Object.defineProperty(Ew,Symbol.hasInstance,{value:e=>e.minimize!=null&&e.computeGradients!=null&&e.applyGradients!=null})})),Ow,kw=n((()=>{P(),wc(),au(),du(),W(),Tw(),xm(),Pp(),zl(),Dw(),Ow=class extends Ew{constructor(e,t,n=null){super(),this.learningRate=e,this.rho=t,this.epsilon=n,this.accumulatedGrads=[],this.accumulatedUpdates=[],n??(this.epsilon=N.backend.epsilon())}applyGradients(e){(Array.isArray(e)?e.map(e=>e.name):Object.keys(e)).forEach((t,n)=>{let r=N.registeredVariables[t];this.accumulatedGrads[n]??(this.accumulatedGrads[n]={originalName:`${t}/accum_grad`,variable:B(()=>Np(r).variable(!1))}),this.accumulatedUpdates[n]??(this.accumulatedUpdates[n]={originalName:`${t}/accum_var`,variable:B(()=>Np(r).variable(!1))});let i=Array.isArray(e)?e[n].tensor:e[t];if(i==null)return;let a=this.accumulatedGrads[n].variable,o=this.accumulatedUpdates[n].variable;B(()=>{let e=H(U(a,this.rho),U(bm(i),1-this.rho)),t=U(uu(_m(H(o,this.epsilon)),_m(H(a,this.epsilon))),i),n=H(U(o,this.rho),U(bm(t),1-this.rho));a.assign(e),o.assign(n);let s=H(U(t,-this.learningRate),r);r.assign(s)})}),this.incrementIterations()}dispose(){this.accumulatedUpdates!=null&&(fc(this.accumulatedGrads.map(e=>e.variable)),fc(this.accumulatedUpdates.map(e=>e.variable)))}async getWeights(){let e=[...this.accumulatedGrads,...this.accumulatedUpdates];return[await this.saveIterations()].concat(e.map(e=>({name:e.originalName,tensor:e.variable})))}async setWeights(e){e=await this.extractIterations(e);let t=e.length/2;this.accumulatedGrads=e.slice(0,t).map(e=>({originalName:e.name,variable:e.tensor.variable(!1)})),this.accumulatedUpdates=e.slice(t,t*2).map(e=>({originalName:e.name,variable:e.tensor.variable(!1)}))}getConfig(){return{learningRate:this.learningRate,rho:this.rho,epsilon:this.epsilon}}static fromConfig(e,t){return new e(t.learningRate,t.rho,t.epsilon)}},Ow.className=`Adadelta`,V(Ow)})),Aw,jw=n((()=>{P(),wc(),au(),du(),gf(),W(),vm(),xm(),zl(),Dw(),Aw=class extends Ew{constructor(e,t=.1){super(),this.learningRate=e,this.initialAccumulatorValue=t,this.accumulatedGrads=[]}applyGradients(e){(Array.isArray(e)?e.map(e=>e.name):Object.keys(e)).forEach((t,n)=>{let r=N.registeredVariables[t];this.accumulatedGrads[n]??(this.accumulatedGrads[n]={originalName:`${t}/accumulator`,variable:B(()=>hf(r.shape,this.initialAccumulatorValue).variable(!1))});let i=Array.isArray(e)?e[n].tensor:e[t];if(i==null)return;let a=this.accumulatedGrads[n].variable;B(()=>{let e=H(a,bm(i));a.assign(e);let t=H(U(uu(i,_m(H(e,N.backend.epsilon()))),-this.learningRate),r);r.assign(t)})}),this.incrementIterations()}dispose(){this.accumulatedGrads!=null&&fc(this.accumulatedGrads.map(e=>e.variable))}async getWeights(){return[await this.saveIterations()].concat(this.accumulatedGrads.map(e=>({name:e.originalName,tensor:e.variable})))}async setWeights(e){e=await this.extractIterations(e),this.accumulatedGrads=e.map(e=>({originalName:e.name,variable:e.tensor.variable(!1)}))}getConfig(){return{learningRate:this.learningRate,initialAccumulatorValue:this.initialAccumulatorValue}}static fromConfig(e,t){return new e(t.learningRate,t.initialAccumulatorValue)}},Aw.className=`Adagrad`,V(Aw)})),Mw,Nw=n((()=>{P(),wc(),au(),du(),W(),pm(),hm(),vm(),xm(),Jh(),Pp(),zl(),Dw(),Mw=class extends Ew{constructor(e,t,n,r=null){super(),this.learningRate=e,this.beta1=t,this.beta2=n,this.epsilon=r,this.accumulatedFirstMoment=[],this.accumulatedSecondMoment=[],B(()=>{this.accBeta1=mm(t).variable(),this.accBeta2=mm(n).variable()}),r??(this.epsilon=N.backend.epsilon())}applyGradients(e){let t=Array.isArray(e)?e.map(e=>e.name):Object.keys(e);B(()=>{let n=J(1,this.accBeta1),r=J(1,this.accBeta2);t.forEach((t,i)=>{let a=N.registeredVariables[t];this.accumulatedFirstMoment[i]??(this.accumulatedFirstMoment[i]={originalName:`${t}/m`,variable:B(()=>Np(a).variable(!1))}),this.accumulatedSecondMoment[i]??(this.accumulatedSecondMoment[i]={originalName:`${t}/v`,variable:B(()=>Np(a).variable(!1))});let o=Array.isArray(e)?e[i].tensor:e[t];if(o==null)return;let s=this.accumulatedFirstMoment[i].variable,c=this.accumulatedSecondMoment[i].variable,l=H(U(s,this.beta1),U(o,1-this.beta1)),u=H(U(c,this.beta2),U(bm(o),1-this.beta2)),d=uu(l,n),f=uu(u,r);s.assign(l),c.assign(u);let p=H(U(uu(d,H(_m(f),this.epsilon)),-this.learningRate),a);a.assign(p)}),this.accBeta1.assign(U(this.accBeta1,this.beta1)),this.accBeta2.assign(U(this.accBeta2,this.beta2))}),this.incrementIterations()}dispose(){this.accBeta1.dispose(),this.accBeta2.dispose(),this.accumulatedFirstMoment!=null&&fc(this.accumulatedFirstMoment.map(e=>e.variable)),this.accumulatedSecondMoment!=null&&fc(this.accumulatedSecondMoment.map(e=>e.variable))}async getWeights(){let e=[...this.accumulatedFirstMoment,...this.accumulatedSecondMoment];return[await this.saveIterations()].concat(e.map(e=>({name:e.originalName,tensor:e.variable})))}async setWeights(e){e=await this.extractIterations(e),B(()=>{this.accBeta1.assign(fm(this.beta1,this.iterations_+1)),this.accBeta2.assign(fm(this.beta2,this.iterations_+1))});let t=e.length/2;this.accumulatedFirstMoment=e.slice(0,t).map(e=>({originalName:e.name,variable:e.tensor.variable(!1)})),this.accumulatedSecondMoment=e.slice(t,t*2).map(e=>({originalName:e.name,variable:e.tensor.variable(!1)}))}getConfig(){return{learningRate:this.learningRate,beta1:this.beta1,beta2:this.beta2,epsilon:this.epsilon}}static fromConfig(e,t){return new e(t.learningRate,t.beta1,t.beta2,t.epsilon)}},Mw.className=`Adam`,V(Mw)})),Pw,Fw=n((()=>{P(),wc(),hu(),au(),du(),Ag(),W(),hm(),Jh(),Pp(),zl(),Dw(),Pw=class extends Ew{constructor(e,t,n,r=null,i=0){super(),this.learningRate=e,this.beta1=t,this.beta2=n,this.epsilon=r,this.decay=i,this.accumulatedFirstMoment=[],this.accumulatedWeightedInfNorm=[],B(()=>{this.iteration=mm(0).variable(),this.accBeta1=mm(t).variable()}),r??(this.epsilon=N.backend.epsilon())}applyGradients(e){let t=Array.isArray(e)?e.map(e=>e.name):Object.keys(e);B(()=>{let n=J(1,this.accBeta1),r=uu(-this.learningRate,H(U(this.iteration,this.decay),1));t.forEach((t,i)=>{let a=N.registeredVariables[t];this.accumulatedFirstMoment[i]??(this.accumulatedFirstMoment[i]={originalName:`${t}/m`,variable:Np(a).variable(!1)}),this.accumulatedWeightedInfNorm[i]??(this.accumulatedWeightedInfNorm[i]={originalName:`${t}/v`,variable:Np(a).variable(!1)});let o=Array.isArray(e)?e[i].tensor:e[t];if(o==null)return;let s=this.accumulatedFirstMoment[i].variable,c=this.accumulatedWeightedInfNorm[i].variable,l=H(U(s,this.beta1),U(o,1-this.beta1)),u=U(c,this.beta2),d=mu(o),f=kg(u,d);s.assign(l),c.assign(f);let p=H(U(uu(r,n),uu(l,H(f,this.epsilon))),a);a.assign(p)}),this.iteration.assign(H(this.iteration,1)),this.accBeta1.assign(U(this.accBeta1,this.beta1))}),this.incrementIterations()}dispose(){this.accBeta1.dispose(),this.iteration.dispose(),this.accumulatedFirstMoment!=null&&fc(this.accumulatedFirstMoment.map(e=>e.variable)),this.accumulatedWeightedInfNorm!=null&&fc(this.accumulatedWeightedInfNorm.map(e=>e.variable))}async getWeights(){throw Error(`getWeights() is not implemented for Adamax yet.`)}async setWeights(e){throw Error(`setWeights() is not implemented for Adamax yet.`)}getConfig(){return{learningRate:this.learningRate,beta1:this.beta1,beta2:this.beta2,epsilon:this.epsilon,decay:this.decay}}static fromConfig(e,t){return new e(t.learningRate,t.beta1,t.beta2,t.epsilon,t.decay)}},Pw.className=`Adamax`,V(Pw)})),Iw,Lw=n((()=>{P(),wc(),au(),W(),hm(),zl(),Dw(),Iw=class extends Ew{constructor(e){super(),this.learningRate=e,this.setLearningRate(e)}applyGradients(e){(Array.isArray(e)?e.map(e=>e.name):Object.keys(e)).forEach((t,n)=>{let r=Array.isArray(e)?e[n].tensor:e[t];if(r==null)return;let i=N.registeredVariables[t];B(()=>{let e=H(U(this.c,r),i);i.assign(e)})}),this.incrementIterations()}setLearningRate(e){this.learningRate=e,this.c!=null&&this.c.dispose(),this.c=pc(mm(-e))}dispose(){this.c.dispose()}async getWeights(){return[await this.saveIterations()]}async setWeights(e){if(e=await this.extractIterations(e),e.length!==0)throw Error(`SGD optimizer does not have settable weights.`)}getConfig(){return{learningRate:this.learningRate}}static fromConfig(e,t){return new e(t.learningRate)}},Iw.className=`SGD`,V(Iw)})),Rw,zw=n((()=>{P(),wc(),au(),W(),hm(),Pp(),zl(),Lw(),Rw=class extends Iw{constructor(e,t,n=!1){super(e),this.learningRate=e,this.momentum=t,this.useNesterov=n,this.accumulations=[],this.m=mm(this.momentum)}applyGradients(e){(Array.isArray(e)?e.map(e=>e.name):Object.keys(e)).forEach((t,n)=>{let r=N.registeredVariables[t];this.accumulations[n]??(this.accumulations[n]={originalName:`${t}/momentum`,variable:B(()=>Np(r).variable(!1))});let i=this.accumulations[n].variable,a=Array.isArray(e)?e[n].tensor:e[t];a!=null&&B(()=>{let e,t=H(U(this.m,i),a);e=this.useNesterov?H(U(this.c,H(a,U(t,this.m))),r):H(U(this.c,t),r),i.assign(t),r.assign(e)})}),this.incrementIterations()}dispose(){this.m.dispose(),this.accumulations!=null&&fc(this.accumulations.map(e=>e.variable))}setMomentum(e){this.momentum=e}async getWeights(){return[await this.saveIterations()].concat(this.accumulations.map(e=>({name:e.originalName,tensor:e.variable})))}async setWeights(e){e=await this.extractIterations(e),this.accumulations=e.map(e=>({originalName:e.name,variable:e.tensor.variable(!1)}))}getConfig(){return{learningRate:this.learningRate,momentum:this.momentum,useNesterov:this.useNesterov}}static fromConfig(e,t){return new e(t.learningRate,t.momentum,t.useNesterov)}},Rw.className=`Momentum`,V(Rw)})),Bw,Vw=n((()=>{P(),wc(),au(),du(),W(),vm(),xm(),Jh(),Pp(),zl(),Dw(),Bw=class extends Ew{constructor(e,t=.9,n=0,r=null,i=!1){if(super(),this.learningRate=e,this.decay=t,this.momentum=n,this.epsilon=r,this.accumulatedMeanSquares=[],this.accumulatedMoments=[],this.accumulatedMeanGrads=[],this.centered=i,r??(this.epsilon=N.backend.epsilon()),e==null)throw Error(`learningRate for RMSPropOptimizer must be defined.`)}applyGradients(e){(Array.isArray(e)?e.map(e=>e.name):Object.keys(e)).forEach((t,n)=>{let r=N.registeredVariables[t];this.accumulatedMeanSquares[n]??(this.accumulatedMeanSquares[n]={originalName:`${t}/rms`,variable:B(()=>Np(r).variable(!1))}),this.accumulatedMoments[n]??(this.accumulatedMoments[n]={originalName:`${t}/momentum`,variable:B(()=>Np(r).variable(!1))}),this.accumulatedMeanGrads[n]==null&&this.centered&&(this.accumulatedMeanGrads[n]={originalName:`${t}/mg`,variable:B(()=>Np(r).variable(!1))});let i=Array.isArray(e)?e[n].tensor:e[t];if(i==null)return;let a=this.accumulatedMeanSquares[n].variable,o=this.accumulatedMoments[n].variable;B(()=>{let e=H(U(a,this.decay),U(bm(i),1-this.decay));if(this.centered){let t=this.accumulatedMeanGrads[n].variable,s=H(U(t,this.decay),U(i,1-this.decay)),c=uu(U(i,this.learningRate),_m(J(e,H(bm(s),this.epsilon)))),l=H(U(o,this.momentum),c);a.assign(e),t.assign(s),o.assign(l);let u=J(r,l);r.assign(u)}else{let e=H(U(a,this.decay),U(bm(i),1-this.decay)),t=H(U(o,this.momentum),uu(U(i,this.learningRate),_m(H(e,this.epsilon))));a.assign(e),o.assign(t);let n=J(r,t);r.assign(n)}})}),this.incrementIterations()}dispose(){this.accumulatedMeanSquares!=null&&fc(this.accumulatedMeanSquares.map(e=>e.variable)),this.accumulatedMeanGrads!=null&&this.centered&&fc(this.accumulatedMeanGrads.map(e=>e.variable)),this.accumulatedMoments!=null&&fc(this.accumulatedMoments.map(e=>e.variable))}async getWeights(){let e=[...this.accumulatedMeanSquares,...this.accumulatedMoments];return this.centered&&e.push(...this.accumulatedMeanGrads),[await this.saveIterations()].concat(e.map(e=>({name:e.originalName,tensor:e.variable})))}async setWeights(e){e=await this.extractIterations(e);let t=this.centered?e.length/3:e.length/2;this.accumulatedMeanSquares=e.slice(0,t).map(e=>({originalName:e.name,variable:e.tensor.variable(!1)})),this.accumulatedMoments=e.slice(t,t*2).map(e=>({originalName:e.name,variable:e.tensor.variable(!1)})),this.centered&&(this.accumulatedMeanGrads=e.slice(t*2,t*3).map(e=>({originalName:e.name,variable:e.tensor.variable(!1)})))}getConfig(){return{learningRate:this.learningRate,decay:this.decay,momentum:this.momentum,epsilon:this.epsilon,centered:this.centered}}static fromConfig(e,t){return new e(t.learningRate,t.decay,t.momentum,t.epsilon,t.centered)}},Bw.className=`RMSProp`,V(Bw)})),Hw,Uw=n((()=>{kw(),jw(),Nw(),Fw(),zw(),Vw(),Lw(),Hw=class{static sgd(e){return new Iw(e)}static momentum(e,t,n=!1){return new Rw(e,t,n)}static rmsprop(e,t=.9,n=0,r=null,i=!1){return new Bw(e,t,n,r,i)}static adam(e=.001,t=.9,n=.999,r=null){return new Mw(e,t,n,r)}static adadelta(e=.001,t=.95,n=null){return new Ow(e,t,n)}static adamax(e=.002,t=.9,n=.999,r=null,i=0){return new Pw(e,t,n,r,i)}static adagrad(e,t=.1){return new Aw(e,t)}}})),Ww,Gw=n((()=>{Uw(),Ww={sgd:Hw.sgd,momentum:Hw.momentum,adadelta:Hw.adadelta,adagrad:Hw.adagrad,rmsprop:Hw.rmsprop,adamax:Hw.adamax,adam:Hw.adam}}));function Kw(){return new Promise(e=>qw(()=>e()))}var qw,Jw=n((()=>{qw=typeof requestAnimationFrame<`u`?requestAnimationFrame:typeof setImmediate<`u`?setImmediate:e=>e()}));function Yw(e,t){let n=e[0].length;e.forEach((e,t)=>{y(e.length===n,()=>`Error in concat${n}D: rank of tensors[${t}] must be the same as the rank of the rest (${n})`)}),y(t>=0&&t<n,()=>`Error in concat${n}D: axis must be between 0 and ${n-1}.`);let r=e[0];e.forEach((e,i)=>{for(let a=0;a<n;a++)y(a===t||e[a]===r[a],()=>`Error in concat${n}D: Shape of tensors[${i}] (${e}) does not match the shape of the rest (${r}) along the non-concatenated axis ${i}.`)})}function Xw(e,t){let n=e[0].slice();for(let r=1;r<e.length;r++)n[t]+=e[r][t];return n}var Zw=n((()=>{A()})),Qw=n((()=>{}));function $w(e,t,n){let r=[];if(n==null&&t==null)return r;if(t==null)for(;r.length<e+n.length;)r.push(-1);else r=t.slice();if(n==null)return r;if(e+n.length!==r.length)throw Error(`rt input.shape and shape=${t} are incompatible: rt input.rank = ${e+n.length}, but shape.rank = ${r.length}`);for(let i=1;i<n.length;++i){let a=n[i],o=r[r.length-n.length+i],s=r[o];if(a>=0){if(s>=0){if(s!==a)throw Error(`rt input.shape and shape=${t} are incompatible: rt input.shape[${i+e}] = ${a} but shape[${i+e}] = ${s}`)}else r[o]=a}}return r}function eT(e){let t={FIRST_DIM_SIZE:rT.FIRST_DIM_SIZE,VALUE_ROWIDS:rT.VALUE_ROWIDS,ROW_LENGTHS:rT.ROW_LENGTHS,ROW_SPLITS:rT.ROW_SPLITS,ROW_LIMITS:rT.ROW_LIMITS,ROW_STARTS:rT.ROW_STARTS},n=[];for(let r of e)if(r in t)n.push(t[r]);else break;return n}function tT(e){return e.length===0?0:e[0]===rT.FIRST_DIM_SIZE?e.length-1:e.length}function nT(e,t){if(e==null||t==null)return;let n=e.length,r=t.length;if(n>=r)throw Error(`defaultValue.shape=${e} and ragged tensor flatValues.shape=${t}, are incompatible: defaultValue.rank = ${n} must be less than ragged tensor input flatValues.rank = ${r})`);for(let i=0;i<Math.min(n,r-1);++i){let n=e[i],r=t[i+1];if(n>=0&&r>=0&&n!==1&&n!==r)throw Error(`defaultValue.shape=${e}, and ragged tensor input flatValues.shape=${t} are incompatible: defaultValue.shape[${i-e.length}] = ${n} but ragged tensor input.flatValues.shape[${i-e.length}] = ${r}`)}}var rT,iT=n((()=>{(function(e){e[e.FIRST_DIM_SIZE=0]=`FIRST_DIM_SIZE`,e[e.VALUE_ROWIDS=1]=`VALUE_ROWIDS`,e[e.ROW_LENGTHS=2]=`ROW_LENGTHS`,e[e.ROW_SPLITS=3]=`ROW_SPLITS`,e[e.ROW_LIMITS=4]=`ROW_LIMITS`,e[e.ROW_STARTS=5]=`ROW_STARTS`})(rT||={})}));function aT(e){return e<=30?e:be(e,Math.floor(Math.sqrt(e)))}var oT=n((()=>{A()}));function sT(e,t,n){return[n*(typeof e==`number`?e:e[0]),t*(typeof e==`number`?e:e[1])]}var cT=n((()=>{}));function lT(e,t,n,r=!0){let i=[];if(r)i=i.concat(t.slice(0)),i.push(e[0]/n),i=i.concat(e.slice(1));else{i=i.concat(e[0]);let n=t.length;for(let r=0;r<n;++r)i=i.concat([e[r+1]/t[r],t[r]]);i=i.concat(e.slice(n+1))}return i}function uT(e,t,n=!0){let r=[];if(n){r.push(t);for(let n=t+1;n<e;++n)n<=2*t?(r.push(n),r.push(n-(t+1))):r.push(n)}else{let n=[],i=[];for(let r=1;r<e;++r)r>=t*2+1||r%2==1?i.push(r):n.push(r);r.push(...n),r.push(0),r.push(...i)}return r}function dT(e,t,n,r=!0){let i=[];r?i.push(e[0]/n):i.push(e[0]*n);for(let n=1;n<e.length;++n)n<=t.length?r?i.push(t[n-1]*e[n]):i.push(e[n]/t[n-1]):i.push(e[n]);return i}function fT(e,t){let n=[0];for(let r=0;r<t;++r)n.push(e[r][0]);return n}function pT(e,t,n){let r=e.slice(0,1);for(let i=0;i<n;++i)r.push(e[i+1]-t[i][0]-t[i][1]);return r}var mT=n((()=>{})),hT,gT,_T=n((()=>{hT=1.7580993408473768,gT=1.0507009873554805})),vT,yT,bT,xT,ST,CT,wT=n((()=>{vT=.3275911,yT=.254829592,bT=-.284496736,xT=1.421413741,ST=-1.453152027,CT=1.061405429}));function TT(e,t){if(e.length!==t.length)throw Error(`Cannot merge real and imag arrays of different lengths. real:${e.length}, imag: ${t.length}.`);let n=new Float32Array(e.length*2);for(let r=0;r<n.length;r+=2)n[r]=e[r/2],n[r+1]=t[r/2];return n}function ET(e){let t=new Float32Array(e.length/2),n=new Float32Array(e.length/2);for(let r=0;r<e.length;r+=2)t[r/2]=e[r],n[r/2]=e[r+1];return{real:t,imag:n}}function DT(e){let t=Math.ceil(e.length/4),n=new Float32Array(t),r=new Float32Array(t);for(let t=0;t<e.length;t+=4)n[Math.floor(t/4)]=e[t],r[Math.floor(t/4)]=e[t+1];return{real:n,imag:r}}function OT(e){let t=Math.floor(e.length/4),n=new Float32Array(t),r=new Float32Array(t);for(let t=2;t<e.length;t+=4)n[Math.floor(t/4)]=e[t],r[Math.floor(t/4)]=e[t+1];return{real:n,imag:r}}function kT(e,t){return{real:e[t*2],imag:e[t*2+1]}}function AT(e,t,n,r){e[r*2]=t,e[r*2+1]=n}function jT(e,t){let n=new Float32Array(e/2),r=new Float32Array(e/2);for(let i=0;i<Math.ceil(e/2);i++){let a=(t?2:-2)*Math.PI*(i/e);n[i]=Math.cos(a),r[i]=Math.sin(a)}return{real:n,imag:r}}function MT(e,t,n){let r=(n?2:-2)*Math.PI*(e/t);return{real:Math.cos(r),imag:Math.sin(r)}}var NT=n((()=>{}));function PT(e,t){e=e.replace(/\s/g,``);let n=(e.length-e.replace(VT,``).length)/2;if(n<1)throw Error(`Equations without an arrow are not supported.`);if(n>1)throw Error(`Equation must contain exactly one arrow ("${BT}").`);let[r,i]=e.split(BT);y(r.indexOf(UT)===-1,()=>`The ellipsis notation ("${UT}") is not supported yet.`);let a=r.split(HT),o=a.length;if(t!==o)throw Error(`Expected ${o} input tensors, received ${t}`);if(o>2)throw Error(`Support for more than 2 input tensors is not implemented yet.`);let s=[];for(let e=0;e<i.length;++e){let t=i[e];if(!a.some(e=>e.indexOf(t)!==-1))throw Error(`Output subscripts contain the label ${t} not present in the input subscripts.`);s.indexOf(t)===-1&&s.push(t)}for(let e=0;e<r.length;++e){let t=r[e];s.indexOf(t)===-1&&t!==HT&&s.push(t)}let c=Array(a.length);for(let e=0;e<o;++e){if(new Set(a[e].split(``)).size!==a[e].length)throw Error(`Found duplicate axes in input component ${a[e]}. Support for duplicate axes in input is not implemented yet.`);c[e]=[];for(let t=0;t<a[e].length;++t)c[e].push(s.indexOf(a[e][t]))}let l=s.length,u=i.length,d=[];for(let e=u;e<l;++e)d.push(e);return{allDims:s,summedDims:d,idDims:c}}function FT(e,t){let n=Array(e);n.fill(-1);for(let e=0;e<t.length;++e)n[t[e]]=e;let r=[];for(let t=0;t<e;++t)n[t]===-1&&r.push(t);return n=n.filter(e=>e!==-1),{permutationIndices:n,expandDims:r}}function IT(e,t,n){let r=Array(e);for(let e=0;e<n.length;++e){let i=n[e].shape;for(let n=0;n<t[e].length;++n)r[t[e][n]]===void 0?r[t[e][n]]=i[n]:y(r[t[e][n]]===i[n],()=>`Expected dimension ${r[t[e][n]]} at axis ${n} of input shaped ${JSON.stringify(i)}, but got dimension ${i[n]}`)}}function LT(e,t){let n=e,r=[],i=0;e.length===0&&n.push(-1),i=e.length+1;for(let e=0;e<i;++e)r.push([]);let a=[];for(let e=0;e<n.length;++e){let i=n[e],o=zT(t,i);for(let t of o)a.indexOf(t)===-1&&(r[e].push(t),a.push(t))}return{path:n,steps:r}}function RT(e){return e.every((e,t)=>e===t)}function zT(e,t){let n=[];for(let r=0;r<e.length;++r)(e[r].length===0||e[r].indexOf(t)!==-1||t===-1)&&n.push(r);return n}var BT,VT,HT,UT,WT=n((()=>{je(),BT=`->`,VT=/->/g,HT=`,`,UT=`...`}));function GT(e,t,n=0){let r=[];if(typeof t==`number`)y(e.shape[n]%t===0,()=>`Number of splits must evenly divide the axis.`),r=Array(t).fill(e.shape[n]/t);else{y(t.reduce((e,t)=>(t===-1&&(e+=1),e),0)<=1,()=>`There should be only one negative value in split array.`);let i=t.indexOf(-1);if(i!==-1){let r=t.reduce((e,t)=>t>0?e+t:e);t[i]=e.shape[n]-r}y(e.shape[n]===t.reduce((e,t)=>e+t),()=>`The sum of sizes must match the size of the axis dimension.`),r=t}return r}var KT=n((()=>{A()}));function qT(e){return`Received SparseTensor with denseShape[0] = 0 but
  indices.shape[0] = ${e}`}function JT(e,t){return`indices(${e}, 0) is invalid: ${t} < 0`}function YT(e,t,n){return`indices(${e}, 0) is invalid: ${t} >= ${n}`}var XT=n((()=>{}));function ZT(e,t){return`only one output dimension may be -1, not both ${e} and ${t}`}function QT(e,t){return`size ${e} must be non-negative, not ${t}`}function $T(){return`reshape cannot infer the missing input size for an empty tensor unless all specified input sizes are non-zero`}function eE(e,t){return`Input to reshape is a SparseTensor with ${C(e)}
  dense values, but the requested shape requires a multiple of ${C(t)}. inputShape=${e} outputShape= ${t}`}function tE(e,t){return`Input to reshape is a tensor with ${C(e)} dense values, but the requested shape has ${C(t)}. inputShape=${e} outputShape=${t}`}var nE=n((()=>{A()}));function rE(){return`segment ids must be >= 0`}function iE(){return`segment ids are not increasing`}function aE(e,t){return`Segment id ${e} out of range [0, ${t}), possibly because segmentIds input is not sorted.`}function oE(e,t,n){return`Bad: indices[${e}] == ${t} out of range [0, ${n})`}var sE=n((()=>{})),cE=r({collectGatherOpShapeInfo:()=>dE,computeOutShape:()=>uE,segOpComputeOptimalWindowSize:()=>lE});function lE(e,t){let n=!1,r;for(e<=30?(r=e,n=!0):r=be(e,Math.floor(Math.sqrt(e)));!n;)r>t||r===e?n=!0:r=be(e,r+1);return r}function uE(e,t,n){let r=[],i=e.length;for(let a=0;a<i;a++)a===t?r.push(n):r.push(e[a]);return r}function dE(e,t,n,r){let i=t.shape.length,a=e.shape.length;if(r!==0&&(r<-i||r>i))throw Error(`Expect batchDims in the range of [-${i}, ${i}], but got ${r}`);if(r<0&&(r+=i),r>a)throw Error(`batchDims (${r}) must be less than rank(x) (
    ${a}).`);if(n<r)throw Error(`batchDims (${r}) must be less than or equal to axis (${n}).`);for(let n=0;n<r;++n)if(e.shape[n]!==t.shape[n])throw Error(`x.shape[${n}]: ${e.shape[n]} should be equal to indices.shape[${n}]: ${t.shape[n]}.`);let o=e.shape[n],s=[],c=1,l=1,u=1;for(let t=0;t<r;++t)s.push(e.shape[t]),c*=e.shape[t];for(let t=r;t<n;t++)s.push(e.shape[t]),l*=e.shape[t];for(let e=r;e<i;e++)s.push(t.shape[e]);for(let t=n+1;t<a;t++)s.push(e.shape[t]),u*=e.shape[t];return{batchSize:c,sliceSize:u,outerSize:l,dimSize:o,outputShape:s}}var fE=n((()=>{A(),oT()})),pE=r({ERF_A1:()=>yT,ERF_A2:()=>bT,ERF_A3:()=>xT,ERF_A4:()=>ST,ERF_A5:()=>CT,ERF_P:()=>vT,PARALLELIZE_THRESHOLD:()=>30,RowPartitionType:()=>rT,SELU_SCALE:()=>gT,SELU_SCALEALPHA:()=>hT,applyActivation:()=>Ox,assertAndGetBroadcastShape:()=>Gc,assertAxesAreInnerMostDims:()=>em,assertParamsConsistent:()=>Yw,assignToTypedArray:()=>AT,axesAreInnerMostDims:()=>Xp,calculateShapes:()=>fl,checkEinsumDimSizes:()=>IT,checkPadOnDimRoundingMode:()=>hd,combineLocations:()=>Zp,combineRaggedTensorToTensorShapes:()=>$w,complexWithEvenIndex:()=>DT,complexWithOddIndex:()=>OT,computeConv2DInfo:()=>td,computeConv3DInfo:()=>nd,computeDefaultPad:()=>ad,computeDilation2DInfo:()=>Qu,computeOptimalWindowSize:()=>aT,computeOutAndReduceShapes:()=>Qp,computeOutShape:()=>Xw,computePool2DInfo:()=>$u,computePool3DInfo:()=>ed,convertConv2DDataFormat:()=>md,decodeEinsumEquation:()=>PT,eitherStridesOrDilationsAreOne:()=>pd,expandShapeToKeepDim:()=>$p,exponent:()=>MT,exponents:()=>jT,fromStringArrayToUint8:()=>hE,fromUint8ToStringArray:()=>mE,getAxesPermutation:()=>tm,getBroadcastDims:()=>Uc,getComplexWithIndex:()=>kT,getEinsumComputePath:()=>LT,getEinsumPermutation:()=>FT,getFusedBiasGradient:()=>Dx,getFusedDyActivation:()=>Ex,getImageCenter:()=>sT,getInnerMostAxes:()=>rm,getPermuted:()=>uT,getRaggedRank:()=>tT,getReductionAxes:()=>Wc,getReshaped:()=>lT,getReshapedPermuted:()=>dT,getRowPartitionTypesHelper:()=>eT,getSliceBeginCoords:()=>fT,getSliceSize:()=>pT,getSparseFillEmptyRowsIndicesDenseShapeMismatch:()=>qT,getSparseFillEmptyRowsNegativeIndexErrorMessage:()=>JT,getSparseFillEmptyRowsOutOfRangeIndexErrorMessage:()=>YT,getSparseReshapeEmptyTensorZeroOutputDimErrorMessage:()=>$T,getSparseReshapeInputOutputMismatchErrorMessage:()=>tE,getSparseReshapeInputOutputMultipleErrorMessage:()=>eE,getSparseReshapeMultipleNegativeOneOutputDimErrorMessage:()=>ZT,getSparseReshapeNegativeOutputDimErrorMessage:()=>QT,getSparseSegmentReductionIndicesOutOfRangeErrorMessage:()=>oE,getSparseSegmentReductionNegativeSegmentIdsErrorMessage:()=>rE,getSparseSegmentReductionNonIncreasingSegmentIdsErrorMessage:()=>iE,getSparseSegmentReductionSegmentIdOutOfRangeErrorMessage:()=>aE,getUndoAxesPermutation:()=>nm,isIdentityPermutation:()=>RT,log:()=>Br,mergeRealAndImagArrays:()=>TT,prepareAndValidate:()=>sl,prepareSplitSize:()=>GT,segment_util:()=>cE,shouldFuse:()=>kx,slice_util:()=>ml,splitRealAndImagArrays:()=>ET,tupleValuesAreOne:()=>fd,upcastType:()=>Qi,validateDefaultValueShape:()=>nT,validateInput:()=>dl,validateUpdateShape:()=>ul,warn:()=>zr});function mE(e){try{return e.map(e=>Di(e))}catch(e){throw Error(`Failed to decode encoded string bytes into utf-8, error: ${e}`)}}function hE(e){return e.map(e=>Ei(e))}var gE=n((()=>{A(),im(),Kc(),Zw(),gd(),Ax(),Qw(),iT(),oT(),Fl(),oa(),cT(),mT(),cl(),pl(),_T(),Ax(),wT(),Vr(),NT(),WT(),KT(),XT(),nE(),sE(),fE()})),_E=r({nonMaxSuppressionV3Impl:()=>OS,nonMaxSuppressionV4Impl:()=>kS,nonMaxSuppressionV5Impl:()=>AS,whereImpl:()=>Wb}),vE=n((()=>{FS(),Gb()})),yE=n((()=>{Zs(),Vc(),Kc(),al(),cl(),pl(),Fl(),zl(),ma(),tu(),A(),ru(),kw(),jw(),Nw(),Fw(),zw(),Dw(),Uw(),Vw(),Lw(),M(),oa(),Tw(),xC(),Gw(),wc(),$r(),Bh(),ze(),Jw(),gE(),Da(),vE(),u(),k()})),bE=r({Abs:()=>`Abs`,Acos:()=>Ge,Acosh:()=>Ke,AdadeltaOptimizer:()=>Ow,AdagradOptimizer:()=>Aw,AdamOptimizer:()=>Mw,AdamaxOptimizer:()=>Pw,Add:()=>`Add`,AddN:()=>qe,All:()=>`All`,Any:()=>`Any`,ArgMax:()=>Je,ArgMin:()=>Ye,Asin:()=>Xe,Asinh:()=>Ze,Atan:()=>Qe,Atan2:()=>et,Atanh:()=>$e,AvgPool:()=>tt,AvgPool3D:()=>rt,AvgPool3DGrad:()=>it,AvgPoolGrad:()=>nt,BatchMatMul:()=>at,BatchToSpaceND:()=>ot,Bincount:()=>st,BroadcastArgs:()=>lt,BroadcastTo:()=>ct,Cast:()=>ut,Ceil:()=>dt,ClipByValue:()=>ft,Complex:()=>pt,ComplexAbs:()=>mt,Concat:()=>ht,Conv2D:()=>gt,Conv2DBackpropFilter:()=>_t,Conv2DBackpropInput:()=>vt,Conv3D:()=>yt,Conv3DBackpropFilterV2:()=>bt,Conv3DBackpropInputV2:()=>xt,Cos:()=>`Cos`,Cosh:()=>St,CropAndResize:()=>Tt,Cumprod:()=>Ct,Cumsum:()=>wt,DataStorage:()=>c,DenseBincount:()=>Et,DepthToSpace:()=>Dt,DepthwiseConv2dNative:()=>Ot,DepthwiseConv2dNativeBackpropFilter:()=>kt,DepthwiseConv2dNativeBackpropInput:()=>At,Diag:()=>jt,Dilation2D:()=>Mt,Dilation2DBackpropFilter:()=>Pt,Dilation2DBackpropInput:()=>Nt,ENV:()=>Re,Einsum:()=>It,Elu:()=>`Elu`,EluGrad:()=>Lt,Environment:()=>Le,Equal:()=>Rt,Erf:()=>`Erf`,Exp:()=>`Exp`,ExpandDims:()=>zt,Expm1:()=>Bt,FFT:()=>`FFT`,Fill:()=>Vt,FlipLeftRight:()=>Ht,Floor:()=>Ut,FloorDiv:()=>Wt,FromPixels:()=>Pr,FusedBatchNorm:()=>Gt,FusedConv2D:()=>Lr,FusedDepthwiseConv2D:()=>Rr,GatherNd:()=>qt,GatherV2:()=>Kt,Greater:()=>Jt,GreaterEqual:()=>Yt,IFFT:()=>Zt,Identity:()=>Xt,Imag:()=>Qt,IsFinite:()=>$t,IsInf:()=>en,IsNan:()=>tn,KernelBackend:()=>l,LRN:()=>`LRN`,LRNGrad:()=>mn,LeakyRelu:()=>nn,Less:()=>rn,LessEqual:()=>an,LinSpace:()=>on,Log:()=>`Log`,Log1p:()=>sn,LogSoftmax:()=>fn,LogicalAnd:()=>cn,LogicalNot:()=>ln,LogicalOr:()=>un,LogicalXor:()=>dn,LowerBound:()=>pn,Max:()=>`Max`,MaxPool:()=>gn,MaxPool3D:()=>vn,MaxPool3DGrad:()=>yn,MaxPoolGrad:()=>_n,MaxPoolWithArgmax:()=>bn,Maximum:()=>hn,Mean:()=>xn,Min:()=>`Min`,Minimum:()=>Sn,MirrorPad:()=>Cn,Mod:()=>`Mod`,MomentumOptimizer:()=>Rw,Multinomial:()=>wn,Multiply:()=>Tn,Neg:()=>`Neg`,NonMaxSuppressionV3:()=>Dn,NonMaxSuppressionV4:()=>On,NonMaxSuppressionV5:()=>kn,NotEqual:()=>En,OP_SCOPE_SUFFIX:()=>Pa,OneHot:()=>jn,OnesLike:()=>An,Optimizer:()=>Ew,OptimizerConstructors:()=>Hw,Pack:()=>Mn,PadV2:()=>Nn,Pool:()=>Pn,Pow:()=>`Pow`,Prelu:()=>Fn,Prod:()=>In,RMSPropOptimizer:()=>Bw,RaggedGather:()=>Ln,RaggedRange:()=>Rn,RaggedTensorToTensor:()=>zn,Range:()=>Bn,Rank:()=>ea,Real:()=>Vn,RealDiv:()=>Ft,Reciprocal:()=>Hn,Reduction:()=>bC,Relu:()=>Un,Relu6:()=>Yn,Reshape:()=>Wn,ResizeBilinear:()=>qn,ResizeBilinearGrad:()=>Jn,ResizeNearestNeighbor:()=>Gn,ResizeNearestNeighborGrad:()=>Kn,Reverse:()=>Xn,RotateWithOffset:()=>Fr,Round:()=>Zn,Rsqrt:()=>Qn,SGDOptimizer:()=>Iw,ScatterNd:()=>$n,SearchSorted:()=>er,Select:()=>tr,Selu:()=>nr,Sigmoid:()=>or,Sign:()=>ar,Sin:()=>`Sin`,Sinh:()=>ir,Slice:()=>rr,Softmax:()=>dr,Softplus:()=>sr,SpaceToBatchND:()=>lr,SparseFillEmptyRows:()=>fr,SparseReshape:()=>pr,SparseSegmentMean:()=>mr,SparseSegmentSum:()=>hr,SparseToDense:()=>gr,SplitV:()=>ur,Sqrt:()=>cr,Square:()=>vr,SquaredDifference:()=>_r,Step:()=>Nr,StridedSlice:()=>yr,StringNGrams:()=>br,StringSplit:()=>xr,StringToHashBucketFast:()=>Sr,Sub:()=>`Sub`,Sum:()=>`Sum`,Tan:()=>`Tan`,Tanh:()=>Cr,Tensor:()=>Xi,TensorBuffer:()=>qi,Tile:()=>wr,TopK:()=>Tr,Transform:()=>Er,Transpose:()=>Dr,Unique:()=>Or,Unpack:()=>kr,UnsortedSegmentSum:()=>Ar,UpperBound:()=>jr,Variable:()=>Zi,ZerosLike:()=>Mr,_FusedMatMul:()=>Ir,abs:()=>mu,acos:()=>_u,acosh:()=>bu,add:()=>H,addN:()=>Cu,all:()=>Eu,any:()=>ku,argMax:()=>Mu,argMin:()=>Fu,asin:()=>Ru,asinh:()=>Vu,atan:()=>Wu,atan2:()=>qu,atanh:()=>Xu,avgPool:()=>yd,avgPool3d:()=>Sd,backend:()=>Sc,backend_util:()=>pE,basicLSTMCell:()=>Ld,batchNorm:()=>Gd,batchNorm2d:()=>Jd,batchNorm3d:()=>Zd,batchNorm4d:()=>ef,batchToSpaceND:()=>Bd,bincount:()=>rf,booleanMaskAsync:()=>Xb,broadcastArgs:()=>sf,broadcastTo:()=>uf,broadcast_util:()=>Hc,browser:()=>Yc,buffer:()=>ss,cast:()=>z,ceil:()=>pf,clipByValue:()=>vf,clone:()=>fs,complex:()=>Ia,concat:()=>Td,concat1d:()=>xf,concat2d:()=>wf,concat3d:()=>Df,concat4d:()=>Af,conv1d:()=>If,conv2d:()=>Nf,conv2dTranspose:()=>Hf,conv3d:()=>Gf,conv3dTranspose:()=>Zf,copyRegisteredKernels:()=>Yr,cos:()=>ep,cosh:()=>rp,cosineWindow:()=>vx,cumprod:()=>op,cumsum:()=>lp,customGrad:()=>Rh,denseBincount:()=>fp,deprecationWarn:()=>sc,depthToSpace:()=>hp,depthwiseConv2d:()=>vp,device_util:()=>xa,diag:()=>xp,dilation2d:()=>wp,disableDeprecationWarnings:()=>oc,dispose:()=>fc,disposeVariables:()=>cc,div:()=>uu,divNoNan:()=>Ip,dot:()=>zp,dropout:()=>hx,einsum:()=>Hp,elu:()=>Gp,enableDebugMode:()=>ac,enableProdMode:()=>ic,enclosingPowerOfTwo:()=>_x,engine:()=>lc,env:()=>O,equal:()=>Dp,erf:()=>Jp,euclideanNorm:()=>km,exp:()=>Mm,expandDims:()=>Fm,expm1:()=>Rm,eye:()=>Wm,fft:()=>Ly,fill:()=>hf,findBackend:()=>yc,findBackendFactory:()=>bc,floor:()=>qm,floorDiv:()=>su,fused:()=>Kx,gather:()=>Xm,gatherND:()=>ux,gather_util:()=>ol,getBackend:()=>_c,getGradient:()=>Ur,getKernel:()=>Hr,getKernelsForBackend:()=>Wr,grad:()=>Nh,grads:()=>Ph,greater:()=>$m,greaterEqual:()=>nh,ifft:()=>By,imag:()=>Ec,image:()=>bw,inTopKAsync:()=>xx,io:()=>Xs,irfft:()=>Uy,isFinite:()=>ah,isInf:()=>ch,isNaN:()=>dh,keep:()=>pc,kernel_impls:()=>_E,leakyRelu:()=>mh,less:()=>_h,lessEqual:()=>bh,linalg:()=>xw,linspace:()=>Sh,localResponseNormalization:()=>Th,log:()=>Oh,log1p:()=>jh,logSigmoid:()=>Gh,logSoftmax:()=>Xh,logSumExp:()=>$h,logicalAnd:()=>ng,logicalNot:()=>ag,logicalOr:()=>cg,logicalXor:()=>dg,losses:()=>Sw,lowerBound:()=>_g,matMul:()=>$s,math:()=>Bc,max:()=>om,maxPool:()=>bg,maxPool3d:()=>Cg,maxPoolWithArgmax:()=>Eg,maximum:()=>kg,mean:()=>Mg,memory:()=>uc,meshgrid:()=>Rg,min:()=>lm,minimum:()=>Vg,mirrorPad:()=>Wg,mod:()=>qg,moments:()=>Xg,movingAverage:()=>$b,mul:()=>U,multiRNNCell:()=>$g,multinomial:()=>n_,neg:()=>kc,nextFrame:()=>Kw,norm:()=>Em,notEqual:()=>a_,oneHot:()=>nc,ones:()=>Ig,onesLike:()=>c_,op:()=>L,outerProduct:()=>d_,pad:()=>m_,pad1d:()=>__,pad2d:()=>b_,pad3d:()=>C_,pad4d:()=>E_,pool:()=>P_,pow:()=>fm,prelu:()=>L_,print:()=>ms,prod:()=>B_,profile:()=>dc,raggedGather:()=>U_,raggedRange:()=>K_,raggedTensorToTensor:()=>Y_,rand:()=>Q_,randomGamma:()=>mv,randomNormal:()=>_v,randomStandardNormal:()=>bv,randomUniform:()=>Cv,range:()=>Tv,ready:()=>gc,real:()=>Mc,reciprocal:()=>Ov,registerBackend:()=>xc,registerGradient:()=>Kr,registerKernel:()=>Gr,relu:()=>jv,relu6:()=>Pv,removeBackend:()=>vc,reshape:()=>G,reverse:()=>Lv,reverse1d:()=>Bv,reverse2d:()=>Uv,reverse3d:()=>Kv,reverse4d:()=>Yv,rfft:()=>Yy,round:()=>Qv,rsqrt:()=>ty,scalar:()=>mm,scatterND:()=>nx,scatter_util:()=>ll,searchSorted:()=>hg,selu:()=>iy,separableConv2d:()=>sy,serialization:()=>Il,setBackend:()=>hc,setPlatform:()=>Cc,setdiff1dAsync:()=>uy,sigmoid:()=>Od,sign:()=>py,signal:()=>yw,sin:()=>gy,sinh:()=>yy,slice:()=>jd,slice1d:()=>Sy,slice2d:()=>Ty,slice3d:()=>Oy,slice4d:()=>jy,slice_util:()=>ml,softmax:()=>Py,softplus:()=>Hh,spaceToBatchND:()=>k_,sparse:()=>Cw,sparseToDense:()=>sx,spectral:()=>vw,split:()=>Ky,sqrt:()=>_m,square:()=>bm,squaredDifference:()=>Qy,squeeze:()=>tb,stack:()=>ib,step:()=>sb,stridedSlice:()=>ub,string:()=>ww,sub:()=>J,sum:()=>q,sumOutType:()=>$i,tan:()=>pb,tanh:()=>Pd,tensor:()=>Ba,tensor1d:()=>hb,tensor2d:()=>_b,tensor3d:()=>qc,tensor4d:()=>yb,tensor5d:()=>xb,tensor6d:()=>Cb,tensor_util:()=>sa,test_util:()=>Bl,tidy:()=>B,tile:()=>Vm,time:()=>mc,topk:()=>Eb,train:()=>Ww,transpose:()=>Fc,truncatedNormal:()=>kb,unique:()=>Mb,unregisterGradient:()=>Jr,unregisterKernel:()=>qr,unsortedSegmentSum:()=>Fb,unstack:()=>Rb,upcastType:()=>Qi,upperBound:()=>Bb,util:()=>bi,valueAndGrad:()=>Fh,valueAndGrads:()=>Ih,variable:()=>Hb,variableGrads:()=>Lh,version_core:()=>nu,where:()=>Ap,whereAsync:()=>qb,zeros:()=>Pg,zerosLike:()=>Np}),Y=n((()=>{gs(),yE()})),xE=n((()=>{Tw(),M(),j().prototype.abs=function(){return this.throwIfDisposed(),mu(this)}})),SE=n((()=>{Tw(),M(),j().prototype.acos=function(){return this.throwIfDisposed(),_u(this)}})),CE=n((()=>{Tw(),M(),j().prototype.acosh=function(){return this.throwIfDisposed(),bu(this)}})),wE=n((()=>{au(),M(),j().prototype.add=function(e){return this.throwIfDisposed(),H(this,e)}})),TE=n((()=>{Du(),M(),j().prototype.all=function(e,t){return this.throwIfDisposed(),Eu(this,e,t)}})),EE=n((()=>{Au(),M(),j().prototype.any=function(e,t){return this.throwIfDisposed(),ku(this,e,t)}})),DE=n((()=>{Nu(),M(),j().prototype.argMax=function(e){return this.throwIfDisposed(),Mu(this,e)}})),OE=n((()=>{Iu(),M(),j().prototype.argMin=function(e){return this.throwIfDisposed(),Fu(this,e)}})),kE=n((()=>{K(),M(),A(),j().prototype.asScalar=function(){return this.throwIfDisposed(),y(this.size===1,()=>`The array must have only 1 element.`),G(this,[])}})),AE=n((()=>{Tw(),M(),j().prototype.asType=function(e){return this.throwIfDisposed(),z(this,e)}})),jE=n((()=>{K(),M(),j().prototype.as1D=function(){return this.throwIfDisposed(),G(this,[this.size])}})),ME=n((()=>{K(),M(),j().prototype.as2D=function(e,t){return this.throwIfDisposed(),G(this,[e,t])}})),NE=n((()=>{K(),M(),j().prototype.as3D=function(e,t,n){return this.throwIfDisposed(),G(this,[e,t,n])}})),PE=n((()=>{K(),M(),j().prototype.as4D=function(e,t,n,r){return this.throwIfDisposed(),G(this,[e,t,n,r])}})),FE=n((()=>{K(),M(),j().prototype.as5D=function(e,t,n,r,i){return this.throwIfDisposed(),G(this,[e,t,n,r,i])}})),IE=n((()=>{Tw(),M(),j().prototype.asin=function(){return this.throwIfDisposed(),Ru(this)}})),LE=n((()=>{Tw(),M(),j().prototype.asinh=function(){return this.throwIfDisposed(),Vu(this)}})),RE=n((()=>{Tw(),M(),j().prototype.atan=function(){return this.throwIfDisposed(),Wu(this)}})),zE=n((()=>{Ju(),M(),j().prototype.atan2=function(e){return this.throwIfDisposed(),qu(this,e)}})),BE=n((()=>{Tw(),M(),j().prototype.atanh=function(){return this.throwIfDisposed(),Xu(this)}})),VE=n((()=>{bd(),M(),j().prototype.avgPool=function(e,t,n,r){return this.throwIfDisposed(),yd(this,e,t,n,r)}})),HE=n((()=>{Vd(),M(),j().prototype.batchToSpaceND=function(e,t){return this.throwIfDisposed(),Bd(this,e,t)}})),UE=n((()=>{Kd(),M(),j().prototype.batchNorm=function(e,t,n,r,i){return this.throwIfDisposed(),Gd(this,e,t,n,r,i)}})),WE=n((()=>{df(),M(),j().prototype.broadcastTo=function(e){return this.throwIfDisposed(),uf(this,e)}})),GE=n((()=>{Tw(),M(),j().prototype.cast=function(e){return this.throwIfDisposed(),z(this,e)}})),KE=n((()=>{Tw(),M(),j().prototype.ceil=function(){return this.throwIfDisposed(),pf(this)}})),qE=n((()=>{Tw(),M(),j().prototype.clipByValue=function(e,t){return this.throwIfDisposed(),vf(this,e,t)}})),JE=n((()=>{Ed(),M(),j().prototype.concat=function(e,t){return this.throwIfDisposed(),e instanceof Xi&&(e=[e]),Td([this,...e],t)}})),YE=n((()=>{Lf(),M(),j().prototype.conv1d=function(e,t,n,r,i,a){return this.throwIfDisposed(),If(this,e,t,n,r,i,a)}})),XE=n((()=>{Uf(),M(),j().prototype.conv2dTranspose=function(e,t,n,r,i){return this.throwIfDisposed(),Hf(this,e,t,n,r,i)}})),ZE=n((()=>{Pf(),M(),j().prototype.conv2d=function(e,t,n,r,i,a){return this.throwIfDisposed(),Nf(this,e,t,n,r,i,a)}})),QE=n((()=>{Tw(),M(),j().prototype.cos=function(){return this.throwIfDisposed(),ep(this)}})),$E=n((()=>{Tw(),M(),j().prototype.cosh=function(){return this.throwIfDisposed(),rp(this)}})),eD=n((()=>{sp(),M(),j().prototype.cumprod=function(e,t,n){return this.throwIfDisposed(),op(this,e,t,n)}})),tD=n((()=>{up(),M(),j().prototype.cumsum=function(e,t,n){return this.throwIfDisposed(),lp(this,e,t,n)}})),nD=n((()=>{gp(),M(),j().prototype.depthToSpace=function(e,t){return this.throwIfDisposed(),hp(this,e,t)}})),rD=n((()=>{yp(),M(),j().prototype.depthwiseConv2d=function(e,t,n,r,i,a){return this.throwIfDisposed(),vp(this,e,t,n,r,i,a)}})),iD=n((()=>{Tp(),M(),j().prototype.dilation2d=function(e,t,n,r,i){return this.throwIfDisposed(),wp(this,e,t,n,r,i)}})),aD=n((()=>{Lp(),M(),j().prototype.divNoNan=function(e){return this.throwIfDisposed(),Ip(this,e)}})),oD=n((()=>{du(),M(),j().prototype.div=function(e){return this.throwIfDisposed(),uu(this,e)}})),sD=n((()=>{Bp(),M(),j().prototype.dot=function(e){return this.throwIfDisposed(),zp(this,e)}})),cD=n((()=>{Kp(),M(),j().prototype.elu=function(){return this.throwIfDisposed(),Gp(this)}})),lD=n((()=>{Op(),M(),j().prototype.equal=function(e){return this.throwIfDisposed(),Dp(this,e)}})),uD=n((()=>{Tw(),M(),j().prototype.erf=function(){return this.throwIfDisposed(),Jp(this)}})),dD=n((()=>{Am(),M(),j().prototype.euclideanNorm=function(e,t){return this.throwIfDisposed(),km(this,e,t)}})),fD=n((()=>{Tw(),M(),j().prototype.exp=function(){return this.throwIfDisposed(),Mm(this)}})),pD=n((()=>{Im(),M(),j().prototype.expandDims=function(e){return this.throwIfDisposed(),Fm(this,e)}})),mD=n((()=>{Tw(),M(),j().prototype.expm1=function(){return this.throwIfDisposed(),Rm(this)}})),hD=n((()=>{Tw(),M(),j().prototype.fft=function(){return this.throwIfDisposed(),Ly(this)}})),gD=n((()=>{K(),M(),j().prototype.flatten=function(){return this.throwIfDisposed(),G(this,[this.size])}})),_D=n((()=>{Tw(),M(),j().prototype.floor=function(){return this.throwIfDisposed(),qm(this)}})),vD=n((()=>{cu(),M(),j().prototype.floorDiv=function(e){return this.throwIfDisposed(),su(this,e)}})),yD=n((()=>{Zm(),M(),j().prototype.gather=function(e,t){return this.throwIfDisposed(),Xm(this,e,t)}})),bD=n((()=>{rh(),M(),j().prototype.greaterEqual=function(e){return this.throwIfDisposed(),nh(this,e)}})),xD=n((()=>{eh(),M(),j().prototype.greater=function(e){return this.throwIfDisposed(),$m(this,e)}})),SD=n((()=>{Tw(),M(),j().prototype.ifft=function(){return this.throwIfDisposed(),By(this)}})),CD=n((()=>{Tw(),M(),j().prototype.irfft=function(){return this.throwIfDisposed(),Uy(this)}})),wD=n((()=>{Tw(),M(),j().prototype.isFinite=function(){return this.throwIfDisposed(),ah(this)}})),TD=n((()=>{Tw(),M(),j().prototype.isInf=function(){return this.throwIfDisposed(),ch(this)}})),ED=n((()=>{Tw(),M(),j().prototype.isNaN=function(){return this.throwIfDisposed(),dh(this)}})),DD=n((()=>{hh(),M(),j().prototype.leakyRelu=function(e){return this.throwIfDisposed(),mh(this,e)}})),OD=n((()=>{xh(),M(),j().prototype.lessEqual=function(e){return this.throwIfDisposed(),bh(this,e)}})),kD=n((()=>{vh(),M(),j().prototype.less=function(e){return this.throwIfDisposed(),_h(this,e)}})),AD=n((()=>{Eh(),M(),j().prototype.localResponseNormalization=function(e,t,n,r){return this.throwIfDisposed(),Th(this,e,t,n,r)}})),jD=n((()=>{Tw(),M(),j().prototype.logSigmoid=function(){return this.throwIfDisposed(),Gh(this)}})),MD=n((()=>{Tw(),M(),j().prototype.logSoftmax=function(e){return this.throwIfDisposed(),Xh(this,e)}})),ND=n((()=>{eg(),M(),j().prototype.logSumExp=function(e,t){return this.throwIfDisposed(),$h(this,e,t)}})),PD=n((()=>{Tw(),M(),j().prototype.log=function(){return this.throwIfDisposed(),Oh(this)}})),FD=n((()=>{Tw(),M(),j().prototype.log1p=function(){return this.throwIfDisposed(),jh(this)}})),ID=n((()=>{rg(),M(),j().prototype.logicalAnd=function(e){return this.throwIfDisposed(),ng(this,e)}})),LD=n((()=>{og(),M(),j().prototype.logicalNot=function(){return this.throwIfDisposed(),ag(this)}})),RD=n((()=>{lg(),M(),j().prototype.logicalOr=function(e){return this.throwIfDisposed(),cg(this,e)}})),zD=n((()=>{fg(),M(),j().prototype.logicalXor=function(e){return this.throwIfDisposed(),dg(this,e)}})),BD=n((()=>{ec(),M(),j().prototype.matMul=function(e,t,n){return this.throwIfDisposed(),$s(this,e,t,n)}})),VD=n((()=>{xg(),M(),j().prototype.maxPool=function(e,t,n,r){return this.throwIfDisposed(),bg(this,e,t,n,r)}})),HD=n((()=>{sm(),M(),j().prototype.max=function(e,t){return this.throwIfDisposed(),om(this,e,t)}})),UD=n((()=>{Ag(),M(),j().prototype.maximum=function(e){return this.throwIfDisposed(),kg(this,e)}})),WD=n((()=>{Ng(),M(),j().prototype.mean=function(e,t){return this.throwIfDisposed(),Mg(this,e,t)}})),GD=n((()=>{um(),M(),j().prototype.min=function(e,t){return this.throwIfDisposed(),lm(this,e,t)}})),KD=n((()=>{Hg(),M(),j().prototype.minimum=function(e){return this.throwIfDisposed(),Vg(this,e)}})),qD=n((()=>{Gg(),M(),j().prototype.mirrorPad=function(e,t){return this.throwIfDisposed(),Wg(this,e,t)}})),JD=n((()=>{Jg(),M(),j().prototype.mod=function(e){return this.throwIfDisposed(),qg(this,e)}})),YD=n((()=>{W(),M(),j().prototype.mul=function(e){return this.throwIfDisposed(),U(this,e)}})),XD=n((()=>{Tw(),M(),j().prototype.neg=function(){return this.throwIfDisposed(),kc(this)}})),ZD=n((()=>{Tw(),M(),j().prototype.norm=function(e,t,n){return this.throwIfDisposed(),Em(this,e,t,n)}})),QD=n((()=>{o_(),M(),j().prototype.notEqual=function(e){return this.throwIfDisposed(),a_(this,e)}})),$D=n((()=>{rc(),M(),j().prototype.oneHot=function(e,t=1,n=0){return this.throwIfDisposed(),nc(this,e,t,n)}})),eO=n((()=>{Tw(),M(),j().prototype.onesLike=function(){return this.throwIfDisposed(),c_(this)}})),tO=n((()=>{h_(),M(),j().prototype.pad=function(e,t){return this.throwIfDisposed(),m_(this,e,t)}})),nO=n((()=>{F_(),M(),j().prototype.pool=function(e,t,n,r,i,a){return this.throwIfDisposed(),P_(this,e,t,n,r,i,a)}})),rO=n((()=>{pm(),M(),j().prototype.pow=function(e){return this.throwIfDisposed(),fm(this,e)}})),iO=n((()=>{R_(),M(),j().prototype.prelu=function(e){return this.throwIfDisposed(),L_(this,e)}})),aO=n((()=>{V_(),M(),j().prototype.prod=function(e,t){return this.throwIfDisposed(),B_(this,e,t)}})),oO=n((()=>{Tw(),M(),j().prototype.reciprocal=function(){return this.throwIfDisposed(),Ov(this)}})),sO=n((()=>{Mv(),M(),j().prototype.relu=function(){return this.throwIfDisposed(),jv(this)}})),cO=n((()=>{Fv(),M(),j().prototype.relu6=function(){return this.throwIfDisposed(),Pv(this)}})),lO=n((()=>{K(),M(),j().prototype.reshapeAs=function(e){return this.throwIfDisposed(),G(this,e.shape)}})),uO=n((()=>{K(),M(),j().prototype.reshape=function(e){return this.throwIfDisposed(),G(this,e)}})),dO=n((()=>{$S(),M(),j().prototype.resizeBilinear=function(e,t,n){return this.throwIfDisposed(),QS(this,e,t,n)}})),fO=n((()=>{nC(),M(),j().prototype.resizeNearestNeighbor=function(e,t,n){return this.throwIfDisposed(),tC(this,e,t,n)}})),pO=n((()=>{Rv(),M(),j().prototype.reverse=function(e){return this.throwIfDisposed(),Lv(this,e)}})),mO=n((()=>{Tw(),M(),j().prototype.rfft=function(){return this.throwIfDisposed(),Yy(this)}})),hO=n((()=>{Tw(),M(),j().prototype.round=function(){return this.throwIfDisposed(),Qv(this)}})),gO=n((()=>{Tw(),M(),j().prototype.rsqrt=function(){return this.throwIfDisposed(),ty(this)}})),_O=n((()=>{ay(),M(),j().prototype.selu=function(){return this.throwIfDisposed(),iy(this)}})),vO=n((()=>{cy(),M(),j().prototype.separableConv2d=function(e,t,n,r,i,a){return this.throwIfDisposed(),sy(this,e,t,n,r,i,a)}})),yO=n((()=>{Tw(),M(),j().prototype.sigmoid=function(){return this.throwIfDisposed(),Od(this)}})),bO=n((()=>{Tw(),M(),j().prototype.sign=function(){return this.throwIfDisposed(),py(this)}})),xO=n((()=>{Tw(),M(),j().prototype.sin=function(){return this.throwIfDisposed(),gy(this)}})),SO=n((()=>{Tw(),M(),j().prototype.sinh=function(){return this.throwIfDisposed(),yy(this)}})),CO=n((()=>{Tw(),M(),j().prototype.slice=function(e,t){return this.throwIfDisposed(),jd(this,e,t)}})),wO=n((()=>{Tw(),M(),j().prototype.softmax=function(e){return this.throwIfDisposed(),Py(this,e)}})),TO=n((()=>{Tw(),M(),j().prototype.softplus=function(){return this.throwIfDisposed(),Hh(this)}})),EO=n((()=>{A_(),M(),j().prototype.spaceToBatchND=function(e,t){return this.throwIfDisposed(),k_(this,e,t)}})),DO=n((()=>{qy(),M(),j().prototype.split=function(e,t){return this.throwIfDisposed(),Ky(this,e,t)}})),OO=n((()=>{Tw(),M(),j().prototype.sqrt=function(){return this.throwIfDisposed(),_m(this)}})),kO=n((()=>{Tw(),M(),j().prototype.square=function(){return this.throwIfDisposed(),bm(this)}})),AO=n((()=>{$y(),M(),j().prototype.squaredDifference=function(e){return this.throwIfDisposed(),Qy(this,e)}})),jO=n((()=>{nb(),M(),j().prototype.squeeze=function(e){return this.throwIfDisposed(),tb(this,e)}})),MO=n((()=>{ab(),M(),j().prototype.stack=function(e,t){this.throwIfDisposed();let n=e instanceof Xi?[this,e]:[this,...e];return ib(n,t)}})),NO=n((()=>{Tw(),M(),j().prototype.step=function(e){return this.throwIfDisposed(),sb(this,e)}})),PO=n((()=>{Tw(),M(),j().prototype.stridedSlice=function(e,t,n,r,i,a,o,s){return this.throwIfDisposed(),ub(this,e,t,n,r,i,a,o,s)}})),FO=n((()=>{Jh(),M(),j().prototype.sub=function(e){return this.throwIfDisposed(),J(this,e)}})),IO=n((()=>{Cm(),M(),j().prototype.sum=function(e,t){return this.throwIfDisposed(),q(this,e,t)}})),LO=n((()=>{Tw(),M(),j().prototype.tan=function(){return this.throwIfDisposed(),pb(this)}})),RO=n((()=>{Tw(),M(),j().prototype.tanh=function(){return this.throwIfDisposed(),Pd(this)}})),zO=n((()=>{Hm(),M(),j().prototype.tile=function(e){return this.throwIfDisposed(),Vm(this,e)}})),BO=n((()=>{Tw(),M(),j().prototype.toBool=function(){return this.throwIfDisposed(),z(this,`bool`)}})),VO=n((()=>{Tw(),M(),j().prototype.toFloat=function(){return this.throwIfDisposed(),z(this,`float32`)}})),HO=n((()=>{Tw(),M(),j().prototype.toInt=function(){return this.throwIfDisposed(),z(this,`int32`)}})),UO=n((()=>{Db(),M(),j().prototype.topk=function(e,t){return this.throwIfDisposed(),Eb(this,e,t)}})),WO=n((()=>{Ic(),M(),j().prototype.transpose=function(e){return this.throwIfDisposed(),Fc(this,e)}})),GO=n((()=>{Nb(),M(),j().prototype.unique=function(e){return this.throwIfDisposed(),Mb(this,e)}})),KO=n((()=>{Ib(),M(),j().prototype.unsortedSegmentSum=function(e,t){return this.throwIfDisposed(),Fb(this,e,t)}})),qO=n((()=>{zb(),M(),j().prototype.unstack=function(e){return this.throwIfDisposed(),Rb(this,e)}})),JO=n((()=>{jp(),M(),j().prototype.where=function(e,t){return this.throwIfDisposed(),Ap(e,this,t)}})),YO=n((()=>{Tw(),M(),j().prototype.zerosLike=function(){return this.throwIfDisposed(),Np(this)}})),XO=r({}),ZO=n((()=>{xE(),SE(),CE(),wE(),TE(),EE(),DE(),OE(),kE(),AE(),jE(),ME(),NE(),PE(),FE(),IE(),LE(),RE(),zE(),BE(),VE(),HE(),UE(),WE(),GE(),KE(),qE(),JE(),YE(),XE(),ZE(),QE(),$E(),eD(),tD(),nD(),rD(),iD(),aD(),oD(),sD(),cD(),lD(),uD(),dD(),fD(),pD(),mD(),hD(),gD(),_D(),vD(),yD(),bD(),xD(),SD(),CD(),wD(),TD(),ED(),DD(),OD(),kD(),AD(),jD(),MD(),ND(),PD(),FD(),ID(),LD(),RD(),zD(),BD(),VD(),HD(),UD(),WD(),GD(),KD(),qD(),JD(),YD(),XD(),ZD(),QD(),$D(),eO(),tO(),nO(),rO(),iO(),aO(),oO(),sO(),cO(),lO(),uO(),dO(),fO(),pO(),mO(),hO(),gO(),_O(),vO(),yO(),bO(),xO(),SO(),CO(),wO(),TO(),EO(),DO(),OO(),kO(),AO(),jO(),MO(),NO(),PO(),FO(),IO(),LO(),RO(),zO(),BO(),VO(),HO(),UO(),WO(),GO(),KO(),qO(),JO(),YO()}));Y(),k(),us(),W(),cb();var QO={kernelName:`Abs`,inputsToSave:[`x`],gradFunc:(e,t)=>{let[n]=t;return{x:()=>U(e,sb(z(n,`float32`),-1))}}};k(),us(),du(),Ac(),hm(),vm(),xm(),Jh();var $O={kernelName:Ge,inputsToSave:[`x`],gradFunc:(e,t)=>{let[n]=t;return{x:()=>{let t=bm(z(n,`float32`)),r=_m(J(mm(1),t));return kc(uu(e,r))}}}};k(),us(),du(),vm(),xm(),Jh();var ek={kernelName:Ke,inputsToSave:[`x`],gradFunc:(e,t)=>{let[n]=t;return{x:()=>{let t=_m(J(bm(z(n,`float32`)),1));return uu(e,t)}}}};k(),Kc(),K(),Cm();var tk={kernelName:`Add`,inputsToSave:[`a`,`b`],gradFunc:(e,t)=>{let[n,r]=t,i=Gc(n.shape,r.shape);return{a:()=>{let t=e,r=Wc(n.shape,i);return r.length>0&&(t=q(t,r)),G(t,n.shape)},b:()=>{let t=e,n=Wc(r.shape,i);return n.length>0&&(t=q(t,n)),G(t,r.shape)}}}};k();var nk={kernelName:qe,saveAllInputs:!0,gradFunc:(e,t)=>{let n={};return t.forEach((t,r)=>{n[r]=()=>e.clone()}),n}};k(),Pp();var rk={kernelName:Je,inputsToSave:[`x`],gradFunc:(e,t)=>{let[n]=t;return{x:()=>Np(n)}}};k(),Pp();var ik={kernelName:Ye,inputsToSave:[`x`],gradFunc:(e,t)=>{let[n]=t;return{x:()=>Np(n)}}};k(),us(),du(),hm(),vm(),xm(),Jh();var ak={kernelName:Xe,inputsToSave:[`x`],gradFunc:(e,t)=>{let[n]=t;return{x:()=>uu(e,_m(J(mm(1),bm(z(n,`float32`)))))}}};k(),au(),us(),du(),hm(),vm(),xm();var ok={kernelName:Ze,inputsToSave:[`x`],gradFunc:(e,t)=>{let[n]=t;return{x:()=>{let t=_m(H(mm(1),bm(z(n,`float32`))));return uu(e,t)}}}};k(),au(),Kc(),du(),W(),Ac(),K(),xm(),Cm();var sk={kernelName:et,inputsToSave:[`a`,`b`],gradFunc:(e,t)=>{let[n,r]=t,i=Gc(n.shape,r.shape);return{a:()=>{let t=H(bm(n),bm(r)),a=U(e,uu(r,t)),o=Wc(n.shape,i);return o.length>0&&(a=q(a,o)),G(a,n.shape)},b:()=>{let t=H(bm(n),bm(r)),a=kc(U(e,uu(n,t))),o=Wc(r.shape,i);return o.length>0&&(a=q(a,o)),G(a,r.shape)}}}};k(),au(),us(),du(),xm();var ck={kernelName:Qe,inputsToSave:[`x`],gradFunc:(e,t)=>{let[n]=t;return{x:()=>uu(e,H(bm(z(n,`float32`)),1))}}};k(),us(),du(),xm(),Jh(),hm();var lk={kernelName:$e,inputsToSave:[`x`],gradFunc:(e,t)=>{let[n]=t;return{x:()=>uu(e,J(mm(1),bm(z(n,`float32`))))}}};P(),k(),I(),A(),gd(),R(),K();function uk(e,t,n,r,i,a){let o=F(e,`dy`,`avgPool3dGrad`),s=F(t,`input`,`avgPool3dGrad`),c=o,l=s,u=!1;s.rank===4&&(u=!0,c=G(o,[1,o.shape[0],o.shape[1],o.shape[2],o.shape[3]]),l=G(s,[1,s.shape[0],s.shape[1],s.shape[2],s.shape[3]])),y(c.rank===5,()=>`Error in avgPool3dGrad: dy must be rank 5 but got rank ${c.rank}.`),y(l.rank===5,()=>`Error in avgPool3dGrad: input must be rank 5 but got rank ${l.rank}.`),hd(`avgPool3dGrad`,i,a);let d={dy:c,input:l},f={filterSize:n,strides:r,pad:i,dimRoundingMode:a},p=N.runKernel(it,d,f);return u?G(p,[p.shape[1],p.shape[2],p.shape[3],p.shape[4]]):p}var dk=L({avgPool3dGrad_:uk});k();var fk={kernelName:rt,inputsToSave:[`x`],gradFunc:(e,t,n)=>{let[r]=t,{filterSize:i,strides:a,pad:o,dimRoundingMode:s}=n;return{x:()=>dk(e,r,i,a,o,s)}}};P(),k(),I(),A(),R(),K();function pk(e,t,n,r,i){let a=F(e,`dy`,`avgPoolGrad`),o=F(t,`input`,`avgPoolGrad`);y(o.rank===a.rank,()=>`Rank of input (${o.rank}) does not match rank of dy (${a.rank})`);let s=o,c=a,l=!1;o.rank===3&&(l=!0,s=G(o,[1,o.shape[0],o.shape[1],o.shape[2]]),c=G(a,[1,a.shape[0],a.shape[1],a.shape[2]])),y(c.rank===4,()=>`Error in avgPoolGrad: dy must be rank 4 but got rank ${c.rank}.`),y(s.rank===4,()=>`Error in avgPoolGrad: input must be rank 4 but got rank ${s.rank}.`);let u={dy:c,input:s},d={filterSize:n,strides:r,pad:i},f=N.runKernel(nt,u,d);return l?G(f,[f.shape[1],f.shape[2],f.shape[3]]):f}var mk=L({avgPoolGrad_:pk});k();var hk={kernelName:tt,inputsToSave:[`x`],gradFunc:(e,t,n)=>{let[r]=t,{filterSize:i,strides:a,pad:o}=n;return{x:()=>mk(e,r,i,a,o)}}};k(),ec();var gk={kernelName:at,inputsToSave:[`a`,`b`],gradFunc:(e,t,n)=>{let[r,i]=t,{transposeA:a,transposeB:o}=n;return!a&&!o?{a:()=>$s(e,i,!1,!0),b:()=>$s(r,e,!0,!1)}:!a&&o?{a:()=>$s(e,i,!1,!1),b:()=>$s(e,r,!0,!1)}:a&&!o?{a:()=>$s(i,e,!1,!0),b:()=>$s(r,e,!1,!1)}:{a:()=>$s(i,e,!0,!0),b:()=>$s(e,r,!0,!0)}}};k(),A_();var _k={kernelName:ot,gradFunc:(e,t,n)=>{let{blockShape:r,crops:i}=n;return{x:()=>k_(e,r,i)}}};k(),Cm();var vk={kernelName:ct,gradFunc:(e,t,n)=>{let r=n,i=r.inputShape,a=r.shape,o=Array.from(a);for(let e=i.length-1;e>=0;e--)if(i[e]===a[e])o[e]=1;else if(i[e]!==1)throw Error(`broadcastTo(): [${i}] cannot be broadcast to [${a}].`);let s=[];for(let e=0;e<o.length;e++)o[e]>1&&s.push(e);return{x:()=>q(e,s,!0)}}};k();var yk={kernelName:ut,gradFunc:e=>({x:()=>e.clone()})};k(),Pp();var bk={kernelName:dt,gradFunc:e=>({x:()=>Np(e)})};k(),rh(),xh(),rg(),jp(),Pp();var xk={kernelName:ft,inputsToSave:[`x`],gradFunc:(e,t,n)=>{let[r]=t,{clipValueMin:i,clipValueMax:a}=n;return{x:()=>Ap(ng(nh(r,i),bh(r,a)),e,Np(e))}}};k();var Sk={kernelName:mt,inputsToSave:[`x`],gradFunc:QO.gradFunc};k(),qy(),A();var Ck={kernelName:ht,saveAllInputs:!0,gradFunc:(e,t,n)=>{let r=t.map(e=>e.shape),{axis:i}=n,a=ae(i,t[0].shape)[0],o=r.map(e=>e[a]);return Ky(e,o,a).map(e=>()=>e)}};k(),Tx(),Bf(),gd(),A();var wk={kernelName:gt,inputsToSave:[`x`,`filter`],gradFunc:(e,t,n)=>{let[r,i]=t,{dilations:a,strides:o,pad:s,dataFormat:c}=n;return y(fd(a),()=>`Error in gradient of conv2D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '${a}'`),{x:()=>zf(r.shape,e,i,o,s,c),filter:()=>wx(r,e,i.shape,o,s,c)}}};k(),Pf(),Tx();var Tk={kernelName:vt,inputsToSave:[`dy`,`filter`],gradFunc:(e,t,n)=>{let[r,i]=t,{strides:a,pad:o,dataFormat:s,dimRoundingMode:c}=n;return{dy:()=>Nf(e,i,a,o,s,1,c),filter:()=>wx(e,r,i.shape,a,o,s,c)}}};P(),k(),A(),R(),K();function Ek(e,t,n,r,i){let a=e;e.rank===4&&(a=G(e,[1,e.shape[0],e.shape[1],e.shape[2],e.shape[3]]));let o=t;o.rank===4&&(o=G(t,[1,t.shape[0],t.shape[1],t.shape[2],t.shape[3]])),y(a.rank===5,()=>`Error in conv3dDerFilter: input must be rank 5, but got shape ${a.shape}.`),y(o.rank===5,()=>`Error in conv3dDerFilter: dy must be rank 5, but got shape ${o.shape}.`),y(n.length===5,()=>`Error in conv3dDerFilter: filterShape must be length 5, but got ${n}.`),y(a.shape[4]===n[3],()=>`Error in conv3dDerFilter: depth of input ${a.shape[4]}) must match input depth in filter (${n[3]}.`),y(o.shape[4]===n[4],()=>`Error in conv3dDerFilter: depth of dy (${o.shape[4]}) must match output depth for filter (${n[4]}).`);let s={x:a,dy:o},c={strides:r,pad:i,filterShape:n};return N.runKernel(bt,s,c)}var Dk=L({conv3DBackpropFilter_:Ek});k(),Yf(),gd(),A();var Ok={kernelName:yt,inputsToSave:[`x`,`filter`],gradFunc:(e,t,n)=>{let{dilations:r,strides:i,pad:a}=n;y(fd(r),()=>`Error in gradient of conv3D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '${r}'`);let[o,s]=t;return{x:()=>Jf(o.shape,e,s,i,a),filter:()=>Dk(o,e,s.shape,i,a)}}};k(),us(),W(),Ac(),_y();var kk={kernelName:`Cos`,inputsToSave:[`x`],gradFunc:(e,t)=>{let[n]=t;return{x:()=>U(kc(gy(z(n,`float32`))),e)}}};k(),us(),W(),by();var Ak={kernelName:St,inputsToSave:[`x`],gradFunc:(e,t)=>{let[n]=t;return{x:()=>U(yy(z(n,`float32`)),e)}}};k(),im(),up(),Ic();var jk={kernelName:wt,inputsToSave:[`x`],gradFunc:(e,t,n)=>{let[r]=t,{axis:i,exclusive:a,reverse:o}=n;return{x:()=>{let t=tm([i],r.rank),n=lp(e,i,a,!o);return t!=null&&(n=Fc(n,t)),n}}}};k(),gd(),Ix(),zx(),A();var Mk={kernelName:Ot,inputsToSave:[`x`,`filter`],gradFunc:(e,t,n)=>{let{dilations:r,strides:i,pad:a,dimRoundingMode:o}=n,s=r??[1,1];y(fd(s),()=>`Error in gradient of depthwiseConv2dNative: dilation rates greater than 1 are not yet supported. Got dilations '${s}'`);let[c,l]=t;return y(c.rank===4,()=>`Error in gradient of depthwiseConv2dNative: input must be rank 4, but got rank ${c.rank}.`),y(l.rank===4,()=>`Error in gradient of depthwiseConv2dNative: filter must be rank 4, but got rank ${l.rank}.`),y(c.shape[3]===l.shape[2],()=>`Error in gradient of depthwiseConv2d: number of input channels (${c.shape[3]}) must match the inChannels dimension in filter ${l.shape[2]}.`),y(pd(i,s),()=>`Error in gradient of depthwiseConv2d: Either strides or dilations must be  1. Got strides ${i} and dilations '${s}'.`),hd(`depthwiseConv2d`,a,o),{x:()=>Rx(c.shape,e,l,i,a,s,o),filter:()=>Fx(c,e,l.shape,i,a,s,o)}}};P(),k();var Nk={kernelName:Mt,inputsToSave:[`x`,`filter`],gradFunc:(e,t,n)=>{let[r,i]=t,a={x:r,filter:i,dy:e},o={x:r,filter:i,dy:e};return{x:()=>N.runKernel(Nt,a,n),filter:()=>N.runKernel(Pt,o,n)}}};P(),k();var Pk={kernelName:`Elu`,outputsToSave:[!0],gradFunc:(e,t)=>{let[n]=t,r={dy:e,y:n};return{x:()=>N.runKernel(Lt,r)}}};k(),Nm(),W(),Ac(),xm();var Fk={kernelName:`Erf`,inputsToSave:[`x`],gradFunc:(e,t)=>{let[n]=t,r=U(Mm(kc(bm(n))),2/Math.sqrt(Math.PI));return{x:()=>U(e,r)}}};k(),W();var Ik={kernelName:`Exp`,outputsToSave:[!0],gradFunc:(e,t)=>{let[n]=t;return{x:()=>U(e,n)}}};k(),K();var Lk={kernelName:zt,inputsToSave:[`input`],gradFunc:(e,t)=>{let[n]=t;return{input:()=>G(e,n.shape)}}};k(),Nm(),W();var Rk={kernelName:Bt,inputsToSave:[`x`],gradFunc:(e,t)=>{let[n]=t;return{x:()=>U(e,Mm(n))}}};k(),Pp();var zk={kernelName:Ut,gradFunc:e=>({x:()=>Np(e)})};k(),Kc(),us(),du(),W(),Ac(),K(),xm(),Cm();var Bk={kernelName:Wt,inputsToSave:[`a`,`b`],gradFunc:(e,t)=>{let[n,r]=t,i=Gc(n.shape,r.shape);return{a:()=>{let t=uu(e,z(r,`float32`)),a=Wc(n.shape,i);return a.length>0?G(q(t,a),n.shape):t},b:()=>{let t=U(e,z(n,`float32`)),a=Wc(r.shape,i);a.length>0&&(t=G(q(t,a),r.shape));let o=bm(r);return kc(uu(t,z(o,`float32`)))}}}};k(),au(),Kc(),W(),K(),ny(),hm(),Jh(),Cm(),Hm();var Vk={kernelName:Gt,inputsToSave:[`x`,`mean`,`variance`,`scale`],gradFunc:(e,t,n)=>{let{varianceEpsilon:r}=n,[i,a,o,s]=t,c=s??mm(1),l=Wc(a.shape,i.shape),u=[];if(a.rank===1){for(let e=0;e<i.shape.length-1;++e)u.push(i.shape[e]);u.push(1)}let d=J(i,a),f=U(e,c),p=ty(H(o,mm(r))),m=U(U(U(p,p),p),mm(-.5));return{x:()=>a.rank===1?G(U(U(e,Vm(G(p,[1,1,1,a.shape[0]]),u)),c),i.shape):G(U(U(e,p),c),i.shape),mean:()=>{let e=U(U(p,mm(-1)),f);return a.rank===1&&(e=q(e,l)),G(e,a.shape)},variance:()=>{let e=U(U(m,d),f);return a.rank===1&&(e=q(e,l)),G(e,a.shape)},scale:()=>{let t=U(d,p),n=U(e,t);return a.rank===1&&(n=q(n,l)),G(n,a.shape)},offset:()=>{let t=e;return a.rank===1&&(t=q(t,l)),G(t,a.shape)}}}};k(),im(),K(),Ic(),Ib(),A();var Hk={kernelName:Kt,inputsToSave:[`x`,`indices`],gradFunc:(e,t,n)=>{let[r,i]=t,{axis:a}=n,o=ae(a,r.shape)[0];return{x:()=>{let t=r.shape,n=i.size,s=t.slice(0,o),c=s.length,l=t.slice(a,t.length).slice(1),u=l.length,d=Uk(0,c),f=Uk(c+1,c+1+u),p=Wk([s,[n],l]),m=G(e,p),h=G(i,[n]),g=Wk([[c],d,f]),_=Fc(m,g),v=Fb(_,h,r.shape[o]),y=nm(g);return v=Fc(v,y),v},indices:()=>i}}};function Uk(e,t){let n=[];for(let r=e;r<t;++r)n.push(r);return n}function Wk(e){let t=[];for(let n=0;n<e.length;++n)for(let r=0;r<e[n].length;++r)t.push(e[n][r]);return t}k(),Pp();var Gk={kernelName:Yt,inputsToSave:[`a`,`b`],gradFunc:(e,t)=>{let[n,r]=t;return{a:()=>Np(n),b:()=>Np(r)}}};k(),us();var Kk={kernelName:Xt,gradFunc:e=>({x:()=>z(e,`float32`)})};k(),Pp();var qk={kernelName:$t,gradFunc:e=>({x:()=>Np(e)})};k(),Pp();var Jk={kernelName:en,gradFunc:e=>({x:()=>Np(e)})};k(),Pp();var Yk={kernelName:tn,gradFunc:e=>({x:()=>Np(e)})};k(),eh(),W(),jp();var Xk={kernelName:nn,inputsToSave:[`x`],gradFunc:(e,t,n)=>{let[r]=t,{alpha:i}=n,a=$m(r,0);return{x:()=>Ap(a,e,U(e,i))}}};k(),au(),du();var Zk={kernelName:sn,inputsToSave:[`x`],gradFunc:(e,t)=>{let[n]=t;return{x:()=>uu(e,H(n,1))}}};k(),us(),du();var Qk={kernelName:`Log`,inputsToSave:[`x`],gradFunc:(e,t)=>{let[n]=t;return{x:()=>uu(e,z(n,`float32`))}}};k(),Nm(),W(),Jh(),Cm();var $k={kernelName:fn,inputsToSave:[],outputsToSave:[!0],gradFunc:(e,t,n)=>{let[r]=t,{axis:i}=n;return{logits:()=>{let t=Mm(r);return J(e,U(q(e,i,!0),t))}}}};P(),k(),R();function eA(e,t,n,r=5,i=1,a=1,o=.5){let s={x:e,y:t,dy:n},c={depthRadius:r,bias:i,alpha:a,beta:o};return N.runKernel(mn,s,c)}var tA=L({localResponseNormalizationBackprop_:eA});k();var nA={kernelName:`LRN`,inputsToSave:[`x`],outputsToSave:[!0],gradFunc:(e,t,n)=>{let[r,i]=t,{depthRadius:a,bias:o,alpha:s,beta:c}=n;return{x:()=>tA(r,i,e,a,o,s,c)}}};im(),us(),Op(),W(),K();function rA(e,t,n,r){return t.rank<n.rank&&(t=G(t,$p(t.shape,r))),e.rank<n.rank&&(e=G(e,$p(e.shape,r))),{x:()=>U(e,z(Dp(n,t),e.dtype))}}k(),A();var iA={kernelName:`Max`,inputsToSave:[`x`],outputsToSave:[!0],gradFunc:(e,t,n)=>{let{reductionIndices:r}=n,i=t[0],a=t[1],o=rA(e,a,i,ae(r,i.shape));return{x:()=>o.x()}}};k(),us(),rh(),vh(),W();var aA={kernelName:hn,inputsToSave:[`a`,`b`],gradFunc:(e,t)=>{let[n,r]=t;return{a:()=>U(e,z(nh(n,r),`float32`)),b:()=>U(e,z(_h(n,r),`float32`))}}};P(),k(),I(),A(),gd(),R(),K();function oA(e,t,n,r,i,a,o){let s=F(e,`dy`,`maxPool3dGrad`),c=F(t,`input`,`maxPool3dGrad`),l=F(n,`output`,`maxPool3dGrad`),u=s,d=c,f=l,p=!1;c.rank===4&&(p=!0,u=G(s,[1,s.shape[0],s.shape[1],s.shape[2],s.shape[3]]),d=G(c,[1,c.shape[0],c.shape[1],c.shape[2],c.shape[3]]),f=G(l,[1,l.shape[0],l.shape[1],l.shape[2],l.shape[3]])),y(u.rank===5,()=>`Error in maxPool3dGrad: dy must be rank 5 but got rank ${u.rank}.`),y(d.rank===5,()=>`Error in maxPool3dGrad: input must be rank 5 but got rank ${d.rank}.`),y(f.rank===5,()=>`Error in maxPool3dGrad: output must be rank 5 but got rank ${f.rank}.`),hd(`maxPool3dGrad`,a,o);let m={dy:u,input:d,output:f},h={filterSize:r,strides:i,pad:a,dimRoundingMode:o},g=N.runKernel(yn,m,h);return p?G(g,[g.shape[1],g.shape[2],g.shape[3],g.shape[4]]):g}var sA=L({maxPool3dGrad_:oA});k();var cA={kernelName:vn,inputsToSave:[`x`],outputsToSave:[!0],gradFunc:(e,t,n)=>{let[r,i]=t,{filterSize:a,strides:o,pad:s,dimRoundingMode:c}=n;return{x:()=>sA(e,r,i,a,o,s,c)}}};P(),k(),I(),A(),gd(),R();function lA(e,t,n,r,i,a,o){let s=F(e,`dy`,`maxPoolGrad`),c=F(t,`input`,`maxPoolGrad`),l=F(n,`output`,`maxPoolGrad`);y(c.rank===s.rank,()=>`Rank of input (${c.rank}) does not match rank of dy (${s.rank})`),y(s.rank===4,()=>`Error in maxPoolGrad: dy must be rank 4 but got rank ${s.rank}.`),y(c.rank===4,()=>`Error in maxPoolGrad: input must be rank 4 but got rank ${c.rank}.`),hd(`maxPoolGrad`,a,o);let u={dy:s,input:c,output:l},d={filterSize:r,strides:i,pad:a,dimRoundingMode:o};return N.runKernel(_n,u,d)}var uA=L({maxPoolGrad_:lA});k();var dA={kernelName:gn,inputsToSave:[`x`],outputsToSave:[!0],gradFunc:(e,t,n)=>{let[r,i]=t,{filterSize:a,strides:o,pad:s}=n;return{x:()=>uA(e,r,i,a,o,s)}}};k(),im(),du(),W(),Lg(),K(),A();var fA={kernelName:xn,inputsToSave:[`x`],gradFunc:(e,t,n)=>{let[r]=t,{axis:i}=n,a=ae(i,r.shape),o=Qp(r.shape,a)[1],s=C(o);return{x:()=>{let t=r.shape.slice();a.forEach(e=>{t[e]=1});let n=G(e,t);return uu(U(n,Ig(r.shape,`float32`)),s)}}}};k(),A();var pA={kernelName:`Min`,inputsToSave:[`x`],outputsToSave:[!0],gradFunc:(e,t,n)=>{let{axis:r}=n,[i,a]=t,o=rA(e,a,i,ae(r,i.shape));return{x:()=>o.x()}}};k(),us(),eh(),xh(),W();var mA={kernelName:Sn,inputsToSave:[`a`,`b`],gradFunc:(e,t)=>{let[n,r]=t;return{a:()=>U(e,z(bh(n,r),`float32`)),b:()=>U(e,z($m(n,r),`float32`))}}};k(),Md();var hA={kernelName:Cn,inputsToSave:[`x`],gradFunc:(e,t,n)=>{let r=t[0],{paddings:i}=n,a=i.map(e=>e[0]);return{x:()=>jd(e,a,r.shape)}}};k(),Kc(),du(),Jm(),W(),Ac(),K(),Cm();var gA={kernelName:`Mod`,inputsToSave:[`a`,`b`],gradFunc:(e,t)=>{let[n,r]=t,i=Gc(n.shape,r.shape);return{a:()=>{let t=Wc(n.shape,i);return t.length>0?G(q(e,t),n.shape):e},b:()=>{let t=U(e,kc(qm(uu(n,r)))),a=Wc(r.shape,i);return a.length>0?G(q(t,a),r.shape):t}}}};k(),Kc(),us(),W(),K(),Cm();var _A={kernelName:Tn,inputsToSave:[`a`,`b`],gradFunc:(e,t)=>{let[n,r]=t,i=Gc(n.shape,r.shape);return{a:()=>{let t=U(e,z(r,`float32`)),a=Wc(n.shape,i);return a.length>0?G(q(t,a),n.shape):t},b:()=>{let t=U(e,z(n,`float32`)),a=Wc(r.shape,i);return a.length>0?G(q(t,a),r.shape):t}}}};k(),Ac();var vA={kernelName:`Neg`,gradFunc:e=>({x:()=>kc(e)})};k(),Fg();var yA={kernelName:jn,inputsToSave:[`indices`],gradFunc:(e,t)=>{let n=t[0];return{indices:()=>Pg(n.shape,`float32`)}}};k(),Pp();var bA={kernelName:An,gradFunc:e=>({x:()=>Np(e)})};k(),zb();var xA={kernelName:Mn,saveAllInputs:!0,gradFunc:(e,t,n)=>{let{axis:r}=n;return Rb(e,r).map(e=>()=>e)}};k(),Md();var SA={kernelName:Nn,inputsToSave:[`x`],gradFunc:(e,t,n)=>{let r=t[0],{paddings:i}=n,a=i.map(e=>e[0]);return{x:()=>jd(e,a,r.shape)}}};k(),Kc(),us(),eh(),kh(),W(),pm(),K(),hm(),Jh(),Cm(),jp(),Pp();var CA={kernelName:`Pow`,inputsToSave:[`a`,`b`],outputsToSave:[!0],gradFunc:(e,t)=>{let[n,r,i]=t,a=n,o=r,s=Gc(a.shape,o.shape);return{a:()=>{let t=z(o,`float32`),n=U(e,U(t,fm(a,J(t,mm(1))))),r=Wc(a.shape,s);return r.length>0&&(n=q(n,r)),G(n,a.shape)},b:()=>{let t=$m(a,0),n=Ap(t,Oh(a),Np(a)),r=U(e,U(i,n)),c=Wc(o.shape,s);return c.length>0&&(r=q(r,c)),G(r,o.shape)}}}};k(),Kc(),eh(),W(),K(),Cm(),jp(),Pp();var wA={kernelName:Fn,inputsToSave:[`x`,`alpha`],gradFunc:(e,t)=>{let[n,r]=t,i=$m(n,0);return{x:()=>Ap(i,e,U(e,r)),alpha:()=>{let t=Ap(i,Np(e),U(e,n)),a=Wc(r.shape,e.shape);return a.length>0&&(t=q(t,a)),G(t,r.shape)}}}};yE(),k(),sp(),W(),K(),Ic();function TA(e,t,n){let r=e.shape.slice();r[n]=1;let i=G(t,r),a=op(e,n,!0,!1),o=op(e,n,!0,!0),s=U(a,o);return U(i,s)}function EA(e,t,n){let r=e.shape.length,i=r-n.length,a=tm(n,r),o=e;a!=null&&(o=Fc(e,a));let s=o.shape.slice(),c=s.splice(r-n.length,n.length).reduce((e,t)=>e*t,1);s.push(c);let l=TA(o.reshape(s),t,i);if(l=l.reshape(o.shape),a!=null){let e=nm(a);l=Fc(l,e)}return l}var DA={kernelName:In,inputsToSave:[`x`],gradFunc:(e,t,n)=>{let[r]=t,{axis:i}=n,a=[];return a=i==null?r.shape.map((e,t)=>t):typeof i==`number`?[i]:i,{x:()=>EA(r,e,a)}}};k(),Kc(),us(),du(),W(),Ac(),K(),xm(),Cm();var OA={kernelName:Ft,inputsToSave:[`a`,`b`],gradFunc:(e,t)=>{let[n,r]=t,i=Gc(n.shape,r.shape);return{a:()=>{let t=uu(e,z(r,`float32`)),a=Wc(n.shape,i);return a.length>0?G(q(t,a),n.shape):t},b:()=>{let t=U(e,z(n,`float32`)),a=Wc(r.shape,i);a.length>0&&(t=G(q(t,a),r.shape));let o=bm(r);return kc(uu(t,z(o,`float32`)))}}}};k(),du(),Ac(),xm();var kA={kernelName:Hn,inputsToSave:[`x`],gradFunc:(e,t)=>{let[n]=t;return{x:()=>uu(e,kc(bm(n)))}}};k(),us(),xh(),W(),cb();var AA={kernelName:Yn,inputsToSave:[`x`],gradFunc:(e,t)=>{let[n]=t,r=U(bh(n,6),sb(n));return{x:()=>U(e,z(r,`float32`))}}};k(),us(),W(),cb();var jA={kernelName:Un,inputsToSave:[`x`],gradFunc:(e,t)=>{let[n]=t;return{x:()=>U(e,z(sb(n),`float32`))}}};k(),K();var MA={kernelName:Wn,inputsToSave:[`x`],gradFunc:(e,t)=>{let[n]=t;return{x:()=>G(e,n.shape)}}};P(),k();var NA={kernelName:qn,inputsToSave:[`images`],gradFunc:(e,t,n)=>{let[r]=t,i={dy:e,images:r};return{images:()=>N.runKernel(Jn,i,n)}}};P(),k();var PA={kernelName:Gn,inputsToSave:[`images`],gradFunc:(e,t,n)=>{let[r]=t,i={dy:e,images:r};return{images:()=>N.runKernel(Kn,i,n)}}};k(),Rv(),A();var FA={kernelName:Xn,gradFunc:(e,t,n)=>{let{dims:r}=n,i=ae(r,e.shape);return{x:()=>Lv(e,i)}}};k(),Pp();var IA={kernelName:Zn,gradFunc:e=>({x:()=>Np(e)})};k(),du(),W(),Ac(),pm();var LA={kernelName:Qn,inputsToSave:[`x`],gradFunc:(e,t)=>{let[n]=t;return{x:()=>kc(uu(e,U(fm(n,1.5),2)))}}};k(),us(),og(),W(),Pp();var RA={kernelName:tr,inputsToSave:[`condition`],gradFunc:(e,t)=>{let[n]=t;return{condition:()=>z(Np(n),`float32`),t:()=>U(e,z(n,e.dtype)),e:()=>U(e,z(ag(n),e.dtype))}}};k(),us(),Nm(),eh(),W(),hm(),_T(),jp();var zA={kernelName:nr,inputsToSave:[`x`],gradFunc:(e,t)=>{let[n]=t;return{x:()=>{let t=$m(n,mm(0)),r=mm(hT),i=mm(gT),a=U(e,i),o=U(U(e,r),Mm(z(n,`float32`)));return Ap(t,a,o)}}}};k(),W(),hm(),Jh();var BA={kernelName:or,outputsToSave:[!0],gradFunc:(e,t)=>{let[n]=t;return{x:()=>U(e,U(n,J(mm(1),n)))}}};k(),Pp();var VA={kernelName:ar,gradFunc:e=>({x:()=>Np(e)})};k(),us(),tp(),W();var HA={kernelName:`Sin`,inputsToSave:[`x`],gradFunc:(e,t)=>{let[n]=t;return{x:()=>U(ep(z(n,`float32`)),e)}}};k(),us(),ip(),W();var UA={kernelName:ir,inputsToSave:[`x`],gradFunc:(e,t)=>{let[n]=t;return{x:()=>U(rp(z(n,`float32`)),e)}}};k(),h_(),Fl();var WA={kernelName:rr,inputsToSave:[`x`],gradFunc:(e,t,n)=>{let[r]=t,{begin:i,size:a}=n,o=r.shape,[s,c]=kl(r,i,a),l=[];for(let t=0;t<e.rank;t++)l.push([s[t],o[t]-s[t]-c[t]]);return{x:()=>m_(e,l)}}};k(),W(),Jh(),Cm();var GA={kernelName:dr,outputsToSave:[!0],gradFunc:(e,t,n)=>{let[r]=t,{dim:i}=n,a=U(e,r);return{logits:()=>J(a,U(q(a,[i],!0),r))}}};k(),W(),kd();var KA={kernelName:sr,inputsToSave:[`x`],gradFunc:(e,t)=>{let[n]=t;return{x:()=>U(e,Od(n))}}};k(),Vd();var qA={kernelName:lr,gradFunc:(e,t,n)=>{let{blockShape:r,paddings:i}=n;return{x:()=>Bd(e,r,i)}}};k(),Ed();var JA={kernelName:ur,gradFunc:(e,t,n)=>{let{axis:r}=n;return{x:()=>Td(e,r)}}};k(),us(),du(),W(),vm();var YA={kernelName:cr,inputsToSave:[`x`],gradFunc:(e,t)=>{let[n]=t;return{x:()=>uu(e,U(_m(z(n,`float32`)),2))}}};k(),us(),W();var XA={kernelName:vr,inputsToSave:[`x`],gradFunc:(e,t)=>{let[n]=t;return{x:()=>U(e,U(z(n,`float32`),2))}}};k(),W(),hm(),Jh();var ZA={kernelName:_r,inputsToSave:[`a`,`b`],gradFunc:(e,t)=>{let[n,r]=t,i=mm(2);return{a:()=>U(e,U(i,J(n,r))),b:()=>U(e,U(i,J(r,n)))}}};k(),Pp();var QA={kernelName:Nr,gradFunc:e=>({x:()=>Np(e)})};k(),Kc(),Ac(),K(),Cm();var $A={kernelName:`Sub`,inputsToSave:[`a`,`b`],gradFunc:(e,t)=>{let[n,r]=t,i=Gc(n.shape,r.shape);return{a:()=>{let t=e,r=Wc(n.shape,i);return r.length>0&&(t=q(t,r)),G(t,n.shape)},b:()=>{let t=e,n=Wc(r.shape,i);return n.length>0&&(t=q(t,n)),G(kc(t),r.shape)}}}};k(),W(),Lg(),K(),A();var ej={kernelName:`Sum`,inputsToSave:[`x`],gradFunc:(e,t,n)=>{let[r]=t,i=r.shape.slice(),{axis:a}=n;ae(a,r.shape).forEach(e=>{i[e]=1});let o=G(e,i),s=U(o,Ig(r.shape,`float32`));return{x:()=>s}}};k(),tp(),du(),xm();var tj={kernelName:`Tan`,inputsToSave:[`x`],gradFunc:(e,t)=>{let[n]=t;return{x:()=>uu(e,bm(ep(n)))}}};k(),W(),hm(),xm(),Jh();var nj={kernelName:Cr,outputsToSave:[!0],gradFunc:(e,t)=>{let[n]=t;return{x:()=>U(J(mm(1),bm(n)),e)}}};k(),au(),Md(),Pp();var rj={kernelName:wr,inputsToSave:[`x`],gradFunc:(e,t,n)=>{let[r]=t,{reps:i}=n;return{x:()=>{let t=Np(r);if(r.rank===1)for(let n=0;n<i[0];++n)t=H(t,jd(e,[n*r.shape[0]],[r.shape[0]]));else if(r.rank===2)for(let n=0;n<i[0];++n)for(let a=0;a<i[1];++a)t=H(t,jd(e,[n*r.shape[0],a*r.shape[1]],[r.shape[0],r.shape[1]]));else if(r.rank===3)for(let n=0;n<i[0];++n)for(let a=0;a<i[1];++a)for(let o=0;o<i[2];++o)t=H(t,jd(e,[n*r.shape[0],a*r.shape[1],o*r.shape[2]],[r.shape[0],r.shape[1],r.shape[2]]));else if(r.rank===4)for(let n=0;n<i[0];++n)for(let a=0;a<i[1];++a)for(let o=0;o<i[2];++o)for(let s=0;s<i[3];++s)t=H(t,jd(e,[n*r.shape[0],a*r.shape[1],o*r.shape[2],s*r.shape[3]],[r.shape[0],r.shape[1],r.shape[2],r.shape[3]]));else throw Error(`Gradient for tile operation is not implemented for rank-${r.rank} tensors yet.`);return t}}}};k(),im(),Ic();var ij={kernelName:Dr,gradFunc:(e,t,n)=>{let{perm:r}=n,i=nm(r);return{x:()=>Fc(e,i)}}};k(),ab();var aj={kernelName:kr,gradFunc:(e,t,n)=>{let{axis:r}=n;return{value:()=>ib(e,r)}}};k(),Im(),Zm(),rh(),rg(),Ag(),Lg(),hm(),jp(),Pp();var oj={kernelName:Ar,inputsToSave:[`segmentIds`],gradFunc:(e,t)=>{let[n]=t;return{x:()=>sj(e,n)}}};function sj(e,t){let n=kg(t,Np(t)),r=Xm(e,n),i=nh(t,mm(0,`int32`)),a=r.rank-i.rank;for(let e=0;e<a;++e)i=Fm(i,e+1);i=ng(i,Ig(r.shape,`bool`));let o=Np(r);return Ap(i,r,o)}k(),Pp();var cj={kernelName:Mr,gradFunc:e=>({x:()=>Np(e)})};$r();var lj=[QO,$O,ek,tk,nk,rk,ik,ak,ok,sk,ck,lk,fk,hk,gk,_k,vk,yk,bk,xk,Sk,Ck,Tk,wk,Ok,kk,Ak,jk,Mk,Nk,OA,Pk,Fk,Ik,Lk,Rk,Bk,zk,Vk,Hk,Gk,Kk,qk,Jk,Yk,Xk,Zk,Qk,$k,nA,iA,iA,aA,cA,dA,fA,pA,mA,hA,gA,_A,vA,yA,bA,xA,SA,SA,CA,wA,DA,kA,AA,jA,MA,NA,PA,FA,IA,LA,RA,zA,BA,VA,HA,UA,WA,GA,KA,qA,qA,JA,JA,YA,ZA,XA,QA,$A,ej,tj,nj,rj,ij,aj,oj,cj];for(let e of lj)Kr(e);ZO();var uj=class e extends Error{constructor(t){super(t),Object.setPrototypeOf(this,e.prototype)}},dj=class e extends Error{constructor(t){super(t),Object.setPrototypeOf(this,e.prototype)}},X=class e extends Error{constructor(t){super(t),Object.setPrototypeOf(this,e.prototype)}},fj=class e extends Error{constructor(t){super(t),Object.setPrototypeOf(this,e.prototype)}},pj=class e extends Error{constructor(t){super(t),Object.setPrototypeOf(this,e.prototype)}},mj=class{constructor(e){this.maxEntries=e||100,this.cache=new Map}get(e){let t;return this.cache.has(e)&&(t=this.cache.get(e),this.cache.delete(e),this.cache.set(e,t)),t}put(e,t){if(this.cache.has(e))this.cache.delete(e);else if(this.cache.size>=this.maxEntries){let e=this.cache.keys().next().value;this.cache.delete(e)}this.cache.set(e,t)}getMaxEntries(){return this.maxEntries}setMaxEntries(e){if(e<0)throw Error(`The maxEntries of LRU caches must be at least 0, but got ${e}.`);if(this.maxEntries>e)for(let t=0;t<this.maxEntries-e;t++){let e=this.cache.keys().next().value;this.cache.delete(e)}this.maxEntries=e}};function hj(e,t){if(Array.isArray(e)){let n=[];for(let r=0;r<t;r++)n=n.concat(e);return n}{let n=Array(t);return n.fill(e),n}}function gj(e,t){if(!e)throw new pj(t)}function _j(e,t){let n=0;for(let r of e)r===t&&n++;return n}function vj(e){return e.length===1?e[0]:e}function yj(e){return Array.isArray(e)?e:[e]}function bj(e){let t=e.replace(/(.)([A-Z][a-z0-9]+)/g,`$1_$2`).replace(/([a-z])([A-Z])/g,`$1_$2`).toLowerCase();return t[0]===`_`?`private`+t:t}function xj(e){return e.length<=1||e.indexOf(`_`)===-1?e:e.replace(/[_]+(\w|$)/g,(e,t)=>t.toUpperCase())}var Sj={};function Cj(e){if(e==null)return null;let t={};return t.className=e.getClassName(),t.config=e.getConfig(),t}function wj(e){if(typeof e==`object`&&e){if(Array.isArray(e))e.forEach(e=>wj(e));else{let t=Object.keys(e);for(let n of t){let t=e[n];typeof t==`object`&&t&&(!Array.isArray(t)&&t.type===`ndarray`&&typeof t.value==`number`?e[n]=t.value:wj(t))}}}}function Tj(e,t={},n={},r=`object`,i=!1){if(typeof e==`string`){let i=e,a;if(i in n)a=n[i];else if(i in Sj)a=Sj[i];else if(a=t[i],a==null)throw new X(`Unknown ${r}: ${e}. This may be due to one of the following reasons:\n1. The ${r} is defined in Python, in which case it needs to be ported to TensorFlow.js or your JavaScript code.\n2. The custom ${r} is defined in JavaScript, but is not registered properly with tf.serialization.registerClass().`);return a}{let a=e;if(a.className==null||a.config==null)throw new X(`${r}: Improper config format: ${JSON.stringify(a)}.\n'className' and 'config' must set.`);let o=a.className,s,c;if(o in n?[s,c]=n[o]:o in Sj?[s,c]=Sj.className:o in t&&([s,c]=t[o]),s==null)throw new X(`Unknown ${r}: ${o}. This may be due to one of the following reasons:\n1. The ${r} is defined in Python, in which case it needs to be ported to TensorFlow.js or your JavaScript code.\n2. The custom ${r} is defined in JavaScript, but is not registered properly with tf.serialization.registerClass().`);if(c!=null){let e={};for(let t of Object.keys(Sj))e[t]=Sj[t];for(let t of Object.keys(n))e[t]=n[t];let t=a.config;t.customObjects=e;let r=Object.assign({},Sj);for(let e of Object.keys(n))Sj[e]=n[e];wj(a.config);let o=c(s,a.config,n,i);return Sj=Object.assign({},r),o}{let e=Object.assign({},Sj);for(let e of Object.keys(n))Sj[e]=n[e];let t=new s(a.config);return Sj=Object.assign({},e),t}}}function Ej(e,t){return e<t?-1:+(e>t)}function Dj(e,t){return-1*Ej(e,t)}function Oj(e){if(e==null)return e;let t=[];for(let n of e)t.indexOf(n)===-1&&t.push(n);return t}function kj(e){if(e==null)throw new X(`Invalid value in obj: ${JSON.stringify(e)}`);for(let t in e)if(e.hasOwnProperty(t))return!1;return!0}function Aj(e,t,n){if(n!=null&&e.indexOf(n)<0)throw new X(`${n} is not a valid ${t}.  Valid values are ${e} or null/undefined.`)}function jj(e,t,n=0,r=1/0){return gj(n>=0),gj(r>=n),Array.isArray(e)&&e.length>=n&&e.length<=r&&e.every(e=>typeof e===t)}function Mj(e,t){Array.isArray(e)?(y(e.length>0,()=>`${t} is unexpectedly an empty array.`),e.forEach((e,n)=>Mj(e,`element ${n+1} of ${t}`))):y(Number.isInteger(e)&&e>0,()=>`Expected ${t} to be a positive integer, but got ${Nj(e)}.`)}function Nj(e){return e===null?`null`:Array.isArray(e)?`[`+e.map(e=>Nj(e)).join(`,`)+`]`:typeof e==`string`?`"${e}"`:`${e}`}function Pj(e,t,n){let r=n==null?wi():n(),i;return(...a)=>{let o=n==null?wi():n();return o-r<t||(r=o,i=e(...a)),i}}function Fj(e){return e===`relu`?`relu`:e===`linear`?`linear`:e===`elu`?`elu`:null}var Ij=0;function Lj(){return Ij++}var Rj={};function zj(e=``){return e in Rj||(Rj[e]=0),Rj[e]+=1,e+Rj[e].toString()}var Bj=[`channelsFirst`,`channelsLast`],Vj=[`nearest`,`bilinear`],Hj=[`valid`,`same`,`causal`],Uj=[`max`,`avg`],Wj=[`sum`,`mul`,`concat`,`ave`],Gj=new Map;function Kj(e){Aj(Bj,`DataFormat`,e)}function qj(e){Aj(Vj,`InterpolationFormat`,e)}function Jj(e){Aj(Hj,`PaddingMode`,e)}function Yj(e){Aj(Uj,`PoolMode`,e)}var Xj=[],Zj=`/`;function Qj(e,t){Xj.push(e);try{let e=t();return Xj.pop(),e}catch(e){throw Xj.pop(),e}}function $j(){return Xj.length===0?``:Xj.join(Zj)+Zj}function eM(e){if(!rM(e))throw Error(`Not a valid tensor name: '`+e+`'`);return $j()+e}function tM(e){if(!rM(e))throw Error(`Not a valid tensor name: '`+e+`'`);Gj.has(e)||Gj.set(e,0);let t=Gj.get(e);if(Gj.set(e,Gj.get(e)+1),t>0){let n=`${e}_${t}`;return Gj.set(n,1),n}return e}var nM=new RegExp(/^[A-Za-z0-9][-A-Za-z0-9\._\/]*$/);function rM(e){return!!e.match(nM)}function iM(e){return e===parseInt(e.toString(),10)}function aM(e,t,n){t??=0,n??=e.length;let r=1;for(let i=t;i<n;++i)r*=e[i];return r}function oM(e){if(e.length===0)return NaN;let t=1/0;for(let n=0;n<e.length;n++){let r=e[n];r<t&&(t=r)}return t}function sM(e){if(e.length===0)return NaN;let t=-1/0;for(let n=0;n<e.length;n++){let r=e[n];r>t&&(t=r)}return t}function cM(e,t){if(t<e)throw new X(`end (${t}) < begin (${e}) is forbidden.`);let n=[];for(let r=e;r<t;++r)n.push(r);return n}Y();var lM;function uM(){return lM??=Sc().epsilon(),lM}function dM(){return`channelsLast`}Y();function fM(e,t){return z(e,t)}function pM(e,t=-1){let n=e.shape.slice();return t<0&&(t=n.length+t+1),n.splice(t,0,1),G(e,n)}function mM(e,t){return B(()=>{if(e.shape.length!==2)throw new X(`repeat() expects a rank-2 tensor, but received a rank-${e.shape.length} tensor.`);return SM(pM(e,1),[1,t,1])})}function hM(e){let t=[aM(e.shape)];return G(e,t)}function gM(e){if(e.rank<=1)throw new X(`batchFlatten requires a minimum rank of 2. Got rank: ${e.rank}.`);let t=[e.shape[0],aM(e.shape,1)];return G(e,t)}function _M(e,t,n){return B(()=>{switch(e.rank){case 1:return Sy(e,t,n);case 2:return Ty(e,[t,0],[n,e.shape[1]]);case 3:return Oy(e,[t,0,0],[n,e.shape[1],e.shape[2]]);case 4:return jy(e,[t,0,0,0],[n,e.shape[1],e.shape[2],e.shape[3]]);case 5:return jd(e,[t,0,0,0,0],[n,e.shape[1],e.shape[2],e.shape[3],e.shape[4]]);case 6:return jd(e,[t,0,0,0,0,0],[n,e.shape[1],e.shape[2],e.shape[3],e.shape[4],e.shape[5]]);default:throw new X(`sliceAlongFirstAxis() received an unsupported tensor rank: ${e.rank}`)}})}function vM(e,t,n){return B(()=>{switch(e.rank){case 1:return Sy(e,t,n);case 2:return Ty(e,[0,t],[e.shape[0],n]);case 3:return Oy(e,[0,0,t],[e.shape[0],e.shape[1],n]);case 4:return jy(e,[0,0,0,t],[e.shape[0],e.shape[1],e.shape[2],n]);default:throw new X(`sliceAlongLastAxis() received an unsupported tensor rank: ${e.rank}`)}})}function yM(e,t,n,r){return B(()=>{switch(e.rank){case 1:return Sy(e,t,n);case 2:switch(r){case 1:return _M(e,t,n);case 2:return vM(e,t,n);default:throw new X(`The axis is not within the rank of the tensor ${r}`)}case 3:switch(r){case 1:return _M(e,t,n);case 2:return Oy(e,[0,t,0],[e.shape[0],n,e.shape[2]]);case 3:return vM(e,t,n);default:throw new X(`The axis is not within the rank of the tensor ${r}`)}case 4:switch(r){case 1:return _M(e,t,n);case 2:return jy(e,[0,t,0,0],[e.shape[0],n,e.shape[2],e.shape[3]]);case 3:return jy(e,[0,0,t,0],[e.shape[0],e.shape[1],n,e.shape[3]]);case 4:return vM(e,t,n);default:throw new X(`The axis is not within the rank of the tensor ${r}`)}default:throw new X(`sliceAlongLastAxis() received an unsupported tensor rank: ${e.rank}`)}})}function bM(e,t=-1){let n;return t<0&&(n=e[0].rank,t=n===0?0:n),t===e[0].rank&&(t=-1),Td(e,t)}function xM(e,t){switch(e.rank){case 1:return xf([e,t]);case 2:return wf([e,t],0);case 3:return Df([e,t],0);case 4:return Af([e,t],0);default:throw new X(`concatAlongFirstAxis() received an unsupported tensor rank: ${e.rank}`)}}function SM(e,t){if(Array.isArray(t)||(t=[t]),e.rank!==t.length)throw new X(`The length of input n (${t.length}) does not match the number of dimensions in input x (${e.rank})`);return Vm(e,t)}function CM(e,t=0,n=1,r,i){return _v(e,t,n,r,i)}function wM(e,t,n,r){if(e.rank<2||t.rank<2)throw new fj(`dot requires both inputs to be rank >= 2 but got x shape = ${e.shape} and y shape = ${t.shape}`);if(t.rank>=3&&e.shape.slice(-1)[0]!==t.shape.slice(-2)[0])throw new fj(`If rank y >= 3, then the second last dim of y must equal the last dim of x but got x shape = ${e.shape} and  y shape = ${t.shape}`);if(e.rank===2&&t.rank===2)return Wx({a:e,b:t,transposeA:!1,transposeB:!1,bias:r?DM(e.rank,r,dM()):null,activation:n});{let i=e.shape.slice(),a=i.pop();e=G(e,[-1,a]);let o=t.shape.slice(),s=o.pop(),c=o.pop(),l=[...o,s],u=Array.from({length:t.rank},(e,n)=>n===0?t.rank-2:n<=t.rank-2?n-1:n);t=G(Fc(t,u),[c,-1]);let d=[...i,...l];return G(Wx({a:e,b:t,transposeA:!1,transposeB:!1,bias:r?DM(e.rank,r,dM()):null,activation:n}),d)}}function TM(e,t,n){return B(()=>(t=Array.isArray(t)?hb(t,`int32`):z(t,`int32`),Xm(e,t,n)))}function EM(e){return U(e,e)}function DM(e,t,n){let r=t.shape;if(t.rank!==1&&t.rank!==e)throw new X(`Unexpected bias dimensions: ${t.rank}; expected it to be 1 or ${e}`);if(e===5){if(n===`channelsFirst`)return r.length===1?G(t,[1,r[0],1,1,1]):G(t,[1,r[3],r[0],r[1],r[2]]);if(n===`channelsLast`)return r.length===1?G(t,[1,1,1,1,r[0]]):G(t,[1].concat(r))}else if(e===4){if(n===`channelsFirst`)return r.length===1?G(t,[1,r[0],1,1]):G(t,[1,r[2],r[0],r[1]]);if(n===`channelsLast`)return r.length===1?G(t,[1,1,1,r[0]]):G(t,[1].concat(r))}else if(e===3){if(n===`channelsFirst`)return r.length===1?G(t,[1,r[0],1]):G(t,[1,r[1],r[0]]);if(n===`channelsLast`)return r.length===1?G(t,[1,1,r[0]]):G(t,[1].concat(r))}else if(e<3)return t;throw new X(`Unsupported input rank by biasAdd: ${t.rank}`)}function OM(e,t,n){return B(()=>(n??=dM(),Kj(n),H(e,DM(e.rank,t,n))))}function kM(e,t=1){if(t!==1)throw new fj(`Support for alpha values other than 1 (${t}) is not implemented yet.`);return Gp(e)}function AM(e){return B(()=>uu(e,H(mu(e),1)))}function jM(e,t,n,r){return B(()=>hx(e,t,n,r))}function MM(e){return B(()=>{let t=H(.5,U(.2,e));return vf(t,0,1)})}function NM(e,t,n=!1){return n?e():t()}var PM=[`fanIn`,`fanOut`,`fanAvg`],FM=[`normal`,`uniform`,`truncatedNormal`];Y();function IM(e){Aj(PM,`FanMode`,e)}function LM(e){Aj(FM,`Distribution`,e)}var RM=class extends Ll{fromConfigUsesCustomObjects(){return!1}getConfig(){return{}}},zM=class extends RM{apply(e,t){return Pg(e,t)}};zM.className=`Zeros`,V(zM);var BM=class extends RM{apply(e,t){return Ig(e,t)}};BM.className=`Ones`,V(BM);var VM=class extends RM{constructor(e){if(super(),typeof e!=`object`)throw new X(`Expected argument of type ConstantConfig but got ${e}`);if(e.value===void 0)throw new X(`config must have value set but got ${e}`);this.value=e.value}apply(e,t){return B(()=>U(mm(this.value),Ig(e,t)))}getConfig(){return{value:this.value}}};VM.className=`Constant`,V(VM);var HM=class extends RM{constructor(e){super(),this.DEFAULT_MINVAL=-.05,this.DEFAULT_MAXVAL=.05,this.minval=e.minval||this.DEFAULT_MINVAL,this.maxval=e.maxval||this.DEFAULT_MAXVAL,this.seed=e.seed}apply(e,t){return Cv(e,this.minval,this.maxval,t)}getConfig(){return{minval:this.minval,maxval:this.maxval,seed:this.seed}}};HM.className=`RandomUniform`,V(HM);var UM=class extends RM{constructor(e){super(),this.DEFAULT_MEAN=0,this.DEFAULT_STDDEV=.05,this.mean=e.mean||this.DEFAULT_MEAN,this.stddev=e.stddev||this.DEFAULT_STDDEV,this.seed=e.seed}apply(e,t){if(t||=`float32`,t!==`float32`&&t!==`int32`)throw new fj(`randomNormal does not support dType ${t}.`);return CM(e,this.mean,this.stddev,t,this.seed)}getConfig(){return{mean:this.mean,stddev:this.stddev,seed:this.seed}}};UM.className=`RandomNormal`,V(UM);var WM=class extends RM{constructor(e){super(),this.DEFAULT_MEAN=0,this.DEFAULT_STDDEV=.05,this.mean=e.mean||this.DEFAULT_MEAN,this.stddev=e.stddev||this.DEFAULT_STDDEV,this.seed=e.seed}apply(e,t){if(t||=`float32`,t!==`float32`&&t!==`int32`)throw new fj(`truncatedNormal does not support dType ${t}.`);return kb(e,this.mean,this.stddev,t,this.seed)}getConfig(){return{mean:this.mean,stddev:this.stddev,seed:this.seed}}};WM.className=`TruncatedNormal`,V(WM);var GM=class extends RM{constructor(e){super(),this.gain=e.gain==null?1:e.gain}apply(e,t){return B(()=>{if(e.length!==2||e[0]!==e[1])throw new X(`Identity matrix initializer can only be used for 2D square matrices.`);return U(this.gain,Wm(e[0]))})}getConfig(){return{gain:this.gain}}};GM.className=`Identity`,V(GM);function KM(e,t=`channelsLast`){let n,r;if(Kj(t),e.length===2)n=e[0],r=e[1];else if([3,4,5].indexOf(e.length)!==-1){if(t===`channelsFirst`){let t=aM(e,2);n=e[1]*t,r=e[0]*t}else if(t===`channelsLast`){let t=aM(e,0,e.length-2);n=e[e.length-2]*t,r=e[e.length-1]*t}}else{let t=aM(e);n=Math.sqrt(t),r=Math.sqrt(t)}return[n,r]}var qM=class extends RM{constructor(e){if(super(),e.scale<0)throw new X(`scale must be a positive float. Got: ${e.scale}`);this.scale=e.scale==null?1:e.scale,this.mode=e.mode==null?`fanIn`:e.mode,IM(this.mode),this.distribution=e.distribution==null?`normal`:e.distribution,LM(this.distribution),this.seed=e.seed}apply(e,t){let n=KM(e),r=n[0],i=n[1],a=this.scale;if(this.mode===`fanIn`?a/=Math.max(1,r):this.mode===`fanOut`?a/=Math.max(1,i):a/=Math.max(1,(r+i)/2),this.distribution===`normal`){let n=Math.sqrt(a);if(t||=`float32`,t!==`float32`&&t!==`int32`)throw new fj(`${this.getClassName()} does not support dType ${t}.`);return kb(e,0,n,t,this.seed)}{let n=Math.sqrt(3*a);return Cv(e,-n,n,t)}}getConfig(){return{scale:this.scale,mode:this.mode,distribution:this.distribution,seed:this.seed}}};qM.className=`VarianceScaling`,V(qM);var JM=class extends qM{constructor(e){super({scale:1,mode:`fanAvg`,distribution:`uniform`,seed:e==null?null:e.seed})}getClassName(){return qM.className}};JM.className=`GlorotUniform`,V(JM);var YM=class extends qM{constructor(e){super({scale:1,mode:`fanAvg`,distribution:`normal`,seed:e==null?null:e.seed})}getClassName(){return qM.className}};YM.className=`GlorotNormal`,V(YM);var XM=class extends qM{constructor(e){super({scale:2,mode:`fanIn`,distribution:`normal`,seed:e==null?null:e.seed})}getClassName(){return qM.className}};XM.className=`HeNormal`,V(XM);var ZM=class extends qM{constructor(e){super({scale:2,mode:`fanIn`,distribution:`uniform`,seed:e==null?null:e.seed})}getClassName(){return qM.className}};ZM.className=`HeUniform`,V(ZM);var QM=class extends qM{constructor(e){super({scale:1,mode:`fanIn`,distribution:`normal`,seed:e==null?null:e.seed})}getClassName(){return qM.className}};QM.className=`LeCunNormal`,V(QM);var $M=class extends qM{constructor(e){super({scale:1,mode:`fanIn`,distribution:`uniform`,seed:e==null?null:e.seed})}getClassName(){return qM.className}};$M.className=`LeCunNormal`,V($M);var eN=class extends RM{constructor(e){if(super(),this.DEFAULT_GAIN=1,this.gain=e.gain==null?this.DEFAULT_GAIN:e.gain,this.seed=e.seed,this.seed!=null)throw new fj(`Random seed is not implemented for Orthogonal Initializer yet.`)}apply(e,t){return B(()=>{if(e.length<2)throw new fj(`Shape must be at least 2D.`);e[0]*e[1]>2e3&&console.warn(`Orthogonal initializer is being called on a matrix with more than 2000 (${e[0]*e[1]}) elements: Slowness may result.`);let t=CM(e[0]>e[1]?[e[1],e[0]]:e,0,1,`float32`),n=xw.gramSchmidt(t);return e[0]>e[1]&&(n=Fc(n)),U(this.gain,n)})}getConfig(){return{gain:this.gain,seed:this.seed}}};eN.className=`Orthogonal`,V(eN);var tN={constant:`Constant`,glorotNormal:`GlorotNormal`,glorotUniform:`GlorotUniform`,heNormal:`HeNormal`,heUniform:`HeUniform`,identity:`Identity`,leCunNormal:`LeCunNormal`,leCunUniform:`LeCunUniform`,ones:`Ones`,orthogonal:`Orthogonal`,randomNormal:`RandomNormal`,randomUniform:`RandomUniform`,truncatedNormal:`TruncatedNormal`,varianceScaling:`VarianceScaling`,zeros:`Zeros`};function nN(e,t={}){return Tj(e,Rl.getMap().classNameMap,t,`initializer`)}function rN(e){return Cj(e)}function iN(e){if(typeof e==`string`){let t=e in tN?tN[e]:e;if(t===`GlorotNormal`)return new YM;if(t===`GlorotUniform`)return new JM;if(t===`HeNormal`)return new XM;if(t===`HeUniform`)return new ZM;if(t===`LeCunNormal`)return new QM;if(t===`LeCunUniform`)return new $M;{let e={};return e.className=t,e.config={},nN(e)}}return e instanceof RM?e:nN(e)}function aN(e){return Array.isArray(e)&&Array.isArray(e[0])}function oN(e){return e.length===0?[]:Array.isArray(e[0])?e:[e]}function sN(e){let t;if(Array.isArray(e)){if(e.length!==1)throw new X(`Expected Tensor length to be 1; got ${e.length}`);t=e[0]}else t=e;return t}function cN(e){if(Array.isArray(e)&&Array.isArray(e[0])){if(e.length===1)return e=e,e[0];throw new X(`Expected exactly 1 Shape; got ${e.length}`)}return e}function lN(e){let t=0;for(let n of e)n.shape.length===0?t+=1:t+=n.shape.reduce((e,t)=>e*t);return t}Y();var uN=`Variable`,dN=class{constructor(e,t=`float32`,n=uN,r=!0,i=null){this.dtype=t??`float32`,this.shape=e.shape,this.id=Lj(),n??=uN,this.originalName=eM(n),this.name=tM(this.originalName),this.trainable_=r,this.constraint=i,this.val=Hb(e,this.trainable_,this.name,this.dtype)}read(){return this.assertNotDisposed(),this.val}write(e){return this.assertNotDisposed(),fN(this.val,e),this.val.id!==e.id&&(this.val.assign(e),this.constraint!=null&&this.val.assign(this.constraint.apply(this.val))),this}dispose(){this.assertNotDisposed(),this.val.dispose()}assertNotDisposed(){if(this.val.isDisposed)throw Error(`LayersVariable ${this.name} is already disposed.`)}get trainable(){return this.trainable_}set trainable(e){this.trainable_=e,this.val.trainable=e}};function fN(e,t){if(e.shape.toString()!==t.shape.toString())throw Error(`Shape mismatch: `+JSON.stringify(e.shape)+` vs. `+JSON.stringify(t.shape))}function pN(e){return e.map(e=>e.read())}function mN(e){e.forEach(e=>{e[0].write(e[1])})}Y();var hN=class{constructor(e){this.dtype=e.dtype,this.shape=e.shape,this.ndim=e.shape==null?e.ndim:e.shape.length,this.maxNDim=e.maxNDim,this.minNDim=e.minNDim,this.axes=e.axes||{}}},gN=class{constructor(e,t,n,r,i,a,o){this.dtype=e,this.shape=t,this.sourceLayer=n,this.inputs=r,this.callArgs=i,this.outputTensorIndex=o,this.id=Lj(),a!=null&&(this.originalName=eM(a),this.name=tM(this.originalName)),this.rank=t.length}},_N=0,vN=class{constructor(e,t){this.callArgs=t,this.id=_N++,this.outboundLayer=e.outboundLayer,this.inboundLayers=e.inboundLayers,this.nodeIndices=e.nodeIndices,this.tensorIndices=e.tensorIndices,this.inputTensors=e.inputTensors,this.outputTensors=e.outputTensors,this.inputMasks=e.inputMasks,this.outputMasks=e.outputMasks,this.inputShapes=e.inputShapes,this.outputShapes=e.outputShapes;for(let t of e.inboundLayers)t?.outboundNodes.push(this);e.outboundLayer.inboundNodes.push(this)}getConfig(){let e=[];for(let t of this.inboundLayers)t==null?e.push(null):e.push(t.name);return{outboundLayer:this.outboundLayer?this.outboundLayer.name:null,inboundLayers:e,nodeIndices:this.nodeIndices,tensorIndices:this.tensorIndices}}},yN=0,bN=class extends Ll{constructor(e={}){super(),this._callHook=null,this._addedWeightNames=[],this._stateful=!1,this.id=yN++,this.activityRegularizer=null,this.inputSpec=null,this.supportsMasking=!1,this._trainableWeights=[],this._nonTrainableWeights=[],this._losses=[],this._updates=[],this._built=!1,this.inboundNodes=[],this.outboundNodes=[];let t=e.name;if(!t){let e=this.getClassName();t=bj(e)+`_`+zj(e)}if(this.name=t,this.trainable_=e.trainable==null||e.trainable,e.inputShape!=null||e.batchInputShape!=null){let t;if(e.batchInputShape!=null)t=e.batchInputShape;else if(e.inputShape!=null){let n=null;e.batchSize!=null&&(n=e.batchSize),t=[n].concat(e.inputShape)}this.batchInputShape=t;let n=e.dtype;n??=e.inputDType,n??=`float32`,this.dtype=n}this.initialWeights=e.weights==null?null:e.weights,this._refCount=null,this.fastWeightInitDuringBuild=!1}static nodeKey(e,t){return e.name+`_ib-`+t.toString()}getNodeAtIndex(e,t){if(this.inboundNodes.length===0)throw new dj(`The layer has never been called and thus has no defined ${t}.`);if(this.inboundNodes.length<=e)throw new X(`Asked to get ${t} at node ${e}, but the layer has only ${this.inboundNodes.length} inbound nodes.`);return this.inboundNodes[e]}getInputAt(e){return vj(this.getNodeAtIndex(e,`input`).inputTensors)}getOutputAt(e){return vj(this.getNodeAtIndex(e,`output`).outputTensors)}get input(){if(this.inboundNodes.length>1)throw new uj(`Layer ${this.name} has multiple inbound nodes, hence the notion of "layer input" is ill-defined. Use \`getInputAt(nodeIndex)\` instead.`);if(this.inboundNodes.length===0)throw new uj(`Layer ${this.name} is not connected, no input to return.`);return vj(this.getNodeAtIndex(0,`input`).inputTensors)}get output(){if(this.inboundNodes.length===0)throw new uj(`Layer ${this.name} has no inbound nodes.`);if(this.inboundNodes.length>1)throw new uj(`Layer ${this.name} has multiple inbound nodes, hence the notion of "layer output" is ill-defined. Use \`getOutputAt(nodeIndex)\` instead.`);return vj(this.getNodeAtIndex(0,`output`).outputTensors)}get losses(){return this._losses}calculateLosses(){return this.losses.map(e=>e())}get updates(){return this._updates}get built(){return this._built}set built(e){this._built=e}get trainable(){return this.trainable_}set trainable(e){this._trainableWeights.forEach(t=>t.trainable=e),this.trainable_=e}get trainableWeights(){return this.trainable_?this._trainableWeights.filter(e=>e.trainable):[]}set trainableWeights(e){this._trainableWeights=e}get nonTrainableWeights(){return this.trainable?this._trainableWeights.filter(e=>!e.trainable).concat(this._nonTrainableWeights):this._trainableWeights.concat(this._nonTrainableWeights)}set nonTrainableWeights(e){this._nonTrainableWeights=e}get weights(){return this.trainableWeights.concat(this.nonTrainableWeights)}get stateful(){return this._stateful}resetStates(){if(!this.stateful)throw Error(`Cannot call the resetStates() method of a non-stateful Layer object.`)}assertInputCompatibility(e){if(e=yj(e),this.inputSpec==null||this.inputSpec.length===0)return;let t=yj(this.inputSpec);if(e.length!==t.length)throw new X(`Layer ${this.name} expects ${t.length} inputs, but it received ${e.length} input tensors. Input received: ${e}`);for(let n=0;n<e.length;n++){let r=e[n],i=t[n];if(i==null)continue;let a=r.rank;if(i.ndim!=null&&a!==i.ndim)throw new X(`Input ${n} is incompatible with layer ${this.name}: expected ndim=${i.ndim}, found ndim=${a}`);if(i.maxNDim!=null&&a>i.maxNDim)throw new X(`Input ${n} is incompatible with layer ${this.name}: expected max_ndim=${i.maxNDim}, found ndim=${a}`);if(i.minNDim!=null&&a<i.minNDim)throw new X(`Input ${n} is incompatible with layer ${this.name}: expected min_ndim=${i.minNDim}, found ndim=${a}.`);if(i.dtype!=null&&r.dtype!==i.dtype)throw new X(`Input ${n} is incompatible with layer ${this.name} : expected dtype=${i.dtype}, found dtype=${r.dtype}.`);if(i.axes){let e=r.shape;for(let t in i.axes){let r=Number(t),a=i.axes[t],o=r>=0?e[r]:e[e.length+r];if(a!=null&&[a,null].indexOf(o)===-1)throw new X(`Input ${n} is incompatible with layer ${this.name}: expected axis ${r} of input shape to have value ${a} but got shape ${e}.`)}}if(i.shape!=null)for(let e=0;e<i.shape.length;++e){let t=i.shape[e],a=r.shape[e];if(t!=null&&a!=null&&t!==a)throw new X(`Input ${n} is incompatible with layer ${this.name}: expected shape=${i.shape}, found shape=${r.shape}.`)}}}call(e,t){return e}invokeCallHook(e,t){this._callHook!=null&&this._callHook(e,t)}setCallHook(e){this._callHook=e}clearCallHook(){this._callHook=null}apply(e,t){t||={},this.assertNotDisposed();let n=yj(e),r=!0;for(let e of n)if(!(e instanceof gN)){r=!1;break}let i=!0;for(let e of n)if(e instanceof gN){i=!1;break}if(r===i)throw new X(`Arguments to apply() must be all SymbolicTensors or all Tensors`);return Qj(this.name,()=>{if(!this.built){this.assertInputCompatibility(e);let t=[];for(let n of yj(e))t.push(n.shape);this.build(vj(t)),this.built=!0,this.initialWeights&&this.setWeights(this.initialWeights),this._refCount===null&&i&&(this._refCount=1)}if(this.assertInputCompatibility(e),i){let r=this.call(e,t),i=yj(r),a=[];for(let e of i)n.indexOf(e)!==-1&&(e=e.clone()),a.push(e);if(r=vj(a),this.activityRegularizer!=null)throw new fj(`Layer invocation in the presence of activity regularizer(s) is not supported yet.`);return r}{let n=xN(e),r=this.computeOutputShape(n),i,a=SN(e);if(this.warnOnIncompatibleInputShape(Array.isArray(e)?n[0]:n),i=r!=null&&r.length>0&&Array.isArray(r[0])?r.map((n,r)=>new gN(a,n,this,yj(e),t,this.name,r)):new gN(a,r,this,yj(e),t,this.name),this.addInboundNode(e,i,null,null,n,r,t),this._refCount++,this.activityRegularizer!=null)throw new fj(`Layer invocation in the presence of activity regularizer(s) is not supported yet.`);return i}})}warnOnIncompatibleInputShape(e){if(this.batchInputShape!=null){if(e.length!==this.batchInputShape.length)console.warn(`The rank of the input tensor provided (shape: ${JSON.stringify(e)}) does not match that of the batchInputShape (${JSON.stringify(this.batchInputShape)}) of the layer ${this.name}`);else{let t=!1;this.batchInputShape.forEach((n,r)=>{n!=null&&e[r]!=null&&e[r]!==n&&(t=!0)}),t&&console.warn(`The shape of the input tensor (${JSON.stringify(e)}) does not match the expectation of layer ${this.name}: ${JSON.stringify(this.batchInputShape)}`)}}}get outputShape(){if(this.inboundNodes==null||this.inboundNodes.length===0)throw new uj(`The layer ${this.name} has never been called and thus has no defined output shape.`);let e=[];for(let t of this.inboundNodes){let n=JSON.stringify(t.outputShapes);e.indexOf(n)===-1&&e.push(n)}if(e.length===1){let e=this.inboundNodes[0].outputShapes;return Array.isArray(e)&&Array.isArray(e[0])&&e.length===1?e[0]:e}throw new uj(`The layer ${this.name} has multiple inbound nodes with different output shapes. Hence the notion of "output shape" is ill-defined for the layer.`)}countParams(){if(!this.built)throw new dj(`You tried to call countParams() on ${this.name}, but the layer is not built yet. Build it first by calling build(batchInputShape).`);return lN(this.weights)}build(e){this.built=!0}getWeights(e=!1){return pN(e?this.trainableWeights:this.weights)}setWeights(e){B(()=>{let t=this.weights;if(t.length!==e.length)throw new X(`You called setWeights(weights) on layer "${this.name}" with a weight list of length ${e.length}, but the layer was expecting ${t.length} weights. Provided weights: ${e}...`);if(t.length===0)return;let n=[],r=pN(t);for(let i=0;i<r.length;++i){let a=r[i],o=t[i],s=e[i];if(!T(a.shape,s.shape))throw new X(`Layer weight shape ${a.shape} not compatible with provided weight shape ${s.shape}`);n.push([o,s])}mN(n)})}addWeight(e,t,n,r,i,a,o,s){if(this._addedWeightNames.indexOf(e)!==-1)throw new X(`Duplicate weight name ${e} for layer ${this.name}`);this._addedWeightNames.push(e),n??=`float32`,this.fastWeightInitDuringBuild&&(r=s==null?iN(`zeros`):s());let c=r.apply(t,n),l=new dN(c,n,e,a,o);return c.dispose(),i!=null&&this.addLoss(()=>i.apply(l.read())),a??=!0,a?this._trainableWeights.push(l):this._nonTrainableWeights.push(l),l}setFastWeightInitDuringBuild(e){this.fastWeightInitDuringBuild=e}addLoss(e){e==null||Array.isArray(e)&&e.length===0||(e=yj(e),this._losses!==void 0&&this._losses!==null&&this.losses.push(...e))}computeOutputShape(e){return e}computeMask(e,t){if(!this.supportsMasking){if(t!=null){if(Array.isArray(t))t.forEach(e=>{if(e!=null)throw TypeError(`Layer ${this.name} does not support masking, but was passed an inputMask.`)});else throw TypeError(`Layer ${this.name} does not support masking, but was passed an inputMask.`)}return null}return t}addInboundNode(e,t,n,r,i,a,o=null){let s=yj(e);t=yj(t),n=yj(n),r=yj(r),i=oN(i),a=oN(a);let c=[],l=[],u=[];for(let e of s)c.push(e.sourceLayer),l.push(e.nodeIndex),u.push(e.tensorIndex);new vN({outboundLayer:this,inboundLayers:c,nodeIndices:l,tensorIndices:u,inputTensors:s,outputTensors:t,inputMasks:n,outputMasks:r,inputShapes:i,outputShapes:a},o);for(let e=0;e<t.length;e++)t[e].sourceLayer=this,t[e].nodeIndex=this.inboundNodes.length-1,t[e].tensorIndex=e}getConfig(){let e={name:this.name,trainable:this.trainable};return this.batchInputShape!=null&&(e.batchInputShape=this.batchInputShape),this.dtype!=null&&(e.dtype=this.dtype),e}disposeWeights(){return this.weights.forEach(e=>e.dispose()),this.weights.length}assertNotDisposed(){if(this._refCount===0)throw Error(`Layer '${this.name}' is already disposed.`)}dispose(){if(!this.built)throw Error(`Cannot dispose Layer ${this.name} because it has not been built yet.`);if(this._refCount===null)throw Error(`Cannot dispose Layer ${this.name} because it has not been used yet.`);this.assertNotDisposed();let e=0;return--this._refCount===0&&(e=this.disposeWeights()),{refCountAfterDispose:this._refCount,numDisposedVariables:e}}};function xN(e){e=yj(e);let t=[];for(let n of e)t.push(n.shape);return vj(t)}function SN(e){return`float32`}function CN(e,t,n){if((t==null||n!=null&&n>0)&&(t=e.sourceLayer,n=e.nodeIndex),t.inboundNodes.length===0)return[e];{let e=t.inboundNodes[n];if(e.inboundLayers.length===0)return e.inputTensors;{let t=[];for(let n=0;n<e.inboundLayers.length;n++){let r=e.inputTensors[n],i=e.inboundLayers[n],a=e.nodeIndices[n],o=CN(r,i,a);for(let e of o)t.indexOf(e)===-1&&t.push(e)}return t}}}Y();var wN=class extends bN{constructor(e){if(super({dtype:e.dtype,name:e.name==null?zj(`input`).toString():e.name}),e.batchSize??=null,e.sparse??=!1,this.trainable=!1,this.built=!0,this.sparse=e.sparse,e.inputShape!=null&&e.batchInputShape!=null)throw new X(`Only provide the inputShape OR batchInputShape argument to inputLayer, not both at the same time.`);let t=e.batchInputShape;if(t==null){if(e.inputShape==null)throw new X("An InputLayer should be passed either a `batchInputShape` or an `inputShape`.");t=[e.batchSize].concat(e.inputShape)}else if(e.batchSize!=null)throw new X(`Cannot specify batchSize if batchInputShape is specified when creating an InputLayer.`);let n=e.dtype||`float32`;this.batchInputShape=t,this.dtype=n,this.inputSpec=[{shape:t}];let r=new gN(this.dtype,this.batchInputShape,this,[],{},this.name);r.nodeIndex=0,r.tensorIndex=0,new vN({outboundLayer:this,inboundLayers:[],nodeIndices:[],tensorIndices:[],inputTensors:[r],outputTensors:[r],inputMasks:[null],outputMasks:[null],inputShapes:[t],outputShapes:[t]})}apply(e,t){throw new X(`Cannot pass any input to an InputLayer's apply() method. InputLayer name: ${this.name}`)}dispose(){return{refCountAfterDispose:this._refCount,numDisposedVariables:0}}getConfig(){return{batchInputShape:this.batchInputShape,dtype:this.dtype,sparse:this.sparse,name:this.name}}};wN.className=`InputLayer`,V(wN);function TN(e){if(e.batchShape==null&&e.shape==null)throw Error("Please provide to Input either a `shape` or a `batchShape` argument. Note that `shape` does not include the batch dimension.");if(e.batchShape!=null&&e.shape!=null)throw new X("Please provide either a `shape` or `batchShape` argument to Input, but not both.");let t=e.batchShape;e.shape!=null&&t==null&&(t=[null].concat(e.shape));let n=e.dtype;return n??=`float32`,new wN({batchInputShape:t,name:e.name,dtype:n,sparse:e.sparse}).inboundNodes[0].outputTensors[0]}Y();function EN(e,t){if(e.dtype==null||e.dtype===t.dtype)return t;try{return z(t,e.dtype)}catch{throw new X(`The dtype of the feed (${t.dtype}) can not be cast to the dtype of the key '${e.name}' (${e.dtype}).`)}}var DN=class e{constructor(t){if(this.id2Value={},this.id2Mask={},this.name2Id={},t instanceof e)for(let e in t.id2Value)this.id2Value[e]=t.id2Value[e],e in t.id2Mask&&(this.id2Mask[e]=t.id2Mask[e]);else{if(t==null)return;for(let e of t)this.add(e.key,e.value)}}add(e,t,n){if(this.id2Value[e.id]==null)this.id2Value[e.id]=EN(e,t),this.name2Id[e.name]=e.id,n!=null&&(this.id2Mask[e.id]=n);else throw new X(`Duplicate key: name=${e.name}, id=${e.id}`);return this}addFeed(e){this.add(e.key,e.value)}hasKey(e){return this.id2Value[e.id]!=null}names(){return Object.keys(this.name2Id)}getValue(e){if(e instanceof gN){if(this.id2Value[e.id]==null)throw new X(`Nonexistent key: ${e.name}`);return this.id2Value[e.id]}{let t=this.name2Id[e];if(t==null)throw new X(`Feed dict has no SymbolicTensor name: ${e}`);return this.id2Value[t]}}getMask(e){if(e instanceof gN){if(this.id2Value[e.id]==null)throw new X(`Nonexistent key: ${e.name}`);return this.id2Mask[e.id]}{let t=this.name2Id[e];if(t==null)throw new X(`Feed dict has no SymbolicTensor name: ${e}`);return this.id2Mask[t]}}disposeMasks(){this.id2Mask!=null&&fc(this.id2Mask)}},ON=new mj,kN=new mj;function AN(e){ON?.setMaxEntries(e),kN?.setMaxEntries(e)}function jN(e,t,n,r){let i=n!=null&&n.training,a=Array.isArray(e),o=a?e:[e],s=o.map(e=>e.name),c=[],l=t.names();for(let e of s)l.indexOf(e)===-1?c.push(null):c.push(t.getValue(e));r!=null&&(r.maxNumTensors=-1/0,r.minNumTensors=1/0);let u=s.join(`,`)+`|`+t.names().sort().join(`,`),d=ON.get(u),f;if(d==null){let e=MN(o,t);d=e.sorted,f=e.recipientCounts,ON.put(u,d),kN.put(u,f)}f={},i||Object.assign(f,kN.get(u));let p=new DN(t);for(let e=0;e<d.length;++e){if(r!=null){let e=uc().numTensors;e>r.maxNumTensors&&(r.maxNumTensors=e),e<r.minNumTensors&&(r.minNumTensors=e)}let a=d[e],o=a.sourceLayer;if(o instanceof wN)continue;let l=[],u=[],m=[],h=!1;for(let e of a.inputs){let n=p.getValue(e),r=p.getMask(e);l.push(n),u.push(r),r!=null&&(h=!0),i||(f[e.name]--,f[e.name]===0&&!t.hasKey(e)&&s.indexOf(e.name)===-1&&!n.isDisposed&&e.sourceLayer.stateful!==!0&&m.push(n))}h&&(n||={},n.mask=u[0]);let g=yj(o.apply(l,n)),_=null;o.supportsMasking&&(_=o.computeMask(l,u));let v=FN(a),y=Array.isArray(v)?v:[v];for(let e=0;e<y.length;++e){p.hasKey(y[e])||p.add(y[e],g[e],Array.isArray(_)?_[0]:_);let t=s.indexOf(y[e].name);t!==-1&&(c[t]=g[e])}i||fc(m)}return p.disposeMasks(),a?c:c[0]}function MN(e,t){y(e!=null&&e.length>0,()=>`Expected at least one fetch, got none`);let n=[],r={};if(e.length===1){let i=PN(e[0],t);n=i.sorted,r=i.recipientMap}else{let i=new Set;for(let a of e){let{sorted:e,recipientMap:o}=PN(a,t);for(let t of e)i.has(t.name)||(n.push(t),i.add(t.name));for(let e in o)r[e]??(r[e]=new Set),o[e].forEach(t=>r[e].add(t))}}return{sorted:n,recipientCounts:NN(r)}}function NN(e){let t={};for(let n in e)t[n]=e[n].size;return t}function PN(e,t){let n=new Set,r=[],i={};for(let e of t.names())n.add(e);let a=[],o=[];for(a.push(e);a.length>0;){let e=a[a.length-1];if(n.has(e.name)){a.pop();continue}let t=o[o.length-1]===a.length-1;if(e.inputs.length===0||t)a.pop(),r.push(e),n.add(e.name),t&&o.pop();else{o.push(a.length-1);for(let t of e.inputs)i[t.name]??(i[t.name]=new Set),i[t.name].add(e.name),n.has(t.name)||a.push(t)}}return{sorted:r,recipientMap:i}}function FN(e){let t;if(e.sourceLayer.inboundNodes.length===1)t=e.sourceLayer.output;else{let n=null;for(let t=0;t<e.sourceLayer.inboundNodes.length;++t)for(let r of e.sourceLayer.inboundNodes[t].outputTensors)if(r.id===e.id){n=t;break}t=e.sourceLayer.getOutputAt(n)}return t}Y(),O().registerFlag(`TOPOLOGICAL_SORT_CACHE_MAX_ENTRIES`,()=>100,AN),Y();function IN(e,t){return B(()=>_m(q(U(e,e),t,!0)))}var LN=class extends Ll{getConfig(){return{}}},RN=class extends LN{constructor(e){super(),this.defaultMaxValue=2,this.defaultAxis=0,this.maxValue=e.maxValue==null?this.defaultMaxValue:e.maxValue,this.axis=e.axis==null?this.defaultAxis:e.axis}apply(e){return B(()=>{let t=IN(e,this.axis),n=vf(t,0,this.maxValue);return U(e,uu(n,H(uM(),t)))})}getConfig(){return{maxValue:this.maxValue,axis:this.axis}}};RN.className=`MaxNorm`,V(RN);var zN=class extends LN{constructor(e){super(),this.defaultAxis=0,this.axis=e.axis==null?this.defaultAxis:e.axis}apply(e){return B(()=>uu(e,H(uM(),IN(e,this.axis))))}getConfig(){return{axis:this.axis}}};zN.className=`UnitNorm`,V(zN);var BN=class extends LN{apply(e){return jv(e)}};BN.className=`NonNeg`,V(BN);var VN=class extends LN{constructor(e){super(),this.defaultMinValue=0,this.defaultMaxValue=1,this.defaultRate=1,this.defaultAxis=0,this.minValue=e.minValue==null?this.defaultMinValue:e.minValue,this.maxValue=e.maxValue==null?this.defaultMaxValue:e.maxValue,this.rate=e.rate==null?this.defaultRate:e.rate,this.axis=e.axis==null?this.defaultAxis:e.axis}apply(e){return B(()=>{let t=IN(e,this.axis),n=H(U(this.rate,vf(t,this.minValue,this.maxValue)),U(1-this.rate,t));return U(e,uu(n,H(uM(),t)))})}getConfig(){return{minValue:this.minValue,maxValue:this.maxValue,rate:this.rate,axis:this.axis}}};VN.className=`MinMaxNorm`,V(VN);var HN={maxNorm:`MaxNorm`,minMaxNorm:`MinMaxNorm`,nonNeg:`NonNeg`,unitNorm:`UnitNorm`};function UN(e){return Cj(e)}function WN(e,t={}){return Tj(e,Rl.getMap().classNameMap,t,`constraint`)}function GN(e){return e==null?null:typeof e==`string`?WN({className:e in HN?HN[e]:e,config:{}}):e instanceof LN?e:WN(e)}Y();async function KN(e){if(e==null)return;let t=[],n=[],r=[];for(let i in e){let a=e[i];if(typeof a!=`number`){let e=a;t.push(e.data()),n.push(i),r.push(e)}}if(t.length>0){let i=await Promise.all(t);for(let t=0;t<i.length;++t)e[n[t]]=i[t][0];fc(r)}}function qN(e){if(e!=null)for(let t in e){let n=e[t];typeof n!=`number`&&n.dispose()}}Y();var JN;(function(e){e[e.SILENT=0]=`SILENT`,e[e.VERBOSE=1]=`VERBOSE`})(JN||={});var YN=class{constructor(){this.validationData=null}setParams(e){this.params=e}async onEpochBegin(e,t){}async onEpochEnd(e,t){}async onBatchBegin(e,t){}async onBatchEnd(e,t){}async onTrainBegin(e){}async onTrainEnd(e){}setModel(e){}},XN=class{constructor(e,t=10){e??=[],this.callbacks=e,this.queueLength=t}append(e){this.callbacks.push(e)}setParams(e){for(let t of this.callbacks)t.setParams(e)}setModel(e){for(let t of this.callbacks)t.setModel(e)}async onEpochBegin(e,t){t??={};for(let n of this.callbacks)await n.onEpochBegin(e,t)}async onEpochEnd(e,t){t??={};for(let n of this.callbacks)await n.onEpochEnd(e,t)}async onBatchBegin(e,t){t??={};for(let n of this.callbacks)await n.onBatchBegin(e,t)}async onBatchEnd(e,t){t??={};for(let n of this.callbacks)await n.onBatchEnd(e,t)}async onTrainBegin(e){e??={};for(let t of this.callbacks)await t.onTrainBegin(e)}async onTrainEnd(e){e??={};for(let t of this.callbacks)await t.onTrainEnd(e)}},ZN=class extends YN{constructor(){super()}async onEpochBegin(e){this.seen=0,this.totals={}}async onBatchEnd(e,t){t??={};let n=t.size==null?0:t.size;this.seen+=n;for(let e in t){let r=t[e];if(typeof r==`number`)this.totals.hasOwnProperty(e)||(this.totals[e]=0),this.totals[e]=this.totals[e]+r*n;else{let t;e in this.totals?t=this.totals[e]:this.totals[e]=0;let i=B(()=>H(this.totals[e],U(r,n)));this.totals[e]=i,t?.dispose()}}}async onEpochEnd(e,t){if(t!=null)for(let e of this.params.metrics)this.totals[e]!=null&&(typeof this.totals[e]==`number`?t[e]=this.totals[e]/this.seen:B(()=>{let n=U(uu(1,this.seen),this.totals[e]);t[e]=n,this.totals[e].dispose(),pc(t[e])}))}},QN=class extends YN{async onTrainBegin(e){this.epoch=[],this.history={}}async onEpochEnd(e,t){t??={},this.epoch.push(e);for(let e in t)this.history[e]??(this.history[e]=[]),this.history[e].push(t[e])}async syncData(){let e=[],t=[],n=[];for(let r in this.history){let i=this.history[r];for(let a=0;a<i.length;++a)if(typeof i[a]!=`number`){let o=i[a];e.push(o.data()),t.push(r),n.push(a)}}let r=await Promise.all(e);for(let e=0;e<r.length;++e)this.history[t[e]][n[e]].dispose(),this.history[t[e]][n[e]]=r[e][0]}},$N=class extends YN{constructor(e,t){if(super(),this.currentEpoch=0,this.nowFunc=e.nowFunc,this.nextFrameFunc=e.nextFrameFunc||Kw,this.yieldEvery=t||`auto`,this.yieldEvery===`auto`&&(this.yieldEvery=125),this.yieldEvery===`never`&&e.onYield!=null)throw Error("yieldEvery is `never` but you provided an `onYield` callback. Either change `yieldEvery` or remove the callback");_e(this.yieldEvery)&&(this.maybeWait=Pj(this.maybeWait.bind(this),this.yieldEvery,this.nowFunc)),this.trainBegin=e.onTrainBegin,this.trainEnd=e.onTrainEnd,this.epochBegin=e.onEpochBegin,this.epochEnd=e.onEpochEnd,this.batchBegin=e.onBatchBegin,this.batchEnd=e.onBatchEnd,this.yield=e.onYield}async maybeWait(e,t,n){let r=[];this.yield!=null&&(await KN(n),r.push(this.yield(e,t,n))),r.push(this.nextFrameFunc()),await Promise.all(r)}async onEpochBegin(e,t){this.currentEpoch=e,this.epochBegin!=null&&(await KN(t),await this.epochBegin(e,t))}async onEpochEnd(e,t){let n=[];this.epochEnd!=null&&(await KN(t),n.push(this.epochEnd(e,t))),this.yieldEvery===`epoch`&&n.push(this.nextFrameFunc()),await Promise.all(n)}async onBatchBegin(e,t){this.batchBegin!=null&&(await KN(t),await this.batchBegin(e,t))}async onBatchEnd(e,t){let n=[];this.batchEnd!=null&&(await KN(t),n.push(this.batchEnd(e,t))),this.yieldEvery===`batch`?n.push(this.nextFrameFunc()):_e(this.yieldEvery)&&n.push(this.maybeWait(this.currentEpoch,e,t)),await Promise.all(n)}async onTrainBegin(e){this.trainBegin!=null&&(await KN(e),await this.trainBegin(e))}async onTrainEnd(e){this.trainEnd!=null&&(await KN(e),await this.trainEnd(e))}};function eP(e,t){return e??={},e instanceof YN?[e]:Array.isArray(e)&&e[0]instanceof YN?e:yj(e).map(e=>new $N(e,t))}var tP=class e{constructor(){}static registerCallbackConstructor(t,n){y(t>=0&&Number.isInteger(t),()=>`Verbosity level is expected to be an integer >= 0, but got ${t}`),e.checkForDuplicate(n),e.constructors[t]??(e.constructors[t]=[]),e.constructors[t].push(n)}static checkForDuplicate(t){for(let n in e.constructors)e.constructors[+n].forEach(e=>{if(e===t)throw new X(`Duplicate callback constructor.`)})}static clear(){e.constructors={}}static createCallbacks(t){let n=[];for(let r in e.constructors){let i=+r;t>=i&&n.push(...e.constructors[i])}return n.map(e=>new e)}};tP.constructors={};function nP(e,t,n,r,i,a,o,s,c){let l=new QN,u=[new ZN,...tP.createCallbacks(t)];e!=null&&u.push(...e),u.push(l);let d=new XN(u);return d.setParams({epochs:n,initialEpoch:r,samples:i,steps:a,batchSize:o,verbose:t,doValidation:s,metrics:c}),{callbackList:d,history:l}}Y();function rP(e,t={},n=!1){return Tj(e,Rl.getMap().classNameMap,t,`layer`,n)}Y();function iP(e,t){return B(()=>{e.dtype!==`float32`&&(e=z(e,`float32`));let n=q(EM(e),t,!0),r=hf(n.shape,uM()),i=_m(kg(n,r));return uu(e,i)})}function aP(e,t){return B(()=>Mg(EM(J(t,e)),-1))}function oP(e,t){return B(()=>Mg(mu(J(t,e)),-1))}function sP(e,t){return B(()=>{let n=J(e,t),r=vf(mu(e),uM(),Number.MAX_VALUE),i=mu(uu(n,r));return U(100,Mg(i,-1))})}function cP(e,t){return B(()=>{let n=vf(t,uM(),Number.MAX_VALUE),r=Oh(H(1,n)),i=vf(e,uM(),Number.MAX_VALUE),a=Oh(H(1,i));return Mg(EM(J(r,a)),-1)})}function lP(e,t){return B(()=>{let n=kg(0,J(1,U(e,t)));return Mg(EM(n),-1)})}function uP(e,t){return B(()=>{let n=kg(0,J(1,U(e,t)));return Mg(n,-1)})}function dP(e,t){return B(()=>{let n=q(U(e,t),-1),r=om(U(J(1,e),t),-1);return kg(0,H(1,J(r,n)))})}function fP(e,t){return B(()=>{let n=Math.log(2),r=J(t,e),i=J(H(r,Hh(U(-2,r))),n);return Mg(i,-1)})}function pP(e,t,n=!1){return B(()=>{if(n)t=Py(t);else{let e=q(t,t.shape.length-1,!0);t=uu(t,e)}return t=vf(t,uM(),1-uM()),kc(q(U(z(e,`float32`),Oh(t)),t.shape.length-1))})}function mP(e,t,n=!1){return B(()=>{let r=z(qm(hM(e)),`int32`);t=vf(t,uM(),1-uM());let i=t.shape;return pP(G(nc(r,i[i.length-1]),i),t,n)})}function hP(e,t){if(!T(e.shape,t.shape))throw new X(`logits and labels must have the same shape, but got shapes ${JSON.stringify(e.shape)} and ${JSON.stringify(t.shape)}`);return B(()=>{let n=jv(t),r=kc(mu(t));return H(J(n,U(t,e)),jh(Mm(r)))})}function gP(e,t){return B(()=>{let n;return n=vf(t,uM(),1-uM()),n=Oh(uu(n,J(1,n))),Mg(hP(e,n),-1)})}function _P(e,t){return B(()=>{let n=vf(e,uM(),1),r=vf(t,uM(),1);return q(U(e,Oh(uu(n,r))),-1)})}function vP(e,t){return B(()=>{let n=Oh(H(uM(),t));return Mg(J(t,U(e,n)),-1)})}function yP(e,t){return B(()=>{let n=iP(e,-1),r=iP(t,-1),i=U(n,r);return kc(q(i,-1))})}var bP={meanSquaredError:aP,meanAbsoluteError:oP,meanAbsolutePercentageError:sP,meanSquaredLogarithmicError:cP,squaredHinge:lP,hinge:uP,categoricalHinge:dP,logcosh:fP,categoricalCrossentropy:pP,sparseCategoricalCrossentropy:mP,binaryCrossentropy:gP,kullbackLeiblerDivergence:_P,poisson:vP,cosineProximity:yP};function xP(e){if(typeof e==`string`){if(e in bP)return bP[e];let t=`Unknown loss ${e}`;throw e.toLowerCase().includes(`softmaxcrossentropy`)&&(t=`Unknown loss ${e}. Use "categoricalCrossentropy" as the string name for tf.losses.softmaxCrossEntropy`),new X(t)}return e}Y();function SP(e,t){return B(()=>{let n=U(.5,c_(t)),r=fM($m(t,n),e.dtype);return Mg(Dp(e,r),-1)})}function CP(e,t){return B(()=>fM(Dp(Mu(e,-1),Mu(t,-1)),`float32`))}function wP(e,t){return B(()=>z(q(ng(Dp(e,1),Dp(t,1))),`float32`))}function TP(e,t){return B(()=>z(q(ng(Dp(e,0),Dp(t,1))),`float32`))}function EP(e,t){return B(()=>{let n=wP(e,t),r=TP(e,t),i=H(n,r);return z(Ap($m(i,0),uu(n,i),0),`float32`)})}function DP(e,t){return gP(e,t)}function OP(e,t){return e.rank===t.rank&&(e=tb(e,[e.rank-1])),t=Mu(t,-1),t.dtype!==e.dtype&&(t=z(t,e.dtype)),z(Dp(e,t),`float32`)}var kP=aP,AP=aP,jP=oP,MP=oP,NP=sP,PP=sP,FP=pP,IP=yP,LP=mP,RP={binaryAccuracy:SP,categoricalAccuracy:CP,precision:EP,categoricalCrossentropy:FP,sparseCategoricalCrossentropy:LP,mse:kP,MSE:AP,mae:jP,MAE:MP,mape:NP,MAPE:PP,cosine:IP};function zP(e){if(typeof e==`string`&&e in RP)return RP[e];if(typeof e!=`string`&&e!=null)return e;throw new X(`Unknown metric ${e}`)}function BP(e){if(gj(e!==null,`Unknown LossOrMetricFn ${e}`),typeof e==`string`)return e;{let t;for(let n of Object.keys(bP))if(bP[n]===e){t=n;break}if(t!==void 0)return t;for(let n of Object.keys(RP))if(RP[n]===e){t=n;break}return t===void 0?e.name:t}}Y();function VP(e){let t={Adagrad:()=>Ww.adagrad(.01),Adadelta:()=>Ww.adadelta(1,.95,uM()),Adam:()=>Ww.adam(.001,.9,.999,uM()),Adamax:()=>Ww.adamax(.002,.9,.999,uM(),0),RMSProp:()=>Ww.rmsprop(.001,.9,0,uM()),SGD:()=>Ww.sgd(.01)};if(t.adagrad=t.Adagrad,t.adadelta=t.Adadelta,t.adam=t.Adam,t.adamax=t.Adamax,t.rmsprop=t.RMSProp,t.sgd=t.SGD,e in t)return t[e]();throw new X(`Unknown Optimizer ${e}`)}var HP=1048576;function UP(e,t,n=!1){if(typeof e!=`object`||!e||Object.getPrototypeOf(e)!==Object.prototype||!WP(e))throw Error(`User-defined metadata is expected to be a JSON object, but is not.`);if(n){let n=JSON.stringify(e);n.length>1048576&&console.warn(`User-defined metadata of model "${t}" is too large in size (length=${n.length} when serialized). It is not recommended to store such large objects in user-defined metadata. Please make sure its serialized length is <= ${HP}.`)}}function WP(e){if(e===null)return!0;if(typeof e==`object`){if(Object.getPrototypeOf(e)===Object.prototype){let t=Object.keys(e);for(let n of t)if(typeof n!=`string`||!WP(e[n]))return!1;return!0}if(Array.isArray(e)){for(let t of e)if(!WP(t))return!1;return!0}return!1}{let t=typeof e;return t===`string`||t===`number`||t===`boolean`}}function GP(e,t,n,r=console.log){let i=qP(e),a=[`Layer (type)`,`Input Shape`,`Output shape`,`Param #`];i?(t||=90,n||=[.32,.61,.89,1]):(t||=115,n||=[.24,.48,.7,.8,1]),n[n.length-1]<=1&&(n=n.map(e=>Math.floor(t*e)));let o;if(!i){a.push(`Receives inputs`),o=[];for(let t in e.nodesByDepth)o.push(...e.nodesByDepth[t])}r(`_`.repeat(t)),JP(a,n,r),r(`=`.repeat(t));let s=e.layers;for(let e=0;e<s.length;++e)i?YP(s[e],n,r):XP(s[e],n,o,r),r((e===s.length-1?`=`:`_`).repeat(t));e.checkTrainableWeightsConsistency();let c=KP(e),l=lN(e.nonTrainableWeights);r(`Total params: ${c+l}`),r(`Trainable params: ${c}`),r(`Non-trainable params: ${l}`),r(`_`.repeat(t))}function KP(e){let t;return t=e.collectedTrainableWeights==null?lN(e.trainableWeights):lN(e.collectedTrainableWeights),t}function qP(e){let t=!0,n=[],r=[];for(let t in e.nodesByDepth)n.push(e.nodesByDepth[t]);for(let e of n){if(e.length>1||e.length===1&&e[0].inboundLayers.length>1){t=!1;break}r.push(...e)}if(t)for(let n of e.layers){let e=!1;for(let i of n.inboundNodes)if(r.indexOf(i)!==-1){if(e){t=!1;break}e=!0}if(!t)break}return t}function JP(e,t,n=console.log){let r=``;for(let n=0;n<e.length;++n)n>0&&(r=r.slice(0,r.length-1)+` `),r+=e[n],r=r.slice(0,t[n]),r+=` `.repeat(t[n]-r.length);n(r)}function YP(e,t,n){let r,i;try{i=e.inboundNodes.map(e=>JSON.stringify(e.inputShapes)).join(`,`)}catch{i=`multiple`}try{r=JSON.stringify(e.outputShape)}catch{r=`multiple`}JP([`${e.name} (${e.getClassName()})`,i,r,e.countParams().toString()],t,n)}function XP(e,t,n,r){let i,a;try{a=e.inboundNodes.map(e=>JSON.stringify(e.inputShapes)).join(`,`)}catch{a=`multiple`}try{i=JSON.stringify(e.outputShape)}catch{i=`multiple`}let o=[];for(let t of e.inboundNodes)if(!(n!=null&&n.length>0&&n.indexOf(t)===-1))for(let e=0;e<t.inboundLayers.length;++e){let n=t.inboundLayers[e].name,r=t.nodeIndices[e],i=t.tensorIndices[e];o.push(`${n}[${r}][${i}]`)}let s=e.name,c=e.getClassName(),l=o.length===0?``:o[0];JP([`${s} (${c})`,a,i,e.countParams().toString(),l],t,r);for(let e=1;e<o.length;++e)JP([``,``,``,``,o[e]],t,r)}function ZP(e,t,n){return(e===`inboundNodes`||e===`outputLayers`||e===`inputLayers`)&&t===0&&typeof n==`string`}function QP(e,t){if(e===null)return null;if(typeof e==`string`)return xj(e);if(typeof e==`number`||typeof e==`boolean`)return e;if(e instanceof Array){let n=[],r=e.length;for(let i=0;i<r;++i){let r=e[i];ZP(t,i,r)?n.push(r):n.push(QP(r,t))}return n}{let t={};for(let n of Object.keys(e)){let r=e[n];if(n===`name`&&typeof r==`string`)t[n]=r;else{let e=xj(n);t[e]=QP(r,e)}}return t}}function $P(e,t){if(e==null)return null;if(typeof e==`string`)return bj(e);if(typeof e==`number`||typeof e==`boolean`)return e;if(e instanceof Array){let n=[],r=e.length;for(let i=0;i<r;++i){let r=e[i];ZP(t,i,r)?n.push(r):n.push($P(r,t))}return n}{let t={};for(let n of Object.keys(e)){let r=e[n],i=bj(n);t[i]=(n===`name`||n===`className`)&&typeof r==`string`?r:$P(r,n)}return t}}var eF=`4.1.0`;Y();var tF=class e extends bN{constructor(t){if(super({}),this.containerNodes=new Set,this.name=t.name,this.name==null){let e=this.getClassName().toLowerCase();this.name=zj(e)}if(this.supportsMasking=!1,this.trainable_=!0,this.inputs=Array.isArray(t.inputs)?t.inputs.slice():[t.inputs],this.outputs=Array.isArray(t.outputs)?t.outputs.slice():[t.outputs],Oj(this.inputs).length!==this.inputs.length)throw new X(`The list of inputs passed to the model is redundant. All inputs should only appear once. Found: ${this.inputs.map(e=>e.name)}`);Oj(this.outputs).length!==this.outputs.length&&console.warn(`The list of outputs passed to the model is redundant. All outputs should only appear once. Found: ${this.outputs.map(e=>e.name)}`),this.inputLayers=[],this.inputLayersNodeIndices=[],this.inputLayersTensorIndices=[],this.outputLayers=[],this.outputLayersNodeIndices=[],this.outputLayersTensorIndices=[],this.layers=[],this.internalContainerRefs=[];for(let e of this.outputs){let t=e.sourceLayer,n=e.nodeIndex,r=e.tensorIndex;this.outputLayers.push(t),this.outputLayersNodeIndices.push(n),this.outputLayersTensorIndices.push(r)}for(let e of this.inputs){let t=e.sourceLayer,n=e.nodeIndex,r=e.tensorIndex;gj(n===0,`input layer has >1 nodes`),gj(r===0,`input layer has >1 tensors`),this.inputLayers.push(t),this.inputLayersNodeIndices.push(n),this.inputLayersTensorIndices.push(r)}this.inputNames=[],this.outputNames=[],this.feedInputShapes=[],this.feedInputNames=[],this.feedOutputNames=[];for(let e=0;e<this.inputLayers.length;e++){let n=this.inputLayers[e];if(!(n instanceof wN))throw TypeError(`Input layers to a LayersModel must be InputLayer objects. Received inputs: ${t.inputs}. Input ${e} (0-based) originates from layer type ${n.getClassName()}.`);this.inputNames.push(n.name),this.feedInputShapes.push(n.batchInputShape),this.feedInputNames.push(n.name)}for(let e of this.outputLayers)this.outputNames.push(e.name);this.internalInputShapes=this.inputs.map(e=>e.shape),this.internalOutputShapes=this.outputs.map(e=>e.shape);let n={},r={},i={},a={},o={},s=[],c=(t,n,r,i,a,l)=>{(i==null||a==null||l==null)&&(i=t.sourceLayer,a=t.nodeIndex,l=t.tensorIndex);let u=i.inboundNodes[a];if(r.indexOf(u)!==-1)throw new dj(`The tensor ${t.name} at layer "${i.name}" is part of a cycle.`);if(n.indexOf(u)!==-1)return;this.containerNodes.add(e.nodeKey(i,a)),i.id in o||(o[i.id]=Object.keys(o).length),r.indexOf(u)===-1&&r.push(u);let d=u.inboundLayers.length;for(let e=0;e<d;e++){let t=u.inputTensors[e],i=u.inboundLayers[e],a=u.nodeIndices[e],o=u.tensorIndices[e];c(t,n,r,i,a,o)}for(n.push(u);r.indexOf(u)>=0;)r.splice(r.indexOf(u),1);s.push(u)},l=[],u=[];for(let e of this.outputs)c(e,l,u);let d=s.slice().reverse();for(let e of d){r[e.id]=e,e.id in n||(n[e.id]=0);let t=n[e.id],o=i[e.outboundLayer.id]==null?0:i[e.outboundLayer.id];t=Math.max(t,o),i[e.outboundLayer.id]=t,a[e.outboundLayer.id]=e.outboundLayer,n[e.id]=t;for(let i=0;i<e.inboundLayers.length;i++){let a=e.inboundLayers[i],o=e.nodeIndices[i],s=a.inboundNodes[o],c=n[s.id]==null?0:n[s.id];n[s.id]=Math.max(t+1,c),r[s.id]=s}}let f={};for(let e in n){let t=n[e];t in f||(f[t]=[]),f[t].push(r[e])}let p={};for(let e in i){let t=i[e];t in p||(p[t]=[]),p[t].push(a[e])}let m=Object.keys(p).map(e=>parseInt(e,10)).sort(Dj);this.layers=[];for(let t of m){let n=p[t];n.sort((e,t)=>{let n=o[e.id],r=o[t.id];return n<r?-1:+(n>r)});for(let t of n)t instanceof e&&this.internalContainerRefs.push(t),this.layers.push(t)}this.layersByDepth=p,m=Object.keys(f).map(e=>parseInt(e,10)).sort(Dj);let h=this.inputs.slice(),g=[];for(let e of m)for(let t of f[e]){let e=t.outboundLayer;if(e!=null){for(let n of t.inputTensors)if(h.indexOf(n)===-1)throw new dj(`Graph disconnected: cannot obtain value for tensor ${n} at layer "${e.name}". The following previous layers were accessed without issue: ${g}`);for(let e of t.outputTensors)h.push(e);g.push(e.name)}}this.nodesByDepth=f;let _=this.layers.map(e=>e.name);for(let e of _){let t=_.filter(t=>t===e).length;if(t!==1)throw new dj(`The name "${e}" is used ${t} times in the model. All layer names should be unique. Layer names: `+JSON.stringify(_))}this.outboundNodes=[],this.inboundNodes=[],new vN({outboundLayer:this,inboundLayers:[],nodeIndices:[],tensorIndices:[],inputTensors:this.inputs,outputTensors:this.outputs,inputMasks:this.inputs.map(e=>null),outputMasks:this.outputs.map(e=>null),inputShapes:this.inputs.map(e=>e.shape),outputShapes:this.outputs.map(e=>e.shape)}),this.built=!0,this._refCount=1}assertNotDisposed(){if(this._refCount===0)throw Error(`Container '${this.name}' is already disposed.`)}dispose(){this.assertNotDisposed();let e={refCountAfterDispose:null,numDisposedVariables:0};if(--this._refCount===0){for(let t of this.layers)e.numDisposedVariables+=t.dispose().numDisposedVariables;for(let t of this.internalContainerRefs)e.numDisposedVariables+=t.dispose().numDisposedVariables}return e.refCountAfterDispose=this._refCount,e}get trainable(){return this.trainable_}set trainable(e){this.layers.forEach(t=>{t._trainableWeights.forEach(t=>t.trainable=e)}),this.trainable_=e}get trainableWeights(){if(this._trainableWeights.length>0)throw new X(`Container instance unexpectedly contains _trainableWeights.The trainable weights of a Container are a union of the trainable weights of its consituent Layers. Its own _trainableWeights must remain an empty Array.`);if(!this.trainable)return[];let e=[];for(let t of this.layers)e=e.concat(t.trainableWeights);return e}get nonTrainableWeights(){let e=[];for(let t of this.layers)e.push(...t.nonTrainableWeights);if(!this.trainable){let t=[];for(let e of this.layers)t.push(...e.trainableWeights);return t.concat(e)}return e}get weights(){return this.trainableWeights.concat(this.nonTrainableWeights)}loadWeights(e,t=!0){let n={},r=0;for(let e of this.layers)for(let t of e.weights){if(n[t.originalName]!=null)throw new X(`Duplicate weight name: ${t.originalName}`);n[t.originalName]=t,r++}let i=[];for(let r in e){let a=r;if(n[r]==null){let e=r.split(`/`);a=e.slice(0,-2).concat([e[e.length-1]]).join(`/`)}if(n[a]!=null)i.push([n[a],e[r]]);else if(t)throw new X(`Provided weight data has no target variable: ${r}`);delete n[a]}if(t){let e=[];for(let t in n)e.push(t);if(e.length>0)throw new X(`${e.length} of ${r} weights are not set: ${e}`)}mN(i)}updatedConfig(){let e=this.getConfig(),t={};return t.className=this.getClassName(),t.config=e,t.kerasVersion=`tfjs-layers ${eF}`,t.backend=`TensorFlow.js`,t}toJSON(e,t=!0){let n=$P(this.updatedConfig());return t?JSON.stringify(n):n}call(e,t){return B(()=>{e=yj(e);let n=new DN;for(let t=0;t<this.inputs.length;++t)n.add(this.inputs[t],e[t]);return jN(this.outputs,n,t)})}computeMask(e,t){return B(()=>{e=yj(e);let n;return n=t==null?hj(null,e.length):yj(t),this.runInternalGraph(e,n)[1]})}computeOutputShape(e){let t=oN(e);if(t.length!==this.inputLayers.length)throw new X(`Invalid inputShape argument ${e}: model has ${this.inputLayers.length} tensor inputs.`);let n={};for(let e=0;e<t.length;e++){let r=this.inputLayers[e],i=t[e],a=r.name+`_0_0`;n[a]=i}let r=Object.keys(this.nodesByDepth).map(e=>parseInt(e,10)).sort(Dj);if(r.length>1)for(let e of r){let t=this.nodesByDepth[e];for(let e of t){let t=e.outboundLayer;if(this.inputLayers.map(e=>e.id).indexOf(t.id)!==-1)continue;let r=[];for(let t=0;t<e.inboundLayers.length;t++){let i=e.inboundLayers[t],a=e.nodeIndices[t],o=e.tensorIndices[t],s=n[`${i.name}_${a}_${o}`];r.push(s)}let i=oN(t.computeOutputShape(vj(r))),a=t.inboundNodes.indexOf(e);for(let e=0;e<i.length;e++){let r=`${t.name}_${a}_${e}`;n[r]=i[e]}}}let i=[],a=[];for(let e=0;e<this.outputLayers.length;e++){let t=this.outputLayers[e],n=this.outputLayersNodeIndices[e],r=this.outputLayersTensorIndices[e],i=`${t.name}_${n}_${r}`;a.push(i)}for(let e=0;e<a.length;e++){let t=a[e];gj(t in n),i.push(n[t])}return vj(i)}runInternalGraph(e,t){t??=hj(null,e.length);let n={};for(let r=0;r<this.inputs.length;++r){let i=this.inputs[r],a=e[r],o=t[r];n[i.id]=[a,o]}let r=Object.keys(this.nodesByDepth).map(e=>parseInt(e,10)).sort(Dj);for(let e of r){let t=this.nodesByDepth[e];for(let e of t){let t=e.outboundLayer,r=e.inputTensors,i=e.outputTensors,a=[];for(let e of r)e.id in n&&a.push(n[e.id]);if(a.length===r.length){let r={},o,s,c,l;if(e.callArgs!=null&&(r=e.callArgs),a.length===1){let[e,n]=a[0];r.mask??(r.mask=n),c=yj(t.call(e,r)),l=yj(t.computeMask(e,n)),o=[e],s=[n]}else o=a.map(e=>e[0]),s=a.map(e=>e[1]),r.mask??(r.mask=s),c=yj(t.call(o,r)),l=yj(t.computeMask(o,s));if(t.activityRegularizer)throw new fj(`LayersModel invocation with concrete Tensor value(s) in the presence of activity regularizer(s) is not supported yet.`);for(let e=0;e<i.length;++e){let t=i[e],r=c[e],a=l[e];n[t.id]=[r,a]}}}}let i=[],a=[],o=[];for(let e of this.outputs){gj(e.id in n,`Could not compute output ${e.name} : ${e.id}`);let[t,r]=n[e.id];o.push(t.shape),i.push(t),a.push(r)}return[i,a,o]}buildNodeConversionMap(t){let n={},r;for(let t of this.layers){r=+(t instanceof e);for(let i=0;i<t.inboundNodes.length;i++){let a=e.nodeKey(t,i);this.containerNodes.has(a)&&(n[a]=r,r+=1)}}return n}getLayer(e,t){if(t!=null){if(this.layers.length<=t)throw new X(`Was asked to retrieve layer at index ${t}, but model only has ${this.layers.length} layer(s).`);return this.layers[t]}if(e==null)throw new X(`Provide either a layer name or layer index`);for(let t of this.layers)if(t.name===e)return t;throw new X(`No such layer: ${e}`)}calculateLosses(){return B(()=>{let t=[];for(let n of this.layers)for(let r=0;r<n.inboundNodes.length;++r){let i=e.nodeKey(n,r);this.containerNodes.has(i)&&t.push(...n.calculateLosses())}return t})}getConfig(){let t={name:this.name},n=this.buildNodeConversionMap(this.layers),r=[];for(let t of this.layers){let i=t.getClassName(),a=t.getConfig(),o=[];for(let r=0;r<t.inboundNodes.length;r++){let i=t.inboundNodes[r],a=e.nodeKey(t,r),s={};if(this.containerNodes.has(a)){if(i.callArgs)try{JSON.stringify(i.callArgs),s=i.callArgs}catch{console.warn(`Layer ${t.name} was passed non-serializable keyword arguments: ${i.callArgs}. They will not be included in the serialized model (and thus will be missing at deserialization time).`),s={}}if(i.inboundLayers.length>0){let t=[];for(let r=0;r<i.inboundLayers.length;r++){let a=i.inboundLayers[r],o=i.nodeIndices[r],c=i.tensorIndices[r],l=n[e.nodeKey(a,o)];l??=0,t.push([a.name,l,c,s])}o.push(t)}}}let s={};s.name=t.name,s.className=i,s.config=a,s.inboundNodes=o,r.push(s)}t.layers=r;let i=[];for(let t=0;t<this.inputLayers.length;t++){let r=this.inputLayers[t],a=this.inputLayersNodeIndices[t],o=e.nodeKey(r,a);if(!this.containerNodes.has(o))continue;let s=n[o];s??=0;let c=this.inputLayersTensorIndices[t];i.push([r.name,s,c])}t.inputLayers=i;let a=[];for(let t=0;t<this.outputLayers.length;t++){let r=this.outputLayers[t],i=this.outputLayersNodeIndices[t],o=e.nodeKey(r,i);if(!this.containerNodes.has(o))continue;let s=n[o];s??=0;let c=this.outputLayersTensorIndices[t];a.push([r.name,s,c])}return t.outputLayers=a,t}static fromConfig(e,t,n={},r=!1){let i={},a={};function o(e,t){e.name in a?a[e.name].push(t):a[e.name]=[t]}function s(e,t){let n=[],r;for(let a of t){let s=a[0],c=a[1],l=a[2];if(r=a[3]==null?{}:a[3],!(s in i)){o(e,t);return}let u=i[s];if(u.inboundNodes.length<=c){o(e,t);return}let d=u.inboundNodes[c];n.push(d.outputTensors[l])}n.length>0&&e.apply(vj(n),r)}function c(e){let n=e.name,a=rP(e,t.customObjects==null?{}:t.customObjects);a.setFastWeightInitDuringBuild(r),i[n]=a,e.inboundNodes.forEach(e=>{if(!(e instanceof Array))throw new X(`Corrupted configuration, expected array for nodeData: ${e}`);o(a,e)})}let l=t.name,u=t.layers;for(let e of u)c(e);for(;!kj(a);)for(let e of u){let t=i[e.name];if(t.name in a){let e=a[t.name];delete a[t.name];for(let n of e)s(t,n)}}let d=[],f=[],p=t.inputLayers;for(let e of p){let t=e[0],n=e[1],r=e[2];gj(t in i);let a=i[t].inboundNodes[n].outputTensors;d.push(a[r])}let m=t.outputLayers;for(let e of m){let t=e[0],n=e[1],r=e[2];gj(t in i);let a=i[t].inboundNodes[n].outputTensors;f.push(a[r])}return new e({inputs:d,outputs:f,name:l})}get stateful(){if(this._stateful)throw new X(`Container instance unexpectedly has _stateful = true. The statefulness of a Container is determined by the Layers it contains. Its _stateful property must remain the default false.`);for(let e of this.layers)if(e.stateful)return!0;return!1}resetStates(){B(()=>{this.layers.forEach(e=>{e.stateful&&e.resetStates()})})}};Y();function nF(e,t,n){let r=t.length;if(e==null||Array.isArray(e)&&e.length===0)return t.map(e=>null);if(r===1)return Array.isArray(e)&&e.length===1?e:typeof e==`object`&&t[0]in e?[e[t[0]]]:[e];if(Array.isArray(e)){if(e.length!==r)throw Error(`Provided ${n} is an array of ${e.length} element(s), but the model has ${r} outputs. Make sure a set of weights is provided for each model output.`);return e}if(typeof e==`object`&&Object.keys(e).length>0&&typeof e[Object.keys(e)[0]]==`object`){let n=[];return t.forEach(t=>{t in e?n.push(e[t]):n.push(null)}),n}throw Error(`The model has multiple (${r}) outputs, so ${n} must be either an array with ${r} elements or an object with ${t} keys. Provided ${n} not understood: ${JSON.stringify(e)}`)}function rF(e,t){return nF(e,t,`classWeight`)}async function iF(e,t,n,r){if(t!=null||r!=null)throw Error(`Support sampleWeight is not implemented yet`);if(n!=null){let t=B(()=>{if(e.shape.length===1)return fs(e);if(e.shape.length===2){if(e.shape[1]>1)return Mu(e,1);if(e.shape[1]===1)return G(e,[e.shape[0]]);throw Error(`Encountered unexpected last-dimension size (${e.shape[1]}) during handling of class weights. The size is expected to be >= 1.`)}throw Error(`Unexpected rank of target (y) tensor (${e.rank}) during handling of class weights. The rank is expected to be 1 or 2.`)}),r=Array.from(await t.data());fc(t);let i=[];return r.forEach(e=>{if(n[e]==null)throw Error(`classWeight must contain all classes in the training data. The class ${e} exists in the data but not in classWeight`);i.push(n[e])}),hb(i,`float32`)}return null}function aF(e,t){return U(e,t)}Y();var oF=32;function sF(e,t){let n,r,i=t;n=i.xs,r=i.ys,y(n!=null&&r!=null,()=>`A Dataset iterator for fitDataset() is expected to generate objects of the form \`{xs: xVal, ys: yVal}\`, where the two values may be \`tf.Tensor\`, an array of Tensors, or a map of string to Tensor.  The provided Dataset instead generates ${t}`);let a=cF(`input`,e.inputNames,n),o=cF(`output`,e.outputNames,r),s=a[0].shape[0];y(a.length===e.inputs.length,()=>`LayersModel has ${e.inputs.length} inputs, but the dataset provides ${a.length} inputs.  (Expected input keys: ${JSON.stringify(e.inputNames)})`),y(o.length===e.outputs.length,()=>`LayersModel has ${e.outputs.length} outputs, but the dataset provides ${o.length} outputs.  (Expected output keys: ${JSON.stringify(e.outputNames)})`);for(let t=0;t<a.length;t++)y(a[t].shape[0]===s,()=>`Batch size mismatch: input ${e.inputNames[t]} has ${a[t].shape[0]}; expected  ${s} based on input ${e.inputNames[0]}.`);for(let t=0;t<o.length;t++)y(o[t].shape[0]===s,()=>`Batch size mismatch: output ${e.outputNames[t]} has ${o[t].shape[0]}; expected  ${s} based on input ${e.inputNames[0]}.`);return{xs:a,ys:o}}function cF(e,t,n){if(n instanceof Xi)return[n];if(Array.isArray(n))return y(n.length===t.length,()=>`Received an array of ${n.length} Tensors, but expected ${t.length} to match the ${e} keys ${t}.`),n;{let r=[];for(let i of t){if(n[i]==null)throw new X(`The feature data generated by the dataset lacks the required ${e} key '${i}'.`);r.push(n[i])}return r}}function lF(e){if(e.length===3)throw new fj(`Validation with sample weights is not implemented yet.`);return{xs:e[0],ys:e[1]}}async function uF(e,t,n){let r=n.batchesPerEpoch!=null;if(y(e.optimizer!=null,()=>`You must compile a model before training/testing. Use LayersModel.compile(modelCompileConfig).`),y(n!=null,()=>`For fitDataset(), the 2nd argument (config) is required, but it is not provided in this call.`),y(n.epochs!=null&&n.epochs>0&&Number.isInteger(n.epochs),()=>`For fitDataset(), config.epochs is expected to be a positive integer, but got ${n.epochs}`),y(!r||n.batchesPerEpoch>0&&Number.isInteger(n.batchesPerEpoch),()=>`For fitDataset(), config.batchesPerEpoch is expected to be a positive integer if specified, but got ${n.batchesPerEpoch}`),y(n.validationSplit==null,()=>"`validationSplit` is not supported by `fitDataset()`. Use validationData instead."),e.isTraining)throw Error(`Cannot start training because another fit() call is ongoing.`);e.isTraining=!0;try{let i=n.validationData!=null,a,o;if(i){if(fF(n.validationData))y(n.validationBatches==null||n.validationBatches>0&&Number.isInteger(n.validationBatches),()=>`For fitDataset() with dataset-based validation, config.validationBatches is expected not to be provided, or to be a positive integer, but got ${n.validationBatches}`);else{let e=lF(n.validationData);a=e.xs,o=e.ys}}let s=e.makeTrainFunction(),c=e.getDedupedMetricsNames(),l;l=i?c.slice().concat(c.map(e=>`val_`+e)):c.slice();let{callbackList:u,history:d}=nP(eP(n.callbacks,n.yieldEvery),n.verbose==null?1:n.verbose,n.epochs,null,null,dF(t,n),null,i,l);u.setModel(e),e.history=d,await u.onTrainBegin(),e.stopTraining_=!1;let f=n.initialEpoch==null?0:n.initialEpoch,p=await t.iterator();for(;f<n.epochs;){let l={};await u.onEpochBegin(f);let d=0,m=0;for(r||(p=await t.iterator());!r||d<n.batchesPerEpoch;){let t=await p.next();if(r&&t.done){console.warn(`You provided \`batchesPerEpoch\` as ${n.batchesPerEpoch}, but your dataset iterator ran out of data after ${d} batches; interrupting training. Make sure that your dataset can generate at least \`batchesPerEpoch * epochs\` batches (in this case, ${n.batchesPerEpoch*n.epochs} batches). You may need to use the repeat() function when building your dataset.`);break}if(t.value!=null){let{xs:r,ys:i}=sF(e,t.value),a={};a.batch=m,a.size=r[0].shape[0],await u.onBatchBegin(m,a);let o=[];if(n.classWeight!=null){let t=rF(n.classWeight,e.outputNames);for(let e=0;e<t.length;++e)o.push(await iF(i[e],null,t[e]))}let l=r.concat(i).concat(o),f=s(l);fc(l);for(let e=0;e<c.length;++e){let t=c[e],n=f[e];a[t]=n,pc(n)}await u.onBatchEnd(m,a),qN(a),m++,d++}if(r?d>=n.batchesPerEpoch:t.done){if(i){let t;t=fF(n.validationData)?yj(await e.evaluateDataset(n.validationData,{batches:n.validationBatches})):yj(e.evaluate(a,o,{batchSize:n.validationBatchSize==null?oF:n.validationBatchSize,verbose:0}));for(let n=0;n<e.metricsNames.length;++n)l[`val_${e.metricsNames[n]}`]=t[n]}break}if(e.stopTraining_)break}if(await u.onEpochEnd(f,l),f++,e.stopTraining_)break}return await u.onTrainEnd(),await e.history.syncData(),e.history}finally{e.isTraining=!1}}function dF(e,t){let n=null;return t.batchesPerEpoch==null?Number.isFinite(e.size)&&(n=e.size):n=t.batchesPerEpoch,n}function fF(e){return typeof e.iterator==`function`}function pF(e){return typeof e.next==`function`}async function mF(e,t,n){n||={};let r=n.batches!=null,i=e.testFunction,a=[];if(n.verbose>0)throw new fj(`Verbose mode is not implemented yet.`);y(!r||n.batches>0&&Number.isInteger(n.batches),()=>`Test loop expects \`batches\` to be a positive integer, but received ${JSON.stringify(n.batches)}`);let o=pF(t)?t:await t.iterator(),s=0,c=0;for(;!r||c<n.batches;){let t=await o.next();if(a=B(()=>{if(t.value){let{xs:n,ys:r}=sF(e,t.value),o=n.concat(r),l=B(()=>i(o));if(fc(o),c===0)for(let e=0;e<l.length;++e)a.push(mm(0));let u=o[0].shape[0];for(let e=0;e<l.length;++e){let t=l[e],n=a[e];a[e]=B(()=>H(a[e],U(u,t))),c>0&&fc(n)}fc(l),s+=u,++c}return a}),t.done){r&&console.warn(`Your dataset iterator ran out of data during evaluateDataset(). Interrupting evalution. Make sure that your dataset can generate at least \`batches\` batches (in this case, ${n.batches} batches). You may need to use the repeat() function when building your dataset.`);break}}for(let e=0;e<a.length;++e){let t=a[e];a[e]=uu(a[e],s),fc(t)}return vj(a)}Y();function hF(e){y(e>0&&Number.isInteger(e),()=>`batchSize is required to be a positive integer, but got ${e}`)}function gF(e,t,n){return e==null?[null]:Array.isArray(e)?e.map(e=>_M(e,t,n-t)):_M(e,t,n-t)}function _F(e,t){return B(()=>e==null?null:Array.isArray(e)?e.map(e=>_F(e,t)):TM(e,t.dtype===`int32`?t:z(t,`int32`)))}function vF(e,t){let n=[],r=0,i=null;for(;r<e;)i=r+t,i>=e&&(i=e),n.push([r,i]),r=i;return n}function yF(e){let t=[];e instanceof Xi&&(e=[e]);for(let n=0;n<e.length;++n){let r=e[n];if(r.rank===1)t.push(pM(r,1));else if(r.rank===0)throw Error(`Expected tensor to be at least 1D, but received a 0D tensor (scalar).`);else t.push(r)}return t}function bF(e,t){if(e==null)return;let n=[];if(t instanceof Xi)n.push(t.id);else if(Array.isArray(t))t.forEach(e=>n.push(e.id));else if(t!=null)for(let e in t){let r=t[e];n.push(r.id)}let r=[];if(e instanceof Xi)n.indexOf(e.id)===-1&&r.push(e);else if(Array.isArray(e))e.forEach(e=>{n.indexOf(e.id)===-1&&r.push(e)});else if(e!=null)for(let t in e){let i=e[t];n.indexOf(i.id)===-1&&r.push(i)}r.forEach(e=>{e.isDisposed||e.dispose()})}Y();function xF(e){return e instanceof Xi}function SF(e){return Array.isArray(e)}function CF(e){return!xF(e)&&!SF(e)}function wF(e,t,n,r=!0,i=``){if(t==null||t.length===0){if(e!=null){let t=!1;if(SF(e)&&e.length>0)t=!0;else if(CF(e)){for(let n in e)if(e.hasOwnProperty(n)){t=!0;break}}else t=!0;if(t)throw new X(`Error when checking model ${i} expected no data, but got ${e}`)}return[]}if(e==null)return t.map(e=>null);let a;if(CF(e)){e=e,a=[];for(let n of t){if(e[n]==null)throw new X(`No data provided for "${n}". Need data for each key in: ${t}`);a.push(e[n])}}else if(SF(e)){if(e=e,e.length!==t.length)throw new X(`Error when checking model ${i}: the Array of Tensors that you are passing to your model is not the size the model expected. Expected to see ${t.length} Tensor(s), but instead got the following list of Tensor(s): ${e}`);a=e}else{if(e=e,t.length>1)throw new X(`The model ${i} expects ${t.length} Tensor(s), but only received one Tensor. Found: Tensor with shape ${e.shape}`);a=[e]}if(a=yF(a),n!=null)for(let e=0;e<t.length;++e){if(n[e]==null)continue;let o=a[e];if(o.shape.length!==n[e].length)throw new X(`Error when checking ${i}: expected ${t[e]} to have ${n[e].length} dimension(s). but got array with shape ${o.shape}`);for(let t=0;t<n[e].length;++t){if(t===0&&!r)continue;let a=o.shape[t],s=n[e][t];if(s!=null&&s>=0&&a!==s)throw new X(`${i} expected a batch of elements where each example has shape [${n[e].slice(1,n[e].length)}] (i.e.,tensor shape [*,${n[e].slice(1,n[e].length)}]) but the ${i} received an input with ${o.shape[0]} examples, each with shape [${o.shape.slice(1,o.shape.length)}] (tensor shape [${o.shape}])`)}}return a}function TF(e,t,n){let r=Oj(e.map(e=>e.shape[0]));r.sort();let i=Oj(t.map(e=>e.shape[0]));if(i.sort(),r.length>1)throw new X(`All input Tensors (x) should have the same number of samples. Got array shapes: ${JSON.stringify(e.map(e=>e.shape))}`);if(i.length>1)throw new X(`All target Tensors (y) should have the same number of samples. Got array shapes: ${JSON.stringify(t.map(e=>e.shape))}`);if(r.length>0&&i.length>0&&!T(r,i))throw new X(`Input Tensors should have the same number of samples as target Tensors. Found ${r[0]} input sample(s) and ${i[0]} target sample(s).`)}function EF(e,t,n){let r=[aP,gP,pP];for(let i=0;i<e.length;++i){let a=e[i],o=t[i],s=n[i];if(o!=null){if(o===pP&&a.shape[a.shape.length-1]===1)throw new X(`You are passing a target array of shape ${a.shape} while using a loss 'categorical_crossentropy'. 'categorical_crossentropy'expects targets to be binary matrices (1s and 0s) of shape [samples, classes].`);if(r.indexOf(o)!==-1){let e=a.shape.slice(1),t=s.slice(1);for(let n=0;n<e.length;++n){let r=e[n],i=t[n];if(i!=null&&r!==i)throw new X(`A target Tensor with shape ${a.shape} was passed for an output of shape ${s}, while using a loss function that expects targets to have the same shape as the output.`)}}}}}function DF(e,t,n,r=!0,i=``){let a;if(Array.isArray(e)){if(e.length!==t.length)throw new X(`Error when checking model ${i}: the Array of Tensors that you are passing to your model is not the size the the model expected. Expected to see ${t.length} Tensor(s), but instead got ${e.length} Tensors(s).`);a=e}else{if(t.length>1)throw new X(`The model expects ${t.length} ${i} Tensors, but only received one Tensor. Found: array with shape ${JSON.stringify(e.shape)}.`);a=[e]}if(n!=null)for(let e=0;e<t.length;++e){if(n[e]==null)continue;let o=a[e];if(o.shape.length!==n[e].length)throw new X(`Error when checking ${i}: expected ${t[e]} to have ${n[e].length} dimension(s), but got array with shape ${JSON.stringify(o.shape)}`);for(let a=0;a<n[e].length;++a){if(a===0&&!r)continue;let s=o.shape[a],c=n[e][a];if(c!=null&&c!==s)throw new X(`Error when checking ${i}: expected ${t[e]} to have shape ${JSON.stringify(n[e])} but got array with shape ${JSON.stringify(o.shape)}.`)}}}function OF(e,t){if(e==null||Array.isArray(e)&&e.length===0)return t.map(e=>[]);let n;if(typeof e==`string`||typeof e==`function`)n=[e];else if(Array.isArray(e)||typeof e==`object`)n=e;else throw TypeError(`Type of metrics argument not understood. Expected an string,function, Array, or Object, found: ${e}`);if(Array.isArray(n))return t.map(e=>n);{let e=[];for(let r of t){let t=n.hasOwnProperty(r)?n[r]:[];Array.isArray(t)||(t=[t]),e.push(t)}return e}}var kF=`layers-model`,AF=class extends tF{constructor(e){super(e),this.isTraining=!1}summary(e,t,n=console.log){if(!this.built)throw new X(`This model has never been called, thus its weights have not been created yet. So no summary can be displayed. Build the model first (e.g., by calling it on some test data).`);GP(this,e,t,n)}compile(e){if(e.loss??=[],this.loss=e.loss,typeof e.optimizer==`string`)this.optimizer_=VP(e.optimizer),this.isOptimizerOwned=!0;else{if(!(e.optimizer instanceof Ew))throw new X(`User-defined optimizer must be an instance of tf.Optimizer.`);this.optimizer_=e.optimizer,this.isOptimizerOwned=!1}let t=[];if(!Array.isArray(e.loss)&&typeof e.loss!=`string`&&typeof e.loss!=`function`){e.loss=e.loss;for(let t in e.loss)if(this.outputNames.indexOf(t)===-1)throw new X(`Unknown entry in loss dictionary: "${t}". Only expected the following keys: ${this.outputNames}`);for(let n of this.outputNames)e.loss[n]??console.warn(`Output "${n}" is missing from loss dictionary. We assume this was done on purpose, and we will not be expecting data to be passed to ${n} during training`),t.push(xP(e.loss[n]))}else if(Array.isArray(e.loss)){if(e.loss.length!==this.outputs.length)throw new X(`When passing an Array as loss, it should have one entry per model output. The model has ${this.outputs.length} output(s), but you passed loss=${e.loss}.`);t=e.loss.map(e=>xP(e))}else{let n=xP(e.loss);this.outputs.forEach(e=>{t.push(n)})}this.lossFunctions=t,this.feedOutputNames=[],this.feedOutputShapes=[],this.feedLossFns=[];for(let e=0;e<this.outputs.length;++e){let t=this.internalOutputShapes[e],n=this.outputNames[e];this.feedOutputNames.push(n),this.feedOutputShapes.push(t),this.feedLossFns.push(this.lossFunctions[e])}let n=[];this.metrics=e.metrics,this.metricsNames=[`loss`],this.metricsTensors=[],Qj(`loss`,()=>{for(let e=0;e<this.outputs.length;++e){if(n.indexOf(e)!==-1)continue;let t=this.lossFunctions[e];this.outputs.length>1&&(this.metricsTensors.push([t,e]),this.metricsNames.push(this.outputNames[e]+`_loss`))}});let r=OF(e.metrics,this.outputNames),i=(e,t,n)=>{this.outputNames.length>1&&(t=this.outputNames[e]+`_`+t),this.metricsNames.push(t),this.metricsTensors.push([n,e])};Qj(`metric`,()=>{for(let e=0;e<this.outputs.length;++e)n.indexOf(e)===-1&&(t=>{let n,r,a;for(let o of t){if(typeof o==`string`&&[`accuracy`,`acc`,`crossentropy`,`ce`].indexOf(o)!==-1){let t=this.internalOutputShapes[e];t[t.length-1]===1||this.lossFunctions[e]===gP?[`accuracy`,`acc`].indexOf(o)===-1?[`crossentropy`,`ce`].indexOf(o)!==-1&&(r=DP):r=SP:this.lossFunctions[e]===mP?[`accuracy`,`acc`].indexOf(o)===-1?[`crossentropy`,`ce`].indexOf(o)!==-1&&(r=LP):r=OP:[`accuracy`,`acc`].indexOf(o)===-1?[`crossentropy`,`ce`].indexOf(o)!==-1&&(r=FP):r=CP;let i;[`accuracy`,`acc`].indexOf(o)===-1?[`crossentropy`,`ce`].indexOf(o)!==-1&&(i=`ce`):i=`acc`,a=r,n=``+i}else a=zP(o),n=``+BP(o);let t;Qj(n,()=>{t=a}),i(e,n,t)}})(r[e])}),this.collectedTrainableWeights=this.trainableWeights}checkTrainableWeightsConsistency(){this.collectedTrainableWeights!=null&&this.trainableWeights.length!==this.collectedTrainableWeights.length&&console.warn("Discrepancy between trainableweights and collected trainable weights. Did you set `model.trainable` without calling `model.compile()` afterwards?")}evaluate(e,t,n={}){let r=n.batchSize==null?32:n.batchSize;hF(r);let i=this.standardizeUserDataXY(e,t,!0,r);try{let e=i[0].concat(i[1]);this.makeTestFunction();let t=this.testFunction;return vj(this.testLoop(t,e,r,n.verbose,n.steps))}finally{bF(i[0],e),bF(i[1],t)}}async evaluateDataset(e,t){return this.makeTestFunction(),mF(this,e,t)}checkNumSamples(e,t,n,r=`steps`){let i;if(n!=null){if(i=null,t!=null)throw new X(`If ${r} is set, batchSize must be null or undefined.Got batchSize = ${t}`)}else if(e!=null)i=Array.isArray(e)?e[0].shape[0]:e.shape[0];else throw new X(`Either the input data should have a defined shape, or ${r} shoud be specified.`);return i}execute(e,t){if(Array.isArray(t)&&t.length===0)throw new X("`outputs` is an empty Array, which is not allowed.");let n=Array.isArray(t),r=n?t:[t],i=this.retrieveSymbolicTensors(r),a=new DN;if(e instanceof Xi&&(e=[e]),Array.isArray(e)){if(e.length!==this.inputs.length)throw new X(`The number of inputs provided (${e.length}) does not match the number of inputs of this model (${this.inputs.length}).`);for(let t=0;t<this.inputs.length;++t)a.add(this.inputs[t],e[t])}else for(let t of this.inputs){let n=e[t.name];if(n==null)throw new X(`No value is provided for the model's input ${t.name}`);a.add(t,n)}let o=jN(i,a);return n?o:o[0]}retrieveSymbolicTensors(e){let t=hj(null,e.length),n=e.length;for(let r of this.layers){let i=Array.isArray(r.output)?r.output:[r.output],a=i.map(e=>e.name);for(let r=0;r<e.length;++r){let o=a.indexOf(e[r]);if(o!==-1&&(t[r]=i[o],n--),n===0)break}if(n===0)break}if(n>0){let n=[];throw t.forEach((t,r)=>{t??n.push(e[r])}),new X(`Cannot find SymbolicTensors for output name(s): ${JSON.stringify(n)}`)}return t}predictLoop(e,t=32,n=!1){return B(()=>{let r=this.checkNumSamples(e);if(n)throw new fj(`Verbose predictLoop() is not implemented yet.`);let i=vF(r,t),a=this.outputs.map(e=>[]);for(let t=0;t<i.length;++t)B(()=>{let n=i[t][0],r=i[t][1],a=gF(e,n,r),o=[];if(Array.isArray(a))for(let e=0;e<a.length;++e)o.push({key:this.inputs[e],value:a[e]});else o.push({key:this.inputs[0],value:a});let s=new DN(o);return jN(this.outputs,s)}).forEach((e,t)=>a[t].push(e));return vj(a.map(e=>Td(e,0)))})}predict(e,t={}){let n=yF(e);DF(n,this.inputNames,this.feedInputShapes,!1);try{let e=t.batchSize==null?32:t.batchSize;return hF(e),this.predictLoop(n,e)}finally{bF(n,e)}}predictOnBatch(e){DF(e,this.inputNames,this.feedInputShapes,!0);let t=(Array.isArray(e)?e[0]:e).shape[0];return this.predictLoop(e,t)}standardizeUserDataXY(e,t,n=!0,r){if(this.optimizer_==null)throw new dj(`You must compile a model before training/testing. Use LayersModel.compile(modelCompileArgs).`);let i=[];for(let e=0;e<this.feedOutputShapes.length;++e){let t=this.feedOutputShapes[e];this.feedLossFns[e]===mP?i.push(t.slice(0,t.length-1).concat([1])):i.push(t)}if(e=wF(e,this.feedInputNames,this.feedInputShapes,!1,`input`),t=wF(t,this.feedOutputNames,i,!1,`target`),TF(e,t,null),EF(t,this.feedLossFns,this.feedOutputShapes),this.stateful&&r!=null&&r>0&&e[0].shape[0]%r!==0)throw new X(`In a stateful network, you should only pass inputs with a number of samples that is divisible by the batch size ${r}. Found: ${e[0].shape[0]} sample(s).`);return[e,t]}async standardizeUserData(e,t,n,r,i=!0,a){let[o,s]=this.standardizeUserDataXY(e,t,i,a);if(n!=null)throw Error(`sample weight is not supported yet.`);let c=null;if(r!=null){let e=rF(r,this.outputNames);c=[];for(let t=0;t<e.length;++t)c.push(await iF(s[t],null,e[t]))}return[o,s,c]}testLoop(e,t,n,r=0,i){return B(()=>{let a=this.checkNumSamples(t,n,i,`steps`),o=[];if(r>0)throw new fj(`Verbose mode is not implemented yet.`);if(i!=null)throw new fj(`steps mode in testLoop() is not implemented yet`);{let r=vF(a,n),i=hb(cM(0,a));for(let n=0;n<r.length;++n){let a=r[n][0],s=r[n][1],c=e(_F(t,_M(i,a,s-a)));if(n===0)for(let e=0;e<c.length;++e)o.push(mm(0));for(let e=0;e<c.length;++e){let t=c[e];o[e]=H(o[e],U(s-a,t))}}for(let e=0;e<o.length;++e)o[e]=uu(o[e],a)}return o})}getDedupedMetricsNames(){let e=this.metricsNames,t=[];for(let n=0;n<e.length;++n){let r=e[n],i=r;if(_j(e,r)>1){let t=_j(e.slice(0,n),r);i+=`_${t}`}t.push(i)}return t}makeTrainFunction(){return e=>{let t=[],n=e.slice(0,this.inputs.length),r=e.slice(this.inputs.length,this.inputs.length+this.outputs.length),i=e.slice(this.inputs.length+this.outputs.length,this.inputs.length+this.outputs.length*2),a=[],o=()=>{let e=[];for(let t=0;t<this.inputs.length;++t)e.push({key:this.inputs[t],value:n[t]});let o=new DN(e),s=jN(this.outputs,o,{training:!0}),c;for(let e=0;e<this.lossFunctions.length;++e){let n=this.lossFunctions[e],a=n(r[e],s[e]);i[e]!=null&&(a=aF(a,i[e]));let o=Mg(a);t.push(o),c=e===0?a:H(c,a)}for(let e=0;e<this.metricsTensors.length;++e){let n;if(this.outputs.length>1&&e<this.outputs.length)n=t[e];else{let t=this.metricsTensors[e][0],i=this.metricsTensors[e][1];n=Mg(t(r[i],s[i]))}pc(n),a.push(n)}return c=Mg(c),this.calculateLosses().forEach(e=>{c=H(c,e)}),c},s=this.collectedTrainableWeights.map(e=>e.read());return[this.optimizer_.minimize(o,!0,s)].concat(a)}}makeTestFunction(){this.testFunction=e=>B(()=>{let t=[],n,r=e.slice(0,this.inputs.length),i=e.slice(this.inputs.length,this.inputs.length+this.outputs.length),a=[];for(let e=0;e<this.inputs.length;++e)a.push({key:this.inputs[e],value:r[e]});let o=new DN(a),s=jN(this.outputs,o);for(let e=0;e<this.lossFunctions.length;++e){let r=this.lossFunctions[e],a=Mg(r(i[e],s[e]));n=e===0?a:H(n,a),t.push(n)}for(let e=0;e<this.metricsTensors.length;++e){let n=this.metricsTensors[e][0],r=this.metricsTensors[e][1],a=Mg(n(i[r],s[r]));t.push(a)}return t})}async fit(e,t,n={}){if(this.isTraining)throw Error(`Cannot start training because another fit() call is ongoing.`);this.isTraining=!0;let r,i,a,o,s,c,l,u,d;try{let f=n.batchSize==null?32:n.batchSize;hF(f);let p=await this.standardizeUserData(e,t,n.sampleWeight,n.classWeight,!1,f);r=p[0],i=p[1],d=p[2];let m=!1,h;if(n.validationData!=null&&n.validationData.length>0){if(m=!0,n.validationData.length===2)s=n.validationData[0],c=n.validationData[1];else if(n.validationData.length===3)throw new fj(`validationData including sample weights is not supported yet.`);else throw new X(`When passing validation data, it must contain 2 (valX, valY) or 3 (valX, valY, valSampleWeight) items; ${n.validationData} is invalid.`);let e=await this.standardizeUserData(s,c,null,null,!0,f);l=e[0],u=e[1],h=l.concat(u)}else if(n.validationSplit!=null&&n.validationSplit>0&&n.validationSplit<1){m=!0;let e=Math.floor(r[0].shape[0]*(1-n.validationSplit)),t=r[0].shape[0];l=gF(r,e,t),a=r,r=gF(r,0,e),u=gF(i,e,t),o=i,i=gF(i,0,e),h=l.concat(u)}else n.validationSteps!=null&&(m=!0);let g=r.concat(i).concat(d);this.checkTrainableWeightsConsistency();let _=this.makeTrainFunction(),v=this.getDedupedMetricsNames(),y,b;m?(this.makeTestFunction(),y=this.testFunction,b=v.slice().concat(v.map(e=>`val_`+e))):(y=null,h=[],b=v.slice());let x=eP(n.callbacks,n.yieldEvery);return await this.fitLoop(_,g,v,f,n.epochs,n.verbose,x,y,h,n.shuffle,b,n.initialEpoch,null,null)}finally{this.isTraining=!1,bF(r,e),bF(i,t),bF(a,e),bF(o,t),bF(l,s),bF(u,c),d!=null&&fc(d)}}async fitLoop(e,t,n,r,i,a,o,s,c,l,u,f,p,m){r??=32,i??=1,l??=!0,f??=0;let h=!1;if(s!=null&&c!=null&&(h=!0),m!=null&&(h=!0,p==null))throw new X("Can only use `validationSteps` when doing step-wise training, i.e., `stepsPerEpoch` must be set.");let g=this.checkNumSamples(t,r,p,`steps_per_epoch`),_;g!=null&&(_=cM(0,g)),a??=1;let{callbackList:v,history:y}=nP(o,a,i,f,g,p,r,h,u);v.setModel(this),this.history=y,await v.onTrainBegin(),this.stopTraining_=!1;for(let a=f;a<i;++a){await v.onEpochBegin(a);let i={};if(p!=null)throw new fj(`stepsPerEpoch mode is not implemented yet.`);{if(l===`batch`)throw new fj(`batch shuffling is not implemneted yet`);l&&d(_);let a=hb(_),o=vF(g,r);for(let l=0;l<o.length;++l){let u={};if(await v.onBatchBegin(l,u),B(()=>{let d=o[l][0],f=o[l][1],p=_M(a,d,f-d);u.batch=l,u.size=f-d;let m=e(_F(t,p));for(let e=0;e<n.length;++e){let t=n[e],r=m[e];u[t]=r,pc(r)}if(l===o.length-1&&h){let e=this.testLoop(s,c,r);for(let t=0;t<n.length;++t){let r=n[t],a=e[t];pc(a),i[`val_`+r]=a}}}),await v.onBatchEnd(l,u),qN(u),this.stopTraining_)break}a.dispose()}if(await v.onEpochEnd(a,i),this.stopTraining_)break}return await v.onTrainEnd(),await this.history.syncData(),this.history}async fitDataset(e,t){return uF(this,e,t)}async trainOnBatch(e,t){let n=await this.standardizeUserData(e,t),r=n[0],i=n[1],a=this.makeTrainFunction()(r.concat(i)),o=[];for(let e of a){let t=await e.data();o.push(t[0])}return fc(a),bF(n[0],e),bF(n[1],t),vj(o)}getNamedWeights(e){let t=[],n=e!=null&&e.trainableOnly,r=n?this.trainableWeights:this.weights,i=this.getWeights(n);for(let e=0;e<r.length;++e)(!n||r[e].trainable)&&t.push({name:r[e].originalName,tensor:i[e]});return t}set stopTraining(e){this.stopTraining_=e}get stopTraining(){return this.stopTraining_}get optimizer(){return this.optimizer_}set optimizer(e){this.optimizer_!==e&&(this.optimizer_=e,this.isOptimizerOwned=!1)}dispose(){let e=super.dispose();if(e.refCountAfterDispose===0&&this.optimizer!=null&&this.isOptimizerOwned){let t=uc().numTensors;this.optimizer_.dispose(),e.numDisposedVariables+=t-uc().numTensors}return e}getLossIdentifiers(){let e;if(typeof this.loss==`string`)e=bj(this.loss);else if(Array.isArray(this.loss)){for(let e of this.loss)if(typeof e!=`string`)throw Error(`Serialization of non-string loss is not supported.`);e=this.loss.map(e=>bj(e))}else{let t=Object.keys(this.loss);e={};let n=this.loss;for(let r of t)if(typeof n[r]==`string`)e[r]=bj(n[r]);else throw Error(`Serialization of non-string loss is not supported.`)}return e}getMetricIdentifiers(){if(typeof this.metrics==`string`||typeof this.metrics==`function`)return[bj(BP(this.metrics))];if(Array.isArray(this.metrics))return this.metrics.map(e=>bj(BP(e)));{let e={};for(let t in this.metrics)e[t]=bj(BP(this.metrics[t]));return e}}getTrainingConfig(){return{loss:this.getLossIdentifiers(),metrics:this.getMetricIdentifiers(),optimizer_config:{class_name:this.optimizer.getClassName(),config:this.optimizer.getConfig()}}}loadTrainingConfig(e){if(e.weighted_metrics!=null)throw Error(`Loading weight_metrics is not supported yet.`);if(e.loss_weights!=null)throw Error(`Loading loss_weights is not supported yet.`);if(e.sample_weight_mode!=null)throw Error(`Loading sample_weight_mode is not supported yet.`);let t=rP(QP(e.optimizer_config)),n;if(typeof e.loss==`string`)n=xj(e.loss);else if(Array.isArray(e.loss))n=e.loss.map(e=>xj(e));else if(e.loss!=null){n={};for(let t in e.loss)n[t]=xj(e.loss[t])}let r;if(Array.isArray(e.metrics))r=e.metrics.map(e=>xj(e));else if(e.metrics!=null){r={};for(let t in e.metrics)r[t]=xj(e.metrics[t])}this.compile({loss:n,metrics:r,optimizer:t})}async save(e,t){if(typeof e==`string`){let t=mo(e);if(t.length===0)throw new X(`Cannot find any save handlers for URL '${e}'`);if(t.length>1)throw new X(`Found more than one (${t.length}) save handlers for URL '${e}'`);e=t[0]}if(e.save==null)throw new X("LayersModel.save() cannot proceed because the IOHandler provided does not have the `save` attribute defined.");let n=await Wa(this.getNamedWeights(t)),r={modelTopology:this.toJSON(null,!1),format:kF,generatedBy:`TensorFlow.js tfjs-layers v${eF}`,convertedBy:null};if(t!=null&&t.includeOptimizer&&this.optimizer!=null){r.trainingConfig=this.getTrainingConfig();let{data:e,specs:t}=await Wa(await this.optimizer.getWeights(),`optimizer`);n.specs.push(...t),n.data=Xa([n.data,e])}return this.userDefinedMetadata!=null&&(UP(this.userDefinedMetadata,this.name,!0),r.userDefinedMetadata=this.userDefinedMetadata),r.weightData=n.data,r.weightSpecs=n.specs,e.save(r)}setUserDefinedMetadata(e){UP(e,this.name),this.userDefinedMetadata=e}getUserDefinedMetadata(){return this.userDefinedMetadata}};AF.className=`Model`,V(AF);var jF=class extends AF{};jF.className=`Functional`,V(jF),Y();async function MF(e,t){if(t??={},typeof e==`string`){let n=ho(e,t);if(n.length===0)n.push(Is(e,t));else if(n.length>1)throw new X(`Found more than one (${n.length}) load handlers for URL '${e}'`);e=n[0]}return NF(e,void 0,t)}async function NF(e,t,n){if(n??={},e.load==null)throw new X("Cannot proceed with model loading because the IOHandler provided does not have the `load` method implemented.");let r=await e.load(),i=r.modelTopology;i.model_config!=null&&(i=i.model_config);let a=n.strict==null||n.strict,o=r.weightData!=null&&r.weightSpecs!=null&&a,s=rP(QP(i),t,o),c=r.trainingConfig;if(c!=null&&s.loadTrainingConfig(c),r.userDefinedMetadata!=null&&s.setUserDefinedMetadata(r.userDefinedMetadata),r.weightData!=null){if(r.weightSpecs==null)throw new X(`LayersModel artifacts contains weight data, but not weight specs. Therefore loading of weights cannot proceed.`);let{modelWeights:e,optimizerWeights:t}=PF(r.weightData,r.weightSpecs);s.loadWeights(e,a),s.optimizer!=null&&t.length>0&&await s.optimizer.setWeights(t),fc(e),fc(t.map(e=>e.tensor))}return s}function PF(e,t){let n=Ga(e,t),r={},i=[];return t.forEach(e=>{e.group===`optimizer`?i.push({name:e.name,tensor:n[e.name]}):r[e.name]=n[e.name]}),{modelWeights:r,optimizerWeights:i}}var FF=class e extends AF{constructor(e){if(super({inputs:[],outputs:[]}),e||={},this.trainable=!0,this.built=!1,this.name=e.name==null?zj(`sequential_`):e.name,e.layers!=null)for(let t of e.layers)this.add(t)}checkShape(e){if(e.inboundNodes[0].outputTensors[0].shape.some(e=>e<0))throw new X(`Negative dimension size caused by adding layer ${e.name} with input shape [${e.inboundNodes[0].inputTensors[0].shape}]`)}add(t){let n=t instanceof e||t instanceof AF,r;if(n){if(r=t,r.outputs.length!==1)throw new X(`All layers in a Sequential model should have a single output tensor. For multi-output layers, use the functional API.`);if(r.inputs.length!==1)throw new X(`All layers in a Sequential model should have a single input tensor. For multi-input layers, use the functional API.`)}if(this.outputs.length===0){if(t.inboundNodes.length===0){if(t.batchInputShape==null)throw new X("The first layer in a Sequential model must get an `inputShape` or `batchInputShape` argument.");let e=TN({batchShape:t.batchInputShape,dtype:t.dtype,name:t.name+`_input`});t.apply(e)}if(n)this.outputs=r.outputs,this.inputs=r.inputs;else{if(t.inboundNodes.length!==1)throw new X(`A layer added to a Sequential model must not already be connected somewhere else. LayersModel received layer ${t.name} which has ${t.inboundNodes.length} pre-existing inbound connections.`);if(t.inboundNodes[0].outputTensors.length!==1)throw new X(`All layers in a Sequential model should have a single output tensor. For multi-output layers, use the functional API.`);this.checkShape(t),this.outputs=[t.inboundNodes[0].outputTensors[0]],this.inputs=CN(this.outputs[0])}this.inboundNodes=[],new vN({outboundLayer:this,inboundLayers:[],nodeIndices:[],tensorIndices:[],inputTensors:this.inputs,outputTensors:this.outputs,inputMasks:hj(null,this.inputs.length),outputMasks:[null],inputShapes:this.inputs.map(e=>e.shape),outputShapes:this.outputs[0].shape})}else{let e=t.apply(this.outputs[0]);if(Array.isArray(e))throw TypeError(`All layers in a Sequential model should have a single output tensor. For multi-output layers, use the functional API.`);this.checkShape(t),this.outputs=[e],this.inboundNodes[0].outputTensors=this.outputs,this.inboundNodes[0].outputShapes=[this.outputs[0].shape]}this.layers.push(t),this.built=!1}pop(){if(this.layers.length===0)throw TypeError(`There are no layers in the model.`);if(this.layers.pop(),this.layers.length===0)this.outputs=[],this.inboundNodes=[],this.outboundNodes=[];else{let e=this.layers.length-1;this.layers[e].outboundNodes=[],this.outputs=[this.layers[e].output],this.inboundNodes[0].outputTensors=this.outputs,this.inboundNodes[0].outputShapes=[this.outputs[0].shape]}}call(e,t){return this.model??this.build(),this.model.call(e,t)}build(e){if(cN(e),this.inputs.length===0||this.outputs.length===0)throw TypeError(`Sequential model cannot be built: model is empty. Add some layers first.`);this.model=new AF({inputs:this.inputs,outputs:this.outputs[0],name:this.name+`_model`}),this.model.trainable=this.trainable,this.supportsMasking=this.model.supportsMasking,this.inputLayers=this.model.inputLayers,this.inputLayersNodeIndices=this.model.inputLayersNodeIndices,this.inputLayersTensorIndices=this.model.inputLayersTensorIndices,this.outputLayers=this.model.outputLayers,this.outputLayersNodeIndices=this.model.outputLayersNodeIndices,this.outputLayersTensorIndices=this.model.outputLayersTensorIndices,this.nodesByDepth=this.model.nodesByDepth,this.containerNodes=this.model.containerNodes,this.outputNames=this.model.outputNames,this.inputNames=this.model.inputNames,this.built=!0}countParams(){return this.built||this.build(),super.countParams()}summary(e,t,n=console.log){this.built||this.build(),super.summary(e,t,n)}setWeights(e){this.model??this.build(),this.model.setWeights(e)}evaluate(e,t,n={}){if(!this.built)throw new dj(`The model needs to be compiled before being used.`);return this.model.evaluate(e,t,n)}async evaluateDataset(e,t){if(!this.built)throw new dj(`The model needs to be compiled before being used.`);return this.model.evaluateDataset(e,t)}predict(e,t={}){return this.model??this.build(),this.model.predict(e,t)}predictOnBatch(e){return this.model??this.build(),this.model.predictOnBatch(e)}compile(e){this.build(),this.model.compile(e),this.optimizer_=this.model.optimizer,this.isOptimizerOwned=this.model.isOptimizerOwned,this.loss=this.model.loss,this.metrics=this.model.metrics,this.metricsTensors=this.model.metricsTensors,this.metricsNames=this.model.metricsNames}get optimizer(){return this.model==null?void 0:this.model.optimizer}set optimizer(e){this.model.optimizer=e}async fit(e,t,n={}){if(!this.built)throw new dj(`The model needs to be compiled before being used.`);return this.model.fit(e,t,n)}async fitDataset(e,t){if(!this.built)throw new dj(`The model needs to be compiled before being used.`);return this.model.fitDataset(e,t)}async trainOnBatch(e,t){return this.model.trainOnBatch(e,t)}static fromConfig(t,n,r={},i=!1){let a,o={};if(n instanceof Array){if(n[0].className==null||n[0].className===`Merge`)throw new X(`Legacy serialization format not supported yet.`);a=n}else y(n.layers!=null,()=>`When the config data for a Sequential model is not an Array, it must be an Object that contains the 'layers' field.`),a=n.layers,delete n.layers,o=n;let s=new t(o);if(!(s instanceof e))throw new fj(`Sequential.fromConfig called on non-Sequential input: ${s}`);for(let e of a){let t=rP(e,void 0,i);i&&t.setFastWeightInitDuringBuild(!0),s.add(t)}return s}set stopTraining(e){if(this.model==null)throw new X(`Cannot set the stopTraining property of a sequential model before it is compiled.`);this.model.stopTraining=e}get stopTraining(){if(this.model==null)throw new X(`Cannot get the stopTraining property of a sequential model before it is compiled.`);return this.model.stopTraining}getConfig(){let e=[];for(let t of this.layers){let n={};n.className=t.getClassName(),n.config=t.getConfig(),e.push(n)}return{name:this.name,layers:e}}};FF.className=`Sequential`,V(FF);function IF(e){return new FF(e)}Y();var LF=class extends Ll{getConfig(){return{}}},RF=class extends LF{apply(e,t=1){return kM(e,t)}};RF.className=`elu`,V(RF);var zF=class extends LF{apply(e){return iy(e)}};zF.className=`selu`,V(zF);var BF=class extends LF{apply(e){return jv(e)}};BF.className=`relu`,V(BF);var VF=class extends LF{apply(e){return B(()=>Vg(6,jv(e)))}};VF.className=`relu6`,V(VF);var HF=class extends LF{apply(e){return e}};HF.className=`linear`,V(HF);var UF=class extends LF{apply(e){return Od(e)}};UF.className=`sigmoid`,V(UF);var WF=class extends LF{apply(e){return MM(e)}};WF.className=`hardSigmoid`,V(WF);var GF=class extends LF{apply(e){return Hh(e)}};GF.className=`softplus`,V(GF);var KF=class extends LF{apply(e){return AM(e)}};KF.className=`softsign`,V(KF);var qF=class extends LF{apply(e){return Pd(e)}};qF.className=`tanh`,V(qF);var JF=class extends LF{apply(e,t=-1){return Py(e,t)}};JF.className=`softmax`,V(JF);var YF=class extends LF{apply(e,t=-1){return Xh(e,t)}};YF.className=`logSoftmax`,V(YF);var XF=class extends LF{apply(e,t=1){return B(()=>U(Od(U(e,t)),e))}};XF.className=`swish`,V(XF);var ZF=class extends LF{apply(e){return B(()=>U(e,Pd(Hh(e))))}};ZF.className=`mish`,V(ZF);function QF(e){return e.getClassName()}function $F(e,t={}){return Tj(e,Rl.getMap().classNameMap,t,`activation`)}function eI(e){if(e==null){let e={};return e.className=`linear`,e.config={},$F(e)}if(typeof e==`string`){let t={};return t.className=e,t.config={},$F(t)}return e instanceof LF?e:$F(e)}Y();function tI(e){if(e!=null&&typeof e!=`object`)throw Error(`Argument to L1L2 regularizer's constructor is expected to be an object, but received: ${e}`)}var nI=class extends Ll{},rI=class extends nI{constructor(e){super(),tI(e),this.l1=e==null||e.l1==null?.01:e.l1,this.l2=e==null||e.l2==null?.01:e.l2,this.hasL1=this.l1!==0,this.hasL2=this.l2!==0}apply(e){return B(()=>{let t=Pg([1]);return this.hasL1&&(t=H(t,q(U(this.l1,mu(e))))),this.hasL2&&(t=H(t,q(U(this.l2,EM(e))))),G(t,[])})}getConfig(){return{l1:this.l1,l2:this.l2}}static fromConfig(e,t){return new e({l1:t.l1,l2:t.l2})}};rI.className=`L1L2`,V(rI);var iI={l1l2:`L1L2`};function aI(e){return Cj(e)}function oI(e,t={}){return Tj(e,Rl.getMap().classNameMap,t,`regularizer`)}function sI(e){return e==null?null:typeof e==`string`?oI({className:e in iI?iI[e]:e,config:{}}):e instanceof nI?e:oI(e)}Y();var cI=class extends bN{constructor(e){super(e??{}),this.supportsMasking=!0,e!=null&&(this.maxValue=e.maxValue)}call(e,t){e=sN(e);let n=jv(e);return this.maxValue!=null&&(n=vf(n,0,this.maxValue)),n}computeOutputShape(e){return e}getConfig(){let e={maxValue:this.maxValue},t=super.getConfig();return Object.assign(e,t),e}};cI.className=`ReLU`,V(cI);var lI=class extends bN{constructor(e){super(e??{}),this.DEFAULT_ALPHA=.3,e??={},this.alpha=e.alpha==null?this.DEFAULT_ALPHA:e.alpha}call(e,t){let n=sN(e);return mh(n,this.alpha)}computeOutputShape(e){return e}getConfig(){let e={alpha:this.alpha},t=super.getConfig();return Object.assign(e,t),e}};lI.className=`LeakyReLU`,V(lI);var uI=class extends bN{constructor(e){if(super(e??{}),this.DEFAULT_ALPHA_INITIALIZER=`zeros`,e??={},this.supportsMasking=!0,this.alphaInitializer=iN(e.alphaInitializer||this.DEFAULT_ALPHA_INITIALIZER),this.alphaRegularizer=sI(e.alphaRegularizer),this.alphaConstraint=GN(e.alphaConstraint),e.sharedAxes==null)this.sharedAxes=null;else if(Array.isArray(e.sharedAxes))this.sharedAxes=e.sharedAxes;else if(typeof e.sharedAxes==`number`)this.sharedAxes=[e.sharedAxes];else throw new X(`Expected sharedAxes to be a number or an array of numbers, but got ${e.sharedAxes}`)}build(e){e=cN(e);let t=e.slice(1);if(this.sharedAxes!=null)for(let e of this.sharedAxes)t[e-1]=1;this.alpha=this.addWeight(`alpha`,t,`float32`,this.alphaInitializer,this.alphaRegularizer,!0,this.alphaConstraint);let n={};if(this.sharedAxes!=null)for(let t=1;t<e.length;++t)n[t]=e[t];this.inputSpec=[new hN({ndim:e.length,axes:n})],this.built=!0}call(e,t){return e=sN(e),L_(e,this.alpha.read())}getConfig(){let e={alphaInitializer:rN(this.alphaInitializer),alphaRegularizer:aI(this.alphaRegularizer),alphaConstraint:UN(this.alphaConstraint),sharedAxes:this.sharedAxes},t=super.getConfig();return Object.assign(e,t),e}};uI.className=`PReLU`,V(uI);var dI=class extends bN{constructor(e){if(super(e??{}),this.DEFAULT_ALPHA=1,e??={},e.alpha!=null&&e.alpha!==this.DEFAULT_ALPHA)throw new fj(`Non-default alpha value (${e.alpha}) is not supported by the ELU layer yet.`);this.alpha=e.alpha==null?this.DEFAULT_ALPHA:e.alpha}call(e,t){let n=sN(e);return Gp(n)}computeOutputShape(e){return e}getConfig(){let e={alpha:this.alpha},t=super.getConfig();return Object.assign(e,t),e}};dI.className=`ELU`,V(dI);var fI=class extends bN{constructor(e){super(e??{}),this.DEFAULT_THETA=1,e??={},this.theta=e.theta==null?this.DEFAULT_THETA:e.theta}call(e,t){let n=sN(e);return U(n,z($m(n,this.theta),`float32`))}computeOutputShape(e){return e}getConfig(){let e={theta:this.theta},t=super.getConfig();return Object.assign(e,t),e}};fI.className=`ThresholdedReLU`,V(fI);var pI=class extends bN{constructor(e){super(e??{}),this.DEFAULT_AXIS=1,e??={},this.softmax=new JF().apply,this.axis=e.axis==null?this.DEFAULT_AXIS:e.axis}call(e,t){let n=sN(e);return this.softmax(n,this.axis)}computeOutputShape(e){return e}getConfig(){let e={axis:this.axis},t=super.getConfig();return Object.assign(e,t),e}};pI.className=`Softmax`,V(pI);function mI(e,t,n){if(typeof e==`number`)return hj(e,t);if(e.length!==t)throw new X(`The ${n} argument must be an integer or tuple of ${t} integers. Received: ${e.length} elements.`);for(let r=0;r<t;++r){let i=e[r];if(!iM(i))throw new X(`The ${n} argument must be an integer or tuple of ${t} integers. Received: ${JSON.stringify(e)} including a non-integer number ${i}`)}return e}function hI(e,t,n,r,i=1){if(e==null)return e;let a=t+(t-1)*(i-1),o;return o=n===`same`?e:e-a+1,Math.floor((o+r-1)/r)}function gI(e,t,n,r){if(e==null)return null;if(r===`valid`)e=e*t+sM([n-t,0]);else if(r===`same`)e*=t;else throw new X(`Unsupport padding mode: ${r}.`);return e}Y();function _I(e,t){return B(()=>(Kj(t),t===`channelsFirst`?Fc(e,[0,2,3,1]):e))}function vI(e,t){return B(()=>(Kj(t),t===`channelsFirst`?Fc(e,[0,2,3,4,1]):e))}function yI(e,t,n,r=1,i=`valid`,a,o=1){return B(()=>{if(a??=dM(),Kj(a),e.shape.length!==3)throw new X(`The input of a conv1dWithBias operation should be 3, but is ${e.shape.length} instead.`);if(t.shape.length!==3)throw new X(`The kernel for a conv1dWithBias operation should be 3, but is ${t.shape.length} instead`);if(n!=null&&n.shape.length!==1)throw new X(`The bias for a conv1dWithBias operation should be 1, but is ${t.shape.length} instead`);if(a===`channelsFirst`&&(e=Fc(e,[0,2,1])),i===`causal`)throw new fj(`The support for CAUSAL padding mode in conv1dWithBias is not implemented yet.`);let s=If(e,t,r,i===`same`?`same`:`valid`,`NWC`,o);return n!=null&&(s=OM(s,n)),s})}function bI(e,t,n,r=[1,1],i=`valid`,a,o,s=null){return B(()=>{if(a??=dM(),Kj(a),e.rank!==3&&e.rank!==4)throw new X(`conv2dWithBiasActivation expects input to be of rank 3 or 4, but received ${e.rank}.`);if(t.rank!==3&&t.rank!==4)throw new X(`conv2dWithBiasActivation expects kernel to be of rank 3 or 4, but received ${e.rank}.`);let c=_I(e,a);if(i===`causal`)throw new fj(`The support for CAUSAL padding mode in conv1dWithBias is not implemented yet.`);return c=Mx({x:c,filter:t,strides:r,pad:i===`same`?`same`:`valid`,dilations:o,dataFormat:`NHWC`,bias:n,activation:s}),a===`channelsFirst`&&(c=Fc(c,[0,3,1,2])),c})}function xI(e,t,n,r=[1,1,1],i=`valid`,a,o){return B(()=>{if(a??=dM(),Kj(a),e.rank!==4&&e.rank!==5)throw new X(`conv3dWithBias expects input to be of rank 4 or 5, but received ${e.rank}.`);if(t.rank!==4&&t.rank!==5)throw new X(`conv3dWithBias expects kernel to be of rank 4 or 5, but received ${e.rank}.`);let s=vI(e,a);if(i===`causal`)throw new fj(`The support for CAUSAL padding mode in conv3dWithBias is not implemented yet.`);return s=Gf(s,t,r,i===`same`?`same`:`valid`,`NDHWC`,o),n!=null&&(s=OM(s,n)),a===`channelsFirst`&&(s=Fc(s,[0,4,1,2,3])),s})}var SI=class e extends bN{constructor(t,n){if(super(n),this.bias=null,this.DEFAULT_KERNEL_INITIALIZER=`glorotNormal`,this.DEFAULT_BIAS_INITIALIZER=`zeros`,e.verifyArgs(n),this.rank=t,Mj(this.rank,`rank`),this.rank!==1&&this.rank!==2&&this.rank!==3)throw new fj(`Convolution layer for rank other than 1, 2, or 3 (${this.rank}) is not implemented yet.`);if(this.kernelSize=mI(n.kernelSize,t,`kernelSize`),this.strides=mI(n.strides==null?1:n.strides,t,`strides`),this.padding=n.padding==null?`valid`:n.padding,Jj(this.padding),this.dataFormat=n.dataFormat==null?`channelsLast`:n.dataFormat,Kj(this.dataFormat),this.activation=eI(n.activation),this.useBias=n.useBias==null||n.useBias,this.biasInitializer=iN(n.biasInitializer||this.DEFAULT_BIAS_INITIALIZER),this.biasConstraint=GN(n.biasConstraint),this.biasRegularizer=sI(n.biasRegularizer),this.activityRegularizer=sI(n.activityRegularizer),this.dilationRate=mI(n.dilationRate==null?1:n.dilationRate,t,`dilationRate`),this.rank===1&&Array.isArray(this.dilationRate)&&this.dilationRate.length!==1)throw new X(`dilationRate must be a number or an array of a single number for 1D convolution, but received ${JSON.stringify(this.dilationRate)}`);if(this.rank===2){if(typeof this.dilationRate==`number`)this.dilationRate=[this.dilationRate,this.dilationRate];else if(this.dilationRate.length!==2)throw new X(`dilationRate must be a number or array of two numbers for 2D convolution, but received ${JSON.stringify(this.dilationRate)}`)}else if(this.rank===3){if(typeof this.dilationRate==`number`)this.dilationRate=[this.dilationRate,this.dilationRate,this.dilationRate];else if(this.dilationRate.length!==3)throw new X(`dilationRate must be a number or array of three numbers for 3D convolution, but received ${JSON.stringify(this.dilationRate)}`)}}static verifyArgs(e){if(gj(`kernelSize`in e,`required key 'kernelSize' not in config`),typeof e.kernelSize!=`number`&&!jj(e.kernelSize,`number`,1,3))throw new X(`BaseConv expects config.kernelSize to be number or number[] with length 1, 2, or 3, but received ${JSON.stringify(e.kernelSize)}.`)}getConfig(){let e={kernelSize:this.kernelSize,strides:this.strides,padding:this.padding,dataFormat:this.dataFormat,dilationRate:this.dilationRate,activation:QF(this.activation),useBias:this.useBias,biasInitializer:rN(this.biasInitializer),biasRegularizer:aI(this.biasRegularizer),activityRegularizer:aI(this.activityRegularizer),biasConstraint:UN(this.biasConstraint)},t=super.getConfig();return Object.assign(e,t),e}},CI=class e extends SI{constructor(t,n){super(t,n),this.kernel=null,e.verifyArgs(n),this.filters=n.filters,Mj(this.filters,`filters`),this.kernelInitializer=iN(n.kernelInitializer||this.DEFAULT_KERNEL_INITIALIZER),this.kernelConstraint=GN(n.kernelConstraint),this.kernelRegularizer=sI(n.kernelRegularizer)}build(e){e=cN(e);let t=this.dataFormat===`channelsFirst`?1:e.length-1;if(e[t]==null)throw new X(`The channel dimension of the input should be defined. Found ${e[t]}`);let n=e[t],r=this.kernelSize.concat([n,this.filters]);this.kernel=this.addWeight(`kernel`,r,null,this.kernelInitializer,this.kernelRegularizer,!0,this.kernelConstraint),this.useBias&&(this.bias=this.addWeight(`bias`,[this.filters],null,this.biasInitializer,this.biasRegularizer,!0,this.biasConstraint)),this.inputSpec=[{ndim:this.rank+2,axes:{[t]:n}}],this.built=!0}call(e,t){return B(()=>{e=sN(e);let t,n=this.bias==null?null:this.bias.read(),r=Fj(this.activation.getClassName());if(r!=null&&this.rank===2)t=bI(e,this.kernel.read(),n,this.strides,this.padding,this.dataFormat,this.dilationRate,r);else{if(this.rank===1)t=yI(e,this.kernel.read(),n,this.strides[0],this.padding,this.dataFormat,this.dilationRate[0]);else if(this.rank===2)t=bI(e,this.kernel.read(),n,this.strides,this.padding,this.dataFormat,this.dilationRate);else if(this.rank===3)t=xI(e,this.kernel.read(),n,this.strides,this.padding,this.dataFormat,this.dilationRate);else throw new fj(`convolutions greater than 3D are not implemented yet.`);this.activation!=null&&(t=this.activation.apply(t))}return t})}computeOutputShape(e){e=cN(e);let t=[],n=this.dataFormat===`channelsLast`?e.slice(1,e.length-1):e.slice(2);for(let e=0;e<n.length;++e){let r=hI(n[e],this.kernelSize[e],this.padding,this.strides[e],typeof this.dilationRate==`number`?this.dilationRate:this.dilationRate[e]);t.push(r)}let r=[e[0]];return this.dataFormat===`channelsLast`?(r=r.concat(t),r.push(this.filters)):(r.push(this.filters),r=r.concat(t)),r}getConfig(){let e={filters:this.filters,kernelInitializer:rN(this.kernelInitializer),kernelRegularizer:aI(this.kernelRegularizer),kernelConstraint:UN(this.kernelConstraint)},t=super.getConfig();return Object.assign(e,t),e}static verifyArgs(e){if(!(`filters`in e)||typeof e.filters!=`number`||e.filters<1)throw new X(`Convolution layer expected config.filters to be a 'number' > 0 but got ${JSON.stringify(e.filters)}`)}},wI=class e extends CI{constructor(t){super(2,t),e.verifyArgs(t)}getConfig(){let e=super.getConfig();return delete e.rank,e}static verifyArgs(e){if(typeof e.kernelSize!=`number`&&!jj(e.kernelSize,`number`,1,2))throw new X(`Conv2D expects config.kernelSize to be number or number[] with length 1 or 2, but received ${JSON.stringify(e.kernelSize)}.`)}};wI.className=`Conv2D`,V(wI);var TI=class e extends CI{constructor(t){super(3,t),e.verifyArgs(t)}getConfig(){let e=super.getConfig();return delete e.rank,e}static verifyArgs(e){if(typeof e.kernelSize!=`number`&&(!Array.isArray(e.kernelSize)||e.kernelSize.length!==1&&e.kernelSize.length!==3))throw new X(`Conv3D expects config.kernelSize to be number or [number, number, number], but received ${JSON.stringify(e.kernelSize)}.`)}};TI.className=`Conv3D`,V(TI);var EI=class extends wI{constructor(e){if(super(e),this.inputSpec=[new hN({ndim:4})],this.padding!==`same`&&this.padding!==`valid`)throw new X(`Conv2DTranspose currently supports only padding modes 'same' and 'valid', but received padding mode ${this.padding}`)}build(e){if(e=cN(e),e.length!==4)throw new X(`Input should have rank 4; Received input shape: `+JSON.stringify(e));let t=this.dataFormat===`channelsFirst`?1:e.length-1;if(e[t]==null)throw new X("The channel dimension of the inputs should be defined. Found `None`.");let n=e[t],r=this.kernelSize.concat([this.filters,n]);this.kernel=this.addWeight(`kernel`,r,`float32`,this.kernelInitializer,this.kernelRegularizer,!0,this.kernelConstraint),this.useBias&&(this.bias=this.addWeight(`bias`,[this.filters],`float32`,this.biasInitializer,this.biasRegularizer,!0,this.biasConstraint)),this.inputSpec=[new hN({ndim:4,axes:{[t]:n}})],this.built=!0}call(e,t){return B(()=>{let t=sN(e);if(t.shape.length!==4)throw new X(`Conv2DTranspose.call() expects input tensor to be rank-4, but received a tensor of rank-${t.shape.length}`);let n=t.shape,r=n[0],i,a;this.dataFormat===`channelsFirst`?(i=2,a=3):(i=1,a=2);let o=n[i],s=n[a],c=this.kernelSize[0],l=this.kernelSize[1],u=this.strides[0],d=this.strides[1],f=[r,gI(o,u,c,this.padding),gI(s,d,l,this.padding),this.filters];this.dataFormat!==`channelsLast`&&(t=Fc(t,[0,2,3,1]));let p=Hf(t,this.kernel.read(),f,this.strides,this.padding);return this.dataFormat!==`channelsLast`&&(p=Fc(p,[0,3,1,2])),this.bias!=null&&(p=OM(p,this.bias.read(),this.dataFormat)),this.activation!=null&&(p=this.activation.apply(p)),p})}computeOutputShape(e){e=cN(e);let t=e.slice(),n,r,i;this.dataFormat===`channelsFirst`?(n=1,r=2,i=3):(n=3,r=1,i=2);let a=this.kernelSize[0],o=this.kernelSize[1],s=this.strides[0],c=this.strides[1];return t[n]=this.filters,t[r]=gI(t[r],s,a,this.padding),t[i]=gI(t[i],c,o,this.padding),t}getConfig(){let e=super.getConfig();return delete e.dilationRate,e}};EI.className=`Conv2DTranspose`,V(EI);var DI=class extends TI{constructor(e){if(super(e),this.inputSpec=[new hN({ndim:5})],this.padding!==`same`&&this.padding!==`valid`)throw new X(`Conv3DTranspose currently supports only padding modes 'same' and 'valid', but received padding mode ${this.padding}`)}build(e){if(e=cN(e),e.length!==5)throw new X(`Input should have rank 5; Received input shape: `+JSON.stringify(e));let t=this.dataFormat===`channelsFirst`?1:e.length-1;if(e[t]==null)throw new X("The channel dimension of the inputs should be defined. Found `None`.");let n=e[t],r=this.kernelSize.concat([this.filters,n]);this.kernel=this.addWeight(`kernel`,r,`float32`,this.kernelInitializer,this.kernelRegularizer,!0,this.kernelConstraint),this.useBias&&(this.bias=this.addWeight(`bias`,[this.filters],`float32`,this.biasInitializer,this.biasRegularizer,!0,this.biasConstraint)),this.inputSpec=[new hN({ndim:5,axes:{[t]:n}})],this.built=!0}call(e,t){return B(()=>{let t=sN(e);if(t.shape.length!==5)throw new X(`Conv3DTranspose.call() expects input tensor to be rank-4, but received a tensor of rank-${t.shape.length}`);let n=t.shape,r=n[0],i,a,o;this.dataFormat===`channelsFirst`?(o=2,i=3,a=4):(o=1,i=2,a=3);let s=n[o],c=n[i],l=n[a],u=this.kernelSize[0],d=this.kernelSize[1],f=this.kernelSize[2],p=this.strides[0],m=this.strides[1],h=this.strides[2],g=[r,gI(s,p,u,this.padding),gI(c,m,d,this.padding),gI(l,h,f,this.padding),this.filters];this.dataFormat!==`channelsLast`&&(t=Fc(t,[0,2,3,4,1]));let _=Zf(t,this.kernel.read(),g,this.strides,this.padding);return this.dataFormat!==`channelsLast`&&(_=Fc(_,[0,4,1,2,3])),this.bias!==null&&(_=OM(_,this.bias.read(),this.dataFormat)),this.activation!==null&&(_=this.activation.apply(_)),_})}computeOutputShape(e){e=cN(e);let t=e.slice(),n,r,i,a;this.dataFormat===`channelsFirst`?(n=1,r=2,i=3,a=4):(n=4,r=1,i=2,a=3);let o=this.kernelSize[0],s=this.kernelSize[1],c=this.kernelSize[2],l=this.strides[0],u=this.strides[1],d=this.strides[2];return t[n]=this.filters,t[r]=gI(t[r],l,o,this.padding),t[i]=gI(t[i],u,s,this.padding),t[a]=gI(t[a],d,c,this.padding),t}getConfig(){let e=super.getConfig();return delete e.dilationRate,e}};DI.className=`Conv3DTranspose`,V(DI);var OI=class extends CI{constructor(e,t){if(super(e,t),this.DEFAULT_DEPTHWISE_INITIALIZER=`glorotUniform`,this.DEFAULT_POINTWISE_INITIALIZER=`glorotUniform`,this.depthwiseKernel=null,this.pointwiseKernel=null,t.filters==null)throw new X("The `filters` configuration field is required by SeparableConv, but is unspecified.");if(t.kernelInitializer!=null||t.kernelRegularizer!=null||t.kernelConstraint!=null)throw new X(`Fields kernelInitializer, kernelRegularizer and kernelConstraint are invalid for SeparableConv2D. Use depthwiseInitializer, depthwiseRegularizer, depthwiseConstraint, pointwiseInitializer, pointwiseRegularizer and pointwiseConstraint instead.`);if(t.padding!=null&&t.padding!==`same`&&t.padding!==`valid`)throw new X(`SeparableConv${this.rank}D supports only padding modes: 'same' and 'valid', but received ${JSON.stringify(t.padding)}`);this.depthMultiplier=t.depthMultiplier==null?1:t.depthMultiplier,this.depthwiseInitializer=iN(t.depthwiseInitializer||this.DEFAULT_DEPTHWISE_INITIALIZER),this.depthwiseRegularizer=sI(t.depthwiseRegularizer),this.depthwiseConstraint=GN(t.depthwiseConstraint),this.pointwiseInitializer=iN(t.depthwiseInitializer||this.DEFAULT_POINTWISE_INITIALIZER),this.pointwiseRegularizer=sI(t.pointwiseRegularizer),this.pointwiseConstraint=GN(t.pointwiseConstraint)}build(e){if(e=cN(e),e.length<this.rank+2)throw new X(`Inputs to SeparableConv${this.rank}D should have rank ${this.rank+2}, but received input shape: ${JSON.stringify(e)}`);let t=this.dataFormat===`channelsFirst`?1:e.length-1;if(e[t]==null||e[t]<0)throw new X(`The channel dimension of the inputs should be defined, but found ${JSON.stringify(e[t])}`);let n=e[t],r=this.kernelSize.concat([n,this.depthMultiplier]),i=[];for(let e=0;e<this.rank;++e)i.push(1);i.push(n*this.depthMultiplier,this.filters),this.depthwiseKernel=this.addWeight(`depthwise_kernel`,r,`float32`,this.depthwiseInitializer,this.depthwiseRegularizer,!0,this.depthwiseConstraint),this.pointwiseKernel=this.addWeight(`pointwise_kernel`,i,`float32`,this.pointwiseInitializer,this.pointwiseRegularizer,!0,this.pointwiseConstraint),this.bias=this.useBias?this.addWeight(`bias`,[this.filters],`float32`,this.biasInitializer,this.biasRegularizer,!0,this.biasConstraint):null,this.inputSpec=[new hN({ndim:this.rank+2,axes:{[t]:n}})],this.built=!0}call(e,t){return B(()=>{e=sN(e);let t;if(this.rank===1)throw new fj(`1D separable convolution is not implemented yet.`);return this.rank===2&&(this.dataFormat===`channelsFirst`&&(e=Fc(e,[0,2,3,1])),t=sy(e,this.depthwiseKernel.read(),this.pointwiseKernel.read(),this.strides,this.padding,this.dilationRate,`NHWC`)),this.useBias&&(t=OM(t,this.bias.read(),this.dataFormat)),this.activation!=null&&(t=this.activation.apply(t)),this.dataFormat===`channelsFirst`&&(t=Fc(t,[0,3,1,2])),t})}getConfig(){let e=super.getConfig();return delete e.rank,delete e.kernelInitializer,delete e.kernelRegularizer,delete e.kernelConstraint,e.depthwiseInitializer=rN(this.depthwiseInitializer),e.pointwiseInitializer=rN(this.pointwiseInitializer),e.depthwiseRegularizer=aI(this.depthwiseRegularizer),e.pointwiseRegularizer=aI(this.pointwiseRegularizer),e.depthwiseConstraint=UN(this.depthwiseConstraint),e.pointwiseConstraint=UN(this.pointwiseConstraint),e}};OI.className=`SeparableConv`;var kI=class extends OI{constructor(e){super(2,e)}};kI.className=`SeparableConv2D`,V(kI);var AI=class e extends CI{constructor(t){super(1,t),e.verifyArgs(t),this.inputSpec=[{ndim:3}]}getConfig(){let e=super.getConfig();return delete e.rank,delete e.dataFormat,e}static verifyArgs(e){if(typeof e.kernelSize!=`number`&&!jj(e.kernelSize,`number`,1,1))throw new X(`Conv1D expects config.kernelSize to be number or number[] with length 1, but received ${JSON.stringify(e.kernelSize)}.`)}};AI.className=`Conv1D`,V(AI);var jI=class extends bN{constructor(e){super(e),this.cropping=typeof e.cropping==`number`?[[e.cropping,e.cropping],[e.cropping,e.cropping]]:typeof e.cropping[0]==`number`?[[e.cropping[0],e.cropping[0]],[e.cropping[1],e.cropping[1]]]:e.cropping,this.dataFormat=e.dataFormat===void 0?`channelsLast`:e.dataFormat,this.inputSpec=[{ndim:4}]}computeOutputShape(e){return this.dataFormat===`channelsFirst`?[e[0],e[1],e[2]-this.cropping[0][0]-this.cropping[0][1],e[3]-this.cropping[1][0]-this.cropping[1][1]]:[e[0],e[1]-this.cropping[0][0]-this.cropping[0][1],e[2]-this.cropping[1][0]-this.cropping[1][1],e[3]]}call(e,t){return B(()=>(e=sN(e),this.dataFormat===`channelsLast`?yM(yM(e,this.cropping[0][0],e.shape[1]-this.cropping[0][0]-this.cropping[0][1],2),this.cropping[1][0],e.shape[2]-this.cropping[1][1]-this.cropping[1][0],3):yM(yM(e,this.cropping[0][0],e.shape[2]-this.cropping[0][0]-this.cropping[0][1],3),this.cropping[1][0],e.shape[3]-this.cropping[1][1]-this.cropping[1][0],4)))}getConfig(){let e={cropping:this.cropping,dataFormat:this.dataFormat},t=super.getConfig();return Object.assign(e,t),e}};jI.className=`Cropping2D`,V(jI);var MI=class extends bN{constructor(e){super(e),this.DEFAULT_SIZE=[2,2],this.inputSpec=[{ndim:4}],this.size=e.size==null?this.DEFAULT_SIZE:e.size,this.dataFormat=e.dataFormat==null?`channelsLast`:e.dataFormat,Kj(this.dataFormat),this.interpolation=e.interpolation==null?`nearest`:e.interpolation,qj(this.interpolation)}computeOutputShape(e){if(this.dataFormat===`channelsFirst`){let t=e[2]==null?null:this.size[0]*e[2],n=e[3]==null?null:this.size[1]*e[3];return[e[0],e[1],t,n]}{let t=e[1]==null?null:this.size[0]*e[1],n=e[2]==null?null:this.size[1]*e[2];return[e[0],t,n,e[3]]}}call(e,t){return B(()=>{let t=sN(e),n=t.shape;if(this.dataFormat===`channelsFirst`){t=Fc(t,[0,2,3,1]);let e=this.size[0]*n[2],r=this.size[1]*n[3],i=this.interpolation===`nearest`?bw.resizeNearestNeighbor(t,[e,r]):bw.resizeBilinear(t,[e,r]);return Fc(i,[0,3,1,2])}{let e=this.size[0]*n[1],r=this.size[1]*n[2];return this.interpolation===`nearest`?bw.resizeNearestNeighbor(t,[e,r]):bw.resizeBilinear(t,[e,r])}})}getConfig(){let e={size:this.size,dataFormat:this.dataFormat,interpolation:this.interpolation},t=super.getConfig();return Object.assign(e,t),e}};MI.className=`UpSampling2D`,V(MI),Y();function NI(e,t,n=[1,1],r=`valid`,i,a){return B(()=>{i??=dM(),Kj(i);let o=_I(e,i);if(e.rank!==4)throw new X(`Input for depthwiseConv2d is required to be 4-D, but is instead ${e.rank}-D`);if(t.rank!==4)throw new X(`depthwiseKernel is required to be 4-D, but is instead ${t.rank}-D`);return o=vp(o,t,n,r===`same`?`same`:`valid`,`NHWC`,a),i===`channelsFirst`&&(o=Fc(o,[0,3,1,2])),o})}var PI=class extends SI{constructor(e){super(2,e),this.depthwiseKernel=null,this.depthMultiplier=e.depthMultiplier==null?1:e.depthMultiplier,this.depthwiseInitializer=iN(e.depthwiseInitializer||this.DEFAULT_KERNEL_INITIALIZER),this.depthwiseConstraint=GN(e.depthwiseConstraint),this.depthwiseRegularizer=sI(e.depthwiseRegularizer)}build(e){if(e=cN(e),e.length<4)throw new X(`Inputs to DepthwiseConv2D should have rank 4. Received input shape: ${JSON.stringify(e)}.`);let t=this.dataFormat===`channelsFirst`?1:3;if(e[t]==null||e[t]<0)throw new X(`The channel dimension of the inputs to DepthwiseConv2D should be defined, but is not (${e[t]}).`);let n=e[t],r=[this.kernelSize[0],this.kernelSize[1],n,this.depthMultiplier];this.depthwiseKernel=this.addWeight(`depthwise_kernel`,r,null,this.depthwiseInitializer,this.depthwiseRegularizer,!0,this.depthwiseConstraint),this.bias=this.useBias?this.addWeight(`bias`,[n*this.depthMultiplier],null,this.biasInitializer,this.biasRegularizer,!0,this.biasConstraint):null,this.built=!0}call(e,t){return B(()=>{e=sN(e);let t=NI(e,this.depthwiseKernel.read(),this.strides,this.padding,this.dataFormat,null);return this.useBias&&(t=OM(t,this.bias.read(),this.dataFormat)),this.activation!=null&&(t=this.activation.apply(t)),t})}computeOutputShape(e){e=cN(e);let t=this.dataFormat===`channelsFirst`?e[2]:e[1],n=this.dataFormat===`channelsFirst`?e[3]:e[2],r=this.dataFormat===`channelsFirst`?e[1]*this.depthMultiplier:e[3]*this.depthMultiplier,i=hI(t,this.kernelSize[0],this.padding,this.strides[0]),a=hI(n,this.kernelSize[1],this.padding,this.strides[1]);return this.dataFormat===`channelsFirst`?[e[0],r,i,a]:[e[0],i,a,r]}getConfig(){let e=super.getConfig();return e.depthMultiplier=this.depthMultiplier,e.depthwiseInitializer=rN(this.depthwiseInitializer),e.depthwiseRegularizer=aI(this.depthwiseRegularizer),e.depthwiseConstraint=UN(this.depthwiseRegularizer),e}};PI.className=`DepthwiseConv2D`,V(PI),Y();function FI(e,t,n,r){if(Array.isArray(e)){if(t!=null||n!=null)throw new X(`When inputs is an array, neither initialState or constants should be provided`);r!=null&&(n=e.slice(e.length-r,e.length),e=e.slice(0,e.length-r)),e.length>1&&(t=e.slice(1,e.length)),e=e[0]}function i(e){return e==null||Array.isArray(e)?e:[e]}return t=i(t),n=i(n),{inputs:e,initialState:t,constants:n}}function II(e,t,n,r=!1,i,a,o=!1,s=!1){return B(()=>{let c=t.shape.length;if(c<3)throw new X(`Input should be at least 3D, but is ${c}D.`);let l=[1,0].concat(cM(2,c));if(t=Fc(t,l),a!=null)throw new fj(`The rnn() functoin of the deeplearn.js backend does not support constants yet.`);o&&console.warn(`Backend rnn(): the unroll = true option is not applicable to the imperative deeplearn.js backend.`),i!=null&&(i=z(z(i,`bool`),`float32`),i.rank===c-1&&(i=Fm(i,-1)),i=Fc(i,l)),r&&(t=Lv(t,0),i!=null&&(i=Lv(i,0)));let u=[],d,f=n,p=t.shape[0],m=Rb(t),h;i!=null&&(h=Rb(i));for(let t=0;t<p;++t){let n=m[t],r=B(()=>e(n,f));if(i==null)d=r[0],f=r[1];else{let e=B(()=>{let e=h[t],n=J(c_(e),e);return{output:H(U(r[0],e),U(f[0],n)),newStates:f.map((t,i)=>H(U(r[1][i],e),U(t,n)))}});d=e.output,f=e.newStates}s&&u.push(d)}let g;return s&&(g=ib(u,1)),[d,g,f]})}var LI=class e extends bN{constructor(e){super(e);let t;if(e.cell==null)throw new X(`cell property is missing for the constructor of RNN.`);if(t=Array.isArray(e.cell)?new GI({cells:e.cell}):e.cell,t.stateSize==null)throw new X("The RNN cell should have an attribute `stateSize` (tuple of integers, one integer per RNN state).");this.cell=t,this.returnSequences=e.returnSequences!=null&&e.returnSequences,this.returnState=e.returnState!=null&&e.returnState,this.goBackwards=e.goBackwards!=null&&e.goBackwards,this._stateful=e.stateful!=null&&e.stateful,this.unroll=e.unroll!=null&&e.unroll,this.supportsMasking=!0,this.inputSpec=[new hN({ndim:3})],this.stateSpec=null,this.states_=null,this.numConstants=null,this.keptStates=[]}getStates(){return this.states_==null?cM(0,Array.isArray(this.cell.stateSize)?this.cell.stateSize.length:1).map(e=>null):this.states_}setStates(e){this.states_=e}computeOutputShape(e){aN(e)&&(e=e[0]),e=e;let t=this.cell.stateSize;Array.isArray(t)||(t=[t]);let n=t[0],r;if(r=this.returnSequences?[e[0],e[1],n]:[e[0],n],this.returnState){let n=[];for(let r of t)n.push([e[0],r]);return[r].concat(n)}return r}computeMask(e,t){return B(()=>{Array.isArray(t)&&(t=t[0]);let e=this.returnSequences?t:null;if(this.returnState){let t=this.states.map(e=>null);return[e].concat(t)}return e})}get states(){if(this.states_==null){let e=Array.isArray(this.cell.stateSize)?this.cell.stateSize.length:1,t=[];for(let n=0;n<e;++n)t.push(null);return t}return this.states_}set states(e){this.states_=e}build(e){if(this.numConstants!=null)throw new fj(`Constants support is not implemented in RNN yet.`);aN(e)&&(e=e[0]),e=e;let t=this.stateful?e[0]:null,n=e.slice(2);this.inputSpec[0]=new hN({shape:[t,null,...n]});let r=[e[0]].concat(e.slice(2));this.cell.build(r);let i;if(i=Array.isArray(this.cell.stateSize)?this.cell.stateSize:[this.cell.stateSize],this.stateSpec!=null){if(!T(this.stateSpec.map(e=>e.shape[e.shape.length-1]),i))throw new X(`An initialState was passed that is not compatible with cell.stateSize. Received stateSpec=${this.stateSpec}; However cell.stateSize is ${this.cell.stateSize}`)}else this.stateSpec=i.map(e=>new hN({shape:[null,e]}));this.stateful&&this.resetStates()}resetStates(e,t=!1){B(()=>{if(!this.stateful)throw new uj(`Cannot call resetStates() on an RNN Layer that is not stateful.`);let n=this.inputSpec[0].shape[0];if(n==null)throw new X("If an RNN is stateful, it needs to know its batch size. Specify the batch size of your input tensors: \n- If using a Sequential model, specify the batch size by passing a `batchInputShape` option to your first layer.\n- If using the functional API, specify the batch size by passing a `batchShape` option to your Input layer.");if(this.states_==null)this.states_=Array.isArray(this.cell.stateSize)?this.cell.stateSize.map(e=>Pg([n,e])):[Pg([n,this.cell.stateSize])];else if(e==null)fc(this.states_),this.keptStates!=null&&(fc(this.keptStates),this.keptStates=[]),Array.isArray(this.cell.stateSize)?this.states_=this.cell.stateSize.map(e=>Pg([n,e])):this.states_[0]=Pg([n,this.cell.stateSize]);else{if(Array.isArray(e)||(e=[e]),e.length!==this.states_.length)throw new X(`Layer ${this.name} expects ${this.states_.length} state(s), but it received ${e.length} state value(s). Input received: ${e}`);t===!0?this.keptStates.push(this.states_.slice()):fc(this.states_);for(let t=0;t<this.states_.length;++t){let r=e[t],i=[n,Array.isArray(this.cell.stateSize)?this.cell.stateSize[t]:this.cell.stateSize];if(!T(r.shape,i))throw new X(`State ${t} is incompatible with layer ${this.name}: expected shape=${i}, received shape=${r.shape}`);this.states_[t]=r}}this.states_=this.states_.map(e=>pc(e.clone()))})}apply(e,t){let n=t==null?null:t.initialState,r=t==null?null:t.constants;t??={};let i=FI(e,n,r,this.numConstants);e=i.inputs,n=i.initialState,r=i.constants;let a=[],o=[];if(n!=null){t.initialState=n,a=a.concat(n),this.stateSpec=[];for(let e of n)this.stateSpec.push(new hN({shape:e.shape}));o=o.concat(this.stateSpec)}if(r!=null&&(t.constants=r,a=a.concat(r),this.numConstants=r.length),a[0]instanceof gN){let n=[e].concat(a),r=this.inputSpec.concat(o),i=this.inputSpec;this.inputSpec=r;let s=super.apply(n,t);return this.inputSpec=i,s}return super.apply(e,t)}call(e,t){return B(()=>{let n=t==null?null:t.mask,r=t==null?null:t.training,i=t==null?null:t.initialState;e=sN(e),i??=this.stateful?this.states_:this.getInitialState(e);let a=Array.isArray(this.cell.stateSize)?this.cell.stateSize.length:1;if(i.length!==a)throw new X(`RNN Layer has ${a} state(s) but was passed ${i.length} initial state(s).`);this.unroll&&console.warn(`Ignoring unroll = true for RNN layer, due to imperative backend.`);let o={training:r},s=II((e,t)=>{let n=this.cell.call([e].concat(t),o);return[n[0],n.slice(1)]},e,i,this.goBackwards,n,null,this.unroll,this.returnSequences),c=s[0],l=s[1],u=s[2];this.stateful&&this.resetStates(u,r);let d=this.returnSequences?l:c;return this.returnState?[d].concat(u):d})}getInitialState(e){return B(()=>{let t=Pg(e.shape);return t=q(t,[1,2]),t=pM(t),Array.isArray(this.cell.stateSize)?this.cell.stateSize.map(e=>e>1?SM(t,[1,e]):t):this.cell.stateSize>1?[SM(t,[1,this.cell.stateSize])]:[t]})}get trainableWeights(){return this.trainable?this.cell.trainableWeights:[]}get nonTrainableWeights(){return this.trainable?this.cell.nonTrainableWeights:this.cell.weights}setFastWeightInitDuringBuild(e){super.setFastWeightInitDuringBuild(e),this.cell!=null&&this.cell.setFastWeightInitDuringBuild(e)}getConfig(){let t=super.getConfig(),n={returnSequences:this.returnSequences,returnState:this.returnState,goBackwards:this.goBackwards,stateful:this.stateful,unroll:this.unroll};this.numConstants!=null&&(n.numConstants=this.numConstants);let r=this.cell.getConfig();return this.getClassName()===e.className&&(n.cell={className:this.cell.getClassName(),config:r}),Object.assign(Object.assign(Object.assign({},r),t),n)}static fromConfig(e,t,n={}){let r=t.cell,i=rP(r,n);return new e(Object.assign(t,{cell:i}))}};LI.className=`RNN`,V(LI);var RI=class extends bN{},zI=class extends RI{constructor(e){super(e),this.DEFAULT_ACTIVATION=`tanh`,this.DEFAULT_KERNEL_INITIALIZER=`glorotNormal`,this.DEFAULT_RECURRENT_INITIALIZER=`orthogonal`,this.DEFAULT_BIAS_INITIALIZER=`zeros`,this.units=e.units,Mj(this.units,`units`),this.activation=eI(e.activation==null?this.DEFAULT_ACTIVATION:e.activation),this.useBias=e.useBias==null||e.useBias,this.kernelInitializer=iN(e.kernelInitializer||this.DEFAULT_KERNEL_INITIALIZER),this.recurrentInitializer=iN(e.recurrentInitializer||this.DEFAULT_RECURRENT_INITIALIZER),this.biasInitializer=iN(e.biasInitializer||this.DEFAULT_BIAS_INITIALIZER),this.kernelRegularizer=sI(e.kernelRegularizer),this.recurrentRegularizer=sI(e.recurrentRegularizer),this.biasRegularizer=sI(e.biasRegularizer),this.kernelConstraint=GN(e.kernelConstraint),this.recurrentConstraint=GN(e.recurrentConstraint),this.biasConstraint=GN(e.biasConstraint),this.dropout=oM([1,sM([0,e.dropout==null?0:e.dropout])]),this.recurrentDropout=oM([1,sM([0,e.recurrentDropout==null?0:e.recurrentDropout])]),this.dropoutFunc=e.dropoutFunc,this.stateSize=this.units,this.dropoutMask=null,this.recurrentDropoutMask=null}build(e){e=cN(e),this.kernel=this.addWeight(`kernel`,[e[e.length-1],this.units],null,this.kernelInitializer,this.kernelRegularizer,!0,this.kernelConstraint),this.recurrentKernel=this.addWeight(`recurrent_kernel`,[this.units,this.units],null,this.recurrentInitializer,this.recurrentRegularizer,!0,this.recurrentConstraint),this.bias=this.useBias?this.addWeight(`bias`,[this.units],null,this.biasInitializer,this.biasRegularizer,!0,this.biasConstraint):null,this.built=!0}call(e,t){return B(()=>{if(e=e,e.length!==2)throw new X(`SimpleRNNCell expects 2 input Tensors, got ${e.length}.`);let n=e[1];e=e[0];let r=t.training!=null&&t.training;0<this.dropout&&this.dropout<1&&this.dropoutMask==null&&(this.dropoutMask=KI({ones:()=>c_(e),rate:this.dropout,training:r,dropoutFunc:this.dropoutFunc})),0<this.recurrentDropout&&this.recurrentDropout<1&&this.recurrentDropoutMask==null&&(this.recurrentDropoutMask=KI({ones:()=>c_(n),rate:this.recurrentDropout,training:r,dropoutFunc:this.dropoutFunc}));let i,a=this.dropoutMask,o=this.recurrentDropoutMask;i=wM(a==null?e:U(e,a),this.kernel.read()),this.bias!=null&&(i=OM(i,this.bias.read())),o!=null&&(n=U(n,o));let s=H(i,wM(n,this.recurrentKernel.read()));return this.activation!=null&&(s=this.activation.apply(s)),[s,s]})}getConfig(){let e=super.getConfig(),t={units:this.units,activation:QF(this.activation),useBias:this.useBias,kernelInitializer:rN(this.kernelInitializer),recurrentInitializer:rN(this.recurrentInitializer),biasInitializer:rN(this.biasInitializer),kernelRegularizer:aI(this.kernelRegularizer),recurrentRegularizer:aI(this.recurrentRegularizer),biasRegularizer:aI(this.biasRegularizer),activityRegularizer:aI(this.activityRegularizer),kernelConstraint:UN(this.kernelConstraint),recurrentConstraint:UN(this.recurrentConstraint),biasConstraint:UN(this.biasConstraint),dropout:this.dropout,recurrentDropout:this.recurrentDropout};return Object.assign(Object.assign({},e),t)}};zI.className=`SimpleRNNCell`,V(zI);var BI=class extends LI{constructor(e){e.cell=new zI(e),super(e)}call(e,t){return B(()=>{this.cell.dropoutMask!=null&&(fc(this.cell.dropoutMask),this.cell.dropoutMask=null),this.cell.recurrentDropoutMask!=null&&(fc(this.cell.recurrentDropoutMask),this.cell.recurrentDropoutMask=null);let n=t==null?null:t.mask,r=t==null?null:t.training,i=t==null?null:t.initialState;return super.call(e,{mask:n,training:r,initialState:i})})}static fromConfig(e,t){return new e(t)}};BI.className=`SimpleRNN`,V(BI);var VI=class extends RI{constructor(e){if(super(e),this.DEFAULT_ACTIVATION=`tanh`,this.DEFAULT_RECURRENT_ACTIVATION=`hardSigmoid`,this.DEFAULT_KERNEL_INITIALIZER=`glorotNormal`,this.DEFAULT_RECURRENT_INITIALIZER=`orthogonal`,this.DEFAULT_BIAS_INITIALIZER=`zeros`,e.resetAfter)throw new X(`GRUCell does not support reset_after parameter set to true.`);this.units=e.units,Mj(this.units,`units`),this.activation=eI(e.activation===void 0?this.DEFAULT_ACTIVATION:e.activation),this.recurrentActivation=eI(e.recurrentActivation===void 0?this.DEFAULT_RECURRENT_ACTIVATION:e.recurrentActivation),this.useBias=e.useBias==null||e.useBias,this.kernelInitializer=iN(e.kernelInitializer||this.DEFAULT_KERNEL_INITIALIZER),this.recurrentInitializer=iN(e.recurrentInitializer||this.DEFAULT_RECURRENT_INITIALIZER),this.biasInitializer=iN(e.biasInitializer||this.DEFAULT_BIAS_INITIALIZER),this.kernelRegularizer=sI(e.kernelRegularizer),this.recurrentRegularizer=sI(e.recurrentRegularizer),this.biasRegularizer=sI(e.biasRegularizer),this.kernelConstraint=GN(e.kernelConstraint),this.recurrentConstraint=GN(e.recurrentConstraint),this.biasConstraint=GN(e.biasConstraint),this.dropout=oM([1,sM([0,e.dropout==null?0:e.dropout])]),this.recurrentDropout=oM([1,sM([0,e.recurrentDropout==null?0:e.recurrentDropout])]),this.dropoutFunc=e.dropoutFunc,this.implementation=e.implementation,this.stateSize=this.units,this.dropoutMask=null,this.recurrentDropoutMask=null}build(e){e=cN(e);let t=e[e.length-1];this.kernel=this.addWeight(`kernel`,[t,this.units*3],null,this.kernelInitializer,this.kernelRegularizer,!0,this.kernelConstraint),this.recurrentKernel=this.addWeight(`recurrent_kernel`,[this.units,this.units*3],null,this.recurrentInitializer,this.recurrentRegularizer,!0,this.recurrentConstraint),this.bias=this.useBias?this.addWeight(`bias`,[this.units*3],null,this.biasInitializer,this.biasRegularizer,!0,this.biasConstraint):null,this.built=!0}call(e,t){return B(()=>{if(e=e,e.length!==2)throw new X(`GRUCell expects 2 input Tensors (inputs, h, c), got ${e.length}.`);let n=t.training!=null&&t.training,r=e[1];e=e[0],0<this.dropout&&this.dropout<1&&this.dropoutMask==null&&(this.dropoutMask=KI({ones:()=>c_(e),rate:this.dropout,training:n,count:3,dropoutFunc:this.dropoutFunc})),0<this.recurrentDropout&&this.recurrentDropout<1&&this.recurrentDropoutMask==null&&(this.recurrentDropoutMask=KI({ones:()=>c_(r),rate:this.recurrentDropout,training:n,count:3,dropoutFunc:this.dropoutFunc}));let i=this.dropoutMask,a=this.recurrentDropoutMask,o,s,c;0<this.dropout&&this.dropout<1&&(e=U(e,i[0]));let l=wM(e,this.kernel.read());this.useBias&&(l=OM(l,this.bias.read())),0<this.recurrentDropout&&this.recurrentDropout<1&&(r=U(r,a[0]));let u=this.recurrentKernel.read(),[d,f]=Ky(u,[2*this.units,this.units],u.rank-1),p=wM(r,d),[m,h,g]=Ky(l,3,l.rank-1),[_,v]=Ky(p,2,p.rank-1);o=this.recurrentActivation.apply(H(m,_)),s=this.recurrentActivation.apply(H(h,v));let y=wM(U(s,r),f);c=this.activation.apply(H(g,y));let b=H(U(o,r),U(H(1,kc(o)),c));return[b,b]})}getConfig(){let e=super.getConfig(),t={units:this.units,activation:QF(this.activation),recurrentActivation:QF(this.recurrentActivation),useBias:this.useBias,kernelInitializer:rN(this.kernelInitializer),recurrentInitializer:rN(this.recurrentInitializer),biasInitializer:rN(this.biasInitializer),kernelRegularizer:aI(this.kernelRegularizer),recurrentRegularizer:aI(this.recurrentRegularizer),biasRegularizer:aI(this.biasRegularizer),activityRegularizer:aI(this.activityRegularizer),kernelConstraint:UN(this.kernelConstraint),recurrentConstraint:UN(this.recurrentConstraint),biasConstraint:UN(this.biasConstraint),dropout:this.dropout,recurrentDropout:this.recurrentDropout,implementation:this.implementation,resetAfter:!1};return Object.assign(Object.assign({},e),t)}};VI.className=`GRUCell`,V(VI);var HI=class extends LI{constructor(e){e.implementation===0&&console.warn("`implementation=0` has been deprecated, and now defaults to `implementation=1`. Please update your layer call."),e.cell=new VI(e),super(e)}call(e,t){return B(()=>{this.cell.dropoutMask!=null&&(fc(this.cell.dropoutMask),this.cell.dropoutMask=null),this.cell.recurrentDropoutMask!=null&&(fc(this.cell.recurrentDropoutMask),this.cell.recurrentDropoutMask=null);let n=t==null?null:t.mask,r=t==null?null:t.training,i=t==null?null:t.initialState;return super.call(e,{mask:n,training:r,initialState:i})})}static fromConfig(e,t){return t.implmentation===0&&(t.implementation=1),new e(t)}};HI.className=`GRU`,V(HI);var UI=class extends RI{constructor(e){super(e),this.DEFAULT_ACTIVATION=`tanh`,this.DEFAULT_RECURRENT_ACTIVATION=`hardSigmoid`,this.DEFAULT_KERNEL_INITIALIZER=`glorotNormal`,this.DEFAULT_RECURRENT_INITIALIZER=`orthogonal`,this.DEFAULT_BIAS_INITIALIZER=`zeros`,this.units=e.units,Mj(this.units,`units`),this.activation=eI(e.activation===void 0?this.DEFAULT_ACTIVATION:e.activation),this.recurrentActivation=eI(e.recurrentActivation===void 0?this.DEFAULT_RECURRENT_ACTIVATION:e.recurrentActivation),this.useBias=e.useBias==null||e.useBias,this.kernelInitializer=iN(e.kernelInitializer||this.DEFAULT_KERNEL_INITIALIZER),this.recurrentInitializer=iN(e.recurrentInitializer||this.DEFAULT_RECURRENT_INITIALIZER),this.biasInitializer=iN(e.biasInitializer||this.DEFAULT_BIAS_INITIALIZER),this.unitForgetBias=e.unitForgetBias,this.kernelRegularizer=sI(e.kernelRegularizer),this.recurrentRegularizer=sI(e.recurrentRegularizer),this.biasRegularizer=sI(e.biasRegularizer),this.kernelConstraint=GN(e.kernelConstraint),this.recurrentConstraint=GN(e.recurrentConstraint),this.biasConstraint=GN(e.biasConstraint),this.dropout=oM([1,sM([0,e.dropout==null?0:e.dropout])]),this.recurrentDropout=oM([1,sM([0,e.recurrentDropout==null?0:e.recurrentDropout])]),this.dropoutFunc=e.dropoutFunc,this.implementation=e.implementation,this.stateSize=[this.units,this.units],this.dropoutMask=null,this.recurrentDropoutMask=null}build(e){var t;e=cN(e);let n=e[e.length-1];this.kernel=this.addWeight(`kernel`,[n,this.units*4],null,this.kernelInitializer,this.kernelRegularizer,!0,this.kernelConstraint),this.recurrentKernel=this.addWeight(`recurrent_kernel`,[this.units,this.units*4],null,this.recurrentInitializer,this.recurrentRegularizer,!0,this.recurrentConstraint);let r;if(this.useBias){if(this.unitForgetBias){let e=this.biasInitializer,n=this.units;r=new(t=class extends RM{apply(t,r){let i=e.apply([n]),a=new BM().apply([n]),o=e.apply([n*2]);return xM(xM(i,a),o)}},t.className=`CustomInit`,t)}else r=this.biasInitializer;this.bias=this.addWeight(`bias`,[this.units*4],null,r,this.biasRegularizer,!0,this.biasConstraint)}else this.bias=null;this.built=!0}call(e,t){return B(()=>{let n=t.training!=null&&t.training;if(e=e,e.length!==3)throw new X(`LSTMCell expects 3 input Tensors (inputs, h, c), got ${e.length}.`);let r=e[1],i=e[2];e=e[0],0<this.dropout&&this.dropout<1&&this.dropoutMask==null&&(this.dropoutMask=KI({ones:()=>c_(e),rate:this.dropout,training:n,count:4,dropoutFunc:this.dropoutFunc})),0<this.recurrentDropout&&this.recurrentDropout<1&&this.recurrentDropoutMask==null&&(this.recurrentDropoutMask=KI({ones:()=>c_(r),rate:this.recurrentDropout,training:n,count:4,dropoutFunc:this.dropoutFunc}));let a=this.dropoutMask,o=this.recurrentDropoutMask,s,c,l,u;0<this.dropout&&this.dropout<1&&(e=U(e,a[0]));let d=wM(e,this.kernel.read());0<this.recurrentDropout&&this.recurrentDropout<1&&(r=U(r,o[0])),d=H(d,wM(r,this.recurrentKernel.read())),this.useBias&&(d=OM(d,this.bias.read()));let[f,p,m,h]=Ky(d,4,d.rank-1);s=this.recurrentActivation.apply(f),c=this.recurrentActivation.apply(p),l=H(U(c,i),U(s,this.activation.apply(m))),u=this.recurrentActivation.apply(h);let g=U(u,this.activation.apply(l));return[g,g,l]})}getConfig(){let e=super.getConfig(),t={units:this.units,activation:QF(this.activation),recurrentActivation:QF(this.recurrentActivation),useBias:this.useBias,kernelInitializer:rN(this.kernelInitializer),recurrentInitializer:rN(this.recurrentInitializer),biasInitializer:rN(this.biasInitializer),unitForgetBias:this.unitForgetBias,kernelRegularizer:aI(this.kernelRegularizer),recurrentRegularizer:aI(this.recurrentRegularizer),biasRegularizer:aI(this.biasRegularizer),activityRegularizer:aI(this.activityRegularizer),kernelConstraint:UN(this.kernelConstraint),recurrentConstraint:UN(this.recurrentConstraint),biasConstraint:UN(this.biasConstraint),dropout:this.dropout,recurrentDropout:this.recurrentDropout,implementation:this.implementation};return Object.assign(Object.assign({},e),t)}};UI.className=`LSTMCell`,V(UI);var WI=class extends LI{constructor(e){e.implementation===0&&console.warn("`implementation=0` has been deprecated, and now defaults to `implementation=1`. Please update your layer call."),e.cell=new UI(e),super(e)}call(e,t){return B(()=>{this.cell.dropoutMask!=null&&(fc(this.cell.dropoutMask),this.cell.dropoutMask=null),this.cell.recurrentDropoutMask!=null&&(fc(this.cell.recurrentDropoutMask),this.cell.recurrentDropoutMask=null);let n=t==null?null:t.mask,r=t==null?null:t.training,i=t==null?null:t.initialState;return super.call(e,{mask:n,training:r,initialState:i})})}static fromConfig(e,t){return t.implmentation===0&&(t.implementation=1),new e(t)}};WI.className=`LSTM`,V(WI);var GI=class extends RI{constructor(e){super(e),this.cells=e.cells}get stateSize(){let e=[];for(let t of this.cells.slice().reverse())Array.isArray(t.stateSize)?e.push(...t.stateSize):e.push(t.stateSize);return e}call(e,t){return B(()=>{e=e;let n=e.slice(1),r=[];for(let e of this.cells.slice().reverse())Array.isArray(e.stateSize)?r.push(n.splice(0,e.stateSize.length)):r.push(n.splice(0,1));r.reverse();let i=[],a;for(let o=0;o<this.cells.length;++o){let s=this.cells[o];n=r[o],a=o===0?[e[0]].concat(n):[a[0]].concat(n),a=s.call(a,t),i.push(a.slice(1))}n=[];for(let e of i.slice().reverse())n.push(...e);return[a[0]].concat(n)})}build(e){aN(e)&&(e=e[0]),e=e;let t;this.cells.forEach((n,r)=>{Qj(`RNNCell_${r}`,()=>{n.build(e),t=Array.isArray(n.stateSize)?n.stateSize[0]:n.stateSize,e=[e[0],t]})}),this.built=!0}getConfig(){let e=super.getConfig(),t={cells:this.cells.map(e=>({className:e.getClassName(),config:e.getConfig()}))};return Object.assign(Object.assign({},e),t)}static fromConfig(e,t,n={}){let r=[];for(let e of t.cells)r.push(rP(e,n));return new e({cells:r})}get trainableWeights(){if(!this.trainable)return[];let e=[];for(let t of this.cells)e.push(...t.trainableWeights);return e}get nonTrainableWeights(){let e=[];for(let t of this.cells)e.push(...t.nonTrainableWeights);if(!this.trainable){let t=[];for(let e of this.cells)t.push(...e.trainableWeights);return t.concat(e)}return e}getWeights(){let e=[];for(let t of this.cells)e.push(...t.weights);return pN(e)}setWeights(e){let t=[];for(let n of this.cells){let r=n.weights.length,i=e.splice(r);for(let e=0;e<n.weights.length;++e)t.push([n.weights[e],i[e]])}mN(t)}};GI.className=`StackedRNNCells`,V(GI);function KI(e){let{ones:t,rate:n,training:r=!1,count:i=1,dropoutFunc:a}=e,o=()=>a==null?jM(t(),n):a(t(),n),s=()=>NM(o,t,r);return!i||i<=1?pc(s().clone()):Array(i).fill(void 0).map(s).map(e=>pc(e.clone()))}Y();var qI=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols==`function`)for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n},JI=class extends LI{constructor(e){if(e.unroll)throw new fj(`Unrolling is not possible with convolutional RNNs.`);if(Array.isArray(e.cell))throw new fj(`It is not possible at the moment to stack convolutional cells.`);super(e),this.inputSpec=[new hN({ndim:5})]}call(e,t){return B(()=>{if(this.cell.dropoutMask!=null&&(fc(this.cell.dropoutMask),this.cell.dropoutMask=null),this.cell.recurrentDropoutMask!=null&&(fc(this.cell.recurrentDropoutMask),this.cell.recurrentDropoutMask=null),t&&t.constants)throw new X(`ConvRNN2D cell does not support constants`);let n=t==null?null:t.mask,r=t==null?null:t.training,i=t==null?null:t.initialState;return super.call(e,{mask:n,training:r,initialState:i})})}computeOutputShape(e){let t=this.computeSingleOutputShape(e);return this.returnSequences||(t=[t[0],...t.slice(2)]),this.returnState&&(t=[t,...[,,].fill([e[0],...t.slice(-3)])]),t}getInitialState(e){return B(()=>{let{stateSize:t}=this.cell,n=e.shape,r=this.computeSingleOutputShape(n),i=Pg([r[0],...r.slice(2)]);return Array.isArray(t)?Array(t.length).fill(i):[i]})}resetStates(e,t=!1){B(()=>{if(!this.stateful)throw new uj(`Cannot call resetStates() on an RNN Layer that is not stateful.`);let n=this.inputSpec[0].shape,r=this.computeSingleOutputShape(n),i=[r[0],...r.slice(2)];if(n[0]==null)throw new X("If an RNN is stateful, it needs to know its batch size. Specify the batch size of your input tensors: \n- If using a Sequential model, specify the batch size by passing a `batchInputShape` option to your first layer.\n- If using the functional API, specify the batch size by passing a `batchShape` option to your Input layer.");if(this.getStates()==null)this.states_=Array.isArray(this.cell.stateSize)?this.cell.stateSize.map(()=>Pg(i)):[Pg(i)];else if(e==null)fc(this.states_),this.keptStates!=null&&(fc(this.keptStates),this.keptStates=[]),Array.isArray(this.cell.stateSize)?this.states_=this.cell.stateSize.map(()=>Pg(i)):this.states_[0]=Pg(i);else{if(Array.isArray(e)||(e=[e]),e.length!==this.states_.length)throw new X(`Layer ${this.name} expects ${this.states_.length} state(s), but it received ${e.length} state value(s). Input received: ${e}`);t?this.keptStates.push(this.states_.slice()):fc(this.states_);for(let t=0;t<this.states_.length;++t){let n=e[t],r=i;if(!T(n.shape,r))throw new X(`State ${t} is incompatible with layer ${this.name}: expected shape=${r}, received shape=${n.shape}`);this.states_[t]=n}}this.states_=this.states_.map(e=>pc(e.clone()))})}computeSingleOutputShape(e){let{dataFormat:t,filters:n,kernelSize:r,padding:i,strides:a,dilationRate:o}=this.cell,s=t===`channelsFirst`,c=e[s?3:2],l=e[s?4:3],u=hI(c,r[0],i,a[0],o[0]),d=hI(l,r[1],i,a[1],o[1]);return[...e.slice(0,2),...s?[n,u,d]:[u,d,n]]}};JI.className=`ConvRNN2D`;var YI=class extends UI{constructor(e){let{filters:t,kernelSize:n,strides:r,padding:i,dataFormat:a,dilationRate:o}=e;super(Object.assign(Object.assign({},e),{units:t})),this.filters=t,Mj(this.filters,`filters`),this.kernelSize=mI(n,2,`kernelSize`),this.kernelSize.forEach(e=>Mj(e,`kernelSize`)),this.strides=mI(r||1,2,`strides`),this.strides.forEach(e=>Mj(e,`strides`)),this.padding=i||`valid`,Jj(this.padding),this.dataFormat=a||`channelsLast`,Kj(this.dataFormat),this.dilationRate=mI(o||1,2,`dilationRate`),this.dilationRate.forEach(e=>Mj(e,`dilationRate`))}build(e){var t;e=cN(e);let n=this.dataFormat===`channelsFirst`?1:e.length-1;if(e[n]==null)throw new X(`The channel dimension of the input should be defined. Found ${e[n]}`);let r=e[n],i=this.kernelSize.concat([r,this.filters*4]);this.kernel=this.addWeight(`kernel`,i,null,this.kernelInitializer,this.kernelRegularizer,!0,this.kernelConstraint);let a=this.kernelSize.concat([this.filters,this.filters*4]);if(this.recurrentKernel=this.addWeight(`recurrent_kernel`,a,null,this.recurrentInitializer,this.recurrentRegularizer,!0,this.recurrentConstraint),this.useBias){let e;if(this.unitForgetBias){let n=this.biasInitializer,r=this.filters;e=new(t=class extends RM{apply(e,t){return bM([n.apply([r]),Ig([r]),n.apply([r*2])])}},t.className=`CustomInit`,t)}else e=this.biasInitializer;this.bias=this.addWeight(`bias`,[this.filters*4],null,e,this.biasRegularizer,!0,this.biasConstraint)}this.built=!0}call(e,t){return B(()=>{if(e.length!==3)throw new X(`ConvLSTM2DCell expects 3 input Tensors (inputs, h, c), got ${e.length}.`);let n=t.training||!1,r=e[0],i=e[1],a=e[2];0<this.dropout&&this.dropout<1&&this.dropoutMask==null&&(this.dropoutMask=KI({ones:()=>c_(r),rate:this.dropout,training:n,count:4,dropoutFunc:this.dropoutFunc}));let o=this.dropoutMask,s=(e,t,n)=>!t||!t[n]?e:U(t[n],e),c=s(r,o,0),l=s(r,o,1),u=s(r,o,2),d=s(r,o,3);0<this.recurrentDropout&&this.recurrentDropout<1&&this.recurrentDropoutMask==null&&(this.recurrentDropoutMask=KI({ones:()=>c_(i),rate:this.recurrentDropout,training:n,count:4,dropoutFunc:this.dropoutFunc}));let f=this.recurrentDropoutMask,p=s(i,f,0),m=s(i,f,1),h=s(i,f,2),g=s(i,f,3),[_,v,y,b]=Ky(this.kernel.read(),4,3),[x,S,C,w]=this.useBias?Ky(this.bias.read(),4):[null,null,null,null];c=this.inputConv(c,_,x,this.padding),l=this.inputConv(l,v,S,this.padding),u=this.inputConv(u,y,C,this.padding),d=this.inputConv(d,b,w,this.padding);let[T,E,D,ee]=Ky(this.recurrentKernel.read(),4,3);p=this.recurrentConv(p,T),m=this.recurrentConv(m,E),h=this.recurrentConv(h,D),g=this.recurrentConv(g,ee);let te=this.recurrentActivation.apply(H(c,p)),ne=this.recurrentActivation.apply(H(l,m)),re=H(U(ne,a),U(te,this.activation.apply(H(u,h)))),ie=U(this.recurrentActivation.apply(H(d,g)),this.activation.apply(re));return[ie,ie,re]})}getConfig(){let e=super.getConfig(),{units:t}=e,n=qI(e,[`units`]),r={filters:this.filters,kernelSize:this.kernelSize,padding:this.padding,dataFormat:this.dataFormat,dilationRate:this.dilationRate,strides:this.strides};return Object.assign(Object.assign({},n),r)}inputConv(e,t,n,r){let i=Nf(e,t,this.strides,r||`valid`,this.dataFormat===`channelsFirst`?`NCHW`:`NHWC`,this.dilationRate);return n?OM(i,n,this.dataFormat):i}recurrentConv(e,t){return Nf(e,t,1,`same`,this.dataFormat===`channelsFirst`?`NCHW`:`NHWC`)}};YI.className=`ConvLSTM2DCell`,V(YI);var XI=class extends JI{constructor(e){let t=new YI(e);super(Object.assign(Object.assign({},e),{cell:t}))}static fromConfig(e,t){return new e(t)}};XI.className=`ConvLSTM2D`,V(XI),Y();var ZI=class extends bN{constructor(e){super(e),this.rate=Math.max(Math.min(e.rate,1),0),this.noiseShape=e.noiseShape,this.seed=e.seed,this.supportsMasking=!0}getNoiseShape(e){if(this.noiseShape==null)return this.noiseShape;let t=e.shape,n=[];for(let e=0;e<this.noiseShape.length;++e)n.push(this.noiseShape[e]==null?t[e]:this.noiseShape[e]);return n}call(e,t){return B(()=>{this.invokeCallHook(e,t);let n=sN(e);if(0<this.rate&&this.rate<1){let e=t.training!=null&&t.training,r=this.getNoiseShape(n);return NM(()=>jM(n,this.rate,r,this.seed),()=>n,e)}return e})}getConfig(){let e={rate:this.rate,noiseShape:this.noiseShape,seed:this.seed},t=super.getConfig();return Object.assign(e,t),e}dispose(){return super.dispose()}};ZI.className=`Dropout`,V(ZI);var QI=class extends ZI{constructor(e){super(e),this.inputSpec=[{ndim:3}]}getNoiseShape(e){let t=e.shape;return[t[0],1,t[2]]}};QI.className=`SpatialDropout1D`,V(QI);var $I=class extends bN{constructor(e){if(super(e),this.activation=null,this.useBias=!0,this.kernel=null,this.bias=null,this.DEFAULT_KERNEL_INITIALIZER=`glorotNormal`,this.DEFAULT_BIAS_INITIALIZER=`zeros`,e.batchInputShape==null&&e.inputShape==null&&e.inputDim!=null){let t=null;e.batchSize!=null&&(t=e.batchSize),this.batchInputShape=[t,e.inputDim]}this.units=e.units,Mj(this.units,`units`),this.activation=eI(e.activation),e.useBias!=null&&(this.useBias=e.useBias),this.kernelInitializer=iN(e.kernelInitializer||this.DEFAULT_KERNEL_INITIALIZER),this.biasInitializer=iN(e.biasInitializer||this.DEFAULT_BIAS_INITIALIZER),this.kernelConstraint=GN(e.kernelConstraint),this.biasConstraint=GN(e.biasConstraint),this.kernelRegularizer=sI(e.kernelRegularizer),this.biasRegularizer=sI(e.biasRegularizer),this.activityRegularizer=sI(e.activityRegularizer),this.supportsMasking=!0,this.inputSpec=[{minNDim:2}]}build(e){e=cN(e);let t=e[e.length-1];this.kernel??(this.kernel=this.addWeight(`kernel`,[t,this.units],null,this.kernelInitializer,this.kernelRegularizer,!0,this.kernelConstraint),this.useBias&&(this.bias=this.addWeight(`bias`,[this.units],null,this.biasInitializer,this.biasRegularizer,!0,this.biasConstraint))),this.inputSpec=[{minNDim:2,axes:{[-1]:t}}],this.built=!0}computeOutputShape(e){e=cN(e);let t=e.slice();return t[t.length-1]=this.units,t}call(e,t){return B(()=>{this.invokeCallHook(e,t);let n=sN(e),r=Fj(this.activation.getClassName()),i;return r==null?(i=wM(n,this.kernel.read()),this.bias!=null&&(i=OM(i,this.bias.read())),this.activation!=null&&(i=this.activation.apply(i))):i=wM(n,this.kernel.read(),r,this.bias?this.bias.read():null),i})}getConfig(){let e={units:this.units,activation:QF(this.activation),useBias:this.useBias,kernelInitializer:rN(this.kernelInitializer),biasInitializer:rN(this.biasInitializer),kernelRegularizer:aI(this.kernelRegularizer),biasRegularizer:aI(this.biasRegularizer),activityRegularizer:aI(this.activityRegularizer),kernelConstraint:UN(this.kernelConstraint),biasConstraint:UN(this.biasConstraint)},t=super.getConfig();return Object.assign(e,t),e}};$I.className=`Dense`,V($I);var eL=class extends bN{constructor(e){e||={},super(e),this.inputSpec=[{minNDim:3}],this.dataFormat=e.dataFormat}computeOutputShape(e){e=cN(e);for(let t of e.slice(1))if(t==null)throw new X(`The shape of the input to "Flatten" is not fully defined (got ${e.slice(1)}). Make sure to pass a complete "input_shape" or "batch_input_shape" argument to the first layer in your model.`);return[e[0],aM(e,1)]}call(e,t){return B(()=>{this.invokeCallHook(e,t);let n=sN(e);if(this.dataFormat===`channelsFirst`&&n.rank>1){let e=[0];for(let t=2;t<n.rank;++t)e.push(t);e.push(1),n=Fc(n,e)}return gM(n)})}getConfig(){let e={};this.dataFormat!=null&&(e.dataFormat=this.dataFormat);let t=super.getConfig();return Object.assign(e,t),e}};eL.className=`Flatten`,V(eL);var tL=class extends bN{constructor(e){super(e),this.supportsMasking=!0,this.activation=eI(e.activation)}call(e,t){return B(()=>{this.invokeCallHook(e,t);let n=sN(e);return this.activation.apply(n)})}getConfig(){let e={activation:QF(this.activation)},t=super.getConfig();return Object.assign(e,t),e}};tL.className=`Activation`,V(tL);var nL=class extends bN{constructor(e){super(e),this.n=e.n,this.inputSpec=[{ndim:2}]}computeOutputShape(e){return[e[0],this.n,e[1]]}call(e,t){return B(()=>(e=sN(e),mM(e,this.n)))}getConfig(){let e={n:this.n},t=super.getConfig();return Object.assign(e,t),e}};nL.className=`RepeatVector`,V(nL);var rL=class extends bN{constructor(e){super(e),this.targetShape=e.targetShape;for(let e=0;e<this.targetShape.length;++e)this.isUnknown(this.targetShape[e])&&(this.targetShape[e]=null)}isUnknown(e){return e<0||e==null}fixUnknownDimension(e,t){let n=`Total size of new array must be unchanged.`,r=t.slice(),i=1,a=null;for(let e=0;e<r.length;++e){let t=r[e];if(this.isUnknown(t)){if(a===null)a=e;else throw new X(`Can only specifiy one unknown dimension.`)}else i*=t}let o=aM(e);if(a!==null){if(i===0||o%i!==0)throw new X(n);r[a]=o/i}else if(o!==i)throw new X(n);return r}computeOutputShape(e){let t=!1;for(let n=0;n<e.length;++n)if(this.isUnknown(e[n])){t=!0;break}return t?e.slice(0,1).concat(this.targetShape):e.slice(0,1).concat(this.fixUnknownDimension(e.slice(1),this.targetShape))}call(e,t){return B(()=>{this.invokeCallHook(e,t);let n=sN(e),r=n.shape,i=r.slice(0,1).concat(this.fixUnknownDimension(r.slice(1),this.targetShape));return G(n,i)})}getConfig(){let e={targetShape:this.targetShape},t=super.getConfig();return Object.assign(e,t),e}};rL.className=`Reshape`,V(rL);var iL=class extends bN{constructor(e){if(super(e),e.dims==null)throw Error("Required configuration field `dims` is missing during Permute constructor call.");if(!Array.isArray(e.dims))throw Error(`Permute constructor requires \`dims\` to be an Array, but received ${e.dims} instead.`);let t=cM(1,e.dims.length+1);if(!T(e.dims.slice().sort(),t))throw Error("Invalid permutation `dims`: "+JSON.stringify(e.dims)+" `dims` must contain consecutive integers starting from 1.");this.dims=e.dims,this.dimsIncludingBatch=[0].concat(this.dims),this.inputSpec=[new hN({ndim:this.dims.length+1})]}computeOutputShape(e){e=cN(e);let t=e.slice();return this.dims.forEach((n,r)=>{t[r+1]=e[n]}),t}call(e,t){return Fc(sN(e),this.dimsIncludingBatch)}getConfig(){let e={dims:this.dims},t=super.getConfig();return Object.assign(e,t),e}};iL.className=`Permute`,V(iL);var aL=class extends bN{constructor(e){super(e??{}),this.supportsMasking=!0,this.maskValue=e==null||e.maskValue==null?0:e.maskValue}computeOutputShape(e){return e}getConfig(){let e=super.getConfig(),t={maskValue:this.maskValue};return Object.assign(t,e),t}computeMask(e,t){let n=sN(e);return ku(a_(n,this.maskValue),-1)}call(e,t){return B(()=>{this.invokeCallHook(e,t);let n=sN(e),r=ku(a_(n,this.maskValue),-1,!0);return U(n,z(r,n.dtype))})}};aL.className=`Masking`,V(aL),Y();var oL=class extends bN{constructor(e){if(super(e),this.embeddings=null,this.DEFAULT_EMBEDDINGS_INITIALIZER=`randomUniform`,e.batchInputShape==null&&e.inputShape==null){let t=null;e.batchSize!=null&&(t=e.batchSize),this.batchInputShape=e.inputLength==null?[t,null]:[t].concat(yj(e.inputLength))}this.inputDim=e.inputDim,Mj(this.inputDim,`inputDim`),this.outputDim=e.outputDim,Mj(this.outputDim,`outputDim`),this.embeddingsInitializer=iN(e.embeddingsInitializer||this.DEFAULT_EMBEDDINGS_INITIALIZER),this.embeddingsRegularizer=sI(e.embeddingsRegularizer),this.activityRegularizer=sI(e.activityRegularizer),this.embeddingsConstraint=GN(e.embeddingsConstraint),this.maskZero=e.maskZero,this.supportsMasking=e.maskZero,this.inputLength=e.inputLength}build(e){this.embeddings=this.addWeight(`embeddings`,[this.inputDim,this.outputDim],this.dtype,this.embeddingsInitializer,this.embeddingsRegularizer,!0,this.embeddingsConstraint),this.built=!0}warnOnIncompatibleInputShape(e){}computeMask(e,t){return B(()=>this.maskZero?(e=sN(e),a_(e,Np(e))):null)}computeOutputShape(e){if(e=cN(e),this.inputLength==null)return[...e,this.outputDim];let t=yj(this.inputLength);if(t.length!==e.length-1)throw new X(`"inputLength" is ${this.inputLength}, but received input shape has shape ${e}`);{let n=0;for(let r=0;r<t.length;++r){let i=t[r],a=e[r+1];if(i!=null&&a!=null&&i!==a)throw new X(`"inputLength" is ${this.inputLength}, but received input shape has shape ${e}`);i??(t[n]=a),n++}}return[e[0],...t,this.outputDim]}call(e,t){return B(()=>{this.invokeCallHook(e,t);let n=sN(e);n.dtype!==`int32`&&(n=fM(n,`int32`));let r=TM(this.embeddings.read(),G(n,[n.size]));return G(r,cN(this.computeOutputShape(n.shape)))})}getConfig(){let e={inputDim:this.inputDim,outputDim:this.outputDim,embeddingsInitializer:rN(this.embeddingsInitializer),embeddingsRegularizer:aI(this.embeddingsRegularizer),activityRegularizer:aI(this.activityRegularizer),embeddingsConstraint:UN(this.embeddingsConstraint),maskZero:this.maskZero,inputLength:this.inputLength},t=super.getConfig();return Object.assign(e,t),e}};oL.className=`Embedding`,V(oL),Y();var sL=class extends bN{constructor(e){super(e||{}),this.supportsMasking=!0}mergeFunction(e){throw new fj}computeElementwiseOpOutputShape(e,t){if(e==null||t==null)return null;if(e.length<t.length)return this.computeElementwiseOpOutputShape(t,e);if(t.length===0)return e;let n=e.slice(0,e.length-t.length);for(let r=0;r<t.length;++r){let i=e[e.length-t.length+r],a=t[r];if(i==null||a==null||i<0||a<0)n.push(null);else if(i===1)n.push(a);else if(a===1)n.push(i);else{if(i!==a)throw new X(`Operands could not be broadcast together with shapes `+JSON.stringify(e)+` `+JSON.stringify(t));n.push(i)}}return n}build(e){if(Array.isArray(e)&&!Array.isArray(e[0])&&(e=[cN(e)]),e=e,e.length<2)throw new X(`A merge layer should be called on an Array of at least 2 inputs. Got ${e.length} input(s).`);let t=[];for(let n of e)n!=null&&n[0]!==null&&t.push(n[0]);if(t=Oj(t),t.length>1)throw new X(`Can not merge tensors with different batch sizes. Got tensors with shapes: ${JSON.stringify(e)}.`);let n=e[0]==null?null:e[0].slice(1);for(let t=1;t<e.length;++t){let r=e[t]==null?null:e[t].slice(1);n=this.computeElementwiseOpOutputShape(n,r)}let r=e.map(e=>e.length);this.reshapeRequired=e.indexOf(null)!==-1||Oj(r).length!==1}call(e,t){return B(()=>{if(e=e,this.reshapeRequired){let t=[],n=e.map(e=>e.rank);if(n.indexOf(null)===-1){let r=sM(n);for(let n of e){let e=n.rank;for(let t=0;t<r-e;++t)n=pM(n,1);t.push(n)}return this.mergeFunction(t)}{let n=!1;for(let r of e){let e=r.rank;if(e==null){let e=r.shape,i=e[0],a=e.slice(1).concat([i]),o=G(r,[i].concat(aM(e.slice(1))));o=Fc(o,[1,0]),o=G(o,a),t.push(o),n=!0}else if(e>1){let i=cM(1,e).concat([0]);t.push(Fc(r,i)),n=!0}else t.push(r)}let r=this.mergeFunction(t),i=r.rank;if(n){if(i==null){let e=r.shape,t=e[e.length-1],n=[t].concat(e.slice(0,e.length-1));r=G(Fc(G(r,[-1,t]),[1,0]),n)}else if(i>1){let e=[i-1].concat(cM(0,i-1));r=Fc(r,e)}}return r}}return this.mergeFunction(e)})}computeOutputShape(e){e=e;let t;t=e[0]==null?null:e[0].slice(1);for(let n=1;n<e.length;++n){let r=e[n]==null?null:e[n].slice(1);t=this.computeElementwiseOpOutputShape(t,r)}let n=[];for(let t of e)t!=null&&t[0]!==null&&n.push(t[0]);return n=Oj(n),t=n.length===1?n.concat(t):[null].concat(t),t}computeMask(e,t){return B(()=>{if(t==null)return null;if(!Array.isArray(t))throw new X("`mask` should be an Array");if(!Array.isArray(e))throw new X("`inputs` should be an Array");if(t.length!==e.length)throw new X(`The Array 'inputs' and 'mask' are expected to have the same length, but have different lengths (${e.length} vs ${t.length})`);if(t.every(e=>e==null))return null;t=t.map(e=>e==null?e:Fm(e,0));let n=t[0];for(let e=1;e<t.length-1;++e)n=ng(n,t[e]);return n})}},cL=class extends sL{constructor(e){super(e)}mergeFunction(e){return B(()=>{let t=e[0].clone();for(let n=1;n<e.length;++n)t=H(t,e[n]);return t})}};cL.className=`Add`,V(cL);var lL=class extends sL{constructor(e){super(e)}mergeFunction(e){return B(()=>{let t=e[0].clone();for(let n=1;n<e.length;++n)t=U(t,e[n]);return t})}};lL.className=`Multiply`,V(lL);var uL=class extends sL{constructor(e){super(e)}mergeFunction(e){return B(()=>{let t=e[0].clone();for(let n=1;n<e.length;++n)t=H(t,e[n]);return U(1/e.length,t)})}};uL.className=`Average`,V(uL);var dL=class extends sL{constructor(e){super(e)}mergeFunction(e){return B(()=>{let t=e[0];for(let n=1;n<e.length;++n)t=kg(t,e[n]);return t})}};dL.className=`Maximum`,V(dL);var fL=class extends sL{constructor(e){super(e)}mergeFunction(e){return B(()=>{let t=e[0];for(let n=1;n<e.length;++n)t=Vg(t,e[n]);return t})}};fL.className=`Minimum`,V(fL);var pL=class extends sL{constructor(e){super(e),this.DEFAULT_AXIS=-1,e??={},this.axis=e.axis==null?this.DEFAULT_AXIS:e.axis,this.supportsMasking=!0,this.reshapeRequired=!1}build(e){if(!(Array.isArray(e)&&Array.isArray(e[0]))||e.length===1)throw new X("A `Concatenate` layer should be called on a list of at least 2 inputs");e=e;let t=!0;for(let n of e)if(n!=null){t=!1;break}if(t)return;let n=[];for(let t=0;t<e.length;++t){let r=e[t].slice();r.splice(this.axis,1);let i=!1;for(let e of n)if(T(e,r)){i=!0;break}i||n.push(r)}if(n.length>1)throw new X("A `Concatenate` layer requires inputs with matching shapes except for the concat axis. Got input shapes: "+JSON.stringify(e))}mergeFunction(e){return B(()=>bM(e,this.axis))}computeOutputShape(e){if(!(Array.isArray(e)&&Array.isArray(e[0])))throw new X("A `Concatenate` layer should be called on a list of inputs.");let t=e,n=t[0].slice(),r=this.axis<0?n.length+this.axis:this.axis;for(let e of t.slice(1)){if(n[r]==null||e[r]==null){n[r]=null;break}n[r]+=e[r]}return n}computeMask(e,t){if(t==null)return null;if(!Array.isArray(t))throw new X("`mask` should be an array for Concatenate");if(!Array.isArray(e))throw new X("`inputs` should be an array for Concatenate");if(t.length!==e.length)throw new X(`Mismatch in the length of mask (${t.length}) and the legnth of inputs (${e.length})`);return B(()=>{let n=!0;if(t.forEach(e=>{e!=null&&(n=!1)}),n)return null;let r=[];for(let n=0;n<e.length;++n)t[n]==null?r.push(z(c_(e[n]),`bool`)):t[n].rank<e[n].rank?r.push(Fm(t[n],-1)):r.push(t[n]);let i=Td(r,this.axis);return Eu(i,-1,!1)})}getConfig(){let e={axis:this.axis},t=super.getConfig();return Object.assign(e,t),e}};pL.className=`Concatenate`,V(pL);function mL(e,t){for(;e<0;)e+=t;return e}function hL(e,t,n){if(e.shape.length>3||t.shape.length>3)throw new fj(`batchDot is not implemented for tensors of 4D or higher rank yet`);if(y(e.shape.length>=2,()=>`batchDot requires the rank of x to be >= 2, but got ${e.shape.length}`),y(e.shape.length>=2,()=>`batchDot requires the rank of y to be >= 2, but got ${t.shape.length}`),typeof n==`number`&&(n=[n,n]),e.dtype===`complex64`||t.dtype===`complex64`)throw new fj(`batchDot is not implemented for complex64-type Tensors yet.`);let r=e.shape.length,i=t.shape.length;n??=[r-1,i-2];let a=n;return B(()=>{let n;if(r>i){n=r-i;let e=[];for(let t=0;t<n;++t)e.push(1);t=G(t,t.shape.concat(e))}else if(i>r){n=i-r;let t=[];for(let e=0;e<n;++e)t.push(1);e=G(e,e.shape.concat(t))}else n=0;let o;if(e.shape.length===2&&t.shape.length===2)o=a[0]===a[1]?q(U(e,t),a[0]):q(U(Fc(e,[1,0]),t),a[1]);else{let n=a[0]!==e.shape.length-1,r=a[1]===t.shape.length-1;o=$s(e,t,n,r)}if(n>0){let e;e=r>i?r+i-3:r-1;let t=[];for(let r=e;r<e+n;++r)t.push(r);o=tb(o,t)}return o.shape.length===1&&(o=Fm(o,1)),o})}var gL=class extends sL{constructor(e){super(e),this.axes=e.axes,this.normalize=e.normalize!=null&&e.normalize,this.supportsMasking=!0,this.reshapeRequired=!1}build(e){y(Array.isArray(e)&&e.length===2&&Array.isArray(e[0])&&Array.isArray(e[1]),()=>"A `Dot` layer should be called on a list of exactly 2 inputs.");let t=e[0],n=e[1];if(t.length>3||n.length>3)throw new fj(`Dot layer does not support tensors of 4D or higher rank yet.`);let r=this.interpretAxes(t,n);if(t[r[0]]!==n[r[1]])throw new X(`Dimension incompatibility: ${t[r[0]]} !== ${n[r[1]]}`)}mergeFunction(e){if(e.length!==2)throw new X(`A \`Dot\` layer must be called on exactly 2 inputs, but received ${e.length} input(s).`);let t=e[0],n=e[1],r;return r=Array.isArray(this.axes)?this.axes.map((t,n)=>mL(t,e[n].shape.length)):[mL(this.axes,t.shape.length),mL(this.axes,n.shape.length)],this.normalize&&(t=iP(t,r[0]),n=iP(n,r[1])),hL(t,n,r)}interpretAxes(e,t){let n;return n=Array.isArray(this.axes)?this.axes:[mL(this.axes,e.length),mL(this.axes,t.length)],n}computeOutputShape(e){y(Array.isArray(e)&&e.length===2&&Array.isArray(e[0])&&Array.isArray(e[1]),()=>"A `Dot` layer should be called on a list of exactly 2 inputs.");let t=e[0].slice(),n=e[1].slice();if(t.length>3||n.length>3)throw new fj(`Dot layer does not support tensors of 4D or higher rank yet.`);let r=this.interpretAxes(t,n);t.splice(r[0],1),n.splice(r[1],1),n.splice(0,1);let i=t.concat(n);return i.length===1&&i.push(1),i}computeMask(e,t){return null}getConfig(){let e={axes:this.axes,normalize:this.normalize},t=super.getConfig();return Object.assign(e,t),e}};gL.className=`Dot`,V(gL),Y();var _L=class extends bN{constructor(e){super(e),this.supportsMasking=!0,this.stddev=e.stddev}computeOutputShape(e){return e}getConfig(){let e=super.getConfig(),t={stddev:this.stddev};return Object.assign(t,e),t}call(e,t){return B(()=>{this.invokeCallHook(e,t);let n=sN(e);return NM(()=>H(CM(n.shape,0,this.stddev),n),()=>n,t.training||!1)})}};_L.className=`GaussianNoise`,V(_L);var vL=class extends bN{constructor(e){super(e),this.supportsMasking=!0,this.rate=e.rate}computeOutputShape(e){return e}getConfig(){let e=super.getConfig(),t={rate:this.rate};return Object.assign(t,e),t}call(e,t){return B(()=>{this.invokeCallHook(e,t);let n=sN(e);return this.rate>0&&this.rate<1?NM(()=>{let e=Math.sqrt(this.rate/(1-this.rate));return U(n,CM(n.shape,1,e))},()=>n,t.training||!1):n})}};vL.className=`GaussianDropout`,V(vL);var yL=class extends bN{constructor(e){super(e),this.supportsMasking=!0,this.rate=e.rate,this.noiseShape=e.noiseShape}_getNoiseShape(e){return this.noiseShape||sN(e).shape}computeOutputShape(e){return e}getConfig(){let e=super.getConfig(),t={rate:this.rate};return Object.assign(t,e),t}call(e,t){return B(()=>{if(this.rate<1&&this.rate>0){let n=this._getNoiseShape(e);return NM(()=>{let t=sN(e),r=-1.7580993408473766,i=nh(Cv(n),this.rate);i=fM(i,`float32`);let a=((1-this.rate)*(1+this.rate*r**2))**-.5,o=-a*r*this.rate,s=H(U(t,i),U(H(i,-1),r));return H(U(s,a),o)},()=>sN(e),t.training||!1)}return e})}};yL.className=`AlphaDropout`,V(yL),Y();function bL(e,t,n,r,i,a=.001){let o;if(e.rank===2)o=Jd(e,t,n,r,i,a);else if(e.rank===3)o=Zd(e,t,n,r,i,a);else if(e.rank===4)o=ef(e,t,n,r,i,a);else throw new fj(`batchNormalization is not implemented for array of rank ${e.rank} yet`);return o}function xL(e,t,n,r,i=.001){return B(()=>{let a=Xg(e,r),o=a.mean,s=a.variance;return[bL(e,o,s,n,t,i),o,s]})}function SL(e,t,n,r,i=.001){return B(()=>{let a=Xg(e,r),o=a.mean,s=a.variance,c=[];for(let t of cM(0,e.rank))r.indexOf(t)===-1?c.push(e.shape[t]):c.push(1);let l=G(o,c),u=G(s,c),d=t==null?null:G(t,c);return[bL(e,l,u,n==null?null:G(n,c),d,i),o,s]})}function CL(e,t,n,r,i=.001){return T(r.slice().sort(),cM(0,e.rank-1))?xL(e,t,n,r,i):SL(e,t,n,r,i)}var wL=class extends bN{constructor(e){e??={},super(e),this.supportsMasking=!0,this.axis=e.axis==null?-1:e.axis,this.momentum=e.momentum==null?.99:e.momentum,this.epsilon=e.epsilon==null?.001:e.epsilon,this.center=e.center==null||e.center,this.scale=e.scale==null||e.scale,this.betaInitializer=iN(e.betaInitializer||`zeros`),this.gammaInitializer=iN(e.gammaInitializer||`ones`),this.movingMeanInitializer=iN(e.movingMeanInitializer||`zeros`),this.movingVarianceInitializer=iN(e.movingVarianceInitializer||`ones`),this.betaConstraint=GN(e.betaConstraint),this.gammaConstraint=GN(e.gammaConstraint),this.betaRegularizer=sI(e.betaRegularizer),this.gammaRegularizer=sI(e.gammaRegularizer)}build(e){e=cN(e);let t=this.axis>=0?this.axis:this.axis+e.length,n=e[t];if(n==null)throw new X(`Axis ${t} of input tensor should have a defined dimension but the layer received an input with shape ${JSON.stringify(e)}.`);this.inputSpec=[new hN({ndim:e.length,axes:{[t]:n}})];let r=[n];this.scale&&(this.gamma=this.addWeight(`gamma`,r,null,this.gammaInitializer,this.gammaRegularizer,!0,this.gammaConstraint)),this.center&&(this.beta=this.addWeight(`beta`,r,null,this.betaInitializer,this.betaRegularizer,!0,this.betaConstraint)),this.movingMean=this.addWeight(`moving_mean`,r,null,this.movingMeanInitializer,null,!1),this.movingVariance=this.addWeight(`moving_variance`,r,null,this.movingVarianceInitializer,null,!1),this.built=!0}call(e,t){return B(()=>{let n=t.training!=null&&t.training,r=sN(e),i=r.shape,a=i.length,o=cM(0,a),s=this.axis>=0?this.axis:this.axis+a;o.splice(s,1);let c=hj(1,a);c[s]=i[s];let l=o.slice();l.sort();let u=!T(l,cM(0,a).slice(0,a-1)),d=()=>{if(u){let e=G(this.movingMean.read(),c),t=G(this.movingVariance.read(),c),n=this.center?G(this.beta.read(),c):null,i=this.scale?G(this.gamma.read(),c):null;return bL(r,e,t,n,i,this.epsilon)}return bL(r,this.movingMean.read(),this.movingVariance.read(),this.beta==null?null:this.beta.read(),this.gamma==null?null:this.gamma.read(),this.epsilon)};if(!n)return d();let[f,p,m]=CL(r,this.gamma.read(),this.beta.read(),o,this.epsilon),h=(e,t,n)=>{B(()=>{let r=1-n,i=e.read(),a=U(J(i,t),r);e.write(J(i,a))})};return h(this.movingMean,p,this.momentum),h(this.movingVariance,m,this.momentum),f})}getConfig(){let e={axis:this.axis,momentum:this.momentum,epsilon:this.epsilon,center:this.center,scale:this.scale,betaInitializer:rN(this.betaInitializer),gammaInitializer:rN(this.gammaInitializer),movingMeanInitializer:rN(this.movingMeanInitializer),movingVarianceInitializer:rN(this.movingVarianceInitializer),betaRegularizer:aI(this.betaRegularizer),gammaRegularizer:aI(this.gammaRegularizer),betaConstraint:UN(this.betaConstraint),gammaConstraint:UN(this.gammaConstraint)},t=super.getConfig();return Object.assign(e,t),e}};wL.className=`BatchNormalization`,V(wL);var TL=class extends bN{constructor(e){if(e??={},super(e),this.axis=e.axis==null?-1:e.axis,typeof this.axis==`number`){if(!Number.isInteger(this.axis))throw Error(`Expected axis to be an integer, but received ${this.axis}`)}else if(Array.isArray(this.axis)){for(let e of this.axis)if(!Number.isInteger(e))throw Error(`Expected axis to be an array of integers, but received ${JSON.stringify(this.axis)}`)}else throw Error(`Expected axis to be an integer or an array of integers, but received ${JSON.stringify(this.axis)}`);this.epsilon=e.epsilon==null?.001:e.epsilon,this.center=e.center==null||e.center,this.scale=e.scale==null||e.scale,this.betaInitializer=iN(e.betaInitializer||`zeros`),this.gammaInitializer=iN(e.gammaInitializer||`ones`),this.betaRegularizer=sI(e.betaRegularizer),this.gammaRegularizer=sI(e.gammaRegularizer),this.supportsMasking=!0}build(e){e=cN(e);let t=e.length;typeof this.axis==`number`&&(this.axis=[this.axis]);for(let e=0;e<this.axis.length;++e)this.axis[e]<0&&(this.axis[e]+=t);for(let e of this.axis)if(e<0||e>=t)throw Error(`Invalid axis: ${e}`);if(this.axis.length!==Oj(this.axis).length)throw Error(`Found duplicate axes in: ${this.axis}`);let n=this.axis.map(t=>e[t]);this.gamma=this.scale?this.addWeight(`gamma`,n,`float32`,this.gammaInitializer,this.gammaRegularizer,!0):null,this.beta=this.center?this.addWeight(`beta`,n,`float32`,this.betaInitializer,this.betaRegularizer,!0):null,this.built=!0}call(e,t){let n=sN(e),r=n.shape,i=r.length;return B(()=>{let{mean:e,variance:t}=Xg(n,this.axis,!0),a=hj(1,i);for(let e of this.axis)a[e]=r[e];let o=e=>e!=null&&e.shape.length!==i?G(e,a):e,s=this.scale?o(this.gamma.read()):null,c=this.center?o(this.beta.read()):null,l=[],u=[];for(let e=0;e<i;++e)this.axis.indexOf(e)===-1?(l.push(1),u.push(r[e])):(l.push(r[e]),u.push(1));return e=Vm(e,l),t=Vm(t,l),s!=null&&(s=Vm(s,u)),c!=null&&(c=Vm(c,u)),bL(n,e,t,c,s,this.epsilon)})}getConfig(){let e={axis:this.axis,epsilon:this.epsilon,center:this.center,scale:this.scale,betaInitializer:rN(this.betaInitializer),gammaInitializer:rN(this.gammaInitializer),betaRegularizer:aI(this.betaRegularizer),gammaRegularizer:aI(this.gammaRegularizer)},t=super.getConfig();return Object.assign(e,t),e}};TL.className=`LayerNormalization`,V(TL),Y();function EL(e,t,n){return B(()=>{if(e.rank!==4)throw new X(`temporalPadding expects input tensor to be 4-D, but received a ${e.rank}-D tensor.`);if(t??=[[1,1],[1,1]],t.length!==2||t[0].length!==2||t[1].length!==2)throw new X("spatial2dPadding expects `padding` to be an Array of two Arrays, each of which is an Array of two integers.");if(n??=dM(),n!==`channelsLast`&&n!==`channelsFirst`)throw new X(`Unknown data format: ${n}. Supported data formats are 'channelsLast' and 'channelsFirst.`);let r;return r=n===`channelsFirst`?[[0,0],[0,0],t[0],t[1]]:[[0,0],t[0],t[1],[0,0]],m_(e,r)})}var DL=class extends bN{constructor(e){if(e??={},super(e),this.dataFormat=e.dataFormat==null?dM():e.dataFormat,e.padding==null)this.padding=[[1,1],[1,1]];else if(typeof e.padding==`number`)this.padding=[[e.padding,e.padding],[e.padding,e.padding]];else{if(e.padding=e.padding,e.padding.length!==2)throw new X(`ZeroPadding2D expects padding to be a length-2 array, but received a length-${e.padding.length} array.`);let t,n;if(typeof e.padding[0]==`number`)t=[e.padding[0],e.padding[0]],n=[e.padding[1],e.padding[1]];else{if(e.padding=e.padding,e.padding[0].length!==2)throw new X(`ZeroPadding2D expects height padding to be a length-2 array, but received a length-${e.padding[0].length} array.`);if(t=e.padding[0],e.padding[1].length!==2)throw new X(`ZeroPadding2D expects width padding to be a length-2 array, but received a length-${e.padding[1].length} array.`);n=e.padding[1]}this.padding=[t,n]}this.inputSpec=[new hN({ndim:4})]}computeOutputShape(e){e=cN(e);let t,n;return this.dataFormat===`channelsFirst`?(t=e[2]!=null&&e[2]>=0?e[2]+this.padding[0][0]+this.padding[0][1]:null,n=e[3]!=null&&e[3]>=0?e[3]+this.padding[1][0]+this.padding[1][1]:null,[e[0],e[1],t,n]):(t=e[1]!=null&&e[1]>=0?e[1]+this.padding[0][0]+this.padding[0][1]:null,n=e[2]!=null&&e[2]>=0?e[2]+this.padding[1][0]+this.padding[1][1]:null,[e[0],t,n,e[3]])}call(e,t){return B(()=>EL(sN(e),this.padding,this.dataFormat))}getConfig(){let e={padding:this.padding,dataFormat:this.dataFormat},t=super.getConfig();return Object.assign(e,t),e}};DL.className=`ZeroPadding2D`,V(DL),Y();function OL(e,t,n,r,i,a){return B(()=>{Kj(i),Yj(a),Jj(r),n??=[1,1],r??=`valid`,i??=dM(),a??=`max`,e=_I(e,i);let o,s=r===`same`?`same`:`valid`;return o=a===`max`?bg(e,t,n,s):yd(e,t,n,s),i===`channelsFirst`&&(o=Fc(o,[0,3,1,2])),o})}function kL(e,t,n,r,i,a){return B(()=>{Kj(i),Yj(a),Jj(r),n??=[1,1,1],r??=`valid`,i??=dM(),a??=`max`,e=vI(e,i);let o,s=r===`same`?`same`:`valid`;return o=a===`max`?Cg(e,t,n,s):Sd(e,t,n,s),i===`channelsFirst`&&(o=Fc(o,[0,4,1,2,3])),o})}var AL=class extends bN{constructor(e){if(e.poolSize??=2,super(e),typeof e.poolSize==`number`)this.poolSize=[e.poolSize];else if(Array.isArray(e.poolSize)&&e.poolSize.length===1&&typeof e.poolSize[0]==`number`)this.poolSize=e.poolSize;else throw new X(`poolSize for 1D convolutional layer must be a number or an Array of a single number, but received ${JSON.stringify(e.poolSize)}`);if(Mj(this.poolSize,`poolSize`),e.strides==null)this.strides=this.poolSize;else if(typeof e.strides==`number`)this.strides=[e.strides];else if(Array.isArray(e.strides)&&e.strides.length===1&&typeof e.strides[0]==`number`)this.strides=e.strides;else throw new X(`strides for 1D convolutional layer must be a number or an Array of a single number, but received ${JSON.stringify(e.strides)}`);Mj(this.strides,`strides`),this.padding=e.padding==null?`valid`:e.padding,Jj(this.padding),this.inputSpec=[new hN({ndim:3})]}computeOutputShape(e){e=cN(e);let t=hI(e[1],this.poolSize[0],this.padding,this.strides[0]);return[e[0],t,e[2]]}call(e,t){return B(()=>{this.invokeCallHook(e,t),e=pM(sN(e),2);let n=this.poolingFunction(sN(e),[this.poolSize[0],1],[this.strides[0],1],this.padding,`channelsLast`);return tb(n,[2])})}getConfig(){let e={poolSize:this.poolSize,padding:this.padding,strides:this.strides},t=super.getConfig();return Object.assign(e,t),e}},jL=class extends AL{constructor(e){super(e)}poolingFunction(e,t,n,r,i){return Kj(i),Jj(r),OL(e,t,n,r,i,`max`)}};jL.className=`MaxPooling1D`,V(jL);var ML=class extends AL{constructor(e){super(e)}poolingFunction(e,t,n,r,i){return Kj(i),Jj(r),OL(e,t,n,r,i,`avg`)}};ML.className=`AveragePooling1D`,V(ML);var NL=class extends bN{constructor(e){if(e.poolSize??=[2,2],super(e),this.poolSize=Array.isArray(e.poolSize)?e.poolSize:[e.poolSize,e.poolSize],e.strides==null)this.strides=this.poolSize;else if(Array.isArray(e.strides)){if(e.strides.length!==2)throw new X(`If the strides property of a 2D pooling layer is an Array, it is expected to have a length of 2, but received length ${e.strides.length}.`);this.strides=e.strides}else this.strides=[e.strides,e.strides];Mj(this.poolSize,`poolSize`),Mj(this.strides,`strides`),this.padding=e.padding==null?`valid`:e.padding,this.dataFormat=e.dataFormat==null?`channelsLast`:e.dataFormat,Kj(this.dataFormat),Jj(this.padding),this.inputSpec=[new hN({ndim:4})]}computeOutputShape(e){e=cN(e);let t=this.dataFormat===`channelsFirst`?e[2]:e[1],n=this.dataFormat===`channelsFirst`?e[3]:e[2];return t=hI(t,this.poolSize[0],this.padding,this.strides[0]),n=hI(n,this.poolSize[1],this.padding,this.strides[1]),this.dataFormat===`channelsFirst`?[e[0],e[1],t,n]:[e[0],t,n,e[3]]}call(e,t){return B(()=>(this.invokeCallHook(e,t),this.poolingFunction(sN(e),this.poolSize,this.strides,this.padding,this.dataFormat)))}getConfig(){let e={poolSize:this.poolSize,padding:this.padding,strides:this.strides,dataFormat:this.dataFormat},t=super.getConfig();return Object.assign(e,t),e}},PL=class extends NL{constructor(e){super(e)}poolingFunction(e,t,n,r,i){return Kj(i),Jj(r),OL(e,t,n,r,i,`max`)}};PL.className=`MaxPooling2D`,V(PL);var FL=class extends NL{constructor(e){super(e)}poolingFunction(e,t,n,r,i){return Kj(i),Jj(r),OL(e,t,n,r,i,`avg`)}};FL.className=`AveragePooling2D`,V(FL);var IL=class extends bN{constructor(e){if(e.poolSize??=[2,2,2],super(e),this.poolSize=Array.isArray(e.poolSize)?e.poolSize:[e.poolSize,e.poolSize,e.poolSize],e.strides==null)this.strides=this.poolSize;else if(Array.isArray(e.strides)){if(e.strides.length!==3)throw new X(`If the strides property of a 3D pooling layer is an Array, it is expected to have a length of 3, but received length ${e.strides.length}.`);this.strides=e.strides}else this.strides=[e.strides,e.strides,e.strides];Mj(this.poolSize,`poolSize`),Mj(this.strides,`strides`),this.padding=e.padding==null?`valid`:e.padding,this.dataFormat=e.dataFormat==null?`channelsLast`:e.dataFormat,Kj(this.dataFormat),Jj(this.padding),this.inputSpec=[new hN({ndim:5})]}computeOutputShape(e){e=cN(e);let t=this.dataFormat===`channelsFirst`?e[2]:e[1],n=this.dataFormat===`channelsFirst`?e[3]:e[2],r=this.dataFormat===`channelsFirst`?e[4]:e[3];return t=hI(t,this.poolSize[0],this.padding,this.strides[0]),n=hI(n,this.poolSize[1],this.padding,this.strides[1]),r=hI(r,this.poolSize[2],this.padding,this.strides[2]),this.dataFormat===`channelsFirst`?[e[0],e[1],t,n,r]:[e[0],t,n,r,e[4]]}call(e,t){return B(()=>(this.invokeCallHook(e,t),this.poolingFunction(sN(e),this.poolSize,this.strides,this.padding,this.dataFormat)))}getConfig(){let e={poolSize:this.poolSize,padding:this.padding,strides:this.strides,dataFormat:this.dataFormat},t=super.getConfig();return Object.assign(e,t),e}},LL=class extends IL{constructor(e){super(e)}poolingFunction(e,t,n,r,i){return Kj(i),Jj(r),kL(e,t,n,r,i,`max`)}};LL.className=`MaxPooling3D`,V(LL);var RL=class extends IL{constructor(e){super(e)}poolingFunction(e,t,n,r,i){return Kj(i),Jj(r),kL(e,t,n,r,i,`avg`)}};RL.className=`AveragePooling3D`,V(RL);var zL=class extends bN{constructor(e){super(e),this.inputSpec=[new hN({ndim:3})]}computeOutputShape(e){return[e[0],e[2]]}call(e,t){throw new fj}},BL=class extends zL{constructor(e){super(e||{})}call(e,t){return B(()=>{let t=sN(e);return Mg(t,1)})}};BL.className=`GlobalAveragePooling1D`,V(BL);var VL=class extends zL{constructor(e){super(e||{})}call(e,t){return B(()=>{let t=sN(e);return om(t,1)})}};VL.className=`GlobalMaxPooling1D`,V(VL);var HL=class extends bN{constructor(e){super(e),this.dataFormat=e.dataFormat==null?`channelsLast`:e.dataFormat,Kj(this.dataFormat),this.inputSpec=[new hN({ndim:4})]}computeOutputShape(e){return e=e,this.dataFormat===`channelsLast`?[e[0],e[3]]:[e[0],e[1]]}call(e,t){throw new fj}getConfig(){let e={dataFormat:this.dataFormat},t=super.getConfig();return Object.assign(e,t),e}},UL=class extends HL{call(e,t){return B(()=>{let t=sN(e);return this.dataFormat===`channelsLast`?Mg(t,[1,2]):Mg(t,[2,3])})}};UL.className=`GlobalAveragePooling2D`,V(UL);var WL=class extends HL{call(e,t){return B(()=>{let t=sN(e);return this.dataFormat===`channelsLast`?om(t,[1,2]):om(t,[2,3])})}};WL.className=`GlobalMaxPooling2D`,V(WL),Y();var GL=class extends bN{constructor(e){super(e),this.layer=e.layer}build(e){this.built=!0}get trainable(){return this.layer!=null&&this.layer.trainable}set trainable(e){this.layer!=null&&(this.layer.trainable=e)}get trainableWeights(){return this.layer.trainableWeights}get nonTrainableWeights(){return this.layer.nonTrainableWeights}get updates(){return this.layer._updates}get losses(){return this.layer.losses}getWeights(){return this.layer.getWeights()}setWeights(e){this.layer.setWeights(e)}getConfig(){let e={layer:{className:this.layer.getClassName(),config:this.layer.getConfig()}},t=super.getConfig();return Object.assign(e,t),e}setFastWeightInitDuringBuild(e){super.setFastWeightInitDuringBuild(e),this.layer!=null&&this.layer.setFastWeightInitDuringBuild(e)}static fromConfig(e,t,n={}){let r=t.layer,i=rP(r,n);delete t.layer;let a={layer:i};return Object.assign(a,t),new e(a)}},KL=class extends GL{constructor(e){super(e),this.supportsMasking=!0}build(e){if(e=cN(e),e.length<3)throw new X(`TimeDistributed layer expects an input shape >= 3D, but received input shape ${JSON.stringify(e)}`);this.inputSpec=[{shape:e}];let t=[e[0]].concat(e.slice(2));this.layer.built||(this.layer.build(t),this.layer.built=!0),super.build(e)}computeOutputShape(e){e=cN(e);let t=[e[0]].concat(e.slice(2)),n=this.layer.computeOutputShape(t),r=e[1];return[n[0],r].concat(n.slice(1))}call(e,t){return B(()=>(e=sN(e),II((e,n)=>[sN(this.layer.call(e,t)),[]],e,[],!1,null,null,!1,!0)[1]))}};KL.className=`TimeDistributed`,V(KL);function qL(e){Aj(Wj,`BidirectionalMergeMode`,e)}var JL=`concat`,YL=class extends GL{constructor(e){super(e);let t=e.layer.getConfig(),n={};n.className=e.layer.getClassName(),n.config=t,this.forwardLayer=rP(n),t.goBackwards=t.goBackwards!==!0;let r={};if(r.className=e.layer.getClassName(),r.config=t,this.backwardLayer=rP(r),this.forwardLayer.name=`forward_`+this.forwardLayer.name,this.backwardLayer.name=`backward_`+this.backwardLayer.name,this.mergeMode=e.mergeMode===void 0?JL:e.mergeMode,qL(this.mergeMode),e.weights)throw new fj(`weights support is not implemented for Bidirectional layer yet.`);this._stateful=e.layer.stateful,this.returnSequences=e.layer.returnSequences,this.returnState=e.layer.returnState,this.supportsMasking=!0,this._trainable=!0,this.inputSpec=e.layer.inputSpec,this.numConstants=null}get trainable(){return this._trainable}set trainable(e){this._trainable=e,this.forwardLayer!=null&&(this.forwardLayer.trainable=e),this.backwardLayer!=null&&(this.backwardLayer.trainable=e)}getWeights(){return this.forwardLayer.getWeights().concat(this.backwardLayer.getWeights())}setWeights(e){let t=e.length,n=Math.floor(t/2);this.forwardLayer.setWeights(e.slice(0,n)),this.backwardLayer.setWeights(e.slice(n))}computeOutputShape(e){let t=this.forwardLayer.computeOutputShape(e);Array.isArray(t)&&Array.isArray(t[0])||(t=[t]),t=t;let n,r,i;return this.returnState&&(i=t.slice(1)),n=t[0],n=n,this.mergeMode===`concat`?(n[n.length-1]*=2,r=[n]):r=this.mergeMode==null?[n,n.slice()]:[n],this.returnState?this.mergeMode==null?r.concat(i).concat(i.slice()):[n].concat(i,i.slice()):vj(r)}apply(e,t){let n=t==null?null:t.initialState,r=t==null?null:t.constants;t??={};let i=FI(e,n,r,this.numConstants);if(e=i.inputs,n=i.initialState,r=i.constants,Array.isArray(e)&&(n=e.slice(1),e=e[0]),(n==null||n.length===0)&&r==null)return super.apply(e,t);let a=[],o=[];if(n!=null){let e=n.length;if(e%2>0)throw new X("When passing `initialState` to a Bidrectional RNN, the state should be an Array containing the states of the underlying RNNs.");t.initialState=n,a.push(...n);let r=n.map(e=>new hN({shape:e.shape}));this.forwardLayer.stateSpec=r.slice(0,e/2),this.backwardLayer.stateSpec=r.slice(e/2),o.push(...r)}if(r!=null)throw new fj(`Support for constants in Bidirectional layers is not implemented yet.`);let s=a[0]instanceof gN;for(let e of a)if(e instanceof gN!==s)throw new X(`The initial state of a Bidirectional layer cannot be specified as a mix of symbolic and non-symbolic tensors`);if(s){let n=[e].concat(a),r=this.inputSpec.concat(o),i=this.inputSpec;this.inputSpec=r;let s=super.apply(n,t);return this.inputSpec=i,s}return super.apply(e,t)}call(e,t){return B(()=>{let n=t.initialState,r,i;if(n==null)r=this.forwardLayer.call(e,t),i=this.backwardLayer.call(e,t);else{let a=n.slice(0,n.length/2),o=n.slice(n.length/2);r=this.forwardLayer.call(e,Object.assign(t,{initialState:a})),i=this.backwardLayer.call(e,Object.assign(t,{initialState:o}))}let a;this.returnState&&(Array.isArray(r)&&(a=r.slice(1).concat(i.slice(1))),r=r[0],i=i[0]),this.returnSequences&&(i=Lv(i,1));let o;return this.mergeMode===`concat`?o=bM([r,i]):this.mergeMode===`sum`?o=H(r,i):this.mergeMode===`ave`?o=U(.5,H(r,i)):this.mergeMode===`mul`?o=U(r,i):this.mergeMode??(o=[r,i]),this.returnState?this.mergeMode==null?o.concat(a):[o].concat(a):o})}resetStates(e){this.forwardLayer.resetStates(),this.backwardLayer.resetStates()}build(e){Qj(this.forwardLayer.name,()=>{this.forwardLayer.build(e)}),Qj(this.backwardLayer.name,()=>{this.backwardLayer.build(e)}),this.built=!0}computeMask(e,t){Array.isArray(t)&&(t=t[0]);let n;if(n=this.returnSequences?this.mergeMode==null?[t,t]:t:this.mergeMode==null?[null,null]:null,this.returnState){let e=this.forwardLayer.states.map(e=>null);return Array.isArray(n)?n.concat(e).concat(e):[n].concat(e,e)}return n}get trainableWeights(){return this.forwardLayer.trainableWeights.concat(this.backwardLayer.trainableWeights)}get nonTrainableWeights(){return this.forwardLayer.nonTrainableWeights.concat(this.backwardLayer.nonTrainableWeights)}setFastWeightInitDuringBuild(e){super.setFastWeightInitDuringBuild(e),this.forwardLayer!=null&&this.forwardLayer.setFastWeightInitDuringBuild(e),this.backwardLayer!=null&&this.backwardLayer.setFastWeightInitDuringBuild(e)}getConfig(){let e={mergeMode:this.mergeMode},t=super.getConfig();return Object.assign(e,t),e}static fromConfig(e,t){let n=rP(t.layer);if(delete t.layer,t.numConstants!=null)throw new fj(`Deserialization of a Bidirectional layer with numConstants present is not supported yet.`);let r=t;return r.layer=n,new e(r)}};YL.className=`Bidirectional`,V(YL),Y();var XL=class extends bN{constructor(e){super(e),this.scale=e.scale,this.offset=e.offset?e.offset:0}getConfig(){let e={scale:this.scale,offset:this.offset},t=super.getConfig();return Object.assign(e,t),e}call(e,t){return B(()=>(e=sN(e),e.dtype!==`float32`&&(e=fM(e,`float32`)),H(U(e,this.scale),this.offset)))}};XL.className=`Rescaling`,V(XL),Y();var{resizeBilinear:ZL,cropAndResize:QL}=bw,$L=class extends bN{constructor(e){super(e),this.height=e.height,this.width=e.width}centerCrop(e,t,n,r,i,a,o,s){return B(()=>{let c,l=!1,u=[t/a,n/o,(r+t)/a,(i+n)/o],d=[];e.rank===3?(l=!0,c=ib([e])):c=e;for(let e=0;e<c.shape[0];e++)d.push(u);let f=Ba(d,[d.length,4]),p=Tv(0,d.length,1,`int32`),m=QL(c,f,p,[r,i],`nearest`);return fM(l?sN(Rb(m)):m,s)})}upsize(e,t,n,r){return B(()=>fM(ZL(e,[t,n]),r))}call(e,t){return B(()=>{let t=sN(e),n=t.dtype,r=t.shape,i=r[r.length-3],a=r[r.length-2],o=0;i!==this.height&&(o=Math.floor((i-this.height)/2));let s=0;return a!==this.width&&(s=Math.floor((a-this.width)/2),s===0&&(s=1)),o>=0&&s>=0?this.centerCrop(t,o,s,this.height,this.width,i,a,n):this.upsize(e,this.height,this.width,n)})}getConfig(){let e={height:this.height,width:this.width},t=super.getConfig();return Object.assign(e,t),e}computeOutputShape(e){e=cN(e);let t=e.length-3,n=e.length-2;return e[t]=this.height,e[n]=this.width,e}};$L.className=`CenterCrop`,V($L),Y();function eR(e,t,n,r){let i=sN(e);if(i.dtype!==`int32`&&(i=fM(i,`int32`)),t===`int`)return i;let a=i.shape;if(i.rank===0&&(i=Fm(i,-1)),t===`oneHot`&&i.shape[i.shape.length-1]!==1&&(i=Fm(i,-1)),i.rank>2)throw new X(`When outputMode is not int, maximum output rank is 2 Received outputMode ${t} and input shape ${a} which would result in output rank ${i.rank}.`);let o=[`multiHot`,`oneHot`].includes(t),s=i,c;if(c=r!==void 0&&t===`count`?fp(s,r,n,o):fp(s,[],n,o),t!==`tfIdf`)return c;if(r)return U(c,r);throw new X(`When outputMode is 'tfIdf', weights must be provided.`)}Y();var tR=class extends bN{constructor(e){super(e),this.numTokens=e.numTokens,this.outputMode=e.outputMode?e.outputMode:`multiHot`}getConfig(){let e={numTokens:this.numTokens,outputMode:this.outputMode},t=super.getConfig();return Object.assign(e,t),e}computeOutputShape(e){return e=cN(e),e==null?[this.numTokens]:this.outputMode===`oneHot`&&e[e.length-1]!==1?(e.push(this.numTokens),e):(e[e.length-1]=this.numTokens,e)}call(e,t){return B(()=>{e=sN(e),e.dtype!==`int32`&&(e=fM(e,`int32`));let n;if(t.countWeights!==void 0){if(this.outputMode!==`count`)throw new X(`countWeights is not used when outputMode !== count.
              Received countWeights=${t.countWeights}`);n=sN(t.countWeights)}let r=om(e),i=lm(e),a=$m(this.numTokens,r).bufferSync().get(0),o=nh(i,0).bufferSync().get(0);if(!(a&&o))throw new X(`Input values must be between 0 < values <= numTokens with numTokens=${this.numTokens}`);return eR(e,this.outputMode,this.numTokens,n)})}};tR.className=`CategoryEncoding`,V(tR),Y();var nR=new Set([`bilinear`,`nearest`]),rR=class extends bN{constructor(e){if(super(e),this.height=e.height,this.width=e.width,e.interpolation){if(nR.has(e.interpolation))this.interpolation=e.interpolation;else throw new X(`Invalid interpolation parameter: ${e.interpolation} is not implemented`)}else this.interpolation=`bilinear`;this.cropToAspectRatio=!!e.cropToAspectRatio}computeOutputShape(e){e=cN(e);let t=e[2];return[this.height,this.width,t]}getConfig(){let e={height:this.height,width:this.width,interpolation:this.interpolation,cropToAspectRatio:this.cropToAspectRatio},t=super.getConfig();return Object.assign(e,t),e}call(e,t){return B(()=>{let t=[this.height,this.width];if(this.interpolation===`bilinear`)return bw.resizeBilinear(e,t,!this.cropToAspectRatio);if(this.interpolation===`nearest`)return bw.resizeNearestNeighbor(e,t,!this.cropToAspectRatio);throw Error(`Interpolation is ${this.interpolation} but only ${[...nR]} are supported`)})}};rR.className=`Resizing`,V(rR);function iR(e){return new $I(e)}Y(),Y(),O().registerFlag(`KEEP_INTERMEDIATE_TENSORS`,()=>!1,e=>{e&&console.warn(`Keep intermediate tensors is ON. This will print the values of all intermediate tensors during model inference. Not all models support this mode. For details, check e2e/benchmarks/ model_config.js. This significantly impacts performance.`)});var aR;(function(e){e[e.DT_INVALID=0]=`DT_INVALID`,e[e.DT_FLOAT=1]=`DT_FLOAT`,e[e.DT_DOUBLE=2]=`DT_DOUBLE`,e[e.DT_INT32=3]=`DT_INT32`,e[e.DT_UINT8=4]=`DT_UINT8`,e[e.DT_INT16=5]=`DT_INT16`,e[e.DT_INT8=6]=`DT_INT8`,e[e.DT_STRING=7]=`DT_STRING`,e[e.DT_COMPLEX64=8]=`DT_COMPLEX64`,e[e.DT_INT64=9]=`DT_INT64`,e[e.DT_BOOL=10]=`DT_BOOL`,e[e.DT_QINT8=11]=`DT_QINT8`,e[e.DT_QUINT8=12]=`DT_QUINT8`,e[e.DT_QINT32=13]=`DT_QINT32`,e[e.DT_BFLOAT16=14]=`DT_BFLOAT16`,e[e.DT_QINT16=15]=`DT_QINT16`,e[e.DT_QUINT16=16]=`DT_QUINT16`,e[e.DT_UINT16=17]=`DT_UINT16`,e[e.DT_COMPLEX128=18]=`DT_COMPLEX128`,e[e.DT_HALF=19]=`DT_HALF`,e[e.DT_RESOURCE=20]=`DT_RESOURCE`,e[e.DT_VARIANT=21]=`DT_VARIANT`,e[e.DT_UINT32=22]=`DT_UINT32`,e[e.DT_UINT64=23]=`DT_UINT64`,e[e.DT_FLOAT_REF=101]=`DT_FLOAT_REF`,e[e.DT_DOUBLE_REF=102]=`DT_DOUBLE_REF`,e[e.DT_INT32_REF=103]=`DT_INT32_REF`,e[e.DT_UINT8_REF=104]=`DT_UINT8_REF`,e[e.DT_INT16_REF=105]=`DT_INT16_REF`,e[e.DT_INT8_REF=106]=`DT_INT8_REF`,e[e.DT_STRING_REF=107]=`DT_STRING_REF`,e[e.DT_COMPLEX64_REF=108]=`DT_COMPLEX64_REF`,e[e.DT_INT64_REF=109]=`DT_INT64_REF`,e[e.DT_BOOL_REF=110]=`DT_BOOL_REF`,e[e.DT_QINT8_REF=111]=`DT_QINT8_REF`,e[e.DT_QUINT8_REF=112]=`DT_QUINT8_REF`,e[e.DT_QINT32_REF=113]=`DT_QINT32_REF`,e[e.DT_BFLOAT16_REF=114]=`DT_BFLOAT16_REF`,e[e.DT_QINT16_REF=115]=`DT_QINT16_REF`,e[e.DT_QUINT16_REF=116]=`DT_QUINT16_REF`,e[e.DT_UINT16_REF=117]=`DT_UINT16_REF`,e[e.DT_COMPLEX128_REF=118]=`DT_COMPLEX128_REF`,e[e.DT_HALF_REF=119]=`DT_HALF_REF`,e[e.DT_RESOURCE_REF=120]=`DT_RESOURCE_REF`,e[e.DT_VARIANT_REF=121]=`DT_VARIANT_REF`,e[e.DT_UINT32_REF=122]=`DT_UINT32_REF`,e[e.DT_UINT64_REF=123]=`DT_UINT64_REF`})(aR||={});var oR;(function(e){(function(e){e[e.LEGACY=0]=`LEGACY`,e[e.V1=1]=`V1`,e[e.V2=2]=`V2`})(e.CheckpointFormatVersion||={})})(oR||={}),Y(),Y(),Y(),Y(),Y(),Y(),Y(),Y(),Y(),Y(),Y(),Y();function sR(e,t){return cR(e,t)}function cR(e,t,n=new Map,r=new Set){if(e==null)return null;if(typeof Blob==`function`&&e instanceof Blob)return e.slice();if(r.has(e))throw Error(`Circular references are not supported.`);if(n.has(e))return n.get(e);let i=t(e);if(i.recurse&&i.value!==null)throw Error(`A deep map function may not return both a value and recurse=true.`);if(!i.recurse)return n.set(e,i.value),i.value;if(fR(e)){let i=Array.isArray(e)?[]:{};r.add(e);for(let a in e){let o=e[a];i[a]=cR(o,t,n,r)}return r.delete(e),e.__proto__&&(i.__proto__=e.__proto__),i}throw Error(`Can't recurse into non-iterable type: ${e}`)}function lR(e,t=dR){return uR(e,t)}function uR(e,t,n=new Set){let r=e[0];if(n.has(r))throw Error(`Circular references are not supported.`);let i=t(e);if(i.recurse&&i.value!==null)throw Error(`A deep zip function may not return both a value and recurse=true.`);if(!i.recurse)return i.value;if(fR(r)){let i=Array.isArray(r)?[]:{};n.add(r);for(let a in r)i[a]=uR(e.map(e=>e[a]),t,n);return n.delete(r),i}throw Error(`Can't recurse into non-iterable type: ${r}`)}function dR(e){return e===null?null:fR(e[0])?{value:null,recurse:!0}:{value:e,recurse:!1}}function fR(e){let t=!1;if(O().get(`IS_BROWSER`))t=e instanceof TextDecoder;else{let{StringDecoder:n}=ns();t=e instanceof n}return e!=null&&!ArrayBuffer.isView(e)&&(Array.isArray(e)||typeof e==`object`&&!(e instanceof Xi)&&!(e instanceof Promise)&&!t)}function pR(e){return e==null||mR(e)||Array.isArray(e)||typeof e==`object`&&e instanceof Xi||fe(e)}function mR(e){return e===null||typeof e!=`object`&&typeof e!=`function`}Y();function hR(e){return sR(e,gR)}function gR(e){return e instanceof Xi?{value:e.clone(),recurse:!1}:fR(e)?{value:null,recurse:!0}:{value:e,recurse:!1}}var _R=class{constructor(e){if(this.capacity=e,this.begin=0,this.end=0,e==null)throw RangeError(`Can't create a ring buffer of unknown capacity.`);if(e<1)throw RangeError(`Can't create ring buffer of capacity < 1.`);this.data=Array(e),this.doubledCapacity=2*e}wrap(e){for(;e<0;)e+=this.doubledCapacity;return e%this.doubledCapacity}get(e){if(e<0)throw RangeError(`Can't get item at a negative index.`);return this.data[e%this.capacity]}set(e,t){if(e<0)throw RangeError(`Can't set item at a negative index.`);this.data[e%this.capacity]=t}length(){let e=this.end-this.begin;return e<0&&(e=this.doubledCapacity+e),e}isFull(){return this.length()===this.capacity}isEmpty(){return this.length()===0}push(e){if(this.isFull())throw RangeError(`Ring buffer is full.`);this.set(this.end,e),this.end=this.wrap(this.end+1)}pushAll(e){for(let t of e)this.push(t)}pop(){if(this.isEmpty())throw RangeError(`Ring buffer is empty.`);this.end=this.wrap(this.end-1);let e=this.get(this.end);return this.set(this.end,void 0),e}unshift(e){if(this.isFull())throw RangeError(`Ring buffer is full.`);this.begin=this.wrap(this.begin-1),this.set(this.begin,e)}shift(){if(this.isEmpty())throw RangeError(`Ring buffer is empty.`);let e=this.get(this.begin);return this.set(this.begin,void 0),this.begin=this.wrap(this.begin+1),e}shuffleExcise(e){if(this.isEmpty())throw RangeError(`Ring buffer is empty.`);let t=this.wrap(this.begin+e),n=this.get(t);return this.set(t,this.pop()),n}},vR=class e extends _R{constructor(){super(e.INITIAL_CAPACITY)}isFull(){return!1}push(e){super.isFull()&&this.expand(),super.push(e)}unshift(e){super.isFull()&&this.expand(),super.unshift(e)}expand(){let e=this.capacity*2,t=Array(e),n=this.length();for(let e=0;e<n;e++)t[e]=this.get(this.wrap(this.begin+e));this.data=t,this.capacity=e,this.doubledCapacity=2*this.capacity,this.begin=0,this.end=n}};vR.INITIAL_CAPACITY=32,Y();var yR=t(sv());function bR(e){return new wR(e)}function xR(e){return new TR(e)}function SR(e,t){return new IR(e,t)}var CR=class{async toArray(){let e=[],t=await this.next();for(;!t.done;)e.push(t.value),t=await this.next();return e}async toArrayForTest(){let e=this.prefetch(100),t=[],n=await e.next();for(;!n.done;)t.push(n.value),n=await e.next();return t}async resolveFully(){let e=await this.next();for(;!e.done;)e=await this.next()}async resolveWhile(e){let t=await this.next(),n=e(t.value);for(;!t.done&&n;)t=await this.next(),n=e(t.value)}handleErrors(e){return new MR(this,e)}filter(e){return new AR(this,e)}map(e){return new jR(this,e)}mapAsync(e){return new NR(this,e)}serialMapAsync(e){return new NR(this,e).serial()}flatmap(e){return new FR(this,e)}async forEachAsync(e){return this.map(e).resolveFully()}async serialForEach(e){return this.serialMapAsync(e).resolveWhile(e=>e===!0)}rowMajorBatch(e,t=!0){return new kR(this,e,t)}columnMajorBatch(e,t=!0,n=dR){return this.rowMajorBatch(e,t).map(e=>lR(e,n))}concatenate(e,t){return new IR(bR([this,e]),t)}take(e){return e<0||e==null?this:new OR(this,e)}skip(e){return e<0||e==null?this:new DR(this,e)}prefetch(e){return new RR(this,e)}shuffle(e,t){return new zR(this,e,t)}serial(){return new ER(this)}},wR=class extends CR{constructor(e){super(),this.items=e,this.trav=0}summary(){return`Array of ${this.items.length} items`}async next(){if(this.trav>=this.items.length)return{value:null,done:!0};let e=this.items[this.trav];return this.trav++,{value:hR(e),done:!1}}},TR=class extends CR{constructor(e){super(),this.nextFn=e}summary(){return`Function call`}async next(){try{return this.nextFn()}catch(e){throw e.message=`Error thrown while iterating through a dataset: ${e.message}`,e}}},ER=class extends CR{constructor(e){super(),this.upstream=e,this.lastRead=Promise.resolve({value:null,done:!1})}summary(){return`${this.upstream.summary()} -> Serial`}async next(){return this.lastRead=this.lastRead.then(()=>this.serialNext()),this.lastRead}async serialNext(){return this.upstream.next()}},DR=class extends CR{constructor(e,t){super(),this.upstream=e,this.maxCount=t,this.count=0,this.lastRead=Promise.resolve({value:null,done:!1})}summary(){return`${this.upstream.summary()} -> Skip`}async next(){return this.lastRead=this.lastRead.then(()=>this.serialNext()),this.lastRead}async serialNext(){for(;this.count++<this.maxCount;){let e=await this.upstream.next();if(e.done)return e;fc(e.value)}return this.upstream.next()}},OR=class extends CR{constructor(e,t){super(),this.upstream=e,this.maxCount=t,this.count=0}summary(){return`${this.upstream.summary()} -> Take`}async next(){return this.count++>=this.maxCount?{value:null,done:!0}:this.upstream.next()}},kR=class extends CR{constructor(e,t,n=!0){super(),this.upstream=e,this.batchSize=t,this.enableSmallLastBatch=n,this.lastRead=Promise.resolve({value:null,done:!1})}summary(){return`${this.upstream.summary()} -> RowMajorBatch`}async next(){return this.lastRead=this.lastRead.then(()=>this.serialNext()),this.lastRead}async serialNext(){let e=[];for(;e.length<this.batchSize;){let t=await this.upstream.next();if(t.done)return this.enableSmallLastBatch&&e.length>0?{value:e,done:!1}:{value:null,done:!0};e.push(t.value)}return{value:e,done:!1}}},AR=class extends CR{constructor(e,t){super(),this.upstream=e,this.predicate=t,this.lastRead=Promise.resolve({value:null,done:!1})}summary(){return`${this.upstream.summary()} -> Filter`}async next(){return this.lastRead=this.lastRead.then(()=>this.serialNext()),this.lastRead}async serialNext(){for(;;){let e=await this.upstream.next();if(e.done||this.predicate(e.value))return e;fc(e.value)}}},jR=class extends CR{constructor(e,t){super(),this.upstream=e,this.transform=t}summary(){return`${this.upstream.summary()} -> Map`}async next(){let e=await this.upstream.next();if(e.done)return{value:null,done:!0};let t=da(e.value),n=this.transform(e.value),r=da(n);for(let e of t)ua(e,r)||e.dispose();return{value:n,done:!1}}},MR=class extends CR{constructor(e,t){super(),this.upstream=e,this.handler=t,this.count=0,this.lastRead=Promise.resolve({value:null,done:!1})}summary(){return`${this.upstream.summary()} -> handleErrors`}async next(){return this.lastRead=this.lastRead.then(()=>this.serialNext()),this.lastRead}async serialNext(){for(;;)try{return await this.upstream.next()}catch(e){if(!this.handler(e))return{value:null,done:!0}}}},NR=class extends CR{constructor(e,t){super(),this.upstream=e,this.transform=t}summary(){return`${this.upstream.summary()} -> AsyncMap`}async next(){let e=await this.upstream.next();if(e.done)return{value:null,done:!0};let t=da(e.value),n=await this.transform(e.value),r=da(n);for(let e of t)ua(e,r)||e.dispose();return{value:n,done:!1}}},PR=class extends CR{constructor(){super(),this.outputQueue=new vR,this.lastRead=Promise.resolve({value:null,done:!1})}async next(){return this.lastRead=this.lastRead.then(()=>this.serialNext()),this.lastRead}async serialNext(){for(;this.outputQueue.length()===0;)if(!await this.pump())return{value:null,done:!0};return{value:this.outputQueue.shift(),done:!1}}},FR=class extends PR{constructor(e,t){super(),this.upstream=e,this.transform=t}summary(){return`${this.upstream.summary()} -> Flatmap`}async pump(){let e=await this.upstream.next();if(e.done)return!1;let t=da(e.value),n=this.transform(e.value),r=da(n);this.outputQueue.pushAll(n);for(let e of t)ua(e,r)||e.dispose();return!0}},IR=class extends CR{constructor(e,t){super(),this.baseErrorHandler=t,this.lastRead=null,this.iterator=null,this.moreIterators=e}summary(){return`TODO: fill in upstream of chained summaries -> Chained`}async next(){return this.lastRead=this.readFromChain(this.lastRead),this.lastRead}async readFromChain(e){if(await e,this.iterator==null){let e=await this.moreIterators.next();if(e.done)return{value:null,done:!0};this.iterator=e.value,this.baseErrorHandler!=null&&(this.iterator=this.iterator.handleErrors(this.baseErrorHandler))}let t=await this.iterator.next();return t.done?(this.iterator=null,this.readFromChain(e)):t}},LR;(function(e){e[e.FAIL=0]=`FAIL`,e[e.SHORTEST=1]=`SHORTEST`,e[e.LONGEST=2]=`LONGEST`})(LR||={});var RR=class extends CR{constructor(e,t){super(),this.upstream=e,this.bufferSize=t,this.buffer=new _R(t)}summary(){return`${this.upstream.summary()} -> Prefetch`}refill(){for(;!this.buffer.isFull();){let e=this.upstream.next();this.buffer.push(e)}}next(){return this.refill(),this.buffer.shift()}},zR=class extends RR{constructor(e,t,n){super(e,t),this.upstream=e,this.windowSize=t,this.upstreamExhausted=!1,this.random=yR.alea(n||wi().toString()),this.lastRead=Promise.resolve({value:null,done:!1})}async next(){return this.lastRead=this.lastRead.then(()=>this.serialNext()),this.lastRead}randomInt(e){return Math.floor(this.random()*e)}chooseIndex(){return this.randomInt(this.buffer.length())}async serialNext(){for(this.upstreamExhausted||this.refill();!this.buffer.isEmpty();){let e=this.chooseIndex(),t=await this.buffer.shuffleExcise(e);if(t.done)this.upstreamExhausted=!0;else return this.refill(),t}return{value:null,done:!0}}};Y();var BR=class{constructor(){this.size=null}batch(e,t=!0){let n=this;y(e>0,()=>`batchSize needs to be positive, but it is
      ${e}`);let r;return r=this.size===1/0||this.size==null?this.size:t?Math.ceil(this.size/e):Math.floor(this.size/e),VR(async()=>(await n.iterator()).columnMajorBatch(e,t,HR),r)}concatenate(e){let t=this,n;return n=this.size===1/0||e.size===1/0?1/0:this.size!=null&&e.size!=null?this.size+e.size:null,VR(async()=>(await t.iterator()).concatenate(await e.iterator()),n)}filter(e){let t=this,n;return n=this.size===1/0?1/0:null,VR(async()=>(await t.iterator()).filter(t=>B(()=>e(t))),n)}async forEachAsync(e){return(await this.iterator()).forEachAsync(e)}map(e){let t=this;return VR(async()=>(await t.iterator()).map(t=>B(()=>e(t))),this.size)}mapAsync(e){let t=this;return VR(async()=>(await t.iterator()).mapAsync(e),this.size)}prefetch(e){if(e==null)throw RangeError("`Dataset.prefetch()` requires bufferSize to be specified.");let t=this;return VR(async()=>(await t.iterator()).prefetch(e),this.size)}repeat(e){let t=this,n;return n=this.size!=null&&e>0?this.size*e:e===0?0:this.size!=null&&(e===void 0||e<0)?1/0:null,VR(async()=>SR(xR(async()=>({value:await t.iterator(),done:!1})).take(e)),n)}skip(e){let t=this,n;return n=this.size!=null&&e>=0&&this.size>=e?this.size-e:this.size!=null&&(this.size<e||e===void 0||e<0)?0:null,VR(async()=>(await t.iterator()).skip(e),n)}shuffle(e,t,n=!0){if(e==null||e<0)throw this.size==null?RangeError("`Dataset.shuffle()` requires bufferSize to be specified."):RangeError(`\`Dataset.shuffle()\` requires bufferSize to be specified.  If your data fits in main memory (for regular JS objects), and/or GPU memory (for \`tf.Tensor\`s), consider setting bufferSize to the dataset size (${this.size} elements)`);let r=this,i=yR.alea(t||wi().toString());return VR(async()=>{let t=i.int32();return n&&(t+=i.int32()),(await r.iterator()).shuffle(e,t.toString())},this.size)}take(e){let t=this,n;return n=this.size!=null&&this.size>e?e:this.size!=null&&this.size<=e?this.size:null,VR(async()=>(await t.iterator()).take(e),n)}async toArray(){if(this.size===1/0)throw Error(`Can not convert infinite data stream to array.`);return(await this.iterator()).toArray()}async toArrayForTest(){if(this.size===1/0)throw Error(`Can not convert infinite data stream to array.`);return(await this.iterator()).toArrayForTest()}};BR.MAX_BUFFER_SIZE=1e4;function VR(e,t=null){return new class extends BR{constructor(){super(...arguments),this.size=t}async iterator(){return e()}}}function HR(e){if(e===null)return null;let t=e[0];return pR(t)?{value:UR(e),recurse:!1}:{value:null,recurse:!0}}function UR(e){if(e.length===0)throw Error(`Can't make a batch of zero elements.`);return e[0]instanceof Xi?ib(e):Ba(e)}Y(),Y(),Y(),Y(),Y(),Y(),Y(),Y();function Z(e,t){Array.isArray(e)||(e=[e]),e.forEach(e=>{e!=null&&y(e.dtype!==`complex64`,()=>`${t} does not support complex64 tensors in the CPU backend.`)})}Y();var WR=Wb,GR=class e extends l{constructor(){super(),this.blockSize=48,this.firstUse=!0,this.data=new c(this,lc())}nextDataId(){return e.nextDataId++}write(e,t,n){this.firstUse&&(this.firstUse=!1,O().get(`IS_NODE`)&&zr(`
============================
Hi, looks like you are running TensorFlow.js in Node.js. To speed things up dramatically, install our node backend, visit https://github.com/tensorflow/tfjs-node for more details. 
============================`));let r={id:this.nextDataId()};return this.data.set(r,{values:e,dtype:n,refCount:1}),r}makeTensorInfo(e,t,n){let r;if(t===`string`&&n!=null&&n.length>0&&he(n[0])){let i=n.map(e=>Ei(e));r=this.write(i,e,t)}else r=this.write(n,e,t);return{dataId:r,shape:e,dtype:t}}refCount(e){return this.data.has(e)?this.data.get(e).refCount:0}incRef(e){let t=this.data.get(e);t.refCount++}decRef(e){if(this.data.has(e)){let t=this.data.get(e);t.refCount--}}move(e,t,n,r,i){this.data.set(e,{values:t,dtype:r,refCount:i})}numDataIds(){return this.data.numDataIds()}async read(e){return this.readSync(e)}readSync(e){let{dtype:t,complexTensorInfos:n}=this.data.get(e);return t===`complex64`?TT(this.readSync(n.real.dataId),this.readSync(n.imag.dataId)):this.data.get(e).values}bufferSync(e){let t=this.readSync(e.dataId);if(e.dtype===`string`)try{let n=t.map(e=>Di(e));return ss(e.shape,e.dtype,n)}catch{throw Error(`Failed to decode encoded string bytes into utf-8`)}return ss(e.shape,e.dtype,t)}makeOutput(e,t,n){return lc().makeTensorFromTensorInfo(this.makeTensorInfo(t,n,e),this)}disposeData(e,t=!1){if(this.data.has(e)){if(this.data.get(e).refCount--,!t&&this.data.get(e).refCount>0)return!1;let{complexTensorInfos:n}=this.data.get(e);n!=null&&(this.disposeData(n.real.dataId,!0),this.disposeData(n.imag.dataId,!0)),this.data.delete(e)}return!0}disposeIntermediateTensorInfo(e){this.disposeData(e.dataId)}async time(e){let t=wi();return e(),{kernelMs:wi()-t}}memory(){return{unreliable:!0,reasons:[`The reported memory is an upper bound. Due to automatic garbage collection, the true allocated memory may be less.`]}}where(e){Z([e],`where`);let t=this.readSync(e.dataId);return WR(e.shape,t)}dispose(){}floatPrecision(){return 32}epsilon(){return super.epsilon()}};GR.nextDataId=0,Y();function KR(e){let t=new Float32Array(e.length);for(let n=0;n<e.length;++n)t[n]=Math.abs(e[n]);return t}var qR={kernelName:`Abs`,backendName:`cpu`,kernelFunc:e=>{let{x:t}=e.inputs,n=e.backend;Z(t,`abs`);let r=new Float32Array(C(t.shape)),i=n.data.get(t.dataId).values;return r=KR(i),n.makeOutput(r,t.shape,t.dtype)}};Y();function JR(e){return(t,n,r,i,a)=>{let o=Gc(t,n),s=o.length,c=xe(o),l=se(a,C(o)),u=t.length,d=n.length,f=xe(t),p=xe(n),m=Uc(t,o),h=Uc(n,o);if(m.length+h.length===0)for(let t=0;t<l.length;++t)l[t]=e(r[t%r.length],i[t%i.length]);else for(let t=0;t<l.length;++t){let n=ke(t,s,c),a=n.slice(-u);m.forEach(e=>a[e]=0);let o=Oe(a,u,f),g=n.slice(-d);h.forEach(e=>g[e]=0);let _=Oe(g,d,p);l[t]=e(r[o],i[_])}return[l,o]}}Y();function YR(e){let{inputs:t,backend:n}=e,{real:r,imag:i}=t,a=n.data.get(r.dataId).values,o=n.data.get(i.dataId).values,s=n.makeTensorInfo(r.shape,`complex64`),c=n.data.get(s.dataId);return c.complexTensorInfos={real:n.makeTensorInfo(r.shape,`float32`,a),imag:n.makeTensorInfo(i.shape,`float32`,o)},s}var XR={kernelName:pt,backendName:`cpu`,kernelFunc:YR};Y();function ZR(e,t,n=`float32`){if(n===`complex64`)return YR({inputs:{real:ZR(e,t,`float32`),imag:ZR(e,t,`float32`)},backend:e});let r=Te(C(t),n);return e.makeTensorInfo(t,n,r)}Y();function QR(e){let{inputs:t,backend:n}=e,{x:r}=t;return n.incRef(r.dataId),{dataId:r.dataId,shape:r.shape,dtype:r.dtype}}var $R={kernelName:Xt,backendName:`cpu`,kernelFunc:QR};Y();function ez(e){let{inputs:t,backend:n}=e,{input:r}=t,i=n.data.get(r.dataId).complexTensorInfos.real,a=n.data.get(i.dataId).values;return n.makeTensorInfo(i.shape,i.dtype,a)}var tz={kernelName:Vn,backendName:`cpu`,kernelFunc:ez};Y();function nz(e,t,n,r){if(r===`int32`)return[t,`int32`,Int32Array.from(e)];if(r===`bool`){let r=Ci([0],n),[i,a]=JR((e,t)=>e===t?0:1)(t,[],e,r,`bool`);return[a,`bool`,i]}throw Error(`Error in Cast: failed to cast ${n} to ${r}`)}function rz(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{dtype:a}=r;if(a===`complex64`){if(i.dtype===`complex64`)return QR({inputs:{x:i},backend:n});let e=ZR(n,i.shape,i.dtype),t=rz({inputs:{x:i},backend:n,attrs:{dtype:`float32`}}),r=YR({inputs:{real:t,imag:e},backend:n});return n.disposeIntermediateTensorInfo(e),n.disposeIntermediateTensorInfo(t),r}if(i.dtype===`complex64`){let e=ez({inputs:{input:i},backend:n}),t=rz({inputs:{x:e},backend:n,attrs:{dtype:a}});return n.disposeIntermediateTensorInfo(e),t}if(!de(i.dtype,a)){let e=QR({inputs:{x:i},backend:n});return{dataId:e.dataId,shape:e.shape,dtype:a}}let o=n.data.get(i.dataId).values,[s,c,l]=nz(o,i.shape,i.dtype,a);return n.makeTensorInfo(s,c,l)}var iz={kernelName:ut,backendName:`cpu`,kernelFunc:rz};Y();function az(e,t,n,r){return n==null?({inputs:n,backend:i})=>{let{a,b:o}=n,s=i;Z([a,o],e);let c=s.data.get(a.dataId).values,l=s.data.get(o.dataId).values,u=a.dtype===`string`?mE(c):c,d=a.dtype===`string`?mE(l):l,f=r||a.dtype,[p,m]=t(a.shape,o.shape,u,d,f);return s.makeTensorInfo(m,f,p)}:({inputs:e,backend:i})=>{let{a,b:o}=e,s=i;if(a.dtype===`complex64`||o.dtype===`complex64`){let e=rz({inputs:{x:a},backend:s,attrs:{dtype:`complex64`}}),t=s.data.get(e.dataId),r=t.complexTensorInfos.real,i=t.complexTensorInfos.imag,c=s.data.get(r.dataId).values,l=s.data.get(i.dataId).values,u=rz({inputs:{x:o},backend:s,attrs:{dtype:`complex64`}}),d=s.data.get(u.dataId),f=d.complexTensorInfos.real,p=d.complexTensorInfos.imag,m=s.data.get(f.dataId).values,h=s.data.get(p.dataId).values,[g,_,v]=n(a.shape,o.shape,c,l,m,h),y=s.makeTensorInfo(v,`float32`,g),b=s.makeTensorInfo(v,`float32`,_),x=YR({inputs:{real:y,imag:b},backend:s});return s.disposeIntermediateTensorInfo(e),s.disposeIntermediateTensorInfo(u),s.disposeIntermediateTensorInfo(y),s.disposeIntermediateTensorInfo(b),x}{let e=s.data.get(a.dataId).values,n=s.data.get(o.dataId).values,i=r||a.dtype,[c,l]=t(a.shape,o.shape,e,n,i);return s.makeTensorInfo(l,i,c)}}}function oz(e){return(t,n,r,i,a,o)=>{let s=Gc(t,n),c=C(s),l=s.length,u=xe(s),d=se(`float32`,c),f=se(`float32`,c),p=Uc(t,s),m=Uc(n,s),h=TT(r,i),g=TT(a,o),_=t.length,v=xe(t),y=n.length,b=xe(n);if(p.length+m.length===0)for(let t=0;t<d.length;t++){let n=t%h.length,r=t%g.length,i=e(h[n*2],h[n*2+1],g[r*2],g[r*2+1]);d[t]=i.real,f[t]=i.imag}else for(let t=0;t<d.length;t++){let n=ke(t,l,u),r=n.slice(-_);p.forEach(e=>r[e]=0);let i=Oe(r,_,v),a=n.slice(-y);m.forEach(e=>a[e]=0);let o=Oe(a,y,b),s=e(h[i*2],h[i*2+1],g[o*2],g[o*2+1]);d[t]=s.real,f[t]=s.imag}return[d,f,s]}}Y();var sz=JR(((e,t)=>e+t)),cz=az(`Add`,sz,oz(((e,t,n,r)=>({real:e+n,imag:t+r})))),lz={kernelName:`Add`,backendName:`cpu`,kernelFunc:cz};Y();function uz(e,t,n,r,i){let a=C(r),o=Te(i,n);for(let n=0;n<e.length;n++){let r=e[n];if(r<0)throw Error(`Input x must be non-negative!`);r>=i||(a>0?o[r]+=t[n]:o[r]+=1)}return o}function dz(e,t,n,r=!1){let i=e.shape[0],a=e.shape[1],o=ss([i,n],t.dtype);for(let s=0;s<i;s++)for(let i=0;i<a;i++){let a=e.get(s,i);if(a<0)throw Error(`Input x must be non-negative!`);a>=n||(r?o.set(1,s,a):t.size>0?o.set(o.get(s,a)+t.get(s,i),s,a):o.set(o.get(s,a)+1,s,a))}return o}Y();function fz(e){return(t,n,r)=>{let i=se(n,t.length);for(let n=0;n<t.length;++n)i[n]=e(t[n],r);return i}}Y();function pz(e,t,n){return({inputs:r,attrs:i,backend:a})=>{let{x:o}=r;if(Z(o,e),o.dtype===`string`||n===`string`)throw Error(`unaryKernelFunc does not support string input/output`);let s=a,c=s.data.get(o.dataId).values,l=C(o.shape),u=n||o.dtype,d=ce(u,l);for(let e=0;e<l;++e)d[e]=t(c[e],i);return s.makeTensorInfo(o.shape,u,d)}}function mz(e,t,n){return({inputs:r,attrs:i,backend:a})=>{let{x:o}=r;if(Z(o,e),o.dtype===`string`||n===`string`)throw Error(`unaryKernelFunc does not support string input/output`);let s=a,c=s.data.get(o.dataId).values,l=n||o.dtype,u=t(c,l,i);return s.makeTensorInfo(o.shape,l,u)}}Y();var hz=fz(e=>Math.ceil(e)),gz=mz(dt,hz),_z={kernelName:dt,backendName:`cpu`,kernelFunc:gz};Y();function vz(e,t,n,r){let i=ce(n,C(t));if(r&&n!==`string`){let t=0;e.forEach(e=>{let n=C(e.shape);i.set(e.vals,t),t+=n})}else{let r=0;e.forEach(e=>{let a=n===`string`?mE(e.vals):e.vals,o=0;for(let n=0;n<e.shape[0];++n){let s=n*t[1]+r;for(let t=0;t<e.shape[1];++t)i[s+t]=a[o++]}r+=e.shape[1]})}return i}Y();var yz=JR((e,t)=>+(e===t)),bz=az(Rt,yz,null,`bool`),xz={kernelName:Rt,backendName:`cpu`,kernelFunc:bz};Y();var Sz=fz(e=>Math.exp(e)),Cz=mz(`Exp`,Sz,`float32`),wz={kernelName:`Exp`,backendName:`cpu`,kernelFunc:Cz};Y();var Tz=fz(e=>Math.expm1(e)),Ez=mz(Bt,Tz),Dz={kernelName:Bt,backendName:`cpu`,kernelFunc:Ez};Y();var Oz=fz(e=>Math.floor(e)),kz=mz(Ut,Oz),Az={kernelName:Ut,backendName:`cpu`,kernelFunc:kz};Y();function jz(e,t,n,r,i,a,o,s,c){let l=ss([r,a],n);for(let n=0;n<r;n++){let r=[],u=0;for(let t=0;t<i;t++){let a=e[n*i+t];u+=a*o[t],r.push(a)}if(u<0||u>=c/a)throw Error(`Invalid indices: ${r} does not index into ${s}`);for(let e=0;e<a;e++)l.values[n*a+e]=t.get(...t.indexToLoc(u*a+e))}return l}Y();function Mz(e,t,n){let r=ss(n,e.dtype);for(let n=0;n<r.size;++n){let i=r.indexToLoc(n).slice(),a=i[0],o=i[2],s=t.locToIndex([a,o]);i[2]=t.values[s];let c=e.locToIndex(i);0<=c&&c<e.values.length&&(r.values[n]=e.values[c])}return r}Y();var Nz=JR((e,t)=>+(e>t)),Pz=az(Jt,Nz,null,`bool`),Fz={kernelName:Jt,backendName:`cpu`,kernelFunc:Pz};Y();var Iz=JR((e,t)=>+(e>=t)),Lz=az(Yt,Iz,null,`bool`),Rz={kernelName:Yt,backendName:`cpu`,kernelFunc:Lz};Y();var zz=JR((e,t)=>+(e<t)),Bz=az(rn,zz,null,`bool`),Vz={kernelName:rn,backendName:`cpu`,kernelFunc:Bz};Y();var Hz=JR((e,t)=>+(e<=t)),Uz=az(an,Hz,null,`bool`),Wz={kernelName:an,backendName:`cpu`,kernelFunc:Uz};Y();function Gz(e,t,n){let r=(t-e)/(n-1),i=Te(n,`float32`);i[0]=e;for(let e=1;e<i.length;e++)i[e]=i[e-1]+r;return i}Y();var Kz=fz(e=>Math.log(e)),qz={kernelName:`Log`,backendName:`cpu`,kernelFunc:mz(`Log`,Kz)};Y();function Jz(e,t,n,r){let i=se(r,C(n));for(let n=0;n<i.length;++n){let r=n*t,a=e[r];for(let n=0;n<t;++n){let t=e[r+n];(Number.isNaN(t)||t>a)&&(a=t)}i[n]=a}return i}Y();var Yz=JR(((e,t)=>Math.max(e,t))),Xz=az(hn,Yz),Zz={kernelName:hn,backendName:`cpu`,kernelFunc:Xz};Y();var Qz=JR(((e,t)=>Math.min(e,t))),$z=az(Sn,Qz),eB={kernelName:Sn,backendName:`cpu`,kernelFunc:$z};Y();var tB=JR(((e,t)=>e*t)),nB=oz(((e,t,n,r)=>({real:e*n-t*r,imag:e*r+t*n}))),rB=az(Tn,tB,nB),iB={kernelName:Tn,backendName:`cpu`,kernelFunc:rB};Y();function aB(e,t,n){return tB([],t,xi(-1,n),e,n)}function oB(e){let{inputs:t,backend:n}=e,{x:r}=t;Z(r,`neg`);let i=n.data.get(r.dataId).values,[a,o]=aB(i,r.shape,r.dtype);return n.makeTensorInfo(o,r.dtype,a)}var sB={kernelName:`Neg`,backendName:`cpu`,kernelFunc:oB};Y();var cB=JR(((e,t)=>e===t?0:1)),lB=az(En,cB,null,`bool`),uB={kernelName:En,backendName:`cpu`,kernelFunc:lB};Y();function dB(e,t,n,r,i){let a=t.length,o=C(t),s=xe(t),c=xe(i),l=se(n,C(i));for(let t=0;t<o;++t){let n=ke(t,a,s),i=Array(n.length);for(let e=0;e<i.length;e++)i[e]=n[r[e]];let o=Oe(i,a,c);l[o]=e[t]}return l}Y();function fB(e){let{inputs:t,attrs:n,backend:r}=e,{x:i}=t,{perm:a}=n;Z(i,`transpose`);let o=i.shape.length,s=Array(o);for(let e=0;e<s.length;e++)s[e]=i.shape[a[e]];let c=r.data.get(i.dataId).values,l=dB(c,i.shape,i.dtype,a,s);return{dataId:r.write(l,s,i.dtype),shape:s,dtype:i.dtype}}var pB={kernelName:Dr,backendName:`cpu`,kernelFunc:fB};Y();function mB(e,t,n,r){let[i,a]=Qp(e,r),o=Qi(t,`int32`),s=Te(C(i),o),c=C(a);for(let e=0;e<s.length;++e){let t=e*c,r=1;for(let e=0;e<c;++e)r*=n[t+e];s[e]=r}return{outVals:s,outShape:i,outDtype:o}}function hB(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{axis:a,keepDims:o}=r;Z(i,`prod`);let s=i.shape.length,c=ae(a,i.shape),l=tm(c,s),u=c,d=i,f=[];l!=null&&(d=fB({inputs:{x:i},backend:n,attrs:{perm:l}}),f.push(d),u=rm(u.length,s));let p=n.data.get(d.dataId).values,{outVals:m,outShape:h,outDtype:g}=mB(d.shape,d.dtype,p,u),_=h;return o&&(_=$p(h,c)),f.forEach(e=>n.disposeIntermediateTensorInfo(e)),n.makeTensorInfo(_,g,m)}var gB={kernelName:In,backendName:`cpu`,kernelFunc:hB};Y();function _B(e,t,n){e.forEach((e,r)=>{if(e<0||e>=n){let i=ke(r,t.length,xe(t)).join(`,`);throw Error(`indices[${i}] = ${e} is not in [0, ${n})`)}})}function vB(e,t){for(let n=0;n<e.length;++n){let r=e[n],i=n===e.length-1?t:e[n+1].length;if(r.length===0)throw Error(`Ragged splits may not be empty`);if(r[0]<0)throw Error(`Ragged splits must be non-negative`);if(r[r.length-1]>i)throw Error(`Ragged splits must not point past values`);for(let e=1;e<r.length;++e)if(r[e-1]>r[e])throw Error(`Ragged splits must be sorted in ascending order`)}}function yB(e,t,n,r){let i=[],a=0,o=t.length-1+n.length,s=Array(o).fill(null).map(()=>[0]);vB(n,r);let c=1;for(let e=0;e<t.length-1;++e){c*=t[e];let n=t[e+1];for(let t=1;t<c+1;++t)s[e].push(t*n)}for(let r=0;r<e.length;++r){let o=e[r],c=e[r]+1;for(let e=0;e<n.length;++e){let r=n[e],i=e+t.length-1;if(i>=0){let e=s[i],t=e[e.length-1]-r[o];for(let e=o;e<c;++e)s[i].push(r[e+1]+t)}o=r[o],c=r[c]}c!==o&&(i.push([o,c]),a+=c-o)}return{outSplits:s,valueSlices:i,numValues:a}}function bB(e){let t=[];for(let n=0;n<e.length;++n){let r=e[n].length,i=ce(`int32`,r);t.push(i),e[n].forEach((e,t)=>i[t]=e)}return t}function xB(e,t){let n=e.slice(0,t);for(;n.length<t;)n.push(1);for(let r=t;r<e.length;r++)n[t-1]*=e[r];return n}function SB(e,t,n,r,i,a){let o=xB(t,2)[1],s=xB(a,2)[1],c=0;for(let t of n)for(let n=t[0];n<t[1];++n){for(let t=0;t<r;++t)i[c*s+t]=e[n*o+t];++c}}function CB(e,t,n,r,i){let a=t.slice();a[0]=i;let o=ce(n,C(a)),s=e.length;return SB(e,t,r,s===0?0:s/t[0],o,a),[o,a]}function wB(e,t,n,r,i,a,o,s){if(e.length===0)throw Error(`paramsNestedSplits must be non empty`);if(t[0].length===0)throw Error(`Split tensors must not be scalars`);if(_B(a,o,t[0][0]-1),r.length===0)throw Error(`params.rank must be nonzero`);let c=r[0],{outSplits:l,valueSlices:u,numValues:d}=yB(a,o,e,c),f=bB(l),p=CB(n,r,i,u,d);return[f,p[0],p[1]]}Y();var TB=2147483647;function EB(e,t,n,r,i,a,o){if(t.length>1)throw Error(`starts must be a scalar or vector`);if(i.length>1)throw Error(`limits must be a scalar or vector`);if(o.length>1)throw Error(`deltas must be a scalar or vector`);let s=t.length===0,c=i.length===0,l=o.length===0,u=[];s||u.push(t[0]),c||u.push(i[0]),l||u.push(o[0]);for(let e=1;e<u.length;++e)if(u[e]!==u[e-1])throw Error(`starts, limits, and deltas must have the same shape`);let d=u.length===0?1:u[0],f=ce(`int32`,d+1);f[0]=0;for(let t=0;t<d;++t){let n=s?e[0]:e[t],i=c?r[0]:r[t],o=l?a[0]:a[t];if(o===0)throw Error(`Requires delta != 0`);let u;if(o>0&&i<n||o<0&&i>n)u=0;else if(u=Math.ceil(Math.abs((i-n)/o)),u>TB)throw Error(`Requires ((limit - start) / delta) <= ${TB}`);f[t+1]=f[t]+u}let p=f[d],m=ce(n,p),h=0;for(let t=0;t<d;++t){let n=f[t+1]-f[t],r=s?e[0]:e[t],i=l?a[0]:a[t];for(let e=0;e<n;++e)m[h++]=r,r+=i}return[f,m]}Y();var DB=rT,OB=class e{constructor(e,t,n,r,i,a,o,s,c,l){this.shape=e,this.shapeShape=t,this.values=n,this.valuesShape=r,this.valuesDType=i,this.defaultValue=a,this.defaultValueShape=o,this.rowPartitionValues=s,this.rowPartitionValuesShapes=c,this.rowPartitionTypes=eT(l),this.raggedRank=tT(this.rowPartitionTypes)}getRowPartitionTypeByDimension(e){return this.rowPartitionTypes[0]===DB.FIRST_DIM_SIZE?this.rowPartitionTypes[e+1]:this.rowPartitionTypes[e]}getRowPartitionTensor(e){return this.rowPartitionTypes[0]===DB.FIRST_DIM_SIZE?this.rowPartitionValues[e+1]:this.rowPartitionValues[e]}getMaxWidth(t){let n=this.getRowPartitionTensor(t-1);switch(this.getRowPartitionTypeByDimension(t-1)){case DB.VALUE_ROWIDS:return e.getMaxWidthValueRowID(n);case DB.ROW_SPLITS:return e.getMaxWidthRowSplit(n);default:throw Error(`Cannot handle partition type ${DB[this.getRowPartitionTypeByDimension(t-1)]}`)}}static getMaxWidthRowSplit(e){let t=e.length;if(t===0||t===1)return 0;let n=0;for(let r=0;r<t-1;++r){let t=e[r+1]-e[r];t>n&&(n=t)}return n}static getMaxWidthValueRowID(e){let t=e.length;if(t===0)return 0;let n=0,r=e[0],i=0;for(let a=1;a<t;++a){let t=e[a];t!==r&&(r=t,i=Math.max(a-n,i),n=a)}return Math.max(t-n,i)}tensorShapeFromTensor(e,t,n=!0){if(t.length===0){if(e[0]===-1)return[];throw Error(`The only valid scalar shape tensor is the fully unknown shape specified as -1.`)}return AB(e,n)}calculateOutputSize(e){let t=this.valuesShape,n=this.defaultValueShape;nT(n,t);let r=this.tensorShapeFromTensor(this.shape,this.shapeShape),i=$w(this.raggedRank,r,t);i[0]<0&&(i[0]=e);for(let e=1;e<=this.raggedRank;++e)i[e]<0&&(i[e]=this.getMaxWidth(e));return i}calculateFirstParentOutputIndex(e,t,n){let r=Math.min(e,n),i=[],a=0;for(let e=0;e<r;++e,a+=t)i.push(a);for(let t=r;t<e;++t)i.push(-1);return y(i.length===e,()=>`Final length of result must be equal to firstDimension.`),i}calculateOutputIndexRowSplit(e,t,n,r){let i=e.length,a=[];for(let o=0;o<i-1;++o){let i=e[o+1]-e[o],s=Math.min(r,i),c=t[o];c===-1&&(s=0);for(let e=0;e<s;++e)a.push(c),c+=n;for(let e=0;e<i-s;++e)a.push(-1)}if(i>0&&a.length!==e[i-1])throw Error(`Invalid row split size.`);return a}calculateOutputIndexValueRowID(e,t,n,r){let i=e.length,a=[];if(i===0)return[];let o=0,s=e[0];if(s>=t.length)throw Error(`Got currentValueRowId=${s}, which is not less than ${t.length}`);let c=t[s];a.push(c);for(let l=1;l<i;++l){let i=e[l];if(i===s)c>=0&&(++o,o<r?c+=n:c=-1);else{if(o=0,s=i,i>=t.length)throw Error(`Got nextValueRowId=${i} which is not less than ${t.length}`);c=t[i]}a.push(c)}if(a.length!==e.length)throw Error(`Invalid row ids.`);return a}calculateOutputIndex(e,t,n,r){let i=this.getRowPartitionTensor(e),a=this.getRowPartitionTypeByDimension(e);switch(a){case DB.VALUE_ROWIDS:return this.calculateOutputIndexValueRowID(i,t,n,r);case DB.ROW_SPLITS:if(i.length-1>t.length)throw Error(`Row partition size is greater than output size: ${i.length-1} > ${t.length}`);return this.calculateOutputIndexRowSplit(i,t,n,r);default:throw Error(`Unsupported partition type: ${DB[a]}`)}}getFirstDimensionSize(){let e=this.rowPartitionValues[0];if(this.rowPartitionTypes.length===0)throw Error(`No row_partition_types given.`);let t=this.rowPartitionTypes[0];switch(t){case DB.FIRST_DIM_SIZE:return e[0];case DB.VALUE_ROWIDS:throw Error(`Cannot handle VALUE_ROWIDS in first dimension.`);case DB.ROW_SPLITS:return this.rowPartitionValuesShapes[0][0]-1;default:throw Error(`Cannot handle type ${DB[t]}`)}}compute(){if(this.rowPartitionValues[0].length<=0)throw Error(`Invalid first partition input. Tensor requires at least one element.`);let e=this.getFirstDimensionSize(),t=this.calculateOutputSize(e),n=Array(this.raggedRank+1);n[n.length-1]=1;for(let e=n.length-2;e>=0;--e)n[e]=n[e+1]*t[e+1];let r=AB(t,!1),i=ce(this.valuesDType,C(r));if(n[0]*t[0]>0){let a=this.calculateFirstParentOutputIndex(e,n[0],t[0]);for(let e=1;e<=this.raggedRank;++e)a=this.calculateOutputIndex(e-1,a,n[e],t[e]);this.setOutput(this.raggedRank,a,i,r)}return[r,i]}setOutput(e,t,n,r){if(n.length===0)return;let i=this.values,a=n,o=r.slice();o=o.slice(e+1);let s=C(o),c=t.length,l=this.defaultValue;if(l.length!==s&&l.length!==1){let e=this.defaultValueShape;B(()=>{let t=G(l,e);l=uf(t,o).dataSync()})}let u=0,d=0,f=0;for(let e=0;e<=c;++e){let r=e<c?t[e]:-1;if(r===f)++f;else{if(d<f){let e=i.subarray(u*s);kB(a.subarray(d*s),e,(f-d)*s)}if(e>=c){let e=n.length;r=Math.floor(e/s)}if(r>f){if(this.defaultValue.length===1)a.subarray(f*s,r*s).fill(this.defaultValue[0]),f=r;else for(;r>f;)kB(a.slice(f*s),l,s),++f}r<0?(u=e+1,d=f):(u=e,d=f,f=d+1)}}}};function kB(e,t,n){for(let r=0;r<n;r++)e[r]=t[r]}function AB(e,t){let n=[];for(let r of e){if(r<0){if(!t)throw Error(`Dimension ${r} must be >= 0`);if(r<-1)throw Error(`Dimension ${r} must be >= -1`);r=-1}n.push(r)}return n}function jB(e,t,n,r,i,a,o,s,c,l){return new OB(e,t,n,r,i,a,o,s,c,l).compute()}Y();function MB(e,t,n,r){if(e===t||e<t&&n<0||t<e&&n>1)return Te(0,r);let i=Te(Math.abs(Math.ceil((t-e)/n)),r);t<e&&n===1&&(n=-1),i[0]=e;for(let e=1;e<i.length;e++)i[e]=i[e-1]+n;return i}Y();var NB=fz(e=>1/Math.sqrt(e)),PB=mz(Qn,NB),FB={kernelName:Qn,backendName:`cpu`,kernelFunc:PB};Y();function IB(e,t,n,r,i,a,o,s,c,l){let u=[r/i,i],d=e.values,f=t.values;if(r===0)return ss(n,t.dtype);let p=ss(u,t.dtype);typeof c==`string`||typeof c==`number`?p.values.fill(c):typeof c==`boolean`&&p.values.fill(+c);for(let e=0;e<a;e++){let a=[],c=0;for(let t=0;t<o;t++){let n=d[e*o+t];a.push(n),c+=n*s[t]}if(c<0||c>=r/i)throw Error(`Invalid indices: ${a} does not index into ${n}`);for(let n=0;n<i;n++)l?p.values[c*i+n]+=f[e*i+n]:p.values[c*i+n]=t.rank===0?f[0]:f[e*i+n]}return p}Y();var LB=fz(e=>1/(1+Math.exp(-e))),RB=pz(or,e=>1/(1+Math.exp(-e))),zB={kernelName:or,backendName:`cpu`,kernelFunc:RB};Y();function BB(e,t,n,r,i){let a=Dl(r,t,n),o=C(n),s=xe(r);if(a){let n=Ol(t,s);return i===`string`?e.slice(n,n+o):e.subarray(n,n+o)}let c=ss(r,i,i===`string`?mE(e):e),l=ss(n,i);for(let e=0;e<l.size;++e){let n=l.indexToLoc(e),r=n.map((e,n)=>e+t[n]);l.set(c.get(...r),...n)}return i===`string`?hE(l.values):l.values}function VB(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{begin:a,size:o}=r;Z(i,`slice`);let[s,c]=kl(i,a,o);hl(i,s,c);let l=n.data.get(i.dataId).values,u=BB(l,s,c,i.shape,i.dtype);return n.makeTensorInfo(c,i.dtype,u)}var HB={kernelName:rr,backendName:`cpu`,kernelFunc:VB};Y();function UB(e,t,n,r,i,a,o){let s=t[0],c=a[0],l=Array(c),u=Array(s),d=t[1];if(c===0){if(s!==0)throw Error(qT(s));let e=ce(n,0),t=ce(i,0);return[e,[0,d],t,l,u]}let f=!0,p=0,m=Array(c).fill(0);for(let t=0;t<s;++t){let n=e[t*d];if(n<0)throw Error(JT(t,n));if(n>=c)throw Error(YT(t,n,c));++m[n],f&&=n>=p,p=n}let h=!0;for(let e=0;e<c;++e){let t=m[e]===0;l[e]=t,h&&=!t,m[e]=Math.max(m[e],1),e>0&&(m[e]+=m[e-1])}if(h&&f){let t=e,n=r;for(let e=0;e<s;++e)u[e]=e;return[t,[s,d],n,l,u]}{let t=m[c-1],a=ce(n,t*d),f=ce(i,t),p=Array(c).fill(0);for(let t=0;t<s;++t){let n=e[t*d],i=p[n],o=(n===0?0:m[n-1])+i;p[n]++;for(let n=0;n<d;++n)a[o*d+n]=e[t*d+n];f[o]=r[t],u[t]=o}for(let e=0;e<c;++e)if(p[e]===0){let t=e===0?0:m[e-1];a[t*d+0]=e;for(let e=1;e<d;++e)a[t*d+e]=0;f[t]=o}return[a,[t,d],f,l,u]}}Y();function WB(e,t,n,r,i){let a=C(r),o=t[0],s=i.length,c=[],l=1,u=-1;for(let e=0;e<s;++e){let t=i[e];if(t===-1){if(u!==-1)throw Error(ZT(u,e));u=e,c.push(1)}else{if(t<0)throw Error(QT(e,t));l*=t,c.push(t)}}if(u!==-1){if(l<=0)throw Error($T());let e=Math.trunc(a/l);if(l*e!==a)throw Error(eE(r,c));c[u]=e}if(C(c)!==a)throw Error(tE(r,c));let d=r.length,f=[];if(d>0){f[d-1]=1;for(let e=d-2;e>=0;--e)f[e]=f[e+1]*r[e+1]}let p=[];if(s>0){p[s-1]=1;for(let e=s-2;e>=0;--e)p[e]=p[e+1]*c[e+1]}let m=ce(n,o*s);for(let t=0;t<o;++t){let n=0;for(let r=0;r<d;++r)n+=e[t*d+r]*f[r];for(let e=0;e<s;++e)m[t*s+e]=Math.trunc(n/p[e]),n%=p[e]}return[m,[o,s],c]}Y();function GB(e,t,n,r,i,a=!1,o=0){let s=r.length,c=[t[0],e.length/t[0]],l=c[1],u=s>0?i[s-1]+1:0;if(u<0)throw Error(rE());let d=t.slice();d[0]=u;let f=ce(n,d.reduce((e,t)=>e*t,1));if(s===0)return u>0&&f.fill(o),[f,d];if(u<=0)throw Error(rE());let p=0,m=1,h=0,g=i[p];for(;;){let t=0;if(m<s){if(t=i[m],g===t){++m;continue}if(g>=t)throw Error(iE())}if(g<0||g>=u)throw Error(aE(g,u));g>h&&f.fill(o,h*l,g*l);for(let t=p;t<m;++t){let n=r[t];if(n<0||n>=c[0])throw Error(oE(t,r[t],c[0]));for(let t=0;t<l;t++)f[g*l+t]+=e[n*l+t]}if(a)for(let e=0;e<l;e++)f[g*l+e]/=m-p;if(p=m,++m,h=g+1,g=t,m>s)break}return h<u&&f.fill(o,h*l,u*l),[f,d]}Y();var KB=fz(e=>Math.sqrt(e)),qB=pz(cr,e=>Math.sqrt(e)),JB={kernelName:cr,backendName:`cpu`,kernelFunc:qB};Y();var YB=JR(((e,t)=>{let n=e-t;return n*n})),XB=az(_r,YB),ZB={kernelName:_r,backendName:`cpu`,kernelFunc:XB};Y();function QB(e,t,n,r){let i=ss(e,t.dtype);for(let e=0;e<i.size;e++){let a=i.indexToLoc(e),o=Array(a.length);for(let e=0;e<o.length;e++)o[e]=a[e]*n[e]+r[e];i.set(t.get(...o),...a)}return i}Y();var $B=class{constructor(e,t,n,r,i,a){this.separator=Ei(e),this.nGramWidths=t,this.leftPad=Ei(n),this.rightPad=Ei(r),this.padWidth=i,this.preserveShort=a}getPadWidth(e){return Math.min(this.padWidth<0?e-1:this.padWidth,e-1)}getNumNGrams(e,t){let n=this.getPadWidth(t);return Math.max(0,e+2*n-t+1)}createNGrams(e,t,n,r,i,a){for(let o=0;o<i;++o){let s=this.getPadWidth(a),c=Math.max(0,s-o),l=Math.max(0,s-(i-(o+1))),u=a-(c+l),d=t+(c>0?0:o-s),f=0;f+=c*this.leftPad.length;for(let t=0;t<u;++t)f+=e[d+t].length;f+=l*this.rightPad.length;let p=c+l+u-1;f+=p*this.separator.length,n[r+o]=new Uint8Array(f);let m=n[r+o],h=0,g=e=>e.forEach(e=>m[h++]=e);for(let e=0;e<c;++e)g(this.leftPad),g(this.separator);for(let t=0;t<u-1;++t)g(e[d+t]),g(this.separator);if(u>0){g(e[d+u-1]);for(let e=0;e<l;++e)g(this.separator),g(this.rightPad)}else{for(let e=0;e<l-1;++e)g(this.rightPad),g(this.separator);g(this.rightPad)}}}compute(e,t){let n=e.length,r=t.length;if(r>0){let e=t[0];if(e!==0)throw Error(`First split value must be 0, got ${e}`);for(let i=1;i<r;++i){let r=t[i]>=e;if(r&&=t[i]<=n,!r)throw Error(`Invalid split value ${t[i]}, must be in [${e}, ${n}]`);e=t[i]}if(e!==n)throw Error(`Last split value must be data size. Expected ${n}, got ${e}`)}let i=r-1,a=ce(`int32`,r);if(n===0||r===0){let e=Array(n);for(let e=0;e<=i;++e)a[e]=0;return[e,a]}a[0]=0;for(let e=1;e<=i;++e){let n=t[e]-t[e-1],r=0;this.nGramWidths.forEach(e=>{r+=this.getNumNGrams(n,e)}),this.preserveShort&&n>0&&r===0&&(r=1),a[e]=a[e-1]+r}let o=Array(a[i]);for(let n=0;n<i;++n){let r=t[n],i=a[n];if(this.nGramWidths.forEach(a=>{let s=t[n+1]-t[n],c=this.getNumNGrams(s,a);this.createNGrams(e,r,o,i,c,a),i+=c}),this.preserveShort&&i===a[n]){let a=t[n+1]-t[n];if(a===0)continue;let s=a+2*this.padWidth;this.createNGrams(e,r,o,i,1,s)}}return[o,a]}};function eV(e,t,n,r,i,a,o,s){return new $B(n,r,i,a,o,s).compute(e,t)}Y();function tV(e,t,n,r){if(!e.length)return;if(t.length===0){for(let t=0;t<e.length;++t)r.push(e.subarray(t,t+1));return}if(t.length===1){let i=t[0],a=e.indexOf(i);for(;a!==-1;){let t=e.subarray(0,a);n&&t.length===0||r.push(t),e=e.subarray(a+1),a=e.indexOf(i)}n&&e.length===0||r.push(e);return}let i=0;for(let a=0;a<e.length+1;a++)if(a===e.length||t.indexOf(e[a])!==-1){let t=e.subarray(i,a);n&&t.length===0||r.push(t),i=a+1}}function nV(e,t,n){let r=e.length,i=[],a=0,o=0,s=Array(r);for(let c=0;c<r;++c){let r=i.length;tV(e[c],t,n,i);let l=i.length-r;s[c]=l,a+=l,o=Math.max(o,l)}let c=ce(`int32`,a*2),l=Array(a),u=[r,o],d=0;for(let e=0;e<r;++e)for(let t=0;t<s[e];++t)c[d*2]=e,c[d*2+1]=t,l[d]=i[d],++d;return[c,l,u]}Y();function rV(e,t){let n=ce(`int32`,e.length);for(let r=0;r<e.length;++r)n[r]=pi(e[r]).modulo(t).getLowBitsUnsigned();return n}Y();var iV=JR(((e,t)=>e-t)),aV=az(`Sub`,iV,oz(((e,t,n,r)=>({real:e-n,imag:t-r})))),oV={kernelName:`Sub`,backendName:`cpu`,kernelFunc:aV};Y();function sV(e,t){let n=Array(e.rank);for(let r=0;r<n.length;r++)n[r]=e.shape[r]*t[r];let r=ss(n,e.dtype);for(let t=0;t<r.values.length;++t){let n=r.indexToLoc(t),i=Array(e.rank);for(let t=0;t<i.length;t++)i[t]=n[t]%e.shape[t];let a=e.locToIndex(i);r.values[t]=e.values[a]}return r}Y();var cV=(e,t)=>{let n=t.value-e.value;return n===0?e.index-t.index:n};function lV(e,t,n=0,r=e.length-1){for(;r>n;){if(r-n>600){let i=r-n+1,a=t-n+1,o=Math.log(i),s=.5*Math.exp(2*o/3),c=.5*Math.sqrt(o*s*(i-s)/i)*Math.sign(a-i/2);lV(e,t,Math.max(n,Math.floor(t-a*s/i+c)),Math.min(r,Math.floor(t+(i-a)*s/i+c)))}let i=e[t],a=n,o=r;for(h(e,n,t),cV(e[r],i)>0&&h(e,n,r);a<o;){for(h(e,a,o),a++,o--;cV(e[a],i)<0;)a+=1;for(;cV(e[o],i)>0;)--o}cV(e[n],i)===0?h(e,n,o):(o+=1,h(e,o,r)),o<=t&&(n=o+1),t<=o&&(r=o-1)}}function uV(e,t,n,r,i){let a=t[t.length-1],[o,s]=[e.length/a,a],c=se(n,o*r),l=se(`int32`,o*r);for(let t=0;t<o;t++){let n=t*s,a=e.subarray(n,n+s),o=Array(a.length);a.forEach((e,t)=>o[t]={value:e,index:t}),r<o.length&&(lV(o,r),o=o.slice(0,r)),i&&o.sort(cV);let u=t*r,d=c.subarray(u,u+r),f=l.subarray(u,u+r);for(let e=0;e<r;e++)d[e]=o[e].value,f[e]=o[e].index}let u=t.slice();return u[u.length-1]=r,[ss(u,n,c),ss(u,`int32`,l)]}Y();function dV(e,t,n,r){let i=ae(t,n)[0],a=[1,n[0],1];for(let e=0;e<i;e++)a[0]*=n[e];a[1]=n[i];for(let e=i+1;e<n.length;e++)a[2]*=n[e];let o={},s=new Int32Array(n[i]),c=new qi(a,r,e),l=[],u=a[0]===1&&a[2]===1;for(let t=0;t<n[i];t++){let n;if(u)n=e[t].toString();else{let e=[];for(let n=0;n<a[0];n++)for(let r=0;r<a[2];r++)e.push(c.get(n,t,r));n=e.join(`,`)}if(o[n]!==void 0)s[t]=o[n];else{let e=Object.keys(o).length;o[n]=e,s[t]=e,l.push(t)}}let d=a.slice();d[1]=Object.keys(o).length;let f=new qi(d,r);l.forEach((e,t)=>{for(let n=0;n<a[0];n++)for(let r=0;r<a[2];r++)f.set(c.get(n,e,r),n,t,r)});let p=n.slice();return p[i]=d[1],{outputValues:f.values,outputShape:p,indices:s}}var fV=r({addImpl:()=>sz,bincountImpl:()=>uz,bincountReduceImpl:()=>dz,castImpl:()=>nz,ceilImpl:()=>hz,concatImpl:()=>vz,equalImpl:()=>yz,expImpl:()=>Sz,expm1Impl:()=>Tz,floorImpl:()=>Oz,gatherNdImpl:()=>jz,gatherV2Impl:()=>Mz,greaterEqualImpl:()=>Iz,greaterImpl:()=>Nz,lessEqualImpl:()=>Hz,lessImpl:()=>zz,linSpaceImpl:()=>Gz,logImpl:()=>Kz,maxImpl:()=>Jz,maximumImpl:()=>Yz,minimumImpl:()=>Qz,multiplyImpl:()=>tB,negImpl:()=>aB,notEqualImpl:()=>cB,prodImpl:()=>mB,raggedGatherImpl:()=>wB,raggedRangeImpl:()=>EB,raggedTensorToTensorImpl:()=>jB,rangeImpl:()=>MB,rsqrtImpl:()=>NB,scatterImpl:()=>IB,sigmoidImpl:()=>LB,simpleAbsImpl:()=>KR,sliceImpl:()=>BB,sparseFillEmptyRowsImpl:()=>UB,sparseReshapeImpl:()=>WB,sparseSegmentReductionImpl:()=>GB,sqrtImpl:()=>KB,squaredDifferenceImpl:()=>YB,stridedSliceImpl:()=>QB,stringNGramsImpl:()=>eV,stringSplitImpl:()=>nV,stringToHashBucketFastImpl:()=>rV,subImpl:()=>iV,tileImpl:()=>sV,topKImpl:()=>uV,transposeImpl:()=>dB,uniqueImpl:()=>dV});Y(),xc(`cpu`,()=>new GR,1),Y();var pV=pz(`Elu`,e=>e>=0?e:Math.exp(e)-1),mV={kernelName:`Elu`,backendName:`cpu`,kernelFunc:pV};Y();function hV(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{alpha:a}=r;Z([i],`leakyRelu`);let o=C(i.shape),s=n.data.get(i.dataId).values,c=se(`float32`,o);for(let e=0;e<s.length;e++)c[e]=s[e]<0?a*s[e]:s[e];return n.makeTensorInfo(i.shape,`float32`,c)}var gV={kernelName:nn,backendName:`cpu`,kernelFunc:hV};Y();var _V=JR((e,t)=>e<0?t*e:e);function vV(e){let{inputs:t,backend:n}=e,{x:r,alpha:i}=t;Z([r,i],`prelu`);let a=n.data.get(r.dataId).values,o=n.data.get(i.dataId).values,[s,c]=_V(r.shape,i.shape,a,o,`float32`);return n.makeTensorInfo(c,`float32`,s)}var yV={kernelName:Fn,backendName:`cpu`,kernelFunc:vV};Y();var bV=pz(Un,e=>Math.max(0,e)),xV={kernelName:Un,backendName:`cpu`,kernelFunc:bV};Y();var SV=pz(Yn,e=>Math.min(Math.max(0,e),6)),CV={kernelName:Yn,backendName:`cpu`,kernelFunc:SV};function wV(e,t,n,r,i){if(n===`linear`)return QR({inputs:{x:t},backend:e});if(n===`relu`)return bV({inputs:{x:t},backend:e});if(n===`elu`)return pV({inputs:{x:t},backend:e});if(n===`relu6`)return SV({inputs:{x:t},backend:e});if(n===`prelu`)return vV({inputs:{x:t,alpha:r},backend:e});if(n===`leakyrelu`)return hV({inputs:{x:t},backend:e,attrs:{alpha:i}});if(n===`sigmoid`)return RB({inputs:{x:t},backend:e});throw Error(`Activation ${n} has not been implemented for the CPU backend.`)}Y();function TV(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{shape:a}=r,o=C(i.shape),s=ie(a,o),c=C(s);y(o===c,()=>`The new shape (${s}) has ${c} elements and the old shape (${i.shape}) has ${o} elements. The new shape and old shape must have the same number of elements.`),n.incRef(i.dataId);let l=n.data.get(i.dataId);if(l.complexTensorInfos!=null){let e=l.complexTensorInfos.real,t=l.complexTensorInfos.imag;e.shape=s,t.shape=s}return{dataId:i.dataId,shape:s,dtype:i.dtype}}var EV={kernelName:Wn,backendName:`cpu`,kernelFunc:TV};Y();function DV(e){let{inputs:t,backend:n,attrs:r}=e,{a:i,b:a}=t,{transposeA:o,transposeB:s}=r;Z([i,a],`matMul`);let c=i.shape.length,l=a.shape.length,u=o?i.shape[c-2]:i.shape[c-1],d=s?a.shape[l-1]:a.shape[l-2],f=o?i.shape[c-1]:i.shape[c-2],p=s?a.shape[l-2]:a.shape[l-1],m=i.shape.slice(0,-2),h=a.shape.slice(0,-2),g=C(m),_=C(h),v=Gc(i.shape.slice(0,-2),a.shape.slice(0,-2)).concat([f,p]);y(u===d,()=>`Error in matMul: inner shapes (${u}) and (${d}) of Tensors with shapes ${i.shape} and ${a.shape} and transposeA=${o} and transposeB=${s} must match.`);let b=o?[g,u,f]:[g,f,u],x=s?[_,p,d]:[_,d,p],S=TV({inputs:{x:i},backend:n,attrs:{shape:b}}),w=TV({inputs:{x:a},backend:n,attrs:{shape:x}}),T=o?S.shape[1]:S.shape[2],E=o?S.shape[2]:S.shape[1],D=s?w.shape[1]:w.shape[2],ee=Math.max(g,_),te=n.data.get(S.dataId).values,ne=n.data.get(w.dataId).values,re=xe(S.shape),ie=xe(w.shape),[ae,oe,se]=o?[re[0],1,re[1]]:[re[0],re[1],1],[ce,le,ue]=s?[1,ie[1],ie[0]]:[ie[1],1,ie[0]],de=E*D,fe=ss([ee,E,D],S.dtype),pe=fe.values,me=n.blockSize;for(let e=0;e<ee;e++)for(let t=0;t<E;t+=me)for(let n=0;n<D;n+=me)for(let r=0;r<T;r+=me){let i=Math.min(t+me,E),a=Math.min(n+me,D),o=Math.min(r+me,T);for(let s=t;s<i;s++)for(let t=n;t<a;t++){let n=0;for(let i=r;i<o;i++){let r=Math.min(e,g-1)*ae,a=Math.min(e,_-1)*ue,o=te[r+s*oe+i*se],c=ne[i*ce+t*le+a];n+=o*c}pe[e*de+(s*D+t)]+=n}}return n.disposeIntermediateTensorInfo(S),n.disposeIntermediateTensorInfo(w),n.makeTensorInfo(v,fe.dtype,fe.values)}var OV={kernelName:at,backendName:`cpu`,kernelFunc:DV};Y();function kV(e){let{inputs:t,backend:n,attrs:r}=e,{a:i,b:a,bias:o,preluActivationWeights:s}=t,{transposeA:c,transposeB:l,activation:u,leakyreluAlpha:d}=r,f,p,m,h=[];f=DV({inputs:{a:i,b:a},attrs:{transposeA:c,transposeB:l},backend:n}),o&&(p=cz({inputs:{a:f,b:o},backend:n}),h.push(f),f=p),u&&(m=wV(n,f,u,s,d),h.push(f),f=m);for(let e of h)n.disposeIntermediateTensorInfo(e);return f}var AV={kernelName:Ir,backendName:`cpu`,kernelFunc:kV};Y();var jV=pz(Ge,e=>Math.acos(e)),MV={kernelName:Ge,backendName:`cpu`,kernelFunc:jV};Y();var NV=pz(Ke,e=>Math.acosh(e)),PV={kernelName:Ke,backendName:`cpu`,kernelFunc:NV};Y();function FV(e){let{inputs:t,backend:n}=e,r=t;Z(t,`addN`);let i=r.map(e=>n.data.get(e.dataId).values),a=ss(r[0].shape,r[0].dtype),o=a.values;for(let e=0;e<r.length;e++){let t=i[e];for(let e=0;e<o.length;e++)o[e]+=t[e]}return n.makeTensorInfo(a.shape,a.dtype,a.values)}var IV={kernelName:qe,backendName:`cpu`,kernelFunc:FV};Y();function LV(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{axis:a,keepDims:o}=r;Z(i,`all`);let s=ae(a,i.shape),c=s,l=tm(c,i.shape.length),u=i;l!=null&&(u=fB({inputs:{x:i},backend:n,attrs:{perm:l}}),c=rm(c.length,i.shape.length)),em(`all`,c,u.shape.length);let[d,f]=Qp(u.shape,c),p=C(f),m=Te(C(d),u.dtype),h=n.data.get(u.dataId).values;for(let e=0;e<m.length;++e){let t=e*p,n=h[t];for(let e=0;e<p;++e){let r=h[t+e];n&&=r}m[e]=n}l!=null&&n.disposeIntermediateTensorInfo(u);let g=n.makeTensorInfo(d,u.dtype,m);if(o){let e=$p(d,s),t=TV({inputs:{x:g},backend:n,attrs:{shape:e}});return n.disposeIntermediateTensorInfo(g),t}return g}var RV={kernelName:`All`,backendName:`cpu`,kernelFunc:LV};Y();function zV(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{axis:a,keepDims:o}=r;Z(i,`any`);let s=ae(a,i.shape),c=s,l=tm(c,i.shape.length),u=i;l!=null&&(u=fB({inputs:{x:i},backend:n,attrs:{perm:l}}),c=rm(c.length,i.shape.length)),em(`any`,c,u.shape.length);let[d,f]=Qp(u.shape,c),p=C(f),m=Te(C(d),u.dtype),h=n.data.get(u.dataId).values;for(let e=0;e<m.length;++e){let t=e*p,n=h[t];for(let e=0;e<p;++e){let r=h[t+e];n||=r}m[e]=n}l!=null&&n.disposeIntermediateTensorInfo(u);let g=n.makeTensorInfo(d,u.dtype,m);if(o){let e=$p(d,s),t=TV({inputs:{x:g},backend:n,attrs:{shape:e}});return n.disposeIntermediateTensorInfo(g),t}return g}var BV={kernelName:`Any`,backendName:`cpu`,kernelFunc:zV};Y();function VV(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{axis:a}=r;Z(i,`argMax`);let o=ae(a,i.shape),s=tm(o,i.shape.length),c=i,l=[];s!=null&&(c=fB({inputs:{x:i},backend:n,attrs:{perm:s}}),l.push(c),o=rm(o.length,c.shape.length)),o=[o[0]],em(`argMax`,o,c.shape.length);let[u,d]=Qp(c.shape,o),f=Te(C(u),`int32`),p=C(d),m=n.data.get(c.dataId).values;for(let e=0;e<f.length;++e){let t=e*p,n=m[t],r=0;for(let e=0;e<p;++e){let i=m[t+e];i>n&&(n=i,r=e)}f[e]=r}return l.forEach(e=>n.disposeIntermediateTensorInfo(e)),n.makeTensorInfo(u,`int32`,f)}var HV={kernelName:Je,backendName:`cpu`,kernelFunc:VV};Y();function UV(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{axis:a}=r;Z(i,`argMin`);let o=ae(a,i.shape),s=tm(o,i.shape.length),c=i,l=[];s!=null&&(c=fB({inputs:{x:i},backend:n,attrs:{perm:s}}),l.push(c),o=rm(o.length,c.shape.length)),o=[o[0]],em(`argMin`,o,c.shape.length);let[u,d]=Qp(c.shape,o),f=Te(C(u),`int32`),p=C(d),m=n.data.get(c.dataId).values;for(let e=0;e<f.length;++e){let t=e*p,n=m[t],r=0;for(let e=0;e<p;++e){let i=m[t+e];i<n&&(n=i,r=e)}f[e]=r}return l.forEach(e=>n.disposeIntermediateTensorInfo(e)),n.makeTensorInfo(u,`int32`,f)}var WV={kernelName:Ye,backendName:`cpu`,kernelFunc:UV};Y();var GV=pz(Xe,e=>Math.asin(e)),KV={kernelName:Xe,backendName:`cpu`,kernelFunc:GV};Y();var qV=pz(Ze,e=>Math.asinh(e)),JV={kernelName:Ze,backendName:`cpu`,kernelFunc:qV};Y();var YV=pz(Qe,e=>Math.atan(e)),XV={kernelName:Qe,backendName:`cpu`,kernelFunc:YV};Y();var ZV=JR((e,t)=>Math.atan2(e,t)),QV=az(et,ZV),$V={kernelName:et,backendName:`cpu`,kernelFunc:QV};Y();var eH=pz($e,e=>Math.atanh(e)),tH={kernelName:$e,backendName:`cpu`,kernelFunc:eH};Y();function nH(e,t,n,r,i,a){let o=i.strideHeight,s=i.strideWidth,c=i.dilationHeight,l=i.dilationWidth,u=i.effectiveFilterHeight,d=i.effectiveFilterWidth,f=i.padInfo.top,p=i.padInfo.left,m=a===`max`?-1/0:1/0,h=ss(i.outShape,n),g=h.values,_=i.outShape[1]*i.outShape[2]*i.outShape[3],v=i.outShape[2]*i.outShape[3],y=i.outShape[3];for(let t=0;t<i.batchSize;++t){let n=t*_,h=t*r[0];for(let t=0;t<i.inChannels;++t)for(let _=0;_<i.outHeight;++_){let b=_*o-f,x=Math.max(0,b),S=Math.min(i.inHeight,u+b),C=n+_*v;for(let n=0;n<i.outWidth;++n){let o=n*s-p,u=Math.max(0,o),f=Math.min(i.inWidth,d+o),_=m,v=0,b=0;for(let n=x;n<S;n+=c){let i=h+n*r[1];for(let n=u;n<f;n+=l){let o=e[i+n*r[2]+t];a===`max`&&o>_?_=o:a===`avg`&&(v+=o,b++)}if(isNaN(_))break}let w=C+n*y+t;g[w]=a===`avg`?v/b:_}}}return h}function rH(e,t,n,r,i=!1,a=!1){let o=ss(r.outShape,`int32`),s=r.strideHeight,c=r.strideWidth,l=r.dilationHeight,u=r.dilationWidth,d=r.effectiveFilterHeight,f=r.effectiveFilterWidth,p=r.padInfo.top,m=r.padInfo.left,h=ss(t,n,e);for(let e=0;e<r.batchSize;++e)for(let t=0;t<r.inChannels;++t)for(let n=0;n<r.outHeight;++n){let g=n*s-p,_=g;for(;_<0;)_+=l;let v=Math.min(r.inHeight,d+g);for(let s=0;s<r.outWidth;++s){let d=s*c-m,p=d;for(;p<0;)p+=u;let y=Math.min(r.inWidth,f+d),b=-1/0,x=-1;for(let n=_;n<v;n+=l){let o=n-g;for(let s=p;s<y;s+=u){let c=s-d,l=h.get(e,n,s,t);l>b&&(b=l,x=i?a?((e*r.inHeight+n)*r.inWidth+s)*r.inChannels+t:(n*r.inWidth+s)*r.inChannels+t:o*f+c)}}o.set(x,e,n,s,t)}}return o}function iH(e,t,n,r,i,a){let o=i.strideDepth,s=i.strideHeight,c=i.strideWidth,l=i.dilationDepth,u=i.dilationHeight,d=i.dilationWidth,f=i.effectiveFilterDepth,p=i.effectiveFilterHeight,m=i.effectiveFilterWidth,h=i.padInfo.front,g=i.padInfo.top,_=i.padInfo.left,v=a===`max`?-1/0:1/0,y=ss(i.outShape,n),b=y.values,x=i.outShape[1]*i.outShape[2]*i.outShape[3]*i.outShape[4],S=i.outShape[2]*i.outShape[3]*i.outShape[4],C=i.outShape[3]*i.outShape[4],w=i.outShape[4];for(let t=0;t<i.batchSize;++t){let n=t*x,y=t*r[0];for(let t=0;t<i.inChannels;++t)for(let x=0;x<i.outDepth;++x){let T=x*o-h,E=T;for(;E<0;)E+=l;let D=Math.min(i.inDepth,f+T),ee=n+x*S;for(let n=0;n<i.outHeight;++n){let o=n*s-g,f=o;for(;f<0;)f+=u;let h=Math.min(i.inHeight,p+o),x=ee+n*C;for(let n=0;n<i.outWidth;++n){let o=n*c-_,s=o;for(;s<0;)s+=d;let p=Math.min(i.inWidth,m+o),g=x+n*w,S=v,C=0,T=0;for(let n=E;n<D;n+=l){let i=y+n*r[1];for(let n=f;n<h;n+=u){let o=i+n*r[2];for(let n=s;n<p;n+=d){let i=e[o+n*r[3]+t];if(a===`max`&&i>S?S=i:a===`avg`&&(C+=i,T++),isNaN(S))break}if(isNaN(S))break}if(isNaN(S))break}let ee=g+t;b[ee]=a===`avg`?C/T:S}}}}return y}function aH(e,t){let n=ss(t.outShape,`int32`),r=t.strideDepth,i=t.strideHeight,a=t.strideWidth,o=t.dilationDepth,s=t.dilationHeight,c=t.dilationWidth,l=t.effectiveFilterDepth,u=t.effectiveFilterHeight,d=t.effectiveFilterWidth,f=t.padInfo.front,p=t.padInfo.top,m=t.padInfo.left;for(let h=0;h<t.batchSize;++h)for(let g=0;g<t.inChannels;++g)for(let _=0;_<t.outDepth;++_){let v=_*r-f,y=v;for(;y<0;)y+=o;let b=Math.min(t.inDepth,l+v);for(let r=0;r<t.outHeight;++r){let l=r*i-p,f=l;for(;f<0;)f+=s;let x=Math.min(t.inHeight,u+l);for(let i=0;i<t.outWidth;++i){let p=i*a-m,S=p;for(;S<0;)S+=c;let C=Math.min(t.inWidth,d+p),w=-1/0,T=-1;for(let t=y;t<b;t+=o){let n=t-v;for(let r=f;r<x;r+=s){let i=r-l;for(let a=S;a<C;a+=c){let o=a-p,s=e.get(h,t,r,a,g);s>=w&&(w=s,T=n*u*d+i*u+o)}}}n.set(T,h,_,r,i,g)}}}return n}Y();function oH(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t;Z(i,`avgPool`);let{filterSize:a,strides:o,pad:s,dimRoundingMode:c}=r;y(pd(o,1),()=>`Error in avgPool: Either strides or dilations must be 1. Got strides ${o} and dilations '1'`);let l=$u(i.shape,a,o,1,s,c),u;if(l.filterWidth===1&&l.filterHeight===1&&T(l.inShape,l.outShape))u=QR({inputs:{x:i},backend:n});else{let e=n.data.get(i.dataId).values,t=xe(i.shape),r=nH(e,i.shape,i.dtype,t,l,`avg`);u=n.makeTensorInfo(l.outShape,i.dtype,r.values)}return u}var sH={kernelName:tt,backendName:`cpu`,kernelFunc:oH};Y();function cH(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{filterSize:a,strides:o,pad:s,dimRoundingMode:c,dataFormat:l}=r;Z(i,`avgPool3d`);let u=ed(i.shape,a,o,1,s,c,l),d=n.data.get(i.dataId).values,f=iH(d,i.shape,i.dtype,xe(i.shape),u,`avg`);return n.makeTensorInfo(f.shape,`float32`,f.values)}var lH={kernelName:rt,backendName:`cpu`,kernelFunc:cH};Y();function uH(e){let{inputs:t,backend:n,attrs:r}=e,{dy:i,input:a}=t,{filterSize:o,strides:s,pad:c,dimRoundingMode:l}=r;Z([i,a],`avgPool3DGrad`);let u=ed(a.shape,o,s,1,c,l),d=u.strideDepth,f=u.strideHeight,p=u.strideWidth,m=u.filterDepth,h=u.filterHeight,g=u.filterWidth,_=u.dilationDepth,v=u.dilationHeight,y=u.dilationWidth,b=u.effectiveFilterDepth,x=u.effectiveFilterHeight,S=u.effectiveFilterWidth,C=b-1-u.padInfo.front,w=S-1-u.padInfo.left,T=x-1-u.padInfo.top,E=ss(a.shape,`float32`),D=1/(m*h*g),ee=n.bufferSync(i);for(let e=0;e<u.batchSize;++e)for(let t=0;t<u.inChannels;++t)for(let n=0;n<u.inDepth;++n)for(let r=0;r<u.inHeight;++r)for(let i=0;i<u.inWidth;++i){let a=n-C,o=r-T,s=i-w,c=0;for(let n=0;n<b;n+=_){let r=(a+n)/d;if(!(r<0||r>=u.outDepth||Math.floor(r)!==r))for(let n=0;n<x;n+=v){let i=(o+n)/f;if(!(i<0||i>=u.outHeight||Math.floor(i)!==i))for(let n=0;n<S;n+=y){let a=(s+n)/p;if(a<0||a>=u.outWidth||Math.floor(a)!==a)continue;let o=ee.get(e,r,i,a,t);c+=o}}}E.set(c*D,e,n,r,i,t)}return n.makeTensorInfo(E.shape,E.dtype,E.values)}var dH={kernelName:it,backendName:`cpu`,kernelFunc:uH};Y();function fH(e){let{inputs:t,backend:n,attrs:r}=e,{dy:i,input:a}=t,o=a;Z([i,a],`avgPoolGrad`);let{filterSize:s,strides:c,pad:l}=r,u=$u(o.shape,s,c,1,l),d=u.strideHeight,f=u.strideWidth,p=u.filterHeight,m=u.filterWidth,h=u.dilationHeight,g=u.dilationWidth,_=u.effectiveFilterHeight,v=u.effectiveFilterWidth,y=v-1-u.padInfo.left,b=_-1-u.padInfo.top,x=ss(o.shape,`float32`),S=1/(p*m),C=n.data.get(i.dataId).values,w=ss(i.shape,`float32`,C);for(let e=0;e<u.batchSize;++e)for(let t=0;t<u.inChannels;++t)for(let n=0;n<u.inHeight;++n)for(let r=0;r<u.inWidth;++r){let i=n-b,a=r-y,o=0;for(let n=0;n<_;n+=h){let r=(i+n)/d;if(!(r<0||r>=u.outHeight||Math.floor(r)!==r))for(let n=0;n<v;n+=g){let i=(a+n)/f;if(i<0||i>=u.outWidth||Math.floor(i)!==i)continue;let s=w.get(e,r,i,t);o+=s}}x.set(o*S,e,n,r,t)}return n.makeTensorInfo(x.shape,x.dtype,x.values)}var pH={kernelName:nt,backendName:`cpu`,kernelFunc:fH};Y();function mH(e){let{inputs:t,backend:n,attrs:r}=e,{x:i,scale:a,offset:o,mean:s,variance:c}=t;y(s.shape.length===c.shape.length,()=>`Batch normalization gradient requires mean and variance to have equal ranks.`),y(o==null||s.shape.length===o.shape.length,()=>`Batch normalization gradient requires mean and offset to have equal ranks.`),y(a==null||s.shape.length===a.shape.length,()=>`Batch normalization gradient requires mean and scale to have equal ranks.`),Z([i,s,c,a,o],`batchNorm`);let{varianceEpsilon:l}=r;l??=.001;let u=n.data.get(i.dataId).values,d=n.data.get(s.dataId).values,f=n.data.get(c.dataId).values,p=a?n.data.get(a.dataId).values:new Float32Array([1]),m=o?n.data.get(o.dataId).values:new Float32Array([0]),h=new Float32Array(u.length),g=m.length,_=p.length,v=f.length,b=d.length,x=0,S=0,C=0,w=0;for(let e=0;e<u.length;++e)h[e]=m[x++]+(u[e]-d[S++])*p[C++]/Math.sqrt(f[w++]+l),x>=g&&(x=0),S>=b&&(S=0),C>=_&&(C=0),w>=v&&(w=0);return n.makeTensorInfo(i.shape,i.dtype,h)}var hH={kernelName:Gt,backendName:`cpu`,kernelFunc:mH};Y();function gH(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{blockShape:a,crops:o}=r;Z([i],`batchToSpaceND`);let s=a.reduce((e,t)=>e*t),c=lT(i.shape,a,s),l=uT(c.length,a.length),u=dT(i.shape,a,s),d=fT(o,a.length),f=pT(u,o,a.length),p=TV({inputs:{x:i},backend:n,attrs:{shape:c}}),m=fB({inputs:{x:p},backend:n,attrs:{perm:l}}),h=TV({inputs:{x:m},backend:n,attrs:{shape:u}}),g=VB({inputs:{x:h},backend:n,attrs:{begin:d,size:f}});return n.disposeIntermediateTensorInfo(p),n.disposeIntermediateTensorInfo(m),n.disposeIntermediateTensorInfo(h),g}var _H={kernelName:ot,backendName:`cpu`,kernelFunc:gH};Y();function vH(e){let{inputs:t,backend:n,attrs:r}=e,{x:i,weights:a}=t,{size:o}=r,s=n.data.get(i.dataId).values,c=n.data.get(a.dataId).values,l=uz(s,c,a.dtype,a.shape,o);return n.makeTensorInfo([o],a.dtype,l)}var yH={kernelName:st,backendName:`cpu`,kernelFunc:vH};Y();function bH(e){let{inputs:t,backend:n}=e,{s0:r,s1:i}=t,a=n.data.get(r.dataId).values,o=n.data.get(i.dataId).values,s=Gc(Array.from(a),Array.from(o));return n.makeTensorInfo([s.length],`int32`,Int32Array.from(s))}var xH={kernelName:lt,backendName:`cpu`,kernelFunc:bH};Y();var SH=pz(ft,(e,t)=>{let n=t;return e>n.clipValueMax?n.clipValueMax:e<n.clipValueMin?n.clipValueMin:e}),CH={kernelName:ft,backendName:`cpu`,kernelFunc:SH};Y();var wH={kernelName:mt,backendName:`cpu`,kernelFunc:e=>{let{x:t}=e.inputs,n=e.backend,r=new Float32Array(C(t.shape)),i=n.data.get(t.dataId),a=i.complexTensorInfos.real,o=i.complexTensorInfos.imag,s=n.data.get(a.dataId).values,c=n.data.get(o.dataId).values;for(let e=0;e<s.length;e++){let t=s[e],n=c[e];r[e]=Math.hypot(t,n)}return n.makeOutput(r,t.shape,`float32`)}};Y();function TH(e){let{inputs:t,backend:n}=e,{input:r}=t,i=n.data.get(r.dataId).complexTensorInfos.imag,a=n.data.get(i.dataId).values;return n.makeTensorInfo(i.shape,i.dtype,a)}var EH={kernelName:Qt,backendName:`cpu`,kernelFunc:TH};Y();function DH(e){let{inputs:t,backend:n,attrs:r}=e,{axis:i}=r,a=ae(i,t[0].shape)[0];Yw(t.map(e=>e.shape),a);let o=Xw(t.map(e=>e.shape),a);if(C(o)===0)return n.makeTensorInfo(o,t[0].dtype,[]);let s=t.filter(e=>C(e.shape)>0);if(s.length===1)return QR({inputs:{x:s[0]},backend:n});if(s[0].dtype===`complex64`){let e=s.map(e=>ez({inputs:{input:e},backend:n})),t=s.map(e=>TH({inputs:{input:e},backend:n})),r=DH({inputs:e,backend:n,attrs:{axis:a}}),i=DH({inputs:t,backend:n,attrs:{axis:a}}),o=YR({inputs:{real:r,imag:i},backend:n});return e.forEach(e=>n.disposeIntermediateTensorInfo(e)),t.forEach(e=>n.disposeIntermediateTensorInfo(e)),n.disposeIntermediateTensorInfo(r),n.disposeIntermediateTensorInfo(i),o}let c=s.map(e=>{let t=[-1,C(e.shape.slice(a))];return TV({inputs:{x:e},backend:n,attrs:{shape:t}})}),l=c.map(e=>({vals:n.data.get(e.dataId).values,shape:e.shape}));o=Xw(c.map(e=>e.shape),1);let u=c[0].shape[0]===1,d=vz(l,o,t[0].dtype,u),f=Xw(s.map(e=>e.shape),a),p=n.makeTensorInfo(f,t[0].dtype,d);return c.forEach(e=>n.disposeIntermediateTensorInfo(e)),p}var OH={kernelName:ht,backendName:`cpu`,kernelFunc:DH};Y();function kH(e){let{inputs:t,backend:n,attrs:r}=e,{x:i,filter:a}=t,{strides:o,pad:s,dataFormat:c,dilations:l,dimRoundingMode:u}=r;Z([i,a],`conv2d`);let d=md(c),f=td(i.shape,a.shape,o,l,s,u,!1,d),p=f.filterHeight,m=f.filterWidth,h=f.dilationHeight,g=f.dilationWidth,_=f.padInfo.left,v=f.padInfo.top,y=f.dataFormat===`channelsLast`,b=new qi(f.outShape,i.dtype),x=xe(i.shape),S=xe(a.shape),C=x[0],w=y?x[1]:x[2],T=y?x[2]:1,E=y?1:x[1],D=b.strides[0],ee=y?b.strides[1]:b.strides[2],te=y?b.strides[2]:1,ne=y?1:b.strides[1],re=n.data.get(i.dataId).values,ie=n.data.get(a.dataId).values,ae=b.values;for(let e=0;e<f.batchSize;++e){let t=e*C,n=e*D;for(let e=0;e<f.outHeight;++e){let r=n+e*ee,i=e*f.strideHeight-v;for(let e=0;e<p;++e){let n=i+e*h;if(n<0||n>=f.inHeight)continue;let a=e*S[0],o=t+n*w;for(let e=0;e<f.outWidth;++e){let t=r+e*te,n=e*f.strideWidth-_;for(let e=0;e<m;++e){let r=n+e*g;if(r<0||r>=f.inWidth)continue;let i=a+e*S[1],s=o+r*T,c=i;for(let e=0;e<f.inChannels;++e){let n=re[s+e*E];for(let e=0;e<f.outChannels;++e)ae[t+e*ne]+=n*ie[c+e];c+=f.outChannels}}}}}}return n.makeTensorInfo(b.shape,b.dtype,ae)}var AH={kernelName:gt,backendName:`cpu`,kernelFunc:kH};Y();function jH(e){let{inputs:t,backend:n,attrs:r}=e,{x:i,dy:a}=t,{strides:o,pad:s,dataFormat:c,dimRoundingMode:l,filterShape:u}=r;Z([i,a],`conv2dBackpropFilter`);let d=md(c),f=td(i.shape,u,o,1,s,l,!1,d),{strideHeight:p,strideWidth:m,filterHeight:h,filterWidth:g}=f,_=f.dataFormat===`channelsLast`,v=new qi(f.filterShape,`float32`),y=f.padInfo.left,b=f.padInfo.top,x=n.data.get(i.dataId).values,S=n.data.get(a.dataId).values,C=new qi(i.shape,i.dtype,x),w=new qi(a.shape,a.dtype,S);for(let e=0;e<h;++e){let t=Math.max(0,Math.ceil((b-e)/p)),n=Math.min(f.outHeight,(f.inHeight+b-e)/p);for(let r=0;r<g;++r){let i=Math.max(0,Math.ceil((y-r)/m)),a=Math.min(f.outWidth,(f.inWidth+y-r)/m);for(let o=0;o<f.inChannels;++o)for(let s=0;s<f.outChannels;++s){let c=0;for(let l=0;l<f.batchSize;++l)for(let u=t;u<n;++u){let t=e+u*p-b;for(let e=i;e<a;++e){let n=r+e*m-y;c+=_?C.get(l,t,n,o)*w.get(l,u,e,s):C.get(l,o,t,n)*w.get(l,s,u,e)}}v.set(c,e,r,o,s)}}}return n.makeTensorInfo(v.shape,v.dtype,v.values)}var MH={kernelName:_t,backendName:`cpu`,kernelFunc:jH};Y();function NH(e){let{inputs:t,backend:n,attrs:r}=e,{dy:i,filter:a}=t,{inputShape:o,strides:s,pad:c,dataFormat:l,dimRoundingMode:u}=r;Z([i,a],`conv2dBackpropInput`);let d=xe(a.shape),f=xe(i.shape),p=md(l),m=td(o,a.shape,s,1,c,u,!1,p),h=new qi(m.inShape,`float32`),g=h.values,_=n.data.get(i.dataId).values,v=n.data.get(a.dataId).values,[y,b,x]=d,{batchSize:S,filterHeight:C,filterWidth:w,inChannels:T,inHeight:E,inWidth:D,outChannels:ee,outHeight:te,outWidth:ne,strideHeight:re,strideWidth:ie}=m;p=m.dataFormat;let ae=C-1-m.padInfo.top,oe=w-1-m.padInfo.left,se=p===`channelsLast`,ce=h.strides[0],le=se?h.strides[1]:h.strides[2],ue=se?h.strides[2]:1,de=se?1:h.strides[1],fe=f[0],pe=se?f[1]:f[2],me=se?f[2]:1,he=se?1:f[1];for(let e=0;e<S;++e)for(let t=0;t<T;++t)for(let n=0;n<E;++n){let r=n-ae,i=Math.max(0,Math.ceil(r/re)),a=Math.min(te,(C+r)/re);for(let o=0;o<D;++o){let s=o-oe,c=Math.max(0,Math.ceil(s/ie)),l=Math.min(ne,(w+s)/ie),u=0;for(let n=i;n<a;++n){let i=n*re-r;for(let r=c;r<l;++r){let a=r*ie-s,o=fe*e+pe*n+me*r,c=y*(C-1-i)+b*(w-1-a)+x*t;for(let e=0;e<ee;++e){let t=_[o+he*e],n=v[c+e];u+=t*n}}}let d=ce*e+le*n+ue*o+de*t;g[d]=u}}return n.makeTensorInfo(h.shape,h.dtype,h.values)}var PH={kernelName:vt,backendName:`cpu`,kernelFunc:NH};Y();function FH(e){let{inputs:t,backend:n,attrs:r}=e,{x:i,filter:a}=t,{strides:o,pad:s,dilations:c}=r;Z([i,a],`conv3d`);let l=nd(i.shape,a.shape,o,c,s),{filterDepth:u,filterHeight:d,filterWidth:f,dilationDepth:p,dilationHeight:m,dilationWidth:h,padInfo:g}=l,_=g.front,v=g.left,y=g.top,b=new qi(l.outShape,i.dtype),x=n.data.get(i.dataId).values,S=n.data.get(a.dataId).values,C=b.values,w=xe(i.shape),T=xe(a.shape);for(let e=0;e<l.batchSize;++e){let t=e*w[0],n=e*b.strides[0];for(let e=0;e<l.outDepth;++e){let r=n+e*b.strides[1],i=e*l.strideDepth-_;for(let e=0;e<u;++e){let n=i+e*p;if(n<0||n>=l.inDepth)continue;let a=e*T[0],o=t+n*w[1];for(let e=0;e<l.outHeight;++e){let t=r+e*b.strides[2],n=e*l.strideHeight-y;for(let e=0;e<d;++e){let r=n+e*m;if(r<0||r>=l.inHeight)continue;let i=a+e*T[1],s=o+r*w[2];for(let e=0;e<l.outWidth;++e){let n=t+e*l.outChannels,r=e*l.strideWidth-v;for(let e=0;e<f;++e){let t=r+e*h;if(t<0||t>=l.inWidth)continue;let a=i+e*T[2],o=s+t*l.inChannels,c=a;for(let e=0;e<l.inChannels;++e){let t=x[o+e];for(let e=0;e<l.outChannels;++e)C[n+e]+=t*S[c+e];c+=l.outChannels}}}}}}}}return n.makeTensorInfo(b.shape,b.dtype,b.values)}var IH={kernelName:yt,backendName:`cpu`,kernelFunc:FH};Y();function LH(e){let{inputs:t,backend:n,attrs:r}=e,{x:i,dy:a}=t,{strides:o,pad:s,filterShape:c}=r;Z([i,a],`conv3dBackpropFilterV2`);let l=xe(i.shape),u=xe(a.shape),d=nd(i.shape,c,o,1,s),f=d.strideDepth,p=d.strideHeight,m=d.strideWidth,h=d.filterDepth,g=d.filterHeight,_=d.filterWidth,v=new qi(d.filterShape,`float32`),y=v.values,[b,x,S,C]=v.strides,w=n.data.get(a.dataId).values,[T,E,D,ee]=u,te=n.data.get(i.dataId).values,[ne,re,ie,ae]=l,oe=d.padInfo.front,se=d.padInfo.left,ce=d.padInfo.top;for(let e=0;e<h;++e){let t=Math.max(0,Math.ceil((oe-e)/f)),n=Math.min(d.outDepth,(d.inDepth+oe-e)/f),r=e*b;for(let i=0;i<g;++i){let a=Math.max(0,Math.ceil((ce-i)/p)),o=Math.min(d.outHeight,(d.inHeight+ce-i)/p),s=i*x+r;for(let r=0;r<_;++r){let c=Math.max(0,Math.ceil((se-r)/m)),l=Math.min(d.outWidth,(d.inWidth+se-r)/m),u=r*S+s;for(let s=0;s<d.inChannels;++s){let h=s*C+u;for(let u=0;u<d.outChannels;++u){let g=0;for(let h=0;h<d.batchSize;++h){let d=h*ne,_=h*T;for(let h=t;h<n;++h){let t=(e+h*f-oe)*re+d,n=h*E+_;for(let e=a;e<o;++e){let a=(i+e*p-ce)*ie+t,o=e*D+n;for(let e=c;e<l;++e){let t=(r+e*m-se)*ae+a,n=e*ee+o;g+=te[t+s]*w[n+u]}}}}y[h+u]=g}}}}}return n.makeTensorInfo(v.shape,v.dtype,v.values)}var RH={kernelName:bt,backendName:`cpu`,kernelFunc:LH};Y();function zH(e){let{inputs:t,backend:n,attrs:r}=e,{dy:i,filter:a}=t,{pad:o,strides:s,inputShape:c}=r;Z([i],`conv3dBackpropInputV2`);let l=xe(i.shape),u=xe(a.shape),d=nd(c,a.shape,s,1,o),f=new qi(d.inShape,`float32`),p=f.values,[m,h,g,_]=f.strides,v=n.data.get(i.dataId).values,[y,b,x,S]=l,C=n.data.get(a.dataId).values,[w,T,E,D]=u,{batchSize:ee,filterDepth:te,filterHeight:ne,filterWidth:re,inChannels:ie,inDepth:ae,inHeight:oe,inWidth:se,outChannels:ce,outDepth:le,outHeight:ue,outWidth:de,strideDepth:fe,strideHeight:pe,strideWidth:me}=d,he=te-1-d.padInfo.front,ge=ne-1-d.padInfo.top,_e=re-1-d.padInfo.left;for(let e=0;e<ee;++e)for(let t=0;t<ie;++t)for(let n=0;n<ae;++n){let r=n-he,i=Math.max(0,Math.ceil(r/fe)),a=Math.min(le,(te+r)/fe);for(let o=0;o<oe;++o){let s=o-ge,c=Math.max(0,Math.ceil(s/pe)),l=Math.min(ue,(ne+s)/pe);for(let u=0;u<se;++u){let d=u-_e,f=Math.max(0,Math.ceil(d/me)),ee=Math.min(de,(re+d)/me),ie=0;for(let n=i;n<a;++n){let i=n*fe-r;for(let r=c;r<l;++r){let a=r*pe-s;for(let o=f;o<ee;++o){let s=o*me-d,c=y*e+b*n+x*r+S*o,l=w*(te-1-i)+T*(ne-1-a)+E*(re-1-s)+D*t;for(let e=0;e<ce;++e){let t=v[c+e],n=C[l+e];ie+=t*n}}}}p[m*e+h*n+g*o+_*u+t]=ie}}}return n.makeTensorInfo(f.shape,f.dtype,f.values)}var BH={kernelName:xt,backendName:`cpu`,kernelFunc:zH};Y();var VH={kernelName:`Cos`,backendName:`cpu`,kernelFunc:pz(`Cos`,e=>Math.cos(e))};Y();var HH=pz(St,e=>Math.cosh(e)),UH={kernelName:St,backendName:`cpu`,kernelFunc:HH};Y();function WH(e){let{inputs:t,backend:n,attrs:r}=e,{image:i,boxes:a,boxInd:o}=t,{cropSize:s,method:c,extrapolationValue:l}=r,[u,d,f,p]=i.shape,m=a.shape[0],[h,g]=s,_=ss([m,h,g,p],`float32`),v=n.data.get(a.dataId).values,y=n.data.get(o.dataId).values,b=n.data.get(i.dataId).values,x=xe(i.shape),S=xe(_.shape);for(let e=0;e<m;e++){let t=e*4,n=v[t],r=v[t+1],i=v[t+2],a=v[t+3],o=y[e];if(o>=u)continue;let s=h>1?(i-n)*(d-1)/(h-1):0,m=g>1?(a-r)*(f-1)/(g-1):0;for(let t=0;t<h;t++){let u=h>1?n*(d-1)+t*s:.5*(n+i)*(d-1);if(u<0||u>d-1)for(let n=0;n<g;n++)for(let r=0;r<p;r++){let i=r+n*S[2]+t*S[1]+e*S[0];_.values[i]=l}else if(c===`bilinear`){let n=Math.floor(u),i=Math.ceil(u),s=u-n;for(let c=0;c<g;c++){let u=g>1?r*(f-1)+c*m:.5*(r+a)*(f-1);if(u<0||u>f-1){for(let n=0;n<p;n++){let r=n+c*S[2]+t*S[1]+e*S[0];_.values[r]=l}continue}let d=Math.floor(u),h=Math.ceil(u),v=u-d;for(let r=0;r<p;r++){let a=r+d*x[2]+n*x[1]+o*x[0],l=b[a];a=r+h*x[2]+n*x[1]+o*x[0];let u=b[a];a=r+d*x[2]+i*x[1]+o*x[0];let f=b[a];a=r+h*x[2]+i*x[1]+o*x[0];let p=b[a],m=l+(u-l)*v,g=f+(p-f)*v;a=r+c*S[2]+t*S[1]+e*S[0],_.values[a]=m+(g-m)*s}}}else for(let n=0;n<g;++n){let i=g>1?r*(f-1)+n*m:.5*(r+a)*(f-1);if(i<0||i>f-1){for(let r=0;r<p;r++){let i=r+n*S[2]+t*S[1]+e*S[0];_.values[i]=l}continue}let s=Math.round(i),c=Math.round(u);for(let r=0;r<p;r++){let i=r+s*x[2]+c*x[1]+o*x[0],a=r+n*S[2]+t*S[1]+e*S[0];_.values[a]=b[i]}}}}return n.makeTensorInfo(_.shape,_.dtype,_.values)}var GH={kernelName:Tt,backendName:`cpu`,kernelFunc:WH};Y();function KH(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{axis:a,exclusive:o,reverse:s}=r;Z(i,`cumprod`);let c=tm([a],i.shape.length),l=i;c!=null&&(l=fB({inputs:{x:i},backend:n,attrs:{perm:c}}));let u=rm(1,i.shape.length)[0];if(u!==l.shape.length-1)throw Error(`backend.cumprod in CPU expects an inner-most axis=${l.shape.length-1} but got axis=${u}`);let d=Qi(l.dtype,`int32`),f=we(C(l.shape),d),p=n.data.get(l.dataId).values,m=l.shape[l.shape.length-1],h=s?(e,t)=>e+m-t-1:(e,t)=>e+t;for(let e=0;e<p.length;e+=m)for(let t=0;t<m;t++){let n=h(e,t);if(t===0)f[n]=o?1:p[n];else{let r=h(e,t-1);f[n]=o?p[r]*f[r]:p[n]*f[r]}}let g=n.makeTensorInfo(l.shape,d,f);if(c!=null){let e=nm(c),t=fB({inputs:{x:g},backend:n,attrs:{perm:e}});return n.disposeIntermediateTensorInfo(g),n.disposeIntermediateTensorInfo(l),t}return g}var qH={kernelName:Ct,backendName:`cpu`,kernelFunc:KH};Y();function JH(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{axis:a,exclusive:o,reverse:s}=r;Z(i,`cumsum`);let c=tm([a],i.shape.length),l=i;c!=null&&(l=fB({inputs:{x:i},backend:n,attrs:{perm:c}}));let u=rm(1,i.shape.length)[0];if(u!==l.shape.length-1)throw Error(`backend.cumsum in CPU expects an inner-most axis=${l.shape.length-1} but got axis=${u}`);let d=Qi(l.dtype,`int32`),f=Te(C(l.shape),d),p=n.data.get(l.dataId).values,m=l.shape[l.shape.length-1],h=s?(e,t)=>e+m-t-1:(e,t)=>e+t;for(let e=0;e<p.length;e+=m)for(let t=0;t<m;t++){let n=h(e,t);if(t===0)f[n]=o?0:p[n];else{let r=h(e,t-1);f[n]=o?p[r]+f[r]:p[n]+f[r]}}let g=n.makeTensorInfo(l.shape,d,f);if(c!=null){let e=nm(c),t=fB({inputs:{x:g},backend:n,attrs:{perm:e}});return n.disposeIntermediateTensorInfo(g),n.disposeIntermediateTensorInfo(l),t}return g}var YH={kernelName:wt,backendName:`cpu`,kernelFunc:JH};Y();function XH(e){let{inputs:t,backend:n,attrs:r}=e,{x:i,weights:a}=t,{size:o,binaryOutput:s}=r;if(i.shape.length===1){let e=n.data.get(i.dataId).values,t=n.data.get(a.dataId).values,r=uz(e,t,a.dtype,a.shape,o);return n.makeTensorInfo([o],a.dtype,r)}if(i.shape.length===2){let e=dz(n.bufferSync(i),n.bufferSync(a),o,s);return n.makeTensorInfo(e.shape,a.dtype,e.values)}throw Error(`Error in denseBincount: input must be at most rank 2, but got rank${i.shape.length}.`)}var ZH={kernelName:Et,backendName:`cpu`,kernelFunc:XH};Y();function QH(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{blockSize:a,dataFormat:o}=r;y(o===`NHWC`,()=>`Only NHWC dataFormat supported on CPU for depthToSpace. Got ${o}`);let s=i.shape[0],c=i.shape[1],l=i.shape[2],u=i.shape[3],d=c*a,f=l*a,p=u/(a*a),m=n.data.get(i.dataId).values,h=new Float32Array(s*d*f*p),g=0;for(let e=0;e<s;++e)for(let t=0;t<d;++t){let n=Math.floor(t/a),r=t%a;for(let t=0;t<f;++t){let i=Math.floor(t/a),o=t%a,s=(r*a+o)*p;for(let t=0;t<p;++t){let r=t+s+u*(i+l*(n+c*e));h[g++]=m[r]}}}return n.makeTensorInfo([s,d,f,p],i.dtype,h)}var $H={kernelName:Dt,backendName:`cpu`,kernelFunc:QH};Y();function eU(e){let{inputs:t,backend:n,attrs:r}=e,{x:i,filter:a}=t,{strides:o,pad:s,dilations:c,dimRoundingMode:l}=r;Z([i,a],`depthwiseConv2DNative`);let u=xe(i.shape),d=xe(a.shape),f=c;f??=[1,1],y(pd(o,f),()=>`Error in depthwiseConv2d: Either strides or dilations must be 1. Got strides ${o} and dilations '${f}'`);let p=td(i.shape,a.shape,o,f,s,l,!0),{filterHeight:m,filterWidth:h,dilationHeight:g,dilationWidth:_,padInfo:v}=p,b=v.left,x=v.top,S=p.outChannels/p.inChannels,C=new qi(p.outShape,i.dtype),w=n.data.get(i.dataId).values,T=n.data.get(a.dataId).values,E=C.values;for(let e=0;e<p.batchSize;++e){let t=e*u[0],n=e*C.strides[0];for(let e=0;e<p.outHeight;++e){let r=n+e*C.strides[1],i=e*p.strideHeight-x;for(let e=0;e<m;++e){let n=i+e*g;if(n<0||n>=p.inHeight)continue;let a=e*d[0],o=t+n*u[1];for(let e=0;e<p.outWidth;++e){let t=r+e*C.strides[2],n=e*p.strideWidth-b;for(let e=0;e<h;++e){let r=n+e*_;if(r<0||r>=p.inWidth)continue;let i=a+e*d[1],s=o+r*p.inChannels,c=t,l=i;for(let e=0;e<p.inChannels;++e){let t=w[s+e];for(let e=0;e<S;++e)E[c+e]+=t*T[l+e];c+=S,l+=S}}}}}}return n.makeTensorInfo(C.shape,C.dtype,C.values)}var tU={kernelName:Ot,backendName:`cpu`,kernelFunc:eU};Y();function nU(e){let{inputs:t,backend:n,attrs:r}=e,{x:i,dy:a}=t,{strides:o,dilations:s,pad:c,dimRoundingMode:l,filterShape:u}=r;Z([i,a],`depthwiseConv2dNativeBackpropFilter`);let d=td(i.shape,u,o,s,c,l,!0),{strideHeight:f,strideWidth:p,filterHeight:m,filterWidth:h}=d,g=new qi(d.filterShape,`float32`),_=d.padInfo.left,v=d.padInfo.top,y=d.outChannels/d.inChannels,b=n.data.get(i.dataId).values,x=new qi(i.shape,i.dtype,b),S=n.data.get(a.dataId).values,C=new qi(a.shape,a.dtype,S);for(let e=0;e<m;++e){let t=Math.max(0,Math.ceil((v-e)/f)),n=Math.min(d.outHeight,(d.inHeight+v-e)/f);for(let r=0;r<h;++r){let i=Math.max(0,Math.ceil((_-r)/p)),a=Math.min(d.outWidth,(d.inWidth+_-r)/p);for(let o=0;o<d.outChannels;++o){let s=Math.trunc(o/y),c=o%y,l=0;for(let c=0;c<d.batchSize;++c)for(let u=t;u<n;++u){let t=e+u*f-v;for(let e=i;e<a;++e){let n=r+e*p-_;l+=x.get(c,t,n,s)*C.get(c,u,e,o)}}g.set(l,e,r,s,c)}}}return n.makeTensorInfo(g.shape,g.dtype,g.values)}var rU={kernelName:kt,backendName:`cpu`,kernelFunc:nU};Y();function iU(e){let{inputs:t,backend:n,attrs:r}=e,{dy:i,filter:a}=t,{strides:o,dilations:s,pad:c,dimRoundingMode:l,inputShape:u}=r;Z([i,a],`depthwiseConv2DNativeBackpropInput`);let d=xe(i.shape),f=xe(a.shape),p=td(u,a.shape,o,s,c,l,!0),m=new qi(p.inShape,`float32`),h=m.values,[g,_,v]=m.strides,y=n.data.get(i.dataId).values,[b,x,S]=d,C=n.data.get(a.dataId).values,[w,T,E]=f,{batchSize:D,filterHeight:ee,filterWidth:te,inChannels:ne,inHeight:re,inWidth:ie,outChannels:ae,outHeight:oe,outWidth:se,strideHeight:ce,strideWidth:le}=p,ue=ee-1-p.padInfo.top,de=te-1-p.padInfo.left,fe=ae/ne;for(let e=0;e<D;++e)for(let t=0;t<ne;++t)for(let n=0;n<re;++n){let r=n-ue,i=Math.max(0,Math.ceil(r/ce)),a=Math.min(oe,(ee+r)/ce);for(let o=0;o<ie;++o){let s=o-de,c=Math.max(0,Math.ceil(s/le)),l=Math.min(se,(te+s)/le),u=0;for(let n=i;n<a;++n){let i=n*ce-r;for(let r=c;r<l;++r){let a=r*le-s,o=b*e+x*n+S*r,c=w*(ee-1-i)+T*(te-1-a)+E*t;for(let e=0;e<fe;++e){let n=y[o+(t*fe+e)],r=C[c+e];u+=n*r}}}h[g*e+_*n+v*o+t]=u}}return n.makeTensorInfo(m.shape,m.dtype,m.values)}var aU={kernelName:At,backendName:`cpu`,kernelFunc:iU};Y();function oU(e){let{inputs:t,backend:n}=e,{x:r}=t,i=C(r.shape),a=n.data.get(r.dataId).values,o=ss([i,i],r.dtype),s=o.values;for(let e=0;e<a.length;e++)s[e*i+e]=a[e];let c=[...r.shape,...r.shape];return n.makeTensorInfo(c,o.dtype,o.values)}var sU={kernelName:jt,backendName:`cpu`,kernelFunc:oU};Y();var cU={kernelName:Mt,backendName:`cpu`,kernelFunc:({inputs:e,backend:t,attrs:n})=>{let{x:r,filter:i}=e,{strides:a,pad:o,dilations:s}=n,c=t,l=c.data.get(r.dataId).values,u=r.shape.length,d=c.data.get(i.dataId).values,f=i.shape.length,{batchSize:p,inHeight:m,inWidth:h,inChannels:g,outHeight:_,outWidth:v,padInfo:y,strideHeight:b,strideWidth:x,filterHeight:S,filterWidth:w,dilationHeight:T,dilationWidth:E,outShape:D}=Qu(r.shape,i.shape,a,o,`NHWC`,s),ee=C(D),te=D.length,ne=ce(r.dtype,ee);for(let e=0;e<p;++e)for(let t=0;t<_;++t){let n=t*b-y.top;for(let a=0;a<v;++a){let o=a*x-y.left;for(let s=0;s<g;++s){let c=-(2**53-1);for(let t=0;t<S;++t){let a=n+t*T;if(a>=0&&a<m)for(let n=0;n<w;++n){let p=o+n*E;if(p>=0&&p<h){let o=Oe([e,a,p,s],u,xe(r.shape)),m=Oe([t,n,s],f,xe(i.shape)),h=l[o]+d[m];h>c&&(c=h)}}}let p=Oe([e,t,a,s],te,xe(D));ne[p]=c}}}return{dataId:c.write(Ci(ne,r.dtype),D,r.dtype),shape:D,dtype:r.dtype}}};Y();var lU={kernelName:Pt,backendName:`cpu`,kernelFunc:({inputs:e,backend:t,attrs:n})=>{let{x:r,filter:i,dy:a}=e,{strides:o,pad:s,dilations:c}=n,l=t,u=Ce(r.shape,l.data.get(r.dataId).values),d=Ce(i.shape,l.data.get(i.dataId).values),{batchSize:f,inHeight:p,inWidth:m,inChannels:h,outHeight:g,outWidth:_,padInfo:v,strideHeight:b,strideWidth:x,filterHeight:S,filterWidth:C,dilationHeight:w,dilationWidth:T,outShape:E}=Qu(r.shape,i.shape,o,s,`NHWC`,c);y(a.rank===E.length,()=>`Error in ${Pt}, dy must have the same rank as output ${E.length}, but got ${a.rank}`);let D=Ce(E,l.data.get(a.dataId).values),ee=Ee(i.shape,i.dtype);for(let e=0;e<f;++e)for(let t=0;t<g;++t){let n=t*b-v.top;for(let r=0;r<_;++r){let i=r*x-v.left;for(let a=0;a<h;++a){let o=-(2**53-1),s=0,c=0;for(let t=0;t<S;++t){let r=n+t*w;if(r>=0&&r<p)for(let n=0;n<C;++n){let l=i+n*T;if(l>=0&&l<m){let i=u[e][r][l][a]+d[t][n][a];i>o&&(o=i,s=t,c=n)}}}ee[s][c][a]+=D[e][t][r][a]}}}return{dataId:l.write(Ci(ee,r.dtype),i.shape,i.dtype),shape:i.shape,dtype:i.dtype}}};Y();var uU={kernelName:Nt,backendName:`cpu`,kernelFunc:({inputs:e,backend:t,attrs:n})=>{let{x:r,filter:i,dy:a}=e,{strides:o,pad:s,dilations:c}=n,l=t,u=Ce(r.shape,l.data.get(r.dataId).values),d=Ce(i.shape,l.data.get(i.dataId).values),{batchSize:f,inHeight:p,inWidth:m,inChannels:h,outHeight:g,outWidth:_,padInfo:v,strideHeight:b,strideWidth:x,filterHeight:S,filterWidth:C,dilationHeight:w,dilationWidth:T,outShape:E}=Qu(r.shape,i.shape,o,s,`NHWC`,c);y(a.rank===E.length,()=>`Error in ${Nt}, dy must have the same rank as output ${E.length}, but got ${a.rank}`);let D=Ce(E,l.data.get(a.dataId).values),ee=Ee(r.shape,r.dtype);for(let e=0;e<f;++e)for(let t=0;t<g;++t){let n=t*b-v.top;for(let r=0;r<_;++r){let i=r*x-v.left;for(let a=0;a<h;++a){let o=-(2**53-1),s=n<0?0:n,c=i<0?0:i;for(let t=0;t<S;++t){let r=n+t*w;if(r>=0&&r<p)for(let n=0;n<C;++n){let l=i+n*T;if(l>=0&&l<m){let i=u[e][r][l][a]+d[t][n][a];i>o&&(o=i,s=r,c=l)}}}ee[e][s][c][a]+=D[e][t][r][a]}}}return{dataId:l.write(Ci(ee,r.dtype),r.shape,r.dtype),shape:r.shape,dtype:r.dtype}}};Y();function dU(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{axis:a,keepDims:o}=r;Z(i,`sum`);let s;s=i.dtype===`bool`?rz({inputs:{x:i},backend:n,attrs:{dtype:`int32`}}):QR({inputs:{x:i},backend:n});let c=s.shape.length,l=ae(a,s.shape),u=tm(l,c),d=l,f=s;u!=null&&(f=fB({inputs:{x:s},backend:n,attrs:{perm:u}}),d=rm(d.length,c)),em(`sum`,d,f.shape.length);let[p,m]=Qp(f.shape,d),h=ZR(n,p,Qi(f.dtype,`int32`)),g=C(m),_=n.data.get(h.dataId).values,v=n.data.get(f.dataId).values;for(let e=0;e<_.length;++e){let t=e*g,n=0;for(let e=0;e<g;++e)n+=v[t+e];_[e]=n}if(o){let e=$p(h.shape,l),t=h;h=TV({inputs:{x:h},backend:n,attrs:{shape:e}}),n.disposeIntermediateTensorInfo(t)}return n.disposeIntermediateTensorInfo(s),u!=null&&n.disposeIntermediateTensorInfo(f),h}var fU={kernelName:`Sum`,backendName:`cpu`,kernelFunc:dU};Y();function pU(e){let{inputs:t,backend:n,attrs:r}=e,{equation:i}=r,a=t,{allDims:o,summedDims:s,idDims:c}=PT(i,a.length);IT(o.length,c,a);let{path:l,steps:u}=LT(s,c),d=u.length,f=null,p=o.length,m=[];for(let e=0;e<d;++e){for(let t of u[e]){let{permutationIndices:e,expandDims:r}=FT(p,c[t]),i;RT(e)?i=a[t]:(i=fB({inputs:{x:a[t]},backend:n,attrs:{perm:e}}),m.push(i));let o=i.shape.slice();for(let e=0;e<r.length;++e)o.splice(r[e],0,1);T(i.shape,o)||(i=TV({inputs:{x:i},backend:n,attrs:{shape:o}}),m.push(i)),f===null?f=i:(f=rB({inputs:{a:i,b:f},backend:n}),m.push(f))}e<d-1&&(l[e]>=0&&(f=dU({inputs:{x:f},backend:n,attrs:{axis:l[e]-(o.length-p),keepDims:!1}}),m.push(f)),p--)}for(let e of m)e!==f&&n.disposeIntermediateTensorInfo(e);return f}var mU={kernelName:It,backendName:`cpu`,kernelFunc:pU};Y();function hU(e){let{inputs:t,backend:n}=e,{dy:r,y:i}=t;Z([r,i],`eluGrad`);let a=new Float32Array(C(i.shape)),o=n.data.get(i.dataId).values,s=n.data.get(r.dataId).values;for(let e=0;e<o.length;++e){let t=o[e];t>=1?a[e]=s[e]:a[e]=s[e]*(t+1)}return n.makeTensorInfo(i.shape,`float32`,a)}var gU={kernelName:Lt,backendName:`cpu`,kernelFunc:hU};Y();var _U=vT,vU=yT,yU=bT,bU=xT,xU=ST,SU=CT,CU={kernelName:`Erf`,backendName:`cpu`,kernelFunc:pz(`Erf`,e=>{let t=Math.sign(e),n=Math.abs(e),r=1/(1+_U*n);return t*(1-((((SU*r+xU)*r+bU)*r+yU)*r+vU)*r*Math.exp(-n*n))})};Y();function wU(e){let{inputs:t,backend:n,attrs:r}=e,{input:i}=t,{dim:a}=r,o=i.shape.length,s=i.shape.slice(),c=a;return a<0&&(y(-(o+1)<=a,()=>`Axis must be in the interval [${-(o+1)}, ${o}]`),c=o+a+1),s.splice(c,0,1),TV({inputs:{x:i},backend:n,attrs:{shape:s}})}var TU={kernelName:zt,backendName:`cpu`,kernelFunc:wU};Y();var EU=JR((e,t)=>e/t),DU=az(Ft,EU),OU={kernelName:Ft,backendName:`cpu`,kernelFunc:DU};Y();function kU(e,t,n){let r=e.shape,i=r[0],a=r[1],o=n.data.get(e.dataId),s=o.complexTensorInfos.real,c=o.complexTensorInfos.imag,l=[i,a],u=C(l),d=se(`float32`,u),f=se(`float32`,u);for(let e=0;e<i;e++){let r=VB({inputs:{x:s},backend:n,attrs:{begin:[e,0],size:[1,a]}}),i=VB({inputs:{x:c},backend:n,attrs:{begin:[e,0],size:[1,a]}}),o=YR({inputs:{real:r,imag:i},backend:n}),{real:l,imag:u}=AU(o,t,n),p=TT(l,u);for(let t=0;t<a;t++){let n=kT(p,t);d[e*a+t]=n.real,f[e*a+t]=n.imag}n.disposeIntermediateTensorInfo(r),n.disposeIntermediateTensorInfo(i),n.disposeIntermediateTensorInfo(o)}let p=n.makeTensorInfo(l,`float32`,d),m=n.makeTensorInfo(l,`float32`,f),h=YR({inputs:{real:p,imag:m},backend:n});return n.disposeIntermediateTensorInfo(p),n.disposeIntermediateTensorInfo(m),h}function AU(e,t,n){let r=C(e.shape),i=n.data.get(e.dataId),a=n.data.get(i.complexTensorInfos.real.dataId).values,o=n.data.get(i.complexTensorInfos.imag.dataId).values;if(jU(r)){let i=MU(a,o,r,t,n),s=[e.shape[0],e.shape[1]];if(t){let e=n.makeTensorInfo(s,`float32`,i.real),t=n.makeTensorInfo(s,`float32`,i.imag),a=n.makeTensorInfo([],`float32`,xi(r,`float32`)),o=QR({inputs:{x:a},backend:n}),c=OU.kernelFunc({inputs:{a:e,b:a},backend:n}),l=OU.kernelFunc({inputs:{a:t,b:o},backend:n}),u=n.data.get(c.dataId).values,d=n.data.get(l.dataId).values;return n.disposeIntermediateTensorInfo(e),n.disposeIntermediateTensorInfo(t),n.disposeIntermediateTensorInfo(a),n.disposeIntermediateTensorInfo(o),n.disposeIntermediateTensorInfo(c),n.disposeIntermediateTensorInfo(l),{real:u,imag:d}}return i}return ET(NU(TT(a,o),r,t))}function jU(e){return!(e&e-1)}function MU(e,t,n,r,i){if(n===1)return{real:e,imag:t};let a=TT(e,t),o=n/2,s=DT(a),c=s.real,l=s.imag,u=[c.length],d=i.makeTensorInfo(u,`float32`,c),f=i.makeTensorInfo(u,`float32`,l),p=YR({inputs:{real:d,imag:f},backend:i}),m=OT(a),h=m.real,g=m.imag,_=[h.length],v=i.makeTensorInfo(_,`float32`,h),y=i.makeTensorInfo(_,`float32`,g),b=YR({inputs:{real:v,imag:y},backend:i}),x=MU(c,l,o,r,i),S=x.real,C=x.imag,w=[S.length],T=i.makeTensorInfo(w,`float32`,S),E=i.makeTensorInfo(w,`float32`,C),D=YR({inputs:{real:T,imag:E},backend:i}),ee=MU(h,g,o,r,i),te=ee.real,ne=ee.imag,re=[te.length],ie=i.makeTensorInfo(re,`float32`,te),ae=i.makeTensorInfo(re,`float32`,ne),oe=YR({inputs:{real:ie,imag:ae},backend:i}),se=jT(n,r),ce=[se.real.length],le=i.makeTensorInfo(ce,`float32`,se.real),ue=i.makeTensorInfo(ce,`float32`,se.imag),de=YR({inputs:{real:le,imag:ue},backend:i}),fe=rB({inputs:{a:de,b:oe},backend:i}),pe=cz({inputs:{a:D,b:fe},backend:i}),me=aV({inputs:{a:D,b:fe},backend:i}),he=ez({inputs:{input:pe},backend:i}),ge=ez({inputs:{input:me},backend:i}),_e=TH({inputs:{input:pe},backend:i}),ve=TH({inputs:{input:me},backend:i}),ye=DH({inputs:[he,ge],backend:i,attrs:{axis:0}}),be=DH({inputs:[_e,ve],backend:i,attrs:{axis:0}}),xe=i.data.get(ye.dataId).values,Se=i.data.get(be.dataId).values;return i.disposeIntermediateTensorInfo(d),i.disposeIntermediateTensorInfo(f),i.disposeIntermediateTensorInfo(p),i.disposeIntermediateTensorInfo(v),i.disposeIntermediateTensorInfo(y),i.disposeIntermediateTensorInfo(b),i.disposeIntermediateTensorInfo(T),i.disposeIntermediateTensorInfo(E),i.disposeIntermediateTensorInfo(D),i.disposeIntermediateTensorInfo(ie),i.disposeIntermediateTensorInfo(ae),i.disposeIntermediateTensorInfo(oe),i.disposeIntermediateTensorInfo(le),i.disposeIntermediateTensorInfo(ue),i.disposeIntermediateTensorInfo(de),i.disposeIntermediateTensorInfo(fe),i.disposeIntermediateTensorInfo(pe),i.disposeIntermediateTensorInfo(me),i.disposeIntermediateTensorInfo(he),i.disposeIntermediateTensorInfo(_e),i.disposeIntermediateTensorInfo(ge),i.disposeIntermediateTensorInfo(ve),i.disposeIntermediateTensorInfo(ye),i.disposeIntermediateTensorInfo(be),{real:xe,imag:Se}}function NU(e,t,n){let r=new Float32Array(t*2);for(let i=0;i<t;i++){let a=0,o=0;for(let r=0;r<t;r++){let s=MT(i*r,t,n),c=kT(e,r);a+=c.real*s.real-c.imag*s.imag,o+=c.real*s.imag+c.imag*s.real}n&&(a/=t,o/=t),AT(r,a,o,i)}return r}Y();function PU(e){let{inputs:t,backend:n}=e,{input:r}=t,i=C(r.shape),a=r.shape[r.shape.length-1],o=i/a,s=TV({inputs:{x:r},backend:n,attrs:{shape:[o,a]}}),c=kU(s,!1,n),l=TV({inputs:{x:c},backend:n,attrs:{shape:r.shape}});return n.disposeIntermediateTensorInfo(s),n.disposeIntermediateTensorInfo(c),l}var FU={kernelName:`FFT`,backendName:`cpu`,kernelFunc:PU};Y();function IU(e){let{backend:t,attrs:n}=e,{shape:r,value:i,dtype:a}=n,o=a||ve(i),s=ce(o,C(r));return RU(s,i,o),t.makeTensorInfo(r,o,s)}var LU={kernelName:Vt,backendName:`cpu`,kernelFunc:IU};function RU(e,t,n){e.fill(t)}Y();var zU={kernelName:Ht,backendName:`cpu`,kernelFunc:({inputs:e,attrs:t,backend:n})=>{let{image:r}=e,i=n,a=se(r.dtype,C(r.shape)),[o,s,c,l]=r.shape,u=i.data.get(r.dataId).values;for(let e=0;e<o;e++){let t=e*c*s*l;for(let e=0;e<s;e++){let n=c*l*e;for(let e=0;e<c;e++){let r=e*l;for(let i=0;i<l;i++){let o=Math.round(c-e-1),s=t+n+r+i,d=u[s];if(o>=0&&o<c){let e=o*l;d=u[t+n+e+i]}a[s]=d}}}}return{dataId:i.write(a,r.shape,r.dtype),shape:r.shape,dtype:r.dtype}}};Y();var BU=JR((e,t)=>Math.floor(e/t)),VU=az(Wt,BU,null,`int32`),HU={kernelName:Wt,backendName:`cpu`,kernelFunc:VU};Y();function UU(e){let{inputs:t,backend:n,attrs:r}=e,{x:i,filter:a,bias:o,preluActivationWeights:s}=t,{strides:c,pad:l,dataFormat:u,dilations:d,dimRoundingMode:f,activation:p,leakyreluAlpha:m}=r,h=kH({inputs:{x:i,filter:a},backend:n,attrs:{strides:c,pad:l,dataFormat:u,dilations:d,dimRoundingMode:f}});if(o){let e=h;if(u===`NCHW`&&o.shape.length===1&&o.shape[0]!==1){let e=TV({inputs:{x:o},backend:n,attrs:{shape:[o.shape[0],1,1]}});h=cz({inputs:{a:h,b:e},backend:n}),n.disposeIntermediateTensorInfo(e)}else h=cz({inputs:{a:h,b:o},backend:n});n.disposeIntermediateTensorInfo(e)}if(p){let e=h;if(u===`NCHW`&&p===`prelu`&&s.shape.length===1&&s.shape[0]!==1){let e=TV({inputs:{x:s},backend:n,attrs:{shape:[s.shape[0],1,1]}});h=wV(n,h,p,e,m),n.disposeIntermediateTensorInfo(e)}else h=wV(n,h,p,s,m);n.disposeIntermediateTensorInfo(e)}return h}var WU={kernelName:Lr,backendName:`cpu`,kernelFunc:UU};Y();function GU(e){let{inputs:t,backend:n,attrs:r}=e,{x:i,filter:a,bias:o,preluActivationWeights:s}=t,{strides:c,pad:l,dataFormat:u,dilations:d,dimRoundingMode:f,activation:p,leakyreluAlpha:m}=r,h=eU({inputs:{x:i,filter:a},backend:n,attrs:{strides:c,pad:l,dataFormat:u,dilations:d,dimRoundingMode:f}});if(o){let e=h;h=cz({inputs:{a:h,b:o},backend:n}),n.disposeIntermediateTensorInfo(e)}if(p){let e=h;h=wV(n,h,p,s,m),n.disposeIntermediateTensorInfo(e)}return h}var KU={kernelName:Rr,backendName:`cpu`,kernelFunc:GU};Y();function qU(e){let{inputs:t,backend:n}=e,{params:r,indices:i}=t,a=C(r.shape),o=i.shape,s=o[o.length-1],[c,l,u,d]=sl(r,i);if(l===0)return n.makeTensorInfo(c,r.dtype,[]);let f=n.data.get(i.dataId).values,p=jz(f,n.bufferSync(r),r.dtype,l,s,u,d,r.shape,a);return n.makeTensorInfo(c,r.dtype,p.values)}var JU={kernelName:qt,backendName:`cpu`,kernelFunc:qU};Y();function YU(e){let{inputs:t,backend:n,attrs:r}=e,{x:i,indices:a}=t,{axis:o,batchDims:s}=r;Z([i,a],`gatherV2`);let c=ae(o,i.shape)[0],l=n.data.get(a.dataId).values,u=i.shape[c];for(let e=0;e<l.length;++e){let t=l[e];y(t<=u-1&&t>=0,()=>`GatherV2: the index value ${t} is not in [0, ${u-1}]`)}let d=s;s??(d=0);let f=C(a.shape),p=dE(i,a,c,d),m=TV({inputs:{x:i},backend:n,attrs:{shape:[p.batchSize,p.outerSize,p.dimSize,p.sliceSize]}}),h=TV({inputs:{x:a},backend:n,attrs:{shape:[p.batchSize,f/p.batchSize]}}),g=[p.batchSize,p.outerSize,f/p.batchSize,p.sliceSize],_=n.bufferSync(h),v=Mz(n.bufferSync(m),_,g);return n.disposeIntermediateTensorInfo(m),n.disposeIntermediateTensorInfo(h),n.makeTensorInfo(p.outputShape,v.dtype,v.values)}var XU={kernelName:Kt,backendName:`cpu`,kernelFunc:YU};Y();function ZU(e){let{inputs:t,backend:n}=e,{input:r}=t,i=C(r.shape),a=r.shape[r.shape.length-1],o=i/a,s=TV({inputs:{x:r},backend:n,attrs:{shape:[o,a]}}),c=kU(s,!0,n),l=TV({inputs:{x:c},backend:n,attrs:{shape:r.shape}});return n.disposeIntermediateTensorInfo(s),n.disposeIntermediateTensorInfo(c),l}var QU={kernelName:Zt,backendName:`cpu`,kernelFunc:ZU};Y();var $U=pz($t,e=>+!!Number.isFinite(e),`bool`),eW={kernelName:$t,backendName:`cpu`,kernelFunc:$U};Y();var tW=pz(en,e=>+(Math.abs(e)===1/0),`bool`),nW={kernelName:en,backendName:`cpu`,kernelFunc:tW};Y();var rW=pz(tn,e=>+!!Number.isNaN(e),`bool`),iW={kernelName:tn,backendName:`cpu`,kernelFunc:rW};Y();function aW(e){let{backend:t,attrs:n}=e,{start:r,stop:i,num:a}=n,o=Gz(r,i,a);return t.makeTensorInfo([o.length],`float32`,o)}var oW={kernelName:on,backendName:`cpu`,kernelFunc:aW};Y();var sW=pz(sn,e=>Math.log1p(e)),cW={kernelName:sn,backendName:`cpu`,kernelFunc:sW};Y();var lW=JR((e,t)=>e&&t),uW=az(cn,lW,null,`bool`),dW={kernelName:cn,backendName:`cpu`,kernelFunc:uW};Y();var fW=pz(ln,e=>+!e,`bool`),pW={kernelName:ln,backendName:`cpu`,kernelFunc:fW};Y();var mW=JR((e,t)=>e||t),hW=az(un,mW,null,`bool`),gW={kernelName:un,backendName:`cpu`,kernelFunc:hW};Y();function _W(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{depthRadius:a,bias:o,alpha:s,beta:c}=r;Z(i,`LRN`);let l=i.shape[3],u=l-1,d=n.data.get(i.dataId).values,f=C(i.shape),p=new Float32Array(f);function m(e){let t=e%l,n=e-t+Math.max(0,t-a),r=e-t+Math.min(t+a,u),i=0;for(;n<=r;n++){let e=d[n];i+=e*e}return i}for(let e=0;e<f;e++){let t=m(e),n=d[e]*(o+s*t)**+-c;p[e]=n}return n.makeTensorInfo(i.shape,i.dtype,p)}var vW={kernelName:`LRN`,backendName:`cpu`,kernelFunc:_W};Y();function yW(e){let{inputs:t,backend:n,attrs:r}=e,{x:i,y:a,dy:o}=t,{depthRadius:s,bias:c,alpha:l,beta:u}=r;Z(o,`LRNGrad`);let d=C(o.shape),f=o.shape[3],p=n.data.get(o.dataId).values,m=n.data.get(i.dataId).values,h=n.data.get(a.dataId).values,g=new Float32Array(d),_=d;for(let e=0;e<_;e++){let t=e%f,n=e-t+Math.max(0,t-s),r=e-t+Math.min(f,t+s+1),i=0;for(let e=n;e<r;e++)i+=m[e]**2;i=l*i+c;for(let t=n;t<r;t++){let n=-2*l*u*m[t]*h[e]/i;e===t&&(n+=i**+-u),n*=p[e],g[t]+=n}}return n.makeTensorInfo(o.shape,i.dtype,g)}var bW={kernelName:mn,backendName:`cpu`,kernelFunc:yW};Y();function xW(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{reductionIndices:a,keepDims:o}=r,s=n,c=i.shape,l=c.length,u=ae(a,c),d=u,f=tm(d,l),p=s.data.get(i.dataId).values;if(f!=null){let e=Array(l);for(let t=0;t<e.length;t++)e[t]=c[f[t]];p=dB(p,c,i.dtype,f,e),d=rm(d.length,l),c=e}Z(i,`max`),em(`max`,d,l);let[m,h]=Qp(c,d),g=C(h),_=Jz(p,g,m,i.dtype),v=s.write(_,m,i.dtype),y=m;return o&&(y=$p(m,u)),{dataId:v,shape:y,dtype:i.dtype}}var SW={kernelName:`Max`,backendName:`cpu`,kernelFunc:xW};Y();function CW(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t;Z(i,`maxPool`);let{filterSize:a,strides:o,pad:s,dimRoundingMode:c}=r;y(pd(o,1),()=>`Error in maxPool: Either strides or dilations must be 1. Got strides ${o} and dilations '1'`);let l=$u(i.shape,a,o,1,s,c),u;if(l.filterWidth===1&&l.filterHeight===1&&T(l.inShape,l.outShape))u=QR({inputs:{x:i},backend:n});else{let e=n.data.get(i.dataId).values,t=xe(i.shape),r=nH(e,i.shape,i.dtype,t,l,`max`);u=n.makeTensorInfo(l.outShape,i.dtype,r.values)}return u}var wW={kernelName:gn,backendName:`cpu`,kernelFunc:CW};Y();function TW(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{filterSize:a,strides:o,pad:s,dimRoundingMode:c,dataFormat:l}=r;Z(i,`maxPool3d`);let u=ed(i.shape,a,o,1,s,c,l),d=n.data.get(i.dataId).values,f=iH(d,i.shape,i.dtype,xe(i.shape),u,`max`);return n.makeTensorInfo(f.shape,`float32`,f.values)}var EW={kernelName:vn,backendName:`cpu`,kernelFunc:TW};Y();function DW(e){let{inputs:t,backend:n,attrs:r}=e,{dy:i,input:a}=t,{filterSize:o,strides:s,pad:c,dimRoundingMode:l}=r;Z([i,a],`maxPool3DGrad`);let u=ed(a.shape,o,s,1,c,l),d=aH(n.bufferSync(a),u),f=u.strideDepth,p=u.strideHeight,m=u.strideWidth,h=u.dilationDepth,g=u.dilationHeight,_=u.dilationWidth,v=u.effectiveFilterDepth,y=u.effectiveFilterHeight,b=u.effectiveFilterWidth,x=v-1-u.padInfo.front,S=b-1-u.padInfo.left,C=y-1-u.padInfo.top,w=ss(a.shape,`float32`),T=n.bufferSync(i);for(let e=0;e<u.batchSize;++e)for(let t=0;t<u.inChannels;++t)for(let n=0;n<u.inDepth;++n)for(let r=0;r<u.inHeight;++r)for(let i=0;i<u.inWidth;++i){let a=n-x,o=r-C,s=i-S,c=0;for(let n=0;n<v;n+=h){let r=(a+n)/f;if(!(r<0||r>=u.outDepth||Math.floor(r)!==r))for(let i=0;i<y;i+=g){let a=(o+i)/p;if(!(a<0||a>=u.outHeight||Math.floor(a)!==a))for(let o=0;o<b;o+=_){let l=(s+o)/m;if(l<0||l>=u.outWidth||Math.floor(l)!==l)continue;let f=+(v*y*b-1-d.get(e,r,a,l,t)===n*y*b+i*b+o);if(f===0)continue;let p=T.get(e,r,a,l,t);c+=p*f}}}w.set(c,e,n,r,i,t)}return n.makeTensorInfo(w.shape,w.dtype,w.values)}var OW={kernelName:yn,backendName:`cpu`,kernelFunc:DW};Y();function kW(e){let{inputs:t,backend:n,attrs:r}=e,{dy:i,input:a,output:o}=t,s=a;Z([a,o],`maxPoolGrad`);let{filterSize:c,strides:l,pad:u,dimRoundingMode:d}=r,f=$u(s.shape,c,l,1,u,d),p=n.data.get(s.dataId).values,m=ss(f.outShape,s.dtype,rH(p,s.shape,s.dtype,f).values),h=f.strideHeight,g=f.strideWidth,_=f.dilationHeight,v=f.dilationWidth,y=f.effectiveFilterHeight,b=f.effectiveFilterWidth,x=b-1-f.padInfo.left,S=y-1-f.padInfo.top,C=ss(s.shape,`float32`),w=n.data.get(i.dataId).values,T=ss(i.shape,`float32`,w);for(let e=0;e<f.batchSize;++e)for(let t=0;t<f.inChannels;++t)for(let n=0;n<f.inHeight;++n)for(let r=0;r<f.inWidth;++r){let i=n-S,a=r-x,o=0;for(let n=0;n<y;n+=_){let r=(i+n)/h;if(!(r<0||r>=f.outHeight||Math.floor(r)!==r))for(let i=0;i<b;i+=v){let s=(a+i)/g;if(s<0||s>=f.outWidth||Math.floor(s)!==s)continue;let c=+(y*b-1-m.get(e,r,s,t)===n*b+i);if(c===0)continue;let l=T.get(e,r,s,t);o+=l*c}}C.set(o,e,n,r,t)}return n.makeTensorInfo(C.shape,C.dtype,C.values)}var AW={kernelName:_n,backendName:`cpu`,kernelFunc:kW};Y();function jW(e,t,n,r,i){let a=nH(e,t,n,xe(t),i,`max`),o=rH(e,t,n,i,!0,r);return[a.values,o.values]}Y();var MW={kernelName:bn,backendName:`cpu`,kernelFunc:({inputs:e,attrs:t,backend:n})=>{let{x:r}=e,{filterSize:i,strides:a,pad:o,includeBatchInIndex:s}=t,c=n;Z(r,`MaxPoolWithArgmax`);let l=c.data.get(r.dataId).values,u=$u(r.shape,i,a,[1,1],o),[d,f]=jW(l,r.shape,r.dtype,s,u),p=c.write(d,u.outShape,r.dtype),m=c.write(f,u.outShape,r.dtype);return[{dataId:p,shape:u.outShape,dtype:r.dtype},{dataId:m,shape:u.outShape,dtype:`int32`}]}};Y();function NW(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{axis:a,keepDims:o}=r,s=ae(a,i.shape),c=Qp(i.shape,s)[1],l=C(c),u=[],d=n.makeTensorInfo([],`float32`,new Float32Array([l]));u.push(d);let f=rz({inputs:{x:i},backend:n,attrs:{dtype:`float32`}});u.push(f);let p=DU({inputs:{a:f,b:d},backend:n});u.push(p);let m=dU({inputs:{x:p},backend:n,attrs:{axis:a,keepDims:o}});return u.forEach(e=>n.disposeIntermediateTensorInfo(e)),m}var PW={kernelName:xn,backendName:`cpu`,kernelFunc:NW};Y();function FW(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{axis:a,keepDims:o}=r;Z(i,`min`);let s=ae(a,i.shape),c=s,l=tm(c,i.shape.length),u=i;l!=null&&(u=fB({inputs:{x:i},backend:n,attrs:{perm:l}}),c=rm(c.length,i.shape.length)),em(`min`,c,u.shape.length);let[d,f]=Qp(u.shape,c),p=C(f),m=Te(C(d),u.dtype),h=n.data.get(u.dataId).values;for(let e=0;e<m.length;++e){let t=e*p,n=h[t];for(let e=0;e<p;++e){let r=h[t+e];(Number.isNaN(r)||r<n)&&(n=r)}m[e]=n}l!=null&&n.disposeIntermediateTensorInfo(u);let g=n.makeTensorInfo(d,u.dtype,m);if(o){let e=$p(d,s),t=TV({inputs:{x:g},backend:n,attrs:{shape:e}});return n.disposeIntermediateTensorInfo(g),t}return g}var IW={kernelName:`Min`,backendName:`cpu`,kernelFunc:FW};Y();function LW(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{paddings:a,mode:o}=r;Z(i,`mirrorPad`);let s=a.map((e,t)=>e[0]+i.shape[t]+e[1]),c=a.map(e=>e[0]),l=a.map((e,t)=>e[0]+i.shape[t]),u=o===`reflect`?0:1,d=n.data.get(i.dataId).values,f=i.shape.length,p=xe(i.shape),m=C(s),h=s.length,g=xe(s),_=se(i.dtype,m);for(let e=0;e<m;e++){let t=ke(e,h,g);for(let e=0;e<h;e++)t[e]<c[e]?t[e]=c[e]*2-t[e]-u:t[e]>=l[e]&&(t[e]=(l[e]-1)*2-t[e]+u);t=t.map((e,t)=>e-c[t]);let n=Oe(t,f,p);_[e]=d[n]}return{dataId:n.write(_,s,i.dtype),shape:s,dtype:i.dtype}}var RW={kernelName:Cn,backendName:`cpu`,kernelFunc:LW};Y();var zW={kernelName:`Mod`,backendName:`cpu`,kernelFunc:az(`Mod`,JR(((e,t)=>{let n=e%t;return e<0&&t<0||e>=0&&t>=0?n:(n+t)%t})))};Y();function BW(e){let{inputs:t,backend:n,attrs:r}=e,{logits:i}=t,{dim:a}=r,o=i.shape.length,s=a;if(s===-1&&(s=o-1),s!==o-1)throw Error(`Softmax along a non-last dimension is not yet supported. Logits was rank ${o} and dim was ${s}`);let c=ae([s],i.shape),l=xW({inputs:{x:i},backend:n,attrs:{reductionIndices:c,keepDims:!1}}),u=$p(l.shape,c),d=TV({inputs:{x:l},backend:n,attrs:{shape:u}}),f=aV({inputs:{a:i,b:d},backend:n}),p=Cz({inputs:{x:f},backend:n}),m=dU({inputs:{x:p},backend:n,attrs:{axis:c,keepDims:!1}}),h=TV({inputs:{x:m},backend:n,attrs:{shape:u}}),g=DU({inputs:{a:p,b:h},backend:n});return n.disposeIntermediateTensorInfo(l),n.disposeIntermediateTensorInfo(d),n.disposeIntermediateTensorInfo(f),n.disposeIntermediateTensorInfo(p),n.disposeIntermediateTensorInfo(m),n.disposeIntermediateTensorInfo(h),g}var VW={kernelName:dr,backendName:`cpu`,kernelFunc:BW};Y();function HW(e){let{inputs:t,backend:n,attrs:r}=e,{logits:i}=t,{numSamples:a,seed:o,normalized:s}=r;Z(i,`multinomial`);let c=s?i:BW({inputs:{logits:i},backend:n,attrs:{dim:-1}}),l=c.shape[0],u=c.shape[1],d=n.data.get(c.dataId).values,f=[l,a],p=Te(C(f),`int32`);for(let e=0;e<l;++e){let t=e*u,n=new Float32Array(u-1);n[0]=d[t];for(let e=1;e<n.length;++e)n[e]=n[e-1]+d[t+e];let r=yR.alea(o.toString()),i=e*a;for(let e=0;e<a;++e){let t=r();p[i+e]=n.length;for(let r=0;r<n.length;r++)if(t<n[r]){p[i+e]=r;break}}}return s||n.disposeIntermediateTensorInfo(c),n.makeTensorInfo(f,`int32`,p)}var UW={kernelName:wn,backendName:`cpu`,kernelFunc:HW};Y();var WW=OS;function GW(e){let{inputs:t,backend:n,attrs:r}=e,{boxes:i,scores:a}=t,{maxOutputSize:o,iouThreshold:s,scoreThreshold:c}=r;Z(i,`NonMaxSuppression`);let l=n.data.get(i.dataId).values,u=n.data.get(a.dataId).values,{selectedIndices:d}=WW(l,u,o,s,c);return n.makeTensorInfo([d.length],`int32`,new Int32Array(d))}var KW={kernelName:Dn,backendName:`cpu`,kernelFunc:GW};Y();var qW=kS;function JW(e){let{inputs:t,backend:n,attrs:r}=e,{boxes:i,scores:a}=t,{maxOutputSize:o,iouThreshold:s,scoreThreshold:c,padToMaxOutputSize:l}=r;Z(i,`NonMaxSuppressionPadded`);let u=n.data.get(i.dataId).values,d=n.data.get(a.dataId).values,{selectedIndices:f,validOutputs:p}=qW(u,d,o,s,c,l);return[n.makeTensorInfo([f.length],`int32`,new Int32Array(f)),n.makeTensorInfo([],`int32`,new Int32Array([p]))]}var YW={kernelName:On,backendName:`cpu`,kernelFunc:JW};Y();var XW=AS;function ZW(e){let{inputs:t,backend:n,attrs:r}=e,{boxes:i,scores:a}=t,{maxOutputSize:o,iouThreshold:s,scoreThreshold:c,softNmsSigma:l}=r;Z(i,`NonMaxSuppressionWithScore`);let u=n.data.get(i.dataId).values,d=n.data.get(a.dataId).values,{selectedIndices:f,selectedScores:p}=XW(u,d,o,s,c,l);return[n.makeTensorInfo([f.length],`int32`,new Int32Array(f)),n.makeTensorInfo([p.length],`float32`,new Float32Array(p))]}var QW={kernelName:kn,backendName:`cpu`,kernelFunc:ZW};Y();function $W(e){let{inputs:t,backend:n,attrs:r}=e,{indices:i}=t,{dtype:a,depth:o,onValue:s,offValue:c}=r;Z(i,`oneHot`);let l=C(i.shape),u=new Float32Array(l*o);u.fill(c);let d=n.data.get(i.dataId).values;for(let e=0;e<l;++e)d[e]>=0&&d[e]<o&&(u[e*o+d[e]]=s);return n.makeTensorInfo([...i.shape,o],a,u)}var eG={kernelName:jn,backendName:`cpu`,kernelFunc:$W};Y();function tG(e){let{inputs:t,backend:n}=e,{x:r}=t;if(r.dtype===`string`)throw Error(`zerosLike is not supported for string tensors`);if(r.dtype===`complex64`){let e=ez({inputs:{input:r},backend:n}),t=tG({inputs:{x:e},backend:n}),i=TH({inputs:{input:r},backend:n}),a=tG({inputs:{x:i},backend:n}),o=YR({inputs:{real:t,imag:a},backend:n});return n.disposeIntermediateTensorInfo(e),n.disposeIntermediateTensorInfo(t),n.disposeIntermediateTensorInfo(i),n.disposeIntermediateTensorInfo(a),o}return IU({backend:n,attrs:{shape:r.shape,value:0,dtype:r.dtype}})}var nG={kernelName:Mr,backendName:`cpu`,kernelFunc:tG};Y();function rG(e){let{inputs:t,backend:n}=e,{x:r}=t;if(r.dtype===`string`)throw Error(`onesLike is not supported for string tensors`);if(r.dtype===`complex64`){let e=ez({inputs:{input:r},backend:n}),t=rG({inputs:{x:e},backend:n}),i=TH({inputs:{input:r},backend:n}),a=tG({inputs:{x:i},backend:n}),o=YR({inputs:{real:t,imag:a},backend:n});return n.disposeIntermediateTensorInfo(e),n.disposeIntermediateTensorInfo(t),n.disposeIntermediateTensorInfo(i),n.disposeIntermediateTensorInfo(a),o}return IU({backend:n,attrs:{shape:r.shape,value:1,dtype:r.dtype}})}var iG={kernelName:An,backendName:`cpu`,kernelFunc:rG};Y();function aG(e){let{inputs:t,backend:n,attrs:r}=e,{axis:i}=r;if(t.length===1)return wU({inputs:{input:t[0]},backend:n,attrs:{dim:i}});let a=t[0].shape,o=t[0].dtype;t.forEach(e=>{b(a,e.shape,`All tensors passed to stack must have matching shapes`),y(o===e.dtype,()=>`All tensors passed to stack must have matching dtypes`)});let s=[],c=DH({inputs:t.map(e=>{let t=wU({inputs:{input:e},backend:n,attrs:{dim:i}});return s.push(t),t}),backend:n,attrs:{axis:i}});return s.forEach(e=>n.disposeIntermediateTensorInfo(e)),c}var oG={kernelName:Mn,backendName:`cpu`,kernelFunc:aG};Y();function sG(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{paddings:a,constantValue:o}=r;Z(i,`pad`);let s=a.map((e,t)=>e[0]+i.shape[t]+e[1]),c=a.map(e=>e[0]),l=n.data.get(i.dataId).values,u=C(i.shape),d=i.shape.length,f=xe(i.shape),p=C(s),m=s.length,h=xe(s),g=se(i.dtype,p);o!==0&&g.fill(o);for(let e=0;e<u;e++){let t=Oe(ke(e,d,f).map((e,t)=>e+c[t]),m,h);g[t]=l[e]}return{dataId:n.write(g,s,i.dtype),shape:s,dtype:i.dtype}}var cG={kernelName:Nn,backendName:`cpu`,kernelFunc:sG};Y();var lG={kernelName:`Pow`,backendName:`cpu`,kernelFunc:az(`Pow`,JR((e,t)=>e**+t))};Y();function uG(e){let{inputs:t,backend:n,attrs:r}=e,{paramsNestedSplits:i,paramsDenseValues:a,indices:o}=t,{outputRaggedRank:s}=r,c=i.map(e=>n.data.get(e.dataId).values),l=i.map(e=>e.shape),u=n.data.get(a.dataId).values,d=n.data.get(o.dataId).values,[f,p,m]=wB(c,l,u,a.shape,a.dtype,d,o.shape,s),h=f.map(e=>n.makeTensorInfo([e.length],`int32`,e)),g=n.makeTensorInfo(m,a.dtype,p);return h.concat([g])}var dG={kernelName:Ln,backendName:`cpu`,kernelFunc:uG};Y();function fG(e){let{inputs:t,backend:n}=e,{starts:r,limits:i,deltas:a}=t,o=n.data.get(r.dataId).values,s=n.data.get(i.dataId).values,c=n.data.get(a.dataId).values,[l,u]=EB(o,r.shape,r.dtype,s,i.shape,c,a.shape);return[n.makeTensorInfo([l.length],`int32`,l),n.makeTensorInfo([u.length],r.dtype,u)]}var pG={kernelName:Rn,backendName:`cpu`,kernelFunc:fG};Y();function mG(e){let{inputs:t,backend:n,attrs:r}=e,{shape:i,values:a,defaultValue:o,rowPartitionTensors:s}=t,{rowPartitionTypes:c}=r,l=n.data.get(i.dataId).values,u=n.data.get(a.dataId).values,d=n.data.get(o.dataId).values,f=s.map(e=>n.data.get(e.dataId).values),p=s.map(e=>e.shape),[m,h]=jB(l,i.shape,u,a.shape,a.dtype,d,o.shape,f,p,c);return n.makeTensorInfo(m,a.dtype,h)}var hG={kernelName:zn,backendName:`cpu`,kernelFunc:mG};Y();function gG(e){let{backend:t,attrs:n}=e,{start:r,stop:i,dtype:a,step:o}=n,s=MB(r,i,o,a);return t.makeTensorInfo([s.length],a,s)}var _G={kernelName:Bn,backendName:`cpu`,kernelFunc:gG};Y();var vG=pz(Hn,e=>1/e),yG={kernelName:Hn,backendName:`cpu`,kernelFunc:vG};Y();function bG(e){let{inputs:t,backend:n,attrs:r}=e,{images:i}=t,{alignCorners:a,halfPixelCenters:o,size:s}=r;Z(i,`resizeBilinear`);let c=xe(i.shape),[l,u]=s,[d,f,p,m]=i.shape,h=n.data.get(i.dataId).values,g=new Float32Array(C([d,l,u,m])),_=[a&&l>1?f-1:f,a&&u>1?p-1:p],v=[a&&l>1?l-1:l,a&&u>1?u-1:u],y=0,b=_[0]/v[0],x=_[1]/v[1];for(let e=0;e<d;e++)for(let t=0;t<l;t++){let n;n=o?b*(t+.5)-.5:b*t;let r=Math.max(0,Math.floor(n)),i=n-r,a=Math.min(f-1,Math.ceil(n)),s=e*c[0]+r*c[1],l=e*c[0]+a*c[1];for(let e=0;e<u;e++){let t;t=o?x*(e+.5)-.5:x*e;let n=Math.max(0,Math.floor(t)),r=t-n,a=Math.min(p-1,Math.ceil(t)),u=s+n*c[2],d=l+n*c[2],f=s+a*c[2],_=l+a*c[2];for(let e=0;e<m;e++){let t=h[u+e],n=h[d+e],a=h[f+e],o=h[_+e],s=t+(a-t)*r,c=s+(n+(o-n)*r-s)*i;g[y++]=c}}}return n.makeTensorInfo([d,l,u,m],`float32`,g)}var xG={kernelName:qn,backendName:`cpu`,kernelFunc:bG};Y();function SG(e){let{inputs:t,backend:n,attrs:r}=e,{images:i,dy:a}=t,{alignCorners:o}=r;Z([a,i],`resizeBilinearGrad`);let s=xe(i.shape),[c,l,u,d]=i.shape,[,f,p]=a.shape,m=new Float32Array(c*l*u*d),h=[o&&f>1?l-1:l,o&&p>1?u-1:u],g=[o&&f>1?f-1:f,o&&p>1?p-1:p],_=h[0]/g[0],v=h[1]/g[1],y=n.data.get(a.dataId).values,b=0;for(let e=0;e<c;e++){let t=e*s[0];for(let e=0;e<f;e++){let n=e*_,r=Math.floor(n),i=Math.min(Math.ceil(n),l-1),a=t+r*s[1],o=t+i*s[1],c=n-r,f=1-c;for(let e=0;e<p;e++){let t=e*v,n=Math.floor(t),r=Math.min(Math.ceil(t),u-1),i=t-n,l=1-i,p=a+n*s[2],h=a+r*s[2],g=o+n*s[2],_=o+r*s[2],x=f*l,S=f*i,C=c*l,w=c*i;for(let e=0;e<d;e++){let t=y[b++];m[p+e]+=t*x,m[h+e]+=t*S,m[g+e]+=t*C,m[_+e]+=t*w}}}}return n.makeTensorInfo([c,u,l,d],`float32`,m)}var CG={kernelName:Jn,backendName:`cpu`,kernelFunc:SG};Y();function wG(e){let{inputs:t,backend:n,attrs:r}=e,{images:i}=t,{alignCorners:a,halfPixelCenters:o,size:s}=r;Z(i,`resizeNearestNeighbor`);let c=xe(i.shape),[l,u]=s,[d,f,p,m]=i.shape,h=n.data.get(i.dataId).values,g=new Float32Array(d*l*u*m),_=[a&&l>1?f-1:f,a&&u>1?p-1:p],v=[a&&l>1?l-1:l,a&&u>1?u-1:u],y=_[0]/v[0],b=_[1]/v[1],x=0;for(let e=0;e<d;e++){let t=e*c[0];for(let e=0;e<l;e++){let n=o?y*(e+.5):y*e,r=Math.min(f-1,a?Math.round(n):Math.floor(n));o&&(r=Math.max(0,r));let i=t+r*c[1];for(let e=0;e<u;e++){let t=o?b*(e+.5):b*e,n=Math.min(p-1,a?Math.round(t):Math.floor(t));o&&(n=Math.max(0,n));let r=i+n*c[2];for(let e=0;e<m;e++){let t=h[r+e];g[x++]=t}}}}return n.makeTensorInfo([d,l,u,m],i.dtype,g)}var TG={kernelName:Gn,backendName:`cpu`,kernelFunc:wG};Y();function EG(e){let{inputs:t,backend:n,attrs:r}=e,{images:i,dy:a}=t,{alignCorners:o}=r;Z([a,i],`resizeNearestNeighborGrad`);let s=xe(i.shape),c=xe(a.shape),[l,u,d,f]=i.shape,[,p,m]=a.shape,h=new Float32Array(l*u*d*f),g=n.data.get(a.dataId).values,_=[o&&p>1?u-1:u,o&&m>1?d-1:d],v=[o&&p>1?p-1:p,o&&m>1?m-1:m],y=_[0]/v[0],b=_[1]/v[1],x=1/y,S=1/b,C=Math.ceil(x)*2+2,w=Math.ceil(S)*2+2;for(let e=0;e<l;e++){let t=e*s[0];for(let e=0;e<u;e++){let n=t+e*s[1],r=Math.floor(e*x),i=Math.floor(r-C/2);for(let r=0;r<d;r++){let a=n+r*s[2],l=Math.floor(r*S),_=Math.floor(l-w/2);for(let n=0;n<f;n++){let s=0;for(let a=0;a<C;a++){let l=a+i;if(l<0||l>=p)continue;let f=t+l*c[1],h=l*y,v=Math.min(u-1,o?Math.round(h):Math.floor(h));if(e===v)for(let e=0;e<w;e++){let t=e+_;if(t<0||t>=m)continue;let i=f+t*c[2],a=t*b,l=Math.min(d-1,o?Math.round(a):Math.floor(a));r===l&&(s+=g[i+n])}}h[a+n]=s}}}}return n.makeTensorInfo(i.shape,i.dtype,h)}var DG={kernelName:Kn,backendName:`cpu`,kernelFunc:EG};Y();function OG(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{dims:a}=r;Z(i,`reverse`);let o=i.shape.length,s=ae(a,i.shape);if(o===0)return QR({inputs:{x:i},backend:n});let c=new qi(i.shape,i.dtype),l=n.bufferSync(i);for(let e=0;e<c.size;e++){let t=c.indexToLoc(e),n=t.slice();s.forEach(e=>n[e]=i.shape[e]-1-n[e]),c.set(l.get(...n),...t)}return n.makeTensorInfo(c.shape,c.dtype,c.values)}var kG={kernelName:Xn,backendName:`cpu`,kernelFunc:OG};Y();var AG={kernelName:Fr,backendName:`cpu`,kernelFunc:({inputs:e,attrs:t,backend:n})=>{let{image:r}=e,{radians:i,fillValue:a,center:o}=t,s=n,c=se(r.dtype,C(r.shape)),[l,u,d,f]=r.shape,[p,m]=sT(o,u,d),h=Math.sin(i),g=Math.cos(i),_=s.data.get(r.dataId).values;for(let e=0;e<l;e++){let t=e*d*u*f;for(let e=0;e<u;e++){let n=d*f*e;for(let r=0;r<d;r++){let i=r*f;for(let o=0;o<f;o++){let s=[l,e,r,o],v=s[2],y=s[1],b=(v-p)*g-(y-m)*h,x=(v-p)*h+(y-m)*g;b=Math.round(b+p),x=Math.round(x+m);let S=a;if(typeof a!=`number`&&(S=o===3?255:a[o]),b>=0&&b<d&&x>=0&&x<u){let e=d*f*x,n=b*f;S=_[t+e+n+o]}let C=t+n+i+o;c[C]=S}}}}return{dataId:s.write(c,r.shape,r.dtype),shape:r.shape,dtype:r.dtype}}};Y();var jG=pz(Zn,e=>{let t=Math.floor(e);return e-t<.5?Math.floor(e):e-t>.5?Math.ceil(e):t%2==0?t:t+1}),MG={kernelName:Zn,backendName:`cpu`,kernelFunc:jG};Y();function NG(e){let{inputs:t,backend:n,attrs:r}=e,{indices:i,updates:a}=t,{shape:o}=r,{sliceRank:s,numUpdates:c,sliceSize:l,strides:u,outputSize:d}=fl(a,i,o),f=IB(n.bufferSync(i),n.bufferSync(a),o,d,l,c,s,u,0,!0);return n.makeTensorInfo(o,f.dtype,f.values)}var PG={kernelName:$n,backendName:`cpu`,kernelFunc:NG};Y();function FG(e,t){let n=0,r=e.length,i=0;for(;n<r;)i=Math.floor((n+r)/2),e[i]<t?n=i+1:r=i;return r}function IG(e,t){let n=0,r=e.length,i=0;for(;n<r;)i=Math.floor((n+r)/2),e[i]<=t?n=i+1:r=i;return r}function LG(e,t,n,r,i,a){let o=ce(`int32`,n*i);for(let s=0;s<n;++s){let n=e.slice(s*r,(s+1)*r),c=s*i;for(let e=0;e<i;++e)o[c+e]=a===`left`?FG(n,t[e+c]):IG(n,t[e+c])}return o}Y();function RG(e){let{inputs:t,backend:n,attrs:r}=e,{sortedSequence:i,values:a}=t,{side:o}=r,s=n.data.get(i.dataId).values,c=n.data.get(a.dataId).values,l=LG(s,c,i.shape[0],i.shape[1],a.shape[1],o);return n.makeTensorInfo(a.shape,`int32`,l)}var zG={kernelName:er,backendName:`cpu`,kernelFunc:RG};Y();function BG(e){let{inputs:t,backend:n}=e,{condition:r,t:i,e:a}=t;Z([r,i,a],`select`);let o=r.shape.length,s=n.data.get(r.dataId).values,c=n.data.get(i.dataId).values,l=n.data.get(a.dataId).values,u=Qi(i.dtype,a.dtype),d=Te(C(i.shape),u),f=0,p=o===0||o>1||i.shape.length===1?1:C(i.shape.slice(1));for(let e=0;e<s.length;e++)for(let t=0;t<p;t++)s[e]===1?d[f++]=c[e]:d[f++]=l[e];return n.makeTensorInfo(i.shape,u,d)}var VG={kernelName:tr,backendName:`cpu`,kernelFunc:BG};Y();var HG=hT,UG=gT,WG=pz(nr,e=>e>=0?UG*e:HG*(Math.exp(e)-1)),GG={kernelName:nr,backendName:`cpu`,kernelFunc:WG};Y();var KG=pz(ar,e=>e<0?-1:+(e>0)),qG={kernelName:ar,backendName:`cpu`,kernelFunc:KG};Y();var JG={kernelName:`Sin`,backendName:`cpu`,kernelFunc:pz(`Sin`,e=>Math.sin(e))};Y();var YG=pz(ir,e=>Math.sinh(e)),XG={kernelName:ir,backendName:`cpu`,kernelFunc:YG};Y();var ZG=Math.log(1.1920928955078125e-7)+2,QG=pz(sr,e=>{let t=e>-ZG,n=e<ZG,r=Math.exp(e),i;return i=n?r:t?e:Math.log(1+r),i}),$G={kernelName:sr,backendName:`cpu`,kernelFunc:QG};Y();function eK(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{blockShape:a,paddings:o}=r;Z([i],`spaceToBatchND`);let s=C(a),c=[[0,0]];c.push(...o);for(let e=1+a.length;e<i.shape.length;++e)c.push([0,0]);let l=cG.kernelFunc({inputs:{x:i},backend:n,attrs:{paddings:c,constantValue:0}}),u=lT(l.shape,a,s,!1),d=uT(u.length,a.length,!1),f=dT(l.shape,a,s,!1),p=TV({inputs:{x:l},backend:n,attrs:{shape:u}}),m=fB({inputs:{x:p},backend:n,attrs:{perm:d}}),h=TV({inputs:{x:m},backend:n,attrs:{shape:f}});return n.disposeIntermediateTensorInfo(l),n.disposeIntermediateTensorInfo(p),n.disposeIntermediateTensorInfo(m),h}var tK={kernelName:lr,backendName:`cpu`,kernelFunc:eK};Y();function nK(e){let{inputs:t,backend:n}=e,{indices:r,values:i,denseShape:a,defaultValue:o}=t;if(a.shape.length!==1)throw Error(`Dense shape must be a vector, saw:
        ${a.shape}`);if(r.shape.length!==2)throw Error(`Indices must be a matrix, saw:
        ${r.shape}`);if(i.shape.length!==1)throw Error(`Values must be a vector, saw:
        ${i.shape}`);if(o.shape.length!==0)throw Error(`Default value must be a scalar, saw:
        ${o.shape}`);let s=n.data.get(r.dataId).values,c=n.data.get(i.dataId).values,l=n.data.get(a.dataId).values,u=n.data.get(o.dataId).values[0],[d,f,p,m,h]=UB(s,r.shape,r.dtype,c,i.dtype,l,u);return[n.makeTensorInfo(f,r.dtype,d),n.makeTensorInfo([f[0]],i.dtype,p),n.makeTensorInfo([m.length],`bool`,new Uint8Array(m.map(e=>Number(e)))),n.makeTensorInfo([h.length],r.dtype,new Int32Array(h))]}var rK={kernelName:fr,backendName:`cpu`,kernelFunc:nK};Y();function iK(e){let{inputs:t,backend:n}=e,{inputIndices:r,inputShape:i,newShape:a}=t;if(r.shape.length!==2)throw Error(`Input indices should be a matrix but received shape
        ${r.shape}`);if(i.shape.length!==1)throw Error(`Input shape should be a vector but received shape
        ${i.shape}`);if(a.shape.length!==1)throw Error(`Target shape should be a vector but received shape ${a.shape}`);let o=Array.from(n.data.get(i.dataId).values),s=n.data.get(r.dataId).values,c=Array.from(n.data.get(a.dataId).values),[l,u,d]=WB(s,r.shape,r.dtype,o,c);return[n.makeTensorInfo(u,r.dtype,l),n.makeTensorInfo([d.length],a.dtype,new Int32Array(d))]}var aK={kernelName:pr,backendName:`cpu`,kernelFunc:iK};Y();function oK(e){let{inputs:t,backend:n}=e,{data:r,indices:i,segmentIds:a}=t;if(r.shape.length<1)throw Error(`Data should be at least 1 dimensional but received scalar`);if(i.shape.length!==1)throw Error(`Indices should be a vector but received shape
          ${i.shape}`);if(a.shape.length!==1)throw Error(`Segment ids should be a vector but received shape
          ${a.shape}`);if(i.shape[0]!==a.shape[0])throw Error(`segmentIds and indices should have same size.`);let o=n.data.get(r.dataId).values,s=n.data.get(i.dataId).values,c=n.data.get(a.dataId).values,[l,u]=GB(o,r.shape,r.dtype,s,c,!0);return n.makeTensorInfo(u,r.dtype,l)}var sK={kernelName:mr,backendName:`cpu`,kernelFunc:oK};Y();function cK(e){let{inputs:t,backend:n}=e,{data:r,indices:i,segmentIds:a}=t;if(r.shape.length<1)throw Error(`Data should be at least 1 dimensional but received scalar`);if(i.shape.length!==1)throw Error(`Indices should be a vector but received shape
         ${i.shape}`);if(a.shape.length!==1)throw Error(`Segment ids should be a vector but received shape
         ${a.shape}`);if(i.shape[0]!==a.shape[0])throw Error(`segmentIds and indices should have same size.`);let o=n.data.get(r.dataId).values,s=n.data.get(i.dataId).values,c=n.data.get(a.dataId).values,[l,u]=GB(o,r.shape,r.dtype,s,c);return n.makeTensorInfo(u,r.dtype,l)}var lK={kernelName:hr,backendName:`cpu`,kernelFunc:cK};Y();function uK(e){let{inputs:t,backend:n,attrs:r}=e,{sparseIndices:i,sparseValues:a,defaultValue:o}=t,{outputShape:s}=r,{sliceRank:c,numUpdates:l,sliceSize:u,strides:d,outputSize:f}=fl(a,i,s),p=n.bufferSync(i),m;switch(a.dtype){case`bool`:m=IB(p,n.bufferSync(a),s,f,u,l,c,d,!!n.data.get(o.dataId).values[0],!1);break;case`float32`:{let e=n.bufferSync(a),t=n.data.get(o.dataId).values[0];m=IB(p,e,s,f,u,l,c,d,t,!1);break}case`int32`:{let e=n.bufferSync(a),t=n.data.get(o.dataId).values[0];m=IB(p,e,s,f,u,l,c,d,t,!1);break}case`string`:m=IB(p,n.bufferSync(a),s,f,u,l,c,d,Di(n.data.get(o.dataId).values[0]),!1);break;default:throw Error(`Unsupported type ${a.dtype}`)}return n.makeTensorInfo(s,m.dtype,m.values)}var dK={kernelName:gr,backendName:`cpu`,kernelFunc:uK};Y();function fK(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{numOrSizeSplits:a,axis:o}=r,s=ae(o,i.shape)[0],c=GT(i,a,s),l=Array(i.shape.length).fill(0),u=i.shape.slice();return c.map(e=>{let t=[...u];t[s]=e;let r=VB({inputs:{x:i},backend:n,attrs:{begin:l,size:t}});return l[s]+=e,r})}var pK={kernelName:ur,backendName:`cpu`,kernelFunc:fK};Y();var mK={kernelName:vr,backendName:`cpu`,kernelFunc:({inputs:e,backend:t})=>{let{x:n}=e,r=t;Z(n,`square`);let i=r.data.get(n.dataId).values,a=new Float32Array(i.length);for(let e=0;e<i.length;++e){let t=i[e];a[e]=t*t}return{dataId:r.write(a,n.shape,n.dtype),shape:n.shape,dtype:n.dtype}}};Y();var hK=pz(Nr,(e,t)=>isNaN(e)?NaN:e>0?1:t.alpha),gK={kernelName:Nr,backendName:`cpu`,kernelFunc:hK};Y();function _K(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{begin:a,end:o,strides:s,beginMask:c,endMask:l,ellipsisMask:u,newAxisMask:d,shrinkAxisMask:f}=r;Z(i,`stridedSlice`);let{finalShapeSparse:p,finalShape:m,isIdentity:h,sliceDim0:g,isSimpleSlice:_,begin:v,end:b,strides:x}=Al(i.shape,a,o,s,c,l,u,d,f),S;if(h)S=TV({inputs:{x:i},backend:n,attrs:{shape:m}});else if(g||_){y(i.shape.length>=1,()=>`Input must have rank at least 1, got: ${i.shape.length}`);let e=_l(v,b,x),t=VB({inputs:{x:i},backend:n,attrs:{begin:v,size:e}});S=TV({inputs:{x:t},backend:n,attrs:{shape:m}}),n.disposeIntermediateTensorInfo(t)}else{let e=QB(p,n.bufferSync(i),x,v);S=n.makeTensorInfo(m,e.dtype,e.values)}return S}var vK={kernelName:yr,backendName:`cpu`,kernelFunc:_K};Y();function yK(e){let{inputs:t,backend:n,attrs:r}=e,{separator:i,nGramWidths:a,leftPad:o,rightPad:s,padWidth:c,preserveShortSequences:l}=r,{data:u,dataSplits:d}=t,f=n.data.get(u.dataId).values,p=n.data.get(d.dataId).values,[m,h]=eV(f,p,i,a,o,s,c,l);return[n.makeTensorInfo([m.length],`string`,m),n.makeTensorInfo(d.shape,`int32`,h)]}var bK={kernelName:br,backendName:`cpu`,kernelFunc:yK};Y();function xK(e){let{inputs:t,backend:n,attrs:r}=e,{skipEmpty:i}=r,{input:a,delimiter:o}=t;if(a.dtype!==`string`)throw Error(`Input must be of datatype string`);if(a.shape.length!==1)throw Error(`Input must be a vector, got shape: ${a.shape}`);if(o.shape.length!==0)throw Error(`Delimiter must be a scalar, got shape: ${o.shape}`);let s=n.data.get(a.dataId).values,c=n.data.get(o.dataId).values[0],[l,u,d]=nV(s,c,i),f=u.length;return[n.makeTensorInfo([f,2],`int32`,l),n.makeTensorInfo([f],`string`,u),n.makeTensorInfo([2],`int32`,new Int32Array(d))]}var SK={kernelName:xr,backendName:`cpu`,kernelFunc:xK};Y();function CK(e){let{inputs:t,backend:n,attrs:r}=e,{numBuckets:i}=r,{input:a}=t;if(a.dtype!==`string`)throw Error(`Input must be of datatype string`);if(i<=0)throw Error(`Number of buckets must be at least 1`);let o=n.data.get(a.dataId).values,s=rV(o,i);return n.makeTensorInfo(a.shape,`int32`,s)}var wK={kernelName:Sr,backendName:`cpu`,kernelFunc:CK};Y();var TK={kernelName:`Tan`,backendName:`cpu`,kernelFunc:pz(`Tan`,e=>Math.tan(e))};Y();var EK=pz(Cr,e=>Math.tanh(e)),DK={kernelName:Cr,backendName:`cpu`,kernelFunc:EK};Y();function OK(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{reps:a}=r;Z(i,`tile`);let o=sV(n.bufferSync(i),a);return n.makeTensorInfo(o.shape,o.dtype,o.values)}var kK={kernelName:wr,backendName:`cpu`,kernelFunc:OK};Y();function AK(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{k:a,sorted:o}=r;Z(i,`topk`);let s=n.data.get(i.dataId).values,[c,l]=uV(s,i.shape,i.dtype,a,o);return[n.makeTensorInfo(c.shape,c.dtype,c.values),n.makeTensorInfo(l.shape,l.dtype,l.values)]}var jK={kernelName:Tr,backendName:`cpu`,kernelFunc:AK};Y();function MK(e){let{inputs:t,attrs:n,backend:r}=e,{image:i,transforms:a}=t,{interpolation:o,fillMode:s,fillValue:c,outputShape:l}=n,[u,d,f,p]=i.shape,[m,h]=l??[d,f],g=[u,m,h,p],_=xe(i.shape),v=_[0],y=_[1],b=_[2],x=xe(g),S=x[0],w=x[1],T=x[2],E=se(i.dtype,C(g));E.fill(c);let D=r.data.get(i.dataId).values,ee=r.data.get(a.dataId).values;for(let e=0;e<u;++e){let t=a.shape[0]===1?ee:ee.subarray(e*8,e*8+8);for(let n=0;n<m;++n)for(let r=0;r<h;++r)for(let i=0;i<p;++i){let a,l=t[6]*r+t[7]*n+1;if(l===0)continue;let u=(t[0]*r+t[1]*n+t[2])/l,p=(t[3]*r+t[4]*n+t[5])/l,m=PK(u,f,s),h=PK(p,d,s);switch(o){case`nearest`:a=BK(D,d,f,v,y,b,e,h,m,i,c);break;case`bilinear`:a=VK(D,d,f,v,y,b,e,h,m,i,c);break;default:throw Error(`Error in Transform: Expect 'nearest' or 'bilinear', but got ${o}`)}let g=e*S+n*w+r*T+i;E[g]=a}return r.makeTensorInfo(g,i.dtype,E)}return{dataId:r.write(E,g,i.dtype),shape:i.shape,dtype:i.dtype}}var NK={kernelName:Er,backendName:`cpu`,kernelFunc:MK};function PK(e,t,n){switch(n){case`reflect`:return FK(e,t);case`wrap`:return IK(e,t);case`nearest`:return RK(e,t);default:return LK(e,t)}}function FK(e,t){let n=e;if(n<0){if(t<=1)n=0;else{let e=2*t;n<e&&(n=e*Math.trunc(-n/e)+n),n=n<-t?n+e:-n-1}}else if(n>t-1){if(t<=1)n=0;else{let e=2*t;n-=e*Math.trunc(n/e),n>=t&&(n=e-n-1)}}return p(0,n,t-1)}function IK(e,t){let n=e;if(n<0){if(t<=1)n=0;else{let e=t-1;n+=t*(Math.trunc(-n/e)+1)}}else if(n>t-1){if(t<=1)n=0;else{let e=t-1;n-=t*Math.trunc(n/e)}}return p(0,n,t-1)}function LK(e,t){return e}function RK(e,t){return p(0,e,t-1)}function zK(e,t,n,r,i,a,o,s,c,l,u){let d=o*r+s*i+c*a+l;return 0<=s&&s<t&&0<=c&&c<n?e[d]:u}function BK(e,t,n,r,i,a,o,s,c,l,u){return zK(e,t,n,r,i,a,o,Math.round(s),Math.round(c),l,u)}function VK(e,t,n,r,i,a,o,s,c,l,u){let d=Math.floor(s),f=Math.floor(c),p=d+1,m=f+1,h=(m-c)*zK(e,t,n,r,i,a,o,d,f,l,u)+(c-f)*zK(e,t,n,r,i,a,o,d,m,l,u),g=(m-c)*zK(e,t,n,r,i,a,o,p,f,l,u)+(c-f)*zK(e,t,n,r,i,a,o,p,m,l,u);return(p-s)*h+(s-d)*g}Y();function HK(e){let{inputs:t,attrs:n,backend:r}=e,{axis:i}=n,{x:a}=t;Z(a,`unique`);let o=r.data.get(a.dataId).values,{outputValues:s,outputShape:c,indices:l}=dV(o,i,a.shape,a.dtype);return[r.makeTensorInfo(c,a.dtype,s),r.makeTensorInfo([l.length],`int32`,l)]}var UK={kernelName:Or,backendName:`cpu`,kernelFunc:HK};Y();function WK(e){let{inputs:t,backend:n,attrs:r}=e,{value:i}=t,{axis:a}=r;a<0&&(a+=i.shape.length);let o=i.shape.length,s=i.shape[a],c=Array(o-1),l=0;for(let e=0;e<o;e++)e!==a&&(c[l++]=i.shape[e]);let u=Array(o).fill(0),d=i.shape.slice();d[a]=1;let f=Array(s);for(let e=0;e<f.length;e++){u[a]=e;let t=VB({inputs:{x:i},backend:n,attrs:{begin:u,size:d}});f[e]=TV({inputs:{x:t},backend:n,attrs:{shape:c}}),n.disposeIntermediateTensorInfo(t)}return f}var GK={kernelName:kr,backendName:`cpu`,kernelFunc:WK};Y();function KK(e){let{inputs:t,backend:n,attrs:r}=e,{x:i,segmentIds:a}=t,{numSegments:o}=r;Z(i,`unsortedSegmentSum`);let s=i.shape.length,c=a.shape.length,l=[],u=[],d=s-c,f=a;for(let e=0;e<d;++e){let t=wU({inputs:{input:f},backend:n,attrs:{dim:e+1}});f=t,u.push(t)}for(let e=0;e<o;++e){let t=xi(e,`int32`),r=n.makeTensorInfo([],`int32`,t),a=bz({inputs:{a:r,b:f},backend:n}),o=rz({inputs:{x:a},backend:n,attrs:{dtype:`float32`}}),s=rB({inputs:{a:o,b:i},backend:n}),c=dU({inputs:{x:s},backend:n,attrs:{axis:0,keepDims:!1}});l.push(c),u.push(r),u.push(a),u.push(o),u.push(s),u.push(c)}let p=aG({inputs:l,backend:n,attrs:{axis:0}});return u.forEach(e=>n.disposeIntermediateTensorInfo(e)),p}var qK={kernelName:Ar,backendName:`cpu`,kernelFunc:KK};Y();var JK=[AV,qR,MV,PV,lz,IV,RV,BV,HV,WV,KV,JV,XV,$V,tH,sH,lH,dH,pH,OV,hH,_H,yH,xH,iz,_z,CH,XR,wH,OH,AH,MH,PH,IH,RH,BH,VH,UH,GH,qH,YH,ZH,$H,tU,rU,aU,sU,cU,lU,uU,mU,mV,gU,xz,CU,wz,TU,Dz,FU,LU,zU,Az,HU,WU,KU,JU,XU,Fz,Rz,$R,QU,EH,eW,nW,iW,gV,Vz,Wz,oW,qz,cW,dW,pW,gW,vW,bW,SW,Zz,wW,EW,OW,AW,MW,PW,IW,eB,RW,zW,UW,iB,sB,KW,YW,QW,uB,eG,iG,oG,cG,lG,yV,gB,dG,pG,hG,_G,tz,OU,yG,xV,CV,EV,xG,CG,TG,DG,kG,AG,MG,FB,PG,zG,VG,GG,zB,qG,JG,XG,HB,VW,$G,tK,rK,aK,sK,lK,dK,pK,JB,mK,ZB,gK,vK,bK,SK,wK,oV,fU,TK,DK,kK,jK,NK,pB,UK,GK,qK,nG];for(let e of JK)Gr(e);Y();var YK={},XK={alpha:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1,depth:!1,stencil:!1,failIfMajorPerformanceCaveat:!0};function ZK(e,t){YK[e]=t}function QK(e,t){if(!(e in YK)||t!=null){let n=eq(e,t);if(n!==null)YK[e]=n;else return console.log(`Could not get context for WebGL version`,e),null}let n=YK[e];return n==null||n.isContextLost()?(delete YK[e],QK(e)):(n.disable(n.DEPTH_TEST),n.disable(n.STENCIL_TEST),n.disable(n.BLEND),n.disable(n.DITHER),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SAMPLE_COVERAGE),n.enable(n.SCISSOR_TEST),n.enable(n.CULL_FACE),n.cullFace(n.BACK),YK[e])}function $K(e){if(typeof OffscreenCanvas<`u`&&e===2)return new OffscreenCanvas(300,150);if(typeof document<`u`)return document.createElement(`canvas`);throw Error(`Cannot create a canvas in this context`)}function eq(e,t){if(e!==1&&e!==2)throw Error(`Cannot get WebGL rendering context, WebGL is disabled.`);let n=t??$K(e);return n.addEventListener(`webglcontextlost`,t=>{t.preventDefault(),delete YK[e]},!1),O().getBool(`SOFTWARE_WEBGL_ENABLED`)&&(XK.failIfMajorPerformanceCaveat=!1),e===1?n.getContext(`webgl`,XK)||n.getContext(`experimental-webgl`,XK):n.getContext(`webgl2`,XK)}Y();var tq;(function(e){e[e.DENSE=0]=`DENSE`,e[e.SHARED_BATCH=1]=`SHARED_BATCH`})(tq||={});var nq;(function(e){e[e.RENDER=0]=`RENDER`,e[e.UPLOAD=1]=`UPLOAD`,e[e.PIXELS=2]=`PIXELS`,e[e.DOWNLOAD=3]=`DOWNLOAD`})(nq||={});var rq;(function(e){e[e.UNPACKED_FLOAT16=0]=`UNPACKED_FLOAT16`,e[e.UNPACKED_FLOAT32=1]=`UNPACKED_FLOAT32`,e[e.PACKED_4X1_UNSIGNED_BYTE=2]=`PACKED_4X1_UNSIGNED_BYTE`,e[e.PACKED_2X2_FLOAT32=3]=`PACKED_2X2_FLOAT32`,e[e.PACKED_2X2_FLOAT16=4]=`PACKED_2X2_FLOAT16`})(rq||={});function iq(e,t){return[t,e]}function aq(e,t){return e*t}function oq(e){let t=C(e);return ee(Math.ceil(t/4))}function sq(e,t){return[Math.max(1,Math.ceil(t/2)),Math.max(1,Math.ceil(e/2))]}function cq(e,t){let[n,r]=sq(e,t);return n*r*4}function lq(e,t){let n=e,r,i,a,o,s,c,l,u,d,f;return O().getNumber(`WEBGL_VERSION`)===2?(r=n.R32F,i=n.R16F,a=n.RGBA16F,o=n.RGBA32F,s=n.RED,l=4,u=1,d=n.HALF_FLOAT,f=n.FLOAT,c=n.RGBA8):(r=e.RGBA,i=e.RGBA,a=e.RGBA,o=n.RGBA,s=e.RGBA,l=4,u=4,d=t==null?null:t.HALF_FLOAT_OES,f=e.FLOAT,c=e.RGBA),{internalFormatFloat:r,internalFormatHalfFloat:i,internalFormatPackedHalfFloat:a,internalFormatPackedFloat:o,textureFormatFloat:s,downloadTextureFormat:c,downloadUnpackNumChannels:l,defaultNumChannels:u,textureTypeHalfFloat:d,textureTypeFloat:f}}Y();function Q(e,t){let n=t();return O().getBool(`DEBUG`)&&uq(e),n}function uq(e){let t=e.getError();if(t!==e.NO_ERROR)throw Error(`WebGL Error: `+mq(e,t))}var dq=5.96e-8,fq=65504;function pq(e){return!!(O().getBool(`WEBGL_RENDER_FLOAT32_ENABLED`)||e===0||dq<Math.abs(e)&&Math.abs(e)<fq)}function mq(e,t){switch(t){case e.NO_ERROR:return`NO_ERROR`;case e.INVALID_ENUM:return`INVALID_ENUM`;case e.INVALID_VALUE:return`INVALID_VALUE`;case e.INVALID_OPERATION:return`INVALID_OPERATION`;case e.INVALID_FRAMEBUFFER_OPERATION:return`INVALID_FRAMEBUFFER_OPERATION`;case e.OUT_OF_MEMORY:return`OUT_OF_MEMORY`;case e.CONTEXT_LOST_WEBGL:return`CONTEXT_LOST_WEBGL`;default:return`Unknown error code ${t}`}}function hq(e,t){return Lq(e,()=>e.getExtension(t),`Extension "`+t+`" not supported on this browser.`)}function gq(e,t){let n=Lq(e,()=>e.createShader(e.VERTEX_SHADER),`Unable to create vertex WebGLShader.`);if(Q(e,()=>e.shaderSource(n,t)),Q(e,()=>e.compileShader(n)),e.getShaderParameter(n,e.COMPILE_STATUS)===!1)throw console.log(e.getShaderInfoLog(n)),Error(`Failed to compile vertex shader.`);return n}function _q(e,t){let n=Lq(e,()=>e.createShader(e.FRAGMENT_SHADER),`Unable to create fragment WebGLShader.`);if(Q(e,()=>e.shaderSource(n,t)),Q(e,()=>e.compileShader(n)),O().get(`ENGINE_COMPILE_ONLY`))return n;if(e.getShaderParameter(n,e.COMPILE_STATUS)===!1)throw yq(t,e.getShaderInfoLog(n)),Error(`Failed to compile fragment shader.`);return n}var vq=/ERROR: [0-9]+:([0-9]+):/g;function yq(e,t){let n=vq.exec(t);if(n==null){console.log(`Couldn't parse line number in error: ${t}`),console.log(e);return}let r=+n[1],i=e.split(`
`),a=i.length.toString().length+2,o=i.map((e,t)=>ne((t+1).toString(),a)+e),s=0;for(let e=0;e<o.length;e++)s=Math.max(o[e].length,s);let c=o.slice(0,r-1),l=o.slice(r-1,r),u=o.slice(r);console.log(c.join(`
`)),console.log(t.split(`
`)[0]),console.log(`%c ${ne(l[0],s)}`,`border:1px solid red; background-color:#e3d2d2; color:#a61717`),console.log(u.join(`
`))}function bq(e){return Lq(e,()=>e.createProgram(),`Unable to create WebGLProgram.`)}function xq(e,t){if(Q(e,()=>e.linkProgram(t)),!O().get(`ENGINE_COMPILE_ONLY`)&&e.getProgramParameter(t,e.LINK_STATUS)===!1)throw console.log(e.getProgramInfoLog(t)),Error(`Failed to link vertex and fragment shaders.`)}function Sq(e,t){if(Q(e,()=>e.validateProgram(t)),e.getProgramParameter(t,e.VALIDATE_STATUS)===!1)throw console.log(e.getProgramInfoLog(t)),Error(`Shader program validation failed.`)}function Cq(e,t){let n=Lq(e,()=>e.createBuffer(),`Unable to create WebGLBuffer`);return Q(e,()=>e.bindBuffer(e.ARRAY_BUFFER,n)),Q(e,()=>e.bufferData(e.ARRAY_BUFFER,t,e.STATIC_DRAW)),n}function wq(e,t){let n=Lq(e,()=>e.createBuffer(),`Unable to create WebGLBuffer`);return Q(e,()=>e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n)),Q(e,()=>e.bufferData(e.ELEMENT_ARRAY_BUFFER,t,e.STATIC_DRAW)),n}function Tq(e){return Lq(e,()=>e.createTexture(),`Unable to create WebGLTexture.`)}function Eq(e,t){let n=O().getNumber(`WEBGL_MAX_TEXTURE_SIZE`);if(e<=0||t<=0){let n=`[${e}x${t}]`;throw Error(`Requested texture size `+n+` is invalid.`)}if(e>n||t>n){let r=`[${e}x${t}]`,i=`[${n}x${n}]`;throw Error(`Requested texture size `+r+` greater than WebGL maximum on this browser / GPU `+i+`.`)}}function Dq(e){return Lq(e,()=>e.createFramebuffer(),`Unable to create WebGLFramebuffer.`)}function Oq(e,t,n,r,i,a,o){let s=e.getAttribLocation(t,n);return s!==-1&&(Q(e,()=>e.bindBuffer(e.ARRAY_BUFFER,r)),Q(e,()=>e.vertexAttribPointer(s,i,e.FLOAT,!1,a,o)),Q(e,()=>e.enableVertexAttribArray(s)),!0)}function kq(e,t,n){Rq(e,n),Q(e,()=>e.activeTexture(e.TEXTURE0+n)),Q(e,()=>e.bindTexture(e.TEXTURE_2D,t))}function Aq(e,t,n){return Lq(e,()=>e.getUniformLocation(t,n),`uniform "`+n+`" not present in program.`)}function jq(e,t,n){return e.getUniformLocation(t,n)}function Mq(e,t,n,r){Q(e,()=>kq(e,t,r)),Q(e,()=>e.uniform1i(n,r))}function Nq(e,t,n){Q(e,()=>e.bindFramebuffer(e.FRAMEBUFFER,n)),Q(e,()=>e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0))}function Pq(e,t){Q(e,()=>e.bindFramebuffer(e.FRAMEBUFFER,t)),Q(e,()=>e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,null,0))}function Fq(e){let t=e.checkFramebufferStatus(e.FRAMEBUFFER);if(t!==e.FRAMEBUFFER_COMPLETE)throw Error(`Error binding framebuffer: `+Iq(e,t))}function Iq(e,t){switch(t){case e.FRAMEBUFFER_INCOMPLETE_ATTACHMENT:return`FRAMEBUFFER_INCOMPLETE_ATTACHMENT`;case e.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT:return`FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT`;case e.FRAMEBUFFER_INCOMPLETE_DIMENSIONS:return`FRAMEBUFFER_INCOMPLETE_DIMENSIONS`;case e.FRAMEBUFFER_UNSUPPORTED:return`FRAMEBUFFER_UNSUPPORTED`;default:return`unknown error ${t}`}}function Lq(e,t,n){let r=Q(e,()=>t());if(r==null)throw Error(n);return r}function Rq(e,t){let n=e.MAX_COMBINED_TEXTURE_IMAGE_UNITS-1,r=t+e.TEXTURE0;if(r<e.TEXTURE0||r>n){let e=`[gl.TEXTURE0, gl.TEXTURE${n}]`;throw Error(`textureUnit must be in ${e}.`)}}function zq(e,t=2){return C(e.slice(0,e.length-t))}function Bq(e){if(e.length===0)throw Error(`Cannot get rows and columns of an empty shape array.`);return[e.length>1?e[e.length-2]:1,e[e.length-1]]}function Vq(e){let t=[1,1,1];return e.length===0||e.length===1&&e[0]===1||(t=[zq(e),...Bq(e)]),t}function Hq(e,t=!1){let n=O().getNumber(`WEBGL_MAX_TEXTURE_SIZE`),r=O().getNumber(`WEBGL_MAX_SIZE_FOR_NARROW_TEXTURE`);r===1/0&&O().getBool(`WEBGL_AUTO_SQUARIFY_NARROW_TEXTURE_SHAPE`)&&(r=n/2),t&&(n*=2,r*=2,e=e.map((t,n)=>n>=e.length-2?m(e[n]):e[n]),e.length===1&&(e=[2,e[0]])),e.length!==2&&(e=oe(e).newShape);let i=C(e),a=null;e.length<=1&&i<=n?a=[1,i]:e.length===2&&e[0]<=n&&e[1]<=n?a=e:e.length===3&&e[0]*e[1]<=n&&e[2]<=n?a=[e[0]*e[1],e[2]]:e.length===3&&e[0]<=n&&e[1]*e[2]<=n?a=[e[0],e[1]*e[2]]:e.length===4&&e[0]*e[1]*e[2]<=n&&e[3]<=n?a=[e[0]*e[1]*e[2],e[3]]:e.length===4&&e[0]<=n&&e[1]*e[2]*e[3]<=n&&(a=[e[0],e[1]*e[2]*e[3]]);let o=a!=null&&Math.max(...a)>r&&Math.min(...a)<=(t?2:1)&&Math.min(...a)>0;if(a==null||o){if(t){let t=zq(e),n=2,r=2;e.length&&([n,r]=Bq(e)),i=n/2*t*(r/2),a=ee(i).map(e=>e*2)}else a=ee(i)}return a}function Uq(e){return e%2==0}function Wq(e,t){if(e=e.slice(-2),t=t.slice(-2),T(e,t)||!e.length||!t.length||e[0]===0||e[1]===0||t[0]===0||t[1]===0)return!0;if(e.length!==t.length){let n=e.slice(-1)[0],r=t.slice(-1)[0];if(n===r||Uq(n)&&Uq(r)&&(e[0]===1||t[0]===1))return!0}return e[1]===t[1]&&Uq(e[0])&&Uq(t[0])}var Gq,Kq;function qq(e){if(Gq==null){let t=QK(e);Gq=t.getParameter(t.MAX_TEXTURE_SIZE)}return Gq}function Jq(e){if(Kq==null){let t=QK(e);Kq=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS)}return Math.min(16,Kq)}function Yq(e){if(e===0)return 0;let t,n=QK(e);return t=Xq(n,`EXT_disjoint_timer_query_webgl2`)&&e===2?2:+!!Xq(n,`EXT_disjoint_timer_query`),t}function Xq(e,t){return e.getExtension(t)!=null}function Zq(e){try{if(QK(e)!=null)return!0}catch(e){return console.log(`Error when getting WebGL context: `,e),!1}return!1}function Qq(e){if(e===0)return!1;let t=QK(e);if(e===1){if(!Xq(t,`OES_texture_float`))return!1}else if(!Xq(t,`EXT_color_buffer_float`))return!1;return eJ(t)}function $q(e){if(e===0)return!1;let t=QK(e);if(e===1){if(!Xq(t,`OES_texture_float`)||!Xq(t,`WEBGL_color_buffer_float`))return!1}else{if(Xq(t,`EXT_color_buffer_float`))return eJ(t);let e=`EXT_color_buffer_half_float`;return Xq(t,e)?tJ(t,t.getExtension(e)):!1}return eJ(t)}function eJ(e){let t=lq(e),n=e.createTexture();e.bindTexture(e.TEXTURE_2D,n),e.texImage2D(e.TEXTURE_2D,0,t.internalFormatFloat,1,1,0,t.textureFormatFloat,t.textureTypeFloat,null);let r=e.createFramebuffer();e.bindFramebuffer(e.FRAMEBUFFER,r),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,n,0);let i=e.checkFramebufferStatus(e.FRAMEBUFFER)===e.FRAMEBUFFER_COMPLETE;return e.bindTexture(e.TEXTURE_2D,null),e.bindFramebuffer(e.FRAMEBUFFER,null),e.deleteTexture(n),e.deleteFramebuffer(r),i}function tJ(e,t){let n=lq(e,t),r=e.createTexture();e.bindTexture(e.TEXTURE_2D,r),e.texImage2D(e.TEXTURE_2D,0,n.internalFormatHalfFloat,1,1,0,n.textureFormatFloat,n.textureTypeHalfFloat,null);let i=e.createFramebuffer();e.bindFramebuffer(e.FRAMEBUFFER,i),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,r,0);let a=e.checkFramebufferStatus(e.FRAMEBUFFER)===e.FRAMEBUFFER_COMPLETE;return e.bindTexture(e.TEXTURE_2D,null),e.bindFramebuffer(e.FRAMEBUFFER,null),e.deleteTexture(r),e.deleteFramebuffer(i),a}function nJ(e){return e===2&&QK(e).fenceSync!=null}function rJ(e,t){Array.isArray(e)||(e=[e]),e.forEach(e=>{e!=null&&y(e.dtype!==`complex64`,()=>`${t} does not support complex64 tensors in the WebGL backend.`)})}Y();var iJ=O();iJ.registerFlag(`HAS_WEBGL`,()=>iJ.getNumber(`WEBGL_VERSION`)>0),iJ.registerFlag(`WEBGL_VERSION`,()=>Zq(2)?2:+!!Zq(1)),iJ.registerFlag(`WEBGL_CHECK_NUMERICAL_PROBLEMS`,()=>!1),iJ.registerFlag(`WEBGL_BUFFER_SUPPORTED`,()=>iJ.get(`WEBGL_VERSION`)===2),iJ.registerFlag(`WEBGL_CPU_FORWARD`,()=>!0),iJ.registerFlag(`WEBGL_FORCE_F16_TEXTURES`,()=>!1),iJ.registerFlag(`WEBGL_PACK`,()=>iJ.getBool(`HAS_WEBGL`)),iJ.registerFlag(`WEBGL_PACK_NORMALIZATION`,()=>iJ.getBool(`WEBGL_PACK`)),iJ.registerFlag(`WEBGL_PACK_CLIP`,()=>iJ.getBool(`WEBGL_PACK`)),iJ.registerFlag(`WEBGL_PACK_DEPTHWISECONV`,()=>iJ.getBool(`WEBGL_PACK`)),iJ.registerFlag(`WEBGL_PACK_BINARY_OPERATIONS`,()=>iJ.getBool(`WEBGL_PACK`)),iJ.registerFlag(`WEBGL_PACK_UNARY_OPERATIONS`,()=>iJ.getBool(`WEBGL_PACK`)),iJ.registerFlag(`WEBGL_PACK_ARRAY_OPERATIONS`,()=>iJ.getBool(`WEBGL_PACK`)),iJ.registerFlag(`WEBGL_PACK_IMAGE_OPERATIONS`,()=>iJ.getBool(`WEBGL_PACK`)),iJ.registerFlag(`WEBGL_PACK_REDUCE`,()=>iJ.getBool(`WEBGL_PACK`)),iJ.registerFlag(`WEBGL_LAZILY_UNPACK`,()=>iJ.getBool(`WEBGL_PACK`)),iJ.registerFlag(`WEBGL_CONV_IM2COL`,()=>iJ.getBool(`WEBGL_PACK`)),iJ.registerFlag(`WEBGL_MAX_TEXTURE_SIZE`,()=>qq(iJ.getNumber(`WEBGL_VERSION`))),iJ.registerFlag(`WEBGL_MAX_TEXTURES_IN_SHADER`,()=>Jq(iJ.getNumber(`WEBGL_VERSION`))),iJ.registerFlag(`WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION`,()=>{let e=iJ.getNumber(`WEBGL_VERSION`);return e===0?0:Yq(e)}),iJ.registerFlag(`WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE`,()=>iJ.getNumber(`WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION`)>0&&!wa()),iJ.registerFlag(`WEBGL_RENDER_FLOAT32_CAPABLE`,()=>Qq(iJ.getNumber(`WEBGL_VERSION`))),iJ.registerFlag(`WEBGL_RENDER_FLOAT32_ENABLED`,()=>!iJ.getBool(`WEBGL_FORCE_F16_TEXTURES`)&&iJ.getBool(`WEBGL_RENDER_FLOAT32_CAPABLE`)),iJ.registerFlag(`WEBGL_DOWNLOAD_FLOAT_ENABLED`,()=>$q(iJ.getNumber(`WEBGL_VERSION`))),iJ.registerFlag(`WEBGL_FENCE_API_ENABLED`,()=>nJ(iJ.getNumber(`WEBGL_VERSION`))),iJ.registerFlag(`WEBGL_SIZE_UPLOAD_UNIFORM`,()=>iJ.getBool(`WEBGL_RENDER_FLOAT32_ENABLED`)?4:0),iJ.registerFlag(`WEBGL_DELETE_TEXTURE_THRESHOLD`,()=>-1,e=>{if(e<0&&e!==-1)throw Error(`WEBGL_DELETE_TEXTURE_THRESHOLD must be -1 (indicating never delete) or at least 0, but got ${e}.`)}),iJ.registerFlag(`WEBGL_FLUSH_THRESHOLD`,()=>wa()?1:-1,e=>{if(e<0&&e!==-1)throw Error(`WEBGL_FLUSH_THRESHOLD must be -1 (indicating never manual flush) or at least 0, but got ${e}.`)}),iJ.registerFlag(`CPU_HANDOFF_SIZE_THRESHOLD`,()=>128),iJ.registerFlag(`WEBGL_USE_SHAPES_UNIFORMS`,()=>!1),iJ.registerFlag(`TOPK_LAST_DIM_CPU_HANDOFF_SIZE_THRESHOLD`,()=>1e5),iJ.registerFlag(`TOPK_K_CPU_HANDOFF_THRESHOLD`,()=>128),iJ.registerFlag(`WEBGL_EXP_CONV`,()=>!1),iJ.registerFlag(`SOFTWARE_WEBGL_ENABLED`,()=>iJ.getBool(`IS_TEST`)),iJ.registerFlag(`WEBGL_MAX_SIZE_FOR_NARROW_TEXTURE`,()=>1/0),iJ.registerFlag(`WEBGL_AUTO_SQUARIFY_NARROW_TEXTURE_SHAPE`,()=>!1),iJ.registerFlag(`WEBGL2_ISNAN_CUSTOM`,()=>!1),iJ.registerFlag(`ENGINE_COMPILE_ONLY`,()=>!1),Y();function aJ(){let e,t,n,r,i,a,o,s,c,l;return O().getNumber(`WEBGL_VERSION`)===2?(e=`#version 300 es`,t=`in`,n=`out`,r=`in`,i=`texture`,a=`outputColor`,o=`out vec4 outputColor;`,s=O().getBool(`WEBGL2_ISNAN_CUSTOM`)?`
      bool isnan_custom(float val) {
        uint floatToUint = floatBitsToUint(val);
        return (floatToUint & 0x7fffffffu) > 0x7f800000u;
      }

      bvec4 isnan_custom(vec4 val) {
        return bvec4(isnan_custom(val.x),
          isnan_custom(val.y), isnan_custom(val.z), isnan_custom(val.w));
      }

      #define isnan(value) isnan_custom(value)
    `:``,c=``,l=`
      #define round(value) newRound(value)
      int newRound(float value) {
        return int(floor(value + 0.5));
      }

      ivec4 newRound(vec4 value) {
        return ivec4(floor(value + vec4(0.5)));
      }
    `):(e=``,t=`attribute`,n=`varying`,r=`varying`,i=`texture2D`,a=`gl_FragColor`,o=``,s=`
      #define isnan(value) isnan_custom(value)
      bool isnan_custom(float val) {
        return (val > 0. || val < 1. || val == 0.) ? false : true;
      }
      bvec4 isnan_custom(vec4 val) {
        return bvec4(isnan(val.x), isnan(val.y), isnan(val.z), isnan(val.w));
      }
    `,c=`
      uniform float INFINITY;

      bool isinf(float val) {
        return abs(val) == INFINITY;
      }
      bvec4 isinf(vec4 val) {
        return equal(abs(val), vec4(INFINITY));
      }
    `,l=`
      int round(float value) {
        return int(floor(value + 0.5));
      }

      ivec4 round(vec4 value) {
        return ivec4(floor(value + vec4(0.5)));
      }
    `),{version:e,attribute:t,varyingVs:n,varyingFs:r,texture2D:i,output:a,defineOutput:o,defineSpecialNaN:s,defineSpecialInf:c,defineRound:l}}Y();function oJ(e,t,n=`index`){let r=xe(t);return r.map((t,i)=>`${`int ${e[i]} = ${n} / ${t}`}; ${i===r.length-1?`int ${e[i+1]} = ${n} - ${e[i]} * ${t}`:`index -= ${e[i]} * ${t}`};`).join(``)}function sJ(e,t,n=`index`){let r=xe(t);return r.map((t,i)=>`${`int ${e[i]} = ${n} / outShapeStrides[${i}]`}; ${i===r.length-1?`int ${e[i+1]} = ${n} - ${e[i]} * outShapeStrides[${i}]`:`index -= ${e[i]} * outShapeStrides[${i}]`};`).join(``)}function cJ(e,t){let n=e.length,r=e.map(e=>`${t}[${e}]`),i=Array(n-1);i[n-2]=r[n-1];for(let e=n-3;e>=0;--e)i[e]=`(${i[e+1]} * ${r[e+1]})`;return i}function lJ(e,t,n=`index`){let r=cJ(e.map((e,t)=>t),t);return r.map((t,i)=>`${`int ${e[i]} = ${n} / ${r[i]}`}; ${i===r.length-1?`int ${e[i+1]} = ${n} - ${e[i]} * ${r[i]}`:`index -= ${e[i]} * ${r[i]}`};`).join(``)}function uJ(e){let t=xe(e).map(e=>e.toString());return`
  int getFlatIndex(ivec3 coords) {
    return coords.x * ${t[0]} + coords.y * ${t[1]} + coords.z;
  }
`}function dJ(){return`
  int getFlatIndex(ivec3 coords) {
    return coords.x * outShapeStrides[0] + coords.y * outShapeStrides[1] + coords.z;
  }
`}var fJ=`
  const float FLOAT_MAX = 1.70141184e38;
  const float FLOAT_MIN = 1.17549435e-38;

  lowp vec4 encode_float(highp float v) {
    if (isnan(v)) {
      return vec4(255, 255, 255, 255);
    }

    highp float av = abs(v);

    if(av < FLOAT_MIN) {
      return vec4(0.0, 0.0, 0.0, 0.0);
    } else if(v > FLOAT_MAX) {
      return vec4(0.0, 0.0, 128.0, 127.0) / 255.0;
    } else if(v < -FLOAT_MAX) {
      return vec4(0.0, 0.0,  128.0, 255.0) / 255.0;
    }

    highp vec4 c = vec4(0,0,0,0);

    highp float e = floor(log2(av));
    highp float m = exp2(fract(log2(av))) - 1.0;

    c[2] = floor(128.0 * m);
    m -= c[2] / 128.0;
    c[1] = floor(32768.0 * m);
    m -= c[1] / 32768.0;
    c[0] = floor(8388608.0 * m);

    highp float ebias = e + 127.0;
    c[3] = floor(ebias / 2.0);
    ebias -= c[3] * 2.0;
    c[2] += floor(ebias) * 128.0;

    c[3] += 128.0 * step(0.0, -v);

    return c / 255.0;
  }
`;Y();var{getBroadcastDims:pJ}=pE;function mJ(e,t,n){let r=[];if(e.forEach(e=>{let t=C(e.shapeInfo.logicalShape);if(e.shapeInfo.isUniform?r.push(`uniform float ${e.name}${t>1?`[${t}]`:``};`):(r.push(`uniform sampler2D ${e.name};`),r.push(`uniform int offset${e.name};`)),n.enableShapeUniforms){let{uniformShape:t}=nY(n.packedInputs,e.shapeInfo.logicalShape,e.shapeInfo.texShape);switch(t.length){case 1:r.push(`uniform int ${e.name}Shape;`);break;case 2:r.push(`uniform ivec2 ${e.name}Shape;`);break;case 3:r.push(`uniform ivec3 ${e.name}Shape;`);break;case 4:r.push(`uniform ivec4 ${e.name}Shape;`)}r.push(`uniform ivec2 ${e.name}TexShape;`)}}),n.enableShapeUniforms){switch(t.logicalShape.length){case 1:r.push(`uniform int outShape;`);break;case 2:r.push(`uniform ivec2 outShape;`),r.push(`uniform int outShapeStrides;`);break;case 3:r.push(`uniform ivec3 outShape;`),r.push(`uniform ivec2 outShapeStrides;`);break;case 4:r.push(`uniform ivec4 outShape;`),r.push(`uniform ivec3 outShapeStrides;`)}r.push(`uniform ivec2 outTexShape;`)}n.customUniforms&&n.customUniforms.forEach(e=>{r.push(`uniform ${e.type} ${e.name}${e.arrayIndex?`[${e.arrayIndex}]`:``};`)});let i=r.join(`
`),a=e.map(e=>_J(e,t,n.packedInputs,n.enableShapeUniforms)).join(`
`),o=t.texShape,s=aJ(),c=bJ(s),l,u,d=CJ(s);return t.isPacked?(l=vJ(t.logicalShape,o,n.enableShapeUniforms),u=SJ(s)):(l=yJ(t.logicalShape,o,n.enableShapeUniforms),u=xJ(s)),n.packedInputs&&(d+=DJ),[d,c,u,i,l,a,n.userCode].join(`
`)}function hJ(e,t=!1){let n=e.shapeInfo.logicalShape;switch(n.length){case 0:return VJ(e,t);case 1:return UJ(e,t);case 2:return GJ(e,t);case 3:return qJ(e,t);case 4:return YJ(e,t);case 5:return XJ(e);case 6:return ZJ(e);default:throw Error(`${n.length}-D input sampling is not yet supported`)}}function gJ(e,t){switch(e.shapeInfo.logicalShape.length){case 0:return BJ(e);case 1:return HJ(e,t);case 2:return WJ(e,t);case 3:return KJ(e,t);default:return JJ(e,t)}}function _J(e,t,n=!1,r){let i=``;i+=n?gJ(e,r):hJ(e,r);let a=e.shapeInfo.logicalShape,o=t.logicalShape;return a.length<=o.length&&(i+=n?$J(e,t):eY(e,t)),i}function vJ(e,t,n){switch(e.length){case 0:return OJ();case 1:return kJ(e,t,n);case 2:return LJ(e,t,n);case 3:return jJ(e,t,n);default:return NJ(e,t,n)}}function yJ(e,t,n){switch(e.length){case 0:return OJ();case 1:return AJ(e,t,n);case 2:return RJ(e,t,n);case 3:return MJ(e,t,n);case 4:return PJ(e,t,n);case 5:return FJ(e,t);case 6:return IJ(e,t);default:throw Error(`${e.length}-D output sampling is not yet supported`)}}function bJ(e){return`
    float sampleTexture(sampler2D textureSampler, vec2 uv) {
      return ${e.texture2D}(textureSampler, uv).r;
    }
  `}function xJ(e){return`
    void setOutput(float val) {
      ${e.output} = vec4(val, 0, 0, 0);
    }
  `}function SJ(e){return`
    void setOutput(vec4 val) {
      ${e.output} = val;
    }
  `}function CJ(e){return`${e.version}
    precision highp float;
    precision highp int;
    precision highp sampler2D;
    ${e.varyingFs} vec2 resultUV;
    ${e.defineOutput}
    const vec2 halfCR = vec2(0.5, 0.5);

    struct ivec5
    {
      int x;
      int y;
      int z;
      int w;
      int u;
    };

    struct ivec6
    {
      int x;
      int y;
      int z;
      int w;
      int u;
      int v;
    };

    uniform float NAN;
    ${e.defineSpecialNaN}
    ${e.defineSpecialInf}
    ${e.defineRound}

    int imod(int x, int y) {
      return x - y * (x / y);
    }

    int idiv(int a, int b, float sign) {
      int res = a / b;
      int mod = imod(a, b);
      if (sign < 0. && mod != 0) {
        res -= 1;
      }
      return res;
    }

    //Based on the work of Dave Hoskins
    //https://www.shadertoy.com/view/4djSRW
    #define HASHSCALE1 443.8975
    float random(float seed){
      vec2 p = resultUV * seed;
      vec3 p3  = fract(vec3(p.xyx) * HASHSCALE1);
      p3 += dot(p3, p3.yzx + 19.19);
      return fract((p3.x + p3.y) * p3.z);
    }

    ${wJ}
    ${TJ}
    ${EJ}
  `}var wJ=`
vec2 uvFromFlat(int texNumR, int texNumC, int index) {
  int texR = index / texNumC;
  int texC = index - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
vec2 packedUVfrom1D(int texNumR, int texNumC, int index) {
  int texelIndex = index / 2;
  int texR = texelIndex / texNumC;
  int texC = texelIndex - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
`,TJ=`
vec2 packedUVfrom2D(int texelsInLogicalRow, int texNumR,
  int texNumC, int row, int col) {
  int texelIndex = (row / 2) * texelsInLogicalRow + (col / 2);
  int texR = texelIndex / texNumC;
  int texC = texelIndex - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
`,EJ=`
vec2 packedUVfrom3D(int texNumR, int texNumC,
    int texelsInBatch, int texelsInLogicalRow, int b,
    int row, int col) {
  int index = b * texelsInBatch + (row / 2) * texelsInLogicalRow + (col / 2);
  int texR = index / texNumC;
  int texC = index - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
`,DJ=`
  float getChannel(vec4 frag, vec2 innerDims) {
    vec2 modCoord = mod(innerDims, 2.);
    return modCoord.x == 0. ?
      (modCoord.y == 0. ? frag.r : frag.g) :
      (modCoord.y == 0. ? frag.b : frag.a);
  }
  float getChannel(vec4 frag, int dim) {
    float modCoord = mod(float(dim), 2.);
    return modCoord == 0. ? frag.r : frag.g;
  }
`;function OJ(){return`
    int getOutputCoords() {
      return 0;
    }
  `}function kJ(e,t,n){let r=[Math.ceil(t[0]/2),Math.ceil(t[1]/2)];return r[0]===1?n?`
      int getOutputCoords() {
        return 2 * int(resultUV.x * ceil(float(outTexShape[1]) / 2.0));
      }
    `:`
      int getOutputCoords() {
        return 2 * int(resultUV.x * ${r[1]}.0);
      }
    `:r[1]===1?n?`
      int getOutputCoords() {
        return 2 * int(resultUV.y * ceil(float(outTexShape[0]) / 2.0));
      }
    `:`
      int getOutputCoords() {
        return 2 * int(resultUV.y * ${r[0]}.0);
      }
    `:n?`
    int getOutputCoords() {
      ivec2 packedTexShape = ivec2(ceil(float(outTexShape[0]) / 2.0), ceil(float(outTexShape[1]) / 2.0));
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(packedTexShape[0], packedTexShape[1]));
      return 2 * (resTexRC.x * packedTexShape[1] + resTexRC.y);
    }
  `:`
    int getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${r[0]}, ${r[1]}));
      return 2 * (resTexRC.x * ${r[1]} + resTexRC.y);
    }
  `}function AJ(e,t,n){return t[0]===1?n?`
      int getOutputCoords() {
        return int(resultUV.x * float(outTexShape[1]));
      }
    `:`
      int getOutputCoords() {
        return int(resultUV.x * ${t[1]}.0);
      }
    `:t[1]===1?n?`
      int getOutputCoords() {
        return int(resultUV.y * float(outTexShape[0]));
      }
    `:`
      int getOutputCoords() {
        return int(resultUV.y * ${t[0]}.0);
      }
    `:n?`
    int getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(outTexShape[0], outTexShape[1]));
      return resTexRC.x * outTexShape[1] + resTexRC.y;
    }
  `:`
    int getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${t[0]}, ${t[1]}));
      return resTexRC.x * ${t[1]} + resTexRC.y;
    }
  `}function jJ(e,t,n){if(n)return`
    ivec3 getOutputCoords() {
      ivec2 packedTexShape = ivec2(ceil(float(outTexShape[0]) / 2.0), ceil(float(outTexShape[1]) / 2.0));
      int texelsInLogicalRow = int(ceil(float(outShape[2]) / 2.0));
      int texelsInBatch = texelsInLogicalRow * int(ceil(float(outShape[1]) / 2.0));
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(packedTexShape[0], packedTexShape[1]));
      int index = resTexRC.x * packedTexShape[1] + resTexRC.y;

      int b = index / texelsInBatch;
      index -= b * texelsInBatch;

      int r = 2 * (index / texelsInLogicalRow);
      int c = imod(index, texelsInLogicalRow) * 2;

      return ivec3(b, r, c);
    }
  `;let r=[Math.ceil(t[0]/2),Math.ceil(t[1]/2)],i=Math.ceil(e[2]/2),a=i*Math.ceil(e[1]/2);return`
    ivec3 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${r[0]}, ${r[1]}));
      int index = resTexRC.x * ${r[1]} + resTexRC.y;

      int b = index / ${a};
      index -= b * ${a};

      int r = 2 * (index / ${i});
      int c = imod(index, ${i}) * 2;

      return ivec3(b, r, c);
    }
  `}function MJ(e,t,n){if(n)return`
  ivec3 getOutputCoords() {
    ivec2 resTexRC = ivec2(resultUV.yx *
                           vec2(outTexShape[0], outTexShape[1]));
    int index = resTexRC.x * outTexShape[1] + resTexRC.y;
    ${sJ([`r`,`c`,`d`],e)}
    return ivec3(r, c, d);
  }
`;let r=oJ([`r`,`c`,`d`],e);return`
    ivec3 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${t[0]}, ${t[1]}));
      int index = resTexRC.x * ${t[1]} + resTexRC.y;
      ${r}
      return ivec3(r, c, d);
    }
  `}function NJ(e,t,n){if(n)return`
    ivec4 getOutputCoords() {
      ivec2 packedTexShape = ivec2(ceil(float(outTexShape[0]) / 2.0), ceil(float(outTexShape[1]) / 2.0));
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(packedTexShape[0], packedTexShape[1]));
      int index = resTexRC.x * packedTexShape[1] + resTexRC.y;

      int texelsInLogicalRow = int(ceil(float(outShape[3]) / 2.0));
      int texelsInBatch = texelsInLogicalRow * int(ceil(float(outShape[2]) / 2.0));
      int texelsInBatchN = texelsInBatch * outShape[1];

      int b2 = index / texelsInBatchN;
      index -= b2 * texelsInBatchN;

      int b = index / texelsInBatch;
      index -= b * texelsInBatch;

      int r = 2 * (index / texelsInLogicalRow);
      int c = imod(index, texelsInLogicalRow) * 2;

      return ivec4(b2, b, r, c);
    }
  `;let r=[Math.ceil(t[0]/2),Math.ceil(t[1]/2)],i=Math.ceil(e[e.length-1]/2),a=i*Math.ceil(e[e.length-2]/2),o=a,s=``,c=`b, r, c`;for(let t=2;t<e.length-1;t++)o*=e[e.length-t-1],s=`
      int b${t} = index / ${o};
      index -= b${t} * ${o};
    `+s,c=`b${t}, `+c;return`
    ivec${e.length} getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${r[0]}, ${r[1]}));
      int index = resTexRC.x * ${r[1]} + resTexRC.y;

      ${s}

      int b = index / ${a};
      index -= b * ${a};

      int r = 2 * (index / ${i});
      int c = imod(index, ${i}) * 2;

      return ivec${e.length}(${c});
    }
  `}function PJ(e,t,n){if(n)return`
    ivec4 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
        vec2(outTexShape[0], outTexShape[1]));
      int index = resTexRC.x * outTexShape[1] + resTexRC.y;
      ${sJ([`r`,`c`,`d`,`d2`],e)}
      return ivec4(r, c, d, d2);
    }
  `;let r=oJ([`r`,`c`,`d`,`d2`],e);return`
    ivec4 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
        vec2(${t[0]}, ${t[1]}));
      int index = resTexRC.x * ${t[1]} + resTexRC.y;
      ${r}
      return ivec4(r, c, d, d2);
    }
  `}function FJ(e,t){let n=oJ([`r`,`c`,`d`,`d2`,`d3`],e);return`
    ivec5 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx * vec2(${t[0]},
                             ${t[1]}));

      int index = resTexRC.x * ${t[1]} + resTexRC.y;

      ${n}

      ivec5 outShape = ivec5(r, c, d, d2, d3);
      return outShape;
    }
  `}function IJ(e,t){let n=oJ([`r`,`c`,`d`,`d2`,`d3`,`d4`],e);return`
    ivec6 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
        vec2(${t[0]}, ${t[1]}));
      int index = resTexRC.x * ${t[1]} + resTexRC.y;

      ${n}

      ivec6 result = ivec6(r, c, d, d2, d3, d4);
      return result;
    }
  `}function LJ(e,t,n){let r=[Math.ceil(t[0]/2),Math.ceil(t[1]/2)];if(T(e,t))return n?`
      ivec2 getOutputCoords() {
        ivec2 packedTexShape = ivec2(ceil(float(outTexShape[0]) / 2.0), ceil(float(outTexShape[1]) / 2.0));
        return 2 * ivec2(resultUV.yx * vec2(packedTexShape[0], packedTexShape[1]));
      }
    `:`
      ivec2 getOutputCoords() {
        return 2 * ivec2(resultUV.yx * vec2(${r[0]}, ${r[1]}));
      }
    `;let i=Math.ceil(e[1]/2);return n?`
    ivec2 getOutputCoords() {
      ivec2 packedTexShape = ivec2(ceil(float(outTexShape[0]) / 2.0), ceil(float(outTexShape[1]) / 2.0));
      int texelsInLogicalRow = int(ceil(float(outShape[1]) / 2.0));
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(packedTexShape[0], packedTexShape[1]));

      int index = resTexRC.x * packedTexShape[1] + resTexRC.y;
      int r = 2 * (index / texelsInLogicalRow);
      int c = imod(index, texelsInLogicalRow) * 2;

      return ivec2(r, c);
    }
  `:`
    ivec2 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${r[0]}, ${r[1]}));

      int index = resTexRC.x * ${r[1]} + resTexRC.y;
      int r = 2 * (index / ${i});
      int c = imod(index, ${i}) * 2;

      return ivec2(r, c);
    }
  `}function RJ(e,t,n){return T(e,t)?n?`
      ivec2 getOutputCoords() {
        return ivec2(resultUV.yx * vec2(outTexShape[0], outTexShape[1]));
      }
    `:`
      ivec2 getOutputCoords() {
        return ivec2(resultUV.yx * vec2(${t[0]}, ${t[1]}));
      }
    `:e[1]===1?n?`
      ivec2 getOutputCoords() {
        ivec2 resTexRC = ivec2(resultUV.yx *
                               vec2(outTexShape[0], outTexShape[1]));
        int index = resTexRC.x * outTexShape[1] + resTexRC.y;
        return ivec2(index, 0);
      }
    `:`
      ivec2 getOutputCoords() {
        ivec2 resTexRC = ivec2(resultUV.yx *
                               vec2(${t[0]}, ${t[1]}));
        int index = resTexRC.x * ${t[1]} + resTexRC.y;
        return ivec2(index, 0);
      }
    `:e[0]===1?n?`
      ivec2 getOutputCoords() {
        ivec2 resTexRC = ivec2(resultUV.yx *
                               vec2(outTexShape[0], outTexShape[1]));
        int index = resTexRC.x * outTexShape[1] + resTexRC.y;
        return ivec2(0, index);
      }
    `:`
      ivec2 getOutputCoords() {
        ivec2 resTexRC = ivec2(resultUV.yx *
                               vec2(${t[0]}, ${t[1]}));
        int index = resTexRC.x * ${t[1]} + resTexRC.y;
        return ivec2(0, index);
      }
    `:n?`
    ivec2 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(outTexShape[0], outTexShape[1]));
      int index = resTexRC.x * outTexShape[1] + resTexRC.y;
      int r = index / outShape[1];
      int c = index - r * outShape[1];
      return ivec2(r, c);
    }
  `:`
    ivec2 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${t[0]}, ${t[1]}));
      int index = resTexRC.x * ${t[1]} + resTexRC.y;
      int r = index / ${e[1]};
      int c = index - r * ${e[1]};
      return ivec2(r, c);
    }
  `}function zJ(e){return`offset${e}`}function BJ(e){let t=e.name;return`
    vec4 ${`get`+t.charAt(0).toUpperCase()+t.slice(1)}() {
      return ${aJ().texture2D}(${t}, halfCR);
    }
  `}function VJ(e,t){let n=e.name,r=`get`+n.charAt(0).toUpperCase()+n.slice(1);if(e.shapeInfo.isUniform)return`float ${r}() {return ${n};}`;let[i,a]=e.shapeInfo.texShape;if(i===1&&a===1)return`
      float ${r}() {
        return sampleTexture(${n}, halfCR);
      }
    `;let o=zJ(n);if(t)return`
    float ${r}() {
      vec2 uv = uvFromFlat(${n}TexShape[0], ${n}TexShape[1], ${o});
      return sampleTexture(${n}, uv);
    }
  `;let[s,c]=e.shapeInfo.texShape;return`
    float ${r}() {
      vec2 uv = uvFromFlat(${s}, ${c}, ${o});
      return sampleTexture(${n}, uv);
    }
  `}function HJ(e,t){let n=e.name,r=`get`+n.charAt(0).toUpperCase()+n.slice(1),i=e.shapeInfo.texShape,a=aJ();if(t)return`
    vec4 ${r}(int index) {
      ivec2 packedTexShape = ivec2(ceil(float(${n}TexShape[0]) / 2.0), ceil(float(${n}TexShape[1]) / 2.0));
      vec2 uv = packedUVfrom1D(
        packedTexShape[0], packedTexShape[1], index);
      return ${a.texture2D}(${n}, uv);
    }
  `;let o=[Math.ceil(i[0]/2),Math.ceil(i[1]/2)];return`
    vec4 ${r}(int index) {
      vec2 uv = packedUVfrom1D(
        ${o[0]}, ${o[1]}, index);
      return ${a.texture2D}(${n}, uv);
    }
  `}function UJ(e,t){let n=e.name,r=`get`+n.charAt(0).toUpperCase()+n.slice(1);if(e.shapeInfo.isUniform)return`
      float ${r}(int index) {
        ${QJ(e)}
      }
    `;let i=e.shapeInfo.texShape,a=i[0],o=i[1];if(o===1&&a===1)return`
      float ${r}(int index) {
        return sampleTexture(${n}, halfCR);
      }
    `;let s=zJ(n);return o===1?t?`
      float ${r}(int index) {
        vec2 uv = vec2(0.5, (float(index + ${s}) + 0.5) / float(${n}TexShape[0]));
        return sampleTexture(${n}, uv);
      }
    `:`
      float ${r}(int index) {
        vec2 uv = vec2(0.5, (float(index + ${s}) + 0.5) / ${a}.0);
        return sampleTexture(${n}, uv);
      }
    `:a===1?t?`
      float ${r}(int index) {
        vec2 uv = vec2((float(index + ${s}) + 0.5) / float(${n}TexShape[1]), 0.5);
        return sampleTexture(${n}, uv);
      }
    `:`
      float ${r}(int index) {
        vec2 uv = vec2((float(index + ${s}) + 0.5) / ${o}.0, 0.5);
        return sampleTexture(${n}, uv);
      }
    `:t?`
    float ${r}(int index) {
      vec2 uv = uvFromFlat(${n}TexShape[0], ${n}TexShape[1], index + ${s});
      return sampleTexture(${n}, uv);
    }
  `:`
    float ${r}(int index) {
      vec2 uv = uvFromFlat(${a}, ${o}, index + ${s});
      return sampleTexture(${n}, uv);
    }
  `}function WJ(e,t){let n=e.shapeInfo.logicalShape,r=e.name,i=`get`+r.charAt(0).toUpperCase()+r.slice(1),a=e.shapeInfo.texShape,o=a[0],s=a[1],c=aJ();if(a!=null&&T(n,a))return t?`
      vec4 ${i}(int row, int col) {
        vec2 uv = (vec2(col, row) + halfCR) / vec2(${r}TexShape[1], ${r}TexShape[0]);

        return ${c.texture2D}(${r}, uv);
      }
    `:`
      vec4 ${i}(int row, int col) {
        vec2 uv = (vec2(col, row) + halfCR) / vec2(${s}.0, ${o}.0);

        return ${c.texture2D}(${r}, uv);
      }
    `;if(t)return`
    vec4 ${i}(int row, int col) {
      ivec2 packedTexShape = ivec2(ceil(float(${r}TexShape[0]) / 2.0), ceil(float(${r}TexShape[1]) / 2.0));
      int valuesPerRow = int(ceil(float(${r}Shape[1]) / 2.0));
      vec2 uv = packedUVfrom2D(valuesPerRow, packedTexShape[0], packedTexShape[1], row, col);
      return ${c.texture2D}(${r}, uv);
    }
  `;let l=[Math.ceil(a[0]/2),Math.ceil(a[1]/2)];return`
    vec4 ${i}(int row, int col) {
      vec2 uv = packedUVfrom2D(${Math.ceil(n[1]/2)}, ${l[0]}, ${l[1]}, row, col);
      return ${c.texture2D}(${r}, uv);
    }
  `}function GJ(e,t){let n=e.shapeInfo.logicalShape,r=e.name,i=`get`+r.charAt(0).toUpperCase()+r.slice(1),a=e.shapeInfo.texShape;if(a!=null&&T(n,a)){if(t)return`
      float ${i}(int row, int col) {
        vec2 uv = (vec2(col, row) + halfCR) / vec2(${r}TexShape[1], ${r}TexShape[0]);
        return sampleTexture(${r}, uv);
      }
    `;let e=a[0];return`
    float ${i}(int row, int col) {
      vec2 uv = (vec2(col, row) + halfCR) / vec2(${a[1]}.0, ${e}.0);
      return sampleTexture(${r}, uv);
    }
  `}let{newShape:o,keptDims:s}=oe(n),c=o;if(c.length<n.length)return`
      ${hJ(rY(e,c),t)}
      float ${i}(int row, int col) {
        return ${i}(${iY([`row`,`col`],s)});
      }
    `;if(e.shapeInfo.isUniform)return`
      float ${i}(int row, int col) {
        int index = round(dot(vec2(row, col), vec2(${n[1]}, 1)));
        ${QJ(e)}
      }
    `;let l=a[0],u=a[1],d=zJ(r);return u===1?t?`
      float ${i}(int row, int col) {
        float index = dot(vec3(row, col, ${d}), vec3(${r}Shape[1], 1, 1));
        vec2 uv = vec2(0.5, (index + 0.5) / float(${r}TexShape[0]));
        return sampleTexture(${r}, uv);
      }
    `:`
    float ${i}(int row, int col) {
      float index = dot(vec3(row, col, ${d}), vec3(${n[1]}, 1, 1));
      vec2 uv = vec2(0.5, (index + 0.5) / ${l}.0);
      return sampleTexture(${r}, uv);
    }
  `:l===1?t?`
      float ${i}(int row, int col) {
        float index = dot(vec3(row, col, ${d}), vec3(${r}Shape[1], 1, 1));
        vec2 uv = vec2((index + 0.5) / float(${r}TexShape[1]), 0.5);
        return sampleTexture(${r}, uv);
      }
    `:`
    float ${i}(int row, int col) {
      float index = dot(vec3(row, col, ${d}), vec3(${n[1]}, 1, 1));
      vec2 uv = vec2((index + 0.5) / ${u}.0, 0.5);
      return sampleTexture(${r}, uv);
    }
  `:t?`
      float ${i}(int row, int col) {
        // Explicitly use integer operations as dot() only works on floats.
        int index = row * ${r}Shape[1] + col + ${d};
        vec2 uv = uvFromFlat(${r}TexShape[0], ${r}TexShape[1], index);
        return sampleTexture(${r}, uv);
      }
    `:`
  float ${i}(int row, int col) {
    // Explicitly use integer operations as dot() only works on floats.
    int index = row * ${n[1]} + col + ${d};
    vec2 uv = uvFromFlat(${l}, ${u}, index);
    return sampleTexture(${r}, uv);
  }
`}function KJ(e,t){let n=e.shapeInfo.logicalShape,r=e.name,i=`get`+r.charAt(0).toUpperCase()+r.slice(1),a=e.shapeInfo.texShape,o=[Math.ceil(a[0]/2),Math.ceil(a[1]/2)];if(n[0]===1)return`
        ${gJ(rY(e,n.slice(1)),t)}
        vec4 ${i}(int b, int row, int col) {
          return ${i}(${iY([`b`,`row`,`col`],[1,2])});
        }
      `;let s=aJ();if(t)return`
    vec4 ${i}(int b, int row, int col) {
      ivec2 packedTexShape = ivec2(ceil(float(${r}TexShape[0]) / 2.0), ceil(float(${r}TexShape[1]) / 2.0));
      int valuesPerRow = int(ceil(float(${r}Shape[2]) / 2.0));
      int texelsInBatch = valuesPerRow * int(ceil(float(${r}Shape[1]) / 2.0));
      vec2 uv = packedUVfrom3D(
        packedTexShape[0], packedTexShape[1], texelsInBatch, valuesPerRow, b, row, col);
      return ${s.texture2D}(${r}, uv);
    }
  `;let c=o[0],l=o[1],u=Math.ceil(n[2]/2);return`
    vec4 ${i}(int b, int row, int col) {
      vec2 uv = packedUVfrom3D(
        ${c}, ${l}, ${u*Math.ceil(n[1]/2)}, ${u}, b, row, col);
      return ${s.texture2D}(${r}, uv);
    }
  `}function qJ(e,t){let n=e.shapeInfo.logicalShape,r=e.name,i=`get`+r.charAt(0).toUpperCase()+r.slice(1),a=n[1]*n[2],o=n[2],{newShape:s,keptDims:c}=oe(n),l=s;if(l.length<n.length)return`
        ${hJ(rY(e,l),t)}
        float ${i}(int row, int col, int depth) {
          return ${i}(${iY([`row`,`col`,`depth`],c)});
        }
      `;if(e.shapeInfo.isUniform)return`
      float ${i}(int row, int col, int depth) {
        int index = round(dot(vec3(row, col, depth),
                          vec3(${a}, ${o}, 1)));
        ${QJ(e)}
      }
    `;let u=e.shapeInfo.texShape,d=u[0],f=u[1],p=e.shapeInfo.flatOffset;if(f===a&&p==null)return t?`
      float ${i}(int row, int col, int depth) {
        int stride1 = ${r}Shape[2];
        float texR = float(row);
        float texC = dot(vec2(col, depth), vec2(stride1, 1));
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(${r}TexShape[1], ${r}TexShape[0]);
        return sampleTexture(${r}, uv);
      }
    `:`
        float ${i}(int row, int col, int depth) {
          float texR = float(row);
          float texC = dot(vec2(col, depth), vec2(${o}, 1));
          vec2 uv = (vec2(texC, texR) + halfCR) /
                     vec2(${f}.0, ${d}.0);
          return sampleTexture(${r}, uv);
        }
      `;if(f===o&&p==null)return t?`
      float ${i}(int row, int col, int depth) {
        float texR = dot(vec2(row, col), vec2(${r}Shape[1], 1));
        float texC = float(depth);
        vec2 uv = (vec2(texC, texR) + halfCR) / vec2(${r}TexShape[1], ${r}TexShape[0]);
        return sampleTexture(${r}, uv);
      }
    `:`
    float ${i}(int row, int col, int depth) {
      float texR = dot(vec2(row, col), vec2(${n[1]}, 1));
      float texC = float(depth);
      vec2 uv = (vec2(texC, texR) + halfCR) / vec2(${f}.0, ${d}.0);
      return sampleTexture(${r}, uv);
    }
  `;let m=zJ(r);return t?`
    float ${i}(int row, int col, int depth) {
      // Explicitly use integer operations as dot() only works on floats.
      int stride0 = ${r}Shape[1] * ${r}Shape[2];
      int stride1 = ${r}Shape[2];
      int index = row * stride0 + col * stride1 + depth + ${m};
      vec2 uv = uvFromFlat(${r}TexShape[0], ${r}TexShape[1], index);
      return sampleTexture(${r}, uv);
    }
    `:`
      float ${i}(int row, int col, int depth) {
        // Explicitly use integer operations as dot() only works on floats.
        int index = row * ${a} + col * ${o} + depth + ${m};
        vec2 uv = uvFromFlat(${d}, ${f}, index);
        return sampleTexture(${r}, uv);
      }
  `}function JJ(e,t){let n=e.name,r=`get`+n.charAt(0).toUpperCase()+n.slice(1),i=aJ();if(t)return`
    vec4 ${r}(int b2, int b, int row, int col) {
      int valuesPerRow = int(ceil(float(${n}Shape[3]) / 2.0));
      int texelsInBatch = valuesPerRow * int(ceil(float(${n}Shape[2]) / 2.0));
      int index = b * texelsInBatch + (row / 2) * valuesPerRow + (col / 2);
      texelsInBatch *= ${n}Shape[1];
      index = b2 * texelsInBatch + index;
      ivec2 packedTexShape = ivec2(ceil(float(${n}TexShape[0]) / 2.0), ceil(float(${n}TexShape[1]) / 2.0));
      int texR = index / packedTexShape[1];
      int texC = index - texR * packedTexShape[1];
      vec2 uv = (vec2(texC, texR) + halfCR) / vec2(packedTexShape[1], packedTexShape[0]); return ${i.texture2D}(${n}, uv);
    }
  `;let a=e.shapeInfo.logicalShape,o=a.length,s=e.shapeInfo.texShape,c=[Math.ceil(s[0]/2),Math.ceil(s[1]/2)],l=c[0],u=c[1],d=Math.ceil(a[o-1]/2),f=d*Math.ceil(a[o-2]/2),p=`int b, int row, int col`,m=`b * ${f} + (row / 2) * ${d} + (col / 2)`;for(let e=2;e<o-1;e++)p=`int b${e}, `+p,f*=a[o-e-1],m=`b${e} * ${f} + `+m;return`
    vec4 ${r}(${p}) {
      int index = ${m};
      int texR = index / ${u};
      int texC = index - texR * ${u};
      vec2 uv = (vec2(texC, texR) + halfCR) / vec2(${u}, ${l});
      return ${i.texture2D}(${n}, uv);
    }
  `}function YJ(e,t){let n=e.shapeInfo.logicalShape,r=e.name,i=`get`+r.charAt(0).toUpperCase()+r.slice(1),a=n[3],o=n[2]*a,s=n[1]*o,{newShape:c,keptDims:l}=oe(n);if(c.length<n.length)return`
      ${hJ(rY(e,c),t)}
      float ${i}(int row, int col, int depth, int depth2) {
        return ${i}(${iY([`row`,`col`,`depth`,`depth2`],l)});
      }
    `;if(e.shapeInfo.isUniform)return`
      float ${i}(int row, int col, int depth, int depth2) {
        int index = round(dot(vec4(row, col, depth, depth2),
                          vec4(${s}, ${o}, ${a}, 1)));
        ${QJ(e)}
      }
    `;let u=e.shapeInfo.flatOffset,d=e.shapeInfo.texShape,f=d[0],p=d[1],m=`int stride2 = ${r}Shape[3];`,h=`int stride1 = ${r}Shape[2] * stride2;`,g=`int stride0 = ${r}Shape[1] * stride1;`;if(p===s&&u==null)return t?`
      float ${i}(int row, int col, int depth, int depth2) {
        ${m}
        ${h}
        float texR = float(row);
        float texC =
            dot(vec3(col, depth, depth2),
                vec3(stride1, stride2, 1));
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(${r}TexShape[1], ${r}TexShape[0]);
        return sampleTexture(${r}, uv);
      }
    `:`
      float ${i}(int row, int col, int depth, int depth2) {
        float texR = float(row);
        float texC =
            dot(vec3(col, depth, depth2),
                vec3(${o}, ${a}, 1));
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(${p}.0, ${f}.0);
        return sampleTexture(${r}, uv);
      }
    `;if(p===a&&u==null)return t?`
      float ${i}(int row, int col, int depth, int depth2) {
        float texR = dot(vec3(row, col, depth),
                         vec3(${r}Shape[1] * ${r}Shape[2], ${r}Shape[2], 1));
        float texC = float(depth2);
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(${r}TexShape[1], ${r}TexShape[0]);
        return sampleTexture(${r}, uv);
      }
    `:`
      float ${i}(int row, int col, int depth, int depth2) {
        float texR = dot(vec3(row, col, depth),
                         vec3(${n[1]*n[2]}, ${n[2]}, 1));
        float texC = float(depth2);
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(${p}.0, ${f}.0);
        return sampleTexture(${r}, uv);
      }
    `;let _=zJ(r);return t?`
    float ${i}(int row, int col, int depth, int depth2) {
      // Explicitly use integer operations as dot() only works on floats.
      ${m}
      ${h}
      ${g}
      int index = row * stride0 + col * stride1 +
          depth * stride2 + depth2;
      vec2 uv = uvFromFlat(${r}TexShape[0], ${r}TexShape[1], index + ${_});
      return sampleTexture(${r}, uv);
    }
  `:`
    float ${i}(int row, int col, int depth, int depth2) {
      // Explicitly use integer operations as dot() only works on floats.
      int index = row * ${s} + col * ${o} +
          depth * ${a} + depth2;
      vec2 uv = uvFromFlat(${f}, ${p}, index + ${_});
      return sampleTexture(${r}, uv);
    }
  `}function XJ(e){let t=e.shapeInfo.logicalShape,n=e.name,r=`get`+n.charAt(0).toUpperCase()+n.slice(1),i=t[4],a=t[3]*i,o=t[2]*a,s=t[1]*o,{newShape:c,keptDims:l}=oe(t);if(c.length<t.length)return`
      ${hJ(rY(e,c))}
      float ${r}(int row, int col, int depth, int depth2, int depth3) {
        return ${r}(${iY([`row`,`col`,`depth`,`depth2`,`depth3`],l)});
      }
    `;if(e.shapeInfo.isUniform)return`
      float ${r}(int row, int col, int depth, int depth2, int depth3) {
        float index = dot(
          vec4(row, col, depth, depth2),
          vec4(${s}, ${o}, ${a}, ${i})) +
          depth3;
        ${QJ(e)}
      }
    `;let u=e.shapeInfo.flatOffset,d=e.shapeInfo.texShape,f=d[0],p=d[1];return p===s&&u==null?`
      float ${r}(int row, int col, int depth, int depth2, int depth3) {
        int texR = row;
        float texC = dot(vec4(col, depth, depth2, depth3),
                         vec4(${o}, ${a}, ${i}, 1));
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(${p}.0, ${f}.0);
        return sampleTexture(${n}, uv);
      }
    `:p===i&&u==null?`
      float ${r}(int row, int col, int depth, int depth2, int depth3) {
        float texR = dot(
          vec4(row, col, depth, depth2),
          vec4(${t[1]*t[2]*t[3]},
               ${t[2]*t[3]}, ${t[3]}, 1));
        int texC = depth3;
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(${p}.0, ${f}.0);
        return sampleTexture(${n}, uv);
      }
    `:`
    float ${r}(int row, int col, int depth, int depth2, int depth3) {
      // Explicitly use integer operations as dot() only works on floats.
      int index = row * ${s} + col * ${o} + depth * ${a} +
          depth2 * ${i} + depth3 + ${zJ(n)};
      vec2 uv = uvFromFlat(${f}, ${p}, index);
      return sampleTexture(${n}, uv);
    }
  `}function ZJ(e){let t=e.shapeInfo.logicalShape,n=e.name,r=`get`+n.charAt(0).toUpperCase()+n.slice(1),{newShape:i,keptDims:a}=oe(t);if(i.length<t.length)return`
      ${hJ(rY(e,i))}
      float ${r}(int row, int col, int depth,
                    int depth2, int depth3, int depth4) {
        return ${r}(${iY([`row`,`col`,`depth`,`depth2`,`depth3`,`depth4`],a)});
      }
    `;let o=t[5],s=t[4]*o,c=t[3]*s,l=t[2]*c,u=t[1]*l;if(e.shapeInfo.isUniform)return`
      float ${r}(int row, int col, int depth,
                  int depth2, int depth3, int depth4) {
        int index = round(dot(
          vec4(row, col, depth, depth2),
          vec4(${u}, ${l}, ${c}, ${s})) +
          dot(
            vec2(depth3, depth4),
            vec2(${o}, 1)));
        ${QJ(e)}
      }
    `;let d=e.shapeInfo.flatOffset,f=e.shapeInfo.texShape,p=f[0],m=f[1];return m===u&&d==null?`
      float ${r}(int row, int col, int depth,
                    int depth2, int depth3, int depth4) {
        int texR = row;
        float texC = dot(vec4(col, depth, depth2, depth3),
          vec4(${l}, ${c}, ${s}, ${o})) +
               float(depth4);
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(${m}.0, ${p}.0);
        return sampleTexture(${n}, uv);
      }
    `:m===o&&d==null?`
      float ${r}(int row, int col, int depth,
                    int depth2, int depth3, int depth4) {
        float texR = dot(vec4(row, col, depth, depth2),
          vec4(${t[1]*t[2]*t[3]*t[4]},
               ${t[2]*t[3]*t[4]},
               ${t[3]*t[4]},
               ${t[4]})) + float(depth3);
        int texC = depth4;
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(${m}.0, ${p}.0);
        return sampleTexture(${n}, uv);
      }
    `:`
    float ${r}(int row, int col, int depth,
                  int depth2, int depth3, int depth4) {
      // Explicitly use integer operations as dot() only works on floats.
      int index = row * ${u} + col * ${l} + depth * ${c} +
          depth2 * ${s} + depth3 * ${o} + depth4 + ${zJ(n)};
      vec2 uv = uvFromFlat(${p}, ${m}, index);
      return sampleTexture(${n}, uv);
    }
  `}function QJ(e){let t=e.name,n=C(e.shapeInfo.logicalShape);return n<2?`return ${t};`:`
    for (int i = 0; i < ${n}; i++) {
      if (i == index) {
        return ${t}[i];
      }
    }
  `}function $J(e,t){let n=e.name,r=n.charAt(0).toUpperCase()+n.slice(1),i=`get`+r+`AtOutCoords`,a=e.shapeInfo.logicalShape.length,o=t.logicalShape.length,s=pJ(e.shapeInfo.logicalShape,t.logicalShape),c=tY(o),l=o-a,u,d=[`x`,`y`,`z`,`w`,`u`,`v`];u=a===0?``:o<2&&s.length>=1?`coords = 0;`:s.map(e=>`coords.${d[e+l]} = 0;`).join(`
`);let f=``;f=o<2&&a>0?`coords`:e.shapeInfo.logicalShape.map((e,t)=>`coords.${d[t+l]}`).join(`, `);let p=`return outputValue;`,m=C(e.shapeInfo.logicalShape)===1,h=C(t.logicalShape)===1;if(a===1&&!m&&!h)p=`
      return vec4(outputValue.xy, outputValue.xy);
    `;else if(m&&!h)p=o===1?`
        return vec4(outputValue.x, outputValue.x, 0., 0.);
      `:`
        return vec4(outputValue.x);
      `;else if(s.length){let e=a-2,t=a-1;s.indexOf(e)>-1&&s.indexOf(t)>-1?p=`return vec4(outputValue.x);`:s.indexOf(e)>-1?p=`return vec4(outputValue.x, outputValue.y, outputValue.x, outputValue.y);`:s.indexOf(t)>-1&&(p=`return vec4(outputValue.xx, outputValue.zz);`)}return`
    vec4 ${i}() {
      ${c} coords = getOutputCoords();
      ${u}
      vec4 outputValue = get${r}(${f});
      ${p}
    }
  `}function eY(e,t){let n=e.name,r=n.charAt(0).toUpperCase()+n.slice(1),i=`get`+r+`AtOutCoords`,a=t.texShape,o=e.shapeInfo.texShape,s=e.shapeInfo.logicalShape.length,c=t.logicalShape.length;if(!e.shapeInfo.isUniform&&s===c&&e.shapeInfo.flatOffset==null&&T(o,a))return`
      float ${i}() {
        return sampleTexture(${n}, resultUV);
      }
    `;let l=tY(c),u=pJ(e.shapeInfo.logicalShape,t.logicalShape),d=c-s,f,p=[`x`,`y`,`z`,`w`,`u`,`v`];f=s===0?``:c<2&&u.length>=1?`coords = 0;`:u.map(e=>`coords.${p[e+d]} = 0;`).join(`
`);let m=``;return m=c<2&&s>0?`coords`:e.shapeInfo.logicalShape.map((e,t)=>`coords.${p[t+d]}`).join(`, `),`
    float ${i}() {
      ${l} coords = getOutputCoords();
      ${f}
      return get${r}(${m});
    }
  `}function tY(e){if(e<=1)return`int`;if(e===2)return`ivec2`;if(e===3)return`ivec3`;if(e===4)return`ivec4`;if(e===5)return`ivec5`;if(e===6)return`ivec6`;throw Error(`GPU for rank ${e} is not yet supported`)}function nY(e,t,n){let{newShape:r,keptDims:i}=oe(t),a=t.length,o=e&&a===3&&t[0]===1,s=o?t.slice(1):r,c=!e&&a>1&&!T(t,n)&&r.length<a||o;return{useSqueezeShape:c,uniformShape:c?s:t,keptDims:i}}function rY(e,t){let n=JSON.parse(JSON.stringify(e));return n.shapeInfo.logicalShape=t,n}function iY(e,t){return t.map(t=>e[t]).join(`, `)}Y();function aY(e,t,n,r){let i=n.map((e,n)=>{let r={logicalShape:e.shape,texShape:e.isUniform?null:e.texData.texShape,isUniform:e.isUniform,isPacked:!e.isUniform&&e.texData.isPacked,flatOffset:null};return e.texData!=null&&e.texData.slice!=null&&e.texData.slice.flatOffset>0&&(r.flatOffset=e.texData.slice.flatOffset),{name:t.variableNames[n],shapeInfo:r}}),a=i.map(e=>e.shapeInfo),o={logicalShape:r.shape,texShape:r.texData.texShape,isUniform:!1,isPacked:r.texData.isPacked,flatOffset:null},s=mJ(i,o,t),c=_q(e.gl,s),l=e.createProgram(c);return O().get(`ENGINE_COMPILE_ONLY`)?{program:t,fragmentShader:c,source:s,webGLProgram:l,inShapeInfos:a,outShapeInfo:o,uniformLocations:null,customUniformLocations:null,infLoc:null,nanLoc:null,inShapesLocations:null,inTexShapesLocations:null,outShapeLocation:null,outShapeStridesLocation:null,outTexShapeLocation:null}:Object.assign({program:t,fragmentShader:c,source:s,webGLProgram:l,inShapeInfos:a,outShapeInfo:o},oY(e,t,l))}function oY(e,t,n){let r={},i={},a={},o=[],s,c,l,u=null,d=null;d=e.getUniformLocation(n,`NAN`,!1),O().getNumber(`WEBGL_VERSION`)===1&&(u=e.getUniformLocation(n,`INFINITY`,!1));for(let o=0;o<t.variableNames.length;o++){let s=t.variableNames[o];r[s]=e.getUniformLocation(n,s,!1),r[`offset${s}`]=e.getUniformLocation(n,`offset${s}`,!1),t.enableShapeUniforms&&(i[`${s}Shape`]=e.getUniformLocation(n,`${s}Shape`,!1),a[`${s}TexShape`]=e.getUniformLocation(n,`${s}TexShape`,!1))}return t.enableShapeUniforms&&(s=e.getUniformLocation(n,`outShape`,!1),l=e.getUniformLocation(n,`outShapeStrides`,!1),c=e.getUniformLocation(n,`outTexShape`,!1)),t.customUniforms&&t.customUniforms.forEach((t,r)=>{o[r]=e.getUniformLocation(n,t.name,!1)}),{uniformLocations:r,customUniformLocations:o,infLoc:u,nanLoc:d,inShapesLocations:i,inTexShapesLocations:a,outShapeLocation:s,outShapeStridesLocation:l,outTexShapeLocation:c}}function sY(e,t){if(e.length!==t.length)throw Error(`Binary was compiled with ${e.length} inputs, but was executed with ${t.length} inputs`);e.forEach((e,n)=>{let r=e.logicalShape,i=t[n],a=i.shape;if(!T(r,a))throw Error(`Binary was compiled with different shapes than the current args. Shapes ${r} and ${a} must match`);if(e.isUniform&&i.isUniform)return;let o=e.texShape,s=i.isUniform?null:i.texData.texShape;if(!T(o,s))throw Error(`Binary was compiled with different texture shapes than the current args. Shape ${o} and ${s} must match`)})}function cY(e,t,n,r,i){t.program.enableShapeUniforms||(sY(t.inShapeInfos,n),sY([t.outShapeInfo],[r]));let a=r.texData.texture,o=r.texData.texShape;r.texData.isPacked?e.setOutputPackedMatrixTexture(a.texture,o[0],o[1]):e.setOutputMatrixTexture(a.texture,o[0],o[1]),e.setProgram(t.webGLProgram),O().getNumber(`WEBGL_VERSION`)===1&&t.infLoc!==null&&e.gl.uniform1f(t.infLoc,1/0),t.nanLoc!==null&&e.gl.uniform1f(t.nanLoc,NaN),n.forEach((n,r)=>{let i=t.program.variableNames[r],a=t.uniformLocations[i],o=t.uniformLocations[`offset${i}`],s=t.inShapesLocations[`${i}Shape`],c=t.inTexShapesLocations[`${i}TexShape`];if(s){let{uniformShape:r}=nY(t.program.packedInputs,n.shape,n.texData.texShape);switch(r.length){case 1:e.gl.uniform1iv(s,new Int32Array(r));break;case 2:e.gl.uniform2iv(s,new Int32Array(r));break;case 3:e.gl.uniform3iv(s,new Int32Array(r));break;case 4:e.gl.uniform4iv(s,new Int32Array(r))}}if(c&&e.gl.uniform2i(c,n.texData.texShape[0],n.texData.texShape[1]),a!=null){if(n.isUniform){if(C(n.shape)<2)e.gl.uniform1f(a,n.uniformValues[0]);else{let t=n.uniformValues;t instanceof Float32Array||(t=new Float32Array(t)),e.gl.uniform1fv(a,t)}}else n.texData.slice!=null&&o!=null&&e.gl.uniform1i(o,n.texData.slice.flatOffset),e.setInputMatrixTexture(n.texData.texture.texture,a,r)}});let s=t.outShapeLocation;if(s)switch(r.shape.length){case 1:e.gl.uniform1iv(s,new Int32Array(r.shape));break;case 2:e.gl.uniform2iv(s,new Int32Array(r.shape));break;case 3:e.gl.uniform3iv(s,new Int32Array(r.shape));break;case 4:e.gl.uniform4iv(s,new Int32Array(r.shape))}if(t.outShapeStridesLocation){let n=xe(r.shape);switch(r.shape.length){case 2:e.gl.uniform1iv(t.outShapeStridesLocation,new Int32Array(n));break;case 3:e.gl.uniform2iv(t.outShapeStridesLocation,new Int32Array(n));break;case 4:e.gl.uniform3iv(t.outShapeStridesLocation,new Int32Array(n))}}t.outTexShapeLocation&&e.gl.uniform2i(t.outTexShapeLocation,r.texData.texShape[0],r.texData.texShape[1]),t.program.customUniforms&&i&&t.program.customUniforms.forEach((n,r)=>{let a=t.customUniformLocations[r],o=i[r];if(n.type===`float`)e.gl.uniform1fv(a,o);else if(n.type===`vec2`)e.gl.uniform2fv(a,o);else if(n.type===`vec3`)e.gl.uniform3fv(a,o);else if(n.type===`vec4`)e.gl.uniform4fv(a,o);else if(n.type===`int`)e.gl.uniform1iv(a,o);else if(n.type===`ivec2`)e.gl.uniform2iv(a,o);else if(n.type===`ivec3`)e.gl.uniform3iv(a,o);else if(n.type===`ivec4`)e.gl.uniform4iv(a,o);else throw Error(`uniform type ${n.type} is not supported yet.`)}),e.executeProgram()}function lY(e,t,n){let r=``;t.concat(n).forEach(t=>{let i=t.texData!=null&&t.texData.slice!=null&&t.texData.slice.flatOffset>0;if(e.enableShapeUniforms&&!t.isUniform){let a=t.texData.texShape,{useSqueezeShape:o,uniformShape:s,keptDims:c}=nY(e.packedInputs,t.shape,a),l=``,u=``,d=``;if(s.length===1&&e.packedInputs){let e=[Math.ceil(a[0]/2),Math.ceil(a[1]/2)];l=`${e[0]>1}_${e[1]>1}`}else if(s.length===2&&!e.packedInputs)u=`${s[0]>1}_${s[1]>1}`;else if(s.length>2&&!e.packedInputs){let e=xe(s);d=`${e[0]===a[1]}_${e[e.length-1]===a[1]}`}let f=t.shape.length,p=s.length===2&&T(t.shape,a),m=C(t.shape)===1,h=Uc(t.shape,n.shape),g=!e.packedInputs&&f===n.shape.length&&T(a,n.texData.texShape),_=e.packedInputs||s.length>2?``:`${a[0]>1}_${a[1]>1}`;r+=`${f}_${g}_${o?c:``}_${s.length}_${m}_${h}_${p}_${l}_${u}_${d}_${_}_${i}`}else{let e=t.isUniform?`uniform`:t.texData.texShape;r+=`${t.shape}_${e}_${i}`}});let i=e.userCode,a=e.constructor.name;return a+=`_`+r+`_`+i+`${O().getNumber(`WEBGL_VERSION`)}`,a}function uY(e){return O().getBool(`WEBGL_USE_SHAPES_UNIFORMS`)&&e<=4}var dY=class{constructor(e){this.variableNames=[`A`],this.packedInputs=!1,this.packedOutput=!0,this.outPackingScheme=tq.DENSE,this.customUniforms=[{name:`texShape`,type:`ivec2`}];let t=aJ();this.outputShape=e,this.enableShapeUniforms=uY(this.outputShape.length),this.userCode=`
      ivec3 outCoordsFromFlatIndex(int index) {
        ${this.enableShapeUniforms?sJ([`r`,`c`,`d`],e):oJ([`r`,`c`,`d`],e)}
        return ivec3(r, c, d);
      }

      void main() {
        ivec2 resTexRC = ivec2(resultUV.yx * vec2(texShape[0], texShape[1]));
        int index = 4 * (resTexRC.x * texShape[1] + resTexRC.y);

        vec4 result = vec4(0.);

        for (int i=0; i<4; i++) {
          int flatIndex = index + i;
          ivec3 rc = outCoordsFromFlatIndex(flatIndex);
          result[i] = getA(rc.x, rc.y, rc.z);
        }

        ${t.output} = result;
      }
    `}},fY=class{constructor(e){this.variableNames=[`A`],this.packedInputs=!0,this.packedOutput=!0,this.outPackingScheme=tq.DENSE,this.customUniforms=[{name:`texShape`,type:`ivec2`}];let t=aJ();this.outputShape=e,this.enableShapeUniforms=uY(this.outputShape.length),this.userCode=`
      ivec3 outCoordsFromFlatIndex(int index) {
        ${this.enableShapeUniforms?sJ([`r`,`c`,`d`],e):oJ([`r`,`c`,`d`],e)}
        return ivec3(r, c, d);
      }

      void main() {
        ivec2 resTexRC = ivec2(resultUV.yx * vec2(texShape[0], texShape[1]));
        int index = 4 * (resTexRC.x * texShape[1] + resTexRC.y);

        vec4 result = vec4(0.);

        for (int i=0; i<4; i++) {
          int flatIndex = index + i;
          ivec3 rc = outCoordsFromFlatIndex(flatIndex);
          result[i] = getChannel(getA(rc.x, rc.y, rc.z), vec2(rc.y, rc.z));
        }

        ${t.output} = result;
      }
    `}},pY=class{constructor(e){this.variableNames=[`A`],this.outTexUsage=nq.DOWNLOAD;let t=aJ();this.outputShape=e,this.userCode=`
      ${fJ}

      void main() {
        float x = getAAtOutCoords();
        ${t.output} = encode_float(x);
      }
    `}},mY=class{constructor(e){this.variableNames=[`A`],this.packedInputs=!0,this.packedOutput=!1,this.outTexUsage=nq.DOWNLOAD;let t=aJ();this.outputShape=e,this.userCode=`
      ${fJ}

      void main() {
        ivec3 coords = getOutputCoords();
        float x = getChannel(getAAtOutCoords(), vec2(coords.y, coords.z));
        ${t.output} = encode_float(x);
      }
    `}},hY={R:0,G:1,B:2,A:3},gY=class{constructor(e,t=!1,n=`RGBA`){this.variableNames=[`A`],this.customUniforms=[{name:`texShape`,type:`ivec2`}];let r=aJ();this.outputShape=e,this.enableShapeUniforms=uY(this.outputShape.length);let i=`result`;t&&(i=`floor(result * 255. + 0.5)`);let a=``;for(let e=0;e<n.length;e++){let t=n[e];a+=`
          if(offset == ${e}) {
            result = values[${hY[t]}];
          }`}this.userCode=`
      ${this.enableShapeUniforms?dJ():uJ(e)}

      void main() {
        ivec3 coords = getOutputCoords();
        int flatIndex = getFlatIndex(coords);
        float result = 0.;
        int offset = imod(flatIndex, ${n.length});

        flatIndex = idiv(flatIndex, ${n.length}, 1.);

        int r = flatIndex / texShape[1];
        if (r < texShape[0]) {
          int c = imod(flatIndex, texShape[1]);
          vec2 uv = (vec2(c, r) + halfCR) / vec2(texShape[1], texShape[0]);
          vec4 values = ${r.texture2D}(A, uv);
          ${a}
        }
        ${r.output} = vec4(${i}, 0., 0., 0.);
      }
    `}},_Y=class{constructor(e,t=!1){this.variableNames=[`A`],this.packedInputs=!1,this.packedOutput=!0,this.customUniforms=[{name:`texShape`,type:`ivec2`}];let n=aJ();this.outputShape=e,this.enableShapeUniforms=uY(this.outputShape.length);let r=``,i=`result`;t&&(i=`floor(result * 255. + 0.5)`);for(let t=0;t<=1;t++)for(let i=0;i<=1;i++){let a=t*2+i;r+=`
          localCoords = coords;
          if(localCoords[2] + ${i} < ${this.enableShapeUniforms?`outShape[2]`:`${e[2]}`}) {
          localCoords[2] += ${i};
          if (localCoords[1] + ${t} < ${this.enableShapeUniforms?`outShape[1]`:`${e[1]}`}) {
            localCoords[1] += ${t};

            flatIndex = getFlatIndex(localCoords);
            offset = imod(flatIndex, 4);

            flatIndex = idiv(flatIndex, 4, 1.);

            int r = flatIndex / texShape[1];
            int c = imod(flatIndex, texShape[1]);
            vec2 uv = (vec2(c, r) + halfCR) / vec2(texShape[1], texShape[0]);
            values = ${n.texture2D}(A, uv);

            if (offset == 0) {
              result[${a}] = values[0];
            } else if (offset == 1) {
              result[${a}] = values[1];
            } else if (offset == 2) {
              result[${a}] = values[2];
            } else {
              result[${a}] = values[3];
            }
          }
        }
        `}this.userCode=`
        ${this.enableShapeUniforms?dJ():uJ(e)}

        void main() {
          ivec3 coords = getOutputCoords();

          vec4 result = vec4(0.);
          int flatIndex, r, c, offset;
          ivec3 localCoords;
          vec2 uv;
          vec4 values;

          ${r}

          ${n.output} = ${i};
        }
    `}};Y();function vY(e){let t=aJ();return gq(e,`${t.version}
    precision highp float;
    ${t.attribute} vec3 clipSpacePos;
    ${t.attribute} vec2 uv;
    ${t.varyingVs} vec2 resultUV;

    void main() {
      gl_Position = vec4(clipSpacePos, 1);
      resultUV = uv;
    }`)}function yY(e){return Cq(e,new Float32Array([-1,1,0,0,1,-1,-1,0,0,0,1,1,0,1,1,1,-1,0,1,0]))}function bY(e){return wq(e,new Uint16Array([0,1,2,2,1,3]))}function xY(e,t,n,r,i,a){Eq(t,n);let o=Tq(e),s=e.TEXTURE_2D;return Q(e,()=>e.bindTexture(s,o)),Q(e,()=>e.texParameteri(s,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE)),Q(e,()=>e.texParameteri(s,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)),Q(e,()=>e.texParameteri(s,e.TEXTURE_MIN_FILTER,e.NEAREST)),Q(e,()=>e.texParameteri(s,e.TEXTURE_MAG_FILTER,e.NEAREST)),O().getNumber(`WEBGL_VERSION`)===1?Q(e,()=>e.texImage2D(s,0,r,t,n,0,i,a,null)):Q(e,()=>e.texStorage2D(s,1,r,t,n)),Q(e,()=>e.bindTexture(e.TEXTURE_2D,null)),{texture:o,texShape:[n,t]}}function SY(e){return e.internalFormatFloat}function CY(e,t,n,r){let[i,a]=iq(t,n);return xY(e,i,a,SY(r),r.textureFormatFloat,e.FLOAT)}function wY(e){return e.internalFormatHalfFloat}function TY(e,t,n,r){let[i,a]=iq(t,n);return xY(e,i,a,wY(r),r.textureFormatFloat,r.textureTypeHalfFloat)}function EY(e){return e.downloadTextureFormat}function DY(e,t,n,r){let[i,a]=iq(t,n);return xY(e,i,a,EY(r),e.RGBA,e.UNSIGNED_BYTE)}function OY(e){return e.internalFormatPackedFloat}function kY(e,t,n,r){let[i,a]=sq(t,n);return xY(e,i,a,OY(r),e.RGBA,e.FLOAT)}function AY(e){return e.internalFormatPackedHalfFloat}function jY(e,t,n,r){let[i,a]=sq(t,n);return xY(e,i,a,AY(r),e.RGBA,r.textureTypeHalfFloat)}function MY(e,t,n){return Q(e,()=>e.bindBuffer(e.ARRAY_BUFFER,n)),Oq(e,t,`clipSpacePos`,n,3,20,0)&&Oq(e,t,`uv`,n,2,20,12)}function NY(e,t,n,r,i,a){Q(e,()=>e.bindTexture(e.TEXTURE_2D,t));let o,s,c;i instanceof Uint8Array?(o=new Uint8Array(n*r*4),s=e.UNSIGNED_BYTE,c=e.RGBA):(o=new Float32Array(n*r*4),s=e.FLOAT,c=a.internalFormatPackedFloat),o.set(i),O().getNumber(`WEBGL_VERSION`)===2?Q(e,()=>e.texSubImage2D(e.TEXTURE_2D,0,0,0,n,r,e.RGBA,s,o)):Q(e,()=>e.texImage2D(e.TEXTURE_2D,0,c,n,r,0,e.RGBA,s,o)),Q(e,()=>e.bindTexture(e.TEXTURE_2D,null))}function PY(e,t,n){Q(e,()=>e.bindTexture(e.TEXTURE_2D,t)),n.data instanceof Uint8Array?O().getNumber(`WEBGL_VERSION`)===2?Q(e,()=>e.texSubImage2D(e.TEXTURE_2D,0,0,0,n.width,n.height,e.RGBA,e.UNSIGNED_BYTE,n.data)):Q(e,()=>e.texImage2D(e.TEXTURE_2D,0,e.RGBA,n.width,n.height,0,e.RGBA,e.UNSIGNED_BYTE,n.data)):O().getNumber(`WEBGL_VERSION`)===2?Q(e,()=>e.texSubImage2D(e.TEXTURE_2D,0,0,0,e.RGBA,e.UNSIGNED_BYTE,n)):Q(e,()=>e.texImage2D(e.TEXTURE_2D,0,e.RGBA,e.RGBA,e.UNSIGNED_BYTE,n)),Q(e,()=>e.bindTexture(e.TEXTURE_2D,null))}function FY(e,t,n,r){let i=e.createBuffer();Q(e,()=>e.bindBuffer(e.PIXEL_PACK_BUFFER,i));let a=16*t*n;return Q(e,()=>e.bufferData(e.PIXEL_PACK_BUFFER,a,e.STREAM_READ)),Q(e,()=>e.readPixels(0,0,n,t,e.RGBA,e.FLOAT,0)),Q(e,()=>e.bindBuffer(e.PIXEL_PACK_BUFFER,null)),i}function IY(e,t,n){let r=e,i=new Float32Array(n);return r.bindBuffer(r.PIXEL_PACK_BUFFER,t),r.getBufferSubData(r.PIXEL_PACK_BUFFER,0,i),r.bindBuffer(r.PIXEL_PACK_BUFFER,null),i}function LY(e,t,n,r){let[i,a]=iq(t,n),o=new Uint8Array(aq(t*n,4));return Q(e,()=>e.readPixels(0,0,i,a,r.downloadTextureFormat,e.UNSIGNED_BYTE,o)),new Float32Array(o.buffer)}function RY(e,t,n,r,i,a,o,s){let c=e,l=new Float32Array(cq(a,o));return c.bindBuffer(c.PIXEL_PACK_BUFFER,t),c.getBufferSubData(c.PIXEL_PACK_BUFFER,0,l),c.bindBuffer(c.PIXEL_PACK_BUFFER,null),l}function zY(e,t,n){let r=new Float32Array(t*n*4);return Q(e,()=>e.readPixels(0,0,n,t,e.RGBA,e.FLOAT,r)),r}Y();var BY=class{constructor(e){this.outputTexture=null,this.program=null,this.disposed=!1,this.itemsToPoll=[];let t=O().getNumber(`WEBGL_VERSION`);if(e==null?this.gl=QK(t):(this.gl=e,ZK(t,e)),e=this.gl,O().getNumber(`WEBGL_VERSION`)===2){let t=e;this.createVertexArray=()=>Q(t,()=>t.createVertexArray()),this.bindVertexArray=e=>Q(t,()=>t.bindVertexArray(e)),this.deleteVertexArray=e=>Q(t,()=>t.deleteVertexArray(e)),this.getVertexArray=()=>Q(t,()=>t.getParameter(t.VERTEX_ARRAY_BINDING))}else if(e!=null){let t=e.getExtension(`OES_vertex_array_object`);if(t==null)throw Error(`All WebGL1 implementations are expected to offer OES_vertex_array_object.`);this.createVertexArray=()=>Q(e,()=>t.createVertexArrayOES()),this.bindVertexArray=n=>Q(e,()=>t.bindVertexArrayOES(n)),this.deleteVertexArray=n=>Q(e,()=>t.deleteVertexArrayOES(n)),this.getVertexArray=()=>Q(e,()=>e.getParameter(t.VERTEX_ARRAY_BINDING_OES))}let n=`WEBGL_color_buffer_float`,r=`EXT_color_buffer_half_float`;if(this.parallelCompilationExtension=this.gl.getExtension(`KHR_parallel_shader_compile`),O().getNumber(`WEBGL_VERSION`)===1){let e=`OES_texture_half_float`;if(this.textureFloatExtension=hq(this.gl,`OES_texture_float`),Xq(this.gl,e))this.textureHalfFloatExtension=hq(this.gl,e);else if(O().get(`WEBGL_FORCE_F16_TEXTURES`))throw Error(`GL context does not support half float textures, yet the environment flag WEBGL_FORCE_F16_TEXTURES is set to true.`);if(this.colorBufferFloatExtension=this.gl.getExtension(n),Xq(this.gl,r))this.colorBufferHalfFloatExtension=hq(this.gl,r);else if(O().get(`WEBGL_FORCE_F16_TEXTURES`))throw Error(`GL context does not support color renderable half floats, yet the environment flag WEBGL_FORCE_F16_TEXTURES is set to true.`)}else if(n=`EXT_color_buffer_float`,Xq(this.gl,n))this.colorBufferFloatExtension=this.gl.getExtension(n);else if(Xq(this.gl,r))this.colorBufferHalfFloatExtension=this.gl.getExtension(r);else throw Error(`GL context does not support color renderable floats`);this.vertexBuffer=yY(this.gl),this.indexBuffer=bY(this.gl),this.framebuffer=Dq(this.gl),this.textureConfig=lq(this.gl,this.textureHalfFloatExtension)}get debug(){return O().getBool(`DEBUG`)}dispose(){if(this.disposed)return;this.program!=null&&console.warn(`Disposing a GPGPUContext that still has a bound WebGLProgram. This is probably a resource leak, delete the program with GPGPUContext.deleteProgram before disposing.`),this.outputTexture!=null&&console.warn(`Disposing a GPGPUContext that still has a bound output matrix texture.  This is probably a resource leak, delete the output matrix texture with GPGPUContext.deleteMatrixTexture before disposing.`);let e=this.gl;Q(e,()=>e.finish()),Q(e,()=>e.bindFramebuffer(e.FRAMEBUFFER,null)),Q(e,()=>e.deleteFramebuffer(this.framebuffer)),Q(e,()=>e.bindBuffer(e.ARRAY_BUFFER,null)),Q(e,()=>e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,null)),Q(e,()=>e.deleteBuffer(this.indexBuffer)),this.disposed=!0}createFloat32MatrixTexture(e,t){return this.throwIfDisposed(),CY(this.gl,e,t,this.textureConfig)}createFloat16MatrixTexture(e,t){return this.throwIfDisposed(),TY(this.gl,e,t,this.textureConfig)}createUnsignedBytesMatrixTexture(e,t){return this.throwIfDisposed(),DY(this.gl,e,t,this.textureConfig)}uploadPixelDataToTexture(e,t){this.throwIfDisposed(),PY(this.gl,e,t)}uploadDenseMatrixToTexture(e,t,n,r){this.throwIfDisposed(),NY(this.gl,e,t,n,r,this.textureConfig)}createFloat16PackedMatrixTexture(e,t){return this.throwIfDisposed(),jY(this.gl,e,t,this.textureConfig)}createPackedMatrixTexture(e,t){return this.throwIfDisposed(),kY(this.gl,e,t,this.textureConfig)}deleteMatrixTexture(e){this.throwIfDisposed(),this.outputTexture===e&&(Pq(this.gl,this.framebuffer),this.outputTexture=null),Q(this.gl,()=>this.gl.deleteTexture(e))}downloadByteEncodedFloatMatrixFromOutputTexture(e,t,n){return this.downloadMatrixDriver(e,()=>LY(this.gl,t,n,this.textureConfig))}downloadPackedMatrixFromBuffer(e,t,n,r,i,a){return RY(this.gl,e,t,n,r,i,a,this.textureConfig)}downloadFloat32MatrixFromBuffer(e,t){return IY(this.gl,e,t)}createBufferFromTexture(e,t,n){this.bindTextureToFrameBuffer(e);let r=FY(this.gl,t,n,this.textureConfig);return this.unbindTextureToFrameBuffer(),r}createAndWaitForFence(){let e=this.createFence(this.gl);return this.pollFence(e)}createFence(e){let t,n;if(O().getBool(`WEBGL_FENCE_API_ENABLED`)){let r=e,i=r.fenceSync(r.SYNC_GPU_COMMANDS_COMPLETE,0);e.flush(),n=()=>{let e=r.clientWaitSync(i,0,0);return e===r.ALREADY_SIGNALED||e===r.CONDITION_SATISFIED},t=i}else O().getNumber(`WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION`)>0?(t=this.beginQuery(),this.endQuery(),n=()=>this.isQueryAvailable(t,O().getNumber(`WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION`))):n=()=>!0;return{query:t,isFencePassed:n}}downloadMatrixFromPackedTexture(e,t,n){return this.downloadMatrixDriver(e,()=>zY(this.gl,t,n))}createProgram(e){this.throwIfDisposed();let t=this.gl;this.vertexShader??=vY(t);let n=bq(t);Q(t,()=>t.attachShader(n,this.vertexShader)),Q(t,()=>t.attachShader(n,e)),xq(t,n);let r;return r=Object.assign(n,{vao:this.createVertexArray()}),this.bindVertexArray(r.vao),Q(t,()=>t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,this.indexBuffer)),console.assert(MY(t,r,this.vertexBuffer),`gpgpu_util.bindVertexProgramAttributeStreams not fully successful.`),this.debug&&Sq(t,r),this.setProgram(r),r}deleteProgram(e){this.throwIfDisposed(),e===this.program&&(this.program=null),e!=null&&(Q(this.gl,()=>this.gl.deleteProgram(e)),this.deleteVertexArray(e.vao))}setProgram(e){this.throwIfDisposed(),this.program=e,this.program!=null&&(this.bindVertexArray(this.program.vao),this.debug&&Sq(this.gl,this.program)),Q(this.gl,()=>this.gl.useProgram(e))}getUniformLocation(e,t,n=!0){return this.throwIfDisposed(),n?Aq(this.gl,e,t):jq(this.gl,e,t)}getAttributeLocation(e,t){return this.throwIfDisposed(),Q(this.gl,()=>this.gl.getAttribLocation(e,t))}getUniformLocationNoThrow(e,t){return this.throwIfDisposed(),this.gl.getUniformLocation(e,t)}setInputMatrixTexture(e,t,n){this.throwIfDisposed(),this.throwIfNoProgram(),Mq(this.gl,e,t,n)}setOutputMatrixTexture(e,t,n){this.setOutputMatrixTextureDriver(e,n,t)}setOutputPackedMatrixTexture(e,t,n){this.throwIfDisposed();let[r,i]=sq(t,n);this.setOutputMatrixTextureDriver(e,r,i)}setOutputMatrixWriteRegion(e,t,n,r){this.setOutputMatrixWriteRegionDriver(n,e,r,t)}setOutputPackedMatrixWriteRegion(e,t,n,r){throw Error(`setOutputPackedMatrixWriteRegion not implemented.`)}debugValidate(){this.program!=null&&Sq(this.gl,this.program),Fq(this.gl)}executeProgram(){this.throwIfDisposed(),this.throwIfNoProgram();let e=this.gl;if(this.debug){let e=this.getVertexArray();console.assert(e===this.program.vao,`VAO changed between setProgram and executeProgram!`),this.debugValidate()}Q(e,()=>e.drawElements(e.TRIANGLES,6,e.UNSIGNED_SHORT,0))}blockUntilAllProgramsCompleted(){this.throwIfDisposed(),Q(this.gl,()=>this.gl.finish())}getQueryTimerExtension(){return this.disjointQueryTimerExtension??=hq(this.gl,O().getNumber(`WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION`)===2?`EXT_disjoint_timer_query_webgl2`:`EXT_disjoint_timer_query`),this.disjointQueryTimerExtension}getQueryTimerExtensionWebGL2(){return this.getQueryTimerExtension()}getQueryTimerExtensionWebGL1(){return this.getQueryTimerExtension()}beginQuery(){if(O().getNumber(`WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION`)===2){let e=this.gl,t=this.getQueryTimerExtensionWebGL2(),n=e.createQuery();return e.beginQuery(t.TIME_ELAPSED_EXT,n),n}let e=this.getQueryTimerExtensionWebGL1(),t=e.createQueryEXT();return e.beginQueryEXT(e.TIME_ELAPSED_EXT,t),t}endQuery(){if(O().getNumber(`WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION`)===2){let e=this.gl,t=this.getQueryTimerExtensionWebGL2();e.endQuery(t.TIME_ELAPSED_EXT);return}let e=this.getQueryTimerExtensionWebGL1();e.endQueryEXT(e.TIME_ELAPSED_EXT)}async waitForQueryAndGetTime(e){return await re(()=>this.disposed||this.isQueryAvailable(e,O().getNumber(`WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION`))),this.getQueryTime(e,O().getNumber(`WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION`))}getQueryTime(e,t){if(t===0)return null;if(t===2){let t=this.gl;return t.getQueryParameter(e,t.QUERY_RESULT)/1e6}{let t=this.getQueryTimerExtensionWebGL1();return t.getQueryObjectEXT(e,t.QUERY_RESULT_EXT)/1e6}}isQueryAvailable(e,t){if(t===0)return!0;if(t===2){let t=this.gl,n=this.getQueryTimerExtensionWebGL2(),r=t.getQueryParameter(e,t.QUERY_RESULT_AVAILABLE);return this.disjoint??=this.gl.getParameter(n.GPU_DISJOINT_EXT),r&&!this.disjoint}{let t=this.getQueryTimerExtensionWebGL1(),n=t.getQueryObjectEXT(e,t.QUERY_RESULT_AVAILABLE_EXT);return this.disjoint??=this.gl.getParameter(t.GPU_DISJOINT_EXT),n&&!this.disjoint}}pollFence(e){return new Promise(t=>{this.addItemToPoll(()=>e.isFencePassed(),()=>t())})}pollItems(){let e=VY(this.itemsToPoll.map(e=>e.isDoneFn));for(let t=0;t<=e;++t){let{resolveFn:e}=this.itemsToPoll[t];e()}this.itemsToPoll=this.itemsToPoll.slice(e+1)}addItemToPoll(e,t){if(this.itemsToPoll.push({isDoneFn:e,resolveFn:t}),this.itemsToPoll.length>1)return;let n;`setTimeoutCustom`in O().platform&&(n=O().platform.setTimeoutCustom.bind(O().platform)),re(()=>(this.pollItems(),this.itemsToPoll.length===0),()=>0,null,n)}bindTextureToFrameBuffer(e){this.throwIfDisposed(),Nq(this.gl,e,this.framebuffer),this.debug&&Fq(this.gl)}unbindTextureToFrameBuffer(){this.outputTexture==null?Pq(this.gl,this.framebuffer):(Nq(this.gl,this.outputTexture,this.framebuffer),this.debug&&Fq(this.gl))}downloadMatrixDriver(e,t){this.bindTextureToFrameBuffer(e);let n=t();return this.unbindTextureToFrameBuffer(),n}setOutputMatrixTextureDriver(e,t,n){this.throwIfDisposed();let r=this.gl;Nq(r,e,this.framebuffer),this.debug&&Fq(r),this.outputTexture=e,Q(r,()=>r.viewport(0,0,t,n)),Q(r,()=>r.scissor(0,0,t,n))}setOutputMatrixWriteRegionDriver(e,t,n,r){this.throwIfDisposed(),Q(this.gl,()=>this.gl.scissor(e,t,n,r))}throwIfDisposed(){if(this.disposed)throw Error(`Attempted to use disposed GPGPUContext.`)}throwIfNoProgram(){if(this.program==null)throw Error(`No GPU program is currently set.`)}};function VY(e){let t=0;for(;t<e.length&&e[t]();++t);return t-1}var{addImpl:HY,bincountImpl:UY,bincountReduceImpl:WY,castImpl:GY,ceilImpl:KY,concatImpl:qY,equalImpl:JY,expImpl:YY,expm1Impl:XY,floorImpl:ZY,gatherNdImpl:QY,gatherV2Impl:$Y,greaterImpl:eX,greaterEqualImpl:tX,lessImpl:nX,lessEqualImpl:rX,linSpaceImpl:iX,logImpl:aX,maxImpl:oX,maximumImpl:sX,minimumImpl:cX,multiplyImpl:lX,negImpl:uX,notEqualImpl:dX,prodImpl:fX,raggedGatherImpl:pX,raggedRangeImpl:mX,raggedTensorToTensorImpl:hX,rangeImpl:gX,rsqrtImpl:_X,scatterImpl:vX,sigmoidImpl:yX,simpleAbsImpl:bX,sliceImpl:xX,sparseFillEmptyRowsImpl:SX,sparseReshapeImpl:CX,sparseSegmentReductionImpl:wX,sqrtImpl:TX,stridedSliceImpl:EX,stringNGramsImpl:DX,stringSplitImpl:OX,stringToHashBucketFastImpl:kX,subImpl:AX,tileImpl:jX,topKImpl:MX,transposeImpl:NX,uniqueImpl:PX}=fV;function FX(e,t){return[`x`,`y`,`z`,`w`,`u`,`v`].slice(0,t).map(t=>`${e}.${t}`)}function IX(e,t){return t===1?[e]:FX(e,t)}function LX(e,t){if(e===1)return`rc`;let n=``;for(let r=0;r<e;r++)n+=t[r],r<e-1&&(n+=`,`);return n}var RX=class{constructor(e){if(this.variableNames=[`A`],this.packedInputs=!1,this.packedOutput=!0,this.outputShape=e,this.rank=e.length,this.enableShapeUniforms=uY(this.outputShape.length),this.rank===0)this.userCode=`
        void main() {
          setOutput(vec4(getA(), 0., 0., 0.));
        }
      `;else{let e=IX(`rc`,this.rank),t=tY(this.rank),n=this.getOutOfBoundsCondition(e),r=this.getSetup(e),i=this.getOutput(e);this.userCode=`
        void main() {
          ${t} rc = getOutputCoords();

          if(${n}) {
            setOutput(vec4(0));
          } else {
            ${r}

            setOutput(vec4(${i}));
          }
        }
      `}}getSourceCoordsArr(e){let t=[];for(let n=0;n<=1;n++)for(let r=0;r<=1;r++){let i=`${n===0?`r`:`rp1`}, ${r===0?`c`:`cp1`}`;for(let t=2;t<this.rank;t++)i=`${e[e.length-1-t]},`+i;t.push(i)}return t}getOutOfBoundsCondition(e){if(this.rank===1)return`rc > ${this.enableShapeUniforms?`outShape`:this.outputShape[0]}`;let t=``;for(let n=this.rank-2;n<this.rank;n++)t+=`${e[n]} >= ${this.enableShapeUniforms?`outShape[${n}]`:this.outputShape[n]}`,n<this.rank-1&&(t+=`||`);return t}getSetup(e){if(this.rank===1)return``;let t=e.slice(-2),n=this.enableShapeUniforms?`outShape[${this.rank} - 1]`:this.outputShape[this.rank-1],r=this.enableShapeUniforms?`outShape[${this.rank} - 2]`:this.outputShape[this.rank-2];return`
      int r = ${t[0]};
      int c = ${t[1]};
      int rp1 = r + 1;
      int cp1 = c + 1;

      bool cEdge = cp1 >= ${n};
      bool rEdge = rp1 >= ${r};
    `}getOutput(e){let t=this.getSourceCoordsArr(e);return this.rank===1?`getA(rc), (rc + 1 >= ${this.enableShapeUniforms?`outShape`:this.outputShape[0]} ? 0. : getA(rc + 1)), 0, 0`:`getA(${t[0]}),
            cEdge ? 0. : getA(${t[1]}),
            rEdge ? 0. : getA(${t[2]}),
            rEdge || cEdge ? 0. : getA(${t[3]})`}},zX=class{constructor(e,t){this.variableNames=[`A`],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:`inputShape`,type:`ivec3`}],this.outputShape=e,this.enableShapeUniforms=uY(this.outputShape.length);let n=``;for(let e=0;e<4;e++){let t=`thisRC = rc;`;e%2==1&&(t+=`thisRC.z += 1;`),e>1&&(t+=`thisRC.y += 1;`),n+=`
        ${t}
        ${e>0?`if(thisRC.y < rows && thisRC.z < cols){`:``}
          int flatIndex = getFlatIndex(thisRC);

          ivec3 inputRC = inputCoordsFromReshapedOutCoords(flatIndex);
          vec2 inputRCInnerDims = vec2(float(inputRC.y),float(inputRC.z));

          result[${e}] =
            getChannel(getA(inputRC.x, inputRC.y, inputRC.z), inputRCInnerDims);
        ${e>0?`}`:``}
      `}this.userCode=`
      ${BX(t,this.enableShapeUniforms)}
      ${this.enableShapeUniforms?dJ():uJ(e)}

      void main() {
        ivec3 rc = getOutputCoords();

        vec4 result = vec4(0.);

        ivec3 thisRC;
        int rows = ${this.enableShapeUniforms?`outShape[1]`:e[1]};
        int cols = ${this.enableShapeUniforms?`outShape[2]`:e[2]};

        ${n}

        setOutput(result);
      }
    `}};function BX(e,t){return`
    ivec3 inputCoordsFromReshapedOutCoords(int index) {
      ${t?lJ([`r`,`c`,`d`],`inputShape`):oJ([`r`,`c`,`d`],e)}
      return ivec3(r, c, d);
    }
  `}Y();var VX=class{constructor(e){this.gpgpu=e,this.numUsedTextures=0,this.numFreeTextures=0,this._numBytesAllocated=0,this._numBytesFree=0,this.freeTextures={},this.logEnabled=!1,this.usedTextures={}}acquireTexture(e,t,n){let r=KX(t,n),i=qX(e,r,n);i in this.freeTextures||(this.freeTextures[i]=[]),i in this.usedTextures||(this.usedTextures[i]=[]);let a=UX(e,r,this.gpgpu.gl,this.gpgpu.textureConfig,n);if(this.freeTextures[i].length>0){this.numFreeTextures--,this.numUsedTextures++,this._numBytesFree-=a,this.log();let e=this.freeTextures[i].shift();return this.usedTextures[i].push(e),e}let o;return r===rq.PACKED_2X2_FLOAT32?o=this.gpgpu.createPackedMatrixTexture(e[0],e[1]):r===rq.PACKED_2X2_FLOAT16?o=this.gpgpu.createFloat16PackedMatrixTexture(e[0],e[1]):r===rq.UNPACKED_FLOAT32?o=this.gpgpu.createFloat32MatrixTexture(e[0],e[1]):r===rq.UNPACKED_FLOAT16?o=this.gpgpu.createFloat16MatrixTexture(e[0],e[1]):r===rq.PACKED_4X1_UNSIGNED_BYTE&&(o=this.gpgpu.createUnsignedBytesMatrixTexture(e[0],e[1])),this.usedTextures[i].push(o),this.numUsedTextures++,this._numBytesAllocated+=a,this.log(),o}releaseTexture(e,t,n,r){if(this.freeTextures==null)return;let i=KX(n,r),a=qX(t,i,r);a in this.freeTextures||(this.freeTextures[a]=[]);let o=UX(t,i,this.gpgpu.gl,this.gpgpu.textureConfig,r),s=O().get(`WEBGL_DELETE_TEXTURE_THRESHOLD`);s!==-1&&this._numBytesAllocated>s?(this.gpgpu.deleteMatrixTexture(e.texture),this._numBytesAllocated-=o):(this.freeTextures[a].push(e),this.numFreeTextures++,this._numBytesFree+=o),this.numUsedTextures--;let c=this.usedTextures[a],l=c.indexOf(e);if(l<0)throw Error(`Cannot release a texture that was never provided by this texture manager`);c.splice(l,1),this.log()}log(){if(!this.logEnabled)return;let e=this.numFreeTextures+this.numUsedTextures;console.log(`Free/Used`,`${this.numFreeTextures} / ${this.numUsedTextures}`,`(${e})`);let t=this._numBytesFree/this._numBytesAllocated;console.log(`Bytes allocated: ${this._numBytesAllocated}`),console.log(`Bytes unused: ${this._numBytesFree} (${Math.round(100*t)}%)`)}get numBytesAllocated(){return this._numBytesAllocated}get numBytesFree(){return this._numBytesFree}getNumUsedTextures(){return this.numUsedTextures}getNumFreeTextures(){return this.numFreeTextures}dispose(){if(this.freeTextures!=null){for(let e in this.freeTextures)this.freeTextures[e].forEach(e=>{this.gpgpu.deleteMatrixTexture(e.texture)});for(let e in this.usedTextures)this.usedTextures[e].forEach(e=>{this.gpgpu.deleteMatrixTexture(e.texture)});this.freeTextures=null,this.usedTextures=null,this.numUsedTextures=0,this.numFreeTextures=0,this._numBytesAllocated=0,this._numBytesFree=0}}};function HX(e,t){let n=e;if(t===n.R32F)return 4;if(t===n.R16F)return 2;if(t===n.RGBA32F||t===e.RGBA)return 16;if(t===n.RGBA16F)return 8;if(t===n.RGBA8)return 4;throw Error(`Unknown internal format ${t}`)}function UX(e,t,n,r,i){let a=WX(t,r),o;if(i){let[t,n]=sq(e[0],e[1]);o=t*n}else{let[t,n]=iq(e[0],e[1]);o=t*n}let s=HX(n,a);return o*s}function WX(e,t){switch(e){case rq.PACKED_2X2_FLOAT32:return OY(t);case rq.PACKED_2X2_FLOAT16:return AY(t);case rq.UNPACKED_FLOAT32:return SY(t);case rq.UNPACKED_FLOAT16:return wY(t);case rq.PACKED_4X1_UNSIGNED_BYTE:return EY(t);default:throw Error(`Unknown physical texture type ${e}`)}}function GX(e){return O().getBool(`WEBGL_RENDER_FLOAT32_ENABLED`)?e?rq.PACKED_2X2_FLOAT32:rq.UNPACKED_FLOAT32:e?rq.PACKED_2X2_FLOAT16:rq.UNPACKED_FLOAT16}function KX(e,t){if(e===nq.UPLOAD)return rq.PACKED_2X2_FLOAT32;if(e===nq.RENDER||e==null)return GX(t);if(e===nq.DOWNLOAD||e===nq.PIXELS)return rq.PACKED_4X1_UNSIGNED_BYTE;throw Error(`Unknown logical texture type ${e}`)}function qX(e,t,n){return`${e[0]}_${e[1]}_${t}_${n}`}var JX=class{constructor(e,t){this.variableNames=[`A`],this.outputShape=e,this.enableShapeUniforms=uY(this.outputShape.length),this.userCode=`
      float unaryOperation(float x) {
        ${t}
      }

      void main() {
        float x = getAAtOutCoords();
        float y = unaryOperation(x);

        setOutput(y);
      }
    `}},YX=`if (isnan(x)) return x;`,XX=`return x;`,ZX=`return abs(x);`,QX=`return (x >= 0.0) ? x : (exp(x) - 1.0);`,$X=YX+`
  return (x < 0.0) ? 0.0 : x;
`,eZ=YX+`
  return (x < 0.0) ? 0.0 : min(6.0, x);
`,tZ=`return x;`,nZ=`return 1.0 / (1.0 + exp(-1.0 * x));`,rZ=`return x;`,iZ=`
  vec4 result;

  result.r = (x.r >= 0.0) ? x.r : (exp(x.r) - 1.0);
  result.g = (x.g >= 0.0) ? x.g : (exp(x.g) - 1.0);
  result.b = (x.b >= 0.0) ? x.b : (exp(x.b) - 1.0);
  result.a = (x.a >= 0.0) ? x.a : (exp(x.a) - 1.0);

  return result;
`,aZ=`
  vec4 result = x * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,oZ=`
  vec4 result = min(x, vec4(6.)) * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,sZ=`return 1.0 / (1.0 + exp(-1.0 * x));`,cZ=class{constructor(e,t){this.variableNames=[`A`],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=e,this.enableShapeUniforms=uY(this.outputShape.length),this.userCode=`
      vec4 unaryOperation(vec4 x) {
        ${t}
      }

      void main() {
        vec4 x = getAAtOutCoords();
        vec4 y = unaryOperation(x);

        setOutput(y);
      }
    `}},lZ=class{constructor(e){this.variableNames=[`A`],this.packedInputs=!0,this.packedOutput=!1,this.outputShape=e,this.enableShapeUniforms=uY(this.outputShape.length);let t=e.length,n=IX(`rc`,t),r=tY(t),i=LX(t,n),a=n.slice(-2),o=t<=1?`rc`:`vec2(${a.join(`,`)})`;this.userCode=`
      void main() {
        ${r} rc = getOutputCoords();
        vec4 packedInput = getA(${i});

        setOutput(getChannel(packedInput, ${o}));
      }
    `}};Y();var uZ=Wb,dZ=1e-7,fZ=1e-4,pZ={};function mZ(e){return e in pZ||(pZ[e]={}),pZ[e]}var hZ=O().getNumber(`CPU_HANDOFF_SIZE_THRESHOLD`),gZ=600;function _Z(){return O().global.screen==null?1024:O().global.screen.height*O().global.screen.width*window.devicePixelRatio*gZ/1024/1024}var vZ=class e extends l{constructor(e){if(super(),this.pendingRead=new WeakMap,this.pendingDisposal=new WeakSet,this.dataRefCount=new WeakMap,this.numBytesInGPU=0,this.uploadWaitMs=0,this.downloadWaitMs=0,this.lastGlFlushTime=0,this.warnedAboutMemory=!1,this.pendingDeletes=0,this.disposed=!1,!O().getBool(`HAS_WEBGL`))throw Error(`WebGL is not supported on this device`);let t;e==null?(t=new BY(QK(O().getNumber(`WEBGL_VERSION`))),this.binaryCache=mZ(O().getNumber(`WEBGL_VERSION`)),this.gpgpuCreatedLocally=!0):(t=e instanceof BY?e:new BY(QK(O().getNumber(`WEBGL_VERSION`),e)),this.binaryCache={},this.gpgpuCreatedLocally=!1),this.gpgpu=t,this.canvas=this.gpgpu.gl.canvas,this.textureManager=new VX(this.gpgpu),this.numMBBeforeWarning=_Z(),this.texData=new c(this,lc())}nextDataId(){return e.nextDataId++}numDataIds(){return this.texData.numDataIds()-this.pendingDeletes}writeTexture(e,t,n,r,i,a){let o=this.makeTensorInfo(t,n),s=this.texData.get(o.dataId);s.isPacked=!1,s.texture={texture:e,texShape:[r,i]},s.texShape=[r,i];let c=new gY(Vq(t),!1,a),l=this.runWebGLProgram(c,[o],n,[[r,i]]);return l.shape=t,s.texture=null,this.disposeIntermediateTensorInfo(o),l.dataId}write(e,t,n){if((O().getBool(`WEBGL_CHECK_NUMERICAL_PROBLEMS`)||O().getBool(`DEBUG`))&&this.checkNumericalProblems(e),n===`complex64`&&e!=null)throw Error(`Cannot write to a complex64 dtype. Please use tf.complex(real, imag).`);let r={id:this.nextDataId()};return this.texData.set(r,{shape:t,dtype:n,values:e,usage:nq.UPLOAD,refCount:1}),r}refCount(e){return this.texData.has(e)?this.texData.get(e).refCount:0}incRef(e){let t=this.texData.get(e);t.refCount++}decRef(e){if(this.texData.has(e)){let t=this.texData.get(e);t.refCount--}}move(e,t,n,r,i){if(O().getBool(`DEBUG`)&&this.checkNumericalProblems(t),r===`complex64`)throw Error(`Cannot write to a complex64 dtype. Please use tf.complex(real, imag).`);this.texData.set(e,{shape:n,dtype:r,values:t,usage:nq.UPLOAD,refCount:i})}disposeIntermediateTensorInfo(e){this.disposeData(e.dataId)}readSync(e){let{values:t,dtype:n,complexTensorInfos:r,slice:i,shape:a,isPacked:o}=this.texData.get(e);if(i!=null){let t;t=o?new cZ(a,tZ):new JX(a,tZ);let r=this.runWebGLProgram(t,[{dataId:e,shape:a,dtype:n}],n),i=this.readSync(r.dataId);return this.disposeIntermediateTensorInfo(r),i}if(t!=null)return this.convertAndCacheOnCPU(e);if(n===`string`)return t;let s=this.activeTimers!=null,c;s&&(c=wi());let l;return l=n===`complex64`?TT(this.readSync(r.real.dataId),this.readSync(r.imag.dataId)):this.getValuesFromTexture(e),s&&(this.downloadWaitMs+=wi()-c),this.convertAndCacheOnCPU(e,l)}async read(e){if(this.pendingRead.has(e)){let t=this.pendingRead.get(e);return new Promise(e=>t.push(e))}let{values:t,shape:n,slice:r,dtype:i,complexTensorInfos:a,isPacked:o}=this.texData.get(e);if(r!=null){let t;t=o?new cZ(n,tZ):new JX(n,tZ);let r=this.runWebGLProgram(t,[{dataId:e,shape:n,dtype:i}],i),a=this.read(r.dataId);return this.disposeIntermediateTensorInfo(r),a}if(t!=null)return this.convertAndCacheOnCPU(e);if(O().getBool(`DEBUG`)&&!O().getBool(`WEBGL_DOWNLOAD_FLOAT_ENABLED`)&&O().getNumber(`WEBGL_VERSION`)===2)throw Error(`tensor.data() with WEBGL_DOWNLOAD_FLOAT_ENABLED=false and WEBGL_VERSION=2 not yet supported.`);let s=null,c;if(i!==`complex64`&&O().get(`WEBGL_BUFFER_SUPPORTED`)){c=this.decode(e);let t=this.texData.get(c.dataId);s=this.gpgpu.createBufferFromTexture(t.texture.texture,...oq(n))}this.pendingRead.set(e,[]),i!==`complex64`&&await this.gpgpu.createAndWaitForFence();let l;if(i===`complex64`){let e=await Promise.all([this.read(a.real.dataId),this.read(a.imag.dataId)]),t=e[0],n=e[1];l=TT(t,n)}else if(s==null)l=this.getValuesFromTexture(e);else{let e=C(n);l=this.gpgpu.downloadFloat32MatrixFromBuffer(s,e)}if(c!=null&&this.disposeIntermediateTensorInfo(c),s!=null){let e=this.gpgpu.gl;Q(e,()=>e.deleteBuffer(s))}let u=this.convertAndCacheOnCPU(e,l),d=this.pendingRead.get(e);return this.pendingRead.delete(e),d.forEach(e=>e(u)),this.pendingDisposal.has(e)&&(this.pendingDisposal.delete(e),this.disposeData(e)&&lc().removeDataId(e,this),this.pendingDeletes--),u}readToGPU(e,t={}){let{values:n,shape:r,slice:i,dtype:a,isPacked:o,texture:s}=this.texData.get(e);if(a===`complex64`)throw Error(`Does not support reading texture for complex64 dtype.`);if(i!=null){let n;n=o?new cZ(r,tZ):new JX(r,tZ);let i=this.runWebGLProgram(n,[{dataId:e,shape:r,dtype:a}],a),s=this.readToGPU(i,t);return this.disposeIntermediateTensorInfo(i),s}if(s==null)throw Error(n==null?`There is no data on GPU or CPU.`:`Data is not on GPU but on CPU.`);let c=this.decode(e,t.customTexShape),l=lc().makeTensorFromTensorInfo(c),u=this.texData.get(c.dataId);return Object.assign({tensorRef:l},u.texture)}bufferSync(e){let t=this.readSync(e.dataId);if(e.dtype===`string`)try{let n=t.map(e=>Di(e));return ss(e.shape,e.dtype,n)}catch{throw Error(`Failed to decode encoded string bytes into utf-8`)}return ss(e.shape,e.dtype,t)}checkNumericalProblems(e){if(e!=null)for(let t=0;t<e.length;t++){let n=e[t];if(!pq(n))throw O().getBool(`WEBGL_RENDER_FLOAT32_CAPABLE`)?Error(`The value ${n} cannot be represented with your current settings. Consider enabling float32 rendering: 'tf.env().set('WEBGL_RENDER_FLOAT32_ENABLED', true);'`):Error(`The value ${n} cannot be represented on this device.`)}}getValuesFromTexture(e){let{shape:t,dtype:n,isPacked:r}=this.texData.get(e),i=C(t);if(O().getBool(`WEBGL_DOWNLOAD_FLOAT_ENABLED`)){let n=this.decode(e),r=this.texData.get(n.dataId),a=this.gpgpu.downloadMatrixFromPackedTexture(r.texture.texture,...oq(t)).subarray(0,i);return this.disposeIntermediateTensorInfo(n),a}let a=O().getBool(`WEBGL_PACK`)&&r===!0,o=a?Vq(t):t,s=a?new mY(o):new pY(o),c=this.runWebGLProgram(s,[{shape:o,dtype:n,dataId:e}],`float32`),l=this.texData.get(c.dataId),u=this.gpgpu.downloadByteEncodedFloatMatrixFromOutputTexture(l.texture.texture,l.texShape[0],l.texShape[1]).subarray(0,i);return this.disposeIntermediateTensorInfo(c),u}timerAvailable(){return O().getNumber(`WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE`)>0}time(e){let t=this.activeTimers,n=[],r=!1;this.programTimersStack==null?(this.programTimersStack=n,r=!0):this.activeTimers.push(n),this.activeTimers=n,e();let i=S(this.activeTimers.map(e=>e.query)).filter(e=>e!=null),a=S(this.activeTimers.map(e=>e.name)).filter(e=>e!=null);this.activeTimers=t,r&&(this.programTimersStack=null);let o={uploadWaitMs:this.uploadWaitMs,downloadWaitMs:this.downloadWaitMs,kernelMs:null,wallMs:null};return(async()=>{if(O().getNumber(`WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE`)>0){let e=await Promise.all(i);o.kernelMs=g(e),o.getExtraProfileInfo=()=>e.map((e,t)=>({name:a[t],ms:e})).map(e=>`${e.name}: ${e.ms}`).join(`, `)}else o.kernelMs={error:`WebGL query timers are not supported in this environment.`};return this.uploadWaitMs=0,this.downloadWaitMs=0,o})()}memory(){return{unreliable:!1,numBytesInGPU:this.numBytesInGPU,numBytesInGPUAllocated:this.textureManager.numBytesAllocated,numBytesInGPUFree:this.textureManager.numBytesFree}}startTimer(){return O().getNumber(`WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE`)>0?this.gpgpu.beginQuery():{startMs:wi(),endMs:null}}endTimer(e){return O().getNumber(`WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE`)>0?(this.gpgpu.endQuery(),e):(e.endMs=wi(),e)}async getQueryTime(e){if(O().getNumber(`WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE`)>0)return this.gpgpu.waitForQueryAndGetTime(e);let t=e;return t.endMs-t.startMs}disposeData(e,t=!1){if(this.pendingDisposal.has(e))return!1;if(!this.texData.has(e))return!0;if(t?this.texData.get(e).refCount=0:this.texData.get(e).refCount--,!t&&this.texData.get(e).refCount>0)return!1;if(this.pendingRead.has(e))return this.pendingDisposal.add(e),this.pendingDeletes++,!1;this.releaseGPUData(e);let{complexTensorInfos:n}=this.texData.get(e);return n!=null&&(this.disposeData(n.real.dataId,t),this.disposeData(n.imag.dataId,t)),this.texData.delete(e),!0}releaseGPUData(e){let{texture:t,dtype:n,texShape:r,usage:i,isPacked:a,slice:o}=this.texData.get(e),s=o&&o.origDataId||e,c=this.dataRefCount.get(s);c>1?this.dataRefCount.set(s,c-1):(this.dataRefCount.delete(s),t!=null&&(this.numBytesInGPU-=this.computeBytes(r,n),this.textureManager.releaseTexture(t,r,i,a)));let l=this.texData.get(e);l.texture=null,l.texShape=null,l.isPacked=!1,l.slice=null}getTexture(e){return this.uploadToGPU(e),this.texData.get(e).texture.texture}getDataInfo(e){return this.texData.get(e)}shouldExecuteOnCPU(e,t=hZ){return O().getBool(`WEBGL_CPU_FORWARD`)&&e.every(e=>this.texData.get(e.dataId).texture==null&&C(e.shape)<t)}getGPGPUContext(){return this.gpgpu}where(e){zr(`tf.where() in webgl locks the UI thread. Call tf.whereAsync() instead`);let t=e.dataSync();return uZ(e.shape,t)}packedUnaryOp(e,t,n){let r=new cZ(e.shape,t),i=this.compileAndRun(r,[e],n);return lc().makeTensorFromTensorInfo(i)}abs(e){if(this.shouldExecuteOnCPU([e])&&e.dtype!==`complex64`){let t=bX(this.texData.get(e.dataId).values);return this.makeOutput(e.shape,e.dtype,t)}if(O().getBool(`WEBGL_PACK_UNARY_OPERATIONS`))return this.packedUnaryOp(e,ZX,e.dtype);let t=new JX(e.shape,ZX),n=this.compileAndRun(t,[e]);return lc().makeTensorFromTensorInfo(n)}makeTensorInfo(e,t,n){let r;if(t===`string`&&n!=null&&n.length>0&&he(n[0])){let i=n.map(e=>Ei(e));r=this.write(i,e,t)}else r=this.write(n,e,t);return this.texData.get(r).usage=null,{dataId:r,shape:e,dtype:t}}makeOutput(e,t,n){return lc().makeTensorFromTensorInfo(this.makeTensorInfo(e,t,n),this)}unpackTensor(e){let t=new lZ(e.shape);return this.runWebGLProgram(t,[e],e.dtype)}packTensor(e){let t=new RX(e.shape);return this.runWebGLProgram(t,[e],e.dtype,null,!0)}packedReshape(e,t){let n=[zq(e.shape),...Bq(e.shape)],r={dtype:e.dtype,shape:n,dataId:e.dataId},i=new zX([zq(t),...Bq(t)],n),a=[n],o=this.runWebGLProgram(i,[r],e.dtype,a,!0);return{dataId:o.dataId,shape:t,dtype:o.dtype}}decode(e,t){let{isPacked:n,shape:r,dtype:i}=this.texData.get(e);t!=null&&y(C(r)<=t[0]*t[1]*4,()=>`customTexShape is too small. Row * Column * 4 should be equal or larger than the size of the tensor data.`);let a=Vq(r),o;o=n?new fY(a):new dY(a);let s=[t??oq(a)];return{dtype:i,shape:r,dataId:this.runWebGLProgram(o,[{shape:a,dtype:i,dataId:e}],i,s,!0,t).dataId}}runWebGLProgram(e,t,n,r,i=!1,a){let o=this.makeTensorInfo(e.outputShape,n),s=this.texData.get(o.dataId);if(e.packedOutput&&(s.isPacked=!0),e.outPackingScheme===tq.DENSE&&(s.texShape=(a??oq(e.outputShape)).map(e=>e*2)),e.outTexUsage!=null&&(s.usage=e.outTexUsage),C(o.shape)===0)return s.values=se(o.dtype,0),o;let c=[],l=t.map(t=>{if(t.dtype===`complex64`)throw Error(`GPGPUProgram does not support complex64 input. For complex64 dtypes, please separate the program into real and imaginary parts.`);let n=this.texData.get(t.dataId);if(n.texture==null){if(!e.packedInputs&&C(t.shape)<=O().getNumber(`WEBGL_SIZE_UPLOAD_UNIFORM`))return{shape:t.shape,texData:null,isUniform:!0,uniformValues:n.values};e.packedInputs&&(n.isPacked=!0,n.shape=t.shape)}if(this.uploadToGPU(t.dataId),!!n.isPacked!=!!e.packedInputs)t=n.isPacked?this.unpackTensor(t):this.packTensor(t),c.push(t),n=this.texData.get(t.dataId);else if(n.isPacked&&!Wq(n.shape,t.shape)){let e=t,r=t.shape;t.shape=n.shape,t=this.packedReshape(t,r),c.push(t),n=this.texData.get(t.dataId),e.shape=r}return{shape:t.shape,texData:n,isUniform:!1}});this.uploadToGPU(o.dataId);let u={shape:o.shape,texData:s,isUniform:!1},d=lY(e,l,u),f=this.getAndSaveBinary(d,()=>aY(this.gpgpu,e,l,u)),p=this.activeTimers!=null,m;p&&(m=this.startTimer()),O().get(`ENGINE_COMPILE_ONLY`)||cY(this.gpgpu,f,l,u,r),c.forEach(e=>this.disposeIntermediateTensorInfo(e)),p&&(m=this.endTimer(m),this.activeTimers.push({name:e.constructor.name,query:this.getQueryTime(m)}));let h=O().get(`WEBGL_FLUSH_THRESHOLD`);if(h>0){let e=wi();e-this.lastGlFlushTime>h&&(this.gpgpu.gl.flush(),this.lastGlFlushTime=e)}if(!O().getBool(`WEBGL_LAZILY_UNPACK`)&&s.isPacked&&i===!1){let e=this.unpackTensor(o);return this.disposeIntermediateTensorInfo(o),e}return o}compileAndRun(e,t,n,r,i=!1){return n||=t[0].dtype,this.runWebGLProgram(e,t,n,r,i)}getAndSaveBinary(e,t){return e in this.binaryCache||(this.binaryCache[e]=t()),this.binaryCache[e]}getTextureManager(){return this.textureManager}dispose(){this.disposed||=(O().getBool(`IS_TEST`)||Object.keys(this.binaryCache).forEach(e=>{this.gpgpu.deleteProgram(this.binaryCache[e].webGLProgram),delete this.binaryCache[e]}),this.textureManager.dispose(),this.canvas!=null&&typeof HTMLCanvasElement<`u`&&this.canvas instanceof HTMLCanvasElement?this.canvas.remove():this.canvas=null,this.gpgpuCreatedLocally&&(this.gpgpu.program=null,this.gpgpu.dispose()),!0)}floatPrecision(){return this.floatPrecisionValue??=B(()=>{if(!O().get(`WEBGL_RENDER_FLOAT32_ENABLED`)){let e=O().getBool(`DEBUG`);O().set(`DEBUG`,!1);let t=this.abs(mm(1e-8)).dataSync()[0];if(O().set(`DEBUG`,e),t>0)return 32}return 16}),this.floatPrecisionValue}epsilon(){return this.floatPrecision()===32?dZ:fZ}uploadToGPU(e){let t=this.texData.get(e),{shape:n,dtype:r,values:i,texture:a,usage:o,isPacked:s}=t;if(a!=null)return;let c=this.activeTimers!=null,l;c&&(l=wi());let u=t.texShape;if(u??(u=Hq(n,s),t.texShape=u),i!=null){let e=Vq(n),a,o=u[1],d=u[0],f=i instanceof Uint8Array||i instanceof Uint8ClampedArray;(s||!f)&&([o,d]=sq(u[0],u[1])),a=s?new _Y(e,f):new gY(e,f);let p=f?[d,o]:u,m=this.makeTensorInfo(p,r),h=this.texData.get(m.dataId);h.usage=f?nq.PIXELS:nq.UPLOAD,h.texShape=p,this.gpgpu.uploadDenseMatrixToTexture(this.getTexture(m.dataId),o,d,i);let g=[[d,o]],_=this.runWebGLProgram(a,[m],r,g,!0),v=this.texData.get(_.dataId);t.texShape=v.texShape,t.isPacked=v.isPacked,t.usage=v.usage,O().get(`ENGINE_COMPILE_ONLY`)?this.disposeData(_.dataId):(t.texture=v.texture,t.values=null,this.texData.delete(_.dataId)),this.disposeIntermediateTensorInfo(m),c&&(this.uploadWaitMs+=wi()-l)}else t.texture=this.acquireTexture(u,o,r,s)}convertAndCacheOnCPU(e,t){let n=this.texData.get(e),{dtype:r}=n;return t!=null&&(n.values=yZ(t,r)),n.values}acquireTexture(e,t,n,r){if(this.numBytesInGPU+=this.computeBytes(e,n),!this.warnedAboutMemory&&this.numBytesInGPU>this.numMBBeforeWarning*1024*1024){let e=(this.numBytesInGPU/1024/1024).toFixed(2);this.warnedAboutMemory=!0,console.warn(`High memory usage in GPU: ${e} MB, most likely due to a memory leak`)}return this.textureManager.acquireTexture(e,t,r)}computeBytes(e,t){return e[0]*e[1]*pe(t)}checkCompileCompletion(){for(let[,e]of Object.entries(this.binaryCache))this.checkCompletion_(e)}async checkCompileCompletionAsync(){let e=[];if(this.gpgpu.parallelCompilationExtension){for(let[,t]of Object.entries(this.binaryCache))e.push(this.checkCompletionAsync_(t));return Promise.all(e)}for(let[,t]of Object.entries(this.binaryCache)){let n=new Promise(e=>{try{this.checkCompletion_(t),e(!0)}catch(e){throw e}});e.push(n)}return Promise.all(e)}async checkCompletionAsync_(e){return this.gpgpu.gl.getProgramParameter(e.webGLProgram,this.gpgpu.parallelCompilationExtension.COMPLETION_STATUS_KHR)?this.checkCompletion_(e):(await Kw(),this.checkCompletionAsync_(e))}checkCompletion_(e){if(this.gpgpu.gl.getProgramParameter(e.webGLProgram,this.gpgpu.gl.LINK_STATUS)===!1)throw console.log(this.gpgpu.gl.getProgramInfoLog(e.webGLProgram)),this.gpgpu.gl.getShaderParameter(e.fragmentShader,this.gpgpu.gl.COMPILE_STATUS)===!1?(yq(e.source,this.gpgpu.gl.getShaderInfoLog(e.fragmentShader)),Error(`Failed to compile fragment shader.`)):Error(`Failed to link vertex and fragment shaders.`);return!0}getUniformLocations(){for(let[,e]of Object.entries(this.binaryCache)){let{uniformLocations:t,customUniformLocations:n,infLoc:r,nanLoc:i,inShapesLocations:a,inTexShapesLocations:o,outShapeLocation:s,outShapeStridesLocation:c,outTexShapeLocation:l}=oY(this.gpgpu,e.program,e.webGLProgram);e.uniformLocations=t,e.customUniformLocations=n,e.infLoc=r,e.nanLoc=i,e.inShapesLocations=a,e.inTexShapesLocations=o,e.outShapeLocation=s,e.outShapeStridesLocation=c,e.outTexShapeLocation=l}}createTensorFromTexture(e,t,n){let{texture:r,height:i,width:a,channels:o}=e,s=lc().backend;if(!s.gpgpu.gl.isTexture(r))throw Error(`The texture is invalid. Also, please make sure the texture and the TFJS WebGL backend are using the same canvas. If you want to use your own custom canvas, you have to create and use the custom TFJS WebGL backend created from the canvas through 'new tf.MathBackendWebGL(customCanvas)'.`);let c=s.writeTexture(r,t,n,i,a,o);return lc().makeTensorFromDataId(c,t,n,s)}};vZ.nextDataId=0;function yZ(e,t){if(t===`float32`||t===`complex64`)return e;if(t===`int32`||t===`bool`){let n=t===`int32`?new Int32Array(e.length):new Uint8Array(e.length);for(let t=0;t<n.length;++t)n[t]=Math.round(e[t]);return n}throw Error(`Unknown dtype ${t}`)}Y(),Ta()&&xc(`webgl`,()=>new vZ,2),Y();var bZ=`
  if (isnan(a)) return a;
  if (isnan(b)) return b;
`,xZ=class{constructor(e,t,n){this.variableNames=[`A`,`B`],this.outputShape=Gc(t,n),this.enableShapeUniforms=uY(this.outputShape.length),this.userCode=`
      float binaryOperation(float a, float b) {
        ${e}
      }

      void main() {
        float a = getAAtOutCoords();
        float b = getBAtOutCoords();
        setOutput(binaryOperation(a, b));
      }
    `}};Y();var SZ=`
  result.r = isNaN.r ? NAN : result.r;
  result.g = isNaN.g ? NAN : result.g;
  result.b = isNaN.b ? NAN : result.b;
  result.a = isNaN.a ? NAN : result.a;
`,CZ=class{constructor(e,t,n,r=!1){this.variableNames=[`A`,`B`],this.supportsBroadcasting=!0,this.packedInputs=!0,this.packedOutput=!0,this.outputShape=Gc(t,n);let i=this.outputShape.length;this.enableShapeUniforms=uY(i);let a=``;if(r){if(i===0||C(this.outputShape)===1)a=`
          result.y = 0.;
          result.z = 0.;
          result.w = 0.;
        `;else if(a=`
          ${tY(i)} coords = getOutputCoords();
        `,i===1)this.enableShapeUniforms?a+=`
            result.y = (coords + 1) >= outShape ? 0. : result.y;
            result.z = 0.;
            result.w = 0.;
          `:a+=`
            result.y = (coords + 1) >= ${this.outputShape[0]} ? 0. : result.y;
            result.z = 0.;
            result.w = 0.;
          `;else{let e=IX(`coords`,i);this.enableShapeUniforms?a+=`
            bool nextRowOutOfBounds =
              (${e[i-2]} + 1) >= outShape[${i} - 2];
            bool nextColOutOfBounds =
              (${e[i-1]} + 1) >= outShape[${i} - 1];
            result.y = nextColOutOfBounds ? 0. : result.y;
            result.z = nextRowOutOfBounds ? 0. : result.z;
            result.w = nextColOutOfBounds || nextRowOutOfBounds ? 0. : result.w;
          `:a+=`
            bool nextRowOutOfBounds =
              (${e[i-2]} + 1) >= ${this.outputShape[i-2]};
            bool nextColOutOfBounds =
              (${e[i-1]} + 1) >= ${this.outputShape[i-1]};
            result.y = nextColOutOfBounds ? 0. : result.y;
            result.z = nextRowOutOfBounds ? 0. : result.z;
            result.w = nextColOutOfBounds || nextRowOutOfBounds ? 0. : result.w;
          `}}this.userCode=`
      vec4 binaryOperation(vec4 a, vec4 b) {
        ${e}
      }

      void main() {
        vec4 a = getAAtOutCoords();
        vec4 b = getBAtOutCoords();

        vec4 result = binaryOperation(a, b);
        ${a}

        setOutput(result);
      }
    `}};Y();function wZ(e){let{inputs:t,backend:n}=e,{x:r}=t;return n.incRef(r.dataId),{dataId:r.dataId,shape:r.shape,dtype:r.dtype}}var TZ={kernelName:Xt,backendName:`webgl`,kernelFunc:wZ};Y();function EZ(e){let{inputs:t,backend:n}=e,{real:r,imag:i}=t,a=n.makeTensorInfo(r.shape,`complex64`),o=n.texData.get(a.dataId);return o.complexTensorInfos={real:wZ({inputs:{x:r},backend:n}),imag:wZ({inputs:{x:i},backend:n})},a}var DZ={kernelName:pt,backendName:`webgl`,kernelFunc:EZ};Y();var OZ=`return (a < 0.) ? b * a : a;`,kZ=`
  vec4 aLessThanZero = vec4(lessThan(a, vec4(0.)));
  return (aLessThanZero * (b * a)) + ((vec4(1.0) - aLessThanZero) * a);
`;function AZ(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{alpha:a}=r,o=n.makeTensorInfo([],`float32`,xi(a,`float32`)),s=O().getBool(`WEBGL_PACK_BINARY_OPERATIONS`)?new CZ(kZ,i.shape,o.shape):new xZ(OZ,i.shape,o.shape),c=n.runWebGLProgram(s,[i,o],`float32`);return n.disposeIntermediateTensorInfo(o),c}var jZ={kernelName:nn,backendName:`webgl`,kernelFunc:AZ};Y();var MZ=`return (a < 0.) ? b * a : a;`,NZ=`
  vec4 aLessThanZero = vec4(lessThan(a, vec4(0.)));
  return (aLessThanZero * (b * a)) + ((vec4(1.0) - aLessThanZero) * a);
`;function PZ(e){let{inputs:t,backend:n}=e,{x:r,alpha:i}=t,a=O().getBool(`WEBGL_PACK_BINARY_OPERATIONS`)?new CZ(NZ,r.shape,i.shape):new xZ(MZ,r.shape,i.shape);return n.runWebGLProgram(a,[r,i],`float32`)}var FZ={kernelName:Fn,backendName:`webgl`,kernelFunc:PZ};Y();var IZ=`if (isnan(x)) return x;`;function LZ({opSnippet:e,packedOpSnippet:t,cpuKernelImpl:n,dtype:r}){return({inputs:i,backend:a})=>{let{x:o}=i,s=a,c=r||o.dtype;if(s.shouldExecuteOnCPU([o])&&n!=null){let e=n(s.texData.get(o.dataId).values,c);return s.makeTensorInfo(o.shape,c,e)}let l=O().getBool(`WEBGL_PACK_UNARY_OPERATIONS`)&&t!=null,u;return u=l?new cZ(o.shape,t):new JX(o.shape,e),s.runWebGLProgram(u,[o],c)}}function RZ({opSnippet:e,packedOpSnippet:t,checkOutOfBounds:n=!1,supportsComplex:r=!1,cpuKernelImpl:i,dtype:a}){return({inputs:o,backend:s})=>{let{a:c,b:l}=o,u=s;if(r&&c.dtype===`complex64`){let t=u.texData.get(c.dataId),n=u.texData.get(l.dataId),[r,i]=[[t.complexTensorInfos.real,n.complexTensorInfos.real],[t.complexTensorInfos.imag,n.complexTensorInfos.imag]].map(t=>{let[n,r]=t,i={dataId:n.dataId,dtype:n.dtype,shape:c.shape},a={dataId:r.dataId,dtype:r.dtype,shape:l.shape},o=new xZ(e,c.shape,l.shape);return u.runWebGLProgram(o,[i,a],Qi(n.dtype,r.dtype))}),a=EZ({inputs:{real:r,imag:i},backend:u});return u.disposeIntermediateTensorInfo(r),u.disposeIntermediateTensorInfo(i),a}let d=a||Qi(c.dtype,l.dtype);if((c.dtype===`string`||l.dtype===`string`||u.shouldExecuteOnCPU([c,l]))&&i!=null){let e=u.texData.get(c.dataId).values,t=u.texData.get(l.dataId).values,n=c.dtype===`string`?mE(e):e,r=c.dtype===`string`?mE(t):t,[a,o]=i(c.shape,l.shape,n,r,d),s=u.makeTensorInfo(o,d),f=u.texData.get(s.dataId);return f.values=a,s}let f=O().getBool(`WEBGL_PACK_BINARY_OPERATIONS`)&&t!=null,p;return p=f?new CZ(t,c.shape,l.shape,n):new xZ(e,c.shape,l.shape),u.runWebGLProgram(p,[c,l],d)}}function zZ(e,t=!1){if(e===`linear`)return t?rZ:XX;if(e===`relu`)return t?aZ:$X;if(e===`elu`)return t?iZ:QX;if(e===`relu6`)return t?oZ:eZ;if(e===`prelu`)return t?NZ:MZ;if(e===`leakyrelu`)return t?kZ:OZ;if(e===`sigmoid`)return t?sZ:nZ;throw Error(`Activation ${e} has not been implemented for the WebGL backend.`)}var BZ=class{constructor(e,t,n,r=!1,i=!1,a=!1,o=null,s=!1,c=!1){this.variableNames=[`matrixA`,`matrixB`],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=n,this.enableShapeUniforms=uY(this.outputShape.length);let l=r?e[1]:e[2],u=Math.ceil(l/2),d=r?`i * 2, rc.y`:`rc.y, i * 2`,f=i?`rc.z, i * 2`:`i * 2, rc.z`,p=r?[`a.xxyy`,`a.zzww`]:[`a.xxzz`,`a.yyww`],m=i?[`b.xzxz`,`b.ywyw`]:[`b.xyxy`,`b.zwzw`],h=``,g=``;o&&(h=s?`vec4 activation(vec4 a) {
          vec4 b = getPreluActivationWeightsAtOutCoords();
          ${o}
        }`:c?`vec4 activation(vec4 a) {
          vec4 b = getLeakyreluAlphaAtOutCoords();
          ${o}
        }`:`vec4 activation(vec4 x) {
          ${o}
        }`,g=`result = activation(result);`);let _=a?`result += getBiasAtOutCoords();`:``;a&&this.variableNames.push(`bias`),s&&this.variableNames.push(`preluActivationWeights`),c&&this.variableNames.push(`leakyreluAlpha`);let v=`rc.x`,y=`rc.x`;e[0]<t[0]?v=`int(min(float(rc.x), ${e[0]-1}.))`:t[0]<e[0]&&(y=`int(min(float(rc.x), ${t[0]-1}.))`),this.userCode=`
      ${h}
      // Don't use uniform for sharedDimensionPacked for performance.
      const float sharedDimension = ${u}.0;

      vec4 dot2x2ARowBCol(ivec3 rc) {
        vec4 result = vec4(0);
        for (int i = 0; i < ${u}; i++) {
          int batchA = ${v};
          int batchB = ${y};
          vec4 a = getMatrixA(batchA, ${d});
          vec4 b = getMatrixB(batchB, ${f});

          // These swizzled products need to be separately added.
          // See: https://github.com/tensorflow/tfjs/issues/1735
          result += (${p[0]} * ${m[0]});
          result += (${p[1]} * ${m[1]});
        }
        return result;
      }

      void main() {
        ivec3 rc = getOutputCoords();
        vec4 result = dot2x2ARowBCol(rc);

        ${_}

        ${g}

        setOutput(result);
      }
    `}};Y();var VZ={REAL:`return areal * breal - aimag * bimag;`,IMAG:`return areal * bimag + aimag * breal;`},HZ=class{constructor(e,t,n){this.variableNames=[`AReal`,`AImag`,`BReal`,`BImag`],this.outputShape=Gc(t,n),this.userCode=`
      float binaryOpComplex(
          float areal, float aimag, float breal, float bimag) {
        ${e}
      }

      void main() {
        float areal = getARealAtOutCoords();
        float aimag = getAImagAtOutCoords();
        float breal = getBRealAtOutCoords();
        float bimag = getBImagAtOutCoords();
        setOutput(binaryOpComplex(areal, aimag, breal, bimag));
      }
    `}};Y();var UZ=`return a * b;`;function WZ(e){let{inputs:t,backend:n}=e,{a:r,b:i}=t,a=Qi(r.dtype,i.dtype);if(r.dtype===`complex64`){let e=n.texData.get(r.dataId),t=n.texData.get(i.dataId),a=new HZ(VZ.REAL,r.shape,i.shape),o=new HZ(VZ.IMAG,r.shape,i.shape),s=[{dataId:e.complexTensorInfos.real.dataId,dtype:e.complexTensorInfos.real.dtype,shape:r.shape},{dataId:e.complexTensorInfos.imag.dataId,dtype:e.complexTensorInfos.imag.dtype,shape:r.shape},{dataId:t.complexTensorInfos.real.dataId,dtype:t.complexTensorInfos.real.dtype,shape:i.shape},{dataId:t.complexTensorInfos.imag.dataId,dtype:t.complexTensorInfos.imag.dtype,shape:i.shape}],c=n.runWebGLProgram(a,s,`float32`),l=n.runWebGLProgram(o,s,`float32`),u=EZ({inputs:{real:c,imag:l},backend:n});return n.disposeIntermediateTensorInfo(c),n.disposeIntermediateTensorInfo(l),u}if(n.shouldExecuteOnCPU([r,i])){let e=n.texData.get(r.dataId),t=n.texData.get(i.dataId),[o,s]=lX(r.shape,i.shape,e.values,t.values,a),c=n.makeTensorInfo(s,a),l=n.texData.get(c.dataId);return l.values=o,c}let o;return o=O().getBool(`WEBGL_PACK_BINARY_OPERATIONS`)?new CZ(UZ,r.shape,i.shape):new xZ(UZ,r.shape,i.shape),n.runWebGLProgram(o,[r,i],a)}var GZ={kernelName:Tn,backendName:`webgl`,kernelFunc:WZ};function KZ(e,t,n){let r=[zq(e.shape),...Bq(e.shape)],i={dtype:e.dtype,shape:r,dataId:e.dataId},a=new zX([zq(t),...Bq(t)],r),o=[r],s=n.runWebGLProgram(a,[i],e.dtype,o,!0);return{dataId:s.dataId,shape:t,dtype:s.dtype}}Y();function $(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{shape:a}=r,o=n,s=C(i.shape),c=ie(a,s),l=C(c);y(s===l,()=>`The new shape (${c}) has ${l} elements and the old shape (${i.shape}) has ${s} elements. The new shape and old shape must have the same number of elements.`);let u=o.texData.get(i.dataId);return u.isPacked&&!Wq(i.shape,c)&&!(u.texture!==null&&Wq(u.shape,c))?KZ(i,c,o):(o.incRef(i.dataId),{dataId:i.dataId,shape:c,dtype:i.dtype})}var qZ={kernelName:Wn,backendName:`webgl`,kernelFunc:$};Y();var JZ=class{constructor(e,t){this.variableNames=[`x`];let{windowSize:n,batchSize:r,inSize:i,outSize:a}=e;this.outputShape=[r,a];let o=Math.floor(n/4)*4,s=n%4,c=`sumValue += dot(values, ones);`;if(t!=null){let e=1/t;c=`sumValue += dot(values * ${E(e)?e.toPrecision(2):e}, ones);`}let l=``;i%n>0&&(l=`
        if (inIdx < 0 || inIdx >= ${i}) {
          return 0.0;
        }
      `),this.userCode=`
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float getValue(int batch, int inIdx) {
        ${l}
        return getX(batch, inIdx);
      }

      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = outIdx * ${n};

        float sumValue = 0.0;

        for (int i = 0; i < ${o}; i += 4) {
          int inIdx = inOffset + i;
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            getValue(batch, inIdx + 3)
          );

          ${c}
        }

        int inIdx = inOffset + ${o};
        if (${s===1}) {
          vec4 values = vec4(getValue(batch, inIdx), 0.0, 0.0, 0.0);

          ${c}
        } else if (${s===2}) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1), 0.0, 0.0);

          ${c}
        } else if (${s===3}) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2), 0.0);

          ${c}
        }
        setOutput(sumValue);
      }
    `}},YZ=class{constructor(e,t){this.variableNames=[`x`];let{windowSize:n,batchSize:r,inSize:i,outSize:a}=e;this.outputShape=[r,a];let o=`0.0`,s=``;t===`prod`?o=`1.0`:t===`min`?(o=`1.0 / 1e-20`,s=`min`):t===`max`&&(o=`-1.0 / 1e-20`,s=`max`);let c=`${t}(${t}(${t}(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])`;t===`sum`?c=`sumValue`:t===`prod`?c=`prodValue`:t===`all`?c=`allValue`:t===`any`&&(c=`anyValue`);let l=Math.floor(n/4)*4,u=n%4,d=`
      if (${t===`sum`}) {
        sumValue += dot(values, ones);
      } else if (${t===`prod`}) {
        vec2 tmp = vec2(values[0], values[1]) * vec2(values[2], values[3]);
        prodValue *= tmp[0] * tmp[1];
      } else {
        minMaxValue = ${s}(values, minMaxValue);
        if (${t===`min`} || ${t===`max`}) {
          minMaxValue = ${s}(values, minMaxValue);
          bvec4 isNaN = isnan(values);
          if (isNaN.r || isNaN.g || isNaN.b || isNaN.a) {
            minMaxValue = vec4(NAN);
          }
        }
      }
    `,f=`vec4`;t===`all`?(o=`1.0`,d=`
        bool reducedAllValue = all(values);
        float floatedReducedAllValue = float(reducedAllValue);
        allValue = float(allValue >= 1.0 && floatedReducedAllValue >= 1.0);
      `,f=`bvec4`):t===`any`&&(o=`0.0`,d=`
        bool reducedAnyValue = any(values);
        float floatedReducedAnyValue = float(reducedAnyValue);
        anyValue = float(anyValue >= 1.0 || floatedReducedAnyValue >= 1.0);
      `,f=`bvec4`);let p=``;i%n>0&&(p=`
        if (inIdx < 0 || inIdx >= ${i}) {
          return initializationValue;
        }
      `),this.userCode=`
      const float initializationValue = ${o};
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float getValue(int batch, int inIdx) {
        ${p}
        return getX(batch, inIdx);
      }

      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = outIdx * ${n};

        vec4 minMaxValue = vec4(${o});
        float prodValue = 1.0;
        float sumValue = 0.0;
        float allValue = 1.0;
        float anyValue = 0.0;

        for (int i = 0; i < ${l}; i += 4) {
          int inIdx = inOffset + i;
          ${f} values = ${f}(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            getValue(batch, inIdx + 3)
          );

          ${d}
        }

        int inIdx = inOffset + ${l};
        if (${u===1}) {
          ${f} values = ${f}(
            getValue(batch, inIdx),
            initializationValue,
            initializationValue,
            initializationValue
          );

          ${d}
        } else if (${u===2}) {
          ${f} values = ${f}(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            initializationValue,
            initializationValue
          );

          ${d}
        } else if (${u===3}) {
          ${f} values = ${f}(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            initializationValue
          );

          ${d}
        }
        setOutput(${c});
      }
    `}};Y();function XZ(e){let t=[];for(;t.length===0||t[t.length-1].outSize!==1;){let n=t.length?t[t.length-1].outSize:e[1],r=aT(n);t.push({inSize:n,windowSize:r,outSize:Math.ceil(n/r)})}return t}function ZZ(e,t,n,r){let i=XZ(e.shape),a=e;for(let o=0;o<i.length;o++){let{inSize:s,windowSize:c,outSize:l}=i[o],u,d;u=n===`mean`?o===0?new JZ({windowSize:c,inSize:s,batchSize:e.shape[0],outSize:l},s):new JZ({windowSize:c,inSize:s,batchSize:e.shape[0],outSize:l}):new YZ({windowSize:c,inSize:s,batchSize:e.shape[0],outSize:l},n),d=a,a=r.runWebGLProgram(u,[a],t),d.dataId!==e.dataId&&r.disposeIntermediateTensorInfo(d)}return a}var QZ=class{constructor(e,t){this.variableNames=[`A`];let n=Array(e.length);for(let r=0;r<n.length;r++)n[r]=e[t[r]];this.outputShape=n,this.rank=n.length;let r=tY(this.rank),i=$Z(t);this.userCode=`
    void main() {
      ${r} resRC = getOutputCoords();
      setOutput(getA(${i}));
    }
    `}};function $Z(e){let t=e.length;if(t>6)throw Error(`Transpose for rank ${t} is not yet supported`);let n=[`resRC.x`,`resRC.y`,`resRC.z`,`resRC.w`,`resRC.u`,`resRC.v`],r=Array(t);for(let t=0;t<e.length;t++)r[e[t]]=n[t];return r.join()}var eQ=class{constructor(e,t){this.variableNames=[`A`],this.packedInputs=!0,this.packedOutput=!0;let n=Array(e.length);for(let r=0;r<n.length;r++)n[r]=e[t[r]];if(this.outputShape=n,this.rank=n.length,this.rank>6)throw Error(`Packed transpose for rank ${this.rank} is not yet supported.`);let r=tY(this.rank),i=FX(`rc`,this.rank),a=Array(this.rank);for(let e=0;e<t.length;e++)a[t[e]]=i[e];let o=`vec2(${a.slice(-2).join()})`,s=`++${i[this.rank-1]} < ${n[this.rank-1]}`,c=`getChannel(getA(${a.join()}), ${o})`;this.userCode=`
    void main() {
      ${r} rc = getOutputCoords();
      vec4 result = vec4(0.);
      result[0] = ${c};
      if(${s}) {
        result[1] = ${c};
      }
      --${i[this.rank-1]};
      if(++${i[this.rank-2]} < ${n[this.rank-2]}) {
        result[2] = ${c};
        if(${s}) {
          result[3] = ${c};
        }
      }
      setOutput(result);
    }
    `}};Y();function tQ(e,t,n){let r=O().getBool(`WEBGL_PACK_ARRAY_OPERATIONS`)?new eQ(e.shape,t):new QZ(e.shape,t);return n.runWebGLProgram(r,[e],e.dtype)}Y();function nQ(e,t,n,r){let i=t,a=e.shape.length,o=ae(i,e.shape),s=o,c=tm(s,a),l=c!=null,u=e;l&&(u=tQ(e,c,r),s=rm(s.length,a)),em(`sum`,s,a);let[d,f]=Qp(u.shape,s),p=d;n&&(p=$p(d,o));let m=C(f),h=C(e.shape)/m,g=$({inputs:{x:u},attrs:{shape:[h,m]},backend:r}),_=ZZ(g,$i(e.dtype),`sum`,r),v=$({inputs:{x:_},attrs:{shape:p},backend:r});return r.disposeIntermediateTensorInfo(g),r.disposeIntermediateTensorInfo(_),l&&r.disposeIntermediateTensorInfo(u),v}Y();function rQ(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{axis:a,keepDims:o}=r;return nQ(i,a,o,n)}var iQ={kernelName:`Sum`,backendName:`webgl`,kernelFunc:rQ};Y();function aQ(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{perm:a}=r,o=n,s=i.shape.length,c=Array(s);for(let e=0;e<c.length;e++)c[e]=i.shape[a[e]];let l;if(o.shouldExecuteOnCPU([i])){let e=o.texData.get(i.dataId).values,t=NX(e,i.shape,i.dtype,a,c);l=o.makeTensorInfo(c,i.dtype);let n=o.texData.get(l.dataId);n.values=t}else l=tQ(i,a,o);return l}var oQ={kernelName:Dr,backendName:`webgl`,kernelFunc:aQ};Y();function sQ({a:e,b:t,transposeA:n,transposeB:r,backend:i,bias:a=null,preluActivationWeights:o=null,leakyreluAlpha:s=0,activation:c=null}){let l=e.shape.length,u=t.shape.length,d=n?e.shape[l-2]:e.shape[l-1],f=r?t.shape[u-1]:t.shape[u-2],p=n?e.shape[l-1]:e.shape[l-2],m=r?t.shape[u-2]:t.shape[u-1],h=e.shape.slice(0,-2),g=t.shape.slice(0,-2),_=C(h),v=C(g),b=Gc(e.shape.slice(0,-2),t.shape.slice(0,-2)).concat([p,m]);y(d===f,()=>`Error in matMul: inner shapes (${d}) and (${f}) of Tensors with shapes ${e.shape} and ${t.shape} and transposeA=${n} and transposeB=${r} must match.`);let x=n?[_,d,p]:[_,p,d],S=r?[v,m,f]:[v,f,m],w=$({inputs:{x:e},backend:i,attrs:{shape:x}}),T=$({inputs:{x:t},backend:i,attrs:{shape:S}}),E=[w,T],D=Math.max(_,v),ee=n?w.shape[1]:w.shape[2],te=a!=null,ne=o!=null,re=c===`leakyrelu`,ie=c==null?null:zZ(c,!0),ae=te||ne||re||ie!=null,oe;if((p===1||m===1)&&ee>1e3&&ae===!1){let e=w,t=T;n&&(e=aQ({inputs:{x:w},backend:i,attrs:{perm:[0,2,1]}}),E.push(e)),r&&(t=aQ({inputs:{x:T},backend:i,attrs:{perm:[0,2,1]}}),E.push(t));let a=m!==1,o=m===1,s=e;a&&(s=$({inputs:{x:e},backend:i,attrs:{shape:[D,ee,1]}}),E.push(s));let c=m===1?2:1,l=t;o&&(l=$({inputs:{x:t},backend:i,attrs:{shape:[D,1,ee]}}),E.push(l));let u=WZ({inputs:{a:s,b:l},backend:i});oe=rQ({inputs:{x:u},backend:i,attrs:{axis:c,keepDims:!0}}),E.push(u)}else{let c=Qi(e.dtype,t.dtype),l=new BZ(x,S,[D,p,m],n,r,te,ie,ne,re),u=[w,T];if(a!=null&&u.push(a),ne&&u.push(o),re){let e=i.makeTensorInfo([],`float32`,xi(s,`float32`));u.push(e),E.push(e)}oe=i.runWebGLProgram(l,u,c)}let se=$({inputs:{x:oe},backend:i,attrs:{shape:b}});E.push(oe);for(let e of E)i.disposeIntermediateTensorInfo(e);return se}Y();function cQ(e){let{inputs:t,backend:n,attrs:r}=e,{a:i,b:a,bias:o,preluActivationWeights:s}=t,{transposeA:c,transposeB:l,activation:u,leakyreluAlpha:d}=r;return sQ({a:i,b:a,transposeA:c,transposeB:l,backend:n,bias:o,preluActivationWeights:s,leakyreluAlpha:d,activation:u})}var lQ={kernelName:Ir,backendName:`webgl`,kernelFunc:cQ};Y();var uQ=`return abs(x);`;function dQ(e){let{inputs:t,backend:n}=e,{x:r}=t;if(n.shouldExecuteOnCPU([r])&&r.dtype!==`complex64`){let e=bX(n.texData.get(r.dataId).values);return n.makeTensorInfo(r.shape,r.dtype,e)}let i;return i=O().getBool(`WEBGL_PACK_UNARY_OPERATIONS`)?new cZ(r.shape,uQ):new JX(r.shape,uQ),n.runWebGLProgram(i,[r],r.dtype)}var fQ={kernelName:`Abs`,backendName:`webgl`,kernelFunc:dQ};Y();var pQ=LZ({opSnippet:YX+`
  if (abs(x) > 1.) {
    return NAN;
  }
  return acos(x);
`}),mQ={kernelName:Ge,backendName:`webgl`,kernelFunc:pQ};Y();var hQ=LZ({opSnippet:YX+`
  if (x < 1.0) return NAN;
return log(x + sqrt(x * x - 1.0));`}),gQ={kernelName:Ke,backendName:`webgl`,kernelFunc:hQ};Y();var _Q=`return a + b;`,vQ={kernelName:`Add`,backendName:`webgl`,kernelFunc:RZ({opSnippet:_Q,packedOpSnippet:_Q,supportsComplex:!0,cpuKernelImpl:HY})},yQ=class{constructor(e,t){this.outputShape=[],this.outputShape=e,this.variableNames=t.map((e,t)=>`T${t}`);let n=[];this.variableNames.forEach(e=>{n.push(`float v${e} = get${e}AtOutCoords();`)});let r=this.variableNames.map(e=>`v${e}`).join(` + `);this.userCode=`
      void main() {
        ${n.join(`
        `)}

        float result = ${r};
        setOutput(result);
      }
    `}},bQ=class{constructor(e,t){this.outputShape=[],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=e,this.variableNames=t.map((e,t)=>`T${t}`);let n=[];this.variableNames.forEach(e=>{n.push(`vec4 v${e} = get${e}AtOutCoords();`)});let r=this.variableNames.map(e=>`v${e}`).join(` + `);this.userCode=`
      void main() {
        ${n.join(`
        `)}

        vec4 result = ${r};
        setOutput(result);
      }
    `}};Y();function xQ(e){let{inputs:t,backend:n}=e,r=t;if(r.length===1)return wZ({inputs:{x:r[0]},backend:n});if(r.length>O().get(`WEBGL_MAX_TEXTURES_IN_SHADER`)){let e=Math.floor(r.length/2);return xQ({inputs:[xQ({inputs:r.slice(0,e),backend:n}),xQ({inputs:r.slice(e),backend:n})],backend:n})}let i=r.map(e=>e.dtype).reduce((e,t)=>Qi(e,t)),a=r.map(e=>e.shape),o=O().getBool(`WEBGL_PACK`)?new bQ(r[0].shape,a):new yQ(r[0].shape,a);return n.runWebGLProgram(o,r,i)}var SQ={kernelName:qe,backendName:`webgl`,kernelFunc:xQ};Y();function CQ(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{axis:a,keepDims:o}=r,s=i.shape.length,c=ae(a,i.shape),l=c,u=tm(l,s),d=i;u!=null&&(d=aQ({inputs:{x:i},backend:n,attrs:{perm:u}}),l=rm(l.length,s)),em(`all`,l,s);let[f,p]=Qp(d.shape,l),m=C(p),h=$({inputs:{x:d},backend:n,attrs:{shape:[-1,m]}}),g=ZZ(h,h.dtype,`all`,n),_;if(o){let e=$p(f,c);_=$({inputs:{x:g},backend:n,attrs:{shape:e}})}else _=$({inputs:{x:g},backend:n,attrs:{shape:f}});return n.disposeIntermediateTensorInfo(h),n.disposeIntermediateTensorInfo(g),u!=null&&n.disposeIntermediateTensorInfo(d),_}var wQ={kernelName:`All`,backendName:`webgl`,kernelFunc:CQ};Y();function TQ(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{axis:a,keepDims:o}=r,s=i.shape.length,c=ae(a,i.shape),l=c,u=tm(l,s),d=i;u!=null&&(d=aQ({inputs:{x:i},backend:n,attrs:{perm:u}}),l=rm(l.length,s)),em(`any`,l,s);let[f,p]=Qp(d.shape,l),m=C(p),h=$({inputs:{x:d},backend:n,attrs:{shape:[-1,m]}}),g=ZZ(h,h.dtype,`any`,n),_;if(o){let e=$p(f,c);_=$({inputs:{x:g},backend:n,attrs:{shape:e}})}else _=$({inputs:{x:g},backend:n,attrs:{shape:f}});return n.disposeIntermediateTensorInfo(h),n.disposeIntermediateTensorInfo(g),u!=null&&n.disposeIntermediateTensorInfo(d),_}var EQ={kernelName:`Any`,backendName:`webgl`,kernelFunc:TQ},DQ=class{constructor(e,t,n){this.variableNames=[`A`];let{windowSize:r,batchSize:i,outSize:a}=e;n||this.variableNames.push(`bestIndicesA`),this.outputShape=[i,a];let o=t===`max`?`>`:`<`,s=n?`inOffset + i;`:`round(getBestIndicesA(batch, inOffset + i));`;this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = outIdx * ${r};

        int bestIndex = inOffset;
        float bestValue = getA(batch, bestIndex);

        for (int i = 0; i < ${r}; i++) {
          int inIdx = ${s};
          float candidate = getA(batch, inIdx);
          if (candidate ${o} bestValue) {
            bestValue = candidate;
            bestIndex = inIdx;
          }
        }
        setOutput(float(bestIndex));
      }
    `}};Y();var OQ=class{constructor(e,t,n,r){this.variableNames=[`A`],this.packedInputs=!0,this.packedOutput=!0,y(e.length>2,()=>`Packed arg${n.charAt(0).toUpperCase()+n.slice(1)} supports only inputs with rank above 2.`);let i=e[e.length-1],a=Math.ceil(i/t);this.outputShape=e.slice(0,-1),a>1&&this.outputShape.push(a),r||this.variableNames.push(`bestIndicesA`);let o=this.outputShape,s=o.length,c=tY(s),l=IX(`coords`,s),u,d;if(a===1){d=s+1;let e=tY(d);u=`
        ${e} sourceLocR = ${e}(${l.join()}, 0);
        ++${l[s-1]};
        ${e} sourceLocG = ${e}(${l.join()}, 0);
        ++${l[s-2]};
        ${e} sourceLocA = ${e}(${l.join()}, 0);
        --${l[s-1]};
        ${e} sourceLocB = ${e}(${l.join()}, 0);
        --${l[s-2]};`}else d=s,u=`
        ${c} sourceLocR = coords;
        ++${l[s-1]};
        ${c} sourceLocG = coords;
        ++${l[s-2]};
        ${c} sourceLocA = coords;
        --${l[s-1]};
        ${c} sourceLocB = coords;
        --${l[s-2]};`;let f=[`x`,`y`,`z`,`w`,`u`,`v`].slice(0,d),p=`.`+f[d-1],m=f.map(e=>`int `+e),h=IX(`sourceLocR`,d-1).concat(`inIdx.r`),g=IX(`sourceLocG`,d-1).concat(`inIdx.g`),_=IX(`sourceLocB`,d-1).concat(`inIdx.b`),v=IX(`sourceLocA`,d-1).concat(`inIdx.a`),b=n===`max`?`greaterThan`:`lessThan`,x=r?``:`
          inIdx = round(vec4(getBestIndicesAChannel(${h.join()}),
                             getBestIndicesAChannel(${g.join()}),
                             getBestIndicesAChannel(${_.join()}),
                             getBestIndicesAChannel(${v.join()})));`,S=`vec4(
            getAChannel(${h.join()}),
            hasNextCol ? getAChannel(${g.join()}) : 0.,
            hasNextRow ? getAChannel(${_.join()}) : 0.,
            hasNextRow && hasNextCol ? getAChannel(${v.join()}) : 0.)`,C=r?``:`
      float getBestIndicesAChannel(${m.join()}) {
        return getChannel(getBestIndicesA(${f.join()}),
                                          vec2(${f.slice(-2).join()}));
      }`;this.userCode=`
      float getAChannel(${m.join()}) {
        return getChannel(getA(${f.join()}),
                               vec2(${f.slice(-2).join()}));
      }
      ${C}
      void main() {
        ${c} coords = getOutputCoords();
        bool hasNextCol = ${l[s-1]} < ${o[s-1]-1};
        bool hasNextRow = ${l[s-2]} < ${o[s-2]-1};
        ${u}
        ivec4 srcIdx = ivec4(sourceLocR${p}, sourceLocG${p},
          sourceLocB${p}, sourceLocA${p}) * ${t};
        ivec4 inIdx = srcIdx;
        vec4 bestIndex = vec4(inIdx);
        vec4 bestValue = ${S};

        for (int i = 0; i < ${t}; i++) {
          inIdx = srcIdx;
          ${x}
          vec4 candidate = ${S};
          bvec4 nan = isnan(candidate);
          bvec4 replace = bvec4(
            vec4(${b}(candidate, bestValue)) * (vec4(1.0) - vec4(nan)));

          bestValue = vec4(replace.x  ? candidate.x : bestValue.x,
                           replace.y  ? candidate.y : bestValue.y,
                           replace.z  ? candidate.z : bestValue.z,
                           replace.w  ? candidate.w : bestValue.w);
          bestIndex = mix(bestIndex, vec4(inIdx), vec4(replace));
          srcIdx++;
        }
        setOutput(bestIndex);
      }
    `}};Y();function kQ(e,t,n,r=null){let i=t.shape[0],a=t.shape[1];r!=null&&(i=r.shape[0],a=r.shape[1]);let o=aT(a),s=new DQ({windowSize:o,inSize:a,batchSize:i,outSize:Math.ceil(a/o)},n,r==null),c=[t];r!=null&&c.push(r);let l=e.runWebGLProgram(s,c,`int32`);if(l.shape[1]===1)return l;let u=kQ(e,t,n,l);return e.disposeIntermediateTensorInfo(l),u}function AQ(e,t,n,r=null){let i=r==null?t.shape:r.shape,a=i[i.length-1],o=new OQ(i,aT(a),n,r==null),s=r==null?[t]:[t,r],c=e.runWebGLProgram(o,s,`int32`);if(c.shape.length===t.shape.length){let r=AQ(e,t,n,c);return e.disposeIntermediateTensorInfo(c),r}return c}function jQ(e,t,n,r){let i=[n];if(em(`arg`+r.charAt(0).toUpperCase()+r.slice(1),i,t.shape.length),!O().getBool(`WEBGL_PACK_REDUCE`)||t.shape.length<=2){let n=[],a=e.texData.get(t.dataId),o=a!==null&&a.isPacked,s=t;o&&(s=e.unpackTensor(t),n.push(s));let[c,l]=Qp(s.shape,i),u=C(l),d=$({inputs:{x:s},backend:e,attrs:{shape:[-1,u]}});n.push(d);let f=kQ(e,d,r);n.push(f);let p=$({inputs:{x:f},backend:e,attrs:{shape:c}});return n.forEach(t=>e.disposeIntermediateTensorInfo(t)),p}return AQ(e,t,r)}Y();function MQ(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{axis:a}=r,o=ae(a,i.shape),s=tm(o,i.shape.length),c=i,l=[];s!=null&&(c=aQ({inputs:{x:i},backend:n,attrs:{perm:s}}),l.push(c),o=rm(o.length,c.shape.length)),em(`argMax`,[o[0]],c.shape.length);let u=jQ(n,c,o[0],`max`);return l.forEach(e=>n.disposeIntermediateTensorInfo(e)),u}var NQ={kernelName:Je,backendName:`webgl`,kernelFunc:MQ};Y();function PQ(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{axis:a}=r,o=ae(a,i.shape),s=tm(o,i.shape.length),c=i,l=[];s!=null&&(c=aQ({inputs:{x:i},backend:n,attrs:{perm:s}}),l.push(c),o=rm(o.length,c.shape.length)),em(`argMin`,[o[0]],c.shape.length);let u=jQ(n,c,o[0],`min`);return l.forEach(e=>n.disposeIntermediateTensorInfo(e)),u}var FQ={kernelName:Ye,backendName:`webgl`,kernelFunc:PQ};Y();var IQ=LZ({opSnippet:YX+`
  if (abs(x) > 1.) {
    return NAN;
  }
  return asin(x);
`}),LQ={kernelName:Xe,backendName:`webgl`,kernelFunc:IQ};Y();var RQ=LZ({opSnippet:YX+`return log(x + sqrt(x * x + 1.0));`}),zQ={kernelName:Ze,backendName:`webgl`,kernelFunc:RQ};Y();var BQ=LZ({opSnippet:YX+`
  return atan(x);
`}),VQ={kernelName:Qe,backendName:`webgl`,kernelFunc:BQ};Y();var HQ=RZ({opSnippet:bZ+`
  return atan(a, b);
`,packedOpSnippet:`
  vec4 result = atan(a, b);
  bvec4 isNaNA = isnan(a);
  bvec4 isNaNB = isnan(b);
  bvec4 isNaN = bvec4(isNaNA.x || isNaNB.x, isNaNA.y || isNaNB.y, isNaNA.z || isNaNB.z, isNaNA.w || isNaNB.w);
  `+SZ+`
  return result;
`}),UQ={kernelName:et,backendName:`webgl`,kernelFunc:HQ};Y();var WQ=LZ({opSnippet:YX+`
  if ((x < -1.0) || (x > 1.0)) return NAN;
return (log(1.0 + x) - log(1.0 - x)) / 2.0;`}),GQ={kernelName:$e,backendName:`webgl`,kernelFunc:WQ},KQ=class{constructor(e,t,n,r=!1,i=!1){if(this.variableNames=[`x`],t===`avg`&&n)throw Error(`Cannot compute positions for average pool.`);let a=e.filterWidth,o=e.strideHeight,s=e.strideWidth,c=e.dilationHeight,l=e.dilationWidth,u=e.effectiveFilterHeight,d=e.effectiveFilterWidth,f=e.padInfo.top,p=e.padInfo.left;this.outputShape=e.outShape;let m=t===`avg`,h=`((batch  * ${e.inHeight} + xR) * ${e.inWidth} + xC) * ${e.inChannels} + d`,g=`(xR * ${e.inWidth} + xC) * ${e.inChannels} + d`,_=`0.0`;if(m||(_=`-1.0 / 1e-20`),n){this.userCode=`
        const ivec2 strides = ivec2(${o}, ${s});
        const ivec2 pads = ivec2(${f}, ${p});

        void main() {
          ivec4 coords = getOutputCoords();
          int batch = coords[0];
          int d = coords[3];

          ivec2 xRCCorner = coords.yz * strides - pads;
          int xRCorner = xRCCorner.x;
          int xCCorner = xRCCorner.y;

          // max/min x(?, ?, d) to get y(yR, yC, d).
          // ? = to be determined
          float minMaxValue = 0.0;
          float minMaxValueFound = 0.0;
          int minMaxPosition = 0;
          float avgValue = 0.0;

          for (int wR = 0; wR < ${u};
              wR += ${c}) {
            int xR = xRCorner + wR;

            if (xR < 0 || xR >= ${e.inHeight}) {
              continue;
            }

            for (int wC = 0; wC < ${d};
                wC += ${l}) {
              int xC = xCCorner + wC;

              if (xC < 0 || xC >= ${e.inWidth}) {
                continue;
              }

              float value = getX(batch, xR, xC, d);

              // If a min / max value has already been found, use it. If not,
              // use the current value.
              float currMinMaxValue = mix(
                  value, minMaxValue, minMaxValueFound);
              if (value >= currMinMaxValue) {
                minMaxValue = value;
                minMaxValueFound = 1.0;
                minMaxPosition = ${r?i?h:g:`wR * ${d} + wC`};
              }
            }
          }
          setOutput(float(minMaxPosition));
        }
      `;return}let v=`${t}(${t}(${t}(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])`;t===`avg`&&(v=`avgValue / count`);let y=Math.floor(a/4)*4,b=a%4,x=`
      if (${m}) {
        avgValue += dot(values, ones);
      } else {
        minMaxValue = max(values, minMaxValue);
      }
    `;this.userCode=`
      const ivec2 strides = ivec2(${o}, ${s});
      const ivec2 pads = ivec2(${f}, ${p});
      const float initializationValue = ${_};
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float count = 0.0;

      float getValue(int batch, int xR, int xC, int d) {
        if (xC < 0 || xC >= ${e.inWidth}) {
          return initializationValue;
        }
        count += 1.0;
        return getX(batch, xR, xC, d);
      }

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d = coords[3];

        ivec2 xRCCorner = coords.yz * strides - pads;
        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        // max/min x(?, ?, d) to get y(yR, yC, d).
        // ? = to be determined
        vec4 minMaxValue = vec4(${_});
        float avgValue = 0.0;
        count = 0.0;

        for (int wR = 0; wR < ${u};
            wR += ${c}) {
          int xR = xRCorner + wR;

          if (xR < 0 || xR >= ${e.inHeight}) {
            continue;
          }

          for (int wC = 0; wC < ${y}; wC += 4) {
            int xC = xCCorner + wC * ${l};

            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              getValue(batch, xR, xC + ${l}, d),
              getValue(batch, xR, xC + 2 * ${l}, d),
              getValue(batch, xR, xC + 3 * ${l}, d)
            );

            ${x}
          }

          int xC = xCCorner + ${y};
          if (${b===1}) {
            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              initializationValue,
              initializationValue,
              initializationValue
            );

            ${x}
          } else if (${b===2}) {
            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              getValue(batch, xR, xC + ${l}, d),
              initializationValue,
              initializationValue
            );

            ${x}
          } else if (${b===3}) {
            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              getValue(batch, xR, xC + ${l}, d),
              getValue(batch, xR, xC + 2 * ${l}, d),
              initializationValue
            );

            ${x}
          }
        }
        setOutput(${v});
      }
    `}},qQ=class{constructor(e,t,n,r=!1,i=!1){if(this.variableNames=[`x`],t===`avg`&&n)throw Error(`Cannot compute positions for average pool.`);let a=e.filterWidth,o=e.strideDepth,s=e.strideHeight,c=e.strideWidth,l=e.dilationDepth,u=e.dilationHeight,d=e.dilationWidth,f=e.effectiveFilterDepth,p=e.effectiveFilterHeight,m=e.effectiveFilterWidth,h=e.padInfo.front,g=e.padInfo.top,_=e.padInfo.left;this.outputShape=e.outShape;let v=t===`avg`,y=`0.0`;if(v||(y=`-1.0 / 1e-20`),n){this.userCode=`
        const ivec3 strides =
            ivec3(${o}, ${s}, ${c});
        const ivec3 pads = ivec3(${h}, ${g}, ${_});

        void main() {
          ivec5 coords = getOutputCoords();
          int batch = coords.x;
          int ch = coords.u;

          ivec3 xCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;
          int xDCorner = xCorner.x;
          int xRCorner = xCorner.y;
          int xCCorner = xCorner.z;

          // max/min x(?, ?, ?, ch) to get y(yD, yR, yC, ch).
          // ? = to be determined
          float minMaxValue = 0.0;
          float minMaxValueFound = 0.0;
          int minMaxPosition = 0;

          for (int wD = 0; wD < ${f};
              wD += ${l}) {
            int xD = xDCorner + wD;

            if (xD < 0 || xD >= ${e.inDepth}) {
              continue;
            }

            for (int wR = 0; wR < ${p};
                wR += ${u}) {
              int xR = xRCorner + wR;

              if (xR < 0 || xR >= ${e.inHeight}) {
                continue;
              }

              for (int wC = 0; wC < ${m};
                  wC += ${d}) {
                int xC = xCCorner + wC;

                if (xC < 0 || xC >= ${e.inWidth}) {
                  continue;
                }

                float value = getX(batch, xD, xR, xC, ch);

                // If a min / max value has already been found, use it. If not,
                // use the current value.
                float currMinMaxValue = mix(
                    value, minMaxValue, minMaxValueFound);
                if (value >= currMinMaxValue) {
                  minMaxValue = value;
                  minMaxValueFound = 1.0;
                  minMaxPosition = ${r?i?`(((batch * ${e.inDepth} + xD) * ${e.inHeight} + xR) * ${e.inWidth} + xC) * ${e.inChannels} + ch`:`((xD * ${e.inHeight} + xR) * ${e.inWidth} + xC) * ${e.inChannels} + ch`:`wD * ${p} * ${m} +
                      wR * ${m} + wC`};
                }
              }
            }
          }
          setOutput(float(minMaxPosition));
        }
      `;return}let b=`${t}(${t}(${t}(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])`;t===`avg`&&(b=`avgValue / count`);let x=Math.floor(a/4)*4,S=a%4,C=`
      if (${v}) {
        avgValue += dot(values, ones);
      } else {
        minMaxValue = max(values, minMaxValue);
      }
    `;this.userCode=`
      const ivec3 strides =
        ivec3(${o}, ${s}, ${c});
      const ivec3 pads = ivec3(${h}, ${g}, ${_});
      const float initializationValue = ${y};
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float count = 0.0;

      float getValue(int batch, int xD, int xR, int xC, int ch) {
        if (xC < 0 || xC >= ${e.inWidth}) {
          return initializationValue;
        }
        count += 1.0;
        return getX(batch, xD, xR, xC, ch);
      }

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int ch = coords.u;

        ivec3 xCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;
        int xDCorner = xCorner.x;
        int xRCorner = xCorner.y;
        int xCCorner = xCorner.z;

        // max/min x(?, ?, ?, d) to get y(yD, yR, yC, ch).
        // ? = to be determined
        vec4 minMaxValue = vec4(${y});
        float avgValue = 0.0;
        count = 0.0;

        for (int wD = 0; wD < ${f};
            wD += ${l}) {
          int xD = xDCorner + wD;

          if (xD < 0 || xD >= ${e.inDepth}) {
            continue;
          }

          for (int wR = 0; wR < ${p};
            wR += ${u}) {
            int xR = xRCorner + wR;

            if (xR < 0 || xR >= ${e.inHeight}) {
              continue;
            }

            for (int wC = 0; wC < ${x}; wC += 4) {
              int xC = xCCorner + wC * ${d};

              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                getValue(batch, xD, xR, xC + ${d}, ch),
                getValue(batch, xD, xR, xC + 2 * ${d}, ch),
                getValue(batch, xD, xR, xC + 3 * ${d}, ch)
              );

              ${C}
            }

            int xC = xCCorner + ${x};
            if (${S===1}) {
              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                initializationValue,
                initializationValue,
                initializationValue
              );

              ${C}
            } else if (${S===2}) {
              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                getValue(batch, xD, xR, xC + ${d}, ch),
                initializationValue,
                initializationValue
              );

              ${C}
            } else if (${S===3}) {
              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                getValue(batch, xD, xR, xC + ${d}, ch),
                getValue(batch, xD, xR, xC + 2 * ${d}, ch),
                initializationValue
              );

              ${C}
            }
          }
          setOutput(${b});
        }
      }
    `}};Y();function JQ(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t;rJ(i,`avgPool`);let{filterSize:a,strides:o,pad:s,dimRoundingMode:c}=r;y(pd(o,1),()=>`Error in avgPool: Either strides or dilations must be 1. Got strides ${o} and dilations '1'`);let l=$u(i.shape,a,o,1,s,c);if(l.filterWidth===1&&l.filterHeight===1&&T(l.inShape,l.outShape))return wZ({inputs:{x:i},backend:n});let u=new KQ(l,`avg`,!1);return n.runWebGLProgram(u,[i],`float32`)}var YQ={kernelName:tt,backendName:`webgl`,kernelFunc:JQ};Y();function XQ(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{filterSize:a,strides:o,pad:s,dimRoundingMode:c,dataFormat:l}=r,u=new qQ(ed(i.shape,a,o,[1,1,1],s,c,l),`avg`,!1);return n.runWebGLProgram(u,[i],`float32`)}var ZQ={kernelName:rt,backendName:`webgl`,kernelFunc:XQ},QQ=class{constructor(e){this.variableNames=[`dy`],this.outputShape=e.inShape;let t=e.filterHeight,n=e.filterWidth,r=e.strideHeight,i=e.strideWidth,a=e.dilationHeight,o=e.dilationWidth,s=e.effectiveFilterHeight,c=e.effectiveFilterWidth,l=s-1-e.padInfo.top,u=c-1-e.padInfo.left,d=1/(t*n);this.userCode=`
      const ivec2 pads = ivec2(${l}, ${u});
      const float avgMultiplier = float(${d});

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];

        ivec2 dyRCCorner = coords.yz - pads;
        int dyRCorner = dyRCCorner.x;
        int dyCCorner = dyRCCorner.y;

        // Convolve dy(?, ?, d) with pos mask(:, :, d) to get dx(xR, xC, d).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < ${s};
            wR += ${a}) {
          float dyR = float(dyRCorner + wR) / ${r}.0;

          if (dyR < 0.0 || dyR >= ${e.outHeight}.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          for (int wC = 0; wC < ${c};
            wC+= ${o}) {
            float dyC = float(dyCCorner + wC) / ${i}.0;

            if (dyC < 0.0 || dyC >= ${e.outWidth}.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            float dyValue = getDy(b, idyR, idyC, d);

            dotProd += dyValue * avgMultiplier;
          }
        }
        setOutput(dotProd);
      }
    `}},$Q=class{constructor(e){this.variableNames=[`dy`],this.outputShape=e.inShape;let t=e.filterDepth,n=e.filterHeight,r=e.filterWidth,i=e.strideDepth,a=e.strideHeight,o=e.strideWidth,s=e.dilationDepth,c=e.dilationHeight,l=e.dilationWidth,u=e.effectiveFilterDepth,d=e.effectiveFilterHeight,f=e.effectiveFilterWidth,p=u-1-e.padInfo.front,m=d-1-e.padInfo.top,h=f-1-e.padInfo.left,g=1/(t*n*r);this.userCode=`
      const ivec3 pads = ivec3(${p}, ${m}, ${h});
      const float avgMultiplier = float(${g});

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int ch = coords.u;

        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;
        int dyDCorner = dyCorner.x;
        int dyRCorner = dyCorner.y;
        int dyCCorner = dyCorner.z;

        // Convolve dy(?, ?, ?, d) with pos mask(:, :, :, ch) to get
        // dx(xD, xR, xC, ch).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;

        for (int wD = 0; wD < ${u};
            wD += ${s}) {
          float dyD = float(dyDCorner + wD) / ${i}.0;

          if (dyD < 0.0 || dyD >= ${e.outDepth}.0 || fract(dyD) > 0.0) {
            continue;
          }
          int idyD = int(dyD);

          for (int wR = 0; wR < ${d};
              wR += ${c}) {
            float dyR = float(dyRCorner + wR) / ${a}.0;

            if (dyR < 0.0 || dyR >= ${e.outHeight}.0 ||
                fract(dyR) > 0.0) {
              continue;
            }
            int idyR = int(dyR);

            for (int wC = 0; wC < ${f};
                wC += ${l}) {
              float dyC = float(dyCCorner + wC) / ${o}.0;

              if (dyC < 0.0 || dyC >= ${e.outWidth}.0 ||
                  fract(dyC) > 0.0) {
                continue;
              }
              int idyC = int(dyC);

              float dyValue = getDy(batch, idyD, idyR, idyC, ch);

              dotProd += dyValue * avgMultiplier;
            }
          }
        }
        setOutput(dotProd);
      }
    `}};Y();function e$(e){let{inputs:t,backend:n,attrs:r}=e,{dy:i,input:a}=t,o=a,{filterSize:s,strides:c,pad:l,dimRoundingMode:u}=r,d=new $Q(ed(o.shape,s,c,[1,1,1],l,u));return n.runWebGLProgram(d,[i],o.dtype)}var t$={kernelName:it,backendName:`webgl`,kernelFunc:e$};Y();function n$(e){let{inputs:t,backend:n,attrs:r}=e,{dy:i,input:a}=t,o=a;rJ([i,a],`avgPoolGrad`);let{filterSize:s,strides:c,pad:l}=r,u=new QQ($u(o.shape,s,c,1,l));return n.runWebGLProgram(u,[i],o.dtype)}var r$={kernelName:nt,backendName:`webgl`,kernelFunc:n$};Y();function i$(e){let{inputs:t,backend:n,attrs:r}=e,{a:i,b:a}=t,{transposeA:o,transposeB:s}=r;return sQ({a:i,b:a,transposeA:o,transposeB:s,backend:n})}var a$={kernelName:at,backendName:`webgl`,kernelFunc:i$};Y();var o$=class{constructor(e,t,n,r,i,a){this.outputShape=[],this.variableNames=[`x`,`mean`,`variance`],Gc(e,t),Gc(e,n);let o=`0.0`;r!=null&&(Gc(e,r),this.variableNames.push(`offset`),o=`getOffsetAtOutCoords()`);let s=`1.0`;i!=null&&(Gc(e,i),this.variableNames.push(`scale`),s=`getScaleAtOutCoords()`),this.outputShape=e,this.userCode=`
      void main() {
        float x = getXAtOutCoords();
        float mean = getMeanAtOutCoords();
        float variance = getVarianceAtOutCoords();
        float offset = ${o};
        float scale = ${s};
        float inv = scale * inversesqrt(variance + float(${a}));
        setOutput(dot(vec3(x, -mean, offset), vec3(inv, inv, 1)));
      }
    `}};Y();var s$=class{constructor(e,t,n,r,i,a){this.packedInputs=!0,this.packedOutput=!0,this.variableNames=[`x`,`mean`,`variance`],Gc(e,t),Gc(e,n);let o=`vec4(0.0)`;r!=null&&(Gc(e,r),this.variableNames.push(`offset`),o=`getOffsetAtOutCoords()`);let s=`vec4(1.0)`;i!=null&&(Gc(e,i),this.variableNames.push(`scale`),s=`getScaleAtOutCoords()`),this.outputShape=e,this.userCode=`
      void main() {
        vec4 offset = ${o};
        vec4 scale = ${s};

        vec4 x = getXAtOutCoords();
        vec4 mean = getMeanAtOutCoords();
        vec4 variance = getVarianceAtOutCoords();

        vec4 inv = scale * inversesqrt(variance + vec4(${a}));

        setOutput((x - mean) * inv + offset);
      }
    `}};Y();var c$={kernelName:Gt,backendName:`webgl`,kernelFunc:({inputs:e,backend:t,attrs:n})=>{let{x:r,mean:i,variance:a,offset:o,scale:s}=e;y(i.shape.length===a.shape.length,()=>`Batch normalization gradient requires mean and variance to have equal ranks.`),y(o==null||i.shape.length===o.shape.length,()=>`Batch normalization gradient requires mean and offset to have equal ranks.`),y(s==null||i.shape.length===s.shape.length,()=>`Batch normalization gradient requires mean and scale to have equal ranks.`);let{varianceEpsilon:c}=n;c??=.001;let l=[r,i,a],u=null;o!=null&&(u=o.shape,l.push(o));let d=null;s!=null&&(d=s.shape,l.push(s));let f=O().getBool(`WEBGL_PACK_NORMALIZATION`)?new s$(r.shape,i.shape,a.shape,u,d,c):new o$(r.shape,i.shape,a.shape,u,d,c);return t.runWebGLProgram(f,l,l[0].dtype)}},l$=class{constructor(e){this.variableNames=[`source`],this.outputShape=e,this.rank=e.length;let t=tY(this.rank);this.customUniforms=[{name:`start`,arrayIndex:this.rank,type:`int`}];let n=d$(this.rank),r;r=`
        ${t} sourceLoc;
        ${t} coords = getOutputCoords();
        ${e.map((e,t)=>`sourceLoc.${u$[t]} = start[${t}] + coords.${u$[t]};`).join(`
`)}
      `,this.userCode=`
      void main() {
        ${r}
        setOutput(getSource(${n}));
      }
    `}},u$=[`x`,`y`,`z`,`w`,`u`,`v`];function d$(e){if(e===1)return`sourceLoc`;if(e<=6)return u$.slice(0,e).map(e=>`sourceLoc.`+e).join(`,`);throw Error(`Slicing for rank ${e} is not yet supported`)}var f$=class{constructor(e){this.variableNames=[`source`],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=e,this.rank=e.length,this.customUniforms=[{name:`start`,arrayIndex:this.rank,type:`int`}];let t=tY(this.rank),n=IX(`coords`,this.rank),r=IX(`sourceLoc`,this.rank),i=this.rank===1?`sourceLoc`:`vec2(${r.slice(-2).join()})`,a=`getChannel(getSource(${r.join()}), ${i})`,o=`
      result.x = ${a};
      if (++${n[this.rank-1]} < ${e[this.rank-1]}) {
        ++${r[this.rank-1]};
        result.y = ${a};
        --${r[this.rank-1]};
      }
    `,s=this.rank===1?``:`
      --${n[this.rank-1]};
      if (++${n[this.rank-2]} < ${e[this.rank-2]}) {
        ++${r[this.rank-2]};
        result.z = ${a};
        if (++${n[this.rank-1]} < ${e[this.rank-1]}) {
          ++${r[this.rank-1]};
          result.w = ${a};
        }
      }
    `,c=this.rank<=4?`sourceLoc = coords +
            ${t}(${e.map((e,t)=>`start[${t}]`).join()});`:e.map((e,t)=>`${r[t]} = ${n[t]} + start[${t}];`).join(`
`);this.userCode=`
      void main() {
        ${t} coords = getOutputCoords();
        ${t} sourceLoc;
        ${c}
        vec4 result = vec4(0.);
        ${o}
        ${s}
        setOutput(result);
      }
    `}};Y();function p$(e,t,n,r){let i=r.texData.get(e.dataId),a=r.makeTensorInfo(n,e.dtype),o=r.texData.get(a.dataId);Object.assign(o,i),o.refCount=1,o.shape=n,o.dtype=e.dtype;let s=Ol(t,xe(e.shape));i.slice&&(s+=i.slice.flatOffset),o.slice={flatOffset:s,origDataId:i.slice&&i.slice.origDataId||e.dataId};let c=r.dataRefCount.get(o.slice.origDataId)||1;return r.dataRefCount.set(o.slice.origDataId,c+1),a}function m$(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{begin:a,size:o}=r,[s,c]=kl(i,a,o);if(hl(i,s,c),C(c)===0)return n.makeTensorInfo(c,i.dtype,[]);if(n.shouldExecuteOnCPU([i])||i.dtype===`string`){let e=xX(n.texData.get(i.dataId).values,s,c,i.shape,i.dtype);return n.makeTensorInfo(c,i.dtype,e)}let{isPacked:l}=n.texData.get(i.dataId),u=Dl(i.shape,s,c);if(l||!u){let e=O().getBool(`WEBGL_PACK_ARRAY_OPERATIONS`)?new f$(c):new l$(c),t=[s];return n.runWebGLProgram(e,[i],i.dtype,t)}return n.uploadToGPU(i.dataId),p$(i,s,c,n)}var h$={kernelName:rr,backendName:`webgl`,kernelFunc:m$};Y();var g$={kernelName:ot,backendName:`webgl`,kernelFunc:e=>{let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{blockShape:a,crops:o}=r;y(i.shape.length<=4,()=>`batchToSpaceND for rank > 4 with a WebGL backend not implemented yet`);let s=a.reduce((e,t)=>e*t),c=lT(i.shape,a,s),l=uT(c.length,a.length),u=dT(i.shape,a,s),d=fT(o,a.length),f=pT(u,o,a.length),p=[],m=$({inputs:{x:i},backend:n,attrs:{shape:c}}),h=aQ({inputs:{x:m},backend:n,attrs:{perm:l}}),g=$({inputs:{x:h},backend:n,attrs:{shape:u}}),_=m$({inputs:{x:g},backend:n,attrs:{begin:d,size:f}});return p.push(m),p.push(h),p.push(g),p.forEach(e=>n.disposeIntermediateTensorInfo(e)),_}};Y();function _$(e){let{inputs:t,backend:n,attrs:r}=e,{x:i,weights:a}=t,{size:o}=r,s=UY(n.readSync(i.dataId),n.readSync(a.dataId),a.dtype,a.shape,o);return n.makeTensorInfo([o],a.dtype,s)}var v$={kernelName:st,backendName:`webgl`,kernelFunc:_$};Y();function y$(e){let{inputs:t,backend:n}=e,{s0:r,s1:i}=t,a=n.readSync(r.dataId),o=n.readSync(i.dataId),s=Gc(Array.from(a),Array.from(o));return n.makeTensorInfo([s.length],`int32`,Int32Array.from(s))}var b$={kernelName:lt,backendName:`webgl`,kernelFunc:y$};Y();var x$=RZ({opSnippet:`return float(a != b);`,cpuKernelImpl:dX,dtype:`bool`}),S$={kernelName:En,backendName:`webgl`,kernelFunc:x$};Y();function C$(e){let{inputs:t,backend:n}=e,{input:r}=t;return wZ({inputs:{x:n.texData.get(r.dataId).complexTensorInfos.real},backend:n})}var w$={kernelName:Vn,backendName:`webgl`,kernelFunc:C$},T$=`return float(int(x));`;function E$(e,t){let n=new JX(e.shape,T$),r=t.runWebGLProgram(n,[e],`int32`);return{dataId:r.dataId,shape:r.shape,dtype:r.dtype}}Y();function D$(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{dtype:a}=r;if(a===`complex64`){if(i.dtype===`complex64`)return wZ({inputs:{x:i},backend:n});let e=Pg(i.shape),t=D$({inputs:{x:i},backend:n,attrs:{dtype:`float32`}}),r=EZ({inputs:{real:t,imag:e},backend:n});return e.dispose(),n.disposeIntermediateTensorInfo(t),r}if(i.dtype===`complex64`){let e=C$({inputs:{input:i},backend:n}),t=D$({inputs:{x:e},backend:n,attrs:{dtype:a}});return n.disposeIntermediateTensorInfo(e),t}if(!de(i.dtype,a)){let e=wZ({inputs:{x:i},backend:n});return{dataId:e.dataId,shape:e.shape,dtype:a}}if(n.shouldExecuteOnCPU([i])){let e=n.texData.get(i.dataId).values,[t,r,o]=GY(e,i.shape,i.dtype,a);return n.makeTensorInfo(t,r,o)}if(a===`int32`)return E$(i,n);if(a===`bool`){let e=n.makeTensorInfo([],`bool`,se(`bool`,1)),t=x$({inputs:{a:i,b:e},backend:n});return n.disposeIntermediateTensorInfo(e),t}throw Error(`Error in Cast: failed to cast ${i.dtype} to ${a}`)}var O$={kernelName:ut,backendName:`webgl`,kernelFunc:D$};Y();var k$=`return ceil(x);`,A$=LZ({opSnippet:k$,packedOpSnippet:k$,cpuKernelImpl:KY}),j$={kernelName:dt,backendName:`webgl`,kernelFunc:A$},M$=class{constructor(e){this.variableNames=[`A`],this.customUniforms=[{name:`minVal`,type:`float`},{name:`maxVal`,type:`float`}],this.outputShape=e,this.userCode=`

      void main() {
        float value = getAAtOutCoords();
        if (isnan(value)) {
          setOutput(value);
          return;
        }

        setOutput(clamp(value, minVal, maxVal));
      }
    `}},N$=class{constructor(e){this.variableNames=[`A`],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:`minVal`,type:`float`},{name:`maxVal`,type:`float`}],this.outputShape=e,this.userCode=`
      void main() {
        vec4 value = getAAtOutCoords();

        if (any(isnan(value))) {
          setOutput(value);
          return;
        }

        setOutput(clamp(value, vec4(minVal), vec4(maxVal)));
      }
    `}};Y();function P$(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{clipValueMin:a,clipValueMax:o}=r,s;s=O().getBool(`WEBGL_PACK_CLIP`)?new N$(i.shape):new M$(i.shape);let c=[[a],[o]];return n.runWebGLProgram(s,[i],i.dtype,c)}var F$={kernelName:ft,backendName:`webgl`,kernelFunc:P$},I$=class{constructor(e){this.variableNames=[`real`,`imag`],this.outputShape=e,this.userCode=`
      void main() {
        float re = abs(getRealAtOutCoords());
        float im = abs(getImagAtOutCoords());
        float mx = max(re, im);

        // sadly the length function in glsl is not underflow-safe
        // (at least not on Intel GPUs). So the safe solution is
        // to ensure underflow-safety in all cases.
        setOutput(
          mx == 0.0 ? 0.0 : mx * length(vec2(1, min(re, im)/mx))
        );
      }
    `}};Y();function L$(e,t){return{dataId:t.dataId,dtype:t.dtype,shape:e.shape}}function R$(e){let{inputs:t,backend:n}=e,{x:r}=t,i=n.texData.get(r.dataId),a=new I$(r.shape),o=[L$(r,i.complexTensorInfos.real),L$(r,i.complexTensorInfos.imag)];return n.runWebGLProgram(a,o,o[0].dtype)}var z$={kernelName:mt,backendName:`webgl`,kernelFunc:R$};Y();var B$=class{constructor(e){this.outputShape=[],this.outputShape=Xw(e,1),this.variableNames=e.map((e,t)=>`T${t}`);let t=Array(e.length-1);t[0]=e[0][1];for(let n=1;n<t.length;n++)t[n]=t[n-1]+e[n][1];let n=[`if (yC < ${t[0]}) setOutput(getT0(yR, yC));`];for(let e=1;e<t.length;e++){let r=t[e-1];n.push(`else if (yC < ${t[e]}) setOutput(getT${e}(yR, yC-${r}));`)}let r=t.length,i=t[t.length-1];n.push(`else setOutput(getT${r}(yR, yC-${i}));`),this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int yR = coords.x;
        int yC = coords.y;

        ${n.join(`
        `)}
      }
    `}};Y();var V$=class{constructor(e,t){this.packedInputs=!0,this.packedOutput=!0,this.outputShape=[],this.outputShape=Xw(e,t);let n=this.outputShape,r=n.length,i=tY(r),a=IX(`coords`,r),o=[`x`,`y`,`z`,`w`,`u`,`v`].slice(0,r);this.variableNames=e.map((e,t)=>`T${t}`);let s=Array(e.length-1);s[0]=e[0][t];for(let n=1;n<s.length;n++)s[n]=s[n-1]+e[n][t];let c=o[t],l=o.slice(-2),u=o.join(),d=`if (${c} < ${s[0]}) {
        return getChannel(
            getT0(${u}), vec2(${l.join()}));
        }`;for(let e=1;e<s.length;e++){let t=s[e-1];d+=`
        if (${c} < ${s[e]}  && ${c} >= ${s[e-1]}) {
          return getChannel(
            getT${e}(${H$(o,c,t)}),
            vec2(${H$(l,c,t)}));
        }`}let f=s.length,p=s[s.length-1];d+=`
        return getChannel(
          getT${f}(${H$(o,c,p)}),
          vec2(${H$(l,c,p)}));`,this.userCode=`
      float getValue(${o.map(e=>`int `+e)}) {
        ${d}
      }

      void main() {
        ${i} coords = getOutputCoords();
        vec4 result = vec4(getValue(${a}), 0., 0., 0.);

        ${a[r-1]} = ${a[r-1]} + 1;
        if (${a[r-1]} < ${n[r-1]}) {
          result.g = getValue(${a});
        }

        ${a[r-2]} = ${a[r-2]} + 1;
        if (${a[r-2]} < ${n[r-2]}) {
          result.a = getValue(${a});
        }

        ${a[r-1]} = ${a[r-1]} - 1;
        if (${a[r-2]} < ${n[r-2]} &&
            ${a[r-1]} < ${n[r-1]}) {
          result.b = getValue(${a});
        }
        setOutput(result);
      }
    `}};function H$(e,t,n){let r=e.indexOf(t);return e.map((e,t)=>t===r?`${e} - ${n}`:e).join()}Y();function U$(e){let{inputs:t,backend:n}=e,{input:r}=t;return wZ({inputs:{x:n.texData.get(r.dataId).complexTensorInfos.imag},backend:n})}var W$={kernelName:Qt,backendName:`webgl`,kernelFunc:U$};Y();function G$(e,t,n){let r=e[0].dtype;if(r===`complex64`){let r=e.map(e=>C$({inputs:{input:e},backend:n})),i=e.map(e=>U$({inputs:{input:e},backend:n})),a=G$(r,t,n),o=G$(i,t,n),s=EZ({inputs:{real:a,imag:o},backend:n});return r.forEach(e=>n.disposeIntermediateTensorInfo(e)),i.forEach(e=>n.disposeIntermediateTensorInfo(e)),n.disposeIntermediateTensorInfo(a),n.disposeIntermediateTensorInfo(o),s}let i=n.shouldExecuteOnCPU(e);if(r===`string`&&(i=!0),i){let i=e.map(e=>{let r=[-1,C(e.shape.slice(t))];return $({inputs:{x:e},backend:n,attrs:{shape:r}})}),a=qY(i.map(e=>({vals:n.readSync(e.dataId),shape:e.shape})),Xw(i.map(e=>e.shape),1),r,i[0].shape[0]===1),o=Xw(e.map(e=>e.shape),t),s=n.makeTensorInfo(o,r,a);return i.forEach(e=>n.disposeIntermediateTensorInfo(e)),s}let a=e.filter(e=>C(e.shape)>0),o=O().getBool(`WEBGL_PACK_ARRAY_OPERATIONS`)&&a[0].shape.length>1;if(a.length===1){let t=o?new JX(e[0].shape,tZ):new cZ(e[0].shape,tZ);return n.runWebGLProgram(t,e,r)}let s=O().getNumber(`WEBGL_MAX_TEXTURES_IN_SHADER`);if(a.length>s){let e=[];for(let r=0;r<a.length;r+=s){let i=a.slice(r,r+s);e.push(G$(i,t,n))}let r=G$(e,t,n);for(let t of e)n.disposeIntermediateTensorInfo(t);return r}if(o){let e=new V$(a.map(e=>e.shape),t);return n.runWebGLProgram(e,a,r)}let{tensors2D:c,outShape:l}=K$(a,t,n),u=new B$(c.map(e=>e.shape)),d=n.runWebGLProgram(u,c,r);c.forEach(e=>n.disposeIntermediateTensorInfo(e));let f=$({inputs:{x:d},attrs:{shape:l},backend:n});return n.disposeIntermediateTensorInfo(d),f}function K$(e,t,n){let r=Xw(e.map(e=>e.shape),t);return{tensors2D:e.map(e=>$({inputs:{x:e},attrs:{shape:[-1,C(e.shape.slice(t))]},backend:n})),outShape:r}}Y();function q$(e){let{inputs:t,backend:n,attrs:r}=e,{axis:i}=r,a=ae(i,t[0].shape)[0];Yw(t.map(e=>e.shape),a);let o=Xw(t.map(e=>e.shape),a);if(C(o)===0)return n.makeTensorInfo(o,t[0].dtype,[]);let s=t.filter(e=>C(e.shape)>0);return s.length===1?wZ({inputs:{x:s[0]},backend:n}):G$(s,a,n)}var J$={kernelName:ht,backendName:`webgl`,kernelFunc:q$},Y$=class{constructor(e,t=!1,n=null,r=!1,i=!1){this.variableNames=[`x`,`W`],this.outputShape=e.outShape;let a=e.padInfo.top,o=e.padInfo.left,s=e.strideHeight,c=e.strideWidth,l=e.dilationHeight,u=e.dilationWidth,d=e.filterHeight,f=e.filterWidth,p=Math.floor(e.inChannels/4)*4,m=e.inChannels%4,h=e.dataFormat===`channelsLast`,g=h?1:2,_=h?2:3,v=h?3:1,y=``,b=``;n&&(y=r?`float activation(float a) {
          float b = getPreluActivationWeightsAtOutCoords();
          ${n}
        }`:i?`float activation(float a) {
          float b = getLeakyreluAlphaAtOutCoords();
          ${n}
        }`:`
          float activation(float x) {
            ${n}
          }
        `,b=`result = activation(result);`);let x=t?`result += getBiasAtOutCoords();`:``;t&&this.variableNames.push(`bias`),r&&this.variableNames.push(`preluActivationWeights`),i&&this.variableNames.push(`leakyreluAlpha`),this.userCode=`
      ${y}

      const ivec2 strides = ivec2(${s}, ${c});
      const ivec2 pads = ivec2(${a}, ${o});

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d2 = coords[${v}];

        ivec2 xRCCorner =
            ivec2(coords[${g}], coords[${_}]) * strides - pads;
        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        // Convolve x(?, ?, d1) with w(:, :, d1, d2) to get y(yR, yC, d2).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < ${d}; wR++) {
          int xR = xRCorner + wR * ${l};

          if (xR < 0 || xR >= ${e.inHeight}) {
            continue;
          }

          for (int wC = 0; wC < ${f}; wC++) {
            int xC = xCCorner + wC * ${u};

            if (xC < 0 || xC >= ${e.inWidth}) {
              continue;
            }

            for (int d1 = 0; d1 < ${p}; d1 += 4) {
              vec4 wValues = vec4(
                getW(wR, wC, d1, d2),
                getW(wR, wC, d1 + 1, d2),
                getW(wR, wC, d1 + 2, d2),
                getW(wR, wC, d1 + 3, d2)
              );

              if (${h}) {
                vec4 xValues = vec4(
                  getX(batch, xR, xC, d1),
                  getX(batch, xR, xC, d1 + 1),
                  getX(batch, xR, xC, d1 + 2),
                  getX(batch, xR, xC, d1 + 3)
                );
                dotProd += dot(xValues, wValues);
              } else {
                vec4 xValues = vec4(
                  getX(batch, d1, xR, xC),
                  getX(batch, d1 + 1, xR, xC),
                  getX(batch, d1 + 2, xR, xC),
                  getX(batch, d1 + 3, xR, xC)
                );
                dotProd += dot(xValues, wValues);
              }
            }

            if (${m===1}) {

              if (${h}) {
                dotProd +=
                    getX(batch, xR, xC, ${p}) *
                    getW(wR, wC, ${p}, d2);
              } else {
                dotProd +=
                    getX(batch, ${p}, xR, xC) *
                    getW(wR, wC, ${p}, d2);
              }

            } else if (${m===2}) {
              vec2 wValues = vec2(
                getW(wR, wC, ${p}, d2),
                getW(wR, wC, ${p} + 1, d2)
              );

              if (${h}) {
                vec2 xValues = vec2(
                  getX(batch, xR, xC, ${p}),
                  getX(batch, xR, xC, ${p} + 1)
                );
                dotProd += dot(xValues, wValues);
              } else {
                vec2 xValues = vec2(
                  getX(batch, ${p}, xR, xC),
                  getX(batch, ${p} + 1, xR, xC)
                );
                dotProd += dot(xValues, wValues);
              }

            } else if (${m===3}) {
              vec3 wValues = vec3(
                getW(wR, wC, ${p}, d2),
                getW(wR, wC, ${p} + 1, d2),
                getW(wR, wC, ${p} + 2, d2)
              );

              if (${h}) {
                vec3 xValues = vec3(
                  getX(batch, xR, xC, ${p}),
                  getX(batch, xR, xC, ${p} + 1),
                  getX(batch, xR, xC, ${p} + 2)
                );
                dotProd += dot(xValues, wValues);
              } else {
                vec3 xValues = vec3(
                  getX(batch, ${p}, xR, xC),
                  getX(batch, ${p} + 1, xR, xC),
                  getX(batch, ${p} + 2, xR, xC)
                );
                dotProd += dot(xValues, wValues);
              }

            }
          }
        }

        float result = dotProd;
        ${x}
        ${b}
        setOutput(result);
      }
    `}},X$=class{constructor(e){this.variableNames=[`x`,`W`],this.outputShape=e.outShape;let t=e.padInfo.front,n=e.padInfo.top,r=e.padInfo.left,i=e.strideDepth,a=e.strideHeight,o=e.strideWidth,s=e.dilationDepth,c=e.dilationHeight,l=e.dilationWidth,u=e.filterDepth,d=e.filterHeight,f=e.filterWidth,p=Math.floor(e.inChannels/4)*4,m=e.inChannels%4;this.userCode=`
      const ivec3 strides = ivec3(${i}, ${a}, ${o});
      const ivec3 pads = ivec3(${t}, ${n}, ${r});

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int d2 = coords.u;

        ivec3 xFRCCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;
        int xFCorner = xFRCCorner.x;
        int xRCorner = xFRCCorner.y;
        int xCCorner = xFRCCorner.z;

        // Convolve x(?, ?, ?, d1) with w(:, :, :, d1, d2) to get
        // y(yF, yR, yC, d2). ? = to be determined. : = across all
        // values in that axis.
        float dotProd = 0.0;
        for (int wF = 0; wF < ${u}; wF++) {
          int xF = xFCorner + wF * ${s};

          if (xF < 0 || xF >= ${e.inDepth}) {
            continue;
          }

          for (int wR = 0; wR < ${d}; wR++) {
            int xR = xRCorner + wR * ${c};

            if (xR < 0 || xR >= ${e.inHeight}) {
              continue;
            }

            for (int wC = 0; wC < ${f}; wC++) {
              int xC = xCCorner + wC * ${l};

              if (xC < 0 || xC >= ${e.inWidth}) {
                continue;
              }

              for (int d1 = 0; d1 < ${p}; d1 += 4) {
                vec4 xValues = vec4(
                  getX(batch, xF, xR, xC, d1),
                  getX(batch, xF, xR, xC, d1 + 1),
                  getX(batch, xF, xR, xC, d1 + 2),
                  getX(batch, xF, xR, xC, d1 + 3)
                );
                vec4 wValues = vec4(
                  getW(wF, wR, wC, d1, d2),
                  getW(wF, wR, wC, d1 + 1, d2),
                  getW(wF, wR, wC, d1 + 2, d2),
                  getW(wF, wR, wC, d1 + 3, d2)
                );

                dotProd += dot(xValues, wValues);
              }

              if (${m===1}) {
                dotProd +=
                  getX(batch, xF, xR, xC, ${p}) *
                  getW(wF, wR, wC, ${p}, d2);
              } else if (${m===2}) {
                vec2 xValues = vec2(
                  getX(batch, xF, xR, xC, ${p}),
                  getX(batch, xF, xR, xC, ${p} + 1)
                );
                vec2 wValues = vec2(
                  getW(wF, wR, wC, ${p}, d2),
                  getW(wF, wR, wC, ${p} + 1, d2)
                );
                dotProd += dot(xValues, wValues);
              } else if (${m===3}) {
                vec3 xValues = vec3(
                  getX(batch, xF, xR, xC, ${p}),
                  getX(batch, xF, xR, xC, ${p} + 1),
                  getX(batch, xF, xR, xC, ${p} + 2)
                );
                vec3 wValues = vec3(
                  getW(wF, wR, wC, ${p}, d2),
                  getW(wF, wR, wC, ${p} + 1, d2),
                  getW(wF, wR, wC, ${p} + 2, d2)
                );
                dotProd += dot(xValues, wValues);
              }
            }
          }
        }
        setOutput(dotProd);
      }
    `}};Y();var Z$=class{constructor(e,t=!1,n=null,r=!1,i=!1){this.variableNames=[`x`,`W`],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:`pads`,type:`ivec2`},{name:`strides`,type:`ivec2`},{name:`dilations`,type:`ivec2`},{name:`inDims`,type:`ivec2`}],this.outputShape=e.outShape,this.enableShapeUniforms=uY(this.outputShape.length);let a=e.padInfo.left,o=e.strideWidth,s=e.dilationWidth,c=e.filterHeight,l=e.filterWidth,u=l,d=`
       int xR; int xC; int xCOffset;
       vec4 wTexel; vec4 previous; vec4 final;`;for(let e=0;e<l;e++)d+=`
           vec4 xTexelC${e*2};
           int xTexelC${e*2}Ready;
           vec4 xTexelC${e*2+1};
           int xTexelC${e*2+1}Ready;
           vec4 xC${e};`;d+=`
     for (int r = 0; r < ${c}; r++) {
      for (int d1 = 0; d1 < ${e.inChannels}; d1 += 2) {
       `;for(let e=0;e<l;e++)d+=`
           xTexelC${e*2} = vec4(0.0);
           xTexelC${e*2}Ready = 0;
           xTexelC${e*2+1} = vec4(0.0);
           xTexelC${e*2+1}Ready = 0;
           xC${e} = vec4(0.0);`;d+=`
         xR = xRCorner + r * dilations[0];
         if (xR >=0 && xR < inDims[0]) {
       `;for(let t=0;t<(u+1)/2;t++){let n=t*2;if(d+=`
           xC = xCCorner + ${n*s};
           `,o===1){if(n<l&&(a%2==1?(d+=`
                 xCOffset = xC + 1;
                 if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${n}Ready == 0) {
                   xTexelC${n} = getX(batch, xR, xCOffset, d1);

                   // Need to manually clear unused channels in case
                   // we're reading from recycled texture.
                   if (xCOffset + 1 >= inDims[1]) {
                     xTexelC${n}.zw = vec2(0.0);
                   }
                   xTexelC${n}Ready = 1;
                 }
               `,d+=s===1&&n>0?`
                 xC${n} = vec4(xTexelC${n-2}.zw, xTexelC${n}.xy);
                 `:`
                   xCOffset = xC + 1 - 2;

                   if (xCOffset >= 0 && xCOffset < inDims[1]) {
                     previous = getX(batch, xR, xCOffset, d1);

                     // Need to manually clear unused channels in case
                     // we're reading from recycled texture.
                     if (xCOffset + 1 >= inDims[1]) {
                       previous.zw = vec2(0.0);
                     }

                     xC${n} = vec4(previous.zw, xTexelC${n}.xy);
                   } else {
                     xC${n} = vec4(0.0, 0.0, xTexelC${n}.xy);
                   }
                   `):d+=`
                 if (xC >= 0 && xC < inDims[1] && xTexelC${n}Ready == 0) {
                   xTexelC${n} = getX(batch, xR, xC, d1);
                   if (xC + 1 >= inDims[1]) {
                     xTexelC${n}.zw = vec2(0.0);
                   }
                   xTexelC${n}Ready = 1;
                 }

                 xC${n} = xTexelC${n};
                 `,n+1<l)){let e=a%2==0?m(s):s;s%2==0&&a%2==1||s%2!=0&&a%2!=1?(d+=`
                   xCOffset = xC + imod(pads[1], 2) + ${e};

                   if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${n+1}Ready == 0) {
                     xTexelC${n+1} = getX(batch, xR, xCOffset, d1);

                     // Need to manually clear unused channels in case
                     // we're reading from recycled texture.
                     if (xCOffset + 1 >= inDims[1]) {
                       xTexelC${n+1}.zw = vec2(0.0);
                     }
                     xTexelC${n+1}Ready = 1;
                   }
                   `,d+=s>1?`
                     xCOffset -= 2;
                     if (xCOffset >= 0 && xCOffset < inDims[1]) {
                      previous = getX(batch, xR, xCOffset, d1);
                      xC${n+1} = vec4(previous.zw, xTexelC${n+1}.xy);
                     } else {
                      xC${n+1} = vec4(0.0, 0.0, xTexelC${n+1}.xy);
                     }
                     `:`
                     xC${n+1} = vec4(xTexelC${n}.zw, xTexelC${n+1}.xy);
                     `):d+=e===1?`
                     xC${n+1} = xTexelC${n};
                     `:`
                     xCOffset = xC + ${e};

                     if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${n+1}Ready == 0) {
                       xTexelC${n+1} = getX(batch, xR, xCOffset, d1);
                       if (xCOffset + 1 >= inDims[1]) {
                         xTexelC${n+1}.zw = vec2(0.0);
                       }
                       xTexelC${n+1}Ready = 1;
                     }

                     xC${n+1} = xTexelC${n+1};
                     `}}else n<l&&(a%2==1?(d+=`
                 xCOffset = xC + 1 - strides[1];
                 if(xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${n}Ready == 0) {
                   xTexelC${n} = getX(batch, xR, xCOffset, d1);
                   // Need to manually clear unused channels in case
                   // we're reading from recycled texture.
                   if (xCOffset + 1 >= inDims[1]) {
                     xTexelC${n}.zw = vec2(0.0);
                   }
                   xTexelC${n}Ready = 1;
                 }

                 if(xC + 1 >= 0 && xC + 1 < inDims[1] && xTexelC${n+1}Ready == 0) {
                   xTexelC${n+1} = getX(batch, xR, xC + 1, d1);
                   // Need to manually clear unused channels in case
                   // we're reading from recycled texture.
                   if (xC + 2 >= inDims[1]) {
                     xTexelC${n+1}.zw = vec2(0.0);
                   }
                   xTexelC${n+1}Ready = 1;
                 }

                 xC${n} = vec4(xTexelC${n}.zw, xTexelC${n+1}.zw);
               `,n+1<l&&(d+=`
                   final = vec4(0.0);
                   xCOffset = xC + 1 + strides[1];
                   if(xCOffset >= 0 && xCOffset < inDims[1]) {
                     final = getX(batch, xR, xCOffset, d1);
                   }
                   xC${n+1} = vec4(xTexelC${n+1}.xy, final.xy);
                 `)):(d+=`
                 if(xC >= 0 && xC < inDims[1] && xTexelC${n}Ready == 0) {
                   xTexelC${n} = getX(batch, xR, xC, d1);
                   if (xC + 1 >= inDims[1]) {
                     xTexelC${n}.zw = vec2(0.0);
                   }
                   xTexelC${n}Ready = 1;
                 }

                 xCOffset = xC + strides[1];
                 if(xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${n+1}Ready == 0) {
                   xTexelC${n+1} = getX(batch, xR, xCOffset, d1);
                   if (xCOffset + 1 >= inDims[1]) {
                     xTexelC${n+1}.zw = vec2(0.);
                   }
                   xTexelC${n+1}Ready = 1;
                 }

                 xC${n} = vec4(
                   xTexelC${n}.xy, xTexelC${n+1}.xy);
               `,n+1<l&&(d+=`
                   xC${n+1} = vec4(xTexelC${n}.zw, xTexelC${n+1}.zw);
                 `)));n<l&&(d+=`
             wTexel = getW(r, ${n}, d1, d2);
             dotProd += xC${n}.xxzz * vec4(wTexel.xy, wTexel.xy);
             if(d1 + 1 < ${e.inChannels}) {
               dotProd += xC${n}.yyww * vec4(wTexel.zw, wTexel.zw);
             }
           `,n+1<l&&(d+=`
               wTexel = getW(r, ${n+1}, d1, d2);
               dotProd += xC${n+1}.xxzz * vec4(wTexel.xy, wTexel.xy);
               if(d1 + 1 < ${e.inChannels}) {
                 dotProd += xC${n+1}.yyww * vec4(wTexel.zw, wTexel.zw);
               }
             `))}d+=`
     }
   `,d+=`
     }
   `,d+=`
     }
   `;let f=``,p=``;n&&(f=r?`vec4 activation(vec4 a) {
           vec4 b = getPreluActivationWeightsAtOutCoords();
           ${n}
         }`:i?`vec4 activation(vec4 a) {
           vec4 b = getLeakyreluAlphaAtOutCoords();
           ${n}
         }`:`vec4 activation(vec4 x) {
           ${n}
         }`,p=`result = activation(result);`);let h=t?`result += getBiasAtOutCoords();`:``;t&&this.variableNames.push(`bias`),r&&this.variableNames.push(`preluActivationWeights`),i&&this.variableNames.push(`leakyreluAlpha`),this.userCode=`
       ${f}

       void main() {
         ivec4 coords = getOutputCoords();
         int batch = coords.x;
         ivec2 xRCCorner = coords.yz * strides - pads;
         int d2 = coords.w;
         int xRCorner = xRCCorner.x;
         int xCCorner = xRCCorner.y;

         //intialize dotProd with a small epsilon seems to reduce GPU accuracy loss.
         vec4 dotProd = vec4(0.000000000000001);

         ${d}

         vec4 result = dotProd - vec4(0.000000000000001);
         ${h}
         ${p}
         setOutput(result);
       }
     `}},Q$=class{constructor(e,t){this.variableNames=[`A`],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:`inputShape`,type:`ivec4`},{name:`pad`,type:`ivec2`},{name:`stride`,type:`ivec2`},{name:`dilation`,type:`ivec2`},{name:`inChannels`,type:`int`},{name:`itemsPerBlockRow`,type:`int`},{name:`outWidth`,type:`int`}],this.outputShape=e,this.enableShapeUniforms=uY(this.outputShape.length);let{dataFormat:n}=t,r=aJ(),i=n===`channelsLast`,a=i?1:2,o=i?2:3,s=this.enableShapeUniforms?`if(blockIndex < outShape[2] && pos < outShape[1]) {`:`if(blockIndex < ${e[2]} && pos < ${e[1]}) {`,c=``;for(let e=0;e<=1;e++)for(let t=0;t<=1;t++)c+=`
          blockIndex = rc.z + ${t};
          pos = rc.y + ${e};

          ${s}
            offsetY = int(blockIndex / outWidth) * stride[0] - pad[0];
            d0 = offsetY + dilation[0] * (pos / itemsPerBlockRow);

            if(d0 < inputShape[${a}] && d0 >= 0) {
              // Use custom imod instead mod. On Intel GPU, mod may generate
              // unexpected value.
              // https://github.com/tensorflow/tfjs/issues/5447
              offsetX = imod(blockIndex, outWidth) * stride[1] - pad[1];
              d1 = offsetX + dilation[1] * (imod(pos, itemsPerBlockRow) /
                  inChannels);

              if(d1 < inputShape[${o}] && d1 >= 0) {

                ch = imod(pos, inChannels);

                if (${i}) {
                  innerDims = vec2(d1, ch);
                  result[${e*2+t}] = getChannel(
                    getA(rc.x, d0, int(innerDims.x),
                    int(innerDims.y)), innerDims);
                } else {
                  innerDims = vec2(d0, d1);
                  result[${e*2+t}] = getChannel(
                    getA(rc.x, ch, int(innerDims.x),
                    int(innerDims.y)), innerDims);
                }
              }
            }
          }
        `;this.userCode=`
      void main() {
        ivec3 rc = getOutputCoords();

        vec4 result = vec4(0);

        int blockIndex, pos, offsetY, d0, offsetX, d1, ch;
        vec2 innerDims;

        ${c}

        ${r.output} = result;
      }
    `}};Y();function $$(e,t){let n=e.length;return n>=3?t?[...e.slice(0,-3),e[n-3]*e[n-2],e[n-1]]:[...e.slice(0,-3),e[n-3],e[n-2]*e[n-1]]:!t&&n===1&&e[0]>1?[e[0],1]:null}function e1({x:e,filter:t,convInfo:n,backend:r,bias:i=null,preluActivationWeights:a=null,leakyreluAlpha:o=0,activation:s=null}){let c=e.shape,l=r.texData.get(e.dataId),u=n.inChannels,d=c[0]*c[1]*c[2],f=n.outChannels,p=n.dataFormat===`channelsLast`,m,h=[];if(a!=null){let e=$$(a.shape,p);e!=null&&(a=$({inputs:{x:a},backend:r,attrs:{shape:e}}),h.push(a))}if(i!=null){let e=$$(i.shape,p);e!=null&&(i=$({inputs:{x:i},backend:r,attrs:{shape:e}}),h.push(i))}if(!((d===1||f===1)&&u>1e3)&&l.isPacked&&p&&l.texture!=null&&c[2]%2!=0&&T(l.shape.slice(-3),c.slice(-3))){let u=c[0]*c[1]*(c[2]+1),d={dataId:e.dataId,shape:[1,u,n.inChannels],dtype:e.dtype},f=l.shape;l.shape=l.shape.slice(),l.shape[l.shape.length-2]++,y(Wq(l.shape,d.shape),()=>`packed reshape ${l.shape} to ${d.shape} isn't free`);let p=$({inputs:{x:t},backend:r,attrs:{shape:[1,n.inChannels,n.outChannels]}});h.push(p);let g=sQ({a:d,b:p,backend:r,transposeA:!1,transposeB:!1,bias:i,activation:s,preluActivationWeights:a,leakyreluAlpha:o}),_=r.texData.get(g.dataId);y(_.isPacked,()=>`batchMatMul result is expected to be packed`),l.shape=f,_.shape=n.outShape,m=wZ({inputs:{x:g},backend:r}),m.shape=n.outShape,h.push(g)}else{let c=n.outHeight*n.outWidth,l=$({inputs:{x:e},backend:r,attrs:{shape:p?[n.batchSize,c,n.inChannels]:[n.batchSize,n.inChannels,c]}}),u=$({inputs:{x:t},backend:r,attrs:{shape:[1,n.inChannels,n.outChannels]}}),d=sQ({a:p?l:u,b:p?u:l,transposeA:!p,transposeB:!1,backend:r,bias:i,activation:s,preluActivationWeights:a,leakyreluAlpha:o});m=$({inputs:{x:d},backend:r,attrs:{shape:n.outShape}}),h.push(l),h.push(u),h.push(d)}for(let e of h)r.disposeIntermediateTensorInfo(e);return m}function t1({x:e,filter:t,convInfo:n,backend:r,bias:i=null,preluActivationWeights:a=null,leakyreluAlpha:o=0,activation:s=null}){let{filterWidth:c,filterHeight:l,inChannels:u,outWidth:d,outHeight:f,dataFormat:p}=n,m=p===`channelsLast`,h=c*l*u,g=f*d,_=[n.batchSize,h,g],v=[];if(a!=null){let e=$$(a.shape,m);e!=null&&(a=$({inputs:{x:a},backend:r,attrs:{shape:e}}),v.push(a))}if(i!=null){let e=$$(i.shape,m);e!=null&&(i=$({inputs:{x:i},backend:r,attrs:{shape:e}}),v.push(i))}let y=$({inputs:{x:t},backend:r,attrs:{shape:[1,h,C(t.shape)/h]}});v.push(y);let b=new Q$(_,n),x=[e.shape,[n.padInfo.top,n.padInfo.left],[n.strideHeight,n.strideWidth],[n.dilationHeight,n.dilationWidth],[n.inChannels],[n.filterWidth*n.inChannels],[n.outWidth]],S=r.runWebGLProgram(b,[e],`float32`,x),w=$({inputs:{x:S},backend:r,attrs:{shape:_}});v.push(S),v.push(w);let T=i!=null,E=a!=null,D=s===`leakyrelu`,ee=s?zZ(s,!0):null,te=new BZ(m?w.shape:y.shape,m?y.shape:w.shape,m?[n.batchSize,g,n.outChannels]:[n.batchSize,n.outChannels,g],!0,!1,T,ee,E,D),ne=m?[w,y]:[y,w];if(i&&ne.push(i),E&&ne.push(a),D){let e=r.makeTensorInfo([],`float32`,xi(o,`float32`));ne.push(e),v.push(e)}let re=r.runWebGLProgram(te,ne,`float32`),ie=$({inputs:{x:re},backend:r,attrs:{shape:n.outShape}});v.push(re);for(let e of v)r.disposeIntermediateTensorInfo(e);return ie}Y();function n1(e){let{inputs:t,backend:n,attrs:r}=e,{x:i,filter:a}=t,{strides:o,pad:s,dataFormat:c,dilations:l,dimRoundingMode:u}=r,d=md(c),f=td(i.shape,a.shape,o,l,s,u,!1,d),p;if(f.filterHeight===1&&f.filterWidth===1&&f.dilationHeight===1&&f.dilationWidth===1&&f.strideHeight===1&&f.strideWidth===1&&(f.padInfo.type===`SAME`||f.padInfo.type===`VALID`))p=e1({x:i,filter:a,convInfo:f,backend:n});else if(f.strideWidth<=2&&d===`channelsLast`&&O().getBool(`WEBGL_EXP_CONV`)){let e=new Z$(f),t=[[f.padInfo.top,f.padInfo.left],[f.strideHeight,f.strideWidth],[f.dilationHeight,f.dilationWidth],[f.inHeight,f.inWidth]];p=n.runWebGLProgram(e,[i,a],`float32`,t)}else if(O().getBool(`WEBGL_CONV_IM2COL`))p=t1({x:i,filter:a,convInfo:f,backend:n});else{let e=new Y$(f);p=n.runWebGLProgram(e,[i,a],`float32`)}let m=$({inputs:{x:p},backend:n,attrs:{shape:f.outShape}});return n.disposeIntermediateTensorInfo(p),m}var r1={kernelName:gt,backendName:`webgl`,kernelFunc:n1},i1=class{constructor(e){this.variableNames=[`x`,`dy`],this.outputShape=e.filterShape;let t=e.strideHeight,n=e.strideWidth,r=e.padInfo.top,i=e.padInfo.left,a=e.dataFormat===`channelsLast`;this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int wR = coords.x;
        int wC = coords.y;
        int d1 = coords.z;
        int d2 = coords.w;

        // Convolve x(?, ?, d1) with dy(:, :, d2) to get dw(wR, wC, d1, d2).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;

        for (int b = 0; b < ${e.batchSize}; b++) {
          for (int yR = 0; yR < ${e.outHeight}; yR++) {
            int xR = wR + yR * ${t} - ${r};

            if (xR < 0 || xR >= ${e.inHeight}) {
              continue;
            }

            for (int yC = 0; yC < ${e.outWidth}; yC++) {
              int xC = wC + yC * ${n} - ${i};

              if (xC < 0 || xC >= ${e.inWidth}) {
                continue;
              }

              if (${a}) {
                float dyValue = getDy(b, yR, yC, d2);
                float xValue = getX(b, xR, xC, d1);
                dotProd += (xValue * dyValue);
              } else {
                float dyValue = getDy(b, d2, yR, yC);
                float xValue = getX(b, d1, xR, xC);
                dotProd += (xValue * dyValue);
              }

            }
          }
        }
        setOutput(dotProd);
      }
    `}},a1=class{constructor(e){this.variableNames=[`dy`,`W`],this.outputShape=e.inShape;let t=e.filterHeight,n=e.filterWidth,r=e.strideHeight,i=e.strideWidth,a=e.dataFormat===`channelsLast`,o=t-1-e.padInfo.top,s=n-1-e.padInfo.left,c=a?1:2,l=a?2:3,u=a?3:1;this.userCode=`
      const ivec2 pads = ivec2(${o}, ${s});

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d1 = coords[${u}];

        ivec2 dyCorner = ivec2(coords[${c}], coords[${l}]) - pads;
        int dyRCorner = dyCorner.x;
        int dyCCorner = dyCorner.y;

        // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < ${t}; wR++) {
          float dyR = float(dyRCorner + wR) / ${r}.0;

          if (dyR < 0.0 || dyR >= ${e.outHeight}.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          int wRPerm = ${t} - 1 - wR;

          for (int wC = 0; wC < ${n}; wC++) {
            float dyC = float(dyCCorner + wC) / ${i}.0;

            if (dyC < 0.0 || dyC >= ${e.outWidth}.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            int wCPerm = ${n} - 1 - wC;

            for (int d2 = 0; d2 < ${e.outChannels}; d2++) {

              if (${a}) {
                float xValue = getDy(batch, idyR, idyC, d2);
                float wValue = getW(wRPerm, wCPerm, d1, d2);
                dotProd += xValue * wValue;
              } else {
                float xValue = getDy(batch, d2, idyR, idyC);
                float wValue = getW(wRPerm, wCPerm, d1, d2);
                dotProd += xValue * wValue;
              }

            }
          }
        }
        setOutput(dotProd);
      }
    `}},o1=class{constructor(e){this.variableNames=[`x`,`dy`],this.outputShape=e.filterShape;let t=e.strideDepth,n=e.strideHeight,r=e.strideWidth,i=e.padInfo.front,a=e.padInfo.top,o=e.padInfo.left;this.userCode=`
      void main() {
        ivec5 coords = getOutputCoords();
        int wF = coords.x;
        int wR = coords.y;
        int wC = coords.z;
        int d1 = coords.w;
        int d2 = coords.u;

        float dotProd = 0.0;

        for (int b = 0; b < ${e.batchSize}; b++) {
          for (int yF = 0; yF < ${e.outDepth}; yF++) {
            int xF = wF + yF * ${t} - ${i};

            if (xF < 0 || xF >= ${e.inDepth}) {
              continue;
            }

            for (int yR = 0; yR < ${e.outHeight}; yR++) {
              int xR = wR + yR * ${n} - ${a};

              if (xR < 0 || xR >= ${e.inHeight}) {
                continue;
              }

              for (int yC = 0; yC < ${e.outWidth}; yC++) {
                int xC = wC + yC * ${r} - ${o};

                if (xC < 0 || xC >= ${e.inWidth}) {
                  continue;
                }

                float dyValue = getDy(b, yF, yR, yC, d2);
                float xValue = getX(b, xF, xR, xC, d1);
                dotProd += (xValue * dyValue);
              }
            }
          }
        }
        setOutput(dotProd);
      }
    `}},s1=class{constructor(e){this.variableNames=[`dy`,`W`],this.outputShape=e.inShape;let t=e.filterDepth,n=e.filterHeight,r=e.filterWidth,i=e.strideDepth,a=e.strideHeight,o=e.strideWidth,s=t-1-e.padInfo.front,c=n-1-e.padInfo.top,l=r-1-e.padInfo.left;this.userCode=`
      const ivec3 pads = ivec3(${s}, ${c}, ${l});

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int d1 = coords.u;


        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;
        int dyFCorner = dyCorner.x;
        int dyRCorner = dyCorner.y;
        int dyCCorner = dyCorner.z;

        float dotProd = 0.0;
        for (int wF = 0; wF < ${t}; wF++) {
          float dyF = float(dyFCorner + wF) / ${i}.0;

          if (dyF < 0.0 || dyF >= ${e.outDepth}.0 || fract(dyF) > 0.0) {
            continue;
          }
          int idyF = int(dyF);

          int wFPerm = ${t} - 1 - wF;

          for (int wR = 0; wR < ${n}; wR++) {
            float dyR = float(dyRCorner + wR) / ${a}.0;

            if (dyR < 0.0 || dyR >= ${e.outHeight}.0 ||
              fract(dyR) > 0.0) {
              continue;
            }
            int idyR = int(dyR);

            int wRPerm = ${n} - 1 - wR;

            for (int wC = 0; wC < ${r}; wC++) {
              float dyC = float(dyCCorner + wC) / ${o}.0;

              if (dyC < 0.0 || dyC >= ${e.outWidth}.0 ||
                  fract(dyC) > 0.0) {
                continue;
              }
              int idyC = int(dyC);

              int wCPerm = ${r} - 1 - wC;

              for (int d2 = 0; d2 < ${e.outChannels}; d2++) {
                float xValue = getDy(batch, idyF, idyR, idyC, d2);
                float wValue = getW(wFPerm, wRPerm, wCPerm, d1, d2);
                dotProd += xValue * wValue;
              }
            }
          }
        }
        setOutput(dotProd);
      }
    `}};Y();function c1(e){let{inputs:t,backend:n,attrs:r}=e,{x:i,dy:a}=t,{strides:o,pad:s,dataFormat:c,dimRoundingMode:l,filterShape:u}=r,d=md(c),f=new i1(td(i.shape,u,o,1,s,l,!1,d));return n.runWebGLProgram(f,[i,a],`float32`)}var l1={kernelName:_t,backendName:`webgl`,kernelFunc:c1};Y();function u1(e){let{inputs:t,backend:n,attrs:r}=e,{dy:i,filter:a}=t,{inputShape:o,strides:s,pad:c,dataFormat:l,dimRoundingMode:u}=r,d=md(l),f=new a1(td(o,a.shape,s,1,c,u,!1,d));return n.runWebGLProgram(f,[i,a],`float32`)}var d1={kernelName:vt,backendName:`webgl`,kernelFunc:u1};Y();function f1(e){let{inputs:t,backend:n,attrs:r}=e,{x:i,filter:a}=t,{strides:o,pad:s,dilations:c}=r,l=new X$(nd(i.shape,a.shape,o,c,s));return n.runWebGLProgram(l,[i,a],`float32`)}var p1={kernelName:yt,backendName:`webgl`,kernelFunc:f1};Y();function m1(e){let{inputs:t,backend:n,attrs:r}=e,{x:i,dy:a}=t,{strides:o,pad:s,filterShape:c}=r,l=new o1(nd(i.shape,c,o,1,s));return n.runWebGLProgram(l,[i,a],`float32`)}var h1={kernelName:bt,backendName:`webgl`,kernelFunc:m1};Y();function g1(e){let{inputs:t,backend:n,attrs:r}=e,{dy:i,filter:a}=t,{pad:o,strides:s,inputShape:c}=r,l=new s1(nd(c,a.shape,s,1,o));return n.runWebGLProgram(l,[i,a],`float32`)}var _1={kernelName:xt,backendName:`webgl`,kernelFunc:g1};Y();var v1={kernelName:`Cos`,backendName:`webgl`,kernelFunc:LZ({opSnippet:IZ+`
  return cos(x);
`})};Y();var y1=LZ({opSnippet:`
  float e2x = exp(-x);
  return (e2x + 1.0 / e2x) / 2.0;
`}),b1={kernelName:St,backendName:`webgl`,kernelFunc:y1},x1=class{constructor(e,t,n,r,i){this.variableNames=[`Image`,`Boxes`,`BoxInd`],this.outputShape=[];let[a,o,s,c]=e,[l]=t,[u,d]=n;this.outputShape=[l,u,d,c];let f=+(r===`bilinear`),[p,m]=[`${o-1}.0`,`${s-1}.0`],[h,g,_]=u>1?[`${(o-1)/(u-1)}`,`(y2-y1) * height_ratio`,`y1*${p} + float(y)*(height_scale)`]:[`0.0`,`0.0`,`0.5 * (y1+y2) * ${p}`],[v,y,b]=d>1?[`${(s-1)/(d-1)}`,`(x2-x1) * width_ratio`,`x1*${m} + float(x)*(width_scale)`]:[`0.0`,`0.0`,`0.5 * (x1+x2) * ${m}`];this.userCode=`
      const float height_ratio = float(${h});
      const float width_ratio = float(${v});
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int y = coords[1];
        int x = coords[2];
        int d = coords[3];

        // get box vals
        float y1 = getBoxes(b,0);
        float x1 = getBoxes(b,1);
        float y2 = getBoxes(b,2);
        float x2 = getBoxes(b,3);

        // get image in batch index
        int bInd = round(getBoxInd(b));
        if(bInd < 0 || bInd >= ${a}) {
          return;
        }

        float height_scale = ${g};
        float width_scale = ${y};

        float in_y = ${_};
        if( in_y < 0.0 || in_y > ${p} ) {
          setOutput(float(${i}));
          return;
        }
        float in_x = ${b};
        if( in_x < 0.0 || in_x > ${m} ) {
          setOutput(float(${i}));
          return;
        }

        vec2 sourceFracIndexCR = vec2(in_x,in_y);
        if(${f} == 1) {
          // Compute the four integer indices.
          ivec2 sourceFloorCR = ivec2(sourceFracIndexCR);
          ivec2 sourceCeilCR = ivec2(ceil(sourceFracIndexCR));

          float topLeft = getImage(b, sourceFloorCR.y, sourceFloorCR.x, d);
          float bottomLeft = getImage(b, sourceCeilCR.y, sourceFloorCR.x, d);
          float topRight = getImage(b, sourceFloorCR.y, sourceCeilCR.x, d);
          float bottomRight = getImage(b, sourceCeilCR.y, sourceCeilCR.x, d);

          vec2 fracCR = sourceFracIndexCR - vec2(sourceFloorCR);

          float top = topLeft + (topRight - topLeft) * fracCR.x;
          float bottom = bottomLeft + (bottomRight - bottomLeft) * fracCR.x;
          float newValue = top + (bottom - top) * fracCR.y;
          setOutput(newValue);
        } else {
          // Compute the coordinators of nearest neighbor point.
          ivec2 sourceNearestCR = ivec2(floor(
            sourceFracIndexCR + vec2(0.5,0.5)));
          float newValue = getImage(b, sourceNearestCR.y, sourceNearestCR.x, d);
          setOutput(newValue);
        }
      }
    `}};Y();var S1={kernelName:Tt,backendName:`webgl`,kernelFunc:e=>{let{inputs:t,backend:n,attrs:r}=e,{image:i,boxes:a,boxInd:o}=t,{cropSize:s,method:c,extrapolationValue:l}=r,u=new x1(i.shape,a.shape,s,c,l);return n.runWebGLProgram(u,[i,a,o],`float32`)}},C1;(function(e){e.Prod=`*`,e.Sum=`+`})(C1||={});var w1=class{constructor(e,t,n,r){this.op=e,this.outputShape=t,this.variableNames=[`x`],this.customUniforms=[{name:`index`,type:`float`}];let i=this.outputShape.length,a=this.op===C1.Prod?`1.0`:`0.0`,o=n?a:`getX(${T1(i,`coords`,this.op)})`,s=this.outputShape[this.outputShape.length-1],c=``,l=``;n?(c=r?`end != ${s-1}`:`end != 0`,l=r?`end + 1`:`end - 1`):(c=r?`end + pow2 < ${s}`:`end >= pow2`,l=r?`end + pow2`:`end - pow2`),this.userCode=`
      void main() {
        ${tY(i)} coords = getOutputCoords();
        int end = ${E1(i,`coords`,this.op)};
        float val = ${o};
        int pow2 = int(pow(2.0, index));
        if (${c}) {
          int idx = ${l};
          ${E1(i,`coords`,this.op)} = idx;
          val ${this.op}= getX(${T1(i,`coords`,this.op)});
        }
        setOutput(val);
      }
    `}};function T1(e,t,n){if(e===1)return`${t}`;if(e===2)return`${t}.x, ${t}.y`;if(e===3)return`${t}.x, ${t}.y, ${t}.z`;if(e===4)return`${t}.x, ${t}.y, ${t}.z, ${t}.w`;throw Error(`Cumulative ${n} for rank ${e} is not yet supported`)}function E1(e,t,n){if(e===1)return`${t}`;if(e===2)return`${t}.y`;if(e===3)return`${t}.z`;if(e===4)return`${t}.w`;throw Error(`Cumulative ${n} for rank ${e} is not yet supported`)}Y();function D1(e,t,n,r,i,a){let o=t.shape.length,s=tm([r],o),c=t;s!=null&&(c=aQ({inputs:{x:t},backend:n,attrs:{perm:s}}));let l=rm(1,o)[0];if(l!==o-1)throw Error(`WebGL cumprod shader expects an inner-most axis=${t.shape.length-1} but got axis=${r}`);let u=c.shape[l],d=wZ({inputs:{x:c},backend:n});for(let t=0;t<=Math.ceil(Math.log2(u))-1;t++){let r=new w1(e,c.shape,!1,a),i=[[t]],o=d;d=n.runWebGLProgram(r,[d],d.dtype,i),n.disposeIntermediateTensorInfo(o)}if(i){let t=new w1(e,c.shape,i,a),r=d;d=n.runWebGLProgram(t,[d],d.dtype),n.disposeIntermediateTensorInfo(r)}if(s!=null){let e=nm(s),t=aQ({inputs:{x:d},backend:n,attrs:{perm:e}});return n.disposeIntermediateTensorInfo(d),n.disposeIntermediateTensorInfo(c),t}return d}Y();function O1(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{axis:a,exclusive:o,reverse:s}=r;return D1(C1.Prod,i,n,a,o,s)}var k1={kernelName:Ct,backendName:`webgl`,kernelFunc:O1};Y();function A1(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{axis:a,exclusive:o,reverse:s}=r;return D1(C1.Sum,i,n,a,o,s)}var j1={kernelName:wt,backendName:`webgl`,kernelFunc:A1};Y();function M1(e){let{inputs:t,backend:n,attrs:r}=e,{x:i,weights:a}=t,{size:o,binaryOutput:s}=r;if(i.shape.length===1){let e=UY(n.readSync(i.dataId),n.readSync(a.dataId),a.dtype,a.shape,o);return n.makeTensorInfo([o],a.dtype,e)}if(i.shape.length===2){let e=WY(n.bufferSync(i),n.bufferSync(a),o,s);return n.makeTensorInfo(e.shape,a.dtype,e.values)}throw Error(`Error in denseBincount: input must be at most rank 2, but got rank${i.shape.length}.`)}var N1={kernelName:Et,backendName:`webgl`,kernelFunc:M1},P1=class{constructor(e,t,n){this.variableNames=[`x`],this.outputShape=[],this.outputShape=e,this.blockSize=t,this.dataFormat=n,this.userCode=`
    void main() {
      ivec4 coords = getOutputCoords();
      int b = coords[0];
      int h = ${this.getHeightCoordString()};
      int w = ${this.getWidthCoordString()};
      int d = ${this.getDepthCoordString()};

      int in_h = h / ${t};
      int offset_h = imod(h, ${t});
      int in_w = w / ${t};
      int offset_w = imod(w, ${t});
      int offset_d = (offset_h * ${t} + offset_w) *
        ${this.getOutputDepthSize()};
      int in_d = d + offset_d;

      float result = ${this.getInputSamplingString()};
      setOutput(result);
    }
  `}getHeightCoordString(){return this.dataFormat===`NHWC`?`coords[1]`:`coords[2]`}getWidthCoordString(){return this.dataFormat===`NHWC`?`coords[2]`:`coords[3]`}getDepthCoordString(){return this.dataFormat===`NHWC`?`coords[3]`:`coords[1]`}getOutputDepthSize(){return this.dataFormat===`NHWC`?this.outputShape[3]:this.outputShape[1]}getInputSamplingString(){return this.dataFormat===`NHWC`?`getX(b, in_h, in_w, in_d)`:`getX(b, in_d, in_h, in_w)`}};Y();function F1(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{blockSize:a,dataFormat:o}=r,s=i.shape[0],c=o===`NHWC`?i.shape[1]:i.shape[2],l=o===`NHWC`?i.shape[2]:i.shape[3],u=o===`NHWC`?i.shape[3]:i.shape[1],d=c*a,f=l*a,p=u/(a*a),m=new P1(o===`NHWC`?[s,d,f,p]:[s,p,d,f],a,o);return n.runWebGLProgram(m,[i],i.dtype)}var I1={kernelName:Dt,backendName:`webgl`,kernelFunc:F1},L1=class{constructor(e,t=!1,n=null,r=!1,i=!1){this.variableNames=[`x`,`W`],this.customUniforms=[{name:`pads`,type:`ivec2`},{name:`strides`,type:`ivec2`},{name:`dilations`,type:`ivec2`},{name:`inDims`,type:`ivec2`}],this.outputShape=e.outShape,this.enableShapeUniforms=uY(this.outputShape.length);let a=e.filterHeight,o=e.filterWidth,s=e.outChannels/e.inChannels,c=``,l=``;n&&(c=r?`float activation(float a) {
          float b = getPreluActivationWeightsAtOutCoords();
          ${n}
        }`:i?`float activation(float a) {
          float b = getLeakyreluAlphaAtOutCoords();
          ${n}
        }`:`
          float activation(float x) {
            ${n}
          }
        `,l=`result = activation(result);`);let u=t?`result += getBiasAtOutCoords();`:``;t&&this.variableNames.push(`bias`),r&&this.variableNames.push(`preluActivationWeights`),i&&this.variableNames.push(`leakyreluAlpha`),this.userCode=`
      ${c}

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords.x;
        ivec2 xRCCorner = coords.yz * strides - pads;
        int d2 = coords.w;
        int d1 = d2 / ${s};
        int q = d2 - d1 * ${s};

        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        // Convolve x(?, ?, d1) with w(:, :, d1, q) to get y(yR, yC, d2).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        // TO DO(dsmilkov): Flatten the two for loops and vec4 the operations.
        for (int wR = 0; wR < ${a}; wR++) {
          int xR = xRCorner + wR * dilations[0];

          if (xR < 0 || xR >= inDims[0]) {
            continue;
          }

          for (int wC = 0; wC < ${o}; wC++) {
            int xC = xCCorner + wC * dilations[1];

            if (xC < 0 || xC >= inDims[1]) {
              continue;
            }

            float xVal = getX(batch, xR, xC, d1);
            float wVal = getW(wR, wC, d1, q);
            dotProd += xVal * wVal;
          }
        }

        float result = dotProd;
        ${u}
        ${l}
        setOutput(result);
      }
    `}};Y();var R1=class{constructor(e,t=!1,n=null,r=!1,i=!1){this.variableNames=[`x`,`W`],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:`pads`,type:`ivec2`},{name:`strides`,type:`ivec2`},{name:`dilations`,type:`ivec2`},{name:`inDims`,type:`ivec2`}],this.outputShape=e.outShape,this.enableShapeUniforms=uY(this.outputShape.length);let a=e.outChannels/e.inChannels,o=e.padInfo.left,s=e.strideWidth,c=e.dilationWidth,l=e.filterHeight,u=e.filterWidth,d=u,f=`
      int xR; int xC; int xCOffset;
      vec4 wTexel; vec4 previous; vec4 final;`;for(let e=0;e<u;e++)f+=`
          vec4 xTexelC${e*2};
          int xTexelC${e*2}Ready;
          vec4 xTexelC${e*2+1};
          int xTexelC${e*2+1}Ready;
          vec4 xC${e};`;f+=`
    for (int r = 0; r < ${l}; r++) {
      `;for(let e=0;e<u;e++)f+=`
          xTexelC${e*2} = vec4(0.0);
          xTexelC${e*2}Ready = 0;
          xTexelC${e*2+1} = vec4(0.0);
          xTexelC${e*2+1}Ready = 0;
          xC${e} = vec4(0.0);`;f+=`
        xR = xRCorner + r * dilations[0];
        if (xR >=0 && xR < inDims[0]) {
      `;for(let e=0;e<(d+1)/2;e++){let t=e*2;if(f+=`
          xC = xCCorner + ${t*c};
          `,s===1){if(t<u&&(o%2==1?(f+=`
                xCOffset = xC + 1;
                if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${t}Ready == 0) {
                  xTexelC${t} = getX(batch, xR, xCOffset, d1);

                  // Need to manually clear unused channels in case
                  // we're reading from recycled texture.
                  if (xCOffset + 1 >= inDims[1]) {
                    xTexelC${t}.zw = vec2(0.0);
                  }
                  xTexelC${t}Ready = 1;
                }
              `,f+=c===1&&t>0?`
                xC${t} = vec4(xTexelC${t-2}.zw, xTexelC${t}.xy);
                `:`
                  xCOffset = xC + 1 - 2;

                  if (xCOffset >= 0 && xCOffset < inDims[1]) {
                    previous = getX(batch, xR, xCOffset, d1);

                    // Need to manually clear unused channels in case
                    // we're reading from recycled texture.
                    if (xCOffset + 1 >= inDims[1]) {
                      previous.zw = vec2(0.0);
                    }

                    xC${t} = vec4(previous.zw, xTexelC${t}.xy);
                  } else {
                    xC${t} = vec4(0.0, 0.0, xTexelC${t}.xy);
                  }
                  `):f+=`
                if (xC >= 0 && xC < inDims[1] && xTexelC${t}Ready == 0) {
                  xTexelC${t} = getX(batch, xR, xC, d1);
                  if (xC + 1 >= inDims[1]) {
                    xTexelC${t}.zw = vec2(0.0);
                  }
                  xTexelC${t}Ready = 1;
                }

                xC${t} = xTexelC${t};
                `,t+1<u)){let e=o%2==0?m(c):c;c%2==0&&o%2==1||c%2!=0&&o%2!=1?(f+=`
                  xCOffset = xC + imod(pads[1], 2) + ${e};

                  if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${t+1}Ready == 0) {
                    xTexelC${t+1} = getX(batch, xR, xCOffset, d1);

                    // Need to manually clear unused channels in case
                    // we're reading from recycled texture.
                    if (xCOffset + 1 >= inDims[1]) {
                      xTexelC${t+1}.zw = vec2(0.0);
                    }
                    xTexelC${t+1}Ready = 1;
                  }
                  `,f+=c>1?`
                    xCOffset -= 2;
                    if (xCOffset >= 0 && xCOffset < inDims[1]) {
                     previous = getX(batch, xR, xCOffset, d1);
                     xC${t+1} = vec4(previous.zw, xTexelC${t+1}.xy);
                    } else {
                     xC${t+1} = vec4(0.0, 0.0, xTexelC${t+1}.xy);
                    }
                    `:`
                    xC${t+1} = vec4(xTexelC${t}.zw, xTexelC${t+1}.xy);
                    `):f+=e===1?`
                    xC${t+1} = xTexelC${t};
                    `:`
                    xCOffset = xC + ${e};

                    if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${t+1}Ready == 0) {
                      xTexelC${t+1} = getX(batch, xR, xCOffset, d1);
                      if (xCOffset + 1 >= inDims[1]) {
                        xTexelC${t+1}.zw = vec2(0.0);
                      }
                      xTexelC${t+1}Ready = 1;
                    }

                    xC${t+1} = xTexelC${t+1};
                    `}}else t<u&&(o%2==1?(f+=`
                xCOffset = xC + 1 - strides[1];
                if(xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${t}Ready == 0) {
                  xTexelC${t} = getX(batch, xR, xCOffset, d1);
                  // Need to manually clear unused channels in case
                  // we're reading from recycled texture.
                  if (xCOffset + 1 >= inDims[1]) {
                    xTexelC${t}.zw = vec2(0.0);
                  }
                  xTexelC${t}Ready = 1;
                }

                if(xC + 1 >= 0 && xC + 1 < inDims[1] && xTexelC${t+1}Ready == 0) {
                  xTexelC${t+1} = getX(batch, xR, xC + 1, d1);
                  // Need to manually clear unused channels in case
                  // we're reading from recycled texture.
                  if (xC + 2 >= inDims[1]) {
                    xTexelC${t+1}.zw = vec2(0.0);
                  }
                  xTexelC${t+1}Ready = 1;
                }

                xC${t} = vec4(xTexelC${t}.zw, xTexelC${t+1}.zw);
              `,t+1<u&&(f+=`
                  final = vec4(0.0);
                  xCOffset = xC + 1 + strides[1];
                  if(xCOffset >= 0 && xCOffset < inDims[1]) {
                    final = getX(batch, xR, xCOffset, d1);
                  }
                  xC${t+1} = vec4(xTexelC${t+1}.xy, final.xy);
                `)):(f+=`
                if(xC >= 0 && xC < inDims[1] && xTexelC${t}Ready == 0) {
                  xTexelC${t} = getX(batch, xR, xC, d1);
                  if (xC + 1 >= inDims[1]) {
                    xTexelC${t}.zw = vec2(0.0);
                  }
                  xTexelC${t}Ready = 1;
                }

                xCOffset = xC + strides[1];
                if(xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${t+1}Ready == 0) {
                  xTexelC${t+1} = getX(batch, xR, xCOffset, d1);
                  if (xCOffset + 1 >= inDims[1]) {
                    xTexelC${t+1}.zw = vec2(0.);
                  }
                  xTexelC${t+1}Ready = 1;
                }

                xC${t} = vec4(
                  xTexelC${t}.xy, xTexelC${t+1}.xy);
              `,t+1<u&&(f+=`
                  xC${t+1} = vec4(xTexelC${t}.zw, xTexelC${t+1}.zw);
                `)));t<u&&(f+=`
            wTexel = getW(r, ${t}, d1, q);
            dotProd += xC${t} * vec4(wTexel.xz, wTexel.xz);
          `,t+1<u&&(f+=`
              wTexel = getW(r, ${t+1}, d1, q);
              dotProd += xC${t+1} * vec4(wTexel.xz, wTexel.xz);
            `))}f+=`
    }
  `,f+=`
      }
    `;let p=``,h=``;n&&(p=r?`vec4 activation(vec4 a) {
          vec4 b = getPreluActivationWeightsAtOutCoords();
          ${n}
        }`:i?`vec4 activation(vec4 a) {
          vec4 b = getLeakyreluAlphaAtOutCoords();
          ${n}
        }`:`vec4 activation(vec4 x) {
          ${n}
        }`,h=`result = activation(result);`);let g=t?`result += getBiasAtOutCoords();`:``;t&&this.variableNames.push(`bias`),r&&this.variableNames.push(`preluActivationWeights`),i&&this.variableNames.push(`leakyreluAlpha`),this.userCode=`
      ${p}

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords.x;
        ivec2 xRCCorner = coords.yz * strides - pads;
        int d2 = coords.w;
        int d1 = d2 / ${a};
        int q = d2 - d1 * ${a};
        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        //intialize dotProd with a small epsilon seems to reduce GPU accuracy loss.
        vec4 dotProd = vec4(0.000000000000001);

        ${f}

        vec4 result = dotProd - vec4(0.000000000000001);
        ${g}
        ${h}
        setOutput(result);
      }
    `}};Y();function z1(e){let{inputs:t,backend:n,attrs:r}=e,{x:i,filter:a}=t,{strides:o,pad:s,dilations:c,dimRoundingMode:l}=r,u=c;u??=[1,1],y(pd(o,u),()=>`Error in depthwiseConv2d: Either strides or dilations must be 1. Got strides ${o} and dilations '${u}'`);let d=td(i.shape,a.shape,o,u,s,l,!0),f;f=O().getBool(`WEBGL_PACK_DEPTHWISECONV`)&&d.strideWidth<=2&&d.outChannels/d.inChannels===1?new R1(d):new L1(d);let p=[[d.padInfo.top,d.padInfo.left],[d.strideHeight,d.strideWidth],[d.dilationHeight,d.dilationWidth],[d.inHeight,d.inWidth]];return n.runWebGLProgram(f,[i,a],`float32`,p)}var B1={kernelName:Ot,backendName:`webgl`,kernelFunc:z1},V1=class{constructor(e){this.variableNames=[`x`,`dy`],this.outputShape=e.filterShape;let t=e.strideHeight,n=e.strideWidth,r=e.padInfo.top,i=e.padInfo.left,a=e.outChannels/e.inChannels;this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int wR = coords.x;
        int wC = coords.y;
        int d1 = coords.z;
        int dm = coords.w;
        int d2 = d1 * ${a} + dm;

        float dotProd = 0.0;

        // TO DO: Vec4 over the batch size
        for (int b = 0; b < ${e.batchSize}; b++) {
          for (int yR = 0; yR < ${e.outHeight}; yR++) {
            int xR = wR + yR * ${t} - ${r};

            if (xR < 0 || xR >= ${e.inHeight}) {
              continue;
            }

            for (int yC = 0; yC < ${e.outWidth}; yC++) {
              int xC = wC + yC * ${n} - ${i};

              if (xC < 0 || xC >= ${e.inWidth}) {
                continue;
              }

              float dyValue = getDy(b, yR, yC, d2);
              float xValue = getX(b, xR, xC, d1);
              dotProd += (xValue * dyValue);
            }
          }
        }
        setOutput(dotProd);
      }
    `}},H1=class{constructor(e){this.variableNames=[`dy`,`W`],this.outputShape=e.inShape;let t=e.filterHeight,n=e.filterWidth,r=e.strideHeight,i=e.strideWidth,a=t-1-e.padInfo.top,o=n-1-e.padInfo.left,s=e.outChannels/e.inChannels;this.userCode=`
      const ivec2 pads = ivec2(${a}, ${o});

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d1 = coords[3];
        ivec2 dyCorner = coords.yz - pads;
        int dyRCorner = dyCorner.x;
        int dyCCorner = dyCorner.y;

        float dotProd = 0.0;

        for (int wR = 0; wR < ${t}; wR++) {
          float dyR = float(dyRCorner + wR) / ${r}.0;

          if (dyR < 0.0 || dyR >= ${e.outHeight}.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          int wRPerm = ${t} - 1 - wR;

          for (int wC = 0; wC < ${n}; wC++) {
            float dyC = float(dyCCorner + wC) / ${i}.0;

            if (dyC < 0.0 || dyC >= ${e.outWidth}.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            int wCPerm = ${n} - 1 - wC;

            // TO DO: Vec4 over the channelMul
            for (int dm = 0; dm < ${s}; dm++) {
              int d2 = d1 * ${s} + dm;
              float xValue = getDy(batch, idyR, idyC, d2);
              float wValue = getW(wRPerm, wCPerm, d1, dm);
              dotProd += xValue * wValue;
            }
          }
        }
        setOutput(dotProd);
      }
    `}};Y();function U1(e){let{inputs:t,backend:n,attrs:r}=e,{x:i,dy:a}=t,{strides:o,dilations:s,pad:c,dimRoundingMode:l,filterShape:u}=r,d=new V1(td(i.shape,u,o,s,c,l,!0));return n.runWebGLProgram(d,[i,a],`float32`)}var W1={kernelName:kt,backendName:`webgl`,kernelFunc:U1};Y();function G1(e){let{inputs:t,backend:n,attrs:r}=e,{dy:i,filter:a}=t,{strides:o,dilations:s,pad:c,dimRoundingMode:l,inputShape:u}=r,d=new H1(td(u,a.shape,o,s,c,l,!0));return n.runWebGLProgram(d,[i,a],`float32`)}var K1={kernelName:At,backendName:`webgl`,kernelFunc:G1},q1=class{constructor(e){this.variableNames=[`X`],this.outputShape=[e,e],this.userCode=`
      void main() {
          ivec2 coords = getOutputCoords();
          float val = coords[0] == coords[1] ? getX(coords[0]) : 0.0;
          setOutput(val);
      }
    `}};Y();function J1(e){let{inputs:t,backend:n}=e,{x:r}=t,i=[...r.shape,...r.shape],a=C(r.shape),o=$({inputs:{x:r},backend:n,attrs:{shape:[a]}}),s=new q1(a),c=n.runWebGLProgram(s,[o],o.dtype),l=$({inputs:{x:c},backend:n,attrs:{shape:i}});return n.disposeIntermediateTensorInfo(o),n.disposeIntermediateTensorInfo(c),l}var Y1={kernelName:jt,backendName:`webgl`,kernelFunc:J1},X1=class{constructor(e){this.variableNames=[`x`,`W`],this.outputShape=e.outShape;let{inHeight:t,inWidth:n,padInfo:r,strideHeight:i,strideWidth:a,filterHeight:o,filterWidth:s,dilationHeight:c,dilationWidth:l}=e,{top:u,left:d}=r;this.userCode=`
      const ivec2 strides = ivec2(${i}, ${a});
      const ivec2 pads = ivec2(${u}, ${d});
      const float neg_infinity = -3.4e38;

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords.x;
        int d1 = coords.w;
        ivec2 outTopLeftCorner =
            coords.yz * strides - pads;
        int hBeg = outTopLeftCorner.x;
        int wBeg = outTopLeftCorner.y;

        float curVal = neg_infinity;
        for (int h = 0; h < ${o}; h++) {
          int hIn = hBeg + h * ${c};

          if (hIn >= 0 && hIn < ${t}) {
            for (int w = 0; w < ${s}; w++) {
              int wIn = wBeg + w * ${l};

              if (wIn >= 0 && wIn < ${n}) {
                float xVal = getX(batch, hIn, wIn, d1);
                float wVal = getW(h, w, d1);

                float val = xVal + wVal;
                if (val > curVal) {
                  curVal = val;
                }
              }
            }
          }
        }

        float result = curVal;
        setOutput(result);
      }
    `}};Y();function Z1(e){let{inputs:t,backend:n,attrs:r}=e,{x:i,filter:a}=t,{strides:o,pad:s,dilations:c}=r,l=Qu(i.shape,a.shape,o,s,`NHWC`,c),u,d=new X1(l);u=n.runWebGLProgram(d,[i,a],`float32`);let f=$({inputs:{x:u},backend:n,attrs:{shape:l.outShape}});return n.disposeIntermediateTensorInfo(u),f}var Q1={kernelName:Mt,backendName:`webgl`,kernelFunc:Z1};Y();function $1(e){let{inputs:t,backend:n,attrs:r}=e,{equation:i}=r,a=t,{allDims:o,summedDims:s,idDims:c}=PT(i,a.length);IT(o.length,c,a);let{path:l,steps:u}=LT(s,c),d=u.length,f=null,p=o.length,m=[];for(let e=0;e<d;++e){for(let t of u[e]){let{permutationIndices:e,expandDims:r}=FT(p,c[t]),i;RT(e)?i=a[t]:(i=aQ({inputs:{x:a[t]},backend:n,attrs:{perm:e}}),m.push(i));let o=i.shape.slice();for(let e=0;e<r.length;++e)o.splice(r[e],0,1);T(i.shape,o)||(i=$({inputs:{x:i},backend:n,attrs:{shape:o}}),m.push(i)),f===null?f=i:(f=WZ({inputs:{a:i,b:f},backend:n}),m.push(f))}e<d-1&&(l[e]>=0&&(f=rQ({inputs:{x:f},backend:n,attrs:{axis:l[e]-(o.length-p),keepDims:!1}}),m.push(f)),p--)}for(let e of m)e!==f&&n.disposeIntermediateTensorInfo(e);return f}var e0={kernelName:It,backendName:`webgl`,kernelFunc:$1};Y();var t0={kernelName:`Elu`,backendName:`webgl`,kernelFunc:LZ({opSnippet:`return (x >= 0.0) ? x : (exp(x) - 1.0);`,packedOpSnippet:`
  vec4 result;

  result.r = (x.r >= 0.0) ? x.r : (exp(x.r) - 1.0);
  result.g = (x.g >= 0.0) ? x.g : (exp(x.g) - 1.0);
  result.b = (x.b >= 0.0) ? x.b : (exp(x.b) - 1.0);
  result.a = (x.a >= 0.0) ? x.a : (exp(x.a) - 1.0);

  return result;
`})};Y();var n0=`return (b >= 1.0) ? a : a * (b + 1.0);`,r0=`
  vec4 bGTEZero = vec4(greaterThanEqual(b, vec4(0.)));
  return (bGTEZero * a) + ((vec4(1.0) - bGTEZero) * (a * (b + vec4(1.0))));
`,i0={kernelName:Lt,backendName:`webgl`,kernelFunc:e=>{let{inputs:t,backend:n}=e,{dy:r,y:i}=t,a=O().getBool(`WEBGL_PACK_BINARY_OPERATIONS`)?new CZ(r0,r.shape,i.shape):new xZ(n0,r.shape,i.shape);return n.runWebGLProgram(a,[r,i],r.dtype)}};Y();var a0=RZ({opSnippet:`return float(a == b);`,packedOpSnippet:`
  return vec4(equal(a, b));
`,dtype:`bool`,cpuKernelImpl:JY}),o0={kernelName:Rt,backendName:`webgl`,kernelFunc:a0};Y();var s0={kernelName:`Erf`,backendName:`webgl`,kernelFunc:LZ({opSnippet:`
  // Error function is calculated approximately with elementary function.
  // See "Handbook of Mathematical Functions with Formulas,
  // Graphs, and Mathematical Tables", Abramowitz and Stegun.
  float p = ${vT};
  float a1 = ${yT};
  float a2 = ${bT};
  float a3 = ${xT};
  float a4 = ${ST};
  float a5 = ${CT};

  float sign = sign(x);
  x = abs(x);
  float t = 1.0 / (1.0 + p * x);
  return sign * (1.0 - (((((a5*t + a4)*t) + a3)*t + a2)*t + a1)*t*exp(-x*x));
`})};Y();var c0=LZ({opSnippet:IZ+`
  return exp(x);
`,packedOpSnippet:`
  vec4 result = exp(x);
  bvec4 isNaN = isnan(x);
  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,cpuKernelImpl:YY,dtype:`float32`}),l0={kernelName:`Exp`,backendName:`webgl`,kernelFunc:c0};Y();function u0(e){let{inputs:t,attrs:n,backend:r}=e,{dim:i}=n,{input:a}=t,o=a.shape.length,s=a.shape.slice(),c=i;return i<0&&(y(-(o+1)<=i,()=>`Axis must be in the interval [${-(o+1)}, ${o}]`),c=o+i+1),s.splice(c,0,1),$({inputs:{x:a},backend:r,attrs:{shape:s}})}var d0={kernelName:zt,backendName:`webgl`,kernelFunc:u0};Y();var f0=`return exp(x) - 1.0;`,p0=LZ({opSnippet:f0,packedOpSnippet:f0,cpuKernelImpl:XY}),m0={kernelName:Bt,backendName:`webgl`,kernelFunc:p0},h0=class{constructor(e,t,n){this.variableNames=[`real`,`imag`];let r=t[1];this.outputShape=t;let i=n?`2.0 * ${Math.PI}`:`-2.0 * ${Math.PI}`,a=n?`${r}.0`:`1.0`,o;if(e===`real`)o=`return real * expR - imag * expI;`;else if(e===`imag`)o=`return real * expI + imag * expR;`;else throw Error(`FFT component must be either "real" or "imag", got ${e}.`);this.userCode=`
      const float exponentMultiplier = ${i};

      float unaryOpComplex(float real, float expR, float imag, float expI) {
        ${o}
      }

      float mulMatDFT(int batch, int index) {
        float indexRatio = float(index) / float(${r});
        float exponentMultiplierTimesIndexRatio =
            exponentMultiplier * indexRatio;

        float result = 0.0;

        for (int i = 0; i < ${r}; i++) {
          // x = (-2|2 * PI / N) * index * i;
          float x = exponentMultiplierTimesIndexRatio * float(i);
          float expR = cos(x);
          float expI = sin(x);
          float real = getReal(batch, i);
          float imag = getImag(batch, i);

          result +=
              unaryOpComplex(real, expR, imag, expI) / ${a};
        }

        return result;
      }

      void main() {
        ivec2 coords = getOutputCoords();
        setOutput(mulMatDFT(coords[0], coords[1]));
      }
    `}};Y();function g0(e,t,n){let r=n.texData.get(e.dataId),i=C(e.shape),a=e.shape[e.shape.length-1],o=i/a,s=$({inputs:{x:e},backend:n,attrs:{shape:[o,a]}}),c=s.shape,l=new h0(`real`,c,t),u=new h0(`imag`,c,t),d=[{dataId:r.complexTensorInfos.real.dataId,dtype:r.complexTensorInfos.real.dtype,shape:c},{dataId:r.complexTensorInfos.imag.dataId,dtype:r.complexTensorInfos.imag.dtype,shape:c}],f=n.runWebGLProgram(l,d,`float32`),p=n.runWebGLProgram(u,d,`float32`),m=EZ({inputs:{real:f,imag:p},backend:n});n.disposeIntermediateTensorInfo(f),n.disposeIntermediateTensorInfo(p);let h=$({inputs:{x:m},backend:n,attrs:{shape:e.shape}});return n.disposeIntermediateTensorInfo(s),n.disposeIntermediateTensorInfo(m),h}Y();function _0(e){let{inputs:t,backend:n}=e,{input:r}=t;return g0(r,!1,n)}var v0={kernelName:`FFT`,backendName:`webgl`,kernelFunc:_0},y0=class{constructor(e,t){this.outputShape=[],this.customUniforms=[{name:`value`,type:`float`}],this.variableNames=[`x`],this.outputShape=e,this.userCode=`
      void main() {
        // Input can be obtained from uniform value.
        setOutput(value);
      }
    `}};Y();function b0(e){let{backend:t,attrs:n}=e,{shape:r,value:i}=n,{dtype:a}=n;if(a||=ve(i),a===`string`){let e=ce(a,C(r));return e.fill(i),t.makeTensorInfo(r,a,e)}{let e=new y0(r,i),n=[[i]];return t.runWebGLProgram(e,[],a,n)}}var x0={kernelName:Vt,backendName:`webgl`,kernelFunc:b0},S0=class{constructor(e){this.variableNames=[`Image`],this.outputShape=[];let t=e[2];this.outputShape=e,this.userCode=`
        void main() {
          ivec4 coords = getOutputCoords();
          int x = coords[2];

          int coordX = ${t} - x - 1;
          float outputValue;
          if(coordX >= 0 && coordX < ${t}) {
            outputValue = getImage(coords[0], coords[1], coordX, coords[3]);
          } else {
            outputValue = getImage(coords[0], coords[1], coords[2], coords[3]);
          }
          setOutput(outputValue);
        }
    `}};Y();var C0={kernelName:Ht,backendName:`webgl`,kernelFunc:({inputs:e,backend:t})=>{let{image:n}=e,r=t,i=new S0(n.shape);return r.runWebGLProgram(i,[n],n.dtype)}};Y();var w0=`return floor(x);`,T0=LZ({opSnippet:w0,packedOpSnippet:w0,cpuKernelImpl:ZY}),E0={kernelName:Ut,backendName:`webgl`,kernelFunc:T0};Y();var D0=RZ({opSnippet:`
  float s = sign(a) * sign(b);
  int ia = round(a);
  int ib = round(b);
  if (ib != 0) {
    // Windows (D3D) wants guaranteed non-zero int division at compile-time.
    return float(idiv(ia, ib, s));
  } else {
    return NAN;
  }
`,packedOpSnippet:`
  ivec4 ia = round(a);
  ivec4 ib = round(b);
  bvec4 cond = notEqual(ib, ivec4(0));
  ivec4 result = ivec4(0);
  vec4 s = sign(a) * sign(b);

  // Windows (D3D) wants guaranteed non-zero int division at compile-time.
  if (cond[0]) {
    result[0] = idiv(ia[0], ib[0], s[0]);
  }
  if (cond[1]) {
    result[1] = idiv(ia[1], ib[1], s[1]);
  }
  if (cond[2]) {
    result[2] = idiv(ia[2], ib[2], s[2]);
  }
  if (cond[3]) {
    result[3] = idiv(ia[3], ib[3], s[3]);
  }
  return vec4(result);
`,dtype:`int32`}),O0={kernelName:Wt,backendName:`webgl`,kernelFunc:D0},k0=class{constructor(e){this.variableNames=[`A`];let t=aJ(),[n,r]=e;this.outputShape=e,this.userCode=`
      void main() {
        ivec3 coords = getOutputCoords();
        int texR = coords[0];
        int texC = coords[1];
        int depth = coords[2];
        vec2 uv = (vec2(texC, texR) + halfCR) / vec2(${r}.0, ${n}.0);

        vec4 values = ${t.texture2D}(A, uv);
        float value;
        if (depth == 0) {
          value = values.r;
        } else if (depth == 1) {
          value = values.g;
        } else if (depth == 2) {
          value = values.b;
        } else if (depth == 3) {
          value = values.a;
        }

        setOutput(floor(value * 255.0 + 0.5));
      }
    `}},A0=class{constructor(e){this.variableNames=[`A`],this.packedInputs=!1,this.packedOutput=!0;let t=aJ(),[n,r]=e;this.outputShape=e,this.userCode=`
      void main() {
        ivec3 coords = getOutputCoords();
        int texR = coords[0];
        int texC = coords[1];
        int depth = coords[2];

        vec4 result = vec4(0.);

        for(int row=0; row<=1; row++) {
          for(int col=0; col<=1; col++) {
            texC = coords[1] + row;
            depth = coords[2] + col;

            vec2 uv = (vec2(texC, texR) + halfCR) /
                       vec2(${r}.0, ${n}.0);
            vec4 values = ${t.texture2D}(A, uv);
            float value;
            if (depth == 0) {
              value = values.r;
            } else if (depth == 1) {
              value = values.g;
            } else if (depth == 2) {
              value = values.b;
            } else if (depth == 3) {
              value = values.a;
            }

            result[row * 2 + col] = floor(value * 255.0 + 0.5);
          }
        }

        ${t.output} = result;
      }
    `}};Y();var j0={kernelName:Pr,backendName:`webgl`,kernelFunc:P0},M0,N0=O().getBool(`CANVAS2D_WILL_READ_FREQUENTLY_FOR_GPU`);function P0(e){let{inputs:t,backend:n,attrs:r}=e,{pixels:i}=t,{numChannels:a}=r,o=typeof HTMLVideoElement<`u`&&i instanceof HTMLVideoElement,s=typeof HTMLImageElement<`u`&&i instanceof HTMLImageElement,[c,l]=o?[i.videoWidth,i.videoHeight]:[i.width,i.height],u=[l,c],d=[l,c,a];if(s||o){let e=O().getBool(`CANVAS2D_WILL_READ_FREQUENTLY_FOR_GPU`);(M0==null||e!==N0)&&(N0=e,M0=document.createElement(`canvas`).getContext(`2d`,{willReadFrequently:N0})),M0.canvas.width=c,M0.canvas.height=l,M0.drawImage(i,0,0,c,l),i=M0.canvas}let f=n.makeTensorInfo(u,`int32`);n.texData.get(f.dataId).usage=nq.PIXELS,n.gpgpu.uploadPixelDataToTexture(n.getTexture(f.dataId),i);let p=O().getBool(`WEBGL_PACK`)?new A0(d):new k0(d),m=n.runWebGLProgram(p,[f],`int32`);return n.disposeData(f.dataId),m}Y();function F0(e){let{inputs:t,backend:n,attrs:r}=e,{x:i,filter:a,bias:o,preluActivationWeights:s}=t,{strides:c,pad:l,dataFormat:u,dilations:d,dimRoundingMode:f,activation:p,leakyreluAlpha:m}=r,h=md(u),g=td(i.shape,a.shape,c,d,l,f,!1,h),_,v=[],y=o!=null,b=s!=null,x=p===`leakyrelu`,S=()=>{let e=[i,a],t=(e,t)=>{if(t===`NCHW`&&e.shape.length===1&&e.shape[0]!==1){let t=$({inputs:{x:e},backend:n,attrs:{shape:[e.shape[0],1,1]}});return v.push(t),t}return e};if(y&&e.push(t(o,u)),b&&e.push(t(s,u)),x){let t=n.makeTensorInfo([],`float32`,xi(m,`float32`));e.push(t),v.push(t)}return e};if(g.filterHeight===1&&g.filterWidth===1&&g.dilationHeight===1&&g.dilationWidth===1&&g.strideHeight===1&&g.strideWidth===1&&(g.padInfo.type===`SAME`||g.padInfo.type===`VALID`))_=e1({x:i,filter:a,convInfo:g,backend:n,bias:o,activation:p,preluActivationWeights:s,leakyreluAlpha:m});else if(g.strideWidth<=2&&h===`channelsLast`&&O().getBool(`WEBGL_EXP_CONV`)){let e=new Z$(g,y,p?zZ(p,!0):null,b,x),t=[[g.padInfo.top,g.padInfo.left],[g.strideHeight,g.strideWidth],[g.dilationHeight,g.dilationWidth],[g.inHeight,g.inWidth]],r=S();_=n.runWebGLProgram(e,r,`float32`,t)}else if(O().getBool(`WEBGL_CONV_IM2COL`))_=t1({x:i,filter:a,convInfo:g,backend:n,bias:o,activation:p,preluActivationWeights:s,leakyreluAlpha:m});else{let e=new Y$(g,y,p?zZ(p,!1):null,b,x),t=S();_=n.runWebGLProgram(e,t,`float32`)}let C=$({inputs:{x:_},backend:n,attrs:{shape:g.outShape}});return v.push(_),v.forEach(e=>n.disposeIntermediateTensorInfo(e)),C}var I0={kernelName:Lr,backendName:`webgl`,kernelFunc:F0};Y();function L0(e){let{inputs:t,backend:n,attrs:r}=e,{x:i,filter:a,bias:o,preluActivationWeights:s}=t,{strides:c,pad:l,dilations:u,dimRoundingMode:d,activation:f,leakyreluAlpha:p}=r,m=[],h=u;h??=[1,1],y(pd(c,h),()=>`Error in depthwiseConv2d: Either strides or dilations must be 1. Got strides ${c} and dilations '${h}'`);let g=td(i.shape,a.shape,c,h,l,d,!0),_=O().getBool(`WEBGL_PACK_DEPTHWISECONV`)&&g.strideWidth<=2&&g.outChannels/g.inChannels===1,v=f?zZ(f,_):null,b=[i,a],x=o!=null,S=s!=null,C=f===`leakyrelu`;if(x&&b.push(o),S&&b.push(s),C){let e=n.makeTensorInfo([],`float32`,xi(p,`float32`));b.push(e),m.push(e)}let w;w=_?new R1(g,x,v,S,C):new L1(g,x,v,S,C);let T=[[g.padInfo.top,g.padInfo.left],[g.strideHeight,g.strideWidth],[g.dilationHeight,g.dilationWidth],[g.inHeight,g.inWidth]],E=n.runWebGLProgram(w,b,`float32`,T);return m.forEach(e=>n.disposeIntermediateTensorInfo(e)),E}var R0={kernelName:Rr,backendName:`webgl`,kernelFunc:L0},z0=class{constructor(e,t,n,r){this.sliceDim=e,this.strides=t,this.paramsShape=r,this.variableNames=[`x`,`indices`],this.outputShape=n;let i=tY(n.length),a=`
    int index;`;for(let e=0;e<this.sliceDim;e++)a+=`
          index = round(getIndices(coords[0], ${e}));
          out_of_bounds = out_of_bounds || index < 0;
          out_of_bounds = out_of_bounds || index >= ${this.paramsShape[e]};
          flattenIndex += index * ${this.strides[e]};`;this.userCode=`
         void main() {
          ${i} coords = getOutputCoords();
          int flattenIndex = 0;
          bool out_of_bounds = false;

          ${a}

          setOutput(out_of_bounds ? 0.0 : getX(flattenIndex, coords[1]));
        }
      `}};Y();function B0(e){let{inputs:t,backend:n}=e,{params:r,indices:i}=t,a=i.shape,o=a[a.length-1],s=C(r.shape),[c,l,u,d]=sl(r,i),f=$({inputs:{x:i},backend:n,attrs:{shape:[l,o]}}),p=$({inputs:{x:r},backend:n,attrs:{shape:[C(r.shape)/u,u]}});if(n.shouldExecuteOnCPU([r,i])||r.dtype===`string`){let e=QY(n.readSync(i.dataId),n.bufferSync(r),r.dtype,l,o,u,d,r.shape,s);return n.makeTensorInfo(c,r.dtype,e.values)}let m=new z0(o,d,[l,u],r.shape),h=n.runWebGLProgram(m,[p,f],p.dtype),g=$({inputs:{x:h},backend:n,attrs:{shape:c}});return n.disposeIntermediateTensorInfo(f),n.disposeIntermediateTensorInfo(p),n.disposeIntermediateTensorInfo(h),g}var V0={kernelName:qt,backendName:`webgl`,kernelFunc:B0},H0=class{constructor(e,t){this.variableNames=[`A`,`indices`],this.outputShape=t,this.rank=t.length;let n=tY(this.rank),r=U0(e,2);this.userCode=`
      void main() {
        ${n} resRC = getOutputCoords();
        int index = int(getIndices(resRC.x, resRC.z));
        float inBounds = (index >= 0) && (index < ${e[2]}) ? 1.0 : 0.0;
        setOutput(inBounds * getA(${r}));
      }
    `}};function U0(e,t){let n=[`resRC.x`,`resRC.y`,`resRC.z`,`resRC.w`],r=[];for(let t=0;t<e.length;t++)t===2?r.push(`index`):r.push(`${n[t]}`);return r.join()}Y();function W0(e){let{inputs:t,backend:n,attrs:r}=e,{x:i,indices:a}=t,{axis:o,batchDims:s}=r,c=ae(o,i.shape)[0];if(O().get(`DEBUG`)){let e=n.readSync(a.dataId),t=i.shape[c];for(let n=0;n<e.length;++n){let r=e[n];y(r<=t-1&&r>=0,()=>`GatherV2: the index value ${r} is not in [0, ${t-1}]`)}}let l=dE(i,a,c,s),u=C(a.shape),d=[],f=$({inputs:{x:i},backend:n,attrs:{shape:[l.batchSize,l.outerSize,l.dimSize,l.sliceSize]}}),p=$({inputs:{x:a},backend:n,attrs:{shape:[l.batchSize,u/l.batchSize]}});d.push(f),d.push(p);let m=[l.batchSize,l.outerSize,u/l.batchSize,l.sliceSize];if(n.shouldExecuteOnCPU([i,a])||i.dtype===`string`){let e=n.bufferSync(p),t=$Y(n.bufferSync(f),e,m);return d.forEach(e=>n.disposeIntermediateTensorInfo(e)),n.makeTensorInfo(l.outputShape,t.dtype,t.values)}let h=new H0(f.shape,m),g=n.runWebGLProgram(h,[f,p],f.dtype);d.push(g);let _=$({inputs:{x:g},backend:n,attrs:{shape:l.outputShape}});return d.forEach(e=>n.disposeIntermediateTensorInfo(e)),_}var G0={kernelName:Kt,backendName:`webgl`,kernelFunc:W0};Y();var K0=RZ({opSnippet:`return float(a > b);`,packedOpSnippet:`
  return vec4(greaterThan(a, b));
`,cpuKernelImpl:eX,dtype:`bool`}),q0={kernelName:Jt,backendName:`webgl`,kernelFunc:K0};Y();var J0=RZ({opSnippet:`return float(a >= b);`,packedOpSnippet:`
  return vec4(greaterThanEqual(a, b));
`,dtype:`bool`,cpuKernelImpl:tX}),Y0={kernelName:Yt,backendName:`webgl`,kernelFunc:J0};Y();function X0(e){let{inputs:t,backend:n}=e,{input:r}=t;return g0(r,!0,n)}var Z0={kernelName:Zt,backendName:`webgl`,kernelFunc:X0};Y();var Q0=LZ({opSnippet:`return float(!isnan(x) && !isinf(x));`,dtype:`bool`}),$0={kernelName:$t,backendName:`webgl`,kernelFunc:Q0};Y();var e2=LZ({opSnippet:`return float(isinf(x));`,dtype:`bool`}),t2={kernelName:en,backendName:`webgl`,kernelFunc:e2};Y();var n2=LZ({opSnippet:`return float(isnan(x));`,dtype:`bool`}),r2={kernelName:tn,backendName:`webgl`,kernelFunc:n2};Y();var i2=RZ({opSnippet:`return float(a < b);`,packedOpSnippet:`
  return vec4(lessThan(a, b));
`,cpuKernelImpl:nX,dtype:`bool`}),a2={kernelName:rn,backendName:`webgl`,kernelFunc:i2};Y();var o2=RZ({opSnippet:`return float(a <= b);`,packedOpSnippet:`
  return vec4(lessThanEqual(a, b));
`,cpuKernelImpl:rX,dtype:`bool`}),s2={kernelName:an,backendName:`webgl`,kernelFunc:o2};Y();function c2(e){let{backend:t,attrs:n}=e,{start:r,stop:i,num:a}=n,o=iX(r,i,a);return t.makeTensorInfo([o.length],`float32`,o)}var l2={kernelName:on,backendName:`webgl`,kernelFunc:c2};Y();var u2={kernelName:`Log`,backendName:`webgl`,kernelFunc:LZ({opSnippet:IZ+`
  return x < 0.0 ? 0./0. : log(x);
`,packedOpSnippet:`
  vec4 result = log(x);
  bvec4 isNaN = isnan(x);
  result.r = isNaN.r ? x.r : (x.r < 0.0 ? 0./0. : result.r);
  result.g = isNaN.g ? x.g : (x.g < 0.0 ? 0./0. : result.g);
  result.b = isNaN.b ? x.b : (x.b < 0.0 ? 0./0. : result.b);
  result.a = isNaN.a ? x.a : (x.a < 0.0 ? 0./0. : result.a);
  return result;
`,cpuKernelImpl:aX})};Y();var d2=LZ({opSnippet:IZ+`
  return log(1.0 + x);
`}),f2={kernelName:sn,backendName:`webgl`,kernelFunc:d2};Y();var p2=RZ({opSnippet:`return float(a >= 1.0 && b >= 1.0);`,packedOpSnippet:`
  return vec4(
    vec4(greaterThanEqual(a, vec4(1.0))) *
    vec4(greaterThanEqual(b, vec4(1.0))));
`,dtype:`bool`}),m2={kernelName:cn,backendName:`webgl`,kernelFunc:p2};Y();var h2=LZ({opSnippet:`return float(!(x >= 1.0));`}),g2={kernelName:ln,backendName:`webgl`,kernelFunc:h2};Y();var _2=RZ({opSnippet:`return float(a >= 1.0 || b >= 1.0);`,packedOpSnippet:`
  return min(
    vec4(greaterThanEqual(a, vec4(1.0))) +
    vec4(greaterThanEqual(b, vec4(1.0))),
    vec4(1.0));
`,dtype:`bool`}),v2={kernelName:un,backendName:`webgl`,kernelFunc:_2},y2=class{constructor(e,t,n,r,i){this.variableNames=[`x`],this.outputShape=[];let a=t,o=e[3]-1;this.outputShape=e;let s,c=`float(${n}) + float(${r}) * sum`;s=i===.5?`inversesqrt(${c})`:i===1?`1.0/(${c})`:`exp(log(${c}) * float(-${i}));`,this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int r = coords[1];
        int c = coords[2];
        int d = coords[3];
        float x = getX(b, r, c, d);
        float sum = 0.0;
        for (int j = -${a}; j <= ${a}; j++) {
          int idx = d + j;
          if (idx >= 0 && idx <=  ${o}) {
            float z = getX(b, r, c, idx);
            sum += z * z;
          }
        }
        float val = x * ${s};
        setOutput(val);
      }
    `}},b2=class{constructor(e,t,n,r,i){this.variableNames=[`x`],this.outputShape=[],this.packedInputs=!0,this.packedOutput=!0;let a=t,o=e[3]-1;this.outputShape=e;let s,c=`float(${n}) + float(${r}) * sum`;s=i===.5?`inversesqrt(${c})`:i===1?`1.0/(${c})`:`exp(log(${c}) * float(-${i}));`,this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords.x;
        int r = coords.y;
        int c = coords.z;
        int d = coords.w;

        bool hasNextCol = d < ${this.outputShape[3]};
        bool hasNextRow = c < ${this.outputShape[2]};

        vec4 sum = vec4(0.);
        vec4 xFragAtOutputCoords = getX(b, r, c, d);

        vec4 xAtOutputCoords = vec4(
          getChannel(xFragAtOutputCoords, vec2(c, d)),
          hasNextCol ?
            getChannel(xFragAtOutputCoords, vec2(c, d + 1)) : 0.0,
          hasNextRow ?
            getChannel(xFragAtOutputCoords , vec2(c + 1, d)) : 0.0,
          (hasNextRow && hasNextCol) ?
            getChannel(xFragAtOutputCoords, vec2(c + 1, d + 1)) : 0.0
        );

        int firstChannel = d - ${a};
        vec2 cache = vec2(0.);
        if(firstChannel >= 0){
          vec4 firstChannelFrag = getX(b, r, c, firstChannel);
          cache.x = getChannel(firstChannelFrag, vec2(c, firstChannel));
            if(hasNextRow){
              cache.y = getChannel(firstChannelFrag, vec2(c + 1, firstChannel));
            }
        }

        ivec2 depth = ivec2(d, d + 1);
        for (int j = - ${a}; j <= ${a}; j++) {
          ivec2 idx = depth + j;
          bvec2 aboveLowerBound = greaterThanEqual(idx, ivec2(0));
          bvec2 belowUpperBound = lessThanEqual(idx, ivec2(${o}));

          bool depthInRange = aboveLowerBound.x && belowUpperBound.x;
          bool depthPlusOneInRange = aboveLowerBound.y && belowUpperBound.y;

          if(depthInRange || depthPlusOneInRange){
            vec4 z = vec4(0.);
            vec4 xFragAtCurrentDepth;
            z.xz = cache.xy;
            if(depthPlusOneInRange && hasNextCol){
              xFragAtCurrentDepth = idx.y != d ?
                getX(b, r, c, idx.y) : xFragAtOutputCoords;
              z.y = getChannel(xFragAtCurrentDepth, vec2(c, idx.y));
              if(hasNextRow){
                z.w = getChannel(xFragAtCurrentDepth, vec2(c + 1, idx.y));
              }
            }
            cache.xy = z.yw;
            sum += z * z;
          }
        }
        vec4 result = xAtOutputCoords * ${s};
        setOutput(result);
      }
    `}};Y();var x2={kernelName:`LRN`,backendName:`webgl`,kernelFunc:e=>{let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{depthRadius:a,bias:o,alpha:s,beta:c}=r,l=O().getBool(`WEBGL_PACK_NORMALIZATION`)?new b2(i.shape,a,o,s,c):new y2(i.shape,a,o,s,c);return n.runWebGLProgram(l,[i],i.dtype)}},S2=class{constructor(e,t,n,r,i){this.variableNames=[`inputImage`,`outputImage`,`dy`],this.outputShape=[],this.outputShape=e,this.depth=e[3],this.depthRadius=t,this.bias=n,this.alpha=r,this.beta=i,this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int r = coords[1];
        int c = coords[2];

        float result = 0.0;
        for (int d = 0; d < ${this.depth}; ++d) {
          int depthBegin = int(max(0.0, float(d - ${t})));
          int depthEnd = int(min(float(${this.depth}),
              float(d + ${t} + 1)));

          const int MIN_DEPTH_BEGIN = 0;
          const int MAX_DEPTH_END = ${this.depth};

          float norm = 0.0;
          for (int k = MIN_DEPTH_BEGIN; k < MAX_DEPTH_END; ++k) {
            if (k < depthBegin){
              continue;
            }
            else if (k >= depthBegin && k < depthEnd) {
              norm += getInputImage(b, r, c, k) * getInputImage(b, r, c, k);
            }
            else {
              break;
            }
          }

          norm = float(${r}) * norm + float(${n});

          for(int k = MIN_DEPTH_BEGIN; k < MAX_DEPTH_END; ++k){
            if (k < depthBegin){
              continue;
            }
            else if (k >= depthBegin && k < depthEnd){
              float dyi = -2.0 * float(${r})
                * float(${i})
                * getInputImage(b ,r ,c, k) * getOutputImage(b, r, c, d)
                / norm;
              if (k == d) {
                dyi += pow(norm, -1.0 * ${i});
              }
              if (k == coords[3]) {
                dyi *= getDy(b, r, c, d);
                result += dyi;
              }
            }
            else {
              break;
            }
          }
      }
      setOutput(result);
      }
    `}};Y();var C2={kernelName:mn,backendName:`webgl`,kernelFunc:e=>{let{inputs:t,backend:n,attrs:r}=e,{x:i,y:a,dy:o}=t,{depthRadius:s,bias:c,alpha:l,beta:u}=r,d=new S2(i.shape,s,c,l,u);return n.runWebGLProgram(d,[i,a,o],i.dtype)}};Y();function w2(e,t,n,r){let i=C(t),a=C(e.shape)/i,o=$({inputs:{x:e},attrs:{shape:[a,i]},backend:r}),s=ZZ(o,e.dtype,`max`,r),c=$({inputs:{x:s},attrs:{shape:n},backend:r});return r.disposeIntermediateTensorInfo(o),r.disposeIntermediateTensorInfo(s),c}Y();function T2(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{reductionIndices:a,keepDims:o}=r,s=i.shape.length,c=ae(a,i.shape),l=c,u=tm(l,s),d=u!=null,f=n.shouldExecuteOnCPU([i]),p=i;if(d){if(f){let e=n.texData.get(p.dataId).values,t=Array(s);for(let e=0;e<t.length;e++)t[e]=i.shape[u[e]];let r=NX(e,i.shape,i.dtype,u,t);p=n.makeTensorInfo(t,i.dtype);let a=n.texData.get(p.dataId);a.values=r}else p=tQ(i,u,n);l=rm(l.length,s)}em(`max`,l,s);let[m,h]=Qp(p.shape,l),g=m;o&&(g=$p(m,c));let _;if(f){let e=n.texData.get(p.dataId).values,t=oX(e,C(h),g,i.dtype);_=n.makeTensorInfo(g,i.dtype);let r=n.texData.get(_.dataId);r.values=t}else _=w2(p,h,g,n);return d&&n.disposeIntermediateTensorInfo(p),_}var E2={kernelName:`Max`,backendName:`webgl`,kernelFunc:T2};Y();var D2=RZ({opSnippet:bZ+`
  return max(a, b);
`,packedOpSnippet:`
  vec4 result = vec4(max(a, b));
  bvec4 isNaNA = isnan(a);
  bvec4 isNaNB = isnan(b);
  bvec4 isNaN = bvec4(isNaNA.x || isNaNB.x, isNaNA.y || isNaNB.y, isNaNA.z || isNaNB.z, isNaNA.w || isNaNB.w);
  `+SZ+`
  return result;
`,cpuKernelImpl:sX}),O2={kernelName:hn,backendName:`webgl`,kernelFunc:D2};Y();function k2(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t;rJ(i,`maxPool`);let{filterSize:a,strides:o,pad:s,dimRoundingMode:c}=r;y(pd(o,1),()=>`Error in maxPool: Either strides or dilations must be 1. Got strides ${o} and dilations '1'`);let l=$u(i.shape,a,o,1,s,c);if(l.filterWidth===1&&l.filterHeight===1&&T(l.inShape,l.outShape))return wZ({inputs:{x:i},backend:n});let u=new KQ(l,`max`,!1);return n.runWebGLProgram(u,[i],i.dtype)}var A2={kernelName:gn,backendName:`webgl`,kernelFunc:k2};Y();function j2(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{filterSize:a,strides:o,pad:s,dataFormat:c,dimRoundingMode:l}=r,u=new qQ(ed(i.shape,a,o,[1,1,1],s,l,c),`max`,!1);return n.runWebGLProgram(u,[i],i.dtype)}var M2={kernelName:vn,backendName:`webgl`,kernelFunc:j2},N2=class{constructor(e){this.variableNames=[`dy`,`maxPos`],this.outputShape=e.inShape;let t=e.strideHeight,n=e.strideWidth,r=e.dilationHeight,i=e.effectiveFilterHeight,a=e.effectiveFilterWidth,o=i-1-e.padInfo.top,s=a-1-e.padInfo.left,c=i*a-1;this.userCode=`
      const ivec2 pads = ivec2(${o}, ${s});

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];

        ivec2 dyRCCorner = coords.yz - pads;
        int dyRCorner = dyRCCorner.x;
        int dyCCorner = dyRCCorner.y;

        // Convolve dy(?, ?, d) with pos mask(:, :, d) to get dx(xR, xC, d).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < ${i};
          wR += ${r}) {
          float dyR = float(dyRCorner + wR) / ${t}.0;

          if (dyR < 0.0 || dyR >= ${e.outHeight}.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          for (int wC = 0; wC < ${a}; wC++) {
            float dyC = float(dyCCorner + wC) / ${n}.0;

            if (dyC < 0.0 || dyC >= ${e.outWidth}.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            float dyValue = getDy(b, idyR, idyC, d);
            int maxPosValue = ${c} - int(getMaxPos(b, idyR, idyC, d));

            // Get the current value, check it against the value from the
            // position matrix.
            int curPosValue = wR * ${a} + wC;
            float mask = float(maxPosValue == curPosValue ? 1.0 : 0.0);

            dotProd += dyValue * mask;
          }
        }
        setOutput(dotProd);
      }
    `}},P2=class{constructor(e){this.variableNames=[`dy`,`maxPos`],this.outputShape=e.inShape;let t=e.strideDepth,n=e.strideHeight,r=e.strideWidth,i=e.dilationDepth,a=e.dilationHeight,o=e.dilationWidth,s=e.effectiveFilterDepth,c=e.effectiveFilterHeight,l=e.effectiveFilterWidth,u=s-1-e.padInfo.front,d=c-1-e.padInfo.top,f=l-1-e.padInfo.left,p=s*c*l-1;this.userCode=`
      const ivec3 pads = ivec3(${u}, ${d}, ${f});

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int ch = coords.u;

        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;
        int dyDCorner = dyCorner.x;
        int dyRCorner = dyCorner.y;
        int dyCCorner = dyCorner.z;

        // Convolve dy(?, ?, ?, ch) with pos mask(:, :, :, d) to get
        // dx(xD, xR, xC, ch).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;

        for (int wD = 0; wD < ${s};
           wD += ${i}) {
          float dyD = float(dyDCorner + wD) / ${t}.0;

          if (dyD < 0.0 || dyD >= ${e.outDepth}.0 || fract(dyD) > 0.0) {
            continue;
          }
          int idyD = int(dyD);

          for (int wR = 0; wR < ${c};
              wR += ${a}) {
            float dyR = float(dyRCorner + wR) / ${n}.0;

            if (dyR < 0.0 || dyR >= ${e.outHeight}.0 ||
                fract(dyR) > 0.0) {
              continue;
            }
            int idyR = int(dyR);

            for (int wC = 0; wC < ${l};
                wC += ${o}) {
              float dyC = float(dyCCorner + wC) / ${r}.0;

              if (dyC < 0.0 || dyC >= ${e.outWidth}.0 ||
                  fract(dyC) > 0.0) {
                continue;
              }
              int idyC = int(dyC);

              float dyValue = getDy(batch, idyD, idyR, idyC, ch);
              int maxPosValue = ${p} -
                  int(getMaxPos(batch, idyD, idyR, idyC, ch));

              // Get the current value, check it against the value from the
              // position matrix.
              int curPosValue =
                  wD * ${c} * ${l} +
                  wR * ${l} + wC;
              float mask = float(maxPosValue == curPosValue ? 1.0 : 0.0);

              dotProd += dyValue * mask;
            }
          }
        }
        setOutput(dotProd);
      }
    `}};Y();function F2(e){let{inputs:t,backend:n,attrs:r}=e,{dy:i,input:a}=t,o=a,{filterSize:s,strides:c,pad:l,dimRoundingMode:u}=r,d=ed(o.shape,s,c,[1,1,1],l,u),f=new qQ(d,`max`,!0),p=n.runWebGLProgram(f,[o],o.dtype),m=new P2(d),h=n.runWebGLProgram(m,[i,p],o.dtype);return n.disposeIntermediateTensorInfo(p),h}var I2={kernelName:yn,backendName:`webgl`,kernelFunc:F2};Y();function L2(e){let{inputs:t,backend:n,attrs:r}=e,{dy:i,input:a,output:o}=t,s=a;rJ([a,o],`maxPoolGrad`);let{filterSize:c,strides:l,pad:u,dimRoundingMode:d}=r,f=$u(s.shape,c,l,1,u,d),p=new KQ(f,`max`,!0),m=n.runWebGLProgram(p,[s],s.dtype),h=new N2(f),g=n.runWebGLProgram(h,[i,m],s.dtype);return n.disposeIntermediateTensorInfo(m),g}var R2={kernelName:_n,backendName:`webgl`,kernelFunc:L2};function z2(e,t,n,r){let i=new KQ(n,`max`,!1),a=r.runWebGLProgram(i,[e],`float32`);return i=new KQ(n,`max`,!0,!0,t),[a,r.runWebGLProgram(i,[e],`float32`)]}Y();var B2={kernelName:bn,backendName:`webgl`,kernelFunc:({inputs:e,attrs:t,backend:n})=>{let{x:r}=e,{filterSize:i,strides:a,pad:o,includeBatchInIndex:s}=t,c=n;y(r.shape.length===4,()=>`Error in maxPool: input must be rank 4 but got rank ${r.shape.length}.`);let l=[1,1];y(pd(a,l),()=>`Error in maxPool: Either strides or dilations must be 1. Got strides ${a} and dilations '${l}'`);let[u,d]=z2(r,s,$u(r.shape,i,a,l,o),c);return[u,d]}};Y();function V2(e,t,n,r){let i=C(t),a=C(e.shape)/i,o=$({inputs:{x:e},attrs:{shape:[a,i]},backend:r}),s=ZZ(o,`float32`,`mean`,r),c=$({inputs:{x:s},attrs:{shape:n},backend:r});return r.disposeIntermediateTensorInfo(o),r.disposeIntermediateTensorInfo(s),c}Y();var H2={kernelName:xn,backendName:`webgl`,kernelFunc:({inputs:e,attrs:t,backend:n})=>{let{x:r}=e,{keepDims:i,axis:a}=t,o=n,s=r.shape.length,c=ae(a,r.shape),l=c,u=tm(l,s),d=u!=null,f=o.shouldExecuteOnCPU([r]),p=[],m=r;if(d){if(f){let e=o.texData.get(m.dataId).values,t=Array(s);for(let e=0;e<t.length;e++)t[e]=r.shape[u[e]];let n=NX(e,r.shape,r.dtype,u,t);m=o.makeTensorInfo(t,r.dtype);let i=o.texData.get(m.dataId);i.values=n}else m=tQ(r,u,o);p.push(m),l=rm(l.length,s)}em(`sum`,l,s);let[h,g]=Qp(m.shape,l),_=h;i&&(_=$p(h,c));let v=V2(m,g,_,o);for(let e of p)o.disposeIntermediateTensorInfo(e);return v}};Y();function U2(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{axis:a,keepDims:o}=r,s=i.shape.length,c=ae(a,i.shape),l=c,u=tm(l,s),d=i;u!=null&&(d=aQ({inputs:{x:i},backend:n,attrs:{perm:u}}),l=rm(l.length,i.shape.length)),em(`min`,l,s);let[f,p]=Qp(d.shape,l),m=C(p),h=$({inputs:{x:d},backend:n,attrs:{shape:[-1,m]}}),g=ZZ(h,h.dtype,`min`,n),_;if(o){let e=$p(f,c);_=$({inputs:{x:g},backend:n,attrs:{shape:e}})}else _=$({inputs:{x:g},backend:n,attrs:{shape:f}});return n.disposeIntermediateTensorInfo(h),n.disposeIntermediateTensorInfo(g),u!=null&&n.disposeIntermediateTensorInfo(d),_}var W2={kernelName:`Min`,backendName:`webgl`,kernelFunc:U2};Y();var G2=RZ({opSnippet:bZ+`
  return min(a, b);
`,packedOpSnippet:`
  vec4 result = vec4(min(a, b));
  bvec4 isNaNA = isnan(a);
  bvec4 isNaNB = isnan(b);
  bvec4 isNaN = bvec4(isNaNA.x || isNaNB.x, isNaNA.y || isNaNB.y, isNaNA.z || isNaNB.z, isNaNA.w || isNaNB.w);
  `+SZ+`
  return result;
`,cpuKernelImpl:cX}),K2={kernelName:Sn,backendName:`webgl`,kernelFunc:G2},q2=class{constructor(e,t,n){this.variableNames=[`x`],this.outputShape=t.map((t,n)=>t[0]+e[n]+t[1]);let r=e.length,i=tY(r),a=t.map(e=>e[0]).join(`,`),o=t.map((t,n)=>t[0]+e[n]).join(`,`),s=[`coords[0]`,`coords[1]`,`coords[2]`,`coords[3]`].slice(0,r),c=n===`reflect`?0:1;this.userCode=r===1?`
        int start = ${a};
        int end = ${o};

        void main() {
          int outC = getOutputCoords();
          if (outC < start) {
            outC = start * 2 - outC - ${c};
          } else if(outC >= end) {
            outC = (end - 1) * 2 - outC + ${c};
          }
          setOutput(getX(outC - start));
        }
      `:`
      ${i} start = ${i}(${a});
      ${i} end = ${i}(${o});

      void main() {
        ${i} outC = getOutputCoords();
        for (int i = 0; i < ${r}; i++) {
          if (outC[i] < start[i]) {
            outC[i] = start[i] * 2 - outC[i] - ${c};
          } else if(outC[i] >= end[i]) {
            outC[i] = (end[i] - 1) * 2 - outC[i] + ${c};
          }
        }
        ${i} coords = outC - start;
        setOutput(getX(${s}));
      }
    `}},J2=class{constructor(e,t,n){this.variableNames=[`x`],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=t.map((t,n)=>t[0]+e[n]+t[1]);let r=e.length,i=tY(r),a=t.map(e=>e[0]).join(`,`),o=t.map((t,n)=>t[0]+e[n]).join(`,`),s=IX(`rc`,r),c=IX(`source`,r),l=`${s[r-1]} < ${this.outputShape[r-1]}`,u=r===1?`source`:`vec2(${c.slice(-2).join()})`,d=n===`reflect`?0:1,f=``;if(r===1){let e=`
        ${i} source = rc;
        if (source < start) {
          source = start * 2 - source - ${d};
        } else if (source >= end) {
          source = (end - 1) * 2 - source + ${d};
        }
        source -= start;
      `;f=`
        ${i} rc = outputLoc;
        ${e}
        result[0] = getChannel(getX(${c.join()}), ${u});
        ${s[r-1]} += 1;
        if(${l}) {
          ${e}
          result[1] = getChannel(getX(${c.join()}), ${u});
        }
      `}else{let e=`
        ${i} source = rc;
        ${i} lt = ${i}(lessThan(source, start));
        ${i} gte = ${i}(greaterThanEqual(source, end));
        ${i} orig = 1 - (lt + gte);
        source = orig * source +
                lt * (start * 2 - source - ${d}) +
                gte * ((end - 1) * 2 - source + ${d});
        source -= start;
      `;f=`
        ${i} rc = outputLoc;
        ${e}
        result[0] = getChannel(getX(${c.join()}), ${u});
        ${s[r-1]} += 1;
        if(${l}) {
          ${e}
          result[1] = getChannel(getX(${c.join()}), ${u});
        }
        rc = outputLoc;
        ${s[r-2]} += 1;
        if(${s[r-2]} < ${this.outputShape[r-2]}) {
          ${e}
          result[2] = getChannel(getX(${c.join()}), ${u});
          ${s[r-1]} += 1;
          if(${l}) {
            ${e}
            result[3] = getChannel(getX(${c.join()}), ${u});
          }
        }
      `}this.userCode=`
      const ${i} start = ${i}(${a});
      const ${i} end = ${i}(${o});

      void main() {
        ${i} outputLoc = getOutputCoords();
        vec4 result = vec4(0.);
        ${f}
        setOutput(result);
      }
    `}};Y();var Y2={kernelName:Cn,backendName:`webgl`,kernelFunc:({inputs:e,backend:t,attrs:n})=>{let{x:r}=e,{paddings:i,mode:a}=n,o=O().getBool(`WEBGL_PACK_ARRAY_OPERATIONS`)?new J2(r.shape,i,a):new q2(r.shape,i,a);return t.runWebGLProgram(o,[r],r.dtype)}};Y();var X2={kernelName:`Mod`,backendName:`webgl`,kernelFunc:RZ({opSnippet:`if (b == 0.0) return NAN;
  return mod(a, b);`,packedOpSnippet:`
  vec4 result = mod(a, b);
  bvec4 isNaN = equal(b, vec4(0.0));
  `+SZ+`
  return result;
`})},Z2=class{constructor(e,t,n){this.variableNames=[`probs`],this.customUniforms=[{name:`seed`,type:`float`}],this.outputShape=[e,n],this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];

        float r = random(seed);
        float cdf = 0.0;

        for (int i = 0; i < ${t-1}; i++) {
          cdf += getProbs(batch, i);

          if (r < cdf) {
            setOutput(float(i));
            return;
          }
        }

        // If no other event happened, last event happened.
        setOutput(float(${t-1}));
      }
    `}};Y();var Q2=RZ({opSnippet:`
if (a == b) {
  return 1.0;
};
return a / b;`,packedOpSnippet:`
  // vec4 one = vec4(equal(a, b));
  // return one + (vec4(1.0) - one) * a / b;
  vec4 result = a / b;
  if(a.x == b.x) {
    result.x = 1.;
  }
  if(a.y == b.y) {
    result.y = 1.;
  }
  if(a.z == b.z) {
    result.z = 1.;
  }
  if(a.w == b.w) {
    result.w = 1.;
  }

  return result;
`,checkOutOfBounds:!0}),$2={kernelName:Ft,backendName:`webgl`,kernelFunc:Q2};Y();var e4=`return a - b;`,t4=RZ({opSnippet:e4,packedOpSnippet:e4,supportsComplex:!0,cpuKernelImpl:AX}),n4={kernelName:`Sub`,backendName:`webgl`,kernelFunc:t4};Y();function r4(e){let{inputs:t,backend:n,attrs:r}=e,{logits:i}=t,{dim:a}=r,o=ae([a],i.shape),s=T2({inputs:{x:i},backend:n,attrs:{reductionIndices:o,keepDims:!1}}),c=$p(s.shape,o),l=$({inputs:{x:s},backend:n,attrs:{shape:c}}),u=t4({inputs:{a:i,b:l},backend:n}),d=c0({inputs:{x:u},backend:n}),f=rQ({inputs:{x:d},backend:n,attrs:{axis:o,keepDims:!1}}),p=$({inputs:{x:f},backend:n,attrs:{shape:c}}),m=Q2({inputs:{a:d,b:p},backend:n});return n.disposeIntermediateTensorInfo(s),n.disposeIntermediateTensorInfo(l),n.disposeIntermediateTensorInfo(u),n.disposeIntermediateTensorInfo(d),n.disposeIntermediateTensorInfo(f),n.disposeIntermediateTensorInfo(p),m}var i4={kernelName:dr,backendName:`webgl`,kernelFunc:r4};Y();function a4(e){let{inputs:t,backend:n,attrs:r}=e,{logits:i}=t,{numSamples:a,seed:o,normalized:s}=r,c=s?i:r4({inputs:{logits:i},backend:n,attrs:{dim:i.shape.length-1}}),l=c.shape[0],u=c.shape[1],d=new Z2(l,u,a),f=[[o]],p=n.runWebGLProgram(d,[c],`int32`,f);return s||n.disposeIntermediateTensorInfo(c),p}var o4={kernelName:wn,backendName:`webgl`,kernelFunc:a4};Y();var s4=YX+`
  return -x;
`,c4=`
  vec4 result = -x;
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`;function l4(e){let{inputs:t,backend:n}=e,{x:r}=t;if(n.shouldExecuteOnCPU([r])){let[e,t]=uX(n.texData.get(r.dataId).values,r.shape,r.dtype);return n.makeTensorInfo(t,r.dtype,e)}let i;return i=O().getBool(`WEBGL_PACK_UNARY_OPERATIONS`)?new cZ(r.shape,c4):new JX(r.shape,s4),n.runWebGLProgram(i,[r],r.dtype)}var u4={kernelName:`Neg`,backendName:`webgl`,kernelFunc:l4};Y();var d4=OS;function f4(e){zr(`tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead`);let{inputs:t,backend:n,attrs:r}=e,{boxes:i,scores:a}=t,{maxOutputSize:o,iouThreshold:s,scoreThreshold:c}=r,{selectedIndices:l}=d4(n.readSync(i.dataId),n.readSync(a.dataId),o,s,c);return n.makeTensorInfo([l.length],`int32`,new Int32Array(l))}var p4={kernelName:Dn,backendName:`webgl`,kernelFunc:f4};Y();var m4=kS;function h4(e){zr(`tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead`);let{inputs:t,backend:n,attrs:r}=e,{boxes:i,scores:a}=t,{maxOutputSize:o,iouThreshold:s,scoreThreshold:c,padToMaxOutputSize:l}=r,{selectedIndices:u,validOutputs:d}=m4(n.readSync(i.dataId),n.readSync(a.dataId),o,s,c,l);return[n.makeTensorInfo([u.length],`int32`,new Int32Array(u)),n.makeTensorInfo([],`int32`,new Int32Array([d]))]}var g4={kernelName:On,backendName:`webgl`,kernelFunc:h4};Y();var _4=AS;function v4(e){zr(`tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead`);let{inputs:t,backend:n,attrs:r}=e,{boxes:i,scores:a}=t,{maxOutputSize:o,iouThreshold:s,scoreThreshold:c,softNmsSigma:l}=r,{selectedIndices:u,selectedScores:d}=_4(n.readSync(i.dataId),n.readSync(a.dataId),o,s,c,l);return[n.makeTensorInfo([u.length],`int32`,new Int32Array(u)),n.makeTensorInfo([d.length],`float32`,new Float32Array(d))]}var y4={kernelName:kn,backendName:`webgl`,kernelFunc:v4},b4=class{constructor(e,t,n,r){this.variableNames=[`indices`],this.outputShape=[e,t],this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int index = round(getIndices(coords.x));
        setOutput(mix(float(${r}), float(${n}),
                      float(index == coords.y)));
      }
    `}};Y();var x4={kernelName:jn,backendName:`webgl`,kernelFunc:e=>{let{inputs:t,backend:n,attrs:r}=e,{indices:i}=t,{dtype:a,depth:o,onValue:s,offValue:c}=r,l=C(i.shape),u=new b4(l,o,s,c),d=$({inputs:{x:i},backend:n,attrs:{shape:[l]}}),f=n.runWebGLProgram(u,[d],a);n.disposeIntermediateTensorInfo(d);let p=[...i.shape,o],m=$({inputs:{x:f},backend:n,attrs:{shape:p}});return n.disposeIntermediateTensorInfo(f),m}};Y();function S4(e){let{inputs:t,backend:n}=e,{x:r}=t;if(r.dtype===`complex64`){let e=C$({inputs:{input:r},backend:n}),t=S4({inputs:{x:e},backend:n}),i=U$({inputs:{input:r},backend:n}),a=S4({inputs:{x:i},backend:n}),o=EZ({inputs:{real:t,imag:a},backend:n});return n.disposeIntermediateTensorInfo(e),n.disposeIntermediateTensorInfo(t),n.disposeIntermediateTensorInfo(i),n.disposeIntermediateTensorInfo(a),o}return b0({attrs:{shape:r.shape,dtype:r.dtype,value:r.dtype===`string`?``:0},backend:n})}var C4={kernelName:Mr,backendName:`webgl`,kernelFunc:S4};Y();function w4(e){let{inputs:t,backend:n}=e,{x:r}=t;if(r.dtype===`string`)throw Error(`onesLike is not supported under string dtype`);if(r.dtype===`complex64`){let e=C$({inputs:{input:r},backend:n}),t=w4({inputs:{x:e},backend:n}),i=U$({inputs:{input:r},backend:n}),a=S4({inputs:{x:i},backend:n}),o=EZ({inputs:{real:t,imag:a},backend:n});return n.disposeIntermediateTensorInfo(e),n.disposeIntermediateTensorInfo(t),n.disposeIntermediateTensorInfo(i),n.disposeIntermediateTensorInfo(a),o}return b0({attrs:{shape:r.shape,dtype:r.dtype,value:1},backend:n})}var T4={kernelName:An,backendName:`webgl`,kernelFunc:w4};Y();function E4(e){let{inputs:t,backend:n,attrs:r}=e,{axis:i}=r;if(t.length===1)return u0({inputs:{input:t[0]},backend:n,attrs:{dim:i}});let a=t[0].shape,o=t[0].dtype;t.forEach(e=>{b(a,e.shape,`All tensors passed to stack must have matching shapes`),y(o===e.dtype,()=>`All tensors passed to stack must have matching dtypes`)});let s=[],c=q$({inputs:t.map(e=>{let t=u0({inputs:{input:e},backend:n,attrs:{dim:i}});return s.push(t),t}),backend:n,attrs:{axis:i}});return s.forEach(e=>n.disposeIntermediateTensorInfo(e)),c}var D4={kernelName:Mn,backendName:`webgl`,kernelFunc:E4},O4=class{constructor(e,t,n){this.variableNames=[`x`],this.customUniforms=[{name:`value`,type:`float`}],this.outputShape=t.map((t,n)=>t[0]+e[n]+t[1]);let r=e.length,i=tY(r),a=t.map(e=>e[0]).join(`,`),o=t.map((t,n)=>t[0]+e[n]).join(`,`),s=[`coords[0]`,`coords[1]`,`coords[2]`,`coords[3]`].slice(0,r);this.userCode=r===1?`
        int start = ${a};
        int end = ${o};

        void main() {
          int outC = getOutputCoords();
          if (outC < start || outC >= end) {
            setOutput(value);
          } else {
            setOutput(getX(outC - start));
          }
        }
      `:`
      ${i} start = ${i}(${a});
      ${i} end = ${i}(${o});

      void main() {
        ${i} outC = getOutputCoords();
        if (any(lessThan(outC, start)) || any(greaterThanEqual(outC, end))) {
          setOutput(value);
        } else {
          ${i} coords = outC - start;
          setOutput(getX(${s}));
        }
      }
    `}},k4=class{constructor(e,t,n){this.variableNames=[`x`],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:`value`,type:`float`}],this.outputShape=t.map((t,n)=>t[0]+e[n]+t[1]);let r=e.length,i=tY(r),a=t.map(e=>e[0]).join(`,`),o=t.map((t,n)=>t[0]+e[n]).join(`,`),s=IX(`rc`,r),c=IX(`source`,r),l=`${s[r-1]} < ${this.outputShape[r-1]}`,u=r===1?`source`:`vec2(${c.slice(-2).join()})`,d=[`${i} rc = outputLoc;`,`${s[r-1]} += 1;
       if(${l}) {
      `,r===1?``:`}
       rc = outputLoc;
       ${s[r-2]} += 1;
       if(${s[r-2]} < ${this.outputShape[r-2]}) {`,r===1?``:`  ${s[r-1]} += 1;
         if(${l}) {`],f=r===1?`rc < start || rc >= end`:`any(lessThan(rc, start)) || any(greaterThanEqual(rc, end))`,p=``;for(let e=0,t=r===1?2:4;e<t;e++)p+=`
        ${d[e]}
        if (${f}) {
          result[${e}] = float(value);
        } else {
          ${i} source = rc - start;
          result[${e}] = getChannel(getX(${c.join()}), ${u});
        }
      `;p+=r===1?`} `:`}}`,this.userCode=`
      const ${i} start = ${i}(${a});
      const ${i} end = ${i}(${o});

      void main() {
        ${i} outputLoc = getOutputCoords();
        vec4 result = vec4(0.);
        ${p}
        setOutput(result);
      }
    `}};Y();var A4=e=>{let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{paddings:a,constantValue:o}=r;if(C(i.shape)===0)return b0({backend:n,attrs:{shape:a.map((e,t)=>e[0]+i.shape[t]+e[1]),value:o,dtype:i.dtype}});let s=O().getBool(`WEBGL_PACK_ARRAY_OPERATIONS`)?new k4(i.shape,a,o):new O4(i.shape,a,o),c=[[o]];return n.runWebGLProgram(s,[i],i.dtype,c)},j4={kernelName:Nn,backendName:`webgl`,kernelFunc:A4};Y();var M4={kernelName:`Pow`,backendName:`webgl`,kernelFunc:RZ({opSnippet:`
  if(a < 0.0 && floor(b) < b){
    return NAN;
  }
  if (b == 0.0) {
    return 1.0;
  }
  return (round(mod(b, 2.0)) != 1) ?
      pow(abs(a), b) : sign(a) * pow(abs(a), b);
`,packedOpSnippet:`
  // isModRound1 has 1 for components with round(mod(b, 2.0)) == 1, 0 otherwise.
  vec4 isModRound1 = vec4(equal(round(mod(b, 2.0)), ivec4(1)));
  vec4 multiplier = sign(a) * isModRound1 + (vec4(1.0) - isModRound1);
  vec4 result = multiplier * pow(abs(a), b);

  // Ensure that a^0 = 1, including 0^0 = 1 as this correspond to TF and JS
  bvec4 isExpZero = equal(b, vec4(0.0));
  result.r = isExpZero.r ? 1.0 : result.r;
  result.g = isExpZero.g ? 1.0 : result.g;
  result.b = isExpZero.b ? 1.0 : result.b;
  result.a = isExpZero.a ? 1.0 : result.a;

  bvec4 isNaN1 = lessThan(a, vec4(0.0));
  bvec4 isNaN2 = lessThan(floor(b), b);
  bvec4 isNaN = bvec4(isNaN1.x && isNaN2.x, isNaN1.y && isNaN2.y, isNaN1.z && isNaN2.z, isNaN1.w && isNaN2.w);
  `+SZ+`
  return result;
`})};Y();function N4(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{axis:a,keepDims:o}=r,s=i.shape.length,c=[],l=ae(a,i.shape),u=l,d=tm(u,s),f=i;d!=null&&(f=aQ({inputs:{x:i},backend:n,attrs:{perm:d}}),u=rm(u.length,s),c.push(f)),em(`prod`,u,s);let p;if(n.shouldExecuteOnCPU([f])){let e=n.texData.get(f.dataId).values,{outVals:t,outShape:r,outDtype:i}=fX(f.shape,f.dtype,e,u);p=n.makeTensorInfo(r,i,t)}else{let[e,t]=Qp(f.shape,u),r=C(t),a=$({inputs:{x:f},backend:n,attrs:{shape:[-1,r]}}),o=ZZ(a,$i(i.dtype),`prod`,n);p=$({inputs:{x:o},backend:n,attrs:{shape:e}}),c.push(a),c.push(o)}if(o){c.push(p);let e=$p(p.shape,l);p=$({inputs:{x:p},backend:n,attrs:{shape:e}})}return c.forEach(e=>n.disposeIntermediateTensorInfo(e)),p}var P4={kernelName:In,backendName:`webgl`,kernelFunc:N4};Y();function F4(e){let{inputs:t,backend:n,attrs:r}=e,{paramsNestedSplits:i,paramsDenseValues:a,indices:o}=t,{outputRaggedRank:s}=r,c=i.map(e=>n.readSync(e.dataId)),l=i.map(e=>e.shape),u=n.readSync(a.dataId),d=n.readSync(o.dataId),[f,p,m]=pX(c,l,u,a.shape,a.dtype,d,o.shape,s),h=f.map(e=>n.makeTensorInfo([e.length],`int32`,e)),g=n.makeTensorInfo(m,a.dtype,p);return h.concat([g])}var I4={kernelName:Ln,backendName:`webgl`,kernelFunc:F4};Y();function L4(e){let{inputs:t,backend:n}=e,{starts:r,limits:i,deltas:a}=t,o=n.readSync(r.dataId),s=n.readSync(i.dataId),c=n.readSync(a.dataId),[l,u]=mX(o,r.shape,r.dtype,s,i.shape,c,a.shape);return[n.makeTensorInfo([l.length],`int32`,l),n.makeTensorInfo([u.length],r.dtype,u)]}var R4={kernelName:Rn,backendName:`webgl`,kernelFunc:L4};Y();function z4(e){let{inputs:t,backend:n,attrs:r}=e,{shape:i,values:a,defaultValue:o,rowPartitionTensors:s}=t,{rowPartitionTypes:c}=r,l=n.readSync(i.dataId),u=n.readSync(a.dataId),d=n.readSync(o.dataId),f=s.map(e=>n.readSync(e.dataId)),p=s.map(e=>e.shape),[m,h]=hX(l,i.shape,u,a.shape,a.dtype,d,o.shape,f,p,c);return n.makeTensorInfo(m,a.dtype,h)}var B4={kernelName:zn,backendName:`webgl`,kernelFunc:z4};Y();var V4=e=>{let{backend:t,attrs:n}=e,{start:r,stop:i,step:a,dtype:o}=n,s=gX(r,i,a,o);return t.makeTensorInfo([s.length],o,s)},H4={kernelName:Bn,backendName:`webgl`,kernelFunc:V4};Y();var U4=LZ({opSnippet:`return 1.0 / x;`}),W4={kernelName:Hn,backendName:`webgl`,kernelFunc:U4};Y();var G4=LZ({opSnippet:YX+`
  return (x < 0.0) ? 0.0 : x;
`,packedOpSnippet:`
  vec4 result = x * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`}),K4={kernelName:Un,backendName:`webgl`,kernelFunc:G4};Y();var q4=LZ({opSnippet:YX+`
  return (x < 0.0) ? 0.0 : min(6.0, x);
`,packedOpSnippet:`
  vec4 result = min(x, vec4(6.)) * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`}),J4={kernelName:Yn,backendName:`webgl`,kernelFunc:q4},Y4=class{constructor(e,t,n,r,i){this.variableNames=[`A`],this.outputShape=[];let[a,o,s,c]=e;this.outputShape=[a,t,n,c];let l=[r&&t>1?o-1:o,r&&n>1?s-1:s],u=[r&&t>1?t-1:t,r&&n>1?n-1:n],d;d=i?`(vec2(yRC) + vec2(0.5)) * effectiveInputOverOutputRatioRC - vec2(0.5)`:`vec2(yRC) * effectiveInputOverOutputRatioRC`,this.userCode=`
      const vec2 effectiveInputOverOutputRatioRC = vec2(
          ${l[0]/u[0]},
          ${l[1]/u[1]});
      const vec2 inputShapeRC = vec2(${o}.0, ${s}.0);

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        ivec2 yRC = coords.yz;

        // Fractional source index.
        vec2 sourceFracIndexRC = ${d};

        // Compute the four integer indices.
        ivec2 sourceFloorRC = ivec2(max(sourceFracIndexRC, vec2(0.0)));
        ivec2 sourceCeilRC = ivec2(
          min(inputShapeRC - 1.0, ceil(sourceFracIndexRC)));

        float topLeft = getA(b, sourceFloorRC.x, sourceFloorRC.y, d);
        float bottomLeft = getA(b, sourceCeilRC.x, sourceFloorRC.y, d);
        float topRight = getA(b, sourceFloorRC.x, sourceCeilRC.y, d);
        float bottomRight = getA(b, sourceCeilRC.x, sourceCeilRC.y, d);

        vec2 fracRC = sourceFracIndexRC - vec2(sourceFloorRC);

        float top = topLeft + (topRight - topLeft) * fracRC.y;
        float bottom = bottomLeft + (bottomRight - bottomLeft) * fracRC.y;
        float newValue = top + (bottom - top) * fracRC.x;

        setOutput(newValue);
      }
    `}},X4=class{constructor(e,t,n,r,i){this.variableNames=[`A`],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=[];let[a,o,s,c]=e;this.outputShape=[a,t,n,c];let l=[r&&t>1?o-1:o,r&&n>1?s-1:s],u=[r&&t>1?t-1:t,r&&n>1?n-1:n],d;d=i?`(vec3(yRC) + vec3(0.5)) * effectiveInputOverOutputRatioRC - vec3(0.5)`:`vec3(yRC) * effectiveInputOverOutputRatioRC`,this.userCode=`
      const vec3 effectiveInputOverOutputRatioRC = vec3(
          ${l[0]/u[0]},
          ${l[1]/u[1]},
          ${l[1]/u[1]});
      const vec3 inputShapeRC = vec3(${o}.0, ${s}.0,
                                     ${s}.0);

      float getAValue(int b, int r, int c, int d) {
        return getChannel(getA(b, r, c, d), vec2(c, d));
      }

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        // Calculate values for next column in yRC.z.
        ivec3 yRC = coords.yzz + ivec3(0, 0, 1);

        // Fractional source index.
        vec3 sourceFracIndexRC = ${d};

        // Compute the four integer indices.
        ivec3 sourceFloorRC = ivec3(max(sourceFracIndexRC, vec3(0.0)));
        ivec3 sourceCeilRC = ivec3(
          min(inputShapeRC - 1.0, ceil(sourceFracIndexRC)));

        // Should we calculate next column and row elements in 2x2 packed cell.
        bool hasNextCol = d < ${c-1};
        bool hasNextRow = coords.z < ${n-1};

        // In parallel, construct four corners for all four components in
        // packed 2x2 cell.
        vec4 topLeft = vec4(
          getAValue(b, sourceFloorRC.x, sourceFloorRC.y, d),
          hasNextCol ? getAValue(b, sourceFloorRC.x, sourceFloorRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceFloorRC.x, sourceFloorRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceFloorRC.x, sourceFloorRC.z, d + 1) : 0.0);

        vec4 bottomLeft = vec4(
          getAValue(b, sourceCeilRC.x, sourceFloorRC.y, d),
          hasNextCol ? getAValue(b, sourceCeilRC.x, sourceFloorRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceCeilRC.x, sourceFloorRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceCeilRC.x, sourceFloorRC.z, d + 1) : 0.0);

        vec4 topRight = vec4(
          getAValue(b, sourceFloorRC.x, sourceCeilRC.y, d),
          hasNextCol ? getAValue(b, sourceFloorRC.x, sourceCeilRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceFloorRC.x, sourceCeilRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceFloorRC.x, sourceCeilRC.z, d + 1) : 0.0);

        vec4 bottomRight = vec4(
          getAValue(b, sourceCeilRC.x, sourceCeilRC.y, d),
          hasNextCol ? getAValue(b, sourceCeilRC.x, sourceCeilRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceCeilRC.x, sourceCeilRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceCeilRC.x, sourceCeilRC.z, d + 1) : 0.0);

        vec3 fracRC = sourceFracIndexRC - vec3(sourceFloorRC);

        vec4 top = mix(topLeft, topRight, fracRC.yyzz);
        vec4 bottom = mix(bottomLeft, bottomRight, fracRC.yyzz);
        vec4 newValue = mix(top, bottom, fracRC.x);

        setOutput(newValue);
      }
    `}};Y();function Z4(e){let{inputs:t,backend:n,attrs:r}=e,{images:i}=t,{alignCorners:a,halfPixelCenters:o,size:s}=r,[c,l]=s,u=O().getBool(`WEBGL_PACK_IMAGE_OPERATIONS`)?new X4(i.shape,c,l,a,o):new Y4(i.shape,c,l,a,o);return n.runWebGLProgram(u,[i],`float32`)}var Q4={kernelName:qn,backendName:`webgl`,kernelFunc:Z4},$4=class{constructor(e,t,n){this.variableNames=[`dy`],this.outputShape=[],this.outputShape=t;let[,r,i]=t,[,a,o]=e,s=[n&&a>1?r-1:r,n&&o>1?i-1:i],c=[n&&a>1?a-1:a,n&&o>1?o-1:o],l=s[0]/c[0],u=s[1]/c[1],d=1/l,f=1/u,p=Math.ceil(d)*2+2,m=Math.ceil(f)*2+2;this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        int r = coords[1];
        int c = coords[2];

        float accumulator = 0.0;

        const float heightScale = float(${l});
        const float widthScale = float(${u});

        const float invHeightScale = float(${d});
        const float invWidthScale = float(${f});

        const int winHeight = int(${p});
        const int winWidth = int(${m});

        // Compute bounds for where in dy we will look
        float startRLerp = floor(float(r) * invHeightScale);
        int startDyR = int(startRLerp - float(winHeight / 2));

        float startCLerp = floor(float(c) * invWidthScale);
        int startDyC = int(startCLerp - float(winWidth / 2));

        // Loop over dy
        for (int dyROffset = 0; dyROffset < winHeight; dyROffset++) {
          int dyR = dyROffset + startDyR;

          // Guard against the window exceeding the bounds of dy
          if (dyR < 0 || dyR >= ${a}) {
            continue;
          }

          for (int dyCOffset = 0; dyCOffset < winWidth; dyCOffset++) {
            int dyC = dyCOffset + startDyC;

            // Guard against the window exceeding the bounds of dy
            if (dyC < 0 || dyC >= ${o}) {
              continue;
            }

            float dxR = float(dyR) * heightScale;
            int topDxRIndex = int(floor(dxR));
            int bottomDxRIndex = int(min(ceil(dxR), ${r-1}.0));
            float dxRLerp = dxR - float(topDxRIndex);
            float inverseDxRLerp = 1.0 - dxRLerp;

            float dxC = float(dyC) * widthScale;
            int leftDxCIndex = int(floor(dxC));
            int rightDxCIndex = int(min(ceil(dxC), ${i-1}.0));
            float dxCLerp = dxC - float(leftDxCIndex);
            float inverseDxCLerp = 1.0 - dxCLerp;

            if (r == topDxRIndex && c == leftDxCIndex) {
              // topLeft
              accumulator +=
                getDy(b, dyR, dyC, d) * inverseDxRLerp * inverseDxCLerp;
            }

            if (r == topDxRIndex && c == rightDxCIndex) {
              // topRight
              accumulator += getDy(b, dyR, dyC, d) * inverseDxRLerp * dxCLerp;
            }

            if (r == bottomDxRIndex && c == leftDxCIndex) {
              // bottomLeft
              accumulator += getDy(b, dyR, dyC, d) * dxRLerp * inverseDxCLerp;
            }

            if (r == bottomDxRIndex && c == rightDxCIndex) {
              // bottomRight
              accumulator += getDy(b, dyR, dyC, d) * dxRLerp * dxCLerp;
            }
          }
        }
        // End loop over dy

        setOutput(accumulator);
      }
    `}};Y();function e3(e){let{inputs:t,backend:n,attrs:r}=e,{images:i,dy:a}=t,{alignCorners:o}=r,s=new $4(a.shape,i.shape,o);return n.runWebGLProgram(s,[a],a.dtype)}var t3={kernelName:Jn,backendName:`webgl`,kernelFunc:e3},n3=class{constructor(e,t,n,r,i){this.variableNames=[`A`],this.outputShape=[];let[a,o,s,c]=e;this.outputShape=[a,t,n,c];let l=[r&&t>1?o-1:o,r&&n>1?s-1:s],u=[r&&t>1?t-1:t,r&&n>1?n-1:n],d=r?`0.5`:`0.0`,f;f=i?`max((vec2(yRC) + vec2(0.5)) * effectiveInputOverOutputRatioRC, vec2(0.0))`:`vec2(yRC) * effectiveInputOverOutputRatioRC`,this.userCode=`
      const vec2 effectiveInputOverOutputRatioRC = vec2(
          ${l[0]/u[0]},
          ${l[1]/u[1]});
      const vec2 inputShapeRC = vec2(${o}.0, ${s}.0);

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        ivec2 yRC = coords.yz;

        // Fractional source index.
        vec2 sourceFracIndexRC = ${f};

        // Compute the coordinators of nearest neighbor point.
        ivec2 sourceNearestRC = ivec2(
          min(inputShapeRC - 1.0, floor(sourceFracIndexRC + ${d})));
        float newValue = getA(b, sourceNearestRC.x, sourceNearestRC.y, d);

        setOutput(newValue);
      }
    `}},r3=class{constructor(e,t,n,r,i){this.variableNames=[`A`],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=[];let[a,o,s,c]=e;this.outputShape=[a,t,n,c];let l=[r&&t>1?o-1:o,r&&n>1?s-1:s],u=[r&&t>1?t-1:t,r&&n>1?n-1:n],d=r?`0.5`:`0.0`,f;f=i?`max((vec3(yRC) + vec3(0.5)) * effectiveInputOverOutputRatioRC, vec3(0.0))`:`vec3(yRC) * effectiveInputOverOutputRatioRC`,this.userCode=`
      const vec3 effectiveInputOverOutputRatioRC = vec3(
          ${l[0]/u[0]},
          ${l[1]/u[1]},
          ${l[1]/u[1]});
      const vec3 inputShapeRC = vec3(${o}.0, ${s}.0,
                                     ${s}.0);

      float getAValue(int b, int r, int c, int d) {
        return getChannel(getA(b, r, c, d), vec2(c, d));
      }

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        // Calculate values for next column in yRC.z.
        ivec3 yRC = coords.yzz + ivec3(0, 0, 1);

        // Fractional source index.
        vec3 sourceFracIndexRC = ${f};

        // Compute the coordinators of nearest neighbor point.
        ivec3 sourceNearestRC = ivec3(
          min(inputShapeRC - 1.0, floor(sourceFracIndexRC + ${d})));

        // Should we calculate next column and row elements in 2x2 packed cell.
        bool hasNextCol = d < ${c-1};
        bool hasNextRow = coords.z < ${n-1};

        vec4 newValue = vec4(
          getAValue(b, sourceNearestRC.x, sourceNearestRC.y, d),
          hasNextCol ? getAValue(b, sourceNearestRC.x, sourceNearestRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceNearestRC.x, sourceNearestRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceNearestRC.x, sourceNearestRC.z, d + 1) : 0.0);

        setOutput(newValue);
      }
    `}};Y();function i3(e){let{inputs:t,backend:n,attrs:r}=e,{images:i}=t,{alignCorners:a,halfPixelCenters:o,size:s}=r,[c,l]=s,u=O().getBool(`WEBGL_PACK_IMAGE_OPERATIONS`)?new r3(i.shape,c,l,a,o):new n3(i.shape,c,l,a,o);return n.runWebGLProgram(u,[i],i.dtype)}var a3={kernelName:Gn,backendName:`webgl`,kernelFunc:i3},o3=class{constructor(e,t,n){this.variableNames=[`dy`],this.outputShape=[],this.outputShape=t;let[,r,i]=t,[,a,o]=e,s=[n&&a>1?r-1:r,n&&o>1?i-1:i],c=[n&&a>1?a-1:a,n&&o>1?o-1:o],l=s[0]/c[0],u=s[1]/c[1],d=1/l,f=1/u,p=Math.ceil(d)*2+2,m=Math.ceil(f)*2+2;this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        int r = coords[1];
        int c = coords[2];

        float accumulator = 0.0;

        const float heightScale = float(${l});
        const float widthScale = float(${u});

        const float invHeightScale = float(${d});
        const float invWidthScale = float(${f});

        const int winHeight = int(${p});
        const int winWidth = int(${m});

        // Compute bounds for where in dy we will look
        float startRLerp = floor(float(r) * invHeightScale);
        int startDyR = int(floor(startRLerp - float(winHeight / 2)));

        float startCLerp = floor(float(c) * invWidthScale);
        int startDyC = int(floor(startCLerp - float(winWidth / 2)));

        // Loop over dy
        for (int dyROffset = 0; dyROffset < winHeight; dyROffset++) {
          int dyR = dyROffset + startDyR;

          // Guard against the window exceeding the bounds of dy
          if (dyR < 0 || dyR >= ${a}) {
            continue;
          }

          for (int dyCOffset = 0; dyCOffset < winWidth; dyCOffset++) {
            int dyC = dyCOffset + startDyC;

            // Guard against the window exceeding the bounds of dy
            if (dyC < 0 || dyC >= ${o}) {
              continue;
            }

            float sourceFracRow =
              float(${s[0]}) *
                (float(dyR) / float(${c[0]}));

            float sourceFracCol =
                float(${s[1]}) *
                  (float(dyC) / float(${c[1]}));

            int sourceNearestRow = int(min(
                float(int(${r}) - 1),
                ${n} ? float(round(sourceFracRow)) :
                                  float(floor(sourceFracRow))));

            int sourceNearestCol = int(min(
                float(int(${i}) - 1),
                ${n} ? float(round(sourceFracCol)) :
                                  float(floor(sourceFracCol))));

            if (r == sourceNearestRow && c == sourceNearestCol) {
              accumulator += getDy(b, dyR, dyC, d);
            }
          }
        }
        // End loop over dy

        setOutput(accumulator);
      }
    `}};Y();function s3(e){let{inputs:t,backend:n,attrs:r}=e,{images:i,dy:a}=t,{alignCorners:o}=r,s=new o3(a.shape,i.shape,o);return n.runWebGLProgram(s,[a],a.dtype)}var c3={kernelName:Kn,backendName:`webgl`,kernelFunc:s3},l3=class{constructor(e,t){this.variableNames=[`x`];let n=e.length;if(n>4)throw Error(`WebGL backend: Reverse of rank-${n} tensor is not yet supported`);if(this.outputShape=e,n===1){this.userCode=`
        void main() {
          int coord = getOutputCoords();
          setOutput(getX(${e[0]} - coord - 1));
        }
      `;return}let r=n=>t.indexOf(n)!==-1&&e[n]!==1?`${e[n]} - coords[${n}] - 1`:`coords[${n}]`,i=e.map((e,t)=>r(t)).join(`,`),a=tY(n);this.userCode=`
      void main() {
        ${a} coords = getOutputCoords();
        setOutput(getX(${i}));
      }
    `}},u3=class{constructor(e,t){this.variableNames=[`x`],this.packedInputs=!0,this.packedOutput=!0;let n=e.length;if(n>4)throw Error(`WebGL backend: Reverse of rank-${n} tensor is not yet supported`);this.outputShape=e;let r=IX(`rc`,n),i=`${r[n-1]} + 1 < ${this.outputShape[n-1]}`,a=`${r[n-2]} + 1 < ${this.outputShape[n-2]}`,o=tY(n);this.userCode=n===1?`
        void main(){
          int rc = getOutputCoords();
          vec4 result = vec4(0.);
          result.r = getChannel(getX(${e[0]} - rc - 1),
            ${e[0]} - rc - 1);
          if(${i}){
              result.g = getChannel(getX(${e[0]} - (rc  + 1) - 1),
                ${e[0]} - (rc  + 1) - 1);
          }
          setOutput(result);
        }
      `:`
        void main() {
          ${o} rc = getOutputCoords();
          vec4 result = vec4(0.);
          result.r = ${s(r.slice())};
          if(${i}){
            result.g = ${c(r.slice())};
          }
          if(${a}) {
            result.b = ${l(r.slice())};
            if(${i}) {
              result.a = ${u(r.slice())};
            }
          }
          setOutput(result);
        }
    `;function s(e){return d(e)}function c(e){return e[n-1]=`(`+e[n-1]+` + 1)`,d(e)}function l(e){return e[n-2]=`(`+e[n-2]+` + 1)`,d(e)}function u(e){return e[n-1]=`(`+e[n-1]+` + 1)`,e[n-2]=`(`+e[n-2]+` + 1)`,d(e)}function d(t){let n=e.map((e,n)=>f(n,t));return`getChannel(getX(${n.join(`,`)}), vec2(${n.slice(-2).join(`,`)}))`}function f(n,r){return t.indexOf(n)!==-1&&e[n]!==1?`${e[n]} - ${r[n]} - 1`:`${r[n]}`}}};Y();function d3(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{dims:a}=r,o=i.shape.length,s=ae(a,i.shape);if(o===0)return wZ({inputs:{x:i},backend:n});let c=O().getBool(`WEBGL_PACK_ARRAY_OPERATIONS`)?new u3(i.shape,s):new l3(i.shape,s);return n.runWebGLProgram(c,[i],i.dtype)}var f3={kernelName:Xn,backendName:`webgl`,kernelFunc:d3},p3=class{constructor(e,t){this.variableNames=[`Image`],this.outputShape=[],this.customUniforms=[{name:`params`,type:`vec4`}];let n=e[1],r=e[2];this.outputShape=e;let i=``;i=typeof t==`number`?`float outputValue = ${t.toFixed(2)};`:`
        vec3 fill = vec3(${t.join(`,`)});
        float outputValue = fill[coords[3]];`,this.userCode=`
        void main() {
          ivec4 coords = getOutputCoords();
          int x = coords[2];
          int y = coords[1];
          float coordXFloat = (float(x) - params[0]) * params[3] -
            (float(y) - params[1]) * params[2];
          float coordYFloat = (float(x) - params[0]) * params[2] +
            (float(y) - params[1]) * params[3];
          int coordX = int(round(coordXFloat + params[0]));
          int coordY = int(round(coordYFloat + params[1]));
          ${i}
          if(coordX >= 0 && coordX < ${r} && coordY >= 0 && coordY < ${n}) {
            outputValue = getImage(coords[0], coordY, coordX, coords[3]);
          }
          setOutput(outputValue);
        }
    `}};Y();var m3={kernelName:Fr,backendName:`webgl`,kernelFunc:({inputs:e,attrs:t,backend:n})=>{let{image:r}=e,{radians:i,fillValue:a,center:o}=t,s=n,c=new p3(r.shape,a),[l,u]=sT(o,r.shape[1],r.shape[2]),d=[[l,u,Math.sin(i),Math.cos(i)]];return s.runWebGLProgram(c,[r],r.dtype,d)}};Y();var h3=LZ({opSnippet:`
  // OpenGL ES does not support round function.
  // The algorithm is based on banker's rounding.
  float base = floor(x);
  if ((x - base) < 0.5) {
    return floor(x);
  } else if ((x - base) > 0.5) {
    return ceil(x);
  } else {
    if (mod(base, 2.0) == 0.0) {
      return base;
    } else {
      return base + 1.0;
    }
  }
`}),g3={kernelName:Zn,backendName:`webgl`,kernelFunc:h3};Y();var _3=LZ({opSnippet:`return inversesqrt(x);`,cpuKernelImpl:_X}),v3={kernelName:Qn,backendName:`webgl`,kernelFunc:_3},y3=class{constructor(e,t,n,r,i,a,o=!0){this.variableNames=[`updates`,`indices`,`defaultValue`],this.outputShape=a;let s=tY(i.length),c=tY(a.length),l=``;n===1?l=`i`:n===2&&(l=`i, j`);let u=`getIndices(${l})`,d=``;r===1?d=`i`:r===2&&(d=`i, coords[1]`);let f=`getUpdates(${d})`,p=t>1?`strides[j]`:`strides`;this.userCode=`
        ${s} strides = ${s}(${i});

        void main() {
          ${c} coords = getOutputCoords();
          float sum = 0.0;
          bool found = false;
          for (int i = 0; i < ${e}; i++) {
            int flattenedIndex = 0;
            for (int j = 0; j < ${t}; j++) {
              int index = round(${u});
              flattenedIndex += index * ${p};
            }
            if (flattenedIndex == coords[0]) {
              sum += ${f};
              found = true;
            }
          }
          setOutput(mix(getDefaultValue(), sum, float(found)));
        }
      `}};Y();function b3(e){let{inputs:t,backend:n,attrs:r}=e,{indices:i,updates:a}=t,{shape:o}=r,{sliceRank:s,numUpdates:c,sliceSize:l,strides:u,outputSize:d}=fl(a,i,o),f=[d/l,l];if(d===0)return n.makeTensorInfo(o,i.dtype);let p=$({inputs:{x:i},backend:n,attrs:{shape:[c,s]}}),m=$({inputs:{x:a},backend:n,attrs:{shape:[c,l]}}),h=n.makeTensorInfo([],`float32`,new Float32Array([0])),g=new y3(c,s,p.shape.length,m.shape.length,u,f),_=n.runWebGLProgram(g,[m,p,h],m.dtype),v=$({inputs:{x:_},backend:n,attrs:{shape:o}});return n.disposeIntermediateTensorInfo(p),n.disposeIntermediateTensorInfo(m),n.disposeIntermediateTensorInfo(_),n.disposeIntermediateTensorInfo(h),v}var x3={kernelName:$n,backendName:`webgl`,kernelFunc:b3};Y();var S3=class{constructor(e,t,n,r){this.variableNames=[`sortedSequence`,`values`],this.customUniforms=[{name:`numInputs`,type:`int`}],this.outputShape=[e,n];let i=`for (int i = 0; i < ${Math.ceil(Math.log2(t+1))}; ++i) { if (left >= right) break;`,a=O().getNumber(`WEBGL_VERSION`)===2?`while (left < right) {`:i,o=r===`left`?`<`:`<=`;this.userCode=`
       int findBound(int batch, float value) {
         int left = 0;
         int right = numInputs;
         int mid;
         ${a}
           mid = (left + right) / 2;
           if (getSortedSequence(batch, mid) ${o} value) {
             left = mid + 1;
           } else {
             right = mid;
           }
         }
         return right;
       }

       void main() {
         ivec2 coords = getOutputCoords();
         int batch = coords[0];
         int valueIndex = coords[1];

         float value = getValues(batch, valueIndex);

         setOutput(float(findBound(batch, value)));
       }
     `}};Y();function C3(e){let{inputs:t,backend:n,attrs:r}=e,{sortedSequence:i,values:a}=t,{side:o}=r,s=new S3(i.shape[0],i.shape[1],a.shape[1],o),c=[[i.shape[1]]];return n.runWebGLProgram(s,[i,a],`int32`,c)}var w3={kernelName:er,backendName:`webgl`,kernelFunc:C3},T3=class{constructor(e,t,n){this.variableNames=[`c`,`a`,`b`],this.outputShape=t;let r,i;if(n>4)throw Error(`Where for rank ${n} is not yet supported`);if(n===1)i=`resRC`,r=`resRC`;else{let n=[`resRC.x`,`resRC.y`,`resRC.z`,`resRC.w`],a=[],o=[];for(let r=0;r<t.length;r++)o.push(`${n[r]}`),r<e&&a.push(`${n[r]}`);r=a.join(),i=o.join()}let a=tY(n);this.userCode=`
      void main() {
        ${a} resRC = getOutputCoords();
        float cVal = getC(${r});
        if (cVal >= 1.0) {
          setOutput(getA(${i}));
        } else {
          setOutput(getB(${i}));
        }
      }
    `}};Y();function E3(e){let{inputs:t,backend:n}=e,{condition:r,t:i,e:a}=t,o=new T3(r.shape.length,i.shape,i.shape.length);return n.runWebGLProgram(o,[r,i,a],Qi(i.dtype,a.dtype))}var D3={kernelName:tr,backendName:`webgl`,kernelFunc:E3};Y();var O3=LZ({opSnippet:`
  // Stable and Attracting Fixed Point (0, 1) for Normalized Weights.
  // see: https://arxiv.org/abs/1706.02515
  float scaleAlpha = ${hT};
  float scale = ${gT};
  return (x >= 0.0) ? scale * x : scaleAlpha * (exp(x) - 1.0);
`}),k3={kernelName:nr,backendName:`webgl`,kernelFunc:O3};Y();var A3=LZ({opSnippet:IZ+`
  return 1.0 / (1.0 + exp(-1.0 * x));
`,packedOpSnippet:`
  vec4 result = 1.0 / (1.0 + exp(-1.0 * x));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,cpuKernelImpl:yX}),j3={kernelName:or,backendName:`webgl`,kernelFunc:A3};Y();var M3=LZ({opSnippet:`
  if (isnan(x)) { return 0.0; }
  return sign(x);
`}),N3={kernelName:ar,backendName:`webgl`,kernelFunc:M3};Y();var P3={kernelName:`Sin`,backendName:`webgl`,kernelFunc:LZ({opSnippet:IZ+`
  return sin(x);
`})};Y();var F3=LZ({opSnippet:`
  float e2x = exp(x);
  return (e2x - 1.0 / e2x) / 2.0;
`}),I3={kernelName:ir,backendName:`webgl`,kernelFunc:F3};Y();var L3=LZ({opSnippet:`
  float epsilon = 1.1920928955078125e-7;
  float threshold = log(epsilon) + 2.0;

  bool too_large = x > -threshold;
  bool too_small = x < threshold;

  float result;
  float exp_x = exp(x);

  if (too_large){
    result = x;
  }
  else if (too_small){
    result = exp_x;
  }
  else{
    result = log(exp_x + 1.0);
  }
  return result;
`}),R3={kernelName:sr,backendName:`webgl`,kernelFunc:L3};Y();var z3={kernelName:lr,backendName:`webgl`,kernelFunc:e=>{let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{blockShape:a,paddings:o}=r;y(i.shape.length<=4,()=>`spaceToBatchND for rank > 4 with a WebGL backend not implemented yet`);let s=a.reduce((e,t)=>e*t),c=[[0,0]];c.push(...o);for(let e=1+a.length;e<i.shape.length;++e)c.push([0,0]);let l=[],u=A4({inputs:{x:i},backend:n,attrs:{paddings:c,constantValue:0}}),d=lT(u.shape,a,s,!1),f=uT(d.length,a.length,!1),p=dT(u.shape,a,s,!1),m=$({inputs:{x:u},backend:n,attrs:{shape:d}}),h=aQ({inputs:{x:m},backend:n,attrs:{perm:f}}),g=$({inputs:{x:h},backend:n,attrs:{shape:p}});return l.push(u),l.push(m),l.push(h),l.forEach(e=>n.disposeIntermediateTensorInfo(e)),g}};Y();function B3(e){let{inputs:t,backend:n}=e,{indices:r,values:i,denseShape:a,defaultValue:o}=t;if(a.shape.length!==1)throw Error(`Dense shape must be a vector, saw:
         ${a.shape}`);if(r.shape.length!==2)throw Error(`Indices must be a matrix, saw:
         ${r.shape}`);if(i.shape.length!==1)throw Error(`Values must be a vector, saw:
         ${i.shape}`);if(o.shape.length!==0)throw Error(`Default value must be a scalar, saw:
        ${o.shape}`);let s=n.readSync(r.dataId),c=n.readSync(i.dataId),l=n.readSync(a.dataId),u=n.readSync(o.dataId)[0],[d,f,p,m,h]=SX(s,r.shape,r.dtype,c,i.dtype,l,u);return[n.makeTensorInfo(f,r.dtype,d),n.makeTensorInfo([f[0]],i.dtype,p),n.makeTensorInfo([m.length],`bool`,new Uint8Array(m.map(e=>Number(e)))),n.makeTensorInfo([h.length],r.dtype,new Int32Array(h))]}var V3={kernelName:fr,backendName:`webgl`,kernelFunc:B3};Y();function H3(e){let{inputs:t,backend:n}=e,{inputIndices:r,inputShape:i,newShape:a}=t;if(r.shape.length!==2)throw Error(`Input indices should be a matrix but received shape ${r.shape}`);if(i.shape.length!==1)throw Error(`Input shape should be a vector but received shape ${i.shape}`);if(a.shape.length!==1)throw Error(`Target shape should be a vector but received shape ${a.shape}`);let o=Array.from(n.readSync(i.dataId)),s=n.readSync(r.dataId),c=Array.from(n.readSync(a.dataId)),[l,u,d]=CX(s,r.shape,r.dtype,o,c);return[n.makeTensorInfo(u,r.dtype,l),n.makeTensorInfo([d.length],a.dtype,new Int32Array(d))]}var U3={kernelName:pr,backendName:`webgl`,kernelFunc:H3};Y();function W3(e){let{inputs:t,backend:n}=e,{data:r,indices:i,segmentIds:a}=t;if(r.shape.length<1)throw Error(`Data should be at least 1 dimensional but received scalar`);if(i.shape.length!==1)throw Error(`Indices should be a vector but received shape
              ${i.shape}`);if(a.shape.length!==1)throw Error(`Segment ids should be a vector but received shape
              ${a.shape}`);let o=n.readSync(r.dataId),s=n.readSync(i.dataId),c=n.readSync(a.dataId),[l,u]=wX(o,r.shape,r.dtype,s,c,!0);return n.makeTensorInfo(u,r.dtype,l)}var G3={kernelName:mr,backendName:`webgl`,kernelFunc:W3};Y();function K3(e){let{inputs:t,backend:n}=e,{data:r,indices:i,segmentIds:a}=t;if(r.shape.length<1)throw Error(`Data should be at least 1 dimensional but received scalar`);if(i.shape.length!==1)throw Error(`Indices should be a vector but received shape
             ${i.shape}`);if(a.shape.length!==1)throw Error(`Segment ids should be a vector but received shape
             ${a.shape}`);let o=n.readSync(r.dataId),s=n.readSync(i.dataId),c=n.readSync(a.dataId),[l,u]=wX(o,r.shape,r.dtype,s,c);return n.makeTensorInfo(u,r.dtype,l)}var q3={kernelName:hr,backendName:`webgl`,kernelFunc:K3};Y();function J3(e){let{inputs:t,backend:n,attrs:r}=e,{sparseIndices:i,sparseValues:a,defaultValue:o}=t,{outputShape:s}=r,{sliceRank:c,numUpdates:l,sliceSize:u,strides:d,outputSize:f}=fl(a,i,s);if(a.dtype===`string`){let e=vX(n.bufferSync(i),n.bufferSync(a),s,f,u,l,c,d,Di(n.readSync(o.dataId)[0]),!1);return n.makeTensorInfo(s,e.dtype,e.values)}let p=new y3(l,c,i.shape.length,a.shape.length,d,[f,1],!1),m=n.runWebGLProgram(p,[a,i,o],a.dtype),h=$({inputs:{x:m},backend:n,attrs:{shape:s}});return n.disposeIntermediateTensorInfo(m),h}var Y3={kernelName:gr,backendName:`webgl`,kernelFunc:J3};Y();function X3(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{numOrSizeSplits:a,axis:o}=r,s=ae(o,i.shape)[0],c=GT(i,a,s),l=i.shape.length,u=Array(l).fill(0),d=i.shape.slice();return c.map(e=>{let t=[...d];t[s]=e;let r=m$({inputs:{x:i},backend:n,attrs:{begin:u,size:t}});return u[s]+=e,r})}var Z3={kernelName:ur,backendName:`webgl`,kernelFunc:X3};Y();var Q3=`return sqrt(x);`,$3=LZ({opSnippet:Q3,packedOpSnippet:Q3,cpuKernelImpl:TX}),e6={kernelName:cr,backendName:`webgl`,kernelFunc:$3};Y();var t6=LZ({opSnippet:`return x * x;`}),n6={kernelName:vr,backendName:`webgl`,kernelFunc:t6};Y();var r6=`return (a - b) * (a - b);`,i6=RZ({opSnippet:r6,packedOpSnippet:r6}),a6={kernelName:_r,backendName:`webgl`,kernelFunc:i6};Y();function o6({inputs:e,attrs:t,backend:n}){let{x:r}=e,i=YX+`
    return x > 0.0 ? 1.0 : float(${t.alpha});
  `,a=new JX(r.shape,i);return n.runWebGLProgram(a,[r],r.dtype)}var s6={kernelName:Nr,backendName:`webgl`,kernelFunc:o6},c6=class{constructor(e,t,n){this.variableNames=[`x`],this.outputShape=n;let r=n.length,i=tY(n.length),a=tY(n.length),o=``;if(r===1)o=`coords * strides + begin`;else{let e=0;o=n.map((t,r)=>(e++,n.length===1?`coords * strides[${r}] + begin[${r}]`:`coords[${e-1}] * strides[${r}] + begin[${r}]`)).join(`,`)}this.userCode=`
      ${i} begin = ${i}(${e});
      ${i} strides = ${i}(${t});

      void main() {
        ${a} coords = getOutputCoords();
        setOutput(getX(${o}));
      }
    `}};Y();function l6(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{begin:a,end:o,strides:s,beginMask:c,endMask:l,ellipsisMask:u,newAxisMask:d,shrinkAxisMask:f}=r,{finalShapeSparse:p,finalShape:m,isIdentity:h,sliceDim0:g,isSimpleSlice:_,begin:v,end:b,strides:x}=Al(i.shape,a,o,s,c,l,u,d,f),S;if(h)S=$({inputs:{x:i},backend:n,attrs:{shape:m}});else if(g||_){y(i.shape.length>=1,()=>`Input must have rank at least 1, got: ${i.shape.length}`);let e=_l(v,b,x),t=m$({inputs:{x:i},backend:n,attrs:{begin:v,size:e}});S=$({inputs:{x:t},backend:n,attrs:{shape:m}}),n.disposeIntermediateTensorInfo(t)}else if(n.shouldExecuteOnCPU([i])){let e=n.readSync(i.dataId),t=EX(p,ss(i.shape,i.dtype,e),x,v);S=n.makeTensorInfo(m,i.dtype,t.values)}else{let e=new c6(v,x,p);S=n.runWebGLProgram(e,[i],i.dtype)}let C=$({inputs:{x:S},backend:n,attrs:{shape:m}});return n.disposeIntermediateTensorInfo(S),C}var u6={kernelName:yr,backendName:`webgl`,kernelFunc:l6};Y();function d6(e){let{inputs:t,backend:n,attrs:r}=e,{separator:i,nGramWidths:a,leftPad:o,rightPad:s,padWidth:c,preserveShortSequences:l}=r,{data:u,dataSplits:d}=t,[f,p]=DX(n.readSync(u.dataId),n.readSync(d.dataId),i,a,o,s,c,l);return[n.makeTensorInfo([f.length],`string`,f),n.makeTensorInfo(d.shape,`int32`,p)]}var f6={kernelName:br,backendName:`webgl`,kernelFunc:d6};Y();function p6(e){let{inputs:t,backend:n,attrs:r}=e,{skipEmpty:i}=r,{input:a,delimiter:o}=t;if(a.dtype!==`string`)throw Error(`Input must be of datatype string`);if(a.shape.length!==1)throw Error(`Input must be a vector, got shape: ${a.shape}`);if(o.shape.length!==0)throw Error(`Delimiter must be a scalar, got shape: ${o.shape}`);let s=n.readSync(a.dataId),c=n.readSync(o.dataId)[0],[l,u,d]=OX(s,c,i),f=u.length;return[n.makeTensorInfo([f,2],`int32`,l),n.makeTensorInfo([f],`string`,u),n.makeTensorInfo([2],`int32`,new Int32Array(d))]}var m6={kernelName:xr,backendName:`webgl`,kernelFunc:p6};Y();function h6(e){let{inputs:t,backend:n,attrs:r}=e,{numBuckets:i}=r,{input:a}=t;if(a.dtype!==`string`)throw Error(`Input must be of datatype string`);if(i<=0)throw Error(`Number of buckets must be at least 1`);let o=kX(n.readSync(a.dataId),i);return n.makeTensorInfo(a.shape,`int32`,o)}var g6={kernelName:Sr,backendName:`webgl`,kernelFunc:h6};Y();var _6={kernelName:`Tan`,backendName:`webgl`,kernelFunc:LZ({opSnippet:`return tan(x);`})};Y();var v6=LZ({opSnippet:`
  float e2x = exp(-2.0 * abs(x));
  return sign(x) * (1.0 - e2x) / (1.0 + e2x);
`}),y6={kernelName:Cr,backendName:`webgl`,kernelFunc:v6},b6=class{constructor(e,t){this.variableNames=[`A`];let n=Array(e.length);for(let r=0;r<n.length;r++)n[r]=e[r]*t[r];this.outputShape=n,this.rank=n.length;let r=tY(this.rank),i=x6(e);this.userCode=`
      void main() {
        ${r} resRC = getOutputCoords();
        setOutput(getA(${i}));
      }
    `}};function x6(e){let t=e.length;if(t>5)throw Error(`Tile for rank ${t} is not yet supported`);if(t===1)return`imod(resRC, ${e[0]})`;let n=[`resRC.x`,`resRC.y`,`resRC.z`,`resRC.w`,`resRC.u`],r=[];for(let t=0;t<e.length;t++)r.push(`imod(${n[t]}, ${e[t]})`);return r.join()}Y();function S6(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{reps:a}=r;if(i.dtype===`string`||i.shape.length>5){let e=n.readSync(i.dataId),t=i.dtype===`string`?e.map(e=>Di(e)):e,r=jX(ss(i.shape,i.dtype,t),a);return n.makeTensorInfo(r.shape,r.dtype,r.values)}let o=new b6(i.shape,a);return n.runWebGLProgram(o,[i],i.dtype)}var C6={kernelName:wr,backendName:`webgl`,kernelFunc:S6},w6=class{constructor(e){this.variableNames=[`x`,`indices`],this.customUniforms=[{name:`n`,type:`int`},{name:`firstPass`,type:`int`},{name:`negativeInf`,type:`float`},{name:`dir`,type:`int`},{name:`inc`,type:`int`}],this.outputShape=e,this.userCode=`
       void main() {
         ivec2 coords = getOutputCoords();
         int batch = coords[0];
         int elemIdx = coords[1];

         // We compare elements pair-wise within a group of size 2 * inc.
         // The comparing rule for each group alternates between ascending
         // and descending. Within each group, we compare each pair at
         // positions i and i+inc. To decide whether an element at position i
         // is x0 or x1, we mod it by 2 * inc, if the result is smaller than
         // inc, it is in the first half of the group, we denote it as x0,
         // otherwise we denote it as x1.
         // For example, as shown in the Bitonic top K paper referenced above,
         // Figure5(a) shows that element[1] is in the
         // second half of the group when group size is 2, but it is in the
         // first half of the group when group size is 4.

         bool isFirstInPair = imod(elemIdx, 2 * inc) < inc;
         int i = isFirstInPair ? elemIdx : elemIdx - inc;

         int i0 = firstPass == 1 ? i : int(getIndices(batch, i));
         int i1 = firstPass == 1 ? i + inc : int(getIndices(batch, i + inc));
         float x0 = i0 < n ? getX(batch, i0) : negativeInf;
         float x1 = i1 < n ? getX(batch, i1) : negativeInf;

         // Denotes which direction indices are in (ascending or descending).
         bool reverse = imod(elemIdx, 2 * dir) >= dir;
         bool isGreater = x0 > x1 || (x0 == x1 && i1 > i0);
         if (reverse == isGreater) { // Elements in opposite order of direction
           int iTemp = i0;
           i0 = i1;
           i1 = iTemp;
         }
         if (isFirstInPair) {
            setOutput(float(i0));
         } else {
            setOutput(float(i1));
         }
       }
     `}},T6=class{constructor(e){this.variableNames=[`x`,`indices`],this.customUniforms=[{name:`n`,type:`int`},{name:`firstPass`,type:`int`},{name:`k`,type:`int`}],this.outputShape=e,this.userCode=`
    void main() {
         // Takes max of indices (0, k), (1, k + 1), (2, k + 2) ...
         ivec2 coords = getOutputCoords();
         int batch = coords[0];
         int elemIdx = coords[1];

         // The output size is half of the previous size.
         // If the previous sequence is | | | | _ _ _ _  | | | |  _ _ _ _ (k=4),
         // we only need to output the indices at positions |, the indices at
         // positions _ can be thrown away, see Figure5(b) After Phase 2
         // (Merge phase) in the Bitonic Top K paper referenced above.
         // For example, the paper shows we only need to output the orange bars.
         // The output sequence should look like this | | | | | | | |.
         // Because the sequence is halved, to map the output index back
         // to the previous sequence to find the corresponding value,
         // we need to double the index. When we double the index,
         // we basically interpolate a position, so 2i looks like
         // | _ | _ | _ | _ | _ | _ | _. We move the | to the first k position
         // of each 2k positions by - elemIdx % k. E.g. for output at
         // index 4,5,6,7, we want to get the corresponding element at
         // original index 8,9,10,11, for output at index 8,9,10,11,
         // we want to get the corresponding element at original index
         // 16,17,18,19, so on and so forth.

         int i = elemIdx < k ? elemIdx : (elemIdx * 2 - imod(elemIdx, k));
         int i0 = firstPass == 1 ? i : int(getIndices(batch, i));
         int i1 = firstPass == 1 ? i + k : int(getIndices(batch, i + k));

         float x0 = getX(batch, i0);
         float x1 = i1 < n ? getX(batch, i1) : x0;

         setOutput(x0 >= x1 ? float(i0) : float(i1));
       }
     `}};Y();function E6(e,t){t!==null&&e.disposeIntermediateTensorInfo(t)}function D6(e){let t=1;for(;t<e;)t*=2;return t}function O6(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{k:a,sorted:o}=r,s=O().getNumber(`TOPK_LAST_DIM_CPU_HANDOFF_SIZE_THRESHOLD`),c=O().getNumber(`TOPK_K_CPU_HANDOFF_THRESHOLD`),l=i.shape,u=l[l.length-1];if(n.shouldExecuteOnCPU([i])||u<s||a>c){let[e,t]=MX(n.readSync(i.dataId),l,i.dtype,a,o);return[n.makeTensorInfo(e.shape,e.dtype,e.values),n.makeTensorInfo(t.shape,t.dtype,t.values)]}if(a===0)return l[l.length-1]=0,[n.makeTensorInfo(l,i.dtype,[]),n.makeTensorInfo(l,`int32`,[])];if(u===1)return[i,b0({attrs:{shape:l,dtype:`int32`,value:0},backend:n})];let d=n.texData.get(i.dataId),f=d!==null&&d.isPacked,p=f?n.unpackTensor(i):i,m=C(l)/u,h=$({inputs:{x:p},attrs:{shape:[m,u]},backend:n});f&&E6(n,p);let g=D6(a),_=D6(u),v=null,y=()=>v===null?[h,h]:[h,v],b=(e,t,r)=>{let i=y(),a=new w6(r),o=[[u],[+(v===null)],[-1/0],[e],[t]],s=v;v=n.runWebGLProgram(a,i,`int32`,o),E6(n,s)};for(let e=1;e<g;e*=2){let t=e*2;for(let n=e;n>=1;n/=2)b(t,n,[m,_])}for(let e=_;e>g;e/=2){let t=y(),r=new T6([m,e/2]),i=[[u],[+(v===null)],[g]],a=v;v=n.runWebGLProgram(r,t,`int32`,i),E6(n,a);let o=g/2,s=o*2;for(let e=o;e>=1;e/=2)b(s,e,v.shape)}let x=v;v=m$({inputs:{x:v},backend:n,attrs:{begin:0,size:[m,a]}}),E6(n,x);let S=W0({inputs:{x:h,indices:v},backend:n,attrs:{axis:1,batchDims:1}});E6(n,h);let w=l.slice(0,-1);w.push(a),x=v,v=$({inputs:{x:v},attrs:{shape:w},backend:n}),E6(n,x);let T=S;return S=$({inputs:{x:S},attrs:{shape:w},backend:n}),E6(n,T),[S,v]}var k6={kernelName:Tr,backendName:`webgl`,kernelFunc:O6},A6=class{constructor(e,t,n,r,i,a){this.variableNames=[`Image`,`Transforms`],this.outputShape=a;let o=n===`nearest`?1:2,s;switch(r){case`constant`:s=1;break;case`reflect`:s=2;break;case`wrap`:s=3;break;case`nearest`:s=4;break;default:s=1}this.userCode=`
            float mapCoord(float outCoord, float len) {
              float inCoord = outCoord;
              if(${s} == 2) {
                if (inCoord < 0.0) {
                  if (len <= 1.0) {
                    inCoord = 0.0;
                  } else {
                    float sz2 = 2.0 * len;
                    if (inCoord < sz2) {
                      inCoord = sz2 * float(int(float(-inCoord / sz2))) +
                      inCoord;
                    }
                    inCoord = inCoord < -len ? inCoord + sz2 : -inCoord - 1.0;
                  }
                } else if (inCoord > len - 1.0) {
                  if (len <= 1.0) {
                    inCoord = 0.0;
                  } else {
                    float sz2 = 2.0 * len;
                    inCoord -= sz2 * float(int(float(inCoord / sz2)));
                    if (inCoord >= len) {
                      inCoord = sz2 - inCoord - 1.0;
                    }
                  }
                }
                return clamp(inCoord, 0.0, len - 1.0);
              } else if (${s} == 3) {
                if (inCoord < 0.0) {
                  if (len <= 1.0) {
                    inCoord = 0.0;
                  } else {
                    float sz = len - 1.0;
                    inCoord += len * (float(int(float(-inCoord / sz))) + 1.0);
                  }
                } else if (inCoord > len - 1.0) {
                  if (len <= 1.0) {
                    inCoord = 0.0;
                  } else {
                    float sz = len - 1.0;
                    inCoord -= len * float(int(float(inCoord / sz)));
                  }
                }
                return clamp(inCoord, 0.0, len - 1.0);
              } else if (${s} == 4) {
                return clamp(outCoord, 0.0, len - 1.0);
              } else {
                return outCoord;
              }
            }

            float readWithFillValue(int batch, int coordY, int coordX,
              int channel) {
              float outputValue;
              if (0 <= coordY && coordY < ${e} && 0 <= coordX && coordX < ${t}) {
                  outputValue = getImage(batch, coordY, coordX, channel);
              } else {
                outputValue = float(${i});
              }
              return outputValue;
            }

            void main() {
              ivec4 coords = getOutputCoords();
              float outputValue;
              int batch = coords[0];
              int x = coords[2];
              int y = coords[1];
              int channel = coords[3];
              float xf = float(x);
              float yf = float(y);
              float a1 = getTransforms(batch, 0);
              float a2 = getTransforms(batch, 1);
              float a3 = getTransforms(batch, 2);
              float b1 = getTransforms(batch, 3);
              float b2 = getTransforms(batch, 4);
              float b3 = getTransforms(batch, 5);
              float c1 = getTransforms(batch, 6);
              float c2 = getTransforms(batch, 7);
              float projection = c1 * xf + c2 * yf + 1.0;
              if (projection == 0.0) {
                outputValue = float(${i});
              } else {
                float inX = (a1 * xf + a2 * yf + a3) / projection;
                float inY = (b1 * xf + b2 * yf + b3) / projection;
                float mapX = mapCoord(inX, float(${t}));
                float mapY = mapCoord(inY, float(${e}));

                if (${o} == 1) {
                  int coordY = int(round(mapY));
                  int coordX = int(round(mapX));
                  outputValue = readWithFillValue(batch, coordY, coordX,
                    channel);
                } else {
                  float yFloor = floor(mapY);
                  float xFloor = floor(mapX);
                  float yCeil = yFloor + 1.0;
                  float xCeil = xFloor + 1.0;
                  float valueYFloor = (xCeil - mapX) *
                  readWithFillValue(batch, int(yFloor), int(xFloor), channel) +
                  (mapX - xFloor) *
                  readWithFillValue(batch, int(yFloor), int(xCeil), channel);
                  float valueYCeil = (xCeil - mapX) *
                  readWithFillValue(batch, int(yCeil), int(xFloor), channel) +
                  (mapX - xFloor) *
                  readWithFillValue(batch, int(yCeil), int(xCeil), channel);
                  outputValue = (yCeil - mapY) * valueYFloor +
                  (mapY - yFloor) * valueYCeil;
                }
              }
              setOutput(outputValue);
            }
        `}};Y();function j6(e){let{inputs:t,backend:n,attrs:r}=e,{image:i,transforms:a}=t,{interpolation:o,fillMode:s,fillValue:c,outputShape:l}=r,[u,d,f,p]=i.shape,[m,h]=l??[d,f],g=new A6(d,f,o,s,c,[u,m,h,p]);return n.runWebGLProgram(g,[i,a],`float32`)}var M6={kernelName:Er,backendName:`webgl`,kernelFunc:j6};Y();function N6(e){let{inputs:t,attrs:n,backend:r}=e,{axis:i}=n,{x:a}=t;rJ(a,`unique`),console.warn(`WARNING: `,`UI might be locked temporarily as data is being downloaded`);let{outputValues:o,outputShape:s,indices:c}=PX(r.readSync(a.dataId),i,a.shape,a.dtype);return[r.makeTensorInfo(s,a.dtype,o),r.makeTensorInfo([c.length],`int32`,c)]}var P6={kernelName:Or,backendName:`webgl`,kernelFunc:N6};Y();function F6(e){let{inputs:t,backend:n,attrs:r}=e,{value:i}=t,{axis:a}=r;a<0&&(a+=i.shape.length);let o=i,s=o.shape.length,c=i.shape[a],l=Array(s-1),u=0;for(let e=0;e<s;e++)e!==a&&(l[u++]=o.shape[e]);let d=[],f=Array(s).fill(0),p=o.shape.slice();p[a]=1;let m=Array(c);for(let e=0;e<m.length;e++){f[a]=e;let t=m$({inputs:{x:o},backend:n,attrs:{begin:f,size:p}}),r=$({inputs:{x:t},backend:n,attrs:{shape:l}});m[e]=r,d.push(t)}return d.forEach(e=>n.disposeIntermediateTensorInfo(e)),m}var I6={kernelName:kr,backendName:`webgl`,kernelFunc:F6},L6=class{constructor(e,t){this.variableNames=[`x`,`segmentIds`];let n=e.windowSize,r=e.batchSize,i=e.inSize,a=e.numSegments,o=a*Math.ceil(i/n);this.outputShape=[r,o];let s=Math.floor(n/4)*4,c=n%4,l=`
        sumValue += dot(values, segFilter);
    `,u=``;i%n>0&&(u=`
        if (inIdx < 0 || inIdx >= ${i}) {
          return initializationValue;
        }
      `);let d=``;i%n>0&&(d=`
        if (inIdx < 0 || inIdx >= ${i}) {
          return -1.0;
        }
      `),this.userCode=`
      const float initializationValue = 0.0;

      float getValue(int batch, int inIdx) {
        ${u}
        return getX(batch, inIdx);
      }

      float getSegmentIdAtIndex(int inIdx) {
        ${d}
        return getSegmentIds(inIdx);
      }

      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = int(floor(float(outIdx) / float(
          ${a})) * float(${n}));
        int currentSeg = int(mod(float(outIdx), float(${a})));

        float sumValue = 0.0;

        for (int i = 0; i < ${s}; i += 4) {
          int inIdx = inOffset + i;
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            getValue(batch, inIdx + 3)
          );

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 2)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 3)) == currentSeg ? 1 : 0
          );

          ${l}
        }

        int inIdx = inOffset + ${s};
        if (${c===1}) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            initializationValue,
            initializationValue,
            initializationValue
          );

          int inIdxSeg = int(getSegmentIdAtIndex(inIdx));

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            0,
            0,
            0
          );

          ${l}
        } else if (${c===2}) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            initializationValue,
            initializationValue
          );

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,
              0,
              0
          );

          ${l}
        } else if (${c===3}) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            initializationValue
          );

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 2)) == currentSeg ? 1 : 0,
            0
          );

          ${l}
        }
        setOutput(sumValue);
      }
    `}};Y();function R6(e){let{inputs:t,backend:n,attrs:r}=e,{x:i,segmentIds:a}=t,{numSegments:o}=r,s=i.shape.length,c=[],l=0,u=tm([l],s),d=i;u!=null&&(d=aQ({inputs:{x:i},backend:n,attrs:{perm:u}}),c.push(d),l=rm(1,s)[0]);let f=uE(d.shape,l,o),p=C([d.shape[l]]),m=$({inputs:{x:d},backend:n,attrs:{shape:[-1,p]}});c.push(m);let h=$i(i.dtype),g=(e,t,r,i,a)=>{let o=e.shape[0],s=e.shape[1],l=lE(s,a),u=new L6({windowSize:l,inSize:s,batchSize:o,numSegments:a},t),d=n.compileAndRun(u,[e,r],i);if(c.push(d),d.shape[1]===a)return d;let f=V4({backend:n,attrs:{start:0,stop:a,step:1,dtype:`float32`}}),p=S6({inputs:{x:f},backend:n,attrs:{reps:[s/l]}});return c.push(f),c.push(p),g(d,t,p,i,a)},_=$({inputs:{x:g(m,`unsortedSegmentSum`,a,h,o)},backend:n,attrs:{shape:f}}),v=_;if(u!=null){c.push(_);let e=nm(u);v=aQ({inputs:{x:v},backend:n,attrs:{perm:e}})}return c.forEach(e=>n.disposeIntermediateTensorInfo(e)),v}var z6={kernelName:Ar,backendName:`webgl`,kernelFunc:R6};Y();var B6=[lQ,fQ,mQ,gQ,vQ,SQ,wQ,EQ,NQ,FQ,LQ,zQ,VQ,UQ,GQ,YQ,ZQ,t$,r$,a$,c$,g$,v$,b$,O$,j$,F$,DZ,z$,J$,r1,l1,d1,p1,h1,_1,v1,b1,S1,k1,j1,N1,I1,B1,W1,K1,Y1,Q1,e0,t0,i0,o0,s0,l0,d0,m0,v0,x0,C0,E0,O0,j0,I0,R0,V0,G0,q0,Y0,TZ,Z0,W$,$0,t2,r2,jZ,a2,s2,l2,u2,f2,m2,g2,v2,x2,C2,E2,O2,A2,M2,I2,R2,B2,H2,W2,K2,Y2,X2,o4,GZ,u4,p4,g4,y4,S$,x4,T4,D4,j4,M4,FZ,P4,I4,R4,B4,H4,w$,$2,W4,K4,J4,qZ,Q4,t3,a3,c3,f3,m3,g3,v3,x3,w3,D3,k3,j3,N3,P3,I3,h$,i4,R3,z3,V3,U3,G3,q3,Y3,Z3,e6,n6,a6,s6,u6,f6,m6,g6,n4,iQ,_6,y6,C6,k6,M6,oQ,P6,I6,z6,C4];for(let e of B6)Gr(e);Y(),Y();var V6=r({loadPresetModel:()=>H6,predictScores:()=>U6,trainTemporaryModel:()=>W6});function H6(){return MF(`/TensorflowSkyPredict.github.io/skypre-model.json`,{async fetchFunc(...[e,t]){let n=await fetch(e,t);if(!n.ok)throw Error(`Model asset returned HTTP ${n.status}: ${e}`);return n}})}async function U6(e,t){let n=B(()=>{let n=e.predict(_b(t));if(Array.isArray(n))throw Error(`Expected a single model output`);return n});try{return await n.data()}finally{n.dispose()}}async function W6({weights:n,isActive:r,onEpoch:i,showVisor:a}){let[{default:o},s]=await Promise.all([e(()=>import(`./history-DceRz-ut.js`),[]),a&&e(()=>import(`./dist-Dt5jwDwT.js`).then(e=>t(e.default,1)),__vite__mapDeps([0,1,2,3,4,5]))]);if(!r())return;let c;if(s){let e=s.visor();a?.(e),c=s.show.fitCallbacks(e.surface({name:`训练效果`}),[`loss`],{callbacks:[`onEpochEnd`]})}let l=IF({layers:[iR({units:1,inputShape:[8],activation:`sigmoid`})]}),u=Ww.adam(.1),d;try{l.compile({loss:Sw.logLoss,optimizer:u}),d=B(()=>[_b(o.map(({f1:e,f2:t,f3:r,f4:i,f5:a,f6:o,f7:s,f8:c})=>[e,t,r,i,a,o,s,c].map((e,t)=>e*n[t]))),hb(o.map(({target:e})=>e))]);let[e,t]=d;return await l.fit(e,t,{batchSize:50,epochs:20,callbacks:{onBatchEnd(){r()||(l.stopTraining=!0)},async onEpochEnd(e,t){r()&&t&&(i(e+1,t.loss),await c?.onEpochEnd?.(e,t))}}}),l}catch(e){throw l.dispose(),e}finally{d&&fc(d),u.dispose()}}export{Y as a,bE as i,H6 as loadPresetModel,ZO as n,U6 as predictScores,XO as r,V6 as t,W6 as trainTemporaryModel};