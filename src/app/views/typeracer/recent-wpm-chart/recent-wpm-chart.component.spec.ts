import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentWpmChartComponent } from './recent-wpm-chart.component';

describe('UserChartsComponent', () => {
  let component: RecentWpmChartComponent;
  let fixture: ComponentFixture<RecentWpmChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecentWpmChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentWpmChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
