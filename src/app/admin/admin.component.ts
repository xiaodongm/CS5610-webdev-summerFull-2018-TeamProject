import { Component, OnInit } from '@angular/core';
import {UserServiceClient} from '../services/user.service.client';
import {ProviderServiceClient} from '../services/provider.service.client';
import {Router} from '@angular/router';
import {EventServiceClient} from '../services/event.service.client';
import {EquipmentServiceClient} from '../services/equipment.service.client';
import {DiscussionServiceClient} from '../services/discussion.service.client';
import {SiteServiceClient} from '../services/site.service.client';
import {EnrollmentServiceClient} from '../services/enrollment.service.client';
import {ReservationServiceClient} from '../services/reservation.service.client';


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
              private siteService: SiteServiceClient,
              private enrollmentService: EnrollmentServiceClient,
              private reservationService: ReservationServiceClient,
              private router: Router) { }

  // menuItems = ['User', 'Organizer', 'Attendee', 'Provider', 'SiteManager', 'EquipmentDealer', 'Event', 'CampSite'];


  personalUsers = [];
  providers = [];
  events = [];
  equipments = [];
  discussions = [];
  sites = [];
  enrollments = [];
  reservations = [];
  rentals = [];

  listType;

  listTypeModel = {
    userList : 'userList',
    eventList : 'eventList',
    equipmentList: 'equipmentList',
    discussionList: 'discussionList',
    siteList: 'siteList',
    enrollmentList: 'enrollmentList',
    reservationList: 'reservationList',
    rentalList: 'rentalList'
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

  findAllSites() {
    this.siteService.findAllSites()
      .then(sites => {this.sites = sites;
      });
  }

  findAllEnrollments() {
    this.enrollmentService.findAllEnrollments()
      .then(enrollments => this.enrollments = enrollments);
  }

  findAllReservations() {
    this.reservationService.findAllReservations()
      .then(reservations => this.reservations = reservations);
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

  openSiteList() {
    this.listType = this.listTypeModel.siteList;
  }

  openEnrollmentList() {
    this.listType = this.listTypeModel.enrollmentList;
  }

  openReservationList() {
    this.listType = this.listTypeModel.reservationList;
  }

  openRentalList() {
    this.listType = this.listTypeModel.rentalList;
  }

  receiveMessage($event) {
    this.findAllUsers();
    this.findAllProviders();
    this.findAllEvents();
    this.findAllEquipments();
    this.findAllDiscussions();
    this.findAllSites();
    this.findAllEnrollments();
    this.findAllReservations();
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
    this.findAllSites();
    this.findAllEnrollments();
    this.findAllReservations();
  }

}
