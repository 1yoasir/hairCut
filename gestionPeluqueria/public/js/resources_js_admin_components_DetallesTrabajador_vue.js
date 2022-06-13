"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_admin_components_DetallesTrabajador_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/components/DetallesTrabajador.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/components/DetallesTrabajador.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      trabajador: {
        name: '',
        id: '',
        telephone: '',
        email: '',
        created_at: ''
      }
    };
  },
  created: function created() {
    var _this = this;

    axios.get("/usuario/".concat(this.$route.params.id)).then(function (response) {
      _this.trabajador = response.data;
    });
  },
  methods: {
    anterior: function anterior() {
      this.$router.go(-1);
    }
  }
});

/***/ }),

/***/ "./resources/js/admin/components/DetallesTrabajador.vue":
/*!**************************************************************!*\
  !*** ./resources/js/admin/components/DetallesTrabajador.vue ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DetallesTrabajador_vue_vue_type_template_id_bab75b96_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DetallesTrabajador.vue?vue&type=template&id=bab75b96&scoped=true& */ "./resources/js/admin/components/DetallesTrabajador.vue?vue&type=template&id=bab75b96&scoped=true&");
/* harmony import */ var _DetallesTrabajador_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DetallesTrabajador.vue?vue&type=script&lang=js& */ "./resources/js/admin/components/DetallesTrabajador.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DetallesTrabajador_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DetallesTrabajador_vue_vue_type_template_id_bab75b96_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _DetallesTrabajador_vue_vue_type_template_id_bab75b96_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "bab75b96",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/admin/components/DetallesTrabajador.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/admin/components/DetallesTrabajador.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/admin/components/DetallesTrabajador.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DetallesTrabajador_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DetallesTrabajador.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/components/DetallesTrabajador.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DetallesTrabajador_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/admin/components/DetallesTrabajador.vue?vue&type=template&id=bab75b96&scoped=true&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/admin/components/DetallesTrabajador.vue?vue&type=template&id=bab75b96&scoped=true& ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DetallesTrabajador_vue_vue_type_template_id_bab75b96_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DetallesTrabajador_vue_vue_type_template_id_bab75b96_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DetallesTrabajador_vue_vue_type_template_id_bab75b96_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DetallesTrabajador.vue?vue&type=template&id=bab75b96&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/components/DetallesTrabajador.vue?vue&type=template&id=bab75b96&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/components/DetallesTrabajador.vue?vue&type=template&id=bab75b96&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/components/DetallesTrabajador.vue?vue&type=template&id=bab75b96&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container card" }, [
    _c("h1", { staticClass: "display-5 card-header" }, [
      _vm._v("Detalles del trabajador"),
    ]),
    _vm._v(" "),
    _c("form", { staticClass: "card-body" }, [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "form-group col-md-6" }, [
          _c("label", { attrs: { for: "inputCliente" } }, [
            _vm._v("TRABAJADOR"),
          ]),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.trabajador.name,
                expression: "trabajador.name",
              },
            ],
            staticClass: "form-control",
            attrs: {
              type: "email",
              id: "name",
              placeholder: "Nombre",
              disabled: "",
            },
            domProps: { value: _vm.trabajador.name },
            on: {
              input: function ($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.trabajador, "name", $event.target.value)
              },
            },
          }),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "form-group col-md-6" }, [
          _c("label", { attrs: { for: "inputTrabajador" } }, [_vm._v("ID")]),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.trabajador.id,
                expression: "trabajador.id",
              },
            ],
            staticClass: "form-control",
            attrs: { type: "text", id: "id", placeholder: "id", disabled: "" },
            domProps: { value: _vm.trabajador.id },
            on: {
              input: function ($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.trabajador, "id", $event.target.value)
              },
            },
          }),
        ]),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "form-group col-md-3" }, [
          _c("label", { attrs: { for: "inputCliente" } }, [_vm._v("EMAIL")]),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.trabajador.email,
                expression: "trabajador.email",
              },
            ],
            staticClass: "form-control",
            attrs: {
              type: "email",
              id: "email",
              placeholder: "Email",
              disabled: "",
            },
            domProps: { value: _vm.trabajador.email },
            on: {
              input: function ($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.trabajador, "email", $event.target.value)
              },
            },
          }),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "form-group col-md-3" }, [
          _c("label", { attrs: { for: "inputTrabajador" } }, [
            _vm._v("TELEFONO"),
          ]),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.trabajador.telephone,
                expression: "trabajador.telephone",
              },
            ],
            staticClass: "form-control",
            attrs: {
              type: "text",
              id: "telephone",
              placeholder: "Trabajador",
              disabled: "",
            },
            domProps: { value: _vm.trabajador.telephone },
            on: {
              input: function ($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.trabajador, "telephone", $event.target.value)
              },
            },
          }),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "form-group col-md-3" }, [
          _c("label", { attrs: { for: "inputFecha" } }, [_vm._v("CREACIÓN")]),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.trabajador.created_at,
                expression: "trabajador.created_at",
              },
            ],
            staticClass: "form-control",
            attrs: { type: "text", id: "creado", disabled: "" },
            domProps: { value: _vm.trabajador.created_at },
            on: {
              input: function ($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.trabajador, "created_at", $event.target.value)
              },
            },
          }),
        ]),
      ]),
      _vm._v(" "),
      _c(
        "a",
        {
          staticClass: "btn btn-outline-primary btn-lg mt-3 block col-xl-12",
          on: { click: _vm.anterior },
        },
        [_vm._v("Volver a Mis trabajadores")]
      ),
    ]),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);