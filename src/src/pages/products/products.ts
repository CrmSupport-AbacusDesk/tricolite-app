import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Loading, LoadingController, App, ModalController } from 'ionic-angular';
import { ProductDetailPage } from '../product-detail/product-detail';
import { DbserviceProvider } from '../../providers/dbservice/dbservice';
import { OfflineDbProvider } from '../../providers/offline-db/offline-db';
import { SQLite } from '@ionic-native/sqlite';
import { MyserviceProvider } from '../../providers/myservice/myservice';
import { ConstantProvider } from '../../providers/constant/constant';
import { AddOrderPage } from '../add-order/add-order';
import { Storage } from '@ionic/storage';
import { DealerAddorderPage } from '../dealer-addorder/dealer-addorder';
import { ViewProfilePage } from '../view-profile/view-profile';




@IonicPage()
@Component({
    selector: 'page-products',
    templateUrl: 'products.html',
})
export class ProductsPage 
{
    product_list:any=[];
    category_list:any=[];
    filter :any = {};
    flag:any='';
    loading:Loading;
    cat_images:any=[];
    category_count:any='';
    no_rec:any=false;
    name:any='';
    skelton:any={};
    order:any = false;
    filter_active:any = false;
    length:any = 20;
    filter_category_active:any = false;
    filter_price_active:any = false;
    image_url:any = '';
    
    cart_array:any=[];
    data:any={};
    userId:any = '';
    user_data:any={};
    userType:any
    
    constructor(public navCtrl: NavController,
        public navParams: NavParams,
        public service:DbserviceProvider,
        public service1: MyserviceProvider,
        public loadingCtrl:LoadingController,
        private app:App,
        public offlineService: OfflineDbProvider,
        public modalCtrl: ModalController,
        public constant:ConstantProvider,
        private sqlite: SQLite,
        public storage: Storage) 
        {
            this.image_url = this.constant.upload_url + 'Products/'
            
           
            console.log(this.image_url);
            
            
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
                console.log(this.userType);
                
                if(this.userType!='Employee')
                {
                    console.log(this.constant.UserLoggedInData);
                    
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
                    console.log(this.userId);

                    this.getProductList();
                    this.getFilterData();
                    
                }, 200);
            }, 200);

            console.log(this.userId);
    }
        
        ionViewDidLoad() 
        {
            console.log('ionViewDidLoad ProductsPage');
        
            this.filter.data = this.navParams.get("data");
            this.filter.type = this.navParams.get("type");
            if(this.navParams.get("order") != undefined && this.navParams.get("order")== true)
            {
                this.order = this.navParams.get("order");
                this.data = this.navParams.get("order_data");
                console.log(this.navParams.get("order_data"));
                
                if(this.navParams.get("cart_array"))
                {
                    this.cart_array = this.navParams.get("cart_array");
                }
                else
                {
                    this.cart_array = [] ;
                }
            }
            console.log(this.order);           
        }
        
        ionViewWillEnter()
        {
            
        }
        
        doRefresh(refresher)
        {
            console.log('Begin async operation', refresher);
            // this.getProductCategoryList();
            this.getProductList();
            this.getFilterData();
            refresher.complete();
        }
        
        goOnProductDetailPage(id)
        {
            if(this.order == true)
            {
                this.navCtrl.push(ProductDetailPage,{'id':id,"order":true,"order_data":this.data,"cart_array":this.cart_array});
            }
            else
            {
                this.navCtrl.push(ProductDetailPage,{'id':id})
            }
            
        }
        
        getFilterData()
        {
            this.filter['master'] = '';
            this.filter['category'] = [];
            this.filter['price'] = '';
            
            this.service.post_rqst({},'product/filterData').subscribe((resp:any)=>{
                console.log(resp);
                this.category_list = resp['category_list'];
                
                this.category_list.map((x:any)=>{
                    x.checked = false;
                });
            })
        }
        
        filter_by(action:any,id:any,type)
        {
            if(type == 'category')
            {
                if(action == true)
                {
                    this.filter['category'].push(id);
                }
                else
                {
                    var index = this.filter['category'].indexOf(id); 
                    this.filter['category'].splice(index,1);
                }
            }

            if(type == 'price')
            {
                this.filter.price = action;
            }
            
            console.log(this.filter);
        }
        
        getProductList()
        {
            this.filter.limit = 0;
            if(!this.filter.master)            
               this.service1.show_loading();
               
            console.log(this.data);
            
            var dr_id
            if(this.data && this.data.type_name)
              dr_id = this.data.type_name.id
            else
              dr_id = this.userId

            console.log(dr_id);
            
            console.log(this.filter);
            
            this.service.post_rqst({'filter' : this.filter,'order':this.order,'dr_id':dr_id,'userId':this.userId,'userType':this.userType},'Product/productList').subscribe((response)=>
            {
                console.log(response);
                console.log(this.filter);
                
                this.product_list = response.products;
                console.log(this.product_list);
                
                this.service1.dismiss();
                if(this.order == true)
                {
                    for (let i = 0; i < this.product_list.length; i++) 
                    {
                        this.product_list[i].qty = 0; 
                    }
                }
            },
            er=>
            {
                this.service1.dismiss();
            });
        }
        
        
        loadData(infiniteScroll)
        {
            console.log('loading');
            var dr_id
            if(this.data && this.data.type_name)
              dr_id = this.data.type_name.id
            else
              dr_id = this.userId
            this.filter.limit=this.product_list.length;
            this.service.post_rqst({'filter' : this.filter,'order':this.order,'dr_id':dr_id,'userId':this.userId,'userType':this.userType},'Product/productList').subscribe( response =>
                {
                    console.log(response);
                    console.log(this.filter);
                    
                    if( response.products == '')
                    {
                        this.flag=1;
                    }
                    else
                    {
                        setTimeout(()=>
                        {
                            this.product_list=this.product_list.concat(response.products);
                            console.log(this.product_list.length +' '+ response.products.length)
                            if(this.order == true)
                            {
                                for (let i = 0; i < this.product_list.length; i++) 
                                {
                                    this.product_list[i].qty = 0; 
                                }
                            }
                            
                            infiniteScroll.complete();
                        },1000);
                    }
                });
            }
            
            MobileNumber1(event: any) 
            {
                console.log('Decimal Restrit');
                
                const charCode = (event.which) ? event.which : event.keyCode;
                console.log(charCode);
                
                if (charCode > 31 && (charCode < 48 || charCode > 57)) {
                    return false;
                }
                return true;
            }
            
            quantity(indx:any,value:any)
            {
                if(value == 'add')
                {
                    var tmp_qty = 0;
                    tmp_qty = parseInt(this.product_list[indx]['qty'])+1;
                    this.product_list[indx]['qty']=tmp_qty;
                }
                else
                {
                    if(this.product_list[indx]['qty'] > 0)
                    {
                        this.product_list[indx]['qty']=parseInt(this.product_list[indx]['qty'])-1;
                    }
                    else
                    {
                        this.product_list[indx]['qty']=0;
                    }
                }
            }
            
            
            addToCart(value:any = {},i)
            {
                
                console.log(value);
                
                
                value.discount_amount = 0;
                value.subTotal = 0;
                value.discountedAmount = 0;
                
                value.subTotal = (value.price)*(value.qty);
                value.discount_amount = value.subTotal *(2/100)
                console.log(value.discount_amount);
                
                // if(value.discount)
                // {
                //     value.discount_amount = (value.price * value.discount)/100;
                // }
                
                value.discountedAmount = parseFloat(value.subTotal) - parseFloat(value.discount_amount)
                
                // value.subtotal_discount = value.discount_amount * value.qty;
                
                // value.subtotal_discounted = value.discountedAmount * value.qty;
                // value.subtotal_discounted  = parseFloat(value.subtotal_discounted.toFixed(2))

                value.gst_amount = (value.discountedAmount * (parseFloat(value.gst_percent)/100)); 
    
                value.gst_amount = parseFloat(value.gst_amount.toFixed(2));
                console.log(value.gst_amount);
                
                value.amount = parseFloat(value.discountedAmount) + parseFloat(value.gst_amount);
                
                value.amount = parseFloat(value.amount.toFixed(2));
                console.log(value.amount);
                
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
                            element.subTotal=parseFloat(value.subTotal);
                            
                            element.subtotal_discount=parseFloat(value.subtotal_discount);

                            element.subtotal_discounted=  parseFloat(value.discountedAmount);

                            element.gst_amount= parseFloat(value.gst_amount);

                            console.log(value.gross_total);

                            element.amount=  parseFloat(value.amount);

                            console.log(element);
                            console.log(value);

                            element.qty= parseFloat(value.qty);
                            
                            flag = false;
                        }
                    });
                    
                    if(flag)
                    {
                        this.cart_array.push(value);
                    }

                } 
                
                console.log(this.cart_array);              
                
            }
            
            toGoOrderPage()
            {
                //  console.log(this.cart_array);
                //  console.log(this.data);
                // console.log(this.userType);
                // this.data.from_product = true;
                 if(this.userType == 'Employee')
                 {
                    //  this.navCtrl.push(AddOrderPage,{"cart_array":this.cart_array,'from_product':true,'data':this.data});
                   this.navCtrl.pop();
                 }
                 else
                 {
                     this.navCtrl.push(DealerAddorderPage,{"cart_array":this.cart_array,'from_product':true,'order_data':this.data});
                 }
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
           
            
            
           
            add_to_fav(id)
            {
                console.log(id);
                
                      var prod = {id:id}
                   
                    var data = {"id":this.userId,userType:this.userType}
                    
        
                    this.service1.addData({"user_data":data,"product":prod},"dealerData/add_favorite").then(resp=>
                    {
                        console.log(resp);
                        this.service1.dismiss();
                        this.service1.presentToast('Product Added to Favourites');
                        this.getProductList();
                    },err=>
                    {
                        this.service1.errToasr()
                        this.getProductList();
                        this.service1.dismiss()
        
                    })
            }

            remove_from_fav(id)
    {
            var prod = {id:id}
           
            var data = {"id":this.userId,userType:this.userType}
            
            this.service1.addData({"user_data":data,"product":prod},"dealerData/remove_from_fav").then(resp=>
            {
                console.log(resp);
                this.service1.dismiss();
                this.service1.presentToast('Product Removed From Favourites');
                this.getProductList();
            },err=>
            {
                this.service1.errToasr()
               this.getProductList();
                this.service1.dismiss()
            })
        
    }



    viewProfiePic(image)
    {
        console.log("hello");
        
      this.modalCtrl.create(ViewProfilePage, {"Image": image}).present();
      console.log(image);
      
    }
    
            
            
}
        