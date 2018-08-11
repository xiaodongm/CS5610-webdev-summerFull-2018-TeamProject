import { Component, OnInit } from '@angular/core';
import {User} from '../models/user.model.client';
import {UserServiceClient} from '../services/user.service.client';
import {Provider} from '../models/provider.model.client';
import {ProviderServiceClient} from '../services/provider.service.client';
import {ActivatedRoute, Route, Router} from '@angular/router';
import {EventCard} from '../models/EventCard.model.client';
import {EventServiceClient} from '../services/event.service.client';
import {EnrollmentServiceClient} from '../services/enrollment.service.client';
import {DiscussionServiceClient} from '../services/discussion.service.client';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private userService: UserServiceClient,
              private providerService: ProviderServiceClient,
              private enrollmentService: EnrollmentServiceClient,
              private eventService: EventServiceClient,
              private discussionService: DiscussionServiceClient,
              private router: Router) { }

  user = new User();
  provider = new Provider();
  hostedEvents: EventCard[];
  curPage = 'pi';
  organizedEvents = [];
  attendedEvents = [];
  isSame = true;
  discussions;
  sites = [];
  receiveMessage($event) {
    if (this.user.role !== 'SiteManager' && this.user.role !== 'EquipmentDealer') {
      this.user = $event;
    } else if (this.user.role === 'SiteManager' || this.user.role === 'EquipmentDealer') {
      this.provider = $event;
    }
  }

  setCurPage (curPage) {
    this.curPage = curPage;
  }


  ngOnInit() {
    this.userService
      .profile()
      .then(user => {
        this.user = user;
        if (!this.user.profilePhoto) {
          this.user.profilePhoto = 'https://images.unsplash.com/photo-' +
            '1495078065017-564723e7e3e7?ixlib=rb-0.3.5&ixid=eyJhcHBfa' +
            'WQiOjEyMDd9&s=09093dcdf66dbcd2397b9dc19384a899&auto=forma' +
            't&fit=crop&w=800&q=60';
        }
        this.eventService.findEventsForOrganizer(user._id)
          .then(events => this.organizedEvents = events);
        this.enrollmentService.findEnrollmentsForAttendee(user._id)
          .then(events => {
            this.attendedEvents = events;
          });
        this.discussionService.findDiscussionForUser(user._id)
          .then(discussions => {
            this.discussions = discussions;
          });

      });

    this.providerService
      .profile()
      .then(provider => {
        this.provider = provider;

      });
  }

  goCreateEvent() {
    this.router.navigate(['createEvent']);
  }

  switchAttendeeToOrganizer(user) {
    let temp = this.user;
    temp.role = 'organizer';
    this.userService
      .update(temp)
      .then(res => {
        if (res.error) {
          alert(res.error);
        } else {
          this.user = res;
        }
      });
  }

  switchOrganizerToAttendee() {
    let temp = this.user;
    temp.role = 'attendee';
    this.userService
      .update(temp)
      .then(res => {
        if (res.error) {
          alert(res.error);
        } else {
          this.user = res;
        }
      });
  }
}
