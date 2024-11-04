"use strict";(self.webpackChunkwebpack_template=self.webpackChunkwebpack_template||[]).push([[7204],{7604:function(e,t,n){function r(e){return e?(e.nodeName||"").toLowerCase():null}n.d(t,{A:function(){return r}})},8979:function(e,t,n){function r(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}n.d(t,{A:function(){return r}})},5581:function(e,t,n){n.d(t,{Ng:function(){return a},sb:function(){return i},vq:function(){return o}});var r=n(8979);function o(e){return e instanceof(0,r.A)(e).Element||e instanceof Element}function i(e){return e instanceof(0,r.A)(e).HTMLElement||e instanceof HTMLElement}function a(e){return"undefined"!=typeof ShadowRoot&&(e instanceof(0,r.A)(e).ShadowRoot||e instanceof ShadowRoot)}},6607:function(e,t,n){var r=n(7604),o=n(5581);t.A={name:"applyStyles",enabled:!0,phase:"write",fn:function(e){var t=e.state;Object.keys(t.elements).forEach((function(e){var n=t.styles[e]||{},i=t.attributes[e]||{},a=t.elements[e];(0,o.sb)(a)&&(0,r.A)(a)&&(Object.assign(a.style,n),Object.keys(i).forEach((function(e){var t=i[e];!1===t?a.removeAttribute(e):a.setAttribute(e,!0===t?"":t)})))}))},effect:function(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach((function(e){var i=t.elements[e],a=t.attributes[e]||{},s=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:n[e]).reduce((function(e,t){return e[t]="",e}),{});(0,o.sb)(i)&&(0,r.A)(i)&&(Object.assign(i.style,s),Object.keys(a).forEach((function(e){i.removeAttribute(e)})))}))}},requires:["computeStyles"]}},2784:function(e,t,n){n.d(t,{n4:function(){return ge}});var r=n(5581),o=Math.max,i=Math.min,a=Math.round,s=n(8979);function f(){var e=navigator.userAgentData;return null!=e&&e.brands&&Array.isArray(e.brands)?e.brands.map((function(e){return e.brand+"/"+e.version})).join(" "):navigator.userAgent}function c(){return!/^((?!chrome|android).)*safari/i.test(f())}function u(e,t,n){void 0===t&&(t=!1),void 0===n&&(n=!1);var o=e.getBoundingClientRect(),i=1,f=1;t&&(0,r.sb)(e)&&(i=e.offsetWidth>0&&a(o.width)/e.offsetWidth||1,f=e.offsetHeight>0&&a(o.height)/e.offsetHeight||1);var u=((0,r.vq)(e)?(0,s.A)(e):window).visualViewport,p=!c()&&n,l=(o.left+(p&&u?u.offsetLeft:0))/i,d=(o.top+(p&&u?u.offsetTop:0))/f,h=o.width/i,m=o.height/f;return{width:h,height:m,top:d,right:l+h,bottom:d+m,left:l,x:l,y:d}}function p(e){var t=(0,s.A)(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}var l=n(7604);function d(e){return(((0,r.vq)(e)?e.ownerDocument:e.document)||window.document).documentElement}function h(e){return u(d(e)).left+p(e).scrollLeft}function m(e){return(0,s.A)(e).getComputedStyle(e)}function v(e){var t=m(e),n=t.overflow,r=t.overflowX,o=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+o+r)}function g(e,t,n){void 0===n&&(n=!1);var o,i,f=(0,r.sb)(t),c=(0,r.sb)(t)&&function(e){var t=e.getBoundingClientRect(),n=a(t.width)/e.offsetWidth||1,r=a(t.height)/e.offsetHeight||1;return 1!==n||1!==r}(t),m=d(t),g=u(e,c,n),b={scrollLeft:0,scrollTop:0},y={x:0,y:0};return(f||!f&&!n)&&(("body"!==(0,l.A)(t)||v(m))&&(b=(o=t)!==(0,s.A)(o)&&(0,r.sb)(o)?{scrollLeft:(i=o).scrollLeft,scrollTop:i.scrollTop}:p(o)),(0,r.sb)(t)?((y=u(t,!0)).x+=t.clientLeft,y.y+=t.clientTop):m&&(y.x=h(m))),{x:g.left+b.scrollLeft-y.x,y:g.top+b.scrollTop-y.y,width:g.width,height:g.height}}function b(e){var t=u(e),n=e.offsetWidth,r=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-r)<=1&&(r=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:r}}function y(e){return"html"===(0,l.A)(e)?e:e.assignedSlot||e.parentNode||((0,r.Ng)(e)?e.host:null)||d(e)}function w(e){return["html","body","#document"].indexOf((0,l.A)(e))>=0?e.ownerDocument.body:(0,r.sb)(e)&&v(e)?e:w(y(e))}function x(e,t){var n;void 0===t&&(t=[]);var r=w(e),o=r===(null==(n=e.ownerDocument)?void 0:n.body),i=(0,s.A)(r),a=o?[i].concat(i.visualViewport||[],v(r)?r:[]):r,f=t.concat(a);return o?f:f.concat(x(y(a)))}function O(e){return["table","td","th"].indexOf((0,l.A)(e))>=0}function A(e){return(0,r.sb)(e)&&"fixed"!==m(e).position?e.offsetParent:null}function j(e){for(var t=(0,s.A)(e),n=A(e);n&&O(n)&&"static"===m(n).position;)n=A(n);return n&&("html"===(0,l.A)(n)||"body"===(0,l.A)(n)&&"static"===m(n).position)?t:n||function(e){var t=/firefox/i.test(f());if(/Trident/i.test(f())&&(0,r.sb)(e)&&"fixed"===m(e).position)return null;var n=y(e);for((0,r.Ng)(n)&&(n=n.host);(0,r.sb)(n)&&["html","body"].indexOf((0,l.A)(n))<0;){var o=m(n);if("none"!==o.transform||"none"!==o.perspective||"paint"===o.contain||-1!==["transform","perspective"].indexOf(o.willChange)||t&&"filter"===o.willChange||t&&o.filter&&"none"!==o.filter)return n;n=n.parentNode}return null}(e)||t}var E="top",D="bottom",k="right",L="left",W="auto",M=[E,D,k,L],P="start",q="end",B="viewport",H="popper",R=M.reduce((function(e,t){return e.concat([t+"-"+P,t+"-"+q])}),[]),T=[].concat(M,[W]).reduce((function(e,t){return e.concat([t,t+"-"+P,t+"-"+q])}),[]),C=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"];function S(e){var t=new Map,n=new Set,r=[];function o(e){n.add(e.name),[].concat(e.requires||[],e.requiresIfExists||[]).forEach((function(e){if(!n.has(e)){var r=t.get(e);r&&o(r)}})),r.push(e)}return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){n.has(e.name)||o(e)})),r}var N={placement:"bottom",modifiers:[],strategy:"absolute"};function V(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some((function(e){return!(e&&"function"==typeof e.getBoundingClientRect)}))}function I(e){void 0===e&&(e={});var t=e,n=t.defaultModifiers,o=void 0===n?[]:n,i=t.defaultOptions,a=void 0===i?N:i;return function(e,t,n){void 0===n&&(n=a);var i,s,f={placement:"bottom",orderedModifiers:[],options:Object.assign({},N,a),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},c=[],u=!1,p={state:f,setOptions:function(n){var i="function"==typeof n?n(f.options):n;l(),f.options=Object.assign({},a,f.options,i),f.scrollParents={reference:(0,r.vq)(e)?x(e):e.contextElement?x(e.contextElement):[],popper:x(t)};var s,u,d=function(e){var t=S(e);return C.reduce((function(e,n){return e.concat(t.filter((function(e){return e.phase===n})))}),[])}((s=[].concat(o,f.options.modifiers),u=s.reduce((function(e,t){var n=e[t.name];return e[t.name]=n?Object.assign({},n,t,{options:Object.assign({},n.options,t.options),data:Object.assign({},n.data,t.data)}):t,e}),{}),Object.keys(u).map((function(e){return u[e]}))));return f.orderedModifiers=d.filter((function(e){return e.enabled})),f.orderedModifiers.forEach((function(e){var t=e.name,n=e.options,r=void 0===n?{}:n,o=e.effect;if("function"==typeof o){var i=o({state:f,name:t,instance:p,options:r});c.push(i||function(){})}})),p.update()},forceUpdate:function(){if(!u){var e=f.elements,t=e.reference,n=e.popper;if(V(t,n)){f.rects={reference:g(t,j(n),"fixed"===f.options.strategy),popper:b(n)},f.reset=!1,f.placement=f.options.placement,f.orderedModifiers.forEach((function(e){return f.modifiersData[e.name]=Object.assign({},e.data)}));for(var r=0;r<f.orderedModifiers.length;r++)if(!0!==f.reset){var o=f.orderedModifiers[r],i=o.fn,a=o.options,s=void 0===a?{}:a,c=o.name;"function"==typeof i&&(f=i({state:f,options:s,name:c,instance:p})||f)}else f.reset=!1,r=-1}}},update:(i=function(){return new Promise((function(e){p.forceUpdate(),e(f)}))},function(){return s||(s=new Promise((function(e){Promise.resolve().then((function(){s=void 0,e(i())}))}))),s}),destroy:function(){l(),u=!0}};if(!V(e,t))return p;function l(){c.forEach((function(e){return e()})),c=[]}return p.setOptions(n).then((function(e){!u&&n.onFirstUpdate&&n.onFirstUpdate(e)})),p}}var _={passive:!0},F={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,n=e.instance,r=e.options,o=r.scroll,i=void 0===o||o,a=r.resize,f=void 0===a||a,c=(0,s.A)(t.elements.popper),u=[].concat(t.scrollParents.reference,t.scrollParents.popper);return i&&u.forEach((function(e){e.addEventListener("scroll",n.update,_)})),f&&c.addEventListener("resize",n.update,_),function(){i&&u.forEach((function(e){e.removeEventListener("scroll",n.update,_)})),f&&c.removeEventListener("resize",n.update,_)}},data:{}};function U(e){return e.split("-")[0]}function z(e){return e.split("-")[1]}function X(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function Y(e){var t,n=e.reference,r=e.element,o=e.placement,i=o?U(o):null,a=o?z(o):null,s=n.x+n.width/2-r.width/2,f=n.y+n.height/2-r.height/2;switch(i){case E:t={x:s,y:n.y-r.height};break;case D:t={x:s,y:n.y+n.height};break;case k:t={x:n.x+n.width,y:f};break;case L:t={x:n.x-r.width,y:f};break;default:t={x:n.x,y:n.y}}var c=i?X(i):null;if(null!=c){var u="y"===c?"height":"width";switch(a){case P:t[c]=t[c]-(n[u]/2-r[u]/2);break;case q:t[c]=t[c]+(n[u]/2-r[u]/2)}}return t}var G={name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,n=e.name;t.modifiersData[n]=Y({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}},J={top:"auto",right:"auto",bottom:"auto",left:"auto"};function K(e){var t,n=e.popper,r=e.popperRect,o=e.placement,i=e.variation,f=e.offsets,c=e.position,u=e.gpuAcceleration,p=e.adaptive,l=e.roundOffsets,h=e.isFixed,v=f.x,g=void 0===v?0:v,b=f.y,y=void 0===b?0:b,w="function"==typeof l?l({x:g,y:y}):{x:g,y:y};g=w.x,y=w.y;var x=f.hasOwnProperty("x"),O=f.hasOwnProperty("y"),A=L,W=E,M=window;if(p){var P=j(n),B="clientHeight",H="clientWidth";P===(0,s.A)(n)&&"static"!==m(P=d(n)).position&&"absolute"===c&&(B="scrollHeight",H="scrollWidth"),(o===E||(o===L||o===k)&&i===q)&&(W=D,y-=(h&&P===M&&M.visualViewport?M.visualViewport.height:P[B])-r.height,y*=u?1:-1),o!==L&&(o!==E&&o!==D||i!==q)||(A=k,g-=(h&&P===M&&M.visualViewport?M.visualViewport.width:P[H])-r.width,g*=u?1:-1)}var R,T=Object.assign({position:c},p&&J),C=!0===l?function(e,t){var n=e.x,r=e.y,o=t.devicePixelRatio||1;return{x:a(n*o)/o||0,y:a(r*o)/o||0}}({x:g,y:y},(0,s.A)(n)):{x:g,y:y};return g=C.x,y=C.y,u?Object.assign({},T,((R={})[W]=O?"0":"",R[A]=x?"0":"",R.transform=(M.devicePixelRatio||1)<=1?"translate("+g+"px, "+y+"px)":"translate3d("+g+"px, "+y+"px, 0)",R)):Object.assign({},T,((t={})[W]=O?y+"px":"",t[A]=x?g+"px":"",t.transform="",t))}var Q={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,n=e.options,r=n.gpuAcceleration,o=void 0===r||r,i=n.adaptive,a=void 0===i||i,s=n.roundOffsets,f=void 0===s||s,c={placement:U(t.placement),variation:z(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:o,isFixed:"fixed"===t.options.strategy};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,K(Object.assign({},c,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:a,roundOffsets:f})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,K(Object.assign({},c,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:f})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}},Z=n(6607),$={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,n=e.options,r=e.name,o=n.offset,i=void 0===o?[0,0]:o,a=T.reduce((function(e,n){return e[n]=function(e,t,n){var r=U(e),o=[L,E].indexOf(r)>=0?-1:1,i="function"==typeof n?n(Object.assign({},t,{placement:e})):n,a=i[0],s=i[1];return a=a||0,s=(s||0)*o,[L,k].indexOf(r)>=0?{x:s,y:a}:{x:a,y:s}}(n,t.rects,i),e}),{}),s=a[t.placement],f=s.x,c=s.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=f,t.modifiersData.popperOffsets.y+=c),t.modifiersData[r]=a}},ee={left:"right",right:"left",bottom:"top",top:"bottom"};function te(e){return e.replace(/left|right|bottom|top/g,(function(e){return ee[e]}))}var ne={start:"end",end:"start"};function re(e){return e.replace(/start|end/g,(function(e){return ne[e]}))}function oe(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&(0,r.Ng)(n)){var o=t;do{if(o&&e.isSameNode(o))return!0;o=o.parentNode||o.host}while(o)}return!1}function ie(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function ae(e,t,n){return t===B?ie(function(e,t){var n=(0,s.A)(e),r=d(e),o=n.visualViewport,i=r.clientWidth,a=r.clientHeight,f=0,u=0;if(o){i=o.width,a=o.height;var p=c();(p||!p&&"fixed"===t)&&(f=o.offsetLeft,u=o.offsetTop)}return{width:i,height:a,x:f+h(e),y:u}}(e,n)):(0,r.vq)(t)?function(e,t){var n=u(e,!1,"fixed"===t);return n.top=n.top+e.clientTop,n.left=n.left+e.clientLeft,n.bottom=n.top+e.clientHeight,n.right=n.left+e.clientWidth,n.width=e.clientWidth,n.height=e.clientHeight,n.x=n.left,n.y=n.top,n}(t,n):ie(function(e){var t,n=d(e),r=p(e),i=null==(t=e.ownerDocument)?void 0:t.body,a=o(n.scrollWidth,n.clientWidth,i?i.scrollWidth:0,i?i.clientWidth:0),s=o(n.scrollHeight,n.clientHeight,i?i.scrollHeight:0,i?i.clientHeight:0),f=-r.scrollLeft+h(e),c=-r.scrollTop;return"rtl"===m(i||n).direction&&(f+=o(n.clientWidth,i?i.clientWidth:0)-a),{width:a,height:s,x:f,y:c}}(d(e)))}function se(e){return Object.assign({},{top:0,right:0,bottom:0,left:0},e)}function fe(e,t){return t.reduce((function(t,n){return t[n]=e,t}),{})}function ce(e,t){void 0===t&&(t={});var n=t,a=n.placement,s=void 0===a?e.placement:a,f=n.strategy,c=void 0===f?e.strategy:f,p=n.boundary,h=void 0===p?"clippingParents":p,v=n.rootBoundary,g=void 0===v?B:v,b=n.elementContext,w=void 0===b?H:b,O=n.altBoundary,A=void 0!==O&&O,L=n.padding,W=void 0===L?0:L,P=se("number"!=typeof W?W:fe(W,M)),q=w===H?"reference":H,R=e.rects.popper,T=e.elements[A?q:w],C=function(e,t,n,a){var s="clippingParents"===t?function(e){var t=x(y(e)),n=["absolute","fixed"].indexOf(m(e).position)>=0&&(0,r.sb)(e)?j(e):e;return(0,r.vq)(n)?t.filter((function(e){return(0,r.vq)(e)&&oe(e,n)&&"body"!==(0,l.A)(e)})):[]}(e):[].concat(t),f=[].concat(s,[n]),c=f[0],u=f.reduce((function(t,n){var r=ae(e,n,a);return t.top=o(r.top,t.top),t.right=i(r.right,t.right),t.bottom=i(r.bottom,t.bottom),t.left=o(r.left,t.left),t}),ae(e,c,a));return u.width=u.right-u.left,u.height=u.bottom-u.top,u.x=u.left,u.y=u.top,u}((0,r.vq)(T)?T:T.contextElement||d(e.elements.popper),h,g,c),S=u(e.elements.reference),N=Y({reference:S,element:R,strategy:"absolute",placement:s}),V=ie(Object.assign({},R,N)),I=w===H?V:S,_={top:C.top-I.top+P.top,bottom:I.bottom-C.bottom+P.bottom,left:C.left-I.left+P.left,right:I.right-C.right+P.right},F=e.modifiersData.offset;if(w===H&&F){var U=F[s];Object.keys(_).forEach((function(e){var t=[k,D].indexOf(e)>=0?1:-1,n=[E,D].indexOf(e)>=0?"y":"x";_[e]+=U[n]*t}))}return _}var ue={name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name;if(!t.modifiersData[r]._skip){for(var o=n.mainAxis,i=void 0===o||o,a=n.altAxis,s=void 0===a||a,f=n.fallbackPlacements,c=n.padding,u=n.boundary,p=n.rootBoundary,l=n.altBoundary,d=n.flipVariations,h=void 0===d||d,m=n.allowedAutoPlacements,v=t.options.placement,g=U(v),b=f||(g!==v&&h?function(e){if(U(e)===W)return[];var t=te(e);return[re(e),t,re(t)]}(v):[te(v)]),y=[v].concat(b).reduce((function(e,n){return e.concat(U(n)===W?function(e,t){void 0===t&&(t={});var n=t,r=n.placement,o=n.boundary,i=n.rootBoundary,a=n.padding,s=n.flipVariations,f=n.allowedAutoPlacements,c=void 0===f?T:f,u=z(r),p=u?s?R:R.filter((function(e){return z(e)===u})):M,l=p.filter((function(e){return c.indexOf(e)>=0}));0===l.length&&(l=p);var d=l.reduce((function(t,n){return t[n]=ce(e,{placement:n,boundary:o,rootBoundary:i,padding:a})[U(n)],t}),{});return Object.keys(d).sort((function(e,t){return d[e]-d[t]}))}(t,{placement:n,boundary:u,rootBoundary:p,padding:c,flipVariations:h,allowedAutoPlacements:m}):n)}),[]),w=t.rects.reference,x=t.rects.popper,O=new Map,A=!0,j=y[0],q=0;q<y.length;q++){var B=y[q],H=U(B),C=z(B)===P,S=[E,D].indexOf(H)>=0,N=S?"width":"height",V=ce(t,{placement:B,boundary:u,rootBoundary:p,altBoundary:l,padding:c}),I=S?C?k:L:C?D:E;w[N]>x[N]&&(I=te(I));var _=te(I),F=[];if(i&&F.push(V[H]<=0),s&&F.push(V[I]<=0,V[_]<=0),F.every((function(e){return e}))){j=B,A=!1;break}O.set(B,F)}if(A)for(var X=function(e){var t=y.find((function(t){var n=O.get(t);if(n)return n.slice(0,e).every((function(e){return e}))}));if(t)return j=t,"break"},Y=h?3:1;Y>0&&"break"!==X(Y);Y--);t.placement!==j&&(t.modifiersData[r]._skip=!0,t.placement=j,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}};function pe(e,t,n){return o(e,i(t,n))}var le={name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name,a=n.mainAxis,s=void 0===a||a,f=n.altAxis,c=void 0!==f&&f,u=n.boundary,p=n.rootBoundary,l=n.altBoundary,d=n.padding,h=n.tether,m=void 0===h||h,v=n.tetherOffset,g=void 0===v?0:v,y=ce(t,{boundary:u,rootBoundary:p,padding:d,altBoundary:l}),w=U(t.placement),x=z(t.placement),O=!x,A=X(w),W="x"===A?"y":"x",M=t.modifiersData.popperOffsets,q=t.rects.reference,B=t.rects.popper,H="function"==typeof g?g(Object.assign({},t.rects,{placement:t.placement})):g,R="number"==typeof H?{mainAxis:H,altAxis:H}:Object.assign({mainAxis:0,altAxis:0},H),T=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,C={x:0,y:0};if(M){if(s){var S,N="y"===A?E:L,V="y"===A?D:k,I="y"===A?"height":"width",_=M[A],F=_+y[N],Y=_-y[V],G=m?-B[I]/2:0,J=x===P?q[I]:B[I],K=x===P?-B[I]:-q[I],Q=t.elements.arrow,Z=m&&Q?b(Q):{width:0,height:0},$=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},ee=$[N],te=$[V],ne=pe(0,q[I],Z[I]),re=O?q[I]/2-G-ne-ee-R.mainAxis:J-ne-ee-R.mainAxis,oe=O?-q[I]/2+G+ne+te+R.mainAxis:K+ne+te+R.mainAxis,ie=t.elements.arrow&&j(t.elements.arrow),ae=ie?"y"===A?ie.clientTop||0:ie.clientLeft||0:0,se=null!=(S=null==T?void 0:T[A])?S:0,fe=_+oe-se,ue=pe(m?i(F,_+re-se-ae):F,_,m?o(Y,fe):Y);M[A]=ue,C[A]=ue-_}if(c){var le,de="x"===A?E:L,he="x"===A?D:k,me=M[W],ve="y"===W?"height":"width",ge=me+y[de],be=me-y[he],ye=-1!==[E,L].indexOf(w),we=null!=(le=null==T?void 0:T[W])?le:0,xe=ye?ge:me-q[ve]-B[ve]-we+R.altAxis,Oe=ye?me+q[ve]+B[ve]-we-R.altAxis:be,Ae=m&&ye?function(e,t,n){var r=pe(e,t,n);return r>n?n:r}(xe,me,Oe):pe(m?xe:ge,me,m?Oe:be);M[W]=Ae,C[W]=Ae-me}t.modifiersData[r]=C}},requiresIfExists:["offset"]},de={name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,n=e.state,r=e.name,o=e.options,i=n.elements.arrow,a=n.modifiersData.popperOffsets,s=U(n.placement),f=X(s),c=[L,k].indexOf(s)>=0?"height":"width";if(i&&a){var u=function(e,t){return se("number"!=typeof(e="function"==typeof e?e(Object.assign({},t.rects,{placement:t.placement})):e)?e:fe(e,M))}(o.padding,n),p=b(i),l="y"===f?E:L,d="y"===f?D:k,h=n.rects.reference[c]+n.rects.reference[f]-a[f]-n.rects.popper[c],m=a[f]-n.rects.reference[f],v=j(i),g=v?"y"===f?v.clientHeight||0:v.clientWidth||0:0,y=h/2-m/2,w=u[l],x=g-p[c]-u[d],O=g/2-p[c]/2+y,A=pe(w,O,x),W=f;n.modifiersData[r]=((t={})[W]=A,t.centerOffset=A-O,t)}},effect:function(e){var t=e.state,n=e.options.element,r=void 0===n?"[data-popper-arrow]":n;null!=r&&("string"!=typeof r||(r=t.elements.popper.querySelector(r)))&&oe(t.elements.popper,r)&&(t.elements.arrow=r)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function he(e,t,n){return void 0===n&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function me(e){return[E,k,D,L].some((function(t){return e[t]>=0}))}var ve={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,n=e.name,r=t.rects.reference,o=t.rects.popper,i=t.modifiersData.preventOverflow,a=ce(t,{elementContext:"reference"}),s=ce(t,{altBoundary:!0}),f=he(a,r),c=he(s,o,i),u=me(f),p=me(c);t.modifiersData[n]={referenceClippingOffsets:f,popperEscapeOffsets:c,isReferenceHidden:u,hasPopperEscaped:p},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":u,"data-popper-escaped":p})}},ge=I({defaultModifiers:[F,G,Q,Z.A,$,ue,le,de,ve]})}}]);