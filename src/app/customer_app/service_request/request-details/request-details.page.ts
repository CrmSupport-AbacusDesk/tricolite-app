import { Component, OnInit } from '@angular/core';
import { PopoverController,NavParams } from '@ionic/angular';
import { RequestPopoverComponent } from '../request-popover/request-popover.component';
import { DbServiceService } from 'src/app/db-service.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-request-details',
  templateUrl: './request-details.page.html',
  styleUrls: ['./request-details.page.scss'],
})
export class RequestDetailsPage implements OnInit {
  
  taskId:any = '';
  taskAllData: any = {};
  taskDataDetail:any={};
  taskDataFgDetail:any=[];
  taskAssignData:any=[]
  
  
  constructor(public popoverController: PopoverController,
    public dbService: DbServiceService,
    public routeParams: ActivatedRoute) {
    }
    
    ngOnInit() {
      
      this.routeParams.params.subscribe(params => {
        
        console.log(params);
        this.taskId = params.taskId;
        
        console.log(this.taskId);
        this.onGetComplaintDetailHandler();
        
      });
      
    }
    
    async presentcutomerPopover(ev: any) {
      
      const taskPopUpData = {
        taskReportCount: this.taskDataDetail.taskReportCount,
        taskInstalledPartCount: this.taskDataDetail.taskInstalledPartCount,
        taskStatus: this.taskDataDetail.status
      };
      
      localStorage.setItem('taskPopUpData', JSON.stringify(taskPopUpData));
      
      console.log(this.taskDataDetail.taskData);
      
      const taskData = {
        taskId: this.taskId,
        taskNo: this.taskDataDetail.task_no,
        taskStatus : this.taskDataDetail.status,
        taskType : this.taskDataDetail.task_type,
      };
      
      console.log(taskData);
      
      const popover = await this.popoverController.create({
        component: RequestPopoverComponent,
        event: ev,
        translucent: true,
        componentProps: taskData
      });
      
      popover.onDidDismiss()
      .then((result) => {
        
        console.log(result);
        this.onGetComplaintDetailHandler()
      
      });
      
      return await popover.present();
    }
    
    onGetComplaintDetailHandler() {
      
      const inputData = {
        
        taskId: this.taskId    
      };
 
      this.dbService.onPostRequestHandler(inputData, 'task/onTaskDetail').subscribe((result) => {
        console.log(result);
        this.taskDataDetail = Object.assign({},result['taskData']);
        console.log('*** Task Data Detail ***');
        console.log(this.taskDataDetail);
        this.taskDataFgDetail = Object.assign([],result['taskFGData']);
        console.log(this.taskDataFgDetail);
        this.taskAssignData = Object.assign([],result['taskAssignData']);
        console.log(this.taskAssignData);       
      });     
    }
    
    async onViewImageHandler(image) 
    {
      const imagePath = this.dbService.userDocURL + image;
      window.open(imagePath, '_blank');
    }
    
  }
  