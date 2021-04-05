import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DealerCheckInPage } from './dealer-check-in';

@NgModule({
  declarations: [
    DealerCheckInPage,
  ],
  imports: [
    IonicPageModule.forChild(DealerCheckInPage),
  ],
})
export class DealerCheckInPageModule {}
