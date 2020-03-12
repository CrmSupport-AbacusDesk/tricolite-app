import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjectdetailPage } from './projectdetail.page';

const routes: Routes = [
  {
    path: '',
    component: ProjectdetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectdetailPageRoutingModule {}
