import { Component, OnInit } from '@angular/core';
import {SiteServiceClient} from '../services/site.service.client';
import {ProviderServiceClient} from '../services/provider.service.client';
import {Provider} from '../models/provider.model.client';
import {ActivatedRoute} from '@angular/router';
import {Site} from '../models/site.model.client';
import {BsModalService} from 'ngx-bootstrap';

@Component({
  selector: 'app-site-detail',
  templateUrl: './site-detail.component.html',
  styleUrls: ['./site-detail.component.css']
})
export class SiteDetailComponent implements OnInit {

  constructor(private service: SiteServiceClient,
              private route: ActivatedRoute,
              private modalService: BsModalService,
              private providerService: ProviderServiceClient
  ) {
    this.route.params.subscribe(
      params => this.setParams(params));
  }

  isDataAvailable = false;
  site: Site = new Site();
  provider: Provider = new Provider();

  setParams(params) {
    const siteId = params['siteId'];
    this.service.findSiteById(siteId)
      .then((site) => {
        this.site = site;

        return this.providerService.findProviderById(site.provider);
      })
      .then(provider => {
        this.provider = provider;

        if (!provider.profilePhoto || provider.profilePhoto === '') {
          this.provider.profilePhoto = 'https://images.unsplash.com/photo-' +
            '1495078065017-564723e7e3e7?ixlib=rb-0.3.5&ixid=eyJhcHBfa' +
            'WQiOjEyMDd9&s=09093dcdf66dbcd2397b9dc19384a899&auto=forma' +
            't&fit=crop&w=800&q=60';
        }
        this.isDataAvailable = true;
      });
  }

  refreshSite() {
    this.service.findSiteById(this.site._id)
      .then(site =>
        this.site = site
      );
  }

  splitList(data) {
    return data.split(/\r?\n/);
  }

  ngOnInit() {
  }

}
