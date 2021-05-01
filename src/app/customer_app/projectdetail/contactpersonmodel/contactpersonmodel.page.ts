import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DbServiceService } from 'src/app/db-service.service';
import { NavParams } from '@ionic/angular';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Router } from '@angular/router';
import { ProjectdetailPage } from '../projectdetail.page';
import { Push } from '@ionic-native/push/ngx';


@Component({
  selector: 'app-contactpersonmodel',
  templateUrl: './contactpersonmodel.page.html',
  styleUrls: ['./contactpersonmodel.page.scss'],
})
export class ContactpersonmodelPage implements OnInit {
  
  data:any={};
  cpForm:FormGroup;
  projectID:any='';
  inputData:any={};
  
  constructor(private route: Router,public modalController: ModalController, public push: Push,private formBuilder: FormBuilder, public dbService: DbServiceService, public navCtrl:NavController, private navParams: NavParams) 
  { 
    this.projectID = this.navParams.get('projectId');

    this.cpForm = this.formBuilder.group({
      
      cpName: ['', [Validators.required]],
      cpMobile: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      cpDesignation: ['', [Validators.required]],
      cpEmail: ['', [Validators.required]],
    });
  }
  
  ngOnInit() {
  }
  
  dismiss() {
    this.modalController.dismiss({
      'dismissed': true
    });
  }
  
  onSaveHandler()
  {

    if(this.cpForm.invalid)
    {
      this.cpForm.get('cpName').markAsTouched();
      this.cpForm.get('cpMobile').markAsTouched();
      this.cpForm.get('cpDesignation').markAsTouched();
      this.cpForm.get('cpEmail').markAsTouched();
      return;
    }

    this.inputData = this.cpForm.value;
    this.inputData.projectId = this.projectID;
    
    this.dbService.onPostRequestHandler(this.inputData, 'customer/saveContactPersonData').subscribe((result) => {
      
      console.log(result);
      this.dbService.dismissLoader();
      
      if (result[`status`] != 'true') {
        console.log(result[`status`]);
        
        this.dbService.onShowAlertMessage('Error', result[`statusMessage`]);
        
      } else {
        console.log(result[`status`]);
        
        this.data = {};
        this.modalController.dismiss({
          'dismissed': true
        });
        this.dbService.presentToast('Contact Saved Successfully!');
        
      }
    });
  }
  project_detail(){

  }
}
