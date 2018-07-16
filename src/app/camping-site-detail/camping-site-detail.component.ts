import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CampingSiteServiceClient} from '../services/campingSite.service.client';
import {CampingSite} from '../models/camingSite.model.client';
import {CampingSiteToDetailServiceClient} from '../communication-services/camping-site-to-detail.service.client';


@Component({
  selector: 'app-camping-site-detail',
  templateUrl: './camping-site-detail.component.html',
  styleUrls: ['./camping-site-detail.component.css']
})

export class CampingSiteDetailComponent implements OnInit {
  constructor(private service: CampingSiteServiceClient,
              private route: ActivatedRoute,
              private communicationService: CampingSiteToDetailServiceClient) {
    this.route.params.subscribe(
      params => this.setParams(params));
  }
  campingSiteFromCommunication;
  isDataAvailable = false;
  contractId;
  facilityId;
  campingSite: CampingSite = new CampingSite();
  details: {};

  setParams(params) {
    this.contractId = params['contractID'];
    this.facilityId = params['facilityID'];
    this.loadDetails(this.contractId, this.facilityId);
  }

  loadDetails(contractId, facilityId) {
    this.contractId = contractId;
    this.facilityId = facilityId;
    this.service.findCampingSiteDetails(contractId, facilityId)
      .then(details => {
        console.log(details);
        this.details = details;
        this.campingSite.address = details.detailDescription.address._attributes;
        this.campingSite.detailDescription = details.detailDescription._attributes;
        this.campingSite.facilityName = details.detailDescription._attributes.facility;
        // this.campingSite.address.streetAddress = details.detailDescription.address._attributes.streetAddress;
        // this.campingSite.address.city = details.detailDescription.address._attributes.city;
        // this.campingSite.address.state = details.detailDescription.address._attributes.state;
        // this.campingSite.address.zip = details.detailDescription.address._attributes.zip;
        // this.campingSite.address.country = details.detailDescription.address._attributes.country;
      } ).then(() => (this.isDataAvailable = true));
  }

  ngOnInit() {
    this.communicationService.currentCampingSite.subscribe(site => this.campingSiteFromCommunication = site);
    console.log(this.campingSiteFromCommunication);
  }
}
