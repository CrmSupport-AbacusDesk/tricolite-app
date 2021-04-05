import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LeaveListPage } from './leave-list';

@NgModule({
  declarations: [
    LeaveListPage,
  ],
  imports: [
    IonicPageModule.forChild(LeaveListPage),
  ],
})
export class LeaveListPageModule {}
