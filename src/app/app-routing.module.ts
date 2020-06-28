import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component'
import { SearchPageComponent } from './search-page/search-page.component'
import { ItemPageComponent } from './item-page/item-page.component' 
import { ItemCpanelComponent } from './item-cpanel/item-cpanel.component';

const routes: Routes = [
  {
    path : "",
    component: HomePageComponent
  },

  {
    path: "search",
    component: SearchPageComponent
  },

  {
    path: "item",
    component: ItemPageComponent
  },

  {
    path: "cpanel/item",
    component: ItemCpanelComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
