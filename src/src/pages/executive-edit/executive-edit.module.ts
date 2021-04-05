import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExecutiveEditPage } from './executive-edit';
import { IonicSelectableModule } from 'ionic-selectable';
import { SelectSearchableModule } from 'ionic-select-searchable';

@NgModule({
  declarations: [
    ExecutiveEditPage,
  ],
  imports: [
    IonicPageModule.forChild(ExecutiveEditPage),
    IonicSelectableModule,
    SelectSearchableModule
  ],
})
export class ExecutiveEditPageModule {}
