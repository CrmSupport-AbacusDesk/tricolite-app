import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddLeadsPage } from './add-leads';
import { IonicSelectableModule } from 'ionic-selectable';


@NgModule({
  declarations: [
    AddLeadsPage,
  ],
  imports: [
    IonicPageModule.forChild(AddLeadsPage),
    IonicSelectableModule
  ],
})
export class AddLeadsPageModule {

 

}
