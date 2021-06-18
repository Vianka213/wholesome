import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  constructor(private router : Router) { }

  public isUserLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public displayFAB: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  // force sign out when token expires
  kickOut()
  {
    localStorage.removeItem('token');
    localStorage.removeItem('roles');
    localStorage.removeItem('loggedIn');
    localStorage.removeItem('profilePic')
    this.isUserLoggedIn.next(false);
    this.displayFAB.next(false)

    this.router.navigate(['/sign-in']);
  }

  showFAB() {
    this.displayFAB.next(true)
  }

  hideFAB() {
    this.displayFAB.next(false)
  }

  getFAB() {
    return this.displayFAB.value
  }
}
