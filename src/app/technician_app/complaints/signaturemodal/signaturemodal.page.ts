import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import {SignaturePad} from 'angular2-signaturepad/signature-pad';

@Component({
    selector: 'app-signaturemodal',
    templateUrl: './signaturemodal.page.html',
    styleUrls: ['./signaturemodal.page.scss'],
})
export class SignaturemodalPage implements OnInit {
    
    @Input() value: any
    @ViewChild(SignaturePad, {static: false}) public signaturePad: SignaturePad;
    data:any;

    signaturePadOptions: Object = {
        minWidth: 2,
        canvasWidth: 340,
        canvasHeight: 200
    };
    
    signatureImage : any;;
    signaturePadView: any = false; 
    
    constructor(public modalCtrl: ModalController,private navParams: NavParams) { 
        this.signatureImage = this.navParams.get('sigImage');
    }
    
    ngOnInit() {
        console.log(this.signatureImage);
        
        setTimeout(() => {
            
            this.signaturePad.clear();
            this.canvasResize();
            
        }, 1000);
        
        
    }
    
    
    canvasResize() {
        
        const canvas = document.querySelector('canvas');
        this.signaturePad.set('minWidth', 1);
        this.signaturePad.set('canvasWidth', canvas.offsetWidth);
        this.signaturePad.set('canvasHeight', canvas.offsetHeight);
    }
    
    drawCancel() {
        this.signaturePadView = false;
    }
    
    drawComplete() {
        this.signatureImage = this.signaturePad.toDataURL();
        console.log(this.signatureImage);
        
        this.modalCtrl.dismiss({
            'dismissed': true,
            'signatureImage': this.signatureImage
        });
    }
    
    drawClear() {
        this.signaturePad.clear();
    }
    
    dismiss() {
        // using the injected ModalController this page
        // can "dismiss" itself and optionally pass back data
        this.modalCtrl.dismiss({
            'dismissed': true,
            data: this.signatureImage
        });
    }
    
}
