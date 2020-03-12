import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'loginType',
    loadChildren: () => import('./logintype/logintype.module').then( m => m.LogintypePageModule)
  },
  {
    path: 'techlogin',
    loadChildren: () => import('./technician_app/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'technicians',
    loadChildren: () => import('./technician_app/tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'forgotpassword',
    loadChildren: () => import('./technician_app/forgotpassword/forgotpassword.module').then( m => m.ForgotpasswordPageModule)
  },
  // =================================
  // =================================
  // ================================= Customer APP Routing Start
  // =================================
  // =================================
  // {
  //   path: 'customer',
  //   loadChildren: () => import('./customer_app/tabs/tabs.module').then(m => m.TabsPageModule)
  // },
  {
    path: 'customer',
    loadChildren: () => import('./customer_app/customertabs/customertabs.module').then( m => m.CustomertabsPageModule)
  },
  {
    path: 'customerlogin',
    loadChildren: () => import('./customer_app/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registration',
    loadChildren: () => import('./customer_app/registration/registration.module').then( m => m.RegistrationPageModule)
  },
  // {
  //   path: 'customerprofile',
  //   loadChildren: () => import('./customer_app/customerprofile/customerprofile.module').then( m => m.CustomerprofilePageModule)
  // },
  // {
  //   path: 'callrequest',
  //   loadChildren: () => import('./customer_app/callrequest/callrequest.module').then( m => m.CallrequestPageModule)
  // },
  // {
  //   path: 'customerdocuments',
  //   loadChildren: () => import('./customer_app/customerdocuments/customerdocuments.module').then( m => m.CustomerdocumentsPageModule)
  // },
  {
    path: 'changepassword',
    loadChildren: () => import('./customer_app/changepassword/changepassword.module').then( m => m.ChangepasswordPageModule)
  },
  {
    path: 'aboutus',
    loadChildren: () => import('./customer_app/aboutus/aboutus.module').then( m => m.AboutusPageModule)
  },
  {
    path: 'customer_forgotpassword',
    loadChildren: () => import('./customer_app/forgotpassword/forgotpassword.module').then( m => m.ForgotpasswordPageModule)
  },




  // {
  //   path: 'projectdetail',
  //   loadChildren: () => import('./customer_app/projectdetail/projectdetail.module').then( m => m.ProjectdetailPageModule)
  // },
  // {
  //   path: 'myprojects',
  //   loadChildren: () => import('./customer_app/myprojects/myprojects.module').then( m => m.MyprojectsPageModule)
  // },
  // {
  //   path: 'addfeedback',
  //   loadChildren: () => import('./customer_app/service_request/addfeedback/addfeedback.module').then( m => m.AddfeedbackPageModule)
  // },
  // {
  //   path: 'addrequest',
  //   loadChildren: () => import('./customer_app/service_request/addrequest/addrequest.module').then( m => m.AddrequestPageModule)
  // }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
