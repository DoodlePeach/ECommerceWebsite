import { Component } from '@angular/core';
import { ItemCardComponent } from './item-card/item-card.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FS-Semester-Project';
  id : number = 123;
  name : string = "Saad";
  description : string = "ABC";
  wideMode : boolean = false;
  category : string = "aaaa";
  price : number = 12;
}
