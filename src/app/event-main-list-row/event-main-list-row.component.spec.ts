import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventMainListRowComponent } from './event-main-list-row.component';

describe('EventMainListRowComponent', () => {
  let component: EventMainListRowComponent;
  let fixture: ComponentFixture<EventMainListRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventMainListRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventMainListRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
