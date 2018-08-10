import { Component, OnInit } from '@angular/core';
import {UserServiceClient} from '../services/user.service.client';
import {ProviderServiceClient} from '../services/provider.service.client';
import {Router} from '@angular/router';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private userService: UserServiceClient,
              private providerService: ProviderServiceClient,
              private router: Router) { }

  // menuItems = ['User', 'Organizer', 'Attendee', 'Provider', 'SiteManager', 'EquipmentDealer', 'Event', 'CampSite'];


  personalUsers = [];
  providers = [];

  listType;

  listTypeModel = {
    userList : 'userList',
    eventList : 'eventList'
  };

  findAllUsers() {
    this.userService.findAllUsers()
      .then(users => {
        this.personalUsers = users;
      });
  }

  findAllProviders() {
    this.providerService.findAllProviders()
      .then(providers => {
        this.providers = providers;
      });
  }

  openUserList() {
    this.listType = this.listTypeModel.userList;
  }

  receiveMessage($event) {
    this.findAllUsers();
    this.findAllProviders();
  }


  ngOnInit() {
    this.userService.profile()
      .then((user) => {
        if (user.err || !(user.username === 'admin' && user.password === 'admin')) {
          alert('Non-Admin Users Do Not Have Access to This Page, Redirecting to Homepage.');
          this.router.navigate(['home']);
        }
      } );
    this.findAllUsers();
    this.findAllProviders();
  }

}
