import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TecCompliantPopoverComponent } from './technician_app/complaints/tec-compliant-popover/tec-compliant-popover.component';
import { RequestPopoverComponent } from './customer_app/service_request/request-popover/request-popover.component';
import { ConfirmmodalPageModule } from './customer_app/confirmmodal/confirmmodal.module';
import { SignaturemodalPageModule } from './technician_app/complaints/signaturemodal/signaturemodal.module';
import { ComplaintfiltermodalPageModule } from './complaintfiltermodal/complaintfiltermodal.module';
import { HttpClientModule } from '@angular/common/http';
import { IonicSelectableModule } from 'ionic-selectable';
import { Diagnostic } from '@ionic-native/diagnostic/ngx';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { Base64 } from '@ionic-native/base64/ngx';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';
import { Push, PushObject, PushOptions } from '@ionic-native/push/ngx';
import { SignaturePadModule } from 'angular2-signaturepad';
import { ContactpersonmodelPageModule } from './customer_app/projectdetail/contactpersonmodel/contactpersonmodel.module';
import {HomePage} from './technician_app/home/home.page';
import {EscalationdetailPageModule} from './customer_app/escalationdetail/escalationdetail.module';
import { ContactpersonmodelPage } from './customer_app/projectdetail/contactpersonmodel/contactpersonmodel.page';
import { ImagemodalPageModule } from './imagemodal/imagemodal.module';
// import { DocumentViewer, DocumentViewerOptions } from '@ionic-native/document-viewer/ngx';

@NgModule({
  declarations:
  [
    AppComponent,
    TecCompliantPopoverComponent,
    RequestPopoverComponent,
  ],

  entryComponents:
  [
    TecCompliantPopoverComponent,
    RequestPopoverComponent
  ],

  imports:
  [
    ImagemodalPageModule,
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    ConfirmmodalPageModule,
    ContactpersonmodelPageModule,
    ComplaintfiltermodalPageModule,
    SignaturemodalPageModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    IonicSelectableModule,
    SignaturePadModule,
    EscalationdetailPageModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
      HomePage,
    Diagnostic,
    ImagePicker,
    Base64,
    PhotoViewer,
    Push,
    // DocumentViewer,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
