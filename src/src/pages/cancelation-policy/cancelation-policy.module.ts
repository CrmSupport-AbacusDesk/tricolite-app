import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CancelationPolicyPage } from './cancelation-policy';

@NgModule({
  declarations: [
    CancelationPolicyPage,
  ],
  imports: [
    IonicPageModule.forChild(CancelationPolicyPage),
  ],
})
export class CancelationPolicyPageModule {}
