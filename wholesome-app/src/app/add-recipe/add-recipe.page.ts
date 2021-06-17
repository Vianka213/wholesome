import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.page.html',
  styleUrls: ['./add-recipe.page.scss'],
})
export class AddRecipePage implements OnInit {

  constructor(public viewCtrl: ModalController) { }

  name: String = ''
  tags: String = ''
  meal: String = ''
  qty: number = 0
  unit: String = ''
  ingredients: Object[] = []

  ngOnInit() {
  }

  createRecipe() {
    let values = {}
    values['food_name'] = this.name
    values['tags'] = this.tags
    values['meal'] = this.meal
    values['serving_qty'] = this.qty
    values['serving_unit'] = this.unit
    values['ingredients'] = this.ingredients

    let cals = 0
    let p = 0
    let f = 0
    let c = 0
    this.ingredients.forEach(element => {
      cals += element['nf_calories']
      p += element['nf_protein']*4
      f += element['nf_total_fat']*9
      c += element['nf_total_carbohydrate']*4
    });

    values['Protein'] = Math.floor(p).toFixed(0)
    values['Fat'] = Math.floor(f).toFixed(0)
    values['Carbs'] = Math.floor(c).toFixed(0)
  }

  dismissModal() {
    this.viewCtrl.dismiss();
  }

}
