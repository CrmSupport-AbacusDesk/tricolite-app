import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App, ToastController } from 'ionic-angular';
import { MyserviceProvider } from '../../providers/myservice/myservice';
import { Storage } from '@ionic/storage';
import { DealerAddorderPage } from '../dealer-addorder/dealer-addorder';
import { OrderDetailPage } from '../order-detail/order-detail';
import { ConstantProvider } from '../../providers/constant/constant';
import { ProductsPage } from '../products/products';

@IonicPage()
@Component({
    selector: 'page-dealer-order',
    templateUrl: 'dealer-order.html',
})
export class DealerOrderPage{
    
    user_id:any=0;
    order_type:any='';
    tabSelected:any
    start:any=0;
    limit:any=10;
    flag:any='';
    user_data:any={};
    filter:any={}
    count:any={}
    user:any={}

    constructor(
                public navCtrl: NavController,
                public constant:ConstantProvider, 
                private app:App,
                public navParams: NavParams,
                public db:MyserviceProvider,
                public storage:Storage,
                public toastCtrl:ToastController)
    {
        
    }
    
    ionViewDidLoad(){
        // alert('test')
    }
    ionViewWillEnter()
    {
        if(this.constant.tabSelectedOrder && this.constant.tabSelectedOrder!='')
        {
            this.filter.order_status = this.constant.tabSelectedOrder
        }
        else
        {
            this.filter.order_status='Pending'
        }
        this.order_type = this.navParams.get("type");
        
        this.storage.get("loginData").then(resp=>{
            console.log(resp);
            this.user_data = resp;
            this.user_id = resp.id;
            this.get_orders();
        })

        if((this.constant.UserLoggedInData.type==1 || this.constant.UserLoggedInData.type==7) && !this.order_type) //that means login user is distributor
        {
            this.order_type = 'Primary'
        } 
        else // that means login user is dealer 
        {
            this.order_type = 'Secondary'
        }
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
    
    order_list:any=[];
    // pri_ord:any=0;
    // sec_ord:any=0;
    sendRequest:any=false
    get_orders()
    {
        console.log(this.filter.order_status);
        
        this.filter.type = this.order_type;
        this.sendRequest=false
        this.db.show_loading();
        
        this.db.addData({"search":this.filter,"user_id":this.user_id,"start":this.start,"limit":this.limit,'status':this.filter.order_status,type:this.user_data.type},"dealerData/get_orders")
        .then(resp=>{
            console.log(resp);
            this.order_list = resp['order_list'];
            this.count = resp['count'];
            this.user = resp['user'];
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
    }
    
    
    get_orderssearch()
    {
        
        this.db.addData({"search":this.filter,"user_id":this.user_id,"start":this.start,"limit":this.limit,'status':this.filter.order_status,type:this.user_data.type},"dealerData/get_orders")
        .then(resp=>{
            console.log(resp);
            this.order_list = resp['order_list'];
            this.count = resp['count'];
            
            // this.pri_ord = resp['pri_ord_cn'];
            // this.sec_ord = resp['sec_ord_cn'];
            
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
        
        this.db.addData({"search":this.filter,"user_id":this.user_id,"start":this.start,"limit":this.limit,'status':this.filter.order_status},"dealerData/get_orders")
        .then((r) =>{
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
    
    add_order()
    {
        // this.navCtrl.push(DealerAddorderPage);
    //   this.navCtrl.push(ProductsPage,{"order":true});

      if(this.user.status == 'Approved')
      {
          this.navCtrl.push(ProductsPage,{"order":true});
      }
      else
      {
          let toast = this.toastCtrl.create({
              message: 'Your Account is not Verified yet.',
              duration: 3000,
              position: 'bottom'
          });
          toast.present();
      }

    }
    
    goOnOrderDetail(id)
    {
        this.navCtrl.push(OrderDetailPage,{id:id})
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
            if((previuosView=='DealerAddorderPage')) 
            {
                this.navCtrl.popToRoot();
            }
        }
    }
}
