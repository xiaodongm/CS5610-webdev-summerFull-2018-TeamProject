import { Component, OnInit } from '@angular/core';
import {EventServiceClient} from '../services/event.service.client';
import {UserServiceClient} from '../services/user.service.client';
import {Router} from '@angular/router';
import {Widget} from '../models/widget.model.client';
import {Site} from '../models/site.model.client';
import {SiteServiceClient} from '../services/site.service.client';

@Component({
  selector: 'app-create-site',
  templateUrl: './create-site.component.html',
  styleUrls: ['./create-site.component.css']
})
export class CreateSiteComponent implements OnInit {

  constructor(private router: Router,
              private service: SiteServiceClient,
              private userService: UserServiceClient) { }
  location;
  isCollapsed1 = true;
  isCollapsed2 = true;
  isCollapsed3 = true;
  tags = [];
  bsRangeValue: Date[];
  title;
  paragraph;

  featureTags = ['Campfire Rings', 'Drinking Water', 'Firewood Vendor', 'Fishing', 'Grills', 'River Access',
                  'Swimming', 'Tables', 'Tent Sites', 'Trash Collection', 'Vault Toilets', 'ATM', 'Fuel Available',
                  'Grocery Store', 'Payphone', 'Restaurant', 'Picnic Area', 'Boating', 'Group Camping', 'Parking Area',
                  'Pet Allowed', 'Trails', 'Wildlife Viewing'];

  // toggleTag(tag) {
  //   if (this.tags.includes(tag)) {
  //     const index = this.tags.indexOf(tag);
  //     this.tags.splice(index, 1);
  //   } else {
  //     this.tags.push(tag);
  //   }
  // }

  toggleCollapse1() {
    if (!this.location || this.location === '') {
      alert('input field can not be empty');
    } else {
      this.isCollapsed1 = !this.isCollapsed1;
    }
  }

  toggleFeatureTag(tag) {
    this.tags.push(tag);
    const index = this.featureTags.indexOf(tag);
    this.featureTags.splice(index, 1);
  }

  toggleEventTag(tag) {
    this.featureTags.push(tag);
    const index = this.tags.indexOf(tag);
    this.tags.splice(index, 1);
  }


  createSite() {
    if (!this.title || this.title === '') {
      alert('must have a title');
      return;
    }

    if (!this.bsRangeValue) {
      alert('must have valid time input');
      return;
    }

    let curUser;
    this.userService.profile()
      .then(res => curUser = res)
      .then(  () => {
        const newSite = new Site();
        console.log(this.bsRangeValue);
        newSite.title = this.title;
        newSite.location = this.location;
        newSite.provider = curUser._id;
        newSite.tags = this.tags;
        newSite.description = [];
        newSite.description.push(new Widget('paragraph', this.paragraph));
        console.log(newSite);
        return this.service.createSite(newSite);
      })
      .then(() => this.router.navigateByUrl('/profile') );

  }


  ngOnInit() {
  }

}
