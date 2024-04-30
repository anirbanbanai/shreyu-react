"use strict";(self.webpackChunkshreyu_react_app=self.webpackChunkshreyu_react_app||[]).push([[7257],{38459:function(e,a,r){r.d(a,{y:function(){return C},J:function(){return n}});var s=r(1413),l=r(72791),t=r(75810),c=r(80184),n=function(e){var a=e.defaultValues,r=e.resolver,n=e.children,o=e.onSubmit,i=e.formClass,m=(0,t.cI)({defaultValues:a,resolver:r}),d=m.handleSubmit,p=m.register,h=m.control,u=m.formState.errors;return(0,c.jsx)("form",{onSubmit:d(o),className:i,noValidate:!0,children:Array.isArray(n)?n.map((function(e){return e.props&&e.props.name?l.createElement(e.type,(0,s.Z)({},(0,s.Z)((0,s.Z)({},e.props),{},{register:p,key:e.props.name,errors:u,control:h}))):e})):n})},o=r(45987),i=r(3350),m=r(99410),d=["type","name","placeholder","register","errors","comp","rows","className","refCallback"],p=["type","label","name","placeholder","register","errors","comp","rows","className","refCallback"],h=["type","label","name","placeholder","register","errors","comp","rows","className","refCallback"],u=["startIcon","type","name","placeholder","comp","register","errors","rows","className","textClassName","refCallback"],b=["startIcon","label","type","name","placeholder","register","errors","control","className","labelClassName","containerClass","textClassName","refCallback","action","rows"],x=function(e){var a=e.type,r=e.name,l=e.placeholder,t=e.register,n=e.errors,m=e.comp,p=e.rows,h=e.className,u=e.refCallback,b=(0,o.Z)(e,d);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i.Z.Control,(0,s.Z)((0,s.Z)({type:a,placeholder:l,name:r,as:m,id:r,ref:function(e){u&&u(e)},className:h,isInvalid:!(!n||!n[r])},t?t(r):{}),{},{rows:p},b)),n&&n[r]?(0,c.jsx)(i.Z.Control.Feedback,{type:"invalid",className:"d-block",children:n[r].message}):null]})},f=function(e){var a=e.type,r=e.label,l=e.name,t=(e.placeholder,e.register),n=e.errors,m=(e.comp,e.rows,e.className),d=e.refCallback,h=(0,o.Z)(e,p);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i.Z.Check,(0,s.Z)((0,s.Z)({type:a,label:r,name:l,id:l,ref:function(e){d&&d(e)},className:m,isInvalid:!(!n||!n[l])},t?t(l):{}),h)),n&&n[l]?(0,c.jsx)(i.Z.Control.Feedback,{type:"invalid",children:n[l].message}):null]})},j=function(e){var a=e.type,r=e.label,l=e.name,t=(e.placeholder,e.register),n=e.errors,m=(e.comp,e.rows,e.className),d=e.refCallback,p=(0,o.Z)(e,h);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i.Z.Select,(0,s.Z)((0,s.Z)({type:a,label:r,name:l,id:l,ref:function(e){d&&d(e)},className:m,isInvalid:!(!n||!n[l])},t?t(l):{}),p)),n&&n[l]?(0,c.jsx)(i.Z.Control.Feedback,{type:"invalid",children:n[l].message}):null]})},N=function(e){var a=e.startIcon,r=e.type,l=e.name,t=e.placeholder,n=e.comp,i=e.register,d=e.errors,p=e.rows,h=e.className,b=e.textClassName,f=e.refCallback,N=(0,o.Z)(e,u);return(0,c.jsxs)(m.Z,{children:[(0,c.jsx)(m.Z.Text,{className:b,children:a}),"select"===r?(0,c.jsx)(j,(0,s.Z)({type:r,name:l,placeholder:t,refCallback:f,comp:n,errors:d,register:i,className:h,rows:p},N)):(0,c.jsx)(x,(0,s.Z)({type:r,name:l,placeholder:t,refCallback:f,comp:n,errors:d,register:i,className:h,rows:p},N))]})},C=function(e){var a=e.startIcon,r=e.label,l=e.type,t=e.name,n=e.placeholder,m=e.register,d=e.errors,p=(e.control,e.className),h=e.labelClassName,u=e.containerClass,C=e.textClassName,Z=e.refCallback,y=e.action,g=e.rows,v=(0,o.Z)(e,b),k="textarea"===l?"textarea":"select"===l?"select":"input";return(0,c.jsx)(c.Fragment,{children:"hidden"===l?(0,c.jsx)("input",(0,s.Z)((0,s.Z)({type:l,name:t},m?m(t):{}),v)):(0,c.jsx)(c.Fragment,{children:"checkbox"===l||"radio"===l?(0,c.jsx)(i.Z.Group,{className:u,children:(0,c.jsx)(f,(0,s.Z)({type:l,label:r,name:t,placeholder:n,refCallback:Z,errors:d,register:m,comp:k,className:p,rows:g},v))}):"select"===l?(0,c.jsxs)(i.Z.Group,{className:u,children:[r?(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i.Z.Label,{className:h,children:r}),y&&y]}):null,a?(0,c.jsx)(N,(0,s.Z)({type:l,startIcon:a,name:t,comp:k,textClassName:C,placeholder:n,refCallback:Z,errors:d,register:m,className:p,rows:g},v)):(0,c.jsx)(j,(0,s.Z)({type:l,name:t,placeholder:n,refCallback:Z,errors:d,register:m,comp:k,className:p,rows:g},v))]}):(0,c.jsxs)(i.Z.Group,{className:u,children:[r?(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i.Z.Label,{className:h,children:r}),y&&y]}):null,a?(0,c.jsx)(N,(0,s.Z)({type:l,startIcon:a,name:t,comp:k,textClassName:C,placeholder:n,refCallback:Z,errors:d,register:m,className:p,rows:g},v)):(0,c.jsx)(x,(0,s.Z)({type:l,name:t,placeholder:n,refCallback:Z,errors:d,register:m,comp:k,className:p,rows:g},v))]})})})}},17257:function(e,a,r){r.r(a);var s=r(1413),l=r(29439),t=r(72791),c=r(89743),n=r(2677),o=r(43360),i=r(81724),m=r(61265),d=r(11087),p=r(51802),h=r(72010),u=r(199),b=r.n(u),x=r(1701),f=r.n(x),j=(r(25646),r(75184)),N=r(38459),C=r(78923),Z=r(86617),y=r(80184);a.default=function(){var e=(0,t.useState)(),a=(0,l.Z)(e,2),r=a[0],u=a[1],x=(0,t.useState)(Z.J.filter((function(e){return!1===e.is_read})).length),g=(0,l.Z)(x,1)[0];(0,t.useEffect)((function(){var e=f()("<h3>This is an Air-mode editable area.</h3>\n            <ul> \n                <li>Select a text to reveal the toolbar.</li>\n                <li>Edit rich document on-the-fly, so elastic!</li>\n            </ul>\n            <p>End of air-mode area</p>");if(e){var a=h.ContentState.createFromBlockArray(e.contentBlocks);u(h.EditorState.createWithContent(a))}}),[]);var v=(0,m.X)(i.Ry().shape({to:i.Z_().required("Please specify to email"),subject:i.Z_().required("Please specify subject")}));return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(j.Z,{breadCrumbItems:[{label:"Email",path:"/apps/email/compose"},{label:"Compose Email",path:"/apps/email/compose",active:!0}],title:"Compose Email"}),(0,y.jsx)(c.Z,{children:(0,y.jsx)(n.Z,{children:(0,y.jsxs)("div",{className:"email-container",children:[(0,y.jsxs)("div",{className:"inbox-leftbar",children:[(0,y.jsx)(d.rU,{to:"/apps/email/inbox",className:"btn btn-danger d-block",children:"Inbox"}),(0,y.jsx)(C.Z,{showChatDetails:!1,totalUnreadEmails:g})]}),(0,y.jsx)("div",{className:"inbox-rightbar p-4",children:(0,y.jsx)("div",{children:(0,y.jsxs)(N.J,{onSubmit:function(e,a){var l=b()((0,h.convertToRaw)(r.getCurrentContent()));console.log((0,s.Z)((0,s.Z)({},a),{},{body:l}))},resolver:v,children:[(0,y.jsx)(N.y,{type:"email",name:"to",placeholder:"To",containerClass:"mb-3"}),(0,y.jsx)(N.y,{type:"text",name:"subject",placeholder:"Subject",containerClass:"mb-3"}),(0,y.jsx)("div",{className:"mb-3 card border-0",children:(0,y.jsx)(p.Editor,{editorState:r,toolbarClassName:"toolbarClassName",wrapperClassName:"wrapperClassName border border-1 border-soft-dark mb-3 card",editorClassName:"editorClassName px-2 pt-0",editorStyle:{minHeight:"300px"},onEditorStateChange:function(e){u(e)}})}),(0,y.jsx)("div",{className:"mb-3 pt-2",children:(0,y.jsxs)("div",{className:"text-end",children:[(0,y.jsxs)(o.Z,{variant:"success",className:"me-1",children:[(0,y.jsx)("i",{className:"uil uil-envelope-edit"})," Draft"]}),(0,y.jsxs)(o.Z,{type:"submit",children:[" ",(0,y.jsx)("span",{children:"Send"}),(0,y.jsx)("i",{className:"uil uil-message ms-2"})]})]})})]})})}),(0,y.jsx)("div",{className:"clearfix"})]})})})]})}}}]);
//# sourceMappingURL=7257.1ec80a76.chunk.js.map