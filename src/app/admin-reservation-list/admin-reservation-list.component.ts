import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ReservationServiceClient} from '../services/reservation.service.client';
import {AlertComponent, BsModalRef, BsModalService} from 'ngx-bootstrap';

@Component({
  selector: 'app-admin-reservation-list',
  templateUrl: './admin-reservation-list.component.html',
  styleUrls: ['./admin-reservation-list.component.css']
})
export class AdminReservationListComponent implements OnInit {

  constructor(private reservationService: ReservationServiceClient,
              private modalService: BsModalService) { }

  reservations = [];

  reservationType;

  alerts = [];
  modalRef: BsModalRef;
  message;

  reservationTypeModel = {
    reservation: 'reservation',
    admin: 'admin'
  };

  @Output() messageEvent = new EventEmitter<string>();

  sendMessage() {
    this.messageEvent.emit(this.message);
  }


  openModal(template) {
    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
  }

  onClosed(dismissedAlert: AlertComponent): void {
    this.alerts = this.alerts.filter(alert => alert !== dismissedAlert);
  }

  openReservationTab() {
    this.reservationType = this.reservationTypeModel.reservation;
  }

  log(reservation) {
    // this.providerService.findProviderById(site.provider)
    //   .then(provider => {this.siteManager = provider.organizationName;
    //     console.log(this.siteManager);
    //   });
  }

  findAllReservations() {
    this.reservationService.findAllReservations()
      .then(reservations => {this.reservations = reservations;
      console.log(this.reservations);
      });
  }

  openCreateReservationTab() {
    this.reservationType = this.reservationTypeModel.admin;
  }

  delete(reservation) {
    const unenroll = {
      event: reservation.event._id,
      site: reservation.site._id
    };
    this.reservationService.unreserveSiteForEvent(unenroll)
      .then(() => {
        this.modalRef.hide();
      })
      .then(() => {
        this.findAllReservations();
        this.message = this.reservations.length;
        this.sendMessage();
      });
  }

  ngOnInit() {
    this.findAllReservations();
  }

}
