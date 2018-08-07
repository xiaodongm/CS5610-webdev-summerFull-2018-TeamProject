import { Component, OnInit, TemplateRef, Input } from '@angular/core';
import { BsModalRef} from 'ngx-bootstrap';
import {BsModalService} from 'ngx-bootstrap';
import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser';
import {Widget} from '../models/widget.model.client';
import {ViewEncapsulation} from '@angular/core';
import {EventCard} from '../models/EventCard.model.client';

@Pipe({ name: 'safe' })
export class SafePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}
  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}

@Component({
  selector: 'app-event-editor',
  templateUrl: './event-editor.component.html',
  styleUrls: ['./event-editor.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class EventEditorComponent implements OnInit {

  constructor(private modalService: BsModalService) {
  }
  @Input() event: EventCard;
  // event: EventCard = new EventCard();
  paragraph: string;
  imgUrl: string;
  linkUrl: string;
  list = '';
  listType = 'unorderedList';
  message: string;
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
  confirm(): void {
    this.message = 'Confirmed!';
    console.log('Confirmed!');
    this.modalRef.hide();
  }
  decline(): void {
    this.message = 'Declined!';

    console.log('Declined!');
    this.modalRef.hide();
  }
  addImageUrl() {
    console.log(this.imgUrl);
    this.event.photos.push(this.imgUrl);
    this.imgUrl = '';
  }
  deleteImageUrl(imgUrl) {
    if (this.event.photos.includes(imgUrl)) {
      const index = this.event.photos.indexOf(imgUrl);
      this.event.photos.splice(index, 1);
    }
  }
  addParagraph() {
    this.event.descriptions.push(new Widget('paragraph', this.paragraph));
    this.paragraph = '';
  }
  addLink() {
    this.event.descriptions.push(new Widget('link', this.linkUrl));
  }
  setListType() {
    if (this.listType === 'orderedList') {
      this.listType = 'unorderedList';
    } else {
      this.listType = 'orderedList';
    }
  }
  addList() {
    this.event.descriptions.push(new Widget(this.listType, this.list));
  }
  splitList(data) {
    return data.split(/\r?\n/);
  }
  toggleTag(tag) {
    if (this.event.tags.includes(tag)) {
      const index = this.event.tags.indexOf(tag);
      this.event.tags.splice(index, 1);
    } else {
      this.event.tags.push(tag);
    }
  }
  updateWidget(event) {
    const oldWidget = event[0];
    const newWidget = event[1];
    const index = this.event.descriptions.indexOf(oldWidget);
    this.event.descriptions[index] = newWidget;
  }
  deleteWidget(widget) {
    console.log(widget);
    const index = this.event.descriptions.indexOf(widget);
    this.event.descriptions.splice(index, 1);
    console.log(this.event.descriptions);
  }
  ngOnInit() {
  }
}


