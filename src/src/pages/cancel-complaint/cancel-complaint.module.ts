import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CancelComplaintPage } from './cancel-complaint';

@NgModule({
  declarations: [
    CancelComplaintPage,
  ],
  imports: [
    IonicPageModule.forChild(CancelComplaintPage),
  ],
})
export class CancelComplaintPageModule {}
