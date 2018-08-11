import { Component, OnInit } from '@angular/core';
import {EventServiceClient} from '../services/event.service.client';
import {UserServiceClient} from '../services/user.service.client';
import {EventCard} from '../models/EventCard.model.client';
import {Router} from '@angular/router';
import {Widget} from '../models/widget.model.client';
import {Equipment} from '../models/equipment.model.client';
import {EquipmentServiceClient} from '../services/equipment.service.client';

@Component({
  selector: 'app-create-equipment',
  templateUrl: './create-equipment.component.html',
  styleUrls: ['./create-equipment.component.css']
})
export class CreateEquipmentComponent implements OnInit {

  constructor(private router: Router,
              private service: EquipmentServiceClient,
              private userService: UserServiceClient) { }
  location;
  isCollapsed1 = true;
  isCollapsed2 = true;
  isCollapsed3 = true;
  tags = [];
  title;
  paragraph;
  quantity;

  featureTags: String[] = ['Waterproof', 'HighQuality', 'Dustproof', 'EasySetup', 'SkinProtection', 'LightWeight', 'LongLasting'];

  toggleFeatureTag(tag) {
    this.tags.push(tag);
    const index = this.featureTags.indexOf(tag);
    this.featureTags.splice(index, 1);
  }

  toggleEventTag(tag) {
    this.featureTags.push(tag);
    const index = this.tags.indexOf(tag);
    this.tags.splice(index, 1);
  }


  createEquipment() {
    let curUser;
    this.userService.profile()
      .then(res => curUser = res)
      .then(  () => {
        if (curUser.role !== 'EquipmentDealer') {
          alert('must be a provider to do this!');
          this.router.navigateByUrl('/profile');
          return;
        }
        const newEquipment = new Equipment();
        newEquipment.title = this.title;
        newEquipment.provider = curUser._id;
        newEquipment.quantity = this.quantity;
        newEquipment.available = this.quantity;
        newEquipment.tags = this.tags;
        newEquipment.description = [];
        newEquipment.description.push(new Widget('paragraph', this.paragraph));
        // console.log(newEvent);
        this.service.createEquipment(newEquipment);
      }).then(() => this.router.navigateByUrl('/profile') );

  }
  ngOnInit() {
  }

}
