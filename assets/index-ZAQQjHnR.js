function Xg(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function $d(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Hd={exports:{}},ys={},Vd={exports:{}},M={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ai=Symbol.for("react.element"),qg=Symbol.for("react.portal"),Jg=Symbol.for("react.fragment"),Zg=Symbol.for("react.strict_mode"),ev=Symbol.for("react.profiler"),tv=Symbol.for("react.provider"),nv=Symbol.for("react.context"),rv=Symbol.for("react.forward_ref"),iv=Symbol.for("react.suspense"),ov=Symbol.for("react.memo"),sv=Symbol.for("react.lazy"),wc=Symbol.iterator;function av(e){return e===null||typeof e!="object"?null:(e=wc&&e[wc]||e["@@iterator"],typeof e=="function"?e:null)}var Wd={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Kd=Object.assign,Gd={};function Sr(e,t,n){this.props=e,this.context=t,this.refs=Gd,this.updater=n||Wd}Sr.prototype.isReactComponent={};Sr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Sr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Yd(){}Yd.prototype=Sr.prototype;function tu(e,t,n){this.props=e,this.context=t,this.refs=Gd,this.updater=n||Wd}var nu=tu.prototype=new Yd;nu.constructor=tu;Kd(nu,Sr.prototype);nu.isPureReactComponent=!0;var _c=Array.isArray,Qd=Object.prototype.hasOwnProperty,ru={current:null},Xd={key:!0,ref:!0,__self:!0,__source:!0};function qd(e,t,n){var r,i={},o=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(o=""+t.key),t)Qd.call(t,r)&&!Xd.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Ai,type:e,key:o,ref:s,props:i,_owner:ru.current}}function lv(e,t){return{$$typeof:Ai,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function iu(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ai}function uv(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Ec=/\/+/g;function Ys(e,t){return typeof e=="object"&&e!==null&&e.key!=null?uv(""+e.key):t.toString(36)}function po(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case Ai:case qg:s=!0}}if(s)return s=e,i=i(s),e=r===""?"."+Ys(s,0):r,_c(i)?(n="",e!=null&&(n=e.replace(Ec,"$&/")+"/"),po(i,t,n,"",function(u){return u})):i!=null&&(iu(i)&&(i=lv(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(Ec,"$&/")+"/")+e)),t.push(i)),1;if(s=0,r=r===""?".":r+":",_c(e))for(var a=0;a<e.length;a++){o=e[a];var l=r+Ys(o,a);s+=po(o,t,n,l,i)}else if(l=av(e),typeof l=="function")for(e=l.call(e),a=0;!(o=e.next()).done;)o=o.value,l=r+Ys(o,a++),s+=po(o,t,n,l,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function Yi(e,t,n){if(e==null)return e;var r=[],i=0;return po(e,r,"","",function(o){return t.call(n,o,i++)}),r}function cv(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ge={current:null},mo={transition:null},fv={ReactCurrentDispatcher:ge,ReactCurrentBatchConfig:mo,ReactCurrentOwner:ru};function Jd(){throw Error("act(...) is not supported in production builds of React.")}M.Children={map:Yi,forEach:function(e,t,n){Yi(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Yi(e,function(){t++}),t},toArray:function(e){return Yi(e,function(t){return t})||[]},only:function(e){if(!iu(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};M.Component=Sr;M.Fragment=Jg;M.Profiler=ev;M.PureComponent=tu;M.StrictMode=Zg;M.Suspense=iv;M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=fv;M.act=Jd;M.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Kd({},e.props),i=e.key,o=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,s=ru.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)Qd.call(t,l)&&!Xd.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Ai,type:e.type,key:i,ref:o,props:r,_owner:s}};M.createContext=function(e){return e={$$typeof:nv,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:tv,_context:e},e.Consumer=e};M.createElement=qd;M.createFactory=function(e){var t=qd.bind(null,e);return t.type=e,t};M.createRef=function(){return{current:null}};M.forwardRef=function(e){return{$$typeof:rv,render:e}};M.isValidElement=iu;M.lazy=function(e){return{$$typeof:sv,_payload:{_status:-1,_result:e},_init:cv}};M.memo=function(e,t){return{$$typeof:ov,type:e,compare:t===void 0?null:t}};M.startTransition=function(e){var t=mo.transition;mo.transition={};try{e()}finally{mo.transition=t}};M.unstable_act=Jd;M.useCallback=function(e,t){return ge.current.useCallback(e,t)};M.useContext=function(e){return ge.current.useContext(e)};M.useDebugValue=function(){};M.useDeferredValue=function(e){return ge.current.useDeferredValue(e)};M.useEffect=function(e,t){return ge.current.useEffect(e,t)};M.useId=function(){return ge.current.useId()};M.useImperativeHandle=function(e,t,n){return ge.current.useImperativeHandle(e,t,n)};M.useInsertionEffect=function(e,t){return ge.current.useInsertionEffect(e,t)};M.useLayoutEffect=function(e,t){return ge.current.useLayoutEffect(e,t)};M.useMemo=function(e,t){return ge.current.useMemo(e,t)};M.useReducer=function(e,t,n){return ge.current.useReducer(e,t,n)};M.useRef=function(e){return ge.current.useRef(e)};M.useState=function(e){return ge.current.useState(e)};M.useSyncExternalStore=function(e,t,n){return ge.current.useSyncExternalStore(e,t,n)};M.useTransition=function(){return ge.current.useTransition()};M.version="18.3.1";Vd.exports=M;var x=Vd.exports;const Ze=$d(x),dv=Xg({__proto__:null,default:Ze},[x]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hv=x,pv=Symbol.for("react.element"),mv=Symbol.for("react.fragment"),gv=Object.prototype.hasOwnProperty,vv=hv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,yv={key:!0,ref:!0,__self:!0,__source:!0};function Zd(e,t,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)gv.call(t,r)&&!yv.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:pv,type:e,key:o,ref:s,props:i,_owner:vv.current}}ys.Fragment=mv;ys.jsx=Zd;ys.jsxs=Zd;Hd.exports=ys;var g=Hd.exports,eh={exports:{}},Oe={},th={exports:{}},nh={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(T,R){var L=T.length;T.push(R);e:for(;0<L;){var J=L-1>>>1,re=T[J];if(0<i(re,R))T[J]=R,T[L]=re,L=J;else break e}}function n(T){return T.length===0?null:T[0]}function r(T){if(T.length===0)return null;var R=T[0],L=T.pop();if(L!==R){T[0]=L;e:for(var J=0,re=T.length,Ki=re>>>1;J<Ki;){var fn=2*(J+1)-1,Gs=T[fn],dn=fn+1,Gi=T[dn];if(0>i(Gs,L))dn<re&&0>i(Gi,Gs)?(T[J]=Gi,T[dn]=L,J=dn):(T[J]=Gs,T[fn]=L,J=fn);else if(dn<re&&0>i(Gi,L))T[J]=Gi,T[dn]=L,J=dn;else break e}}return R}function i(T,R){var L=T.sortIndex-R.sortIndex;return L!==0?L:T.id-R.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();e.unstable_now=function(){return s.now()-a}}var l=[],u=[],c=1,d=null,h=3,v=!1,w=!1,_=!1,E=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(T){for(var R=n(u);R!==null;){if(R.callback===null)r(u);else if(R.startTime<=T)r(u),R.sortIndex=R.expirationTime,t(l,R);else break;R=n(u)}}function y(T){if(_=!1,m(T),!w)if(n(l)!==null)w=!0,Ws(k);else{var R=n(u);R!==null&&Ks(y,R.startTime-T)}}function k(T,R){w=!1,_&&(_=!1,p(O),O=-1),v=!0;var L=h;try{for(m(R),d=n(l);d!==null&&(!(d.expirationTime>R)||T&&!ke());){var J=d.callback;if(typeof J=="function"){d.callback=null,h=d.priorityLevel;var re=J(d.expirationTime<=R);R=e.unstable_now(),typeof re=="function"?d.callback=re:d===n(l)&&r(l),m(R)}else r(l);d=n(l)}if(d!==null)var Ki=!0;else{var fn=n(u);fn!==null&&Ks(y,fn.startTime-R),Ki=!1}return Ki}finally{d=null,h=L,v=!1}}var I=!1,C=null,O=-1,F=5,b=-1;function ke(){return!(e.unstable_now()-b<F)}function Nr(){if(C!==null){var T=e.unstable_now();b=T;var R=!0;try{R=C(!0,T)}finally{R?Or():(I=!1,C=null)}}else I=!1}var Or;if(typeof f=="function")Or=function(){f(Nr)};else if(typeof MessageChannel<"u"){var yc=new MessageChannel,Qg=yc.port2;yc.port1.onmessage=Nr,Or=function(){Qg.postMessage(null)}}else Or=function(){E(Nr,0)};function Ws(T){C=T,I||(I=!0,Or())}function Ks(T,R){O=E(function(){T(e.unstable_now())},R)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(T){T.callback=null},e.unstable_continueExecution=function(){w||v||(w=!0,Ws(k))},e.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):F=0<T?Math.floor(1e3/T):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(T){switch(h){case 1:case 2:case 3:var R=3;break;default:R=h}var L=h;h=R;try{return T()}finally{h=L}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(T,R){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var L=h;h=T;try{return R()}finally{h=L}},e.unstable_scheduleCallback=function(T,R,L){var J=e.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?J+L:J):L=J,T){case 1:var re=-1;break;case 2:re=250;break;case 5:re=1073741823;break;case 4:re=1e4;break;default:re=5e3}return re=L+re,T={id:c++,callback:R,priorityLevel:T,startTime:L,expirationTime:re,sortIndex:-1},L>J?(T.sortIndex=L,t(u,T),n(l)===null&&T===n(u)&&(_?(p(O),O=-1):_=!0,Ks(y,L-J))):(T.sortIndex=re,t(l,T),w||v||(w=!0,Ws(k))),T},e.unstable_shouldYield=ke,e.unstable_wrapCallback=function(T){var R=h;return function(){var L=h;h=R;try{return T.apply(this,arguments)}finally{h=L}}}})(nh);th.exports=nh;var wv=th.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _v=x,Ne=wv;function S(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var rh=new Set,si={};function bn(e,t){cr(e,t),cr(e+"Capture",t)}function cr(e,t){for(si[e]=t,e=0;e<t.length;e++)rh.add(t[e])}var pt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Da=Object.prototype.hasOwnProperty,Ev=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Sc={},kc={};function Sv(e){return Da.call(kc,e)?!0:Da.call(Sc,e)?!1:Ev.test(e)?kc[e]=!0:(Sc[e]=!0,!1)}function kv(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function xv(e,t,n,r){if(t===null||typeof t>"u"||kv(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ve(e,t,n,r,i,o,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=s}var le={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){le[e]=new ve(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];le[t]=new ve(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){le[e]=new ve(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){le[e]=new ve(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){le[e]=new ve(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){le[e]=new ve(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){le[e]=new ve(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){le[e]=new ve(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){le[e]=new ve(e,5,!1,e.toLowerCase(),null,!1,!1)});var ou=/[\-:]([a-z])/g;function su(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ou,su);le[t]=new ve(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ou,su);le[t]=new ve(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ou,su);le[t]=new ve(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){le[e]=new ve(e,1,!1,e.toLowerCase(),null,!1,!1)});le.xlinkHref=new ve("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){le[e]=new ve(e,1,!1,e.toLowerCase(),null,!0,!0)});function au(e,t,n,r){var i=le.hasOwnProperty(t)?le[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(xv(t,n,i,r)&&(n=null),r||i===null?Sv(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var St=_v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Qi=Symbol.for("react.element"),Un=Symbol.for("react.portal"),Fn=Symbol.for("react.fragment"),lu=Symbol.for("react.strict_mode"),Ma=Symbol.for("react.profiler"),ih=Symbol.for("react.provider"),oh=Symbol.for("react.context"),uu=Symbol.for("react.forward_ref"),ja=Symbol.for("react.suspense"),Ua=Symbol.for("react.suspense_list"),cu=Symbol.for("react.memo"),Tt=Symbol.for("react.lazy"),sh=Symbol.for("react.offscreen"),xc=Symbol.iterator;function Ar(e){return e===null||typeof e!="object"?null:(e=xc&&e[xc]||e["@@iterator"],typeof e=="function"?e:null)}var Q=Object.assign,Qs;function Fr(e){if(Qs===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Qs=t&&t[1]||""}return`
`+Qs+e}var Xs=!1;function qs(e,t){if(!e||Xs)return"";Xs=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,a=o.length-1;1<=s&&0<=a&&i[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(i[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||i[s]!==o[a]){var l=`
`+i[s].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=s&&0<=a);break}}}finally{Xs=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Fr(e):""}function Iv(e){switch(e.tag){case 5:return Fr(e.type);case 16:return Fr("Lazy");case 13:return Fr("Suspense");case 19:return Fr("SuspenseList");case 0:case 2:case 15:return e=qs(e.type,!1),e;case 11:return e=qs(e.type.render,!1),e;case 1:return e=qs(e.type,!0),e;default:return""}}function Fa(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Fn:return"Fragment";case Un:return"Portal";case Ma:return"Profiler";case lu:return"StrictMode";case ja:return"Suspense";case Ua:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case oh:return(e.displayName||"Context")+".Consumer";case ih:return(e._context.displayName||"Context")+".Provider";case uu:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case cu:return t=e.displayName||null,t!==null?t:Fa(e.type)||"Memo";case Tt:t=e._payload,e=e._init;try{return Fa(e(t))}catch{}}return null}function Cv(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Fa(t);case 8:return t===lu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Jt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ah(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Pv(e){var t=ah(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Xi(e){e._valueTracker||(e._valueTracker=Pv(e))}function lh(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=ah(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function bo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function za(e,t){var n=t.checked;return Q({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Ic(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Jt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function uh(e,t){t=t.checked,t!=null&&au(e,"checked",t,!1)}function Ba(e,t){uh(e,t);var n=Jt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?$a(e,t.type,n):t.hasOwnProperty("defaultValue")&&$a(e,t.type,Jt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Cc(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function $a(e,t,n){(t!=="number"||bo(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var zr=Array.isArray;function Zn(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Jt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Ha(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(S(91));return Q({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Pc(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(S(92));if(zr(n)){if(1<n.length)throw Error(S(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Jt(n)}}function ch(e,t){var n=Jt(t.value),r=Jt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Tc(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function fh(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Va(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?fh(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var qi,dh=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(qi=qi||document.createElement("div"),qi.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=qi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function ai(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Gr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Tv=["Webkit","ms","Moz","O"];Object.keys(Gr).forEach(function(e){Tv.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Gr[t]=Gr[e]})});function hh(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Gr.hasOwnProperty(e)&&Gr[e]?(""+t).trim():t+"px"}function ph(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=hh(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Nv=Q({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Wa(e,t){if(t){if(Nv[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(S(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(S(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(S(61))}if(t.style!=null&&typeof t.style!="object")throw Error(S(62))}}function Ka(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ga=null;function fu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ya=null,er=null,tr=null;function Nc(e){if(e=Li(e)){if(typeof Ya!="function")throw Error(S(280));var t=e.stateNode;t&&(t=ks(t),Ya(e.stateNode,e.type,t))}}function mh(e){er?tr?tr.push(e):tr=[e]:er=e}function gh(){if(er){var e=er,t=tr;if(tr=er=null,Nc(e),t)for(e=0;e<t.length;e++)Nc(t[e])}}function vh(e,t){return e(t)}function yh(){}var Js=!1;function wh(e,t,n){if(Js)return e(t,n);Js=!0;try{return vh(e,t,n)}finally{Js=!1,(er!==null||tr!==null)&&(yh(),gh())}}function li(e,t){var n=e.stateNode;if(n===null)return null;var r=ks(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(S(231,t,typeof n));return n}var Qa=!1;if(pt)try{var br={};Object.defineProperty(br,"passive",{get:function(){Qa=!0}}),window.addEventListener("test",br,br),window.removeEventListener("test",br,br)}catch{Qa=!1}function Ov(e,t,n,r,i,o,s,a,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var Yr=!1,Ro=null,Lo=!1,Xa=null,Av={onError:function(e){Yr=!0,Ro=e}};function bv(e,t,n,r,i,o,s,a,l){Yr=!1,Ro=null,Ov.apply(Av,arguments)}function Rv(e,t,n,r,i,o,s,a,l){if(bv.apply(this,arguments),Yr){if(Yr){var u=Ro;Yr=!1,Ro=null}else throw Error(S(198));Lo||(Lo=!0,Xa=u)}}function Rn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function _h(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Oc(e){if(Rn(e)!==e)throw Error(S(188))}function Lv(e){var t=e.alternate;if(!t){if(t=Rn(e),t===null)throw Error(S(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Oc(i),e;if(o===r)return Oc(i),t;o=o.sibling}throw Error(S(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s)throw Error(S(189))}}if(n.alternate!==r)throw Error(S(190))}if(n.tag!==3)throw Error(S(188));return n.stateNode.current===n?e:t}function Eh(e){return e=Lv(e),e!==null?Sh(e):null}function Sh(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Sh(e);if(t!==null)return t;e=e.sibling}return null}var kh=Ne.unstable_scheduleCallback,Ac=Ne.unstable_cancelCallback,Dv=Ne.unstable_shouldYield,Mv=Ne.unstable_requestPaint,Z=Ne.unstable_now,jv=Ne.unstable_getCurrentPriorityLevel,du=Ne.unstable_ImmediatePriority,xh=Ne.unstable_UserBlockingPriority,Do=Ne.unstable_NormalPriority,Uv=Ne.unstable_LowPriority,Ih=Ne.unstable_IdlePriority,ws=null,et=null;function Fv(e){if(et&&typeof et.onCommitFiberRoot=="function")try{et.onCommitFiberRoot(ws,e,void 0,(e.current.flags&128)===128)}catch{}}var He=Math.clz32?Math.clz32:$v,zv=Math.log,Bv=Math.LN2;function $v(e){return e>>>=0,e===0?32:31-(zv(e)/Bv|0)|0}var Ji=64,Zi=4194304;function Br(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Mo(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,s=n&268435455;if(s!==0){var a=s&~i;a!==0?r=Br(a):(o&=s,o!==0&&(r=Br(o)))}else s=n&~i,s!==0?r=Br(s):o!==0&&(r=Br(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-He(t),i=1<<n,r|=e[n],t&=~i;return r}function Hv(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Vv(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var s=31-He(o),a=1<<s,l=i[s];l===-1?(!(a&n)||a&r)&&(i[s]=Hv(a,t)):l<=t&&(e.expiredLanes|=a),o&=~a}}function qa(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Ch(){var e=Ji;return Ji<<=1,!(Ji&4194240)&&(Ji=64),e}function Zs(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function bi(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-He(t),e[t]=n}function Wv(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-He(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function hu(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-He(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var U=0;function Ph(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Th,pu,Nh,Oh,Ah,Ja=!1,eo=[],zt=null,Bt=null,$t=null,ui=new Map,ci=new Map,Ot=[],Kv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function bc(e,t){switch(e){case"focusin":case"focusout":zt=null;break;case"dragenter":case"dragleave":Bt=null;break;case"mouseover":case"mouseout":$t=null;break;case"pointerover":case"pointerout":ui.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ci.delete(t.pointerId)}}function Rr(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Li(t),t!==null&&pu(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Gv(e,t,n,r,i){switch(t){case"focusin":return zt=Rr(zt,e,t,n,r,i),!0;case"dragenter":return Bt=Rr(Bt,e,t,n,r,i),!0;case"mouseover":return $t=Rr($t,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return ui.set(o,Rr(ui.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,ci.set(o,Rr(ci.get(o)||null,e,t,n,r,i)),!0}return!1}function bh(e){var t=vn(e.target);if(t!==null){var n=Rn(t);if(n!==null){if(t=n.tag,t===13){if(t=_h(n),t!==null){e.blockedOn=t,Ah(e.priority,function(){Nh(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function go(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Za(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Ga=r,n.target.dispatchEvent(r),Ga=null}else return t=Li(n),t!==null&&pu(t),e.blockedOn=n,!1;t.shift()}return!0}function Rc(e,t,n){go(e)&&n.delete(t)}function Yv(){Ja=!1,zt!==null&&go(zt)&&(zt=null),Bt!==null&&go(Bt)&&(Bt=null),$t!==null&&go($t)&&($t=null),ui.forEach(Rc),ci.forEach(Rc)}function Lr(e,t){e.blockedOn===t&&(e.blockedOn=null,Ja||(Ja=!0,Ne.unstable_scheduleCallback(Ne.unstable_NormalPriority,Yv)))}function fi(e){function t(i){return Lr(i,e)}if(0<eo.length){Lr(eo[0],e);for(var n=1;n<eo.length;n++){var r=eo[n];r.blockedOn===e&&(r.blockedOn=null)}}for(zt!==null&&Lr(zt,e),Bt!==null&&Lr(Bt,e),$t!==null&&Lr($t,e),ui.forEach(t),ci.forEach(t),n=0;n<Ot.length;n++)r=Ot[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Ot.length&&(n=Ot[0],n.blockedOn===null);)bh(n),n.blockedOn===null&&Ot.shift()}var nr=St.ReactCurrentBatchConfig,jo=!0;function Qv(e,t,n,r){var i=U,o=nr.transition;nr.transition=null;try{U=1,mu(e,t,n,r)}finally{U=i,nr.transition=o}}function Xv(e,t,n,r){var i=U,o=nr.transition;nr.transition=null;try{U=4,mu(e,t,n,r)}finally{U=i,nr.transition=o}}function mu(e,t,n,r){if(jo){var i=Za(e,t,n,r);if(i===null)ua(e,t,r,Uo,n),bc(e,r);else if(Gv(i,e,t,n,r))r.stopPropagation();else if(bc(e,r),t&4&&-1<Kv.indexOf(e)){for(;i!==null;){var o=Li(i);if(o!==null&&Th(o),o=Za(e,t,n,r),o===null&&ua(e,t,r,Uo,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else ua(e,t,r,null,n)}}var Uo=null;function Za(e,t,n,r){if(Uo=null,e=fu(r),e=vn(e),e!==null)if(t=Rn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=_h(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Uo=e,null}function Rh(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(jv()){case du:return 1;case xh:return 4;case Do:case Uv:return 16;case Ih:return 536870912;default:return 16}default:return 16}}var Mt=null,gu=null,vo=null;function Lh(){if(vo)return vo;var e,t=gu,n=t.length,r,i="value"in Mt?Mt.value:Mt.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===i[o-r];r++);return vo=i.slice(e,1<r?1-r:void 0)}function yo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function to(){return!0}function Lc(){return!1}function Ae(e){function t(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?to:Lc,this.isPropagationStopped=Lc,this}return Q(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=to)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=to)},persist:function(){},isPersistent:to}),t}var kr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},vu=Ae(kr),Ri=Q({},kr,{view:0,detail:0}),qv=Ae(Ri),ea,ta,Dr,_s=Q({},Ri,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:yu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Dr&&(Dr&&e.type==="mousemove"?(ea=e.screenX-Dr.screenX,ta=e.screenY-Dr.screenY):ta=ea=0,Dr=e),ea)},movementY:function(e){return"movementY"in e?e.movementY:ta}}),Dc=Ae(_s),Jv=Q({},_s,{dataTransfer:0}),Zv=Ae(Jv),e0=Q({},Ri,{relatedTarget:0}),na=Ae(e0),t0=Q({},kr,{animationName:0,elapsedTime:0,pseudoElement:0}),n0=Ae(t0),r0=Q({},kr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),i0=Ae(r0),o0=Q({},kr,{data:0}),Mc=Ae(o0),s0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},a0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},l0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function u0(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=l0[e])?!!t[e]:!1}function yu(){return u0}var c0=Q({},Ri,{key:function(e){if(e.key){var t=s0[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=yo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?a0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:yu,charCode:function(e){return e.type==="keypress"?yo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?yo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),f0=Ae(c0),d0=Q({},_s,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),jc=Ae(d0),h0=Q({},Ri,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:yu}),p0=Ae(h0),m0=Q({},kr,{propertyName:0,elapsedTime:0,pseudoElement:0}),g0=Ae(m0),v0=Q({},_s,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),y0=Ae(v0),w0=[9,13,27,32],wu=pt&&"CompositionEvent"in window,Qr=null;pt&&"documentMode"in document&&(Qr=document.documentMode);var _0=pt&&"TextEvent"in window&&!Qr,Dh=pt&&(!wu||Qr&&8<Qr&&11>=Qr),Uc=" ",Fc=!1;function Mh(e,t){switch(e){case"keyup":return w0.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function jh(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var zn=!1;function E0(e,t){switch(e){case"compositionend":return jh(t);case"keypress":return t.which!==32?null:(Fc=!0,Uc);case"textInput":return e=t.data,e===Uc&&Fc?null:e;default:return null}}function S0(e,t){if(zn)return e==="compositionend"||!wu&&Mh(e,t)?(e=Lh(),vo=gu=Mt=null,zn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Dh&&t.locale!=="ko"?null:t.data;default:return null}}var k0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function zc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!k0[e.type]:t==="textarea"}function Uh(e,t,n,r){mh(r),t=Fo(t,"onChange"),0<t.length&&(n=new vu("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Xr=null,di=null;function x0(e){Qh(e,0)}function Es(e){var t=Hn(e);if(lh(t))return e}function I0(e,t){if(e==="change")return t}var Fh=!1;if(pt){var ra;if(pt){var ia="oninput"in document;if(!ia){var Bc=document.createElement("div");Bc.setAttribute("oninput","return;"),ia=typeof Bc.oninput=="function"}ra=ia}else ra=!1;Fh=ra&&(!document.documentMode||9<document.documentMode)}function $c(){Xr&&(Xr.detachEvent("onpropertychange",zh),di=Xr=null)}function zh(e){if(e.propertyName==="value"&&Es(di)){var t=[];Uh(t,di,e,fu(e)),wh(x0,t)}}function C0(e,t,n){e==="focusin"?($c(),Xr=t,di=n,Xr.attachEvent("onpropertychange",zh)):e==="focusout"&&$c()}function P0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Es(di)}function T0(e,t){if(e==="click")return Es(t)}function N0(e,t){if(e==="input"||e==="change")return Es(t)}function O0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var We=typeof Object.is=="function"?Object.is:O0;function hi(e,t){if(We(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Da.call(t,i)||!We(e[i],t[i]))return!1}return!0}function Hc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Vc(e,t){var n=Hc(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Hc(n)}}function Bh(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Bh(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function $h(){for(var e=window,t=bo();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=bo(e.document)}return t}function _u(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function A0(e){var t=$h(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Bh(n.ownerDocument.documentElement,n)){if(r!==null&&_u(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=Vc(n,o);var s=Vc(n,r);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var b0=pt&&"documentMode"in document&&11>=document.documentMode,Bn=null,el=null,qr=null,tl=!1;function Wc(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;tl||Bn==null||Bn!==bo(r)||(r=Bn,"selectionStart"in r&&_u(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),qr&&hi(qr,r)||(qr=r,r=Fo(el,"onSelect"),0<r.length&&(t=new vu("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Bn)))}function no(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var $n={animationend:no("Animation","AnimationEnd"),animationiteration:no("Animation","AnimationIteration"),animationstart:no("Animation","AnimationStart"),transitionend:no("Transition","TransitionEnd")},oa={},Hh={};pt&&(Hh=document.createElement("div").style,"AnimationEvent"in window||(delete $n.animationend.animation,delete $n.animationiteration.animation,delete $n.animationstart.animation),"TransitionEvent"in window||delete $n.transitionend.transition);function Ss(e){if(oa[e])return oa[e];if(!$n[e])return e;var t=$n[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Hh)return oa[e]=t[n];return e}var Vh=Ss("animationend"),Wh=Ss("animationiteration"),Kh=Ss("animationstart"),Gh=Ss("transitionend"),Yh=new Map,Kc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function rn(e,t){Yh.set(e,t),bn(t,[e])}for(var sa=0;sa<Kc.length;sa++){var aa=Kc[sa],R0=aa.toLowerCase(),L0=aa[0].toUpperCase()+aa.slice(1);rn(R0,"on"+L0)}rn(Vh,"onAnimationEnd");rn(Wh,"onAnimationIteration");rn(Kh,"onAnimationStart");rn("dblclick","onDoubleClick");rn("focusin","onFocus");rn("focusout","onBlur");rn(Gh,"onTransitionEnd");cr("onMouseEnter",["mouseout","mouseover"]);cr("onMouseLeave",["mouseout","mouseover"]);cr("onPointerEnter",["pointerout","pointerover"]);cr("onPointerLeave",["pointerout","pointerover"]);bn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));bn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));bn("onBeforeInput",["compositionend","keypress","textInput","paste"]);bn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));bn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));bn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var $r="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),D0=new Set("cancel close invalid load scroll toggle".split(" ").concat($r));function Gc(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Rv(r,t,void 0,e),e.currentTarget=null}function Qh(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var s=r.length-1;0<=s;s--){var a=r[s],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==o&&i.isPropagationStopped())break e;Gc(i,a,u),o=l}else for(s=0;s<r.length;s++){if(a=r[s],l=a.instance,u=a.currentTarget,a=a.listener,l!==o&&i.isPropagationStopped())break e;Gc(i,a,u),o=l}}}if(Lo)throw e=Xa,Lo=!1,Xa=null,e}function $(e,t){var n=t[sl];n===void 0&&(n=t[sl]=new Set);var r=e+"__bubble";n.has(r)||(Xh(t,e,2,!1),n.add(r))}function la(e,t,n){var r=0;t&&(r|=4),Xh(n,e,r,t)}var ro="_reactListening"+Math.random().toString(36).slice(2);function pi(e){if(!e[ro]){e[ro]=!0,rh.forEach(function(n){n!=="selectionchange"&&(D0.has(n)||la(n,!1,e),la(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ro]||(t[ro]=!0,la("selectionchange",!1,t))}}function Xh(e,t,n,r){switch(Rh(t)){case 1:var i=Qv;break;case 4:i=Xv;break;default:i=mu}n=i.bind(null,t,n,e),i=void 0,!Qa||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function ua(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;s=s.return}for(;a!==null;){if(s=vn(a),s===null)return;if(l=s.tag,l===5||l===6){r=o=s;continue e}a=a.parentNode}}r=r.return}wh(function(){var u=o,c=fu(n),d=[];e:{var h=Yh.get(e);if(h!==void 0){var v=vu,w=e;switch(e){case"keypress":if(yo(n)===0)break e;case"keydown":case"keyup":v=f0;break;case"focusin":w="focus",v=na;break;case"focusout":w="blur",v=na;break;case"beforeblur":case"afterblur":v=na;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Dc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=Zv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=p0;break;case Vh:case Wh:case Kh:v=n0;break;case Gh:v=g0;break;case"scroll":v=qv;break;case"wheel":v=y0;break;case"copy":case"cut":case"paste":v=i0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=jc}var _=(t&4)!==0,E=!_&&e==="scroll",p=_?h!==null?h+"Capture":null:h;_=[];for(var f=u,m;f!==null;){m=f;var y=m.stateNode;if(m.tag===5&&y!==null&&(m=y,p!==null&&(y=li(f,p),y!=null&&_.push(mi(f,y,m)))),E)break;f=f.return}0<_.length&&(h=new v(h,w,null,n,c),d.push({event:h,listeners:_}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",h&&n!==Ga&&(w=n.relatedTarget||n.fromElement)&&(vn(w)||w[mt]))break e;if((v||h)&&(h=c.window===c?c:(h=c.ownerDocument)?h.defaultView||h.parentWindow:window,v?(w=n.relatedTarget||n.toElement,v=u,w=w?vn(w):null,w!==null&&(E=Rn(w),w!==E||w.tag!==5&&w.tag!==6)&&(w=null)):(v=null,w=u),v!==w)){if(_=Dc,y="onMouseLeave",p="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(_=jc,y="onPointerLeave",p="onPointerEnter",f="pointer"),E=v==null?h:Hn(v),m=w==null?h:Hn(w),h=new _(y,f+"leave",v,n,c),h.target=E,h.relatedTarget=m,y=null,vn(c)===u&&(_=new _(p,f+"enter",w,n,c),_.target=m,_.relatedTarget=E,y=_),E=y,v&&w)t:{for(_=v,p=w,f=0,m=_;m;m=Mn(m))f++;for(m=0,y=p;y;y=Mn(y))m++;for(;0<f-m;)_=Mn(_),f--;for(;0<m-f;)p=Mn(p),m--;for(;f--;){if(_===p||p!==null&&_===p.alternate)break t;_=Mn(_),p=Mn(p)}_=null}else _=null;v!==null&&Yc(d,h,v,_,!1),w!==null&&E!==null&&Yc(d,E,w,_,!0)}}e:{if(h=u?Hn(u):window,v=h.nodeName&&h.nodeName.toLowerCase(),v==="select"||v==="input"&&h.type==="file")var k=I0;else if(zc(h))if(Fh)k=N0;else{k=P0;var I=C0}else(v=h.nodeName)&&v.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(k=T0);if(k&&(k=k(e,u))){Uh(d,k,n,c);break e}I&&I(e,h,u),e==="focusout"&&(I=h._wrapperState)&&I.controlled&&h.type==="number"&&$a(h,"number",h.value)}switch(I=u?Hn(u):window,e){case"focusin":(zc(I)||I.contentEditable==="true")&&(Bn=I,el=u,qr=null);break;case"focusout":qr=el=Bn=null;break;case"mousedown":tl=!0;break;case"contextmenu":case"mouseup":case"dragend":tl=!1,Wc(d,n,c);break;case"selectionchange":if(b0)break;case"keydown":case"keyup":Wc(d,n,c)}var C;if(wu)e:{switch(e){case"compositionstart":var O="onCompositionStart";break e;case"compositionend":O="onCompositionEnd";break e;case"compositionupdate":O="onCompositionUpdate";break e}O=void 0}else zn?Mh(e,n)&&(O="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(O="onCompositionStart");O&&(Dh&&n.locale!=="ko"&&(zn||O!=="onCompositionStart"?O==="onCompositionEnd"&&zn&&(C=Lh()):(Mt=c,gu="value"in Mt?Mt.value:Mt.textContent,zn=!0)),I=Fo(u,O),0<I.length&&(O=new Mc(O,e,null,n,c),d.push({event:O,listeners:I}),C?O.data=C:(C=jh(n),C!==null&&(O.data=C)))),(C=_0?E0(e,n):S0(e,n))&&(u=Fo(u,"onBeforeInput"),0<u.length&&(c=new Mc("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=C))}Qh(d,t)})}function mi(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Fo(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=li(e,n),o!=null&&r.unshift(mi(e,o,i)),o=li(e,t),o!=null&&r.push(mi(e,o,i))),e=e.return}return r}function Mn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Yc(e,t,n,r,i){for(var o=t._reactName,s=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=li(n,o),l!=null&&s.unshift(mi(n,l,a))):i||(l=li(n,o),l!=null&&s.push(mi(n,l,a)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var M0=/\r\n?/g,j0=/\u0000|\uFFFD/g;function Qc(e){return(typeof e=="string"?e:""+e).replace(M0,`
`).replace(j0,"")}function io(e,t,n){if(t=Qc(t),Qc(e)!==t&&n)throw Error(S(425))}function zo(){}var nl=null,rl=null;function il(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ol=typeof setTimeout=="function"?setTimeout:void 0,U0=typeof clearTimeout=="function"?clearTimeout:void 0,Xc=typeof Promise=="function"?Promise:void 0,F0=typeof queueMicrotask=="function"?queueMicrotask:typeof Xc<"u"?function(e){return Xc.resolve(null).then(e).catch(z0)}:ol;function z0(e){setTimeout(function(){throw e})}function ca(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),fi(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);fi(t)}function Ht(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function qc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var xr=Math.random().toString(36).slice(2),Xe="__reactFiber$"+xr,gi="__reactProps$"+xr,mt="__reactContainer$"+xr,sl="__reactEvents$"+xr,B0="__reactListeners$"+xr,$0="__reactHandles$"+xr;function vn(e){var t=e[Xe];if(t)return t;for(var n=e.parentNode;n;){if(t=n[mt]||n[Xe]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=qc(e);e!==null;){if(n=e[Xe])return n;e=qc(e)}return t}e=n,n=e.parentNode}return null}function Li(e){return e=e[Xe]||e[mt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Hn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(S(33))}function ks(e){return e[gi]||null}var al=[],Vn=-1;function on(e){return{current:e}}function H(e){0>Vn||(e.current=al[Vn],al[Vn]=null,Vn--)}function B(e,t){Vn++,al[Vn]=e.current,e.current=t}var Zt={},de=on(Zt),_e=on(!1),xn=Zt;function fr(e,t){var n=e.type.contextTypes;if(!n)return Zt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Ee(e){return e=e.childContextTypes,e!=null}function Bo(){H(_e),H(de)}function Jc(e,t,n){if(de.current!==Zt)throw Error(S(168));B(de,t),B(_e,n)}function qh(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(S(108,Cv(e)||"Unknown",i));return Q({},n,r)}function $o(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Zt,xn=de.current,B(de,e),B(_e,_e.current),!0}function Zc(e,t,n){var r=e.stateNode;if(!r)throw Error(S(169));n?(e=qh(e,t,xn),r.__reactInternalMemoizedMergedChildContext=e,H(_e),H(de),B(de,e)):H(_e),B(_e,n)}var st=null,xs=!1,fa=!1;function Jh(e){st===null?st=[e]:st.push(e)}function H0(e){xs=!0,Jh(e)}function sn(){if(!fa&&st!==null){fa=!0;var e=0,t=U;try{var n=st;for(U=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}st=null,xs=!1}catch(i){throw st!==null&&(st=st.slice(e+1)),kh(du,sn),i}finally{U=t,fa=!1}}return null}var Wn=[],Kn=0,Ho=null,Vo=0,Re=[],Le=0,In=null,at=1,lt="";function hn(e,t){Wn[Kn++]=Vo,Wn[Kn++]=Ho,Ho=e,Vo=t}function Zh(e,t,n){Re[Le++]=at,Re[Le++]=lt,Re[Le++]=In,In=e;var r=at;e=lt;var i=32-He(r)-1;r&=~(1<<i),n+=1;var o=32-He(t)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,at=1<<32-He(t)+i|n<<i|r,lt=o+e}else at=1<<o|n<<i|r,lt=e}function Eu(e){e.return!==null&&(hn(e,1),Zh(e,1,0))}function Su(e){for(;e===Ho;)Ho=Wn[--Kn],Wn[Kn]=null,Vo=Wn[--Kn],Wn[Kn]=null;for(;e===In;)In=Re[--Le],Re[Le]=null,lt=Re[--Le],Re[Le]=null,at=Re[--Le],Re[Le]=null}var Ce=null,Ie=null,W=!1,$e=null;function ep(e,t){var n=De(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function ef(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ce=e,Ie=Ht(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ce=e,Ie=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=In!==null?{id:at,overflow:lt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=De(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ce=e,Ie=null,!0):!1;default:return!1}}function ll(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ul(e){if(W){var t=Ie;if(t){var n=t;if(!ef(e,t)){if(ll(e))throw Error(S(418));t=Ht(n.nextSibling);var r=Ce;t&&ef(e,t)?ep(r,n):(e.flags=e.flags&-4097|2,W=!1,Ce=e)}}else{if(ll(e))throw Error(S(418));e.flags=e.flags&-4097|2,W=!1,Ce=e}}}function tf(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ce=e}function oo(e){if(e!==Ce)return!1;if(!W)return tf(e),W=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!il(e.type,e.memoizedProps)),t&&(t=Ie)){if(ll(e))throw tp(),Error(S(418));for(;t;)ep(e,t),t=Ht(t.nextSibling)}if(tf(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(S(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ie=Ht(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ie=null}}else Ie=Ce?Ht(e.stateNode.nextSibling):null;return!0}function tp(){for(var e=Ie;e;)e=Ht(e.nextSibling)}function dr(){Ie=Ce=null,W=!1}function ku(e){$e===null?$e=[e]:$e.push(e)}var V0=St.ReactCurrentBatchConfig;function Mr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(S(309));var r=n.stateNode}if(!r)throw Error(S(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(s){var a=i.refs;s===null?delete a[o]:a[o]=s},t._stringRef=o,t)}if(typeof e!="string")throw Error(S(284));if(!n._owner)throw Error(S(290,e))}return e}function so(e,t){throw e=Object.prototype.toString.call(t),Error(S(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function nf(e){var t=e._init;return t(e._payload)}function np(e){function t(p,f){if(e){var m=p.deletions;m===null?(p.deletions=[f],p.flags|=16):m.push(f)}}function n(p,f){if(!e)return null;for(;f!==null;)t(p,f),f=f.sibling;return null}function r(p,f){for(p=new Map;f!==null;)f.key!==null?p.set(f.key,f):p.set(f.index,f),f=f.sibling;return p}function i(p,f){return p=Gt(p,f),p.index=0,p.sibling=null,p}function o(p,f,m){return p.index=m,e?(m=p.alternate,m!==null?(m=m.index,m<f?(p.flags|=2,f):m):(p.flags|=2,f)):(p.flags|=1048576,f)}function s(p){return e&&p.alternate===null&&(p.flags|=2),p}function a(p,f,m,y){return f===null||f.tag!==6?(f=ya(m,p.mode,y),f.return=p,f):(f=i(f,m),f.return=p,f)}function l(p,f,m,y){var k=m.type;return k===Fn?c(p,f,m.props.children,y,m.key):f!==null&&(f.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Tt&&nf(k)===f.type)?(y=i(f,m.props),y.ref=Mr(p,f,m),y.return=p,y):(y=Io(m.type,m.key,m.props,null,p.mode,y),y.ref=Mr(p,f,m),y.return=p,y)}function u(p,f,m,y){return f===null||f.tag!==4||f.stateNode.containerInfo!==m.containerInfo||f.stateNode.implementation!==m.implementation?(f=wa(m,p.mode,y),f.return=p,f):(f=i(f,m.children||[]),f.return=p,f)}function c(p,f,m,y,k){return f===null||f.tag!==7?(f=En(m,p.mode,y,k),f.return=p,f):(f=i(f,m),f.return=p,f)}function d(p,f,m){if(typeof f=="string"&&f!==""||typeof f=="number")return f=ya(""+f,p.mode,m),f.return=p,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Qi:return m=Io(f.type,f.key,f.props,null,p.mode,m),m.ref=Mr(p,null,f),m.return=p,m;case Un:return f=wa(f,p.mode,m),f.return=p,f;case Tt:var y=f._init;return d(p,y(f._payload),m)}if(zr(f)||Ar(f))return f=En(f,p.mode,m,null),f.return=p,f;so(p,f)}return null}function h(p,f,m,y){var k=f!==null?f.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return k!==null?null:a(p,f,""+m,y);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Qi:return m.key===k?l(p,f,m,y):null;case Un:return m.key===k?u(p,f,m,y):null;case Tt:return k=m._init,h(p,f,k(m._payload),y)}if(zr(m)||Ar(m))return k!==null?null:c(p,f,m,y,null);so(p,m)}return null}function v(p,f,m,y,k){if(typeof y=="string"&&y!==""||typeof y=="number")return p=p.get(m)||null,a(f,p,""+y,k);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Qi:return p=p.get(y.key===null?m:y.key)||null,l(f,p,y,k);case Un:return p=p.get(y.key===null?m:y.key)||null,u(f,p,y,k);case Tt:var I=y._init;return v(p,f,m,I(y._payload),k)}if(zr(y)||Ar(y))return p=p.get(m)||null,c(f,p,y,k,null);so(f,y)}return null}function w(p,f,m,y){for(var k=null,I=null,C=f,O=f=0,F=null;C!==null&&O<m.length;O++){C.index>O?(F=C,C=null):F=C.sibling;var b=h(p,C,m[O],y);if(b===null){C===null&&(C=F);break}e&&C&&b.alternate===null&&t(p,C),f=o(b,f,O),I===null?k=b:I.sibling=b,I=b,C=F}if(O===m.length)return n(p,C),W&&hn(p,O),k;if(C===null){for(;O<m.length;O++)C=d(p,m[O],y),C!==null&&(f=o(C,f,O),I===null?k=C:I.sibling=C,I=C);return W&&hn(p,O),k}for(C=r(p,C);O<m.length;O++)F=v(C,p,O,m[O],y),F!==null&&(e&&F.alternate!==null&&C.delete(F.key===null?O:F.key),f=o(F,f,O),I===null?k=F:I.sibling=F,I=F);return e&&C.forEach(function(ke){return t(p,ke)}),W&&hn(p,O),k}function _(p,f,m,y){var k=Ar(m);if(typeof k!="function")throw Error(S(150));if(m=k.call(m),m==null)throw Error(S(151));for(var I=k=null,C=f,O=f=0,F=null,b=m.next();C!==null&&!b.done;O++,b=m.next()){C.index>O?(F=C,C=null):F=C.sibling;var ke=h(p,C,b.value,y);if(ke===null){C===null&&(C=F);break}e&&C&&ke.alternate===null&&t(p,C),f=o(ke,f,O),I===null?k=ke:I.sibling=ke,I=ke,C=F}if(b.done)return n(p,C),W&&hn(p,O),k;if(C===null){for(;!b.done;O++,b=m.next())b=d(p,b.value,y),b!==null&&(f=o(b,f,O),I===null?k=b:I.sibling=b,I=b);return W&&hn(p,O),k}for(C=r(p,C);!b.done;O++,b=m.next())b=v(C,p,O,b.value,y),b!==null&&(e&&b.alternate!==null&&C.delete(b.key===null?O:b.key),f=o(b,f,O),I===null?k=b:I.sibling=b,I=b);return e&&C.forEach(function(Nr){return t(p,Nr)}),W&&hn(p,O),k}function E(p,f,m,y){if(typeof m=="object"&&m!==null&&m.type===Fn&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case Qi:e:{for(var k=m.key,I=f;I!==null;){if(I.key===k){if(k=m.type,k===Fn){if(I.tag===7){n(p,I.sibling),f=i(I,m.props.children),f.return=p,p=f;break e}}else if(I.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Tt&&nf(k)===I.type){n(p,I.sibling),f=i(I,m.props),f.ref=Mr(p,I,m),f.return=p,p=f;break e}n(p,I);break}else t(p,I);I=I.sibling}m.type===Fn?(f=En(m.props.children,p.mode,y,m.key),f.return=p,p=f):(y=Io(m.type,m.key,m.props,null,p.mode,y),y.ref=Mr(p,f,m),y.return=p,p=y)}return s(p);case Un:e:{for(I=m.key;f!==null;){if(f.key===I)if(f.tag===4&&f.stateNode.containerInfo===m.containerInfo&&f.stateNode.implementation===m.implementation){n(p,f.sibling),f=i(f,m.children||[]),f.return=p,p=f;break e}else{n(p,f);break}else t(p,f);f=f.sibling}f=wa(m,p.mode,y),f.return=p,p=f}return s(p);case Tt:return I=m._init,E(p,f,I(m._payload),y)}if(zr(m))return w(p,f,m,y);if(Ar(m))return _(p,f,m,y);so(p,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,f!==null&&f.tag===6?(n(p,f.sibling),f=i(f,m),f.return=p,p=f):(n(p,f),f=ya(m,p.mode,y),f.return=p,p=f),s(p)):n(p,f)}return E}var hr=np(!0),rp=np(!1),Wo=on(null),Ko=null,Gn=null,xu=null;function Iu(){xu=Gn=Ko=null}function Cu(e){var t=Wo.current;H(Wo),e._currentValue=t}function cl(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function rr(e,t){Ko=e,xu=Gn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(we=!0),e.firstContext=null)}function je(e){var t=e._currentValue;if(xu!==e)if(e={context:e,memoizedValue:t,next:null},Gn===null){if(Ko===null)throw Error(S(308));Gn=e,Ko.dependencies={lanes:0,firstContext:e}}else Gn=Gn.next=e;return t}var yn=null;function Pu(e){yn===null?yn=[e]:yn.push(e)}function ip(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Pu(t)):(n.next=i.next,i.next=n),t.interleaved=n,gt(e,r)}function gt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Nt=!1;function Tu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function op(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function ht(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Vt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,j&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,gt(e,n)}return i=r.interleaved,i===null?(t.next=t,Pu(r)):(t.next=i.next,i.next=t),r.interleaved=t,gt(e,n)}function wo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,hu(e,n)}}function rf(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Go(e,t,n,r){var i=e.updateQueue;Nt=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,s===null?o=u:s.next=u,s=l;var c=e.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==s&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(o!==null){var d=i.baseState;s=0,c=u=l=null,a=o;do{var h=a.lane,v=a.eventTime;if((r&h)===h){c!==null&&(c=c.next={eventTime:v,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var w=e,_=a;switch(h=t,v=n,_.tag){case 1:if(w=_.payload,typeof w=="function"){d=w.call(v,d,h);break e}d=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=_.payload,h=typeof w=="function"?w.call(v,d,h):w,h==null)break e;d=Q({},d,h);break e;case 2:Nt=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,h=i.effects,h===null?i.effects=[a]:h.push(a))}else v={eventTime:v,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=v,l=d):c=c.next=v,s|=h;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;h=a,a=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(!0);if(c===null&&(l=d),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,t=i.shared.interleaved,t!==null){i=t;do s|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);Pn|=s,e.lanes=s,e.memoizedState=d}}function of(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(S(191,i));i.call(r)}}}var Di={},tt=on(Di),vi=on(Di),yi=on(Di);function wn(e){if(e===Di)throw Error(S(174));return e}function Nu(e,t){switch(B(yi,t),B(vi,e),B(tt,Di),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Va(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Va(t,e)}H(tt),B(tt,t)}function pr(){H(tt),H(vi),H(yi)}function sp(e){wn(yi.current);var t=wn(tt.current),n=Va(t,e.type);t!==n&&(B(vi,e),B(tt,n))}function Ou(e){vi.current===e&&(H(tt),H(vi))}var G=on(0);function Yo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var da=[];function Au(){for(var e=0;e<da.length;e++)da[e]._workInProgressVersionPrimary=null;da.length=0}var _o=St.ReactCurrentDispatcher,ha=St.ReactCurrentBatchConfig,Cn=0,Y=null,te=null,ie=null,Qo=!1,Jr=!1,wi=0,W0=0;function ue(){throw Error(S(321))}function bu(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!We(e[n],t[n]))return!1;return!0}function Ru(e,t,n,r,i,o){if(Cn=o,Y=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,_o.current=e===null||e.memoizedState===null?Q0:X0,e=n(r,i),Jr){o=0;do{if(Jr=!1,wi=0,25<=o)throw Error(S(301));o+=1,ie=te=null,t.updateQueue=null,_o.current=q0,e=n(r,i)}while(Jr)}if(_o.current=Xo,t=te!==null&&te.next!==null,Cn=0,ie=te=Y=null,Qo=!1,t)throw Error(S(300));return e}function Lu(){var e=wi!==0;return wi=0,e}function Ye(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ie===null?Y.memoizedState=ie=e:ie=ie.next=e,ie}function Ue(){if(te===null){var e=Y.alternate;e=e!==null?e.memoizedState:null}else e=te.next;var t=ie===null?Y.memoizedState:ie.next;if(t!==null)ie=t,te=e;else{if(e===null)throw Error(S(310));te=e,e={memoizedState:te.memoizedState,baseState:te.baseState,baseQueue:te.baseQueue,queue:te.queue,next:null},ie===null?Y.memoizedState=ie=e:ie=ie.next=e}return ie}function _i(e,t){return typeof t=="function"?t(e):t}function pa(e){var t=Ue(),n=t.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=e;var r=te,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=s=null,l=null,u=o;do{var c=u.lane;if((Cn&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,s=r):l=l.next=d,Y.lanes|=c,Pn|=c}u=u.next}while(u!==null&&u!==o);l===null?s=r:l.next=a,We(r,t.memoizedState)||(we=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,Y.lanes|=o,Pn|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ma(e){var t=Ue(),n=t.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=e(o,s.action),s=s.next;while(s!==i);We(o,t.memoizedState)||(we=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function ap(){}function lp(e,t){var n=Y,r=Ue(),i=t(),o=!We(r.memoizedState,i);if(o&&(r.memoizedState=i,we=!0),r=r.queue,Du(fp.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||ie!==null&&ie.memoizedState.tag&1){if(n.flags|=2048,Ei(9,cp.bind(null,n,r,i,t),void 0,null),oe===null)throw Error(S(349));Cn&30||up(n,t,i)}return i}function up(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Y.updateQueue,t===null?(t={lastEffect:null,stores:null},Y.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function cp(e,t,n,r){t.value=n,t.getSnapshot=r,dp(t)&&hp(e)}function fp(e,t,n){return n(function(){dp(t)&&hp(e)})}function dp(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!We(e,n)}catch{return!0}}function hp(e){var t=gt(e,1);t!==null&&Ve(t,e,1,-1)}function sf(e){var t=Ye();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:_i,lastRenderedState:e},t.queue=e,e=e.dispatch=Y0.bind(null,Y,e),[t.memoizedState,e]}function Ei(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Y.updateQueue,t===null?(t={lastEffect:null,stores:null},Y.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function pp(){return Ue().memoizedState}function Eo(e,t,n,r){var i=Ye();Y.flags|=e,i.memoizedState=Ei(1|t,n,void 0,r===void 0?null:r)}function Is(e,t,n,r){var i=Ue();r=r===void 0?null:r;var o=void 0;if(te!==null){var s=te.memoizedState;if(o=s.destroy,r!==null&&bu(r,s.deps)){i.memoizedState=Ei(t,n,o,r);return}}Y.flags|=e,i.memoizedState=Ei(1|t,n,o,r)}function af(e,t){return Eo(8390656,8,e,t)}function Du(e,t){return Is(2048,8,e,t)}function mp(e,t){return Is(4,2,e,t)}function gp(e,t){return Is(4,4,e,t)}function vp(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function yp(e,t,n){return n=n!=null?n.concat([e]):null,Is(4,4,vp.bind(null,t,e),n)}function Mu(){}function wp(e,t){var n=Ue();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&bu(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function _p(e,t){var n=Ue();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&bu(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Ep(e,t,n){return Cn&21?(We(n,t)||(n=Ch(),Y.lanes|=n,Pn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,we=!0),e.memoizedState=n)}function K0(e,t){var n=U;U=n!==0&&4>n?n:4,e(!0);var r=ha.transition;ha.transition={};try{e(!1),t()}finally{U=n,ha.transition=r}}function Sp(){return Ue().memoizedState}function G0(e,t,n){var r=Kt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},kp(e))xp(t,n);else if(n=ip(e,t,n,r),n!==null){var i=pe();Ve(n,e,r,i),Ip(n,t,r)}}function Y0(e,t,n){var r=Kt(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(kp(e))xp(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var s=t.lastRenderedState,a=o(s,n);if(i.hasEagerState=!0,i.eagerState=a,We(a,s)){var l=t.interleaved;l===null?(i.next=i,Pu(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=ip(e,t,i,r),n!==null&&(i=pe(),Ve(n,e,r,i),Ip(n,t,r))}}function kp(e){var t=e.alternate;return e===Y||t!==null&&t===Y}function xp(e,t){Jr=Qo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Ip(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,hu(e,n)}}var Xo={readContext:je,useCallback:ue,useContext:ue,useEffect:ue,useImperativeHandle:ue,useInsertionEffect:ue,useLayoutEffect:ue,useMemo:ue,useReducer:ue,useRef:ue,useState:ue,useDebugValue:ue,useDeferredValue:ue,useTransition:ue,useMutableSource:ue,useSyncExternalStore:ue,useId:ue,unstable_isNewReconciler:!1},Q0={readContext:je,useCallback:function(e,t){return Ye().memoizedState=[e,t===void 0?null:t],e},useContext:je,useEffect:af,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Eo(4194308,4,vp.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Eo(4194308,4,e,t)},useInsertionEffect:function(e,t){return Eo(4,2,e,t)},useMemo:function(e,t){var n=Ye();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Ye();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=G0.bind(null,Y,e),[r.memoizedState,e]},useRef:function(e){var t=Ye();return e={current:e},t.memoizedState=e},useState:sf,useDebugValue:Mu,useDeferredValue:function(e){return Ye().memoizedState=e},useTransition:function(){var e=sf(!1),t=e[0];return e=K0.bind(null,e[1]),Ye().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Y,i=Ye();if(W){if(n===void 0)throw Error(S(407));n=n()}else{if(n=t(),oe===null)throw Error(S(349));Cn&30||up(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,af(fp.bind(null,r,o,e),[e]),r.flags|=2048,Ei(9,cp.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Ye(),t=oe.identifierPrefix;if(W){var n=lt,r=at;n=(r&~(1<<32-He(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=wi++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=W0++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},X0={readContext:je,useCallback:wp,useContext:je,useEffect:Du,useImperativeHandle:yp,useInsertionEffect:mp,useLayoutEffect:gp,useMemo:_p,useReducer:pa,useRef:pp,useState:function(){return pa(_i)},useDebugValue:Mu,useDeferredValue:function(e){var t=Ue();return Ep(t,te.memoizedState,e)},useTransition:function(){var e=pa(_i)[0],t=Ue().memoizedState;return[e,t]},useMutableSource:ap,useSyncExternalStore:lp,useId:Sp,unstable_isNewReconciler:!1},q0={readContext:je,useCallback:wp,useContext:je,useEffect:Du,useImperativeHandle:yp,useInsertionEffect:mp,useLayoutEffect:gp,useMemo:_p,useReducer:ma,useRef:pp,useState:function(){return ma(_i)},useDebugValue:Mu,useDeferredValue:function(e){var t=Ue();return te===null?t.memoizedState=e:Ep(t,te.memoizedState,e)},useTransition:function(){var e=ma(_i)[0],t=Ue().memoizedState;return[e,t]},useMutableSource:ap,useSyncExternalStore:lp,useId:Sp,unstable_isNewReconciler:!1};function ze(e,t){if(e&&e.defaultProps){t=Q({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function fl(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Q({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Cs={isMounted:function(e){return(e=e._reactInternals)?Rn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=pe(),i=Kt(e),o=ht(r,i);o.payload=t,n!=null&&(o.callback=n),t=Vt(e,o,i),t!==null&&(Ve(t,e,i,r),wo(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=pe(),i=Kt(e),o=ht(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Vt(e,o,i),t!==null&&(Ve(t,e,i,r),wo(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=pe(),r=Kt(e),i=ht(n,r);i.tag=2,t!=null&&(i.callback=t),t=Vt(e,i,r),t!==null&&(Ve(t,e,r,n),wo(t,e,r))}};function lf(e,t,n,r,i,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,s):t.prototype&&t.prototype.isPureReactComponent?!hi(n,r)||!hi(i,o):!0}function Cp(e,t,n){var r=!1,i=Zt,o=t.contextType;return typeof o=="object"&&o!==null?o=je(o):(i=Ee(t)?xn:de.current,r=t.contextTypes,o=(r=r!=null)?fr(e,i):Zt),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Cs,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function uf(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Cs.enqueueReplaceState(t,t.state,null)}function dl(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Tu(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=je(o):(o=Ee(t)?xn:de.current,i.context=fr(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(fl(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Cs.enqueueReplaceState(i,i.state,null),Go(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function mr(e,t){try{var n="",r=t;do n+=Iv(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function ga(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function hl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var J0=typeof WeakMap=="function"?WeakMap:Map;function Pp(e,t,n){n=ht(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Jo||(Jo=!0,kl=r),hl(e,t)},n}function Tp(e,t,n){n=ht(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){hl(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){hl(e,t),typeof r!="function"&&(Wt===null?Wt=new Set([this]):Wt.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function cf(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new J0;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=dy.bind(null,e,t,n),t.then(e,e))}function ff(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function df(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=ht(-1,1),t.tag=2,Vt(n,t,1))),n.lanes|=1),e)}var Z0=St.ReactCurrentOwner,we=!1;function he(e,t,n,r){t.child=e===null?rp(t,null,n,r):hr(t,e.child,n,r)}function hf(e,t,n,r,i){n=n.render;var o=t.ref;return rr(t,i),r=Ru(e,t,n,r,o,i),n=Lu(),e!==null&&!we?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,vt(e,t,i)):(W&&n&&Eu(t),t.flags|=1,he(e,t,r,i),t.child)}function pf(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Vu(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Np(e,t,o,r,i)):(e=Io(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:hi,n(s,r)&&e.ref===t.ref)return vt(e,t,i)}return t.flags|=1,e=Gt(o,r),e.ref=t.ref,e.return=t,t.child=e}function Np(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(hi(o,r)&&e.ref===t.ref)if(we=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(we=!0);else return t.lanes=e.lanes,vt(e,t,i)}return pl(e,t,n,r,i)}function Op(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},B(Qn,xe),xe|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,B(Qn,xe),xe|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,B(Qn,xe),xe|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,B(Qn,xe),xe|=r;return he(e,t,i,n),t.child}function Ap(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function pl(e,t,n,r,i){var o=Ee(n)?xn:de.current;return o=fr(t,o),rr(t,i),n=Ru(e,t,n,r,o,i),r=Lu(),e!==null&&!we?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,vt(e,t,i)):(W&&r&&Eu(t),t.flags|=1,he(e,t,n,i),t.child)}function mf(e,t,n,r,i){if(Ee(n)){var o=!0;$o(t)}else o=!1;if(rr(t,i),t.stateNode===null)So(e,t),Cp(t,n,r),dl(t,n,r,i),r=!0;else if(e===null){var s=t.stateNode,a=t.memoizedProps;s.props=a;var l=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=je(u):(u=Ee(n)?xn:de.current,u=fr(t,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof s.getSnapshotBeforeUpdate=="function";d||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||l!==u)&&uf(t,s,r,u),Nt=!1;var h=t.memoizedState;s.state=h,Go(t,r,s,i),l=t.memoizedState,a!==r||h!==l||_e.current||Nt?(typeof c=="function"&&(fl(t,n,c,r),l=t.memoizedState),(a=Nt||lf(t,n,a,r,h,l,u))?(d||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),s.props=r,s.state=l,s.context=u,r=a):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,op(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:ze(t.type,a),s.props=u,d=t.pendingProps,h=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=je(l):(l=Ee(n)?xn:de.current,l=fr(t,l));var v=n.getDerivedStateFromProps;(c=typeof v=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==d||h!==l)&&uf(t,s,r,l),Nt=!1,h=t.memoizedState,s.state=h,Go(t,r,s,i);var w=t.memoizedState;a!==d||h!==w||_e.current||Nt?(typeof v=="function"&&(fl(t,n,v,r),w=t.memoizedState),(u=Nt||lf(t,n,u,r,h,w,l)||!1)?(c||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,w,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,w,l)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=w),s.props=r,s.state=w,s.context=l,r=u):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return ml(e,t,n,r,o,i)}function ml(e,t,n,r,i,o){Ap(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return i&&Zc(t,n,!1),vt(e,t,o);r=t.stateNode,Z0.current=t;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=hr(t,e.child,null,o),t.child=hr(t,null,a,o)):he(e,t,a,o),t.memoizedState=r.state,i&&Zc(t,n,!0),t.child}function bp(e){var t=e.stateNode;t.pendingContext?Jc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Jc(e,t.context,!1),Nu(e,t.containerInfo)}function gf(e,t,n,r,i){return dr(),ku(i),t.flags|=256,he(e,t,n,r),t.child}var gl={dehydrated:null,treeContext:null,retryLane:0};function vl(e){return{baseLanes:e,cachePool:null,transitions:null}}function Rp(e,t,n){var r=t.pendingProps,i=G.current,o=!1,s=(t.flags&128)!==0,a;if((a=s)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),B(G,i&1),e===null)return ul(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,o?(r=t.mode,o=t.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=Ns(s,r,0,null),e=En(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=vl(n),t.memoizedState=gl,e):ju(t,s));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return ey(e,t,s,r,a,i,n);if(o){o=r.fallback,s=t.mode,i=e.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(s&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=Gt(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=Gt(a,o):(o=En(o,s,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,s=e.child.memoizedState,s=s===null?vl(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=e.childLanes&~n,t.memoizedState=gl,r}return o=e.child,e=o.sibling,r=Gt(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function ju(e,t){return t=Ns({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ao(e,t,n,r){return r!==null&&ku(r),hr(t,e.child,null,n),e=ju(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function ey(e,t,n,r,i,o,s){if(n)return t.flags&256?(t.flags&=-257,r=ga(Error(S(422))),ao(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Ns({mode:"visible",children:r.children},i,0,null),o=En(o,i,s,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&hr(t,e.child,null,s),t.child.memoizedState=vl(s),t.memoizedState=gl,o);if(!(t.mode&1))return ao(e,t,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(S(419)),r=ga(o,r,void 0),ao(e,t,s,r)}if(a=(s&e.childLanes)!==0,we||a){if(r=oe,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,gt(e,i),Ve(r,e,i,-1))}return Hu(),r=ga(Error(S(421))),ao(e,t,s,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=hy.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,Ie=Ht(i.nextSibling),Ce=t,W=!0,$e=null,e!==null&&(Re[Le++]=at,Re[Le++]=lt,Re[Le++]=In,at=e.id,lt=e.overflow,In=t),t=ju(t,r.children),t.flags|=4096,t)}function vf(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),cl(e.return,t,n)}function va(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Lp(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(he(e,t,r.children,n),r=G.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&vf(e,n,t);else if(e.tag===19)vf(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(B(G,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Yo(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),va(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Yo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}va(t,!0,n,null,o);break;case"together":va(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function So(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function vt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Pn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(S(153));if(t.child!==null){for(e=t.child,n=Gt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Gt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function ty(e,t,n){switch(t.tag){case 3:bp(t),dr();break;case 5:sp(t);break;case 1:Ee(t.type)&&$o(t);break;case 4:Nu(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;B(Wo,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(B(G,G.current&1),t.flags|=128,null):n&t.child.childLanes?Rp(e,t,n):(B(G,G.current&1),e=vt(e,t,n),e!==null?e.sibling:null);B(G,G.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Lp(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),B(G,G.current),r)break;return null;case 22:case 23:return t.lanes=0,Op(e,t,n)}return vt(e,t,n)}var Dp,yl,Mp,jp;Dp=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};yl=function(){};Mp=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,wn(tt.current);var o=null;switch(n){case"input":i=za(e,i),r=za(e,r),o=[];break;case"select":i=Q({},i,{value:void 0}),r=Q({},r,{value:void 0}),o=[];break;case"textarea":i=Ha(e,i),r=Ha(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=zo)}Wa(n,r);var s;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(si.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(si.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&$("scroll",e),o||a===l||(o=[])):(o=o||[]).push(u,l))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};jp=function(e,t,n,r){n!==r&&(t.flags|=4)};function jr(e,t){if(!W)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ce(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function ny(e,t,n){var r=t.pendingProps;switch(Su(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ce(t),null;case 1:return Ee(t.type)&&Bo(),ce(t),null;case 3:return r=t.stateNode,pr(),H(_e),H(de),Au(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(oo(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,$e!==null&&(Cl($e),$e=null))),yl(e,t),ce(t),null;case 5:Ou(t);var i=wn(yi.current);if(n=t.type,e!==null&&t.stateNode!=null)Mp(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(S(166));return ce(t),null}if(e=wn(tt.current),oo(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Xe]=t,r[gi]=o,e=(t.mode&1)!==0,n){case"dialog":$("cancel",r),$("close",r);break;case"iframe":case"object":case"embed":$("load",r);break;case"video":case"audio":for(i=0;i<$r.length;i++)$($r[i],r);break;case"source":$("error",r);break;case"img":case"image":case"link":$("error",r),$("load",r);break;case"details":$("toggle",r);break;case"input":Ic(r,o),$("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},$("invalid",r);break;case"textarea":Pc(r,o),$("invalid",r)}Wa(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&io(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&io(r.textContent,a,e),i=["children",""+a]):si.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&$("scroll",r)}switch(n){case"input":Xi(r),Cc(r,o,!0);break;case"textarea":Xi(r),Tc(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=zo)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=fh(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[Xe]=t,e[gi]=r,Dp(e,t,!1,!1),t.stateNode=e;e:{switch(s=Ka(n,r),n){case"dialog":$("cancel",e),$("close",e),i=r;break;case"iframe":case"object":case"embed":$("load",e),i=r;break;case"video":case"audio":for(i=0;i<$r.length;i++)$($r[i],e);i=r;break;case"source":$("error",e),i=r;break;case"img":case"image":case"link":$("error",e),$("load",e),i=r;break;case"details":$("toggle",e),i=r;break;case"input":Ic(e,r),i=za(e,r),$("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=Q({},r,{value:void 0}),$("invalid",e);break;case"textarea":Pc(e,r),i=Ha(e,r),$("invalid",e);break;default:i=r}Wa(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?ph(e,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&dh(e,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ai(e,l):typeof l=="number"&&ai(e,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(si.hasOwnProperty(o)?l!=null&&o==="onScroll"&&$("scroll",e):l!=null&&au(e,o,l,s))}switch(n){case"input":Xi(e),Cc(e,r,!1);break;case"textarea":Xi(e),Tc(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Jt(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Zn(e,!!r.multiple,o,!1):r.defaultValue!=null&&Zn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=zo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ce(t),null;case 6:if(e&&t.stateNode!=null)jp(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(S(166));if(n=wn(yi.current),wn(tt.current),oo(t)){if(r=t.stateNode,n=t.memoizedProps,r[Xe]=t,(o=r.nodeValue!==n)&&(e=Ce,e!==null))switch(e.tag){case 3:io(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&io(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Xe]=t,t.stateNode=r}return ce(t),null;case 13:if(H(G),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(W&&Ie!==null&&t.mode&1&&!(t.flags&128))tp(),dr(),t.flags|=98560,o=!1;else if(o=oo(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(S(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(S(317));o[Xe]=t}else dr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ce(t),o=!1}else $e!==null&&(Cl($e),$e=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||G.current&1?ne===0&&(ne=3):Hu())),t.updateQueue!==null&&(t.flags|=4),ce(t),null);case 4:return pr(),yl(e,t),e===null&&pi(t.stateNode.containerInfo),ce(t),null;case 10:return Cu(t.type._context),ce(t),null;case 17:return Ee(t.type)&&Bo(),ce(t),null;case 19:if(H(G),o=t.memoizedState,o===null)return ce(t),null;if(r=(t.flags&128)!==0,s=o.rendering,s===null)if(r)jr(o,!1);else{if(ne!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=Yo(e),s!==null){for(t.flags|=128,jr(o,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return B(G,G.current&1|2),t.child}e=e.sibling}o.tail!==null&&Z()>gr&&(t.flags|=128,r=!0,jr(o,!1),t.lanes=4194304)}else{if(!r)if(e=Yo(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),jr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!W)return ce(t),null}else 2*Z()-o.renderingStartTime>gr&&n!==1073741824&&(t.flags|=128,r=!0,jr(o,!1),t.lanes=4194304);o.isBackwards?(s.sibling=t.child,t.child=s):(n=o.last,n!==null?n.sibling=s:t.child=s,o.last=s)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Z(),t.sibling=null,n=G.current,B(G,r?n&1|2:n&1),t):(ce(t),null);case 22:case 23:return $u(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?xe&1073741824&&(ce(t),t.subtreeFlags&6&&(t.flags|=8192)):ce(t),null;case 24:return null;case 25:return null}throw Error(S(156,t.tag))}function ry(e,t){switch(Su(t),t.tag){case 1:return Ee(t.type)&&Bo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return pr(),H(_e),H(de),Au(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Ou(t),null;case 13:if(H(G),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(S(340));dr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return H(G),null;case 4:return pr(),null;case 10:return Cu(t.type._context),null;case 22:case 23:return $u(),null;case 24:return null;default:return null}}var lo=!1,fe=!1,iy=typeof WeakSet=="function"?WeakSet:Set,P=null;function Yn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){X(e,t,r)}else n.current=null}function wl(e,t,n){try{n()}catch(r){X(e,t,r)}}var yf=!1;function oy(e,t){if(nl=jo,e=$h(),_u(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,u=0,c=0,d=e,h=null;t:for(;;){for(var v;d!==n||i!==0&&d.nodeType!==3||(a=s+i),d!==o||r!==0&&d.nodeType!==3||(l=s+r),d.nodeType===3&&(s+=d.nodeValue.length),(v=d.firstChild)!==null;)h=d,d=v;for(;;){if(d===e)break t;if(h===n&&++u===i&&(a=s),h===o&&++c===r&&(l=s),(v=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=v}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(rl={focusedElem:e,selectionRange:n},jo=!1,P=t;P!==null;)if(t=P,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,P=e;else for(;P!==null;){t=P;try{var w=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var _=w.memoizedProps,E=w.memoizedState,p=t.stateNode,f=p.getSnapshotBeforeUpdate(t.elementType===t.type?_:ze(t.type,_),E);p.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(S(163))}}catch(y){X(t,t.return,y)}if(e=t.sibling,e!==null){e.return=t.return,P=e;break}P=t.return}return w=yf,yf=!1,w}function Zr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&wl(t,n,o)}i=i.next}while(i!==r)}}function Ps(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function _l(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Up(e){var t=e.alternate;t!==null&&(e.alternate=null,Up(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Xe],delete t[gi],delete t[sl],delete t[B0],delete t[$0])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Fp(e){return e.tag===5||e.tag===3||e.tag===4}function wf(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Fp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function El(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=zo));else if(r!==4&&(e=e.child,e!==null))for(El(e,t,n),e=e.sibling;e!==null;)El(e,t,n),e=e.sibling}function Sl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Sl(e,t,n),e=e.sibling;e!==null;)Sl(e,t,n),e=e.sibling}var se=null,Be=!1;function It(e,t,n){for(n=n.child;n!==null;)zp(e,t,n),n=n.sibling}function zp(e,t,n){if(et&&typeof et.onCommitFiberUnmount=="function")try{et.onCommitFiberUnmount(ws,n)}catch{}switch(n.tag){case 5:fe||Yn(n,t);case 6:var r=se,i=Be;se=null,It(e,t,n),se=r,Be=i,se!==null&&(Be?(e=se,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):se.removeChild(n.stateNode));break;case 18:se!==null&&(Be?(e=se,n=n.stateNode,e.nodeType===8?ca(e.parentNode,n):e.nodeType===1&&ca(e,n),fi(e)):ca(se,n.stateNode));break;case 4:r=se,i=Be,se=n.stateNode.containerInfo,Be=!0,It(e,t,n),se=r,Be=i;break;case 0:case 11:case 14:case 15:if(!fe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&wl(n,t,s),i=i.next}while(i!==r)}It(e,t,n);break;case 1:if(!fe&&(Yn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){X(n,t,a)}It(e,t,n);break;case 21:It(e,t,n);break;case 22:n.mode&1?(fe=(r=fe)||n.memoizedState!==null,It(e,t,n),fe=r):It(e,t,n);break;default:It(e,t,n)}}function _f(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new iy),t.forEach(function(r){var i=py.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Fe(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,s=t,a=s;e:for(;a!==null;){switch(a.tag){case 5:se=a.stateNode,Be=!1;break e;case 3:se=a.stateNode.containerInfo,Be=!0;break e;case 4:se=a.stateNode.containerInfo,Be=!0;break e}a=a.return}if(se===null)throw Error(S(160));zp(o,s,i),se=null,Be=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){X(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Bp(t,e),t=t.sibling}function Bp(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Fe(t,e),Ge(e),r&4){try{Zr(3,e,e.return),Ps(3,e)}catch(_){X(e,e.return,_)}try{Zr(5,e,e.return)}catch(_){X(e,e.return,_)}}break;case 1:Fe(t,e),Ge(e),r&512&&n!==null&&Yn(n,n.return);break;case 5:if(Fe(t,e),Ge(e),r&512&&n!==null&&Yn(n,n.return),e.flags&32){var i=e.stateNode;try{ai(i,"")}catch(_){X(e,e.return,_)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,s=n!==null?n.memoizedProps:o,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&uh(i,o),Ka(a,s);var u=Ka(a,o);for(s=0;s<l.length;s+=2){var c=l[s],d=l[s+1];c==="style"?ph(i,d):c==="dangerouslySetInnerHTML"?dh(i,d):c==="children"?ai(i,d):au(i,c,d,u)}switch(a){case"input":Ba(i,o);break;case"textarea":ch(i,o);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var v=o.value;v!=null?Zn(i,!!o.multiple,v,!1):h!==!!o.multiple&&(o.defaultValue!=null?Zn(i,!!o.multiple,o.defaultValue,!0):Zn(i,!!o.multiple,o.multiple?[]:"",!1))}i[gi]=o}catch(_){X(e,e.return,_)}}break;case 6:if(Fe(t,e),Ge(e),r&4){if(e.stateNode===null)throw Error(S(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(_){X(e,e.return,_)}}break;case 3:if(Fe(t,e),Ge(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{fi(t.containerInfo)}catch(_){X(e,e.return,_)}break;case 4:Fe(t,e),Ge(e);break;case 13:Fe(t,e),Ge(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(zu=Z())),r&4&&_f(e);break;case 22:if(c=n!==null&&n.memoizedState!==null,e.mode&1?(fe=(u=fe)||c,Fe(t,e),fe=u):Fe(t,e),Ge(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!c&&e.mode&1)for(P=e,c=e.child;c!==null;){for(d=P=c;P!==null;){switch(h=P,v=h.child,h.tag){case 0:case 11:case 14:case 15:Zr(4,h,h.return);break;case 1:Yn(h,h.return);var w=h.stateNode;if(typeof w.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch(_){X(r,n,_)}}break;case 5:Yn(h,h.return);break;case 22:if(h.memoizedState!==null){Sf(d);continue}}v!==null?(v.return=h,P=v):Sf(d)}c=c.sibling}e:for(c=null,d=e;;){if(d.tag===5){if(c===null){c=d;try{i=d.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=d.stateNode,l=d.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=hh("display",s))}catch(_){X(e,e.return,_)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(_){X(e,e.return,_)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Fe(t,e),Ge(e),r&4&&_f(e);break;case 21:break;default:Fe(t,e),Ge(e)}}function Ge(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Fp(n)){var r=n;break e}n=n.return}throw Error(S(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ai(i,""),r.flags&=-33);var o=wf(e);Sl(e,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,a=wf(e);El(e,a,s);break;default:throw Error(S(161))}}catch(l){X(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function sy(e,t,n){P=e,$p(e)}function $p(e,t,n){for(var r=(e.mode&1)!==0;P!==null;){var i=P,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||lo;if(!s){var a=i.alternate,l=a!==null&&a.memoizedState!==null||fe;a=lo;var u=fe;if(lo=s,(fe=l)&&!u)for(P=i;P!==null;)s=P,l=s.child,s.tag===22&&s.memoizedState!==null?kf(i):l!==null?(l.return=s,P=l):kf(i);for(;o!==null;)P=o,$p(o),o=o.sibling;P=i,lo=a,fe=u}Ef(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,P=o):Ef(e)}}function Ef(e){for(;P!==null;){var t=P;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:fe||Ps(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!fe)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:ze(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&of(t,o,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}of(t,s,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&fi(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(S(163))}fe||t.flags&512&&_l(t)}catch(h){X(t,t.return,h)}}if(t===e){P=null;break}if(n=t.sibling,n!==null){n.return=t.return,P=n;break}P=t.return}}function Sf(e){for(;P!==null;){var t=P;if(t===e){P=null;break}var n=t.sibling;if(n!==null){n.return=t.return,P=n;break}P=t.return}}function kf(e){for(;P!==null;){var t=P;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Ps(4,t)}catch(l){X(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){X(t,i,l)}}var o=t.return;try{_l(t)}catch(l){X(t,o,l)}break;case 5:var s=t.return;try{_l(t)}catch(l){X(t,s,l)}}}catch(l){X(t,t.return,l)}if(t===e){P=null;break}var a=t.sibling;if(a!==null){a.return=t.return,P=a;break}P=t.return}}var ay=Math.ceil,qo=St.ReactCurrentDispatcher,Uu=St.ReactCurrentOwner,Me=St.ReactCurrentBatchConfig,j=0,oe=null,ee=null,ae=0,xe=0,Qn=on(0),ne=0,Si=null,Pn=0,Ts=0,Fu=0,ei=null,ye=null,zu=0,gr=1/0,ot=null,Jo=!1,kl=null,Wt=null,uo=!1,jt=null,Zo=0,ti=0,xl=null,ko=-1,xo=0;function pe(){return j&6?Z():ko!==-1?ko:ko=Z()}function Kt(e){return e.mode&1?j&2&&ae!==0?ae&-ae:V0.transition!==null?(xo===0&&(xo=Ch()),xo):(e=U,e!==0||(e=window.event,e=e===void 0?16:Rh(e.type)),e):1}function Ve(e,t,n,r){if(50<ti)throw ti=0,xl=null,Error(S(185));bi(e,n,r),(!(j&2)||e!==oe)&&(e===oe&&(!(j&2)&&(Ts|=n),ne===4&&At(e,ae)),Se(e,r),n===1&&j===0&&!(t.mode&1)&&(gr=Z()+500,xs&&sn()))}function Se(e,t){var n=e.callbackNode;Vv(e,t);var r=Mo(e,e===oe?ae:0);if(r===0)n!==null&&Ac(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Ac(n),t===1)e.tag===0?H0(xf.bind(null,e)):Jh(xf.bind(null,e)),F0(function(){!(j&6)&&sn()}),n=null;else{switch(Ph(r)){case 1:n=du;break;case 4:n=xh;break;case 16:n=Do;break;case 536870912:n=Ih;break;default:n=Do}n=Xp(n,Hp.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Hp(e,t){if(ko=-1,xo=0,j&6)throw Error(S(327));var n=e.callbackNode;if(ir()&&e.callbackNode!==n)return null;var r=Mo(e,e===oe?ae:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=es(e,r);else{t=r;var i=j;j|=2;var o=Wp();(oe!==e||ae!==t)&&(ot=null,gr=Z()+500,_n(e,t));do try{cy();break}catch(a){Vp(e,a)}while(!0);Iu(),qo.current=o,j=i,ee!==null?t=0:(oe=null,ae=0,t=ne)}if(t!==0){if(t===2&&(i=qa(e),i!==0&&(r=i,t=Il(e,i))),t===1)throw n=Si,_n(e,0),At(e,r),Se(e,Z()),n;if(t===6)At(e,r);else{if(i=e.current.alternate,!(r&30)&&!ly(i)&&(t=es(e,r),t===2&&(o=qa(e),o!==0&&(r=o,t=Il(e,o))),t===1))throw n=Si,_n(e,0),At(e,r),Se(e,Z()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(S(345));case 2:pn(e,ye,ot);break;case 3:if(At(e,r),(r&130023424)===r&&(t=zu+500-Z(),10<t)){if(Mo(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){pe(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=ol(pn.bind(null,e,ye,ot),t);break}pn(e,ye,ot);break;case 4:if(At(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var s=31-He(r);o=1<<s,s=t[s],s>i&&(i=s),r&=~o}if(r=i,r=Z()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*ay(r/1960))-r,10<r){e.timeoutHandle=ol(pn.bind(null,e,ye,ot),r);break}pn(e,ye,ot);break;case 5:pn(e,ye,ot);break;default:throw Error(S(329))}}}return Se(e,Z()),e.callbackNode===n?Hp.bind(null,e):null}function Il(e,t){var n=ei;return e.current.memoizedState.isDehydrated&&(_n(e,t).flags|=256),e=es(e,t),e!==2&&(t=ye,ye=n,t!==null&&Cl(t)),e}function Cl(e){ye===null?ye=e:ye.push.apply(ye,e)}function ly(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!We(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function At(e,t){for(t&=~Fu,t&=~Ts,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-He(t),r=1<<n;e[n]=-1,t&=~r}}function xf(e){if(j&6)throw Error(S(327));ir();var t=Mo(e,0);if(!(t&1))return Se(e,Z()),null;var n=es(e,t);if(e.tag!==0&&n===2){var r=qa(e);r!==0&&(t=r,n=Il(e,r))}if(n===1)throw n=Si,_n(e,0),At(e,t),Se(e,Z()),n;if(n===6)throw Error(S(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,pn(e,ye,ot),Se(e,Z()),null}function Bu(e,t){var n=j;j|=1;try{return e(t)}finally{j=n,j===0&&(gr=Z()+500,xs&&sn())}}function Tn(e){jt!==null&&jt.tag===0&&!(j&6)&&ir();var t=j;j|=1;var n=Me.transition,r=U;try{if(Me.transition=null,U=1,e)return e()}finally{U=r,Me.transition=n,j=t,!(j&6)&&sn()}}function $u(){xe=Qn.current,H(Qn)}function _n(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,U0(n)),ee!==null)for(n=ee.return;n!==null;){var r=n;switch(Su(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Bo();break;case 3:pr(),H(_e),H(de),Au();break;case 5:Ou(r);break;case 4:pr();break;case 13:H(G);break;case 19:H(G);break;case 10:Cu(r.type._context);break;case 22:case 23:$u()}n=n.return}if(oe=e,ee=e=Gt(e.current,null),ae=xe=t,ne=0,Si=null,Fu=Ts=Pn=0,ye=ei=null,yn!==null){for(t=0;t<yn.length;t++)if(n=yn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}yn=null}return e}function Vp(e,t){do{var n=ee;try{if(Iu(),_o.current=Xo,Qo){for(var r=Y.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Qo=!1}if(Cn=0,ie=te=Y=null,Jr=!1,wi=0,Uu.current=null,n===null||n.return===null){ne=1,Si=t,ee=null;break}e:{var o=e,s=n.return,a=n,l=t;if(t=ae,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var h=c.alternate;h?(c.updateQueue=h.updateQueue,c.memoizedState=h.memoizedState,c.lanes=h.lanes):(c.updateQueue=null,c.memoizedState=null)}var v=ff(s);if(v!==null){v.flags&=-257,df(v,s,a,o,t),v.mode&1&&cf(o,u,t),t=v,l=u;var w=t.updateQueue;if(w===null){var _=new Set;_.add(l),t.updateQueue=_}else w.add(l);break e}else{if(!(t&1)){cf(o,u,t),Hu();break e}l=Error(S(426))}}else if(W&&a.mode&1){var E=ff(s);if(E!==null){!(E.flags&65536)&&(E.flags|=256),df(E,s,a,o,t),ku(mr(l,a));break e}}o=l=mr(l,a),ne!==4&&(ne=2),ei===null?ei=[o]:ei.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var p=Pp(o,l,t);rf(o,p);break e;case 1:a=l;var f=o.type,m=o.stateNode;if(!(o.flags&128)&&(typeof f.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Wt===null||!Wt.has(m)))){o.flags|=65536,t&=-t,o.lanes|=t;var y=Tp(o,a,t);rf(o,y);break e}}o=o.return}while(o!==null)}Gp(n)}catch(k){t=k,ee===n&&n!==null&&(ee=n=n.return);continue}break}while(!0)}function Wp(){var e=qo.current;return qo.current=Xo,e===null?Xo:e}function Hu(){(ne===0||ne===3||ne===2)&&(ne=4),oe===null||!(Pn&268435455)&&!(Ts&268435455)||At(oe,ae)}function es(e,t){var n=j;j|=2;var r=Wp();(oe!==e||ae!==t)&&(ot=null,_n(e,t));do try{uy();break}catch(i){Vp(e,i)}while(!0);if(Iu(),j=n,qo.current=r,ee!==null)throw Error(S(261));return oe=null,ae=0,ne}function uy(){for(;ee!==null;)Kp(ee)}function cy(){for(;ee!==null&&!Dv();)Kp(ee)}function Kp(e){var t=Qp(e.alternate,e,xe);e.memoizedProps=e.pendingProps,t===null?Gp(e):ee=t,Uu.current=null}function Gp(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=ry(n,t),n!==null){n.flags&=32767,ee=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ne=6,ee=null;return}}else if(n=ny(n,t,xe),n!==null){ee=n;return}if(t=t.sibling,t!==null){ee=t;return}ee=t=e}while(t!==null);ne===0&&(ne=5)}function pn(e,t,n){var r=U,i=Me.transition;try{Me.transition=null,U=1,fy(e,t,n,r)}finally{Me.transition=i,U=r}return null}function fy(e,t,n,r){do ir();while(jt!==null);if(j&6)throw Error(S(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(S(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Wv(e,o),e===oe&&(ee=oe=null,ae=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||uo||(uo=!0,Xp(Do,function(){return ir(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Me.transition,Me.transition=null;var s=U;U=1;var a=j;j|=4,Uu.current=null,oy(e,n),Bp(n,e),A0(rl),jo=!!nl,rl=nl=null,e.current=n,sy(n),Mv(),j=a,U=s,Me.transition=o}else e.current=n;if(uo&&(uo=!1,jt=e,Zo=i),o=e.pendingLanes,o===0&&(Wt=null),Fv(n.stateNode),Se(e,Z()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Jo)throw Jo=!1,e=kl,kl=null,e;return Zo&1&&e.tag!==0&&ir(),o=e.pendingLanes,o&1?e===xl?ti++:(ti=0,xl=e):ti=0,sn(),null}function ir(){if(jt!==null){var e=Ph(Zo),t=Me.transition,n=U;try{if(Me.transition=null,U=16>e?16:e,jt===null)var r=!1;else{if(e=jt,jt=null,Zo=0,j&6)throw Error(S(331));var i=j;for(j|=4,P=e.current;P!==null;){var o=P,s=o.child;if(P.flags&16){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(P=u;P!==null;){var c=P;switch(c.tag){case 0:case 11:case 15:Zr(8,c,o)}var d=c.child;if(d!==null)d.return=c,P=d;else for(;P!==null;){c=P;var h=c.sibling,v=c.return;if(Up(c),c===u){P=null;break}if(h!==null){h.return=v,P=h;break}P=v}}}var w=o.alternate;if(w!==null){var _=w.child;if(_!==null){w.child=null;do{var E=_.sibling;_.sibling=null,_=E}while(_!==null)}}P=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,P=s;else e:for(;P!==null;){if(o=P,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Zr(9,o,o.return)}var p=o.sibling;if(p!==null){p.return=o.return,P=p;break e}P=o.return}}var f=e.current;for(P=f;P!==null;){s=P;var m=s.child;if(s.subtreeFlags&2064&&m!==null)m.return=s,P=m;else e:for(s=f;P!==null;){if(a=P,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Ps(9,a)}}catch(k){X(a,a.return,k)}if(a===s){P=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,P=y;break e}P=a.return}}if(j=i,sn(),et&&typeof et.onPostCommitFiberRoot=="function")try{et.onPostCommitFiberRoot(ws,e)}catch{}r=!0}return r}finally{U=n,Me.transition=t}}return!1}function If(e,t,n){t=mr(n,t),t=Pp(e,t,1),e=Vt(e,t,1),t=pe(),e!==null&&(bi(e,1,t),Se(e,t))}function X(e,t,n){if(e.tag===3)If(e,e,n);else for(;t!==null;){if(t.tag===3){If(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Wt===null||!Wt.has(r))){e=mr(n,e),e=Tp(t,e,1),t=Vt(t,e,1),e=pe(),t!==null&&(bi(t,1,e),Se(t,e));break}}t=t.return}}function dy(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=pe(),e.pingedLanes|=e.suspendedLanes&n,oe===e&&(ae&n)===n&&(ne===4||ne===3&&(ae&130023424)===ae&&500>Z()-zu?_n(e,0):Fu|=n),Se(e,t)}function Yp(e,t){t===0&&(e.mode&1?(t=Zi,Zi<<=1,!(Zi&130023424)&&(Zi=4194304)):t=1);var n=pe();e=gt(e,t),e!==null&&(bi(e,t,n),Se(e,n))}function hy(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Yp(e,n)}function py(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(S(314))}r!==null&&r.delete(t),Yp(e,n)}var Qp;Qp=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||_e.current)we=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return we=!1,ty(e,t,n);we=!!(e.flags&131072)}else we=!1,W&&t.flags&1048576&&Zh(t,Vo,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;So(e,t),e=t.pendingProps;var i=fr(t,de.current);rr(t,n),i=Ru(null,t,r,e,i,n);var o=Lu();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ee(r)?(o=!0,$o(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Tu(t),i.updater=Cs,t.stateNode=i,i._reactInternals=t,dl(t,r,e,n),t=ml(null,t,r,!0,o,n)):(t.tag=0,W&&o&&Eu(t),he(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(So(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=gy(r),e=ze(r,e),i){case 0:t=pl(null,t,r,e,n);break e;case 1:t=mf(null,t,r,e,n);break e;case 11:t=hf(null,t,r,e,n);break e;case 14:t=pf(null,t,r,ze(r.type,e),n);break e}throw Error(S(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ze(r,i),pl(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ze(r,i),mf(e,t,r,i,n);case 3:e:{if(bp(t),e===null)throw Error(S(387));r=t.pendingProps,o=t.memoizedState,i=o.element,op(e,t),Go(t,r,null,n);var s=t.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=mr(Error(S(423)),t),t=gf(e,t,r,n,i);break e}else if(r!==i){i=mr(Error(S(424)),t),t=gf(e,t,r,n,i);break e}else for(Ie=Ht(t.stateNode.containerInfo.firstChild),Ce=t,W=!0,$e=null,n=rp(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(dr(),r===i){t=vt(e,t,n);break e}he(e,t,r,n)}t=t.child}return t;case 5:return sp(t),e===null&&ul(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,s=i.children,il(r,i)?s=null:o!==null&&il(r,o)&&(t.flags|=32),Ap(e,t),he(e,t,s,n),t.child;case 6:return e===null&&ul(t),null;case 13:return Rp(e,t,n);case 4:return Nu(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=hr(t,null,r,n):he(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ze(r,i),hf(e,t,r,i,n);case 7:return he(e,t,t.pendingProps,n),t.child;case 8:return he(e,t,t.pendingProps.children,n),t.child;case 12:return he(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,s=i.value,B(Wo,r._currentValue),r._currentValue=s,o!==null)if(We(o.value,s)){if(o.children===i.children&&!_e.current){t=vt(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(o.tag===1){l=ht(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),cl(o.return,n,t),a.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===t.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(S(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),cl(s,n,t),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}he(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,rr(t,n),i=je(i),r=r(i),t.flags|=1,he(e,t,r,n),t.child;case 14:return r=t.type,i=ze(r,t.pendingProps),i=ze(r.type,i),pf(e,t,r,i,n);case 15:return Np(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ze(r,i),So(e,t),t.tag=1,Ee(r)?(e=!0,$o(t)):e=!1,rr(t,n),Cp(t,r,i),dl(t,r,i,n),ml(null,t,r,!0,e,n);case 19:return Lp(e,t,n);case 22:return Op(e,t,n)}throw Error(S(156,t.tag))};function Xp(e,t){return kh(e,t)}function my(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function De(e,t,n,r){return new my(e,t,n,r)}function Vu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function gy(e){if(typeof e=="function")return Vu(e)?1:0;if(e!=null){if(e=e.$$typeof,e===uu)return 11;if(e===cu)return 14}return 2}function Gt(e,t){var n=e.alternate;return n===null?(n=De(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Io(e,t,n,r,i,o){var s=2;if(r=e,typeof e=="function")Vu(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case Fn:return En(n.children,i,o,t);case lu:s=8,i|=8;break;case Ma:return e=De(12,n,t,i|2),e.elementType=Ma,e.lanes=o,e;case ja:return e=De(13,n,t,i),e.elementType=ja,e.lanes=o,e;case Ua:return e=De(19,n,t,i),e.elementType=Ua,e.lanes=o,e;case sh:return Ns(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ih:s=10;break e;case oh:s=9;break e;case uu:s=11;break e;case cu:s=14;break e;case Tt:s=16,r=null;break e}throw Error(S(130,e==null?e:typeof e,""))}return t=De(s,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function En(e,t,n,r){return e=De(7,e,r,t),e.lanes=n,e}function Ns(e,t,n,r){return e=De(22,e,r,t),e.elementType=sh,e.lanes=n,e.stateNode={isHidden:!1},e}function ya(e,t,n){return e=De(6,e,null,t),e.lanes=n,e}function wa(e,t,n){return t=De(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function vy(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Zs(0),this.expirationTimes=Zs(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Zs(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Wu(e,t,n,r,i,o,s,a,l){return e=new vy(e,t,n,a,l),t===1?(t=1,o===!0&&(t|=8)):t=0,o=De(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Tu(o),e}function yy(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Un,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function qp(e){if(!e)return Zt;e=e._reactInternals;e:{if(Rn(e)!==e||e.tag!==1)throw Error(S(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ee(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(S(171))}if(e.tag===1){var n=e.type;if(Ee(n))return qh(e,n,t)}return t}function Jp(e,t,n,r,i,o,s,a,l){return e=Wu(n,r,!0,e,i,o,s,a,l),e.context=qp(null),n=e.current,r=pe(),i=Kt(n),o=ht(r,i),o.callback=t??null,Vt(n,o,i),e.current.lanes=i,bi(e,i,r),Se(e,r),e}function Os(e,t,n,r){var i=t.current,o=pe(),s=Kt(i);return n=qp(n),t.context===null?t.context=n:t.pendingContext=n,t=ht(o,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Vt(i,t,s),e!==null&&(Ve(e,i,s,o),wo(e,i,s)),s}function ts(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Cf(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ku(e,t){Cf(e,t),(e=e.alternate)&&Cf(e,t)}function wy(){return null}var Zp=typeof reportError=="function"?reportError:function(e){console.error(e)};function Gu(e){this._internalRoot=e}As.prototype.render=Gu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(S(409));Os(e,t,null,null)};As.prototype.unmount=Gu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Tn(function(){Os(null,e,null,null)}),t[mt]=null}};function As(e){this._internalRoot=e}As.prototype.unstable_scheduleHydration=function(e){if(e){var t=Oh();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Ot.length&&t!==0&&t<Ot[n].priority;n++);Ot.splice(n,0,e),n===0&&bh(e)}};function Yu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function bs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Pf(){}function _y(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=ts(s);o.call(u)}}var s=Jp(t,r,e,0,null,!1,!1,"",Pf);return e._reactRootContainer=s,e[mt]=s.current,pi(e.nodeType===8?e.parentNode:e),Tn(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=ts(l);a.call(u)}}var l=Wu(e,0,!1,null,null,!1,!1,"",Pf);return e._reactRootContainer=l,e[mt]=l.current,pi(e.nodeType===8?e.parentNode:e),Tn(function(){Os(t,l,n,r)}),l}function Rs(e,t,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var a=i;i=function(){var l=ts(s);a.call(l)}}Os(t,s,e,i)}else s=_y(n,t,e,i,r);return ts(s)}Th=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Br(t.pendingLanes);n!==0&&(hu(t,n|1),Se(t,Z()),!(j&6)&&(gr=Z()+500,sn()))}break;case 13:Tn(function(){var r=gt(e,1);if(r!==null){var i=pe();Ve(r,e,1,i)}}),Ku(e,1)}};pu=function(e){if(e.tag===13){var t=gt(e,134217728);if(t!==null){var n=pe();Ve(t,e,134217728,n)}Ku(e,134217728)}};Nh=function(e){if(e.tag===13){var t=Kt(e),n=gt(e,t);if(n!==null){var r=pe();Ve(n,e,t,r)}Ku(e,t)}};Oh=function(){return U};Ah=function(e,t){var n=U;try{return U=e,t()}finally{U=n}};Ya=function(e,t,n){switch(t){case"input":if(Ba(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=ks(r);if(!i)throw Error(S(90));lh(r),Ba(r,i)}}}break;case"textarea":ch(e,n);break;case"select":t=n.value,t!=null&&Zn(e,!!n.multiple,t,!1)}};vh=Bu;yh=Tn;var Ey={usingClientEntryPoint:!1,Events:[Li,Hn,ks,mh,gh,Bu]},Ur={findFiberByHostInstance:vn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Sy={bundleType:Ur.bundleType,version:Ur.version,rendererPackageName:Ur.rendererPackageName,rendererConfig:Ur.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:St.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Eh(e),e===null?null:e.stateNode},findFiberByHostInstance:Ur.findFiberByHostInstance||wy,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var co=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!co.isDisabled&&co.supportsFiber)try{ws=co.inject(Sy),et=co}catch{}}Oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ey;Oe.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Yu(t))throw Error(S(200));return yy(e,t,null,n)};Oe.createRoot=function(e,t){if(!Yu(e))throw Error(S(299));var n=!1,r="",i=Zp;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Wu(e,1,!1,null,null,n,!1,r,i),e[mt]=t.current,pi(e.nodeType===8?e.parentNode:e),new Gu(t)};Oe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(S(188)):(e=Object.keys(e).join(","),Error(S(268,e)));return e=Eh(t),e=e===null?null:e.stateNode,e};Oe.flushSync=function(e){return Tn(e)};Oe.hydrate=function(e,t,n){if(!bs(t))throw Error(S(200));return Rs(null,e,t,!0,n)};Oe.hydrateRoot=function(e,t,n){if(!Yu(e))throw Error(S(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=Zp;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=Jp(t,null,e,1,n??null,i,!1,o,s),e[mt]=t.current,pi(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new As(t)};Oe.render=function(e,t,n){if(!bs(t))throw Error(S(200));return Rs(null,e,t,!1,n)};Oe.unmountComponentAtNode=function(e){if(!bs(e))throw Error(S(40));return e._reactRootContainer?(Tn(function(){Rs(null,null,e,!1,function(){e._reactRootContainer=null,e[mt]=null})}),!0):!1};Oe.unstable_batchedUpdates=Bu;Oe.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!bs(n))throw Error(S(200));if(e==null||e._reactInternals===void 0)throw Error(S(38));return Rs(e,t,n,!1,r)};Oe.version="18.3.1-next-f1338f8080-20240426";function em(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(em)}catch(e){console.error(e)}}em(),eh.exports=Oe;var ky=eh.exports,tm,Tf=ky;tm=Tf.createRoot,Tf.hydrateRoot;/**
 * @remix-run/router v1.20.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ki(){return ki=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ki.apply(this,arguments)}var Ut;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Ut||(Ut={}));const Nf="popstate";function xy(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:s,hash:a}=r.location;return Pl("",{pathname:o,search:s,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:ns(i)}return Cy(t,n,null,e)}function q(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function nm(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Iy(){return Math.random().toString(36).substr(2,8)}function Of(e,t){return{usr:e.state,key:e.key,idx:t}}function Pl(e,t,n,r){return n===void 0&&(n=null),ki({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Ir(t):t,{state:n,key:t&&t.key||r||Iy()})}function ns(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Ir(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Cy(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,s=i.history,a=Ut.Pop,l=null,u=c();u==null&&(u=0,s.replaceState(ki({},s.state,{idx:u}),""));function c(){return(s.state||{idx:null}).idx}function d(){a=Ut.Pop;let E=c(),p=E==null?null:E-u;u=E,l&&l({action:a,location:_.location,delta:p})}function h(E,p){a=Ut.Push;let f=Pl(_.location,E,p);u=c()+1;let m=Of(f,u),y=_.createHref(f);try{s.pushState(m,"",y)}catch(k){if(k instanceof DOMException&&k.name==="DataCloneError")throw k;i.location.assign(y)}o&&l&&l({action:a,location:_.location,delta:1})}function v(E,p){a=Ut.Replace;let f=Pl(_.location,E,p);u=c();let m=Of(f,u),y=_.createHref(f);s.replaceState(m,"",y),o&&l&&l({action:a,location:_.location,delta:0})}function w(E){let p=i.location.origin!=="null"?i.location.origin:i.location.href,f=typeof E=="string"?E:ns(E);return f=f.replace(/ $/,"%20"),q(p,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,p)}let _={get action(){return a},get location(){return e(i,s)},listen(E){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(Nf,d),l=E,()=>{i.removeEventListener(Nf,d),l=null}},createHref(E){return t(i,E)},createURL:w,encodeLocation(E){let p=w(E);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:h,replace:v,go(E){return s.go(E)}};return _}var Af;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Af||(Af={}));function Py(e,t,n){return n===void 0&&(n="/"),Ty(e,t,n,!1)}function Ty(e,t,n,r){let i=typeof t=="string"?Ir(t):t,o=vr(i.pathname||"/",n);if(o==null)return null;let s=rm(e);Ny(s);let a=null;for(let l=0;a==null&&l<s.length;++l){let u=zy(o);a=Uy(s[l],u,r)}return a}function rm(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,s,a)=>{let l={relativePath:a===void 0?o.path||"":a,caseSensitive:o.caseSensitive===!0,childrenIndex:s,route:o};l.relativePath.startsWith("/")&&(q(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=Yt([r,l.relativePath]),c=n.concat(l);o.children&&o.children.length>0&&(q(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),rm(o.children,t,c,u)),!(o.path==null&&!o.index)&&t.push({path:u,score:My(u,o.index),routesMeta:c})};return e.forEach((o,s)=>{var a;if(o.path===""||!((a=o.path)!=null&&a.includes("?")))i(o,s);else for(let l of im(o.path))i(o,s,l)}),t}function im(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let s=im(r.join("/")),a=[];return a.push(...s.map(l=>l===""?o:[o,l].join("/"))),i&&a.push(...s),a.map(l=>e.startsWith("/")&&l===""?"/":l)}function Ny(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:jy(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Oy=/^:[\w-]+$/,Ay=3,by=2,Ry=1,Ly=10,Dy=-2,bf=e=>e==="*";function My(e,t){let n=e.split("/"),r=n.length;return n.some(bf)&&(r+=Dy),t&&(r+=by),n.filter(i=>!bf(i)).reduce((i,o)=>i+(Oy.test(o)?Ay:o===""?Ry:Ly),r)}function jy(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function Uy(e,t,n){let{routesMeta:r}=e,i={},o="/",s=[];for(let a=0;a<r.length;++a){let l=r[a],u=a===r.length-1,c=o==="/"?t:t.slice(o.length)||"/",d=rs({path:l.relativePath,caseSensitive:l.caseSensitive,end:u},c),h=l.route;if(!d&&u&&n&&!r[r.length-1].route.index&&(d=rs({path:l.relativePath,caseSensitive:l.caseSensitive,end:!1},c)),!d)return null;Object.assign(i,d.params),s.push({params:i,pathname:Yt([o,d.pathname]),pathnameBase:Vy(Yt([o,d.pathnameBase])),route:h}),d.pathnameBase!=="/"&&(o=Yt([o,d.pathnameBase]))}return s}function rs(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Fy(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],s=o.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,d)=>{let{paramName:h,isOptional:v}=c;if(h==="*"){let _=a[d]||"";s=o.slice(0,o.length-_.length).replace(/(.)\/+$/,"$1")}const w=a[d];return v&&!w?u[h]=void 0:u[h]=(w||"").replace(/%2F/g,"/"),u},{}),pathname:o,pathnameBase:s,pattern:e}}function Fy(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),nm(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function zy(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return nm(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function vr(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function By(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Ir(e):e;return{pathname:n?n.startsWith("/")?n:$y(n,t):t,search:Wy(r),hash:Ky(i)}}function $y(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function _a(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Hy(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function om(e,t){let n=Hy(e);return t?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function sm(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=Ir(e):(i=ki({},e),q(!i.pathname||!i.pathname.includes("?"),_a("?","pathname","search",i)),q(!i.pathname||!i.pathname.includes("#"),_a("#","pathname","hash",i)),q(!i.search||!i.search.includes("#"),_a("#","search","hash",i)));let o=e===""||i.pathname==="",s=o?"/":i.pathname,a;if(s==null)a=n;else{let d=t.length-1;if(!r&&s.startsWith("..")){let h=s.split("/");for(;h[0]==="..";)h.shift(),d-=1;i.pathname=h.join("/")}a=d>=0?t[d]:"/"}let l=By(i,a),u=s&&s!=="/"&&s.endsWith("/"),c=(o||s===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const Yt=e=>e.join("/").replace(/\/\/+/g,"/"),Vy=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Wy=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Ky=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Gy(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const am=["post","put","patch","delete"];new Set(am);const Yy=["get",...am];new Set(Yy);/**
 * React Router v6.27.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function xi(){return xi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},xi.apply(this,arguments)}const Ls=x.createContext(null),lm=x.createContext(null),an=x.createContext(null),Ds=x.createContext(null),ln=x.createContext({outlet:null,matches:[],isDataRoute:!1}),um=x.createContext(null);function Qy(e,t){let{relative:n}=t===void 0?{}:t;Mi()||q(!1);let{basename:r,navigator:i}=x.useContext(an),{hash:o,pathname:s,search:a}=Ms(e,{relative:n}),l=s;return r!=="/"&&(l=s==="/"?r:Yt([r,s])),i.createHref({pathname:l,search:a,hash:o})}function Mi(){return x.useContext(Ds)!=null}function ji(){return Mi()||q(!1),x.useContext(Ds).location}function cm(e){x.useContext(an).static||x.useLayoutEffect(e)}function Xy(){let{isDataRoute:e}=x.useContext(ln);return e?c1():qy()}function qy(){Mi()||q(!1);let e=x.useContext(Ls),{basename:t,future:n,navigator:r}=x.useContext(an),{matches:i}=x.useContext(ln),{pathname:o}=ji(),s=JSON.stringify(om(i,n.v7_relativeSplatPath)),a=x.useRef(!1);return cm(()=>{a.current=!0}),x.useCallback(function(u,c){if(c===void 0&&(c={}),!a.current)return;if(typeof u=="number"){r.go(u);return}let d=sm(u,JSON.parse(s),o,c.relative==="path");e==null&&t!=="/"&&(d.pathname=d.pathname==="/"?t:Yt([t,d.pathname])),(c.replace?r.replace:r.push)(d,c.state,c)},[t,r,s,o,e])}function Jy(){let{matches:e}=x.useContext(ln),t=e[e.length-1];return t?t.params:{}}function Ms(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=x.useContext(an),{matches:i}=x.useContext(ln),{pathname:o}=ji(),s=JSON.stringify(om(i,r.v7_relativeSplatPath));return x.useMemo(()=>sm(e,JSON.parse(s),o,n==="path"),[e,s,o,n])}function Zy(e,t){return e1(e,t)}function e1(e,t,n,r){Mi()||q(!1);let{navigator:i}=x.useContext(an),{matches:o}=x.useContext(ln),s=o[o.length-1],a=s?s.params:{};s&&s.pathname;let l=s?s.pathnameBase:"/";s&&s.route;let u=ji(),c;if(t){var d;let E=typeof t=="string"?Ir(t):t;l==="/"||(d=E.pathname)!=null&&d.startsWith(l)||q(!1),c=E}else c=u;let h=c.pathname||"/",v=h;if(l!=="/"){let E=l.replace(/^\//,"").split("/");v="/"+h.replace(/^\//,"").split("/").slice(E.length).join("/")}let w=Py(e,{pathname:v}),_=o1(w&&w.map(E=>Object.assign({},E,{params:Object.assign({},a,E.params),pathname:Yt([l,i.encodeLocation?i.encodeLocation(E.pathname).pathname:E.pathname]),pathnameBase:E.pathnameBase==="/"?l:Yt([l,i.encodeLocation?i.encodeLocation(E.pathnameBase).pathname:E.pathnameBase])})),o,n,r);return t&&_?x.createElement(Ds.Provider,{value:{location:xi({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:Ut.Pop}},_):_}function t1(){let e=u1(),t=Gy(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return x.createElement(x.Fragment,null,x.createElement("h2",null,"Unexpected Application Error!"),x.createElement("h3",{style:{fontStyle:"italic"}},t),n?x.createElement("pre",{style:i},n):null,null)}const n1=x.createElement(t1,null);class r1 extends x.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?x.createElement(ln.Provider,{value:this.props.routeContext},x.createElement(um.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function i1(e){let{routeContext:t,match:n,children:r}=e,i=x.useContext(Ls);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),x.createElement(ln.Provider,{value:t},r)}function o1(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var o;if(!n)return null;if(n.errors)e=n.matches;else if((o=r)!=null&&o.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let s=e,a=(i=n)==null?void 0:i.errors;if(a!=null){let c=s.findIndex(d=>d.route.id&&(a==null?void 0:a[d.route.id])!==void 0);c>=0||q(!1),s=s.slice(0,Math.min(s.length,c+1))}let l=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let c=0;c<s.length;c++){let d=s[c];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(u=c),d.route.id){let{loaderData:h,errors:v}=n,w=d.route.loader&&h[d.route.id]===void 0&&(!v||v[d.route.id]===void 0);if(d.route.lazy||w){l=!0,u>=0?s=s.slice(0,u+1):s=[s[0]];break}}}return s.reduceRight((c,d,h)=>{let v,w=!1,_=null,E=null;n&&(v=a&&d.route.id?a[d.route.id]:void 0,_=d.route.errorElement||n1,l&&(u<0&&h===0?(w=!0,E=null):u===h&&(w=!0,E=d.route.hydrateFallbackElement||null)));let p=t.concat(s.slice(0,h+1)),f=()=>{let m;return v?m=_:w?m=E:d.route.Component?m=x.createElement(d.route.Component,null):d.route.element?m=d.route.element:m=c,x.createElement(i1,{match:d,routeContext:{outlet:c,matches:p,isDataRoute:n!=null},children:m})};return n&&(d.route.ErrorBoundary||d.route.errorElement||h===0)?x.createElement(r1,{location:n.location,revalidation:n.revalidation,component:_,error:v,children:f(),routeContext:{outlet:null,matches:p,isDataRoute:!0}}):f()},null)}var fm=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(fm||{}),is=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(is||{});function s1(e){let t=x.useContext(Ls);return t||q(!1),t}function a1(e){let t=x.useContext(lm);return t||q(!1),t}function l1(e){let t=x.useContext(ln);return t||q(!1),t}function dm(e){let t=l1(),n=t.matches[t.matches.length-1];return n.route.id||q(!1),n.route.id}function u1(){var e;let t=x.useContext(um),n=a1(is.UseRouteError),r=dm(is.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function c1(){let{router:e}=s1(fm.UseNavigateStable),t=dm(is.UseNavigateStable),n=x.useRef(!1);return cm(()=>{n.current=!0}),x.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,xi({fromRouteId:t},o)))},[e,t])}function jn(e){q(!1)}function f1(e){let{basename:t="/",children:n=null,location:r,navigationType:i=Ut.Pop,navigator:o,static:s=!1,future:a}=e;Mi()&&q(!1);let l=t.replace(/^\/*/,"/"),u=x.useMemo(()=>({basename:l,navigator:o,static:s,future:xi({v7_relativeSplatPath:!1},a)}),[l,a,o,s]);typeof r=="string"&&(r=Ir(r));let{pathname:c="/",search:d="",hash:h="",state:v=null,key:w="default"}=r,_=x.useMemo(()=>{let E=vr(c,l);return E==null?null:{location:{pathname:E,search:d,hash:h,state:v,key:w},navigationType:i}},[l,c,d,h,v,w,i]);return _==null?null:x.createElement(an.Provider,{value:u},x.createElement(Ds.Provider,{children:n,value:_}))}function d1(e){let{children:t,location:n}=e;return Zy(Tl(t),n)}new Promise(()=>{});function Tl(e,t){t===void 0&&(t=[]);let n=[];return x.Children.forEach(e,(r,i)=>{if(!x.isValidElement(r))return;let o=[...t,i];if(r.type===x.Fragment){n.push.apply(n,Tl(r.props.children,o));return}r.type!==jn&&q(!1),!r.props.index||!r.props.children||q(!1);let s={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(s.children=Tl(r.props.children,o)),n.push(s)}),n}/**
 * React Router DOM v6.27.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function os(){return os=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},os.apply(this,arguments)}function hm(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function h1(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function p1(e,t){return e.button===0&&(!t||t==="_self")&&!h1(e)}const m1=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],g1=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],v1="6";try{window.__reactRouterVersion=v1}catch{}const y1=x.createContext({isTransitioning:!1}),w1="startTransition",Rf=dv[w1];function _1(e){let{basename:t,children:n,future:r,window:i}=e,o=x.useRef();o.current==null&&(o.current=xy({window:i,v5Compat:!0}));let s=o.current,[a,l]=x.useState({action:s.action,location:s.location}),{v7_startTransition:u}=r||{},c=x.useCallback(d=>{u&&Rf?Rf(()=>l(d)):l(d)},[l,u]);return x.useLayoutEffect(()=>s.listen(c),[s,c]),x.createElement(f1,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:s,future:r})}const E1=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",S1=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,pm=x.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:o,replace:s,state:a,target:l,to:u,preventScrollReset:c,viewTransition:d}=t,h=hm(t,m1),{basename:v}=x.useContext(an),w,_=!1;if(typeof u=="string"&&S1.test(u)&&(w=u,E1))try{let m=new URL(window.location.href),y=u.startsWith("//")?new URL(m.protocol+u):new URL(u),k=vr(y.pathname,v);y.origin===m.origin&&k!=null?u=k+y.search+y.hash:_=!0}catch{}let E=Qy(u,{relative:i}),p=x1(u,{replace:s,state:a,target:l,preventScrollReset:c,relative:i,viewTransition:d});function f(m){r&&r(m),m.defaultPrevented||p(m)}return x.createElement("a",os({},h,{href:w||E,onClick:_||o?r:f,ref:n,target:l}))}),ni=x.forwardRef(function(t,n){let{"aria-current":r="page",caseSensitive:i=!1,className:o="",end:s=!1,style:a,to:l,viewTransition:u,children:c}=t,d=hm(t,g1),h=Ms(l,{relative:d.relative}),v=ji(),w=x.useContext(lm),{navigator:_,basename:E}=x.useContext(an),p=w!=null&&I1(h)&&u===!0,f=_.encodeLocation?_.encodeLocation(h).pathname:h.pathname,m=v.pathname,y=w&&w.navigation&&w.navigation.location?w.navigation.location.pathname:null;i||(m=m.toLowerCase(),y=y?y.toLowerCase():null,f=f.toLowerCase()),y&&E&&(y=vr(y,E)||y);const k=f!=="/"&&f.endsWith("/")?f.length-1:f.length;let I=m===f||!s&&m.startsWith(f)&&m.charAt(k)==="/",C=y!=null&&(y===f||!s&&y.startsWith(f)&&y.charAt(f.length)==="/"),O={isActive:I,isPending:C,isTransitioning:p},F=I?r:void 0,b;typeof o=="function"?b=o(O):b=[o,I?"active":null,C?"pending":null,p?"transitioning":null].filter(Boolean).join(" ");let ke=typeof a=="function"?a(O):a;return x.createElement(pm,os({},d,{"aria-current":F,className:b,ref:n,style:ke,to:l,viewTransition:u}),typeof c=="function"?c(O):c)});var Nl;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Nl||(Nl={}));var Lf;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Lf||(Lf={}));function k1(e){let t=x.useContext(Ls);return t||q(!1),t}function x1(e,t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:s,viewTransition:a}=t===void 0?{}:t,l=Xy(),u=ji(),c=Ms(e,{relative:s});return x.useCallback(d=>{if(p1(d,n)){d.preventDefault();let h=r!==void 0?r:ns(u)===ns(c);l(e,{replace:h,state:i,preventScrollReset:o,relative:s,viewTransition:a})}},[u,l,c,r,i,n,e,o,s,a])}function I1(e,t){t===void 0&&(t={});let n=x.useContext(y1);n==null&&q(!1);let{basename:r}=k1(Nl.useViewTransitionState),i=Ms(e,{relative:t.relative});if(!n.isTransitioning)return!1;let o=vr(n.currentLocation.pathname,r)||n.currentLocation.pathname,s=vr(n.nextLocation.pathname,r)||n.nextLocation.pathname;return rs(i.pathname,s)!=null||rs(i.pathname,o)!=null}var mm={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Df=Ze.createContext&&Ze.createContext(mm),C1=["attr","size","title"];function P1(e,t){if(e==null)return{};var n=T1(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function T1(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function ss(){return ss=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ss.apply(this,arguments)}function Mf(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function as(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Mf(Object(n),!0).forEach(function(r){N1(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Mf(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function N1(e,t,n){return t=O1(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function O1(e){var t=A1(e,"string");return typeof t=="symbol"?t:t+""}function A1(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function gm(e){return e&&e.map((t,n)=>Ze.createElement(t.tag,as({key:n},t.attr),gm(t.child)))}function Ln(e){return t=>Ze.createElement(b1,ss({attr:as({},e.attr)},t),gm(e.child))}function b1(e){var t=n=>{var{attr:r,size:i,title:o}=e,s=P1(e,C1),a=i||n.size||"1em",l;return n.className&&(l=n.className),e.className&&(l=(l?l+" ":"")+e.className),Ze.createElement("svg",ss({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,s,{className:l,style:as(as({color:e.color||n.color},n.style),e.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),o&&Ze.createElement("title",null,o),e.children)};return Df!==void 0?Ze.createElement(Df.Consumer,null,n=>t(n)):t(mm)}function R1(e){return Ln({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"},child:[]}]})(e)}function L1(e){return Ln({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"},child:[]}]})(e)}function D1(e){return Ln({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"},child:[]}]})(e)}function jf(e){return Ln({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"},child:[]}]})(e)}function M1(e){return Ln({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zM262.655 90c-54.497 0-89.255 22.957-116.549 63.758-3.536 5.286-2.353 12.415 2.715 16.258l34.699 26.31c5.205 3.947 12.621 3.008 16.665-2.122 17.864-22.658 30.113-35.797 57.303-35.797 20.429 0 45.698 13.148 45.698 32.958 0 14.976-12.363 22.667-32.534 33.976C247.128 238.528 216 254.941 216 296v4c0 6.627 5.373 12 12 12h56c6.627 0 12-5.373 12-12v-1.333c0-28.462 83.186-29.647 83.186-106.667 0-58.002-60.165-102-116.531-102zM256 338c-25.365 0-46 20.635-46 46 0 25.364 20.635 46 46 46s46-20.636 46-46c0-25.365-20.635-46-46-46z"},child:[]}]})(e)}function vm(e){return Ln({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z"},child:[]}]})(e)}function ym(e){return Ln({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M149.333 56v80c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24V56c0-13.255 10.745-24 24-24h101.333c13.255 0 24 10.745 24 24zm181.334 240v-80c0-13.255-10.745-24-24-24H205.333c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24h101.333c13.256 0 24.001-10.745 24.001-24zm32-240v80c0 13.255 10.745 24 24 24H488c13.255 0 24-10.745 24-24V56c0-13.255-10.745-24-24-24H386.667c-13.255 0-24 10.745-24 24zm-32 80V56c0-13.255-10.745-24-24-24H205.333c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24h101.333c13.256 0 24.001-10.745 24.001-24zm-205.334 56H24c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24h101.333c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24zM0 376v80c0 13.255 10.745 24 24 24h101.333c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H24c-13.255 0-24 10.745-24 24zm386.667-56H488c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H386.667c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24zm0 160H488c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H386.667c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24zM181.333 376v80c0 13.255 10.745 24 24 24h101.333c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H205.333c-13.255 0-24 10.745-24 24z"},child:[]}]})(e)}const Uf=({isDropdownOpen:e,toggleDropdown:t})=>g.jsxs("div",{className:"relative",children:[g.jsxs("button",{onClick:t,className:"hover:text-primaryBlue transition-colors flex items-center gap-2",children:[g.jsx(ym,{})," All Categories"]}),e&&g.jsxs("div",{className:"absolute top-full mt-2 bg-white text-black shadow-md rounded-md p-4 space-y-2 z-10",children:[g.jsx(ni,{to:"/category1",className:"block hover:text-primaryBlue",children:"Category 1"}),g.jsx(ni,{to:"/category2",className:"block hover:text-primaryBlue",children:"Category 2"}),g.jsx(ni,{to:"/category3",className:"block hover:text-primaryBlue",children:"Category 3"})]})]}),j1=()=>{const[e,t]=x.useState(!1),[n,r]=x.useState(!1),i=()=>t(!e),o=()=>r(!n),s=[{path:"/",label:"Home",icon:g.jsx(L1,{})},{path:"/products",label:"Products",icon:g.jsx(ym,{})},{path:"/cart",label:"Cart",icon:g.jsx(vm,{})},{path:"/help-center",label:"Help Center",icon:g.jsx(M1,{})},{path:"/contact",label:"Contact",icon:g.jsx(jf,{})},{path:"/about",label:"About",icon:g.jsx(D1,{})}];return g.jsxs("nav",{className:"bg-primaryPink text-white p-4 flex items-center shadow-md relative",children:[g.jsx("div",{className:"mr-auto",children:g.jsx(Uf,{isDropdownOpen:n,toggleDropdown:o})}),g.jsx("div",{className:"hidden md:flex space-x-6 items-center flex-grow justify-center",children:s.map(({path:a,label:l,icon:u})=>g.jsxs(ni,{to:a,className:({isActive:c})=>`flex items-center gap-2 hover:text-primaryBlue transition-colors ${c?"text-primaryBlue":""}`,children:[u," ",l]},a))}),g.jsxs("div",{className:"ml-auto hidden md:flex items-center text-lg",children:[g.jsx(jf,{className:"mr-1"})," +254 769619952"]}),g.jsx("div",{className:"md:hidden",children:g.jsx("button",{onClick:i,className:"focus:outline-none","aria-label":"Toggle mobile menu","aria-expanded":e,children:g.jsx(R1,{className:"text-xl"})})}),e&&g.jsx("div",{className:"absolute top-16 right-0 bg-primaryPink w-full md:hidden shadow-lg",children:g.jsxs("div",{className:"flex flex-col space-y-4 p-4",children:[g.jsx(Uf,{isDropdownOpen:n,toggleDropdown:o}),s.map(({path:a,label:l,icon:u})=>g.jsxs(ni,{to:a,className:({isActive:c})=>`flex items-center gap-2 hover:text-primaryBlue transition-colors ${c?"text-primaryBlue":""}`,onClick:()=>t(!1),children:[u," ",l]},a))]})})]})},U1=()=>g.jsx("footer",{className:"bg-primaryPink text-white text-center p-4 mt-8",children:g.jsxs("div",{className:"container mx-auto",children:[g.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-center",children:[g.jsxs("div",{className:"mb-4 md:mb-0",children:[g.jsx("h2",{className:"font-bold text-lg",children:"NavMed Solutions"}),g.jsx("p",{children:"Healing Every Heart"})]}),g.jsxs("div",{className:"mb-4 md:mb-0",children:[g.jsx("h3",{className:"font-semibold",children:"Contact Us"}),g.jsx("p",{children:"Dagoreti, Nairobi"}),g.jsx("p",{children:"Phone: 0769619952"}),g.jsx("p",{children:"Email: NavMedsolutions@gmail.com"})]}),g.jsxs("div",{className:"flex space-x-4",children:[g.jsx("a",{href:"https://facebook.com",target:"_blank",rel:"noopener noreferrer","aria-label":"Facebook",children:g.jsx("img",{src:"/icons/facebook-icon.svg",alt:"Facebook",className:"w-6 h-6"})}),g.jsx("a",{href:"https://twitter.com",target:"_blank",rel:"noopener noreferrer","aria-label":"Twitter",children:g.jsx("img",{src:"/icons/twitter-icon.svg",alt:"Twitter",className:"w-6 h-6"})}),g.jsx("a",{href:"https://instagram.com",target:"_blank",rel:"noopener noreferrer","aria-label":"Instagram",children:g.jsx("img",{src:"/icons/instagram-icon.svg",alt:"Instagram",className:"w-6 h-6"})})]})]}),g.jsx("p",{className:"mt-4",children:"© 2023 NavMed Solutions - All Rights Reserved"})]})}),Ff=()=>{};let Qu={},wm={},_m=null,Em={mark:Ff,measure:Ff};try{typeof window<"u"&&(Qu=window),typeof document<"u"&&(wm=document),typeof MutationObserver<"u"&&(_m=MutationObserver),typeof performance<"u"&&(Em=performance)}catch{}const{userAgent:zf=""}=Qu.navigator||{},en=Qu,V=wm,Bf=_m,fo=Em;en.document;const kt=!!V.documentElement&&!!V.head&&typeof V.addEventListener=="function"&&typeof V.createElement=="function",Sm=~zf.indexOf("MSIE")||~zf.indexOf("Trident/");var K="classic",km="duotone",Pe="sharp",Te="sharp-duotone",F1=[K,km,Pe,Te],z1={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds"}},$f={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},B1=["kit"],$1=/fa(s|r|l|t|d|b|k|kd|ss|sr|sl|st|sds)?[\-\ ]/,H1=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,V1={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},W1={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds"}},K1={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds"}},G1={classic:["fas","far","fal","fat"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds"]},Y1={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid"}},Q1={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds"}},xm={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid"}},X1=["solid","regular","light","thin","duotone","brands"],Im=[1,2,3,4,5,6,7,8,9,10],q1=Im.concat([11,12,13,14,15,16,17,18,19,20]),Hr={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},J1=[...Object.keys(G1),...X1,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Hr.GROUP,Hr.SWAP_OPACITY,Hr.PRIMARY,Hr.SECONDARY].concat(Im.map(e=>"".concat(e,"x"))).concat(q1.map(e=>"w-".concat(e))),Z1={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},ew={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},tw={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},Hf={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}};const yt="___FONT_AWESOME___",Ol=16,Cm="fa",Pm="svg-inline--fa",Nn="data-fa-i2svg",Al="data-fa-pseudo-element",nw="data-fa-pseudo-element-pending",Xu="data-prefix",qu="data-icon",Vf="fontawesome-i2svg",rw="async",iw=["HTML","HEAD","STYLE","SCRIPT"],Tm=(()=>{try{return!0}catch{return!1}})(),Nm=[K,Pe,Te];function Ui(e){return new Proxy(e,{get(t,n){return n in t?t[n]:t[K]}})}const Om={...xm};Om[K]={...xm[K],...$f.kit,...$f["kit-duotone"]};const Sn=Ui(Om),bl={...Q1};bl[K]={...bl[K],...Hf.kit,...Hf["kit-duotone"]};const Ii=Ui(bl),Rl={...Y1};Rl[K]={...Rl[K],...tw.kit};const kn=Ui(Rl),Ll={...K1};Ll[K]={...Ll[K],...ew.kit};const ow=Ui(Ll),sw=$1,Am="fa-layers-text",aw=H1,lw={...z1};Ui(lw);const uw=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Ea=Hr,yr=new Set;Object.keys(Ii[K]).map(yr.add.bind(yr));Object.keys(Ii[Pe]).map(yr.add.bind(yr));Object.keys(Ii[Te]).map(yr.add.bind(yr));const cw=[...B1,...J1],ri=en.FontAwesomeConfig||{};function fw(e){var t=V.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function dw(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}V&&typeof V.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(t=>{let[n,r]=t;const i=dw(fw(n));i!=null&&(ri[r]=i)});const bm={styleDefault:"solid",familyDefault:"classic",cssPrefix:Cm,replacementClass:Pm,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};ri.familyPrefix&&(ri.cssPrefix=ri.familyPrefix);const wr={...bm,...ri};wr.autoReplaceSvg||(wr.observeMutations=!1);const N={};Object.keys(bm).forEach(e=>{Object.defineProperty(N,e,{enumerable:!0,set:function(t){wr[e]=t,ii.forEach(n=>n(N))},get:function(){return wr[e]}})});Object.defineProperty(N,"familyPrefix",{enumerable:!0,set:function(e){wr.cssPrefix=e,ii.forEach(t=>t(N))},get:function(){return wr.cssPrefix}});en.FontAwesomeConfig=N;const ii=[];function hw(e){return ii.push(e),()=>{ii.splice(ii.indexOf(e),1)}}const Ct=Ol,qe={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function pw(e){if(!e||!kt)return;const t=V.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;const n=V.head.childNodes;let r=null;for(let i=n.length-1;i>-1;i--){const o=n[i],s=(o.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(s)>-1&&(r=o)}return V.head.insertBefore(t,r),e}const mw="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Ci(){let e=12,t="";for(;e-- >0;)t+=mw[Math.random()*62|0];return t}function Cr(e){const t=[];for(let n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function Ju(e){return e.classList?Cr(e.classList):(e.getAttribute("class")||"").split(" ").filter(t=>t)}function Rm(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function gw(e){return Object.keys(e||{}).reduce((t,n)=>t+"".concat(n,'="').concat(Rm(e[n]),'" '),"").trim()}function js(e){return Object.keys(e||{}).reduce((t,n)=>t+"".concat(n,": ").concat(e[n].trim(),";"),"")}function Zu(e){return e.size!==qe.size||e.x!==qe.x||e.y!==qe.y||e.rotate!==qe.rotate||e.flipX||e.flipY}function vw(e){let{transform:t,containerWidth:n,iconWidth:r}=e;const i={transform:"translate(".concat(n/2," 256)")},o="translate(".concat(t.x*32,", ").concat(t.y*32,") "),s="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),a="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(o," ").concat(s," ").concat(a)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:l,path:u}}function yw(e){let{transform:t,width:n=Ol,height:r=Ol,startCentered:i=!1}=e,o="";return i&&Sm?o+="translate(".concat(t.x/Ct-n/2,"em, ").concat(t.y/Ct-r/2,"em) "):i?o+="translate(calc(-50% + ".concat(t.x/Ct,"em), calc(-50% + ").concat(t.y/Ct,"em)) "):o+="translate(".concat(t.x/Ct,"em, ").concat(t.y/Ct,"em) "),o+="scale(".concat(t.size/Ct*(t.flipX?-1:1),", ").concat(t.size/Ct*(t.flipY?-1:1),") "),o+="rotate(".concat(t.rotate,"deg) "),o}var ww=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Lm(){const e=Cm,t=Pm,n=N.cssPrefix,r=N.replacementClass;let i=ww;if(n!==e||r!==t){const o=new RegExp("\\.".concat(e,"\\-"),"g"),s=new RegExp("\\--".concat(e,"\\-"),"g"),a=new RegExp("\\.".concat(t),"g");i=i.replace(o,".".concat(n,"-")).replace(s,"--".concat(n,"-")).replace(a,".".concat(r))}return i}let Wf=!1;function Sa(){N.autoAddCss&&!Wf&&(pw(Lm()),Wf=!0)}var _w={mixout(){return{dom:{css:Lm,insertCss:Sa}}},hooks(){return{beforeDOMElementCreation(){Sa()},beforeI2svg(){Sa()}}}};const wt=en||{};wt[yt]||(wt[yt]={});wt[yt].styles||(wt[yt].styles={});wt[yt].hooks||(wt[yt].hooks={});wt[yt].shims||(wt[yt].shims=[]);var Je=wt[yt];const Dm=[],Mm=function(){V.removeEventListener("DOMContentLoaded",Mm),ls=1,Dm.map(e=>e())};let ls=!1;kt&&(ls=(V.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(V.readyState),ls||V.addEventListener("DOMContentLoaded",Mm));function Ew(e){kt&&(ls?setTimeout(e,0):Dm.push(e))}function Fi(e){const{tag:t,attributes:n={},children:r=[]}=e;return typeof e=="string"?Rm(e):"<".concat(t," ").concat(gw(n),">").concat(r.map(Fi).join(""),"</").concat(t,">")}function Kf(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var ka=function(t,n,r,i){var o=Object.keys(t),s=o.length,a=n,l,u,c;for(r===void 0?(l=1,c=t[o[0]]):(l=0,c=r);l<s;l++)u=o[l],c=a(c,t[u],u,t);return c};function Sw(e){const t=[];let n=0;const r=e.length;for(;n<r;){const i=e.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){const o=e.charCodeAt(n++);(o&64512)==56320?t.push(((i&1023)<<10)+(o&1023)+65536):(t.push(i),n--)}else t.push(i)}return t}function Dl(e){const t=Sw(e);return t.length===1?t[0].toString(16):null}function kw(e,t){const n=e.length;let r=e.charCodeAt(t),i;return r>=55296&&r<=56319&&n>t+1&&(i=e.charCodeAt(t+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function Gf(e){return Object.keys(e).reduce((t,n)=>{const r=e[n];return!!r.icon?t[r.iconName]=r.icon:t[n]=r,t},{})}function Ml(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:r=!1}=n,i=Gf(t);typeof Je.hooks.addPack=="function"&&!r?Je.hooks.addPack(e,Gf(t)):Je.styles[e]={...Je.styles[e]||{},...i},e==="fas"&&Ml("fa",t)}const{styles:gn,shims:xw}=Je,Iw={[K]:Object.values(kn[K]),[Pe]:Object.values(kn[Pe]),[Te]:Object.values(kn[Te])};let ec=null,jm={},Um={},Fm={},zm={},Bm={};const Cw={[K]:Object.keys(Sn[K]),[Pe]:Object.keys(Sn[Pe]),[Te]:Object.keys(Sn[Te])};function Pw(e){return~cw.indexOf(e)}function Tw(e,t){const n=t.split("-"),r=n[0],i=n.slice(1).join("-");return r===e&&i!==""&&!Pw(i)?i:null}const $m=()=>{const e=r=>ka(gn,(i,o,s)=>(i[s]=ka(o,r,{}),i),{});jm=e((r,i,o)=>(i[3]&&(r[i[3]]=o),i[2]&&i[2].filter(a=>typeof a=="number").forEach(a=>{r[a.toString(16)]=o}),r)),Um=e((r,i,o)=>(r[o]=o,i[2]&&i[2].filter(a=>typeof a=="string").forEach(a=>{r[a]=o}),r)),Bm=e((r,i,o)=>{const s=i[2];return r[o]=o,s.forEach(a=>{r[a]=o}),r});const t="far"in gn||N.autoFetchSvg,n=ka(xw,(r,i)=>{const o=i[0];let s=i[1];const a=i[2];return s==="far"&&!t&&(s="fas"),typeof o=="string"&&(r.names[o]={prefix:s,iconName:a}),typeof o=="number"&&(r.unicodes[o.toString(16)]={prefix:s,iconName:a}),r},{names:{},unicodes:{}});Fm=n.names,zm=n.unicodes,ec=Us(N.styleDefault,{family:N.familyDefault})};hw(e=>{ec=Us(e.styleDefault,{family:N.familyDefault})});$m();function tc(e,t){return(jm[e]||{})[t]}function Nw(e,t){return(Um[e]||{})[t]}function Ft(e,t){return(Bm[e]||{})[t]}function Hm(e){return Fm[e]||{prefix:null,iconName:null}}function Ow(e){const t=zm[e],n=tc("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function tn(){return ec}const nc=()=>({prefix:null,iconName:null,rest:[]});function Us(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=K}=t,r=Sn[n][e],i=Ii[n][e]||Ii[n][r],o=e in Je.styles?e:null;return i||o||null}const Aw={[K]:Object.keys(kn[K]),[Pe]:Object.keys(kn[Pe]),[Te]:Object.keys(kn[Te])};function Fs(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=t,r={[K]:"".concat(N.cssPrefix,"-").concat(K),[Pe]:"".concat(N.cssPrefix,"-").concat(Pe),[Te]:"".concat(N.cssPrefix,"-").concat(Te)};let i=null,o=K;const s=F1.filter(l=>l!==km);s.forEach(l=>{(e.includes(r[l])||e.some(u=>Aw[l].includes(u)))&&(o=l)});const a=e.reduce((l,u)=>{const c=Tw(N.cssPrefix,u);if(gn[u]?(u=Iw[o].includes(u)?ow[o][u]:u,i=u,l.prefix=u):Cw[o].indexOf(u)>-1?(i=u,l.prefix=Us(u,{family:o})):c?l.iconName=c:u!==N.replacementClass&&!s.some(d=>u===r[d])&&l.rest.push(u),!n&&l.prefix&&l.iconName){const d=i==="fa"?Hm(l.iconName):{},h=Ft(l.prefix,l.iconName);d.prefix&&(i=null),l.iconName=d.iconName||h||l.iconName,l.prefix=d.prefix||l.prefix,l.prefix==="far"&&!gn.far&&gn.fas&&!N.autoFetchSvg&&(l.prefix="fas")}return l},nc());return(e.includes("fa-brands")||e.includes("fab"))&&(a.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(a.prefix="fad"),!a.prefix&&o===Pe&&(gn.fass||N.autoFetchSvg)&&(a.prefix="fass",a.iconName=Ft(a.prefix,a.iconName)||a.iconName),!a.prefix&&o===Te&&(gn.fasds||N.autoFetchSvg)&&(a.prefix="fasds",a.iconName=Ft(a.prefix,a.iconName)||a.iconName),(a.prefix==="fa"||i==="fa")&&(a.prefix=tn()||"fas"),a}class bw{constructor(){this.definitions={}}add(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];const i=n.reduce(this._pullDefinitions,{});Object.keys(i).forEach(o=>{this.definitions[o]={...this.definitions[o]||{},...i[o]},Ml(o,i[o]);const s=kn[K][o];s&&Ml(s,i[o]),$m()})}reset(){this.definitions={}}_pullDefinitions(t,n){const r=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(r).map(i=>{const{prefix:o,iconName:s,icon:a}=r[i],l=a[2];t[o]||(t[o]={}),l.length>0&&l.forEach(u=>{typeof u=="string"&&(t[o][u]=a)}),t[o][s]=a}),t}}let Yf=[],Xn={};const or={},Rw=Object.keys(or);function Lw(e,t){let{mixoutsTo:n}=t;return Yf=e,Xn={},Object.keys(or).forEach(r=>{Rw.indexOf(r)===-1&&delete or[r]}),Yf.forEach(r=>{const i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(o=>{typeof i[o]=="function"&&(n[o]=i[o]),typeof i[o]=="object"&&Object.keys(i[o]).forEach(s=>{n[o]||(n[o]={}),n[o][s]=i[o][s]})}),r.hooks){const o=r.hooks();Object.keys(o).forEach(s=>{Xn[s]||(Xn[s]=[]),Xn[s].push(o[s])})}r.provides&&r.provides(or)}),n}function jl(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];return(Xn[e]||[]).forEach(s=>{t=s.apply(null,[t,...r])}),t}function On(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];(Xn[e]||[]).forEach(o=>{o.apply(null,n)})}function nn(){const e=arguments[0],t=Array.prototype.slice.call(arguments,1);return or[e]?or[e].apply(null,t):void 0}function Ul(e){e.prefix==="fa"&&(e.prefix="fas");let{iconName:t}=e;const n=e.prefix||tn();if(t)return t=Ft(n,t)||t,Kf(Vm.definitions,n,t)||Kf(Je.styles,n,t)}const Vm=new bw,Dw=()=>{N.autoReplaceSvg=!1,N.observeMutations=!1,On("noAuto")},Mw={i2svg:function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return kt?(On("beforeI2svg",e),nn("pseudoElements2svg",e),nn("i2svg",e)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:t}=e;N.autoReplaceSvg===!1&&(N.autoReplaceSvg=!0),N.observeMutations=!0,Ew(()=>{Uw({autoReplaceSvgRoot:t}),On("watch",e)})}},jw={icon:e=>{if(e===null)return null;if(typeof e=="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:Ft(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){const t=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],n=Us(e[0]);return{prefix:n,iconName:Ft(n,t)||t}}if(typeof e=="string"&&(e.indexOf("".concat(N.cssPrefix,"-"))>-1||e.match(sw))){const t=Fs(e.split(" "),{skipLookups:!0});return{prefix:t.prefix||tn(),iconName:Ft(t.prefix,t.iconName)||t.iconName}}if(typeof e=="string"){const t=tn();return{prefix:t,iconName:Ft(t,e)||e}}}},be={noAuto:Dw,config:N,dom:Mw,parse:jw,library:Vm,findIconDefinition:Ul,toHtml:Fi},Uw=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:t=V}=e;(Object.keys(Je.styles).length>0||N.autoFetchSvg)&&kt&&N.autoReplaceSvg&&be.dom.i2svg({node:t})};function zs(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(n=>Fi(n))}}),Object.defineProperty(e,"node",{get:function(){if(!kt)return;const n=V.createElement("div");return n.innerHTML=e.html,n.children}}),e}function Fw(e){let{children:t,main:n,mask:r,attributes:i,styles:o,transform:s}=e;if(Zu(s)&&n.found&&!r.found){const{width:a,height:l}=n,u={x:a/l/2,y:.5};i.style=js({...o,"transform-origin":"".concat(u.x+s.x/16,"em ").concat(u.y+s.y/16,"em")})}return[{tag:"svg",attributes:i,children:t}]}function zw(e){let{prefix:t,iconName:n,children:r,attributes:i,symbol:o}=e;const s=o===!0?"".concat(t,"-").concat(N.cssPrefix,"-").concat(n):o;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:{...i,id:s},children:r}]}]}function rc(e){const{icons:{main:t,mask:n},prefix:r,iconName:i,transform:o,symbol:s,title:a,maskId:l,titleId:u,extra:c,watchable:d=!1}=e,{width:h,height:v}=n.found?n:t,w=r==="fak",_=[N.replacementClass,i?"".concat(N.cssPrefix,"-").concat(i):""].filter(k=>c.classes.indexOf(k)===-1).filter(k=>k!==""||!!k).concat(c.classes).join(" ");let E={children:[],attributes:{...c.attributes,"data-prefix":r,"data-icon":i,class:_,role:c.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(h," ").concat(v)}};const p=w&&!~c.classes.indexOf("fa-fw")?{width:"".concat(h/v*16*.0625,"em")}:{};d&&(E.attributes[Nn]=""),a&&(E.children.push({tag:"title",attributes:{id:E.attributes["aria-labelledby"]||"title-".concat(u||Ci())},children:[a]}),delete E.attributes.title);const f={...E,prefix:r,iconName:i,main:t,mask:n,maskId:l,transform:o,symbol:s,styles:{...p,...c.styles}},{children:m,attributes:y}=n.found&&t.found?nn("generateAbstractMask",f)||{children:[],attributes:{}}:nn("generateAbstractIcon",f)||{children:[],attributes:{}};return f.children=m,f.attributes=y,s?zw(f):Fw(f)}function Qf(e){const{content:t,width:n,height:r,transform:i,title:o,extra:s,watchable:a=!1}=e,l={...s.attributes,...o?{title:o}:{},class:s.classes.join(" ")};a&&(l[Nn]="");const u={...s.styles};Zu(i)&&(u.transform=yw({transform:i,startCentered:!0,width:n,height:r}),u["-webkit-transform"]=u.transform);const c=js(u);c.length>0&&(l.style=c);const d=[];return d.push({tag:"span",attributes:l,children:[t]}),o&&d.push({tag:"span",attributes:{class:"sr-only"},children:[o]}),d}function Bw(e){const{content:t,title:n,extra:r}=e,i={...r.attributes,...n?{title:n}:{},class:r.classes.join(" ")},o=js(r.styles);o.length>0&&(i.style=o);const s=[];return s.push({tag:"span",attributes:i,children:[t]}),n&&s.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),s}const{styles:xa}=Je;function Fl(e){const t=e[0],n=e[1],[r]=e.slice(4);let i=null;return Array.isArray(r)?i={tag:"g",attributes:{class:"".concat(N.cssPrefix,"-").concat(Ea.GROUP)},children:[{tag:"path",attributes:{class:"".concat(N.cssPrefix,"-").concat(Ea.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(N.cssPrefix,"-").concat(Ea.PRIMARY),fill:"currentColor",d:r[1]}}]}:i={tag:"path",attributes:{fill:"currentColor",d:r}},{found:!0,width:t,height:n,icon:i}}const $w={found:!1,width:512,height:512};function Hw(e,t){!Tm&&!N.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function zl(e,t){let n=t;return t==="fa"&&N.styleDefault!==null&&(t=tn()),new Promise((r,i)=>{if(n==="fa"){const o=Hm(e)||{};e=o.iconName||e,t=o.prefix||t}if(e&&t&&xa[t]&&xa[t][e]){const o=xa[t][e];return r(Fl(o))}Hw(e,t),r({...$w,icon:N.showMissingIcons&&e?nn("missingIconAbstract")||{}:{}})})}const Xf=()=>{},Bl=N.measurePerformance&&fo&&fo.mark&&fo.measure?fo:{mark:Xf,measure:Xf},Vr='FA "6.6.0"',Vw=e=>(Bl.mark("".concat(Vr," ").concat(e," begins")),()=>Wm(e)),Wm=e=>{Bl.mark("".concat(Vr," ").concat(e," ends")),Bl.measure("".concat(Vr," ").concat(e),"".concat(Vr," ").concat(e," begins"),"".concat(Vr," ").concat(e," ends"))};var ic={begin:Vw,end:Wm};const Co=()=>{};function qf(e){return typeof(e.getAttribute?e.getAttribute(Nn):null)=="string"}function Ww(e){const t=e.getAttribute?e.getAttribute(Xu):null,n=e.getAttribute?e.getAttribute(qu):null;return t&&n}function Kw(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(N.replacementClass)}function Gw(){return N.autoReplaceSvg===!0?Po.replace:Po[N.autoReplaceSvg]||Po.replace}function Yw(e){return V.createElementNS("http://www.w3.org/2000/svg",e)}function Qw(e){return V.createElement(e)}function Km(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=e.tag==="svg"?Yw:Qw}=t;if(typeof e=="string")return V.createTextNode(e);const r=n(e.tag);return Object.keys(e.attributes||[]).forEach(function(o){r.setAttribute(o,e.attributes[o])}),(e.children||[]).forEach(function(o){r.appendChild(Km(o,{ceFn:n}))}),r}function Xw(e){let t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}const Po={replace:function(e){const t=e[0];if(t.parentNode)if(e[1].forEach(n=>{t.parentNode.insertBefore(Km(n),t)}),t.getAttribute(Nn)===null&&N.keepOriginalSource){let n=V.createComment(Xw(t));t.parentNode.replaceChild(n,t)}else t.remove()},nest:function(e){const t=e[0],n=e[1];if(~Ju(t).indexOf(N.replacementClass))return Po.replace(e);const r=new RegExp("".concat(N.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const o=n[0].attributes.class.split(" ").reduce((s,a)=>(a===N.replacementClass||a.match(r)?s.toSvg.push(a):s.toNode.push(a),s),{toNode:[],toSvg:[]});n[0].attributes.class=o.toSvg.join(" "),o.toNode.length===0?t.removeAttribute("class"):t.setAttribute("class",o.toNode.join(" "))}const i=n.map(o=>Fi(o)).join(`
`);t.setAttribute(Nn,""),t.innerHTML=i}};function Jf(e){e()}function Gm(e,t){const n=typeof t=="function"?t:Co;if(e.length===0)n();else{let r=Jf;N.mutateApproach===rw&&(r=en.requestAnimationFrame||Jf),r(()=>{const i=Gw(),o=ic.begin("mutate");e.map(i),o(),n()})}}let oc=!1;function Ym(){oc=!0}function $l(){oc=!1}let us=null;function Zf(e){if(!Bf||!N.observeMutations)return;const{treeCallback:t=Co,nodeCallback:n=Co,pseudoElementsCallback:r=Co,observeMutationsRoot:i=V}=e;us=new Bf(o=>{if(oc)return;const s=tn();Cr(o).forEach(a=>{if(a.type==="childList"&&a.addedNodes.length>0&&!qf(a.addedNodes[0])&&(N.searchPseudoElements&&r(a.target),t(a.target)),a.type==="attributes"&&a.target.parentNode&&N.searchPseudoElements&&r(a.target.parentNode),a.type==="attributes"&&qf(a.target)&&~uw.indexOf(a.attributeName))if(a.attributeName==="class"&&Ww(a.target)){const{prefix:l,iconName:u}=Fs(Ju(a.target));a.target.setAttribute(Xu,l||s),u&&a.target.setAttribute(qu,u)}else Kw(a.target)&&n(a.target)})}),kt&&us.observe(i,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function qw(){us&&us.disconnect()}function Jw(e){const t=e.getAttribute("style");let n=[];return t&&(n=t.split(";").reduce((r,i)=>{const o=i.split(":"),s=o[0],a=o.slice(1);return s&&a.length>0&&(r[s]=a.join(":").trim()),r},{})),n}function Zw(e){const t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"";let i=Fs(Ju(e));return i.prefix||(i.prefix=tn()),t&&n&&(i.prefix=t,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=Nw(i.prefix,e.innerText)||tc(i.prefix,Dl(e.innerText))),!i.iconName&&N.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=e.firstChild.data)),i}function e_(e){const t=Cr(e.attributes).reduce((i,o)=>(i.name!=="class"&&i.name!=="style"&&(i[o.name]=o.value),i),{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return N.autoA11y&&(n?t["aria-labelledby"]="".concat(N.replacementClass,"-title-").concat(r||Ci()):(t["aria-hidden"]="true",t.focusable="false")),t}function t_(){return{iconName:null,title:null,titleId:null,prefix:null,transform:qe,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function ed(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:r,rest:i}=Zw(e),o=e_(e),s=jl("parseNodeAttributes",{},e);let a=t.styleParser?Jw(e):[];return{iconName:n,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:r,transform:qe,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:a,attributes:o},...s}}const{styles:n_}=Je;function Qm(e){const t=N.autoReplaceSvg==="nest"?ed(e,{styleParser:!1}):ed(e);return~t.extra.classes.indexOf(Am)?nn("generateLayersText",e,t):nn("generateSvgReplacementMutation",e,t)}let it=new Set;Nm.map(e=>{it.add("fa-".concat(e))});Object.keys(Sn[K]).map(it.add.bind(it));Object.keys(Sn[Pe]).map(it.add.bind(it));Object.keys(Sn[Te]).map(it.add.bind(it));it=[...it];function td(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!kt)return Promise.resolve();const n=V.documentElement.classList,r=c=>n.add("".concat(Vf,"-").concat(c)),i=c=>n.remove("".concat(Vf,"-").concat(c)),o=N.autoFetchSvg?it:Nm.map(c=>"fa-".concat(c)).concat(Object.keys(n_));o.includes("fa")||o.push("fa");const s=[".".concat(Am,":not([").concat(Nn,"])")].concat(o.map(c=>".".concat(c,":not([").concat(Nn,"])"))).join(", ");if(s.length===0)return Promise.resolve();let a=[];try{a=Cr(e.querySelectorAll(s))}catch{}if(a.length>0)r("pending"),i("complete");else return Promise.resolve();const l=ic.begin("onTree"),u=a.reduce((c,d)=>{try{const h=Qm(d);h&&c.push(h)}catch(h){Tm||h.name==="MissingIcon"&&console.error(h)}return c},[]);return new Promise((c,d)=>{Promise.all(u).then(h=>{Gm(h,()=>{r("active"),r("complete"),i("pending"),typeof t=="function"&&t(),l(),c()})}).catch(h=>{l(),d(h)})})}function r_(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Qm(e).then(n=>{n&&Gm([n],t)})}function i_(e){return function(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const r=(t||{}).icon?t:Ul(t||{});let{mask:i}=n;return i&&(i=(i||{}).icon?i:Ul(i||{})),e(r,{...n,mask:i})}}const o_=function(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=qe,symbol:r=!1,mask:i=null,maskId:o=null,title:s=null,titleId:a=null,classes:l=[],attributes:u={},styles:c={}}=t;if(!e)return;const{prefix:d,iconName:h,icon:v}=e;return zs({type:"icon",...e},()=>(On("beforeDOMElementCreation",{iconDefinition:e,params:t}),N.autoA11y&&(s?u["aria-labelledby"]="".concat(N.replacementClass,"-title-").concat(a||Ci()):(u["aria-hidden"]="true",u.focusable="false")),rc({icons:{main:Fl(v),mask:i?Fl(i.icon):{found:!1,width:null,height:null,icon:{}}},prefix:d,iconName:h,transform:{...qe,...n},symbol:r,title:s,maskId:o,titleId:a,extra:{attributes:u,styles:c,classes:l}})))};var s_={mixout(){return{icon:i_(o_)}},hooks(){return{mutationObserverCallbacks(e){return e.treeCallback=td,e.nodeCallback=r_,e}}},provides(e){e.i2svg=function(t){const{node:n=V,callback:r=()=>{}}=t;return td(n,r)},e.generateSvgReplacementMutation=function(t,n){const{iconName:r,title:i,titleId:o,prefix:s,transform:a,symbol:l,mask:u,maskId:c,extra:d}=n;return new Promise((h,v)=>{Promise.all([zl(r,s),u.iconName?zl(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(w=>{let[_,E]=w;h([t,rc({icons:{main:_,mask:E},prefix:s,iconName:r,transform:a,symbol:l,maskId:c,title:i,titleId:o,extra:d,watchable:!0})])}).catch(v)})},e.generateAbstractIcon=function(t){let{children:n,attributes:r,main:i,transform:o,styles:s}=t;const a=js(s);a.length>0&&(r.style=a);let l;return Zu(o)&&(l=nn("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),n.push(l||i.icon),{children:n,attributes:r}}}},a_={mixout(){return{layer(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=t;return zs({type:"layer"},()=>{On("beforeDOMElementCreation",{assembler:e,params:t});let r=[];return e(i=>{Array.isArray(i)?i.map(o=>{r=r.concat(o.abstract)}):r=r.concat(i.abstract)}),[{tag:"span",attributes:{class:["".concat(N.cssPrefix,"-layers"),...n].join(" ")},children:r}]})}}}},l_={mixout(){return{counter(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:r=[],attributes:i={},styles:o={}}=t;return zs({type:"counter",content:e},()=>(On("beforeDOMElementCreation",{content:e,params:t}),Bw({content:e.toString(),title:n,extra:{attributes:i,styles:o,classes:["".concat(N.cssPrefix,"-layers-counter"),...r]}})))}}}},u_={mixout(){return{text(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=qe,title:r=null,classes:i=[],attributes:o={},styles:s={}}=t;return zs({type:"text",content:e},()=>(On("beforeDOMElementCreation",{content:e,params:t}),Qf({content:e,transform:{...qe,...n},title:r,extra:{attributes:o,styles:s,classes:["".concat(N.cssPrefix,"-layers-text"),...i]}})))}}},provides(e){e.generateLayersText=function(t,n){const{title:r,transform:i,extra:o}=n;let s=null,a=null;if(Sm){const l=parseInt(getComputedStyle(t).fontSize,10),u=t.getBoundingClientRect();s=u.width/l,a=u.height/l}return N.autoA11y&&!r&&(o.attributes["aria-hidden"]="true"),Promise.resolve([t,Qf({content:t.innerHTML,width:s,height:a,transform:i,title:r,extra:o,watchable:!0})])}}};const c_=new RegExp('"',"ug"),nd=[1105920,1112319],rd={FontAwesome:{normal:"fas",400:"fas"},...W1,...V1,...Z1},Hl=Object.keys(rd).reduce((e,t)=>(e[t.toLowerCase()]=rd[t],e),{}),f_=Object.keys(Hl).reduce((e,t)=>{const n=Hl[t];return e[t]=n[900]||[...Object.entries(n)][0][1],e},{});function d_(e){const t=e.replace(c_,""),n=kw(t,0),r=n>=nd[0]&&n<=nd[1],i=t.length===2?t[0]===t[1]:!1;return{value:Dl(i?t[0]:t),isSecondary:r||i}}function h_(e,t){const n=e.replace(/^['"]|['"]$/g,"").toLowerCase(),r=parseInt(t),i=isNaN(r)?"normal":r;return(Hl[n]||{})[i]||f_[n]}function id(e,t){const n="".concat(nw).concat(t.replace(":","-"));return new Promise((r,i)=>{if(e.getAttribute(n)!==null)return r();const s=Cr(e.children).filter(h=>h.getAttribute(Al)===t)[0],a=en.getComputedStyle(e,t),l=a.getPropertyValue("font-family"),u=l.match(aw),c=a.getPropertyValue("font-weight"),d=a.getPropertyValue("content");if(s&&!u)return e.removeChild(s),r();if(u&&d!=="none"&&d!==""){const h=a.getPropertyValue("content");let v=h_(l,c);const{value:w,isSecondary:_}=d_(h),E=u[0].startsWith("FontAwesome");let p=tc(v,w),f=p;if(E){const m=Ow(w);m.iconName&&m.prefix&&(p=m.iconName,v=m.prefix)}if(p&&!_&&(!s||s.getAttribute(Xu)!==v||s.getAttribute(qu)!==f)){e.setAttribute(n,f),s&&e.removeChild(s);const m=t_(),{extra:y}=m;y.attributes[Al]=t,zl(p,v).then(k=>{const I=rc({...m,icons:{main:k,mask:nc()},prefix:v,iconName:f,extra:y,watchable:!0}),C=V.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(C,e.firstChild):e.appendChild(C),C.outerHTML=I.map(O=>Fi(O)).join(`
`),e.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function p_(e){return Promise.all([id(e,"::before"),id(e,"::after")])}function m_(e){return e.parentNode!==document.head&&!~iw.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Al)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function od(e){if(kt)return new Promise((t,n)=>{const r=Cr(e.querySelectorAll("*")).filter(m_).map(p_),i=ic.begin("searchPseudoElements");Ym(),Promise.all(r).then(()=>{i(),$l(),t()}).catch(()=>{i(),$l(),n()})})}var g_={hooks(){return{mutationObserverCallbacks(e){return e.pseudoElementsCallback=od,e}}},provides(e){e.pseudoElements2svg=function(t){const{node:n=V}=t;N.searchPseudoElements&&od(n)}}};let sd=!1;var v_={mixout(){return{dom:{unwatch(){Ym(),sd=!0}}}},hooks(){return{bootstrap(){Zf(jl("mutationObserverCallbacks",{}))},noAuto(){qw()},watch(e){const{observeMutationsRoot:t}=e;sd?$l():Zf(jl("mutationObserverCallbacks",{observeMutationsRoot:t}))}}}};const ad=e=>{let t={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce((n,r)=>{const i=r.toLowerCase().split("-"),o=i[0];let s=i.slice(1).join("-");if(o&&s==="h")return n.flipX=!0,n;if(o&&s==="v")return n.flipY=!0,n;if(s=parseFloat(s),isNaN(s))return n;switch(o){case"grow":n.size=n.size+s;break;case"shrink":n.size=n.size-s;break;case"left":n.x=n.x-s;break;case"right":n.x=n.x+s;break;case"up":n.y=n.y-s;break;case"down":n.y=n.y+s;break;case"rotate":n.rotate=n.rotate+s;break}return n},t)};var y_={mixout(){return{parse:{transform:e=>ad(e)}}},hooks(){return{parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-transform");return n&&(e.transform=ad(n)),e}}},provides(e){e.generateAbstractTransformGrouping=function(t){let{main:n,transform:r,containerWidth:i,iconWidth:o}=t;const s={transform:"translate(".concat(i/2," 256)")},a="translate(".concat(r.x*32,", ").concat(r.y*32,") "),l="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),u="rotate(".concat(r.rotate," 0 0)"),c={transform:"".concat(a," ").concat(l," ").concat(u)},d={transform:"translate(".concat(o/2*-1," -256)")},h={outer:s,inner:c,path:d};return{tag:"g",attributes:{...h.outer},children:[{tag:"g",attributes:{...h.inner},children:[{tag:n.icon.tag,children:n.icon.children,attributes:{...n.icon.attributes,...h.path}}]}]}}}};const Ia={x:0,y:0,width:"100%",height:"100%"};function ld(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function w_(e){return e.tag==="g"?e.children:[e]}var __={hooks(){return{parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-mask"),r=n?Fs(n.split(" ").map(i=>i.trim())):nc();return r.prefix||(r.prefix=tn()),e.mask=r,e.maskId=t.getAttribute("data-fa-mask-id"),e}}},provides(e){e.generateAbstractMask=function(t){let{children:n,attributes:r,main:i,mask:o,maskId:s,transform:a}=t;const{width:l,icon:u}=i,{width:c,icon:d}=o,h=vw({transform:a,containerWidth:c,iconWidth:l}),v={tag:"rect",attributes:{...Ia,fill:"white"}},w=u.children?{children:u.children.map(ld)}:{},_={tag:"g",attributes:{...h.inner},children:[ld({tag:u.tag,attributes:{...u.attributes,...h.path},...w})]},E={tag:"g",attributes:{...h.outer},children:[_]},p="mask-".concat(s||Ci()),f="clip-".concat(s||Ci()),m={tag:"mask",attributes:{...Ia,id:p,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"},children:[v,E]},y={tag:"defs",children:[{tag:"clipPath",attributes:{id:f},children:w_(d)},m]};return n.push(y,{tag:"rect",attributes:{fill:"currentColor","clip-path":"url(#".concat(f,")"),mask:"url(#".concat(p,")"),...Ia}}),{children:n,attributes:r}}}},E_={provides(e){let t=!1;en.matchMedia&&(t=en.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){const n=[],r={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:{...r,d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"}});const o={...i,attributeName:"opacity"},s={tag:"circle",attributes:{...r,cx:"256",cy:"364",r:"28"},children:[]};return t||s.children.push({tag:"animate",attributes:{...i,attributeName:"r",values:"28;14;28;28;14;28;"}},{tag:"animate",attributes:{...o,values:"1;0;1;1;0;1;"}}),n.push(s),n.push({tag:"path",attributes:{...r,opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"},children:t?[]:[{tag:"animate",attributes:{...o,values:"1;0;0;0;0;1;"}}]}),t||n.push({tag:"path",attributes:{...r,opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"},children:[{tag:"animate",attributes:{...o,values:"0;0;1;1;0;0;"}}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},S_={hooks(){return{parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-symbol"),r=n===null?!1:n===""?!0:n;return e.symbol=r,e}}}},k_=[_w,s_,a_,l_,u_,g_,v_,y_,__,E_,S_];Lw(k_,{mixoutsTo:be});be.noAuto;be.config;be.library;be.dom;const Vl=be.parse;be.findIconDefinition;be.toHtml;const x_=be.icon;be.layer;be.text;be.counter;var Xm={exports:{}},I_="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",C_=I_,P_=C_;function qm(){}function Jm(){}Jm.resetWarningCache=qm;var T_=function(){function e(r,i,o,s,a,l){if(l!==P_){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:Jm,resetWarningCache:qm};return n.PropTypes=n,n};Xm.exports=T_();var N_=Xm.exports;const D=$d(N_);function ud(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Qe(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?ud(Object(n),!0).forEach(function(r){qn(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ud(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function cs(e){"@babel/helpers - typeof";return cs=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},cs(e)}function qn(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function O_(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function A_(e,t){if(e==null)return{};var n=O_(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Wl(e){return b_(e)||R_(e)||L_(e)||D_()}function b_(e){if(Array.isArray(e))return Kl(e)}function R_(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function L_(e,t){if(e){if(typeof e=="string")return Kl(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Kl(e,t)}}function Kl(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function D_(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function M_(e){var t,n=e.beat,r=e.fade,i=e.beatFade,o=e.bounce,s=e.shake,a=e.flash,l=e.spin,u=e.spinPulse,c=e.spinReverse,d=e.pulse,h=e.fixedWidth,v=e.inverse,w=e.border,_=e.listItem,E=e.flip,p=e.size,f=e.rotation,m=e.pull,y=(t={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":o,"fa-shake":s,"fa-flash":a,"fa-spin":l,"fa-spin-reverse":c,"fa-spin-pulse":u,"fa-pulse":d,"fa-fw":h,"fa-inverse":v,"fa-border":w,"fa-li":_,"fa-flip":E===!0,"fa-flip-horizontal":E==="horizontal"||E==="both","fa-flip-vertical":E==="vertical"||E==="both"},qn(t,"fa-".concat(p),typeof p<"u"&&p!==null),qn(t,"fa-rotate-".concat(f),typeof f<"u"&&f!==null&&f!==0),qn(t,"fa-pull-".concat(m),typeof m<"u"&&m!==null),qn(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(y).map(function(k){return y[k]?k:null}).filter(function(k){return k})}function j_(e){return e=e-0,e===e}function Zm(e){return j_(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(t,n){return n?n.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var U_=["style"];function F_(e){return e.charAt(0).toUpperCase()+e.slice(1)}function z_(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),i=Zm(n.slice(0,r)),o=n.slice(r+1).trim();return i.startsWith("webkit")?t[F_(i)]=o:t[i]=o,t},{})}function eg(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(l){return eg(e,l)}),i=Object.keys(t.attributes||{}).reduce(function(l,u){var c=t.attributes[u];switch(u){case"class":l.attrs.className=c,delete t.attributes.class;break;case"style":l.attrs.style=z_(c);break;default:u.indexOf("aria-")===0||u.indexOf("data-")===0?l.attrs[u.toLowerCase()]=c:l.attrs[Zm(u)]=c}return l},{attrs:{}}),o=n.style,s=o===void 0?{}:o,a=A_(n,U_);return i.attrs.style=Qe(Qe({},i.attrs.style),s),e.apply(void 0,[t.tag,Qe(Qe({},i.attrs),a)].concat(Wl(r)))}var tg=!1;try{tg=!0}catch{}function B_(){if(!tg&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function cd(e){if(e&&cs(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(Vl.icon)return Vl.icon(e);if(e===null)return null;if(e&&cs(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function Ca(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?qn({},e,t):{}}var fd={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},sc=Ze.forwardRef(function(e,t){var n=Qe(Qe({},fd),e),r=n.icon,i=n.mask,o=n.symbol,s=n.className,a=n.title,l=n.titleId,u=n.maskId,c=cd(r),d=Ca("classes",[].concat(Wl(M_(n)),Wl((s||"").split(" ")))),h=Ca("transform",typeof n.transform=="string"?Vl.transform(n.transform):n.transform),v=Ca("mask",cd(i)),w=x_(c,Qe(Qe(Qe(Qe({},d),h),v),{},{symbol:o,title:a,titleId:l,maskId:u}));if(!w)return B_("Could not find icon",c),null;var _=w.abstract,E={ref:t};return Object.keys(n).forEach(function(p){fd.hasOwnProperty(p)||(E[p]=n[p])}),$_(_[0],E)});sc.displayName="FontAwesomeIcon";sc.propTypes={beat:D.bool,border:D.bool,beatFade:D.bool,bounce:D.bool,className:D.string,fade:D.bool,flash:D.bool,mask:D.oneOfType([D.object,D.array,D.string]),maskId:D.string,fixedWidth:D.bool,inverse:D.bool,flip:D.oneOf([!0,!1,"horizontal","vertical","both"]),icon:D.oneOfType([D.object,D.array,D.string]),listItem:D.bool,pull:D.oneOf(["right","left"]),pulse:D.bool,rotation:D.oneOf([0,90,180,270]),shake:D.bool,size:D.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:D.bool,spinPulse:D.bool,spinReverse:D.bool,symbol:D.oneOfType([D.bool,D.string]),title:D.string,titleId:D.string,transform:D.oneOfType([D.string,D.object]),swapOpacity:D.bool};var $_=eg.bind(null,Ze.createElement);const H_={prefix:"fas",iconName:"magnifying-glass",icon:[512,512,[128269,"search"],"f002","M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"]},V_=H_,W_="/navmed/assets/logo-DYTpDOk9.svg",K_=({text:e})=>{const[t,n]=x.useState("");return x.useEffect(()=>{if(!e){n("Healing Every Heart");return}n("");let r=0;const i=setInterval(()=>{r<e.length?(n(o=>o+e[r]),r++):clearInterval(i)},100);return()=>clearInterval(i)},[e]),g.jsx("p",{className:"text-sm italic",children:t})},G_=({title:e,children:t})=>g.jsxs("div",{className:"bg-gray-100 min-h-screen flex flex-col",children:[g.jsxs("header",{className:"bg-gradient-to-r from-primaryBlue to-secondaryBlue text-white p-4 shadow-lg flex items-center justify-between space-x-4",children:[g.jsxs("div",{className:"flex items-center space-x-2",children:[g.jsx("img",{src:W_,alt:"NavMed Solutions Logo",className:"h-14 w-14 rounded-full"}),g.jsxs("div",{children:[g.jsx("h1",{className:"text-xl font-bold",children:e||"NavMed Solutions"}),g.jsx(K_,{text:"Healing Every Heart"})]})]}),g.jsx("div",{className:"flex-grow max-w-lg mx-4",children:g.jsxs("div",{className:"flex items-center border border-blue-500 rounded-lg overflow-hidden",children:[g.jsxs("select",{className:"bg-white text-gray-700 px-3 py-2 outline-none border-r border-blue-500",children:[g.jsx("option",{children:"Product"}),g.jsx("option",{children:"Category"})]}),g.jsx("input",{type:"text",placeholder:"What are you looking for...",className:"flex-grow px-4 py-2 outline-none text-gray-700"}),g.jsx("button",{className:"bg-blue-500 p-2",children:g.jsx(sc,{icon:V_,className:"text-white"})})]})}),g.jsxs("div",{className:"flex space-x-3",children:[g.jsx("button",{className:"bg-blue-500 px-4 py-2 rounded text-white font-semibold",children:"Sign In"}),g.jsx("button",{className:"bg-blue-500 px-4 py-2 rounded text-white font-semibold",children:"Join Free"})]})]}),g.jsx(j1,{}),g.jsx("main",{className:"flex-grow p-6 md:p-8 bg-white shadow-lg rounded-lg",children:t}),g.jsx(U1,{})]}),Y_=()=>g.jsxs("div",{className:"text-center",children:[g.jsx("h2",{className:"text-primaryPink text-3xl font-bold",children:"Welcome to NavMed Solutions"}),g.jsx("p",{className:"mt-4 text-lg",children:"Your trusted provider for quality medical supplies."}),g.jsx("button",{className:"bg-primaryBlue text-white p-3 rounded mt-6",children:"Shop Now"})]}),Q_="/navmed/assets/defaultImage-CaaC4Gzs.svg",X_=({id:e,name:t,price:n,imageUrl:r,category:i,isNew:o,addToCart:s})=>{const[a,l]=x.useState(!0),u={id:e,name:t,price:n,imageUrl:r,category:i};return g.jsxs("div",{className:"bg-white rounded-lg shadow-md hover:shadow-lg p-4 m-2 relative max-w-xs mx-auto md:max-w-sm lg:max-w-md transition duration-300 transform hover:scale-105",children:[g.jsxs(pm,{to:`/products/${e}`,"aria-label":`View details of ${t}`,children:[a&&g.jsx("div",{className:"w-full h-32 bg-gray-300 animate-pulse rounded-md mb-4"}),g.jsx("img",{src:r,alt:t,onLoad:()=>l(!1),onError:c=>{c.currentTarget.src=Q_,l(!1)},className:`w-full h-32 object-cover rounded-md mb-4 ${a?"hidden":"block"}`}),o&&g.jsx("span",{className:"absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full",children:"New"}),g.jsx("p",{className:"text-xs text-gray-500",children:i}),g.jsx("h2",{className:"text-lg font-semibold mb-2",children:t}),g.jsxs("p",{className:"text-xl font-bold text-green-500",children:["KES ",n]})]}),g.jsx("button",{className:"absolute bottom-4 right-4 bg-pink-600 text-white rounded-full p-2 hover:bg-pink-700 transition duration-300",onClick:()=>s(u),"aria-label":`Add ${t} to cart`,children:g.jsx(vm,{})})]})},q_=[{id:1,name:"Stethoscope",price:"$45",imageUrl:"/images/stethoscope.jpg"},{id:2,name:"Blood Pressure Monitor",price:"$60",imageUrl:"/images/bp-monitor.jpg"},{id:3,name:"Thermometer",price:"$15",imageUrl:"/images/thermometer.jpg"}],J_=()=>g.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6 p-4",children:q_.map(e=>g.jsx(X_,{name:e.name,price:e.price,imageUrl:e.imageUrl},e.id))}),Z_=()=>g.jsxs("div",{className:"max-w-lg mx-auto bg-white p-6 rounded shadow-md",children:[g.jsx("h2",{className:"text-2xl text-primaryPink font-bold text-center mb-4",children:"Contact Us"}),g.jsxs("form",{className:"space-y-4",children:[g.jsx("input",{type:"text",placeholder:"Name",className:"w-full p-2 border rounded"}),g.jsx("input",{type:"email",placeholder:"Email",className:"w-full p-2 border rounded"}),g.jsx("textarea",{placeholder:"Message",className:"w-full p-2 border rounded h-32"}),g.jsx("button",{className:"bg-primaryPink text-white w-full p-3 rounded",children:"Send Message"})]})]}),eE=()=>{const[e,t]=x.useState([{id:1,name:"Product A",price:500,quantity:1,imageUrl:"/path/to/imageA.jpg"},{id:2,name:"Product B",price:700,quantity:2,imageUrl:"/path/to/imageB.jpg"},{id:3,name:"Product C",price:300,quantity:1,imageUrl:"/path/to/imageC.jpg"}]),[n,r]=x.useState(""),[i,o]=x.useState(0),s=(h,v)=>{t(w=>w.map(_=>_.id===h?{..._,quantity:Math.max(1,_.quantity+v)}:_))},a=h=>{t(v=>v.filter(w=>w.id!==h))},l=()=>{n==="DISCOUNT10"?o(10):alert("Invalid coupon code")},u=e.reduce((h,v)=>h+v.price*v.quantity,0),c=u*i/100,d=u-c;return g.jsxs("div",{className:"container mx-auto p-6",children:[g.jsx("h1",{className:"text-3xl font-bold mb-6",children:"Shopping Cart"}),g.jsxs("div",{className:"flex flex-col lg:flex-row lg:space-x-8",children:[g.jsx("div",{className:"w-full lg:w-2/3",children:e.map(h=>g.jsxs("div",{className:"flex items-center justify-between py-4 border-b",children:[g.jsx("img",{src:h.imageUrl,alt:h.name,className:"w-16 h-16 object-cover rounded-md"}),g.jsxs("div",{className:"flex flex-col flex-grow mx-4",children:[g.jsx("h2",{className:"font-semibold",children:h.name}),g.jsxs("p",{className:"text-sm text-gray-500",children:["KES ",h.price]})]}),g.jsxs("div",{className:"flex items-center space-x-2",children:[g.jsx("button",{onClick:()=>s(h.id,-1),className:"p-2 bg-gray-200 rounded",children:"-"}),g.jsx("span",{children:h.quantity}),g.jsx("button",{onClick:()=>s(h.id,1),className:"p-2 bg-gray-200 rounded",children:"+"})]}),g.jsx("button",{onClick:()=>a(h.id),className:"text-red-500 hover:text-red-700 ml-4",children:g.jsx("i",{className:"fas fa-trash"})})]},h.id))}),g.jsx("div",{className:"w-full lg:w-1/3 mt-8 lg:mt-0",children:g.jsxs("div",{className:"bg-white p-4 shadow-md rounded-lg",children:[g.jsx("h2",{className:"text-lg font-semibold mb-4",children:"Order Summary"}),g.jsxs("div",{className:"flex justify-between text-sm mb-2",children:[g.jsx("span",{children:"Subtotal"}),g.jsxs("span",{children:["KES ",u.toFixed(2)]})]}),g.jsxs("div",{className:"flex justify-between text-sm mb-2",children:[g.jsx("span",{children:"Discount"}),g.jsxs("span",{children:["- KES ",c.toFixed(2)]})]}),g.jsxs("div",{className:"flex justify-between text-sm mb-2",children:[g.jsx("span",{children:"Shipping"}),g.jsx("span",{children:"KES 0.00"})]}),g.jsxs("div",{className:"flex justify-between text-sm font-bold mb-4",children:[g.jsx("span",{children:"Total"}),g.jsxs("span",{children:["KES ",d.toFixed(2)]})]}),g.jsxs("div",{className:"flex items-center mb-4",children:[g.jsx("input",{type:"text",placeholder:"Coupon Code",value:n,onChange:h=>r(h.target.value),className:"w-full px-3 py-2 border rounded-l-md focus:outline-none"}),g.jsx("button",{onClick:l,className:"bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600",children:"Apply"})]}),g.jsx("button",{className:"w-full bg-green-500 text-white py-2 rounded hover:bg-green-600",children:"Proceed to Checkout"})]})})]})]})},tE=[{id:1,name:"Stethoscope",description:"High-quality stethoscope for medical professionals.",price:"$45",imageUrl:"/images/stethoscope.jpg"},{id:2,name:"Blood Pressure Monitor",description:"Accurate blood pressure monitor with digital display.",price:"$60",imageUrl:"/images/bp-monitor.jpg"},{id:3,name:"Thermometer",description:"Digital thermometer with fast and accurate readings.",price:"$15",imageUrl:"/images/thermometer.jpg"}],nE=()=>{const{productId:e}=Jy(),t=tE.find(n=>n.id===parseInt(e||"",10));return t?g.jsxs("div",{className:"max-w-xl mx-auto p-4 bg-white rounded shadow-lg",children:[g.jsx("img",{src:t.imageUrl,alt:t.name,className:"w-full h-64 object-cover rounded-lg"}),g.jsx("h2",{className:"text-2xl font-bold text-primaryPink mt-4",children:t.name}),g.jsx("p",{className:"text-gray-700 mt-2",children:t.description}),g.jsx("p",{className:"text-lg font-semibold text-primaryBlue mt-4",children:t.price}),g.jsx("button",{className:"bg-primaryPink text-white py-2 px-4 rounded mt-4",children:"Add to Cart"})]}):g.jsx("div",{children:"Product not found."})},rE=()=>g.jsx(_1,{children:g.jsx(G_,{children:g.jsxs(d1,{children:[g.jsx(jn,{path:"/",element:g.jsx(Y_,{})}),g.jsx(jn,{path:"/products",element:g.jsx(J_,{})}),g.jsx(jn,{path:"/products/:productId",element:g.jsx(nE,{})})," ",g.jsx(jn,{path:"/contact",element:g.jsx(Z_,{})}),g.jsx(jn,{path:"/cart",element:g.jsx(eE,{})})]})})}),iE=x.createContext(void 0),oE=({children:e})=>{const[t,n]=x.useState([]),r=i=>{n([...t,i])};return g.jsx(iE.Provider,{value:{cart:t,addToCart:r},children:e})};var dd={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ng=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},sE=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=e[n++];t[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=e[n++],s=e[n++],a=e[n++],l=((i&7)<<18|(o&63)<<12|(s&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(l>>10)),t[r++]=String.fromCharCode(56320+(l&1023))}else{const o=e[n++],s=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|s&63)}}return t.join("")},rg={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const o=e[i],s=i+1<e.length,a=s?e[i+1]:0,l=i+2<e.length,u=l?e[i+2]:0,c=o>>2,d=(o&3)<<4|a>>4;let h=(a&15)<<2|u>>6,v=u&63;l||(v=64,s||(h=64)),r.push(n[c],n[d],n[h],n[v])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(ng(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):sE(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const o=n[e.charAt(i++)],a=i<e.length?n[e.charAt(i)]:0;++i;const u=i<e.length?n[e.charAt(i)]:64;++i;const d=i<e.length?n[e.charAt(i)]:64;if(++i,o==null||a==null||u==null||d==null)throw new aE;const h=o<<2|a>>4;if(r.push(h),u!==64){const v=a<<4&240|u>>2;if(r.push(v),d!==64){const w=u<<6&192|d;r.push(w)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class aE extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const lE=function(e){const t=ng(e);return rg.encodeByteArray(t,!0)},ig=function(e){return lE(e).replace(/\./g,"")},og=function(e){try{return rg.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uE(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cE=()=>uE().__FIREBASE_DEFAULTS__,fE=()=>{if(typeof process>"u"||typeof dd>"u")return;const e=dd.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},dE=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&og(e[1]);return t&&JSON.parse(t)},ac=()=>{try{return cE()||fE()||dE()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},hE=e=>{var t,n;return(n=(t=ac())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},sg=()=>{var e;return(e=ac())===null||e===void 0?void 0:e.config},ag=e=>{var t;return(t=ac())===null||t===void 0?void 0:t[`_${e}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pE{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function me(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function mE(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(me())}function gE(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function vE(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function yE(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function wE(){const e=me();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function _E(){try{return typeof indexedDB=="object"}catch{return!1}}function EE(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var o;t(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){t(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SE="FirebaseError";class un extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=SE,Object.setPrototypeOf(this,un.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,zi.prototype.create)}}class zi{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,o=this.errors[t],s=o?kE(o,r):"Error",a=`${this.serviceName}: ${s} (${i}).`;return new un(i,a,r)}}function kE(e,t){return e.replace(xE,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const xE=/\{\$([^}]+)}/g;function IE(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function fs(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const o=e[i],s=t[i];if(hd(o)&&hd(s)){if(!fs(o,s))return!1}else if(o!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function hd(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bi(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(i=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function Wr(e){const t={};return e.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,o]=r.split("=");t[decodeURIComponent(i)]=decodeURIComponent(o)}}),t}function Kr(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}function CE(e,t){const n=new PE(e,t);return n.subscribe.bind(n)}class PE{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let i;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");TE(t,["next","error","complete"])?i=t:i={next:t,error:n,complete:r},i.next===void 0&&(i.next=Pa),i.error===void 0&&(i.error=Pa),i.complete===void 0&&(i.complete=Pa);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),o}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function TE(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function Pa(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xt(e){return e&&e._delegate?e._delegate:e}class _r{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NE{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new pE;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(AE(t))try{this.getOrInitializeService({instanceIdentifier:mn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(t=mn){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=mn){return this.instances.has(t)}getOptions(t=mn){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[o,s]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(o);r===a&&s.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(t),this.onInitCallbacks.set(i,o);const s=this.instances.get(i);return s&&t(s,i),()=>{o.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:OE(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=mn){return this.component?this.component.multipleInstances?t:mn:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function OE(e){return e===mn?void 0:e}function AE(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bE{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new NE(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var z;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(z||(z={}));const RE={debug:z.DEBUG,verbose:z.VERBOSE,info:z.INFO,warn:z.WARN,error:z.ERROR,silent:z.SILENT},LE=z.INFO,DE={[z.DEBUG]:"log",[z.VERBOSE]:"log",[z.INFO]:"info",[z.WARN]:"warn",[z.ERROR]:"error"},ME=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=DE[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class lg{constructor(t){this.name=t,this._logLevel=LE,this._logHandler=ME,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in z))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?RE[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,z.DEBUG,...t),this._logHandler(this,z.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,z.VERBOSE,...t),this._logHandler(this,z.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,z.INFO,...t),this._logHandler(this,z.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,z.WARN,...t),this._logHandler(this,z.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,z.ERROR,...t),this._logHandler(this,z.ERROR,...t)}}const jE=(e,t)=>t.some(n=>e instanceof n);let pd,md;function UE(){return pd||(pd=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function FE(){return md||(md=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ug=new WeakMap,Gl=new WeakMap,cg=new WeakMap,Ta=new WeakMap,lc=new WeakMap;function zE(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",o),e.removeEventListener("error",s)},o=()=>{n(Qt(e.result)),i()},s=()=>{r(e.error),i()};e.addEventListener("success",o),e.addEventListener("error",s)});return t.then(n=>{n instanceof IDBCursor&&ug.set(n,e)}).catch(()=>{}),lc.set(t,e),t}function BE(e){if(Gl.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",o),e.removeEventListener("error",s),e.removeEventListener("abort",s)},o=()=>{n(),i()},s=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",o),e.addEventListener("error",s),e.addEventListener("abort",s)});Gl.set(e,t)}let Yl={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Gl.get(e);if(t==="objectStoreNames")return e.objectStoreNames||cg.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Qt(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function $E(e){Yl=e(Yl)}function HE(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(Na(this),t,...n);return cg.set(r,t.sort?t.sort():[t]),Qt(r)}:FE().includes(e)?function(...t){return e.apply(Na(this),t),Qt(ug.get(this))}:function(...t){return Qt(e.apply(Na(this),t))}}function VE(e){return typeof e=="function"?HE(e):(e instanceof IDBTransaction&&BE(e),jE(e,UE())?new Proxy(e,Yl):e)}function Qt(e){if(e instanceof IDBRequest)return zE(e);if(Ta.has(e))return Ta.get(e);const t=VE(e);return t!==e&&(Ta.set(e,t),lc.set(t,e)),t}const Na=e=>lc.get(e);function WE(e,t,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const s=indexedDB.open(e,t),a=Qt(s);return r&&s.addEventListener("upgradeneeded",l=>{r(Qt(s.result),l.oldVersion,l.newVersion,Qt(s.transaction),l)}),n&&s.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{o&&l.addEventListener("close",()=>o()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const KE=["get","getKey","getAll","getAllKeys","count"],GE=["put","add","delete","clear"],Oa=new Map;function gd(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Oa.get(t))return Oa.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=GE.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||KE.includes(n)))return;const o=async function(s,...a){const l=this.transaction(s,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Oa.set(t,o),o}$E(e=>({...e,get:(t,n,r)=>gd(t,n)||e.get(t,n,r),has:(t,n)=>!!gd(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YE{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(QE(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function QE(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Ql="@firebase/app",vd="0.10.15";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _t=new lg("@firebase/app"),XE="@firebase/app-compat",qE="@firebase/analytics-compat",JE="@firebase/analytics",ZE="@firebase/app-check-compat",eS="@firebase/app-check",tS="@firebase/auth",nS="@firebase/auth-compat",rS="@firebase/database",iS="@firebase/data-connect",oS="@firebase/database-compat",sS="@firebase/functions",aS="@firebase/functions-compat",lS="@firebase/installations",uS="@firebase/installations-compat",cS="@firebase/messaging",fS="@firebase/messaging-compat",dS="@firebase/performance",hS="@firebase/performance-compat",pS="@firebase/remote-config",mS="@firebase/remote-config-compat",gS="@firebase/storage",vS="@firebase/storage-compat",yS="@firebase/firestore",wS="@firebase/vertexai",_S="@firebase/firestore-compat",ES="firebase",SS="11.0.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xl="[DEFAULT]",kS={[Ql]:"fire-core",[XE]:"fire-core-compat",[JE]:"fire-analytics",[qE]:"fire-analytics-compat",[eS]:"fire-app-check",[ZE]:"fire-app-check-compat",[tS]:"fire-auth",[nS]:"fire-auth-compat",[rS]:"fire-rtdb",[iS]:"fire-data-connect",[oS]:"fire-rtdb-compat",[sS]:"fire-fn",[aS]:"fire-fn-compat",[lS]:"fire-iid",[uS]:"fire-iid-compat",[cS]:"fire-fcm",[fS]:"fire-fcm-compat",[dS]:"fire-perf",[hS]:"fire-perf-compat",[pS]:"fire-rc",[mS]:"fire-rc-compat",[gS]:"fire-gcs",[vS]:"fire-gcs-compat",[yS]:"fire-fst",[_S]:"fire-fst-compat",[wS]:"fire-vertex","fire-js":"fire-js",[ES]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ds=new Map,xS=new Map,ql=new Map;function yd(e,t){try{e.container.addComponent(t)}catch(n){_t.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Pi(e){const t=e.name;if(ql.has(t))return _t.debug(`There were multiple attempts to register component ${t}.`),!1;ql.set(t,e);for(const n of ds.values())yd(n,e);for(const n of xS.values())yd(n,e);return!0}function fg(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function ut(e){return e.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IS={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Xt=new zi("app","Firebase",IS);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CS{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new _r("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Xt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $i=SS;function dg(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Xl,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw Xt.create("bad-app-name",{appName:String(i)});if(n||(n=sg()),!n)throw Xt.create("no-options");const o=ds.get(i);if(o){if(fs(n,o.options)&&fs(r,o.config))return o;throw Xt.create("duplicate-app",{appName:i})}const s=new bE(i);for(const l of ql.values())s.addComponent(l);const a=new CS(n,r,s);return ds.set(i,a),a}function PS(e=Xl){const t=ds.get(e);if(!t&&e===Xl&&sg())return dg();if(!t)throw Xt.create("no-app",{appName:e});return t}function sr(e,t,n){var r;let i=(r=kS[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const o=i.match(/\s|\//),s=t.match(/\s|\//);if(o||s){const a=[`Unable to register library "${i}" with version "${t}":`];o&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&s&&a.push("and"),s&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),_t.warn(a.join(" "));return}Pi(new _r(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TS="firebase-heartbeat-database",NS=1,Ti="firebase-heartbeat-store";let Aa=null;function hg(){return Aa||(Aa=WE(TS,NS,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(Ti)}catch(n){console.warn(n)}}}}).catch(e=>{throw Xt.create("idb-open",{originalErrorMessage:e.message})})),Aa}async function OS(e){try{const n=(await hg()).transaction(Ti),r=await n.objectStore(Ti).get(pg(e));return await n.done,r}catch(t){if(t instanceof un)_t.warn(t.message);else{const n=Xt.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});_t.warn(n.message)}}}async function wd(e,t){try{const r=(await hg()).transaction(Ti,"readwrite");await r.objectStore(Ti).put(t,pg(e)),await r.done}catch(n){if(n instanceof un)_t.warn(n.message);else{const r=Xt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});_t.warn(r.message)}}}function pg(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AS=1024,bS=30*24*60*60*1e3;class RS{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new DS(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=_d();return((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(s=>s.date===o)?void 0:(this._heartbeatsCache.heartbeats.push({date:o,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const a=new Date(s.date).valueOf();return Date.now()-a<=bS}),this._storage.overwrite(this._heartbeatsCache))}catch(r){_t.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=_d(),{heartbeatsToSend:r,unsentEntries:i}=LS(this._heartbeatsCache.heartbeats),o=ig(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(n){return _t.warn(n),""}}}function _d(){return new Date().toISOString().substring(0,10)}function LS(e,t=AS){const n=[];let r=e.slice();for(const i of e){const o=n.find(s=>s.agent===i.agent);if(o){if(o.dates.push(i.date),Ed(n)>t){o.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Ed(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class DS{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return _E()?EE().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await OS(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return wd(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return wd(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function Ed(e){return ig(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MS(e){Pi(new _r("platform-logger",t=>new YE(t),"PRIVATE")),Pi(new _r("heartbeat",t=>new RS(t),"PRIVATE")),sr(Ql,vd,e),sr(Ql,vd,"esm2017"),sr("fire-js","")}MS("");function uc(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function mg(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const jS=mg,gg=new zi("auth","Firebase",mg());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hs=new lg("@firebase/auth");function US(e,...t){hs.logLevel<=z.WARN&&hs.warn(`Auth (${$i}): ${e}`,...t)}function To(e,...t){hs.logLevel<=z.ERROR&&hs.error(`Auth (${$i}): ${e}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ke(e,...t){throw cc(e,...t)}function nt(e,...t){return cc(e,...t)}function vg(e,t,n){const r=Object.assign(Object.assign({},jS()),{[t]:n});return new zi("auth","Firebase",r).create(t,{appName:e.name})}function qt(e){return vg(e,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function cc(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return gg.create(e,...t)}function A(e,t,...n){if(!e)throw cc(t,...n)}function ct(e){const t="INTERNAL ASSERTION FAILED: "+e;throw To(t),new Error(t)}function Et(e,t){e||ct(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jl(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function FS(){return Sd()==="http:"||Sd()==="https:"}function Sd(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zS(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(FS()||vE()||"connection"in navigator)?navigator.onLine:!0}function BS(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hi{constructor(t,n){this.shortDelay=t,this.longDelay=n,Et(n>t,"Short delay should be less than long delay!"),this.isMobile=mE()||yE()}get(){return zS()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fc(e,t){Et(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yg{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ct("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ct("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ct("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $S={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HS=new Hi(3e4,6e4);function Dn(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function cn(e,t,n,r,i={}){return wg(e,i,async()=>{let o={},s={};r&&(t==="GET"?s=r:o={body:JSON.stringify(r)});const a=Bi(Object.assign({key:e.config.apiKey},s)).slice(1),l=await e._getAdditionalHeaders();l["Content-Type"]="application/json",e.languageCode&&(l["X-Firebase-Locale"]=e.languageCode);const u=Object.assign({method:t,headers:l},o);return gE()||(u.referrerPolicy="no-referrer"),yg.fetch()(_g(e,e.config.apiHost,n,a),u)})}async function wg(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},$S),t);try{const i=new WS(e),o=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const s=await o.json();if("needConfirmation"in s)throw ho(e,"account-exists-with-different-credential",s);if(o.ok&&!("errorMessage"in s))return s;{const a=o.ok?s.errorMessage:s.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw ho(e,"credential-already-in-use",s);if(l==="EMAIL_EXISTS")throw ho(e,"email-already-in-use",s);if(l==="USER_DISABLED")throw ho(e,"user-disabled",s);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw vg(e,c,u);Ke(e,c)}}catch(i){if(i instanceof un)throw i;Ke(e,"network-request-failed",{message:String(i)})}}async function Bs(e,t,n,r,i={}){const o=await cn(e,t,n,r,i);return"mfaPendingCredential"in o&&Ke(e,"multi-factor-auth-required",{_serverResponse:o}),o}function _g(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?fc(e.config,i):`${e.config.apiScheme}://${i}`}function VS(e){switch(e){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class WS{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(nt(this.auth,"network-request-failed")),HS.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ho(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=nt(e,t,r);return i.customData._tokenResponse=n,i}function kd(e){return e!==void 0&&e.enterprise!==void 0}class KS{constructor(t){if(this.siteKey="",this.recaptchaEnforcementState=[],t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=t.recaptchaEnforcementState}getProviderEnforcementState(t){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===t)return VS(n.enforcementState);return null}isProviderEnabled(t){return this.getProviderEnforcementState(t)==="ENFORCE"||this.getProviderEnforcementState(t)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function GS(e,t){return cn(e,"GET","/v2/recaptchaConfig",Dn(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function YS(e,t){return cn(e,"POST","/v1/accounts:delete",t)}async function Eg(e,t){return cn(e,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oi(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function QS(e,t=!1){const n=xt(e),r=await n.getIdToken(t),i=dc(r);A(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const o=typeof i.firebase=="object"?i.firebase:void 0,s=o==null?void 0:o.sign_in_provider;return{claims:i,token:r,authTime:oi(ba(i.auth_time)),issuedAtTime:oi(ba(i.iat)),expirationTime:oi(ba(i.exp)),signInProvider:s||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function ba(e){return Number(e)*1e3}function dc(e){const[t,n,r]=e.split(".");if(t===void 0||n===void 0||r===void 0)return To("JWT malformed, contained fewer than 3 sections"),null;try{const i=og(n);return i?JSON.parse(i):(To("Failed to decode base64 JWT payload"),null)}catch(i){return To("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function xd(e){const t=dc(e);return A(t,"internal-error"),A(typeof t.exp<"u","internal-error"),A(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ni(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof un&&XS(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function XS({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qS{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zl{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=oi(this.lastLoginAt),this.creationTime=oi(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ps(e){var t;const n=e.auth,r=await e.getIdToken(),i=await Ni(e,Eg(n,{idToken:r}));A(i==null?void 0:i.users.length,n,"internal-error");const o=i.users[0];e._notifyReloadListener(o);const s=!((t=o.providerUserInfo)===null||t===void 0)&&t.length?Sg(o.providerUserInfo):[],a=ZS(e.providerData,s),l=e.isAnonymous,u=!(e.email&&o.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,d={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new Zl(o.createdAt,o.lastLoginAt),isAnonymous:c};Object.assign(e,d)}async function JS(e){const t=xt(e);await ps(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function ZS(e,t){return[...e.filter(r=>!t.some(i=>i.providerId===r.providerId)),...t]}function Sg(e){return e.map(t=>{var{providerId:n}=t,r=uc(t,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function e2(e,t){const n=await wg(e,{},async()=>{const r=Bi({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:o}=e.config,s=_g(e,i,"/v1/token",`key=${o}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",yg.fetch()(s,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function t2(e,t){return cn(e,"POST","/v2/accounts:revokeToken",Dn(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){A(t.idToken,"internal-error"),A(typeof t.idToken<"u","internal-error"),A(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):xd(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}updateFromIdToken(t){A(t.length!==0,"internal-error");const n=xd(t);this.updateTokensAndExpiration(t,null,n)}async getToken(t,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(A(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:i,expiresIn:o}=await e2(t,n);this.updateTokensAndExpiration(r,i,Number(o))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:i,expirationTime:o}=n,s=new ar;return r&&(A(typeof r=="string","internal-error",{appName:t}),s.refreshToken=r),i&&(A(typeof i=="string","internal-error",{appName:t}),s.accessToken=i),o&&(A(typeof o=="number","internal-error",{appName:t}),s.expirationTime=o),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new ar,this.toJSON())}_performRefresh(){return ct("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pt(e,t){A(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class ft{constructor(t){var{uid:n,auth:r,stsTokenManager:i}=t,o=uc(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new qS(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new Zl(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(t){const n=await Ni(this,this.stsTokenManager.getToken(this.auth,t));return A(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return QS(this,t)}reload(){return JS(this)}_assign(t){this!==t&&(A(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new ft(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){A(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await ps(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(ut(this.auth.app))return Promise.reject(qt(this.auth));const t=await this.getIdToken();return await Ni(this,YS(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var r,i,o,s,a,l,u,c;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,h=(i=n.email)!==null&&i!==void 0?i:void 0,v=(o=n.phoneNumber)!==null&&o!==void 0?o:void 0,w=(s=n.photoURL)!==null&&s!==void 0?s:void 0,_=(a=n.tenantId)!==null&&a!==void 0?a:void 0,E=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,p=(u=n.createdAt)!==null&&u!==void 0?u:void 0,f=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:m,emailVerified:y,isAnonymous:k,providerData:I,stsTokenManager:C}=n;A(m&&C,t,"internal-error");const O=ar.fromJSON(this.name,C);A(typeof m=="string",t,"internal-error"),Pt(d,t.name),Pt(h,t.name),A(typeof y=="boolean",t,"internal-error"),A(typeof k=="boolean",t,"internal-error"),Pt(v,t.name),Pt(w,t.name),Pt(_,t.name),Pt(E,t.name),Pt(p,t.name),Pt(f,t.name);const F=new ft({uid:m,auth:t,email:h,emailVerified:y,displayName:d,isAnonymous:k,photoURL:w,phoneNumber:v,tenantId:_,stsTokenManager:O,createdAt:p,lastLoginAt:f});return I&&Array.isArray(I)&&(F.providerData=I.map(b=>Object.assign({},b))),E&&(F._redirectEventId=E),F}static async _fromIdTokenResponse(t,n,r=!1){const i=new ar;i.updateFromServerResponse(n);const o=new ft({uid:n.localId,auth:t,stsTokenManager:i,isAnonymous:r});return await ps(o),o}static async _fromGetAccountInfoResponse(t,n,r){const i=n.users[0];A(i.localId!==void 0,"internal-error");const o=i.providerUserInfo!==void 0?Sg(i.providerUserInfo):[],s=!(i.email&&i.passwordHash)&&!(o!=null&&o.length),a=new ar;a.updateFromIdToken(r);const l=new ft({uid:i.localId,auth:t,stsTokenManager:a,isAnonymous:s}),u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new Zl(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(o!=null&&o.length)};return Object.assign(l,u),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Id=new Map;function dt(e){Et(e instanceof Function,"Expected a class definition");let t=Id.get(e);return t?(Et(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Id.set(e,t),t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kg{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}kg.type="NONE";const Cd=kg;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function No(e,t,n){return`firebase:${e}:${t}:${n}`}class lr{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:i,name:o}=this.auth;this.fullUserKey=No(this.userKey,i.apiKey,o),this.fullPersistenceKey=No("persistence",i.apiKey,o),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?ft._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new lr(dt(Cd),t,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let o=i[0]||dt(Cd);const s=No(r,t.config.apiKey,t.name);let a=null;for(const u of n)try{const c=await u._get(s);if(c){const d=ft._fromJSON(t,c);u!==o&&(a=d),o=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!o._shouldAllowMigration||!l.length?new lr(o,t,r):(o=l[0],a&&await o._set(s,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==o)try{await u._remove(s)}catch{}})),new lr(o,t,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pd(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Pg(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(xg(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Ng(t))return"Blackberry";if(Og(t))return"Webos";if(Ig(t))return"Safari";if((t.includes("chrome/")||Cg(t))&&!t.includes("edge/"))return"Chrome";if(Tg(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function xg(e=me()){return/firefox\//i.test(e)}function Ig(e=me()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Cg(e=me()){return/crios\//i.test(e)}function Pg(e=me()){return/iemobile/i.test(e)}function Tg(e=me()){return/android/i.test(e)}function Ng(e=me()){return/blackberry/i.test(e)}function Og(e=me()){return/webos/i.test(e)}function hc(e=me()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function n2(e=me()){var t;return hc(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function r2(){return wE()&&document.documentMode===10}function Ag(e=me()){return hc(e)||Tg(e)||Og(e)||Ng(e)||/windows phone/i.test(e)||Pg(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bg(e,t=[]){let n;switch(e){case"Browser":n=Pd(me());break;case"Worker":n=`${Pd(me())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${$i}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i2{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=o=>new Promise((s,a)=>{try{const l=t(o);s(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const r of this.queue)await r(t),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function o2(e,t={}){return cn(e,"GET","/v2/passwordPolicy",Dn(e,t))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s2=6;class a2{constructor(t){var n,r,i,o;const s=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=s.minPasswordLength)!==null&&n!==void 0?n:s2,s.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=s.maxPasswordLength),s.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=s.containsLowercaseCharacter),s.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=s.containsUppercaseCharacter),s.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=s.containsNumericCharacter),s.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=s.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=t.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(o=t.forceUpgradeOnSignin)!==null&&o!==void 0?o:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var n,r,i,o,s,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,l),this.validatePasswordCharacterOptions(t,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsUppercaseLetter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(s=l.containsNumericCharacter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(t,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=t.length>=r),i&&(n.meetsMaxPasswordLength=t.length<=i)}validatePasswordCharacterOptions(t,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<t.length;i++)r=t.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(t,n,r,i,o){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l2{constructor(t,n,r,i){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Td(this),this.idTokenSubscription=new Td(this),this.beforeStateQueue=new i2(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=gg,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=dt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await lr.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const n=await Eg(this,{idToken:t}),r=await ft._fromGetAccountInfoResponse(this,n,t);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var n;if(ut(this.app)){const s=this.app.settings.authIdToken;return s?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(s).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,o=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(t);(!s||s===a)&&(l!=null&&l.user)&&(i=l.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(s){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(s))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return A(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await ps(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=BS()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(ut(this.app))return Promise.reject(qt(this));const n=t?xt(t):null;return n&&A(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&A(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return ut(this.app)?Promise.reject(qt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return ut(this.app)?Promise.reject(qt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(dt(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await o2(this),n=new a2(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new zi("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const r=this.onAuthStateChanged(()=>{r(),t()},n)}})}async revokeAccessToken(t){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await t2(this,r)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&dt(t)||this._popupRedirectResolver;A(n,this,"argument-error"),this.redirectPersistenceManager=await lr.create(this,[dt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,i){if(this._deleted)return()=>{};const o=typeof n=="function"?n:n.next.bind(n);let s=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(A(a,this,"internal-error"),a.then(()=>{s||o(this.currentUser)}),typeof n=="function"){const l=t.addObserver(n,r,i);return()=>{s=!0,l()}}else{const l=t.addObserver(n);return()=>{s=!0,l()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return A(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=bg(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var t;const n=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return n!=null&&n.error&&US(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Pr(e){return xt(e)}class Td{constructor(t){this.auth=t,this.observer=null,this.addObserver=CE(n=>this.observer=n)}get next(){return A(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $s={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function u2(e){$s=e}function Rg(e){return $s.loadJS(e)}function c2(){return $s.recaptchaEnterpriseScript}function f2(){return $s.gapiScript}function d2(e){return`__${e}${Math.floor(Math.random()*1e6)}`}class h2{constructor(){this.enterprise=new p2}ready(t){t()}execute(t,n){return Promise.resolve("token")}render(t,n){return""}}class p2{ready(t){t()}execute(t,n){return Promise.resolve("token")}render(t,n){return""}}const m2="recaptcha-enterprise",Lg="NO_RECAPTCHA";class g2{constructor(t){this.type=m2,this.auth=Pr(t)}async verify(t="verify",n=!1){async function r(o){if(!n){if(o.tenantId==null&&o._agentRecaptchaConfig!=null)return o._agentRecaptchaConfig.siteKey;if(o.tenantId!=null&&o._tenantRecaptchaConfigs[o.tenantId]!==void 0)return o._tenantRecaptchaConfigs[o.tenantId].siteKey}return new Promise(async(s,a)=>{GS(o,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new KS(l);return o.tenantId==null?o._agentRecaptchaConfig=u:o._tenantRecaptchaConfigs[o.tenantId]=u,s(u.siteKey)}}).catch(l=>{a(l)})})}function i(o,s,a){const l=window.grecaptcha;kd(l)?l.enterprise.ready(()=>{l.enterprise.execute(o,{action:t}).then(u=>{s(u)}).catch(()=>{s(Lg)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new h2().execute("siteKey",{action:"verify"}):new Promise((o,s)=>{r(this.auth).then(a=>{if(!n&&kd(window.grecaptcha))i(a,o,s);else{if(typeof window>"u"){s(new Error("RecaptchaVerifier is only supported in browser"));return}let l=c2();l.length!==0&&(l+=a),Rg(l).then(()=>{i(a,o,s)}).catch(u=>{s(u)})}}).catch(a=>{s(a)})})}}async function Nd(e,t,n,r=!1,i=!1){const o=new g2(e);let s;if(i)s=Lg;else try{s=await o.verify(n)}catch{s=await o.verify(n,!0)}const a=Object.assign({},t);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const l=a.phoneEnrollmentInfo.phoneNumber,u=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:u,captchaResponse:s,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const l=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:s,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return r?Object.assign(a,{captchaResp:s}):Object.assign(a,{captchaResponse:s}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function Od(e,t,n,r,i){var o;if(!((o=e._getRecaptchaConfig())===null||o===void 0)&&o.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await Nd(e,t,n,n==="getOobCode");return r(e,s)}else return r(e,t).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await Nd(e,t,n,n==="getOobCode");return r(e,a)}else return Promise.reject(s)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v2(e,t){const n=fg(e,"auth");if(n.isInitialized()){const i=n.getImmediate(),o=n.getOptions();if(fs(o,t??{}))return i;Ke(i,"already-initialized")}return n.initialize({options:t})}function y2(e,t){const n=(t==null?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(dt);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}function w2(e,t,n){const r=Pr(e);A(r._canInitEmulator,r,"emulator-config-failed"),A(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!1,o=Dg(t),{host:s,port:a}=_2(t),l=a===null?"":`:${a}`;r.config.emulator={url:`${o}//${s}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:s,port:a,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})}),E2()}function Dg(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function _2(e){const t=Dg(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const o=i[1];return{host:o,port:Ad(r.substr(o.length+1))}}else{const[o,s]=r.split(":");return{host:o,port:Ad(s)}}}function Ad(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function E2(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pc{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return ct("not implemented")}_getIdTokenResponse(t){return ct("not implemented")}_linkToIdToken(t,n){return ct("not implemented")}_getReauthenticationResolver(t){return ct("not implemented")}}async function S2(e,t){return cn(e,"POST","/v1/accounts:signUp",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function k2(e,t){return Bs(e,"POST","/v1/accounts:signInWithPassword",Dn(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function x2(e,t){return Bs(e,"POST","/v1/accounts:signInWithEmailLink",Dn(e,t))}async function I2(e,t){return Bs(e,"POST","/v1/accounts:signInWithEmailLink",Dn(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oi extends pc{constructor(t,n,r,i=null){super("password",r),this._email=t,this._password=n,this._tenantId=i}static _fromEmailAndPassword(t,n){return new Oi(t,n,"password")}static _fromEmailAndCode(t,n,r=null){return new Oi(t,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Od(t,n,"signInWithPassword",k2);case"emailLink":return x2(t,{email:this._email,oobCode:this._password});default:Ke(t,"internal-error")}}async _linkToIdToken(t,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Od(t,r,"signUpPassword",S2);case"emailLink":return I2(t,{idToken:n,email:this._email,oobCode:this._password});default:Ke(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ur(e,t){return Bs(e,"POST","/v1/accounts:signInWithIdp",Dn(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C2="http://localhost";class An extends pc{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new An(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):Ke("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:i}=n,o=uc(n,["providerId","signInMethod"]);if(!r||!i)return null;const s=new An(r,i);return s.idToken=o.idToken||void 0,s.accessToken=o.accessToken||void 0,s.secret=o.secret,s.nonce=o.nonce,s.pendingToken=o.pendingToken||null,s}_getIdTokenResponse(t){const n=this.buildRequest();return ur(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,ur(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,ur(t,n)}buildRequest(){const t={requestUri:C2,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=Bi(n)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P2(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function T2(e){const t=Wr(Kr(e)).link,n=t?Wr(Kr(t)).deep_link_id:null,r=Wr(Kr(e)).deep_link_id;return(r?Wr(Kr(r)).link:null)||r||n||t||e}class mc{constructor(t){var n,r,i,o,s,a;const l=Wr(Kr(t)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,d=P2((i=l.mode)!==null&&i!==void 0?i:null);A(u&&c&&d,"argument-error"),this.apiKey=u,this.operation=d,this.code=c,this.continueUrl=(o=l.continueUrl)!==null&&o!==void 0?o:null,this.languageCode=(s=l.languageCode)!==null&&s!==void 0?s:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(t){const n=T2(t);try{return new mc(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr{constructor(){this.providerId=Tr.PROVIDER_ID}static credential(t,n){return Oi._fromEmailAndPassword(t,n)}static credentialWithLink(t,n){const r=mc.parseLink(n);return A(r,"argument-error"),Oi._fromEmailAndCode(t,r.code,r.tenantId)}}Tr.PROVIDER_ID="password";Tr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Tr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mg{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vi extends Mg{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt extends Vi{constructor(){super("facebook.com")}static credential(t){return An._fromParams({providerId:bt.PROVIDER_ID,signInMethod:bt.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return bt.credentialFromTaggedObject(t)}static credentialFromError(t){return bt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return bt.credential(t.oauthAccessToken)}catch{return null}}}bt.FACEBOOK_SIGN_IN_METHOD="facebook.com";bt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt extends Vi{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return An._fromParams({providerId:Rt.PROVIDER_ID,signInMethod:Rt.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return Rt.credentialFromTaggedObject(t)}static credentialFromError(t){return Rt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return Rt.credential(n,r)}catch{return null}}}Rt.GOOGLE_SIGN_IN_METHOD="google.com";Rt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt extends Vi{constructor(){super("github.com")}static credential(t){return An._fromParams({providerId:Lt.PROVIDER_ID,signInMethod:Lt.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Lt.credentialFromTaggedObject(t)}static credentialFromError(t){return Lt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Lt.credential(t.oauthAccessToken)}catch{return null}}}Lt.GITHUB_SIGN_IN_METHOD="github.com";Lt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt extends Vi{constructor(){super("twitter.com")}static credential(t,n){return An._fromParams({providerId:Dt.PROVIDER_ID,signInMethod:Dt.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return Dt.credentialFromTaggedObject(t)}static credentialFromError(t){return Dt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return Dt.credential(n,r)}catch{return null}}}Dt.TWITTER_SIGN_IN_METHOD="twitter.com";Dt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,i=!1){const o=await ft._fromIdTokenResponse(t,r,i),s=bd(r);return new Er({user:o,providerId:s,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const i=bd(r);return new Er({user:t,providerId:i,_tokenResponse:r,operationType:n})}}function bd(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms extends un{constructor(t,n,r,i){var o;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,ms.prototype),this.customData={appName:t.name,tenantId:(o=t.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,i){return new ms(t,n,r,i)}}function jg(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?ms._fromErrorAndOperation(e,o,t,r):o})}async function N2(e,t,n=!1){const r=await Ni(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Er._forOperation(e,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function O2(e,t,n=!1){const{auth:r}=e;if(ut(r.app))return Promise.reject(qt(r));const i="reauthenticate";try{const o=await Ni(e,jg(r,i,t,e),n);A(o.idToken,r,"internal-error");const s=dc(o.idToken);A(s,r,"internal-error");const{sub:a}=s;return A(e.uid===a,r,"user-mismatch"),Er._forOperation(e,i,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&Ke(r,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ug(e,t,n=!1){if(ut(e.app))return Promise.reject(qt(e));const r="signIn",i=await jg(e,r,t),o=await Er._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(o.user),o}async function A2(e,t){return Ug(Pr(e),t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function b2(e){const t=Pr(e);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}function R2(e,t,n){return ut(e.app)?Promise.reject(qt(e)):A2(xt(e),Tr.credential(t,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&b2(e),r})}function L2(e,t,n,r){return xt(e).onIdTokenChanged(t,n,r)}function D2(e,t,n){return xt(e).beforeAuthStateChanged(t,n)}function M2(e,t,n,r){return xt(e).onAuthStateChanged(t,n,r)}function j2(e){return xt(e).signOut()}const gs="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fg{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(gs,"1"),this.storage.removeItem(gs),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U2=1e3,F2=10;class zg extends Fg{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Ag(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&t(n,i,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((s,a,l)=>{this.notifyListeners(s,l)});return}const r=t.key;n?this.detachListener():this.stopPolling();const i=()=>{const s=this.storage.getItem(r);!n&&this.localCache[r]===s||this.notifyListeners(r,s)},o=this.storage.getItem(r);r2()&&o!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,F2):i()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},U2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}zg.type="LOCAL";const z2=zg;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bg extends Fg{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}Bg.type="SESSION";const $g=Bg;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B2(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hs{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(i=>i.isListeningto(t));if(n)return n;const r=new Hs(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:i,data:o}=n.data,s=this.handlersMap[i];if(!(s!=null&&s.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(s).map(async u=>u(n.origin,o)),l=await B2(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Hs.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gc(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(Math.random()*10);return e+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $2{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let o,s;return new Promise((a,l)=>{const u=gc("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);s={messageChannel:i,onMessage(d){const h=d;if(h.data.eventId===u)switch(h.data.status){case"ack":clearTimeout(c),o=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),a(h.data.response);break;default:clearTimeout(c),clearTimeout(o),l(new Error("invalid_response"));break}}},this.handlers.add(s),i.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:t,eventId:u,data:n},[i.port2])}).finally(()=>{s&&this.removeMessageHandler(s)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rt(){return window}function H2(e){rt().location.href=e}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hg(){return typeof rt().WorkerGlobalScope<"u"&&typeof rt().importScripts=="function"}async function V2(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function W2(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function K2(){return Hg()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vg="firebaseLocalStorageDb",G2=1,vs="firebaseLocalStorage",Wg="fbase_key";class Wi{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Vs(e,t){return e.transaction([vs],t?"readwrite":"readonly").objectStore(vs)}function Y2(){const e=indexedDB.deleteDatabase(Vg);return new Wi(e).toPromise()}function eu(){const e=indexedDB.open(Vg,G2);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(vs,{keyPath:Wg})}catch(i){n(i)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(vs)?t(r):(r.close(),await Y2(),t(await eu()))})})}async function Rd(e,t,n){const r=Vs(e,!0).put({[Wg]:t,value:n});return new Wi(r).toPromise()}async function Q2(e,t){const n=Vs(e,!1).get(t),r=await new Wi(n).toPromise();return r===void 0?null:r.value}function Ld(e,t){const n=Vs(e,!0).delete(t);return new Wi(n).toPromise()}const X2=800,q2=3;class Kg{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await eu(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>q2)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Hg()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Hs._getInstance(K2()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await V2(),!this.activeServiceWorker)return;this.sender=new $2(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((t=r[0])===null||t===void 0)&&t.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||W2()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await eu();return await Rd(t,gs,"1"),await Ld(t,gs),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Rd(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>Q2(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Ld(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(i=>{const o=Vs(i,!1).getAll();return new Wi(o).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(t.length!==0)for(const{fbase_key:i,value:o}of t)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(o)&&(this.notifyListeners(i,o),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),X2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Kg.type="LOCAL";const J2=Kg;new Hi(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z2(e,t){return t?dt(t):(A(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vc extends pc{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return ur(t,this._buildIdpRequest())}_linkToIdToken(t,n){return ur(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return ur(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function ek(e){return Ug(e.auth,new vc(e),e.bypassAuthState)}function tk(e){const{auth:t,user:n}=e;return A(n,t,"internal-error"),O2(n,new vc(e),e.bypassAuthState)}async function nk(e){const{auth:t,user:n}=e;return A(n,t,"internal-error"),N2(n,new vc(e),e.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gg{constructor(t,n,r,i,o=!1){this.auth=t,this.resolver=r,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:i,tenantId:o,error:s,type:a}=t;if(s){this.reject(s);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:o||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return ek;case"linkViaPopup":case"linkViaRedirect":return nk;case"reauthViaPopup":case"reauthViaRedirect":return tk;default:Ke(this.auth,"internal-error")}}resolve(t){Et(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){Et(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rk=new Hi(2e3,1e4);class Jn extends Gg{constructor(t,n,r,i,o){super(t,n,i,o),this.provider=r,this.authWindow=null,this.pollId=null,Jn.currentPopupAction&&Jn.currentPopupAction.cancel(),Jn.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return A(t,this.auth,"internal-error"),t}async onExecution(){Et(this.filter.length===1,"Popup operations only handle one event");const t=gc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(nt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(nt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Jn.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(nt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,rk.get())};t()}}Jn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ik="pendingRedirect",Oo=new Map;class ok extends Gg{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=Oo.get(this.auth._key());if(!t){try{const r=await sk(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}Oo.set(this.auth._key(),t)}return this.bypassAuthState||Oo.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function sk(e,t){const n=uk(t),r=lk(e);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function ak(e,t){Oo.set(e._key(),t)}function lk(e){return dt(e._redirectPersistence)}function uk(e){return No(ik,e.config.apiKey,e.name)}async function ck(e,t,n=!1){if(ut(e.app))return Promise.reject(qt(e));const r=Pr(e),i=Z2(r,t),s=await new ok(r,i,n).execute();return s&&!n&&(delete s.user._redirectEventId,await r._persistUserIfCurrent(s.user),await r._setRedirectUser(null,t)),s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fk=10*60*1e3;class dk{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!hk(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!Yg(t)){const i=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(nt(this.auth,i))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=fk&&this.cachedEventUids.clear(),this.cachedEventUids.has(Dd(t))}saveEventToCache(t){this.cachedEventUids.add(Dd(t)),this.lastProcessedEventTime=Date.now()}}function Dd(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function Yg({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function hk(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Yg(e);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pk(e,t={}){return cn(e,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mk=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,gk=/^https?/;async function vk(e){if(e.config.emulator)return;const{authorizedDomains:t}=await pk(e);for(const n of t)try{if(yk(n))return}catch{}Ke(e,"unauthorized-domain")}function yk(e){const t=Jl(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const s=new URL(e);return s.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&s.hostname===r}if(!gk.test(n))return!1;if(mk.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wk=new Hi(3e4,6e4);function Md(){const e=rt().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function _k(e){return new Promise((t,n)=>{var r,i,o;function s(){Md(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Md(),n(nt(e,"network-request-failed"))},timeout:wk.get()})}if(!((i=(r=rt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)t(gapi.iframes.getContext());else if(!((o=rt().gapi)===null||o===void 0)&&o.load)s();else{const a=d2("iframefcb");return rt()[a]=()=>{gapi.load?s():n(nt(e,"network-request-failed"))},Rg(`${f2()}?onload=${a}`).catch(l=>n(l))}}).catch(t=>{throw Ao=null,t})}let Ao=null;function Ek(e){return Ao=Ao||_k(e),Ao}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sk=new Hi(5e3,15e3),kk="__/auth/iframe",xk="emulator/auth/iframe",Ik={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Ck=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Pk(e){const t=e.config;A(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?fc(t,xk):`https://${e.config.authDomain}/${kk}`,r={apiKey:t.apiKey,appName:e.name,v:$i},i=Ck.get(e.config.apiHost);i&&(r.eid=i);const o=e._getFrameworks();return o.length&&(r.fw=o.join(",")),`${n}?${Bi(r).slice(1)}`}async function Tk(e){const t=await Ek(e),n=rt().gapi;return A(n,e,"internal-error"),t.open({where:document.body,url:Pk(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Ik,dontclear:!0},r=>new Promise(async(i,o)=>{await r.restyle({setHideOnLeave:!1});const s=nt(e,"network-request-failed"),a=rt().setTimeout(()=>{o(s)},Sk.get());function l(){rt().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{o(s)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nk={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Ok=500,Ak=600,bk="_blank",Rk="http://localhost";class jd{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Lk(e,t,n,r=Ok,i=Ak){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),s=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},Nk),{width:r.toString(),height:i.toString(),top:o,left:s}),u=me().toLowerCase();n&&(a=Cg(u)?bk:n),xg(u)&&(t=t||Rk,l.scrollbars="yes");const c=Object.entries(l).reduce((h,[v,w])=>`${h}${v}=${w},`,"");if(n2(u)&&a!=="_self")return Dk(t||"",a),new jd(null);const d=window.open(t||"",a,c);A(d,e,"popup-blocked");try{d.focus()}catch{}return new jd(d)}function Dk(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mk="__/auth/handler",jk="emulator/auth/handler",Uk=encodeURIComponent("fac");async function Ud(e,t,n,r,i,o){A(e.config.authDomain,e,"auth-domain-config-required"),A(e.config.apiKey,e,"invalid-api-key");const s={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:$i,eventId:i};if(t instanceof Mg){t.setDefaultLanguage(e.languageCode),s.providerId=t.providerId||"",IE(t.getCustomParameters())||(s.customParameters=JSON.stringify(t.getCustomParameters()));for(const[c,d]of Object.entries({}))s[c]=d}if(t instanceof Vi){const c=t.getScopes().filter(d=>d!=="");c.length>0&&(s.scopes=c.join(","))}e.tenantId&&(s.tid=e.tenantId);const a=s;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];const l=await e._getAppCheckToken(),u=l?`#${Uk}=${encodeURIComponent(l)}`:"";return`${Fk(e)}?${Bi(a).slice(1)}${u}`}function Fk({config:e}){return e.emulator?fc(e,jk):`https://${e.authDomain}/${Mk}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ra="webStorageSupport";class zk{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=$g,this._completeRedirectFn=ck,this._overrideRedirectResult=ak}async _openPopup(t,n,r,i){var o;Et((o=this.eventManagers[t._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await Ud(t,n,r,Jl(),i);return Lk(t,s,gc())}async _openRedirect(t,n,r,i){await this._originValidation(t);const o=await Ud(t,n,r,Jl(),i);return H2(o),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:i,promise:o}=this.eventManagers[n];return i?Promise.resolve(i):(Et(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await Tk(t),r=new dk(t);return n.register("authEvent",i=>(A(i==null?void 0:i.authEvent,t,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(Ra,{type:Ra},i=>{var o;const s=(o=i==null?void 0:i[0])===null||o===void 0?void 0:o[Ra];s!==void 0&&n(!!s),Ke(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=vk(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return Ag()||Ig()||hc()}}const Bk=zk;var Fd="@firebase/auth",zd="1.8.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $k{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){A(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hk(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Vk(e){Pi(new _r("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),o=t.getProvider("app-check-internal"),{apiKey:s,authDomain:a}=r.options;A(s&&!s.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:s,authDomain:a,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:bg(e)},u=new l2(r,i,o,l);return y2(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),Pi(new _r("auth-internal",t=>{const n=Pr(t.getProvider("auth").getImmediate());return(r=>new $k(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),sr(Fd,zd,Hk(e)),sr(Fd,zd,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wk=5*60,Kk=ag("authIdTokenMaxAge")||Wk;let Bd=null;const Gk=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Kk)return;const i=n==null?void 0:n.token;Bd!==i&&(Bd=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Yk(e=PS()){const t=fg(e,"auth");if(t.isInitialized())return t.getImmediate();const n=v2(e,{popupRedirectResolver:Bk,persistence:[J2,z2,$g]}),r=ag("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const o=new URL(r,location.origin);if(location.origin===o.origin){const s=Gk(o.toString());D2(n,s,()=>s(n.currentUser)),L2(n,a=>s(a))}}const i=hE("auth");return i&&w2(n,`http://${i}`),n}function Qk(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}u2({loadJS(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=i=>{const o=nt("internal-error");o.customData=i,n(o)},r.type="text/javascript",r.charset="UTF-8",Qk().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Vk("Browser");var Xk="firebase",qk="11.0.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */sr(Xk,qk,"app");const Jk={apiKey:"YOUR_API_KEY",authDomain:"YOUR_AUTH_DOMAIN",projectId:"YOUR_PROJECT_ID",storageBucket:"YOUR_STORAGE_BUCKET",messagingSenderId:"YOUR_MESSAGING_SENDER_ID",appId:"YOUR_APP_ID"},Zk=dg(Jk),La=Yk(Zk),ex=x.createContext(void 0),tx=({children:e})=>{const[t,n]=x.useState(null);x.useEffect(()=>M2(La,s=>{n(s)}),[]);const r=async(o,s)=>{await R2(La,o,s)},i=async()=>{await j2(La)};return g.jsx(ex.Provider,{value:{user:t,login:r,logout:i},children:e})};tm(document.getElementById("root")).render(g.jsx(x.StrictMode,{children:g.jsxs(tx,{children:[" ",g.jsx(oE,{children:g.jsx(rE,{})})]})}));
