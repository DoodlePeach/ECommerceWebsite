import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account-service.service';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-account-info',
  templateUrl: './account-info.component.html',
  styleUrls: ['./account-info.component.css']
})
export class AccountInfoComponent implements OnInit {

  constructor(
    public accountService : AccountService,
    private cartService : CartService, 
    private router : Router) { }

  ngOnInit(): void {
  }

  onSignoutClicked(){
    this.accountService.unloadAccount();
    this.cartService.emptyCart();
    this.router.navigate(['/']);
  }
}
