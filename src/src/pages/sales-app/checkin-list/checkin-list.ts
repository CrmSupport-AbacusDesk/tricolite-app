import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Navbar, Events, AlertController } from 'ionic-angular';
import { AddCheckinPage } from '../add-checkin/add-checkin';
import { MyserviceProvider } from '../../../providers/myservice/myservice';
import { EndCheckinPage } from '../end-checkin/end-checkin';
import { CheckinDetailPage } from '../checkin-detail/checkin-detail';
import moment from 'moment';
import { DashboardPage } from '../../dashboard/dashboard';
import { ViewChild } from '@angular/core';


/**
 * Generated class for the CheckinListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-checkin-list',
  templateUrl: 'checkin-list.html',
})
export class CheckinListPage {
  @ViewChild(Navbar) navBar: Navbar;

  date:any;
  limit=0;
  flag:any='';
  userId:any
  constructor(public alertCtrl: AlertController,public navCtrl: NavController, public navParams: NavParams, public service: MyserviceProvider, public loadingCtrl: LoadingController, public events: Events) {
    this.userId = this.navParams.get('userId');
  }
  
  ionViewWillEnter()
  {
    // this.service.dismiss()
    this.pending_checkin();
    this.checkin_list();
    this.date = moment(this.date).format('YYYY-MM-DD');
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad CheckinListPage');

    // this.navBar.backButtonClick = (e:UIEvent)=>{
    //   this.navCtrl.push(DashboardPage);
    //  }
  }

  ionViewDidEnter()
  {
    this.events.publish('current_page','Dashboard');    
  }

  val:any = '';
  checkin_id: any = ''
  checkin_data:any = [];

  pending_checkin()
  {
    this.service.pending_data().then((result)=>{
      console.log(result);
      this.val = result['val'];
      this.checkin_id = result['checkin_id'];
      this.checkin_data = result['checkin_data'];
      console.log(this.checkin_data);
    })
  }


  today_checkin:any = [];
  previous_checkin:any = [];

  search: any = {};

  load_data:any = "0";



  checkin_list()
  {

    let loading = this.loadingCtrl.create({
      spinner: 'hide',
      content: `<img src="./assets/imgs/gif.svg" class="h55" />`,
      dismissOnPageChange: true
    });

    if(this.search.check_in_date!=null)
    {
      this.search.check_in_date = moment(this.search.check_in_date).format('YYYY-MM-DD');
      console.log(this.search.check_in_date);
    }
    loading.present();

    this.service.addData({'date':this.search.check_in_date,'limit':this.limit,'userId':this.userId},'Checkin/checkin_list').then((result)=>{
      console.log(result);
      this.today_checkin = result['today_checkin'];
      this.previous_checkin = result['previous_checkin'];

      if(this.today_checkin.length == 0)
      {
        this.load_data = "1";
      }

      if(this.previous_checkin == 0)
      {
        this.load_data = "1";
      }

      loading.dismiss();

    },err=>
    {

      this.service.errToasr();
      loading.dismiss();

    });
    
    setTimeout(() => {
      loading.dismiss();
      
    }, 2000);
  }



  loadData(infiniteScroll)
  {
    console.log('loading');
    
    this.limit=this.previous_checkin.length;
    this.service.addData({'date':this.search.check_in_date,'limit':this.limit},'Checkin/checkin_list').then( r =>
      {
        console.log(r);
        if(r['previous_checkin']=='')
        {
          this.flag=1;
        }
        else
        {
          setTimeout(()=>{
            this.previous_checkin=this.previous_checkin.concat(r['previous_checkin']);
            console.log('Asyn operation has stop')
            infiniteScroll.complete();
          },1000);
        }
      });
    }

  addCheckin(){
    this.navCtrl.push(AddCheckinPage)
  }

  end_visit(checkin_id)
  {
    console.log(checkin_id);

    this.navCtrl.push(EndCheckinPage,{'data':this.checkin_data});
  }

  checkin_detail(checkin_id)
  {

    console.log(checkin_id);

    this.service.addData({'checkin_id':checkin_id},'Checkin/checkin_detail').then((result)=>
    {
      console.log(result);
      if(result)
      {
        this.navCtrl.push(CheckinDetailPage,{'data':result});
      }
    })

  }


  goBack()
  {
    console.log('Back');
    this.navCtrl.push(DashboardPage);
  }




}
