import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events, ToastController } from 'ionic-angular';
import { OfflineDbProvider } from '../../providers/offline-db/offline-db';
import { NewarrivalsPage } from '../newarrivals/newarrivals';
import { ContactPage } from '../contact/contact';
import { AboutPage } from '../about/about';
import { DealerOrderPage } from '../dealer-order/dealer-order';
import { DbserviceProvider } from '../../providers/dbservice/dbservice';
import { NearestDealerPage } from '../nearest-dealer/nearest-dealer';
import { ConstantProvider } from '../../providers/constant/constant';
import { SocialSharing } from '@ionic-native/social-sharing';
import { DealerDealerListPage } from '../dealer-dealer-list/dealer-dealer-list';
import { DealerExecutiveAppPage } from '../dealer-executive-app/dealer-executive-app';
import { MyserviceProvider } from '../../providers/myservice/myservice';
import { DealerExecutiveListPage } from '../dealer-executive-list/dealer-executive-list';
import { LocationAccuracy } from '@ionic-native/location-accuracy';
import { Geolocation } from '@ionic-native/geolocation';
import { ProductsPage } from '../products/products';

@IonicPage()
@Component({
    selector: 'page-dealer-home',
    templateUrl: 'dealer-home.html',
})
export class DealerHomePage {
    lable:any;
    prodCount:any={};
    banner:any=[]
    dashboardData:any={}

    constructor(
                public navCtrl: NavController,
                public socialSharing:SocialSharing , 
                public events: Events,
                public constant:ConstantProvider,
                public navParams: NavParams, 
                public offlineService: OfflineDbProvider,
                public service:DbserviceProvider ,
                public db:MyserviceProvider,
                public locationAccuracy: LocationAccuracy,
                public geolocation: Geolocation,
                public toastCtrl:ToastController) 
    {
        
        
        events.subscribe('getCountProducts',(data)=>
        {

            if(this.constant.deviceId!='')
            {
                console.log('device id found' + this.constant.UserLoggedInData.id);
              this.db.addData({'registration_id':this.constant.deviceId ,'dr_id': this.constant.UserLoggedInData.id},'DealerData/updateDeviceToken').then((r)=>
              {
              });
            }
            
        // this.get_count()

        })
    }


    ionViewWillEnter()
    {
        this.getDashBoardData()
        // this.loginBanner();
        // this.get_count()
        if(this.constant.UserLoggedInData.type==1) //that means lohin user is distributor
        {
            this.lable = 'My Dealers'
        } else // that means login user is dealer 
        {
            this.lable = 'My Distributors'
        }
        console.log('deviceId');
        console.log(this.constant.deviceId);
        if(this.constant.deviceId!='')
        {
            console.log('device id found' + this.constant.deviceId);
            console.log( this.constant.UserLoggedInData.id);
             this.db.addData({'registration_id':this.constant.deviceId ,'dr_id': this.constant.UserLoggedInData.id},'DealerData/updateDeviceToken').then((r)=>
                    {
                    });
        }
    }
    
    ionViewDidLoad() 
    {
        console.log('ionViewDidLoad DealerHomePage');
        // this.onProcessSQLDataHandler();
    }

    onProcessSQLDataHandler() 
    {
        if(this.offlineService.localDBCallingCount === 0) 
        {
            this.offlineService.localDBCallingCount++;
            // this.offlineService.onValidateLocalDBSetUpTypeHandler();
        }
    }

    open_menu()
    {
        this.events.publish('side_menu:navigation_barDealer');
    }

    goOnContactPage()
    {
        this.navCtrl.push(ContactPage,{mode:'dealer'});
    }

    goOnAboutPage()
    {
        this.navCtrl.push(AboutPage,{mode:'dealer'});
    }

    goToarrivals()
    {
        this.navCtrl.push(NewarrivalsPage)
    }

    goOnProductPage()
    {
        this.navCtrl.push(ProductsPage,{'mode':'home'});
    }

    goToOrders(type)
    {
        this.navCtrl.push(DealerOrderPage,{mode:'dealer',type:type});
    }
    
    goto_executive()
    {
        this.navCtrl.push(DealerExecutiveListPage);
    }
    
    loginBanner()
    {
        this.service.post_rqst( '', 'app_karigar/loginBannersApp' ).subscribe(d =>
        {
            console.log(d);
            this.banner = d.banner;
        });
    }

    goToNearestDealers(type)
    {
        var data = this.constant.UserLoggedInData.all_data;
        console.log(data);
        
        this.navCtrl.push(NearestDealerPage,{pincode:data.pincode,type:type});
    }

    newOrder()
    {
        if(this.dashboardData.user.status == 'Approved')
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
    
    delaerexecutive(type)
    {
        this.navCtrl.push(DealerExecutiveAppPage,{"type":type});
    }
    
    goToassignedDr()
    {
        this.navCtrl.push(DealerDealerListPage);
    }

    getDashBoardData()
    {
        this.db.show_loading()
        setTimeout(() => 
        {
            console.log(this.constant.UserLoggedInData.id)
            this.db.addData({dr_id:this.constant.UserLoggedInData.id,type: this.constant.UserLoggedInData.type},'DealerData/getDashboardData').then((res)=>
            {
                console.log(res);
                this.dashboardData = res;
                if(this.dashboardData.secondary.total_amount)
                {
                    this.dashboardData.secondary.total_amount = Math.round(this.dashboardData.secondary.total_amount)
                }
                if(this.dashboardData.secondary.total_amount)
                {
                    this.dashboardData.primary.total_amount = Math.round(this.dashboardData.primary.total_amount)
                }
                this.db.dismiss()
            },err=>
            {
                this.db.dismiss()
                this.db.errToasr()
            })
            
        }, 1000);
    }

    check_location()
    {
        this.locationAccuracy.request(this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY).then(() => 
        {
            let options = 
            {
                maximumAge: 10000, timeout: 15000, enableHighAccuracy: true
            };

            this.geolocation.getCurrentPosition(options).then((resp) => 
            {
                var lat = resp.coords.latitude
                var lng = resp.coords.longitude
                this.db.addData({user_data:this.constant.UserLoggedInData,"lat":lat,"lng":lng},"dealerData/add_location")
                .then(resp=>{
                    console.log(resp);
                    
                })
            },
            error => {
                console.log('Error requesting location permissions', error);
                let toast = this.toastCtrl.create({
                    message: 'Allow Location Permissions',
                    duration: 3000,
                    position: 'bottom'
                });
                toast.present();
            });
        });
    }

    doRefresh (refresher)
    {   
        this.getDashBoardData()
        // this.loginBanner()
        // this.get_count()
        setTimeout(() => {
            refresher.complete();
        }, 1000);
    }
    notification()
    {
        this.db.addData('',"dealerData/send_push_notification")
        .then(resp=>{
            console.log(resp);
            
        })
    }

    // get_count()
    // {
    //     this.offlineService.onReturnActiveProductCountHandler().subscribe(productCount => {
    //         this.prodCount.total= productCount
    //     },err=>
    //     {

    //     });
    
    //     this.offlineService.onReturnActiveProductNewArrivalsCountHandler().subscribe(productCount1 => {
    //         this.prodCount.new= productCount1
            
    //     },err=>
    //     {

    //     });
    //     console.log(this.prodCount);
        
    // }
    // goToVideosPage(cat){
    //     console.log(cat);
        
    //     this.navCtrl.push(VideoPage,{cat:cat});
    //   }

    // goToNewArrivals()
    // {
    //     this.navCtrl.push(NewarrivalsPage);
    // }

     // ShareApp()
    // {
    //     this.socialSharing.share('Hey There ! here is an awesome app from ToyZone  Pvt Ltd  ..Give it a try https://play.google.com/store/apps/details?id=com.ToyZone.app ')
    //     .then(() => {
    //         console.log("success");
    //     }).catch((e) => {
    //         console.log(e);
    //     });
    // }


}