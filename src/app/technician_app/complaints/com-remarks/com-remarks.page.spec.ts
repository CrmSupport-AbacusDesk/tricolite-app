import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ComRemarksPage } from './com-remarks.page';

describe('ComRemarksPage', () => {
  let component: ComRemarksPage;
  let fixture: ComponentFixture<ComRemarksPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComRemarksPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ComRemarksPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
