import { Component, OnInit } from '@angular/core';
import { ItemCardComponent } from '../item-card/item-card.component';
import { SearchBarComponent } from '../search-bar/search-bar.component'

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  items : Object[] = [];
  
  constructor()
  {
    for(let i = 0; i < 5; i++)
    {
      this.items.push({
        title : 'FS-Semester-Project',
        id  : 123,
        name  : "Huawei E100 2040",
        category : "Mobile",
        price : 12})
    }
  }

  ngOnInit(): void {
  }

}
