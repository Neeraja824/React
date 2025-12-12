import React, { useEffect, useRef, useState } from 'react';
const CHART_JS_CDN = "https://cdn.jsdelivr.net/npm/chart.js@4.4.3/dist/chart.umd.min.js";
function Appexchart() {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);
  
  const [data] = useState({
    labels: ["2019", "2020", "2021", "2022", "2023", "2024", "2025"],
    series: [
      {
        name: "T-HUB Placements",
        data: [40, 28, 51, 42, 109, 100, 96],
        color: '#3B82F6', 
      },
      {
        name: "NON-T-HUB Placements",
        data: [32, 45, 32, 34, 52, 41, 50],
        color: '#10B981', 
      },
    ],
  });
  const loadChartScript = () => {
    return new Promise((resolve) => {
      if (typeof window.Chart !== 'undefined') {
        return resolve();
      }
      const script = document.createElement('script');
      script.src = CHART_JS_CDN;
      script.onload = resolve;
      document.head.appendChild(script);
    });
  };
  useEffect(() => {
    loadChartScript().then(() => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      const ctx = chartRef.current.getContext('2d');
      
      const chartData = {
        labels: data.labels,
        datasets: data.series.map(s => ({
          label: s.name,
          data: s.data,
          borderColor: s.color,
          backgroundColor: s.color + '33', 
          fill: true,
          tension: 0.4, 
          pointRadius: 4,
          pointHoverRadius: 6,
        }))
      };

      chartInstance.current = new window.Chart(ctx, {
        type: 'line', 
        data: chartData,
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: 'top',
            },
            title: {
              display: false,
            },
          },
          scales: {
            x: {
              title: {
                display: true,
                text: 'Academic Year',
                font: { weight: 'bold' }
              },
              grid: { display: false }
            },
            y: {
              title: {
                display: true,
                text: 'Total Students Placed',
                font: { weight: 'bold' }
              },
              beginAtZero: true,
            }
          },
        },
      });
    });
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [data]); 

  return (
    <div id="placement-chart-container">
      <h2>Placement Trends: T-Hub vs Non-T-Hub</h2>
      <div style={{ position: 'relative', height: '100%', width: '100%' }}>
        <canvas ref={chartRef} id="placement-chart"></canvas>
      </div>
    </div>
  );
}

export default Appexchart;