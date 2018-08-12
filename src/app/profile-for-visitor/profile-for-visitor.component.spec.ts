import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileForVisitorComponent } from './profile-for-visitor.component';

describe('ProfileForVisitorComponent', () => {
  let component: ProfileForVisitorComponent;
  let fixture: ComponentFixture<ProfileForVisitorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileForVisitorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileForVisitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
