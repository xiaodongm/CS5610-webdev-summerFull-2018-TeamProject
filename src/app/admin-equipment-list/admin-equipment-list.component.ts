import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ProviderServiceClient} from '../services/provider.service.client';
import {EquipmentServiceClient} from '../services/equipment.service.client';
import {AlertComponent, BsModalRef, BsModalService} from 'ngx-bootstrap';

@Component({
  selector: 'app-admin-equipment-list',
  templateUrl: './admin-equipment-list.component.html',
  styleUrls: ['./admin-equipment-list.component.css']
})
export class AdminEquipmentListComponent implements OnInit {

  constructor(private providerService: ProviderServiceClient,
              private equipmentService: EquipmentServiceClient,
              private modalService: BsModalService) { }

  equipmentDealers = [];
  equipments = [];
  dealerId;

  userType;
  alerts = [];
  modalRef: BsModalRef;
  message;

  userTypeModel = {
    EquipmentDealer: 'EquipmentDealer',
    admin: 'admin'
  };

  @Output() messageEvent = new EventEmitter<string>();

  sendMessage() {
    this.messageEvent.emit(this.message);
  }

  openModal(template) {
    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
  }

  openEquipmentDealerTab() {
    this.userType = this.userTypeModel.EquipmentDealer;
  }

  openCreateEquipmentTab() {
    this.userType = this.userTypeModel.admin;
  }

  onClosed(dismissedAlert: AlertComponent): void {
    this.alerts = this.alerts.filter(alert => alert !== dismissedAlert);
  }

  findAllEquipmentDeals() {
    this.equipmentDealers = new Array();
    this.providerService.findAllProviders()
      .then(users => {
        for (let i = 0; i < users.length; i++) {
          if (users[i].role === 'EquipmentDealer') {
            this.equipmentDealers.push(users[i]);
          }
        }
      });
  }

  update(equipment) {
    console.log(equipment);
    this.equipmentService.updateEquipment(equipment)
      .then(() => {
        this.alerts.push({
          type: 'success',
          msg: `User profile updated successfully.`,
          timeout: 5000
        });
      });
  }


  log(dealer) {
    this.dealerId = dealer._id;
    this.equipments = new Array();
    this.equipmentService.findEquipmentsForProvider(dealer._id)
      .then(equipments => this.equipments = equipments);
  }

  delete(equipment) {
    this.equipmentService.deleteEquipment(equipment._id)
      .then(() => {
        this.modalRef.hide();
      })
      .then(() => {
        this.message = this.equipments.length;
        this.sendMessage();
        this.equipmentService.findEquipmentsForProvider(this.dealerId)
          .then(equipments => this.equipments = equipments);
      });
  }

  ngOnInit() {
    this.findAllEquipmentDeals();
  }

}
