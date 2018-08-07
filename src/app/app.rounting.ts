import { Routes, RouterModule } from '@angular/router';
import {HomePageComponent} from './home-page/home-page.component';
import {CampingSiteDetailComponent} from './camping-site-detail/camping-site-detail.component';
import {HomeComponent} from './home/home.component';
import {ProfileComponent} from './profile/profile.component';
import {RegisterComponent} from './register/register.component';



const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'profile', component: ProfileComponent},
  { path: 'homepage', component: HomePageComponent},
  { path: 'camping-site/:contractID/:facilityID/detail', component: CampingSiteDetailComponent},
  { path: 'detail', component: CampingSiteDetailComponent},
  { path: '**', component: HomeComponent},

];

export const routing = RouterModule.forRoot(appRoutes);
