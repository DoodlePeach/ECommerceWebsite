import { Component, OnInit, Input } from '@angular/core';
import { CartService } from '../cart.service';


@Component({
  selector: '[cart-row]',
  templateUrl: './cart-row.component.html',
  styleUrls: ['./cart-row.component.css']
})
export class CartRowComponent implements OnInit {
  @Input() name : string;
  @Input() price : number;
  @Input() quantity : number;
  @Input() id : string;

  constructor(public cart : CartService) { }

  increaseQuantity(): void {
    this.quantity++;
    this.cart.changeQuantity(this.id, this.quantity);
  }

  decreaseQuantity(): void {
    if (this.quantity > 1) {
      this.quantity--;
      this.cart.changeQuantity(this.id, this.quantity);
    }
  }

  onRemoveClicked(){
    this.cart.removeItem(this.id);
  }

  ngOnInit(): void {
  }

}
