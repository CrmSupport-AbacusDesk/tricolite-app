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
  routeType: any = '';
  taskAllData: any ='';
  
  constructor(public popoverController: PopoverController,
              private router: Router,
              private navParams: NavParams,
              public dbService: DbServiceService) {

        this.taskId = navParams.get('taskId');
        this.taskNo = navParams.get('taskNo');
        this.taskStatus = navParams.get('taskStatus');

        console.log(this.taskStatus);

        this.routeType = localStorage.getItem('routeType');
  }

  ngOnInit() {}

  async DismissClick() {
    await this.popoverController.dismiss();
  }

  GoToRemarks() {
    this.router.navigateByUrl('/technicians/' + localStorage.getItem('routeType') + '/details/remarks/' + this.taskId + '/' + this.taskNo +  '/' + this.taskStatus + '');
  }

  GoToStatus() {
    this.router.navigateByUrl('/technicians/'+ localStorage.getItem('routeType') +'/details/status/' + this.taskId + '/' + this.taskNo + '/' + this.taskStatus + '');
  }

  GoToSpareParts() {
    this.router.navigateByUrl('/technicians/'+ localStorage.getItem('routeType') + '/details/spareparts/' + this.taskId + '/' + this.taskNo +  '/' + this.taskStatus + '');
  }

  GoToImages() {
    this.router.navigateByUrl('/technicians/' + localStorage.getItem('routeType') + '/details/images/' + this.taskId + '/' + this.taskNo + '/' + this.taskStatus + '');
  }
  

  // GoToImagelist() {

  //     this.router.navigateByUrl('/technicians/' + localStorage.getItem('routeType') + '/details/image-list/' + this.taskId + '/' + this.taskNo + '/' + this.taskStatus + '');
  // }

  GoToReport(type) {

    localStorage.setItem('reportType', type);
    this.router.navigateByUrl('/technicians/'+ localStorage.getItem('routeType') +'/details/dailyreport/' + this.taskId + '/' + this.taskNo +  '/' + this.taskStatus + '');
  }

  // GoToServiceReport() {

  //   console.log('hello');
  //   const inputData = {
  //     taskId: this.taskId
  //   };

  //   this.dbService.onPostRequestHandler(inputData, 'Report/viewMobileServiceReport').subscribe((result) => {

  //     console.log(result);


  //     const pdfData = document.getElementById( 'pdfComponentService' ).innerHTML;
  //     ;
      
  //     console.log(pdfData);

  //     const options = {
  //         documentSize: 'A4',
  //         type: 'share',
  //         fileName: 'myFile.pdf'
  //     };

  //     cordova.plugins.pdf.htmlToPDF({
  //       data: pdfData,
  //       documentSize: "A4",
  //       type: "share",
  //       fileName: 'my-pdf.pdf'
        
  //   },
  //   (sucess) => console.log('sucess: ', sucess),
  //   (error) => console.log('error:', error));
       

      

  //     // window.open(ReportDocURL, '_system', 'location=yes');
      

  //   });
    
  // }

  GoToServiceReport() {

    console.log('hello');
    const inputData = {
      taskId: this.taskId
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
        documentSize: "A4",
        type: "share",
        fileName: 'my-pdf.pdf'
        
    },
    (sucess) => console.log('sucess: ', sucess),
    (error) => console.log('error:', error));
       

    });
    
  }
}

