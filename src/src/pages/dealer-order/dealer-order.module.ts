import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DealerOrderPage } from './dealer-order';

@NgModule({
  declarations: [
    DealerOrderPage,
  ],
  imports: [
    IonicPageModule.forChild(DealerOrderPage),
  ],
})
export class DealerOrderPageModule {}
