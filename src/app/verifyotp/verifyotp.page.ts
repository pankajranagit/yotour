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
  private userOtp:any;
  @ViewChild('POS2') POS2;
  @ViewChild('POS3') POS3;
  @ViewChild('POS4') POS4;
  
  constructor(public navCtrl: NavController, public menuCtrl: MenuController, 
    private statusBar: StatusBar,
    private restServicApi: RestApiService
    
    ) {}

  ngOnInit() {
    debugger;
    this.menuCtrl.enable(false);
    this.userOtp =JSON.parse(localStorage.getItem('user')) 
   
    
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
