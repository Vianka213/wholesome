import { Component, OnInit } from '@angular/core';
import { IonItemSliding, ModalController, ToastController } from '@ionic/angular';
import { EditFoodPage } from '../edit-food/edit-food.page';
import { HeaderService } from '../shared/services/header.service';
import { TrackerService } from '../shared/services/tracker.service';

@Component({
  selector: 'app-add-food',
  templateUrl: './add-food.page.html',
  styleUrls: ['./add-food.page.scss'],
})
export class AddFoodPage implements OnInit {
  searchQuery : string
  searchResults : Object[] = []
  //addedFood : Object[] = [{'food_name': 'Chicken Noodle Soup'}, {'food_name': 'apple'}]
  addedFood : Object[] = []
  test = [{
    "food_name": "chicken noodle soup",
    "brand_name": null,
    "serving_qty": 1,
    "serving_unit": "cup",
    "serving_weight_grams": 248,
    "nf_calories": 62,
    "nf_total_fat": 2.36,
    "nf_saturated_fat": 0.65,
    "nf_cholesterol": 12.4,
    "nf_sodium": 865.52,
    "nf_total_carbohydrate": 7.32,
    "nf_dietary_fiber": 0.5,
    "nf_sugars": 0.67,
    "nf_protein": 3.15,
    "nf_potassium": 54.56,
    "nf_p": 42.16,
    "full_nutrients": [
        {
            "attr_id": 203,
            "value": 3.1496
        },
        {
            "attr_id": 204,
            "value": 2.356
        },
        {
            "attr_id": 205,
            "value": 7.316
        },
        {
            "attr_id": 207,
            "value": 2.5048
        },
        {
            "attr_id": 208,
            "value": 62
        },
        {
            "attr_id": 221,
            "value": 0
        },
        {
            "attr_id": 255,
            "value": 232.6736
        },
        {
            "attr_id": 262,
            "value": 0
        },
        {
            "attr_id": 263,
            "value": 0
        },
        {
            "attr_id": 268,
            "value": 262.88
        },
        {
            "attr_id": 269,
            "value": 0.6696
        },
        {
            "attr_id": 291,
            "value": 0.496
        },
        {
            "attr_id": 301,
            "value": 14.88
        },
        {
            "attr_id": 303,
            "value": 1.6368
        },
        {
            "attr_id": 304,
            "value": 9.92
        },
        {
            "attr_id": 305,
            "value": 42.16
        },
        {
            "attr_id": 306,
            "value": 54.56
        },
        {
            "attr_id": 307,
            "value": 865.52
        },
        {
            "attr_id": 309,
            "value": 0.3968
        },
        {
            "attr_id": 312,
            "value": 0.1587
        },
        {
            "attr_id": 315,
            "value": 0.1265
        },
        {
            "attr_id": 317,
            "value": 11.904
        },
        {
            "attr_id": 318,
            "value": 498.48
        },
        {
            "attr_id": 319,
            "value": 2.48
        },
        {
            "attr_id": 320,
            "value": 27.28
        },
        {
            "attr_id": 321,
            "value": 295.12
        },
        {
            "attr_id": 322,
            "value": 0
        },
        {
            "attr_id": 323,
            "value": 0.0744
        },
        {
            "attr_id": 324,
            "value": 0
        },
        {
            "attr_id": 328,
            "value": 0
        },
        {
            "attr_id": 334,
            "value": 0
        },
        {
            "attr_id": 337,
            "value": 0
        },
        {
            "attr_id": 338,
            "value": 9.92
        },
        {
            "attr_id": 401,
            "value": 0
        },
        {
            "attr_id": 404,
            "value": 0.1364
        },
        {
            "attr_id": 405,
            "value": 0.1116
        },
        {
            "attr_id": 406,
            "value": 1.3392
        },
        {
            "attr_id": 410,
            "value": 0.1835
        },
        {
            "attr_id": 415,
            "value": 0.0496
        },
        {
            "attr_id": 417,
            "value": 19.84
        },
        {
            "attr_id": 418,
            "value": 0.0496
        },
        {
            "attr_id": 421,
            "value": 13.64
        },
        {
            "attr_id": 430,
            "value": 0
        },
        {
            "attr_id": 431,
            "value": 14.88
        },
        {
            "attr_id": 432,
            "value": 4.96
        },
        {
            "attr_id": 435,
            "value": 29.76
        },
        {
            "attr_id": 601,
            "value": 12.4
        },
        {
            "attr_id": 605,
            "value": 0.0074
        },
        {
            "attr_id": 606,
            "value": 0.6498
        },
        {
            "attr_id": 607,
            "value": 0
        },
        {
            "attr_id": 608,
            "value": 0
        },
        {
            "attr_id": 609,
            "value": 0
        },
        {
            "attr_id": 610,
            "value": 0
        },
        {
            "attr_id": 611,
            "value": 0.0025
        },
        {
            "attr_id": 612,
            "value": 0.0124
        },
        {
            "attr_id": 613,
            "value": 0.4861
        },
        {
            "attr_id": 614,
            "value": 0.1314
        },
        {
            "attr_id": 615,
            "value": 0.0074
        },
        {
            "attr_id": 617,
            "value": 0.8432
        },
        {
            "attr_id": 618,
            "value": 0.5952
        },
        {
            "attr_id": 619,
            "value": 0.0446
        },
        {
            "attr_id": 620,
            "value": 0.0099
        },
        {
            "attr_id": 621,
            "value": 0
        },
        {
            "attr_id": 624,
            "value": 0.005
        },
        {
            "attr_id": 625,
            "value": 0.005
        },
        {
            "attr_id": 626,
            "value": 0.129
        },
        {
            "attr_id": 627,
            "value": 0
        },
        {
            "attr_id": 628,
            "value": 0.0198
        },
        {
            "attr_id": 629,
            "value": 0
        },
        {
            "attr_id": 630,
            "value": 0.0099
        },
        {
            "attr_id": 631,
            "value": 0
        },
        {
            "attr_id": 645,
            "value": 1.0366
        },
        {
            "attr_id": 646,
            "value": 0.6547
        },
        {
            "attr_id": 652,
            "value": 0.0025
        },
        {
            "attr_id": 653,
            "value": 0.005
        },
        {
            "attr_id": 654,
            "value": 0.0025
        },
        {
            "attr_id": 672,
            "value": 0.005
        },
        {
            "attr_id": 687,
            "value": 0.0198
        },
        {
            "attr_id": 689,
            "value": 0.0025
        },
        {
            "attr_id": 697,
            "value": 0.0099
        }
    ],
    "nix_brand_name": null,
    "nix_brand_id": null,
    "nix_item_name": null,
    "nix_item_id": null,
    "upc": null,
    "consumed_at": "2017-07-13T13:46:25+00:00",
    "metadata": {},
    "source": 1,
    "ndb_no": 6419,
    "tags": {
        "item": "chicken noodle soup",
        "measure": "cup",
        "quantity": "1.0",
        "tag_id": 256
    },
    "alt_measures": [
        {
            "serving_weight": 248,
            "measure": "serving 1 cup",
            "seq": 1,
            "qty": 1
        },
        {
            "serving_weight": 248,
            "measure": "cup",
            "seq": 80,
            "qty": 1
        },
        {
            "serving_weight": 586,
            "measure": "can",
            "seq": 81,
            "qty": 1
        },
        {
            "serving_weight": 496,
            "measure": "bowl (2 cups)",
            "seq": 82,
            "qty": 1
        },
        {
            "serving_weight": 5.17,
            "measure": "tsp",
            "seq": 101,
            "qty": 1
        },
        {
            "serving_weight": 15.5,
            "measure": "tbsp",
            "seq": 102,
            "qty": 1
        }
    ],
    "lat": null,
    "lng": null,
    "meal_type": 1,
    "photo": {
        "thumb": "https://d2xdmhkmkbyw75.cloudfront.net/256_thumb.jpg",
        "highres": "https://d2xdmhkmkbyw75.cloudfront.net/256_highres.jpg"
    }
}]

    segment : string = "all"

  constructor(public viewCtrl: ModalController, public trackerService : TrackerService, public headerService: HeaderService, public toastController : ToastController) { }

  ngOnInit() {
  }

  dismissModal() {
    this.viewCtrl.dismiss();
  }

  searchFood(query) {
    console.log(query)
    /*this.trackerService.naturalSearch(query).subscribe( data => {
      console.log(data)
      this.searchResults = data['foods']
      this.searchResults.forEach(element => {
        this.calcCalories(element)
        });
      console.log(this.searchResults)
    })*/

    this.searchResults = this.test
    this.searchResults.forEach(element => {
        this.calcCalories(element)
    });
  }

  addFood(food, sliding?: IonItemSliding) {
    let index = this.addedFood.indexOf(food)
    if (index == -1) {
        this.addedFood.push(food)
        let index2 = this.searchResults.indexOf(food)
        this.searchResults.splice(index2, 1)
    }
    else
        this.addedFood.splice(index, 1)

    if (sliding)
        sliding.close()
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

  addAll() {
      this.searchResults.forEach(element => {
          this.addedFood.push(element)
      });
      this.showToast('Added ' + this.searchResults.length + ' food items.')
      this.searchResults = []
      this.searchQuery = ''
  }

  logItems() {
    // set meals
    console.log(this.addedFood)
    this.addedFood.forEach(element => {
        this.setMeal(element)
        let values = {'food': element, 'date': new Date(), 'ID': '60ab91b8158bd2145499e0cc'}
        this.trackerService.addFoodEntry(localStorage.getItem('token'), values).subscribe(data => {
            console.log(data)
        }, error => {
            console.log(error)
            let errorCode = error['status'];
            if (errorCode == '403')
            {   // kick user out
                this.headerService.kickOut();
            }
        })
    });

    if (this.addedFood.length > 1)
        this.showToast('Logged ' + this.addedFood.length + ' food items successfully')
    else 
        this.showToast('Logged ' + this.addedFood[0]['food_name'] + ' successfully')
  }

  setMeal(food) {
    var time = new Date().getHours();
    console.log(time)
    if (time >= 5 && time <= 10) {
      food.meal = 'Breakfast'
    } else if (time >= 10 && time < 12) {
      food.meal = 'Snack'
    } else if (time >= 12 && time < 14) {
      food.meal = 'Lunch'
    } else if (time >= 14 && time < 18) {
      food.meal = 'Snack'
    } else if (time >= 18 && time < 20) {
      food.meal = 'Dinner'
    } else {
      food.meal = 'Snack'
    }
  }

  async showToast(msg) {
    const toast = await this.toastController.create({
        color: 'success',
        duration: 2000,
        message: msg
      });

      await toast.present();
  }

  async openEditFoodModal(food) {
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
            this.addedFood.push(food)
    });

    return await modal.present();
   }

}
