import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserStatsCardComponent } from './user-stats-card.component';

describe('UserStatsCardComponent', () => {
  let component: UserStatsCardComponent;
  let fixture: ComponentFixture<UserStatsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserStatsCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserStatsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
