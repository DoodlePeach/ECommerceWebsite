import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component'
import { SearchPageComponent } from './search-page/search-page.component'
import { ItemPageComponent } from './item-page/item-page.component' 
import { ItemCpanelComponent } from './item-cpanel/item-cpanel.component';
import { AccountSignupLoginComponent } from './account-signup-login/account-signup-login.component'
import { CartComponent } from './cart/cart.component';
import { AccountInfoComponent } from './account-info/account-info.component';
import { DisclaimerComponent } from './disclaimer/disclaimer.component' 
import { ContactUsComponent} from './contact-us/contact-us.component'

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
  },

  {
    path: "validation",
    component: AccountSignupLoginComponent
  },

  {
    path: "cart",
    component: CartComponent
  },

  {
    path: "account",
    component: AccountInfoComponent
  },

  {
    path: "disclaimer",
    component: DisclaimerComponent
  },

  {
    path: "contact",
    component: ContactUsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
