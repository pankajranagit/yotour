import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { NavController, MenuController } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { RestApiService } from '../Services/rest-api.service';
@Component({
  selector: 'app-verifyotp',
  templateUrl: './verifyotp.page.html',
  styleUrls: ['./verifyotp.page.scss'],
})
export class VerifyotpPage implements OnInit {
  private isLoggedIn: boolean = false;
  private userOtp: any;
  private OTP = { digit1: '', digit2: '', digit3: '', digit4: '' };
  private OTPDigits :string;
  @ViewChild('POS2') POS2;
  @ViewChild('POS3') POS3;
  @ViewChild('POS4') POS4;

  constructor(public navCtrl: NavController, public menuCtrl: MenuController,
    private statusBar: StatusBar,
    private restServicApi: RestApiService

  ) { }

  ngOnInit() {
    debugger;
    this.menuCtrl.enable(false);
    this.userOtp = JSON.parse(localStorage.getItem('user'))


  }
  ConvertOTP(otpModel) {
    this.OTPDigits = otpModel.digit1+"" +otpModel.digit2 +""+ otpModel.digit3+"" + otpModel.digit4
    debugger;
    return this.OTPDigits;
  }
  ValidateOtp() {
 
    if (this.userOtp.data.OTP == this.ConvertOTP(this.OTP)) {
      debugger;
      localStorage.setItem("user",null);      
      localStorage.setItem('isLoggedIn', JSON.stringify(true));
      this.NextPage()
    }
    else{
      alert("Enter OTP Not Valid");
    }
  }
  changeFocus(currPos: any) {
    if (currPos === 1) {
      this.POS2.setFocus();
    }

    if (currPos === 2) {
      this.POS3.setFocus();
    }

    if (currPos === 3) {
      this.POS4.setFocus();
    }
  }

  NextPage() {
    this.navCtrl.navigateForward('/bankdetail');
  }

}
