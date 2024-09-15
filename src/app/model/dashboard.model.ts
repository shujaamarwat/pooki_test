import {
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexStroke,
  ApexMarkers,
  ApexGrid,
  ApexYAxis,
  ApexTooltip
} from 'ng-apexcharts';

export interface Dashboard {
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
    name: string;
    hours: number;
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
  timeLogData: {
    day: string;
    hours: number;
  }[];
}

export const dashboardDummy: Dashboard = {
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
    { name: 'John Doe', avatar: 'path/to/avatar1.jpg' },
    { name: 'Jane Doe', avatar: 'path/to/avatar2.jpg' },
  ],
  onLeave: [
    { name: 'John Doe', avatar: 'path/to/avatar1.jpg', leaveType: 'Sick' },
  ],
  timeLogData: [
    { day: 'Mon', hours: 10 },
    { day: 'Tue', hours: 5 },
    { day: 'Wed', hours: 8 },
    { day: 'Thu', hours: 8 },
    { day: 'Fri', hours: 9 },
    { day: 'Sat', hours: 2 },
    { day: 'Sun', hours: 2 },
  ],
};

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  markers: ApexMarkers;
  grid: ApexGrid;
  yaxis: ApexYAxis;
  tooltip: ApexTooltip;
};

export const defaultChart = {
  chart: {
    type: "line",
    height: 350,
    toolbar: {
      show: false  // Disable toolbar
    }
  },
  stroke: {
    curve: "smooth",
    width: 3,
    colors: ['#8B3FD6']  // Line color
  },
  markers: {
    size: 6,
    colors: ['#8B3FD6'],  // Marker color
    strokeColors: '#fff',
    strokeWidth: 2,
    hover: {
      size: 8  // Hover size for markers
    }
  },
  grid: {
    borderColor: "#e0e0e0",
    row: {
      colors: ["#f3f3f3", "transparent"], // Alternating row background
      opacity: 0.5
    }
  },
  xaxis: {
    categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],  // Weekdays
    labels: {
      style: {
        colors: "#101828",
        fontSize: "12px",
        fontWeight: 500,
        fontFamily: "Montserrat"
      }
    }
  },
  yaxis: {
    min: 0,
    max: 12,
    tickAmount: 6,
    labels: {
      style: {
        colors: "#101828",
        fontSize: "12px",
        fontWeight: 500,
        fontFamily: "Montserrat"
      },
      formatter: (val: any) => {
        return val + "hr";  // Add 'hr' suffix to Y-axis values
      }
    }
  },
  tooltip: {
    y: {
      formatter: (val: any) => {
        return val + " hours";
      }
    }
  }
};