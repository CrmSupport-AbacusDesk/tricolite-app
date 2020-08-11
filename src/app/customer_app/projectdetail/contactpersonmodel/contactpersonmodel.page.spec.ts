import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ContactpersonmodelPage } from './contactpersonmodel.page';

describe('ContactpersonmodelPage', () => {
  let component: ContactpersonmodelPage;
  let fixture: ComponentFixture<ContactpersonmodelPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactpersonmodelPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ContactpersonmodelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
