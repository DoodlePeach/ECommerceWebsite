import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router'
import { ItemService } from '../item-service.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {
  // Fill up this array with fetched data to show stuff in the search page.
  items: any[] = [];

  // This variable determines how much items are shown in a single page.
  pageLength = 20;

  // The currently selected page.
  currentPage = 1;

  constructor(
    private route: ActivatedRoute,
    public itemService: ItemService) {

  }

  ngOnInit(): void {
    let inputTag: HTMLInputElement = document.getElementById("searchBar") as HTMLInputElement;
    let categoryTag : HTMLSelectElement = document.getElementById("categorySelector") as HTMLSelectElement;


    this.route.params.subscribe((params) => {
      let searchString : string = params['searchString'];
      
      if(searchString == undefined)
        searchString = "";

      inputTag.value = searchString;
      categoryTag.value = params['categoryString'];

      this.itemService.getByNameAndCategory(searchString, params['categoryString']).subscribe((fetched: Object[]) => {
        this.items = fetched;
      })
    })
  }

  onSearchClicked(){
    let inputTag: HTMLInputElement = document.getElementById("searchBar") as HTMLInputElement;
    let categoryTag : HTMLSelectElement = document.getElementById("categorySelector") as HTMLSelectElement;

    this.itemService.getByNameAndCategory(inputTag.value, categoryTag.value).subscribe((fetched: Object[]) => {
      this.items = fetched;
    })
  }
}
