import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComInstallsparepartsPageRoutingModule } from './com-installspareparts-routing.module';

import { ComInstallsparepartsPage } from './com-installspareparts.page';
import { IonicSelectableModule } from 'ionic-selectable';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComInstallsparepartsPageRoutingModule,
    IonicSelectableModule
  ],
  declarations: [ComInstallsparepartsPage]
})
export class ComInstallsparepartsPageModule {}
