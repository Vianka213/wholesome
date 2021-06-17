import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'diary',
    loadChildren: () => import('./diary/diary.module').then( m => m.DiaryPageModule)
  },
  {
    path: 'create',
    loadChildren: () => import('./create/create.module').then( m => m.CreatePageModule)
  },
  {
    path: 'analysis',
    loadChildren: () => import('./analysis/analysis.module').then( m => m.AnalysisPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },  {
    path: 'sign-in',
    loadChildren: () => import('./sign-in/sign-in.module').then( m => m.SignInPageModule)
  },
  {
    path: 'sign-up',
    loadChildren: () => import('./sign-up/sign-up.module').then( m => m.SignUpPageModule)
  },
  {
    path: 'add-food',
    loadChildren: () => import('./add-food/add-food.module').then( m => m.AddFoodPageModule)
  },
  {
    path: 'add-water',
    loadChildren: () => import('./add-water/add-water.module').then( m => m.AddWaterPageModule)
  },
  {
    path: 'add-exercise',
    loadChildren: () => import('./add-exercise/add-exercise.module').then( m => m.AddExercisePageModule)
  },
  {
    path: 'edit-food',
    loadChildren: () => import('./edit-food/edit-food.module').then( m => m.EditFoodPageModule)
  },
  {
    path: 'my-recipes',
    loadChildren: () => import('./my-recipes/my-recipes.module').then( m => m.MyRecipesPageModule)
  },
  {
    path: 'add-recipe',
    loadChildren: () => import('./add-recipe/add-recipe.module').then( m => m.AddRecipePageModule)
  },
  {
    path: 'add-recipe',
    loadChildren: () => import('./add-recipe/add-recipe.module').then( m => m.AddRecipePageModule)
  },
  {
    path: 'my-workouts',
    loadChildren: () => import('./my-workouts/my-workouts.module').then( m => m.MyWorkoutsPageModule)
  },
  {
    path: 'my-info',
    loadChildren: () => import('./my-info/my-info.module').then( m => m.MyInfoPageModule)
  },
  {
    path: 'my-preferences',
    loadChildren: () => import('./my-preferences/my-preferences.module').then( m => m.MyPreferencesPageModule)
  },
  {
    path: 'my-goals',
    loadChildren: () => import('./my-goals/my-goals.module').then( m => m.MyGoalsPageModule)
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
