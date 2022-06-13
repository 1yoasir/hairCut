"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_comunes_EditarDatos_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/comunes/EditarDatos.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/comunes/EditarDatos.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      usuario: {
        name: '',
        email: '',
        telephone: '',
        imagen: ''
      }
    };
  },
  methods: {
    seleccionImagen: function seleccionImagen() {
      var archivos = document.getElementById("imagen").files;
      var mostrarImagen = document.getElementById("imagenSeleccionada");
      document.getElementById("contenedorImagen").style.display = "block";

      if (!archivos || !archivos.length) {
        mostrarImagen.src = "";
        return;
      }

      var primerArchivo = archivos[0];
      var objectURL = URL.createObjectURL(primerArchivo);
      mostrarImagen.src = objectURL;
      var file = document.getElementById("imagen").files[0];
      this.usuario.imagen = file;
    },
    anterior: function anterior() {
      this.$router.go(-1);
    },
    actualizar: function actualizar() {
      this.usuario.name = this.user.name;
      this.usuario.email = this.user.email;
      this.usuario.telephone = this.user.telephone;
      var enviar = new FormData();
      enviar.append('name', this.usuario.name);
      enviar.append('email', this.usuario.email);
      enviar.append('telephone', this.usuario.telephone);
      enviar.append('imagen', this.usuario.imagen);
      enviar.append('_method', 'PUT');
      axios.post("/usuario/" + this.user.id, enviar).then(function (respuesta) {
        console.log(respuesta.data);
        alert("Datos modificados correctamente");
      });

      if (this.user.role == 'CLI') {
        this.$router.replace("/cliente");
      } else {
        this.$router.replace("/trabajador");
      }
    }
  }
});

/***/ }),

/***/ "./resources/js/comunes/EditarDatos.vue":
/*!**********************************************!*\
  !*** ./resources/js/comunes/EditarDatos.vue ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _EditarDatos_vue_vue_type_template_id_3f22298b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EditarDatos.vue?vue&type=template&id=3f22298b& */ "./resources/js/comunes/EditarDatos.vue?vue&type=template&id=3f22298b&");
/* harmony import */ var _EditarDatos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EditarDatos.vue?vue&type=script&lang=js& */ "./resources/js/comunes/EditarDatos.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _EditarDatos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EditarDatos_vue_vue_type_template_id_3f22298b___WEBPACK_IMPORTED_MODULE_0__.render,
  _EditarDatos_vue_vue_type_template_id_3f22298b___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/comunes/EditarDatos.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/comunes/EditarDatos.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/comunes/EditarDatos.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditarDatos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EditarDatos.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/comunes/EditarDatos.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditarDatos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/comunes/EditarDatos.vue?vue&type=template&id=3f22298b&":
/*!*****************************************************************************!*\
  !*** ./resources/js/comunes/EditarDatos.vue?vue&type=template&id=3f22298b& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditarDatos_vue_vue_type_template_id_3f22298b___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditarDatos_vue_vue_type_template_id_3f22298b___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditarDatos_vue_vue_type_template_id_3f22298b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EditarDatos.vue?vue&type=template&id=3f22298b& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/comunes/EditarDatos.vue?vue&type=template&id=3f22298b&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/comunes/EditarDatos.vue?vue&type=template&id=3f22298b&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/comunes/EditarDatos.vue?vue&type=template&id=3f22298b& ***!
  \********************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "card" }, [
    _c("h5", { staticClass: "card-header" }, [_vm._v("Tu perfil")]),
    _vm._v(" "),
    _c(
      "form",
      {
        staticClass: "card-body",
        attrs: { method: "POST" },
        on: {
          submit: function ($event) {
            $event.preventDefault()
            return _vm.actualizar.apply(null, arguments)
          },
        },
      },
      [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "form-group col-md-6 mb-3" }, [
            _c("label", { attrs: { for: "inputCliente" } }, [_vm._v("NOMBRE")]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.user.name,
                  expression: "user.name",
                },
              ],
              staticClass: "form-control",
              attrs: { type: "text", id: "name", placeholder: "Nombre" },
              domProps: { value: _vm.user.name },
              on: {
                input: function ($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.user, "name", $event.target.value)
                },
              },
            }),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group col-md-3 mb-3" }, [
            _c("label", { attrs: { for: "inputTrabajador" } }, [
              _vm._v("Foto de perfil"),
            ]),
            _vm._v(" "),
            _c("input", {
              staticClass: "form-control",
              attrs: {
                type: "file",
                id: "imagen",
                placeholder: "Imagen",
                accept: "image/png,image/jpeg",
              },
              on: { change: _vm.seleccionImagen },
            }),
          ]),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "form-group col-md-3 mb-3" }, [
            _c("label", { attrs: { for: "inputCliente" } }, [_vm._v("EMAIL")]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.user.email,
                  expression: "user.email",
                },
              ],
              staticClass: "form-control",
              attrs: { type: "email", id: "email", placeholder: "Email" },
              domProps: { value: _vm.user.email },
              on: {
                input: function ($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.user, "email", $event.target.value)
                },
              },
            }),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group col-md-3 mb-3" }, [
            _c("label", { attrs: { for: "inputTrabajador" } }, [
              _vm._v("TELEFONO"),
            ]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.user.telephone,
                  expression: "user.telephone",
                },
              ],
              staticClass: "form-control",
              attrs: {
                type: "text",
                id: "telephone",
                placeholder: "telephone",
              },
              domProps: { value: _vm.user.telephone },
              on: {
                input: function ($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.user, "telephone", $event.target.value)
                },
              },
            }),
          ]),
          _vm._v(" "),
          _vm._m(0),
        ]),
        _vm._v(" "),
        _c(
          "button",
          {
            staticClass: "btn btn-outline-success btn-lg mt-3 block col-xl-12",
            attrs: { type: "submit" },
          },
          [_vm._v("Actualizar Datos")]
        ),
        _vm._v(" "),
        _c(
          "a",
          {
            staticClass: "btn btn-outline-danger btn-lg mt-3 block col-xl-12",
            on: { click: _vm.anterior },
          },
          [_vm._v("Volver")]
        ),
      ]
    ),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "form-group col-md-3 mb-2",
        staticStyle: { display: "none" },
        attrs: { id: "contenedorImagen" },
      },
      [
        _c("label", { attrs: { for: "imagen" } }, [_vm._v("PREVISUALIZACIÓN")]),
        _vm._v(" "),
        _c("br"),
        _vm._v(" "),
        _c("img", {
          staticStyle: { "max-height": "200px", "max-width": "200px" },
          attrs: { src: "", id: "imagenSeleccionada" },
        }),
      ]
    )
  },
]
render._withStripped = true



/***/ })

}]);