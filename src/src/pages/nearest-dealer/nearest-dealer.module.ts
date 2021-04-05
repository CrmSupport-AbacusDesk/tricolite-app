import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NearestDealerPage } from './nearest-dealer';

@NgModule({
  declarations: [
    NearestDealerPage,
  ],
  imports: [
    IonicPageModule.forChild(NearestDealerPage),
  ],
})
export class NearestDealerPageModule {}
