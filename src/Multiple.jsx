import React from 'react';
import ReactApexChart from 'react-apexcharts';
import './Dashboard.css';

function Multiple() {
  const options = {
    chart: {
      height: '100%',
      type: 'radialBar',
      background: 'transparent'
    },
    plotOptions: {
      radialBar: {
        dataLabels: {
          name: {
            fontSize: '22px',
          },
          value: {
            fontSize: '16px',
          },
          total: {
            show: true,
            label: 'Total',
            formatter: function () {
              return 249;
            },
          },
        },
      },
    },
    labels: ['JavaScript', 'Python', 'Java', 'C++','DSA' ]
  };

  const series = [40,75,80,78,50];

  return (
    <div id="multiple-chart">
      <h2>Skills Rate</h2>
      <ReactApexChart options={options} series={series} type="radialBar" height="100%" width="100%" />
    </div>
  );
}

export default Multiple;