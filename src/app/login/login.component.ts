import { Component, OnInit } from '@angular/core';
import {AlertComponent, BsModalService} from 'ngx-bootstrap';
import {UserServiceClient} from '../services/user.service.client';
import {Router} from '@angular/router';
import {MapServiceClient} from '../services/map.service.client';
import {ProviderServiceClient} from '../services/provider.service.client';
import {LoginToNavbarServiceClient} from '../communication-services/login-to-navbar.service.client';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private modalService: BsModalService,
              private userService: UserServiceClient,
              private mapService: MapServiceClient,
              private providerService: ProviderServiceClient,
              private router: Router,
              private data: LoginToNavbarServiceClient) { }

  registerWindow;
  loginWindow;
  username;
  password;
  password2;
  location;
  loginType = 'Personal';
  message;

  alerts = [];

  loginUser(username, password) {
    console.log([username, password]);
    if (username && password) {
      if (this.loginType === 'Personal') {
        this.userService
          .login(username, password)
          .then(response => {
            return response.json();
          })
          .then((user) => {
            if (!user.error) {
              this.newMessage();
              this.closeLogin();
              this.router.navigate(['profile']);
            } else {
              // alert('User not exist or Password incorrect');
              this.alerts.push({
                type: 'danger',
                msg: `User not exist or password incorrect.`,
                timeout: 5000
              });
            }
          });
      } else if (this.loginType === 'Organization') {
        this.providerService
          .login(username, password)
          .then(response => {
            return response.json();
          })
          .then((user) => {
            if (!user.error) {
              this.newMessage();
              this.closeLogin();
              this.router.navigate(['profile']);
            } else {
              this.alerts.push({
                type: 'danger',
                msg: `User not exist or password incorrect.`,
                timeout: 5000
              });
            }
          });
      }
    } else {
      // alert('Please enter valid Username and Password!');
      this.alerts.push({
        type: 'danger',
        msg: `Please enter valid Username and Password.`,
        timeout: 5000
      });
    }
  }

  findLatLng() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        // this.showPosition(position);
        console.log(position);
        this.mapService.reverseGeocoding(position.coords.latitude, position.coords.longitude)
          .then(response => {
            console.log(response);
            this.location = response.address.city + ', ' + response.address.state;
          });
      });
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  }

  onClosed(dismissedAlert: AlertComponent): void {
    this.alerts = this.alerts.filter(alert => alert !== dismissedAlert);
  }

  registerUser(username, password, password2, location) {
    if (username && password) {
      if (password !== password2) {
        // alert('Passwords not match.');
        this.alerts.push({
          type: 'danger',
          msg: `Passwords not match, please enter again.`,
          timeout: 5000
        });
      } else {
        this.userService
          .createUser(username, password, location)
          .then(response => {
            return response.json();
          })
          .then((user) => {
            if (!user.err) {
              this.newMessage();
              this.closeRegister();
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

  openRegister(template) {
    this.registerWindow = this.modalService.show(template);
    this.findLatLng();
    if (this.loginWindow) {
      this.closeLogin();
    }
  }
  openLogin(template) {
    this.loginWindow = this.modalService.show(template);
    if (this.registerWindow) {
      this.closeRegister();
    }
  }

  closeRegister() {
    this.registerWindow.hide();
    this.registerWindow = null;
  }

  closeLogin() {
    this.loginWindow.hide();
    this.loginWindow = null;
  }

  newMessage() {
    this.data.changeMessage('login');
  }

  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.message = message);
  }

}
