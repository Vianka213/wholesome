import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddFoodPageModule } from '../app/add-food/add-food.module';
import { AddFoodPage } from '../app/add-food/add-food.page';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(public modalController: ModalController) {}

  async openAddFoodModal() {
    const modal = await this.modalController.create({
    component: AddFoodPage
    });
    return await modal.present();
   }
}
