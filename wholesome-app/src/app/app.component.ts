import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddFoodPageModule } from '../app/add-food/add-food.module';
import { AddFoodPage } from '../app/add-food/add-food.page';
import { AddExercisePage } from './add-exercise/add-exercise.page';
import { AddWaterPage } from './add-water/add-water.page';
import { HeaderService } from './shared/services/header.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  fab : Boolean = false

  constructor(public headerService: HeaderService, public modalController: ModalController) {}

  async openAddFoodModal() {
    const modal = await this.modalController.create({
    component: AddFoodPage,
    swipeToClose: true
    });
    return await modal.present();
   }

  async openAddWaterModal() {
    const modal = await this.modalController.create({
    component: AddWaterPage,
    swipeToClose: true
    });
    return await modal.present();
   }

  async openAddExerciseModal() {
    const modal = await this.modalController.create({
    component: AddExercisePage,
    swipeToClose: true
    });
    return await modal.present();
   }
}
