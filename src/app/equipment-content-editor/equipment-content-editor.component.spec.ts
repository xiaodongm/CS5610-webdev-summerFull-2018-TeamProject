import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentContentEditorComponent } from './equipment-content-editor.component';

describe('EquipmentContentEditorComponent', () => {
  let component: EquipmentContentEditorComponent;
  let fixture: ComponentFixture<EquipmentContentEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquipmentContentEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipmentContentEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
