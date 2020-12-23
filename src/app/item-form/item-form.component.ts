import { Component, OnInit, Input } from '@angular/core';
import { ItemModel } from '../item-model'
import { ItemService } from '../item-service.service';

@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.css']
})
export class ItemFormComponent implements OnInit {
  model: ItemModel = new ItemModel("", "", "", "", 0, "")
  submitted = false

  constructor(public itemService : ItemService){}

  onSubmit() : void {
    this.submitted = true;
    this.itemService.addItem(this.model).subscribe((data) => {
    });
  }

  ngOnInit(): void {
    let inputField : HTMLInputElement = document.getElementById("price") as HTMLInputElement
    inputField.setCustomValidity("[0-9][0-9]*")
  }
}