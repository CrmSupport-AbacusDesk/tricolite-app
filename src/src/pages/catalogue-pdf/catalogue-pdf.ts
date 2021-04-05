import { Component } from '@angular/core';
// import { DocumentViewer, DocumentViewerOptions } from '@ionic-native/document-viewer';
import { IonicPage, NavController, NavParams,LoadingController,} from 'ionic-angular';
import { FileTransfer, FileTransferObject, FileUploadOptions } from '@ionic-native/file-transfer';
import { ConstantProvider } from '../../providers/constant/constant';
import { DbserviceProvider } from '../../providers/dbservice/dbservice';



declare var DocumentViewer: any;


@IonicPage()
@Component({
  selector: 'page-catalogue-pdf',
  templateUrl: 'catalogue-pdf.html',
})
export class CataloguePdfPage 
{
  loading:any

               
  constructor(public navCtrl: NavController, 
              public loadingCtrl:LoadingController, 
              private transfer: FileTransfer,
              public service:DbserviceProvider, 
              public navParams: NavParams, 
              public constant:ConstantProvider) 
  {
   
  }

  ionViewDidLoad() 
  {

    console.log('ionViewDidLoad CataloguePdfPage');
  }

  ionViewWillEnter()
  {
      this.openCatelogue()

  }


  openCatelogue()
  {
      console.log();

      this.loading = this.loadingCtrl.create({
          spinner: 'hide',
          content: `<img src="./assets/imgs/gif.svg" class="h55" />`,
          dismissOnPageChange: true
      });

      // this.loading.present();

      // this.dbService.onPostRequestDataFromApi("cron/cataloguePdf", this.dbService.rootUrlSfa).subscribe((result)=>
      // {
      //     console.log(result);


      //     setTimeout(() => {
      //        this.loading.dismiss();
      //     }, 1000);


      //     if(result == 'success')
      //     {
      //         console.log(this.pdfUrl);

      //         var pdfName = orderID +'.pdf';

              const fileTransfer: FileTransferObject = this.transfer.create();

              // var url = this.pdfUrl + orderID +'.pdf';


      //         console.log(url);
      //         window.open(url, '_blank');

      var upload_url=  this.constant.upload_url +'catalogue.pdf'

              DocumentViewer.previewFileFromUrlOrPath(
                function () {
                console.log('success');
                }, function (error) {
                if (error == 53) {
                    console.log('No app that handles this file type.');
                }else if (error == 2){
                    console.log('Invalid link');
                }
              },
                 upload_url ,'catalogue', 'application/pdf');


            }







  // openCatelogue()
  // {
  //   console.log("openCatelogue");
    
  //   const options: DocumentViewerOptions = {
  //     title: 'My PDF'
  //   }
    
  //   this.document.viewDocument('assets/obrz.pdf', 'application/pdf', options)
  // }

}
