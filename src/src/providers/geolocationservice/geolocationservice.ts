// import { HttpClient } from '@angular/common/http';
import { Injectable, NgZone } from '@angular/core';
// import { BackgroundGeolocation } from '@ionic-native/background-geolocation';
import { Storage } from '@ionic/storage';
import { Geolocation, Geoposition } from '@ionic-native/geolocation';
import 'rxjs/add/operator/filter';
import { MyserviceProvider } from '../myservice/myservice';
import { Http } from '@angular/http';
// import { LocationAccuracy } from '@ionic-native/location-accuracy';
// import { BackgroundGeolocation, BackgroundGeolocationConfig, BackgroundGeolocationResponse } from '@ionic-native/background-geolocation';

/*
Generated class for the GeolocationProvider provider.

See https://angular.io/guide/dependency-injection for more info on providers
and Angular DI.
*/
@Injectable()
export class GeolocationserviceProvider {
  
  user_id:any=0;
  constructor(public Http: Http,public zone: NgZone,public geolocation:Geolocation,public db:MyserviceProvider,public storage:Storage
    // , public locationAccuracy: LocationAccuracy,public backgroundGeolocation: BackgroundGeolocation
    ) {
    
    
    
  }
  
  ionViewDidLoad() {
    this.storage.get('token')
    .then(resp=>{
      console.log(resp);
      this.user_id=resp;
    })
  }
  
  
//   start_tracking()
//   {
//     console.log("strat function");
    
//     const config: BackgroundGeolocationConfig = {
//       desiredAccuracy: 10,
//       stationaryRadius: 20,
//       distanceFilter: 30,
//       debug: true, //  enable this hear sounds for background-geolocation life-cycle.
//       stopOnTerminate: false, // enable this to clear background location settings when the app terminates
//     };

//     this.backgroundGeolocation.configure(config)
//   .subscribe((location:BackgroundGeolocationResponse) => {
//     console.log("background location start");
//     console.log(location);
//     console.log("background location end");
    
//   });

// // start recording location
// this.backgroundGeolocation.start();

// // If you wish to turn OFF background-tracking, call the #stop method.
// this.backgroundGeolocation.stop();

//   }
  
  
  
  // lat:any=0;
  // lng:any=0;
  // watch:any;
  
  
  // startTracking() {
  
  //   this.storage.get('token')
  //   .then(resp=>{
  //     console.log(resp);
  //     this.user_id=resp;
  //   })
  
  //   let config = {
  //     desiredAccuracy: 0,
  //     stationaryRadius: 20,
  //     distanceFilter: 10, 
  //     debug: true,
  //     interval: 3600000,
  //   };
  
  
  //   // this.locationAccuracy.request(this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY).then(
  //   //   () => {
  
  //   console.log('Request successful');
  
  //   this.backgroundGeolocation.configure(config).subscribe((location) => {
  //     console.log('BackgroundGeolocation:  ' + location.latitude + ',' + location.longitude);
  //     this.zone.run(() => {
  //       this.lat = location.latitude;
  //       this.lng = location.longitude;
  //     });
  //   }, (err) => {
  //     console.log(err);
  //   });
  //   this.backgroundGeolocation.start();
  
  //   let options = {
  //     frequency: 3000, 
  //     enableHighAccuracy: true
  //   };
  //   this.watch = this.geolocation.watchPosition(options).filter((p: any) => p.code === undefined).subscribe((position: Geoposition) => {
  
  //     console.log(position);
  
  //     this.zone.run(() => {
  //       this.lat = position.coords.latitude;
  //       this.lng = position.coords.longitude;
  //       console.log(this.lat);
  //       console.log(this.lng);
  //       console.log(this.user_id);
  
  //       this.db.addData({"lat":this.lat,"lng":this.lng},"Attendence/live_tracking")
  //       .then((resp)=>{
  //         console.log(resp);
  
  //       })
  //     });
  
  //   });
  
  // }
  
  // stopTracking() {
  
  //   console.log('stopTracking');
  
  //   this.backgroundGeolocation.finish();
  //   this.watch.unsubscribe();
  
  // }
}
