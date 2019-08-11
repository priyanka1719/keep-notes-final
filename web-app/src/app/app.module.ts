import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MessageService } from 'primeng/api';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import { AuthenticationService } from './services/authentication.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterService } from './services/router.service';
import { NotificationService } from './services/notification.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import {MenubarModule} from 'primeng/menubar';
import { CanActivateRouteGuard } from './services/can-activate-route.guard';
import { JwtHelperService, JwtModule, JwtModuleOptions } from '@auth0/angular-jwt';
import {ToastModule} from 'primeng/toast';
import { NotificationComponent } from './notification/notification.component';
import { LogoutComponent } from './logout/logout.component';
import { RegisterComponent } from './register/register.component';
import {DialogModule} from 'primeng/dialog';

function tokengetter() {
  return localStorage.getItem('BearerToken');
}
const JWT_Module_Options: JwtModuleOptions = {
  config: {
      tokenGetter: tokengetter
  }
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    NotificationComponent,
    LogoutComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    InputTextModule,
    PasswordModule,
    ButtonModule,
    CardModule,
    MessagesModule,
    MessageModule,
    MenubarModule,
    DialogModule,
    ToastModule,
    JwtModule.forRoot(JWT_Module_Options)
  ],
  providers: [
    MessageService,
    CanActivateRouteGuard,
    AuthenticationService,
    RouterService,
    NotificationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
