import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {

  constructor(private router: Router) { }
  campSite;
  isCollapsed1 = true;
  isCollapsed2 = true;
  isCollapsed3 = true;
  tags = [];
  title;
  paragraph;
  eventStart: Date;
  eventEnd: Date;
  toggleTag(tag) {
    if (this.tags.includes(tag)) {
      const index = this.tags.indexOf(tag);
        this.tags.splice(index, 1);
    } else {
      this.tags.push(tag);
    }
  }
  createEvent(){
    this.router.navigateByUrl('/eventDetail');
  }
  ngOnInit() {
  }

}
