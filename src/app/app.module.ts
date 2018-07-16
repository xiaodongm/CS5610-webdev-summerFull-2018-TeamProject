import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import {routing} from './app.rounting';
import {CampingSiteGridComponent} from './camping-site-grid/camping-site-grid.component';

import { CampingSiteDetailComponent } from './camping-site-detail/camping-site-detail.component';

// third part imports
import { CarouselModule } from 'ngx-bootstrap/carousel';


import { SearchBarCampingSiteComponent } from './search-bar-campground/search-bar-camping-site.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CampingSiteServiceClient} from './services/campingSite.service.client';
import {CampingSiteToDetailServiceClient} from './communication-services/camping-site-to-detail.service.client';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    CampingSiteGridComponent,
    SearchBarCampingSiteComponent,
    CampingSiteDetailComponent,
  ],
  imports: [
    BrowserModule,
    routing,
    CarouselModule.forRoot(),  // ngx-bootstrap
    FormsModule
  ],
  providers: [
    CampingSiteServiceClient,
    CampingSiteToDetailServiceClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
