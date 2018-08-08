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

  constructor(private modalService: BsModalService, public sanitizer: DomSanitizer) {
  }
  // event: EventCard = new EventCard();
  paragraph: string;
  imgUrl: string;
  linkUrl: string;
  list = '';
  listType = 'unorderedList';
  message: string;
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
    descriptions: [{type: 'paragraph', data: 'Lorem Ipsum is ' +
      'simply dummy text of the printing and typesetting indus' +
      'try. Lorem Ipsum has been the industry\'s standard dummy' +
      ' text ever since the 1500s, when an unknown printer took ' +
      'a galley of type and scrambled it to make a type specimen ' +
      'book. It has survived not only five centuries, but also ' +
      'the leap into electronic typesetting, remaining essentially' +
      ' unchanged. It was popularised in the 1960s with the release ' +
      'of Letraset sheets containing Lorem Ipsum passages, and more ' +
      'recently with desktop publishing software like Aldus PageMaker' +
      ' including versions of Lorem Ipsum.'}],
    tags: []
  };

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
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService
      .show(template, Object.assign({}, { class: 'my-modal modal-lg modal-dialog-centered' } ));
  }
  confirm(): void {
    this.message = 'Confirmed!';
    console.log('Confirmed!');
    this.modalRef.hide();
  }
  decline(): void {
    this.message = 'Declined!';

    console.log('Declined!');
    this.modalRef.hide();
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
  addParagraph() {
    this.event.descriptions.push(new Widget('paragraph', this.paragraph));
    this.paragraph = '';
  }
  addLink() {
    this.event.descriptions.push(new Widget('link', this.linkUrl));
  }
  setListType() {
    if (this.listType === 'orderedList') {
      this.listType = 'unorderedList';
    } else {
      this.listType = 'orderedList';
    }
  }
  addList() {
    this.event.descriptions.push(new Widget(this.listType, this.list));
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
    const index = this.event.descriptions.indexOf(oldWidget);
    this.event.descriptions[index] = newWidget;
  }
  deleteWidget(widget) {
    console.log(widget);
    const index = this.event.descriptions.indexOf(widget);
    this.event.descriptions.splice(index, 1);
    console.log(this.event.descriptions);
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
  ngOnInit() {
    if (this.event.video && this.event.video !== '') {
      this.hasExtraInfo = true;
    }
  }
}


