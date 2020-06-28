import { Component, OnInit } from '@angular/core';
import { ItemModel } from '../item-model';

@Component({
  selector: 'app-item-cpanel',
  templateUrl: './item-cpanel.component.html',
  styleUrls: ['./item-cpanel.component.css']
})
export class ItemCpanelComponent implements OnInit {
  fetched : ItemModel[];

  constructor() { 
    this.fetched = [];
    // fetch data from backed here for showing populating the list in all section.
  }

  ngOnInit(): void {
  }

}
