import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventWaterfallComponent } from './event-waterfall.component';

describe('EventWaterfallComponent', () => {
  let component: EventWaterfallComponent;
  let fixture: ComponentFixture<EventWaterfallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventWaterfallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventWaterfallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
