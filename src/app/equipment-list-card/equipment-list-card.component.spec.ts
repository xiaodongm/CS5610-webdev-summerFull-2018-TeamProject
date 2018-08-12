import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentListCardComponent } from './equipment-list-card.component';

describe('EquipmentListCardComponent', () => {
  let component: EquipmentListCardComponent;
  let fixture: ComponentFixture<EquipmentListCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquipmentListCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipmentListCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
