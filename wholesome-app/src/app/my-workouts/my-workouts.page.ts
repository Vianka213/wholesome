import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddWorkoutPage } from '../add-workout/add-workout.page';

@Component({
  selector: 'app-my-workouts',
  templateUrl: './my-workouts.page.html',
  styleUrls: ['./my-workouts.page.scss'],
})
export class MyWorkoutsPage implements OnInit {

  constructor(public modalController : ModalController) { }

  ngOnInit() {
  }

  async openAddWorkoutModal() {
    const modal = await this.modalController.create({
    component: AddWorkoutPage,
    swipeToClose: true
    });
    return await modal.present();
   }

}
