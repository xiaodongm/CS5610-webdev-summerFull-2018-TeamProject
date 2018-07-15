import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-bar-campground',
  templateUrl: './search-bar-campground.component.html',
  styleUrls: ['./search-bar-campground.component.css']
})
export class SearchBarCampgroundComponent implements OnInit {
  constructor() { }

  searchInput = '';

  searchCampgrounds(searchInput){
    console.log(searchInput);
  }
  ngOnInit() {
  }

}
