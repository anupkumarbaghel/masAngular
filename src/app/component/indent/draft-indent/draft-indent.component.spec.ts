import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DraftIndentComponent } from './draft-indent.component';

describe('DraftIndentComponent', () => {
  let component: DraftIndentComponent;
  let fixture: ComponentFixture<DraftIndentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DraftIndentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DraftIndentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
