(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{194:function(t,e,r){"use strict";r.d(e,"p",(function(){return c})),r.d(e,"o",(function(){return o})),r.d(e,"h",(function(){return l})),r.d(e,"k",(function(){return f})),r.d(e,"j",(function(){return d})),r.d(e,"a",(function(){return v})),r.d(e,"e",(function(){return m})),r.d(e,"g",(function(){return _})),r.d(e,"i",(function(){return h})),r.d(e,"m",(function(){return O})),r.d(e,"d",(function(){return j})),r.d(e,"b",(function(){return C})),r.d(e,"f",(function(){return y})),r.d(e,"r",(function(){return k})),r.d(e,"l",(function(){return w})),r.d(e,"n",(function(){return x})),r.d(e,"c",(function(){return I})),r.d(e,"q",(function(){return N}));var n=r(63),c=function(t){return Object(n.a)({url:"/api/users/login",data:t})},o=function(t){return Object(n.a)({url:"/api/users",data:t})},l=function(t){return Object(n.a)({method:"get",url:"/api/articles",params:t})},f=function(t){return Object(n.a)({method:"get",url:"/api/tags",params:t})},d=function(t){return Object(n.a)({method:"get",url:"/api/articles/feed",params:t})},v=function(t){return Object(n.a)({method:"post",url:"/api/articles/".concat(t,"/favorite")})},m=function(t){return Object(n.a)({method:"delete",url:"/api/articles/".concat(t,"/favorite")})},_=function(t){return Object(n.a)({method:"get",url:"/api/articles/".concat(t)})},h=function(t){return Object(n.a)({method:"get",url:"/api/articles/".concat(t,"/comments")})},O=function(t){return Object(n.a)({method:"post",url:"/api/articles/".concat(t.article,"/comments"),data:t.data})},j=function(t){return Object(n.a)({method:"delete",url:"/api/articles/".concat(t.slug,"/comments/").concat(t.id)})},C=function(t){return Object(n.a)({url:"api/profiles/".concat(t,"/follow")})},y=function(t){return Object(n.a)({method:"delete",url:"api/profiles/".concat(t,"/follow")})},k=function(t){return Object(n.a)({method:"put",url:"/api/user",data:t})},w=function(t){return Object(n.a)({method:"get",url:"/api/profiles/".concat(t)})},x=function(t){return Object(n.a)({method:"post",url:"/api/articles",data:t})},I=function(t){return Object(n.a)({method:"delete",url:"/api/articles/".concat(t)})},N=function(t){return Object(n.a)({method:"put",url:"/api/articles/".concat(t.slug),data:t.data})}},199:function(t,e,r){var n=r(3),c=r(33),o=r(9),l=r(200),f="["+l+"]",d=RegExp("^"+f+f+"*"),v=RegExp(f+f+"*$"),m=function(t,e,r){var c={},f=o((function(){return!!l[t]()||"​"!="​"[t]()})),d=c[t]=f?e(_):l[t];r&&(c[r]=d),n(n.P+n.F*f,"String",c)},_=m.trim=function(t,e){return t=String(c(t)),1&e&&(t=t.replace(d,"")),2&e&&(t=t.replace(v,"")),t};t.exports=m},200:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},209:function(t,e,r){var n=r(3),c=r(210);n(n.S+n.F*(Number.parseInt!=c),"Number",{parseInt:c})},210:function(t,e,r){var n=r(5).parseInt,c=r(199).trim,o=r(200),l=/^[-+]?0[xX]/;t.exports=8!==n(o+"08")||22!==n(o+"0x16")?function(t,e){var r=c(String(t),3);return n(r,e>>>0||(l.test(r)?16:10))}:n},211:function(t,e,r){"use strict";var n=r(5),c=r(25),o=r(26),l=r(129),f=r(64),d=r(9),v=r(52).f,m=r(53).f,_=r(11).f,h=r(199).trim,O="Number",j=n.Number,C=j,y=j.prototype,k=o(r(83)(y))==O,w="trim"in String.prototype,x=function(t){var e=f(t,!1);if("string"==typeof e&&e.length>2){var r,n,c,o=(e=w?e.trim():h(e,3)).charCodeAt(0);if(43===o||45===o){if(88===(r=e.charCodeAt(2))||120===r)return NaN}else if(48===o){switch(e.charCodeAt(1)){case 66:case 98:n=2,c=49;break;case 79:case 111:n=8,c=55;break;default:return+e}for(var code,l=e.slice(2),i=0,d=l.length;i<d;i++)if((code=l.charCodeAt(i))<48||code>c)return NaN;return parseInt(l,n)}}return+e};if(!j(" 0o1")||!j("0b1")||j("+0x1")){j=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof j&&(k?d((function(){y.valueOf.call(r)})):o(r)!=O)?l(new C(x(e)),r,j):x(e)};for(var I,N=r(7)?v(C):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),E=0;N.length>E;E++)c(C,I=N[E])&&!c(j,I)&&_(j,I,m(C,I));j.prototype=y,y.constructor=j,r(14)(n,O,j)}},270:function(t,e,r){"use strict";r.r(e);var n=r(19),c=r(10),o=r(4),l=(r(37),r(209),r(211),r(38),r(13),r(39),r(30),r(23),r(24),r(49),r(50),r(194)),f=r(40);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var m={name:"home",asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var r,n,o,f,d,m,_,h,O,j;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.query,n=t.store,o=Number.parseInt(r.page||1),f=20,d=r.tab||"global_feed",m=n.state.user&&"your_feed"===d?l.j:l.h,e.next=7,Promise.all([m({limit:f,offset:(o-1)*f,tag:r.tag}),Object(l.k)()]);case 7:return _=e.sent,h=Object(c.a)(_,2),O=h[0],j=h[1],O.articles.forEach((function(t){t.favoriteAbled=!1})),e.abrupt("return",v(v(v({},O),{},{limit:f,page:o},j),{},{tag:r.tag,tab:d}));case 13:case"end":return e.stop()}}),e)})))()},watchQuery:["page","tag","tab"],methods:{favorite:function(t){t.favoriteAbled=!0,t.favorited?Object(l.e)(t.slug).then((function(){t.favorited=!1,t.favoritesCount-=1,t.favoriteAbled=!1})):Object(l.a)(t.slug).then((function(){t.favorited=!0,t.favoritesCount+=1,t.favoriteAbled=!1}))}},computed:v(v({},Object(f.c)(["user"])),{},{totalPage:function(){return Math.ceil(this.articlesCount/this.limit)}})},_=r(31),component=Object(_.a)(m,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"home-page"},[t._m(0),t._v(" "),r("div",{staticClass:"container page"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-9"},[r("div",{staticClass:"feed-toggle"},[r("ul",{staticClass:"nav nav-pills outline-active"},[t.user?r("li",{staticClass:"nav-item"},[r("nuxt-link",{staticClass:"nav-link",class:{active:"your_feed"===t.tab},attrs:{to:{name:"home",query:{tab:"your_feed"}},exact:""}},[t._v("Your Feed")])],1):t._e(),t._v(" "),r("li",{staticClass:"nav-item"},[r("nuxt-link",{staticClass:"nav-link",class:{active:"global_feed"===t.tab},attrs:{to:{name:"home",query:{tab:"global_feed"}},exact:""}},[t._v("Global Feed")])],1),t._v(" "),t.tag?r("li",{staticClass:"nav-item"},[r("nuxt-link",{staticClass:"nav-link",class:{active:"tab"===t.tab},attrs:{to:{name:"home",query:{tab:"tab"}},exact:""}},[t._v("#"+t._s(t.tag))])],1):t._e()])]),t._v(" "),t._l(t.articles,(function(e){return r("div",{key:e.slug,staticClass:"article-preview"},[r("div",{staticClass:"article-meta"},[r("nuxt-link",{attrs:{to:{name:"profile",params:{username:e.author.username}}}},[r("img",{attrs:{src:e.author.image}})]),t._v(" "),r("div",{staticClass:"info"},[r("nuxt-link",{staticClass:"author",attrs:{to:{name:"profile",params:{username:e.author.username}}}},[t._v(t._s(e.author.username))]),t._v(" "),r("span",{staticClass:"date"},[t._v(t._s(t._f("dateFormat")(e.createdAt,"MMM DD,YYYY")))])],1),t._v(" "),r("button",{staticClass:"btn btn-outline-primary btn-sm pull-xs-right",class:{active:e.favorited},attrs:{disabled:e.favoriteAbled},on:{click:function(r){return t.favorite(e)}}},[r("i",{staticClass:"ion-heart"}),t._v("\n\t\t\t\t\t\t\t"+t._s(e.favoritesCount)+"\n\t\t\t\t\t\t")])],1),t._v(" "),r("nuxt-link",{staticClass:"preview-link",attrs:{to:{name:"article",params:{slug:e.slug}}}},[r("h1",[t._v(t._s(e.title))]),t._v(" "),r("p",[t._v(t._s(e.description))]),t._v(" "),r("span",[t._v("Read more...")])])],1)})),t._v(" "),r("nav",[r("ul",{staticClass:"pagination"},t._l(t.totalPage,(function(e){return r("li",{key:e,staticClass:"page-item",class:{active:e===t.page}},[r("nuxt-link",{staticClass:"page-link",attrs:{to:{name:"home",query:{page:e,tag:t.$route.query.tag}}}},[t._v(t._s(e))])],1)})),0)])],2),t._v(" "),r("div",{staticClass:"col-md-3"},[r("div",{staticClass:"sidebar"},[r("p",[t._v("Popular Tags")]),t._v(" "),r("div",{staticClass:"tag-list"},t._l(t.tags,(function(e){return r("nuxt-link",{key:e,staticClass:"tag-pill tag-default",attrs:{to:{name:"home",query:{tag:e,tab:"tab"}}}},[t._v(t._s(e))])})),1)])])])])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"banner"},[r("div",{staticClass:"container"},[r("h1",{staticClass:"logo-font"},[t._v("conduit")]),t._v(" "),r("p",[t._v("A place to share your knowledge.")])])])}],!1,null,null,null);e.default=component.exports}}]);