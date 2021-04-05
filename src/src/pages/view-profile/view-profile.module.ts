import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ViewProfilePage } from './view-profile';
import { PinchZoomModule } from 'ngx-pinch-zoom'

@NgModule({
  declarations: [
    ViewProfilePage,
  ],
  imports: [
    PinchZoomModule ,
    IonicPageModule.forChild(ViewProfilePage),
  ],
})
export class ViewProfilePageModule {}
