import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MyserviceProvider } from '../../../providers/myservice/myservice';
import { OrderDetailPage } from '../../order-detail/order-detail';

/**
 * Generated class for the CustomerOrderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-customer-order',
  templateUrl: 'customer-order.html',
})
export class CustomerOrderPage {

  order_list:any=[];
  load_data:any = "";
  order_data:any = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public service: MyserviceProvider) 
  {

    if(this.navParams.get('data'))
    {
      this.order_list = this.navParams.get('data');
      this.load_data = this.navParams.get('load_data');
      this.order_data = this.navParams.get('order_data');
      console.log(this.order_data);
    }


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CustomerOrderPage');
  }


userDetail:any = [];
orderDetail:any = [];
tag:any;

  goOnOrderDetail(order_id)
  {
    this.service.addData({"order_id":order_id},"Order/order_detail").then((result)=>{
      console.log(result);
      if(result)
      {
        this.orderDetail=result['detail'];
        this.userDetail=result['data'];
        if(this.userDetail.company_name)
        {
          this.tag=this.userDetail.company_name[0].toUpperCase();
        }
      this.navCtrl.push(OrderDetailPage,{'customer_order_detail':this.userDetail,'customer_order_item':this.orderDetail,'tag':this.tag});  
      }
        

    })
  }

}
