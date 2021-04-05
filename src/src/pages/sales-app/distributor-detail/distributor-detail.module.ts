import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DistributorDetailPage } from './distributor-detail';

@NgModule({
  declarations: [
    DistributorDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(DistributorDetailPage),
  ],
})
export class DistributorDetailPageModule {}
