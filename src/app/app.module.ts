import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { ItemCardComponent } from './item-card/item-card.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { ItemPageComponent } from './item-page/item-page.component'
import { ItemFormComponent } from './item-form/item-form.component'
import { ItemCpanelComponent } from './item-cpanel/item-cpanel.component'
import { AccountService } from './account-service.service';
import { ItemService } from './item-service.service'

@NgModule({
  declarations: [
    AppComponent,
    ItemCardComponent,
    HeaderComponent,
    FooterComponent,
    HomePageComponent,
    SearchPageComponent,
    SearchBarComponent,
    ItemPageComponent,
    ItemFormComponent,
    ItemCpanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule,
    NgbPaginationModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AccountService, ItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }