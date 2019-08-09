import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from '../model/User';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private httpClient: HttpClient) { }

  login(userdata): Observable<any> {
    return this.httpClient.post(environment.url_user_login, userdata);
  }

  setTokenForUserID(userID: string, token: string) {
    // localStorage.setItem('bearerTokenUserID', `token_${token}_userID_${userID}`);
    // localStorage.setItem('bearerToken', token);
    // localStorage.setItem('bearerUserID', userID);
    localStorage.setItem(userID, token);
  }

  getTokenForUserID(userID: string): string {
    return localStorage.getItem(userID);
  }

  setUserID(userID: string) {
    localStorage.setItem('bearerUserID', userID);
  }

  getUserID(): string {
    return localStorage.getItem('bearerUserID');
  }

}
