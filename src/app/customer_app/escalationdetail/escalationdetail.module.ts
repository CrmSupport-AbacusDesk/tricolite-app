import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EscalationdetailPageRoutingModule } from './escalationdetail-routing.module';

import { EscalationdetailPage } from './escalationdetail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EscalationdetailPageRoutingModule
  ],
  declarations: [EscalationdetailPage]
})
export class EscalationdetailPageModule {}
