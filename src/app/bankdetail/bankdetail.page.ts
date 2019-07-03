import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-bankdetail',
  templateUrl: './bankdetail.page.html',
  styleUrls: ['./bankdetail.page.scss'],
})
export class BankdetailPage implements OnInit {

  constructor(
    public navCtrl: NavController,
    public menuCtrl: MenuController,
    private statusBar: StatusBar,
    public loadingController: LoadingController
  ) {
    // let status bar overlay webview
    this.statusBar.overlaysWebView(false);

    // set status bar to white
    this.statusBar.backgroundColorByHexString('#dd014a');
  }

  homeMenu() {
    this.presentLoadingWithOptions().then(a => {
      console.log('Presented');
      this.navCtrl.navigateForward('/home-menu');
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

  ngOnInit() {
    this.menuCtrl.enable(false);
  }

}
