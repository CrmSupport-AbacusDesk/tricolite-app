import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CustomertabsPageRoutingModule } from './customertabs-routing.module';

import { CustomertabsPage } from './customertabs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CustomertabsPageRoutingModule
  ],
  declarations: [CustomertabsPage]
})
export class CustomertabsPageModule {}
