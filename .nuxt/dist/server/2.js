exports.ids = [2];
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

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/editor/index.vue?vue&type=template&id=5732f68c&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"editor-page"},[_vm._ssrNode("<div class=\"container page\"><div class=\"row\"><div class=\"col-md-10 offset-md-1 col-xs-12\"><form><fieldset><fieldset class=\"form-group\"><input type=\"text\" placeholder=\"Article Title\""+(_vm._ssrAttr("disabled",_vm.pending))+(_vm._ssrAttr("value",(_vm.article.title)))+" class=\"form-control form-control-lg\"></fieldset> <fieldset class=\"form-group\"><input type=\"text\" placeholder=\"What's this article about?\""+(_vm._ssrAttr("disabled",_vm.pending))+(_vm._ssrAttr("value",(_vm.article.description)))+" class=\"form-control\"></fieldset> <fieldset class=\"form-group\"><textarea rows=\"8\" placeholder=\"Write your article (in markdown)\""+(_vm._ssrAttr("disabled",_vm.pending))+" class=\"form-control\">"+_vm._ssrEscape(_vm._s(_vm.article.body))+"</textarea></fieldset> <fieldset class=\"form-group\"><input type=\"text\" placeholder=\"Enter tags\""+(_vm._ssrAttr("disabled",_vm.pending))+(_vm._ssrAttr("value",(_vm.article.tag)))+" class=\"form-control\"> <div class=\"tag-list\"></div></fieldset> "+((_vm.params && _vm.params.slug)?("<button type=\"button\""+(_vm._ssrAttr("disabled",_vm.pending))+" class=\"btn btn-lg pull-xs-right btn-primary\">\n                                Update Article\n                            </button>"):("<button type=\"button\""+(_vm._ssrAttr("disabled",_vm.pending))+" class=\"btn btn-lg pull-xs-right btn-primary\">\n\t\t\t\t\t\t\t\tPublish Article\n\t\t\t\t\t\t\t</button>"))+"</fieldset></form></div></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/editor/index.vue?vue&type=template&id=5732f68c&

// EXTERNAL MODULE: ./utils/api.js
var api = __webpack_require__(27);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/editor/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var editorvue_type_script_lang_js_ = ({
  middleware: 'authenticated',
  name: 'editor',

  asyncData({
    params
  }) {
    return {
      params
    };
  },

  data() {
    return {
      pending: false,
      article: {
        body: '',
        description: '',
        tag: '',
        title: ''
      }
    };
  },

  created() {
    if (this.params && this.params.slug) {
      Object(api["g" /* getArticle */])(this.params.slug).then(res => {
        let {
          article
        } = res;
        this.article = {
          body: article.body,
          description: article.description,
          tag: article.tagList.join(','),
          title: article.title
        };
      });
    }
  },

  methods: {
    // 发布文章
    postArticle() {
      let {
        article,
        pending
      } = this;
      if (pending) return;
      this.pending = true;

      if (article.tag) {
        article.tagList = article.tag.split(',');
      }

      Object(api["n" /* pubArticle */])(article).then(res => {
        this.pending = false;
        this.$router.push(`/article/${res.article.slug}`);
      }).catch(() => {
        this.pending = false;
      });
    },

    // 更新文章
    renewArticle() {
      let {
        article,
        params,
        pending
      } = this;
      if (pending) return;
      this.pending = true;

      if (article.tag) {
        article.tagList = article.tag.split(',');
      }

      Object(api["q" /* updateArticle */])({
        slug: params.slug,
        data: {
          article
        }
      }).then(() => {
        this.pending = false;
        this.$router.push(`/article/${params.slug}`);
      }).catch(() => {
        this.pending = false;
      });
    }

  }
});
// CONCATENATED MODULE: ./pages/editor/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_editorvue_type_script_lang_js_ = (editorvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/editor/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_editorvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "887fa576"
  
)

/* harmony default export */ var editor = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=2.js.map