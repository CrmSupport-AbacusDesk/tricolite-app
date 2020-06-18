import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.page.html',
  styleUrls: ['./image-list.page.scss'],
})
export class ImageListPage implements OnInit {

  taskId: any = '';
  taskNo: any = '';
  taskStatus: any = '';

  constructor( private router : Router,  private location: Location, public  routeParams: ActivatedRoute,) {

    this.routeParams.params.subscribe(params => {

          console.log(params);
          this.taskId = params.taskId;
          this.taskNo = params.taskNo;
          this.taskStatus = params.taskStatus;


          console.log(this.taskId);
          console.log(this.taskNo);
          console.log(this.taskStatus);
    });
   }
  
  ngOnInit() {


  }
  
  
  GoToImageGalley(){
    this.router.navigateByUrl('/technicians/image-gallery');
  }
  
  
  GoToImages() 
  {
    this.router.navigateByUrl('/technicians/' + localStorage.getItem('routeType') + '/details/images/' + this.taskId + '/' + this.taskNo + '/' + this.taskStatus + '');
  }
  
  
  GoComplaintDetail() {
    this.location.back();
  }
}
