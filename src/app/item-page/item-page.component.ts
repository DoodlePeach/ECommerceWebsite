import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-page',
  templateUrl: './item-page.component.html',
  styleUrls: ['./item-page.component.css']
})
export class ItemPageComponent implements OnInit {
  // The item that is being displayed in this page.
  // Requires the fields: name, price, description, url_link (TODO)
  displayedItem: any = {};
  quantity : number = 1;

  constructor() {
    // Dummy data, fetch from backend in completed version.

    this.displayedItem = {
      name: "Item name",
      price: 1,
      description: "The description of the item.",
      url_link: "https://dummyimage.com/600x400/000/fff"
    }
  }

  increaseQuantity() : void{
    this.quantity++;
  }

  decreaseQuantity() : void{
    if(this.quantity > 1){
      this.quantity--;
    }
  }

  ngOnInit(): void {
  }

}
