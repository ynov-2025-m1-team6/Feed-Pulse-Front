"use client";

import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
);

type VolumetryByDay = {
  [date: string]: number;
};

type Props = {
  volumetryByDay: VolumetryByDay;
};

const LineChart: React.FC<Props> = ({ volumetryByDay }) => {
  const dates = Object.keys(volumetryByDay).sort(); // Tri par date
  const values = dates.map((date) => volumetryByDay[date]);

  const data = {
    labels: dates,
    datasets: [
      {
        label: "Volumétrie par jour",
        data: values,
        fill: false,
        borderColor: "#4a90e2",
        tension: 0.2,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, // Permet de contrôler la hauteur manuellement
    plugins: {
      legend: {
        position: "bottom" as const,
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Date",
        },
      },
      y: {
        title: {
          display: true,
          text: "Volume",
        },
        beginAtZero: true,
      },
    },
  };

  return (
    <div style={{ width: "100%", height: "400px" }}>
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;
