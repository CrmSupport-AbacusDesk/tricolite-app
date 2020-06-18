import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyprojectsPageRoutingModule } from './myprojects-routing.module';

import { MyprojectsPage } from './myprojects.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyprojectsPageRoutingModule
  ],
  declarations: [MyprojectsPage]
})
export class MyprojectsPageModule {}
