import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CataloguePdfPage } from './catalogue-pdf';

@NgModule({
  declarations: [
    CataloguePdfPage,
  ],
  imports: [
    IonicPageModule.forChild(CataloguePdfPage),
  ],
})
export class CataloguePdfPageModule {}
