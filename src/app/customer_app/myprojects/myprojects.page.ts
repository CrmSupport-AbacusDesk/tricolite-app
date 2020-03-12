import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoadingController, AlertController } from '@ionic/angular';
import { DbServiceService } from 'src/app/db-service.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-myprojects',
  templateUrl: './myprojects.page.html',
  styleUrls: ['./myprojects.page.scss'],
})
export class MyprojectsPage implements OnInit {
  
  projectList: any = [];
  
  isSearchOptionActive: any = false;
  searchData: any = {};
  data: any = {};
  
  doCheckForMoreData: any = true;
  isRequestInProcess: any = true;
  
  
  currentPage: any = 1;
  pageSize = 2;
  
  constructor(private router: Router,
    private formBuilder: FormBuilder,
    public alertCtrl: AlertController,
    public dbService: DbServiceService) { }
    
    ngOnInit() {
      
      this.onGetProjectListHandler(true, '');
    }
    
    
    async onSearchClickHandler() {
      
      this.isSearchOptionActive = true;
      
      setTimeout(() => {
        
        $('#searchData').focus();
        
      }, 2000);
    }
    
    async onGetProjectListHandler(showLoading, infiniteScroll: any) {
      
      console.log('hello');
      
      const inputData = {
        start: this.currentPage,
        pageLimit: this.pageSize
      };
      
      inputData[`searchData`] = this.data.searchData;
      
      if (showLoading) {
        this.dbService.presentLoader();
      }
      
      this.isRequestInProcess = true;
      
      this.dbService.onPostRequestHandler(inputData, 'customer/getProjectList').subscribe((result) => {
        
        console.log(result);
        
        if (showLoading) {

           setTimeout(() => {
             this.dbService.dismissLoader();
           }, 2000);
        }
        
        let resultData = result[`projectList`];
        
        if (!resultData || resultData == null || resultData.length == 0) {
          resultData = [];
          this.doCheckForMoreData = false;
        }
        
        if (this.currentPage == 1) {
          
          this.projectList = resultData;
          
        } else {
          
          for (let index = 0; index < resultData.length; index++) {
            
            const isIndex = this.projectList.findIndex(row => row.id == resultData[index].id);
            if (isIndex === -1) {
              this.projectList.push(resultData[index]);
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


    ionRefresh(event) {
      console.log('Pull Event Triggered!');
      setTimeout(() => {
        console.log('Async operation has ended');
        
        this.data.searchData = '';
        this.searchData = {};
        
        this.onUpdateCurrentPageHandler();
        this.onGetProjectListHandler(true, '');
        event.target.complete();
        
      }, 2000);
    }
    
    
    async onUpdateCurrentPageHandler() {
      
      setTimeout(() => {
        
        this.doCheckForMoreData = true;
        
      }, 1000);
      
      this.currentPage = 1;
      
    }
    
    
    GoToDetail(projectId) {
      
      this.router.navigateByUrl('/customer/projects/detail/' + projectId);
    }
    
  }
  