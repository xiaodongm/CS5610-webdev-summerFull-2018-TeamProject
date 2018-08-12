
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
import {Equipment} from '../models/equipment.model.client';
import {Site} from '../models/site.model.client';
import {SiteServiceClient} from '../services/site.service.client';
import {EquipmentServiceClient} from '../services/equipment.service.client';

@Component({
  selector: 'app-profile-for-visitor',
  templateUrl: './profile-for-visitor.component.html',
  styleUrls: ['./profile-for-visitor.component.css']
})
export class ProfileForVisitorComponent implements OnInit {

  constructor(private userService: UserServiceClient,
              private providerService: ProviderServiceClient,
              private eventService: EventServiceClient,
              private discussionService: DiscussionServiceClient,
              private enrollmentService: EnrollmentServiceClient,
              private equipmentService: EquipmentServiceClient,
              private siteService: SiteServiceClient,
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
  discussions;
  myEquipments: Equipment[] = [];
  mySites: Site[] = [];
  friends = [];

  setParams(params) {
    this.userId = params['userId'];
  }

  setCurPage (curPage) {
    this.curPage = curPage;
  }

  fillFollowingInfo(following) {
    following.forEach( f => {
      this.userService
        .findUserById(f)
        .then(user => this.friends.push(user));
    });
  }

  ngOnInit() {
    this.userService
      .findUserById(this.userId)
      .then(user => {
        if (user) {
          console.log(user);
          this.user = user;
          if (!this.user.profilePhoto) {
            this.user.profilePhoto = 'https://images.unsplash.com/photo-' +
              '1495078065017-564723e7e3e7?ixlib=rb-0.3.5&ixid=eyJhcHBfa' +
              'WQiOjEyMDd9&s=09093dcdf66dbcd2397b9dc19384a899&auto=forma' +
              't&fit=crop&w=800&q=60';
          }
          this.userService
            .findAllFollowingFriendsForUser(user._id)
            .then(friends => this.fillFollowingInfo(friends));
          this.eventService.findEventsForOrganizer(user._id)
            .then(events => this.organizedEvents = events);
          this.enrollmentService.findEnrollmentsForAttendee(user._id)
            .then(events => this.attendedEvents = events);
          this.discussionService.findDiscussionForUser(user._id)
            .then(discussions => this.discussions = discussions);

          this.checkFollowed();
        }
      });

    this.providerService
      .findProviderById(this.userId)
      .then(provider => {
        if (provider) {
          console.log(provider);
          this.provider = provider;
          this.user = provider;
          if (!this.user.profilePhoto) {
            this.user.profilePhoto = 'https://images.unsplash.com/photo-' +
              '1495078065017-564723e7e3e7?ixlib=rb-0.3.5&ixid=eyJhcHBfa' +
              'WQiOjEyMDd9&s=09093dcdf66dbcd2397b9dc19384a899&auto=forma' +
              't&fit=crop&w=800&q=60';
          }
          this.equipmentService
            .findEquipmentsForProvider(this.provider._id)
            .then(equipments => this.myEquipments = equipments);

          this.siteService
            .findSitesForProviderWithInfo(this.provider._id)
            .then((sites) => this.mySites = sites);

          this.curPage = 'sl';
        }
      });
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
