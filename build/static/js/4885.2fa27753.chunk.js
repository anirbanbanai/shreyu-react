"use strict";(self.webpackChunkshreyu_react_app=self.webpackChunkshreyu_react_app||[]).push([[4885,7195,8220,3607,2278],{56236:function(e,r,a){a.d(r,{Z:function(){return f}});var n=a(29439),t=a(72791),c=(a(66068),a(79096),a(22519));a(36656),a(92444);a(9084),a(37215);var s="undefined"!==typeof a.g&&a.g.navigator&&"ReactNative"===a.g.navigator.product;"undefined"!==typeof document||s?t.useLayoutEffect:t.useEffect,new WeakMap;var o=a(15341),i=a(80184),l=["onKeyDown"];var d=t.forwardRef((function(e,r){var a,t=e.onKeyDown,s=function(e,r){if(null==e)return{};var a,n,t={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],r.indexOf(a)>=0||(t[a]=e[a]);return t}(e,l),d=(0,o.FT)(Object.assign({tagName:"a"},s)),f=(0,n.Z)(d,1)[0],u=(0,c.Z)((function(e){f.onKeyDown(e),null==t||t(e)}));return((a=s.href)&&"#"!==a.trim()||s.role)&&"button"!==s.role?(0,i.jsx)("a",Object.assign({ref:r},s,{onKeyDown:t})):(0,i.jsx)("a",Object.assign({ref:r},s,f,{onKeyDown:u}))}));d.displayName="Anchor";var f=d},66068:function(e,r,a){a.d(r,{Z:function(){return t}});var n=a(72791);function t(){return(0,n.useState)(null)}},36656:function(e,r,a){a.d(r,{Z:function(){return c}});var n=a(72791),t=a(22519);function c(e,r,a,c){void 0===c&&(c=!1);var s=(0,t.Z)(a);(0,n.useEffect)((function(){var a="function"===typeof e?e():e;return a.addEventListener(r,s,c),function(){return a.removeEventListener(r,s,c)}}),[e])}},92444:function(e,r,a){a.d(r,{Z:function(){return c}});var n=a(36656),t=a(72791);function c(e,r,a){void 0===a&&(a=!1);var c=(0,t.useCallback)((function(){return document}),[]);return(0,n.Z)(c,e,r,a)}},2461:function(e,r,a){a.d(r,{Z:function(){return Z}});var n=a(1413),t=a(45987),c=a(81694),s=a.n(c),o=a(72791),i=a(10162),l=a(56236),d=a(80184),f=["bsPrefix","active","children","className","as","linkAs","linkProps","href","title","target"],u=o.forwardRef((function(e,r){var a=e.bsPrefix,c=e.active,o=e.children,u=e.className,v=e.as,m=void 0===v?"li":v,b=e.linkAs,Z=void 0===b?l.Z:b,p=e.linkProps,x=e.href,N=e.title,h=e.target,y=(0,t.Z)(e,f),g=(0,i.vE)(a,"breadcrumb-item");return(0,d.jsx)(m,(0,n.Z)((0,n.Z)({ref:r},y),{},{className:s()(g,u,{active:c}),"aria-current":c?"page":void 0,children:c?o:(0,d.jsx)(Z,(0,n.Z)((0,n.Z)({},p),{},{href:x,title:N,target:h,children:o}))}))}));u.displayName="BreadcrumbItem",u.defaultProps={active:!1,linkProps:{}};var v=u,m=["bsPrefix","className","listProps","children","label","as"],b=o.forwardRef((function(e,r){var a=e.bsPrefix,c=e.className,o=e.listProps,l=e.children,f=e.label,u=e.as,v=void 0===u?"nav":u,b=(0,t.Z)(e,m),Z=(0,i.vE)(a,"breadcrumb");return(0,d.jsx)(v,(0,n.Z)((0,n.Z)({"aria-label":f,className:c,ref:r},b),{},{children:(0,d.jsx)("ol",(0,n.Z)((0,n.Z)({},o),{},{className:s()(Z,null==o?void 0:o.className),children:l}))}))}));b.displayName="Breadcrumb",b.defaultProps={label:"breadcrumb",listProps:{}};var Z=Object.assign(b,{Item:v})},9140:function(e,r,a){a.d(r,{Z:function(){return O}});var n=a(1413),t=a(45987),c=a(81694),s=a.n(c),o=a(72791),i=a(10162),l=a(66543),d=a(27472),f=a(80184),u=["bsPrefix","className","variant","as"],v=o.forwardRef((function(e,r){var a=e.bsPrefix,c=e.className,o=e.variant,l=e.as,d=void 0===l?"img":l,v=(0,t.Z)(e,u),m=(0,i.vE)(a,"card-img");return(0,f.jsx)(d,(0,n.Z)({ref:r,className:s()(o?"".concat(m,"-").concat(o):m,c)},v))}));v.displayName="CardImg";var m=v,b=a(96040),Z=["bsPrefix","className","as"],p=o.forwardRef((function(e,r){var a=e.bsPrefix,c=e.className,l=e.as,d=void 0===l?"div":l,u=(0,t.Z)(e,Z),v=(0,i.vE)(a,"card-header"),m=(0,o.useMemo)((function(){return{cardHeaderBsPrefix:v}}),[v]);return(0,f.jsx)(b.Z.Provider,{value:m,children:(0,f.jsx)(d,(0,n.Z)((0,n.Z)({ref:r},u),{},{className:s()(c,v)}))})}));p.displayName="CardHeader";var x=p,N=["bsPrefix","className","bg","text","border","body","children","as"],h=(0,d.Z)("h5"),y=(0,d.Z)("h6"),g=(0,l.Z)("card-body"),P=(0,l.Z)("card-title",{Component:h}),j=(0,l.Z)("card-subtitle",{Component:y}),w=(0,l.Z)("card-link",{Component:"a"}),k=(0,l.Z)("card-text",{Component:"p"}),C=(0,l.Z)("card-footer"),E=(0,l.Z)("card-img-overlay"),R=o.forwardRef((function(e,r){var a=e.bsPrefix,c=e.className,o=e.bg,l=e.text,d=e.border,u=e.body,v=e.children,m=e.as,b=void 0===m?"div":m,Z=(0,t.Z)(e,N),p=(0,i.vE)(a,"card");return(0,f.jsx)(b,(0,n.Z)((0,n.Z)({ref:r},Z),{},{className:s()(c,p,o&&"bg-".concat(o),l&&"text-".concat(l),d&&"border-".concat(d)),children:u?(0,f.jsx)(g,{children:v}):v}))}));R.displayName="Card",R.defaultProps={body:!1};var O=Object.assign(R,{Img:m,Title:P,Subtitle:j,Body:g,Link:w,Text:k,Header:x,Footer:C,ImgOverlay:E})},96040:function(e,r,a){var n=a(72791).createContext(null);n.displayName="CardHeaderContext",r.Z=n},89743:function(e,r,a){var n=a(1413),t=a(45987),c=a(81694),s=a.n(c),o=a(72791),i=a(10162),l=a(80184),d=["bsPrefix","className","as"],f=["xxl","xl","lg","md","sm","xs"],u=o.forwardRef((function(e,r){var a=e.bsPrefix,c=e.className,o=e.as,u=void 0===o?"div":o,v=(0,t.Z)(e,d),m=(0,i.vE)(a,"row"),b="".concat(m,"-cols"),Z=[];return f.forEach((function(e){var r,a=v[e];delete v[e],r=null!=a&&"object"===typeof a?a.cols:a;var n="xs"!==e?"-".concat(e):"";null!=r&&Z.push("".concat(b).concat(n,"-").concat(r))})),(0,l.jsx)(u,(0,n.Z)((0,n.Z)({ref:r},v),{},{className:s().apply(void 0,[c,m].concat(Z))}))}));u.displayName="Row",r.Z=u}}]);
//# sourceMappingURL=4885.2fa27753.chunk.js.map