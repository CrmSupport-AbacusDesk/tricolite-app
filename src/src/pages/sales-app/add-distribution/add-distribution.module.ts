import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddDistributionPage } from './add-distribution';
// import { IonicSelectableModule } from 'ionic-selectable';
// import { SelectSearchableModule } from 'ionic-select-searchable';

@NgModule({
  declarations: [
    AddDistributionPage,

  ],
  imports: [
    IonicPageModule.forChild(AddDistributionPage),
    // IonicSelectableModule,
    // SelectSearchableModule

  ],
})
export class AddDistributionPageModule {}
