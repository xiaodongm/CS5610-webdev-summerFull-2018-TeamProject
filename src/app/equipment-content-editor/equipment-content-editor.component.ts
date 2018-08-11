import {Component, OnInit, Output, Input, TemplateRef, EventEmitter} from '@angular/core';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {Widget} from '../models/widget.model.client';
import {EquipmentServiceClient} from '../services/equipment.service.client';

@Component({
  selector: 'app-equipment-content-editor',
  templateUrl: './equipment-content-editor.component.html',
  styleUrls: ['./equipment-content-editor.component.css']
})
export class EquipmentContentEditorComponent implements OnInit {

  constructor(private modalService: BsModalService,
              private equipmentService: EquipmentServiceClient) { }
  @Input()
  equipment;
  @Output()
  refreshEmitter = new EventEmitter<any>();
  paragraph;
  list;
  listType = 'unorderedList';
  linkUrl;
  imgUrl;
  heading;
  modalRef: BsModalRef;
  config = {
    animated: true,
    keyboard: true,
    class: 'my-modal'
  };


  featureTags: String[] = ['Tent', 'SleepingBad', 'FlashLight', 'Firewood', 'Knife', 'Axe'];
  refreshEquipments() {
    this.refreshEmitter.emit('refresh equipments');
  }

  toggleFeatureTag(tag) {
    this.equipment.tags.push(tag);
    const index = this.featureTags.indexOf(tag);
    this.featureTags.splice(index, 1);
  }

  toggleEventTag(tag) {
    this.featureTags.push(tag);
    const index = this.equipment.tags.indexOf(tag);
    this.equipment.tags.splice(index, 1);
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService
      .show(template, Object.assign({}, { class: 'my-modal modal-lg modal-dialog-centered' } ));
  }

  deleteEquipment() {

    this.equipmentService.deleteEquipment(this.equipment._id)
      .then(() => this.refreshEquipments());
  }

  confirm(): void {
    console.log('Confirmed!');
    this.equipmentService.updateEquipment(this.equipment)
      .then(() => {
        this.modalRef.hide();
        this.refreshEquipments();
      });
  }
  decline(): void {
    this.modalRef.hide();
    this.refreshEquipments();
  }
  addImageUrl() {
    console.log(this.imgUrl);
    this.equipment.photos.push(this.imgUrl);
    this.imgUrl = '';
  }
  deleteImageUrl(imgUrl) {
    if (this.equipment.photos.includes(imgUrl)) {
      const index = this.equipment.photos.indexOf(imgUrl);
      this.equipment.photos.splice(index, 1);
    }
  }
  addHeading() {
    this.equipment.description.push(new Widget('heading', this.heading));
    this.paragraph = '';
  }
  addParagraph() {
    this.equipment.description.push(new Widget('paragraph', this.paragraph));
    this.paragraph = '';
  }
  addLink() {
    this.equipment.description.push(new Widget('link', this.linkUrl));
  }
  setListType() {
    if (this.listType === 'orderedList') {
      this.listType = 'unorderedList';
    } else {
      this.listType = 'orderedList';
    }
  }
  addList() {
    this.equipment.description.push(new Widget(this.listType, this.list));
  }
  splitList(data) {
    return data.split(/\r?\n/);
  }
  toggleTag(tag) {
    if (this.equipment.tags.includes(tag)) {
      const index = this.equipment.tags.indexOf(tag);
      this.equipment.tags.splice(index, 1);
    } else {
      this.equipment.tags.push(tag);
    }
  }
  updateWidget(event) {
    const oldWidget = event[0];
    const newWidget = event[1];
    const index = this.equipment.description.indexOf(oldWidget);
    this.equipment.description[index] = newWidget;
  }
  deleteWidget(widget) {
    console.log(widget);
    const index = this.equipment.description.indexOf(widget);
    this.equipment.description.splice(index, 1);
    console.log(this.equipment.description);
  }

  ngOnInit() {
    for (let i = 0; i < this.equipment.tags.length; i++) {
      if (this.featureTags.includes(this.equipment.tags[i])) {
        const index = this.featureTags.indexOf(this.equipment.tags[i]);
        this.featureTags.splice(index, 1);
      }
    }
  }

}
