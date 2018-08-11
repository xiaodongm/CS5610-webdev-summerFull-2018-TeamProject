import { Component, OnInit, Input } from '@angular/core';
import {UserServiceClient} from '../services/user.service.client';
import {EventServiceClient} from '../services/event.service.client';

@Component({
  selector: 'app-events-list-for-profile',
  templateUrl: './events-list-for-profile.component.html',
  styleUrls: ['./events-list-for-profile.component.css']
})

export class EventsListForProfileComponent implements OnInit {

  constructor() { }

  @Input() type;
  @Input() events;
  @Input() isSame;

  receiveNewEvents($event) {
    this.events = $event;
  }

  ngOnInit() {
    if (this.type === 'pa') {
      let temp = [];
      this.events.forEach(enrollment => {
        temp.push(enrollment.event);
      });
      this.events = temp;
    }
  }

}

