import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomerdocumentsPage } from './customerdocuments.page';

const routes: Routes = [
  {
    path: '',
    component: CustomerdocumentsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomerdocumentsPageRoutingModule {}
