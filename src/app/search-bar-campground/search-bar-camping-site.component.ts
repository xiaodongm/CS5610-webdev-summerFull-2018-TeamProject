import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import {CampingSiteServiceClient} from '../services/campingSite.service.client';

@Component({
  selector: 'app-search-bar-campground',
  templateUrl: './search-bar-camping-site.component.html',
  styleUrls: ['./search-bar-camping-site.component.css']
})
export class SearchBarCampingSiteComponent implements OnInit {
  constructor(private service: CampingSiteServiceClient) { }

  pNameInput: String = '';
  pStateInput: String = '';
  campingSites = [];
  @Output() searchPressed = new EventEmitter();
  searchCampgrounds(pNameInput, pStateInput, e) {
    if (pStateInput === '' && pNameInput === '') {
      alert('Please at least enter the name or state');
      return;
    }
    if (pStateInput === '' && pNameInput.length < 4) {
      alert('Sorry, the name of facility must no less then 4 characters');
      return;
    }
    if (pStateInput.length > 0) {
      pStateInput = pStateInput.toUpperCase();
    }

    this.service
      .findCampingSitesByStateOrName(pStateInput, pNameInput)
      .then(response => {
        if (response.resultset._attributes.count === '0') {
          this.campingSites = [];
          return;
        }
        this.campingSites = response.resultset.result;
       // console.log(response);
      })
      .then(() => {console.log(this.campingSites); })
      .then (() => {this.searchPressed.emit({campingSites: this.campingSites}); });

  }
  ngOnInit() {
  }

}
