import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import {routing} from './app.rounting';
import {CampingSiteGridComponent} from './camping-site-grid/camping-site-grid.component';

import { CampingSiteDetailComponent } from './camping-site-detail/camping-site-detail.component';

// third part imports
import { CarouselModule } from 'ngx-bootstrap/carousel';


import { SearchBarCampgroundComponent } from './search-bar-campground/search-bar-campground.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    CampingSiteGridComponent,
    CampingSiteDetailComponent,
    SearchBarCampgroundComponent,
  ],
  imports: [
    BrowserModule,
    routing,
    CarouselModule.forRoot(),  // ngx-bootstrap
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
