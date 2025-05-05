import React from "react";
import styles from "./page.module.scss";
import MetricCard from "@/components/Cards/MetricCard";
import { getMetrics } from "@/actions/dashboard";
import { IMetrics } from "@/interfaces";
import LineChart from "@/components/Charts/Linechart";

export const metricsData = [
  {
    label: "Total Dépenses",
    data: "245.00 €",
    backgroundColor: "green",
  },
  {
    label: "Revenus Mensuels",
    data: "1 800.00 €",
    backgroundColor: "blue",
  },
  {
    label: "Épargne",
    data: "450.00 €",
    backgroundColor: "pink",
  },
  {
    label: "Investissements",
    data: "320.00 €",
    backgroundColor: "orange",
  },
];

export default async function page() {
  const metrics: IMetrics = await getMetrics();
  console.log(metrics);

  const getBackgroundColor = (index: number): string => {
    const colors = ["green", "blue", "pink", "orange"];
    return colors[index % colors.length];
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.page_header}>
        <h2>metrics</h2>
      </div>
      <div className={styles.page_main}>
        <div className={styles.volumetrie}>
          <LineChart volumetryByDay={metrics.volumetryByDay} />
        </div>
        <div className={styles.metrics_list_channel}>
          <div className={styles.metrics_list_header}>
            <h3>distribution by channels</h3>
          </div>
          <div className={styles.metrics_list_content}>
            {metrics?.distributionByTopic &&
              Object.entries(metrics.distributionByChannel).map(
                ([label, data], i) => (
                  <MetricCard
                    key={i}
                    label={label}
                    data={data}
                    backgroundColor={getBackgroundColor(i)}
                    cardSize="small"
                    unit="%"
                  />
                ),
              )}
          </div>
        </div>
        <div className={styles.metrics_list_topic}>
          <div className={styles.metrics_list_header}>
            <h3>distribution by topics</h3>
          </div>
          <div className={styles.metrics_list_content}>
            {metrics?.distributionByTopic &&
              Object.entries(metrics.distributionByTopic).map(
                ([label, data], i) => (
                  <MetricCard
                    key={i}
                    label={label}
                    data={data}
                    backgroundColor={getBackgroundColor(i)}
                    cardSize="small"
                    unit="%"
                  />
                ),
              )}
          </div>
        </div>
        <div>
          <MetricCard
            label={"average sentiment"}
            data={metrics.averageSentiment}
            backgroundColor={"blue"}
            cardSize="small"
            unit="%"
          />
        </div>
        <div>
          <MetricCard
            label={"positive sentiment"}
            data={metrics.Sentiment.positive}
            backgroundColor={"green"}
            cardSize="small"
            unit="%"
          />
        </div>
        <div>
          <MetricCard
            label={"negative sentiment"}
            data={metrics.Sentiment.negative}
            backgroundColor={"orange"}
            cardSize="small"
            unit="%"
          />
        </div>
        <div>
          <MetricCard
            label={"sentiment under treshold"}
            data={metrics.percentageSentimentUnderTreshold}
            backgroundColor={"pink"}
            cardSize="small"
            unit="%"
          />
        </div>
      </div>
    </div>
  );
}
