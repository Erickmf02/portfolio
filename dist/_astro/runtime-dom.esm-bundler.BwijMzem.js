import{k as at,l as L,j as At,B as Et,m as H,n as wt,p as Lt,q as Mt,s as Nt,t as D,u as _t,v as Dt,x as Pt,y as ct,z as lt,A as It,C as ft,D as Ot,E as $t,G as Rt}from"./runtime-core.esm-bundler.CV6VaYis.js";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let R;const G=typeof window<"u"&&window.trustedTypes;if(G)try{R=G.createPolicy("vue",{createHTML:t=>t})}catch{}const ut=R?t=>R.createHTML(t):t=>t,Ht="http://www.w3.org/2000/svg",Bt="http://www.w3.org/1998/Math/MathML",g=typeof document<"u"?document:null,j=g&&g.createElement("template"),xt={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e==="svg"?g.createElementNS(Ht,t):e==="mathml"?g.createElementNS(Bt,t):n?g.createElement(t,{is:n}):g.createElement(t);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>g.createTextNode(t),createComment:t=>g.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>g.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,i,a){const r=n?n.previousSibling:e.lastChild;if(i&&(i===a||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===a||!(i=i.nextSibling)););else{j.innerHTML=ut(s==="svg"?`<svg>${t}</svg>`:s==="mathml"?`<math>${t}</math>`:t);const c=j.content;if(s==="svg"||s==="mathml"){const l=c.firstChild;for(;l.firstChild;)c.appendChild(l.firstChild);c.removeChild(l)}e.insertBefore(c,n)}return[r?r.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},v="transition",E="animation",M=Symbol("_vtc"),dt={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},yt=H({},Nt,dt),Ft=t=>(t.displayName="Transition",t.props=yt,t),ue=Ft((t,{slots:e})=>At(Et,Kt(t),e)),C=(t,e=[])=>{D(t)?t.forEach(n=>n(...e)):t&&t(...e)},W=t=>t?D(t)?t.some(e=>e.length>1):t.length>1:!1;function Kt(t){const e={};for(const o in t)o in dt||(e[o]=t[o]);if(t.css===!1)return e;const{name:n="v",type:s,duration:i,enterFromClass:a=`${n}-enter-from`,enterActiveClass:r=`${n}-enter-active`,enterToClass:c=`${n}-enter-to`,appearFromClass:l=a,appearActiveClass:d=r,appearToClass:f=c,leaveFromClass:p=`${n}-leave-from`,leaveActiveClass:m=`${n}-leave-active`,leaveToClass:T=`${n}-leave-to`}=t,A=zt(i),gt=A&&A[0],vt=A&&A[1],{onBeforeEnter:B,onEnter:x,onEnterCancelled:y,onLeave:F,onLeaveCancelled:St,onBeforeAppear:Ct=B,onAppear:bt=x,onAppearCancelled:Tt=y}=e,P=(o,u,S,N)=>{o._enterCancelled=N,b(o,u?f:c),b(o,u?d:r),S&&S()},K=(o,u)=>{o._isLeaving=!1,b(o,p),b(o,T),b(o,m),u&&u()},z=o=>(u,S)=>{const N=o?bt:x,q=()=>P(u,o,S);C(N,[u,q]),U(()=>{b(u,o?l:a),h(u,o?f:c),W(N)||V(u,s,gt,q)})};return H(e,{onBeforeEnter(o){C(B,[o]),h(o,a),h(o,r)},onBeforeAppear(o){C(Ct,[o]),h(o,l),h(o,d)},onEnter:z(!1),onAppear:z(!0),onLeave(o,u){o._isLeaving=!0;const S=()=>K(o,u);h(o,p),o._enterCancelled?(h(o,m),J()):(J(),h(o,m)),U(()=>{o._isLeaving&&(b(o,p),h(o,T),W(F)||V(o,s,vt,S))}),C(F,[o,S])},onEnterCancelled(o){P(o,!1,void 0,!0),C(y,[o])},onAppearCancelled(o){P(o,!0,void 0,!0),C(Tt,[o])},onLeaveCancelled(o){K(o),C(St,[o])}})}function zt(t){if(t==null)return null;if(wt(t))return[I(t.enter),I(t.leave)];{const e=I(t);return[e,e]}}function I(t){return _t(t)}function h(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[M]||(t[M]=new Set)).add(e)}function b(t,e){e.split(/\s+/).forEach(s=>s&&t.classList.remove(s));const n=t[M];n&&(n.delete(e),n.size||(t[M]=void 0))}function U(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let qt=0;function V(t,e,n,s){const i=t._endId=++qt,a=()=>{i===t._endId&&s()};if(n!=null)return setTimeout(a,n);const{type:r,timeout:c,propCount:l}=Gt(t,e);if(!r)return s();const d=r+"end";let f=0;const p=()=>{t.removeEventListener(d,m),a()},m=T=>{T.target===t&&++f>=l&&p()};setTimeout(()=>{f<l&&p()},c+1),t.addEventListener(d,m)}function Gt(t,e){const n=window.getComputedStyle(t),s=A=>(n[A]||"").split(", "),i=s(`${v}Delay`),a=s(`${v}Duration`),r=X(i,a),c=s(`${E}Delay`),l=s(`${E}Duration`),d=X(c,l);let f=null,p=0,m=0;e===v?r>0&&(f=v,p=r,m=a.length):e===E?d>0&&(f=E,p=d,m=l.length):(p=Math.max(r,d),f=p>0?r>d?v:E:null,m=f?f===v?a.length:l.length:0);const T=f===v&&/\b(transform|all)(,|$)/.test(s(`${v}Property`).toString());return{type:f,timeout:p,propCount:m,hasTransform:T}}function X(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,s)=>Z(n)+Z(t[s])))}function Z(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function J(){return document.body.offsetHeight}function jt(t,e,n){const s=t[M];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Q=Symbol("_vod"),Wt=Symbol("_vsh"),Ut=Symbol(""),Vt=/(^|;)\s*display\s*:/;function Xt(t,e,n){const s=t.style,i=L(n);let a=!1;if(n&&!i){if(e)if(L(e))for(const r of e.split(";")){const c=r.slice(0,r.indexOf(":")).trim();n[c]==null&&_(s,c,"")}else for(const r in e)n[r]==null&&_(s,r,"");for(const r in n)r==="display"&&(a=!0),_(s,r,n[r])}else if(i){if(e!==n){const r=s[Ut];r&&(n+=";"+r),s.cssText=n,a=Vt.test(n)}}else e&&t.removeAttribute("style");Q in t&&(t[Q]=a?s.display:"",t[Wt]&&(s.display="none"))}const Y=/\s*!important$/;function _(t,e,n){if(D(n))n.forEach(s=>_(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=Zt(t,e);Y.test(n)?t.setProperty(lt(s),n.replace(Y,""),"important"):t[s]=n}}const k=["Webkit","Moz","ms"],O={};function Zt(t,e){const n=O[e];if(n)return n;let s=ct(e);if(s!=="filter"&&s in t)return O[e]=s;s=It(s);for(let i=0;i<k.length;i++){const a=k[i]+s;if(a in t)return O[e]=a}return e}const tt="http://www.w3.org/1999/xlink";function et(t,e,n,s,i,a=$t(e)){s&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(tt,e.slice(6,e.length)):t.setAttributeNS(tt,e,n):n==null||a&&!ft(n)?t.removeAttribute(e):t.setAttribute(e,a?"":Ot(n)?String(n):n)}function nt(t,e,n,s,i){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?ut(n):n);return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){const c=a==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(c!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let r=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=ft(n):n==null&&c==="string"?(n="",r=!0):c==="number"&&(n=0,r=!0)}try{t[e]=n}catch{}r&&t.removeAttribute(i||e)}function Jt(t,e,n,s){t.addEventListener(e,n,s)}function Qt(t,e,n,s){t.removeEventListener(e,n,s)}const st=Symbol("_vei");function Yt(t,e,n,s,i=null){const a=t[st]||(t[st]={}),r=a[e];if(s&&r)r.value=s;else{const[c,l]=kt(e);if(s){const d=a[e]=ne(s,i);Jt(t,c,d,l)}else r&&(Qt(t,c,r,l),a[e]=void 0)}}const it=/(?:Once|Passive|Capture)$/;function kt(t){let e;if(it.test(t)){e={};let s;for(;s=t.match(it);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):lt(t.slice(2)),e]}let $=0;const te=Promise.resolve(),ee=()=>$||(te.then(()=>$=0),$=Date.now());function ne(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;Rt(se(s,n.value),e,5,[s])};return n.value=t,n.attached=ee(),n}function se(t,e){if(D(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const rt=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,ie=(t,e,n,s,i,a)=>{const r=i==="svg";e==="class"?jt(t,s,r):e==="style"?Xt(t,n,s):Dt(e)?Pt(e)||Yt(t,e,n,s,a):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):re(t,e,s,r))?(nt(t,e,s),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&et(t,e,s,r,a,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!L(s))?nt(t,ct(e),s,a,e):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),et(t,e,s,r))};function re(t,e,n,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in t&&rt(e)&&at(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const i=t.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return rt(e)&&L(n)?!1:e in t}const oe=["ctrl","shift","alt","meta"],ae={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>oe.some(n=>t[`${n}Key`]&&!e.includes(n))},de=(t,e)=>{const n=t._withMods||(t._withMods={}),s=e.join(".");return n[s]||(n[s]=(i,...a)=>{for(let r=0;r<e.length;r++){const c=ae[e[r]];if(c&&c(i,e))return}return t(i,...a)})},pt=H({patchProp:ie},xt);let w,ot=!1;function ce(){return w||(w=Lt(pt))}function le(){return w=ot?w:Mt(pt),ot=!0,w}const pe=(...t)=>{const e=ce().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=ht(s);if(!i)return;const a=e._component;!at(a)&&!a.render&&!a.template&&(a.template=i.innerHTML),i.nodeType===1&&(i.textContent="");const r=n(i,!1,mt(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),r},e},me=(...t)=>{const e=le().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=ht(s);if(i)return n(i,!0,mt(i))},e};function mt(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function ht(t){return L(t)?document.querySelector(t):t}export{ue as T,pe as a,me as c,de as w};
