import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyGoalsPage } from '../my-goals/my-goals.page';
import { MyInfoPage } from '../my-info/my-info.page';
import { MyPreferencesPage } from '../my-preferences/my-preferences.page';
import { MyRecipesPage } from '../my-recipes/my-recipes.page';
import { MyWorkoutsPage } from '../my-workouts/my-workouts.page';

import { ProfilePage } from './profile.page';

const routes: Routes = [
  {
    path: '',
    component: ProfilePage
  },
  { path: 'recipes', component: MyRecipesPage},
  { path: 'workouts', component: MyWorkoutsPage},
  { path: 'info', component: MyInfoPage},
  { path: 'preferences', component: MyPreferencesPage},
  { path: 'goals', component: MyGoalsPage}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfilePageRoutingModule {}
