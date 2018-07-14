import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampingSiteGridComponent } from './camping-site-grid.component';

describe('CampingSiteGridComponent', () => {
  let component: CampingSiteGridComponent;
  let fixture: ComponentFixture<CampingSiteGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampingSiteGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampingSiteGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
