import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoadingController, AlertController } from '@ionic/angular';
import { DbServiceService } from 'src/app/db-service.service';


@Component({
  selector: 'app-customerdocuments',
  templateUrl: './customerdocuments.page.html',
  styleUrls: ['./customerdocuments.page.scss'],
})
export class CustomerdocumentsPage implements OnInit {

  documentList: any = [];
  isRequestInProcess: any = false;

  constructor(private route: Router,
              private formBuilder: FormBuilder,
              public alertCtrl: AlertController,
              public dbService: DbServiceService) { 

              
  }

  ngOnInit() {

    this.onGetDocumentList();
  }

  onGetDocumentList() {

        this.dbService.presentLoader();

        const inputData = {

        };

        this.isRequestInProcess = true;

        this.dbService.onPostRequestHandler(inputData, 'task/getDocumentList').subscribe((result) => {
              console.log(result);
              this.dbService.dismissLoader();

              if (result[`status`] == 'error') {

                    this.dbService.onShowAlertMessage('Error', result[`statusMessage`]);

              } else {

                  this.documentList = result[`documentList`];
              }

              this.isRequestInProcess = false;
        });
  }

}
