import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TechDocumentDetailPageRoutingModule } from './tech-document-detail-routing.module';

import { TechDocumentDetailPage } from './tech-document-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TechDocumentDetailPageRoutingModule
  ],
  declarations: [TechDocumentDetailPage]
})
export class TechDocumentDetailModule {}
