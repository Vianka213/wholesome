import { async, ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { HttpClientTestingModule,HttpTestingController  } from '@angular/common/http/testing';

import { SignInPage } from './sign-in.page';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('SignInPage', () => {
  let component: SignInPage;
  let fixture: ComponentFixture<SignInPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SignInPage ],
      imports: [IonicModule.forRoot(), HttpClientTestingModule, RouterTestingModule, FormsModule, ReactiveFormsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(SignInPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('sign in form should be invalid with missing details', async(() => {
    component.signInForm.controls['email'].setValue('');
    component.signInForm.controls['password'].setValue('');
    expect(component.signInForm.valid).toBeFalsy();
  }));

  it('sign in form should be invalid with incorrect email format', async(() => {
    component.signInForm.controls['email'].setValue('jdoe@');
    component.signInForm.controls['password'].setValue('12345678');
    expect(component.signInForm.valid).toBeFalsy();
    expect(component.signInForm.controls.email.hasError('email')).toBe(true);
    expect(component.signInForm.controls.password.hasError('minlength')).toBe(false);
  }));

  it('sign in form should be invalid with incorrect password length', async(() => {
    component.signInForm.controls['email'].setValue('jdoe@mail.com');
    component.signInForm.controls['password'].setValue('1234567');
    expect(component.signInForm.valid).toBeFalsy();
    expect(component.signInForm.controls.password.hasError('minlength')).toBe(true);
    expect(component.signInForm.controls.email.hasError('email')).toBe(false);
  }));

  it('sign in form should be valid', async(() => {
    component.signInForm.controls['email'].setValue('john@mail.com');
    component.signInForm.controls['password'].setValue('12345678');
    expect(component.signInForm.valid).toBeTruthy();
  }));
});
