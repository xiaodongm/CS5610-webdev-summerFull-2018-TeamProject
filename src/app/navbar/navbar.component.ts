import { Component, OnInit } from '@angular/core';
import {UserServiceClient} from '../services/user.service.client';
import {ProviderServiceClient} from '../services/provider.service.client';
import {Router} from '@angular/router';
import {LoginToNavbarServiceClient} from '../communication-services/login-to-navbar.service.client';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private userService: UserServiceClient,
              private providerService: ProviderServiceClient,
              private router: Router,
              private data: LoginToNavbarServiceClient) { }

  collapsed = true;
  message;

  toggleCollapsed(): void {
    this.collapsed = !this.collapsed;
  }

  logout() {
    this.userService
      .logout()
      .then(() => {
        this.message = 'logout';
        this.router.navigate(['home']);
      });
  }

  ngOnInit() {
    this.data.currentMessage
      .subscribe(message => {
        this.message = message;
      });
    this.userService.profile()
      .then((user) => {
        if (user._id) {
          this.message = 'login';
        }
      });
  }

}
