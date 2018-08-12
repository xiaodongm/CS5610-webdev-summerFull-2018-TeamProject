import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteListForProfileComponent } from './site-list-for-profile.component';

describe('SiteListForProfileComponent', () => {
  let component: SiteListForProfileComponent;
  let fixture: ComponentFixture<SiteListForProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiteListForProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteListForProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
