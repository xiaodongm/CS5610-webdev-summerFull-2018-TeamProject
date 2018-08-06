import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef} from 'ngx-bootstrap';
import {BsModalService} from 'ngx-bootstrap';
import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser';

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
  listItems = [];
  item: string;
  message: string;
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
  addListItem() {
    this.listItems.push(this.item);
  }
  ngOnInit() {
  }
}


