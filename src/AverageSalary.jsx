import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import "./Dashboard.css";

function AverageSalary() {
  const [state] = useState({
    series: [
      {
        name: "Min Package",
        type: "column",
        data: [3, 3.5, 4, 3.8, 4.2, 4.5, 4.8, 5], // in lakhs per year
      },
      {
        name: "Max Package",
        type: "column",
        data: [12, 13, 15, 14, 16, 17, 18, 20], // in lakhs per year
      },
      {
        name: "Average Package",
        type: "line",
        data: [6, 7, 8, 7.5, 8.5, 9, 10, 11], // in lakhs per year
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "line",
        stacked: false,
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: [1, 1, 4],
      },
      title: {
        text: "College Placement Packages (2016 - 2023)",
        align: "left",
        offsetX: 110,
      },
      xaxis: {
        categories: [2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023],
      },
      yaxis: [
        {
          seriesName: "Min Package",
          axisTicks: { show: true },
          axisBorder: { show: true, color: "#008FFB" },
          labels: { style: { colors: "#008FFB" } },
          title: { text: "Min Package (LPA)", style: { color: "#008FFB" } },
          tooltip: { enabled: true },
        },
        {
          seriesName: "Max Package",
          opposite: true,
          axisTicks: { show: true },
          axisBorder: { show: true, color: "#00E396" },
          labels: { style: { colors: "#00E396" } },
          title: { text: "Max Package (LPA)", style: { color: "#00E396" } },
        },
        {
          seriesName: "Average Package",
          opposite: true,
          axisTicks: { show: true },
          axisBorder: { show: true, color: "#FEB019" },
          labels: { style: { colors: "#FEB019" } },
          title: { text: "Average Package (LPA)", style: { color: "#FEB019" } },
        },
      ],
      tooltip: {
        fixed: {
          enabled: true,
          position: "topLeft",
          offsetY: 30,
          offsetX: 60,
        },
      },
      legend: {
        horizontalAlign: "left",
        offsetX: 40,
      },
    },
  });

  return (
    <div id="chart">
      <ReactApexChart options={state.options} series={state.series} type="line" height={350} />
    </div>
  );
}

export default AverageSalary;

