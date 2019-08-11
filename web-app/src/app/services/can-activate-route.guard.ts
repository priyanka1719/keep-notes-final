import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from './authentication.service';
import { RouterService } from './router.service';
import { Observable, of } from 'rxjs';
import { NotificationService } from './notification.service';

@Injectable()
export class CanActivateRouteGuard implements CanActivate {

    constructor(private authSvc: AuthenticationService,
        private routerSvc: RouterService,
        private notificationSvc : NotificationService) { }

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

        // const token = this.authSvc.

        // const routePromise = this.authSvc.isUserAuthenticated(token);
        // let routePromise = of(this.authSvc.isUserTokenValid()).toPromise();

        // routePromise.then(resp => {
        //     if (!resp) {
        //         this.routerSvc.routeToLogin();
        //     }
        //     return resp;
        // }).catch(err => {
        //     this.routerSvc.routeToLogin();
        //     return false;
        // });

        let isvalid = this.authSvc.isUserTokenValid();

        if(!isvalid) {
            this.notificationSvc.addErrorMessage('Authetication Failed.', 'Redirecting to Login...');
            this.routerSvc.routeToLogin();
        } else {
            this.notificationSvc.addSucessMessage('Authetication Success.', 'You are good to go!!')
        }

        return isvalid;

    }
}