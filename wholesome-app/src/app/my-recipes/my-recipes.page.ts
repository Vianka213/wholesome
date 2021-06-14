import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddRecipePage } from '../add-recipe/add-recipe.page';

@Component({
  selector: 'app-my-recipes',
  templateUrl: './my-recipes.page.html',
  styleUrls: ['./my-recipes.page.scss'],
})
export class MyRecipesPage implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }

  async openAddRecipeModal() {
    const modal = await this.modalController.create({
    component: AddRecipePage,
    swipeToClose: true
    });
    return await modal.present();
   }

}
