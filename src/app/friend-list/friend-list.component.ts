import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {UserServiceClient} from '../services/user.service.client';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-friend-list',
  templateUrl: './friend-list.component.html',
  styleUrls: ['./friend-list.component.css']
})
export class FriendListComponent implements OnInit {

  constructor(private userService: UserServiceClient,
              private route: ActivatedRoute) {
  }

  @Input() friendList;
  @Input() user;
  @Input() isSame;
  @Output() newFriends: EventEmitter<Object> = new EventEmitter();

  ngOnInit() {
    console.log(this.friendList);
  }

  unfollowUser(userId) {
    this.userService
      .un_followFriend(userId)
      .then(res => {
        if (res.error) {
          alert(res.error);
        } else {
          this.refresh();
        }
      });
  }


  refresh() {
      this.userService
        .findAllFollowingFriendsForUser(this.user._id)
        .then(followingList => this.newFriends.emit(followingList));
  }

}
