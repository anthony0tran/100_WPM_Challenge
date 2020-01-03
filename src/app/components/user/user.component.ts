import {Component, OnInit} from '@angular/core';
import {UserService} from '../../services/user.service';
import {User} from '../../models/User';
import {DomSanitizer} from '@angular/platform-browser';
import {Chart} from 'chart.js';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  /**
   * Pass the service through the constructor
   */
  constructor(private userService: UserService, private sanitizer: DomSanitizer) { }

  // TODO: Get usernames from database instead of hardcoded.
  userNames: string[] = ['4n2h0ny', 'arenasnow', 'florentine'];
  usersList: User[] = [];
  chart: Chart = [];

  ngOnInit() {
    for (const userName of this.userNames) {
      this.userService.getUser(userName).subscribe(
        data => {
          if (typeof data !== 'undefined') {
            this.insertInArray(data);
          }

          const newDataSet = {
              label: data.id.slice(3, data.id.length),
              backgroundColor: this.getChartColor(this.chart),
              borderColor: this.getChartColor(this.chart),
              data: data.tstats.recentScores,
              fill: false,
            };

          this.chart.data.datasets.push(newDataSet);
          this.chart.update();
        }
      );
    }

    this.chart = new Chart('canvas', {
      type: 'line',
      data: {
        labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        datasets: [],
      },
      options: {
        responsive: true,
        title: {
          display: true,
          text: 'Last 10 matches',
          fontColor: 'white',
        },
        tooltips: {
          mode: 'index',
          intersect: false,
        },
        hover: {
          mode: 'nearest',
          intersect: true
        },
        scales: {
          xAxes: [{
            display: true,
            scaleLabel: {
              display: true,
              labelString: 'Matches',
              fontColor: 'white',
            }
          }],
          yAxes: [{
            display: true,
            scaleLabel: {
              display: true,
              labelString: 'WPM',
              fontColor: 'white',
            },
          }]
        }
      }
    });

  }

  // Insert on the right index based on the recent Average WPM.
  insertInArray(data: User) {
    // Just push the user in the array if the userList array is empty.
    if (this.usersList.length === 0) {
      this.usersList.push(data);
    } else {
      // Loop till the 'data: User' is faster than the user on index i.
      for (let i = 0; i < this.usersList.length; i++) {
        if (this.usersList[i].tstats.recentAvgWpm < data.tstats.recentAvgWpm) {
          // Insert 'data: User' on index i.
          this.usersList.splice(i, 0, data);
          return;
        }
      }

      // Push 'data: User' at the end of the array if none of the users in the array are slower.
      this.usersList.push(data);
    }
  }

  // Bypass for the avatar image is needed. The browser will otherwise throw a XSS vulnerability warning .
  getAvatarImage(avatar) {
    const urlString = 'https://data.typeracer.com/public/images/avatars/' + avatar;
    return this.sanitizer.bypassSecurityTrustStyle('url(' + urlString + ')');
  }

  getSkillLevel(level: string): string {
    const levels: string[] = ['Beginner', 'Intermediate', 'Average', 'Pro', 'Typemaster', 'MegaRacer'];

    // slice returns the selected string. e.g. "L5" <= sliced is "5".
    // splice returns the removed part "L5" <= spliced is "L".
    const positionNumber: number = +level.slice(1, level.length) - 1;
    return levels[positionNumber];
  }

  checkIfUserIdExists(user: User): string {
    if (typeof user !== 'undefined') {
      return user.id;
    } else {
      return '';
    }
  }

  getChartColor(chart: Chart): string {
    const colors = ['#4dc9f6', '#f67019', '#f53794', '#537bc4', '#acc236', '#166a8f', '#00a950', '#58595b', '#8549ba'];
    let datasetCounter = 0;

    for (const dataset of chart.data.datasets) {
      datasetCounter++;
    }

    if (datasetCounter > 9) {
      while (datasetCounter > 9) {
        datasetCounter -= 9;
      }
      return colors[datasetCounter];
    } else if (datasetCounter < 9 && datasetCounter !== 0) {
      return colors[datasetCounter];
    } else {
      return colors[datasetCounter];
    }
  }
}
