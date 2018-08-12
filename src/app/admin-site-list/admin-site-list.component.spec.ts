import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSiteListComponent } from './admin-site-list.component';

describe('AdminSiteListComponent', () => {
  let component: AdminSiteListComponent;
  let fixture: ComponentFixture<AdminSiteListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminSiteListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSiteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
