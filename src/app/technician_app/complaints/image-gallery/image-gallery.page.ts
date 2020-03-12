import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';



@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.page.html',
  styleUrls: ['./image-gallery.page.scss'],
})
export class ImageGalleryPage implements OnInit {

  constructor(private location: Location,) { }

  ngOnInit() {
  }



  GoComplaintDetail() {
    this.location.back();
}

}
