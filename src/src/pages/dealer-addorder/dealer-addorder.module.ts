import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DealerAddorderPage } from './dealer-addorder';
import { SelectSearchableModule } from 'ionic-select-searchable';
import { IonicSelectableModule } from 'ionic-selectable';

@NgModule({
  declarations: [
    DealerAddorderPage,
  ],
  imports: [
    IonicPageModule.forChild(DealerAddorderPage),
    IonicSelectableModule,
    SelectSearchableModule
  ],
})
export class DealerAddorderPageModule {}
