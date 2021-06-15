import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-edit-food',
  templateUrl: './edit-food.page.html',
  styleUrls: ['./edit-food.page.scss'],
})
export class EditFoodPage implements OnInit {
  @Input() food: any;
  percentProtein : any = 0
  percentFat : any = 0
  percentCarbs : any = 0
  nutrition : Object[] = []
  nutritionOriginal : Object[] = []
  cals : number
  serving : String = ''
  servingWeight : number
  quantity : number

  private chartP : Chart
  private chartF : Chart
  private chartC : Chart

  constructor(public viewCtrl: ModalController) { }

  ngOnInit() {
    console.log(this.food)
    this.cals = this.food.nf_calories
    this.quantity = this.food.serving_qty
    this.serving = this.food.serving_unit
    this.servingWeight = this.food.serving_weight_grams
    console.log(this.serving)
    this.percentProtein = ((this.food.calsP/this.food.nf_calories)*100).toFixed(0)
    this.percentFat = ((this.food.calsF/this.food.nf_calories)*100).toFixed(0)
    this.percentCarbs = ((this.food.calsC/this.food.nf_calories)*100).toFixed(0)
    this.getNutritionalInfo()
    this.setMeal()
    this.createCharts()
  }

  dismissModal() {
    this.viewCtrl.dismiss(this.food);
  }

  getNutritionalInfo() {
    // protein
    let info1 : Object = {}
    info1['name'] = 'Protein'
    info1['value'] = this.food.full_nutrients.find(x => x.attr_id == 203).value
    info1['unit'] = 'g'
    this.nutrition.push(info1)
    this.nutritionOriginal.push(info1)
    
    // total fat
    let info2 : Object = {}
    info2['name'] = 'Total Fat'
    info2['value'] = this.food.full_nutrients.find(x => x.attr_id == 204).value
    info2['unit'] = 'g'
    this.nutrition.push(info2)
    this.nutritionOriginal.push(info2)
    
    // sat fat
    let info3 : Object = {}
    info3['name'] = 'Saturated Fat'
    info3['value'] = this.food.full_nutrients.find(x => x.attr_id == 606).value
    info3['unit'] = 'g'
    this.nutrition.push(info3)
    this.nutritionOriginal.push(info3)
    
    // trans fat
    let info4 : Object = {}
    info4['name'] = 'Trans Fat'
    info4['value'] = this.food.full_nutrients.find(x => x.attr_id == 605).value
    info4['unit'] = 'g'
    this.nutrition.push(info4)
    this.nutritionOriginal.push(info4)
    
    // total carbs
    var info5 : Object = {}
    info5['name'] = 'Total Carbohydrate'
    info5['value'] = this.food.full_nutrients.find(x => x.attr_id == 205).value
    info5['unit'] = 'g'
    this.nutrition.push(info5)
    this.nutritionOriginal.push(info5)
    
    // dietary fiber
    let info6 : Object = {}
    info6['name'] = 'Dietary Fiber'
    info6['value'] = this.food.full_nutrients.find(x => x.attr_id == 291).value
    info6['unit'] = 'g'
    this.nutrition.push(info6)
    this.nutritionOriginal.push(info6)
    
    // sugars
    let info7 : Object = {}
    info7['name'] = 'Sugars'
    info7['value'] = this.food.full_nutrients.find(x => x.attr_id == 269).value
    info7['unit'] = 'g'
    this.nutrition.push(info7)
    this.nutritionOriginal.push(info7)
    
    // chol
    let info8 : Object = {}
    info8['name'] = 'Cholesterol'
    info8['value'] = this.food.full_nutrients.find(x => x.attr_id == 601).value
    info8['unit'] = 'mg'
    this.nutrition.push(info8)
    this.nutritionOriginal.push(info8)
    
    // sodium
    let info9 : Object = {}
    info9['name'] = 'Sodium'
    info9['value'] = this.food.full_nutrients.find(x => x.attr_id == 307).value
    info9['unit'] = 'mg'
    this.nutrition.push(info9)
    this.nutritionOriginal.push(info9)
  }

  editServing() {
    let serving = this.food.alt_measures.find(x => x.measure == this.serving).serving_weight
    let ratio = serving / this.servingWeight
    this.servingWeight = serving
    this.cals = this.cals * ratio
    this.nutrition.forEach(element => {
      element['value'] = element['value'] * ratio
    });
  }

  addQuantity(quan) {
    this.nutrition.forEach(element => {
      element['value'] += ((element['value']/this.quantity)*quan)
    });
    this.servingWeight += (this.food.serving_weight_grams*quan)
    this.cals += (this.food.nf_calories*quan)
    this.quantity += quan
  }

  setMeal() {
    var time = new Date().getHours();
    console.log(time)
    if (time >= 5 && time <= 10) {
      this.food.meal = 'Breakfast'
    } else if (time >= 10 && time < 12) {
      this.food.meal = 'Snack'
    } else if (time >= 12 && time < 14) {
      this.food.meal = 'Lunch'
    } else if (time >= 14 && time < 18) {
      this.food.meal = 'Snack'
    } else if (time >= 18 && time < 20) {
      this.food.meal = 'Dinner'
    } else {
      this.food.meal = 'Snack'
    }
  }

  changeMeal(meal) {
    this.food.meal = meal
  }

  saveEdits() {
    this.food.nf_calories = this.cals
    this.food.serving_qty = this.quantity
    this.food.serving_unit = this.serving
    this.food.serving_weight_grams = this.servingWeight
    this.food.edited = true

    // info
    this.food.full_nutrients.find(x => x.attr_id == 203).value = this.nutrition[0]['value']
    this.food.nf_protein = this.nutrition[0]['value']
    this.food.full_nutrients.find(x => x.attr_id == 204).value = this.nutrition[1]['value']
    this.food.nf_total_fat = this.nutrition[1]['value']
    this.food.full_nutrients.find(x => x.attr_id == 606).value = this.nutrition[2]['value']
    this.food.full_nutrients.find(x => x.attr_id == 605).value = this.nutrition[3]['value']
    this.food.full_nutrients.find(x => x.attr_id == 205).value = this.nutrition[4]['value']
    this.food.nf_total_carbohydrate = this.nutrition[4]['value']
    this.food.full_nutrients.find(x => x.attr_id == 291).value = this.nutrition[5]['value']
    this.food.full_nutrients.find(x => x.attr_id == 269).value = this.nutrition[6]['value']
    this.food.full_nutrients.find(x => x.attr_id == 601).value = this.nutrition[7]['value']
    this.food.full_nutrients.find(x => x.attr_id == 307).value = this.nutrition[8]['value']
  }

  createCharts() {
    // protein 
    this.chartP = new Chart('proteinCanvas', {
      type: "doughnut",
      data: {
        datasets: [
          {
            data: [this.food.calsP, this.food.calsF, this.food.calsC],
            backgroundColor: [
              "#988CFF",
              "#8EE7A8",
              "#439BFF"
            ],
            hoverBackgroundColor: ["#988CFF", "#8EE7A8", "#439BFF"]
          }
        ]
      },
      options: {
        showTooltips : true,
        animation: true,
        responsive: true,
        maintainAspectRatio: true,
        cutout : 35
      }
    });

    // fat 
    /*this.chartF = new Chart('fatCanvas', {
      type: "doughnut",
      data: {
        datasets: [
          {
            data: [this.food.calsF, this.food.nf_calories],
            backgroundColor: [
              "#439BFF",
              "#F5F6FA",
            ],
            hoverBackgroundColor: ["#439BFF", "#F5F6FA"]
          }
        ]
      },
      options: {
        showTooltips : true,
        animation: true,
        responsive: true,
        cutout : 70
      }
    });

    // carbs 
    this.chartP = new Chart('carbsCanvas', {
      type: "doughnut",
      data: {
        datasets: [
          {
            data: [this.food.calsC, this.food.nf_calories],
            backgroundColor: [
              "#439BFF",
              "#F5F6FA",
            ],
            hoverBackgroundColor: ["#439BFF", "#F5F6FA"]
          }
        ]
      },
      options: {
        showTooltips : true,
        animation: true,
        responsive: true,
        cutout : 70
      }
    });*/
  }

}
