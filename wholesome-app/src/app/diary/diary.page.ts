import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TrackerService } from '../shared/services/tracker.service';
import { MbscEventcalendarOptions, Notifications, MbscCalendarEvent  } from '@mobiscroll/angular';
import { IonItemSliding, ModalController } from '@ionic/angular';
import { EditFoodPage } from '../edit-food/edit-food.page';
import { HeaderService } from '../shared/services/header.service';



@Component({
  selector: 'app-diary',
  templateUrl: './diary.page.html',
  styleUrls: ['./diary.page.scss'],
  providers: [Notifications]
})
export class DiaryPage implements OnInit {
  apiKey = '09030db3ec2a4ebf8220bcd0fa7c5944'

  test = {
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
  }

  constructor(public viewCtrl: ModalController, private http : HttpClient, public trackerService : TrackerService, public headerService : HeaderService, private notify : Notifications) { }

  myEvents: MbscCalendarEvent[] = [];
  foodEntries : Object[] = []
  breakfast : Object[] = []
  lunch : Object[] = []
  dinner : Object[] = []
  snacks : Object[] = []
  exercise : Object[] = []
  totals : Object = {'breakfastCals' : 0, 'lunchCals' : 0, 'dinnerCals' : 0, 'snacksCals' : 0, 'exerciseCals' : 0, 'totalCals': 0, 'water': 0}
  myDate : Date = new Date()

  eventSettings: MbscEventcalendarOptions = {
    theme: 'ios',
    themeVariant: 'light',
    view: {
        calendar: { type: 'week' },
        agenda: { type: 'day' }
    }, onSelectedDateChange: (event: any) => {
        console.log(this.myDate)
        this.getUserLog(this.myDate)
    }/*,
    onEventClick: (event) => {
        this.notify.toast({
            message: event.event.title
        });
    }*/
};

  ngOnInit() {

    this.myEvents.push({"recurring":{"repeat":"daily"}, "title": "Breakfast", "color": "#988CFF", "start": "08:00"})
    this.myEvents.push({"recurring":{"repeat":"daily"}, "title": "Lunch", "color": "#8EE7A8", "start": "12:00"})
    this.myEvents.push({"recurring":{"repeat":"daily"}, "title": "Dinner", "color": "#439BFF", "start": "18:00"})
    this.myEvents.push({"recurring":{"repeat":"daily"}, "title": "Snacks", "color": "#E6E2FF", "start": "19:00"})
    this.myEvents.push({"recurring":{"repeat":"daily"}, "title": "Exercise", "color": "#E6E2FF", "start": "20:00"})
    this.foodEntries.push(this.test)
    this.foodEntries.push(this.test)
    console.log(this.foodEntries)
    this.getUserLog(new Date())
    //this.http.get<any>('https://api.spoonacular.com/recipes/complexSearch?query=burger&apiKey=' + this.apiKey).subscribe(data => {
      //  console.log(data)
  //})

  //this.trackerService.naturalSearch('big mac and fries').subscribe( data => {
  //  console.log(data)
  //})

  //this.http.jsonp<MbscCalendarEvent[]>('https://trial.mobiscroll.com/events/?vers=5', 'callback').subscribe((resp) => {
  //          this.myEvents = resp;
  //      });
    }

    calcCalories(food : Object) {
        let p = food['nf_protein']*4
        let f = food['nf_total_fat']*9
        let c = food['nf_total_carbohydrate']*4
    
        let cals = food['nf_calories']
    
        food['calsP'] = Math.floor(p).toFixed(0)
        food['calsF'] = Math.floor(f).toFixed(0)
        food['calsC'] = Math.floor(c).toFixed(0)
    
        food['percentP'] = Math.floor((p * 100 / cals))
        food['percentF'] = Math.floor(f * 100 / cals)
        food['percentC'] = Math.floor(c * 100 / cals)
      }

      getUserLog(dt : Date) {
        let logDate
        logDate = dt.getFullYear() + "/"
        if (dt.getMonth() + 1 < 10) 
            logDate += '0' 
        logDate += dt.getMonth() + 1 + '/'
        if (dt.getDate() < 10) 
            logDate += '0' 
            logDate += dt.getDate()

        this.breakfast = []
        this.lunch = []
        this.dinner = []
        this.snacks = []
        this.exercise = []
        this.totals['breakfastCals'] = 0
        this.totals['lunchCals'] = 0
        this.totals['dinnerCals'] = 0
        this.totals['snacksCals'] = 0
        this.totals['totalCals'] = 0
        this.totals['exerciseCals'] = 0
        this.totals['water'] = 0

          let values = {'logDate': logDate, 'ID': '60ab91b8158bd2145499e0cc'}
          this.trackerService.getUserLog(localStorage.getItem('token'), values).subscribe(data => {
            this.totals['water'] = data['log'].Water
            console.log(data['log'].FoodEntries)

            // exercise
            let entriesEx = data['log'].ExerciseEntries
            console.log(entriesEx)
            entriesEx.forEach(element => {
                let exs = {'entryID' : element}
                this.trackerService.getExerciseEntry(localStorage.getItem('token'), exs).subscribe(data => {
                    console.log(data)
                    let ex = data['exercise'].Exercise
                    ex.exerciseEntryID = data['exercise']._id
                    this.totals['exerciseCals'] += ex['nf_calories']

                    let type = ex['Type']
                    switch (type) {
                    case 'Aerobic':
                        ex['Picture'] = 'https://img.freepik.com/free-vector/set-80s-years-woman-girl-aerobics-outfit-doing-workout-shaping_114579-807.jpg?size=626&ext=jpg'
                        break;
                    case 'Strength':
                        ex['Picture'] = 'https://image.freepik.com/free-vector/set-strength-training-men-women-lifting-weights_1262-19930.jpg'
                        break;
                    case 'Flexibility':
                        ex['Picture'] = 'https://img.freepik.com/free-vector/set-flexible-people-various-positions_1262-19331.jpg?size=626&ext=jpg'
                        break;
                    case 'Balance':
                        ex['Picture'] = 'https://img.freepik.com/free-vector/set-people-practicing-yoga_1262-19347.jpg?size=626&ext=jpg'
                        break;
                    default:
                        ex['Picture'] = 'https://media.istockphoto.com/vectors/sport-people-young-athletic-woman-fitness-activities-sports-man-and-vector-id1193484059?b=1&k=6&m=1193484059&s=612x612&w=0&h=t8fJOEoBWH3yXgshhuR23DWlnAW0eMu80sUNAKHgbq8='
                        break;
                    }
                    if (ex.Picture) {
                        ex.photo = {'thumb' : ex.Picture}
                    }

                    this.exercise.push(ex)
                })
            })
            // food
            let entries = data['log'].FoodEntries
            entries.forEach(element => {
                let values1 = {'entryID' : element}
                this.trackerService.getFoodEntry(localStorage.getItem('token'), values1).subscribe(data => {
                    console.log(data)
                    let food = data['food'].Food
                    food.foodEntryID = data['food']._id
                    if (food.Picture) {
                        food.photo = {'thumb' : food.Picture}
                    }
                    console.log(food)
                    switch (food.meal) {
                        case 'Breakfast':
                            this.breakfast.push(food)
                            this.totals['breakfastCals'] += food['nf_calories']
                            break;
                        case 'Lunch':
                            this.lunch.push(food)
                            this.totals['lunchCals'] += food['nf_calories']
                            break;
                        case 'Dinner':
                            this.dinner.push(food)
                            this.totals['dinnerCals'] += food['nf_calories']
                            break;
                        case 'Snack':
                            this.snacks.push(food)
                            this.totals['snacksCals'] += food['nf_calories']
                            break;
                    }
                    this.totals['totalCals'] += food['nf_calories']
                })
            });
        }, error => {
            console.log(error)
            console.log('hi')
            let errorCode = error['status'];
            if (errorCode == '403')
            {   // kick user out
                this.headerService.kickOut();
            }
        })
      }

      updateFoodEntry(food) {
        let values = {'foodEntryID': food.foodEntryID, 'food': food}
        console.log(food)
        this.trackerService.updateFoodEntry(localStorage.getItem('token'), values).subscribe(data => {
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

      deleteFoodEntry(food, sliding?: IonItemSliding) {
        let dt = this.myDate
        let logDate
        logDate = dt.getFullYear() + "/"
        if (dt.getMonth() + 1 < 10) 
            logDate += '0' 
        logDate += dt.getMonth() + 1 + '/'
        if (dt.getDate() < 10) 
            logDate += '0' 
            logDate += dt.getDate()

        let values = {'foodEntryID': food.foodEntryID, 'logDate': logDate}
        console.log(food)
        this.trackerService.deleteFoodEntry(localStorage.getItem('token'), values).subscribe(data => {
          console.log(data)
      }, error => {
          console.log(error)
          let errorCode = error['status'];
          if (errorCode == '403')
          {   // kick user out
              this.headerService.kickOut();
          }
      })

      let index
      switch (food.meal) {
        case 'Breakfast':
            index = this.breakfast.indexOf(food)
            this.breakfast.splice(index, 1)
            this.totals['breakfastCals'] -= food['nf_calories']
            break;
        case 'Lunch':
            index = this.lunch.indexOf(food)
            this.lunch.splice(index, 1)
            this.totals['lunchCals'] -= food['nf_calories']
            break;
        case 'Dinner':
            index = this.dinner.indexOf(food)
            this.dinner.splice(index, 1)
            this.totals['dinnerCals'] -= food['nf_calories']
            break;
        case 'Snack':
            index = this.snacks.indexOf(food)
            this.snacks.splice(index, 1)
            this.totals['snacksCals'] -= food['nf_calories']
            break;
    }
    this.totals['totalCals'] -= food['nf_calories']        
      }

      deleteExerciseEntry(exercise, sliding?: IonItemSliding) {
        let dt = this.myDate
        let logDate
        logDate = dt.getFullYear() + "/"
        if (dt.getMonth() + 1 < 10) 
            logDate += '0' 
        logDate += dt.getMonth() + 1 + '/'
        if (dt.getDate() < 10) 
            logDate += '0' 
            logDate += dt.getDate()

        let index = this.exercise.indexOf(exercise)
        this.exercise.splice(index, 1)
        this.totals['exerciseCals'] -= exercise['nf_calories']

        let values = {'exerciseEntryID': exercise.exerciseEntryID, 'logDate': logDate}
        console.log(exercise)
        this.trackerService.deleteExerciseEntry(localStorage.getItem('token'), values).subscribe(data => {
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

    async openEditFoodModal(food) {
        this.calcCalories(food)
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
            this.updateFoodEntry(food)
        });
    
        return await modal.present();
       }

}
