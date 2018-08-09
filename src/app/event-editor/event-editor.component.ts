import { Component, OnInit, TemplateRef, Input } from '@angular/core';
import { BsModalRef} from 'ngx-bootstrap';
import {BsModalService} from 'ngx-bootstrap';
import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser';
import {Widget} from '../models/widget.model.client';
import {ViewEncapsulation} from '@angular/core';
import {EventCard} from '../models/EventCard.model.client';
import {SortablejsModule} from 'angular-sortablejs';
import {User} from '../models/user.model.client';
import {dates, months} from '../constants/dateConstant';
import {ActivatedRoute} from '@angular/router';
import {EventServiceClient} from '../services/event.service.client';
import {UserServiceClient} from '../services/user.service.client';

@Pipe({ name: 'safe' })
export class SafePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}
  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}

@Component({
  selector: 'app-event-editor',
  templateUrl: './event-editor.component.html',
  styleUrls: ['./event-editor.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class EventEditorComponent implements OnInit {

  constructor(private modalService: BsModalService,
              public sanitizer: DomSanitizer,
              private userService: UserServiceClient,
              private eventService: EventServiceClient,
              private route: ActivatedRoute) {
    this.route.params.subscribe( params => this.setParams(params));
  }
  // event: EventCard = new EventCard();
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
        // event.startTime = this.refactorDate(event.startTime);
        // event.endTime = this.refactorDate(event.endTime);
        return this.event = event; } );
  }

  // refactorDate(d) {
  //   const date = new Date(d);
  //   const year = date.getFullYear();
  //   let month = date.getMonth() + 1;
  //   let dt = date.getDate();
  //
  //   if (dt < 10) {
  //     dt = '0' + dt;
  //   }
  //   if (month < 10) {
  //     month = '0' + month;
  //   }
  //
  //   return new Date(year + '-' + month + '-' + dt);
  // }

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
        console.log(user);
        this.organizer = user;
        if (!this.organizer.profilePhoto) {
          this.organizer.profilePhoto = '';
        }

        if (this.event.video && this.event.video !== '') {
          this.hasExtraInfo = true;
        }
        this.isOrganizerLoaded = true;
    });

  }
}


