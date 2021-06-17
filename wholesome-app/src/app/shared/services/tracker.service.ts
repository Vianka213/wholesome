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
    values.logDate = dt.getFullYear() + "/"
    if (dt.getMonth() + 1 < 10) 
      values.logDate += '0' 
    values.logDate += dt.getMonth() + 1 + '/'
    if (dt.getDate() < 10) 
      values.logDate += '0' 
    values.logDate += dt.getDate()

    console.log(JSON.stringify(values))
    const headers = new HttpHeaders()
          .set('Content-Type', 'application/json').set( 'Authorization', "Bearer "+token);

    return this.http.post(this.ROOT_URL+'userLog/addFoodEntry', JSON.stringify(values), {
      headers: headers
    });
  }

  public updateFoodEntry(token, values) {
    console.log(JSON.stringify(values))
    const headers = new HttpHeaders()
          .set('Content-Type', 'application/json').set( 'Authorization', "Bearer "+token);

    return this.http.post(this.ROOT_URL+'userLog/updateFoodEntry', JSON.stringify(values), {
      headers: headers
    });
  }

  public deleteFoodEntry(token, values) {
    console.log(JSON.stringify(values))
    const headers = new HttpHeaders()
          .set('Content-Type', 'application/json').set( 'Authorization', "Bearer "+token);

    return this.http.post(this.ROOT_URL+'userLog/deleteFoodEntry', JSON.stringify(values), {
      headers: headers
    });
  }

  public getUserLog(token, values) {
    const headers = new HttpHeaders()
          .set('Content-Type', 'application/json').set( 'Authorization', "Bearer "+token);
    let parameters = new HttpParams();
    parameters = parameters.append('ID', values.ID);
    parameters = parameters.append('logDate', values.logDate);
      return this.http.get(this.ROOT_URL+'userLog/getUserLog', {
        params: parameters,
        headers: headers
      });
  }

  public getFoodEntry(token, values) {
    const headers = new HttpHeaders()
          .set('Content-Type', 'application/json').set( 'Authorization', "Bearer "+token);
    let parameters = new HttpParams();
    parameters = parameters.append('entryID', values.entryID);
      return this.http.get(this.ROOT_URL+'userLog/getFoodEntry', {
        params: parameters,
        headers: headers
      });
  }

  /* EXERCISE */

  public addExerciseEntry(token, values) {
    var dt = new Date();
    values.logDate = dt.getFullYear() + "/"
    if (dt.getMonth() + 1 < 10) 
      values.logDate += '0' 
    values.logDate += dt.getMonth() + 1 + '/'
    if (dt.getDate() < 10) 
      values.logDate += '0' 
    values.logDate += dt.getDate()

    console.log(JSON.stringify(values))
    const headers = new HttpHeaders()
          .set('Content-Type', 'application/json').set( 'Authorization', "Bearer "+token);

    return this.http.post(this.ROOT_URL+'userLog/addExerciseEntry', JSON.stringify(values), {
      headers: headers
    });
  }

  public getExerciseEntry(token, values) {
    const headers = new HttpHeaders()
          .set('Content-Type', 'application/json').set( 'Authorization', "Bearer "+token);
    let parameters = new HttpParams();
    parameters = parameters.append('entryID', values.entryID);
      return this.http.get(this.ROOT_URL+'userLog/getExerciseEntry', {
        params: parameters,
        headers: headers
      });
  }

  public deleteExerciseEntry(token, values) {
    console.log(JSON.stringify(values))
    const headers = new HttpHeaders()
          .set('Content-Type', 'application/json').set( 'Authorization', "Bearer "+token);

    return this.http.post(this.ROOT_URL+'userLog/deleteExerciseEntry', JSON.stringify(values), {
      headers: headers
    });
  }

  public logWater(token, values) {
    console.log(JSON.stringify(values))
    const headers = new HttpHeaders()
          .set('Content-Type', 'application/json').set( 'Authorization', "Bearer "+token);

    return this.http.post(this.ROOT_URL+'userLog/logWater', JSON.stringify(values), {
      headers: headers
    });
  }
}
