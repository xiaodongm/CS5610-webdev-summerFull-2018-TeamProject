import {Component, EventEmitter, OnInit, Input} from '@angular/core';
import {DiscussionServiceClient} from '../services/discussion.service.client';
import {UserServiceClient} from '../services/user.service.client';

@Component({
  selector: 'app-discussion-board',
  templateUrl: './discussion-board.component.html',
  styleUrls: ['./discussion-board.component.css']
})
export class DiscussionBoardComponent implements OnInit {

  constructor(private service: DiscussionServiceClient,
              private userService: UserServiceClient) { }

  discussions = [];

  @Input() eventId;

  newContent;

  curUser;

  ngOnInit() {
    this.findAllDiscussions();
    this.userService
      .profile()
      .then(res => this.curUser = res);
  }

  receiveMessage($event) {
      $event.forEach((discussion) => {
        discussion.postTime = this.refactorPostTime(discussion.postTime);
        if (discussion.preDiscussion) {
          discussion.preDiscussion.postTime = this.refactorPostTime(discussion.preDiscussion.postTime);
        }
      });
      this.discussions = $event;
  }

  refactorPostTime(time) {
    // const index = time.indexOf('.');
    // time = time.substring(0, index);
    // const i = time.indexOf('T');
    // const res = time.substring(0, i) + ' ' + time.substring(i + 1, time.length);
    // return res;
    const d = new Date(time);

    return d.toLocaleDateString() + ' ' + d.toLocaleTimeString();
  }

  findAllDiscussions () {
    this.service
      .findDiscussionsForEvent(this.eventId)
      .then(res => {
        console.log(res);
        res.forEach((discussion) => {
          discussion.postTime = this.refactorPostTime(discussion.postTime);
          if (discussion.preDiscussion) {
            discussion.preDiscussion.postTime = this.refactorPostTime(discussion.preDiscussion.postTime);
          }
        });
        res.sort((a, b) => a.postTime - b.postTime);
        this.discussions = res;
       // console.log(this.discussions);
      });
  }

  Delete() {
    const discussionId = '5b6a8a71927d2da61743158d';
    this.service
      .deleteDiscussion(discussionId)
      .then(res => console.log(res));
  }

  postDiscussion () {
    if (this.curUser.error) {
      alert('Please log in!');
      return;
    }
    if (this.newContent) {
      const newDiscussion = {
        content: this.newContent,
        postPeople: this.curUser,
        postTime: new Date(),
        event: this.eventId,
        type: 'post'
      };
      this.service
        .postDiscussion(newDiscussion)
        .then(() => this.findAllDiscussions());
    } else {
      alert('Content can not be empty!');
    }

  }
}
