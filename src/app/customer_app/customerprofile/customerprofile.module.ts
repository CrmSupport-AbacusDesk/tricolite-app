import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CustomerprofilePageRoutingModule } from './customerprofile-routing.module';

import { CustomerprofilePage } from './customerprofile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CustomerprofilePageRoutingModule
  ],
  declarations: [CustomerprofilePage]
})
export class CustomerprofilePageModule {}
