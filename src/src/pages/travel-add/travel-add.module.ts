import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TravelAddPage } from './travel-add';

@NgModule({
  declarations: [
    TravelAddPage,
  ],
  imports: [
    IonicPageModule.forChild(TravelAddPage),
  ],
})
export class TravelAddPageModule {}
