import { Component, OnInit, ViewChild } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoadingController, AlertController, ModalController } from '@ionic/angular';
import { DbServiceService } from 'src/app/db-service.service';

import * as moment from 'moment';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { ImagemodalPage } from 'src/app/imagemodal/imagemodal.page';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {
  
  
  activeStage: any = 1;
  fgList2: any;
  
  fgList: any = [];
  soList: any = [];
  soList2: any = [];
  
  districtList: any = [];
  
  contactData: any = [];
  
  data: any = {};
  
  submitted: any = false;
  minDate: any  = '';
  
  currentActiveCheckTab: any = 0;
  
  registerForm1: FormGroup;
  registerForm2: FormGroup;
  registerForm3: FormGroup;
  
  constructor(private route: Router,
    public routeParams: ActivatedRoute,
    private formBuilder: FormBuilder,
    public alertCtrl: AlertController,
    public modalController: ModalController,
    public dbService: DbServiceService) {
      
      this.registerForm1 = this.formBuilder.group({
        
        name: ['', [Validators.required, Validators.minLength(5)]],
        designation: ['', [Validators.required, Validators.minLength(5)]],
        superiorName: ['', [Validators.required, Validators.minLength(5)]],
        email: ['', [Validators.email]],
        companyName: ['', [Validators.required, Validators.minLength(5)]],
        so_no: ['', [Validators.required, Validators.minLength(5)]],
        
        fg_no: ['', [Validators.required, Validators.minLength(5)]],
        projectName: ['', [Validators.required, Validators.minLength(5)]],
        superioremail: ['', [Validators.email]],
        username: ['', [Validators.required, Validators.minLength(5)]],                
        password: ['', [Validators.required, Validators.minLength(5)]],
        landlineNo: ['', [ Validators.minLength(10), Validators.maxLength(10)]],
      });
      
      this.registerForm2 = this.formBuilder.group({
        
        street: ['', [Validators.minLength(5)]],
        state: ['', [Validators.required]],
        district: ['', [Validators.required]],
        city: ['', [Validators.required, Validators.minLength(4)]],
        pincode: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(6)]]
      });
      
      
      this.registerForm3 = this.formBuilder.group({
        
        contactName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
        designation: ['', [ Validators.minLength(3), Validators.maxLength(50)]],
        contactEmail: ['', [Validators.required, Validators.email]],
        contactMobile: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      });
    }
    
    ngOnInit() {
      
      this.onGetStateListHandler();
    }
    
    async onSaveRegistrationHandler() {
      
      console.log(this.data);
      
      this.submitted = true;
      
      
      
      
      
      
      if( (!this.data.so_no && !this.data.fg_no )) {
        
        this.dbService.onShowAlertMessage('Error', 'Enter SO NO or FGNO !');
        return;
      }
      
      
      
      else {
        
        console.log('hello');
        
        
        
        
        console.log(this.data);
        
        const alert = await this.alertCtrl.create({
          header: 'Confirm',
          message: 'Are You Sure, You Want To Register ?',
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
                
                const inputData = JSON.parse(JSON.stringify(this.data));
                
                
                this.dbService.presentLoader();
                
                this.dbService.onPostRequestHandler(inputData, 'login/onRegisterCustomerAccount').subscribe((result) => {
                  
                  console.log(result);
                  
                  this.dbService.dismissLoader();
                  
                  if (result[`status`] == 'error') {
                    
                    this.dbService.onShowAlertMessage('Error', result[`statusMessage`]);
                    
                  } else {
                    
                    const loginData = {
                      loginType: result[`loginData`][`loginType`],
                      loginId: result[`loginData`][`loginId`],
                      loginName: result[`loginData`][`loginName`],
                      loginStatus: result[`loginData`][`loginStatus`]
                    };
                    
                    
                    localStorage.setItem('loginData', JSON.stringify(loginData));
                    
                    console.log(JSON.parse(localStorage.getItem('loginData')));
                    
                    this.dbService.onShowAlertMessage('Success', 'Login Request sent, wait till Verification complete.');
                    
                    this.route.navigate(['/customerlogin']);
                    
                  }
                });
              }
            }
          ]
        });
        
        await alert.present();
        
      }
    }
    async onSonoHandler(){
      const inputData = {
        so_no: this.data.so_no,
        
      };
      this.dbService.onPostRequestHandler(inputData, 'login/checkSono').subscribe((result) => {
        
        console.log(result);
        this.fgList = result[`fg`];
        console.log(this.fgList);
        
        
        
        
      });
    }
    
    async imageModel() {
      const modal = await this.modalController.create({
        component: ImagemodalPage,
        componentProps: { }
      });
      // this.onGetProjectDetail();
      return await modal.present();
    }
    
    
    async onfgHandler(){
      const inputData = {
        so_no: this.data.so_no,
        fg_no:this.data.fg_no
      };
      this.dbService.onPostRequestHandler(inputData, 'login/checkFgno').subscribe((result) => {
        
        console.log(result);
        this.soList = result[`fg`];
        console.log( this.soList);
        
        this.data.so_no=this.soList.so_no
        console.log(this.data.so_no);
        
      });
    }
    async onGetStateListHandler() {
      
      const inputData = {};
      
      this.dbService.onPostRequestHandler(inputData, 'task/getStateList').subscribe((result) => {
        
        console.log(result);
        // this.stateList = result[`stateList`];
        
      });
    }
    
    async onGetDistrictListHandler() {
      
      this.data.district =  '';
      this.districtList = [];
      
      const inputData = {
        stateName: this.data.state[`state_name`]
      };
      
      this.dbService.presentLoader();
      
      this.dbService.onPostRequestHandler(inputData, 'task/getDistrictList').subscribe((result) => {
        
        console.log(result);
        this.dbService.dismissLoader();
        this.districtList = result[`districtList`];
        
      });
    }
    
    
    
    async onNextStageHandler(stage) {
      
      this.submitted = true;
      console.log(this.registerForm2);
      
      if (this['registerForm' + stage + ''].invalid) {
        
        if (stage == 1) {
          this['registerForm' + stage + ''].get('name').markAsTouched();
          this['registerForm' + stage + ''].get('designation').markAsTouched();
          
          this['registerForm' + stage + ''].get('companyName').markAsTouched();
          this['registerForm' + stage + ''].get('email').markAsTouched();
          // this['registerForm' + stage + ''].get('mobile').markAsTouched();
          this['registerForm' + stage + ''].get('landlineNo').markAsTouched();
          this['registerForm' + stage + ''].get('superiorName').markAsTouched();
          this['registerForm' + stage + ''].get('superioremail').markAsTouched();
          this['registerForm' + stage + ''].get('so_no').markAsTouched();
          this['registerForm' + stage + ''].get('fg_no').markAsTouched();
          
          
        } else if (stage == 2) {
          
          this['registerForm' + stage + ''].get('street').markAsTouched();
          this['registerForm' + stage + ''].get('state').markAsTouched();
          this['registerForm' + stage + ''].get('district').markAsTouched();
          this['registerForm' + stage + ''].get('city').markAsTouched();
          this['registerForm' + stage + ''].get('pincode').markAsTouched();
          
          
        } else if (stage == 3) {
          
          this['registerForm' + stage + ''].get('contactName').markAsTouched();
          this['registerForm' + stage + ''].get('designation').markAsTouched();
          this['registerForm' + stage + ''].get('contactEmail').markAsTouched();
          this['registerForm' + stage + ''].get('contactMobile').markAsTouched();
        }
        
        return;
        
      } else {
        
        console.log(this.data);
        
        
        // if (this.activeStage == 3) {
        
        if (!this.data.contactName || !this.data.designation || !this.data.contactEmail || !this.data.contactMobile) {
          
          this.dbService.onShowAlertMessage('Error', 'Fill contact complete Detail!');
          return false;
        }
        
        this.contactData.push({
          
          contactName: this.data.contactName,
          designation: this.data.designation,
          contactEmail: this.data.contactEmail,
          contactMobile: this.data.contactMobile
        });
        
        this.data.contactName = '';
        this.data.contactMobile = '';
        this.data.designation = '';
        this.data.contactEmail = '';
        
        this.submitted = false;
        
        // } else {
        
        //    this.activeStage += 1;
        //    this.submitted = false;
        // }
      }
    }
    
    async onDeleteContactHandler(index) {
      
      const alert = await this.alertCtrl.create({
        header: 'Confirm',
        message: 'Are You Sure, You Want To Delete Contact ?',
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
              
              this.contactData.splice(index, 1);
              this.dbService.presentToast('Contact Deleted Successfully!');
            }
          }
        ]
      });
      
      await alert.present();
      
    }
    
    
    async onBackClickHandler(stage)  {
      this.activeStage = stage - 1;
    }
    
    get f1() { return this.registerForm1.controls; }
    get f2() { return this.registerForm2.controls; }
    get f3() { return this.registerForm3.controls; }
    
  }
  