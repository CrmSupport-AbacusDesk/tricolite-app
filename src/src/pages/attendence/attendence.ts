import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ConstantProvider } from '../../providers/constant/constant';
import { AttendenceserviceProvider } from '../../providers/attendenceservice/attendenceservice';
import moment from 'moment';


/**
* Generated class for the AttendencePage page.
*
* See https://ionicframework.com/docs/components/#navigation for more info on
* Ionic pages and navigation.
*/

@IonicPage()
@Component({
  selector: 'page-attendence',
  templateUrl: 'attendence.html',
})
export class AttendencePage {
  
  
  type:any;
  otherName:any;
  login_date:any;
  id:any;
  lattitude:any;
  longitude:any;
  
  date: any;
  daysInThisMonth: any;
  daysInLastMonth: any;
  daysInNextMonth: any;
  monthNames: string[];
  currentMonth: any;
  currentYear: any;
  currentDate: any;
  
  load_data:any = 0;
  load:any = 0;
  userId:any
  constructor(public navCtrl: NavController, public navParams: NavParams, public constant: ConstantProvider, public service: AttendenceserviceProvider) {
    
    this.userId = this.navParams.get('userId');
    this.date = new Date();
    this.monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    
    this.getAttendence(this.date);
    this.day();
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad AttendencePage');
    this.getDaysOfMonth();
  }
  
  
  TodayDate = new Date();
  attendence_data:any={};
  check = '1'
  calender = '0';
  not_calender = '1'
  attending_list:any=[];
  
  date_click(index,login_date)
  {
    
    console.log(this.daysInThisMonth);
    this.load = 1;
    
    
    if(this.calender == '0')
    {
      this.calender = '1'
      this.not_calender = '0';
    }
    
    console.log(index);
    this.daysInThisMonth.map(x => x.activated = 0);
    
    this.daysInThisMonth[index].activated = 1;
    console.log(this.daysInThisMonth);
    
    
    
    console.log(login_date);
    this.date = moment(this.date).format('YYYY-MM-DD');
    console.log(this.date);
    
    console.log(this.attending_list);
    this.attendence_data = this.attending_list.filter(x => x.login_date === login_date)[0];
    console.log(this.attendence_data);
    console.log(this.attendence_data);
    
    
    if(this.attendence_data)
    {
      console.log(this.attendence_data);
      console.log(this.attendence_data.login_date);

      var H = +this.attendence_data.start_time.substr(0, 2);
      var h = (H % 12) || 12;
      var ampm = H < 12 ? "AM" : "PM";
      this.attendence_data.start_time = h + this.attendence_data.start_time.substr(2, 3) + ampm;


      var H = +this.attendence_data.stop_time.substr(0, 2);
      var h = (H % 12) || 12;
      var ampm = H < 12 ? "AM" : "PM";
      this.attendence_data.stop_time = h + this.attendence_data.stop_time.substr(2, 3) + ampm;

      console.log(this.attendence_data.start_time);
      console.log(this.attendence_data.stop_time)
      
      if (this.date == this.attendence_data.attend_date) {
        console.log('today');
        this.check = '1';
      }
      else {
        console.log('other day')
        this.check = '0'
      }
    }
    
    
  }
  
  day = function () {
    console.log(this.daysInThisMonth);
  }
  
  
  test:any;
  idExists(date)
  {
    console.log(date);
    this.test = this.attending_list.filter(x => x.login_date === date)[0];
    console.log(this.test);
    if(this.test != undefined)
    {
      
      if((this.test.start_time != '00:00:00') && (this.test.stop_time != '00:00:00'))
      {
        var attendence_status = 'Present';
        
        return attendence_status;
      }
      
      if((this.test.start_time == '00:00:00') && (this.test.stop_time == '00:00:00'))
      {
        var attendence_status = 'Absent';
        
        return attendence_status;
      }
      
      if((this.test.start_time != '00:00:00') && (this.test.stop_time == '00:00:00'))
      {
        var attendence_status = 'Not Valid';
        
        return attendence_status;
      }
      
    }
    
    if(this.test == undefined)
    {
      var attendence_status = 'Not Working';
      
      return attendence_status;
    }
    
    
  }
  
  cur_month = new Date();
  cur_month_no = this.cur_month.getMonth();
  // currentYear = '';
  currentMonth_no :any;
  // currentMonth = '';
  // currentDate:any;
  // monthNames = [];
  // daysInThisMonth:any=[];
  // daysInLastMonth:any=[];
  // daysInNextMonth:any=[];
  
  // $scope.currentMonth_no = $scope.date.getMonth();
  // $scope.currentYear = $scope.date.getFullYear();
  getDaysOfMonth() {
    let i;
    this.daysInThisMonth = [];
    this.daysInLastMonth = [];
    this.daysInNextMonth = [];
    this.currentMonth = this.monthNames[this.date.getMonth()];
    this.currentMonth_no = this.date.getMonth();
    this.currentYear = this.date.getFullYear();
    if(this.date.getMonth() === new Date().getMonth()) {
      this.currentDate = new Date().getDate();
    } else {
      this.currentDate = 999;
    }
    console.log(this.currentDate);
    
    var firstDayThisMonth = new Date(this.date.getFullYear(), this.date.getMonth(), 1).getDay();
    
    var prevNumOfDays = new Date(this.date.getFullYear(), this.date.getMonth(), 0).getDate();
    
    for( i = prevNumOfDays-(firstDayThisMonth-1); i <= prevNumOfDays; i++) {
      this.daysInLastMonth.push(i);
    }
    let status = '';
    let class_name = '';
    var thisNumOfDays = new Date(this.date.getFullYear(), this.date.getMonth()+1, 0).getDate();
    
    this.login_date =   this.date.getFullYear()+'-'+(this.date.getMonth()+1);
    console.log(this.login_date);
    
    for ( i = 0; i < thisNumOfDays; i++) {
      
      status = this.idExists(this.login_date+'-'+(i+1)) ;
      
      if(status == 'Present')
      {
        class_name = 'csgreen'
      }
      if(status == 'Absent')
      {
        class_name = 'csred'
      }
      if(status == 'Not Valid')
      {
        class_name = 'csred';
      }
      if(status == 'Not Working')
      {
        class_name = '';
      }
      
      this.daysInThisMonth[i] = {'day':i+1,'login_date':this.login_date+'-'+(i+1),'status':status,'class':class_name};
    }
    console.log( this.daysInThisMonth);
    var lastDayThisMonth = new Date(this.date.getFullYear(), this.date.getMonth()+1, 0).getDay();
    var nextNumOfDays = new Date(this.date.getFullYear(), this.date.getMonth()+2, 0).getDate();
    console.log(nextNumOfDays);
    for (i = 0; i < (6-lastDayThisMonth); i++) {
      this.daysInNextMonth.push(i+1);
    }
    var totalDays = this.daysInLastMonth.length+this.daysInThisMonth.length+this.daysInNextMonth.length;
    if(totalDays<36) {
      for( i = (7-lastDayThisMonth); i < ((7-lastDayThisMonth)+7); i++) {
        this.daysInNextMonth.push(i);
      }
    }
  }
  goToLastMonth(){
    this.date = new Date(this.currentYear, this.currentMonth_no , 0);
    this.getAttendence(this.date);
  }
  
  goToNextMonth() {
    this.date = new Date(this.currentYear, this.currentMonth_no+2 , 0);
    this.getAttendence(this.date);
  }
  start_time='';
  stop_time='';
  attend_id:any;
  
  getAttendence(date) {
    console.log(date);
    this.service.get_attendance(this.userId).then((result)=>
    {
      console.log(result);
      
      this.load_data = 1;
      
      this.attending_list=result['data'];
      console.log(this.attending_list);
      if(result['for_attendence'].length>0){
        this.start_time=result['for_attendence'][0].start_time;
        console.log(this.start_time);
        this.attend_id=result['for_attendence'][0].id;
        if(result['for_attendence'][0].stop_time){
          this.start_time=result['for_attendence'][0].start_time;
          console.log(this.start_time);
          
          var H = +this.start_time.substr(0, 2);
          var h = (H % 12) || 12;
          var ampm = H < 12 ? "AM" : "PM";
          this.start_time = h + this.start_time.substr(2, 3) + ampm;
        }
        if(result['for_attendence'][0].stop_time){
          this.stop_time=result['for_attendence'][0].stop_time;
          console.log(this.stop_time);

          var H = +this.stop_time.substr(0, 2);
          var h = (H % 12) || 12;
          var ampm = H < 12 ? "AM" : "PM";
          this.stop_time = h + this.stop_time.substr(2, 3) + ampm;
          
        }
      }
      this.getDaysOfMonth();
    })
    
  }
  
}
