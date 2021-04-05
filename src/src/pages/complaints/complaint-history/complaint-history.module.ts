import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComplaintHistoryPage } from './complaint-history';

@NgModule({
  declarations: [
    ComplaintHistoryPage,
  ],
  imports: [
    IonicPageModule.forChild(ComplaintHistoryPage),
  ],
})
export class ComplaintHistoryPageModule {}
