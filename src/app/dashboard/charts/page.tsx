import React from "react";
import styles from "./page.module.scss";
import DoughnutChart from "@/components/Charts/Doughnut";
import Barchart from "@/components/Charts/Barchart";
import PieChart from "@/components/Charts/Piechart";
import {
  BarChartData,
  DoughnutChartData,
  IMetrics,
  PieChartData,
} from "@/interfaces";
import { getMetrics } from "@/actions/dashboard";

export default async function page() {
  const metrics: IMetrics = await getMetrics();
  console.log(metrics);

  let channelsFormattedData: BarChartData[] = [];
  let pieChartformattedData: PieChartData[] = [];
  let doughnutformattedSentiment: DoughnutChartData[] = [];

  if (metrics) {
    channelsFormattedData = Object.entries(metrics?.distributionByChannel).map(
      ([label, value]) => ({
        label,
        value,
      }),
    );

    doughnutformattedSentiment = Object.entries(metrics?.Sentiment).map(
      ([label, value]) => ({
        label,
        value,
      }),
    );

    pieChartformattedData = Object.entries(metrics?.distributionByTopic).map(
      ([label, value]) => ({
        label,
        value,
      }),
    );
  }
  return (
    <div className={styles.wrapper}>
      <div className={styles.page_header}>
        <h2>metrics</h2>
      </div>
      <div className={styles.page_main}>
        <div className={styles.channelsChart}>
          <DoughnutChart data={doughnutformattedSentiment} />
        </div>
        <div className={styles.topicsChart}>
          <PieChart data={pieChartformattedData} />
        </div>
        <div className={styles.topicsChart}>
          <Barchart data={channelsFormattedData} />
        </div>
      </div>
    </div>
  );
}
