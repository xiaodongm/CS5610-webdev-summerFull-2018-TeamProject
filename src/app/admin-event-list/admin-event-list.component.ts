import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AlertComponent, BsModalRef, BsModalService} from 'ngx-bootstrap';
import {EventServiceClient} from '../services/event.service.client';
import {EventCard} from '../models/EventCard.model.client';
import {Widget} from '../models/widget.model.client';
import {UserServiceClient} from '../services/user.service.client';

@Component({
  selector: 'app-admin-event-list',
  templateUrl: './admin-event-list.component.html',
  styleUrls: ['./admin-event-list.component.css']
})
export class AdminEventListComponent implements OnInit {

  constructor(private eventService: EventServiceClient,
              private modalService: BsModalService,
              private userService: UserServiceClient) { }

  relaxEvents = [];
  trainingEvents = [];
  adventureEvents = [];

  newEvent = new EventCard();

  eventType;
  preLevel;
  modalRef: BsModalRef;
  message;

  eventTypeModel = {
    relax: 'Relax',
    training: 'Training',
    adventure: 'Adventure',
    admin: 'admin'
  };

  alerts = [];

  @Output() messageEvent = new EventEmitter<string>();

  sendMessage() {
    this.messageEvent.emit(this.message);
  }

  openModal(template) {
    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
  }

  delete(event) {
    this.eventService.deleteEvent(event._id)
      .then(() => this.modalRef.hide())
      .then(() => {
        this.findAllRelaxEvents();
        this.findAllTrainingEvents();
        this.findAllAdventureEvents();
        this.message = this.relaxEvents.length + this.trainingEvents.length + this.adventureEvents.length;
        this.sendMessage();
      });
  }

  update(event) {
    console.log(event);
    if (event.level === 'Relax' || event.level === 'Training' || event.level === 'Adventure') {
      this.eventService.updateEvent(event)
        .then(() => {
          this.alerts.push({
            type: 'success',
            msg: `Event info updated successfully.`,
            timeout: 5000
          });
          console.log(this.preLevel);
          console.log(event.level);
          if (this.preLevel !== event.level) {
            this.findAllRelaxEvents();
            this.findAllTrainingEvents();
            this.findAllAdventureEvents();
          }
        });
    } else {
      this.alerts.push({
        type: 'danger',
        msg: `Invalid level input, can only be 'Relax' or 'Training' or 'Adventure'.`,
        timeout: 8000
      });
    }
  }


  log(event) {
    this.preLevel = event.level;
  }

  onClosed(dismissedAlert: AlertComponent): void {
    this.alerts = this.alerts.filter(alert => alert !== dismissedAlert);
  }

  openRelaxTab() {
    this.eventType = this.eventTypeModel.relax;
  }

  openTrainingTab() {
    this.eventType = this.eventTypeModel.training;
  }

  openAdventureTab() {
    this.eventType = this.eventTypeModel.adventure;
  }

  openCreateEventTab() {
    this.eventType = this.eventTypeModel.admin;
  }

  findAllRelaxEvents() {
    this.relaxEvents = new Array();
    this.eventService.findAllEvents()
      .then(events => {
        for (let i = 0; i < events.length; i++) {
          if (events[i].level === 'Relax') {
            this.relaxEvents.push(events[i]);
          }
        }
      });
  }

  findAllTrainingEvents() {
    this.trainingEvents = new Array();
    this.eventService.findAllEvents()
      .then(events => {
        for (let i = 0; i < events.length; i++) {
          if (events[i].level === 'Training') {
            this.trainingEvents.push(events[i]);
          }
        }
      });
  }

  findAllAdventureEvents() {
    this.adventureEvents = new Array();
    this.eventService.findAllEvents()
      .then(events => {
        for (let i = 0; i < events.length; i++) {
          if (events[i].level === 'Adventure') {
            this.adventureEvents.push(events[i]);
          }
        }
      });
  }

  // createEvent(event) {
  //   let curUser;
  //   this.userService.profile()
  //     .then(() => {
  //       this.eventService.createEvent(event)
  //         .then(() => {
  //           this.findAllRelaxEvents();
  //           this.findAllTrainingEvents();
  //           this.findAllAdventureEvents();
  //           this.message = this.relaxEvents.length + this.trainingEvents.length + this.adventureEvents.length;
  //           this.sendMessage();
  //           this.alerts.push({
  //             type: 'success',
  //             msg: `Event Created successfully.`,
  //             timeout: 5000
  //           });
  //         });
  //     });
  // }

  createEvent() {
    let curUser;
    this.userService.profile()
      .then(res => curUser = res)
      .then(  () => {
        const newEvent = new EventCard();
        newEvent.title = this.newEvent.title;
        newEvent.organizer = curUser._id;
        newEvent.startTime = this.newEvent.startTime;
        newEvent.endTime = this.newEvent.endTime;
        newEvent.level = this.newEvent.level;
        this.eventService.createEvent(newEvent);
      }).then(() => {
      this.findAllRelaxEvents();
      this.findAllTrainingEvents();
      this.findAllAdventureEvents();
      this.message = this.relaxEvents.length + this.trainingEvents.length + this.adventureEvents.length;
      this.sendMessage();
      this.alerts.push({
        type: 'success',
        msg: `Event Created successfully.`,
        timeout: 5000
      });
    });

  }


  ngOnInit() {
    this.findAllRelaxEvents();
    this.findAllTrainingEvents();
    this.findAllAdventureEvents();
  }

}
