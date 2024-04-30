"use strict";(self.webpackChunkshreyu_react_app=self.webpackChunkshreyu_react_app||[]).push([[2215],{75184:function(e,r,a){a(72791);var n=a(89743),t=a(2677),s=a(2461),i=a(80184);r.Z=function(e){return(0,i.jsx)(n.Z,{children:(0,i.jsx)(t.Z,{children:(0,i.jsxs)("div",{className:"page-title-box",children:[(0,i.jsx)("h4",{className:"page-title",children:e.title}),(0,i.jsx)("div",{className:"page-title-right",children:(0,i.jsxs)(s.Z,{listProps:{className:"m-0"},children:[(0,i.jsx)(s.Z.Item,{href:"/",children:"Shreyu"}),(e.breadCrumbItems||[]).map((function(e,r){return e.active?(0,i.jsx)(s.Z.Item,{active:!0,children:e.label},r):(0,i.jsx)(s.Z.Item,{href:e.path,children:e.label},r)}))]})})]})})})}},72215:function(e,r,a){a.r(r);a(72791);var n=a(75184),t=a(80184);r.default=function(){return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(n.Z,{breadCrumbItems:[{label:"Pages",path:"/pages/starter"},{label:"Starter",path:"/pages/starter",active:!0}],title:"Starter"})})}},56236:function(e,r,a){a.d(r,{Z:function(){return f}});var n=a(29439),t=a(72791),s=(a(66068),a(79096),a(22519));a(36656),a(92444);a(9084),a(37215);var i="undefined"!==typeof a.g&&a.g.navigator&&"ReactNative"===a.g.navigator.product;"undefined"!==typeof document||i?t.useLayoutEffect:t.useEffect,new WeakMap;var c=a(15341),l=a(80184),o=["onKeyDown"];var u=t.forwardRef((function(e,r){var a,t=e.onKeyDown,i=function(e,r){if(null==e)return{};var a,n,t={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],r.indexOf(a)>=0||(t[a]=e[a]);return t}(e,o),u=(0,c.FT)(Object.assign({tagName:"a"},i)),f=(0,n.Z)(u,1)[0],d=(0,s.Z)((function(e){f.onKeyDown(e),null==t||t(e)}));return((a=i.href)&&"#"!==a.trim()||i.role)&&"button"!==i.role?(0,l.jsx)("a",Object.assign({ref:r},i,{onKeyDown:t})):(0,l.jsx)("a",Object.assign({ref:r},i,f,{onKeyDown:d}))}));u.displayName="Anchor";var f=u},66068:function(e,r,a){a.d(r,{Z:function(){return t}});var n=a(72791);function t(){return(0,n.useState)(null)}},36656:function(e,r,a){a.d(r,{Z:function(){return s}});var n=a(72791),t=a(22519);function s(e,r,a,s){void 0===s&&(s=!1);var i=(0,t.Z)(a);(0,n.useEffect)((function(){var a="function"===typeof e?e():e;return a.addEventListener(r,i,s),function(){return a.removeEventListener(r,i,s)}}),[e])}},92444:function(e,r,a){a.d(r,{Z:function(){return s}});var n=a(36656),t=a(72791);function s(e,r,a){void 0===a&&(a=!1);var s=(0,t.useCallback)((function(){return document}),[]);return(0,n.Z)(s,e,r,a)}},2461:function(e,r,a){a.d(r,{Z:function(){return p}});var n=a(1413),t=a(45987),s=a(81694),i=a.n(s),c=a(72791),l=a(10162),o=a(56236),u=a(80184),f=["bsPrefix","active","children","className","as","linkAs","linkProps","href","title","target"],d=c.forwardRef((function(e,r){var a=e.bsPrefix,s=e.active,c=e.children,d=e.className,v=e.as,m=void 0===v?"li":v,h=e.linkAs,p=void 0===h?o.Z:h,b=e.linkProps,Z=e.href,x=e.title,g=e.target,j=(0,t.Z)(e,f),N=(0,l.vE)(a,"breadcrumb-item");return(0,u.jsx)(m,(0,n.Z)((0,n.Z)({ref:r},j),{},{className:i()(N,d,{active:s}),"aria-current":s?"page":void 0,children:s?c:(0,u.jsx)(p,(0,n.Z)((0,n.Z)({},b),{},{href:Z,title:x,target:g,children:c}))}))}));d.displayName="BreadcrumbItem",d.defaultProps={active:!1,linkProps:{}};var v=d,m=["bsPrefix","className","listProps","children","label","as"],h=c.forwardRef((function(e,r){var a=e.bsPrefix,s=e.className,c=e.listProps,o=e.children,f=e.label,d=e.as,v=void 0===d?"nav":d,h=(0,t.Z)(e,m),p=(0,l.vE)(a,"breadcrumb");return(0,u.jsx)(v,(0,n.Z)((0,n.Z)({"aria-label":f,className:s,ref:r},h),{},{children:(0,u.jsx)("ol",(0,n.Z)((0,n.Z)({},c),{},{className:i()(p,null==c?void 0:c.className),children:o}))}))}));h.displayName="Breadcrumb",h.defaultProps={label:"breadcrumb",listProps:{}};var p=Object.assign(h,{Item:v})},89743:function(e,r,a){var n=a(1413),t=a(45987),s=a(81694),i=a.n(s),c=a(72791),l=a(10162),o=a(80184),u=["bsPrefix","className","as"],f=["xxl","xl","lg","md","sm","xs"],d=c.forwardRef((function(e,r){var a=e.bsPrefix,s=e.className,c=e.as,d=void 0===c?"div":c,v=(0,t.Z)(e,u),m=(0,l.vE)(a,"row"),h="".concat(m,"-cols"),p=[];return f.forEach((function(e){var r,a=v[e];delete v[e],r=null!=a&&"object"===typeof a?a.cols:a;var n="xs"!==e?"-".concat(e):"";null!=r&&p.push("".concat(h).concat(n,"-").concat(r))})),(0,o.jsx)(d,(0,n.Z)((0,n.Z)({ref:r},v),{},{className:i().apply(void 0,[s,m].concat(p))}))}));d.displayName="Row",r.Z=d}}]);
//# sourceMappingURL=2215.8bae847c.chunk.js.map