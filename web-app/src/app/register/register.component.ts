import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { User } from '../model/User';
import { AuthenticationService } from '../services/authentication.service';
import { NotificationService } from '../services/notification.service';
import { RouterService } from '../services/router.service';
import { MustMatch } from '../password-validator.directive';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  encapsulation: ViewEncapsulation.None //Overrides the styles of the theme with the given styles.css of the component
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  user: User;
  roles: UserRole[];

  constructor(private formBuilder: FormBuilder, private authSvc: AuthenticationService, private routerSvc: RouterService, private notificationSvc: NotificationService) {
    this.roles = [
      { name: 'Admin', code: 'admin' },
      { name: 'Personal', code: 'personal' },
      { name: 'Guest', code: 'guest' }
    ]
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      'username': new FormControl('', Validators.required),
      'password': new FormControl('', [Validators.required, Validators.maxLength(10), Validators.minLength(2)]),
      'passwordConfirm': new FormControl('', [Validators.required]),
      'email': new FormControl('', Validators.email),
      'name': new FormControl('', Validators.required),
      'dob': new FormControl(new Date(), Validators.required),
      'role': new FormControl('admin')
    }, {
        validator: MustMatch('password', 'passwordConfirm')
      });
    //https://angular.io/guide/forms-overview
    //https://jasonwatmore.com/post/2018/11/07/angular-7-reactive-forms-validation-example
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  get formValidation() {

    let f = this.registerForm.controls;

    let errorMsgs = [];

    if(f.email.errors && f.email.errors.email) {
      errorMsgs.push(`Email is invalid!`);
    }
    
    if(f.password.touched && f.passwordConfirm.touched && f.passwordConfirm.errors) {
      errorMsgs.push(`Passwords do not match!`);
    }

    return errorMsgs;
  }

  register() {
    this.user = new User().deserialize(this.registerForm.value);
    console.log('Registering - ', this.user);
    console.log(this.registerForm);
  }

  clear() {
    this.registerForm.reset();
  }

  goToLogin() {
    this.registerForm.reset();
    this.notificationSvc.addSucessMessage('Going back to Login.');
    setTimeout(() => {
      this.routerSvc.routeToLogin();
    }, 1000);
    
  }

}

interface UserRole {
  name: string,
  code: string
}