import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from "@angular/forms";
import { Router } from '@angular/router';
import { AccountManagementService } from '../shared/services/account-management.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {
  signUpForm: FormGroup;
  signUpError : string
  isSubmitted = false;

  constructor(public service : AccountManagementService, public router : Router, public formBuilder : FormBuilder) { }

  ngOnInit() {
    // sign in form
    this.signUpForm = this.formBuilder.group({
      name : new FormControl('', [Validators.required]),
      surname : new FormControl('', [Validators.required]),
      email : new FormControl('', [Validators.required, Validators.email]),
      password : new FormControl('', [Validators.required, Validators.minLength(8)]),
      passwordConf : new FormControl('', [Validators.required])
    });

    this.signUpForm.setValidators(this.MustMatch('password', 'passwordConf'));
  }

    get errorControl() {
      return this.signUpForm.controls;
    }

    // validate that passwords match
  MustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];

        if (matchingControl.errors && !matchingControl.errors.mustMatch) {
            // return if another validator has already found an error on the matchingControl
            return;
        }

        // set error on matchingControl if validation fails
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ mustMatch: true });
        } else {
            matchingControl.setErrors(null);
        }

        return null;
    }
  }

    // submit sign up form
  signUp(form : any) {
    this.service.signUp(form).subscribe(data => {
      localStorage.setItem('token', data['token']);
      localStorage.setItem('loggedIn', 'true');

      this.service.getRoles(localStorage.getItem('token')).subscribe(res => {
      //console.log(res['roles']);
      localStorage.setItem('roles', res['roles']);
      });
      this.service.getName(localStorage.getItem('token')).subscribe(res => {
        //console.log(res['roles']);
        localStorage.setItem('name', res['name']);
        localStorage.setItem('surname', res['surname']);
        localStorage.setItem('profilePic', res['profilePicture'])
        //this.headerService.isUserLoggedIn.next(true);
        this.router.navigate(['tabs/home']);
      });
    },
    error => {
      //console.log(error.error.message);  
      localStorage.setItem('loggedIn', 'false');
      this.signUpError = error.error.message;
    }); 
  }
}
