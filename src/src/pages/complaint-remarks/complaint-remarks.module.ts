import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComplaintRemarksPage } from './complaint-remarks';

@NgModule({
  declarations: [
    ComplaintRemarksPage,
  ],
  imports: [
    IonicPageModule.forChild(ComplaintRemarksPage),
  ],
})
export class ComplaintRemarksPageModule {}
