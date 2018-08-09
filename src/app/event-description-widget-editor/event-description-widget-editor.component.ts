import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Widget} from '../models/widget.model.client';

@Component({
  selector: 'app-event-description-widget-editor',
  templateUrl: './event-description-widget-editor.component.html',
  styleUrls: ['./event-description-widget-editor.component.css']
})
export class EventDescriptionWidgetEditorComponent implements OnInit {

  constructor() { }
  @Input() widget: Widget;
  @Output()
  deleteEmitter = new EventEmitter<any>();
  @Output()
  editEmitter = new EventEmitter<any>();
  isEditorHidden = true;
  newWidget: Widget = new Widget('paragraph', '');
  splitList(data) {
    return data.split(/\r?\n/);
  }
  setListType() {
    if (this.newWidget.type === 'unorderedList') {
      this.newWidget.type = 'orderedList';
    } else {
      this.newWidget.type = 'unorderedList';
    }
  }
  editWidget() {
    this.isEditorHidden = !this.isEditorHidden;
    this.newWidget.type = this.widget.type;
    this.newWidget.data = this.widget.data;
  }
  updateWidget() {
    this.editEmitter.emit([this.widget, this.newWidget]);
  }
  deleteWidget(widget) {
    this.deleteEmitter.emit(widget);
  }
  ngOnInit() {
    // this.newWidget.type = this.widget.type;
    // this.newWidget.data = this.widget.data;
  }

}
