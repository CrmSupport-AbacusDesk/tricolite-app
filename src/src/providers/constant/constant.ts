import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable()
export class ConstantProvider {
    public UserLoggedInData: any={}
    public deviceId:any
    public tabSelectedOrder:any
    constructor(public http: Http,public storage:Storage)
    {
        console.log('Hello ConstantProvider Provider');
        this.storage.get('loginData').then((res)=>
        {
            if(res.loggedInUserType!='"Employee"')
            {
                this.UserLoggedInData=res
            }
            console.log(this.UserLoggedInData);
        })

        storage.get('loggedInUserType').then((loggedInUserType) => 
        {
            console.log(loggedInUserType);
            var data = {
                'loggedInUserType':loggedInUserType
            }
            Object.assign(this.UserLoggedInData, data)
            console.log(this.UserLoggedInData);
        });

        storage.get('token_value').then((val) => 
        {
            var data
            console.log(val);
            if(val == '' || val == null || val == undefined)
            {
                data = {
                    'userLoggedInChk':false
                }
            }
            else
            {
                data = {
                    'userLoggedInChk':true
                }
            }
            console.log(data);
            
            Object.assign(this.UserLoggedInData, data)
            console.log(this.UserLoggedInData);
        });
    }
    // public connectionChk =''
    // public networkType =''
    // public rootUrl: string =  'http://phpstack-83335-1428632.cloudwaysapps.com/crm/api/app/'
    // public rootUrl1: string =  'http://phpstack-83335-1428632.cloudwaysapps.com/'
    // public rootUrlSfa: string =  'http://phpstack-83335-1428632.cloudwaysapps.com/crm/api/app/'
    // public server_url: string = this.rootUrl1 + 'index.php/app/';
    // public upload_url: string = this.rootUrl1 + 'uploads/';
    // public upload_url1: string = 'http://phpstack-83335-1428632.cloudwaysapps.com/crm/api/uploads/';
    // public upload_url2: string = 'http://phpstack-83335-1428632.cloudwaysapps.com/uploads/order-invoice/';
    // public backButton = 0;
    public connectionChk =''
    public networkType =''
    public rootUrl: string =  'http://tzapp.toyzoneb2b.com/crm/api/app/'
    public rootUrl1: string =  'http://tzapp.toyzoneb2b.com/'
    public rootUrlSfa: string =  'http://tzapp.toyzoneb2b.com/crm/api/app/'
    public server_url: string = this.rootUrl1 + 'index.php/app/';
    public upload_url: string = this.rootUrl1 + 'uploads/';
    public upload_url1: string = 'http://tzapp.toyzoneb2b.com/crm/api/uploads/';
    public upload_url2: string = 'http://tzapp.toyzoneb2b.com/uploads/order-invoice/';
    public backButton = 0;
    
    setData()
    {
        console.log('called')
        this.storage.get('loginData').then((res)=>
        {
            if(res.loggedInUserType!='"Employee"')
            {
                this.UserLoggedInData=res
            }
            
            console.log(this.UserLoggedInData);
        })

        this.storage.get('loggedInUserType').then((loggedInUserType) => 
        {
            console.log(loggedInUserType);
            var data = {
                'loggedInUserType':loggedInUserType
            }
            Object.assign(this.UserLoggedInData, data)
            console.log(this.UserLoggedInData);
        });

        this.storage.get('token_value').then((val) => 
        {
            var data
            console.log(val);
            if(val == '' || val == null || val == undefined)
            {
                data = {
                    'userLoggedInChk':false
                }
            }
            else
            {
                data = {
                    'userLoggedInChk':true
                }
            }
            Object.assign(this.UserLoggedInData, data)
            console.log(this.UserLoggedInData);
        });
    }
}
