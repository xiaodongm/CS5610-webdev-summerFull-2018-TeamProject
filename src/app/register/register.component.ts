import { Component, OnInit } from '@angular/core';
import {BsModalService} from 'ngx-bootstrap';
import {UserServiceClient} from '../services/user.service.client';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private modalService: BsModalService,
              private userService: UserServiceClient,
              private router: Router) { }

  registerWindow;
  loginWindow;
  username;
  password;
  password2;

  registerUser(username, password, password2) {
    if (username && password) {
      if (password !== password2) {
        alert('Passwords not match.');
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
              alert('Username already exist, please choose another one.');
            }
          });
      }
    } else {
      alert('Please enter valid Username and Password.');
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
