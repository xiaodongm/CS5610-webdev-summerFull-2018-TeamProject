import {Component, OnInit, SimpleChange, ViewChild, IterableDiffers, DoCheck, OnChanges} from '@angular/core';
import {SearchBarCampgroundComponent} from '../search-bar-campground/search-bar-campground.component';
import {CampingSiteGridComponent} from '../camping-site-grid/camping-site-grid.component';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  constructor() {
  }
  campgrounds = [];
  ngOnInit() {
  }

  updateCampgrounds(e) {
    this.campgrounds = e.campgrounds;
    console.log(e.campgrounds);
  }
}
