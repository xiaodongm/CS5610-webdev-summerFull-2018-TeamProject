import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ProviderServiceClient} from '../services/provider.service.client';
import {EquipmentServiceClient} from '../services/equipment.service.client';
import {AlertComponent, BsModalRef, BsModalService} from 'ngx-bootstrap';
import {Equipment} from '../models/equipment.model.client';
import {Widget} from '../models/widget.model.client';
import {UserServiceClient} from '../services/user.service.client';

@Component({
  selector: 'app-admin-equipment-list',
  templateUrl: './admin-equipment-list.component.html',
  styleUrls: ['./admin-equipment-list.component.css']
})
export class AdminEquipmentListComponent implements OnInit {

  constructor(private providerService: ProviderServiceClient,
              private equipmentService: EquipmentServiceClient,
              private userService: UserServiceClient,
              private modalService: BsModalService) { }

  equipmentDealers = [];
  equipments = [];
  dealerId;

  newEquipment = new Equipment();

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
          msg: `Equipment Info updated successfully.`,
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
        this.equipmentService.findEquipmentsForProvider(this.dealerId)
          .then(equipments => this.equipments = equipments);
        this.message = this.equipments.length;
        this.sendMessage();
      });
  }

  createEquipment() {
    let curUser;
    this.userService.profile()
      .then(res => curUser = res)
      .then(  () => {
        const newEquipment = new Equipment();
        newEquipment.title = this.newEquipment.title;
        newEquipment.provider = curUser._id;
        newEquipment.quantity = this.newEquipment.quantity;
        newEquipment.available = this.newEquipment.available;
        this.equipmentService.createEquipment(newEquipment);
      }).then(() => {
      this.equipmentService.findEquipmentsForProvider(this.dealerId)
        .then(equipments => this.equipments = equipments);
      this.message = this.equipments.length;
      this.sendMessage();
      this.alerts.push({
        type: 'success',
        msg: `Equipment Created successfully.`,
        timeout: 5000
      });
    } );

  }

  ngOnInit() {
    this.findAllEquipmentDeals();
  }

}
