import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { MyserviceProvider } from '../../providers/myservice/myservice';
import { ConstantProvider } from '../../providers/constant/constant';

@IonicPage()
@Component({
    selector: 'page-dealer-check-in',
    templateUrl: 'dealer-check-in.html',
})
export class DealerCheckInPage {
    
    today_checkin:any=[];
    user_id:any=0;
    start:any=0;
    limit:any=5;
    flag:any='';
    filter:any={};
    constructor(public navCtrl: NavController, public navParams: NavParams,public constant:ConstantProvider, public storage:Storage,public db:MyserviceProvider) {
        // this.storage.get("id")
        // .then(resp=>{
        //     console.log(resp);
        //     this.user_id = resp;     
        this.constant.UserLoggedInData.id      
            this.get_all_checkin(this.constant.UserLoggedInData.id);
        // })
    }
    norec:any=''
    ionViewDidLoad() {
        
    }    
    
    checkin_list:any=[];
    get_all_checkin(id)
    {
        this.norec='';
        console.log(id);
        this.db.show_loading();
        this.db.addData({user_id:id,"start":this.start,"limit":this.limit,"search":this.filter},"dealerData/getDeale_checkin")
        .then(resp=>{
            this.db.dismiss()
            console.log(resp);
            this.checkin_list = resp['checkin_list'];
            this.norec=1
        },err=>
        {
            this.db.dismiss()
            this.db.errToasr()
        })
    }
    
    loadData(infiniteScroll)
    {
        console.log('loading');
        this.start = this.checkin_list.length;
        this.db.addData({user_id:this.user_id,"start":this.start,"limit":this.limit,"search":this.filter},"dealerData/getDeale_checkin")
        .then((r) =>{
            console.log(r);
            if(r['checkin_list']=='')
            {
                this.flag=1;
            }
            else
            {
                setTimeout(()=>{
                    this.checkin_list=this.checkin_list.concat(r['checkin_list']);
                    console.log('Asyn operation has stop')
                    infiniteScroll.complete();
                },1000);
            }
        });
    }
}
