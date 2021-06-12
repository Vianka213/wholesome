import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-edit-food',
  templateUrl: './edit-food.page.html',
  styleUrls: ['./edit-food.page.scss'],
})
export class EditFoodPage implements OnInit {
  @Input() food: any;

  constructor(public viewCtrl: ModalController) { }

  ngOnInit() {
    console.log(this.food)
  }

  dismissModal() {
    this.viewCtrl.dismiss(this.food);
  }

}
