import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExecutivDetailPage } from './executiv-detail';

@NgModule({
  declarations: [
    ExecutivDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(ExecutivDetailPage),
  ],
})
export class ExecutivDetailPageModule {}
