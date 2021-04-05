import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExecutivePopoverPage } from './executive-popover';

@NgModule({
  declarations: [
    ExecutivePopoverPage,
  ],
  imports: [
    IonicPageModule.forChild(ExecutivePopoverPage),
  ],
})
export class ExecutivePopoverPageModule {}
