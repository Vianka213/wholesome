import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyGoalsPage } from './my-goals.page';

const routes: Routes = [
  {
    path: '',
    component: MyGoalsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyGoalsPageRoutingModule {}
