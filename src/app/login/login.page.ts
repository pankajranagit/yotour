import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { LoadingController } from '@ionic/angular';
import { RestApiService } from '../Services/rest-api.service';
import { Router } from '@angular/router';

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
    public router: Router,
    public navCtrl: NavController,
    public loadingController: LoadingController,
    private restServicApi: RestApiService
  ) {

    // let status bar overlay webview
    this.statusBar.overlaysWebView(true);
    // set status bar to white
    this.statusBar.backgroundColorByHexString('#dd014a');
    this.restServicApi.CheckNavigation();
  }

  ngOnInit() {
   
    this.menuCtrl.enable(false);
  }

  verifyotp() {
    this.restServicApi.login(this.user).subscribe((data: {}) => {
      this.restServicApi.presentLoadingWithOptions().then(a => {
        this.userDetail = data;
        console.log(this.userDetail);
        if (this.userDetail.code === 200) {
          localStorage.setItem('userdetail', JSON.stringify(this.userDetail.data.userdetail));
          localStorage.setItem('otp', JSON.stringify(this.userDetail.data.OTP));
          localStorage.setItem('message', JSON.stringify(this.userDetail.message));
          this.loadingController.dismiss().then(b => {});
          this.router.navigateByUrl('/verifyotp');
        } else {
          this.loadingController.dismiss().then(b => {});
          this.errormsg = this.userDetail.message;
        }
      });
    });
  }

  // async presentLoadingWithOptions() {
  //   const loading = await this.loadingController.create({
  //     spinner: 'crescent',
  //     duration: 1000,
  //     message: 'Please wait...',
  //     translucent: true,
  //     cssClass: 'custom-class custom-loading'
  //   });
  //   return await loading.present();
  // }
}
