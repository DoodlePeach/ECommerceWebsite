import { Injectable } from '@angular/core';
import { AccountService } from './account-service.service'
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CartService {
  uri: string = 'http://127.0.0.1:3000';

  // Items present in the cart.
  // This is an object array, where each element has the form: {id, name, price, quantity}
  // name isn't uneeded for the functioning of the cart. However, it is useful for itemcart page
  // since we dont have to fetch any additional details.
  public items: any[] = [];

  // The total price of the items present in the cart.
  public total: number = 0;

  constructor(
    private accountService: AccountService,
    private http: HttpClient
  ) { }

  // Adds an item to the cart. 
  // If an object with the same id as the item being requested to be added already
  // exits in the cart, then only the quantity of the already existing item is increased.   
  addItem(id: string, name: string, price: number, quantity: number) {
    let foundIndex: number = this.findIndexOf(id);

    if (foundIndex > -1) {
      this.items[foundIndex].quantity += quantity
    }

    else {
      this.items.push({ id: id, name: name, price: price, quantity: quantity })
    }

    this.calculateTotal();
  }

  // Remove item with specified id from the items array.
  // Nothing is removed if the ID does not exists in the items array.
  removeItem(id: string) {
    let foundIndex = this.findIndexOf(id);

    if (foundIndex > -1) {
      this.items.splice(foundIndex, 1);
    }

    this.calculateTotal();
  }

  // Change the quantity of item with the specified ID.
  // Nothing is done if there does not exist an item in the cart 
  // with the specified ID.
  changeQuantity(id: string, quantity: number) {
    let foundIndex = this.findIndexOf(id);

    if (foundIndex > -1) {
      this.items[foundIndex].quantity = quantity;
    }

    this.calculateTotal();
  }

  // Finds the index of the item with the given id in the items array. 
  // Returns the index of the item if found, else it returns -1.
  findIndexOf(id: string) {
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].id == id) {
        return i;
      }
    }

    return -1;
  }

  // Calculates the total of the the items in the cart.
  // This is done by multiplying the price of a single item with its quantity
  // and then being summed to the grand total.  
  calculateTotal() {
    this.total = 0;

    for (let item of this.items) {
      this.total += item.price * item.quantity;
    }
  }

  // Checkout the cart.
  checkout() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };

    return this.http.post(`${this.uri}/cart`, { email: this.accountService.account.id, cart: this.items, status: "Order Pending" }, httpOptions);
  }

  // Method for emptying cart.
  // Called after checking out the cart or signing out of an account.
  emptyCart(){
    this.items = [];
    this.total = 0;
  }
}
