import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { MyserviceProvider } from '../../providers/myservice/myservice';

/**
 * Generated class for the ExpenseStatusModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-expense-status-modal',
  templateUrl: 'expense-status-modal.html',
})
export class ExpenseStatusModalPage {

  data:any={}

  constructor(
              public navCtrl: NavController, 
              public navParams: NavParams, 
              public viewCtrl: ViewController,
              public serve: MyserviceProvider) 
  {
    this.data.id=this.navParams.get("expenseId");
    this.data.type=this.navParams.get("type");
    console.log(this.data);
    
  }

  ionViewDidLoad() 
  {
    console.log('ionViewDidLoad ExpenseStatusModalPage');
  }

  dismiss() 
  {
    this.viewCtrl.dismiss();
  }

  update_status()
  {
    console.log(this.data);
    this.serve.addData(this.data,"Expense/update_status").then((result)=>
    {
        console.log(result);
        if(result)
        {
          this.serve.presentToast('Status Changed Successfully!!');
          this.viewCtrl.dismiss();
        }
      },
      error => {
        this.serve.presentToast('Something Went wrong!!')
      });
  }

}
