import { Component } from '@angular/core';
import { DashboardService } from '../../services/dashboard.service';
import {
  Dashboard,
  dashboardDummy,
  ChartOptions,
  defaultChart,
} from '../../model/dashboard.model';
import { ApexAxisChartSeries } from 'ng-apexcharts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {

  public chartOptions: ChartOptions;

  dashboardData: Dashboard = dashboardDummy;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: 'Logged Hours',
          data: [10, 6, 8, 8, 8, 10, 2],
        },
      ],
      chart: {
        type: 'line',
        height: 350,
        toolbar: {
          show: false, // Disable toolbar
        },
      },
      stroke: {
        curve: 'straight',
        width: 3,
        colors: ['#8B3FD6'], // Line color
      },
      markers: {
        size: 6,
        colors: ['#8B3FD6'], // Marker color
        strokeColors: '#fff',
        strokeWidth: 2,
        hover: {
          size: 8, // Hover size for markers
        },
      },
      grid: {
        borderColor: '#e0e0e0',
        row: {
          colors: ['#f3f3f3', 'transparent'], // Alternating row background
          opacity: 0.5,
        },
      },
      xaxis: {
        categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'], // Weekdays
        labels: {
          style: {
            colors: '#101828',
            fontSize: '12px',
            fontWeight: 500,
            fontFamily: 'Montserrat',
          },
        },
      },
      yaxis: {
        min: 0,
        max: 12,
        tickAmount: 6,
        labels: {
          style: {
            colors: '#101828',
            fontSize: '12px',
            fontWeight: 500,
            fontFamily: 'Montserrat',
          },
          formatter: (val: any) => {
            return val + 'hr'; // Add 'hr' suffix to Y-axis values
          },
        },
      },
      tooltip: {
        y: {
          formatter: (val: any) => {
            return val + ' hours';
          },
        },
      },
    };
  }
}
