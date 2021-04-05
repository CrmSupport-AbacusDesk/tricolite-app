import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VideoCategoryPage } from './video-category';

@NgModule({
  declarations: [
    VideoCategoryPage,
  ],
  imports: [
    IonicPageModule.forChild(VideoCategoryPage),
  ],
})
export class VideoCategoryPageModule {}
