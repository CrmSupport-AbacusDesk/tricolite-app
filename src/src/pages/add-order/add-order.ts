import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, LoadingController, AlertController, Navbar, ModalController, Platform, Nav, App, Events } from 'ionic-angular';
import { IonicSelectableComponent } from 'ionic-selectable';
import { MyserviceProvider } from '../../providers/myservice/myservice';
import { OrderListPage } from '../order-list/order-list';
import { ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { CartDetailPage } from '../cart-detail/cart-detail';
import { ViewChild } from '@angular/core';
import { SelectSearchableComponent } from 'ionic-select-searchable';
import { ProductsPage } from '../products/products';

@IonicPage()

@Component({
    selector: 'page-add-order',
    templateUrl: 'add-order.html',
})
export class AddOrderPage {
    @ViewChild(Navbar) navBar: Navbar;
    
    @ViewChild('category') categorySelectable: IonicSelectableComponent;
    @ViewChild('subCategory') subcatSelectable: IonicSelectableComponent;
    @ViewChild('productCode') prod_codeSelectable: IonicSelectableComponent;
    @ViewChild('selectComponent') selectComponent: IonicSelectableComponent;
    @ViewChild('distributorSelectable') distributorSelectable: IonicSelectableComponent;
    
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
    cart_array:any=[]
    adddMoreItem:any=false
    order_item:any=[];
    checkinData:any={};
    userType:any;
    order_discount:any=0;
    
    color_list:any=[];
    brand_list:any=[];
    product:any={};
    show_price:any = false;
    SpecialDiscountLable:any=''
    leave:any=0;
    temp_product_array:any=[];
    distributor_list:any=[];
    grand_amt:any={};
    sub_total:any=0;
    dis_amt:any=0;
    gst_amount:any=0;
    net_total:any=0;
    spcl_dis_amt:any=0
    grand_total:any=0;
    order_gst:any=0;
    order_igst:any=0;
    order_cgst:any=0;
    order_sgst:any=0;
    distributor_network_list:any = [];
    from_product =false
   
    
    constructor(
        public navCtrl: NavController,
        public events:Events,
        public loadingCtrl: LoadingController,
        public navParams: NavParams,
        public viewCtrl: ViewController
        ,public service:MyserviceProvider,
        public toastCtrl: ToastController,
        private alertCtrl: AlertController, 
        public storage: Storage, 
        public modal: ModalController, 
        public platform: Platform, 
        public appCtrl: App)
        {
            if(this.navParams.get('for_order'))
            {
                this.checkinData = this.navParams.get('for_order')
                console.log(this.navParams.get('for_order'));
                this.data.networkType = this.checkinData.dr_type
                this.get_network_listFromCheckin(this.data.networkType);
                this.get_distributor();
            }
            
            this.order_data = this.navParams.get("order_data");
            this.order_item = this.navParams.get("order_item");
            console.log(this.order_data);
            console.log(this.order_item);
            
            
            console.log(this.order_data);
            
            if(this.order_item && this.order_item.length > 0)
            {
                if(this.order_data && this.order_data.delivery_from!='')
                this.distributorSelected=true
                
                this.order_item.map((item)=>
                {
                    item.subtotal_discounted = item.amount
                    item.discountedAmount = item.discounted_amount
                    item.subtotal_discount = parseFloat(item.sub_total)-parseFloat(item.subtotal_discounted)
                    item.subTotal = item.sub_total
                    this.product = item
                    this.type = this.order_data.DiscType
                    this.special_discount = this.order_data.special_discount_percentage
                    this.cal_grand_total();
                    
                })
                this.cart_array = this.order_item;
                
                if(this.user_data.type == "3")
                {
                    this.data.distributor_id = {dr_id:this.order_data.distributor_id,company_name:this.order_data.distributor_name}
                }
                this.data.networkType=this.order_data.type
                this.get_network_listMoreItem(this.data.networkType)
                
            }
            else
            {
                
            }
            console.log(this.navParams);
            
            
            if(this.navParams.get("data"))
            {
                this.data = this.navParams.get("data");
                if(this.data.from_product == true)
                {
                    this.cart_array = this.navParams.get("cart_array");
                    console.log(this.data); 
                    console.log(this.cart_array);
                    
                    if(this.data.order_data)
                    {
                        this.order_data = this.data.order_data;
                    }           
                    
                    this.cart_array.map((item)=>
                    {
                        this.product = item
                        this.cal_grand_total();
                        console.log(item);
                        
                       
                    })
                    
                }
                
            }
            
            if(this.order_data && this.order_data.order_id)
            {
                
                this.user_data = this.order_data;
            }
            console.log(this.order_data);       
            console.log(this.user_data);
            
            if(this.user_data.type == "3")
            {
                this.get_distributormoreItem();
            }
            
            // this.getCategory();  
            console.log(this.events);
            this.events.subscribe(('AddOrderBackAction'),(data)=>
            {
                console.log(this.events);
                this.backAction()
                
            })    
            
        }
        
        ionViewDidLoad()
        {
            console.log(this.data.type_name);
            
            console.log(this.navParams.get("cart_array"));
            
            
            
            this.storage.get('user_type').then((userType) => {
                console.log(userType);
                if(userType=='OFFICE')
                {
                    this.data.networkType=3;
                    this.get_network_list(this.data.networkType)
                    this.userType  = userType
                    //   this.get_network_list(1)
                }
            });
        }
        
        ionViewDidEnter()
        {
            console.log(this.navParams);
            
            // if(this.navParams.get("data"))
            // {
            //     this.data = this.navParams.get("data");
            //     if(this.data.from_product == true)
            //     {
            //         this.cart_array = this.navParams.get("cart_array");
            //         console.log(this.data); 
            //         if(this.data.order_data)
            //         {
            //             this.order_data = this.data.order_data;
            //         }           
            this.sub_total=0;
            this.dis_amt=0;
            this.gst_amount=0;
            this.net_total=0;
            this.spcl_dis_amt=0
            this.grand_total=0;
            this.order_gst=0;
            this.order_igst=0;
            this.order_cgst=0;
            this.order_sgst=0;
            this.order_discount=0;
            this.cart_array.map((item)=>
            {
                this.product = item
                this.cal_grand_total();
                this.order_discount += item.discountedAmount;
                console.log(this.order_discount);
            })
            //     }    
            // }
            
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
                            this.navCtrl.pop();
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
        
        MobileNumber(event: any) 
        {
            const pattern = /[0-9]/;
            let inputChar = String.fromCharCode(event.charCode);
            if (event.keyCode != 8 && !pattern.test(inputChar)) {
                event.preventDefault();
            }
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
        
        get_product_data(val)
        {
            console.log(this.data.type_name.id);
            
            this.service.show_loading();
            
            this.form.cat_no = val.cat_no;
            this.form.product_name = val.product_name;
            this.form.product_id = val.id;
            this.form.user_state = this.user_data.state;
            this.form.user_district = this.user_data.district;
            this.form.user_id = this.data.type_name.id
            this.form.user_type = this.user_data.type
            
            
            this.service.addData({"form":this.form},"dealerData/get_product_dataExecutive").then((result)=>{
                console.log(result);
                this.service.dismiss();
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
        
        get_network_list(network_type)
        {
            this.data.type_name = {};
            this.service.show_loading()
            this.service.addData({'type':network_type},'DealerData/get_type_list').then((result)=>{
                console.log(result); 
                this.distributor_network_list = result;
                console.log(this.distributor_network_list);
                
                this.service.dismiss();
                // this.open();
            });
        }
        
        get_network_listFromCheckin(network_type)
        {
            this.data.type_name = {};
            this.service.addData({'type':network_type},'DealerData/get_type_list').then((result)=>{
                console.log(result);
                this.distributor_network_list = result;
                var Index =  this.distributor_network_list.findIndex(row=>row.id==this.checkinData.dr_id)
                console.log(this.distributor_network_list[Index]);
                this.data.type_name = this.distributor_network_list[Index]
                
                // this.open();
            });
        }
        
        get_network_listMoreItem(network_type)
        {
            this.data.type_name = {};
            // this.service.show_loading()
            this.service.addData({'type':network_type},'DealerData/get_type_list').then((result)=>{
                this.adddMoreItem = true
                console.log(result);
                this.distributor_network_list = result;
                console.log(this.order_data);
                
                var index = this.distributor_network_list.findIndex(row => row.id == this.order_data.id )
                console.log(index);
                
                this.data.type_name = this.distributor_network_list[index]
                console.log(this.data.type_name);
                
                // this.get_dr_marka();        
                
            });
        }
        
        cal_grand_total()
        {
            console.log(this.sub_total,this.dis_amt,this.net_total,this.order_gst,this.spcl_dis_amt,this.grand_total);
            
            // this.sub_total = parseFloat(this.sub_total) + parseFloat(this.product.subTotal);
            // this.dis_amt = parseFloat(this.dis_amt) + (parseFloat(this.product.subtotal_discount));
            // this.net_total = parseFloat(this.net_total) + parseFloat(this.product.subtotal_discounted);
            // this.order_gst = parseFloat(this.order_gst) + parseFloat(this.product.gst_amount);
            
            
            // this.grand_total = parseFloat(this.grand_total)+ parseFloat(this.product.amount) ;
            // this.spcl_dis_amt = (this.net_total * this.special_discount)/100;
            
            
            // if(this.type=='Discount')
            // {
            //     this.grand_total = Math.round(this.net_total - this.spcl_dis_amt);
            // }else
            // {
            //     this.grand_total = Math.round(this.net_total + this.spcl_dis_amt);
            // }
            
            // console.log('sub_total '+this.sub_total,'dis_amt '+this.dis_amt,'gst_amount '+this.gst_amount,'grand_total '+this.grand_total,'net_total '+this.net_total,'spcl_dis_amt '+this.spcl_dis_amt);
            
            this.sub_total = parseFloat(this.sub_total) + parseFloat(this.product.subTotal);
            this.dis_amt = parseFloat(this.dis_amt) + (parseFloat(this.product.subtotal_discount));
            this.net_total = parseFloat(this.net_total) + parseFloat(this.product.amount);
            this.order_gst = parseFloat(this.order_gst) + parseFloat(this.product.gst_amount);
            // console.log(this.special_discount);
            
            this.spcl_dis_amt = (this.net_total * this.special_discount)/100;
            console.log(this.user_data);
            this.grand_total = this.grand_total = Math.round(this.net_total - this.spcl_dis_amt);
            
            let temp_data =this.order_data?this.order_data:this.data.type_name
            console.log(temp_data);
            
            if(temp_data.state==temp_data.site_state)
            {

                this.order_cgst= parseFloat(this.order_gst ) / 2;
                this.order_sgst= parseFloat(this.order_gst ) / 2;
                console.log(this.order_sgst);

            }
            if(temp_data.state!=temp_data.site_state)
            {
            this.order_igst=this.order_gst
            console.log(this.order_igst);
            
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
console.log(this.order_discount);
console.log(this.cart_array[index].discountedAmount);


        this.sub_total = parseFloat(this.sub_total) -  parseFloat(this.cart_array[index].subTotal) ;
        
        this.order_discount = parseInt(this.order_discount) -  parseInt(this.cart_array[index].discountedAmount) ;
        console.log(this.order_discount);
        
        this.net_total = parseFloat(this.net_total) -  parseFloat(this.cart_array[index].amount) ;
        
        this.order_gst = parseFloat(this.order_gst) - parseFloat(this.cart_array[index].gst_amount);
        
        this.spcl_dis_amt = (this.net_total * this.special_discount)/100;

        this.grand_total = Math.round(this.net_total - this.spcl_dis_amt);
        
        this.cart_array.splice(index,1);

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
        
        openCategory()
        {
            console.log(this.data.networkType);
            console.log(this.data);
            
            if(this.data.networkType!=3)
            {
                // this.categorySelectable.open();
                // this.subcatSelectable.open();
            }
            else
            {
                this.get_distributor();
            }
            this.user_data.private_marka = this.data.type_name.private_marka  ;
            this.user_data.transport_address = this.data.type_name.transport_address  ;
            this.user_data.transport_name = this.data.type_name.transport_name  ;
            this.user_data.transport_mobile = this.data.type_name.transport_mobile  ;
        }
        
        get_distributormoreItem()
        {
            // this.service.show_loading();
            this.service.addData({'type':1},'DealerData/get_type_list').then((result)=>{
                console.log(result);
                this.distributor_list = result;
                
                
                var index = this.distributor_list.findIndex(row => row.id == this.order_data.distributor_id )
                console.log(index);
                
                console.log(this.distributor_list[index]);
                this.data.distributor_id = this.distributor_list[index]
                // this.service.dismiss();
                // this.distributorSelectable.open();
                
            });
        }
        
        get_distributor()
        {
            this.service.show_loading();
            this.service.addData({'type':1},'DealerData/get_type_list').then((result)=>{
                console.log(result);
                this.distributor_list = result;
                
                this.service.dismiss();
                if(this.distributor_list.length==1)
                {
                    this.data.distributor_id = this.distributor_list[0]
                }
                else
                {
                    // this.distributorSelectable.open();
                }
                
            });
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
            alert.present()        

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
    
    save_order(type)
    {
        this.leave=1
        this.user_data.type = this.data.networkType;
        
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

        console.log(this.cart_array);

        let error_index = this.cart_array.findIndex(row=> row.qty == 0 || row.qty== null );

        if(error_index != -1)
        {
            console.log(this.cart_array);
            
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
        else
        {

            this.user_data.special_discount = this.special_discount;
            this.user_data.special_discount_amount = this.spcl_dis_amt;
            this.user_data.Disctype = this.type;
            this.user_data.SpecialDiscountLable = this.SpecialDiscountLable
            this.user_data.dr_id = this.data.type_name.id
            if(this.data.distributor_id && this.data.distributor_id.id)
            this.user_data.distributor_id = this.data.distributor_id.id
            
            var orderData = {sub_total:this.sub_total,'dis_amt':this.order_discount,'grand_total':this.grand_total,
            'net_total':this.net_total,'special_discount':this.special_discount,'special_discount_amount':this.spcl_dis_amt,'order_gst':this.order_gst,
             'order_igst': this.order_igst, 'order_cgst': this.order_cgst, 'order_sgst': this.order_sgst
            }
            
            console.log(this.cart_array);
            
            this.service.addData({"cart_data":this.cart_array,"user_data":this.user_data,'orderData':orderData},"dealerData/save_orderExecutive").then(resp=>{
                console.log(resp);
                if(resp['msg'] == "success")
                {
                    var toastString=''
                    if(type=='save')
    
    
                    {
                        toastString='Order Saved To Draft Successfully !'
                    }
                    else
                    {
                        toastString='Order Placed Successfully !'
                    }
                    if(this.user_data.distributor_id)
                    {
                        console.log('Secondary');
                        
                        this.navCtrl.push(OrderListPage,{'type':'Secondary'})
                    }
                    else
                    {
                        console.log('Primary');
                        
                        this.navCtrl.push(OrderListPage,{'type':'Primary'})
                    }
                    this.service.presentToast(toastString)
                }
            })
        }
    }
    
    goToProductPage()
    {
        console.log(this.order_data);
        if(this.order_data)
        this.data.order_data = this.order_data
        
        this.navCtrl.push(ProductsPage,{"order":true,"order_data":this.data,"cart_array":this.cart_array});
        
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
    
    
    
}
