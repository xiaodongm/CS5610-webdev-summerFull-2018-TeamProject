import { Component, OnInit } from '@angular/core';
import {EventCard} from '../models/EventCard.model.client';

@Component({
  selector: 'app-event-waterfall',
  templateUrl: './event-waterfall.component.html',
  styleUrls: ['./event-waterfall.component.css']
})
export class EventWaterfallComponent implements OnInit {

  constructor() { }
  cards: EventCard[] = [];
  ngOnInit() {
  }

}
