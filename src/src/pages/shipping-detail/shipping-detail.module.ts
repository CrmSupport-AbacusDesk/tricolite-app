import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShippingDetailPage } from './shipping-detail';

@NgModule({
  declarations: [
    ShippingDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(ShippingDetailPage),
  ],
})
export class ShippingDetailPageModule {}
