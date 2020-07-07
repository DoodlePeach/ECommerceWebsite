import { Component, OnInit } from '@angular/core';
import { ItemModel } from '../item-model';
import { ItemService } from '../item-service.service';

@Component({
  selector: 'app-item-cpanel',
  templateUrl: './item-cpanel.component.html',
  styleUrls: ['./item-cpanel.component.css']
})
export class ItemCpanelComponent implements OnInit {
  fetched : Object[];

  constructor(
    public itemService : ItemService) {
      itemService.getAll().subscribe((data : Object[]) => {
        this.fetched = data;
      }) 
  }

  ngOnInit(): void {
  }

}
