import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccountManagementService {
  private ROOT_URL = "http://localhost:3000/api/";
  public roles = localStorage.getItem('roles');

  constructor(public http: HttpClient) { }

  // sign up
  public signUp(values) {
    const headers = new HttpHeaders()
          .set('Content-Type', 'application/json');
    return this.http.post(this.ROOT_URL+'user/register', JSON.stringify(values), {
      headers: headers
    });
  }

  // sign in
  public signIn(values){
    const headers = new HttpHeaders()
          .set('Content-Type', 'application/json');
    return this.http.post(this.ROOT_URL+'user/login', JSON.stringify(values), {
      headers: headers
    });
  }

  //get roles
  public getRoles(values){
    const headers = new HttpHeaders()
          .set('Content-Type', 'application/json').set( 'Authorization', "Bearer "+values);
    return this.http.get(this.ROOT_URL+'user/getRoles', {
      headers: headers
    });
  }

  //get name
  public getName(values){
    const headers = new HttpHeaders()
          .set('Content-Type', 'application/json').set( 'Authorization', "Bearer "+values);
    return this.http.get(this.ROOT_URL+'user/getName', {
      headers: headers
    });
  }

  //check if authenticated
  public isVerified(values) {
    const headers = new HttpHeaders()
    .set('Content-Type', 'application/json').set( 'Authorization', "Bearer "+values);

    return this.http.get(this.ROOT_URL+'user/isVerified', {
      headers: headers
    });
  }

  //verify user (admin)
  public verify(token, userID){
    const headers = new HttpHeaders()
          .set('Content-Type', 'application/json').set( 'Authorization', "Bearer "+token);
    return this.http.post(this.ROOT_URL+'user/verifyUser',JSON.stringify(userID), {
      headers: headers
    });
  }
}
