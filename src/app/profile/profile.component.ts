import { Component, OnInit } from '@angular/core';
import {User} from '../models/user.model.client';
import {UserServiceClient} from '../services/user.service.client';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private userService: UserServiceClient) { }

  user = new  User();

  receiveMessage($event) {
    this.user = $event;
  }

  ngOnInit() {
    this.userService
      .profile()
      .then(user => this.user = user);
  }

}
