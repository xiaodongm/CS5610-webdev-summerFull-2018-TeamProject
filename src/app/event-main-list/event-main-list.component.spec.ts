import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventMainListComponent } from './event-main-list.component';

describe('EventMainListComponent', () => {
  let component: EventMainListComponent;
  let fixture: ComponentFixture<EventMainListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventMainListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventMainListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
