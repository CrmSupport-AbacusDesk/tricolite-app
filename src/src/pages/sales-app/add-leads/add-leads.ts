import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController, AlertController } from 'ionic-angular';
import { EnquiryserviceProvider } from '../../../providers/enquiryservice/enquiryservice';
import { MyserviceProvider } from '../../../providers/myservice/myservice';
import { IonicSelectableComponent } from 'ionic-selectable';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { DistributorListPage } from '../distributor-list/distributor-list';
import { ConstantProvider } from '../../../providers/constant/constant';
import { DealerDealerListPage } from '../../dealer-dealer-list/dealer-dealer-list';
import { DealerExecutiveListPage } from '../../dealer-executive-list/dealer-executive-list';
import { DistributorDetailPage } from '../distributor-detail/distributor-detail';



/**
* Generated class for the AddLeadsPage page.
*
* See https://ionicframework.com/docs/components/#navigation for more info on
* Ionic pages and navigation.
*/

@IonicPage()
@Component({
  selector: 'page-add-leads',
  templateUrl: 'add-leads.html',
})
export class AddLeadsPage {
  
  form:any={};
  user_data:any={};
  
  constructor(public navCtrl: NavController, public navParams: NavParams,private alertCtrl: AlertController,public db:MyserviceProvider,public constant:ConstantProvider,  public loadingCtrl: LoadingController) {
    
    
  }
  
  ionViewDidLoad() {
    this.get_states();
  }
  
  state_list:any=[];
  get_states()
  {
    this.db.addData({},"dealerData/getStates")
    .then(resp=>{
      console.log(resp);
      this.state_list = resp['state_list'];
    },
    err=>{
      this.db.errToasr()
    })
  }
  
  
  district_list:any=[];
  get_district()
  {
    this.db.addData({"state_name":this.form.state},"dealerData/getDistrict")
    .then(resp=>{
      console.log(resp);
      this.district_list = resp['district_list'];
    },
    err=>{
      this.db.errToasr()
    })
  }
  
  submit()
  {
    console.log(this.form);
    if(this.checkExist==true)
    {
      this.db.presentToast('Mobile No. Already Exists !!');
      return
    }
    if(this.form.mobile.length!=10)
    {
      return
    }
    this.db.show_loading()
    this.db.addData({"data":this.form,"loginData":this.user_data},"Distributor/save_lead")
    .then(resp=>{
      console.log(resp);
      this.db.dismiss()
      
      if(resp['msg'] == 'success')
      {
        this.db.presentToast("Success!");
        this.navCtrl.pop();
      }
    },
    err=>{
      this.db.errToasr()
      this.db.dismiss()
    });
  }
  
  MobileNumber(event: any) 
  {
    const pattern = /[0-9\+\-\ ]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) 
    {event.preventDefault(); }
  }
  check_num()
  {
    this.checkExist=false
    console.log(this.form.mobile.length);
    
    if(this.form.mobile && this.form.mobile.length == 10)
    {
      console.log(this.form.mobile.length);
      
      console.log(this.form.mobile);
      this.check_mobile_existence(this.form.mobile)
    }
  }
  checkDealerExist()
  {
    console.log(this.form.mobile.length);
    
    if(this.form.mobile.length == 10)
    {
      console.log(this.form.mobile.length);
      
      console.log(this.form.mobile);
      // this.check_mobile_existence2(this.form.mobile)
    }
  }
  checkExist=false
  check_mobile_existence(mobile)
  {   
    // this.form={}
    this.form.mobile=mobile
    
    var loading = this.loadingCtrl.create({
      spinner: 'hide',
      content: `<img src="./assets/imgs/gif.svg"/>`,
      dismissOnPageChange: true
    });
    loading.present();
    this.db.addData({'mobile':mobile},'Enquiry/check_mobile_existenceLead').then((result)=>{
      
      loading.dismiss()
      
      if(result['executive']!=0)
      {
        let alert=this.alertCtrl.create({
          title:'Exists !!',
          subTitle: 'Mobile No Is Already Registered With An Executive !!',
          cssClass:'action-close',
          
          buttons: [
            {
              text:'Okay',
              cssClass: 'close-action-sheet',
              handler:()=>
              {
              }
            }]
          });
          alert.present();
          this.form.mobile='';
          return;
        }
        if(result['check_mobile']==1)
        {
          this.checkExist=true
          
          this.db.presentToast('Dealer With Same Mobile No. Already Exists')
          
        }
        else
        {
          this.form.DealerExist=false;
          
          this.checkExist=false
        }
        
      },err=>
      {
        loading.dismiss()
        
      })
      
      
      
    }
    
    selectAddressOnBehalfOfPincode()
    {
      if(this.form.pincode.length==6)
      {
        var loading = this.loadingCtrl.create({
          spinner: 'hide',
          content: `<img src="./assets/imgs/gif.svg"/>`,
          dismissOnPageChange: true
        });
        loading.present();
        this.db.addData({'pincode':this.form.pincode},'Enquiry/selectAddressOnBehalfOfPincode').then((result)=>{
          loading.dismiss()
          
          console.log(result);
          this.form.state = result['state_name']
          this.get_district()
          this.form.district = result['district_name']
          this.form.city = result['city']
          this.form.area = result['area']
          
        },err=>
        {
          loading.dismiss()
          
          // this.db.presentToast('Failed To Get ')
        })
      }
    }
    dealer_details:any = [];
    dealer_checkin:any = [];
    dealer_order:any = [];
    
    edit_dis:boolean = false;
    dealer_detail(dr_id)
    {
      if(this.constant.UserLoggedInData.all_data.type==1)
      {
        
        let loading = this.loadingCtrl.create({
          spinner: 'hide',
          content: `<img src="./assets/imgs/gif.svg" class="h55" />`,
        }); 
        this.db.addData({'dr_id':dr_id},'Distributor/dealer_detail')
        .then((result)=>{
          console.log(result);
          this.dealer_details = result['result'];
          this.dealer_checkin = result['total_checkin'];
          this.dealer_order = result['total_order'];
          loading.dismiss();
          console.log(this.user_data.type);
          
          if(this.user_data.type == '1')
          {
            this.edit_dis = true;
          }
          this.navCtrl.push(DistributorDetailPage,{'dr_id':dr_id,'edit_discount':this.edit_dis,'dealer_data':this.dealer_details, 'dealer_checkin': this.dealer_checkin,'dealer_order':this.dealer_order});
        });
        loading.present();
      }
    }
  }
  