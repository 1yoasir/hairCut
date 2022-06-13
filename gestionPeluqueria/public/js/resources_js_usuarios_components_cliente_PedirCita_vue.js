"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_usuarios_components_cliente_PedirCita_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/usuarios/components/cliente/PedirCita.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/usuarios/components/cliente/PedirCita.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      servicios: [],
      horas: [],
      trabajadores: [],
      cita: {
        'id_cliente': '',
        'id_trabajador': '',
        'servicio': '',
        'id_servicio': '',
        'fecha': '',
        'hora': '',
        'precio': '',
        'comentario': ''
      },
      existe: '',
      cliente: {
        nombre: ''
      }
    };
  },
  created: function created() {
    var _this = this;

    axios.get('/serviciosAll').then(function (respuesta) {
      _this.servicios = respuesta.data;
    });
    axios.get('/usuarios/trabajadores').then(function (respuesta) {
      _this.trabajadores = respuesta.data;
    });
    axios("/usuario/" + this.user.id).then(function (respuesta) {
      _this.cliente.nombre = respuesta.data.name;
    });
  },
  methods: {
    anterior: function anterior() {
      this.$router.go(-1);
    },
    mostrarHoras: function mostrarHoras() {
      var _this2 = this;

      document.getElementById("horas").disabled = false;
      axios.get("/usuarios/trabajador/".concat(this.cita.id_trabajador, "/horas")).then(function (respuesta) {
        _this2.horas = respuesta.data;
      });
    },
    mostrarPrecio: function mostrarPrecio() {
      var _this3 = this;

      axios.get("/servicio/".concat(this.cita.servicio)).then(function (respuesta) {
        _this3.cita.precio = respuesta.data[0]['precio'];
        _this3.cita.id_servicio = respuesta.data[0]['id'];
      });
    },
    comprobarCita: function comprobarCita(fecha, hora, trabajador) {
      var _this4 = this;

      axios.get("/cita/fecha/".concat(fecha, "/hora/").concat(hora, "/trabajador/").concat(trabajador)).then(function (respuesta) {
        _this4.existe = Object.keys(respuesta.data).length === 0;
      });

      if (this.existe) {
        alert("cambia la cita");
      }
    },
    crearCita: function crearCita() {
      var trabajador = document.getElementById('trabajador');
      var nombreTrabajador = trabajador.options[trabajador.selectedIndex].text;
      var params = {
        id_cliente: this.user.id,
        id_trabajador: this.cita.id_trabajador,
        id_servicio: this.cita.id_servicio,
        fecha: this.cita.fecha,
        hora: this.cita.hora,
        precio: this.cita.precio,
        nom_trabajador: nombreTrabajador,
        nom_cliente: this.cliente.nombre,
        comentario: this.cita.comentario
      };
      axios.post('/cita', params).then(function (respuesta) {
        alert("Cita creada correctamente");
        window.location.replace("http://127.0.0.1:8000/cliente/citas");
      });
    },
    cancelar: function cancelar() {
      this.$router.go(-1);
    }
  }
});

/***/ }),

/***/ "./resources/js/usuarios/components/cliente/PedirCita.vue":
/*!****************************************************************!*\
  !*** ./resources/js/usuarios/components/cliente/PedirCita.vue ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PedirCita_vue_vue_type_template_id_89426a0e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PedirCita.vue?vue&type=template&id=89426a0e& */ "./resources/js/usuarios/components/cliente/PedirCita.vue?vue&type=template&id=89426a0e&");
/* harmony import */ var _PedirCita_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PedirCita.vue?vue&type=script&lang=js& */ "./resources/js/usuarios/components/cliente/PedirCita.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PedirCita_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PedirCita_vue_vue_type_template_id_89426a0e___WEBPACK_IMPORTED_MODULE_0__.render,
  _PedirCita_vue_vue_type_template_id_89426a0e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/usuarios/components/cliente/PedirCita.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/usuarios/components/cliente/PedirCita.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/usuarios/components/cliente/PedirCita.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PedirCita_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PedirCita.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/usuarios/components/cliente/PedirCita.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PedirCita_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/usuarios/components/cliente/PedirCita.vue?vue&type=template&id=89426a0e&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/usuarios/components/cliente/PedirCita.vue?vue&type=template&id=89426a0e& ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PedirCita_vue_vue_type_template_id_89426a0e___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PedirCita_vue_vue_type_template_id_89426a0e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PedirCita_vue_vue_type_template_id_89426a0e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PedirCita.vue?vue&type=template&id=89426a0e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/usuarios/components/cliente/PedirCita.vue?vue&type=template&id=89426a0e&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/usuarios/components/cliente/PedirCita.vue?vue&type=template&id=89426a0e&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/usuarios/components/cliente/PedirCita.vue?vue&type=template&id=89426a0e& ***!
  \**************************************************************************************************************************************************************************************************************************************/
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
    _c("div", { staticClass: "card-header" }, [_vm._v("Pedir Cita")]),
    _vm._v(" "),
    _c(
      "form",
      {
        staticClass: "card-body",
        on: {
          submit: function ($event) {
            $event.preventDefault()
            return _vm.crearCita.apply(null, arguments)
          },
        },
      },
      [
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.user.id,
              expression: "user.id",
            },
          ],
          attrs: { type: "hidden", id: "cliente" },
          domProps: { value: _vm.user.id },
          on: {
            input: function ($event) {
              if ($event.target.composing) {
                return
              }
              _vm.$set(_vm.user, "id", $event.target.value)
            },
          },
        }),
        _vm._v(" "),
        _c("div", { staticClass: "row mb-1" }, [
          _c("div", { staticClass: "form-group col-md-6" }, [
            _c("label", { attrs: { for: "trabajador" } }, [
              _vm._v("TRABAJADORES"),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "input-group mb-3 col-md-12" }, [
              _vm._m(0),
              _vm._v(" "),
              _c(
                "select",
                {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.cita.id_trabajador,
                      expression: "cita.id_trabajador",
                    },
                  ],
                  staticClass: "custom-select col-md-8",
                  attrs: { id: "trabajador" },
                  on: {
                    change: [
                      function ($event) {
                        var $$selectedVal = Array.prototype.filter
                          .call($event.target.options, function (o) {
                            return o.selected
                          })
                          .map(function (o) {
                            var val = "_value" in o ? o._value : o.value
                            return val
                          })
                        _vm.$set(
                          _vm.cita,
                          "id_trabajador",
                          $event.target.multiple
                            ? $$selectedVal
                            : $$selectedVal[0]
                        )
                      },
                      function ($event) {
                        return _vm.mostrarHoras()
                      },
                    ],
                  },
                },
                [
                  _c("option", { attrs: { selected: "", value: "0" } }, [
                    _vm._v("Selecciona un trabajador"),
                  ]),
                  _vm._v(" "),
                  _vm._l(_vm.trabajadores, function (trabajador, index) {
                    return _c(
                      "option",
                      { key: index, domProps: { value: trabajador.id } },
                      [_vm._v(_vm._s(trabajador.name))]
                    )
                  }),
                ],
                2
              ),
            ]),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group col-md-6" }, [
            _c("label", { attrs: { for: "servicio" } }, [_vm._v("SERVICIOS")]),
            _vm._v(" "),
            _c("div", { staticClass: "input-group mb-3 col-md-12" }, [
              _vm._m(1),
              _vm._v(" "),
              _c(
                "select",
                {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.cita.servicio,
                      expression: "cita.servicio",
                    },
                  ],
                  staticClass: "custom-select col-md-8",
                  attrs: { id: "servicio" },
                  on: {
                    change: [
                      function ($event) {
                        var $$selectedVal = Array.prototype.filter
                          .call($event.target.options, function (o) {
                            return o.selected
                          })
                          .map(function (o) {
                            var val = "_value" in o ? o._value : o.value
                            return val
                          })
                        _vm.$set(
                          _vm.cita,
                          "servicio",
                          $event.target.multiple
                            ? $$selectedVal
                            : $$selectedVal[0]
                        )
                      },
                      function ($event) {
                        return _vm.mostrarPrecio()
                      },
                    ],
                  },
                },
                [
                  _c("option", { attrs: { selected: "", value: "0" } }, [
                    _vm._v("Selecciona un servicio"),
                  ]),
                  _vm._v(" "),
                  _vm._l(_vm.servicios, function (servicio, index) {
                    return _c("option", { key: index }, [
                      _vm._v(_vm._s(servicio.nombre)),
                    ])
                  }),
                ],
                2
              ),
            ]),
          ]),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "form-group col-md-4" }, [
            _c("label", { attrs: { for: "telephone" } }, [_vm._v("FECHA")]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.cita.fecha,
                  expression: "cita.fecha",
                },
              ],
              staticClass: "form-control mb-3",
              attrs: { type: "date", id: "telephone", placeholder: "fecha" },
              domProps: { value: _vm.cita.fecha },
              on: {
                input: function ($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.cita, "fecha", $event.target.value)
                },
              },
            }),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group col-md-4" }, [
            _c("label", { attrs: { for: "horas" } }, [_vm._v("HORAS")]),
            _vm._v(" "),
            _c("div", { staticClass: "input-group col-md-2 mb-3" }, [
              _vm._m(2),
              _vm._v(" "),
              _c(
                "select",
                {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.cita.hora,
                      expression: "cita.hora",
                    },
                  ],
                  staticClass: "custom-select col-md-8",
                  attrs: { id: "horas", disabled: "" },
                  on: {
                    change: [
                      function ($event) {
                        var $$selectedVal = Array.prototype.filter
                          .call($event.target.options, function (o) {
                            return o.selected
                          })
                          .map(function (o) {
                            var val = "_value" in o ? o._value : o.value
                            return val
                          })
                        _vm.$set(
                          _vm.cita,
                          "hora",
                          $event.target.multiple
                            ? $$selectedVal
                            : $$selectedVal[0]
                        )
                      },
                      function ($event) {
                        return _vm.comprobarCita(
                          _vm.cita.fecha,
                          _vm.cita.hora,
                          _vm.cita.id_trabajador
                        )
                      },
                    ],
                  },
                },
                [
                  _c("option", { attrs: { selected: "", value: "0" } }, [
                    _vm._v("Selecciona una hora"),
                  ]),
                  _vm._v(" "),
                  _vm._l(_vm.horas, function (hora, index) {
                    return _c("option", { key: index }, [_vm._v(_vm._s(hora))])
                  }),
                ],
                2
              ),
            ]),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group col-md-4 mb-3" }, [
            _c("label", { attrs: { for: "precio" } }, [_vm._v("PRECIO")]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.cita.precio,
                  expression: "cita.precio",
                },
              ],
              staticClass: "form-control",
              attrs: { type: "text", id: "precio", disabled: "", value: "" },
              domProps: { value: _vm.cita.precio },
              on: {
                input: function ($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.cita, "precio", $event.target.value)
                },
              },
            }),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group col-md-12" }, [
            _c("label", { attrs: { for: "precio" } }, [_vm._v("Comentarios")]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.cita.comentario,
                  expression: "cita.comentario",
                },
              ],
              staticClass: "form-control",
              attrs: { type: "text", id: "precio", value: "" },
              domProps: { value: _vm.cita.comentario },
              on: {
                input: function ($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.cita, "comentario", $event.target.value)
                },
              },
            }),
          ]),
        ]),
        _vm._v(" "),
        _c(
          "button",
          {
            staticClass: "btn btn-outline-success btn-lg mt-3 block col-xl-12",
            attrs: { type: "submit" },
          },
          [_vm._v("Solicitar Cita")]
        ),
        _vm._v(" "),
        _c(
          "a",
          {
            staticClass: "btn btn-outline-danger btn-lg mt-3 block col-xl-12",
            on: {
              click: function ($event) {
                return _vm.cancelar()
              },
            },
          },
          [_vm._v("Cancelar")]
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
    return _c("div", { staticClass: "input-group-prepend" }, [
      _c(
        "label",
        { staticClass: "input-group-text", attrs: { for: "trabajador" } },
        [_vm._v("Trabajador")]
      ),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group-prepend" }, [
      _c(
        "label",
        { staticClass: "input-group-text", attrs: { for: "servicio" } },
        [_vm._v("Servicio")]
      ),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group-prepend" }, [
      _c(
        "label",
        { staticClass: "input-group-text", attrs: { for: "horas" } },
        [_vm._v("Hora")]
      ),
    ])
  },
]
render._withStripped = true



/***/ })

}]);