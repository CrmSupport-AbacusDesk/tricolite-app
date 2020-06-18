import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TecDocumentPageRoutingModule } from './tec-document-routing.module';

import { TecDocumentPage } from './tec-document.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TecDocumentPageRoutingModule
  ],
  declarations: [TecDocumentPage]
})
export class TecDocumentPageModule {}
