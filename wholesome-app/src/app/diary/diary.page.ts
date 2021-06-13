import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TrackerService } from '../shared/services/tracker.service';
import { MbscEventcalendarOptions, Notifications, MbscCalendarEvent  } from '@mobiscroll/angular';



@Component({
  selector: 'app-diary',
  templateUrl: './diary.page.html',
  styleUrls: ['./diary.page.scss'],
  providers: [Notifications]
})
export class DiaryPage implements OnInit {
  apiKey = '09030db3ec2a4ebf8220bcd0fa7c5944'

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

  constructor(private http : HttpClient, public trackerService : TrackerService, private notify : Notifications) { }

  myEvents: MbscCalendarEvent[] = [];
  foodEntries : Object[] = []

  eventSettings: MbscEventcalendarOptions = {
    theme: 'ios',
    themeVariant: 'light',
    view: {
        calendar: { type: 'week' },
        agenda: { type: 'day' }
    },
    onEventClick: (event) => {
        this.notify.toast({
            message: event.event.title
        });
    }
};

  ngOnInit() {

    this.myEvents.push({"recurring":{"repeat":"daily"}, "title": "Breakfast", "color": "#988CFF", "start": "08:00"})
    this.myEvents.push({"recurring":{"repeat":"daily"}, "title": "Lunch", "color": "#8EE7A8", "start": "12:00"})
    this.myEvents.push({"recurring":{"repeat":"daily"}, "title": "Dinner", "color": "#439BFF", "start": "18:00"})
    this.myEvents.push({"recurring":{"repeat":"daily"}, "title": "Snacks", "color": "#E6E2FF", "start": "19:00"})
    this.myEvents.push({"recurring":{"repeat":"daily"}, "title": "Exercise", "color": "#E6E2FF", "start": "20:00"})
    this.foodEntries = this.test
    console.log(this.foodEntries)
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

}
