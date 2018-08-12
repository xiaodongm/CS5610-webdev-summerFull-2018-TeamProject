import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventCardForProfileComponent } from './event-card-for-profile.component';

describe('EventCardForProfileComponent', () => {
  let component: EventCardForProfileComponent;
  let fixture: ComponentFixture<EventCardForProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventCardForProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventCardForProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
