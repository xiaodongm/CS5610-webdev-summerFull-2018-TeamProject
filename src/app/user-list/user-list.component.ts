import { Component, OnInit } from '@angular/core';
import {UserServiceClient} from '../services/user.service.client';
import {ProviderServiceClient} from '../services/provider.service.client';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor(private userService: UserServiceClient,
              private providerService: ProviderServiceClient) { }

  attendees = [];
  organizers = [];
  siteManagers = [];
  equipmentDealers = [];

  userType;

  userTypeModel = {
    attendee: 'attendee',
    organizer: 'organizer',
    siteManager: 'siteManager',
    EquipmentDealer: 'equipmentDealer'
  };

  openAttendeeTab() {
    this.userType = this.userTypeModel.attendee;
  }

  openOrganizerTab() {
    this.userType = this.userTypeModel.organizer;
  }

  openSiteManagerTab() {
    this.userType = this.userTypeModel.siteManager;
  }

  openEquipmentDealerTab() {
    this.userType = this.userTypeModel.EquipmentDealer;
  }

  findAllAttendees() {
    this.userService.findAllUsers()
      .then(users => {
        for (let i = 0; i < users.length; i++) {
          if (users[i].role === 'attendee') {
            this.attendees.push(users[i]);
          }
        }
      });
  }

  findAllOrganizers() {
    this.userService.findAllUsers()
      .then(users => {
        for (let i = 0; i < users.length; i++) {
          if (users[i].role === 'organizer') {
            this.organizers.push(users[i]);
          }
        }
      });
  }

  findAllSiteManagers() {
    this.providerService.findAllProviders()
      .then(users => {
        for (let i = 0; i < users.length; i++) {
          if (users[i].role === 'SiteManager') {
            this.siteManagers.push(users[i]);
          }
        }
      });
  }

  findAllEquipmentDeals() {
    this.providerService.findAllProviders()
      .then(users => {
        for (let i = 0; i < users.length; i++) {
          if (users[i].role === 'EquipmentDealer') {
            this.equipmentDealers.push(users[i]);
          }
        }
      });
  }

  ngOnInit() {
    this.findAllAttendees();
    this.findAllOrganizers();
    this.findAllSiteManagers();
    this.findAllEquipmentDeals();
  }

}
