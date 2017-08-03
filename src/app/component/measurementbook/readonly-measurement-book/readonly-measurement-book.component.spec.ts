import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadonlyMeasurementBookComponent } from './readonly-measurement-book.component';

describe('ReadonlyMeasurementBookComponent', () => {
  let component: ReadonlyMeasurementBookComponent;
  let fixture: ComponentFixture<ReadonlyMeasurementBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadonlyMeasurementBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadonlyMeasurementBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
