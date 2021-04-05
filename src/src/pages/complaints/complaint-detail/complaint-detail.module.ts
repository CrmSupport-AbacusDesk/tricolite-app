import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComplaintDetailPage } from './complaint-detail';

@NgModule({
  declarations: [
    ComplaintDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(ComplaintDetailPage),
  ],
})
export class ComplaintDetailPageModule {}
