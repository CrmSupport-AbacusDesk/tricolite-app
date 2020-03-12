import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CustomerprofilePage } from './customerprofile.page';

describe('CustomerprofilePage', () => {
  let component: CustomerprofilePage;
  let fixture: ComponentFixture<CustomerprofilePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerprofilePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CustomerprofilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
