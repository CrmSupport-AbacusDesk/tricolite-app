import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ImageListPage } from './image-list.page';

describe('ImageListPage', () => {
  let component: ImageListPage;
  let fixture: ComponentFixture<ImageListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ImageListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
