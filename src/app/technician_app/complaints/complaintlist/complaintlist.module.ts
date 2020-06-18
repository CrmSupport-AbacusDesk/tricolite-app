import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComplaintlistPageRoutingModule } from './complaintlist-routing.module';

import { ComplaintlistPage } from './complaintlist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComplaintlistPageRoutingModule
  ],
  declarations: [ComplaintlistPage]
})
export class ComplaintlistPageModule {}
