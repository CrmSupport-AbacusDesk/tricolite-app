import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MainDistributorListPage } from './main-distributor-list';

@NgModule({
  declarations: [
    MainDistributorListPage,
  ],
  imports: [
    IonicPageModule.forChild(MainDistributorListPage),
  ],
})
export class MainDistributorListPageModule {}
