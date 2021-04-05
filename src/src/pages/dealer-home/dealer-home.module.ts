import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DealerHomePage } from './dealer-home';

@NgModule({
  declarations: [
    DealerHomePage,
  ],
  imports: [
    IonicPageModule.forChild(DealerHomePage),
  ],
})
export class DealerHomePageModule {}
