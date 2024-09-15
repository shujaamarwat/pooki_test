import { Component } from '@angular/core';
import { DashboardData, defaultChartConfig, ChartConfiguration, sampleDashboardData } from '../../model/dashboard.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  public chartOptions: ChartConfiguration;
  public dashboardData: DashboardData;

  constructor() {
    this.dashboardData = sampleDashboardData
    this.chartOptions = defaultChartConfig;
  }
}
