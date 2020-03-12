import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComDailyreportPage } from './com-dailyreport.page';

const routes: Routes = [
  {
    path: '',
    component: ComDailyreportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComDailyreportPageRoutingModule {}
