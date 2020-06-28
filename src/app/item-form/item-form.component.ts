import { Component, OnInit, Input } from '@angular/core';
import { ItemModel } from '../item-model'

@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.css']
})
export class ItemFormComponent implements OnInit {
  model: ItemModel = new ItemModel("", "", "", 0, "")
  submitted = false

  onSubmit() : void {
    this.submitted = true;

    // call the relevant service for POSTing data to the database.
    // some error handling goes here too...
  }

  ngOnInit(): void {
    let inputField : HTMLInputElement = document.getElementById("price") as HTMLInputElement
    inputField.setCustomValidity("[0-9][0-9]*")
    console.log("Hello")
  }
}