import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-renting-list-for-profile',
  templateUrl: './renting-list-for-profile.component.html',
  styleUrls: ['./renting-list-for-profile.component.css']
})
export class RentingListForProfileComponent implements OnInit {
  @Input() isSame;

  constructor() { }

  ngOnInit() {
  }

}
