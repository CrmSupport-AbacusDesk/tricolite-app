import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OfferListPage } from './offer-list';

@NgModule({
  declarations: [
    OfferListPage,
  ],
  imports: [
    IonicPageModule.forChild(OfferListPage),
  ],
})
export class OfferListPageModule {}
