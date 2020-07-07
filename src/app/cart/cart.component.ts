import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { AccountService } from '../account-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  public successfulCheckout : Boolean = false
  
  constructor(
    public cart : CartService, 
    public accountService : AccountService) { }

  ngOnInit(): void {
  }

  checkout(){
    this.cart.checkout().subscribe((data) => {
      this.accountService.relogin();
      this.cart.emptyCart();
      this.successfulCheckout = true;
    })
  }
}
