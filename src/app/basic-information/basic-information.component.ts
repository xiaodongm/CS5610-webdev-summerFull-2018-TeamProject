import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {UserServiceClient} from '../services/user.service.client';
import {User} from '../models/user.model.client';
import {AlertComponent} from 'ngx-bootstrap';
import {Provider} from '../models/provider.model.client';
import {ProviderServiceClient} from '../services/provider.service.client';

@Component({
  selector: 'app-basic-information',
  templateUrl: './basic-information.component.html',
  styleUrls: ['./basic-information.component.css']
})
export class BasicInformationComponent implements OnInit {

  constructor(private service: UserServiceClient,
              private providerService: ProviderServiceClient ) { }

  user = new User();
  provider = new Provider();
  alerts = [];
  message;

  @Output() messageEvent = new EventEmitter<string>();

  sendMessage() {
    this.messageEvent.emit(this.message);
  }

  update() {
    console.log(this.user);
    if (this.user.role !== 'SiteManager' && this.user.role !== 'EquipmentDealer') {
      this.service
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


  ngOnInit() {
    this.service
      .profile()
      .then(user => this.user = user);
    this.providerService
      .profile()
      .then(provider => this.provider = provider);
  }

}
