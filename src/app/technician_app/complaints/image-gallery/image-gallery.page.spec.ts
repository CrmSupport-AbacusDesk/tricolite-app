import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ImageGalleryPage } from './image-gallery.page';

describe('ImageGalleryPage', () => {
  let component: ImageGalleryPage;
  let fixture: ComponentFixture<ImageGalleryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageGalleryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ImageGalleryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
