import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { HeaderService } from '../shared/services/header.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(public headerService : HeaderService, public actionSheetController: ActionSheetController) { }

  delish = true
  segment : string = "feed"
  follow = false
  ngOnInit() {
  }

  async presentActionSheet(name) {
    const actionSheet = await this.actionSheetController.create({
      header: name,
      cssClass: 'my-custom-class',
      buttons: [{
        text: 'Unfollow',
        role: 'destructive',
        handler: () => {
          this.delish = false
          console.log('Delete clicked');
        }
      }, {
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();

    const { role } = await actionSheet.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  followAcc() {
    this.follow = true
  }

}
