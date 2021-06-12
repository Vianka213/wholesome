import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-edit-food',
  templateUrl: './edit-food.page.html',
  styleUrls: ['./edit-food.page.scss'],
})
export class EditFoodPage implements OnInit {
  @Input() food: any;
  percentProtein : any = 0
  percentFat : any = 0
  percentCarbs : any = 0

  private chartP : Chart
  private chartF : Chart
  private chartC : Chart

  constructor(public viewCtrl: ModalController) { }

  ngOnInit() {
    console.log(this.food)
    this.percentProtein = ((this.food.nf_protein/this.food.nf_calories)*100).toFixed(0)
    this.percentFat = ((this.food.nf_total_fat/this.food.nf_calories)*100).toFixed(0)
    this.percentCarbs = ((this.food.nf_total_carbohydrate/this.food.nf_calories)*100).toFixed(0)
    this.createCharts()
  }

  dismissModal() {
    this.viewCtrl.dismiss(this.food);
  }

  createCharts() {
    // protein 
    this.chartP = new Chart('proteinCanvas', {
      type: "doughnut",
      data: {
        datasets: [
          {
            data: [this.food.nf_protein, this.food.nf_calories],
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
        responsive: true,
        maintainAspectRatio: true,
        cutout : 70
      }
    });

    // fat 
    this.chartF = new Chart('fatCanvas', {
      type: "doughnut",
      data: {
        datasets: [
          {
            data: [this.food.nf_total_fat, this.food.nf_calories],
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
        responsive: true,
        cutout : 70
      }
    });

    // carbs 
    this.chartP = new Chart('carbsCanvas', {
      type: "doughnut",
      data: {
        datasets: [
          {
            data: [this.food.nf_total_carbohydrate, this.food.nf_calories],
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
        responsive: true,
        cutout : 70
      }
    });
  }

}
