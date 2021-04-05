import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddOrderPage } from './add-order';
import { IonicSelectableModule } from 'ionic-selectable';
import { SelectSearchableModule } from 'ionic-select-searchable';

@NgModule({
  declarations: [
    AddOrderPage,
  ],
  imports: [
    IonicPageModule.forChild(AddOrderPage),
    IonicSelectableModule,
    SelectSearchableModule
    
  ],
})
export class AddOrderPageModule {}
