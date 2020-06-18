import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TecProfilePageRoutingModule } from './tec-profile-routing.module';

import { TecProfilePage } from './tec-profile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TecProfilePageRoutingModule
  ],
  declarations: [TecProfilePage]
})
export class TecProfilePageModule {}
