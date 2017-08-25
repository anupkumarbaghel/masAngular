import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterRegisterComponent } from './master-register.component';

describe('MasterRegisterComponent', () => {
  let component: MasterRegisterComponent;
  let fixture: ComponentFixture<MasterRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
