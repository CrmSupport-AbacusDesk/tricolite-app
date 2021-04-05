import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CatalogueHomePage } from './catalogue-home';

@NgModule({
  declarations: [
    CatalogueHomePage,
  ],
  imports: [
    IonicPageModule.forChild(CatalogueHomePage),
  ],
})
export class CatalogueHomePageModule {}
