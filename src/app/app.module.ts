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
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CampingSiteServiceClient} from './services/campingSite.service.client';
import { CampingSiteToDetailServiceClient} from './communication-services/camping-site-to-detail.service.client';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProfileComponent } from './profile/profile.component';
import { BasicInformationComponent } from './basic-information/basic-information.component';
import { EventWaterfallComponent } from './event-waterfall/event-waterfall.component';
import { EventCardComponent } from './event-card/event-card.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { UserServiceClient} from './services/user.service.client';
import { MapServiceClient} from './services/map.service.client';
import { FriendListComponent } from './friend-list/friend-list.component';
import { EventServiceClient} from './services/event.service.client';
import { EnrollmentServiceClient} from './services/enrollment.service.client';

import { NgxMasonryModule} from 'ngx-masonry';
import { BsDatepickerModule } from 'ngx-bootstrap';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { EventEditorComponent, SafePipe} from './event-editor/event-editor.component';
import { CreateEventComponent } from './create-event/create-event.component';
import { EventDescriptionWidgetEditorComponent } from './event-description-widget-editor/event-description-widget-editor.component';
import { SortablejsModule} from 'angular-sortablejs';
import { OrganizationSignUpComponent } from './organization-sign-up/organization-sign-up.component';
import { BsDropdownModule } from 'ngx-bootstrap';
import { AttendeeListComponent } from './attendee-list/attendee-list.component';
import { ProviderServiceClient} from './services/provider.service.client';
import { LoginToNavbarServiceClient} from './communication-services/login-to-navbar.service.client';
import { AdminComponent } from './admin/admin.component';
import { UserListComponent } from './user-list/user-list.component';
import { AccordionModule } from 'ngx-bootstrap';
import { DiscussionBoardComponent } from './discussion-board/discussion-board.component';
import { DiscussionServiceClient} from './services/discussion.service.client';
import { DiscussionComponent } from './discussion/discussion.component';
import { ProfileForVisitorComponent } from './profile-for-visitor/profile-for-visitor.component';
import { EventsListForProfileComponent } from './events-list-for-profile/events-list-for-profile.component';
import { EventCardForProfileComponent } from './event-card-for-profile/event-card-for-profile.component';
import { DiscussionListForProfileComponent } from './discussion-list-for-profile/discussion-list-for-profile.component';
import { SiteListForProfileComponent } from './site-list-for-profile/site-list-for-profile.component';
import { CreateSiteComponent } from './create-site/create-site.component';
import { CreateEquipmentComponent } from './create-equipment/create-equipment.component';
import { EquipmentEditorComponent } from './equipment-editor/equipment-editor.component';
import { EquipmentServiceClient} from './services/equipment.service.client';
import { EquipmentContentEditorComponent } from './equipment-content-editor/equipment-content-editor.component';
import { SiteServiceClient} from './services/site.service.client';
import { SiteEditorComponent } from './site-editor/site-editor.component';
import { SiteDetailComponent } from './site-detail/site-detail.component';
import { AdminEventListComponent } from './admin-event-list/admin-event-list.component';
import { AdminEquipmentListComponent } from './admin-equipment-list/admin-equipment-list.component';
import { ReservationServiceClient} from './services/reservation.service.client';
import { RentingListForProfileComponent } from './renting-list-for-profile/renting-list-for-profile.component';
import { AdminDiscussionListComponent } from './admin-discussion-list/admin-discussion-list.component';
import { EventMainListComponent } from './event-main-list/event-main-list.component';
import { EventMainListRowComponent } from './event-main-list-row/event-main-list-row.component';
import { EventMainListRowCardComponent } from './event-main-list-row-card/event-main-list-row-card.component';
import { AdminSiteListComponent } from './admin-site-list/admin-site-list.component';
import { FooterComponent } from './footer/footer.component';
import { EpuipmentListForProfileComponent } from './epuipment-list-for-profile/epuipment-list-for-profile.component';
import { SiteListComponent } from './site-list/site-list.component';
import { SiteListCardComponent } from './site-list-card/site-list-card.component';


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
    ProfileForVisitorComponent,
    EventsListForProfileComponent,
    EventCardForProfileComponent,
    DiscussionListForProfileComponent,
    SiteListForProfileComponent,
    CreateSiteComponent,
    CreateEquipmentComponent,
    EquipmentEditorComponent,
    EquipmentContentEditorComponent,
    SiteEditorComponent,
    SiteDetailComponent,
    AdminEventListComponent,
    AdminEquipmentListComponent,
    RentingListForProfileComponent,
    AdminDiscussionListComponent,
    EventMainListComponent,
    EventMainListRowComponent,
    EventMainListRowCardComponent,
    AdminSiteListComponent,
    FooterComponent,
    EpuipmentListForProfileComponent,
    SiteListComponent,
    SiteListCardComponent,
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
