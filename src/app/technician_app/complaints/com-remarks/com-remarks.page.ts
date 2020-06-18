import { Component, OnInit } from '@angular/core';
import { PopoverController, AlertController, ToastController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { TecCompliantPopoverComponent } from '../tec-compliant-popover/tec-compliant-popover.component';
import { DbServiceService } from 'src/app/db-service.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-com-remarks',
  templateUrl: './com-remarks.page.html',
  styleUrls: ['./com-remarks.page.scss'],
})
export class ComRemarksPage implements OnInit {

  taskId: any = '';
  taskNo: any = '';
  taskStatus: any = '';
  remarkList: any = [];

  data: any = {};

  constructor(public popoverController: PopoverController, 
              private router: Router,
              public location: Location,
              public routeParams: ActivatedRoute,
              public alertCtrl: AlertController,
              public toastCtrl: ToastController,
              public dbService: DbServiceService) {

          this.routeParams.params.subscribe(params => {

            console.log(params);
            this.taskId = params.taskId;
            this.taskNo = params.taskNo;
            this.taskStatus = params.taskStatus;


  
            console.log(this.taskId);
            console.log(this.taskNo);
            console.log(this.taskStatus);

            this.onGetTaskRemarkDataHandler();
  
          });
  }

  ngOnInit() {

  }

  async onSaveRemarkDataHandler() {

       if (!this.data.remark) {

           this.dbService.onShowAlertMessage('Error', 'Remark Required!');

       } else {

              const alert = await this.alertCtrl.create({
                header: 'Confirm',
                message: 'Are You Sure, You Want To Save Remark ?',
                buttons: [
                      {
                        text: 'No',
                        role: 'cancel',
                        handler: () => {
                          console.log('No clicked');
                        }
                      },
                      {
                        text: 'Yes',
                        handler: () => {

                              console.log('Yes clicked');

                              const inputData = {
                                  taskId: this.taskId,
                                  remark: this.data.remark
                              };

                              this.dbService.presentLoader();

                              this.dbService.onPostRequestHandler(inputData, 'task/onSaveTaskRemarkData').subscribe((result) => {

                                    console.log(result);
                                    this.dbService.dismissLoader();

                                    this.data.remark = '';

                                    this.dbService.presentToast('Remark Saved Successfully!');
                                    this.onGetTaskRemarkDataHandler();
                              });
                        }
                      }
                  ]
              });

              await alert.present();
       }
  }

  async onGetTaskRemarkDataHandler() {

        this.dbService.presentLoader();
        const inputData = {
              taskId: this.taskId
        };

        this.dbService.onPostRequestHandler(inputData, 'task/getTaskRemarkData').subscribe((result) => {

              console.log(result);
              this.dbService.dismissLoader();
              this.remarkList = result[`taskRemarkData`];
        });
  }


  async presentPopover(ev: any) {

    const taskData = {
       taskId: this.taskId,
       taskNo: this.taskNo
    };

    const popover = await this.popoverController.create({
        component: TecCompliantPopoverComponent,
        event: ev,
        translucent: true,
        componentProps: taskData
    });
    return await popover.present();
  }

  GoComplaintDetail(){
     this.location.back(); 
  }

}
