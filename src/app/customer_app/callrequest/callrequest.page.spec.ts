import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CallrequestPage } from './callrequest.page';

describe('CallrequestPage', () => {
  let component: CallrequestPage;
  let fixture: ComponentFixture<CallrequestPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallrequestPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CallrequestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
