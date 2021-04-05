import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events, ActionSheetController, AlertController } from 'ionic-angular';
import * as moment from 'moment/moment';
import { MyserviceProvider } from '../../providers/myservice/myservice';
import { Storage } from '@ionic/storage';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { ExpenseListPage } from '../expense-list/expense-list';
import { DashboardPage } from '../dashboard/dashboard';


@IonicPage()
@Component({
  selector: 'page-expense-add',
  templateUrl: 'expense-add.html',
})
export class ExpenseAddPage {

  expense :any = {};
  travelForm :any = {};
  travelInfo :any = [];
  hotelForm :any = {};
  hotelInfo :any = [];
  foodForm :any = {};
  foodInfo :any = [];
  localConvForm :any = {};
  localConvInfo :any = [];
  miscExpForm :any = {};
  miscExpInfo :any = [];
  allowanceData :any = {};

  roleId:any = ''
  expand_local:any =false;
  expand_travel:any =false;
  expand_food:any =false;
  expand_hotel:any =false;
  expand_misc:any =false;
  today_date = new Date().toISOString().slice(0,10);


  constructor(
               public navCtrl: NavController, 
               public navParams: NavParams,
               public service: MyserviceProvider,
               public events:Events,
               public storage: Storage,
               private camera: Camera,
               public actionSheetController: ActionSheetController,
               public alertCtrl: AlertController) 
  {
    this.expense.totalAmt = 0;
    this.expense.travelEntitlementAmt =0;
    this.expense.hotelAmt = 0;
    this.expense.foodAmt = 0;
    this.expense.localConvAmt = 0;
    this.expense.miscExpAmt = 0;

      this.storage.get('role_id').then((roleId) => 
      {
        if(typeof(roleId) !== 'undefined' && roleId)
        {
            this.roleId = roleId;
        }
      });

      this.storage.get('displayName').then((displayName) => 
      {
          console.log(displayName);
          if(typeof(displayName) !== 'undefined' && displayName)
          {            
              this.expense.userName = displayName;
              console.log(this.expense.userName);      
          }
       });

      setTimeout(() => {
        this.getallowanceData();
      }, 500);
      
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ExpenseAddPage');
  }

  getallowanceData()
  {
    console.log(this.expense.userName);      

    this.service.addData({'roleId':this.roleId},'Expense/travel_mode').then((result)=>
    {
      this.allowanceData = result;
    })
  }

  addTravel()
  {
    console.log(this.travelForm);
    
        if(this.travelForm.arrivalDate) this.travelForm.arrivalDate = moment(this.travelForm.arrivalDate).format('YYYY-MM-DD');
        if(this.travelForm.arrivalTime) this.travelForm.arrivalTime = moment(this.travelForm.arrivalTime,'h mm A').format('h:mm A');
        if(this.travelForm.depatureDate) this.travelForm.depatureDate = moment(this.travelForm.depatureDate).format('YYYY-MM-DD');
        if(this.travelForm.depatureTime) this.travelForm.depatureTime = moment(this.travelForm.depatureTime,'h mm A').format('h:mm A');
        
        this.travelInfo.push(this.travelForm);
        this.expense.travelEntitlementAmt += parseInt(this.travelForm.arrivalAmount) + parseInt(this.travelForm.depatureAmount);
        this.expense.totalAmt += parseInt(this.travelForm.arrivalAmount) + parseInt(this.travelForm.depatureAmount);
        
        this.travelForm = {};

        setTimeout(() => {
        this.travelForm.depatureDate = '';
        this.travelForm.depatureTime = '';
        this.travelForm.depatureStation = '';
        this.travelForm.arrivalDate = '';
        this.travelForm.arrivalTime = '';
        this.travelForm.arrivalStation = '';
        this.travelForm.travelMode = '';
        this.travelForm.travelClass = '';
        this.travelForm.depatureTicket = '';
        this.travelForm.depatureAmount = '';
        this.travelForm.depatureDistance = '';
        this.travelForm.arrivalTicket = '';
        this.travelForm.arrivalAmount = '';
        this.travelForm.arrivalDistance = '';
        }, 500);
  }
    
  addHotel()
  {
    console.log(this.hotelForm);

        if(this.hotelForm.checkInDate) this.hotelForm.checkInDate = moment(this.hotelForm.checkInDate).format('YYYY-MM-DD');
        if(this.hotelForm.checkOutDate) this.hotelForm.checkOutDate = moment(this.hotelForm.checkOutDate).format('YYYY-MM-DD');
        
        this.hotelInfo.push(this.hotelForm);
        this.expense.hotelAmt += parseInt(this.hotelForm.amount);
        this.expense.totalAmt += parseInt(this.hotelForm.amount);
        
        this.hotelForm = {};

        
        setTimeout(() => {
          this.hotelForm.checkOutDate = '';
        this.hotelForm.checkInDate = '';
        this.hotelForm.remark = '';
        this.hotelForm.city = '';
        this.hotelForm.hotelName = '';
        this.hotelForm.amount = '';
        }, 500);
  }
    
  addFood()
  {
    console.log(this.foodForm);

        if(this.foodForm.date) this.foodForm.date = moment(this.foodForm.date).format('YYYY-MM-DD');
        
        this.foodInfo.push(this.foodForm);
        this.expense.foodAmt += parseInt(this.foodForm.amount);
        this.expense.totalAmt += parseInt(this.foodForm.amount);
        
        this.foodForm = {};

       
        setTimeout(() => {
           this.foodForm.city = '';
        this.foodForm.date = '';
        this.foodForm.amount = '';
        this.foodForm.remark = '';
        }, 500);
  }
    
  calculateTravelAmount()
  {
    
        if(this.localConvForm.travelClass == 'Car')
        {
            this.localConvForm.amount = parseInt(this.localConvForm.distance) * parseInt(this.allowanceData.car);
        }
        
        if(this.localConvForm.travelClass == 'Bike')
        {
            this.localConvForm.amount = parseInt(this.localConvForm.distance) * parseInt(this.allowanceData.bike);
        }
  }
    
  addLocalConv()
  {
    console.log(this.localConvForm);
    
        if(this.localConvForm.date) this.localConvForm.date = moment(this.localConvForm.date).format('YYYY-MM-DD');
        
        this.localConvInfo.push(this.localConvForm);
        this.expense.localConvAmt += parseInt(this.localConvForm.amount);
        this.expense.totalAmt += parseInt(this.localConvForm.amount);
        
        this.localConvForm = {};

        
        console.log(this.localConvForm);

        setTimeout(() => {
        this.localConvForm.modeOfTravel = '';
        this.localConvForm.travelClass = '';
        this.localConvForm.date = '';
        this.localConvForm.distance = '';
        this.localConvForm.amount = '';
        this.localConvForm.remark = '';
        }, 500);

  }
    
  addMiscExp()
  {
    console.log(this.miscExpForm);

        if(this.miscExpForm.date) this.miscExpForm.date = moment(this.miscExpForm.date).format('YYYY-MM-DD');
        
        this.miscExpInfo.push(this.miscExpForm);
        this.expense.miscExpAmt += parseInt(this.miscExpForm.amount);
        this.expense.totalAmt += parseInt(this.miscExpForm.amount);
        
        this.miscExpForm = {};
        
        setTimeout(() => {
          this.miscExpForm.expName = '';
        this.miscExpForm.date = '';
        this.miscExpForm.expPlace = '';
        this.miscExpForm.amount = '';
        this.miscExpForm.remark = '';
        }, 500);
  }
    
  rmMiscExp(index, amt)
  {
        this.miscExpInfo.splice(index,1);
        this.expense.miscExpAmt -= parseInt(amt);
        this.expense.totalAmt -= parseInt(amt);
  }
    
  rmLocalConvExp(index, amt)
  {
        this.localConvInfo.splice(index,1);
        this.expense.localConvAmt -= parseInt(amt);
        this.expense.totalAmt -= parseInt(amt);
  }
    
  rmFoodExp(index, amt)
  {
        this.foodInfo.splice(index,1);
        this.expense.foodAmt -= parseInt(amt);
        this.expense.totalAmt -= parseInt(amt);
  }
    
  rmHotelExp(index, amt)
  {
        this.hotelInfo.splice(index,1);
        this.expense.hotelAmt -= parseInt(amt);
        this.expense.totalAmt -= parseInt(amt);
  }
    
  rmTravelExp(index, deptAmt, arrAmt)
  {
        this.travelInfo.splice(index,1);
        this.expense.travelEntitlementAmt -= parseInt(deptAmt) + parseInt(arrAmt);
        this.expense.totalAmt -= parseInt(deptAmt) + parseInt(arrAmt);
  }  

  videoId: any;
  flag_upload = true;
  flag_play = true;
  image:any='';
  image_data:any=[];


  captureMedia()
  {
        let actionsheet = this.actionSheetController.create({
          title:"Upload Image",
          cssClass: 'cs-actionsheet',
          
          buttons:[{
            cssClass: 'sheet-m',
            text: 'Camera',
            icon:'camera',
            handler: () => {
              console.log("Camera Clicked");
              
              this.takePhoto();
            }
          },
          {
            cssClass: 'sheet-m1',
            text: 'Gallery',
            icon:'image',
            handler: () => {
              console.log("Gallery Clicked");         
              this.getImage();
            }
          },
          {
            cssClass: 'cs-cancel',
            text: 'Cancel',
            role: 'cancel',
            icon:'cancel',
            handler: () => {
              console.log('Cancel clicked');
            }
          }
        ]
      });
      actionsheet.present();
  } 

  takePhoto()
  {
      console.log("i am in camera function");
      const options: CameraOptions = 
      {
        quality: 70,
        destinationType: this.camera.DestinationType.DATA_URL,
        targetWidth : 500,
        targetHeight : 400
      }
      
      console.log(options);
      this.camera.getPicture(options).then((imageData) => 
      {
        this.image = 'data:image/jpeg;base64,' + imageData;
        console.log(this.image);
        if(this.image)
        {
          this.fileChange(this.image);
        }
      },
       (err) => {
      });
  }

  getImage() 
  {
      const options: CameraOptions = 
      {
        quality: 70,
        destinationType: this.camera.DestinationType.DATA_URL,
        sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
        saveToPhotoAlbum:false
      }
      console.log(options);

      this.camera.getPicture(options).then((imageData) => 
      {
        this.image= 'data:image/jpeg;base64,' + imageData;
        
        console.log(this.image);
        if(this.image)
        {
          this.fileChange(this.image);
        }
      }, (err) => {
      });
  }

  fileChange(img)
  {
    // this.image_data=[];
    this.image_data.push(img);
    console.log(this.image_data);
    this.image = '';
  }

  remove_image(i:any)
  {
    this.image_data.splice(i,1);
  }

  submitExpense()
  {

        let alert = this.alertCtrl.create({
          title: 'Save Expense',
          message: 'Do you want to Save this Expense?',
          cssClass: 'alert-modal',
          buttons: [
            {
              text: 'Yes',
              handler: () => 
              {
                    console.log('Yes clicked');
                    this.expense.billImage = this.image_data;
                    this.expense.travel = this.travelInfo;
                    this.expense.hotel = this.hotelInfo;
                    this.expense.food = this.foodInfo;
                    this.expense.localConv = this.localConvInfo;
                    this.expense.miscExp = this.miscExpInfo;


                    this.service.addData({'expenseData':this.expense},'Expense/submit_expense').then((result)=>
                    {
                        // $ionicLoading.hide();
                        console.log(result);
                        if(result['expenseId'])
                        {
                          // this.navCtrl.push(ExpenseListPage,{'type':'Pending'})
                          this.navCtrl.push(DashboardPage)
                        }
                        // this.uploadBills(result.data.expenseId);
                        
                    }, function (err)
                    {
                        // $ionicLoading.hide();
                        console.error(err);
                    });
                    
              }
            },
            {
              text: 'No',
              role: 'cancel',
              handler: () => {
                console.log('Cancel clicked');
                
              }
            }
          ]
        });
        alert.present();    
        
  }

}
