import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PointListPage } from './point-list';

@NgModule({
  declarations: [
    PointListPage,
  ],
  imports: [
    IonicPageModule.forChild(PointListPage),
  ],
})
export class PointListPageModule {}
