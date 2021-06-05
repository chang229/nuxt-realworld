exports.ids = [4];
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

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/login/index.vue?vue&type=template&id=707b4659&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"auth-page"},[_vm._ssrNode("<div class=\"container page\">","</div>",[_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-md-6 offset-md-3 col-xs-12\">","</div>",[_vm._ssrNode("<h1 class=\"text-xs-center\">"+_vm._ssrEscape(_vm._s(_vm.login ? 'Sign in' : 'Sign up'))+"</h1> "),_vm._ssrNode("<p class=\"text-xs-center\">","</p>",[(!_vm.login)?_c('nuxt-link',{attrs:{"to":"/login"}},[_vm._v("Have an account?")]):_vm._e(),_vm._ssrNode(" "),(_vm.login)?_c('nuxt-link',{attrs:{"to":"/register"}},[_vm._v("Get an account?")]):_vm._e()],2),_vm._ssrNode(" "+((_vm.errMsg)?("<ul class=\"error-messages\"><li>"+_vm._ssrEscape(_vm._s(_vm.errMsg))+"</li></ul>"):"<!---->")+" <form>"+((!_vm.login)?("<fieldset class=\"form-group\"><input type=\"text\" placeholder=\"Your Name\""+(_vm._ssrAttr("value",(_vm.user.username)))+" class=\"form-control form-control-lg\"></fieldset>"):"<!---->")+" <fieldset class=\"form-group\"><input type=\"text\" placeholder=\"Email\""+(_vm._ssrAttr("value",(_vm.user.email)))+" class=\"form-control form-control-lg\"></fieldset> <fieldset class=\"form-group\"><input type=\"password\" placeholder=\"Password\""+(_vm._ssrAttr("value",(_vm.user.password)))+" class=\"form-control form-control-lg\"></fieldset> <button class=\"btn btn-lg btn-primary pull-xs-right\">"+_vm._ssrEscape(_vm._s(_vm.login ? 'Sign in' : 'Sign up'))+"</button></form>")],2)])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/login/index.vue?vue&type=template&id=707b4659&

// EXTERNAL MODULE: ./utils/api.js
var api = __webpack_require__(27);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/login/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

const Cookie =  false ? undefined : undefined;
/* harmony default export */ var loginvue_type_script_lang_js_ = ({
  middleware: 'notAuthenticated',
  name: 'loginReagist',

  data() {
    return {
      user: {
        username: '',
        email: '',
        password: ''
      },
      errMsg: ''
    };
  },

  methods: {
    submit() {
      let {
        username,
        email,
        password
      } = this.user;

      if (this.$route.name !== 'login') {
        if (!username) {
          this.errMsg = 'That username is already taken';
          return;
        }
      }

      if (!email) {
        this.errMsg = 'That email is already taken';
        return;
      }

      if (!password) {
        this.errMsg = 'That password is already taken';
        return;
      }

      let reg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;

      if (!reg.test(email)) {
        this.errMsg = 'The mailbox format is incorrect';
        return;
      }

      if (this.$route.name === 'login') {
        Object(api["p" /* signIn */])({
          user: this.user
        }).then(res => {
          this.$store.commit('setUser', res.user);
          Cookie.set('user', res.user);
          this.$router.replace('/');
        }).catch(e => {
          this.errMsg = e;
        });
      } else {
        Object(api["o" /* register */])({
          user: this.user
        }).then(res => {
          this.$store.commit('setUser', res.user);
          Cookie.set('user', res.user);
          this.$router.replace('/');
        }).catch(e => {
          this.errMsg = e;
        });
      }
    }

  },
  computed: {
    login: function () {
      return this.$route.name === 'login';
    }
  }
});
// CONCATENATED MODULE: ./pages/login/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_loginvue_type_script_lang_js_ = (loginvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/login/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_loginvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "0c42e9ed"
  
)

/* harmony default export */ var login = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=4.js.map