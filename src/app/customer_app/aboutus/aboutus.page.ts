import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ConfirmmodalPage } from '../confirmmodal/confirmmodal.page';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.page.html',
  styleUrls: ['./aboutus.page.scss'],
})
export class AboutusPage implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {

      const loginData = JSON.parse(localStorage.getItem('loginData'));

      console.log(loginData);

      if (loginData && loginData.loginStatus && loginData.loginStatus !=  'Approved') {
           this.presentModal();
      }
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: ConfirmmodalPage
    });
    return await modal.present();
  }

}
