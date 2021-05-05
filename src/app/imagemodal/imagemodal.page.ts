import { Component, OnInit } from '@angular/core';
import { ModalController, NavController} from '@ionic/angular';


@Component({
  selector: 'app-imagemodal',
  templateUrl: './imagemodal.page.html',
  styleUrls: ['./imagemodal.page.scss'],
})
export class ImagemodalPage implements OnInit {

  constructor(public modalController: ModalController,public navCtrl:NavController) { }

  ngOnInit() {
  }

  
  dismiss() {
    this.modalController.dismiss({
      'dismissed': true
    });
  }

}
