import {Component, OnInit, ElementRef, ViewChild, AfterViewInit} from '@angular/core';
import {TyperacerService} from '../typeracer.service';
import {User} from '../../../models/user';
import {LineChartDataSet} from '../../../models/lineChartDataSet';
import {
  CategoryScale,
  Chart,
  Legend,
  LinearScale,
  LineController,
  LineElement,
  PointElement,
  Title,
  Tooltip
} from 'chart.js';

@Component({
  selector: 'app-recent-wpm-chart',
  templateUrl: './recent-wpm-chart.component.html',
  styleUrls: ['./recent-wpm-chart.component.scss']
})
export class RecentWpmChartComponent implements OnInit, AfterViewInit {

  constructor(private typeRacerService: TyperacerService) {
  }
  @ViewChild('recentWPMChartElement') recentWPMChartElement: ElementRef;
  recentWPMChart: Chart;
  colors: string[] = [
    '#d9534f',
    '#5bc0de',
    '#5cb85c',
    '#428bca',
    '#feda75',
    '#fa7e1e',
    '#d62976',
    '#962fbf',
    '#4f5bd5',
    '#006666'
  ];
  colorIndex = 0;

  ngOnInit(): void {
    // const ctx = document.getElementById('myChart').getContext('2d');
  }

  ngAfterViewInit(): void {

    Chart.register(
      LineElement,
      LineController,
      CategoryScale,
      LinearScale,
      PointElement,
      Tooltip,
      Legend,
      Title
    );

    this.recentWPMChart = new Chart(this.recentWPMChartElement.nativeElement.getContext('2d'), {
      type: 'line',
      data: {
        labels: ['Match 1', 'Match 2', 'Match 3', 'Match 4', 'Match 5',
        'Match 6', 'Match 7', 'Match 8', 'Match 9', 'Match 10'],
        datasets: []
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'bottom',
          },
          title: {
            display: true,
            text: 'Recent WPM'
          }
        }
      }
    });
  }

  /**
   * Adds the user to the chart. This function is called when the promise to fetch the user is completed.
   *
   * @param user The user that is fetched from the api.
   */
  fillRecentWPMChart(user: User): void {
    let userDataSet: LineChartDataSet;
    const currentColor: string = this.chartColorPicker();

    userDataSet = {
      backgroundColor: currentColor,
      borderColor: currentColor,
      data: user.tstats.recentScores,
      label: user.id.slice(3),
      tension: 0.4,
      hidden: false
    };


    this.recentWPMChart.data.datasets.push(userDataSet);
    this.recentWPMChart.update();
  }

  /**
   * This function makes sure the colors are evenly distributed among the users in the chart.
   *
   * @return a hexadecimal color from colors[]
   */
  chartColorPicker(): string {
    const dataSetColor = this.colors[this.colorIndex];
    if (this.colorIndex >= this.colors.length) {
      this.colorIndex = 0;
      return dataSetColor;
    } else {
      this.colorIndex++;
    }

    return dataSetColor;
  }

  updateRecentWpmChart(): void {
    if (this.typeRacerService.selectedUsers.length === 0) {
      this.recentWPMChart.data.datasets.forEach(dataSet => {
        dataSet.hidden = false;
      });
    } else {
      this.recentWPMChart.data.datasets.forEach(dataSet => {
        dataSet.hidden = true;
      });
    }

    this.recentWPMChart.data.datasets.forEach(dataSet => {
      this.typeRacerService.selectedUsers.forEach(selectedUser => {
        if ('tr:' + dataSet.label === selectedUser.id) {
          dataSet.hidden = false;
        }
      });
    });

    console.log('updateRecentWpmChart', this.typeRacerService.selectedUsers);

    this.recentWPMChart.update();
  }
}
