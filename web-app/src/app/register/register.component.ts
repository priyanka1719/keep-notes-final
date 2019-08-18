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

  constructor(private formBuilder: FormBuilder, private authSvc: AuthenticationService, private routerSvc: RouterService, private notificationSvc: NotificationService) { }

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


  register() {
    this.user = new User().deserialize(this.registerForm.value);
    console.log('Registering - ', this.user);
    console.log(this.registerForm);
  }

  clear() {
    this.registerForm.reset();
  }

  showError(item: string) {
    console.log(`Error for field ${item} -- `, this.registerForm.controls[item].errors);
  }

}
