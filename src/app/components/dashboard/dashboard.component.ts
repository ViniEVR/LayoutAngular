import { Component } from '@angular/core';
import { dashboardData } from './dashboard-data';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent {

  dashboardData = dashboardData;

}
