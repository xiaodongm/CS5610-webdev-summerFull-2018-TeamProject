import { Component, OnInit, Input } from '@angular/core';
import {SiteServiceClient} from '../services/site.service.client';

@Component({
  selector: 'app-site-list-for-profile',
  templateUrl: './site-list-for-profile.component.html',
  styleUrls: ['./site-list-for-profile.component.css']
})
export class SiteListForProfileComponent implements OnInit {

  @Input() sites;
  @Input() isSame: boolean;

  constructor(private siteService: SiteServiceClient) { }

  ngOnInit() {
    console.log(this.sites);
  }

  deleteSite(siteId, provideId) {
    if (confirm('Are you sure to delete the site ?')) {
      this.siteService
        .deleteSite(siteId)
        .then(() => {
          this.siteService
            .findSitesForProvider(provideId)
            .then(sites => this.sites = sites);
        });
    }
  }
}
