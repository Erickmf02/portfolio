/* empty css                      */import{_ as Ut}from"./_plugin-vue_export-helper.DlAUqK2U.js";import{d as qt,j as yr,h as zt,c as Xt,k as pt,n as br,a as wr,b as Or,w as xr,F as Ar,u as Tt,f as Er,o as Tr}from"./runtime-core.esm-bundler.B5QNPCCh.js";var I="top",z="bottom",X="right",N="left",ht="auto",He=[I,z,X,N],Ae="start",ke="end",Dr="clippingParents",Yt="viewport",Re="popper",Cr="reference",Dt=He.reduce(function(e,t){return e.concat([t+"-"+Ae,t+"-"+ke])},[]),Gt=[].concat(He,[ht]).reduce(function(e,t){return e.concat([t,t+"-"+Ae,t+"-"+ke])},[]),Lr="beforeRead",Sr="read",Br="afterRead",Mr="beforeMain",Rr="main",Pr="afterMain",$r="beforeWrite",jr="write",kr="afterWrite",Vr=[Lr,Sr,Br,Mr,Rr,Pr,$r,jr,kr];function te(e){return e?(e.nodeName||"").toLowerCase():null}function F(e){if(e==null)return window;if(e.toString()!=="[object Window]"){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function he(e){var t=F(e).Element;return e instanceof t||e instanceof Element}function q(e){var t=F(e).HTMLElement;return e instanceof t||e instanceof HTMLElement}function gt(e){if(typeof ShadowRoot>"u")return!1;var t=F(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}function Hr(e){var t=e.state;Object.keys(t.elements).forEach(function(r){var n=t.styles[r]||{},o=t.attributes[r]||{},s=t.elements[r];!q(s)||!te(s)||(Object.assign(s.style,n),Object.keys(o).forEach(function(f){var c=o[f];c===!1?s.removeAttribute(f):s.setAttribute(f,c===!0?"":c)}))})}function Ir(e){var t=e.state,r={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,r.popper),t.styles=r,t.elements.arrow&&Object.assign(t.elements.arrow.style,r.arrow),function(){Object.keys(t.elements).forEach(function(n){var o=t.elements[n],s=t.attributes[n]||{},f=Object.keys(t.styles.hasOwnProperty(n)?t.styles[n]:r[n]),c=f.reduce(function(u,l){return u[l]="",u},{});!q(o)||!te(o)||(Object.assign(o.style,c),Object.keys(s).forEach(function(u){o.removeAttribute(u)}))})}}const Kt={name:"applyStyles",enabled:!0,phase:"write",fn:Hr,effect:Ir,requires:["computeStyles"]};function ee(e){return e.split("-")[0]}var me=Math.max,tt=Math.min,Ee=Math.round;function lt(){var e=navigator.userAgentData;return e!=null&&e.brands&&Array.isArray(e.brands)?e.brands.map(function(t){return t.brand+"/"+t.version}).join(" "):navigator.userAgent}function Jt(){return!/^((?!chrome|android).)*safari/i.test(lt())}function Te(e,t,r){t===void 0&&(t=!1),r===void 0&&(r=!1);var n=e.getBoundingClientRect(),o=1,s=1;t&&q(e)&&(o=e.offsetWidth>0&&Ee(n.width)/e.offsetWidth||1,s=e.offsetHeight>0&&Ee(n.height)/e.offsetHeight||1);var f=he(e)?F(e):window,c=f.visualViewport,u=!Jt()&&r,l=(n.left+(u&&c?c.offsetLeft:0))/o,p=(n.top+(u&&c?c.offsetTop:0))/s,b=n.width/o,x=n.height/s;return{width:b,height:x,top:p,right:l+b,bottom:p+x,left:l,x:l,y:p}}function yt(e){var t=Te(e),r=e.offsetWidth,n=e.offsetHeight;return Math.abs(t.width-r)<=1&&(r=t.width),Math.abs(t.height-n)<=1&&(n=t.height),{x:e.offsetLeft,y:e.offsetTop,width:r,height:n}}function Qt(e,t){var r=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(r&&gt(r)){var n=t;do{if(n&&e.isSameNode(n))return!0;n=n.parentNode||n.host}while(n)}return!1}function ae(e){return F(e).getComputedStyle(e)}function Nr(e){return["table","td","th"].indexOf(te(e))>=0}function fe(e){return((he(e)?e.ownerDocument:e.document)||window.document).documentElement}function nt(e){return te(e)==="html"?e:e.assignedSlot||e.parentNode||(gt(e)?e.host:null)||fe(e)}function Ct(e){return!q(e)||ae(e).position==="fixed"?null:e.offsetParent}function Wr(e){var t=/firefox/i.test(lt()),r=/Trident/i.test(lt());if(r&&q(e)){var n=ae(e);if(n.position==="fixed")return null}var o=nt(e);for(gt(o)&&(o=o.host);q(o)&&["html","body"].indexOf(te(o))<0;){var s=ae(o);if(s.transform!=="none"||s.perspective!=="none"||s.contain==="paint"||["transform","perspective"].indexOf(s.willChange)!==-1||t&&s.willChange==="filter"||t&&s.filter&&s.filter!=="none")return o;o=o.parentNode}return null}function Ie(e){for(var t=F(e),r=Ct(e);r&&Nr(r)&&ae(r).position==="static";)r=Ct(r);return r&&(te(r)==="html"||te(r)==="body"&&ae(r).position==="static")?t:r||Wr(e)||t}function bt(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function Pe(e,t,r){return me(e,tt(t,r))}function _r(e,t,r){var n=Pe(e,t,r);return n>r?r:n}function Zt(){return{top:0,right:0,bottom:0,left:0}}function er(e){return Object.assign({},Zt(),e)}function tr(e,t){return t.reduce(function(r,n){return r[n]=e,r},{})}var Fr=function(t,r){return t=typeof t=="function"?t(Object.assign({},r.rects,{placement:r.placement})):t,er(typeof t!="number"?t:tr(t,He))};function Ur(e){var t,r=e.state,n=e.name,o=e.options,s=r.elements.arrow,f=r.modifiersData.popperOffsets,c=ee(r.placement),u=bt(c),l=[N,X].indexOf(c)>=0,p=l?"height":"width";if(!(!s||!f)){var b=Fr(o.padding,r),x=yt(s),h=u==="y"?I:N,w=u==="y"?z:X,g=r.rects.reference[p]+r.rects.reference[u]-f[u]-r.rects.popper[p],y=f[u]-r.rects.reference[u],E=Ie(s),D=E?u==="y"?E.clientHeight||0:E.clientWidth||0:0,L=g/2-y/2,i=b[h],A=D-x[p]-b[w],v=D/2-x[p]/2+L,C=Pe(i,v,A),P=u;r.modifiersData[n]=(t={},t[P]=C,t.centerOffset=C-v,t)}}function qr(e){var t=e.state,r=e.options,n=r.element,o=n===void 0?"[data-popper-arrow]":n;o!=null&&(typeof o=="string"&&(o=t.elements.popper.querySelector(o),!o)||Qt(t.elements.popper,o)&&(t.elements.arrow=o))}const zr={name:"arrow",enabled:!0,phase:"main",fn:Ur,effect:qr,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function De(e){return e.split("-")[1]}var Xr={top:"auto",right:"auto",bottom:"auto",left:"auto"};function Yr(e,t){var r=e.x,n=e.y,o=t.devicePixelRatio||1;return{x:Ee(r*o)/o||0,y:Ee(n*o)/o||0}}function Lt(e){var t,r=e.popper,n=e.popperRect,o=e.placement,s=e.variation,f=e.offsets,c=e.position,u=e.gpuAcceleration,l=e.adaptive,p=e.roundOffsets,b=e.isFixed,x=f.x,h=x===void 0?0:x,w=f.y,g=w===void 0?0:w,y=typeof p=="function"?p({x:h,y:g}):{x:h,y:g};h=y.x,g=y.y;var E=f.hasOwnProperty("x"),D=f.hasOwnProperty("y"),L=N,i=I,A=window;if(l){var v=Ie(r),C="clientHeight",P="clientWidth";if(v===F(r)&&(v=fe(r),ae(v).position!=="static"&&c==="absolute"&&(C="scrollHeight",P="scrollWidth")),v=v,o===I||(o===N||o===X)&&s===ke){i=z;var R=b&&v===A&&A.visualViewport?A.visualViewport.height:v[C];g-=R-n.height,g*=u?1:-1}if(o===N||(o===I||o===z)&&s===ke){L=X;var B=b&&v===A&&A.visualViewport?A.visualViewport.width:v[P];h-=B-n.width,h*=u?1:-1}}var $=Object.assign({position:c},l&&Xr),M=p===!0?Yr({x:h,y:g},F(r)):{x:h,y:g};if(h=M.x,g=M.y,u){var S;return Object.assign({},$,(S={},S[i]=D?"0":"",S[L]=E?"0":"",S.transform=(A.devicePixelRatio||1)<=1?"translate("+h+"px, "+g+"px)":"translate3d("+h+"px, "+g+"px, 0)",S))}return Object.assign({},$,(t={},t[i]=D?g+"px":"",t[L]=E?h+"px":"",t.transform="",t))}function Gr(e){var t=e.state,r=e.options,n=r.gpuAcceleration,o=n===void 0?!0:n,s=r.adaptive,f=s===void 0?!0:s,c=r.roundOffsets,u=c===void 0?!0:c,l={placement:ee(t.placement),variation:De(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:o,isFixed:t.options.strategy==="fixed"};t.modifiersData.popperOffsets!=null&&(t.styles.popper=Object.assign({},t.styles.popper,Lt(Object.assign({},l,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:f,roundOffsets:u})))),t.modifiersData.arrow!=null&&(t.styles.arrow=Object.assign({},t.styles.arrow,Lt(Object.assign({},l,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:u})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}const Kr={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:Gr,data:{}};var Qe={passive:!0};function Jr(e){var t=e.state,r=e.instance,n=e.options,o=n.scroll,s=o===void 0?!0:o,f=n.resize,c=f===void 0?!0:f,u=F(t.elements.popper),l=[].concat(t.scrollParents.reference,t.scrollParents.popper);return s&&l.forEach(function(p){p.addEventListener("scroll",r.update,Qe)}),c&&u.addEventListener("resize",r.update,Qe),function(){s&&l.forEach(function(p){p.removeEventListener("scroll",r.update,Qe)}),c&&u.removeEventListener("resize",r.update,Qe)}}const Qr={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:Jr,data:{}};var Zr={left:"right",right:"left",bottom:"top",top:"bottom"};function et(e){return e.replace(/left|right|bottom|top/g,function(t){return Zr[t]})}var en={start:"end",end:"start"};function St(e){return e.replace(/start|end/g,function(t){return en[t]})}function wt(e){var t=F(e),r=t.pageXOffset,n=t.pageYOffset;return{scrollLeft:r,scrollTop:n}}function Ot(e){return Te(fe(e)).left+wt(e).scrollLeft}function tn(e,t){var r=F(e),n=fe(e),o=r.visualViewport,s=n.clientWidth,f=n.clientHeight,c=0,u=0;if(o){s=o.width,f=o.height;var l=Jt();(l||!l&&t==="fixed")&&(c=o.offsetLeft,u=o.offsetTop)}return{width:s,height:f,x:c+Ot(e),y:u}}function rn(e){var t,r=fe(e),n=wt(e),o=(t=e.ownerDocument)==null?void 0:t.body,s=me(r.scrollWidth,r.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),f=me(r.scrollHeight,r.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),c=-n.scrollLeft+Ot(e),u=-n.scrollTop;return ae(o||r).direction==="rtl"&&(c+=me(r.clientWidth,o?o.clientWidth:0)-s),{width:s,height:f,x:c,y:u}}function xt(e){var t=ae(e),r=t.overflow,n=t.overflowX,o=t.overflowY;return/auto|scroll|overlay|hidden/.test(r+o+n)}function rr(e){return["html","body","#document"].indexOf(te(e))>=0?e.ownerDocument.body:q(e)&&xt(e)?e:rr(nt(e))}function $e(e,t){var r;t===void 0&&(t=[]);var n=rr(e),o=n===((r=e.ownerDocument)==null?void 0:r.body),s=F(n),f=o?[s].concat(s.visualViewport||[],xt(n)?n:[]):n,c=t.concat(f);return o?c:c.concat($e(nt(f)))}function dt(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function nn(e,t){var r=Te(e,!1,t==="fixed");return r.top=r.top+e.clientTop,r.left=r.left+e.clientLeft,r.bottom=r.top+e.clientHeight,r.right=r.left+e.clientWidth,r.width=e.clientWidth,r.height=e.clientHeight,r.x=r.left,r.y=r.top,r}function Bt(e,t,r){return t===Yt?dt(tn(e,r)):he(t)?nn(t,r):dt(rn(fe(e)))}function on(e){var t=$e(nt(e)),r=["absolute","fixed"].indexOf(ae(e).position)>=0,n=r&&q(e)?Ie(e):e;return he(n)?t.filter(function(o){return he(o)&&Qt(o,n)&&te(o)!=="body"}):[]}function an(e,t,r,n){var o=t==="clippingParents"?on(e):[].concat(t),s=[].concat(o,[r]),f=s[0],c=s.reduce(function(u,l){var p=Bt(e,l,n);return u.top=me(p.top,u.top),u.right=tt(p.right,u.right),u.bottom=tt(p.bottom,u.bottom),u.left=me(p.left,u.left),u},Bt(e,f,n));return c.width=c.right-c.left,c.height=c.bottom-c.top,c.x=c.left,c.y=c.top,c}function nr(e){var t=e.reference,r=e.element,n=e.placement,o=n?ee(n):null,s=n?De(n):null,f=t.x+t.width/2-r.width/2,c=t.y+t.height/2-r.height/2,u;switch(o){case I:u={x:f,y:t.y-r.height};break;case z:u={x:f,y:t.y+t.height};break;case X:u={x:t.x+t.width,y:c};break;case N:u={x:t.x-r.width,y:c};break;default:u={x:t.x,y:t.y}}var l=o?bt(o):null;if(l!=null){var p=l==="y"?"height":"width";switch(s){case Ae:u[l]=u[l]-(t[p]/2-r[p]/2);break;case ke:u[l]=u[l]+(t[p]/2-r[p]/2);break}}return u}function Ve(e,t){t===void 0&&(t={});var r=t,n=r.placement,o=n===void 0?e.placement:n,s=r.strategy,f=s===void 0?e.strategy:s,c=r.boundary,u=c===void 0?Dr:c,l=r.rootBoundary,p=l===void 0?Yt:l,b=r.elementContext,x=b===void 0?Re:b,h=r.altBoundary,w=h===void 0?!1:h,g=r.padding,y=g===void 0?0:g,E=er(typeof y!="number"?y:tr(y,He)),D=x===Re?Cr:Re,L=e.rects.popper,i=e.elements[w?D:x],A=an(he(i)?i:i.contextElement||fe(e.elements.popper),u,p,f),v=Te(e.elements.reference),C=nr({reference:v,element:L,strategy:"absolute",placement:o}),P=dt(Object.assign({},L,C)),R=x===Re?P:v,B={top:A.top-R.top+E.top,bottom:R.bottom-A.bottom+E.bottom,left:A.left-R.left+E.left,right:R.right-A.right+E.right},$=e.modifiersData.offset;if(x===Re&&$){var M=$[o];Object.keys(B).forEach(function(S){var W=[X,z].indexOf(S)>=0?1:-1,_=[I,z].indexOf(S)>=0?"y":"x";B[S]+=M[_]*W})}return B}function sn(e,t){t===void 0&&(t={});var r=t,n=r.placement,o=r.boundary,s=r.rootBoundary,f=r.padding,c=r.flipVariations,u=r.allowedAutoPlacements,l=u===void 0?Gt:u,p=De(n),b=p?c?Dt:Dt.filter(function(w){return De(w)===p}):He,x=b.filter(function(w){return l.indexOf(w)>=0});x.length===0&&(x=b);var h=x.reduce(function(w,g){return w[g]=Ve(e,{placement:g,boundary:o,rootBoundary:s,padding:f})[ee(g)],w},{});return Object.keys(h).sort(function(w,g){return h[w]-h[g]})}function un(e){if(ee(e)===ht)return[];var t=et(e);return[St(e),t,St(t)]}function fn(e){var t=e.state,r=e.options,n=e.name;if(!t.modifiersData[n]._skip){for(var o=r.mainAxis,s=o===void 0?!0:o,f=r.altAxis,c=f===void 0?!0:f,u=r.fallbackPlacements,l=r.padding,p=r.boundary,b=r.rootBoundary,x=r.altBoundary,h=r.flipVariations,w=h===void 0?!0:h,g=r.allowedAutoPlacements,y=t.options.placement,E=ee(y),D=E===y,L=u||(D||!w?[et(y)]:un(y)),i=[y].concat(L).reduce(function(re,Y){return re.concat(ee(Y)===ht?sn(t,{placement:Y,boundary:p,rootBoundary:b,padding:l,flipVariations:w,allowedAutoPlacements:g}):Y)},[]),A=t.rects.reference,v=t.rects.popper,C=new Map,P=!0,R=i[0],B=0;B<i.length;B++){var $=i[B],M=ee($),S=De($)===Ae,W=[I,z].indexOf(M)>=0,_=W?"width":"height",k=Ve(t,{placement:$,boundary:p,rootBoundary:b,altBoundary:x,padding:l}),V=W?S?X:N:S?z:I;A[_]>v[_]&&(V=et(V));var j=et(V),K=[];if(s&&K.push(k[M]<=0),c&&K.push(k[V]<=0,k[j]<=0),K.every(function(re){return re})){R=$,P=!1;break}C.set($,K)}if(P)for(var J=w?3:1,ce=function(Y){var ne=i.find(function(ge){var ie=C.get(ge);if(ie)return ie.slice(0,Y).every(function(ye){return ye})});if(ne)return R=ne,"break"},Q=J;Q>0;Q--){var pe=ce(Q);if(pe==="break")break}t.placement!==R&&(t.modifiersData[n]._skip=!0,t.placement=R,t.reset=!0)}}const cn={name:"flip",enabled:!0,phase:"main",fn,requiresIfExists:["offset"],data:{_skip:!1}};function Mt(e,t,r){return r===void 0&&(r={x:0,y:0}),{top:e.top-t.height-r.y,right:e.right-t.width+r.x,bottom:e.bottom-t.height+r.y,left:e.left-t.width-r.x}}function Rt(e){return[I,X,z,N].some(function(t){return e[t]>=0})}function pn(e){var t=e.state,r=e.name,n=t.rects.reference,o=t.rects.popper,s=t.modifiersData.preventOverflow,f=Ve(t,{elementContext:"reference"}),c=Ve(t,{altBoundary:!0}),u=Mt(f,n),l=Mt(c,o,s),p=Rt(u),b=Rt(l);t.modifiersData[r]={referenceClippingOffsets:u,popperEscapeOffsets:l,isReferenceHidden:p,hasPopperEscaped:b},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":p,"data-popper-escaped":b})}const ln={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:pn};function dn(e,t,r){var n=ee(e),o=[N,I].indexOf(n)>=0?-1:1,s=typeof r=="function"?r(Object.assign({},t,{placement:e})):r,f=s[0],c=s[1];return f=f||0,c=(c||0)*o,[N,X].indexOf(n)>=0?{x:c,y:f}:{x:f,y:c}}function vn(e){var t=e.state,r=e.options,n=e.name,o=r.offset,s=o===void 0?[0,0]:o,f=Gt.reduce(function(p,b){return p[b]=dn(b,t.rects,s),p},{}),c=f[t.placement],u=c.x,l=c.y;t.modifiersData.popperOffsets!=null&&(t.modifiersData.popperOffsets.x+=u,t.modifiersData.popperOffsets.y+=l),t.modifiersData[n]=f}const mn={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:vn};function hn(e){var t=e.state,r=e.name;t.modifiersData[r]=nr({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})}const gn={name:"popperOffsets",enabled:!0,phase:"read",fn:hn,data:{}};function yn(e){return e==="x"?"y":"x"}function bn(e){var t=e.state,r=e.options,n=e.name,o=r.mainAxis,s=o===void 0?!0:o,f=r.altAxis,c=f===void 0?!1:f,u=r.boundary,l=r.rootBoundary,p=r.altBoundary,b=r.padding,x=r.tether,h=x===void 0?!0:x,w=r.tetherOffset,g=w===void 0?0:w,y=Ve(t,{boundary:u,rootBoundary:l,padding:b,altBoundary:p}),E=ee(t.placement),D=De(t.placement),L=!D,i=bt(E),A=yn(i),v=t.modifiersData.popperOffsets,C=t.rects.reference,P=t.rects.popper,R=typeof g=="function"?g(Object.assign({},t.rects,{placement:t.placement})):g,B=typeof R=="number"?{mainAxis:R,altAxis:R}:Object.assign({mainAxis:0,altAxis:0},R),$=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,M={x:0,y:0};if(v){if(s){var S,W=i==="y"?I:N,_=i==="y"?z:X,k=i==="y"?"height":"width",V=v[i],j=V+y[W],K=V-y[_],J=h?-P[k]/2:0,ce=D===Ae?C[k]:P[k],Q=D===Ae?-P[k]:-C[k],pe=t.elements.arrow,re=h&&pe?yt(pe):{width:0,height:0},Y=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:Zt(),ne=Y[W],ge=Y[_],ie=Pe(0,C[k],re[k]),ye=L?C[k]/2-J-ie-ne-B.mainAxis:ce-ie-ne-B.mainAxis,se=L?-C[k]/2+J+ie+ge+B.mainAxis:Q+ie+ge+B.mainAxis,be=t.elements.arrow&&Ie(t.elements.arrow),We=be?i==="y"?be.clientTop||0:be.clientLeft||0:0,Ce=(S=$?.[i])!=null?S:0,_e=V+ye-Ce-We,Fe=V+se-Ce,Le=Pe(h?tt(j,_e):j,V,h?me(K,Fe):K);v[i]=Le,M[i]=Le-V}if(c){var Se,Ue=i==="x"?I:N,qe=i==="x"?z:X,oe=v[A],ue=A==="y"?"height":"width",Be=oe+y[Ue],le=oe-y[qe],Me=[I,N].indexOf(E)!==-1,ze=(Se=$?.[A])!=null?Se:0,Xe=Me?Be:oe-C[ue]-P[ue]-ze+B.altAxis,Ye=Me?oe+C[ue]+P[ue]-ze-B.altAxis:le,Ge=h&&Me?_r(Xe,oe,Ye):Pe(h?Xe:Be,oe,h?Ye:le);v[A]=Ge,M[A]=Ge-oe}t.modifiersData[n]=M}}const wn={name:"preventOverflow",enabled:!0,phase:"main",fn:bn,requiresIfExists:["offset"]};function On(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}function xn(e){return e===F(e)||!q(e)?wt(e):On(e)}function An(e){var t=e.getBoundingClientRect(),r=Ee(t.width)/e.offsetWidth||1,n=Ee(t.height)/e.offsetHeight||1;return r!==1||n!==1}function En(e,t,r){r===void 0&&(r=!1);var n=q(t),o=q(t)&&An(t),s=fe(t),f=Te(e,o,r),c={scrollLeft:0,scrollTop:0},u={x:0,y:0};return(n||!n&&!r)&&((te(t)!=="body"||xt(s))&&(c=xn(t)),q(t)?(u=Te(t,!0),u.x+=t.clientLeft,u.y+=t.clientTop):s&&(u.x=Ot(s))),{x:f.left+c.scrollLeft-u.x,y:f.top+c.scrollTop-u.y,width:f.width,height:f.height}}function Tn(e){var t=new Map,r=new Set,n=[];e.forEach(function(s){t.set(s.name,s)});function o(s){r.add(s.name);var f=[].concat(s.requires||[],s.requiresIfExists||[]);f.forEach(function(c){if(!r.has(c)){var u=t.get(c);u&&o(u)}}),n.push(s)}return e.forEach(function(s){r.has(s.name)||o(s)}),n}function Dn(e){var t=Tn(e);return Vr.reduce(function(r,n){return r.concat(t.filter(function(o){return o.phase===n}))},[])}function Cn(e){var t;return function(){return t||(t=new Promise(function(r){Promise.resolve().then(function(){t=void 0,r(e())})})),t}}function Ln(e){var t=e.reduce(function(r,n){var o=r[n.name];return r[n.name]=o?Object.assign({},o,n,{options:Object.assign({},o.options,n.options),data:Object.assign({},o.data,n.data)}):n,r},{});return Object.keys(t).map(function(r){return t[r]})}var Pt={placement:"bottom",modifiers:[],strategy:"absolute"};function $t(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return!t.some(function(n){return!(n&&typeof n.getBoundingClientRect=="function")})}function Sn(e){e===void 0&&(e={});var t=e,r=t.defaultModifiers,n=r===void 0?[]:r,o=t.defaultOptions,s=o===void 0?Pt:o;return function(c,u,l){l===void 0&&(l=s);var p={placement:"bottom",orderedModifiers:[],options:Object.assign({},Pt,s),modifiersData:{},elements:{reference:c,popper:u},attributes:{},styles:{}},b=[],x=!1,h={state:p,setOptions:function(E){var D=typeof E=="function"?E(p.options):E;g(),p.options=Object.assign({},s,p.options,D),p.scrollParents={reference:he(c)?$e(c):c.contextElement?$e(c.contextElement):[],popper:$e(u)};var L=Dn(Ln([].concat(n,p.options.modifiers)));return p.orderedModifiers=L.filter(function(i){return i.enabled}),w(),h.update()},forceUpdate:function(){if(!x){var E=p.elements,D=E.reference,L=E.popper;if($t(D,L)){p.rects={reference:En(D,Ie(L),p.options.strategy==="fixed"),popper:yt(L)},p.reset=!1,p.placement=p.options.placement,p.orderedModifiers.forEach(function(B){return p.modifiersData[B.name]=Object.assign({},B.data)});for(var i=0;i<p.orderedModifiers.length;i++){if(p.reset===!0){p.reset=!1,i=-1;continue}var A=p.orderedModifiers[i],v=A.fn,C=A.options,P=C===void 0?{}:C,R=A.name;typeof v=="function"&&(p=v({state:p,options:P,name:R,instance:h})||p)}}}},update:Cn(function(){return new Promise(function(y){h.forceUpdate(),y(p)})}),destroy:function(){g(),x=!0}};if(!$t(c,u))return h;h.setOptions(l).then(function(y){!x&&l.onFirstUpdate&&l.onFirstUpdate(y)});function w(){p.orderedModifiers.forEach(function(y){var E=y.name,D=y.options,L=D===void 0?{}:D,i=y.effect;if(typeof i=="function"){var A=i({state:p,name:E,instance:h,options:L}),v=function(){};b.push(A||v)}})}function g(){b.forEach(function(y){return y()}),b=[]}return h}}var Bn=[Qr,gn,Kr,Kt,mn,cn,wn,zr,ln],Mn=Sn({defaultModifiers:Bn}),Rn="tippy-box",ir="tippy-content",Pn="tippy-backdrop",or="tippy-arrow",ar="tippy-svg-arrow",ve={passive:!0,capture:!0},sr=function(){return document.body};function st(e,t,r){if(Array.isArray(e)){var n=e[t];return n??(Array.isArray(r)?r[t]:r)}return e}function At(e,t){var r={}.toString.call(e);return r.indexOf("[object")===0&&r.indexOf(t+"]")>-1}function ur(e,t){return typeof e=="function"?e.apply(void 0,t):e}function jt(e,t){if(t===0)return e;var r;return function(n){clearTimeout(r),r=setTimeout(function(){e(n)},t)}}function $n(e){return e.split(/\s+/).filter(Boolean)}function xe(e){return[].concat(e)}function kt(e,t){e.indexOf(t)===-1&&e.push(t)}function jn(e){return e.filter(function(t,r){return e.indexOf(t)===r})}function kn(e){return e.split("-")[0]}function rt(e){return[].slice.call(e)}function Vt(e){return Object.keys(e).reduce(function(t,r){return e[r]!==void 0&&(t[r]=e[r]),t},{})}function je(){return document.createElement("div")}function it(e){return["Element","Fragment"].some(function(t){return At(e,t)})}function Vn(e){return At(e,"NodeList")}function Hn(e){return At(e,"MouseEvent")}function In(e){return!!(e&&e._tippy&&e._tippy.reference===e)}function Nn(e){return it(e)?[e]:Vn(e)?rt(e):Array.isArray(e)?e:rt(document.querySelectorAll(e))}function ut(e,t){e.forEach(function(r){r&&(r.style.transitionDuration=t+"ms")})}function Ht(e,t){e.forEach(function(r){r&&r.setAttribute("data-state",t)})}function Wn(e){var t,r=xe(e),n=r[0];return n!=null&&(t=n.ownerDocument)!=null&&t.body?n.ownerDocument:document}function _n(e,t){var r=t.clientX,n=t.clientY;return e.every(function(o){var s=o.popperRect,f=o.popperState,c=o.props,u=c.interactiveBorder,l=kn(f.placement),p=f.modifiersData.offset;if(!p)return!0;var b=l==="bottom"?p.top.y:0,x=l==="top"?p.bottom.y:0,h=l==="right"?p.left.x:0,w=l==="left"?p.right.x:0,g=s.top-n+b>u,y=n-s.bottom-x>u,E=s.left-r+h>u,D=r-s.right-w>u;return g||y||E||D})}function ft(e,t,r){var n=t+"EventListener";["transitionend","webkitTransitionEnd"].forEach(function(o){e[n](o,r)})}function It(e,t){for(var r=t;r;){var n;if(e.contains(r))return!0;r=r.getRootNode==null||(n=r.getRootNode())==null?void 0:n.host}return!1}var Z={isTouch:!1},Nt=0;function Fn(){Z.isTouch||(Z.isTouch=!0,window.performance&&document.addEventListener("mousemove",fr))}function fr(){var e=performance.now();e-Nt<20&&(Z.isTouch=!1,document.removeEventListener("mousemove",fr)),Nt=e}function Un(){var e=document.activeElement;if(In(e)){var t=e._tippy;e.blur&&!t.state.isVisible&&e.blur()}}function qn(){document.addEventListener("touchstart",Fn,ve),window.addEventListener("blur",Un)}var zn=typeof window<"u"&&typeof document<"u",Xn=zn?!!window.msCrypto:!1,Yn={animateFill:!1,followCursor:!1,inlinePositioning:!1,sticky:!1},Gn={allowHTML:!1,animation:"fade",arrow:!0,content:"",inertia:!1,maxWidth:350,role:"tooltip",theme:"",zIndex:9999},G=Object.assign({appendTo:sr,aria:{content:"auto",expanded:"auto"},delay:0,duration:[300,250],getReferenceClientRect:null,hideOnClick:!0,ignoreAttributes:!1,interactive:!1,interactiveBorder:2,interactiveDebounce:0,moveTransition:"",offset:[0,10],onAfterUpdate:function(){},onBeforeUpdate:function(){},onCreate:function(){},onDestroy:function(){},onHidden:function(){},onHide:function(){},onMount:function(){},onShow:function(){},onShown:function(){},onTrigger:function(){},onUntrigger:function(){},onClickOutside:function(){},placement:"top",plugins:[],popperOptions:{},render:null,showOnCreate:!1,touch:!0,trigger:"mouseenter focus",triggerTarget:null},Yn,Gn),Kn=Object.keys(G),Jn=function(t){var r=Object.keys(t);r.forEach(function(n){G[n]=t[n]})};function cr(e){var t=e.plugins||[],r=t.reduce(function(n,o){var s=o.name,f=o.defaultValue;if(s){var c;n[s]=e[s]!==void 0?e[s]:(c=G[s])!=null?c:f}return n},{});return Object.assign({},e,r)}function Qn(e,t){var r=t?Object.keys(cr(Object.assign({},G,{plugins:t}))):Kn,n=r.reduce(function(o,s){var f=(e.getAttribute("data-tippy-"+s)||"").trim();if(!f)return o;if(s==="content")o[s]=f;else try{o[s]=JSON.parse(f)}catch{o[s]=f}return o},{});return n}function Wt(e,t){var r=Object.assign({},t,{content:ur(t.content,[e])},t.ignoreAttributes?{}:Qn(e,t.plugins));return r.aria=Object.assign({},G.aria,r.aria),r.aria={expanded:r.aria.expanded==="auto"?t.interactive:r.aria.expanded,content:r.aria.content==="auto"?t.interactive?null:"describedby":r.aria.content},r}var Zn=function(){return"innerHTML"};function vt(e,t){e[Zn()]=t}function _t(e){var t=je();return e===!0?t.className=or:(t.className=ar,it(e)?t.appendChild(e):vt(t,e)),t}function Ft(e,t){it(t.content)?(vt(e,""),e.appendChild(t.content)):typeof t.content!="function"&&(t.allowHTML?vt(e,t.content):e.textContent=t.content)}function mt(e){var t=e.firstElementChild,r=rt(t.children);return{box:t,content:r.find(function(n){return n.classList.contains(ir)}),arrow:r.find(function(n){return n.classList.contains(or)||n.classList.contains(ar)}),backdrop:r.find(function(n){return n.classList.contains(Pn)})}}function pr(e){var t=je(),r=je();r.className=Rn,r.setAttribute("data-state","hidden"),r.setAttribute("tabindex","-1");var n=je();n.className=ir,n.setAttribute("data-state","hidden"),Ft(n,e.props),t.appendChild(r),r.appendChild(n),o(e.props,e.props);function o(s,f){var c=mt(t),u=c.box,l=c.content,p=c.arrow;f.theme?u.setAttribute("data-theme",f.theme):u.removeAttribute("data-theme"),typeof f.animation=="string"?u.setAttribute("data-animation",f.animation):u.removeAttribute("data-animation"),f.inertia?u.setAttribute("data-inertia",""):u.removeAttribute("data-inertia"),u.style.maxWidth=typeof f.maxWidth=="number"?f.maxWidth+"px":f.maxWidth,f.role?u.setAttribute("role",f.role):u.removeAttribute("role"),(s.content!==f.content||s.allowHTML!==f.allowHTML)&&Ft(l,e.props),f.arrow?p?s.arrow!==f.arrow&&(u.removeChild(p),u.appendChild(_t(f.arrow))):u.appendChild(_t(f.arrow)):p&&u.removeChild(p)}return{popper:t,onUpdate:o}}pr.$$tippy=!0;var ei=1,Ze=[],ct=[];function ti(e,t){var r=Wt(e,Object.assign({},G,cr(Vt(t)))),n,o,s,f=!1,c=!1,u=!1,l=!1,p,b,x,h=[],w=jt(_e,r.interactiveDebounce),g,y=ei++,E=null,D=jn(r.plugins),L={isEnabled:!0,isVisible:!1,isDestroyed:!1,isMounted:!1,isShown:!1},i={id:y,reference:e,popper:je(),popperInstance:E,props:r,state:L,plugins:D,clearDelayTimeouts:Xe,setProps:Ye,setContent:Ge,show:lr,hide:dr,hideWithInteractivity:vr,enable:Me,disable:ze,unmount:mr,destroy:hr};if(!r.render)return i;var A=r.render(i),v=A.popper,C=A.onUpdate;v.setAttribute("data-tippy-root",""),v.id="tippy-"+i.id,i.popper=v,e._tippy=i,v._tippy=i;var P=D.map(function(a){return a.fn(i)}),R=e.hasAttribute("aria-expanded");return be(),J(),V(),j("onCreate",[i]),r.showOnCreate&&Be(),v.addEventListener("mouseenter",function(){i.props.interactive&&i.state.isVisible&&i.clearDelayTimeouts()}),v.addEventListener("mouseleave",function(){i.props.interactive&&i.props.trigger.indexOf("mouseenter")>=0&&W().addEventListener("mousemove",w)}),i;function B(){var a=i.props.touch;return Array.isArray(a)?a:[a,0]}function $(){return B()[0]==="hold"}function M(){var a;return!!((a=i.props.render)!=null&&a.$$tippy)}function S(){return g||e}function W(){var a=S().parentNode;return a?Wn(a):document}function _(){return mt(v)}function k(a){return i.state.isMounted&&!i.state.isVisible||Z.isTouch||p&&p.type==="focus"?0:st(i.props.delay,a?0:1,G.delay)}function V(a){a===void 0&&(a=!1),v.style.pointerEvents=i.props.interactive&&!a?"":"none",v.style.zIndex=""+i.props.zIndex}function j(a,d,m){if(m===void 0&&(m=!0),P.forEach(function(O){O[a]&&O[a].apply(O,d)}),m){var T;(T=i.props)[a].apply(T,d)}}function K(){var a=i.props.aria;if(a.content){var d="aria-"+a.content,m=v.id,T=xe(i.props.triggerTarget||e);T.forEach(function(O){var H=O.getAttribute(d);if(i.state.isVisible)O.setAttribute(d,H?H+" "+m:m);else{var U=H&&H.replace(m,"").trim();U?O.setAttribute(d,U):O.removeAttribute(d)}})}}function J(){if(!(R||!i.props.aria.expanded)){var a=xe(i.props.triggerTarget||e);a.forEach(function(d){i.props.interactive?d.setAttribute("aria-expanded",i.state.isVisible&&d===S()?"true":"false"):d.removeAttribute("aria-expanded")})}}function ce(){W().removeEventListener("mousemove",w),Ze=Ze.filter(function(a){return a!==w})}function Q(a){if(!(Z.isTouch&&(u||a.type==="mousedown"))){var d=a.composedPath&&a.composedPath()[0]||a.target;if(!(i.props.interactive&&It(v,d))){if(xe(i.props.triggerTarget||e).some(function(m){return It(m,d)})){if(Z.isTouch||i.state.isVisible&&i.props.trigger.indexOf("click")>=0)return}else j("onClickOutside",[i,a]);i.props.hideOnClick===!0&&(i.clearDelayTimeouts(),i.hide(),c=!0,setTimeout(function(){c=!1}),i.state.isMounted||ne())}}}function pe(){u=!0}function re(){u=!1}function Y(){var a=W();a.addEventListener("mousedown",Q,!0),a.addEventListener("touchend",Q,ve),a.addEventListener("touchstart",re,ve),a.addEventListener("touchmove",pe,ve)}function ne(){var a=W();a.removeEventListener("mousedown",Q,!0),a.removeEventListener("touchend",Q,ve),a.removeEventListener("touchstart",re,ve),a.removeEventListener("touchmove",pe,ve)}function ge(a,d){ye(a,function(){!i.state.isVisible&&v.parentNode&&v.parentNode.contains(v)&&d()})}function ie(a,d){ye(a,d)}function ye(a,d){var m=_().box;function T(O){O.target===m&&(ft(m,"remove",T),d())}if(a===0)return d();ft(m,"remove",b),ft(m,"add",T),b=T}function se(a,d,m){m===void 0&&(m=!1);var T=xe(i.props.triggerTarget||e);T.forEach(function(O){O.addEventListener(a,d,m),h.push({node:O,eventType:a,handler:d,options:m})})}function be(){$()&&(se("touchstart",Ce,{passive:!0}),se("touchend",Fe,{passive:!0})),$n(i.props.trigger).forEach(function(a){if(a!=="manual")switch(se(a,Ce),a){case"mouseenter":se("mouseleave",Fe);break;case"focus":se(Xn?"focusout":"blur",Le);break;case"focusin":se("focusout",Le);break}})}function We(){h.forEach(function(a){var d=a.node,m=a.eventType,T=a.handler,O=a.options;d.removeEventListener(m,T,O)}),h=[]}function Ce(a){var d,m=!1;if(!(!i.state.isEnabled||Se(a)||c)){var T=((d=p)==null?void 0:d.type)==="focus";p=a,g=a.currentTarget,J(),!i.state.isVisible&&Hn(a)&&Ze.forEach(function(O){return O(a)}),a.type==="click"&&(i.props.trigger.indexOf("mouseenter")<0||f)&&i.props.hideOnClick!==!1&&i.state.isVisible?m=!0:Be(a),a.type==="click"&&(f=!m),m&&!T&&le(a)}}function _e(a){var d=a.target,m=S().contains(d)||v.contains(d);if(!(a.type==="mousemove"&&m)){var T=ue().concat(v).map(function(O){var H,U=O._tippy,we=(H=U.popperInstance)==null?void 0:H.state;return we?{popperRect:O.getBoundingClientRect(),popperState:we,props:r}:null}).filter(Boolean);_n(T,a)&&(ce(),le(a))}}function Fe(a){var d=Se(a)||i.props.trigger.indexOf("click")>=0&&f;if(!d){if(i.props.interactive){i.hideWithInteractivity(a);return}le(a)}}function Le(a){i.props.trigger.indexOf("focusin")<0&&a.target!==S()||i.props.interactive&&a.relatedTarget&&v.contains(a.relatedTarget)||le(a)}function Se(a){return Z.isTouch?$()!==a.type.indexOf("touch")>=0:!1}function Ue(){qe();var a=i.props,d=a.popperOptions,m=a.placement,T=a.offset,O=a.getReferenceClientRect,H=a.moveTransition,U=M()?mt(v).arrow:null,we=O?{getBoundingClientRect:O,contextElement:O.contextElement||S()}:e,Et={name:"$$tippy",enabled:!0,phase:"beforeWrite",requires:["computeStyles"],fn:function(Ke){var Oe=Ke.state;if(M()){var gr=_(),at=gr.box;["placement","reference-hidden","escaped"].forEach(function(Je){Je==="placement"?at.setAttribute("data-placement",Oe.placement):Oe.attributes.popper["data-popper-"+Je]?at.setAttribute("data-"+Je,""):at.removeAttribute("data-"+Je)}),Oe.attributes.popper={}}}},de=[{name:"offset",options:{offset:T}},{name:"preventOverflow",options:{padding:{top:2,bottom:2,left:5,right:5}}},{name:"flip",options:{padding:5}},{name:"computeStyles",options:{adaptive:!H}},Et];M()&&U&&de.push({name:"arrow",options:{element:U,padding:3}}),de.push.apply(de,d?.modifiers||[]),i.popperInstance=Mn(we,v,Object.assign({},d,{placement:m,onFirstUpdate:x,modifiers:de}))}function qe(){i.popperInstance&&(i.popperInstance.destroy(),i.popperInstance=null)}function oe(){var a=i.props.appendTo,d,m=S();i.props.interactive&&a===sr||a==="parent"?d=m.parentNode:d=ur(a,[m]),d.contains(v)||d.appendChild(v),i.state.isMounted=!0,Ue()}function ue(){return rt(v.querySelectorAll("[data-tippy-root]"))}function Be(a){i.clearDelayTimeouts(),a&&j("onTrigger",[i,a]),Y();var d=k(!0),m=B(),T=m[0],O=m[1];Z.isTouch&&T==="hold"&&O&&(d=O),d?n=setTimeout(function(){i.show()},d):i.show()}function le(a){if(i.clearDelayTimeouts(),j("onUntrigger",[i,a]),!i.state.isVisible){ne();return}if(!(i.props.trigger.indexOf("mouseenter")>=0&&i.props.trigger.indexOf("click")>=0&&["mouseleave","mousemove"].indexOf(a.type)>=0&&f)){var d=k(!1);d?o=setTimeout(function(){i.state.isVisible&&i.hide()},d):s=requestAnimationFrame(function(){i.hide()})}}function Me(){i.state.isEnabled=!0}function ze(){i.hide(),i.state.isEnabled=!1}function Xe(){clearTimeout(n),clearTimeout(o),cancelAnimationFrame(s)}function Ye(a){if(!i.state.isDestroyed){j("onBeforeUpdate",[i,a]),We();var d=i.props,m=Wt(e,Object.assign({},d,Vt(a),{ignoreAttributes:!0}));i.props=m,be(),d.interactiveDebounce!==m.interactiveDebounce&&(ce(),w=jt(_e,m.interactiveDebounce)),d.triggerTarget&&!m.triggerTarget?xe(d.triggerTarget).forEach(function(T){T.removeAttribute("aria-expanded")}):m.triggerTarget&&e.removeAttribute("aria-expanded"),J(),V(),C&&C(d,m),i.popperInstance&&(Ue(),ue().forEach(function(T){requestAnimationFrame(T._tippy.popperInstance.forceUpdate)})),j("onAfterUpdate",[i,a])}}function Ge(a){i.setProps({content:a})}function lr(){var a=i.state.isVisible,d=i.state.isDestroyed,m=!i.state.isEnabled,T=Z.isTouch&&!i.props.touch,O=st(i.props.duration,0,G.duration);if(!(a||d||m||T)&&!S().hasAttribute("disabled")&&(j("onShow",[i],!1),i.props.onShow(i)!==!1)){if(i.state.isVisible=!0,M()&&(v.style.visibility="visible"),V(),Y(),i.state.isMounted||(v.style.transition="none"),M()){var H=_(),U=H.box,we=H.content;ut([U,we],0)}x=function(){var de;if(!(!i.state.isVisible||l)){if(l=!0,v.offsetHeight,v.style.transition=i.props.moveTransition,M()&&i.props.animation){var ot=_(),Ke=ot.box,Oe=ot.content;ut([Ke,Oe],O),Ht([Ke,Oe],"visible")}K(),J(),kt(ct,i),(de=i.popperInstance)==null||de.forceUpdate(),j("onMount",[i]),i.props.animation&&M()&&ie(O,function(){i.state.isShown=!0,j("onShown",[i])})}},oe()}}function dr(){var a=!i.state.isVisible,d=i.state.isDestroyed,m=!i.state.isEnabled,T=st(i.props.duration,1,G.duration);if(!(a||d||m)&&(j("onHide",[i],!1),i.props.onHide(i)!==!1)){if(i.state.isVisible=!1,i.state.isShown=!1,l=!1,f=!1,M()&&(v.style.visibility="hidden"),ce(),ne(),V(!0),M()){var O=_(),H=O.box,U=O.content;i.props.animation&&(ut([H,U],T),Ht([H,U],"hidden"))}K(),J(),i.props.animation?M()&&ge(T,i.unmount):i.unmount()}}function vr(a){W().addEventListener("mousemove",w),kt(Ze,w),w(a)}function mr(){i.state.isVisible&&i.hide(),i.state.isMounted&&(qe(),ue().forEach(function(a){a._tippy.unmount()}),v.parentNode&&v.parentNode.removeChild(v),ct=ct.filter(function(a){return a!==i}),i.state.isMounted=!1,j("onHidden",[i]))}function hr(){i.state.isDestroyed||(i.clearDelayTimeouts(),i.unmount(),We(),delete e._tippy,i.state.isDestroyed=!0,j("onDestroy",[i]))}}function Ne(e,t){t===void 0&&(t={});var r=G.plugins.concat(t.plugins||[]);qn();var n=Object.assign({},t,{plugins:r}),o=Nn(e),s=o.reduce(function(f,c){var u=c&&ti(c,n);return u&&f.push(u),f},[]);return it(e)?s[0]:s}Ne.defaultProps=G;Ne.setDefaultProps=Jn;Ne.currentInput=Z;Object.assign({},Kt,{effect:function(t){var r=t.state,n={popper:{position:r.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};Object.assign(r.elements.popper.style,n.popper),r.styles=n,r.elements.arrow&&Object.assign(r.elements.arrow.style,n.arrow)}});Ne.setDefaultProps({render:pr});const ri=qt({__name:"Button",props:{variant:{default:"principal"}},emits:["on-click"],setup(e,{expose:t,emit:r}){t();const n=r,o=yr(()=>{const f="px-8 py-2 rounded-full flex gap-4 items-center justify-center transition active:scale-95";switch(e.variant){case"principal":return f+" text-white bg-blue-500 hover:bg-blue-600";case"principal-outlined":return f+" text-blue-500 ring ring-1 ring-blue-500 hover:bg-blue-500 hover:bg-opacity-10"}}),s={emit:n,style:o};return Object.defineProperty(s,"__isScriptSetup",{enumerable:!1,value:!0}),s}});function ni(e,t,r,n,o,s){return zt(),Xt("button",{class:br(n.style),onClick:t[0]||(t[0]=()=>n.emit("on-click"))},[pt(e.$slots,"default")],2)}const ii=Ut(ri,[["render",ni]]),oi=qt({__name:"DropDown",props:{variant:{default:"principal"}},setup(e,{expose:t}){t();const r=Tt("button"),n=Tt("menu"),o=Er();Tr(()=>{o.value=Ne(r.value.$el,{content:n.value.innerHTML,trigger:"click",allowHTML:!0,animation:"shift-away",interactive:!0,placement:"bottom"})});const s={button:r,menu:n,overlay:o,Button:ii};return Object.defineProperty(s,"__isScriptSetup",{enumerable:!1,value:!0}),s}}),ai={ref:"menu",style:{display:"none"}};function si(e,t,r,n,o,s){return zt(),Xt(Ar,null,[wr("div",ai,[pt(e.$slots,"menu")],512),Or(n.Button,{ref:"button",variant:r.variant},{default:xr(()=>[pt(e.$slots,"default")]),_:3},8,["variant"])],64)}const pi=Ut(oi,[["render",si]]);export{pi as default};
