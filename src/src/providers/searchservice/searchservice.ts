import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { ConstantProvider } from '../constant/constant';

/*
  Generated class for the SearchserviceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SearchserviceProvider {

  constructor(public http: Http, private constant: ConstantProvider, public storage: Storage) {
    console.log('Hello SearchserviceProvider Provider');
  }


  public search(search) {
    return new Promise((resolve, reject) => {

        let header = new Headers();
        header.append('Content-Type', 'application/json');
        let data = { search: search}
        this.http.post(this.constant.server_url+'search/search_alldata',JSON.stringify(data),{headers: header}).map(res=>res.json())
        .subscribe(res=>{
          console.log(res);
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  public getBrand(){
    return new Promise((resolve, reject) => {
        let header = new Headers();
        header.append('Content-Type', 'application/json');
        this.http.get(this.constant.server_url+'search/get_brand',{headers: header}).map(res=>res.json())
        .subscribe(res=>{
          console.log(res);
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }
 
}
