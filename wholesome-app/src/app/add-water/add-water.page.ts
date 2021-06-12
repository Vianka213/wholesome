import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-add-water',
  templateUrl: './add-water.page.html',
  styleUrls: ['./add-water.page.scss'],
})
export class AddWaterPage implements OnInit {

  constructor(public viewCtrl: ModalController) { }

  private chart : Chart
  amountWater : number = 2
  maxWater : number = 8
  percentWater : any = 0
  amountToAdd : number = 0

  ngOnInit() {    
    this.createChart()
    this.percentWater = ((this.amountWater/this.maxWater)*100).toFixed(0)
  }

  dismissModal() {
    this.viewCtrl.dismiss();
  }

  createChart() {
    this.chart = new Chart('waterCanvas', {
      type: "doughnut",
      data: {
        datasets: [
          {
            data: [this.amountWater, this.maxWater],
            backgroundColor: [
              "#439BFF",
              "#F5F6FA",
            ],
            hoverBackgroundColor: ["#439BFF", "#F5F6FA"]
          }
        ]
      },
      options: {
        showTooltips : true,
        animation: true,
        cutout : 60
      }
    });
  }


  addWater(amount) {
    this.amountToAdd += amount
  }

  logWater() {
    // create log for amountToAdd
    console.log(this.amountToAdd)
  }
}
