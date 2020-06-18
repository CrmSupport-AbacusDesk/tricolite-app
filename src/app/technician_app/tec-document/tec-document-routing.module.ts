import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TecDocumentPage } from './tec-document.page';

const routes: Routes = [
  {
    path: '',
    component: TecDocumentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TecDocumentPageRoutingModule {}
