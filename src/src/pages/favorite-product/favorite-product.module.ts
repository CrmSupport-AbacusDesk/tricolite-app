import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FavoriteProductPage } from './favorite-product';

@NgModule({
  declarations: [
    FavoriteProductPage,
  ],
  imports: [
    IonicPageModule.forChild(FavoriteProductPage),
  ],
})
export class FavoriteProductPageModule {}
