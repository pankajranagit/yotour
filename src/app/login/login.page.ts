import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { LoadingController } from '@ionic/angular';
import { RestApiService } from '../Services/rest-api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public user = { phone: '', email: '' };
  public userDetail: any;
  public errormsg: any;
  constructor(
    public menuCtrl: MenuController,
    private statusBar: StatusBar,

    public navCtrl: NavController,
    public loadingController: LoadingController,
    private restServicApi: RestApiService
  ) {
    // let status bar overlay webview
    this.statusBar.overlaysWebView(true);
    // set status bar to white
    this.statusBar.backgroundColorByHexString('#dd014a');
  }

  ngOnInit() {
    this.restServicApi.checkLoginSatus()
      .subscribe(val => this.isLoggedIn = val);
    this.menuCtrl.enable(false);
    this.checkAuth();
  }

  checkAuth(): boolean {
    console.log('checkAuth FUNC', this.restServicApi.checkLoginSatus);
    if (this.isLoggedIn) {

      this.navCtrl.navigateForward('/home-menu');
      return true;
    }

    this.navCtrl.navigateForward('/login');
    return false;
  }
  verifyotp() {
    this.restServicApi.login(this.user).subscribe((data: {}) => {
      this.presentLoadingWithOptions().then(a => {
        this.userDetail = data;
        console.log(this.userDetail);
        // debugger;
        if (this.userDetail.code === 200) {
          localStorage.setItem('user', JSON.stringify(this.userDetail.data.userdetail));
          this.loadingController.dismiss().then(b => console.log('dismissed'));
          this.navCtrl.navigateForward('/verifyotp');
        } else {
          this.loadingController.dismiss().then(b => console.log('dismissed'));
          this.errormsg = this.userDetail.message;
        }
      });
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
  logout() {
    this.restServicApi.logout();
    this.isLoggedIn = false;
  }
}
