import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DealerExecutiveListPage } from './dealer-executive-list';

@NgModule({
  declarations: [
    DealerExecutiveListPage,
  ],
  imports: [
    IonicPageModule.forChild(DealerExecutiveListPage),
  ],
})
export class DealerExecutiveListPageModule {}
