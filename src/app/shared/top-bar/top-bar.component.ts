import {Component, OnInit} from '@angular/core';
import { faBars, faKeyboard, faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import {SideMenuService} from '../side-menu/side-menu.service';
import {Router} from '@angular/router';
import {TopBarService} from './top-bar.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {

  // declaring fontawesome variable.
  faBars = faBars;
  faKeyBoard = faKeyboard;
  faLaptopCode = faLaptopCode;

  showKeyBoard = false;
  showLapTopCode = false;

  constructor(private sideMenuService: SideMenuService,
              private router: Router,
              public topBarService: TopBarService) { }

  ngOnInit(): void {
    this.checkTopBarIcon();
  }

  sideMenuClick(): void {
    this.sideMenuService.collapseSideMenu();
  }

  sideMenuMobileClick(): void {
    // TODO: implement menu for mobile.
    alert('Mobile menu needs to be implemented');
  }

  // rotate the menu icon when the side menu is active.
  rotateMenuIcon(): void {
    console.log('rotateMenuIcon called');
    const sideMenuBarsIcon = document.getElementById('sideMenuBarsIconContainer');
    sideMenuBarsIcon.classList.toggle('activeSideMenu');
    sideMenuBarsIcon.classList.toggle('menuBarsCollapsed');
  }

  checkTopBarIcon(): void {
    if (this.router.url === '/typeracer') {
      this.showKeyBoard = true;
    }

    switch (this.router.url) {
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

  dropDown(): void {
    document.getElementById('myDropdown').classList.toggle('show');
  }
}
