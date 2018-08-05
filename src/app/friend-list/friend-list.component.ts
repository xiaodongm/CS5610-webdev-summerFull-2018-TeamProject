import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-friend-list',
  templateUrl: './friend-list.component.html',
  styleUrls: ['./friend-list.component.css']
})
export class FriendListComponent implements OnInit {

  constructor() { }

  user = {
    url: 'https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b6ded683923a678ad03fae323169beb4&auto=format&fit=crop&w=700&q=60',
  }
  ngOnInit() {
  }

}
