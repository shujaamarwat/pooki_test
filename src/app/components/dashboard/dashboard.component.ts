import { Component, OnInit } from '@angular/core';
import { DashboardData, defaultChartConfig, ChartConfiguration } from '../../model/dashboard.model';
import { PopulateService } from '../../services/populate.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public chartOptions: ChartConfiguration;
  public dashboardData!: DashboardData;

  constructor(private populateService: PopulateService) {
    this.chartOptions = defaultChartConfig;
  }

  ngOnInit(): void {
    this.loadDashboardData();
  }

  loadDashboardData(): void {
    this.populateService.getDashboardData().subscribe((data) => {
      this.dashboardData = data;
    });
  }

}
