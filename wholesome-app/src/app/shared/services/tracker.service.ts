import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TrackerService {
  private nutritionix = 'https://trackapi.nutritionix.com/v2/'
  private ROOT_URL = "http://localhost:3000/api/";

  constructor(public http : HttpClient) { }

  public naturalSearch(query) {
    console.log(JSON.stringify(query))
    const headers = new HttpHeaders()
          .set('Content-Type', 'application/json')
          .set('x-app-id', 'd42ff232')
          .set('x-app-key', '92da8dcdc435ec656964df1087b53005');
    return this.http.post(this.nutritionix+'natural/nutrients/', JSON.stringify({'query':query}), {
      headers: headers
    });
  }

  public addFoodEntry(token, values) {
    var dt = new Date();
    values.logDate = dt.getFullYear() + "/" + (dt.getMonth() + 1) + "/" + dt.getDate();
    console.log(JSON.stringify(values))
    const headers = new HttpHeaders()
          .set('Content-Type', 'application/json').set( 'Authorization', "Bearer "+token);

    return this.http.post(this.ROOT_URL+'userLog/addFoodEntry', JSON.stringify(values), {
      headers: headers
    });
  }
}
