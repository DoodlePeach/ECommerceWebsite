import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item-service.service';
import { ActivatedRoute } from '@angular/router'
import { AccountService } from '../account-service.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-item-page',
  templateUrl: './item-page.component.html',
  styleUrls: ['./item-page.component.css']
})
export class ItemPageComponent implements OnInit {
  // The item that is being displayed in this page.
  // Requires the fields: name, price, description, url_link (TODO)
  displayedItem: any = {};
  quantity: number = 1;
  submitted : Boolean = false;

  constructor(
    private itemService: ItemService,
    public accountService: AccountService,
    public cart: CartService,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe((params) => {
      itemService.getByID(params['itemId']).subscribe((fetched: any[]) => {
        this.displayedItem = fetched[0];
      })
    })

    itemService.getByID("5efcab3dad450a2505872f61").subscribe((res) => {
      console.log(res);
    })
  }

  increaseQuantity(): void {
    this.quantity++;
  }

  decreaseQuantity(): void {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

  addItemToCart() {
    this.cart.addItem(this.displayedItem._id, this.displayedItem.name, this.displayedItem.price, this.quantity);
    
    this.submitted = true;
  }

  showPlaceholder(){
    this.displayedItem.image_link = "/assets/dummy_item.png"
  }
 
  ngOnInit(): void {
  }
}