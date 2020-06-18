import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComImagesPageRoutingModule } from './com-images-routing.module';

import { ComImagesPage } from './com-images.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComImagesPageRoutingModule
  ],
  declarations: [ComImagesPage]
})
export class ComImagesPageModule {}
