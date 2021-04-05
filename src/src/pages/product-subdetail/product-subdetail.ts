import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Loading, LoadingController, App } from 'ionic-angular';
import { DbserviceProvider } from '../../providers/dbservice/dbservice';
import { EnquiryPage } from '../enquiry/enquiry';
import { SocialSharing } from '@ionic-native/social-sharing';
import { OfflineDbProvider } from '../../providers/offline-db/offline-db';
import { SQLite } from '@ionic-native/sqlite';
import { MyserviceProvider } from '../../providers/myservice/myservice';
import { ConstantProvider } from '../../providers/constant/constant';

import { Storage } from '@ionic/storage';
import { share } from 'rxjs/operator/share';
@IonicPage()
@Component({
    selector: 'page-product-subdetail',
    templateUrl: 'product-subdetail.html',
})
export class ProductSubdetailPage {
    prod_id:any='';
    api:any;
    prod_detail:any={};
    loading:Loading;
    prod_image:any=[];
    active_image:any=''
    user_data:any={};
    userType:any
    constructor(public socialSharing:SocialSharing,
        public storage: Storage,
        public navCtrl: NavController, public navParams: NavParams, public service:DbserviceProvider, public loadingCtrl:LoadingController, private app:App, public offlineService: OfflineDbProvider, private sqlite: SQLite,public db:MyserviceProvider,public constant:ConstantProvider)
        {
            storage.get('loginType').then((loginType) => {
                console.log(loginType);
                if(loginType=='CMS')
                {
                    this.userType='notDrLogin'
                }
                else
                {
                    this.userType='drLogin'
                }
            });
            console.log(this.userType);
            
            if(this.userType=='CMS')
            {
                this.user_data = this.service.karigar_info;
            }
            else
            {
                this.user_data = this.constant.UserLoggedInData.all_data;
                // this.checkForExistInFavourite()
            }
            console.log(this.user_data);
            this.presentLoading();
            this.checkForExistInFavourite()
            
        }
        
        ionViewDidLoad() 
        {
            console.log('ionViewDidLoad ProductSubdetailPage');
            this.prod_id = this.navParams.get('id');
            // this.getProductDetail(this.prod_id);
            this.getProductDetailWithLiveServer(this.prod_id)
            
        }
        openLink(Link)
        {
            window.open(Link,'_system','location=yes');
            
        }
        
        getProductDetail(id)
        {
            this.offlineService.onGetProductDetailHandler(id)
            .subscribe((productData) =>
            {
                console.log(productData);
                this.loading.dismiss();
                this.prod_detail = productData;
                this.prod_image = productData['image'];
                
                for (let index = 0; index < this.prod_image.length; index++) {
                    
                    this.offlineService.onReturnImagePathHandler('productImage', this.prod_image[index].image, this.prod_image[index].id).subscribe((imageResultData) => {
                        
                        console.log(imageResultData);
                        
                        const productIndex = this.prod_image.findIndex(row => row.id == imageResultData.recordId);
                        
                        console.log(this.prod_image);
                        console.log('ProductIndex ' + productIndex);
                        
                        this.prod_image[productIndex].imageCompletePath = imageResultData['imagePath'];
                        
                        this.changeImage();
                    });
                }
                
                
                
                console.log(this.prod_detail.image_profile);
            });
        }
        
        
        
        getProductDetailWithLiveServer(id)
        {
            this.service.post_rqst({'product_id' :id},'Product/productDetail').subscribe( r =>
                {
                    console.log(r);
                    this.loading.dismiss();
                    this.prod_detail=r['product'];
                    this.prod_image=r['product']['image'];
                    this.changeImage();
                    this.api=this.service.url+"app/uploads/";
                    console.log(this.prod_detail.image_profile);
                    console.log( this.api);
                },(error: any) => {
                    this.loading.dismiss();
                });
            }
            
            imgData:any;
            
            shareproduct()   {
                
                
                if(this.prod_image && this.prod_image.length > 0) {
                    
                    if(this.prod_image.length > 1) {
                        
                        this.imgData='http://phpstack-83335-1428632.cloudwaysapps.com/dd_api/app/Http/Controllers/Admin/Master/appOfflineUploads/productImage/'+this.prod_image[1].image;
                        
                        
                    } else {
                        
                        this.imgData='http://phpstack-83335-1428632.cloudwaysapps.com/dd_api/app/Http/Controllers/Admin/Master/appOfflineUploads/productImage/'+this.prod_image[0].image;;
                        
                    }
                    
                } else {
                    
                    this.imgData = '';
                }
                
                console.log(this.imgData);
                console.log("Main Category:"+this.prod_detail.main_category+"\n"+"Category:"+this.prod_detail.category_name+"\n"+"Product Name:  "+this.prod_detail.product_name+ "\n"+"Price:"+this.prod_detail.price+ "\n"+"Description:"+this.prod_detail.desc+ "\n"+"Product PCS:"+this.prod_detail.pcs,null,this.imgData);
                
                
                var shareData 
                if(this.prod_detail.desc)
                {
                    
                    shareData = "Main Category : "+this.prod_detail.main_category+ "\n" + "Category : "+this.prod_detail.category_name+"\n"+"Product Name :  "+this.prod_detail.product_name+ "\n"+"Price : "+this.prod_detail.price+ "\n"+"Description : "+this.prod_detail.desc
                }
                else
                {
                    shareData = "Main Category : "+this.prod_detail.main_category+ "\n" + "Category : "+this.prod_detail.category_name+"\n"+"Product Name :  "+this.prod_detail.product_name+ "\n"+"Price : "+this.prod_detail.price
                    
                }
                
                this.socialSharing.share(shareData,null,this.imgData,null).then(() => {
                    
                    console.log("success");
                    
                }).catch((e) => {
                    console.log(e);
                });
            }
            
            goToEnquiryPage()
            {
                this.navCtrl.push(EnquiryPage,{'id':this.prod_detail.id})
            }
            
            presentLoading()
            {
                this.loading = this.loadingCtrl.create({
                    // content: "Please wait...",
                    dismissOnPageChange: true
                });
                this.loading.present();
            }
            
            
            changeImage()
            {
                if(this.prod_image.length){
                    this.active_image=  this.prod_image.filter( x=> x.profile == 1)[0].image;
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
            
            prod_data:any={};
            add_to_fav()
            {
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
                    var prod = {id:this.navParams.get('id')}
                    var data = {"id":userId,userType:this.userType}
                    this.db.show_loading();
                    this.db.addData({"user_data":data,"product":prod},"dealerData/add_favorite")
                    .then(resp=>{
                        console.log(resp);
                        this.db.dismiss();
                        this.db.presentToast('Product Added to Favourites')
                    },err=>
                    {
                        this.db.errToasr()
                        this.db.dismiss()
                    })
                }, 1000);
                ///////
                
            }
            remove_from_fav()
            {
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
                        }else
                        {
                            this.storage.get('userId').then((resp)=>
                            {
                                userId = resp
                            });
                        }
                    }
                    var prod = {id:this.navParams.get('id')}
                    var data = {"id":userId,userType:this.userType}
                    this.db.show_loading();
                    this.db.addData({"user_data":data,"product":prod},"dealerData/remove_from_fav")
                    .then(resp=>{
                        console.log(resp);
                        this.db.dismiss();
                        this.db.presentToast('Product Removed From Favourites')
                    },err=>
                    {
                        this.db.errToasr()
                        this.db.dismiss()
                    })
                }, 1000);
                ///////
                
            }
            existInFavourite:any='';
            checkForExistInFavourite()
            {
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
                        }
                        else
                        {
                            this.userType='drLogin'
                        }
                    }
                    console.log(this.userType);
                    
                });
                setTimeout(() => {
                    var userId = ''
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
                        else
                        {
                            this.storage.get('userId').then((resp)=>
                            {
                                userId = resp
                            });
                        }
                    }
                    console.log(this.navParams.get('id') )
                    console.log(this.userType);
                    console.log(this.user_data);
                    // this.service.karigar_info.id
                    setTimeout(() => {
                        this.db.addData({"product_id":this.navParams.get('id'),"userId":userId,userType:this.userType},"dealerData/checkForExistInFavourite")
                        .then(resp=>{
                            console.log(resp);
                            if(resp!=0)
                            {
                                this.existInFavourite=true;
                            }
                            else
                            {
                                this.existInFavourite=false
                            }
                        },err=>
                        {
                        })
                        
                    }, 500);
                }, 500);
            }
        }
        