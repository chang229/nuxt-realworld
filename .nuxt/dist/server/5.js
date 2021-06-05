exports.ids = [5];
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

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/profile/index.vue?vue&type=template&id=9d1999e4&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"profile-page"},[_vm._ssrNode("<div class=\"user-info\">","</div>",[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-xs-12 col-md-10 offset-md-1\">","</div>",[_vm._ssrNode("<img"+(_vm._ssrAttr("src",_vm.profile.image))+" class=\"user-img\"> <h4>"+_vm._ssrEscape(_vm._s(_vm.profile.username))+"</h4> <p>"+_vm._ssrEscape(_vm._s(_vm.profile.bio))+"</p> "+((_vm.profile.username !== _vm.user.username)?("<button"+(_vm._ssrAttr("disabled",_vm.followabled))+" class=\"btn btn-sm btn-outline-secondary action-btn\"><i class=\"ion-plus-round\"></i>"+_vm._ssrEscape(" "+_vm._s(_vm.profile.following ? 'Unfollow' : 'Follow')+" "+_vm._s(_vm.profile.username)+"\n\t\t\t\t\t\t")+"</button>"):"<!---->")+" "),(_vm.profile.username === _vm.user.username)?_c('nuxt-link',{staticClass:"btn btn-sm btn-outline-secondary action-btn",attrs:{"to":"/settings"}},[_c('i',{staticClass:"ion-gear-a"}),_vm._v(" Edit Profile Settings\n\t\t\t\t\t\t")]):_vm._e()],2)])])]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-xs-12 col-md-10 offset-md-1\">","</div>",[_vm._ssrNode("<div class=\"articles-toggle\"><ul class=\"nav nav-pills outline-active\"><li class=\"nav-item\"><div"+(_vm._ssrClass("nav-link",{active:_vm.tab ==='my'}))+" style=\"cursor:pointer\">My Articles</div></li> <li class=\"nav-item\"><div"+(_vm._ssrClass("nav-link",{active:_vm.tab ==='favorited'}))+" style=\"cursor:pointer\">Favorited Articles</div></li></ul></div> "),_vm._l((_vm.articles),function(item){return _vm._ssrNode("<div class=\"article-preview\">","</div>",[_vm._ssrNode("<div class=\"article-meta\">","</div>",[_c('nuxt-link',{attrs:{"to":{name:'profile',params:{username:item.author.username}}}},[_c('img',{attrs:{"src":item.author.image}})]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"info\">","</div>",[_c('nuxt-link',{staticClass:"author",attrs:{"to":{name:'profile',params:{username:item.author.username}}}},[_vm._v(_vm._s(item.author.username))]),_vm._ssrNode(" <span class=\"date\">"+_vm._ssrEscape(_vm._s(_vm._f("dateFormat")(item.createdAt,'MMM DD,YYYY')))+"</span>")],2),_vm._ssrNode(" <button"+(_vm._ssrAttr("disabled",item.favoriteAbled))+(_vm._ssrClass("btn btn-outline-primary btn-sm pull-xs-right",{active:item.favorited}))+"><i class=\"ion-heart\"></i>"+_vm._ssrEscape(" "+_vm._s(item.favoritesCount)+"\n\t\t\t\t\t\t\t")+"</button>")],2),_vm._ssrNode(" "),_c('nuxt-link',{staticClass:"preview-link",attrs:{"to":{name:'article',params:{slug:item.slug}}}},[_c('h1',[_vm._v(_vm._s(item.title))]),_vm._v(" "),_c('p',[_vm._v(_vm._s(item.description))]),_vm._v(" "),_c('span',[_vm._v("Read more...")])])],2)})],2)])])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/profile/index.vue?vue&type=template&id=9d1999e4&

// EXTERNAL MODULE: ./utils/api.js
var api = __webpack_require__(27);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/profile/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var profilevue_type_script_lang_js_ = ({
  middleware: 'authenticated',
  name: 'profile',

  async asyncData({
    params
  }) {
    let res = await Object(api["l" /* getUserInfo */])(params.username);
    return { ...res
    };
  },

  data() {
    return {
      articles: [],
      tab: 'my',
      pending: false,
      followabled: false
    };
  },

  mounted() {
    this.fetchArticles(this.tab);
  },

  methods: {
    // 获取文章列表
    fetchArticles(type) {
      if (this.pending) return;
      this.pending = true;
      this.articles = [];
      this.tab = type;
      let params = {
        limit: 5,
        offset: 0
      };

      if (type === 'my') {
        params.author = this.profile.username;
      }

      if (type === 'favorited') {
        params.favorited = this.profile.username;
      }

      Object(api["h" /* getArticles */])(params).then(res => {
        res.articles.forEach(v => {
          v.favoriteAbled = false;
        });
        this.articles = res.articles;
        this.pending = false;
      }).catch(() => {
        this.pending = false;
      });
    },

    // 点赞
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
    },

    //follow事件
    followHandel() {
      let {
        profile
      } = this;
      this.followabled = true;

      if (profile.following) {
        Object(api["f" /* delFollow */])(profile.username).then(() => {
          profile.following = false;
          this.followabled = false;
        });
      } else {
        Object(api["b" /* addFollow */])(profile.username).then(() => {
          profile.following = true;
          this.followabled = false;
        });
      }
    }

  },
  computed: { ...Object(external_vuex_["mapState"])(['user'])
  }
});
// CONCATENATED MODULE: ./pages/profile/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_profilevue_type_script_lang_js_ = (profilevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/profile/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_profilevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "31b87ead"
  
)

/* harmony default export */ var pages_profile = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=5.js.map