import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AnnouncementDetailPage } from './announcement-detail';

@NgModule({
  declarations: [
    AnnouncementDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(AnnouncementDetailPage),
  ],
})
export class AnnouncementDetailPageModule {}
