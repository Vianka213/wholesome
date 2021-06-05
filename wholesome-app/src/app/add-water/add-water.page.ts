import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-add-water',
  templateUrl: './add-water.page.html',
  styleUrls: ['./add-water.page.scss'],
})
export class AddWaterPage implements OnInit {

  constructor(public viewCtrl: ModalController) { }

  ngOnInit() {
  }

  dismissModal() {
    this.viewCtrl.dismiss();
  }

}
