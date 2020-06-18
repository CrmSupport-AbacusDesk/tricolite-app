import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomerprofilePage } from './customerprofile.page';

const routes: Routes = [
  {
    path: '',
    component: CustomerprofilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomerprofilePageRoutingModule {}
