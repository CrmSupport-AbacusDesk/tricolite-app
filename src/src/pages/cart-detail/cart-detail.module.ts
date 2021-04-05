import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CartDetailPage } from './cart-detail';
import { IonicSelectableModule } from 'ionic-selectable';


@NgModule({
  declarations: [
    CartDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(CartDetailPage),
    IonicSelectableModule
  ],
})
export class CartDetailPageModule {}
