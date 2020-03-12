import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComplaintfiltermodalPage } from './complaintfiltermodal.page';

const routes: Routes = [
  {
    path: 'filterModal',
    component: ComplaintfiltermodalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComplaintfiltermodalPageRoutingModule {}
