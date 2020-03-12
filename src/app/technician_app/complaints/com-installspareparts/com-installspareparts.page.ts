import { Component, OnInit } from '@angular/core';
import { PopoverController, AlertController, ToastController } from '@ionic/angular';
import { TecCompliantPopoverComponent } from '../tec-compliant-popover/tec-compliant-popover.component';
import { Router, ActivatedRoute } from '@angular/router';
import { DbServiceService } from 'src/app/db-service.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-com-installspareparts',
  templateUrl: './com-installspareparts.page.html',
  styleUrls: ['./com-installspareparts.page.scss'],
})
export class ComInstallsparepartsPage implements OnInit {

  taskId: any = '';
  taskNo: any = '';
  taskStatus:any = '';

  partList: any = [];
  partCartData: any = [];

  data: any = {};

  
  constructor(public popoverController: PopoverController, 
              private router: Router,
              public location: Location,
              public routeParams: ActivatedRoute,
              public alertCtrl: AlertController,
              public toastCtrl: ToastController,
              public dbService: DbServiceService) {

        this.routeParams.params.subscribe(params => {

              console.log(params);
              this.taskId = params.taskId;
              this.taskNo = params.taskNo;
              this.taskStatus = params.taskStatus;

              console.log(this.taskId);
              console.log(this.taskNo);
              console.log(this.taskStatus);
              

              this.onGetTaskSparePartDataHandler();
        });
  }
  
  ngOnInit() {

       
  }
  


  async onGetTaskSparePartDataHandler() {

        const inputData = {
              taskId: this.taskId
        };

        this.dbService.onPostRequestHandler(inputData, 'task/getTaskSparePartData').subscribe((result) => {

              console.log(result);
              this.partList = result[`taskAssignedPartData`];
        });
  }

  onItemSelectedHandler(event) {
      console.log(event);
  }


  async onSaveInstalledPartHandler() {

        if (!this.partCartData || this.partCartData.length == 0) {

            this.dbService.onShowAlertMessage('Error', 'Part Required!');

        } else {

              const alert = await this.alertCtrl.create({
                header: 'Confirm',
                message: 'Are You Sure, You Want To Save Part ?',
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
                                  taskId: this.taskId,
                                  installedPartData: this.partCartData
                              };

                              this.dbService.presentLoader();

                              this.dbService.onPostRequestHandler(inputData, 'task/onSaveTaskPartData').subscribe((result) => {

                                    console.log(result);
                                    this.dbService.dismissLoader();

                                    this.data.status = '';

                                    // tslint:disable-next-line: max-line-length
                                    this.router.navigateByUrl('/technicians/' + localStorage.getItem('routeType') + '/details/spareparts/' + this.taskId + '/' + this.taskNo + '/' + this.taskStatus);

                                    this.dbService.presentToast('Part Saved Successfully!');
                              });
                        }
                      }
                  ]
              });

              await alert.present();
        }
  }

  onAddToCartHandler() {

      let isInputEmpty = false;
      let emptyMsg = '';

      if (!this.data.part || this.data.part_id) {

            isInputEmpty = true;
            emptyMsg = 'Part Name Required!';

      } else if (!this.data.qty || this.data.qty == 0 || this.data.qty < 0) {

            isInputEmpty = true;
            emptyMsg = 'Qty Required!';
      }

      let totalQtyAfterAddedToCart = 0;

      const isIndex = this.partList.findIndex(row => row.part_id == this.data.part[`part_id`]);

      let isQtyMoreThanAssigned = false;
      if (isIndex != -1) {

            console.log(this.data.part);

            const cartPartData = this.partCartData.filter(row => row.part_id == this.data.part[`part_id`]);

            console.log(cartPartData);

            if (cartPartData.length == 0) {

                totalQtyAfterAddedToCart = this.data.qty;

            } else {

                  for (let index = 0; index < cartPartData.length; index++) {
                       totalQtyAfterAddedToCart += cartPartData[index].qty;
                  }

                  totalQtyAfterAddedToCart += this.data.qty;
            }


            if (totalQtyAfterAddedToCart > this.partList[isIndex].totalQty)  {

                  isQtyMoreThanAssigned = true;
                  emptyMsg = 'Qty Should Not be more than assigned Part Qty';
            }
      }

      console.log(totalQtyAfterAddedToCart);
      

      if (isInputEmpty || isQtyMoreThanAssigned) {

            this.dbService.onShowAlertMessage('Error', emptyMsg);

      } else {

            const cartIndex = this.partCartData.findIndex(row => row.part_id == this.data.part[`part_id`]);

            if (cartIndex === -1) {

                const index = this.partList.findIndex(row => row.part_id == this.data.part[`part_id`]);

                this.partCartData.push({

                      part_name: this.data.part[`part_name`],
                      part_id: this.data.part[`part_id`],
                      part_no: this.partList[index].part_no,
                      qty: this.data.qty,
                      lastUpdated: this.partList[index].lastUpdated
                });

            } else {

                this.partCartData[cartIndex].qty = totalQtyAfterAddedToCart;
            }

            this.data = {};
            this.dbService.presentToast('Item Updated To Cart Successfully!');
      }
  }


  async onItemDeleteHandler(index) {

      const alert = await this.alertCtrl.create({
        header: 'Confirm',
        message: 'Are You Sure, You Want To Delete Item ?',
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
                      this.partCartData.splice(index, 1);
                      this.dbService.presentToast('Item Deleted!');
                }
              }
          ]
      });

      await alert.present();
  }


  async presentPopover(ev: any) {

         const taskData = {
            taskId: this.taskId,
            taskNo: this.taskNo
         };
     
         const popover = await this.popoverController.create({
             component: TecCompliantPopoverComponent,
             event: ev,
             translucent: true,
             componentProps: taskData
         });

  }

  GoToSpareParts(){
      this.location.back();
  }
  
}
