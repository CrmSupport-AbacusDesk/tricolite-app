import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProductSubdetailPage } from './product-subdetail';

@NgModule({
  declarations: [
    ProductSubdetailPage,
  ],
  imports: [
    IonicPageModule.forChild(ProductSubdetailPage),
  ],
})
export class ProductSubdetailPageModule {}
