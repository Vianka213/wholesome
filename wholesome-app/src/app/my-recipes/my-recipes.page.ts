import { Component, OnInit } from '@angular/core';
import { IonItemSliding, ModalController } from '@ionic/angular';
import { AddRecipePage } from '../add-recipe/add-recipe.page';
import { HeaderService } from '../shared/services/header.service';
import { RecipeService } from '../shared/services/recipe.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-my-recipes',
  templateUrl: './my-recipes.page.html',
  styleUrls: ['./my-recipes.page.scss'],
})
export class MyRecipesPage implements OnInit {
  allRecipes : Object[] = []
  recipes : Object[] = []
  searchQuery : String = ''

  constructor(public modalController: ModalController, public recipeService : RecipeService, public headerService: HeaderService) { }

  ngOnInit() {
    this.getRecipes()
  }

  getRecipes() {
    this.recipeService.getRecipe(localStorage.getItem('token')).subscribe(data => {
      console.log(data['recipes'])
      this.allRecipes = data['recipes']
      this.recipes = this.allRecipes
    }, error => {
        console.log(error)
        let errorCode = error['status'];
        if (errorCode == '403')
        {   // kick user out
            this.headerService.kickOut();
        }
    })
  }

  deleteRecipe(recipe, sliding?: IonItemSliding) {
    let index = this.recipes.indexOf(recipe)
    this.recipes.splice(index, 1)

    let values = {'recipeID': recipe._id}
    this.recipeService.deleteRecipe(localStorage.getItem('token'), values).subscribe(data => {
      console.log(data['recipes'])
    }, error => {
        console.log(error)
        let errorCode = error['status'];
        if (errorCode == '403')
        {   // kick user out
            this.headerService.kickOut();
        }
    }) 
  }

  searchRecipe() {
    this.recipes = this.allRecipes.filter(recipe => 
      recipe['food_name'].toLowerCase().indexOf(this.searchQuery.toLowerCase()) != -1
    )
  }

  async openAddRecipeModal() {
    const modal = await this.modalController.create({
    component: AddRecipePage,
    swipeToClose: true
    });
    return await modal.present();
   }

}
