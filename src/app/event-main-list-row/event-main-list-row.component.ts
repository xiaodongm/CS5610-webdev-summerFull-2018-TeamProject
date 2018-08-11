import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {EventServiceClient} from '../services/event.service.client';
import {EventCard} from '../models/EventCard.model.client';


@Component({
  selector: 'app-event-main-list-row',
  templateUrl: './event-main-list-row.component.html',
  styleUrls: ['./event-main-list-row.component.css'],
})
export class EventMainListRowComponent implements OnInit {

  constructor(private eventService: EventServiceClient) { }
  state = 'hide';
  cards: EventCard[] = [];
  @ViewChild('panel', { read: ElementRef }) public panel: ElementRef<any>;
  ngOnInit() {
    this.eventService.findAllEvents()
      .then(events => this.cards = events);
  }

  public onPreviousSearchPosition(): void {
    const width = this.panel.nativeElement.offsetWidth;
    this.panel.nativeElement.scrollLeft -= width / 3;
  }

  public onNextSearchPosition(): void {
    const width = this.panel.nativeElement.offsetWidth;
    this.panel.nativeElement.scrollLeft += width / 3;
  }
}
