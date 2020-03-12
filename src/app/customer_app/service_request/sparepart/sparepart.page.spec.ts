import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SparepartPage } from './sparepart.page';

describe('SparepartPage', () => {
  let component: SparepartPage;
  let fixture: ComponentFixture<SparepartPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SparepartPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SparepartPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
