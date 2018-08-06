import { Component, OnInit } from '@angular/core';
import {ProviderServiceClient} from '../services/provider.service.client';
import {Router} from '@angular/router';
import {AlertComponent} from 'ngx-bootstrap';

@Component({
  selector: 'app-organization-sign-up',
  templateUrl: './organization-sign-up.component.html',
  styleUrls: ['./organization-sign-up.component.css']
})
export class OrganizationSignUpComponent implements OnInit {

  constructor(private providerService: ProviderServiceClient,
              private router: Router) { }

  username;
  password;
  password2;
  step1isCollapsed = true;
  step2isCollapsed = true;
  step3isCollapsed = true;
  organizationName;
  organizationAddress;
  organizationService;

  alerts = [];

  serviceRole = {
    SiteManager: 'SiteManager',
    EquipmentDealer: 'EquipmentDealer'
  };


  registerProvider(username, password, password2, organizationName, organizationAddress, service) {
    if (username && password) {
      if (password !== password2) {
        // alert('Passwords not match.');
        this.alerts.push({
          type: 'danger',
          msg: `Passwords not match, please enter again.`,
          timeout: 5000
        });
      } else if (!organizationName) {
        this.alerts.push({
          type: 'danger',
          msg: `Organization Name can not be empty.`,
          timeout: 5000
        });
      } else if (!organizationAddress) {
        this.alerts.push({
          type: 'danger',
          msg: `Organization Address can not be empty.`,
          timeout: 5000
        });
      } else if (!service) {
        this.alerts.push({
          type: 'danger',
          msg: `Please choose a Service Type.`,
          timeout: 5000
        });
      } else {
        this.providerService
          .createProvider(username, password, organizationName, organizationAddress, service)
          .then(response => {
            return response.json();
          })
          .then((user) => {
            if (!user.err) {
              this.router.navigate(['profile']);
            } else {
              // alert('Username already exist, please choose another one.');
              this.alerts.push({
                type: 'danger',
                msg: `Username already exist, please choose another one.`,
                timeout: 5000
              });
            }
          });
      }
    } else {
      // alert('Please enter valid Username and Password.');
      this.alerts.push({
        type: 'danger',
        msg: `Please enter valid Username and Password.`,
        timeout: 5000
      });
    }
  }

  onClosed(dismissedAlert: AlertComponent): void {
    this.alerts = this.alerts.filter(alert => alert !== dismissedAlert);
  }



  ngOnInit() {
  }

}
