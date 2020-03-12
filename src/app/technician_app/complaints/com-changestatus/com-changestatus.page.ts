import { Component, OnInit } from '@angular/core';
import { PopoverController, AlertController, ToastController } from '@ionic/angular';
import { TecCompliantPopoverComponent } from '../tec-compliant-popover/tec-compliant-popover.component';
import { Router, ActivatedRoute } from '@angular/router';
import { DbServiceService } from 'src/app/db-service.service';

import { Location } from '@angular/common';


@Component({
  selector: 'app-com-changestatus',
  templateUrl: './com-changestatus.page.html',
  styleUrls: ['./com-changestatus.page.scss'],
})
export class ComChangestatusPage implements OnInit {

  taskId: any = '';
  taskNo: any = '';
  taskStatus: any ='';

  statusOptionList: any = [];
  taskStatusList: any = [];

  routeTitleForView: any = '';

  data: any = {};

  constructor(public popoverController: PopoverController,
              private router: Router,
              private location: Location,
              public routeParams: ActivatedRoute,
              public alertCtrl: AlertController,
              public toastCtrl: ToastController,
              public dbService: DbServiceService) {

        this.routeTitleForView = localStorage.getItem('routeTitleForView');

        this.routeParams.params.subscribe(params => {

            console.log(params);
            this.taskId = params.taskId;
            this.taskNo = params.taskNo;
            this.taskStatus = params.taskStatus;

            console.log(this.taskId);
            console.log(this.taskNo);
            console.log(this.taskStatus);


            this.onGetTaskStatusDataHandler();
            this.onGetTaskOptionDataHandler();

        });
  }

  ngOnInit() {


  }

  async onSaveStatusDataHandler() {

      if (!this.data.status) {

          this.dbService.onShowAlertMessage('Error', 'Status Required!');

      } else {

            const isStatusAlreadyExist = this.taskStatusList.findIndex(row => row.status == this.data.status);

            if (isStatusAlreadyExist != -1) {
                  this.dbService.onShowAlertMessage('Error', 'Status Already Added!');
                  return false;
            }
            

            const alert = await this.alertCtrl.create({
              header: 'Confirm',
              message: 'Are You Sure, You Want To Save Status ?',
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
                                status: this.data.status
                            };

                            this.dbService.presentLoader();

                            this.dbService.onPostRequestHandler(inputData, 'task/onSaveTaskStatusData').subscribe((result) => {

                                  console.log(result);
                                  this.dbService.dismissLoader();

                                  this.data.status = '';

                                  this.dbService.presentToast('Status Saved Successfully!');
                                  this.onGetTaskStatusDataHandler();
                            });
                      }
                    }
                ]
            });

            await alert.present();
      }
  }


  async onGetTaskStatusDataHandler() {

      const inputData = {
            taskId: this.taskId
      };

      this.dbService.onPostRequestHandler(inputData, 'task/getTaskStatusData').subscribe((result) => {

            console.log(result);
            this.taskStatusList = result[`taskStatusData`];
      });
  }


  async onGetTaskOptionDataHandler() {

      this.dbService.presentLoader();
      const inputData = {
            taskId: this.taskId
      };

      this.dbService.onPostRequestHandler(inputData, 'task/onGetStatusOptionList').subscribe((result) => {

            console.log(result);
            this.dbService.dismissLoader();
            this.statusOptionList = result[`statusOptionList`];
      });
  }


  
  async presentPopover(ev: any) {

         const taskData = {
            taskId: this.taskId,
            taskNo: this.taskNo,
            taskStatus : this.taskStatus,
         };

         const popover = await this.popoverController.create({
             component: TecCompliantPopoverComponent,
             event: ev,
             translucent: true,
             componentProps: taskData
         });

         return await popover.present();
  }

  GoComplaintDetail() {
     this.location.back();
  }

}
