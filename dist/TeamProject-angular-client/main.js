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
/* harmony import */ var _search_bar_campground_search_bar_camping_site_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./search-bar-campground/search-bar-camping-site.component */ "./src/app/search-bar-campground/search-bar-camping-site.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_campingSite_service_client__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/campingSite.service.client */ "./src/app/services/campingSite.service.client.ts");
/* harmony import */ var _communication_services_camping_site_to_detail_service_client__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./communication-services/camping-site-to-detail.service.client */ "./src/app/communication-services/camping-site-to-detail.service.client.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _event_waterfall_event_waterfall_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./event-waterfall/event-waterfall.component */ "./src/app/event-waterfall/event-waterfall.component.ts");
/* harmony import */ var _event_card_event_card_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./event-card/event-card.component */ "./src/app/event-card/event-card.component.ts");
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
                _search_bar_campground_search_bar_camping_site_component__WEBPACK_IMPORTED_MODULE_8__["SearchBarCampingSiteComponent"],
                _camping_site_detail_camping_site_detail_component__WEBPACK_IMPORTED_MODULE_6__["CampingSiteDetailComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_13__["NavbarComponent"],
                _event_waterfall_event_waterfall_component__WEBPACK_IMPORTED_MODULE_14__["EventWaterfallComponent"],
                _event_card_event_card_component__WEBPACK_IMPORTED_MODULE_15__["EventCardComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_rounting__WEBPACK_IMPORTED_MODULE_4__["routing"],
                ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_7__["CarouselModule"].forRoot(),
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"]
            ],
            providers: [
                _services_campingSite_service_client__WEBPACK_IMPORTED_MODULE_10__["CampingSiteServiceClient"],
                _communication_services_camping_site_to_detail_service_client__WEBPACK_IMPORTED_MODULE_11__["CampingSiteToDetailServiceClient"]
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




var appRoutes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'homepage', component: _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_1__["HomePageComponent"] },
    { path: 'camping-site/:contractID/:facilityID/detail', component: _camping_site_detail_camping_site_detail_component__WEBPACK_IMPORTED_MODULE_2__["CampingSiteDetailComponent"] },
    { path: 'detail', component: _camping_site_detail_camping_site_detail_component__WEBPACK_IMPORTED_MODULE_2__["CampingSiteDetailComponent"] },
    { path: '**', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(appRoutes);


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

/***/ "./src/app/event-card/event-card.component.css":
/*!*****************************************************!*\
  !*** ./src/app/event-card/event-card.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wbdv-blur {\n  -webkit-filter: blur(5px); /* Safari 6.0 - 9.0 */\n\n  filter: blur(5px);\n}\n\n.wbdv-imageContainer {\n  position: relative;\n\n}\n\n.wbdv-text-block {\n  position: absolute;\n  border-radius: 25px;\n  top: 10%;\n  left: 5%;\n  right: 5%;\n\n\n  color: white;\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.card {\n  border-radius: 30px;\n}\n\niframe {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n\nimg {\n  border-radius: 30px 30px 0 0;\n}\n\nh6 {\n  padding-top: 10px;\n}\n"

/***/ }),

/***/ "./src/app/event-card/event-card.component.html":
/*!******************************************************!*\
  !*** ./src/app/event-card/event-card.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card text-center\"\n     (mouseenter) =\"mouseEnter()\"\n     (mouseleave) =\"mouseLeave()\">\n  <div class=\"wbdv-imageContainer\">\n    <img [ngClass]=\"{'wbdv-blur': inImage}\"  class=\"card-img-top img-fluid\" src=\"https://images.unsplash.com/photo-1532980400857-e8d9d275d858?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5b501bf3957585b28199e54ec4700806&auto=format&fit=crop&w=934&q=80\" alt=\"Card image cap\">\n\n    <iframe *ngIf=\"inImage\"\n            src=\"https://www.youtube.com/embed/hOTqyh_UibM?autoplay=1\"\n            frameborder=\"0\"\n            allow=\"autoplay; encrypted-media\"\n            allowfullscreen></iframe>\n    <div *ngIf=\"inImage\" class=\"wbdv-text-block\">\n      <h2>Wow</h2>\n      <h4>Hey, what's up guys! This is DaMingBai, bla bla bla...</h4>\n    </div>\n  </div>\n  <h6 class=\"card-subtitle mb-2 text-muted\">Thursday, August 02</h6>\n  <div class=\"card-block\">\n    <h4 class=\"card-title\">Card title that wraps to a new line</h4>\n    <p class=\"card-text\">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>\n  </div>\n\n  <footer>\n    <small>\n      Someone famous in <cite title=\"Source Title\">Source Title</cite>\n    </small>\n  </footer>\n</div>\n"

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
    function EventCardComponent() {
        this.inImage = false;
    }
    EventCardComponent.prototype.mouseEnter = function () {
        console.log('in');
        this.inImage = true;
    };
    EventCardComponent.prototype.mouseLeave = function () {
        console.log('out');
        this.inImage = false;
    };
    EventCardComponent.prototype.ngOnInit = function () {
    };
    EventCardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-event-card',
            template: __webpack_require__(/*! ./event-card.component.html */ "./src/app/event-card/event-card.component.html"),
            styles: [__webpack_require__(/*! ./event-card.component.css */ "./src/app/event-card/event-card.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EventCardComponent);
    return EventCardComponent;
}());



/***/ }),

/***/ "./src/app/event-waterfall/event-waterfall.component.css":
/*!***************************************************************!*\
  !*** ./src/app/event-waterfall/event-waterfall.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\n  padding: 50px;\n  /*background-color: rgba(51, 170, 51, .3);*/\n\n}\n"

/***/ }),

/***/ "./src/app/event-waterfall/event-waterfall.component.html":
/*!****************************************************************!*\
  !*** ./src/app/event-waterfall/event-waterfall.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"card-columns\">\n    <app-event-card></app-event-card>\n    <app-event-card></app-event-card>\n    <app-event-card></app-event-card>\n  </div>\n</div>\n"

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
        this.cards = [];
    }
    EventWaterfallComponent.prototype.ngOnInit = function () {
    };
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

module.exports = "<nav class=\"navbar navbar-expand-sm fixed-top navbar-light bg-light\">\n  <div class=\"container\">\n  <a class=\"navbar-brand\" routerLink=\"/home\">HuskyCamp</a>\n  <button class=\"navbar-toggler\"\n          type=\"button\" data-toggle=\"collapse\"\n          data-target=\"#navbarTogglerDemo02\"\n          aria-controls=\"navbarTogglerDemo02\"\n          aria-expanded=\"false\"\n          aria-label=\"Toggle navigation\"\n          (click)=\"toggleCollapsed()\"\n          >\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div id=\"navbarSupportedContent\" [ngClass]=\"{'collapse': collapsed, 'navbar-collapse': true}\">\n    <ul class=\"navbar-nav ml-auto\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" href=\"#\">Home</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">Login</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link disabled\" href=\"#\">Register</a>\n      </li>\n    </ul>\n  </div>\n  </div>\n</nav>\n"

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