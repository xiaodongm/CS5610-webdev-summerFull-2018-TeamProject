import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {EquipmentServiceClient} from '../services/equipment.service.client';

@Component({
  selector: 'app-epuipment-list-for-profile',
  templateUrl: './epuipment-list-for-profile.component.html',
  styleUrls: ['./epuipment-list-for-profile.component.css']
})
export class EpuipmentListForProfileComponent implements OnInit {
  @Input() equips;
  @Input() isSame;
  @Input() user;
  @Output() messageEvent: EventEmitter<Object> = new EventEmitter();

  constructor(private equipmentService: EquipmentServiceClient) { }

  ngOnInit() {
  }

  deleteEquip(equipId, providerId) {
    if (confirm('Are you sure to delete this equipment? All the renting record of this equipment will be deleted automatically!')) {
      this.equipmentService
        .deleteEquipment(equipId)
        .then((res) => {
          this.equipmentService
            .findEquipmentsForProvider(this.user._id)
            .then(equips => {
              this.messageEvent.emit(equips);
            });
        });
    }
  }
}
