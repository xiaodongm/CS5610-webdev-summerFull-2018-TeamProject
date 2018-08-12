import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {UserServiceClient} from '../services/user.service.client';
import {EventCard} from '../models/EventCard.model.client';
import {Router} from '@angular/router';
import {dates, months} from '../constants/dateConstant';
import {User} from '../models/user.model.client';
import {Site} from '../models/site.model.client';
import {ProviderServiceClient} from '../services/provider.service.client';
import {Provider} from '../models/provider.model.client';

@Component({
  selector: 'app-site-list-card',
  templateUrl: './site-list-card.component.html',
  styleUrls: ['./site-list-card.component.css']
})
export class SiteListCardComponent implements OnInit {

  constructor(public sanitizer: DomSanitizer,
              private router: Router,
              private service: ProviderServiceClient) { }
  inImage = false;
  hasExtraInfo = false;
  months = months;
  dates = dates;
  slideIndex = 0;
  provider = new Provider();
  @Input() data: Site;

  slideChanged(event: number) {
    if (event !== this.slideIndex) {
      this.slideIndex = event;
    }
  }
  mouseEnter() {
    this.inImage = true;
  }
  mouseLeave() {
    this.inImage = false;
  }

  getProvider() {
    console.log(this.data.provider);
    return this.service.findProviderById(this.data.provider)
      .then((provider) => {
        if (!provider.profilePhoto || provider.profilePhoto === '') {
          provider.profilePhoto = 'https://images.unsplash.com/photo-' +
            '1495078065017-564723e7e3e7?ixlib=rb-0.3.5&ixid=eyJhcHBfa' +
            'WQiOjEyMDd9&s=09093dcdf66dbcd2397b9dc19384a899&auto=forma' +
            't&fit=crop&w=800&q=60';
        }
        return this.provider = provider;
      });
  }

  ngOnInit() {
    console.log(this.data);
    this.getProvider()
      .then(() => {

      });
  }

}
