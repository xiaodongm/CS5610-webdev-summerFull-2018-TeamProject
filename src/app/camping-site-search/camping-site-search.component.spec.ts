import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampingSiteSearchComponent } from './camping-site-search.component';

describe('CampingSiteSearchComponent', () => {
  let component: CampingSiteSearchComponent;
  let fixture: ComponentFixture<CampingSiteSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampingSiteSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampingSiteSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
