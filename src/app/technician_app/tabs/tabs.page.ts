import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(private route: Router) {



  }

  tabChanged(targetType) {

        console.log('helloooo');

        if (targetType == 'complaint') {
            this.route.navigateByUrl('/technicians/complaints');
        } else if (targetType == 'commissioning') {
            this.route.navigateByUrl('/technicians/commissioning');
        } else if (targetType == 'menu') {
          this.route.navigateByUrl('/technicians/menu');
        } else if (targetType == 'home') {
          this.route.navigateByUrl('/technicians/home');
        }
  }

}
