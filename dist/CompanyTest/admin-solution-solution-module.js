(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-solution-solution-module"],{

/***/ "./src/app/admin/solution/create/create.component.css":
/*!************************************************************!*\
  !*** ./src/app/admin/solution/create/create.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/solution/create/create.component.html":
/*!*************************************************************!*\
  !*** ./src/app/admin/solution/create/create.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\r\n    <h4 class=\"modal-title\">{{title}}</h4>\r\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <p>Hello, {{name}}!</p>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"activeModal.close('Close click')\">Close</button>\r\n  </div>\r\n  "

/***/ }),

/***/ "./src/app/admin/solution/create/create.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/admin/solution/create/create.component.ts ***!
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
    CreateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create',
            template: __webpack_require__(/*! ./create.component.html */ "./src/app/admin/solution/create/create.component.html"),
            styles: [__webpack_require__(/*! ./create.component.css */ "./src/app/admin/solution/create/create.component.css")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"]])
    ], CreateComponent);
    return CreateComponent;
}());



/***/ }),

/***/ "./src/app/admin/solution/delete/delete.component.css":
/*!************************************************************!*\
  !*** ./src/app/admin/solution/delete/delete.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/solution/delete/delete.component.html":
/*!*************************************************************!*\
  !*** ./src/app/admin/solution/delete/delete.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\r\n    <h4 class=\"modal-title\">{{title}}</h4>\r\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <p>Hello, delete form!</p>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"activeModal.close('Close click')\">Close</button>\r\n  </div>\r\n  "

/***/ }),

/***/ "./src/app/admin/solution/delete/delete.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/admin/solution/delete/delete.component.ts ***!
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
            template: __webpack_require__(/*! ./delete.component.html */ "./src/app/admin/solution/delete/delete.component.html"),
            styles: [__webpack_require__(/*! ./delete.component.css */ "./src/app/admin/solution/delete/delete.component.css")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"]])
    ], DeleteComponent);
    return DeleteComponent;
}());



/***/ }),

/***/ "./src/app/admin/solution/detail/detail.component.css":
/*!************************************************************!*\
  !*** ./src/app/admin/solution/detail/detail.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/solution/detail/detail.component.html":
/*!*************************************************************!*\
  !*** ./src/app/admin/solution/detail/detail.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\r\n    <h4 class=\"modal-title\">{{title}}</h4>\r\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <p>Hello, detail form!</p>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"activeModal.close('Close click')\">Close</button>\r\n  </div>"

/***/ }),

/***/ "./src/app/admin/solution/detail/detail.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/admin/solution/detail/detail.component.ts ***!
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
            template: __webpack_require__(/*! ./detail.component.html */ "./src/app/admin/solution/detail/detail.component.html"),
            styles: [__webpack_require__(/*! ./detail.component.css */ "./src/app/admin/solution/detail/detail.component.css")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"]])
    ], DetailComponent);
    return DetailComponent;
}());



/***/ }),

/***/ "./src/app/admin/solution/edit/edit.component.css":
/*!********************************************************!*\
  !*** ./src/app/admin/solution/edit/edit.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/solution/edit/edit.component.html":
/*!*********************************************************!*\
  !*** ./src/app/admin/solution/edit/edit.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\r\n    <h4 class=\"modal-title\">{{title}}</h4>\r\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <p>Hello, edit form!</p>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"activeModal.close('Close click')\">Close</button>\r\n  </div>\r\n  "

/***/ }),

/***/ "./src/app/admin/solution/edit/edit.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/admin/solution/edit/edit.component.ts ***!
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
            template: __webpack_require__(/*! ./edit.component.html */ "./src/app/admin/solution/edit/edit.component.html"),
            styles: [__webpack_require__(/*! ./edit.component.css */ "./src/app/admin/solution/edit/edit.component.css")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"]])
    ], EditComponent);
    return EditComponent;
}());



/***/ }),

/***/ "./src/app/admin/solution/solution-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/admin/solution/solution-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: SolutionRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SolutionRoutingModule", function() { return SolutionRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _solution_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./solution.component */ "./src/app/admin/solution/solution.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '', component: _solution_component__WEBPACK_IMPORTED_MODULE_2__["SolutionComponent"]
    }
];
var SolutionRoutingModule = /** @class */ (function () {
    function SolutionRoutingModule() {
    }
    SolutionRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
            ],
        })
    ], SolutionRoutingModule);
    return SolutionRoutingModule;
}());



/***/ }),

/***/ "./src/app/admin/solution/solution.component.css":
/*!*******************************************************!*\
  !*** ./src/app/admin/solution/solution.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/solution/solution.component.html":
/*!********************************************************!*\
  !*** ./src/app/admin/solution/solution.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\r\n  <div class=\"card\">\r\n    <div class=\"card-header\">\r\n      <div class=\"col\">\r\n        <h3>\r\n          <span>\r\n            <fa-icon [icon]=\"faLayerGroup\"></fa-icon> &nbsp;&nbsp;Solution\r\n          </span>\r\n        </h3>\r\n\r\n      </div>\r\n      <div class=\"col text-right\">\r\n        <button type=\"button\" class=\"btn btn-outline-primary\" (click)=\"add()\">\r\n          <fa-icon [icon]=\"faPlus\"></fa-icon>\r\n        </button>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"card-body table-responsive\">\r\n      <table class=\"table table-bordered\">\r\n        <thead>\r\n          <tr>\r\n            <th scope=\"col\">#</th>\r\n            <th scope=\"col\">First</th>\r\n            <th scope=\"col\">Last</th>\r\n            <th scope=\"col\">Handle</th>\r\n            <th scope=\"col\">Action</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr>\r\n            <th scope=\"row\">1</th>\r\n            <td>Mark</td>\r\n            <td>Otto</td>\r\n            <td>@mdo</td>\r\n            <td>\r\n              <button type=\"button\" class=\"btn btn-outline-primary\" (click)=\"edit()\">\r\n                <fa-icon [icon]=\"faPenSquare\"></fa-icon>\r\n              </button>\r\n              <button type=\"button\" class=\"btn btn-outline-primary\" (click)=\"delete()\">\r\n                <fa-icon [icon]=\"faTrash\"></fa-icon>\r\n              </button>\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <th scope=\"row\">2</th>\r\n            <td>Jacob</td>\r\n            <td>Thornton</td>\r\n            <td>@fat</td>\r\n            <td>\r\n              <button type=\"button\" class=\"btn btn-outline-primary\" (click)=\"edit()\">\r\n                <fa-icon [icon]=\"faPenSquare\"></fa-icon>\r\n              </button>\r\n              <button type=\"button\" class=\"btn btn-outline-primary\" (click)=\"delete()\">\r\n                <fa-icon [icon]=\"faTrash\"></fa-icon>\r\n              </button>\r\n            </td>\r\n          </tr>\r\n\r\n          <tr>\r\n            <th scope=\"row\">2</th>\r\n            <td>Jacob</td>\r\n            <td>Thornton</td>\r\n            <td>@fat</td>\r\n            <td>\r\n              <button type=\"button\" class=\"btn btn-outline-primary\" (click)=\"edit()\">\r\n                <fa-icon [icon]=\"faPenSquare\"></fa-icon>\r\n              </button>\r\n              <button type=\"button\" class=\"btn btn-outline-primary\" (click)=\"delete()\">\r\n                <fa-icon [icon]=\"faTrash\"></fa-icon>\r\n              </button>\r\n            </td>\r\n          </tr>\r\n\r\n        </tbody>\r\n      </table>\r\n\r\n    </div>\r\n\r\n    <div class=\"card-footer\">\r\n      <nav aria-label=\"Page navigation\">\r\n        <ul class=\"pagination justify-content-center\">\r\n          <li class=\"page-item disabled\">\r\n            <a class=\"page-link\" href=\"#\" aria-label=\"Previous\">\r\n              <span aria-hidden=\"true\">&laquo;</span>\r\n              <span class=\"sr-only\">Previous</span>\r\n            </a>\r\n          </li>\r\n          <li class=\"page-item active\"><a class=\"page-link\" href=\"#\">1</a></li>\r\n          <li class=\"page-item\"><a class=\"page-link\" href=\"#\">2</a></li>\r\n          <li class=\"page-item\"><a class=\"page-link\" href=\"#\">3</a></li>\r\n          <li class=\"page-item\"><a class=\"page-link\" href=\"#\">4</a></li>\r\n          <li class=\"page-item\"><a class=\"page-link\" href=\"#\">5</a></li>\r\n          <li class=\"page-item\">\r\n            <a class=\"page-link\" href=\"#\" aria-label=\"Next\">\r\n              <span aria-hidden=\"true\">&raquo;</span>\r\n              <span class=\"sr-only\">Next</span>\r\n            </a>\r\n          </li>\r\n        </ul>\r\n      </nav>\r\n    </div>\r\n\r\n\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/admin/solution/solution.component.ts":
/*!******************************************************!*\
  !*** ./src/app/admin/solution/solution.component.ts ***!
  \******************************************************/
/*! exports provided: SolutionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SolutionComponent", function() { return SolutionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _solution_create_create_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../solution/create/create.component */ "./src/app/admin/solution/create/create.component.ts");
/* harmony import */ var _solution_edit_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../solution/edit/edit.component */ "./src/app/admin/solution/edit/edit.component.ts");
/* harmony import */ var _solution_delete_delete_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../solution/delete/delete.component */ "./src/app/admin/solution/delete/delete.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SolutionComponent = /** @class */ (function () {
    function SolutionComponent(modalService) {
        this.modalService = modalService;
        this.faLayerGroup = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faLayerGroup"];
        this.faPlus = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faPlus"];
        this.faPenSquare = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faPenSquare"];
        this.faTrash = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faTrash"];
    }
    SolutionComponent.prototype.add = function () {
        var modalRef = this.modalService.open(_solution_create_create_component__WEBPACK_IMPORTED_MODULE_3__["CreateComponent"], { size: 'lg' });
        modalRef.componentInstance.name = 'World';
    };
    SolutionComponent.prototype.edit = function () {
        this.modalService.open(_solution_edit_edit_component__WEBPACK_IMPORTED_MODULE_4__["EditComponent"], { size: 'lg' });
    };
    SolutionComponent.prototype.delete = function () {
        this.modalService.open(_solution_delete_delete_component__WEBPACK_IMPORTED_MODULE_5__["DeleteComponent"], { size: 'lg' });
    };
    SolutionComponent.prototype.ngOnInit = function () {
    };
    SolutionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-solution',
            template: __webpack_require__(/*! ./solution.component.html */ "./src/app/admin/solution/solution.component.html"),
            styles: [__webpack_require__(/*! ./solution.component.css */ "./src/app/admin/solution/solution.component.css")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]])
    ], SolutionComponent);
    return SolutionComponent;
}());



/***/ }),

/***/ "./src/app/admin/solution/solution.module.ts":
/*!***************************************************!*\
  !*** ./src/app/admin/solution/solution.module.ts ***!
  \***************************************************/
/*! exports provided: SolutionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SolutionModule", function() { return SolutionModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _solution_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./solution.component */ "./src/app/admin/solution/solution.component.ts");
/* harmony import */ var _solution_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./solution-routing.module */ "./src/app/admin/solution/solution-routing.module.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");
/* harmony import */ var _solution_detail_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../solution/detail/detail.component */ "./src/app/admin/solution/detail/detail.component.ts");
/* harmony import */ var _solution_create_create_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../solution/create/create.component */ "./src/app/admin/solution/create/create.component.ts");
/* harmony import */ var _solution_edit_edit_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../solution/edit/edit.component */ "./src/app/admin/solution/edit/edit.component.ts");
/* harmony import */ var _solution_delete_delete_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../solution/delete/delete.component */ "./src/app/admin/solution/delete/delete.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var SolutionModule = /** @class */ (function () {
    function SolutionModule() {
    }
    SolutionModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _solution_routing_module__WEBPACK_IMPORTED_MODULE_3__["SolutionRoutingModule"],
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModule"],
            ],
            providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbActiveModal"]],
            entryComponents: [_solution_detail_detail_component__WEBPACK_IMPORTED_MODULE_5__["DetailComponent"], _solution_create_create_component__WEBPACK_IMPORTED_MODULE_6__["CreateComponent"], _solution_edit_edit_component__WEBPACK_IMPORTED_MODULE_7__["EditComponent"], _solution_delete_delete_component__WEBPACK_IMPORTED_MODULE_8__["DeleteComponent"]],
            declarations: [_solution_component__WEBPACK_IMPORTED_MODULE_2__["SolutionComponent"], _solution_detail_detail_component__WEBPACK_IMPORTED_MODULE_5__["DetailComponent"], _solution_create_create_component__WEBPACK_IMPORTED_MODULE_6__["CreateComponent"], _solution_edit_edit_component__WEBPACK_IMPORTED_MODULE_7__["EditComponent"], _solution_delete_delete_component__WEBPACK_IMPORTED_MODULE_8__["DeleteComponent"]]
        })
    ], SolutionModule);
    return SolutionModule;
}());



/***/ })

}]);
//# sourceMappingURL=admin-solution-solution-module.js.map