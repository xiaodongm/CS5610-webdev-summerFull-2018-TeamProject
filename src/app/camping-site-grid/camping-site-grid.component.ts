import {Component, OnInit, Input, SimpleChanges, OnChanges, IterableDiffers, DoCheck} from '@angular/core';
import {CampingSite} from '../models/camingSite.model.client';
import {ActivatedRoute} from '@angular/router';
import {CampingSiteServiceClient} from '../services/campingSite.service.client';


@Component({
  selector: 'app-camping-site-grid',
  templateUrl: './camping-site-grid.component.html',
  styleUrls: ['./camping-site-grid.component.css']
})
export class CampingSiteGridComponent implements OnInit, DoCheck {

  constructor(private service: CampingSiteServiceClient, private differs: IterableDiffers) {
    this.differ = differs.find([]).create(null);
  }
  campingSites = [];
  differ: any;
  @Input() campgrounds;
  ngOnInit() {
    // this.service
    //   .findCampingSitesByStateOrName('CA', 'Abrams')
    //   .then(response => this.campingSites = response.result)
    //   .then(() => {console.log(this.campingSites); });
    this.campingSites = this.campgrounds;
    setTimeout(() => console.log(this.campgrounds), 7000);
  }

  ngDoCheck() {
    const change = this.differ.diff(this.campgrounds);
    this.campingSites = this.campgrounds;
    console.log(this.campgrounds);
  }

}
