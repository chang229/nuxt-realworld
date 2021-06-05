exports.ids = [1];
exports.modules = {

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return signIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return getArticles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return getTags; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return getFeedArticle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addFavorite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return delFavorite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getArticle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return getComments; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return makeComment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return delComment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return addFollow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return delFollow; });
/* unused harmony export settingUser */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return updateUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return getUserInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return pubArticle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return delArticle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return updateArticle; });
/* harmony import */ var _plugins_http_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
 //登录

const signIn = params => Object(_plugins_http_js__WEBPACK_IMPORTED_MODULE_0__[/* Axios */ "a"])({
  url: '/api/users/login',
  data: params
}); // 注册

const register = params => Object(_plugins_http_js__WEBPACK_IMPORTED_MODULE_0__[/* Axios */ "a"])({
  url: '/api/users',
  data: params
}); // 获取文章列表

const getArticles = params => Object(_plugins_http_js__WEBPACK_IMPORTED_MODULE_0__[/* Axios */ "a"])({
  method: 'get',
  url: '/api/articles',
  params
}); // 获取标签列表

const getTags = params => Object(_plugins_http_js__WEBPACK_IMPORTED_MODULE_0__[/* Axios */ "a"])({
  method: 'get',
  url: '/api/tags',
  params
}); // 获取个人关注的文章列表

const getFeedArticle = params => Object(_plugins_http_js__WEBPACK_IMPORTED_MODULE_0__[/* Axios */ "a"])({
  method: 'get',
  url: '/api/articles/feed',
  params
}); // 点赞

const addFavorite = params => Object(_plugins_http_js__WEBPACK_IMPORTED_MODULE_0__[/* Axios */ "a"])({
  method: 'post',
  url: `/api/articles/${params}/favorite`
}); // 删除点赞

const delFavorite = params => Object(_plugins_http_js__WEBPACK_IMPORTED_MODULE_0__[/* Axios */ "a"])({
  method: 'delete',
  url: `/api/articles/${params}/favorite`
}); // 获取文章详情

const getArticle = params => Object(_plugins_http_js__WEBPACK_IMPORTED_MODULE_0__[/* Axios */ "a"])({
  method: 'get',
  url: `/api/articles/${params}`
}); //获取文章评论列表

const getComments = params => Object(_plugins_http_js__WEBPACK_IMPORTED_MODULE_0__[/* Axios */ "a"])({
  method: 'get',
  url: `/api/articles/${params}/comments`
}); //发表评论

const makeComment = params => Object(_plugins_http_js__WEBPACK_IMPORTED_MODULE_0__[/* Axios */ "a"])({
  method: 'post',
  url: `/api/articles/${params.article}/comments`,
  data: params.data
}); // 删除评论

const delComment = params => Object(_plugins_http_js__WEBPACK_IMPORTED_MODULE_0__[/* Axios */ "a"])({
  method: 'delete',
  url: `/api/articles/${params.slug}/comments/${params.id}`
}); // addFollow

const addFollow = params => Object(_plugins_http_js__WEBPACK_IMPORTED_MODULE_0__[/* Axios */ "a"])({
  url: `api/profiles/${params}/follow`
}); // delFollow

const delFollow = params => Object(_plugins_http_js__WEBPACK_IMPORTED_MODULE_0__[/* Axios */ "a"])({
  method: 'delete',
  url: `api/profiles/${params}/follow`
}); // 设置个人信息

const settingUser = params => Object(_plugins_http_js__WEBPACK_IMPORTED_MODULE_0__[/* Axios */ "a"])({
  method: 'put',
  url: '/api/ersu',
  data: params
}); //更新个人信息

const updateUser = params => Object(_plugins_http_js__WEBPACK_IMPORTED_MODULE_0__[/* Axios */ "a"])({
  method: 'put',
  url: '/api/user',
  data: params
}); // 获取个人信息

const getUserInfo = params => Object(_plugins_http_js__WEBPACK_IMPORTED_MODULE_0__[/* Axios */ "a"])({
  method: 'get',
  url: `/api/profiles/${params}`
}); // 发布文章

const pubArticle = params => Object(_plugins_http_js__WEBPACK_IMPORTED_MODULE_0__[/* Axios */ "a"])({
  method: 'post',
  url: '/api/articles',
  data: params
}); // 删除文章

const delArticle = params => Object(_plugins_http_js__WEBPACK_IMPORTED_MODULE_0__[/* Axios */ "a"])({
  method: 'delete',
  url: `/api/articles/${params}`
}); // 修改文章

const updateArticle = params => Object(_plugins_http_js__WEBPACK_IMPORTED_MODULE_0__[/* Axios */ "a"])({
  method: 'put',
  url: `/api/articles/${params.slug}`,
  data: params.data
});

/***/ }),

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/index.vue?vue&type=template&id=49dcfdde&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"article-page"},[_vm._ssrNode("<div class=\"banner\">","</div>",[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<h1>"+_vm._ssrEscape(_vm._s(_vm.article.title))+"</h1> "),_c('author',{attrs:{"article-info":_vm.article,"user":_vm.user},on:{"favoriteHandel":_vm.favoriteHandel,"followHandel":_vm.followHandel}})],2)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"container page\">","</div>",[_vm._ssrNode("<div class=\"row article-content\"><div class=\"col-md-12\">"+(_vm._s(_vm.article.body))+"</div> <ul class=\"tag-list\">"+(_vm._ssrList((_vm.article.tagList),function(item){return ("<li class=\"tag-default tag-pill tag-outline\">"+_vm._ssrEscape("\n\t\t\t\t\t"+_vm._s(item)+"\n\t\t\t\t")+"</li>")}))+"</ul></div> <hr> "),_vm._ssrNode("<div class=\"article-actions\">","</div>",[_c('author',{attrs:{"article-info":_vm.article,"user":_vm.user},on:{"favoriteHandel":_vm.favoriteHandel,"followHandel":_vm.followHandel}})],1),_vm._ssrNode(" "),(_vm.user)?_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-xs-12 col-md-8 offset-md-2\">","</div>",[_vm._ssrNode("<form class=\"card comment-form\"><div class=\"card-block\"><textarea placeholder=\"Write a comment...\" rows=\"3\" class=\"form-control\">"+_vm._ssrEscape(_vm._s(_vm.commentText))+"</textarea></div> <div class=\"card-footer\"><img"+(_vm._ssrAttr("src",_vm.user.image))+" class=\"comment-author-img\"> <button"+(_vm._ssrAttr("disabled",!_vm.commentText))+" class=\"btn btn-sm btn-primary\">\n\t\t\t\t\t\t\tPost Comment\n\t\t\t\t\t\t</button></div></form> "),_vm._l((_vm.comments),function(item){return _vm._ssrNode("<div class=\"card\">","</div>",[_vm._ssrNode("<div class=\"card-block\"><p class=\"card-text\">"+_vm._ssrEscape(_vm._s(item.body))+"</p></div> "),_vm._ssrNode("<div class=\"card-footer\">","</div>",[_c('nuxt-link',{staticClass:"comment-author",attrs:{"to":{
								name: 'profile',
								params: {
									username: item.author.username,
								},
							}}},[_c('img',{staticClass:"comment-author-img",attrs:{"src":item.author.image}})]),_vm._ssrNode("\n\t\t\t\t\t\t \n\t\t\t\t\t\t"),_c('nuxt-link',{staticClass:"comment-author",attrs:{"to":{
								name: 'profile',
								params: {
									username: item.author.username,
								},
							}}},[_vm._v("\n\t\t\t\t\t\t\t"+_vm._s(item.author.username)+"\n\t\t\t\t\t\t")]),_vm._ssrNode(" <span class=\"date-posted\">"+_vm._ssrEscape(_vm._s(_vm._f("dateFormat")(item.createdAt,'MMM DD,YYYY')))+"</span> <span class=\"mod-options\">"+((
									_vm.user &&
										item.author.username ===
											_vm.user.username
								)?("<i class=\"ion-trash-a\"></i>"):"<!---->")+"</span>")],2)],2)})],2)]):_vm._e()],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/article/index.vue?vue&type=template&id=49dcfdde&

// EXTERNAL MODULE: ./utils/api.js
var api = __webpack_require__(27);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/author.vue?vue&type=template&id=2945ab76&
var authorvue_type_template_id_2945ab76_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"article-meta"},[_c('nuxt-link',{attrs:{"to":{
				name: 'profile',
				params: { username: _vm.articleInfo.author.username },
			}}},[_c('img',{attrs:{"src":_vm.articleInfo.author.image}})]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"info\">","</div>",[_c('nuxt-link',{staticClass:"author",attrs:{"to":{
					name: 'profile',
					params: { username: _vm.articleInfo.author.username },
				}}},[_vm._v("\n\t\t\t\t"+_vm._s(_vm.articleInfo.author.username)+"\n\t\t\t")]),_vm._ssrNode(" <span class=\"date\">"+_vm._ssrEscape(_vm._s(_vm._f("dateFormat")(_vm.articleInfo.createdAt,'MMM DD,YYYY')))+"</span>")],2),_vm._ssrNode(" "),(_vm.articleInfo.author.username === _vm.user.username)?[_c('nuxt-link',{staticClass:"btn btn-outline-secondary btn-sm",attrs:{"to":{name:'editor',params:{slug:_vm.articleInfo.slug}}}},[_c('i',{staticClass:"ion-edit"}),_vm._v(" Edit Article\n            ")]),_vm._ssrNode(" <button class=\"btn btn-outline-danger btn-sm\"><i class=\"ion-trash-a\"></i> Delete Article\n            </button>")]:_vm._ssrNode("<button"+(_vm._ssrClass("btn btn-sm btn-outline-secondary",{ active: _vm.articleInfo.author.following }))+"><i class=\"ion-plus-round\"></i>"+_vm._ssrEscape(" "+_vm._s(_vm.articleInfo.author.following ? 'Unfollow' : 'Follow')+"\n                "+_vm._s(_vm.articleInfo.author.username)+"\n                ")+"</button>\n\t\t      \n            <button"+(_vm._ssrClass("btn btn-sm btn-outline-primary",{ active: _vm.articleInfo.favorited }))+"><i class=\"ion-heart\"></i> Favorite Post\n                <span class=\"counter\">"+_vm._ssrEscape("("+_vm._s(_vm.articleInfo.favoritesCount)+")")+"</span></button>")],2)}
var authorvue_type_template_id_2945ab76_staticRenderFns = []


// CONCATENATED MODULE: ./components/author.vue?vue&type=template&id=2945ab76&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/author.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var authorvue_type_script_lang_js_ = ({
  name: 'author',

  data() {
    return {
      pendding: false
    };
  },

  props: {
    articleInfo: {
      type: Object,
      default: () => {}
    },
    user: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    // 点赞
    favorite() {
      if (this.articleInfo.favoritedabled) return;
      this.isLogin();
      this.$emit('favoriteHandel');
    },

    // Follow
    follow() {
      if (this.articleInfo.followabled) return;
      this.isLogin();
      this.$emit('followHandel');
    },

    // 判断是否登录
    isLogin() {
      let {
        user
      } = this;

      if (!user || !user.token) {
        this.$router.push('/login');
        return;
      }
    },

    // 删除文章
    deleteArticle() {
      if (this.pendding) return;
      this.pendding = true;
      Object(api["c" /* delArticle */])(this.articleInfo.slug).then(() => {
        this.pendding = false;
        this.$router.replace('/');
      }).catch(() => {
        this.pendding = false;
      });
    }

  }
});
// CONCATENATED MODULE: ./components/author.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_authorvue_type_script_lang_js_ = (authorvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/author.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_authorvue_type_script_lang_js_,
  authorvue_type_template_id_2945ab76_render,
  authorvue_type_template_id_2945ab76_staticRenderFns,
  false,
  null,
  null,
  "cfc9b912"
  
)

/* harmony default export */ var author = (component.exports);
// EXTERNAL MODULE: external "markdown-it"
var external_markdown_it_ = __webpack_require__(26);
var external_markdown_it_default = /*#__PURE__*/__webpack_require__.n(external_markdown_it_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var articlevue_type_script_lang_js_ = ({
  name: 'article',

  async asyncData({
    params,
    store
  }) {
    let [res, comments] = await Promise.all([Object(api["g" /* getArticle */])(params.slug), Object(api["i" /* getComments */])(params.slug)]);
    let md = new external_markdown_it_default.a();
    res.article.body = md.render(res.article.body);
    res.article.favoritedabled = false;
    res.article.followabled = false;
    return { ...res,
      ...comments,
      user: store.state.user
    };
  },

  data() {
    return {
      commentText: '' //评论内容

    };
  },

  methods: {
    // 处理点赞事件
    favoriteHandel() {
      let {
        article
      } = this;
      article.favoritedabled = true;

      if (article.favorited) {
        Object(api["e" /* delFavorite */])(article.slug).then(() => {
          article.favorited = false;
          article.favoritesCount -= 1;
          article.favoritedabled = false;
        });
      } else {
        Object(api["a" /* addFavorite */])(article.slug).then(() => {
          article.favorited = true;
          article.favoritesCount += 1;
          article.favoritedabled = false;
        });
      }
    },

    //follow事件
    followHandel() {
      let {
        article
      } = this;
      article.followabled = true;

      if (article.author.following) {
        Object(api["f" /* delFollow */])(article.author.username).then(() => {
          article.author.following = false;
          article.followabled = false;
        });
      } else {
        Object(api["b" /* addFollow */])(article.author.username).then(() => {
          article.author.following = true;
          article.followabled = false;
        });
      }
    },

    // 发表评论
    comment() {
      let {
        article,
        commentText
      } = this;
      Object(api["m" /* makeComment */])({
        article: article.slug,
        data: {
          comment: {
            body: commentText
          }
        }
      }).then(res => {
        this.comments.unshift(res.comment);
      });
    },

    // 删除评论
    deleteComment(id) {
      let {
        article
      } = this;
      Object(api["d" /* delComment */])({
        slug: article.slug,
        id
      }).then(() => {
        this.comments.forEach((v, i) => {
          if (v.id === id) {
            this.comments.splice(i, 1);
          }
        });
      });
    }

  },

  head() {
    return {
      title: `${this.article.title} - realworld`,
      meta: [{
        hid: 'description',
        name: 'description',
        content: this.article.description
      }]
    };
  },

  components: {
    author: author
  }
});
// CONCATENATED MODULE: ./pages/article/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_articlevue_type_script_lang_js_ = (articlevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./pages/article/index.vue





/* normalize component */

var article_component = Object(componentNormalizer["a" /* default */])(
  pages_articlevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "4794c5ba"
  
)

/* harmony default export */ var pages_article = __webpack_exports__["default"] = (article_component.exports);

/***/ })

};;
//# sourceMappingURL=1.js.map