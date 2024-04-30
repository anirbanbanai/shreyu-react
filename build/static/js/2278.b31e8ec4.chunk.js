"use strict";(self.webpackChunkshreyu_react_app=self.webpackChunkshreyu_react_app||[]).push([[2278],{56236:function(e,r,a){a.d(r,{Z:function(){return u}});var n=a(29439),t=a(72791),i=(a(66068),a(79096),a(22519));a(36656),a(92444);a(9084),a(37215);var s="undefined"!==typeof a.g&&a.g.navigator&&"ReactNative"===a.g.navigator.product;"undefined"!==typeof document||s?t.useLayoutEffect:t.useEffect,new WeakMap;var c=a(15341),o=a(80184),d=["onKeyDown"];var l=t.forwardRef((function(e,r){var a,t=e.onKeyDown,s=function(e,r){if(null==e)return{};var a,n,t={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],r.indexOf(a)>=0||(t[a]=e[a]);return t}(e,d),l=(0,c.FT)(Object.assign({tagName:"a"},s)),u=(0,n.Z)(l,1)[0],f=(0,i.Z)((function(e){u.onKeyDown(e),null==t||t(e)}));return((a=s.href)&&"#"!==a.trim()||s.role)&&"button"!==s.role?(0,o.jsx)("a",Object.assign({ref:r},s,{onKeyDown:t})):(0,o.jsx)("a",Object.assign({ref:r},s,u,{onKeyDown:f}))}));l.displayName="Anchor";var u=l},66068:function(e,r,a){a.d(r,{Z:function(){return t}});var n=a(72791);function t(){return(0,n.useState)(null)}},36656:function(e,r,a){a.d(r,{Z:function(){return i}});var n=a(72791),t=a(22519);function i(e,r,a,i){void 0===i&&(i=!1);var s=(0,t.Z)(a);(0,n.useEffect)((function(){var a="function"===typeof e?e():e;return a.addEventListener(r,s,i),function(){return a.removeEventListener(r,s,i)}}),[e])}},92444:function(e,r,a){a.d(r,{Z:function(){return i}});var n=a(36656),t=a(72791);function i(e,r,a){void 0===a&&(a=!1);var i=(0,t.useCallback)((function(){return document}),[]);return(0,n.Z)(i,e,r,a)}},2461:function(e,r,a){a.d(r,{Z:function(){return Z}});var n=a(1413),t=a(45987),i=a(81694),s=a.n(i),c=a(72791),o=a(10162),d=a(56236),l=a(80184),u=["bsPrefix","active","children","className","as","linkAs","linkProps","href","title","target"],f=c.forwardRef((function(e,r){var a=e.bsPrefix,i=e.active,c=e.children,f=e.className,v=e.as,m=void 0===v?"li":v,b=e.linkAs,Z=void 0===b?d.Z:b,p=e.linkProps,x=e.href,h=e.title,y=e.target,N=(0,t.Z)(e,u),g=(0,o.vE)(a,"breadcrumb-item");return(0,l.jsx)(m,(0,n.Z)((0,n.Z)({ref:r},N),{},{className:s()(g,f,{active:i}),"aria-current":i?"page":void 0,children:i?c:(0,l.jsx)(Z,(0,n.Z)((0,n.Z)({},p),{},{href:x,title:h,target:y,children:c}))}))}));f.displayName="BreadcrumbItem",f.defaultProps={active:!1,linkProps:{}};var v=f,m=["bsPrefix","className","listProps","children","label","as"],b=c.forwardRef((function(e,r){var a=e.bsPrefix,i=e.className,c=e.listProps,d=e.children,u=e.label,f=e.as,v=void 0===f?"nav":f,b=(0,t.Z)(e,m),Z=(0,o.vE)(a,"breadcrumb");return(0,l.jsx)(v,(0,n.Z)((0,n.Z)({"aria-label":u,className:i,ref:r},b),{},{children:(0,l.jsx)("ol",(0,n.Z)((0,n.Z)({},c),{},{className:s()(Z,null==c?void 0:c.className),children:d}))}))}));b.displayName="Breadcrumb",b.defaultProps={label:"breadcrumb",listProps:{}};var Z=Object.assign(b,{Item:v})},9140:function(e,r,a){a.d(r,{Z:function(){return R}});var n=a(1413),t=a(45987),i=a(81694),s=a.n(i),c=a(72791),o=a(10162),d=a(66543),l=a(27472),u=a(80184),f=["bsPrefix","className","variant","as"],v=c.forwardRef((function(e,r){var a=e.bsPrefix,i=e.className,c=e.variant,d=e.as,l=void 0===d?"img":d,v=(0,t.Z)(e,f),m=(0,o.vE)(a,"card-img");return(0,u.jsx)(l,(0,n.Z)({ref:r,className:s()(c?"".concat(m,"-").concat(c):m,i)},v))}));v.displayName="CardImg";var m=v,b=a(96040),Z=["bsPrefix","className","as"],p=c.forwardRef((function(e,r){var a=e.bsPrefix,i=e.className,d=e.as,l=void 0===d?"div":d,f=(0,t.Z)(e,Z),v=(0,o.vE)(a,"card-header"),m=(0,c.useMemo)((function(){return{cardHeaderBsPrefix:v}}),[v]);return(0,u.jsx)(b.Z.Provider,{value:m,children:(0,u.jsx)(l,(0,n.Z)((0,n.Z)({ref:r},f),{},{className:s()(i,v)}))})}));p.displayName="CardHeader";var x=p,h=["bsPrefix","className","bg","text","border","body","children","as"],y=(0,l.Z)("h5"),N=(0,l.Z)("h6"),g=(0,d.Z)("card-body"),P=(0,d.Z)("card-title",{Component:y}),j=(0,d.Z)("card-subtitle",{Component:N}),k=(0,d.Z)("card-link",{Component:"a"}),w=(0,d.Z)("card-text",{Component:"p"}),C=(0,d.Z)("card-footer"),E=(0,d.Z)("card-img-overlay"),O=c.forwardRef((function(e,r){var a=e.bsPrefix,i=e.className,c=e.bg,d=e.text,l=e.border,f=e.body,v=e.children,m=e.as,b=void 0===m?"div":m,Z=(0,t.Z)(e,h),p=(0,o.vE)(a,"card");return(0,u.jsx)(b,(0,n.Z)((0,n.Z)({ref:r},Z),{},{className:s()(i,p,c&&"bg-".concat(c),d&&"text-".concat(d),l&&"border-".concat(l)),children:f?(0,u.jsx)(g,{children:v}):v}))}));O.displayName="Card",O.defaultProps={body:!1};var R=Object.assign(O,{Img:m,Title:P,Subtitle:j,Body:g,Link:k,Text:w,Header:x,Footer:C,ImgOverlay:E})},96040:function(e,r,a){var n=a(72791).createContext(null);n.displayName="CardHeaderContext",r.Z=n}}]);
//# sourceMappingURL=2278.b31e8ec4.chunk.js.map