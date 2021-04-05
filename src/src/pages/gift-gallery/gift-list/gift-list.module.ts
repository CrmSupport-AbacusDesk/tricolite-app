import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GiftListPage } from './gift-list';

@NgModule({
  declarations: [
    GiftListPage,
  ],
  imports: [
    IonicPageModule.forChild(GiftListPage),
  ],
})
export class GiftListPageModule {}
