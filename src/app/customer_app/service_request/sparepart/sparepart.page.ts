import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { RequestPopoverComponent } from '../request-popover/request-popover.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sparepart',
  templateUrl: './sparepart.page.html',
  styleUrls: ['./sparepart.page.scss'],
})
export class SparepartPage implements OnInit {

  constructor(public popoverController: PopoverController, private router: Router) { }

  ngOnInit() {
  }

  
  async presentcutomerPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: RequestPopoverComponent,
      event: ev,
      translucent: true
    });
    return await popover.present();
  }

  GoToDetail(){
    this.router.navigateByUrl('/customer/request/detail')
  }

}
