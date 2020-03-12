import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LogintypePage } from './logintype.page';

const routes: Routes = [
  {
    path: '',
    component: LogintypePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LogintypePageRoutingModule {}
