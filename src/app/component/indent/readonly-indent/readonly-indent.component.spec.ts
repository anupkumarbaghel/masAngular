import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadonlyIndentComponent } from './readonly-indent.component';

describe('ReadonlyIndentComponent', () => {
  let component: ReadonlyIndentComponent;
  let fixture: ComponentFixture<ReadonlyIndentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadonlyIndentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadonlyIndentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
