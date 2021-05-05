import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ImagemodalPageRoutingModule } from './imagemodal-routing.module';

import { ImagemodalPage } from './imagemodal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ImagemodalPageRoutingModule
  ],
  declarations: [ImagemodalPage]
})
export class ImagemodalPageModule {}
