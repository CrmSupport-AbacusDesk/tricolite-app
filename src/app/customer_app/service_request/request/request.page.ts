import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoadingController, AlertController, ModalController, IonContent } from '@ionic/angular';
import { DbServiceService } from 'src/app/db-service.service';
import { ComplaintfiltermodalPage } from 'src/app/complaintfiltermodal/complaintfiltermodal.page';
import * as $ from 'jquery';

@Component({
  selector: 'app-request',
  templateUrl: './request.page.html',
  styleUrls: ['./request.page.scss'],
})
export class RequestPage implements OnInit {

  @ViewChild(IonContent, {static: false}) content: IonContent;
  
  public show: any = false;
  public buttonName: any = 'Show';
  
  routeType: any = '';
  routeTitleForView: any = '';
  complaintList: any = [];
  
  data: any = {};
  searchData: any = {};
  
  isSearchOptionActive: any = false;
  
  doCheckForMoreData: any = true;
  isRequestInProcess: any = true;

  currentPage: any = 1;
  pageSize = 5;
  
  constructor(private route: Router,
              private formBuilder: FormBuilder,
              public alertCtrl: AlertController,
              public modalController: ModalController,
              public dbService: DbServiceService) {

    }

    ngOnInit() {

        setTimeout(() => {
          this.onGetComplaintListHandler(true, '');
        }, 1000);
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
      
      console.log(this.route.url);
      
      const inputData = {
        start: this.currentPage,
        pageLimit: this.pageSize
      };
      
      const loginData = JSON.parse(localStorage.getItem('loginData'));
      
      inputData[`searchData`] = this.searchData;
      inputData[`inputSearch`] = this.data.inputSearch;
      
      inputData[`customerId`] = loginData[`loginId`];
      
      if (showLoading) {
        this.dbService.presentLoader();
      }
      
      this.dbService.onPostRequestHandler(inputData, 'task/getTaskList').subscribe((result) => {
           
            console.log(result);
        
            if (showLoading) {
                setTimeout(() => {
                  this.dbService.dismissLoader();
                }, 2000);
            }
            
            let resultData = result[`taskList`];
            
            if (!resultData || resultData == null || resultData.length == 0) {
                resultData = [];
                this.doCheckForMoreData = false;
            }
            
            if (this.currentPage == 1) {
              this.complaintList = resultData;
              console.log(this.complaintList);
              
            } else {
              
                for (let index = 0; index < resultData.length; index++) {
                  
                  const isIndex = this.complaintList.findIndex(row => row.id == resultData[index].id);
                  if (isIndex === -1) {
                    this.complaintList.push(resultData[index]);
                  }
                  
                }

              console.log(this.complaintList);


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
    
    GoComplaintDetail(taskId) {
      this.route.navigateByUrl('/customer/request/detail/' + taskId + '');
    }
    
    AddServiceRequest() {
      this.route.navigateByUrl('/customer/request/addrequest');
    }
    
    GiveYourFeedBack(taskId, userId) {
      this.route.navigateByUrl('/customer/request/giveyourfeedback/' + taskId + '/' + userId + '');
    }
  }
  