"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[961],{197:function(e,n,t){t.d(n,{Bt:function(){return m},DD:function(){return d},Hq:function(){return j},Tg:function(){return l},d5:function(){return f}});var r=t(861),a=t(757),s=t.n(a),i=t(243),u="trending/all/day",c="movie/",o={language:"en-US",include_adult:!1};function l(e){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(s().mark((function e(n){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get(u,{params:o,signal:n});case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(e,n){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(s().mark((function e(n,t){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get(c+"".concat(n),{params:o,signal:t});case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(e,n){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(s().mark((function e(n,t){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get(c+"".concat(n,"/credits"),{params:o,signal:t});case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(e,n){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(s().mark((function e(n,t){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get(c+"".concat(n,"/reviews"),{params:o,signal:t});case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function j(e,n){return w.apply(this,arguments)}function w(){return(w=(0,r.Z)(s().mark((function e(n,t){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("search/movie?query=".concat(n),{params:o,signal:t});case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}i.Z.defaults.baseURL="https://api.themoviedb.org/3/",i.Z.defaults.headers.common.Authorization="Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMGFlNzhlMTljNzE5ZmFlYjk1NmU0YjA5N2Y0OWI2YiIsInN1YiI6IjY1NDQyNTk5MWFjMjkyMDBjNDk1NzQ0YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tJa-J4CpL-4XmqeDvkhI4dpbVUkqDoJCcj7rZEEWaaY"},961:function(e,n,t){t.r(n);var r=t(861),a=t(439),s=t(757),i=t.n(s),u=t(689),c=t(87),o=t(197),l=t(791),p=t(263),d=t(184);n.default=function(){var e,n,t=(0,u.TH)(),s=(0,u.UO)().movieId,h=(0,l.useState)([]),f=(0,a.Z)(h,2),v=f[0],m=f[1],x=(0,l.useState)(!1),j=(0,a.Z)(x,2),w=j[0],g=j[1],k=(0,l.useState)(!1),y=(0,a.Z)(k,2),Z=y[0],b=y[1],I=(0,l.useRef)(null!==(e=null===(n=t.state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/");(0,l.useEffect)((function(){var e=new AbortController;function n(){return(n=(0,r.Z)(i().mark((function n(){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,g(!0),b(!1),n.next=5,(0,o.DD)(Number(s),e.signal);case 5:t=n.sent,m(t),g(!1),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(0),"ERR_CANCELED"!==n.t0.code&&b(!0);case 13:case"end":return n.stop()}}),n,null,[[0,10]])})))).apply(this,arguments)}return function(){n.apply(this,arguments)}(),function(){e.abort()}}),[s]);var N=v.poster_path,J=v.title,C=v.name,D=v.overview,U=v.genres,Y=v.vote_average;return(0,d.jsxs)("div",{children:[(0,d.jsx)(c.rU,{to:I.current,children:"GO BACK "}),w&&(0,d.jsx)(p.a,{}),Z&&(0,d.jsx)("p",{children:"Movie has not founded, choose please another movies"}),!w&&(0,d.jsxs)("div",{children:[(0,d.jsx)("div",{children:N&&(0,d.jsx)("img",{src:"https://image.tmdb.org/t/p/w300".concat(N),alt:null!==J&&void 0!==J?J:C})}),(0,d.jsxs)("div",{children:[(0,d.jsx)("h2",{children:null!==J&&void 0!==J?J:C}),(0,d.jsxs)("p",{children:["User Score: ",null===Y||void 0===Y?void 0:Y.toFixed(2)]}),(0,d.jsx)("h3",{children:"Overview"}),(0,d.jsx)("p",{children:D}),(0,d.jsx)("h3",{children:"Geners"}),(0,d.jsx)("p",{children:null===U||void 0===U?void 0:U.map((function(e){return e.name})).join(" ")})]}),(0,d.jsxs)("div",{children:[(0,d.jsx)(c.rU,{to:"cast",children:"Cast"}),(0,d.jsx)(c.rU,{to:"reviews",children:"Reviews"})]})]}),(0,d.jsx)(l.Suspense,{fallback:(0,d.jsx)(p.a,{}),children:(0,d.jsx)(u.j3,{})})]})}}}]);
//# sourceMappingURL=961.eb061e39.chunk.js.map