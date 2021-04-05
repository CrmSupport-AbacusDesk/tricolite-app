import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExpenseStatusModalPage } from './expense-status-modal';

@NgModule({
  declarations: [
    ExpenseStatusModalPage,
  ],
  imports: [
    IonicPageModule.forChild(ExpenseStatusModalPage),
  ],
})
export class ExpenseStatusModalPageModule {}
