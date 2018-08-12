import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {UserServiceClient} from '../services/user.service.client';
import {EventCard} from '../models/EventCard.model.client';
import {dates, months} from '../constants/dateConstant';
import {User} from '../models/user.model.client';
import {Router} from '@angular/router';

@Component({
  selector: 'app-event-main-list-row-card',
  templateUrl: './event-main-list-row-card.component.html',
  styleUrls: ['./event-main-list-row-card.component.css']
})
export class EventMainListRowCardComponent implements OnInit {

  constructor(public sanitizer: DomSanitizer,
              private router: Router,
              private service: UserServiceClient) { }
  inImage = false;
  hasExtraInfo = false;
  months = months;
  dates = dates;
  slideIndex = 0;
  organizer = new User();
  @Input() data: EventCard;
  @Output() updateEvent =  new EventEmitter<string>();

  goDetailPage() {
    console.log('go detail');
    this.router.navigateByUrl('/eventDetail/' + this.data._id);
  }

  goProfilePage() {
    console.log('go profile');
  }

  slideChanged(event: number) {
    if (event !== this.slideIndex) {
      this.updateEvent.emit('update');
      this.slideIndex = event;
    }
  }
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

  getOrganizer() {
    return this.service.findUserById(this.data.organizer)
      .then((organizer) => {
        if (!organizer.profilePhoto || organizer.profilePhoto === '') {
          organizer.profilePhoto = 'https://images.unsplash.com/photo-' +
            '1495078065017-564723e7e3e7?ixlib=rb-0.3.5&ixid=eyJhcHBfa' +
            'WQiOjEyMDd9&s=09093dcdf66dbcd2397b9dc19384a899&auto=forma' +
            't&fit=crop&w=800&q=60';
        }
        return this.organizer = organizer;
      });
  }

  ngOnInit() {
    this.getOrganizer()
      .then(() => {
        if (this.data.video && this.data.video !== '') {
          this.hasExtraInfo = true;
        }
      });
  }

}

