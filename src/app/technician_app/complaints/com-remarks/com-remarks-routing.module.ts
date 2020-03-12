import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComRemarksPage } from './com-remarks.page';

const routes: Routes = [
  {
    path: '',
    component: ComRemarksPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComRemarksPageRoutingModule {}
