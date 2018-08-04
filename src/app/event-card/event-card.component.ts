import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.css']
})
export class EventCardComponent implements OnInit {

  constructor() { }
  inImage = false;
  hasExtraInfo = true;
  photos = ['https://images.unsplash.com/' +
    'photo-1533165743100-747acf5435f3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOj' +
    'EyMDd9&s=0270c742dd5dba0c2855f69e69831e1f&auto=format&fit=crop&w=700&q=60',
    'https://images.unsplash.com/photo-1533170033673-325df395d058?ixlib=rb-0.3.5' +
    '&ixid=eyJhcHBfaWQiOjEyMDd9&s=232566d9765e15bfb5cd22a7448803f9&auto=format' +
    '&fit=crop&w=700&q=60',
  ];
  mouseEnter() {
    console.log('in');
    this.inImage = true;
  }

  mouseLeave() {
    console.log('out');
    this.inImage = false;
  }

  ngOnInit() {
  }

}
