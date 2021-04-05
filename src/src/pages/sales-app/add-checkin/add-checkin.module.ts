import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddCheckinPage } from './add-checkin';
import { IonicSelectableModule } from 'ionic-selectable';

@NgModule({
  declarations: [
    AddCheckinPage,
  ],
  imports: [
    IonicPageModule.forChild(AddCheckinPage),
    IonicSelectableModule
  ],
})
export class AddCheckinPageModule {}
