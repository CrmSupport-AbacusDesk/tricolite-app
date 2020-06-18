import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProjectdetailPageRoutingModule } from './projectdetail-routing.module';

import { ProjectdetailPage } from './projectdetail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ProjectdetailPageRoutingModule
  ],
  declarations: [ProjectdetailPage]
})
export class ProjectdetailPageModule {}
