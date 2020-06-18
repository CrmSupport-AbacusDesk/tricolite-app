import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MyprojectsPage } from './myprojects.page';

describe('MyprojectsPage', () => {
  let component: MyprojectsPage;
  let fixture: ComponentFixture<MyprojectsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyprojectsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MyprojectsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
