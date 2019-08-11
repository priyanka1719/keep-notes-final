import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';
import { User } from '../model/User';
import { RouterService } from '../services/router.service';
import { NotificationService } from '../services/notification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None //Overrides the styles of the theme with the given styles.css of the component
})
export class LoginComponent implements OnInit {

  loginform: FormGroup;
  user: User;

  constructor(private formBuilder: FormBuilder, private authSvc: AuthenticationService, private routerSvc: RouterService, private notificationSvc: NotificationService) { }

  ngOnInit() {

    this.loginform = this.formBuilder.group({
      'username': new FormControl('', Validators.required),
      'password': new FormControl('', Validators.required)
    });
  }

  login() {

    this.user = new User().deserialize(this.loginform.value);

    this.authSvc.login(this.user).subscribe(
      response => {

        let token = response['token'];
        let userid = response['user'].userId;

        // this.authSvc.setTokenForUserID(userid, token);
        this.authSvc.setBearerToken(token);
        this.authSvc.setUserID(userid);

        this.notificationSvc.addSucessMessage('Login Success.', `UserID - ${userid}`);
        this.routerSvc.routeToDashboard();

      },
      error => {
        console.log('error login resp', error);

        if (error.error && error.error.message) {
          this.notificationSvc.addErrorMessage('Login Failed.', error.error.message);
        } else {
          this.notificationSvc.addErrorMessage('Login Failed.');
        }

      });

  }

  register() {
    this.routerSvc.routeToRegister();
  }

}
