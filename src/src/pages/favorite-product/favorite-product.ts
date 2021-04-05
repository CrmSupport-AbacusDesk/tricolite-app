import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Loading, LoadingController, App } from 'ionic-angular';
import { ProductSubdetailPage } from '../product-subdetail/product-subdetail';
import { DbserviceProvider } from '../../providers/dbservice/dbservice';
import { OfflineDbProvider } from '../../providers/offline-db/offline-db';
import { SQLite } from '@ionic-native/sqlite';
import { ConstantProvider } from '../../providers/constant/constant';
import { MyserviceProvider } from '../../providers/myservice/myservice';

import { Storage } from '@ionic/storage';
import { ProductDetailPage } from '../product-detail/product-detail';

@IonicPage()
@Component({
    selector: 'page-favorite-product',
    templateUrl: 'favorite-product.html',
})
export class FavoriteProductPage
{
    load_data:any=''
    cat_id:any='';
    filter :any = {};
    prod_list:any=[];
    prod_cat:any={};
    prod_count:any='';
    loading:Loading;
    total_count:any='';
    flag:any='';
    no_rec:any=false;
    skelton:any={}
    src:any;
    user_data:any={};
    image_url:any = '';
 
    constructor(public navCtrl: NavController,
        public storage: Storage
        ,public navParams: NavParams,public service:DbserviceProvider,public loadingCtrl:LoadingController,private app:App,public offlineService: OfflineDbProvider,private sqlite: SQLite,public constant:ConstantProvider,public db:MyserviceProvider) {
        
        this.skelton = new Array(10);
        this.image_url = this.constant.upload_url + 'Products/'

    }
    ionViewWillEnter()
    {
        this.user_data = this.constant.UserLoggedInData;
        this.filter.user_id = this.user_data.id;
        this.get_favorite_product();
    }
    
    ionViewDidLoad() {
        
        console.log('ionViewDidLoad ProductDetailPage');
        
    }
    
    goOnProductSubDetailPage(id){
        this.navCtrl.push(ProductDetailPage,{'id':id})
    }
    
    
    userType:any
    get_favorite_product()
    {
        if(!this.filter.search)
        {
            this.db.show_loading();
        }
        this.load_data=''
        this.filter.start = 0;
        var userId = ''
        this.storage.get('loginType').then((loginType) => {
            console.log(loginType);
            console.log(this.constant.UserLoggedInData.loggedInUserType);
            
            if(loginType=='CMS')
            {
                this.userType='CMS'
            }
            else
            {
                if(this.constant.UserLoggedInData.loggedInUserType == 'Employee')
                {
                    this.userType='Employee'
                    this.storage.get('userId').then((resp)=>
                    {
                        userId = resp
                    });
                }
                else
                {
                    this.userType='drLogin'
                }
            }
            console.log(this.userType);
            
        });
        setTimeout(() => {
            if(this.userType=='CMS')
            {
                this.user_data = this.service.tokenInfo;
                userId = this.service.karigar_info.id;
            }
            else
            {
                if(this.userType!='Employee')
                {
                    this.user_data = this.constant.UserLoggedInData.all_data;
                    userId = this.user_data.id
                }
            }
          
            this.filter.user_id = userId
            this.db.addData({'filter':this.filter,userType:this.userType},'dealerData/favorite_product')
            .then( (resp) =>
            {
                this.load_data='1'

                if(!this.filter.search)
                {
                    setTimeout(() => {
                        this.db.dismiss();
                        
                    }, 1000);
                }
                console.log(resp);
                this.prod_list=resp['product_list'];
                
                console.log(this.prod_list);
            },(error: any) => {
                this.db.dismiss();
                
            })
        }, 1000);
        ///////
        
      
    }
    
    loadData(infiniteScroll)
    {
        console.log('loading');
        this.filter.start=this.prod_list.length;
        this.service.post_rqst({'filter' : this.filter},'dealerData/favorite_product')
        .subscribe( (r) =>
        {
            console.log(r);
            if(r['product_list']=='')
            {
                this.flag=1;
            }
            else
            {
                setTimeout(()=>{
                    this.prod_list=this.prod_list.concat(r['product_list']);
                    for (let index = (this.prod_list.length - r['product_list'].length); index < this.prod_list.length; index++)
                    {
                    }
                    infiniteScroll.complete();
                },1000);
            }
        });
    }
}
