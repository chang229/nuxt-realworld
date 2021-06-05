exports.ids = [3];
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

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/home/index.vue?vue&type=template&id=a3546f9a&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"home-page"},[_vm._ssrNode("<div class=\"banner\"><div class=\"container\"><h1 class=\"logo-font\">conduit</h1> <p>A place to share your knowledge.</p></div></div> "),_vm._ssrNode("<div class=\"container page\">","</div>",[_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-md-9\">","</div>",[_vm._ssrNode("<div class=\"feed-toggle\">","</div>",[_vm._ssrNode("<ul class=\"nav nav-pills outline-active\">","</ul>",[(_vm.user)?_vm._ssrNode("<li class=\"nav-item\">","</li>",[_c('nuxt-link',{staticClass:"nav-link",class:{ active: _vm.tab === 'your_feed' },attrs:{"to":{
									name: 'home',
									query: { tab: 'your_feed' },
								},"exact":""}},[_vm._v("Your Feed")])],1):_vm._e(),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"nav-item\">","</li>",[_c('nuxt-link',{staticClass:"nav-link",class:{ active: _vm.tab === 'global_feed' },attrs:{"to":{
									name: 'home',
									query: { tab: 'global_feed' },
								},"exact":""}},[_vm._v("Global Feed")])],1),_vm._ssrNode(" "),(_vm.tag)?_vm._ssrNode("<li class=\"nav-item\">","</li>",[_c('nuxt-link',{staticClass:"nav-link",class:{ active: _vm.tab === 'tab' },attrs:{"to":{
									name: 'home',
									query: { tab: 'tab' },
								},"exact":""}},[_vm._v("#"+_vm._s(_vm.tag))])],1):_vm._e()],2)]),_vm._ssrNode(" "),_vm._l((_vm.articles),function(item){return _vm._ssrNode("<div class=\"article-preview\">","</div>",[_vm._ssrNode("<div class=\"article-meta\">","</div>",[_c('nuxt-link',{attrs:{"to":{
								name: 'profile',
								params: { username: item.author.username },
							}}},[_c('img',{attrs:{"src":item.author.image}})]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"info\">","</div>",[_c('nuxt-link',{staticClass:"author",attrs:{"to":{
									name: 'profile',
									params: {
										username: item.author.username,
									},
								}}},[_vm._v(_vm._s(item.author.username))]),_vm._ssrNode(" <span class=\"date\">"+_vm._ssrEscape(_vm._s(_vm._f("dateFormat")(item.createdAt,'MMM DD,YYYY')))+"</span>")],2),_vm._ssrNode(" <button"+(_vm._ssrAttr("disabled",item.favoriteAbled))+(_vm._ssrClass("btn btn-outline-primary btn-sm pull-xs-right",{
								active: item.favorited,
							}))+"><i class=\"ion-heart\"></i>"+_vm._ssrEscape("\n\t\t\t\t\t\t\t"+_vm._s(item.favoritesCount)+"\n\t\t\t\t\t\t")+"</button>")],2),_vm._ssrNode(" "),_c('nuxt-link',{staticClass:"preview-link",attrs:{"to":{
							name: 'article',
							params: { slug: item.slug },
						}}},[_c('h1',[_vm._v(_vm._s(item.title))]),_vm._v(" "),_c('p',[_vm._v(_vm._s(item.description))]),_vm._v(" "),_c('span',[_vm._v("Read more...")])])],2)}),_vm._ssrNode(" "),_vm._ssrNode("<nav>","</nav>",[_vm._ssrNode("<ul class=\"pagination\">","</ul>",_vm._l((_vm.totalPage),function(item){return _vm._ssrNode("<li"+(_vm._ssrClass("page-item",{ active: item === _vm.page }))+">","</li>",[_c('nuxt-link',{staticClass:"page-link",attrs:{"to":{
									name: 'home',
									query: {
										page: item,
										tag: _vm.$route.query.tag,
									},
								}}},[_vm._v(_vm._s(item))])],1)}),0)])],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"col-md-3\">","</div>",[_vm._ssrNode("<div class=\"sidebar\">","</div>",[_vm._ssrNode("<p>Popular Tags</p> "),_vm._ssrNode("<div class=\"tag-list\">","</div>",_vm._l((_vm.tags),function(item){return _c('nuxt-link',{key:item,staticClass:"tag-pill tag-default",attrs:{"to":{
								name: 'home',
								query: { tag: item, tab: 'tab' },
							}}},[_vm._v(_vm._s(item))])}),1)],2)])],2)])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/home/index.vue?vue&type=template&id=a3546f9a&

// EXTERNAL MODULE: ./utils/api.js
var api = __webpack_require__(27);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/home/index.vue?vue&type=script&lang=js&
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


/* harmony default export */ var homevue_type_script_lang_js_ = ({
  name: 'home',

  async asyncData({
    query,
    store
  }) {
    const page = Number.parseInt(query.page || 1);
    const limit = 20;
    const tab = query.tab || 'global_feed';
    let fetchArticles = store.state.user && tab === 'your_feed' ? api["j" /* getFeedArticle */] : api["h" /* getArticles */];
    let [res, tags] = await Promise.all([fetchArticles({
      limit,
      offset: (page - 1) * limit,
      tag: query.tag
    }), Object(api["k" /* getTags */])()]);
    res.articles.forEach(v => {
      v.favoriteAbled = false;
    });
    return { ...res,
      limit,
      page,
      ...tags,
      tag: query.tag,
      tab
    };
  },

  watchQuery: ['page', 'tag', 'tab'],
  methods: {
    favorite(item) {
      item.favoriteAbled = true;

      if (item.favorited) {
        Object(api["e" /* delFavorite */])(item.slug).then(() => {
          item.favorited = false;
          item.favoritesCount -= 1;
          item.favoriteAbled = false;
        });
      } else {
        Object(api["a" /* addFavorite */])(item.slug).then(() => {
          item.favorited = true;
          item.favoritesCount += 1;
          item.favoriteAbled = false;
        });
      }
    }

  },
  computed: { ...Object(external_vuex_["mapState"])(['user']),

    totalPage() {
      return Math.ceil(this.articlesCount / this.limit);
    }

  }
});
// CONCATENATED MODULE: ./pages/home/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_homevue_type_script_lang_js_ = (homevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/home/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_homevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "2e261692"
  
)

/* harmony default export */ var home = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=3.js.map