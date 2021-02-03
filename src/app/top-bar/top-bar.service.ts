import { Injectable } from '@angular/core';
import { faBars, faKeyboard, faLaptopCode, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Injectable({
  providedIn: 'root'
})
export class TopBarService {

  routeIcon: IconDefinition = faLaptopCode;

  constructor() { }

  // Change the center icon based on the current route.
  setRouteIcon(currentRoute: string) {
    switch(currentRoute) {
      case '':
        this.routeIcon = faLaptopCode;
        break;
      case '/typeracer':
        this.routeIcon = faKeyboard;
        break;
      default:
        this.routeIcon = faLaptopCode;
        break;
    }
  }

  getRouteIcon(): IconDefinition {
    return this.routeIcon;
  }
}
