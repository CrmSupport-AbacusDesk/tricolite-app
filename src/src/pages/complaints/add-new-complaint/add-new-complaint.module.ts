import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddNewComplaintPage } from './add-new-complaint';
// import { IonicSelectableModule } from 'ionic-selectable';

@NgModule({
  declarations: [
    AddNewComplaintPage
    
  ],
  imports: [
    IonicPageModule.forChild(AddNewComplaintPage),
    // IonicSelectableModule
  ],
})
export class AddNewComplaintPageModule {}
