import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Loading, App } from 'ionic-angular';
import { NewsDetailPage } from '../news-detail/news-detail';
import { DbserviceProvider } from '../../providers/dbservice/dbservice';

@IonicPage()
@Component({
  selector: 'page-news',
  templateUrl: 'news.html',
})
export class NewsPage {
 filter:any={};
 news_list:any='';
 loading:Loading;

  constructor(public navCtrl: NavController, public navParams: NavParams,public service:DbserviceProvider,public loadingCtrl:LoadingController,private app: App) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewsPage');
    this.getNewsList();
    this.presentLoading();
  }

  goOnNewsDetailPage(id){
    this.navCtrl.push(NewsDetailPage,{'id':id});
  
  }
  getNewsList()
  {
    this.filter.limit = 0;
    this.service.post_rqst({'filter' : this.filter},'app_master/newsList').subscribe( r =>
      {
        console.log(r);
        this.loading.dismiss();
        this.news_list=r['news'];
      });
  }
  presentLoading() 
  {
    this.loading = this.loadingCtrl.create({
      content: "Please wait...",
      dismissOnPageChange: true
    });
    this.loading.present();
  }
  flag:any='';
  loadData(infiniteScroll)
      {
        console.log('loading');
        
        this.filter.limit=this.news_list.length;
        this.service.post_rqst({'filter' : this.filter},'app_master/newsList').subscribe( r =>
          {
            console.log(r);
            if(r['news']=='')
            {
              this.flag=1;
            }
            else
            {
              setTimeout(()=>{
                this.news_list=this.news_list.concat(r['news']);
                console.log('Asyn operation has stop')
                infiniteScroll.complete();
              },1000);
            }
          });
        }

        ionViewDidLeave()
         {
          let nav = this.app.getActiveNav();
          if(nav && nav.getActive()) 
          {
              let activeView = nav.getActive().name;
              let previuosView = '';
              if(nav.getPrevious() && nav.getPrevious().name)
              {
                 previuosView = nav.getPrevious().name;
              }  
              console.log(previuosView); 
              console.log(activeView);  
              console.log('its leaving');
              if((activeView == 'HomePage' || activeView == 'GiftListPage' || activeView == 'TransactionPage' || activeView == 'ProfilePage' ||activeView =='MainHomePage') && (previuosView != 'HomePage' && previuosView != 'GiftListPage'  && previuosView != 'TransactionPage' && previuosView != 'ProfilePage' && previuosView != 'MainHomePage')) 
              {
            
                  console.log(previuosView);
                  this.navCtrl.popToRoot();
              }
          }
          }
        
}
