import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.css']
})

// This component renders a card in which details of the items being sold are shown. 
// It has two "modes" that it can display: normal and wide mode.
// Normal mode renders a compact card, suitable for showing on the front page of the website where space is limited.
// Wide mode renders a much more detailed card. It is suitable for listing page (IDK what to call that page? Searching page?) 
export class ItemCardComponent implements OnInit {
  // The ID associated with the item which is being displayed.
  // Is used to navigate to the item page this item is associated with.
  // Maybe can be used to display images too.
  @Input() id : number; 
  // The name which is shown as the title in the card
  @Input() name : string;  
  // The description of the item. Only shown if wideMode is set to true.
  @Input() description : string; 
  // Dictates whether the card is rendered in wide mode if set to true.
  // Wide panels have item descriptions in them.
  @Input() wideMode : boolean;
   // The category of the item being displayed.   
  @Input() category : string;
  // The price of the item.
  @Input() price : number; 

  constructor() { }

  ngOnInit(): void {
  }
}
