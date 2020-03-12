import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComplaintdetailPage } from './complaintdetail.page';

const routes: Routes = [
  {
    path: '',
    component: ComplaintdetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComplaintdetailPageRoutingModule {}
