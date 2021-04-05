import { Component, ViewChild } from '@angular/core';
import { Platform, Nav,Events, App, ToastController, AlertController, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ModalController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { TabsPage } from '../pages/tabs/tabs';
import { ConstantProvider } from '../providers/constant/constant';
import { DbserviceProvider } from '../providers/dbservice/dbservice';
import { AboutusModalPage } from '../pages/aboutus-modal/aboutus-modal';
import * as jwt_decode from "jwt-decode";
import { AppVersion } from '@ionic-native/app-version';
import { SelectRegistrationTypePage } from '../pages/select-registration-type/select-registration-type';
import moment from 'moment';
import { AttendenceserviceProvider } from '../providers/attendenceservice/attendenceservice';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { MyserviceProvider } from '../providers/myservice/myservice';
import { LeaveListPage } from '../pages/leave-list/leave-list';
import { MainDistributorListPage } from '../pages/sales-app/main-distributor-list/main-distributor-list';
import { DistributorListPage } from '../pages/sales-app/distributor-list/distributor-list';
import { CheckinListPage } from '../pages/sales-app/checkin-list/checkin-list';
import { AttendencePage } from '../pages/attendence/attendence';
import { TravelListPage } from '../pages/travel-list/travel-list';
// import { ContactusPage } from '../pages/contactus/contactus';
import { CategoryPage } from '../pages/category/category';
import { Network } from '@ionic-native/network';

import { DealerHomePage } from '../pages/dealer-home/dealer-home';

import { DealerCheckInPage } from '../pages/dealer-check-in/dealer-check-in';
import { DealerOrderPage } from '../pages/dealer-order/dealer-order';
import { DealerProfilePage } from '../pages/dealer-profile/dealer-profile';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { DealerDealerListPage } from '../pages/dealer-dealer-list/dealer-dealer-list';
import { FavoriteProductPage } from '../pages/favorite-product/favorite-product';
import { VideoCategoryPage } from '../pages/video-category/video-category';
import { LeadsDetailPage } from '../pages/leads-detail/leads-detail';
import { FollowupListPage } from '../pages/followup-list/followup-list';
import { ExpenseListPage } from '../pages/expense-list/expense-list';
import { ProductsPage } from '../pages/products/products';
import { AnnouncementListPage } from '../pages/announcement/announcement-list/announcement-list';
import { PolicyPage } from '../pages/policy/policy';
import { NewarrivalsPage } from '../pages/newarrivals/newarrivals';
import { SupportPage } from '../pages/support/support';
import { CataloguePdfPage } from '../pages/catalogue-pdf/catalogue-pdf';
import { FileTransferObject } from '@ionic-native/file-transfer';
import { Push, PushObject, PushOptions } from '@ionic-native/push';
// import { DocumentViewer, DocumentViewerOptions } from '@ionic-native/document-viewer';
// import { DocumentViewerOptions } from '@ionic-native/document-viewer';
// import { DocumentViewer, DocumentViewerOptions } from '@ionic-native/document-viewer';

declare var DocumentViewer: any;


export interface PageInterface {
    title: string;
    name: string;
    component: any;
    icon: string;
    index?: number;
    tabName?: string;
    tabComponent?: any;
    show:any;
}
@Component({
    templateUrl: 'app.html'
})
export class MyApp {
    
    @ViewChild(Nav) nav: Nav;
    connectionChk:any='';
    rootPage:any;
    tokenInfo:any='';
    loginType:any='';
    current_page:any;
    check_token:any;
    pages: PageInterface[];
    user_logged_in:boolean;
    userLoggedRole:any;
    userLoggedDisplayName:any;
    userRoleId:any;
    last_attendence_data:any = [];
    currentTime:any = '';
    userType:any;
    userName:any;
    versionNumber:any;
    userToken:any;
    transfer: any;
    // documentviewer:any

    constructor( private network :Network ,public platform: Platform, statusBar: StatusBar, public menu: MenuController, public attendenceServe: AttendenceserviceProvider, splashScreen: SplashScreen, public modalCtrl: ModalController,public storage:Storage,public events:Events,public constant:ConstantProvider, private app: App,public toastCtrl:ToastController,public service:DbserviceProvider,public myserv:MyserviceProvider,public alertCtrl:AlertController, public appVersion: AppVersion ,public push: Push) 
    {
        // ,public document:DocumentViewer
        
        //dealer company name update event
        events.subscribe('dealerProfileUpdated',(data)=>
        {
            console.log(data);
            this.userLoggedDisplayName = data;
            console.log(this.userLoggedDisplayName);
        })
        //dealer company name update event
        
        console.log('splash Hide')
        console.log(this.network.type);
        this.constant.networkType = this.network.type;
        
        // Uncomment for logout
        // this.logout();
        
        // commented
        this.check_version();
        
        storage.get('loginType').then((loginType) => {
            console.log(loginType);
            this.loginType = loginType;
        });
        console.log(this.loginType);
        
        setTimeout(() => {
            console.log(this.loginType);
            
            if(this.loginType == 'CMS')
            {
                storage.get('token').then((val) => {
                    console.log(val);
                    
                    if(val == '' || val == null || val == undefined)
                    {
                        ////alert('line81')
                        
                        this.rootPage=SelectRegistrationTypePage;
                    }else  if(val ){
                        this.tokenInfo = this.getDecodedAccessToken(val );
                        console.log( this.tokenInfo);
                        console.log(  this.tokenInfo.sub);
                        // if(this.network.type!='none')
                        // {
                        this.service.post_rqst({'karigar_id':this.tokenInfo.sub },'app_karigar/profile')
                        .subscribe((r)=>
                        {
                            console.log(r);
                            if(r['status'] == "SUCCESS"){
                                
                                this.service.karigar_info = r['karigar'];
                                this.service.connection = 'online';
                                this.storage.set('karigar_info',this.service.karigar_info);
                                
                                if(this.service.karigar_info.del == '1'){
                                    //alert('line97')
                                    
                                    this.rootPage=SelectRegistrationTypePage;
                                    this.Requiredalert('Your Account has been suspended');
                                    this.storage.set('token','');
                                    this.events.publish('data','1', Date.now());
                                    return;
                                    
                                }else if(this.service.karigar_info.status == 'Verified'){
                                    this.rootPage=TabsPage;
                                    //alert('line107')
                                    
                                } else  if( this.service.karigar_info.status != 'Verified'){
                                    let contactModal = this.modalCtrl.create(AboutusModalPage);
                                    contactModal.present();
                                    return;
                                }
                            }
                            else{
                                console.log("User Not found");
                                this.storage.set('token','');
                                this.events.publish('data','1', Date.now());
                                return;
                            }
                        },error=>{
                            //alert('offline 122');
                            this.rootPage=TabsPage;
                            this.service.connection = 'offline';
                            
                        });
                    }
                    
                    // }
                });
                events.subscribe('data',(data)=>
                {
                    console.log(data);
                    if(data==1)
                    {
                        storage.get('token_value').then((val) => {
                            //alert(val);
                            
                            // if(val == '' || val == null || val == undefined)
                            // {
                            console.log('if');
                            this.nav.setRoot(TabsPage);
                            // }
                            // else
                            // {
                            // console.log('else');
                            // this.nav.setRoot(SelectRegistrationTypePage);
                            // }
                        });
                    }
                })
            }
            else
            {
                setTimeout(() => {
                    console.log(this.constant.UserLoggedInData);
                    
                    if(this.constant.UserLoggedInData.userLoggedInChk==false)
                    {
                        // this.nav.setRoot(CatalogueHomePage);
                        this.nav.setRoot(TabsPage);

                        this.setPagesDealer('NotLoggedIn')
                        // this.nav.setRoot(SelectRegistrationTypePage);
                    }
                    else
                    {
                        if(this.constant.UserLoggedInData.loggedInUserType=='Employee')
                        {
                            storage.get('token_value').then((val) => 
                            {
                                console.log(val);
                                
                                if(val == '' || val == null || val == undefined)
                                {
                                    console.log('if');
                                    this.nav.setRoot(SelectRegistrationTypePage);
                                }
                                else
                                {
                                    // alert('line190')
                                    // this.nav.setRoot(DashboardPage);
                                    this.nav.setRoot(TabsPage);

                                    console.log('else');
                                }
                            });
                            this.currentTime = moment().format("HH:mm:ss");
                            
                            
                            this.storage.get('token').then((token) => {
                                if(typeof(token) !== 'undefined' && token){
                                    this.user_logged_in = true;
                                    this.set_pages();
                                }
                                else
                                {
                                    this.user_logged_in = false;
                                    // this.rootPage = SelectRegistrationTypePage;
                                    this.rootPage = SelectRegistrationTypePage;
                                }
                            });
                            this.storage.get('name').then((name) => {
                                if(typeof(name) !== 'undefined' && name){
                                    this.userName = name;
                                    this.set_pages();
                                }
                            });
                            this.storage.get('role_id').then((roleId) => {
                                if(typeof(roleId) !== 'undefined' && roleId){
                                    this.userRoleId = roleId;
                                    this.set_pages();
                                }
                            });
                            this.storage.get('user_type').then((userType) => {
                                if(typeof(userType) !== 'undefined' && userType){
                                    this.userType = userType;
                                    console.log(this.userType)
                                    this.set_pages();
                                }
                            });
                            setTimeout(() => {
                                this.storage.get('role').then((role) => {
                                    if(typeof(role) !== 'undefined' && role){
                                        this.userLoggedRole = role;
                                    }
                                    if(this.user_logged_in) {
                                        this.set_pages();
                                    }
                                });
                                this.storage.get('displayName').then((displayName) => {
                                    if(typeof(displayName) !== 'undefined' && displayName){
                                        this.userLoggedDisplayName = displayName;
                                    }
                                });
                            }, 1000);
                            this.storage.get('token_value').then((token_value) => {
                                if(typeof(token_value) !== 'undefined' && token_value){
                                    this.userToken = token_value;
                                    this.set_pages();
                                }
                            });
                            this.events.subscribe('current_page', (data) =>{
                                this.current_page = data;
                            });
                        } 
                        else  if(this.constant.UserLoggedInData.loggedInUserType=='DrLogin') 
                        {
                            console.log(this.constant.UserLoggedInData);
                            
                            storage.get('token_value').then((val) => 
                            {
                                console.log(val);
                                if(val == '' || val == null || val == undefined)
                                {
                                    this.nav.setRoot(SelectRegistrationTypePage);
                                    this.setPagesDealer('NotLoggedIn')
                                    
                                }
                                else
                                {
                                    // this.nav.setRoot(DealerHomePage);
                                     this.nav.setRoot(TabsPage);

                                    this.setPagesDealer('LoggedIn')
                                    console.log(this.constant.UserLoggedInData);
                                    if(this.constant.UserLoggedInData.displayName)
                                    {
                                        this.userLoggedDisplayName = this.constant.UserLoggedInData.displayName
                                    }
                                }
                                
                            });
                            
                        }
                        
                    }
                }, 500);
                
            }
            platform.ready().then(() => {
                
                //connection check favoritet
                if(this.loginType == 'CMS'){
                    this.network.onConnect().subscribe(() => {
                        console.log('network connected!');
                        this.service.connection = 'online';
                        this.constant.connectionChk = 'online'
                    });
                    this.network.onDisconnect().subscribe(() => {
                        console.log('network was disconnected :-(');
                        this.service.connection = 'offline';
                        this.constant.connectionChk = 'offline';
                    });
                    
                    
                }
                else
                {
                    this.service.connection = 'online';
                    this.constant.connectionChk = 'online;'
                }
                //connection check end
                statusBar.overlaysWebView(false);
                setTimeout(() => {
                    splashScreen.hide();
                }, 1000);
                statusBar.backgroundColorByHexString('#005197');
                
                
                // commented

                this.initPushNotification();
            });
        }, 500);
        
        if(this.network.type=='none')
        {
            // alert('offline checked')
            this.service.connection = 'offline';
            storage.get('token').then((val) => {
                console.log(val);
                if(val == '' || val == null || val == undefined)
                {
                    this.nav.setRoot(SelectRegistrationTypePage);
                }
                else
                {
                    this.nav.setRoot(TabsPage);
                }
            });
        }
        else
        {
            this.service.connection = 'online';
        }
        
        platform.registerBackButtonAction(() => {
            const overlayView = this.app._appRoot._overlayPortal._views[0];
            if (overlayView && overlayView.dismiss) {
                overlayView.dismiss();
                return;
            }
            
            let nav = app.getActiveNav();
            let activeView = nav.getActive().name;
            
            console.log(activeView);
            console.log(nav.canGoBack());
            
            if(activeView == 'HomePage' || activeView == 'MobileLoginPage' || activeView == 'OtpPage' ||  activeView == 'DealerHomePage' ||  activeView == 'DashboardPage' ||  activeView == 'SelectRegistrationTypePage')
            {
                if(this.constant.backButton==0) 
                {
                    console.log('hello2');
                    
                    this.constant.backButton=1;
                    
                    let toast = this.toastCtrl.create(
                        {
                            message: 'Press again to exit!',
                            duration: 2000
                        });
                        
                        toast.present();
                        
                        setTimeout(() => 
                        {
                            this.constant.backButton=0;
                        },2500);
                    } 
                    else 
                    {
                        console.log('hello1');
                        this.platform.exitApp();
                    }
                    
                } 
                else if(activeView == 'DealerAddorderPage')
                {
                    this.events.publish('AddOrderBackAction')
                }
                else if (nav.canGoBack()) 
                {
                    console.log('ok');
                    nav.pop();
                }
                else if(activeView == 'GiftListPage' || activeView == 'TransactionPage' || activeView == 'ProfilePage' || activeView =='MainHomePage')
                {
                    nav.parent.select(0);
                }  
                else 
                {
                    // this.platform.exitApp();
                }
            });
            //events favoritet
            this.events.subscribe('token_val_dr', (val) => {
                if(val)
                {
                    this.user_logged_in = true;
                    this.setPagesDealer('LoggedIn');
                }
            });
            this.events.subscribe('user:login', () => {
                this.favoritet_time();
            });
            this.events.subscribe('user:navigation_menu', () => {
                this.open_nav_menu();
            });
            this.events.subscribe('side_menu:navigation_bar', () => {
                this.set_pages();
            });
            this.events.subscribe('side_menu:navigation_barDealer', () => {
                // this.setPagesDealer('LoggedIn');
                this.open_nav_menu();
            });
            this.events.subscribe('token_val', (val) => {
                if(val)
                {
                    this.user_logged_in = true;
                    this.set_pages();
                }
            });
            this.events.subscribe('userName', (val) => {
                if(val)
                {
                    this.userName = val;
                    this.set_pages();
                }
            });
            this.events.subscribe('userLoggedRole', (val) => {
                if(val)
                {
                    this.userLoggedRole = val;
                    this.set_pages();
                }
            });
            
            this.events.subscribe('userType', (val) => {
                if(val)
                {
                    this.userType = val;
                    this.set_pages();
                }
            });
            this.events.subscribe('userLoggedDisplayName', (val) => {
                if(val)
                {
                    this.userLoggedDisplayName = val;
                    this.set_pages();
                }
            });
            
            this.events.subscribe('userRoleId', (val) => {
                if(val)
                {
                    this.userRoleId = val;
                    this.set_pages();
                }
            });
            
            this.events.subscribe('userToken', (val) => {
                if(val)
                {
                    this.userToken = val;
                    this.set_pages();
                }
            });
            //events end
        }
        getDecodedAccessToken(token: string): any {
            try{
                return jwt_decode(token);
            }
            catch(Error){
                return null;
            }
        }
        Requiredalert(text)
        {
            let alert = this.alertCtrl.create({
                title:'Alert!',
                cssClass:'action-close',
                subTitle: text,
                buttons: ['OK']
            });
            alert.present();
        }
        goOnProductPage()
        {
            this.nav.push(CategoryPage,{'mode':'home'});
        }
        
        openPage(page: PageInterface)
        {
            let params = {};
            console.log(page);
            
            if (page.index) {
                params = { tabIndex: page.index };
            }
            if(page.name == 'Direct Dealer' )
            {
                this.nav.push(page.component, {type:7});
                
            }else if (page.name == 'Dealer')
            {
                this.nav.push(page.component, {type:3});
                
            }else if (page.name == 'Distributor')
            {
                this.nav.push(page.component, {type:1});
                
            } 
            else if(page.name=='My Channel Partner')
            {
                this.myserv.addData({},'DealerData/getCreatedDr').then((resp)=>
                {
                    console.log(resp);
                    this.nav.push(page.component, {'dr_id':resp[0],'type':'Dr','showRelatedTab': 'false'});
                })
            }
            else 
            if (this.nav.getActiveChildNavs().length && page.index != undefined)
            {
                console.log(page.index);
                this.nav.push(page.component);

                // this.nav.getActiveChildNavs()[0].select(page.index);
            } else {
                console.log(page.index);
                console.log(page.component );
                this.nav.push(page.component, params);
            }
        }
        
        openDealerPage(page: PageInterface)
        {
            let params = {};
            
            if (page.name == 'DealerOrderPage')
            {
                console.log(this.constant.UserLoggedInData.type);
                params = { 
                    type: 'Primary',
                    tabIndex: page.index
                };
            }
            else
            {
                if(page.index)
                {
                    params = { tabIndex: page.index };
                }    
            }
            
            if (this.nav.getActiveChildNavs().length && page.index != undefined) {
                
                console.log(page.index);
                console.log(page.component);
                this.nav.push(page.component);
                
                // this.nav.getActiveChildNavs()[0].select(page.index);
            } else {
                console.log(page.index);
                console.log(page.component );
                if(page.name =='HomePage')
                {
                    this.nav.setRoot(DealerHomePage)
                }
                else
                {
                    console.log(page.component);
                    this.nav.push(page.component);
                }
            }
        }
        
        goto_profile()
        {
            this.nav.push(DealerProfilePage);
        }
        
        
        initPushNotification()
        {
            console.log("getnotification")
            this.push.hasPermission()
            .then((res: any) => {
                if (res.isEnabled)
                {
                    console.log('We have permission to send push notifications');
                }
                else
                {
                }
            });
            
            const options: PushOptions = {
                android: {
                    senderID: '1089861096232',
                    icon: './assets/imgs/logo_small'
                },
                ios: {
                    alert: 'true',
                    badge: true,
                    sound: 'false'
                },
                windows: {}
            };
            
            const pushObject: PushObject = this.push.init(options);
            
            pushObject.on('notification')
            .subscribe((notification) =>{
                console.log('Received a notification', notification);
                
                //Notification Display Section
                let confirmAlert = this.alertCtrl
                .create({
                    title: 'New Notification',
                    message: JSON.stringify(notification.message),
                    buttons: 
                    [{
                        text: 'Ignore',
                        role: 'cancel'
                    },
                    {
                        text: 'View',
                        handler: () => {
                            //TODO: Your logic here
                            console.log("View Notification");
                            
                        }
                    }]
                });
            });
            
            pushObject.on('registration').subscribe((registration) =>
            {
                if(this.loginType == 'CMS')
                {
                    this.service.post_rqst({'registration_id':registration.registrationId },'app_karigar/update_token_static')
                    .subscribe((r)=>
                    {
                        console.log(r);
                    });
                }
                else
                {
                    console.log("registration");
                    
                    console.log(registration)
                    this.constant.deviceId = registration.registrationId
                    console.log(this.constant.deviceId);
                    
                    console.log(this.constant.UserLoggedInData)
                    this.myserv.addData({'registration_id':registration.registrationId , 'type':this.constant.UserLoggedInData.loggedInUserType,'dr_id': this.constant.UserLoggedInData.id},'DealerData/updateDeviceToken').then((r)=>
                    {
                    
                    });
                }
            });
            
            pushObject.on('error').subscribe((error) =>
            console.error('Error with Push plugin', error));
        }
        
        favoritet_time()
        {
            this.storage.get('role_id').then((roleId) =>
            {
                console.log(roleId);
              if(typeof(roleId) !== 'undefined' && roleId)
              {
                this.userRoleId = roleId;
                if(this.userRoleId)
                {
                   this.storage.get('token').then((token) => 
                    {
                      if(typeof(token) !== 'undefined' && token)
                      {
                        this.user_logged_in = true;
                        if(this.user_logged_in)
                        {
                            this.attendenceServe.last_attendence_data().then((result)=>
                            {
                                this.last_attendence_data = result['attendence_data'];
                                        // this.check_user_token();
                            })
                        }
                      }
                    });
                }
              }
            });
        }

        open_nav_menu()
        {
            this.menu.open('first');
            this.menu.enable(true, 'first');
        }
        
        set_pages()
        {
            this.service.set(this.user_logged_in);
            if(this.user_logged_in)
            {
                if(this.userName)
                {
                    this.rootPage = DashboardPage;
                }
            }

            if(this.userRoleId && (this.userType == 'Market' || this.userType == 'MARKET' || this.userType == 'market') && this.userToken != undefined)
            {
                this.pages=[
                    { title : 'Home', name: 'HomePage', component:DashboardPage, index: 0, icon: 'home', show: true },
                    // { title: 'Products', name: 'CategoryPage', component: CategoryPage , index: 9,icon: 'book', show: true},
                    { title: 'Products', name: 'ProductsPage', component: ProductsPage , index: 9,icon: 'book', show: true},
                    // { title: 'New Arrivals', name: 'NewarrivalsPage', component: NewarrivalsPage,index: 11, icon: 'fiber_new', show: true},
                    // { title : 'Favorite Product', name: 'Favorite Product', component:FavoriteProductPage, index: 2, icon: 'favorite', show: true },
                    // { title : 'Videos', name: 'Videos', component:VideoCategoryPage, index: 9, icon: 'videocam', show: true },
                    { title: 'Check-In', name: 'Check-In', component: CheckinListPage , index: 9,icon: 'room', show: true},
                    { title: 'Attendance', name: 'AttendencePage', component: AttendencePage,index: 11, icon: 'date_range', show: true},
                    { title : 'Distributor', name: 'Distributor', component: MainDistributorListPage,index: 15, icon: 'group', show: true},
                    { title : 'Direct Dealer', name: 'Direct Dealer', component: MainDistributorListPage,index: 13, icon: 'person_pin', show: true},
                    { title : 'Dealer', name: 'Dealer', component: MainDistributorListPage,index: 12, icon: 'person', show: true},
                    { title: 'Lead', name: 'Lead', component: DistributorListPage,index: 5, icon: 'group_add', show: true},
                    { title : 'Travel Plan', name: 'TravelListPage', component: TravelListPage, index: 23, icon: 'train', show: true },
                    { title : 'Follow Up', name: 'FollowupListPage', component: FollowupListPage, index: 25, icon: 'contact_phone', show: true },
                    { title : 'Announcement', name: 'AnnouncementListPage', component: AnnouncementListPage, index: 27, icon: 'campaign', show: true },
                    { title : 'Expense', name: 'ExpenseListPage', component: ExpenseListPage, index: 26, icon: 'credit_card', show: true },
                    { title : 'Leave', name: 'LeaveListPage', component:LeaveListPage ,index: 10, icon: 'beach_access', show: true },
                ];
            }
            
            if(this.userRoleId && this.userType == 'OFFICE') // this means user is distributor executive
            {
                this.pages=[
                    { title : 'Home', name: 'HomePage', component:DashboardPage, index: 0, icon: 'home', show: true },
                    // { title: 'Products', name: 'CategoryPage', component: CategoryPage , index: 9,icon: 'book', show: true},
                    { title: 'Products', name: 'ProductsPage', component: ProductsPage , index: 9,icon: 'book', show: true},
                    // { title: 'New Arrivals', name: 'NewarrivalsPage', component: NewarrivalsPage,index: 11, icon: 'fiber_new', show: true},
                    // { title : 'Favorite Product', name: 'Favorite Product', component:FavoriteProductPage, index: 2, icon: 'favorite', show: true },
                    { title : 'Videos', name: 'Videos', component:VideoCategoryPage, index: 9, icon: 'videocam', show: true },
                    { title: 'Check-In', name: 'Check-In', component: CheckinListPage , index: 9,icon: 'home_work', show: true},
                    { title: 'Attendance', name: 'AttendencePage', component: AttendencePage,index: 11, icon: 'date_range', show: true},
                    { title : 'Dealer', name: 'Dealer', component: MainDistributorListPage,index: 12, icon: 'person', show: true},
                    { title: 'Lead', name: 'Lead', component: DistributorListPage,index: 5, icon: 'group_add', show: true},
                    { title : 'Travel Plan', name: 'TravelListPage', component: TravelListPage, index: 23, icon: 'contacts', show: true },
                    { title : 'Follow Up', name: 'FollowupListPage', component: FollowupListPage, index: 25, icon: 'contacts', show: true },
                    { title : 'My Distributor', name: 'My Channel Partner', component: LeadsDetailPage, index: 24, icon: 'group', show: true },
                    { title : 'Announcement', name: 'AnnouncementListPage', component: AnnouncementListPage, index: 27, icon: 'campaign', show: true },
                    { title : 'Leave', name: 'LeaveListPage', component:LeaveListPage ,index: 10, icon: 'beach_access', show: true },
                ];
                console.log('go To Home Page');
            }
            if(this.userRoleId == undefined || this.userRoleId == '' || this.userRoleId == false || this.userName)
            {
            }
            if(!this.user_logged_in)
            {

            }
        }

        setPagesDealer(chk)
        {
            if (chk=='NotLoggedIn')
            {
                this.pages=[
                    // { title : 'Home', name: 'Login', component:SelectRegistrationTypePage, index: 0, icon: 'home', show: true },
                    { title : 'About Us', name: 'About Us', component:AboutPage, index: 6, icon: 'info', show: true },
                    { title : 'Contact Us', name: 'Contact Us', component:ContactPage, index: 7, icon: 'contact_phone', show: true },
                    // { title : 'Catalouge Pdf', name: 'CatalougePdf', component:CataloguePdfPage, index: 28, icon: 'menu_book', show: true },
                ];
                this.user_logged_in=false;
            }
            else if(chk=='LoggedIn')
            {
                console.log(this.constant.UserLoggedInData.type);
                
                if(this.constant.UserLoggedInData.type == '1')
                {
                    var name = 'Dealer List';
                    var title = 'Dealer List';
                    var show = true;
                }
                else if(this.constant.UserLoggedInData.type == '3')
                {
                    var name = 'Distributor List';
                    var title = 'Distributor List';
                    var show = true;
                }
                else
                {
                    var show = false;
                }
                if(this.constant.UserLoggedInData.type==1) //that means lohig user is distributor
                {
                    this.pages=[
                        { title : 'Home', name: 'HomePage', component:DealerHomePage, index: 0, icon: 'home', show: true },
                        { title: 'Products', name: 'Product Catalogue', component: ProductsPage , index: 9, icon: 'commute', show: true},
                        { title : 'New Arrivals', name: 'New Arrivals', component:NewarrivalsPage, index: 1, icon: 'fiber_new', show: true },
                        { title : 'Favorite Product', name: 'Favorite Product', component:FavoriteProductPage, index: 2, icon: 'favorite', show: true },
                        { title : 'My Dealers', name: name, component:DealerDealerListPage, index: 7, icon: 'group', show: show },
                        { title : 'Sales Person Visit', name: 'DealerCheckInPage', component:DealerCheckInPage, index: 4, icon: 'home_work', show: true },
                        { title : 'My Orders', name: 'DealerOrderPage', component:DealerOrderPage, index: 3, icon: 'shopping_cart', show: true },
                        { title : 'Announcement', name: 'AnnouncementListPage', component: AnnouncementListPage, index: 27, icon: 'campaign', show: true },
                        { title : 'About Us', name: 'About Us', component:AboutPage, index: 6, icon: 'info', show: true },
                        { title : 'Contact Us', name: 'Contact Us', component:ContactPage, index: 7, icon: 'contact_phone', show: true },
                        { title : 'Policies', name: 'Policies', component:PolicyPage, index: 28, icon: 'privacy_tip', show: true },
                        { title : 'Support', name: 'Support', component:SupportPage, index: 29, icon: 'support', show: true },
                    ];
                } 
                else if(this.constant.UserLoggedInData.type==1) //that means lohig user is direct dealer
                {
                    this.pages=[
                        { title : 'Home', name: 'HomePage', component:DealerHomePage, index: 0, icon: 'home', show: true },
                        { title: 'Products ', name: 'Product Catalogue', component: ProductsPage , index: 9,icon: 'commute', show: true},
                        { title : 'New Arrivals', name: 'New Arrivals', component:NewarrivalsPage, index: 1, icon: 'fiber_new', show: true },
                        { title : 'Favorite Product', name: 'Favorite Product', component:FavoriteProductPage, index: 2, icon: 'favorite', show: true },
                        { title : 'My Orders', name: 'DealerOrderPage', component:DealerOrderPage, index: 3, icon: 'shopping_cart', show: true },
                        { title : 'Announcement', name: 'AnnouncementListPage', component: AnnouncementListPage, index: 27, icon: 'campaign', show: true },
                        { title : 'About Us', name: 'About Us', component:AboutPage, index: 6, icon: 'info', show: true },
                        { title : 'Contact Us', name: 'Contact Us', component:ContactPage, index: 7, icon: 'contact_phone', show: true },
                        { title : 'Policies', name: 'Policies', component:PolicyPage, index: 28, icon: 'privacy_tip', show: true },
                        { title : 'Support', name: 'Support', component:SupportPage, index: 29, icon: 'support', show: true },
                    ];

                }
                else // that means login user is dealer 
                {
                    this.pages=[
                        { title : 'Home', name: 'HomePage', component:DealerHomePage, index: 0, icon: 'home', show: true },
                        { title: 'Products ', name: 'Product Catalogue', component: ProductsPage , index: 9,icon: 'commute', show: true},
                        { title : 'New Arrivals', name: 'New Arrivals', component:NewarrivalsPage, index: 1, icon: 'fiber_new', show: true },
                        { title : 'Favorite Product', name: 'Favorite Product', component:FavoriteProductPage, index: 2, icon: 'favorite', show: true },
                        { title : 'My Distributors', name: name, component:DealerDealerListPage, index: 7, icon: 'group', show: show },
                        { title : 'My Orders', name: 'DealerOrderPage', component:DealerOrderPage, index: 3, icon: 'shopping_cart', show: true },
                        { title : 'Announcement', name: 'AnnouncementListPage', component: AnnouncementListPage, index: 27, icon: 'campaign', show: true },
                        { title : 'About Us', name: 'About Us', component:AboutPage, index: 6, icon: 'info', show: true },
                        { title : 'Contact Us', name: 'Contact Us', component:ContactPage, index: 7, icon: 'contact_phone', show: true },
                        { title : 'Policies', name: 'Policies', component:PolicyPage, index: 28, icon: 'privacy_tip', show: true },
                        { title : 'Support', name: 'Support', component:SupportPage, index: 29, icon: 'support', show: true },
                    ];
                }
                
                this.user_logged_in=true;
            }
            // alert(this.pages.length)
        }
        
        db_app_version:any='';
        app_version:any='';
        check_version()
        {
            this.service.post_rqst("",'/login/app_version')
            .subscribe(resp=>{
                console.log(resp);
                this.db_app_version = resp['app_version'];
                
                this.appVersion.getVersionNumber()
                .then(resp=>{
                    console.log(resp);
                    this.app_version = resp;
                    if(this.app_version != this.db_app_version)
                    {
                        let updateAlert = this.alertCtrl.create({
                            title: 'Update Available',
                            message: 'A newer version of this app is available for download. Please update it from PlayStore !',
                            buttons: [
                                {text: 'Cancel', },
                                {text: 'Update Now',
                                handler: () => {
                                    window.open('market://details?id=com.ToyZone.abacusdesk&hl=en','_system','location=yes');
                                } }
                            ]
                        });
                        updateAlert.present();
                    }
                    console.log("version");
                    
                });
            });
        }
        logout()
        {
            let alert = this.alertCtrl.create({
                title: 'Logout!',
                message: 'Are you sure you want Logout?',
                buttons: [
                    {
                        text: 'No',
                        handler: () => {
                            console.log('Cancel clicked');
                            // this.d.('Action Cancelled!')
                        }
                    },
                    {
                        text: 'Yes',
                        handler: () => {
                            //   this.itemsArr.splice(i,1);
                            this.storage.set('token', '');
                            this.storage.set('role', '');
                            this.storage.set('displayName', '');
                            this.storage.set('role_id','');
                            this.storage.set('name','');
                            this.storage.set('type','');
                            this.storage.set('token_value','');
                            this.storage.set('userId','');
                            this.storage.set('token_info','');
                            // this.storage.set('token_value','');
                            // this.storage.set('loggedInUserType','');
                            // this.storage.set('loginData','');
                            this.user_logged_in = false;
                            this.userLoggedRole = '';
                            this.userLoggedDisplayName = '';
                            this.userRoleId = '';
                            this.userType = '';
                            this.userName = '';
                            this.constant.UserLoggedInData ={};
                            console.log(this.constant.UserLoggedInData);

                            this.setPagesDealer('NotLoggedIn')
                            // this.set_pages();
                            // this.nav.setRoot(SelectRegistrationTypePage);
                            // this.nav.setRoot(CatalogueHomePage);
                            this.nav.setRoot(TabsPage);

                                     
                        }
                    }
                ]
            })
            
            alert.present();
            
        }
        
        offlineAlert()
        {
            var text = 'Offline ! Please Connect To An Active Internet Connection'
            let alert = this.alertCtrl.create({
                title:'Alert!',
                cssClass:'action-close',
                subTitle: text,
                buttons: ['OK']
            });
            alert.present();
        }

        login()
        {
            this.nav.setRoot(SelectRegistrationTypePage);

        }
        
        openCatelogue()
       {
    
            // const fileTransfer: FileTransferObject = this.transfer.create();


            var upload_url=  this.constant.upload_url +'catalogue.pdf'
            console.log(upload_url);
            

            DocumentViewer.previewFileFromUrlOrPath(
                function () {
                console.log('success');
                }, function (error) 
                {
                if (error == 53) 
                {
                    console.log('No app that handles this file type.');
                }else if (error == 2)
                {
                    console.log('Invalid link');
                }
              },
                 upload_url ,'catalogue', 'application/pdf');

                //  const options: DocumentViewerOptions = {
                //         title: 'Catalogue'
                //       }
                      
                //       this.document.viewDocument(upload_url, 'application/pdf', options)
 
        }

    }
    