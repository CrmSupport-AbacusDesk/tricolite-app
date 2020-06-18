import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComDailyreportPageRoutingModule } from './com-dailyreport-routing.module';

import { ComDailyreportPage } from './com-dailyreport.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ComDailyreportPageRoutingModule
  ],
  declarations: [ComDailyreportPage]
})
export class ComDailyreportPageModule {}
