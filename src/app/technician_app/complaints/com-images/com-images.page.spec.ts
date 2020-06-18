import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ComImagesPage } from './com-images.page';

describe('ComImagesPage', () => {
  let component: ComImagesPage;
  let fixture: ComponentFixture<ComImagesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComImagesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ComImagesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
