import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public mobileNumber: string;
  constructor(
    public menuCtrl: MenuController,
    private statusBar: StatusBar,
    public navCtrl: NavController,
    public loadingController: LoadingController
  ) {
    // let status bar overlay webview
    this.statusBar.overlaysWebView(true);
    // set status bar to white
    this.statusBar.backgroundColorByHexString('#dd014a');
  }

  ngOnInit() {
    this.menuCtrl.enable(false);
  }

  verifyotp() {
    this.presentLoadingWithOptions().then(a => {
      console.log('Presented');
      this.navCtrl.navigateForward('/verifyotp');
      // this.loadingController.dismiss().then(b => console.log('dismissed'));
    });
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
}
