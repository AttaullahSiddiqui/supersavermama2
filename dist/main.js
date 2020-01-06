(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/error/404.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/error/404.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app flex-row align-items-center\">\n  <div class=\"container\">\n    <div class=\"row justify-content-center\">\n      <div class=\"col-md-6\">\n        <div class=\"clearfix\">\n          <h1 class=\"float-left display-3 mr-4\">404</h1>\n          <h4 class=\"pt-3\">Oops! You're lost.</h4>\n          <p class=\"text-muted\">The page you are looking for was not found.</p>\n        </div>\n        <div class=\"input-prepend input-group\">\n          <div class=\"input-group-prepend\">\n            <span class=\"input-group-text\"><i class=\"fa fa-search\"></i></span>\n          </div>\n          <input id=\"prependedInput\" class=\"form-control\" size=\"16\" type=\"text\" placeholder=\"What are you looking for?\">\n          <span class=\"input-group-append\">\n            <button class=\"btn btn-info\" type=\"button\">Search</button>\n          </span>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/menu/menu.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/menu/menu.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div id=\"mySidenav\" class=\"sidenav\">\n  <a class=\"closebtn\" (click)=\"closeNav($event)\">&times;</a>\n  <ul class=\"list-group\">\n    <li class=\"list-group-item\" routerLink=\"/home\" (click)=\"closeNav($event)\">Home</li>\n    <li class=\"list-group-item\" routerLink=\"/stores\" (click)=\"closeNav($event)\">Stores</li>\n    <li class=\"list-group-item\" routerLink=\"/categories\" (click)=\"closeNav($event)\">Categories</li>\n    <li class=\"list-group-item\" routerLink=\"/blogs\" (click)=\"closeNav($event)\">Blogs</li>\n  </ul>\n</div> -->\n<nav class=\"navbar navbar-expand-lg navbar-dark custom-nav static-top\">\n  <div class=\"container\">\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarResponsive\"\n      aria-controls=\"navbarResponsive\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarResponsive\">\n      <ul class=\"navbar-nav ml-auto\">\n        <li class=\"nav-item active\">\n          <a class=\"nav-link\" href=\"\" [routerLink]=\"['/top-stores']\">Top winkels\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"\" [routerLink]=\"['/categories']\">Categorieën</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"\">Deel een kortingsbon</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"\" [routerLink]=\"['/blogs']\">Blog</a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n<a class=\"navbar-brand\" href=\"#\">\n  <img src=\"../../assets/saverrrrr.png\" alt=\"\">\n</a>\n<div class=\"home-search\">\n  <div class=\"container\">\n    <h1 class=\"customHead text-center text-uppercase\">\n      Korting met duizenden kortingscodes & aanbiedingen op SuperSaverMama.nl\n    </h1>\n    <div class=\"input-set\">\n      <div class=\"col-md-8 col-xs-12 col-sm-12 mx-auto\">\n        <div class=\"row\">\n          <div class=\"search-bar-home searchjs col-xs-12 col-12\">\n            <div class=\"input-group\">\n              <span class=\"input-group-addon\"><i class=\"fa fa-search\"></i></span>\n              <input type=\"text\" class=\"form-control search\" placeholder=\"Bespaar op winkels, merken en categorieën\">\n              <span class=\"input-group-btn secondBtn\">\n                <button class=\"btn btn-lgg waves-effect waves-light\" type=\"button\">Zoeken</button>\n              </span> </div>\n            <div class=\"clearfix\"></div>\n            <!-- <div id=\"resultContainer\" class=\"resultContainer\" style=\"display: none;\">\n              <div id=\"searchResults\" class=\"searchResults resultsearch\"> </div>\n            </div> -->\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"clearfix\"></div>\n    <h2 class=\"customHead text-uppercase\">Shop online met korting met 10.000+ acties in\n      december 2019\n      <br><b>Top</b> WINKELS</h2>\n    <div class=\"row justify-content-between\">\n      <div class=\"cardd text-center\">\n        <img src=\"../../assets/images/link1.png\" alt=\"\">\n      </div>\n      <div class=\"cardd text-center\">\n        <img src=\"../../assets/images/link1.png\" alt=\"\">\n      </div>\n      <div class=\"cardd text-center\">\n        <img src=\"../../assets/images/link1.png\" alt=\"\">\n      </div>\n      <div class=\"cardd text-center\">\n        <img src=\"../../assets/images/link1.png\" alt=\"\">\n      </div>\n      <div class=\"cardd text-center\">\n        <img src=\"../../assets/images/link1.png\" alt=\"\">\n      </div>\n      <div class=\"cardd text-center\">\n        <img src=\"../../assets/images/link1.png\" alt=\"\">\n      </div>\n    </div>\n    <br>\n    <br>\n  </div>\n</div>\n\n<div class=\"app-body\" style=\"margin-top: 80px;\">\n  <main class=\"main\">\n    <div class=\"container-fluid rmHorizontalPadding\">\n      <router-outlet></router-outlet>\n    </div>\n  </main>\n</div>\n\n<div class=\"bgGradient\">\n  <h2 class=\"customHead text-center text-uppercase\">BLIJF ALTIJD UP-TO-DATE MET DE SUPERSAVERMAMA.NL NIEUWSBRIEF</h2>\n  <h3 class=\"customHead2 text-center text-uppercase\">Koop de trending deals van vandaag en Save Big</h3>\n  <br>\n  <div class=\"input-set\">\n    <div class=\"col-md-8 col-xs-12 col-sm-12 mx-auto\">\n      <div class=\"row\">\n        <div class=\"search-bar-home searchjs col-xs-12 col-12\">\n          <div class=\"input-group\">\n            <span class=\"input-group-addon\"><i class=\"fa fa-search\"></i></span>\n            <input type=\"text\" class=\"form-control search\" placeholder=\"Bespaar op winkels, merken en categorieën\">\n            <span class=\"input-group-btn yBtn\">\n              <button class=\"btn btn-lgg waves-effect waves-light\" type=\"button\">Zoeken</button>\n            </span> </div>\n          <div class=\"clearfix\"></div>\n        </div>\n      </div>\n      <br>\n      <br>\n      <br>\n    </div>\n  </div>\n</div>\n<footer class=\"footer_area text-center\">\n  <br>\n  <div class=\"col-md-7 col-sm-11 mx-auto\">\n    <img src=\"../../assets/img/logo_foot.png\">\n    <br>\n    <a href=\"\" class=\"fLink\">WAAR HET BESPAREN BEGINT!</a>\n    <br>\n    <br>\n    <p class=\"fPara\">Super Saver Mama stelt alles in het werk om u de meest spaarzame deals, kortingscode en\n      aanbiedingen te bieden,\n      zodat u minder kunt uitgeven en meer kunt genieten. Dit is de ultieme bestemming voor alle extractors voor\n      kortingscodes. Bezoek ons voor uw dagelijkse online boodschappenritten of af en toe een winkeluitzending en blijf\n      licht op de zak terwijl u koopt wat u maar wilt. Super Saver Mama is hier om u te zegenen met kortingen en\n      besparingen die u verdient.</p>\n    <br>\n    <button type=\"button\" class=\"btn btn-light btn-circle\">\n      <i class=\"fa fa-facebook\"></i>\n    </button>\n    <button type=\"button\" class=\"btn btn-light btn-circle\">\n      <i class=\"fa fa-twitter\"></i>\n    </button>\n    <button type=\"button\" class=\"btn btn-light btn-circle\">\n      <i class=\"fa fa-google-plus\"></i>\n    </button>\n    <button type=\"button\" class=\"btn btn-light btn-circle\">\n      <i class=\"fa fa-pinterest\"></i>\n    </button>\n    <button type=\"button\" class=\"btn btn-light btn-circle\">\n      <i class=\"fa fa-youtube\"></i>\n    </button>\n    <br>\n    <br>\n  </div>\n</footer>\n<div class=\"copy_right text-center\">\n  © 2019 Alle rechten voorbehouden.\n</div>"

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"app/menu/menu.module": [
		"./src/app/menu/menu.module.ts",
		"app-menu-menu-module"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var AppComponent = /** @class */ (function () {
    function AppComponent(router) {
        this.router = router;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.router.events.subscribe(function (evt) {
            if (!(evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"])) {
                return;
            }
            window.scrollTo(0, 0);
        });
    };
    AppComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            // tslint:disable-next-line
            selector: 'body',
            template: '<router-outlet></router-outlet>'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var angular_font_awesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-font-awesome */ "./node_modules/angular-font-awesome/dist/angular-font-awesome.es5.js");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _error_404_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./error/404.component */ "./src/app/error/404.component.ts");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "./node_modules/ngx-bootstrap/dropdown/fesm5/ngx-bootstrap-dropdown.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/menu/menu.component.ts");
/* harmony import */ var ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-owl-carousel */ "./node_modules/ngx-owl-carousel/index.js");
/* harmony import */ var ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _coreui_angular__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @coreui/angular */ "./node_modules/@coreui/angular/fesm5/coreui-angular.js");



// import { LocationStrategy, HashLocationStrategy } from '@angular/common';














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                angular_font_awesome__WEBPACK_IMPORTED_MODULE_7__["AngularFontAwesomeModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_11__["AppRoutingModule"],
                ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_15__["OwlModule"],
                _coreui_angular__WEBPACK_IMPORTED_MODULE_16__["AppHeaderModule"],
                // AppSidebarModule,
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8__["PerfectScrollbarModule"],
                ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_12__["BsDropdownModule"].forRoot(),
                ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_13__["ModalModule"].forRoot()
            ],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
                _error_404_component__WEBPACK_IMPORTED_MODULE_10__["P404Component"],
                _menu_menu_component__WEBPACK_IMPORTED_MODULE_14__["MenuComponent"]
            ],
            providers: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"]
                // useClass: HashLocationStrategy
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: routes, AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _error_404_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./error/404.component */ "./src/app/error/404.component.ts");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/menu/menu.component.ts");





var routes = [
    {
        path: '',
        component: _menu_menu_component__WEBPACK_IMPORTED_MODULE_4__["MenuComponent"],
        children: [
            {
                path: '',
                loadChildren: 'app/menu/menu.module#MenuModule'
            }
        ]
    },
    { path: '**', component: _error_404_component__WEBPACK_IMPORTED_MODULE_3__["P404Component"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/data.service.ts":
/*!*********************************!*\
  !*** ./src/app/data.service.ts ***!
  \*********************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var DataService = /** @class */ (function () {
    function DataService(_http) {
        this._http = _http;
    }
    DataService.prototype.fetchAPI = function (url) {
        return this._http.get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return JSON.parse(JSON.stringify(res)); }));
    };
    DataService.prototype.postAPI = function (url, reqData) {
        return this._http.post(url, reqData)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return JSON.parse(JSON.stringify(res)); }));
    };
    DataService.prototype.putAPI = function (url, reqData) {
        return this._http.post(url, reqData)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return JSON.parse(JSON.stringify(res)); }));
    };
    DataService.prototype.deleteAPI = function (url, reqData) {
        return this._http.delete(url, reqData)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return JSON.parse(JSON.stringify(res)); }));
    };
    DataService.prototype.fetchAPIWithLimit = function (url, limit, id, skip) {
        var params = {
            skipNo: skip,
            limitNo: limit,
            quer: id
        };
        return this._http.get(url, { params: params })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return JSON.parse(JSON.stringify(res)); }));
    };
    DataService.prototype.fetchOnlyLimit = function (url, limit) {
        return this._http.get(url, { params: { limitNo: limit } })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return JSON.parse(JSON.stringify(res)); }));
    };
    DataService.prototype.fetchWithQuery = function (url, id) {
        return this._http.get(url, { params: { _id: id } })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return JSON.parse(JSON.stringify(res)); }));
    };
    DataService.prototype.fetchAPIUsingId = function (url, id) {
        return this._http.get(url, { params: { _id: id } })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return JSON.parse(JSON.stringify(res)); }));
    };
    DataService.prototype.sortAPI = function (url, updatedArray) {
        return this._http.post(url, updatedArray)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return JSON.parse(JSON.stringify(res)); }));
    };
    DataService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/error/404.component.ts":
/*!****************************************!*\
  !*** ./src/app/error/404.component.ts ***!
  \****************************************/
/*! exports provided: P404Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "P404Component", function() { return P404Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var P404Component = /** @class */ (function () {
    function P404Component() {
    }
    P404Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! raw-loader!./404.component.html */ "./node_modules/raw-loader/index.js!./src/app/error/404.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], P404Component);
    return P404Component;
}());



/***/ }),

/***/ "./src/app/menu/menu.component.scss":
/*!******************************************!*\
  !*** ./src/app/menu/menu.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".custom-nav {\n  background: linear-gradient(to right, #3b4fa2 0%, #10b6d2 100%);\n}\n\n.custom-nav li > a {\n  font-weight: bold;\n  font-size: 1.2em;\n}\n\n.custom-nav li {\n  margin: 0 8px;\n}\n\n.container {\n  min-width: 90%;\n}\n\n.navbar-brand {\n  margin-left: 60px;\n  padding: 10px;\n}\n\n.home-search {\n  background: #3b4ea1 url('main-banner.jpg') no-repeat scroll center center/cover;\n  min-height: 55vh;\n}\n\n.input-set .row {\n  background: white;\n  font-size: 2.5em;\n}\n\n.searchjs {\n  padding: 10px;\n}\n\n.input-group > .input-group-addon {\n  padding: 5px 15px;\n  font-size: 0.65em;\n}\n\n.row .search {\n  border: none;\n  margin-top: 5px;\n  font-size: 0.5em;\n}\n\n.search:focus {\n  outline: none;\n  box-shadow: none;\n}\n\n.secondBtn > .btn-lgg {\n  margin: 4px;\n  margin-top: -5px;\n  color: white;\n  font-size: 0.5em;\n}\n\n.secondBtn {\n  background-color: #10B6D2 !important;\n}\n\n.customHead {\n  color: white;\n  font-size: 1.5em;\n  font-weight: normal;\n  padding: 20px 0;\n}\n\n.cardd img {\n  max-width: 100px;\n  margin-top: 5px;\n}\n\n.cardd {\n  width: 170px;\n  height: 110px;\n  background: white;\n}\n\n.footer_area {\n  background-color: #EEEEEE;\n}\n\n.fLink, .copy_right {\n  font-size: 1.25em;\n  padding: 13px;\n}\n\n.fPara {\n  font-size: 1.15em;\n  color: #333;\n  font-weight: lighter;\n  line-height: 1.8em;\n}\n\n.btn-circle {\n  width: 50px;\n  height: 50px;\n  padding: 7px 10px;\n  border-radius: 25px;\n  font-size: 1.3em;\n  text-align: center;\n  background-color: white;\n  margin: 5px;\n}\n\n.bgGradient {\n  background: linear-gradient(to right, #3b4fa2 0%, #10b6d2 100%);\n}\n\n.customHead2 {\n  color: white;\n  font-size: 1.25em;\n  font-weight: normal;\n}\n\n.yBtn > .btn-lgg {\n  margin: 4px;\n  margin-top: -5px;\n  font-size: 0.5em;\n}\n\n.yBtn {\n  background-color: #FEDB3F !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudS9FOlxcRnJvbnRFbmQtTkwvc3JjXFxhcHBcXG1lbnVcXG1lbnUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21lbnUvbWVudS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpR0E7RUFDRSwrREFBQTtBQ2hHRjs7QURtR0E7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0FDaEdGOztBRGtHQTtFQUNHLGFBQUE7QUMvRkg7O0FEaUdBO0VBQ0UsY0FBQTtBQzlGRjs7QURnR0E7RUFDRSxpQkFBQTtFQUNBLGFBQUE7QUM3RkY7O0FEK0ZBO0VBQ0UsK0VBQUE7RUFDQSxnQkFBQTtBQzVGRjs7QUQ4RkE7RUFDRSxpQkFBQTtFQUVBLGdCQUFBO0FDNUZGOztBRDhGQTtFQUNFLGFBQUE7QUMzRkY7O0FENkZBO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtBQzFGRjs7QUQ0RkE7RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDekZGOztBRDJGQTtFQUNFLGFBQUE7RUFFQSxnQkFBQTtBQ3hGRjs7QUQwRkE7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUN2RkY7O0FEeUZBO0VBQ0Usb0NBQUE7QUN0RkY7O0FEd0ZBO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FDckZGOztBRHVGQTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtBQ3BGRjs7QURzRkE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0FDbkZGOztBRHNGQTtFQUNFLHlCQUFBO0FDbkZGOztBRHFGQTtFQUNFLGlCQUFBO0VBQ0EsYUFBQTtBQ2xGRjs7QURvRkE7RUFDRSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0FDakZGOztBRG1GQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7QUNoRkY7O0FEa0ZBO0VBQ0UsK0RBQUE7QUMvRUY7O0FEaUZBO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUM5RUY7O0FEZ0ZBO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUM3RUY7O0FEK0VBO0VBQ0Usb0NBQUE7QUM1RUYiLCJmaWxlIjoic3JjL2FwcC9tZW51L21lbnUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBhOmhvdmVye1xyXG4vLyAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4vLyB9XHJcbi8vIC5sb2dvSW1ne1xyXG4vLyAgICAgd2lkdGg6NzFweDtcclxuLy8gICAgIGhlaWdodDo3MXB4O1xyXG4vLyAgICAgbWFyZ2luLXRvcDogNXB4O1xyXG4vLyB9XHJcbi8vIC5kcm9wZG93bi1jb250ZW50e1xyXG4vLyAgIGRpc3BsYXk6IGJsb2NrO1xyXG4vLyAgIG9wYWNpdHk6IDE7XHJcbi8vIH1cclxuLy8gLmRyb3Bkb3duLW1lbnV7XHJcbi8vICAgZGlzcGxheTogYmxvY2s7XHJcbi8vICAgbWFyZ2luLXRvcDogMTVweDtcclxuLy8gfVxyXG4vLyAucm1Ib3Jpem9udGFsUGFkZGluZ3tcclxuLy8gICBwYWRkaW5nLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XHJcbi8vICAgcGFkZGluZy1sZWZ0OiAwICFpbXBvcnRhbnQ7XHJcbi8vIH1cclxuLy8gbmF2e1xyXG4vLyAgIHBvc2l0aW9uOiBmaXhlZDtcclxuLy8gICB6LWluZGV4OiA5O1xyXG4vLyB9XHJcbi8vIC5idG5fZ3JvdXB7XHJcbi8vICAgZmxvYXQ6bGVmdCAhaW1wb3J0YW50XHJcbi8vIH1cclxuLy8gLmNvbmZpcm17XHJcbi8vICAgbWluLXdpZHRoOiA3MHB4ICFpbXBvcnRhbnQ7XHJcbi8vIH1cclxuLy8gdGFibGV7XHJcbi8vICAgZm9udC1zaXplOiAxLjE1ZW07XHJcbi8vIH1cclxuLy8gdHI6aG92ZXJ7XHJcbi8vICAgY3Vyc29yOiBwb2ludGVyO1xyXG4vLyB9XHJcbi8vIC5tYW5BdmF0YXJ7XHJcbi8vICAgd2lkdGg6IDUwcHg7XHJcbi8vICAgaGVpZ2h0OiA1MHB4O1xyXG4vLyAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuLy8gICBvdmVyZmxvdzogaGlkZGVuO1xyXG4vLyAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuLy8gICBtYXJnaW4tbGVmdDogMTBweDtcclxuLy8gfVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbi8vIC5zaWRlbmF2IHtcclxuLy8gICAgIGhlaWdodDogMTAwJTtcclxuLy8gICAgIHdpZHRoOiAwO1xyXG4vLyAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4vLyAgICAgei1pbmRleDogMTA7XHJcbi8vICAgICB0b3A6IDA7XHJcbi8vICAgICBsZWZ0OiAwO1xyXG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogIzIzMkY0MjtcclxuLy8gICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuLy8gICAgIHRyYW5zaXRpb246IDAuNXM7XHJcbi8vICAgICBwYWRkaW5nLXRvcDogNjBweDtcclxuLy8gICB9XHJcbiAgXHJcbi8vICAgLnNpZGVuYXYgYSB7XHJcbi8vICAgICBwYWRkaW5nOiA4cHggOHB4IDhweCAzMnB4O1xyXG4vLyAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4vLyAgICAgZm9udC1zaXplOiAyNXB4O1xyXG4vLyAgICAgY29sb3I6ICM4MTgxODE7XHJcbi8vICAgICBkaXNwbGF5OiBibG9jaztcclxuLy8gICAgIHRyYW5zaXRpb246IDAuM3M7XHJcbi8vICAgfVxyXG4vLyAgIC5zaWRlbmF2ID4gdWwgPiBsaXtcclxuLy8gICAgICAgYmFja2dyb3VuZDp0cmFuc3BhcmVudDtcclxuLy8gICAgICAgY29sb3I6d2hpdGU7XHJcbi8vICAgICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbi8vICAgICAgIGxpbmUtaGVpZ2h0OiAyLjNlbTtcclxuLy8gICB9XHJcbiAgXHJcbi8vICAgLnNpZGVuYXYgYTpob3ZlciB7XHJcbi8vICAgICBjb2xvcjogI2YxZjFmMTtcclxuLy8gICB9XHJcbiAgXHJcbi8vICAgLnNpZGVuYXYgLmNsb3NlYnRuIHtcclxuLy8gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuLy8gICAgIHRvcDogMDtcclxuLy8gICAgIHJpZ2h0OiAyNXB4O1xyXG4vLyAgICAgZm9udC1zaXplOiAzNnB4O1xyXG4vLyAgICAgbWFyZ2luLWxlZnQ6IDUwcHg7XHJcbi8vICAgfVxyXG4gIFxyXG4vLyAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtaGVpZ2h0OiA0NTBweCkge1xyXG4vLyAgICAgLnNpZGVuYXYge3BhZGRpbmctdG9wOiAxNXB4O31cclxuLy8gICAgIC5zaWRlbmF2IGEge2ZvbnQtc2l6ZTogMThweDt9XHJcbi8vICAgfVxyXG5cclxuLmN1c3RvbS1uYXZ7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjM2I0ZmEyIDAlLCAjMTBiNmQyIDEwMCUpO1xyXG4gIC8vIHBhZGRpbmctcmlnaHQ6IDc1cHg7XHJcbn1cclxuLmN1c3RvbS1uYXYgbGkgPiBhe1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtc2l6ZTogMS4yZW07XHJcbn1cclxuLmN1c3RvbS1uYXYgbGl7XHJcbiAgIG1hcmdpbjogMCA4cHg7XHJcbn1cclxuLmNvbnRhaW5lcntcclxuICBtaW4td2lkdGg6IDkwJTtcclxufVxyXG4ubmF2YmFyLWJyYW5ke1xyXG4gIG1hcmdpbi1sZWZ0OiA2MHB4O1xyXG4gIHBhZGRpbmc6MTBweFxyXG59XHJcbi5ob21lLXNlYXJjaHtcclxuICBiYWNrZ3JvdW5kOiAjM2I0ZWExIHVybCguLi8uLi9hc3NldHMvaW1hZ2VzL21haW4tYmFubmVyLmpwZykgbm8tcmVwZWF0IHNjcm9sbCBjZW50ZXIgY2VudGVyIC8gY292ZXI7O1xyXG4gIG1pbi1oZWlnaHQ6IDU1dmg7XHJcbn1cclxuLmlucHV0LXNldCAucm93e1xyXG4gIGJhY2tncm91bmQ6d2hpdGU7XHJcbiAgLy8gaGVpZ2h0OiA4NXB4O1xyXG4gIGZvbnQtc2l6ZTogMi41ZW07XHJcbn1cclxuLnNlYXJjaGpze1xyXG4gIHBhZGRpbmc6MTBweFxyXG59XHJcbi5pbnB1dC1ncm91cCA+IC5pbnB1dC1ncm91cC1hZGRvbntcclxuICBwYWRkaW5nOjVweCAxNXB4O1xyXG4gIGZvbnQtc2l6ZTogMC42NWVtO1xyXG59XHJcbi5yb3cgLnNlYXJjaHtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG4gIGZvbnQtc2l6ZTogMC41ZW07XHJcbn1cclxuLnNlYXJjaDpmb2N1c3tcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcclxuICBib3gtc2hhZG93OiBub25lO1xyXG59XHJcbi5zZWNvbmRCdG4gPiAuYnRuLWxnZ3tcclxuICBtYXJnaW46NHB4O1xyXG4gIG1hcmdpbi10b3A6IC01cHg7XHJcbiAgY29sb3I6d2hpdGU7XHJcbiAgZm9udC1zaXplOiAwLjVlbTtcclxufVxyXG4uc2Vjb25kQnRue1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxMEI2RDIgIWltcG9ydGFudDtcclxufVxyXG4uY3VzdG9tSGVhZHtcclxuICBjb2xvcjp3aGl0ZTtcclxuICBmb250LXNpemU6IDEuNWVtO1xyXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgcGFkZGluZzoyMHB4IDBcclxufVxyXG4uY2FyZGQgaW1ne1xyXG4gIG1heC13aWR0aDogMTAwcHg7XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG59XHJcbi5jYXJkZHtcclxuICB3aWR0aDogMTcwcHg7XHJcbiAgaGVpZ2h0OiAxMTBweDtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAvLyBtYXJnaW46IDAgMTBweDtcclxufVxyXG4uZm9vdGVyX2FyZWF7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0VFRUVFRTtcclxufVxyXG4uZkxpbmssIC5jb3B5X3JpZ2h0e1xyXG4gIGZvbnQtc2l6ZTogMS4yNWVtO1xyXG4gIHBhZGRpbmc6MTNweFxyXG59XHJcbi5mUGFyYXtcclxuICBmb250LXNpemU6IDEuMTVlbTtcclxuICBjb2xvcjogIzMzMztcclxuICBmb250LXdlaWdodDogbGlnaHRlcjtcclxuICBsaW5lLWhlaWdodDogMS44ZW07XHJcbn1cclxuLmJ0bi1jaXJjbGV7IFxyXG4gIHdpZHRoOiA1MHB4OyBcclxuICBoZWlnaHQ6IDUwcHg7IFxyXG4gIHBhZGRpbmc6IDdweCAxMHB4OyBcclxuICBib3JkZXItcmFkaXVzOiAyNXB4OyBcclxuICBmb250LXNpemU6IDEuM2VtOyBcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgbWFyZ2luOiA1cHg7XHJcbn0gXHJcbi5iZ0dyYWRpZW50e1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzNiNGZhMiAwJSwgIzEwYjZkMiAxMDAlKTtcclxufVxyXG4uY3VzdG9tSGVhZDJ7XHJcbiAgY29sb3I6d2hpdGU7XHJcbiAgZm9udC1zaXplOiAxLjI1ZW07XHJcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxufVxyXG4ueUJ0biA+IC5idG4tbGdne1xyXG4gIG1hcmdpbjo0cHg7XHJcbiAgbWFyZ2luLXRvcDogLTVweDtcclxuICBmb250LXNpemU6IDAuNWVtO1xyXG59XHJcbi55QnRue1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRURCM0YgIWltcG9ydGFudDtcclxufSIsIi5jdXN0b20tbmF2IHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjM2I0ZmEyIDAlLCAjMTBiNmQyIDEwMCUpO1xufVxuXG4uY3VzdG9tLW5hdiBsaSA+IGEge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxLjJlbTtcbn1cblxuLmN1c3RvbS1uYXYgbGkge1xuICBtYXJnaW46IDAgOHB4O1xufVxuXG4uY29udGFpbmVyIHtcbiAgbWluLXdpZHRoOiA5MCU7XG59XG5cbi5uYXZiYXItYnJhbmQge1xuICBtYXJnaW4tbGVmdDogNjBweDtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLmhvbWUtc2VhcmNoIHtcbiAgYmFja2dyb3VuZDogIzNiNGVhMSB1cmwoLi4vLi4vYXNzZXRzL2ltYWdlcy9tYWluLWJhbm5lci5qcGcpIG5vLXJlcGVhdCBzY3JvbGwgY2VudGVyIGNlbnRlci9jb3ZlcjtcbiAgbWluLWhlaWdodDogNTV2aDtcbn1cblxuLmlucHV0LXNldCAucm93IHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMi41ZW07XG59XG5cbi5zZWFyY2hqcyB7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5pbnB1dC1ncm91cCA+IC5pbnB1dC1ncm91cC1hZGRvbiB7XG4gIHBhZGRpbmc6IDVweCAxNXB4O1xuICBmb250LXNpemU6IDAuNjVlbTtcbn1cblxuLnJvdyAuc2VhcmNoIHtcbiAgYm9yZGVyOiBub25lO1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIGZvbnQtc2l6ZTogMC41ZW07XG59XG5cbi5zZWFyY2g6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG5cbi5zZWNvbmRCdG4gPiAuYnRuLWxnZyB7XG4gIG1hcmdpbjogNHB4O1xuICBtYXJnaW4tdG9wOiAtNXB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMC41ZW07XG59XG5cbi5zZWNvbmRCdG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTBCNkQyICFpbXBvcnRhbnQ7XG59XG5cbi5jdXN0b21IZWFkIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDEuNWVtO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBwYWRkaW5nOiAyMHB4IDA7XG59XG5cbi5jYXJkZCBpbWcge1xuICBtYXgtd2lkdGg6IDEwMHB4O1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG5cbi5jYXJkZCB7XG4gIHdpZHRoOiAxNzBweDtcbiAgaGVpZ2h0OiAxMTBweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG59XG5cbi5mb290ZXJfYXJlYSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNFRUVFRUU7XG59XG5cbi5mTGluaywgLmNvcHlfcmlnaHQge1xuICBmb250LXNpemU6IDEuMjVlbTtcbiAgcGFkZGluZzogMTNweDtcbn1cblxuLmZQYXJhIHtcbiAgZm9udC1zaXplOiAxLjE1ZW07XG4gIGNvbG9yOiAjMzMzO1xuICBmb250LXdlaWdodDogbGlnaHRlcjtcbiAgbGluZS1oZWlnaHQ6IDEuOGVtO1xufVxuXG4uYnRuLWNpcmNsZSB7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIHBhZGRpbmc6IDdweCAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICBmb250LXNpemU6IDEuM2VtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBtYXJnaW46IDVweDtcbn1cblxuLmJnR3JhZGllbnQge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMzYjRmYTIgMCUsICMxMGI2ZDIgMTAwJSk7XG59XG5cbi5jdXN0b21IZWFkMiB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxLjI1ZW07XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG5cbi55QnRuID4gLmJ0bi1sZ2cge1xuICBtYXJnaW46IDRweDtcbiAgbWFyZ2luLXRvcDogLTVweDtcbiAgZm9udC1zaXplOiAwLjVlbTtcbn1cblxuLnlCdG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkVEQjNGICFpbXBvcnRhbnQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/menu/menu.component.ts":
/*!****************************************!*\
  !*** ./src/app/menu/menu.component.ts ***!
  \****************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");





var MenuComponent = /** @class */ (function () {
    function MenuComponent(_dataService, router, _document) {
        var _this = this;
        this._dataService = _dataService;
        this.router = router;
        this.sidebarMinimized = true;
        this.switch = false;
        this.mouseLoc = false;
        this.noResult = false;
        this.storeArray = null;
        this.blogArray = null;
        this.searchBox = null;
        this.changes = new MutationObserver(function (mutations) {
            _this.sidebarMinimized = _document.body.classList.contains('sidebar-minimized');
        });
        this.element = _document.body;
        this.changes.observe(this.element, {
            attributes: true,
            attributeFilter: ['class']
        });
    }
    MenuComponent.prototype.ngOnDestroy = function () { this.changes.disconnect(); };
    MenuComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this._dataService.fetchOnlyLimit("/userDisplay/fetchTopBlogs", 4).subscribe(function (res) {
            if (res.data)
                _this.blogArray = res.data;
            else
                console.log(res.message);
        });
    };
    MenuComponent.prototype.searchFunc = function (queri) {
        var _this = this;
        if (!queri)
            return;
        this.noResult = false;
        this.storeArray = null;
        this._dataService.fetchAPIWithLimit("/userDisplay/searchQuery", 10, queri, "").subscribe(function (res) {
            if (res.data)
                _this.storeArray = res.data;
            else
                _this.noResult = true;
        });
    };
    MenuComponent.prototype.focusOutFunc = function () {
        var _this = this;
        setTimeout(function () {
            _this.switch = false;
        }, 300);
    };
    MenuComponent.prototype.openNav = function (e) {
        e.preventDefault();
        document.getElementById("mySidenav").style.width = "250px";
    };
    MenuComponent.prototype.closeNav = function (e) {
        e.preventDefault();
        document.getElementById("mySidenav").style.width = "0";
    };
    MenuComponent.ctorParameters = function () { return [
        { type: _data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"],] }] }
    ]; };
    MenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! raw-loader!./menu.component.html */ "./node_modules/raw-loader/index.js!./src/app/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.scss */ "./src/app/menu/menu.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], Object])
    ], MenuComponent);
    return MenuComponent;
}());



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
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"], {
    useJit: true,
    preserveWhitespaces: true
});
// .catch(err => console.log(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\FrontEnd-NL\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map