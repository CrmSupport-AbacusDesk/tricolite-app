import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContactpersonmodelPageRoutingModule } from './contactpersonmodel-routing.module';

import { ContactpersonmodelPage } from './contactpersonmodel.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ContactpersonmodelPageRoutingModule
  ],
  declarations: [ContactpersonmodelPage]
})
export class ContactpersonmodelPageModule {}
