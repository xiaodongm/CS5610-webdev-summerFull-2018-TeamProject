import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import {CampingSiteServiceClient} from '../services/campingSite.service.client';

@Component({
  selector: 'app-search-bar-campground',
  templateUrl: './search-bar-camping-site.component.html',
  styleUrls: ['./search-bar-camping-site.component.css']
})
export class SearchBarCampingSiteComponent implements OnInit {
  constructor(private service: CampingSiteServiceClient) { }

  searchInput = [];
  campingSites = [];
  @Output() searchPressed = new EventEmitter();
  searchCampgrounds(searchInput, e) {
    console.log(searchInput[0]);
    this.service
      .findCampingSitesByStateOrName('CA', searchInput[0])
      .then(response => {
        if (response.resultset._attributes.count === '0') {
          this.campingSites = [];
          return;
        }
        this.campingSites = response.resultset.result;
      })
      .then(() => {console.log(this.campingSites); })
      .then (() => {this.searchPressed.emit({campingSites: this.campingSites}); });

  }
  ngOnInit() {
  }

}
