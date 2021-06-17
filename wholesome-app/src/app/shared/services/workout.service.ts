import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WorkoutService {
  private ROOT_URL = "http://localhost:3000/api/";

  constructor(public http : HttpClient) { }

  public addWorkout(token, values) {
    console.log(JSON.stringify(values))
    const headers = new HttpHeaders()
          .set('Content-Type', 'application/json').set( 'Authorization', "Bearer "+token);

    return this.http.post(this.ROOT_URL+'workout/addWorkout', JSON.stringify(values), {
      headers: headers
    });
  }

  public updateWorkout(token, values) {
    console.log(JSON.stringify(values))
    const headers = new HttpHeaders()
          .set('Content-Type', 'application/json').set( 'Authorization', "Bearer "+token);

    return this.http.post(this.ROOT_URL+'workout/updateWorkout', JSON.stringify(values), {
      headers: headers
    });
  }

  public deleteWorkout(token, values) {
    console.log(JSON.stringify(values))
    const headers = new HttpHeaders()
          .set('Content-Type', 'application/json').set( 'Authorization', "Bearer "+token);

    return this.http.post(this.ROOT_URL+'workout/deleteWorkout', JSON.stringify(values), {
      headers: headers
    });
  }

  public getWorkout(token) {
    const headers = new HttpHeaders()
          .set('Content-Type', 'application/json').set( 'Authorization', "Bearer "+token);
      return this.http.get(this.ROOT_URL+'workout/getWorkouts', {
        headers: headers
      });
  }
}
