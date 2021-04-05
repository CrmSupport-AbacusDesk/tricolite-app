import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TravelListPage } from './travel-list';

@NgModule({
  declarations: [
    TravelListPage,
  ],
  imports: [
    IonicPageModule.forChild(TravelListPage),
  ],
})
export class TravelListPageModule {}
