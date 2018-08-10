
import { Component, OnInit } from '@angular/core';
import {User} from '../models/user.model.client';
import {UserServiceClient} from '../services/user.service.client';
import {Provider} from '../models/provider.model.client';
import {ProviderServiceClient} from '../services/provider.service.client';
import {ActivatedRoute, Route, Router} from '@angular/router';
import {EventCard} from '../models/EventCard.model.client';
import {EventServiceClient} from '../services/event.service.client';

@Component({
  selector: 'app-profile-for-visitor',
  templateUrl: './profile-for-visitor.component.html',
  styleUrls: ['./profile-for-visitor.component.css']
})
export class ProfileForVisitorComponent implements OnInit {

  constructor(private userService: UserServiceClient,
              private providerService: ProviderServiceClient,
              private eventService: EventServiceClient,
              private route: ActivatedRoute,
              private router: Router) {
    this.route.params.subscribe(
      params => this.setParams(params));
  }

  user = new  User();
  userId;
  curUser;
  provider = new Provider();
  hostedEvents: EventCard[];
  curPage = 'oa';
  isFollowed = false;
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

  deleteHostedEvent(event) {
    this.eventService.deleteEvent(event._id)
      .then(() =>
        this.eventService.findEventsForOrganizer(this.user._id))
      .then(events => this.hostedEvents = events);
  }
  ngOnInit() {
    this.userService
      .findUserById(this.userId)
      .then(user => {
        this.user = user;
        return this.eventService.findEventsForOrganizer(user._id);
      }).then(events => this.hostedEvents = events);

    this.providerService
      .profile()
      .then(provider => this.provider = provider);

    this.checkFollowed();
  }

  followUser() {
    console.log(this.user._id);
    this.userService
      .followFriend(this.user._id)
      .then(res => {
        if (res.error) {
          alert(res.error);
        }
      });
  }

  unfollowUser() {
    this.userService
      .un_followFriend(this.user._id)
      .then(res => {
        if (res.error) {
          alert(res.error);
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
