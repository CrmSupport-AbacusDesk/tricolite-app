import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CallrequestPageRoutingModule } from './callrequest-routing.module';

import { CallrequestPage } from './callrequest.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    CallrequestPageRoutingModule
  ],
  declarations: [CallrequestPage]
})
export class CallrequestPageModule {}
