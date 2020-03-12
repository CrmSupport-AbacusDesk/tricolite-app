import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { RequestPopoverComponent } from '../request-popover/request-popover.component';

@Component({
  selector: 'app-request-details',
  templateUrl: './request-details.page.html',
  styleUrls: ['./request-details.page.scss'],
})
export class RequestDetailsPage implements OnInit {

  constructor(public popoverController: PopoverController) { }

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

}
