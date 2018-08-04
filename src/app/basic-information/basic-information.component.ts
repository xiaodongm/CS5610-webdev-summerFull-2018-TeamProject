import { Component, OnInit } from '@angular/core';
import {UserServiceClient} from '../services/user.service.client';
import {User} from '../models/user.model.client';

@Component({
  selector: 'app-basic-information',
  templateUrl: './basic-information.component.html',
  styleUrls: ['./basic-information.component.css']
})
export class BasicInformationComponent implements OnInit {

  constructor(private service: UserServiceClient) { }

  user = new User();

  ngOnInit() {
    this.service
      .profile()
      .then(user => this.user = user);
  }

}
