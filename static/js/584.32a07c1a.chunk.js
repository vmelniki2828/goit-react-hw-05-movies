"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[584],{724:function(t,e,n){n.d(e,{Z:function(){return o}});var r=n(689),u=n(87),i=n(184),a=function(t){var e=t.movie,n=e.id,a=e.title,o=(0,r.TH)();return(0,i.jsx)("li",{children:(0,i.jsx)(u.rU,{state:o,to:"/movies/".concat(n),children:a})},n)},o=function(t){var e=t.movies;return(0,i.jsx)("ul",{children:e.map((function(t){return(0,i.jsx)(a,{movie:t},t.id)}))})}},584:function(t,e,n){n.r(e);var r=n(439),u=n(724),i=n(99),a=n(791),o=n(87),c=n(184);e.default=function(){var t=(0,o.lr)(),e=(0,r.Z)(t,2),n=e[0],s=e[1],f=(0,a.useState)(""),v=(0,r.Z)(f,2),m=v[0],d=v[1],h=(0,a.useState)([]),p=(0,r.Z)(h,2),l=p[0],g=p[1],_=n.get("query");return(0,a.useEffect)((function(){_&&(0,i.BS)(_).then((function(t){return g(t)}))}),[_]),(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)("form",{onSubmit:function(t){t.preventDefault(),s({query:m})},children:[(0,c.jsx)("input",{type:"text",value:m,onChange:function(t){d(t.target.value)}}),(0,c.jsx)("button",{type:"submit",children:"Search"})]}),(0,c.jsx)(u.Z,{movies:l})]})}},99:function(t,e,n){n.d(e,{BS:function(){return a},Ze:function(){return o},gv:function(){return s},r0:function(){return c},ys:function(){return i}});var r=n(243);r.Z.defaults.baseURL="https://api.themoviedb.org/3/";var u="a860cfd897e99827a5ea5e5210690a78",i=function(){return r.Z.get("trending/movie/day",{params:{api_key:u}}).then((function(t){return t.data.results}))},a=function(t){return r.Z.get("search/movie",{params:{api_key:u,query:t}}).then((function(t){return t.data.results}))},o=function(t){return r.Z.get("movie/".concat(t),{params:{api_key:u}}).then((function(t){return t.data}))},c=function(t){return r.Z.get("movie/".concat(t,"/credits"),{params:{api_key:u}}).then((function(t){return t.data}))},s=function(t){return r.Z.get("movie/".concat(t,"/reviews"),{params:{api_key:u}}).then((function(t){return t.data}))}}}]);
//# sourceMappingURL=584.32a07c1a.chunk.js.map