import { Component, OnInit, Input } from '@angular/core';
import {UserServiceClient} from '../services/user.service.client';
import {forEach} from '@angular/router/src/utils/collection';
import {User} from '../models/user.model.client';

@Component({
  selector: 'app-attendee-list',
  templateUrl: './attendee-list.component.html',
  styleUrls: ['./attendee-list.component.css']
})
export class AttendeeListComponent implements OnInit {

  constructor(private service: UserServiceClient) { }
  @Input() attendeeIds: string[];
  attendees: User[];
  isDataLoaded = false;
  getAllAttendees(): Promise<any> {
    const promises_array: Array<any> = [];
    for (const id of this.attendeeIds) {
      promises_array.push(this.service.findUserById(id));
    }
    return Promise.all(promises_array);
  }
  ngOnInit() {
    console.log(this.attendeeIds);
    this.getAllAttendees()
      .then(attendees => {

        attendees.forEach((attendee) => {

          if (!attendee.profilePhoto || attendee.profilePhoto === '') {
            attendee.profilePhoto = 'https://images.unsplash.com/photo-' +
              '1495078065017-564723e7e3e7?ixlib=rb-0.3.5&ixid=eyJhcHBfa' +
              'WQiOjEyMDd9&s=09093dcdf66dbcd2397b9dc19384a899&auto=forma' +
              't&fit=crop&w=800&q=60';
          }
          console.log(attendee);
        });
        this.attendees = attendees;
        console.log(this.attendees);
        this.isDataLoaded = true;
      });
  }

}
