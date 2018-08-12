import {Component, Input, OnInit, TemplateRef} from '@angular/core';
import {SiteServiceClient} from '../services/site.service.client';
import {Site} from '../models/site.model.client';
import {EquipmentServiceClient} from '../services/equipment.service.client';
import {Equipment} from '../models/equipment.model.client';
import {DomSanitizer} from '@angular/platform-browser';
import {ProviderServiceClient} from '../services/provider.service.client';
import {Provider} from '../models/provider.model.client';
import {Router} from '@angular/router';
import {dates, months} from '../constants/dateConstant';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {UserServiceClient} from '../services/user.service.client';
import {EventServiceClient} from '../services/event.service.client';
import {EventCard} from '../models/EventCard.model.client';

@Component({
  selector: 'app-equipment-list-card',
  templateUrl: './equipment-list-card.component.html',
  styleUrls: ['./equipment-list-card.component.css']
})
export class EquipmentListCardComponent implements OnInit {

  constructor(public sanitizer: DomSanitizer,
              private router: Router,
              private userService: UserServiceClient,
              private eventService: EventServiceClient,
              private modalService: BsModalService,
              private service: ProviderServiceClient) { }
  inImage = false;
  hasExtraInfo = false;
  slideIndex = 0;
  rentNumber = 1;
  myEvents: EventCard[] = [];
  targetEvent: EventCard = new EventCard();
  provider = new Provider();
  @Input() data: Equipment;
  modalRef: BsModalRef;
  config = {
    animated: true,
    keyboard: true,
    class: 'my-modal'
  };

  splitList(data) {
    return data.split(/\r?\n/);
  }

  selectEvent(event) {
    this.targetEvent = event;
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService
      .show(template, Object.assign({}, { class: 'my-modal modal-lg modal-dialog-centered' } ));
  }


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
        console.log(provider);
        if (!provider.profilePhoto || provider.profilePhoto === '') {
          provider.profilePhoto = 'https://images.unsplash.com/photo-' +
            '1495078065017-564723e7e3e7?ixlib=rb-0.3.5&ixid=eyJhcHBfa' +
            'WQiOjEyMDd9&s=09093dcdf66dbcd2397b9dc19384a899&auto=forma' +
            't&fit=crop&w=800&q=60';
        }
        return this.provider = provider;
      });
  }

  confirm(): void {

    if (!this.targetEvent._id) {
      this.modalRef.hide();
      return;
    }
    // console.log('Confirmed!');
    // this.reservationService
    //   .findReservationsForEvent(this.targetEvent._id)
    //   .then((reservation) => {
    //
    //     if (reservation.length > 0) {
    //       console.log(reservation);
    //       const r = {
    //         event: reservation[0].event,
    //         site: reservation[0].site._id
    //       }
    //       console.log(r);
    //       this.reservationService.unreserveSiteForEvent(r)
    //         .then((res) => {
    //           console.log(res);
    //           const newReservation = {
    //             event: this.targetEvent._id,
    //             site: this.site._id
    //           };
    //           this.reservationService.reserveSiteForEvent(newReservation)
    //             .then(() => this.loadMyEvents())
    //             .then(() =>  this.modalRef.hide());
    //
    //         });
    //     } else {
    //       const newReservation = {
    //         event: this.targetEvent._id,
    //         site: this.site._id
    //       };
    //       this.reservationService.reserveSiteForEvent(newReservation)
    //         .then(() => this.loadMyEvents())
    //         .then(() =>  this.modalRef.hide());
    //     }
    //
    //   });

  }

  loadMyEvents() {
    console.log('load');
    return this.userService.profile()
      .then((curUser) => {
        return this.eventService.findEventsForOrganizer(curUser._id);
      })
      .then((events) => {
        return this.myEvents = events;
      });

  }

  decline(): void {
    this.loadMyEvents()
      .then(() => this.modalRef.hide());
  }

  ngOnInit() {
    console.log(this.data);
    this.getProvider()
      .then(() => this.loadMyEvents());
  }



}
