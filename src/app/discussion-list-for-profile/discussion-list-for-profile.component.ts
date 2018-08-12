import { Component, OnInit, Input } from '@angular/core';
import {DiscussionServiceClient} from '../services/discussion.service.client';

@Component({
  selector: 'app-discussion-list-for-profile',
  templateUrl: './discussion-list-for-profile.component.html',
  styleUrls: ['./discussion-list-for-profile.component.css']
})
export class DiscussionListForProfileComponent implements OnInit {

  @Input() discussions;
  @Input()isSame;
  @Input() userId

  constructor(private discussionService: DiscussionServiceClient) {}

  ngOnInit() {
  }

  delete(discussionId) {
    this.discussionService
      .deleteDiscussion(discussionId)
      .then(() => {
        this.discussionService
          .findDiscussionForUser(this.userId)
          .then(discussions => {
            if (discussions.error) {
              alert(discussions.error);
              return;
            } else {
              this.discussions = discussions;
            }
          });
      });
  }

}
