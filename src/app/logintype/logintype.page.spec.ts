import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LogintypePage } from './logintype.page';

describe('LogintypePage', () => {
  let component: LogintypePage;
  let fixture: ComponentFixture<LogintypePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogintypePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LogintypePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
