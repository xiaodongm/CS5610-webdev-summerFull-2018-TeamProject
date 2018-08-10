import { Component, OnInit } from '@angular/core';
import {User} from '../models/user.model.client';
import {UserServiceClient} from '../services/user.service.client';
import {Provider} from '../models/provider.model.client';
import {ProviderServiceClient} from '../services/provider.service.client';
import {ActivatedRoute, Route, Router} from '@angular/router';
import {EventCard} from '../models/EventCard.model.client';
import {EventServiceClient} from '../services/event.service.client';
import {EnrollmentServiceClient} from '../services/enrollment.service.client';
import {Equipment} from '../models/equipment.model.client';
import {EquipmentServiceClient} from '../services/equipment.service.client';
import {SiteServiceClient} from '../services/site.service.client';
import {Site} from '../models/site.model.client';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private userService: UserServiceClient,
              private providerService: ProviderServiceClient,
              private equipmentService: EquipmentServiceClient,
              private eventService: EventServiceClient,
              private siteService: SiteServiceClient,
              private enrollmentService: EnrollmentServiceClient,
              private router: Router) { }

  user = new  User();
  provider = new Provider();
  hostedEvents: EventCard[];
  enrolledEvents: EventCard[] = [];
  myEquipments: Equipment[] = [];
  mySites: Site[] = [];
  receiveMessage($event) {
    if (this.user.role !== 'SiteManager' && this.user.role !== 'EquipmentDealer') {
      this.user = $event;
    } else if (this.user.role === 'SiteManager' || this.user.role === 'EquipmentDealer') {
      this.provider = $event;
    }
  }

  goCreateEvent() {
    this.router.navigate(['createEvent']);
  }

  goCreateSite() {
    this.router.navigate(['createSite']);
  }

  goCreateEquipments() {
    this.router.navigate(['createEquipment']);
  }

  deleteHostedEvent(event) {
    this.eventService.deleteEvent(event._id)
      .then(() =>
        this.eventService.findEventsForOrganizer(this.user._id))
      .then(events => this.hostedEvents = events);
  }
  ngOnInit() {
    this.userService
      .profile()
      .then(user => {
        this.user = user;
        return this.eventService.findEventsForOrganizer(user._id);
      }).then(events => {
        this.hostedEvents = events;
        return this.enrollmentService.findEnrollmentsForAttendee(this.user._id);
    })
      .then((enrollments) => {
        for (const enrollment of enrollments) {
          this.enrolledEvents.push(enrollment.event);
        }
        });


    this.providerService
      .profile()
      .then(provider => {
        this.provider = provider;
        return this.equipmentService.findEquipmentsForProvider(this.provider._id);
      })
      .then((equipments) => {
        this.myEquipments = equipments;
        return this.siteService.findSitesForProvider(this.provider._id);
      })
      .then((sites) => this.mySites = sites);

  }

}
