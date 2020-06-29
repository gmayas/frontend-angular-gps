(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-navbar></app-navbar>\n<div class=\"landing-container\">\n    <router-outlet></router-outlet>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin/admin.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin/admin.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!DOCTYPE html>\n<html>\n\n<head>\n  <title>Admin vehicle</title>\n</head>\n\n<body>\n  <div class=\"row\">\n    <div class=\"col-sm-3\">\n      <h3>Add vehicle:</h3>\n      <form [formGroup]=\"adminForm\"  autocomplete=\"on\">\n        <div class=\"form-group\">\n          <input type=\"hidden\" formControlName=\"id\" class=\"form-control\" [(ngModel)]=\"userServ.selectVehicle.id\" />\n        </div>\n        <div class=\"form-group\">\n          <label>Plates</label>\n          <input type=\"text\" formControlName=\"plates\" class=\"form-control\"\n            [(ngModel)]=\"userServ.selectVehicle.plates\" \n            [ngClass]=\"{ 'is-invalid': submitted && f.plates.errors }\" />\n          <div *ngIf=\"submitted && f.plates.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.plates.errors.required\">Plates is required</div>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <label>Make</label>\n          <input type=\"text\" formControlName=\"make\" class=\"form-control\"\n          [(ngModel)]=\"userServ.selectVehicle.make\" \n            [ngClass]=\"{ 'is-invalid': submitted && f.make.errors }\" />\n          <div *ngIf=\"submitted && f.make.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.make.errors.required\">Make is required</div>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <label>Color</label>\n          <input type=\"text\" formControlName=\"color\" class=\"form-control\"\n          [(ngModel)]=\"userServ.selectVehicle.color\" \n            [ngClass]=\"{ 'is-invalid': submitted && f.color.errors }\" />\n          <div *ngIf=\"submitted && f.color.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.color.errors.required\">Color is required</div>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <label>Model</label>\n          <input type=\"text\" formControlName=\"model\" class=\"form-control\"\n          [(ngModel)]=\"userServ.selectVehicle.model\" \n            [ngClass]=\"{ 'is-invalid': submitted && f.model.errors }\" />\n          <div *ngIf=\"submitted && f.model.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.model.errors.required\">Model is required</div>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <input type=\"hidden\" formControlName=\"userid\" class=\"form-control\" \n          [(ngModel)]=\"userServ.selectVehicle.userid\"/>\n        </div>\n        <div class=\"form-group\">\n          <input type=\"hidden\" formControlName=\"positiongps\" class=\"form-control\" \n          [(ngModel)]=\"userServ.selectVehicle.positiongps\"/>\n        </div>\n        <div class=\"form-group row\">\n          <div class=\"col-sm\" style=\"text-align:start\" >\n            <button [disabled]=\"loading\" class=\"btn btn-primary\"\n            (click)=\"onSubmit()\">\n              <span *ngIf=\"loading\" class=\"spinner-border spinner-border-sm mr-1\"></span>Save</button>\n          </div>\n          <div class=\"container col-sm\" style=\"text-align:end\">\n            <button class=\"btn btn-secondary\" (click)=\"onReset()\">clear</button>\n          </div>\n        </div>\n      </form>\n    </div>\n    <div class=\"col-sm-9\">\n      <h3>Vehicle data:</h3>\n      <table class=\"table table-hover\">\n        <thead>\n          <tr>\n           <!-- <th scope=\"col\" type=\"hidden\">ID</th> -->\n            <th scope=\"col\">Plates</th>\n            <th scope=\"col\">Make</th>\n            <th scope=\"col\">Color</th>\n            <th scope=\"col\">Model</th>\n            <!--<th scope=\"col\" type=\"hidden\">Userid</th>\n            <th scope=\"col\" type=\"hidden\">positiongps</th>-->\n            <th scope=\"col\">Action</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr  *ngFor=\"let vh of Vehicles\">\n           <!-- <td scope=\"row\" type=\"hidden\">{{ vh?.id }}</td> -->\n            <td scope=\"row\">{{ vh?.plates }}</td>\n            <td scope=\"row\">{{ vh?.make }}</td>\n            <td scope=\"row\">{{ vh?.color }}</td>\n            <td scope=\"row\">{{ vh?.model }}</td>\n            <!--<td scope=\"row\">{{ vh?.userid }}</td>\n            <td scope=\"row\">{{ vh?.positiongps }}</td> -->\n            <td scope=\"row\">\n              <a (click)=\"editVehicle(vh)\">\n                <i class=\"btn btn-warning\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Edit\"\n                  data-original-title=\"Edit\">Edit</i>\n              </a>\n              <!--<a (click)=\"deleteVehicle(vh)\">\n                <i class=\"btn btn-danger\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Delte\"\n                  data-original-title=\"Delete\">Delete</i>\n              </a>-->\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n</body>\n\n</html>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>Home</title>\n</head>\n<body>\n   <div class=\"jumbotron-full-bg\">\n        <br><br><br><br>\n        <div class=\"container\" style=\"text-align:start\">\n          <h1 class=\"display-3\">Hola.</h1>\n          <p class=\"lead\">Bienvenido a nuestro sistema.</p>\n          <hr class=\"my-4\">\n          <p>Si desea tener acceso, registrate o inicia sesión.</p>\n          <br><br><br><br><br><br><br>\n          <br><br>\n        </div>\n   </div>\n  <div class=\"footer-copyright text-center text-white-50 \">© 2020 Copyright:\n      <a> GMayaS C:\\>Desarrollo en Sistemas.</a>\n  </div>\n</body>\n</html>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\" style=\"text-align:start\">\n    <div class=\"row\">\n        <div class=\"col-lg-4\"></div>\n        <div class=\"jumbotron col-lg-4\">\n            <h2>Login</h2>\n            <form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\" class=\"form-horizontal\" autocomplete=\"on\">\n                <div class=\"form-group\">\n                    <label for=\"emailuser\" class=\"col-lg-8 control-label\">Email user</label>\n                    <input type=\"email\" formControlName=\"emailuser\" class=\"form-control\"\n                        [ngClass]=\"{ 'is-invalid': submitted && f.emailuser.errors }\" />\n                    <div *ngIf=\"submitted && f.emailuser.errors\" class=\"invalid-feedback col-lg-4\">\n                        <div *ngIf=\"f.emailuser.errors.required\">Email user is required</div>\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"passworduser\" class=\"col-lg-8 control-label\">Password</label>\n                    <input type=\"password\" formControlName=\"passworduser\" class=\"form-control\"\n                        [ngClass]=\"{ 'is-invalid': submitted && f.passworduser.errors }\" />\n                    <div *ngIf=\"submitted && f.passworduser.errors\" class=\"invalid-feedback col-lg-4\">\n                        <div *ngIf=\"f.passworduser.errors.required\">Password is required</div>\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <button [disabled]=\"loading\" class=\"btn btn-primary\">\n                        <span *ngIf=\"loading\" class=\"spinner-border spinner-border-sm mr-1\"></span>\n                        Login\n                    </button>\n                    <a type=\"button\" (click)=\"register()\" class=\"btn btn-link\">Register</a>\n                </div>\n            </form>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/map/map.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/map/map.component.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!DOCTYPE html>\n<html>\n  <head>\n    <title>Map</title>\n  </head>\n  <body>\n    <div id=\"map\"></div>\n  </body>\n</html>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbar/navbar.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbar/navbar.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand-lg navbar-dark bg-primary\">\n  <a class=\"navbar-brand\" href=\"\">Inicio</a>\n  <!-- <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarColor01\" aria-controls=\"navbarColor01\" aria-expanded=\"true\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button> -->\n  <div class=\"navbar-collapse collapse show\" id=\"navbarColor01\">\n    <!-- Left -->\n    <div class=\"navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2\">\n      <ul class=\"navbar-nav mr-auto\">\n        <li *ngIf=\"(auth.isAuthenticated() | async)\" class=\"nav-item active\">\n          <a class=\"nav-link btn btn-prmary\" type=\"button\" (click)=\"admin()\">Admin</a>\n        </li>\n        <li *ngIf=\"!(auth.isAuthenticated() | async)\" class=\"nav-item active\">\n          <a class=\"nav-link btn btn-prmary\" type=\"button\" (click)=\"register()\">Register</a>\n        </li>\n        <li *ngIf=\"(auth.isAuthenticated() | async)\" class=\"nav-item active\">\n          <a class=\"nav-link btn btn-prmary\" type=\"button\" (click)=\"map()\">Map</a>\n        </li>\n        <!--\n        <li *ngIf=\"(auth.isAuthenticated() | async)\" class=\"nav-item active\">\n          <a class=\"nav-link btn btn-prmary\" type=\"button\" (click)=\"profile()\">Profile</a>\n        </li> -->\n        <!--\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"//codeply.com\">Codeply</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">Link</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">Link</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">Link</a>\n      </li> -->\n      </ul>\n    </div>\n    <!-- center -->\n    <div class=\"mx-auto order-0\">\n      <div *ngIf=\"( auth.isAuthenticated() | async )\" class=\"navbar-brand\">\n        <a *ngIf=\"( user | async )\" class=\"navbar-brand mx-auto\"> Hola: {{ (user | async)?.nameuser }}</a>\n      </div>\n    </div>\n    <!-- Right -->\n    <div class=\"navbar-collapse collapse w-100 order-3 dual-collapse2\">\n      <ul class=\"navbar-nav ml-auto\">\n        <li class=\"nav-item\">\n          <div class=\"btn-group\">\n            <button *ngIf=\"!(auth.isAuthenticated() | async)\" type=\"button\" (click)=\"entrar()\"\n              class=\"btn btn-warning my-2 my-sm-0\">Entrar</button>\n            <button *ngIf=\"(auth.isAuthenticated() | async)\" type=\"button\" (click)=\"salir()\"\n              class=\"btn btn-danger my-2 my-sm-0\">Salir</button>\n          </div>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/register/register.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/register/register.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\" style=\"text-align:start\">\n    <div class=\"row\">\n        <div class=\"col-lg-4\"></div>\n        <div class=\"jumbotron col-lg-4\">\n            <h2>Register user</h2>\n            <form [formGroup]=\"registerForm\" (ngSubmit)=\"onSubmit()\">\n                <div class=\"form-group\">\n                    <label>User name</label>\n                    <input type=\"text\" formControlName=\"nameuser\" class=\"form-control\"\n                        [ngClass]=\"{ 'is-invalid': submitted && f.nameuser.errors }\" />\n                    <div *ngIf=\"submitted && f.nameuser.errors\" class=\"invalid-feedback\">\n                        <div *ngIf=\"f.nameuser.errors.required\">User name is required</div>\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <label>Email user</label>\n                    <input type=\"text\" formControlName=\"emailuser\" class=\"form-control\"\n                        [ngClass]=\"{ 'is-invalid': submitted && f.emailuser.errors }\" />\n                    <div *ngIf=\"submitted && f.emailuser.errors\" class=\"invalid-feedback\">\n                        <div *ngIf=\"f.emailuser.required\">Email is required</div>\n                        <div *ngIf=\"f.emailuser.email\">Email must be a valid email address</div>\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <label>Password</label>\n                    <input type=\"password\" formControlName=\"password\" class=\"form-control\"\n                        [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" />\n                    <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\n                        <div *ngIf=\"f.password.errors.required\">Password is required</div>\n                        <div *ngIf=\"f.password.errors.minlength\">Password must be at least 6 characters\n                        </div>\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <label>Confirm Password</label>\n                    <input type=\"password\" formControlName=\"confirmPassword\" class=\"form-control\"\n                        [ngClass]=\"{ 'is-invalid': submitted && f.confirmPassword.errors }\" />\n                    <div *ngIf=\"submitted && f.confirmPassword.errors\" class=\"invalid-feedback\">\n                        <div *ngIf=\"f.confirmPassword.errors.required\">Confirm Password is required</div>\n                        <div *ngIf=\"f.confirmPassword.errors.mustMatch\">Passwords must match</div>\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <label>Type of user</label>\n                    <select formControlName=\"typeiduser\" class=\"form-control\"\n                        [ngClass]=\"{ 'is-invalid': submitted && f.typeiduser.errors }\">\n                        <option value=1>AdminUser</option>\n                        <option value=2>SimpleUser</option>\n                    </select>\n                    <div *ngIf=\"submitted && f.typeiduser.errors\" class=\"invalid-feedback\">\n                        <div *ngIf=\"f.typeiduser.errors.required\">Type of user is required</div>\n                    </div>\n                </div>\n                <div class=\"form-group row\">\n                    <div class=\"col-sm\" style=\"text-align:start\">\n                        <button class=\"btn btn-primary mr-1\">Register</button>\n                    </div>\n                    <div class=\"container col-sm\" style=\"text-align:end\">\n                        <button class=\"btn btn-secondary\" type=\"reset\" (click)=\"onReset()\">Cancel</button>\n                    </div>\n                </div>\n            </form>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app/guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/admin/admin.component */ "./src/app/components/admin/admin.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _components_map_map_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/map/map.component */ "./src/app/components/map/map.component.ts");









const routes = [
    { path: '', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"] },
    { path: 'register', component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"] },
    { path: 'admin', component: _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_5__["AdminComponent"], canActivate: [_app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]] },
    { path: 'map', component: _components_map_map_component__WEBPACK_IMPORTED_MODULE_8__["MapComponent"], canActivate: [_app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'frontend-angular-gps';
    }
};
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/admin/admin.component */ "./src/app/components/admin/admin.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _angular_google_maps__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/google-maps */ "./node_modules/@angular/google-maps/__ivy_ngcc__/fesm2015/google-maps.js");
/* harmony import */ var _components_map_map_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/map/map.component */ "./src/app/components/map/map.component.ts");

















//
let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
            _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__["NavbarComponent"],
            _components_home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
            _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_9__["AdminComponent"],
            _components_login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"],
            _components_register_register_component__WEBPACK_IMPORTED_MODULE_14__["RegisterComponent"],
            _components_map_map_component__WEBPACK_IMPORTED_MODULE_16__["MapComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_13__["ToastrModule"].forRoot(),
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _angular_google_maps__WEBPACK_IMPORTED_MODULE_15__["GoogleMapsModule"]
        ],
        providers: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"], _angular_google_maps__WEBPACK_IMPORTED_MODULE_15__["GoogleMap"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/admin/admin.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/admin/admin.component.css ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRtaW4vYWRtaW4uY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/components/admin/admin.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/admin/admin.component.ts ***!
  \*****************************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var src_app_services_users_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/users.service */ "./src/app/services/users.service.ts");
/* harmony import */ var src_app_models_vehicle_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/models/vehicle.model */ "./src/app/models/vehicle.model.ts");










//
let AdminComponent = class AdminComponent {
    //
    constructor(auth, userServ, formBuilder, route, router, toastr) {
        this.auth = auth;
        this.userServ = userServ;
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.toastr = toastr;
        this.loading = false;
        this.submitted = false;
        //
        this.isAuth = false;
        this.alive = true;
        this.user = this.auth.user();
        console.log('this.user.id: ', lodash__WEBPACK_IMPORTED_MODULE_7__["get"](this.user.value, 'id'));
        this.getUserVehicle(null);
    }
    ngOnInit() {
        //emailuser, nameuser, passworduser, typeiduser
        this.adminForm = this.formBuilder.group({
            id: [null],
            plates: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            make: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            color: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            model: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            userid: [null],
            positiongps: [null]
        });
    }
    ngOnDestroy() {
        this.alive = false;
    }
    ngOnChanges() {
        this.user = this.auth.user();
        this.userServ.getUserVehicle(null)
            .subscribe((data) => {
            console.log('data: ', data);
            this.Vehicles = data.data;
        });
    }
    // convenience getter for easy access to form fields
    get f() { return this.adminForm.controls; }
    onSubmit() {
        this.submitted = true;
        this.loading = true;
        console.log('this.adminForm.invalid: ', this.adminForm.invalid);
        console.log('this.adminForm.value: ', this.adminForm.value);
        // stop here if form is invalid
        if (this.adminForm.invalid) {
            return;
        }
        console.log('this.adminForm.value: ', this.adminForm.value);
        this.userServ.saveVehicle(this.adminForm.value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["first"])())
            .subscribe(data => {
            console.log('data: ', data);
            this.toastr.success('Hello, vehicle saved successfully', 'Aviso de Angular 9', {
                timeOut: 10000,
                positionClass: 'toast-bottom-right'
            });
            this.getUserVehicle(null);
            this.onReset();
        }, error => {
            this.toastr.error('Error register: ' + lodash__WEBPACK_IMPORTED_MODULE_7__["get"](error, 'error'), 'Aviso de Angular 9', {
                timeOut: 10000,
                positionClass: 'toast-bottom-right'
            });
            console.log('error Register: ', error);
            this.onReset();
        });
    }
    onReset() {
        this.submitted = false;
        this.loading = false;
        this.userServ.selectVehicle = new src_app_models_vehicle_model__WEBPACK_IMPORTED_MODULE_9__["vehicleModel"]();
        this.adminForm.reset();
        console.log('this.adminForm.value: ', this.adminForm.value);
    }
    editVehicle(vh) {
        this.userServ.selectVehicle = Object.assign({}, vh);
        console.log('Edit selectVehicle: ', this.userServ.selectVehicle);
    }
    deleteVehicle(vh) {
        console.log('Edit vh: ', vh);
        this.userServ.selectVehicle = Object.assign({}, vh);
    }
    getUserVehicle(id) {
        this.userServ.getUserVehicle(id)
            .subscribe((data) => {
            console.log('data: ', data);
            this.Vehicles = data.data;
        });
    }
};
AdminComponent.ctorParameters = () => [
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: src_app_services_users_service__WEBPACK_IMPORTED_MODULE_8__["UsersService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] }
];
AdminComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-admin',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./admin.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin/admin.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./admin.component.css */ "./src/app/components/admin/admin.component.css")).default]
    })
], AdminComponent);



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");



let HomeComponent = class HomeComponent {
    constructor(auth) {
        this.auth = auth;
        this.auth.profile();
    }
    ngOnInit() {
    }
};
HomeComponent.ctorParameters = () => [
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
HomeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_7__);








let LoginComponent = class LoginComponent {
    constructor(auth, formBuilder, route, router, toastr) {
        this.auth = auth;
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.toastr = toastr;
        this.loading = false;
        this.submitted = false;
    }
    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            emailuser: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            passworduser: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
    }
    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }
    onSubmit() {
        try {
            this.submitted = true;
            // stop here if form is invalid
            if (this.loginForm.invalid) {
                return;
            }
            this.loading = true;
            console.log(this.f.emailuser.value, this.f.passworduser.value);
            this.auth.login(this.f.emailuser.value, this.f.passworduser.value)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["first"])())
                .subscribe(data => {
                console.log('data: ', data);
                this.toastr.success('Hello welcome ' + lodash__WEBPACK_IMPORTED_MODULE_7__["get"](data, 'nameuser'), 'Aviso de Angular 9', {
                    timeOut: 10000,
                    positionClass: 'toast-bottom-right'
                });
                this.router.navigate(['admin']);
            }, error => {
                this.toastr.error('Error login', 'Aviso de Angular 9', {
                    timeOut: 10000,
                    positionClass: 'toast-bottom-right'
                });
                console.log('error Login: ', error);
                this.loginForm.reset();
                this.submitted = true;
                this.loading = false;
            });
        }
        catch (e) {
            console.error(e);
        }
    }
    register() {
        this.router.navigate(['register']);
    }
};
LoginComponent.ctorParameters = () => [
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] }
];
LoginComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/components/map/map.component.css":
/*!**************************************************!*\
  !*** ./src/app/components/map/map.component.css ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWFwL21hcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/map/map.component.ts":
/*!*************************************************!*\
  !*** ./src/app/components/map/map.component.ts ***!
  \*************************************************/
/*! exports provided: MapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapComponent", function() { return MapComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_google_maps__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/google-maps */ "./node_modules/@angular/google-maps/__ivy_ngcc__/fesm2015/google-maps.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_users_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/users.service */ "./src/app/services/users.service.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");











let MapComponent = class MapComponent {
    constructor(auth, userServ, router, toastr, google) {
        this.auth = auth;
        this.userServ = userServ;
        this.router = router;
        this.toastr = toastr;
        this.google = google;
        // Create an Observable that will publish a value on an interval
        this.secondsCounter = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(5000);
        this.isAuth = false;
        this.alive = true;
        this.user = this.auth.user();
        console.log('this.user.id: ', lodash__WEBPACK_IMPORTED_MODULE_8__["get"](this.user.value, 'id'));
        this.getUserVehicle(null);
    }
    // Initialize and add the map
    initMap() {
        // Try HTML5 geolocation.
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                this.uluru = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };
                this.map = new google.maps.Map(document.getElementById('map'), {
                    center: this.uluru,
                    zoom: 5
                });
                this.infoWindow = new google.maps.InfoWindow;
                this.infoWindow.setPosition(this.uluru);
                this.infoWindow.setContent(`Usted esta aqui: ${this.uluru.lat} ,  ${this.uluru.lng}`);
                this.infoWindow.open(this.map);
                this.map.setCenter(this.uluru);
            }, () => {
                this.handleLocationError(true, this.infoWindow, this.map.getCenter());
            });
        }
        else {
            // Browser doesn't support Geolocation
            this.handleLocationError(false, this.infoWindow, this.map.getCenter());
        }
        // add markers to map
        // Subscribe to begin publishing values
        let rdPS1 = 0, rdPS2 = 0;
        let markers = [];
        let dataIn = {};
        let marker = new google.maps.Marker();
        this.secondsCounter
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeWhile"])(() => this.alive))
            .subscribe(n => {
            for (var i = 0; i < markers.length; i++) {
                markers[i].setMap(null);
            }
            markers = [];
            this.Vehicles.map((vl, id, ar) => {
                //console.log(_.get(ar[id],"plates"))
                rdPS1 = this.getRandomInt(-10, 10);
                rdPS2 = this.getRandomInt(-10, 10);
                // add markers to map
                this.uluruA = [{ lat: this.uluru.lat, lng: this.uluru.lng }];
                this.uluruA.map((l, i, a) => {
                    //console.log(a[i])
                    let c = { lat: lodash__WEBPACK_IMPORTED_MODULE_8__["get"](l, 'lat') + rdPS1, lng: lodash__WEBPACK_IMPORTED_MODULE_8__["get"](l, 'lng') + rdPS2 };
                    //console.log('c: ', c)
                    marker = new google.maps.Marker({
                        position: c,
                        label: { color: 'black', text: `${lodash__WEBPACK_IMPORTED_MODULE_8__["get"](ar[id], "plates")}` },
                        map: this.map
                    });
                    markers.push(marker);
                    dataIn = {
                        id: lodash__WEBPACK_IMPORTED_MODULE_8__["get"](ar[id], "id"),
                        latitude: lodash__WEBPACK_IMPORTED_MODULE_8__["get"](c, 'lat'),
                        longitude: lodash__WEBPACK_IMPORTED_MODULE_8__["get"](c, 'lng'),
                        zoom: 5
                    };
                    this.setPosition(dataIn);
                });
                //
                for (var i = 0; i < markers.length; i++) {
                    markers[i].setMap(this.map);
                }
            });
            // 
            console.log(`It's been ${n} seconds since subscribing!`);
            if (n == 5) {
                this.alive = false;
            }
        });
    }
    setPosition(dataIn) {
        this.userServ.setPosition(dataIn)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])())
            .subscribe(data => {
            console.log('data: ', data);
            //this.getUserVehicle(null);
        }, error => {
            this.toastr.error('Error register', 'Aviso de Angular 9', {
                timeOut: 10000,
                positionClass: 'toast-bottom-right'
            });
            this.router.navigate(['home']);
            console.log('error Register: ', error);
        });
    }
    handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
            'Error: The Geolocation service failed.' :
            'Error: Your browser doesn\'t support geolocation.');
        this.handleLocationError(false, this.infoWindow, this.map.getCenter());
        infoWindow.open(this.map);
    }
    ngOnInit() {
        this.initMap();
    }
    ngOnDestroy() {
        this.alive = false;
    }
    ngOnChanges() {
        this.user = this.auth.user();
    }
    getUserVehicle(id) {
        this.userServ.getUserVehicle(id)
            .subscribe((data) => {
            console.log('data: ', data);
            this.Vehicles = data.data;
        });
    }
    // Retorna un entero aleatorio entre min (incluido) y max (excluido)
    // ¡Usando Math.round() te dará una distribución no-uniforme!
    getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }
};
MapComponent.ctorParameters = () => [
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: src_app_services_users_service__WEBPACK_IMPORTED_MODULE_7__["UsersService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrService"] },
    { type: _angular_google_maps__WEBPACK_IMPORTED_MODULE_4__["GoogleMap"] }
];
MapComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-map',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./map.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/map/map.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./map.component.css */ "./src/app/components/map/map.component.css")).default]
    })
], MapComponent);



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");




//import 'rxjs/add/operator/takeWhile';

//
let NavbarComponent = class NavbarComponent {
    //   
    constructor(auth, router) {
        this.auth = auth;
        this.router = router;
        //
        this.isAuth = false;
        this.alive = true;
        this.auth.isAuthenticated()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeWhile"])(() => this.alive))
            .takeUntil(this.auth.isSigningOut())
            .subscribe((isAuth) => {
            this.isAuth = isAuth;
            console.log('this.isAuth: ', this.isAuth);
        });
    }
    ngOnChanges() {
        this.user = this.auth.user();
    }
    ngOnInit() {
        this.user = this.auth.user();
        console.log('this.user: ', this.user);
    }
    ngOnDestroy() {
        this.alive = false;
    }
    entrar() {
        console.log('entrar');
        this.router.navigate(['login']);
    }
    salir() {
        this.auth.logout();
        this.router.navigate(['']);
    }
    admin() {
        this.router.navigate(['admin']);
    }
    register() {
        this.router.navigate(['register']);
    }
    map() {
        this.router.navigate(['map']);
    }
    profile() {
        this.auth.profile();
    }
};
NavbarComponent.ctorParameters = () => [
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
NavbarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-navbar',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbar/navbar.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/navbar/navbar.component.css")).default]
    })
], NavbarComponent);



/***/ }),

/***/ "./src/app/components/register/register.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/register/register.component.css ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/components/register/register.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/register/register.component.ts ***!
  \***********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _modules_must_match_validator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../modules/must-match.validator */ "./src/app/modules/must-match.validator.ts");








// import custom validator to validate that password and confirm password fields match

let RegisterComponent = class RegisterComponent {
    constructor(auth, formBuilder, route, router, toastr) {
        this.auth = auth;
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.toastr = toastr;
        this.loading = false;
        this.submitted = false;
    }
    ngOnInit() {
        //emailuser, nameuser, passworduser, typeiduser
        this.registerForm = this.formBuilder.group({
            emailuser: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email]],
            nameuser: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(6)]],
            confirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            typeiduser: [1, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        }, {
            validator: Object(_modules_must_match_validator__WEBPACK_IMPORTED_MODULE_8__["MustMatch"])('password', 'confirmPassword')
        });
    }
    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }
    onSubmit() {
        this.submitted = true;
        this.loading = true;
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
        console.log('this.registerForm.value: ', this.registerForm.value);
        this.auth.register(this.registerForm.value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["first"])())
            .subscribe(data => {
            console.log('data: ', data);
            this.toastr.success('Hello welcome ' + lodash__WEBPACK_IMPORTED_MODULE_7__["get"](data, 'nameuser'), 'Aviso de Angular 9', {
                timeOut: 10000,
                positionClass: 'toast-bottom-right'
            });
            this.router.navigate(['admin']);
        }, error => {
            //this.router.navigate(['']);
            this.toastr.error('Error register: ' + lodash__WEBPACK_IMPORTED_MODULE_7__["get"](error, 'error'), 'Aviso de Angular 9', {
                timeOut: 10000,
                positionClass: 'toast-bottom-right'
            });
            console.log('error Register: ', error);
            this.onReset();
        });
    }
    onReset() {
        this.submitted = false;
        this.loading = false;
        this.registerForm.reset();
    }
};
RegisterComponent.ctorParameters = () => [
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] }
];
RegisterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/register/register.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./register.component.css */ "./src/app/components/register/register.component.css")).default]
    })
], RegisterComponent);



/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");




let AuthGuard = class AuthGuard {
    constructor(auth, router, route) {
        this.auth = auth;
        this.router = router;
        this.route = route;
    }
    canLoad() {
        if (!this.auth.isAuthenticated().getValue()) {
            this.router.navigate(['/']);
            return false;
        }
        return true;
    }
    canActivate() {
        if (!this.auth.isAuthenticated().getValue()) {
            this.router.navigate(['/']);
            return false;
        }
        return true;
    }
};
AuthGuard.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
AuthGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], AuthGuard);



/***/ }),

/***/ "./src/app/models/vehicle.model.ts":
/*!*****************************************!*\
  !*** ./src/app/models/vehicle.model.ts ***!
  \*****************************************/
/*! exports provided: vehicleModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vehicleModel", function() { return vehicleModel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class vehicleModel {
    constructor(id = 0, plates = '', make = '', color = '', model = '', userid = 0, positiongpsc = 0) {
        this.id = id;
        this.plates = plates;
        this.make = make;
        this.color = color;
        this.model = model;
        this.userid = userid;
        this.positiongps = positiongpsc;
    }
}
;


/***/ }),

/***/ "./src/app/modules/must-match.validator.ts":
/*!*************************************************!*\
  !*** ./src/app/modules/must-match.validator.ts ***!
  \*************************************************/
/*! exports provided: MustMatch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MustMatch", function() { return MustMatch; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

// custom validator to check that two fields match
function MustMatch(controlName, matchingControlName) {
    return (formGroup) => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];
        if (matchingControl.errors && !matchingControl.errors.mustMatch) {
            // return if another validator has already found an error on the matchingControl
            return;
        }
        // set error on matchingControl if validation fails
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ mustMatch: true });
        }
        else {
            matchingControl.setErrors(null);
        }
    };
}


/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs_add_operator_debounceTime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/add/operator/debounceTime */ "./node_modules/rxjs-compat/_esm2015/add/operator/debounceTime.js");
/* harmony import */ var rxjs_compat_add_operator_takeUntil__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs-compat/add/operator/takeUntil */ "./node_modules/rxjs-compat/add/operator/takeUntil.js");
/* harmony import */ var rxjs_compat_add_operator_takeUntil__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(rxjs_compat_add_operator_takeUntil__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");











//
let AuthService = class AuthService {
    constructor(http, router, toastr) {
        this.http = http;
        this.router = router;
        this.toastr = toastr;
        this.currentUser$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](null);
        this.authState$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](false);
        this.signingOut$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](false);
        this.currentUser$.next(this.getCurrentUser());
        this.authState$.next(this.isLoggedIn());
        this.signingOut$.next(this.isSigningOut());
    }
    // Regresa el estado de si esta loggeado o no, pero como observer
    isAuthenticated() {
        return this.authState$;
    }
    // Regresa cualquier cambio en el objeto de usuario, como observer
    user() {
        return this.currentUser$;
    }
    // Regresa el usuario actual obtenido del local storage
    getCurrentUser() {
        const user = localStorage.getItem('currentUser');
        const jwtToken = localStorage.getItem('jwtToken');
        if (!user || !jwtToken) {
            return false;
        }
        return JSON.parse(user);
    }
    // Regresa si esta o no logeado actualmente a modo de estatico
    isLoggedIn() {
        return !!this.getCurrentUser();
    }
    login(emailuser, passworduser) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'Content-Type': 'application/json',
            })
        };
        console.log('environment.api_url: ', _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].api_url);
        console.log('user: ', emailuser, passworduser);
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].api_url + '/auth/signin', { emailuser, passworduser })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])((user) => {
            console.log('user Login: ', user);
            if (!user.success) {
                this.logout();
                return Promise.reject(user);
            }
            localStorage.setItem('jwtToken', user.token);
            localStorage.setItem('currentUser', JSON.stringify(user));
            this.currentUser$.next(user);
            this.authState$.next(user.success);
            this.signingOut$.next(!user.success);
            return user;
        }, (error) => {
            this.logout();
            console.log('error profile: ', error);
        }));
    }
    register(dataIn) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'Content-Type': 'application/json',
            })
        };
        console.log('dataIn: ', dataIn);
        const dataUser = {
            emailuser: lodash__WEBPACK_IMPORTED_MODULE_9__["get"](dataIn, 'emailuser'),
            nameuser: lodash__WEBPACK_IMPORTED_MODULE_9__["get"](dataIn, 'nameuser'),
            passworduser: lodash__WEBPACK_IMPORTED_MODULE_9__["get"](dataIn, 'password'),
            typeiduser: lodash__WEBPACK_IMPORTED_MODULE_9__["get"](dataIn, 'typeiduser')
        };
        console.log('environment.api_url: ', _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].api_url);
        console.log('dataUser: ', dataUser);
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].api_url + '/auth/signup', dataUser)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])((user) => {
            console.log('user Register: ', user);
            if (!user.success) {
                this.logout();
                return Promise.reject(user);
            }
            ;
            localStorage.setItem('jwtToken', user.token);
            localStorage.setItem('currentUser', JSON.stringify(user));
            this.currentUser$.next(user);
            this.authState$.next(user.success);
            this.signingOut$.next(!user.success);
            return user;
        }, (error) => {
            this.logout();
            console.log('error profile: ', error);
        }));
    }
    logout() {
        // remove user from local storage and set current user to null
        localStorage.removeItem('currentUser');
        localStorage.removeItem('jwtToken');
        this.currentUser$.next(null);
        this.authState$.next(false);
        this.signingOut$.next(true);
        //this.router.navigate(['home']);
    }
    isSigningOut() {
        return this.signingOut$;
    }
    profile() {
        try {
            const httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                    'Content-Type': 'application/json',
                    'token': localStorage.getItem('jwtToken')
                })
            };
            console.log('httpOptions: ', httpOptions);
            return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].api_url + '/auth/profile', httpOptions)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["first"])())
                .subscribe((user) => {
                console.log('user: ', user);
                this.toastr.success('Hello: Welcome ' + lodash__WEBPACK_IMPORTED_MODULE_9__["get"](user.data[0], 'nameuser'), 'Aviso de Angular 9', {
                    timeOut: 10000,
                    positionClass: 'toast-bottom-right'
                });
                //this.router.navigate(['admin']);
                return user;
            }, error => {
                this.logout();
                //this.router.navigate(['home']);
                this.toastr.success('Hello: Welcome, register or log in.', 'Aviso de Angular 9', {
                    timeOut: 10000,
                    positionClass: 'toast-bottom-right'
                });
                console.log('error profile: ', error);
            });
        }
        catch (e) {
            console.log('error profile: ', e);
        }
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_10__["ToastrService"] }
];
AuthService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthService);



/***/ }),

/***/ "./src/app/services/users.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/users.service.ts ***!
  \*******************************************/
/*! exports provided: UsersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersService", function() { return UsersService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs_add_operator_debounceTime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/add/operator/debounceTime */ "./node_modules/rxjs-compat/_esm2015/add/operator/debounceTime.js");
/* harmony import */ var rxjs_compat_add_operator_takeUntil__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs-compat/add/operator/takeUntil */ "./node_modules/rxjs-compat/add/operator/takeUntil.js");
/* harmony import */ var rxjs_compat_add_operator_takeUntil__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(rxjs_compat_add_operator_takeUntil__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var _models_vehicle_model__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../models/vehicle.model */ "./src/app/models/vehicle.model.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./auth.service */ "./src/app/services/auth.service.ts");












let UsersService = class UsersService {
    constructor(http, router, toastr, auth) {
        this.http = http;
        this.router = router;
        this.toastr = toastr;
        this.auth = auth;
        this.selectVehicle = new _models_vehicle_model__WEBPACK_IMPORTED_MODULE_10__["vehicleModel"];
    }
    getUserVehicle(id) {
        try {
            const httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                    'Content-Type': 'application/json',
                    'token': localStorage.getItem('jwtToken')
                })
            };
            console.log('httpOptions: ', httpOptions);
            return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].api_url + `/user/userVehicles/${id}`, httpOptions)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((data) => {
                console.log('data: ', data);
                return data;
            }, error => {
                this.auth.logout();
                this.router.navigate(['home']);
                this.toastr.success('Hello: Your session has expired, just log in again.', 'Aviso de Angular 9', {
                    timeOut: 10000,
                    positionClass: 'toast-bottom-right'
                });
                console.log('error profile: ', error);
            }));
        }
        catch (e) {
            console.log('error profile: ', e);
        }
    }
    saveVehicle(dataIn) {
        try {
            console.log('dataIn: ', dataIn);
            let api_url, params = {}, headers;
            params.id = lodash__WEBPACK_IMPORTED_MODULE_8__["get"](dataIn, 'id');
            headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'token': localStorage.getItem('jwtToken')
            });
            let dataVehicle = {
                id: lodash__WEBPACK_IMPORTED_MODULE_8__["get"](dataIn, 'id'),
                plates: lodash__WEBPACK_IMPORTED_MODULE_8__["get"](dataIn, 'plates'),
                make: lodash__WEBPACK_IMPORTED_MODULE_8__["get"](dataIn, 'make'),
                color: lodash__WEBPACK_IMPORTED_MODULE_8__["get"](dataIn, 'color'),
                model: lodash__WEBPACK_IMPORTED_MODULE_8__["get"](dataIn, 'model'),
                userid: lodash__WEBPACK_IMPORTED_MODULE_8__["get"](dataIn, 'userid'),
                positiongps: lodash__WEBPACK_IMPORTED_MODULE_8__["get"](dataIn, 'positiongps')
            };
            //
            if (lodash__WEBPACK_IMPORTED_MODULE_8__["isNil"](dataVehicle.id) || dataVehicle.id == 0) {
                this.auth.user()
                    .subscribe((user) => {
                    console.log('user: ', user);
                    dataVehicle.userid = user.id;
                });
                api_url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].api_url + '/user/addVehicle';
            }
            else {
                api_url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].api_url + `/user/updateVehicle/${params.id}`;
            }
            ;
            console.log('environment.api_url: ', api_url);
            console.log('dataVehicle: ', dataVehicle);
            console.log('headers: ', headers);
            return this.http.post(api_url, dataVehicle, { headers })
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((data) => {
                console.log('data: ', data);
                return data;
            }, error => {
                this.auth.logout();
                this.router.navigate(['home']);
                this.toastr.success('Hello: Your session has expired, just log in again.', 'Aviso de Angular 9', {
                    timeOut: 10000,
                    positionClass: 'toast-bottom-right'
                });
                console.log('error profile: ', error);
            }));
        }
        catch (e) {
            console.log('error profile: ', e);
        }
    }
    setPosition(dataIn) {
        //console.log('dataIn: ', dataIn);
        let api_url, params = {}, headers;
        headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'token': localStorage.getItem('jwtToken')
        });
        let dataPosition = {
            idvehicles: lodash__WEBPACK_IMPORTED_MODULE_8__["get"](dataIn, 'id'),
            latitude: lodash__WEBPACK_IMPORTED_MODULE_8__["get"](dataIn, 'latitude'),
            longitude: lodash__WEBPACK_IMPORTED_MODULE_8__["get"](dataIn, 'longitude'),
            zoom: lodash__WEBPACK_IMPORTED_MODULE_8__["get"](dataIn, 'zoom')
        };
        console.log('dataPosition: ', dataPosition);
        //console.log('headers: ', headers);
        //
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].api_url + '/user/addPosition', dataPosition)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((data) => {
            console.log('data: ', data);
            return data;
        }, error => {
            this.auth.logout();
            this.router.navigate(['home']);
            this.toastr.success('Hello: Your session has expired, just log in again.', 'Aviso de Angular 9', {
                timeOut: 10000,
                positionClass: 'toast-bottom-right'
            });
            console.log('error profile: ', error);
        }));
    }
};
UsersService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrService"] },
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_11__["AuthService"] }
];
UsersService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], UsersService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false,
    api_url: 'http://localhost:3000/api'
    //api_url: 'https://gpsapiproject.herokuapp.com/api'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\isc_g\Desktop\2020\Desarrollos\PostgreSQL\frontend-angular-gps\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map