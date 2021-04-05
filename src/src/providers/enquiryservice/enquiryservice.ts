// import { HttpClient } from '@angular/common/http';
import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { ConstantProvider } from '../constant/constant';

/*
  Generated class for the EnquiryserviceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class EnquiryserviceProvider {

  constructor(public http: Http, private constant: ConstantProvider, public storage: Storage) {
   
  }


  public getCustomerType(){
    return new Promise((resolve, reject) => {
        let header = new Headers();
        header.append('Content-Type', 'application/json');
        this.http.get(this.constant.rootUrlSfa+'login/getCustomerType',{headers: header}).map(res=>res.json())
        .subscribe(res=>{
          console.log(res);
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }


  public getState(){
    return new Promise((resolve, reject) => {
        let header = new Headers();
        header.append('Content-Type', 'application/json');
        this.http.get(this.constant.rootUrlSfa+'enquiry/all_state',{headers: header}).map(res=>res.json())
        .subscribe(res=>{
          console.log(res);
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  public getCity(val){
    return new Promise((resolve, reject) => {
        let header = new Headers();
        header.append('Content-Type', 'application/json');
        this.http.post(this.constant.rootUrlSfa+'enquiry/all_city',JSON.stringify(val),{headers: header}).map(res=>res.json())
        .subscribe(res=>{
          console.log(res);
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }


  public getCity1(val){
    return new Promise((resolve, reject) => {
        let header = new Headers();
        header.append('Content-Type', 'application/json');
        this.http.post(this.constant.rootUrlSfa+'enquiry/get_city',JSON.stringify(val),{headers: header}).map(res=>res.json())
        .subscribe(res=>{
          console.log(res);
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }


  public get_pincode_city_name(val){
    return new Promise((resolve, reject) => {
        let header = new Headers();
        header.append('Content-Type', 'application/json');
        this.http.post(this.constant.rootUrlSfa+'enquiry/pincode_city_name',JSON.stringify(val),{headers: header}).map(res=>res.json())
        .subscribe(res=>{
          console.log(res);
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }


  public submit_enquiry(enquiry) {

    return new Promise((resolve, reject) => {

        this.storage.get('token').then((token) => {
            
            console.log(token);
            if(typeof(token) !== 'undefined' && token) {

                let header = new Headers();
                header.append('Content-Type', 'application/json');
                header.append('Authorization', 'Bearer '+token);
                
                this.http.post(this.constant.rootUrlSfa+'product/submit_enquiry',JSON.stringify(enquiry),{headers: header}).map(res=>res.json())
                .subscribe(res=>{
                  console.log(res);
                  resolve(res);
                }, (err) => {
                  reject(err);
                });
            } 
        });
    });
  }
  
}
