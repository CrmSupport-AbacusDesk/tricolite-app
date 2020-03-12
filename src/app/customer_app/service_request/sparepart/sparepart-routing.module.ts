import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SparepartPage } from './sparepart.page';

const routes: Routes = [
  {
    path: '',
    component: SparepartPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SparepartPageRoutingModule {}
