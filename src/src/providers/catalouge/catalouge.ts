
import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';
import { ConstantProvider } from '../constant/constant';


/*
  Generated class for the CatalougeProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CatalougeProvider {
  
  constructor(public http: Http, private constant: ConstantProvider, public storage: Storage) {
    console.log('Hello CatalougeProvider Provider');

  }

  public get_brand(){
    console.log('test');
    return new Promise((resolve, reject) => {
    let header = new Headers();
    header.append('Content-Type', 'application/json');
    this.http.get(this.constant.server_url+'category/get_brand_list',{headers: header}).map(res=>res.json())
    .subscribe(res=>{
      console.log(res);
      resolve(res);
    }, (err) => {
      reject(err);
    });
});
}

public get_category(brand){
  console.log('test');
  return new Promise((resolve, reject) => {
  let header = new Headers();
  header.append('Content-Type', 'application/json');
  this.http.get(this.constant.server_url+'category/get_category_list',{headers: header}).map(res=>res.json())
  .subscribe(res=>{
    console.log(res);
    resolve(res);
  }, (err) => {
    reject(err);
  });
});
}

public get_data(){
  console.log('test');
  return new Promise((resolve, reject) => {
  let header = new Headers();
  header.append('Content-Type', 'application/json');
  this.http.get(this.constant.server_url+'category/get_data',{headers: header}).map(res=>res.json())
  .subscribe(res=>{
    console.log(res);
    resolve(res);
  }, (err) => {
    reject(err);
  });
});
}

  public getCategory(){
        console.log('test');
        return new Promise((resolve, reject) => {
        let header = new Headers();
        header.append('Content-Type', 'application/json');
        this.http.get(this.constant.server_url+'category/category_list',{headers: header}).map(res=>res.json())
        .subscribe(res=>{
          console.log(res);
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }


  public getsubCategory(cat){
    return new Promise((resolve, reject) => {
        let header = new Headers();
        header.append('Content-Type', 'application/json');
        this.http.post(this.constant.server_url+'category/subcategory_list',JSON.stringify(cat),{headers: header}).map(res=>res.json())
        .subscribe(res=>{
          console.log(res);
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }


  public getProductList(category, sub_category,filterSelectedData,newarrival,brand) {

    console.log(sub_category);
    console.log(filterSelectedData);
    console.log(newarrival);
    console.log(brand);

    return new Promise((resolve, reject) => {

          this.storage.get('token').then((token) => {

                console.log(token);
                if(typeof(token) !== 'undefined' && token) {

                      console.log(token);
                      
                      let header = new Headers();
                      let data = {'category':category, 'sub_category':sub_category, 'filterSelected':filterSelectedData, 'newarrival':newarrival,'brand':brand};
                      header.append('Content-Type', 'application/json');
                      header.append('Authorization', 'Bearer '+token);
                      console.log(data);
                      console.log(sub_category);
                      
                      this.http.post(this.constant.server_url+'product/cat_state_product_list',JSON.stringify(data),{headers: header}).map(res=>res.json())
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

  public getCategoryList(){
    return new Promise((resolve, reject) => {
        let header = new Headers();
        header.append('Content-Type', 'application/json');
        this.http.post(this.constant.server_url+'category/category_list',{headers: header}).map(res=>res.json())
        .subscribe(res=>{
          console.log(res);
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }


  public getSubCategoryData(category){
    
        return new Promise((resolve, reject) => {
        let header = new Headers();
        let data = {'category':category};

        header.append('Content-Type', 'application/json');        
        this.http.post(this.constant.server_url+'category/subcategory_data',JSON.stringify(data),{headers: header}).map(res=>res.json())
        .subscribe(res=>{
          console.log(res);
          resolve(res);

        }, (err) => {
          reject(err);
        });
    });
  }
  getBrandData(brand)
  {
    return new Promise((resolve, reject) => {
      let header = new Headers();
      // let data={'brand':brand}      
      header.append('Content-Type','application/json');
      // console.log(data);
      
      this.http.post(this.constant.server_url+'category/get_brand_data',JSON.stringify(brand),{headers: header}).map(res=>res.json())
      .subscribe(res=>{
        resolve(res);
      }, (err) => {
        reject(err);
        console.log("error");
        
      });
  });
  }
  getBrandDataScroll(length,brand,category,subCategory,startlimit)
  {
    return new Promise((resolve, reject) => {
      let header = new Headers();
      let data={length,brand,category,subCategory,startlimit} ;     
      header.append('Content-Type','application/json');
      this.http.post(this.constant.server_url+'category/get_brand_data_scroll',JSON.stringify(data),{headers: header}).map(res=>res.json())
      .subscribe(res=>{
        resolve(res);
      }, (err) => {
        reject(err);
        console.log("error");
      });
  });
  }
  getBrandCategory(category,brand)
  {
    return new Promise((resolve, reject) => {
      let header = new Headers();
      let data={category,brand}      
      header.append('Content-Type','application/json');
      console.log(category);
      
      this.http.post(this.constant.server_url+'category/get_brand_category',JSON.stringify(data),{headers: header}).map(res=>res.json())
      .subscribe(res=>{
        console.log(res);
        
        resolve(res);
      }, (err) => {
        reject(err);
      });
  });
  }

  getSubCatData(sub_categories,category,brand)
  {
    return new Promise((resolve, reject) => {
      let header = new Headers();
      let data={sub_categories,category,brand}      
      header.append('Content-Type','application/json');
      console.log(sub_categories);
      // console.log(brand);
      // console.log(category);
      
      
      this.http.post(this.constant.server_url+'category/get_sub_category_data',JSON.stringify(data),{headers: header}).map(res=>res.json())
      .subscribe(res=>{
        console.log(res);
        
        resolve(res);
      }, (err) => {
        reject(err);
      });
  });
  }
 

}
