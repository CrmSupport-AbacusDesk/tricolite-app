import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AnnouncementListPage } from './announcement-list';

@NgModule({
  declarations: [
    AnnouncementListPage,
  ],
  imports: [
    IonicPageModule.forChild(AnnouncementListPage),
  ],
})
export class AnnouncementListPageModule {}
