"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[621],{197:function(n,t,e){e.d(t,{Bt:function(){return g},DD:function(){return d},Hq:function(){return v},Tg:function(){return p},d5:function(){return h}});var r=e(861),a=e(757),i=e.n(a),o=e(243),s="trending/all/day",c="movie/",u={language:"en-US",include_adult:!1};function p(n){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(i().mark((function n(t){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get(s,{params:u,signal:t});case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function d(n,t){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(i().mark((function n(t,e){var r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get(c+"".concat(t),{params:u,signal:e});case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function h(n,t){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(i().mark((function n(t,e){var r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get(c+"".concat(t,"/credits"),{params:u,signal:e});case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function g(n,t){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(i().mark((function n(t,e){var r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get(c+"".concat(t,"/reviews"),{params:u,signal:e});case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function v(n,t){return b.apply(this,arguments)}function b(){return(b=(0,r.Z)(i().mark((function n(t,e){var r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("search/movie?query=".concat(t),{params:u,signal:e});case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}o.Z.defaults.baseURL="https://api.themoviedb.org/3/",o.Z.defaults.headers.common.Authorization="Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMGFlNzhlMTljNzE5ZmFlYjk1NmU0YjA5N2Y0OWI2YiIsInN1YiI6IjY1NDQyNTk5MWFjMjkyMDBjNDk1NzQ0YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tJa-J4CpL-4XmqeDvkhI4dpbVUkqDoJCcj7rZEEWaaY"},760:function(n,t,e){e.d(t,{j:function(){return a}});var r=e(184),a=function(n){var t=n.msg;return(0,r.jsx)("div",{children:(0,r.jsx)("p",{children:t})})}},851:function(n,t,e){e.d(t,{O:function(){return o}});var r=e(87),a=e(184),i=function(n){var t=n.id,e=n.title,i=n.poster,o=n.location;return(0,a.jsx)("div",{children:(0,a.jsxs)(r.rU,{to:"/movies/".concat(t),state:{from:o},children:[(0,a.jsx)("img",{src:"https://image.tmdb.org/t/p/w300".concat(i),alt:e}),(0,a.jsx)("p",{children:e})]})})},o=function(n){var t=n.moviesList,e=n.location;return(0,a.jsx)("div",{children:(0,a.jsx)("ul",{children:t.map((function(n){var t;return(0,a.jsx)("li",{children:(0,a.jsx)(i,{id:n.id,title:null!==(t=n.title)&&void 0!==t?t:n.name,poster:n.backdrop_path,location:e})},n.id)}))})})}},621:function(n,t,e){e.r(t),e.d(t,{default:function(){return C}});var r,a,i,o,s,c=e(861),u=e(439),p=e(757),l=e.n(p),d=e(168),f=e(867),h=f.ZP.header(r||(r=(0,d.Z)(["\n  top: 0;\n  left: 0;\n  position: sticky;\n  z-index: 1100;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 64px;\n  padding-right: 24px;\n  padding-left: 24px;\n  padding-top: 12px;\n  padding-bottom: 12px;\n  color: #fff;\n  background-color: #3f51b5;\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),\n    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n"]))),x=f.ZP.form(a||(a=(0,d.Z)(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  max-width: 600px;\n  background-color: #fff;\n  border-radius: 3px;\n  overflow: hidden;\n"]))),g=f.ZP.button(i||(i=(0,d.Z)(["\n  display: inline-block;\n  width: 48px;\n  height: 48px;\n  border: 0;\n  background-size: 60%;\n  background-repeat: no-repeat;\n  background-position: center;\n  opacity: 0.6;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n  outline: none;\n\n  &:hover {\n    opacity: 1;\n  }\n"]))),m=f.ZP.span(o||(o=(0,d.Z)(["\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  clip-path: inset(50%);\n  border: 0;\n"]))),v=f.ZP.input(s||(s=(0,d.Z)(["\n  display: inline-block;\n  width: 100%;\n  font: inherit;\n  font-size: 20px;\n  border: none;\n  outline: none;\n  padding-left: 4px;\n  padding-right: 4px;\n\n  &::placeholder {\n    font: inherit;\n    font-size: 18px;\n  }\n"]))),b=e(494),y=e(184),j=function(n){var t=n.getQuery;return(0,y.jsx)(h,{children:(0,y.jsxs)(x,{onSubmit:function(n){n.preventDefault();var e=n.target.elements.searchQuery.value;t({query:e})},children:[(0,y.jsxs)(g,{type:"submit",children:[(0,y.jsx)(b.Yfv,{}),(0,y.jsx)(m,{className:"button-label",children:"Search"})]}),(0,y.jsx)(v,{type:"text",autoComplete:"off",autoFocus:!0,name:"searchQuery",placeholder:"Search images and photos"})]})})},Z=e(791),w=e(689),k=e(87),N=e(197),I=e(263),J=e(851),z=e(760),C=function(){var n=(0,w.TH)(),t=(0,k.lr)(),e=(0,u.Z)(t,2),r=e[0],a=e[1],i=(0,Z.useState)(!1),o=(0,u.Z)(i,2),s=o[0],p=o[1],d=(0,Z.useState)(!1),f=(0,u.Z)(d,2),h=f[0],x=f[1],g=(0,Z.useState)([]),m=(0,u.Z)(g,2),v=m[0],b=m[1];return(0,Z.useEffect)((function(){var n=r.get("query");if(n){var t=new AbortController;return function(){e.apply(this,arguments)}(),function(){t.abort()}}function e(){return(e=(0,c.Z)(l().mark((function e(){var r;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,p(!0),x(!1),e.next=5,(0,N.Hq)(n,t.signal);case 5:r=e.sent,b(r.results),p(!1),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),"ERR_CANCELED"!==e.t0.code&&x(!0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}}),[r]),(0,y.jsxs)("div",{children:[(0,y.jsx)(j,{getQuery:a}),s&&(0,y.jsx)(I.a,{}),h&&(0,y.jsx)(z.j,{msg:"Please, reload the page"}),0===v.length&&(0,y.jsx)(z.j,{msg:"Please, change serach query."}),!s&&!h&&(0,y.jsx)(J.O,{moviesList:v,location:n})]})}}}]);
//# sourceMappingURL=621.ac6c15c3.chunk.js.map