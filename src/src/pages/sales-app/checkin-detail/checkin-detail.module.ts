import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CheckinDetailPage } from './checkin-detail';

@NgModule({
  declarations: [
    CheckinDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(CheckinDetailPage),
  ],
})
export class CheckinDetailPageModule {}
