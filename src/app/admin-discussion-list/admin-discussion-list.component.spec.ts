import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDiscussionListComponent } from './admin-discussion-list.component';

describe('AdminDiscussionListComponent', () => {
  let component: AdminDiscussionListComponent;
  let fixture: ComponentFixture<AdminDiscussionListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminDiscussionListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDiscussionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
