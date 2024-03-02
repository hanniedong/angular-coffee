import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ProductListComponent } from '../product-list/product-list.component';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import { ProductService } from '../services/product.service';

@NgModule({
  declarations: [AppComponent, ProductListComponent, ProductDetailsComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: ProductListComponent },
      { path: 'product/:id', component: ProductDetailsComponent },
    ]),
  ],
  providers: [ProductService],
  bootstrap: [AppComponent],
})
export class AppModule {}
