import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { MenuController, NavController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class RestApiService implements OnInit {
  isLoggedIn = false;
  baseUrl = 'http://103.27.233.205/yotour/';

  constructor(private http: HttpClient,public navCtrl: NavController, public loadingController: LoadingController,) {

  }
  ngOnInit() {

  }

  CheckNavigation(): Observable<boolean>{
    debugger;
    var userDetail = JSON.parse(localStorage.getItem('userdetail'))
    var IsOtpVerifier=JSON.parse(localStorage.getItem('IsOtpVerifier'));
    var IsBankDetailUpdated=JSON.parse(localStorage.getItem('IsBankDetailUpdated'));
    if(userDetail!=null)
    {
      if(IsOtpVerifier)
      {
        if(IsBankDetailUpdated)
        {
          this.navCtrl.navigateForward('/home-menu');
          return ;
        }
        else{
          this.navCtrl.navigateForward('/bankdetail');
          return ;
        }
        
      }
      else{
        this.navCtrl.navigateForward('/verifyotp');
        return ;
      }
     
    }
    else{
      this.navCtrl.navigateForward('/login');
      return ;
    }
  }

  login(user: any): Observable<any> {
    // authenticaion mechanism
    const response = this.http.post(this.baseUrl + 'login_check.php', user);
    return response;
  }
  
  SaveBankDetail(bankDetail:any):Observable<any>
  {
    const bankUpdateDetail = this.http.post(this.baseUrl + 'update_detail.php', bankDetail);
    return bankUpdateDetail;
  }
  
  async presentLoadingWithOptions() {
    const loading = await this.loadingController.create({
      spinner: 'crescent',
      duration: 1000,
      message: 'Please wait...',
      translucent: true,
      cssClass: 'custom-class custom-loading'
    });
    return await loading.present();
  }

  logout(): void {
    localStorage.removeItem('isLoggedIn');
    this.isLoggedIn = false;
  }
}
