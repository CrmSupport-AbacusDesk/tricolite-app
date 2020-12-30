import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EscalationdetailPage } from './escalationdetail.page';

const routes: Routes = [
  {
    path: '',
    component: EscalationdetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EscalationdetailPageRoutingModule {}
