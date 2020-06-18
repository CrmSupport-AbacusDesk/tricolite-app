import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComRemarksPageRoutingModule } from './com-remarks-routing.module';

import { ComRemarksPage } from './com-remarks.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComRemarksPageRoutingModule
  ],
  declarations: [ComRemarksPage]
})
export class ComRemarksPageModule {}
