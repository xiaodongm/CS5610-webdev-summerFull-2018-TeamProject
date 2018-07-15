import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import {routing} from './app.rounting';
import {CampingSiteGridComponent} from './camping-site-grid/camping-site-grid.component';
import { SearchBarCampgroundComponent } from './search-bar-campground/search-bar-campground.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CampingSiteServiceClient} from './services/campingSite.service.client';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    CampingSiteGridComponent,
    SearchBarCampgroundComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule
  ],
  providers: [CampingSiteServiceClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
