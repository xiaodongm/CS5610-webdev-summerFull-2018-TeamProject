import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import {CampingSiteServiceClient} from '../services/campingSite.service.client';

@Component({
  selector: 'app-search-bar-campground',
  templateUrl: './search-bar-campground.component.html',
  styleUrls: ['./search-bar-campground.component.css']
})
export class SearchBarCampgroundComponent implements OnInit {
  constructor(private service: CampingSiteServiceClient) { }

  searchInput = '';
  campgrounds = [];
  @Output() searchPressed = new EventEmitter();
  searchCampgrounds(searchInput, e) {
    console.log(searchInput[0]);
    this.service
      .findCampingSitesByStateOrName('CA', searchInput[0])
      .then(response => {
        this.campgrounds = response.resultset.result;
      })
      .then(() => {console.log(this.campgrounds); })
      .then (() => {this.searchPressed.emit({campgrounds: this.campgrounds}); });

  }
  ngOnInit() {
  }

}
