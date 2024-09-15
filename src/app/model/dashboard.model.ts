import {
  ApexAxisChartSeries as ApexChartSeries,
  ApexChart as ApexChartOptions,
  ApexXAxis as ApexXAxisOptions,
  ApexDataLabels as ApexDataLabelsOptions,
  ApexStroke as ApexStrokeOptions,
  ApexMarkers as ApexMarkersOptions,
  ApexGrid as ApexGridOptions,
  ApexYAxis as ApexYAxisOptions,
  ApexTooltip as ApexTooltipOptions
} from 'ng-apexcharts';

export interface DashboardData {
  userName?: string;
  totalEmployees: number;
  activeEmployees: number;
  inactiveEmployees: number;
  membershipType: string;
  totalCost: number;
  loggedEmployees: number;
  mostTimeLogged?: {
    name?: string;
    hours?: number;
  };
  leastTimeLogged?: {
    name?: string;
    hours?: number;
  };
  employees: {
    name: string;
    avatar: string;
  }[];
  onLeave: {
    name: string;
    avatar: string;
    leaveType: string;
  }[];
  weeklyTimeLogs: {
    dayOfWeek: string;
    hoursWorked: number;
  }[];
}

export type ChartConfiguration = {
  series: ApexChartSeries;
  chart: ApexChartOptions;
  xaxis: ApexXAxisOptions;
  stroke: ApexStrokeOptions;
  markers: ApexMarkersOptions;
  grid: ApexGridOptions;
  yaxis: ApexYAxisOptions;
  tooltip: ApexTooltipOptions;
};


export const defaultChartConfig: ChartConfiguration = {
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
      show: false
    }
  },
  stroke: {
    curve: 'straight',
    width: 3,
    colors: ['#8B3FD6']
  },
  markers: {
    size: 6,
    colors: ['#8B3FD6'],
    strokeColors: '#fff',
    strokeWidth: 2,
    hover: {
      size: 8
    }
  },
  grid: {
    borderColor: '#e0e0e0',
    row: {
      opacity: 0.5
    }
  },
  xaxis: {
    categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    labels: {
      style: {
        colors: '#101828',
        fontSize: '12px',
        fontWeight: 500,
        fontFamily: 'Montserrat'
      }
    }
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
        fontFamily: 'Montserrat'
      },
      formatter: (value: number) => `${value}hr` // Add 'hr' suffix to Y-axis values
    }
  },
  tooltip: {
    y: {
      formatter: (value: number) => `${value} hours`
    }
  }
};
