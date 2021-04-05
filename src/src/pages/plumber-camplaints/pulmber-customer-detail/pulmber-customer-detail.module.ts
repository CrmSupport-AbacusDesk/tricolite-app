import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PulmberCustomerDetailPage } from './pulmber-customer-detail';

@NgModule({
  declarations: [
    PulmberCustomerDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(PulmberCustomerDetailPage),
  ],
})
export class PulmberCustomerDetailPageModule {}
