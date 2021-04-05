import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MobileLoginPage } from './mobile-login';

@NgModule({
  declarations: [
    MobileLoginPage,
  ],
  imports: [
    IonicPageModule.forChild(MobileLoginPage),
  ],
})
export class MobileLoginPageModule {}
