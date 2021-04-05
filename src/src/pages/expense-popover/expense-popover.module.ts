import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExpensePopoverPage } from './expense-popover';

@NgModule({
  declarations: [
    ExpensePopoverPage,
  ],
  imports: [
    IonicPageModule.forChild(ExpensePopoverPage),
  ],
})
export class ExpensePopoverPageModule {}
