"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[186],{197:function(t,n,e){e.d(n,{Bt:function(){return v},DD:function(){return l},Hq:function(){return y},Tg:function(){return p},d5:function(){return d}});var r=e(861),a=e(757),u=e.n(a),s=e(243),c="trending/all/day",i="movie/",o={language:"en-US",include_adult:!1};function p(t){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(u().mark((function t(n){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get(c,{params:o,signal:n});case 2:return e=t.sent,t.abrupt("return",e.data.results);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function l(t,n){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(u().mark((function t(n,e){var r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get(i+"".concat(n),{params:o,signal:e});case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function d(t,n){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(u().mark((function t(n,e){var r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get(i+"".concat(n,"/credits"),{params:o,signal:e});case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function v(t,n){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(u().mark((function t(n,e){var r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get(i+"".concat(n,"/reviews"),{params:o,signal:e});case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function y(t,n){return Z.apply(this,arguments)}function Z(){return(Z=(0,r.Z)(u().mark((function t(n,e){var r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get("search/movie?query=".concat(n),{params:o,signal:e});case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}s.Z.defaults.baseURL="https://api.themoviedb.org/3/",s.Z.defaults.headers.common.Authorization="Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMGFlNzhlMTljNzE5ZmFlYjk1NmU0YjA5N2Y0OWI2YiIsInN1YiI6IjY1NDQyNTk5MWFjMjkyMDBjNDk1NzQ0YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tJa-J4CpL-4XmqeDvkhI4dpbVUkqDoJCcj7rZEEWaaY"},186:function(t,n,e){e.r(n),e.d(n,{Reviews:function(){return l}});var r=e(861),a=e(439),u=e(757),s=e.n(u),c=e(689),i=e(791),o=e(197),p=e(263),f=e(184),l=function(){var t=(0,c.UO)().movieId,n=(0,i.useState)([]),e=(0,a.Z)(n,2),u=e[0],l=e[1],h=(0,i.useState)(!1),d=(0,a.Z)(h,2),m=d[0],v=d[1],x=(0,i.useState)(!1),y=(0,a.Z)(x,2),Z=y[0],k=y[1];return(0,i.useEffect)((function(){var n=new AbortController;function e(){return(e=(0,r.Z)(s().mark((function e(){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,v(!0),k(!1),e.next=5,(0,o.Bt)(Number(t),n.signal);case 5:r=e.sent,l(r.results),v(!1),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),"ERR_CANCELED"!==e.t0.code&&k(!0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}return function(){e.apply(this,arguments)}(),function(){n.abort()}}),[t]),console.log(u),(0,f.jsxs)("div",{children:[m&&(0,f.jsx)(p.a,{}),Z&&(0,f.jsx)("p",{children:"Info has not founded, choose please another movies"}),!m&&(0,f.jsx)("ul",{children:u.map((function(t){var n=t.content,e=t.author,r=t.id;return(0,f.jsxs)("li",{children:[(0,f.jsxs)("h3",{children:["Author: ",e]}),(0,f.jsx)("p",{children:n})]},r)}))})]})}}}]);
//# sourceMappingURL=186.302c8c81.chunk.js.map