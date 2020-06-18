import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComChangestatusPageRoutingModule } from './com-changestatus-routing.module';

import { ComChangestatusPage } from './com-changestatus.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComChangestatusPageRoutingModule
  ],
  declarations: [ComChangestatusPage]
})
export class ComChangestatusPageModule {}
