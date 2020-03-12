import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CallrequestPage } from './callrequest.page';

const routes: Routes = [
  {
    path: '',
    component: CallrequestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CallrequestPageRoutingModule {}
