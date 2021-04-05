import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DealerDiscountPage } from './dealer-discount';

@NgModule({
  declarations: [
    DealerDiscountPage,
  ],
  imports: [
    IonicPageModule.forChild(DealerDiscountPage),
  ],
})
export class DealerDiscountPageModule {}
