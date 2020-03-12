import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LogintypePageRoutingModule } from './logintype-routing.module';

import { LogintypePage } from './logintype.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LogintypePageRoutingModule
  ],
  declarations: [LogintypePage]
})
export class LogintypePageModule {}
