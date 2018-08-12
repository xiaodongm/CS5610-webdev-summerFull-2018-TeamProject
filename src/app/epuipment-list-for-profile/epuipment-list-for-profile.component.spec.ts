import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EpuipmentListForProfileComponent } from './epuipment-list-for-profile.component';

describe('EpuipmentListForProfileComponent', () => {
  let component: EpuipmentListForProfileComponent;
  let fixture: ComponentFixture<EpuipmentListForProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EpuipmentListForProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EpuipmentListForProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
