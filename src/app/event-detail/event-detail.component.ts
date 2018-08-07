import { Component, OnInit } from '@angular/core';
import {EventCard} from '../models/EventCard.model.client';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {

  constructor() { }
  event: EventCard = new EventCard();

  splitList(data) {
    return data.split(/\r?\n/);
  }
  ngOnInit() {
  }

}
