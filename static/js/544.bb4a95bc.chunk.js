"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[544],{197:function(t,n,r){r.d(n,{Bt:function(){return m},DD:function(){return f},Hq:function(){return j},Tg:function(){return p},d5:function(){return h}});var e=r(861),a=r(757),u=r.n(a),c=r(243),i="trending/all/day",s="movie/",o={language:"en-US",include_adult:!1};function p(t){return l.apply(this,arguments)}function l(){return(l=(0,e.Z)(u().mark((function t(n){var r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get(i,{params:o,signal:n});case 2:return r=t.sent,t.abrupt("return",r.data.results);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function f(t,n){return d.apply(this,arguments)}function d(){return(d=(0,e.Z)(u().mark((function t(n,r){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get(s+"".concat(n),{params:o,signal:r});case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function h(t,n){return v.apply(this,arguments)}function v(){return(v=(0,e.Z)(u().mark((function t(n,r){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get(s+"".concat(n,"/credits"),{params:o,signal:r});case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function m(t,n){return x.apply(this,arguments)}function x(){return(x=(0,e.Z)(u().mark((function t(n,r){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get(s+"".concat(n,"/reviews"),{params:o,signal:r});case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function j(t,n){return g.apply(this,arguments)}function g(){return(g=(0,e.Z)(u().mark((function t(n,r){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("search/movie?query=".concat(n),{params:o,signal:r});case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}c.Z.defaults.baseURL="https://api.themoviedb.org/3/",c.Z.defaults.headers.common.Authorization="Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMGFlNzhlMTljNzE5ZmFlYjk1NmU0YjA5N2Y0OWI2YiIsInN1YiI6IjY1NDQyNTk5MWFjMjkyMDBjNDk1NzQ0YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tJa-J4CpL-4XmqeDvkhI4dpbVUkqDoJCcj7rZEEWaaY"},760:function(t,n,r){r.d(n,{j:function(){return a}});var e=r(184),a=function(t){var n=t.msg;return(0,e.jsx)("div",{children:(0,e.jsx)("p",{children:n})})}},851:function(t,n,r){r.d(n,{O:function(){return c}});var e=r(87),a=r(184),u=function(t){var n=t.id,r=t.title,u=t.poster,c=t.location;return(0,a.jsx)("div",{children:(0,a.jsxs)(e.rU,{to:"/movies/".concat(n),state:{from:c},children:[(0,a.jsx)("img",{src:"https://image.tmdb.org/t/p/w300".concat(u),alt:r}),(0,a.jsx)("p",{children:r})]})})},c=function(t){var n=t.moviesList,r=t.location;return(0,a.jsx)("div",{children:(0,a.jsx)("ul",{children:n.map((function(t){var n;return(0,a.jsx)("li",{children:(0,a.jsx)(u,{id:t.id,title:null!==(n=t.title)&&void 0!==n?n:t.name,poster:t.backdrop_path,location:r})},t.id)}))})})}},544:function(t,n,r){r.r(n);var e=r(861),a=r(439),u=r(757),c=r.n(u),i=r(851),s=r(197),o=r(791),p=r(263),l=r(689),f=r(760),d=r(184);n.default=function(){var t=(0,l.TH)(),n=(0,o.useState)([]),r=(0,a.Z)(n,2),u=r[0],h=r[1],v=(0,o.useState)(!1),m=(0,a.Z)(v,2),x=m[0],j=m[1],g=(0,o.useState)(!1),k=(0,a.Z)(g,2),y=k[0],Z=k[1];return(0,o.useEffect)((function(){var t=new AbortController;function n(){return(n=(0,e.Z)(c().mark((function n(){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,j(!0),Z(!1),n.next=5,(0,s.Tg)(t.signal);case 5:r=n.sent,h(r),j(!1),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(0),"ERR_CANCELED"!==n.t0.code&&Z(!0);case 13:case"end":return n.stop()}}),n,null,[[0,10]])})))).apply(this,arguments)}return function(){n.apply(this,arguments)}(),function(){t.abort()}}),[]),(0,d.jsxs)("div",{children:[x&&(0,d.jsx)(p.a,{}),y&&(0,d.jsx)(f.j,{msg:"Please, reload the page"}),!x&&!y&&(0,d.jsx)(i.O,{moviesList:u,location:t})]})}}}]);
//# sourceMappingURL=544.bb4a95bc.chunk.js.map