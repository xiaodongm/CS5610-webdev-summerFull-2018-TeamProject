(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<router-outlet></router-outlet>\n\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home-page/home-page.component */ "./src/app/home-page/home-page.component.ts");
/* harmony import */ var _app_rounting__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.rounting */ "./src/app/app.rounting.ts");
/* harmony import */ var _camping_site_grid_camping_site_grid_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./camping-site-grid/camping-site-grid.component */ "./src/app/camping-site-grid/camping-site-grid.component.ts");
/* harmony import */ var _camping_site_detail_camping_site_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./camping-site-detail/camping-site-detail.component */ "./src/app/camping-site-detail/camping-site-detail.component.ts");
/* harmony import */ var ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/carousel */ "./node_modules/ngx-bootstrap/carousel/index.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var _search_bar_campground_search_bar_camping_site_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./search-bar-campground/search-bar-camping-site.component */ "./src/app/search-bar-campground/search-bar-camping-site.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_campingSite_service_client__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/campingSite.service.client */ "./src/app/services/campingSite.service.client.ts");
/* harmony import */ var _communication_services_camping_site_to_detail_service_client__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./communication-services/camping-site-to-detail.service.client */ "./src/app/communication-services/camping-site-to-detail.service.client.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _basic_information_basic_information_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./basic-information/basic-information.component */ "./src/app/basic-information/basic-information.component.ts");
/* harmony import */ var _event_waterfall_event_waterfall_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./event-waterfall/event-waterfall.component */ "./src/app/event-waterfall/event-waterfall.component.ts");
/* harmony import */ var _event_card_event_card_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./event-card/event-card.component */ "./src/app/event-card/event-card.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _services_map_service_client__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./services/map.service.client */ "./src/app/services/map.service.client.ts");
/* harmony import */ var ngx_masonry__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ngx-masonry */ "./node_modules/ngx-masonry/fesm5/ngx-masonry.js");
/* harmony import */ var _event_detail_event_detail_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./event-detail/event-detail.component */ "./src/app/event-detail/event-detail.component.ts");
/* harmony import */ var _event_editor_event_editor_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./event-editor/event-editor.component */ "./src/app/event-editor/event-editor.component.ts");
/* harmony import */ var _create_event_create_event_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./create-event/create-event.component */ "./src/app/create-event/create-event.component.ts");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "./node_modules/ngx-bootstrap/dropdown/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







// third part imports























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_3__["HomePageComponent"],
                _camping_site_grid_camping_site_grid_component__WEBPACK_IMPORTED_MODULE_5__["CampingSiteGridComponent"],
                _search_bar_campground_search_bar_camping_site_component__WEBPACK_IMPORTED_MODULE_9__["SearchBarCampingSiteComponent"],
                _camping_site_detail_camping_site_detail_component__WEBPACK_IMPORTED_MODULE_6__["CampingSiteDetailComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_13__["HomeComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_14__["NavbarComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_15__["ProfileComponent"],
                _basic_information_basic_information_component__WEBPACK_IMPORTED_MODULE_16__["BasicInformationComponent"],
                _event_waterfall_event_waterfall_component__WEBPACK_IMPORTED_MODULE_17__["EventWaterfallComponent"],
                _event_card_event_card_component__WEBPACK_IMPORTED_MODULE_18__["EventCardComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_19__["RegisterComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_20__["LoginComponent"],
                _event_detail_event_detail_component__WEBPACK_IMPORTED_MODULE_24__["EventDetailComponent"],
                _event_editor_event_editor_component__WEBPACK_IMPORTED_MODULE_25__["EventEditorComponent"],
                _create_event_create_event_component__WEBPACK_IMPORTED_MODULE_26__["CreateEventComponent"],
                _event_editor_event_editor_component__WEBPACK_IMPORTED_MODULE_25__["SafePipe"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_rounting__WEBPACK_IMPORTED_MODULE_4__["routing"],
                ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_7__["CarouselModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_8__["ModalModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_8__["AlertModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_8__["BsDatepickerModule"].forRoot(),
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
                ngx_masonry__WEBPACK_IMPORTED_MODULE_23__["NgxMasonryModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_8__["CollapseModule"].forRoot(),
                ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_27__["BsDropdownModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_8__["TabsModule"].forRoot()
            ],
            providers: [
                _services_campingSite_service_client__WEBPACK_IMPORTED_MODULE_11__["CampingSiteServiceClient"],
                _communication_services_camping_site_to_detail_service_client__WEBPACK_IMPORTED_MODULE_12__["CampingSiteToDetailServiceClient"],
                _services_user_service_client__WEBPACK_IMPORTED_MODULE_21__["UserServiceClient"],
                _services_map_service_client__WEBPACK_IMPORTED_MODULE_22__["MapServiceClient"],
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.rounting.ts":
/*!*********************************!*\
  !*** ./src/app/app.rounting.ts ***!
  \*********************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-page/home-page.component */ "./src/app/home-page/home-page.component.ts");
/* harmony import */ var _camping_site_detail_camping_site_detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./camping-site-detail/camping-site-detail.component */ "./src/app/camping-site-detail/camping-site-detail.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _event_detail_event_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./event-detail/event-detail.component */ "./src/app/event-detail/event-detail.component.ts");
/* harmony import */ var _create_event_create_event_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./create-event/create-event.component */ "./src/app/create-event/create-event.component.ts");







var appRoutes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'profile', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_4__["ProfileComponent"] },
    { path: 'homepage', component: _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_1__["HomePageComponent"] },
    { path: 'camping-site/:contractID/:facilityID/detail', component: _camping_site_detail_camping_site_detail_component__WEBPACK_IMPORTED_MODULE_2__["CampingSiteDetailComponent"] },
    { path: 'detail', component: _camping_site_detail_camping_site_detail_component__WEBPACK_IMPORTED_MODULE_2__["CampingSiteDetailComponent"] },
    { path: 'eventDetail', component: _event_detail_event_detail_component__WEBPACK_IMPORTED_MODULE_5__["EventDetailComponent"] },
    { path: 'createEvent', component: _create_event_create_event_component__WEBPACK_IMPORTED_MODULE_6__["CreateEventComponent"] },
    { path: '**', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(appRoutes);


/***/ }),

/***/ "./src/app/basic-information/basic-information.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/basic-information/basic-information.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".infoFld {\n  margin-top: 15px;\n}\n\n#saveBtn {\n  margin-top: 10px;\n}\n\n#alertBox {\n  margin-top: 10px;\n}\n"

/***/ }),

/***/ "./src/app/basic-information/basic-information.component.html":
/*!********************************************************************!*\
  !*** ./src/app/basic-information/basic-information.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let alert of alerts\" id=\"alertBox\">\n  <alert [type]=\"alert.type\" [dismissOnTimeout]=\"alert.timeout\" (onClosed)=\"onClosed(alert)\">{{ alert.msg }}</alert>\n</div>\n<div>\n    <div class=\"input-group-append infoFld\">\n      <label for=\"username\" class=\"col-sm-2 col-form-label\">Username</label>\n      <!--<div class=\"col-sm-10\">-->\n        <!--<li class=\"list-group-item\" id = 'username'>{{user.username}}</li>-->\n      <!--</div>-->\n      <input [(ngModel)]=\"user.username\"\n             placeholder=\"username\"\n             class=\"form-control\"\n             id=\"username\"\n             readonly/>\n    </div>\n\n    <div class=\"input-group-append infoFld\">\n      <label for=\"firstName\" class=\"col-sm-2 col-form-label\">First Name</label>\n      <input [(ngModel)]=\"user.firstName\"\n             placeholder=\"first name\"\n             id=\"firstName\"\n             class=\"form-control\"/>\n    </div>\n\n    <div class=\"input-group-append infoFld\">\n      <label for=\"lastName\" class=\"col-sm-2 col-form-label\">Last Name</label>\n      <input [(ngModel)]=\"user.lastName\"\n             placeholder=\"lastName\"\n             id=\"lastName\"\n             class=\"form-control\"/>\n    </div>\n\n    <div class=\"input-group-append infoFld\">\n      <label for=\"dob\" class=\"col-sm-2 col-form-label\">Date of Birth</label>\n      <input type=\"text\"\n             [(ngModel)]=\"user.dateOfBirth\"\n             placeholder=\"Date of Birth\"\n             class=\"form-control\"\n             id=\"dob\"\n             [bsConfig]=\"{ dateInputFormat: 'YYYY-MM-DD' }\"\n             bsDatepicker>\n    </div>\n\n    <div class=\"input-group-append infoFld\">\n      <label for=\"phone\" class=\"col-sm-2 col-form-label\">Phone</label>\n      <input [(ngModel)]=\"user.phoneNumber\"\n             placeholder=\"phone\"\n             id=\"phone\"\n             class=\"form-control\"/>\n    </div>\n\n    <div class=\"input-group-append infoFld\">\n      <label for=\"email\" class=\"col-sm-2 col-form-label\">Email</label>\n      <input [(ngModel)]=\"user.email\"\n             placeholder=\"email\"\n             id=\"email\"\n             class=\"form-control\"/>\n    </div>\n\n    <div class=\"input-group-append infoFld\">\n      <label for=\"address\" class=\"col-sm-2 col-form-label\">Address</label>\n      <input [(ngModel)]=\"user.address\"\n             placeholder=\"address\"\n             id=\"address\"\n             class=\"form-control\"/>\n    </div>\n\n    <hr class=\"my-4\">\n    <div class=\"form-group row\" id=\"saveBtn\">\n      <div class=\"col-sm-10\">\n        <button (click)=\"update()\" class=\"btn btn-primary\">Save</button>\n      </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/basic-information/basic-information.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/basic-information/basic-information.component.ts ***!
  \******************************************************************/
/*! exports provided: BasicInformationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicInformationComponent", function() { return BasicInformationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _models_user_model_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/user.model.client */ "./src/app/models/user.model.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BasicInformationComponent = /** @class */ (function () {
    function BasicInformationComponent(service) {
        this.service = service;
        this.user = new _models_user_model_client__WEBPACK_IMPORTED_MODULE_2__["User"]();
        this.alerts = [];
    }
    BasicInformationComponent.prototype.update = function () {
        var _this = this;
        console.log(this.user);
        this.service
            .update(this.user).then(function () {
            _this.alerts.push({
                type: 'success',
                msg: "Profile updated successfully.",
                timeout: 5000
            });
        });
    };
    BasicInformationComponent.prototype.onClosed = function (dismissedAlert) {
        this.alerts = this.alerts.filter(function (alert) { return alert !== dismissedAlert; });
    };
    BasicInformationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service
            .profile()
            .then(function (user) { return _this.user = user; });
    };
    BasicInformationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-basic-information',
            template: __webpack_require__(/*! ./basic-information.component.html */ "./src/app/basic-information/basic-information.component.html"),
            styles: [__webpack_require__(/*! ./basic-information.component.css */ "./src/app/basic-information/basic-information.component.css")]
        }),
        __metadata("design:paramtypes", [_services_user_service_client__WEBPACK_IMPORTED_MODULE_1__["UserServiceClient"]])
    ], BasicInformationComponent);
    return BasicInformationComponent;
}());



/***/ }),

/***/ "./src/app/camping-site-detail/camping-site-detail.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/camping-site-detail/camping-site-detail.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#pageArea {\n  margin-top: 10px;\n}\n\n#carousel {\n  /*width: 35%;*/\n  /*height: 35%;*/\n  padding-left: 150px;\n  padding-right: 150px;\n}\n\n#tag {\n  font-size: 15px;\n  margin-left: 5px;\n}\n\n#amenity_list {\n  margin-left: 35px;\n}\n\n.amenity_item {\n  margin-right: 8px;\n}\n\n#learnMore {\n  margin-top: 20px;\n}\n"

/***/ }),

/***/ "./src/app/camping-site-detail/camping-site-detail.component.html":
/*!************************************************************************!*\
  !*** ./src/app/camping-site-detail/camping-site-detail.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"isDataAvailable\" class=\"container-fluid\">\n\n  <div id=\"pageArea\" class=\"jumbotron\">\n    <h1 id=\"cground_name\" class=\"display-4\">\n      {{campingSite.facilityName}}\n      <span id=\"tag\" class=\"badge badge-secondary\">{{campingSiteFromCommunication._attributes.contractType}}</span>\n    </h1>\n    <p id=\"cground_address\" class=\"lead\">\n      {{finalAddress}}\n    </p>\n    <hr class=\"my-4\">\n    <p id=\"cground_description\">{{campingSite.detailDescription.description}}</p>\n    <div id=\"carousel\">\n      <carousel>\n        <slide *ngFor=\"let photo of campingSite.photo\">\n          <img src={{photo._attributes.realUrl}} alt=\"first slide\" style=\"display: block; width: 100%;\">\n          <div class=\"carousel-caption d-none d-md-block\">\n            <h3>First slide label</h3>\n            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>\n          </div>\n        </slide>\n        <!--<slide>-->\n          <!--<img src=\"../../assets/images/backGround_image_2.jpg\" alt=\"second slide\" style=\"display: block; width: 100%;\">-->\n          <!--<div class=\"carousel-caption d-none d-md-block\">-->\n            <!--<h3>Second slide label</h3>-->\n            <!--<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>-->\n          <!--</div>-->\n        <!--</slide>-->\n        <!--<slide>-->\n          <!--<img src=\"../../assets/images/backGround_image_3.jpg\" alt=\"third slide\" style=\"display: block; width: 100%;\">-->\n          <!--<div class=\"carousel-caption d-none d-md-block\">-->\n            <!--<h3>Third slide label</h3>-->\n            <!--<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>-->\n          <!--</div>-->\n        <!--</slide>-->\n      </carousel>\n    </div>\n    <hr class=\"my-4\">\n    <h5>Amenities :</h5>\n    <div id=\"amenity_list\">\n      <span *ngFor=\"let amenity of campingSite.amenity\" class=\"badge badge-secondary amenity_item\">{{amenity._attributes.name}}</span>\n    </div>\n    <hr class=\"my-4\">\n    <div class=\"container-fluid\">\n      <h5>Weather Forecast</h5>\n      <p>Weather info will appear here.</p>\n    </div>\n    <hr class=\"my-4\">\n    <p id=\"cground_contact\" class=\"lead\">Contact info : </p>\n      <li *ngFor=\"let contactItem of campingSite.contact\">\n        {{contactItem._attributes.name + ' : ' + contactItem._attributes.number}}\n      </li>\n    <a id=\"learnMore\" class=\"btn btn-primary btn-lg\" href=\"#\" role=\"button\">Learn more</a>\n  </div>\n\n\n</div>\n\n\n\n\n"

/***/ }),

/***/ "./src/app/camping-site-detail/camping-site-detail.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/camping-site-detail/camping-site-detail.component.ts ***!
  \**********************************************************************/
/*! exports provided: CampingSiteDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CampingSiteDetailComponent", function() { return CampingSiteDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_campingSite_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/campingSite.service.client */ "./src/app/services/campingSite.service.client.ts");
/* harmony import */ var _models_camingSite_model_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/camingSite.model.client */ "./src/app/models/camingSite.model.client.ts");
/* harmony import */ var _communication_services_camping_site_to_detail_service_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../communication-services/camping-site-to-detail.service.client */ "./src/app/communication-services/camping-site-to-detail.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CampingSiteDetailComponent = /** @class */ (function () {
    function CampingSiteDetailComponent(service, route, communicationService) {
        var _this = this;
        this.service = service;
        this.route = route;
        this.communicationService = communicationService;
        this.isDataAvailable = false;
        this.campingSite = new _models_camingSite_model_client__WEBPACK_IMPORTED_MODULE_3__["CampingSite"]();
        this.finalAddress = '';
        this.route.params.subscribe(function (params) { return _this.setParams(params); });
    }
    CampingSiteDetailComponent.prototype.setParams = function (params) {
        this.contractId = params['contractID'];
        this.facilityId = params['facilityID'];
        this.loadDetails(this.contractId, this.facilityId);
    };
    CampingSiteDetailComponent.prototype.setFinalAddress = function (address) {
        console.log(address);
        if (typeof (address.streetAddress) !== undefined && address.streetAddress.length !== 0) {
            this.finalAddress += address.streetAddress + ', ';
        }
        if (typeof (address.city) !== undefined && address.city.length !== 0) {
            console.log('city' + address.city);
            this.finalAddress += address.city + ', ';
        }
        if (address.state !== undefined && address.state.length !== 0) {
            console.log('state' + address.state);
            this.finalAddress += address.state + ', ';
        }
        if (address.zip !== undefined && address.zip.length !== 0) {
            console.log('state' + address.zip);
            this.finalAddress += address.zip + ', ';
        }
        if (address.country !== undefined && address.country.length !== 0) {
            console.log('country' + address.country);
            this.finalAddress += address.country;
        }
        console.log(this.finalAddress);
        return this.finalAddress;
    };
    CampingSiteDetailComponent.prototype.addUrlPrefix = function () {
        for (var i = 0; i < this.campingSite.photo.length; i++) {
            this.campingSite.photo[i]._attributes.realUrl = 'http://www.reserveamerica.com' + this.campingSite.photo[i]._attributes.realUrl;
        }
    };
    CampingSiteDetailComponent.prototype.loadDetails = function (contractId, facilityId) {
        var _this = this;
        this.contractId = contractId;
        this.facilityId = facilityId;
        this.service.findCampingSiteDetails(contractId, facilityId)
            .then(function (details) {
            // console.log(details);
            _this.details = details;
            _this.campingSite.address = details.detailDescription.address._attributes;
            _this.campingSite.detailDescription = details.detailDescription._attributes;
            _this.campingSite.facilityName = details.detailDescription._attributes.facility;
            _this.campingSite.amenity = details.detailDescription.amenity;
            _this.campingSite.photo = details.detailDescription.photo;
            _this.addUrlPrefix();
            console.log(details);
            console.log(details.detailDescription.photo);
            _this.setFinalAddress(details.detailDescription.address._attributes);
            _this.campingSite.contact = details.detailDescription.contact;
        })
            .then(function () { return (_this.isDataAvailable = true); });
    };
    CampingSiteDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.communicationService.currentCampingSite.subscribe(function (site) { return _this.campingSiteFromCommunication = site; });
        // console.log(this.campingSiteFromCommunication);
    };
    CampingSiteDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-camping-site-detail',
            template: __webpack_require__(/*! ./camping-site-detail.component.html */ "./src/app/camping-site-detail/camping-site-detail.component.html"),
            styles: [__webpack_require__(/*! ./camping-site-detail.component.css */ "./src/app/camping-site-detail/camping-site-detail.component.css")]
        }),
        __metadata("design:paramtypes", [_services_campingSite_service_client__WEBPACK_IMPORTED_MODULE_2__["CampingSiteServiceClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _communication_services_camping_site_to_detail_service_client__WEBPACK_IMPORTED_MODULE_4__["CampingSiteToDetailServiceClient"]])
    ], CampingSiteDetailComponent);
    return CampingSiteDetailComponent;
}());



/***/ }),

/***/ "./src/app/camping-site-grid/camping-site-grid.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/camping-site-grid/camping-site-grid.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\n  margin-bottom: 15px;\n}\n"

/***/ }),

/***/ "./src/app/camping-site-grid/camping-site-grid.component.html":
/*!********************************************************************!*\
  !*** ./src/app/camping-site-grid/camping-site-grid.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Search Results</h2>\n<h4>Total {{campingSitesArray.length}} results</h4>\n\n<div class=\"row\">\n  <div *ngFor=\"let site of campingSitesArray\" class=\"col-sm-3\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <h5 class=\"card-title\">{{site._attributes.facilityName}}</h5>\n        <p class=\"card-text\">With supporting text below as a natural lead-in to additional content.</p>\n        <a\n          (click)=\"selectCampingSite(site)\"\n          routerLink=\"/camping-site/{{site._attributes.contractID}}/{{site._attributes.facilityID}}/detail\">\n          See More</a>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/camping-site-grid/camping-site-grid.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/camping-site-grid/camping-site-grid.component.ts ***!
  \******************************************************************/
/*! exports provided: CampingSiteGridComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CampingSiteGridComponent", function() { return CampingSiteGridComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _communication_services_camping_site_to_detail_service_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../communication-services/camping-site-to-detail.service.client */ "./src/app/communication-services/camping-site-to-detail.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CampingSiteGridComponent = /** @class */ (function () {
    function CampingSiteGridComponent(differs, dataService) {
        this.differs = differs;
        this.dataService = dataService;
        this.campingSitesArray = [];
        this.differ = differs.find([]).create(null);
    }
    CampingSiteGridComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.campingSitesArray = this.campingSites;
        this.campingSite = this.dataService.currentCampingSite.subscribe(function (site) { return (_this.campingSite = site); });
        setTimeout(function () { return console.log(_this.campingSites); }, 7000);
    };
    CampingSiteGridComponent.prototype.selectCampingSite = function (site) {
        this.dataService.changeCampingSite(site);
    };
    CampingSiteGridComponent.prototype.ngDoCheck = function () {
        var change = this.differ.diff(this.campingSites);
        if (change) {
            this.campingSitesArray = this.campingSites;
            console.log(this.campingSites);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('campingSites'),
        __metadata("design:type", Object)
    ], CampingSiteGridComponent.prototype, "campingSites", void 0);
    CampingSiteGridComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-camping-site-grid',
            template: __webpack_require__(/*! ./camping-site-grid.component.html */ "./src/app/camping-site-grid/camping-site-grid.component.html"),
            styles: [__webpack_require__(/*! ./camping-site-grid.component.css */ "./src/app/camping-site-grid/camping-site-grid.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"], _communication_services_camping_site_to_detail_service_client__WEBPACK_IMPORTED_MODULE_1__["CampingSiteToDetailServiceClient"]])
    ], CampingSiteGridComponent);
    return CampingSiteGridComponent;
}());



/***/ }),

/***/ "./src/app/communication-services/camping-site-to-detail.service.client.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/communication-services/camping-site-to-detail.service.client.ts ***!
  \*********************************************************************************/
/*! exports provided: CampingSiteToDetailServiceClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CampingSiteToDetailServiceClient", function() { return CampingSiteToDetailServiceClient; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CampingSiteToDetailServiceClient = /** @class */ (function () {
    function CampingSiteToDetailServiceClient() {
        this.campingSiteSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('default message');
        this.currentCampingSite = this.campingSiteSource.asObservable();
    }
    CampingSiteToDetailServiceClient.prototype.changeCampingSite = function (campingSite) {
        this.campingSiteSource.next(campingSite);
        console.log('change camping site');
        console.log(this.currentCampingSite);
    };
    CampingSiteToDetailServiceClient = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], CampingSiteToDetailServiceClient);
    return CampingSiteToDetailServiceClient;
}());



/***/ }),

/***/ "./src/app/constants/dateConstant.ts":
/*!*******************************************!*\
  !*** ./src/app/constants/dateConstant.ts ***!
  \*******************************************/
/*! exports provided: months, dates */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "months", function() { return months; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dates", function() { return dates; });
var months = ['January', 'February', 'March',
    'April', 'May', 'June', 'July', 'August', 'September',
    'October', 'November', 'December'];
var dates = ['Sunday', 'Monday', 'Tuesday', 'Wednesday',
    'Thursday', 'Friday', 'Saturday'];


/***/ }),

/***/ "./src/app/create-event/create-event.component.css":
/*!*********************************************************!*\
  !*** ./src/app/create-event/create-event.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  margin-top: 80px;\n}\n\n#amenity_list {\n  margin-left: 35px;\n}\n\n.amenity_item {\n  margin-right: 8px;\n}\n"

/***/ }),

/***/ "./src/app/create-event/create-event.component.html":
/*!**********************************************************!*\
  !*** ./src/app/create-event/create-event.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"card\">\n    <div class=\"card-body\">\n      <h6 class=\"card-subtitle mb-2 text-muted\">step 1</h6>\n      <h5 class=\"card-title\">What's your new Camping position?</h5>\n\n      <input\n        [(ngModel)]=\"campSite\"\n        class=\"form-control\"\n        placeholder=\"Type your camping site\">\n\n      <button type=\"button\" class=\"btn btn-primary\" (click)=\"isCollapsed1 = !isCollapsed1\"\n              [attr.aria-expanded]=\"!isCollapsed1\" aria-controls=\"collapseBasic\">Next\n      </button>\n\n    </div>\n  </div>\n\n\n  <div  id=\"collapseBasic\" [collapse]=\"isCollapsed1\">\n    <hr>\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <h6 class=\"card-subtitle mb-2 text-muted\">step 2</h6>\n        <h5 class=\"card-title\">What's your camping event featured for?</h5>\n\n        <div class=\"btn-group\" dropdown>\n          <button dropdownToggle type=\"button\" class=\"btn btn-primary dropdown-toggle\"\n                  aria-controls=\"dropdown-basic\">\n            Add feature tags <span class=\"caret\"></span>\n          </button>\n          <ul id=\"dropdown-basic\" *dropdownMenu class=\"dropdown-menu\"\n              role=\"menu\" aria-labelledby=\"button-basic\">\n            <li role=\"menuitem\"><a class=\"dropdown-item\" (click)=\"toggleTag('Hiking')\">Hiking</a></li>\n            <li role=\"menuitem\"><a class=\"dropdown-item\" (click)=\"toggleTag('Fishing')\">Fishing</a></li>\n            <li role=\"menuitem\"><a class=\"dropdown-item\" (click)=\"toggleTag('Biking')\">Biking</a></li>\n          </ul>\n        </div>\n        <div id=\"amenity_list\">\n          <span *ngFor=\"let tag of tags\" class=\"badge badge-secondary amenity_item\">{{tag}}</span>\n        </div>\n        <div>\n          <button type=\"button\" class=\"btn btn-primary\" (click)=\"isCollapsed2 = !isCollapsed2\"\n                  [attr.aria-expanded]=\"!isCollapsed2\" aria-controls=\"collapseBasic2\">Next\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div id=\"collapseBasic2\" [collapse]=\"isCollapsed2\">\n    <hr>\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <h6 class=\"card-subtitle mb-2 text-muted\">step 3</h6>\n        <h5 class=\"card-title\">What will your Camp Event name be?</h5>\n\n        <input\n          [(ngModel)]=\"title\"\n          class=\"form-control\"\n          placeholder=\"Type your camping site\">\n        <h5 class=\"card-title\"> Choose your event time stamp</h5>\n        <form>\n          Event Starts:\n          <input\n            [(ngModel)]=\"eventStart\"\n            type=\"date\"\n            name=\"bday\">\n        </form>\n\n        <form>\n          Event Ends:\n          <input\n            [(ngModel)]=\"eventEnd\"\n            type=\"date\"\n            name=\"bday\">\n        </form>\n        <h5 class=\"card-title\">Describe who should join, and what your Meetup will do.</h5>\n        <textarea\n          [(ngModel)]=\"paragraph\"\n          class=\"form-control\"\n          placeholder=\"Paragraph text\">\n        </textarea>\n        <div>\n          <button type=\"button\" class=\"btn btn-success\" (click)=\"createEvent()\"\n                  [attr.aria-expanded]=\"!isCollapsed3\" aria-controls=\"collapseBasic3\">Create\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/create-event/create-event.component.ts":
/*!********************************************************!*\
  !*** ./src/app/create-event/create-event.component.ts ***!
  \********************************************************/
/*! exports provided: CreateEventComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateEventComponent", function() { return CreateEventComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CreateEventComponent = /** @class */ (function () {
    function CreateEventComponent(router) {
        this.router = router;
        this.isCollapsed1 = true;
        this.isCollapsed2 = true;
        this.isCollapsed3 = true;
        this.tags = [];
    }
    CreateEventComponent.prototype.toggleTag = function (tag) {
        if (this.tags.includes(tag)) {
            var index = this.tags.indexOf(tag);
            this.tags.splice(index, 1);
        }
        else {
            this.tags.push(tag);
        }
    };
    CreateEventComponent.prototype.createEvent = function () {
        this.router.navigateByUrl('/eventDetail');
    };
    CreateEventComponent.prototype.ngOnInit = function () {
    };
    CreateEventComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create-event',
            template: __webpack_require__(/*! ./create-event.component.html */ "./src/app/create-event/create-event.component.html"),
            styles: [__webpack_require__(/*! ./create-event.component.css */ "./src/app/create-event/create-event.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], CreateEventComponent);
    return CreateEventComponent;
}());



/***/ }),

/***/ "./src/app/event-card/event-card.component.css":
/*!*****************************************************!*\
  !*** ./src/app/event-card/event-card.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".button-pos {\n  margin-top: 2px;\n  margin-right: 5px;\n  float: right;\n\n}\n\n.button-container {\n  position: relative;\n}\n\n.button-container i {\n  color: red;\n  text-shadow: 2px 2px 2px #aaa;\n}\n\nbutton {\n  position: absolute;\n}\n\n.wbdv-blur {\n  -webkit-filter: blur(5px); /* Safari 6.0 - 9.0 */\n  filter: blur(5px);\n  border-radius: 25px;\n\n}\n\n.wbdv-imageContainer {\n  position: relative;\n  border-radius: 25px 25px 0 0;\n  overflow:hidden;\n  /*background-color: #0b2e13;*/\n  /*-moz-border-radius: 20px;*/\n  /*margin:0 auto;*/\n}\n\n.wbdv-text-block {\n  position: absolute;\n  border-radius: 25px;\n  top: 10%;\n  left: 5%;\n  right: 5%;\n\n\n  color: white;\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.card {\n  border-radius: 30px;\n  box-shadow: 0 16px 24px 2px rgba(0, 0, 0, .1)\n  /*0 6px 10px 5px rgba(0, 0, 0, .1),*/\n  /*0 8px 10px -5px rgba(0, 0, 0, .1);*/\n}\n\n.card-title {\n  margin-bottom: 0;\n\n}\n\n.iframe-pos {\n  top: 0;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  border-radius: 25px;\n}\n\n.iframe-container {\n  border-radius: 25px;\n  -webkit-border-radius: 20px;\n  /*position: absolute;*/\n  position: relative;\n  overflow: auto;\n  top: 0;\n  width: 100%;\n  height: 100%;\n}\n\niframe {\n  width:100%;\n  height:100%;\n\n}\n\nimg {\n  border-radius: 25px 25px 0 0;\n}\n\n.avatar-container {\n  margin-left: 10%;\n  margin-bottom: 8px;\n  display: inline-block;\n  width: 50px;\n  padding: 0;\n}\n\n.avatar {\n  padding: 0;\n  border-radius: 50%;\n  background-image: url('https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b6ded683923a678ad03fae323169beb4&auto=format&fit=crop&w=700&q=60');\n  width: 100%;\n  padding-bottom: 100%;\n  background-size: cover;\n  background-position: center;\n}\n\n.host-info {\n  display: inline-block;\n  padding-left: 5%;\n}\n\n.host-info div {\n  /*padding-top: 5px;*/\n  /*margin-bottom: 20px;*/\n  font-family: \"Bradley Hand\";\n  overflow: hidden;\n  white-space: nowrap;\n}\n\nh6 {\n  display: inline-block;\n  padding-top: 15px;\n}\n"

/***/ }),

/***/ "./src/app/event-card/event-card.component.html":
/*!******************************************************!*\
  !*** ./src/app/event-card/event-card.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card text-center\"\n     (mouseleave) =\"mouseLeave()\">\n\n    <carousel (activeSlideChange)=\"slideChanged($event)\" data-interval=\"false\" [showIndicators]=\"!(hasExtraInfo && inImage)\">\n      <slide *ngFor=\"let photo of data.photos\" >\n        <img [ngClass]=\"{'wbdv-blur': hasExtraInfo && inImage}\" src={{photo}} alt=\"first slide\" style=\"display: block; width: 100%;\">\n      </slide>\n    </carousel>\n\n  <div class=\"iframe-pos\">\n    <div class=\"iframe-container\">\n      <iframe *ngIf=\"hasExtraInfo && inImage\"\n              [src]='getIframeSource()'\n              frameborder=\"0\"\n              scrolling=false\n              allow=\"autoplay; encrypted-media\"\n              style=\"overflow:hidden;\"\n              allowfullscreen></iframe>\n    </div>\n  </div>\n\n  <div class=\"card-block\">\n    <h6 class=\"card-subtitle mb-2 text-muted\">{{dates[data.start.getDate()]}}, {{months[data.start.getMonth()]}} {{data.start.getDay()}}</h6>\n    <span class=\"button-pos\">\n      <span class=\"button-container\">\n         <span (click) = \"mouseEnter()\">\n          <i *ngIf=\"hasExtraInfo && !inImage\"\n             class=\"fab fa-youtube fa-2x\"\n          ></i>\n        </span>\n      </span>\n    </span>\n\n    <h4 class=\"card-title\">{{data.title}}</h4>\n    <div class=\"card-body\">\n    <div class=\"row\">\n      <div class=\"avatar-container\">\n        <div class=\"avatar\" [ngStyle]=\"{'background-image': 'url(' + data.organizer.profilePhoto + ')'}\">\n        </div>\n      </div>\n\n      <div class=\"host-info\">\n        <div class=\"text-sm-left text-muted\">\n          Hosted by\n          <span>{{data.organizer && data.organizer.firstName}}</span>\n          <span>{{data.organizer && ' ' + data.organizer.lastName}}</span>\n        </div>\n        <div class=\"text-sm-left\">\n          <span class=\"text-muted\">From </span>\n          <span>{{data.organizer.location}}</span>\n        </div>\n      </div>\n    </div>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/event-card/event-card.component.ts":
/*!****************************************************!*\
  !*** ./src/app/event-card/event-card.component.ts ***!
  \****************************************************/
/*! exports provided: EventCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventCardComponent", function() { return EventCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_EventCard_model_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/EventCard.model.client */ "./src/app/models/EventCard.model.client.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _constants_dateConstant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants/dateConstant */ "./src/app/constants/dateConstant.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EventCardComponent = /** @class */ (function () {
    function EventCardComponent(sanitizer) {
        this.sanitizer = sanitizer;
        this.inImage = false;
        this.hasExtraInfo = false;
        this.months = _constants_dateConstant__WEBPACK_IMPORTED_MODULE_3__["months"];
        this.dates = _constants_dateConstant__WEBPACK_IMPORTED_MODULE_3__["dates"];
        this.slideIndex = 0;
        this.updateEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    EventCardComponent.prototype.slideChanged = function (event) {
        if (event !== this.slideIndex) {
            this.updateEvent.emit('update');
            this.slideIndex = event;
        }
    };
    EventCardComponent.prototype.mouseEnter = function () {
        this.inImage = true;
    };
    EventCardComponent.prototype.mouseLeave = function () {
        this.inImage = false;
    };
    EventCardComponent.prototype.getIframeSource = function () {
        var res = this.data.video + '?rel=0&autoplay=1&modestbranding=1';
        return this.sanitizer.bypassSecurityTrustResourceUrl(res);
    };
    EventCardComponent.prototype.ngOnInit = function () {
        if (this.data.video && this.data.video !== '') {
            this.hasExtraInfo = true;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_EventCard_model_client__WEBPACK_IMPORTED_MODULE_1__["EventCard"])
    ], EventCardComponent.prototype, "data", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], EventCardComponent.prototype, "updateEvent", void 0);
    EventCardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-event-card',
            template: __webpack_require__(/*! ./event-card.component.html */ "./src/app/event-card/event-card.component.html"),
            styles: [__webpack_require__(/*! ./event-card.component.css */ "./src/app/event-card/event-card.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])
    ], EventCardComponent);
    return EventCardComponent;
}());



/***/ }),

/***/ "./src/app/event-detail/event-detail.component.css":
/*!*********************************************************!*\
  !*** ./src/app/event-detail/event-detail.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  margin-top: 100px;\n}\n"

/***/ }),

/***/ "./src/app/event-detail/event-detail.component.html":
/*!**********************************************************!*\
  !*** ./src/app/event-detail/event-detail.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  this page shows event details\n</div>\n\n<div class=\"container\">\n  <app-event-editor></app-event-editor>\n</div>\n\n"

/***/ }),

/***/ "./src/app/event-detail/event-detail.component.ts":
/*!********************************************************!*\
  !*** ./src/app/event-detail/event-detail.component.ts ***!
  \********************************************************/
/*! exports provided: EventDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventDetailComponent", function() { return EventDetailComponent; });
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

var EventDetailComponent = /** @class */ (function () {
    function EventDetailComponent() {
    }
    EventDetailComponent.prototype.ngOnInit = function () {
    };
    EventDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-event-detail',
            template: __webpack_require__(/*! ./event-detail.component.html */ "./src/app/event-detail/event-detail.component.html"),
            styles: [__webpack_require__(/*! ./event-detail.component.css */ "./src/app/event-detail/event-detail.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EventDetailComponent);
    return EventDetailComponent;
}());



/***/ }),

/***/ "./src/app/event-editor/event-editor.component.css":
/*!*********************************************************!*\
  !*** ./src/app/event-editor/event-editor.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".modal.fade {\n  display: flex !important;\n  justify-content: center;\n  align-items: center;\n}\n.modal-dialog {\n  vertical-align:middle;\n  height:18em;\n  background-color: rgba(0,0,0,0.5);\n}\n.card {\n  padding-top: 5px;\n  padding-bottom: 5px;\n}\n"

/***/ }),

/***/ "./src/app/event-editor/event-editor.component.html":
/*!**********************************************************!*\
  !*** ./src/app/event-editor/event-editor.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button type=\"button\" class=\"btn btn-primary\" (click)=\"openModal(template)\">Edit Meta Data</button>\n<br><br>\n<pre class=\"card card-block card-header\">{{message}}</pre>\n<ng-template #template>\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title pull-left\">Meta data: can only choose one time</h4>\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n\n  <div class=\"modal-body text-center\">\n\n\n\n    <div>\n      <label> Title </label>\n      <input\n        [(ngModel)]=\"eventTitle\"\n        class=\"form-control\"\n        placeholder=\"Event Title\"\n      />\n\n      <label> Video link </label>\n      <input\n        [(ngModel)]=\"videoUrl\"\n        class=\"form-control\"\n        placeholder=\"Video link\"\n      />\n      <form>\n        <label>Event Starts:</label>\n        <input\n          [(ngModel)]=\"eventStart\"\n          type=\"date\"\n          name=\"bday\">\n        <label>Event Ends:</label>\n\n        <input\n          [(ngModel)]=\"eventEnd\"\n          type=\"date\"\n          name=\"bday\">\n      </form>\n\n      <label> Add Image </label>\n      <ol>\n        <li *ngFor=\"let img of images\">\n          {{img}}\n          <button (click)=\"deleteImageUrl(img)\">Delete</button>\n        </li>\n      </ol>\n      <input\n        [(ngModel)]=\"imgUrl\"\n        class=\"form-control\"\n        placeholder=\"Image Url\">\n      <button (click)=\"addImageUrl()\">Add Image</button>\n\n    </div>\n    <hr>\n    <p>Do you want to confirm?</p>\n    <button type=\"button\" class=\"btn btn-default\" (click)=\"confirm()\" >Yes</button>\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"decline()\" >No</button>\n  </div>\n</ng-template>\n\n\n<button type=\"button\" class=\"btn btn-primary\" (click)=\"openModal(template2)\">Edit Description</button>\n<br><br>\n<pre class=\"card card-block card-header\">{{message}}</pre>\n<ng-template #template2>\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title pull-left\">Description: Edit or Add new</h4>\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n\n  <div class=\"modal-body\">\n    <div>\n      <h4>Edit current descriptions</h4>\n      <div *ngFor=\"let widget of descriptions\">\n        <div *ngIf=\"widget.type === 'paragraph'\">\n          paragraph: {{widget.data}}\n        </div>\n        <div *ngIf=\"widget.type === 'link'\">\n          Link: <a href={{widget.data}}>{{widget.data}}</a>\n        </div>\n\n        <div *ngIf=\"widget.type === 'unorderedList'\">\n          List:\n          <ul >\n            <li *ngFor=\"let item of splitList(widget.data)\">{{item}}</li>\n          </ul>\n        </div>\n\n        <div *ngIf=\"widget.type === 'orderedList'\">\n          List:\n          <ol>\n            <li *ngFor=\"let item of splitList(widget.data)\">{{item}}</li>\n          </ol>\n        </div>\n\n        <hr>\n      </div>\n\n      <div class=\"amenity_list\" *ngIf=\"tags.length > 0\">\n        <span *ngFor=\"let tag of tags\" class=\"badge badge-secondary amenity_item\">{{tag}}</span>\n        <hr>\n      </div>\n    </div>\n    <div>\n      <h4>Add new descriptions</h4>\n      <tabset>\n        <tab heading=\"Paragraph\" id=\"tab1\">\n          Basic content\n          <label>Paragraph</label>\n          <textarea\n            [(ngModel)]=\"paragraph\"\n            class=\"form-control\"\n            placeholder=\"Paragraph text\">\n          </textarea>\n          <button (click)=\"addParagraph()\">Add Paragraph</button>\n        </tab>\n\n        <tab heading=\"Link\">\n          <div>\n            <label> link url</label>\n            <input\n              [(ngModel)]=\"linkUrl\"\n              class=\"form-control\"\n              placeholder=\"Link URL\">\n            <button (click)=\"addLink()\">Add Link</button>\n          </div>\n        </tab>\n\n        <tab heading=\"List\">\n          <div>\n            <label> List </label>\n            <select class=\"form-control\" (change)=\"setListType()\" >\n              <option value=\"unorderedList\">Unordered list</option>\n              <option value=\"orderedList\">Ordered list</option>\n            </select>\n            <textarea\n              [(ngModel)]=\"list\"\n              class=\"form-control\"\n              placeholder=\"List Item\">\n            </textarea>\n            <button (click)=\"addList()\">Add List</button>\n          </div>\n        </tab>\n\n        <tab heading=\"Features\">\n          <div class=\"btn-group\" dropdown>\n            <button dropdownToggle type=\"button\" class=\"btn btn-primary dropdown-toggle\"\n                    aria-controls=\"dropdown-basic\">\n              Add feature tags <span class=\"caret\"></span>\n            </button>\n            <ul id=\"dropdown-basic\" *dropdownMenu class=\"dropdown-menu\"\n                role=\"menu\" aria-labelledby=\"button-basic\">\n              <li role=\"menuitem\"><a class=\"dropdown-item\" (click)=\"toggleTag('Hiking')\">Hiking</a></li>\n              <li role=\"menuitem\"><a class=\"dropdown-item\" (click)=\"toggleTag('Fishing')\">Fishing</a></li>\n              <li role=\"menuitem\"><a class=\"dropdown-item\" (click)=\"toggleTag('Biking')\">Biking</a></li>\n            </ul>\n          </div>\n        </tab>\n      </tabset>\n    </div>\n\n    <hr>\n    <p>Do you want to confirm?</p>\n    <button type=\"button\" class=\"btn btn-default\" (click)=\"confirm()\" >Yes</button>\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"decline()\" >No</button>\n  </div>\n</ng-template>\n\n\n<div class=\"container\">\n  <h2>Preview</h2>\n  <div>\n    Event Title: {{eventTitle}}\n  </div>\n\n  <div>\n    <div>{{videoUrl}}</div>\n    <iframe [src]='videoUrl | safe'> </iframe>\n  </div>\n\n  <div>\n    Event Start: {{eventStart}}\n  </div>\n\n  <div>\n    Event End: {{eventEnd}}\n  </div>\n\n  <div>\n    Image: <img src={{imgUrl}}>\n  </div>\n\n</div>\n\n<div class=\"container\">\n  <h2>Descriptions</h2>\n  <div *ngFor=\"let widget of descriptions\">\n    <div *ngIf=\"widget.type === 'paragraph'\">\n      paragraph: {{widget.data}}\n    </div>\n    <div *ngIf=\"widget.type === 'link'\">\n      Link: <a href={{widget.data}}>{{widget.data}}</a>\n    </div>\n\n    <div *ngIf=\"widget.type === 'unorderedList'\">\n      List:\n      <ul >\n        <li *ngFor=\"let item of splitList(widget.data)\">{{item}}</li>\n      </ul>\n    </div>\n\n    <div *ngIf=\"widget.type === 'orderedList'\">\n      List:\n      <ol>\n        <li *ngFor=\"let item of splitList(widget.data)\">{{item}}</li>\n      </ol>\n    </div>\n  </div>\n\n  <div class=\"amenity_list\">\n    <span *ngFor=\"let tag of tags\" class=\"badge badge-secondary amenity_item\">{{tag}}</span>\n  </div>\n</div>\n\n\n\n<div>\n  <h3>Drop down pick or go other page to get</h3>\n  <ul>\n    <li>camping site</li>\n    <li>camping equipments</li>\n  </ul>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/event-editor/event-editor.component.ts":
/*!********************************************************!*\
  !*** ./src/app/event-editor/event-editor.component.ts ***!
  \********************************************************/
/*! exports provided: SafePipe, EventEditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafePipe", function() { return SafePipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventEditorComponent", function() { return EventEditorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _models_widget_model_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/widget.model.client */ "./src/app/models/widget.model.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SafePipe = /** @class */ (function () {
    function SafePipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SafePipe.prototype.transform = function (url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    };
    SafePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({ name: 'safe' }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])
    ], SafePipe);
    return SafePipe;
}());

var EventEditorComponent = /** @class */ (function () {
    function EventEditorComponent(modalService) {
        this.modalService = modalService;
        this.images = [];
        this.list = '';
        this.listType = 'unorderedList';
        this.tags = [];
        this.descriptions = [];
        this.config = {
            keyboard: true,
            class: 'modal-lg'
        };
    }
    EventEditorComponent.prototype.openModal = function (template) {
        this.modalRef = this.modalService.show(template, this.config);
    };
    EventEditorComponent.prototype.confirm = function () {
        this.message = 'Confirmed!';
        console.log('Confirmed!');
        this.modalRef.hide();
    };
    EventEditorComponent.prototype.decline = function () {
        this.message = 'Declined!';
        console.log('Declined!');
        this.modalRef.hide();
    };
    EventEditorComponent.prototype.addImageUrl = function () {
        this.images.push(this.imgUrl);
    };
    EventEditorComponent.prototype.deleteImageUrl = function (imgUrl) {
        if (this.images.includes(imgUrl)) {
            var index = this.images.indexOf(imgUrl);
            this.images.splice(index, 1);
        }
    };
    EventEditorComponent.prototype.addParagraph = function () {
        this.descriptions.push(new _models_widget_model_client__WEBPACK_IMPORTED_MODULE_3__["Widget"]('paragraph', this.paragraph));
        this.paragraph = '';
    };
    EventEditorComponent.prototype.addLink = function () {
        this.descriptions.push(new _models_widget_model_client__WEBPACK_IMPORTED_MODULE_3__["Widget"]('link', this.linkUrl));
    };
    EventEditorComponent.prototype.setListType = function () {
        if (this.listType === 'orderedList') {
            this.listType = 'unorderedList';
        }
        else {
            this.listType = 'orderedList';
        }
    };
    EventEditorComponent.prototype.addList = function () {
        this.descriptions.push(new _models_widget_model_client__WEBPACK_IMPORTED_MODULE_3__["Widget"](this.listType, this.list));
    };
    EventEditorComponent.prototype.splitList = function (data) {
        return data.split(/\r?\n/);
    };
    EventEditorComponent.prototype.toggleTag = function (tag) {
        if (this.tags.includes(tag)) {
            var index = this.tags.indexOf(tag);
            this.tags.splice(index, 1);
        }
        else {
            this.tags.push(tag);
        }
    };
    EventEditorComponent.prototype.ngOnInit = function () {
    };
    EventEditorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-event-editor',
            template: __webpack_require__(/*! ./event-editor.component.html */ "./src/app/event-editor/event-editor.component.html"),
            styles: [__webpack_require__(/*! ./event-editor.component.css */ "./src/app/event-editor/event-editor.component.css")]
        }),
        __metadata("design:paramtypes", [ngx_bootstrap__WEBPACK_IMPORTED_MODULE_1__["BsModalService"]])
    ], EventEditorComponent);
    return EventEditorComponent;
}());



/***/ }),

/***/ "./src/app/event-waterfall/event-waterfall.component.css":
/*!***************************************************************!*\
  !*** ./src/app/event-waterfall/event-waterfall.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\n  margin-top: 50px;\n  padding: 0;\n  /*background-color: rgba(51, 170, 51, .3);*/\n\n}\n\n@media (min-width: 400px) {\n  .masonry-item {\n    width: 100%;\n    padding: 10px;\n\n  }\n}\n\n@media (min-width: 770px) {\n  .masonry-item {\n    width: 50%;\n    padding: 10px;\n\n  }\n}\n\n@media (min-width: 1000px) {\n   .masonry-item {\n    width: 33.3%;\n    padding: 10px;\n\n  }\n}\n\n\n"

/***/ }),

/***/ "./src/app/event-waterfall/event-waterfall.component.html":
/*!****************************************************************!*\
  !*** ./src/app/event-waterfall/event-waterfall.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n  <ngx-masonry [updateLayout]=\"updateMasonryLayout\" class=\"masonry\">\n    <ngxMasonryItem class=\"masonry-item\" *ngFor=\"let card of cards\">\n      <app-event-card [data]=\"card\"\n                      (updateEvent)=\"receiveUpdateEvent($event)\">\n      </app-event-card>\n    </ngxMasonryItem>\n  </ngx-masonry>\n</div>\n\n\n<div (window:scroll)=\"onScroll($event)\">\n  <h1> Loading ...</h1>\n</div>\n"

/***/ }),

/***/ "./src/app/event-waterfall/event-waterfall.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/event-waterfall/event-waterfall.component.ts ***!
  \**************************************************************/
/*! exports provided: EventWaterfallComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventWaterfallComponent", function() { return EventWaterfallComponent; });
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


var EventWaterfallComponent = /** @class */ (function () {
    function EventWaterfallComponent() {
        this.organizer = {
            username: '',
            password: '',
            dateOfBirth: new Date(),
            email: '',
            phoneNumber: '',
            address: '',
            lat: '',
            lng: '',
            firstName: 'Zheming',
            lastName: 'Gao',
            location: 'San Jose Damingbai',
            profilePhoto: 'https://images.unsplash.com/' +
                'photo-1533233336213-b3a32825c689?ixlib=' +
                'rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5c181' +
                '76885796e2a3399a4a6906e8270&auto=format&fi' +
                't=crop&w=800&q=60'
        };
        this.organizer2 = {
            username: '',
            password: '',
            dateOfBirth: new Date(),
            email: '',
            phoneNumber: '',
            address: '',
            lat: '',
            lng: '',
            firstName: 'Xiaodong',
            lastName: 'Ma',
            location: 'San Francisco',
            profilePhoto: 'https://images.unsplash.com/photo-1' +
                '438761681033-6461ffad8d80?ixlib=rb-0.3.5&ixid=eyJ' +
                'hcHBfaWQiOjEyMDd9&s=5d43ec18ec2cf6ff854513b9e8395c' +
                '1e&auto=format&fit=crop&w=800&q=60'
        };
        this.organizer3 = {
            username: '',
            password: '',
            dateOfBirth: new Date(),
            email: '',
            phoneNumber: '',
            address: '',
            lat: '',
            lng: '',
            firstName: 'Garret',
            lastName: 'Wu',
            location: 'NEU Seatle',
            profilePhoto: 'https://images.unsplash.com/photo-1495078' +
                '065017-564723e7e3e7?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjE' +
                'yMDd9&s=09093dcdf66dbcd2397b9dc19384a899&auto=format&fit' +
                '=crop&w=800&q=60'
        };
        this.event = {
            organizer: this.organizer,
            start: new Date(),
            end: new Date(),
            title: 'Great Camping Opportunity in Yosemite',
            photos: ['https://images.unsplash.com/photo-153322' +
                    '8876829-65c94e7b5025?ixlib=rb-0.3.5&ixid' +
                    '=eyJhcHBfaWQiOjEyMDd9&s=7a60de51ee9dd6af78' +
                    'f5b796b4586326&auto=format&fit=crop&w=800&q=60',
                'https://images.unsplash.com/photo-1533227477679' +
                    '-ca4c58789baf?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOj' +
                    'EyMDd9&s=f8c4f0513223e7ce1ce7783e0d870190&auto=f' +
                    'ormat&fit=crop&w=800&q=60'],
            video: 'https://www.youtube.com/embed/PHQe7Sj56NE',
            description: ''
        };
        this.event2 = {
            organizer: this.organizer2,
            start: new Date(),
            end: new Date(),
            title: 'Amazing Camp Tour in Deep Grand Canyon',
            photos: ['https://images.unsplash.com/photo-1510662' +
                    '145379-13537db782dc?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQ' +
                    'iOjEyMDd9&s=a88527272e34e0ec18771312843d516e&auto=f' +
                    'ormat&fit=crop&w=800&q=60',
                'https://images.unsplash.com/photo-1495756650324-e4' +
                    '5118cb3e35?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9' +
                    '&s=a0d9a8f675adf1d8d1763a275e72ac66&auto=format&fit' +
                    '=crop&w=800&q=60'],
            video: 'https://www.youtube.com/embed/b6hoBp7Hk-A',
            description: ''
        };
        this.event3 = {
            organizer: this.organizer3,
            start: new Date(),
            end: new Date(),
            title: 'Where Amazing Happens',
            photos: ['https://images.unsplash.com/photo-1513673953' +
                    '682-c64113e2866a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyM' +
                    'Dd9&s=2ac493edfc02a322820703625d747055&auto=format&fit' +
                    '=crop&w=800&q=60',
            ],
            video: '',
            description: ''
        };
        this.event4 = {
            organizer: this.organizer2,
            start: new Date(),
            end: new Date(),
            title: 'Hey, The Moutains Are Calling',
            photos: ['https://images.unsplash.com/p' +
                    'hoto-1486935964461-b5ac6a3e72cd?ixlib=rb-' +
                    '0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c57c0c6f' +
                    'f5b2d9b38f14f96484450607&auto=format&fit=cr' +
                    'op&w=800&q=60',
            ],
            video: '',
            description: ''
        };
        this.event5 = {
            organizer: this.organizer3,
            start: new Date(),
            end: new Date(),
            title: 'Party in the beach',
            photos: ['https://images.unsplash.com/photo-15230' +
                    '44214787-9caaa5ee4d8e?ixlib=rb-0.3.5&ixid=eyJhcH' +
                    'BfaWQiOjEyMDd9&s=b79aad29f0e5db2af7fa698998f22985' +
                    '&auto=format&fit=crop&w=800&q=60',
            ],
            video: '',
            description: ''
        };
        this.event6 = {
            organizer: this.organizer3,
            start: new Date(),
            end: new Date(),
            title: 'Party in the beach',
            photos: ['https://images.unsplash.com/photo-1510797492219-' +
                    'e110e2a935a4?ixlib=rb-0.3.5&s=485c6f91293bb46aeb510da2ed33' +
                    '3f87&auto=format&fit=crop&w=800&q=60',
            ],
            video: '',
            description: ''
        };
        this.event7 = {
            organizer: this.organizer3,
            start: new Date(),
            end: new Date(),
            title: 'Party in the beach',
            photos: ['https://images.unsplash.com/photo-149475061374' +
                    '6-dff7ee759071?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&' +
                    's=65b3f3cd89b0a3e27574784d4dc23048&auto=format&fit=crop&' +
                    'w=800&q=60',
            ],
            video: '',
            description: ''
        };
        this.event8 = {
            organizer: this.organizer3,
            start: new Date(),
            end: new Date(),
            title: 'Party in the beach',
            photos: ['https://images.unsplash.com/photo-1517321579022-aa' +
                    '4d037c3b6e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=93072' +
                    '1f7f08fd5fdc79bc0e107a71e08&auto=format&fit=crop&w=800&q=60',
            ],
            video: '',
            description: ''
        };
        this.event9 = {
            organizer: this.organizer3,
            start: new Date(),
            end: new Date(),
            title: 'Party in the beach',
            photos: ['https://images.unsplash.com/photo-15258260' +
                    '78603-8ae39aff46ca?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiO' +
                    'jEyMDd9&s=a33b5370139fd1bdfc3234fba62d308e&auto=form' +
                    'at&fit=crop&w=800&q=60',
            ],
            video: '',
            description: ''
        };
        this.cards = [this.event, this.event2, this.event3,
            this.event4, this.event5, this.event6,
            this.event7, this.event8, this.event9];
        this.updateMasonryLayout = true;
        this.initialDataLoaded = false;
    }
    EventWaterfallComponent.prototype.receiveUpdateEvent = function ($event) {
        this.updateMasonryLayout = !this.updateMasonryLayout;
    };
    EventWaterfallComponent.prototype.onScroll = function ($event) {
        // console.log('On Scroll');
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
            console.log('On Scroll Down');
            this.cards.push(this.event9);
            this.cards.push(this.event9);
            this.cards.push(this.event9);
        }
    };
    EventWaterfallComponent.prototype.ngOnInit = function () {
        this.updateMasonryLayout = !this.updateMasonryLayout;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:scroll', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Event]),
        __metadata("design:returntype", void 0)
    ], EventWaterfallComponent.prototype, "onScroll", null);
    EventWaterfallComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-event-waterfall',
            template: __webpack_require__(/*! ./event-waterfall.component.html */ "./src/app/event-waterfall/event-waterfall.component.html"),
            styles: [__webpack_require__(/*! ./event-waterfall.component.css */ "./src/app/event-waterfall/event-waterfall.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EventWaterfallComponent);
    return EventWaterfallComponent;
}());



/***/ }),

/***/ "./src/app/home-page/home-page.component.css":
/*!***************************************************!*\
  !*** ./src/app/home-page/home-page.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  width: 100%;\n  height: 100%;\n  padding: 0;\n  margin: 0;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.homePage {\n  padding: 0;\n  margin: 0;\n  height: 100%;\n  width: 100%;\n  position: fixed;\n  background-size: cover;\n  background-image: url('background-img.jpeg');\n}\n"

/***/ }),

/***/ "./src/app/home-page/home-page.component.html":
/*!****************************************************!*\
  !*** ./src/app/home-page/home-page.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"homePage\">\n  <nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarTogglerDemo03\"\n            aria-controls=\"navbarTogglerDemo03\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <a class=\"navbar-brand\" href=\"#\">Navbar</a>\n\n    <div class=\"collapse navbar-collapse\" id=\"navbarTogglerDemo03\">\n      <ul class=\"navbar-nav mr-auto mt-2 mt-lg-0\">\n        <li class=\"nav-item active\">\n          <a class=\"nav-link\" href=\"#\">Home <span class=\"sr-only\">(current)</span></a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#\">Link</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link disabled\" href=\"#\">Disabled</a>\n        </li>\n      </ul>\n    </div>\n  </nav>\n\n  <app-search-bar-campground (searchPressed)=\"updateCampgrounds($event)\"></app-search-bar-campground>\n\n  <app-camping-site-grid [campingSites]=\"campingSites\"></app-camping-site-grid>\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/home-page/home-page.component.ts":
/*!**************************************************!*\
  !*** ./src/app/home-page/home-page.component.ts ***!
  \**************************************************/
/*! exports provided: HomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageComponent", function() { return HomePageComponent; });
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

var HomePageComponent = /** @class */ (function () {
    function HomePageComponent() {
        this.campingSites = [];
    }
    HomePageComponent.prototype.ngOnInit = function () {
    };
    HomePageComponent.prototype.updateCampgrounds = function (e) {
        this.campingSites = e.campingSites;
    };
    HomePageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home-page',
            template: __webpack_require__(/*! ./home-page.component.html */ "./src/app/home-page/home-page.component.html"),
            styles: [__webpack_require__(/*! ./home-page.component.css */ "./src/app/home-page/home-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomePageComponent);
    return HomePageComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.main-background {\n  background-image: url(https://images.unsplash.com/photo-1508768516474-73606cb84ce2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e074f33c229b735080438a384e50ada1&auto=format&fit=crop&w=2299&q=80);\n  background-size: cover;\n  background-position: center;\n  width: 100%;\n  height: 550px;\n\n}\n\n#main-button {\n  margin-top: 25px;\n  box-shadow: 0 16px 24px 2px rgba(0, 0, 0, .8),\n              0 6px 30px 5px rgba(0, 0, 0, .8),\n              0 8px 10px -5px rgba(0, 0, 0, .9);\n  background-color: white;\n  opacity: 0.9;\n}\n\n#main-text {\n  text-align: center;\n  padding-top: 200px;\n  text-shadow: 0 8px 8px rgba(0,0,0,0.9),\n                0 8px 13px rgba(0,0,0,0.8),\n                0 8px 23px rgba(0,0,0,0.8);\n}\n\n#main-text h1 {\n  font-weight: 700;\n  font-family: 'Lato';\n  color: white;\n  font-size: 5em\n}\n\n#main-text h3 {\n  font-family: 'Lato';\n  color: white\n}\n\n#main-get-start {\n  text-shadow: none;\n}\n"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"main-background\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-12\">\n        <div id=\"main-text\">\n          <h1>Husky Camp</h1>\n          <h3>The Best Camping Society App</h3>\n            <a id=\"main-button\" class=\"btn btn-lg rounded\">\n              <span id=\"main-get-start\">\n                <i class=\"fa fa-paw\"></i> Get Start!\n              </span>\n            </a>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div>\n  <app-event-waterfall></app-event-waterfall>\n</div>\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
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

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*register*/\n#regisMsg {\n  color: gray;\n  margin-right: 20px;\n}\n#usernameFld {\n  margin-top: 15px;\n}\n#passwordFld {\n  margin-top: 15px;\n}\n#confirmPasswordFld {\n  margin-top: 15px;\n}\n#continueBtn {\n  margin-top: 15px;\n}\n#loginLink {\n  color: cornflowerblue;\n}\n#mapPinIcon {\n  margin-right: 8px;\n}\n#locationBlock {\n  margin-top: 10px;\n}\n/*login*/\n#loginMsg {\n  color: gray;\n  margin-right: 20px;\n}\n#signUpLink {\n  color: cornflowerblue;\n}\n#loginUsernameFld {\n  margin-top: 15px;\n}\n#loginPasswordFld {\n  margin-top: 15px;\n}\n#loginContinueBtn {\n  margin-top: 15px;\n}\n"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a class=\"nav-link\" routerLink=\"\" (click)=\"openLogin(login)\">Login</a>\n\n<ng-template #register>\n  <div class=\"modal-header\">\n    <h4 id=\"signUpHeader\" class=\"modal-title pull-left\">Sign Up</h4>\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"registerWindow.hide()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <div *ngFor=\"let alert of alerts\">\n      <alert [type]=\"alert.type\" [dismissOnTimeout]=\"alert.timeout\" (onClosed)=\"onClosed(alert)\">{{ alert.msg }}</alert>\n    </div>\n    <div>\n      <span id=\"regisMsg\">Already a member?</span>\n      <a id=\"loginLink\" routerLink=\"/login\" (click)=\"openLogin(login)\">Login</a>\n    </div>\n    <input [(ngModel)]=\"username\" id=\"usernameFld\" class=\"form-control\" placeholder=\"Username\">\n    <input [(ngModel)]=\"password\" id=\"passwordFld\" class=\"form-control\" placeholder=\"Password\">\n    <input [(ngModel)]=\"password2\" id=\"confirmPasswordFld\" class=\"form-control\" placeholder=\"Confirm Password\">\n    <div id=\"locationBlock\">\n      <i id=\"mapPinIcon\" class=\"fas fa-map-marker-alt\"></i>\n      <span>{{location}}</span>\n    </div>\n    <button (click)=\"registerUser(username, password, password2, location)\" id=\"continueBtn\" class=\"btn btn-block btn btn-danger\">Continue</button>\n  </div>\n</ng-template>\n\n<ng-template #login>\n  <div class=\"modal-header\">\n    <h4 id=\"loginHeader\" class=\"modal-title pull-left\">Login</h4>\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"loginWindow.hide()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <div *ngFor=\"let alert of alerts\">\n      <alert [type]=\"alert.type\" [dismissOnTimeout]=\"alert.timeout\" (onClosed)=\"onClosed(alert)\">{{ alert.msg }}</alert>\n    </div>\n    <div>\n      <span id=\"loginMsg\">Don't have an account?</span>\n      <a id=\"signUpLink\" routerLink=\"/login\" (click)=\"openRegister(register)\">Sign Up</a>\n    </div>\n    <input [(ngModel)]=\"username\" id=\"loginUsernameFld\" class=\"form-control\" placeholder=\"Username\">\n    <input [(ngModel)]=\"password\" id=\"loginPasswordFld\" class=\"form-control\" placeholder=\"Password\">\n    <button (click)=\"loginUser(username, password)\" id=\"loginContinueBtn\" class=\"btn btn-block btn btn-danger\">Continue</button>\n  </div>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_map_service_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/map.service.client */ "./src/app/services/map.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(modalService, userService, mapService, router) {
        this.modalService = modalService;
        this.userService = userService;
        this.mapService = mapService;
        this.router = router;
        this.alerts = [];
    }
    LoginComponent.prototype.loginUser = function (username, password) {
        var _this = this;
        console.log([username, password]);
        if (username && password) {
            this.userService
                .login(username, password)
                .then(function (response) {
                return response.json();
            })
                .then(function (user) {
                if (!user.error) {
                    _this.closeLogin();
                    _this.router.navigate(['profile']);
                }
                else {
                    // alert('User not exist or Password incorrect');
                    _this.alerts.push({
                        type: 'danger',
                        msg: "User not exist or password incorrect.",
                        timeout: 5000
                    });
                }
            });
        }
        else {
            // alert('Please enter valid Username and Password!');
            this.alerts.push({
                type: 'danger',
                msg: "Please enter valid Username and Password.",
                timeout: 5000
            });
        }
    };
    LoginComponent.prototype.findLatLng = function () {
        var _this = this;
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                // this.showPosition(position);
                console.log(position);
                _this.mapService.reverseGeocoding(position.coords.latitude, position.coords.longitude)
                    .then(function (response) {
                    console.log(response);
                    _this.location = response.address.city + ', ' + response.address.state;
                });
            });
        }
        else {
            alert('Geolocation is not supported by this browser.');
        }
    };
    LoginComponent.prototype.onClosed = function (dismissedAlert) {
        this.alerts = this.alerts.filter(function (alert) { return alert !== dismissedAlert; });
    };
    LoginComponent.prototype.registerUser = function (username, password, password2, location) {
        var _this = this;
        if (username && password) {
            if (password !== password2) {
                // alert('Passwords not match.');
                this.alerts.push({
                    type: 'danger',
                    msg: "Passwords not match, please enter again.",
                    timeout: 5000
                });
            }
            else {
                this.userService
                    .createUser(username, password, location)
                    .then(function (response) {
                    return response.json();
                })
                    .then(function (user) {
                    if (!user.err) {
                        _this.closeRegister();
                        _this.router.navigate(['profile']);
                    }
                    else {
                        // alert('Username already exist, please choose another one.');
                        _this.alerts.push({
                            type: 'danger',
                            msg: "Username already exist, please choose another one.",
                            timeout: 5000
                        });
                    }
                });
            }
        }
        else {
            // alert('Please enter valid Username and Password.');
            this.alerts.push({
                type: 'danger',
                msg: "Please enter valid Username and Password.",
                timeout: 5000
            });
        }
    };
    LoginComponent.prototype.openRegister = function (template) {
        this.registerWindow = this.modalService.show(template);
        this.findLatLng();
        if (this.loginWindow) {
            this.closeLogin();
        }
    };
    LoginComponent.prototype.openLogin = function (template) {
        this.loginWindow = this.modalService.show(template);
        if (this.registerWindow) {
            this.closeRegister();
        }
    };
    LoginComponent.prototype.closeRegister = function () {
        this.registerWindow.hide();
        this.registerWindow = null;
    };
    LoginComponent.prototype.closeLogin = function () {
        this.loginWindow.hide();
        this.loginWindow = null;
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [ngx_bootstrap__WEBPACK_IMPORTED_MODULE_1__["BsModalService"],
            _services_user_service_client__WEBPACK_IMPORTED_MODULE_2__["UserServiceClient"],
            _services_map_service_client__WEBPACK_IMPORTED_MODULE_4__["MapServiceClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/models/EventCard.model.client.ts":
/*!**************************************************!*\
  !*** ./src/app/models/EventCard.model.client.ts ***!
  \**************************************************/
/*! exports provided: EventCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventCard", function() { return EventCard; });
var EventCard = /** @class */ (function () {
    function EventCard() {
    }
    return EventCard;
}());



/***/ }),

/***/ "./src/app/models/camingSite.model.client.ts":
/*!***************************************************!*\
  !*** ./src/app/models/camingSite.model.client.ts ***!
  \***************************************************/
/*! exports provided: CampingSite */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CampingSite", function() { return CampingSite; });
var CampingSite = /** @class */ (function () {
    function CampingSite() {
    }
    return CampingSite;
}());



/***/ }),

/***/ "./src/app/models/user.model.client.ts":
/*!*********************************************!*\
  !*** ./src/app/models/user.model.client.ts ***!
  \*********************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());



/***/ }),

/***/ "./src/app/models/widget.model.client.ts":
/*!***********************************************!*\
  !*** ./src/app/models/widget.model.client.ts ***!
  \***********************************************/
/*! exports provided: Widget */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Widget", function() { return Widget; });
var Widget = /** @class */ (function () {
    function Widget(type, data) {
        this.type = type;
        this.data = data;
    }
    return Widget;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-sm fixed-top navbar-light bg-light\">\n  <div class=\"container\">\n  <a class=\"navbar-brand\" routerLink=\"/home\">HuskyCamp</a>\n  <button class=\"navbar-toggler\"\n          type=\"button\" data-toggle=\"collapse\"\n          data-target=\"#navbarTogglerDemo02\"\n          aria-controls=\"navbarTogglerDemo02\"\n          aria-expanded=\"false\"\n          aria-label=\"Toggle navigation\"\n          (click)=\"toggleCollapsed()\"\n          >\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div id=\"navbarSupportedContent\" [ngClass]=\"{'collapse': collapsed, 'navbar-collapse': true}\">\n    <ul class=\"navbar-nav ml-auto\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" routerLink=\"/home\">Home</a>\n      </li>\n      <li class=\"nav-item\">\n        <!--<a class=\"nav-link\" href=\"#\">Login</a>-->\n        <app-login></app-login>\n      </li>\n      <li class=\"nav-item\">\n        <!--<a class=\"nav-link disabled\" href=\"#\">Register</a>-->\n        <app-register></app-register>\n      </li>\n    </ul>\n  </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
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

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
        this.collapsed = true;
    }
    NavbarComponent.prototype.toggleCollapsed = function () {
        this.collapsed = !this.collapsed;
    };
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/profile/profile.component.css":
/*!***********************************************!*\
  !*** ./src/app/profile/profile.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.avatar-container {\n  display: inline-block;\n  width: 160px;\n  hight: 160px;\n  z-index: 1;\n  position: absolute;\n  left: 50px;\n  top: 70px;\n}\n\n.avatar {\n  border-radius: 50%;\n  background-image: url('https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b6ded683923a678ad03fae323169beb4&auto=format&fit=crop&w=700&q=60');\n  width: 100%;\n  padding-bottom: 100%;\n  background-size: cover;\n  background-position: center;\n  border: 3px solid white;\n}\n\n.main-background {\n  background-image: url('data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8NDQ0NDQ8PDQ0NDxANDQ0NEBANDQ0NFREWFhURFRUYHSggGBolGxUVITEhMSk3Li4uFx8zOD8tNyg5LisBCgoKDQ0NDg0NDysZFR0rKys3LS0rKy0tKysrKysrLSsrKysrKy0tLSsrKysrKzcrKystKysrKysrKy0rKysrK//AABEIAKgBLAMBIgACEQEDEQH/xAAYAAEBAQEBAAAAAAAAAAAAAAAAAQIHA//EACUQAQAAAwgDAQEBAAAAAAAAAAABAvADFDFBUpLR4RNRkREhYf/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A4iACgCLASACgAoigsORIcgi9kK/h2Q4UO1rBOwF4KwThQODlOF5BOslToiB0HQgdCdABFCIqoICoqAAgAAokQiCgAoAEAgCKBWIFYLWCViViC95FYEK/pWIL3kQ4yO80hxmC95L+1+M95rWKhx6P2vw49lYiHHpefScezn2B1kRjX4dZlYilYFYHWaViiHWRWB1mViKVglYFYka/oAVigKixQBFQAAVCIRBQAAAUARRAFABYCQ5zKxBe/RDg7zIV/QO1TvMrFQ4/xayTj2VigfcP8XlOPa8+wT7l6Wsk6zKxUOgrErFA6DrMrEEIlYkQEVAAAECIAIKERIg0IAoAKIoiiAKIoKJ2ApBO8yAL2rPea1iBwqceysQOF5SsTn2B0ROsysQArFAXpDrMrEAiJEFRUABAABRAAIiRBQAUAAAFAEFQBQ+J8BSAfAO1T5mfAXgT5gvwA5T4fAFQ+AAAdB8yPgCRAFQigKgAAgqoACRVIgoACoAoigKgCiKIqACiAL2IoHAnACiAKJ+gKIAKgAIAqAKAgKgAAAJEIgogCgAKgCgAKgIogCkEWAHasqBwqACoAKgAAAIAqAKAgKgAAACAAICgAoigAAqACiKAAAsEAFQEUQBRABUAVAFAAAQFQAAAAQAEBUAFEAUAFEAUEBQAFQBSCAKIoAigCAKIAogAqAAAAICiAAACAAAAAAqAKIoAAKIAoigAAKgAAAAAAAAAIoAgCoACKgKgAAAIAPW72mifbEu9pon2xUBLvaaJ9sVu9pon2xAC72mifbEu9pon2xAC72mifbEu9pon2xAC72mifbEu9pon2xADwWmifbE8Fpon2xAF8Fpon2xPBaaJ9sUAXwWmifbE8E+ifbFAF8E+ifbE8E+ifbFAF8Fpon2xPBPon2xADwWmifbE8Fpon2xQBfBaaJ9sTwWmifbFAF8E+ifbE8E+ifbFADwWmifbEu9pon2xAC7z6J9sS72mifbEALvaaJ9sS72mifbEALvaaJ9sS72mifbEAS72mifbEu9pon2xUBLvaaJ9sS72mifbEAf/2Q==');\n  background-size: cover;\n  background-position: center;\n  width: 100%;\n  height: 200px;\n}\n\n.main-text {\n  padding-top: 150px;\n  text-shadow: 0 8px 8px rgba(0,0,0,0.9),\n  0 8px 13px rgba(0,0,0,0.8),\n  0 8px 23px rgba(0,0,0,0.8);\n  color: white;\n  font-family: Helvetica, Arial, sans-serif;\n  font-size: 25px;\n  -webkit-font-smoothing: antialiased;\n  font-weight: 500;\n  line-height: 30px;\n  max-width: 275px;\n  position: absolute;\n  left: 230px;\n}\n\n.botton-background {\n  width: 100%;\n  height: 43px;\n  background: white;\n  padding-left: 220px;\n  border: 1px solid rgba(0, 0, 0, 0.125);\n  border-left-style: none;\n}\n\n.grid-item {\n  height: 43px;\n  border-left: 1px solid rgba(0, 0, 0, 0.125);\n}\n\n.button-group {\n  position: absolute;\n  top: 50px;\n  right:50px;\n}\n"

/***/ }),

/***/ "./src/app/profile/profile.component.html":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<div class=\"card\">-->\n<!--<img class=\"card-img-top\" src='https://images.unsplash.com/photo-1505232070786-2f46d15f9f5e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8d0b72c290cbac7926edb604b1f40793&auto=format&fit=crop&w=800&q=60' alt=\"Card image cap\">-->\n\n<!--</div>-->\n<div>\n  <div class=\"main-background\">\n    <div class=\"row\">\n      <div class=\"avatar-container\">\n        <div class=\"avatar\">\n        </div>\n      </div>\n      <h2 class=\"main-text\">First Name Last Name</h2>\n    </div>\n\n    <div class=\"button-group\">\n      <button>Post A New Event</button>\n      <button>Attend A New Event</button>\n    </div>\n\n  </div>\n\n  <div class=\"botton-background\">\n    <div class=\"input-group-append\">\n      <div class=\"col-sm grid-item\">\n        <a href=\"#\">Private Info</a>\n      </div>\n      <div class=\"col-sm grid-item\">\n        <a href=\"#\">OR</a>\n      </div>\n      <div class=\"col-sm grid-item\">\n        <a href=\"#\">AT</a>\n      </div>\n      <div class=\"col-sm grid-item\">\n        <a href=\"#\">Friends</a>\n      </div>\n      <div class=\"col-sm grid-item\">\n        <a href=\"#\">Reviews</a>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"container\">\n    <app-basic-information></app-basic-information>\n  </div>\n</div>\n\n\n\n\n"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
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

var ProfileComponent = /** @class */ (function () {
    function ProfileComponent() {
    }
    ProfileComponent.prototype.ngOnInit = function () {
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*register*/\n#regisMsg {\n  color: gray;\n  margin-right: 20px;\n}\n#usernameFld {\n   margin-top: 15px;\n}\n#passwordFld {\n  margin-top: 15px;\n}\n#confirmPasswordFld {\n  margin-top: 15px;\n}\n#continueBtn {\n  margin-top: 15px;\n}\n#loginLink {\n  color: cornflowerblue;\n}\n#mapPinIcon {\n  margin-right: 8px;\n}\n#locationBlock {\n  margin-top: 10px;\n}\n/*login*/\n#loginMsg {\n  color: gray;\n  margin-right: 20px;\n}\n#signUpLink {\n  color: cornflowerblue;\n}\n#loginUsernameFld {\n  margin-top: 15px;\n}\n#loginPasswordFld {\n  margin-top: 15px;\n}\n#loginContinueBtn {\n  margin-top: 15px;\n}\n\n"

/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a class=\"nav-link\" routerLink=\"\" (click)=\"openRegister(register)\">Sign Up</a>\n\n<ng-template #register>\n  <div class=\"modal-header\">\n    <h4 id=\"signUpHeader\" class=\"modal-title pull-left\">Sign Up</h4>\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"registerWindow.hide()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <div *ngFor=\"let alert of alerts\">\n      <alert [type]=\"alert.type\" [dismissOnTimeout]=\"alert.timeout\" (onClosed)=\"onClosed(alert)\">{{ alert.msg }}</alert>\n    </div>\n    <div>\n      <span id=\"regisMsg\">Already a member?</span>\n      <a id=\"loginLink\" routerLink=\"/login\" (click)=\"openLogin(login)\">Login</a>\n    </div>\n    <input [(ngModel)]=\"username\" id=\"usernameFld\" class=\"form-control\" placeholder=\"Username\">\n    <input [(ngModel)]=\"password\" id=\"passwordFld\" class=\"form-control\" placeholder=\"Password\">\n    <input [(ngModel)]=\"password2\" id=\"confirmPasswordFld\" class=\"form-control\" placeholder=\"Confirm Password\">\n    <div id=\"locationBlock\">\n      <i id=\"mapPinIcon\" class=\"fas fa-map-marker-alt\"></i>\n      <span>{{location}}</span>\n    </div>\n    <button (click)=\"registerUser(username, password, password2, location)\" id=\"continueBtn\" class=\"btn btn-block btn btn-danger\">Continue</button>\n  </div>\n</ng-template>\n\n<ng-template #login>\n  <div class=\"modal-header\">\n    <h4 id=\"loginHeader\" class=\"modal-title pull-left\">Login</h4>\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"loginWindow.hide()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <div *ngFor=\"let alert of alerts\">\n      <alert [type]=\"alert.type\" [dismissOnTimeout]=\"alert.timeout\" (onClosed)=\"onClosed(alert)\">{{ alert.msg }}</alert>\n    </div>\n    <div>\n      <span id=\"loginMsg\">Don't have an account?</span>\n      <a id=\"signUpLink\" routerLink=\"/login\" (click)=\"openRegister(register)\">Sign Up</a>\n    </div>\n    <input [(ngModel)]=\"username\" id=\"loginUsernameFld\" class=\"form-control\" placeholder=\"Username\">\n    <input [(ngModel)]=\"password\" id=\"loginPasswordFld\" class=\"form-control\" placeholder=\"Password\">\n    <button (click)=\"loginUser(username, password)\" id=\"loginContinueBtn\" class=\"btn btn-block btn btn-danger\">Continue</button>\n  </div>\n</ng-template>\n\n"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_map_service_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/map.service.client */ "./src/app/services/map.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(modalService, userService, mapService, router) {
        this.modalService = modalService;
        this.userService = userService;
        this.mapService = mapService;
        this.router = router;
        this.alerts = [];
    }
    RegisterComponent.prototype.findLatLng = function () {
        var _this = this;
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                // this.showPosition(position);
                console.log(position);
                _this.mapService.reverseGeocoding(position.coords.latitude, position.coords.longitude)
                    .then(function (response) {
                    console.log(response);
                    _this.location = response.address.city + ', ' + response.address.state;
                });
            });
        }
        else {
            alert('Geolocation is not supported by this browser.');
        }
    };
    RegisterComponent.prototype.onClosed = function (dismissedAlert) {
        this.alerts = this.alerts.filter(function (alert) { return alert !== dismissedAlert; });
    };
    RegisterComponent.prototype.registerUser = function (username, password, password2, location) {
        var _this = this;
        if (username && password) {
            if (password !== password2) {
                // alert('Passwords not match.');
                this.alerts.push({
                    type: 'danger',
                    msg: "Passwords not match, please enter again.",
                    timeout: 5000
                });
            }
            else {
                this.userService
                    .createUser(username, password, location)
                    .then(function (response) {
                    return response.json();
                })
                    .then(function (user) {
                    if (!user.err) {
                        _this.closeRegister();
                        _this.router.navigate(['profile']);
                    }
                    else {
                        // alert('Username already exist, please choose another one.');
                        _this.alerts.push({
                            type: 'danger',
                            msg: "Username already exist, please choose another one.",
                            timeout: 5000
                        });
                    }
                });
            }
        }
        else {
            // alert('Please enter valid Username and Password.');
            this.alerts.push({
                type: 'danger',
                msg: "Please enter valid Username and Password.",
                timeout: 5000
            });
        }
    };
    RegisterComponent.prototype.loginUser = function (username, password) {
        var _this = this;
        console.log([username, password]);
        if (username && password) {
            this.userService
                .login(username, password)
                .then(function (response) {
                return response.json();
            })
                .then(function (user) {
                if (!user.error) {
                    _this.closeLogin();
                    _this.router.navigate(['profile']);
                }
                else {
                    // alert('User not exist or Password incorrect');
                    _this.alerts.push({
                        type: 'danger',
                        msg: "User not exist or password incorrect.",
                        timeout: 5000
                    });
                }
            });
        }
        else {
            // alert('Please enter valid Username and Password!');
            this.alerts.push({
                type: 'danger',
                msg: "Please enter valid Username and Password.",
                timeout: 5000
            });
        }
    };
    RegisterComponent.prototype.openRegister = function (template) {
        this.registerWindow = this.modalService.show(template);
        this.findLatLng();
        if (this.loginWindow) {
            this.closeLogin();
        }
    };
    RegisterComponent.prototype.openLogin = function (template) {
        this.loginWindow = this.modalService.show(template);
        if (this.registerWindow) {
            this.closeRegister();
        }
    };
    RegisterComponent.prototype.closeRegister = function () {
        this.registerWindow.hide();
        this.registerWindow = null;
    };
    RegisterComponent.prototype.closeLogin = function () {
        this.loginWindow.hide();
        this.loginWindow = null;
    };
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [ngx_bootstrap__WEBPACK_IMPORTED_MODULE_1__["BsModalService"],
            _services_user_service_client__WEBPACK_IMPORTED_MODULE_2__["UserServiceClient"],
            _services_map_service_client__WEBPACK_IMPORTED_MODULE_4__["MapServiceClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/search-bar-campground/search-bar-camping-site.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/search-bar-campground/search-bar-camping-site.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".search {\n  margin: 5px;\n}\n"

/***/ }),

/***/ "./src/app/search-bar-campground/search-bar-camping-site.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/search-bar-campground/search-bar-camping-site.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"input-group mb-auto container-fluid search\">\n\n  <input type=\"search\"\n         class=\"form-control\"\n         aria-label=\"Search\"\n         placeholder=\"Please type the name of camping site. The length of name must no less than 4\"\n         [(ngModel)]=\"pNameInput\">\n  <input type=\"search\"\n         class=\"form-control\"\n         aria-label=\"Search\"\n         placeholder=\"Please enter the two character abbreviation for US state or Canadian province\"\n         [(ngModel)]=\"pStateInput\">\n  <div class=\"input-group-append\">\n    <button class=\"btn btn-outline-success my-2 my-sm-0\"\n            type=\"submit\"\n            (click)=\"searchCampgrounds(pNameInput, pStateInput, $event)\">Search</button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/search-bar-campground/search-bar-camping-site.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/search-bar-campground/search-bar-camping-site.component.ts ***!
  \****************************************************************************/
/*! exports provided: SearchBarCampingSiteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchBarCampingSiteComponent", function() { return SearchBarCampingSiteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_campingSite_service_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/campingSite.service.client */ "./src/app/services/campingSite.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SearchBarCampingSiteComponent = /** @class */ (function () {
    function SearchBarCampingSiteComponent(service) {
        this.service = service;
        this.pNameInput = '';
        this.pStateInput = '';
        this.campingSites = [];
        this.searchPressed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    SearchBarCampingSiteComponent.prototype.searchCampgrounds = function (pNameInput, pStateInput, e) {
        var _this = this;
        if (pStateInput === '' && pNameInput === '') {
            alert('Please at least enter the name or state');
            return;
        }
        if (pStateInput === '' && pNameInput.length < 4) {
            alert('Sorry, the name of facility must no less then 4 characters');
            return;
        }
        if (pStateInput.length > 0) {
            pStateInput = pStateInput.toUpperCase();
        }
        this.service
            .findCampingSitesByStateOrName(pStateInput, pNameInput)
            .then(function (response) {
            if (response.resultset._attributes.count === '0') {
                _this.campingSites = [];
                return;
            }
            _this.campingSites = response.resultset.result;
            // console.log(response);
        })
            .then(function () { console.log(_this.campingSites); })
            .then(function () { _this.searchPressed.emit({ campingSites: _this.campingSites }); });
    };
    SearchBarCampingSiteComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], SearchBarCampingSiteComponent.prototype, "searchPressed", void 0);
    SearchBarCampingSiteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search-bar-campground',
            template: __webpack_require__(/*! ./search-bar-camping-site.component.html */ "./src/app/search-bar-campground/search-bar-camping-site.component.html"),
            styles: [__webpack_require__(/*! ./search-bar-camping-site.component.css */ "./src/app/search-bar-campground/search-bar-camping-site.component.css")]
        }),
        __metadata("design:paramtypes", [_services_campingSite_service_client__WEBPACK_IMPORTED_MODULE_1__["CampingSiteServiceClient"]])
    ], SearchBarCampingSiteComponent);
    return SearchBarCampingSiteComponent;
}());



/***/ }),

/***/ "./src/app/services/campingSite.service.client.ts":
/*!********************************************************!*\
  !*** ./src/app/services/campingSite.service.client.ts ***!
  \********************************************************/
/*! exports provided: CampingSiteServiceClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CampingSiteServiceClient", function() { return CampingSiteServiceClient; });
var CORS_ANYWHERE_URL = 'https://cors-anywhere.herokuapp.com/';
var API_HEADER_URL = 'http://api.amp.active.com/camping/campgrounds/';
var API_HEADER_DETAIL_URL = 'http://api.amp.active.com/camping/campground/';
var API_KEY = 'api_key=rknxu5q3axb3qb6tdeyu78bw';
var CONVERT = __webpack_require__(/*! xml-js */ "./node_modules/xml-js/lib/index.js");
var CampingSiteServiceClient = /** @class */ (function () {
    function CampingSiteServiceClient() {
    }
    CampingSiteServiceClient.prototype.findCampingSitesByStateOrName = function (state, name) {
        var PSTATE = '', PNAME = '';
        if (state !== '') {
            PSTATE = 'pstate=' + state + '&';
        }
        if (name !== '') {
            console.log(name);
            PNAME = 'pname=' + name + '&';
        }
        var URL = CORS_ANYWHERE_URL + API_HEADER_URL + '?' + PSTATE + PNAME + API_KEY;
        // console.log(URL);
        return fetch(URL, {
            method: 'GET',
            mode: 'cors',
            headers: {
                'X-Requested-With': 'XMLHttpRequest'
            }
        })
            .then(function (response) { return response.text(); })
            .then(function (xml) { return JSON.parse(CONVERT.xml2json(xml, { compact: true, spaces: 4 })); });
    };
    CampingSiteServiceClient.prototype.findCampingSiteDetails = function (contractCode, parkId) {
        var CONTRACT_CODE = 'contractCode=' + contractCode;
        var PARK_ID = 'parkId=' + parkId;
        var DETAILS_URL = CORS_ANYWHERE_URL + API_HEADER_DETAIL_URL + 'details?' + CONTRACT_CODE + '&' + PARK_ID + '&' + API_KEY;
        return fetch(DETAILS_URL, {
            method: 'GET',
            mode: 'cors',
            headers: {
                'X-Requested-With': 'XMLHttpRequest'
            }
        })
            .then(function (response) { return response.text(); })
            .then(function (xml) { return JSON.parse(CONVERT.xml2json(xml, { compact: true, spaces: 4 })); });
    };
    return CampingSiteServiceClient;
}());



/***/ }),

/***/ "./src/app/services/map.service.client.ts":
/*!************************************************!*\
  !*** ./src/app/services/map.service.client.ts ***!
  \************************************************/
/*! exports provided: MapServiceClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapServiceClient", function() { return MapServiceClient; });
var MapServiceClient = /** @class */ (function () {
    function MapServiceClient() {
    }
    MapServiceClient.prototype.reverseGeocoding = function (lat, lng) {
        return fetch('https://nominatim.openstreetmap.org/reverse?format=json&lat=' + lat + '&lon=' + lng, {
            method: 'GET',
            mode: 'cors',
        })
            .then(function (response) { return response.json(); });
    };
    return MapServiceClient;
}());



/***/ }),

/***/ "./src/app/services/user.service.client.ts":
/*!*************************************************!*\
  !*** ./src/app/services/user.service.client.ts ***!
  \*************************************************/
/*! exports provided: UserServiceClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserServiceClient", function() { return UserServiceClient; });
var UserServiceClient = /** @class */ (function () {
    function UserServiceClient() {
    }
    UserServiceClient.prototype.findUserById = function (userId) {
        return fetch('http://localhost:3000/api/userId/' + userId)
            .then(function (response) { return response.json(); });
    };
    UserServiceClient.prototype.login = function (username, password) {
        var credentials = {
            username: username,
            password: password
        };
        return fetch('http://localhost:3000/api/login', {
            method: 'post',
            body: JSON.stringify(credentials),
            credentials: 'include',
            headers: {
                'content-type': 'application/json'
            }
        });
    };
    UserServiceClient.prototype.logout = function () {
        return fetch('http://localhost:3000/api/logout', {
            method: 'post',
            credentials: 'include'
        });
    };
    UserServiceClient.prototype.update = function (user) {
        return fetch('http://localhost:3000/api/profile', {
            method: 'put',
            body: JSON.stringify(user),
            credentials: 'include',
            headers: {
                'content-type': 'application/json'
            }
        });
    };
    UserServiceClient.prototype.delete = function () {
        return fetch('http://localhost:3000/api/profile', {
            method: 'delete',
            credentials: 'include'
        });
    };
    UserServiceClient.prototype.profile = function () {
        return fetch('http://localhost:3000/api/profile', {
            credentials: 'include',
        })
            .then(function (response) { return response.json(); });
    };
    UserServiceClient.prototype.createUser = function (username, password, location) {
        var user = {
            username: username,
            password: password,
            location: location
        };
        return fetch('http://localhost:3000/api/register', {
            body: JSON.stringify(user),
            credentials: 'include',
            method: 'post',
            headers: {
                'content-type': 'application/json'
            }
        });
    };
    return UserServiceClient;
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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/jiapengtao/web/webdev/CS5610-webdev-summerFull-2018-TeamProject/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map