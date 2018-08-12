import { Component, OnInit } from '@angular/core';
import {Site} from '../models/site.model.client';
import {SiteServiceClient} from '../services/site.service.client';

@Component({
  selector: 'app-site-list',
  templateUrl: './site-list.component.html',
  styleUrls: ['./site-list.component.css']
})
export class SiteListComponent implements OnInit {

  constructor(private service: SiteServiceClient) { }

  sites: Site[] = [];

  loadEvents() {

    return this.service.findAllSites()
      .then((sites) => {
        sites.forEach(site => {
          // console.log(event);
          if (site.photos.length === 0) {
            site.photos.push('https://images.unsplash.com/pho' +
              'to-1503709371-a2bffb8242d4?ixlib=rb-0.3.5&ixid=e' +
              'yJhcHBfaWQiOjEyMDd9&s=ddafca4e3976f17cd856a8de073' +
              '8dce3&auto=format&fit=crop&w=800&q=60');
          }
        });
        this.sites = sites;
      });

  }
  ngOnInit() {
    this.loadEvents();
  }

}
