import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TecCompliantPopoverComponent } from './tec-compliant-popover.component';

describe('TecCompliantPopoverComponent', () => {
  let component: TecCompliantPopoverComponent;
  let fixture: ComponentFixture<TecCompliantPopoverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TecCompliantPopoverComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TecCompliantPopoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
