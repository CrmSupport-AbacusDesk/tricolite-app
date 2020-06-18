import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddrequestPageRoutingModule } from './addrequest-routing.module';

import { AddrequestPage } from './addrequest.page';
import { IonicSelectableModule } from 'ionic-selectable';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicSelectableModule,
    IonicModule,
    AddrequestPageRoutingModule
  ],
  declarations: [AddrequestPage]
})
export class AddrequestPageModule {}
