import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {EnrollmentServiceClient} from '../services/enrollment.service.client';
import {AlertComponent, BsModalRef, BsModalService} from 'ngx-bootstrap';

@Component({
  selector: 'app-admin-enrollment-list',
  templateUrl: './admin-enrollment-list.component.html',
  styleUrls: ['./admin-enrollment-list.component.css']
})
export class AdminEnrollmentListComponent implements OnInit {

  constructor(private enrollmentService: EnrollmentServiceClient,
              private modalService: BsModalService) { }

  enrollments = [];

  enrollmentType;

  alerts = [];
  modalRef: BsModalRef;
  message;

  enrollmentTypeModel = {
    enrollment: 'enrollment',
    admin: 'admin'
  };

  @Output() messageEvent = new EventEmitter<string>();

  sendMessage() {
    this.messageEvent.emit(this.message);
  }

  onClosed(dismissedAlert: AlertComponent): void {
    this.alerts = this.alerts.filter(alert => alert !== dismissedAlert);
  }

  openModal(template) {
    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
  }

  findAllEnrollments() {
    this.enrollmentService.findAllEnrollments()
      .then(enrollments => {this.enrollments = enrollments;
      console.log(this.enrollments);
      });
  }

  openEnrollmentTab() {
    this.enrollmentType = this.enrollmentTypeModel.enrollment;
  }

  openCreateEnrollmentTab() {
    this.enrollmentType = this.enrollmentTypeModel.admin;
  }

  log(enrollment) {
    // this.providerService.findProviderById(site.provider)
    //   .then(provider => {this.siteManager = provider.organizationName;
    //     console.log(this.siteManager);
    //   });
  }

  delete(enrollment) {
    const unenroll = {
      attendee: enrollment.attendee._id,
      event: enrollment.event._id
    };
    this.enrollmentService.unenrollAttendeeInEvent(unenroll)
      .then(() => {
       this.modalRef.hide();
      })
      .then(() => {
        this.findAllEnrollments();
        this.message = this.enrollments.length;
        this.sendMessage();
      });
  }

  ngOnInit() {
    this.findAllEnrollments();
  }

}
