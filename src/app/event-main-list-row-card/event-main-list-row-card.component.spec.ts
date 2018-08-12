import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventMainListRowCardComponent } from './event-main-list-row-card.component';

describe('EventMainListRowCardComponent', () => {
  let component: EventMainListRowCardComponent;
  let fixture: ComponentFixture<EventMainListRowCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventMainListRowCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventMainListRowCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
