import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignaturemodalPageRoutingModule } from './signaturemodal-routing.module';

import { SignaturemodalPage } from './signaturemodal.page';
import { SignaturePadModule } from 'angular2-signaturepad';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignaturePadModule,
    SignaturemodalPageRoutingModule
  ],
  declarations: [SignaturemodalPage]
})
export class SignaturemodalPageModule {}
