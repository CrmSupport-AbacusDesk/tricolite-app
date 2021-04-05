import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController, NavParams, PopoverController } from 'ionic-angular';
import { ConstantProvider } from '../../providers/constant/constant';
import { MyserviceProvider } from '../../providers/myservice/myservice';
import { ExpenseStatusModalPage } from '../expense-status-modal/expense-status-modal';
import { Storage } from '@ionic/storage';


@IonicPage()
@Component({
  selector: 'page-expense-detail',
  templateUrl: 'expense-detail.html',
})
export class ExpenseDetailPage {

  expenseId:any='';
  userId:any='';
  expenseDetail:any={}
  expand_local:any =false;
  expand_travel:any =false;
  expand_food:any =false;
  expand_hotel:any =false;
  expand_misc:any =false;

  constructor(
              public navCtrl: NavController, 
              public navParams: NavParams,
              public db:MyserviceProvider,
              public modalCtrl: ModalController,
              public constant:ConstantProvider,
              public storage: Storage
             ) 
  {
    this.expenseId=this.navParams.get("id");

    this.storage.get('userId').then((resp)=>
    {
        this.userId = resp
    });
    console.log(this.userId);
    
    this.getExpenseDetail();
  }

  ionViewDidLoad() 
  {
    console.log('ionViewDidLoad ExpenseDetailPage');
  }

  getExpenseDetail()
  {
        this.db.show_loading();
        this.db.addData({'expenseId':this.expenseId},"Expense/expDetail").then(resp=>
        {
            console.log(resp);
            this.expenseDetail= resp['expense'];
            this.db.dismiss();
            
        },err=>
        {
            this.db.dismiss()
            this.db.errToasr()
        })
  }



  statusModal(type) 
  {
    let modal = this.modalCtrl.create(ExpenseStatusModalPage,{'type':type,'expenseId':this.expenseId});

    modal.onDidDismiss(data =>
    {
        this.getExpenseDetail();
    });
    
    modal.present();
  }

  

}
