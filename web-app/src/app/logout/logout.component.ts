import { Component, OnInit } from '@angular/core';
import { RouterService } from '../services/router.service';
import { AuthenticationService } from '../services/authentication.service';
import { NotificationService } from '../services/notification.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private routerSvc: RouterService,
    private authSvc: AuthenticationService,
    private notificationSvc: NotificationService) { }

  ngOnInit() {

    this.notificationSvc.addSucessMessage('Logging out.', 'Redirecting to Login!!');
    this.authSvc.logout();
    // this.socketSvc.disconnect();
    this.routerSvc.routeToLogin();
  }

}
