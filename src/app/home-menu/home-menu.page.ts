import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { LoadingController } from '@ionic/angular';

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
    public loadingController: LoadingController
  ) { }

  ngOnInit() {
    this.menuCtrl.enable(true);
  }

  MyAvailability() {
    this.navCtrl.navigateForward('/add-dates');
  }

}
