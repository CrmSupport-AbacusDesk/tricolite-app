import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OtpverifyPage } from './otpverify';
import { TimeCounterPipe } from '../../pipes/time-counter/time-counter';

@NgModule({
  declarations: [
    OtpverifyPage,
    // TimeCounterPipe
  ],
  imports: [
    IonicPageModule.forChild(OtpverifyPage),

  ],
})
export class OtpverifyPageModule {}
