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
  amountWater : 2
  maxWater : 8

  ngOnInit() {
    this.createChart()
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
      }
    });
  }

}
