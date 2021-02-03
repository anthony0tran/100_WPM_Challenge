import { Component, OnInit } from '@angular/core';
import {TopBarService} from "../../shared/top-bar/top-bar.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  constructor(private topBarService: TopBarService,
              private router: Router) { }

  ngOnInit(): void {
    this.topBarService.setRouteIcon(this.router.url);
  }

}
