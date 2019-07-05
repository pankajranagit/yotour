import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestApiService implements OnInit {
  isLoggedIn = false;
  baseUrl = "https://ntatpcsr.in/yotour/";
  
  constructor(private http: HttpClient) {

  }
  ngOnInit() {
    
  }
 

  // login(user:any) {
  //   console.log('in service');
  //   debugger;
  //   return this.http.post(this.baseUrl + "login_check.php", user);
  // }
  checkLoginSatus(): Observable<boolean> {
    return of(JSON.parse(localStorage.getItem('isLoggedIn')));
  }
  checkUserDetailSatus(): Observable<boolean> {
    return of(JSON.parse(localStorage.getItem('user')));
  }
  login(user:any): Observable<any> {

    // authenticaion mechanism
    var respone=  this.http.post(this.baseUrl + "login_check.php", user);
     
   return respone
  }

  
  logout():void {
    
    localStorage.removeItem('isLoggedIn');
    this.isLoggedIn = false;
  }
}
