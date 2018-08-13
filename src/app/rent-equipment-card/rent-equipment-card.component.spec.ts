import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RentEquipmentCardComponent } from './rent-equipment-card.component';

describe('RentEquipmentCardComponent', () => {
  let component: RentEquipmentCardComponent;
  let fixture: ComponentFixture<RentEquipmentCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RentEquipmentCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RentEquipmentCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
