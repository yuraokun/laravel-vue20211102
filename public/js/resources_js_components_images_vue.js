"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_images_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/images.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/images.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      images: null,
      fileData: {
        files: [],
        urls: []
      }
    };
  },
  mounted: function mounted() {
    this.load();
  },
  methods: {
    deleteImage: function deleteImage(index) {
      this.fileData.files.splice(index, 1);
      this.fileData.urls.splice(index, 1);
    },
    load: function load() {
      var _this = this;

      axios.get("/api/images").then(function (res) {
        _this.images = res.data;
      });
    },
    upload: function upload(event) {
      var file = event.target.files[0];

      if (!file.type.match("image.*")) {
        // this.message = "画像ファイルを選択して下さい";
        // this.confirmedImage = "";
        alert("it is not image..");
        return;
      }

      this.preview(file);
    },
    preview: function preview(file) {
      var _this2 = this;

      // console.log(this.files);
      var reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = function (e) {
        _this2.fileData.urls.push(e.target.result);

        _this2.fileData.files.push(file);

        console.log(_this2.fileData);
      };
    },
    send: function send() {
      var _this3 = this;

      var config = {
        headers: {
          "content-type": "multipart/form-data"
        }
      };
      var formData = new FormData(); // let requestFiles = this.files.filter((file) => file); // ファイルがあるものだけを取得
      // requestFiles.forEach((file, index) => {
      //     formData.append("files[" + index + "]", file); // formDataに追加していく
      // });

      this.fileData.files.forEach(function (file, index) {
        formData.append("files[" + index + "]", file); // formDataに追加していく
      });
      formData.append("hodna", "text"); // console.log(...formData);

      axios.post("/api/image", formData, config).then(function (rs) {
        console.log(rs.data);

        _this3.load();
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/images.vue?vue&type=template&id=a28b4efa":
/*!****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/images.vue?vue&type=template&id=a28b4efa ***!
  \****************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", null, "Image Upload Test", -1
/* HOISTED */
);

var _hoisted_2 = {
  style: {
    "display": "flex",
    "align-items": "flex-start"
  }
};
var _hoisted_3 = ["onClick"];
var _hoisted_4 = ["src"];

var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("hr", null, null, -1
/* HOISTED */
);

var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", null, "Registered Images", -1
/* HOISTED */
);

var _hoisted_7 = {
  style: {
    "display": "flex",
    "flex-wrap": "wrap",
    "justify-content": "space-around"
  }
};
var _hoisted_8 = ["src"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", null, [_hoisted_1, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <input type=\"text\" v-model=\"text\" />\n        <p>{{ text }}</p>\n        <p>{{ data }}</p> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.fileData.urls, function (url, index) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      key: index
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
      style: {
        "font-size": "2.5rem"
      },
      onClick: function onClick($event) {
        return $options.deleteImage(index);
      }
    }, "x", 8
    /* PROPS */
    , _hoisted_3), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
      src: url,
      style: {
        "width": "100px"
      }
    }, null, 8
    /* PROPS */
    , _hoisted_4)]);
  }), 128
  /* KEYED_FRAGMENT */
  ))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "file",
    id: "",
    onChange: _cache[0] || (_cache[0] = function () {
      return $options.upload && $options.upload.apply($options, arguments);
    })
  }, null, 32
  /* HYDRATE_EVENTS */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    onClick: _cache[1] || (_cache[1] = function () {
      return $options.send && $options.send.apply($options, arguments);
    })
  }, "Send")]), _hoisted_5, _hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.images, function (image, index) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      style: {
        "flex": "0 0 30%"
      },
      key: index
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(image.original_name), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
      style: {
        "width": "100%"
      },
      src: "/storage".concat(image.unique_path)
    }, null, 8
    /* PROPS */
    , _hoisted_8)]);
  }), 128
  /* KEYED_FRAGMENT */
  ))])]);
}

/***/ }),

/***/ "./resources/js/components/images.vue":
/*!********************************************!*\
  !*** ./resources/js/components/images.vue ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _images_vue_vue_type_template_id_a28b4efa__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images.vue?vue&type=template&id=a28b4efa */ "./resources/js/components/images.vue?vue&type=template&id=a28b4efa");
/* harmony import */ var _images_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images.vue?vue&type=script&lang=js */ "./resources/js/components/images.vue?vue&type=script&lang=js");
/* harmony import */ var _Users_yamadayuuki_Desktop_example_app_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Users_yamadayuuki_Desktop_example_app_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_images_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_images_vue_vue_type_template_id_a28b4efa__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/images.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/images.vue?vue&type=script&lang=js":
/*!********************************************************************!*\
  !*** ./resources/js/components/images.vue?vue&type=script&lang=js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_images_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_images_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./images.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/images.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/images.vue?vue&type=template&id=a28b4efa":
/*!**************************************************************************!*\
  !*** ./resources/js/components/images.vue?vue&type=template&id=a28b4efa ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_images_vue_vue_type_template_id_a28b4efa__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_images_vue_vue_type_template_id_a28b4efa__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./images.vue?vue&type=template&id=a28b4efa */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/images.vue?vue&type=template&id=a28b4efa");


/***/ })

}]);