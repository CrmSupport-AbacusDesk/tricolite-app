import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComplaintfiltermodalPageRoutingModule } from './complaintfiltermodal-routing.module';

import { ComplaintfiltermodalPage } from './complaintfiltermodal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComplaintfiltermodalPageRoutingModule
  ],
  declarations: [ComplaintfiltermodalPage]
})
export class ComplaintfiltermodalPageModule {}
