import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CustomerOrderPage } from './customer-order';

@NgModule({
  declarations: [
    CustomerOrderPage,
  ],
  imports: [
    IonicPageModule.forChild(CustomerOrderPage),
  ],
})
export class CustomerOrderPageModule {}
