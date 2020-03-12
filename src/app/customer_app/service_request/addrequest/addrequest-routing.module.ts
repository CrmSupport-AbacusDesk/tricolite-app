import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddrequestPage } from './addrequest.page';

const routes: Routes = [
  {
    path: '',
    component: AddrequestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddrequestPageRoutingModule {}
