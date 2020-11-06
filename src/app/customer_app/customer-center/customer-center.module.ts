import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CustomerCenterPageRoutingModule } from './customer-center-routing.module';

import { CustomerCenterPage } from './customer-center.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CustomerCenterPageRoutingModule
  ],
  declarations: [CustomerCenterPage]
})
export class CustomerCenterPageModule {}
