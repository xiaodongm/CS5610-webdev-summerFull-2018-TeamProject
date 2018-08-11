import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
// import { CampingSiteSearchComponent } from './camping-site-search/camping-site-search.component';
import {CampingSiteSearchComponent} from './camping-site-search/camping-site-search.component';
import {routing} from './app.rounting';
import {CampingSiteGridComponent} from './camping-site-grid/camping-site-grid.component';

import { CampingSiteDetailComponent } from './camping-site-detail/camping-site-detail.component';

// third part imports
import { CarouselModule } from 'ngx-bootstrap/carousel';
import {CollapseModule, ModalModule, TabsModule} from 'ngx-bootstrap';
import { AlertModule } from 'ngx-bootstrap';
import { SearchBarCampingSiteComponent } from './search-bar-campground/search-bar-camping-site.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CampingSiteServiceClient} from './services/campingSite.service.client';
import {CampingSiteToDetailServiceClient} from './communication-services/camping-site-to-detail.service.client';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProfileComponent } from './profile/profile.component';
import { BasicInformationComponent } from './basic-information/basic-information.component';
import { EventWaterfallComponent } from './event-waterfall/event-waterfall.component';
import { EventCardComponent } from './event-card/event-card.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import {UserServiceClient} from './services/user.service.client';
import {MapServiceClient} from './services/map.service.client';
import { FriendListComponent } from './friend-list/friend-list.component';
import { EventServiceClient} from './services/event.service.client';
import {EnrollmentServiceClient} from './services/enrollment.service.client';

import { NgxMasonryModule} from 'ngx-masonry';
import { BsDatepickerModule } from 'ngx-bootstrap';
import { EventDetailComponent } from './event-detail/event-detail.component';
import {EventEditorComponent, SafePipe} from './event-editor/event-editor.component';
import { CreateEventComponent } from './create-event/create-event.component';
import { EventDescriptionWidgetEditorComponent } from './event-description-widget-editor/event-description-widget-editor.component';
import {SortablejsModule} from 'angular-sortablejs';
import { OrganizationSignUpComponent } from './organization-sign-up/organization-sign-up.component';
import { BsDropdownModule } from 'ngx-bootstrap';
import { AttendeeListComponent } from './attendee-list/attendee-list.component';
import {ProviderServiceClient} from './services/provider.service.client';
import {LoginToNavbarServiceClient} from './communication-services/login-to-navbar.service.client';
import { AdminComponent } from './admin/admin.component';
import { UserListComponent } from './user-list/user-list.component';
import { AccordionModule } from 'ngx-bootstrap';
import { DiscussionBoardComponent } from './discussion-board/discussion-board.component';
import {DiscussionServiceClient} from './services/discussion.service.client';
import { DiscussionComponent } from './discussion/discussion.component';
import { CreateSiteComponent } from './create-site/create-site.component';
import { CreateEquipmentComponent } from './create-equipment/create-equipment.component';
import { EquipmentEditorComponent } from './equipment-editor/equipment-editor.component';
import {EquipmentServiceClient} from './services/equipment.service.client';
import { EquipmentContentEditorComponent } from './equipment-content-editor/equipment-content-editor.component';
import {SiteServiceClient} from './services/site.service.client';
import { SiteEditorComponent } from './site-editor/site-editor.component';
import { SiteDetailComponent } from './site-detail/site-detail.component';
import { AdminEventListComponent } from './admin-event-list/admin-event-list.component';
import { AdminEquipmentListComponent } from './admin-equipment-list/admin-equipment-list.component';
import {ReservationServiceClient} from './services/reservation.service.client';





@NgModule({
  declarations: [
    AppComponent,
    CampingSiteSearchComponent,
    CampingSiteGridComponent,
    SearchBarCampingSiteComponent,
    CampingSiteDetailComponent,
    HomeComponent,
    NavbarComponent,
    ProfileComponent,
    BasicInformationComponent,
    EventWaterfallComponent,
    EventCardComponent,
    RegisterComponent,
    LoginComponent,
    EventDetailComponent,
    EventEditorComponent,
    CreateEventComponent,
    SafePipe,
    EventDescriptionWidgetEditorComponent,
    FriendListComponent,
    OrganizationSignUpComponent,
    AttendeeListComponent,
    AdminComponent,
    UserListComponent,
    DiscussionBoardComponent,
    DiscussionComponent,
    CreateSiteComponent,
    CreateEquipmentComponent,
    EquipmentEditorComponent,
    EquipmentContentEditorComponent,
    SiteEditorComponent,
    SiteDetailComponent,
    AdminEventListComponent,
    AdminEquipmentListComponent,

  ],
  imports: [
    BrowserModule,
    routing,
    CarouselModule.forRoot(),  // ngx-bootstrap
    ModalModule.forRoot(),
    AlertModule.forRoot(),
    BsDatepickerModule.forRoot(),
    CollapseModule.forRoot(),
    BsDropdownModule.forRoot(),
    AccordionModule.forRoot(),
    FormsModule,
    NgxMasonryModule,
    CollapseModule.forRoot(),
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    SortablejsModule.forRoot({ animation: 150 }),
    BsDatepickerModule.forRoot()
  ],
  providers: [
    CampingSiteServiceClient,
    CampingSiteToDetailServiceClient,
    UserServiceClient,
    MapServiceClient,
    EventServiceClient,
    EnrollmentServiceClient,
    ProviderServiceClient,
    LoginToNavbarServiceClient,
    DiscussionServiceClient,
    EquipmentServiceClient,
    SiteServiceClient,
    ReservationServiceClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
