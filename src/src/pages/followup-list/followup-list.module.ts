import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FollowupListPage } from './followup-list';

@NgModule({
  declarations: [
    FollowupListPage,
  ],
  imports: [
    IonicPageModule.forChild(FollowupListPage),
  ],
})
export class FollowupListPageModule {}
