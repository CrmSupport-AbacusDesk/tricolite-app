import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComplaintdetailPageRoutingModule } from './complaintdetail-routing.module';

import { ComplaintdetailPage } from './complaintdetail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComplaintdetailPageRoutingModule
  ],
  declarations: [ComplaintdetailPage]
})
export class ComplaintdetailPageModule {}
