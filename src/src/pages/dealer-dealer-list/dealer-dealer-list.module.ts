import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DealerDealerListPage } from './dealer-dealer-list';

@NgModule({
  declarations: [
    DealerDealerListPage,
  ],
  imports: [
    IonicPageModule.forChild(DealerDealerListPage),
  ],
})
export class DealerDealerListPageModule {}
