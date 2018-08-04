import { Component, OnInit } from '@angular/core';
import {UserServiceClient} from '../services/user.service.client';
import {User} from '../models/user.model.client';
import {AlertComponent} from 'ngx-bootstrap';

@Component({
  selector: 'app-basic-information',
  templateUrl: './basic-information.component.html',
  styleUrls: ['./basic-information.component.css']
})
export class BasicInformationComponent implements OnInit {

  constructor(private service: UserServiceClient) { }

  user = new User();
  alerts = [];

  update() {
    console.log(this.user);
    this.service
      .update(this.user).then(() => {
      this.alerts.push({
        type: 'success',
        msg: `Profile updated successfully.`,
        timeout: 5000
      });
    });
  }

  onClosed(dismissedAlert: AlertComponent): void {
    this.alerts = this.alerts.filter(alert => alert !== dismissedAlert);
  }

  ngOnInit() {
    this.service
      .profile()
      .then(user => this.user = user);
  }

}
