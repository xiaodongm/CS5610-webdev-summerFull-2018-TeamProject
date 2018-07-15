import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampingSiteDetailComponent } from './camping-site-detail.component';

describe('CampingSiteDetailComponent', () => {
  let component: CampingSiteDetailComponent;
  let fixture: ComponentFixture<CampingSiteDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampingSiteDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampingSiteDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
