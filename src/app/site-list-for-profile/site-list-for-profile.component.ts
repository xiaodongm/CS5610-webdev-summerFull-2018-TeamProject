import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-site-list-for-profile',
  templateUrl: './site-list-for-profile.component.html',
  styleUrls: ['./site-list-for-profile.component.css']
})
export class SiteListForProfileComponent implements OnInit {

  @Input() sites;
  @Input() isSame: boolean;

  constructor() { }

  ngOnInit() {
  }

}
