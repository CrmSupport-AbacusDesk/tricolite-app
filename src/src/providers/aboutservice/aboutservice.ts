import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { ConstantProvider } from '../constant/constant';

/*
  Generated class for the AboutserviceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AboutserviceProvider {

  constructor(public http: Http, private constant: ConstantProvider, public storage: Storage) {
    console.log('Hello AboutserviceProvider Provider');
  }

  
  public getAboutus(){
    return new Promise((resolve, reject) => {
        let header = new Headers();
        header.append('Content-Type', 'application/json');
        this.http.get(this.constant.server_url+'about/about_data',{headers: header}).map(res=>res.json())
        .subscribe(res=>{
          console.log(res);
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  public getContactus(){
    return new Promise((resolve, reject) => {
        let header = new Headers();
        header.append('Content-Type', 'application/json');
        this.http.get(this.constant.server_url+'about/contact_data',{headers: header}).map(res=>res.json())
        .subscribe(res=>{
          console.log(res);
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

}
