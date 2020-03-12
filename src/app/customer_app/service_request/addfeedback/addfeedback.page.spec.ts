import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddfeedbackPage } from './addfeedback.page';

describe('AddfeedbackPage', () => {
  let component: AddfeedbackPage;
  let fixture: ComponentFixture<AddfeedbackPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddfeedbackPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddfeedbackPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
