import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef} from 'ngx-bootstrap';
import {BsModalService} from 'ngx-bootstrap';
import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser';
import {Widget} from '../models/widget.model.client';

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
  styleUrls: ['./event-editor.component.css']
})
export class EventEditorComponent implements OnInit {

  constructor(private modalService: BsModalService) {
  }
  eventTitle: string;
  eventStart: Date;
  eventEnd: Date;
  paragraph: string;
  imgUrl: string;
  images = [];
  linkUrl: string;
  videoUrl: string;
  list = '';
  listType = 'unorderedList';
  message: string;
  tags = [];
  descriptions: Widget[] = [];
  modalRef: BsModalRef;
  config = {
    keyboard: true,
    class: 'modal-lg'
  };
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, this.config);
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
    this.images.push(this.imgUrl);
  }
  deleteImageUrl(imgUrl) {
    if (this.images.includes(imgUrl)) {
      const index = this.images.indexOf(imgUrl);
      this.images.splice(index, 1);
    }
  }
  addParagraph() {
    this.descriptions.push(new Widget('paragraph', this.paragraph));
    this.paragraph = '';
  }
  addLink() {
    this.descriptions.push(new Widget('link', this.linkUrl));
  }
  setListType() {
    if (this.listType === 'orderedList') {
      this.listType = 'unorderedList';
    } else {
      this.listType = 'orderedList';
    }
  }
  addList() {
    this.descriptions.push(new Widget(this.listType, this.list));
  }
  splitList(data) {
    return data.split(/\r?\n/);
  }
  toggleTag(tag) {
    if (this.tags.includes(tag)) {
      const index = this.tags.indexOf(tag);
      this.tags.splice(index, 1);
    } else {
      this.tags.push(tag);
    }
  }
  ngOnInit() {
  }
}


