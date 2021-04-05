import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FollowupAddPage } from './followup-add';

@NgModule({
  declarations: [
    FollowupAddPage,
  ],
  imports: [
    IonicPageModule.forChild(FollowupAddPage),
  ],
})
export class FollowupAddPageModule {}
