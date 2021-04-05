import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DistributorListPage } from './distributor-list';

@NgModule({
  declarations: [
    DistributorListPage,
  ],
  imports: [
    IonicPageModule.forChild(DistributorListPage),
  ],
})
export class DistributorListPageModule {}
