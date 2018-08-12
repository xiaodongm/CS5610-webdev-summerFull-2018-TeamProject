import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'app-events-list-for-profile',
  templateUrl: './events-list-for-profile.component.html',
  styleUrls: ['./events-list-for-profile.component.css']
})

export class EventsListForProfileComponent implements OnInit {

  constructor() { }

  @Input() type;
  @Input() events;
  @Input() isSame;
  @Output() messageEvent: EventEmitter<Object> = new EventEmitter();

  receiveEvents($event) {
    this.messageEvent.emit($event);
  }

  ngOnInit() {
    if (this.type === 'pa') {
      let temp = [];
      this.events.forEach(enrollment => {
        temp.push(enrollment.event);
      });
      this.events = temp;
    }
  }

}

