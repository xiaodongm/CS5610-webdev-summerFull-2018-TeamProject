import { Component, OnInit } from '@angular/core';
import {EquipmentServiceClient} from '../services/equipment.service.client';
import {Equipment} from '../models/equipment.model.client';

@Component({
  selector: 'app-equipment-list',
  templateUrl: './equipment-list.component.html',
  styleUrls: ['./equipment-list.component.css']
})
export class EquipmentListComponent implements OnInit {

  constructor(private service: EquipmentServiceClient) { }

  equipments: Equipment[] = [];

  loadEquipments() {

    return this.service.findAllEquipments()
      .then((equipments) => {
        equipments.forEach(equipment => {
          // console.log(event);
          if (equipment.photos.length === 0) {
            equipment.photos.push('https://images.unsplash.com/p' +
              'hoto-1493244040629-496f6d136cc4?ixlib=rb-0.3.5&ixi' +
              'd=eyJhcHBfaWQiOjEyMDd9&s=e0e94d283d8461fa30ef9e7f9' +
              '32b41b5&auto=format&fit=crop&w=800&q=60');
          }
        });
        this.equipments = equipments;
      });

  }
  ngOnInit() {
    this.loadEquipments();
  }

}
