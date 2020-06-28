import { Component, OnInit } from '@angular/core';

// Lifted the header from here:
// https://codepen.io/arifmanzoor11/pen/YaYrYJ?editors=1100
// Removed the unecesscary buttons from this template.

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
