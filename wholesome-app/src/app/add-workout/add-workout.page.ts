import { Component, OnInit } from '@angular/core';
import { IonItemSliding, ModalController } from '@ionic/angular';
import { TrackerService } from '../shared/services/tracker.service';

@Component({
  selector: 'app-add-workout',
  templateUrl: './add-workout.page.html',
  styleUrls: ['./add-workout.page.scss'],
})
export class AddWorkoutPage implements OnInit {

  constructor(public trackerService: TrackerService, public viewCtrl : ModalController) { }

  exs : String = ''
  exercises : Object[] = []
  name : String = ''
  type : String = ''
  tags : String = ''

  ngOnInit() {
  }

  getExercises() {
    console.log(this.exs)
    this.trackerService.naturalSearchEx(this.exs, 'female', 72.5, 167.64, 30).subscribe( data => {
      console.log(data)
      let temp = data['exercises']
      temp.forEach(element => {
        this.exercises.push(element)
      });
      console.log(this.exercises)
    })
    this.exs = ''
  }

  changeType(type) {
    this.type = type
  }

  removeExercise(ex, sliding?: IonItemSliding) {
    let index = this.exercises.indexOf(ex)
    this.exercises.splice(index, 1)
  }

  createWorkout() {
    let values = {}
    values['name'] = this.name
    values['type'] = this.type
    values['tags'] = this.tags
    values['exercises'] = this.exercises

    let dur = 0
    this.exercises.forEach(element => {
      dur += element['duration_min']
    });
    values['duration'] = dur

    console.log(values)

    this.addWorkout(values)
  }

  addWorkout(values) {
    /*this.recipeService.addRecipe(localStorage.getItem('token'), values).subscribe(data => {
      console.log(data)
    }, error => {
        console.log(error)
        let errorCode = error['status'];
        if (errorCode == '403')
        {   // kick user out
            this.headerService.kickOut();
        }
    })*/
  }

  dismissModal() {
    this.viewCtrl.dismiss();
  }

}
