import {Component, OnInit} from '@angular/core';
import {User} from '../models/user.model.client';
import {UserServiceClient} from '../services/user.service.client';
import {Provider} from '../models/provider.model.client';
import {ProviderServiceClient} from '../services/provider.service.client';
import {ActivatedRoute, Route, Router} from '@angular/router';
import {EventCard} from '../models/EventCard.model.client';
import {EventServiceClient} from '../services/event.service.client';
import {DiscussionServiceClient} from '../services/discussion.service.client';
import {EnrollmentServiceClient} from '../services/enrollment.service.client';
import {Equipment} from '../models/equipment.model.client';
import {EquipmentServiceClient} from '../services/equipment.service.client';
import {SiteServiceClient} from '../services/site.service.client';
import {Site} from '../models/site.model.client';
import {ReservationServiceClient} from '../services/reservation.service.client';
import {EquipmentRentingServiceClient} from '../services/equipmentRenting.service.client';


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
              private equipmentService: EquipmentServiceClient,
              private siteService: SiteServiceClient,
              private reservationService: ReservationServiceClient,
              private equipmentRentingService: EquipmentRentingServiceClient,
              private router: Router) {
  }

  defaultPhotoUrl = 'https://images.unsplash.com/photo-' +
    '1495078065017-564723e7e3e7?ixlib=rb-0.3.5&ixid=eyJhcHBfa' +
    'WQiOjEyMDd9&s=09093dcdf66dbcd2397b9dc19384a899&auto=forma' +
    't&fit=crop&w=800&q=60';
  user = new User();
  provider = new Provider();
  curPage = 'pi';
  organizedEvents = [];
  attendedEvents = [];
  isSame = true;
  discussions;
  enrolledEvents: EventCard[] = [];
  myEquipments: Equipment[] = [];
  mySites: Site[] = [];
  friends = [];
  myRentings;

  receiveMessage($event) {
    if (this.user.role !== 'SiteManager' && this.user.role !== 'EquipmentDealer') {
      this.user = $event;
    } else if (this.user.role === 'SiteManager' || this.user.role === 'EquipmentDealer') {
      this.provider = $event;
      this.user = $event;
    }
  }

  setCurPage(curPage) {
    this.curPage = curPage;
  }

  goEventList() {
    this.router.navigate(['eventList']);
  }


  goCreateSite() {
    this.router.navigate(['createSite']);
  }

  goCreateEquipments() {
    this.router.navigate(['createEquipment']);
  }

  receiveFriendList(friends) {
    this.friends = friends;
  }

  receiveNewDiscussion(discussions) {
    this.discussions = discussions;
  }

  receiveNewSites(sites) {
    this.mySites = sites;
    this.reservationService
      .findReservationsForProvider(this.provider._id)
      .then(reservations => {
        this.myRentings = reservations;
      });
  }

  receiveNewEquips(equips) {
    this.myEquipments = equips;
    this.equipmentRentingService
      .findRentingsForProvider(this.provider._id)
      .then(rentings => this.myRentings = rentings);
  }

  refactorTime(time) {
    const index = time.indexOf('T');
    return time.substring(0, index);
  }

  receiveOrEvents(events) {
    events.forEach((event) => {
      event.startTime = this.refactorTime(event.startTime);
      event.endTime = this.refactorTime(event.endTime);
    });
    this.organizedEvents = events;
  }

  receiveAtEvents(events) {
    events.forEach((event) => {
      event.startTime = this.refactorTime(event.startTime);
      event.endTime = this.refactorTime(event.endTime);
    });
    this.attendedEvents = events;
  }

  receiveNewRentings(events) {
    this.myRentings = events;
  }

  fillFollowingInfo(following) {
    following.forEach(f => {
      this.userService
        .findUserById(f)
        .then(user => this.friends.push(user));
    });
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
        this.userService
          .findAllFollowingFriendsForUser(user._id)
          .then(friends => this.fillFollowingInfo(friends));
        this.eventService.findEventsForOrganizer(user._id)
          .then(events => {
            events.forEach((event) => {
              event.startTime = this.refactorTime(event.startTime);
              event.endTime = this.refactorTime(event.endTime);
            });
            return this.organizedEvents = events;
          });
        this.enrollmentService.findEnrollmentsForAttendee(user._id)
          .then(events => {
            events.forEach((event) => {
              event.startTime = this.refactorTime(event.startTime);
              event.endTime = this.refactorTime(event.endTime);
            });
            return this.attendedEvents = events;
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
          this.equipmentService
            .findEquipmentsForProvider(this.provider._id)
            .then(equipments => this.myEquipments = equipments);

          this.siteService
            .findSitesForProviderWithInfo(this.provider._id)
            .then((sites) => this.mySites = sites);

          if (provider.role === 'SiteManager') {
            this.reservationService
              .findReservationsForProvider(provider._id)
              .then(reservations => {
                this.myRentings = reservations;
              });
          } else {
              this.equipmentRentingService
              .findRentingsForProvider(provider._id)
              .then(rentings => this.myRentings = rentings);
          }
        }
      );
  }

  goCreateEvent() {
    this.router.navigate(['createEvent']);
  }

  switchAttendeeToOrganizer(user) {
    console.log(this.user);
    this.userService.profile()
      .then((u) => {
        console.log(u);
        return this.userService.findUserById(u._id);
      })
      .then((us) => {
        us.role = 'organizer';
        console.log(us);
        return this.userService.update(us);
      })
      .then(res => {
        console.log(res);
        if (res.error) {
          alert(res.error);
        } else {
          this.user = res;
        }
      });
  }

  switchOrganizerToAttendee() {
    console.log(this.user);
    this.userService.profile()
      .then((u) => {
        console.log(u);
        return this.userService.findUserById(u._id);
      })
      .then((us) => {
        us.role = 'attendee';
        console.log(us);
        return this.userService.update(us);
      })
      .then(res => {
        console.log(res);
        if (res.error) {
          alert(res.error);
        } else {
          this.user = res;
        }
      });
  }
}
