import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MainHomePage } from './main-home';

@NgModule({
  declarations: [
    MainHomePage,
  ],
  imports: [
    IonicPageModule.forChild(MainHomePage),
  ],
})
export class MainHomePageModule {}
