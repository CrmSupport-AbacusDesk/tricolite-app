import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomertabsPage } from './customertabs.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/customer/home',
    pathMatch: 'full'
  },
  {
    path: '',
    component: CustomertabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)
        
      },
      {
        path: 'home/profile',
        loadChildren: () => import('../customerprofile/customerprofile.module').then(m => m.CustomerprofilePageModule)

      },
      {
        path: 'home/callrequest',
        loadChildren: () => import('../callrequest/callrequest.module').then(m => m.CallrequestPageModule)
      },
      {
        path: 'home/mydocuments',
        loadChildren: () => import('..//customerdocuments/customerdocuments.module').then(m => m.CustomerdocumentsPageModule)
      },

      {
        path: 'menu/documents/detail/:documentId/:documentTitle',
        loadChildren: () => import('../customer-document-detail/customer-document-detail.module').then(m => m.CustomerDocumentDetailModule)
      },
      // ============= +++++++
      // ============= +++++++
      // ============= +++++++ Service Request Inner Page Routing Start..........
      // ============= +++++++
      // ============= +++++++
      {
        path: 'request',
        loadChildren: () => import('../service_request/request/request.module').then(m => m.RequestPageModule)
      },
      {
        path: 'request/detail/:taskId',
        loadChildren: () => import('../service_request/request-details/request-details.module').then(m => m.RequestDetailsPageModule)
      },

      {
        path: 'request/spareparts/:taskId/:taskNo/:taskStatus',
        loadChildren: () => import('../service_request/com-spareparts/com-spareparts.module').then(m => m.ComSparepartsPageModule)
      },

      {
        path: 'request/addrequest',
        loadChildren: () => import('../service_request/addrequest/addrequest.module').then(m => m.AddrequestPageModule)
      },


      {
        path: 'request/giveyourfeedback/:taskId/:userId',
        loadChildren: () => import('../service_request/addfeedback/addfeedback.module').then(m => m.AddfeedbackPageModule)
      },

      // ============= +++++++
      // ============= +++++++
      // ============= +++++++ Service Request Inner Page Routing End..........
      // ============= +++++++
      // ============= +++++++

      {
        path: 'projects',
        loadChildren: () => import('../myprojects/myprojects.module').then(m => m.MyprojectsPageModule)
      },

      {
        path: 'projects/detail/:projectId',
        loadChildren: () => import('../projectdetail/projectdetail.module').then(m => m.ProjectdetailPageModule)
      },

      {
        path: 'aboutus',
        loadChildren: () => import('../aboutus/aboutus.module').then(m => m.AboutusPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomertabsPageRoutingModule {}
