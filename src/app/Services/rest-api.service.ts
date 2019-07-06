import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestApiService implements OnInit {
  isLoggedIn = false;
  baseUrl = 'http://103.27.233.205/yotour/';

  constructor(private http: HttpClient) {

  }
  ngOnInit() {

  }
  checkLoginSatus(): Observable<boolean> {
    return of(JSON.parse(localStorage.getItem('isLoggedIn')));
  }

  checkUserDetailSatus(): Observable<boolean> {
    return of(JSON.parse(localStorage.getItem('user')));
  }

  login(user: any): Observable<any> {
    // authenticaion mechanism
    const response = this.http.post(this.baseUrl + 'login_check.php', user);
    return response;
  }


  logout(): void {
    localStorage.removeItem('isLoggedIn');
    this.isLoggedIn = false;
  }
}
