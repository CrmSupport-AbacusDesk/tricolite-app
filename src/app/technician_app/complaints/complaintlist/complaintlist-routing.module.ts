import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComplaintlistPage } from './complaintlist.page';

const routes: Routes = [
  {
    path: '',
    component: ComplaintlistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComplaintlistPageRoutingModule {}
