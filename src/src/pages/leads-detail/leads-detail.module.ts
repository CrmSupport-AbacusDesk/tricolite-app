import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LeadsDetailPage } from './leads-detail';

@NgModule({
  declarations: [
    LeadsDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(LeadsDetailPage),
  ],
})
export class LeadsDetailPageModule {}
