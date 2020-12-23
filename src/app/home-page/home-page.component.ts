import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item-service.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  // The items being shown on the front page.
  items : Object[] = [];

  // The number of items beign shown.
  length : number = 5;
  
  constructor(public service : ItemService, private router : Router)
  {
    service.getAll().subscribe((data : Object[])=>{
      for(let i = 0; i < data.length && i < this.length; i++){
        this.items.push(data[i]);
      }
    })
  }

  ngOnInit(): void {
  }

  routeToSearchPage(){
    let inputTag : HTMLInputElement = document.getElementById("searchBar") as HTMLInputElement
    let categoryTag : HTMLSelectElement = document.getElementById("categorySelector") as HTMLSelectElement;

    this.router.navigate(["/search", {searchString : inputTag.value, categoryString: categoryTag.value}]);
  }
}
  