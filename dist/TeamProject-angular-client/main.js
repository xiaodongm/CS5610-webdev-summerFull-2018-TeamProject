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

/***/ "./src/app/admin-discussion-list/admin-discussion-list.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/admin-discussion-list/admin-discussion-list.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapDiv {\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.UpdateDeleteBtns {\r\n  margin-left: 12px;\r\n}\r\n\r\n.updateBtn {\r\n  margin-right: 10px;\r\n}\r\n\r\n.confirmDelete {\r\n  margin-right: 30px;\r\n}\r\n\r\n.dropdown-item {\r\n  cursor: pointer;\r\n}\r\n\r\n.adminInput {\r\n  margin-top: 20px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/admin-discussion-list/admin-discussion-list.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/admin-discussion-list/admin-discussion-list.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"nav nav-tabs\">\r\n  <li class=\"nav-item\">\r\n    <a class=\"nav-link\" routerLink=\"/admin\" (click)=\"openEventTab()\">\r\n      Events({{events.length}})\r\n    </a>\r\n  </li>\r\n  <li class=\"nav-item\">\r\n    <a class=\"nav-link\" routerLink=\"/admin\" (click)=\"openDiscussionTab()\">\r\n      Discussions({{totalDiscussions.length}})\r\n    </a>\r\n  </li>\r\n</ul>\r\n\r\n<div>\r\n\r\n  <accordion [closeOthers]=\"true\">\r\n    <div *ngIf=\"userType === 'event'\">\r\n    <!--<div>-->\r\n      <accordion-group *ngFor=\"let event of events\" (isOpenChange)=\"log(event)\">\r\n        <button class=\"btn btn-link btn-block clearfix\" accordion-heading>\r\n          <div class=\"pull-left float-left\">{{event.title}}</div>\r\n        </button>\r\n\r\n        <accordion [closeOthers]=\"true\">\r\n\r\n          <accordion-group *ngFor=\"let discussion of discussions\">\r\n            <button class=\"btn btn-link btn-block clearfix\" accordion-heading>\r\n              <div class=\"pull-left float-left\">Post User: [ {{discussion.postPeople.username}} ],  Time: [ {{discussion.postTime}} ]</div>\r\n            </button>\r\n            <div *ngFor=\"let alert of alerts\">\r\n              <alert [type]=\"alert.type\" [dismissOnTimeout]=\"alert.timeout\" (onClosed)=\"onClosed(alert)\">{{ alert.msg }}</alert>\r\n            </div>\r\n            <div class=\"input-group-append wrapDiv\">\r\n              <label for=\"typeFld\" class=\"col-sm-2 col-form-label\">Post Type</label>\r\n              <input id=\"typeFld\" [(ngModel)]=\"discussion.type\" class=\"form-control\" readonly>\r\n            </div>\r\n            <div class=\"input-group-append wrapDiv\">\r\n              <label for=\"contentFld\" class=\"col-sm-2 col-form-label\">Post Content</label>\r\n              <input id=\"contentFld\" [(ngModel)]=\"discussion.content\" class=\"form-control\">\r\n            </div>\r\n\r\n            <div class=\"UpdateDeleteBtns\">\r\n              <button class=\"btn btn-success updateBtn\" (click)=\"update(discussion)\">Update</button>\r\n              <button (click)=\"openModal(deleteConfirm)\" class=\"btn btn-danger\">Delete</button>\r\n            </div>\r\n            <ng-template #deleteConfirm>\r\n              <div class=\"modal-body text-center\">\r\n                <p>Are you sure you want to <strong>DELETE</strong> this Post?</p>\r\n                <button type=\"button\" class=\"btn btn-danger confirmDelete\" (click)=\"delete(discussion)\" >Delete</button>\r\n                <button type=\"button\" class=\"btn btn-default\" (click)=\"modalRef.hide();\" >Cancel</button>\r\n              </div>\r\n            </ng-template>\r\n\r\n          </accordion-group>\r\n\r\n        </accordion>\r\n\r\n\r\n      </accordion-group>\r\n\r\n    </div>\r\n\r\n    <div *ngIf=\"userType === 'discussion'\">\r\n      <accordion-group *ngFor=\"let discussion of totalDiscussions\">\r\n        <button class=\"btn btn-link btn-block clearfix\" accordion-heading>\r\n          <div class=\"pull-left float-left\">Event : [{{' ' + discussion.event.title}}]___ Time : [{{' ' + discussion.postTime}}]</div>\r\n        </button>\r\n        <div *ngFor=\"let alert of alerts\">\r\n          <alert [type]=\"alert.type\" [dismissOnTimeout]=\"alert.timeout\" (onClosed)=\"onClosed(alert)\">{{ alert.msg }}</alert>\r\n        </div>\r\n        <div class=\"input-group-append wrapDiv\">\r\n          <label for=\"typeFld2\" class=\"col-sm-2 col-form-label\">Post Type</label>\r\n          <input id=\"typeFld2\" [(ngModel)]=\"discussion.type\" class=\"form-control\" readonly>\r\n        </div>\r\n        <div class=\"input-group-append wrapDiv\">\r\n          <label for=\"contentFld2\" class=\"col-sm-2 col-form-label\">Post Content</label>\r\n          <input id=\"contentFld2\" [(ngModel)]=\"discussion.content\" class=\"form-control\">\r\n        </div>\r\n        <div class=\"UpdateDeleteBtns\">\r\n          <button class=\"btn btn-success updateBtn\" (click)=\"update(discussion)\">Update</button>\r\n          <button (click)=\"openModal(deleteConfirm)\" class=\"btn btn-danger\">Delete</button>\r\n        </div>\r\n        <ng-template #deleteConfirm>\r\n          <div class=\"modal-body text-center\">\r\n            <p>Are you sure you want to <strong>DELETE</strong> this Post?</p>\r\n            <button type=\"button\" class=\"btn btn-danger confirmDelete\" (click)=\"deleteTotalDiscussion(discussion)\" >Delete</button>\r\n            <button type=\"button\" class=\"btn btn-default\" (click)=\"modalRef.hide();\" >Cancel</button>\r\n          </div>\r\n        </ng-template>\r\n\r\n\r\n      </accordion-group>\r\n    </div>\r\n\r\n  </accordion>\r\n\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/admin-discussion-list/admin-discussion-list.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/admin-discussion-list/admin-discussion-list.component.ts ***!
  \**************************************************************************/
/*! exports provided: AdminDiscussionListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminDiscussionListComponent", function() { return AdminDiscussionListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_event_service_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/event.service.client */ "./src/app/services/event.service.client.ts");
/* harmony import */ var _services_discussion_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/discussion.service.client */ "./src/app/services/discussion.service.client.ts");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AdminDiscussionListComponent = /** @class */ (function () {
    function AdminDiscussionListComponent(eventService, discussionService, modalService) {
        this.eventService = eventService;
        this.discussionService = discussionService;
        this.modalService = modalService;
        this.events = [];
        this.discussions = [];
        this.totalDiscussions = [];
        this.alerts = [];
        this.userTypeModel = {
            event: 'event',
            discussion: 'discussion'
        };
        this.messageEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    AdminDiscussionListComponent.prototype.sendMessage = function () {
        this.messageEvent.emit(this.message);
    };
    AdminDiscussionListComponent.prototype.openModal = function (template) {
        this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
    };
    AdminDiscussionListComponent.prototype.onClosed = function (dismissedAlert) {
        this.alerts = this.alerts.filter(function (alert) { return alert !== dismissedAlert; });
    };
    AdminDiscussionListComponent.prototype.log = function (event) {
        var _this = this;
        this.eventId = event._id;
        this.discussions = new Array();
        this.discussionService.findDiscussionsForEvent(event._id)
            .then(function (discussions) {
            _this.discussions = discussions;
            console.log(discussions);
        });
    };
    AdminDiscussionListComponent.prototype.openEventTab = function () {
        this.userType = this.userTypeModel.event;
    };
    AdminDiscussionListComponent.prototype.openDiscussionTab = function () {
        this.userType = this.userTypeModel.discussion;
    };
    AdminDiscussionListComponent.prototype.findAllEvents = function () {
        var _this = this;
        this.events = new Array();
        this.eventService.findAllEvents()
            .then(function (events) {
            _this.events = events;
        });
    };
    AdminDiscussionListComponent.prototype.update = function (discussion) {
        var _this = this;
        this.discussionService.updateDiscussion(discussion)
            .then(function () {
            _this.alerts.push({
                type: 'success',
                msg: "Discussion updated successfully.",
                timeout: 5000
            });
        });
    };
    AdminDiscussionListComponent.prototype.delete = function (discussion) {
        var _this = this;
        this.discussionService.deleteDiscussion(discussion._id)
            .then(function () {
            _this.modalRef.hide();
        })
            .then(function () {
            _this.discussionService.findDiscussionsForEvent(_this.eventId)
                .then(function (discussions) { return _this.discussions = discussions; });
            _this.message = _this.discussions.length;
            _this.sendMessage();
            _this.discussionService.findAllDiscussions()
                .then(function (discussions) { return _this.totalDiscussions = discussions; });
            _this.message = _this.totalDiscussions.length;
            _this.sendMessage();
        });
    };
    AdminDiscussionListComponent.prototype.deleteTotalDiscussion = function (discussion) {
        var _this = this;
        this.discussionService.deleteDiscussion(discussion._id)
            .then(function () {
            _this.modalRef.hide();
        })
            .then(function () {
            _this.discussionService.findAllDiscussions()
                .then(function (discussions) { return _this.totalDiscussions = discussions; });
            _this.message = _this.totalDiscussions.length;
            _this.sendMessage();
        });
    };
    AdminDiscussionListComponent.prototype.findAllDiscussions = function () {
        var _this = this;
        this.discussionService.findAllDiscussions()
            .then(function (discussions) {
            _this.totalDiscussions = discussions;
            console.log(_this.totalDiscussions);
        });
    };
    AdminDiscussionListComponent.prototype.ngOnInit = function () {
        this.findAllEvents();
        this.findAllDiscussions();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], AdminDiscussionListComponent.prototype, "messageEvent", void 0);
    AdminDiscussionListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-discussion-list',
            template: __webpack_require__(/*! ./admin-discussion-list.component.html */ "./src/app/admin-discussion-list/admin-discussion-list.component.html"),
            styles: [__webpack_require__(/*! ./admin-discussion-list.component.css */ "./src/app/admin-discussion-list/admin-discussion-list.component.css")]
        }),
        __metadata("design:paramtypes", [_services_event_service_client__WEBPACK_IMPORTED_MODULE_1__["EventServiceClient"],
            _services_discussion_service_client__WEBPACK_IMPORTED_MODULE_2__["DiscussionServiceClient"],
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__["BsModalService"]])
    ], AdminDiscussionListComponent);
    return AdminDiscussionListComponent;
}());



/***/ }),

/***/ "./src/app/admin-enrollment-list/admin-enrollment-list.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/admin-enrollment-list/admin-enrollment-list.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapDiv {\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.UpdateDeleteBtns {\r\n  margin-left: 12px;\r\n}\r\n\r\n.updateBtn {\r\n  margin-right: 10px;\r\n}\r\n\r\n.confirmDelete {\r\n  margin-right: 30px;\r\n}\r\n\r\n.dropdown-item {\r\n  cursor: pointer;\r\n}\r\n\r\n.adminInput {\r\n  margin-top: 20px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/admin-enrollment-list/admin-enrollment-list.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/admin-enrollment-list/admin-enrollment-list.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"nav nav-tabs\">\r\n  <li class=\"nav-item\">\r\n    <a class=\"nav-link\" routerLink=\"/admin\" (click)=\"openEnrollmentTab()\">\r\n      Enrollments({{enrollments.length}})\r\n    </a>\r\n  <!--<li class=\"nav-item\">-->\r\n    <!--<a class=\"nav-link\" routerLink=\"/admin\" (click)=\"openCreateEnrollmentTab()\">-->\r\n      <!--Create New Enrollment-->\r\n    <!--</a>-->\r\n  <!--</li>-->\r\n</ul>\r\n\r\n<accordion [closeOthers]=\"true\">\r\n  <!--<div *ngIf=\"enrollmentType === 'enrollment'\">-->\r\n  <div>\r\n    <accordion-group *ngFor=\"let enrollment of enrollments\" (isOpenChange)=\"log(enrollment)\">\r\n      <button class=\"btn btn-link btn-block clearfix\" accordion-heading>\r\n        <div class=\"pull-left float-left\">\r\n          Attendee:[{{' ' + enrollment.attendee.username + ' '}}]___Event: [{{' ' + enrollment.event.title + ' '}}]\r\n        </div>\r\n      </button>\r\n      <div *ngFor=\"let alert of alerts\">\r\n        <alert [type]=\"alert.type\" [dismissOnTimeout]=\"alert.timeout\" (onClosed)=\"onClosed(alert)\">{{ alert.msg }}</alert>\r\n      </div>\r\n      <div class=\"input-group-append wrapDiv\">\r\n        <label for=\"attendeeFld\" class=\"col-sm-2 col-form-label\">Attendee</label>\r\n        <input id=\"attendeeFld\" [(ngModel)]=\"enrollment.attendee.username\" class=\"form-control\" readonly>\r\n      </div>\r\n      <div class=\"input-group-append wrapDiv\">\r\n        <label for=\"eventFld\" class=\"col-sm-2 col-form-label\">Event</label>\r\n        <input id=\"eventFld\" [(ngModel)]=\"enrollment.event.title\" class=\"form-control\" readonly>\r\n      </div>\r\n\r\n      <div class=\"UpdateDeleteBtns\">\r\n        <button (click)=\"openModal(deleteConfirm)\" class=\"btn btn-danger\">Delete</button>\r\n      </div>\r\n\r\n      <ng-template #deleteConfirm>\r\n        <div class=\"modal-body text-center\">\r\n          <p>Are you sure you want to <strong>DELETE</strong> this Enrollment?</p>\r\n          <button type=\"button\" class=\"btn btn-danger confirmDelete\" (click)=\"delete(enrollment)\" >Delete</button>\r\n          <button type=\"button\" class=\"btn btn-default\" (click)=\"modalRef.hide();\" >Cancel</button>\r\n        </div>\r\n      </ng-template>\r\n\r\n    </accordion-group>\r\n  </div>\r\n\r\n</accordion>\r\n"

/***/ }),

/***/ "./src/app/admin-enrollment-list/admin-enrollment-list.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/admin-enrollment-list/admin-enrollment-list.component.ts ***!
  \**************************************************************************/
/*! exports provided: AdminEnrollmentListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminEnrollmentListComponent", function() { return AdminEnrollmentListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_enrollment_service_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/enrollment.service.client */ "./src/app/services/enrollment.service.client.ts");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminEnrollmentListComponent = /** @class */ (function () {
    function AdminEnrollmentListComponent(enrollmentService, modalService) {
        this.enrollmentService = enrollmentService;
        this.modalService = modalService;
        this.enrollments = [];
        this.alerts = [];
        this.enrollmentTypeModel = {
            enrollment: 'enrollment',
            admin: 'admin'
        };
        this.messageEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    AdminEnrollmentListComponent.prototype.sendMessage = function () {
        this.messageEvent.emit(this.message);
    };
    AdminEnrollmentListComponent.prototype.onClosed = function (dismissedAlert) {
        this.alerts = this.alerts.filter(function (alert) { return alert !== dismissedAlert; });
    };
    AdminEnrollmentListComponent.prototype.openModal = function (template) {
        this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
    };
    AdminEnrollmentListComponent.prototype.findAllEnrollments = function () {
        var _this = this;
        this.enrollmentService.findAllEnrollments()
            .then(function (enrollments) {
            _this.enrollments = enrollments;
            console.log(_this.enrollments);
        });
    };
    AdminEnrollmentListComponent.prototype.openEnrollmentTab = function () {
        this.enrollmentType = this.enrollmentTypeModel.enrollment;
    };
    AdminEnrollmentListComponent.prototype.openCreateEnrollmentTab = function () {
        this.enrollmentType = this.enrollmentTypeModel.admin;
    };
    AdminEnrollmentListComponent.prototype.log = function (enrollment) {
        // this.providerService.findProviderById(site.provider)
        //   .then(provider => {this.siteManager = provider.organizationName;
        //     console.log(this.siteManager);
        //   });
    };
    AdminEnrollmentListComponent.prototype.delete = function (enrollment) {
        var _this = this;
        var unenroll = {
            attendee: enrollment.attendee._id,
            event: enrollment.event._id
        };
        this.enrollmentService.unenrollAttendeeInEvent(unenroll)
            .then(function () {
            _this.modalRef.hide();
        })
            .then(function () {
            _this.findAllEnrollments();
            _this.message = _this.enrollments.length;
            _this.sendMessage();
        });
    };
    AdminEnrollmentListComponent.prototype.ngOnInit = function () {
        this.findAllEnrollments();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], AdminEnrollmentListComponent.prototype, "messageEvent", void 0);
    AdminEnrollmentListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-enrollment-list',
            template: __webpack_require__(/*! ./admin-enrollment-list.component.html */ "./src/app/admin-enrollment-list/admin-enrollment-list.component.html"),
            styles: [__webpack_require__(/*! ./admin-enrollment-list.component.css */ "./src/app/admin-enrollment-list/admin-enrollment-list.component.css")]
        }),
        __metadata("design:paramtypes", [_services_enrollment_service_client__WEBPACK_IMPORTED_MODULE_1__["EnrollmentServiceClient"],
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__["BsModalService"]])
    ], AdminEnrollmentListComponent);
    return AdminEnrollmentListComponent;
}());



/***/ }),

/***/ "./src/app/admin-equipment-list/admin-equipment-list.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/admin-equipment-list/admin-equipment-list.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapDiv {\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.UpdateDeleteBtns {\r\n  margin-left: 12px;\r\n}\r\n\r\n.updateBtn {\r\n  margin-right: 10px;\r\n}\r\n\r\n.confirmDelete {\r\n  margin-right: 30px;\r\n}\r\n\r\n.dropdown-item {\r\n  cursor: pointer;\r\n}\r\n\r\n.adminInput {\r\n  margin-top: 20px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/admin-equipment-list/admin-equipment-list.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/admin-equipment-list/admin-equipment-list.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"nav nav-tabs\">\r\n  <li class=\"nav-item\">\r\n    <a class=\"nav-link\" routerLink=\"/admin\" (click)=\"openEquipmentDealerTab()\">\r\n      EquipmentDealer({{equipmentDealers.length}})\r\n    </a>\r\n  </li>\r\n  <li class=\"nav-item\">\r\n    <a class=\"nav-link\" routerLink=\"/admin\" (click)=\"openCreateEquipmentTab()\">\r\n      Create New Equipment\r\n    </a>\r\n  </li>\r\n</ul>\r\n\r\n<div>\r\n\r\n  <accordion [closeOthers]=\"true\">\r\n    <div *ngIf=\"userType === 'EquipmentDealer'\">\r\n      <accordion-group *ngFor=\"let equipmentDealer of equipmentDealers\" (isOpenChange)=\"log(equipmentDealer)\">\r\n        <button class=\"btn btn-link btn-block clearfix\" accordion-heading>\r\n          <div class=\"pull-left float-left\">{{equipmentDealer.username}}</div>\r\n        </button>\r\n\r\n        <accordion [closeOthers]=\"true\">\r\n\r\n          <accordion-group *ngFor=\"let equipment of equipments\">\r\n            <button class=\"btn btn-link btn-block clearfix\" accordion-heading>\r\n              <div class=\"pull-left float-left\">{{equipment.title}}</div>\r\n            </button>\r\n            <div *ngFor=\"let alert of alerts\">\r\n              <alert [type]=\"alert.type\" [dismissOnTimeout]=\"alert.timeout\" (onClosed)=\"onClosed(alert)\">{{ alert.msg }}</alert>\r\n            </div>\r\n            <div class=\"input-group-append wrapDiv\">\r\n              <label for=\"titleFld\" class=\"col-sm-2 col-form-label\">Name</label>\r\n              <input id=\"titleFld\" [(ngModel)]=\"equipment.title\" class=\"form-control\">\r\n            </div>\r\n            <div class=\"input-group-append wrapDiv\">\r\n              <label for=\"totalFld\" class=\"col-sm-2 col-form-label\">Total Quantity</label>\r\n              <input id=\"totalFld\" [(ngModel)]=\"equipment.quantity\" class=\"form-control\">\r\n            </div>\r\n            <div class=\"input-group-append wrapDiv\">\r\n              <label for=\"availableFld\" class=\"col-sm-2 col-form-label\">Available Quantity</label>\r\n              <input id=\"availableFld\" [(ngModel)]=\"equipment.available\" class=\"form-control\">\r\n            </div>\r\n            <div class=\"UpdateDeleteBtns\">\r\n              <button class=\"btn btn-success updateBtn\" (click)=\"update(equipment)\">Update</button>\r\n              <button (click)=\"openModal(deleteConfirm)\" class=\"btn btn-danger\">Delete</button>\r\n            </div>\r\n\r\n            <ng-template #deleteConfirm>\r\n              <div class=\"modal-body text-center\">\r\n                <p>Are you sure you want to <strong>DELETE</strong> this equipment?</p>\r\n                <button type=\"button\" class=\"btn btn-danger confirmDelete\" (click)=\"delete(equipment)\" >Delete</button>\r\n                <button type=\"button\" class=\"btn btn-default\" (click)=\"modalRef.hide();\" >Cancel</button>\r\n              </div>\r\n            </ng-template>\r\n\r\n          </accordion-group>\r\n\r\n        </accordion>\r\n\r\n      </accordion-group>\r\n    </div>\r\n  </accordion>\r\n\r\n  <div *ngIf=\"userType === 'admin'\" class=\"adminInput\">\r\n    <div *ngFor=\"let alert of alerts\">\r\n      <alert [type]=\"alert.type\" [dismissOnTimeout]=\"alert.timeout\" (onClosed)=\"onClosed(alert)\">{{ alert.msg }}</alert>\r\n    </div>\r\n    <div class=\"input-group-append wrapDiv\">\r\n      <label for=\"titleFld-adm\" class=\"col-sm-2 col-form-label\">Equipment Name</label>\r\n      <input id=\"titleFld-adm\" [(ngModel)]=\"newEquipment.title\" class=\"form-control\">\r\n    </div>\r\n    <div class=\"input-group-append wrapDiv\">\r\n      <label for=\"totalFld-adm\" class=\"col-sm-2 col-form-label\">Total Quantity</label>\r\n      <input id=\"totalFld-adm\" [(ngModel)]=\"newEquipment.quantity\" class=\"form-control\">\r\n    </div>\r\n    <div class=\"input-group-append wrapDiv\">\r\n      <label for=\"availableFld-adm\" class=\"col-sm-2 col-form-label\">Available Quantity</label>\r\n      <input id=\"availableFld-adm\" [(ngModel)]=\"newEquipment.available\" class=\"form-control\">\r\n    </div>\r\n    <button (click)=\"createEquipment()\" class=\"btn btn-success\">Create Equipment</button>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/admin-equipment-list/admin-equipment-list.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/admin-equipment-list/admin-equipment-list.component.ts ***!
  \************************************************************************/
/*! exports provided: AdminEquipmentListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminEquipmentListComponent", function() { return AdminEquipmentListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_provider_service_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/provider.service.client */ "./src/app/services/provider.service.client.ts");
/* harmony import */ var _services_equipment_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/equipment.service.client */ "./src/app/services/equipment.service.client.ts");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var _models_equipment_model_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/equipment.model.client */ "./src/app/models/equipment.model.client.ts");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/user.service.client */ "./src/app/services/user.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AdminEquipmentListComponent = /** @class */ (function () {
    function AdminEquipmentListComponent(providerService, equipmentService, userService, modalService) {
        this.providerService = providerService;
        this.equipmentService = equipmentService;
        this.userService = userService;
        this.modalService = modalService;
        this.equipmentDealers = [];
        this.equipments = [];
        this.newEquipment = new _models_equipment_model_client__WEBPACK_IMPORTED_MODULE_4__["Equipment"]();
        this.alerts = [];
        this.userTypeModel = {
            EquipmentDealer: 'EquipmentDealer',
            admin: 'admin'
        };
        this.messageEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    AdminEquipmentListComponent.prototype.sendMessage = function () {
        this.messageEvent.emit(this.message);
    };
    AdminEquipmentListComponent.prototype.openModal = function (template) {
        this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
    };
    AdminEquipmentListComponent.prototype.openEquipmentDealerTab = function () {
        this.userType = this.userTypeModel.EquipmentDealer;
    };
    AdminEquipmentListComponent.prototype.openCreateEquipmentTab = function () {
        this.userType = this.userTypeModel.admin;
    };
    AdminEquipmentListComponent.prototype.onClosed = function (dismissedAlert) {
        this.alerts = this.alerts.filter(function (alert) { return alert !== dismissedAlert; });
    };
    AdminEquipmentListComponent.prototype.findAllEquipmentDeals = function () {
        var _this = this;
        this.equipmentDealers = new Array();
        this.providerService.findAllProviders()
            .then(function (users) {
            for (var i = 0; i < users.length; i++) {
                if (users[i].role === 'EquipmentDealer') {
                    _this.equipmentDealers.push(users[i]);
                }
            }
        });
    };
    AdminEquipmentListComponent.prototype.update = function (equipment) {
        var _this = this;
        console.log(equipment);
        this.equipmentService.updateEquipment(equipment)
            .then(function () {
            _this.alerts.push({
                type: 'success',
                msg: "Equipment Info updated successfully.",
                timeout: 5000
            });
        });
    };
    AdminEquipmentListComponent.prototype.log = function (dealer) {
        var _this = this;
        this.dealerId = dealer._id;
        this.equipments = new Array();
        this.equipmentService.findEquipmentsForProvider(dealer._id)
            .then(function (equipments) { return _this.equipments = equipments; });
    };
    AdminEquipmentListComponent.prototype.delete = function (equipment) {
        var _this = this;
        this.equipmentService.deleteEquipment(equipment._id)
            .then(function () {
            _this.modalRef.hide();
        })
            .then(function () {
            _this.equipmentService.findEquipmentsForProvider(_this.dealerId)
                .then(function (equipments) { return _this.equipments = equipments; });
            _this.message = _this.equipments.length;
            _this.sendMessage();
        });
    };
    AdminEquipmentListComponent.prototype.createEquipment = function () {
        var _this = this;
        var curUser;
        this.userService.profile()
            .then(function (res) { return curUser = res; })
            .then(function () {
            var newEquipment = new _models_equipment_model_client__WEBPACK_IMPORTED_MODULE_4__["Equipment"]();
            newEquipment.title = _this.newEquipment.title;
            newEquipment.provider = curUser._id;
            newEquipment.quantity = _this.newEquipment.quantity;
            newEquipment.available = _this.newEquipment.available;
            _this.equipmentService.createEquipment(newEquipment);
        }).then(function () {
            _this.equipmentService.findEquipmentsForProvider(_this.dealerId)
                .then(function (equipments) { return _this.equipments = equipments; });
            _this.message = _this.equipments.length;
            _this.sendMessage();
            _this.alerts.push({
                type: 'success',
                msg: "Equipment Created successfully.",
                timeout: 5000
            });
        });
    };
    AdminEquipmentListComponent.prototype.ngOnInit = function () {
        this.findAllEquipmentDeals();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], AdminEquipmentListComponent.prototype, "messageEvent", void 0);
    AdminEquipmentListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-equipment-list',
            template: __webpack_require__(/*! ./admin-equipment-list.component.html */ "./src/app/admin-equipment-list/admin-equipment-list.component.html"),
            styles: [__webpack_require__(/*! ./admin-equipment-list.component.css */ "./src/app/admin-equipment-list/admin-equipment-list.component.css")]
        }),
        __metadata("design:paramtypes", [_services_provider_service_client__WEBPACK_IMPORTED_MODULE_1__["ProviderServiceClient"],
            _services_equipment_service_client__WEBPACK_IMPORTED_MODULE_2__["EquipmentServiceClient"],
            _services_user_service_client__WEBPACK_IMPORTED_MODULE_5__["UserServiceClient"],
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__["BsModalService"]])
    ], AdminEquipmentListComponent);
    return AdminEquipmentListComponent;
}());



/***/ }),

/***/ "./src/app/admin-event-list/admin-event-list.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/admin-event-list/admin-event-list.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapDiv {\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.UpdateDeleteBtns {\r\n  margin-left: 12px;\r\n}\r\n\r\n.updateBtn {\r\n  margin-right: 10px;\r\n}\r\n\r\n.confirmDelete {\r\n  margin-right: 30px;\r\n}\r\n\r\n.dropdown-item {\r\n  cursor: pointer;\r\n}\r\n\r\n.adminInput {\r\n  margin-top: 20px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/admin-event-list/admin-event-list.component.html":
/*!******************************************************************!*\
  !*** ./src/app/admin-event-list/admin-event-list.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"nav nav-tabs\">\r\n  <li class=\"nav-item\">\r\n    <a class=\"nav-link\" routerLink=\"/admin\" (click)=\"openRelaxTab()\">\r\n      Relax({{relaxEvents.length}})\r\n    </a>\r\n  </li>\r\n  <li class=\"nav-item\">\r\n    <a class=\"nav-link\" routerLink=\"/admin\" (click)=\"openTrainingTab()\">\r\n      Training({{trainingEvents.length}})\r\n    </a>\r\n  </li>\r\n  <li class=\"nav-item\">\r\n    <a class=\"nav-link\" routerLink=\"/admin\" (click)=\"openAdventureTab()\">\r\n      Adventure({{adventureEvents.length}})\r\n    </a>\r\n  </li>\r\n  <li class=\"nav-item\">\r\n    <a class=\"nav-link\" routerLink=\"/admin\" (click)=\"openCreateEventTab()\">\r\n      Create New Event\r\n    </a>\r\n  </li>\r\n</ul>\r\n\r\n\r\n<accordion [closeOthers]=\"true\">\r\n\r\n  <div *ngIf=\"eventType === 'Relax'\">\r\n    <accordion-group *ngFor=\"let relaxEvent of relaxEvents\" (isOpenChange)=\"log(relaxEvent)\">\r\n      <button class=\"btn btn-link btn-block clearfix\" accordion-heading>\r\n        <div class=\"pull-left float-left\">{{relaxEvent.title}}</div>\r\n      </button>\r\n      <div *ngFor=\"let alert of alerts\">\r\n        <alert [type]=\"alert.type\" [dismissOnTimeout]=\"alert.timeout\" (onClosed)=\"onClosed(alert)\">{{ alert.msg }}</alert>\r\n      </div>\r\n      <div class=\"input-group-append wrapDiv\">\r\n        <label for=\"titleFld-rel\" class=\"col-sm-2 col-form-label\">Event Title</label>\r\n        <input id=\"titleFld-rel\" [(ngModel)]=\"relaxEvent.title\" class=\"form-control\">\r\n      </div>\r\n      <div class=\"input-group-append wrapDiv\">\r\n        <label for=\"start-rel\" class=\"col-sm-2 col-form-label\">Start Time</label>\r\n        <input type=\"text\"\r\n               [(ngModel)]=\"relaxEvent.startTime\"\r\n               placeholder=\"Start Time\"\r\n               class=\"form-control\"\r\n               id=\"start-rel\"\r\n               [bsConfig]=\"{ dateInputFormat: 'YYYY-MM-DD' }\"\r\n               bsDatepicker>\r\n      </div>\r\n      <div class=\"input-group-append wrapDiv\">\r\n        <label for=\"end-rel\" class=\"col-sm-2 col-form-label\">End Time</label>\r\n        <input type=\"text\"\r\n               [(ngModel)]=\"relaxEvent.endTime\"\r\n               placeholder=\"End Time\"\r\n               class=\"form-control\"\r\n               id=\"end-rel\"\r\n               [bsConfig]=\"{ dateInputFormat: 'YYYY-MM-DD' }\"\r\n               bsDatepicker>\r\n      </div>\r\n      <div class=\"input-group-append wrapDiv\">\r\n        <label for=\"levelFld-rel\" class=\"col-sm-2 col-form-label\">Event Level</label>\r\n        <input id=\"levelFld-rel\" [(ngModel)]=\"relaxEvent.level\" class=\"form-control\">\r\n      </div>\r\n\r\n      <div class=\"UpdateDeleteBtns\">\r\n        <button class=\"btn btn-success updateBtn\" (click)=\"update(relaxEvent)\">Update</button>\r\n        <button (click)=\"openModal(deleteConfirm)\" class=\"btn btn-danger\">Delete</button>\r\n      </div>\r\n\r\n      <ng-template #deleteConfirm>\r\n        <div class=\"modal-body text-center\">\r\n          <p>Are you sure you want to <strong>DELETE</strong> this Event?</p>\r\n          <button type=\"button\" class=\"btn btn-danger confirmDelete\" (click)=\"delete(relaxEvent)\" >Delete</button>\r\n          <button type=\"button\" class=\"btn btn-default\" (click)=\"modalRef.hide();\" >Cancel</button>\r\n        </div>\r\n      </ng-template>\r\n    </accordion-group>\r\n\r\n  </div>\r\n\r\n  <div *ngIf=\"eventType === 'Training'\">\r\n    <accordion-group *ngFor=\"let trainingEvent of trainingEvents\" (isOpenChange)=\"log(trainingEvent)\">\r\n      <button class=\"btn btn-link btn-block clearfix\" accordion-heading>\r\n        <div class=\"pull-left float-left\">{{trainingEvent.title}}</div>\r\n      </button>\r\n      <div *ngFor=\"let alert of alerts\">\r\n        <alert [type]=\"alert.type\" [dismissOnTimeout]=\"alert.timeout\" (onClosed)=\"onClosed(alert)\">{{ alert.msg }}</alert>\r\n      </div>\r\n      <div class=\"input-group-append wrapDiv\">\r\n        <label for=\"titleFld-tra\" class=\"col-sm-2 col-form-label\">Event Title</label>\r\n        <input id=\"titleFld-tra\" [(ngModel)]=\"trainingEvent.title\" class=\"form-control\">\r\n      </div>\r\n      <div class=\"input-group-append wrapDiv\">\r\n        <label for=\"start-tra\" class=\"col-sm-2 col-form-label\">Start Time</label>\r\n        <input type=\"text\"\r\n               [(ngModel)]=\"trainingEvent.startTime\"\r\n               placeholder=\"Start Time\"\r\n               class=\"form-control\"\r\n               id=\"start-tra\"\r\n               [bsConfig]=\"{ dateInputFormat: 'YYYY-MM-DD' }\"\r\n               bsDatepicker>\r\n      </div>\r\n      <div class=\"input-group-append wrapDiv\">\r\n        <label for=\"end-tra\" class=\"col-sm-2 col-form-label\">End Time</label>\r\n        <input type=\"text\"\r\n               [(ngModel)]=\"trainingEvent.endTime\"\r\n               placeholder=\"End Time\"\r\n               class=\"form-control\"\r\n               id=\"end-tra\"\r\n               [bsConfig]=\"{ dateInputFormat: 'YYYY-MM-DD' }\"\r\n               bsDatepicker>\r\n      </div>\r\n      <div class=\"input-group-append wrapDiv\">\r\n        <label for=\"levelFld-tra\" class=\"col-sm-2 col-form-label\">Event Level</label>\r\n        <input id=\"levelFld-tra\" [(ngModel)]=\"trainingEvent.level\" class=\"form-control\">\r\n      </div>\r\n\r\n      <div class=\"UpdateDeleteBtns\">\r\n        <button class=\"btn btn-success updateBtn\" (click)=\"update(trainingEvent)\">Update</button>\r\n        <button (click)=\"openModal(deleteConfirm)\" class=\"btn btn-danger\">Delete</button>\r\n      </div>\r\n      <ng-template #deleteConfirm>\r\n        <div class=\"modal-body text-center\">\r\n          <p>Are you sure you want to <strong>DELETE</strong> this Event?</p>\r\n          <button type=\"button\" class=\"btn btn-danger confirmDelete\" (click)=\"delete(trainingEvent)\" >Delete</button>\r\n          <button type=\"button\" class=\"btn btn-default\" (click)=\"modalRef.hide();\" >Cancel</button>\r\n        </div>\r\n      </ng-template>\r\n    </accordion-group>\r\n\r\n  </div>\r\n\r\n  <div *ngIf=\"eventType === 'Adventure'\">\r\n    <accordion-group *ngFor=\"let adventureEvent of adventureEvents\" (isOpenChange)=\"log(adventureEvent)\">\r\n      <button class=\"btn btn-link btn-block clearfix\" accordion-heading>\r\n        <div class=\"pull-left float-left\">{{adventureEvent.title}}</div>\r\n      </button>\r\n      <div *ngFor=\"let alert of alerts\">\r\n        <alert [type]=\"alert.type\" [dismissOnTimeout]=\"alert.timeout\" (onClosed)=\"onClosed(alert)\">{{ alert.msg }}</alert>\r\n      </div>\r\n      <div class=\"input-group-append wrapDiv\">\r\n        <label for=\"titleFld-adv\" class=\"col-sm-2 col-form-label\">Event Title</label>\r\n        <input id=\"titleFld-adv\" [(ngModel)]=\"adventureEvent.title\" class=\"form-control\">\r\n      </div>\r\n      <div class=\"input-group-append wrapDiv\">\r\n        <label for=\"start-adv\" class=\"col-sm-2 col-form-label\">Start Time</label>\r\n        <input type=\"text\"\r\n               [(ngModel)]=\"adventureEvent.startTime\"\r\n               placeholder=\"Start Time\"\r\n               class=\"form-control\"\r\n               id=\"start-adv\"\r\n               [bsConfig]=\"{ dateInputFormat: 'YYYY-MM-DD' }\"\r\n               bsDatepicker>\r\n      </div>\r\n      <div class=\"input-group-append wrapDiv\">\r\n        <label for=\"end-adv\" class=\"col-sm-2 col-form-label\">End Time</label>\r\n        <input type=\"text\"\r\n               [(ngModel)]=\"adventureEvent.endTime\"\r\n               placeholder=\"End Time\"\r\n               class=\"form-control\"\r\n               id=\"end-adv\"\r\n               [bsConfig]=\"{ dateInputFormat: 'YYYY-MM-DD' }\"\r\n               bsDatepicker>\r\n      </div>\r\n      <div class=\"input-group-append wrapDiv\">\r\n        <label for=\"levelFld-adv\" class=\"col-sm-2 col-form-label\">Event Level</label>\r\n        <input id=\"levelFld-adv\" [(ngModel)]=\"adventureEvent.level\" class=\"form-control\">\r\n      </div>\r\n\r\n      <div class=\"UpdateDeleteBtns\">\r\n        <button class=\"btn btn-success updateBtn\" (click)=\"update(adventureEvent)\">Update</button>\r\n        <button (click)=\"openModal(deleteConfirm)\" class=\"btn btn-danger\">Delete</button>\r\n      </div>\r\n      <ng-template #deleteConfirm>\r\n        <div class=\"modal-body text-center\">\r\n          <p>Are you sure you want to <strong>DELETE</strong> this Event?</p>\r\n          <button type=\"button\" class=\"btn btn-danger confirmDelete\" (click)=\"delete(adventureEvent)\" >Delete</button>\r\n          <button type=\"button\" class=\"btn btn-default\" (click)=\"modalRef.hide();\" >Cancel</button>\r\n        </div>\r\n      </ng-template>\r\n    </accordion-group>\r\n  </div>\r\n</accordion>\r\n\r\n<div *ngIf=\"eventType === 'admin'\" class=\"adminInput\">\r\n  <div *ngFor=\"let alert of alerts\">\r\n    <alert [type]=\"alert.type\" [dismissOnTimeout]=\"alert.timeout\" (onClosed)=\"onClosed(alert)\">{{ alert.msg }}</alert>\r\n  </div>\r\n  <div class=\"input-group-append wrapDiv\">\r\n    <label for=\"titleFld-adm\" class=\"col-sm-2 col-form-label\">Event Title</label>\r\n    <input id=\"titleFld-adm\" [(ngModel)]=\"newEvent.title\" class=\"form-control\">\r\n  </div>\r\n  <div class=\"input-group-append wrapDiv\">\r\n    <label for=\"startFld-adm\" class=\"col-sm-2 col-form-label\">Start Time</label>\r\n    <input type=\"text\"\r\n           [(ngModel)]=\"newEvent.startTime\"\r\n           placeholder=\"Start Time\"\r\n           class=\"form-control\"\r\n           id=\"startFld-adm\"\r\n           [bsConfig]=\"{ dateInputFormat: 'YYYY-MM-DD' }\"\r\n           bsDatepicker>\r\n  </div>\r\n  <div class=\"input-group-append wrapDiv\">\r\n    <label for=\"endFld-adm\" class=\"col-sm-2 col-form-label\">End Time</label>\r\n    <input type=\"text\"\r\n           [(ngModel)]=\"newEvent.endTime\"\r\n           placeholder=\"End Time\"\r\n           class=\"form-control\"\r\n           id=\"endFld-adm\"\r\n           [bsConfig]=\"{ dateInputFormat: 'YYYY-MM-DD' }\"\r\n           bsDatepicker>\r\n  </div>\r\n\r\n  <div class=\"input-group-append wrapDiv adminInput\">\r\n    <label for=\"adminLevelFld-sit\" class=\"col-sm-2 col-form-label\">Event Level</label>\r\n    <li  id=\"adminLevelFld-sit\" class=\"list-group-item form-control\">{{newEvent.level}}</li>\r\n    <div class=\"btn-group\" dropdown>\r\n      <button id=\"button-basic-adm\" dropdownToggle type=\"button\" class=\"btn btn-outline-dark dropdown-toggle\"\r\n              aria-controls=\"dropdown-basic-adm\">\r\n        Select Level\r\n      </button>\r\n      <ul id=\"dropdown-basic-adm\" *dropdownMenu class=\"dropdown-menu\"\r\n          role=\"menu\" aria-labelledby=\"button-basic\">\r\n        <li role=\"menuitem\"><a (click)=\"newEvent.level = 'Relax'\" class=\"dropdown-item\">Relax</a></li>\r\n        <li role=\"menuitem\"><a (click)=\"newEvent.level = 'Training'\" class=\"dropdown-item\">Training</a></li>\r\n        <li role=\"menuitem\"><a (click)=\"newEvent.level = 'Adventure'\" class=\"dropdown-item\">Adventure</a></li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n  <button (click)=\"createEvent(newEvent)\" class=\"btn btn-success\">Create Event</button>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/admin-event-list/admin-event-list.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/admin-event-list/admin-event-list.component.ts ***!
  \****************************************************************/
/*! exports provided: AdminEventListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminEventListComponent", function() { return AdminEventListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var _services_event_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/event.service.client */ "./src/app/services/event.service.client.ts");
/* harmony import */ var _models_EventCard_model_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/EventCard.model.client */ "./src/app/models/EventCard.model.client.ts");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/user.service.client */ "./src/app/services/user.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AdminEventListComponent = /** @class */ (function () {
    function AdminEventListComponent(eventService, modalService, userService) {
        this.eventService = eventService;
        this.modalService = modalService;
        this.userService = userService;
        this.relaxEvents = [];
        this.trainingEvents = [];
        this.adventureEvents = [];
        this.newEvent = new _models_EventCard_model_client__WEBPACK_IMPORTED_MODULE_3__["EventCard"]();
        this.eventTypeModel = {
            relax: 'Relax',
            training: 'Training',
            adventure: 'Adventure',
            admin: 'admin'
        };
        this.alerts = [];
        this.messageEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    AdminEventListComponent.prototype.sendMessage = function () {
        this.messageEvent.emit(this.message);
    };
    AdminEventListComponent.prototype.openModal = function (template) {
        this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
    };
    AdminEventListComponent.prototype.delete = function (event) {
        var _this = this;
        this.eventService.deleteEvent(event._id)
            .then(function () { return _this.modalRef.hide(); })
            .then(function () {
            _this.findAllRelaxEvents();
            _this.findAllTrainingEvents();
            _this.findAllAdventureEvents();
            _this.message = _this.relaxEvents.length + _this.trainingEvents.length + _this.adventureEvents.length;
            _this.sendMessage();
        });
    };
    AdminEventListComponent.prototype.update = function (event) {
        var _this = this;
        console.log(event);
        if (event.level === 'Relax' || event.level === 'Training' || event.level === 'Adventure') {
            this.eventService.updateEvent(event)
                .then(function () {
                _this.alerts.push({
                    type: 'success',
                    msg: "Event info updated successfully.",
                    timeout: 5000
                });
                console.log(_this.preLevel);
                console.log(event.level);
                if (_this.preLevel !== event.level) {
                    _this.findAllRelaxEvents();
                    _this.findAllTrainingEvents();
                    _this.findAllAdventureEvents();
                }
            });
        }
        else {
            this.alerts.push({
                type: 'danger',
                msg: "Invalid level input, can only be 'Relax' or 'Training' or 'Adventure'.",
                timeout: 8000
            });
        }
    };
    AdminEventListComponent.prototype.log = function (event) {
        this.preLevel = event.level;
    };
    AdminEventListComponent.prototype.onClosed = function (dismissedAlert) {
        this.alerts = this.alerts.filter(function (alert) { return alert !== dismissedAlert; });
    };
    AdminEventListComponent.prototype.openRelaxTab = function () {
        this.eventType = this.eventTypeModel.relax;
    };
    AdminEventListComponent.prototype.openTrainingTab = function () {
        this.eventType = this.eventTypeModel.training;
    };
    AdminEventListComponent.prototype.openAdventureTab = function () {
        this.eventType = this.eventTypeModel.adventure;
    };
    AdminEventListComponent.prototype.openCreateEventTab = function () {
        this.eventType = this.eventTypeModel.admin;
    };
    AdminEventListComponent.prototype.findAllRelaxEvents = function () {
        var _this = this;
        this.relaxEvents = new Array();
        this.eventService.findAllEvents()
            .then(function (events) {
            for (var i = 0; i < events.length; i++) {
                if (events[i].level === 'Relax') {
                    _this.relaxEvents.push(events[i]);
                }
            }
        });
    };
    AdminEventListComponent.prototype.findAllTrainingEvents = function () {
        var _this = this;
        this.trainingEvents = new Array();
        this.eventService.findAllEvents()
            .then(function (events) {
            for (var i = 0; i < events.length; i++) {
                if (events[i].level === 'Training') {
                    _this.trainingEvents.push(events[i]);
                }
            }
        });
    };
    AdminEventListComponent.prototype.findAllAdventureEvents = function () {
        var _this = this;
        this.adventureEvents = new Array();
        this.eventService.findAllEvents()
            .then(function (events) {
            for (var i = 0; i < events.length; i++) {
                if (events[i].level === 'Adventure') {
                    _this.adventureEvents.push(events[i]);
                }
            }
        });
    };
    AdminEventListComponent.prototype.createEvent = function () {
        var _this = this;
        var curUser;
        this.userService.profile()
            .then(function (res) { return curUser = res; })
            .then(function () {
            var newEvent = new _models_EventCard_model_client__WEBPACK_IMPORTED_MODULE_3__["EventCard"]();
            newEvent.title = _this.newEvent.title;
            newEvent.organizer = curUser._id;
            newEvent.startTime = _this.newEvent.startTime;
            newEvent.endTime = _this.newEvent.endTime;
            newEvent.level = _this.newEvent.level;
            if (_this.newEvent.level === 'Relax') {
                _this.eventService.createEvent(newEvent)
                    .then(function () {
                    _this.findAllRelaxEvents();
                    _this.message = _this.relaxEvents.length + _this.trainingEvents.length + _this.adventureEvents.length;
                    _this.sendMessage();
                    _this.alerts.push({
                        type: 'success',
                        msg: "Event Created successfully.",
                        timeout: 5000
                    });
                });
            }
            else if (_this.newEvent.level === 'Training') {
                _this.eventService.createEvent(newEvent)
                    .then(function () {
                    _this.findAllTrainingEvents();
                    _this.message = _this.relaxEvents.length + _this.trainingEvents.length + _this.adventureEvents.length;
                    _this.sendMessage();
                    _this.alerts.push({
                        type: 'success',
                        msg: "Event Created successfully.",
                        timeout: 5000
                    });
                });
            }
            else if (_this.newEvent.level === 'Adventure') {
                _this.eventService.createEvent(newEvent)
                    .then(function () {
                    _this.findAllAdventureEvents();
                    _this.message = _this.relaxEvents.length + _this.trainingEvents.length + _this.adventureEvents.length;
                    _this.sendMessage();
                    _this.alerts.push({
                        type: 'success',
                        msg: "Event Created successfully.",
                        timeout: 5000
                    });
                });
            }
        });
    };
    AdminEventListComponent.prototype.ngOnInit = function () {
        this.findAllRelaxEvents();
        this.findAllTrainingEvents();
        this.findAllAdventureEvents();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], AdminEventListComponent.prototype, "messageEvent", void 0);
    AdminEventListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-event-list',
            template: __webpack_require__(/*! ./admin-event-list.component.html */ "./src/app/admin-event-list/admin-event-list.component.html"),
            styles: [__webpack_require__(/*! ./admin-event-list.component.css */ "./src/app/admin-event-list/admin-event-list.component.css")]
        }),
        __metadata("design:paramtypes", [_services_event_service_client__WEBPACK_IMPORTED_MODULE_2__["EventServiceClient"],
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_1__["BsModalService"],
            _services_user_service_client__WEBPACK_IMPORTED_MODULE_4__["UserServiceClient"]])
    ], AdminEventListComponent);
    return AdminEventListComponent;
}());



/***/ }),

/***/ "./src/app/admin-rental-list/admin-rental-list.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/admin-rental-list/admin-rental-list.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapDiv {\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.UpdateDeleteBtns {\r\n  margin-left: 12px;\r\n}\r\n\r\n.updateBtn {\r\n  margin-right: 10px;\r\n}\r\n\r\n.confirmDelete {\r\n  margin-right: 30px;\r\n}\r\n\r\n.dropdown-item {\r\n  cursor: pointer;\r\n}\r\n\r\n.adminInput {\r\n  margin-top: 20px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/admin-rental-list/admin-rental-list.component.html":
/*!********************************************************************!*\
  !*** ./src/app/admin-rental-list/admin-rental-list.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"nav nav-tabs\">\r\n  <li class=\"nav-item\">\r\n    <a class=\"nav-link\" routerLink=\"/admin\" (click)=\"openRentalTab()\">\r\n      Rentals({{rentals.length}})\r\n    </a>\r\n  <!--<li class=\"nav-item\">-->\r\n    <!--<a class=\"nav-link\" routerLink=\"/admin\" (click)=\"openCreateRentalTab()\">-->\r\n      <!--Create New Rentals-->\r\n    <!--</a>-->\r\n  <!--</li>-->\r\n</ul>\r\n\r\n<accordion [closeOthers]=\"true\">\r\n  <!--<div *ngIf=\"rentalType === 'rental'\">-->\r\n  <div>\r\n    <accordion-group *ngFor=\"let rental of rentals\" (isOpenChange)=\"log(rental)\">\r\n      <button class=\"btn btn-link btn-block clearfix\" accordion-heading>\r\n        <div class=\"pull-left float-left\">\r\n          Equipment:[{{' ' + rental.equipment.title + ' '}}]___Event: [{{' ' + rental.event.title + ' '}}]\r\n        </div>\r\n      </button>\r\n      <div *ngFor=\"let alert of alerts\">\r\n        <alert [type]=\"alert.type\" [dismissOnTimeout]=\"alert.timeout\" (onClosed)=\"onClosed(alert)\">{{ alert.msg }}</alert>\r\n      </div>\r\n      <div class=\"input-group-append wrapDiv\">\r\n        <label for=\"equipmentFld\" class=\"col-sm-2 col-form-label\">Equipment</label>\r\n        <input id=\"equipmentFld\" [(ngModel)]=\"rental.equipment.title\" class=\"form-control\" readonly>\r\n      </div>\r\n      <div class=\"input-group-append wrapDiv\">\r\n        <label for=\"eventFld\" class=\"col-sm-2 col-form-label\">Event</label>\r\n        <input id=\"eventFld\" [(ngModel)]=\"rental.event.title\" class=\"form-control\" readonly>\r\n      </div>\r\n\r\n      <div class=\"UpdateDeleteBtns\">\r\n        <button (click)=\"openModal(deleteConfirm)\" class=\"btn btn-danger\">Delete</button>\r\n      </div>\r\n\r\n      <ng-template #deleteConfirm>\r\n        <div class=\"modal-body text-center\">\r\n          <p>Are you sure you want to <strong>DELETE</strong> this Rental?</p>\r\n          <button type=\"button\" class=\"btn btn-danger confirmDelete\" (click)=\"delete(rental)\" >Delete</button>\r\n          <button type=\"button\" class=\"btn btn-default\" (click)=\"modalRef.hide();\" >Cancel</button>\r\n        </div>\r\n      </ng-template>\r\n\r\n    </accordion-group>\r\n  </div>\r\n</accordion>\r\n"

/***/ }),

/***/ "./src/app/admin-rental-list/admin-rental-list.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/admin-rental-list/admin-rental-list.component.ts ***!
  \******************************************************************/
/*! exports provided: AdminRentalListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminRentalListComponent", function() { return AdminRentalListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_equipmentRenting_service_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/equipmentRenting.service.client */ "./src/app/services/equipmentRenting.service.client.ts");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminRentalListComponent = /** @class */ (function () {
    function AdminRentalListComponent(rentalService, modalService) {
        this.rentalService = rentalService;
        this.modalService = modalService;
        this.rentals = [];
        this.alerts = [];
        this.rentalTypeModel = {
            rental: 'rental',
            admin: 'admin'
        };
        this.messageEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    AdminRentalListComponent.prototype.sendMessage = function () {
        this.messageEvent.emit(this.message);
    };
    AdminRentalListComponent.prototype.onClosed = function (dismissedAlert) {
        this.alerts = this.alerts.filter(function (alert) { return alert !== dismissedAlert; });
    };
    AdminRentalListComponent.prototype.openModal = function (template) {
        this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
    };
    AdminRentalListComponent.prototype.openRentalTab = function () {
        this.rentalType = this.rentalTypeModel.rental;
    };
    AdminRentalListComponent.prototype.openCreateRentalTab = function () {
        this.rentalType = this.rentalTypeModel.admin;
    };
    AdminRentalListComponent.prototype.findAllRentals = function () {
        var _this = this;
        this.rentalService.findAllRenting()
            .then(function (rentals) {
            _this.rentals = rentals;
            console.log(_this.rentals);
        });
    };
    AdminRentalListComponent.prototype.delete = function (rental) {
        // const real = {
        //   _id: reservation._id,
        //   event: reservation.event._id,
        //   equipment: reservation.equipment._id,
        //   quantity: reservation.quantity
        // }
        // this.equipmentRentingService
        //   .returnEquipForEvent(real)
        //   .then(() => {
        //     this.equipmentRentingService
        //       .findRentingsForProvider(this.user._id).then(rentings => {
        //       this.messageEvent.emit(rentings);
        //     });
        //   });
        var _this = this;
        var unenroll = {
            _id: rental._id,
            event: rental.event._id,
            equipment: rental.equipment._id,
            quantity: rental.quantity,
        };
        console.log(unenroll);
        this.rentalService.returnEquipForEvent(unenroll)
            .then(function () {
            _this.modalRef.hide();
        })
            .then(function () {
            _this.findAllRentals();
            _this.message = _this.rentals.length;
            _this.sendMessage();
        });
        console.log(unenroll);
    };
    AdminRentalListComponent.prototype.log = function (rental) {
        // this.providerService.findProviderById(site.provider)
        //   .then(provider => {this.siteManager = provider.organizationName;
        //     console.log(this.siteManager);
        //   });
    };
    AdminRentalListComponent.prototype.ngOnInit = function () {
        this.findAllRentals();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], AdminRentalListComponent.prototype, "messageEvent", void 0);
    AdminRentalListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-rental-list',
            template: __webpack_require__(/*! ./admin-rental-list.component.html */ "./src/app/admin-rental-list/admin-rental-list.component.html"),
            styles: [__webpack_require__(/*! ./admin-rental-list.component.css */ "./src/app/admin-rental-list/admin-rental-list.component.css")]
        }),
        __metadata("design:paramtypes", [_services_equipmentRenting_service_client__WEBPACK_IMPORTED_MODULE_1__["EquipmentRentingServiceClient"],
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__["BsModalService"]])
    ], AdminRentalListComponent);
    return AdminRentalListComponent;
}());



/***/ }),

/***/ "./src/app/admin-reservation-list/admin-reservation-list.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/admin-reservation-list/admin-reservation-list.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapDiv {\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.UpdateDeleteBtns {\r\n  margin-left: 12px;\r\n}\r\n\r\n.updateBtn {\r\n  margin-right: 10px;\r\n}\r\n\r\n.confirmDelete {\r\n  margin-right: 30px;\r\n}\r\n\r\n.dropdown-item {\r\n  cursor: pointer;\r\n}\r\n\r\n.adminInput {\r\n  margin-top: 20px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/admin-reservation-list/admin-reservation-list.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/admin-reservation-list/admin-reservation-list.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"nav nav-tabs\">\r\n  <li class=\"nav-item\">\r\n    <a class=\"nav-link\" routerLink=\"/admin\" (click)=\"openReservationTab()\">\r\n      Reservations({{reservations.length}})\r\n    </a>\r\n  <!--<li class=\"nav-item\">-->\r\n    <!--<a class=\"nav-link\" routerLink=\"/admin\" (click)=\"openCreateReservationTab()\">-->\r\n      <!--Create New Reservation-->\r\n    <!--</a>-->\r\n  <!--</li>-->\r\n</ul>\r\n\r\n<accordion [closeOthers]=\"true\">\r\n  <!--<div *ngIf=\"reservationType === 'reservation'\">-->\r\n  <div>\r\n    <accordion-group *ngFor=\"let reservation of reservations\" (isOpenChange)=\"log(reservation)\">\r\n      <button class=\"btn btn-link btn-block clearfix\" accordion-heading>\r\n        <div class=\"pull-left float-left\">\r\n          Event:[{{' ' + reservation.event.title + ' '}}]___Site: [{{' ' + reservation.site.title + ' '}}]\r\n        </div>\r\n      </button>\r\n      <div *ngFor=\"let alert of alerts\">\r\n        <alert [type]=\"alert.type\" [dismissOnTimeout]=\"alert.timeout\" (onClosed)=\"onClosed(alert)\">{{ alert.msg }}</alert>\r\n      </div>\r\n      <div class=\"input-group-append wrapDiv\">\r\n        <label for=\"eventFld\" class=\"col-sm-2 col-form-label\">Event</label>\r\n        <input id=\"eventFld\" [(ngModel)]=\"reservation.event.title\" class=\"form-control\" readonly>\r\n      </div>\r\n      <div class=\"input-group-append wrapDiv\">\r\n        <label for=\"siteFld\" class=\"col-sm-2 col-form-label\">Site</label>\r\n        <input id=\"siteFld\" [(ngModel)]=\"reservation.site.title\" class=\"form-control\" readonly>\r\n      </div>\r\n\r\n      <div class=\"UpdateDeleteBtns\">\r\n        <button (click)=\"openModal(deleteConfirm)\" class=\"btn btn-danger\">Delete</button>\r\n      </div>\r\n\r\n      <ng-template #deleteConfirm>\r\n        <div class=\"modal-body text-center\">\r\n          <p>Are you sure you want to <strong>DELETE</strong> this Reservation?</p>\r\n          <button type=\"button\" class=\"btn btn-danger confirmDelete\" (click)=\"delete(reservation)\" >Delete</button>\r\n          <button type=\"button\" class=\"btn btn-default\" (click)=\"modalRef.hide();\" >Cancel</button>\r\n        </div>\r\n      </ng-template>\r\n\r\n    </accordion-group>\r\n  </div>\r\n</accordion>\r\n"

/***/ }),

/***/ "./src/app/admin-reservation-list/admin-reservation-list.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/admin-reservation-list/admin-reservation-list.component.ts ***!
  \****************************************************************************/
/*! exports provided: AdminReservationListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminReservationListComponent", function() { return AdminReservationListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_reservation_service_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/reservation.service.client */ "./src/app/services/reservation.service.client.ts");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminReservationListComponent = /** @class */ (function () {
    function AdminReservationListComponent(reservationService, modalService) {
        this.reservationService = reservationService;
        this.modalService = modalService;
        this.reservations = [];
        this.alerts = [];
        this.reservationTypeModel = {
            reservation: 'reservation',
            admin: 'admin'
        };
        this.messageEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    AdminReservationListComponent.prototype.sendMessage = function () {
        this.messageEvent.emit(this.message);
    };
    AdminReservationListComponent.prototype.openModal = function (template) {
        this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
    };
    AdminReservationListComponent.prototype.onClosed = function (dismissedAlert) {
        this.alerts = this.alerts.filter(function (alert) { return alert !== dismissedAlert; });
    };
    AdminReservationListComponent.prototype.openReservationTab = function () {
        this.reservationType = this.reservationTypeModel.reservation;
    };
    AdminReservationListComponent.prototype.log = function (reservation) {
        // this.providerService.findProviderById(site.provider)
        //   .then(provider => {this.siteManager = provider.organizationName;
        //     console.log(this.siteManager);
        //   });
    };
    AdminReservationListComponent.prototype.findAllReservations = function () {
        var _this = this;
        this.reservationService.findAllReservations()
            .then(function (reservations) {
            _this.reservations = reservations;
            console.log(_this.reservations);
        });
    };
    AdminReservationListComponent.prototype.openCreateReservationTab = function () {
        this.reservationType = this.reservationTypeModel.admin;
    };
    AdminReservationListComponent.prototype.delete = function (reservation) {
        var _this = this;
        var unenroll = {
            event: reservation.event._id,
            site: reservation.site._id
        };
        this.reservationService.unreserveSiteForEvent(unenroll)
            .then(function () {
            _this.modalRef.hide();
        })
            .then(function () {
            _this.findAllReservations();
            _this.message = _this.reservations.length;
            _this.sendMessage();
        });
    };
    AdminReservationListComponent.prototype.ngOnInit = function () {
        this.findAllReservations();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], AdminReservationListComponent.prototype, "messageEvent", void 0);
    AdminReservationListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-reservation-list',
            template: __webpack_require__(/*! ./admin-reservation-list.component.html */ "./src/app/admin-reservation-list/admin-reservation-list.component.html"),
            styles: [__webpack_require__(/*! ./admin-reservation-list.component.css */ "./src/app/admin-reservation-list/admin-reservation-list.component.css")]
        }),
        __metadata("design:paramtypes", [_services_reservation_service_client__WEBPACK_IMPORTED_MODULE_1__["ReservationServiceClient"],
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__["BsModalService"]])
    ], AdminReservationListComponent);
    return AdminReservationListComponent;
}());



/***/ }),

/***/ "./src/app/admin-site-list/admin-site-list.component.css":
/*!***************************************************************!*\
  !*** ./src/app/admin-site-list/admin-site-list.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapDiv {\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.UpdateDeleteBtns {\r\n  margin-left: 12px;\r\n}\r\n\r\n.updateBtn {\r\n  margin-right: 10px;\r\n}\r\n\r\n.confirmDelete {\r\n  margin-right: 30px;\r\n}\r\n\r\n.dropdown-item {\r\n  cursor: pointer;\r\n}\r\n\r\n.adminInput {\r\n  margin-top: 20px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/admin-site-list/admin-site-list.component.html":
/*!****************************************************************!*\
  !*** ./src/app/admin-site-list/admin-site-list.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"nav nav-tabs\">\r\n  <li class=\"nav-item\">\r\n    <a class=\"nav-link\" routerLink=\"/admin\" (click)=\"openSiteTab()\">\r\n      Sites({{sites.length}})\r\n    </a>\r\n  <li class=\"nav-item\">\r\n    <a class=\"nav-link\" routerLink=\"/admin\" (click)=\"openCreateSiteTab()\">\r\n      Create New Site\r\n    </a>\r\n  </li>\r\n</ul>\r\n\r\n\r\n<accordion [closeOthers]=\"true\">\r\n\r\n  <div *ngIf=\"siteType === 'site'\">\r\n    <accordion-group *ngFor=\"let site of sites\" (isOpenChange)=\"log(site)\">\r\n      <button class=\"btn btn-link btn-block clearfix\" accordion-heading>\r\n        <div class=\"pull-left float-left\">{{site.title}}</div>\r\n      </button>\r\n      <div *ngFor=\"let alert of alerts\">\r\n        <alert [type]=\"alert.type\" [dismissOnTimeout]=\"alert.timeout\" (onClosed)=\"onClosed(alert)\">{{ alert.msg }}</alert>\r\n      </div>\r\n      <div class=\"input-group-append wrapDiv\">\r\n        <label for=\"providerFld\" class=\"col-sm-2 col-form-label\">Site Manager</label>\r\n        <input id=\"providerFld\" [(ngModel)]=\"siteManager\" class=\"form-control\" readonly>\r\n      </div>\r\n      <div class=\"input-group-append wrapDiv\">\r\n        <label for=\"titleFld\" class=\"col-sm-2 col-form-label\">Site Name</label>\r\n        <input id=\"titleFld\" [(ngModel)]=\"site.title\" class=\"form-control\">\r\n      </div>\r\n      <!--<div class=\"input-group-append wrapDiv\">-->\r\n        <!--<label for=\"tagFld\" class=\"col-sm-2 col-form-label\">Site Tags</label>-->\r\n        <!--<textarea id=\"tagFld\" [(ngModel)]=\"site.tags\" class=\"form-control\"></textarea>-->\r\n      <!--</div>-->\r\n      <div class=\"input-group-append wrapDiv\">\r\n        <label for=\"photoFld\" class=\"col-sm-2 col-form-label\">Site Photos</label>\r\n        <textarea id=\"photoFld\" [(ngModel)]=\"site.photos\" class=\"form-control\"></textarea>\r\n      </div>\r\n\r\n      <div class=\"UpdateDeleteBtns\">\r\n        <button class=\"btn btn-success updateBtn\" (click)=\"update(site)\">Update</button>\r\n        <button (click)=\"openModal(deleteConfirm)\" class=\"btn btn-danger\">Delete</button>\r\n      </div>\r\n\r\n      <ng-template #deleteConfirm>\r\n        <div class=\"modal-body text-center\">\r\n          <p>Are you sure you want to <strong>DELETE</strong> this Site?</p>\r\n          <button type=\"button\" class=\"btn btn-danger confirmDelete\" (click)=\"delete(site)\" >Delete</button>\r\n          <button type=\"button\" class=\"btn btn-default\" (click)=\"modalRef.hide();\" >Cancel</button>\r\n        </div>\r\n      </ng-template>\r\n    </accordion-group>\r\n\r\n  </div>\r\n\r\n</accordion>\r\n\r\n<div *ngIf=\"siteType === 'admin'\" class=\"adminInput\">\r\n  <div *ngFor=\"let alert of alerts\">\r\n    <alert [type]=\"alert.type\" [dismissOnTimeout]=\"alert.timeout\" (onClosed)=\"onClosed(alert)\">{{ alert.msg }}</alert>\r\n  </div>\r\n  <div class=\"input-group-append wrapDiv\">\r\n    <label for=\"titleFld-adm\" class=\"col-sm-2 col-form-label\">Site Name</label>\r\n    <input id=\"titleFld-adm\" [(ngModel)]=\"newSite.title\" class=\"form-control\">\r\n  </div>\r\n  <button (click)=\"createSite(newSite)\" class=\"btn btn-success\">Create Site</button>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/admin-site-list/admin-site-list.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/admin-site-list/admin-site-list.component.ts ***!
  \**************************************************************/
/*! exports provided: AdminSiteListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminSiteListComponent", function() { return AdminSiteListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_site_service_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/site.service.client */ "./src/app/services/site.service.client.ts");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var _services_provider_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/provider.service.client */ "./src/app/services/provider.service.client.ts");
/* harmony import */ var _models_site_model_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/site.model.client */ "./src/app/models/site.model.client.ts");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/user.service.client */ "./src/app/services/user.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AdminSiteListComponent = /** @class */ (function () {
    function AdminSiteListComponent(siteService, modalService, userService, providerService) {
        this.siteService = siteService;
        this.modalService = modalService;
        this.userService = userService;
        this.providerService = providerService;
        this.sites = [];
        this.alerts = [];
        this.newSite = new _models_site_model_client__WEBPACK_IMPORTED_MODULE_4__["Site"]();
        this.siteTypeModel = {
            site: 'site',
            admin: 'admin'
        };
        this.messageEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    AdminSiteListComponent.prototype.sendMessage = function () {
        this.messageEvent.emit(this.message);
    };
    AdminSiteListComponent.prototype.openModal = function (template) {
        this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
    };
    AdminSiteListComponent.prototype.log = function (site) {
        var _this = this;
        this.providerService.findProviderById(site.provider)
            .then(function (provider) {
            _this.siteManager = provider.organizationName;
            console.log(_this.siteManager);
        });
    };
    AdminSiteListComponent.prototype.onClosed = function (dismissedAlert) {
        this.alerts = this.alerts.filter(function (alert) { return alert !== dismissedAlert; });
    };
    AdminSiteListComponent.prototype.openSiteTab = function () {
        this.siteType = this.siteTypeModel.site;
    };
    AdminSiteListComponent.prototype.openCreateSiteTab = function () {
        this.siteType = this.siteTypeModel.admin;
    };
    AdminSiteListComponent.prototype.findAllSites = function () {
        var _this = this;
        this.siteService.findAllSites()
            .then(function (sites) { return _this.sites = sites; });
    };
    AdminSiteListComponent.prototype.update = function (site) {
        var _this = this;
        this.siteService.updateSite(site)
            .then(function () {
            _this.alerts.push({
                type: 'success',
                msg: "Site info updated successfully.",
                timeout: 5000
            });
        });
    };
    AdminSiteListComponent.prototype.delete = function (site) {
        var _this = this;
        this.siteService.deleteSite(site._id)
            .then(function () { return _this.modalRef.hide(); })
            .then(function () {
            _this.findAllSites();
            _this.message = _this.sites.length;
            _this.sendMessage();
        });
    };
    AdminSiteListComponent.prototype.createSite = function () {
        var _this = this;
        var curUser;
        this.userService.profile()
            .then(function (res) { return curUser = res; })
            .then(function () {
            var newSite = new _models_site_model_client__WEBPACK_IMPORTED_MODULE_4__["Site"]();
            newSite.title = _this.newSite.title;
            newSite.provider = curUser._id;
            return _this.siteService.createSite(newSite);
        })
            .then(function () {
            _this.alerts.push({
                type: 'success',
                msg: "Site created successfully.",
                timeout: 5000
            });
            _this.findAllSites();
            _this.message = _this.sites.length;
            _this.sendMessage();
        });
    };
    AdminSiteListComponent.prototype.ngOnInit = function () {
        this.findAllSites();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], AdminSiteListComponent.prototype, "messageEvent", void 0);
    AdminSiteListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-site-list',
            template: __webpack_require__(/*! ./admin-site-list.component.html */ "./src/app/admin-site-list/admin-site-list.component.html"),
            styles: [__webpack_require__(/*! ./admin-site-list.component.css */ "./src/app/admin-site-list/admin-site-list.component.css")]
        }),
        __metadata("design:paramtypes", [_services_site_service_client__WEBPACK_IMPORTED_MODULE_1__["SiteServiceClient"],
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__["BsModalService"],
            _services_user_service_client__WEBPACK_IMPORTED_MODULE_5__["UserServiceClient"],
            _services_provider_service_client__WEBPACK_IMPORTED_MODULE_3__["ProviderServiceClient"]])
    ], AdminSiteListComponent);
    return AdminSiteListComponent;
}());



/***/ }),

/***/ "./src/app/admin/admin.component.css":
/*!*******************************************!*\
  !*** ./src/app/admin/admin.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#menu {\r\n  margin-top: 70px;\r\n}\r\n\r\n.card {\r\n  margin: 10px;\r\n}\r\n\r\n#title p {\r\n  margin-top: 20px;\r\n  margin-left: 10px;\r\n  color:gray;\r\n}\r\n\r\n.arrow {\r\n  color: white;\r\n  margin-top: 20px\r\n}\r\n\r\n/*.scrolling-wrapper {*/\r\n\r\n/*overflow-x: hidden;*/\r\n\r\n/*overflow-y: scroll;*/\r\n\r\n/*white-space: nowrap;*/\r\n\r\n/*-webkit-overflow-scrolling: touch;*/\r\n\r\n/*}*/\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/admin/admin.component.html":
/*!********************************************!*\
  !*** ./src/app/admin/admin.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"menu\">\r\n  <div id=\"title\" class=\"input-group-append container-fluid\">\r\n    <h1>Admin Dashboard</h1>\r\n    <p>Control panel</p>\r\n  </div>\r\n  <div class=\"row\" style=\"width: 100%\">\r\n\r\n\r\n    <div id=\"cardList\" class=\"col-3\">\r\n      <!--<div class=\"scrolling-wrapper\">-->\r\n\r\n      <div class=\"card text-white bg-info\">\r\n        <div class=\"card-header input-group-append\">\r\n          <h4>User</h4>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <h2 class=\"card-title\">Total Users : {{personalUsers.length + providers.length}}</h2>\r\n          <a class=\"arrow\" (click)=\"openUserList()\" routerLink=\"/admin\">\r\n            More Info\r\n            <i class=\"fas fa-arrow-circle-right\"></i>\r\n          </a>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"card text-white bg-warning\">\r\n        <div class=\"card-header\">\r\n          <h4>Event</h4>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <h2 class=\"card-title\">Total Events : {{events.length}}</h2>\r\n          <a class=\"arrow\" (click)=\"openEventList()\" routerLink=\"/admin\">\r\n            More Info\r\n            <i class=\"fas fa-arrow-circle-right\"></i>\r\n          </a>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"card text-white bg-secondary\">\r\n        <div class=\"card-header\">\r\n          <h4>Equipments</h4>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <h3 class=\"card-title\">Total Equipments : {{equipments.length}}</h3>\r\n          <a class=\"arrow\" (click)=\"openEquipmentList()\" routerLink=\"/admin\">\r\n            More Info\r\n            <i class=\"fas fa-arrow-circle-right\"></i>\r\n          </a>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"card text-white bg-success\">\r\n        <div class=\"card-header\">\r\n          <h4>Discussions</h4>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <h3 class=\"card-title\">Total Discussions : {{discussions.length}}</h3>\r\n          <a class=\"arrow\" (click)=\"openDiscussionList()\" routerLink=\"/admin\">\r\n            More Info\r\n            <i class=\"fas fa-arrow-circle-right\"></i>\r\n          </a>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"card text-white bg-danger\">\r\n        <div class=\"card-header\">\r\n          <h4>CampSites</h4>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <h3 class=\"card-title\">Total CampSites : {{sites.length}}</h3>\r\n          <a class=\"arrow\" (click)=\"openSiteList()\" routerLink=\"/admin\">\r\n            More Info\r\n            <i class=\"fas fa-arrow-circle-right\"></i>\r\n          </a>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"card text-white bg-dark\">\r\n        <div class=\"card-header\">\r\n          <h4>Enrollments</h4>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <h3 class=\"card-title\">Total Enrollments : {{enrollments.length}}</h3>\r\n          <a class=\"arrow\" (click)=\"openEnrollmentList()\" routerLink=\"/admin\">\r\n            More Info\r\n            <i class=\"fas fa-arrow-circle-right\"></i>\r\n          </a>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"card text-white bg-primary\">\r\n        <div class=\"card-header\">\r\n          <h4>Reservations</h4>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <h3 class=\"card-title\">Total Reservations : {{reservations.length}}</h3>\r\n          <a class=\"arrow\" (click)=\"openReservationList()\" routerLink=\"/admin\">\r\n            More Info\r\n            <i class=\"fas fa-arrow-circle-right\"></i>\r\n          </a>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"card text-white\" style=\"background-color: #6f42c1\">\r\n        <div class=\"card-header\">\r\n          <h4>Rentals</h4>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <h3 class=\"card-title\">Total Rentals : {{rentals.length}}</h3>\r\n          <a class=\"arrow\" (click)=\"openRentalList()\" routerLink=\"/admin\">\r\n            More Info\r\n            <i class=\"fas fa-arrow-circle-right\"></i>\r\n          </a>\r\n        </div>\r\n      </div>\r\n\r\n    <!--</div>-->\r\n    </div>\r\n\r\n\r\n    <div class=\"col-9\">\r\n      <app-user-list *ngIf=\"listType === 'userList'\" (messageEvent)=\"receiveMessage($event)\"></app-user-list>\r\n      <app-admin-event-list *ngIf=\"listType === 'eventList'\" (messageEvent)=\"receiveMessage($event)\"></app-admin-event-list>\r\n      <app-admin-equipment-list *ngIf=\"listType === 'equipmentList'\" (messageEvent)=\"receiveMessage($event)\"></app-admin-equipment-list>\r\n      <app-admin-discussion-list *ngIf=\"listType === 'discussionList'\" (messageEvent)=\"receiveMessage($event)\"></app-admin-discussion-list>\r\n      <app-admin-site-list *ngIf=\"listType === 'siteList'\" (messageEvent)=\"receiveMessage($event)\"></app-admin-site-list>\r\n      <app-admin-enrollment-list *ngIf=\"listType === 'enrollmentList'\" (messageEvent)=\"receiveMessage($event)\"></app-admin-enrollment-list>\r\n      <app-admin-reservation-list *ngIf=\"listType === 'reservationList'\" (messageEvent)=\"receiveMessage($event)\"></app-admin-reservation-list>\r\n      <app-admin-rental-list *ngIf=\"listType === 'rentalList'\" (messageEvent)=\"receiveMessage($event)\"></app-admin-rental-list>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/admin/admin.component.ts":
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _services_provider_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/provider.service.client */ "./src/app/services/provider.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_event_service_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/event.service.client */ "./src/app/services/event.service.client.ts");
/* harmony import */ var _services_equipment_service_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/equipment.service.client */ "./src/app/services/equipment.service.client.ts");
/* harmony import */ var _services_discussion_service_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/discussion.service.client */ "./src/app/services/discussion.service.client.ts");
/* harmony import */ var _services_site_service_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/site.service.client */ "./src/app/services/site.service.client.ts");
/* harmony import */ var _services_enrollment_service_client__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/enrollment.service.client */ "./src/app/services/enrollment.service.client.ts");
/* harmony import */ var _services_reservation_service_client__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/reservation.service.client */ "./src/app/services/reservation.service.client.ts");
/* harmony import */ var _services_equipmentRenting_service_client__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/equipmentRenting.service.client */ "./src/app/services/equipmentRenting.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var AdminComponent = /** @class */ (function () {
    function AdminComponent(userService, providerService, eventService, equipmentService, discussionService, siteService, enrollmentService, reservationService, rentalService, router) {
        this.userService = userService;
        this.providerService = providerService;
        this.eventService = eventService;
        this.equipmentService = equipmentService;
        this.discussionService = discussionService;
        this.siteService = siteService;
        this.enrollmentService = enrollmentService;
        this.reservationService = reservationService;
        this.rentalService = rentalService;
        this.router = router;
        // menuItems = ['User', 'Organizer', 'Attendee', 'Provider', 'SiteManager', 'EquipmentDealer', 'Event', 'CampSite'];
        this.personalUsers = [];
        this.providers = [];
        this.events = [];
        this.equipments = [];
        this.discussions = [];
        this.sites = [];
        this.enrollments = [];
        this.reservations = [];
        this.rentals = [];
        this.listTypeModel = {
            userList: 'userList',
            eventList: 'eventList',
            equipmentList: 'equipmentList',
            discussionList: 'discussionList',
            siteList: 'siteList',
            enrollmentList: 'enrollmentList',
            reservationList: 'reservationList',
            rentalList: 'rentalList'
        };
    }
    AdminComponent.prototype.findAllUsers = function () {
        var _this = this;
        this.userService.findAllUsers()
            .then(function (users) {
            _this.personalUsers = users;
        });
    };
    AdminComponent.prototype.findAllProviders = function () {
        var _this = this;
        this.providerService.findAllProviders()
            .then(function (providers) {
            _this.providers = providers;
        });
    };
    AdminComponent.prototype.findAllEvents = function () {
        var _this = this;
        this.eventService.findAllEvents()
            .then(function (events) {
            _this.events = events;
        });
    };
    AdminComponent.prototype.findAllEquipments = function () {
        var _this = this;
        this.equipmentService.findAllEquipments()
            .then(function (equipments) {
            _this.equipments = equipments;
        });
    };
    AdminComponent.prototype.findAllDiscussions = function () {
        var _this = this;
        this.discussionService.findAllDiscussions()
            .then(function (discussions) { return _this.discussions = discussions; });
    };
    AdminComponent.prototype.findAllSites = function () {
        var _this = this;
        this.siteService.findAllSites()
            .then(function (sites) {
            _this.sites = sites;
        });
    };
    AdminComponent.prototype.findAllEnrollments = function () {
        var _this = this;
        this.enrollmentService.findAllEnrollments()
            .then(function (enrollments) { return _this.enrollments = enrollments; });
    };
    AdminComponent.prototype.findAllReservations = function () {
        var _this = this;
        this.reservationService.findAllReservations()
            .then(function (reservations) { return _this.reservations = reservations; });
    };
    AdminComponent.prototype.findAllRentals = function () {
        var _this = this;
        this.rentalService.findAllRenting()
            .then(function (rentals) { return _this.rentals = rentals; });
    };
    AdminComponent.prototype.openUserList = function () {
        this.listType = this.listTypeModel.userList;
    };
    AdminComponent.prototype.openEventList = function () {
        this.listType = this.listTypeModel.eventList;
    };
    AdminComponent.prototype.openEquipmentList = function () {
        this.listType = this.listTypeModel.equipmentList;
    };
    AdminComponent.prototype.openDiscussionList = function () {
        this.listType = this.listTypeModel.discussionList;
    };
    AdminComponent.prototype.openSiteList = function () {
        this.listType = this.listTypeModel.siteList;
    };
    AdminComponent.prototype.openEnrollmentList = function () {
        this.listType = this.listTypeModel.enrollmentList;
    };
    AdminComponent.prototype.openReservationList = function () {
        this.listType = this.listTypeModel.reservationList;
    };
    AdminComponent.prototype.openRentalList = function () {
        this.listType = this.listTypeModel.rentalList;
    };
    AdminComponent.prototype.receiveMessage = function ($event) {
        this.findAllUsers();
        this.findAllProviders();
        this.findAllEvents();
        this.findAllEquipments();
        this.findAllDiscussions();
        this.findAllSites();
        this.findAllEnrollments();
        this.findAllReservations();
        this.findAllRentals();
    };
    AdminComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.profile()
            .then(function (user) {
            if (user.err || !(user.username === 'admin' && user.password === 'admin')) {
                alert('Non-Admin Users Do Not Have Access to This Page, Redirecting to Homepage.');
                _this.router.navigate(['home']);
            }
        });
        this.findAllUsers();
        this.findAllProviders();
        this.findAllEvents();
        this.findAllEquipments();
        this.findAllDiscussions();
        this.findAllSites();
        this.findAllEnrollments();
        this.findAllReservations();
        this.findAllRentals();
    };
    AdminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__(/*! ./admin.component.html */ "./src/app/admin/admin.component.html"),
            styles: [__webpack_require__(/*! ./admin.component.css */ "./src/app/admin/admin.component.css")]
        }),
        __metadata("design:paramtypes", [_services_user_service_client__WEBPACK_IMPORTED_MODULE_1__["UserServiceClient"],
            _services_provider_service_client__WEBPACK_IMPORTED_MODULE_2__["ProviderServiceClient"],
            _services_event_service_client__WEBPACK_IMPORTED_MODULE_4__["EventServiceClient"],
            _services_equipment_service_client__WEBPACK_IMPORTED_MODULE_5__["EquipmentServiceClient"],
            _services_discussion_service_client__WEBPACK_IMPORTED_MODULE_6__["DiscussionServiceClient"],
            _services_site_service_client__WEBPACK_IMPORTED_MODULE_7__["SiteServiceClient"],
            _services_enrollment_service_client__WEBPACK_IMPORTED_MODULE_8__["EnrollmentServiceClient"],
            _services_reservation_service_client__WEBPACK_IMPORTED_MODULE_9__["ReservationServiceClient"],
            _services_equipmentRenting_service_client__WEBPACK_IMPORTED_MODULE_10__["EquipmentRentingServiceClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<router-outlet></router-outlet>\r\n<app-footer class=\"mt-auto\"></app-footer>\r\n\r\n\r\n"

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
/* harmony import */ var _camping_site_search_camping_site_search_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./camping-site-search/camping-site-search.component */ "./src/app/camping-site-search/camping-site-search.component.ts");
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
/* harmony import */ var _friend_list_friend_list_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./friend-list/friend-list.component */ "./src/app/friend-list/friend-list.component.ts");
/* harmony import */ var _services_event_service_client__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./services/event.service.client */ "./src/app/services/event.service.client.ts");
/* harmony import */ var _services_enrollment_service_client__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./services/enrollment.service.client */ "./src/app/services/enrollment.service.client.ts");
/* harmony import */ var ngx_masonry__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ngx-masonry */ "./node_modules/ngx-masonry/fesm5/ngx-masonry.js");
/* harmony import */ var _event_detail_event_detail_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./event-detail/event-detail.component */ "./src/app/event-detail/event-detail.component.ts");
/* harmony import */ var _event_editor_event_editor_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./event-editor/event-editor.component */ "./src/app/event-editor/event-editor.component.ts");
/* harmony import */ var _create_event_create_event_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./create-event/create-event.component */ "./src/app/create-event/create-event.component.ts");
/* harmony import */ var _event_description_widget_editor_event_description_widget_editor_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./event-description-widget-editor/event-description-widget-editor.component */ "./src/app/event-description-widget-editor/event-description-widget-editor.component.ts");
/* harmony import */ var angular_sortablejs__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! angular-sortablejs */ "./node_modules/angular-sortablejs/dist/index.js");
/* harmony import */ var angular_sortablejs__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(angular_sortablejs__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var _organization_sign_up_organization_sign_up_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./organization-sign-up/organization-sign-up.component */ "./src/app/organization-sign-up/organization-sign-up.component.ts");
/* harmony import */ var _attendee_list_attendee_list_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./attendee-list/attendee-list.component */ "./src/app/attendee-list/attendee-list.component.ts");
/* harmony import */ var _services_provider_service_client__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./services/provider.service.client */ "./src/app/services/provider.service.client.ts");
/* harmony import */ var _communication_services_login_to_navbar_service_client__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./communication-services/login-to-navbar.service.client */ "./src/app/communication-services/login-to-navbar.service.client.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./user-list/user-list.component */ "./src/app/user-list/user-list.component.ts");
/* harmony import */ var _discussion_board_discussion_board_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./discussion-board/discussion-board.component */ "./src/app/discussion-board/discussion-board.component.ts");
/* harmony import */ var _services_discussion_service_client__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./services/discussion.service.client */ "./src/app/services/discussion.service.client.ts");
/* harmony import */ var _discussion_discussion_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./discussion/discussion.component */ "./src/app/discussion/discussion.component.ts");
/* harmony import */ var _profile_for_visitor_profile_for_visitor_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./profile-for-visitor/profile-for-visitor.component */ "./src/app/profile-for-visitor/profile-for-visitor.component.ts");
/* harmony import */ var _events_list_for_profile_events_list_for_profile_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./events-list-for-profile/events-list-for-profile.component */ "./src/app/events-list-for-profile/events-list-for-profile.component.ts");
/* harmony import */ var _event_card_for_profile_event_card_for_profile_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./event-card-for-profile/event-card-for-profile.component */ "./src/app/event-card-for-profile/event-card-for-profile.component.ts");
/* harmony import */ var _discussion_list_for_profile_discussion_list_for_profile_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./discussion-list-for-profile/discussion-list-for-profile.component */ "./src/app/discussion-list-for-profile/discussion-list-for-profile.component.ts");
/* harmony import */ var _site_list_for_profile_site_list_for_profile_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./site-list-for-profile/site-list-for-profile.component */ "./src/app/site-list-for-profile/site-list-for-profile.component.ts");
/* harmony import */ var _create_site_create_site_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./create-site/create-site.component */ "./src/app/create-site/create-site.component.ts");
/* harmony import */ var _create_equipment_create_equipment_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./create-equipment/create-equipment.component */ "./src/app/create-equipment/create-equipment.component.ts");
/* harmony import */ var _equipment_editor_equipment_editor_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./equipment-editor/equipment-editor.component */ "./src/app/equipment-editor/equipment-editor.component.ts");
/* harmony import */ var _services_equipment_service_client__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./services/equipment.service.client */ "./src/app/services/equipment.service.client.ts");
/* harmony import */ var _equipment_content_editor_equipment_content_editor_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./equipment-content-editor/equipment-content-editor.component */ "./src/app/equipment-content-editor/equipment-content-editor.component.ts");
/* harmony import */ var _services_site_service_client__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./services/site.service.client */ "./src/app/services/site.service.client.ts");
/* harmony import */ var _site_editor_site_editor_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./site-editor/site-editor.component */ "./src/app/site-editor/site-editor.component.ts");
/* harmony import */ var _site_detail_site_detail_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./site-detail/site-detail.component */ "./src/app/site-detail/site-detail.component.ts");
/* harmony import */ var _admin_event_list_admin_event_list_component__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./admin-event-list/admin-event-list.component */ "./src/app/admin-event-list/admin-event-list.component.ts");
/* harmony import */ var _admin_equipment_list_admin_equipment_list_component__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./admin-equipment-list/admin-equipment-list.component */ "./src/app/admin-equipment-list/admin-equipment-list.component.ts");
/* harmony import */ var _services_reservation_service_client__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./services/reservation.service.client */ "./src/app/services/reservation.service.client.ts");
/* harmony import */ var _renting_list_for_profile_renting_list_for_profile_component__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./renting-list-for-profile/renting-list-for-profile.component */ "./src/app/renting-list-for-profile/renting-list-for-profile.component.ts");
/* harmony import */ var _admin_discussion_list_admin_discussion_list_component__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./admin-discussion-list/admin-discussion-list.component */ "./src/app/admin-discussion-list/admin-discussion-list.component.ts");
/* harmony import */ var _event_main_list_event_main_list_component__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./event-main-list/event-main-list.component */ "./src/app/event-main-list/event-main-list.component.ts");
/* harmony import */ var _event_main_list_row_event_main_list_row_component__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ./event-main-list-row/event-main-list-row.component */ "./src/app/event-main-list-row/event-main-list-row.component.ts");
/* harmony import */ var _event_main_list_row_card_event_main_list_row_card_component__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ./event-main-list-row-card/event-main-list-row-card.component */ "./src/app/event-main-list-row-card/event-main-list-row-card.component.ts");
/* harmony import */ var _admin_site_list_admin_site_list_component__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ./admin-site-list/admin-site-list.component */ "./src/app/admin-site-list/admin-site-list.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _epuipment_list_for_profile_epuipment_list_for_profile_component__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ./epuipment-list-for-profile/epuipment-list-for-profile.component */ "./src/app/epuipment-list-for-profile/epuipment-list-for-profile.component.ts");
/* harmony import */ var _site_list_site_list_component__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! ./site-list/site-list.component */ "./src/app/site-list/site-list.component.ts");
/* harmony import */ var _site_list_card_site_list_card_component__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! ./site-list-card/site-list-card.component */ "./src/app/site-list-card/site-list-card.component.ts");
/* harmony import */ var _equipment_list_equipment_list_component__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! ./equipment-list/equipment-list.component */ "./src/app/equipment-list/equipment-list.component.ts");
/* harmony import */ var _equipment_list_card_equipment_list_card_component__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! ./equipment-list-card/equipment-list-card.component */ "./src/app/equipment-list-card/equipment-list-card.component.ts");
/* harmony import */ var _services_equipmentRenting_service_client__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! ./services/equipmentRenting.service.client */ "./src/app/services/equipmentRenting.service.client.ts");
/* harmony import */ var _admin_enrollment_list_admin_enrollment_list_component__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(/*! ./admin-enrollment-list/admin-enrollment-list.component */ "./src/app/admin-enrollment-list/admin-enrollment-list.component.ts");
/* harmony import */ var _admin_reservation_list_admin_reservation_list_component__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(/*! ./admin-reservation-list/admin-reservation-list.component */ "./src/app/admin-reservation-list/admin-reservation-list.component.ts");
/* harmony import */ var _admin_rental_list_admin_rental_list_component__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(/*! ./admin-rental-list/admin-rental-list.component */ "./src/app/admin-rental-list/admin-rental-list.component.ts");
/* harmony import */ var _rent_equipment_card_rent_equipment_card_component__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(/*! ./rent-equipment-card/rent-equipment-card.component */ "./src/app/rent-equipment-card/rent-equipment-card.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// import { CampingSiteSearchComponent } from './camping-site-search/camping-site-search.component';




// third part imports







































































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _camping_site_search_camping_site_search_component__WEBPACK_IMPORTED_MODULE_3__["CampingSiteSearchComponent"],
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
                _event_detail_event_detail_component__WEBPACK_IMPORTED_MODULE_27__["EventDetailComponent"],
                _event_editor_event_editor_component__WEBPACK_IMPORTED_MODULE_28__["EventEditorComponent"],
                _create_event_create_event_component__WEBPACK_IMPORTED_MODULE_29__["CreateEventComponent"],
                _event_editor_event_editor_component__WEBPACK_IMPORTED_MODULE_28__["SafePipe"],
                _event_description_widget_editor_event_description_widget_editor_component__WEBPACK_IMPORTED_MODULE_30__["EventDescriptionWidgetEditorComponent"],
                _friend_list_friend_list_component__WEBPACK_IMPORTED_MODULE_23__["FriendListComponent"],
                _organization_sign_up_organization_sign_up_component__WEBPACK_IMPORTED_MODULE_32__["OrganizationSignUpComponent"],
                _attendee_list_attendee_list_component__WEBPACK_IMPORTED_MODULE_33__["AttendeeListComponent"],
                _admin_admin_component__WEBPACK_IMPORTED_MODULE_36__["AdminComponent"],
                _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_37__["UserListComponent"],
                _discussion_board_discussion_board_component__WEBPACK_IMPORTED_MODULE_38__["DiscussionBoardComponent"],
                _discussion_discussion_component__WEBPACK_IMPORTED_MODULE_40__["DiscussionComponent"],
                _profile_for_visitor_profile_for_visitor_component__WEBPACK_IMPORTED_MODULE_41__["ProfileForVisitorComponent"],
                _events_list_for_profile_events_list_for_profile_component__WEBPACK_IMPORTED_MODULE_42__["EventsListForProfileComponent"],
                _event_card_for_profile_event_card_for_profile_component__WEBPACK_IMPORTED_MODULE_43__["EventCardForProfileComponent"],
                _discussion_list_for_profile_discussion_list_for_profile_component__WEBPACK_IMPORTED_MODULE_44__["DiscussionListForProfileComponent"],
                _site_list_for_profile_site_list_for_profile_component__WEBPACK_IMPORTED_MODULE_45__["SiteListForProfileComponent"],
                _create_site_create_site_component__WEBPACK_IMPORTED_MODULE_46__["CreateSiteComponent"],
                _create_equipment_create_equipment_component__WEBPACK_IMPORTED_MODULE_47__["CreateEquipmentComponent"],
                _equipment_editor_equipment_editor_component__WEBPACK_IMPORTED_MODULE_48__["EquipmentEditorComponent"],
                _equipment_content_editor_equipment_content_editor_component__WEBPACK_IMPORTED_MODULE_50__["EquipmentContentEditorComponent"],
                _site_editor_site_editor_component__WEBPACK_IMPORTED_MODULE_52__["SiteEditorComponent"],
                _site_detail_site_detail_component__WEBPACK_IMPORTED_MODULE_53__["SiteDetailComponent"],
                _admin_event_list_admin_event_list_component__WEBPACK_IMPORTED_MODULE_54__["AdminEventListComponent"],
                _admin_equipment_list_admin_equipment_list_component__WEBPACK_IMPORTED_MODULE_55__["AdminEquipmentListComponent"],
                _renting_list_for_profile_renting_list_for_profile_component__WEBPACK_IMPORTED_MODULE_57__["RentingListForProfileComponent"],
                _admin_discussion_list_admin_discussion_list_component__WEBPACK_IMPORTED_MODULE_58__["AdminDiscussionListComponent"],
                _event_main_list_event_main_list_component__WEBPACK_IMPORTED_MODULE_59__["EventMainListComponent"],
                _event_main_list_row_event_main_list_row_component__WEBPACK_IMPORTED_MODULE_60__["EventMainListRowComponent"],
                _event_main_list_row_card_event_main_list_row_card_component__WEBPACK_IMPORTED_MODULE_61__["EventMainListRowCardComponent"],
                _admin_site_list_admin_site_list_component__WEBPACK_IMPORTED_MODULE_62__["AdminSiteListComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_63__["FooterComponent"],
                _epuipment_list_for_profile_epuipment_list_for_profile_component__WEBPACK_IMPORTED_MODULE_64__["EpuipmentListForProfileComponent"],
                _site_list_site_list_component__WEBPACK_IMPORTED_MODULE_65__["SiteListComponent"],
                _site_list_card_site_list_card_component__WEBPACK_IMPORTED_MODULE_66__["SiteListCardComponent"],
                _equipment_list_equipment_list_component__WEBPACK_IMPORTED_MODULE_67__["EquipmentListComponent"],
                _equipment_list_card_equipment_list_card_component__WEBPACK_IMPORTED_MODULE_68__["EquipmentListCardComponent"],
                _admin_enrollment_list_admin_enrollment_list_component__WEBPACK_IMPORTED_MODULE_70__["AdminEnrollmentListComponent"],
                _admin_reservation_list_admin_reservation_list_component__WEBPACK_IMPORTED_MODULE_71__["AdminReservationListComponent"],
                _admin_rental_list_admin_rental_list_component__WEBPACK_IMPORTED_MODULE_72__["AdminRentalListComponent"],
                _rent_equipment_card_rent_equipment_card_component__WEBPACK_IMPORTED_MODULE_73__["RentEquipmentCardComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_rounting__WEBPACK_IMPORTED_MODULE_4__["routing"],
                ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_7__["CarouselModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_8__["ModalModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_8__["AlertModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_8__["BsDatepickerModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_8__["CollapseModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_8__["BsDropdownModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_8__["AccordionModule"].forRoot(),
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
                ngx_masonry__WEBPACK_IMPORTED_MODULE_26__["NgxMasonryModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_8__["CollapseModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_8__["BsDropdownModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_8__["TabsModule"].forRoot(),
                angular_sortablejs__WEBPACK_IMPORTED_MODULE_31__["SortablejsModule"].forRoot({ animation: 150 }),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_8__["BsDatepickerModule"].forRoot()
            ],
            providers: [
                _services_campingSite_service_client__WEBPACK_IMPORTED_MODULE_11__["CampingSiteServiceClient"],
                _communication_services_camping_site_to_detail_service_client__WEBPACK_IMPORTED_MODULE_12__["CampingSiteToDetailServiceClient"],
                _services_user_service_client__WEBPACK_IMPORTED_MODULE_21__["UserServiceClient"],
                _services_map_service_client__WEBPACK_IMPORTED_MODULE_22__["MapServiceClient"],
                _services_event_service_client__WEBPACK_IMPORTED_MODULE_24__["EventServiceClient"],
                _services_enrollment_service_client__WEBPACK_IMPORTED_MODULE_25__["EnrollmentServiceClient"],
                _services_provider_service_client__WEBPACK_IMPORTED_MODULE_34__["ProviderServiceClient"],
                _communication_services_login_to_navbar_service_client__WEBPACK_IMPORTED_MODULE_35__["LoginToNavbarServiceClient"],
                _services_discussion_service_client__WEBPACK_IMPORTED_MODULE_39__["DiscussionServiceClient"],
                _services_equipment_service_client__WEBPACK_IMPORTED_MODULE_49__["EquipmentServiceClient"],
                _services_site_service_client__WEBPACK_IMPORTED_MODULE_51__["SiteServiceClient"],
                _services_reservation_service_client__WEBPACK_IMPORTED_MODULE_56__["ReservationServiceClient"],
                _services_equipmentRenting_service_client__WEBPACK_IMPORTED_MODULE_69__["EquipmentRentingServiceClient"]
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
/* harmony import */ var _camping_site_search_camping_site_search_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./camping-site-search/camping-site-search.component */ "./src/app/camping-site-search/camping-site-search.component.ts");
/* harmony import */ var _camping_site_detail_camping_site_detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./camping-site-detail/camping-site-detail.component */ "./src/app/camping-site-detail/camping-site-detail.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _event_detail_event_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./event-detail/event-detail.component */ "./src/app/event-detail/event-detail.component.ts");
/* harmony import */ var _create_event_create_event_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./create-event/create-event.component */ "./src/app/create-event/create-event.component.ts");
/* harmony import */ var _event_editor_event_editor_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./event-editor/event-editor.component */ "./src/app/event-editor/event-editor.component.ts");
/* harmony import */ var _organization_sign_up_organization_sign_up_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./organization-sign-up/organization-sign-up.component */ "./src/app/organization-sign-up/organization-sign-up.component.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _profile_for_visitor_profile_for_visitor_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./profile-for-visitor/profile-for-visitor.component */ "./src/app/profile-for-visitor/profile-for-visitor.component.ts");
/* harmony import */ var _create_site_create_site_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./create-site/create-site.component */ "./src/app/create-site/create-site.component.ts");
/* harmony import */ var _create_equipment_create_equipment_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./create-equipment/create-equipment.component */ "./src/app/create-equipment/create-equipment.component.ts");
/* harmony import */ var _equipment_editor_equipment_editor_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./equipment-editor/equipment-editor.component */ "./src/app/equipment-editor/equipment-editor.component.ts");
/* harmony import */ var _site_editor_site_editor_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./site-editor/site-editor.component */ "./src/app/site-editor/site-editor.component.ts");
/* harmony import */ var _site_detail_site_detail_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./site-detail/site-detail.component */ "./src/app/site-detail/site-detail.component.ts");
/* harmony import */ var _event_main_list_event_main_list_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./event-main-list/event-main-list.component */ "./src/app/event-main-list/event-main-list.component.ts");
/* harmony import */ var _equipment_list_equipment_list_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./equipment-list/equipment-list.component */ "./src/app/equipment-list/equipment-list.component.ts");

// import {CampingSiteSearchComponent} from './camping-site-search/camping-site-search.component';

















var appRoutes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'profile', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_4__["ProfileComponent"] },
    { path: 'profile/:userId', component: _profile_for_visitor_profile_for_visitor_component__WEBPACK_IMPORTED_MODULE_10__["ProfileForVisitorComponent"] },
    { path: 'admin', component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_9__["AdminComponent"] },
    { path: 'search', component: _camping_site_search_camping_site_search_component__WEBPACK_IMPORTED_MODULE_1__["CampingSiteSearchComponent"] },
    { path: 'camping-site/:contractID/:facilityID/detail', component: _camping_site_detail_camping_site_detail_component__WEBPACK_IMPORTED_MODULE_2__["CampingSiteDetailComponent"] },
    { path: 'detail', component: _camping_site_detail_camping_site_detail_component__WEBPACK_IMPORTED_MODULE_2__["CampingSiteDetailComponent"] },
    { path: 'eventList', component: _event_main_list_event_main_list_component__WEBPACK_IMPORTED_MODULE_16__["EventMainListComponent"] },
    { path: 'eventEditor/:eventId', component: _event_editor_event_editor_component__WEBPACK_IMPORTED_MODULE_7__["EventEditorComponent"] },
    { path: 'siteEditor/:siteId', component: _site_editor_site_editor_component__WEBPACK_IMPORTED_MODULE_14__["SiteEditorComponent"] },
    { path: 'siteDetail/:siteId', component: _site_detail_site_detail_component__WEBPACK_IMPORTED_MODULE_15__["SiteDetailComponent"] },
    { path: 'eventDetail/:eventId', component: _event_detail_event_detail_component__WEBPACK_IMPORTED_MODULE_5__["EventDetailComponent"] },
    { path: 'equipmentEditor', component: _equipment_editor_equipment_editor_component__WEBPACK_IMPORTED_MODULE_13__["EquipmentEditorComponent"] },
    { path: 'equipmentList', component: _equipment_list_equipment_list_component__WEBPACK_IMPORTED_MODULE_17__["EquipmentListComponent"] },
    { path: 'createEvent', component: _create_event_create_event_component__WEBPACK_IMPORTED_MODULE_6__["CreateEventComponent"] },
    { path: 'createSite', component: _create_site_create_site_component__WEBPACK_IMPORTED_MODULE_11__["CreateSiteComponent"] },
    { path: 'createEquipment', component: _create_equipment_create_equipment_component__WEBPACK_IMPORTED_MODULE_12__["CreateEquipmentComponent"] },
    { path: 'organization/signUp', component: _organization_sign_up_organization_sign_up_component__WEBPACK_IMPORTED_MODULE_8__["OrganizationSignUpComponent"] },
    // { path: 'test', component: DiscussionBoardComponent},
    { path: '**', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(appRoutes);


/***/ }),

/***/ "./src/app/attendee-list/attendee-list.component.css":
/*!***********************************************************!*\
  !*** ./src/app/attendee-list/attendee-list.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n.card {\r\n\r\n}\r\n\r\n\r\n.avatar-container {\r\n\r\n  display: inline-block;\r\n  width: 50px;\r\n  padding: 0;\r\n}\r\n\r\n\r\n.avatar {\r\n  padding: 0;\r\n  border-radius: 50%;\r\n  background-image: url('https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b6ded683923a678ad03fae323169beb4&auto=format&fit=crop&w=700&q=60');\r\n  width: 100%;\r\n  padding-bottom: 100%;\r\n  background-size: cover;\r\n  background-position: center;\r\n  cursor: pointer;\r\n}\r\n"

/***/ }),

/***/ "./src/app/attendee-list/attendee-list.component.html":
/*!************************************************************!*\
  !*** ./src/app/attendee-list/attendee-list.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <h2>Attendees: </h2>\r\n  <div class=\"row\" *ngIf=\"isDataLoaded\">\r\n    <div class=\"card text-center col-sm-2\" *ngFor=\"let attendee of attendees\">\r\n      <div>\r\n        <div class=\"avatar-container\" *ngIf=\"attendee.profilePhoto\">\r\n          <div class=\"avatar\" [routerLink]=\"['/profile/' + attendee._id]\" [ngStyle]=\"{'background-image': 'url(' + attendee.profilePhoto + ')'}\">\r\n          </div>\r\n        </div>\r\n        <div class=\"text-sm-left text-muted\">\r\n          <span>{{ attendee.username}}</span>\r\n          <!--<span>{{ attendee.firstName}}</span>-->\r\n          <!--<span>{{ attendee.lastName}}</span>-->\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/attendee-list/attendee-list.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/attendee-list/attendee-list.component.ts ***!
  \**********************************************************/
/*! exports provided: AttendeeListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttendeeListComponent", function() { return AttendeeListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/user.service.client */ "./src/app/services/user.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AttendeeListComponent = /** @class */ (function () {
    function AttendeeListComponent(service) {
        this.service = service;
        this.isDataLoaded = false;
    }
    AttendeeListComponent.prototype.getAllAttendees = function () {
        var promises_array = [];
        for (var _i = 0, _a = this.attendeeIds; _i < _a.length; _i++) {
            var id = _a[_i];
            promises_array.push(this.service.findUserById(id));
        }
        return Promise.all(promises_array);
    };
    AttendeeListComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log(this.attendeeIds);
        this.getAllAttendees()
            .then(function (attendees) {
            attendees.forEach(function (attendee) {
                if (!attendee.profilePhoto || attendee.profilePhoto === '') {
                    attendee.profilePhoto = 'https://images.unsplash.com/photo-' +
                        '1495078065017-564723e7e3e7?ixlib=rb-0.3.5&ixid=eyJhcHBfa' +
                        'WQiOjEyMDd9&s=09093dcdf66dbcd2397b9dc19384a899&auto=forma' +
                        't&fit=crop&w=800&q=60';
                }
                console.log(attendee);
            });
            _this.attendees = attendees;
            console.log(_this.attendees);
            _this.isDataLoaded = true;
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], AttendeeListComponent.prototype, "attendeeIds", void 0);
    AttendeeListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-attendee-list',
            template: __webpack_require__(/*! ./attendee-list.component.html */ "./src/app/attendee-list/attendee-list.component.html"),
            styles: [__webpack_require__(/*! ./attendee-list.component.css */ "./src/app/attendee-list/attendee-list.component.css")]
        }),
        __metadata("design:paramtypes", [_services_user_service_client__WEBPACK_IMPORTED_MODULE_1__["UserServiceClient"]])
    ], AttendeeListComponent);
    return AttendeeListComponent;
}());



/***/ }),

/***/ "./src/app/basic-information/basic-information.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/basic-information/basic-information.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".infoFld {\r\n  margin-top: 15px;\r\n}\r\n\r\n#saveBtn {\r\n  margin-top: 10px;\r\n}\r\n\r\n#alertBox {\r\n  margin-top: 10px;\r\n}\r\n\r\n.accountType {\r\n  margin-left: 15px;\r\n  margin-top: 5px;\r\n}\r\n\r\n.logoutLink {\r\n  margin-left: 20px;\r\n  font-size: 15px;\r\n}\r\n\r\n#deleteBtn {\r\n  margin-left: 80px;\r\n}\r\n\r\n#confirmDelete {\r\n  margin-right: 30px;\r\n}\r\n\r\n#adminBtn {\r\n  margin-left: 20px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/basic-information/basic-information.component.html":
/*!********************************************************************!*\
  !*** ./src/app/basic-information/basic-information.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let alert of alerts\" id=\"alertBox\">\r\n  <alert [type]=\"alert.type\" [dismissOnTimeout]=\"alert.timeout\" (onClosed)=\"onClosed(alert)\">{{ alert.msg }}</alert>\r\n</div>\r\n<h3 *ngIf=\"user.role !== 'SiteManager' && user.role !== 'EquipmentDealer'\" class=\"accountType\">\r\n  Personal Account\r\n</h3>\r\n<h3 *ngIf=\"user.role === 'SiteManager' || user.role === 'EquipmentDealer'\" class=\"accountType\">\r\n  Organization Account\r\n</h3>\r\n<hr class=\"my-3\">\r\n<div>\r\n  <div class=\"input-group-append infoFld\">\r\n    <label for=\"username\" class=\"col-sm-2 col-form-label\">Username</label>\r\n    <!--<div class=\"col-sm-10\">-->\r\n    <!--<li class=\"list-group-item\" id = 'username'>{{user.username}}</li>-->\r\n    <!--</div>-->\r\n    <input [(ngModel)]=\"user.username\"\r\n           placeholder=\"username\"\r\n           class=\"form-control\"\r\n           id=\"username\"\r\n           readonly/>\r\n  </div>\r\n\r\n  <div *ngIf=\"user.role === 'SiteManager' || user.role === 'EquipmentDealer'\" class=\"input-group-append infoFld\">\r\n    <label for=\"organizationName\" class=\"col-sm-2 col-form-label\">Organization Name</label>\r\n    <input [(ngModel)]=\"provider.organizationName\"\r\n           placeholder=\"Organization Name\"\r\n           id=\"organizationName\"\r\n           class=\"form-control\"/>\r\n  </div>\r\n\r\n  <div *ngIf=\"user.role === 'SiteManager' || user.role === 'EquipmentDealer'\" class=\"input-group-append infoFld\">\r\n    <label for=\"organizationAddress\" class=\"col-sm-2 col-form-label\">Organization Address</label>\r\n    <input [(ngModel)]=\"provider.organizationAddress\"\r\n           placeholder=\"Organization Address\"\r\n           id=\"organizationAddress\"\r\n           class=\"form-control\"/>\r\n  </div>\r\n\r\n  <div *ngIf=\"user.role !== 'SiteManager' && user.role !== 'EquipmentDealer'\" class=\"input-group-append infoFld\">\r\n    <label for=\"firstName\" class=\"col-sm-2 col-form-label\">First Name</label>\r\n    <input [(ngModel)]=\"user.firstName\"\r\n           placeholder=\"first name\"\r\n           id=\"firstName\"\r\n           class=\"form-control\"/>\r\n  </div>\r\n\r\n  <div *ngIf=\"user.role !== 'SiteManager' && user.role !== 'EquipmentDealer'\" class=\"input-group-append infoFld\">\r\n    <label for=\"lastName\" class=\"col-sm-2 col-form-label\">Last Name</label>\r\n    <input [(ngModel)]=\"user.lastName\"\r\n           placeholder=\"lastName\"\r\n           id=\"lastName\"\r\n           class=\"form-control\"/>\r\n  </div>\r\n\r\n  <div *ngIf=\"user.role !== 'SiteManager' && user.role !== 'EquipmentDealer'\" class=\"input-group-append infoFld\">\r\n    <label for=\"profilePhoto\" class=\"col-sm-2 col-form-label\">Photo Url</label>\r\n    <input [(ngModel)]=\"user.profilePhoto\"\r\n           placeholder=\"profile photo url\"\r\n           id=\"profilePhoto\"\r\n           class=\"form-control\"/>\r\n  </div>\r\n\r\n  <div *ngIf=\"user.role === 'SiteManager' || user.role === 'EquipmentDealer'\" class=\"input-group-append infoFld\">\r\n    <label for=\"profilePhoto2\" class=\"col-sm-2 col-form-label\">Photo Url</label>\r\n    <input [(ngModel)]=\"provider.profilePhoto\"\r\n           placeholder=\"profile photo url\"\r\n           id=\"profilePhoto2\"\r\n           class=\"form-control\"/>\r\n  </div>\r\n\r\n  <div *ngIf=\"user.role !== 'SiteManager' && user.role !== 'EquipmentDealer'\" class=\"input-group-append infoFld\">\r\n    <label for=\"dob\" class=\"col-sm-2 col-form-label\">Date of Birth</label>\r\n    <input type=\"text\"\r\n           [(ngModel)]=\"user.dateOfBirth\"\r\n           placeholder=\"Date of Birth\"\r\n           class=\"form-control\"\r\n           id=\"dob\"\r\n           [bsConfig]=\"{ dateInputFormat: 'YYYY-MM-DD' }\"\r\n           bsDatepicker>\r\n  </div>\r\n\r\n  <div  *ngIf=\"user.role !== 'SiteManager' && user.role !== 'EquipmentDealer'\" class=\"input-group-append infoFld\">\r\n    <label for=\"phone\" class=\"col-sm-2 col-form-label\">Phone</label>\r\n    <input [(ngModel)]=\"user.phoneNumber\"\r\n           placeholder=\"phone\"\r\n           id=\"phone\"\r\n           class=\"form-control\"/>\r\n  </div>\r\n\r\n  <div  *ngIf=\"user.role === 'SiteManager' || user.role === 'EquipmentDealer'\" class=\"input-group-append infoFld\">\r\n    <label for=\"phone2\" class=\"col-sm-2 col-form-label\">Phone</label>\r\n    <input [(ngModel)]=\"provider.phoneNumber\"\r\n           placeholder=\"phone\"\r\n           id=\"phone2\"\r\n           class=\"form-control\"/>\r\n  </div>\r\n\r\n  <div  *ngIf=\"user.role !== 'SiteManager' && user.role !== 'EquipmentDealer'\" class=\"input-group-append infoFld\">\r\n    <label for=\"email\" class=\"col-sm-2 col-form-label\">Email</label>\r\n    <input [(ngModel)]=\"user.email\"\r\n           placeholder=\"email\"\r\n           id=\"email\"\r\n           class=\"form-control\"/>\r\n  </div>\r\n\r\n  <div *ngIf=\"user.role === 'SiteManager' || user.role === 'EquipmentDealer'\" class=\"input-group-append infoFld\">\r\n    <label for=\"email\" class=\"col-sm-2 col-form-label\">Email</label>\r\n    <input [(ngModel)]=\"provider.email\"\r\n           placeholder=\"email2\"\r\n           id=\"email2\"\r\n           class=\"form-control\"/>\r\n  </div>\r\n\r\n\r\n  <div *ngIf=\"user.role === 'SiteManager' || user.role === 'EquipmentDealer'\" class=\"input-group-append infoFld\">\r\n    <label for=\"serviceType\" class=\"col-sm-2 col-form-label\">Service Type</label>\r\n    <input [(ngModel)]=\"provider.role\"\r\n           placeholder=\"Service Type\"\r\n           id=\"serviceType\"\r\n           readonly\r\n           class=\"form-control\"/>\r\n  </div>\r\n\r\n  <div *ngIf=\"user.role !== 'SiteManager' && user.role !== 'EquipmentDealer'\" class=\"input-group-append infoFld\">\r\n    <label for=\"address\" class=\"col-sm-2 col-form-label\">Address</label>\r\n    <input [(ngModel)]=\"user.address\"\r\n           placeholder=\"address\"\r\n           id=\"address\"\r\n           class=\"form-control\"/>\r\n  </div>\r\n\r\n  <hr class=\"my-4\">\r\n  <div class=\"form-group row\" id=\"saveBtn\">\r\n    <div class=\"col-sm-10\">\r\n      <button (click)=\"update()\" class=\"btn btn-primary\">Save</button>\r\n      <button (click)=\"openModal(deleteConfirm)\" id=\"deleteBtn\" class=\"btn btn-danger\">Delete Account</button>\r\n      <button *ngIf=\"user.username === 'admin' && user.password === 'admin'\" id=\"adminBtn\" routerLink=\"/admin\"\r\n              class=\"btn btn-dark\">Admin\r\n      </button>\r\n    </div>\r\n  </div>\r\n\r\n  <ng-template #deleteConfirm>\r\n    <div class=\"modal-body text-center\">\r\n      <p>Are you sure you want to <strong>DELETE</strong> this account?</p>\r\n      <button id=\"confirmDelete\" type=\"button\" class=\"btn btn-danger\" (click)=\"delete(user._id)\">Delete</button>\r\n      <button type=\"button\" class=\"btn btn-default\" (click)=\"modalRef.hide();\">Cancel</button>\r\n    </div>\r\n  </ng-template>\r\n</div>\r\n"

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
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var _models_provider_model_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/provider.model.client */ "./src/app/models/provider.model.client.ts");
/* harmony import */ var _services_provider_service_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/provider.service.client */ "./src/app/services/provider.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _communication_services_login_to_navbar_service_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../communication-services/login-to-navbar.service.client */ "./src/app/communication-services/login-to-navbar.service.client.ts");
/* harmony import */ var _services_event_service_client__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/event.service.client */ "./src/app/services/event.service.client.ts");
/* harmony import */ var _services_enrollment_service_client__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/enrollment.service.client */ "./src/app/services/enrollment.service.client.ts");
/* harmony import */ var _services_site_service_client__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/site.service.client */ "./src/app/services/site.service.client.ts");
/* harmony import */ var _services_equipmentRenting_service_client__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../services/equipmentRenting.service.client */ "./src/app/services/equipmentRenting.service.client.ts");
/* harmony import */ var _services_equipment_service_client__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../services/equipment.service.client */ "./src/app/services/equipment.service.client.ts");
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
    function BasicInformationComponent(userService, providerService, enrollmentService, eventService, router, siteService, equipmentRentingService, equipmentService, data, modalService) {
        this.userService = userService;
        this.providerService = providerService;
        this.enrollmentService = enrollmentService;
        this.eventService = eventService;
        this.router = router;
        this.siteService = siteService;
        this.equipmentRentingService = equipmentRentingService;
        this.equipmentService = equipmentService;
        this.data = data;
        this.modalService = modalService;
        this.user = new _models_user_model_client__WEBPACK_IMPORTED_MODULE_2__["User"]();
        this.provider = new _models_provider_model_client__WEBPACK_IMPORTED_MODULE_4__["Provider"]();
        this.alerts = [];
        this.messageEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    BasicInformationComponent.prototype.sendMessage = function () {
        this.messageEvent.emit(this.message);
    };
    BasicInformationComponent.prototype.update = function () {
        var _this = this;
        console.log(this.user);
        if (this.user.role !== 'SiteManager' && this.user.role !== 'EquipmentDealer') {
            this.userService
                .update(this.user)
                .then(function (response) {
                _this.message = response;
                _this.sendMessage();
                _this.alerts.push({
                    type: 'success',
                    msg: "Profile updated successfully.",
                    timeout: 5000
                });
            });
        }
        else if (this.user.role === 'SiteManager' || this.user.role === 'EquipmentDealer') {
            this.providerService
                .update(this.provider)
                .then(function (response) {
                _this.message = response;
                _this.sendMessage();
                _this.alerts.push({
                    type: 'success',
                    msg: "Profile updated successfully.",
                    timeout: 5000
                });
            });
        }
    };
    BasicInformationComponent.prototype.onClosed = function (dismissedAlert) {
        this.alerts = this.alerts.filter(function (alert) { return alert !== dismissedAlert; });
    };
    BasicInformationComponent.prototype.delete = function (userId) {
        var _this = this;
        console.log('delete user');
        this.userService.profile()
            .then(function (user) {
            if (!user.error) {
                console.log(user);
                // if (confirm('Do you really want to delete this user profile?')) {
                if (_this.user.role !== 'SiteManager' && _this.user.role !== 'EquipmentDealer') {
                    _this.userService.checkDelete(_this.user._id)
                        .then(function (res) {
                        console.log(res);
                        if (res.ok === true) {
                            return _this.eventService.findEventsForOrganizer(_this.user._id)
                                .then(function (events) {
                                console.log(events);
                                var organizedEventPromises = [];
                                for (var _i = 0, events_1 = events; _i < events_1.length; _i++) {
                                    var e = events_1[_i];
                                    organizedEventPromises.push(_this.eventService.deleteEvent(e._id));
                                }
                                return Promise.all(organizedEventPromises);
                            })
                                .then(function () {
                                return _this.enrollmentService.findEnrollmentsForAttendee(_this.user._id);
                            })
                                .then(function (enrollments) {
                                console.log(enrollments);
                                var enrollmentsPromises = [];
                                for (var _i = 0, enrollments_1 = enrollments; _i < enrollments_1.length; _i++) {
                                    var enrollment = enrollments_1[_i];
                                    console.log(enrollment);
                                    var e = { attendee: enrollment.attendee,
                                        event: enrollment.event._id };
                                    enrollmentsPromises.push(_this.enrollmentService.unenrollAttendeeInEvent(e));
                                }
                                return Promise.all(enrollmentsPromises);
                            })
                                .then(function () {
                                return _this.userService.deleteUserById(_this.user._id);
                            })
                                .then(function () {
                                _this.modalRef.hide();
                                _this.logout();
                            });
                        }
                        else {
                            alert('you can not delete account before return all equipments and cancel site reservation, please contact provider.');
                        }
                    });
                }
                else if (_this.user.role === 'SiteManager' || _this.user.role === 'EquipmentDealer') {
                    if (_this.user.role === 'SiteManager') {
                        _this.siteService
                            .findSitesForProviderWithInfo(userId)
                            .then(function (sites) {
                            var sitesPromiseArray = [];
                            for (var _i = 0, sites_1 = sites; _i < sites_1.length; _i++) {
                                var site = sites_1[_i];
                                sitesPromiseArray.push(_this.siteService.deleteSite(site._id));
                            }
                            return Promise.all(sitesPromiseArray);
                        }).then(function () { return _this.providerService
                            .deleteProviderById(userId); })
                            .then(function (res) { return console.log(res); });
                    }
                    else {
                        _this.equipmentService
                            .findEquipmentsForProvider(userId)
                            .then(function (equipments) {
                            var equipPromiseArray = [];
                            for (var _i = 0, equipments_1 = equipments; _i < equipments_1.length; _i++) {
                                var equip = equipments_1[_i];
                                equipPromiseArray.push(_this.equipmentService.deleteEquipment(equip._id));
                            }
                            return Promise.all(equipPromiseArray);
                        }).then(function () {
                            _this.providerService
                                .deleteProviderById(userId)
                                .then(function () {
                                _this.logout();
                                _this.modalRef.hide();
                            });
                        });
                    }
                }
            }
            else {
                alert('please login');
            }
            _this.modalRef.hide();
        });
    };
    BasicInformationComponent.prototype.logout = function () {
        var _this = this;
        this.userService
            .logout()
            .then(function () {
            _this.sendLogoutMessage();
            _this.router.navigate(['home']);
        });
    };
    BasicInformationComponent.prototype.sendLogoutMessage = function () {
        this.data.changeMessage('logout');
    };
    BasicInformationComponent.prototype.openModal = function (template) {
        this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
    };
    BasicInformationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data.currentMessage.subscribe(function (message) { return _this.logoutMessage = message; });
        this.userService
            .profile()
            .then(function (user) { return _this.user = user; });
        this.providerService
            .profile()
            .then(function (provider) { return _this.provider = provider; });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], BasicInformationComponent.prototype, "messageEvent", void 0);
    BasicInformationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-basic-information',
            template: __webpack_require__(/*! ./basic-information.component.html */ "./src/app/basic-information/basic-information.component.html"),
            styles: [__webpack_require__(/*! ./basic-information.component.css */ "./src/app/basic-information/basic-information.component.css")]
        }),
        __metadata("design:paramtypes", [_services_user_service_client__WEBPACK_IMPORTED_MODULE_1__["UserServiceClient"],
            _services_provider_service_client__WEBPACK_IMPORTED_MODULE_5__["ProviderServiceClient"],
            _services_enrollment_service_client__WEBPACK_IMPORTED_MODULE_9__["EnrollmentServiceClient"],
            _services_event_service_client__WEBPACK_IMPORTED_MODULE_8__["EventServiceClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _services_site_service_client__WEBPACK_IMPORTED_MODULE_10__["SiteServiceClient"],
            _services_equipmentRenting_service_client__WEBPACK_IMPORTED_MODULE_11__["EquipmentRentingServiceClient"],
            _services_equipment_service_client__WEBPACK_IMPORTED_MODULE_12__["EquipmentServiceClient"],
            _communication_services_login_to_navbar_service_client__WEBPACK_IMPORTED_MODULE_7__["LoginToNavbarServiceClient"],
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__["BsModalService"]])
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

module.exports = "#pageArea {\r\n  margin-top: 10px;\r\n}\r\n\r\n#carousel {\r\n  /*width: 35%;*/\r\n  /*height: 35%;*/\r\n  padding-left: 150px;\r\n  padding-right: 150px;\r\n}\r\n\r\n#tag {\r\n  font-size: 15px;\r\n  margin-left: 5px;\r\n}\r\n\r\n#amenity_list {\r\n  margin-left: 35px;\r\n}\r\n\r\n.amenity_item {\r\n  margin-right: 8px;\r\n}\r\n\r\n#learnMore {\r\n  margin-top: 20px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/camping-site-detail/camping-site-detail.component.html":
/*!************************************************************************!*\
  !*** ./src/app/camping-site-detail/camping-site-detail.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"isDataAvailable\" class=\"container-fluid\">\r\n\r\n  <div id=\"pageArea\" class=\"jumbotron\">\r\n    <h1 id=\"cground_name\" class=\"display-4\">\r\n      {{campingSite.facilityName}}\r\n      <span id=\"tag\" class=\"badge badge-secondary\">{{campingSiteFromCommunication._attributes.contractType}}</span>\r\n    </h1>\r\n    <p id=\"cground_address\" class=\"lead\">\r\n      {{finalAddress}}\r\n    </p>\r\n    <hr class=\"my-4\">\r\n    <p id=\"cground_description\">{{campingSite.detailDescription.description}}</p>\r\n    <div id=\"carousel\">\r\n      <carousel>\r\n        <slide *ngFor=\"let photo of campingSite.photo\">\r\n          <img src={{photo._attributes.realUrl}} alt=\"first slide\" style=\"display: block; width: 100%;\">\r\n          <div class=\"carousel-caption d-none d-md-block\">\r\n            <!--<h3>First slide label</h3>-->\r\n            <!--<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>-->\r\n          </div>\r\n        </slide>\r\n        <!--<slide>-->\r\n          <!--<img src=\"../../assets/images/backGround_image_2.jpg\" alt=\"second slide\" style=\"display: block; width: 100%;\">-->\r\n          <!--<div class=\"carousel-caption d-none d-md-block\">-->\r\n            <!--<h3>Second slide label</h3>-->\r\n            <!--<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>-->\r\n          <!--</div>-->\r\n        <!--</slide>-->\r\n        <!--<slide>-->\r\n          <!--<img src=\"../../assets/images/backGround_image_3.jpg\" alt=\"third slide\" style=\"display: block; width: 100%;\">-->\r\n          <!--<div class=\"carousel-caption d-none d-md-block\">-->\r\n            <!--<h3>Third slide label</h3>-->\r\n            <!--<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>-->\r\n          <!--</div>-->\r\n        <!--</slide>-->\r\n      </carousel>\r\n    </div>\r\n    <hr class=\"my-4\">\r\n    <h5>Amenities :</h5>\r\n    <div id=\"amenity_list\">\r\n      <span *ngFor=\"let amenity of campingSite.amenity\" class=\"badge badge-secondary amenity_item\">{{amenity._attributes.name}}</span>\r\n    </div>\r\n    <hr class=\"my-4\">\r\n    <!--<div class=\"container-fluid\">-->\r\n      <!--<h5>Weather Forecast</h5>-->\r\n      <!--<p>Weather info will appear here.</p>-->\r\n    <!--</div>-->\r\n    <!--<hr class=\"my-4\">-->\r\n    <p id=\"cground_contact\" class=\"lead\">Contact info : </p>\r\n      <li *ngFor=\"let contactItem of campingSite.contact\">\r\n        {{contactItem._attributes.name + ' : ' + contactItem._attributes.number}}\r\n      </li>\r\n    <a id=\"learnMore\" class=\"btn btn-primary btn-lg\" href=\"#\" role=\"button\">Learn more</a>\r\n  </div>\r\n\r\n\r\n</div>\r\n\r\n\r\n\r\n\r\n"

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

module.exports = ".card {\r\n  margin-bottom: 15px;\r\n}\r\n\r\n#title {\r\n  margin-top: 20px;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.card {\r\n  background-color: gainsboro;\r\n}\r\n"

/***/ }),

/***/ "./src/app/camping-site-grid/camping-site-grid.component.html":
/*!********************************************************************!*\
  !*** ./src/app/camping-site-grid/camping-site-grid.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<h4 *ngIf=\"campingSitesArray.length > 0\" id=\"title\">We found {{campingSitesArray.length}} results for you :</h4>\r\n<hr *ngIf=\"campingSitesArray.length > 0\">\r\n<div class=\"row\">\r\n  <div *ngFor=\"let site of campingSitesArray\" class=\"col-sm-3\">\r\n    <div class=\"card\">\r\n      <div class=\"card-body\">\r\n        <h5 class=\"card-title\">{{site._attributes.facilityName}}</h5>\r\n        <a\r\n          (click)=\"selectCampingSite(site)\"\r\n          routerLink=\"/camping-site/{{site._attributes.contractID}}/{{site._attributes.facilityID}}/detail\">\r\n          View Details</a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

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

/***/ "./src/app/camping-site-search/camping-site-search.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/camping-site-search/camping-site-search.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\r\n  width: 100%;\r\n  height: 100%;\r\n  padding: 0;\r\n  margin: 0;\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n}\r\n\r\n.homePage {\r\n  padding: 0;\r\n  margin: 0;\r\n  height: 100%;\r\n  width: 100%;\r\n  position: fixed;\r\n  background-size: cover;\r\n  background-image: url('background-img.jpeg');\r\n}\r\n\r\n.container {\r\n}\r\n\r\n.main-background {\r\n  background-image: url(https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c0b66b816b4653b3b0e02af008c82403&auto=format&fit=crop&w=2100&q=80);\r\n  background-size: cover;\r\n  background-position: center;\r\n  width: 100%;\r\n  height: 550px;\r\n\r\n}\r\n\r\n#main-button {\r\n  margin-top: 25px;\r\n  box-shadow: 0 16px 24px 2px rgba(0, 0, 0, .8),\r\n  0 6px 30px 5px rgba(0, 0, 0, .8),\r\n  0 8px 10px -5px rgba(0, 0, 0, .9);\r\n  background-color: white;\r\n  opacity: 0.9;\r\n}\r\n\r\n#main-text {\r\n  color: white;\r\n  text-align: center;\r\n  padding-top: 200px;\r\n  text-shadow: 0 8px 8px rgba(0,0,0,0.9),\r\n  0 8px 13px rgba(0,0,0,0.8),\r\n  0 8px 23px rgba(0,0,0,0.8);\r\n}\r\n\r\n:host /deep/ .tab {\r\n\r\n}\r\n"

/***/ }),

/***/ "./src/app/camping-site-search/camping-site-search.component.html":
/*!************************************************************************!*\
  !*** ./src/app/camping-site-search/camping-site-search.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-background\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-12\">\r\n        <div id=\"main-text\">\r\n          <h2>Search More Camping Sites</h2>\r\n\r\n          <app-search-bar-campground (searchPressed)=\"updateCampgrounds($event)\"></app-search-bar-campground>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<div class=\"container\">\r\n\r\n  <tabset [justified]=\"true\">\r\n     <tab heading=\"Featured Camping Sites For You\"\r\n         class=\"tab\">\r\n      <app-site-list></app-site-list>\r\n    </tab>\r\n\r\n    <tab heading=\"Search Result\"\r\n         [active]=\"active\"\r\n         [customClass]=\"\">\r\n      <app-camping-site-grid [campingSites]=\"campingSites\"></app-camping-site-grid>\r\n    </tab>\r\n\r\n  </tabset>\r\n\r\n\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/camping-site-search/camping-site-search.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/camping-site-search/camping-site-search.component.ts ***!
  \**********************************************************************/
/*! exports provided: CampingSiteSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CampingSiteSearchComponent", function() { return CampingSiteSearchComponent; });
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

var CampingSiteSearchComponent = /** @class */ (function () {
    function CampingSiteSearchComponent() {
        this.active = false;
        this.campingSites = [];
    }
    CampingSiteSearchComponent.prototype.ngOnInit = function () {
    };
    CampingSiteSearchComponent.prototype.updateCampgrounds = function (e) {
        this.campingSites = e.campingSites;
        this.active = true;
    };
    CampingSiteSearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home-page',
            template: __webpack_require__(/*! ./camping-site-search.component.html */ "./src/app/camping-site-search/camping-site-search.component.html"),
            styles: [__webpack_require__(/*! ./camping-site-search.component.css */ "./src/app/camping-site-search/camping-site-search.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CampingSiteSearchComponent);
    return CampingSiteSearchComponent;
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

/***/ "./src/app/communication-services/login-to-navbar.service.client.ts":
/*!**************************************************************************!*\
  !*** ./src/app/communication-services/login-to-navbar.service.client.ts ***!
  \**************************************************************************/
/*! exports provided: LoginToNavbarServiceClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginToNavbarServiceClient", function() { return LoginToNavbarServiceClient; });
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


var LoginToNavbarServiceClient = /** @class */ (function () {
    function LoginToNavbarServiceClient() {
        this.messageSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('default message');
        this.currentMessage = this.messageSource.asObservable();
    }
    LoginToNavbarServiceClient.prototype.changeMessage = function (message) {
        this.messageSource.next(message);
    };
    LoginToNavbarServiceClient = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], LoginToNavbarServiceClient);
    return LoginToNavbarServiceClient;
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

/***/ "./src/app/create-equipment/create-equipment.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/create-equipment/create-equipment.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\r\n  margin-top: 80px;\r\n}\r\n\r\n/*#amenity_list {*/\r\n\r\n/*margin-left: 35px;*/\r\n\r\n/*}*/\r\n\r\n.amenity_item {\r\n  margin-right: 8px;\r\n}\r\n\r\n.badge {\r\n  cursor: pointer;\r\n  margin-right: 8px;\r\n}\r\n\r\n#collapseBasic2 {\r\n  margin-bottom: 30px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/create-equipment/create-equipment.component.html":
/*!******************************************************************!*\
  !*** ./src/app/create-equipment/create-equipment.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"card\">\r\n    <div class=\"card-body\">\r\n      <h6 class=\"card-subtitle mb-2 text-muted\">step 1</h6>\r\n      <h5 class=\"card-title\">What is the name of your Equipment?</h5>\r\n      <input\r\n        [(ngModel)]=\"title\"\r\n        class=\"form-control\"\r\n        placeholder=\"Type your equiment name\">\r\n      <hr>\r\n      <button type=\"button\" class=\"btn btn-danger\" (click)=\"toggleCollapse1()\"\r\n              [attr.aria-expanded]=\"!isCollapsed1\" aria-controls=\"collapseBasic\">Next\r\n      </button>\r\n\r\n    </div>\r\n  </div>\r\n\r\n\r\n  <div  id=\"collapseBasic\" [collapse]=\"isCollapsed1\">\r\n    <hr>\r\n    <div class=\"card\">\r\n      <div class=\"card-body\">\r\n        <h6 class=\"card-subtitle mb-2 text-muted\">step 2</h6>\r\n        <h5 class=\"card-title\">What's your equipment featured for?</h5>\r\n\r\n        <span *ngFor=\"let tag of featureTags\" (click)=\"toggleFeatureTag(tag)\" class=\"featureTag badge badge-info\">{{tag}}</span>\r\n        <hr>\r\n        <div id=\"amenity_list\">\r\n          <span *ngFor=\"let tag of tags\" (click)=\"toggleEventTag(tag)\" class=\"badge badge-info amenity_item\">{{tag}}</span>\r\n        </div>\r\n        <div>\r\n          <hr *ngIf=\"tags.length !== 0\">\r\n          <button type=\"button\" class=\"btn btn-danger\" (click)=\"isCollapsed2 = !isCollapsed2\"\r\n                  [attr.aria-expanded]=\"!isCollapsed2\" aria-controls=\"collapseBasic2\">Next\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n  <div id=\"collapseBasic2\" [collapse]=\"isCollapsed2\">\r\n    <hr>\r\n    <div class=\"card\">\r\n      <div class=\"card-body\">\r\n        <h6 class=\"card-subtitle mb-2 text-muted\">step 3</h6>\r\n\r\n        <!--<h5 class=\"card-title\">What will your Equipment name be?</h5>-->\r\n        <!--<input-->\r\n          <!--[(ngModel)]=\"title\"-->\r\n          <!--class=\"form-control\"-->\r\n          <!--placeholder=\"Type your equiment name\">-->\r\n\r\n        <h5 class=\"card-title\">Enter total quantity of your equipment.</h5>\r\n        <input\r\n          [(ngModel)]=\"quantity\"\r\n          class=\"form-control\"\r\n          placeholder=\"Type your equiment quantity\">\r\n\r\n        <hr>\r\n        <h5 class=\"card-title\">Describe who will need this equipment, and details about this equipment.</h5>\r\n        <textarea\r\n          [(ngModel)]=\"paragraph\"\r\n          class=\"form-control\"\r\n          placeholder=\"Description\">\r\n        </textarea>\r\n        <div>\r\n          <hr>\r\n          <button type=\"button\" class=\"btn btn-success\" (click)=\"createEquipment()\"\r\n                  [attr.aria-expanded]=\"!isCollapsed3\" aria-controls=\"collapseBasic3\">Create\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/create-equipment/create-equipment.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/create-equipment/create-equipment.component.ts ***!
  \****************************************************************/
/*! exports provided: CreateEquipmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateEquipmentComponent", function() { return CreateEquipmentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _models_widget_model_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/widget.model.client */ "./src/app/models/widget.model.client.ts");
/* harmony import */ var _models_equipment_model_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/equipment.model.client */ "./src/app/models/equipment.model.client.ts");
/* harmony import */ var _services_equipment_service_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/equipment.service.client */ "./src/app/services/equipment.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CreateEquipmentComponent = /** @class */ (function () {
    function CreateEquipmentComponent(router, service, userService) {
        this.router = router;
        this.service = service;
        this.userService = userService;
        this.isCollapsed1 = true;
        this.isCollapsed2 = true;
        this.isCollapsed3 = true;
        this.tags = [];
        this.featureTags = ['Waterproof', 'HighQuality', 'Dustproof', 'EasySetup', 'SkinProtection', 'LightWeight', 'LongLasting'];
    }
    CreateEquipmentComponent.prototype.toggleFeatureTag = function (tag) {
        this.tags.push(tag);
        var index = this.featureTags.indexOf(tag);
        this.featureTags.splice(index, 1);
    };
    CreateEquipmentComponent.prototype.toggleEventTag = function (tag) {
        this.featureTags.push(tag);
        var index = this.tags.indexOf(tag);
        this.tags.splice(index, 1);
    };
    CreateEquipmentComponent.prototype.toggleCollapse1 = function () {
        if (!this.title || this.title === '') {
            alert('input field can not be empty');
        }
        else {
            this.isCollapsed1 = !this.isCollapsed1;
        }
    };
    CreateEquipmentComponent.prototype.createEquipment = function () {
        var _this = this;
        if (!this.quantity || isNaN(this.quantity) || this.quantity <= 0) {
            alert('invalid number of equipment');
            return;
        }
        var curUser;
        this.userService.profile()
            .then(function (res) { return curUser = res; })
            .then(function () {
            if (curUser.role !== 'EquipmentDealer') {
                alert('must be a provider to do this!');
                _this.router.navigateByUrl('/profile');
                return;
            }
            var newEquipment = new _models_equipment_model_client__WEBPACK_IMPORTED_MODULE_4__["Equipment"]();
            newEquipment.title = _this.title;
            newEquipment.provider = curUser._id;
            newEquipment.quantity = _this.quantity;
            newEquipment.available = _this.quantity;
            newEquipment.tags = _this.tags;
            newEquipment.description = [];
            newEquipment.description.push(new _models_widget_model_client__WEBPACK_IMPORTED_MODULE_3__["Widget"]('paragraph', _this.paragraph));
            // console.log(newEvent);
            _this.service.createEquipment(newEquipment);
        }).then(function () { return _this.router.navigateByUrl('/profile'); });
    };
    CreateEquipmentComponent.prototype.ngOnInit = function () {
    };
    CreateEquipmentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create-equipment',
            template: __webpack_require__(/*! ./create-equipment.component.html */ "./src/app/create-equipment/create-equipment.component.html"),
            styles: [__webpack_require__(/*! ./create-equipment.component.css */ "./src/app/create-equipment/create-equipment.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_equipment_service_client__WEBPACK_IMPORTED_MODULE_5__["EquipmentServiceClient"],
            _services_user_service_client__WEBPACK_IMPORTED_MODULE_1__["UserServiceClient"]])
    ], CreateEquipmentComponent);
    return CreateEquipmentComponent;
}());



/***/ }),

/***/ "./src/app/create-event/create-event.component.css":
/*!*********************************************************!*\
  !*** ./src/app/create-event/create-event.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\r\n  margin-top: 80px;\r\n}\r\n\r\n#amenity_list {\r\n  /*margin-left: 35px;*/\r\n}\r\n\r\n.amenity_item {\r\n  margin-right: 8px;\r\n}\r\n\r\n.nextBtn {\r\n  margin-top: 10px;\r\n}\r\n\r\n.badge {\r\n  margin-right: 8px;\r\n  cursor: pointer;\r\n}\r\n\r\n#titleDiv {\r\n  margin-bottom: 10px;\r\n}\r\n\r\n#timeDiv {\r\n  margin-bottom: 10px;\r\n}\r\n\r\n#createBtn {\r\n  margin-top: 10px;\r\n}\r\n\r\n.dropdown-item {\r\n  cursor: pointer;\r\n}\r\n"

/***/ }),

/***/ "./src/app/create-event/create-event.component.html":
/*!**********************************************************!*\
  !*** ./src/app/create-event/create-event.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"card\">\r\n    <div class=\"card-body\">\r\n      <h6 class=\"card-subtitle mb-2 text-muted\">step 1</h6>\r\n      <h5 class=\"card-title\">What's your new Camping position?</h5>\r\n\r\n      <input\r\n        [(ngModel)]=\"campSite\"\r\n        class=\"form-control\"\r\n        placeholder=\"Type your camping site\">\r\n\r\n      <button type=\"button\" class=\"btn btn-danger nextBtn\" (click)=\"toggleCollapse1()\"\r\n              [attr.aria-expanded]=\"!isCollapsed1\" aria-controls=\"collapseBasic\">Next\r\n      </button>\r\n\r\n    </div>\r\n  </div>\r\n\r\n\r\n  <div  id=\"collapseBasic\" [collapse]=\"isCollapsed1\">\r\n    <hr>\r\n    <div class=\"card\">\r\n      <div class=\"card-body\">\r\n        <h6 class=\"card-subtitle mb-2 text-muted\">step 2</h6>\r\n        <h5 class=\"card-title\">What's your camping event featured for?</h5>\r\n\r\n        <span *ngFor=\"let tag of featureTags\" (click)=\"toggleFeatureTag(tag)\" class=\"featureTag badge badge-info\">{{tag}}</span>\r\n        <hr>\r\n        <div id=\"amenity_list\">\r\n          <span *ngFor=\"let tag of tags\" (click)=\"toggleEventTag(tag)\" class=\"badge badge-info amenity_item\">{{tag}}</span>\r\n        </div>\r\n        <div>\r\n          <hr *ngIf=\"tags.length !== 0\">\r\n          <button type=\"button\" class=\"btn btn-danger\" (click)=\"isCollapsed2 = !isCollapsed2\"\r\n                  [attr.aria-expanded]=\"!isCollapsed2\" aria-controls=\"collapseBasic2\">Next\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n  <div id=\"collapseBasic2\" [collapse]=\"isCollapsed2\">\r\n    <hr>\r\n    <div class=\"card\">\r\n      <div class=\"card-body\">\r\n        <h6 class=\"card-subtitle mb-2 text-muted\">step 3</h6>\r\n        <div id=\"titleDiv\">\r\n          <h5 class=\"card-title\">What will your event name be?</h5>\r\n          <input\r\n            [(ngModel)]=\"title\"\r\n            class=\"form-control\"\r\n            placeholder=\"Event Title\">\r\n        </div>\r\n        <hr>\r\n        <div id=\"timeDiv\">\r\n          <h5 class=\"card-title\"> Choose your event time stamp.</h5>\r\n          <div class=\"input-group-append\">\r\n            <label for=\"startTime\" class=\"col-sm-2 col-form-label\">Event Starts:</label>\r\n            <input type=\"text\"\r\n                   [(ngModel)]=\"eventStart\"\r\n                   placeholder=\"Start Time\"\r\n                   class=\"form-control\"\r\n                   id=\"startTime\"\r\n                   [bsConfig]=\"{ dateInputFormat: 'YYYY-MM-DD' }\"\r\n                   bsDatepicker>\r\n          </div>\r\n          <hr>\r\n          <div class=\"input-group-append\">\r\n            <label for=\"endTime\" class=\"col-sm-2 col-form-label\">Event Ends:</label>\r\n            <input type=\"text\"\r\n                   [(ngModel)]=\"eventEnd\"\r\n                   placeholder=\"End Time\"\r\n                   class=\"form-control\"\r\n                   id=\"endTime\"\r\n                   [bsConfig]=\"{ dateInputFormat: 'YYYY-MM-DD' }\"\r\n                   bsDatepicker>\r\n          </div>\r\n        </div>\r\n        <hr>\r\n        <h5 class=\"card-title\">Select a level for your event.</h5>\r\n        <div class=\"input-group-append wrapDiv levelInput\">\r\n          <label for=\"LevelFld-sit\" class=\"col-sm-2 col-form-label\">Event Level</label>\r\n          <li  id=\"LevelFld-sit\" class=\"list-group-item form-control\">{{level}}</li>\r\n          <div class=\"btn-group\" dropdown>\r\n            <button id=\"button-basic\" dropdownToggle type=\"button\" class=\"btn btn-outline-dark dropdown-toggle\"\r\n                    aria-controls=\"dropdown-basic\">\r\n              Select Level\r\n            </button>\r\n            <ul id=\"dropdown-basic\" *dropdownMenu class=\"dropdown-menu\"\r\n                role=\"menu\" aria-labelledby=\"button-basic\">\r\n              <li role=\"menuitem\"><a (click)=\"level = 'Relax'\" class=\"dropdown-item\">Relax</a></li>\r\n              <li role=\"menuitem\"><a (click)=\"level = 'Training'\" class=\"dropdown-item\">Training</a></li>\r\n              <li role=\"menuitem\"><a (click)=\"level = 'Adventure'\" class=\"dropdown-item\">Adventure</a></li>\r\n            </ul>\r\n          </div>\r\n        </div>\r\n        <hr>\r\n\r\n        <h5 class=\"card-title\">Describe who should join, and what your event will do.</h5>\r\n        <textarea\r\n          [(ngModel)]=\"paragraph\"\r\n          class=\"form-control\"\r\n          placeholder=\"Paragraph text\">\r\n        </textarea>\r\n        <div>\r\n          <button id=\"createBtn\" type=\"button\" class=\"btn btn-danger\" (click)=\"createEvent()\"\r\n                  [attr.aria-expanded]=\"!isCollapsed3\" aria-controls=\"collapseBasic3\">Create\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n"

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
/* harmony import */ var _services_event_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/event.service.client */ "./src/app/services/event.service.client.ts");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _models_EventCard_model_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/EventCard.model.client */ "./src/app/models/EventCard.model.client.ts");
/* harmony import */ var _models_widget_model_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/widget.model.client */ "./src/app/models/widget.model.client.ts");
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
    function CreateEventComponent(router, service, userService) {
        this.router = router;
        this.service = service;
        this.userService = userService;
        this.isCollapsed1 = true;
        this.isCollapsed2 = true;
        this.isCollapsed3 = true;
        this.tags = [];
        this.level = 'Relax';
        this.featureTags = ['Biking', 'Hiking', 'Swimming', 'Fishing', 'Horse riding', 'BBQ'];
    }
    // toggleTag(tag) {
    //   if (this.tags.includes(tag)) {
    //     const index = this.tags.indexOf(tag);
    //       this.tags.splice(index, 1);
    //   } else {
    //     this.tags.push(tag);
    //   }
    // }
    CreateEventComponent.prototype.toggleFeatureTag = function (tag) {
        this.tags.push(tag);
        var index = this.featureTags.indexOf(tag);
        this.featureTags.splice(index, 1);
    };
    CreateEventComponent.prototype.toggleEventTag = function (tag) {
        this.featureTags.push(tag);
        var index = this.tags.indexOf(tag);
        this.tags.splice(index, 1);
    };
    CreateEventComponent.prototype.toggleCollapse1 = function () {
        if (!this.campSite || this.campSite === '') {
            alert('input field can not be empty');
        }
        else {
            this.isCollapsed1 = !this.isCollapsed1;
        }
    };
    CreateEventComponent.prototype.createEvent = function () {
        var _this = this;
        if (!this.title || this.title === '') {
            alert('must have a title');
            return;
        }
        if (!this.eventStart || !this.eventEnd) {
            alert('must have valid time input');
            return;
        }
        var curUser;
        this.userService.profile()
            .then(function (res) { return curUser = res; })
            .then(function () {
            var newEvent = new _models_EventCard_model_client__WEBPACK_IMPORTED_MODULE_4__["EventCard"]();
            newEvent.title = _this.title;
            newEvent.organizer = curUser._id;
            newEvent.tags = _this.tags;
            newEvent.level = _this.level;
            newEvent.startTime = _this.eventStart;
            newEvent.endTime = _this.eventEnd;
            newEvent.description.push(new _models_widget_model_client__WEBPACK_IMPORTED_MODULE_5__["Widget"]('paragraph', _this.paragraph));
            // console.log(newEvent);
            _this.service.createEvent(newEvent);
        }).then(function () { return _this.router.navigateByUrl('/profile'); });
    };
    CreateEventComponent.prototype.ngOnInit = function () {
    };
    CreateEventComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create-event',
            template: __webpack_require__(/*! ./create-event.component.html */ "./src/app/create-event/create-event.component.html"),
            styles: [__webpack_require__(/*! ./create-event.component.css */ "./src/app/create-event/create-event.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_event_service_client__WEBPACK_IMPORTED_MODULE_2__["EventServiceClient"],
            _services_user_service_client__WEBPACK_IMPORTED_MODULE_3__["UserServiceClient"]])
    ], CreateEventComponent);
    return CreateEventComponent;
}());



/***/ }),

/***/ "./src/app/create-site/create-site.component.css":
/*!*******************************************************!*\
  !*** ./src/app/create-site/create-site.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\r\n  margin-top: 80px;\r\n}\r\n\r\n/*#amenity_list {*/\r\n\r\n/*margin-left: 35px;*/\r\n\r\n/*}*/\r\n\r\n.amenity_item {\r\n  margin-right: 8px;\r\n}\r\n\r\n.nextBtn {\r\n  margin-top: 10px;\r\n}\r\n\r\n.badge {\r\n  margin-right: 8px;\r\n  cursor: pointer;\r\n}\r\n\r\n#titleDiv {\r\n  margin-bottom: 10px;\r\n}\r\n\r\n#timeDiv {\r\n  margin-bottom: 10px;\r\n}\r\n\r\n#createBtn {\r\n  margin-top: 10px;\r\n}\r\n\r\n.dropdown-item {\r\n  cursor: pointer;\r\n}\r\n\r\n#descriptionDiv {\r\n  margin-bottom: 30px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/create-site/create-site.component.html":
/*!********************************************************!*\
  !*** ./src/app/create-site/create-site.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"card\">\r\n    <div class=\"card-body\">\r\n      <h6 class=\"card-subtitle mb-2 text-muted\">step 1</h6>\r\n      <h5 class=\"card-title\">Where is your camping site located?</h5>\r\n\r\n      <input\r\n        [(ngModel)]=\"location\"\r\n        class=\"form-control\"\r\n        placeholder=\"Type your camping site location\">\r\n\r\n      <button type=\"button\" class=\"btn btn-danger nextBtn\" (click)=\"toggleCollapse1()\"\r\n              [attr.aria-expanded]=\"!isCollapsed1\" aria-controls=\"collapseBasic\">Next\r\n      </button>\r\n\r\n    </div>\r\n  </div>\r\n\r\n\r\n  <div  id=\"collapseBasic\" [collapse]=\"isCollapsed1\">\r\n    <hr>\r\n    <div class=\"card\">\r\n      <div class=\"card-body\">\r\n        <h6 class=\"card-subtitle mb-2 text-muted\">step 2</h6>\r\n        <h5 class=\"card-title\">What's your camping site featured for?</h5>\r\n\r\n        <span *ngFor=\"let tag of featureTags\" (click)=\"toggleFeatureTag(tag)\" class=\"featureTag badge badge-info\">{{tag}}</span>\r\n        <hr>\r\n        <div id=\"amenity_list\">\r\n          <span *ngFor=\"let tag of tags\" (click)=\"toggleEventTag(tag)\" class=\"badge badge-info amenity_item\">{{tag}}</span>\r\n        </div>\r\n        <div>\r\n          <hr *ngIf=\"tags.length !== 0\">\r\n          <button type=\"button\" class=\"btn btn-danger nextBtn\" (click)=\"isCollapsed2 = !isCollapsed2\"\r\n                  [attr.aria-expanded]=\"!isCollapsed2\" aria-controls=\"collapseBasic2\">Next\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div id=\"collapseBasic2\" [collapse]=\"isCollapsed2\">\r\n    <hr>\r\n    <div class=\"card\" id=\"descriptionDiv\">\r\n      <div class=\"card-body\">\r\n        <h6 class=\"card-subtitle mb-2 text-muted\">step 3</h6>\r\n        <h5 class=\"card-title\">What will your Camping Site name be?</h5>\r\n\r\n        <input\r\n          [(ngModel)]=\"title\"\r\n          class=\"form-control\"\r\n          placeholder=\"Type your site name\">\r\n\r\n        <hr>\r\n        <h5 class=\"card-title\">Pick what time is your site available.</h5>\r\n        <div class=\"row\">\r\n          <div class=\"col-xs-12 col-12 col-md-4 form-group\">\r\n            <input class=\"form-control\" #drp=\"bsDaterangepicker\" bsDaterangepicker [(ngModel)]=\"bsRangeValue\">\r\n          </div>\r\n          <div class=\"col-xs-12 col-12 col-md-3 form-group\">\r\n            <button class=\"btn btn-danger\" (click)=\"drp.toggle()\" [attr.aria-expanded]=\"drp.isOpen\">Date Range Picker</button>\r\n          </div>\r\n        </div>\r\n        <hr>\r\n\r\n          <h5 class=\"card-title\">Describe your camping site.</h5>\r\n          <textarea\r\n            [(ngModel)]=\"paragraph\"\r\n            class=\"form-control\"\r\n            placeholder=\"Description\">\r\n          </textarea>\r\n          <div>\r\n            <button id=\"createBtn\" type=\"button\" class=\"btn btn-success\" (click)=\"createSite()\"\r\n                    [attr.aria-expanded]=\"!isCollapsed3\" aria-controls=\"collapseBasic3\">Create\r\n            </button>\r\n          </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/create-site/create-site.component.ts":
/*!******************************************************!*\
  !*** ./src/app/create-site/create-site.component.ts ***!
  \******************************************************/
/*! exports provided: CreateSiteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateSiteComponent", function() { return CreateSiteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _models_widget_model_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/widget.model.client */ "./src/app/models/widget.model.client.ts");
/* harmony import */ var _models_site_model_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/site.model.client */ "./src/app/models/site.model.client.ts");
/* harmony import */ var _services_site_service_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/site.service.client */ "./src/app/services/site.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CreateSiteComponent = /** @class */ (function () {
    function CreateSiteComponent(router, service, userService) {
        this.router = router;
        this.service = service;
        this.userService = userService;
        this.isCollapsed1 = true;
        this.isCollapsed2 = true;
        this.isCollapsed3 = true;
        this.tags = [];
        this.featureTags = ['Campfire Rings', 'Drinking Water', 'Firewood Vendor', 'Fishing', 'Grills', 'River Access',
            'Swimming', 'Tables', 'Tent Sites', 'Trash Collection', 'Vault Toilets', 'ATM', 'Fuel Available',
            'Grocery Store', 'Payphone', 'Restaurant', 'Picnic Area', 'Boating', 'Group Camping', 'Parking Area',
            'Pet Allowed', 'Trails', 'Wildlife Viewing'];
    }
    // toggleTag(tag) {
    //   if (this.tags.includes(tag)) {
    //     const index = this.tags.indexOf(tag);
    //     this.tags.splice(index, 1);
    //   } else {
    //     this.tags.push(tag);
    //   }
    // }
    CreateSiteComponent.prototype.toggleCollapse1 = function () {
        if (!this.location || this.location === '') {
            alert('input field can not be empty');
        }
        else {
            this.isCollapsed1 = !this.isCollapsed1;
        }
    };
    CreateSiteComponent.prototype.toggleFeatureTag = function (tag) {
        this.tags.push(tag);
        var index = this.featureTags.indexOf(tag);
        this.featureTags.splice(index, 1);
    };
    CreateSiteComponent.prototype.toggleEventTag = function (tag) {
        this.featureTags.push(tag);
        var index = this.tags.indexOf(tag);
        this.tags.splice(index, 1);
    };
    CreateSiteComponent.prototype.createSite = function () {
        var _this = this;
        if (!this.title || this.title === '') {
            alert('must have a title');
            return;
        }
        if (!this.bsRangeValue) {
            alert('must have valid time input');
            return;
        }
        var curUser;
        this.userService.profile()
            .then(function (res) { return curUser = res; })
            .then(function () {
            var newSite = new _models_site_model_client__WEBPACK_IMPORTED_MODULE_4__["Site"]();
            console.log(_this.bsRangeValue);
            newSite.title = _this.title;
            newSite.location = _this.location;
            newSite.provider = curUser._id;
            newSite.tags = _this.tags;
            newSite.description = [];
            newSite.description.push(new _models_widget_model_client__WEBPACK_IMPORTED_MODULE_3__["Widget"]('paragraph', _this.paragraph));
            console.log(newSite);
            return _this.service.createSite(newSite);
        })
            .then(function () { return _this.router.navigateByUrl('/profile'); });
    };
    CreateSiteComponent.prototype.ngOnInit = function () {
    };
    CreateSiteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create-site',
            template: __webpack_require__(/*! ./create-site.component.html */ "./src/app/create-site/create-site.component.html"),
            styles: [__webpack_require__(/*! ./create-site.component.css */ "./src/app/create-site/create-site.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_site_service_client__WEBPACK_IMPORTED_MODULE_5__["SiteServiceClient"],
            _services_user_service_client__WEBPACK_IMPORTED_MODULE_1__["UserServiceClient"]])
    ], CreateSiteComponent);
    return CreateSiteComponent;
}());



/***/ }),

/***/ "./src/app/discussion-board/discussion-board.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/discussion-board/discussion-board.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\r\n  margin: 20px;\r\n  border-radius: 10px;\r\n}\r\n\r\n#postDiv {\r\n  margin: 20px;\r\n}\r\n\r\n#postBtn {\r\n  margin-top: 10px;\r\n  margin-bottom: 30px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/discussion-board/discussion-board.component.html":
/*!******************************************************************!*\
  !*** ./src/app/discussion-board/discussion-board.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div>\r\n  <h2>Discussions({{discussions.length}})</h2>\r\n  <div>\r\n    <div class=\"card bg-light\" *ngFor=\"let discussion of discussions\">\r\n      <app-discussion (messageEvent)=\"receiveMessage($event)\" [discussionToChild]=\"discussion\"></app-discussion>\r\n    </div>\r\n  </div>\r\n  <div id=\"postDiv\">\r\n    <textarea class=\"form-control\" placeholder=\"Start A new discussion\" [(ngModel)] = \"newContent\"></textarea>\r\n    <button id=\"postBtn\" class=\"btn btn-dark float-right\" (click)='postDiscussion()'>Post</button>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/discussion-board/discussion-board.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/discussion-board/discussion-board.component.ts ***!
  \****************************************************************/
/*! exports provided: DiscussionBoardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscussionBoardComponent", function() { return DiscussionBoardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_discussion_service_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/discussion.service.client */ "./src/app/services/discussion.service.client.ts");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user.service.client */ "./src/app/services/user.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DiscussionBoardComponent = /** @class */ (function () {
    function DiscussionBoardComponent(service, userService) {
        this.service = service;
        this.userService = userService;
        this.discussions = [];
    }
    DiscussionBoardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.findAllDiscussions();
        this.userService
            .profile()
            .then(function (res) { return _this.curUser = res; });
    };
    DiscussionBoardComponent.prototype.receiveMessage = function ($event) {
        var _this = this;
        $event.forEach(function (discussion) {
            discussion.postTime = _this.refactorPostTime(discussion.postTime);
            if (discussion.preDiscussion) {
                discussion.preDiscussion.postTime = _this.refactorPostTime(discussion.preDiscussion.postTime);
            }
        });
        this.discussions = $event;
    };
    DiscussionBoardComponent.prototype.refactorPostTime = function (time) {
        // const index = time.indexOf('.');
        // time = time.substring(0, index);
        // const i = time.indexOf('T');
        // const res = time.substring(0, i) + ' ' + time.substring(i + 1, time.length);
        // return res;
        var d = new Date(time);
        return d.toLocaleDateString() + ' ' + d.toLocaleTimeString();
    };
    DiscussionBoardComponent.prototype.findAllDiscussions = function () {
        var _this = this;
        this.service
            .findDiscussionsForEvent(this.eventId)
            .then(function (res) {
            console.log(res);
            res.forEach(function (discussion) {
                discussion.postTime = _this.refactorPostTime(discussion.postTime);
                if (discussion.preDiscussion) {
                    discussion.preDiscussion.postTime = _this.refactorPostTime(discussion.preDiscussion.postTime);
                }
            });
            res.sort(function (a, b) { return a.postTime - b.postTime; });
            _this.discussions = res;
            // console.log(this.discussions);
        });
    };
    DiscussionBoardComponent.prototype.Delete = function () {
        var discussionId = '5b6a8a71927d2da61743158d';
        this.service
            .deleteDiscussion(discussionId)
            .then(function (res) { return console.log(res); });
    };
    DiscussionBoardComponent.prototype.postDiscussion = function () {
        var _this = this;
        if (this.curUser.error) {
            alert('Please log in!');
            return;
        }
        if (this.newContent) {
            var newDiscussion = {
                content: this.newContent,
                postPeople: this.curUser,
                postTime: new Date(),
                event: this.eventId,
                type: 'post'
            };
            this.service
                .postDiscussion(newDiscussion)
                .then(function () { return _this.findAllDiscussions(); });
        }
        else {
            alert('Content can not be empty!');
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DiscussionBoardComponent.prototype, "eventId", void 0);
    DiscussionBoardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-discussion-board',
            template: __webpack_require__(/*! ./discussion-board.component.html */ "./src/app/discussion-board/discussion-board.component.html"),
            styles: [__webpack_require__(/*! ./discussion-board.component.css */ "./src/app/discussion-board/discussion-board.component.css")]
        }),
        __metadata("design:paramtypes", [_services_discussion_service_client__WEBPACK_IMPORTED_MODULE_1__["DiscussionServiceClient"],
            _services_user_service_client__WEBPACK_IMPORTED_MODULE_2__["UserServiceClient"]])
    ], DiscussionBoardComponent);
    return DiscussionBoardComponent;
}());



/***/ }),

/***/ "./src/app/discussion-list-for-profile/discussion-list-for-profile.component.css":
/*!***************************************************************************************!*\
  !*** ./src/app/discussion-list-for-profile/discussion-list-for-profile.component.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\r\n  margin: 20px;\r\n  border-radius: 10px;\r\n}\r\n\r\n#postDiv {\r\n  margin: 20px;\r\n}\r\n\r\n#postBtn {\r\n  margin-top: 10px;\r\n  margin-bottom: 30px;\r\n}\r\n\r\n#replyDiv {\r\n  margin: 10px;\r\n}\r\n\r\n#owner {\r\n  margin: 20px;\r\n}\r\n\r\n#ownerName {\r\n  margin-right: 30px;\r\n}\r\n\r\n#ownerTime {\r\n  color: darkgray;\r\n  margin-top: 5px;\r\n}\r\n\r\n.divider {\r\n  margin-left: 10px;\r\n  margin-right: 10px;\r\n}\r\n\r\n#ownerContent {\r\n  margin: 20px;\r\n}\r\n\r\n#replyBtn {\r\n  margin-right: 10px;\r\n  margin-left: 10px;\r\n}\r\n\r\n#prePosterName {\r\n  margin-right: 30px;\r\n}\r\n\r\n#prePosterTime {\r\n  color: darkgray;\r\n}\r\n\r\n#replyer {\r\n  margin: 20px;\r\n}\r\n\r\n#replyerContent {\r\n  margin: 20px;\r\n}\r\n\r\n#replyerTime {\r\n  color: darkgray;\r\n}\r\n\r\n#replyerName {\r\n  margin-right: 30px;\r\n}\r\n\r\n#deletedReplyer {\r\n  margin: 20px;\r\n}\r\n\r\n#deletedReplyerTime {\r\n  color: darkgray;\r\n}\r\n\r\n#deletedReplyerName {\r\n  margin-right: 30px;\r\n}\r\n\r\n#deletedReplyerContent {\r\n  margin: 20px;\r\n}\r\n\r\n#eventTitle {\r\n  font-size: larger;\r\n}\r\n\r\n#eventTitle2 {\r\n  font-size: larger;\r\n}\r\n"

/***/ }),

/***/ "./src/app/discussion-list-for-profile/discussion-list-for-profile.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/discussion-list-for-profile/discussion-list-for-profile.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Discussions: total ({{discussions.length}})</h1>\r\n<div>\r\n  <div class=\"card bg-light\" *ngFor=\"let discussion of discussions\">\r\n\r\n      <div>\r\n        <div id=\"owner\" class=\"input-group-append\">\r\n          <p id=\"eventTitle\" *ngIf=\"discussion.event\" [routerLink]=\"['/eventDetail/' + discussion.event._id]\">Event Title: {{discussion.event.title}}</p>\r\n          <p id=\"eventTitle2\" *ngIf=\"!discussion.event\">Deleted Event</p>\r\n          <p class=\"badge badge-secondary\" id=\"ownerName\">{{discussion.postPeople.username}}</p>\r\n          <p id=\"ownerTime\"><span class=\"divider\">•</span>{{discussion.postTime}}</p>\r\n        </div>\r\n        <p id=\"ownerContent\">{{discussion.content}}</p>\r\n        <div id=\"replyDiv\" class=\"input-group-append\">\r\n          <button class=\"btn btn-default btn-outline-danger\" (click)=\"delete(discussion._id)\" *ngIf=\"isSame\">Delete</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/discussion-list-for-profile/discussion-list-for-profile.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/discussion-list-for-profile/discussion-list-for-profile.component.ts ***!
  \**************************************************************************************/
/*! exports provided: DiscussionListForProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscussionListForProfileComponent", function() { return DiscussionListForProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_discussion_service_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/discussion.service.client */ "./src/app/services/discussion.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DiscussionListForProfileComponent = /** @class */ (function () {
    function DiscussionListForProfileComponent(discussionService) {
        this.discussionService = discussionService;
        this.messageEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    DiscussionListForProfileComponent.prototype.ngOnInit = function () {
    };
    DiscussionListForProfileComponent.prototype.delete = function (discussionId) {
        var _this = this;
        this.discussionService
            .deleteDiscussion(discussionId)
            .then(function () {
            _this.discussionService
                .findDiscussionForUser(_this.userId)
                .then(function (discussions) {
                if (discussions.error) {
                    alert(discussions.error);
                    return;
                }
                else {
                    _this.messageEvent.emit(discussions);
                }
            });
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DiscussionListForProfileComponent.prototype, "discussions", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DiscussionListForProfileComponent.prototype, "isSame", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DiscussionListForProfileComponent.prototype, "userId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], DiscussionListForProfileComponent.prototype, "messageEvent", void 0);
    DiscussionListForProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-discussion-list-for-profile',
            template: __webpack_require__(/*! ./discussion-list-for-profile.component.html */ "./src/app/discussion-list-for-profile/discussion-list-for-profile.component.html"),
            styles: [__webpack_require__(/*! ./discussion-list-for-profile.component.css */ "./src/app/discussion-list-for-profile/discussion-list-for-profile.component.css")]
        }),
        __metadata("design:paramtypes", [_services_discussion_service_client__WEBPACK_IMPORTED_MODULE_1__["DiscussionServiceClient"]])
    ], DiscussionListForProfileComponent);
    return DiscussionListForProfileComponent;
}());



/***/ }),

/***/ "./src/app/discussion/discussion.component.css":
/*!*****************************************************!*\
  !*** ./src/app/discussion/discussion.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#replyDiv {\r\n  margin: 10px;\r\n}\r\n\r\n#owner {\r\n  margin: 20px;\r\n}\r\n\r\n#ownerName {\r\n  margin-right: 30px;\r\n}\r\n\r\n#ownerTime {\r\n  color: darkgray;\r\n}\r\n\r\n.divider {\r\n  margin-left: 10px;\r\n  margin-right: 10px;\r\n}\r\n\r\n#ownerContent {\r\n  margin: 20px;\r\n}\r\n\r\n#replyBtn {\r\n  margin-right: 10px;\r\n  margin-left: 10px;\r\n}\r\n\r\n#prePosterName {\r\n  margin-right: 30px;\r\n}\r\n\r\n#prePosterTime {\r\n  color: darkgray;\r\n}\r\n\r\n#replyer {\r\n  margin: 20px;\r\n}\r\n\r\n#replyerContent {\r\n  margin: 20px;\r\n}\r\n\r\n#replyerTime {\r\n  color: darkgray;\r\n}\r\n\r\n#replyerName {\r\n  margin-right: 30px;\r\n}\r\n\r\n#deletedReplyer {\r\n  margin: 20px;\r\n}\r\n\r\n#deletedReplyerTime {\r\n  color: darkgray;\r\n}\r\n\r\n#deletedReplyerName {\r\n  margin-right: 30px;\r\n}\r\n\r\n#deletedReplyerContent {\r\n  margin: 20px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/discussion/discussion.component.html":
/*!******************************************************!*\
  !*** ./src/app/discussion/discussion.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div *ngIf=\"isPostPeopleLoaded\">\r\n\r\n  <div *ngIf=\"discussionToChild.type === 'post'\">\r\n    <div id=\"owner\" class=\"input-group-append\">\r\n      <p class=\"badge badge-secondary\" id=\"ownerName\">{{postPeople.username}}</p>\r\n      <p id=\"ownerTime\"><span class=\"divider\">•</span>{{discussionToChild.postTime}}</p>\r\n    </div>\r\n    <p id=\"ownerContent\">{{discussionToChild.content}}</p>\r\n  </div>\r\n\r\n  <div *ngIf=\"discussionToChild.type === 'reply'\">\r\n\r\n    <div *ngIf=\"discussionToChild.preDiscussion.postPeople === ''\">\r\n      <div class=\"card-header\">\r\n        <p>{{discussionToChild.preDiscussion.content}}</p>\r\n      </div>\r\n      <div id=\"deletedReplyer\" class=\"input-group-append\">\r\n        <p id=\"deletedReplyerName\" class=\"badge badge-secondary\">{{postPeople.username}}</p>\r\n        <p id=\"deletedReplyerTime\"><span class=\"divider\">•</span>{{discussionToChild.postTime}}</p>\r\n      </div>\r\n      <p id=\"deletedReplyerContent\">{{discussionToChild.content}}</p>\r\n    </div>\r\n\r\n    <div *ngIf=\"discussionToChild.preDiscussion.postPeople !== ''\">\r\n      <div class=\"card-header\">\r\n        <div class=\"input-group-append\">\r\n          <p class=\"badge badge-secondary\" id=\"prePosterName\">{{receiver.username}}</p>\r\n          <p id=\"prePosterTime\"><span class=\"divider\">•</span>{{discussionToChild.preDiscussion.postTime}}</p>\r\n        </div>\r\n        <p>{{discussionToChild.preDiscussion.content}}</p>\r\n      </div>\r\n      <div id=\"replyer\" class=\"input-group-append\">\r\n        <p id=\"replyerName\">\r\n          <span class=\"badge badge-secondary\">{{postPeople.username}}</span>\r\n          reply to\r\n          <span class=\"badge badge-secondary\">{{receiver.username}}</span>\r\n        </p>\r\n        <p id=\"replyerTime\"><span class=\"divider\">•</span>{{discussionToChild.postTime}}</p>\r\n      </div>\r\n      <p id=\"replyerContent\">{{discussionToChild.content}}</p>\r\n    </div>\r\n  </div>\r\n\r\n  <div id=\"replyDiv\" class=\"input-group-append\">\r\n    <input class=\"form-control\" [(ngModel)]= 'content' placeholder=\"Reply\">\r\n    <button id=\"replyBtn\" class=\"btn btn-default\" (click)=\"reply()\">Reply</button>\r\n    <button class=\"btn btn-default\" (click)=\"delete()\" *ngIf=\"curUser._id === postPeople._id\">Delete</button>\r\n  </div>\r\n\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/discussion/discussion.component.ts":
/*!****************************************************!*\
  !*** ./src/app/discussion/discussion.component.ts ***!
  \****************************************************/
/*! exports provided: DiscussionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscussionComponent", function() { return DiscussionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _services_discussion_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/discussion.service.client */ "./src/app/services/discussion.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DiscussionComponent = /** @class */ (function () {
    function DiscussionComponent(userService, discussionService) {
        this.userService = userService;
        this.discussionService = discussionService;
        this.messageEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.postPeople = { _id: '', username: 'Canceled Account' };
        this.receiver = { username: 'Canceled Account' };
        this.curUser = { _id: '', error: '' };
        this.isPostPeopleLoaded = false;
    }
    DiscussionComponent.prototype.sendMessage = function (message) {
        this.messageEvent.emit(message);
    };
    DiscussionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.findUserById(this.discussionToChild.postPeople._id)
            .then(function (res) {
            console.log(res);
            if (res) {
                _this.postPeople = res;
            }
            _this.isPostPeopleLoaded = true;
        });
        if (this.discussionToChild.type === 'reply') {
            if (this.discussionToChild.preDiscussion) {
                this.userService.findUserById(this.discussionToChild.preDiscussion.postPeople)
                    .then(function (res) {
                    if (res) {
                        _this.receiver = res;
                    }
                });
            }
            else {
                this.discussionToChild.preDiscussion = { postPeople: '', content: 'Original post has been deleted.' };
            }
        }
        this.userService
            .profile()
            .then(function (user) { return _this.curUser = user; });
    };
    DiscussionComponent.prototype.reply = function () {
        var _this = this;
        if (this.curUser.error) {
            alert(this.curUser.error);
        }
        else {
            if (!this.content) {
                alert('Content can not be empty!');
                return;
            }
            var newDiscussion = {
                postPeople: this.curUser,
                content: this.content,
                preDiscussion: this.discussionToChild._id,
                postTime: new Date(),
                event: this.discussionToChild.event,
                type: 'reply'
            };
            this.discussionService
                .postDiscussion(newDiscussion)
                .then(function () { return _this.finAllDiscussions(); });
        }
    };
    DiscussionComponent.prototype.finAllDiscussions = function () {
        var _this = this;
        this.discussionService
            .findDiscussionsForEvent(this.discussionToChild.event)
            .then(function (discussions) { return _this.sendMessage(discussions); });
    };
    DiscussionComponent.prototype.delete = function () {
        var _this = this;
        if (this.curUser.error) {
            alert(this.curUser.error);
        }
        else {
            this.discussionService
                .deleteDiscussion(this.discussionToChild._id)
                .then(function () { return _this.finAllDiscussions(); });
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DiscussionComponent.prototype, "discussionToChild", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], DiscussionComponent.prototype, "messageEvent", void 0);
    DiscussionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-discussion',
            template: __webpack_require__(/*! ./discussion.component.html */ "./src/app/discussion/discussion.component.html"),
            styles: [__webpack_require__(/*! ./discussion.component.css */ "./src/app/discussion/discussion.component.css")]
        }),
        __metadata("design:paramtypes", [_services_user_service_client__WEBPACK_IMPORTED_MODULE_1__["UserServiceClient"],
            _services_discussion_service_client__WEBPACK_IMPORTED_MODULE_2__["DiscussionServiceClient"]])
    ], DiscussionComponent);
    return DiscussionComponent;
}());



/***/ }),

/***/ "./src/app/epuipment-list-for-profile/epuipment-list-for-profile.component.css":
/*!*************************************************************************************!*\
  !*** ./src/app/epuipment-list-for-profile/epuipment-list-for-profile.component.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\r\n  width: 100%;\r\n  height: 40px;\r\n  background-color: whitesmoke;\r\n  margin-top: 15px;\r\n}\r\n\r\n.icon {\r\n  margin: 5px;\r\n}\r\n\r\n.avatar {\r\n  border-radius: 5%;\r\n  background-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcfCcmZR6idt2y0elauB_IQeFgF5L14OWzWgnqsJIMUO5oJZGi');\r\n  width: 100%;\r\n  padding-bottom: 100%;\r\n  background-size: cover;\r\n  background-position: center;\r\n  z-index: 1;\r\n}\r\n\r\n.pic-container {\r\n  display: inline-block;\r\n  width: 30%;\r\n  padding: 0;\r\n  margin-top: 0;\r\n  margin-left: 5%;\r\n  margin-right: 5%;\r\n}\r\n\r\n.name {\r\n  display: inline-block;\r\n  padding-left: 5%;\r\n  position: absolute;\r\n  top: 50%;\r\n  font-size: xx-large;\r\n}\r\n\r\n.button {\r\n  position: absolute;\r\n  top: 55%;\r\n  right: 5%;\r\n}\r\n\r\n.card {\r\n  height: 240px;\r\n  position: relative;\r\n}\r\n\r\n@media (min-width: 400px) {\r\n  .card-columns {\r\n    -webkit-column-count: 1;\r\n            column-count: 1;\r\n  }\r\n}\r\n\r\n@media (min-width: 770px) {\r\n  .card-columns {\r\n    -webkit-column-count: 2;\r\n            column-count: 2;\r\n  }\r\n}\r\n\r\n@media (min-width: 1000px) {\r\n  .masonry-item {\r\n    width: 33.3%;\r\n    padding: 10px;\r\n\r\n  }\r\n}\r\n\r\n.name div {\r\n  /*padding-top: 5px;*/\r\n  /*margin-bottom: 20px;*/\r\n  font-family: \"Bradley Hand\";\r\n  overflow: hidden;\r\n  white-space: nowrap;\r\n}\r\n\r\n.title {\r\n  text-align: center;\r\n  overflow: hidden;\r\n}\r\n\r\n#Adiv {\r\n  margin-top: 20px;\r\n  margin-left: 60px;\r\n}\r\n\r\n.body {\r\n  height: 150px;\r\n}\r\n\r\n.info-container {\r\n  width: 40%;\r\n  padding: 0;\r\n  margin-top: 0;\r\n  margin-left: 5%;\r\n  margin-right: 5%;\r\n  display: inline-block;\r\n}\r\n\r\n#EquipCard {\r\n  margin-top: 15px;\r\n}\r\n\r\n.row {\r\n  margin-bottom: 15px;\r\n}\r\n\r\n.far {\r\n  cursor: pointer;\r\n}\r\n"

/***/ }),

/***/ "./src/app/epuipment-list-for-profile/epuipment-list-for-profile.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/epuipment-list-for-profile/epuipment-list-for-profile.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <div class=\"header\">\r\n    <h4>Total Equipments: {{equips.length}}</h4>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div id=\"EquipCard\" *ngFor=\"let equip of equips\" class=\"col-6\">\r\n      <div class=\"card\">\r\n        <div id=\"Adiv\">\r\n          <h4>{{equip.title}}</h4>\r\n        </div>\r\n\r\n        <div class=\"body\">\r\n          <div class=\"pic-container\">\r\n            <div class=\"avatar\" *ngIf=\"equip.photos.length !== 0\"\r\n                 [ngStyle]=\"{'background-image': 'url(' + equip.photos[0] + ')'}\"></div>\r\n            <div class=\"avatar\" *ngIf=\"equip.photos.length === 0\"></div>\r\n          </div>\r\n\r\n          <div class=\"info-container\">\r\n            <div>\r\n              Total: {{equip.quantity}}\r\n            </div>\r\n            <div>\r\n              Available: {{equip.available}}\r\n            </div>\r\n            <div *ngIf=\"isSame\">\r\n              <i class=\"far fa-edit fa-2x icon edit\" [routerLink]=\"['/equipmentEditor/']\"></i>\r\n              <i class=\"far fa-trash-alt fa-2x icon delete\" (click)=\"deleteEquip(equip._id, equip.provider._id)\"></i>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/epuipment-list-for-profile/epuipment-list-for-profile.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/epuipment-list-for-profile/epuipment-list-for-profile.component.ts ***!
  \************************************************************************************/
/*! exports provided: EpuipmentListForProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EpuipmentListForProfileComponent", function() { return EpuipmentListForProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_equipment_service_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/equipment.service.client */ "./src/app/services/equipment.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EpuipmentListForProfileComponent = /** @class */ (function () {
    function EpuipmentListForProfileComponent(equipmentService) {
        this.equipmentService = equipmentService;
        this.messageEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    EpuipmentListForProfileComponent.prototype.ngOnInit = function () {
    };
    EpuipmentListForProfileComponent.prototype.deleteEquip = function (equipId, providerId) {
        var _this = this;
        if (confirm('Are you sure to delete this equipment? All the renting record of this equipment will be deleted automatically!')) {
            this.equipmentService
                .deleteEquipment(equipId)
                .then(function (res) {
                _this.equipmentService
                    .findEquipmentsForProvider(_this.user._id)
                    .then(function (equips) {
                    _this.messageEvent.emit(equips);
                });
            });
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], EpuipmentListForProfileComponent.prototype, "equips", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], EpuipmentListForProfileComponent.prototype, "isSame", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], EpuipmentListForProfileComponent.prototype, "user", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], EpuipmentListForProfileComponent.prototype, "messageEvent", void 0);
    EpuipmentListForProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-epuipment-list-for-profile',
            template: __webpack_require__(/*! ./epuipment-list-for-profile.component.html */ "./src/app/epuipment-list-for-profile/epuipment-list-for-profile.component.html"),
            styles: [__webpack_require__(/*! ./epuipment-list-for-profile.component.css */ "./src/app/epuipment-list-for-profile/epuipment-list-for-profile.component.css")]
        }),
        __metadata("design:paramtypes", [_services_equipment_service_client__WEBPACK_IMPORTED_MODULE_1__["EquipmentServiceClient"]])
    ], EpuipmentListForProfileComponent);
    return EpuipmentListForProfileComponent;
}());



/***/ }),

/***/ "./src/app/equipment-content-editor/equipment-content-editor.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/equipment-content-editor/equipment-content-editor.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#deleteIcon{\r\n  margin: 10px;\r\n  cursor: pointer;\r\n}\r\n\r\n#editIcon {\r\n  margin: 10px;\r\n  cursor: pointer;\r\n}\r\n\r\n#title {\r\n  margin: 10px;\r\n}\r\n\r\n.inputFld {\r\n  margin-bottom: 10px;\r\n}\r\n\r\n#basicInfo {\r\n  margin-bottom: 20px;\r\n}\r\n\r\n#drag {\r\n  margin-left: 30px;\r\n}\r\n\r\n.content-of-modal .card {\r\n  background-color: #9fcdff;\r\n  margin: 5px;\r\n  padding: 10px;\r\n}\r\n\r\n.content-of-modal .span-box {\r\n\r\n}\r\n\r\n.content-of-modal .delete-span {\r\n  display: inline-block;\r\n  margin-right: 3px;\r\n  float: right;\r\n\r\n}\r\n\r\n.content-of-modal .edit-span {\r\n  display: inline-block;\r\n  margin-right: 4px;\r\n  float: right;\r\n}\r\n\r\n.widgetFields {\r\n  margin-top: 20px;\r\n}\r\n\r\n#addParaBtn {\r\n  margin-top: 5px;\r\n}\r\n\r\n#addListBtn {\r\n  margin-top: 5px;\r\n}\r\n\r\n#desYesBtn {\r\n  margin-right: 15px;\r\n}\r\n\r\n.featureTag {\r\n  cursor: pointer;\r\n  margin-right: 5px;\r\n  margin-top: 10px;\r\n}\r\n\r\n#tagsDisplay {\r\n  margin-left: 8px;\r\n  cursor: pointer;\r\n}\r\n\r\n.badge {\r\n  cursor: pointer;\r\n}\r\n\r\n#Qua-avi-Display {\r\n  margin: 10px;\r\n}\r\n\r\n#widgetDisplay {\r\n  margin: 20px;\r\n}\r\n\r\n#featureDisplay {\r\n  margin-right: 8px;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/equipment-content-editor/equipment-content-editor.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/equipment-content-editor/equipment-content-editor.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <span class=\"edit-span\" (click)=\"deleteEquipment()\">\r\n    <i id=\"deleteIcon\" class=\"far fa-trash-alt float-right\"></i>\r\n  </span>\r\n  <span class=\"edit-span\" (click)=\"openModal(template2)\">\r\n    <i id=\"editIcon\" class=\"fas fa-pencil-alt float-right\"></i>\r\n  </span>\r\n  <h4 id=\"title\">{{equipment.title}}</h4>\r\n</div>\r\n\r\n<div class=\"carousel-container\">\r\n  <carousel data-interval=\"false\">\r\n    <slide *ngFor=\"let photo of equipment.photos\">\r\n      <img src={{photo}} alt=\"first slide\" style=\"display: block; width: 100%;\">\r\n\r\n    </slide>\r\n  </carousel>\r\n</div>\r\n\r\n<div id=\"Qua-avi-Display\">\r\n  <span>Quantity: {{equipment.quantity}}</span>\r\n  <span class=\"float-right\">Available: {{equipment.available}}</span>\r\n</div>\r\n<hr>\r\n<div class=\"amenity_list\">\r\n  <span *ngFor=\"let tag of equipment.tags\" class=\"badge badge-info amenity_item\" id=\"tagsDisplay\">{{tag}}</span>\r\n</div>\r\n<hr *ngIf=\"equipment.tags.length !== 0\">\r\n\r\n<div id=\"widgetDisplay\">\r\n  <div *ngFor=\"let widget of equipment.description\">\r\n    <div *ngIf=\"widget.type === 'heading'\">\r\n      <h5>{{widget.data}}</h5>\r\n    </div>\r\n    <div *ngIf=\"widget.type === 'paragraph'\">\r\n      <p>{{widget.data}}</p>\r\n    </div>\r\n    <div *ngIf=\"widget.type === 'link'\">\r\n      <a href={{widget.data}}>{{widget.data}}</a>\r\n    </div>\r\n\r\n    <div *ngIf=\"widget.type === 'unorderedList'\">\r\n      <ul >\r\n        <li *ngFor=\"let item of splitList(widget.data)\">{{item}}</li>\r\n      </ul>\r\n    </div>\r\n\r\n    <div *ngIf=\"widget.type === 'orderedList'\">\r\n      <ol>\r\n        <li *ngFor=\"let item of splitList(widget.data)\">{{item}}</li>\r\n      </ol>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<ng-template #template2>\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title pull-left\">Edit Equipment Details</h4>\r\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n\r\n  <div class=\"modal-body\">\r\n    <div class=\"content-of-modal\">\r\n      <h5 id=\"basicInfo\">Basic informations</h5>\r\n      <div>\r\n        <div class=\"input-group-append inputFld\">\r\n          <label for=\"titleFld\" class=\"col-sm-2 col-form-label\"> Name </label>\r\n          <input\r\n            id=\"titleFld\"\r\n            [(ngModel)]=\"equipment.title\"\r\n            class=\"form-control\"\r\n            placeholder=\"Equipment Name\"\r\n          />\r\n        </div>\r\n\r\n        <div class=\"input-group-append inputFld\">\r\n          <label for=\"quantityFld\" class=\"col-sm-2 col-form-label\"> Total </label>\r\n          <input\r\n            id=\"quantityFld\"\r\n            [(ngModel)]=\"equipment.quantity\"\r\n            class=\"form-control\"\r\n            placeholder=\"Total quantity of this equipment\"\r\n          />\r\n        </div>\r\n\r\n        <div class=\"input-group-append inputFld\">\r\n          <label for=\"availableFld\" class=\"col-sm-2 col-form-label\"> Avalable </label>\r\n          <input\r\n            id=\"availableFld\"\r\n            [(ngModel)]=\"equipment.available\"\r\n            class=\"form-control\"\r\n            placeholder=\"Available quantity of this equipment\"\r\n          />\r\n        </div>\r\n\r\n        <div class=\"input-group-append inputFld\">\r\n          <label for=\"img\" class=\"col-sm-2 col-form-label\"> Add Image </label>\r\n          <input\r\n            id=\"img\"\r\n            [(ngModel)]=\"imgUrl\"\r\n            class=\"form-control\"\r\n            placeholder=\"Image Url\">\r\n          <button class=\"btn btn-outline-dark\" (click)=\"addImageUrl()\">Add</button>\r\n        </div>\r\n\r\n        <hr>\r\n        <p>Image list :</p>\r\n        <ol>\r\n          <li *ngFor=\"let img of equipment.photos\">\r\n            {{img.slice(0, 28)}}\r\n            <button class=\"btn btn-outline-danger\" (click)=\"deleteImageUrl(img)\">Delete</button>\r\n          </li>\r\n        </ol>\r\n\r\n        <hr>\r\n      </div>\r\n      <div class=\"input-group-append\">\r\n        <h5>Edit Descriptions</h5>\r\n        <span id=\"drag\" class=\"text-muted\">Drag to swich order</span>\r\n      </div>\r\n      <div [sortablejs]='equipment.description' [sortablejsOptions]=\"{ animation: 150 }\">\r\n        <div class=\"card\" *ngFor=\"let widget of equipment.description\">\r\n          <app-event-description-widget-editor\r\n            [widget]=\"widget\"\r\n            (deleteEmitter)=\"deleteWidget($event)\"\r\n            (editEmitter)=\"updateWidget($event)\">\r\n          </app-event-description-widget-editor>\r\n        </div>\r\n      </div>\r\n\r\n      <hr>\r\n      <p>Selected Features</p>\r\n      <div class=\"amenity_list\" *ngIf=\"equipment.tags.length > 0\">\r\n        <span id=\"featureDisplay\" *ngFor=\"let tag of equipment.tags\" (click)=\"toggleEventTag(tag)\" class=\"badge badge-info amenity_item\">{{tag}}</span>\r\n        <hr>\r\n      </div>\r\n    </div>\r\n\r\n    <div>\r\n      <h4>Add new descriptions</h4>\r\n      <tabset>\r\n        <tab heading=\"Heading\" id=\"tab0\">\r\n          <div class=\"input-group-append widgetFields\">\r\n            <input\r\n              id=\"heading\"\r\n              [(ngModel)]=\"heading\"\r\n              class=\"form-control\"\r\n              placeholder=\"New Heading\">\r\n            <button class=\"btn btn-outline-danger\" (click)=\"addHeading()\">Add</button>\r\n          </div>\r\n        </tab>\r\n\r\n\r\n        <tab heading=\"Paragraph\" id=\"tab1\">\r\n          <div class=\"widgetFields\">\r\n            <textarea\r\n              [(ngModel)]=\"paragraph\"\r\n              class=\"form-control\"\r\n              placeholder=\"Paragraph text\">\r\n            </textarea>\r\n          </div>\r\n          <button id=\"addParaBtn\" class=\"btn btn-outline-danger\" (click)=\"addParagraph()\">Add Paragraph</button>\r\n        </tab>\r\n\r\n        <tab heading=\"Link\">\r\n          <div class=\"input-group-append widgetFields\">\r\n            <input\r\n              [(ngModel)]=\"linkUrl\"\r\n              class=\"form-control\"\r\n              placeholder=\"Link URL\">\r\n            <button class=\"btn btn-outline-danger\" (click)=\"addLink()\">Add</button>\r\n          </div>\r\n        </tab>\r\n\r\n        <tab heading=\"List\">\r\n          <div>\r\n            <select class=\"form-control widgetFields\" (change)=\"setListType()\" >\r\n              <option value=\"unorderedList\">Unordered list</option>\r\n              <option value=\"orderedList\">Ordered list</option>\r\n            </select>\r\n            <textarea\r\n              [(ngModel)]=\"list\"\r\n              class=\"form-control widgetFields\"\r\n              placeholder=\"List Item\">\r\n            </textarea>\r\n            <button id=\"addListBtn\" class=\"btn btn-outline-danger\" (click)=\"addList()\">Add</button>\r\n          </div>\r\n        </tab>\r\n\r\n        <tab heading=\"Features\">\r\n          <div class=\"btn-group\" dropdown>\r\n            <span *ngFor=\"let tag of featureTags\" (click)=\"toggleFeatureTag(tag)\" class=\"featureTag badge badge-info\">{{tag}}</span>\r\n          </div>\r\n        </tab>\r\n      </tabset>\r\n    </div>\r\n\r\n    <hr>\r\n    <p>Save new added widget?</p>\r\n    <button type=\"button\" class=\"btn btn-danger\" id=\"desYesBtn\" (click)=\"confirm()\" >Yes</button>\r\n    <button type=\"button\" class=\"btn btn-default\" (click)=\"decline()\" >No</button>\r\n  </div>\r\n</ng-template>\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/equipment-content-editor/equipment-content-editor.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/equipment-content-editor/equipment-content-editor.component.ts ***!
  \********************************************************************************/
/*! exports provided: EquipmentContentEditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EquipmentContentEditorComponent", function() { return EquipmentContentEditorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var _models_widget_model_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/widget.model.client */ "./src/app/models/widget.model.client.ts");
/* harmony import */ var _services_equipment_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/equipment.service.client */ "./src/app/services/equipment.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EquipmentContentEditorComponent = /** @class */ (function () {
    function EquipmentContentEditorComponent(modalService, equipmentService) {
        this.modalService = modalService;
        this.equipmentService = equipmentService;
        this.refreshEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.listType = 'unorderedList';
        this.config = {
            animated: true,
            keyboard: true,
            class: 'my-modal'
        };
        this.featureTags = ['Waterproof', 'HighQuality', 'Dustproof', 'EasySetup', 'SkinProtection', 'LightWeight', 'LongLasting'];
    }
    EquipmentContentEditorComponent.prototype.refreshEquipments = function () {
        this.refreshEmitter.emit('refresh equipments');
    };
    EquipmentContentEditorComponent.prototype.toggleFeatureTag = function (tag) {
        this.equipment.tags.push(tag);
        var index = this.featureTags.indexOf(tag);
        this.featureTags.splice(index, 1);
    };
    EquipmentContentEditorComponent.prototype.toggleEventTag = function (tag) {
        this.featureTags.push(tag);
        var index = this.equipment.tags.indexOf(tag);
        this.equipment.tags.splice(index, 1);
    };
    EquipmentContentEditorComponent.prototype.openModal = function (template) {
        this.modalRef = this.modalService
            .show(template, Object.assign({}, { class: 'my-modal modal-lg modal-dialog-centered' }));
    };
    EquipmentContentEditorComponent.prototype.deleteEquipment = function () {
        var _this = this;
        this.equipmentService.deleteEquipment(this.equipment._id)
            .then(function () { return _this.refreshEquipments(); });
    };
    EquipmentContentEditorComponent.prototype.confirm = function () {
        var _this = this;
        console.log('Confirmed!');
        this.equipmentService.updateEquipment(this.equipment)
            .then(function () {
            _this.modalRef.hide();
            _this.refreshEquipments();
        });
    };
    EquipmentContentEditorComponent.prototype.decline = function () {
        this.modalRef.hide();
        this.refreshEquipments();
    };
    EquipmentContentEditorComponent.prototype.addImageUrl = function () {
        console.log(this.imgUrl);
        this.equipment.photos.push(this.imgUrl);
        this.imgUrl = '';
    };
    EquipmentContentEditorComponent.prototype.deleteImageUrl = function (imgUrl) {
        if (this.equipment.photos.includes(imgUrl)) {
            var index = this.equipment.photos.indexOf(imgUrl);
            this.equipment.photos.splice(index, 1);
        }
    };
    EquipmentContentEditorComponent.prototype.addHeading = function () {
        this.equipment.description.push(new _models_widget_model_client__WEBPACK_IMPORTED_MODULE_2__["Widget"]('heading', this.heading));
        this.paragraph = '';
    };
    EquipmentContentEditorComponent.prototype.addParagraph = function () {
        this.equipment.description.push(new _models_widget_model_client__WEBPACK_IMPORTED_MODULE_2__["Widget"]('paragraph', this.paragraph));
        this.paragraph = '';
    };
    EquipmentContentEditorComponent.prototype.addLink = function () {
        this.equipment.description.push(new _models_widget_model_client__WEBPACK_IMPORTED_MODULE_2__["Widget"]('link', this.linkUrl));
    };
    EquipmentContentEditorComponent.prototype.setListType = function () {
        if (this.listType === 'orderedList') {
            this.listType = 'unorderedList';
        }
        else {
            this.listType = 'orderedList';
        }
    };
    EquipmentContentEditorComponent.prototype.addList = function () {
        this.equipment.description.push(new _models_widget_model_client__WEBPACK_IMPORTED_MODULE_2__["Widget"](this.listType, this.list));
    };
    EquipmentContentEditorComponent.prototype.splitList = function (data) {
        return data.split(/\r?\n/);
    };
    EquipmentContentEditorComponent.prototype.toggleTag = function (tag) {
        if (this.equipment.tags.includes(tag)) {
            var index = this.equipment.tags.indexOf(tag);
            this.equipment.tags.splice(index, 1);
        }
        else {
            this.equipment.tags.push(tag);
        }
    };
    EquipmentContentEditorComponent.prototype.updateWidget = function (event) {
        var oldWidget = event[0];
        var newWidget = event[1];
        var index = this.equipment.description.indexOf(oldWidget);
        this.equipment.description[index] = newWidget;
    };
    EquipmentContentEditorComponent.prototype.deleteWidget = function (widget) {
        console.log(widget);
        var index = this.equipment.description.indexOf(widget);
        this.equipment.description.splice(index, 1);
        console.log(this.equipment.description);
    };
    EquipmentContentEditorComponent.prototype.ngOnInit = function () {
        for (var i = 0; i < this.equipment.tags.length; i++) {
            if (this.featureTags.includes(this.equipment.tags[i])) {
                var index = this.featureTags.indexOf(this.equipment.tags[i]);
                this.featureTags.splice(index, 1);
            }
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], EquipmentContentEditorComponent.prototype, "equipment", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], EquipmentContentEditorComponent.prototype, "refreshEmitter", void 0);
    EquipmentContentEditorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-equipment-content-editor',
            template: __webpack_require__(/*! ./equipment-content-editor.component.html */ "./src/app/equipment-content-editor/equipment-content-editor.component.html"),
            styles: [__webpack_require__(/*! ./equipment-content-editor.component.css */ "./src/app/equipment-content-editor/equipment-content-editor.component.css")]
        }),
        __metadata("design:paramtypes", [ngx_bootstrap__WEBPACK_IMPORTED_MODULE_1__["BsModalService"],
            _services_equipment_service_client__WEBPACK_IMPORTED_MODULE_3__["EquipmentServiceClient"]])
    ], EquipmentContentEditorComponent);
    return EquipmentContentEditorComponent;
}());



/***/ }),

/***/ "./src/app/equipment-editor/equipment-editor.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/equipment-editor/equipment-editor.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\r\n  margin-top: 80px;\r\n}\r\n\r\n#amenity_list {\r\n  margin-left: 35px;\r\n}\r\n\r\n.amenity_item {\r\n  margin-right: 8px;\r\n}\r\n\r\n@media (min-width: 35em) {\r\n  .card-columns {\r\n    -webkit-column-count: 1;\r\n    column-count: 1;\r\n  }\r\n}\r\n\r\n@media (min-width: 50em) {\r\n  .card-columns {\r\n    -webkit-column-count: 2;\r\n    column-count: 2;\r\n  }\r\n}\r\n\r\n@media (min-width: 80em) {\r\n  .card-columns {\r\n    -webkit-column-count: 3;\r\n    column-count: 3;\r\n  }\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/equipment-editor/equipment-editor.component.html":
/*!******************************************************************!*\
  !*** ./src/app/equipment-editor/equipment-editor.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"container\">\r\n  <div class=\"card-columns\">\r\n\r\n      <div class=\"card\" *ngFor=\"let equipment of equipments\">\r\n        <app-equipment-content-editor [equipment]=\"equipment\" (refreshEmitter)=\"refreshEquipments()\"></app-equipment-content-editor>\r\n\r\n      </div>\r\n\r\n  </div>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/equipment-editor/equipment-editor.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/equipment-editor/equipment-editor.component.ts ***!
  \****************************************************************/
/*! exports provided: EquipmentEditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EquipmentEditorComponent", function() { return EquipmentEditorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_equipment_service_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/equipment.service.client */ "./src/app/services/equipment.service.client.ts");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user.service.client */ "./src/app/services/user.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EquipmentEditorComponent = /** @class */ (function () {
    function EquipmentEditorComponent(service, userService) {
        this.service = service;
        this.userService = userService;
        this.isDataLoaded = false;
        this.equipments = [];
    }
    EquipmentEditorComponent.prototype.refreshEquipments = function () {
        var _this = this;
        return this.userService.profile()
            .then(function (provider) {
            console.log(provider);
            return _this.service.findEquipmentsForProvider(provider._id);
        })
            .then(function (equipments) {
            console.log(equipments);
            return _this.equipments = equipments;
        });
    };
    EquipmentEditorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.refreshEquipments()
            .then(function () { return _this.isDataLoaded = true; });
    };
    EquipmentEditorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-equipment-editor',
            template: __webpack_require__(/*! ./equipment-editor.component.html */ "./src/app/equipment-editor/equipment-editor.component.html"),
            styles: [__webpack_require__(/*! ./equipment-editor.component.css */ "./src/app/equipment-editor/equipment-editor.component.css")]
        }),
        __metadata("design:paramtypes", [_services_equipment_service_client__WEBPACK_IMPORTED_MODULE_1__["EquipmentServiceClient"],
            _services_user_service_client__WEBPACK_IMPORTED_MODULE_2__["UserServiceClient"]])
    ], EquipmentEditorComponent);
    return EquipmentEditorComponent;
}());



/***/ }),

/***/ "./src/app/equipment-list-card/equipment-list-card.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/equipment-list-card/equipment-list-card.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".carousel-container {\r\n  height: 100px;\r\n\r\n}\r\n\r\ncarousel {\r\n\r\n}\r\n\r\n.button-pos {\r\n  margin-top: 2px;\r\n  margin-right: 5px;\r\n  float: right;\r\n  z-index: 1;\r\n}\r\n\r\n.button-container {\r\n  position: relative;\r\n}\r\n\r\n.button-container i {\r\n  color: red;\r\n  text-shadow: 2px 2px 2px #aaa;\r\n  cursor: pointer;\r\n}\r\n\r\n.wbdv-blur {\r\n  -webkit-filter: blur(5px); /* Safari 6.0 - 9.0 */\r\n  filter: blur(5px);\r\n  border-radius: 25px;\r\n\r\n}\r\n\r\n.wbdv-imageContainer {\r\n  position: relative;\r\n  border-radius: 25px 25px 0 0;\r\n  overflow:hidden;\r\n  /*background-color: #0b2e13;*/\r\n  /*-moz-border-radius: 20px;*/\r\n  /*margin:0 auto;*/\r\n}\r\n\r\n.wbdv-text-block {\r\n  position: absolute;\r\n  border-radius: 25px;\r\n  top: 10%;\r\n  left: 5%;\r\n  right: 5%;\r\n\r\n\r\n  color: white;\r\n  padding-left: 20px;\r\n  padding-right: 20px;\r\n}\r\n\r\n.card {\r\n  border-radius: 25px;\r\n  margin-left: 10px;\r\n  box-shadow: 0 16px 24px 2px rgba(0, 0, 0, .1)\r\n  /*0 6px 10px 5px rgba(0, 0, 0, .1),*/\r\n  /*0 8px 10px -5px rgba(0, 0, 0, .1);*/\r\n}\r\n\r\n.card-title {\r\n  margin-bottom: 0;\r\n\r\n}\r\n\r\n#title {\r\n  z-index: 3;\r\n}\r\n\r\n#title a {\r\n  color: black;\r\n  text-decoration: none;\r\n}\r\n\r\n.iframe-pos {\r\n  top: 0;\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 100%;\r\n  border-radius: 25px;\r\n  z-index: -1;\r\n}\r\n\r\n.iframe-pos-active {\r\n  z-index: 5;\r\n}\r\n\r\n.iframe-container {\r\n  border-radius: 25px;\r\n  -webkit-border-radius: 20px;\r\n  /*position: absolute;*/\r\n  position: relative;\r\n  overflow: auto;\r\n  top: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\niframe {\r\n  width:100%;\r\n  height:100%;\r\n\r\n}\r\n\r\n.img-container{\r\n  height: 300px;\r\n  position:relative;\r\n  border-radius: 25px 25px 0 0;\r\n  overflow: hidden;\r\n}\r\n\r\n.img {\r\n  padding: 0;\r\n  background-image: url('https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b6ded683923a678ad03fae323169beb4&auto=format&fit=crop&w=700&q=60');\r\n  width: 100%;\r\n  padding-bottom: 100%;\r\n  background-size: cover;\r\n  background-position: center;\r\n}\r\n\r\n/*img {*/\r\n\r\n/*border-radius: 25px 25px 0 0;*/\r\n\r\n/*height: auto;*/\r\n\r\n/*width: auto;*/\r\n\r\n/*position:absolute;*/\r\n\r\n/*vertical-align: middle;*/\r\n\r\n/*}*/\r\n\r\n.avatar-container {\r\n  margin-left: 10%;\r\n  margin-bottom: 8px;\r\n  display: inline-block;\r\n  width: 50px;\r\n  padding: 0;\r\n}\r\n\r\n.avatar {\r\n  padding: 0;\r\n  border-radius: 50%;\r\n  background-image: url('https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b6ded683923a678ad03fae323169beb4&auto=format&fit=crop&w=700&q=60');\r\n  width: 100%;\r\n  padding-bottom: 100%;\r\n  background-size: cover;\r\n  background-position: center;\r\n  cursor: pointer;\r\n}\r\n\r\n.host-info {\r\n  display: inline-block;\r\n  padding-left: 5%;\r\n  padding-top: 0;\r\n  margin-top: 0;\r\n}\r\n\r\n.host-info div {\r\n  /*padding-top: 5px;*/\r\n  /*margin-bottom: 20px;*/\r\n  font-family: \"Bradley Hand\";\r\n  overflow: hidden;\r\n  white-space: nowrap;\r\n}\r\n\r\nh6 {\r\n  display: inline-block;\r\n  padding-top: 15px;\r\n}\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/equipment-list-card/equipment-list-card.component.html":
/*!************************************************************************!*\
  !*** ./src/app/equipment-list-card/equipment-list-card.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card text-center\"\r\n     (mouseleave) =\"mouseLeave()\">\r\n\r\n  <carousel (activeSlideChange)=\"slideChanged($event)\" data-interval=\"false\">\r\n    <slide *ngFor=\"let photo of data.photos\" >\r\n      <div class=\"img-container\">\r\n        <!--<img [ngClass]=\"{'wbdv-blur': hasExtraInfo && inImage}\" src={{photo}} alt=\"first slide\" style=\"display: block; width: 100%;\">-->\r\n        <div class=\"img\"\r\n             [ngClass]=\"{'wbdv-blur': hasExtraInfo && inImage}\"\r\n             [ngStyle]=\"{'background-image': 'url(' + photo + ')'}\">\r\n        </div>\r\n      </div>\r\n    </slide>\r\n  </carousel>\r\n\r\n  <div class=\"card-block\" style=\"{z-index: 1}\">\r\n    <h6 class=\"card-subtitle mb-2 text-muted\">Available: {{data.available}}</h6>\r\n    <span class=\"button-pos\">\r\n      <span class=\"button-container\">\r\n         <!--<span (click) = \"seeEquipmentDetail()\">-->\r\n            <!--<i class=\"far fa-eye fa-2x\"></i>-->\r\n          <!--</span>-->\r\n         <span (click)=\"openModal(template2)\">\r\n          <i class=\"fas fa-plus-circle fa-2x\"></i>\r\n        </span>\r\n      </span>\r\n    </span>\r\n    <h4 id='title' class=\"card-title\">\r\n      <span>\r\n        {{data.title}}\r\n      </span>\r\n    </h4>\r\n    <div class=\"card-body\">\r\n      <div class=\"row\" >\r\n        <div class=\"avatar-container\" *ngIf=\"provider.profilePhoto\">\r\n          <div class=\"avatar\" [routerLink]=\"['/profile/' + provider._id]\"\r\n               [ngStyle]=\"{'background-image': 'url(' + provider.profilePhoto + ')'}\">\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"host-info\">\r\n          <div class=\"text-sm-left text-muted\">\r\n            Dealer:\r\n            <span>{{provider && provider.username}}</span>\r\n            <!--<span>{{provider && provider.firstName}}</span>-->\r\n            <!--<span>{{provider && ' ' + provider.lastName}}</span>-->\r\n          </div>\r\n          <div class=\"text-sm-left\">\r\n            <span class=\"text-muted\">From </span>\r\n            <span>{{provider.organizationName}}</span>\r\n            <span>{{provider.address}}</span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n  <ng-template #template2>\r\n    <div class=\"modal-header\">\r\n      <h4 class=\"modal-title pull-left\">Equipment Details</h4>\r\n      <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\r\n        <span aria-hidden=\"true\">&times;</span>\r\n      </button>\r\n    </div>\r\n\r\n    <div class=\"modal-body\">\r\n      <div class=\"content-of-modal\">\r\n        <div>\r\n          <h4>\r\n            {{data.title}}\r\n          </h4>\r\n\r\n          <div>\r\n            Quantity: {{data.quantity}}\r\n            Available: {{data.available}}\r\n          </div>\r\n        </div>\r\n\r\n          <div class=\"\" *ngFor=\"let widget of data.description\">\r\n            <!--<div *ngFor=\"let widget of data.description\">-->\r\n              <div *ngIf=\"widget.type === 'heading'\">\r\n                <h5>{{widget.data}}</h5>\r\n              </div>\r\n              <div *ngIf=\"widget.type === 'paragraph'\">\r\n                <p>{{widget.data}}</p>\r\n              </div>\r\n              <div *ngIf=\"widget.type === 'link'\">\r\n                <a href={{widget.data}}>{{widget.data}}</a>\r\n              </div>\r\n\r\n              <div *ngIf=\"widget.type === 'unorderedList'\">\r\n                <ul >\r\n                  <li *ngFor=\"let item of splitList(widget.data)\">{{item}}</li>\r\n                </ul>\r\n              </div>\r\n\r\n              <div *ngIf=\"widget.type === 'orderedList'\">\r\n                <ol>\r\n                  <li *ngFor=\"let item of splitList(widget.data)\">{{item}}</li>\r\n                </ol>\r\n              </div>\r\n            <!--</div>-->\r\n          </div>\r\n\r\n\r\n        <div class=\"amenity_list\" *ngIf=\"data.tags.length > 0\">\r\n          <span id=\"featureDisplay\" *ngFor=\"let tag of data.tags\" class=\"badge badge-info amenity_item\">{{tag}}</span>\r\n        </div>\r\n      </div>\r\n\r\n      <hr>\r\n      <div>\r\n        <h4>Contact Info</h4>\r\n        <div>\r\n          phone number: {{provider.phoneNumber}} <span *ngIf=\"!provider.phoneNumber\">not avalaible</span>\r\n        </div>\r\n        <div>\r\n          address: {{provider.address}}  <span *ngIf=\"!provider.address\">not avalaible</span>\r\n        </div>\r\n      </div>\r\n      <hr>\r\n      <div>\r\n        <h4>How many do you want to rent?</h4>\r\n        <input [(ngModel)]=\"rentNumber\" type=\"number\" name=\"quantity\" min=\"1\" [max]=\"data.available\">\r\n      </div>\r\n      <div>\r\n        <div class=\"content-of-modal\">\r\n          <ul>\r\n            <li *ngFor=\"let event of myEvents; let i = index\">\r\n              {{event.title}}\r\n              <button id=\"selectBtn\" class=\"btn btn-outline-dark\" (click)=\"selectEvent(event)\">Select</button>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n        <hr>\r\n        <div>Selected target event: {{targetEvent.title}}</div>\r\n      </div>\r\n\r\n\r\n      <button type=\"button\" class=\"btn btn-danger\" id=\"desYesBtn\" (click)=\"confirm()\" >Yes</button>\r\n      <button type=\"button\" class=\"btn btn-default\" (click)=\"decline()\" >No</button>\r\n    </div>\r\n  </ng-template>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/equipment-list-card/equipment-list-card.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/equipment-list-card/equipment-list-card.component.ts ***!
  \**********************************************************************/
/*! exports provided: EquipmentListCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EquipmentListCardComponent", function() { return EquipmentListCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_equipment_model_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/equipment.model.client */ "./src/app/models/equipment.model.client.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _services_provider_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/provider.service.client */ "./src/app/services/provider.service.client.ts");
/* harmony import */ var _models_provider_model_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/provider.model.client */ "./src/app/models/provider.model.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _services_event_service_client__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/event.service.client */ "./src/app/services/event.service.client.ts");
/* harmony import */ var _models_EventCard_model_client__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../models/EventCard.model.client */ "./src/app/models/EventCard.model.client.ts");
/* harmony import */ var _services_equipmentRenting_service_client__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/equipmentRenting.service.client */ "./src/app/services/equipmentRenting.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var EquipmentListCardComponent = /** @class */ (function () {
    function EquipmentListCardComponent(sanitizer, router, rentService, userService, eventService, modalService, service) {
        this.sanitizer = sanitizer;
        this.router = router;
        this.rentService = rentService;
        this.userService = userService;
        this.eventService = eventService;
        this.modalService = modalService;
        this.service = service;
        this.inImage = false;
        this.hasExtraInfo = false;
        this.slideIndex = 0;
        this.rentNumber = 1;
        this.myEvents = [];
        this.targetEvent = new _models_EventCard_model_client__WEBPACK_IMPORTED_MODULE_9__["EventCard"]();
        this.provider = new _models_provider_model_client__WEBPACK_IMPORTED_MODULE_4__["Provider"]();
        this.refreshEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.config = {
            animated: true,
            keyboard: true,
            class: 'my-modal'
        };
    }
    EquipmentListCardComponent.prototype.splitList = function (data) {
        return data.split(/\r?\n/);
    };
    EquipmentListCardComponent.prototype.selectEvent = function (event) {
        this.targetEvent = event;
    };
    EquipmentListCardComponent.prototype.openModal = function (template) {
        this.modalRef = this.modalService
            .show(template, Object.assign({}, { class: 'my-modal modal-lg modal-dialog-centered' }));
    };
    EquipmentListCardComponent.prototype.slideChanged = function (event) {
        if (event !== this.slideIndex) {
            this.slideIndex = event;
        }
    };
    EquipmentListCardComponent.prototype.mouseEnter = function () {
        this.inImage = true;
    };
    EquipmentListCardComponent.prototype.mouseLeave = function () {
        this.inImage = false;
    };
    EquipmentListCardComponent.prototype.getProvider = function () {
        var _this = this;
        console.log(this.data.provider);
        return this.service.findProviderById(this.data.provider)
            .then(function (provider) {
            console.log(provider);
            if (!provider.profilePhoto || provider.profilePhoto === '') {
                provider.profilePhoto = 'https://images.unsplash.com/photo-' +
                    '1495078065017-564723e7e3e7?ixlib=rb-0.3.5&ixid=eyJhcHBfa' +
                    'WQiOjEyMDd9&s=09093dcdf66dbcd2397b9dc19384a899&auto=forma' +
                    't&fit=crop&w=800&q=60';
            }
            return _this.provider = provider;
        });
    };
    EquipmentListCardComponent.prototype.confirm = function () {
        var _this = this;
        if (!this.targetEvent._id) {
            this.modalRef.hide();
            return;
        }
        if (this.data.available < this.rentNumber) {
            alert('don not have enough equipments');
            this.modalRef.hide();
            return;
        }
        console.log('Confirmed!');
        var r = {
            event: this.targetEvent._id,
            equipment: this.data._id,
            provider: this.provider._id,
            quantity: this.rentNumber
        };
        this.rentService.rentEquipmentForEvent(r)
            .then(function () { return _this.loadMyEvents(); })
            .then(function () {
            _this.loadEquipments();
            alert('rent success');
            _this.modalRef.hide();
        });
    };
    EquipmentListCardComponent.prototype.loadEquipments = function () {
        this.refreshEmitter.emit('refresh equipments');
    };
    EquipmentListCardComponent.prototype.loadMyEvents = function () {
        var _this = this;
        console.log('load');
        return this.userService.profile()
            .then(function (curUser) {
            return _this.eventService.findEventsForOrganizer(curUser._id);
        })
            .then(function (events) {
            return _this.myEvents = events;
        });
    };
    EquipmentListCardComponent.prototype.decline = function () {
        this.loadEquipments();
        this.modalRef.hide();
    };
    EquipmentListCardComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log(this.data);
        this.getProvider()
            .then(function () { return _this.loadMyEvents(); });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_equipment_model_client__WEBPACK_IMPORTED_MODULE_1__["Equipment"])
    ], EquipmentListCardComponent.prototype, "data", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], EquipmentListCardComponent.prototype, "refreshEmitter", void 0);
    EquipmentListCardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-equipment-list-card',
            template: __webpack_require__(/*! ./equipment-list-card.component.html */ "./src/app/equipment-list-card/equipment-list-card.component.html"),
            styles: [__webpack_require__(/*! ./equipment-list-card.component.css */ "./src/app/equipment-list-card/equipment-list-card.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _services_equipmentRenting_service_client__WEBPACK_IMPORTED_MODULE_10__["EquipmentRentingServiceClient"],
            _services_user_service_client__WEBPACK_IMPORTED_MODULE_7__["UserServiceClient"],
            _services_event_service_client__WEBPACK_IMPORTED_MODULE_8__["EventServiceClient"],
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__["BsModalService"],
            _services_provider_service_client__WEBPACK_IMPORTED_MODULE_3__["ProviderServiceClient"]])
    ], EquipmentListCardComponent);
    return EquipmentListCardComponent;
}());



/***/ }),

/***/ "./src/app/equipment-list/equipment-list.component.css":
/*!*************************************************************!*\
  !*** ./src/app/equipment-list/equipment-list.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\r\n  /*display: inline-block;*/\r\n  border: none;\r\n  /*width: 100%*/\r\n  /*width: 350px;*/\r\n}\r\n\r\n.container {\r\n  margin-top: 80px;\r\n}\r\n\r\n.card-container{\r\n  padding: 0;\r\n  margin-bottom: 15px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/equipment-list/equipment-list.component.html":
/*!**************************************************************!*\
  !*** ./src/app/equipment-list/equipment-list.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n\r\n    <div *ngFor=\"let equipment of equipments\" class=\"card-container col-md-6 col-lg-4\">\r\n      <app-equipment-list-card [data]=\"equipment\" (refreshEmitter)=\"loadEquipments()\"></app-equipment-list-card>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/equipment-list/equipment-list.component.ts":
/*!************************************************************!*\
  !*** ./src/app/equipment-list/equipment-list.component.ts ***!
  \************************************************************/
/*! exports provided: EquipmentListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EquipmentListComponent", function() { return EquipmentListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_equipment_service_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/equipment.service.client */ "./src/app/services/equipment.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EquipmentListComponent = /** @class */ (function () {
    function EquipmentListComponent(service) {
        this.service = service;
        this.equipments = [];
    }
    EquipmentListComponent.prototype.loadEquipments = function () {
        var _this = this;
        return this.service.findAllEquipments()
            .then(function (equipments) {
            equipments.forEach(function (equipment) {
                // console.log(event);
                if (equipment.photos.length === 0) {
                    equipment.photos.push('https://images.unsplash.com/p' +
                        'hoto-1493244040629-496f6d136cc4?ixlib=rb-0.3.5&ixi' +
                        'd=eyJhcHBfaWQiOjEyMDd9&s=e0e94d283d8461fa30ef9e7f9' +
                        '32b41b5&auto=format&fit=crop&w=800&q=60');
                }
            });
            _this.equipments = equipments;
        });
    };
    EquipmentListComponent.prototype.ngOnInit = function () {
        this.loadEquipments();
    };
    EquipmentListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-equipment-list',
            template: __webpack_require__(/*! ./equipment-list.component.html */ "./src/app/equipment-list/equipment-list.component.html"),
            styles: [__webpack_require__(/*! ./equipment-list.component.css */ "./src/app/equipment-list/equipment-list.component.css")]
        }),
        __metadata("design:paramtypes", [_services_equipment_service_client__WEBPACK_IMPORTED_MODULE_1__["EquipmentServiceClient"]])
    ], EquipmentListComponent);
    return EquipmentListComponent;
}());



/***/ }),

/***/ "./src/app/event-card-for-profile/event-card-for-profile.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/event-card-for-profile/event-card-for-profile.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".button-pos {\r\n  margin-top: 2px;\r\n  margin-right: 5px;\r\n  float: right;\r\n\r\n}\r\n\r\n.button-container {\r\n  position: relative;\r\n}\r\n\r\n.button-container i {\r\n  color: red;\r\n  text-shadow: 2px 2px 2px #aaa;\r\n}\r\n\r\n/*button {*/\r\n\r\n/*position: absolute;*/\r\n\r\n/*}*/\r\n\r\n#unenrollBtn {\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.wbdv-blur {\r\n  -webkit-filter: blur(5px); /* Safari 6.0 - 9.0 */\r\n  filter: blur(5px);\r\n  border-radius: 25px;\r\n\r\n}\r\n\r\n.wbdv-imageContainer {\r\n  position: relative;\r\n  border-radius: 25px 25px 0 0;\r\n  overflow:hidden;\r\n  /*background-color: #0b2e13;*/\r\n  /*-moz-border-radius: 20px;*/\r\n  /*margin:0 auto;*/\r\n}\r\n\r\n.wbdv-text-block {\r\n  position: absolute;\r\n  border-radius: 25px;\r\n  top: 10%;\r\n  left: 5%;\r\n  right: 5%;\r\n\r\n\r\n  color: white;\r\n  padding-left: 20px;\r\n  padding-right: 20px;\r\n}\r\n\r\n.card {\r\n  border-radius: 30px;\r\n  box-shadow: 0 16px 24px 2px rgba(0, 0, 0, .1);\r\n  position: relative;\r\n}\r\n\r\n.card-title {\r\n  margin-bottom: 0;\r\n\r\n}\r\n\r\n.iframe-pos {\r\n  top: 0;\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 100%;\r\n  border-radius: 25px;\r\n}\r\n\r\n.iframe-container {\r\n  border-radius: 25px;\r\n  -webkit-border-radius: 20px;\r\n  /*position: absolute;*/\r\n  position: relative;\r\n  overflow: auto;\r\n  top: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n.avatar-container {\r\n  margin-left: 10%;\r\n  margin-bottom: 8px;\r\n  display: inline-block;\r\n  width: 50px;\r\n  padding: 0;\r\n}\r\n\r\n.avatar {\r\n  padding: 0;\r\n  border-radius: 50%;\r\n  background-image: url('https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b6ded683923a678ad03fae323169beb4&auto=format&fit=crop&w=700&q=60');\r\n  width: 100%;\r\n  padding-bottom: 100%;\r\n  background-size: cover;\r\n  background-position: center;\r\n  cursor: pointer;\r\n}\r\n\r\n.host-info {\r\n  display: inline-block;\r\n  margin-top: 0;\r\n  padding-left: 5%;\r\n}\r\n\r\n.host-info div {\r\n  /*padding-top: 5px;*/\r\n  /*margin-bottom: 20px;*/\r\n  font-family: \"Bradley Hand\";\r\n  overflow: hidden;\r\n  white-space: nowrap;\r\n}\r\n\r\nh6 {\r\n  display: inline-block;\r\n  padding-top: 15px;\r\n}\r\n\r\n.icon-group {\r\n  position: absolute;\r\n  top:45%;\r\n  right: 5%\r\n}\r\n\r\n.icon {\r\n  margin: 5px;\r\n}\r\n\r\n.delete {\r\n  color: red\r\n}\r\n\r\n.edit {\r\n  color: #b3d7ff;\r\n}\r\n\r\n@media (min-width: 400px) {\r\n  .card-columns {\r\n    -webkit-column-count: 1;\r\n            column-count: 1;\r\n  }\r\n}\r\n\r\n@media (min-width: 770px) {\r\n  .card-columns {\r\n    -webkit-column-count: 2;\r\n            column-count: 2;\r\n  }\r\n}\r\n\r\n.icon-group i {\r\n  cursor: pointer;\r\n}\r\n"

/***/ }),

/***/ "./src/app/event-card-for-profile/event-card-for-profile.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/event-card-for-profile/event-card-for-profile.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card text-center\">\r\n  <div class=\"card-block\">\r\n    <h6 class=\"card-subtitle mb-2 text-muted\" *ngIf=\"data.endTime\">{{data.startTime}} to {{data.endTime}}</h6>\r\n    <h6 class=\"card-subtitle mb-2 text-muted\" *ngIf=\"!data.endTime && data.startTime\">{{data.startTime}}</h6>\r\n    <span class=\"button-pos\">\r\n    </span>\r\n\r\n    <a [routerLink]=\"['/eventDetail/' + data._id]\">\r\n      <h4 class=\"card-title\">{{data.title}}</h4>\r\n    </a>\r\n    <div class=\"card-body\">\r\n      <div class=\"row\">\r\n        <div class=\"avatar-container\" *ngIf=\"organizer.profilePhoto && type === 'pa'\">\r\n          <div class=\"avatar\" [routerLink]=\"['/profile/' + organizer._id]\" [ngStyle]=\"{'background-image': 'url(' + organizer.profilePhoto + ')'}\"></div>\r\n        </div>\r\n\r\n        <div class=\"host-info\">\r\n          <div class=\"input-group-append\">\r\n          <div class=\"text-sm-left text-muted\" *ngIf=\"type === 'pa'\">\r\n            Hosted by\r\n            <span>{{organizer && organizer.firstName}}</span>\r\n            <span>{{organizer && ' ' + organizer.lastName}}</span>\r\n          </div>\r\n          </div>\r\n          <div class=\"text-sm-left\">\r\n            <span class=\"text-muted\">Event level: </span>\r\n            <span>{{data.level}}</span>\r\n          </div>\r\n          <!--<button class=\"btn btn-outline-danger\" (click)=\"unenrollment()\" *ngIf=\"type === 'pa' && isSame\">Un-enroll</button>-->\r\n        </div>\r\n      </div>\r\n      <button id=\"unenrollBtn\" class=\"btn btn-outline-danger float-right\" (click)=\"unenrollment()\" *ngIf=\"type === 'pa' && isSame\">Un-enroll</button>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"icon-group\" *ngIf=\"type === 'oa' && isSame\">\r\n    <i class=\"far fa-edit fa-2x icon edit\" [routerLink]=\"['/eventEditor/' + data._id]\"></i>\r\n    <i class=\"far fa-trash-alt fa-2x icon delete\" (click)=\"deleteEvent()\"></i>\r\n  </div>\r\n\r\n\r\n\r\n\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/event-card-for-profile/event-card-for-profile.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/event-card-for-profile/event-card-for-profile.component.ts ***!
  \****************************************************************************/
/*! exports provided: EventCardForProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventCardForProfileComponent", function() { return EventCardForProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_EventCard_model_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/EventCard.model.client */ "./src/app/models/EventCard.model.client.ts");
/* harmony import */ var _models_user_model_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/user.model.client */ "./src/app/models/user.model.client.ts");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _services_event_service_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/event.service.client */ "./src/app/services/event.service.client.ts");
/* harmony import */ var _services_enrollment_service_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/enrollment.service.client */ "./src/app/services/enrollment.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var EventCardForProfileComponent = /** @class */ (function () {
    function EventCardForProfileComponent(eventService, enrollmentService, service) {
        this.eventService = eventService;
        this.enrollmentService = enrollmentService;
        this.service = service;
        this.slideIndex = 0;
        this.organizer = new _models_user_model_client__WEBPACK_IMPORTED_MODULE_2__["User"]();
        this.updateEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.newEvents = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    EventCardForProfileComponent.prototype.getOrganizer = function () {
        var _this = this;
        console.log(this.data);
        return this.service.findUserById(this.data.organizer)
            .then(function (organizer) {
            console.log(organizer);
            if (!organizer.profilePhoto || organizer.profilePhoto === '') {
                organizer.profilePhoto = 'https://images.unsplash.com/photo-' +
                    '1495078065017-564723e7e3e7?ixlib=rb-0.3.5&ixid=eyJhcHBfa' +
                    'WQiOjEyMDd9&s=09093dcdf66dbcd2397b9dc19384a899&auto=forma' +
                    't&fit=crop&w=800&q=60';
            }
            return _this.organizer = organizer;
        });
    };
    EventCardForProfileComponent.prototype.unenrollment = function () {
        var _this = this;
        this.service
            .profile()
            .then(function (user) {
            if (user.error) {
                alert(user.error);
                return;
            }
            else {
                var enrollment = {
                    event: _this.data._id,
                    attendee: user._id
                };
                _this.enrollmentService
                    .unenrollAttendeeInEvent(enrollment)
                    .then(function () {
                    _this.enrollmentService
                        .findEnrollmentsForAttendee(user._id)
                        .then(function (events) {
                        var temp = [];
                        events.forEach(function (e) {
                            temp.push(e.event);
                        });
                        events = temp;
                        _this.sendMessage(events);
                    });
                });
            }
        });
    };
    EventCardForProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log(this.data);
        console.log('here');
        this.getOrganizer()
            .then(function () {
            console.log(_this.organizer);
            _this.service.profile()
                .then();
        });
    };
    EventCardForProfileComponent.prototype.sendMessage = function (message) {
        this.newEvents.emit(message);
    };
    EventCardForProfileComponent.prototype.refresh = function () {
        var _this = this;
        this.eventService
            .findEventsForOrganizer(this.organizer._id)
            .then(function (events) { return _this.sendMessage(events); });
    };
    EventCardForProfileComponent.prototype.deleteEvent = function () {
        var _this = this;
        if (confirm('Are you sure to delete the event?')) {
            this.eventService
                .deleteEvent(this.data._id)
                .then(function (res) {
                if (res.error) {
                    alert(res.error);
                }
                else {
                    _this.refresh();
                }
            });
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], EventCardForProfileComponent.prototype, "type", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_EventCard_model_client__WEBPACK_IMPORTED_MODULE_1__["EventCard"])
    ], EventCardForProfileComponent.prototype, "data", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], EventCardForProfileComponent.prototype, "updateEvent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], EventCardForProfileComponent.prototype, "newEvents", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], EventCardForProfileComponent.prototype, "isSame", void 0);
    EventCardForProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-event-card-for-profile',
            template: __webpack_require__(/*! ./event-card-for-profile.component.html */ "./src/app/event-card-for-profile/event-card-for-profile.component.html"),
            styles: [__webpack_require__(/*! ./event-card-for-profile.component.css */ "./src/app/event-card-for-profile/event-card-for-profile.component.css")]
        }),
        __metadata("design:paramtypes", [_services_event_service_client__WEBPACK_IMPORTED_MODULE_4__["EventServiceClient"],
            _services_enrollment_service_client__WEBPACK_IMPORTED_MODULE_5__["EnrollmentServiceClient"],
            _services_user_service_client__WEBPACK_IMPORTED_MODULE_3__["UserServiceClient"]])
    ], EventCardForProfileComponent);
    return EventCardForProfileComponent;
}());



/***/ }),

/***/ "./src/app/event-card/event-card.component.css":
/*!*****************************************************!*\
  !*** ./src/app/event-card/event-card.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".button-pos {\r\n  margin-top: 2px;\r\n  margin-right: 5px;\r\n  float: right;\r\n  z-index: 1;\r\n}\r\n\r\n.button-container {\r\n  position: relative;\r\n}\r\n\r\n.button-container i {\r\n  color: red;\r\n  text-shadow: 2px 2px 2px #aaa;\r\n}\r\n\r\nbutton {\r\n  position: absolute;\r\n}\r\n\r\n.wbdv-blur {\r\n  -webkit-filter: blur(5px); /* Safari 6.0 - 9.0 */\r\n  filter: blur(5px);\r\n  border-radius: 25px;\r\n\r\n}\r\n\r\n.wbdv-imageContainer {\r\n  position: relative;\r\n  border-radius: 25px 25px 0 0;\r\n  overflow:hidden;\r\n  /*background-color: #0b2e13;*/\r\n  /*-moz-border-radius: 20px;*/\r\n  /*margin:0 auto;*/\r\n}\r\n\r\n.wbdv-text-block {\r\n  position: absolute;\r\n  border-radius: 25px;\r\n  top: 10%;\r\n  left: 5%;\r\n  right: 5%;\r\n\r\n\r\n  color: white;\r\n  padding-left: 20px;\r\n  padding-right: 20px;\r\n}\r\n\r\n.card {\r\n  border-radius: 30px;\r\n  box-shadow: 0 16px 24px 2px rgba(0, 0, 0, .1)\r\n  /*0 6px 10px 5px rgba(0, 0, 0, .1),*/\r\n  /*0 8px 10px -5px rgba(0, 0, 0, .1);*/\r\n}\r\n\r\n.card-title {\r\n  margin-bottom: 0;\r\n}\r\n\r\n#title {\r\n  z-index: 3;\r\n}\r\n\r\n#title a {\r\n  color: black;\r\n  text-decoration: none;\r\n}\r\n\r\n.iframe-pos {\r\n  top: 0;\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 100%;\r\n  border-radius: 25px;\r\n  z-index: -1;\r\n}\r\n\r\n.iframe-pos-active {\r\n  z-index: 5;\r\n}\r\n\r\n.iframe-container {\r\n  border-radius: 25px;\r\n  -webkit-border-radius: 20px;\r\n  /*position: absolute;*/\r\n  position: relative;\r\n  overflow: auto;\r\n  top: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\niframe {\r\n  width:100%;\r\n  height:100%;\r\n\r\n}\r\n\r\nimg {\r\n  border-radius: 25px 25px 0 0;\r\n}\r\n\r\n.avatar-container {\r\n  margin-left: 10%;\r\n  margin-bottom: 8px;\r\n  display: inline-block;\r\n  width: 50px;\r\n  padding: 0;\r\n}\r\n\r\n.avatar {\r\n  padding: 0;\r\n  border-radius: 50%;\r\n  background-image: url('https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b6ded683923a678ad03fae323169beb4&auto=format&fit=crop&w=700&q=60');\r\n  width: 100%;\r\n  padding-bottom: 100%;\r\n  background-size: cover;\r\n  background-position: center;\r\n  cursor: pointer;\r\n}\r\n\r\n.host-info {\r\n  display: inline-block;\r\n  padding-left: 5%;\r\n  margin-top: 0;\r\n}\r\n\r\n.host-info div {\r\n  /*padding-top: 5px;*/\r\n  /*margin-bottom: 20px;*/\r\n  font-family: \"Bradley Hand\";\r\n  overflow: hidden;\r\n  white-space: nowrap;\r\n}\r\n\r\nh6 {\r\n  display: inline-block;\r\n  padding-top: 15px;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/event-card/event-card.component.html":
/*!******************************************************!*\
  !*** ./src/app/event-card/event-card.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card text-center\"\r\n     (mouseleave) =\"mouseLeave()\">\r\n\r\n    <carousel (activeSlideChange)=\"slideChanged($event)\" data-interval=\"false\" [showIndicators]=\"!(hasExtraInfo && inImage)\">\r\n      <slide *ngFor=\"let photo of data.photos\" >\r\n        <img [ngClass]=\"{'wbdv-blur': hasExtraInfo && inImage}\" src={{photo}} alt=\"first slide\" style=\"display: block; width: 100%;\">\r\n      </slide>\r\n    </carousel>\r\n\r\n  <div class=\"iframe-pos\" [ngClass]=\"{'iframe-pos-active': hasExtraInfo && inImage}\">\r\n    <div class=\"iframe-container\">\r\n      <iframe *ngIf=\"hasExtraInfo && inImage\"\r\n              [src]='getIframeSource()'\r\n              frameborder=\"0\"\r\n              scrolling=false\r\n              allow=\"autoplay; encrypted-media\"\r\n              style=\"overflow:hidden;\"\r\n              ></iframe>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"card-block\">\r\n    <h6 class=\"card-subtitle mb-2 text-muted\">{{data.startTime}}</h6>\r\n    <span class=\"button-pos\">\r\n      <span class=\"button-container\">\r\n         <span (click) = \"mouseEnter()\">\r\n          <i *ngIf=\"hasExtraInfo && !inImage\"\r\n             class=\"fab fa-youtube fa-2x\"\r\n          ></i>\r\n        </span>\r\n      </span>\r\n    </span>\r\n\r\n    <h4 id='title' class=\"card-title\">\r\n      <span>\r\n        <a [routerLink]=\"['/eventDetail/' + data._id]\">{{data.title}}</a>\r\n      </span>\r\n    </h4>\r\n    <div class=\"card-body\">\r\n    <div class=\"row\">\r\n      <div class=\"avatar-container\" *ngIf=\"organizer.profilePhoto\">\r\n        <div class=\"avatar\" [routerLink]=\"['/profile/' + organizer._id]\" [ngStyle]=\"{'background-image': 'url(' + organizer.profilePhoto + ')'}\">\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"host-info\">\r\n        <div class=\"text-sm-left text-muted\">\r\n          Hosted by\r\n          <span>{{organizer && organizer.username}}</span>\r\n          <!--<span>{{organizer && organizer.firstName}}</span>-->\r\n          <!--<span>{{organizer && ' ' + organizer.lastName}}</span>-->\r\n        </div>\r\n        <div class=\"text-sm-left\">\r\n          <span class=\"text-muted\">From </span>\r\n          <span>{{organizer.location}}</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n"

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
/* harmony import */ var _models_user_model_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/user.model.client */ "./src/app/models/user.model.client.ts");
/* harmony import */ var _constants_dateConstant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constants/dateConstant */ "./src/app/constants/dateConstant.ts");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/user.service.client */ "./src/app/services/user.service.client.ts");
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
    function EventCardComponent(sanitizer, service) {
        this.sanitizer = sanitizer;
        this.service = service;
        this.inImage = false;
        this.hasExtraInfo = false;
        this.months = _constants_dateConstant__WEBPACK_IMPORTED_MODULE_4__["months"];
        this.dates = _constants_dateConstant__WEBPACK_IMPORTED_MODULE_4__["dates"];
        this.slideIndex = 0;
        this.organizer = new _models_user_model_client__WEBPACK_IMPORTED_MODULE_3__["User"]();
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
    EventCardComponent.prototype.getOrganizer = function () {
        var _this = this;
        return this.service.findUserById(this.data.organizer)
            .then(function (organizer) {
            if (!organizer.profilePhoto || organizer.profilePhoto === '') {
                organizer.profilePhoto = 'https://images.unsplash.com/photo-' +
                    '1495078065017-564723e7e3e7?ixlib=rb-0.3.5&ixid=eyJhcHBfa' +
                    'WQiOjEyMDd9&s=09093dcdf66dbcd2397b9dc19384a899&auto=forma' +
                    't&fit=crop&w=800&q=60';
            }
            return _this.organizer = organizer;
        });
    };
    EventCardComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log(this.data);
        this.getOrganizer()
            .then(function () {
            if (_this.data.video && _this.data.video !== '') {
                _this.hasExtraInfo = true;
            }
        });
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
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"],
            _services_user_service_client__WEBPACK_IMPORTED_MODULE_5__["UserServiceClient"]])
    ], EventCardComponent);
    return EventCardComponent;
}());



/***/ }),

/***/ "./src/app/event-description-widget-editor/event-description-widget-editor.component.css":
/*!***********************************************************************************************!*\
  !*** ./src/app/event-description-widget-editor/event-description-widget-editor.component.css ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#editIcon {\r\n  margin-right: 20px;\r\n  cursor: pointer;\r\n}\r\n\r\n#deleteIcon {\r\n  cursor: pointer;\r\n}\r\n\r\n.saveBtn {\r\n  margin-top: 5px;\r\n}\r\n\r\n#listOrder {\r\n  margin-bottom: 5px;\r\n}\r\n\r\n.delete-span {\r\n  display: inline-block;\r\n  margin-right: 3px;\r\n  float: right;\r\n\r\n}\r\n\r\n.edit-span {\r\n  display: inline-block;\r\n  margin-right: 4px;\r\n  float: right;\r\n}\r\n"

/***/ }),

/***/ "./src/app/event-description-widget-editor/event-description-widget-editor.component.html":
/*!************************************************************************************************!*\
  !*** ./src/app/event-description-widget-editor/event-description-widget-editor.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <span class=\"span-box\">\r\n\r\n    <span id=\"deleteIcon\" class=\"delete-span\" (click)=\"deleteWidget(widget)\">\r\n      <i class=\"far fa-trash-alt\"></i>\r\n    </span>\r\n\r\n    <span id=\"editIcon\" class=\"edit-span\" (click)=\"editWidget()\">\r\n      <i class=\"fas fa-pencil-alt\"></i>\r\n    </span>\r\n  </span>\r\n  <div *ngIf=\"widget.type === 'heading'\">\r\n    <h1>{{widget.data}}</h1>\r\n  </div>\r\n  <div *ngIf=\"widget.type === 'paragraph'\">\r\n    <p>{{widget.data}}</p>\r\n  </div>\r\n  <div *ngIf=\"widget.type === 'link'\">\r\n    <a href={{widget.data}}>{{widget.data}}</a>\r\n  </div>\r\n\r\n  <div *ngIf=\"widget.type === 'unorderedList'\">\r\n    <ul>\r\n      <li *ngFor=\"let item of splitList(widget.data)\">{{item}}</li>\r\n    </ul>\r\n  </div>\r\n\r\n  <div *ngIf=\"widget.type === 'orderedList'\">\r\n    <ol>\r\n      <li *ngFor=\"let item of splitList(widget.data)\">{{item}}</li>\r\n    </ol>\r\n  </div>\r\n\r\n    <div *ngIf=\"widget.type === 'heading' && !isEditorHidden\">\r\n      <input\r\n        [(ngModel)]=\"newWidget.data\"\r\n        class=\"form-control\"\r\n        placeholder=\"Heading\">\r\n      <button class=\"btn btn-outline-dark saveBtn\" (click)=\"updateWidget()\">Save Heading</button>\r\n    </div>\r\n\r\n    <div *ngIf=\"widget.type === 'paragraph' && !isEditorHidden\">\r\n      <textarea\r\n        [(ngModel)]=\"newWidget.data\"\r\n        class=\"form-control\"\r\n        placeholder=\"Paragraph text\">\r\n      </textarea>\r\n      <button class=\"btn btn-outline-dark saveBtn\" (click)=\"updateWidget()\">Save Paragraph</button>\r\n    </div>\r\n\r\n    <div *ngIf=\"widget.type === 'link' && !isEditorHidden\">\r\n      <input\r\n        [(ngModel)]=\"newWidget.data\"\r\n        class=\"form-control\"\r\n        placeholder=\"Link URL\">\r\n      <button  class=\"btn btn-outline-dark saveBtn\" (click)=\"updateWidget()\">Save Link</button>\r\n    </div>\r\n\r\n    <div *ngIf=\"(widget.type === 'orderedList' || widget.type === 'unorderedList') && !isEditorHidden\">\r\n      <select id=\"listOrder\" class=\"form-control\" [value]=\"this.newWidget.type\" (change)=\"setListType()\" >\r\n        <option value=\"unorderedList\">Unordered list</option>\r\n        <option value=\"orderedList\">Ordered list</option>\r\n      </select>\r\n      <textarea\r\n        [(ngModel)]=\"newWidget.data\"\r\n        class=\"form-control\"\r\n        placeholder=\"List Item\">\r\n            </textarea>\r\n      <button class=\"btn btn-outline-dark saveBtn\" (click)=\"updateWidget()\">Save List</button>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/event-description-widget-editor/event-description-widget-editor.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/event-description-widget-editor/event-description-widget-editor.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: EventDescriptionWidgetEditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventDescriptionWidgetEditorComponent", function() { return EventDescriptionWidgetEditorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_widget_model_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/widget.model.client */ "./src/app/models/widget.model.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EventDescriptionWidgetEditorComponent = /** @class */ (function () {
    function EventDescriptionWidgetEditorComponent() {
        this.deleteEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.editEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isEditorHidden = true;
        this.newWidget = new _models_widget_model_client__WEBPACK_IMPORTED_MODULE_1__["Widget"]('paragraph', '');
    }
    EventDescriptionWidgetEditorComponent.prototype.splitList = function (data) {
        return data.split(/\r?\n/);
    };
    EventDescriptionWidgetEditorComponent.prototype.setListType = function () {
        if (this.newWidget.type === 'unorderedList') {
            this.newWidget.type = 'orderedList';
        }
        else {
            this.newWidget.type = 'unorderedList';
        }
    };
    EventDescriptionWidgetEditorComponent.prototype.editWidget = function () {
        this.isEditorHidden = !this.isEditorHidden;
        this.newWidget.type = this.widget.type;
        this.newWidget.data = this.widget.data;
    };
    EventDescriptionWidgetEditorComponent.prototype.updateWidget = function () {
        this.editEmitter.emit([this.widget, this.newWidget]);
    };
    EventDescriptionWidgetEditorComponent.prototype.deleteWidget = function (widget) {
        this.deleteEmitter.emit(widget);
    };
    EventDescriptionWidgetEditorComponent.prototype.ngOnInit = function () {
        // this.newWidget.type = this.widget.type;
        // this.newWidget.data = this.widget.data;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_widget_model_client__WEBPACK_IMPORTED_MODULE_1__["Widget"])
    ], EventDescriptionWidgetEditorComponent.prototype, "widget", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], EventDescriptionWidgetEditorComponent.prototype, "deleteEmitter", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], EventDescriptionWidgetEditorComponent.prototype, "editEmitter", void 0);
    EventDescriptionWidgetEditorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-event-description-widget-editor',
            template: __webpack_require__(/*! ./event-description-widget-editor.component.html */ "./src/app/event-description-widget-editor/event-description-widget-editor.component.html"),
            styles: [__webpack_require__(/*! ./event-description-widget-editor.component.css */ "./src/app/event-description-widget-editor/event-description-widget-editor.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EventDescriptionWidgetEditorComponent);
    return EventDescriptionWidgetEditorComponent;
}());



/***/ }),

/***/ "./src/app/event-detail/event-detail.component.css":
/*!*********************************************************!*\
  !*** ./src/app/event-detail/event-detail.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.content-of-modal .card {\r\n  background-color: #9fcdff;\r\n  margin: 5px;\r\n  padding: 10px;\r\n}\r\n\r\n.content-of-modal .span-box {\r\n\r\n}\r\n\r\n.content-of-modal .delete-span {\r\n  display: inline-block;\r\n  margin-right: 3px;\r\n  float: right;\r\n\r\n}\r\n\r\n.content-of-modal .edit-span {\r\n  display: inline-block;\r\n  margin-right: 4px;\r\n  float: right;\r\n}\r\n\r\n#eventStart {\r\n  margin-bottom: 10px;\r\n}\r\n\r\n#eventEnd{\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.meta-div {\r\n  margin-top: 40px;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.media-container {\r\n  border: none;\r\n  /*max-height: 300px;*/\r\n}\r\n\r\n.avatar-container {\r\n  margin-left: 10%;\r\n  margin-bottom: 8px;\r\n  display: inline-block;\r\n  width: 50px;\r\n  padding: 0;\r\n}\r\n\r\n.avatar {\r\n  padding: 0;\r\n  border-radius: 50%;\r\n  background-image: url('https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b6ded683923a678ad03fae323169beb4&auto=format&fit=crop&w=700&q=60');\r\n  width: 100%;\r\n  padding-bottom: 100%;\r\n  background-size: cover;\r\n  background-position: center;\r\n  cursor: pointer;\r\n}\r\n\r\n.carousel-container {\r\n  border-radius: 25px;\r\n  -webkit-border-radius: 20px;\r\n\r\n  position: relative;\r\n  /*overflow: hidden;*/\r\n  top: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\ncarousel {\r\n  width: 100%;\r\n  height: 100%;\r\n  position: relative;\r\n}\r\n\r\n/*.slide {*/\r\n\r\n/*width: 100%;*/\r\n\r\n/*height: 100%;*/\r\n\r\n/*position: relative;*/\r\n\r\n/*}*/\r\n\r\n.image  {\r\n  padding: 0;\r\n  border: #1b1e21 solid 2px;\r\n  border-radius: 25px;\r\n  background-image: url('https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b6ded683923a678ad03fae323169beb4&auto=format&fit=crop&w=700&q=60');\r\n  width: 100%;\r\n  height: 100%;\r\n  padding-bottom: 100%;\r\n  background-size: cover;\r\n  background-position: center;\r\n\r\n}\r\n\r\n.event-meda {\r\n  border: none;\r\n}\r\n\r\n.iframe-pos {\r\n  top: 0;\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 100%;\r\n  /*border-radius: 25px;*/\r\n}\r\n\r\n.iframe-container {\r\n  border-radius: 25px;\r\n  -webkit-border-radius: 20px;\r\n  /*position: absolute;*/\r\n  position: relative;\r\n  overflow: hidden;\r\n  top: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\niframe {\r\n  width:100%;\r\n  height:100%;\r\n\r\n}\r\n\r\n.button-container i {\r\n  color: red;\r\n  text-shadow: 2px 2px 2px #aaa;\r\n}\r\n\r\n.equipment-card-wrapper {\r\n  padding-bottom: 10px;\r\n}\r\n\r\n#organizerInfoDiv {\r\n  margin-top: 45px;\r\n}\r\n\r\n.badge {\r\n  margin-left: 8px;\r\n}\r\n\r\n#youtube-icon {\r\n  margin-right: 60px;\r\n  cursor: pointer;\r\n}\r\n"

/***/ }),

/***/ "./src/app/event-detail/event-detail.component.html":
/*!**********************************************************!*\
  !*** ./src/app/event-detail/event-detail.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<div class=\"container\">-->\r\n<!--this page shows event details-->\r\n<!--</div>-->\r\n\r\n<div class=\"card meta-div\" *ngIf=\"isOrganizerLoaded\">\r\n  <div class=\"container\" (mouseleave) =\"mouseLeave()\">\r\n    <div class=\"row meta-row\">\r\n      <div class=\"col-md-6 meta-div\" >\r\n        <div class=\"card media-container\">\r\n          <div class=\"carousel-container\">\r\n            <carousel data-interval=\"false\"\r\n                      [showIndicators]=\"!(hasExtraInfo && inImage)\">\r\n              <slide class=\"slide\" *ngFor=\"let photo of event.photos\" >\r\n                <div class=\"image\"\r\n                     [ngClass]=\"{'wbdv-blur': hasExtraInfo && inImage}\"\r\n                     [ngStyle]=\"{'background-image': 'url(' + photo + ')'}\">\r\n                </div>\r\n                <!--<img [ngClass]=\"{'wbdv-blur': hasExtraInfo && inImage}\"-->\r\n                <!--src={{photo}} alt=\"first slide\">-->\r\n              </slide>\r\n            </carousel>\r\n          </div>\r\n          <div class=\"iframe-pos\">\r\n            <div class=\"iframe-container\">\r\n              <iframe *ngIf=\"hasExtraInfo && inImage\"\r\n                      [src]='getIframeSource()'\r\n                      frameborder=\"0\"\r\n                      scrolling=false\r\n                      allow=\"encrypted-media\"\r\n                      style=\"overflow:hidden;\"\r\n              ></iframe>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n\r\n\r\n\r\n\r\n      <div id=\"organizerInfoDiv\" class=\"col-md-6\">\r\n        <div class=\"card event-meda\">\r\n\r\n          <div class=\"input-group-append\">\r\n            <h2 id=\"eventTitleDisplay\" class=\"\">{{event.title}}</h2>\r\n\r\n          </div>\r\n\r\n\r\n          <div class=\"row\" *ngIf=\"isOrganizerLoaded\">\r\n            <div class=\"avatar-container col-3\">\r\n              <div class=\"avatar\" [routerLink]=\"['/profile/' + organizer._id]\"\r\n                   [ngStyle]=\"{'background-image': 'url(' + organizer.profilePhoto + ')'}\">\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"host-info col-7\">\r\n              <div>\r\n              <span class=\"button-pos\">\r\n                <span class=\"button-container\">\r\n                  <span id=\"youtube-icon\" (click) = \"mouseEnter()\">\r\n                    <i *ngIf='hasVideo()'\r\n                       id=\"youtubeIcon\"\r\n                       class=\"fab fa-youtube fa-2x\">\r\n                    </i>\r\n                  </span>\r\n                  <button class=\"btn btn-primary\" *ngIf=\"!isEnrolled\" (click)=\"enrollEvent()\">Enroll</button>\r\n                  <button class=\"btn btn-danger\" *ngIf=\"isEnrolled\" (click)=\"unenrollEvent()\">Unenroll</button>\r\n\r\n                </span>\r\n              </span>\r\n              </div>\r\n\r\n              <div class=\"text-sm-left text-muted\">\r\n                Hosted by\r\n                <span>{{organizer && organizer.firstName}}</span>\r\n                <span>{{organizer && ' ' + organizer.lastName}}</span>\r\n              </div>\r\n              <div class=\"text-sm-left\">\r\n                <span class=\"text-muted\">From </span>\r\n                <span>{{organizer.location}}</span>\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n        </div>\r\n\r\n        <div id=\"tagsDisplay\">\r\n          <hr>\r\n          <p>This event features :</p>\r\n          <div class=\"amenity_list\">\r\n            <span *ngFor=\"let tag of this.event.tags\" class=\"featureTag badge badge-info amenity_item\">{{tag}}</span>\r\n          </div>\r\n        </div>\r\n\r\n\r\n\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-12 col-md-8\">\r\n      <h2>Descriptions: </h2>\r\n      <!--<div>-->\r\n      <!--<div>{{event.video}}</div>-->\r\n      <!--<iframe [src]='event.video | safe'> </iframe>-->\r\n      <!--</div>-->\r\n\r\n      <div *ngFor=\"let widget of this.event.description\">\r\n        <div *ngIf=\"widget.type === 'heading'\">\r\n          <h1>{{widget.data}}</h1>\r\n        </div>\r\n        <div *ngIf=\"widget.type === 'paragraph'\">\r\n          <p>{{widget.data}}</p>\r\n        </div>\r\n        <div *ngIf=\"widget.type === 'link'\">\r\n          <a href={{widget.data}}>{{widget.data}}</a>\r\n        </div>\r\n\r\n        <div *ngIf=\"widget.type === 'unorderedList'\">\r\n          <ul >\r\n            <li *ngFor=\"let item of splitList(widget.data)\">{{item}}</li>\r\n          </ul>\r\n        </div>\r\n\r\n        <div *ngIf=\"widget.type === 'orderedList'\">\r\n          <ol>\r\n            <li *ngFor=\"let item of splitList(widget.data)\">{{item}}</li>\r\n          </ol>\r\n        </div>\r\n        <hr>\r\n\r\n      </div>\r\n      <div *ngIf=\"event.attendee.length > 0\">\r\n        <app-attendee-list [attendeeIds]=\"event.attendee\"></app-attendee-list>\r\n        <hr>\r\n      </div>\r\n\r\n      <div *ngIf=\"event._id && event._id !== ''\">\r\n        <app-discussion-board [eventId]=\"event._id\" ></app-discussion-board>\r\n      </div>\r\n\r\n    </div>\r\n\r\n    <div class=\"col-sm-12 col-md-4\">\r\n      <div id=\"eventStart\">\r\n        Event Start:\r\n        {{event.startTime}}\r\n        <!--{{dates[event.start.getDay()]}}, {{months[event.start.getMonth()]}} {{event.start.getDate()}}-->\r\n      </div>\r\n\r\n      <div id=\"eventEnd\">\r\n        Event End:\r\n        {{event.endTime}}\r\n        <!--{{dates[event.end.getDay()]}}, {{months[event.end.getMonth()]}} {{event.end.getDate()}}-->\r\n\r\n      </div>\r\n      <hr>\r\n\r\n      <div>\r\n        <h3>Target Site: </h3>\r\n        <app-site-list-card *ngIf=\"targetSite\" [data]=\"targetSite\"></app-site-list-card>\r\n        <div *ngIf=\"equipments\">\r\n          <hr>\r\n        <h3>Equipments: </h3>\r\n          <div *ngFor=\"let equipment of equipments\" class=\"equipment-card-wrapper\">\r\n            <app-rent-equipment-card\r\n              [data]=\"equipment.equipment\"\r\n              [quantity]=\"equipment.quantity\">\r\n            </app-rent-equipment-card>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n"

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
/* harmony import */ var _models_EventCard_model_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/EventCard.model.client */ "./src/app/models/EventCard.model.client.ts");
/* harmony import */ var _constants_dateConstant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/dateConstant */ "./src/app/constants/dateConstant.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _models_user_model_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/user.model.client */ "./src/app/models/user.model.client.ts");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _services_event_service_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/event.service.client */ "./src/app/services/event.service.client.ts");
/* harmony import */ var _models_widget_model_client__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../models/widget.model.client */ "./src/app/models/widget.model.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_enrollment_service_client__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/enrollment.service.client */ "./src/app/services/enrollment.service.client.ts");
/* harmony import */ var _services_site_service_client__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../services/site.service.client */ "./src/app/services/site.service.client.ts");
/* harmony import */ var _services_reservation_service_client__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../services/reservation.service.client */ "./src/app/services/reservation.service.client.ts");
/* harmony import */ var _services_equipmentRenting_service_client__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../services/equipmentRenting.service.client */ "./src/app/services/equipmentRenting.service.client.ts");
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
    function EventDetailComponent(modalService, sanitizer, userService, siteService, reservationService, rentService, eventService, enrollmentService, route) {
        var _this = this;
        this.modalService = modalService;
        this.sanitizer = sanitizer;
        this.userService = userService;
        this.siteService = siteService;
        this.reservationService = reservationService;
        this.rentService = rentService;
        this.eventService = eventService;
        this.enrollmentService = enrollmentService;
        this.route = route;
        // event: EventCard = new EventCard();
        this.isEnrolled = false;
        this.isOrganizerLoaded = false;
        this.list = '';
        this.listType = 'unorderedList';
        this.organizer = new _models_user_model_client__WEBPACK_IMPORTED_MODULE_4__["User"]();
        this.organizer1 = {
            _id: '',
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
                't=crop&w=800&q=60',
            role: 'organizer'
        };
        this.attendee1 = {
            _id: '',
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
                't=crop&w=800&q=60',
            role: 'organizer',
        };
        this.attendee2 = {
            _id: '',
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
                '1e&auto=format&fit=crop&w=800&q=60',
            role: 'organizer',
        };
        this.attendee3 = {
            _id: '',
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
                '=crop&w=800&q=60',
            role: 'organizer',
        };
        this.event = new _models_EventCard_model_client__WEBPACK_IMPORTED_MODULE_1__["EventCard"]();
        this.inImage = false;
        this.hasExtraInfo = false;
        this.months = _constants_dateConstant__WEBPACK_IMPORTED_MODULE_2__["months"];
        this.dates = _constants_dateConstant__WEBPACK_IMPORTED_MODULE_2__["dates"];
        this.slideIndex = 0;
        this.config = {
            animated: true,
            keyboard: true,
            class: 'my-modal'
        };
        this.route.params.subscribe(function (params) { return _this.setParams(params); });
    }
    EventDetailComponent.prototype.setParams = function (params) {
        console.log(params);
        this.eventId = params['eventId'];
        console.log(this.eventId);
    };
    EventDetailComponent.prototype.openModal = function (template) {
        this.modalRef = this.modalService
            .show(template, Object.assign({}, { class: 'my-modal modal-lg modal-dialog-centered' }));
    };
    EventDetailComponent.prototype.confirm = function () {
        var _this = this;
        this.message = 'Confirmed!';
        console.log('Confirmed!');
        this.eventService.updateEvent(this.event)
            .then(function () { return _this.refreshEvent(); })
            .then(function () { return _this.modalRef.hide(); });
    };
    EventDetailComponent.prototype.decline = function () {
        var _this = this;
        this.message = 'Declined!';
        this.refreshEvent().then(function () { return _this.modalRef.hide(); });
        console.log('Declined!');
    };
    EventDetailComponent.prototype.addImageUrl = function () {
        console.log(this.imgUrl);
        this.event.photos.push(this.imgUrl);
        this.imgUrl = '';
    };
    EventDetailComponent.prototype.deleteImageUrl = function (imgUrl) {
        if (this.event.photos.includes(imgUrl)) {
            var index = this.event.photos.indexOf(imgUrl);
            this.event.photos.splice(index, 1);
        }
    };
    EventDetailComponent.prototype.addHeading = function () {
        this.event.description.push(new _models_widget_model_client__WEBPACK_IMPORTED_MODULE_8__["Widget"]('heading', this.heading));
        this.paragraph = '';
    };
    EventDetailComponent.prototype.addParagraph = function () {
        this.event.description.push(new _models_widget_model_client__WEBPACK_IMPORTED_MODULE_8__["Widget"]('paragraph', this.paragraph));
        this.paragraph = '';
    };
    EventDetailComponent.prototype.addLink = function () {
        this.event.description.push(new _models_widget_model_client__WEBPACK_IMPORTED_MODULE_8__["Widget"]('link', this.linkUrl));
    };
    EventDetailComponent.prototype.setListType = function () {
        if (this.listType === 'orderedList') {
            this.listType = 'unorderedList';
        }
        else {
            this.listType = 'orderedList';
        }
    };
    EventDetailComponent.prototype.addList = function () {
        this.event.description.push(new _models_widget_model_client__WEBPACK_IMPORTED_MODULE_8__["Widget"](this.listType, this.list));
    };
    EventDetailComponent.prototype.splitList = function (data) {
        return data.split(/\r?\n/);
    };
    EventDetailComponent.prototype.toggleTag = function (tag) {
        if (this.event.tags.includes(tag)) {
            var index = this.event.tags.indexOf(tag);
            this.event.tags.splice(index, 1);
        }
        else {
            this.event.tags.push(tag);
        }
    };
    EventDetailComponent.prototype.updateWidget = function (event) {
        var oldWidget = event[0];
        var newWidget = event[1];
        var index = this.event.description.indexOf(oldWidget);
        this.event.description[index] = newWidget;
    };
    EventDetailComponent.prototype.deleteWidget = function (widget) {
        console.log(widget);
        var index = this.event.description.indexOf(widget);
        this.event.description.splice(index, 1);
        console.log(this.event.description);
    };
    EventDetailComponent.prototype.mouseEnter = function () {
        this.inImage = true;
        console.log('enter');
    };
    EventDetailComponent.prototype.mouseLeave = function () {
        this.inImage = false;
        console.log('leave');
    };
    EventDetailComponent.prototype.getIframeSource = function () {
        var res = this.event.video + '?rel=0&autoplay=1&modestbranding=1';
        return this.sanitizer.bypassSecurityTrustResourceUrl(res);
    };
    EventDetailComponent.prototype.hasVideo = function () {
        return this.event.video !== '';
    };
    // setEvent(event) {
    //   this.event.title = event.title;
    //   this.event.descriptions = event.description;
    //   this.event.start = event.startTime;
    //   this.event.end = event.endTime;
    //   this.event.tags = event.tags;
    //   this.event._id = event.id;
    //   console.log(event);
    //   return this.userService.findUserById(event.organizer);
    // }
    EventDetailComponent.prototype.confirmUpdateMeta = function () {
        var _this = this;
        console.log(this.event);
        this.eventService.updateEvent(this.event)
            .then(function () { return _this.refreshEvent(); })
            .then(function () { return _this.modalRef.hide(); });
    };
    EventDetailComponent.prototype.refreshEvent = function () {
        var _this = this;
        return this.eventService.findEventById(this.eventId)
            .then(function (event) {
            console.log(event);
            // event.startTime = this.refactorDate(event.startTime);
            // event.endTime = this.refactorDate(event.endTime);
            return _this.event = event;
        });
    };
    EventDetailComponent.prototype.enrollEvent = function () {
        var _this = this;
        var enrollment;
        this.userService.profile()
            .then(function (user) {
            console.log(user);
            enrollment = {
                event: _this.event._id,
                attendee: user._id
            };
            if (!user.role || user.role === 'EquipmentDealer' || user.role === 'SiteManager' || user._id === _this.organizer._id) {
                alert('must login as personal user to enroll');
                return;
            }
            else {
                console.log(user);
                return _this.enrollmentService.enrollAttendeeInEvent(enrollment)
                    .then(function (enroll) {
                    console.log(enroll);
                    return _this.refreshEvent();
                })
                    .then(function () { return _this.isEnrolled = true; });
            }
        });
    };
    EventDetailComponent.prototype.unenrollEvent = function () {
        var _this = this;
        var enrollment;
        this.userService.profile()
            .then(function (user) {
            enrollment = {
                event: _this.event._id,
                attendee: user._id
            };
            console.log(user);
            return _this.enrollmentService.unenrollAttendeeInEvent(enrollment);
        })
            .then(function (enroll) {
            console.log(enroll);
            return _this.refreshEvent();
        })
            .then(function () { return _this.isEnrolled = false; });
    };
    EventDetailComponent.prototype.checkEnrollment = function () {
        var _this = this;
        return this.userService.profile()
            .then(function (user) {
            for (var i = 0; i < _this.event.attendee.length; i++) {
                if (_this.event.attendee[i] === user._id) {
                    _this.isEnrolled = true;
                    return true;
                }
            }
            _this.isEnrolled = false;
            return false;
        });
    };
    EventDetailComponent.prototype.loadTargetSite = function () {
        var _this = this;
        return this.reservationService.findReservationsForEvent(this.eventId)
            .then(function (reservation) {
            console.log(reservation);
            if (reservation.length > 0) {
                _this.targetSite = reservation[0].site;
            }
        });
    };
    EventDetailComponent.prototype.loadEquipment = function () {
        var _this = this;
        return this.rentService.findRentingsForEvent(this.eventId)
            .then(function (equipments) {
            console.log(equipments);
            if (equipments.length > 0) {
                _this.equipments = equipments;
            }
        });
    };
    EventDetailComponent.prototype.refactorTime = function (time) {
        var index = time.indexOf('T');
        return time.substring(0, index);
    };
    EventDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.eventService.findEventById(this.eventId)
            .then(function (event) {
            event.startTime = _this.refactorTime(event.startTime);
            event.endTime = _this.refactorTime(event.endTime);
            _this.event = event;
            console.log(event);
            return _this.userService.findUserById(_this.event.organizer);
        }).then(function (user) {
            // console.log(this.event.organizer);
            _this.organizer = user;
            if (!_this.organizer.profilePhoto) {
                _this.organizer.profilePhoto = '';
            }
            if (_this.event.video && _this.event.video !== '') {
                _this.hasExtraInfo = true;
            }
            _this.isOrganizerLoaded = true;
        }).then(function () { return _this.checkEnrollment(); })
            .then(function () { return _this.loadTargetSite(); })
            .then(function () { return _this.loadEquipment(); });
    };
    EventDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-event-detail',
            template: __webpack_require__(/*! ./event-detail.component.html */ "./src/app/event-detail/event-detail.component.html"),
            styles: [__webpack_require__(/*! ./event-detail.component.css */ "./src/app/event-detail/event-detail.component.css")]
        }),
        __metadata("design:paramtypes", [ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["BsModalService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"],
            _services_user_service_client__WEBPACK_IMPORTED_MODULE_6__["UserServiceClient"],
            _services_site_service_client__WEBPACK_IMPORTED_MODULE_11__["SiteServiceClient"],
            _services_reservation_service_client__WEBPACK_IMPORTED_MODULE_12__["ReservationServiceClient"],
            _services_equipmentRenting_service_client__WEBPACK_IMPORTED_MODULE_13__["EquipmentRentingServiceClient"],
            _services_event_service_client__WEBPACK_IMPORTED_MODULE_7__["EventServiceClient"],
            _services_enrollment_service_client__WEBPACK_IMPORTED_MODULE_10__["EnrollmentServiceClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"]])
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

module.exports = "\r\n.content-of-modal .card {\r\n  background-color: #9fcdff;\r\n  margin: 5px;\r\n  padding: 10px;\r\n}\r\n\r\n.content-of-modal .span-box {\r\n\r\n}\r\n\r\n.content-of-modal .delete-span {\r\n  display: inline-block;\r\n  margin-right: 3px;\r\n  float: right;\r\n\r\n}\r\n\r\n.content-of-modal .edit-span {\r\n  display: inline-block;\r\n  margin-right: 4px;\r\n  float: right;\r\n}\r\n\r\n.meta-div {\r\n  margin-top: 40px;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.media-container {\r\n  border: none;\r\n  /*max-height: 300px;*/\r\n}\r\n\r\n.avatar-container {\r\n  margin-left: 10%;\r\n  margin-bottom: 8px;\r\n  display: inline-block;\r\n  width: 50px;\r\n  padding: 0;\r\n}\r\n\r\n.avatar {\r\n  padding: 0;\r\n  border-radius: 50%;\r\n  background-image: url('https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b6ded683923a678ad03fae323169beb4&auto=format&fit=crop&w=700&q=60');\r\n  width: 100%;\r\n  padding-bottom: 100%;\r\n  background-size: cover;\r\n  background-position: center;\r\n  cursor: pointer;\r\n}\r\n\r\n.carousel-container {\r\n  border-radius: 25px;\r\n  -webkit-border-radius: 20px;\r\n\r\n  position: relative;\r\n  /*overflow: hidden;*/\r\n  top: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\ncarousel {\r\n  width: 100%;\r\n  height: 100%;\r\n  position: relative;\r\n}\r\n\r\n/*.slide {*/\r\n\r\n/*width: 100%;*/\r\n\r\n/*height: 100%;*/\r\n\r\n/*position: relative;*/\r\n\r\n/*}*/\r\n\r\n.image  {\r\n  padding: 0;\r\n  border: #1b1e21 solid 2px;\r\n  border-radius: 25px;\r\n  background-image: url('https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b6ded683923a678ad03fae323169beb4&auto=format&fit=crop&w=700&q=60');\r\n  width: 100%;\r\n  height: 100%;\r\n  padding-bottom: 100%;\r\n  background-size: cover;\r\n  background-position: center;\r\n\r\n}\r\n\r\n.event-meda {\r\n  border: none;\r\n}\r\n\r\n.iframe-pos {\r\n  top: 0;\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 100%;\r\n  /*border-radius: 25px;*/\r\n}\r\n\r\n.iframe-container {\r\n  border-radius: 25px;\r\n  -webkit-border-radius: 20px;\r\n  /*position: absolute;*/\r\n  position: relative;\r\n  overflow: hidden;\r\n  top: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\niframe {\r\n  width:100%;\r\n  height:100%;\r\n\r\n}\r\n\r\n.button-container i {\r\n  color: red;\r\n  text-shadow: 2px 2px 2px #aaa;\r\n}\r\n\r\n.fields {\r\n  margin-bottom: 10px;\r\n}\r\n\r\n#imgUrlList {\r\n  margin-bottom: 5px;\r\n}\r\n\r\n#yesBtn {\r\n  margin-right: 20px;\r\n}\r\n\r\n#organizerInfoDiv {\r\n  margin-top: 45px;\r\n}\r\n\r\n.editIcon {\r\n  margin-top: 8px;\r\n  margin-left: 30px;\r\n  color: #e4606d;\r\n  cursor: pointer;\r\n}\r\n\r\n#eventTitleDisplay {\r\n  margin-left: 38px;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.host-info {\r\n  margin-top: 35px;\r\n}\r\n\r\n#youtubeIcon {\r\n  cursor: pointer;\r\n}\r\n\r\n#dragInfo {\r\n  margin-left: 20px;\r\n  margin-top: 5px;\r\n}\r\n\r\n.divider {\r\n  margin-right: 8px;\r\n}\r\n\r\n.widgetFields {\r\n  margin-top: 20px;\r\n}\r\n\r\n#addParaBtn {\r\n  margin-top: 5px;\r\n}\r\n\r\n#addListBtn {\r\n  margin-top: 5px;\r\n}\r\n\r\n#desYesBtn {\r\n  margin-right: 15px;\r\n}\r\n\r\n.featureTag {\r\n  cursor: pointer;\r\n  margin-right: 5px;\r\n  margin-top: 10px;\r\n}\r\n\r\n#tagsDisplay {\r\n  margin-left: 30px;\r\n}\r\n\r\n#levelDiv {\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.equipment-card-wrapper {\r\n  padding-bottom: 10px;\r\n}\r\n\r\n#equipment-warning {\r\n  color: grey;\r\n}\r\n\r\n#eventStart {\r\n  margin-bottom: 10px;\r\n}\r\n\r\n#eventEnd{\r\n  margin-bottom: 10px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/event-editor/event-editor.component.html":
/*!**********************************************************!*\
  !*** ./src/app/event-editor/event-editor.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<div class=\"container\">-->\r\n  <!--this page shows event details-->\r\n<!--</div>-->\r\n\r\n<div class=\"card meta-div\" *ngIf=\"isOrganizerLoaded\">\r\n<div class=\"container\" (mouseleave) =\"mouseLeave()\">\r\n  <div class=\"row meta-row\">\r\n\r\n    <div class=\"col-md-6 meta-div\">\r\n      <div class=\"card media-container\">\r\n        <div class=\"carousel-container\">\r\n          <carousel data-interval=\"false\"\r\n                    [showIndicators]=\"!(hasExtraInfo && inImage)\">\r\n            <slide class=\"slide\" *ngFor=\"let photo of event.photos\" >\r\n              <div class=\"image\"\r\n                   [ngClass]=\"{'wbdv-blur': hasExtraInfo && inImage}\"\r\n                   [ngStyle]=\"{'background-image': 'url(' + photo + ')'}\">\r\n              </div>\r\n              <!--<img [ngClass]=\"{'wbdv-blur': hasExtraInfo && inImage}\"-->\r\n              <!--src={{photo}} alt=\"first slide\">-->\r\n            </slide>\r\n          </carousel>\r\n        </div>\r\n        <div class=\"iframe-pos\">\r\n          <div class=\"iframe-container\">\r\n            <iframe *ngIf=\"hasExtraInfo && inImage\"\r\n                    [src]='getIframeSource()'\r\n                    frameborder=\"0\"\r\n                    scrolling=false\r\n                    allow=\"encrypted-media\"\r\n                    style=\"overflow:hidden;\"\r\n            ></iframe>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n\r\n\r\n\r\n    <div id=\"organizerInfoDiv\" class=\"col-md-6\">\r\n      <div class=\"card event-meda\">\r\n\r\n        <div class=\"input-group-append\">\r\n          <h2 id=\"eventTitleDisplay\" class=\"\">{{event.title}}</h2>\r\n          <span class=\"editIcon edit-span\" (click)=\"openModal(template)\">\r\n            <i class=\"fas fa-pencil-alt\"></i>\r\n          </span>\r\n        </div>\r\n\r\n\r\n        <div class=\"row\" *ngIf=\"isOrganizerLoaded\">\r\n          <div class=\"avatar-container col-3\">\r\n            <div class=\"avatar\" [routerLink]=\"['/profile/' + organizer._id]\"\r\n                 [ngStyle]=\"{'background-image': 'url(' + organizer.profilePhoto + ')'}\">\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"host-info col-7\">\r\n            <div>\r\n              <span class=\"button-pos\">\r\n                <span class=\"button-container\">\r\n                  <span (click) = \"mouseEnter()\">\r\n                    <i *ngIf='hasVideo()'\r\n                       id=\"youtubeIcon\"\r\n                       class=\"fab fa-youtube fa-2x\">\r\n                    </i>\r\n                  </span>\r\n                </span>\r\n              </span>\r\n            </div>\r\n\r\n            <div class=\"text-sm-left text-muted\">\r\n              Hosted by\r\n              <span>{{organizer && organizer.firstName}}</span>\r\n              <span>{{organizer && ' ' + organizer.lastName}}</span>\r\n            </div>\r\n            <div class=\"text-sm-left\">\r\n              <span class=\"text-muted\">From </span>\r\n              <span>{{organizer.location}}</span>\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n\r\n      <div id=\"tagsDisplay\">\r\n        <hr>\r\n        <p>This event features :</p>\r\n        <div class=\"amenity_list\">\r\n          <span *ngFor=\"let tag of this.event.tags\" class=\"featureTag badge badge-info amenity_item\">{{tag}}</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n</div>\r\n\r\n\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-8 col-sm-12\">\r\n      <div class=\"input-group-append\">\r\n        <h2>Descriptions: </h2>\r\n        <span class=\"editIcon edit-span\" (click)=\"openModal(template2)\">\r\n          <i class=\"fas fa-pencil-alt\"></i>\r\n        </span>\r\n      </div>\r\n      <!--<div>-->\r\n        <!--<div>{{event.video}}</div>-->\r\n        <!--<iframe [src]='event.video | safe'> </iframe>-->\r\n      <!--</div>-->\r\n\r\n      <div *ngFor=\"let widget of this.event.description\">\r\n        <div *ngIf=\"widget.type === 'heading'\">\r\n          <h1>{{widget.data}}</h1>\r\n        </div>\r\n        <div *ngIf=\"widget.type === 'paragraph'\">\r\n          <p>{{widget.data}}</p>\r\n        </div>\r\n        <div *ngIf=\"widget.type === 'link'\">\r\n          <p><a href={{widget.data}}>{{widget.data}}</a></p>\r\n        </div>\r\n\r\n        <div *ngIf=\"widget.type === 'unorderedList'\">\r\n          <ul >\r\n            <li *ngFor=\"let item of splitList(widget.data)\">{{item}}</li>\r\n          </ul>\r\n        </div>\r\n\r\n        <div *ngIf=\"widget.type === 'orderedList'\">\r\n          <ol>\r\n            <li *ngFor=\"let item of splitList(widget.data)\">{{item}}</li>\r\n          </ol>\r\n        </div>\r\n        <hr>\r\n\r\n      </div>\r\n      <div *ngIf=\"event.attendee.length > 0\">\r\n        <app-attendee-list [attendeeIds]=\"event.attendee\"></app-attendee-list>\r\n        <hr>\r\n      </div>\r\n\r\n\r\n\r\n      <div *ngIf=\"event._id && event._id !== ''\">\r\n        <app-discussion-board [eventId]=\"event._id\" ></app-discussion-board>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col-md-4 col-sm-12\">\r\n      <div id=\"eventStart\">\r\n        Event Start:\r\n        {{event.startTime}}\r\n        <!--{{dates[event.start.getDay()]}}, {{months[event.start.getMonth()]}} {{event.start.getDate()}}-->\r\n      </div>\r\n\r\n      <div id=\"eventEnd\">\r\n        Event End:\r\n        {{event.endTime}}\r\n        <!--{{dates[event.end.getDay()]}}, {{months[event.end.getMonth()]}} {{event.end.getDate()}}-->\r\n\r\n      </div>\r\n      <hr>\r\n\r\n      <div>\r\n        <div class=\"input-group-append\">\r\n          <h3>Target Site: </h3>\r\n          <span class=\"editIcon edit-span\" [routerLink]=\"['/search']\">\r\n            <i class=\"fas fa-pencil-alt\"></i>\r\n          </span>\r\n        </div>\r\n        <app-site-list-card *ngIf=\"targetSite\" [data]=\"targetSite\"></app-site-list-card>\r\n        <hr>\r\n        <br>\r\n        <div>\r\n          <div class=\"input-group-append\">\r\n            <h3>Equipments: </h3>\r\n            <span class=\"editIcon edit-span\" [routerLink]=\"['/equipmentList']\">\r\n              <i class=\"fas fa-plus\"></i>\r\n            </span>\r\n          </div>\r\n          <div *ngFor=\"let equipment of equipments\" class=\"equipment-card-wrapper\">\r\n            <app-rent-equipment-card\r\n              [data]=\"equipment.equipment\"\r\n              [quantity]=\"equipment.quantity\">\r\n            </app-rent-equipment-card>\r\n          </div>\r\n          <div id=\"equipment-warning\">To cancel equipment rental, please contact equipment dealer.</div>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n<!--<button type=\"button\" class=\"btn btn-primary\" (click)=\"openModal(template)\">Edit Meta Data</button>-->\r\n\r\n<ng-template #template>\r\n  <div class=\"modal-header\" id=\"metaDateHeader\" *ngIf=\"isOrganizerLoaded\">\r\n    <h4 class=\"modal-title pull-left\">Meta data: Edit meta data for your event here</h4>\r\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n\r\n  <div class=\"modal-body text-center\">\r\n\r\n    <div>\r\n      <div class=\"input-group-append fields\">\r\n        <label for=\"eventTitle\" class=\"col-sm-2 col-form-label\"> Title </label>\r\n        <input\r\n          id=\"eventTitle\"\r\n          [(ngModel)]=\"event.title\"\r\n          class=\"form-control\"\r\n          placeholder=\"Event Title\"\r\n        />\r\n      </div>\r\n\r\n      <div id=\"levelDiv\" class=\"input-group-append\">\r\n        <label for=\"level\" class=\"col-sm-2 col-form-label\" >Level</label>\r\n        <li  id=\"level\" class=\"list-group-item form-control\">{{event.level}}</li>\r\n        <div class=\"btn-group\" dropdown>\r\n          <button id=\"button-basic\" dropdownToggle type=\"button\" class=\"btn btn-outline-dark dropdown-toggle\"\r\n                  aria-controls=\"dropdown-basic\">\r\n            Select level\r\n          </button>\r\n          <ul id=\"dropdown-basic\" *dropdownMenu class=\"dropdown-menu\"\r\n              role=\"menu\" aria-labelledby=\"button-basic\">\r\n            <li role=\"menuitem\"><a (click)=\"event.level = 'Relax'\" class=\"dropdown-item\">Relax</a></li>\r\n            <li role=\"menuitem\"><a (click)=\"event.level = 'Training'\" class=\"dropdown-item\">Training</a></li>\r\n            <li role=\"menuitem\"><a (click)=\"event.level = 'Adventure'\" class=\"dropdown-item\">Adventure</a></li>\r\n          </ul>\r\n        </div>\r\n\r\n      </div>\r\n\r\n      <div>\r\n        <div class=\"input-group-append fields\">\r\n          <label for=\"startTime\" class=\"col-sm-2 col-form-label\">Event Starts:</label>\r\n          <!--<input-->\r\n            <!--[(ngModel)]=\"event.startTime\"-->\r\n            <!--type=\"date\"-->\r\n            <!--name=\"bday\">-->\r\n          <input type=\"text\"\r\n                 [(ngModel)]=\"event.startTime\"\r\n                 placeholder=\"Start Time\"\r\n                 class=\"form-control\"\r\n                 id=\"startTime\"\r\n                 [bsConfig]=\"{ dateInputFormat: 'YYYY-MM-DD' }\"\r\n                 bsDatepicker>\r\n        </div>\r\n        <div class=\"input-group-append fields\">\r\n          <label for=\"endTime\" class=\"col-sm-2 col-form-label\">Event Ends:</label>\r\n          <!--<input-->\r\n            <!--[(ngModel)]=\"event.endTime\"-->\r\n            <!--type=\"date\"-->\r\n            <!--name=\"bday\">-->\r\n          <input type=\"text\"\r\n                 [(ngModel)]=\"event.endTime\"\r\n                 placeholder=\"End Time\"\r\n                 class=\"form-control\"\r\n                 id=\"endTime\"\r\n                 [bsConfig]=\"{ dateInputFormat: 'YYYY-MM-DD' }\"\r\n                 bsDatepicker>\r\n        </div>\r\n      </div>\r\n      <div class=\"input-group-append fields\">\r\n        <label for=\"videoLink\" class=\"col-sm-2 col-form-label\"> Video link </label>\r\n        <input\r\n          id=\"videoLink\"\r\n          [(ngModel)]=\"event.video\"\r\n          class=\"form-control\"\r\n          placeholder=\"Video link\"\r\n        />\r\n      </div>\r\n      <div class=\"input-group-append fields\">\r\n        <label for=\"imgUrl\" class=\"col-sm-2 col-form-label\"> Add Image </label>\r\n        <input\r\n          id=\"imgUrl\"\r\n          [(ngModel)]=\"imgUrl\"\r\n          class=\"form-control\"\r\n          placeholder=\"Image Url\">\r\n        <button (click)=\"addImageUrl()\" class=\"btn btn-outline-dark\">Add</button>\r\n      </div>\r\n\r\n      <ol>\r\n        <li *ngFor=\"let img of event.photos\" id=\"imgUrlList\">\r\n          {{img.slice(0, 28)}}\r\n          <button (click)=\"deleteImageUrl(img)\" class=\"btn btn-outline-danger\">Delete</button>\r\n        </li>\r\n      </ol>\r\n\r\n    </div>\r\n    <hr>\r\n    <p>Do you want to confirm?</p>\r\n    <button type=\"button\" class=\"btn btn-danger\" id=\"yesBtn\" (click)=\"confirmUpdateMeta()\" >Yes</button>\r\n    <button type=\"button\" class=\"btn btn-default\" (click)=\"decline()\" >No</button>\r\n  </div>\r\n</ng-template>\r\n\r\n\r\n<!--<button type=\"button\" class=\"btn btn-primary\" (click)=\"openModal(template2)\">Edit Description</button>-->\r\n\r\n<ng-template #template2>\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title pull-left\">Description: Edit or add new descriptions for your event</h4>\r\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n\r\n  <div class=\"modal-body\">\r\n    <div class=\"content-of-modal\">\r\n      <div class=\"input-group-append\">\r\n        <h4>Edit current descriptions</h4>\r\n        <span id=\"dragInfo\" class=\"text-muted\"><span class=\"divider\">•</span>Drag to swich order</span>\r\n      </div>\r\n      <div [sortablejs]='this.event.description' [sortablejsOptions]=\"{ animation: 150 }\">\r\n        <div class=\"card\" *ngFor=\"let widget of this.event.description\">\r\n            <app-event-description-widget-editor\r\n              [widget]=\"widget\"\r\n              (deleteEmitter)=\"deleteWidget($event)\"\r\n              (editEmitter)=\"updateWidget($event)\">\r\n            </app-event-description-widget-editor>\r\n        </div>\r\n      </div>\r\n      <hr>\r\n      <p>Selected features :</p>\r\n      <div class=\"amenity_list\" *ngIf=\"this.event.tags.length > 0\">\r\n        <span *ngFor=\"let tag of this.event.tags\" (click)=\"toggleEventTag(tag)\" class=\"featureTag badge badge-info amenity_item\">{{tag}}</span>\r\n        <hr>\r\n      </div>\r\n    </div>\r\n    <div>\r\n      <h4>Add new descriptions</h4>\r\n      <tabset>\r\n        <tab heading=\"Heading\" id=\"tab0\">\r\n          <div class=\"input-group-append widgetFields\">\r\n            <input\r\n              id=\"heading\"\r\n              [(ngModel)]=\"heading\"\r\n              class=\"form-control\"\r\n              placeholder=\"New Heading\">\r\n            <button class=\"btn btn-outline-danger\" (click)=\"addHeading()\">Add</button>\r\n          </div>\r\n        </tab>\r\n\r\n\r\n        <tab heading=\"Paragraph\" id=\"tab1\">\r\n          <div class=\"widgetFields\">\r\n            <textarea\r\n              [(ngModel)]=\"paragraph\"\r\n              class=\"form-control\"\r\n              placeholder=\"Paragraph text\">\r\n            </textarea>\r\n          </div>\r\n          <button id=\"addParaBtn\" class=\"btn btn-outline-danger\" (click)=\"addParagraph()\">Add Paragraph</button>\r\n        </tab>\r\n\r\n        <tab heading=\"Link\">\r\n          <div class=\"input-group-append widgetFields\">\r\n            <input\r\n              [(ngModel)]=\"linkUrl\"\r\n              class=\"form-control\"\r\n              placeholder=\"Link URL\">\r\n            <button class=\"btn btn-outline-danger\" (click)=\"addLink()\">Add</button>\r\n          </div>\r\n        </tab>\r\n\r\n        <tab heading=\"List\">\r\n          <div>\r\n            <select class=\"form-control widgetFields\" (change)=\"setListType()\" >\r\n              <option value=\"unorderedList\">Unordered list</option>\r\n              <option value=\"orderedList\">Ordered list</option>\r\n            </select>\r\n            <textarea\r\n              [(ngModel)]=\"list\"\r\n              class=\"form-control widgetFields\"\r\n              placeholder=\"List Item\">\r\n            </textarea>\r\n            <button id=\"addListBtn\" class=\"btn btn-outline-danger\" (click)=\"addList()\">Add</button>\r\n          </div>\r\n        </tab>\r\n\r\n        <tab heading=\"Features\">\r\n          <div class=\"btn-group\" dropdown>\r\n            <!--<button dropdownToggle type=\"button\" class=\"btn btn-primary dropdown-toggle\"-->\r\n                    <!--aria-controls=\"dropdown-basic\">-->\r\n              <!--Add feature tags <span class=\"caret\"></span>-->\r\n            <!--</button>-->\r\n\r\n\r\n\r\n            <!--<ul id=\"dropdown-basic\" *dropdownMenu class=\"dropdown-menu\"-->\r\n                <!--role=\"menu\" aria-labelledby=\"button-basic\">-->\r\n              <!--<li role=\"menuitem\"><a class=\"dropdown-item\" (click)=\"toggleTag('Hiking')\">Hiking</a></li>-->\r\n              <!--<li role=\"menuitem\"><a class=\"dropdown-item\" (click)=\"toggleTag('Fishing')\">Fishing</a></li>-->\r\n              <!--<li role=\"menuitem\"><a class=\"dropdown-item\" (click)=\"toggleTag('Biking')\">Biking</a></li>-->\r\n            <!--</ul>-->\r\n            <!--<span (click)=\"toggleTag('Biking')\" class=\"badge badge-secondary\">Biking</span>-->\r\n            <!--<span (click)=\"toggleTag('Hiking')\" class=\"badge badge-secondary\">Hiking</span>-->\r\n            <span *ngFor=\"let tag of featureTags\" (click)=\"toggleFeatureTag(tag)\" class=\"featureTag badge badge-info\">{{tag}}</span>\r\n          </div>\r\n        </tab>\r\n      </tabset>\r\n    </div>\r\n\r\n    <hr>\r\n    <p>Save Changes?</p>\r\n    <button type=\"button\" class=\"btn btn-danger\" id=\"desYesBtn\" (click)=\"confirm()\" >Yes</button>\r\n    <button type=\"button\" class=\"btn btn-default\" (click)=\"decline()\" >No</button>\r\n  </div>\r\n</ng-template>\r\n\r\n\r\n\r\n"

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
/* harmony import */ var _models_EventCard_model_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/EventCard.model.client */ "./src/app/models/EventCard.model.client.ts");
/* harmony import */ var _models_user_model_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/user.model.client */ "./src/app/models/user.model.client.ts");
/* harmony import */ var _constants_dateConstant__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../constants/dateConstant */ "./src/app/constants/dateConstant.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_event_service_client__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/event.service.client */ "./src/app/services/event.service.client.ts");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _services_equipmentRenting_service_client__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/equipmentRenting.service.client */ "./src/app/services/equipmentRenting.service.client.ts");
/* harmony import */ var _services_site_service_client__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../services/site.service.client */ "./src/app/services/site.service.client.ts");
/* harmony import */ var _services_reservation_service_client__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../services/reservation.service.client */ "./src/app/services/reservation.service.client.ts");
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
    function EventEditorComponent(modalService, sanitizer, userService, siteService, reservationService, rentService, eventService, route) {
        var _this = this;
        this.modalService = modalService;
        this.sanitizer = sanitizer;
        this.userService = userService;
        this.siteService = siteService;
        this.reservationService = reservationService;
        this.rentService = rentService;
        this.eventService = eventService;
        this.route = route;
        this.featureTags = ['Biking', 'Hiking', 'Swimming', 'Fishing', 'Horse riding', 'BBQ'];
        // event: EventCard = new EventCard();
        this.isOrganizerLoaded = false;
        this.list = '';
        this.listType = 'unorderedList';
        this.organizer = new _models_user_model_client__WEBPACK_IMPORTED_MODULE_5__["User"]();
        this.organizer1 = {
            _id: '',
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
                't=crop&w=800&q=60',
            role: 'organizer'
        };
        this.attendee1 = {
            _id: '',
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
                't=crop&w=800&q=60',
            role: 'organizer',
        };
        this.attendee2 = {
            _id: '',
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
                '1e&auto=format&fit=crop&w=800&q=60',
            role: 'organizer',
        };
        this.attendee3 = {
            _id: '',
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
                '=crop&w=800&q=60',
            role: 'organizer',
        };
        this.event = new _models_EventCard_model_client__WEBPACK_IMPORTED_MODULE_4__["EventCard"]();
        this.inImage = false;
        this.hasExtraInfo = false;
        this.months = _constants_dateConstant__WEBPACK_IMPORTED_MODULE_6__["months"];
        this.dates = _constants_dateConstant__WEBPACK_IMPORTED_MODULE_6__["dates"];
        this.slideIndex = 0;
        this.config = {
            animated: true,
            keyboard: true,
            class: 'my-modal'
        };
        this.route.params.subscribe(function (params) { return _this.setParams(params); });
    }
    EventEditorComponent.prototype.setParams = function (params) {
        console.log(params);
        this.eventId = params['eventId'];
        console.log(this.eventId);
    };
    EventEditorComponent.prototype.openModal = function (template) {
        this.modalRef = this.modalService
            .show(template, Object.assign({}, { class: 'my-modal modal-lg modal-dialog-centered' }));
    };
    EventEditorComponent.prototype.confirm = function () {
        var _this = this;
        this.message = 'Confirmed!';
        console.log('Confirmed!');
        this.eventService.updateEvent(this.event)
            .then(function () { return _this.refreshEvent(); })
            .then(function () { return _this.modalRef.hide(); });
    };
    EventEditorComponent.prototype.decline = function () {
        var _this = this;
        this.message = 'Declined!';
        this.refreshEvent().then(function () { return _this.modalRef.hide(); });
        console.log('Declined!');
    };
    EventEditorComponent.prototype.addImageUrl = function () {
        console.log(this.imgUrl);
        this.event.photos.push(this.imgUrl);
        this.imgUrl = '';
    };
    EventEditorComponent.prototype.deleteImageUrl = function (imgUrl) {
        if (this.event.photos.includes(imgUrl)) {
            var index = this.event.photos.indexOf(imgUrl);
            this.event.photos.splice(index, 1);
        }
    };
    EventEditorComponent.prototype.addHeading = function () {
        this.event.description.push(new _models_widget_model_client__WEBPACK_IMPORTED_MODULE_3__["Widget"]('heading', this.heading));
        this.paragraph = '';
    };
    EventEditorComponent.prototype.addParagraph = function () {
        this.event.description.push(new _models_widget_model_client__WEBPACK_IMPORTED_MODULE_3__["Widget"]('paragraph', this.paragraph));
        this.paragraph = '';
    };
    EventEditorComponent.prototype.addLink = function () {
        this.event.description.push(new _models_widget_model_client__WEBPACK_IMPORTED_MODULE_3__["Widget"]('link', this.linkUrl));
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
        this.event.description.push(new _models_widget_model_client__WEBPACK_IMPORTED_MODULE_3__["Widget"](this.listType, this.list));
    };
    EventEditorComponent.prototype.splitList = function (data) {
        return data.split(/\r?\n/);
    };
    // toggleTag(tag) {
    //   if (this.event.tags.includes(tag)) {
    //     const index = this.event.tags.indexOf(tag);
    //     this.event.tags.splice(index, 1);
    //   } else {
    //     this.event.tags.push(tag);
    //   }
    // }
    EventEditorComponent.prototype.toggleFeatureTag = function (tag) {
        this.event.tags.push(tag);
        var index = this.featureTags.indexOf(tag);
        this.featureTags.splice(index, 1);
    };
    EventEditorComponent.prototype.toggleEventTag = function (tag) {
        this.featureTags.push(tag);
        var index = this.event.tags.indexOf(tag);
        this.event.tags.splice(index, 1);
    };
    EventEditorComponent.prototype.updateWidget = function (event) {
        var oldWidget = event[0];
        var newWidget = event[1];
        var index = this.event.description.indexOf(oldWidget);
        this.event.description[index] = newWidget;
    };
    EventEditorComponent.prototype.deleteWidget = function (widget) {
        console.log(widget);
        var index = this.event.description.indexOf(widget);
        this.event.description.splice(index, 1);
        console.log(this.event.description);
    };
    EventEditorComponent.prototype.mouseEnter = function () {
        this.inImage = true;
        console.log('enter');
    };
    EventEditorComponent.prototype.mouseLeave = function () {
        this.inImage = false;
        console.log('leave');
    };
    EventEditorComponent.prototype.getIframeSource = function () {
        var res = this.event.video + '?rel=0&autoplay=1&modestbranding=1';
        return this.sanitizer.bypassSecurityTrustResourceUrl(res);
    };
    EventEditorComponent.prototype.hasVideo = function () {
        return this.event.video !== '';
    };
    // setEvent(event) {
    //   this.event.title = event.title;
    //   this.event.descriptions = event.description;
    //   this.event.start = event.startTime;
    //   this.event.end = event.endTime;
    //   this.event.tags = event.tags;
    //   this.event._id = event.id;
    //   console.log(event);
    //   return this.userService.findUserById(event.organizer);
    // }
    EventEditorComponent.prototype.confirmUpdateMeta = function () {
        var _this = this;
        console.log(this.event);
        this.eventService.updateEvent(this.event)
            .then(function () { return _this.refreshEvent(); })
            .then(function () { return _this.modalRef.hide(); });
    };
    EventEditorComponent.prototype.refreshEvent = function () {
        var _this = this;
        return this.eventService.findEventById(this.eventId)
            .then(function (event) {
            // event.startTime = this.refactorDate(event.startTime);
            // event.endTime = this.refactorDate(event.endTime);
            return _this.event = event;
        });
    };
    // refactorDate(d) {
    //   const date = new Date(d);
    //   const year = date.getFullYear();
    //   let month = date.getMonth() + 1;
    //   let dt = date.getDate();
    //
    //   if (dt < 10) {
    //     dt = '0' + dt;
    //   }
    //   if (month < 10) {
    //     month = '0' + month;
    //   }
    //
    //   return new Date(year + '-' + month + '-' + dt);
    // }
    EventEditorComponent.prototype.loadTargetSite = function () {
        var _this = this;
        return this.reservationService.findReservationsForEvent(this.eventId)
            .then(function (reservation) {
            console.log(reservation);
            if (reservation.length > 0) {
                _this.targetSite = reservation[0].site;
            }
        });
    };
    EventEditorComponent.prototype.loadEquipment = function () {
        var _this = this;
        return this.rentService.findRentingsForEvent(this.eventId)
            .then(function (equipments) {
            console.log(equipments);
            if (equipments.length > 0) {
                _this.equipments = equipments;
            }
        });
    };
    EventEditorComponent.prototype.refactorTime = function (time) {
        var index = time.indexOf('T');
        return time.substring(0, index);
    };
    EventEditorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.eventService.findEventById(this.eventId)
            .then(function (event) {
            event.startTime = _this.refactorTime(event.startTime);
            event.endTime = _this.refactorTime(event.endTime);
            _this.event = event;
            for (var i = 0; i < _this.event.tags.length; i++) {
                if (_this.featureTags.includes(_this.event.tags[i])) {
                    var index = _this.featureTags.indexOf(_this.event.tags[i]);
                    _this.featureTags.splice(index, 1);
                }
            }
            // this.event.startTime = this.refactorDate(this.event.startTime);
            // this.event.endTime = this.refactorDate(this.event.endTime);
            console.log(event);
            return _this.userService.findUserById(event.organizer);
        }).then(function (user) {
            // console.log(this.event.organizer);
            console.log(user);
            _this.organizer = user;
            if (!_this.organizer.profilePhoto) {
                _this.organizer.profilePhoto = '';
            }
            if (_this.event.video && _this.event.video !== '') {
                _this.hasExtraInfo = true;
            }
            _this.isOrganizerLoaded = true;
        }).then(function () { return _this.loadTargetSite(); })
            .then(function () { return _this.loadEquipment(); });
    };
    EventEditorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-event-editor',
            template: __webpack_require__(/*! ./event-editor.component.html */ "./src/app/event-editor/event-editor.component.html"),
            styles: [__webpack_require__(/*! ./event-editor.component.css */ "./src/app/event-editor/event-editor.component.css")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [ngx_bootstrap__WEBPACK_IMPORTED_MODULE_1__["BsModalService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"],
            _services_user_service_client__WEBPACK_IMPORTED_MODULE_9__["UserServiceClient"],
            _services_site_service_client__WEBPACK_IMPORTED_MODULE_11__["SiteServiceClient"],
            _services_reservation_service_client__WEBPACK_IMPORTED_MODULE_12__["ReservationServiceClient"],
            _services_equipmentRenting_service_client__WEBPACK_IMPORTED_MODULE_10__["EquipmentRentingServiceClient"],
            _services_event_service_client__WEBPACK_IMPORTED_MODULE_8__["EventServiceClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]])
    ], EventEditorComponent);
    return EventEditorComponent;
}());



/***/ }),

/***/ "./src/app/event-main-list-row-card/event-main-list-row-card.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/event-main-list-row-card/event-main-list-row-card.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".carousel-container {\r\n  height: 100px;\r\n\r\n}\r\n\r\ncarousel {\r\n\r\n}\r\n\r\n.button-pos {\r\n  margin-top: 2px;\r\n  margin-right: 5px;\r\n  float: right;\r\n  z-index: 1;\r\n}\r\n\r\n.button-container {\r\n  position: relative;\r\n}\r\n\r\n.button-container i {\r\n  color: red;\r\n  text-shadow: 2px 2px 2px #aaa;\r\n  cursor: pointer;\r\n}\r\n\r\nbutton {\r\n  position: absolute;\r\n}\r\n\r\n.wbdv-blur {\r\n  -webkit-filter: blur(5px); /* Safari 6.0 - 9.0 */\r\n  filter: blur(5px);\r\n  border-radius: 25px;\r\n\r\n}\r\n\r\n.wbdv-imageContainer {\r\n  position: relative;\r\n  border-radius: 25px 25px 0 0;\r\n  overflow:hidden;\r\n  /*background-color: #0b2e13;*/\r\n  /*-moz-border-radius: 20px;*/\r\n  /*margin:0 auto;*/\r\n}\r\n\r\n.wbdv-text-block {\r\n  position: absolute;\r\n  border-radius: 25px;\r\n  top: 10%;\r\n  left: 5%;\r\n  right: 5%;\r\n\r\n\r\n  color: white;\r\n  padding-left: 20px;\r\n  padding-right: 20px;\r\n}\r\n\r\n.card {\r\n  border-radius: 25px;\r\n  margin-right: 10px;\r\n  box-shadow: 0 16px 24px 2px rgba(0, 0, 0, .1)\r\n  /*0 6px 10px 5px rgba(0, 0, 0, .1),*/\r\n  /*0 8px 10px -5px rgba(0, 0, 0, .1);*/\r\n}\r\n\r\n.card-title {\r\n  margin-bottom: 0;\r\n\r\n}\r\n\r\n#title {\r\n  z-index: 3;\r\n}\r\n\r\n#title a {\r\n  color: black;\r\n  text-decoration: none;\r\n}\r\n\r\n.iframe-pos {\r\n  top: 0;\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 100%;\r\n  border-radius: 25px;\r\n  z-index: -1;\r\n}\r\n\r\n.iframe-pos-active {\r\n  z-index: 5;\r\n}\r\n\r\n.iframe-container {\r\n  border-radius: 25px;\r\n  -webkit-border-radius: 20px;\r\n  /*position: absolute;*/\r\n  position: relative;\r\n  overflow: auto;\r\n  top: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\niframe {\r\n  width:100%;\r\n  height:100%;\r\n\r\n}\r\n\r\n.img-container{\r\n  height: 300px;\r\n  position:relative;\r\n  border-radius: 25px 25px 0 0;\r\n  overflow: hidden;\r\n}\r\n\r\n.img {\r\n  padding: 0;\r\n  background-image: url('https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b6ded683923a678ad03fae323169beb4&auto=format&fit=crop&w=700&q=60');\r\n  width: 100%;\r\n  padding-bottom: 100%;\r\n  background-size: cover;\r\n  background-position: center;\r\n}\r\n\r\n/*img {*/\r\n\r\n/*border-radius: 25px 25px 0 0;*/\r\n\r\n/*height: auto;*/\r\n\r\n/*width: auto;*/\r\n\r\n/*position:absolute;*/\r\n\r\n/*vertical-align: middle;*/\r\n\r\n/*}*/\r\n\r\n.avatar-container {\r\n  margin-left: 10%;\r\n  margin-bottom: 8px;\r\n  display: inline-block;\r\n  width: 50px;\r\n  padding: 0;\r\n}\r\n\r\n.avatar {\r\n  padding: 0;\r\n  border-radius: 50%;\r\n  background-image: url('https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b6ded683923a678ad03fae323169beb4&auto=format&fit=crop&w=700&q=60');\r\n  width: 100%;\r\n  padding-bottom: 100%;\r\n  background-size: cover;\r\n  background-position: center;\r\n  cursor: pointer;\r\n}\r\n\r\n.host-info {\r\n  display: inline-block;\r\n  padding-left: 5%;\r\n  padding-top: 0;\r\n  margin-top: 0;\r\n}\r\n\r\n.host-info div {\r\n  /*padding-top: 5px;*/\r\n  /*margin-bottom: 20px;*/\r\n  font-family: \"Bradley Hand\";\r\n  overflow: hidden;\r\n  white-space: nowrap;\r\n}\r\n\r\nh6 {\r\n  display: inline-block;\r\n  padding-top: 15px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/event-main-list-row-card/event-main-list-row-card.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/event-main-list-row-card/event-main-list-row-card.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card text-center\"\r\n     (mouseleave) =\"mouseLeave()\">\r\n\r\n    <carousel (activeSlideChange)=\"slideChanged($event)\" data-interval=\"false\" [showIndicators]=\"!(hasExtraInfo && inImage)\">\r\n      <slide *ngFor=\"let photo of data.photos\" >\r\n        <div class=\"img-container\">\r\n          <!--<img [ngClass]=\"{'wbdv-blur': hasExtraInfo && inImage}\" src={{photo}} alt=\"first slide\" style=\"display: block; width: 100%;\">-->\r\n          <div class=\"img\"\r\n               [ngClass]=\"{'wbdv-blur': hasExtraInfo && inImage}\"\r\n               [ngStyle]=\"{'background-image': 'url(' + photo + ')'}\">\r\n          </div>\r\n        </div>\r\n      </slide>\r\n    </carousel>\r\n\r\n    <div class=\"iframe-pos\" [ngClass]=\"{'iframe-pos-active': hasExtraInfo && inImage}\">\r\n      <div class=\"iframe-container\">\r\n        <iframe *ngIf=\"hasExtraInfo && inImage\"\r\n                [src]='getIframeSource()'\r\n                frameborder=\"0\"\r\n                scrolling=false\r\n                allow=\"autoplay; encrypted-media\"\r\n                style=\"overflow:hidden;\"\r\n        ></iframe>\r\n      </div>\r\n    </div>\r\n\r\n  <div class=\"card-block\" style=\"{z-index: 1}\">\r\n    <h6 class=\"card-subtitle mb-2 text-muted\">{{data.startTime}}</h6>\r\n    <span class=\"button-pos\">\r\n      <span class=\"button-container\">\r\n         <span (click) = \"mouseEnter()\">\r\n          <i *ngIf=\"hasExtraInfo && !inImage\"\r\n             class=\"fab fa-youtube fa-2x\"\r\n          ></i>\r\n        </span>\r\n      </span>\r\n    </span>\r\n\r\n    <h4 id='title' class=\"card-title\">\r\n      <span>\r\n        <a [routerLink]=\"['/eventDetail/' + data._id]\">{{data.title}}</a>\r\n      </span>\r\n    </h4>\r\n    <div class=\"card-body\">\r\n      <div class=\"row\" >\r\n        <div class=\"avatar-container\" *ngIf=\"organizer.profilePhoto\">\r\n          <div class=\"avatar\" [routerLink]=\"['/profile/' + organizer._id]\" [ngStyle]=\"{'background-image': 'url(' + organizer.profilePhoto + ')'}\">\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"host-info\">\r\n          <div class=\"text-sm-left text-muted\">\r\n            Hosted by\r\n            <span>{{organizer && organizer.username}}</span>\r\n            <!--<span>{{organizer && organizer.firstName}}</span>-->\r\n            <!--<span>{{organizer && ' ' + organizer.lastName}}</span>-->\r\n          </div>\r\n          <div class=\"text-sm-left\">\r\n            <span class=\"text-muted\">From </span>\r\n            <span>{{organizer.location}}</span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/event-main-list-row-card/event-main-list-row-card.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/event-main-list-row-card/event-main-list-row-card.component.ts ***!
  \********************************************************************************/
/*! exports provided: EventMainListRowCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventMainListRowCardComponent", function() { return EventMainListRowCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _models_EventCard_model_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/EventCard.model.client */ "./src/app/models/EventCard.model.client.ts");
/* harmony import */ var _constants_dateConstant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constants/dateConstant */ "./src/app/constants/dateConstant.ts");
/* harmony import */ var _models_user_model_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/user.model.client */ "./src/app/models/user.model.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var EventMainListRowCardComponent = /** @class */ (function () {
    function EventMainListRowCardComponent(sanitizer, router, service) {
        this.sanitizer = sanitizer;
        this.router = router;
        this.service = service;
        this.inImage = false;
        this.hasExtraInfo = false;
        this.months = _constants_dateConstant__WEBPACK_IMPORTED_MODULE_4__["months"];
        this.dates = _constants_dateConstant__WEBPACK_IMPORTED_MODULE_4__["dates"];
        this.slideIndex = 0;
        this.organizer = new _models_user_model_client__WEBPACK_IMPORTED_MODULE_5__["User"]();
        this.updateEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    EventMainListRowCardComponent.prototype.goDetailPage = function () {
        console.log('go detail');
        this.router.navigateByUrl('/eventDetail/' + this.data._id);
    };
    EventMainListRowCardComponent.prototype.goProfilePage = function () {
        console.log('go profile');
    };
    EventMainListRowCardComponent.prototype.slideChanged = function (event) {
        if (event !== this.slideIndex) {
            this.updateEvent.emit('update');
            this.slideIndex = event;
        }
    };
    EventMainListRowCardComponent.prototype.mouseEnter = function () {
        this.inImage = true;
    };
    EventMainListRowCardComponent.prototype.mouseLeave = function () {
        this.inImage = false;
    };
    EventMainListRowCardComponent.prototype.getIframeSource = function () {
        var res = this.data.video + '?rel=0&autoplay=1&modestbranding=1';
        return this.sanitizer.bypassSecurityTrustResourceUrl(res);
    };
    EventMainListRowCardComponent.prototype.getOrganizer = function () {
        var _this = this;
        return this.service.findUserById(this.data.organizer)
            .then(function (organizer) {
            if (!organizer.profilePhoto || organizer.profilePhoto === '') {
                organizer.profilePhoto = 'https://images.unsplash.com/photo-' +
                    '1495078065017-564723e7e3e7?ixlib=rb-0.3.5&ixid=eyJhcHBfa' +
                    'WQiOjEyMDd9&s=09093dcdf66dbcd2397b9dc19384a899&auto=forma' +
                    't&fit=crop&w=800&q=60';
            }
            return _this.organizer = organizer;
        });
    };
    EventMainListRowCardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getOrganizer()
            .then(function () {
            if (_this.data.video && _this.data.video !== '') {
                _this.hasExtraInfo = true;
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_EventCard_model_client__WEBPACK_IMPORTED_MODULE_3__["EventCard"])
    ], EventMainListRowCardComponent.prototype, "data", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], EventMainListRowCardComponent.prototype, "updateEvent", void 0);
    EventMainListRowCardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-event-main-list-row-card',
            template: __webpack_require__(/*! ./event-main-list-row-card.component.html */ "./src/app/event-main-list-row-card/event-main-list-row-card.component.html"),
            styles: [__webpack_require__(/*! ./event-main-list-row-card.component.css */ "./src/app/event-main-list-row-card/event-main-list-row-card.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _services_user_service_client__WEBPACK_IMPORTED_MODULE_2__["UserServiceClient"]])
    ], EventMainListRowCardComponent);
    return EventMainListRowCardComponent;
}());



/***/ }),

/***/ "./src/app/event-main-list-row/event-main-list-row.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/event-main-list-row/event-main-list-row.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".scrolling-wrapper {\r\n  overflow-x: scroll;\r\n  overflow-y: hidden;\r\n  padding: 10px;\r\n  padding-bottom: 25px;\r\n  white-space: nowrap;\r\n  scroll-behavior: smooth;\r\n  -webkit-overflow-scrolling: touch;\r\n}\r\n\r\n.card {\r\n  display: inline-block;\r\n  border: none;\r\n  width: 350px;\r\n}\r\n\r\n.button-rapper {\r\n  text-align: center;\r\n\r\n}\r\n\r\n.fas {\r\n  /*transform: translateY(-4%);*/\r\n  margin-top: 175px;\r\n}\r\n\r\n.left-icon {\r\n  margin-right: -100px;\r\n  cursor: pointer;\r\n  opacity: 0.2;\r\n}\r\n\r\n.right-icon {\r\n  cursor: pointer;\r\n  margin-left: -100px;\r\n  opacity: 0.2;\r\n}\r\n\r\n.col-10 {\r\n  z-index: 1;\r\n}\r\n\r\n.col-1 {\r\n  z-index: 2;\r\n}\r\n\r\n.row {\r\n  width: 100%;\r\n}\r\n"

/***/ }),

/***/ "./src/app/event-main-list-row/event-main-list-row.component.html":
/*!************************************************************************!*\
  !*** ./src/app/event-main-list-row/event-main-list-row.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-1 button-rapper\">\r\n      <i (click)=\"onPreviousSearchPosition()\" class=\"left-icon fas fa-chevron-circle-left fa-3x\"></i>\r\n    </div>\r\n\r\n    <div class=\"col-10\">\r\n      <div #panel class=\"scrolling-wrapper\">\r\n        <div #cardPanel *ngFor=\"let event of cards\" class=\"card\">\r\n          <app-event-main-list-row-card [data]=\"event\"></app-event-main-list-row-card>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col-1 button-rapper\">\r\n        <i (click)=\"onNextSearchPosition()\" class=\"right-icon fas fa-chevron-circle-right fa-3x\"></i>\r\n    </div>\r\n\r\n  </div>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/event-main-list-row/event-main-list-row.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/event-main-list-row/event-main-list-row.component.ts ***!
  \**********************************************************************/
/*! exports provided: EventMainListRowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventMainListRowComponent", function() { return EventMainListRowComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_event_service_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/event.service.client */ "./src/app/services/event.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EventMainListRowComponent = /** @class */ (function () {
    function EventMainListRowComponent(eventService) {
        this.eventService = eventService;
        this.state = 'hide';
        this.cards = [];
    }
    EventMainListRowComponent.prototype.ngOnInit = function () {
    };
    EventMainListRowComponent.prototype.onPreviousSearchPosition = function () {
        var width = 350;
        this.panel.nativeElement.scrollLeft -= width;
    };
    EventMainListRowComponent.prototype.onNextSearchPosition = function () {
        var width = 350;
        // const width = this.panel.nativeElement.offsetWidth;
        this.panel.nativeElement.scrollLeft += width;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], EventMainListRowComponent.prototype, "cards", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('panel', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], EventMainListRowComponent.prototype, "panel", void 0);
    EventMainListRowComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-event-main-list-row',
            template: __webpack_require__(/*! ./event-main-list-row.component.html */ "./src/app/event-main-list-row/event-main-list-row.component.html"),
            styles: [__webpack_require__(/*! ./event-main-list-row.component.css */ "./src/app/event-main-list-row/event-main-list-row.component.css")],
        }),
        __metadata("design:paramtypes", [_services_event_service_client__WEBPACK_IMPORTED_MODULE_1__["EventServiceClient"]])
    ], EventMainListRowComponent);
    return EventMainListRowComponent;
}());



/***/ }),

/***/ "./src/app/event-main-list/event-main-list.component.css":
/*!***************************************************************!*\
  !*** ./src/app/event-main-list/event-main-list.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".list-container {\r\n  margin-top: 70px;\r\n  margin-bottom: 50px;\r\n}\r\n\r\n.featureTag {\r\n  margin: 5px;\r\n}\r\n\r\n.activeTag {\r\n  background-color: red;\r\n}\r\n\r\n.badge {\r\n  cursor: pointer;\r\n}\r\n\r\n.container {\r\n  margin-top: 20px;\r\n}\r\n\r\n.list-container h3 {\r\n  margin-bottom: 20px;\r\n  font-family: \"Agency FB\";\r\n}\r\n"

/***/ }),

/***/ "./src/app/event-main-list/event-main-list.component.html":
/*!****************************************************************!*\
  !*** ./src/app/event-main-list/event-main-list.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"list-container\">\r\n\r\n\r\n  <div class=\"container\">\r\n    <h3>Select features you like</h3>\r\n    <span *ngFor=\"let tag of featureTags\" [ngClass]=\"{'activeTag': isActiveTag(tag)}\" (click)=\"toggleTags(tag)\" class=\"featureTag badge badge-info\">{{tag}}</span>\r\n  </div>\r\n\r\n  <hr>\r\n\r\n  <div *ngIf=\"relaxEvent.length > 0\">\r\n    <div class=\"container\">\r\n      <h3>Relaxing</h3>\r\n    </div>\r\n    <app-event-main-list-row  [cards]=\"relaxEvent\"></app-event-main-list-row>\r\n  </div>\r\n\r\n  <div *ngIf=\"trainingEvent.length > 0\">\r\n    <div class=\"container\">\r\n      <h3>Training</h3>\r\n    </div>\r\n    <app-event-main-list-row [cards]=\"trainingEvent\"></app-event-main-list-row>\r\n  </div>\r\n\r\n  <div *ngIf=\"adventureEvent.length > 0\">\r\n    <div class=\"container\">\r\n      <h3>Adventure</h3>\r\n    </div>\r\n    <app-event-main-list-row [cards]=\"adventureEvent\"></app-event-main-list-row>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/event-main-list/event-main-list.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/event-main-list/event-main-list.component.ts ***!
  \**************************************************************/
/*! exports provided: EventMainListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventMainListComponent", function() { return EventMainListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_event_service_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/event.service.client */ "./src/app/services/event.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EventMainListComponent = /** @class */ (function () {
    function EventMainListComponent(eventService) {
        this.eventService = eventService;
        this.featureTags = ['Biking', 'Hiking', 'Swimming', 'Fishing', 'Horse riding', 'BBQ'];
        this.activeTags = [];
        this.adventureEvent = [];
        this.relaxEvent = [];
        this.trainingEvent = [];
        this.active = true;
    }
    EventMainListComponent.prototype.isActiveTag = function (tag) {
        if (this.activeTags.includes(tag)) {
            return true;
        }
        else {
            return false;
        }
    };
    EventMainListComponent.prototype.arrayContainsArray = function (superset, subset) {
        for (var j = 0; j < subset.length; j++) {
            if (!superset.includes(subset[j])) {
                return false;
            }
        }
        return true;
    };
    EventMainListComponent.prototype.toggleTags = function (tag) {
        var _this = this;
        if (this.isActiveTag(tag)) {
            var index = this.activeTags.indexOf(tag);
            this.activeTags.splice(index, 1);
        }
        else {
            this.activeTags.push(tag);
        }
        console.log(this.activeTags);
        this.loadEvents().then(function (events) {
            console.log(_this.trainingEvent);
            console.log(_this.adventureEvent);
            // for (let k = 0; k < this.relaxEvent.length; k++) {
            //   console.log(k);
            // }
            var newAdventureEvent = [];
            for (var k = 0; k < _this.adventureEvent.length; k++) {
                var event_1 = _this.adventureEvent[k];
                console.log(k);
                console.log(event_1);
                if (_this.arrayContainsArray(event_1.tags, _this.activeTags)) {
                    newAdventureEvent.push(_this.adventureEvent[k]);
                }
                console.log('contain relax');
            }
            _this.adventureEvent = newAdventureEvent;
            var newRelaxEvent = [];
            for (var k = 0; k < _this.relaxEvent.length; k++) {
                var event_2 = _this.relaxEvent[k];
                console.log(k);
                console.log(event_2);
                if (_this.arrayContainsArray(event_2.tags, _this.activeTags)) {
                    newRelaxEvent.push(_this.relaxEvent[k]);
                }
                console.log('contain relax');
            }
            _this.relaxEvent = newRelaxEvent;
            var newTrainingEvent = [];
            for (var k = 0; k < _this.trainingEvent.length; k++) {
                var event_3 = _this.trainingEvent[k];
                console.log(k);
                console.log(event_3);
                if (_this.arrayContainsArray(event_3.tags, _this.activeTags)) {
                    newTrainingEvent.push(_this.trainingEvent[k]);
                }
                console.log('contain relax');
            }
            _this.trainingEvent = newTrainingEvent;
        });
    };
    EventMainListComponent.prototype.refactorTime = function (time) {
        var index = time.indexOf('T');
        return time.substring(0, index);
    };
    EventMainListComponent.prototype.loadEvents = function () {
        var _this = this;
        this.adventureEvent = [];
        this.relaxEvent = [];
        this.trainingEvent = [];
        return this.eventService.findAllEvents()
            .then(function (events) {
            _this.events = events;
            for (var _i = 0, events_1 = events; _i < events_1.length; _i++) {
                var event_4 = events_1[_i];
                event_4.startTime = _this.refactorTime(event_4.startTime);
                event_4.endTime = _this.refactorTime(event_4.endTime);
                // console.log(event);
                if (event_4.level === 'Adventure') {
                    if (event_4.photos.length === 0) {
                        event_4.photos.push('https://images.unsplash.com/pho' +
                            'to-1523341139367-9de570b874ed?ixlib=rb-0.3.5&ix' +
                            'id=eyJhcHBfaWQiOjEyMDd9&s=e23461455220c5147c59f5' +
                            'a2d831f545&auto=format&fit=crop&w=800&q=60');
                    }
                    _this.adventureEvent.push(event_4);
                }
                else if (event_4.level === 'Training') {
                    if (event_4.photos.length === 0) {
                        event_4.photos.push('https://images.unsplash.com/photo-' +
                            '1510159806165-0c899599899d?ixlib=rb-0.3.5&s=d1f682d' +
                            '5d1a0ea065e1ccfb4659edb58&auto=format&fit=crop&w=800' +
                            '&q=60');
                    }
                    _this.trainingEvent.push(event_4);
                }
                else {
                    if (event_4.photos.length === 0) {
                        event_4.photos.push('https://images.unsplash.com/photo-' +
                            '1470010762743-1fa2363f65ca?ixlib=rb-0.3.5&ixid=eyJh' +
                            'cHBfaWQiOjEyMDd9&s=e318710a372c9abb3a43b969b768cc3e' +
                            '&auto=format&fit=crop&w=800&q=60');
                    }
                    _this.relaxEvent.push(event_4);
                }
            }
        });
    };
    EventMainListComponent.prototype.ngOnInit = function () {
        this.loadEvents();
    };
    EventMainListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-event-main-list',
            template: __webpack_require__(/*! ./event-main-list.component.html */ "./src/app/event-main-list/event-main-list.component.html"),
            styles: [__webpack_require__(/*! ./event-main-list.component.css */ "./src/app/event-main-list/event-main-list.component.css")]
        }),
        __metadata("design:paramtypes", [_services_event_service_client__WEBPACK_IMPORTED_MODULE_1__["EventServiceClient"]])
    ], EventMainListComponent);
    return EventMainListComponent;
}());



/***/ }),

/***/ "./src/app/event-waterfall/event-waterfall.component.css":
/*!***************************************************************!*\
  !*** ./src/app/event-waterfall/event-waterfall.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\r\n  margin-top: 50px;\r\n  padding: 0;\r\n  /*background-color: rgba(51, 170, 51, .3);*/\r\n\r\n}\r\n\r\n@media (min-width: 400px) {\r\n  .masonry-item {\r\n    width: 100%;\r\n    padding: 10px;\r\n\r\n  }\r\n}\r\n\r\n@media (min-width: 770px) {\r\n  .masonry-item {\r\n    width: 50%;\r\n    padding: 10px;\r\n\r\n  }\r\n}\r\n\r\n@media (min-width: 1000px) {\r\n   .masonry-item {\r\n    width: 33.3%;\r\n    padding: 10px;\r\n\r\n  }\r\n}\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/event-waterfall/event-waterfall.component.html":
/*!****************************************************************!*\
  !*** ./src/app/event-waterfall/event-waterfall.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"container\">\r\n  <ngx-masonry [updateLayout]=\"updateMasonryLayout\" class=\"masonry\">\r\n    <ngxMasonryItem class=\"masonry-item\" *ngFor=\"let card of showedCards\">\r\n      <app-event-card [data]=\"card\"\r\n                      (updateEvent)=\"receiveUpdateEvent($event)\">\r\n      </app-event-card>\r\n    </ngxMasonryItem>\r\n  </ngx-masonry>\r\n</div>\r\n\r\n\r\n<div (window:scroll)=\"onScroll($event)\">\r\n  <!--<h1 *ngIf=\"index === cards.length\"> All Events Are Showed</h1>-->\r\n</div>\r\n"

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
/* harmony import */ var _services_event_service_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/event.service.client */ "./src/app/services/event.service.client.ts");
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
    function EventWaterfallComponent(service) {
        this.service = service;
        this.organizer = {
            _id: '',
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
                't=crop&w=800&q=60',
            role: 'organizer',
        };
        this.organizer2 = {
            _id: '',
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
                '1e&auto=format&fit=crop&w=800&q=60',
            role: 'organizer',
        };
        this.organizer3 = {
            _id: '',
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
                '=crop&w=800&q=60',
            role: 'organizer',
        };
        this.event = {
            _id: '',
            organizer: '',
            startTime: new Date(),
            endTime: new Date(),
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
            description: [],
            tags: [],
            attendee: [],
            level: ''
        };
        this.event2 = {
            _id: '',
            organizer: '',
            startTime: new Date(),
            endTime: new Date(),
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
            description: [],
            tags: [],
            attendee: [],
            level: ''
        };
        this.event3 = {
            _id: '',
            organizer: '',
            startTime: new Date(),
            endTime: new Date(),
            title: 'Where Amazing Happens',
            photos: ['https://images.unsplash.com/photo-1513673953' +
                    '682-c64113e2866a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyM' +
                    'Dd9&s=2ac493edfc02a322820703625d747055&auto=format&fit' +
                    '=crop&w=800&q=60',
            ],
            video: '',
            description: [],
            tags: [],
            attendee: [],
            level: ''
        };
        this.event4 = {
            _id: '',
            organizer: '',
            startTime: new Date(),
            endTime: new Date(),
            title: 'Hey, The Moutains Are Calling',
            photos: ['https://images.unsplash.com/p' +
                    'hoto-1486935964461-b5ac6a3e72cd?ixlib=rb-' +
                    '0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c57c0c6f' +
                    'f5b2d9b38f14f96484450607&auto=format&fit=cr' +
                    'op&w=800&q=60',
            ],
            video: '',
            description: [],
            tags: [],
            attendee: [],
            level: ''
        };
        this.event5 = {
            _id: '',
            organizer: '',
            startTime: new Date(),
            endTime: new Date(),
            title: 'Party in the beach',
            photos: ['https://images.unsplash.com/photo-15230' +
                    '44214787-9caaa5ee4d8e?ixlib=rb-0.3.5&ixid=eyJhcH' +
                    'BfaWQiOjEyMDd9&s=b79aad29f0e5db2af7fa698998f22985' +
                    '&auto=format&fit=crop&w=800&q=60',
            ],
            video: '',
            description: [],
            tags: [],
            attendee: [],
            level: ''
        };
        this.event6 = {
            _id: '',
            organizer: '',
            startTime: new Date(),
            endTime: new Date(),
            title: 'Party in the beach',
            photos: ['https://images.unsplash.com/photo-1510797492219-' +
                    'e110e2a935a4?ixlib=rb-0.3.5&s=485c6f91293bb46aeb510da2ed33' +
                    '3f87&auto=format&fit=crop&w=800&q=60',
            ],
            video: '',
            description: [],
            tags: [],
            attendee: [],
            level: ''
        };
        this.event7 = {
            _id: '',
            organizer: '',
            startTime: new Date(),
            endTime: new Date(),
            title: 'Party in the beach',
            photos: ['https://images.unsplash.com/photo-149475061374' +
                    '6-dff7ee759071?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&' +
                    's=65b3f3cd89b0a3e27574784d4dc23048&auto=format&fit=crop&' +
                    'w=800&q=60',
            ],
            video: '',
            description: [],
            tags: [],
            attendee: [],
            level: ''
        };
        this.event8 = {
            _id: '',
            organizer: '',
            startTime: new Date(),
            endTime: new Date(),
            title: 'Party in the beach',
            photos: ['https://images.unsplash.com/photo-1517321579022-aa' +
                    '4d037c3b6e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=93072' +
                    '1f7f08fd5fdc79bc0e107a71e08&auto=format&fit=crop&w=800&q=60',
            ],
            video: '',
            description: [],
            tags: [],
            attendee: [],
            level: ''
        };
        this.event9 = {
            _id: '',
            organizer: '',
            startTime: new Date(),
            endTime: new Date(),
            title: 'Party in the beach',
            photos: ['https://images.unsplash.com/photo-15258260' +
                    '78603-8ae39aff46ca?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiO' +
                    'jEyMDd9&s=a33b5370139fd1bdfc3234fba62d308e&auto=form' +
                    'at&fit=crop&w=800&q=60',
            ],
            video: '',
            description: [],
            tags: [],
            attendee: [],
            level: ''
        };
        // cards: EventCard[] = [this.event, this.event2, this.event3,
        //                       this.event4, this.event5, this.event6,
        //                       this.event7, this.event8, this.event9];
        this.cards = [];
        this.showedCards = [];
        this.index = 0;
        this.updateMasonryLayout = true;
        this.initialDataLoaded = false;
    }
    EventWaterfallComponent.prototype.receiveUpdateEvent = function ($event) {
        this.updateMasonryLayout = !this.updateMasonryLayout;
    };
    EventWaterfallComponent.prototype.onScroll = function ($event) {
        // console.log('On Scroll');
        // console.log(window.innerHeight);
        // console.log(window.scrollY);
        // console.log(document.body.offsetHeight);
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
            // console.log('On Scroll Down');
            if (this.index < this.cards.length) {
                this.showedCards.push(this.cards[this.index]);
                this.index++;
            }
            // this.showedCards.push(this.event9);
            // this.showedCards.push(this.event9);
            // this.showedCards.push(this.event9);
        }
    };
    EventWaterfallComponent.prototype.refactorTime = function (time) {
        var index = time.indexOf('T');
        return time.substring(0, index);
    };
    EventWaterfallComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.findAllEvents()
            .then(function (events) {
            console.log(events);
            _this.cards = events;
            _this.updateMasonryLayout = !_this.updateMasonryLayout;
            _this.cards.forEach(function (event) {
                event.startTime = _this.refactorTime(event.startTime);
                event.endTime = _this.refactorTime(event.endTime);
            });
            _this.cards = _this.cards.reverse();
            while (_this.index < 3 && _this.index < _this.cards.length) {
                _this.showedCards.push(_this.cards[_this.index]);
                _this.index = _this.index + 1;
            }
            console.log(_this.index);
            console.log(_this.showedCards);
        });
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
        __metadata("design:paramtypes", [_services_event_service_client__WEBPACK_IMPORTED_MODULE_1__["EventServiceClient"]])
    ], EventWaterfallComponent);
    return EventWaterfallComponent;
}());



/***/ }),

/***/ "./src/app/events-list-for-profile/events-list-for-profile.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/events-list-for-profile/events-list-for-profile.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\r\n  width: 100%;\r\n  height: 40px;\r\n  background-color: whitesmoke;\r\n  margin-top: 15px;\r\n}\r\n\r\n.accountType {\r\n  margin-left: 15px;\r\n  margin-top: 5px;\r\n}\r\n\r\n@media (min-width: 400px) {\r\n  .card-columns {\r\n    -webkit-column-count: 1;\r\n            column-count: 1;\r\n  }\r\n}\r\n\r\n@media (min-width: 770px) {\r\n  .card-columns {\r\n    -webkit-column-count: 2;\r\n            column-count: 2;\r\n  }\r\n}\r\n\r\n.card-columns {\r\n  margin-top: 15px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/events-list-for-profile/events-list-for-profile.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/events-list-for-profile/events-list-for-profile.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\r\n  <h3 class=\"accountType\" *ngIf=\"type === 'oa'\">Organized Events: {{events.length}}</h3>\r\n  <h3 class=\"accountType\" *ngIf=\"type === 'pa'\">Attended Events: {{events.length}}</h3>\r\n</div>\r\n<div class=\"card-columns\">\r\n  <div *ngFor=\"let event of events\">\r\n    <app-event-card-for-profile [type]=\"type\" [data]=\"event\" (newEvents) = 'receiveEvents($event)' [isSame] = \"isSame\"></app-event-card-for-profile>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/events-list-for-profile/events-list-for-profile.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/events-list-for-profile/events-list-for-profile.component.ts ***!
  \******************************************************************************/
/*! exports provided: EventsListForProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsListForProfileComponent", function() { return EventsListForProfileComponent; });
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

var EventsListForProfileComponent = /** @class */ (function () {
    function EventsListForProfileComponent() {
        this.messageEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    EventsListForProfileComponent.prototype.receiveEvents = function ($event) {
        this.messageEvent.emit($event);
    };
    EventsListForProfileComponent.prototype.ngOnInit = function () {
        if (this.type === 'pa') {
            var temp_1 = [];
            this.events.forEach(function (enrollment) {
                temp_1.push(enrollment.event);
            });
            this.events = temp_1;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], EventsListForProfileComponent.prototype, "type", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], EventsListForProfileComponent.prototype, "events", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], EventsListForProfileComponent.prototype, "isSame", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], EventsListForProfileComponent.prototype, "messageEvent", void 0);
    EventsListForProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-events-list-for-profile',
            template: __webpack_require__(/*! ./events-list-for-profile.component.html */ "./src/app/events-list-for-profile/events-list-for-profile.component.html"),
            styles: [__webpack_require__(/*! ./events-list-for-profile.component.css */ "./src/app/events-list-for-profile/events-list-for-profile.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EventsListForProfileComponent);
    return EventsListForProfileComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#footer {\r\n  background-color: #2e3e48;\r\n  height: 20%;\r\n  width: 100%;\r\n}\r\n\r\n#followMsg {\r\n  color: white;\r\n  margin-left: 50px;\r\n  margin-top: 25px;\r\n}\r\n\r\n.fab {\r\n  color: white;\r\n  cursor: pointer;\r\n  margin-top: 25px;\r\n}\r\n\r\n.fa-facebook-square {\r\n  /*margin-left: 120px;*/\r\n}\r\n\r\n.fa-twitter {\r\n  margin-left: 20px;\r\n}\r\n\r\n.fa-youtube {\r\n  margin-left: 20px;\r\n}\r\n\r\n.fa-instagram {\r\n  margin-left: 20px;\r\n}\r\n\r\n.fa-weixin {\r\n  margin-left: 20px;\r\n}\r\n\r\n.fa-weibo {\r\n  margin-left: 20px;\r\n}\r\n\r\n#appStore {\r\n  margin-top: 15px;\r\n  margin-bottom: 10px;\r\n  cursor: pointer;\r\n  height: 50px; width: 160px;\r\n}\r\n\r\n#googlePlay {\r\n  margin-bottom: 10px;\r\n  margin-top: 15px;\r\n  margin-left: 20px;\r\n  cursor: pointer;\r\n  height: 50px; width: 160px;\r\n}\r\n\r\n#QRcode {\r\n  margin-left: 20px;\r\n  margin-top: 10px;\r\n  margin-bottom: 10px;\r\n  height: 60px;\r\n  width: 60px;\r\n}\r\n\r\n.row {\r\n  width: 100%;\r\n}\r\n"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"footer\">\r\n  <div class=\"row\">\r\n    <div class=\"col-2\">\r\n      <h4 id=\"followMsg\">Follow us</h4>\r\n    </div>\r\n    <div class=\"col-4\">\r\n      <i class=\"fab fa-facebook-square fa-2x\"></i>\r\n      <i class=\"fab fa-twitter fa-2x\"></i>\r\n      <i class=\"fab fa-youtube fa-2x\"></i>\r\n      <i class=\"fab fa-instagram fa-2x\"></i>\r\n      <i class=\"fab fa-weixin fa-2x\"></i>\r\n      <i class=\"fab fa-weibo fa-2x\"></i>\r\n    </div>\r\n    <div class=\"col-6\">\r\n      <img id=\"appStore\" src=\"../../assets/images/app_store.png\">\r\n      <img id=\"googlePlay\" src=\"../../assets/images/google_play.png\">\r\n      <img id=\"QRcode\" src=\"../../assets/images/qr-code.png\">\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
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

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/friend-list/friend-list.component.css":
/*!*******************************************************!*\
  !*** ./src/app/friend-list/friend-list.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\r\n  width: 100%;\r\n  height: 40px;\r\n  background-color: whitesmoke;\r\n  margin-top: 15px;\r\n}\r\n\r\n.icon {\r\n  margin: 5px;\r\n}\r\n\r\n.avatar {\r\n  border-radius: 50%;\r\n  background-image: url('https://images.unsplash.com/photo-1495078065017-564723e7e3e7?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=09093dcdf66dbcd2397b9dc19384a899&auto=format&fit=crop&w=800&q=60');\r\n  width: 100%;\r\n  padding-bottom: 100%;\r\n  background-size: cover;\r\n  background-position: center;\r\n  z-index: 1;\r\n}\r\n\r\n.avatar-container {\r\n  margin-left: 10%;\r\n  margin-bottom: 25px;\r\n  margin-top: 25px;\r\n  display: inline-block;\r\n  width: 100px;\r\n  padding: 0;\r\n}\r\n\r\n.name {\r\n  /*display: inline-block;*/\r\n  /*padding-left: 5%;*/\r\n  /*position: absolute;*/\r\n  /*top: 50%;*/\r\n  margin-top: 35px;\r\n  margin-left: 25px;\r\n  font-size: xx-large;\r\n}\r\n\r\n/*.button {*/\r\n\r\n/*position: absolute;*/\r\n\r\n/*top: 55%;*/\r\n\r\n/*right: 5%;*/\r\n\r\n/*}*/\r\n\r\n.card {\r\n  margin-top: 10px;\r\n}\r\n\r\n/*@media (min-width: 400px) {*/\r\n\r\n/*.card-columns {*/\r\n\r\n/*column-count: 1;*/\r\n\r\n/*}*/\r\n\r\n/*}*/\r\n\r\n/*@media (min-width: 770px) {*/\r\n\r\n/*.card-columns {*/\r\n\r\n/*column-count: 2;*/\r\n\r\n/*}*/\r\n\r\n/*}*/\r\n\r\n/*.name div {*/\r\n\r\n/*padding-top: 5px;*/\r\n\r\n/*margin-bottom: 20px;*/\r\n\r\n/*font-family: \"Bradley Hand\";*/\r\n\r\n/*overflow: hidden;*/\r\n\r\n/*white-space: nowrap;*/\r\n\r\n/*}*/\r\n\r\n"

/***/ }),

/***/ "./src/app/friend-list/friend-list.component.html":
/*!********************************************************!*\
  !*** ./src/app/friend-list/friend-list.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <div class=\"header\">\r\n    <h3>Total Following: {{friendList.length}}</h3>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div *ngFor=\"let people of friendList\" class=\"col-4\">\r\n      <!--<div class=\"card-columns\">-->\r\n\r\n        <div class=\"card\">\r\n          <div class=\"card-header\">\r\n            <button  *ngIf=\"isSame\" class=\"button btn btn-outline-danger float-right\" (click)=\"unfollowUser(people._id)\">\r\n              Un-follow\r\n            </button>\r\n          </div>\r\n          <div class=\"card-body\">\r\n\r\n            <div class=\"input-group-append\">\r\n              <div class=\"avatar-container\">\r\n                <div class=\"avatar\" *ngIf=\"people.profilePhoto\" [ngStyle]=\"{'background-image': 'url(' + people.profilePhoto + ')'}\"></div>\r\n                <div class=\"avatar\" *ngIf=\"!people.profilePhoto\"></div>\r\n              </div>\r\n\r\n              <div class=\"name\">\r\n                <div class=\"text-sm-left\">\r\n                  <a class=\"text-muted\" [routerLink]=\"['/profile/' + people._id]\">{{people.username}} </a>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n\r\n\r\n          </div>\r\n\r\n        </div>\r\n      <!--</div>-->\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/friend-list/friend-list.component.ts":
/*!******************************************************!*\
  !*** ./src/app/friend-list/friend-list.component.ts ***!
  \******************************************************/
/*! exports provided: FriendListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FriendListComponent", function() { return FriendListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FriendListComponent = /** @class */ (function () {
    function FriendListComponent(userService, route) {
        this.userService = userService;
        this.route = route;
        this.newFriends = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    FriendListComponent.prototype.ngOnInit = function () {
        console.log(this.friendList);
    };
    FriendListComponent.prototype.unfollowUser = function (userId) {
        var _this = this;
        this.userService
            .un_followFriend(userId)
            .then(function (res) {
            if (res.error) {
                alert(res.error);
            }
            else {
                _this.refresh();
            }
        });
    };
    FriendListComponent.prototype.refresh = function () {
        var _this = this;
        this.userService
            .findAllFollowingFriendsForUser(this.user._id)
            .then(function (followingList) { return _this.newFriends.emit(followingList); });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FriendListComponent.prototype, "friendList", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FriendListComponent.prototype, "user", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FriendListComponent.prototype, "isSame", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], FriendListComponent.prototype, "newFriends", void 0);
    FriendListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-friend-list',
            template: __webpack_require__(/*! ./friend-list.component.html */ "./src/app/friend-list/friend-list.component.html"),
            styles: [__webpack_require__(/*! ./friend-list.component.css */ "./src/app/friend-list/friend-list.component.css")]
        }),
        __metadata("design:paramtypes", [_services_user_service_client__WEBPACK_IMPORTED_MODULE_1__["UserServiceClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], FriendListComponent);
    return FriendListComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.main-background {\r\n  background-image: url(https://images.unsplash.com/photo-1508768516474-73606cb84ce2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e074f33c229b735080438a384e50ada1&auto=format&fit=crop&w=2299&q=80);\r\n  background-size: cover;\r\n  background-position: center;\r\n  width: 100%;\r\n  height: 550px;\r\n\r\n}\r\n\r\n#main-button {\r\n  margin-top: 25px;\r\n  box-shadow: 0 16px 24px 2px rgba(0, 0, 0, .8),\r\n              0 6px 30px 5px rgba(0, 0, 0, .8),\r\n              0 8px 10px -5px rgba(0, 0, 0, .9);\r\n  background-color: white;\r\n  opacity: 0.9;\r\n}\r\n\r\n#main-text {\r\n  text-align: center;\r\n  padding-top: 200px;\r\n  text-shadow: 0 8px 8px rgba(0,0,0,0.9),\r\n                0 8px 13px rgba(0,0,0,0.8),\r\n                0 8px 23px rgba(0,0,0,0.8);\r\n}\r\n\r\n#main-text h1 {\r\n  font-weight: 700;\r\n  font-family: 'Lato';\r\n  color: white;\r\n  font-size: 5em\r\n}\r\n\r\n#main-text h3 {\r\n  font-family: 'Lato';\r\n  color: white\r\n}\r\n\r\n#main-get-start {\r\n  text-shadow: none;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"main-background\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-12\">\r\n        <div id=\"main-text\">\r\n          <h1>Husky Camp</h1>\r\n          <h3>The Best Camping Society App</h3>\r\n            <a id=\"main-button\" class=\"btn btn-lg rounded\">\r\n              <span (click)=\"goEventList()\" id=\"main-get-start\">\r\n                <i class=\"fa fa-paw\"></i> Get Start!\r\n              </span>\r\n            </a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div>\r\n  <app-event-waterfall></app-event-waterfall>\r\n</div>\r\n\r\n"

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


var HomeComponent = /** @class */ (function () {
    function HomeComponent(router) {
        this.router = router;
    }
    HomeComponent.prototype.goEventList = function () {
        this.router.navigateByUrl('eventList');
    };
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.test = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
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

module.exports = "/*register*/\r\n#regisMsg span {\r\n  color: gray;\r\n  margin-right: 20px;\r\n}\r\n#regisMsg {\r\n  margin-top: 20px;\r\n  margin-left: 120px;\r\n}\r\n#usernameFld {\r\n  margin-top: 15px;\r\n}\r\n#passwordFld {\r\n  margin-top: 15px;\r\n}\r\n#confirmPasswordFld {\r\n  margin-top: 15px;\r\n}\r\n#continueBtn {\r\n  margin-top: 15px;\r\n}\r\n#loginLink {\r\n  color: cornflowerblue;\r\n}\r\n#organizationLink {\r\n  color: cornflowerblue;\r\n}\r\n#organizationMsg {\r\n  color: gray;\r\n  margin-right: 20px;\r\n}\r\n#mapPinIcon {\r\n  margin-right: 8px;\r\n}\r\n#locationBlock {\r\n  margin-top: 10px;\r\n}\r\n#locationMsg {\r\n  margin-top: 10px;\r\n  color: gray;\r\n}\r\n/*login*/\r\n#loginMsg span {\r\n  color: gray;\r\n  margin-right: 20px;\r\n}\r\n#loginMsg {\r\n  margin-top: 20px;\r\n  margin-left: 100px;\r\n}\r\n#signUpLink {\r\n  color: cornflowerblue;\r\n}\r\n#loginUsernameFld {\r\n  margin-top: 15px;\r\n}\r\n#loginPasswordFld {\r\n  margin-top: 15px;\r\n}\r\n#loginContinueBtn {\r\n  margin-top: 30px;\r\n}\r\n#loginType {\r\n  margin-top: 15px;\r\n}\r\n.dropdown-item {\r\n  cursor: pointer;\r\n}\r\n#loginNavLink {\r\n  cursor: pointer;\r\n}\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a class=\"nav-link\" id=\"loginNavLink\" (click)=\"openLogin(login)\">Login</a>\r\n\r\n<ng-template #register>\r\n  <div class=\"modal-header\">\r\n    <h4 id=\"signUpHeader\" class=\"modal-title pull-left\">Sign Up</h4>\r\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"registerWindow.hide()\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <!--<div class=\"modal-header\">-->\r\n    <!--<div>-->\r\n      <!--<span id=\"organizationMsg\">Organization User?</span>-->\r\n      <!--<a id=\"organizationLink\" routerLink=\"/organization/signUp\" (click)=\"closeRegister()\">Sign Up as Organization</a>-->\r\n    <!--</div>-->\r\n  <!--</div>-->\r\n  <div class=\"modal-body\">\r\n    <div *ngFor=\"let alert of alerts\">\r\n      <alert [type]=\"alert.type\" [dismissOnTimeout]=\"alert.timeout\" (onClosed)=\"onClosed(alert)\">{{ alert.msg }}</alert>\r\n    </div>\r\n    <div>\r\n      <span id=\"organizationMsg\">Organization User?</span>\r\n      <a id=\"organizationLink\" routerLink=\"/organization/signUp\" (click)=\"closeRegister()\">Sign Up as Organization</a>\r\n    </div>\r\n    <!--<div>-->\r\n      <!--<span id=\"regisMsg\">Already a member?</span>-->\r\n      <!--<a id=\"loginLink\" routerLink=\"/login\" (click)=\"openLogin(login)\">Login</a>-->\r\n    <!--</div>-->\r\n    <input [(ngModel)]=\"username\" id=\"usernameFld\" class=\"form-control\" placeholder=\"Username\">\r\n    <input [(ngModel)]=\"password\" id=\"passwordFld\" class=\"form-control\" placeholder=\"Password\" type=\"password\">\r\n    <input [(ngModel)]=\"password2\" id=\"confirmPasswordFld\" class=\"form-control\" placeholder=\"Confirm Password\" type=\"password\">\r\n    <div id=\"locationBlock\">\r\n      <i id=\"mapPinIcon\" class=\"fas fa-map-marker-alt\"></i>\r\n      <span>{{location}}</span>\r\n      <p id=\"locationMsg\">We'll use your location to find events near you.</p>\r\n    </div>\r\n    <button (click)=\"registerUser(username, password, password2, location)\" id=\"continueBtn\" class=\"btn btn-block btn btn-danger\">Continue</button>\r\n    <div id=\"regisMsg\">\r\n      <span>Already a member?</span>\r\n      <a id=\"loginLink\" routerLink=\"/login\" (click)=\"openLogin(login)\">Login</a>\r\n    </div>\r\n  </div>\r\n</ng-template>\r\n\r\n<ng-template #login>\r\n  <div class=\"modal-header\">\r\n    <h4 id=\"loginHeader\" class=\"modal-title pull-left\">Login</h4>\r\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"loginWindow.hide()\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <div *ngFor=\"let alert of alerts\">\r\n      <alert [type]=\"alert.type\" [dismissOnTimeout]=\"alert.timeout\" (onClosed)=\"onClosed(alert)\">{{ alert.msg }}</alert>\r\n    </div>\r\n    <!--<div>-->\r\n      <!--<span id=\"loginMsg\">Don't have an account?</span>-->\r\n      <!--<a id=\"signUpLink\" routerLink=\"/login\" (click)=\"openRegister(register)\">Sign Up</a>-->\r\n    <!--</div>-->\r\n    <input [(ngModel)]=\"username\" id=\"loginUsernameFld\" class=\"form-control\" placeholder=\"Username\">\r\n    <input [(ngModel)]=\"password\" id=\"loginPasswordFld\" class=\"form-control\" placeholder=\"Password\" type=\"password\">\r\n    <div id=\"loginType\" class=\"input-group-append\">\r\n      <li class=\"list-group-item form-control\">{{loginType}}</li>\r\n      <div class=\"btn-group\" dropdown>\r\n        <button id=\"button-basic\" dropdownToggle type=\"button\" class=\"btn btn-danger dropdown-toggle\"\r\n                aria-controls=\"dropdown-basic\">\r\n          Select Login Type\r\n        </button>\r\n        <ul id=\"dropdown-basic\" *dropdownMenu class=\"dropdown-menu\"\r\n            role=\"menu\" aria-labelledby=\"button-basic\">\r\n          <li role=\"menuitem\"><a (click)=\"loginType = 'Personal'\" class=\"dropdown-item\">Personal</a></li>\r\n          <li role=\"menuitem\"><a (click)=\"loginType = 'Organization'\" class=\"dropdown-item\">Organization</a></li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n    <button (click)=\"loginUser(username, password)\" id=\"loginContinueBtn\" class=\"btn btn-block btn btn-danger\">Continue</button>\r\n    <div id=\"loginMsg\">\r\n      <span>Don't have an account?</span>\r\n      <a id=\"signUpLink\" routerLink=\"/login\" (click)=\"openRegister(register)\">Sign Up</a>\r\n    </div>\r\n  </div>\r\n</ng-template>\r\n"

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
/* harmony import */ var _services_provider_service_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/provider.service.client */ "./src/app/services/provider.service.client.ts");
/* harmony import */ var _communication_services_login_to_navbar_service_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../communication-services/login-to-navbar.service.client */ "./src/app/communication-services/login-to-navbar.service.client.ts");
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
    function LoginComponent(modalService, userService, mapService, providerService, router, data) {
        this.modalService = modalService;
        this.userService = userService;
        this.mapService = mapService;
        this.providerService = providerService;
        this.router = router;
        this.data = data;
        this.loginType = 'Personal';
        this.alerts = [];
    }
    LoginComponent.prototype.loginUser = function (username, password) {
        var _this = this;
        //  console.log([username, password]);
        if (username && password) {
            if (this.loginType === 'Personal') {
                this.userService
                    .login(username, password)
                    .then(function (response) {
                    return response.json();
                })
                    .then(function (user) {
                    if (!user.error) {
                        _this.newMessage();
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
            else if (this.loginType === 'Organization') {
                this.providerService
                    .login(username, password)
                    .then(function (response) {
                    return response.json();
                })
                    .then(function (user) {
                    if (!user.error) {
                        _this.newMessage();
                        _this.closeLogin();
                        _this.router.navigate(['profile']);
                    }
                    else {
                        _this.alerts.push({
                            type: 'danger',
                            msg: "User not exist or password incorrect.",
                            timeout: 5000
                        });
                    }
                });
            }
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
                        _this.newMessage();
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
    LoginComponent.prototype.newMessage = function () {
        this.data.changeMessage('login');
    };
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data.currentMessage.subscribe(function (message) { return _this.message = message; });
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
            _services_provider_service_client__WEBPACK_IMPORTED_MODULE_5__["ProviderServiceClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _communication_services_login_to_navbar_service_client__WEBPACK_IMPORTED_MODULE_6__["LoginToNavbarServiceClient"]])
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
        this.startTime = new Date();
        this.endTime = new Date();
        this.title = '';
        this.photos = [];
        this.video = '';
        this.description = [];
        this.tags = [];
        this.attendee = [];
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

/***/ "./src/app/models/equipment.model.client.ts":
/*!**************************************************!*\
  !*** ./src/app/models/equipment.model.client.ts ***!
  \**************************************************/
/*! exports provided: Equipment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Equipment", function() { return Equipment; });
var Equipment = /** @class */ (function () {
    function Equipment() {
        this.photos = [];
        this.tags = [];
    }
    return Equipment;
}());



/***/ }),

/***/ "./src/app/models/provider.model.client.ts":
/*!*************************************************!*\
  !*** ./src/app/models/provider.model.client.ts ***!
  \*************************************************/
/*! exports provided: Provider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Provider", function() { return Provider; });
/* harmony import */ var _user_model_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user.model.client */ "./src/app/models/user.model.client.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Provider = /** @class */ (function (_super) {
    __extends(Provider, _super);
    function Provider() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Provider;
}(_user_model_client__WEBPACK_IMPORTED_MODULE_0__["User"]));



/***/ }),

/***/ "./src/app/models/site.model.client.ts":
/*!*********************************************!*\
  !*** ./src/app/models/site.model.client.ts ***!
  \*********************************************/
/*! exports provided: Site */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Site", function() { return Site; });
var Site = /** @class */ (function () {
    function Site() {
    }
    return Site;
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
        this.profilePhoto = '';
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

module.exports = "#HuskyCamp {\r\n  font-family: fantasy;\r\n}\r\n\r\n#logo {\r\n  margin-right: 5px;\r\n}\r\n\r\n#divider {\r\n  height: 30px;\r\n  margin-top: 4px;\r\n  border-right: 1px solid #aaaaaa;\r\n}\r\n\r\n#menuBtn {\r\n  margin-top: 5px;\r\n  cursor: pointer;\r\n}\r\n"

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-sm fixed-top navbar-light bg-light\">\r\n  <div class=\"container\">\r\n    <img id=\"logo\" src=\"../../assets/images/logo.png\">\r\n    <a id=\"HuskyCamp\" class=\"navbar-brand\" routerLink=\"/home\">HuskyCamp</a>\r\n  <button class=\"navbar-toggler\"\r\n          type=\"button\" data-toggle=\"collapse\"\r\n          data-target=\"#navbarTogglerDemo02\"\r\n          aria-controls=\"navbarTogglerDemo02\"\r\n          aria-expanded=\"false\"\r\n          aria-label=\"Toggle navigation\"\r\n          (click)=\"toggleCollapsed()\"\r\n          >\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n  <div id=\"navbarSupportedContent\" [ngClass]=\"{'collapse': collapsed, 'navbar-collapse': true}\">\r\n    <ul class=\"navbar-nav ml-auto\">\r\n      <!--<li class=\"nav-item\">-->\r\n        <!--<a class=\"nav-link\" routerLink=\"/organization/signUp\">Organization SignUp</a>-->\r\n      <!--</li>-->\r\n      <!--<li id=\"divider\" class=\"divider-vertical\"></li>-->\r\n      <li *ngIf=\"message !== 'login'\" class=\"nav-item\">\r\n        <!--<a class=\"nav-link\" href=\"#\">Login</a>-->\r\n        <app-login></app-login>\r\n      </li>\r\n      <li *ngIf=\"message !== 'login'\" class=\"nav-item\">\r\n        <!--<a class=\"nav-link disabled\" href=\"#\">Register</a>-->\r\n        <app-register></app-register>\r\n      </li>\r\n      <!--<li *ngIf=\"message === 'login'\" id=\"divider\" class=\"divider-vertical\"></li>-->\r\n      <li *ngIf=\"message === 'login'\" class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"/profile\">Profile</a>\r\n      </li>\r\n      <li *ngIf=\"message === 'login'\" class=\"nav-item\">\r\n        <a (click)=\"logout()\" class=\"nav-link\" routerLink=\"/home\">Logout</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <div class=\"btn-group\" dropdown>\r\n          <i id=\"menuBtn\" dropdownToggle class=\"nav-link fas fa-ellipsis-h\"\r\n                  aria-controls=\"dropdown-basic\">\r\n          </i>\r\n          <ul id=\"dropdown-basic\" *dropdownMenu class=\"dropdown-menu\"\r\n              role=\"menu\" aria-labelledby=\"button-basic\">\r\n            <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"eventList\">Explore Events</a></li>\r\n            <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"search\">Find CampingSites</a></li>\r\n            <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"equipmentList\">Get Equipments</a></li>\r\n            <!--<li class=\"divider dropdown-divider\"></li>-->\r\n            <!--<li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">Separated link</a>-->\r\n            <!--</li>-->\r\n          </ul>\r\n        </div>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n  </div>\r\n</nav>\r\n"

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
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _services_provider_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/provider.service.client */ "./src/app/services/provider.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _communication_services_login_to_navbar_service_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../communication-services/login-to-navbar.service.client */ "./src/app/communication-services/login-to-navbar.service.client.ts");
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
    function NavbarComponent(userService, providerService, router, data) {
        this.userService = userService;
        this.providerService = providerService;
        this.router = router;
        this.data = data;
        this.collapsed = true;
    }
    NavbarComponent.prototype.toggleCollapsed = function () {
        this.collapsed = !this.collapsed;
    };
    NavbarComponent.prototype.logout = function () {
        var _this = this;
        this.userService
            .logout()
            .then(function () {
            _this.message = 'logout';
            _this.router.navigate(['home']);
        });
    };
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data.currentMessage
            .subscribe(function (message) {
            _this.message = message;
        });
        this.userService.profile()
            .then(function (user) {
            if (user._id) {
                _this.message = 'login';
            }
        });
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [_services_user_service_client__WEBPACK_IMPORTED_MODULE_1__["UserServiceClient"],
            _services_provider_service_client__WEBPACK_IMPORTED_MODULE_2__["ProviderServiceClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _communication_services_login_to_navbar_service_client__WEBPACK_IMPORTED_MODULE_4__["LoginToNavbarServiceClient"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/organization-sign-up/organization-sign-up.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/organization-sign-up/organization-sign-up.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".organization-background {\r\n  background-image: url('orgSingUpBG.jpg');\r\n  background-size: cover;\r\n  background-position: center;\r\n  width: 100%;\r\n  height: 360px;\r\n\r\n}\r\n\r\n#organization-body {\r\n  margin-left: 300px;\r\n  margin-right: 300px;\r\n}\r\n\r\n#organization-text {\r\n  text-align: center;\r\n  padding-top: 200px;\r\n  text-shadow: 0 8px 8px rgba(0,0,0,0.9),\r\n  0 8px 13px rgba(0,0,0,0.8),\r\n  0 8px 23px rgba(0,0,0,0.8);\r\n}\r\n\r\n#organization-text h5 {\r\n  font-weight: 700;\r\n  font-family: 'Lato';\r\n  color: white;\r\n  font-size: 3em\r\n}\r\n\r\n#organization-text h3 {\r\n  font-family: 'Lato';\r\n  color: white\r\n}\r\n\r\n#step-1 {\r\n  margin-top: 30px;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n#step-1 span {\r\n  font-size: 2em;\r\n}\r\n\r\n#step-1 p {\r\n  color: gray;\r\n}\r\n\r\n#step-1 button {\r\n  margin-top: 10px;\r\n}\r\n\r\n#step-1 img {\r\n  margin-right: 10px;\r\n}\r\n\r\n#usernameFld {\r\n  margin-top: 10px;\r\n}\r\n\r\n#passwordFld {\r\n  margin-top: 10px;\r\n}\r\n\r\n#confirmPasswordFld {\r\n  margin-top: 10px;\r\n}\r\n\r\n#step-2 {\r\n  margin-top: 40px;\r\n  margin-bottom: 60px;\r\n}\r\n\r\n#step-2 p {\r\n  color: gray;\r\n}\r\n\r\n#step-2 span {\r\n  font-size: 2em;\r\n}\r\n\r\n#step-2 img {\r\n  margin-right: 10px;\r\n}\r\n\r\n#step-2 button {\r\n  margin-top: 10px;\r\n}\r\n\r\n#organizationNameFld {\r\n  margin-top: 10px;\r\n}\r\n\r\n#step-3 {\r\n  margin-top: 40px;\r\n  margin-bottom: 60px;\r\n}\r\n\r\n#step-3 p {\r\n  color: gray;\r\n}\r\n\r\n#step-3 span {\r\n  font-size: 2em;\r\n}\r\n\r\n#step-3 button {\r\n  margin-top: 10px;\r\n}\r\n\r\n#step-3 img {\r\n  margin-right: 10px;\r\n}\r\n\r\n#organizationAddressFld {\r\n  margin-top: 10px;\r\n}\r\n\r\n#step-4 {\r\n  margin-top: 40px;\r\n  margin-bottom: 60px;\r\n}\r\n\r\n#step-4 p {\r\n  color: gray;\r\n}\r\n\r\n#step-4 span {\r\n  font-size: 2em;\r\n}\r\n\r\n#step-4 button {\r\n  margin-top: 10px;\r\n}\r\n\r\n#step-4 img {\r\n  margin-right: 10px;\r\n}\r\n\r\n#step-4 li {\r\n  margin-top: 10px;\r\n}\r\n\r\n#organizationServiceFld {\r\n  margin-top: 10px;\r\n}\r\n\r\n#alertBox {\r\n  margin-top: 10px;\r\n}\r\n\r\n.dropdown-item {\r\n  cursor: pointer;\r\n}\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/organization-sign-up/organization-sign-up.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/organization-sign-up/organization-sign-up.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"organization-background\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-12\">\r\n        <div id=\"organization-text\">\r\n          <h5>Register Your Organization With Us</h5>\r\n          <!--<h3>The Best Camping Society App</h3>-->\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div id=\"organization-body\">\r\n  <div id=\"step-1\">\r\n    <p><img src=\"../../assets/images/userAccountIcon.png\">Step 1 of 4</p>\r\n    <span>Create Username and Password for your account</span>\r\n    <input [(ngModel)]=\"username\" id=\"usernameFld\" class=\"form-control\" placeholder=\"Username\">\r\n    <input [(ngModel)]=\"password\" id=\"passwordFld\" class=\"form-control\" placeholder=\"Password\" type=\"password\">\r\n    <input [(ngModel)]=\"password2\" id=\"confirmPasswordFld\" class=\"form-control\" placeholder=\"Confirm Password\" type=\"password\">\r\n    <button type=\"button\" class=\"btn btn-danger\" (click)=\"step1isCollapsed = !step1isCollapsed\"\r\n            [attr.aria-expanded]=\"!step1isCollapsed\" aria-controls=\"collapseBasic\"\r\n            [disabled]=\"!(username&&password&&password2)\">Next\r\n    </button>\r\n    <hr>\r\n  </div>\r\n\r\n  <div id=\"collapseBasic\" [collapse]=\"step1isCollapsed\">\r\n    <div id=\"step-2\">\r\n      <p><img src=\"../../assets/images/orgNameIcon.png\">Step 2 of 4</p>\r\n      <span>Tell Us the Name of Your Organization</span>\r\n      <input [(ngModel)]=\"organizationName\" id=\"organizationNameFld\" class=\"form-control\" placeholder=\"Organization Name\">\r\n      <button type=\"button\" class=\"btn btn-danger\" (click)=\"step2isCollapsed = !step2isCollapsed\"\r\n              [attr.aria-expanded]=\"!step2isCollapsed\" aria-controls=\"collapseBasic2\"\r\n              [disabled]=\"!organizationName\">Next\r\n      </button>\r\n      <hr>\r\n    </div>\r\n  </div>\r\n\r\n  <div id=\"collapseBasic2\" [collapse]=\"step2isCollapsed\">\r\n    <div id=\"step-3\">\r\n      <p><img src=\"../../assets/images/orgAddressIcon.png\">Step 3 of 4</p>\r\n      <span>Tell Us the Address of Your Organization</span>\r\n      <input [(ngModel)]=\"organizationAddress\" id=\"organizationAddressFld\" class=\"form-control\" placeholder=\"Organization Address\">\r\n      <button type=\"button\" class=\"btn btn-danger\" (click)=\"step3isCollapsed = !step3isCollapsed\"\r\n              [attr.aria-expanded]=\"!step3isCollapsed\" aria-controls=\"collapseBasic3\"\r\n              [disabled]=\"!organizationAddress\">Next\r\n      </button>\r\n      <hr>\r\n    </div>\r\n\r\n    <div id=\"collapseBasic3\" [collapse]=\"step3isCollapsed\">\r\n      <div id=\"step-4\">\r\n        <p><img src=\"../../assets/images/orgServiceIcon.png\">Step 4 of 4</p>\r\n        <span>Tell Us the Service Type of Your Organization</span>\r\n        <div class=\"input-group-append\">\r\n          <li class=\"list-group-item form-control\">{{organizationService}}</li>\r\n          <!--<input [(ngModel)]=\"organizationService\" id=\"organizationServiceFld\" class=\"form-control\" placeholder=\"Organization Service\">-->\r\n          <div class=\"btn-group\" dropdown>\r\n            <button id=\"button-basic\" dropdownToggle type=\"button\" class=\"btn btn-danger dropdown-toggle\"\r\n                    aria-controls=\"dropdown-basic\">\r\n              Select Service Type\r\n            </button>\r\n            <ul id=\"dropdown-basic\" *dropdownMenu class=\"dropdown-menu\"\r\n                role=\"menu\" aria-labelledby=\"button-basic\">\r\n              <li role=\"menuitem\"><a (click)=\"organizationService = serviceRole.SiteManager\" class=\"dropdown-item\">Site Manager</a></li>\r\n              <li role=\"menuitem\"><a (click)=\"organizationService = serviceRole.EquipmentDealer\" class=\"dropdown-item\">Equipment Dealer</a></li>\r\n            </ul>\r\n          </div>\r\n        </div>\r\n        <div *ngFor=\"let alert of alerts\" id=\"alertBox\">\r\n          <alert [type]=\"alert.type\" [dismissOnTimeout]=\"alert.timeout\" (onClosed)=\"onClosed(alert)\">{{ alert.msg }}</alert>\r\n        </div>\r\n        <button (click)=\"registerProvider(username, password, password2, organizationName, organizationAddress, organizationService)\"\r\n                class=\"btn btn-danger\" [disabled]=\"!organizationService\">Continue</button>\r\n        <hr>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/organization-sign-up/organization-sign-up.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/organization-sign-up/organization-sign-up.component.ts ***!
  \************************************************************************/
/*! exports provided: OrganizationSignUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganizationSignUpComponent", function() { return OrganizationSignUpComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_provider_service_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/provider.service.client */ "./src/app/services/provider.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _communication_services_login_to_navbar_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../communication-services/login-to-navbar.service.client */ "./src/app/communication-services/login-to-navbar.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var OrganizationSignUpComponent = /** @class */ (function () {
    function OrganizationSignUpComponent(providerService, data, router) {
        this.providerService = providerService;
        this.data = data;
        this.router = router;
        this.step1isCollapsed = true;
        this.step2isCollapsed = true;
        this.step3isCollapsed = true;
        this.alerts = [];
        this.serviceRole = {
            SiteManager: 'SiteManager',
            EquipmentDealer: 'EquipmentDealer'
        };
        this._opened = false;
    }
    OrganizationSignUpComponent.prototype._toggleSidebar = function () {
        this._opened = !this._opened;
    };
    OrganizationSignUpComponent.prototype.newMessage = function () {
        this.data.changeMessage('login');
    };
    OrganizationSignUpComponent.prototype.registerProvider = function (username, password, password2, organizationName, organizationAddress, service) {
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
            else if (!organizationName) {
                this.alerts.push({
                    type: 'danger',
                    msg: "Organization Name can not be empty.",
                    timeout: 5000
                });
            }
            else if (!organizationAddress) {
                this.alerts.push({
                    type: 'danger',
                    msg: "Organization Address can not be empty.",
                    timeout: 5000
                });
            }
            else if (!service) {
                this.alerts.push({
                    type: 'danger',
                    msg: "Please choose a Service Type.",
                    timeout: 5000
                });
            }
            else {
                this.providerService
                    .createProvider(username, password, organizationName, organizationAddress, service)
                    .then(function (response) {
                    return response.json();
                })
                    .then(function (user) {
                    if (!user.err) {
                        _this.newMessage();
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
    OrganizationSignUpComponent.prototype.onClosed = function (dismissedAlert) {
        this.alerts = this.alerts.filter(function (alert) { return alert !== dismissedAlert; });
    };
    OrganizationSignUpComponent.prototype.ngOnInit = function () {
    };
    OrganizationSignUpComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-organization-sign-up',
            template: __webpack_require__(/*! ./organization-sign-up.component.html */ "./src/app/organization-sign-up/organization-sign-up.component.html"),
            styles: [__webpack_require__(/*! ./organization-sign-up.component.css */ "./src/app/organization-sign-up/organization-sign-up.component.css")]
        }),
        __metadata("design:paramtypes", [_services_provider_service_client__WEBPACK_IMPORTED_MODULE_1__["ProviderServiceClient"],
            _communication_services_login_to_navbar_service_client__WEBPACK_IMPORTED_MODULE_3__["LoginToNavbarServiceClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], OrganizationSignUpComponent);
    return OrganizationSignUpComponent;
}());



/***/ }),

/***/ "./src/app/profile-for-visitor/profile-for-visitor.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/profile-for-visitor/profile-for-visitor.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.avatar-container {\r\n  display: inline-block;\r\n  width: 160px;\r\n  hight: 160px;\r\n  z-index: 1;\r\n  position: absolute;\r\n  left: 50px;\r\n  top: 70px;\r\n}\r\n\r\n.avatar {\r\n  border-radius: 50%;\r\n  background-image: url('https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b6ded683923a678ad03fae323169beb4&auto=format&fit=crop&w=700&q=60');\r\n  width: 100%;\r\n  padding-bottom: 100%;\r\n  background-size: cover;\r\n  background-position: center;\r\n  border: 3px solid white;\r\n}\r\n\r\n.main-background {\r\n  background-image: url('data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8NDQ0NDQ8PDQ0NDxANDQ0NEBANDQ0NFREWFhURFRUYHSggGBolGxUVITEhMSk3Li4uFx8zOD8tNyg5LisBCgoKDQ0NDg0NDysZFR0rKys3LS0rKy0tKysrKysrLSsrKysrKy0tLSsrKysrKzcrKystKysrKysrKy0rKysrK//AABEIAKgBLAMBIgACEQEDEQH/xAAYAAEBAQEBAAAAAAAAAAAAAAAAAQIHA//EACUQAQAAAwgDAQEBAAAAAAAAAAABAvADFDFBUpLR4RNRkREhYf/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A4iACgCLASACgAoigsORIcgi9kK/h2Q4UO1rBOwF4KwThQODlOF5BOslToiB0HQgdCdABFCIqoICoqAAgAAokQiCgAoAEAgCKBWIFYLWCViViC95FYEK/pWIL3kQ4yO80hxmC95L+1+M95rWKhx6P2vw49lYiHHpefScezn2B1kRjX4dZlYilYFYHWaViiHWRWB1mViKVglYFYka/oAVigKixQBFQAAVCIRBQAAAUARRAFABYCQ5zKxBe/RDg7zIV/QO1TvMrFQ4/xayTj2VigfcP8XlOPa8+wT7l6Wsk6zKxUOgrErFA6DrMrEEIlYkQEVAAAECIAIKERIg0IAoAKIoiiAKIoKJ2ApBO8yAL2rPea1iBwqceysQOF5SsTn2B0ROsysQArFAXpDrMrEAiJEFRUABAABRAAIiRBQAUAAAFAEFQBQ+J8BSAfAO1T5mfAXgT5gvwA5T4fAFQ+AAAdB8yPgCRAFQigKgAAgqoACRVIgoACoAoigKgCiKIqACiAL2IoHAnACiAKJ+gKIAKgAIAqAKAgKgAAAJEIgogCgAKgCgAKgIogCkEWAHasqBwqACoAKgAAAIAqAKAgKgAAACAAICgAoigAAqACiKAAAsEAFQEUQBRABUAVAFAAAQFQAAAAQAEBUAFEAUAFEAUEBQAFQBSCAKIoAigCAKIAogAqAAAAICiAAACAAAAAAqAKIoAAKIAoigAAKgAAAAAAAAAIoAgCoACKgKgAAAIAPW72mifbEu9pon2xUBLvaaJ9sVu9pon2xAC72mifbEu9pon2xAC72mifbEu9pon2xAC72mifbEu9pon2xADwWmifbE8Fpon2xAF8Fpon2xPBaaJ9sUAXwWmifbE8E+ifbFAF8E+ifbE8E+ifbFAF8Fpon2xPBPon2xADwWmifbE8Fpon2xQBfBaaJ9sTwWmifbFAF8E+ifbE8E+ifbFADwWmifbEu9pon2xAC7z6J9sS72mifbEALvaaJ9sS72mifbEALvaaJ9sS72mifbEAS72mifbEu9pon2xUBLvaaJ9sS72mifbEAf/2Q==');\r\n  background-size: cover;\r\n  background-position: center;\r\n  width: 100%;\r\n  height: 200px;\r\n}\r\n\r\n.main-text {\r\n  padding-top: 150px;\r\n  text-shadow: 0 8px 8px rgba(0,0,0,0.9),\r\n  0 8px 13px rgba(0,0,0,0.8),\r\n  0 8px 23px rgba(0,0,0,0.8);\r\n  color: white;\r\n  font-family: Helvetica, Arial, sans-serif;\r\n  font-size: 25px;\r\n  -webkit-font-smoothing: antialiased;\r\n  font-weight: 500;\r\n  line-height: 30px;\r\n  max-width: 275px;\r\n  position: absolute;\r\n  left: 230px;\r\n}\r\n\r\n.botton-background {\r\n  width: 100%;\r\n  height: 43px;\r\n  background: white;\r\n  padding-left: 220px;\r\n  border: 1px solid rgba(0, 0, 0, 0.125);\r\n  border-left-style: none;\r\n}\r\n\r\n.grid-item {\r\n  height: 43px;\r\n  border-left: 1px solid rgba(0, 0, 0, 0.125);\r\n}\r\n\r\n.btn-position {\r\n  position: absolute;\r\n  top: 100px;\r\n  right:50px;\r\n}\r\n\r\n.nav-links {\r\n  cursor: pointer;\r\n}\r\n\r\n.active {\r\n  background-color: powderblue;\r\n  border-color: powderblue;\r\n}\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/profile-for-visitor/profile-for-visitor.component.html":
/*!************************************************************************!*\
  !*** ./src/app/profile-for-visitor/profile-for-visitor.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<div class=\"card\">-->\r\n<!--<img class=\"card-img-top\" src='https://images.unsplash.com/photo-1505232070786-2f46d15f9f5e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8d0b72c290cbac7926edb604b1f40793&auto=format&fit=crop&w=800&q=60' alt=\"Card image cap\">-->\r\n\r\n<!--</div>-->\r\n<div>\r\n  <div class=\"main-background\">\r\n    <div class=\"row\">\r\n      <div class=\"avatar-container\">\r\n        <div class=\"avatar\" [ngStyle]=\"{'background-image': 'url(' + user.profilePhoto + ')'}\">\r\n        </div>\r\n      </div>\r\n      <h2 *ngIf=\"user.role !== 'SiteManager' && user.role !== 'EquipmentDealer'\"\r\n          class=\"main-text\">{{user.firstName}} {{user.lastName}}</h2>\r\n      <h2 *ngIf=\"user.role === 'SiteManager' || user.role === 'EquipmentDealer'\"\r\n          class=\"main-text\">{{provider.organizationName}}</h2>\r\n    </div>\r\n\r\n    <div class = 'btn-position' *ngIf=\"(user.role === 'organizer' || user.role === 'attendee') &&  curUser && (curUser.role === 'organizer' || curUser.role === 'attendee')\">\r\n      <button *ngIf=\"!isFollowed\" (click)=\"followUser()\" class=\"btn btn-outline-primary\">Follow</button>\r\n      <button *ngIf=\"isFollowed\" (click)=\"unfollowUser()\" class=\"btn btn-outline-primary\">Un-Follow</button>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"botton-background\" *ngIf=\"user.role === 'organizer' || user.role === 'attendee'\">\r\n    <div class=\"input-group-append\">\r\n      <div class=\"col-sm grid-item\" [ngClass]=\"{'active': curPage === 'oa'}\">\r\n        <a (click)=\"setCurPage('oa')\" class=\"nav-links\">Organized Activities</a>\r\n      </div>\r\n      <div class=\"col-sm grid-item\" [ngClass]=\"{'active': curPage === 'pa'}\">\r\n        <a (click)=\"setCurPage('pa')\" class=\"nav-links\">Participating Activities</a>\r\n      </div>\r\n      <div class=\"col-sm grid-item\" [ngClass]=\"{'active': curPage === 'ff'}\">\r\n        <a (click)=\"setCurPage('ff')\" class=\"nav-links\">Following</a>\r\n      </div>\r\n      <div class=\"col-sm grid-item\" [ngClass]=\"{'active': curPage === 'ds'}\">\r\n        <a (click)=\"setCurPage('ds')\" class=\"nav-links\">Discussions</a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div *ngIf=\"user.role === 'SiteManager' || user.role === 'EquipmentDealer'\">\r\n    <div class=\"botton-background\">\r\n      <div class=\"input-group-append\">\r\n        <div class=\"col-sm grid-item\" [ngClass]=\"{'active': curPage === 'sl'}\"  *ngIf=\"user.role === 'SiteManager'\">\r\n          <a (click)=\"setCurPage('sl')\" class=\"nav-links\">Sites List</a>\r\n        </div>\r\n        <div class=\"col-sm grid-item\" [ngClass]=\"{'active': curPage === 'pa'}\" *ngIf=\"user.role === 'EquipmentDealer'\">\r\n          <a (click)=\"setCurPage('el')\" class=\"nav-links\">Equipments List</a>\r\n        </div>\r\n        <div class=\"col-sm grid-item\" [ngClass]=\"{'active': curPage === 'rt'}\">\r\n          <a (click)=\"setCurPage('rt')\" class=\"nav-links\">Reservation/Renting</a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"container\">\r\n    <app-events-list-for-profile *ngIf=\"(user.role === 'organizer' || user.role === 'attendee') && curPage === 'oa'\" [type] = 'curPage' [events]=\"organizedEvents\" [isSame] = \"isSame\"></app-events-list-for-profile>\r\n    <app-events-list-for-profile *ngIf=\"(user.role === 'organizer' || user.role === 'attendee') && curPage === 'pa'\" [type] = 'curPage' [events]=\"attendedEvents\" [isSame] = \"isSame\"></app-events-list-for-profile>\r\n    <app-friend-list *ngIf=\"(user.role === 'organizer' || user.role === 'attendee') && curPage === 'ff'\" [friendList] = \"friends\" [user] = \"user\" [isSame] = \"isSame\"></app-friend-list>\r\n    <app-discussion-list-for-profile *ngIf=\"(user.role === 'organizer' || user.role === 'attendee') && curPage === 'ds'\" [discussions]=\"discussions\" [isSame] = \"isSame\" [userId] = \"user._id\"></app-discussion-list-for-profile>\r\n    <app-site-list-for-profile *ngIf=\"(user.role === 'SiteManager' && curPage === 'sl')\" [isSame] = \"isSame\" [sites]=\"mySites\"></app-site-list-for-profile>\r\n    <app-epuipment-list-for-profile *ngIf=\"user.role === 'EquipmentDealer' && curPage === 'el'\" [isSame] = \"isSame\" [user] = \"user\" [equips]=\"myEquipments\"></app-epuipment-list-for-profile>\r\n    <app-renting-list-for-profile [rentings]=\"myRentings\" [user] = \"user\" *ngIf=\"(user.role === 'SiteManager' || user.role === 'EquipmentDealer') && curPage === 'rt'\" [isSame] = \"isSame\"></app-renting-list-for-profile>\r\n  </div>\r\n\r\n</div>\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/profile-for-visitor/profile-for-visitor.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/profile-for-visitor/profile-for-visitor.component.ts ***!
  \**********************************************************************/
/*! exports provided: ProfileForVisitorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileForVisitorComponent", function() { return ProfileForVisitorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_user_model_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/user.model.client */ "./src/app/models/user.model.client.ts");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _models_provider_model_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/provider.model.client */ "./src/app/models/provider.model.client.ts");
/* harmony import */ var _services_provider_service_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/provider.service.client */ "./src/app/services/provider.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_event_service_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/event.service.client */ "./src/app/services/event.service.client.ts");
/* harmony import */ var _services_enrollment_service_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/enrollment.service.client */ "./src/app/services/enrollment.service.client.ts");
/* harmony import */ var _services_discussion_service_client__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/discussion.service.client */ "./src/app/services/discussion.service.client.ts");
/* harmony import */ var _services_site_service_client__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/site.service.client */ "./src/app/services/site.service.client.ts");
/* harmony import */ var _services_equipment_service_client__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/equipment.service.client */ "./src/app/services/equipment.service.client.ts");
/* harmony import */ var _services_reservation_service_client__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../services/reservation.service.client */ "./src/app/services/reservation.service.client.ts");
/* harmony import */ var _services_equipmentRenting_service_client__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../services/equipmentRenting.service.client */ "./src/app/services/equipmentRenting.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var ProfileForVisitorComponent = /** @class */ (function () {
    function ProfileForVisitorComponent(userService, providerService, eventService, discussionService, enrollmentService, equipmentService, reservationService, equipmentRentingService, siteService, route, router) {
        var _this = this;
        this.userService = userService;
        this.providerService = providerService;
        this.eventService = eventService;
        this.discussionService = discussionService;
        this.enrollmentService = enrollmentService;
        this.equipmentService = equipmentService;
        this.reservationService = reservationService;
        this.equipmentRentingService = equipmentRentingService;
        this.siteService = siteService;
        this.route = route;
        this.router = router;
        this.user = new _models_user_model_client__WEBPACK_IMPORTED_MODULE_1__["User"]();
        this.provider = new _models_provider_model_client__WEBPACK_IMPORTED_MODULE_3__["Provider"]();
        this.curPage = 'oa';
        this.isFollowed = false;
        this.organizedEvents = [];
        this.attendedEvents = [];
        this.isSame = false;
        this.myEquipments = [];
        this.mySites = [];
        this.friends = [];
        this.myRentings = [];
        this.route.params.subscribe(function (params) { return _this.setParams(params); });
    }
    ProfileForVisitorComponent.prototype.setParams = function (params) {
        this.userId = params['userId'];
    };
    ProfileForVisitorComponent.prototype.setCurPage = function (curPage) {
        this.curPage = curPage;
    };
    ProfileForVisitorComponent.prototype.fillFollowingInfo = function (following) {
        var _this = this;
        following.forEach(function (f) {
            _this.userService
                .findUserById(f)
                .then(function (user) { return _this.friends.push(user); });
        });
    };
    ProfileForVisitorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService
            .findUserById(this.userId)
            .then(function (user) {
            if (user) {
                console.log(user);
                _this.user = user;
                if (!_this.user.profilePhoto) {
                    _this.user.profilePhoto = 'https://images.unsplash.com/photo-' +
                        '1495078065017-564723e7e3e7?ixlib=rb-0.3.5&ixid=eyJhcHBfa' +
                        'WQiOjEyMDd9&s=09093dcdf66dbcd2397b9dc19384a899&auto=forma' +
                        't&fit=crop&w=800&q=60';
                }
                _this.userService
                    .findAllFollowingFriendsForUser(user._id)
                    .then(function (friends) { return _this.fillFollowingInfo(friends); });
                _this.eventService.findEventsForOrganizer(user._id)
                    .then(function (events) { return _this.organizedEvents = events; });
                _this.enrollmentService.findEnrollmentsForAttendee(user._id)
                    .then(function (events) { return _this.attendedEvents = events; });
                _this.discussionService.findDiscussionForUser(user._id)
                    .then(function (discussions) { return _this.discussions = discussions; });
                _this.checkFollowed();
            }
        });
        this.providerService
            .findProviderById(this.userId)
            .then(function (provider) {
            if (provider) {
                console.log(provider);
                _this.provider = provider;
                _this.user = provider;
                if (!_this.user.profilePhoto) {
                    _this.user.profilePhoto = 'https://images.unsplash.com/photo-' +
                        '1495078065017-564723e7e3e7?ixlib=rb-0.3.5&ixid=eyJhcHBfa' +
                        'WQiOjEyMDd9&s=09093dcdf66dbcd2397b9dc19384a899&auto=forma' +
                        't&fit=crop&w=800&q=60';
                }
                _this.equipmentService
                    .findEquipmentsForProvider(_this.provider._id)
                    .then(function (equipments) { return _this.myEquipments = equipments; });
                _this.siteService
                    .findSitesForProviderWithInfo(_this.provider._id)
                    .then(function (sites) { return _this.mySites = sites; });
                if (provider.role === 'SiteManager') {
                    _this.reservationService
                        .findReservationsForProvider(provider._id)
                        .then(function (reservations) {
                        _this.myRentings = reservations;
                    });
                }
                else {
                    _this.equipmentRentingService
                        .findRentingsForProvider(provider._id)
                        .then(function (rentings) { return _this.myRentings = rentings; });
                }
                _this.curPage = 'sl';
            }
        });
        this.userService
            .profile()
            .then(function (user) { return _this.curUser = user; });
    };
    ProfileForVisitorComponent.prototype.followUser = function () {
        var _this = this;
        if (this.userId === this.curUser._id) {
            alert('Sorry, can not follow yourself');
            return;
        }
        this.userService
            .followFriend(this.user._id)
            .then(function (res) {
            if (res.error) {
                alert(res.error);
            }
            else {
                _this.isFollowed = true;
            }
        });
    };
    ProfileForVisitorComponent.prototype.unfollowUser = function () {
        var _this = this;
        this.userService
            .un_followFriend(this.user._id)
            .then(function (res) {
            if (res.error) {
                alert(res.error);
            }
            else {
                _this.isFollowed = false;
            }
        });
    };
    ProfileForVisitorComponent.prototype.checkFollowed = function () {
        var _this = this;
        this.userService
            .profile()
            .then(function (user) {
            _this.curUser = user;
            _this.userService.findAllFollowingFriendsForUser(user._id)
                .then(function (following) {
                if (following.indexOf(_this.userId) !== -1) {
                    _this.isFollowed = true;
                }
                else {
                    _this.isFollowed = false;
                }
            });
        });
    };
    ProfileForVisitorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile-for-visitor',
            template: __webpack_require__(/*! ./profile-for-visitor.component.html */ "./src/app/profile-for-visitor/profile-for-visitor.component.html"),
            styles: [__webpack_require__(/*! ./profile-for-visitor.component.css */ "./src/app/profile-for-visitor/profile-for-visitor.component.css")]
        }),
        __metadata("design:paramtypes", [_services_user_service_client__WEBPACK_IMPORTED_MODULE_2__["UserServiceClient"],
            _services_provider_service_client__WEBPACK_IMPORTED_MODULE_4__["ProviderServiceClient"],
            _services_event_service_client__WEBPACK_IMPORTED_MODULE_6__["EventServiceClient"],
            _services_discussion_service_client__WEBPACK_IMPORTED_MODULE_8__["DiscussionServiceClient"],
            _services_enrollment_service_client__WEBPACK_IMPORTED_MODULE_7__["EnrollmentServiceClient"],
            _services_equipment_service_client__WEBPACK_IMPORTED_MODULE_10__["EquipmentServiceClient"],
            _services_reservation_service_client__WEBPACK_IMPORTED_MODULE_11__["ReservationServiceClient"],
            _services_equipmentRenting_service_client__WEBPACK_IMPORTED_MODULE_12__["EquipmentRentingServiceClient"],
            _services_site_service_client__WEBPACK_IMPORTED_MODULE_9__["SiteServiceClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], ProfileForVisitorComponent);
    return ProfileForVisitorComponent;
}());



/***/ }),

/***/ "./src/app/profile/profile.component.css":
/*!***********************************************!*\
  !*** ./src/app/profile/profile.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.avatar-container {\r\n  margin-left: 30px;\r\n  margin-top: 60px;\r\n  margin-bottom: 8px;\r\n  display: inline-block;\r\n  width: 11%;\r\n  padding: 0;\r\n}\r\n\r\n.avatar {\r\n  padding: 0;\r\n  border-radius: 50%;\r\n  background-image: url('https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b6ded683923a678ad03fae323169beb4&auto=format&fit=crop&w=700&q=60');\r\n  width: 100%;\r\n  padding-bottom: 100%;\r\n  background-size: cover;\r\n  background-position: center;\r\n  /*cursor: pointer;*/\r\n  border: 3px solid white;\r\n}\r\n\r\n/*.avatar-container {*/\r\n\r\n/*display: inline-block;*/\r\n\r\n/*width: 11%;*/\r\n\r\n/*hight: 11%;*/\r\n\r\n/*z-index: 1;*/\r\n\r\n/*position: absolute;*/\r\n\r\n/*left: 35px;*/\r\n\r\n/*top: 65px;*/\r\n\r\n/*}*/\r\n\r\n/*.avatar {*/\r\n\r\n/*border-radius: 50%;*/\r\n\r\n/*background-image: url('https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b6ded683923a678ad03fae323169beb4&auto=format&fit=crop&w=700&q=60');*/\r\n\r\n/*width: 100%;*/\r\n\r\n/*padding-bottom: 100%;*/\r\n\r\n/*background-size: cover;*/\r\n\r\n/*background-position: center;*/\r\n\r\n/*border: 3px solid white;*/\r\n\r\n/*}*/\r\n\r\n.main-background {\r\n  background-image: url('data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8NDQ0NDQ8PDQ0NDxANDQ0NEBANDQ0NFREWFhURFRUYHSggGBolGxUVITEhMSk3Li4uFx8zOD8tNyg5LisBCgoKDQ0NDg0NDysZFR0rKys3LS0rKy0tKysrKysrLSsrKysrKy0tLSsrKysrKzcrKystKysrKysrKy0rKysrK//AABEIAKgBLAMBIgACEQEDEQH/xAAYAAEBAQEBAAAAAAAAAAAAAAAAAQIHA//EACUQAQAAAwgDAQEBAAAAAAAAAAABAvADFDFBUpLR4RNRkREhYf/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A4iACgCLASACgAoigsORIcgi9kK/h2Q4UO1rBOwF4KwThQODlOF5BOslToiB0HQgdCdABFCIqoICoqAAgAAokQiCgAoAEAgCKBWIFYLWCViViC95FYEK/pWIL3kQ4yO80hxmC95L+1+M95rWKhx6P2vw49lYiHHpefScezn2B1kRjX4dZlYilYFYHWaViiHWRWB1mViKVglYFYka/oAVigKixQBFQAAVCIRBQAAAUARRAFABYCQ5zKxBe/RDg7zIV/QO1TvMrFQ4/xayTj2VigfcP8XlOPa8+wT7l6Wsk6zKxUOgrErFA6DrMrEEIlYkQEVAAAECIAIKERIg0IAoAKIoiiAKIoKJ2ApBO8yAL2rPea1iBwqceysQOF5SsTn2B0ROsysQArFAXpDrMrEAiJEFRUABAABRAAIiRBQAUAAAFAEFQBQ+J8BSAfAO1T5mfAXgT5gvwA5T4fAFQ+AAAdB8yPgCRAFQigKgAAgqoACRVIgoACoAoigKgCiKIqACiAL2IoHAnACiAKJ+gKIAKgAIAqAKAgKgAAAJEIgogCgAKgCgAKgIogCkEWAHasqBwqACoAKgAAAIAqAKAgKgAAACAAICgAoigAAqACiKAAAsEAFQEUQBRABUAVAFAAAQFQAAAAQAEBUAFEAUAFEAUEBQAFQBSCAKIoAigCAKIAogAqAAAAICiAAACAAAAAAqAKIoAAKIAoigAAKgAAAAAAAAAIoAgCoACKgKgAAAIAPW72mifbEu9pon2xUBLvaaJ9sVu9pon2xAC72mifbEu9pon2xAC72mifbEu9pon2xAC72mifbEu9pon2xADwWmifbE8Fpon2xAF8Fpon2xPBaaJ9sUAXwWmifbE8E+ifbFAF8E+ifbE8E+ifbFAF8Fpon2xPBPon2xADwWmifbE8Fpon2xQBfBaaJ9sTwWmifbFAF8E+ifbE8E+ifbFADwWmifbEu9pon2xAC7z6J9sS72mifbEALvaaJ9sS72mifbEALvaaJ9sS72mifbEAS72mifbEu9pon2xUBLvaaJ9sS72mifbEAf/2Q==');\r\n  background-size: cover;\r\n  background-position: center;\r\n  width: 100%;\r\n  height: 200px;\r\n}\r\n\r\n.main-text {\r\n  padding-top: 150px;\r\n  text-shadow: 0 8px 8px rgba(0,0,0,0.9),\r\n  0 8px 13px rgba(0,0,0,0.8),\r\n  0 8px 23px rgba(0,0,0,0.8);\r\n  color: white;\r\n  font-family: Helvetica, Arial, sans-serif;\r\n  font-size: 25px;\r\n  -webkit-font-smoothing: antialiased;\r\n  font-weight: 500;\r\n  line-height: 30px;\r\n  max-width: 275px;\r\n  position: relative;\r\n  left: 30px;\r\n}\r\n\r\n.botton-background {\r\n  width: 100%;\r\n  height: 43px;\r\n  background: white;\r\n  padding-left: 220px;\r\n  border: 1px solid rgba(0, 0, 0, 0.125);\r\n  border-left-style: none;\r\n}\r\n\r\n.grid-item {\r\n  height: 43px;\r\n  border-left: 1px solid rgba(0, 0, 0, 0.125);\r\n}\r\n\r\n.btn-position {\r\n  position: absolute;\r\n  top: 17%;\r\n  right:11%;\r\n}\r\n\r\n.btn-position2 {\r\n  border-radius: 20px;\r\n  overflow: hidden;\r\n  position: absolute;\r\n  top: 10%;\r\n  right:15%;\r\n}\r\n\r\n.nav-links {\r\n  cursor: pointer;\r\n}\r\n\r\n.active {\r\n  background-color: powderblue;\r\n  border-color: powderblue;\r\n}\r\n\r\n#button-basic-att {\r\n  border: 0;\r\n  color: white;\r\n  background-color: black;\r\n}\r\n\r\n.switchItem {\r\n  cursor: pointer;\r\n}\r\n"

/***/ }),

/***/ "./src/app/profile/profile.component.html":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<div class=\"card\">-->\r\n<!--<img class=\"card-img-top\" src='https://images.unsplash.com/photo-1505232070786-2f46d15f9f5e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8d0b72c290cbac7926edb604b1f40793&auto=format&fit=crop&w=800&q=60' alt=\"Card image cap\">-->\r\n\r\n<!--</div>-->\r\n<div>\r\n  <div class=\"main-background\">\r\n    <div class=\"input-group-append\">\r\n      <div class=\"avatar-container\">\r\n        <div class=\"avatar\" *ngIf=\"user.profilePhoto\" [ngStyle]=\"{'background-image': 'url(' + user.profilePhoto + ')'}\"></div>\r\n        <div class=\"avatar\" *ngIf=\"!user.profilePhoto\" [ngStyle]=\"{'background-image': 'url(' + defaultPhotoUrl + ')'}\"></div>\r\n      </div>\r\n      <div>\r\n        <h2 *ngIf=\"user.role !== 'SiteManager' && user.role !== 'EquipmentDealer'\"\r\n            class=\"main-text\">{{user.firstName}} {{user.lastName}}</h2>\r\n        <h2 *ngIf=\"user.role === 'SiteManager' || user.role === 'EquipmentDealer'\"\r\n            class=\"main-text\">{{provider.organizationName}}</h2>\r\n      </div>\r\n\r\n    </div>\r\n    <div class = 'btn-position2 col-auto'>\r\n      <button *ngIf=\"user.role === 'organizer'\" (click)=\"goCreateEvent()\" class=\"btn btn-dark\">Post A New Event</button>\r\n      <button *ngIf=\"user.role === 'attendee'\" (click)=\"goEventList()\" class=\"btn btn-dark\">Attend A New Event</button>\r\n      <button *ngIf=\"user.role === 'SiteManager'\" (click)=\"goCreateSite()\" class=\"btn btn-dark\">Post A Site</button>\r\n      <button *ngIf=\"user.role === 'EquipmentDealer'\" (click)=\"goCreateEquipments()\" class=\"btn btn-dark\">Post A New Equipment</button>\r\n    </div>\r\n\r\n\r\n    <div class = 'btn-position'>\r\n      <div *ngIf=\"user.role === 'organizer' || user.role === 'attendee'\">\r\n        <div class=\"input-group-append\">\r\n        <div  id=\"roleFld-att\" class=\"list-group-item form-control\">{{user.role}}</div>\r\n        <div class=\"btn-group\" dropdown>\r\n          <button id=\"button-basic-att\" dropdownToggle type=\"button\" class=\"btn btn-outline-dark dropdown-toggle\"\r\n                  aria-controls=\"dropdown-basic-att\">\r\n            Switch Role\r\n          </button>\r\n          <ul id=\"dropdown-basic-att\" *dropdownMenu class=\"dropdown-menu\"\r\n              role=\"menu\" aria-labelledby=\"button-basic\">\r\n            <li role=\"menuitem\" class=\"switchItem\"><a (click)=\"switchOrganizerToAttendee()\" class=\"dropdown-item\">Attendee</a></li>\r\n            <li role=\"menuitem\" class=\"switchItem\"><a (click)=\"switchAttendeeToOrganizer()\" class=\"dropdown-item\">Organizer</a></li>\r\n          </ul>\r\n        </div>\r\n        </div>\r\n      </div>\r\n\r\n\r\n    </div>\r\n  </div>\r\n\r\n  <div *ngIf=\"user.role === 'organizer' || user.role === 'attendee'\">\r\n  <div class=\"botton-background\">\r\n    <div class=\"input-group-append\">\r\n      <div class=\"col-sm grid-item\" [ngClass]=\"{'active': curPage === 'pi'}\">\r\n        <a (click)=\"setCurPage('pi')\" class=\"nav-links\">Personal Info</a>\r\n      </div>\r\n      <div class=\"col-sm grid-item\" [ngClass]=\"{'active': curPage === 'oa'}\">\r\n        <a (click)=\"setCurPage('oa')\" class=\"nav-links\">Organized Events</a>\r\n      </div>\r\n      <div class=\"col-sm grid-item\" [ngClass]=\"{'active': curPage === 'pa'}\">\r\n        <a (click)=\"setCurPage('pa')\" class=\"nav-links\">Attended Events</a>\r\n      </div>\r\n      <div class=\"col-sm grid-item\" [ngClass]=\"{'active': curPage === 'ff'}\">\r\n        <a (click)=\"setCurPage('ff')\" class=\"nav-links\">Following</a>\r\n      </div>\r\n      <div class=\"col-sm grid-item\" [ngClass]=\"{'active': curPage === 'ds'}\">\r\n        <a (click)=\"setCurPage('ds')\" class=\"nav-links\">Discussions</a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  </div>\r\n\r\n\r\n  <div *ngIf=\"user.role === 'SiteManager' || user.role === 'EquipmentDealer'\">\r\n    <div class=\"botton-background\">\r\n      <div class=\"input-group-append\">\r\n        <div class=\"col-sm grid-item\" [ngClass]=\"{'active': curPage === 'pi'}\">\r\n          <a (click)=\"setCurPage('pi')\" class=\"nav-links\">Private Info</a>\r\n        </div>\r\n        <div class=\"col-sm grid-item\" [ngClass]=\"{'active': curPage === 'sl'}\"  *ngIf=\"user.role === 'SiteManager'\">\r\n          <a (click)=\"setCurPage('sl')\" class=\"nav-links\">Sites List</a>\r\n        </div>\r\n        <div class=\"col-sm grid-item\" [ngClass]=\"{'active': curPage === 'el'}\" *ngIf=\"user.role === 'EquipmentDealer'\">\r\n          <a (click)=\"setCurPage('el')\" class=\"nav-links\">Equipments List</a>\r\n        </div>\r\n        <div class=\"col-sm grid-item\" [ngClass]=\"{'active': curPage === 'rt'}\">\r\n          <a (click)=\"setCurPage('rt')\" class=\"nav-links\">Reservation/Renting</a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n  <div class=\"container\">\r\n    <app-friend-list (newFriends)=\"receiveFriendList($event)\" *ngIf=\"(user.role === 'organizer' || user.role === 'attendee') && curPage === 'ff'\" [friendList] = \"friends\" [user] = \"user\" [isSame] = \"isSame\"></app-friend-list>\r\n    <app-basic-information *ngIf=\"curPage ==='pi'\" (messageEvent)=\"receiveMessage($event)\"></app-basic-information>\r\n    <app-events-list-for-profile (messageEvent)=\"receiveOrEvents($event)\" *ngIf=\"(user.role === 'organizer' || user.role === 'attendee') && curPage === 'oa'\" [type] = 'curPage' [events]=\"organizedEvents\" [isSame] = \"isSame\"></app-events-list-for-profile>\r\n    <app-events-list-for-profile (messageEvent)=\"receiveAtEvents($event)\" *ngIf=\"(user.role === 'organizer' || user.role === 'attendee') && curPage === 'pa'\" [type] = 'curPage' [events]=\"attendedEvents\" [isSame] = \"isSame\"></app-events-list-for-profile>\r\n    <app-discussion-list-for-profile (messageEvent)=\"receiveNewDiscussion($event)\" *ngIf=\"(user.role === 'organizer' || user.role === 'attendee') && curPage === 'ds'\" [discussions]=\"discussions\" [isSame] = \"isSame\" [userId] = \"user._id\"></app-discussion-list-for-profile>\r\n    <app-site-list-for-profile (messageEvent)=\"receiveNewSites($event)\" *ngIf=\"user.role === 'SiteManager' && curPage === 'sl'\" [isSame] = \"isSame\" [user] = \"user\" [sites]=\"mySites\"></app-site-list-for-profile>\r\n    <app-epuipment-list-for-profile  (messageEvent)=\"receiveNewEquips($event)\" *ngIf=\"user.role === 'EquipmentDealer' && curPage === 'el'\" [isSame] = \"isSame\" [user] = \"user\" [equips]=\"myEquipments\"></app-epuipment-list-for-profile>\r\n    <app-renting-list-for-profile  (messageEvent)=\"receiveNewRentings($event)\" [rentings]=\"myRentings\" [user] = \"user\" *ngIf=\"(user.role === 'SiteManager' || user.role === 'EquipmentDealer') && curPage === 'rt'\" [isSame] = \"isSame\"></app-renting-list-for-profile>\r\n  </div>\r\n\r\n</div>\r\n\r\n\r\n\r\n\r\n"

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
/* harmony import */ var _models_user_model_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/user.model.client */ "./src/app/models/user.model.client.ts");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _models_provider_model_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/provider.model.client */ "./src/app/models/provider.model.client.ts");
/* harmony import */ var _services_provider_service_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/provider.service.client */ "./src/app/services/provider.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_event_service_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/event.service.client */ "./src/app/services/event.service.client.ts");
/* harmony import */ var _services_discussion_service_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/discussion.service.client */ "./src/app/services/discussion.service.client.ts");
/* harmony import */ var _services_enrollment_service_client__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/enrollment.service.client */ "./src/app/services/enrollment.service.client.ts");
/* harmony import */ var _services_equipment_service_client__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/equipment.service.client */ "./src/app/services/equipment.service.client.ts");
/* harmony import */ var _services_site_service_client__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/site.service.client */ "./src/app/services/site.service.client.ts");
/* harmony import */ var _services_reservation_service_client__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../services/reservation.service.client */ "./src/app/services/reservation.service.client.ts");
/* harmony import */ var _services_equipmentRenting_service_client__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../services/equipmentRenting.service.client */ "./src/app/services/equipmentRenting.service.client.ts");
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
    function ProfileComponent(userService, providerService, enrollmentService, eventService, discussionService, equipmentService, siteService, reservationService, equipmentRentingService, router) {
        this.userService = userService;
        this.providerService = providerService;
        this.enrollmentService = enrollmentService;
        this.eventService = eventService;
        this.discussionService = discussionService;
        this.equipmentService = equipmentService;
        this.siteService = siteService;
        this.reservationService = reservationService;
        this.equipmentRentingService = equipmentRentingService;
        this.router = router;
        this.defaultPhotoUrl = 'https://images.unsplash.com/photo-' +
            '1495078065017-564723e7e3e7?ixlib=rb-0.3.5&ixid=eyJhcHBfa' +
            'WQiOjEyMDd9&s=09093dcdf66dbcd2397b9dc19384a899&auto=forma' +
            't&fit=crop&w=800&q=60';
        this.user = new _models_user_model_client__WEBPACK_IMPORTED_MODULE_1__["User"]();
        this.provider = new _models_provider_model_client__WEBPACK_IMPORTED_MODULE_3__["Provider"]();
        this.curPage = 'pi';
        this.organizedEvents = [];
        this.attendedEvents = [];
        this.isSame = true;
        this.enrolledEvents = [];
        this.myEquipments = [];
        this.mySites = [];
        this.friends = [];
    }
    ProfileComponent.prototype.receiveMessage = function ($event) {
        if (this.user.role !== 'SiteManager' && this.user.role !== 'EquipmentDealer') {
            this.user = $event;
        }
        else if (this.user.role === 'SiteManager' || this.user.role === 'EquipmentDealer') {
            this.provider = $event;
            this.user = $event;
        }
    };
    ProfileComponent.prototype.setCurPage = function (curPage) {
        this.curPage = curPage;
    };
    ProfileComponent.prototype.goEventList = function () {
        this.router.navigate(['eventList']);
    };
    ProfileComponent.prototype.goCreateSite = function () {
        this.router.navigate(['createSite']);
    };
    ProfileComponent.prototype.goCreateEquipments = function () {
        this.router.navigate(['createEquipment']);
    };
    ProfileComponent.prototype.receiveFriendList = function (friends) {
        this.friends = friends;
    };
    ProfileComponent.prototype.receiveNewDiscussion = function (discussions) {
        this.discussions = discussions;
    };
    ProfileComponent.prototype.receiveNewSites = function (sites) {
        var _this = this;
        this.mySites = sites;
        this.reservationService
            .findReservationsForProvider(this.provider._id)
            .then(function (reservations) {
            _this.myRentings = reservations;
        });
    };
    ProfileComponent.prototype.receiveNewEquips = function (equips) {
        var _this = this;
        this.myEquipments = equips;
        this.equipmentRentingService
            .findRentingsForProvider(this.provider._id)
            .then(function (rentings) { return _this.myRentings = rentings; });
    };
    ProfileComponent.prototype.refactorTime = function (time) {
        var index = time.indexOf('T');
        return time.substring(0, index);
    };
    ProfileComponent.prototype.receiveOrEvents = function (events) {
        var _this = this;
        events.forEach(function (event) {
            event.startTime = _this.refactorTime(event.startTime);
            event.endTime = _this.refactorTime(event.endTime);
        });
        this.organizedEvents = events;
    };
    ProfileComponent.prototype.receiveAtEvents = function (events) {
        var _this = this;
        events.forEach(function (event) {
            event.startTime = _this.refactorTime(event.startTime);
            event.endTime = _this.refactorTime(event.endTime);
        });
        this.attendedEvents = events;
    };
    ProfileComponent.prototype.receiveNewRentings = function (events) {
        this.myRentings = events;
    };
    ProfileComponent.prototype.fillFollowingInfo = function (following) {
        var _this = this;
        following.forEach(function (f) {
            _this.userService
                .findUserById(f)
                .then(function (user) { return _this.friends.push(user); });
        });
    };
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.userService
        //   .profile()
        //   .then(user => {
        //     this.user = user;
        //     if (!this.user.profilePhoto) {
        //       this.user.profilePhoto = 'https://images.unsplash.com/photo-' +
        //         '1495078065017-564723e7e3e7?ixlib=rb-0.3.5&ixid=eyJhcHBfa' +
        //         'WQiOjEyMDd9&s=09093dcdf66dbcd2397b9dc19384a899&auto=forma' +
        //         't&fit=crop&w=800&q=60';
        //     }
        //     this.userService
        //       .findAllFollowingFriendsForUser(user._id)
        //       .then(friends => this.fillFollowingInfo(friends));
        //     this.eventService.findEventsForOrganizer(user._id)
        //       .then(events => {
        //         // this.organizedEvents = events;
        //         events.forEach((event) => {
        //           event.startTime = this.refactorTime(event.startTime);
        //           event.endTime = this.refactorTime(event.endTime);
        //         });
        //         this.organizedEvents = events;
        //       });
        //     this.enrollmentService.findEnrollmentsForAttendee(user._id)
        //       .then(events => {
        //         console.log(events);
        //         events.forEach((event) => {
        //           event.event.startTime = this.refactorTime(event.event.startTime);
        //           event.event.endTime = this.refactorTime(event.event.endTime);
        //         });
        //         this.attendedEvents = events;
        //         console.log(events);
        //       });
        //     this.discussionService.findDiscussionForUser(user._id)
        //       .then(discussions => {
        //         this.discussions = discussions;
        //       });
        //
        //   });
        //
        //
        // this.providerService
        //   .profile()
        //   .then(provider => {
        //       this.provider = provider;
        //       this.equipmentService
        //         .findEquipmentsForProvider(this.provider._id)
        //         .then(equipments => this.myEquipments = equipments);
        //
        //       this.siteService
        //         .findSitesForProviderWithInfo(this.provider._id)
        //         .then((sites) => this.mySites = sites);
        //
        //       if (provider.role === 'SiteManager') {
        //         this.reservationService
        //           .findReservationsForProvider(provider._id)
        //           .then(reservations => {
        //             this.myRentings = reservations;
        //           });
        //       } else {
        //           this.equipmentRentingService
        //           .findRentingsForProvider(provider._id)
        //           .then(rentings => this.myRentings = rentings);
        //       }
        //     }
        //   );
        this.userService
            .profile()
            .then(function (user) {
            console.log(user);
            if (!user.error) {
                _this.user = user;
                if (!_this.user.profilePhoto) {
                    _this.user.profilePhoto = 'https://images.unsplash.com/photo-' +
                        '1495078065017-564723e7e3e7?ixlib=rb-0.3.5&ixid=eyJhcHBfa' +
                        'WQiOjEyMDd9&s=09093dcdf66dbcd2397b9dc19384a899&auto=forma' +
                        't&fit=crop&w=800&q=60';
                }
                if (user.role === 'organizer' || user.role === 'attendee') {
                    _this.userService
                        .findAllFollowingFriendsForUser(user._id)
                        .then(function (friends) { return _this.fillFollowingInfo(friends); });
                    _this.eventService.findEventsForOrganizer(user._id)
                        .then(function (events) {
                        // this.organizedEvents = events;
                        events.forEach(function (event) {
                            event.startTime = _this.refactorTime(event.startTime);
                            event.endTime = _this.refactorTime(event.endTime);
                        });
                        _this.organizedEvents = events;
                    });
                    _this.enrollmentService.findEnrollmentsForAttendee(user._id)
                        .then(function (events) {
                        console.log(events);
                        events.forEach(function (event) {
                            event.event.startTime = _this.refactorTime(event.event.startTime);
                            event.event.endTime = _this.refactorTime(event.event.endTime);
                        });
                        _this.attendedEvents = events;
                        console.log(events);
                    });
                    _this.discussionService.findDiscussionForUser(user._id)
                        .then(function (discussions) {
                        _this.discussions = discussions;
                    });
                }
                else {
                    _this.providerService
                        .profile()
                        .then(function (provider) {
                        _this.provider = provider;
                        _this.equipmentService
                            .findEquipmentsForProvider(_this.provider._id)
                            .then(function (equipments) { return _this.myEquipments = equipments; });
                        _this.siteService
                            .findSitesForProviderWithInfo(_this.provider._id)
                            .then(function (sites) { return _this.mySites = sites; });
                        if (provider.role === 'SiteManager') {
                            _this.reservationService
                                .findReservationsForProvider(provider._id)
                                .then(function (reservations) {
                                _this.myRentings = reservations;
                            });
                        }
                        else {
                            _this.equipmentRentingService
                                .findRentingsForProvider(provider._id)
                                .then(function (rentings) { return _this.myRentings = rentings; });
                        }
                    });
                }
            }
            else {
                alert('Please login!');
            }
        });
    };
    ProfileComponent.prototype.goCreateEvent = function () {
        this.router.navigate(['createEvent']);
    };
    ProfileComponent.prototype.switchAttendeeToOrganizer = function (user) {
        var _this = this;
        console.log(this.user);
        this.userService.profile()
            .then(function (u) {
            console.log(u);
            return _this.userService.findUserById(u._id);
        })
            .then(function (us) {
            console.log(us);
            us.role = 'organizer';
            console.log(us);
            return _this.userService.update(us);
        })
            .then(function (res) {
            console.log(res);
            if (res.error) {
                alert(res.error);
            }
            else {
                _this.user = res;
            }
        });
    };
    ProfileComponent.prototype.switchOrganizerToAttendee = function () {
        var _this = this;
        console.log(this.user);
        this.userService.profile()
            .then(function (u) {
            console.log(u);
            return _this.userService.findUserById(u._id);
        })
            .then(function (us) {
            us.role = 'attendee';
            console.log(us);
            return _this.userService.update(us);
        })
            .then(function (res) {
            console.log(res);
            if (res.error) {
                alert(res.error);
            }
            else {
                _this.user = res;
            }
        });
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [_services_user_service_client__WEBPACK_IMPORTED_MODULE_2__["UserServiceClient"],
            _services_provider_service_client__WEBPACK_IMPORTED_MODULE_4__["ProviderServiceClient"],
            _services_enrollment_service_client__WEBPACK_IMPORTED_MODULE_8__["EnrollmentServiceClient"],
            _services_event_service_client__WEBPACK_IMPORTED_MODULE_6__["EventServiceClient"],
            _services_discussion_service_client__WEBPACK_IMPORTED_MODULE_7__["DiscussionServiceClient"],
            _services_equipment_service_client__WEBPACK_IMPORTED_MODULE_9__["EquipmentServiceClient"],
            _services_site_service_client__WEBPACK_IMPORTED_MODULE_10__["SiteServiceClient"],
            _services_reservation_service_client__WEBPACK_IMPORTED_MODULE_11__["ReservationServiceClient"],
            _services_equipmentRenting_service_client__WEBPACK_IMPORTED_MODULE_12__["EquipmentRentingServiceClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
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

module.exports = "/*register*/\r\n#regisMsg span {\r\n  color: gray;\r\n  margin-right: 20px;\r\n}\r\n#regisMsg {\r\n  margin-top: 20px;\r\n  margin-left: 120px;\r\n}\r\n#organizationMsg {\r\n  color: gray;\r\n  margin-right: 20px;\r\n}\r\n#usernameFld {\r\n   margin-top: 15px;\r\n}\r\n#passwordFld {\r\n  margin-top: 15px;\r\n}\r\n#confirmPasswordFld {\r\n  margin-top: 15px;\r\n}\r\n#continueBtn {\r\n  margin-top: 15px;\r\n}\r\n#loginLink {\r\n  color: cornflowerblue;\r\n}\r\n#organizationLink {\r\n  color: cornflowerblue;\r\n}\r\n#mapPinIcon {\r\n  margin-right: 8px;\r\n}\r\n#locationBlock {\r\n  margin-top: 10px;\r\n}\r\n#locationMsg {\r\n  margin-top: 10px;\r\n  color: gray;\r\n}\r\n/*login*/\r\n#loginMsg span {\r\n  color: gray;\r\n  margin-right: 20px;\r\n}\r\n#loginMsg {\r\n  margin-top: 20px;\r\n  margin-left: 100px;\r\n}\r\n#signUpLink {\r\n  color: cornflowerblue;\r\n}\r\n#loginUsernameFld {\r\n  margin-top: 15px;\r\n}\r\n#loginPasswordFld {\r\n  margin-top: 15px;\r\n}\r\n#loginContinueBtn {\r\n  margin-top: 30px;\r\n}\r\n#loginType {\r\n  margin-top: 15px;\r\n}\r\n.dropdown-item {\r\n  cursor: pointer;\r\n}\r\n#registerNavLink {\r\n  cursor: pointer;\r\n}\r\n"

/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a class=\"nav-link\" id=\"registerNavLink\" (click)=\"openRegister(register)\">Sign Up</a>\r\n\r\n<ng-template #register>\r\n  <div class=\"modal-header\">\r\n    <h4 id=\"signUpHeader\" class=\"modal-title pull-left\">Sign Up</h4>\r\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"registerWindow.hide()\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <!--<div class=\"modal-header\">-->\r\n    <!--<div>-->\r\n      <!--<span id=\"organizationMsg\">Organization User?</span>-->\r\n      <!--<a id=\"organizationLink\" routerLink=\"/organization/signUp\" (click)=\"closeRegister()\">Sign Up as Organization</a>-->\r\n    <!--</div>-->\r\n  <!--</div>-->\r\n  <div class=\"modal-body\">\r\n    <div *ngFor=\"let alert of alerts\">\r\n      <alert [type]=\"alert.type\" [dismissOnTimeout]=\"alert.timeout\" (onClosed)=\"onClosed(alert)\">{{ alert.msg }}</alert>\r\n    </div>\r\n    <div>\r\n      <span id=\"organizationMsg\">Organization User?</span>\r\n      <a id=\"organizationLink\" routerLink=\"/organization/signUp\" (click)=\"closeRegister()\">Sign Up as Organization</a>\r\n    </div>\r\n    <!--<div>-->\r\n      <!--<span id=\"regisMsg\">Already a member?</span>-->\r\n      <!--<a id=\"loginLink\" routerLink=\"/login\" (click)=\"openLogin(login)\">Login</a>-->\r\n    <!--</div>-->\r\n    <input [(ngModel)]=\"username\" id=\"usernameFld\" class=\"form-control\" placeholder=\"Username\">\r\n    <input [(ngModel)]=\"password\" id=\"passwordFld\" class=\"form-control\" placeholder=\"Password\" type=\"password\">\r\n    <input [(ngModel)]=\"password2\" id=\"confirmPasswordFld\" class=\"form-control\" placeholder=\"Confirm Password\" type=\"password\">\r\n    <div id=\"locationBlock\">\r\n      <i id=\"mapPinIcon\" class=\"fas fa-map-marker-alt\"></i>\r\n      <span>{{location}}</span>\r\n      <p id=\"locationMsg\">We'll use your location to find events near you.</p>\r\n    </div>\r\n    <button (click)=\"registerUser(username, password, password2, location)\" id=\"continueBtn\" class=\"btn btn-block btn btn-danger\">Continue</button>\r\n    <div id=\"regisMsg\">\r\n      <span>Already a member?</span>\r\n      <a id=\"loginLink\" routerLink=\"/login\" (click)=\"openLogin(login)\">Login</a>\r\n    </div>\r\n  </div>\r\n</ng-template>\r\n\r\n<ng-template #login>\r\n  <div class=\"modal-header\">\r\n    <h4 id=\"loginHeader\" class=\"modal-title pull-left\">Login</h4>\r\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"loginWindow.hide()\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <div *ngFor=\"let alert of alerts\">\r\n      <alert [type]=\"alert.type\" [dismissOnTimeout]=\"alert.timeout\" (onClosed)=\"onClosed(alert)\">{{ alert.msg }}</alert>\r\n    </div>\r\n    <!--<div>-->\r\n      <!--<span id=\"loginMsg\">Don't have an account?</span>-->\r\n      <!--<a id=\"signUpLink\" routerLink=\"/login\" (click)=\"openRegister(register)\">Sign Up</a>-->\r\n    <!--</div>-->\r\n    <input [(ngModel)]=\"username\" id=\"loginUsernameFld\" class=\"form-control\" placeholder=\"Username\">\r\n    <input [(ngModel)]=\"password\" id=\"loginPasswordFld\" class=\"form-control\" placeholder=\"Password\" type=\"password\">\r\n    <div id=\"loginType\" class=\"input-group-append\">\r\n      <li class=\"list-group-item form-control\">{{loginType}}</li>\r\n      <div class=\"btn-group\" dropdown>\r\n        <button id=\"button-basic\" dropdownToggle type=\"button\" class=\"btn btn-danger dropdown-toggle\"\r\n                aria-controls=\"dropdown-basic\">\r\n          Select Login Type\r\n        </button>\r\n        <ul id=\"dropdown-basic\" *dropdownMenu class=\"dropdown-menu\"\r\n            role=\"menu\" aria-labelledby=\"button-basic\">\r\n          <li role=\"menuitem\"><a (click)=\"loginType = 'Personal'\" class=\"dropdown-item\">Personal</a></li>\r\n          <li role=\"menuitem\"><a (click)=\"loginType = 'Organization'\" class=\"dropdown-item\">Organization</a></li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n    <button (click)=\"loginUser(username, password)\" id=\"loginContinueBtn\" class=\"btn btn-block btn btn-danger\">Continue</button>\r\n    <div id=\"loginMsg\">\r\n      <span>Don't have an account?</span>\r\n      <a id=\"signUpLink\" routerLink=\"/login\" (click)=\"openRegister(register)\">Sign Up</a>\r\n    </div>\r\n  </div>\r\n</ng-template>\r\n"

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
/* harmony import */ var _services_provider_service_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/provider.service.client */ "./src/app/services/provider.service.client.ts");
/* harmony import */ var _communication_services_login_to_navbar_service_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../communication-services/login-to-navbar.service.client */ "./src/app/communication-services/login-to-navbar.service.client.ts");
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
    function RegisterComponent(modalService, userService, mapService, providerService, router, data) {
        this.modalService = modalService;
        this.userService = userService;
        this.mapService = mapService;
        this.providerService = providerService;
        this.router = router;
        this.data = data;
        this.loginType = 'Personal';
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
                        _this.newMessage();
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
            if (this.loginType === 'Personal') {
                this.userService
                    .login(username, password)
                    .then(function (response) {
                    return response.json();
                })
                    .then(function (user) {
                    if (!user.error) {
                        _this.newMessage();
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
            else if (this.loginType === 'Organization') {
                this.providerService
                    .login(username, password)
                    .then(function (response) {
                    return response.json();
                })
                    .then(function (user) {
                    if (!user.error) {
                        _this.newMessage();
                        _this.closeLogin();
                        _this.router.navigate(['profile']);
                    }
                    else {
                        _this.alerts.push({
                            type: 'danger',
                            msg: "User not exist or password incorrect.",
                            timeout: 5000
                        });
                    }
                });
            }
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
    RegisterComponent.prototype.newMessage = function () {
        this.data.changeMessage('login');
    };
    RegisterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data.currentMessage.subscribe(function (message) { return _this.message = message; });
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
            _services_provider_service_client__WEBPACK_IMPORTED_MODULE_5__["ProviderServiceClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _communication_services_login_to_navbar_service_client__WEBPACK_IMPORTED_MODULE_6__["LoginToNavbarServiceClient"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/rent-equipment-card/rent-equipment-card.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/rent-equipment-card/rent-equipment-card.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".carousel-container {\r\n  height: 100px;\r\n\r\n}\r\n\r\ncarousel {\r\n\r\n}\r\n\r\n.button-pos {\r\n  margin-top: 2px;\r\n  margin-right: 5px;\r\n  float: right;\r\n  z-index: 1;\r\n}\r\n\r\n.button-container {\r\n  position: relative;\r\n}\r\n\r\n.button-container i {\r\n  color: red;\r\n  text-shadow: 2px 2px 2px #aaa;\r\n  cursor: pointer;\r\n}\r\n\r\n.wbdv-blur {\r\n  -webkit-filter: blur(5px); /* Safari 6.0 - 9.0 */\r\n  filter: blur(5px);\r\n  border-radius: 25px;\r\n\r\n}\r\n\r\n.wbdv-imageContainer {\r\n  position: relative;\r\n  border-radius: 25px 25px 0 0;\r\n  overflow:hidden;\r\n  /*background-color: #0b2e13;*/\r\n  /*-moz-border-radius: 20px;*/\r\n  /*margin:0 auto;*/\r\n}\r\n\r\n.wbdv-text-block {\r\n  position: absolute;\r\n  border-radius: 25px;\r\n  top: 10%;\r\n  left: 5%;\r\n  right: 5%;\r\n\r\n\r\n  color: white;\r\n  padding-left: 20px;\r\n  padding-right: 20px;\r\n}\r\n\r\n.card {\r\n  border-radius: 25px;\r\n  margin-left: 10px;\r\n  box-shadow: 0 16px 24px 2px rgba(0, 0, 0, .1)\r\n  /*0 6px 10px 5px rgba(0, 0, 0, .1),*/\r\n  /*0 8px 10px -5px rgba(0, 0, 0, .1);*/\r\n}\r\n\r\n.card-title {\r\n  margin-bottom: 0;\r\n\r\n}\r\n\r\n#title {\r\n  z-index: 3;\r\n}\r\n\r\n#title a {\r\n  color: black;\r\n  text-decoration: none;\r\n}\r\n\r\n.iframe-pos {\r\n  top: 0;\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 100%;\r\n  border-radius: 25px;\r\n  z-index: -1;\r\n}\r\n\r\n.iframe-pos-active {\r\n  z-index: 5;\r\n}\r\n\r\n.iframe-container {\r\n  border-radius: 25px;\r\n  -webkit-border-radius: 20px;\r\n  /*position: absolute;*/\r\n  position: relative;\r\n  overflow: auto;\r\n  top: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\niframe {\r\n  width:100%;\r\n  height:100%;\r\n\r\n}\r\n\r\n.img-container{\r\n  height: 300px;\r\n  position:relative;\r\n  border-radius: 25px 25px 0 0;\r\n  overflow: hidden;\r\n}\r\n\r\n.img {\r\n  padding: 0;\r\n  background-image: url('https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b6ded683923a678ad03fae323169beb4&auto=format&fit=crop&w=700&q=60');\r\n  width: 100%;\r\n  padding-bottom: 100%;\r\n  background-size: cover;\r\n  background-position: center;\r\n}\r\n\r\n/*img {*/\r\n\r\n/*border-radius: 25px 25px 0 0;*/\r\n\r\n/*height: auto;*/\r\n\r\n/*width: auto;*/\r\n\r\n/*position:absolute;*/\r\n\r\n/*vertical-align: middle;*/\r\n\r\n/*}*/\r\n\r\n.avatar-container {\r\n  margin-left: 10%;\r\n  margin-bottom: 8px;\r\n  display: inline-block;\r\n  width: 50px;\r\n  padding: 0;\r\n}\r\n\r\n.avatar {\r\n  padding: 0;\r\n  border-radius: 50%;\r\n  background-image: url('https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b6ded683923a678ad03fae323169beb4&auto=format&fit=crop&w=700&q=60');\r\n  width: 100%;\r\n  padding-bottom: 100%;\r\n  background-size: cover;\r\n  background-position: center;\r\n  cursor: pointer;\r\n}\r\n\r\n.host-info {\r\n  display: inline-block;\r\n  padding-left: 5%;\r\n  margin-top: 0;\r\n}\r\n\r\n.host-info div {\r\n  /*padding-top: 5px;*/\r\n  /*margin-bottom: 20px;*/\r\n  font-family: \"Bradley Hand\";\r\n  overflow: hidden;\r\n  white-space: nowrap;\r\n}\r\n\r\nh6 {\r\n  display: inline-block;\r\n  padding-top: 15px;\r\n}\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/rent-equipment-card/rent-equipment-card.component.html":
/*!************************************************************************!*\
  !*** ./src/app/rent-equipment-card/rent-equipment-card.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card text-center\"\r\n     (mouseleave) =\"mouseLeave()\">\r\n\r\n  <carousel (activeSlideChange)=\"slideChanged($event)\" data-interval=\"false\">\r\n    <slide *ngFor=\"let photo of data.photos\" >\r\n      <div class=\"img-container\">\r\n        <!--<img [ngClass]=\"{'wbdv-blur': hasExtraInfo && inImage}\" src={{photo}} alt=\"first slide\" style=\"display: block; width: 100%;\">-->\r\n        <div class=\"img\"\r\n             [ngClass]=\"{'wbdv-blur': hasExtraInfo && inImage}\"\r\n             [ngStyle]=\"{'background-image': 'url(' + photo + ')'}\">\r\n        </div>\r\n      </div>\r\n    </slide>\r\n  </carousel>\r\n\r\n  <div class=\"card-block\" style=\"{z-index: 1}\">\r\n    <h4 id='title' class=\"card-title\">\r\n      <span>\r\n        {{data.title}}\r\n      </span>\r\n    </h4>\r\n    <h6 class=\"card-subtitle mb-2 text-muted\">Quantity: {{quantity}}</h6>\r\n\r\n    <div class=\"card-body\">\r\n      <div class=\"row\" >\r\n        <div class=\"avatar-container\" *ngIf=\"provider.profilePhoto\">\r\n          <div class=\"avatar\" [routerLink]=\"['/profile/' + provider._id]\"\r\n               [ngStyle]=\"{'background-image': 'url(' + provider.profilePhoto + ')'}\">\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"host-info\">\r\n          <div class=\"text-sm-left text-muted\">\r\n            Dealer:\r\n            <span>{{provider && provider.username}}</span>\r\n            <span>{{provider && provider.firstName}}</span>\r\n            <span>{{provider && ' ' + provider.lastName}}</span>\r\n          </div>\r\n          <div class=\"text-sm-left\">\r\n            <span class=\"text-muted\">From </span>\r\n            <span>{{provider.organizationName}}</span>\r\n            <span>{{provider.address}}</span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/rent-equipment-card/rent-equipment-card.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/rent-equipment-card/rent-equipment-card.component.ts ***!
  \**********************************************************************/
/*! exports provided: RentEquipmentCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RentEquipmentCardComponent", function() { return RentEquipmentCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _services_event_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/event.service.client */ "./src/app/services/event.service.client.ts");
/* harmony import */ var _services_provider_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/provider.service.client */ "./src/app/services/provider.service.client.ts");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _models_equipment_model_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models/equipment.model.client */ "./src/app/models/equipment.model.client.ts");
/* harmony import */ var _services_equipmentRenting_service_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/equipmentRenting.service.client */ "./src/app/services/equipmentRenting.service.client.ts");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _models_EventCard_model_client__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../models/EventCard.model.client */ "./src/app/models/EventCard.model.client.ts");
/* harmony import */ var _models_provider_model_client__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../models/provider.model.client */ "./src/app/models/provider.model.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var RentEquipmentCardComponent = /** @class */ (function () {
    function RentEquipmentCardComponent(sanitizer, router, rentService, userService, eventService, modalService, service) {
        this.sanitizer = sanitizer;
        this.router = router;
        this.rentService = rentService;
        this.userService = userService;
        this.eventService = eventService;
        this.modalService = modalService;
        this.service = service;
        this.inImage = false;
        this.hasExtraInfo = false;
        this.slideIndex = 0;
        this.rentNumber = 1;
        this.myEvents = [];
        this.targetEvent = new _models_EventCard_model_client__WEBPACK_IMPORTED_MODULE_9__["EventCard"]();
        this.provider = new _models_provider_model_client__WEBPACK_IMPORTED_MODULE_10__["Provider"]();
        this.refreshEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.config = {
            animated: true,
            keyboard: true,
            class: 'my-modal'
        };
    }
    RentEquipmentCardComponent.prototype.splitList = function (data) {
        return data.split(/\r?\n/);
    };
    RentEquipmentCardComponent.prototype.selectEvent = function (event) {
        this.targetEvent = event;
    };
    RentEquipmentCardComponent.prototype.slideChanged = function (event) {
        if (event !== this.slideIndex) {
            this.slideIndex = event;
        }
    };
    RentEquipmentCardComponent.prototype.mouseEnter = function () {
        this.inImage = true;
    };
    RentEquipmentCardComponent.prototype.mouseLeave = function () {
        this.inImage = false;
    };
    RentEquipmentCardComponent.prototype.getProvider = function () {
        var _this = this;
        console.log(this.data.provider);
        return this.service.findProviderById(this.data.provider)
            .then(function (provider) {
            console.log(provider);
            if (!provider.profilePhoto || provider.profilePhoto === '') {
                provider.profilePhoto = 'https://images.unsplash.com/photo-' +
                    '1495078065017-564723e7e3e7?ixlib=rb-0.3.5&ixid=eyJhcHBfa' +
                    'WQiOjEyMDd9&s=09093dcdf66dbcd2397b9dc19384a899&auto=forma' +
                    't&fit=crop&w=800&q=60';
            }
            return _this.provider = provider;
        });
    };
    RentEquipmentCardComponent.prototype.confirm = function () {
        var _this = this;
        if (!this.targetEvent._id) {
            this.modalRef.hide();
            return;
        }
        if (this.data.available < this.rentNumber) {
            alert('don not have enough equipments');
            this.modalRef.hide();
            return;
        }
        console.log('Confirmed!');
        var r = {
            event: this.targetEvent._id,
            equipment: this.data._id,
            provider: this.provider._id,
            quantity: this.rentNumber
        };
        this.rentService.rentEquipmentForEvent(r)
            .then(function () { return _this.loadMyEvents(); })
            .then(function () {
            _this.loadEquipments();
            alert('rent success');
            _this.modalRef.hide();
        });
    };
    RentEquipmentCardComponent.prototype.loadEquipments = function () {
        this.refreshEmitter.emit('refresh equipments');
    };
    RentEquipmentCardComponent.prototype.loadMyEvents = function () {
        var _this = this;
        console.log('load');
        return this.userService.profile()
            .then(function (curUser) {
            return _this.eventService.findEventsForOrganizer(curUser._id);
        })
            .then(function (events) {
            return _this.myEvents = events;
        });
    };
    RentEquipmentCardComponent.prototype.decline = function () {
        this.loadEquipments();
        this.modalRef.hide();
    };
    RentEquipmentCardComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log(this.data);
        this.getProvider()
            .then(function () { return _this.loadMyEvents(); });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_equipment_model_client__WEBPACK_IMPORTED_MODULE_6__["Equipment"])
    ], RentEquipmentCardComponent.prototype, "data", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], RentEquipmentCardComponent.prototype, "quantity", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], RentEquipmentCardComponent.prototype, "refreshEmitter", void 0);
    RentEquipmentCardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-rent-equipment-card',
            template: __webpack_require__(/*! ./rent-equipment-card.component.html */ "./src/app/rent-equipment-card/rent-equipment-card.component.html"),
            styles: [__webpack_require__(/*! ./rent-equipment-card.component.css */ "./src/app/rent-equipment-card/rent-equipment-card.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _services_equipmentRenting_service_client__WEBPACK_IMPORTED_MODULE_7__["EquipmentRentingServiceClient"],
            _services_user_service_client__WEBPACK_IMPORTED_MODULE_8__["UserServiceClient"],
            _services_event_service_client__WEBPACK_IMPORTED_MODULE_2__["EventServiceClient"],
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__["BsModalService"],
            _services_provider_service_client__WEBPACK_IMPORTED_MODULE_3__["ProviderServiceClient"]])
    ], RentEquipmentCardComponent);
    return RentEquipmentCardComponent;
}());



/***/ }),

/***/ "./src/app/renting-list-for-profile/renting-list-for-profile.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/renting-list-for-profile/renting-list-for-profile.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\r\n  width: 100%;\r\n  height: 40px;\r\n  background-color: whitesmoke;\r\n  margin-top: 15px;\r\n}\r\n\r\n.icon {\r\n  margin: 5px;\r\n}\r\n\r\n.avatar {\r\n  border-radius: 5%;\r\n  background-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcfCcmZR6idt2y0elauB_IQeFgF5L14OWzWgnqsJIMUO5oJZGi');\r\n  width: 100%;\r\n  padding-bottom: 100%;\r\n  background-size: cover;\r\n  background-position: center;\r\n  z-index: 1;\r\n}\r\n\r\n.pic-container {\r\n  display: inline-block;\r\n  width: 30%;\r\n  padding: 0;\r\n  margin-top: 0;\r\n  margin-left: 5%;\r\n  margin-right: 5%;\r\n}\r\n\r\n.name {\r\n  display: inline-block;\r\n  padding-left: 5%;\r\n  position: absolute;\r\n  top: 50%;\r\n  font-size: xx-large;\r\n}\r\n\r\n.button {\r\n  position: absolute;\r\n  top: 55%;\r\n  right: 5%;\r\n}\r\n\r\n.card {\r\n  height: 240px;\r\n  position: relative;\r\n}\r\n\r\n@media (min-width: 400px) {\r\n  .card-columns {\r\n    -webkit-column-count: 1;\r\n            column-count: 1;\r\n  }\r\n}\r\n\r\n@media (min-width: 770px) {\r\n  .card-columns {\r\n    -webkit-column-count: 2;\r\n            column-count: 2;\r\n  }\r\n}\r\n\r\n@media (min-width: 1000px) {\r\n  .masonry-item {\r\n    width: 33.3%;\r\n    padding: 10px;\r\n\r\n  }\r\n}\r\n\r\n.name div {\r\n  /*padding-top: 5px;*/\r\n  /*margin-bottom: 20px;*/\r\n  font-family: \"Bradley Hand\";\r\n  overflow: hidden;\r\n  white-space: nowrap;\r\n}\r\n\r\n.title {\r\n  text-align: center;\r\n  overflow: hidden;\r\n}\r\n\r\n#Adiv {\r\n  margin-top: 20px;\r\n}\r\n\r\n.body {\r\n  height: 150px;\r\n}\r\n\r\n.info-container {\r\n  width: 40%;\r\n  padding: 0;\r\n  margin-top: 0;\r\n  margin-left: 5%;\r\n  margin-right: 5%;\r\n  display: inline-block;\r\n}\r\n\r\n#title {\r\n  margin-top: 15px;\r\n  margin-left: 15px;\r\n}\r\n\r\n.fld {\r\n  margin-top: 15px;\r\n  margin-left: 15px;\r\n}\r\n\r\n#deleteBtn {\r\n  margin-right: 20px;\r\n}\r\n\r\n.col-6 {\r\n  margin-top: 15px;\r\n}\r\n\r\nrow {\r\n  margin-bottom: 15px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/renting-list-for-profile/renting-list-for-profile.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/renting-list-for-profile/renting-list-for-profile.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <div class=\"header\">\r\n    <h4>Number of Reservations/Renting: {{rentings.length}}</h4>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div *ngFor=\"let rent of rentings\" class=\"col-6\">\r\n      <div class=\"card\">\r\n        <div class=\"body\">\r\n          <div class=\"\">\r\n            <div id=\"title\">\r\n              <a class=\"text-muted\" [routerLink]=\"['/eventDetail/' + rent.event._id]\">\r\n                <h4>Event: {{rent.event.title}}</h4>\r\n              </a>\r\n            </div>\r\n            <div *ngIf=\"user.role === 'SiteManager'\">\r\n              <a class=\"text-muted\" [routerLink]=\"['/eventDetail/' + rent.site._id]\">\r\n                <p class=\"fld\">Site: {{rent.site.title}}</p>\r\n              </a>\r\n            </div>\r\n            <div *ngIf=\"user.role === 'EquipmentDealer'\" class=\"text-muted\">\r\n              <p class=\"fld\">Equipment: {{rent.equipment.title}}</p>\r\n              <p class=\"fld\">Total: {{rent.equipment.quantity}}</p>\r\n              <span class=\"fld\">Available: {{rent.equipment.available}}</span>\r\n              <span class=\"fld\">Rent Quantity: {{rent.quantity}}</span>\r\n            </div>\r\n            <div *ngIf=\"isSame\">\r\n              <button id=\"deleteBtn\" class=\"btn btn-danger float-right\" (click)=\"delete(rent)\">Delete</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/renting-list-for-profile/renting-list-for-profile.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/renting-list-for-profile/renting-list-for-profile.component.ts ***!
  \********************************************************************************/
/*! exports provided: RentingListForProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RentingListForProfileComponent", function() { return RentingListForProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_reservation_service_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/reservation.service.client */ "./src/app/services/reservation.service.client.ts");
/* harmony import */ var _services_equipmentRenting_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/equipmentRenting.service.client */ "./src/app/services/equipmentRenting.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RentingListForProfileComponent = /** @class */ (function () {
    function RentingListForProfileComponent(reservationService, equipmentRentingService) {
        this.reservationService = reservationService;
        this.equipmentRentingService = equipmentRentingService;
        this.messageEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    RentingListForProfileComponent.prototype.ngOnInit = function () {
        console.log(this.rentings);
    };
    RentingListForProfileComponent.prototype.delete = function (reservation) {
        var _this = this;
        if (confirm('Are you sure to delete this reservation/renting ?')) {
            if (this.user.role === 'SiteManager') {
                var real = {
                    event: reservation.event._id,
                    site: reservation.site._id
                };
                console.log(real);
                this.reservationService
                    .unreserveSiteForEvent(real)
                    .then(function () {
                    _this.reservationService.findReservationsForProvider(_this.user._id)
                        .then(function (reservations) { return _this.messageEvent.emit(reservations); });
                });
            }
            else {
                var real = {
                    _id: reservation._id,
                    event: reservation.event._id,
                    equipment: reservation.equipment._id,
                    quantity: reservation.quantity
                };
                this.equipmentRentingService
                    .returnEquipForEvent(real)
                    .then(function () {
                    _this.equipmentRentingService
                        .findRentingsForProvider(_this.user._id).then(function (rentings) {
                        _this.messageEvent.emit(rentings);
                    });
                });
            }
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], RentingListForProfileComponent.prototype, "isSame", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], RentingListForProfileComponent.prototype, "rentings", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], RentingListForProfileComponent.prototype, "user", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], RentingListForProfileComponent.prototype, "messageEvent", void 0);
    RentingListForProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-renting-list-for-profile',
            template: __webpack_require__(/*! ./renting-list-for-profile.component.html */ "./src/app/renting-list-for-profile/renting-list-for-profile.component.html"),
            styles: [__webpack_require__(/*! ./renting-list-for-profile.component.css */ "./src/app/renting-list-for-profile/renting-list-for-profile.component.css")]
        }),
        __metadata("design:paramtypes", [_services_reservation_service_client__WEBPACK_IMPORTED_MODULE_1__["ReservationServiceClient"],
            _services_equipmentRenting_service_client__WEBPACK_IMPORTED_MODULE_2__["EquipmentRentingServiceClient"]])
    ], RentingListForProfileComponent);
    return RentingListForProfileComponent;
}());



/***/ }),

/***/ "./src/app/search-bar-campground/search-bar-camping-site.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/search-bar-campground/search-bar-camping-site.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".search {\r\n  margin: 5px;\r\n  width: 100%;\r\n\r\n}\r\n\r\n.container {\r\n  width: 60%; /*can be in percentage also.*/\r\n  height: auto;\r\n  margin: 0 auto;\r\n  padding: 10px;\r\n  position: relative;\r\n}\r\n"

/***/ }),

/***/ "./src/app/search-bar-campground/search-bar-camping-site.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/search-bar-campground/search-bar-camping-site.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"input-group mb-auto container-fluid search\">\r\n    <input type=\"search\"\r\n           class=\"form-control\"\r\n           aria-label=\"Search\"\r\n           placeholder=\"Name\"\r\n           [(ngModel)]=\"pNameInput\">\r\n    <input type=\"search\"\r\n           class=\"form-control\"\r\n           aria-label=\"Search\"\r\n           placeholder=\"State\"\r\n           [(ngModel)]=\"pStateInput\">\r\n    <div class=\"input-group-append\">\r\n      <button class=\"btn btn-danger my-2 my-sm-0\"\r\n              type=\"submit\"\r\n              (click)=\"searchCampgrounds(pNameInput, pStateInput, $event)\">Search</button>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

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

/***/ "./src/app/services/discussion.service.client.ts":
/*!*******************************************************!*\
  !*** ./src/app/services/discussion.service.client.ts ***!
  \*******************************************************/
/*! exports provided: DiscussionServiceClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscussionServiceClient", function() { return DiscussionServiceClient; });
// const URL = 'http://localhost:3000';
var URL = 'https://husky-camp-node-server.herokuapp.com';
var DiscussionServiceClient = /** @class */ (function () {
    function DiscussionServiceClient() {
    }
    DiscussionServiceClient.prototype.postDiscussion = function (discussion) {
        return fetch(URL + '/api/discussion/create', {
            body: JSON.stringify(discussion),
            credentials: 'include',
            method: 'post',
            headers: {
                'content-type': 'application/json'
            }
        }).then(function (res) { return res.json(); });
    };
    DiscussionServiceClient.prototype.updateDiscussion = function (discussion) {
        return fetch(URL + '/api/discussion/update', {
            body: JSON.stringify(discussion),
            credentials: 'include',
            method: 'put',
            headers: {
                'content-type': 'application/json'
            }
        }).then(function (res) { return res.json(); });
    };
    DiscussionServiceClient.prototype.findDiscussionsForEvent = function (eventId) {
        return fetch(URL + '/api/discussion/event/' + eventId)
            .then(function (res) { return res.json(); });
    };
    DiscussionServiceClient.prototype.findAllDiscussions = function () {
        return fetch(URL + '/api/discussions')
            .then(function (res) { return res.json(); });
    };
    DiscussionServiceClient.prototype.deleteDiscussion = function (discussionId) {
        return fetch(URL + '/api/discussion/' + discussionId, {
            credentials: 'include',
            method: 'delete',
            headers: {
                'content-type': 'application/json'
            }
        }).then(function (res) { return res.json(); });
    };
    DiscussionServiceClient.prototype.findDiscussionForUser = function (userId) {
        return fetch(URL + '/api/discussion/user/' + userId)
            .then(function (res) { return res.json(); });
    };
    return DiscussionServiceClient;
}());



/***/ }),

/***/ "./src/app/services/enrollment.service.client.ts":
/*!*******************************************************!*\
  !*** ./src/app/services/enrollment.service.client.ts ***!
  \*******************************************************/
/*! exports provided: EnrollmentServiceClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnrollmentServiceClient", function() { return EnrollmentServiceClient; });
// const URL = 'http://localhost:3000';
var URL = 'https://husky-camp-node-server.herokuapp.com';
var EnrollmentServiceClient = /** @class */ (function () {
    function EnrollmentServiceClient() {
    }
    EnrollmentServiceClient.prototype.enrollAttendeeInEvent = function (enrollment) {
        return fetch(URL + '/api/attendee/' + enrollment.attendee + '/event/' + enrollment.event, {
            body: JSON.stringify(enrollment),
            credentials: 'include',
            method: 'post',
            headers: {
                'content-type': 'application/json'
            }
        }).then(function (res) { return res.json(); });
    };
    EnrollmentServiceClient.prototype.unenrollAttendeeInEvent = function (enrollment) {
        return fetch(URL + '/api/attendee/' + enrollment.attendee + '/event/' + enrollment.event, {
            method: 'delete',
            credentials: 'include'
        }).then(function (res) { return res.json(); });
    };
    EnrollmentServiceClient.prototype.findEnrollmentsForAttendee = function (attendeeId) {
        return fetch(URL + '/api/attendee/' + attendeeId + '/event')
            .then(function (res) { return res.json(); });
    };
    EnrollmentServiceClient.prototype.findAllEnrollments = function () {
        return fetch(URL + '/api/enrollments')
            .then(function (res) { return res.json(); });
    };
    return EnrollmentServiceClient;
}());



/***/ }),

/***/ "./src/app/services/equipment.service.client.ts":
/*!******************************************************!*\
  !*** ./src/app/services/equipment.service.client.ts ***!
  \******************************************************/
/*! exports provided: EquipmentServiceClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EquipmentServiceClient", function() { return EquipmentServiceClient; });
// const URL = 'http://localhost:3000';
var URL = 'https://husky-camp-node-server.herokuapp.com';
var EquipmentServiceClient = /** @class */ (function () {
    function EquipmentServiceClient() {
    }
    EquipmentServiceClient.prototype.createEquipment = function (equipment) {
        return fetch(URL + '/api/equipment/create', {
            body: JSON.stringify(equipment),
            credentials: 'include',
            method: 'post',
            headers: {
                'content-type': 'application/json'
            }
        }).then(function (res) { return res.json(); });
    };
    EquipmentServiceClient.prototype.deleteEquipment = function (equipmentId) {
        return fetch(URL + '/api/equipment/' + equipmentId, {
            method: 'delete',
            credentials: 'include'
        }).then(function (res) { return res.json(); });
    };
    EquipmentServiceClient.prototype.updateEquipment = function (equipment) {
        return fetch(URL + '/api/equipment/' + equipment._id, {
            body: JSON.stringify(equipment),
            credentials: 'include',
            method: 'put',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(function (res) { return res.json(); });
    };
    EquipmentServiceClient.prototype.findEquipmentById = function (equipmentId) {
        return fetch(URL + '/api/equipment/' + equipmentId)
            .then(function (res) { return res.json(); });
    };
    EquipmentServiceClient.prototype.findAllEquipments = function () {
        return fetch(URL + '/api/equipments')
            .then(function (res) { return res.json(); });
    };
    EquipmentServiceClient.prototype.findEquipmentsForProvider = function (providerId) {
        return fetch(URL + '/api/provider/' + providerId + '/equipment')
            .then(function (res) { return res.json(); });
    };
    return EquipmentServiceClient;
}());



/***/ }),

/***/ "./src/app/services/equipmentRenting.service.client.ts":
/*!*************************************************************!*\
  !*** ./src/app/services/equipmentRenting.service.client.ts ***!
  \*************************************************************/
/*! exports provided: EquipmentRentingServiceClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EquipmentRentingServiceClient", function() { return EquipmentRentingServiceClient; });
// const URL = 'http://localhost:3000';
var URL = 'https://husky-camp-node-server.herokuapp.com';
var EquipmentRentingServiceClient = /** @class */ (function () {
    function EquipmentRentingServiceClient() {
    }
    EquipmentRentingServiceClient.prototype.rentEquipmentForEvent = function (rent) {
        return fetch(URL + '/api/event/' + rent.event + '/equip/' + rent.equipment, {
            body: JSON.stringify(rent),
            credentials: 'include',
            method: 'post',
            headers: {
                'content-type': 'application/json'
            }
        }).then(function (res) { return res.json(); });
    };
    EquipmentRentingServiceClient.prototype.returnEquipForEvent = function (rent) {
        return fetch(URL + '/api/event/' + rent.event + '/equip/' + rent.equipment, {
            method: 'delete',
            credentials: 'include',
            body: JSON.stringify(rent),
            headers: {
                'content-type': 'application/json'
            }
        }).then(function (res) { return res.json(); });
    };
    EquipmentRentingServiceClient.prototype.findRentingsForEvent = function (eventId) {
        return fetch(URL + '/api/event/' + eventId + '/equip')
            .then(function (res) { return res.json(); });
    };
    EquipmentRentingServiceClient.prototype.findRentingsForEquipment = function (equipmentId) {
        return fetch(URL + '/api/equip/' + equipmentId + '/event')
            .then(function (res) { return res.json(); });
    };
    EquipmentRentingServiceClient.prototype.findRentingsForProvider = function (providerId) {
        return fetch(URL + '/api/provider/' + providerId + '/renting')
            .then(function (res) { return res.json(); });
    };
    EquipmentRentingServiceClient.prototype.findAllRenting = function () {
        return fetch(URL + '/api/rentings')
            .then(function (res) { return res.json(); });
    };
    return EquipmentRentingServiceClient;
}());



/***/ }),

/***/ "./src/app/services/event.service.client.ts":
/*!**************************************************!*\
  !*** ./src/app/services/event.service.client.ts ***!
  \**************************************************/
/*! exports provided: EventServiceClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventServiceClient", function() { return EventServiceClient; });
// const URL = 'http://localhost:3000';
var URL = 'https://husky-camp-node-server.herokuapp.com';
var EventServiceClient = /** @class */ (function () {
    function EventServiceClient() {
    }
    EventServiceClient.prototype.createEvent = function (event) {
        return fetch(URL + '/api/event/create', {
            body: JSON.stringify(event),
            credentials: 'include',
            method: 'post',
            headers: {
                'content-type': 'application/json'
            }
        }).then(function (res) { return res.json(); });
    };
    EventServiceClient.prototype.deleteEvent = function (eventId) {
        return fetch(URL + '/api/event/' + eventId, {
            method: 'delete',
            credentials: 'include'
        }).then(function (res) { return res.json(); });
    };
    EventServiceClient.prototype.updateEvent = function (event) {
        return fetch(URL + '/api/event/' + event._id, {
            body: JSON.stringify(event),
            credentials: 'include',
            method: 'put',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(function (res) { return res.json(); });
    };
    EventServiceClient.prototype.findEventById = function (eventId) {
        return fetch(URL + '/api/event/' + eventId)
            .then(function (res) { return res.json(); });
    };
    EventServiceClient.prototype.findAllEvents = function () {
        return fetch(URL + '/api/events')
            .then(function (res) { return res.json(); });
    };
    EventServiceClient.prototype.findEventsForOrganizer = function (userId) {
        return fetch(URL + '/api/organizer/' + userId + '/event')
            .then(function (res) { return res.json(); });
    };
    return EventServiceClient;
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
        return fetch('https://nominatim.openstreetmap.org/reverse?format=json&lat=' + lat + '&lon=' + lng + '&accept-language=en', {
            method: 'GET',
            mode: 'cors',
        })
            .then(function (response) { return response.json(); });
    };
    return MapServiceClient;
}());



/***/ }),

/***/ "./src/app/services/provider.service.client.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/provider.service.client.ts ***!
  \*****************************************************/
/*! exports provided: ProviderServiceClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProviderServiceClient", function() { return ProviderServiceClient; });
// const URL = 'http://localhost:3000';
var URL = 'https://husky-camp-node-server.herokuapp.com';
var ProviderServiceClient = /** @class */ (function () {
    function ProviderServiceClient() {
    }
    ProviderServiceClient.prototype.createProvider = function (username, password, organizationName, organizationAddress, service) {
        var provider = {
            username: username,
            password: password,
            organizationName: organizationName,
            organizationAddress: organizationAddress,
            role: service
        };
        return fetch(URL + '/api/provider/register', {
            body: JSON.stringify(provider),
            credentials: 'include',
            method: 'post',
            headers: {
                'content-type': 'application/json'
            }
        });
    };
    ProviderServiceClient.prototype.adminCreateProvider = function (username, password, role) {
        var provider = {
            username: username,
            password: password,
            role: role
        };
        return fetch(URL + '/api/provider/register', {
            body: JSON.stringify(provider),
            credentials: 'include',
            method: 'post',
            headers: {
                'content-type': 'application/json'
            }
        });
    };
    ProviderServiceClient.prototype.findProviderById = function (providerId) {
        return fetch(URL + '/api/provider/providerId/' + providerId)
            .then(function (response) { return response.json(); });
    };
    ProviderServiceClient.prototype.findAllProviders = function () {
        return fetch(URL + '/api/provider')
            .then(function (response) { return response.json(); });
    };
    ProviderServiceClient.prototype.login = function (username, password) {
        var credentials = {
            username: username,
            password: password
        };
        return fetch(URL + '/api/provider/login', {
            method: 'post',
            body: JSON.stringify(credentials),
            credentials: 'include',
            headers: {
                'content-type': 'application/json'
            }
        });
    };
    ProviderServiceClient.prototype.logout = function () {
        return fetch(URL + '/api/provider/logout', {
            method: 'post',
            credentials: 'include'
        });
    };
    ProviderServiceClient.prototype.update = function (user) {
        return fetch(URL + '/api/provider/profile', {
            method: 'put',
            body: JSON.stringify(user),
            credentials: 'include',
            headers: {
                'content-type': 'application/json'
            }
        }).then(function (response) { return response.json(); });
    };
    ProviderServiceClient.prototype.adminUpdate = function (user) {
        return fetch(URL + '/api/admin/updateProvider', {
            method: 'put',
            body: JSON.stringify(user),
            headers: {
                'content-type': 'application/json'
            }
        }).then(function (response) { return response.json(); });
    };
    ProviderServiceClient.prototype.delete = function () {
        return fetch(URL + '/api/provider/profile', {
            method: 'delete',
            credentials: 'include'
        });
    };
    ProviderServiceClient.prototype.deleteProviderById = function (providerId) {
        return fetch(URL + '/api/provider/providerId/' + providerId, {
            method: 'delete'
        }).then(function (response) { return response.json(); });
    };
    ProviderServiceClient.prototype.profile = function () {
        return fetch(URL + '/api/provider/profile', {
            credentials: 'include',
        })
            .then(function (response) { return response.json(); });
    };
    return ProviderServiceClient;
}());



/***/ }),

/***/ "./src/app/services/reservation.service.client.ts":
/*!********************************************************!*\
  !*** ./src/app/services/reservation.service.client.ts ***!
  \********************************************************/
/*! exports provided: ReservationServiceClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReservationServiceClient", function() { return ReservationServiceClient; });
// const URL = 'http://localhost:3000';
var URL = 'https://husky-camp-node-server.herokuapp.com';
var ReservationServiceClient = /** @class */ (function () {
    function ReservationServiceClient() {
    }
    ReservationServiceClient.prototype.reserveSiteForEvent = function (reservation) {
        return fetch(URL + '/api/event/' + reservation.event + '/site/' + reservation.site, {
            body: JSON.stringify(reservation),
            credentials: 'include',
            method: 'post',
            headers: {
                'content-type': 'application/json'
            }
        }).then(function (res) { return res.json(); });
    };
    ReservationServiceClient.prototype.unreserveSiteForEvent = function (reservation) {
        return fetch(URL + '/api/event/' + reservation.event + '/site/' + reservation.site, {
            method: 'delete',
            credentials: 'include'
        }).then(function (res) { return res.json(); });
    };
    ReservationServiceClient.prototype.findReservationsForSite = function (siteId) {
        return fetch(URL + '/api/site/' + siteId + '/event')
            .then(function (res) { return res.json(); });
    };
    ReservationServiceClient.prototype.findReservationsForEvent = function (eventId) {
        return fetch(URL + '/api/event/' + eventId + '/site')
            .then(function (res) { return res.json(); });
    };
    ReservationServiceClient.prototype.findReservationsForProvider = function (providerId) {
        return fetch(URL + '/api/provider/' + providerId)
            .then(function (res) { return res.json(); });
    };
    ReservationServiceClient.prototype.findAllReservations = function () {
        return fetch(URL + '/api/reservations')
            .then(function (res) { return res.json(); });
    };
    return ReservationServiceClient;
}());



/***/ }),

/***/ "./src/app/services/site.service.client.ts":
/*!*************************************************!*\
  !*** ./src/app/services/site.service.client.ts ***!
  \*************************************************/
/*! exports provided: SiteServiceClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SiteServiceClient", function() { return SiteServiceClient; });
// const URL = 'http://localhost:3000';
var URL = 'https://husky-camp-node-server.herokuapp.com';
var SiteServiceClient = /** @class */ (function () {
    function SiteServiceClient() {
    }
    SiteServiceClient.prototype.createSite = function (site) {
        return fetch(URL + '/api/site/create', {
            body: JSON.stringify(site),
            credentials: 'include',
            method: 'post',
            headers: {
                'content-type': 'application/json'
            }
        }).then(function (res) { return res.json(); });
    };
    SiteServiceClient.prototype.deleteSite = function (siteId) {
        return fetch(URL + '/api/site/' + siteId, {
            method: 'delete',
            credentials: 'include'
        }).then(function (res) { return res.json(); });
    };
    SiteServiceClient.prototype.updateSite = function (site) {
        return fetch(URL + '/api/site/' + site._id, {
            body: JSON.stringify(site),
            credentials: 'include',
            method: 'put',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(function (res) { return res.json(); });
    };
    SiteServiceClient.prototype.findSiteById = function (siteId) {
        return fetch(URL + '/api/site/' + siteId)
            .then(function (res) { return res.json(); });
    };
    SiteServiceClient.prototype.findAllSites = function () {
        return fetch(URL + '/api/sites')
            .then(function (res) { return res.json(); });
    };
    SiteServiceClient.prototype.findSitesForProvider = function (providerId) {
        return fetch(URL + '/api/provider/' + providerId + '/site')
            .then(function (res) { return res.json(); });
    };
    SiteServiceClient.prototype.findSitesForProviderWithInfo = function (providerId) {
        return fetch(URL + '/api/providerInfo/' + providerId + '/site')
            .then(function (res) { return res.json(); });
    };
    return SiteServiceClient;
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
// const URL = 'http://localhost:3000';
var URL = 'https://husky-camp-node-server.herokuapp.com';
var UserServiceClient = /** @class */ (function () {
    function UserServiceClient() {
    }
    UserServiceClient.prototype.findUserById = function (userId) {
        return fetch(URL + '/api/user/userId/' + userId)
            .then(function (response) { return response.json(); });
    };
    UserServiceClient.prototype.findAllUsers = function () {
        return fetch(URL + '/api/user')
            .then(function (response) { return response.json(); });
    };
    UserServiceClient.prototype.login = function (username, password) {
        var credentials = {
            username: username,
            password: password
        };
        return fetch(URL + '/api/login', {
            method: 'post',
            body: JSON.stringify(credentials),
            credentials: 'include',
            headers: {
                'content-type': 'application/json'
            }
        });
    };
    UserServiceClient.prototype.logout = function () {
        return fetch(URL + '/api/logout', {
            method: 'post',
            credentials: 'include'
        });
    };
    UserServiceClient.prototype.update = function (user) {
        return fetch(URL + '/api/profile', {
            method: 'put',
            body: JSON.stringify(user),
            credentials: 'include',
            headers: {
                'content-type': 'application/json'
            }
        }).then(function (response) { return response.json(); });
    };
    UserServiceClient.prototype.adminUpdate = function (user) {
        return fetch(URL + '/api/admin/updateUser', {
            method: 'put',
            body: JSON.stringify(user),
            headers: {
                'content-type': 'application/json'
            }
        }).then(function (response) { return response.json(); });
    };
    UserServiceClient.prototype.delete = function (userId) {
        return fetch(URL + '/api/user/userId/' + userId, {
            method: 'delete',
            credentials: 'include'
        });
    };
    UserServiceClient.prototype.deleteUserById = function (userId) {
        return fetch(URL + '/api/user/userId/' + userId, {
            method: 'delete'
        });
    };
    UserServiceClient.prototype.profile = function () {
        return fetch(URL + '/api/profile', {
            credentials: 'include',
        })
            .then(function (response) { return response.json(); });
    };
    UserServiceClient.prototype.createUser = function (username, password, location) {
        var user = {
            username: username,
            password: password,
            location: location,
            role: 'attendee'
        };
        return fetch(URL + '/api/register', {
            body: JSON.stringify(user),
            credentials: 'include',
            method: 'post',
            headers: {
                'content-type': 'application/json'
            }
        });
    };
    UserServiceClient.prototype.followFriend = function (userId) {
        return fetch(URL + '/api/user/follow/' + userId, {
            credentials: 'include',
            method: 'put',
            headers: {
                'content-type': 'application/json'
            }
        }).then(function (response) { return response.json(); });
    };
    UserServiceClient.prototype.un_followFriend = function (userId) {
        return fetch(URL + '/api/user/un_follow/' + userId, {
            credentials: 'include',
            method: 'put',
            headers: {
                'content-type': 'application/json'
            }
        }).then(function (response) { return response.json(); });
    };
    UserServiceClient.prototype.findAllFollowingFriendsForUser = function (userId) {
        return fetch(URL + '/api/user/allFollows/' + userId)
            .then(function (response) { return response.json(); });
    };
    UserServiceClient.prototype.adminCreateUser = function (username, password, role) {
        var user = {
            username: username,
            password: password,
            role: role
        };
        return fetch(URL + '/api/register', {
            body: JSON.stringify(user),
            credentials: 'include',
            method: 'post',
            headers: {
                'content-type': 'application/json'
            }
        });
    };
    UserServiceClient.prototype.checkDelete = function (userId) {
        return fetch(URL + '/api/user/userId/' + userId + '/checkDelete')
            .then(function (response) { return response.json(); });
    };
    return UserServiceClient;
}());



/***/ }),

/***/ "./src/app/site-detail/site-detail.component.css":
/*!*******************************************************!*\
  !*** ./src/app/site-detail/site-detail.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#pageArea {\r\n  margin-top: 10px;\r\n}\r\n\r\n#carousel {\r\n  /*width: 35%;*/\r\n  /*height: 35%;*/\r\n  padding-left: 150px;\r\n  padding-right: 150px;\r\n}\r\n\r\n#tag {\r\n  font-size: 15px;\r\n  margin-left: 5px;\r\n}\r\n\r\n#amenity_list {\r\n  margin-left: 35px;\r\n}\r\n\r\n.amenity_item {\r\n  margin-right: 8px;\r\n}\r\n\r\n#learnMore {\r\n  margin-top: 20px;\r\n}\r\n\r\n.avatar-container {\r\n  margin-left: 25px;\r\n  display: inline-block;\r\n  width: 50px;\r\n  padding: 0;\r\n}\r\n\r\n.avatar {\r\n  padding: 0;\r\n  border-radius: 50%;\r\n  background-image: url('https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b6ded683923a678ad03fae323169beb4&auto=format&fit=crop&w=700&q=60');\r\n  width: 100%;\r\n  padding-bottom: 100%;\r\n  background-size: cover;\r\n  background-position: center;\r\n  cursor: pointer;\r\n}\r\n\r\n#divider {\r\n  height: 30px;\r\n  margin-top: 4px;\r\n  border-right: 1px solid dimgray;\r\n  margin-left: 5px;\r\n  margin-right: 5px;\r\n}\r\n\r\n#selectBtn {\r\n  margin-left: 8px;\r\n}\r\n\r\n#yesBtn {\r\n  margin-right: 20px;\r\n}\r\n\r\n#addtoEventBtn {\r\n  margin-top: 5px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/site-detail/site-detail.component.html":
/*!********************************************************!*\
  !*** ./src/app/site-detail/site-detail.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"isDataAvailable\" class=\"container-fluid\">\r\n\r\n  <div id=\"pageArea\" class=\"jumbotron\">\r\n    <div>\r\n      <h1 id=\"cground_name\" class=\"display-4\">\r\n      {{site.title}}\r\n      <!--<span id=\"tag\" class=\"badge badge-secondary\">{{campingSiteFromCommunication._attributes.contractType}}</span>-->\r\n      </h1>\r\n      <button class=\"btn btn-outline-danger\" id=\"addtoEventBtn\" (click)=\"openModal(template2)\">Add as target site to my event</button>\r\n    </div>\r\n    <p id=\"cground_address\" class=\"lead\">\r\n      {{site.location}}\r\n    </p>\r\n    <hr class=\"my-4\">\r\n    <div>\r\n      <div *ngFor=\"let widget of site.description\">\r\n        <div *ngIf=\"widget.type === 'heading'\">\r\n          <h3>{{widget.data}}</h3>\r\n        </div>\r\n        <div *ngIf=\"widget.type === 'paragraph'\">\r\n          <p>{{widget.data}}</p>\r\n        </div>\r\n        <div *ngIf=\"widget.type === 'link'\">\r\n          <a href={{widget.data}}>{{widget.data}}</a>\r\n        </div>\r\n\r\n        <div *ngIf=\"widget.type === 'unorderedList'\">\r\n          <ul >\r\n            <li *ngFor=\"let item of splitList(widget.data)\">{{item}}</li>\r\n          </ul>\r\n        </div>\r\n\r\n        <div *ngIf=\"widget.type === 'orderedList'\">\r\n          <ol>\r\n            <li *ngFor=\"let item of splitList(widget.data)\">{{item}}</li>\r\n          </ol>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div id=\"carousel\">\r\n      <carousel>\r\n        <slide *ngFor=\"let photo of site.photos\">\r\n          <img src={{photo}} alt=\"first slide\" style=\"display: block; width: 100%;\">\r\n          <div class=\"carousel-caption d-none d-md-block\">\r\n            <!--<h3>First slide label</h3>-->\r\n            <!--<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>-->\r\n          </div>\r\n        </slide>\r\n        <!--<slide>-->\r\n        <!--<img src=\"../../assets/images/backGround_image_2.jpg\" alt=\"second slide\" style=\"display: block; width: 100%;\">-->\r\n        <!--<div class=\"carousel-caption d-none d-md-block\">-->\r\n        <!--<h3>Second slide label</h3>-->\r\n        <!--<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>-->\r\n        <!--</div>-->\r\n        <!--</slide>-->\r\n        <!--<slide>-->\r\n        <!--<img src=\"../../assets/images/backGround_image_3.jpg\" alt=\"third slide\" style=\"display: block; width: 100%;\">-->\r\n        <!--<div class=\"carousel-caption d-none d-md-block\">-->\r\n        <!--<h3>Third slide label</h3>-->\r\n        <!--<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>-->\r\n        <!--</div>-->\r\n        <!--</slide>-->\r\n      </carousel>\r\n    </div>\r\n    <hr class=\"my-4\">\r\n    <h5>Amenities :</h5>\r\n    <div id=\"amenity_list\">\r\n      <span *ngFor=\"let amenity of site.tags\" class=\"badge badge-secondary amenity_item\">{{amenity}}</span>\r\n    </div>\r\n    <hr class=\"my-4\">\r\n    <!--<div class=\"container-fluid\">-->\r\n      <!--<h5>Weather Forecast</h5>-->\r\n      <!--<p>Weather info will appear here.</p>-->\r\n    <!--</div>-->\r\n    <!--<hr class=\"my-4\">-->\r\n    <p id=\"cground_contact\" class=\"lead\">Contact info : </p>\r\n    <!--<li *ngFor=\"let contactItem of campingSite.contact\">-->\r\n    <!--{{contactItem._attributes.name + ' : ' + contactItem._attributes.number}}-->\r\n    <!--</li>-->\r\n    <!--<a id=\"learnMore\" class=\"btn btn-primary btn-lg\" href=\"#\" role=\"button\">Learn more</a>-->\r\n\r\n    <div class=\"row\" >\r\n      <div class=\"avatar-container col-2\">\r\n        <div class=\"avatar\" [routerLink]=\"['/profile/' + provider._id]\"\r\n             [ngStyle]=\"{'background-image': 'url(' + provider.profilePhoto + ')'}\">\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"host-info col-9\">\r\n        <div class=\"text-sm-left text-muted\">\r\n          Site Manager :\r\n          <span>{{provider.organizationName}}</span>\r\n        </div>\r\n        <div class=\"text-sm-left\">\r\n          <span class=\"text-muted\">From :</span>\r\n          <span>{{' ' + provider.organizationAddress}}</span>\r\n          <hr>\r\n          <span class=\"text-muted\">Contact number: </span>\r\n          <p *ngIf=\"provider.phoneNumber\">{{' ' + provider.phoneNumber}}</p>\r\n          <p *ngIf=\"!provider.phoneNumber\">Unavailable</p>\r\n          <span class=\"text-muted\">E-mail: </span>\r\n          <p *ngIf=\"provider.email\">{{' ' + provider.email}}</p>\r\n          <p *ngIf=\"!provider.email\">Unavailable</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <ng-template #template2>\r\n    <div class=\"modal-header\">\r\n      <h4 class=\"modal-title pull-left\">Add current site to my event</h4>\r\n      <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\r\n        <span aria-hidden=\"true\">&times;</span>\r\n      </button>\r\n    </div>\r\n\r\n    <div class=\"modal-body\">\r\n      <div class=\"content-of-modal\">\r\n        <ul>\r\n          <li *ngFor=\"let event of myEvents; let i = index\">\r\n            {{event.title}}\r\n\r\n            <span *ngIf=\"getCorrespondingSiteTitle(i)\" id=\"divider\" class=\"divider-vertical\"></span>\r\n            <span *ngIf=\"getCorrespondingSiteTitle(i)\">\r\n              Current site: {{getCorrespondingSiteTitle(i)}}\r\n            </span>\r\n            <button id=\"selectBtn\" class=\"btn btn-outline-dark\" (click)=\"selectEvent(event)\">Select</button>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n      <hr>\r\n      <div>Selected target event: {{targetEvent.title}}</div>\r\n      <hr>\r\n      <p>Save the change</p>\r\n      <button type=\"button\" class=\"btn btn-danger\" id=\"yesBtn\" (click)=\"confirm()\" >Yes</button>\r\n      <button type=\"button\" class=\"btn btn-default\" (click)=\"decline()\" >No</button>\r\n    </div>\r\n  </ng-template>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/site-detail/site-detail.component.ts":
/*!******************************************************!*\
  !*** ./src/app/site-detail/site-detail.component.ts ***!
  \******************************************************/
/*! exports provided: SiteDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SiteDetailComponent", function() { return SiteDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_site_service_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/site.service.client */ "./src/app/services/site.service.client.ts");
/* harmony import */ var _services_provider_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/provider.service.client */ "./src/app/services/provider.service.client.ts");
/* harmony import */ var _models_provider_model_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/provider.model.client */ "./src/app/models/provider.model.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _models_site_model_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/site.model.client */ "./src/app/models/site.model.client.ts");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var _services_event_service_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/event.service.client */ "./src/app/services/event.service.client.ts");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _models_EventCard_model_client__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../models/EventCard.model.client */ "./src/app/models/EventCard.model.client.ts");
/* harmony import */ var _services_reservation_service_client__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/reservation.service.client */ "./src/app/services/reservation.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var SiteDetailComponent = /** @class */ (function () {
    function SiteDetailComponent(service, route, userService, eventService, reservationService, modalService, providerService) {
        var _this = this;
        this.service = service;
        this.route = route;
        this.userService = userService;
        this.eventService = eventService;
        this.reservationService = reservationService;
        this.modalService = modalService;
        this.providerService = providerService;
        this.isDataAvailable = false;
        this.site = new _models_site_model_client__WEBPACK_IMPORTED_MODULE_5__["Site"]();
        this.provider = new _models_provider_model_client__WEBPACK_IMPORTED_MODULE_3__["Provider"]();
        this.myEvents = [];
        this.correspondingReservations = [];
        this.targetEvent = new _models_EventCard_model_client__WEBPACK_IMPORTED_MODULE_9__["EventCard"]();
        this.config = {
            animated: true,
            keyboard: true,
            class: 'my-modal'
        };
        this.route.params.subscribe(function (params) { return _this.setParams(params); });
    }
    SiteDetailComponent.prototype.openModal = function (template) {
        this.modalRef = this.modalService
            .show(template, Object.assign({}, { class: 'my-modal modal-lg modal-dialog-centered' }));
    };
    SiteDetailComponent.prototype.setParams = function (params) {
        var _this = this;
        var siteId = params['siteId'];
        this.service.findSiteById(siteId)
            .then(function (site) {
            _this.site = site;
            return _this.providerService.findProviderById(site.provider);
        })
            .then(function (provider) {
            _this.provider = provider;
            if (!provider.profilePhoto || provider.profilePhoto === '') {
                _this.provider.profilePhoto = 'https://images.unsplash.com/photo-' +
                    '1495078065017-564723e7e3e7?ixlib=rb-0.3.5&ixid=eyJhcHBfa' +
                    'WQiOjEyMDd9&s=09093dcdf66dbcd2397b9dc19384a899&auto=forma' +
                    't&fit=crop&w=800&q=60';
            }
            _this.isDataAvailable = true;
        });
    };
    SiteDetailComponent.prototype.refreshSite = function () {
        var _this = this;
        this.service.findSiteById(this.site._id)
            .then(function (site) {
            return _this.site = site;
        });
    };
    SiteDetailComponent.prototype.loadMyEvents = function () {
        var _this = this;
        console.log('load');
        return this.userService.profile()
            .then(function (curUser) {
            return _this.eventService.findEventsForOrganizer(curUser._id);
        })
            .then(function (events) {
            return _this.myEvents = events;
        }).then(function () {
            return _this.getAllReservations();
        }).then(function (reserve) {
            _this.correspondingReservations = reserve;
        });
    };
    SiteDetailComponent.prototype.splitList = function (data) {
        return data.split(/\r?\n/);
    };
    SiteDetailComponent.prototype.selectEvent = function (event) {
        this.targetEvent = event;
    };
    SiteDetailComponent.prototype.unreserve = function () {
    };
    SiteDetailComponent.prototype.getAllReservations = function () {
        var promises_array = [];
        for (var _i = 0, _a = this.myEvents; _i < _a.length; _i++) {
            var event_1 = _a[_i];
            promises_array.push(this.reservationService.findReservationsForEvent(event_1._id));
        }
        return Promise.all(promises_array);
    };
    SiteDetailComponent.prototype.confirm = function () {
        var _this = this;
        if (!this.targetEvent._id) {
            alert('must have a target event');
            this.modalRef.hide();
            return;
        }
        console.log('Confirmed!');
        this.reservationService
            .findReservationsForEvent(this.targetEvent._id)
            .then(function (reservation) {
            if (reservation.length > 0) {
                console.log(reservation);
                var r = {
                    event: reservation[0].event,
                    site: reservation[0].site._id
                };
                console.log(r);
                _this.reservationService.unreserveSiteForEvent(r)
                    .then(function (res) {
                    console.log(res);
                    var newReservation = {
                        event: _this.targetEvent._id,
                        site: _this.site._id
                    };
                    _this.reservationService.reserveSiteForEvent(newReservation)
                        .then(function () { return _this.loadMyEvents(); })
                        .then(function () {
                        alert('Add target site to event success!');
                        _this.modalRef.hide();
                    });
                });
            }
            else {
                var newReservation = {
                    event: _this.targetEvent._id,
                    site: _this.site._id
                };
                _this.reservationService.reserveSiteForEvent(newReservation)
                    .then(function () { return _this.loadMyEvents(); })
                    .then(function () {
                    alert('Add target site to event success!');
                    _this.modalRef.hide();
                });
            }
        });
    };
    SiteDetailComponent.prototype.getCorrespondingSiteTitle = function (i) {
        if (this.correspondingReservations[i].length > 0) {
            return this.correspondingReservations[i][0].site.title;
        }
        return '';
    };
    SiteDetailComponent.prototype.decline = function () {
        var _this = this;
        this.loadMyEvents()
            .then(function () { return _this.modalRef.hide(); });
    };
    SiteDetailComponent.prototype.ngOnInit = function () {
        this.loadMyEvents();
    };
    SiteDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-site-detail',
            template: __webpack_require__(/*! ./site-detail.component.html */ "./src/app/site-detail/site-detail.component.html"),
            styles: [__webpack_require__(/*! ./site-detail.component.css */ "./src/app/site-detail/site-detail.component.css")]
        }),
        __metadata("design:paramtypes", [_services_site_service_client__WEBPACK_IMPORTED_MODULE_1__["SiteServiceClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _services_user_service_client__WEBPACK_IMPORTED_MODULE_8__["UserServiceClient"],
            _services_event_service_client__WEBPACK_IMPORTED_MODULE_7__["EventServiceClient"],
            _services_reservation_service_client__WEBPACK_IMPORTED_MODULE_10__["ReservationServiceClient"],
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__["BsModalService"],
            _services_provider_service_client__WEBPACK_IMPORTED_MODULE_2__["ProviderServiceClient"]])
    ], SiteDetailComponent);
    return SiteDetailComponent;
}());



/***/ }),

/***/ "./src/app/site-editor/site-editor.component.css":
/*!*******************************************************!*\
  !*** ./src/app/site-editor/site-editor.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#pageArea {\r\n  margin-top: 10px;\r\n}\r\n\r\n#carousel {\r\n  /*width: 35%;*/\r\n  /*height: 35%;*/\r\n  padding-left: 150px;\r\n  padding-right: 150px;\r\n}\r\n\r\n#tag {\r\n  font-size: 15px;\r\n  margin-left: 5px;\r\n}\r\n\r\n#amenity_list {\r\n  margin-left: 35px;\r\n}\r\n\r\n.amenity_item {\r\n  margin-right: 8px;\r\n}\r\n\r\n#learnMore {\r\n  margin-top: 20px;\r\n}\r\n\r\n.avatar-container {\r\n  display: inline-block;\r\n  width: 50px;\r\n  padding: 0;\r\n  margin-left: 25px;\r\n}\r\n\r\n.avatar {\r\n  padding: 0;\r\n  border-radius: 50%;\r\n  background-image: url('https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b6ded683923a678ad03fae323169beb4&auto=format&fit=crop&w=700&q=60');\r\n  width: 100%;\r\n  padding-bottom: 100%;\r\n  background-size: cover;\r\n  background-position: center;\r\n  cursor: pointer;\r\n}\r\n\r\n#editIcon {\r\n  margin-top: 25px;\r\n  margin-left: 40px;\r\n  color: #e4606d;\r\n  cursor: pointer;\r\n}\r\n\r\n.fields {\r\n  margin-bottom: 10px;\r\n}\r\n\r\n#dragInfo {\r\n  margin-left: 20px;\r\n  margin-top: 5px;\r\n}\r\n\r\n.content-of-modal .card {\r\n  background-color: #9fcdff;\r\n  margin: 5px;\r\n  padding: 10px;\r\n}\r\n\r\n.content-of-modal .delete-span {\r\n  display: inline-block;\r\n  margin-right: 3px;\r\n  float: right;\r\n\r\n}\r\n\r\n.content-of-modal .edit-span {\r\n  display: inline-block;\r\n  margin-right: 4px;\r\n  float: right;\r\n}\r\n\r\n#imgUrlList {\r\n  margin-bottom: 5px;\r\n}\r\n\r\n#yesBtn {\r\n  margin-right: 20px;\r\n}\r\n\r\n.widgetFields {\r\n  margin-top: 20px;\r\n}\r\n\r\n#addParaBtn {\r\n  margin-top: 5px;\r\n}\r\n\r\n#addListBtn {\r\n  margin-top: 5px;\r\n}\r\n\r\n#desYesBtn {\r\n  margin-right: 15px;\r\n}\r\n\r\n.featureTag {\r\n  cursor: pointer;\r\n  margin-right: 5px;\r\n  margin-top: 10px;\r\n}\r\n\r\n#tagsDisplay {\r\n  margin-left: 30px;\r\n}\r\n\r\n.badge {\r\n  cursor: pointer;\r\n}\r\n\r\n.host-info {\r\n  margin-left: 30px;\r\n  margin-top: 20px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/site-editor/site-editor.component.html":
/*!********************************************************!*\
  !*** ./src/app/site-editor/site-editor.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"isDataAvailable\" class=\"container-fluid\">\r\n\r\n  <div id=\"pageArea\" class=\"jumbotron\">\r\n    <div class=\"input-group-append\">\r\n      <h1 id=\"cground_name\" class=\"display-4\">\r\n        {{site.title}}\r\n        <!--<span id=\"tag\" class=\"badge badge-secondary\">{{campingSiteFromCommunication._attributes.contractType}}</span>-->\r\n      </h1>\r\n      <span class=\"edit-span\" id=\"editIcon\" (click)=\"openModal(template2)\">\r\n        <i class=\"fas fa-pencil-alt\"></i>\r\n      </span>\r\n    </div>\r\n    <p id=\"cground_address\" class=\"lead\">\r\n      {{site.location}}\r\n    </p>\r\n    <hr class=\"my-4\">\r\n    <div>\r\n      <div *ngFor=\"let widget of site.description\">\r\n        <div *ngIf=\"widget.type === 'heading'\">\r\n          <h3>{{widget.data}}</h3>\r\n        </div>\r\n        <div *ngIf=\"widget.type === 'paragraph'\">\r\n          <p>{{widget.data}}</p>\r\n        </div>\r\n        <div *ngIf=\"widget.type === 'link'\">\r\n          <a href={{widget.data}}>{{widget.data}}</a>\r\n        </div>\r\n\r\n        <div *ngIf=\"widget.type === 'unorderedList'\">\r\n          <ul >\r\n            <li *ngFor=\"let item of splitList(widget.data)\">{{item}}</li>\r\n          </ul>\r\n        </div>\r\n\r\n        <div *ngIf=\"widget.type === 'orderedList'\">\r\n          <ol>\r\n            <li *ngFor=\"let item of splitList(widget.data)\">{{item}}</li>\r\n          </ol>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <hr *ngIf=\"site.photos.length !== 0\">\r\n    <div id=\"carousel\">\r\n      <carousel>\r\n        <slide *ngFor=\"let photo of site.photos\">\r\n          <img src={{photo}} alt=\"first slide\" style=\"display: block; width: 100%;\">\r\n          <div class=\"carousel-caption d-none d-md-block\">\r\n            <!--<h3>First slide label</h3>-->\r\n            <!--<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>-->\r\n          </div>\r\n        </slide>\r\n        <!--<slide>-->\r\n        <!--<img src=\"../../assets/images/backGround_image_2.jpg\" alt=\"second slide\" style=\"display: block; width: 100%;\">-->\r\n        <!--<div class=\"carousel-caption d-none d-md-block\">-->\r\n        <!--<h3>Second slide label</h3>-->\r\n        <!--<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>-->\r\n        <!--</div>-->\r\n        <!--</slide>-->\r\n        <!--<slide>-->\r\n        <!--<img src=\"../../assets/images/backGround_image_3.jpg\" alt=\"third slide\" style=\"display: block; width: 100%;\">-->\r\n        <!--<div class=\"carousel-caption d-none d-md-block\">-->\r\n        <!--<h3>Third slide label</h3>-->\r\n        <!--<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>-->\r\n        <!--</div>-->\r\n        <!--</slide>-->\r\n      </carousel>\r\n    </div>\r\n    <hr class=\"my-4\">\r\n    <h5>Amenities :</h5>\r\n    <div id=\"amenity_list\">\r\n      <span *ngFor=\"let amenity of site.tags\" class=\"badge badge-secondary amenity_item\">{{amenity}}</span>\r\n    </div>\r\n    <hr class=\"my-4\">\r\n    <!--<div class=\"container-fluid\">-->\r\n      <!--<h5>Weather Forecast</h5>-->\r\n      <!--<p>Weather info will appear here.</p>-->\r\n    <!--</div>-->\r\n    <!--<hr class=\"my-4\">-->\r\n    <p id=\"cground_contact\" class=\"lead\">Contact info : </p>\r\n    <!--<li *ngFor=\"let contactItem of campingSite.contact\">-->\r\n      <!--{{contactItem._attributes.name + ' : ' + contactItem._attributes.number}}-->\r\n    <!--</li>-->\r\n    <!--<a id=\"learnMore\" class=\"btn btn-primary btn-lg\" href=\"#\" role=\"button\">Learn more</a>-->\r\n\r\n    <div class=\"row\" >\r\n      <div class=\"avatar-container col-2\">\r\n        <div class=\"avatar\" [routerLink]=\"['/profile/' + provider._id]\"\r\n             [ngStyle]=\"{'background-image': 'url(' + provider.profilePhoto + ')'}\">\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"host-info col-9\">\r\n        <div class=\"text-sm-left text-muted\">\r\n          Site Manager :\r\n          <span>{{provider.organizationName}}</span>\r\n        </div>\r\n        <div class=\"text-sm-left\">\r\n          <span class=\"text-muted\">From :</span>\r\n          <span>{{' ' + provider.organizationAddress}}</span>\r\n          <hr>\r\n          <span class=\"text-muted\">Contact number: </span>\r\n          <p *ngIf=\"provider.phoneNumber\">{{' ' + provider.phoneNumber}}</p>\r\n          <p *ngIf=\"!provider.phoneNumber\">Unavailable</p>\r\n          <span class=\"text-muted\">E-mail: </span>\r\n          <p *ngIf=\"provider.email\">{{' ' + provider.email}}</p>\r\n          <p *ngIf=\"!provider.email\">Unavailable</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <ng-template #template2>\r\n    <div class=\"modal-header\">\r\n      <h3 class=\"modal-title pull-left\">Description: Edit or Add new</h3>\r\n      <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\r\n        <span aria-hidden=\"true\">&times;</span>\r\n      </button>\r\n    </div>\r\n\r\n    <div class=\"modal-body\">\r\n      <div class=\"content-of-modal\">\r\n        <h4>Edit basic informations</h4>\r\n        <div>\r\n          <div class=\"input-group-append fields\">\r\n            <label for=\"title\" class=\"col-sm-2 col-form-label\"> Title </label>\r\n            <input\r\n              id=\"title\"\r\n              [(ngModel)]=\"site.title\"\r\n              class=\"form-control\"\r\n              placeholder=\"Event Title\"\r\n            />\r\n          </div>\r\n\r\n\r\n          <div class=\"input-group-append fields\">\r\n            <label for=\"img\" class=\"col-sm-2 col-form-label\"> Add Image </label>\r\n            <input\r\n              id=\"img\"\r\n              [(ngModel)]=\"imgUrl\"\r\n              class=\"form-control\"\r\n              placeholder=\"Image Url\">\r\n            <button class=\"btn btn-outline-dark\" (click)=\"addImageUrl()\">Add</button>\r\n          </div>\r\n\r\n          <div>\r\n            <ol>\r\n              <li *ngFor=\"let img of site.photos\">\r\n                {{img.slice(0, 28)}}\r\n                <button class=\"btn btn-outline-danger\" (click)=\"deleteImageUrl(img)\">Delete</button>\r\n              </li>\r\n            </ol>\r\n          </div>\r\n\r\n          <hr>\r\n        </div>\r\n        <div class=\"input-group-append\">\r\n          <h4>Edit current descriptions</h4>\r\n          <span class=\"text-muted\" id=\"dragInfo\">drag to switch order</span>\r\n        </div>\r\n        <div [sortablejs]='site.description' [sortablejsOptions]=\"{ animation: 150 }\">\r\n          <div class=\"card\" *ngFor=\"let widget of site.description\">\r\n            <app-event-description-widget-editor\r\n              [widget]=\"widget\"\r\n              (deleteEmitter)=\"deleteWidget($event)\"\r\n              (editEmitter)=\"updateWidget($event)\">\r\n            </app-event-description-widget-editor>\r\n          </div>\r\n        </div>\r\n\r\n        <hr *ngIf=\"site.tags.length !== 0\">\r\n        <div class=\"amenity_list\" *ngIf=\"site.tags.length > 0\">\r\n          <span *ngFor=\"let tag of site.tags\" (click)=\"toggleEventTag(tag)\" class=\"badge badge-info amenity_item\">{{tag}}</span>\r\n          <hr>\r\n        </div>\r\n      </div>\r\n      <div>\r\n        <h4>Add new descriptions</h4>\r\n        <tabset>\r\n          <tab heading=\"Heading\" id=\"tab0\">\r\n            <div class=\"input-group-append widgetFields\">\r\n              <input\r\n                [(ngModel)]=\"heading\"\r\n                class=\"form-control\"\r\n                placeholder=\"New Heading\">\r\n              <button (click)=\"addHeading()\">Add</button>\r\n            </div>\r\n          </tab>\r\n\r\n\r\n          <tab heading=\"Paragraph\" id=\"tab1\">\r\n            <div class=\"widgetFields\">\r\n              <textarea\r\n                [(ngModel)]=\"paragraph\"\r\n                class=\"form-control\"\r\n                placeholder=\"Paragraph text\">\r\n              </textarea>\r\n            </div>\r\n            <button id=\"addParaBtn\" class=\"btn btn-outline-danger\" (click)=\"addParagraph()\">Add Paragraph</button>\r\n          </tab>\r\n\r\n          <tab heading=\"Link\">\r\n            <div class=\"input-group-append widgetFields\">\r\n              <input\r\n                [(ngModel)]=\"linkUrl\"\r\n                class=\"form-control\"\r\n                placeholder=\"Link URL\">\r\n              <button class=\"btn btn-outline-danger\" (click)=\"addLink()\">Add</button>\r\n            </div>\r\n          </tab>\r\n\r\n          <tab heading=\"List\">\r\n            <div>\r\n              <select class=\"form-control widgetFields\" (change)=\"setListType()\" >\r\n                <option value=\"unorderedList\">Unordered list</option>\r\n                <option value=\"orderedList\">Ordered list</option>\r\n              </select>\r\n              <textarea\r\n                [(ngModel)]=\"list\"\r\n                class=\"form-control widgetFields\"\r\n                placeholder=\"List Item\">\r\n              </textarea>\r\n              <button id=\"addListBtn\" class=\"btn btn-outline-danger\" (click)=\"addList()\">Add List</button>\r\n            </div>\r\n          </tab>\r\n\r\n          <tab heading=\"Features\">\r\n            <div class=\"btn-group\" dropdown>\r\n              <div class=\"row container-fluid\">\r\n              <span *ngFor=\"let tag of featureTags\" (click)=\"toggleFeatureTag(tag)\" class=\"featureTag badge badge-info\">{{tag}}</span>\r\n              </div>\r\n            </div>\r\n          </tab>\r\n        </tabset>\r\n      </div>\r\n\r\n      <hr>\r\n      <p>Save new added widget?</p>\r\n      <button type=\"button\" class=\"btn btn-danger\" id=\"desYesBtn\" (click)=\"confirm()\" >Yes</button>\r\n      <button type=\"button\" class=\"btn btn-default\" (click)=\"decline()\" >No</button>\r\n    </div>\r\n  </ng-template>\r\n\r\n\r\n</div>\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/site-editor/site-editor.component.ts":
/*!******************************************************!*\
  !*** ./src/app/site-editor/site-editor.component.ts ***!
  \******************************************************/
/*! exports provided: SiteEditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SiteEditorComponent", function() { return SiteEditorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_site_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/site.service.client */ "./src/app/services/site.service.client.ts");
/* harmony import */ var _models_site_model_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/site.model.client */ "./src/app/models/site.model.client.ts");
/* harmony import */ var _models_provider_model_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/provider.model.client */ "./src/app/models/provider.model.client.ts");
/* harmony import */ var _services_provider_service_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/provider.service.client */ "./src/app/services/provider.service.client.ts");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var _models_widget_model_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../models/widget.model.client */ "./src/app/models/widget.model.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var SiteEditorComponent = /** @class */ (function () {
    function SiteEditorComponent(service, route, modalService, providerService) {
        var _this = this;
        this.service = service;
        this.route = route;
        this.modalService = modalService;
        this.providerService = providerService;
        this.isDataAvailable = false;
        this.site = new _models_site_model_client__WEBPACK_IMPORTED_MODULE_3__["Site"]();
        this.provider = new _models_provider_model_client__WEBPACK_IMPORTED_MODULE_4__["Provider"]();
        this.listType = 'unorderedList';
        this.config = {
            animated: true,
            keyboard: true,
            class: 'my-modal'
        };
        this.featureTags = ['Campfire Rings', 'Drinking Water', 'Firewood Vendor', 'Fishing', 'Grills', 'River Access',
            'Swimming', 'Tables', 'Tent Sites', 'Trash Collection', 'Vault Toilets', 'ATM', 'Fuel Available',
            'Grocery Store', 'Payphone', 'Restaurant', 'Picnic Area', 'Boating', 'Group Camping', 'Parking Area',
            'Pet Allowed', 'Trails', 'Wildlife Viewing'];
        this.route.params.subscribe(function (params) { return _this.setParams(params); });
    }
    SiteEditorComponent.prototype.setParams = function (params) {
        var _this = this;
        var siteId = params['siteId'];
        this.service.findSiteById(siteId)
            .then(function (site) {
            _this.site = site;
            return _this.providerService.findProviderById(site.provider);
        })
            .then(function (provider) {
            _this.provider = provider;
            if (!provider.profilePhoto || provider.profilePhoto === '') {
                _this.provider.profilePhoto = 'https://images.unsplash.com/photo-' +
                    '1495078065017-564723e7e3e7?ixlib=rb-0.3.5&ixid=eyJhcHBfa' +
                    'WQiOjEyMDd9&s=09093dcdf66dbcd2397b9dc19384a899&auto=forma' +
                    't&fit=crop&w=800&q=60';
            }
            _this.isDataAvailable = true;
        });
    };
    SiteEditorComponent.prototype.refreshSite = function () {
        var _this = this;
        this.service.findSiteById(this.site._id)
            .then(function (site) {
            return _this.site = site;
        });
    };
    SiteEditorComponent.prototype.openModal = function (template) {
        this.modalRef = this.modalService
            .show(template, Object.assign({}, { class: 'my-modal modal-lg modal-dialog-centered' }));
    };
    SiteEditorComponent.prototype.confirm = function () {
        var _this = this;
        console.log('Confirmed!');
        this.service.updateSite(this.site)
            .then(function () {
            _this.modalRef.hide();
            _this.refreshSite();
        });
    };
    SiteEditorComponent.prototype.decline = function () {
        this.modalRef.hide();
        this.refreshSite();
    };
    SiteEditorComponent.prototype.addImageUrl = function () {
        console.log(this.imgUrl);
        this.site.photos.push(this.imgUrl);
        this.imgUrl = '';
    };
    SiteEditorComponent.prototype.deleteImageUrl = function (imgUrl) {
        if (this.site.photos.includes(imgUrl)) {
            var index = this.site.photos.indexOf(imgUrl);
            this.site.photos.splice(index, 1);
        }
    };
    SiteEditorComponent.prototype.addHeading = function () {
        this.site.description.push(new _models_widget_model_client__WEBPACK_IMPORTED_MODULE_7__["Widget"]('heading', this.heading));
        this.paragraph = '';
    };
    SiteEditorComponent.prototype.addParagraph = function () {
        this.site.description.push(new _models_widget_model_client__WEBPACK_IMPORTED_MODULE_7__["Widget"]('paragraph', this.paragraph));
        this.paragraph = '';
    };
    SiteEditorComponent.prototype.addLink = function () {
        this.site.description.push(new _models_widget_model_client__WEBPACK_IMPORTED_MODULE_7__["Widget"]('link', this.linkUrl));
    };
    SiteEditorComponent.prototype.setListType = function () {
        if (this.listType === 'orderedList') {
            this.listType = 'unorderedList';
        }
        else {
            this.listType = 'orderedList';
        }
    };
    SiteEditorComponent.prototype.addList = function () {
        this.site.description.push(new _models_widget_model_client__WEBPACK_IMPORTED_MODULE_7__["Widget"](this.listType, this.list));
    };
    SiteEditorComponent.prototype.splitList = function (data) {
        return data.split(/\r?\n/);
    };
    // toggleTag(tag) {
    //   if (this.site.tags.includes(tag)) {
    //     const index = this.site.tags.indexOf(tag);
    //     this.site.tags.splice(index, 1);
    //   } else {
    //     this.site.tags.push(tag);
    //   }
    // }
    SiteEditorComponent.prototype.toggleFeatureTag = function (tag) {
        this.site.tags.push(tag);
        var index = this.featureTags.indexOf(tag);
        this.featureTags.splice(index, 1);
    };
    SiteEditorComponent.prototype.toggleEventTag = function (tag) {
        this.featureTags.push(tag);
        var index = this.site.tags.indexOf(tag);
        this.site.tags.splice(index, 1);
    };
    SiteEditorComponent.prototype.updateWidget = function (event) {
        var oldWidget = event[0];
        var newWidget = event[1];
        var index = this.site.description.indexOf(oldWidget);
        this.site.description[index] = newWidget;
    };
    SiteEditorComponent.prototype.deleteWidget = function (widget) {
        console.log(widget);
        var index = this.site.description.indexOf(widget);
        this.site.description.splice(index, 1);
        console.log(this.site.description);
    };
    SiteEditorComponent.prototype.ngOnInit = function () {
    };
    SiteEditorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-site-editor',
            template: __webpack_require__(/*! ./site-editor.component.html */ "./src/app/site-editor/site-editor.component.html"),
            styles: [__webpack_require__(/*! ./site-editor.component.css */ "./src/app/site-editor/site-editor.component.css")]
        }),
        __metadata("design:paramtypes", [_services_site_service_client__WEBPACK_IMPORTED_MODULE_2__["SiteServiceClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__["BsModalService"],
            _services_provider_service_client__WEBPACK_IMPORTED_MODULE_5__["ProviderServiceClient"]])
    ], SiteEditorComponent);
    return SiteEditorComponent;
}());



/***/ }),

/***/ "./src/app/site-list-card/site-list-card.component.css":
/*!*************************************************************!*\
  !*** ./src/app/site-list-card/site-list-card.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".carousel-container {\r\n  height: 100px;\r\n\r\n}\r\n\r\ncarousel {\r\n\r\n}\r\n\r\n.button-pos {\r\n  margin-top: 2px;\r\n  margin-right: 5px;\r\n  float: right;\r\n  z-index: 1;\r\n}\r\n\r\n.button-container {\r\n  position: relative;\r\n}\r\n\r\n.button-container i {\r\n  color: red;\r\n  text-shadow: 2px 2px 2px #aaa;\r\n  cursor: pointer;\r\n}\r\n\r\nbutton {\r\n  position: absolute;\r\n}\r\n\r\n.wbdv-blur {\r\n  -webkit-filter: blur(5px); /* Safari 6.0 - 9.0 */\r\n  filter: blur(5px);\r\n  border-radius: 25px;\r\n\r\n}\r\n\r\n.wbdv-imageContainer {\r\n  position: relative;\r\n  border-radius: 25px 25px 0 0;\r\n  overflow:hidden;\r\n  /*background-color: #0b2e13;*/\r\n  /*-moz-border-radius: 20px;*/\r\n  /*margin:0 auto;*/\r\n}\r\n\r\n.wbdv-text-block {\r\n  position: absolute;\r\n  border-radius: 25px;\r\n  top: 10%;\r\n  left: 5%;\r\n  right: 5%;\r\n\r\n\r\n  color: white;\r\n  padding-left: 20px;\r\n  padding-right: 20px;\r\n}\r\n\r\n.card {\r\n  border-radius: 25px;\r\n  margin-left: 10px;\r\n  box-shadow: 0 16px 24px 2px rgba(0, 0, 0, .1)\r\n  /*0 6px 10px 5px rgba(0, 0, 0, .1),*/\r\n  /*0 8px 10px -5px rgba(0, 0, 0, .1);*/\r\n}\r\n\r\n.card-title {\r\n  margin-bottom: 0;\r\n\r\n}\r\n\r\n#title {\r\n  z-index: 3;\r\n}\r\n\r\n#title a {\r\n  color: black;\r\n  text-decoration: none;\r\n}\r\n\r\n.iframe-pos {\r\n  top: 0;\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 100%;\r\n  border-radius: 25px;\r\n  z-index: -1;\r\n}\r\n\r\n.iframe-pos-active {\r\n  z-index: 5;\r\n}\r\n\r\n.iframe-container {\r\n  border-radius: 25px;\r\n  -webkit-border-radius: 20px;\r\n  /*position: absolute;*/\r\n  position: relative;\r\n  overflow: auto;\r\n  top: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\niframe {\r\n  width:100%;\r\n  height:100%;\r\n\r\n}\r\n\r\n.img-container{\r\n  height: 300px;\r\n  position:relative;\r\n  border-radius: 25px 25px 0 0;\r\n  overflow: hidden;\r\n}\r\n\r\n.img {\r\n  padding: 0;\r\n  background-image: url('https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b6ded683923a678ad03fae323169beb4&auto=format&fit=crop&w=700&q=60');\r\n  width: 100%;\r\n  padding-bottom: 100%;\r\n  background-size: cover;\r\n  background-position: center;\r\n}\r\n\r\n/*img {*/\r\n\r\n/*border-radius: 25px 25px 0 0;*/\r\n\r\n/*height: auto;*/\r\n\r\n/*width: auto;*/\r\n\r\n/*position:absolute;*/\r\n\r\n/*vertical-align: middle;*/\r\n\r\n/*}*/\r\n\r\n.avatar-container {\r\n  margin-left: 10%;\r\n  margin-bottom: 8px;\r\n  display: inline-block;\r\n  width: 50px;\r\n  padding: 0;\r\n}\r\n\r\n.avatar {\r\n  padding: 0;\r\n  border-radius: 50%;\r\n  background-image: url('https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b6ded683923a678ad03fae323169beb4&auto=format&fit=crop&w=700&q=60');\r\n  width: 100%;\r\n  padding-bottom: 100%;\r\n  background-size: cover;\r\n  background-position: center;\r\n  cursor: pointer;\r\n}\r\n\r\n.host-info {\r\n  display: inline-block;\r\n  padding-left: 5%;\r\n  margin-top: 0;\r\n}\r\n\r\n.host-info div {\r\n  /*padding-top: 5px;*/\r\n  /*margin-bottom: 20px;*/\r\n  font-family: \"Bradley Hand\";\r\n  overflow: hidden;\r\n  white-space: nowrap;\r\n}\r\n\r\nh6 {\r\n  display: inline-block;\r\n  padding-top: 15px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/site-list-card/site-list-card.component.html":
/*!**************************************************************!*\
  !*** ./src/app/site-list-card/site-list-card.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card text-center\"\r\n     (mouseleave) =\"mouseLeave()\">\r\n\r\n  <carousel (activeSlideChange)=\"slideChanged($event)\" data-interval=\"false\">\r\n    <slide *ngFor=\"let photo of data.photos\" >\r\n      <div class=\"img-container\">\r\n        <!--<img [ngClass]=\"{'wbdv-blur': hasExtraInfo && inImage}\" src={{photo}} alt=\"first slide\" style=\"display: block; width: 100%;\">-->\r\n        <div class=\"img\"\r\n             [ngClass]=\"{'wbdv-blur': hasExtraInfo && inImage}\"\r\n             [ngStyle]=\"{'background-image': 'url(' + photo + ')'}\">\r\n        </div>\r\n      </div>\r\n    </slide>\r\n  </carousel>\r\n\r\n  <div class=\"card-block\" style=\"{z-index: 1}\">\r\n\r\n    <h4 id='title' class=\"card-title\">\r\n      <span>\r\n        <a [routerLink]=\"['/siteDetail/' + data._id]\">{{data.title}}</a>\r\n      </span>\r\n    </h4>\r\n    <div class=\"card-body\">\r\n      <div class=\"row\" >\r\n        <div class=\"avatar-container\" *ngIf=\"provider.profilePhoto\">\r\n          <div class=\"avatar\" [routerLink]=\"['/profile/' + provider._id]\" [ngStyle]=\"{'background-image': 'url(' + provider.profilePhoto + ')'}\">\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"host-info\">\r\n          <div class=\"text-sm-left text-muted\">\r\n            SiteManager:\r\n            <span>{{provider && provider.username}}</span>\r\n            <!--<span>{{provider && provider.firstName}}</span>-->\r\n            <!--<span>{{provider && ' ' + provider.lastName}}</span>-->\r\n          </div>\r\n          <div class=\"text-sm-left\">\r\n            <span class=\"text-muted\">From </span>\r\n            <span>{{provider.organizationName}}</span>\r\n            <span>{{provider.address}}</span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/site-list-card/site-list-card.component.ts":
/*!************************************************************!*\
  !*** ./src/app/site-list-card/site-list-card.component.ts ***!
  \************************************************************/
/*! exports provided: SiteListCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SiteListCardComponent", function() { return SiteListCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _constants_dateConstant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants/dateConstant */ "./src/app/constants/dateConstant.ts");
/* harmony import */ var _models_site_model_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/site.model.client */ "./src/app/models/site.model.client.ts");
/* harmony import */ var _services_provider_service_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/provider.service.client */ "./src/app/services/provider.service.client.ts");
/* harmony import */ var _models_provider_model_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models/provider.model.client */ "./src/app/models/provider.model.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SiteListCardComponent = /** @class */ (function () {
    function SiteListCardComponent(sanitizer, router, service) {
        this.sanitizer = sanitizer;
        this.router = router;
        this.service = service;
        this.inImage = false;
        this.hasExtraInfo = false;
        this.months = _constants_dateConstant__WEBPACK_IMPORTED_MODULE_3__["months"];
        this.dates = _constants_dateConstant__WEBPACK_IMPORTED_MODULE_3__["dates"];
        this.slideIndex = 0;
        this.provider = new _models_provider_model_client__WEBPACK_IMPORTED_MODULE_6__["Provider"]();
    }
    SiteListCardComponent.prototype.slideChanged = function (event) {
        if (event !== this.slideIndex) {
            this.slideIndex = event;
        }
    };
    SiteListCardComponent.prototype.mouseEnter = function () {
        this.inImage = true;
    };
    SiteListCardComponent.prototype.mouseLeave = function () {
        this.inImage = false;
    };
    SiteListCardComponent.prototype.getProvider = function () {
        var _this = this;
        console.log(this.data.provider);
        return this.service.findProviderById(this.data.provider)
            .then(function (provider) {
            if (!provider.profilePhoto || provider.profilePhoto === '') {
                provider.profilePhoto = 'https://images.unsplash.com/photo-' +
                    '1495078065017-564723e7e3e7?ixlib=rb-0.3.5&ixid=eyJhcHBfa' +
                    'WQiOjEyMDd9&s=09093dcdf66dbcd2397b9dc19384a899&auto=forma' +
                    't&fit=crop&w=800&q=60';
            }
            return _this.provider = provider;
        });
    };
    SiteListCardComponent.prototype.ngOnInit = function () {
        console.log(this.data);
        this.getProvider()
            .then(function () {
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_site_model_client__WEBPACK_IMPORTED_MODULE_4__["Site"])
    ], SiteListCardComponent.prototype, "data", void 0);
    SiteListCardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-site-list-card',
            template: __webpack_require__(/*! ./site-list-card.component.html */ "./src/app/site-list-card/site-list-card.component.html"),
            styles: [__webpack_require__(/*! ./site-list-card.component.css */ "./src/app/site-list-card/site-list-card.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_provider_service_client__WEBPACK_IMPORTED_MODULE_5__["ProviderServiceClient"]])
    ], SiteListCardComponent);
    return SiteListCardComponent;
}());



/***/ }),

/***/ "./src/app/site-list-for-profile/site-list-for-profile.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/site-list-for-profile/site-list-for-profile.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\r\n  width: 100%;\r\n  height: 40px;\r\n  background-color: whitesmoke;\r\n  margin-top: 15px;\r\n}\r\n\r\n.icon {\r\n  margin: 5px;\r\n}\r\n\r\n.avatar {\r\n  border-radius: 5%;\r\n  background-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcfCcmZR6idt2y0elauB_IQeFgF5L14OWzWgnqsJIMUO5oJZGi');\r\n  width: 100%;\r\n  padding-bottom: 100%;\r\n  background-size: cover;\r\n  background-position: center;\r\n  z-index: 1;\r\n}\r\n\r\n.pic-container {\r\n  display: inline-block;\r\n  width: 30%;\r\n  padding: 0;\r\n  margin-top: 0;\r\n  margin-left: 5%;\r\n  margin-right: 5%;\r\n}\r\n\r\n.name {\r\n  display: inline-block;\r\n  padding-left: 5%;\r\n  position: absolute;\r\n  top: 50%;\r\n  font-size: xx-large;\r\n}\r\n\r\n.button {\r\n  position: absolute;\r\n  top: 55%;\r\n  right: 5%;\r\n}\r\n\r\n.card {\r\n  height: 240px;\r\n  position: relative;\r\n  margin-top: 15px;\r\n}\r\n\r\n@media (min-width: 400px) {\r\n  .card-columns {\r\n    -webkit-column-count: 1;\r\n            column-count: 1;\r\n  }\r\n}\r\n\r\n@media (min-width: 770px) {\r\n  .card-columns {\r\n    -webkit-column-count: 2;\r\n            column-count: 2;\r\n  }\r\n}\r\n\r\n@media (min-width: 1000px) {\r\n  .masonry-item {\r\n    width: 33.3%;\r\n    padding: 10px;\r\n\r\n  }\r\n}\r\n\r\n.name div {\r\n  /*padding-top: 5px;*/\r\n  /*margin-bottom: 20px;*/\r\n  font-family: \"Bradley Hand\";\r\n  overflow: hidden;\r\n  white-space: nowrap;\r\n}\r\n\r\n.title {\r\n  text-align: center;\r\n  overflow: hidden;\r\n}\r\n\r\n#Adiv {\r\n  margin-top: 20px;\r\n}\r\n\r\n.body {\r\n  height: 150px;\r\n}\r\n\r\n.info-container {\r\n  width: 40%;\r\n  padding: 0;\r\n  margin-top: 0;\r\n  margin-left: 5%;\r\n  margin-right: 5%;\r\n  display: inline-block;\r\n}\r\n\r\n.far {\r\n  cursor: pointer;\r\n}\r\n\r\n.row {\r\n  margin-bottom: 20px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/site-list-for-profile/site-list-for-profile.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/site-list-for-profile/site-list-for-profile.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <div class=\"header\">\r\n    <h3>Total Sites: {{sites.length}}</h3>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div *ngFor=\"let site of sites\" class=\"col-6\">\r\n      <div class=\"card\">\r\n        <div id=\"Adiv\">\r\n          <a class=\"text-muted title\" [routerLink]=\"['/siteDetail/' + site._id]\"><h4>{{site.title}}</h4></a>\r\n        </div>\r\n\r\n        <div class=\"body\">\r\n          <div class=\"pic-container\">\r\n            <div class=\"avatar\" *ngIf=\"site.photos.length !== 0\"\r\n                 [ngStyle]=\"{'background-image': 'url(' + site.photos[0] + ')'}\"></div>\r\n            <div class=\"avatar\" *ngIf=\"site.photos.length === 0\"></div>\r\n          </div>\r\n\r\n          <div class=\"info-container\">\r\n            <div>\r\n              {{site.location}}\r\n            </div>\r\n            <div *ngIf=\"isSame\">\r\n              <i class=\"far fa-edit fa-2x icon edit\" [routerLink]=\"['/siteEditor/' + site._id]\"></i>\r\n              <i class=\"far fa-trash-alt fa-2x icon delete\" (click)=\"deleteSite(site._id, site.provider._id)\"></i>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n  </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/site-list-for-profile/site-list-for-profile.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/site-list-for-profile/site-list-for-profile.component.ts ***!
  \**************************************************************************/
/*! exports provided: SiteListForProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SiteListForProfileComponent", function() { return SiteListForProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_site_service_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/site.service.client */ "./src/app/services/site.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SiteListForProfileComponent = /** @class */ (function () {
    function SiteListForProfileComponent(siteService) {
        this.siteService = siteService;
        this.messageEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    SiteListForProfileComponent.prototype.ngOnInit = function () {
        console.log(this.sites);
    };
    SiteListForProfileComponent.prototype.deleteSite = function (siteId, provideId) {
        var _this = this;
        if (confirm('Are you sure to delete the site ?')) {
            this.siteService
                .deleteSite(siteId)
                .then(function () {
                _this.siteService
                    .findSitesForProvider(_this.user._id)
                    .then(function (sites) { return _this.messageEvent.emit(sites); });
            });
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SiteListForProfileComponent.prototype, "sites", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], SiteListForProfileComponent.prototype, "isSame", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SiteListForProfileComponent.prototype, "user", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], SiteListForProfileComponent.prototype, "messageEvent", void 0);
    SiteListForProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-site-list-for-profile',
            template: __webpack_require__(/*! ./site-list-for-profile.component.html */ "./src/app/site-list-for-profile/site-list-for-profile.component.html"),
            styles: [__webpack_require__(/*! ./site-list-for-profile.component.css */ "./src/app/site-list-for-profile/site-list-for-profile.component.css")]
        }),
        __metadata("design:paramtypes", [_services_site_service_client__WEBPACK_IMPORTED_MODULE_1__["SiteServiceClient"]])
    ], SiteListForProfileComponent);
    return SiteListForProfileComponent;
}());



/***/ }),

/***/ "./src/app/site-list/site-list.component.css":
/*!***************************************************!*\
  !*** ./src/app/site-list/site-list.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\r\n  display: inline-block;\r\n  border: none;\r\n  width: 350px;\r\n  margin-bottom: 20px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/site-list/site-list.component.html":
/*!****************************************************!*\
  !*** ./src/app/site-list/site-list.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <div *ngFor=\"let site of sites\" class=\"card\">\r\n    <app-site-list-card [data]=\"site\"></app-site-list-card>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/site-list/site-list.component.ts":
/*!**************************************************!*\
  !*** ./src/app/site-list/site-list.component.ts ***!
  \**************************************************/
/*! exports provided: SiteListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SiteListComponent", function() { return SiteListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_site_service_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/site.service.client */ "./src/app/services/site.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SiteListComponent = /** @class */ (function () {
    function SiteListComponent(service) {
        this.service = service;
        this.sites = [];
    }
    SiteListComponent.prototype.loadEvents = function () {
        var _this = this;
        return this.service.findAllSites()
            .then(function (sites) {
            sites.forEach(function (site) {
                // console.log(event);
                if (site.photos.length === 0) {
                    site.photos.push('https://images.unsplash.com/pho' +
                        'to-1503709371-a2bffb8242d4?ixlib=rb-0.3.5&ixid=e' +
                        'yJhcHBfaWQiOjEyMDd9&s=ddafca4e3976f17cd856a8de073' +
                        '8dce3&auto=format&fit=crop&w=800&q=60');
                }
            });
            _this.sites = sites;
        });
    };
    SiteListComponent.prototype.ngOnInit = function () {
        this.loadEvents();
    };
    SiteListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-site-list',
            template: __webpack_require__(/*! ./site-list.component.html */ "./src/app/site-list/site-list.component.html"),
            styles: [__webpack_require__(/*! ./site-list.component.css */ "./src/app/site-list/site-list.component.css")]
        }),
        __metadata("design:paramtypes", [_services_site_service_client__WEBPACK_IMPORTED_MODULE_1__["SiteServiceClient"]])
    ], SiteListComponent);
    return SiteListComponent;
}());



/***/ }),

/***/ "./src/app/user-list/user-list.component.css":
/*!***************************************************!*\
  !*** ./src/app/user-list/user-list.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapDiv {\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.UpdateDeleteBtns {\r\n  margin-left: 12px;\r\n}\r\n\r\n.updateBtn {\r\n  margin-right: 10px;\r\n}\r\n\r\n.confirmDelete {\r\n  margin-right: 30px;\r\n}\r\n\r\n.dropdown-item {\r\n  cursor: pointer;\r\n}\r\n\r\n.adminInput {\r\n  margin-top: 20px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/user-list/user-list.component.html":
/*!****************************************************!*\
  !*** ./src/app/user-list/user-list.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"nav nav-tabs\">\r\n  <li class=\"nav-item\">\r\n    <a class=\"nav-link\" routerLink=\"/admin\" (click)=\"openOrganizerTab()\">\r\n      Organizer({{organizers.length}})\r\n    </a>\r\n  </li>\r\n  <li class=\"nav-item\">\r\n    <a class=\"nav-link\" routerLink=\"/admin\" (click)=\"openAttendeeTab()\">\r\n      Attendee({{attendees.length}})\r\n    </a>\r\n  </li>\r\n  <li class=\"nav-item\">\r\n    <a class=\"nav-link\" routerLink=\"/admin\" (click)=\"openSiteManagerTab()\">\r\n      SiteManager({{siteManagers.length}})\r\n    </a>\r\n  </li>\r\n  <li class=\"nav-item\">\r\n    <a class=\"nav-link\" routerLink=\"/admin\" (click)=\"openEquipmentDealerTab()\">\r\n      EquipmentDealer({{equipmentDealers.length}})\r\n    </a>\r\n  </li>\r\n  <li class=\"nav-item\">\r\n    <a class=\"nav-link\" routerLink=\"/admin\" (click)=\"openCreateUserTab()\">\r\n      Create New User\r\n    </a>\r\n  </li>\r\n</ul>\r\n\r\n<div>\r\n\r\n\r\n  <accordion [closeOthers]=\"true\">\r\n    <div *ngIf=\"userType === 'attendee'\">\r\n    <accordion-group *ngFor=\"let attendee of attendees\" (isOpenChange)=\"log(attendee)\">\r\n      <button class=\"btn btn-link btn-block clearfix\" accordion-heading>\r\n        <div class=\"pull-left float-left\">{{attendee.username}}</div>\r\n        <!--<button class=\"badge badge-secondary float-right pull-right\">Update</button>-->\r\n      </button>\r\n      <div *ngFor=\"let alert of alerts\">\r\n        <alert [type]=\"alert.type\" [dismissOnTimeout]=\"alert.timeout\" (onClosed)=\"onClosed(alert)\">{{ alert.msg }}</alert>\r\n      </div>\r\n      <div class=\"input-group-append wrapDiv\">\r\n        <label for=\"usernameFld-att\" class=\"col-sm-2 col-form-label\">Username</label>\r\n        <input id=\"usernameFld-att\" [(ngModel)]=\"attendee.username\" class=\"form-control\">\r\n      </div>\r\n      <div class=\"input-group-append wrapDiv\">\r\n        <label for=\"passwordFld-att\" class=\"col-sm-2 col-form-label\">Password</label>\r\n        <input id=\"passwordFld-att\" [(ngModel)]=\"attendee.password\" class=\"form-control\">\r\n      </div>\r\n      <div class=\"input-group-append wrapDiv\">\r\n        <label for=\"firstnameFld-att\" class=\"col-sm-2 col-form-label\">First Name</label>\r\n        <input id=\"firstnameFld-att\" [(ngModel)]=\"attendee.firstName\" class=\"form-control\">\r\n      </div>\r\n      <div class=\"input-group-append wrapDiv\">\r\n        <label for=\"lastnameFld-att\" class=\"col-sm-2 col-form-label\">Last Name</label>\r\n        <input id=\"lastnameFld-att\" [(ngModel)]=\"attendee.lastName\" class=\"form-control\">\r\n      </div>\r\n      <div class=\"input-group-append wrapDiv\">\r\n        <label for=\"roleFld-att\" class=\"col-sm-2 col-form-label\">User Role</label>\r\n        <li  id=\"roleFld-att\" class=\"list-group-item form-control\">{{attendee.role}}</li>\r\n        <div class=\"btn-group\" dropdown>\r\n          <button id=\"button-basic-att\" dropdownToggle type=\"button\" class=\"btn btn-outline-dark dropdown-toggle\"\r\n                  aria-controls=\"dropdown-basic-att\">\r\n            Select Role\r\n          </button>\r\n          <ul id=\"dropdown-basic-att\" *dropdownMenu class=\"dropdown-menu\"\r\n              role=\"menu\" aria-labelledby=\"button-basic\">\r\n            <li role=\"menuitem\"><a (click)=\"switchOrganizerToAttendee(attendee)\" class=\"dropdown-item\">Attendee</a></li>\r\n            <li role=\"menuitem\"><a (click)=\"switchAttendeeToOrganizer(attendee)\" class=\"dropdown-item\">Organizer</a></li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n      <div class=\"input-group-append wrapDiv\">\r\n        <label for=\"dob-att\" class=\"col-sm-2 col-form-label\">Date of Birth</label>\r\n        <input type=\"text\"\r\n               [(ngModel)]=\"attendee.dateOfBirth\"\r\n               placeholder=\"Date of Birth\"\r\n               class=\"form-control\"\r\n               id=\"dob-att\"\r\n               [bsConfig]=\"{ dateInputFormat: 'YYYY-MM-DD' }\"\r\n               bsDatepicker>\r\n      </div>\r\n      <div class=\"input-group-append wrapDiv\">\r\n        <label for=\"phoneFld-att\" class=\"col-sm-2 col-form-label\">Phone</label>\r\n        <input id=\"phoneFld-att\" [(ngModel)]=\"attendee.phoneNumber\" class=\"form-control\">\r\n      </div>\r\n      <div class=\"input-group-append wrapDiv\">\r\n        <label for=\"emailFld-att\" class=\"col-sm-2 col-form-label\">Email</label>\r\n        <input id=\"emailFld-att\" [(ngModel)]=\"attendee.email\" class=\"form-control\">\r\n      </div>\r\n      <div class=\"input-group-append wrapDiv\">\r\n        <label for=\"addressFld-att\" class=\"col-sm-2 col-form-label\">Address</label>\r\n        <input id=\"addressFld-att\" [(ngModel)]=\"attendee.address\" class=\"form-control\">\r\n      </div>\r\n      <div class=\"UpdateDeleteBtns\">\r\n        <button class=\"btn btn-success updateBtn\" (click)=\"update(attendee)\">Update</button>\r\n        <button (click)=\"openModal(deleteConfirm)\" class=\"btn btn-danger\">Delete</button>\r\n      </div>\r\n\r\n      <ng-template #deleteConfirm>\r\n        <div class=\"modal-body text-center\">\r\n          <p>Are you sure you want to <strong>DELETE</strong> this account?</p>\r\n          <button type=\"button\" class=\"btn btn-danger confirmDelete\" (click)=\"delete(attendee)\" >Delete</button>\r\n          <button type=\"button\" class=\"btn btn-default\" (click)=\"modalRef.hide();\" >Cancel</button>\r\n        </div>\r\n      </ng-template>\r\n    </accordion-group>\r\n    </div>\r\n\r\n    <div *ngIf=\"userType === 'organizer'\">\r\n      <accordion-group *ngFor=\"let organizer of organizers\" (isOpenChange)=\"log(organizer)\">\r\n        <button class=\"btn btn-link btn-block clearfix\" accordion-heading>\r\n          <div class=\"pull-left float-left\">{{organizer.username}}</div>\r\n          <!--<button class=\"badge badge-secondary float-right pull-right\">Update</button>-->\r\n        </button>\r\n        <div *ngFor=\"let alert of alerts\">\r\n          <alert [type]=\"alert.type\" [dismissOnTimeout]=\"alert.timeout\" (onClosed)=\"onClosed(alert)\">{{ alert.msg }}</alert>\r\n        </div>\r\n        <div class=\"input-group-append wrapDiv\">\r\n          <label for=\"usernameFld-org\" class=\"col-sm-2 col-form-label\">Username</label>\r\n          <input id=\"usernameFld-org\" [(ngModel)]=\"organizer.username\" class=\"form-control\">\r\n        </div>\r\n        <div class=\"input-group-append wrapDiv\">\r\n          <label for=\"passwordFld-org\" class=\"col-sm-2 col-form-label\">Password</label>\r\n          <input id=\"passwordFld-org\" [(ngModel)]=\"organizer.password\" class=\"form-control\">\r\n        </div>\r\n        <div class=\"input-group-append wrapDiv\">\r\n          <label for=\"firstnameFld-org\" class=\"col-sm-2 col-form-label\">First Name</label>\r\n          <input id=\"firstnameFld-org\" [(ngModel)]=\"organizer.firstName\" class=\"form-control\">\r\n        </div>\r\n        <div class=\"input-group-append wrapDiv\">\r\n          <label for=\"lastnameFld-org\" class=\"col-sm-2 col-form-label\">Last Name</label>\r\n          <input id=\"lastnameFld-org\" [(ngModel)]=\"organizer.lastName\" class=\"form-control\">\r\n        </div>\r\n        <div class=\"input-group-append wrapDiv\">\r\n          <label for=\"roleFld-org\" class=\"col-sm-2 col-form-label\">User Role</label>\r\n          <li  id=\"roleFld-org\" class=\"list-group-item form-control\">{{organizer.role}}</li>\r\n          <div class=\"btn-group\" dropdown>\r\n            <button id=\"button-basic-org\" dropdownToggle type=\"button\" class=\"btn btn-outline-dark dropdown-toggle\"\r\n                    aria-controls=\"dropdown-basic-org\">\r\n              Select Role\r\n            </button>\r\n            <ul id=\"dropdown-basic-org\" *dropdownMenu class=\"dropdown-menu\"\r\n                role=\"menu\" aria-labelledby=\"button-basic\">\r\n              <li role=\"menuitem\"><a (click)=\"switchOrganizerToAttendee(organizer)\" class=\"dropdown-item\">Attendee</a></li>\r\n              <li role=\"menuitem\"><a (click)=\"switchAttendeeToOrganizer(organizer)\" class=\"dropdown-item\">Organizer</a></li>\r\n            </ul>\r\n          </div>\r\n        </div>\r\n        <div class=\"input-group-append wrapDiv\">\r\n          <label for=\"dob-org\" class=\"col-sm-2 col-form-label\">Date of Birth</label>\r\n          <input type=\"text\"\r\n                 [(ngModel)]=\"organizer.dateOfBirth\"\r\n                 placeholder=\"Date of Birth\"\r\n                 class=\"form-control\"\r\n                 id=\"dob-org\"\r\n                 [bsConfig]=\"{ dateInputFormat: 'YYYY-MM-DD' }\"\r\n                 bsDatepicker>\r\n        </div>\r\n        <div class=\"input-group-append wrapDiv\">\r\n          <label for=\"phoneFld-org\" class=\"col-sm-2 col-form-label\">Phone</label>\r\n          <input id=\"phoneFld-org\" [(ngModel)]=\"organizer.phoneNumber\" class=\"form-control\">\r\n        </div>\r\n        <div class=\"input-group-append wrapDiv\">\r\n          <label for=\"emailFld-org\" class=\"col-sm-2 col-form-label\">Email</label>\r\n          <input id=\"emailFld-org\" [(ngModel)]=\"organizer.email\" class=\"form-control\">\r\n        </div>\r\n        <div class=\"input-group-append wrapDiv\">\r\n          <label for=\"addressFld-org\" class=\"col-sm-2 col-form-label\">Address</label>\r\n          <input id=\"addressFld-org\" [(ngModel)]=\"organizer.address\" class=\"form-control\">\r\n        </div>\r\n        <div class=\"UpdateDeleteBtns\">\r\n          <button class=\"btn btn-success updateBtn\" (click)=\"update(organizer)\">Update</button>\r\n          <button (click)=\"openModal(deleteConfirm)\" class=\"btn btn-danger\">Delete</button>\r\n        </div>\r\n\r\n        <ng-template #deleteConfirm>\r\n          <div class=\"modal-body text-center\">\r\n            <p>Are you sure you want to <strong>DELETE</strong> this account?</p>\r\n            <button type=\"button\" class=\"btn btn-danger confirmDelete\" (click)=\"delete(organizer)\" >Delete</button>\r\n            <button type=\"button\" class=\"btn btn-default\" (click)=\"modalRef.hide();\" >Cancel</button>\r\n          </div>\r\n        </ng-template>\r\n      </accordion-group>\r\n    </div>\r\n\r\n\r\n    <div *ngIf=\"userType === 'SiteManager'\">\r\n      <accordion-group *ngFor=\"let siteManager of siteManagers\" (isOpenChange)=\"log(siteManager)\">\r\n        <button class=\"btn btn-link btn-block clearfix\" accordion-heading>\r\n          <div class=\"pull-left float-left\">{{siteManager.username}}</div>\r\n          <!--<button class=\"badge badge-secondary float-right pull-right\">Update</button>-->\r\n        </button>\r\n        <div *ngFor=\"let alert of alerts\">\r\n          <alert [type]=\"alert.type\" [dismissOnTimeout]=\"alert.timeout\" (onClosed)=\"onClosed(alert)\">{{ alert.msg }}</alert>\r\n        </div>\r\n        <div class=\"input-group-append wrapDiv\">\r\n          <label for=\"usernameFld-sit\" class=\"col-sm-2 col-form-label\">Username</label>\r\n          <input id=\"usernameFld-sit\" [(ngModel)]=\"siteManager.username\" class=\"form-control\">\r\n        </div>\r\n        <div class=\"input-group-append wrapDiv\">\r\n          <label for=\"passwordFld-sit\" class=\"col-sm-2 col-form-label\">Password</label>\r\n          <input id=\"passwordFld-sit\" [(ngModel)]=\"siteManager.password\" class=\"form-control\">\r\n        </div>\r\n        <div class=\"input-group-append wrapDiv\">\r\n          <label for=\"organizationNameFld-sit\" class=\"col-sm-2 col-form-label\">Organization Name</label>\r\n          <input id=\"organizationNameFld-sit\" [(ngModel)]=\"siteManager.organizationName\" class=\"form-control\">\r\n        </div>\r\n        <div class=\"input-group-append wrapDiv\">\r\n          <label for=\"organizationAddressFld-sit\" class=\"col-sm-2 col-form-label\">Organization Address</label>\r\n          <input id=\"organizationAddressFld-sit\" [(ngModel)]=\"siteManager.organizationAddress\" class=\"form-control\">\r\n        </div>\r\n        <div class=\"input-group-append wrapDiv\">\r\n          <label for=\"roleFld-sit\" class=\"col-sm-2 col-form-label\">Service Role</label>\r\n          <li  id=\"roleFld-sit\" class=\"list-group-item form-control\">{{siteManager.role}}</li>\r\n          <div class=\"btn-group\" dropdown>\r\n            <button id=\"button-basic-sit\" dropdownToggle type=\"button\" class=\"btn btn-outline-dark dropdown-toggle\"\r\n                    aria-controls=\"dropdown-basic-sit\">\r\n              Select Role\r\n            </button>\r\n            <ul id=\"dropdown-basic-sit\" *dropdownMenu class=\"dropdown-menu\"\r\n                role=\"menu\" aria-labelledby=\"button-basic\">\r\n              <li role=\"menuitem\"><a (click)=\"siteManager.role = 'SiteManager'\" class=\"dropdown-item\">SiteManager</a></li>\r\n              <li role=\"menuitem\"><a (click)=\"siteManager.role = 'EquipmentDealer'\" class=\"dropdown-item\">EquipmentDealer</a></li>\r\n            </ul>\r\n          </div>\r\n        </div>\r\n        <div class=\"input-group-append wrapDiv\">\r\n          <label for=\"phoneFld-sit\" class=\"col-sm-2 col-form-label\">Phone</label>\r\n          <input id=\"phoneFld-sit\" [(ngModel)]=\"siteManager.phoneNumber\" class=\"form-control\">\r\n        </div>\r\n        <div class=\"input-group-append wrapDiv\">\r\n          <label for=\"emailFld-sit\" class=\"col-sm-2 col-form-label\">Email</label>\r\n          <input id=\"emailFld-sit\" [(ngModel)]=\"siteManager.email\" class=\"form-control\">\r\n        </div>\r\n        <div class=\"UpdateDeleteBtns\">\r\n          <button class=\"btn btn-success updateBtn\" (click)=\"update(siteManager)\">Update</button>\r\n          <button (click)=\"openModal(deleteConfirm)\" class=\"btn btn-danger\">Delete</button>\r\n        </div>\r\n\r\n        <ng-template #deleteConfirm>\r\n          <div class=\"modal-body text-center\">\r\n            <p>Are you sure you want to <strong>DELETE</strong> this account?</p>\r\n            <button type=\"button\" class=\"btn btn-danger confirmDelete\" (click)=\"delete(siteManager)\" >Delete</button>\r\n            <button type=\"button\" class=\"btn btn-default\" (click)=\"modalRef.hide();\" >Cancel</button>\r\n          </div>\r\n        </ng-template>\r\n      </accordion-group>\r\n    </div>\r\n\r\n\r\n\r\n    <div *ngIf=\"userType === 'EquipmentDealer'\">\r\n      <accordion-group *ngFor=\"let equipmentDealer of equipmentDealers\" (isOpenChange)=\"log(equipmentDealer)\">\r\n        <button class=\"btn btn-link btn-block clearfix\" accordion-heading>\r\n          <div class=\"pull-left float-left\">{{equipmentDealer.username}}</div>\r\n          <!--<button class=\"badge badge-secondary float-right pull-right\">Update</button>-->\r\n        </button>\r\n        <div *ngFor=\"let alert of alerts\">\r\n          <alert [type]=\"alert.type\" [dismissOnTimeout]=\"alert.timeout\" (onClosed)=\"onClosed(alert)\">{{ alert.msg }}</alert>\r\n        </div>\r\n        <div class=\"input-group-append wrapDiv\">\r\n          <label for=\"usernameFld-equ\" class=\"col-sm-2 col-form-label\">Username</label>\r\n          <input id=\"usernameFld-equ\" [(ngModel)]=\"equipmentDealer.username\" class=\"form-control\">\r\n        </div>\r\n        <div class=\"input-group-append wrapDiv\">\r\n          <label for=\"passwordFld-equ\" class=\"col-sm-2 col-form-label\">Password</label>\r\n          <input id=\"passwordFld-equ\" [(ngModel)]=\"equipmentDealer.password\" class=\"form-control\">\r\n        </div>\r\n        <div class=\"input-group-append wrapDiv\">\r\n          <label for=\"organizationNameFld-equ\" class=\"col-sm-2 col-form-label\">Organization Name</label>\r\n          <input id=\"organizationNameFld-equ\" [(ngModel)]=\"equipmentDealer.organizationName\" class=\"form-control\">\r\n        </div>\r\n        <div class=\"input-group-append wrapDiv\">\r\n          <label for=\"organizationAddressFld-equ\" class=\"col-sm-2 col-form-label\">Organization Address</label>\r\n          <input id=\"organizationAddressFld-equ\" [(ngModel)]=\"equipmentDealer.organizationAddress\" class=\"form-control\">\r\n        </div>\r\n        <div class=\"input-group-append wrapDiv\">\r\n          <label for=\"roleFld-equ\" class=\"col-sm-2 col-form-label\">Service Role</label>\r\n          <li  id=\"roleFld-equ\" class=\"list-group-item form-control\">{{equipmentDealer.role}}</li>\r\n          <div class=\"btn-group\" dropdown>\r\n            <button id=\"button-basic-equ\" dropdownToggle type=\"button\" class=\"btn btn-outline-dark dropdown-toggle\"\r\n                    aria-controls=\"dropdown-basic-sit\">\r\n              Select Role\r\n            </button>\r\n            <ul id=\"dropdown-basic-equ\" *dropdownMenu class=\"dropdown-menu\"\r\n                role=\"menu\" aria-labelledby=\"button-basic\">\r\n              <li role=\"menuitem\"><a (click)=\"equipmentDealer.role = 'SiteManager'\" class=\"dropdown-item\">SiteManager</a></li>\r\n              <li role=\"menuitem\"><a (click)=\"equipmentDealer.role = 'EquipmentDealer'\" class=\"dropdown-item\">EquipmentDealer</a></li>\r\n            </ul>\r\n          </div>\r\n        </div>\r\n        <div class=\"input-group-append wrapDiv\">\r\n          <label for=\"phoneFld-equ\" class=\"col-sm-2 col-form-label\">Phone</label>\r\n          <input id=\"phoneFld-equ\" [(ngModel)]=\"equipmentDealer.phoneNumber\" class=\"form-control\">\r\n        </div>\r\n        <div class=\"input-group-append wrapDiv\">\r\n          <label for=\"emailFld-equ\" class=\"col-sm-2 col-form-label\">Email</label>\r\n          <input id=\"emailFld-equ\" [(ngModel)]=\"equipmentDealer.email\" class=\"form-control\">\r\n        </div>\r\n        <div class=\"UpdateDeleteBtns\">\r\n          <button class=\"btn btn-success updateBtn\" (click)=\"update(equipmentDealer)\">Update</button>\r\n          <button (click)=\"openModal(deleteConfirm)\" class=\"btn btn-danger\">Delete</button>\r\n        </div>\r\n\r\n        <ng-template #deleteConfirm>\r\n          <div class=\"modal-body text-center\">\r\n            <p>Are you sure you want to <strong>DELETE</strong> this account?</p>\r\n            <button type=\"button\" class=\"btn btn-danger confirmDelete\" (click)=\"delete(equipmentDealer)\" >Delete</button>\r\n            <button type=\"button\" class=\"btn btn-default\" (click)=\"modalRef.hide();\" >Cancel</button>\r\n          </div>\r\n        </ng-template>\r\n      </accordion-group>\r\n    </div>\r\n\r\n  </accordion>\r\n\r\n  <div *ngIf=\"userType === 'admin'\">\r\n    <div *ngFor=\"let alert of alerts\">\r\n      <alert [type]=\"alert.type\" [dismissOnTimeout]=\"alert.timeout\" (onClosed)=\"onClosed(alert)\">{{ alert.msg }}</alert>\r\n    </div>\r\n    <div class=\"input-group-append wrapDiv adminInput\">\r\n      <label for=\"adminUsernameFld\" class=\"col-sm-2 col-form-label\">Username</label>\r\n      <input id=\"adminUsernameFld\" [(ngModel)]=\"newUser.username\" class=\"form-control\">\r\n    </div>\r\n    <div class=\"input-group-append wrapDiv adminInput\">\r\n      <label for=\"adminPasswordFld\" class=\"col-sm-2 col-form-label\">Password</label>\r\n      <input id=\"adminPasswordFld\" [(ngModel)]=\"newUser.password\" class=\"form-control\">\r\n    </div>\r\n    <div class=\"input-group-append wrapDiv adminInput\">\r\n      <label for=\"adminRoleFld-sit\" class=\"col-sm-2 col-form-label\">User Role</label>\r\n      <li  id=\"adminRoleFld-sit\" class=\"list-group-item form-control\">{{newUser.role}}</li>\r\n      <div class=\"btn-group\" dropdown>\r\n        <button id=\"button-basic-adm\" dropdownToggle type=\"button\" class=\"btn btn-outline-dark dropdown-toggle\"\r\n                aria-controls=\"dropdown-basic-adm\">\r\n          Select Role\r\n        </button>\r\n        <ul id=\"dropdown-basic-adm\" *dropdownMenu class=\"dropdown-menu\"\r\n            role=\"menu\" aria-labelledby=\"button-basic\">\r\n          <li role=\"menuitem\"><a (click)=\"newUser.role = 'attendee'\" class=\"dropdown-item\">Attendee</a></li>\r\n          <li role=\"menuitem\"><a (click)=\"newUser.role = 'organizer'\" class=\"dropdown-item\">Organizer</a></li>\r\n          <li role=\"menuitem\"><a (click)=\"newUser.role = 'SiteManager'\" class=\"dropdown-item\">SiteManager</a></li>\r\n          <li role=\"menuitem\"><a (click)=\"newUser.role = 'EquipmentDealer'\" class=\"dropdown-item\">EquipmentDealer</a></li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n    <button (click)=\"createUser(newUser.username, newUser.password, newUser.role)\" class=\"btn btn-success\">Create User</button>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/user-list/user-list.component.ts":
/*!**************************************************!*\
  !*** ./src/app/user-list/user-list.component.ts ***!
  \**************************************************/
/*! exports provided: UserListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserListComponent", function() { return UserListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _services_provider_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/provider.service.client */ "./src/app/services/provider.service.client.ts");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var _models_user_model_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/user.model.client */ "./src/app/models/user.model.client.ts");
/* harmony import */ var _services_event_service_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/event.service.client */ "./src/app/services/event.service.client.ts");
/* harmony import */ var _services_equipmentRenting_service_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/equipmentRenting.service.client */ "./src/app/services/equipmentRenting.service.client.ts");
/* harmony import */ var _services_site_service_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/site.service.client */ "./src/app/services/site.service.client.ts");
/* harmony import */ var _services_equipment_service_client__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/equipment.service.client */ "./src/app/services/equipment.service.client.ts");
/* harmony import */ var _services_enrollment_service_client__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/enrollment.service.client */ "./src/app/services/enrollment.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var UserListComponent = /** @class */ (function () {
    function UserListComponent(userService, enrollmentService, eventService, siteService, equipmentRentingService, equipmentService, providerService, modalService) {
        this.userService = userService;
        this.enrollmentService = enrollmentService;
        this.eventService = eventService;
        this.siteService = siteService;
        this.equipmentRentingService = equipmentRentingService;
        this.equipmentService = equipmentService;
        this.providerService = providerService;
        this.modalService = modalService;
        this.attendees = [];
        this.organizers = [];
        this.siteManagers = [];
        this.equipmentDealers = [];
        this.newUser = new _models_user_model_client__WEBPACK_IMPORTED_MODULE_4__["User"]();
        this.userTypeModel = {
            attendee: 'attendee',
            organizer: 'organizer',
            siteManager: 'SiteManager',
            EquipmentDealer: 'EquipmentDealer',
            admin: 'admin'
        };
        this.alerts = [];
        this.messageEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    UserListComponent.prototype.sendMessage = function () {
        this.messageEvent.emit(this.message);
    };
    UserListComponent.prototype.switchAttendeeToOrganizer = function (user) {
        if (user.role === 'attendee') {
            user.role = 'organizer';
        }
    };
    UserListComponent.prototype.switchOrganizerToAttendee = function (user) {
        if (user.role === 'organizer') {
            user.role = 'attendee';
        }
    };
    UserListComponent.prototype.log = function (user) {
        this.preRole = user.role;
    };
    UserListComponent.prototype.onClosed = function (dismissedAlert) {
        this.alerts = this.alerts.filter(function (alert) { return alert !== dismissedAlert; });
    };
    UserListComponent.prototype.openAttendeeTab = function () {
        this.userType = this.userTypeModel.attendee;
    };
    UserListComponent.prototype.openOrganizerTab = function () {
        this.userType = this.userTypeModel.organizer;
    };
    UserListComponent.prototype.openSiteManagerTab = function () {
        this.userType = this.userTypeModel.siteManager;
    };
    UserListComponent.prototype.openEquipmentDealerTab = function () {
        this.userType = this.userTypeModel.EquipmentDealer;
    };
    UserListComponent.prototype.openCreateUserTab = function () {
        this.userType = this.userTypeModel.admin;
    };
    UserListComponent.prototype.findAllAttendees = function () {
        var _this = this;
        this.attendees = new Array();
        this.userService.findAllUsers()
            .then(function (users) {
            for (var i = 0; i < users.length; i++) {
                if (users[i].role === 'attendee') {
                    _this.attendees.push(users[i]);
                }
            }
        });
    };
    UserListComponent.prototype.findAllOrganizers = function () {
        var _this = this;
        this.organizers = new Array();
        this.userService.findAllUsers()
            .then(function (users) {
            for (var i = 0; i < users.length; i++) {
                if (users[i].role === 'organizer') {
                    _this.organizers.push(users[i]);
                }
            }
        });
    };
    UserListComponent.prototype.findAllSiteManagers = function () {
        var _this = this;
        this.siteManagers = new Array();
        return this.providerService.findAllProviders()
            .then(function (users) {
            for (var i = 0; i < users.length; i++) {
                if (users[i].role === 'SiteManager') {
                    _this.siteManagers.push(users[i]);
                }
            }
        });
    };
    UserListComponent.prototype.findAllEquipmentDeals = function () {
        var _this = this;
        this.equipmentDealers = new Array();
        return this.providerService.findAllProviders()
            .then(function (users) {
            for (var i = 0; i < users.length; i++) {
                if (users[i].role === 'EquipmentDealer') {
                    _this.equipmentDealers.push(users[i]);
                }
            }
        });
    };
    UserListComponent.prototype.update = function (user) {
        var _this = this;
        console.log(user);
        if (user.role !== 'SiteManager' && user.role !== 'EquipmentDealer') {
            this.userService
                .adminUpdate(user)
                .then(function () {
                _this.alerts.push({
                    type: 'success',
                    msg: "User profile updated successfully.",
                    timeout: 5000
                });
                console.log(_this.preRole);
                console.log(user.role);
                if (_this.preRole !== user.role) {
                    _this.findAllAttendees();
                    _this.findAllOrganizers();
                }
            });
        }
        else if (user.role === 'SiteManager' || user.role === 'EquipmentDealer') {
            this.providerService
                .adminUpdate(user)
                .then(function () {
                _this.alerts.push({
                    type: 'success',
                    msg: "User profile updated successfully.",
                    timeout: 5000
                });
                if (_this.preRole !== user.role) {
                    _this.findAllSiteManagers();
                    _this.findAllEquipmentDeals();
                }
            });
        }
    };
    UserListComponent.prototype.openModal = function (template) {
        this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
    };
    UserListComponent.prototype.delete = function (user) {
        var _this = this;
        // if (user.role !== 'SiteManager' && user.role !== 'EquipmentDealer') {
        //   this.userService.deleteUserById(user._id)
        //     .then((res) => {
        //       if (res.error) {
        //         alert(res.error);
        //       } else {
        //         this.modalRef.hide();
        //       }
        //     })
        //     .then(() => {
        //       this.findAllAttendees();
        //       this.findAllOrganizers();
        //       this.message = this.attendees.length + this.organizers.length;
        //       this.sendMessage();
        //     });
        // } else if (user.role === 'SiteManager' || user.role === 'EquipmentDealer') {
        //   this.providerService.deleteProviderById(user._id)
        //     .then((res) => {
        //       if (res.error) {
        //         alert(res.error);
        //       } else {
        //         this.modalRef.hide();
        //       }
        //     })
        this.userService.profile()
            .then(function (curUser) {
            if (!curUser.error) {
                // if (confirm('Do you really want to delete this user profile?')) {
                if (user.role !== 'SiteManager' && user.role !== 'EquipmentDealer') {
                    _this.userService.checkDelete(user._id)
                        .then(function (res) {
                        console.log(res);
                        if (res.ok === true) {
                            return _this.eventService.findEventsForOrganizer(user._id)
                                .then(function (events) {
                                console.log(events);
                                var organizedEventPromises = [];
                                for (var _i = 0, events_1 = events; _i < events_1.length; _i++) {
                                    var e = events_1[_i];
                                    organizedEventPromises.push(_this.eventService.deleteEvent(e._id));
                                }
                                return Promise.all(organizedEventPromises);
                            })
                                .then(function () {
                                return _this.enrollmentService.findEnrollmentsForAttendee(user._id);
                            })
                                .then(function (enrollments) {
                                console.log(enrollments);
                                var enrollmentsPromises = [];
                                for (var _i = 0, enrollments_1 = enrollments; _i < enrollments_1.length; _i++) {
                                    var enrollment = enrollments_1[_i];
                                    console.log(enrollment);
                                    var e = { attendee: enrollment.attendee,
                                        event: enrollment.event._id };
                                    enrollmentsPromises.push(_this.enrollmentService.unenrollAttendeeInEvent(e));
                                }
                                return Promise.all(enrollmentsPromises);
                            })
                                .then(function () {
                                return _this.userService.deleteUserById(user._id);
                            })
                                .then(function () {
                                return _this.modalRef.hide();
                            }).then(function () {
                                _this.findAllAttendees();
                                _this.findAllOrganizers();
                                _this.message = _this.siteManagers.length = _this.equipmentDealers.length;
                                _this.sendMessage();
                            });
                        }
                        else {
                            alert('you can not delete account before return all equipments and cancel site reservation, please contact provider.');
                        }
                    });
                }
                else if (user.role === 'SiteManager' || user.role === 'EquipmentDealer') {
                    if (user.role === 'SiteManager') {
                        _this.siteService
                            .findSitesForProviderWithInfo(user._id)
                            .then(function (sites) {
                            var sitesPromiseArray = [];
                            for (var _i = 0, sites_1 = sites; _i < sites_1.length; _i++) {
                                var site = sites_1[_i];
                                sitesPromiseArray.push(_this.siteService.deleteSite(site._id));
                            }
                            return Promise.all(sitesPromiseArray);
                        }).then(function () { return _this.providerService
                            .deleteProviderById(user._id); })
                            .then(function (res) { return console.log(res); });
                    }
                    else {
                        _this.equipmentService
                            .findEquipmentsForProvider(user._id)
                            .then(function (equipments) {
                            var equipPromiseArray = [];
                            for (var _i = 0, equipments_1 = equipments; _i < equipments_1.length; _i++) {
                                var equip = equipments_1[_i];
                                equipPromiseArray.push(_this.equipmentService.deleteEquipment(equip._id));
                            }
                            return Promise.all(equipPromiseArray);
                        }).then(function () {
                            _this.providerService
                                .deleteProviderById(user._id)
                                .then(function () {
                                return _this.modalRef.hide();
                            }).then(function () {
                                _this.findAllAttendees();
                                _this.findAllOrganizers();
                                _this.message = _this.siteManagers.length = _this.equipmentDealers.length;
                                _this.sendMessage();
                            });
                        });
                    }
                }
            }
            else {
                alert('please login');
            }
        });
        // }
    };
    UserListComponent.prototype.createUser = function (username, password, role) {
        var _this = this;
        if (username && password) {
            if (role === 'attendee' || role === 'organizer') {
                this.userService
                    .adminCreateUser(username, password, role)
                    .then(function (response) {
                    return response.json();
                })
                    .then(function (user) {
                    if (!user.err) {
                        _this.alerts.push({
                            type: 'success',
                            msg: "User created successfully.",
                            timeout: 5000
                        });
                        _this.findAllAttendees();
                        _this.findAllOrganizers();
                        _this.message = _this.attendees.length + _this.organizers.length;
                        _this.sendMessage();
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
            else if (role === 'SiteManager' || role === 'EquipmentDealer') {
                this.providerService
                    .adminCreateProvider(username, password, role)
                    .then(function (response) {
                    return response.json();
                })
                    .then(function (user) {
                    if (!user.err) {
                        _this.alerts.push({
                            type: 'success',
                            msg: "User created successfully.",
                            timeout: 5000
                        });
                        _this.findAllSiteManagers();
                        _this.findAllEquipmentDeals();
                        _this.message = _this.siteManagers.length = _this.equipmentDealers.length;
                        _this.sendMessage();
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
            this.alerts.push({
                type: 'danger',
                msg: "Please enter valid Username and Password.",
                timeout: 5000
            });
        }
    };
    UserListComponent.prototype.ngOnInit = function () {
        this.findAllAttendees();
        this.findAllOrganizers();
        this.findAllSiteManagers();
        this.findAllEquipmentDeals();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], UserListComponent.prototype, "messageEvent", void 0);
    UserListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-list',
            template: __webpack_require__(/*! ./user-list.component.html */ "./src/app/user-list/user-list.component.html"),
            styles: [__webpack_require__(/*! ./user-list.component.css */ "./src/app/user-list/user-list.component.css")]
        }),
        __metadata("design:paramtypes", [_services_user_service_client__WEBPACK_IMPORTED_MODULE_1__["UserServiceClient"],
            _services_enrollment_service_client__WEBPACK_IMPORTED_MODULE_9__["EnrollmentServiceClient"],
            _services_event_service_client__WEBPACK_IMPORTED_MODULE_5__["EventServiceClient"],
            _services_site_service_client__WEBPACK_IMPORTED_MODULE_7__["SiteServiceClient"],
            _services_equipmentRenting_service_client__WEBPACK_IMPORTED_MODULE_6__["EquipmentRentingServiceClient"],
            _services_equipment_service_client__WEBPACK_IMPORTED_MODULE_8__["EquipmentServiceClient"],
            _services_provider_service_client__WEBPACK_IMPORTED_MODULE_2__["ProviderServiceClient"],
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__["BsModalService"]])
    ], UserListComponent);
    return UserListComponent;
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

module.exports = __webpack_require__(/*! E:\GitHubRepo\CS5610-webdev-summerFull-2018-TeamProject\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map