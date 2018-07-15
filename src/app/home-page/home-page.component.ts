import {Component, OnInit, SimpleChange, ViewChild, IterableDiffers, DoCheck, OnChanges} from '@angular/core';
import {SearchBarCampingSiteComponent} from '../search-bar-campground/search-bar-camping-site.component';
import {CampingSiteGridComponent} from '../camping-site-grid/camping-site-grid.component';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  constructor() {
  }
  campingSites = [];
  ngOnInit() {
  }

  updateCampgrounds(e) {
    this.campingSites = e.campingSites;
  }
}
