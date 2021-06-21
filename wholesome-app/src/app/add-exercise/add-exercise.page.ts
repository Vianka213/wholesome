import { Component, OnInit } from '@angular/core';
import { IonItemSliding, ModalController, ToastController } from '@ionic/angular';
import { HeaderService } from '../shared/services/header.service';
import { TrackerService } from '../shared/services/tracker.service';
import { WorkoutService } from '../shared/services/workout.service';

@Component({
  selector: 'app-add-exercise',
  templateUrl: './add-exercise.page.html',
  styleUrls: ['./add-exercise.page.scss'],
})
export class AddExercisePage implements OnInit {

  constructor(public trackerService : TrackerService, public workoutService: WorkoutService, public headerService : HeaderService, public viewCtrl: ModalController, public toastController : ToastController) { }

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
  allWorkouts : Object[] = []
  workouts : Object[] = []

  ngOnInit() {
    this.getWorkouts()
  }

  searchExercise(query) {
    console.log(query)
    this.trackerService.naturalSearchEx(query, 'female', 72.5, 167.64, 30).subscribe( data => {
      console.log(data)
      this.searchResults = data['exercises']
      console.log(this.searchResults)
    })

    //this.searchResults = this.test['exercises']
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

  getWorkouts() {
    this.workoutService.getWorkout(localStorage.getItem('token')).subscribe(data => {
      console.log(data)
      this.allWorkouts = data['workouts']
      this.allWorkouts.forEach(element => {
        let type = element['Type']
        switch (type) {
          case 'Aerobic':
            element['Picture'] = 'https://img.freepik.com/free-vector/set-80s-years-woman-girl-aerobics-outfit-doing-workout-shaping_114579-807.jpg?size=626&ext=jpg'
            break;
          case 'Strength':
            element['Picture'] = 'https://image.freepik.com/free-vector/set-strength-training-men-women-lifting-weights_1262-19930.jpg'
            break;
          case 'Flexibility':
            element['Picture'] = 'https://img.freepik.com/free-vector/set-flexible-people-various-positions_1262-19331.jpg?size=626&ext=jpg'
            break;
          case 'Balance':
            element['Picture'] = 'https://img.freepik.com/free-vector/set-people-practicing-yoga_1262-19347.jpg?size=626&ext=jpg'
            break;
          default:
            element['Picture'] = 'https://media.istockphoto.com/vectors/sport-people-young-athletic-woman-fitness-activities-sports-man-and-vector-id1193484059?b=1&k=6&m=1193484059&s=612x612&w=0&h=t8fJOEoBWH3yXgshhuR23DWlnAW0eMu80sUNAKHgbq8='
            break;
        }
      });

      this.workouts = this.allWorkouts
    }, error => {
        console.log(error)
        let errorCode = error['status'];
        if (errorCode == '403')
        {   // kick user out
            this.headerService.kickOut();
        }
    })
  }

  searchWorkout() {
    this.workouts = this.allWorkouts.filter(workout => 
      workout['name'].toLowerCase().indexOf(this.searchQuery.toLowerCase()) != -1
    )
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
