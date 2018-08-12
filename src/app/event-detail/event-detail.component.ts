import {Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild} from '@angular/core';
import {EventCard} from '../models/EventCard.model.client';
import {dates, months} from '../constants/dateConstant';
import {DomSanitizer} from '@angular/platform-browser';
import {User} from '../models/user.model.client';
import {EventEditorComponent} from '../event-editor/event-editor.component';
import {BsModalRef} from 'ngx-bootstrap';
import {BsModalService} from 'ngx-bootstrap';
import {UserServiceClient} from '../services/user.service.client';
import {EventServiceClient} from '../services/event.service.client';
import {Widget} from '../models/widget.model.client';
import {ActivatedRoute} from '@angular/router';
import {EnrollmentServiceClient} from '../services/enrollment.service.client';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {

  constructor(private modalService: BsModalService,
              public sanitizer: DomSanitizer,
              private userService: UserServiceClient,
              private eventService: EventServiceClient,
              private enrollmentService: EnrollmentServiceClient,
              private route: ActivatedRoute) {
    this.route.params.subscribe( params => this.setParams(params));
  }
  // event: EventCard = new EventCard();
  isEnrolled = false;
  isOrganizerLoaded = false;
  eventId: string;
  heading: string;
  paragraph: string;
  imgUrl: string;
  linkUrl: string;
  list = '';
  listType = 'unorderedList';
  message: string;
  organizer = new User();
  organizer1: User = {
    _id: '',
    username: '',
    password: '',
    dateOfBirth: new Date(),
    email: '',
    phoneNumber: '',
    address: '',
    lat: '',
    lng: '',
    firstName: 'Zheming',
    lastName: 'Gao',
    location: 'San Jose Damingbai',
    profilePhoto: 'https://images.unsplash.com/' +
    'photo-1533233336213-b3a32825c689?ixlib=' +
    'rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5c181' +
    '76885796e2a3399a4a6906e8270&auto=format&fi' +
    't=crop&w=800&q=60',
    role: 'organizer'
  };

  attendee1: User = {
    _id: '',
    username: '',
    password: '',
    dateOfBirth: new Date(),
    email: '',
    phoneNumber: '',
    address: '',
    lat: '',
    lng: '',
    firstName: 'Zheming',
    lastName: 'Gao',
    location: 'San Jose Damingbai',
    profilePhoto: 'https://images.unsplash.com/' +
    'photo-1533233336213-b3a32825c689?ixlib=' +
    'rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5c181' +
    '76885796e2a3399a4a6906e8270&auto=format&fi' +
    't=crop&w=800&q=60',
    role: 'organizer',
  };

  attendee2: User = {
    _id: '',
    username: '',
    password: '',
    dateOfBirth: new Date(),
    email: '',
    phoneNumber: '',
    address: '',
    lat: '',
    lng: '',
    firstName: 'Xiaodong',
    lastName: 'Ma',
    location: 'San Francisco',
    profilePhoto: 'https://images.unsplash.com/photo-1' +
    '438761681033-6461ffad8d80?ixlib=rb-0.3.5&ixid=eyJ' +
    'hcHBfaWQiOjEyMDd9&s=5d43ec18ec2cf6ff854513b9e8395c' +
    '1e&auto=format&fit=crop&w=800&q=60',
    role: 'organizer',
  };
  attendee3: User = {
    _id: '',
    username: '',
    password: '',
    dateOfBirth: new Date(),
    email: '',
    phoneNumber: '',
    address: '',
    lat: '',
    lng: '',
    firstName: 'Garret',
    lastName: 'Wu',
    location: 'NEU Seatle',
    profilePhoto: 'https://images.unsplash.com/photo-1495078' +
    '065017-564723e7e3e7?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjE' +
    'yMDd9&s=09093dcdf66dbcd2397b9dc19384a899&auto=format&fit' +
    '=crop&w=800&q=60',
    role: 'organizer',
  };

  event: EventCard = new EventCard();

  inImage = false;
  hasExtraInfo = false;
  months = months;
  dates = dates;
  slideIndex = 0;

  modalRef: BsModalRef;
  config = {
    animated: true,
    keyboard: true,
    class: 'my-modal'
  };
  setParams(params) {
    console.log(params);
    this.eventId = params['eventId'];
    console.log(this.eventId);
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService
      .show(template, Object.assign({}, { class: 'my-modal modal-lg modal-dialog-centered' } ));
  }
  confirm(): void {
    this.message = 'Confirmed!';
    console.log('Confirmed!');
    this.eventService.updateEvent(this.event)
      .then(() => this.refreshEvent())
      .then(() => this.modalRef.hide());
  }
  decline(): void {
    this.message = 'Declined!';
    this.refreshEvent().then(() => this.modalRef.hide());
    console.log('Declined!');

  }
  addImageUrl() {
    console.log(this.imgUrl);
    this.event.photos.push(this.imgUrl);
    this.imgUrl = '';
  }
  deleteImageUrl(imgUrl) {
    if (this.event.photos.includes(imgUrl)) {
      const index = this.event.photos.indexOf(imgUrl);
      this.event.photos.splice(index, 1);
    }
  }
  addHeading() {
    this.event.description.push(new Widget('heading', this.heading));
    this.paragraph = '';
  }
  addParagraph() {
    this.event.description.push(new Widget('paragraph', this.paragraph));
    this.paragraph = '';
  }
  addLink() {
    this.event.description.push(new Widget('link', this.linkUrl));
  }
  setListType() {
    if (this.listType === 'orderedList') {
      this.listType = 'unorderedList';
    } else {
      this.listType = 'orderedList';
    }
  }
  addList() {
    this.event.description.push(new Widget(this.listType, this.list));
  }
  splitList(data) {
    return data.split(/\r?\n/);
  }
  toggleTag(tag) {
    if (this.event.tags.includes(tag)) {
      const index = this.event.tags.indexOf(tag);
      this.event.tags.splice(index, 1);
    } else {
      this.event.tags.push(tag);
    }
  }
  updateWidget(event) {
    const oldWidget = event[0];
    const newWidget = event[1];
    const index = this.event.description.indexOf(oldWidget);
    this.event.description[index] = newWidget;
  }
  deleteWidget(widget) {
    console.log(widget);
    const index = this.event.description.indexOf(widget);
    this.event.description.splice(index, 1);
    console.log(this.event.description);
  }

  mouseEnter() {
    this.inImage = true;
    console.log('enter');
  }
  mouseLeave() {
    this.inImage = false;
    console.log('leave');
  }
  getIframeSource() {
    const res = this.event.video + '?rel=0&autoplay=1&modestbranding=1';
    return this.sanitizer.bypassSecurityTrustResourceUrl(res);
  }
  hasVideo() {
    return this.event.video !== '';
  }
  // setEvent(event) {
  //   this.event.title = event.title;
  //   this.event.descriptions = event.description;
  //   this.event.start = event.startTime;
  //   this.event.end = event.endTime;
  //   this.event.tags = event.tags;
  //   this.event._id = event.id;
  //   console.log(event);
  //   return this.userService.findUserById(event.organizer);
  // }
  confirmUpdateMeta() {
    console.log(this.event);
    this.eventService.updateEvent(this.event)
      .then(() => this.refreshEvent())
      .then(() => this.modalRef.hide());
  }

  refreshEvent() {
    return this.eventService.findEventById(this.eventId)
      .then(event => {
        console.log(event);
        // event.startTime = this.refactorDate(event.startTime);
        // event.endTime = this.refactorDate(event.endTime);
        return this.event = event; } );
  }

  enrollEvent() {
    let enrollment;
    this.userService.profile()
      .then(user => {
        enrollment = {
          event: this.event._id,
          attendee: user._id
        };
        if (user.role === 'EquipmentDealer' || user.role === 'SiteManager') {
          alert('must login as personal user to enroll');
          return;
        } else {
          console.log(user);
          return this.enrollmentService.enrollAttendeeInEvent(enrollment)
            .then((enroll) => {
              console.log(enroll);
              return this.refreshEvent();
            })
            .then(() => this.isEnrolled = true);
        }
      });
  }

  unenrollEvent() {
    let enrollment;
    this.userService.profile()
      .then(user => {
        enrollment = {
          event: this.event._id,
          attendee: user._id
        };
        console.log(user);
        return this.enrollmentService.unenrollAttendeeInEvent(enrollment); })
      .then((enroll) => {
        console.log(enroll);
        return this.refreshEvent();
      })
      .then(() => this.isEnrolled = false);
  }

  checkEnrollment() {
    return this.userService.profile()
      .then(user => {
        for (let i = 0; i < this.event.attendee.length; i++) {
          if (this.event.attendee[i] === user._id) {
            this.isEnrolled = true;
            return true;
          }

        }
        this.isEnrolled = false;
        return false;
      });
  }

  ngOnInit() {

    this.eventService.findEventById(this.eventId)
      .then(event => {
        this.event = event;
        // this.event.startTime = this.refactorDate(this.event.startTime);
        // this.event.endTime = this.refactorDate(this.event.endTime);
        console.log(event);
        return this.userService.findUserById(event.organizer);
      }).then(user => {
      // console.log(this.event.organizer);
      this.organizer = user;
      if (!this.organizer.profilePhoto) {
        this.organizer.profilePhoto = '';
      }

      if (this.event.video && this.event.video !== '') {
        this.hasExtraInfo = true;
      }
      this.isOrganizerLoaded = true;
    }).then(() => this.checkEnrollment());

  }

}
