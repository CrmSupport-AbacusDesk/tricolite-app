import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImageListPage } from './image-list.page';

const routes: Routes = [
  {
    path: '',
    component: ImageListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ImageListPageRoutingModule {}
