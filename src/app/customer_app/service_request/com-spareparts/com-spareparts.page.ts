import { Component, OnInit } from '@angular/core';
import { PopoverController, AlertController, ToastController  } from '@ionic/angular';
import { RequestPopoverComponent } from '../request-popover/request-popover.component';
import { Router, ActivatedRoute } from '@angular/router';
import { DbServiceService } from 'src/app/db-service.service';


@Component({
  selector: 'app-com-spareparts',
  templateUrl: './com-spareparts.page.html',
  styleUrls: ['./com-spareparts.page.scss'],
})
export class ComSparepartsPage implements OnInit {

  taskId: any = '';
  taskNo: any = '';
  taskStatus: any = '';

  sparePartAssignedData: any = [];
  sparePartInstalledData: any = [];

  data: any = {};

  constructor(public popoverController: PopoverController, 
              private router: Router,
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


            this.onGetTaskSparePartDataHandler();
      });
  }

  ngOnInit() {
    
  }


  async onGetTaskSparePartDataHandler() {

      const inputData = {
            taskId: this.taskId
      };

      this.dbService.onPostRequestHandler(inputData, 'task/getTaskSparePartData').subscribe((result) => {

            console.log(result);
            this.sparePartAssignedData = result[`taskAssignedPartData`];
            this.sparePartInstalledData = result[`taskInstalledPartData`];
      });
  }


  async presentPopover(ev: any) {

    const taskData ={
        taskId: this.taskId,
        taskNo: this.taskNo,
        taskStatus: this.taskStatus
    };

    console.log(taskData);
    const popover = await this.popoverController.create({
        component: RequestPopoverComponent,
        event: ev,
        translucent: true,
        componentProps: taskData
    });
    return await popover.present();
  
  }

  GoComplaintDetail() {
      this.router.navigateByUrl('/technicians/' + localStorage.getItem('routeType') + '/details/' + this.taskId);
  }

  GoToInstallSpareParts(){
      this.router.navigateByUrl('/technicians/' + localStorage.getItem('routeType') + '/details/spareparts/installspareparts/'+ this.taskId + '/' + this.taskNo + '/'+ this.taskStatus + '');
  }

}
