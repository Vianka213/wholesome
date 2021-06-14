import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-add-exercise',
  templateUrl: './add-exercise.page.html',
  styleUrls: ['./add-exercise.page.scss'],
})
export class AddExercisePage implements OnInit {

  constructor(public viewCtrl: ModalController) { }

  ngOnInit() {
  }

  dismissModal() {
    this.viewCtrl.dismiss();
  }

}
