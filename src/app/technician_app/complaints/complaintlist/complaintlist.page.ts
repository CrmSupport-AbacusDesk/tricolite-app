import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoadingController, AlertController, ModalController, PopoverController, IonContent } from '@ionic/angular';
import { DbServiceService } from 'src/app/db-service.service';
import { ComplaintfiltermodalPage } from 'src/app/complaintfiltermodal/complaintfiltermodal.page';
import { TecCompliantPopoverComponent } from '../tec-compliant-popover/tec-compliant-popover.component';
import * as $ from 'jquery';

@Component({
  selector: 'app-complaintlist',
  templateUrl: './complaintlist.page.html',
  styleUrls: ['./complaintlist.page.scss'],
})
export class ComplaintlistPage implements OnInit {

  @ViewChild(IonContent, {static: false}) content: IonContent;

  public show: any = false;
  public buttonName: any = 'Show';

  routeTitleForView: any = '';
  complaintList: any = [];

  isSearchOptionActive: any = false;
  searchData: any = {};
  data: any = {};

  dashboardCountFilterData: any;
  doCheckForMoreData: any = true;
  isRequestInProcess: any = true;


  currentPage: any = 1;
  pageSize = 2;

  constructor(private route: Router,
              public popoverController: PopoverController,
              private formBuilder: FormBuilder,
              public alertCtrl: AlertController,
              public modalController: ModalController,
              public dbService: DbServiceService) {

    
  }

  ngOnInit() {

      this.onGetComplaintListHandler(true, '');
  }

  toggle() {

      this.show = !this.show;
      if (this.show)   {

        this.buttonName = 'Hide';

      } else {

        this.buttonName = 'Show';
      }
  }

  onGetComplaintListHandler(showLoading, infiniteScroll: any) {

      console.log('hello');

      console.log(infiniteScroll);

      console.log(this.route.url);

      const inputData = {
          start: this.currentPage,
          pageLimit: this.pageSize
      };

      if (this.route.url == '/technicians/complaints') {

           inputData[`type`] = 'service_request';
           this.routeTitleForView = 'Complaints';

           localStorage.setItem('routeType', 'complaints');
      }

      if (this.route.url == '/technicians/commissioning') {

         inputData[`type`] = 'commissioning';
         this.routeTitleForView = 'Commissioning';

         localStorage.setItem('routeType', 'commissioning');
      }

      if (localStorage.getItem('dashboardCountFilterData')) {

            this.dashboardCountFilterData = JSON.parse(localStorage.getItem('dashboardCountFilterData'));
            console.log(this.dashboardCountFilterData);
      } else {
          
           this.dashboardCountFilterData = '';
      }

      this.searchData[`dashboardCountFilterData`] = this.dashboardCountFilterData;

      inputData[`searchData`] = this.searchData;
      inputData[`inputSearch`] = this.data.inputSearch;

      if (showLoading) {
         this.dbService.presentLoader();
      }

      this.isRequestInProcess = true;

      this.dbService.onPostRequestHandler(inputData, 'task/getTaskList').subscribe((result) => {

            console.log(result);

            if (showLoading) {
                  setTimeout(() => {
                    this.dbService.dismissLoader();
                  }, 1000);
            }

            let resultData = result[`taskList`];

            this.dashboardCountFilterData = '';
            localStorage.setItem('dashboardCountFilterData', '');

            if (!resultData || resultData == null || resultData.length == 0) {
                resultData = [];
                this.doCheckForMoreData = false;
            }

            if (this.currentPage == 1) {
                this.complaintList = resultData;
            } else {

                for (let index = 0; index < resultData.length; index++) {

                   const isIndex = this.complaintList.findIndex(row => row.id == resultData[index].id);
                   if (isIndex === -1) {
                      this.complaintList.push(resultData[index]);
                   }

                }
            }

            this.currentPage += 1;

            if (infiniteScroll) {
                infiniteScroll.target.complete();
            }

            setTimeout(() => {
                this.isRequestInProcess = false;
            }, 1000);
        });
  }


  ionViewWillEnter() {

      this.onUpdateCurrentPageHandler();
      this.onGetComplaintListHandler(false, '');
  }


  onSearchClickHandler() {

       this.isSearchOptionActive = true;

       setTimeout(() => {

          $('#inputSearch').focus();
           
       }, 2000);
  }


  ionRefresh(event) {
    console.log('Pull Event Triggered!');
    setTimeout(() => {
      console.log('Async operation has ended');

      this.data.inputSearch = '';
      this.searchData = {};

      this.onUpdateCurrentPageHandler();
      this.onGetComplaintListHandler(true, '');
      event.target.complete();

    }, 2000);
  }


  async onUpdateCurrentPageHandler() {

        setTimeout(() => {

            this.doCheckForMoreData = true;

        }, 1000);

        this.currentPage = 1;
        this.onScrollToTopHandler();
  }

  async onScrollToTopHandler() {
      this.content.scrollToTop();
  }



  async presentModal() {

      const modal = await this.modalController.create({
        component: ComplaintfiltermodalPage,
        componentProps: {
           searchData: this.searchData
        }
      });

      modal.onDidDismiss()
      .then((data) => {
            console.log(data);
            if (data && data[`data`] && data[`data`][`data`]) {

                 console.log(data[`data`]);
                 this.searchData = data[`data`][`data`];

                 this.onUpdateCurrentPageHandler();
                 this.onGetComplaintListHandler(true, '');
            }
      });
      return await modal.present();
   }


   async presentPopover(ev: any, taskId, taskNo,taskStatus) {

      const taskIndex = this.complaintList.findIndex(row => row.id == taskId);

      const taskPopUpData = {
            taskWorkReport: this.complaintList[taskIndex].taskWorkReport,
            taskReportCount: this.complaintList[taskIndex].taskReportCount,
            taskInstalledPartCount: this.complaintList[taskIndex].taskInstalledPartCount
      };

      localStorage.setItem('taskPopUpData', JSON.stringify(taskPopUpData));

      const taskData ={
          taskId: taskId,
          taskNo: taskNo,
          taskStatus: taskStatus,
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

  GoComplaintDetail(taskId) {

      localStorage.setItem('routeTitleForView', this.routeTitleForView);
      this.route.navigateByUrl('/technicians/' + localStorage.getItem('routeType') + '/details/' + taskId + '');
  }

  GoComplaintDetailModulesHandler(targetPage, taskId, taskNo,taskStatus) {

    localStorage.setItem('routeTitleForView', this.routeTitleForView);

    if (targetPage == 'statusListPage') {

       this.route.navigateByUrl('/technicians/' + localStorage.getItem('routeType') + '/details/status/' + taskId + '/' + taskNo + '/' + taskStatus);
    }


    if (targetPage == 'dailyWorkReportPage') {
        localStorage.setItem('reportType',  'dailyReport');
        this.route.navigateByUrl('/technicians/' + localStorage.getItem('routeType') + '/details/dailyreport/' + taskId + '/' + taskNo + '/' + taskStatus);
    }

 }

}
