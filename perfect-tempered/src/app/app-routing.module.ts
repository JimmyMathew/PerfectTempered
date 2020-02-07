import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShopComponent } from './shop/shop.component';
import { BrandComponent } from './brand/brand.component';
import { NewProductComponent } from './new-product/new-product.component';

const routes: Routes = [
  { path: '', component: ShopComponent },
  { path: 'shop', component: ShopComponent },
  { path: 'brand', component: BrandComponent },
  { path: 'newProduct', component: NewProductComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
