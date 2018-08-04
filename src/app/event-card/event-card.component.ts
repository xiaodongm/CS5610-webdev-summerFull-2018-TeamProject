import { Component, OnInit } from '@angular/core';
import {EventCard} from '../models/EventCard.model.client';
import { DomSanitizer } from '@angular/platform-browser';
import {User} from '../models/user.model.client';
import {Input} from '@angular/core';
import {months, dates} from '../constants/dateConstant';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.css']
})
export class EventCardComponent implements OnInit {

  constructor(public sanitizer: DomSanitizer) { }
  inImage = false;
  hasExtraInfo = false;
  months = months;
  dates = dates;
  @Input() data: EventCard;
  mouseEnter() {
    this.inImage = true;
  }

  mouseLeave() {
    this.inImage = false;
  }
  getIframeSource() {
    const res = this.data.video + '?rel=0&autoplay=1&modestbranding=1';
    return this.sanitizer.bypassSecurityTrustResourceUrl(res);
}

  ngOnInit() {
    if (this.data.video && this.data.video !== '') {
      this.hasExtraInfo = true;
    }
  }

}
