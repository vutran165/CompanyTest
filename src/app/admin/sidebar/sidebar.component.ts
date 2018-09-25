import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import {
  faTh, faServer,
  faChartBar, faPlus,
  faLayerGroup, faTachometerAlt, faWrench, faHome, faFileContract
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  isActive: boolean = false;
  showMenu: string = '';
  pushRightClass: string = 'push-right';

  faTh = faTh;
  faServer = faServer;
  faChartBar = faChartBar;
  faPlus = faPlus;
  faLayerGroup = faLayerGroup;
  faTachometerAlt = faTachometerAlt;
  faWrench = faWrench;
  faHome = faHome;
  faFileContract = faFileContract;

  constructor(public router: Router) {

    this.router.events.subscribe(val => {
      if (
        val instanceof NavigationEnd &&
        window.innerWidth <= 992 &&
        this.isToggled()
      ) {
        this.toggleSidebar();
      }
    });
  }

  eventCalled() {
    this.isActive = !this.isActive;
  }

  isToggled(): boolean {
    const dom: Element = document.querySelector('body');
    return dom.classList.contains(this.pushRightClass);
  }

  toggleSidebar() {
    const dom: any = document.querySelector('body');
    dom.classList.toggle(this.pushRightClass);
  }

  addExpandClass(element: any) {
    if (element === this.showMenu) {
      this.showMenu = '0';
    } else {
      this.showMenu = element;
    }
  }

  onLoggedout() {
    localStorage.removeItem('isLoggedin');
  }

}
