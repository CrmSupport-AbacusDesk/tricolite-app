import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController, App } from 'ionic-angular';
import { MyserviceProvider } from '../../../providers/myservice/myservice';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SelectSearchableModule, SelectSearchableComponent } from 'ionic-select-searchable';
import { EnquiryserviceProvider } from '../../../providers/enquiryservice/enquiryservice';
import { DashboardPage } from '../../dashboard/dashboard';
import { DistributorDetailPage } from '../distributor-detail/distributor-detail';


@IonicPage()
@Component({
  selector: 'page-edit-network',
  templateUrl: 'edit-network.html',
})
export class EditNetworkPage {
  
  dr_id:any;
  data:any={};
  updatedData:any={};
  validateForm: FormGroup;
  type:any;
  constructor(private app:App,public navCtrl: NavController, public navParams: NavParams,public service:MyserviceProvider,public loadingCtrl: LoadingController,public formBuilder: FormBuilder,public db:EnquiryserviceProvider,public toastCtrl: ToastController) {
    if(this.navParams.get('dr_id'))
    {
      this.dr_id=this.navParams.get('dr_id');
      this.type=this.navParams.get('type');
      console.log(this.dr_id);
      this.lead_detail();
      
    }
    
    this.validateForm = formBuilder.group({
      companyName: ['', Validators.compose([Validators.required])],
      name: ['', Validators.compose([Validators.required])],
      email: [''],
      mobile: ['', Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(10)])],
      gst: [''],
      address: ['', Validators.compose([])],
      // state: ['', Validators.compose([])],
      // district: ['', Validators.compose([])],
      stateName: ['', Validators.compose([])],
      districtName: ['', Validators.compose([])],
      pincode: ['', Validators.compose([ Validators.minLength(6), Validators.maxLength(6)])],
      // city: ['', Validators.compose([])],
      cityName: ['', Validators.compose([])],
      
    });
  }
  
  
  user:any=[];
  brand:any=[];
  lead_detail()
  {
    
    this.data.user=[];
    this.data.brand=[];
    
    var loading = this.loadingCtrl.create({
      spinner: 'hide',
      content: `<img src="./assets/imgs/gif.svg" class="h55" />`,
    });
    
    this.service.addData({'dr_id':this.dr_id},'Distributor/distributor_detail').then((result)=>{
      console.log(result);
      this.data=result['result'];
      // this.data.country_name={country_name: this.data.country};
      
      this.data.stateName={state_name:this.data.state};
      this.data.districtName={district_name:this.data.district};
      this.data.cityName={city:this.data.city};
      
      console.log(this.data.districtName);
      
      if(this.data.state)
      {
        this.getDistrict(this.data.state);
      }
      if(this.data.district)
      {
        this.getCity(this.data.state,this.data.district);
      }
      
      console.log(this.data);
      
      loading.dismiss();
    });
    loading.present(); 
  }
  
  portChange1(event: {
    component: SelectSearchableComponent,
    value: any 
  }) {
    console.log('port:', event.value);
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
  
  ionViewDidLoad() {
    
    
    this.getState();
    
  }
  
  brandList:any=[];
  salesUserList:any=[];
  countryList:any=[];
  
  
  
  state_list:any=[];
  getState() {
    let loading = this.loadingCtrl.create({
      spinner: 'hide',
      content: `<img src="./assets/imgs/gif.svg" class="h55" />`,
    });
    
    this.db.getState().then((response:any)=>{
      loading.dismiss();
      console.log(response);
      this.state_list = response;
      
    });
    loading.present();
  }
  
  district_list:any = [];
  
  getDistrict(state) {
    console.log(state);
    
    let loading = this.loadingCtrl.create({
      spinner: 'hide',
      content: `<img src="./assets/imgs/gif.svg" class="h55" />`,
    });
    
    this.db.getCity(state).then((response:any)=>{
      loading.dismiss();
      console.log(response);
      this.district_list = response;
      
    });
    loading.present();
  }
  
  city_list:any=[];
  getCity(state,district) {
    console.log(state);
    console.log(district);
    
    let loading = this.loadingCtrl.create({
      spinner: 'hide',
      content: `<img src="./assets/imgs/gif.svg" class="h55" />`,
    });
    
    this.db.getCity1({'state':state,'district':district}).then((response:any)=>{
      loading.dismiss();
      console.log(response);
      this.city_list = response;
      
    });
    loading.present();
  }
  
  city_name:any=[];
  get_pincode_area_name(pincode)
  {
    this.db.get_pincode_city_name(pincode).then((response:any)=>{
      console.log(response);
      if(response=='' || response==null)
      {
        this.city_name = "Not Matched";
      }
      else
      {
        this.city_name = response.city;
        this.data.state = {'state_name':response.state_name};
        this.data.district = {'district_name':response.district_name};
        this.data.city = {'city':response.city};
        
      }
    });
  }
  presentToast1() {
    let toast1 = this.toastCtrl.create({
      message: 'Update Successfully',
      duration: 3000,
      position: 'bottom'
    });
    
    toast1.present();
  }
  
  check_gst:any;
  check_gst_existence(gst)
  {
    
    this.service.addData({'gst':gst},'Enquiry/check_gst_existence').then((result)=>{
      console.log(result);
      
      this.check_gst = result['check_gst'];
      console.log(this.check_gst);
      // this.gst_details = result['data'];
      // console.log(this.gst_details);
    })
    
  }
  check_mobile:any=''
  check_mobile_existence(mobile)
  {
    this.check_mobile=''
    console.log(this.dr_id);
    if(mobile && mobile.length==10)
    {
      this.service.addData({dr_id:this.dr_id,'mobile':mobile},'Enquiry/check_mobile_existence').then((result)=>{
        this.check_mobile = result['check_mobile'];
        
      })
    }
    
  }
  
  saveUpdate()
  {
    console.log('called');
    
    if(this.validateForm.invalid)
    {
      this.validateForm.get('companyName').markAsTouched();
      
      this.validateForm.get('name').markAsTouched();
      this.validateForm.get('mobile').markAsTouched();
      this.validateForm.get('stateName').markAsTouched();
      this.validateForm.get('districtName').markAsTouched();
      this.validateForm.get('pincode').markAsTouched();
      // this.validateForm.get('city').markAsTouched();
      this.validateForm.get('cityName').markAsTouched();
      
      this.validateForm.get('address').markAsTouched();
      this.validateForm.get('gst').markAsTouched();
      console.log('called invalid');
      // this.service.presentToast(Please Fill All )
      return;
    }
    if( this.check_mobile==1)
    {
      this.service.presentToast('Mobile Already Exist!!')
      return
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
    
    console.log(this.data);
    this.service.show_loading()
    this.service.addData(this.data,"Distributor/dr_update").then(response=>{
      console.log(response);
      this.service.dismiss()
      if(response['msg'] == 'success')
      {
        if(this.type==1)
        {
          
          this.service.addData({'dr_id':this.dr_id},'Distributor/distributor_detail').then((result)=>{
            console.log(result);
            this.navCtrl.push(DistributorDetailPage,{'distributor_data':result['result'], 'distributor_checkin': result['total_checkin'], 'distributor_order':result['total_order']});
            
          });
        }
        this.presentToast1();        
      }
      
    },err=>
    {
      this.service.dismiss()
      
      this.service.errToasr()
    });
  }
 
  
}
