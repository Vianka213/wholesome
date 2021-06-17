import { Component, OnInit } from '@angular/core';
import { IonItemSliding, ModalController, ToastController } from '@ionic/angular';
import { HeaderService } from '../shared/services/header.service';
import { TrackerService } from '../shared/services/tracker.service';

@Component({
  selector: 'app-add-exercise',
  templateUrl: './add-exercise.page.html',
  styleUrls: ['./add-exercise.page.scss'],
})
export class AddExercisePage implements OnInit {

  constructor(public trackerService : TrackerService, public headerService : HeaderService, public viewCtrl: ModalController, public toastController : ToastController) { }

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
    /*this.trackerService.naturalSearchEx(query, 'female', 72.5, 167.64, 30).subscribe( data => {
      console.log(data)
      this.searchResults = data['exercises']
      console.log(this.searchResults)
    })*/

    this.searchResults = this.test['exercises']
  }

  addExercise(exercise, sliding?: IonItemSliding) {
    let index = this.addedExercise.indexOf(exercise)
    if (index == -1) {
        this.addedExercise.push(exercise)
        let index2 = this.searchResults.indexOf(exercise)
        this.searchResults.splice(index2, 1)
    }
    else
        this.addedExercise.splice(index, 1)

    if (sliding)
        sliding.close()
  }

  addAll() {
    this.searchResults.forEach(element => {
        this.addedExercise.push(element)
    });
    this.showToast('Added ' + this.searchResults.length + ' exercises.')
    this.searchResults = []
    this.searchQuery = ''
  }

  logItems() {
    // set meals
    console.log(this.addedExercise)
    this.addedExercise.forEach(element => {
        let values = {'exercise': element, 'logDate': new Date()}
        this.trackerService.addExerciseEntry(localStorage.getItem('token'), values).subscribe(data => {
            console.log(data)
            if (this.addedExercise.length > 1)
                this.showToast('Logged ' + this.addedExercise.length + ' exercises successfully')
            else 
                this.showToast('Logged ' + this.addedExercise[0]['name'] + ' successfully')
        }, error => {
            console.log(error)
            let errorCode = error['status'];
            if (errorCode == '403')
            {   // kick user out
                this.headerService.kickOut();
            }
        })
    });
  }

  async showToast(msg) {
    const toast = await this.toastController.create({
        color: 'success',
        duration: 2000,
        message: msg
      });

      await toast.present();
  }

  dismissModal() {
    this.viewCtrl.dismiss();
  }

}
