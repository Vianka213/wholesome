import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, NgForm } from "@angular/forms";
import { Router } from '@angular/router';
import { AccountManagementService } from '../shared/services/account-management.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage implements OnInit {
  signInForm: FormGroup;
  signInError : string
  isSubmitted = false;

  constructor(public service : AccountManagementService, public router : Router, public formBuilder : FormBuilder) { }

  ngOnInit() {
    // sign in form
    this.signInForm = this.formBuilder.group({
      email : new FormControl('', [Validators.required, Validators.email]),
      password : new FormControl('', [Validators.required, Validators.minLength(8)])
    });
  }

  get errorControl() {
    return this.signInForm.controls;
  }

  //submit sign in form
  signIn(form : any) {
    this.service.signIn(form).subscribe(data => 
    {
      localStorage.setItem('token', data['token']);
      localStorage.setItem('loggedIn', 'true');
      
      this.service.getRoles( localStorage.getItem('token')).subscribe(res => {
     // console.log(res['roles']);

      localStorage.setItem('roles', res['roles']);
      });
      this.service.getName(localStorage.getItem('token')).subscribe(res => {
        //console.log(res['roles']);
        localStorage.setItem('name', res['name']);
        localStorage.setItem('surname', res['surname']);
        localStorage.setItem('profilePic', res['profilePicture'])
        localStorage.setItem('email', form['email'])
        //this.headerService.isUserLoggedIn.next(true);
        //this.router.navigate(['main']);
      });
      this.router.navigate(['home']);
    },
    error => {

      localStorage.setItem('loggedIn', 'false'); 
      this.signInError = error.error.message;  
    })
  }

}
