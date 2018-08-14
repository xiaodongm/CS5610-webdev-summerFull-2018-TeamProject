import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {UserServiceClient} from '../services/user.service.client';
import {User} from '../models/user.model.client';
import {AlertComponent, BsModalRef, BsModalService} from 'ngx-bootstrap';
import {Provider} from '../models/provider.model.client';
import {ProviderServiceClient} from '../services/provider.service.client';
import {Router} from '@angular/router';
import {LoginToNavbarServiceClient} from '../communication-services/login-to-navbar.service.client';
import {SiteServiceClient} from '../services/site.service.client';
import {EquipmentRentingServiceClient} from '../services/equipmentRenting.service.client';
import {EquipmentServiceClient} from '../services/equipment.service.client';

@Component({
  selector: 'app-basic-information',
  templateUrl: './basic-information.component.html',
  styleUrls: ['./basic-information.component.css']
})
export class BasicInformationComponent implements OnInit {

  constructor(private userService: UserServiceClient,
              private providerService: ProviderServiceClient,
              private router: Router,
              private siteService: SiteServiceClient,
              private equipmentRentingService: EquipmentRentingServiceClient,
              private equipmentService: EquipmentServiceClient,
              private data: LoginToNavbarServiceClient,
              private modalService: BsModalService) {
  }

  modalRef: BsModalRef;

  user = new User();
  provider = new Provider();
  alerts = [];
  message;
  logoutMessage;


  @Output() messageEvent = new EventEmitter<string>();

  sendMessage() {
    this.messageEvent.emit(this.message);
  }

  update() {
    console.log(this.user);
    if (this.user.role !== 'SiteManager' && this.user.role !== 'EquipmentDealer') {
      this.userService
        .update(this.user)
        .then((response) => {
          this.message = response;
          this.sendMessage();
          this.alerts.push({
            type: 'success',
            msg: `Profile updated successfully.`,
            timeout: 5000
          });
        });
    } else if (this.user.role === 'SiteManager' || this.user.role === 'EquipmentDealer') {
      this.providerService
        .update(this.provider)
        .then((response) => {
          this.message = response;
          this.sendMessage();
          this.alerts.push({
            type: 'success',
            msg: `Profile updated successfully.`,
            timeout: 5000
          });
        });
    }
  }

  onClosed(dismissedAlert: AlertComponent): void {
    this.alerts = this.alerts.filter(alert => alert !== dismissedAlert);
  }

  delete(userId) {
    // if (confirm('Do you really want to delete this user profile?')) {
    if (this.user.role !== 'SiteManager' && this.user.role !== 'EquipmentDealer') {
      this.userService.delete(userId)
        .then((res) => {
          if (res.error) {
            alert(res.error);
          } else {
            this.logout();
          }
        }).then(() => this.modalRef.hide());
    } else if (this.user.role === 'SiteManager' || this.user.role === 'EquipmentDealer') {
      if (this.user.role === 'SiteManager') {
        this.siteService
          .findSitesForProviderWithInfo(userId)
          .then(sites => {
            const sitesPromiseArray = [];
            for (const site of sites) {
              sitesPromiseArray.push(this.siteService.deleteSite(site._id));
            }
            return Promise.all(sitesPromiseArray);
          }).then(() => this.providerService
          .deleteProviderById(userId))
          .then((res) => console.log(res));
      } else {
        this.equipmentService
          .findEquipmentsForProvider(userId)
          .then(equipments => {
            const equipPromiseArray = [];
            for (const equip of equipments) {
              equipPromiseArray.push(this.equipmentService.deleteEquipment(equip._id));
            }
            return Promise.all(equipPromiseArray);
          }).then(() => {
          this.providerService
            .deleteProviderById(userId)
            .then(() => {
                this.logout();
                this.modalRef.hide();
            });
        });
      }

    }
    // }
  }

  logout() {
    this.userService
      .logout()
      .then(() => {
        this.sendLogoutMessage();
        this.router.navigate(['home']);
      });
  }

  sendLogoutMessage() {
    this.data.changeMessage('logout');
  }


  openModal(template) {
    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
  }

  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.logoutMessage = message);
    this.userService
      .profile()
      .then(user => this.user = user);
    this.providerService
      .profile()
      .then(provider => this.provider = provider);
  }

}
