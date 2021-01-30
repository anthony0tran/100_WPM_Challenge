import {Component, OnInit} from '@angular/core';
import { faBars, faKeyboard, faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import {SideMenuService} from "../side-menu/side-menu.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {

  // declaring fontawesome variable.
  faBars = faBars;
  faKeyBoard = faKeyboard;
  faLaptopCode = faLaptopCode

  showKeyBoard = false;
  showLapTopCode = false;

  constructor(private sideMenuService: SideMenuService, private router: Router) { }

  ngOnInit(): void {
    this.checkTopBarIcon();
  }

  sideMenuClick() {
    this.sideMenuService.collapseSideMenu();
  }

  // rotate the menu icon when the side menu is active.
  rotateMenuIcon() {
    let sideMenuBarsIcon = document.getElementById('sideMenuBarsIconContainer');
    sideMenuBarsIcon.classList.toggle('activeSideMenu');
    sideMenuBarsIcon.classList.toggle('menuBarsCollapsed');
  }

  checkTopBarIcon() {
    if (this.router.url === '/typeracer') {
      this.showKeyBoard = true;
    }

    switch(this.router.url) {
      case '': {
        this.showLapTopCode = true;
        break;
      }
      case '/typeracer': {
        this.showKeyBoard = true;
        break;
      }
      default: {
        this.showLapTopCode = true;
        break;
      }
    }
  }
}
