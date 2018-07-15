import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBarCampgroundComponent } from './search-bar-camping-site.component';

describe('SearchBarCampgroundComponent', () => {
  let component: SearchBarCampgroundComponent;
  let fixture: ComponentFixture<SearchBarCampgroundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchBarCampgroundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBarCampgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
