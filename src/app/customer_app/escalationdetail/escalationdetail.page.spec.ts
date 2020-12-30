import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EscalationdetailPage } from './escalationdetail.page';

describe('EscalationdetailPage', () => {
  let component: EscalationdetailPage;
  let fixture: ComponentFixture<EscalationdetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EscalationdetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EscalationdetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
