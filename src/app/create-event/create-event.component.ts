import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {EventServiceClient} from '../services/event.service.client';
import {UserServiceClient} from '../services/user.service.client';
import {EventCard} from '../models/EventCard.model.client';
import {Widget} from '../models/widget.model.client';
import {BsDatepickerModule} from 'ngx-bootstrap';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {

  constructor(private router: Router,
              private service: EventServiceClient,
              private userService: UserServiceClient) { }
  campSite;
  isCollapsed1 = true;
  isCollapsed2 = true;
  isCollapsed3 = true;
  tags = [];
  title;
  paragraph;
  eventStart: Date;
  eventEnd: Date;
  level = 'Relax';

  featureTags: String[] = ['Biking', 'Hiking', 'Swimming', 'Fishing', 'Horse riding', 'BBQ'];

  // toggleTag(tag) {
  //   if (this.tags.includes(tag)) {
  //     const index = this.tags.indexOf(tag);
  //       this.tags.splice(index, 1);
  //   } else {
  //     this.tags.push(tag);
  //   }
  // }

  toggleFeatureTag(tag) {
    this.tags.push(tag);
    const index = this.featureTags.indexOf(tag);
    this.featureTags.splice(index, 1);
  }

  toggleEventTag(tag) {
    this.featureTags.push(tag);
    const index = this.tags.indexOf(tag);
    this.tags.splice(index, 1);
  }

  toggleCollapse1() {
    if (!this.campSite || this.campSite === '') {
      alert('input field can not be empty');
    } else {
      this.isCollapsed1 = !this.isCollapsed1;
    }
  }

  createEvent() {
    if (!this.title || this.title === '') {
      alert('must have a title');
      return;
    }

    if (!this.eventStart || !this.eventEnd) {
      alert('must have valid time input');
      return;
    }

    let curUser;
    this.userService.profile()
      .then(res => curUser = res)
      .then(  () => {
        const newEvent = new EventCard();
        newEvent.title = this.title;
        newEvent.organizer = curUser._id;
        newEvent.tags = this.tags;
        newEvent.level = this.level;
        newEvent.startTime = this.eventStart;
        newEvent.endTime = this.eventEnd;
        newEvent.description.push(new Widget('paragraph', this.paragraph));
        // console.log(newEvent);
        this.service.createEvent(newEvent);
      }).then(() => this.router.navigateByUrl('/profile') );

  }
  ngOnInit() {
  }

}
