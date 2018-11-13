(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-contact-contact-module"],{

/***/ "./src/app/admin/contact/contact-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/admin/contact/contact-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: ContactRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactRoutingModule", function() { return ContactRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _contact_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact.component */ "./src/app/admin/contact/contact.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '', component: _contact_component__WEBPACK_IMPORTED_MODULE_2__["ContactComponent"]
    }
];
var ContactRoutingModule = /** @class */ (function () {
    function ContactRoutingModule() {
    }
    ContactRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], ContactRoutingModule);
    return ContactRoutingModule;
}());



/***/ }),

/***/ "./src/app/admin/contact/contact.component.css":
/*!*****************************************************!*\
  !*** ./src/app/admin/contact/contact.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/contact/contact.component.html":
/*!******************************************************!*\
  !*** ./src/app/admin/contact/contact.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\n  <div class=\"content-header\">\n\n    <h3>\n      <span>\n        <fa-icon [icon]=\"faFileContract\"></fa-icon> &nbsp;&nbsp;Contact\n      </span>\n    </h3>\n\n  </div>\n  <div class=\"content-original\">\n\n    <table class=\"table table-bordered\">\n      <thead>\n        <tr>\n          <th scope=\"col\">#</th>\n          <th scope=\"col\">First</th>\n          <th scope=\"col\">Last</th>\n          <th scope=\"col\">Handle</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <th scope=\"row\">1</th>\n          <td>Mark</td>\n          <td>Otto</td>\n          <td>@mdo</td>\n        </tr>\n        <tr>\n          <th scope=\"row\">2</th>\n          <td>Jacob</td>\n          <td>Thornton</td>\n          <td>@fat</td>\n        </tr>\n        <tr>\n          <th scope=\"row\">3</th>\n          <td colspan=\"2\">Larry the Bird</td>\n          <td>@twitter</td>\n        </tr>\n      </tbody>\n    </table>\n\n\n  </div>\n  <div class=\"content-footer\">\n    <nav aria-label=\"Page navigation\">\n      <ul class=\"pagination justify-content-center\">\n        <li class=\"page-item disabled\">\n          <a class=\"page-link\" href=\"#\" aria-label=\"Previous\">\n            <span aria-hidden=\"true\">&laquo;</span>\n            <span class=\"sr-only\">Previous</span>\n          </a>\n        </li>\n        <li class=\"page-item active\"><a class=\"page-link\" href=\"#\">1</a></li>\n        <li class=\"page-item\"><a class=\"page-link\" href=\"#\">2</a></li>\n        <li class=\"page-item\"><a class=\"page-link\" href=\"#\">3</a></li>\n        <li class=\"page-item\">\n          <a class=\"page-link\" href=\"#\" aria-label=\"Next\">\n            <span aria-hidden=\"true\">&raquo;</span>\n            <span class=\"sr-only\">Next</span>\n          </a>\n        </li>\n      </ul>\n    </nav>\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/admin/contact/contact.component.ts":
/*!****************************************************!*\
  !*** ./src/app/admin/contact/contact.component.ts ***!
  \****************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
        this.faFileContract = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faFileContract"];
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/admin/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/admin/contact/contact.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/admin/contact/contact.module.ts":
/*!*************************************************!*\
  !*** ./src/app/admin/contact/contact.module.ts ***!
  \*************************************************/
/*! exports provided: ContactModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactModule", function() { return ContactModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _contact_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact.component */ "./src/app/admin/contact/contact.component.ts");
/* harmony import */ var _contact_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact-routing.module */ "./src/app/admin/contact/contact-routing.module.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ContactModule = /** @class */ (function () {
    function ContactModule() {
    }
    ContactModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _contact_routing_module__WEBPACK_IMPORTED_MODULE_3__["ContactRoutingModule"],
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeModule"]
            ],
            declarations: [_contact_component__WEBPACK_IMPORTED_MODULE_2__["ContactComponent"]]
        })
    ], ContactModule);
    return ContactModule;
}());



/***/ })

}]);
//# sourceMappingURL=admin-contact-contact-module.js.map