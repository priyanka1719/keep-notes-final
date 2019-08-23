import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { JwtModule, JwtModuleOptions } from '@auth0/angular-jwt';

import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { MessageService } from 'primeng/api';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { MenubarModule } from 'primeng/menubar';
import { DialogModule } from 'primeng/dialog';
import { ToastModule } from 'primeng/toast';
import {DropdownModule} from 'primeng/dropdown';

import { AppRoutingModule, RoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthenticationService } from './services/authentication.service';
import { RouterService } from './services/router.service';
import { NotificationService } from './services/notification.service';
import { CanActivateRouteGuard } from './services/can-activate-route.guard';
import { NotificationComponent } from './notification/notification.component';


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
    NotificationComponent,
    RoutingModule
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
    JwtModule.forRoot(JWT_Module_Options),
    DropdownModule
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
