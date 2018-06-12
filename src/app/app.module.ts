import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ProductList} from './product-list/product-list.component'
import {ProductListService} from './shared/product.service'
import { StarRating } from './star/star.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductList,
    StarRating
  ],
  imports: [
    BrowserModule
  ],
  providers: [ProductListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
