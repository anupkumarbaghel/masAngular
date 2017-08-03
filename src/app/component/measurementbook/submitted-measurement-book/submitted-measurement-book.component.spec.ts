import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmittedMeasurementBookComponent } from './submitted-measurement-book.component';

describe('SubmittedMeasurementBookComponent', () => {
  let component: SubmittedMeasurementBookComponent;
  let fixture: ComponentFixture<SubmittedMeasurementBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmittedMeasurementBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmittedMeasurementBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
