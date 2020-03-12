import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CustomerdocumentsPageRoutingModule } from './customerdocuments-routing.module';

import { CustomerdocumentsPage } from './customerdocuments.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CustomerdocumentsPageRoutingModule
  ],
  declarations: [CustomerdocumentsPage]
})
export class CustomerdocumentsPageModule {}
