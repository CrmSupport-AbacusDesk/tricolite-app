import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComSparepartsPageRoutingModule } from './com-spareparts-routing.module';

import { ComSparepartsPage } from './com-spareparts.page';
import { IonicSelectableModule } from 'ionic-selectable';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComSparepartsPageRoutingModule,
    IonicSelectableModule
  ],
  declarations: [ComSparepartsPage]
})
export class ComSparepartsPageModule {}
