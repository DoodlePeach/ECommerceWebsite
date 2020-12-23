import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item-service.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(
    public itemService : ItemService
  ) { }

  ngOnInit(): void {
  }

}
