import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RentingListForProfileComponent } from './renting-list-for-profile.component';

describe('RentingListForProfileComponent', () => {
  let component: RentingListForProfileComponent;
  let fixture: ComponentFixture<RentingListForProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RentingListForProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RentingListForProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
