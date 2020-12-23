import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { ItemModel } from './item-model';

@Injectable({
  providedIn: 'root'
})

// Service which deals with setting and getting of items.
export class ItemService {
  // Where the backend is hosted. Currently locally with name fs_database
  uri : string = 'http://127.0.0.1:3000';
  categories : string[] = ["Mobile", "Washing Machine", "Fan", "AC"];

  constructor(private http : HttpClient) { }

  // Get all of the items in the database. TODO: What if there are 1000s of items? Is that even efficent to fetch?
  getAll(){
     return this.http.get(`${this.uri}/items/get`, {
      observe: 'body',
      responseType: 'json'
    })
  }

  // Get an item with a specific ID.
  getByID(itemID : string){
    return this.http.get(`${this.uri}/items/get`, {
      params : {id : itemID},
      observe: 'body',
      responseType: 'json'
    })
  }

  // Get the items (emphasis plural) which match with the name and category 
  getByNameAndCategory(itemName : string, itemCategory : string){
    return this.http.get(`${this.uri}/items/get`, {
      params : {name : itemName, category : itemCategory},
      observe: 'body',
      responseType: 'json'
    })
  }

  // Search by name.
  getByName(itemName : string){
    return this.http.get(`${this.uri}/items/get`, {
      params : {name : itemName},
      observe: 'body',
      responseType: 'json'
    })
  }


  // Add an item to the database. 
  // Note for Umar: Table model has been already been provided to you. 
  // Please apply checks according to that model. 
  addItem(item : ItemModel){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })}
    return this.http.put(`${this.uri}/items/add`, item, httpOptions)
  }
}