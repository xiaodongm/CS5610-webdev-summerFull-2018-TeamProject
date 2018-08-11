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

  toggleTag(tag) {
    if (this.tags.includes(tag)) {
      const index = this.tags.indexOf(tag);
      this.tags.splice(index, 1);
    } else {
      this.tags.push(tag);
    }
  }
  createSite() {

    let curUser;
    this.userService.profile()
      .then(res => curUser = res)
      .then(  () => {
        const newSite = new Site();
        console.log(this.bsRangeValue);
        newSite.title = this.title;
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
