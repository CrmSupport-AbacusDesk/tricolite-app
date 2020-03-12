import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ComInstallsparepartsPage } from './com-installspareparts.page';

describe('ComInstallsparepartsPage', () => {
  let component: ComInstallsparepartsPage;
  let fixture: ComponentFixture<ComInstallsparepartsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComInstallsparepartsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ComInstallsparepartsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
