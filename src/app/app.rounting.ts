import { Routes, RouterModule } from '@angular/router';
import {HomePageComponent} from './home-page/home-page.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomePageComponent},
  { path: 'camping-site/:contractID/:facilityID', component: HomePageComponent},
  { path: '**', component: HomePageComponent}
];

export const routing = RouterModule.forRoot(appRoutes);
