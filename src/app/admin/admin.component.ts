import { Component, OnInit } from '@angular/core';
import {UserServiceClient} from '../services/user.service.client';
import {ProviderServiceClient} from '../services/provider.service.client';
import {Router} from '@angular/router';
import {EventServiceClient} from '../services/event.service.client';
import {EquipmentServiceClient} from '../services/equipment.service.client';
import {DiscussionServiceClient} from '../services/discussion.service.client';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private userService: UserServiceClient,
              private providerService: ProviderServiceClient,
              private eventService: EventServiceClient,
              private equipmentService: EquipmentServiceClient,
              private discussionService: DiscussionServiceClient,
              private router: Router) { }

  // menuItems = ['User', 'Organizer', 'Attendee', 'Provider', 'SiteManager', 'EquipmentDealer', 'Event', 'CampSite'];


  personalUsers = [];
  providers = [];
  events = [];
  equipments = [];
  discussions = [];

  listType;

  listTypeModel = {
    userList : 'userList',
    eventList : 'eventList',
    equipmentList: 'equipmentList',
    discussionList: 'discussionList'
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

  findAllEvents() {
    this.eventService.findAllEvents()
      .then(events => {
        this.events = events;
      });
  }

  findAllEquipments() {
   this.equipmentService.findAllEquipments()
     .then(equipments => {
       this.equipments = equipments;
     }) ;
  }

  findAllDiscussions() {
    this.discussionService.findAllDiscussions()
      .then(discussions => this.discussions = discussions);
  }

  openUserList() {
    this.listType = this.listTypeModel.userList;
  }

  openEventList() {
    this.listType = this.listTypeModel.eventList;
  }

  openEquipmentList() {
    this.listType = this.listTypeModel.equipmentList;
  }

  openDiscussionList() {
    this.listType = this.listTypeModel.discussionList;
  }

  receiveMessage($event) {
    this.findAllUsers();
    this.findAllProviders();
    this.findAllEvents();
    this.findAllEquipments();
    this.findAllDiscussions();
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
    this.findAllEvents();
    this.findAllEquipments();
    this.findAllDiscussions();
  }

}
