import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CustomerCheckinPage } from './customer-checkin';

@NgModule({
  declarations: [
    CustomerCheckinPage,
  ],
  imports: [
    IonicPageModule.forChild(CustomerCheckinPage),
  ],
})
export class CustomerCheckinPageModule {}
