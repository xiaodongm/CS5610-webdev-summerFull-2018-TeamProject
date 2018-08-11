import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscussionListForProfileComponent } from './discussion-list-for-profile.component';

describe('DiscussionListForProfileComponent', () => {
  let component: DiscussionListForProfileComponent;
  let fixture: ComponentFixture<DiscussionListForProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiscussionListForProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscussionListForProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
