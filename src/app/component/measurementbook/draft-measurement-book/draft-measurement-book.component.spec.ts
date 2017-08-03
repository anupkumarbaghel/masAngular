import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DraftMeasurementBookComponent } from './draft-measurement-book.component';

describe('DraftMeasurementBookComponent', () => {
  let component: DraftMeasurementBookComponent;
  let fixture: ComponentFixture<DraftMeasurementBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DraftMeasurementBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DraftMeasurementBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
