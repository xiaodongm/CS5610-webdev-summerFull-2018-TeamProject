import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventDescriptionWidgetEditorComponent } from './event-description-widget-editor.component';

describe('EventDescriptionWidgetEditorComponent', () => {
  let component: EventDescriptionWidgetEditorComponent;
  let fixture: ComponentFixture<EventDescriptionWidgetEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventDescriptionWidgetEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventDescriptionWidgetEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
