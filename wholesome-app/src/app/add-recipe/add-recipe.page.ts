import { Component, OnInit } from '@angular/core';
import { IonItemSliding, ModalController } from '@ionic/angular';
import { EditFoodPage } from '../edit-food/edit-food.page';
import { HeaderService } from '../shared/services/header.service';
import { RecipeService } from '../shared/services/recipe.service';
import { TrackerService } from '../shared/services/tracker.service';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.page.html',
  styleUrls: ['./add-recipe.page.scss'],
})
export class AddRecipePage implements OnInit {

  constructor(public viewCtrl: ModalController, public trackerService : TrackerService, public recipeService : RecipeService, public headerService : HeaderService) { }

  name: String = ''
  tags: String = ''
  meal: String = ''
  qty: number = 1
  unit: String = ''
  ingredients: Object[] = []
  ings : String = ''

  ngOnInit() {
  }

  getIngredients() {
    console.log(this.ings)
    this.trackerService.naturalSearch(this.ings).subscribe( data => {
      console.log(data)
      let temp = data['foods']
      temp.forEach(element => {
        this.calcCalories(element)
        this.ingredients.push(element)
      });
      console.log(this.ingredients)
    })
    this.ings = ''
  }

  removeIngredient(food, sliding?: IonItemSliding) {
    let index = this.ingredients.indexOf(food)
    this.ingredients.splice(index, 1)
  }

  calcCalories(food : Object) {
    let p = food['nf_protein']*4
    let f = food['nf_total_fat']*9
    let c = food['nf_total_carbohydrate']*4

    let cals = Math.floor(food['nf_calories'])
    food['nf_calories'] = Math.floor(food['nf_calories'])

    food['calsP'] = Math.floor(p).toFixed(0)
    food['calsF'] = Math.floor(f).toFixed(0)
    food['calsC'] = Math.floor(c).toFixed(0)

    food['percentP'] = Math.floor((p * 100 / cals))
    food['percentF'] = Math.floor(f * 100 / cals)
    food['percentC'] = Math.floor(c * 100 / cals)
  }

  changeMeal(meal) {
    this.meal = meal
  }

  createRecipe() {
    let values = {}
    values['food_name'] = this.name
    values['tags'] = this.tags
    values['meal'] = this.meal
    values['quantity'] = this.qty
    values['unit'] = this.unit
    values['ingredients'] = this.ingredients
    values['picture'] = "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-how-to-make-a-smoothie-horizontal-1542310071.png?crop=1.00xw:0.757xh;0,0.159xh&resize=1200:*"

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

    values['protein'] = Math.floor(p).toFixed(0)
    values['fat'] = Math.floor(f).toFixed(0)
    values['carbs'] = Math.floor(c).toFixed(0)
    values['calories'] = Math.floor(cals).toFixed(0)

    console.log(values)
    this.addRecipe(values)
  }

  addRecipe(values) {
    this.recipeService.addRecipe(localStorage.getItem('token'), values).subscribe(data => {
      console.log(data)
  }, error => {
      console.log(error)
      let errorCode = error['status'];
      if (errorCode == '403')
      {   // kick user out
          this.headerService.kickOut();
      }
  })
  }

  changeQuan(value) {
    this.qty += value
  }

  async openEditFoodModal(food) {
    let index = this.ingredients.indexOf(food)
    const modal = await this.viewCtrl.create({
    component: EditFoodPage,
    swipeToClose: true,
    componentProps: {
        'food': food
    }
    });

    modal.onDidDismiss()
      .then((data) => {
        const food = data['data']; // get food back
        console.log(food)
        this.calcCalories(food)
        if (food.edited == true)
            this.ingredients[index] = food
    });

    return await modal.present();
   }

  dismissModal() {
    this.viewCtrl.dismiss();
  }

}
