import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { NavParams} from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoadingController, AlertController, ModalController } from '@ionic/angular';
import { DbServiceService } from 'src/app/db-service.service';
import * as moment from 'moment';
import { tick } from '@angular/core/testing';

@Component({
  selector: 'app-complaintfiltermodal',
  templateUrl: './complaintfiltermodal.page.html',
  styleUrls: ['./complaintfiltermodal.page.scss'],
})
export class ComplaintfiltermodalPage implements OnInit {
  @Input() searchData;

  priorityList: any = [];
  complaintTypeList: any = [];

  statusList: any = [
    {name: 'Open', checked: false},
    {name: 'Pending', checked: false},
    {name: 'Running', checked: false},
    {name: 'Hold', checked: false},
    {name: 'Close', checked: false},
  ];

  data: any = {};
  currentActiveTab: any = 1;

  currentDate: any = '';
  minDate: any = '';

  constructor(public modalCtrl: ModalController,
              private route: Router,
              private formBuilder: FormBuilder,
              public alertCtrl: AlertController,
              public navParams : NavParams,
              public modalController: ModalController,
              public dbService: DbServiceService) {

        this.data.range = 0;
        this.currentDate = moment().format('YYYY-MM-DD');

        this.searchData = this.navParams.get('searchData');
        console.log(this.searchData);

        if (this.searchData && this.searchData.priorityList && this.searchData.priorityList.length) {

             if (this.searchData.dateFrom) {

                  this.data.dateFrom = new Date(this.searchData.dateFrom);
                  this.data.dateTo = new Date(this.searchData.dateTo);
                  this.minDate = moment(this.searchData.dateFrom).format('YYYY-MM-DD');
             }

             if (this.searchData.range) {

                this.data.range = this.searchData.range;
             }

             this.priorityList = this.searchData.priorityList;
             this.complaintTypeList = this.searchData.complaintTypeList;
             this.statusList = this.searchData.statusList;

        } else {

              this.getPriorityList();
              this.getComplaintTypeList();
        }
  }

  ngOnInit() {

   
  }


  onRemoveAllFilterHandler() {

       this.data.dateFrom = '';
       this.data.dateTo = '';
       this.data.range = 0;

       for (let index = 0; index < this.priorityList.length; index++) {
           this.priorityList[index].checked = false;
       }

       for (let index = 0; index < this.complaintTypeList.length; index++) {
          this.complaintTypeList[index].checked = false;
       }

       for (let index = 0; index < this.statusList.length; index++) {
          this.statusList[index].checked = false;
       }

       this.dbService.presentToast('Filter Cleared!');
  }


  onDateFromChangeHandler() {
         this.data.range = 0;
         this.minDate = moment(this.data.dateFrom).format('YYYY-MM-DD');
  }


  onApplyFilterHandler() {

      const filterData = JSON.parse(JSON.stringify(this.data));

      if ((this.data.dateFrom && !this.data.dateTo) || (!this.data.dateFrom && this.data.dateTo)) {

          this.dbService.onShowAlertMessage('Error', 'Date Missing!');
          return;
      }

      if (this.data.dateFrom && this.data.dateTo) {

           filterData[`dateFrom`] =  moment(this.data.dateFrom).format('YYYY-MM-DD');
           filterData[`dateTo`] =  moment(this.data.dateTo).format('YYYY-MM-DD');
      }

      filterData[`priorityList`] = this.priorityList;
      filterData[`complaintTypeList`] = this.complaintTypeList;
      filterData[`statusList`] = this.statusList;

      this.modalCtrl.dismiss({
          'dismissed': true,
          data: filterData
      });

  }


  getPriorityList() {

      this.dbService.presentLoader();

      const inputData = {};

      this.dbService.onPostRequestHandler(inputData, 'task/getPriorityList').subscribe((result) => {
            console.log(result);
            this.dbService.dismissLoader();
            this.priorityList = result[`priorityList`];
      });

  }

  getComplaintTypeList() {

        const inputData = {};

        this.dbService.onPostRequestHandler(inputData, 'task/getComplaintTypeList').subscribe((result) => {
              console.log(result);
              this.complaintTypeList = result[`complaintTypeList`];
        });
  }

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }

}
