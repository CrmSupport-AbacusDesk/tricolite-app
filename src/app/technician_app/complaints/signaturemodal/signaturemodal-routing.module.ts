import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignaturemodalPage } from './signaturemodal.page';

const routes: Routes = [
  {
    path: 'signatueModal',
    component: SignaturemodalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignaturemodalPageRoutingModule {}
