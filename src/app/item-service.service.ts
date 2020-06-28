import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})

// Service which deals with setting and getting of items.
export class ItemServiceService {
  // Where the backend is hosted. Currently locally with name fs_database
  uri : string = 'http://localhost:4000/fs_database/';

  constructor(private http : HttpClient) { }

  // Get all of the items in the database. TODO: What if there are 1000s of items? Is that even efficent to fetch?
  getAll(){
     return this.http.get(`${this.uri}/items/get`)
  }

  // Get an item with a specific ID.
  getByID(itemID : number){
    return this.http.get(`${this.uri}/items/get`, {
      params : {id : itemID.toString()}
    })
  }

  // Get the items (emphasis plural) which match with the name and category 
  getByNameAndCategory(itemName : string, itemCategory : string){
    return this.http.get(`${this.uri}/items/get`, {
      params : {name : itemName, category : itemCategory}
    })
  }

  // Add an item to the database. 
  // Note for Umar: Table model has been already been provided to you. 
  // Please apply checks according to that model. 
  addItem(item : Object){
    this.http.post(`${this.uri}/items/add`, {
      params: item
    })
  }
}