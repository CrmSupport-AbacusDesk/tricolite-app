import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CustomertabsPage } from './customertabs.page';

describe('CustomertabsPage', () => {
  let component: CustomertabsPage;
  let fixture: ComponentFixture<CustomertabsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomertabsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CustomertabsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
