import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TechDocumentDetailPage } from './tech-document-detail.page';

describe('TechDocumentDetailPage', () => {
  let component: TechDocumentDetailPage;
  let fixture: ComponentFixture<TechDocumentDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechDocumentDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TechDocumentDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
