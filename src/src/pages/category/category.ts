import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Loading, LoadingController, App } from 'ionic-angular';
import { ProductsPage } from '../products/products';
import { DbserviceProvider } from '../../providers/dbservice/dbservice';
import { errorHandler } from '@angular/platform-browser/src/browser';
import { ProductDetailPage } from '../product-detail/product-detail';
import { NewarrivalsPage } from '../newarrivals/newarrivals';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { OfflineDbProvider } from '../../providers/offline-db/offline-db';
import { MyserviceProvider } from '../../providers/myservice/myservice';
import { ConstantProvider } from '../../providers/constant/constant';


@IonicPage()
@Component({
  selector: 'page-category',
  templateUrl: 'category.html',
})
export class CategoryPage {

  prod_cat_list:any=[];
  filter :any = {};
  flag:any='';
  loading:Loading;
  cat_images:any=[];
  category_count:any='';
  no_rec:any=false;
  skelton:any={}
  image_url:any = '';

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public service:DbserviceProvider,
              public service1: MyserviceProvider,
              public loadingCtrl:LoadingController,
              private app:App,
              public offlineService: OfflineDbProvider,
              private sqlite: SQLite,
              public constant:ConstantProvider) 
  {
    this.image_url = this.constant.upload_url;

        this.skelton = new Array(10);
  }

  ionViewDidLoad() {
      console.log('ionViewDidLoad ProductsPage');
      // this.presentLoading();
      // this.getCategoryData();
  }

  ionViewWillEnter()
  {
      // this.getProductCategoryList();
      this.getCategoryData();

  }

  doRefresh(refresher)
  {
    console.log('Begin async operation', refresher);
    // this.getProductCategoryList();
    this.getCategoryData();
    this.flag='';
    refresher.complete();
  }
  
  goToNewArrivals()
  {
    console.log('newArrivals')
    this.navCtrl.push(NewarrivalsPage);
  }

  goToProductList(type,data)
  {
      this.navCtrl.push(ProductsPage,{"type":type,"data":data});
      // this.navCtrl.push(ProductSubdetailPage,{'id':50});
  }

   
    getCategoryData()
    {
      this.service1.show_loading();

      this.no_rec=false;

      this.service.post_rqst({'filter' : this.filter},'Product/categoryList').subscribe((response)=>
      {
          console.log(response);
          this.prod_cat_list = response.categories;
          this.service1.dismiss();

          if(!this.prod_cat_list.length)
          {
            this.no_rec=true
          }

      },er=>
      {
        this.service1.dismiss();
      });  
    }

    ionViewDidLeave()
    {
      let nav = this.app.getActiveNav();
      if(nav && nav.getActive())
      {
        let activeView = nav.getActive().name;
        let previuosView = '';
        if(nav.getPrevious() && nav.getPrevious().name)
        {
          previuosView = nav.getPrevious().name;
        }
        console.log(previuosView);
        console.log(activeView);
        console.log('its leaving');
        if((activeView == 'HomePage' || activeView == 'GiftListPage' || activeView == 'TransactionPage' || activeView == 'ProfilePage' ||activeView =='MainHomePage') && (previuosView != 'HomePage' && previuosView != 'GiftListPage'  && previuosView != 'TransactionPage' && previuosView != 'ProfilePage' && previuosView != 'MainHomePage'))
        {

          console.log(previuosView);
          this.navCtrl.popToRoot();
        }
      }
    }

    
  
  }
