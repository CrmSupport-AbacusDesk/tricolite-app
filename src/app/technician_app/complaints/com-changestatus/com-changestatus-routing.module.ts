import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComChangestatusPage } from './com-changestatus.page';

const routes: Routes = [
  {
    path: '',
    component: ComChangestatusPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComChangestatusPageRoutingModule {}
