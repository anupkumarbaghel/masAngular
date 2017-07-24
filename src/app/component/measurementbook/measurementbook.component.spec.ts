import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeasurementbookComponent } from './measurementbook.component';

describe('MeasurementbookComponent', () => {
  let component: MeasurementbookComponent;
  let fixture: ComponentFixture<MeasurementbookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeasurementbookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeasurementbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
