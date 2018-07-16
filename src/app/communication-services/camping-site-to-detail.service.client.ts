import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class CampingSiteToDetailServiceClient {

  private campingSiteSource = new BehaviorSubject('default message');
  currentCampingSite = this.campingSiteSource.asObservable();

  constructor() { }

  changeCampingSite(campingSite) {
    this.campingSiteSource.next(campingSite);
    console.log('change camping site');
    console.log(this.currentCampingSite);
  }
}
