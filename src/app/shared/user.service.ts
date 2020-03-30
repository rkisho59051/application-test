import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

const headerOption ={
  headers: new HttpHeaders({'Content-Type': 'application/json', 'Access-Control-Allow-Origin':'*', 'X-Requested-With':'XMLHttpRequest'})
};

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private Subject = new Subject<any>();
  noAuthHeader = {headers: new HttpHeaders ({'NoAuth': 'True'})};
  constructor(private http:HttpClient,private router:Router) { }
  login(authCredentials) {
    return this.http.post(environment.apiBaseUrl + '/login', authCredentials, this.noAuthHeader);
  }

  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  deleteToken() {
    localStorage.removeItem('token');
  }

  getUserProfile() {
    return this.http.get(environment.apiBaseUrl + '/users/2');
  }

  sendUserInfo(userInfo) {
    // debugger;
    this.Subject.next(userInfo);
  }

  getUserInfo() {
    // debugger;
    return this.Subject;
  }

  getSubscriptionDetails() {
    return this.http.get(environment.apiServerUrl +'/subscriber', headerOption);
  }

  isLoggedIn() {
    var token = localStorage.getItem('token');
    if(token){
      return true;
    }
    else return false;
  }
}


