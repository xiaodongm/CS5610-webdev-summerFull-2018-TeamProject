import { Component, OnInit, Input } from '@angular/core';
import {UserServiceClient} from '../services/user.service.client';
import {forEach} from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-attendee-list',
  templateUrl: './attendee-list.component.html',
  styleUrls: ['./attendee-list.component.css']
})
export class AttendeeListComponent implements OnInit {

  constructor(private service: UserServiceClient) { }
  @Input()
  attendeeIds;
  attendees;
  getAllAttendees(): Promise<any> {
    const promises_array: Array<any> = [];
    for (const id of this.attendeeIds) {
      promises_array.push(this.service.findUserById(id));
    }
    return Promise.all(promises_array);
  }
  ngOnInit() {
    this.getAllAttendees()
      .then(attendees => this.attendees = attendees);
  }

}
