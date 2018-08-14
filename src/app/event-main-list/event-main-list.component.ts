import { Component, OnInit } from '@angular/core';
import {EventServiceClient} from '../services/event.service.client';
import {EventCard} from '../models/EventCard.model.client';

@Component({
  selector: 'app-event-main-list',
  templateUrl: './event-main-list.component.html',
  styleUrls: ['./event-main-list.component.css']
})
export class EventMainListComponent implements OnInit {

  constructor(private eventService: EventServiceClient) { }

  featureTags: string[] = ['Biking', 'Hiking', 'Swimming', 'Fishing', 'Horse riding', 'BBQ'];
  activeTags: string[] = [];
  adventureEvent: EventCard[] = [];
  relaxEvent: EventCard[] = [];
  trainingEvent: EventCard[] = [];
  active = true;
  events;
  isActiveTag(tag) {
    if (this.activeTags.includes(tag)) {
      return true;
    } else {
      return false;
    }
  }

  arrayContainsArray (superset, subset) {
    for (let j = 0; j < subset.length; j++) {
      if (!superset.includes(subset[j])) {
        return false;
      }
    }
    return true;
  }


  toggleTags(tag) {
    if (this.isActiveTag(tag)) {
      const index = this.activeTags.indexOf(tag);
      this.activeTags.splice(index, 1);
    } else {
      this.activeTags.push(tag);
    }
    console.log(this.activeTags);
    this.loadEvents().then((events) => {

      console.log(this.trainingEvent);
      console.log(this.adventureEvent);
      // for (let k = 0; k < this.relaxEvent.length; k++) {
      //   console.log(k);
      // }
      const newAdventureEvent = [];

      for (let k = 0; k < this.adventureEvent.length; k++) {
        const event = this.adventureEvent[k];
        console.log(k);
        console.log(event);
        if (this.arrayContainsArray(event.tags, this.activeTags)) {
          newAdventureEvent.push(this.adventureEvent[k]);
        }
        console.log('contain relax');
      }
      this.adventureEvent = newAdventureEvent;

      const newRelaxEvent = [];

      for (let k = 0; k < this.relaxEvent.length; k++) {
        const event = this.relaxEvent[k];
        console.log(k);
        console.log(event);
        if (this.arrayContainsArray(event.tags, this.activeTags)) {
          newRelaxEvent.push(this.relaxEvent[k]);
        }
        console.log('contain relax');
      }
      this.relaxEvent = newRelaxEvent;

      const newTrainingEvent = [];

      for (let k = 0; k < this.trainingEvent.length; k++) {
        const event = this.trainingEvent[k];
        console.log(k);
        console.log(event);
        if (this.arrayContainsArray(event.tags, this.activeTags)) {
          newTrainingEvent.push(this.trainingEvent[k]);
        }
        console.log('contain relax');
      }
      this.trainingEvent = newTrainingEvent;
    });
  }

  refactorTime(time) {
    const index = time.indexOf('T');
    return time.substring(0, index);
  }

  loadEvents() {
    this.adventureEvent = [];
    this.relaxEvent = [];
    this.trainingEvent = [];
    return this.eventService.findAllEvents()
      .then((events) => {
        this.events = events;

       for (const event of events) {
          event.startTime = this.refactorTime(event.startTime);
          event.endTime = this.refactorTime(event.endTime);
          // console.log(event);
          if (event.level === 'Adventure') {
            if (event.photos.length === 0) {
              event.photos.push('https://images.unsplash.com/pho' +
                'to-1523341139367-9de570b874ed?ixlib=rb-0.3.5&ix' +
                'id=eyJhcHBfaWQiOjEyMDd9&s=e23461455220c5147c59f5' +
                'a2d831f545&auto=format&fit=crop&w=800&q=60');
            }
            this.adventureEvent.push(event);

          } else if (event.level === 'Training') {
            if (event.photos.length === 0) {
              event.photos.push('https://images.unsplash.com/photo-' +
                '1510159806165-0c899599899d?ixlib=rb-0.3.5&s=d1f682d' +
                '5d1a0ea065e1ccfb4659edb58&auto=format&fit=crop&w=800' +
                '&q=60');
            }
            this.trainingEvent.push(event);
          } else {
            if (event.photos.length === 0) {
              event.photos.push('https://images.unsplash.com/photo-' +
                '1470010762743-1fa2363f65ca?ixlib=rb-0.3.5&ixid=eyJh' +
                'cHBfaWQiOjEyMDd9&s=e318710a372c9abb3a43b969b768cc3e' +
                '&auto=format&fit=crop&w=800&q=60');
            }
            this.relaxEvent.push(event);
          }
        }});

  }

  ngOnInit() {
    this.loadEvents();
  }

}
