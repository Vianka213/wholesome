import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private ROOT_URL = "http://localhost:3000/api/";

  constructor(public http : HttpClient) { }

  public addRecipe(token, values) {
    console.log(JSON.stringify(values))
    const headers = new HttpHeaders()
          .set('Content-Type', 'application/json').set( 'Authorization', "Bearer "+token);

    return this.http.post(this.ROOT_URL+'recipe/addRecipe', JSON.stringify(values), {
      headers: headers
    });
  }

  public updateRecipe(token, values) {
    console.log(JSON.stringify(values))
    const headers = new HttpHeaders()
          .set('Content-Type', 'application/json').set( 'Authorization', "Bearer "+token);

    return this.http.post(this.ROOT_URL+'recipe/updateRecipe', JSON.stringify(values), {
      headers: headers
    });
  }

  public deleteRecipe(token, values) {
    console.log(JSON.stringify(values))
    const headers = new HttpHeaders()
          .set('Content-Type', 'application/json').set( 'Authorization', "Bearer "+token);

    return this.http.post(this.ROOT_URL+'recipe/deleteRecipe', JSON.stringify(values), {
      headers: headers
    });
  }

  public getRecipe(token) {
    const headers = new HttpHeaders()
          .set('Content-Type', 'application/json').set( 'Authorization', "Bearer "+token);
      return this.http.get(this.ROOT_URL+'recipes/getRecipes', {
        headers: headers
      });
  }
}
