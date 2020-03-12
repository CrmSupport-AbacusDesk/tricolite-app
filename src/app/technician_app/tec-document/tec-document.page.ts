import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoadingController, AlertController } from '@ionic/angular';
import { DbServiceService } from 'src/app/db-service.service';

@Component({
  selector: 'app-tec-document',
  templateUrl: './tec-document.page.html',
  styleUrls: ['./tec-document.page.scss'],
})
export class TecDocumentPage implements OnInit {

  documentList: any = [];

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

        this.dbService.onPostRequestHandler(inputData, 'task/getDocumentList').subscribe((result) => {
              console.log(result);
              this.dbService.dismissLoader();

              if (result[`status`] == 'error') {

                    this.dbService.onShowAlertMessage('Error', result[`statusMessage`]);

              } else {

                  this.documentList = result[`documentList`];
              }
        });

  }

}
