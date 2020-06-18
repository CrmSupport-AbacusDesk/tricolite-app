import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customertabs',
  templateUrl: './customertabs.page.html',
  styleUrls: ['./customertabs.page.scss'],
})
export class CustomertabsPage implements OnInit {

  loginData: any = {};
  
  constructor(private route: Router) { }
  
  ngOnInit() {
    
      this.loginData = JSON.parse(localStorage.getItem('loginData'));

      console.log(this.loginData);

      if (this.loginData.loginStatus && this.loginData.loginStatus !=  'Approved') {
         this.route.navigateByUrl('/customer/aboutus');
      }
  }
  
  
  tabChanged(targetType) {
    
      console.log('helloooo');
      
      if (targetType == 'home') {
        this.route.navigateByUrl('/customer/home');
      } else if (targetType == 'request') {
        this.route.navigateByUrl('/customer/request');
      } else if (targetType == 'project') {
        this.route.navigateByUrl('/customer/projects');
      } else if (targetType == 'aboutUs') {
        this.route.navigateByUrl('/customer/aboutus');
      }
  }
  
}
