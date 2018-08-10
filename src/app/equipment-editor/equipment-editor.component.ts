import {Component, OnInit, TemplateRef} from '@angular/core';
import {EquipmentServiceClient} from '../services/equipment.service.client';
import {UserServiceClient} from '../services/user.service.client';
import {Equipment} from '../models/equipment.model.client';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';

@Component({
  selector: 'app-equipment-editor',
  templateUrl: './equipment-editor.component.html',
  styleUrls: ['./equipment-editor.component.css']
})
export class EquipmentEditorComponent implements OnInit {

  constructor(
              private service: EquipmentServiceClient,
              private userService: UserServiceClient) { }
  isDataLoaded = false;
  equipments: Equipment[] = [];


  refreshEquipments() {
    return this.userService.profile()
      .then((provider) => {
        console.log(provider);
        return this.service.findEquipmentsForProvider(provider._id);
      })
      .then(equipments => {
        console.log(equipments);
        return this.equipments = equipments;
      });

  }
  ngOnInit() {
    this.refreshEquipments()
      .then(() => this.isDataLoaded = true);
  }

}
