import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-add-dates',
  templateUrl: './add-dates.page.html',
  styleUrls: ['./add-dates.page.scss'],
  providers: [DatePipe],
})
export class AddDatesPage implements OnInit {
  myDate = new Date();
  currMonth: any;
  currYear: any;
  FirstDay: any;
  FirstDate: any;
  LastDay: any;
  LastDate: any;
  temp: any;
  allDate: any;
  days = new Array('Sun', 'Mon', 'Tue', 'Web', 'Thu', 'Fri', 'Sat');

  constructor(
    public navCtrl: NavController,
    public menuCtrl: MenuController,
    public loadingController: LoadingController,
    private datePipe: DatePipe
  ) {
    this.createCalendar();
    console.log('datearray = ' + this.allDate);
  }

  ngOnInit() {
    this.menuCtrl.enable(true);
  }

  datearray(start: any, end: any, gap: any) {
    const arr = new Array();
    const dt = new Date(start);
    let temp = 1;
    while (temp <= gap) {
      arr.push('');
      temp++;
    }

    while (dt <= end) {
      arr.push(this.datePipe.transform(dt, 'd'));
      dt.setDate(dt.getDate() + 1);
    }
    return arr;
  }

  nextMonth() {
    this.myDate.setMonth(this.myDate.getMonth() + 1);
    this.createCalendar();
  }

  prevMonth() {
    this.myDate.setMonth(this.myDate.getMonth() - 1);
    this.createCalendar();
  }

  createCalendar() {
    this.currMonth = this.datePipe.transform(this.myDate, 'MMMM');
    this.currYear = this.datePipe.transform(this.myDate, 'y');

    this.FirstDate = new Date(this.myDate.getFullYear(), this.myDate.getMonth(), 1);
    this.FirstDay = this.datePipe.transform(this.FirstDate, 'EEE');
    this.LastDate = new Date(this.myDate.getFullYear(), this.myDate.getMonth() + 1, 0);

    this.allDate = this.datearray(this.FirstDate, this.LastDate, this.days.indexOf(this.FirstDay));
  }
}
