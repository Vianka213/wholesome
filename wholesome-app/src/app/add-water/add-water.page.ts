import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';
import Chart from 'chart.js/auto';
import { HeaderService } from '../shared/services/header.service';
import { TrackerService } from '../shared/services/tracker.service';

@Component({
  selector: 'app-add-water',
  templateUrl: './add-water.page.html',
  styleUrls: ['./add-water.page.scss'],
})
export class AddWaterPage implements OnInit {

  constructor(public viewCtrl: ModalController, public trackerService : TrackerService, public headerService : HeaderService) { }

  private chart : Chart
  
  amountWater : number = 0
  maxWater : number = 1500
  percentWater : any = 0
  amountToAdd : number = 0

  ngOnInit() {    
    this.getLog()
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
            data: [this.percentWater, (100 - this.percentWater)],
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
      },
      
    });
  }

  getLog() {
    let dt = new Date()
    let logDate
    logDate = dt.getFullYear() + "/"
    if (dt.getMonth() + 1 < 10) 
        logDate += '0' 
    logDate += dt.getMonth() + 1 + '/'
    if (dt.getDate() < 10) 
        logDate += '0' 
        logDate += dt.getDate()

    let values = {'logDate': logDate, 'ID': '60ab91b8158bd2145499e0cc'}
      this.trackerService.getUserLog(localStorage.getItem('token'), values).subscribe(data => {
        this.amountWater = data['log'].Water
        this.percentWater = ((this.amountWater/this.maxWater)*100).toFixed(0)
        this.createChart()
        
      }, error => {
        console.log(error)
        let errorCode = error['status'];
        if (errorCode == '403')
        {   // kick user out
            this.headerService.kickOut();
        }
    })
  }


  addWater(amount) {
    this.amountToAdd += amount
  }

  logWater() {
    // create log for amountToAdd
    this.amountWater += this.amountToAdd
    let dt = new Date()
    let logDate
    logDate = dt.getFullYear() + "/"
    if (dt.getMonth() + 1 < 10) 
        logDate += '0' 
    logDate += dt.getMonth() + 1 + '/'
    if (dt.getDate() < 10) 
        logDate += '0' 
        logDate += dt.getDate()

    let values = {'logDate': logDate, 'water': this.amountWater}
        this.trackerService.logWater(localStorage.getItem('token'), values).subscribe(data => {
          console.log(data)
      }, error => {
          console.log(error)
          let errorCode = error['status'];
          if (errorCode == '403')
          {   // kick user out
              this.headerService.kickOut();
          }
      })
  }
}
