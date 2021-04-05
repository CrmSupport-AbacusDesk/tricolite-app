import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExpenseAddPage } from './expense-add';

@NgModule({
  declarations: [
    ExpenseAddPage,
  ],
  imports: [
    IonicPageModule.forChild(ExpenseAddPage),
  ],
})
export class ExpenseAddPageModule {}
