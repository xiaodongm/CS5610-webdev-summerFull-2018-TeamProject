import { Component, OnInit } from '@angular/core';
import {EventCard} from '../models/EventCard.model.client';
import {User} from '../models/user.model.client';
import {Input, Output, EventEmitter} from '@angular/core';
import {UserServiceClient} from '../services/user.service.client';
import {EventServiceClient} from '../services/event.service.client';
import {EnrollmentServiceClient} from '../services/enrollment.service.client';

@Component({
  selector: 'app-event-card-for-profile',
  templateUrl: './event-card-for-profile.component.html',
  styleUrls: ['./event-card-for-profile.component.css']
})
export class EventCardForProfileComponent implements OnInit {

  constructor(private eventService: EventServiceClient,
              private enrollmentService: EnrollmentServiceClient,
              private service: UserServiceClient) { }

  slideIndex = 0;
  organizer = new User();
  @Input() type: String;
  @Input() data: EventCard;
  @Output() updateEvent =  new EventEmitter<string>();
  @Output() newEvents =  new EventEmitter<Object[]>();
  @Input() isSame: boolean;

  getOrganizer() {
    console.log(this.data);
    return this.service.findUserById(this.data.organizer)
      .then((organizer) => {
        console.log(organizer);
        if (!organizer.profilePhoto || organizer.profilePhoto === '') {
          organizer.profilePhoto = 'https://images.unsplash.com/photo-' +
            '1495078065017-564723e7e3e7?ixlib=rb-0.3.5&ixid=eyJhcHBfa' +
            'WQiOjEyMDd9&s=09093dcdf66dbcd2397b9dc19384a899&auto=forma' +
            't&fit=crop&w=800&q=60';
        }
        return this.organizer = organizer;
      });
  }

  unenrollment() {
    this.service
      .profile()
      .then(user => {
        if (user.error) {
          alert(user.error);
          return;
        } else {
          const enrollment = {
            event: this.data._id,
            attendee: user._id
          };
          this.enrollmentService
            .unenrollAttendeeInEvent(enrollment)
            .then(() => {
              this.enrollmentService
                .findEnrollmentsForAttendee(user._id)
                .then(events => {
                  let temp = [];
                  events.forEach(e => {
                    temp.push(e.event);
                  });
                  events = temp;
                  this.sendMessage(events);
                });
            });
        }
      });
  }

  ngOnInit() {
    console.log(this.data);
    console.log('here');
    this.getOrganizer()
      .then(() => {
        console.log(this.organizer);
        this.service.profile()
          .then();
      });
  }

  sendMessage(message) {
    this.newEvents.emit(message);
  }

  refresh() {
    this.eventService
      .findEventsForOrganizer(this.organizer._id)
      .then(events => this.sendMessage(events));
  }

  deleteEvent() {
    if (confirm('Are you sure to delete the event?')) {
      this.eventService
        .deleteEvent(this.data._id)
        .then(res => {
          if (res.error) {
            alert(res.error);
          } else {
            this.refresh();
          }
        });
    }
  }
}
