(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{194:function(t,e,n){"use strict";n.d(e,"p",(function(){return c})),n.d(e,"o",(function(){return o})),n.d(e,"h",(function(){return l})),n.d(e,"k",(function(){return d})),n.d(e,"j",(function(){return f})),n.d(e,"a",(function(){return m})),n.d(e,"e",(function(){return h})),n.d(e,"g",(function(){return v})),n.d(e,"i",(function(){return j})),n.d(e,"m",(function(){return O})),n.d(e,"d",(function(){return w})),n.d(e,"b",(function(){return y})),n.d(e,"f",(function(){return C})),n.d(e,"r",(function(){return x})),n.d(e,"l",(function(){return _})),n.d(e,"n",(function(){return A})),n.d(e,"c",(function(){return $})),n.d(e,"q",(function(){return k}));var r=n(63),c=function(t){return Object(r.a)({url:"/api/users/login",data:t})},o=function(t){return Object(r.a)({url:"/api/users",data:t})},l=function(t){return Object(r.a)({method:"get",url:"/api/articles",params:t})},d=function(t){return Object(r.a)({method:"get",url:"/api/tags",params:t})},f=function(t){return Object(r.a)({method:"get",url:"/api/articles/feed",params:t})},m=function(t){return Object(r.a)({method:"post",url:"/api/articles/".concat(t,"/favorite")})},h=function(t){return Object(r.a)({method:"delete",url:"/api/articles/".concat(t,"/favorite")})},v=function(t){return Object(r.a)({method:"get",url:"/api/articles/".concat(t)})},j=function(t){return Object(r.a)({method:"get",url:"/api/articles/".concat(t,"/comments")})},O=function(t){return Object(r.a)({method:"post",url:"/api/articles/".concat(t.article,"/comments"),data:t.data})},w=function(t){return Object(r.a)({method:"delete",url:"/api/articles/".concat(t.slug,"/comments/").concat(t.id)})},y=function(t){return Object(r.a)({url:"api/profiles/".concat(t,"/follow")})},C=function(t){return Object(r.a)({method:"delete",url:"api/profiles/".concat(t,"/follow")})},x=function(t){return Object(r.a)({method:"put",url:"/api/user",data:t})},_=function(t){return Object(r.a)({method:"get",url:"/api/profiles/".concat(t)})},A=function(t){return Object(r.a)({method:"post",url:"/api/articles",data:t})},$=function(t){return Object(r.a)({method:"delete",url:"/api/articles/".concat(t)})},k=function(t){return Object(r.a)({method:"put",url:"/api/articles/".concat(t.slug),data:t.data})}},274:function(t,e,n){"use strict";n.r(e);n(130);var r=n(194),c={middleware:"authenticated",name:"editor",asyncData:function(t){return{params:t.params}},data:function(){return{pending:!1,article:{body:"",description:"",tag:"",title:""}}},created:function(){var t=this;this.params&&this.params.slug&&Object(r.g)(this.params.slug).then((function(e){var article=e.article;t.article={body:article.body,description:article.description,tag:article.tagList.join(","),title:article.title}}))},methods:{postArticle:function(){var t=this,article=this.article;this.pending||(this.pending=!0,article.tag&&(article.tagList=article.tag.split(",")),Object(r.n)(article).then((function(e){t.pending=!1,t.$router.push("/article/".concat(e.article.slug))})).catch((function(){t.pending=!1})))},renewArticle:function(){var t=this,article=this.article,e=this.params;this.pending||(this.pending=!0,article.tag&&(article.tagList=article.tag.split(",")),Object(r.q)({slug:e.slug,data:{article:article}}).then((function(){t.pending=!1,t.$router.push("/article/".concat(e.slug))})).catch((function(){t.pending=!1})))}}},o=n(31),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"editor-page"},[n("div",{staticClass:"container page"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-10 offset-md-1 col-xs-12"},[n("form",[n("fieldset",[n("fieldset",{staticClass:"form-group"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.article.title,expression:"article.title"}],staticClass:"form-control form-control-lg",attrs:{type:"text",placeholder:"Article Title",disabled:t.pending},domProps:{value:t.article.title},on:{input:function(e){e.target.composing||t.$set(t.article,"title",e.target.value)}}})]),t._v(" "),n("fieldset",{staticClass:"form-group"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.article.description,expression:"article.description"}],staticClass:"form-control",attrs:{type:"text",placeholder:"What's this article about?",disabled:t.pending},domProps:{value:t.article.description},on:{input:function(e){e.target.composing||t.$set(t.article,"description",e.target.value)}}})]),t._v(" "),n("fieldset",{staticClass:"form-group"},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.article.body,expression:"article.body"}],staticClass:"form-control",attrs:{rows:"8",placeholder:"Write your article (in markdown)",disabled:t.pending},domProps:{value:t.article.body},on:{input:function(e){e.target.composing||t.$set(t.article,"body",e.target.value)}}})]),t._v(" "),n("fieldset",{staticClass:"form-group"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.article.tag,expression:"article.tag"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Enter tags",disabled:t.pending},domProps:{value:t.article.tag},on:{input:function(e){e.target.composing||t.$set(t.article,"tag",e.target.value)}}}),t._v(" "),n("div",{staticClass:"tag-list"})]),t._v(" "),t.params&&t.params.slug?n("button",{staticClass:"btn btn-lg pull-xs-right btn-primary",attrs:{type:"button",disabled:t.pending},on:{click:function(e){return e.preventDefault(),t.renewArticle(e)}}},[t._v("\n                                Update Article\n                            ")]):n("button",{staticClass:"btn btn-lg pull-xs-right btn-primary",attrs:{type:"button",disabled:t.pending},on:{click:function(e){return e.preventDefault(),t.postArticle(e)}}},[t._v("\n\t\t\t\t\t\t\t\tPublish Article\n\t\t\t\t\t\t\t")])])])])])])])}),[],!1,null,null,null);e.default=component.exports}}]);