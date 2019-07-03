import { Component, OnInit } from '@angular/core';
import { NavController, MenuController } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-memorandum',
  templateUrl: './memorandum.page.html',
  styleUrls: ['./memorandum.page.scss'],
})
export class MemorandumPage implements OnInit {

  constructor(public navCtrl: NavController, public menuCtrl: MenuController, private statusBar: StatusBar) { }

  ngOnInit() {
    this.menuCtrl.enable(false);
  }

  NextPage() {
    this.navCtrl.navigateForward('/bankdetail');
  }
}
