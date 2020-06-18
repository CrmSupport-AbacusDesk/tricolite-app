import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoadingController, AlertController } from '@ionic/angular';
import { DbServiceService } from 'src/app/db-service.service';

@Component({
  selector: 'app-projectdetail',
  templateUrl: './projectdetail.page.html',
  styleUrls: ['./projectdetail.page.scss'],
})
export class ProjectdetailPage implements OnInit {

  projectId: any = '';
  projectData: any = {};
  data: any = {};

  submitted: any = false;

  activeTab: any = 1;

  registerForm1: FormGroup;

  constructor(public popoverController: PopoverController,
              private route: Router,
              public routeParams: ActivatedRoute,
              private formBuilder: FormBuilder,
              public alertCtrl: AlertController,
              public dbService: DbServiceService) {

        this.registerForm1 = this.formBuilder.group({

            contactName: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(50)]],
            contactMobile: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
            contactEmail: ['', [Validators.required, Validators.email]],
            designation: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]]
        });
  }

  ngOnInit() {

      this.routeParams.params.subscribe(params => {

          console.log(params);
          this.projectId = params.projectId;

          console.log(this.projectId);
          this.onGetProjectDetail();

      });
  }

  async onGetProjectDetail() {

        console.log('hello');

        this.dbService.presentLoader();
        const inputData = {
              projectId: this.projectId
        };

        this.dbService.onPostRequestHandler(inputData, 'customer/getProjectList').subscribe((result) => {
              console.log(result);
              this.dbService.dismissLoader();
              this.projectData = result[`projectData`][0];
              console.log(this.projectData);
              
        });
  }


  async onSaveContactDetailHandler() {

        this.submitted = true;

        if (this.registerForm1.invalid) {

            this.registerForm1.get('contactName').markAsTouched();
            this.registerForm1.get('contactMobile').markAsTouched();
            this.registerForm1.get('contactEmail').markAsTouched();
            this.registerForm1.get('designation').markAsTouched();

        } else {

            const alert = await this.alertCtrl.create({
              header: 'Confirm',
              message: 'Are You Sure, You Want To Save Contact ?',
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

                            const contactTempData = JSON.parse(JSON.stringify(this.data));

                            const inputData = {};
                            inputData[`projectId`] = this.projectId;

                            inputData[`contactData`] = [];
                            inputData[`contactData`].push(contactTempData);
                            this.dbService.presentLoader();

                            this.dbService.onPostRequestHandler(inputData, 'customer/saveProjectContact').subscribe((result) => {

                                  console.log(result);
                                  this.dbService.dismissLoader();

                                  if (result[`status`] == 'error') {

                                      this.dbService.onShowAlertMessage('Error', result[`statusMessage`]);

                                  } else {

                                        this.data = {};
                                        this.activeTab = 2;
                                        this.onGetProjectDetail();
                                        this.dbService.presentToast('Contact Saved Successfully!');
                                  }
                            });
                      }
                    }
                ]
            });

            await alert.present();

        }
  }

  get f1() { return this.registerForm1.controls; }

}
