"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[621],{197:function(n,t,e){e.d(t,{Bt:function(){return g},DD:function(){return d},Hq:function(){return b},Tg:function(){return p},d5:function(){return x}});var r=e(861),a=e(757),i=e.n(a),o=e(243),s="trending/all/day",c="movie/",u={language:"en-US",include_adult:!1};function p(n){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(i().mark((function n(t){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get(s,{params:u,signal:t});case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function d(n,t){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(i().mark((function n(t,e){var r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get(c+"".concat(t),{params:u,signal:e});case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function x(n,t){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(i().mark((function n(t,e){var r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get(c+"".concat(t,"/credits"),{params:u,signal:e});case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function g(n,t){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(i().mark((function n(t,e){var r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get(c+"".concat(t,"/reviews"),{params:u,signal:e});case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function b(n,t){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(i().mark((function n(t,e){var r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("search/movie?query=".concat(t),{params:u,signal:e});case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}o.Z.defaults.baseURL="https://api.themoviedb.org/3/",o.Z.defaults.headers.common.Authorization="Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMGFlNzhlMTljNzE5ZmFlYjk1NmU0YjA5N2Y0OWI2YiIsInN1YiI6IjY1NDQyNTk5MWFjMjkyMDBjNDk1NzQ0YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tJa-J4CpL-4XmqeDvkhI4dpbVUkqDoJCcj7rZEEWaaY"},760:function(n,t,e){e.d(t,{j:function(){return a}});var r=e(184),a=function(n){var t=n.msg;return(0,r.jsx)("div",{children:(0,r.jsx)("p",{children:t})})}},600:function(n,t,e){e.d(t,{O:function(){return g}});var r,a,i,o,s=e(87),c=e(168),u=e(867),p=u.zo.img(r||(r=(0,c.Z)(["\n  width: 100%;\n  height: 260px;\n  object-fit: cover;\n  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover {\n    transform: scale(1.03);\n    cursor: zoom-in;\n  }\n"]))),l=u.zo.p(a||(a=(0,c.Z)(["\n  text-align: center;\n  font-style: normal;\n  font-weight: 500;\n"]))),d=e(184),f=function(n){var t=n.id,e=n.title,r=n.poster,a=n.location;return(0,d.jsx)("div",{children:(0,d.jsxs)(s.rU,{to:"/movies/".concat(t),state:{from:a},children:[r&&(0,d.jsx)(p,{src:"https://image.tmdb.org/t/p/w300".concat(r),alt:e}),(0,d.jsx)(l,{children:e})]})})},x=u.zo.ul(i||(i=(0,c.Z)(["\n  display: grid;\n  max-width: calc(100vw - 48px);\n  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\n  grid-gap: 16px;\n  margin-top: 100ppx;\n  margin-bottom: 0;\n  padding: 0;\n  list-style: none;\n  margin-left: auto;\n  margin-right: auto;\n"]))),h=u.zo.li(o||(o=(0,c.Z)(["\n  border-radius: 2px;\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n"]))),g=function(n){var t=n.moviesList,e=n.location;return(0,d.jsx)("div",{children:(0,d.jsx)(x,{children:t.map((function(n){var t;return(0,d.jsx)(h,{children:(0,d.jsx)(f,{id:n.id,title:null!==(t=n.title)&&void 0!==t?t:n.name,poster:n.backdrop_path,location:e})},n.id)}))})})}},621:function(n,t,e){e.r(t),e.d(t,{default:function(){return C}});var r,a,i,o,s,c=e(861),u=e(439),p=e(757),l=e.n(p),d=e(168),f=e(867),x=f.ZP.div(r||(r=(0,d.Z)(["\n  top: 0;\n  left: 0;\n  position: sticky;\n  z-index: 1100;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 64px;\n  padding-right: 24px;\n  padding-left: 24px;\n  padding-top: 12px;\n  padding-bottom: 12px;\n  color: #fff;\n  background-color: #2b356b;\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),\n    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n"]))),h=f.ZP.form(a||(a=(0,d.Z)(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  max-width: 600px;\n  background-color: #fff;\n  border-radius: 3px;\n  overflow: hidden;\n"]))),g=f.ZP.button(i||(i=(0,d.Z)(["\n  display: inline-block;\n  width: 48px;\n  height: 48px;\n  border: 0;\n  background-size: 60%;\n  background-repeat: no-repeat;\n  background-position: center;\n  opacity: 0.6;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n  outline: none;\n\n  &:hover {\n    opacity: 1;\n  }\n"]))),m=f.ZP.span(o||(o=(0,d.Z)(["\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  clip-path: inset(50%);\n  border: 0;\n"]))),b=f.ZP.input(s||(s=(0,d.Z)(["\n  display: inline-block;\n  width: 100%;\n  font: inherit;\n  font-size: 20px;\n  border: none;\n  outline: none;\n  padding-left: 4px;\n  padding-right: 4px;\n\n  &::placeholder {\n    font: inherit;\n    font-size: 18px;\n  }\n"]))),v=e(494),y=e(184),j=function(n){var t=n.getQuery;return(0,y.jsx)(x,{children:(0,y.jsxs)(h,{onSubmit:function(n){n.preventDefault();var e=n.target.elements.searchQuery.value;t({query:e})},children:[(0,y.jsxs)(g,{type:"submit",children:[(0,y.jsx)(v.Yfv,{}),(0,y.jsx)(m,{className:"button-label",children:"Search"})]}),(0,y.jsx)(b,{type:"text",autoComplete:"off",autoFocus:!0,name:"searchQuery",placeholder:"Search images and photos"})]})})},Z=e(791),w=e(689),k=e(87),z=e(197),N=e(263),I=e(600),J=e(760),C=function(){var n=(0,w.TH)(),t=(0,k.lr)(),e=(0,u.Z)(t,2),r=e[0],a=e[1],i=(0,Z.useState)(!1),o=(0,u.Z)(i,2),s=o[0],p=o[1],d=(0,Z.useState)(!1),f=(0,u.Z)(d,2),x=f[0],h=f[1],g=(0,Z.useState)([]),m=(0,u.Z)(g,2),b=m[0],v=m[1];return(0,Z.useEffect)((function(){var n=r.get("query");if(n){var t=new AbortController;return function(){e.apply(this,arguments)}(),function(){t.abort()}}function e(){return(e=(0,c.Z)(l().mark((function e(){var r;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,p(!0),h(!1),e.next=5,(0,z.Hq)(n,t.signal);case 5:r=e.sent,v(r.results),p(!1),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),"ERR_CANCELED"!==e.t0.code&&h(!0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}}),[r]),console.log(b),(0,y.jsxs)("div",{children:[(0,y.jsx)(j,{getQuery:a}),s&&(0,y.jsx)(N.a,{}),x&&(0,y.jsx)(J.j,{msg:"Please, reload the page"}),0===b.length&&(0,y.jsx)(J.j,{msg:"Please, change serach query."}),!s&&!x&&(0,y.jsx)(I.O,{moviesList:b,location:n})]})}}}]);
//# sourceMappingURL=621.a0efa5aa.chunk.js.map