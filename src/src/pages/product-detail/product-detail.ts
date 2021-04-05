import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Loading, LoadingController, App, Keyboard } from 'ionic-angular';
import { ProductSubdetailPage } from '../product-subdetail/product-subdetail';
import { DbserviceProvider } from '../../providers/dbservice/dbservice';
import { OfflineDbProvider } from '../../providers/offline-db/offline-db';
import { SQLite } from '@ionic-native/sqlite';
import { MyserviceProvider } from '../../providers/myservice/myservice';
import { AddOrderPage } from '../add-order/add-order';
import { Storage } from '@ionic/storage';
import { ConstantProvider } from '../../providers/constant/constant';
import { DealerAddorderPage } from '../dealer-addorder/dealer-addorder';



@IonicPage()
@Component({
  selector: 'page-product-detail',
  templateUrl: 'product-detail.html',
})
export class ProductDetailPage 
{
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
  categoryName: any;
  globalSearchData: any;

  prod_id:any='';
  prod_detail:any={};
  related_products: any=[];

  cart_array:any=[];
  data:any={};
  order:any = false;
  userId:any = '';
  image_url:any = '';
  existInFavourite:any='';
  user_data:any={};
  userType:any
  
  constructor(
              public navCtrl: NavController,
              public navParams: NavParams,
              public service:DbserviceProvider,
              public service1: MyserviceProvider,
              public loadingCtrl:LoadingController,
              private app:App,
              public offlineService: OfflineDbProvider,
              private sqlite: SQLite,
              public keyboard : Keyboard,
              public storage: Storage,
              public constant:ConstantProvider
              ) 
    {
      // this.presentLoading();
      this.skelton = new Array(10);
      this.image_url = this.constant.upload_url + 'Products/'

    }
    
    ionViewDidLoad() {
      
      console.log('ionViewDidLoad ProductDetailPage');
      
      this.prod_id = this.navParams.get('id');

      if(this.navParams.get("order") != undefined && this.navParams.get("order")== true)
            {
                this.order = this.navParams.get("order");
                this.data = this.navParams.get("order_data");
                if(this.navParams.get("cart_array"))
                {
                    this.cart_array = this.navParams.get("cart_array");
                }
                else
                {
                    this.cart_array = [] ;
                }
            }

      // this.src = this.navParams.get('src');
      
      // this.filter.src = this.src;
      // this.filter.categoryName = this.navParams.get('categoryName');
      // this.filter.globalSearchData = this.navParams.get('globalSearchData');
      // if(this.filter.globalSearchData != '' )
      // {
      //   this.filter.search = this.filter.globalSearchData
      // }
      // console.log(this.cat_id);
      // console.log('src ' + this.src);
      
      // console.log(this.cat_id);
      // this.getProductList(this.cat_id,'');
      // this.getProductListWithLiveServer(this.cat_id,'');

          if(this.constant.UserLoggedInData.loggedInUserType == 'Employee')
              {
                  this.userType='Employee'
              }
              else
              {
                  this.userType='drLogin'
              }
          console.log(this.userType);
          
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
             this.checkForExistInFavourite();
             this.getProductDetail();
              
          }, 200);
      }, 200);
      
    }
    

    doRefresh(refresher) 
    {
      console.log('Begin async operation', refresher);
      this.flag = '';
      // this.getProductList(this.cat_id,'');
      refresher.complete();
    }

    gotodetail(id)
    {
        this.navCtrl.push(ProductDetailPage,{id:id})
    }

    getProductDetail()
    {
      this.service1.show_loading();

      var dr_id
      if(this.data && this.data.type_name)
          dr_id = this.data.type_name.id ;
       else   
          dr_id = this.userId ;

        this.service.post_rqst({'product_id' :this.prod_id,'order':this.order,'dr_id':dr_id,'userId':this.userId,'userType':this.userType},'Product/productDetail').subscribe( response=>
        {
            console.log(this.userId);
            
            console.log(response);
            this.service1.dismiss();
            this.prod_detail = response['product'];
            this.prod_detail['qty'] = 0;
            this.related_products = response['related_products'];
        },(error: any) => 
        {
          this.service1.dismiss();
        });
    }

    quantity(value:any)
    {
        console.log(this.prod_detail['qty']);
        
        if(value == 'add'){
            var tmp_qty = 0;
            tmp_qty = parseInt(this.prod_detail['qty'])+1;
            this.prod_detail['qty']=tmp_qty;
        }
        else{
            if(this.prod_detail['qty'] > 0){
                this.prod_detail['qty']=parseInt(this.prod_detail['qty'])-1;
            }
            else{
                this.prod_detail['qty']=0;
            }
        }
    }


    addToCart(value:any = {})
    {

            value.discount_amount = 0;
            value.subTotal = 0;
            value.discountedAmount = 0;
            
            value.subTotal = (value.price)*(value.qty);
            
            if(value.discount)
            {
                value.discount_amount = (value.price * value.discount)/100;
            }
            
            value.discountedAmount = parseFloat(value.price) - parseFloat(value.discount_amount)
            
            value.subtotal_discount = value.discount_amount * value.qty;
            
            value.subtotal_discounted = value.discountedAmount * value.qty;
            value.subtotal_discounted  = value.subtotal_discounted.toFixed(2)
            console.log(value);

            if(this.cart_array.length == 0)
            {
                this.cart_array.push(value);
            }
            else
            {
                var flag = true;
                this.cart_array.forEach(element => {
                    
                    if(value.category == element.category &&  value.cat_no == element.cat_no)
                    {
                        element.subTotal=parseFloat(element.subTotal) + parseFloat(value.subTotal);
                        
                        element.subtotal_discount= parseFloat(element.subtotal_discount) + parseFloat(value.subtotal_discount);

                        element.subtotal_discount= parseFloat(element.subtotal_discount) + parseFloat(value.subtotal_discount);
                        element.subtotal_discounted= parseFloat(element.subtotal_discounted) + parseFloat(value.subtotal_discounted);
                        element.qty= parseFloat(element.qty) + parseFloat(value.qty);
                        
                        flag = false;
                    }
                });
                
                if(flag)
                {
                    this.cart_array.push(value);
                }
            }           
    }

    toGoOrderPage()
    {
            console.log(this.cart_array);
            
        //   this.navCtrl.push(AddOrderPage,{"cart_array":this.cart_array,'from_product':true,'data':this.data});

          if(this.userType == 'Employee')
            {
                this.navCtrl.push(AddOrderPage,{"cart_array":this.cart_array,'from_product':true,'data':this.data});
            }
            else
            {
                this.navCtrl.push(DealerAddorderPage,{"cart_array":this.cart_array,'from_product':true,'order_data':this.data});

            }
    }


    add_to_fav()
    {
            var prod = {id:this.prod_id}
            var data = {"id":this.userId,userType:this.userType}
            this.service1.show_loading();

            this.service1.addData({"user_data":data,"product":prod},"dealerData/add_favorite").then(resp=>
            {
                console.log(resp);
                this.service1.dismiss();
                this.service1.presentToast('Product Added to Favourites');
                this.checkForExistInFavourite();
            },err=>
            {
                this.service1.errToasr()
                this.checkForExistInFavourite();
                this.service1.dismiss()

            })
    }

    remove_from_fav()
    {
            var prod = {id:this.prod_id}
            var data = {"id":this.userId,userType:this.userType}
            this.service1.show_loading();
            this.service1.addData({"user_data":data,"product":prod},"dealerData/remove_from_fav").then(resp=>
            {
                console.log(resp);
                this.service1.dismiss();
                this.service1.presentToast('Product Removed From Favourites');
                this.checkForExistInFavourite();

            },err=>
            {
                this.service1.errToasr()
                this.checkForExistInFavourite();
                this.service1.dismiss()
            })
        
    }

    checkForExistInFavourite()
    {
        this.service1.addData({"product_id":this.prod_id,"userId":this.userId,userType:this.userType},"dealerData/checkForExistInFavourite").then(resp=>
        {
             console.log(resp);
             if(resp!=0)
              {
                  this.existInFavourite=true;
              }
              else
              {
                  this.existInFavourite=false
              }
          },
          err=>
          {
          })
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

    // goOnProductSubDetailPage(id)
    // {
    //   this.navCtrl.push(ProductSubdetailPage,{'id':id})
    // }

    // getProductList(id, search) 
    // {
    //   this.keyboard.close()
    //   this.no_rec=false
    //   console.log(search);
    //   this.filter.search = search;
    //   this.filter.limit = 0;
    //   this.filter.id = id;
      
    //   const searchData = JSON.parse(JSON.stringify(this.filter));
      
    //   if(searchData.search) {
    //     searchData.search = '%'+ searchData.search + '%';
    //   }
      
    //   console.log(searchData);
      
    //   this.offlineService.onGetProductListHandler(searchData, 0).subscribe(productData => {
    //     console.log(productData);
        
    //     this.prod_list = productData['products'];
        
    //     for (let index = 0; index < this.prod_list.length; index++) {
          
    //       this.offlineService.onReturnImagePathHandler('productImage', this.prod_list[index].image, this.prod_list[index].id).subscribe((imageResultData) => {
            
    //         console.log(imageResultData);
            
    //         const productIndex = this.prod_list.findIndex(row => row.id == imageResultData.recordId);
            
    //         console.log(this.prod_list);
    //         console.log('ProductIndex ' + productIndex);
            
    //         this.prod_list[productIndex].imageCompletePath = imageResultData['imagePath'];
    //       });
    //     }
        
    //     if(this.prod_list.length == 0) {
          
    //       this.no_rec = true;
          
    //     } else {
          
    //       this.no_rec = false;
    //     }
        
    //     let imageName = '';
    //     let categoryId = '';
    //     let imageFolderName = '';
        
    //     if(productData['category_name'] && productData['category_name'][0]) {
          
    //       if(this.src == 'mainCategory') {
            
    //         imageName = productData['category_name'][0].image;
    //         imageFolderName = 'mainCategoryImage';
            
    //       } else if(this.src == 'category') {
            
    //         imageName = productData['category_name'][0].categoryImage;
    //         imageFolderName = 'categoryImage';
    //       }
    //     }
        
    //     if(productData['category_name'] && productData['category_name'][0]) {
    //       categoryId = productData['category_name'][0].id;
    //     }
        
    //     console.log(this.src);
    //     console.log(imageFolderName);
    //     console.log(productData);
        
    //     this.offlineService.onReturnImagePathHandler(imageFolderName, imageName, categoryId).subscribe((imageResultData) => {
          
    //       console.log(imageResultData);
    //       if(productData['category_name'] && productData['category_name'][0]) {
            
    //         productData['category_name'][0].imageCompletePath = imageResultData['imagePath'];
            
    //         this.prod_cat = productData['category_name'][0];
            
    //       } else {
            
    //         this.prod_cat = productData['category_name'];
    //       }
          
    //     });
        
    //     this.prod_count = productData['product_count']
    //     this.total_count = productData['product_count_all']
    //     console.log(this.prod_cat);
    //   });
    // }
    
    // getProductListWithLiveServer(id,search)
    // {
    //   console.log(search);
    //   this.filter.search=search;
    //   this.filter.limit = 0;
    //   this.filter.id=id;
    //   this.presentLoading();
    //   this.service.post_rqst({'filter':this.filter},'Product/productList')
    //   .subscribe( (r) =>
    //   {
    //     console.log(r);
    //     setTimeout(() => {
          
    //       this.loading.dismiss();
    //     }, 2000);
        
    //     this.prod_list=r['products'];
    //     if(this.prod_list.length == 0)
    //     {
    //       this.no_rec = true;
    //     }
    //     else
    //     {
    //       this.no_rec = false;
    //     }
    //     for (let index = 0; index < this.prod_list.length; index++) 
    //     {
          
    //       // this.getImages(this.prod_list[index]['id'],index)               
    //     }

    //     this.prod_cat=r['products'][0];
    //     this.prod_count=r['product_count']
    //     this.total_count=r['product_count']
    //     console.log(this.prod_cat);
    //   },(error: any) => {
    //     // this.loading.dismiss();
    //   })
    // }
    
    // getImages(category_id,index)
    // {
    //   console.log(category_id + index)
    //   this.service.post_rqst({'product_id' : category_id},'app_master/getproductimages').subscribe((res)=>{
    //     this.prod_list[index]['image']=res['image'][0]['image'];
    //   })
    // }
    
    // loadData(infiniteScroll)
    // {
    //   console.log('loading');
      
    //   this.filter.limit=this.prod_list.length;
    //   this.service.post_rqst({'filter' : this.filter},'app_master/productList').subscribe( r =>
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
    //           for (let index =(this.prod_list.length - r['products'].length); index < this.prod_list.length; index++) {
                
    //             this.getImages(this.prod_list[index]['id'],index)
                
                
    //           }
    //           infiniteScroll.complete();
    //         },1000);
    //       }
    //     });
    // }
      
    // presentLoading()
    // {
    //     this.loading = this.loadingCtrl.create({
    //       spinner: 'hide',
    //       content: `<img src="./assets/imgs/gif.svg"/>`,
    //       dismissOnPageChange: true
    //     });
    //     this.loading.present();
    // }
    
    }
    