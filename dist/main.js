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

module.exports = "<!-- <div id=\"mySidenav\" class=\"sidenav\">\n  <a class=\"closebtn\" (click)=\"closeNav($event)\">&times;</a>\n  <ul class=\"list-group\">\n    <li class=\"list-group-item\" routerLink=\"/home\" (click)=\"closeNav($event)\">Home</li>\n    <li class=\"list-group-item\" routerLink=\"/stores\" (click)=\"closeNav($event)\">Stores</li>\n    <li class=\"list-group-item\" routerLink=\"/categories\" (click)=\"closeNav($event)\">Categories</li>\n    <li class=\"list-group-item\" routerLink=\"/blogs\" (click)=\"closeNav($event)\">Blogs</li>\n  </ul>\n</div> -->\n<nav class=\"navbar navbar-expand-lg navbar-dark custom-nav static-top\">\n  <div class=\"container\">\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarResponsive\"\n      aria-controls=\"navbarResponsive\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarResponsive\">\n      <ul class=\"navbar-nav ml-auto\">\n        <li class=\"nav-item active\">\n          <a class=\"nav-link\" href=\"\" routerLink=\"/top-stores\">Top winkels\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"\" routerLink=\"/categories\">Categorieën</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"javascript:void(0);\">Deel een kortingsbon</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"\" routerLink=\"/blogs\">Blog</a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n<a class=\"navbar-brand\" href=\"#\">\n  <img src=\"../../assets/saverrrrr.png\" alt=\"\">\n</a>\n<div class=\"home-search\">\n  <div class=\"container\">\n    <h1 class=\"customHead text-center text-uppercase\">\n      Korting met duizenden kortingscodes & aanbiedingen op SuperSaverMama.nl\n    </h1>\n    <div class=\"input-set\">\n      <div class=\"col-md-8 col-xs-12 col-sm-12 mx-auto\">\n        <div class=\"row\">\n          <div class=\"search-bar-home searchjs col-xs-12 col-12\">\n            <div class=\"input-group\">\n              <span class=\"input-group-addon\"><i class=\"fa fa-search\"></i></span>\n              <input type=\"text\" class=\"form-control search\" placeholder=\"Bespaar op winkels, merken en categorieën\"\n                (input)=\"searchFunc(searchBox)\" (focus)=\"switch=true\" (focusout)=\"focusOutFunc()\"\n                [(ngModel)]=\"searchBox\">\n              <span class=\"input-group-btn secondBtn\">\n                <button class=\"btn btn-lgg waves-effect waves-light\" type=\"button\">Zoeken</button>\n              </span> </div>\n            <div class=\"clearfix\"></div>\n            <!-- <div id=\"resultContainer\" class=\"resultContainer\" style=\"display: none;\">\n              <div id=\"searchResults\" class=\"searchResults resultsearch\"> </div>\n            </div> -->\n          </div>\n        </div>\n        <div class=\"col\" style=\"width:90%;position: absolute;margin-top: 10px;background:white\"\n          *ngIf=\"searchBox && switch\">\n          <table class=\"table table-responsive-sm table-hover table-outline mb-0\">\n            <tbody>\n              <tr>\n                <div class=\"text-center\" *ngIf=\"!storeArray && !noResult\">\n                  <div class=\"spinner-grow text-info m-5\" style=\"width: 3rem; height: 3rem;\" role=\"status\">\n                    <span class=\"sr-only\">Loading...</span>\n                  </div>\n                </div>\n                <div class=\"text-center\" *ngIf=\"noResult\">\n                  <br>\n                  No result found for \"{{searchBox}}\"\n                  <br>\n                  <br>\n                </div>\n              </tr>\n              <tr *ngFor=\"let store of storeArray | keyvalue\">\n                <td class=\"text-center\" [routerLink]=\"['/store', store.value._id]\">\n                  <div class=\"avatar\">\n                    <img [src]=\"store.value.img\" class=\"rounded-circle\">\n                  </div>\n                </td>\n                <td [routerLink]=\"['/store', store.value._id]\">\n                  <div>{{store.value.name}}</div>\n                  <div class=\"small text-muted\">\n                    <span>Store</span>\n                  </div>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div>\n    <div class=\"clearfix\"></div>\n    <h2 class=\"customHead text-uppercase\">\n      Winkel Online met korting met 10.000+ acties in\n      december 2019\n      <br><b>Top</b> WINKELS</h2>\n    <div class=\"row justify-content-between\">\n      <div class=\"cardd text-center\" *ngFor=\"let store of storeArr | keyvalue\"\n        [routerLink]=\"['/store', store.value._id]\">\n        <img [src]=\"store.value.img\" alt=\"\">\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"app-body\" style=\"margin-top: 20px;\">\n  <main class=\"main\">\n    <div class=\"container-fluid rmHorizontalPadding\">\n      <router-outlet></router-outlet>\n    </div>\n  </main>\n</div>\n\n<div class=\"bgGradient\">\n  <h2 class=\"customHead text-center text-uppercase\">Schrijf u in door hier uw e-mailadres in te voeren\n  </h2>\n  <h3 class=\"customHead2 text-center text-uppercase\">U ontvangt een melding op abonnement</h3>\n  <br>\n  <div class=\"input-set\">\n    <div class=\"col-md-8 col-xs-12 col-sm-12 mx-auto\">\n      <div class=\"row\">\n        <div class=\"search-bar-home searchjs col-xs-12 col-12\">\n          <div class=\"input-group\">\n            <span class=\"input-group-addon\"><i class=\"fa fa-search\"></i></span>\n            <input type=\"email\" required email=\"true\" [(ngModel)]=\"hero.subscribeBox\" #subscribeBox=\"ngModel\"\n              class=\"form-control search\" placeholder=\"Bespaar op winkels, merken en categorieën\">\n            <span class=\"input-group-btn yBtn\">\n              <button class=\"btn btn-lgg waves-effect waves-light\" type=\"button\" [disabled]=\"subscribeBox.invalid\"\n                (click)=\"subscribeMe(hero.subscribeBox)\">\n                <div class=\"spinner-border text-dark\" role=\"status\" *ngIf=\"subscribeNode\"\n                  style=\"width: 1.3rem; height: 1.3rem;\">\n                  <span class=\"sr-only\">Loading...</span>\n                </div> &nbsp; Zoeken\n              </button>\n            </span> </div>\n          <div class=\"clearfix\"></div>\n        </div>\n      </div>\n      <br>\n      <br>\n      <br>\n    </div>\n  </div>\n</div>\n<footer class=\"footer_area text-center\">\n  <br>\n  <div class=\"col-md-7 col-sm-11 mx-auto\">\n    <img src=\"../../assets/img/logo_foot2.png\">\n    <br>\n    <a href=\"\" class=\"fLink\">WAAR HET BESPAREN BEGINT!</a>\n    <br>\n    <br>\n    <p class=\"fPara\">Super Saver Mama stelt alles in het werk om u de meest spaarzame deals, kortingscode en\n      aanbiedingen te bieden,\n      zodat u minder kunt uitgeven en meer kunt genieten. Dit is de ultieme bestemming voor alle extractors voor\n      kortingscodes. Bezoek ons voor uw dagelijkse online boodschappenritten of af en toe een winkeluitzending en blijf\n      licht op de zak terwijl u koopt wat u maar wilt. Super Saver Mama is hier om u te zegenen met kortingen en\n      besparingen die u verdient.</p>\n    <br>\n    <button type=\"button\" class=\"btn btn-light btn-circle\">\n      <i class=\"fa fa-facebook\"></i>\n    </button>\n    <button type=\"button\" class=\"btn btn-light btn-circle\">\n      <i class=\"fa fa-twitter\"></i>\n    </button>\n    <button type=\"button\" class=\"btn btn-light btn-circle\">\n      <i class=\"fa fa-google-plus\"></i>\n    </button>\n    <button type=\"button\" class=\"btn btn-light btn-circle\">\n      <i class=\"fa fa-pinterest\"></i>\n    </button>\n    <button type=\"button\" class=\"btn btn-light btn-circle\">\n      <i class=\"fa fa-youtube\"></i>\n    </button>\n    <br>\n    <br>\n  </div>\n</footer>\n<div class=\"copy_right text-center\">\n  © 2019 Alle rechten voorbehouden.\n</div>"

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

module.exports = ".custom-nav {\n  background: linear-gradient(to right, #3b4fa2 0%, #10b6d2 100%);\n}\n\n.custom-nav li > a {\n  font-weight: bold;\n  font-size: 1.2em;\n}\n\n.custom-nav li {\n  margin: 0 8px;\n}\n\n.container {\n  min-width: 90%;\n}\n\n.navbar-brand {\n  margin-left: 60px;\n  padding: 10px;\n}\n\n.home-search {\n  background: #3b4ea1 url('main-banner.jpg') no-repeat scroll center center/cover;\n  min-height: 55vh;\n}\n\n.input-set .row {\n  background: white;\n  font-size: 2.5em;\n}\n\n.searchjs {\n  padding: 10px;\n}\n\n.input-group > .input-group-addon {\n  padding: 5px 15px;\n  font-size: 0.65em;\n}\n\n.row .search {\n  border: none;\n  margin-top: 5px;\n  font-size: 0.5em;\n}\n\n.search:focus {\n  outline: none;\n  box-shadow: none;\n}\n\n.secondBtn > .btn-lgg {\n  margin: 4px;\n  margin-top: -5px;\n  color: white;\n  font-size: 0.5em;\n}\n\n.secondBtn {\n  background-color: #10B6D2 !important;\n}\n\n.customHead {\n  color: white;\n  font-size: 1.5em;\n  font-weight: normal;\n  padding: 20px 0;\n}\n\n.cardd img {\n  max-width: 100px;\n  margin-top: 5px;\n}\n\n.cardd {\n  width: 170px;\n  height: 110px;\n  background: white;\n}\n\n.cardd:hover {\n  cursor: pointer;\n}\n\n.footer_area {\n  background-color: #EEEEEE;\n}\n\n.fLink, .copy_right {\n  font-size: 1.25em;\n  padding: 13px;\n}\n\n.fPara {\n  font-size: 1.15em;\n  color: #333;\n  font-weight: lighter;\n  line-height: 1.8em;\n}\n\n.btn-circle {\n  width: 50px;\n  height: 50px;\n  padding: 7px 10px;\n  border-radius: 25px;\n  font-size: 1.3em;\n  text-align: center;\n  background-color: white;\n  margin: 5px;\n}\n\n.bgGradient {\n  background: linear-gradient(to right, #3b4fa2 0%, #10b6d2 100%);\n}\n\n.customHead2 {\n  color: white;\n  font-size: 1.25em;\n  font-weight: normal;\n}\n\n.yBtn > .btn-lgg {\n  margin: 4px;\n  margin-top: -5px;\n  font-size: 0.5em;\n}\n\n.yBtn {\n  background-color: #FEDB3F !important;\n}\n\ntable {\n  border: none;\n  font-size: 1.2em;\n}\n\ntr:hover {\n  cursor: pointer;\n}\n\n.avatar img {\n  height: 100% !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudS9FOlxcRnJvbnRFbmQtTkwvc3JjXFxhcHBcXG1lbnVcXG1lbnUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21lbnUvbWVudS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpR0E7RUFDRSwrREFBQTtBQ2hHRjs7QURtR0E7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0FDaEdGOztBRGtHQTtFQUNHLGFBQUE7QUMvRkg7O0FEaUdBO0VBQ0UsY0FBQTtBQzlGRjs7QURnR0E7RUFDRSxpQkFBQTtFQUNBLGFBQUE7QUM3RkY7O0FEK0ZBO0VBQ0UsK0VBQUE7RUFDQSxnQkFBQTtBQzVGRjs7QUQ4RkE7RUFDRSxpQkFBQTtFQUVBLGdCQUFBO0FDNUZGOztBRDhGQTtFQUNFLGFBQUE7QUMzRkY7O0FENkZBO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtBQzFGRjs7QUQ0RkE7RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDekZGOztBRDJGQTtFQUNFLGFBQUE7RUFFQSxnQkFBQTtBQ3hGRjs7QUQwRkE7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUN2RkY7O0FEeUZBO0VBQ0Usb0NBQUE7QUN0RkY7O0FEd0ZBO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FDckZGOztBRHVGQTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtBQ3BGRjs7QURzRkE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0FDbkZGOztBRHNGQTtFQUNFLGVBQUE7QUNuRkY7O0FEcUZBO0VBQ0UseUJBQUE7QUNsRkY7O0FEb0ZBO0VBQ0UsaUJBQUE7RUFDQSxhQUFBO0FDakZGOztBRG1GQTtFQUNFLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7QUNoRkY7O0FEa0ZBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtBQy9FRjs7QURpRkE7RUFDRSwrREFBQTtBQzlFRjs7QURnRkE7RUFDRSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQzdFRjs7QUQrRUE7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQzVFRjs7QUQ4RUE7RUFDRSxvQ0FBQTtBQzNFRjs7QUQ2RUE7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7QUMxRUY7O0FENEVBO0VBQ0UsZUFBQTtBQ3pFRjs7QUQyRUE7RUFDRSx1QkFBQTtBQ3hFRiIsImZpbGUiOiJzcmMvYXBwL21lbnUvbWVudS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGE6aG92ZXJ7XHJcbi8vICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbi8vIH1cclxuLy8gLmxvZ29JbWd7XHJcbi8vICAgICB3aWR0aDo3MXB4O1xyXG4vLyAgICAgaGVpZ2h0OjcxcHg7XHJcbi8vICAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbi8vIH1cclxuLy8gLmRyb3Bkb3duLWNvbnRlbnR7XHJcbi8vICAgZGlzcGxheTogYmxvY2s7XHJcbi8vICAgb3BhY2l0eTogMTtcclxuLy8gfVxyXG4vLyAuZHJvcGRvd24tbWVudXtcclxuLy8gICBkaXNwbGF5OiBibG9jaztcclxuLy8gICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4vLyB9XHJcbi8vIC5ybUhvcml6b250YWxQYWRkaW5ne1xyXG4vLyAgIHBhZGRpbmctcmlnaHQ6IDAgIWltcG9ydGFudDtcclxuLy8gICBwYWRkaW5nLWxlZnQ6IDAgIWltcG9ydGFudDtcclxuLy8gfVxyXG4vLyBuYXZ7XHJcbi8vICAgcG9zaXRpb246IGZpeGVkO1xyXG4vLyAgIHotaW5kZXg6IDk7XHJcbi8vIH1cclxuLy8gLmJ0bl9ncm91cHtcclxuLy8gICBmbG9hdDpsZWZ0ICFpbXBvcnRhbnRcclxuLy8gfVxyXG4vLyAuY29uZmlybXtcclxuLy8gICBtaW4td2lkdGg6IDcwcHggIWltcG9ydGFudDtcclxuLy8gfVxyXG4vLyB0YWJsZXtcclxuLy8gICBmb250LXNpemU6IDEuMTVlbTtcclxuLy8gfVxyXG4vLyB0cjpob3ZlcntcclxuLy8gICBjdXJzb3I6IHBvaW50ZXI7XHJcbi8vIH1cclxuLy8gLm1hbkF2YXRhcntcclxuLy8gICB3aWR0aDogNTBweDtcclxuLy8gICBoZWlnaHQ6IDUwcHg7XHJcbi8vICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4vLyAgIG92ZXJmbG93OiBoaWRkZW47XHJcbi8vICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4vLyAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4vLyB9XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuLy8gLnNpZGVuYXYge1xyXG4vLyAgICAgaGVpZ2h0OiAxMDAlO1xyXG4vLyAgICAgd2lkdGg6IDA7XHJcbi8vICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbi8vICAgICB6LWluZGV4OiAxMDtcclxuLy8gICAgIHRvcDogMDtcclxuLy8gICAgIGxlZnQ6IDA7XHJcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjMyRjQyO1xyXG4vLyAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4vLyAgICAgdHJhbnNpdGlvbjogMC41cztcclxuLy8gICAgIHBhZGRpbmctdG9wOiA2MHB4O1xyXG4vLyAgIH1cclxuICBcclxuLy8gICAuc2lkZW5hdiBhIHtcclxuLy8gICAgIHBhZGRpbmc6IDhweCA4cHggOHB4IDMycHg7XHJcbi8vICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbi8vICAgICBmb250LXNpemU6IDI1cHg7XHJcbi8vICAgICBjb2xvcjogIzgxODE4MTtcclxuLy8gICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4vLyAgICAgdHJhbnNpdGlvbjogMC4zcztcclxuLy8gICB9XHJcbi8vICAgLnNpZGVuYXYgPiB1bCA+IGxpe1xyXG4vLyAgICAgICBiYWNrZ3JvdW5kOnRyYW5zcGFyZW50O1xyXG4vLyAgICAgICBjb2xvcjp3aGl0ZTtcclxuLy8gICAgICAgZm9udC1zaXplOiAxLjVlbTtcclxuLy8gICAgICAgbGluZS1oZWlnaHQ6IDIuM2VtO1xyXG4vLyAgIH1cclxuICBcclxuLy8gICAuc2lkZW5hdiBhOmhvdmVyIHtcclxuLy8gICAgIGNvbG9yOiAjZjFmMWYxO1xyXG4vLyAgIH1cclxuICBcclxuLy8gICAuc2lkZW5hdiAuY2xvc2VidG4ge1xyXG4vLyAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4vLyAgICAgdG9wOiAwO1xyXG4vLyAgICAgcmlnaHQ6IDI1cHg7XHJcbi8vICAgICBmb250LXNpemU6IDM2cHg7XHJcbi8vICAgICBtYXJnaW4tbGVmdDogNTBweDtcclxuLy8gICB9XHJcbiAgXHJcbi8vICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC1oZWlnaHQ6IDQ1MHB4KSB7XHJcbi8vICAgICAuc2lkZW5hdiB7cGFkZGluZy10b3A6IDE1cHg7fVxyXG4vLyAgICAgLnNpZGVuYXYgYSB7Zm9udC1zaXplOiAxOHB4O31cclxuLy8gICB9XHJcblxyXG4uY3VzdG9tLW5hdntcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMzYjRmYTIgMCUsICMxMGI2ZDIgMTAwJSk7XHJcbiAgLy8gcGFkZGluZy1yaWdodDogNzVweDtcclxufVxyXG4uY3VzdG9tLW5hdiBsaSA+IGF7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiAxLjJlbTtcclxufVxyXG4uY3VzdG9tLW5hdiBsaXtcclxuICAgbWFyZ2luOiAwIDhweDtcclxufVxyXG4uY29udGFpbmVye1xyXG4gIG1pbi13aWR0aDogOTAlO1xyXG59XHJcbi5uYXZiYXItYnJhbmR7XHJcbiAgbWFyZ2luLWxlZnQ6IDYwcHg7XHJcbiAgcGFkZGluZzoxMHB4XHJcbn1cclxuLmhvbWUtc2VhcmNoe1xyXG4gIGJhY2tncm91bmQ6ICMzYjRlYTEgdXJsKC4uLy4uL2Fzc2V0cy9pbWFnZXMvbWFpbi1iYW5uZXIuanBnKSBuby1yZXBlYXQgc2Nyb2xsIGNlbnRlciBjZW50ZXIgLyBjb3Zlcjs7XHJcbiAgbWluLWhlaWdodDogNTV2aDtcclxufVxyXG4uaW5wdXQtc2V0IC5yb3d7XHJcbiAgYmFja2dyb3VuZDp3aGl0ZTtcclxuICAvLyBoZWlnaHQ6IDg1cHg7XHJcbiAgZm9udC1zaXplOiAyLjVlbTtcclxufVxyXG4uc2VhcmNoanN7XHJcbiAgcGFkZGluZzoxMHB4XHJcbn1cclxuLmlucHV0LWdyb3VwID4gLmlucHV0LWdyb3VwLWFkZG9ue1xyXG4gIHBhZGRpbmc6NXB4IDE1cHg7XHJcbiAgZm9udC1zaXplOiAwLjY1ZW07XHJcbn1cclxuLnJvdyAuc2VhcmNoe1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgZm9udC1zaXplOiAwLjVlbTtcclxufVxyXG4uc2VhcmNoOmZvY3Vze1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuLnNlY29uZEJ0biA+IC5idG4tbGdne1xyXG4gIG1hcmdpbjo0cHg7XHJcbiAgbWFyZ2luLXRvcDogLTVweDtcclxuICBjb2xvcjp3aGl0ZTtcclxuICBmb250LXNpemU6IDAuNWVtO1xyXG59XHJcbi5zZWNvbmRCdG57XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEwQjZEMiAhaW1wb3J0YW50O1xyXG59XHJcbi5jdXN0b21IZWFke1xyXG4gIGNvbG9yOndoaXRlO1xyXG4gIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICBwYWRkaW5nOjIwcHggMFxyXG59XHJcbi5jYXJkZCBpbWd7XHJcbiAgbWF4LXdpZHRoOiAxMDBweDtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbn1cclxuLmNhcmRke1xyXG4gIHdpZHRoOiAxNzBweDtcclxuICBoZWlnaHQ6IDExMHB4O1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIC8vIG1hcmdpbjogMCAxMHB4O1xyXG59XHJcbi5jYXJkZDpob3ZlcntcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLmZvb3Rlcl9hcmVhe1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNFRUVFRUU7XHJcbn1cclxuLmZMaW5rLCAuY29weV9yaWdodHtcclxuICBmb250LXNpemU6IDEuMjVlbTtcclxuICBwYWRkaW5nOjEzcHhcclxufVxyXG4uZlBhcmF7XHJcbiAgZm9udC1zaXplOiAxLjE1ZW07XHJcbiAgY29sb3I6ICMzMzM7XHJcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XHJcbiAgbGluZS1oZWlnaHQ6IDEuOGVtO1xyXG59XHJcbi5idG4tY2lyY2xleyBcclxuICB3aWR0aDogNTBweDsgXHJcbiAgaGVpZ2h0OiA1MHB4OyBcclxuICBwYWRkaW5nOiA3cHggMTBweDsgXHJcbiAgYm9yZGVyLXJhZGl1czogMjVweDsgXHJcbiAgZm9udC1zaXplOiAxLjNlbTsgXHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIG1hcmdpbjogNXB4O1xyXG59IFxyXG4uYmdHcmFkaWVudHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMzYjRmYTIgMCUsICMxMGI2ZDIgMTAwJSk7XHJcbn1cclxuLmN1c3RvbUhlYWQye1xyXG4gIGNvbG9yOndoaXRlO1xyXG4gIGZvbnQtc2l6ZTogMS4yNWVtO1xyXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbn1cclxuLnlCdG4gPiAuYnRuLWxnZ3tcclxuICBtYXJnaW46NHB4O1xyXG4gIG1hcmdpbi10b3A6IC01cHg7XHJcbiAgZm9udC1zaXplOiAwLjVlbTtcclxufVxyXG4ueUJ0bntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkVEQjNGICFpbXBvcnRhbnQ7XHJcbn1cclxudGFibGV7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGZvbnQtc2l6ZTogMS4yZW07XHJcbn1cclxudHI6aG92ZXJ7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5hdmF0YXIgaW1ne1xyXG4gIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xyXG59IiwiLmN1c3RvbS1uYXYge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMzYjRmYTIgMCUsICMxMGI2ZDIgMTAwJSk7XG59XG5cbi5jdXN0b20tbmF2IGxpID4gYSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDEuMmVtO1xufVxuXG4uY3VzdG9tLW5hdiBsaSB7XG4gIG1hcmdpbjogMCA4cHg7XG59XG5cbi5jb250YWluZXIge1xuICBtaW4td2lkdGg6IDkwJTtcbn1cblxuLm5hdmJhci1icmFuZCB7XG4gIG1hcmdpbi1sZWZ0OiA2MHB4O1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4uaG9tZS1zZWFyY2gge1xuICBiYWNrZ3JvdW5kOiAjM2I0ZWExIHVybCguLi8uLi9hc3NldHMvaW1hZ2VzL21haW4tYmFubmVyLmpwZykgbm8tcmVwZWF0IHNjcm9sbCBjZW50ZXIgY2VudGVyL2NvdmVyO1xuICBtaW4taGVpZ2h0OiA1NXZoO1xufVxuXG4uaW5wdXQtc2V0IC5yb3cge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAyLjVlbTtcbn1cblxuLnNlYXJjaGpzIHtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLmlucHV0LWdyb3VwID4gLmlucHV0LWdyb3VwLWFkZG9uIHtcbiAgcGFkZGluZzogNXB4IDE1cHg7XG4gIGZvbnQtc2l6ZTogMC42NWVtO1xufVxuXG4ucm93IC5zZWFyY2gge1xuICBib3JkZXI6IG5vbmU7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgZm9udC1zaXplOiAwLjVlbTtcbn1cblxuLnNlYXJjaDpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cblxuLnNlY29uZEJ0biA+IC5idG4tbGdnIHtcbiAgbWFyZ2luOiA0cHg7XG4gIG1hcmdpbi10b3A6IC01cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAwLjVlbTtcbn1cblxuLnNlY29uZEJ0biB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxMEI2RDIgIWltcG9ydGFudDtcbn1cblxuLmN1c3RvbUhlYWQge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMS41ZW07XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIHBhZGRpbmc6IDIwcHggMDtcbn1cblxuLmNhcmRkIGltZyB7XG4gIG1heC13aWR0aDogMTAwcHg7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cblxuLmNhcmRkIHtcbiAgd2lkdGg6IDE3MHB4O1xuICBoZWlnaHQ6IDExMHB4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cblxuLmNhcmRkOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uZm9vdGVyX2FyZWEge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUVFRUVFO1xufVxuXG4uZkxpbmssIC5jb3B5X3JpZ2h0IHtcbiAgZm9udC1zaXplOiAxLjI1ZW07XG4gIHBhZGRpbmc6IDEzcHg7XG59XG5cbi5mUGFyYSB7XG4gIGZvbnQtc2l6ZTogMS4xNWVtO1xuICBjb2xvcjogIzMzMztcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG4gIGxpbmUtaGVpZ2h0OiAxLjhlbTtcbn1cblxuLmJ0bi1jaXJjbGUge1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBwYWRkaW5nOiA3cHggMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgZm9udC1zaXplOiAxLjNlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luOiA1cHg7XG59XG5cbi5iZ0dyYWRpZW50IHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjM2I0ZmEyIDAlLCAjMTBiNmQyIDEwMCUpO1xufVxuXG4uY3VzdG9tSGVhZDIge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMS4yNWVtO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuXG4ueUJ0biA+IC5idG4tbGdnIHtcbiAgbWFyZ2luOiA0cHg7XG4gIG1hcmdpbi10b3A6IC01cHg7XG4gIGZvbnQtc2l6ZTogMC41ZW07XG59XG5cbi55QnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZFREIzRiAhaW1wb3J0YW50O1xufVxuXG50YWJsZSB7XG4gIGJvcmRlcjogbm9uZTtcbiAgZm9udC1zaXplOiAxLjJlbTtcbn1cblxudHI6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5hdmF0YXIgaW1nIHtcbiAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XG59Il19 */"

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
        this.hero = {};
        this.storeArr = null;
        this.blogArray = null;
        this.searchBox = null;
        this.subscribeNode = false;
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
        // this._dataService.fetchOnlyLimit("/userDisplay/fetchTopBlogs", 4).subscribe(res => {
        //   if (res.data) this.blogArray = res.data;
        //   else console.log(res.message)
        // });
        this._dataService.fetchOnlyLimit("/userDisplay/fetchTopStores", 6).subscribe(function (res) {
            if (res.data)
                _this.storeArr = res.data;
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
    MenuComponent.prototype.subscribeMe = function (userEmail) {
        var _this = this;
        if (this.subscribeNode)
            return;
        this.subscribeNode = true;
        this._dataService.postAPI("/userDisplay/subscribeMe", { email: userEmail }).subscribe(function (res) {
            if (res.data) {
                _this.subscribeNode = false;
                alert("Je hebt je succesvol ingeschreven");
                _this.hero = {};
            }
            else {
                _this.subscribeNode = false;
                if (res.message == "Duplicate")
                    alert("Deze e - mail is al ingeschreven");
                else
                    console.log(res.message);
            }
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