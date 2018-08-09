import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {UserServiceClient} from '../services/user.service.client';
import {ProviderServiceClient} from '../services/provider.service.client';
import {AlertComponent, BsModalRef, BsModalService} from 'ngx-bootstrap';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor(private userService: UserServiceClient,
              private providerService: ProviderServiceClient,
              private modalService: BsModalService) { }

  attendees = [];
  organizers = [];
  siteManagers = [];
  equipmentDealers = [];

  userType;

  userTypeModel = {
    attendee: 'attendee',
    organizer: 'organizer',
    siteManager: 'SiteManager',
    EquipmentDealer: 'EquipmentDealer'
  };

  alerts = [];
  modalRef: BsModalRef;
  message;
  preRole;

  @Output() messageEvent = new EventEmitter<string>();

  sendMessage() {
    this.messageEvent.emit(this.message);
  }

  switchAttendeeToOrganizer(user) {
    if (user.role === 'attendee') {
      user.role = 'organizer';
    }
  }

  switchOrganizerToAttendee(user) {
    if (user.role === 'organizer') {
      user.role = 'attendee';
    }
  }

  log(user) {
    this.preRole = user.role;
  }

  onClosed(dismissedAlert: AlertComponent): void {
    this.alerts = this.alerts.filter(alert => alert !== dismissedAlert);
  }

  openAttendeeTab() {
    this.userType = this.userTypeModel.attendee;
  }

  openOrganizerTab() {
    this.userType = this.userTypeModel.organizer;
  }

  openSiteManagerTab() {
    this.userType = this.userTypeModel.siteManager;
  }

  openEquipmentDealerTab() {
    this.userType = this.userTypeModel.EquipmentDealer;
  }

  findAllAttendees() {
    this.attendees = new Array();
    this.userService.findAllUsers()
      .then(users => {
        for (let i = 0; i < users.length; i++) {
          if (users[i].role === 'attendee') {
            this.attendees.push(users[i]);
          }
        }
      });
  }

  findAllOrganizers() {
    this.organizers = new Array();
    this.userService.findAllUsers()
      .then(users => {
        for (let i = 0; i < users.length; i++) {
          if (users[i].role === 'organizer') {
            this.organizers.push(users[i]);
          }
        }
      });
  }

  findAllSiteManagers() {
    this.siteManagers = new Array();
    this.providerService.findAllProviders()
      .then(users => {
        for (let i = 0; i < users.length; i++) {
          if (users[i].role === 'SiteManager') {
            this.siteManagers.push(users[i]);
          }
        }
      });
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

  update(user) {
    console.log(user);
    if (user.role !== 'SiteManager' && user.role !== 'EquipmentDealer') {
      this.userService
        .adminUpdate(user)
        .then(() => {
          this.alerts.push({
            type: 'success',
            msg: `User profile updated successfully.`,
            timeout: 5000
          });
          console.log(this.preRole);
          console.log(user.role);
          if (this.preRole !== user.role) {
            this.findAllAttendees();
            this.findAllOrganizers();
          }
        });
    } else if (user.role === 'SiteManager' || user.role === 'EquipmentDealer') {
      this.providerService
        .adminUpdate(user)
        .then(() => {
          this.alerts.push({
            type: 'success',
            msg: `User profile updated successfully.`,
            timeout: 5000
          });
          if (this.preRole !== user.role) {
            this.findAllSiteManagers();
            this.findAllEquipmentDeals();
          }
        });
    }
  }

  openModal(template) {
    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
  }

  delete(user) {
    if (user.role !== 'SiteManager' && user.role !== 'EquipmentDealer') {
      this.userService.deleteUserById(user._id)
        .then(() => this.modalRef.hide())
        .then(() => {
          this.findAllAttendees();
          this.findAllOrganizers();
          this.message = this.attendees.length + this.organizers.length;
          this.sendMessage();
        });
    } else if (user.role === 'SiteManager' || user.role === 'EquipmentDealer') {
      this.providerService.deleteProviderById(user._id)
        .then(() => this.modalRef.hide())
        .then(() => {
          this.findAllSiteManagers();
          this.findAllEquipmentDeals();
          this.message = this.siteManagers.length = this.equipmentDealers.length;
          this.sendMessage();
        });
    }
  }

  ngOnInit() {
    this.findAllAttendees();
    this.findAllOrganizers();
    this.findAllSiteManagers();
    this.findAllEquipmentDeals();
  }

}
