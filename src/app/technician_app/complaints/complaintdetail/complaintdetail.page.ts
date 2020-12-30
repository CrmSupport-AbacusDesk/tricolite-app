import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { TecCompliantPopoverComponent } from '../tec-compliant-popover/tec-compliant-popover.component';

import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoadingController, AlertController } from '@ionic/angular';
import { DbServiceService } from 'src/app/db-service.service';

@Component({
  selector: 'app-complaintdetail',
  templateUrl: './complaintdetail.page.html',
  styleUrls: ['./complaintdetail.page.scss'],
})
export class ComplaintdetailPage implements OnInit {
  taskId: any = '';
  taskDetail: any = {};
  routeTitleForView: any = '';

  constructor(public popoverController: PopoverController,
              private route: Router,
              public routeParams: ActivatedRoute,
              private formBuilder: FormBuilder,
              public alertCtrl: AlertController,
              public dbService: DbServiceService) {

        this.routeTitleForView = localStorage.getItem('routeTitleForView');
  }

  ngOnInit() {

        this.routeParams.params.subscribe(params => {

          console.log(params);
          this.taskId = params.taskId;

          console.log(this.taskId);
          this.onGetTaskDetail();

        });
  }


  async onGetTaskDetail() {

      console.log('hello');

      this.dbService.presentLoader();
      const inputData = {
      taskId: this.taskId
      };

      this.dbService.onPostRequestHandler(inputData, 'task/onTaskDetail').subscribe((result) => {
            console.log(result);
            this.dbService.dismissLoader();
            this.taskDetail = result;
            console.log(this.taskDetail);
            
            console.log(this.taskDetail.taskData.status);

      });
  }

  async presentPopover(ev: any) {

    console.log(this.taskDetail.taskData);

    const taskPopUpData = {
        taskWorkReport: this.taskDetail.taskWorkReport,
        taskReportCount: this.taskDetail.taskReportCount,
        taskInstalledPartCount: this.taskDetail.taskInstalledPartCount
    };

    localStorage.setItem('taskPopUpData', JSON.stringify(taskPopUpData));

    console.log(this.taskDetail.taskData);

    const taskData = {
        taskId: this.taskId,
        taskNo: this.taskDetail.taskData.task_no,
        taskStatus : this.taskDetail.taskData.status,
        taskType : this.taskDetail.taskData.task_type,
    };

    console.log(taskData);
    const popover = await this.popoverController.create({
        component: TecCompliantPopoverComponent,
        event: ev,
        translucent: true,
        componentProps: taskData
    });
    return await popover.present();
  }

  async onGoToListPageHandler() {
    
      this.route.navigateByUrl('/technicians/' + localStorage.getItem('routeType'));
  }

}
