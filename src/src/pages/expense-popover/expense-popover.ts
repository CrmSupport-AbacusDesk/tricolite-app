import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { ExpenseListPage } from '../expense-list/expense-list';

@IonicPage()
@Component({
  selector: 'page-expense-popover',
  templateUrl: 'expense-popover.html',
})
export class ExpensePopoverPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  }

  ionViewDidLoad() 
  {
    console.log('ionViewDidLoad ExpensePopoverPage');
  }

  close(type) 
  {
    // return type
    this.viewCtrl.dismiss({ 'TabStatus': type});
  }
}
