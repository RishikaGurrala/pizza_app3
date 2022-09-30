import { NgModule } from '@angular/core';
import{HttpClientModule} from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SharedComponent } from './components/shared/shared.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { CartComponent } from './components/shopping-cart/cart/cart.component';
import { ListItemsComponent } from './components/shopping-cart/list-items/list-items.component';
import { FiltersComponent } from './components/shopping-cart/filters/filters.component';
import { CartItemComponent } from './components/shopping-cart/cart/cart-item/cart-item.component';
import { ItemsComponent } from './components/shopping-cart/list-items/items/items.component';
import { BeveragesComponent } from './components/shopping-cart/beverages/beverages.component';
import { BevItemsComponent } from './components/shopping-cart/beverages/bev-items/bev-items.component';

@NgModule({
  declarations: [
    AppComponent,
    SharedComponent,
    FooterComponent,
    HeaderComponent,
    NavComponent,
    ShoppingCartComponent,
    CartComponent,
    ListItemsComponent,
    FiltersComponent,
    CartItemComponent,
    ItemsComponent,
    BeveragesComponent,
    BevItemsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
