import {Component, OnInit, Input} from '@angular/core';
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

  @Input()
  user;
  curUser;
  isSame = false;
  following = [];
  followingInfo = []

  ngOnInit() {
    this.userService
      .findAllFollowingFriendsForUser(this.user._id)
      .then(following => {
        this.following = following;
        this.fillFollowingInfo(following);
        return this.userService.profile();
      })
      .then(user => {
        this.curUser = user;
        if (user._id === this.user._id) {
          this.isSame = true;
        }
      });
  }

  unfollowUser() {
    this.userService
      .un_followFriend(this.user._id)
      .then(res => {
        if (res.error) {
          alert(res.error);
        }
      });
  }

  fillFollowingInfo(following) {
    following.forEach( f => {
      this.userService
        .findUserById(f)
        .then(user => this.followingInfo.push(user));
    });
  }

}
