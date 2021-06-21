import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-analysis',
  templateUrl: './analysis.page.html',
  styleUrls: ['./analysis.page.scss'],
})
export class AnalysisPage implements OnInit {
  private macroC : Chart
  private calsC : Chart
  private weightC : Chart

  constructor() { }

  ngOnInit() {
    this.macroChart()
    this.calsChart()
    this.weightChart()
  }

  macroChart() {
    this.macroC = new Chart('macroCanvas', {
      type: "doughnut",
      data: {
        datasets: [
          {
            data: [16, 28, 56],
            backgroundColor: [
              "#988CFF",
              "#8EE7A8",
              "#439BFF"
            ],
            hoverBackgroundColor: ["#988CFF", "#8EE7A8", "#439BFF"]
          }
        ]
      },
      options: {
        showTooltips : true,
        animation: true,
        responsive: true,
        maintainAspectRatio: true,
        cutout : 60
      }
    });
  }

  calsChart() {
    this.calsC = new Chart('calsCanvas', {
      type: 'bar',
      data: {
        labels: [
          "15/06",
          "16/06",
          "17/06",
          "18/06",
          "19/06",
          "20/06",
          "21,06"
        ],
        datasets: [{
          data: [1105, 980, 1355, 1198, 1121, 0, 1645],
          backgroundColor: [
            "rgba(255, 255, 255, 0.6)",
            "rgba(255, 255, 255, 0.6)",
            "rgba(235, 68, 90, 0.6)",
            "rgba(255, 255, 255, 0.6)",
            "rgba(255, 255, 255, 0.6)",
            "rgba(255, 255, 255, 0.6)",
            "rgba(235, 68, 90, 0.6)"
          ],
          borderColor: [
            '#fff',
            '#fff',
            '#eb445a',
            '#fff',
            '#fff',
            '#fff',
            '#eb445a'
          ],
          borderWidth: 1,
          hoverBackgroundColor: [
            "#fff"
          ]
        }]
      },
      options: {
        plugins: {
        legend: {
          display: false
        }
      }
      }
    });
  }

  weightChart() {
    this.weightC = new Chart('weightCanvas', {
      type: 'line',
      data: {
        labels: [
          "Week 1",
          "Week 2",
          "Week 3",
          "Week 4"
        ],
        datasets: [{
          data: [55, 54.8, 54.8, 54.1],
          backgroundColor: [
            "rgba(255, 255, 255, 0.6)",
            "rgba(255, 255, 255, 0.6)"
          ],
          borderColor: [
            '#fff',
            '#fff'
          ],
          borderWidth: 1,
          hoverBackgroundColor: [
            "#fff"
          ]
        }]
      },
      options: {
        plugins: {
        legend: {
          display: false
        }
      }
      }
    });
  }

}
