import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ComSparepartsPage } from './com-spareparts.page';

describe('ComSparepartsPage', () => {
  let component: ComSparepartsPage;
  let fixture: ComponentFixture<ComSparepartsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComSparepartsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ComSparepartsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
