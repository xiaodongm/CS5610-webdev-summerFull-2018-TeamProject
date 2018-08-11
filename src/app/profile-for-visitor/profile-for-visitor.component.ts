
import { Component, OnInit } from '@angular/core';
import {User} from '../models/user.model.client';
import {UserServiceClient} from '../services/user.service.client';
import {Provider} from '../models/provider.model.client';
import {ProviderServiceClient} from '../services/provider.service.client';
import {ActivatedRoute, Route, Router} from '@angular/router';
import {EventCard} from '../models/EventCard.model.client';
import {EventServiceClient} from '../services/event.service.client';
import {EnrollmentServiceClient} from '../services/enrollment.service.client';

@Component({
  selector: 'app-profile-for-visitor',
  templateUrl: './profile-for-visitor.component.html',
  styleUrls: ['./profile-for-visitor.component.css']
})
export class ProfileForVisitorComponent implements OnInit {

  constructor(private userService: UserServiceClient,
              private providerService: ProviderServiceClient,
              private eventService: EventServiceClient,
              private enrollmentService: EnrollmentServiceClient,
              private route: ActivatedRoute,
              private router: Router) {
    this.route.params.subscribe(
      params => this.setParams(params));
  }

  user = new User();
  userId;
  curUser;
  provider = new Provider();
  curPage = 'oa';
  isFollowed = false;
  organizedEvents = [];
  attendedEvents = [];
  isSame = false;

  receiveMessage($event) {
    if (this.user.role !== 'SiteManager' && this.user.role !== 'EquipmentDealer') {
      this.user = $event;
    } else if (this.user.role === 'SiteManager' || this.user.role === 'EquipmentDealer') {
      this.provider = $event;
    }
  }

  setParams(params) {
    this.userId = params['userId'];
  }

  setCurPage (curPage) {
    this.curPage = curPage;
  }


  ngOnInit() {
    this.userService
      .findUserById(this.userId)
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
          .then(events => this.attendedEvents = events);
      });

    this.providerService
      .profile()
      .then(provider => this.provider = provider);

    this.checkFollowed();
  }

  followUser() {
    if (this.userId === this.curUser._id) {
      alert('Sorry, can not follow yourself');
      return;
    }
    this.userService
      .followFriend(this.user._id)
      .then(res => {
        if (res.error) {
          alert(res.error);
        } else {
          this.isFollowed = true;
        }
      });
  }

  unfollowUser() {
    this.userService
      .un_followFriend(this.user._id)
      .then(res => {
        if (res.error) {
          alert(res.error);
        } else {
          this.isFollowed = false;
        }
      });
  }

  checkFollowed() {
    this.userService
      .profile()
      .then(user => {
        this.curUser = user;
        this.userService.findAllFollowingFriendsForUser(user._id)
          .then(following => {
            if (following.indexOf(this.userId) !== -1) {
              this.isFollowed = true;
            } else {
              this.isFollowed = false;
            }
          });
      });
  }
}
