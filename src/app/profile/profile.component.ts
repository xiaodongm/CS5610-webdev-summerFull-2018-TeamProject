import { Component, OnInit } from '@angular/core';
import {User} from '../models/user.model.client';
import {UserServiceClient} from '../services/user.service.client';
import {Provider} from '../models/provider.model.client';
import {ProviderServiceClient} from '../services/provider.service.client';
import {ActivatedRoute, Route, Router} from '@angular/router';
import {EventCard} from '../models/EventCard.model.client';
import {EventServiceClient} from '../services/event.service.client';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private userService: UserServiceClient,
              private providerService: ProviderServiceClient,
              private eventService: EventServiceClient,
              private router: Router) { }

  user = new  User();
  provider = new Provider();
  hostedEvents: EventCard[];
  curPage = 'pi';
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

  setCurPage (curPage) {
    this.curPage = curPage;
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
      }).then(events => this.hostedEvents = events);

    this.providerService
      .profile()
      .then(provider => this.provider = provider);
  }

}
