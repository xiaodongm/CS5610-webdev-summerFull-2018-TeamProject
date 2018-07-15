import { Component, OnInit } from '@angular/core';
import {CampingSite} from '../models/camingSite.model.client';
import {ActivatedRoute} from '@angular/router';
import {CampingSiteServiceClient} from '../services/campingSite.service.client';

@Component({
  selector: 'app-camping-site-grid',
  templateUrl: './camping-site-grid.component.html',
  styleUrls: ['./camping-site-grid.component.css']
})
export class CampingSiteGridComponent implements OnInit {

  constructor(private service: CampingSiteServiceClient) {}
  campingSites = [];


  ngOnInit() {
    this.service
      .findCampingSitesByStateOrName('CA', 'Abrams')
      .then(response => this.campingSites = response.result);
  }

}
