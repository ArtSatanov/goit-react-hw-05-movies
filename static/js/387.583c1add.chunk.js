"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[387],{197:function(n,t,r){r.d(t,{Bt:function(){return x},DD:function(){return f},Hq:function(){return v},Tg:function(){return p},d5:function(){return d}});var e=r(861),a=r(757),u=r.n(a),s=r(243),i="trending/all/day",c="movie/",o={language:"en-US",include_adult:!1};function p(n){return l.apply(this,arguments)}function l(){return(l=(0,e.Z)(u().mark((function n(t){var r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.Z.get(i,{params:o,signal:t});case 2:return r=n.sent,n.abrupt("return",r.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function f(n,t){return h.apply(this,arguments)}function h(){return(h=(0,e.Z)(u().mark((function n(t,r){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.Z.get(c+"".concat(t),{params:o,signal:r});case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function d(n,t){return m.apply(this,arguments)}function m(){return(m=(0,e.Z)(u().mark((function n(t,r){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.Z.get(c+"".concat(t,"/credits"),{params:o,signal:r});case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function x(n,t){return g.apply(this,arguments)}function g(){return(g=(0,e.Z)(u().mark((function n(t,r){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.Z.get(c+"".concat(t,"/reviews"),{params:o,signal:r});case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function v(n,t){return b.apply(this,arguments)}function b(){return(b=(0,e.Z)(u().mark((function n(t,r){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.Z.get("search/movie?query=".concat(t),{params:o,signal:r});case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}s.Z.defaults.baseURL="https://api.themoviedb.org/3/",s.Z.defaults.headers.common.Authorization="Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMGFlNzhlMTljNzE5ZmFlYjk1NmU0YjA5N2Y0OWI2YiIsInN1YiI6IjY1NDQyNTk5MWFjMjkyMDBjNDk1NzQ0YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tJa-J4CpL-4XmqeDvkhI4dpbVUkqDoJCcj7rZEEWaaY"},387:function(n,t,r){r.r(t),r.d(t,{default:function(){return w}});var e,a,u,s,i=r(861),c=r(439),o=r(757),p=r.n(o),l=r(689),f=r(791),h=r(197),d=r(263),m=r(760),x=r(168),g=r(867),v=g.zo.ul(e||(e=(0,x.Z)(["\n  display: grid;\n  max-width: calc(95vw - 60px);\n  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\n  grid-gap: 16px;\n  margin-top: 40px;\n  margin-bottom: 0;\n  padding: 0;\n  list-style: none;\n  margin-left: auto;\n  margin-right: auto;\n"]))),b=g.zo.li(a||(a=(0,x.Z)(["\n  border-radius: 2px;\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n"]))),j=g.zo.img(u||(u=(0,x.Z)(["\n  object-fit: cover;\n  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover {\n    transform: scale(1.03);\n    cursor: zoom-in;\n  }\n"]))),Z=(g.zo.p(s||(s=(0,x.Z)(["\n  text-align: center;\n  font-style: normal;\n  font-weight: 500;\n"]))),r(184)),w=function(){var n=(0,l.UO)().movieId,t=(0,f.useState)([]),r=(0,c.Z)(t,2),e=r[0],a=r[1],u=(0,f.useState)(!1),s=(0,c.Z)(u,2),o=s[0],x=s[1],g=(0,f.useState)(!1),w=(0,c.Z)(g,2),y=w[0],k=w[1];return(0,f.useEffect)((function(){var t=new AbortController;function r(){return(r=(0,i.Z)(p().mark((function r(){var e;return p().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,x(!0),k(!1),r.next=5,(0,h.d5)(Number(n),t.signal);case 5:e=r.sent,a(e.cast),x(!1),r.next=13;break;case 10:r.prev=10,r.t0=r.catch(0),"ERR_CANCELED"!==r.t0.code&&k(!0);case 13:case"end":return r.stop()}}),r,null,[[0,10]])})))).apply(this,arguments)}return function(){r.apply(this,arguments)}(),function(){t.abort()}}),[n]),(0,Z.jsxs)("div",{children:[o&&(0,Z.jsx)(d.a,{}),y&&(0,Z.jsx)(m.j,{msg:"Cast has not been found"}),0===e.length&&(0,Z.jsx)(m.j,{msg:"Cast has not been found"}),!o&&!y&&(0,Z.jsx)(v,{children:e.map((function(n){return(0,Z.jsxs)(b,{children:[n.profile_path&&(0,Z.jsx)(j,{src:"https://image.tmdb.org/t/p/w300".concat(n.profile_path),alt:n.name}),(0,Z.jsx)("h3",{children:n.name}),(0,Z.jsx)("p",{children:n.character})]},n.id)}))})]})}},760:function(n,t,r){r.d(t,{j:function(){return a}});var e=r(184),a=function(n){var t=n.msg;return(0,e.jsx)("div",{children:(0,e.jsx)("p",{children:t})})}}}]);
//# sourceMappingURL=387.583c1add.chunk.js.map