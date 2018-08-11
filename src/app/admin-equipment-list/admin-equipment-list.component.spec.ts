import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEquipmentListComponent } from './admin-equipment-list.component';

describe('AdminEquipmentListComponent', () => {
  let component: AdminEquipmentListComponent;
  let fixture: ComponentFixture<AdminEquipmentListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminEquipmentListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEquipmentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
