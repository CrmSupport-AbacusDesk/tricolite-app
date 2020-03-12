import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddrequestPage } from './addrequest.page';

describe('AddrequestPage', () => {
  let component: AddrequestPage;
  let fixture: ComponentFixture<AddrequestPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddrequestPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddrequestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
