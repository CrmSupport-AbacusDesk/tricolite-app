import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GiftDetailPage } from './gift-detail';

@NgModule({
  declarations: [
    GiftDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(GiftDetailPage),
  ],
})
export class GiftDetailPageModule {}
