import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddWaterPage } from './add-water.page';

const routes: Routes = [
  {
    path: '',
    component: AddWaterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddWaterPageRoutingModule {}
