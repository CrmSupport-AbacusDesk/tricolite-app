import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditNetworkPage } from './edit-network';
import { IonicSelectableModule } from 'ionic-selectable';
import { SelectSearchableModule } from 'ionic-select-searchable';
@NgModule({
  declarations: [
    EditNetworkPage,
  ],
  imports: [
    IonicPageModule.forChild(EditNetworkPage),
    IonicSelectableModule,
    SelectSearchableModule
  ],
})
export class EditNetworkPageModule {}
