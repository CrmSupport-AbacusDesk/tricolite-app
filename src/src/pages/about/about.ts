import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DbserviceProvider } from '../../providers/dbservice/dbservice';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  collapseTrigger:boolean=false;
  openCollapse:boolean=false;
  open1Collapse:boolean=false;
  open2Collapse:boolean=false;
  open3Collapse:boolean=false;


  constructor(public navCtrl: NavController,public service:DbserviceProvider) 
  {
    console.log(this.service);

  }
  
}
