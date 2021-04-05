import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CheckinListPage } from './checkin-list';

@NgModule({
  declarations: [
    CheckinListPage,
  ],
  imports: [
    IonicPageModule.forChild(CheckinListPage),
  ],
})
export class CheckinListPageModule {}
