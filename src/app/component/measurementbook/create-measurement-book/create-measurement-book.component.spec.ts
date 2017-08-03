import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMeasurementBookComponent } from './create-measurement-book.component';

describe('CreateMeasurementBookComponent', () => {
  let component: CreateMeasurementBookComponent;
  let fixture: ComponentFixture<CreateMeasurementBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateMeasurementBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateMeasurementBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
