import { Component, OnInit } from '@angular/core';
import { IonItemSliding, ModalController } from '@ionic/angular';
import { AddWorkoutPage } from '../add-workout/add-workout.page';
import { HeaderService } from '../shared/services/header.service';
import { WorkoutService } from '../shared/services/workout.service';

@Component({
  selector: 'app-my-workouts',
  templateUrl: './my-workouts.page.html',
  styleUrls: ['./my-workouts.page.scss'],
})
export class MyWorkoutsPage implements OnInit {
  allWorkouts : Object[] = []
  workouts : Object[] = []
  searchQuery : String = ''

  constructor(public modalController: ModalController, public workoutService : WorkoutService, public headerService: HeaderService) { }

  ngOnInit() {
    this.getWorkouts()
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

  deleteWorkout(workout, sliding?: IonItemSliding) {
    let index = this.workouts.indexOf(workout)
    this.workouts.splice(index, 1)

    let values = {'workoutID': workout._id}
    this.workoutService.deleteWorkout(localStorage.getItem('token'), values).subscribe(data => {
      console.log(data['workouts'])
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

  async openAddWorkoutModal() {
    const modal = await this.modalController.create({
    component: AddWorkoutPage,
    swipeToClose: true
    });
    return await modal.present();
   }

}
