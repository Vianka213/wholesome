import { async, ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';

import { SignUpPage } from './sign-up.page';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('SignUpPage', () => {
  let component: SignUpPage;
  let fixture: ComponentFixture<SignUpPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SignUpPage ],
      imports: [IonicModule.forRoot(), HttpClientTestingModule, RouterTestingModule, FormsModule, ReactiveFormsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(SignUpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('sign up form should be invalid with empty details', async(() => {
    component.signUpForm.controls['name'].setValue('');
    component.signUpForm.controls['surname'].setValue('');
    component.signUpForm.controls['email'].setValue('');
    component.signUpForm.controls['password'].setValue('');
    component.signUpForm.controls['passwordConf'].setValue('');
    expect(component.signUpForm.valid).toBeFalsy();
    expect(component.signUpForm.controls.email.hasError('required')).toBe(true);
    expect(component.signUpForm.controls.password.hasError('required')).toBe(true);
    expect(component.signUpForm.controls.passwordConf.hasError('required')).toBe(true);
  }));

  it('sign up form should be invalid with incorrect email format', async(() => {
    component.signUpForm.controls['name'].setValue('John');
    component.signUpForm.controls['surname'].setValue('Doe');
    component.signUpForm.controls['email'].setValue('jdoe');
    component.signUpForm.controls['password'].setValue('12345678');
    component.signUpForm.controls['passwordConf'].setValue('12345678');
    expect(component.signUpForm.valid).toBeFalsy();
    expect(component.signUpForm.controls.email.hasError('email')).toBe(true);
  }));

  it('sign up form should be invalid with incorrect password length', async(() => {
    component.signUpForm.controls['name'].setValue('John');
    component.signUpForm.controls['surname'].setValue('Doe');
    component.signUpForm.controls['email'].setValue('jdoe@mail.com');
    component.signUpForm.controls['password'].setValue('1234567');
    component.signUpForm.controls['passwordConf'].setValue('12345678');
    expect(component.signUpForm.valid).toBeFalsy();
    expect(component.signUpForm.controls.password.hasError('minlength')).toBe(true);
  }));

  it('sign up form should be invalid when password confirmation does not match', async(() => {
    component.signUpForm.controls['name'].setValue('John');
    component.signUpForm.controls['surname'].setValue('Doe');
    component.signUpForm.controls['email'].setValue('jdoe@mail.com');
    component.signUpForm.controls['password'].setValue('12345678');
    component.signUpForm.controls['passwordConf'].setValue('123456789');
    expect(component.signUpForm.valid).toBeFalsy();
    expect(component.signUpForm.controls.passwordConf.hasError('mustMatch')).toBe(true);
  }));

  it('sign up form should be valid', async(() => {
    component.signUpForm.controls['name'].setValue('Jane');
    component.signUpForm.controls['surname'].setValue('Doe');
    component.signUpForm.controls['email'].setValue('janeDoe@mail.com');
    component.signUpForm.controls['password'].setValue('12345678');
    component.signUpForm.controls['passwordConf'].setValue('12345678');
    expect(component.signUpForm.valid).toBeTruthy();
  }));
});
