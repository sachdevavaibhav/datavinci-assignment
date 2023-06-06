import {Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend} from 'chart.js';
import { Bar } from 'react-chartjs-2';
  
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

import { useContext } from 'react';
import { DataContext } from '../context/DataContext';

export const BarChart = () => {
    const { revenueByCategory } = useContext(DataContext);
    const {category, revenue} = revenueByCategory;

    const chartData = {
        labels: category,
        datasets: [
          {
            label: "Revenue",
            data: revenue,
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(255, 159, 64, 0.2)",
              "rgba(255, 205, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(54, 162, 235, 0.2)",
            ],
            borderColor: [
              "rgb(255, 99, 132)",
              "rgb(255, 159, 64)",
              "rgb(255, 205, 86)",
              "rgb(75, 192, 192)",
              "rgb(54, 162, 235)",
            ],
            borderWidth: 1,
          },
        ],
      };

    const chartOptions = {
        indexAxis: 'y',
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      };

    return (
        <div className="chart-container">
            <Bar data={chartData} options={chartOptions} />
        </div>
    );

}