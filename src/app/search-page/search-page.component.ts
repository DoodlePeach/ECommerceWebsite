import { Component, OnInit } from '@angular/core';
import { SearchBarComponent } from '../search-bar/search-bar.component'

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {
  // Fill up this array with fetched data to show stuff in the search page.
  items : Object[] = [];

  // This variable determines how much items are shown in a single page.
  pageLength = 20;

  // The currently selected page.
  currentPage = 1;

  constructor() {

    // Dummy data.
    for(let i = 0; i < 100; i++)
    {
      this.items.push({
        title : 'FS-Semester-Project',
        id  : 123,
        name  : "Huawei E100 2040",
        category : "Mobile",
        price : i})
    }
  }

  ngOnInit(): void {
  }

}
