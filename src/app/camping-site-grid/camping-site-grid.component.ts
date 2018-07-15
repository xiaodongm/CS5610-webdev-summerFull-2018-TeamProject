import {Component, OnInit, Input, SimpleChanges, OnChanges, IterableDiffers, DoCheck} from '@angular/core';
import {CampingSite} from '../models/camingSite.model.client';


@Component({
  selector: 'app-camping-site-grid',
  templateUrl: './camping-site-grid.component.html',
  styleUrls: ['./camping-site-grid.component.css']
})
export class CampingSiteGridComponent implements OnInit, DoCheck {

  constructor(private differs: IterableDiffers) {
    this.differ = differs.find([]).create(null);
  }
  campingSitesArray = [];
  differ: any;
  @Input('campingSites') campingSites;
  ngOnInit() {
    this.campingSitesArray = this.campingSites;
    setTimeout(() => console.log(this.campingSites), 7000);
  }

  ngDoCheck() {
    const change = this.differ.diff(this.campingSites);
    this.campingSitesArray = this.campingSites;
    console.log(this.campingSites);
  }
}
