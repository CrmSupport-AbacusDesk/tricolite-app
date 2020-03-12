import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComSparepartsPage } from './com-spareparts.page';

const routes: Routes = [
  {
    path: '',
    component: ComSparepartsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComSparepartsPageRoutingModule {}
