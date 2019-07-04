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
  selectedDate: any;
  buttonColor: any = '#000';

  constructor(
    public navCtrl: NavController,
    public menuCtrl: MenuController,
    public loadingController: LoadingController,
    private datePipe: DatePipe
  ) {
    this.createCalendar();
    // console.log('datearray = ' + this.allDate);
  }

  ngOnInit() {
    this.menuCtrl.enable(true);
  }

  datearray(start: any, end: any, gap: any) {
    const arr = new Array();
    const dt = new Date(start);
    let temp = 1;
    while (temp <= gap) {
      arr.push({
        actdate: '',
        showdate: '',
        isselect: false
      });
      temp++;
    }

    while (dt <= end) {
      arr.push({
        actdate: this.datePipe.transform(dt, 'd'),
        showdate: this.datePipe.transform(dt, 'yyyy-MM-dd'),
        isselect: false
      });
      dt.setDate(dt.getDate() + 1);
      temp++;
    }

    while (temp <= 42) {
      arr.push({
        actdate: '',
        showdate: '',
        isselect: false
      });
      temp++;
    }

    // console.log('temptemp : ' + temp);
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

  selectDate(index: any) {
    // console.log('clickedDate = ' + date);
    let i = 0;
    while (i < this.allDate.length) {
      this.allDate[i].isselect = false;
      i++;
    }

    this.allDate[index].isselect = !this.allDate[index].isselect;
    this.allDate[index + 1].isselect = !this.allDate[index + 1].isselect;
    this.allDate[index + 2].isselect = !this.allDate[index + 2].isselect;
    this.allDate[index + 3].isselect = !this.allDate[index + 3].isselect;
    this.allDate[index + 4].isselect = !this.allDate[index + 4].isselect;
    this.allDate[index + 5].isselect = !this.allDate[index + 5].isselect;
    this.allDate[index + 6].isselect = !this.allDate[index + 6].isselect;
  }
}
