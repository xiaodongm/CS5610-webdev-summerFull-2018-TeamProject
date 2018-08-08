import { Component, OnInit } from '@angular/core';
import {UserServiceClient} from '../services/user.service.client';
import {ProviderServiceClient} from '../services/provider.service.client';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private userService: UserServiceClient,
              private providerService: ProviderServiceClient) { }

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

  ngOnInit() {
    this.findAllUsers();
    this.findAllProviders();
  }

}
