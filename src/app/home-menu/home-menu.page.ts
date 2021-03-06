import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { LoadingController } from '@ionic/angular';
import { RestApiService } from '../Services/rest-api.service';

@Component({
  selector: 'app-home-menu',
  templateUrl: './home-menu.page.html',
  styleUrls: ['./home-menu.page.scss'],
})
export class HomeMenuPage implements OnInit {

  constructor(
    public navCtrl: NavController,
    public menuCtrl: MenuController,
    private statusBar: StatusBar,
    public loadingController: LoadingController,
    private restServicApi:RestApiService
  ) { }

  ngOnInit() {
    this.menuCtrl.enable(true);
    this.restServicApi.CheckNavigation();
  }

  MyAvailability() {
    this.navCtrl.navigateForward('/add-dates');
  }

}
