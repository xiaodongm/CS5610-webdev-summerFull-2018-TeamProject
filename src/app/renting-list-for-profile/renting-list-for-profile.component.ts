import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {ReservationServiceClient} from '../services/reservation.service.client';
import {EquipmentRentingServiceClient} from '../services/equipmentRenting.service.client';

@Component({
  selector: 'app-renting-list-for-profile',
  templateUrl: './renting-list-for-profile.component.html',
  styleUrls: ['./renting-list-for-profile.component.css']
})
export class RentingListForProfileComponent implements OnInit {
  @Input() isSame;
  @Input() rentings;
  @Input() user;
  @Output() messageEvent: EventEmitter<Object> = new EventEmitter();

  constructor(private reservationService: ReservationServiceClient,
              private equipmentRentingService: EquipmentRentingServiceClient) { }

  ngOnInit() {
    console.log(this.rentings);
  }

  delete(reservation) {
    if (confirm('Are you sure to delete this reservation/renting ?')) {
      if (this.user.role === 'SiteManager') {
        const real = {
          event: reservation.event._id,
          site: reservation.site._id
        }
        console.log(real);
        this.reservationService
          .unreserveSiteForEvent(real)
          .then(() => {
            this.reservationService.findReservationsForProvider(this.user._id)
              .then(reservations => this.messageEvent.emit(reservations));
          });
      } else {
        const real = {
          _id: reservation._id,
          event: reservation.event._id,
          equipment: reservation.equipment._id,
          quantity: reservation.quantity
        }
          this.equipmentRentingService
            .returnEquipForEvent(real)
            .then((res) => {
              console.log(res);
              this.equipmentRentingService
                .findRentingsForEquipment(this.user._id).then(rentings => this.messageEvent.emit(rentings));
            });
      }
    }
  }
}
