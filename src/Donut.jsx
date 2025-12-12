import React from 'react';
import ReactApexChart from 'react-apexcharts';
import './Dashboard.css';

function Donut() {
  const [state, setState] = React.useState({
    series: [1200, 600], // Thub vs Non-Thub
    options: {
      chart: {
        type: 'donut',
      },
      labels: ['Thub', 'Non-Thub'],
      title: {
        text: 'Total Placement Distribution',
        align: 'center',
        style: {
          fontSize: '20px',
          fontWeight: 'bold',
          color: '#333'
        }
      },
      dataLabels: {
        enabled: true,
        formatter: (val, opts) => {
          const total = opts.w.globals.seriesTotals.reduce((a, b) => a + b, 0);
          const name = opts.w.globals.labels[opts.seriesIndex];
          const value = opts.w.globals.series[opts.seriesIndex];
          return `${name}: ${value} (${Math.round((value / total) * 100)}%)`;
        },
      },
      legend: {
        position: 'bottom',
        fontSize: '14px',
      },
      fill: {
        type: 'gradient',
      },
      plotOptions: {
        pie: {
          donut: {
            size: '60%',
            labels: {
              show: true,
              total: {
                show: true,
                label: 'Total',
                formatter: function (w) {
                  return w.globals.seriesTotals.reduce((a, b) => a + b, 0);
                },
              },
            },
          },
        },
      },
      colors: ['#008FFB', '#FF4560'], // blue for Thub, red for Non-Thub
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: { width: 300 },
            legend: { position: 'bottom' },
          },
        },
      ],
    },
  });

  return (
    <div
      id="donut-chart"
      style={{
        width: '500px',
        height: '500px',
        margin: 'auto',
        textAlign: 'center',
      }}
    >
      <ReactApexChart
        options={state.options}
        series={state.series}
        type="donut"
        width="100%"
        height="100%"
      />
    </div>
  );
}

export default Donut;
