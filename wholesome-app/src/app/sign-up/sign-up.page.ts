import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from "@angular/forms";
import { Router } from '@angular/router';
import { AccountManagementService } from '../shared/services/account-management.service';
import { HeaderService } from '../shared/services/header.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {
  signUpForm: FormGroup;
  signUpError : string
  isSubmitted = false;
  chips : Object[] = [
    {'name': 'Vegetarian', 'selected': false, 'color': 'success'},
    {'name': 'Vegan', 'selected': false, 'color': 'success'},
    {'name': 'Dairy Free', 'selected': false, 'color': 'tertiary'},
    {'name': 'Nut Free', 'selected': false, 'color': 'tertiary'},
    {'name': 'Gluten Free', 'selected': false, 'color': 'tertiary'},
    {'name': 'Paleo', 'selected': false, 'color': 'primary'},
    {'name': 'Keto', 'selected': false, 'color': 'primary'},
    {'name': 'Low Carb', 'selected': false, 'color': 'primary'},
    {'name': 'Shellfish Allergy', 'selected': false, 'color': 'danger'},
  ]
  macros : Object = {
    'p': 20,
    'f': 30,
    'c': 50,
  }

  constructor(public service : AccountManagementService, public headerService : HeaderService, public router : Router, public formBuilder : FormBuilder) { }

  ngOnInit() {
    localStorage.setItem('fab', 'false')
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

  changeMacros() {
    this.macros['p'] = 45
    this.macros['f'] = 30
    this.macros['c'] = 25
  }

    // submit sign up form
  signUp(form : any) {
    this.service.signUp(form).subscribe(data => {
      console.log(data)
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
        this.headerService.isUserLoggedIn.next(true);
        this.router.navigate(['tabs/home']);
      });
    },
    error => {
      //console.log(error.error.message);  
      localStorage.setItem('loggedIn', 'false');
      this.signUpError = error.error.message;
    }); 
  }

  changeReq(chip) {
    let index = this.chips.indexOf(chip)
    this.chips[index]['selected'] = !this.chips[index]['selected']
  }
}
