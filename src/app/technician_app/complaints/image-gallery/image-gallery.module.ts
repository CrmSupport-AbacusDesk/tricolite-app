import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ImageGalleryPageRoutingModule } from './image-gallery-routing.module';

import { ImageGalleryPage } from './image-gallery.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ImageGalleryPageRoutingModule
  ],
  declarations: [ImageGalleryPage]
})
export class ImageGalleryPageModule {}
