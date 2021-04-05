import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { MyserviceProvider } from '../../providers/myservice/myservice';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SelectSearchableModule, SelectSearchableComponent } from 'ionic-select-searchable';
import { EnquiryserviceProvider } from '../../providers/enquiryservice/enquiryservice';
import { DashboardPage } from '../dashboard/dashboard';
import { ExecutivDetailPage } from '../executiv-detail/executiv-detail';
// import { DistributorDetailPage } from 'distributor-detail/distributor-detail';



@IonicPage()
@Component({
  selector: 'page-executive-edit',
  templateUrl: 'executive-edit.html',
})
export class ExecutiveEditPage {
  
  userId:any;
  data:any={};
  updatedData:any={};
  validateForm: FormGroup;
  type:any;
  user:any=[];
  brand:any=[];
  brandList:any=[];
  salesUserList:any=[];
  countryList:any=[];
  state_list:any=[];
  district_list:any = [];
  city_list:any=[];


  constructor(
               public navCtrl: NavController, 
               public navParams: NavParams,
               public service:MyserviceProvider,
               public loadingCtrl: LoadingController,
               public formBuilder: FormBuilder,
               public db:EnquiryserviceProvider,
               public toastCtrl: ToastController) 
  {
    if(this.navParams.get('userId'))
    {
      this.userId=this.navParams.get('userId');
      this.type=this.navParams.get('type');
      console.log(this.userId);
      this.userDetail();
      
    }
    
    this.validateForm = formBuilder.group({
      name: ['', Validators.compose([Validators.required])],
      email: [''],
      mobile: ['', Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(10)])],
      address: ['', Validators.compose([])],
      stateName: ['', Validators.compose([])],
      districtName: ['', Validators.compose([])],
      pincode: ['', Validators.compose([ Validators.minLength(6), Validators.maxLength(6)])],
      cityName: ['', Validators.compose([])],
      
    });
  }

  ionViewDidLoad() 
  {
    this.getState();
  }
  
  MobileNumber(event: any) 
  {
      const pattern = /[0-9\+\-\ ]/;
      let inputChar = String.fromCharCode(event.charCode);
      if (event.keyCode != 8 && !pattern.test(inputChar)) 
      {event.preventDefault(); }
  }
  

  userDetail()
  {
    
    this.data.user=[];
    this.data.brand=[];
    this.service.show_loading();
    
    this.service.addData({'userId':this.userId},'DealerData/executive_detail ').then((result)=>{
      console.log(result);
      this.service.dismiss()
      this.data=result['executive_data'];
      this.data.stateName={state_name:this.data.state_name};
      this.data.districtName={district_name:this.data.district_name};
      this.data.cityName={city:this.data.city};
      this.data.address = this.data.street
      this.data.mobile = this.data.contact_01
      if(this.data.state_name)
      {
        this.getDistrict(this.data.state_name);
      }
      if(this.data.district_name)
      {
        this.getCity(this.data.state_name,this.data.district_name);
      }
    } ,err=>
    {
      this.service.dismiss();

    });
  }
  
  portChange1(event: 
  {
    component: SelectSearchableComponent,
    value: any 
  }) {
    console.log('port:', event.value);
  }
  
   
  getState() 
  {
    this.db.getState().then((response:any)=>{
      console.log(response);
      this.state_list = response;
    }
    ,err=>
    {
      this.service.dismiss();
    }
    );
  }
  
  
  getDistrict(state) 
  {
    this.data.districtName={}
    this.db.getCity(state).then((response:any)=>{
      console.log(response);
      this.district_list = response;
    } ,err=>
    {
    });
  }
  
  getCity(state,district) 
  {
    this.db.getCity1({'state':state,'district':district}).then((response:any)=>{
      console.log(response);
      this.city_list = response;
    } ,err=>
    {
    });
  }
  
  
  saveUpdate()
  {
    console.log('called');
    
    if(this.validateForm.invalid)
    {
      this.validateForm.get('name').markAsTouched();
      this.validateForm.get('mobile').markAsTouched();
      this.validateForm.get('stateName').markAsTouched();
      this.validateForm.get('districtName').markAsTouched();
      this.validateForm.get('pincode').markAsTouched();
      this.validateForm.get('cityName').markAsTouched();
      this.validateForm.get('address').markAsTouched();
      console.log('called invalid');
      return;
    }
    
    if(this.data.districtName.district_name)
    {
      this.data.district=this.data.districtName.district_name;
    }
    if(this.data.stateName.state_name)
    {
      this.data.state=this.data.stateName.state_name
    }
    if(this.data.cityName.city)
    {
      this.data.city=this.data.cityName.city;
    }
    this.service.show_loading()
    this.service.addData(this.data,"DealerData/ExecutiveUpdate").then(response=>{
      this.service.dismiss()
      console.log(response);
      if(response['msg'] == 'Success')
      {
        this.service.presentToast('Details Updated Successfully');       
        this.navCtrl.push(ExecutivDetailPage,{id:this.userId}) ;
      }

    },err=>
    {
      this.service.dismiss()
      
      this.service.errToasr()
    });
  }
  
  
}
