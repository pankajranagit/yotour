import { Component, OnInit } from '@angular/core';
import { NavController, MenuController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import { RestApiService } from '../Services/rest-api.service';
@Component({
  selector: 'app-verifyotp',
  templateUrl: './verifyotp.page.html',
  styleUrls: ['./verifyotp.page.scss'],
})
export class VerifyotpPage implements OnInit {
  public userOtp: any;
  public getOtp: any;
  public errormsg: any;
  public apimsg: any;
  public IsOtpVerifier:boolean;
  
  constructor(public navCtrl: NavController, public menuCtrl: MenuController,
    private restServicApi: RestApiService,
    public loadingController: LoadingController,) { 
      console.log("constructor Calling for Verify")
    this.restServicApi.CheckNavigation();
    debugger;
     
      this.apimsg = JSON.parse(localStorage.getItem('message'));
      this.getOtp = JSON.parse(localStorage.getItem('otp'));
    
  }

  ngOnInit() {    
    this.menuCtrl.enable(false);
    
  }

  NextPage() {
    console.log('this.otpenter', this.userOtp);
    if (this.userOtp === this.getOtp) {
     
      localStorage.setItem('IsOtpVerifier', JSON.stringify(true));
      localStorage.removeItem('otp');
      localStorage.removeItem('message');
      this.navCtrl.navigateForward('/bankdetail');
    } else {
      this.errormsg = 'OTP Mismatched! Please try again.';
    }
  }

}
