"use strict";(self.webpackChunknetflix=self.webpackChunknetflix||[]).push([[822],{822:function(e,i,n){n.r(i),n.d(i,{default:function(){return r}});var s=n(152),l=n(791),a=n(689),d=n(915),t=n(914),o=n(183),c=n(184);var r=function(){var e=(0,a.UO)().id,i=(0,a.s0)(),n=(0,t.Z)("/search/multi?".concat(o.$h,"&language=en-US&query=").concat(e,"&page=1&include_adult=false")),r=(0,s.Z)(n,4),u=r[0],p=r[2],v=r[3];return(0,l.useEffect)((function(){v()}),[e]),(0,c.jsx)("div",{className:"results",children:p?(0,c.jsx)(d.Z,{}):(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("h3",{children:null!==u&&void 0!==u&&u.results.length?"Search results":"No results"}),(0,c.jsx)("div",{className:"mediaBlock",children:null===u||void 0===u?void 0:u.results.map((function(e){return(0,c.jsxs)("div",{className:"mediaContainer",onClick:function(){i("movie"===e.media_type?"/movies/info/".concat(e.id):"tv"===(null===e||void 0===e?void 0:e.media_type)?"/series/info/".concat(e.id):"/person/".concat(e.id))},children:[(0,c.jsx)("div",{className:"imgDiv",children:(0,c.jsx)("img",{height:"150px",width:"250px",src:e.backdrop_path||e.profile_path||e.poster_path?o.Xo+("person"===e.media_type?null===e||void 0===e?void 0:e.profile_path:e.backdrop_path||e.poster_path):o.wg,alt:null===e||void 0===e?void 0:e.name})}),(0,c.jsx)(c.Fragment,{children:(0,c.jsxs)("div",{className:"infoDiv",children:[(0,c.jsx)("span",{children:(null===e||void 0===e?void 0:e.title)||(null===e||void 0===e?void 0:e.name)})," ",(0,c.jsx)("span",{className:"mediaType",children:(null===e||void 0===e?void 0:e.media_type[0].toUpperCase())+(null===e||void 0===e?void 0:e.media_type.slice(1))})]})})]},e.id)}))})]})})}}}]);
//# sourceMappingURL=822.03db0975.chunk.js.map