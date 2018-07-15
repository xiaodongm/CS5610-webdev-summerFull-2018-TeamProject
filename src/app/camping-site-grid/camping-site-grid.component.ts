import { Component, OnInit } from '@angular/core';
import {CampingSite} from '../models/camingSite.model.client';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-camping-site-grid',
  templateUrl: './camping-site-grid.component.html',
  styleUrls: ['./camping-site-grid.component.css']
})
export class CampingSiteGridComponent implements OnInit {

  constructor() {}

  campingSites: CampingSite[] = [];


  ngOnInit() {
  }

}
