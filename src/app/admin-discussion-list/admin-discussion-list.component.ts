import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {EventServiceClient} from '../services/event.service.client';
import {DiscussionServiceClient} from '../services/discussion.service.client';
import {AlertComponent, BsModalRef, BsModalService} from 'ngx-bootstrap';

@Component({
  selector: 'app-admin-discussion-list',
  templateUrl: './admin-discussion-list.component.html',
  styleUrls: ['./admin-discussion-list.component.css']
})
export class AdminDiscussionListComponent implements OnInit {

  constructor(private eventService: EventServiceClient,
              private discussionService: DiscussionServiceClient,
              private modalService: BsModalService) { }

  events = [];
  discussions = [];
  totalDiscussions = [];
  userType;
  eventId;

  modalRef: BsModalRef;
  alerts = [];
  message;


  userTypeModel = {
    event: 'event',
    discussion: 'discussion'
  };

  @Output() messageEvent = new EventEmitter<string>();

  sendMessage() {
    this.messageEvent.emit(this.message);
  }

  openModal(template) {
    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
  }

  onClosed(dismissedAlert: AlertComponent): void {
    this.alerts = this.alerts.filter(alert => alert !== dismissedAlert);
  }


  log(event) {
    this.eventId = event._id;
    this.discussions = new Array();
    this.discussionService.findDiscussionsForEvent(event._id)
      .then(discussions => {this.discussions = discussions;
      console.log(discussions);
      });
  }

  openEventTab() {
    this.userType = this.userTypeModel.event;
  }

  openDiscussionTab() {
    this.userType = this.userTypeModel.discussion;
  }

  findAllEvents() {
    this.events = new Array();
    this.eventService.findAllEvents()
      .then(events => {
        this.events = events;
      });
  }

  update(discussion) {
    this.discussionService.updateDiscussion(discussion)
      .then(() => {
        this.alerts.push({
          type: 'success',
          msg: `Discussion updated successfully.`,
          timeout: 5000
        });
      });
  }

  delete(discussion) {
    this.discussionService.deleteDiscussion(discussion._id)
      .then(() => {
        this.modalRef.hide();
      })
      .then(() => {
        this.discussionService.findDiscussionsForEvent(this.eventId)
          .then(discussions => this.discussions = discussions);
        this.message = this.discussions.length;
        this.sendMessage();
        this.discussionService.findAllDiscussions()
          .then(discussions => this.totalDiscussions = discussions);
        this.message = this.totalDiscussions.length;
        this.sendMessage();
      });

  }

  deleteTotalDiscussion(discussion) {
    this.discussionService.deleteDiscussion(discussion._id)
      .then(() => {
        this.modalRef.hide();
      })
      .then(() => {
        this.discussionService.findAllDiscussions()
          .then(discussions => this.totalDiscussions = discussions);
        this.message = this.totalDiscussions.length;
        this.sendMessage();
      });
  }

  findAllDiscussions() {
    this.discussionService.findAllDiscussions()
      .then(discussions => {this.totalDiscussions = discussions;
        console.log(this.totalDiscussions);
      });
  }

  ngOnInit() {
    this.findAllEvents();
    this.findAllDiscussions();
  }

}
