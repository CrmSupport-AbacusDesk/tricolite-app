import { Component, OnInit } from '@angular/core';
import { PopoverController, NavParams } from '@ionic/angular';
import { Router } from '@angular/router';
import { DbServiceService } from 'src/app/db-service.service';
import * as $ from 'jquery';

declare var cordova: any;

@Component({
  selector: 'app-tec-compliant-popover',
  templateUrl: './tec-compliant-popover.component.html',
  styleUrls: ['./tec-compliant-popover.component.scss'],
})
export class TecCompliantPopoverComponent implements OnInit {

  taskId: any = '';
  taskNo: any = '';
  taskStatus: any = '';
  taskType: any = '';

  routeType: any = '';
  taskAllData: any = '';
  taskPopUpData: any;


  GoToImages1: any = '';
status: any = '';

  constructor(public popoverController: PopoverController,
              private router: Router,
              private navParams: NavParams,
              public dbService: DbServiceService) {

        this.taskId = navParams.get('taskId');
        this.taskNo = navParams.get('taskNo');
        this.taskStatus = navParams.get('taskStatus');
        this.taskType = navParams.get('taskType');

        this.taskType = navParams.get('taskType');
        this.GoToImages1 = navParams.get('GoToImages1');
        this.status = navParams.get('status');


        localStorage.setItem('taskType', this.taskType);

        console.log(this.taskType);

        this.routeType = localStorage.getItem('routeType');

        this.taskPopUpData = JSON.parse(localStorage.getItem('taskPopUpData'));
  }

  ngOnInit() {}

  async DismissClick() {
    await this.popoverController.dismiss();
  }

  GoToRemarks() {
      // tslint:disable-next-line:max-line-length
    this.router.navigateByUrl('/technicians/' + localStorage.getItem('routeType') + '/details/remarks/' + this.taskId + '/' + this.taskNo +  '/' + this.taskStatus + '');
  }

  GoToStatus() {
      // tslint:disable-next-line:max-line-length
    this.router.navigateByUrl('/technicians/' + localStorage.getItem('routeType') + '/details/status/' + this.taskId + '/' + this.taskNo + '/' + this.taskStatus + '');
  }

  GoToSpareParts() {
      // tslint:disable-next-line:max-line-length
    this.router.navigateByUrl('/technicians/' + localStorage.getItem('routeType') + '/details/spareparts/' + this.taskId + '/' + this.taskNo +  '/' + this.taskStatus + '');
  }

  GoToImages() {
      // tslint:disable-next-line:max-line-length
    this.router.navigateByUrl('/technicians/' + localStorage.getItem('routeType') + '/details/images/' + this.taskId + '/' + this.taskNo + '/' + this.taskStatus + '');
  }

  GoToReport(type) {

    localStorage.setItem('reportType', type);

      // tslint:disable-next-line:max-line-length
    this.router.navigateByUrl('/technicians/' + localStorage.getItem('routeType') + '/details/dailyreport/' + this.taskId + '/' + this.taskNo +  '/' + this.taskStatus + '');
  }

  GoToServiceReport(taskReportId) {

    console.log('hello');
    const inputData = {
        taskId: this.taskId,
        taskReportId: taskReportId
    };

    this.dbService.onPostRequestHandler(inputData, 'Report/viewMobileServiceReport').subscribe((result) => {

      console.log(result);

      const options = {
          documentSize: 'A4',
          type: 'share',
          fileName: 'myFile.pdf'
      };

      cordova.plugins.pdf.htmlToPDF({
        data: result,
        documentSize: 'A4',
        type: 'share',
        fileName: 'my-pdf.pdf'

    },
    (sucess) => console.log('sucess: ', sucess),
    (error) => console.log('error:', error));


    });

  }
}

