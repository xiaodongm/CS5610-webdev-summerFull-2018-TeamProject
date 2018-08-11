import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsListForProfileComponent } from './events-list-for-profile.component';

describe('EventsListForProfileComponent', () => {
  let component: EventsListForProfileComponent;
  let fixture: ComponentFixture<EventsListForProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventsListForProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsListForProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
