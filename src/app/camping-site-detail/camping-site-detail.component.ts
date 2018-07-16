import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CampingSiteServiceClient} from '../services/campingSite.service.client';
import {CampingSite} from '../models/camingSite.model.client';
import {CampingSiteToDetailServiceClient} from '../communication-services/camping-site-to-detail.service.client';
import {forEach} from '@angular/router/src/utils/collection';


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
  finalAddress = '';

  setParams(params) {
    this.contractId = params['contractID'];
    this.facilityId = params['facilityID'];
    this.loadDetails(this.contractId, this.facilityId);
  }
  setFinalAddress(address) {
    console.log(address);
    if (typeof(address.streetAddress) !== undefined && address.streetAddress.length !== 0) {
      this.finalAddress += address.streetAddress + ', ';
    }
    if (typeof(address.city) !== undefined && address.city.length !== 0) {
      console.log('city' + address.city);
      this.finalAddress += address.city + ', ';
    }
    if (address.state !== undefined && address.state.length !== 0) {
      console.log('state' + address.state);
      this.finalAddress += address.state + ', ';
    }
    if (address.zip !== undefined && address.zip.length !== 0) {
      console.log('state' + address.zip);
      this.finalAddress += address.zip + ', ';
    }
    if (address.country !== undefined && address.country.length !== 0) {
      console.log('country' + address.country);
      this.finalAddress += address.country;
    }
     console.log(this.finalAddress);
    return this.finalAddress;
  }

  addUrlPrefix() {
    for (let i = 0; i < this.campingSite.photo.length; i++) {
      this.campingSite.photo[i]._attributes.realUrl = 'http://www.reserveamerica.com' + this.campingSite.photo[i]._attributes.realUrl;
    }
  }

  loadDetails(contractId, facilityId) {
    this.contractId = contractId;
    this.facilityId = facilityId;
    this.service.findCampingSiteDetails(contractId, facilityId)
      .then(details => {
        // console.log(details);
        this.details = details;
        this.campingSite.address = details.detailDescription.address._attributes;
        this.campingSite.detailDescription = details.detailDescription._attributes;
        this.campingSite.facilityName = details.detailDescription._attributes.facility;
        this.campingSite.amenity = details.detailDescription.amenity;
        this.campingSite.photo = details.detailDescription.photo;
        this.addUrlPrefix();
        console.log(details);
        console.log(details.detailDescription.photo);
        this.setFinalAddress(details.detailDescription.address._attributes);
        this.campingSite.contact = details.detailDescription.contact;
      } )
      .then(() => (this.isDataAvailable = true));
  }

  ngOnInit() {
    this.communicationService.currentCampingSite.subscribe(site => this.campingSiteFromCommunication = site);
    // console.log(this.campingSiteFromCommunication);
  }
}
