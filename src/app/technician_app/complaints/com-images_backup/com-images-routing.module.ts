import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComImagesPage } from './com-images.page';

const routes: Routes = [
  {
    path: '',
    component: ComImagesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComImagesPageRoutingModule {}
