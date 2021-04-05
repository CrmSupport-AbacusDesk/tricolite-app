import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SelectRegistrationTypePage } from './select-registration-type';

@NgModule({
  declarations: [
    SelectRegistrationTypePage,
  ],
  imports: [
    IonicPageModule.forChild(SelectRegistrationTypePage),
  ],
})
export class SelectRegistrationTypePageModule {}
