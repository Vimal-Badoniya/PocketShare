"use client";

import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Register required Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

interface PieChartProps {
  labels: string[];
  data: number[];
  colors?: string[];
}

const PieChart: React.FC<PieChartProps> = ({ labels, data, colors }) => {
  const dynamicColors =
    colors ||
    labels.map(
      () => `hsl(${Math.floor(Math.random() * 360)}, 70%, 50%)` // Generates random colors
    );

  const chartData = {
    labels,
    datasets: [
      {
        data,
        backgroundColor: dynamicColors,
        hoverBackgroundColor: dynamicColors.map((color) =>
          color.replace("50%", "60%")
        ), // Slightly brighter on hover
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top" as const },
      tooltip: { enabled: true },
    },
  };

  return <Pie data={chartData} options={options} />;
};

export default PieChart;
