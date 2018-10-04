(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-services-services-module"],{

/***/ "./src/app/admin/services/create/create.component.css":
/*!************************************************************!*\
  !*** ./src/app/admin/services/create/create.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/services/create/create.component.html":
/*!*************************************************************!*\
  !*** ./src/app/admin/services/create/create.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n  <h4 class=\"modal-title\">{{title}}</h4>\n  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n<div class=\"modal-body\">\n  <p>Hello, {{name}}!</p>\n</div>\n<div class=\"modal-footer\">\n  <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"activeModal.close('Close click')\">Close</button>\n</div>\n"

/***/ }),

/***/ "./src/app/admin/services/create/create.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/admin/services/create/create.component.ts ***!
  \***********************************************************/
/*! exports provided: CreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateComponent", function() { return CreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CreateComponent = /** @class */ (function () {
    function CreateComponent(activeModal) {
        this.activeModal = activeModal;
    }
    CreateComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CreateComponent.prototype, "name", void 0);
    CreateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create',
            template: __webpack_require__(/*! ./create.component.html */ "./src/app/admin/services/create/create.component.html"),
            styles: [__webpack_require__(/*! ./create.component.css */ "./src/app/admin/services/create/create.component.css")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"]])
    ], CreateComponent);
    return CreateComponent;
}());



/***/ }),

/***/ "./src/app/admin/services/delete/delete.component.css":
/*!************************************************************!*\
  !*** ./src/app/admin/services/delete/delete.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/services/delete/delete.component.html":
/*!*************************************************************!*\
  !*** ./src/app/admin/services/delete/delete.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n  <h4 class=\"modal-title\">{{title}}</h4>\n  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n<div class=\"modal-body\">\n  <p>Hello, delete form!</p>\n</div>\n<div class=\"modal-footer\">\n  <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"activeModal.close('Close click')\">Close</button>\n</div>"

/***/ }),

/***/ "./src/app/admin/services/delete/delete.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/admin/services/delete/delete.component.ts ***!
  \***********************************************************/
/*! exports provided: DeleteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteComponent", function() { return DeleteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DeleteComponent = /** @class */ (function () {
    function DeleteComponent(activeModal) {
        this.activeModal = activeModal;
    }
    DeleteComponent.prototype.ngOnInit = function () {
    };
    DeleteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-delete',
            template: __webpack_require__(/*! ./delete.component.html */ "./src/app/admin/services/delete/delete.component.html"),
            styles: [__webpack_require__(/*! ./delete.component.css */ "./src/app/admin/services/delete/delete.component.css")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"]])
    ], DeleteComponent);
    return DeleteComponent;
}());



/***/ }),

/***/ "./src/app/admin/services/detail/detail.component.css":
/*!************************************************************!*\
  !*** ./src/app/admin/services/detail/detail.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/services/detail/detail.component.html":
/*!*************************************************************!*\
  !*** ./src/app/admin/services/detail/detail.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n  <h4 class=\"modal-title\">{{title}}</h4>\n  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n<div class=\"modal-body\">\n  <p>Hello, detail form!</p>\n</div>\n<div class=\"modal-footer\">\n  <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"activeModal.close('Close click')\">Close</button>\n</div>"

/***/ }),

/***/ "./src/app/admin/services/detail/detail.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/admin/services/detail/detail.component.ts ***!
  \***********************************************************/
/*! exports provided: DetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailComponent", function() { return DetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DetailComponent = /** @class */ (function () {
    function DetailComponent(activeModal) {
        this.activeModal = activeModal;
    }
    DetailComponent.prototype.ngOnInit = function () {
    };
    DetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-detail',
            template: __webpack_require__(/*! ./detail.component.html */ "./src/app/admin/services/detail/detail.component.html"),
            styles: [__webpack_require__(/*! ./detail.component.css */ "./src/app/admin/services/detail/detail.component.css")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"]])
    ], DetailComponent);
    return DetailComponent;
}());



/***/ }),

/***/ "./src/app/admin/services/edit/edit.component.css":
/*!********************************************************!*\
  !*** ./src/app/admin/services/edit/edit.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/services/edit/edit.component.html":
/*!*********************************************************!*\
  !*** ./src/app/admin/services/edit/edit.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n    <h4 class=\"modal-title\">{{title}}</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <p>Hello, edit form!</p>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"activeModal.close('Close click')\">Close</button>\n  </div>\n  "

/***/ }),

/***/ "./src/app/admin/services/edit/edit.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/admin/services/edit/edit.component.ts ***!
  \*******************************************************/
/*! exports provided: EditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditComponent", function() { return EditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EditComponent = /** @class */ (function () {
    function EditComponent(activeModal) {
        this.activeModal = activeModal;
    }
    EditComponent.prototype.ngOnInit = function () {
    };
    EditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit',
            template: __webpack_require__(/*! ./edit.component.html */ "./src/app/admin/services/edit/edit.component.html"),
            styles: [__webpack_require__(/*! ./edit.component.css */ "./src/app/admin/services/edit/edit.component.css")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"]])
    ], EditComponent);
    return EditComponent;
}());



/***/ }),

/***/ "./src/app/admin/services/services-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/admin/services/services-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: ServicesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesRoutingModule", function() { return ServicesRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services.component */ "./src/app/admin/services/services.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '', component: _services_component__WEBPACK_IMPORTED_MODULE_2__["ServicesComponent"]
    }
];
var ServicesRoutingModule = /** @class */ (function () {
    function ServicesRoutingModule() {
    }
    ServicesRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], ServicesRoutingModule);
    return ServicesRoutingModule;
}());



/***/ }),

/***/ "./src/app/admin/services/services.component.css":
/*!*******************************************************!*\
  !*** ./src/app/admin/services/services.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/services/services.component.html":
/*!********************************************************!*\
  !*** ./src/app/admin/services/services.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\n  <div class=\"card\">\n    <div class=\"card-header\">\n      <div class=\"col\">\n        <h3>\n          <span>\n            <fa-icon [icon]=\"faWrench\"></fa-icon> &nbsp;&nbsp;Service\n          </span>\n        </h3>\n\n      </div>\n      <div class=\"col text-right\">\n        <button type=\"button\" class=\"btn btn-outline-primary\" (click)=\"add()\">\n          <fa-icon [icon]=\"faPlus\"></fa-icon>\n        </button>\n      </div>\n    </div>\n\n    <div class=\"card-body table-responsive\">\n      <table class=\"table table-bordered\">\n        <thead>\n          <tr>\n            <th scope=\"col\">#</th>\n            <th scope=\"col\">First</th>\n            <th scope=\"col\">Last</th>\n            <th scope=\"col\">Handle</th>\n            <th scope=\"col\">Action</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr>\n            <th scope=\"row\">1</th>\n            <td>Mark</td>\n            <td>Otto</td>\n            <td>@mdo</td>\n            <td>\n                <button type=\"button\" class=\"btn btn-outline-primary\" (click)=\"edit()\">\n                  <fa-icon [icon]=\"faPenSquare\"></fa-icon>\n                </button>\n                <button type=\"button\" class=\"btn btn-outline-primary\" (click)=\"delete()\">\n                  <fa-icon [icon]=\"faTrash\"></fa-icon>\n                </button>\n              </td>\n          </tr>\n          <tr>\n            <th scope=\"row\">2</th>\n            <td>Jacob</td>\n            <td>Thornton</td>\n            <td>@fat</td>\n            <td>\n                <button type=\"button\" class=\"btn btn-outline-primary\" (click)=\"edit()\">\n                  <fa-icon [icon]=\"faPenSquare\"></fa-icon>\n                </button>\n                <button type=\"button\" class=\"btn btn-outline-primary\" (click)=\"delete()\">\n                  <fa-icon [icon]=\"faTrash\"></fa-icon>\n                </button>\n              </td>\n          </tr>\n          \n          <tr>\n              <th scope=\"row\">2</th>\n              <td>Jacob</td>\n              <td>Thornton</td>\n              <td>@fat</td>\n              <td>\n                  <button type=\"button\" class=\"btn btn-outline-primary\" (click)=\"edit()\">\n                    <fa-icon [icon]=\"faPenSquare\"></fa-icon>\n                  </button>\n                  <button type=\"button\" class=\"btn btn-outline-primary\" (click)=\"delete()\">\n                    <fa-icon [icon]=\"faTrash\"></fa-icon>\n                  </button>\n                </td>\n            </tr>\n\n        </tbody>\n      </table>\n\n    </div>\n\n    <div class=\"card-footer\">\n      <nav aria-label=\"Page navigation\">\n        <ul class=\"pagination justify-content-center\">\n          <li class=\"page-item disabled\">\n            <a class=\"page-link\" href=\"#\" aria-label=\"Previous\">\n              <span aria-hidden=\"true\">&laquo;</span>\n              <span class=\"sr-only\">Previous</span>\n            </a>\n          </li>\n          <li class=\"page-item active\"><a class=\"page-link\" href=\"#\">1</a></li>\n          <li class=\"page-item\"><a class=\"page-link\" href=\"#\">2</a></li>\n          <li class=\"page-item\"><a class=\"page-link\" href=\"#\">3</a></li>\n          <li class=\"page-item\"><a class=\"page-link\" href=\"#\">4</a></li>\n          <li class=\"page-item\"><a class=\"page-link\" href=\"#\">5</a></li>\n          <li class=\"page-item\">\n            <a class=\"page-link\" href=\"#\" aria-label=\"Next\">\n              <span aria-hidden=\"true\">&raquo;</span>\n              <span class=\"sr-only\">Next</span>\n            </a>\n          </li>\n        </ul>\n      </nav>\n    </div>\n\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/admin/services/services.component.ts":
/*!******************************************************!*\
  !*** ./src/app/admin/services/services.component.ts ***!
  \******************************************************/
/*! exports provided: ServicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesComponent", function() { return ServicesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _create_create_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./create/create.component */ "./src/app/admin/services/create/create.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/admin/services/edit/edit.component.ts");
/* harmony import */ var _delete_delete_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./delete/delete.component */ "./src/app/admin/services/delete/delete.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ServicesComponent = /** @class */ (function () {
    function ServicesComponent(modalService) {
        this.modalService = modalService;
        this.faWrench = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faWrench"];
        this.faPlus = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faPlus"];
        this.faPenSquare = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faPenSquare"];
        this.faTrash = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faTrash"];
    }
    ServicesComponent.prototype.add = function () {
        var modalRef = this.modalService.open(_create_create_component__WEBPACK_IMPORTED_MODULE_3__["CreateComponent"], { size: 'lg' });
        modalRef.componentInstance.name = 'World';
    };
    ServicesComponent.prototype.edit = function () {
        this.modalService.open(_edit_edit_component__WEBPACK_IMPORTED_MODULE_4__["EditComponent"], { size: 'lg' });
    };
    ServicesComponent.prototype.delete = function () {
        this.modalService.open(_delete_delete_component__WEBPACK_IMPORTED_MODULE_5__["DeleteComponent"], { size: 'lg' });
    };
    ServicesComponent.prototype.ngOnInit = function () {
    };
    ServicesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-services',
            template: __webpack_require__(/*! ./services.component.html */ "./src/app/admin/services/services.component.html"),
            styles: [__webpack_require__(/*! ./services.component.css */ "./src/app/admin/services/services.component.css")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]])
    ], ServicesComponent);
    return ServicesComponent;
}());



/***/ }),

/***/ "./src/app/admin/services/services.module.ts":
/*!***************************************************!*\
  !*** ./src/app/admin/services/services.module.ts ***!
  \***************************************************/
/*! exports provided: ServicesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesModule", function() { return ServicesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _services_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services.component */ "./src/app/admin/services/services.component.ts");
/* harmony import */ var _services_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services-routing.module */ "./src/app/admin/services/services-routing.module.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");
/* harmony import */ var _create_create_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./create/create.component */ "./src/app/admin/services/create/create.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/admin/services/edit/edit.component.ts");
/* harmony import */ var _delete_delete_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./delete/delete.component */ "./src/app/admin/services/delete/delete.component.ts");
/* harmony import */ var _detail_detail_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./detail/detail.component */ "./src/app/admin/services/detail/detail.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var ServicesModule = /** @class */ (function () {
    function ServicesModule() {
    }
    ServicesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _services_routing_module__WEBPACK_IMPORTED_MODULE_3__["ServicesRoutingModule"],
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModule"]
            ],
            providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbActiveModal"]],
            entryComponents: [_create_create_component__WEBPACK_IMPORTED_MODULE_5__["CreateComponent"], _edit_edit_component__WEBPACK_IMPORTED_MODULE_6__["EditComponent"], _delete_delete_component__WEBPACK_IMPORTED_MODULE_7__["DeleteComponent"], _detail_detail_component__WEBPACK_IMPORTED_MODULE_8__["DetailComponent"]],
            declarations: [_services_component__WEBPACK_IMPORTED_MODULE_2__["ServicesComponent"], _create_create_component__WEBPACK_IMPORTED_MODULE_5__["CreateComponent"], _edit_edit_component__WEBPACK_IMPORTED_MODULE_6__["EditComponent"], _delete_delete_component__WEBPACK_IMPORTED_MODULE_7__["DeleteComponent"], _detail_detail_component__WEBPACK_IMPORTED_MODULE_8__["DetailComponent"]]
        })
    ], ServicesModule);
    return ServicesModule;
}());



/***/ })

}]);
//# sourceMappingURL=admin-services-services-module.js.map