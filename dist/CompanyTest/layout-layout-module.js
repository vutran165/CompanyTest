(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layout-layout-module"],{

/***/ "./node_modules/ngx-owl-carousel/index.js":
/*!************************************************!*\
  !*** ./node_modules/ngx-owl-carousel/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var common_1 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var owl_carousel_component_1 = __webpack_require__(/*! ./src/owl-carousel.component */ "./node_modules/ngx-owl-carousel/src/owl-carousel.component.js");
var owl_child_component_1 = __webpack_require__(/*! ./src/owl-child.component */ "./node_modules/ngx-owl-carousel/src/owl-child.component.js");
__export(__webpack_require__(/*! ./src/owl-carousel.component */ "./node_modules/ngx-owl-carousel/src/owl-carousel.component.js"));
var OwlModule = (function () {
    function OwlModule() {
    }
    OwlModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule
            ],
            declarations: [
                owl_carousel_component_1.OwlCarousel, owl_child_component_1.OwlChild
            ],
            exports: [
                owl_carousel_component_1.OwlCarousel
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], OwlModule);
    return OwlModule;
}());
exports.OwlModule = OwlModule;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/ngx-owl-carousel/src/owl-carousel.component.js":
/*!*********************************************************************!*\
  !*** ./node_modules/ngx-owl-carousel/src/owl-carousel.component.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var owl_child_component_1 = __webpack_require__(/*! ./owl-child.component */ "./node_modules/ngx-owl-carousel/src/owl-child.component.js");
var OwlCarousel = (function () {
    function OwlCarousel(differs) {
        this.differs = differs;
        this.carouselClasses = '';
        this.options = {};
    }
    Object.defineProperty(OwlCarousel.prototype, "items", {
        set: function (coll) {
            this._items = coll;
            if (coll && !this.differ) {
                this.differ = this.differs.find(coll).create(null);
            }
        },
        enumerable: true,
        configurable: true
    });
    OwlCarousel.prototype.ngDoCheck = function () {
        if (this.differ) {
            var changes = this.differ.diff(this._items);
            if (changes) {
                var changed_1 = false;
                var changedFn = function () {
                    changed_1 = true;
                };
                changes.forEachAddedItem(changedFn);
                changes.forEachMovedItem(changedFn);
                changes.forEachRemovedItem(changedFn);
                if (changed_1) {
                    this.reInit();
                }
            }
        }
    };
    OwlCarousel.prototype.reInit = function () {
        var _this = this;
        if (this.$owlChild.$owl) {
            this.$owlChild.$owl.css('display', 'none');
        }
        setTimeout(function () {
            _this.$owlChild.destroyOwl();
            if (_this.$owlChild.$owl) {
                var itemLength = _this._items && _this._items.length;
                if (itemLength && itemLength <= _this.$owlChild.currentSlideIndex) {
                    _this.$owlChild.currentSlideIndex = itemLength;
                }
                _this.$owlChild.$owl.css('display', 'block');
            }
            _this.$owlChild.initOwl();
        }, 0);
    };
    OwlCarousel.prototype.refresh = function () {
        this.trigger('refresh.owl.carousel');
    };
    OwlCarousel.prototype.next = function (options) {
        this.trigger('next.owl.carousel', options);
    };
    OwlCarousel.prototype.previous = function (options) {
        this.trigger('prev.owl.carousel', options);
    };
    OwlCarousel.prototype.to = function (options) {
        this.trigger('to.owl.carousel', options);
    };
    OwlCarousel.prototype.trigger = function (action, options) {
        this.$owlChild.trigger(action, options);
    };
    __decorate([
        core_1.ViewChild('owl'), 
        __metadata('design:type', owl_child_component_1.OwlChild)
    ], OwlCarousel.prototype, "$owlChild", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], OwlCarousel.prototype, "carouselClasses", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], OwlCarousel.prototype, "options", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array), 
        __metadata('design:paramtypes', [Array])
    ], OwlCarousel.prototype, "items", null);
    OwlCarousel = __decorate([
        core_1.Component({
            selector: 'owl-carousel',
            template: '<owl-carousel-child #owl [ngClass]="carouselClasses" [options]="options" >' +
                '<ng-content></ng-content></owl-carousel-child>',
        }), 
        __metadata('design:paramtypes', [core_1.IterableDiffers])
    ], OwlCarousel);
    return OwlCarousel;
}());
exports.OwlCarousel = OwlCarousel;
//# sourceMappingURL=owl-carousel.component.js.map

/***/ }),

/***/ "./node_modules/ngx-owl-carousel/src/owl-child.component.js":
/*!******************************************************************!*\
  !*** ./node_modules/ngx-owl-carousel/src/owl-child.component.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var OwlChild = (function () {
    function OwlChild(el) {
        this.el = el;
        this.owlClass = true;
        this.options = {};
        if (typeof $ === 'undefined' && typeof jQuery !== 'undefined') {
            $ = jQuery;
        }
    }
    OwlChild.prototype.ngOnInit = function () {
        if ((typeof window !== 'undefined') && $ && typeof $.fn.owlCarousel === 'function') {
            this.$owl = $(this.el.nativeElement);
        }
    };
    OwlChild.prototype.ngAfterViewInit = function () {
        this.initOwl();
    };
    OwlChild.prototype.initOwl = function () {
        var _this = this;
        if (this.$owl) {
            var options = {};
            Object.assign(options, this.options);
            if (this.currentSlideIndex) {
                options.startPosition = this.currentSlideIndex;
            }
            this.$owl.owlCarousel(options);
            this.$owl.on('changed.owl.carousel', function (event) {
                _this.currentSlideIndex = event.item.index;
            });
        }
    };
    OwlChild.prototype.trigger = function (action, options) {
        if (this.$owl) {
            this.$owl.trigger(action, options);
        }
    };
    OwlChild.prototype.ngOnDestroy = function () {
        this.destroyOwl();
        delete this.$owl;
    };
    OwlChild.prototype.destroyOwl = function () {
        if (this.$owl) {
            this.$owl.trigger('destroy.owl.carousel')
                .removeClass('owl-loaded owl-hidden')
                .find('.owl-stage:empty, .owl-item:empty')
                .remove();
        }
    };
    __decorate([
        core_1.HostBinding('class.owl-carousel'), 
        __metadata('design:type', Object)
    ], OwlChild.prototype, "owlClass", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], OwlChild.prototype, "options", void 0);
    OwlChild = __decorate([
        core_1.Component({
            selector: 'owl-carousel-child',
            template: '<ng-content></ng-content>'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], OwlChild);
    return OwlChild;
}());
exports.OwlChild = OwlChild;
//# sourceMappingURL=owl-child.component.js.map

/***/ }),

/***/ "./src/app/layout/about-web/about-web.component.css":
/*!**********************************************************!*\
  !*** ./src/app/layout/about-web/about-web.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "section {\r\n    position: relative;\r\n    padding: 100px 0;\r\n  }\r\n\r\n#about  h2 {\r\n  text-align: center;\r\n  padding: 8px;\r\n}"

/***/ }),

/***/ "./src/app/layout/about-web/about-web.component.html":
/*!***********************************************************!*\
  !*** ./src/app/layout/about-web/about-web.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"about\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6 col-sm-12\">\r\n        <h2>ABOUT US</h2>\r\n        <img src=\"assets/images/courses-image1.jpg\" alt=\"\" class=\"img-fluid\" />\r\n        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus interdum erat\r\n          libero, pulvinar tincidunt leo consectetur eget. Curabitur lacinia pellentesque\r\n          libero, pulvinar tincidunt leo consectetur eget. Curabitur lacinia pellentesque\r\n          libero, pulvinar tincidunt leo consectetur eget. Curabitur lacinia pellentesque</p>\r\n      </div>\r\n      <div class=\"col-md-6 col-sm-12\">\r\n        <h2>Template built with Twitter Bootstrap</h2>\r\n        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus interdum erat\r\n          libero, pulvinar tincidunt leo consectetur eget. Curabitur lacinia pellentesque\r\n          libero, pulvinar tincidunt leo consectetur eget. Curabitur lacinia pellentesque\r\n          libero, pulvinar tincidunt leo consectetur eget. Curabitur lacinia pellentesque\r\n          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus interdum erat\r\n            libero, pulvinar tincidunt leo consectetur eget. Curabitur lacinia pellentesque\r\n            libero, pulvinar tincidunt leo consectetur eget. Curabitur lacinia pellentesque\r\n            libero, pulvinar tincidunt leo consectetur eget. Curabitur lacinia pellentesque\r\n          </p>\r\n          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus interdum erat libero, pulvinar\r\n            tincidunt leo consectetur eget.\r\n            Curabitur lacinia pellentesque libero, pulvinar tincidunt leo consectetur eget.\r\n            Curabitur lacinia pellentesque libero, pulvinar tincidunt leo consectetur eget. Curabitur lacinia\r\n            pellentesque </p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>"

/***/ }),

/***/ "./src/app/layout/about-web/about-web.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/layout/about-web/about-web.component.ts ***!
  \*********************************************************/
/*! exports provided: AboutWebComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutWebComponent", function() { return AboutWebComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutWebComponent = /** @class */ (function () {
    function AboutWebComponent() {
    }
    AboutWebComponent.prototype.ngOnInit = function () {
    };
    AboutWebComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about-web',
            template: __webpack_require__(/*! ./about-web.component.html */ "./src/app/layout/about-web/about-web.component.html"),
            styles: [__webpack_require__(/*! ./about-web.component.css */ "./src/app/layout/about-web/about-web.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutWebComponent);
    return AboutWebComponent;
}());



/***/ }),

/***/ "./src/app/layout/contact-web/contact-web.component.css":
/*!**************************************************************!*\
  !*** ./src/app/layout/contact-web/contact-web.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "section {\r\n  position: relative;\r\n  padding: 100px 0;\r\n}\r\n\r\n\r\n#contact {\r\n    background: #3f51b5;\r\n    padding: 60px 0;\r\n  }\r\n\r\n\r\n#contact h2 {\r\n    color: #ffffff;\r\n  }\r\n\r\n\r\n#contact .section-title {\r\n    padding-bottom: 20px;\r\n  }\r\n\r\n\r\n#contact h2 > small,\r\n  #contact p,\r\n  #contact a {\r\n    color: #f9f9f9;\r\n  }\r\n\r\n\r\n#contact-form {\r\n    padding: 1em 0;\r\n  }\r\n\r\n\r\n#contact-form .col-md-12,\r\n  #contact-form .col-md-4 {\r\n    padding-left: 0;\r\n  }\r\n\r\n\r\n#contact-form .form-control {\r\n    border: 0;\r\n    border-radius: 5px;\r\n    box-shadow: none;\r\n    margin: 10px 0;\r\n  }\r\n\r\n\r\n#contact-form input {\r\n    height: 50px;\r\n  }\r\n\r\n\r\n#contact-form input[type='submit'] {\r\n    border-radius: 50px;\r\n    border: 1px solid transparent;\r\n  }\r\n\r\n\r\n#contact-form input[type='submit']:hover {\r\n    background: transparent;\r\n    border-color: #ffffff;\r\n    color: #ffffff;\r\n  }\r\n\r\n\r\n#contact #contact-form input .custom-contact{\r\n  margin-left: 100%;\r\n}\r\n\r\n\r\n/* google map angular */\r\n\r\n\r\nagm-map {\r\n    height: 300px;\r\n  }"

/***/ }),

/***/ "./src/app/layout/contact-web/contact-web.component.html":
/*!***************************************************************!*\
  !*** ./src/app/layout/contact-web/contact-web.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- CONTACT -->\r\n<section id=\"contact\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n\r\n      <div class=\"col-md-6 col-sm-12\">\r\n        <form id=\"contact-form\" role=\"form\" action=\"\" method=\"post\">\r\n          <div class=\"section-title\">\r\n            <h2>Contact us <small>we love conversations. let us talk!</small></h2>\r\n          </div>\r\n          <div class=\"col-md-12 col-sm-12\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"Enter full name\" name=\"name\" required=\"\">\r\n\r\n            <input type=\"email\" class=\"form-control\" placeholder=\"Enter email address\" name=\"email\" required=\"\">\r\n\r\n            <textarea class=\"form-control\" rows=\"6\" placeholder=\"Tell us about your message\" name=\"message\" required=\"\"></textarea>\r\n          </div>\r\n          <div class=\"col-md-4 col-sm-12 custom-contact\">\r\n            <input type=\"submit\" class=\"form-control\" name=\"send message\" value=\"Send Message\">\r\n          </div>\r\n        </form>\r\n      </div>\r\n\r\n      <div class=\"col-md-6 col-sm-12\">\r\n        <div class=\"contact-image\">\r\n          <img src=\"assets/images/contact-image.jpg\" class=\"img-fluid\" alt=\"Smiling Two Girls\">\r\n          <!-- <agm-map [latitude]=\"lat\" [longitude]=\"lng\" class=\"img-fluid\">\r\n            <agm-marker [latitude]=\"lat\" [longitude]=\"lng\"></agm-marker>\r\n          </agm-map> -->\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>"

/***/ }),

/***/ "./src/app/layout/contact-web/contact-web.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/layout/contact-web/contact-web.component.ts ***!
  \*************************************************************/
/*! exports provided: ContactWebComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactWebComponent", function() { return ContactWebComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactWebComponent = /** @class */ (function () {
    function ContactWebComponent() {
    }
    ContactWebComponent.prototype.ngOnInit = function () {
    };
    ContactWebComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact-web',
            template: __webpack_require__(/*! ./contact-web.component.html */ "./src/app/layout/contact-web/contact-web.component.html"),
            styles: [__webpack_require__(/*! ./contact-web.component.css */ "./src/app/layout/contact-web/contact-web.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactWebComponent);
    return ContactWebComponent;
}());



/***/ }),

/***/ "./src/app/layout/customer-web/customer-web.component.css":
/*!****************************************************************!*\
  !*** ./src/app/layout/customer-web/customer-web.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/customer-web/customer-web.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/layout/customer-web/customer-web.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"sec-our-customers\">\r\n  <div class=\"container content-sm\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12 text-center\">\r\n        <h2>OUR CUSTOMERS</h2>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-3 col-sm-6 col-xs-6 text-center margin-bottom-60\">\r\n        <a href=\"https://www.hotschedules.com/\" target=\"_blank\">\r\n          <img src=\"https://www.kms-technology.com/wp-content/uploads/2018/02/our-customer-01.png\">\r\n        </a>\r\n      </div>\r\n      <div class=\"col-md-3 col-sm-6 col-xs-6 text-center margin-bottom-60\">\r\n        <a href=\"https://www.ert.com/\" target=\"_blank\">\r\n          <img src=\"https://www.kms-technology.com/wp-content/uploads/2018/02/our-customer-02.png\">\r\n        </a>\r\n      </div>\r\n      <div class=\"col-md-3 col-sm-6 col-xs-6 text-center margin-bottom-60\">\r\n        <a href=\"https://www.lexisnexis.com\" target=\"_blank\">\r\n          <img src=\"https://www.kms-technology.com/wp-content/uploads/2018/02/our-customer-03.png\">\r\n        </a>\r\n      </div>\r\n      <div class=\"col-md-3 col-sm-6 col-xs-6 text-center margin-bottom-60\">\r\n        <a href=\"https://kibocommerce.com/\" target=\"_blank\">\r\n          <img src=\"https://www.kms-technology.com/wp-content/uploads/2018/02/our-customer-04.png\">\r\n        </a>\r\n      </div>\r\n      <div class=\"col-md-3 col-sm-6 col-xs-6 text-center margin-bottom-60\">\r\n        <a href=\"https://www.autotrader.com/\" target=\"_blank\">\r\n          <img src=\"https://www.kms-technology.com/wp-content/uploads/2018/02/our-customer-05.png\">\r\n        </a>\r\n      </div>\r\n      <div class=\"col-md-3 col-sm-6 col-xs-6 text-center margin-bottom-60\">\r\n        <a href=\"https://www.coxautoinc.com/\" target=\"_blank\">\r\n          <img src=\"https://www.kms-technology.com/wp-content/uploads/2018/02/our-customer-06.png\">\r\n        </a>\r\n      </div>\r\n      <div class=\"col-md-3 col-sm-6 col-xs-6 text-center margin-bottom-60\">\r\n        <a href=\"https://www.sandata.com/\" target=\"_blank\">\r\n          <img src=\"https://www.kms-technology.com/wp-content/uploads/2018/02/our-customer-07.png\">\r\n        </a>\r\n      </div>\r\n      <div class=\"col-md-3 col-sm-6 col-xs-6 text-center margin-bottom-60\">\r\n        <a href=\"https://www.revegy.com/\" target=\"_blank\">\r\n          <img src=\"https://www.kms-technology.com/wp-content/uploads/2018/02/our-customer-08.png\">\r\n        </a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>"

/***/ }),

/***/ "./src/app/layout/customer-web/customer-web.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/layout/customer-web/customer-web.component.ts ***!
  \***************************************************************/
/*! exports provided: CustomerWebComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerWebComponent", function() { return CustomerWebComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CustomerWebComponent = /** @class */ (function () {
    function CustomerWebComponent() {
    }
    CustomerWebComponent.prototype.ngOnInit = function () {
    };
    CustomerWebComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-customer-web',
            template: __webpack_require__(/*! ./customer-web.component.html */ "./src/app/layout/customer-web/customer-web.component.html"),
            styles: [__webpack_require__(/*! ./customer-web.component.css */ "./src/app/layout/customer-web/customer-web.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CustomerWebComponent);
    return CustomerWebComponent;
}());



/***/ }),

/***/ "./src/app/layout/features-web/detail-features-web/detail-features-web.component.css":
/*!*******************************************************************************************!*\
  !*** ./src/app/layout/features-web/detail-features-web/detail-features-web.component.css ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/features-web/detail-features-web/detail-features-web.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/layout/features-web/detail-features-web/detail-features-web.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-detail\">\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title\">{{title}}</h4>\r\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <p>Hello, edit form!</p>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"activeModal.close('Close click')\">Close</button>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/layout/features-web/detail-features-web/detail-features-web.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/layout/features-web/detail-features-web/detail-features-web.component.ts ***!
  \******************************************************************************************/
/*! exports provided: DetailFeaturesWebComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailFeaturesWebComponent", function() { return DetailFeaturesWebComponent; });
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


var DetailFeaturesWebComponent = /** @class */ (function () {
    function DetailFeaturesWebComponent(activeModal) {
        this.activeModal = activeModal;
    }
    DetailFeaturesWebComponent.prototype.ngOnInit = function () {
    };
    DetailFeaturesWebComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-detail-features-web',
            template: __webpack_require__(/*! ./detail-features-web.component.html */ "./src/app/layout/features-web/detail-features-web/detail-features-web.component.html"),
            styles: [__webpack_require__(/*! ./detail-features-web.component.css */ "./src/app/layout/features-web/detail-features-web/detail-features-web.component.css")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"]])
    ], DetailFeaturesWebComponent);
    return DetailFeaturesWebComponent;
}());



/***/ }),

/***/ "./src/app/layout/features-web/features-web.component.css":
/*!****************************************************************!*\
  !*** ./src/app/layout/features-web/features-web.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " /*---------------------------------------\r\n      FEATURE              \r\n  -----------------------------------------*/\r\n\r\n  h2 {\r\n    padding-bottom: 10px;\r\n    font-weight: bold;\r\n    line-height: inherit;\r\n    text-align: center;\r\n  }\r\n\r\n  section {\r\n    position: relative;\r\n    padding: 100px 0;\r\n  }\r\n\r\n  /*Services*/\r\n\r\n  .site-padding{\r\n    padding:70px 0;\r\n  }\r\n\r\n  .site-padding h3 {\r\n  text-align:center;\r\n  padding: 18px 0;\r\n}\r\n\r\n  .site-padding .container {\r\n   padding: 8px 0;\r\n}\r\n\r\n  .site-padding button.readmore {\r\n  border: none ;\r\n  border-radius: 8px;\r\n  background-color: #a1a1a1;\r\n  color: black;\r\n  padding: 5px 5px;\r\n}\r\n\r\n  .site-padding .readmore:hover {\r\n  cursor: pointer;\r\n  background-color: #29ca8e;\r\n}\r\n\r\n  .title h3 span{\r\n\tcolor:#00bcd4;\r\n}\r\n\r\n  .title{\r\n\tmargin-bottom:50px;\r\n}\r\n\r\n  #features{\r\n\tbackground:#f5fcfd;\r\n}\r\n\r\n  .feature-icon i{\r\n\tfont-size:50px;\r\n\tcolor:#a1a1a1;\r\n}\r\n\r\n  .feature-text h4{\r\n\tfont-size:16px;\r\n\ttext-transform:uppercase;\r\n}\r\n\r\n  .feature-text p{\r\n\tmargin:5px 0;\r\n}\r\n\r\n  .feature-text a{\r\n\tfont-size:13px;\r\n\tcolor:#00bcd4;\r\n\ttext-transform:uppercase;\r\n\tfont-weight:500;\r\n\tfont-family: 'Montserrat', sans-serif;\r\n}\r\n\r\n  .single-feature{\r\n\tmargin-bottom:30px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/layout/features-web/features-web.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/layout/features-web/features-web.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- FEATURE -->\r\n<section id=\"features\" class=\"site-padding\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-12\">\r\n        <h3>Our <span>Services</span></h3>\r\n      </div>\r\n    </div>\r\n  </div>\r\n<!-- single feature -->\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-4\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-12\">\r\n            <div class=\"feature-text\">\r\n              <h4>Lorem ipsum dolor sit amet</h4>\r\n              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et\r\n                dolore magna aliqua. Ut enim ad minim veniam</p>\r\n              <button type=\"button\" class=\"readmore\" (click)=\"readmore()\">Read More</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-sm-4\">\r\n        <div class=\"row\">\r\n         \r\n          <div class=\"col-md-12\">\r\n            <div class=\"feature-text\">\r\n              <h4>Lorem ipsum dolor sit amet</h4>\r\n              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et\r\n                dolore magna aliqua. Ut enim ad minim veniam</p>\r\n                <button type=\"button\" class=\"readmore\" (click)=\"readmore()\">Read More</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-sm-4\">\r\n        <div class=\"row\">\r\n         \r\n          <div class=\"col-md-12\">\r\n            <div class=\"feature-text\">\r\n              <h4>Lorem ipsum dolor sit amet</h4>\r\n              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et\r\n                dolore magna aliqua. Ut enim ad minim veniam</p>\r\n                <button type=\"button\" class=\"readmore\" (click)=\"readmore()\">Read More</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- single feature -->\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-4\">\r\n        <div class=\"row\">         \r\n          <div class=\"col-md-12\">\r\n            <div class=\"feature-text\">\r\n              <h4>Lorem ipsum dolor sit amet</h4>\r\n              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et\r\n                dolore magna aliqua. Ut enim ad minim veniam</p>\r\n                <button type=\"button\" class=\"readmore\" (click)=\"readmore()\">Read More</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-sm-4\">\r\n        <div class=\"row\">\r\n        \r\n          <div class=\"col-md-12\">\r\n            <div class=\"feature-text\">\r\n              <h4>Lorem ipsum dolor sit amet</h4>\r\n              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et\r\n                dolore magna aliqua. Ut enim ad minim veniam</p>\r\n                <button type=\"button\" class=\"readmore\" (click)=\"readmore()\">Read More</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-sm-4\">\r\n        <div class=\"row\">\r\n         \r\n          <div class=\"col-md-12\">\r\n            <div class=\"feature-text\">\r\n              <h4>Lorem ipsum dolor sit amet</h4>\r\n              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et\r\n                dolore magna aliqua. Ut enim ad minim veniam</p>\r\n                <button type=\"button\" class=\"readmore\" (click)=\"readmore()\">Read More</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n</section>"

/***/ }),

/***/ "./src/app/layout/features-web/features-web.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/layout/features-web/features-web.component.ts ***!
  \***************************************************************/
/*! exports provided: FeaturesWebComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeaturesWebComponent", function() { return FeaturesWebComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _detail_features_web_detail_features_web_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./detail-features-web/detail-features-web.component */ "./src/app/layout/features-web/detail-features-web/detail-features-web.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FeaturesWebComponent = /** @class */ (function () {
    function FeaturesWebComponent(modalService) {
        this.modalService = modalService;
    }
    FeaturesWebComponent.prototype.readmore = function () {
        var modalRef = this.modalService.open(_detail_features_web_detail_features_web_component__WEBPACK_IMPORTED_MODULE_2__["DetailFeaturesWebComponent"], { size: 'lg' });
        modalRef.componentInstance.name = 'Done';
    };
    FeaturesWebComponent.prototype.ngOnInit = function () {
    };
    FeaturesWebComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-features-web',
            template: __webpack_require__(/*! ./features-web.component.html */ "./src/app/layout/features-web/features-web.component.html"),
            styles: [__webpack_require__(/*! ./features-web.component.css */ "./src/app/layout/features-web/features-web.component.css")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]])
    ], FeaturesWebComponent);
    return FeaturesWebComponent;
}());



/***/ }),

/***/ "./src/app/layout/footer-web/footer-web.component.css":
/*!************************************************************!*\
  !*** ./src/app/layout/footer-web/footer-web.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n  /*---------------------------------------\r\n     FOOTER              \r\n  -----------------------------------------*/\r\n\r\n  footer {\r\n    background: #252020;\r\n    padding: 120px 0;\r\n  }\r\n\r\n  footer .section-title {\r\n    padding-bottom: 10px;\r\n  }\r\n\r\n  footer h2 {\r\n    font-size: 20px;\r\n  }\r\n\r\n  footer a,\r\n  footer p {\r\n    color: #909090;\r\n  }\r\n\r\n  footer strong {\r\n    color: #d9d9d9;\r\n  }\r\n\r\n  footer address p {\r\n    margin-bottom: 0;\r\n  }\r\n\r\n  footer .social-icon {\r\n    margin-top: 25px;\r\n  }\r\n\r\n  .footer-info {\r\n    margin-right: 2em;\r\n  }\r\n\r\n  .footer-info h2 {\r\n    color: #ffffff;\r\n    padding: 0;\r\n  }\r\n\r\n  .footer_menu h2 {\r\n    margin-top: 2em;\r\n  }\r\n\r\n  .footer_menu ul {\r\n    margin: 0;\r\n    padding: 0;\r\n  }\r\n\r\n  .footer_menu li {\r\n    display: inline-block;\r\n    list-style: none;\r\n    margin: 5px 10px 5px 0;\r\n  }\r\n\r\n  .newsletter-form .form-control {\r\n    background: transparent;\r\n    border-radius: 0;\r\n    box-shadow: none;\r\n    border: 0;\r\n    border-bottom: 1px solid #303030;\r\n    height: 50px;\r\n    margin: 5px 0;\r\n  }\r\n\r\n  .newsletter-form input[type=\"submit\"] {\r\n    background: transparent;\r\n    border: 1px solid #f9f9f9;\r\n    border-radius: 50px;\r\n    color: #ffffff;\r\n    display: block;\r\n    margin-top: 20px;\r\n    outline: none;\r\n    width: 50%;\r\n  }\r\n\r\n  .newsletter-form input[type=\"submit\"]:hover {\r\n    background: #29ca8e;\r\n    border-color: transparent;\r\n  }\r\n\r\n  .newsletter-form .form-group span {\r\n    color: #909090;\r\n    display: block;\r\n    font-size: 12px;\r\n    margin-top: 20px;\r\n  }\r\n\r\n  .scrollup {\r\n  display: none;\r\n  width: 100%;\r\n  margin: 0 auto;\r\n  position: fixed;\r\n  bottom: 20px;\r\n  right: 10px;\r\n}\r\n\r\n  .float-right > a {\r\n  font-size: 30px;\r\n  position: absolute;\r\n  width: 45px;\r\n  height: 45px;\r\n  text-align: center;\r\n  \r\n}\r\n\r\n  .float-right >a:hover {\r\n  cursor:pointer;\r\n  transition: 0.5s;\r\n  background: #b2b2b2;\r\n\t-moz-transition: 0.5s;\r\n\t-webkit-transition: 0.5s;\r\n\t-o-transition: 0.5s; \t\t\r\n}"

/***/ }),

/***/ "./src/app/layout/footer-web/footer-web.component.html":
/*!*************************************************************!*\
  !*** ./src/app/layout/footer-web/footer-web.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- FOOTER -->\r\n<footer id=\"footer\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n\r\n      <div class=\"col-md-4 col-sm-6\">\r\n        <div class=\"footer-info\">\r\n          <div class=\"section-title\">\r\n            <h2>Headquarter</h2>\r\n          </div>\r\n          <address>\r\n            <p>1800 dapibus a tortor pretium,<br> Integer nisl dui, ABC 12000</p>\r\n          </address>\r\n\r\n          <ul class=\"social-icon\">\r\n            <li><a href=\"#\" class=\"fa fa-facebook-square\" attr=\"facebook icon\"></a></li>\r\n            <li><a href=\"#\" class=\"fa fa-twitter\"></a></li>\r\n            <li><a href=\"#\" class=\"fa fa-instagram\"></a></li>\r\n          </ul>\r\n\r\n          <div class=\"copyright-text\">\r\n            <p>Copyright &copy; 2018 Company Name</p>\r\n            <p>Design: <a rel=\"nofollow\" href=\"http://templatemo.com\" title=\"html5 templates\" target=\"_parent\">Template\r\n                Mo</a></p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-md-4 col-sm-6\">\r\n        <div class=\"footer-info\">\r\n          <div class=\"section-title\">\r\n            <h2>Contact Info</h2>\r\n          </div>\r\n          <address>\r\n            <p>+65 2244 1100, +66 1800 1100</p>\r\n            <p><a href=\"mailto:youremail.com\">hello@youremail.co</a></p>\r\n          </address>\r\n\r\n          <div class=\"footer_menu\">\r\n            <h2>Quick Links</h2>\r\n            <ul>\r\n              <li><a href=\"#\">Career</a></li>\r\n              <li><a href=\"#\">Investor</a></li>\r\n              <li><a href=\"#\">Terms & Conditions</a></li>\r\n              <li><a href=\"#\">Refund Policy</a></li>\r\n            </ul>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-md-4 col-sm-12\">\r\n        <div class=\"footer-info newsletter-form\">\r\n          <div class=\"section-title\">\r\n            <h2>Newsletter Signup</h2>\r\n          </div>\r\n          <div>\r\n            <div class=\"form-group\">\r\n              <form action=\"#\" method=\"get\">\r\n                <input type=\"email\" class=\"form-control\" placeholder=\"Enter your email\" name=\"email\" id=\"email\"\r\n                  required=\"\">\r\n                <input type=\"submit\" class=\"form-control\" name=\"submit\" id=\"form-submit\" value=\"Send me\">\r\n              </form>\r\n              <span><sup>*</sup> Please note - we do not spam your email.</span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"float-right\">\r\n      <a href=\"#home\">\r\n        <fa-icon [icon]=\"faArrowUp\"></fa-icon>\r\n      </a>\r\n    </div>\r\n  </div>\r\n</footer>"

/***/ }),

/***/ "./src/app/layout/footer-web/footer-web.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/layout/footer-web/footer-web.component.ts ***!
  \***********************************************************/
/*! exports provided: FooterWebComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterWebComponent", function() { return FooterWebComponent; });
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


var FooterWebComponent = /** @class */ (function () {
    function FooterWebComponent() {
        this.faArrowUp = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faArrowUp"];
    }
    FooterWebComponent.prototype.ngOnInit = function () {
    };
    FooterWebComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer-web',
            template: __webpack_require__(/*! ./footer-web.component.html */ "./src/app/layout/footer-web/footer-web.component.html"),
            styles: [__webpack_require__(/*! ./footer-web.component.css */ "./src/app/layout/footer-web/footer-web.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterWebComponent);
    return FooterWebComponent;
}());



/***/ }),

/***/ "./src/app/layout/header-web/header-web.component.css":
/*!************************************************************!*\
  !*** ./src/app/layout/header-web/header-web.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n  .custom-navbar {\r\n    background: #ffffff;\r\n    border-top: 5px solid #29ca8e;\r\n    border-bottom: 0;\r\n    box-shadow: 0 1px 30px rgba(0, 0, 0, 0.1);\r\n    padding: 12px 0;\r\n    margin-bottom: 0;\r\n    padding: 0;\r\n  }\r\n\r\n  .custom-navbar .navbar-brand {\r\n    color: #454545;\r\n    font-size: 18px;\r\n    font-weight: bold;\r\n    line-height: 40px;\r\n  }\r\n\r\n  .custom-navbar .navbar-nav.navbar-nav-first {\r\n    margin-left: 8em;\r\n  }\r\n\r\n  .custom-navbar .navbar-nav.navbar-right li a {\r\n    padding-right: 12px;\r\n    padding-left: 12px;\r\n  }\r\n\r\n  .custom-navbar .navbar-nav.navbar-right li a .fa {\r\n    background: #29ca8e;\r\n    border-radius: 100%;\r\n    color: #ffffff;\r\n    width: 30px;\r\n    height: 30px;\r\n    line-height: 30px;\r\n    text-align: center;\r\n    display: inline-block;\r\n    margin-right: 5px;\r\n  }\r\n\r\n  .custom-navbar .nav li a {\r\n    line-height: 40px;\r\n    color: #575757;\r\n    padding-right: 22px;\r\n    padding-left: 22px;\r\n  }\r\n\r\n  .custom-navbar .navbar-nav > li > a:hover,\r\n  .custom-navbar .navbar-nav > li > a:focus {\r\n    background-color: transparent;\r\n  }\r\n\r\n  .custom-navbar .nav li a:hover {\r\n    background-color: #29ca8e;\r\n    color: #ffffff;\r\n  }\r\n\r\n  .custom-navbar .nav li.active > a {\r\n    background-color: #29ca8e;\r\n    color: #ffffff;\r\n  }\r\n\r\n  .custom-navbar .navbar-toggle {\r\n    border: none;\r\n    padding-top: 10px;\r\n  }\r\n\r\n  .custom-navbar .navbar-toggle {\r\n    background-color: transparent;\r\n  }\r\n\r\n  .custom-navbar .navbar-toggle .icon-bar {\r\n    background: #252525;\r\n    border-color: transparent;\r\n  }\r\n\r\n"

/***/ }),

/***/ "./src/app/layout/header-web/header-web.component.html":
/*!*************************************************************!*\
  !*** ./src/app/layout/header-web/header-web.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<section class=\"navbar custom-navbar navbar-fixed-top\" role=\"navigation\">\r\n  <div class=\"container\">\r\n\r\n    <div class=\"navbar-header\">\r\n      <button class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-collapse\">\r\n        <span class=\"icon icon-bar\"></span>\r\n        <span class=\"icon icon-bar\"></span>\r\n        <span class=\"icon icon-bar\"></span>\r\n      </button>\r\n\r\n\r\n      <a href=\"#\" class=\"navbar-brand\">Company</a>\r\n    </div>\r\n\r\n    <ul class=\"nav justify-content-center\">\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link active\" href=\"#\">Home</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" href=\"#\">About</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" href=\"#\">Service</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" href=\"#\">Solution</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" href=\"#\">Project</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" href=\"#\">Contact Us</a>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</section> \r\n\r\n"

/***/ }),

/***/ "./src/app/layout/header-web/header-web.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/layout/header-web/header-web.component.ts ***!
  \***********************************************************/
/*! exports provided: HeaderWebComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderWebComponent", function() { return HeaderWebComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderWebComponent = /** @class */ (function () {
    function HeaderWebComponent() {
    }
    HeaderWebComponent.prototype.ngOnInit = function () {
    };
    HeaderWebComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header-web',
            template: __webpack_require__(/*! ./header-web.component.html */ "./src/app/layout/header-web/header-web.component.html"),
            styles: [__webpack_require__(/*! ./header-web.component.css */ "./src/app/layout/header-web/header-web.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderWebComponent);
    return HeaderWebComponent;
}());



/***/ }),

/***/ "./src/app/layout/home-slider/home-slider.component.css":
/*!**************************************************************!*\
  !*** ./src/app/layout/home-slider/home-slider.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " /*---------------------------------------\r\n      HOME  & SLIDER            \r\n  -----------------------------------------*/\r\n\r\n  #home {\r\n    padding: 0;\r\n  }\r\n\r\n  #home h1 {\r\n    color: #ffffff;\r\n  }\r\n\r\n  #home h3 {\r\n    color: #f9f9f9;\r\n    font-size: 16px;\r\n    font-weight: 300;\r\n    margin: 0;\r\n    padding: 5px 0 40px 0;\r\n  }\r\n\r\n  @media (min-width: 768px) {\r\n    \r\n  }\r\n\r\n  .home-slider .caption {\r\n    display: flex;\r\n    justify-content: center;\r\n    flex-direction: column;\r\n    text-align: left;\r\n    background-color: rgba(20,20,20,0.2);\r\n    height: 100%;\r\n    color: #fff;\r\n    cursor: e-resize;\r\n  }\r\n\r\n  .home-slider .item {\r\n    background-repeat: no-repeat;\r\n    background-attachment: local;\r\n    background-size: cover;\r\n    height: 650px;\r\n  }\r\n\r\n  .home-slider {\r\n    width: 100%;\r\n  }\r\n\r\n  .caption h3 a { color: #FFF; }\r\n\r\n  .caption h3 a:hover { color: #FF3; }\r\n\r\n"

/***/ }),

/***/ "./src/app/layout/home-slider/home-slider.component.html":
/*!***************************************************************!*\
  !*** ./src/app/layout/home-slider/home-slider.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"home\">\r\n    <div class=\"\">\r\n        <div class=\"home-slider\">\r\n            <ngb-carousel *ngIf=\"images\">\r\n                <div class=\"item\">\r\n                    <div class=\"caption\">\r\n                        <div class=\"container\">\r\n                            <ng-template ngbSlide class=\"item\">\r\n                                <img [src]=\"images[0]\" alt=\"Random first slide\" class=\"w-100\">\r\n                                <div class=\"carousel-caption\">\r\n                                    <h3>10 seconds between slides...</h3>\r\n                                    <p>This carousel uses customized default values.</p>\r\n                                </div>\r\n                            </ng-template>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"item\">\r\n                    <div class=\"caption\">\r\n                        <div class=\"container\">\r\n                            <ng-template ngbSlide class=\"item\">\r\n                                <img [src]=\"images[1]\" alt=\"Random first slide\" class=\"w-100\">\r\n                                <div class=\"carousel-caption\">\r\n                                    <h3>No mouse events...</h3>\r\n                                    <p>This carousel doesn't pause or resume on mouse events</p>\r\n                                </div>\r\n                            </ng-template>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"item\">\r\n                    <div class=\"caption\">\r\n                        <div class=\"container\">\r\n                            <ng-template ngbSlide class=\"item\">\r\n                                <img [src]=\"images[2]\" alt=\"Random first slide\" class=\"w-100\">\r\n                                <div class=\"carousel-caption\">\r\n                                    <h3>No keyboard...</h3>\r\n                                    <p>This carousel uses customized default values.</p>\r\n                                </div>\r\n                            </ng-template>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"item\">\r\n                    <div class=\"caption\">\r\n                        <div class=\"container\">\r\n                            <ng-template ngbSlide class=\"item\">\r\n                                <img [src]=\"images[3]\" alt=\"Random first slide\" class=\"w-100\">\r\n                                <div class=\"carousel-caption\">\r\n                                    <h3>And no wrap after last slide.</h3>\r\n                                    <p>This carousel uses customized default values.</p>\r\n                                </div>\r\n                            </ng-template>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </ngb-carousel>\r\n        </div>\r\n    </div>\r\n</section>"

/***/ }),

/***/ "./src/app/layout/home-slider/home-slider.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/layout/home-slider/home-slider.component.ts ***!
  \*************************************************************/
/*! exports provided: HomeSliderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeSliderComponent", function() { return HomeSliderComponent; });
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


var HomeSliderComponent = /** @class */ (function () {
    function HomeSliderComponent(config) {
        this.images = [1, 2, 3, 4].map(function () { return "https://picsum.photos/900/500?random&t=" + Math.random(); });
        config.interval = 10000;
        config.wrap = false;
        config.keyboard = false;
        config.pauseOnHover = false;
    }
    HomeSliderComponent.prototype.ngOnInit = function () {
    };
    HomeSliderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home-slider',
            template: __webpack_require__(/*! ./home-slider.component.html */ "./src/app/layout/home-slider/home-slider.component.html"),
            styles: [__webpack_require__(/*! ./home-slider.component.css */ "./src/app/layout/home-slider/home-slider.component.css")],
            providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCarouselConfig"]]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCarouselConfig"]])
    ], HomeSliderComponent);
    return HomeSliderComponent;
}());



/***/ }),

/***/ "./src/app/layout/layout-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/layout/layout-routing.module.ts ***!
  \*************************************************/
/*! exports provided: LayoutRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutRoutingModule", function() { return LayoutRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout.component */ "./src/app/layout/layout.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes_layout = [
    {
        path: '',
        component: _layout_component__WEBPACK_IMPORTED_MODULE_2__["LayoutComponent"],
    }
];
var LayoutRoutingModule = /** @class */ (function () {
    function LayoutRoutingModule() {
    }
    LayoutRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes_layout)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], LayoutRoutingModule);
    return LayoutRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/layout.component.css":
/*!*********************************************!*\
  !*** ./src/app/layout/layout.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n@import url('https://fonts.googleapis.com/css?family=Muli:300,700|Nunito');\r\n\r\nbody {\r\n  background: #ffffff;\r\n  font-family: 'Nunito', sans-serif;\r\n  overflow-x: hidden;\r\n  padding-top: 70px;\r\n}\r\n\r\n/*---------------------------------------\r\n   TYPOGRAPHY              \r\n-----------------------------------------*/\r\n\r\nh1,h2,h3,h4,h5,h6 {\r\n  font-family: 'Muli', sans-serif;\r\n  font-weight: bold;\r\n  line-height: inherit;\r\n}\r\n\r\nh1 {\r\n  color: #252525;\r\n  font-size: 3em;\r\n  line-height: normal;\r\n}\r\n\r\nh2 {\r\n  color: #353535;\r\n  font-size: 2em;\r\n  padding-bottom: 10px;\r\n}\r\n\r\nh3 {\r\n  font-size: 1.5em;\r\n  margin-bottom: 0;\r\n}\r\n\r\nh3,\r\nh3 a {\r\n  color: #454545;\r\n}\r\n\r\np {\r\n  color: #757575;\r\n  font-size: 14px;\r\n  font-weight: normal;\r\n  line-height: 24px;\r\n}\r\n\r\n/*---------------------------------------\r\n   GENERAL               \r\n-----------------------------------------*/\r\n\r\nhtml{\r\n  -webkit-font-smoothing: antialiased;\r\n}\r\n\r\na {\r\n  color: #252525;\r\n  transition: 0.5s;\r\n  text-decoration: none !important;\r\n}\r\n\r\na,\r\ninput, button,\r\n.form-control {\r\n  transition: 0.5s;\r\n}\r\n\r\na:hover, a:active, a:focus {\r\n  color: #29ca8e;\r\n  outline: none;\r\n}\r\n\r\n::-webkit-scrollbar{\r\n  width: 8px;\r\n  height: 8px;\r\n}\r\n\r\n::-webkit-scrollbar-thumb {\r\n  cursor: pointer;\r\n  background: #000000;\r\n}\r\n\r\n.section-title {\r\n  padding-bottom: 40px;\r\n}\r\n\r\n.section-title h2 {\r\n  margin: 0;\r\n}\r\n\r\n.section-title small {\r\n  display: block;\r\n}\r\n\r\n.overlay {\r\n  background: rgba(20,20,20,0.5);\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n.entry-form {\r\n  background: #252020;\r\n  border-radius: 100%;\r\n  text-align: center;\r\n  padding: 6em;\r\n  width: 450px;\r\n  height: 450px;\r\n}\r\n\r\n.entry-form h2 {\r\n  color: #ffffff;\r\n  margin: 0;\r\n}\r\n\r\n.entry-form .form-control {\r\n  background: transparent;\r\n  border: 0;\r\n  border-bottom: 1px solid;\r\n  border-radius: 0;\r\n  box-shadow: none;\r\n  height: 45px;\r\n  margin: 10px 0;\r\n}\r\n\r\n.entry-form .submit-btn {\r\n  background: #ffffff;\r\n  border-radius: 50px;\r\n  border: 0;\r\n  color: #252020;\r\n  width: 50%;\r\n  height: 50px;\r\n  margin: 30px auto;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.entry-form .submit-btn:hover {\r\n  background: #3f51b5;\r\n  color: #ffffff;\r\n}\r\n\r\nsection {\r\n  position: relative;\r\n  padding: 100px 0;\r\n}\r\n\r\n#team,\r\n#testimonial {\r\n  background: #f9f9f9;\r\n}\r\n\r\n#team, \r\n#testimonial {\r\n  text-align: center;\r\n}\r\n\r\n#google-map iframe {\r\n  border: 0;\r\n  width: 100%;\r\n  height: 390px;\r\n}\r\n\r\n/*---------------------------------------\r\n   BUTTONS               \r\n-----------------------------------------*/\r\n\r\n.section-btn {\r\n  background: transparent;\r\n  border-radius: 50px;\r\n  border: 1px solid #ffffff;\r\n  color: #ffffff;\r\n  font-size: inherit;\r\n  font-weight: normal;\r\n  padding: 15px 30px;\r\n  transition: 0.5s;\r\n}\r\n\r\n.section-btn:hover {\r\n  background: #ffffff;\r\n  border-color: transparent;\r\n}\r\n\r\n/*---------------------------------------\r\n     SOCIAL ICON              \r\n  -----------------------------------------*/\r\n\r\n.social-icon {\r\n    position: relative;\r\n    padding: 0;\r\n    margin: 0;\r\n  }\r\n\r\n.social-icon li {\r\n    display: inline-block;\r\n    list-style: none;\r\n    margin-bottom: 5px;\r\n  }\r\n\r\n.social-icon li a {\r\n    border-radius: 100px;\r\n    color: #29ca8e;\r\n    font-size: 15px;\r\n    width: 35px;\r\n    height: 35px;\r\n    line-height: 35px;\r\n    text-decoration: none;\r\n    text-align: center;\r\n    transition: all 0.4s ease-in-out;\r\n    position: relative;\r\n    margin: 5px 5px 5px 0;\r\n  }\r\n\r\n.social-icon li a:hover {\r\n    background: #29ca8e;\r\n    color: #ffffff;\r\n  }\r\n\r\n/*---------------------------------------\r\n   RESPONSIVE STYLES              \r\n-----------------------------------------*/\r\n\r\n@media screen and (max-width: 1170px) {\r\n  .custom-navbar .navbar-nav.navbar-nav-first {\r\n    margin-left: inherit;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 992px) {\r\n  section,\r\n  footer {\r\n    padding: 60px 0;\r\n  }\r\n\r\n  .home-slider .item {\r\n    background-position: center center;\r\n  }\r\n\r\n  .feature-thumb,\r\n  .about-info,\r\n  .team-thumb,\r\n  .footer-info {\r\n    margin-bottom: 50px;\r\n  }\r\n\r\n  .contact-image {\r\n    margin-top: 50px;\r\n  }\r\n}\r\n\r\n@media only screen and (min-width: 768px) and (max-width: 991px) {\r\n  .custom-navbar .nav li a {\r\n    padding-right: 10px;\r\n    padding-left: 10px;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 767px) {\r\n  h1 {\r\n    font-size: 2.5em;\r\n  }\r\n\r\n  h1,h2,h3 {\r\n    line-height: normal;\r\n  }\r\n\r\n  .custom-navbar {\r\n    background: #ffffff;\r\n    box-shadow: 0 1px 30px rgba(0, 0, 0, 0.1);\r\n    padding: 10px 0;\r\n    text-align: center;\r\n  }\r\n\r\n  .custom-navbar .navbar-brand,\r\n  .custom-navbar .nav li a {\r\n    line-height: normal;\r\n  }\r\n\r\n  .custom-navbar .nav li a {\r\n    padding: 10px;\r\n  }\r\n\r\n  .custom-navbar .navbar-brand,\r\n  .top-nav-collapse .navbar-brand {\r\n    color: #252525;\r\n    font-weight: 600;\r\n  }\r\n\r\n  .custom-navbar .nav li a,\r\n  .top-nav-collapse .nav li a {\r\n    color: #575757;\r\n  }\r\n\r\n  .custom-navbar .navbar-nav.navbar-right li {\r\n    display: inline-block;\r\n  }\r\n\r\n  .footer-info {\r\n    margin-right: 0;\r\n  }\r\n\r\n  .footer-info.newsletter-form {\r\n    margin-bottom: 0;\r\n  }\r\n\r\n  .entry-form {\r\n    display: block;\r\n    margin: 0 auto;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 580px) {\r\n  h2 {\r\n    font-size: 1.8em;\r\n  }\r\n\r\n  #testimonial .item {\r\n    padding: 2em;\r\n  }\r\n\r\n  .contact-image {\r\n    margin-top: 0;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 480px) {\r\n  h1 {\r\n    font-size: 2em;\r\n  }\r\n\r\n  #home h3 {\r\n    font-size: 14px;\r\n  }\r\n\r\n  .entry-form {\r\n    border-radius: 0;\r\n    padding: 2em;\r\n    max-width: 100%;\r\n    max-height: 100%;\r\n    width: inherit;\r\n    height: inherit;\r\n  }\r\n}\r\n"

/***/ }),

/***/ "./src/app/layout/layout.component.html":
/*!**********************************************!*\
  !*** ./src/app/layout/layout.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header-web></app-header-web>\r\n<app-home-slider></app-home-slider>\r\n<app-about-web></app-about-web>\r\n<app-features-web></app-features-web>\r\n<app-project-web></app-project-web>\r\n<app-customer-web></app-customer-web>\r\n<app-partner-web></app-partner-web>\r\n<app-contact-web></app-contact-web>\r\n<app-footer-web></app-footer-web>\r\n"

/***/ }),

/***/ "./src/app/layout/layout.component.ts":
/*!********************************************!*\
  !*** ./src/app/layout/layout.component.ts ***!
  \********************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LayoutComponent = /** @class */ (function () {
    function LayoutComponent() {
        this.lat = 51.678418;
        this.lng = 7.809007;
    }
    LayoutComponent.prototype.ngOnInit = function () {
    };
    LayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-layout',
            template: __webpack_require__(/*! ./layout.component.html */ "./src/app/layout/layout.component.html"),
            styles: [__webpack_require__(/*! ./layout.component.css */ "./src/app/layout/layout.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LayoutComponent);
    return LayoutComponent;
}());



/***/ }),

/***/ "./src/app/layout/layout.module.ts":
/*!*****************************************!*\
  !*** ./src/app/layout/layout.module.ts ***!
  \*****************************************/
/*! exports provided: LayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutModule", function() { return LayoutModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layout.component */ "./src/app/layout/layout.component.ts");
/* harmony import */ var _layout_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout-routing.module */ "./src/app/layout/layout-routing.module.ts");
/* harmony import */ var _header_web_header_web_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header-web/header-web.component */ "./src/app/layout/header-web/header-web.component.ts");
/* harmony import */ var _footer_web_footer_web_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer-web/footer-web.component */ "./src/app/layout/footer-web/footer-web.component.ts");
/* harmony import */ var _features_web_features_web_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./features-web/features-web.component */ "./src/app/layout/features-web/features-web.component.ts");
/* harmony import */ var _services_web_services_web_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services-web/services-web.component */ "./src/app/layout/services-web/services-web.component.ts");
/* harmony import */ var _contact_web_contact_web_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./contact-web/contact-web.component */ "./src/app/layout/contact-web/contact-web.component.ts");
/* harmony import */ var _home_slider_home_slider_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home-slider/home-slider.component */ "./src/app/layout/home-slider/home-slider.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _about_web_about_web_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./about-web/about-web.component */ "./src/app/layout/about-web/about-web.component.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");
/* harmony import */ var _features_web_detail_features_web_detail_features_web_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./features-web/detail-features-web/detail-features-web.component */ "./src/app/layout/features-web/detail-features-web/detail-features-web.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _project_web_project_web_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./project-web/project-web.component */ "./src/app/layout/project-web/project-web.component.ts");
/* harmony import */ var _customer_web_customer_web_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./customer-web/customer-web.component */ "./src/app/layout/customer-web/customer-web.component.ts");
/* harmony import */ var _partner_web_partner_web_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./partner-web/partner-web.component */ "./src/app/layout/partner-web/partner-web.component.ts");
/* harmony import */ var ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-owl-carousel */ "./node_modules/ngx-owl-carousel/index.js");
/* harmony import */ var ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _project_web_detail_project_web_detail_project_web_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./project-web/detail-project-web/detail-project-web.component */ "./src/app/layout/project-web/detail-project-web/detail-project-web.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var WEB_COMPONENT = [
    _layout_component__WEBPACK_IMPORTED_MODULE_1__["LayoutComponent"],
    _header_web_header_web_component__WEBPACK_IMPORTED_MODULE_3__["HeaderWebComponent"],
    _footer_web_footer_web_component__WEBPACK_IMPORTED_MODULE_4__["FooterWebComponent"],
    _features_web_features_web_component__WEBPACK_IMPORTED_MODULE_5__["FeaturesWebComponent"],
    _services_web_services_web_component__WEBPACK_IMPORTED_MODULE_6__["ServicesWebComponent"],
    _contact_web_contact_web_component__WEBPACK_IMPORTED_MODULE_7__["ContactWebComponent"],
    _home_slider_home_slider_component__WEBPACK_IMPORTED_MODULE_8__["HomeSliderComponent"],
    _about_web_about_web_component__WEBPACK_IMPORTED_MODULE_11__["AboutWebComponent"],
    _features_web_detail_features_web_detail_features_web_component__WEBPACK_IMPORTED_MODULE_13__["DetailFeaturesWebComponent"],
    _project_web_project_web_component__WEBPACK_IMPORTED_MODULE_15__["ProjectWebComponent"],
    _project_web_detail_project_web_detail_project_web_component__WEBPACK_IMPORTED_MODULE_19__["DetailProjectWebComponent"],
    _customer_web_customer_web_component__WEBPACK_IMPORTED_MODULE_16__["CustomerWebComponent"],
    _partner_web_partner_web_component__WEBPACK_IMPORTED_MODULE_17__["PartnerWebComponent"]
];
var LayoutModule = /** @class */ (function () {
    function LayoutModule() {
    }
    LayoutModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_10__["CommonModule"],
                _layout_routing_module__WEBPACK_IMPORTED_MODULE_2__["LayoutRoutingModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModule"],
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_12__["FontAwesomeModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"],
                ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_18__["OwlModule"]
            ],
            providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbActiveModal"]],
            exports: [WEB_COMPONENT],
            declarations: [WEB_COMPONENT],
            entryComponents: [WEB_COMPONENT],
        })
    ], LayoutModule);
    return LayoutModule;
}());



/***/ }),

/***/ "./src/app/layout/partner-web/partner-web.component.css":
/*!**************************************************************!*\
  !*** ./src/app/layout/partner-web/partner-web.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/partner-web/partner-web.component.html":
/*!***************************************************************!*\
  !*** ./src/app/layout/partner-web/partner-web.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"sec-proud-partners\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12 text-center\">\r\n        <hr>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12 text-center\">\r\n        <h2>PROUD PARTNERS</h2>\r\n      </div>\r\n    </div>\r\n    <div class=\"row row-flex row-flex-wrap\">\r\n      <div class=\"col-md-4 col-sm-6 col-xs-6 flex-col text-center margin-bottom-60\">\r\n        <a href=\"https://www.izenda.com/\" target=\"_blank\">\r\n          <img src=\"https://www.kms-technology.com/wp-content/uploads/2018/02/Izenda-logo.png\">\r\n        </a>\r\n      </div>\r\n      <div class=\"col-md-4 col-sm-6 col-xs-6 flex-col text-center margin-bottom-60\">\r\n        <a href=\"https://www.qasymphony.com/\" target=\"_blank\">\r\n          <img src=\"https://www.kms-technology.com/wp-content/uploads/2018/02/QASymphony-logo.png\">\r\n        </a>\r\n      </div>\r\n      <div class=\"col-md-4 col-sm-6 col-xs-6 flex-col text-center margin-bottom-60\">\r\n        <a href=\"https://www.microsoft.com\" target=\"_blank\">\r\n          <img src=\"https://www.kms-technology.com/wp-content/uploads/2018/02/Microsoft-logo.png\">\r\n        </a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>"

/***/ }),

/***/ "./src/app/layout/partner-web/partner-web.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/layout/partner-web/partner-web.component.ts ***!
  \*************************************************************/
/*! exports provided: PartnerWebComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PartnerWebComponent", function() { return PartnerWebComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PartnerWebComponent = /** @class */ (function () {
    function PartnerWebComponent() {
    }
    PartnerWebComponent.prototype.ngOnInit = function () {
    };
    PartnerWebComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-partner-web',
            template: __webpack_require__(/*! ./partner-web.component.html */ "./src/app/layout/partner-web/partner-web.component.html"),
            styles: [__webpack_require__(/*! ./partner-web.component.css */ "./src/app/layout/partner-web/partner-web.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PartnerWebComponent);
    return PartnerWebComponent;
}());



/***/ }),

/***/ "./src/app/layout/project-web/detail-project-web/detail-project-web.component.css":
/*!****************************************************************************************!*\
  !*** ./src/app/layout/project-web/detail-project-web/detail-project-web.component.css ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/project-web/detail-project-web/detail-project-web.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/layout/project-web/detail-project-web/detail-project-web.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-detail\">\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title\">{{title}}</h4>\r\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('1')\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <p>Hello, detail form!</p>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"activeModal.close('1')\">Close</button>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/layout/project-web/detail-project-web/detail-project-web.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/layout/project-web/detail-project-web/detail-project-web.component.ts ***!
  \***************************************************************************************/
/*! exports provided: DetailProjectWebComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailProjectWebComponent", function() { return DetailProjectWebComponent; });
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


var DetailProjectWebComponent = /** @class */ (function () {
    function DetailProjectWebComponent(activeModal) {
        this.activeModal = activeModal;
        this.onSaid = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    DetailProjectWebComponent.prototype.listen = function () {
        this.onSaid.emit();
    };
    DetailProjectWebComponent.prototype.ngOnInit = function () {
        console.log(this.activeModal);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], DetailProjectWebComponent.prototype, "onSaid", void 0);
    DetailProjectWebComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-detail-project-web',
            template: __webpack_require__(/*! ./detail-project-web.component.html */ "./src/app/layout/project-web/detail-project-web/detail-project-web.component.html"),
            styles: [__webpack_require__(/*! ./detail-project-web.component.css */ "./src/app/layout/project-web/detail-project-web/detail-project-web.component.css")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"]])
    ], DetailProjectWebComponent);
    return DetailProjectWebComponent;
}());



/***/ }),

/***/ "./src/app/layout/project-web/project-web.component.css":
/*!**************************************************************!*\
  !*** ./src/app/layout/project-web/project-web.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "section {\r\n    padding: 100px 0;\r\n}\r\n\r\n/* #project .owl-stage .owl-item {\r\n    height: 214px;\r\n    width: 214px;\r\n} */\r\n\r\n.add-actions {\r\n    background: rgba(0, 0, 0, 0.6) none repeat scroll 0 0;\r\n  bottom: 30px;\r\n  display: block;\r\n  height: 100%;\r\n  left: 0;\r\n  opacity: 0;\r\n  overflow: hidden;\r\n  padding: 10px 15px;\r\n  position: absolute;\r\n  transition: all 0.4s ease 0s;\r\n  width: 100%;\r\n}\r\n\r\n.add-actions a:hover {\r\n    text-decoration: none;\r\n    cursor: pointer;\r\n}\r\n\r\n.awesome-img {\r\n    display: block;\r\n    width: 100%;\r\n    height: 100%;\r\n    position: relative;\r\n  }\r\n\r\n.awesome-img > a::after {\r\n    background: rgba(0, 0, 0, 0.7) none repeat scroll 0 0;\r\n    content: \"\";\r\n    height: 100%;\r\n    left: 0;\r\n    position: absolute;\r\n    top: 0;\r\n    width: 100%;\r\n    opacity: 0;\r\n    transition: 0.4s;\r\n  }\r\n\r\n.single-awesome-project {\r\n    overflow: hidden;\r\n    margin-bottom: 30px;\r\n  }\r\n\r\n.single-awesome-project:hover .awesome-img>a::after {\r\n    opacity: 1;\r\n  }\r\n\r\n.single-awesome-project:hover .add-actions {\r\n    opacity: 1;\r\n    bottom: 0;\r\n  }\r\n\r\n.project-dec {\r\n    display: block;\r\n    height: 100%;\r\n    width: 100%;\r\n}\r\n\r\n.project-dec a {\r\n    display: block;\r\n    height: 100%;\r\n    width: 100%;\r\n}\r\n\r\n.project-dec h4 {\r\n    margin-bottom: 5px;\r\n  }\r\n\r\n.project-dec h4:hover {\r\n    color: #fff;\r\n  }\r\n\r\n.project-dec h4 {\r\n    color: #ddd;\r\n    font-size: 24px;\r\n    margin-top: -45px;\r\n    padding-top: 50%;\r\n    text-decoration: none;\r\n    text-transform: uppercase;\r\n    font-weight: 800;\r\n  }\r\n\r\n.project-dec span {\r\n    color: #ddd;\r\n    font-size: 13px;\r\n  }"

/***/ }),

/***/ "./src/app/layout/project-web/project-web.component.html":
/*!***************************************************************!*\
  !*** ./src/app/layout/project-web/project-web.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"project\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n        <div class=\"section-headline text-center\">\r\n          <h2>Our Portfolio</h2>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12 col-sm-12\">\r\n        <owl-carousel #owlElement [options]=\"myCarouselOptions\" [items]=\"images\" [carouselClasses]=\"['owl-theme', 'owl-carousel']\">\r\n          <div class=\"item\" *ngFor=\"let image of myCarouselImages;let i = index\">\r\n            <div class=\"single-awesome-project\">\r\n              <div class=\"awesome-img\">\r\n                <a href=\"#\"><img src={{image}} /></a>\r\n\r\n                <div class=\"add-actions text-center\">\r\n                  <div class=\"project-dec\">\r\n                    <a class=\"venobox\" data-gall=\"myGallery\" (click)=\"projectDetail()\">\r\n                      <h4>Business City</h4>\r\n                      <span>Web Development</span>\r\n                    </a>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n        </owl-carousel>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>"

/***/ }),

/***/ "./src/app/layout/project-web/project-web.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/layout/project-web/project-web.component.ts ***!
  \*************************************************************/
/*! exports provided: ProjectWebComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectWebComponent", function() { return ProjectWebComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-owl-carousel */ "./node_modules/ngx-owl-carousel/index.js");
/* harmony import */ var ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _detail_project_web_detail_project_web_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./detail-project-web/detail-project-web.component */ "./src/app/layout/project-web/detail-project-web/detail-project-web.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProjectWebComponent = /** @class */ (function () {
    function ProjectWebComponent(modalService) {
        this.modalService = modalService;
        this.triggerCondition = '1';
        this.myCarouselImages = [1, 2, 3, 4, 5, 6].map(function (i) { return "https://picsum.photos/640/480?image=" + i; });
        this.myCarouselOptions = {
            loop: true,
            margin: 10,
            nav: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 4
                }
            },
            autoplay: true,
            autoplayTimeout: 1000,
            autoplayHoverPause: true
        };
    }
    ProjectWebComponent.prototype.fun = function (value) {
        if (this.triggerCondition !== value) {
            this.owlElement.trigger('stop.owl.autoplay');
        }
        else {
            this.owlElement.trigger('play.owl.autoplay');
        }
    };
    ProjectWebComponent.prototype.getDismissReason = function (reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    ProjectWebComponent.prototype.projectDetail = function () {
        var _this = this;
        this.fun('0');
        this.modalService.open(_detail_project_web_detail_project_web_component__WEBPACK_IMPORTED_MODULE_3__["DetailProjectWebComponent"], { size: 'lg' }).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
            // result return 1;
            _this.fun(result);
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
            // reason return 1;
            _this.fun(reason);
        });
    };
    ProjectWebComponent.prototype.ngOnInit = function () {
        this.fun(this.triggerCondition);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('owlElement'),
        __metadata("design:type", ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_1__["OwlCarousel"])
    ], ProjectWebComponent.prototype, "owlElement", void 0);
    ProjectWebComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-project-web',
            template: __webpack_require__(/*! ./project-web.component.html */ "./src/app/layout/project-web/project-web.component.html"),
            styles: [__webpack_require__(/*! ./project-web.component.css */ "./src/app/layout/project-web/project-web.component.css")],
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]])
    ], ProjectWebComponent);
    return ProjectWebComponent;
}());



/***/ }),

/***/ "./src/app/layout/services-web/services-web.component.css":
/*!****************************************************************!*\
  !*** ./src/app/layout/services-web/services-web.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n  /*---------------------------------------\r\n      TEAM              \r\n  -----------------------------------------*/\r\n  section {\r\n    position: relative;\r\n    padding: 100px 0;\r\n  }\r\n  .section-title {\r\n    text-align: center;\r\n    padding: 18px 0;\r\n  }\r\n  .team-thumb {\r\n    background: #ffffff;\r\n    position: relative;\r\n    overflow: hidden;\r\n    text-align: left;\r\n  }\r\n  .team-info {\r\n    padding: 20px 30px;\r\n  }\r\n  .team-image img {\r\n    width: 100%;\r\n  }\r\n  .team-thumb .social-icon {\r\n    border-top: 1px solid #f0f0f0;\r\n    padding: 4px 20px 0 20px;\r\n  }\r\n  .team-thumb .social-icon li a {\r\n    background: #ffffff;\r\n    color: #252020;\r\n  }\r\n  .team-info h3 {\r\n    margin: 0;\r\n  }"

/***/ }),

/***/ "./src/app/layout/services-web/services-web.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/layout/services-web/services-web.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"team\">\r\n  <div class=\"container\">\r\n       <div class=\"row\">\r\n\r\n            <div class=\"col-md-12 col-sm-12\">\r\n                 <div class=\"section-title\">\r\n                      <h2>Teachers <small>Meet Professional Trainers</small></h2>\r\n                 </div>\r\n            </div>\r\n\r\n            <div class=\"col-md-3 col-sm-6\">\r\n                 <div class=\"team-thumb\">\r\n                      <div class=\"team-image\">\r\n                           <img src=\"assets/images/author-image1.jpg\" class=\"img-fluid\" alt=\"\">\r\n                      </div>\r\n                      <div class=\"team-info\">\r\n                           <h3>Mark Wilson</h3>\r\n                           <span>I love Teaching</span>\r\n                      </div>\r\n                      \r\n                 </div>\r\n            </div>\r\n\r\n            <div class=\"col-md-3 col-sm-6\">\r\n                 <div class=\"team-thumb\">\r\n                      <div class=\"team-image\">\r\n                           <img src=\"assets/images/author-image2.jpg\" class=\"img-fluid\" alt=\"\">\r\n                      </div>\r\n                      <div class=\"team-info\">\r\n                           <h3>Catherine</h3>\r\n                           <span>Education is the key!</span>\r\n                      </div>\r\n                      \r\n                 </div>\r\n            </div>\r\n\r\n            <div class=\"col-md-3 col-sm-6\">\r\n                 <div class=\"team-thumb\">\r\n                      <div class=\"team-image\">\r\n                           <img src=\"assets/images/author-image3.jpg\" class=\"img-fluid\" alt=\"\">\r\n                      </div>\r\n                      <div class=\"team-info\">\r\n                           <h3>Jessie Ca</h3>\r\n                           <span>I like Online Courses</span>\r\n                      </div>\r\n                    \r\n                 </div>\r\n            </div>\r\n\r\n            <div class=\"col-md-3 col-sm-6\">\r\n                 <div class=\"team-thumb\">\r\n                      <div class=\"team-image\">\r\n                           <img src=\"assets/images/author-image4.jpg\" class=\"img-fluid\" alt=\"\">\r\n                      </div>\r\n                      <div class=\"team-info\">\r\n                           <h3>Andrew Berti</h3>\r\n                           <span>Learning is fun</span>\r\n                      </div>\r\n                   \r\n                 </div>\r\n            </div>\r\n\r\n       </div>\r\n  </div>\r\n</section>"

/***/ }),

/***/ "./src/app/layout/services-web/services-web.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/layout/services-web/services-web.component.ts ***!
  \***************************************************************/
/*! exports provided: ServicesWebComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesWebComponent", function() { return ServicesWebComponent; });
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


var ServicesWebComponent = /** @class */ (function () {
    function ServicesWebComponent(modalService) {
        this.modalService = modalService;
    }
    ServicesWebComponent.prototype.ngOnInit = function () {
    };
    ServicesWebComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-services-web',
            template: __webpack_require__(/*! ./services-web.component.html */ "./src/app/layout/services-web/services-web.component.html"),
            styles: [__webpack_require__(/*! ./services-web.component.css */ "./src/app/layout/services-web/services-web.component.css")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]])
    ], ServicesWebComponent);
    return ServicesWebComponent;
}());



/***/ })

}]);
//# sourceMappingURL=layout-layout-module.js.map