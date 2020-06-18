import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CustomerDocumentDetailPageRoutingModule } from './customer-document-detail-routing.module';

import { CustomerDocumentDetailPage } from './customer-document-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CustomerDocumentDetailPageRoutingModule
  ],
  declarations: [CustomerDocumentDetailPage]
})
export class CustomerDocumentDetailModule {}
