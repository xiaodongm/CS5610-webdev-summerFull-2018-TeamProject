import {Component, OnInit, TemplateRef} from '@angular/core';
import {SiteServiceClient} from '../services/site.service.client';
import {ProviderServiceClient} from '../services/provider.service.client';
import {Provider} from '../models/provider.model.client';
import {ActivatedRoute} from '@angular/router';
import {Site} from '../models/site.model.client';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {EventServiceClient} from '../services/event.service.client';
import {UserServiceClient} from '../services/user.service.client';
import {EventCard} from '../models/EventCard.model.client';
import {ReservationServiceClient} from '../services/reservation.service.client';

@Component({
  selector: 'app-site-detail',
  templateUrl: './site-detail.component.html',
  styleUrls: ['./site-detail.component.css']
})
export class SiteDetailComponent implements OnInit {

  constructor(private service: SiteServiceClient,
              private route: ActivatedRoute,
              private userService: UserServiceClient,
              private eventService: EventServiceClient,
              private reservationService: ReservationServiceClient,
              private modalService: BsModalService,
              private providerService: ProviderServiceClient
  ) {
    this.route.params.subscribe(
      params => this.setParams(params));
  }

  isDataAvailable = false;
  site: Site = new Site();
  provider: Provider = new Provider();
  myEvents: EventCard[] = [];
  correspondingReservations = [];
  targetEvent = new EventCard();
  modalRef: BsModalRef;
  config = {
    animated: true,
    keyboard: true,
    class: 'my-modal'
  };

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService
      .show(template, Object.assign({}, { class: 'my-modal modal-lg modal-dialog-centered' } ));
  }

  setParams(params) {
    const siteId = params['siteId'];
    this.service.findSiteById(siteId)
      .then((site) => {
        this.site = site;

        return this.providerService.findProviderById(site.provider);
      })
      .then(provider => {
        this.provider = provider;

        if (!provider.profilePhoto || provider.profilePhoto === '') {
          this.provider.profilePhoto = 'https://images.unsplash.com/photo-' +
            '1495078065017-564723e7e3e7?ixlib=rb-0.3.5&ixid=eyJhcHBfa' +
            'WQiOjEyMDd9&s=09093dcdf66dbcd2397b9dc19384a899&auto=forma' +
            't&fit=crop&w=800&q=60';
        }
        this.isDataAvailable = true;
      });
  }

  refreshSite() {
    this.service.findSiteById(this.site._id)
      .then(site =>
        this.site = site
      );
  }

  loadMyEvents() {
    console.log('load');
    return this.userService.profile()
      .then((curUser) => {
        return this.eventService.findEventsForOrganizer(curUser._id);
      })
      .then((events) => {
        return this.myEvents = events;
      }).then(() => {
        return this.getAllReservations();
      }).then((reserve) => {
        this.correspondingReservations = reserve;
      });

  }

  splitList(data) {
    return data.split(/\r?\n/);
  }

  selectEvent(event) {
    this.targetEvent = event;
  }

  unreserve() {

  }

  getAllReservations(): Promise<any> {
    const promises_array: Array<any> = [];
    for (const event of this.myEvents) {
      promises_array.push(this.reservationService.findReservationsForEvent(event._id));
    }
    return Promise.all(promises_array);
  }

  confirm(): void {

    if (!this.targetEvent._id) {
      this.modalRef.hide();
      return;
    }
    console.log('Confirmed!');
    this.reservationService
      .findReservationsForEvent(this.targetEvent._id)
      .then((reservation) => {

        if (reservation.length > 0) {
          console.log(reservation);
          const r = {
            event: reservation[0].event,
            site: reservation[0].site._id
          }
          console.log(r);
          this.reservationService.unreserveSiteForEvent(r)
            .then((res) => {
              console.log(res);
              const newReservation = {
                event: this.targetEvent._id,
                site: this.site._id
              };
              this.reservationService.reserveSiteForEvent(newReservation)
                .then(() => this.loadMyEvents())
                .then(() =>  this.modalRef.hide());

            });
        } else {
          const newReservation = {
            event: this.targetEvent._id,
            site: this.site._id
          };
          this.reservationService.reserveSiteForEvent(newReservation)
            .then(() => this.loadMyEvents())
            .then(() =>  this.modalRef.hide());
        }

      });

  }

  getCorrespondingSiteTitle(i) {
    if ( this.correspondingReservations[i].length > 0) {
      return this.correspondingReservations[i][0].site.title;
    }
    return '';
  }

  decline(): void {
    this.loadMyEvents()
      .then(() => this.modalRef.hide());
  }
  ngOnInit() {
    this.loadMyEvents();
  }

}
