import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { NavController, MenuController } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-verifyotp',
  templateUrl: './verifyotp.page.html',
  styleUrls: ['./verifyotp.page.scss'],
})
export class VerifyotpPage implements OnInit {
  @ViewChild('POS2') POS2;
  @ViewChild('POS3') POS3;
  @ViewChild('POS4') POS4;
  constructor(public navCtrl: NavController, public menuCtrl: MenuController, private statusBar: StatusBar) { }

  ngOnInit() {
    this.menuCtrl.enable(false);
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
