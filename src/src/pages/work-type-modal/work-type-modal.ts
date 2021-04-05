import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController, ViewController, LoadingController, Events } from 'ionic-angular';
import { AttendenceserviceProvider } from '../../providers/attendenceservice/attendenceservice';
import { LocationAccuracy } from '@ionic-native/location-accuracy';
import { Geolocation } from '@ionic-native/geolocation';
import { Storage } from '@ionic/storage';
import { GeolocationserviceProvider } from '../../providers/geolocationservice/geolocationservice';
import { MyserviceProvider } from '../../providers/myservice/myservice';


@IonicPage()
@Component({
  selector: 'page-work-type-modal',
  templateUrl: 'work-type-modal.html',
})
export class WorkTypeModalPage {
  working_type:any=[]
  input_type:any = false;
  user_id:any
  data:any={};
  
  constructor(
               public navCtrl: NavController,
               public toastCtrl: ToastController,  
               public navParams: NavParams,
               public serv: AttendenceserviceProvider,
               public viewcontrol:ViewController, 
               public loadingCtrl: LoadingController, 
               public locationAccuracy: LocationAccuracy, 
               public serve: MyserviceProvider, 
               public geolocation: Geolocation, 
               private storage: Storage,
               public track: GeolocationserviceProvider,
               public events: Events) 
    {
      
      this.storage.get('userId').then((id) => {
        
        console.log(id);
        if(typeof(id) !== 'undefined' && id){
          this.user_id = id;
          console.log(this.user_id);
          
        }
        
      });
      this.getWorkingType();
    }
    
    ionViewDidLoad() {
      console.log('ionViewDidLoad WorkTypeModalPage');
    }
    
    getWorkingType()
    {
      this.serv.getWorkingType().then((response:any)=>{
        console.log(response);
        this.working_type=response;
      });
    }
    
    open_input(data)
    {
      this.data.work_type = data;
      
      if(data=='Working')
      {
        this.viewcontrol.dismiss();
        this.start_attend();
      }
      
      if(data == 'Travel')
      {
        this.input_type = true;
      }
      else
      {
        this.input_type = false;
      }
    }
    
    close()
    {
      this.viewcontrol.dismiss();
    }
    
    
    
    start_attend() 
    {
      
      this.locationAccuracy.request(this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY).then(
        () => {
          
          let options = {maximumAge: 10000, timeout: 15000, enableHighAccuracy: true};
          this.geolocation.getCurrentPosition(options).then((resp) => {
            
            var lat = resp.coords.latitude
            var lng = resp.coords.longitude

            this.serve.show_loading()

            this.serv.start_attend({ 'lat': lat, 'lng': lng, 'id':this.user_id, 'data':this.data}).then((result) => 
            {
              if(result['msg'] =='success')
              {
                this.events.publish('user:login');

                this.serve.dismiss();

                this.viewcontrol.dismiss();

              }
            })
            
          }).catch((error) => {
            this.serve.presentToast('Could Not Get Location!!')
            this.serve.dismiss();
            
          });
        },
        error => {
          this.serve.dismiss();
          this.serve.presentToast('Please Allow Location!!')
        });
        
      }
      
      submit()
      {
        console.log(this.data);
        this.start_attend();
      }
      
      
    }
    