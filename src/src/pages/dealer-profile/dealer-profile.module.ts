import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DealerProfilePage } from './dealer-profile';

@NgModule({
  declarations: [
    DealerProfilePage,
  ],
  imports: [
    IonicPageModule.forChild(DealerProfilePage),
  ],
})
export class DealerProfilePageModule {}
