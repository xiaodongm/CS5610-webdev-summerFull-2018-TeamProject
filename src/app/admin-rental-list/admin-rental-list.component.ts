import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {EquipmentRentingServiceClient} from '../services/equipmentRenting.service.client';
import {AlertComponent, BsModalRef, BsModalService} from 'ngx-bootstrap';

@Component({
  selector: 'app-admin-rental-list',
  templateUrl: './admin-rental-list.component.html',
  styleUrls: ['./admin-rental-list.component.css']
})
export class AdminRentalListComponent implements OnInit {

  constructor(private rentalService: EquipmentRentingServiceClient,
              private modalService: BsModalService) { }

  rentals = [];

  alerts = [];
  modalRef: BsModalRef;
  message;

  rentalType;

  rentalTypeModel = {
    rental: 'rental',
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

  openRentalTab() {
    this.rentalType = this.rentalTypeModel.rental;
  }

  openCreateRentalTab() {
    this.rentalType = this.rentalTypeModel.admin;
  }

  findAllRentals() {
    this.rentalService.findAllRenting()
      .then(rentals => {
        this.rentals = rentals;
        console.log(this.rentals);
      });
  }

  delete(rental) {

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


    const unenroll = {
      _id: rental._id,
      event: rental.event._id,
      equipment: rental.equipment._id,
      quantity: rental.quantity,
    };
    this.rentalService.returnEquipForEvent(unenroll)
      .then(() => {
        this.modalRef.hide();
      })
      .then(() => {
        this.findAllRentals();
        this.message = this.rentals.length;
        this.sendMessage();
      });
    console.log(unenroll);
  }

  log(rental) {
    // this.providerService.findProviderById(site.provider)
    //   .then(provider => {this.siteManager = provider.organizationName;
    //     console.log(this.siteManager);
    //   });
  }

  ngOnInit() {
    this.findAllRentals();
  }

}
