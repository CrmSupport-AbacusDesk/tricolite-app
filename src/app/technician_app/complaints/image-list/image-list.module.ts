import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ImageListPageRoutingModule } from './image-list-routing.module';

import { ImageListPage } from './image-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ImageListPageRoutingModule
  ],
  declarations: [ImageListPage]
})
export class ImageListPageModule {}
