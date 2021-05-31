import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TrackerService } from '../shared/services/tracker.service';
import { MbscEventcalendarOptions, Notifications, MbscCalendarEvent  } from '@mobiscroll/angular';

@Component({
  selector: 'app-diary',
  templateUrl: './diary.page.html',
  styleUrls: ['./diary.page.scss'],
  providers: [Notifications]
})
export class DiaryPage implements OnInit {
  apiKey = '09030db3ec2a4ebf8220bcd0fa7c5944'

  constructor(private http : HttpClient, public trackerService : TrackerService, private notify : Notifications) { }

  myEvents: MbscCalendarEvent[] = [];

  eventSettings: MbscEventcalendarOptions = {
    theme: 'ios',
    themeVariant: 'light',
    view: {
        calendar: { type: 'week' },
        agenda: { type: 'day' }
    },
    onEventClick: (event) => {
        this.notify.toast({
            message: event.event.title
        });
    }
};

  ngOnInit() {
    //this.http.get<any>('https://api.spoonacular.com/recipes/complexSearch?query=burger&apiKey=' + this.apiKey).subscribe(data => {
      //  console.log(data)
  //})

  //this.trackerService.naturalSearch('big mac and fries').subscribe( data => {
  //  console.log(data)
  //})

  this.http.jsonp<MbscCalendarEvent[]>('https://trial.mobiscroll.com/events/?vers=5', 'callback').subscribe((resp) => {
            this.myEvents = resp;
        });
}

}
