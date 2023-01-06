import { Component } from '@angular/core';
import { navbarData } from './nav-data';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.sass']
})
export class SidenavComponent {
  collapsed = false;
  navData = navbarData;

  toogleCollapse(): void{
    this.collapsed = !this.collapsed;
  }

  closeSidenav(): void{
    this.collapsed = false;
  }



}
