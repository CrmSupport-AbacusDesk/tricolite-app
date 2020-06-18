import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SignaturemodalPage } from './signaturemodal.page';

describe('SignaturemodalPage', () => {
  let component: SignaturemodalPage;
  let fixture: ComponentFixture<SignaturemodalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignaturemodalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SignaturemodalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
