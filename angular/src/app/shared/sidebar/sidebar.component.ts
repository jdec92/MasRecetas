import {Component, OnInit} from '@angular/core';
import {GlobalConstants} from '../../common/global-constants';
import {RouteInfo} from '../../models/routeInfo';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: RouteInfo[];

  constructor() { }

  ngOnInit() {
    this.menuItems = GlobalConstants.getRouteInfo;
  }

  isMobileMenu() {
    if ($(window).width() > 991) {
      return false;
    }
    return true;
  };
}
