(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[33],{606:function(e,t,n){"use strict";n.r(t);var a=n(1),r=(n(0),n(700)),c=n(697),l=n(66),i=n(702),s=function(e){return Object(a.jsxs)("li",{children:[Object(a.jsx)(c.c,{label:"ID",value:e.key_id}),Object(a.jsxs)("ul",{children:[Object(a.jsx)("li",{children:Object(a.jsx)(c.c,{label:"Start Date",value:e.start_date})}),Object(a.jsx)("li",{children:Object(a.jsx)(c.c,{label:"End Date",value:e.end_date})})]})]},e.id)};t.default=function(e){var t=e.data;return t?Object(a.jsxs)(c.a,{data:t,children:[Object(a.jsxs)(r.a,{children:[Object(a.jsx)(c.c,{label:"ID",valuePath:"id",renderValue:l.q}),Object(a.jsx)(c.c,{label:"App ID",valuePath:"app_id",renderValue:l.q}),Object(a.jsx)(c.c,{label:"Type",valuePath:"object_type",renderValue:l.q}),Object(a.jsx)(c.c,{label:"Sign In Audience",valuePath:"sign_in_audience",renderValue:l.q}),Object(a.jsx)(c.c,{label:"Publisher Domain",valuePath:"publisher_domain",renderValue:l.q}),Object(a.jsx)(c.c,{label:"Available To Other Tenants",valuePath:"available_to_other_tenants",renderValue:l.q}),Object(a.jsx)(c.c,{label:"Allow Guests Sign-In",valuePath:"allow_guests_sign_in",renderValue:l.q}),Object(a.jsx)(c.c,{label:"Allow Passthrough Users",valuePath:"allow_passthrough_users",renderValue:l.q}),Object(a.jsx)(c.c,{label:"Public Client",valuePath:"public_client",renderValue:l.q}),Object(a.jsx)(c.c,{label:"Device-Only Auth Supported",valuePath:"is_device_only_auth_supported",renderValue:l.q}),Object(a.jsx)(c.c,{label:"Pre-Authorized Applications",valuePath:"pre_authorized_applications",renderValue:l.q}),Object(a.jsx)(c.c,{label:"Deletion Timestamp",valuePath:"deletion_timestamp",renderValue:l.q})]}),Object(a.jsx)(i.b,{children:Object(a.jsx)(i.a,{title:"Password Credentials",children:Object(a.jsx)(c.c,{valuePath:"password_credentials",renderValue:function(e){return Object(l.l)(e,"",s)}})})})]}):null}},694:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return s}));var a=n(0),r=n.n(a),c={path_to_issue:[],item:{}},l=r.a.createContext(c),i=r.a.createContext(""),s=r.a.createContext((function(){}))},695:function(e,t,n){"use strict";var a=n(1),r=n(0),c=n(694),l=n(66);t.a=function(e){var t=e.path,n=e.children,i=Object(r.useContext)(c.b);return Object(a.jsx)(c.b.Provider,{value:Object(l.a)(i,t),children:n})}},696:function(e,t,n){"use strict";var a=n(11),r=n(1),c=n(0),l=n(690),i=n(7),s=n.n(i),u=n(13),o=n.n(u),d=n(10),b=n.n(d),j=n(694),h=n(66),v=n(67),p=(n(698),n(686)),O=n(204),f=n.n(O),x=n(699),m=n.n(x),P=n(205),_=n(140),g=function(e){var t=e.service,n=e.finding,a=e.path,i=Object(c.useContext)(_.a),s=i.exceptions,u=i.addException,d=i.removeException,b=Object(P.b)().enqueueSnackbar,j=o()(s,[t,n],[]).includes(a);return Object(r.jsx)(l.a,{title:j?"Remove finding from exceptions list":"Add finding to exceptions list",placement:"top",arrow:!0,children:Object(r.jsx)(p.a,{size:"small",className:"exception-btn",onClick:j?function(){d(t,n,a),b("Exception removed.",{variant:"error",anchorOrigin:{vertical:"bottom",horizontal:"right"}})}:function(){u(t,n,a),b("Exception added. Don't forget to export the exceptions!",{variant:"success",anchorOrigin:{vertical:"bottom",horizontal:"right"}})},children:j?Object(r.jsx)(m.a,{}):Object(r.jsx)(f.a,{})})})},V=n(30),q=function(e){var t,n=e.label,i=e.separator,u=e.valuePath,d=e.errorPath,p=e.className,O=e.inline,f=e.tooltip,x=e.tooltipProps,m=e.renderValue,P=e.basePathOverwrite,_=Object(V.g)(),q=Object(c.useContext)(j.a),A=Object(c.useContext)(j.b),C=Object(c.useContext)(j.c),w=Object(h.a)(P||A,u),D=m(e.value||o()(q.item,w,e.value));("boolean"===typeof D&&(D=String(D)),d)?t=(b()(d)?d:[d]).map((function(e){return Object(h.a)(P||A,e)})):t=[w];var S=t.some((function(e){return q.path_to_issues.includes(e)})),y=q.level;if(Object(c.useEffect)((function(){S&&C(y)}),[y]),void 0===D||null===D)return null;var k=Object(r.jsx)(g,{service:_.service,finding:_.finding,path:"".concat(q.path,".").concat(t[0])}),E=Object(r.jsxs)("span",{className:s()(S&&s()("issue",y)),children:[D,S&&k]});return Object(r.jsx)(v.a,{className:s()(p,"partial-value",{inline:O}),label:n,separator:i,value:f?Object(r.jsx)(l.a,Object(a.a)(Object(a.a)({title:D},x),{},{children:E})):E})};q.defaultProps={label:"",separator:": ",value:null,valuePath:null,errorPath:null,inline:!1,tooltip:!1,tooltipProps:{enterDelay:1e3,placement:"top-start"},renderValue:function(e){return e}};t.a=q},697:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return l.a})),n.d(t,"c",(function(){return i.a}));var a=n(1),r=(n(0),n(694)),c=(n(66),function(e){var t=e.data,n=e.children;return console.info("PARTIAL DATA",t),Object(a.jsx)(r.a.Provider,{value:t,children:n})}),l=n(695),i=n(696)},698:function(e,t,n){},699:function(e,t,n){"use strict";var a=n(35),r=n(37);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=r(n(0)),l=(0,a(n(38)).default)(c.createElement("path",{d:"M19 13H5v-2h14v2z"}),"Remove");t.default=l},700:function(e,t,n){"use strict";var a=n(1);n(0),n(701);t.a=function(e){var t=e.children;return Object(a.jsxs)("div",{className:"informations-wrapper",children:[Object(a.jsx)("h4",{className:"title",children:"Informations"}),t]})}},701:function(e,t,n){},702:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return s.b}));var a=n(1),r=n(18),c=n(0),l=n(7),i=n.n(l),s=n(114),u=n(694),o=n(58),d=(n(703),function(e){var t=e.title,n=e.isSelected,l=e.disabled,d=e.onClick,b=e.children,j=Object(c.useState)(""),h=Object(r.a)(j,2),v=h[0],p=h[1],O=v?Object(a.jsxs)(a.Fragment,{children:[t,o.a[v].icon]}):t;return Object(a.jsx)(u.c.Provider,{value:p,children:Object(a.jsx)(s.a,{title:O,className:i()("partial-tab-pane",v),isSelected:n,disabled:l,onClick:d,children:b})})})},703:function(e,t,n){}}]);
//# sourceMappingURL=33.90d4766f.chunk.js.map