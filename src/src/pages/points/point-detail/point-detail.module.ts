import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PointDetailPage } from './point-detail';

@NgModule({
  declarations: [
    PointDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(PointDetailPage),
  ],
})
export class PointDetailPageModule {}
