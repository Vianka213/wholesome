import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TrackerService } from '../shared/services/tracker.service';

@Component({
  selector: 'app-diary',
  templateUrl: './diary.page.html',
  styleUrls: ['./diary.page.scss'],
})
export class DiaryPage implements OnInit {
  apiKey = '09030db3ec2a4ebf8220bcd0fa7c5944'

  constructor(private http : HttpClient, public trackerService : TrackerService) { }

  ngOnInit() {
    //this.http.get<any>('https://api.spoonacular.com/recipes/complexSearch?query=burger&apiKey=' + this.apiKey).subscribe(data => {
      //  console.log(data)
  //})

  this.trackerService.naturalSearch('big mac and fries').subscribe( data => {
    console.log(data)
  })
}

}
