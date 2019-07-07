import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { LoadingController } from '@ionic/angular';
import { RestApiService } from '../Services/rest-api.service';
import {} from '@angular/forms';
@Component({
  selector: 'app-bankdetail',
  templateUrl: './bankdetail.page.html',
  styleUrls: ['./bankdetail.page.scss'],
})
export class BankdetailPage implements OnInit {
   userDetail: any={};
   updateUserDetail:any;
  public IsBankDetailUpdated:boolean
  constructor(
    public navCtrl: NavController,
    public menuCtrl: MenuController,
    private statusBar: StatusBar,
    public loadingController: LoadingController,
    private restServicApi: RestApiService,
    
  ) 
  {
    this.restServicApi.CheckNavigation();
    // let status bar overlay webview
    this.statusBar.overlaysWebView(false);

    // set status bar to white
    this.statusBar.backgroundColorByHexString('#dd014a');
    
    
  }

  SaveBankDetail() { 
    debugger;
    this.restServicApi.SaveBankDetail(this.userDetail).subscribe((data: {}) => {
      this.updateUserDetail = data;
      this.restServicApi.presentLoadingWithOptions().then(a => {
        console.log('Presented');
        if(this.updateUserDetail.data!=null)
        { 
         
          localStorage.setItem('userdetail', null);        
          localStorage.setItem('userdetail', JSON.stringify(this.updateUserDetail.data.userdetail));
          localStorage.setItem('IsBankDetailUpdated', JSON.stringify(true));
          this.loadingController.dismiss().then(b => {});
          this.navCtrl.navigateForward('/home-menu');
        }
        else{
        this.loadingController.dismiss().then(b => {});
        alert(this.updateUserDetail.error);
        }
        
    });
      
    });
  }
  ngOnInit() {
    
    this.userDetail= JSON.parse(localStorage.getItem('userdetail'))    
    this.menuCtrl.enable(false);
    
  }

}
