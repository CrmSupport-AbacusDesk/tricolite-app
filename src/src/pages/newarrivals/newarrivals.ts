import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DbserviceProvider } from '../../providers/dbservice/dbservice';
import { ProductSubdetailPage } from '../product-subdetail/product-subdetail';
import { OfflineDbProvider } from '../../providers/offline-db/offline-db';
import { SQLite } from '@ionic-native/sqlite';
import { MyserviceProvider } from '../../providers/myservice/myservice';
import { ProductDetailPage } from '../product-detail/product-detail';
import { ConstantProvider } from '../../providers/constant/constant';
import { Storage } from '@ionic/storage';


@IonicPage()
@Component({
  selector: 'page-newarrivals',
  templateUrl: 'newarrivals.html',
})
export class NewarrivalsPage {

  cat_id:any='';
  filter :any = {};
  prod_list:any=[];
  prod_cat:any={};
  prod_count:any='';
  // loading:Loading;
  total_count:any='';
  flag:any='';
  no_rec:any=false;
  skelton:any={}

  userId:any = '';
  user_data:any={};
  userType:any
  image_url:any=[];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public service:DbserviceProvider,
              public offlineService: OfflineDbProvider,
              public service1: MyserviceProvider,
              private sqlite: SQLite,
              public constant:ConstantProvider,
              public storage: Storage) 
  {
        this.skelton = new Array(10);
        this.image_url = this.constant.upload_url + 'Products/';
        console.log(this.image_url);
    
  }

  ionViewDidLoad() 
  {
    if(this.constant.UserLoggedInData.loggedInUserType == 'Employee')
    {
        this.userType='Employee'
    }
    else
    {
        this.userType='drLogin'
    }
    
    setTimeout(() => 
    {
        if(this.userType!='Employee')
        {
            this.user_data = this.constant.UserLoggedInData.all_data;
            if(this.user_data)
            this.userId = this.user_data.id
        }
        else
        {
            this.storage.get('userId').then((resp)=>
            {
                this.userId = resp
            });
        }
        setTimeout(() => 
        {
            this.getProductList();
        }, 200);
    }, 200);

  }

  goOnProductDetailPage(id)
  {
    this.navCtrl.push(ProductDetailPage,{'id':id})
      
  }

  doRefresh(refresher)
  {
    console.log('Begin async operation', refresher);
    this.flag = '';
    this.getProductList();
    refresher.complete();
  }

  getProductList()
  {
      this.filter.limit = 0;
      this.filter.type = 'new_arrival';
      this.service1.show_loading();

      this.service.post_rqst({'filter' : this.filter,'userId':this.userId,'userType':this.userType},'Product/productList').subscribe((response)=>
      {
          console.log(response);
          this.prod_list = response.products;
          console.log( this.prod_list);
          
          this.service1.dismiss();
      },
      er=>
      {
          this.service1.dismiss();
      });
  }
  
  
  loadData(infiniteScroll)
  {
      this.filter.limit=this.prod_list.length;
      this.filter.type = 'new_arrival';

      this.service.post_rqst({'filter' : this.filter,'userId':this.userId,'userType':this.userType},'Product/productList').subscribe( response =>
      {
         console.log(response);
        if( response.products == '')
        {
          this.flag=1;
        }
        else
        {
          setTimeout(()=>
          {
              this.prod_list=this.prod_list.concat(response.products);
              console.log(this.prod_list.length +' '+ response.products.length)
              infiniteScroll.complete();
               },1000);
        }
      });
  }

  // loadData(infiniteScroll)
  // {
  //   console.log('loading');

  //   this.filter.limit=this.prod_list.length;
  //   this.service.post_rqst({'filter' : this.filter,'type':'New Arivals'},'app_master/newArrivals').subscribe( r =>
  //     {
  //       console.log(r);
  //       if(r['products']=='')
  //       {
  //         this.flag=1;
  //       }
  //       else
  //       {
  //         setTimeout(()=>{
  //           this.prod_list=this.prod_list.concat(r['products']);
  //           console.log('Asyn operation has stop')
  //           infiniteScroll.complete();
  //         },1000);
  //       }
  //     });
  // }

  // getProductList(id, search)  
  // {

  //         console.log(search);
  //         this.filter.search = search;
  //         this.filter.limit = 0;
  //         this.filter.id = id;

  //         console.log(this.filter);

  //         const searchData = JSON.parse(JSON.stringify(this.filter));

  //         if(searchData.search) {
  //             searchData.search = '%'+ searchData.search +'%';
  //         }

  //         this.offlineService.onGetProductListHandler(searchData, 1).subscribe(productData => {

  //                 console.log(productData);
  //                 this.prod_list = productData['products'];

  //                 for (let index = 0; index < this.prod_list.length; index++) {

  //                       this.offlineService.onReturnImagePathHandler('productImage', this.prod_list[index].image, this.prod_list[index].id).subscribe((imageResultData) => {

  //                             console.log(imageResultData);

  //                             const productIndex = this.prod_list.findIndex(row => row.id == imageResultData.recordId);

  //                             console.log(this.prod_list);
  //                             console.log('ProductIndex ' + productIndex);

  //                             this.prod_list[productIndex].imageCompletePath = imageResultData['imagePath'];
  //                       });
  //                 }

  //                 if(this.prod_list.length == 0) {

  //                     this.no_rec = true;

  //                 } else {

  //                     this.no_rec = false;
  //                 }

  //                 this.prod_count = productData['product_count']
  //                 this.total_count = productData['product_count_all']
  //                 console.log(this.prod_cat);
  //         });
  // }

  // getProductListWithLiveServer(id,search)
  // {
  //   console.log(search);
  //   this.filter.search=search;
  //   this.filter.limit = 0;
  //   this.filter.id=id;
  //   // this.presentLoading();
  //   this.service.post_rqst({'filter':this.filter},'app_master/newArrivals')
  //   .subscribe( (r) =>
  //   {
  //     console.log(r);
  //     // this.loading.dismiss();
  //     this.prod_list=r['products'];
  //     if(this.prod_list.length == 0)
  //     {
  //       this.no_rec = true;
  //     }
  //     else
  //     {
  //       this.no_rec = false;
  //     }
  //     // this.prod_cat=r['category_name'][0];
  //     this.prod_count=r['product_count']
  //     this.total_count=r['product_count_all']
  //     console.log(this.prod_cat);
  //   },(error: any) => {
  //     // this.loading.dismiss();
  //   })
  // }

}
