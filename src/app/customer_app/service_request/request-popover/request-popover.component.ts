import { Component, OnInit } from '@angular/core';
import { PopoverController, NavParams, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { DbServiceService } from 'src/app/db-service.service';

@Component({
  selector: 'app-request-popover',
  templateUrl: './request-popover.component.html',
  styleUrls: ['./request-popover.component.scss'],
})
export class RequestPopoverComponent implements OnInit {

  taskId: any = '';
  taskNo: any = '';
  taskStatus: any = '';
  taskReportCount: any = '';

  taskPopUpData: any;

  constructor(public popoverController: PopoverController, 
              private router: Router,
              private navParams: NavParams,
              private alertCtrl: AlertController,
              public dbService: DbServiceService) {

      this.taskId = navParams.get('taskId');
      this.taskNo = navParams.get('taskNo');
      this.taskStatus = navParams.get('taskStatus');
      this.taskPopUpData = JSON.parse(localStorage.getItem('taskPopUpData'));

      console.log(this.taskStatus);
      console.log(this.taskReportCount);
      console.log(this.taskNo);
      console.log(this.taskId);
  }

  ngOnInit() {}

  async onCancelComplaintHandler() {

    const alert = await this.alertCtrl.create({
      header: 'Confirm',
      message: 'Are You Sure, You Want To Cancel Complaint ?',
      buttons: [
            {
              text: 'No',
              role: 'cancel',
              handler: () => {
                console.log('No clicked');
                this.popoverController.dismiss();

              }
            },
            {
              text: 'Yes',
              handler: () => {

                    console.log('Yes clicked');

                    const inputData = {};
                    inputData[`taskId`] = this.taskId;

                    this.dbService.presentLoader();

                    console.log(inputData);

                    this.dbService.onPostRequestHandler(inputData, 'task/onCancelComplaintHandler').subscribe((result) => {

                          console.log(result);
                          this.dbService.dismissLoader();

                          this.popoverController.dismiss();
                          this.dbService.presentToast('Complaint Cancel Successfully!');
                    });
              }
            }
          ]
      });

      await alert.present();
  }

  async DismissClick() {
    await this.popoverController.dismiss();
  }

  GoToImages() {
      this.router.navigateByUrl('/technicians/' + localStorage.getItem('routeType') + '/details/images/' + this.taskId + '/' + this.taskNo + '/' + this.taskStatus + '');
  }

  GoToSpare() {

      console.log(JSON.parse(localStorage.getItem('taskPopUpData')));

      this.router.navigateByUrl('/customer/request/spareparts/' + this.taskId + '/' + this.taskNo +  '/' + this.taskStatus + '');
  }

}
