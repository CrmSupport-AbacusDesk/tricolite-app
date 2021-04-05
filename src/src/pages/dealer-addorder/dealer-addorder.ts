import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, LoadingController, AlertController, Navbar, ModalController, Platform, Nav, App, Select, SelectPopover, Events } from 'ionic-angular';
import { IonicSelectableComponent, IonicSelectableSearchFailTemplateDirective } from 'ionic-selectable';
import { MyserviceProvider } from '../../providers/myservice/myservice';
import { OrderListPage } from '../order-list/order-list';
import { ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { CartDetailPage } from '../cart-detail/cart-detail';
import { ViewChild } from '@angular/core';
import { SelectSearchableComponent, SelectSearchableModule } from 'ionic-select-searchable';
import { ConstantProvider } from '../../providers/constant/constant';
import { DealerOrderPage } from '../dealer-order/dealer-order';
import { ProductsPage } from '../products/products';
import { DealerHomePage } from '../dealer-home/dealer-home';

@IonicPage()
@Component({
    selector: 'page-dealer-addorder',
    templateUrl: 'dealer-addorder.html',
})
export class DealerAddorderPage {
    
    @ViewChild(Navbar) navBar: Navbar;
    @ViewChild(Nav) nav: Nav;
    @ViewChild('category') categorySelectable: IonicSelectableComponent;
    @ViewChild('subCategory') subcatSelectable: IonicSelectableComponent;
    @ViewChild('productCode') prod_codeSelectable: IonicSelectableComponent;
    distributorSelected:any=false
    categoryList:any=[];
    data:any={};
    form:any={};
    catCode_List:any=[];
    user_state:any='';
    autocompleteItems:any=[];
    user_data:any={};
    disable_marka:boolean = false;
    disable_transport:boolean = false;
    order_data:any={};
    special_discount:any=0;
    type:any='';
    grand_amt:any={};
    sub_total:any=0;
    order_discount:any=0;
    dis_amt:any=0;
    gst_amount:any=0;
    net_total:any=0;
    spcl_dis_amt:any=0
    grand_total:any=0;
    order_gst:any=0;
    
    order_item:any=[];
    discount_amount: number;
    constructor(
                public navCtrl: NavController,
                public events:Events,
                public loadingCtrl: LoadingController,
                public navParams: NavParams,
                public service:MyserviceProvider,
                public toastCtrl: ToastController,
                private alertCtrl: AlertController, 
                public storage: Storage, 
                public modal: ModalController, 
                public platform: Platform, 
                public appCtrl: App,
                public constant:ConstantProvider)
    {
        this.order_data = this.navParams.get("order_data");
        this.order_item = this.navParams.get("order_item");
        console.log(this.order_data);
        console.log(this.order_item);
        
        
        this.user_state = this.constant.UserLoggedInData.state;
        if(this.order_data && this.order_data.order_id)
        {
            this.user_data = this.order_data;
            console.log(this.user_data);
            this.order_discount =this.user_data.order_discount;
            console.log(this.order_discount);
            
        }
        else
        {
            // this.get_special_discount();
            this.user_data = this.constant.UserLoggedInData.all_data;
        }

        
        if(this.order_item && this.order_item.length > 0)
        {
            if(this.order_data && this.order_data.delivery_from!='')
            this.distributorSelected=true

            this.order_item.map((item)=>
            {
                item.subtotal_discounted = item.amount
                console.log(item.order_discount);
                
                item.subtotal_discount = parseFloat(item.sub_total)-parseFloat(item.subtotal_discounted)
                item.subTotal = item.sub_total
                console.log(item.sub_total);
                item.discountedAmount =item.discounted_amount
                item.order_discount =item.order_discount

                this.product = item
                this.type = this.order_data.DiscType
                this.special_discount = this.order_data.special_discount_percentage
                this.cal_grand_total();
                
            })
            this.cart_array = this.order_item;
            console.log(this.user_data.type);
            
            if(this.user_data.type == "3")
            {
                // this.get_distributor();
                this.data.distributor_id = {dr_id:this.order_data.distributor_id,company_name:this.order_data.distributor_name}
                console.log(this.data.distributor_id);
                
            }
            // this.cal_grand_total();
        }
        else
        {
            // this.get_special_discount();
        }
        
     
        this.get_dr_marka();        
        console.log(this.user_data);
        if(this.user_data.type == "3")
        {
            this.get_distributor();
            // this.data.distributor_id = {dr_id:this.order_data.distributor_id,company_name:this.order_data.distributor_name}
        }
        
        // this.getCategory();   
        
        console.log(this.navParams);
        
        if(this.navParams.get("from_product") == true)
        {
            this.cart_array = this.navParams.get("cart_array");
            console.log(this.cart_array);
            
            // this.data = this.navParams.get("data");
            console.log(this.cart_array.discountedAmount);
        console.log(this.order_discount);
            if(this.order_data && this.order_data.order_id && this.user_data.type == "3")
            {
                 this.distributorSelected=true

                this.data.distributor_id = {dr_id:this.order_data.distributor_id,company_name:this.order_data.distributor_name}  
            }

            this.cart_array.map((item)=>
            {
                this.product = item
                this.cal_grand_total();
                
            })
        }
        this.events.subscribe(('AddOrderBackAction'),(data)=>
        {
            this.backAction()
            
        })
    }

    ionViewDidEnter()
    {
        this.order_discount=0;
        this.sub_total=0;
        this.dis_amt=0;
        this.gst_amount=0;
        this.net_total=0;
        this.spcl_dis_amt=0
        this.grand_total=0;
        this.order_gst=0;

        this.cart_array.map((item)=>
        {
            this.product = item
            console.log(item);
            console.log(item.discountedAmount);
            this.order_discount += item.discountedAmount;
            console.log(this.order_discount);
            
            this.cal_grand_total();
        })

        console.log('back button test called');
        this.navBar.backButtonClick = () => {
            console.log('back button test');
            
            this.backAction()
            
        };      
        
        let nav = this.appCtrl.getActiveNav();
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
            // if((activeView == 'HomePage' || activeView == 'GiftListPage' || activeView == 'TransactionPage' || activeView == 'ProfilePage' ||activeView =='MainHomePage') && (previuosView != 'HomePage' && previuosView != 'GiftListPage'  && previuosView != 'TransactionPage' && previuosView != 'ProfilePage' && previuosView != 'MainHomePage')) 
            // {
            
            //     console.log(previuosView);
            //     this.navCtrl.popToRoot();
            // }
        }
    }
    
    backAction()
    {
        console.log(this.cart_array);
        console.log(this.order_item);
        
        if(this.cart_array.length )
        {
            let alert=this.alertCtrl.create({
                title:'Are You Sure?',
                subTitle: 'Your Order Data Will Be Discarded ',
                cssClass:'action-close',
                
                buttons: [{
                    text: 'Cancel',
                    role: 'cancel',
                    handler: () => {
                        this.service.presentToast('Your Data Is Safe')
                    }
                },
                {
                    text:'Confirm',
                    cssClass: 'close-action-sheet',
                    handler:()=>
                    {
                        console.log('AddOrderBackAction');
                        
                        // this.navCtrl.pop();
                        this.navCtrl.push(DealerHomePage)
                    }
                }]
            });
            alert.present();
            
        }
        else
        {
            this.navCtrl.pop();
            console.log('Array Blank');
            
        }
        
    }

    SpecialDiscountLable:any=''
    get_special_discount()
    {
        this.service.addData({},"dealerData/special_discount").then(resp=>
        {
            console.log(resp);
            if(resp['special_discount'] &&  resp['special_discount']['type'])
            this.type = resp['special_discount']['type'];
            console.log(this.type);
            
            if(this.user_data.type == '1')
            {
                if(resp['special_discount'] &&  resp['special_discount']['distributor_discount'])
                this.special_discount = resp['special_discount']['distributor_discount'];
            }
            
            if(this.user_data.type == '3')
            {
                if(resp['special_discount'] &&  resp['special_discount']['dealer_discount'])
                this.special_discount = resp['special_discount']['dealer_discount'];
            }
            
            if(resp['special_discount'] &&  resp['special_discount']['lable'])
            this.SpecialDiscountLable = resp['special_discount']['lable'];
            console.log(this.SpecialDiscountLable);
            
        })
    }
    
    get_dr_marka()
    {
        this.service.addData({"dr_id":this.user_data.id},"dealerData/getdetails").then(resp=>
        {
            console.log(resp);
            this.user_data.private_marka = resp['private_marka'];
            this.user_data.transport_detail = resp['transport_detail'];
            
            if(this.user_data.private_marka!='')
            {
                this.disable_marka = true;
            }
            
            if(this.user_data.transport_detail!='')
            {
                this.disable_transport = true;
            }
        })
    }
    
    distributor_list:any=[];
    get_distributor()
    {
        this.service.addData({"id":this.constant.UserLoggedInData.id},'dealerData/get_distributor').then((result)=>
        {
            console.log(result);
            this.distributor_list = result;
            console.log(this.distributor_list);
            if(this.distributor_list.length==1)
            {
                this.data.distributor_id = {dr_id:this.distributor_list[0].dr_id,company_name:this.distributor_list[0].company_name}
            }
        })
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
    
    subCatList:any = [];
    getSubCategory(cat)
    {
        console.log(cat)
        this.data.sub_category={};
        this.form.category = cat.category;
        this.product.category = cat.category;
        this.service.addData({category:cat.category},'Distributor/getSubCategory').then((result)=>
        {
            console.log(result)
            this.subCatList = result['data'];
            if(this.subCatList.length==1)
            {
                this.data.sub_category = this.subCatList[0]
                this.getProductCode(this.data.sub_category)
            }
            else
            {
                // this.subcatSelectable.open();
            }
        },err=>{
            
        })
    }
    
    getCategory()
    {
        this.service.show_loading()
        this.service.addData('','Distributor/getCategory').then((result)=>
        {
            console.log(result)
            this.categoryList = result['data'];
            if(!this.order_data || !this.order_data.order_id)
            {
                // this.categorySelectable.open();
            }
            this.service.dismiss();
        },err=>
        {
            this.service.dismiss();
            this.service.errToasr();
        });
    }

    temp_product_array:any=[];
    getProductCode(sub_category)
    {
        console.log(sub_category);
        this.form.sub_category = sub_category.sub_category;
        this.lodingPersent()
        this.service.addData({categoryId:sub_category.id},"product/product_code").then((result)=>
        {
            console.log(result);
            this.autocompleteItems=result;
            this.temp_product_array = this.autocompleteItems;
            
            console.log(this.autocompleteItems);
            setTimeout(() => {
                this.loading.dismiss()
                // this.prod_codeSelectable.open();
            }, 1000);
        },err=>
        {
            this.loading.dismiss()
        });
    }
    
    color_list:any=[];
    brand_list:any=[];
    product:any={};
    show_price:any = false;
    cart_array:any=[];
    userDetail: any=[];
    order_igst: any=0;
    order_cgst: any=0;
    order_sgst: any=0;



    
    get_product_data(val)
    {
        this.lodingPersent();
        
        this.form.cat_no = val.cat_no;
        this.form.product_name = val.product_name;
        this.form.product_id = val.id;
        this.form.user_state = this.user_data.state;
        this.form.user_district = this.user_data.district;
        this.form.user_id = this.user_data.id
        this.form.user_type = this.user_data.type
        
        this.service.addData({"form":this.form},"dealerData/get_product_data").then((result)=>
        {
            console.log(result);
            this.loading.dismiss();
            if(result['prod_price'])
            {
                this.show_price = true;
                this.product = result['prod_price'];
                this.product.sub_category = this.form.sub_category;
                this.product.cat_no=this.form.cat_no;
                this.product.product_name=this.form.product_name;
            }
            
            this.brand_list = result['brand_list'];
            if(this.brand_list && this.brand_list.length == 1)
            {
                this.product.brand = this.brand_list[0]['brand_name'];
            }
            
            this.color_list = result['color_list'];
            if(this.color_list && this.color_list.length == 1)
            {
                this.product.color = this.color_list[0]['color_name'];
            }
            console.log(this.product)
        })
    }
    
    calculate_amt()
    {
        console.log(typeof(this.product.qty));
        if(this.product.qty.includes('.'))
        {
            this.product.subtotal_discounted=''
            this.product.qty = ''
            this.service.presentToast('Fraction values not allowed !!');
            console.log(this.product.qty  + 'Int Quantity');
            return ;
        }
        
        console.log(this.product);
        this.product.discount_amount = 0;
        this.product.subTotal = 0;
        this.product.discountedAmount = 0;
        if(this.product.qty == null)
        {
            this.product.qty = 0;
        }
        
        this.product.subTotal = (this.product.price)*(this.product.qty);
        
       
            this.product.discount_amount = this.product.subTotal * (2/100);
        
        
        this.product.discountedAmount = parseFloat(this.product.subTotal) - parseFloat(this.product.discount_amount)
        
        this.product.subtotal_discount = this.product.discount_amount * this.product.qty;
        
        this.product.subtotal_discounted += parseFloat(this.product.discount_amount);
        this.product.subtotal_discounted  = this.product.subtotal_discounted.toFixed(2)
        console.log(this.product.subtotal_discounted);
        
        
    }

    calculateAmount(qty,index,del,data:any)
    {
        
        
       
        this.cart_array[index].subTotal = parseFloat(this.cart_array[index].price) * (this.cart_array[index].qty);
        this.cart_array[index].discount_amount = this.cart_array[index].subTotal * 2 / 100;
        this.cart_array[index].discountedAmount =this.cart_array[index].subTotal - this.cart_array[index].discount_amount;
        console.log(this.cart_array[index].discountedAmount);
        

       
        this.cart_array[index].gst_amount = this.cart_array[index].discountedAmount * parseInt(this.cart_array[index].gst_percent )/ 100;
        console.log(this.cart_array[index].gst_amount);
        
        this.cart_array[index].amount = parseFloat(this.cart_array[index].discountedAmount) + this.cart_array[index].gst_amount; 
        this.cart_array[index].subTotal = parseFloat(this.cart_array[index].subTotal);
        this.cart_array[index].gst_amount = parseFloat(this.cart_array[index].gst_amount);
        this.cart_array[index].amount = parseFloat(this.cart_array[index].amount);
        
        this.sub_total = 0;
        this.order_gst = 0;
        this.order_igst = 0;
        this.order_cgst = 0;
        this.order_sgst = 0;
    this.order_discount =0;
        this.grand_total = 0;
        for(var i=0; i<this.cart_array.length;i++)
        { 
            this.sub_total += parseFloat(this.cart_array[i]['subTotal']);
            console.log(this.cart_array[i]['gst_amount']);
            
            this.order_gst += parseFloat(this.cart_array[i]['gst_amount']);
            this.order_discount += parseFloat(this.cart_array[i]['discountedAmount']);
           console.log(this.order_discount);
           
            
            
            this.grand_total += parseFloat(this.cart_array[i]['amount']);
             
        }

          if(this.user_data.state==this.user_data.site_state)
          {

            this.order_cgst= parseFloat(this.order_gst ) / 2;
           this.order_sgst= parseFloat(this.order_gst ) / 2;
           console.log(this.order_sgst);
           

          }
          else
          {
            this.order_igst=this.order_gst
            console.log(this.order_igst);
          
          }

    
    }
    




    
    // cart_array:any=[]
    addToCart()
    {
        console.log(this.product);
        if(this.cart_array.length == 0)
        {
            this.cart_array.push(this.product);
        }
        else
        {
            var flag = true;
            this.cart_array.forEach(element => {
                
                if(this.product.category == element.category && this.product.sub_category == element.sub_category && this.product.cat_no == element.cat_no)
                {
                    // element.discount_amount= parseFloat(element.discount_amount) + parseFloat(this.product.discount_amount);
                    element.subTotal=parseFloat(element.subTotal) + parseFloat(this.product.subTotal);
                    // element.discountedAmount= parseFloat(element.discountedAmount) + parseFloat(this.product.discountedAmount);
                    element.subtotal_discount= parseFloat(element.subtotal_discount) + parseFloat(this.product.subtotal_discount);
                    element.subtotal_discount= parseFloat(element.subtotal_discount) + parseFloat(this.product.subtotal_discount);
                    element.subtotal_discounted= parseFloat(element.subtotal_discounted) + parseFloat(this.product.subtotal_discounted);

                    console.log(element);
                    console.log(this.product.qty);
                    element.qty= parseFloat(element.qty) + parseFloat(this.product.qty);
                    
                    flag = false;
                }
            });
            
            if(flag)
            {
                this.cart_array.push(this.product);
            }
        }
        this.data.cat_no = {};
        this.show_price = false;
        console.log(this.cart_array);
        
        this.cal_grand_total();
    }
    
    
    cal_grand_total()
    {
        console.log(this.type);
        
        // this.sub_total = parseFloat(this.sub_total) + parseFloat(this.product.subTotal);
        // this.dis_amt = parseFloat(this.dis_amt) + (parseFloat(this.product.subtotal_discount));
        // this.net_total = parseFloat(this.net_total) + parseFloat(this.product.subtotal_discounted);
        // this.order_gst = parseFloat(this.order_gst) + parseFloat(this.product.gst_amount);
        // // console.log(this.special_discount);
        
        // this.spcl_dis_amt = (this.net_total * this.special_discount)/100;

        // this.grand_total = parseFloat(this.grand_total)+ parseFloat(this.product.amount);
        // // console.log(this.spcl_dis_amt);
        
        // // if(this.type=='Discount')
        // // {
        // //     this.grand_total = Math.round(this.net_total - this.spcl_dis_amt);
        // // }else
        // // {
        // //     this.grand_total = Math.round(this.net_total + this.spcl_dis_amt);
        // // }

        this.sub_total = parseFloat(this.sub_total) + parseFloat(this.product.subTotal);
        this.dis_amt = parseFloat(this.dis_amt) + (parseFloat(this.product.subtotal_discount));
        this.net_total = parseFloat(this.net_total) + parseFloat(this.product.amount);
        this.order_gst = parseFloat(this.order_gst) + parseFloat(this.product.gst_amount);
        // console.log(this.special_discount);
        
        this.spcl_dis_amt = (this.net_total * this.special_discount)/100;

        this.grand_total = this.grand_total = Math.round(this.net_total - this.spcl_dis_amt);
        console.log(this.grand_total);
        console.log(this.user_data);
        
        // console.log(this.user_data.state,this.user_data.site_state);
        // console.log(this.user_data.statethis.user_data.site_state);
        console.log(this.order_discount);
        
        if(this.user_data.state==this.user_data.site_state)
        {

          this.order_cgst= parseFloat(this.order_gst ) / 2;
          this.order_sgst= parseFloat(this.order_gst ) / 2;
          console.log(this.order_sgst);
          this.grand_total =this.order_cgst+ this.order_sgst + parseFloat(this.order_discount);
          console.log(this.grand_total);
          

        }
        else
        {
          this.order_igst=this.order_gst
          console.log(this.order_igst);
          this.grand_total = this.order_igst + this.order_discount;
          console.log(this.grand_total);
        
        }

    }
    
    delete_item(index)
    {
        this.cart_array.splice(index,1);
    }

    leave:any=0
    save_order(type)
    {
        this.leave=1
        console.log(this.cart_array);
        console.log(this.form);
        console.log(this.user_data);
        if(this.user_data.type == "3" )
        {
            if(!this.data.distributor_id)
            {
                let toast = this.toastCtrl.create({
                    message: 'Please Select Distributor!',
                    duration: 3000
                });
                toast.present();
                return;
            }
            this.user_data.distributor_id = this.data.distributor_id.dr_id
        }
        this.user_data.special_discount = this.special_discount;
        this.user_data.special_discount_amount = this.spcl_dis_amt;
        this.user_data.Disctype = this.type;
        // this.user_data.order_status = type;
        this.user_data.SpecialDiscountLable = this.SpecialDiscountLable
        console.log(this.user_data);
        console.log(this.order_discount);
        
        var orderData = {sub_total:this.sub_total,'dis_amt':this.order_discount,'grand_total':this.grand_total,'net_total':this.net_total,'order_gst':this.order_gst,'order_igst':this.order_igst,
        'order_cgst':this.order_cgst,'order_sgst':this.order_sgst,
        'special_discount':this.special_discount,special_discount_amount:this.spcl_dis_amt}
        console.log(orderData);
        // dealerData/save_order
        
        this.service.addData({"cart_data":this.cart_array,"user_data":this.user_data,'orderData':orderData},"dealerData/save_order")
        .then(resp=>{
            console.log(resp);
            if(resp['msg'] == "success")
            {
                var toastString=''
                if(type=='save')
                {
                    this.constant.tabSelectedOrder = 'Draft';
                    toastString='Order Saved To Draft Successfully !'
                }
                else
                {
                    this.constant.tabSelectedOrder = 'Pending';
                    toastString='Order Placed Successfully !'
                    
                }
                let toast = this.toastCtrl.create({
                    message: toastString,
                    duration: 3000
                });
                toast.present();
                this.navCtrl.push(DealerOrderPage,{"type":"Primary"});
                // this.navCtrl.popTo(DealerOrderPage)
            }
        })
    }
    

    MobileNumber(event: any) {
        const pattern = /[0-9]/;
        let inputChar = String.fromCharCode(event.charCode);
        if (event.keyCode != 8 && !pattern.test(inputChar)) {
            event.preventDefault();
        }
    }
    MobileNumber1(event: any) {
        console.log('Decimal Restrit');
        
        const charCode = (event.which) ? event.which : event.keyCode;
        console.log(charCode);
        
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;

    }
    save_orderalert(type)
    {
        var str
        console.log(this.grand_total);
        
        if(this.grand_total > 20000000)
        {
            let alert=this.alertCtrl.create({
                title:'Max order value reached',
                subTitle: 'Maximum order value is 2 Cr. !',
                cssClass:'action-close',
                
                buttons: [{
                    text: 'Okay',
                    role: 'Okay',
                    handler: () => {
                        
                    }
                },
                ]
            });
            alert.present();
            return
        }
        if(type=='save')
        {
            str = 'You want to save this order as draft ?'
        }
        else
        {
            str = 'You want to submit order ?'
        }

        let count = 0
        for(let i=0;i<this.cart_array.length;i++)
        {
            if(this.cart_array[i].qty>0 )
            {
              count++
            }

        }

        if(count>0)
        {

            let alert=this.alertCtrl.create({
                title:'Are You Sure?',
                subTitle: str,
                cssClass:'action-close',
                
                buttons: [{
                    text: 'Cancel',
                    role: 'cancel',
                    handler: () => {
                        
                    }
                },
                {
                    text:'Confirm',
                    cssClass: 'close-action-sheet',
                    handler:()=>
                    {
                        this.save_order(type)
                    }
                }]
            });
            alert.present();
        }


        else
        {
            let alert=this.alertCtrl.create({
                title:'Alert!',
                subTitle: 'Please update some quantity. !',
                cssClass:'action-close',
                
                buttons: [{
                    text: 'Okay',
                    role: 'Okay',
                    handler: () => {
                        
                    }
                },
            ]
        });
        alert.present();
        return        
        }

    }
    deleteItemFromCartAlertMessage(index)
    {
        let alert=this.alertCtrl.create({
            title:'Are You Sure?',
            subTitle: 'You want to remove this item ??',
            cssClass:'action-close',
            
            buttons: [{
                text: 'Cancel',
                role: 'cancel',
                handler: () => {
                    this.service.presentToast('Action Cancelled')
                }
            },
            {
                text:'Confirm',
                cssClass: 'close-action-sheet',
                handler:()=>
                {
                    this.deleteItemFromCart(index)
                    this.order_discount
                }
            }]
        });
        alert.present();
    }

    deleteItemFromCart(index)
    {
        // this.sub_total = parseFloat(this.sub_total) -  parseFloat(this.cart_array[index].subTotal) ;

        // this.dis_amt = parseFloat(this.dis_amt) -  parseFloat(this.cart_array[index].subtotal_discount) ;

        // this.net_total = parseFloat(this.net_total) -  parseFloat(this.cart_array[index].subtotal_discounted) ;

        // this.spcl_dis_amt = (this.net_total * this.special_discount)/100;

        // if(this.type=='Discount')
        // {
        //     this.grand_total = Math.round(this.net_total - this.spcl_dis_amt);
        // }else
        // {
        //     this.grand_total = Math.round(this.net_total + this.spcl_dis_amt);
        // }
        this.order_discount = parseFloat(this.user_data.order_discount)
console.log(this.order_discount);
this.cart_array[index].discountedAmount = parseFloat(this.cart_array[index].discountedAmount)
console.log(this.cart_array[index].discountedAmount);

        this.sub_total = parseFloat(this.sub_total) -  parseFloat(this.cart_array[index].subTotal) ;
        
        this.order_discount = this.order_discount-  this.cart_array[index].discountedAmount ;
        console.log(this.order_discount);
        
        this.net_total = parseFloat(this.net_total) -  parseFloat(this.cart_array[index].amount) ;
        
        this.order_gst = parseFloat(this.order_gst) - parseFloat(this.cart_array[index].gst_amount);
        
        this.spcl_dis_amt = (this.net_total * this.special_discount)/100;

        this.grand_total = Math.round(this.net_total - this.spcl_dis_amt);
        
        this.cart_array.splice(index,1);
console.log(this.cart_array);

        this.service.presentToast('Item removed !!')

        if(this.user_data.state==this.user_data.site_state)
        {

          this.order_cgst= parseFloat(this.order_gst ) / 2;
          this.order_sgst= parseFloat(this.order_gst ) / 2;
          console.log(this.order_sgst);
         

        }
        else
        {
          this.order_igst=this.order_gst
          console.log(this.order_igst);
        
        }
       
       


    }


            
    goToProductPage()
    {
      this.navCtrl.push(ProductsPage,{"order":true,"order_data":this.user_data,"cart_array":this.cart_array});

    }            
}
