import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExecutiveOrderDetailPage } from './executive-order-detail';

@NgModule({
  declarations: [
    ExecutiveOrderDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(ExecutiveOrderDetailPage),
  ],
})
export class ExecutiveOrderDetailPageModule {}
