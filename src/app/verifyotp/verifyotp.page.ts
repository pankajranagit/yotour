import { Component, OnInit } from '@angular/core';
import { NavController, MenuController } from '@ionic/angular';
@Component({
  selector: 'app-verifyotp',
  templateUrl: './verifyotp.page.html',
  styleUrls: ['./verifyotp.page.scss'],
})
export class VerifyotpPage implements OnInit {
  public userOtp: any;
  constructor(public navCtrl: NavController, public menuCtrl: MenuController) { }

  ngOnInit() {
    // debugger;
    this.menuCtrl.enable(false);
    this.userOtp = JSON.parse(localStorage.getItem('user'));
  }

  NextPage() {
    this.navCtrl.navigateForward('/bankdetail');
  }

}
