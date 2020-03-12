import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-request-popover',
  templateUrl: './request-popover.component.html',
  styleUrls: ['./request-popover.component.scss'],
})
export class RequestPopoverComponent implements OnInit {

  constructor(public popoverController: PopoverController, private router: Router) { }

  ngOnInit() {}

  async DismissClick() {
    await this.popoverController.dismiss();
  }

  GoToSpare(){
    this.router.navigateByUrl('/customer/request/spareparts')
  }

}
