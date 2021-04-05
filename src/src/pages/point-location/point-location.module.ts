import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PointLocationPage } from './point-location';

@NgModule({
  declarations: [
    PointLocationPage,
  ],
  imports: [
    IonicPageModule.forChild(PointLocationPage),
  ],
})
export class PointLocationPageModule {}
