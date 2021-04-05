import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddLeavePage } from './add-leave';

@NgModule({
  declarations: [
    AddLeavePage,
  ],
  imports: [
    IonicPageModule.forChild(AddLeavePage),
  ],
})
export class AddLeavePageModule {}
