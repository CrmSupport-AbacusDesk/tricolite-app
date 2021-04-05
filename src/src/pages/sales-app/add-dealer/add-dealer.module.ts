import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddDealerPage } from './add-dealer';
import { IonicSelectableModule } from 'ionic-selectable';


@NgModule({
  declarations: [
    AddDealerPage,
  ],
  imports: [
    IonicPageModule.forChild(AddDealerPage),
    IonicSelectableModule
  ],
})
export class AddDealerPageModule {}
