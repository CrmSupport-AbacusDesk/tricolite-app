import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ComChangestatusPage } from './com-changestatus.page';

describe('ComChangestatusPage', () => {
  let component: ComChangestatusPage;
  let fixture: ComponentFixture<ComChangestatusPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComChangestatusPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ComChangestatusPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
