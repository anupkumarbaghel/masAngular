import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmittedIndentComponent } from './submitted-indent.component';

describe('SubmittedIndentComponent', () => {
  let component: SubmittedIndentComponent;
  let fixture: ComponentFixture<SubmittedIndentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmittedIndentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmittedIndentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
