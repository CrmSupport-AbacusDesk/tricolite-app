import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProjectdetailPage } from './projectdetail.page';

describe('ProjectdetailPage', () => {
  let component: ProjectdetailPage;
  let fixture: ComponentFixture<ProjectdetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectdetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectdetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
