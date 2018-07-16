import {Component, OnInit, Input, SimpleChanges, OnChanges, IterableDiffers, DoCheck} from '@angular/core';
import {CampingSite} from '../models/camingSite.model.client';
import {CampingSiteToDetailServiceClient} from '../communication-services/camping-site-to-detail.service.client';

@Component({
  selector: 'app-camping-site-grid',
  templateUrl: './camping-site-grid.component.html',
  styleUrls: ['./camping-site-grid.component.css']
})
export class CampingSiteGridComponent implements OnInit, DoCheck {

  constructor(private differs: IterableDiffers, private dataService: CampingSiteToDetailServiceClient) {
    this.differ = differs.find([]).create(null);
  }
  campingSite;
  campingSitesArray = [];
  differ: any;
  @Input('campingSites') campingSites;
  ngOnInit() {
    this.campingSitesArray = this.campingSites;
    this.campingSite = this.dataService.currentCampingSite.subscribe(site => (this.campingSite = site));
    setTimeout(() => console.log(this.campingSites), 7000);
  }

  selectCampingSite(site) {
    this.dataService.changeCampingSite(site);
  }
  ngDoCheck() {
    const change = this.differ.diff(this.campingSites);
    if (change) {
      this.campingSitesArray = this.campingSites;
      console.log(this.campingSites);
    }
  }
}
