import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

import { HomePageModule } from '../home/home.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/technicians/home',
    pathMatch: 'full'
  },
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)
      },
      // ============= +++++++
      // ============= +++++++
      // ============= +++++++ Menus Inner Page Routing Start..........
      // ============= +++++++
      // ============= +++++++
      {
        path: 'menu',
        loadChildren: () => import('../menu/menu.module').then(m => m.MenuPageModule)
      },

      {
        path: 'menu/profile',
        loadChildren: () => import('../tec-profile/tec-profile.module').then(m => m.TecProfilePageModule)
      },

      {
        path: 'menu/documents',
        loadChildren: () => import('../tec-document/tec-document.module').then(m => m.TecDocumentPageModule)
      },

      {
        path: 'menu/documents/detail/:documentId/:documentTitle',
        loadChildren: () => import('..//tech-document-detail/tech-document-detail.module').then(m => m.TechDocumentDetailModule)
      },
      // ============= +++++++
      // ============= +++++++
      // ============= +++++++ Menus Inner Page Routing End............
      // ============= +++++++
      // ============= +++++++
      
      // ============= +++++++
      // ============= +++++++
      // ============= +++++++ Complaint Inner Page Routing Start.....
      // ============= +++++++
      // ============= +++++++
      {
        path: 'complaints',
        loadChildren: () => import('../complaints/complaintlist/complaintlist.module').then(m => m.ComplaintlistPageModule)
      },

      {
        path: 'commissioning',
        loadChildren: () => import('../complaints/complaintlist/complaintlist.module').then(m => m.ComplaintlistPageModule)
      },

      {
        path: 'complaints/details/:taskId',
        loadChildren: () => import('../complaints/complaintdetail/complaintdetail.module').then(m => m.ComplaintdetailPageModule)
      },

      {
        path: 'commissioning/details/:taskId',
        loadChildren: () => import('../complaints/complaintdetail/complaintdetail.module').then(m => m.ComplaintdetailPageModule)
      },

      {
        path: 'complaints/details/remarks/:taskId/:taskNo/:taskStatus',
        loadChildren: () => import('../complaints/com-remarks/com-remarks.module').then(m => m.ComRemarksPageModule)
      },

      {
        path: 'commissioning/details/remarks/:taskId/:taskNo/:taskStatus',
        loadChildren: () => import('../complaints/com-remarks/com-remarks.module').then(m => m.ComRemarksPageModule)
      },

      {
        path: 'complaints/details/status/:taskId/:taskNo/:taskStatus',
        loadChildren: () => import('../complaints/com-changestatus/com-changestatus.module').then(m => m.ComChangestatusPageModule)
      },

      {
        path: 'commissioning/details/status/:taskId/:taskNo/:taskStatus',
        loadChildren: () => import('../complaints/com-changestatus/com-changestatus.module').then(m => m.ComChangestatusPageModule)
      },

      {
        path: 'complaints/details/spareparts/:taskId/:taskNo/:taskStatus',
        loadChildren: () => import('../complaints/com-spareparts/com-spareparts.module').then(m => m.ComSparepartsPageModule)
      },

      {
        path: 'commissioning/details/spareparts/:taskId/:taskNo/:taskStatus',
        loadChildren: () => import('../complaints/com-spareparts/com-spareparts.module').then(m => m.ComSparepartsPageModule)
      },

      {
        path: 'complaints/details/spareparts/installspareparts/:taskId/:taskNo/:taskStatus',
        // tslint:disable-next-line: max-line-length
        loadChildren: () => import('../complaints/com-installspareparts/com-installspareparts.module').then(m => m.ComInstallsparepartsPageModule)
      },

      {
        path: 'commissioning/details/spareparts/installspareparts/:taskId/:taskNo/:taskStatus',
        // tslint:disable-next-line: max-line-length
        loadChildren: () => import('../complaints/com-installspareparts/com-installspareparts.module').then(m => m.ComInstallsparepartsPageModule)
      },

      {
        path: 'complaints/details/spareparts/installspareparts/:taskId/:taskNo/:taskStatus',
        // tslint:disable-next-line: max-line-length
        loadChildren: () => import('../complaints/com-installspareparts/com-installspareparts.module').then(m => m.ComInstallsparepartsPageModule)
      },

      {
        path: 'commissioning/details/spareparts/installspareparts/:taskId/:taskNo/:taskStatus',
        // tslint:disable-next-line: max-line-length
        loadChildren: () => import('../complaints/com-installspareparts/com-installspareparts.module').then(m => m.ComInstallsparepartsPageModule)
      },


      {
        path: 'complaints/details/images/:taskId/:taskNo/:taskStatus',
        loadChildren: () => import('../complaints/com-images/com-images.module').then(m => m.ComImagesPageModule)
      },

      {
        path: 'commissioning/details/images/:taskId/:taskNo/:taskStatus',
        loadChildren: () => import('../complaints/com-images/com-images.module').then(m => m.ComImagesPageModule)
      },


      {
        path: 'complaints/details/dailyreport/:taskId/:taskNo/:taskStatus',
        loadChildren: () => import('../complaints/com-dailyreport/com-dailyreport.module').then(m => m.ComDailyreportPageModule)
      },

      {
        path: 'commissioning/details/dailyreport/:taskId/:taskNo/:taskStatus',
        loadChildren: () => import('../complaints/com-dailyreport/com-dailyreport.module').then(m => m.ComDailyreportPageModule)
      },

      {
        path: 'complaints/details/image-list/:taskId/:taskNo/:taskStatus',
        loadChildren: () => import('../complaints/image-list/image-list.module').then( m => m.ImageListPageModule)
      },

      {
        path: 'commissioning/details/image-list/:taskId/:taskNo/:taskStatus',
        loadChildren: () => import('../complaints/image-list/image-list.module').then( m => m.ImageListPageModule)
      },

      {
        path: 'image-gallery',
        loadChildren: () => import('../complaints/image-gallery/image-gallery.module').then( m => m.ImageGalleryPageModule)
      },



      // ============= +++++++
      // ============= +++++++
      // ============= +++++++ Complaint Inner Page Routing End.......
      // ============= +++++++
      // ============= +++++++

      // {
      //   path: 'spareparts',
      //   loadChildren: () => import('../spareparts/spareparts.module').then(m => m.SparepartsPageModule)
      // },

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
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
