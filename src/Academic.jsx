import React, { useState } from 'react';
import Chart from 'react-apexcharts';
import './Dashboard.css';

const Academic = () => {
  const [chartState] = useState({
    series: [
      {
        name: 'Passed All Subjects',
        data: [150, 180, 50, 60, 110],
      },
      {
        name: 'Has Backlogs',
        data: [50, 20, 50, 40, 40], 
      },
    ],
    options: {
      chart: {
        type: 'bar',
        height: '100%',
        stacked: true, 
        toolbar: {
          show: false,
        },
        background: 'transparent'
      },
      plotOptions: {
        bar: {
          horizontal: false, 
        },
      },
      xaxis: {
        categories: ['CSE', 'ECE', 'ME', 'CE', 'EEE'], 
        title: {
          text: 'Department',
          style: {
            fontSize: '14px',
            fontWeight: 600,
          },
        },
      },
      yaxis: {
        title: {
          text: 'Number of Students', 
          style: {
            fontSize: '14px',
            fontWeight: 600,
          },
        },
      },
      fill: {
        opacity: 1,
      },
      legend: {
        position: 'top',
        horizontalAlign: 'left',
        offsetX: 40,
      },
      colors: ['#00E396', '#FF4560'], 
      title: {
        text: 'Academic Status by Department',
        align: 'left',
        margin: 10,
        style: {
          fontSize: '16px',
          fontWeight: '600',
          color: '#1f2937',
        },
      },
      dataLabels: {
        enabled: false, 
      },
    },
  });

  return (
    <div id="academic-chart">
      <Chart
        options={chartState.options}
        series={chartState.series}
        type="bar"
        height="100%"
        width="100%"
      />
    </div>
  );
};

export default Academic;