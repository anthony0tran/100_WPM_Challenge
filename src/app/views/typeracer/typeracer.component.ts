import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {TyperacerService} from './typeracer.service';
import {TopBarService} from '../../shared/top-bar/top-bar.service';
import {Router} from '@angular/router';
import {RecentWpmChartComponent} from './recent-wpm-chart/recent-wpm-chart.component';

@Component({
  selector: 'app-typeracer',
  templateUrl: './typeracer.component.html',
  styleUrls: ['./typeracer.component.scss']
})
export class TyperacerComponent implements OnInit, OnDestroy {

  constructor(public typeracerService: TyperacerService,
              private topBarService: TopBarService,
              private router: Router)
  { }

  @ViewChild(RecentWpmChartComponent) recentWPMChartComponent: RecentWpmChartComponent;

  ngOnInit(): void {
    // Change the icon in the top-bar when the view is initialized
    this.topBarService.setRouteIcon(this.router.url);

    this.typeracerService.userNames.forEach(userName => {
      this.typeracerService.getUserStats(userName).toPromise().then(data => {
          this.typeracerService.AddUser(data);
          this.recentWPMChartComponent.fillRecentWPMChart(data);
        }
      );
    });
  }

  ngOnDestroy(): void {
    this.typeracerService.orderedUsers = [];
  }
}
