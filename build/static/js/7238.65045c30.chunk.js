"use strict";(self.webpackChunkshreyu_react_app=self.webpackChunkshreyu_react_app||[]).push([[7238],{22021:function(e,n,t){t.d(n,{gP:function(){return u}});var r=t(72791),o={prefix:String(Math.round(1e10*Math.random())),current:0},a=r.createContext(o);var i=Boolean("undefined"!==typeof window&&window.document&&window.document.createElement);function u(e){var n=(0,r.useContext)(a);return n!==o||i||console.warn("When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server."),(0,r.useMemo)((function(){return e||"react-aria"+n.prefix+"-"+ ++n.current}),[e])}},56236:function(e,n,t){t.d(n,{Z:function(){return d}});var r=t(29439),o=t(72791),a=(t(66068),t(79096),t(22519));t(36656),t(92444);t(9084),t(37215);var i="undefined"!==typeof t.g&&t.g.navigator&&"ReactNative"===t.g.navigator.product;"undefined"!==typeof document||i?o.useLayoutEffect:o.useEffect,new WeakMap;var u=t(15341),s=t(80184),l=["onKeyDown"];var c=o.forwardRef((function(e,n){var t,o=e.onKeyDown,i=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,l),c=(0,u.FT)(Object.assign({tagName:"a"},i)),d=(0,r.Z)(c,1)[0],f=(0,a.Z)((function(e){d.onKeyDown(e),null==o||o(e)}));return((t=i.href)&&"#"!==t.trim()||i.role)&&"button"!==i.role?(0,s.jsx)("a",Object.assign({ref:n},i,{onKeyDown:o})):(0,s.jsx)("a",Object.assign({ref:n},i,d,{onKeyDown:f}))}));c.displayName="Anchor";var d=c},74784:function(e,n,t){var r=t(72791).createContext(null);r.displayName="NavContext",n.Z=r},78633:function(e,n,t){t.d(n,{h:function(){return o}});var r=t(72791).createContext(null),o=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return null!=e?String(e):n||null};n.Z=r},36656:function(e,n,t){t.d(n,{Z:function(){return a}});var r=t(72791),o=t(22519);function a(e,n,t,a){void 0===a&&(a=!1);var i=(0,o.Z)(t);(0,r.useEffect)((function(){var t="function"===typeof e?e():e;return t.addEventListener(n,i,a),function(){return t.removeEventListener(n,i,a)}}),[e])}},90522:function(e,n,t){t.d(n,{Z:function(){return o}});var r=t(72791);function o(){return(0,r.useReducer)((function(e){return!e}),!1)[1]}},92444:function(e,n,t){t.d(n,{Z:function(){return a}});var r=t(36656),o=t(72791);function a(e,n,t){void 0===t&&(t=!1);var a=(0,o.useCallback)((function(){return document}),[]);return(0,r.Z)(a,e,n,t)}},7238:function(e,n,t){t.d(n,{Z:function(){return Ze}});var r=t(1413),o=t(45987),a=t(81694),i=t.n(a),u=t(72791),s=t(29439),l=t(13808),c=t(3070),d=t(80239),f=t(37215),v=t(90522),p=t(92444),g=t(22519),m=u.createContext(null),h=t(66068),w=t(49933),Z=t(66595),b=t(81012),y=t(80184),x=["children"];var C=function(){};function k(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=(0,u.useContext)(m),t=(0,h.Z)(),r=(0,s.Z)(t,2),o=r[0],a=r[1],i=(0,u.useRef)(!1),l=e.flip,c=e.offset,d=e.rootCloseEvent,f=e.fixed,v=void 0!==f&&f,p=e.placement,g=e.popperConfig,y=void 0===g?{}:g,x=e.enableEventListeners,k=void 0===x||x,E=e.usePopper,P=void 0===E?!!n:E,N=null==(null==n?void 0:n.show)?!!e.show:n.show;N&&!i.current&&(i.current=!0);var j=n||{},O=j.placement,S=j.setMenu,T=j.menuElement,D=j.toggleElement,M=(0,w.Z)(D,T,(0,b.ZP)({placement:p||O||"bottom-start",enabled:P,enableEvents:null==k?N:k,offset:c,flip:l,fixed:v,arrowElement:o,popperConfig:y})),R=Object.assign({ref:S||C,"aria-labelledby":null==D?void 0:D.id},M.attributes.popper,{style:M.styles.popper}),K={show:N,placement:O,hasShown:i.current,toggle:null==n?void 0:n.toggle,popper:P?M:null,arrowProps:P?Object.assign({ref:a},M.attributes.arrow,{style:M.styles.arrow}):{}};return(0,Z.Z)(T,(function(e){null==n||n.toggle(!1,e)}),{clickTrigger:d,disabled:!N}),[R,K]}function E(e){var n=e.children,t=k(function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,x)),r=(0,s.Z)(t,2),o=r[0],a=r[1];return(0,y.jsx)(y.Fragment,{children:n(o,a)})}E.displayName="DropdownMenu",E.defaultProps={usePopper:!0};var P=E,N=t(22021),j=function(e){var n;return"menu"===(null==(n=e.getAttribute("role"))?void 0:n.toLowerCase())},O=function(){};function S(){var e=(0,N.gP)(),n=(0,u.useContext)(m)||{},t=n.show,r=void 0!==t&&t,o=n.toggle,a=void 0===o?O:o,i=n.setToggle,s=n.menuElement,l=(0,u.useCallback)((function(e){a(!r,e)}),[r,a]),c={id:e,ref:i||O,onClick:l,"aria-expanded":!!r};return s&&j(s)&&(c["aria-haspopup"]=!0),[c,{show:r,toggle:a}]}function T(e){var n=e.children,t=S(),r=(0,s.Z)(t,2),o=r[0],a=r[1];return(0,y.jsx)(y.Fragment,{children:n(o,a)})}T.displayName="DropdownToggle";var D=T,M=t(4942),R=t(78633),K=t(74784),I=t(15341),L=t(71306),F=["eventKey","disabled","onClick","active","as"];function A(e){var n=e.key,t=e.href,r=e.active,o=e.disabled,a=e.onClick,i=(0,u.useContext)(R.Z),s=((0,u.useContext)(K.Z)||{}).activeKey,l=(0,R.h)(n,t),c=null==r&&null!=n?(0,R.h)(s)===l:r,d=(0,g.Z)((function(e){o||(null==a||a(e),i&&!e.isPropagationStopped()&&i(l,e))}));return[(0,M.Z)({onClick:d,"aria-disabled":o||void 0,"aria-selected":c},(0,L.PB)("dropdown-item"),""),{isActive:c}]}var B=u.forwardRef((function(e,n){var t=e.eventKey,r=e.disabled,o=e.onClick,a=e.active,i=e.as,u=void 0===i?I.ZP:i,l=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,F),c=A({key:t,href:l.href,disabled:r,onClick:o,active:a}),d=(0,s.Z)(c,1)[0];return(0,y.jsx)(u,Object.assign({},l,{ref:n},d))}));B.displayName="DropdownItem";var _=B;function W(){var e=(0,v.Z)(),n=(0,u.useRef)(null),t=(0,u.useCallback)((function(t){n.current=t,e()}),[e]);return[n,t]}function $(e){var n=e.defaultShow,t=e.show,r=e.onSelect,o=e.onToggle,a=e.itemSelector,i=void 0===a?"* [".concat((0,L.PB)("dropdown-item"),"]"):a,v=e.focusFirstItemOnShow,h=e.placement,w=void 0===h?"bottom-start":h,Z=e.children,b=(0,d.$c)(t,n,o),x=(0,s.Z)(b,2),C=x[0],k=x[1],E=W(),P=(0,s.Z)(E,2),N=P[0],O=P[1],S=N.current,T=W(),D=(0,s.Z)(T,2),M=D[0],K=D[1],I=M.current,F=(0,f.Z)(C),A=(0,u.useRef)(null),B=(0,u.useRef)(!1),_=(0,u.useContext)(R.Z),$=(0,u.useCallback)((function(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null==n?void 0:n.type;k(e,{originalEvent:n,source:t})}),[k]),H=(0,g.Z)((function(e,n){null==r||r(e,n),$(!1,n,"select"),n.isPropagationStopped()||null==_||_(e,n)})),U=(0,u.useMemo)((function(){return{toggle:$,placement:w,show:C,menuElement:S,toggleElement:I,setMenu:O,setToggle:K}}),[$,w,C,S,I,O,K]);S&&F&&!C&&(B.current=S.contains(document.activeElement));var q=(0,g.Z)((function(){I&&I.focus&&I.focus()})),z=(0,g.Z)((function(){var e=A.current,n=v;if(null==n&&(n=!(!N.current||!j(N.current))&&"keyboard"),!1!==n&&("keyboard"!==n||/^key.+$/.test(e))){var t=(0,l.Z)(N.current,i)[0];t&&t.focus&&t.focus()}}));(0,u.useEffect)((function(){C?z():B.current&&(B.current=!1,q())}),[C,B,q,z]),(0,u.useEffect)((function(){A.current=null}));var G=function(e,n){if(!N.current)return null;var t=(0,l.Z)(N.current,i),r=t.indexOf(e)+n;return t[r=Math.max(0,Math.min(r,t.length))]};return(0,p.Z)("keydown",(function(e){var n,t,r=e.key,o=e.target,a=null==(n=N.current)?void 0:n.contains(o),i=null==(t=M.current)?void 0:t.contains(o);if((!/input|textarea/i.test(o.tagName)||!(" "===r||"Escape"!==r&&a))&&(a||i)&&("Tab"!==r||N.current&&C)){A.current=e.type;var u={originalEvent:e,source:e.type};switch(r){case"ArrowUp":var s=G(o,-1);return s&&s.focus&&s.focus(),void e.preventDefault();case"ArrowDown":if(e.preventDefault(),C){var l=G(o,1);l&&l.focus&&l.focus()}else k(!0,u);return;case"Tab":(0,c.ZP)(document,"keyup",(function(e){var n;("Tab"!==e.key||e.target)&&null!=(n=N.current)&&n.contains(e.target)||k(!1,u)}),{once:!0});break;case"Escape":"Escape"===r&&(e.preventDefault(),e.stopPropagation()),k(!1,u)}}})),(0,y.jsx)(R.Z.Provider,{value:H,children:(0,y.jsx)(m.Provider,{value:U,children:Z})})}$.displayName="Dropdown",$.Menu=P,$.Toggle=D,$.Item=_;var H=$,U=t(52134),q=u.createContext({});q.displayName="DropdownContext";var z=q,G=t(56236),J=t(10162),Q=["bsPrefix","className","eventKey","disabled","onClick","active","as"],V=u.forwardRef((function(e,n){var t=e.bsPrefix,a=e.className,u=e.eventKey,l=e.disabled,c=void 0!==l&&l,d=e.onClick,f=e.active,v=e.as,p=void 0===v?G.Z:v,g=(0,o.Z)(e,Q),m=(0,J.vE)(t,"dropdown-item"),h=A({key:u,href:g.href,disabled:c,onClick:d,active:f}),w=(0,s.Z)(h,2),Z=w[0],b=w[1];return(0,y.jsx)(p,(0,r.Z)((0,r.Z)((0,r.Z)({},g),Z),{},{ref:n,className:i()(a,m,b.isActive&&"active",c&&"disabled")}))}));V.displayName="DropdownItem";var X=V,Y="undefined"!==typeof t.g&&t.g.navigator&&"ReactNative"===t.g.navigator.product,ee="undefined"!==typeof document||Y?u.useLayoutEffect:u.useEffect,ne=t(73201),te=(t(42391),t(91991)),re=t(5715);t(92176);function oe(e,n){return e}var ae=["bsPrefix","className","align","rootCloseEvent","flip","show","renderOnMount","as","popperConfig","variant"];function ie(e,n,t){var r=e?t?"bottom-start":"bottom-end":t?"bottom-end":"bottom-start";return"up"===n?r=e?t?"top-start":"top-end":t?"top-end":"top-start":"end"===n?r=e?t?"left-end":"right-end":t?"left-start":"right-start":"start"===n&&(r=e?t?"right-end":"left-end":t?"right-start":"left-start"),r}var ue=u.forwardRef((function(e,n){var t=e.bsPrefix,a=e.className,l=e.align,c=e.rootCloseEvent,d=e.flip,f=e.show,v=e.renderOnMount,p=e.as,g=void 0===p?"div":p,m=e.popperConfig,h=e.variant,w=(0,o.Z)(e,ae),Z=!1,b=(0,u.useContext)(re.Z),x=(0,J.vE)(t,"dropdown-menu"),C=(0,u.useContext)(z),E=C.align,P=C.drop,N=C.isRTL;l=l||E;var j=(0,u.useContext)(te.Z),O=[];if(l)if("object"===typeof l){var S=Object.keys(l);if(S.length){var T=S[0],D=l[T];Z="start"===D,O.push("".concat(x,"-").concat(T,"-").concat(D))}}else"end"===l&&(Z=!0);var M=ie(Z,P,N),R=k({flip:d,rootCloseEvent:c,show:f,usePopper:!b&&0===O.length,offset:[0,2],popperConfig:m,placement:M}),K=(0,s.Z)(R,2),I=K[0],L=K[1],F=L.hasShown,A=L.popper,B=L.show,_=L.toggle;if(I.ref=(0,ne.Z)(oe(n),I.ref),ee((function(){B&&(null==A||A.update())}),[B]),!F&&!v&&!j)return null;"string"!==typeof g&&(I.show=B,I.close=function(){return null==_?void 0:_(!1)},I.align=l);var W=w.style;return null!=A&&A.placement&&(W=(0,r.Z)((0,r.Z)({},w.style),I.style),w["x-placement"]=A.placement),(0,y.jsx)(g,(0,r.Z)((0,r.Z)((0,r.Z)((0,r.Z)({},w),I),{},{style:W},(O.length||b)&&{"data-bs-popper":"static"}),{},{className:i().apply(void 0,[a,x,B&&"show",Z&&"".concat(x,"-end"),h&&"".concat(x,"-").concat(h)].concat(O))}))}));ue.displayName="DropdownMenu",ue.defaultProps={flip:!0};var se=ue,le=t(43360),ce=["bsPrefix","split","className","childBsPrefix","as"],de=u.forwardRef((function(e,n){var t=e.bsPrefix,a=e.split,l=e.className,c=e.childBsPrefix,d=e.as,f=void 0===d?le.Z:d,v=(0,o.Z)(e,ce),p=(0,J.vE)(t,"dropdown-toggle"),g=(0,u.useContext)(m),h=(0,u.useContext)(te.Z);void 0!==c&&(v.bsPrefix=c);var w=S(),Z=(0,s.Z)(w,1)[0];return Z.ref=(0,ne.Z)(Z.ref,oe(n)),(0,y.jsx)(f,(0,r.Z)((0,r.Z)({className:i()(l,p,a&&"".concat(p,"-split"),!!h&&(null==g?void 0:g.show)&&"show")},Z),v))}));de.displayName="DropdownToggle";var fe=de,ve=t(66543),pe=["bsPrefix","drop","show","className","align","onSelect","onToggle","focusFirstItemOnShow","as","navbar","autoClose"],ge=(0,ve.Z)("dropdown-header",{defaultProps:{role:"heading"}}),me=(0,ve.Z)("dropdown-divider",{Component:"hr",defaultProps:{role:"separator"}}),he=(0,ve.Z)("dropdown-item-text",{Component:"span"}),we=u.forwardRef((function(e,n){var t=(0,d.Ch)(e,{show:"onToggle"}),a=t.bsPrefix,s=t.drop,l=t.show,c=t.className,f=t.align,v=t.onSelect,p=t.onToggle,g=t.focusFirstItemOnShow,m=t.as,h=void 0===m?"div":m,w=(t.navbar,t.autoClose),Z=(0,o.Z)(t,pe),b=(0,u.useContext)(te.Z),x=(0,J.vE)(a,"dropdown"),C=(0,J.SC)(),k=(0,U.Z)((function(e,n){var t;n.originalEvent.currentTarget!==document||"keydown"===n.source&&"Escape"!==n.originalEvent.key||(n.source="rootClose"),t=n.source,(!1===w?"click"===t:"inside"===w?"rootClose"!==t:"outside"!==w||"select"!==t)&&(null==p||p(e,n))})),E=ie("end"===f,s,C),P=(0,u.useMemo)((function(){return{align:f,drop:s,isRTL:C}}),[f,s,C]);return(0,y.jsx)(z.Provider,{value:P,children:(0,y.jsx)(H,{placement:E,show:l,onSelect:v,onToggle:k,focusFirstItemOnShow:g,itemSelector:".".concat(x,"-item:not(.disabled):not(:disabled)"),children:b?Z.children:(0,y.jsx)(h,(0,r.Z)((0,r.Z)({},Z),{},{ref:n,className:i()(c,l&&"show",(!s||"down"===s)&&x,"up"===s&&"dropup","end"===s&&"dropend","start"===s&&"dropstart")}))})})}));we.displayName="Dropdown",we.defaultProps={navbar:!1,align:"start",autoClose:!0};var Ze=Object.assign(we,{Toggle:fe,Menu:se,Item:X,ItemText:he,Divider:me,Header:ge})},5715:function(e,n,t){var r=t(72791).createContext(null);r.displayName="NavbarContext",n.Z=r}}]);
//# sourceMappingURL=7238.65045c30.chunk.js.map