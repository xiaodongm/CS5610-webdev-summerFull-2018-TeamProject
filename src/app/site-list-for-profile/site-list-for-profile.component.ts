import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {SiteServiceClient} from '../services/site.service.client';

@Component({
  selector: 'app-site-list-for-profile',
  templateUrl: './site-list-for-profile.component.html',
  styleUrls: ['./site-list-for-profile.component.css']
})
export class SiteListForProfileComponent implements OnInit {

  @Input() sites;
  @Input() isSame: boolean;
  @Input() user;
  @Output() messageEvent: EventEmitter<Object> = new EventEmitter();

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
            .findSitesForProvider(this.user._id)
            .then(sites => this.messageEvent.emit(sites));
        });
    }
  }
}
