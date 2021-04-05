import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EndCheckinPage } from './end-checkin';
import { IonicSelectableModule } from 'ionic-selectable';

@NgModule({
  declarations: [
    EndCheckinPage,
  ],
  imports: [
    IonicPageModule.forChild(EndCheckinPage),
    IonicSelectableModule
  ],
})
export class EndCheckinPageModule {}
