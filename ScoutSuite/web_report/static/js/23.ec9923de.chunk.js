(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[23,89],{504:function(e,t,n){"use strict";n.r(t);var c=n(1),r=(n(0),n(640));t.default=function(){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(r.c,{label:"ARN",valuePath:"arn"}),Object(c.jsx)(r.c,{label:"VPC",valuePath:"vpc"}),Object(c.jsx)(r.c,{label:"DNS",valuePath:"DNSName"}),Object(c.jsx)(r.c,{label:"Scheme",valuePath:"Scheme"}),Object(c.jsx)(r.c,{label:"Availability zones",valuePath:"AvailabilityZones",renderValue:function(e){return Object(c.jsx)("ul",{children:e.map((function(e,t){return Object(c.jsx)("li",{children:e},t)}))})}})]})}},540:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n(19),a=n(250),i=n(18),l=(n(0),n(15)),s=n.n(l),o=n(64),u=n.n(o),j=n(28),b=n.n(j),d=n(10),O=n.n(d),h=n(23),x=n(25),f=n(640),v=n(103),p=n(645),m=n(642),P=n(504);t.default=function(e){var t=e.data,n=s()(t,["item","path"],""),l=Object(h.a)(Object(x.g)(n.replace(/\.elbs.*/,""))),o=l.data,j=l.loading;if(!t||j)return null;u()(o)||(t.item.arn=o.arn,t.item.vpc="".concat(o.name," (").concat(o.id,")"));var d=s()(t,["item","listeners"]),g=s()(t,["item","attributes"]),S=s()(t,["item","security_groups"],{}),C=s()(t,["item","instances"],[]),N=s()(t,["item","Subnets"],[]),y=s()(t,["item","tags"],[]);return Object(c.jsxs)(f.a,{data:t,children:[Object(c.jsx)(m.a,{children:Object(c.jsx)(P.default,{})}),Object(c.jsx)("div",{children:Object(c.jsxs)(p.b,{children:[Object(c.jsx)(p.a,{title:"Listeners",children:Object(c.jsx)("ul",{children:Object.entries(d).map((function(e,t){var n=Object(i.a)(e,2),a=n[0],l=n[1];return Object(c.jsx)("li",{children:Object(c.jsx)(f.c,{value:Object(r.a)({port:a},l),errorPath:"listeners.".concat(a),renderValue:function(e){return e.SslPolicy?Object(c.jsxs)(c.Fragment,{children:["".concat(e.port," (").concat(e.Protocol,", "),Object(c.jsx)(f.c,{value:e.SslPolicy,errorPath:"listeners.".concat(e.port,".SslPolicy")}),")"]}):"".concat(e.port," (").concat(e.Protocol,")")}})},t)}))})}),Object(c.jsx)(p.a,{title:"Attributes",children:Object(c.jsx)("ul",{children:function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=n.join(".");return b()(t)?O()(t)?Object(c.jsx)("li",{children:Object(c.jsx)(f.c,{label:r,value:t,renderValue:function(t){return t.map((function(t,n){return Object(c.jsx)("ul",{children:e(t.Value,[t.Key])},n)}))}})}):Object.entries(t).map((function(t){var c=Object(i.a)(t,2),r=c[0],l=c[1];return e(l,[].concat(Object(a.a)(n),[r]))})):Object(c.jsx)("li",{children:Object(c.jsx)(f.c,{label:r,value:t,errorPath:"attributes.".concat(r)})},r)}(g)})}),Object(c.jsx)(p.a,{title:"Security Groups",disabled:u()(S),children:Object(v.l)(S,"GroupId")}),Object(c.jsx)(p.a,{title:"Destination",disabled:u()(C)&&u()(N),children:Object(c.jsxs)("div",{children:[!u()(C)&&Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("h5",{children:"Instances"}),Object(v.l)(C)]}),!u()(N)&&Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("h5",{children:"Subnets"}),Object(v.l)(N)]})]})}),!u()(y)&&Object(c.jsx)(p.a,{title:"Tags",children:Object(v.j)(y)})]})})]})}},637:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return l})),n.d(t,"c",(function(){return s}));var c=n(0),r=n.n(c),a={path_to_issue:[],item:{}},i=r.a.createContext(a),l=r.a.createContext(""),s=r.a.createContext((function(){}))},638:function(e,t,n){"use strict";var c=n(19),r=n(1),a=n(0),i=n(633),l=n(7),s=n.n(l),o=n(15),u=n.n(o),j=n(10),b=n.n(j),d=n(637),O=n(103),h=n(83),x=(n(641),n(624)),f=n(191),v=n.n(f),p=n(192),m=n(130),P=function(e){var t=e.service,n=e.finding,c=e.path,l=Object(a.useContext)(m.a),s=l.exceptions,o=l.addException,j=Object(p.b)().enqueueSnackbar,b=u()(s,[t,n],[]).includes(c);return Object(r.jsx)(i.a,{title:"Add to exception list",placement:"top",arrow:!0,children:Object(r.jsx)(x.a,{disabled:b,size:"small",startIcon:Object(r.jsx)(v.a,{}),className:"exception-btn",onClick:function(){o(t,n,c),j("Exception added. Don't forget to export the exceptions!",{variant:"success",anchorOrigin:{vertical:"bottom",horizontal:"right"}})},children:"Add"})})},g=n(29),S=function(e){var t,n=e.label,l=e.separator,o=e.valuePath,j=e.errorPath,x=e.className,f=e.inline,v=e.tooltip,p=e.tooltipProps,m=e.renderValue,S=e.basePathOverwrite,C=Object(g.g)(),N=Object(a.useContext)(d.a),y=Object(a.useContext)(d.b),A=Object(a.useContext)(d.c),V=Object(O.a)(S||y,o),k=m(e.value||u()(N.item,V,e.value));("boolean"===typeof k&&(k=String(k)),j)?t=(b()(j)?j:[j]).map((function(e){return Object(O.a)(S||y,e)})):t=[V];var D=t.some((function(e){return N.path_to_issues.includes(e)})),w=N.level;if(Object(a.useEffect)((function(){D&&A(w)}),[w]),void 0===k||null===k)return null;var F=Object(r.jsx)(P,{service:C.service,finding:C.finding,path:"".concat(N.path,".").concat(t[0])}),I=Object(r.jsxs)("span",{className:s()(D&&s()("issue",w)),children:[k,D&&F]});return Object(r.jsx)(h.a,{className:s()(x,"partial-value",{inline:f}),label:n,separator:l,value:v?Object(r.jsx)(i.a,Object(c.a)(Object(c.a)({title:k},p),{},{children:I})):I})};S.defaultProps={label:"",separator:": ",value:null,valuePath:null,errorPath:null,inline:!1,tooltip:!1,tooltipProps:{enterDelay:1e3,placement:"top-start"},renderValue:function(e){return e}};t.a=S},639:function(e,t,n){"use strict";var c=n(1),r=n(0),a=n(637),i=n(103);t.a=function(e){var t=e.path,n=e.children,l=Object(r.useContext)(a.b);return Object(c.jsx)(a.b.Provider,{value:Object(i.a)(l,t),children:n})}},640:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return i.a})),n.d(t,"c",(function(){return l.a}));var c=n(1),r=(n(0),n(637)),a=(n(103),function(e){var t=e.data,n=e.children;return console.info("PARTIAL DATA",t),Object(c.jsx)(r.a.Provider,{value:t,children:n})}),i=n(639),l=n(638)},641:function(e,t,n){},642:function(e,t,n){"use strict";var c=n(1);n(0),n(643);t.a=function(e){var t=e.children;return Object(c.jsxs)("div",{className:"informations-wrapper",children:[Object(c.jsx)("h4",{className:"title",children:"Informations"}),t]})}},643:function(e,t,n){},644:function(e,t,n){},645:function(e,t,n){"use strict";n.d(t,"a",(function(){return j})),n.d(t,"b",(function(){return s.b}));var c=n(1),r=n(18),a=n(0),i=n(7),l=n.n(i),s=n(104),o=n(637),u=n(56),j=(n(644),function(e){var t=e.title,n=e.isSelected,i=e.disabled,j=e.onClick,b=e.children,d=Object(a.useState)(""),O=Object(r.a)(d,2),h=O[0],x=O[1],f=h?Object(c.jsxs)(c.Fragment,{children:[t,u.a[h].icon]}):t;return Object(c.jsx)(o.c.Provider,{value:x,children:Object(c.jsx)(s.a,{title:f,className:l()("partial-tab-pane",h),isSelected:n,disabled:i,onClick:j,children:b})})})}}]);
//# sourceMappingURL=23.ec9923de.chunk.js.map