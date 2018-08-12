import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
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
  @Input()
  cards: EventCard[] = [];
  @ViewChild('panel', { read: ElementRef }) public panel: ElementRef<any>;
  ngOnInit() {

  }

  public onPreviousSearchPosition(): void {
    const width = 350;
    this.panel.nativeElement.scrollLeft -= width;
  }

  public onNextSearchPosition(): void {
    const width = 350;
    // const width = this.panel.nativeElement.offsetWidth;
    this.panel.nativeElement.scrollLeft += width;
  }

}
