//
// user.js
// Use this to write your custom JS
//

import './chart';

import {
  ArcElement,
  BarController,
  BarElement,
  BubbleController,
  CategoryScale,
  Chart,
  Decimation,
  DoughnutController,
  Filler,
  Legend,
  LineController,
  LineElement,
  LinearScale,
  LogarithmicScale,
  PieController,
  PointElement,
  PolarAreaController,
  RadarController,
  RadialLinearScale,
  ScatterController,
  TimeScale,
  TimeSeriesScale,
  Title,
  Tooltip,
} from 'chart.js';

Chart.register(
  ArcElement,
  BarController,
  BarElement,
  BubbleController,
  CategoryScale,
  Decimation,
  DoughnutController,
  Filler,
  Legend,
  LinearScale,
  LineController,
  LineElement,
  LogarithmicScale,
  PieController,
  PointElement,
  PolarAreaController,
  RadarController,
  RadialLinearScale,
  ScatterController,
  TimeScale,
  TimeSeriesScale,
  Title,
  Tooltip
);

// Audience chart

const audienceChart = document.getElementById('audienceChart');

if (audienceChart) {
  new Chart(audienceChart, {
    type: 'line',
    options: {
      scales: {
        yAxisOne: {
          display: 'auto',
          grid: {
            color: '#283E59',
          },
          ticks: {
            callback: function (value) {
              return value + 'k';
            },
          },
        },
        yAxisTwo: {
          display: 'auto',
          grid: {
            color: '#283E59',
          },
          ticks: {
            callback: function (value) {
              return value + '%';
            },
          },
        },
      },
    },
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      datasets: [
        {
          label: 'Customers',
          data: [0, 10, 5, 15, 10, 20, 15, 25, 20, 30, 25, 40],
          yAxisID: 'yAxisOne',
        },
        {
          label: 'Sessions',
          data: [50, 75, 35, 25, 55, 87, 67, 53, 25, 80, 87, 45],
          yAxisID: 'yAxisOne',
          hidden: true,
        },
        {
          label: 'Conversion',
          data: [40, 57, 25, 50, 57, 32, 46, 28, 59, 34, 52, 48],
          yAxisID: 'yAxisTwo',
          hidden: true,
        },
      ],
    },
  });
}

// Convertions chart

const conversionsChart = document.getElementById('conversionsChart');

if (conversionsChart) {
  new Chart(conversionsChart, {
    type: 'bar',
    options: {
      scales: {
        y: {
          ticks: {
            callback: function (val) {
              return val + '건';
            },
          },
        },
      },
    },
    data: {
      labels: [
        '5호기',
        '6호기',
        '제5,6호기 공용설비'
      ],
      datasets: [
        {
          label: '2020',
          data: [25, 140, 95, 22, 17, 10, 18, 26, 28, 26, 20, 32], // 데이터 리스트
        },
        {
          label: '2019',
          data: [15, 10, 20, 12, 7, 0, 8, 16, 18, 16, 10, 22],
          backgroundColor: '#d2ddec',
          hidden: true,
        },
      ],
    },
  });
}

// Traffic chart

const trafficChart = document.getElementById('trafficChart');

if (trafficChart) {
  new Chart(trafficChart, {
    type: 'doughnut',
    options: {
      plugins: {
        tooltip: {
          callbacks: {
            afterLabel: function () {
              return '건';
            },
          },
        },
      },
    },
    data: {
      labels: ['화기사용', '밀폐공간', '고소작업', '정전작업', '중량물취급', '굴착작업', '화학물질취급', '일반위험'],
      datasets: [
        {
          data: [60, 25, 15, 39, 82, 49, 12, 9],
          backgroundColor: ['#1B4F72', '#2C7BE5', '#2E86C1', '#A6C5F7','#85C1E9','#AED6F1', '#D2DDEC', '#EBF5FB'],
        },
        {
          data: [15, 45, 20, 60, 25, 15, 39],
          backgroundColor: ['#2C7BE5', '#A6C5F7', '#D2DDEC'],
          hidden: true,
        },
      ],
    },
  });
}

// Traffic chart (alt)

const trafficChartAlt = document.getElementById('trafficChartAlt');

if (trafficChartAlt) {
  new Chart(trafficChartAlt, {
    type: 'doughnut',
    options: {
      plugins: {
        tooltip: {
          callbacks: {
            afterLabel: function () {
              return '%';
            },
          },
        },
      },
    },
    data: {
      labels: ['Direct', 'Organic', 'Referral'],
      datasets: [
        {
          data: [60, 25, 15],
          backgroundColor: ['#2C7BE5', '#A6C5F7', '#D2DDEC'],
        },
        {
          data: [15, 45, 20],
          backgroundColor: ['#2C7BE5', '#A6C5F7', '#D2DDEC'],
          hidden: true,
        },
      ],
    },
  });
}

// Sales chart

const salesChart = document.getElementById('salesChart');

if (salesChart) {
  new Chart(salesChart, {
    type: 'line',
    options: {
      scales: {
        y: {
          ticks: {
            callback: function (value) {
              return '$' + value + 'k';
            },
          },
        },
      },
    },
    data: {
      labels: ['Oct 1', 'Oct 3', 'Oct 6', 'Oct 9', 'Oct 12', 'Oct 5', 'Oct 18', 'Oct 21', 'Oct 24', 'Oct 27', 'Oct 30'],
      datasets: [
        {
          label: 'All',
          data: [0, 10, 5, 15, 10, 20, 15, 25, 20, 30, 25],
        },
        {
          label: 'Direct',
          data: [7, 40, 12, 27, 34, 17, 19, 30, 28, 32, 24],
          hidden: true,
        },
        {
          label: 'Organic',
          data: [2, 12, 35, 25, 36, 25, 34, 16, 4, 14, 15],
          hidden: true,
        },
      ],
    },
  });
}

// Orders chart

const ordersChart = document.getElementById('ordersChart');

if (ordersChart) {
  new Chart(ordersChart, {
    type: 'bar',
    options: {
      scales: {
        y: {
          ticks: {
            callback: function (value) {
              return '$' + value + 'k';
            },
          },
        },
      },
    },
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      datasets: [
        {
          label: 'Sales',
          data: [25, 20, 30, 22, 17, 10, 18, 26, 28, 26, 20, 32],
        },
        {
          label: 'Affiliate',
          data: [15, 10, 20, 12, 7, 0, 8, 16, 18, 16, 10, 22],
          backgroundColor: '#d2ddec',
          hidden: true,
        },
      ],
    },
  });
}

// Earnings chart

const earningsChart = document.getElementById('earningsChart');

if (earningsChart) {
  new Chart(earningsChart, {
    type: 'bar',
    options: {
      scales: {
        yAxisOne: {
          display: 'auto',
          ticks: {
            callback: function (value) {
              return value + '건';
            },
          },
        },
        yAxisTwo: {
          display: 'auto',
          ticks: {
            callback: function (value) {
              return value + 'k';
            },
          },
        },
        yAxisThree: {
          display: 'auto',
          ticks: {
            callback: function (value) {
              return value + '건';
            },
          },
        },
      },
    },
    data: {
      labels: [
        '1월',
        '2월',
        '3월',
        '4월',
        '5월',
        '6월',
        '7월',
        '8월',
        '9월',
        '10월',
        '11월',
        '12월',
        
      ],
      datasets: [
        {
          label: 'Earnings',
          data: [18, 10, 5, 15, 10, 20, 15, 25, 20, 26, 25, 29, 18, 10, 5, 15, 10, 20],
          yAxisID: 'yAxisOne',
        },
        {
          label: 'Sessions',
          data: [50, 75, 35, 25, 55, 87, 67, 53, 25, 80, 87, 45, 50, 75, 35, 25, 55, 19],
          yAxisID: 'yAxisTwo',
          hidden: true,
        },
        {
          label: 'Bounce',
          data: [40, 57, 25, 50, 57, 32, 46, 28, 59, 34, 52, 48, 40, 57, 25, 50, 57, 29],
          yAxisID: 'yAxisThree',
          hidden: true,
        },
      ],
    },
  });
}

// Weekly hours chart

const weeklyHoursChart = document.getElementById('weeklyHoursChart');

if (weeklyHoursChart) {
  new Chart(weeklyHoursChart, {
    type: 'bar',
    options: {
      scales: {
        y: {
          ticks: {
            callback: function (value) {
              return value + 'hrs';
            },
          },
        },
      },
    },
    data: {
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      datasets: [
        {
          data: [21, 12, 28, 15, 5, 12, 17, 2],
        },
      ],
    },
  });
}

// Overview chart

const overviewChart = document.getElementById('overviewChart');

if (overviewChart) {
  new Chart(overviewChart, {
    type: 'line',
    options: {
      scales: {
        yAxisOne: {
          display: 'auto',
          ticks: {
            callback: function (value) {
              return '$' + value + 'k';
            },
          },
        },
        yAxisTwo: {
          display: 'auto',
          ticks: {
            callback: function (value) {
              return value + 'hrs';
            },
          },
        },
      },
    },
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      datasets: [
        {
          label: 'Earned',
          data: [0, 10, 5, 15, 10, 20, 15, 25, 20, 30, 25, 40],
          yAxisID: 'yAxisOne',
        },
        {
          label: 'Hours Worked',
          data: [7, 35, 12, 27, 34, 17, 19, 30, 28, 32, 24, 39],
          yAxisID: 'yAxisTwo',
          hidden: true,
        },
      ],
    },
  });
}

// Sparkline chart

const sparklineChart = document.getElementById('sparklineChart');

if (sparklineChart) {
  new Chart(sparklineChart, {
    type: 'line',
    options: {
      scales: {
        y: {
          display: false,
        },
        x: {
          display: false,
        },
      },
      elements: {
        line: {
          borderWidth: 2,
        },
        point: {
          hoverRadius: 0,
        },
      },
      plugins: {
        tooltip: {
          external: () => false,
        },
      },
    },
    data: {
      labels: new Array(12).fill('Label'),
      datasets: [
        {
          data: [0, 15, 10, 25, 30, 15, 40, 50, 80, 60, 55, 65],
        },
      ],
    },
  });
}

// Sparkline chart (gray)

const sparklineCharts = document.querySelectorAll(
  '#sparklineChartSocialOne, #sparklineChartSocialTwo, #sparklineChartSocialThree, #sparklineChartSocialFour'
);

if (sparklineCharts) {
  [].forEach.call(sparklineCharts, function (chart) {
    new Chart(chart, {
      type: 'line',
      options: {
        scales: {
          y: {
            display: false,
          },
          x: {
            display: false,
          },
        },
        elements: {
          line: {
            borderWidth: 2,
            borderColor: '#D2DDEC',
          },
          point: {
            hoverRadius: 0,
          },
        },
        plugins: {
          tooltip: {
            external: () => false,
          },
        },
      },
      data: {
        labels: new Array(12).fill('Label'),
        datasets: [
          {
            data: [0, 15, 10, 25, 30, 15, 40, 50, 80, 60, 55, 65],
          },
        ],
      },
    });
  });
}

// Feed chart

const feedChart = document.getElementById('feedChart');

if (feedChart) {
  new Chart(feedChart, {
    type: 'bar',
    options: {
      scales: {
        y: {
          ticks: {
            callback: function (value) {
              return '$' + value + 'k';
            },
          },
        },
      },
    },
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      datasets: [
        {
          label: 'Sales',
          data: [25, 20, 30, 22, 17, 10, 18, 26, 28, 26, 20, 32],
        },
        {
          label: 'Affiliate',
          data: [15, 10, 20, 12, 7, 0, 8, 16, 18, 16, 10, 22],
          backgroundColor: '#d2ddec',
          hidden: true,
        },
      ],
    },
  });
}
