import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WorkTypeModalPage } from './work-type-modal';

@NgModule({
  declarations: [
    WorkTypeModalPage,
  ],
  imports: [
    IonicPageModule.forChild(WorkTypeModalPage),
  ],
})
export class WorkTypeModalPageModule {}
