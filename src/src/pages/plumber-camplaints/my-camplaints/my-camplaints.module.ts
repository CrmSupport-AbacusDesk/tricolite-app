import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyCamplaintsPage } from './my-camplaints';

@NgModule({
  declarations: [
    MyCamplaintsPage,
  ],
  imports: [
    IonicPageModule.forChild(MyCamplaintsPage),
  ],
})
export class MyCamplaintsPageModule {}
