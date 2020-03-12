import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SparepartPageRoutingModule } from './sparepart-routing.module';

import { SparepartPage } from './sparepart.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SparepartPageRoutingModule
  ],
  declarations: [SparepartPage]
})
export class SparepartPageModule {}
