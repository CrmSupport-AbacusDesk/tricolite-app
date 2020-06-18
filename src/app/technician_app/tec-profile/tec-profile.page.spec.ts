import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TecProfilePage } from './tec-profile.page';

describe('TecProfilePage', () => {
  let component: TecProfilePage;
  let fixture: ComponentFixture<TecProfilePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TecProfilePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TecProfilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
