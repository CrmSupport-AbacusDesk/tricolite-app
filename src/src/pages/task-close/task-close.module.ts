import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TaskClosePage } from './task-close';

@NgModule({
  declarations: [
    TaskClosePage,
  ],
  imports: [
    IonicPageModule.forChild(TaskClosePage),
  ],
})
export class TaskClosePageModule {}
