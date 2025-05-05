"use client";

import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, TooltipItem } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { DoughnutChartData } from "@/interfaces";

ChartJS.register(ArcElement, Tooltip, Legend);
type Props = {
  data: DoughnutChartData[];
};

const COLORS = [
  "#8884d8",
  "#82ca9d",
  "#ffc658",
  "#ff7f50",
  "#8dd1e1",
  "#a4de6c",
  "#d0ed57",
  "#ffc0cb",
  "#d3a4ff",
  "#a4b0be",
];

const DoughnutChart: React.FC<Props> = ({ data }) => {
  const chartData = {
    labels: data.map((item) => item.label),
    datasets: [
      {
        data: data.map((item) => item.value),
        backgroundColor: COLORS.slice(0, data.length),
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    cutout: "70%", // doughnut effect
    plugins: {
      legend: {
        position: "bottom" as const,
      },
      tooltip: {
        callbacks: {
          label: (context: TooltipItem<'doughnut'>) => {
            const label = context.label || "";
            const value = context.raw;
            return `${label}: ${value}`;
          },
        },
      },
    },
  };

  return <Doughnut data={chartData} options={options} />;
};

export default DoughnutChart;
