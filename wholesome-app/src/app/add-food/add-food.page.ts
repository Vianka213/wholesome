import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TrackerService } from '../shared/services/tracker.service';

@Component({
  selector: 'app-add-food',
  templateUrl: './add-food.page.html',
  styleUrls: ['./add-food.page.scss'],
})
export class AddFoodPage implements OnInit {

  constructor(public viewCtrl: ModalController, public trackerService : TrackerService) { }

  ngOnInit() {
  }

  dismissModal() {
    this.viewCtrl.dismiss();
  }

  searchFood(query) {
    this.trackerService.naturalSearch(query).subscribe( data => {
      console.log(data)
    })
  }

}
