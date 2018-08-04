import { Component, OnInit } from '@angular/core';
import {AlertComponent, BsModalService} from 'ngx-bootstrap';
import {UserServiceClient} from '../services/user.service.client';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private modalService: BsModalService,
              private userService: UserServiceClient,
              private router: Router) { }

  registerWindow;
  loginWindow;
  username;
  password;
  password2;

  alerts = [];

  onClosed(dismissedAlert: AlertComponent): void {
    this.alerts = this.alerts.filter(alert => alert !== dismissedAlert);
  }

  registerUser(username, password, password2) {
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
          .createUser(username, password)
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

  openRegister(template) {
    this.registerWindow = this.modalService.show(template);
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

  ngOnInit() {
  }

}
