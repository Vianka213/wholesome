import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-add-exercise',
  templateUrl: './add-exercise.page.html',
  styleUrls: ['./add-exercise.page.scss'],
})
export class AddExercisePage implements OnInit {

  constructor(public viewCtrl: ModalController) { }

  test = {
    "exercises": [
      {
        "tag_id": 316,
        "user_input": "ran",
        "duration_min": 34.63,
        "met": 9,
        "nf_calories": 363.62,
        "photo": {
          "thumb": "https://d2xdmhkmkbyw75.cloudfront.net/exercise/316_thumb.jpg",
          "highres": null
        },
        "compendium_code": 12040,
        "name": "running"
      }
    ]
  }

  searchQuery : String = ''
  searchResults : Object[] = []
  addedExercise : Object[] = []
  segment : string = "all"

  ngOnInit() {
  }

  searchExercise(query) {
    console.log(query)
    /*this.trackerService.naturalSearchEx(query).subscribe( data => {
      this.searchResults = data['exercises']
      console.log(this.searchResults)
    })*/

    this.searchResults = this.test['exercises']
  }

  dismissModal() {
    this.viewCtrl.dismiss();
  }

}
