import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {UserServiceClient} from '../services/user.service.client';
import {User} from '../models/user.model.client';
import {AlertComponent} from 'ngx-bootstrap';
import {Provider} from '../models/provider.model.client';
import {ProviderServiceClient} from '../services/provider.service.client';
import {Router} from '@angular/router';
import {LoginToNavbarServiceClient} from '../communication-services/login-to-navbar.service.client';

@Component({
  selector: 'app-basic-information',
  templateUrl: './basic-information.component.html',
  styleUrls: ['./basic-information.component.css']
})
export class BasicInformationComponent implements OnInit {

  constructor(private userService: UserServiceClient,
              private providerService: ProviderServiceClient,
              private router: Router,
              private data: LoginToNavbarServiceClient) { }

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

  delete() {
    if (confirm('Do you really want to delete this user profile?')) {
      if (this.user.role !== 'SiteManager' && this.user.role !== 'EquipmentDealer') {
        this.userService.delete()
        .then(() => this.logout());
      } else if (this.user.role === 'SiteManager' || this.user.role === 'EquipmentDealer') {
        this.providerService.delete()
          .then(() => this.logout());
      }
    }
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
