import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBarCampingSiteComponent } from './search-bar-camping-site.component';

describe('SearchBarCampgroundComponent', () => {
  let component: SearchBarCampingSiteComponent;
  let fixture: ComponentFixture<SearchBarCampingSiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchBarCampingSiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBarCampingSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
