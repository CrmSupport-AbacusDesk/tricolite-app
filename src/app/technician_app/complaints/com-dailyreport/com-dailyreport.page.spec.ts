import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ComDailyreportPage } from './com-dailyreport.page';

describe('ComDailyreportPage', () => {
  let component: ComDailyreportPage;
  let fixture: ComponentFixture<ComDailyreportPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComDailyreportPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ComDailyreportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
