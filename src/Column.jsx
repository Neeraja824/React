import React from 'react';
import ReactApexChart from 'react-apexcharts';

function Column() {
  const [state, setState] = React.useState({
    series: [
      {
        name: 'STOCK ABC',
        data: [8107.85, 8128.0, 8122.9, 8165.5, 8340.7, 8423.7, 8423.5, 8514.3, 8481.85, 8487.7, 8506.9, 8626.2],
      },
    ],
    options: {
      chart: {
        type: 'area',
        height: 350,
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'straight',
      },
      title: {
        text: 'Fundamental Analysis of Stocks',
        align: 'left',
      },
      subtitle: {
        text: 'Price Movements',
        align: 'left',
      },
      labels: [
        '13 Nov 2023',
        '14 Nov 2023',
        '15 Nov 2023',
        '16 Nov 2023',
        '17 Nov 2023',
        '20 Nov 2023',
        '21 Nov 2023',
        '22 Nov 2023',
        '23 Nov 2023',
        '24 Nov 2023',
        '27 Nov 2023',
        '28 Nov 2023',
      ],
      xaxis: {
        type: 'datetime',
      },
      yaxis: {
        opposite: true,
      },
      legend: {
        horizontalAlign: 'left',
      },
    },
  });

  return (
    <div id="column-chart" style={{ width: '100%', maxWidth: '700px', margin: 'auto' }}>
      <ReactApexChart options={state.options} series={state.series} type="area" height={400} />
    </div>
  );
}

export default Column;
