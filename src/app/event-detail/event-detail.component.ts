import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {EventCard} from '../models/EventCard.model.client';
import {dates, months} from '../constants/dateConstant';
import {DomSanitizer} from '@angular/platform-browser';
import {User} from '../models/user.model.client';
import {EventEditorComponent} from '../event-editor/event-editor.component';
import {BsModalRef} from 'ngx-bootstrap';
import {BsModalService} from 'ngx-bootstrap';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {

  constructor(public sanitizer: DomSanitizer) { }
  // event: EventCard = new EventCard();
  inImage = false;
  hasExtraInfo = false;
  months = months;
  dates = dates;
  slideIndex = 0;
  @ViewChild(EventEditorComponent) eventEditor;
  organizer: User = {
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
    't=crop&w=800&q=60'
  };

  event: EventCard = {
    organizer: this.organizer,
    start: new Date(),
    end: new Date(),
    title: 'Amazing Camp Tour in Deep Grand Canyon',
    photos: ['https://images.unsplash.com/photo-1510662' +
    '145379-13537db782dc?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQ' +
    'iOjEyMDd9&s=a88527272e34e0ec18771312843d516e&auto=f' +
    'ormat&fit=crop&w=800&q=60',
      'https://images.unsplash.com/photo-1495756650324-e4' +
      '5118cb3e35?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9' +
      '&s=a0d9a8f675adf1d8d1763a275e72ac66&auto=format&fit' +
      '=crop&w=800&q=60'],
    video: 'https://www.youtube.com/embed/b6hoBp7Hk-A',
    descriptions: [],
    tags: []
  };

  mouseEnter() {
    this.inImage = true;
  }
  mouseLeave() {
    this.inImage = false;
  }
  getIframeSource() {
    const res = this.event.video + '?rel=0&autoplay=1&modestbranding=1';
    return this.sanitizer.bypassSecurityTrustResourceUrl(res);
  }

  splitList(data) {
    return data.split(/\r?\n/);
  }
  editMeta() {
  }
  ngOnInit() {
  }

}
