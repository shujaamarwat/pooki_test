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

// Dashboard Data Interface
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

// Sample Dashboard Data
export const sampleDashboardData: DashboardData = {
  userName: 'Muhammad Hamza',
  totalEmployees: 12,
  activeEmployees: 10,
  inactiveEmployees: 2,
  membershipType: 'Standard',
  totalCost: 35.88,
  loggedEmployees: 8,
  mostTimeLogged: { name: 'John Doe', hours: 5 },
  leastTimeLogged: { name: 'Jane Doe', hours: 2 },
  employees: [
    { name: 'John Doe', avatar: 'https://placehold.co/27x27' },
    { name: 'Jane Doe', avatar: 'https://placehold.co/27x27' },
  ],
  onLeave: [
    { name: 'John Doe', avatar: 'https://placehold.co/27x27', leaveType: '🤒 Sick' },
    { name: 'Jane Doe', avatar: 'https://placehold.co/27x27', leaveType: '🤒 Sick' },
  ],
  weeklyTimeLogs: [
    { dayOfWeek: 'Mon', hoursWorked: 10 },
    { dayOfWeek: 'Tue', hoursWorked: 5 },
    { dayOfWeek: 'Wed', hoursWorked: 8 },
    { dayOfWeek: 'Thu', hoursWorked: 8 },
    { dayOfWeek: 'Fri', hoursWorked: 9 },
    { dayOfWeek: 'Sat', hoursWorked: 2 },
    { dayOfWeek: 'Sun', hoursWorked: 2 },
  ],
};

// Chart Options Type
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

// Default Chart Configuration
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
