import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TecDocumentPage } from './tec-document.page';

describe('TecDocumentPage', () => {
  let component: TecDocumentPage;
  let fixture: ComponentFixture<TecDocumentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TecDocumentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TecDocumentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
