import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasaccountComponent } from './masaccount.component';

describe('MasaccountComponent', () => {
  let component: MasaccountComponent;
  let fixture: ComponentFixture<MasaccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasaccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasaccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
