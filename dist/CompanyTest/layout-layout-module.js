(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layout-layout-module"],{

/***/ "./src/app/layout/about-web/about-web.component.css":
/*!**********************************************************!*\
  !*** ./src/app/layout/about-web/about-web.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "section {\r\n    position: relative;\r\n    padding: 100px 0;\r\n  }\r\n\r\n"

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

module.exports = "section {\r\n  position: relative;\r\n  padding: 100px 0;\r\n}\r\n\r\n\r\n#contact {\r\n    background: #3f51b5;\r\n    padding: 60px 0;\r\n  }\r\n\r\n\r\n#contact h2 {\r\n    color: #ffffff;\r\n  }\r\n\r\n\r\n#contact .section-title {\r\n    padding-bottom: 20px;\r\n  }\r\n\r\n\r\n#contact h2 > small,\r\n  #contact p,\r\n  #contact a {\r\n    color: #f9f9f9;\r\n  }\r\n\r\n\r\n#contact-form {\r\n    padding: 1em 0;\r\n  }\r\n\r\n\r\n#contact-form .col-md-12,\r\n  #contact-form .col-md-4 {\r\n    padding-left: 0;\r\n  }\r\n\r\n\r\n#contact-form .form-control {\r\n    border: 0;\r\n    border-radius: 5px;\r\n    box-shadow: none;\r\n    margin: 10px 0;\r\n  }\r\n\r\n\r\n#contact-form input {\r\n    height: 50px;\r\n  }\r\n\r\n\r\n#contact-form input[type='submit'] {\r\n    border-radius: 50px;\r\n    border: 1px solid transparent;\r\n  }\r\n\r\n\r\n#contact-form input[type='submit']:hover {\r\n    background: transparent;\r\n    border-color: #ffffff;\r\n    color: #ffffff;\r\n  }\r\n  \r\n\r\n"

/***/ }),

/***/ "./src/app/layout/contact-web/contact-web.component.html":
/*!***************************************************************!*\
  !*** ./src/app/layout/contact-web/contact-web.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- CONTACT -->\r\n<section id=\"contact\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n\r\n      <div class=\"col-md-6 col-sm-12\">\r\n        <form id=\"contact-form\" role=\"form\" action=\"\" method=\"post\">\r\n          <div class=\"section-title\">\r\n            <h2>Contact us <small>we love conversations. let us talk!</small></h2>\r\n          </div>\r\n          <div class=\"col-md-12 col-sm-12\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"Enter full name\" name=\"name\" required=\"\">\r\n\r\n            <input type=\"email\" class=\"form-control\" placeholder=\"Enter email address\" name=\"email\" required=\"\">\r\n\r\n            <textarea class=\"form-control\" rows=\"6\" placeholder=\"Tell us about your message\" name=\"message\" required=\"\"></textarea>\r\n          </div>\r\n          <div class=\"col-md-4 col-sm-12\">\r\n            <input type=\"submit\" class=\"form-control\" name=\"send message\" value=\"Send Message\">\r\n          </div>\r\n        </form>\r\n      </div>\r\n\r\n      <div class=\"col-md-6 col-sm-12\">\r\n        <div class=\"contact-image\">\r\n          <img src=\"assets/images/contact-image.jpg\" class=\"img-fluid\" alt=\"Smiling Two Girls\">\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</section>"

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

/***/ "./src/app/layout/features-web/features-web.component.css":
/*!****************************************************************!*\
  !*** ./src/app/layout/features-web/features-web.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " /*---------------------------------------\r\n      FEATURE              \r\n  -----------------------------------------*/\r\n\r\n  h2 {\r\n    padding-bottom: 10px;\r\n    font-weight: bold;\r\n    line-height: inherit;\r\n    text-align: center;\r\n  }\r\n\r\n  section {\r\n    position: relative;\r\n    padding: 100px 0;\r\n  }\r\n\r\n  /* .feature-thumb {\r\n    border: 1px solid #f0f0f0;\r\n    padding: 5em 3em;\r\n  }\r\n\r\n  .feature-thumb span {\r\n    background: #3f51b5;\r\n    border-radius: 50px;\r\n    color: #ffffff;\r\n    font-size: 25px;\r\n    font-weight: bold;\r\n    display: inline-block;\r\n    width: 60px;\r\n    height: 60px;\r\n    line-height: 60px;\r\n    text-align: center;\r\n    margin-bottom: 5px;\r\n  }\r\n\r\n  .feature-thumb h3 {\r\n    margin: 10px 0;\r\n  } */\r\n\r\n  /*Services*/\r\n\r\n  .site-padding{\r\n    padding:70px 0;\r\n  }\r\n\r\n  .title h3{\r\n\ttext-align:center;\r\n}\r\n\r\n  .title h3 span{\r\n\tcolor:#00bcd4;\r\n}\r\n\r\n  .title{\r\n\tmargin-bottom:50px;\r\n}\r\n\r\n  #features{\r\n\tbackground:#f5fcfd;\r\n}\r\n\r\n  .feature-icon i{\r\n\tfont-size:50px;\r\n\tcolor:#a1a1a1;\r\n}\r\n\r\n  .feature-text h4{\r\n\tfont-size:16px;\r\n\ttext-transform:uppercase;\r\n}\r\n\r\n  .feature-text p{\r\n\tmargin:5px 0;\r\n}\r\n\r\n  .feature-text a{\r\n\tfont-size:13px;\r\n\tcolor:#00bcd4;\r\n\ttext-transform:uppercase;\r\n\tfont-weight:500;\r\n\tfont-family: 'Montserrat', sans-serif;\r\n}\r\n\r\n  .single-feature{\r\n\tmargin-bottom:30px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/layout/features-web/features-web.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/layout/features-web/features-web.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- FEATURE -->\r\n<!-- <section id=\"feature\">\r\n  <div class=\"container\">\r\n       <div class=\"row\">\r\n            <div class=\"col-md-4 col-sm-4\">\r\n                 <div class=\"feature-thumb\">\r\n                      <span>01</span>\r\n                      <h3>Trending Courses</h3>\r\n                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing eiusmod tempor incididunt ut labore et dolore magna.</p>\r\n                 </div>\r\n            </div>\r\n\r\n            <div class=\"col-md-4 col-sm-4\">\r\n                 <div class=\"feature-thumb\">\r\n                      <span>02</span>\r\n                      <h3>Books & Library</h3>\r\n                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing eiusmod tempor incididunt ut labore et dolore magna.</p>\r\n                 </div>\r\n            </div>\r\n\r\n            <div class=\"col-md-4 col-sm-4\">\r\n                 <div class=\"feature-thumb\">\r\n                      <span>03</span>\r\n                      <h3>Certified Teachers</h3>\r\n                      <p>templatemo delivers a wide variety of HTML5 templates for you at absolutely no charge. Please tell your friends.</p>\r\n                 </div>\r\n            </div>\r\n       </div>\r\n  </div>\r\n</section> -->\r\n\r\n<section id=\"features\" class=\"site-padding\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-12\">\r\n        <h3>Our <span>Services</span></h3>\r\n      </div>\r\n    </div>\r\n  </div>\r\n<!-- single feature -->\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-4\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-2\">\r\n            <div class=\"feature-icon\">\r\n              <i class=\"fa fa-bitbucket\"></i>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-10\">\r\n            <div class=\"feature-text\">\r\n              <h4>Lorem ipsum dolor sit amet</h4>\r\n              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et\r\n                dolore magna aliqua. Ut enim ad minim veniam</p>\r\n              <a href=\"#\">Read More>></a>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- single feature -->\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-4\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-2\">\r\n            <div class=\"feature-icon\">\r\n              <i class=\"fa fa-bitbucket\"></i>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-10\">\r\n            <div class=\"feature-text\">\r\n              <h4>Lorem ipsum dolor sit amet</h4>\r\n              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et\r\n                dolore magna aliqua. Ut enim ad minim veniam</p>\r\n              <a href=\"#\">Read More>></a>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- single feature -->\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-4\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-2\">\r\n            <div class=\"feature-icon\">\r\n              <i class=\"fa fa-bitbucket\"></i>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-10\">\r\n            <div class=\"feature-text\">\r\n              <h4>Lorem ipsum dolor sit amet</h4>\r\n              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et\r\n                dolore magna aliqua. Ut enim ad minim veniam</p>\r\n              <a href=\"#\">Read More>></a>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- single feature -->\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-4\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-2\">\r\n            <div class=\"feature-icon\">\r\n              <i class=\"fa fa-bitbucket\"></i>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-10\">\r\n            <div class=\"feature-text\">\r\n              <h4>Lorem ipsum dolor sit amet</h4>\r\n              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et\r\n                dolore magna aliqua. Ut enim ad minim veniam</p>\r\n              <a href=\"#\">Read More>></a>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- single feature -->\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-4\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-2\">\r\n            <div class=\"feature-icon\">\r\n              <i class=\"fa fa-bitbucket\"></i>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-10\">\r\n            <div class=\"feature-text\">\r\n              <h4>Lorem ipsum dolor sit amet</h4>\r\n              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et\r\n                dolore magna aliqua. Ut enim ad minim veniam</p>\r\n              <a href=\"#\">Read More>></a>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- single feature -->\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-4\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-2\">\r\n            <div class=\"feature-icon\">\r\n              <i class=\"fa fa-bitbucket\"></i>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-10\">\r\n            <div class=\"feature-text\">\r\n              <h4>Lorem ipsum dolor sit amet</h4>\r\n              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et\r\n                dolore magna aliqua. Ut enim ad minim veniam</p>\r\n              <a href=\"#\">Read More>></a>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>"

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
    function FeaturesWebComponent() {
    }
    FeaturesWebComponent.prototype.ngOnInit = function () {
    };
    FeaturesWebComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-features-web',
            template: __webpack_require__(/*! ./features-web.component.html */ "./src/app/layout/features-web/features-web.component.html"),
            styles: [__webpack_require__(/*! ./features-web.component.css */ "./src/app/layout/features-web/features-web.component.css")]
        }),
        __metadata("design:paramtypes", [])
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

module.exports = "<app-header-web></app-header-web>\r\n<app-home-slider></app-home-slider>\r\n<app-about-web></app-about-web>\r\n<app-features-web></app-features-web>\r\n<app-services-web></app-services-web>\r\n<app-solution-web></app-solution-web>\r\n<app-contact-web></app-contact-web>\r\n<app-footer-web></app-footer-web>\r\n"

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
/* harmony import */ var _solution_web_solution_web_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./solution-web/solution-web.component */ "./src/app/layout/solution-web/solution-web.component.ts");
/* harmony import */ var _about_web_about_web_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./about-web/about-web.component */ "./src/app/layout/about-web/about-web.component.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");
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
    _solution_web_solution_web_component__WEBPACK_IMPORTED_MODULE_11__["SolutionWebComponent"],
    _about_web_about_web_component__WEBPACK_IMPORTED_MODULE_12__["AboutWebComponent"]
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
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_13__["FontAwesomeModule"]
            ],
            exports: [WEB_COMPONENT],
            declarations: [WEB_COMPONENT],
            entryComponents: [WEB_COMPONENT],
        })
    ], LayoutModule);
    return LayoutModule;
}());



/***/ }),

/***/ "./src/app/layout/services-web/services-web.component.css":
/*!****************************************************************!*\
  !*** ./src/app/layout/services-web/services-web.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n  /*---------------------------------------\r\n      TEAM              \r\n  -----------------------------------------*/\r\n  section {\r\n    position: relative;\r\n    padding: 100px 0;\r\n  }\r\n  .team-thumb {\r\n    background: #ffffff;\r\n    position: relative;\r\n    overflow: hidden;\r\n    text-align: left;\r\n  }\r\n  .team-info {\r\n    padding: 20px 30px;\r\n  }\r\n  .team-image img {\r\n    width: 100%;\r\n  }\r\n  .team-thumb .social-icon {\r\n    border-top: 1px solid #f0f0f0;\r\n    padding: 4px 20px 0 20px;\r\n  }\r\n  .team-thumb .social-icon li a {\r\n    background: #ffffff;\r\n    color: #252020;\r\n  }\r\n  .team-info h3 {\r\n    margin: 0;\r\n  }"

/***/ }),

/***/ "./src/app/layout/services-web/services-web.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/layout/services-web/services-web.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"team\">\r\n  <div class=\"container\">\r\n       <div class=\"row\">\r\n\r\n            <div class=\"col-md-12 col-sm-12\">\r\n                 <div class=\"section-title\">\r\n                      <h2>Teachers <small>Meet Professional Trainers</small></h2>\r\n                 </div>\r\n            </div>\r\n\r\n            <div class=\"col-md-3 col-sm-6\">\r\n                 <div class=\"team-thumb\">\r\n                      <div class=\"team-image\">\r\n                           <img src=\"assets/images/author-image1.jpg\" class=\"img-fluid\" alt=\"\">\r\n                      </div>\r\n                      <div class=\"team-info\">\r\n                           <h3>Mark Wilson</h3>\r\n                           <span>I love Teaching</span>\r\n                      </div>\r\n                      <ul class=\"social-icon\">\r\n                           <li><a href=\"#\" class=\"fa fa-facebook-square\" attr=\"facebook icon\"></a></li>\r\n                           <li><a href=\"#\" class=\"fa fa-twitter\"></a></li>\r\n                           <li><a href=\"#\" class=\"fa fa-instagram\"></a></li>\r\n                      </ul>\r\n                 </div>\r\n            </div>\r\n\r\n            <div class=\"col-md-3 col-sm-6\">\r\n                 <div class=\"team-thumb\">\r\n                      <div class=\"team-image\">\r\n                           <img src=\"assets/images/author-image2.jpg\" class=\"img-fluid\" alt=\"\">\r\n                      </div>\r\n                      <div class=\"team-info\">\r\n                           <h3>Catherine</h3>\r\n                           <span>Education is the key!</span>\r\n                      </div>\r\n                      <ul class=\"social-icon\">\r\n                           <li><a href=\"#\" class=\"fa fa-google\"></a></li>\r\n                           <li><a href=\"#\" class=\"fa fa-instagram\"></a></li>\r\n                      </ul>\r\n                 </div>\r\n            </div>\r\n\r\n            <div class=\"col-md-3 col-sm-6\">\r\n                 <div class=\"team-thumb\">\r\n                      <div class=\"team-image\">\r\n                           <img src=\"assets/images/author-image3.jpg\" class=\"img-fluid\" alt=\"\">\r\n                      </div>\r\n                      <div class=\"team-info\">\r\n                           <h3>Jessie Ca</h3>\r\n                           <span>I like Online Courses</span>\r\n                      </div>\r\n                      <ul class=\"social-icon\">\r\n                           <li><a href=\"#\" class=\"fa fa-twitter\"></a></li>\r\n                           <li><a href=\"#\" class=\"fa fa-envelope-o\"></a></li>\r\n                           <li><a href=\"#\" class=\"fa fa-linkedin\"></a></li>\r\n                      </ul>\r\n                 </div>\r\n            </div>\r\n\r\n            <div class=\"col-md-3 col-sm-6\">\r\n                 <div class=\"team-thumb\">\r\n                      <div class=\"team-image\">\r\n                           <img src=\"assets/images/author-image4.jpg\" class=\"img-fluid\" alt=\"\">\r\n                      </div>\r\n                      <div class=\"team-info\">\r\n                           <h3>Andrew Berti</h3>\r\n                           <span>Learning is fun</span>\r\n                      </div>\r\n                      <ul class=\"social-icon\">\r\n                           <li><a href=\"#\" class=\"fa fa-twitter\"></a></li>\r\n                           <li><a href=\"#\" class=\"fa fa-google\"></a></li>\r\n                           <li><a href=\"#\" class=\"fa fa-behance\"></a></li>\r\n                      </ul>\r\n                 </div>\r\n            </div>\r\n\r\n       </div>\r\n  </div>\r\n</section>"

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
    function ServicesWebComponent() {
    }
    ServicesWebComponent.prototype.ngOnInit = function () {
    };
    ServicesWebComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-services-web',
            template: __webpack_require__(/*! ./services-web.component.html */ "./src/app/layout/services-web/services-web.component.html"),
            styles: [__webpack_require__(/*! ./services-web.component.css */ "./src/app/layout/services-web/services-web.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ServicesWebComponent);
    return ServicesWebComponent;
}());



/***/ }),

/***/ "./src/app/layout/solution-web/solution-web.component.css":
/*!****************************************************************!*\
  !*** ./src/app/layout/solution-web/solution-web.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " /*---------------------------------------\r\n      SOLUTION              \r\n  -----------------------------------------*/\r\n\r\n  h2 {\r\n    padding-bottom: 10px;\r\n    font-weight: bold;\r\n    line-height: inherit;\r\n    text-align: center;\r\n  }\r\n\r\n  section {\r\n    position: relative;\r\n    padding: 100px 0;\r\n  }\r\n\r\n  .feature-thumb {\r\n    border: 1px solid #f0f0f0;\r\n    padding: 5em 3em;\r\n  }\r\n\r\n  .feature-thumb span {\r\n    background: #3f51b5;\r\n    border-radius: 50px;\r\n    color: #ffffff;\r\n    font-size: 25px;\r\n    font-weight: bold;\r\n    display: inline-block;\r\n    width: 60px;\r\n    height: 60px;\r\n    line-height: 60px;\r\n    text-align: center;\r\n    margin-bottom: 5px;\r\n  }\r\n\r\n  .feature-thumb h3 {\r\n    margin: 10px 0;\r\n  }\r\n"

/***/ }),

/***/ "./src/app/layout/solution-web/solution-web.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/layout/solution-web/solution-web.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <!-- solution -->\r\n <section id=\"feature\">\r\n  <div class=\"container\">\r\n       <div class=\"row\">\r\n            <div class=\"col-md-4 col-sm-4\">\r\n                 <div class=\"feature-thumb\">\r\n                      <span>01</span>\r\n                      <h3>Trending Courses</h3>\r\n                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing eiusmod tempor incididunt ut labore et dolore magna.</p>\r\n                 </div>\r\n            </div>\r\n\r\n            <div class=\"col-md-4 col-sm-4\">\r\n                 <div class=\"feature-thumb\">\r\n                      <span>02</span>\r\n                      <h3>Books & Library</h3>\r\n                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing eiusmod tempor incididunt ut labore et dolore magna.</p>\r\n                 </div>\r\n            </div>\r\n\r\n            <div class=\"col-md-4 col-sm-4\">\r\n                 <div class=\"feature-thumb\">\r\n                      <span>03</span>\r\n                      <h3>Certified Teachers</h3>\r\n                      <p>templatemo delivers a wide variety of HTML5 templates for you at absolutely no charge. Please tell your friends.</p>\r\n                 </div>\r\n            </div>\r\n       </div>\r\n  </div>\r\n</section>"

/***/ }),

/***/ "./src/app/layout/solution-web/solution-web.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/layout/solution-web/solution-web.component.ts ***!
  \***************************************************************/
/*! exports provided: SolutionWebComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SolutionWebComponent", function() { return SolutionWebComponent; });
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

var SolutionWebComponent = /** @class */ (function () {
    function SolutionWebComponent() {
    }
    SolutionWebComponent.prototype.ngOnInit = function () {
    };
    SolutionWebComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-solution-web',
            template: __webpack_require__(/*! ./solution-web.component.html */ "./src/app/layout/solution-web/solution-web.component.html"),
            styles: [__webpack_require__(/*! ./solution-web.component.css */ "./src/app/layout/solution-web/solution-web.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SolutionWebComponent);
    return SolutionWebComponent;
}());



/***/ })

}]);
//# sourceMappingURL=layout-layout-module.js.map