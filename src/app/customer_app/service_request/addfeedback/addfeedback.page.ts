import { Component, OnInit, ViewChild } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoadingController, AlertController, ModalController } from '@ionic/angular';
import { DbServiceService } from 'src/app/db-service.service';

import * as moment from 'moment';

@Component({
  selector: 'app-addfeedback',
  templateUrl: './addfeedback.page.html',
  styleUrls: ['./addfeedback.page.scss'],
})
export class AddfeedbackPage implements OnInit {

  taskId: any = '';
  userId: any = '';

  data: any = {};
  userData: any = {};
  taskData: any = {};

  selectedRating: any = '';

  constructor(public popoverController: PopoverController, 
              private route: Router,
              public routeParams: ActivatedRoute,
              private formBuilder: FormBuilder,
              public alertCtrl: AlertController,
              public modalController: ModalController,
              public dbService: DbServiceService) { 

        this.routeParams.params.subscribe(params => {

              console.log(params);
              this.taskId = params.taskId;
              this.userId = params.userId;

              this.onGetUserDetailHandler();
              this.onGetTaskDetailHandler();

              console.log(this.taskId);
              console.log(this.userId);
        });

  }

  ngOnInit() {

  }

  onGetUserDetailHandler() {

      this.dbService.presentLoader();

      const inputData = {
         userId: this.userId
      };

      this.dbService.onPostRequestHandler(inputData, 'login/onGetTechnicianDetail').subscribe((result) => {
            console.log(result);

            this.dbService.dismissLoader();
            this.userData = result[`userData`];
      });
  }

  onStarClickHandler(rating) {
     this.selectedRating = rating;
  }


  async onSaveFeedbackHandler() {

    if (!this.selectedRating) {

        this.dbService.onShowAlertMessage('Error', 'Rating Required!');
        return;
    }

    if (!this.data.description) {

         this.dbService.onShowAlertMessage('Error', 'Description Required!');
         return;
    }


    console.log('hello');

    console.log(this.data);

    const alert = await this.alertCtrl.create({
      header: 'Confirm',
      message: 'Are You Sure, You Want To Save Feedback ?',
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
                        taskId: this.taskId
                    };

                    inputData[`rating`] = this.selectedRating;
                    inputData[`description`] = this.data.description;

                    this.dbService.presentLoader();

                    this.dbService.onPostRequestHandler(inputData, 'customer/saveFeedbackData').subscribe((result) => {

                          console.log(result);
                          this.dbService.dismissLoader();

                          this.data.status = '';

                          this.route.navigate(['/customer/request']);
                          this.dbService.presentToast('Feedback Saved Successfully!');
                    });
              }
            }
        ]
    });

    await alert.present();

}

  onGetTaskDetailHandler() {

        const inputData = {
           taskId: this.taskId
        };

        this.dbService.onPostRequestHandler(inputData, 'task/onGetFeedbackTaskData').subscribe((result) => {
              console.log(result);
              this.taskData = result[`taskData`];
        });
  }

}
