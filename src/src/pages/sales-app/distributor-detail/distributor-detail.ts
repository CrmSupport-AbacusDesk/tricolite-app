import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, PopoverController, ToastController, App, ModalController, AlertController } from 'ionic-angular';
import { MyserviceProvider } from '../../../providers/myservice/myservice';
import { CustomerCheckinPage } from '../customer-checkin/customer-checkin';
import { CustomerOrderPage } from '../customer-order/customer-order';
import { EditNetworkPage } from '../edit-network/edit-network';
import { ViewProfilePage } from '../../view-profile/view-profile';
// import { PopoverComponent } from '../popover/popover';

/**
* Generated class for the DistributorDetailPage page.
*
* See https://ionicframework.com/docs/components/#navigation for more info on
* Ionic pages and navigation.
*/

@IonicPage()
@Component({
    selector: 'page-distributor-detail',
    templateUrl: 'distributor-detail.html',
})
export class DistributorDetailPage {
    user_right:any=[];
    dr_id:any;
    distributor_detail:any=[];
    total_checkin:any = [];
    total_order:any = [];
    edit_permission:boolean=false;
    all_discount:any=0;

    constructor( private app:App,public navCtrl: NavController,private alertCtrl: AlertController,public db:MyserviceProvider,public modalCtrl: ModalController, public navParams: NavParams,public service:MyserviceProvider,public loadingCtrl: LoadingController,public popoverCtrl: PopoverController,public toastCtrl:ToastController) {
        
        if(this.navParams.get('dr_id'))
        {
            this.dr_id=this.navParams.get('dr_id');
            console.log(this.dr_id);
            this.lead_detail();
        }
        
        if(this.navParams.get('distributor_data'))
        {
            this.distributor_detail = this.navParams.get('distributor_data');
            this.total_checkin = this.navParams.get('distributor_checkin');
            this.total_order = this.navParams.get('distributor_order');
        }
        
        
        
        if(this.navParams.get('dealer_data'))
        {
            this.distributor_detail=this.navParams.get('dealer_data');
            this.total_checkin = this.navParams.get('dealer_checkin');
            this.total_order = this.navParams.get('dealer_order');
        }
        
        if(this.navParams.get('direct_dealer_data'))
        {
            this.distributor_detail=this.navParams.get('direct_dealer_data');
            this.total_checkin = this.navParams.get('direct_dealer_checkin');
            this.total_order = this.navParams.get('direct_dealer_order');
        }
        
        if(this.navParams.get("edit_discount"))
        {
            this.edit_permission = this.navParams.get("edit_discount");
        }
        console.log(this.navParams.get("edit_discount"));
        
        console.log(this.edit_permission);
        
        
        this.check_user_right();
        this.distributor_detail.tabActiv='Order'
        console.log(this.total_order);
        
        
    }
    
    ionViewDidLoad() {
        console.log('ionViewDidLoad DistributorDetailPage');
        console.log(this.distributor_detail);
        console.log(this.total_checkin);
        console.log(this.total_order);
    }
    
    loading:any;
    lodingPersent()
    {
        this.loading = this.loadingCtrl.create({
            spinner: 'hide',
            content: `<img src="./assets/imgs/gif.svg" class="h55" />`,
        });
        this.loading.present();
    }
    
    
    editNetwork(id)
    {
        this.navCtrl.push(EditNetworkPage,{'type':1,'dr_id':id});
    }
    
    
    lead_detail()
    {
        var loading = this.loadingCtrl.create({
            spinner: 'hide',
            content: `<img src="./assets/imgs/gif.svg" class="h55" />`,
        });
        
        this.service.addData({'dr_id':this.dr_id},'Distributor/lead_detail').then((result)=>{
            console.log(result);
            this.distributor_detail = result['result'];
            this.total_checkin = result['total_checkin'];
            this.total_order = result['total_order'];
            console.log(this.distributor_detail);
            this.distributor_detail.tabActiv='Order'
            loading.dismiss();
        });
        loading.present(); 
    }
    
    checkin_list:any = [];
    load_data:any = "0";
    order_list:any=[];
    
    
    customer_checkin(dr_id)
    {
        this.service.addData({'dr_id':dr_id},'Checkin/customer_checkin').then((result)=>{
            console.log(result);
            this.checkin_list = result;
            
            if(this.checkin_list.length == 0)
            {
                this.load_data = "1";
            }
            
            this.navCtrl.push(CustomerCheckinPage,{'data':this.checkin_list, 'load_data':this.load_data})
        })
    }
    
    
    customer_order(dr_id)
    {
        console.log(dr_id);
        this.service.addData({'dr_id':dr_id},'Distributor/customer_order').then((result)=>{
            console.log(result);
            this.order_list = result;
            
            if(this.order_list.length == 0)
            {
                this.load_data = "1";
            }
            
            this.navCtrl.push(CustomerOrderPage,{'data':this.order_list,'load_data':this.load_data, 'order_data':this.distributor_detail});
        })
    }
    
    check_user_right()
    {
        this.service.addData({data:'data'},'Distributor/check_user_right')
        .then((result)=>
        {
            console.log(result);
            this.user_right = result;
        });
    }

    discount_list:any=[];
    edit_discount()
    {
        this.service.addData({"dr_id":this.dr_id},"dealerData/get_dealer_discount")
        .then(resp=>{
            console.log(resp);
            this.discount_list = resp['discount'];
        });
    }

    update_discount()
    {
        console.log(this.discount_list);
        
        for (let index = 0; index < this.discount_list.length; index++) {
            if(this.discount_list[index].discount>50)
            {
                this.discount_list[index].discount = 0
                this.service.presentToast('Discount can not be greater than 50 % ')
                return;
            }
            
        }
        this.service.addData({"dr_id":this.dr_id,"discount_arr":this.discount_list},"dealerData/update_discount")
        .then(resp=>{
            console.log(resp);
            if(resp['msg'] == "success")
            {
                let toast = this.toastCtrl.create({
                    message: 'Discounts Updated Successfully',
                    duration: 3000,
                    position: 'bottom'
                });
                toast.present();
                this.discount_list = [];
            }
        })
    }

    set_discount()
    {
        if(this.all_discount>50)
        {
            this.service.presentToast('Discount can not be greater than 50 % ')
            this.all_discount=0
            return;
        }
        console.log(this.all_discount);;
        this.discount_list.map(resp=>{
            resp.discount = this.all_discount;
        })
    }
    viewProfiePic(src)
    {
      this.modalCtrl.create(ViewProfilePage, {"Image": "http://phpstack-83335-1428632.cloudwaysapps.com/uploads/"+src}).present();
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
            if((previuosView=='EditNetworkPage' || previuosView=='DealerExecutiveAppPage')) 
            {
                this.navCtrl.popToRoot();
            }
        }
    }
    chngeStatus(type,value)
    {
        var str
        if(type=='Deactive')
        {
            str = 'deactivate'
        }
        else
        {
            str = 'activate';
        }
        let alert=this.alertCtrl.create({
            title:'Are You Sure?',
            subTitle: 'You want to '+str+' this dealer ?',
            cssClass:'action-close',
            
            buttons: [{
                text: 'Cancel',
                role: 'cancel',
                handler: () => {
                    this.db.presentToast('Action Cancelled')
                }
            },
            {
                text:'Confirm',
                cssClass: 'close-action-sheet',
                handler:()=>
                {
                    console.log(this.distributor_detail.id);
                    
                    this.service.addData({"id":this.distributor_detail.id,'type':type,value:value},"dealerData/chngeStatusDr")
                    .then(resp=>{
                        console.log(resp);
                        this.db.presentToast('Dealer '+str+'d successfully !!')
                        this.lead_detail()
                    });
                }
                }]
            });
            alert.present();
     
    }
}
