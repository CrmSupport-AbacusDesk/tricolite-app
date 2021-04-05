import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ModalController, Navbar, Platform, Nav, App } from 'ionic-angular';
import { AddOrderPage } from '../add-order/add-order';
import { OrderDetailPage } from '../order-detail/order-detail';
import { MyserviceProvider } from '../../providers/myservice/myservice';
// import { OrderTypeModalPage } from '../order-type-modal/order-type-modal';
import { ViewChild } from '@angular/core';
import { DashboardPage } from '../dashboard/dashboard';
import { Storage } from '@ionic/storage';
import { ConstantProvider } from '../../providers/constant/constant';
import moment from 'moment';
import { ExecutiveOrderDetailPage } from '../executive-order-detail/executive-order-detail';


@IonicPage()
@Component({
    selector: 'page-order-list',
    templateUrl: 'order-list.html',
})
export class OrderListPage {
    
    @ViewChild(Navbar) navBar: Navbar;
    @ViewChild(Nav) nav: Nav;
    user_id:any=0;
    date:any
    order_type:any='';
    tabSelected:any
    start:any=0;
    limit:any=10;
    flag:any='';
    user_data:any={};
    filter:any={}
    count:any={}
    userId :any;
    order_list:any=[];
    sendRequest:any=false

    constructor( 
                private app:App,
                public navCtrl: NavController,
                public constant :ConstantProvider,
                public loadingCtrl: LoadingController, 
                public navParams: NavParams,
                public db:MyserviceProvider, 
                public modalCtrl: ModalController, 
                public storage: Storage, 
                public platform: Platform, 
                public appCtrl: App) 
    {
        this.date = moment(this.date).format('YYYY-MM-DD');
        this.userId = navParams.get('userId')
    }

    ionViewWillEnter()
    {
        this.filter.order_status='Pending'
        this.order_type = this.navParams.get("type");
        console.log(this.order_type);
        
        this.get_orders();
        this.order_type = this.navParams.get("type");
    }
    
    change_tab(type)
    {
        this.order_type = type;
        this.order_list = [];
        this.start = 0;
        this.filter = {};
        this.get_orders();
    }
    
   
    get_orders()
    {
        this.start=0
        console.log(this.filter.order_status);
        
        this.filter.type = this.order_type;
        this.sendRequest=false
        this.db.show_loading();
        
        this.db.addData({"search":this.filter,"user_id":this.user_id,"start":this.start,"limit":this.limit,'status':this.filter.order_status,type:this.user_data.type,'userId':this.userId},"dealerData/get_ordersExecutive").then(resp=>
        {
            console.log(resp);
            this.order_list = resp['order_list'];
            this.count = resp['count'];
            this.flag=''
            this.order_list.map((item)=>{
                item.order_grand_total = Math.round(item.order_grand_total);
            })
            // if(!this.filter.master)
            this.sendRequest=true
            this.db.dismiss()
        },err=>
        {
            this.db.dismiss()
            this.db.errToasr()
        })
        setTimeout(() => {
            this.db.dismiss();
            
          }, 2000);
    }
    
    
    get_orderssearch()
    {
        this.start=0
        
        this.db.addData({"search":this.filter,"user_id":this.user_id,"start":this.start,"limit":this.limit,'status':this.filter.order_status,type:this.user_data.type,'userId':this.userId},"dealerData/get_ordersExecutive").then(resp=>
        {
            console.log(resp);
            this.order_list = resp['order_list'];
            this.count = resp['count'];
            this.order_list.map((item)=>{
                item.order_grand_total = Math.round(item.order_grand_total);
            })
            
        },err=>
        {
        })
    }
    
    loadData(infiniteScroll)
    {
        console.log('loading');
        this.start = this.order_list.length;
        this.filter.type = this.order_type;
        
        this.db.addData({"search":this.filter,"user_id":this.user_id,"start":this.start,"limit":this.limit,'status':this.filter.order_status,'userId':this.userId},"dealerData/get_ordersExecutive").then((r) =>
        {
            console.log(r);
            if(r['order_list']=='')
            {
                this.flag=1;
            }
            else
            {
                setTimeout(()=>{
                    this.order_list=this.order_list.concat(r['order_list']);
                    console.log('Asyn operation has stop')
                    infiniteScroll.complete();
                },1000);
            }
        });
    }
    
    
    goOnOrderDetail(id)
    {
        this.navCtrl.push(ExecutiveOrderDetailPage,{id:id , login:'Employee'})
    }

    goOnOrderDetailFromDrLogin(id)
    {
        this.navCtrl.push(OrderDetailPage ,{id:id})
    }

    doRefresh (refresher)
    {   
        this.start=0
        this.filter.master='';
        this.filter.date = '';
        this.get_orders() 
        setTimeout(() => {
            refresher.complete();
        }, 1000);
    }

    add_order()
    {
        this.navCtrl.push(AddOrderPage);
    }
    
    ionViewDidLeave()
    {
        let nav = this.app.getActiveNav();
        console.log(nav);
        
        if(nav && nav.getActive()) 
        {
            let activeView = nav.getActive().name;
            console.log(activeView);
            
            let previuosView = '';
            console.log(previuosView);
            
            if(nav.getPrevious() && nav.getPrevious().name)
            {
                previuosView = nav.getPrevious().name;
            }  
            console.log(previuosView); 
            console.log(activeView);  
            console.log('its leaving');
            if((previuosView=='AddOrderPage')) 
            {
                this.navCtrl.popToRoot();
            }
        }
    }
}

